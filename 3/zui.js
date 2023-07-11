var br = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
};
var x = (e, t, n) => (br(e, t, "read from private field"), n ? n.call(e) : t.get(e)), D = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, O = (e, t, n, s) => (br(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n);
var Dt = (e, t, n) => (br(e, t, "access private method"), n);
const jt = document, pi = window, Dl = jt.documentElement, He = jt.createElement.bind(jt), Ll = He("div"), xr = He("table"), Ed = He("tbody"), Ua = He("tr"), { isArray: er, prototype: Il } = Array, { concat: Nd, filter: Io, indexOf: Wl, map: Ol, push: Rd, slice: Hl, some: Wo, splice: Ad } = Il, Pd = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Dd = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ld = /<.+>/, Id = /^\w+$/;
function Oo(e, t) {
  const n = Wd(t);
  return !e || !n && !De(t) && !Y(t) ? [] : !n && Dd.test(e) ? t.getElementsByClassName(e.slice(1).replace(/\\/g, "")) : !n && Id.test(e) ? t.getElementsByTagName(e) : t.querySelectorAll(e);
}
class nr {
  constructor(t, n) {
    if (!t)
      return;
    if (Br(t))
      return t;
    let s = t;
    if (st(t)) {
      const i = n || jt;
      if (s = Pd.test(t) && De(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Ld.test(t) ? Fl(t) : Br(i) ? i.find(t) : st(i) ? m(i).find(t) : Oo(t, i), !s)
        return;
    } else if (Be(t))
      return this.ready(t);
    (s.nodeType || s === pi) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, n) {
    return new nr(t, n);
  }
}
const C = nr.prototype, m = C.init;
m.fn = m.prototype = C;
C.length = 0;
C.splice = Ad;
typeof Symbol == "function" && (C[Symbol.iterator] = Il[Symbol.iterator]);
function Br(e) {
  return e instanceof nr;
}
function vn(e) {
  return !!e && e === e.window;
}
function De(e) {
  return !!e && e.nodeType === 9;
}
function Wd(e) {
  return !!e && e.nodeType === 11;
}
function Y(e) {
  return !!e && e.nodeType === 1;
}
function Od(e) {
  return !!e && e.nodeType === 3;
}
function Hd(e) {
  return typeof e == "boolean";
}
function Be(e) {
  return typeof e == "function";
}
function st(e) {
  return typeof e == "string";
}
function ct(e) {
  return e === void 0;
}
function Qn(e) {
  return e === null;
}
function Bl(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Ho(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return t === null || t === Object.prototype;
}
m.isWindow = vn;
m.isFunction = Be;
m.isArray = er;
m.isNumeric = Bl;
m.isPlainObject = Ho;
function J(e, t, n) {
  if (n) {
    let s = e.length;
    for (; s--; )
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  } else if (Ho(e)) {
    const s = Object.keys(e);
    for (let i = 0, r = s.length; i < r; i++) {
      const o = s[i];
      if (t.call(e[o], o, e[o]) === !1)
        return e;
    }
  } else
    for (let s = 0, i = e.length; s < i; s++)
      if (t.call(e[s], s, e[s]) === !1)
        return e;
  return e;
}
m.each = J;
C.each = function(e) {
  return J(this, e);
};
C.empty = function() {
  return this.each((e, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function mi(...e) {
  const t = Hd(e[0]) ? e.shift() : !1, n = e.shift(), s = e.length;
  if (!n)
    return {};
  if (!s)
    return mi(t, m, n);
  for (let i = 0; i < s; i++) {
    const r = e[i];
    for (const o in r)
      t && (er(r[o]) || Ho(r[o])) ? ((!n[o] || n[o].constructor !== r[o].constructor) && (n[o] = new r[o].constructor()), mi(t, n[o], r[o])) : n[o] = r[o];
  }
  return n;
}
m.extend = mi;
C.extend = function(e) {
  return mi(C, e);
};
const Bd = /\S+/g;
function sr(e) {
  return st(e) ? e.match(Bd) || [] : [];
}
C.toggleClass = function(e, t) {
  const n = sr(e), s = !ct(t);
  return this.each((i, r) => {
    Y(r) && J(n, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(e) {
  return this.toggleClass(e, !0);
};
C.removeAttr = function(e) {
  const t = sr(e);
  return this.each((n, s) => {
    Y(s) && J(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function zd(e, t) {
  if (e) {
    if (st(e)) {
      if (arguments.length < 2) {
        if (!this[0] || !Y(this[0]))
          return;
        const n = this[0].getAttribute(e);
        return Qn(n) ? void 0 : n;
      }
      return ct(t) ? this : Qn(t) ? this.removeAttr(e) : this.each((n, s) => {
        Y(s) && s.setAttribute(e, t);
      });
    }
    for (const n in e)
      this.attr(n, e[n]);
    return this;
  }
}
C.attr = zd;
C.removeClass = function(e) {
  return arguments.length ? this.toggleClass(e, !1) : this.attr("class", "");
};
C.hasClass = function(e) {
  return !!e && Wo.call(this, (t) => Y(t) && t.classList.contains(e));
};
C.get = function(e) {
  return ct(e) ? Hl.call(this) : (e = Number(e), this[e < 0 ? e + this.length : e]);
};
C.eq = function(e) {
  return m(this.get(e));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function Fd(e) {
  return ct(e) ? this.get().map((t) => Y(t) || Od(t) ? t.textContent : "").join("") : this.each((t, n) => {
    Y(n) && (n.textContent = e);
  });
}
C.text = Fd;
function Xt(e, t, n) {
  if (!Y(e))
    return;
  const s = pi.getComputedStyle(e, null);
  return n ? s.getPropertyValue(t) || void 0 : s[t] || e.style[t];
}
function Nt(e, t) {
  return parseInt(Xt(e, t), 10) || 0;
}
function Va(e, t) {
  return Nt(e, `border${t ? "Left" : "Top"}Width`) + Nt(e, `padding${t ? "Left" : "Top"}`) + Nt(e, `padding${t ? "Right" : "Bottom"}`) + Nt(e, `border${t ? "Right" : "Bottom"}Width`);
}
const Cr = {};
function Ud(e) {
  if (Cr[e])
    return Cr[e];
  const t = He(e);
  jt.body.insertBefore(t, null);
  const n = Xt(t, "display");
  return jt.body.removeChild(t), Cr[e] = n !== "none" ? n : "block";
}
function qa(e) {
  return Xt(e, "display") === "none";
}
function zl(e, t) {
  const n = e && (e.matches || e.webkitMatchesSelector || e.msMatchesSelector);
  return !!n && !!t && n.call(e, t);
}
function ir(e) {
  return st(e) ? (t, n) => zl(n, e) : Be(e) ? e : Br(e) ? (t, n) => e.is(n) : e ? (t, n) => n === e : () => !1;
}
C.filter = function(e) {
  const t = ir(e);
  return m(Io.call(this, (n, s) => t.call(n, s, n)));
};
function ge(e, t) {
  return t ? e.filter(t) : e;
}
C.detach = function(e) {
  return ge(this, e).each((t, n) => {
    n.parentNode && n.parentNode.removeChild(n);
  }), this;
};
const Vd = /^\s*<(\w+)[^>]*>/, qd = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Ga = {
  "*": Ll,
  tr: Ed,
  td: Ua,
  th: Ua,
  thead: xr,
  tbody: xr,
  tfoot: xr
};
function Fl(e) {
  if (!st(e))
    return [];
  if (qd.test(e))
    return [He(RegExp.$1)];
  const t = Vd.test(e) && RegExp.$1, n = Ga[t] || Ga["*"];
  return n.innerHTML = e, m(n.childNodes).detach().get();
}
m.parseHTML = Fl;
C.has = function(e) {
  const t = st(e) ? (n, s) => Oo(e, s).length : (n, s) => s.contains(e);
  return this.filter(t);
};
C.not = function(e) {
  const t = ir(e);
  return this.filter((n, s) => (!st(e) || Y(s)) && !t.call(s, n, s));
};
function Qt(e, t, n, s) {
  const i = [], r = Be(t), o = s && ir(s);
  for (let a = 0, l = e.length; a < l; a++)
    if (r) {
      const h = t(e[a]);
      h.length && Rd.apply(i, h);
    } else {
      let h = e[a][t];
      for (; h != null && !(s && o(-1, h)); )
        i.push(h), h = n ? h[t] : null;
    }
  return i;
}
function Ul(e) {
  return e.multiple && e.options ? Qt(Io.call(e.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : e.value || "";
}
function Gd(e) {
  return arguments.length ? this.each((t, n) => {
    const s = n.multiple && n.options;
    if (s || Jl.test(n.type)) {
      const i = er(e) ? Ol.call(e, String) : Qn(e) ? [] : [String(e)];
      s ? J(n.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : n.checked = i.indexOf(n.value) >= 0;
    } else
      n.value = ct(e) || Qn(e) ? "" : e;
  }) : this[0] && Ul(this[0]);
}
C.val = Gd;
C.is = function(e) {
  const t = ir(e);
  return Wo.call(this, (n, s) => t.call(n, s, n));
};
m.guid = 1;
function Pt(e) {
  return e.length > 1 ? Io.call(e, (t, n, s) => Wl.call(s, t) === n) : e;
}
m.unique = Pt;
C.add = function(e, t) {
  return m(Pt(this.get().concat(m(e, t).get())));
};
C.children = function(e) {
  return ge(m(Pt(Qt(this, (t) => t.children))), e);
};
C.parent = function(e) {
  return ge(m(Pt(Qt(this, "parentNode"))), e);
};
C.index = function(e) {
  const t = e ? m(e)[0] : this[0], n = e ? this : m(t).parent().children();
  return Wl.call(n, t);
};
C.closest = function(e) {
  const t = this.filter(e);
  if (t.length)
    return t;
  const n = this.parent();
  return n.length ? n.closest(e) : t;
};
C.siblings = function(e) {
  return ge(m(Pt(Qt(this, (t) => m(t).parent().children().not(t)))), e);
};
C.find = function(e) {
  return m(Pt(Qt(this, (t) => Oo(e, t))));
};
const Yd = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Kd = /^$|^module$|\/(java|ecma)script/i, jd = ["type", "src", "nonce", "noModule"];
function Xd(e, t) {
  const n = m(e);
  n.filter("script").add(n.find("script")).each((s, i) => {
    if (Kd.test(i.type) && Dl.contains(i)) {
      const r = He("script");
      r.text = i.textContent.replace(Yd, ""), J(jd, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Jd(e, t, n, s, i) {
  s ? e.insertBefore(t, n ? e.firstChild : null) : e.nodeName === "HTML" ? e.parentNode.replaceChild(t, e) : e.parentNode.insertBefore(t, n ? e : e.nextSibling), i && Xd(t, e.ownerDocument);
}
function ye(e, t, n, s, i, r, o, a) {
  return J(e, (l, h) => {
    J(m(h), (c, d) => {
      J(m(t), (u, p) => {
        const g = n ? d : p, y = n ? p : d, w = n ? c : u;
        Jd(g, w ? y.cloneNode(!0) : y, s, i, !w);
      }, a);
    }, o);
  }, r), t;
}
C.after = function() {
  return ye(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return ye(arguments, this, !1, !1, !0);
};
function Zd(e) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ct(e))
    return this;
  const t = /<script[\s>]/.test(e);
  return this.each((n, s) => {
    Y(s) && (t ? m(s).empty().append(e) : s.innerHTML = e);
  });
}
C.html = Zd;
C.appendTo = function(e) {
  return ye(arguments, this, !0, !1, !0);
};
C.wrapInner = function(e) {
  return this.each((t, n) => {
    const s = m(n), i = s.contents();
    i.length ? i.wrapAll(e) : s.append(e);
  });
};
C.before = function() {
  return ye(arguments, this, !1, !0);
};
C.wrapAll = function(e) {
  let t = m(e), n = t[0];
  for (; n.children.length; )
    n = n.firstElementChild;
  return this.first().before(t), this.appendTo(n);
};
C.wrap = function(e) {
  return this.each((t, n) => {
    const s = m(e)[0];
    m(n).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(e) {
  return ye(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(e) {
  return ye(arguments, this, !0, !0);
};
C.prepend = function() {
  return ye(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(e) {
  return ye(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return m(Pt(Qt(this, (e) => e.tagName === "IFRAME" ? [e.contentDocument] : e.tagName === "TEMPLATE" ? e.content.childNodes : e.childNodes)));
};
C.next = function(e, t, n) {
  return ge(m(Pt(Qt(this, "nextElementSibling", t, n))), e);
};
C.nextAll = function(e) {
  return this.next(e, !0);
};
C.nextUntil = function(e, t) {
  return this.next(t, !0, e);
};
C.parents = function(e, t) {
  return ge(m(Pt(Qt(this, "parentElement", !0, t))), e);
};
C.parentsUntil = function(e, t) {
  return this.parents(t, e);
};
C.prev = function(e, t, n) {
  return ge(m(Pt(Qt(this, "previousElementSibling", t, n))), e);
};
C.prevAll = function(e) {
  return this.prev(e, !0);
};
C.prevUntil = function(e, t) {
  return this.prev(t, !0, e);
};
C.map = function(e) {
  return m(Nd.apply([], Ol.call(this, (t, n) => e.call(t, n, t))));
};
C.clone = function() {
  return this.map((e, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((e, t) => {
    let n = t.offsetParent;
    for (; n && Xt(n, "position") === "static"; )
      n = n.offsetParent;
    return n || Dl;
  });
};
C.slice = function(e, t) {
  return m(Hl.call(this, e, t));
};
const Qd = /-([a-z])/g;
function Bo(e) {
  return e.replace(Qd, (t, n) => n.toUpperCase());
}
C.ready = function(e) {
  const t = () => setTimeout(e, 0, m);
  return jt.readyState !== "loading" ? t() : jt.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((e, t) => {
    if (t.tagName === "BODY")
      return;
    const n = m(t);
    n.replaceWith(n.children());
  }), this;
};
C.offset = function() {
  const e = this[0];
  if (!e)
    return;
  const t = e.getBoundingClientRect();
  return {
    top: t.top + pi.pageYOffset,
    left: t.left + pi.pageXOffset
  };
};
C.position = function() {
  const e = this[0];
  if (!e)
    return;
  const t = Xt(e, "position") === "fixed", n = t ? e.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = e.ownerDocument;
    let i = e.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Xt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== e && Y(i)) {
      const r = m(i).offset();
      n.top -= r.top + Nt(i, "borderTopWidth"), n.left -= r.left + Nt(i, "borderLeftWidth");
    }
  }
  return {
    top: n.top - Nt(e, "marginTop"),
    left: n.left - Nt(e, "marginLeft")
  };
};
const Vl = {
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
C.prop = function(e, t) {
  if (e) {
    if (st(e))
      return e = Vl[e] || e, arguments.length < 2 ? this[0] && this[0][e] : this.each((n, s) => {
        s[e] = t;
      });
    for (const n in e)
      this.prop(n, e[n]);
    return this;
  }
};
C.removeProp = function(e) {
  return this.each((t, n) => {
    delete n[Vl[e] || e];
  });
};
const tu = /^--/;
function zo(e) {
  return tu.test(e);
}
const $r = {}, { style: eu } = Ll, nu = ["webkit", "moz", "ms"];
function su(e, t = zo(e)) {
  if (t)
    return e;
  if (!$r[e]) {
    const n = Bo(e), s = `${n[0].toUpperCase()}${n.slice(1)}`, i = `${n} ${nu.join(`${s} `)}${s}`.split(" ");
    J(i, (r, o) => {
      if (o in eu)
        return $r[e] = o, !1;
    });
  }
  return $r[e];
}
const iu = {
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
function ql(e, t, n = zo(e)) {
  return !n && !iu[e] && Bl(t) ? `${t}px` : t;
}
function ru(e, t) {
  if (st(e)) {
    const n = zo(e);
    return e = su(e, n), arguments.length < 2 ? this[0] && Xt(this[0], e, n) : e ? (t = ql(e, t, n), this.each((s, i) => {
      Y(i) && (n ? i.style.setProperty(e, t) : i.style[e] = t);
    })) : this;
  }
  for (const n in e)
    this.css(n, e[n]);
  return this;
}
C.css = ru;
function Gl(e, t) {
  try {
    return e(t);
  } catch {
    return t;
  }
}
const ou = /^\s+|\s+$/;
function Ya(e, t) {
  const n = e.dataset[t] || e.dataset[Bo(t)];
  return ou.test(n) ? n : Gl(JSON.parse, n);
}
function au(e, t, n) {
  n = Gl(JSON.stringify, n), e.dataset[Bo(t)] = n;
}
function lu(e, t) {
  if (!e) {
    if (!this[0])
      return;
    const n = {};
    for (const s in this[0].dataset)
      n[s] = Ya(this[0], s);
    return n;
  }
  if (st(e))
    return arguments.length < 2 ? this[0] && Ya(this[0], e) : ct(t) ? this : this.each((n, s) => {
      au(s, e, t);
    });
  for (const n in e)
    this.data(n, e[n]);
  return this;
}
C.data = lu;
function Yl(e, t) {
  const n = e.documentElement;
  return Math.max(e.body[`scroll${t}`], n[`scroll${t}`], e.body[`offset${t}`], n[`offset${t}`], n[`client${t}`]);
}
J([!0, !1], (e, t) => {
  J(["Width", "Height"], (n, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    C[i] = function(r) {
      if (this[0])
        return vn(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : De(this[0]) ? Yl(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Nt(this[0], `margin${n ? "Top" : "Left"}`) + Nt(this[0], `margin${n ? "Bottom" : "Right"}`) : 0);
    };
  });
});
J(["Width", "Height"], (e, t) => {
  const n = t.toLowerCase();
  C[n] = function(s) {
    if (!this[0])
      return ct(s) ? void 0 : this;
    if (!arguments.length)
      return vn(this[0]) ? this[0].document.documentElement[`client${t}`] : De(this[0]) ? Yl(this[0], t) : this[0].getBoundingClientRect()[n] - Va(this[0], !e);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!Y(o))
        return;
      const a = Xt(o, "boxSizing");
      o.style[n] = ql(n, i + (a === "border-box" ? Va(o, !e) : 0));
    });
  };
});
const Ka = "___cd";
C.toggle = function(e) {
  return this.each((t, n) => {
    if (!Y(n))
      return;
    const s = qa(n);
    (ct(e) ? s : e) ? (n.style.display = n[Ka] || "", qa(n) && (n.style.display = Ud(n.tagName))) : s || (n[Ka] = Xt(n, "display"), n.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const ja = "___ce", Fo = ".", Uo = { focus: "focusin", blur: "focusout" }, Kl = { mouseenter: "mouseover", mouseleave: "mouseout" }, cu = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Vo(e) {
  return Kl[e] || Uo[e] || e;
}
function qo(e) {
  const t = e.split(Fo);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(e, t) {
  if (st(e)) {
    const [s, i] = qo(e), r = Vo(s);
    if (!r)
      return this;
    const o = cu.test(r) ? "MouseEvents" : "HTMLEvents";
    e = jt.createEvent(o), e.initEvent(r, !0, !0), e.namespace = i.join(Fo), e.___ot = s;
  }
  e.___td = t;
  const n = e.___ot in Uo;
  return this.each((s, i) => {
    n && Be(i[e.___ot]) && (i[`___i${e.type}`] = !0, i[e.___ot](), i[`___i${e.type}`] = !1), i.dispatchEvent(e);
  });
};
function jl(e) {
  return e[ja] = e[ja] || {};
}
function hu(e, t, n, s, i) {
  const r = jl(e);
  r[t] = r[t] || [], r[t].push([n, s, i]), e.addEventListener(t, i);
}
function Xl(e, t) {
  return !t || !Wo.call(t, (n) => e.indexOf(n) < 0);
}
function gi(e, t, n, s, i) {
  const r = jl(e);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Xl(o, n) || s && s !== a)
        return !0;
      e.removeEventListener(t, l);
    }));
  else
    for (t in r)
      gi(e, t, n, s, i);
}
C.off = function(e, t, n) {
  if (ct(e))
    this.each((s, i) => {
      !Y(i) && !De(i) && !vn(i) || gi(i);
    });
  else if (st(e))
    Be(t) && (n = t, t = ""), J(sr(e), (s, i) => {
      const [r, o] = qo(i), a = Vo(r);
      this.each((l, h) => {
        !Y(h) && !De(h) && !vn(h) || gi(h, a, o, t, n);
      });
    });
  else
    for (const s in e)
      this.off(s, e[s]);
  return this;
};
C.remove = function(e) {
  return ge(this, e).detach().off(), this;
};
C.replaceWith = function(e) {
  return this.before(e).remove();
};
C.replaceAll = function(e) {
  return m(e).replaceWith(this), this;
};
function du(e, t, n, s, i) {
  if (!st(e)) {
    for (const r in e)
      this.on(r, t, n, e[r], i);
    return this;
  }
  return st(t) || (ct(t) || Qn(t) ? t = "" : ct(n) ? (n = t, t = "") : (s = n, n = t, t = "")), Be(s) || (s = n, n = void 0), s ? (J(sr(e), (r, o) => {
    const [a, l] = qo(o), h = Vo(a), c = a in Kl, d = a in Uo;
    h && this.each((u, p) => {
      if (!Y(p) && !De(p) && !vn(p))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Xl(l, y.namespace.split(Fo)) || !t && (d && (y.target !== p || y.___ot === h) || c && y.relatedTarget && p.contains(y.relatedTarget)))
          return;
        let w = p;
        if (t) {
          let _ = y.target;
          for (; !zl(_, t); )
            if (_ === p || (_ = _.parentNode, !_))
              return;
          w = _;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return w;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return n;
          }
        });
        const v = s.call(w, y, y.___td);
        i && gi(p, h, l, t, g), v === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || m.guid++, hu(p, h, l, t, g);
    });
  }), this) : this;
}
C.on = du;
function uu(e, t, n, s) {
  return this.on(e, t, n, s, !0);
}
C.one = uu;
const fu = /\r?\n/g;
function pu(e, t) {
  return `&${encodeURIComponent(e)}=${encodeURIComponent(t.replace(fu, `\r
`))}`;
}
const mu = /file|reset|submit|button|image/i, Jl = /radio|checkbox/i;
C.serialize = function() {
  let e = "";
  return this.each((t, n) => {
    J(n.elements || [n], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || mu.test(i.type) || Jl.test(i.type) && !i.checked)
        return;
      const r = Ul(i);
      if (!ct(r)) {
        const o = er(r) ? r : [r];
        J(o, (a, l) => {
          e += pu(i.name, l);
        });
      }
    });
  }), e.slice(1);
};
window.$ = m;
function gu(e, t) {
  if (e == null)
    return [e, void 0];
  typeof t == "string" && (t = t.split("."));
  const n = t.join(".");
  let s = e;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), s = s[r], i.push(s), o !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(o) : s = s[o], i.push(s);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${n}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${n}".`);
  return i;
}
function yu(e, t, n) {
  try {
    const s = gu(e, t), i = s[s.length - 1];
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
var Go = /* @__PURE__ */ ((e) => (e[e.B = 1] = "B", e[e.KB = 1024] = "KB", e[e.MB = 1048576] = "MB", e[e.GB = 1073741824] = "GB", e[e.TB = 1099511627776] = "TB", e))(Go || {});
function vu(e, t = 2, n) {
  return Number.isNaN(e) ? "?KB" : (n || (e < 1024 ? n = "B" : e < 1048576 ? n = "KB" : e < 1073741824 ? n = "MB" : e < 1099511627776 ? n = "GB" : n = "TB"), (e / Go[n]).toFixed(t) + n);
}
const wu = (e) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  e = e.toUpperCase();
  const n = e.match(t);
  if (!n)
    return 0;
  const s = n[1];
  return e = e.replace(s, ""), Number.parseInt(e, 10) * Go[s];
};
let Yo = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), oe;
function _u() {
  return Yo;
}
function bu(e) {
  Yo = e.toLowerCase();
}
function Zl(e, t) {
  oe || (oe = {}), typeof e == "string" && (e = { [e]: t ?? {} }), m.extend(!0, oe, e);
}
function tt(e, t, n, s, i, r) {
  Array.isArray(e) ? oe && e.unshift(oe) : e = oe ? [oe, e] : [e], typeof n == "string" && (r = i, i = s, s = n, n = void 0);
  const o = i || Yo;
  let a;
  for (const l of e) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const c = r && l === oe ? `${r}.${t}` : t;
    if (a = yu(h, c), a !== void 0)
      break;
  }
  return a === void 0 ? s : n ? it(a, ...Array.isArray(n) ? n : [n]) : a;
}
function xu(e, t, n, s) {
  return tt(void 0, e, t, n, s);
}
tt.addLang = Zl;
tt.getLang = xu;
tt.getCode = _u;
tt.setCode = bu;
Zl({
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
function Ql(...e) {
  const t = [], n = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = n.get(i);
    typeof o == "number" ? t[o][1] = !!r : (n.set(i, t.length), t.push([i, !!r]));
  };
  return e.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ql(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (n.get(i[0]) || 0) - (n.get(r[0]) || 0));
}
const k = (...e) => Ql(...e).reduce((t, [n, s]) => (s && t.push(n), t), []).join(" ");
m.classes = k;
m.fn.setClass = function(e, ...t) {
  return this.each((n, s) => {
    const i = m(s);
    e === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(e, ...t));
  });
};
const Sn = /* @__PURE__ */ new WeakMap();
function tc(e, t, n) {
  const s = Sn.has(e), i = s ? Sn.get(e) : {};
  typeof t == "string" ? i[t] = n : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && e instanceof Element && Object.assign(i, m(e).dataset(), i), Sn.set(e, i)) : Sn.delete(e);
}
function Cu(e, t) {
  let n = Sn.get(e) || {};
  return e instanceof Element && (n = Object.assign({}, m(e).dataset(), n)), t === void 0 ? n : n[t];
}
m.fn.dataset = m.fn.data;
m.fn.data = function(...e) {
  if (!this.length)
    return;
  const [t, n] = e;
  return !e.length || e.length === 1 && typeof t == "string" ? Cu(this[0], t) : this.each((s, i) => tc(i, t, n));
};
m.fn.removeData = function(e = null) {
  return this.each((t, n) => tc(n, e));
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
const yi = (e, t) => new Promise((n) => {
  const s = window.setTimeout(n, e);
  t && t(s);
}), kr = /* @__PURE__ */ new Map();
function $u(e, t, n) {
  const { zui: s } = window;
  kr.size || Object.keys(s).forEach((r) => {
    r[0] === r[0].toUpperCase() && kr.set(r.toLowerCase(), s[r]);
  });
  const i = kr.get(e.toLowerCase());
  return i ? new i(t, n) : null;
}
m(() => {
  m("[data-zui]").each(function() {
    const t = m(this).dataset(), n = t.zui;
    delete t.zui, $u(n, this, t);
  });
});
function Ko(e, t) {
  const n = m(e)[0];
  if (!n)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: r, width: o, height: a } = n.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: w, clientWidth: v } = document.documentElement;
    s = { left: 0, top: 0, width: y || v, height: g || w };
  }
  const { left: l, top: h, width: c, height: d } = s;
  if (t != null && t.fullyCheck)
    return i >= l && r >= h && i + o <= c && r + a <= d;
  const u = i <= c && i + o >= l;
  return r <= d && r + a >= h && u;
}
m.fn.isVisible = function(e) {
  return this.each((t, n) => {
    Ko(n, e);
  });
};
function jo(e, t, n = !1) {
  const s = m(e);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${m.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), n && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, r) => {
    jo(s, r.innerHTML), r.remove();
  });
}
m.runJS = (e, ...t) => (e = e.trim(), e.startsWith("return ") || (e = `return ${e}`), new Function(...t.map(([s]) => s), e)(...t.map(([, s]) => s)));
m.fn.runJS = function(e) {
  return this.each((t, n) => {
    jo(n, e);
  });
};
function ec(e, t) {
  const n = m(e), { ifNeeded: s = !0, ...i } = t || {};
  return n.each((r, o) => {
    s && Ko(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), n;
}
m.fn.scrollIntoView = function(e) {
  return this.each((t, n) => {
    ec(n, e);
  });
};
const Ip = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Ko,
  runJS: jo,
  scrollIntoView: ec
}, Symbol.toStringTag, { value: "Module" }));
var rr, F, nc, Q, ke, Xa, sc, zr, vi = {}, ic = [], ku = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xo = Array.isArray;
function de(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function rc(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function j(e, t, n) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? rr.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (r in e.defaultProps)
      o[r] === void 0 && (o[r] = e.defaultProps[r]);
  return Gs(e, o, s, i, null);
}
function Gs(e, t, n, s, i) {
  var r = { type: e, props: t, key: n, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++nc };
  return i == null && F.vnode != null && F.vnode(r), r;
}
function K() {
  return { current: null };
}
function _n(e) {
  return e.children;
}
function z(e, t) {
  this.props = e, this.context = t;
}
function ts(e, t) {
  if (t == null)
    return e.__ ? ts(e.__, e.__.__k.indexOf(e) + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? ts(e) : null;
}
function oc(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return oc(e);
  }
}
function Ja(e) {
  (!e.__d && (e.__d = !0) && ke.push(e) && !wi.__r++ || Xa !== F.debounceRendering) && ((Xa = F.debounceRendering) || sc)(wi);
}
function wi() {
  var e, t, n, s, i, r, o, a;
  for (ke.sort(zr); e = ke.shift(); )
    e.__d && (t = ke.length, s = void 0, i = void 0, o = (r = (n = e).__v).__e, (a = n.__P) && (s = [], (i = de({}, r)).__v = r.__v + 1, Jo(a, r, i, n.__n, a.ownerSVGElement !== void 0, r.__h != null ? [o] : null, s, o ?? ts(r), r.__h), dc(s, r), r.__e != o && oc(r)), ke.length > t && ke.sort(zr));
  wi.__r = 0;
}
function ac(e, t, n, s, i, r, o, a, l, h) {
  var c, d, u, p, g, y, w, v = s && s.__k || ic, _ = v.length;
  for (n.__k = [], c = 0; c < t.length; c++)
    if ((p = n.__k[c] = (p = t[c]) == null || typeof p == "boolean" || typeof p == "function" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? Gs(null, p, null, null, p) : Xo(p) ? Gs(_n, { children: p }, null, null, null) : p.__b > 0 ? Gs(p.type, p.props, p.key, p.ref ? p.ref : null, p.__v) : p) != null) {
      if (p.__ = n, p.__b = n.__b + 1, (u = v[c]) === null || u && p.key == u.key && p.type === u.type)
        v[c] = void 0;
      else
        for (d = 0; d < _; d++) {
          if ((u = v[d]) && p.key == u.key && p.type === u.type) {
            v[d] = void 0;
            break;
          }
          u = null;
        }
      Jo(e, p, u = u || vi, i, r, o, a, l, h), g = p.__e, (d = p.ref) && u.ref != d && (w || (w = []), u.ref && w.push(u.ref, null, p), w.push(d, p.__c || g, p)), g != null ? (y == null && (y = g), typeof p.type == "function" && p.__k === u.__k ? p.__d = l = lc(p, l, e) : l = cc(e, p, u, v, g, l), typeof n.type == "function" && (n.__d = l)) : l && u.__e == l && l.parentNode != e && (l = ts(u));
    }
  for (n.__e = y, c = _; c--; )
    v[c] != null && (typeof n.type == "function" && v[c].__e != null && v[c].__e == n.__d && (n.__d = hc(s).nextSibling), fc(v[c], v[c]));
  if (w)
    for (c = 0; c < w.length; c++)
      uc(w[c], w[++c], w[++c]);
}
function lc(e, t, n) {
  for (var s, i = e.__k, r = 0; i && r < i.length; r++)
    (s = i[r]) && (s.__ = e, t = typeof s.type == "function" ? lc(s, t, n) : cc(n, s, s, i, s.__e, t));
  return t;
}
function cc(e, t, n, s, i, r) {
  var o, a, l;
  if (t.__d !== void 0)
    o = t.__d, t.__d = void 0;
  else if (n == null || i != r || i.parentNode == null)
    t:
      if (r == null || r.parentNode !== e)
        e.appendChild(i), o = null;
      else {
        for (a = r, l = 0; (a = a.nextSibling) && l < s.length; l += 1)
          if (a == i)
            break t;
        e.insertBefore(i, r), o = r;
      }
  return o !== void 0 ? o : i.nextSibling;
}
function hc(e) {
  var t, n, s;
  if (e.type == null || typeof e.type == "string")
    return e.__e;
  if (e.__k) {
    for (t = e.__k.length - 1; t >= 0; t--)
      if ((n = e.__k[t]) && (s = hc(n)))
        return s;
  }
  return null;
}
function Su(e, t, n, s, i) {
  var r;
  for (r in n)
    r === "children" || r === "key" || r in t || _i(e, r, null, n[r], s);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || n[r] === t[r] || _i(e, r, t[r], n[r], s);
}
function Za(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || ku.test(t) ? n : n + "px";
}
function _i(e, t, n, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof s == "string" && (e.style.cssText = s = ""), s)
          for (t in s)
            n && t in n || Za(e.style, t, "");
        if (n)
          for (t in n)
            s && n[t] === s[t] || Za(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = n, n ? s || e.addEventListener(t, r ? tl : Qa, r) : e.removeEventListener(t, r ? tl : Qa, r);
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
function Qa(e) {
  return this.l[e.type + !1](F.event ? F.event(e) : e);
}
function tl(e) {
  return this.l[e.type + !0](F.event ? F.event(e) : e);
}
function Jo(e, t, n, s, i, r, o, a, l) {
  var h, c, d, u, p, g, y, w, v, _, b, E, $, T, R, P = t.type;
  if (t.constructor !== void 0)
    return null;
  n.__h != null && (l = n.__h, a = t.__e = n.__e, t.__h = null, r = [a]), (h = F.__b) && h(t);
  try {
    t:
      if (typeof P == "function") {
        if (w = t.props, v = (h = P.contextType) && s[h.__c], _ = h ? v ? v.props.value : h.__ : s, n.__c ? y = (c = t.__c = n.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(w, _) : (t.__c = c = new z(w, _), c.constructor = P, c.render = Tu), v && v.sub(c), c.props = w, c.state || (c.state = {}), c.context = _, c.__n = s, d = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = de({}, c.__s)), de(c.__s, P.getDerivedStateFromProps(w, c.__s))), u = c.props, p = c.state, c.__v = t, d)
          P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && w !== u && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, _), !c.__e && c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, _) === !1 || t.__v === n.__v) {
            for (t.__v !== n.__v && (c.props = w, c.state = c.__s, c.__d = !1), c.__e = !1, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(H) {
              H && (H.__ = t);
            }), b = 0; b < c._sb.length; b++)
              c.__h.push(c._sb[b]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, _), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(u, p, g);
          });
        }
        if (c.context = _, c.props = w, c.__P = e, E = F.__r, $ = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), T = 0; T < c._sb.length; T++)
            c.__h.push(c._sb[T]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(t), h = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++$ < 25);
        c.state = c.__s, c.getChildContext != null && (s = de(de({}, s), c.getChildContext())), d || c.getSnapshotBeforeUpdate == null || (g = c.getSnapshotBeforeUpdate(u, p)), ac(e, Xo(R = h != null && h.type === _n && h.key == null ? h.props.children : h) ? R : [R], t, n, s, i, r, o, a, l), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), y && (c.__E = c.__ = null), c.__e = !1;
      } else
        r == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Mu(n.__e, t, n, s, i, r, o, l);
    (h = F.diffed) && h(t);
  } catch (H) {
    t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), F.__e(H, t, n);
  }
}
function dc(e, t) {
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
function Mu(e, t, n, s, i, r, o, a) {
  var l, h, c, d = n.props, u = t.props, p = t.type, g = 0;
  if (p === "svg" && (i = !0), r != null) {
    for (; g < r.length; g++)
      if ((l = r[g]) && "setAttribute" in l == !!p && (p ? l.localName === p : l.nodeType === 3)) {
        e = l, r[g] = null;
        break;
      }
  }
  if (e == null) {
    if (p === null)
      return document.createTextNode(u);
    e = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, u.is && u), r = null, a = !1;
  }
  if (p === null)
    d === u || a && e.data === u || (e.data = u);
  else {
    if (r = r && rr.call(e.childNodes), h = (d = n.props || vi).dangerouslySetInnerHTML, c = u.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (d = {}, g = 0; g < e.attributes.length; g++)
          d[e.attributes[g].name] = e.attributes[g].value;
      (c || h) && (c && (h && c.__html == h.__html || c.__html === e.innerHTML) || (e.innerHTML = c && c.__html || ""));
    }
    if (Su(e, u, d, i, a), c)
      t.__k = [];
    else if (ac(e, Xo(g = t.props.children) ? g : [g], t, n, s, i && p !== "foreignObject", r, o, r ? r[0] : n.__k && ts(n, 0), a), r != null)
      for (g = r.length; g--; )
        r[g] != null && rc(r[g]);
    a || ("value" in u && (g = u.value) !== void 0 && (g !== e.value || p === "progress" && !g || p === "option" && g !== d.value) && _i(e, "value", g, d.value, !1), "checked" in u && (g = u.checked) !== void 0 && g !== e.checked && _i(e, "checked", g, d.checked, !1));
  }
  return e;
}
function uc(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (s) {
    F.__e(s, n);
  }
}
function fc(e, t, n) {
  var s, i;
  if (F.unmount && F.unmount(e), (s = e.ref) && (s.current && s.current !== e.__e || uc(s, null, t)), (s = e.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        F.__e(r, t);
      }
    s.base = s.__P = null, e.__c = void 0;
  }
  if (s = e.__k)
    for (i = 0; i < s.length; i++)
      s[i] && fc(s[i], t, n || typeof e.type != "function");
  n || e.__e == null || rc(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Tu(e, t, n) {
  return this.constructor(e, n);
}
function es(e, t, n) {
  var s, i, r;
  F.__ && F.__(e, t), i = (s = typeof n == "function") ? null : n && n.__k || t.__k, r = [], Jo(t, e = (!s && n || t).__k = j(_n, null, [e]), i || vi, vi, t.ownerSVGElement !== void 0, !s && n ? [n] : i ? null : t.firstChild ? rr.call(t.childNodes) : null, r, !s && n ? n : i ? i.__e : t.firstChild, s), dc(r, e);
}
rr = ic.slice, F = { __e: function(e, t, n, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(e)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(e, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        e = a;
      }
  throw e;
} }, nc = 0, Q = function(e) {
  return e != null && e.constructor === void 0;
}, z.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = de({}, this.state), typeof e == "function" && (e = e(de({}, n), this.props)), e && de(n, e), e != null && this.__v && (t && this._sb.push(t), Ja(this));
}, z.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ja(this));
}, z.prototype.render = _n, ke = [], sc = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, zr = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, wi.__r = 0;
var pc = function(e, t, n, s) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, n[t[r++]]) : t[++r];
    o === 3 ? s[0] = a : o === 4 ? s[1] = Object.assign(s[1] || {}, a) : o === 5 ? (s[1] = s[1] || {})[t[++r]] = a : o === 6 ? s[1][t[++r]] += a + "" : o ? (i = e.apply(a, pc(e, a, n, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : s.push(a);
  }
  return s;
}, el = /* @__PURE__ */ new Map();
function Eu(e) {
  var t = el.get(this);
  return t || (t = /* @__PURE__ */ new Map(), el.set(this, t)), (t = pc(this, t.get(e) || (t.set(e, t = function(n) {
    for (var s, i, r = 1, o = "", a = "", l = [0], h = function(u) {
      r === 1 && (u || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, u, o) : r === 3 && (u || o) ? (l.push(3, u, o), r = 2) : r === 2 && o === "..." && u ? l.push(4, u, 0) : r === 2 && o && !u ? l.push(5, 0, !0, o) : r >= 5 && ((o || !u && r === 5) && (l.push(r, 0, o, i), r = 6), u && (l.push(r, u, 0, i), r = 6)), o = "";
    }, c = 0; c < n.length; c++) {
      c && (r === 1 && h(), h(c));
      for (var d = 0; d < n[c].length; d++)
        s = n[c][d], r === 1 ? s === "<" ? (h(), l = [l], r = 3) : o += s : r === 4 ? o === "--" && s === ">" ? (r = 1, o = "") : o = s + o[0] : a ? s === a ? a = "" : o += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), r = 1) : r && (s === "=" ? (r = 5, i = o, o = "") : s === "/" && (r < 5 || n[c][d + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), r = 2) : o += s), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(e)), t), arguments, [])).length > 1 ? t : t[0];
}
const Wp = Eu.bind(j);
function mc(e) {
  const { tagName: t = "div", className: n, style: s, children: i, attrs: r, forwardRef: o, ...a } = e;
  return j(t, { ref: o, class: k(n), style: s, ...a, ...r }, i);
}
var Nu = 0;
function f(e, t, n, s, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: e, props: l, key: n, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Nu, __source: i, __self: r };
  if (typeof e == "function" && (o = e.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return F.vnode && F.vnode(h), h;
}
var as;
class Zo extends z {
  constructor() {
    super(...arguments);
    D(this, as, K());
  }
  componentDidMount() {
    this.props.executeScript && m(x(this, as).current).runJS();
  }
  render(n) {
    const { executeScript: s, html: i, ...r } = n;
    return /* @__PURE__ */ f(mc, { forwardRef: x(this, as), dangerouslySetInnerHTML: { __html: i }, ...r });
  }
}
as = new WeakMap();
function Ru(e) {
  const {
    tag: t,
    className: n,
    style: s,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...c
  } = e, d = [n], u = { ...s }, p = [], g = [];
  return i.forEach((y) => {
    const w = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        w.push(...l.call(o, y, p, ...r));
      else {
        const v = y.call(o, p, ...r);
        v && (Array.isArray(v) ? w.push(...v) : w.push(v));
      }
    else
      w.push(y);
    w.forEach((v) => {
      v != null && (typeof v == "object" && !Q(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? p.push(
        /* @__PURE__ */ f("div", { className: k(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(u, v.style), v.className && d.push(v.className), v.children && p.push(v.children), v.attrs && Object.assign(c, v.attrs)) : p.push(v));
    });
  }), g.length && Object.assign(c, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(d),
    style: u,
    ...c
  }, p];
}
function Qo({
  tag: e = "div",
  ...t
}) {
  const [n, s] = Ru(t);
  return j(e, n, ...s);
}
function gc(e, t, n) {
  return typeof e == "function" ? e.call(t, ...n) : Array.isArray(e) ? e.map((s) => gc(s, t, n)) : Q(e) || e === null ? e : typeof e == "object" ? e.html ? /* @__PURE__ */ f(Zo, { ...e }) : /* @__PURE__ */ f(mc, { ...e }) : e;
}
function Ss(e) {
  const { content: t, generatorThis: n, generatorArgs: s } = e, i = gc(t, n, s);
  return i == null || typeof i == "boolean" ? null : Q(i) ? i : /* @__PURE__ */ f(_n, { children: i });
}
function nt(e) {
  const { icon: t, className: n, ...s } = e;
  if (!t)
    return null;
  if (Q(t))
    return t;
  const i = ["icon", n];
  if (typeof t == "string")
    i.push(t.startsWith("icon-") ? t : `icon-${t}`);
  else if (typeof t == "object") {
    const { className: r, ...o } = t;
    i.push(r), Object.assign(s, o);
  }
  return /* @__PURE__ */ f("i", { className: k(i), ...s });
}
function Au(e) {
  return this.getChildContext = () => e.context, e.children;
}
function Pu(e) {
  const t = this, n = e._container;
  t.componentWillUnmount = function() {
    es(null, t._temp), t._temp = null, t._container = null;
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
  }), es(
    j(Au, { context: t.context }, e._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Du(e, t) {
  const n = j(Pu, { _vnode: e, _container: t });
  return n.containerInfo = t, n;
}
var yc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ue = (e, t, n) => (yc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ls = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ve = (e, t, n, s) => (yc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _e, Mn, Ys, Ks;
const vc = class {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    Ls(this, _e, void 0), Ls(this, Mn, void 0), Ls(this, Ys, void 0), Ls(this, Ks, !1);
    const { KEY: n, DATA_KEY: s, DEFAULT: i, MULTI_INSTANCE: r } = this.constructor, o = m(e);
    if (o.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const a = m.guid++;
    if (Ve(this, Ys, a), Ve(this, Mn, o[0]), o.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), Ve(this, _e, { ...i, ...o.dataset() }), this.setOptions(t), this._key = this.options.key ?? `__${a}`, o.data(n, this).attr(s, `${a}`), r) {
      const l = `${n}:ALL`;
      let h = o.data(l);
      h || (h = /* @__PURE__ */ new Map(), o.data(l, h)), h.set(this._key, this);
    }
    this.init(), requestAnimationFrame(() => {
      Ve(this, Ks, !0), this.emit("inited", this.options), this.afterInit();
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
    return Ue(this, Ks);
  }
  /**
   * Get the component element.
   */
  get element() {
    return Ue(this, Mn);
  }
  get key() {
    return this._key;
  }
  /**
   * Get the component options.
   */
  get options() {
    return Ue(this, _e);
  }
  /**
   * Get the component global id.
   */
  get gid() {
    return Ue(this, Ys);
  }
  /**
   * Get the component element as a jQuery like object.
   */
  get $element() {
    return m(this.element);
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
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: n } = this.constructor, { $element: s } = this;
    if (this.emit("destroyed"), s.off(this.namespace).removeData(e).attr(t, null), n) {
      const i = this.$element.data(`${e}:ALL`);
      if (i)
        if (i.delete(this._key), i.size === 0)
          this.$element.removeData(`${e}:ALL`);
        else {
          const r = i.values().next().value;
          s.data(e, r).attr(t, r.gid);
        }
    }
    Ve(this, _e, void 0), Ve(this, Mn, void 0);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(e) {
    return e && m.extend(Ue(this, _e), e), Ue(this, _e);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = m.Event(e);
    return n.__src = this, this.$emitter.trigger(n, [this, ...t]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, n) {
    const s = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(e), function(i, r) {
      (!i.__src || i.__src === s) && t.call(this, i, r);
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
    return tt(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? tt(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
    return m(e || document).find(`[${n}]`).each((i, r) => {
      if (t) {
        const a = m(r).data(`${this.KEY}:ALL`);
        if (a) {
          s.push(...a.values());
          return;
        }
      }
      const o = m(r).data(this.KEY);
      o && s.push(o);
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
          var o;
          const r = this.ensure(i, typeof t == "object" ? t : void 0);
          typeof t == "string" && ((o = r[t]) == null || o.call(r, ...n));
        });
      }
    });
  }
};
let mt = vc;
_e = /* @__PURE__ */ new WeakMap();
Mn = /* @__PURE__ */ new WeakMap();
Ys = /* @__PURE__ */ new WeakMap();
Ks = /* @__PURE__ */ new WeakMap();
mt.DEFAULT = {};
mt.NAME = vc.name;
mt.MULTI_INSTANCE = !1;
class q extends mt {
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
    var t, n;
    (n = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || n.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    es(
      j(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Lu({
  component: e = "div",
  className: t,
  children: n,
  style: s,
  attrs: i
}) {
  return j(e, {
    className: k(t),
    style: s,
    ...i
  }, n);
}
function wc({
  type: e,
  component: t = "a",
  className: n,
  children: s,
  content: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: h,
  text: c,
  target: d,
  trailingIcon: u,
  hint: p,
  checked: g,
  onClick: y,
  ...w
}) {
  const v = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(nt, { icon: h }),
    /* @__PURE__ */ f("span", { className: "text", children: c }),
    /* @__PURE__ */ f(Ss, { content: i }),
    s,
    /* @__PURE__ */ f(nt, { icon: u })
  ];
  return j(t, {
    className: k(n, { disabled: a, active: l }),
    title: p,
    [t === "a" ? "href" : "data-url"]: o,
    [t === "a" ? "target" : "data-target"]: d,
    onClick: y,
    ...w,
    ...r
  }, ...v);
}
function Iu({
  component: e = "div",
  className: t,
  text: n,
  attrs: s,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return j(e, {
    className: k(t),
    style: o,
    onClick: a,
    ...s
  }, n, /* @__PURE__ */ f(Ss, { content: r }), i);
}
function Wu({
  component: e = "div",
  className: t,
  style: n,
  space: s,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return j(e, {
    className: k(t),
    style: { width: s, height: s, flex: i, ...n },
    onClick: o,
    ...r
  }, a);
}
function Ou({ type: e, ...t }) {
  return /* @__PURE__ */ f(Qo, { ...t });
}
function _c({
  component: e = "div",
  className: t,
  children: n,
  content: s,
  style: i,
  attrs: r
}) {
  return j(e, {
    className: k(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(Ss, { content: s }), n);
}
const Fr = class extends z {
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
  handleItemClick(e, t, n, s) {
    n && n.call(s.target, s, e, t);
    const { onClickItem: i } = this.props;
    i && i({ menu: this, item: e, index: t, event: s });
  }
  beforeRender() {
    var n;
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (n = e.beforeRender) == null ? void 0 : n.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, n) {
    const { commonItemProps: s, onClickItem: i, itemRenderProps: r } = e;
    let o = { ...t };
    return s && Object.assign(o, s[t.type || "item"]), (i || t.onClick) && (o.onClick = this.handleItemClick.bind(this, o, n, t.onClick)), o.className = k(o.className), r && (o = r(o)), o;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const s = this.getItemRenderProps(e, t, n), { itemRender: i } = e;
    if (i) {
      if (typeof i == "object") {
        const g = i[t.type || "item"];
        if (g)
          return /* @__PURE__ */ f(g, { ...s });
      } else if (typeof i == "function") {
        const g = i.call(this, s, j);
        if (Q(g))
          return g;
        typeof g == "object" && Object.assign(s, g);
      }
    }
    const { type: r = "item", component: o, key: a = n, rootAttrs: l, rootClass: h, rootStyle: c, rootChildren: d, ...u } = s;
    if (r === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: k("action-menu-item", `${this.name}-html`, h, u.className),
          ...l,
          style: c || u.style,
          dangerouslySetInnerHTML: { __html: u.html }
        },
        a
      );
    const p = !o || typeof o == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Fr.ItemComponents[r] : o;
    return Object.assign(u, {
      type: r,
      component: typeof o == "string" ? o : void 0
    }), e.checkbox && r === "item" && u.checked === void 0 && (u.checked = !!u.active), this.renderTypedItem(p, {
      className: k(h),
      children: d,
      style: c,
      key: a,
      ...l
    }, {
      ...u,
      type: r,
      component: typeof o == "string" ? o : void 0
    });
  }
  renderTypedItem(e, t, n) {
    const { children: s, className: i, key: r, ...o } = t;
    return /* @__PURE__ */ f(
      "li",
      {
        className: k(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, i),
        ...o,
        children: [
          /* @__PURE__ */ f(e, { ...n }),
          typeof s == "function" ? s() : s
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: n,
      commonItemProps: s,
      className: i,
      items: r,
      children: o,
      itemRender: a,
      onClickItem: l,
      beforeRender: h,
      afterRender: c,
      beforeDestroy: d,
      ...u
    } = e, p = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(p, { class: k(this.name, i), style: n, ...u, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      o
    ] });
  }
};
let ze = Fr;
ze.ItemComponents = {
  divider: Lu,
  item: wc,
  heading: Iu,
  space: Wu,
  custom: Ou,
  basic: _c
};
ze.ROOT_TAG = "menu";
ze.NAME = "action-menu";
class bc extends q {
}
bc.NAME = "ActionMenu";
bc.Component = ze;
function Hu({
  items: e,
  show: t,
  level: n,
  ...s
}) {
  return /* @__PURE__ */ f(wc, { ...s });
}
var xc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, yt = (e, t, n) => (xc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Sr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Bu = (e, t, n, s) => (xc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), js, It, Tn;
let or = class extends ze {
  constructor(t) {
    super(t), Sr(this, js, /* @__PURE__ */ new Set()), Sr(this, It, void 0), Sr(this, Tn, (n, s, i) => {
      m(i.target).closest(".not-nested-toggle").length || (this.toggle(n, s), i.preventDefault());
    }), Bu(this, It, t.nestedShow === void 0), yt(this, It) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: s, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = k(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: s, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: c, level: d, itemRenderProps: u } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: yt(this, It) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: c,
      onClickItem: l,
      afterRender: h,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      itemRenderProps: u,
      level: (d || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(n);
    return /* @__PURE__ */ f(s, { ...i, "data-level": i.level });
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
    const r = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    yt(this, js).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: yt(this, Tn).bind(this, r, !0),
        onMouseLeave: yt(this, Tn).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        yt(this, Tn).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const n = yt(this, It) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, n);
    if (!yt(this, It))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...yt(this, js).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), n === void 0)
      n = !i[t];
    else if (!!i[t] == !!n)
      return !1;
    return n ? i[t] = n : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    yt(this, It) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    yt(this, It) && this.setState({ nestedShow: !1 });
  }
};
js = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
Tn = /* @__PURE__ */ new WeakMap();
or.ItemComponents = {
  item: Hu
};
class Cc extends q {
}
Cc.NAME = "ActionMenuNested";
Cc.Component = or;
let fe = class extends or {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: n } = t;
    return n === void 0 && (n = t.items.some((s) => s.icon)), t.className = k(t.className, this.menuName, {
      "has-icons": n,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
fe.NAME = "menu";
class $c extends q {
}
$c.NAME = "Menu";
$c.Component = fe;
class et extends z {
  render() {
    const {
      component: t,
      type: n,
      btnType: s,
      size: i,
      className: r,
      children: o,
      url: a,
      target: l,
      disabled: h,
      active: c,
      loading: d,
      loadingIcon: u,
      loadingText: p,
      icon: g,
      text: y,
      trailingIcon: w,
      caret: v,
      square: _,
      rounded: b = !0,
      hint: E,
      ...$
    } = this.props, T = t || (a ? "a" : "button"), R = y == null || typeof y == "string" && !y.length || d && !p, P = v && R && !g && !w && !o && !d;
    return j(
      T,
      {
        className: k("btn", n, r, {
          "btn-caret": P,
          disabled: h || d,
          active: c,
          loading: d,
          square: _ === void 0 ? !P && !o && R : _
        }, i ? `size-${i}` : "", typeof b == "string" ? b : { rounded: b }),
        title: E,
        [T === "a" ? "href" : "data-url"]: a,
        [T === "a" ? "target" : "data-target"]: l,
        type: T === "button" ? s : void 0,
        ...$
      },
      d ? /* @__PURE__ */ f(nt, { icon: u || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(nt, { icon: g }),
      R ? null : /* @__PURE__ */ f("span", { className: "text", children: d ? p : y }),
      d ? null : o,
      d ? null : /* @__PURE__ */ f(nt, { icon: w }),
      d ? null : v ? /* @__PURE__ */ f("span", { className: typeof v == "string" ? `caret-${v}` : "caret" }) : null
    );
  }
}
function zu({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(et, { type: n, ...s });
}
function Ms(e) {
  return e.split("-")[1];
}
function ta(e) {
  return e === "y" ? "height" : "width";
}
function Ee(e) {
  return e.split("-")[0];
}
function Ts(e) {
  return ["top", "bottom"].includes(Ee(e)) ? "x" : "y";
}
function nl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = Ts(t), l = ta(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (Ee(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (Ms(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Fu = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = nl(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: E, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...E } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = nl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function Es(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kc(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function bi(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Sc(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = Es(t, e), g = kc(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = bi(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = bi(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - E.top + g.top) / b.y, bottom: (E.bottom - w.bottom + g.bottom) / b.y, left: (w.left - E.left + g.left) / b.x, right: (E.right - w.right + g.right) / b.x };
}
const Ur = Math.min, Uu = Math.max;
function Vr(e, t, n) {
  return Uu(e, Ur(t, n));
}
const qr = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: s, placement: i, rects: r, platform: o, elements: a } = t, { element: l, padding: h = 0 } = Es(e, t) || {};
  if (l == null)
    return {};
  const c = kc(h), d = { x: n, y: s }, u = Ts(i), p = ta(u), g = await o.getDimensions(l), y = u === "y", w = y ? "top" : "left", v = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", b = r.reference[p] + r.reference[u] - d[u] - r.floating[p], E = d[u] - r.reference[u], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
  let T = $ ? $[_] : 0;
  T && await (o.isElement == null ? void 0 : o.isElement($)) || (T = a.floating[_] || r.floating[p]);
  const R = b / 2 - E / 2, P = T / 2 - g[p] / 2 - 1, H = Ur(c[w], P), S = Ur(c[v], P), A = H, L = T - g[p] - S, M = T / 2 - g[p] / 2 + R, I = Vr(A, M, L), W = Ms(i) != null && M != I && r.reference[p] / 2 - (M < A ? H : S) - g[p] / 2 < 0 ? M < A ? A - M : L - M : 0;
  return { [u]: d[u] - W, data: { [u]: I, centerOffset: M - I + W } };
} }), Vu = ["top", "right", "bottom", "left"];
Vu.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const qu = { left: "right", right: "left", bottom: "top", top: "bottom" };
function xi(e) {
  return e.replace(/left|right|bottom|top/g, (t) => qu[t]);
}
function Gu(e, t, n) {
  n === void 0 && (n = !1);
  const s = Ms(e), i = Ts(e), r = ta(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = xi(o)), { main: o, cross: xi(o) };
}
const Yu = { start: "end", end: "start" };
function Mr(e) {
  return e.replace(/start|end/g, (t) => Yu[t]);
}
const ar = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = Es(e, t), w = Ee(s), v = Ee(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [xi(o)] : function(A) {
      const L = xi(A);
      return [Mr(A), L, Mr(L)];
    }(o));
    d || p === "none" || b.push(...function(A, L, M, I) {
      const W = Ms(A);
      let U = function(ot, bn, Ps) {
        const xn = ["left", "right"], Ds = ["right", "left"], _r = ["top", "bottom"], Td = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Ps ? bn ? Ds : xn : bn ? xn : Ds;
          case "left":
          case "right":
            return bn ? _r : Td;
          default:
            return [];
        }
      }(Ee(A), M === "start", I);
      return W && (U = U.map((ot) => ot + "-" + W), L && (U = U.concat(U.map(Mr)))), U;
    }(o, g, p, _));
    const E = [o, ...b], $ = await Sc(t, y), T = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push($[w]), c) {
      const { main: A, cross: L } = Gu(s, r, _);
      T.push($[A], $[L]);
    }
    if (R = [...R, { placement: s, overflows: T }], !T.every((A) => A <= 0)) {
      var P, H;
      const A = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, L = E[A];
      if (L)
        return { data: { index: A, overflows: R }, reset: { placement: L } };
      let M = (H = R.filter((I) => I.overflows[0] <= 0).sort((I, W) => I.overflows[1] - W.overflows[1])[0]) == null ? void 0 : H.placement;
      if (!M)
        switch (u) {
          case "bestFit": {
            var S;
            const I = (S = R.map((W) => [W.placement, W.overflows.filter((U) => U > 0).reduce((U, ot) => U + ot, 0)]).sort((W, U) => W[1] - U[1])[0]) == null ? void 0 : S[0];
            I && (M = I);
            break;
          }
          case "initialPlacement":
            M = o;
        }
      if (s !== M)
        return { reset: { placement: M } };
    }
    return {};
  } };
}, lr = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = Ee(a), u = Ms(a), p = Ts(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = Es(o, r);
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function Ku(e) {
  return e === "x" ? "y" : "x";
}
const Ci = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: s, placement: i } = t, { mainAxis: r = !0, crossAxis: o = !1, limiter: a = { fn: (w) => {
      let { x: v, y: _ } = w;
      return { x: v, y: _ };
    } }, ...l } = Es(e, t), h = { x: n, y: s }, c = await Sc(t, l), d = Ts(Ee(i)), u = Ku(d);
    let p = h[d], g = h[u];
    if (r) {
      const w = d === "y" ? "bottom" : "right";
      p = Vr(p + c[d === "y" ? "top" : "left"], p, p - c[w]);
    }
    if (o) {
      const w = u === "y" ? "bottom" : "right";
      g = Vr(g + c[u === "y" ? "top" : "left"], g, g - c[w]);
    }
    const y = a.fn({ ...t, [d]: p, [u]: g });
    return { ...y, data: { x: y.x - n, y: y.y - s } };
  } };
};
function ut(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function xt(e) {
  return ut(e).getComputedStyle(e);
}
function Mc(e) {
  return e instanceof ut(e).Node;
}
function pe(e) {
  return Mc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function $t(e) {
  return e instanceof ut(e).HTMLElement;
}
function qt(e) {
  return e instanceof ut(e).Element;
}
function sl(e) {
  return typeof ShadowRoot < "u" && (e instanceof ut(e).ShadowRoot || e instanceof ShadowRoot);
}
function ns(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = xt(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function ju(e) {
  return ["table", "td", "th"].includes(pe(e));
}
function Gr(e) {
  const t = ea(), n = xt(e);
  return n.transform !== "none" || n.perspective !== "none" || !!n.containerType && n.containerType !== "normal" || !t && !!n.backdropFilter && n.backdropFilter !== "none" || !t && !!n.filter && n.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (n.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (n.contain || "").includes(s));
}
function ea() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function cr(e) {
  return ["html", "body", "#document"].includes(pe(e));
}
const Yr = Math.min, sn = Math.max, $i = Math.round, Is = Math.floor, Le = (e) => ({ x: e, y: e });
function Tc(e) {
  const t = xt(e);
  let n = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = $t(e), r = i ? e.offsetWidth : n, o = i ? e.offsetHeight : s, a = $i(n) !== r || $i(s) !== o;
  return a && (n = r, s = o), { width: n, height: s, $: a };
}
function na(e) {
  return qt(e) ? e : e.contextElement;
}
function rn(e) {
  const t = na(e);
  if (!$t(t))
    return Le(1);
  const n = t.getBoundingClientRect(), { width: s, height: i, $: r } = Tc(t);
  let o = (r ? $i(n.width) : n.width) / s, a = (r ? $i(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
const il = Le(0);
function Ec(e, t, n) {
  var s, i;
  if (t === void 0 && (t = !0), !ea())
    return il;
  const r = e ? ut(e) : window;
  return !n || t && n !== r ? il : { x: ((s = r.visualViewport) == null ? void 0 : s.offsetLeft) || 0, y: ((i = r.visualViewport) == null ? void 0 : i.offsetTop) || 0 };
}
function Ie(e, t, n, s) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), r = na(e);
  let o = Le(1);
  t && (s ? qt(s) && (o = rn(s)) : o = rn(e));
  const a = Ec(r, n, s);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, c = i.width / o.x, d = i.height / o.y;
  if (r) {
    const u = ut(r), p = s && qt(s) ? ut(s) : s;
    let g = u.frameElement;
    for (; g && s && p !== u; ) {
      const y = rn(g), w = g.getBoundingClientRect(), v = getComputedStyle(g), _ = w.left + (g.clientLeft + parseFloat(v.paddingLeft)) * y.x, b = w.top + (g.clientTop + parseFloat(v.paddingTop)) * y.y;
      l *= y.x, h *= y.y, c *= y.x, d *= y.y, l += _, h += b, g = ut(g).frameElement;
    }
  }
  return bi({ width: c, height: d, x: l, y: h });
}
function Gt(e) {
  return ((Mc(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function hr(e) {
  return qt(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Nc(e) {
  return Ie(Gt(e)).left + hr(e).scrollLeft;
}
function wn(e) {
  if (pe(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || sl(e) && e.host || Gt(e);
  return sl(t) ? t.host : t;
}
function Rc(e) {
  const t = wn(e);
  return cr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : $t(t) && ns(t) ? t : Rc(t);
}
function ki(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Rc(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = ut(s);
  return i ? t.concat(r, r.visualViewport || [], ns(s) ? s : []) : t.concat(s, ki(s));
}
function rl(e, t, n) {
  let s;
  if (t === "viewport")
    s = function(i, r) {
      const o = ut(i), a = Gt(i), l = o.visualViewport;
      let h = a.clientWidth, c = a.clientHeight, d = 0, u = 0;
      if (l) {
        h = l.width, c = l.height;
        const p = ea();
        (!p || p && r === "fixed") && (d = l.offsetLeft, u = l.offsetTop);
      }
      return { width: h, height: c, x: d, y: u };
    }(e, n);
  else if (t === "document")
    s = function(i) {
      const r = Gt(i), o = hr(i), a = i.ownerDocument.body, l = sn(r.scrollWidth, r.clientWidth, a.scrollWidth, a.clientWidth), h = sn(r.scrollHeight, r.clientHeight, a.scrollHeight, a.clientHeight);
      let c = -o.scrollLeft + Nc(i);
      const d = -o.scrollTop;
      return xt(a).direction === "rtl" && (c += sn(r.clientWidth, a.clientWidth) - l), { width: l, height: h, x: c, y: d };
    }(Gt(e));
  else if (qt(t))
    s = function(i, r) {
      const o = Ie(i, !0, r === "fixed"), a = o.top + i.clientTop, l = o.left + i.clientLeft, h = $t(i) ? rn(i) : Le(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(t, n);
  else {
    const i = Ec(e);
    s = { ...t, x: t.x - i.x, y: t.y - i.y };
  }
  return bi(s);
}
function Ac(e, t) {
  const n = wn(e);
  return !(n === t || !qt(n) || cr(n)) && (xt(n).position === "fixed" || Ac(n, t));
}
function ol(e, t) {
  return $t(e) && xt(e).position !== "fixed" ? t ? t(e) : e.offsetParent : null;
}
function al(e, t) {
  const n = ut(e);
  if (!$t(e))
    return n;
  let s = ol(e, t);
  for (; s && ju(s) && xt(s).position === "static"; )
    s = ol(s, t);
  return s && (pe(s) === "html" || pe(s) === "body" && xt(s).position === "static" && !Gr(s)) ? n : s || function(i) {
    let r = wn(i);
    for (; $t(r) && !cr(r); ) {
      if (Gr(r))
        return r;
      r = wn(r);
    }
    return null;
  }(e) || n;
}
function Xu(e, t, n) {
  const s = $t(t), i = Gt(t), r = n === "fixed", o = Ie(e, !0, r, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Le(0);
  if (s || !s && !r)
    if ((pe(t) !== "body" || ns(i)) && (a = hr(t)), $t(t)) {
      const h = Ie(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Nc(i));
  return { x: o.left + a.scrollLeft - l.x, y: o.top + a.scrollTop - l.y, width: o.width, height: o.height };
}
const Ju = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = ki(h).filter((w) => qt(w) && pe(w) !== "body"), p = null;
    const g = xt(h).position === "fixed";
    let y = g ? wn(h) : h;
    for (; qt(y) && !cr(y); ) {
      const w = xt(y), v = Gr(y);
      v || w.position !== "fixed" || (p = null), (g ? !v && !p : !v && w.position === "static" && p && ["absolute", "fixed"].includes(p.position) || ns(y) && !v && Ac(h, y)) ? u = u.filter((_) => _ !== y) : p = w, y = wn(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = rl(t, c, i);
    return h.top = sn(d.top, h.top), h.right = Yr(d.right, h.right), h.bottom = Yr(d.bottom, h.bottom), h.left = sn(d.left, h.left), h;
  }, rl(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = $t(n), r = Gt(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = Le(1);
  const l = Le(0);
  if ((i || !i && s !== "fixed") && ((pe(n) !== "body" || ns(r)) && (o = hr(n)), $t(n))) {
    const h = Ie(n);
    a = rn(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: qt, getDimensions: function(e) {
  return Tc(e);
}, getOffsetParent: al, getDocumentElement: Gt, getScale: rn, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || al, r = this.getDimensions;
  return { reference: Xu(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => xt(e).direction === "rtl" };
function sa(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = na(e), c = i || r ? [...h ? ki(h) : [], ...ki(t)] : [];
  c.forEach((w) => {
    i && w.addEventListener("scroll", n, { passive: !0 }), r && w.addEventListener("resize", n);
  });
  const d = h && a ? function(w, v) {
    let _, b = null;
    const E = Gt(w);
    function $() {
      clearTimeout(_), b && b.disconnect(), b = null;
    }
    return function T(R, P) {
      R === void 0 && (R = !1), P === void 0 && (P = 1), $();
      const { left: H, top: S, width: A, height: L } = w.getBoundingClientRect();
      if (R || v(), !A || !L)
        return;
      const M = { rootMargin: -Is(S) + "px " + -Is(E.clientWidth - (H + A)) + "px " + -Is(E.clientHeight - (S + L)) + "px " + -Is(H) + "px", threshold: sn(0, Yr(1, P)) || 1 };
      let I = !0;
      function W(U) {
        const ot = U[0].intersectionRatio;
        if (ot !== P) {
          if (!I)
            return T();
          ot ? T(!1, ot) : _ = setTimeout(() => {
            T(!1, 1e-7);
          }, 100);
        }
        I = !1;
      }
      try {
        b = new IntersectionObserver(W, { ...M, root: E.ownerDocument });
      } catch {
        b = new IntersectionObserver(W, M);
      }
      b.observe(w);
    }(!0), $;
  }(h, n) : null;
  let u, p = -1, g = null;
  o && (g = new ResizeObserver((w) => {
    let [v] = w;
    v && v.target === h && g && (g.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      g && g.observe(t);
    })), n();
  }), h && !l && g.observe(h), g.observe(t));
  let y = l ? Ie(e) : null;
  return l && function w() {
    const v = Ie(e);
    !y || v.x === y.x && v.y === y.y && v.width === y.width && v.height === y.height || n(), y = v, u = requestAnimationFrame(w);
  }(), n(), () => {
    c.forEach((w) => {
      i && w.removeEventListener("scroll", n), r && w.removeEventListener("resize", n);
    }), d && d(), g && g.disconnect(), g = null, l && cancelAnimationFrame(u);
  };
}
const dr = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: Ju, ...n }, r = { ...i.platform, _c: s };
  return Fu(e, t, { ...i, platform: r });
};
var Pc = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ll = (e, t, n) => (Pc(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Zu = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Qu = (e, t, n, s) => (Pc(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), En;
let Dc = class extends fe {
  constructor() {
    super(...arguments), Zu(this, En, 0);
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
    !t || !n || dr(n, t, {
      placement: "right-start",
      middleware: [ar(), Ci(), lr(1)]
    }).then(({ x: s, y: i }) => {
      m(t).css({
        left: s,
        top: i
      });
    });
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t);
    return {
      ...n,
      className: k("absolute", n.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), Qu(this, En, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), ll(this, En) && clearTimeout(ll(this, En));
  }
};
En = /* @__PURE__ */ new WeakMap();
Dc.defaultProps = {
  ...fe.defaultProps,
  popup: !0
};
var ia = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Lt = (e, t, n) => (ia(e, t, "read from private field"), n ? n.call(e) : t.get(e)), qe = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ws = (e, t, n, s) => (ia(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), cl = (e, t, n) => (ia(e, t, "access private method"), n), se, Nn, Xs, Js, Kr, Lc, jr, Ic;
const Tr = "show", tf = '[data-toggle="contextmenu"]';
class rt extends mt {
  constructor() {
    super(...arguments), qe(this, Kr), qe(this, jr), qe(this, se, void 0), qe(this, Nn, void 0), qe(this, Xs, void 0), qe(this, Js, void 0);
  }
  get isShown() {
    return Lt(this, se) && m(Lt(this, se)).hasClass(Tr);
  }
  get menu() {
    return Lt(this, se) || this.ensureMenu();
  }
  get trigger() {
    return Lt(this, Xs) || this.element;
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
    return this.isShown || (Ws(this, Xs, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (m(this.menu).addClass(Tr), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var t;
    return !this.isShown || ((t = Lt(this, Js)) == null || t.call(this), this.emit("hide").defaultPrevented) ? !1 : (m(Lt(this, se)).removeClass(Tr), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = Lt(this, se)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, n = this.constructor.MENU_CLASS;
    let s;
    if (this.isDynamic)
      s = m(`<div class="${n}" />`).appendTo("body");
    else if (t.length) {
      const i = t.attr("href") || t.dataset("target") || "";
      if (i[0] === "#" && (s = m(document).find(i)), !(s != null && s.length)) {
        const r = t.next();
        r.hasClass(n) ? s = r : s = t.parent().find(`.${n}`);
      }
      s && s.addClass("popup");
    }
    if (!(s != null && s.length))
      throw new Error("[ZUI] ContextMenu: Cannot find menu element.");
    return s.css({
      width: "max-content",
      position: this.options.strategy,
      top: 0,
      left: 0
    }), Ws(this, se, s[0]), s[0];
  }
  getPopperOptions() {
    var i;
    const { placement: t, strategy: n } = this.options, s = {
      middleware: [],
      placement: t,
      strategy: n
    };
    return this.options.flip && ((i = s.middleware) == null || i.push(ar())), s;
  }
  createPopper() {
    const t = this.getPopperOptions(), n = this.getPopperElement(), s = this.menu;
    Ws(this, Js, sa(n, s, () => {
      dr(n, s, t).then(({ x: i, y: r, middlewareData: o, placement: a }) => {
        if (m(s).css({ left: i, top: r }), o.arrow && this.arrowEl) {
          const l = a.split("-")[0], h = cl(this, Kr, Lc).call(this, l), { x: c, y: d } = o.arrow;
          m(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: d != null ? `${d}px` : "",
            [h]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...cl(this, jr, Ic).call(this, l)
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
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (es(j(Dc, t), this.menu), !0);
  }
  getPopperElement() {
    return Lt(this, Nn) || Ws(this, Nn, {
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
    }), Lt(this, Nn);
  }
  static clear(t) {
    var a, l;
    t instanceof Event && (t = { event: t });
    const { event: n, exclude: s, ignoreSelector: i = ".not-hide-menu" } = t || {};
    if (n && i && ((l = (a = n.target).closest) != null && l.call(a, i)) || n && n.button === 2)
      return;
    const r = this.getAll(), o = new Set(s || []);
    for (const h of r)
      o.has(h.element) || h.hide();
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
se = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakMap();
Xs = /* @__PURE__ */ new WeakMap();
Js = /* @__PURE__ */ new WeakMap();
Kr = /* @__PURE__ */ new WeakSet();
Lc = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
jr = /* @__PURE__ */ new WeakSet();
Ic = function(e) {
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
rt.MENU_CLASS = "contextmenu";
rt.NAME = "ContextMenu";
rt.MULTI_INSTANCE = !0;
rt.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
m(document).on(`contextmenu${rt.NAMESPACE}`, (e) => {
  const t = m(e.target);
  if (t.closest(`.${rt.MENU_CLASS}`).length)
    return;
  const n = t.closest(tf).not(":disabled,.disabled");
  if (n.length) {
    const s = `${rt.KEY}:options`, i = n.data(s), r = rt.ensure(n, i);
    i || n.data(s, r.options), r.show(e), e.preventDefault();
  }
}).on(`click${rt.NAMESPACE}`, rt.clear.bind(rt));
var ra = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rn = (e, t, n) => (ra(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Os = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Xr = (e, t, n, s) => (ra(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ef = (e, t, n) => (ra(e, t, "access private method"), n), Gn, An, Si, Jr, Wc;
const hl = '[data-toggle="dropdown"]', Oc = class extends rt {
  constructor() {
    super(...arguments), Os(this, Jr), Os(this, Gn, !1), Os(this, An, 0), this.hideLater = () => {
      Rn(this, Si).call(this), Xr(this, An, window.setTimeout(this.hide.bind(this), 100));
    }, Os(this, Si, () => {
      clearTimeout(Rn(this, An)), Xr(this, An, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(e, t) {
    (t == null ? void 0 : t.clearOthers) !== !1 && Oc.clear({ event: t == null ? void 0 : t.event, exclude: [this.element] });
    const n = super.show(e);
    return n && (!Rn(this, Gn) && this.isHover && ef(this, Jr, Wc).call(this), this.$element.addClass(this.elementShowClass)), n;
  }
  hide() {
    const e = super.hide();
    return e && this.$element.removeClass(this.elementShowClass), e;
  }
  toggle(e, t) {
    return this.isShown ? this.hide() : this.show(e, { event: e, ...t });
  }
  destroy() {
    Rn(this, Gn) && m(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: e } = this.options;
    return e ? typeof e == "number" ? e : 8 : 0;
  }
  getPopperOptions() {
    var n, s;
    const e = super.getPopperOptions(), t = this.getArrowSize();
    return t && this.arrowEl && ((n = e.middleware) == null || n.push(lr(t)), (s = e.middleware) == null || s.push(qr({ element: this.arrowEl }))), e;
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
let Yt = Oc;
Gn = /* @__PURE__ */ new WeakMap();
An = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Jr = /* @__PURE__ */ new WeakSet();
Wc = function() {
  m(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, Rn(this, Si)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), Xr(this, Gn, !0);
};
Yt.MENU_CLASS = "dropdown-menu";
Yt.NAME = "Dropdown";
Yt.DEFAULT = {
  ...rt.DEFAULT,
  trigger: "click"
};
const Hs = `${Yt.KEY}:options`;
m(document).on("click", function(e) {
  const t = m(e.target).closest(hl).not(":disabled,.disabled");
  if (!t.length) {
    Yt.clear({ event: e });
    return;
  }
  const n = t.data(Hs), s = Yt.ensure(t, n);
  n || t.data(Hs, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(e) {
  const t = m(e.target).closest(hl);
  if (!t.length)
    return;
  const n = t.data(Hs), s = Yt.ensure(t, n);
  n || t.data(Hs, s.options), s.isHover && s.show();
});
let Bs = 0;
window.addEventListener("scroll", (e) => {
  Bs && clearTimeout(Bs), Bs = window.setTimeout(() => {
    Yt.clear({ event: e }), Bs = 0;
  }, 50);
}, !0);
var ls, cn;
class nf extends z {
  constructor(n) {
    var s;
    super(n);
    D(this, ls, void 0);
    D(this, cn, K());
    this.state = { placement: ((s = n.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return x(this, cn);
  }
  get triggerElement() {
    return x(this, cn).current;
  }
  componentDidMount() {
    const { modifiers: n = [], ...s } = this.props.dropdown || {};
    n.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: i }) => {
        var o;
        const r = ((o = i.placement) == null ? void 0 : o.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), O(this, ls, Yt.ensure(this.triggerElement, {
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
    (n = x(this, ls)) == null || n.destroy();
  }
  beforeRender() {
    const { className: n, children: s, dropdown: i, ...r } = this.props;
    return {
      className: k("dropdown", n),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: x(this, cn)
    };
  }
  render() {
    const { children: n, ...s } = this.beforeRender();
    return /* @__PURE__ */ f("div", { ...s, children: n });
  }
}
ls = new WeakMap(), cn = new WeakMap();
class sf extends nf {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var r;
    const { placement: t, show: n } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (n || i === !0)) {
      const o = (n ? t : (r = this.props.dropdown) == null ? void 0 : r.placement) || "";
      i = (o.includes("top") ? "up" : o.includes("bottom") ? "down" : o) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ f(et, { ...s });
  }
}
function Hc({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(sf, { type: n, ...s });
}
let Bc = class extends z {
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
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: n, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, n = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return n && Object.assign(t, n), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, n) {
    const { key: s = n, ...i } = t;
    return /* @__PURE__ */ f(et, { ...i }, s);
  }
  renderItem(t, n, s) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: s, ...n };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, s, n.onClick)), i) {
      const l = i.call(this, a, j);
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
      type: r,
      btnProps: o,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: c,
      afterRender: d,
      beforeDestroy: u,
      ...p
    } = t;
    return /* @__PURE__ */ f(
      "div",
      {
        className: k("btn-group", i ? `size-${i}` : "", n),
        ...p,
        children: [
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function rf({
  key: e,
  type: t,
  btnType: n,
  ...s
}) {
  return /* @__PURE__ */ f(Bc, { type: n, ...s });
}
let pt = class extends ze {
  beforeRender() {
    const { gap: t, btnProps: n, wrap: s, ...i } = super.beforeRender();
    return i.className = k(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, n, s) {
    const { type: i } = s, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {}, a = {
      ...n,
      ...o,
      ...s,
      className: k(`${this.name}-${i}`, n.className, o.className, s.className),
      style: Object.assign({}, n.style, o.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
pt.ItemComponents = {
  item: zu,
  dropdown: Hc,
  "btn-group": rf
};
pt.ROOT_TAG = "nav";
pt.NAME = "toolbar";
pt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function of({
  className: e,
  style: t,
  actions: n,
  heading: s,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: h,
  ...c
}) {
  let d;
  a === !0 ? d = /* @__PURE__ */ f(et, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Q(a) ? d = a : typeof a == "object" && (d = /* @__PURE__ */ f(et, { ...a, onClick: l }));
  const u = Q(n) ? n : n ? /* @__PURE__ */ f(pt, { ...n }) : null;
  return /* @__PURE__ */ f("div", { className: k("alert", e), style: t, ...c, children: [
    /* @__PURE__ */ f(nt, { icon: h, className: "alert-icon" }),
    Q(i) ? i : /* @__PURE__ */ f("div", { className: k("alert-content", r), children: [
      Q(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? u : null
    ] }),
    s ? null : u,
    d,
    o
  ] });
}
function af(e) {
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
function lf({
  margin: e,
  type: t,
  placement: n,
  animation: s,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    of,
    {
      className: k("messager", r, t, s === !0 ? af(n) : s, i ? "in" : ""),
      ...a
    }
  );
}
var cf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, hf = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Cn = (e, t, n) => (cf(e, t, "access private method"), n), be, je;
class oa extends q {
  constructor() {
    super(...arguments), hf(this, be), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), Cn(this, be, je).call(this, () => {
      this._show = !0, this.render(), Cn(this, be, je).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Cn(this, be, je).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Cn(this, be, je).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Cn(this, be, je).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
be = /* @__PURE__ */ new WeakSet();
je = function(e, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    e(), this._showTimer = 0;
  }, t);
};
oa.NAME = "MessagerItem";
oa.Component = lf;
var aa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Ne = (e, t, n) => (aa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), zs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Zs = (e, t, n, s) => (aa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), zc = (e, t, n) => (aa(e, t, "access private method"), n), on, Ut, Zr, Fc, la, Uc;
const Vc = class extends mt {
  constructor() {
    super(...arguments), zs(this, Zr), zs(this, la), zs(this, on, void 0), zs(this, Ut, void 0);
  }
  get isShown() {
    var e;
    return !!((e = Ne(this, Ut)) != null && e.isShown);
  }
  show(e) {
    this.setOptions(e), zc(this, Zr, Fc).call(this).show();
  }
  hide() {
    var e;
    (e = Ne(this, Ut)) == null || e.hide();
  }
  static show(e) {
    typeof e == "string" && (e = { content: e });
    const { container: t, ...n } = e, s = Vc.ensure(t || "body");
    return s.setOptions(n), s.hide(), s.show(), s;
  }
};
let qc = Vc;
on = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Zr = /* @__PURE__ */ new WeakSet();
Fc = function() {
  if (Ne(this, Ut))
    Ne(this, Ut).setOptions(this.options);
  else {
    const e = zc(this, la, Uc).call(this), t = new oa(e, this.options);
    t.on("hidden", () => {
      t.destroy(), e == null || e.remove(), Zs(this, on, void 0), Zs(this, Ut, void 0);
    }), Zs(this, Ut, t);
  }
  return Ne(this, Ut);
};
la = /* @__PURE__ */ new WeakSet();
Uc = function() {
  if (Ne(this, on))
    return Ne(this, on);
  const { placement: e = "top" } = this.options;
  let t = this.$element.find(`.messagers-${e}`);
  t.length || (t = m(`<div class="messagers messagers-${e}"></div>`).appendTo(this.$element));
  let n = t.find(`#messager-${this.gid}`);
  return n.length || (n = m(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Zs(this, on, n[0])), n[0];
};
qc.NAME = "messager";
qc.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Gc = class extends z {
  render(t) {
    const { percent: n = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: h, textY: c } = t, d = s / 2;
    let { circleWidth: u = 0.2 } = t;
    u < 1 && (u = s * u);
    const p = (s - u) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ f("circle", { cx: d, cy: d, r: p, "stroke-width": u, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: d, cy: d, r: p, "stroke-width": u, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * p * 2, "stroke-dashoffset": Math.PI * p * 2 * (100 - n) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: h ?? d, y: c ?? d + u / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${p}px` }, children: o === !0 ? Math.round(n) : o }) : null
    ] });
  }
};
Gc.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Yc extends q {
}
Yc.NAME = "ProgressCircle";
Yc.Component = Gc;
var Ft;
class df {
  constructor(t = "") {
    D(this, Ft, void 0);
    typeof t == "object" ? O(this, Ft, t) : O(this, Ft, document.appendChild(document.createComment(t)));
  }
  on(t, n, s) {
    x(this, Ft).addEventListener(t, n, s);
  }
  once(t, n, s) {
    x(this, Ft).addEventListener(t, n, { once: !0, ...s });
  }
  off(t, n, s) {
    x(this, Ft).removeEventListener(t, n, s);
  }
  emit(t) {
    return x(this, Ft).dispatchEvent(t), t;
  }
}
Ft = new WeakMap();
const dl = /* @__PURE__ */ new Set([
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
class Kc extends df {
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
    return typeof t == "string" && (dl.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), super.emit(Kc.createEvent(t, n));
  }
  static createEvent(t, n) {
    return typeof t == "string" && (dl.has(t) ? (t = new Event(t), Object.assign(t, { detail: n })) : t = new CustomEvent(t, { detail: n })), t;
  }
}
let jc = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((t, n) => (n &= 63, n < 36 ? t += n.toString(36) : n < 62 ? t += (n - 26).toString(36).toUpperCase() : n > 62 ? t += "-" : t += "_", t), "");
var cs, ae, Tt, hn, dn, Qs;
const Fa = class {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, n = "local") {
    D(this, dn);
    D(this, cs, void 0);
    D(this, ae, void 0);
    D(this, Tt, void 0);
    D(this, hn, void 0);
    O(this, cs, n), O(this, ae, `ZUI_STORE:${t ?? jc()}`), O(this, Tt, n === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return x(this, cs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (x(this, hn) || O(this, hn, new Fa(x(this, ae), "session")), x(this, hn));
  }
  /**
   * Get value from store
   * @param key Key to get
   * @param defaultValue default value to return if key is not found
   * @returns Value of key or defaultValue if key is not found
   */
  get(t, n) {
    const s = x(this, Tt).getItem(Dt(this, dn, Qs).call(this, t));
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
    x(this, Tt).setItem(Dt(this, dn, Qs).call(this, t), JSON.stringify(n));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    x(this, Tt).removeItem(Dt(this, dn, Qs).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let n = 0; n < x(this, Tt).length; n++) {
      const s = x(this, Tt).key(n);
      if (s != null && s.startsWith(x(this, ae))) {
        const i = x(this, Tt).getItem(s);
        typeof i == "string" && t(s.substring(x(this, ae).length + 1), JSON.parse(i));
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
let Mi = Fa;
cs = new WeakMap(), ae = new WeakMap(), Tt = new WeakMap(), hn = new WeakMap(), dn = new WeakSet(), Qs = function(t) {
  return `${x(this, ae)}:${t}`;
};
const uf = new Mi("DEFAULT");
function ff(e, t = "local") {
  return new Mi(e, t);
}
Object.assign(uf, { create: ff });
function pf(e) {
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
function mf(e) {
  const [t, n, s] = typeof e == "string" ? pf(e) : e;
  return t * 0.299 + n * 0.587 + s * 0.114 > 186;
}
function ul(e, t) {
  return mf(e) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function fl(e, t = 255) {
  return Math.min(Math.max(e, 0), t);
}
function gf(e, t, n) {
  e = e % 360 / 360, t = fl(t), n = fl(n);
  const s = n <= 0.5 ? n * (t + 1) : n + t - n * t, i = n * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(e + 1 / 3) * 255,
    r(e) * 255,
    r(e - 1 / 3) * 255
  ];
}
function yf(e) {
  let t = 0;
  if (typeof e != "string" && (e = String(e)), e && e.length)
    for (let n = 0; n < e.length; ++n)
      t += (n + 1) * e.charCodeAt(n);
  return t;
}
function vf(e, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(e) ? e.length <= t ? e : e.substring(e.length - t) : /^[A-Za-z\d\s]+$/.test(e) ? e[0].toUpperCase() : e.length <= t ? e : e.substring(0, t);
}
let Xc = class extends z {
  render() {
    const {
      className: t,
      style: n,
      size: s = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: c = 2,
      src: d,
      hueDistance: u = 43,
      saturation: p = 0.4,
      lightness: g = 0.6,
      children: y,
      ...w
    } = this.props, v = ["avatar", t], _ = { ...n, background: o, color: a };
    let b = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, b = s) : (v.push(`size-${s}`), b = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? v.push("circle") : r && (typeof r == "number" ? _.borderRadius = `${r}px` : v.push(`rounded-${r}`));
    let E;
    if (d)
      v.push("has-img"), E = /* @__PURE__ */ f("img", { className: "avatar-img", src: d, alt: l });
    else if (l != null && l.length) {
      const $ = vf(l, c);
      if (v.push("has-text", `has-text-${$.length}`), o)
        !a && o && (_.color = ul(o));
      else {
        const R = h ?? l, P = (typeof R == "number" ? R : yf(R)) * u % 360;
        if (_.background = `hsl(${P},${p * 100}%,${g * 100}%)`, !a) {
          const H = gf(P, p, g);
          _.color = ul(H);
        }
      }
      let T;
      b && b < 14 * $.length && (T = { transform: `scale(${b / (14 * $.length)})`, whiteSpace: "nowrap" }), E = /* @__PURE__ */ f("div", { "data-actualSize": b, className: "avatar-text", style: T, children: $ });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: k(v),
        style: _,
        ...w,
        children: [
          E,
          y
        ]
      }
    );
  }
};
class Jc extends q {
}
Jc.NAME = "Avatar";
Jc.Component = Xc;
class Zc extends q {
}
Zc.NAME = "BtnGroup";
Zc.Component = Bc;
const pl = Symbol("EVENT_FROM_PICK");
var hs;
class ca extends z {
  constructor(n) {
    super(n);
    D(this, hs, void 0);
    this._handleClick = this._handleClick.bind(this), O(this, hs, !!m(`#${n.id}`).length);
  }
  _handleClick(n) {
    const { togglePop: s, clickType: i, onClick: r } = this.props;
    let o = i === "open" ? !0 : void 0;
    const a = m(n.target), l = r == null ? void 0 : r(n);
    if (!n.defaultPrevented) {
      if (typeof l == "boolean")
        o = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          s(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => s(o));
    }
  }
  _getClass(n) {
    const { state: s, className: i } = n, { open: r, disabled: o } = s;
    return k(
      "pick",
      i,
      r && "is-open focus",
      o && "disabled"
    );
  }
  _getProps(n) {
    const { id: s, style: i, attrs: r } = n;
    return {
      id: `pick-${s}`,
      className: this._getClass(n),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...r
    };
  }
  _renderTrigger(n) {
    const { children: s, state: i } = n;
    return s ?? i.value;
  }
  _renderValue(n) {
    const { name: s, state: { value: i = "" }, id: r } = n;
    if (s)
      if (x(this, hs))
        m(`#${r}`).val(i);
      else
        return /* @__PURE__ */ f("input", { id: r, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: n, state: s } = this.props;
    m(`#${n}`).on(`change.pick.zui.${n}`, (i, r) => {
      if (r === pl)
        return;
      const o = i.target.value;
      o !== s.value && this.props.changeState({ value: o });
    });
  }
  componentWillUnmount() {
    const { id: n } = this.props;
    m(`#${n}`).off(`change.pick.zui.${n}`);
  }
  componentDidUpdate(n) {
    const { id: s, state: i, name: r } = this.props;
    r && n.state.value !== i.value && m(`#${s}`).trigger("change", pl);
  }
  render(n) {
    return j(
      n.tagName || "div",
      this._getProps(n),
      this._renderTrigger(n),
      this._renderValue(n)
    );
  }
}
hs = new WeakMap();
var Te, Et, le;
class Qc extends z {
  constructor(n) {
    super(n);
    D(this, Te, void 0);
    D(this, Et, void 0);
    D(this, le, void 0);
    O(this, Te, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = m(s.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return m(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var n;
    return (n = x(this, Te)) == null ? void 0 : n.current;
  }
  get container() {
    return x(this, le);
  }
  _handleClick(n) {
    const { togglePop: s } = this.props, i = m(n.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return n.stopPropagation(), s(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(n) {
    const { className: s, state: i } = n, { open: r } = i;
    return k(
      "pick-pop",
      s,
      r === !0 && "in"
    );
  }
  _getProps(n) {
    const {
      id: s,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = n, h = m.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(n),
      style: h,
      ref: x(this, Te),
      onClick: this._handleClick
    };
  }
  _getContainer(n) {
    if (!x(this, le)) {
      const s = m(n.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = m("<div>").addClass("pick-container").appendTo(s)), O(this, le, i[0]);
    }
    return x(this, le);
  }
  _render(n) {
    return /* @__PURE__ */ f("div", { ...this._getProps(n), children: this._renderPop(n) });
  }
  _renderPop(n) {
    return n.children;
  }
  layout() {
    const { element: n, trigger: s, props: i } = this, { state: r } = i;
    if (!n || !s || !r.open) {
      x(this, Et) && (x(this, Et).call(this), O(this, Et, void 0));
      return;
    }
    x(this, Et) || O(this, Et, sa(s, n, () => {
      const { placement: o, width: a } = i;
      dr(s, n, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? ar() : null, Ci(), lr(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var c, d;
        m(n).css({
          left: l,
          top: h,
          width: a === "100%" ? m(s).outerWidth() : void 0
        }), (d = (c = this.props).onLayout) == null || d.call(c, n);
      }), a === "100%" && m(n).css({ width: m(n).width() });
    }));
  }
  componentDidMount() {
    var n, s;
    this.layout(), m(document).on("click", this._handleDocClick), (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !0 });
  }
  componentDidUpdate() {
    var n, s;
    (s = (n = this.props).afterRender) == null || s.call(n, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    m(document).off("click", this._handleDocClick);
    const n = x(this, Et);
    n && (n(), O(this, Et, void 0)), O(this, le, void 0), O(this, Te, void 0), m(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(n) {
    return Du(this._render(n), this._getContainer(n));
  }
}
Te = new WeakMap(), Et = new WeakMap(), le = new WeakMap();
var th = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ee = (e, t, n) => (th(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Er = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ge = (e, t, n, s) => (th(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ti, wt, Pn;
let gt = class extends z {
  constructor(t) {
    super(t), Er(this, ti, void 0), Er(this, wt, 0), Er(this, Pn, K()), this.changeState = (n, s) => new Promise((i) => {
      this.setState(n, () => {
        s == null || s(), i(this.state);
      });
    }), this.toggle = async (n, s) => {
      this.props.disabled && (n = !1);
      const { state: i } = this;
      if (typeof n == "boolean" && n === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      ee(this, wt) && (clearTimeout(ee(this, wt)), Ge(this, wt, 0));
      let r = await this.changeState((a) => (n = n ?? !a.open, {
        open: n ? "opening" : "closing",
        ...s
      }));
      const { open: o } = r;
      return o === "closing" ? (await yi(200, (a) => {
        Ge(this, wt, a);
      }), Ge(this, wt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await yi(50, (a) => {
        Ge(this, wt, a);
      }), Ge(this, wt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: t.defaultValue,
      open: !1,
      disabled: !1
    }, Ge(this, ti, t.id ?? `_pick${m.guid++}`);
  }
  get id() {
    return ee(this, ti);
  }
  get pop() {
    return ee(this, Pn).current;
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
    const { onChange: s } = this.props;
    s && s(t, n);
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, n) {
    const { open: s } = this.state, { open: i } = n;
    if (s === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, n) {
    const { open: s, value: i } = this.state, { open: r, value: o } = n;
    if (!!s != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var n;
    (n = this.props.beforeDestroy) == null || n.call(this), ee(this, wt) && clearTimeout(ee(this, wt));
    const t = ee(this, Pn).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: s } = n, i = this._getTrigger(t);
    let r;
    if (s) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: ee(this, Pn), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ f(_n, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
};
ti = /* @__PURE__ */ new WeakMap();
wt = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakMap();
gt.Trigger = ca;
gt.Pop = Qc;
gt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let eh = class extends gt {
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
    const { syncBackground: t, syncBorder: n, syncColor: s, syncValue: i } = this.props, r = this.state.value || "";
    if (t && m(t).css("backgroundColor", r), n && m(n).css("borderColor", r), s && m(s).css("color", r), i) {
      const o = m(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, n) {
    this.props.disabled || (super._handleChange(t, n), this.syncColor());
  }
  _renderTrigger(t, n) {
    const { icon: s } = t, { value: i } = n;
    return [
      s ? /* @__PURE__ */ f(nt, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return s.style = m.extend({
      color: n.value
    }, s.style), s.className = k("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, n) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = n;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
eh.defaultProps = {
  ...gt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class nh extends q {
}
nh.NAME = "ColorPicker";
nh.Component = eh;
const ss = 24 * 60 * 60 * 1e3, Z = (e) => e ? (e instanceof Date || (typeof e == "string" && (e = e.trim(), /^\d+$/.test(e) && (e = Number.parseInt(e, 10))), typeof e == "number" && e < 1e10 && (e *= 1e3), e = new Date(e)), e) : /* @__PURE__ */ new Date(), wf = (e, t, n = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    n = t.replace(s.toString(), ""), t = s;
  }
  return e = new Date(Z(e).getTime()), n === "month" ? e.setMonth(e.getMonth() + t) : n === "year" ? e.setFullYear(e.getFullYear() + t) : n === "week" ? e.setDate(e.getDate() + t * 7) : n === "hour" ? e.setHours(e.getHours() + t) : n === "minute" ? e.setMinutes(e.getMinutes() + t) : n === "second" ? e.setSeconds(e.getSeconds() + t) : e.setDate(e.getDate() + t), e;
}, Ns = (e, t = /* @__PURE__ */ new Date()) => Z(e).toDateString() === Z(t).toDateString(), Qr = (e, t = /* @__PURE__ */ new Date()) => Z(e).getFullYear() === Z(t).getFullYear(), sh = (e, t = /* @__PURE__ */ new Date()) => (e = Z(e), t = Z(t), e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth()), Yp = (e, t = /* @__PURE__ */ new Date()) => {
  e = Z(e), t = Z(t);
  const n = 1e3 * 60 * 60 * 24, s = Math.floor(e.getTime() / n), i = Math.floor(t.getTime() / n);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Kp = (e, t) => Ns(Z(t), e), jp = (e, t) => Ns(Z(t).getTime() - ss, e), Xp = (e, t) => Ns(Z(t).getTime() + ss, e), kt = (e, t = "yyyy-MM-dd hh:mm", n = "") => {
  if (e = Z(e), Number.isNaN(e.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Qr(e) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${e.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Jp = (e, t, n) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...n
  }, i = kt(e, Qr(e) ? s.month : s.full);
  if (Ns(e, t))
    return i;
  const r = kt(t, Qr(e, t) ? sh(e, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
var ds, us;
class _f extends z {
  constructor() {
    super(...arguments);
    D(this, ds, K());
    D(this, us, (n, s) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, n, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    m(x(this, ds).current).find(".menu-item>.active").scrollIntoView();
  }
  render(n) {
    const { minuteStep: s = 5, hour: i, minute: r } = n, o = [], a = [];
    for (let h = 0; h < 24; ++h)
      o.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: r === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: x(this, ds), children: [
      /* @__PURE__ */ f(
        fe,
        {
          className: l,
          items: o,
          onClickItem: x(this, us).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        fe,
        {
          className: l,
          items: a,
          onClickItem: x(this, us).bind(this, "minute")
        }
      )
    ] });
  }
}
ds = new WeakMap(), us = new WeakMap();
var bf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Fs = (e, t, n) => (bf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Us = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, to, eo, no, so;
const ml = (e) => {
  if (!e)
    return;
  const t = Z(`1999-01-01 ${e}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let ih = class extends gt {
  constructor(t) {
    super(t), Us(this, to, () => {
      this.toggle(!0);
    }), Us(this, eo, (s) => {
      this.setTime(s.target.value);
    }), Us(this, no, (s, i) => {
      this.setTime({ [s]: i });
    }), Us(this, so, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = kt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: h = +a, minute: c = +l } = t;
      n = `${h}:${c}`;
    }
    const s = ml(n), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: s ? kt(s, this.props.format) : r ? o : "" }, () => {
      !s && i && i(n);
    });
  }
  getTime() {
    const t = ml(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: s, name: i, icon: r, required: o, disabled: a, readonly: l } = t, { value: h = "", open: c } = n, d = `time-picker-${this.id}`;
    let u;
    return c && !o && h.length ? u = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Fs(this, so), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? u = /* @__PURE__ */ f("i", { class: "i-time" }) : u = /* @__PURE__ */ f(nt, { icon: r })), [
      /* @__PURE__ */ f("input", { name: i, id: d, type: "text", class: "form-control", placeholder: s, value: h, disabled: a, readOnly: l, onFocus: Fs(this, to), onChange: Fs(this, eo) }, "input"),
      u ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: k(s.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, s] = this.getTime() || [];
    return /* @__PURE__ */ f(_f, { hour: n, minute: s, minuteStep: t.minuteStep, onChange: Fs(this, no) });
  }
};
to = /* @__PURE__ */ new WeakMap();
eo = /* @__PURE__ */ new WeakMap();
no = /* @__PURE__ */ new WeakMap();
so = /* @__PURE__ */ new WeakMap();
ih.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
tt.addLang({
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
const xf = (e, t, n = 0) => {
  const s = new Date(e, t - 1, 1), i = new Date(e, t, 0), r = s.getDay(), o = s.getTime() - (7 + r - n) % 7 * ss;
  return {
    days: i.getDate(),
    startTime: o,
    firstDay: s.getTime()
  };
}, gl = (e, t) => new Set((Array.isArray(e) ? e : [e]).map((n) => kt(n, t)));
var Hi;
class Cf extends z {
  constructor() {
    super(...arguments);
    D(this, Hi, (n) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = m(n.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(n) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = tt.getLang("weekNames"),
      monthNames: o = tt.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: c = []
    } = n, d = [], u = "btn ghost square rounded-full";
    for (let T = 0; T < 7; T++) {
      const R = (i + T) % 7;
      d.push(/* @__PURE__ */ f("div", { className: k("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[R] : R }) }, T));
    }
    const { startTime: p, days: g, firstDay: y } = xf(a, l, i), w = y + g * ss;
    let v = p;
    const _ = [], b = "yyyy-MM-dd", E = gl(h, b), $ = gl(c, b);
    for (; v <= w; ) {
      const T = [];
      for (let R = 0; R < 7; R++) {
        const P = new Date(v), H = P.getDate(), S = kt(P, b), A = P.getDay(), L = sh(P, y), M = k("col mini-calendar-day", {
          active: E.has(S),
          selected: $.has(S),
          "is-first": H === 1,
          "is-in-month": L,
          "is-out-month": !L,
          "is-today": Ns(P, s),
          "is-weekend": A === 0 || A === 6
        });
        T.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": S, children: /* @__PURE__ */ f("a", { className: u, onClick: x(this, Hi), children: H === 1 && o ? o[P.getMonth()] : P.getDate() }) }, S)
        ), v += ss;
      }
      _.push(/* @__PURE__ */ f("div", { className: "row", children: T }, v));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: d }),
      _
    ] });
  }
}
Hi = new WeakMap();
var fs, Bi;
class yl extends z {
  constructor() {
    super(...arguments);
    D(this, fs, K());
    D(this, Bi, (n) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = m(n.target).closest("[data-value]").dataset("value");
      r && (s(+r), n.stopPropagation());
    });
  }
  componentDidMount() {
    m(x(this, fs).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(n) {
    const { className: s, max: i, min: r, value: o } = n, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = r; h <= i; ++h)
      a.push(/* @__PURE__ */ f(et, { type: "ghost", "data-value": h, active: h === o, className: k(l === h ? "is-current" : ""), onClick: x(this, Bi), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: x(this, fs), children: a });
  }
}
fs = new WeakMap(), Bi = new WeakMap();
var un, ps, ms, gs, ys, vs, zi, rh, Fi, oh;
class $f extends z {
  constructor(n) {
    super(n);
    D(this, zi);
    D(this, Fi);
    D(this, un, void 0);
    D(this, ps, void 0);
    D(this, ms, void 0);
    D(this, gs, void 0);
    D(this, ys, void 0);
    D(this, vs, void 0);
    O(this, un, K()), O(this, ps, (o) => {
      const a = m(o.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), O(this, ms, () => {
      const { year: o, month: a } = this.state;
      a === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), O(this, gs, () => {
      const { year: o, month: a } = this.state;
      a === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), O(this, ys, (o) => {
      this.setState({ year: o, select: "day" });
    }), O(this, vs, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var a, l;
      if (o.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        o.length > 3 && (h = wf(h, o.substring(5).replace("+", ""))), o = kt(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, o);
    };
    const { date: s } = n, i = /* @__PURE__ */ new Date(), r = s ? new Date(s) : void 0;
    this.state = { select: "day", year: r ? r.getFullYear() : i.getFullYear(), month: r ? r.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(n) {
    this.setState((s) => s.select === n ? { select: "day" } : { select: n });
  }
  componentDidMount() {
    m(x(this, un).current).find(".active").scrollIntoView();
  }
  render(n, s) {
    const {
      date: i,
      yearText: r = tt.getLang("yearFormat") || "{0}",
      weekNames: o = tt.getLang("weekNames"),
      monthNames: a = tt.getLang("monthNames"),
      weekStart: l
    } = n, h = i ? new Date(i) : void 0, {
      year: c,
      month: d,
      select: u
    } = s, p = u === "day", g = Z(n.minDate || "1970-1-1"), y = Z(n.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: x(this, un), onClick: x(this, ps), children: [
      Dt(this, zi, rh).call(this, n),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(et, { type: u === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: it(r, c) }),
          /* @__PURE__ */ f(et, { type: u === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: x(this, ms), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(et, { type: "ghost", size: "sm", square: !0, onClick: x(this, gs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          Cf,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: c,
            month: d,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        u === "year" ? /* @__PURE__ */ f(
          yl,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: x(this, ys)
          }
        ) : u === "month" ? /* @__PURE__ */ f(
          yl,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: x(this, vs)
          }
        ) : null,
        p ? Dt(this, Fi, oh).call(this, n) : null
      ] })
    ] });
  }
}
un = new WeakMap(), ps = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), vs = new WeakMap(), zi = new WeakSet(), rh = function(n) {
  let { menu: s } = n;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(fe, { ...s })) : null;
}, Fi = new WeakSet(), oh = function(n) {
  let { actions: s } = n;
  const { todayText: i, clearText: r } = n;
  return s || (s = [{ text: i, "data-set-date": kt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(pt, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ f(et, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var kf = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Nr = (e, t, n) => (kf(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Rr = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, io, ro, oo;
let ah = class extends gt {
  constructor(t) {
    super(t), Rr(this, io, () => {
      this.toggle(!0);
    }), Rr(this, ro, (s) => {
      this.setDate(s.target.value);
    }), Rr(this, oo, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      if (this.props.disabled)
        return;
      const i = Z(s), r = !s || Number.isNaN(i.getDay()), { onInvalid: o, defaultValue: a = "", required: l } = this.props;
      this.setState({ value: r ? l ? a : "" : kt(i, this.props.format) }, () => {
        !r && o && o(s), this.toggle(!1);
      });
    };
    const n = this.state;
    n.value === "today" && (n.value = kt(/* @__PURE__ */ new Date(), t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = n, c = `date-picker-${this.id}`;
    let d;
    return h && !r && l.length ? d = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Nr(this, oo), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? d = /* @__PURE__ */ f("i", { class: "i-calendar" }) : d = /* @__PURE__ */ f(nt, { icon: i })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, onFocus: Nr(this, io), onChange: Nr(this, ro) }, "input"),
      d ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: d }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const s = super._getTriggerProps(t, n);
    return {
      ...s,
      className: k(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const s = super._getPopProps(t, n);
    return {
      ...s,
      className: k(s.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a = tt.getLang("today"), clearText: l, menu: h, actions: c, minDate: d, maxDate: u, required: p } = t;
    return /* @__PURE__ */ f(
      $f,
      {
        onChange: this.setDate,
        date: n.value,
        weekNames: s,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: h,
        actions: c,
        minDate: d,
        maxDate: u
      }
    );
  }
};
io = /* @__PURE__ */ new WeakMap();
ro = /* @__PURE__ */ new WeakMap();
oo = /* @__PURE__ */ new WeakMap();
ah.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class lh extends q {
}
lh.NAME = "TimePicker";
lh.Component = ih;
class ch extends q {
}
ch.NAME = "DatePicker";
ch.Component = ah;
var ha = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Se = (e, t, n) => (ha(e, t, "read from private field"), n ? n.call(e) : t.get(e)), $n = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ze = (e, t, n, s) => (ha(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Ar = (e, t, n) => (ha(e, t, "access private method"), n), Qe, xe, Dn, ao, Ln, ei;
const Pr = "show", vl = "in", Sf = '[data-dismiss="modal"]', In = class extends mt {
  constructor() {
    super(...arguments), $n(this, Ln), $n(this, Qe, 0), $n(this, xe, void 0), $n(this, Dn, void 0), $n(this, ao, (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Sf) || this.options.backdrop === !0 && t === n) && (e.stopPropagation(), this.hide());
    });
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Pr);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return Se(this, xe);
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = Se(this, xe)) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const s = t.clientWidth, i = t.clientHeight, [r, o] = Se(this, Dn) || [];
          (r !== s || o !== i) && (Ze(this, Dn, [s, i]), this.layout());
        });
        n.observe(t), Ze(this, xe, n);
      }
    }
  }
  afterInit() {
    this.on("click", Se(this, ao)), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = Se(this, xe)) == null || e.disconnect(), Ze(this, xe, void 0);
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return m(t).css("z-index", `${In.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: s, className: i, style: r } = this.options;
    return m(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !s
    }, Pr, i).css({
      zIndex: `${In.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), Ar(this, Ln, ei).call(this, () => {
      m(t).addClass(vl), Ar(this, Ln, ei).call(this, () => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (m(this.modalElement).removeClass(vl), this.emit("hide"), Ar(this, Ln, ei).call(this, () => {
      m(this.modalElement).removeClass(Pr), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const s = m(n);
    if (t = t ?? this.options.size, t) {
      s.removeAttr("data-size");
      const a = { width: "", height: "" };
      typeof t == "object" ? (a.width = t.width, a.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? s.attr("data-size", t) : t && (a.width = t), s.css(a);
    }
    e = e ?? this.options.position ?? "fit";
    const i = n.clientWidth, r = n.clientHeight;
    Ze(this, Dn, [i, r]), typeof e == "function" && (e = e({ width: i, height: r }));
    const o = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (o.alignSelf = "flex-start", o.top = e) : typeof e == "object" && e ? (o.alignSelf = "flex-start", Object.assign(o, e)) : e === "fit" ? (o.alignSelf = "flex-start", o.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? o.alignSelf = "flex-end" : e === "top" ? o.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (o.alignSelf = "flex-start", o.top = e), s.css(o), m(this.modalElement).css("justifyContent", o.left ? "flex-start" : "center");
  }
  static hide(e) {
    var t;
    (t = In.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = In.query(e)) == null || t.show();
  }
};
let te = In;
Qe = /* @__PURE__ */ new WeakMap();
xe = /* @__PURE__ */ new WeakMap();
Dn = /* @__PURE__ */ new WeakMap();
ao = /* @__PURE__ */ new WeakMap();
Ln = /* @__PURE__ */ new WeakSet();
ei = function(e, t) {
  Se(this, Qe) && (clearTimeout(Se(this, Qe)), Ze(this, Qe, 0)), e && (this.options.animation ? Ze(this, Qe, window.setTimeout(e, t ?? this.options.transTime)) : e());
};
te.NAME = "Modal";
te.MULTI_INSTANCE = !0;
te.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
te.zIndex = 1500;
m(window).on("resize.modal.zui", () => {
  te.getAll().forEach((e) => {
    const t = e;
    t.shown && t.options.responsive && t.layout();
  });
});
m(document).on("to-hide.modal.zui", (e, t) => {
  te.hide(t == null ? void 0 : t.target);
});
class hh extends z {
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
      headerClass: n,
      title: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-header", n), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: n
    } = this.props;
    return !n && !t ? null : Q(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(pt, { ...t }) : null,
      n ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: n
    } = this.props;
    return t ? Q(t) ? t : /* @__PURE__ */ f("div", { className: k("modal-body", n), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: n,
      footerActions: s
    } = this.props;
    return Q(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: k("modal-footer", n), children: s ? /* @__PURE__ */ f(pt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: n,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: k("modal-dialog", t), style: n, children: /* @__PURE__ */ f("div", { className: k("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
hh.defaultProps = { closeBtn: !0 };
var fn, pn, mn;
class Mf extends z {
  constructor() {
    super(...arguments);
    D(this, fn, void 0);
    D(this, pn, void 0);
    D(this, mn, void 0);
    O(this, fn, K()), this.state = {}, O(this, mn, () => {
      var i, r;
      const n = (r = (i = x(this, fn).current) == null ? void 0 : i.contentWindow) == null ? void 0 : r.document;
      if (!n)
        return;
      let s = x(this, pn);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const o = n.body, a = n.documentElement, l = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(n.body), s.observe(n.documentElement), O(this, pn, s);
    });
  }
  componentDidMount() {
    x(this, mn).call(this);
  }
  componentWillUnmount() {
    var n;
    (n = x(this, pn)) == null || n.disconnect();
  }
  render() {
    const { url: n } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: n,
        ref: x(this, fn),
        onLoad: x(this, mn)
      }
    );
  }
}
fn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap();
var da = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, vt = (e, t, n) => (da(e, t, "read from private field"), n ? n.call(e) : t.get(e)), kn = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Ye = (e, t, n, s) => (da(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ni = (e, t, n) => (da(e, t, "access private method"), n), Wt, Wn, Ot, Ti, ua, si, lo;
function Tf(e, t) {
  const { custom: n, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof n == "function" ? n() : n
  };
}
async function Ef(e, t) {
  const { dataType: n = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await (await fetch(s, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (n !== "html")
    try {
      const d = JSON.parse(c);
      return {
        title: o,
        ...r,
        ...d
      };
    } catch {
    }
  return a !== !1 && n === "html" ? [c] : {
    title: o,
    ...r,
    body: n === "html" ? /* @__PURE__ */ f(Zo, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Nf(e, t) {
  const { url: n, custom: s, title: i } = t;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(Mf, { url: n })
  };
}
const Rf = {
  custom: Tf,
  ajax: Ef,
  iframe: Nf
}, Dr = "loading", On = class extends te {
  constructor() {
    super(...arguments), kn(this, Ti), kn(this, si), kn(this, Wt, void 0), kn(this, Wn, void 0), kn(this, Ot, void 0);
  }
  get id() {
    return vt(this, Wn);
  }
  get loading() {
    var e;
    return (e = vt(this, Wt)) == null ? void 0 : e.classList.contains(Dr);
  }
  get shown() {
    var e;
    return !!((e = vt(this, Wt)) != null && e.classList.contains("show"));
  }
  get modalElement() {
    let e = vt(this, Wt);
    if (!e) {
      const { options: t } = this;
      let n = vt(this, Wn);
      n || (n = t.id || `modal-${m.guid++}`, Ye(this, Wn, n));
      const { $element: s } = this;
      if (e = s.find(`#${n}`)[0], !e) {
        const i = this.key;
        e = m("<div>").attr({
          id: n,
          "data-key": i
        }).data(this.constructor.KEY, this).css(t.style || {}).setClass("modal modal-async load-indicator", t.className).appendTo(s)[0];
      }
      Ye(this, Wt, e);
    }
    return e;
  }
  get $emitter() {
    const e = vt(this, Wt);
    return e ? m(e) : this.$element;
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
    const e = vt(this, Wt);
    e && (m(e).removeData(this.constructor.KEY).remove(), Ye(this, Wt, void 0));
  }
  render(e) {
    super.render(e), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    vt(this, Ot) && clearTimeout(vt(this, Ot));
    const { modalElement: e, options: t } = this, n = m(e), { type: s, loadTimeout: i, loadingText: r = null } = t, o = Rf[s];
    if (!o)
      return console.warn(`Modal: Cannot build modal with type "${s}"`), !1;
    n.attr("data-loading", r).addClass(Dr), i && Ye(this, Ot, window.setTimeout(() => {
      Ye(this, Ot, 0), ni(this, si, lo).call(this, this.options.timeoutTip);
    }, i));
    const a = await o.call(this, e, t);
    return a === !1 ? await ni(this, si, lo).call(this, this.options.failedTip) : a && typeof a == "object" && await ni(this, Ti, ua).call(this, a), vt(this, Ot) && (clearTimeout(vt(this, Ot)), Ye(this, Ot, 0)), this.layout(), await yi(100), n.removeClass(Dr), !0;
  }
  static open(e) {
    return new Promise((t) => {
      const { container: n = document.body, ...s } = e, i = { show: !0, ...s };
      !i.type && i.url && (i.type = "ajax");
      const r = On.ensure(n, i);
      r.one("hidden", () => t(r)), r.show();
    });
  }
  static async alert(e) {
    typeof e == "string" && (e = { message: e });
    const { type: t, message: n, icon: s, iconClass: i = "icon-lg muted", actions: r = "confirm", onClickAction: o, custom: a, key: l = "__alert", ...h } = e, c = (typeof a == "function" ? a() : a) || {};
    let d = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    s ? d = /* @__PURE__ */ f("div", { className: k("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${s} ${i}` }),
      d
    ] }) : d = /* @__PURE__ */ f("div", { className: k("modal-body", c.bodyClass), children: d });
    const u = [];
    (Array.isArray(r) ? r : [r]).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = tt.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && u.push(y);
    }, []);
    let p;
    const g = u.length ? {
      gap: 4,
      items: u,
      onClickItem: ({ item: y, event: w }) => {
        const v = On.query(w.target, l);
        p = y.key, (o == null ? void 0 : o(y, v)) !== !1 && v && v.hide();
      }
    } : void 0;
    return await On.open({
      key: l,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: d,
      backdrop: "static",
      custom: { footerActions: g, ...c },
      ...h
    }), p;
  }
  static async confirm(e) {
    typeof e == "string" && (e = { message: e });
    const { onClickAction: t, onResult: n, ...s } = e;
    return await On.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, o) => {
        n == null || n(r.key === "confirm", o), t == null || t(r, o);
      },
      ...s
    }) === "confirm";
  }
};
let dh = On;
Wt = /* @__PURE__ */ new WeakMap();
Wn = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakSet();
ua = function(e) {
  return new Promise((t) => {
    if (Array.isArray(e))
      return m(this.modalElement).html(e[0]), this.layout(), this._observeResize(), t();
    const { afterRender: n, ...s } = e;
    e = {
      afterRender: (i) => {
        this.layout(), n == null || n(i), this._observeResize(), t();
      },
      ...s
    }, es(
      /* @__PURE__ */ f(hh, { ...e }),
      this.modalElement
    );
  });
};
si = /* @__PURE__ */ new WeakSet();
lo = function(e) {
  if (e)
    return ni(this, Ti, ua).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: e })
    });
};
dh.DEFAULT = {
  ...te.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
var fa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, co = (e, t, n) => (fa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Vs = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, wl = (e, t, n, s) => (fa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ho = (e, t, n) => (fa(e, t, "access private method"), n), Re, pa, uh, uo, fh, ma, ph;
const Af = '[data-toggle="modal"]';
class mh extends mt {
  constructor() {
    super(...arguments), Vs(this, pa), Vs(this, uo), Vs(this, ma), Vs(this, Re, void 0);
  }
  get modal() {
    return co(this, Re);
  }
  get container() {
    const { container: t } = this.options;
    return typeof t == "string" ? document.querySelector(t) : t instanceof HTMLElement ? t : document.body;
  }
  show() {
    var t;
    return (t = ho(this, uo, fh).call(this)) == null ? void 0 : t.show();
  }
  hide() {
    var t;
    return (t = co(this, Re)) == null ? void 0 : t.hide();
  }
}
Re = /* @__PURE__ */ new WeakMap();
pa = /* @__PURE__ */ new WeakSet();
uh = function() {
  const {
    container: e,
    ...t
  } = this.options, n = t, s = this.$element.attr("href") || "";
  return n.type || (n.target || s[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || s ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && s[0] !== "#" && (n.url = s), !n.key && n.id && (n.key = n.id), n;
};
uo = /* @__PURE__ */ new WeakSet();
fh = function() {
  const e = ho(this, pa, uh).call(this);
  let t = co(this, Re);
  if (t)
    return t.setOptions(e), t;
  if (e.type === "static") {
    const n = ho(this, ma, ph).call(this);
    if (!n)
      return;
    t = te.ensure(n, e);
  } else
    t = dh.ensure(this.container, e);
  return wl(this, Re, t), t.on("destroyed", () => {
    wl(this, Re, void 0);
  }), t;
};
ma = /* @__PURE__ */ new WeakSet();
ph = function() {
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
mh.NAME = "ModalTrigger";
m(document).on("click.modal.zui", (e) => {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, Af);
  if (n) {
    const i = mh.ensure(n);
    i && (i.show(), e.preventDefault());
  }
});
let gh = class extends ze {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = k(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
gh.NAME = "nav";
class yh extends q {
}
yh.NAME = "Nav";
yh.Component = gh;
function is(e, t) {
  const n = e.pageTotal || Math.ceil(e.recTotal / e.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = n : t === "prev" ? t = e.page - 1 : t === "next" ? t = e.page + 1 : t === "current" ? t = e.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? n + t : t, n)) : e.page, {
    ...e,
    pageTotal: n,
    page: t
  };
}
function Pf({
  key: e,
  type: t,
  btnType: n,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = is(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : it(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : it(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ f(et, { type: n, ...a });
}
function Df({
  key: e,
  type: t,
  page: n,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = is(i, n);
  return s = typeof s == "function" ? s(a) : it(s, a), /* @__PURE__ */ f(_c, { ...o, children: [
    r,
    s
  ] });
}
function Lf({
  key: e,
  type: t,
  btnType: n,
  count: s = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(et, { type: n, ...l })), c = (u, p) => {
    const g = [];
    for (let y = u; y <= p; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const w = is(i, y);
      o && (l.url = typeof o == "function" ? o(w) : it(o, w)), g.push(/* @__PURE__ */ f(et, { type: n, ...l, onClick: r }));
    }
    return g;
  };
  let d = [];
  return d = [...c(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? d = [...d, ...c(2, i.pageTotal)] : i.page < s - 2 ? d = [...d, ...c(2, s - 2), h(), ...c(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? d = [...d, h(), ...c(i.pageTotal - s + 3, i.pageTotal)] : d = [...d, h(), ...c(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...c(i.pageTotal, i.pageTotal)]), d;
}
function If({
  type: e,
  pagerInfo: t,
  linkCreator: n,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const c = { ...t, recPerPage: h };
    return {
      ...r,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof n == "function" ? n(c) : it(n, c)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : it(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Hc, { type: "dropdown", dropdown: i, ...o });
}
function Wf({
  key: e,
  page: t,
  type: n,
  btnType: s,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const c = { ...h };
  let d;
  const u = (y) => {
    var w;
    d = Number((w = y.target) == null ? void 0 : w.value) || 1, d = d > i.pageTotal ? i.pageTotal : d;
  }, p = (y) => {
    if (!(y != null && y.target))
      return;
    d = d <= i.pageTotal ? d : i.pageTotal;
    const w = is(i, d);
    a && !a({ info: w, event: y }) || (y.target.href = c.url = typeof l == "function" ? l(w) : it(l, w));
  }, g = is(i, t || 0);
  return c.url = typeof l == "function" ? l(g) : it(l, g), /* @__PURE__ */ f("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ f(et, { type: s, ...c, onClick: p })
  ] });
}
let ur = class extends pt {
  get pagerInfo() {
    const { page: t = 1, recTotal: n = 0, recPerPage: s = 10 } = this.props;
    return { page: t, recTotal: n, recPerPage: s, pageTotal: s ? Math.ceil(n / s) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), r = n.type || "item";
    return r === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: t.linkCreator }), i;
  }
};
ur.NAME = "pager";
ur.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
ur.ItemComponents = {
  ...pt.ItemComponents,
  link: Pf,
  info: Df,
  nav: Lf,
  "size-menu": If,
  goto: Wf
};
class vh extends q {
}
vh.NAME = "Pager";
vh.Component = ur;
class wh extends q {
}
wh.NAME = "Pick";
wh.Component = gt;
var gn, ws, _s, Ui;
class _h extends z {
  constructor(n) {
    super(n);
    D(this, gn, K());
    D(this, ws, K());
    D(this, _s, (n) => {
      var i, r;
      const s = n.target.value;
      (r = (i = this.props).onSearch) == null || r.call(i, s), this.setState({ search: s });
    });
    D(this, Ui, (n) => {
      var s, i;
      n.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: n.defaultSearch ?? "" };
  }
  focus() {
    var n;
    (n = x(this, gn).current) == null || n.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: n } = this.props;
    if (n) {
      const { current: s } = x(this, ws), { current: i } = x(this, gn);
      if (s && i) {
        const r = m(i).parent();
        r.width(Math.ceil(Math.min(s.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(n, s) {
    const { placeholder: i, inline: r } = n, { search: o } = s, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: x(this, ws), children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: x(this, Ui), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: x(this, _s),
          onInput: x(this, _s),
          ref: x(this, gn)
        }
      ),
      l
    ] });
  }
}
gn = new WeakMap(), ws = new WeakMap(), _s = new WeakMap(), Ui = new WeakMap();
var yn, bs, xs, Cs;
class Of extends ca {
  constructor() {
    super(...arguments);
    D(this, yn, void 0);
    D(this, bs, void 0);
    D(this, xs, void 0);
    D(this, Cs, void 0);
    O(this, yn, K()), O(this, bs, (n) => {
      const { onDeselect: s, state: { selections: i } } = this.props, r = m(n.target).closest(".picker-deselect-btn").dataset("value");
      s && i.length && r && s(r), n.stopPropagation();
    }), O(this, xs, (n) => {
      this.props.changeState({ search: n });
    }), O(this, Cs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (n) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: n.text ?? n.value }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: x(this, bs), "data-value": n.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, n.value);
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = x(this, yn).current) == null || s.focus();
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-select picker-select-multi form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s }, searchHint: i } = n;
    return /* @__PURE__ */ f(
      _h,
      {
        inline: !0,
        ref: x(this, yn),
        defaultSearch: s,
        onSearch: x(this, xs),
        onClear: x(this, Cs),
        placeholder: i
      }
    );
  }
  _renderTrigger(n) {
    const { state: { selections: s = [], open: i }, search: r, placeholder: o, children: a } = this.props, l = i && r;
    return !l && !s.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(n) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
}
yn = new WeakMap(), bs = new WeakMap(), xs = new WeakMap(), Cs = new WeakMap();
var $s, Vi, qi, Gi, Yi, bh;
class Hf extends ca {
  constructor() {
    super(...arguments);
    D(this, Yi);
    D(this, $s, K());
    D(this, Vi, (n) => {
      this.props.disabled && (this.props.onClear(), this.props.togglePop(!0, { search: "" }), n.stopPropagation());
    });
    D(this, qi, (n) => {
      this.props.changeState({ search: n });
    });
    D(this, Gi, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(n) {
    var s;
    super._handleClick(n), (s = x(this, $s).current) == null || s.focus();
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-select picker-select-single form-control",
      n.disabled ? "disabled" : ""
    );
  }
  _renderSearch(n) {
    const { state: { search: s } } = n;
    return /* @__PURE__ */ f(
      _h,
      {
        ref: x(this, $s),
        defaultSearch: s,
        onSearch: x(this, qi),
        onClear: x(this, Gi),
        placeholder: Dt(this, Yi, bh).call(this)
      }
    );
  }
  _renderTrigger(n) {
    const { children: s, state: { selections: i = [], open: r }, placeholder: o, search: a, disabled: l } = n, [h] = i, c = r && a;
    let d;
    c ? d = this._renderSearch(n) : h ? d = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: h.text ?? h.value }, "main") : d = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: o }, "main");
    const u = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: x(this, Vi), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      d,
      s,
      u,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
$s = new WeakMap(), Vi = new WeakMap(), qi = new WeakMap(), Gi = new WeakMap(), Yi = new WeakSet(), bh = function() {
  const { searchHint: n, state: { value: s, selections: i } } = this.props;
  let r = n;
  if (r === void 0) {
    const o = i.find((a) => a.value === s);
    o && typeof o.text == "string" ? r = o.text : r = s;
  }
  return r;
};
const Bf = (e, t, n = "is-match") => e.reduce((s, i) => [...s].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, c) => {
    c && (r.push(/* @__PURE__ */ f("span", { class: n, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var Ki, ji, xh, Xi, Ch, Ji;
class zf extends Qc {
  constructor() {
    super(...arguments);
    D(this, ji);
    D(this, Xi);
    D(this, Ki, K());
    D(this, Ji, ({ item: n }) => {
      const s = n.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(s) : (o(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = m(s.currentTarget);
      this.setHoverItem(i.children("a").dataset("value"));
    });
  }
  componentWillUnmount() {
    super.componentDidMount();
    const n = this.element;
    n && m(n).off(".picker.zui");
  }
  setHoverItem(n) {
    this.props.changeState({ hoverItem: n }, () => {
      const s = Dt(this, ji, xh).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(n) {
    return k(
      super._getClass(n),
      "picker-menu"
    );
  }
  _renderPop(n) {
    const { menu: s } = n;
    return /* @__PURE__ */ f(
      fe,
      {
        ref: x(this, Ki),
        className: "picker-menu-list",
        items: Dt(this, Xi, Ch).call(this),
        onClickItem: x(this, Ji),
        ...s
      }
    );
  }
}
Ki = new WeakMap(), ji = new WeakSet(), xh = function() {
  const n = this.element;
  if (n)
    return m(n).find(".menu-item>a.hover");
}, Xi = new WeakSet(), Ch = function() {
  const { selections: n, items: s, hoverItem: i, search: r } = this.props.state, o = new Set(n.map((c) => c.value));
  let a = !1;
  const l = m.unique(r.toLowerCase().split(" ").filter((c) => c.length)), h = s.reduce((c, d) => {
    const {
      value: u = "",
      keys: p,
      text: g,
      className: y,
      ...w
    } = d;
    u === i && (a = !0);
    const v = g ?? u;
    return c.push({
      key: u,
      active: o.has(u),
      text: typeof v == "string" ? Bf(l, [v]) : /* @__PURE__ */ f(Ss, { content: v }),
      className: k(y, { hover: u === i }),
      "data-value": u,
      ...w
    }), c;
  }, []);
  return !a && h.length && (h[0].className = k(h[0].className, "hover")), h;
}, Ji = new WeakMap();
var ga = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, ne = (e, t, n) => (ga(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ke = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ve = (e, t, n, s) => (ga(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), bt = (e, t, n) => (ga(e, t, "access private method"), n), Hn, Ht, Ce, tn, Yn, ya, $h, ie, $e;
let va = class extends gt {
  constructor(t) {
    super(t), Ke(this, tn), Ke(this, ya), Ke(this, ie), Ke(this, Hn, void 0), Ke(this, Ht, void 0), Ke(this, Ce, 0), this.toggleValue = (i, r) => {
      if (!this.props.multiple)
        return r || i !== this.value ? bt(this, ie, $e).call(this, i) : bt(this, ie, $e).call(this);
      const { valueList: o } = this, a = o.indexOf(i);
      if (r !== a >= 0)
        return a > -1 ? o.splice(a, 1) : o.push(i), bt(this, ie, $e).call(this, o);
    }, this.deselect = (i) => {
      const { valueList: r } = this, o = new Set(bt(this, tn, Yn).call(this, i)), a = r.filter((l) => !o.has(l));
      bt(this, ie, $e).call(this, a);
    }, this.clear = () => {
      bt(this, ie, $e).call(this);
    }, this.select = (i) => {
      const r = bt(this, tn, Yn).call(this, i), o = this.props.multiple ? [...this.valueList, ...r] : r[0];
      return bt(this, ie, $e).call(this, o);
    }, this.isSelected = (i) => this.valueList.includes(i), m.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { required: n, items: s } = t;
    this.state.value === void 0 && n && Array.isArray(s) && s.length && (this.state.value = s[0].value);
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return bt(this, tn, Yn).call(this, this.state.value);
  }
  async load() {
    let t = ne(this, Ht);
    t && t.abort(), t = new AbortController(), ve(this, Ht, t);
    const { items: n, searchDelay: s } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await yi(s || 500), ne(this, Ht) !== t || (r = await n(i, { signal: t.signal }), ne(this, Ht) !== t))
        return r;
    } else if (i.length) {
      const o = m.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o.length ? r = n.reduce((a, l) => {
        const {
          value: h,
          keys: c = "",
          text: d
        } = l;
        return o.every((u) => h.toLowerCase().includes(u) || c.toLowerCase().includes(u) || typeof d == "string" && d.toLowerCase().includes(u)) && a.push(l), a;
      }, []) : r = n;
    } else
      r = n;
    return ve(this, Ht, void 0), r;
  }
  async update(t) {
    const { state: n, props: s } = this, i = ne(this, Hn) || {}, r = {};
    if (ve(this, Hn, i), (t || i.search !== n.search || s.items !== i.items) && (r.items = await this.load(), r.loading = !1, i.items = s.items, i.search = n.search), t || i.value !== n.value) {
      const a = r.items || n.items, l = new Map(a.map((h) => [h.value, h]));
      r.selections = this.valueList.map((h) => l.get(h) || { value: h }), i.value = n.value;
    }
    const o = r.items;
    n.value === void 0 && s.required && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    ne(this, Ce) && clearTimeout(ne(this, Ce)), ve(this, Ce, window.setTimeout(() => {
      ve(this, Ce, 0), this.update();
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
    (t = ne(this, Ht)) == null || t.abort(), ve(this, Ht, void 0), ve(this, Hn, void 0), clearTimeout(ne(this, Ce)), super.componentWillUnmount();
  }
  _getTriggerProps(t, n) {
    return {
      ...super._getTriggerProps(t, n),
      multiple: t.multiple,
      placeholder: t.placeholder,
      search: t.search,
      searchHint: t.searchHint,
      disabled: t.disabled,
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
    return t.Trigger || (t.multiple ? Of : Hf);
  }
};
Hn = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakSet();
Yn = function(e) {
  return typeof e == "string" ? e.length ? m.unique(e.split(this.props.valueSplitter ?? ",")) : [] : Array.isArray(e) ? m.unique(e) : [];
};
ya = /* @__PURE__ */ new WeakSet();
$h = function(e) {
  const t = bt(this, tn, Yn).call(this, e);
  return t.length ? t.join(this.props.valueSplitter ?? ",") : void 0;
};
ie = /* @__PURE__ */ new WeakSet();
$e = function(e) {
  if (this.props.disabled)
    return;
  const t = e === void 0 ? e : bt(this, ya, $h).call(this, e);
  if (t !== this.state.value)
    return this.changeState({ value: t });
};
va.defaultProps = {
  ...gt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  search: !0
};
va.Pop = zf;
class kh extends q {
}
kh.NAME = "Picker";
kh.Component = va;
class Sh extends mt {
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
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && s.middleware.push(ar()), r && s.middleware.push(r === !0 ? Ci() : Ci(r)), o && s.middleware.push(qr({ element: this.$arrow[0] })), a && s.middleware.push(lr(a)), s;
  }
  createPopper() {
    const t = this.element, n = this.$target[0];
    this.cleanup = sa(t, n, () => {
      dr(t, n, this.computePositionConfig()).then(({ x: s, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(n.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !qr || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, h = {
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
Sh.NAME = "Popovers";
Sh.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1
};
var wa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Mt = (e, t, n) => (wa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), we = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, ii = (e, t, n, s) => (wa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), _l = (e, t, n) => (wa(e, t, "access private method"), n), ri, oi, Ae, fo, ai, li, ci, po;
let Mh = class extends z {
  constructor(t) {
    super(t), we(this, ci), we(this, ri, void 0), we(this, oi, K()), we(this, Ae, 0), we(this, fo, (n) => {
      const s = this.state.value;
      n.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(n), this.focus(), s.trim() !== "" && (i == null || i("", n));
      });
    }), we(this, ai, (n) => {
      const s = this.state.value, i = n.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || s === i || (_l(this, ci, po).call(this), ii(this, Ae, window.setTimeout(() => {
          r(i, n), ii(this, Ae, 0);
        }, this.props.delay || 0)));
      });
    }), we(this, li, (n) => {
      const s = n.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(n);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, ii(this, ri, t.id || `search-box-${m.guid++}`);
  }
  get id() {
    return Mt(this, ri);
  }
  get input() {
    return Mt(this, oi).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    _l(this, ci, po).call(this);
  }
  render(t, n) {
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: c, mergeIcon: d, searchIcon: u, clearIcon: p } = t, { focus: g, value: y } = n, { id: w } = this, v = typeof y != "string" || !y.trim().length;
    let _, b, E;
    return u && (E = u === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(nt, { icon: u })), !d && u && (_ = /* @__PURE__ */ f("label", { for: w, class: "input-control-prefix", children: E }, "prefix")), p && !v ? b = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: Mt(this, fo),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(nt, { icon: p })
      }
    ) : d && u && (b = E), b && (b = /* @__PURE__ */ f("label", { for: w, class: "input-control-suffix", children: b }, "suffix")), /* @__PURE__ */ f("div", { class: k("search-box input-control", r, { focus: g, empty: v, "has-prefix-icon": _, "has-suffix-icon": b }), style: o, children: [
      _,
      /* @__PURE__ */ f(
        "input",
        {
          ref: Mt(this, oi),
          id: w,
          type: "text",
          class: k("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: c,
          disabled: l,
          readonly: a,
          value: y,
          onInput: Mt(this, ai),
          onChange: Mt(this, ai),
          onFocus: Mt(this, li),
          onBlur: Mt(this, li)
        }
      ),
      b
    ] });
  }
};
ri = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
Ae = /* @__PURE__ */ new WeakMap();
fo = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakSet();
po = function() {
  Mt(this, Ae) && clearTimeout(Mt(this, Ae)), ii(this, Ae, 0);
};
Mh.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Th extends q {
}
Th.NAME = "SearchBox";
Th.Component = Mh;
class Eh extends q {
}
Eh.NAME = "Toolbar";
Eh.Component = pt;
function Rs(e) {
  return e.split("-")[1];
}
function _a(e) {
  return e === "y" ? "height" : "width";
}
function an(e) {
  return e.split("-")[0];
}
function fr(e) {
  return ["top", "bottom"].includes(an(e)) ? "x" : "y";
}
function bl(e, t, n) {
  let { reference: s, floating: i } = e;
  const r = s.x + s.width / 2 - i.width / 2, o = s.y + s.height / 2 - i.height / 2, a = fr(t), l = _a(a), h = s[l] / 2 - i[l] / 2, c = a === "x";
  let d;
  switch (an(t)) {
    case "top":
      d = { x: r, y: s.y - i.height };
      break;
    case "bottom":
      d = { x: r, y: s.y + s.height };
      break;
    case "right":
      d = { x: s.x + s.width, y: o };
      break;
    case "left":
      d = { x: s.x - i.width, y: o };
      break;
    default:
      d = { x: s.x, y: s.y };
  }
  switch (Rs(t)) {
    case "start":
      d[a] -= h * (n && c ? -1 : 1);
      break;
    case "end":
      d[a] += h * (n && c ? -1 : 1);
  }
  return d;
}
const Ff = async (e, t, n) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: r = [], platform: o } = n, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({ reference: e, floating: t, strategy: i }), { x: c, y: d } = bl(h, s, l), u = s, p = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: w, fn: v } = a[y], { x: _, y: b, data: E, reset: $ } = await v({ x: c, y: d, initialPlacement: s, placement: u, strategy: i, middlewareData: p, rects: h, platform: o, elements: { reference: e, floating: t } });
    c = _ ?? c, d = b ?? d, p = { ...p, [w]: { ...p[w], ...E } }, $ && g <= 50 && (g++, typeof $ == "object" && ($.placement && (u = $.placement), $.rects && (h = $.rects === !0 ? await o.getElementRects({ reference: e, floating: t, strategy: i }) : $.rects), { x: c, y: d } = bl(h, u, l)), y = -1);
  }
  return { x: c, y: d, placement: u, strategy: i, middlewareData: p };
};
function Nh(e) {
  return typeof e != "number" ? function(t) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...t };
  }(e) : { top: e, right: e, bottom: e, left: e };
}
function Ei(e) {
  return { ...e, top: e.y, left: e.x, right: e.x + e.width, bottom: e.y + e.height };
}
async function Uf(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: s, y: i, platform: r, rects: o, elements: a, strategy: l } = e, { boundary: h = "clippingAncestors", rootBoundary: c = "viewport", elementContext: d = "floating", altBoundary: u = !1, padding: p = 0 } = t, g = Nh(p), y = a[u ? d === "floating" ? "reference" : "floating" : d], w = Ei(await r.getClippingRect({ element: (n = await (r.isElement == null ? void 0 : r.isElement(y))) == null || n ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)), boundary: h, rootBoundary: c, strategy: l })), v = d === "floating" ? { ...o.floating, x: s, y: i } : o.reference, _ = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(_)) && await (r.getScale == null ? void 0 : r.getScale(_)) || { x: 1, y: 1 }, E = Ei(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: v, offsetParent: _, strategy: l }) : v);
  return { top: (w.top - E.top + g.top) / b.y, bottom: (E.bottom - w.bottom + g.bottom) / b.y, left: (w.left - E.left + g.left) / b.x, right: (E.right - w.right + g.right) / b.x };
}
const Vf = Math.min, qf = Math.max;
function Gf(e, t, n) {
  return qf(e, Vf(t, n));
}
const Yf = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { element: n, padding: s = 0 } = e || {}, { x: i, y: r, placement: o, rects: a, platform: l } = t;
  if (n == null)
    return {};
  const h = Nh(s), c = { x: i, y: r }, d = fr(o), u = _a(d), p = await l.getDimensions(n), g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", w = a.reference[u] + a.reference[d] - c[d] - a.floating[u], v = c[d] - a.reference[d], _ = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(n));
  let b = _ ? d === "y" ? _.clientHeight || 0 : _.clientWidth || 0 : 0;
  b === 0 && (b = a.floating[u]);
  const E = w / 2 - v / 2, $ = h[g], T = b - p[u] - h[y], R = b / 2 - p[u] / 2 + E, P = Gf($, R, T), H = Rs(o) != null && R != P && a.reference[u] / 2 - (R < $ ? h[g] : h[y]) - p[u] / 2 < 0;
  return { [d]: c[d] - (H ? R < $ ? $ - R : T - R : 0), data: { [d]: P, centerOffset: R - P } };
} }), Kf = ["top", "right", "bottom", "left"];
Kf.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
const jf = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Ni(e) {
  return e.replace(/left|right|bottom|top/g, (t) => jf[t]);
}
function Xf(e, t, n) {
  n === void 0 && (n = !1);
  const s = Rs(e), i = fr(e), r = _a(i);
  let o = i === "x" ? s === (n ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Ni(o)), { main: o, cross: Ni(o) };
}
const Jf = { start: "end", end: "start" };
function Lr(e) {
  return e.replace(/start|end/g, (t) => Jf[t]);
}
const Zf = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n;
    const { placement: s, middlewareData: i, rects: r, initialPlacement: o, platform: a, elements: l } = t, { mainAxis: h = !0, crossAxis: c = !0, fallbackPlacements: d, fallbackStrategy: u = "bestFit", fallbackAxisSideDirection: p = "none", flipAlignment: g = !0, ...y } = e, w = an(s), v = an(o) === o, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), b = d || (v || !g ? [Ni(o)] : function(S) {
      const A = Ni(S);
      return [Lr(S), A, Lr(A)];
    }(o));
    d || p === "none" || b.push(...function(S, A, L, M) {
      const I = Rs(S);
      let W = function(U, ot, bn) {
        const Ps = ["left", "right"], xn = ["right", "left"], Ds = ["top", "bottom"], _r = ["bottom", "top"];
        switch (U) {
          case "top":
          case "bottom":
            return bn ? ot ? xn : Ps : ot ? Ps : xn;
          case "left":
          case "right":
            return ot ? Ds : _r;
          default:
            return [];
        }
      }(an(S), L === "start", M);
      return I && (W = W.map((U) => U + "-" + I), A && (W = W.concat(W.map(Lr)))), W;
    }(o, g, p, _));
    const E = [o, ...b], $ = await Uf(t, y), T = [];
    let R = ((n = i.flip) == null ? void 0 : n.overflows) || [];
    if (h && T.push($[w]), c) {
      const { main: S, cross: A } = Xf(s, r, _);
      T.push($[S], $[A]);
    }
    if (R = [...R, { placement: s, overflows: T }], !T.every((S) => S <= 0)) {
      var P;
      const S = (((P = i.flip) == null ? void 0 : P.index) || 0) + 1, A = E[S];
      if (A)
        return { data: { index: S, overflows: R }, reset: { placement: A } };
      let L = "bottom";
      switch (u) {
        case "bestFit": {
          var H;
          const M = (H = R.map((I) => [I, I.overflows.filter((W) => W > 0).reduce((W, U) => W + U, 0)]).sort((I, W) => I[1] - W[1])[0]) == null ? void 0 : H[0].placement;
          M && (L = M);
          break;
        }
        case "initialPlacement":
          L = o;
      }
      if (s !== L)
        return { reset: { placement: L } };
    }
    return {};
  } };
}, Qf = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    const { x: n, y: s } = t, i = await async function(r, o) {
      const { placement: a, platform: l, elements: h } = r, c = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), d = an(a), u = Rs(a), p = fr(a) === "x", g = ["left", "top"].includes(d) ? -1 : 1, y = c && p ? -1 : 1, w = typeof o == "function" ? o(r) : o;
      let { mainAxis: v, crossAxis: _, alignmentAxis: b } = typeof w == "number" ? { mainAxis: w, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...w };
      return u && typeof b == "number" && (_ = u === "end" ? -1 * b : b), p ? { x: _ * y, y: v * g } : { x: v * g, y: _ * y };
    }(t, e);
    return { x: n + i.x, y: s + i.y, data: i };
  } };
};
function dt(e) {
  var t;
  return ((t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function At(e) {
  return dt(e).getComputedStyle(e);
}
function me(e) {
  return Ah(e) ? (e.nodeName || "").toLowerCase() : "";
}
let qs;
function Rh() {
  if (qs)
    return qs;
  const e = navigator.userAgentData;
  return e && Array.isArray(e.brands) ? (qs = e.brands.map((t) => t.brand + "/" + t.version).join(" "), qs) : navigator.userAgent;
}
function Jt(e) {
  return e instanceof dt(e).HTMLElement;
}
function Ct(e) {
  return e instanceof dt(e).Element;
}
function Ah(e) {
  return e instanceof dt(e).Node;
}
function xl(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof dt(e).ShadowRoot || e instanceof ShadowRoot;
}
function pr(e) {
  const { overflow: t, overflowX: n, overflowY: s, display: i } = At(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + n) && !["inline", "contents"].includes(i);
}
function tp(e) {
  return ["table", "td", "th"].includes(me(e));
}
function mo(e) {
  const t = /firefox/i.test(Rh()), n = At(e), s = n.backdropFilter || n.WebkitBackdropFilter;
  return n.transform !== "none" || n.perspective !== "none" || !!s && s !== "none" || t && n.willChange === "filter" || t && !!n.filter && n.filter !== "none" || ["transform", "perspective"].some((i) => n.willChange.includes(i)) || ["paint", "layout", "strict", "content"].some((i) => {
    const r = n.contain;
    return r != null && r.includes(i);
  });
}
function Ph() {
  return !/^((?!chrome|android).)*safari/i.test(Rh());
}
function ba(e) {
  return ["html", "body", "#document"].includes(me(e));
}
const Cl = Math.min, Kn = Math.max, Ri = Math.round;
function Dh(e) {
  const t = At(e);
  let n = parseFloat(t.width), s = parseFloat(t.height);
  const i = e.offsetWidth, r = e.offsetHeight, o = Ri(n) !== i || Ri(s) !== r;
  return o && (n = i, s = r), { width: n, height: s, fallback: o };
}
function Lh(e) {
  return Ct(e) ? e : e.contextElement;
}
const Ih = { x: 1, y: 1 };
function ln(e) {
  const t = Lh(e);
  if (!Jt(t))
    return Ih;
  const n = t.getBoundingClientRect(), { width: s, height: i, fallback: r } = Dh(t);
  let o = (r ? Ri(n.width) : n.width) / s, a = (r ? Ri(n.height) : n.height) / i;
  return o && Number.isFinite(o) || (o = 1), a && Number.isFinite(a) || (a = 1), { x: o, y: a };
}
function We(e, t, n, s) {
  var i, r;
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), a = Lh(e);
  let l = Ih;
  t && (s ? Ct(s) && (l = ln(s)) : l = ln(e));
  const h = a ? dt(a) : window, c = !Ph() && n;
  let d = (o.left + (c && ((i = h.visualViewport) == null ? void 0 : i.offsetLeft) || 0)) / l.x, u = (o.top + (c && ((r = h.visualViewport) == null ? void 0 : r.offsetTop) || 0)) / l.y, p = o.width / l.x, g = o.height / l.y;
  if (a) {
    const y = dt(a), w = s && Ct(s) ? dt(s) : s;
    let v = y.frameElement;
    for (; v && s && w !== y; ) {
      const _ = ln(v), b = v.getBoundingClientRect(), E = getComputedStyle(v);
      b.x += (v.clientLeft + parseFloat(E.paddingLeft)) * _.x, b.y += (v.clientTop + parseFloat(E.paddingTop)) * _.y, d *= _.x, u *= _.y, p *= _.x, g *= _.y, d += b.x, u += b.y, v = dt(v).frameElement;
    }
  }
  return { width: p, height: g, top: u, right: d + p, bottom: u + g, left: d, x: d, y: u };
}
function ue(e) {
  return ((Ah(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function mr(e) {
  return Ct(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
}
function Wh(e) {
  return We(ue(e)).left + mr(e).scrollLeft;
}
function ep(e, t, n) {
  const s = Jt(t), i = ue(t), r = We(e, !0, n === "fixed", t);
  let o = { scrollLeft: 0, scrollTop: 0 };
  const a = { x: 0, y: 0 };
  if (s || !s && n !== "fixed")
    if ((me(t) !== "body" || pr(i)) && (o = mr(t)), Jt(t)) {
      const l = We(t, !0);
      a.x = l.x + t.clientLeft, a.y = l.y + t.clientTop;
    } else
      i && (a.x = Wh(i));
  return { x: r.left + o.scrollLeft - a.x, y: r.top + o.scrollTop - a.y, width: r.width, height: r.height };
}
function rs(e) {
  if (me(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || (xl(e) ? e.host : null) || ue(e);
  return xl(t) ? t.host : t;
}
function $l(e) {
  return Jt(e) && At(e).position !== "fixed" ? e.offsetParent : null;
}
function kl(e) {
  const t = dt(e);
  let n = $l(e);
  for (; n && tp(n) && At(n).position === "static"; )
    n = $l(n);
  return n && (me(n) === "html" || me(n) === "body" && At(n).position === "static" && !mo(n)) ? t : n || function(s) {
    let i = rs(s);
    for (; Jt(i) && !ba(i); ) {
      if (mo(i))
        return i;
      i = rs(i);
    }
    return null;
  }(e) || t;
}
function Oh(e) {
  const t = rs(e);
  return ba(t) ? e.ownerDocument.body : Jt(t) && pr(t) ? t : Oh(t);
}
function jn(e, t) {
  var n;
  t === void 0 && (t = []);
  const s = Oh(e), i = s === ((n = e.ownerDocument) == null ? void 0 : n.body), r = dt(s);
  return i ? t.concat(r, r.visualViewport || [], pr(s) ? s : []) : t.concat(s, jn(s));
}
function Sl(e, t, n) {
  return t === "viewport" ? Ei(function(s, i) {
    const r = dt(s), o = ue(s), a = r.visualViewport;
    let l = o.clientWidth, h = o.clientHeight, c = 0, d = 0;
    if (a) {
      l = a.width, h = a.height;
      const u = Ph();
      (u || !u && i === "fixed") && (c = a.offsetLeft, d = a.offsetTop);
    }
    return { width: l, height: h, x: c, y: d };
  }(e, n)) : Ct(t) ? function(s, i) {
    const r = We(s, !0, i === "fixed"), o = r.top + s.clientTop, a = r.left + s.clientLeft, l = Jt(s) ? ln(s) : { x: 1, y: 1 }, h = s.clientWidth * l.x, c = s.clientHeight * l.y, d = a * l.x, u = o * l.y;
    return { top: u, left: d, right: d + h, bottom: u + c, x: d, y: u, width: h, height: c };
  }(t, n) : Ei(function(s) {
    var i;
    const r = ue(s), o = mr(s), a = (i = s.ownerDocument) == null ? void 0 : i.body, l = Kn(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), h = Kn(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0);
    let c = -o.scrollLeft + Wh(s);
    const d = -o.scrollTop;
    return At(a || r).direction === "rtl" && (c += Kn(r.clientWidth, a ? a.clientWidth : 0) - l), { width: l, height: h, x: c, y: d };
  }(ue(e)));
}
const np = { getClippingRect: function(e) {
  let { element: t, boundary: n, rootBoundary: s, strategy: i } = e;
  const r = n === "clippingAncestors" ? function(h, c) {
    const d = c.get(h);
    if (d)
      return d;
    let u = jn(h).filter((w) => Ct(w) && me(w) !== "body"), p = null;
    const g = At(h).position === "fixed";
    let y = g ? rs(h) : h;
    for (; Ct(y) && !ba(y); ) {
      const w = At(y), v = mo(y);
      (g ? v || p : v || w.position !== "static" || !p || !["absolute", "fixed"].includes(p.position)) ? p = w : u = u.filter((_) => _ !== y), y = rs(y);
    }
    return c.set(h, u), u;
  }(t, this._c) : [].concat(n), o = [...r, s], a = o[0], l = o.reduce((h, c) => {
    const d = Sl(t, c, i);
    return h.top = Kn(d.top, h.top), h.right = Cl(d.right, h.right), h.bottom = Cl(d.bottom, h.bottom), h.left = Kn(d.left, h.left), h;
  }, Sl(t, a, i));
  return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}, convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
  let { rect: t, offsetParent: n, strategy: s } = e;
  const i = Jt(n), r = ue(n);
  if (n === r)
    return t;
  let o = { scrollLeft: 0, scrollTop: 0 }, a = { x: 1, y: 1 };
  const l = { x: 0, y: 0 };
  if ((i || !i && s !== "fixed") && ((me(n) !== "body" || pr(r)) && (o = mr(n)), Jt(n))) {
    const h = We(n);
    a = ln(n), l.x = h.x + n.clientLeft, l.y = h.y + n.clientTop;
  }
  return { width: t.width * a.x, height: t.height * a.y, x: t.x * a.x - o.scrollLeft * a.x + l.x, y: t.y * a.y - o.scrollTop * a.y + l.y };
}, isElement: Ct, getDimensions: function(e) {
  return Dh(e);
}, getOffsetParent: kl, getDocumentElement: ue, getScale: ln, async getElementRects(e) {
  let { reference: t, floating: n, strategy: s } = e;
  const i = this.getOffsetParent || kl, r = this.getDimensions;
  return { reference: ep(t, await i(n), s), floating: { x: 0, y: 0, ...await r(n) } };
}, getClientRects: (e) => Array.from(e.getClientRects()), isRTL: (e) => At(e).direction === "rtl" };
function sp(e, t, n, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: r = !0, elementResize: o = !0, animationFrame: a = !1 } = s, l = i && !a, h = l || r ? [...Ct(e) ? jn(e) : e.contextElement ? jn(e.contextElement) : [], ...jn(t)] : [];
  h.forEach((p) => {
    l && p.addEventListener("scroll", n, { passive: !0 }), r && p.addEventListener("resize", n);
  });
  let c, d = null;
  if (o) {
    let p = !0;
    d = new ResizeObserver(() => {
      p || n(), p = !1;
    }), Ct(e) && !a && d.observe(e), Ct(e) || !e.contextElement || a || d.observe(e.contextElement), d.observe(t);
  }
  let u = a ? We(e) : null;
  return a && function p() {
    const g = We(e);
    !u || g.x === u.x && g.y === u.y && g.width === u.width && g.height === u.height || n(), u = g, c = requestAnimationFrame(p);
  }(), n(), () => {
    var p;
    h.forEach((g) => {
      l && g.removeEventListener("scroll", n), r && g.removeEventListener("resize", n);
    }), (p = d) == null || p.disconnect(), d = null, a && cancelAnimationFrame(c);
  };
}
const ip = (e, t, n) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: np, ...n }, r = { ...i.platform, _c: s };
  return Ff(e, t, { ...i, platform: r });
};
var xa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, V = (e, t, n) => (xa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), X = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Oe = (e, t, n, s) => (xa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Rt = (e, t, n) => (xa(e, t, "access private method"), n), Xn, Jn, Bn, en, lt, go, Ai, gr, Ca, $a, Hh, yo, Bh, ka, zh, Sa, Fh, Ma, Uh, vo, Vh, Ta, qh, Zn, wo, Gh;
const nn = class extends mt {
  constructor() {
    super(...arguments), X(this, gr), X(this, $a), X(this, yo), X(this, ka), X(this, Sa), X(this, Ma), X(this, vo), X(this, Ta), X(this, wo), X(this, Xn, !1), X(this, Jn, void 0), X(this, Bn, 0), X(this, en, void 0), X(this, lt, void 0), X(this, go, void 0), X(this, Ai, void 0), this.hideLater = () => {
      V(this, Zn).call(this), Oe(this, Bn, window.setTimeout(this.hide.bind(this), 100));
    }, X(this, Zn, () => {
      clearTimeout(V(this, Bn)), Oe(this, Bn, 0);
    });
  }
  get isShown() {
    var e;
    return (e = V(this, en)) == null ? void 0 : e.classList.contains(nn.CLASS_SHOW);
  }
  get tooltip() {
    return V(this, en) || Rt(this, yo, Bh).call(this);
  }
  get trigger() {
    return V(this, go) || this.element;
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${nn.NAME}-show`;
  }
  get isDynamic() {
    return this.options.title;
  }
  init() {
    const { element: e } = this;
    e !== document.body && !e.hasAttribute("data-toggle") && e.setAttribute("data-toggle", "tooltip");
  }
  show(e) {
    return this.setOptions(e), !V(this, Xn) && this.isHover && Rt(this, wo, Gh).call(this), this.options.animation && this.tooltip.classList.add("fade"), this.element.classList.add(this.elementShowClass), this.tooltip.classList.add(nn.CLASS_SHOW), Rt(this, vo, Vh).call(this), !0;
  }
  hide() {
    var t;
    var e;
    return (e = V(this, Ai)) == null || e.call(this), this.element.classList.remove(this.elementShowClass), (t = V(this, en)) == null || t.classList.remove(nn.CLASS_SHOW), !0;
  }
  toggle(e) {
    return this.isShown ? this.hide() : this.show(e);
  }
  destroy() {
    V(this, Xn) && (this.element.removeEventListener("mouseleave", this.hideLater), this.tooltip.removeEventListener("mouseenter", V(this, Zn)), this.tooltip.removeEventListener("mouseleave", this.hideLater)), super.destroy();
  }
  static clear(e = {}) {
    e instanceof Event && (e = { event: e });
    const { exclude: t } = e;
    if (t) {
      const n = this.getAll(), s = new Set(t);
      for (const i of n)
        s.has(i.element) || i.hide();
    }
  }
};
let ft = nn;
Xn = /* @__PURE__ */ new WeakMap();
Jn = /* @__PURE__ */ new WeakMap();
Bn = /* @__PURE__ */ new WeakMap();
en = /* @__PURE__ */ new WeakMap();
lt = /* @__PURE__ */ new WeakMap();
go = /* @__PURE__ */ new WeakMap();
Ai = /* @__PURE__ */ new WeakMap();
gr = /* @__PURE__ */ new WeakSet();
Ca = function() {
  const { arrow: e } = this.options;
  return typeof e == "number" ? e : 8;
};
$a = /* @__PURE__ */ new WeakSet();
Hh = function() {
  const e = Rt(this, gr, Ca).call(this);
  return Oe(this, lt, document.createElement("div")), V(this, lt).style.position = this.options.strategy, V(this, lt).style.width = `${e}px`, V(this, lt).style.height = `${e}px`, V(this, lt).style.transform = "rotate(45deg)", V(this, lt);
};
yo = /* @__PURE__ */ new WeakSet();
Bh = function() {
  var n;
  const e = nn.TOOLTIP_CLASS;
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
  if (this.options.arrow && (t == null || t.append(Rt(this, $a, Hh).call(this))), !t)
    throw new Error("Tooltip: Cannot find tooltip element");
  return t.style.width = "max-content", t.style.position = "absolute", t.style.top = "0", t.style.left = "0", document.body.appendChild(t), Oe(this, en, t), t;
};
ka = /* @__PURE__ */ new WeakSet();
zh = function() {
  var i;
  const e = Rt(this, gr, Ca).call(this), { strategy: t, placement: n } = this.options, s = {
    middleware: [Qf(e), Zf()],
    strategy: t,
    placement: n
  };
  return this.options.arrow && V(this, lt) && ((i = s.middleware) == null || i.push(Yf({ element: V(this, lt) }))), s;
};
Sa = /* @__PURE__ */ new WeakSet();
Fh = function(e) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[e];
};
Ma = /* @__PURE__ */ new WeakSet();
Uh = function(e) {
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
vo = /* @__PURE__ */ new WeakSet();
Vh = function() {
  const e = Rt(this, ka, zh).call(this), t = Rt(this, Ta, qh).call(this);
  Oe(this, Ai, sp(t, this.tooltip, () => {
    this.element && ip(t, this.tooltip, e).then(({ x: n, y: s, middlewareData: i, placement: r }) => {
      Object.assign(this.tooltip.style, {
        left: `${n}px`,
        top: `${s}px`
      });
      const o = r.split("-")[0], a = Rt(this, Sa, Fh).call(this, o);
      if (i.arrow && V(this, lt)) {
        const { x: l, y: h } = i.arrow;
        Object.assign(V(this, lt).style, {
          left: l != null ? `${l}px` : "",
          top: h != null ? `${h}px` : "",
          [a]: `${-V(this, lt).offsetWidth / 2}px`,
          background: "inherit",
          border: "inherit",
          ...Rt(this, Ma, Uh).call(this, o)
        });
      }
    });
  }));
};
Ta = /* @__PURE__ */ new WeakSet();
qh = function() {
  return V(this, Jn) || Oe(this, Jn, {
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
  }), V(this, Jn);
};
Zn = /* @__PURE__ */ new WeakMap();
wo = /* @__PURE__ */ new WeakSet();
Gh = function() {
  const { tooltip: e } = this;
  e.addEventListener("mouseenter", V(this, Zn)), e.addEventListener("mouseleave", this.hideLater), this.element.addEventListener("mouseleave", this.hideLater), Oe(this, Xn, !0);
};
ft.NAME = "tooltip";
ft.TOOLTIP_CLASS = "tooltip";
ft.CLASS_SHOW = "show";
ft.MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';
ft.DEFAULT = {
  animation: !0,
  placement: "top",
  strategy: "absolute",
  trigger: "hover",
  type: "darker",
  arrow: !0
};
document.addEventListener("click", function(e) {
  var s;
  const t = e.target, n = (s = t.closest) == null ? void 0 : s.call(t, ft.MENU_SELECTOR);
  if (n) {
    const i = ft.ensure(n);
    i.options.trigger === "click" && i.toggle();
  } else
    ft.clear({ event: e });
});
document.addEventListener("mouseover", function(e) {
  var i;
  const t = e.target, n = (i = t.closest) == null ? void 0 : i.call(t, ft.MENU_SELECTOR);
  if (!n)
    return;
  const s = ft.ensure(n);
  s.isHover && s.show();
});
function rp({
  type: e,
  component: t,
  className: n,
  children: s,
  content: i,
  style: r,
  attrs: o,
  url: a,
  disabled: l,
  active: h,
  icon: c,
  text: d,
  target: u,
  trailingIcon: p,
  hint: g,
  checked: y,
  actions: w,
  show: v,
  level: _ = 0,
  items: b,
  ...E
}) {
  const $ = Array.isArray(w) ? { items: w } : w;
  return $ && ($.btnProps || ($.btnProps = { size: "sm" }), $.className = k("tree-actions not-nested-toggle", $.className)), /* @__PURE__ */ f(
    "div",
    {
      className: k("tree-item-content", n, { disabled: l, active: h }),
      title: g,
      "data-target": u,
      style: Object.assign({ paddingLeft: `calc(${_} * var(--tree-indent, 20px))` }, r),
      "data-level": _,
      ...o,
      ...E,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${b ? " state" : ""}`, children: b ? /* @__PURE__ */ f("span", { class: `caret-${v ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(nt, { icon: c, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, children: d }) : /* @__PURE__ */ f("span", { class: "text", children: d }),
        /* @__PURE__ */ f(Ss, { content: i }),
        s,
        $ ? /* @__PURE__ */ f(pt, { ...$ }) : null,
        /* @__PURE__ */ f(nt, { icon: p, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Ea = class extends or {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const n = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...n
    };
  }
  getItemRenderProps(t, n, s) {
    const i = super.getItemRenderProps(t, n, s), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(n) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: n } = this.props;
    return n && (t.className = k(t.className, "tree-hover")), t;
  }
};
Ea.ItemComponents = {
  item: rp
};
Ea.NAME = "tree";
class Yh extends q {
}
Yh.NAME = "Tree";
Yh.Component = Ea;
class Kh extends mt {
  init() {
    const { multiple: t, defaultFileList: n, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? wu(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), n && this.addFileItem(n);
  }
  initUploadCash() {
    const { name: t, uploadText: n, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = m('<ul class="file-list py-1"></ul>');
    const l = m(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = m(`<label class="btn ${r}" for="${t}">${n}</label>`), s) {
        const u = m(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(u);
      }
      const d = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...d);
      return;
    }
    const h = m(`<span class="text-primary">${n}</span>`);
    if (s) {
      const d = m(`<i class="icon icon-${s} mr-1"></i>`);
      h.prepend(d);
    }
    this.$label = m(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(h).append(l), this.bindDragEvent();
    const c = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...c);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (t) => {
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const n = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(n);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: n, accept: s } = this.options;
    this.$input = m("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", n).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), s && this.$input.prop("accept", s);
  }
  addFile(t) {
    const { multiple: n, onSizeChange: s } = this.options;
    n || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const n = t.name.lastIndexOf(".");
    if (n === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const s = t.name.substring(0, n), i = t.name.substring(n);
    return this.renameDuplicatedFile(new File([t], `${s}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: n } = this.options;
    if (!n)
      return t;
    const s = n.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: n, limitCount: s, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (n) {
      const h = [];
      for (let c of t) {
        if (s && this.fileMap.size >= s)
          return o == null || o(h), alert(r);
        if (this.currentBytes + c.size > this.limitBytes)
          return o == null || o(h), alert(i);
        c = this.renameDuplicatedFile(c);
        const d = this.createFileItem(c);
        this.itemMap.set(c.name, d), this.$list.append(d), h.push(c);
      }
      o == null || o(h);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    var l;
    const n = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(n);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, n) {
    var r, o;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, n), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(n, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, n, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], n), this.fileMap.set(n, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: n } = this.options;
    return this.addFile(t), m('<li class="file-item my-1 flex items-center gap-2"></li>').append(n ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return m(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: n, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-rename");
      return new ft(r, { title: n }), r;
    }
    return m("<button />").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(n);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: n, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = m(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).addClass("file-action file-delete");
      return r.data("tooltip", new ft(r, { title: n })), r;
    }
    return m("<button />").html(n).addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return m(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return m(`<span class="file-size text-gray">${vu(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: n, deleteBtn: s, showSize: i } = this.options, r = m('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), n && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = m(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: n, cancelText: s, duplicatedHint: i } = this.options, r = m('<div class="input-group input-rename-container hidden"></div>'), o = m("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (c) => {
      if (c.key === "Enter") {
        const d = r.closest(".file-item"), u = d.find(".file-name");
        if (u.html() === o.val()) {
          r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), u.html(o.val());
      } else
        c.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = m("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(n).on("click", () => {
      const c = r.closest(".file-item"), d = c.find(".file-name");
      if (d.html() === o.val()) {
        r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), d.html(o.val());
    }), l = m("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = m('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
Kh.DEFAULT = {
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
class op extends Kh {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = m(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(m('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: n, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = m('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = m('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = m(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = m(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = m('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), n && this.$tip.append(m(`<span class="upload-tip">${n}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = m('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: n } = this.options;
    if (n === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const s = n.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => s.includes(i.type));
  }
  createFileItem(t) {
    const n = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, n);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && n.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && n.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), n;
  }
  setImageUrl(t, n) {
    const s = new FileReader();
    s.onload = () => {
      m('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(n);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const n = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = m(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return m('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(m(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(n);
  }
  createRenameContainer(t) {
    const { duplicatedHint: n } = this.options, s = m("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = s.closest(".file-item").find(".file-name");
        if (r.html() === s.val()) {
          s.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(n);
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
        return alert(n);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
}
op.DEFAULT = {
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
var ks, Zi, Qi, tr, Pl;
let ap = (Pl = class extends z {
  constructor() {
    super(...arguments);
    D(this, ks, K());
    D(this, Zi, (n) => {
      n.stopPropagation(), rt.show({
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
    D(this, Qi, (n) => {
      var r, o, a;
      const { element: s } = this, i = s.getBoundingClientRect();
      if (n.clientY - i.top > 48) {
        n.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (r = n.dataTransfer) == null || r.setData("application/id", this.props.block.id), (a = (o = this.props).onDragStart) == null || a.call(o, n);
    });
    D(this, tr, (n) => {
      var s, i;
      this.setState({ dragging: !1 }), (i = (s = this.props).onDragEnd) == null || i.call(s, n);
    });
  }
  get element() {
    return x(this, ks).current;
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
    const { url: i, ...r } = s;
    this.setState({ loading: !0 }, () => {
      fetch(it(i, n), {
        headers: { "X-Requested-With": "XMLHttpRequest" },
        ...r
      }).then((o) => {
        o.ok ? o.text().then((a) => {
          this.setState({ loading: !1, content: /* @__PURE__ */ f(Zo, { class: "dashboard-block-body", html: a, executeScript: !0 }) });
        }) : this.setState({ loading: !1, content: /* @__PURE__ */ f("div", { class: "text-danger p-5 text-center", children: [
          "Error: ",
          o.statusText
        ] }) });
      });
    });
  }
  render() {
    const { left: n, top: s, width: i, height: r, style: o, block: a } = this.props, { title: l, menu: h, id: c, content: d } = a, { loading: u, dragging: p } = this.state;
    let { content: g } = this.state;
    return g === void 0 && m.isPlainObject(d) && d.html && (g = /* @__PURE__ */ f("div", { class: "dashboard-block-body", dangerouslySetInnerHTML: { __html: d.html } })), /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: n, top: s, width: i, height: r, ...o }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${u ? " loading" : ""}${h ? " has-more-menu" : ""}${p ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: x(this, Qi),
        onDragEnd: x(this, tr),
        "data-id": c,
        ref: x(this, ks),
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: l }),
            h ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: x(this, Zi), children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          g
        ]
      }
    ) });
  }
}, ks = new WeakMap(), Zi = new WeakMap(), Qi = new WeakMap(), tr = new WeakMap(), Pl);
var jh = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Kt = (e, t, n) => (jh(e, t, "read from private field"), n ? n.call(e) : t.get(e)), _t = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, St = (e, t, n) => (jh(e, t, "access private method"), n), Zt, Na, Xh, Ra, Jh, _o, Zh, Aa, Qh, Pi, bo, yr, xo, Pa, td, Co, $o, vr, Da;
const La = class extends z {
  constructor() {
    super(...arguments), _t(this, Na), _t(this, Ra), _t(this, _o), _t(this, Aa), _t(this, Pi), _t(this, yr), _t(this, Pa), _t(this, Zt, /* @__PURE__ */ new Map()), this.state = {}, _t(this, Co, (e) => {
      var n;
      const t = (n = e.dataTransfer) == null ? void 0 : n.getData("application/id");
      t !== void 0 && (this.setState({ dragging: t }), console.log("handleBlockDragStart", e));
    }), _t(this, $o, (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    });
  }
  render() {
    const { blocks: e, height: t } = St(this, _o, Zh).call(this), { cellHeight: n, grid: s } = this.props, i = Kt(this, Zt);
    return console.log("Dashboard.render", { blocks: e, map: i }, this), /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, o) => {
      const { id: a } = r, [l, h, c, d] = i.get(a) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ f(
        ap,
        {
          id: a,
          index: o,
          left: `${100 * l / s}%`,
          top: n * h,
          height: n * d,
          width: `${100 * c / s}%`,
          block: r,
          moreMenu: !0,
          onDragStart: Kt(this, Co),
          onDragEnd: Kt(this, $o)
        },
        r.id
      );
    }) }) });
  }
};
let Ia = La;
Zt = /* @__PURE__ */ new WeakMap();
Na = /* @__PURE__ */ new WeakSet();
Xh = function(e) {
  const { blockDefaultSize: t, blockSizeMap: n } = this.props;
  return e = e ?? t, typeof e == "string" && (e = n[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
};
Ra = /* @__PURE__ */ new WeakSet();
Jh = function() {
  const { blocks: e, blockFetch: t, blockMenu: n } = this.props;
  return e.map((i) => {
    const {
      id: r,
      size: o,
      left: a = -1,
      top: l = -1,
      fetch: h = t,
      menu: c = n,
      ...d
    } = i, [u, p] = St(this, Na, Xh).call(this, o);
    return {
      id: `${r}`,
      width: u,
      height: p,
      left: a,
      top: l,
      fetch: h,
      menu: c,
      ...d
    };
  });
};
_o = /* @__PURE__ */ new WeakSet();
Zh = function() {
  Kt(this, Zt).clear();
  let e = 0;
  const t = St(this, Ra, Jh).call(this);
  return t.forEach((n) => {
    St(this, Aa, Qh).call(this, n);
    const [, s, , i] = Kt(this, Zt).get(n.id);
    e = Math.max(e, s + i);
  }), { blocks: t, height: e };
};
Aa = /* @__PURE__ */ new WeakSet();
Qh = function(e) {
  const t = Kt(this, Zt), { id: n, left: s, top: i, width: r, height: o } = e;
  if (s < 0 || i < 0) {
    const [a, l] = St(this, Pa, td).call(this, r, o, s, i);
    t.set(n, [a, l, r, o]);
  } else
    St(this, yr, xo).call(this, n, [s, i, r, o]);
};
Pi = /* @__PURE__ */ new WeakSet();
bo = function(e) {
  var t;
  const { dragging: n } = this.state;
  for (const [s, i] of Kt(this, Zt).entries())
    if (s !== n && St(t = La, vr, Da).call(t, i, e))
      return !1;
  return !0;
};
yr = /* @__PURE__ */ new WeakSet();
xo = function(e, t) {
  var n;
  Kt(this, Zt).set(e, t);
  for (const [s, i] of Kt(this, Zt).entries())
    s !== e && St(n = La, vr, Da).call(n, i, t) && (i[1] = t[1] + t[3], St(this, yr, xo).call(this, s, i));
};
Pa = /* @__PURE__ */ new WeakSet();
td = function(e, t, n, s) {
  if (n >= 0 && s >= 0) {
    if (St(this, Pi, bo).call(this, [n, s, e, t]))
      return [n, s];
    s = -1;
  }
  let i = n < 0 ? 0 : n, r = s < 0 ? 0 : s, o = !1;
  const a = this.props.grid;
  for (; !o; ) {
    if (St(this, Pi, bo).call(this, [i, r, e, t])) {
      o = !0;
      break;
    }
    n < 0 ? (i += 1, i + e > a && (i = 0, r += 1)) : r += 1;
  }
  return [i, r];
};
Co = /* @__PURE__ */ new WeakMap();
$o = /* @__PURE__ */ new WeakMap();
vr = /* @__PURE__ */ new WeakSet();
Da = function([e, t, n, s], [i, r, o, a]) {
  return !(e + n <= i || i + o <= e || t + s <= r || r + a <= t);
};
_t(Ia, vr);
Ia.defaultProps = {
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
class ed extends q {
}
ed.NAME = "Dashboard";
ed.Component = Ia;
var ce, he;
class Ml extends z {
  constructor(n) {
    super(n);
    D(this, ce, void 0);
    D(this, he, void 0);
    O(this, ce, 0), O(this, he, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (x(this, ce) && cancelAnimationFrame(x(this, ce)), O(this, ce, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), O(this, ce, 0);
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, h = (o === "horz" ? s.clientX - r.left : s.clientY - r.top) - this.barSize / 2;
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
    const { clientSize: n, scrollSize: s, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(n * n / s), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: n } = this.props;
    n && (O(this, he, typeof n == "string" ? document : n.current), x(this, he).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), x(this, he) && x(this, he).removeEventListener("wheel", this._handleWheel);
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
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: h,
      right: c
    } = this.props, { maxScrollPos: d, scrollPos: u } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: c,
      ...o
    }, y = {};
    return s === "horz" ? (g.height = i, g.width = n, y.width = this.barSize, y.left = Math.round(Math.min(d, u) * (n - y.width) / d)) : (g.width = i, g.height = n, y.height = this.barSize, y.top = Math.round(Math.min(d, u) * (n - y.height) / d)), /* @__PURE__ */ f(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
ce = new WeakMap(), he = new WeakMap();
const Di = /* @__PURE__ */ new Map(), Li = [];
function nd(e, t) {
  const { name: n } = e;
  if (!(t != null && t.override) && Di.has(n))
    throw new Error(`DTable: Plugin with name ${n} already exists`);
  Di.set(n, e), t != null && t.buildIn && !Li.includes(n) && Li.push(n);
}
function Fe(e, t) {
  nd(e, t);
  const n = (s) => {
    if (!s)
      return e;
    const { defaultOptions: i, ...r } = e;
    return {
      ...r,
      defaultOptions: { ...i, ...s }
    };
  };
  return n.plugin = e, n;
}
function sd(e) {
  return Di.delete(e);
}
function lp(e) {
  if (typeof e == "string") {
    const t = Di.get(e);
    return t || console.warn(`DTable: Cannot found plugin "${e}"`), t;
  }
  if (typeof e == "function" && "plugin" in e)
    return e.plugin;
  if (typeof e == "object")
    return e;
  console.warn("DTable: Invalid plugin", e);
}
function id(e, t, n) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = lp(s);
    i && (n.has(i.name) || ((r = i.plugins) != null && r.length && id(e, i.plugins, n), e.push(i), n.add(i.name)));
  }), e;
}
function cp(e = [], t = !0) {
  return t && Li.length && e.unshift(...Li), e != null && e.length ? id([], e, /* @__PURE__ */ new Set()) : [];
}
function rd() {
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
function hp(e, t, n) {
  return e && (t && (e = Math.max(t, e)), n && (e = Math.min(n, e))), e;
}
function Tl(e, t) {
  return typeof e == "string" && (e = e.endsWith("%") ? parseFloat(e) / 100 : parseFloat(e)), typeof t == "number" && (typeof e != "number" || isNaN(e)) && (e = t), e;
}
function Ir(e, t = !1) {
  if (!e.list.length)
    return;
  if (e.widthSetting && e.width !== e.widthSetting) {
    e.width = e.widthSetting;
    const s = e.width - e.totalWidth;
    if (t || s > 0) {
      const i = e.flexList.length ? e.flexList : e.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math.min(s, Math.ceil(s * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let n = 0;
  e.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = n, n += s.realWidth;
  });
}
function dp(e, t, n, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (_) => (typeof _ == "function" && (_ = _.call(e)), _ = Tl(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), c = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, d = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, u = {
    ...c,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, p = [], g = {};
  let y = !1;
  const w = [], v = {};
  if (n.forEach((_) => {
    const { colTypes: b, onAddCol: E } = _;
    b && Object.entries(b).forEach(([$, T]) => {
      v[$] || (v[$] = []), v[$].push(T);
    }), E && w.push(E);
  }), t.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: b = "", name: E } = _, $ = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ..._,
      type: b
    }, T = {
      name: E,
      type: b,
      setting: $,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, R = v[b];
    R && R.forEach((I) => {
      const W = typeof I == "function" ? I.call(e, $) : I;
      W && Object.assign($, W, _);
    });
    const { fixed: P, flex: H, minWidth: S = r, maxWidth: A = o } = $, L = Tl($.width || i, i);
    T.flex = H === !0 ? 1 : typeof H == "number" ? H : 0, T.width = hp(L < 1 ? Math.round(L * s) : L, S, A), w.forEach((I) => I.call(e, T)), p.push(T), g[T.name] = T;
    const M = P ? P === "left" ? d : u : c;
    M.list.push(T), M.totalWidth += T.width, M.width = M.totalWidth, T.flex && M.flexList.push(T), typeof $.order == "number" && (y = !0);
  }), y) {
    const _ = (b, E) => (b.setting.order ?? 0) - (E.setting.order ?? 0);
    p.sort(_), d.list.sort(_), c.list.sort(_), u.list.sort(_);
  }
  return Ir(d, !0), Ir(u, !0), c.widthSetting = s - d.width - u.width, Ir(c), {
    list: p,
    map: g,
    left: d,
    center: c,
    right: u
  };
}
function up({ col: e, className: t, height: n, row: s, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: h, left: c, top: d, ...u }) {
  var L;
  const p = {
    left: c ?? e.left,
    top: d ?? s.top,
    width: h ?? e.realWidth,
    height: n,
    ...o
  }, { align: g, border: y } = e.setting, w = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...e.setting.cellStyle,
    ...r
  }, v = ["dtable-cell", l, t, e.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], _ = ["dtable-cell-content", e.setting.cellClass], b = (L = s.data) == null ? void 0 : L[e.name], E = [a ?? b ?? ""], $ = i ? i(E, { row: s, col: e, value: b }, j) : E, T = [], R = [], P = {}, H = {};
  let S = "div";
  $ == null || $.forEach((M) => {
    if (typeof M == "object" && M && !Q(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const I = M.outer ? T : R;
      M.html ? I.push(/* @__PURE__ */ f("div", { className: k("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? p : w, M.style), M.className && (M.outer ? v : _).push(M.className), M.children && I.push(M.children), M.attrs && Object.assign(M.outer ? P : H, M.attrs)), M.tagName && !M.outer && (S = M.tagName);
    } else
      R.push(M);
  });
  const A = S;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k(v),
      style: p,
      "data-col": e.name,
      "data-row": s.id,
      "data-type": e.type || null,
      ...u,
      ...P,
      children: [
        R.length > 0 && /* @__PURE__ */ f(A, { className: k(_), style: w, ...H, children: R }),
        T
      ]
    }
  );
}
function Wr({
  rows: e = [],
  cols: t,
  rowHeight: n,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: c = up,
  onRenderCell: d
}) {
  var g;
  const u = Array.isArray(e) ? e : [e], p = ((g = u[0]) == null ? void 0 : g.top) ?? 0;
  return /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-cells", h),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + p }, children: u.reduce((y, w) => (t.forEach((v) => {
        y.push(
          /* @__PURE__ */ f(
            c,
            {
              className: `is-${w.index % 2 ? "odd" : "even"}-row`,
              col: v,
              row: w,
              top: w.top - p,
              height: n,
              onRenderCell: d
            },
            `${w.index}:${v.name}`
          )
        );
      }), y), []) })
    }
  );
}
function od({
  top: e,
  height: t,
  rowHeight: n,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: c,
  onRenderCell: d
}) {
  let u = null;
  i.list.length && (u = /* @__PURE__ */ f(
    Wr,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: n,
      onRenderCell: d
    },
    "left"
  ));
  let p = null;
  r.list.length && (p = /* @__PURE__ */ f(
    Wr,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: n,
      onRenderCell: d
    },
    "center"
  ));
  let g = null;
  return o.list.length && (g = /* @__PURE__ */ f(
    Wr,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: n,
      onRenderCell: d
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: k("dtable-block", h),
      style: { ...c, top: e, height: t },
      children: [
        u,
        p,
        g
      ]
    }
  );
}
var Wa = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, N = (e, t, n) => (Wa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), B = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, G = (e, t, n, s) => (Wa(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), ht = (e, t, n) => (Wa(e, t, "access private method"), n), Xe, zn, Pe, Vt, Me, at, zt, Bt, Fn, hi, Ii, os, re, Un, Vn, ko, ad, So, ld, Mo, cd, To, hd, di, Eo, wr, Wi, No, Ro, Ao, Po, qn, ui, Oa, dd, Ha, ud, Do, fd;
let Ba = class extends z {
  constructor(t) {
    super(t), B(this, ko), B(this, So), B(this, Mo), B(this, To), B(this, di), B(this, qn), B(this, Oa), B(this, Ha), B(this, Do), this.ref = K(), B(this, Xe, 0), B(this, zn, void 0), B(this, Pe, !1), B(this, Vt, void 0), B(this, Me, void 0), B(this, at, []), B(this, zt, void 0), B(this, Bt, /* @__PURE__ */ new Map()), B(this, Fn, {}), B(this, hi, void 0), B(this, Ii, []), B(this, os, { in: !1 }), this.updateLayout = () => {
      N(this, Xe) && cancelAnimationFrame(N(this, Xe)), G(this, Xe, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), G(this, Xe, 0);
      }));
    }, B(this, re, (n, s) => {
      s = s || n.type;
      const i = N(this, Bt).get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), B(this, Un, (n) => {
      N(this, re).call(this, n, `window_${n.type}`);
    }), B(this, Vn, (n) => {
      N(this, re).call(this, n, `document_${n.type}`);
    }), B(this, wr, (n, s, i) => {
      const { row: r, col: o } = s;
      s.value = this.getCellValue(r, o), n[0] = s.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return N(this, at).forEach((l) => {
        l[a] && (n = l[a].call(this, n, s, i));
      }), this.options[a] && (n = this.options[a].call(this, n, s, i)), o.setting[a] && (n = o.setting[a].call(this, n, s, i)), n;
    }), B(this, Wi, (n, s) => {
      s === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), B(this, No, (n) => {
      var a, l, h;
      const s = this.getPointerInfo(n);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, n, { colName: r, element: o }), N(this, at).forEach((c) => {
          var d;
          (d = c.onHeaderCellClick) == null || d.call(this, n, { colName: r, element: o });
        }));
      else {
        const c = this.layout.visibleRows.find((d) => d.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, n, { colName: r, rowID: i, rowInfo: c, element: o })) === !0)
            return;
          for (const d of N(this, at))
            if (((h = d.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: i, rowInfo: c, element: o })) === !0)
              return;
        }
      }
    }), B(this, Ro, (n) => {
      const s = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), B(this, Ao, (n) => {
      const s = m(n.target).closest(".dtable-cell");
      if (!s.length)
        return ht(this, qn, ui).call(this, !1);
      ht(this, qn, ui).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), B(this, Po, () => {
      ht(this, qn, ui).call(this, !1);
    }), G(this, zn, t.id ?? `dtable-${jc(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, G(this, Me, Object.freeze(cp(t.plugins))), N(this, Me).forEach((n) => {
      var o;
      const { methods: s, data: i, state: r } = n;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(N(this, Fn), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = n.onCreate) == null || o.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = N(this, zt)) == null ? void 0 : t.options) || N(this, Vt) || rd();
  }
  get plugins() {
    return N(this, at);
  }
  get layout() {
    return N(this, zt);
  }
  get id() {
    return N(this, zn);
  }
  get data() {
    return N(this, Fn);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return N(this, os);
  }
  componentWillReceiveProps() {
    G(this, Vt, void 0);
  }
  componentDidMount() {
    N(this, Pe) ? this.forceUpdate() : ht(this, di, Eo).call(this), N(this, at).forEach((n) => {
      let { events: s } = n;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", N(this, No)), this.on("keydown", N(this, Ro));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", N(this, Ao)), this.on("mouseleave", N(this, Po))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(n), G(this, hi, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    N(this, at).forEach((n) => {
      var s;
      (s = n.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    N(this, Pe) ? ht(this, di, Eo).call(this) : N(this, at).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = N(this, hi)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of N(this, Bt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), N(this, Un)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), N(this, Vn)) : t.removeEventListener(s, N(this, re));
    N(this, at).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), N(this, Me).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), G(this, Fn, {}), N(this, Bt).clear();
  }
  on(t, n, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = N(this, Bt).get(t);
    i ? i.push(n) : (N(this, Bt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), N(this, Un)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), N(this, Vn)) : (r = this.element) == null || r.addEventListener(t, N(this, re)));
  }
  off(t, n, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = N(this, Bt).get(t);
    if (!i)
      return;
    const r = i.indexOf(n);
    r >= 0 && i.splice(r, 1), i.length || (N(this, Bt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), N(this, Un)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), N(this, Vn)) : (o = this.element) == null || o.removeEventListener(t, N(this, re)));
  }
  emitCustomEvent(t, n) {
    N(this, re).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: c } = t;
    let { scrollLeft: d, scrollTop: u } = t;
    if (c === "up" || c === "down")
      u = i + (c === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (c === "left" || c === "right")
      d = s + (c === "right" ? 1 : -1) * h;
    else if (c === "top")
      u = 0;
    else if (c === "bottom")
      u = r - o;
    else if (c === "begin")
      d = 0;
    else if (c === "end")
      d = l - h;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (d = s + g), typeof y == "number" && (d = i + y);
    }
    const p = {};
    return typeof d == "number" && (d = Math.max(0, Math.min(d, l - h)), d !== s && (p.scrollLeft = d)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (p.scrollTop = u)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), n == null || n.call(this, !0);
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
    return typeof t == "number" ? n[t] : s[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, n) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof n == "object" ? n : this.getColInfo(n);
    if (!i)
      return;
    let r = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, s, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, n) {
    if (!N(this, Vt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      G(this, zt, void 0);
    else if (s === "options") {
      if (G(this, Vt, void 0), !N(this, zt))
        return;
      G(this, zt, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const s = m(n).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), r = s.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: r,
        rowID: i,
        target: n
      };
  }
  i18n(t, n, s) {
    return tt(N(this, Ii), t, n, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = ht(this, Do, fd).call(this), { className: n, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l } = this.options, h = {}, c = ["dtable", n, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], d = [];
    return t && (h.width = t.width, h.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), d.push(
      ht(this, ko, ad).call(this, t),
      ht(this, So, ld).call(this, t),
      ht(this, Mo, cd).call(this, t),
      ht(this, To, hd).call(this, t)
    ), N(this, at).forEach((u) => {
      var g;
      const p = (g = u.onRender) == null ? void 0 : g.call(this, t);
      p && (p.style && Object.assign(h, p.style), p.className && c.push(p.className), p.children && d.push(p.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: N(this, zn),
        className: k(c),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: d
      }
    );
  }
};
Xe = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
Pe = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Me = /* @__PURE__ */ new WeakMap();
at = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Bt = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
os = /* @__PURE__ */ new WeakMap();
re = /* @__PURE__ */ new WeakMap();
Un = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
ko = /* @__PURE__ */ new WeakSet();
ad = function(e) {
  const { header: t, cols: n, headerHeight: s, scrollLeft: i, rowHeight: r } = e;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      od,
      {
        className: "dtable-header",
        cols: n,
        height: s,
        scrollLeft: i,
        rowHeight: r,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: N(this, wr)
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Qo,
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
So = /* @__PURE__ */ new WeakSet();
ld = function(e) {
  const { headerHeight: t, rowsHeight: n, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a } = e;
  return /* @__PURE__ */ f(
    od,
    {
      className: "dtable-body",
      top: t,
      height: n,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: N(this, wr)
    },
    "body"
  );
};
Mo = /* @__PURE__ */ new WeakSet();
cd = function(e) {
  let { footer: t } = e;
  if (typeof t == "function" && (t = t.call(this, e)), !t)
    return null;
  const n = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Qo,
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
To = /* @__PURE__ */ new WeakSet();
hd = function(e) {
  const t = [], { scrollLeft: n, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: c } = e, { scrollbarSize: d = 12, horzScrollbarPos: u } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Ml,
      {
        type: "horz",
        scrollPos: n,
        scrollSize: r,
        clientSize: i,
        onScroll: N(this, Wi),
        left: s,
        bottom: (u === "inside" ? 0 : -d) + h,
        size: d,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: c + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: c + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Ml,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: N(this, Wi),
        right: 0,
        size: d,
        top: c,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
di = /* @__PURE__ */ new WeakSet();
Eo = function() {
  var e;
  G(this, Pe, !1), (e = this.options.afterRender) == null || e.call(this), N(this, at).forEach((t) => {
    var n;
    return (n = t.afterRender) == null ? void 0 : n.call(this);
  });
};
wr = /* @__PURE__ */ new WeakMap();
Wi = /* @__PURE__ */ new WeakMap();
No = /* @__PURE__ */ new WeakMap();
Ro = /* @__PURE__ */ new WeakMap();
Ao = /* @__PURE__ */ new WeakMap();
Po = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakSet();
ui = function(e) {
  const { element: t, options: n } = this;
  if (!t)
    return;
  const s = m(t), i = e ? { in: !0, row: e[0], col: e[1] } : { in: !1 };
  n.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = N(this, os);
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), G(this, os, i);
};
Oa = /* @__PURE__ */ new WeakSet();
dd = function() {
  if (N(this, Vt))
    return !1;
  const t = { ...rd(), ...N(this, Me).reduce((n, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(n, i), n;
  }, {}), ...this.props };
  return G(this, Vt, t), G(this, at, N(this, Me).reduce((n, s) => {
    const { when: i, options: r } = s;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), n.push(s)), n;
  }, [])), G(this, Ii, [this.options.i18n, ...this.plugins.map((n) => n.i18n)].filter(Boolean)), !0;
};
Ha = /* @__PURE__ */ new WeakSet();
ud = function() {
  var P, H;
  const { plugins: e } = this;
  let t = N(this, Vt);
  const n = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  e.forEach((S) => {
    var L;
    const A = (L = S.beforeLayout) == null ? void 0 : L.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(n, S.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: S } = this;
    if (S)
      i = S.clientWidth;
    else {
      G(this, Pe, !0);
      return;
    }
  }
  const r = dp(this, t, e, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], c = (S, A, L) => {
    var I, W;
    const M = { data: L ?? { [a]: S }, id: S, index: h.length, top: 0 };
    if (L || (M.lazy = !0), h.push(M), ((I = t.onAddRow) == null ? void 0 : I.call(this, M, A)) !== !1) {
      for (const U of e)
        if (((W = U.onAddRow) == null ? void 0 : W.call(this, M, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let S = 0; S < o; S++)
      c(`${S}`, S);
  else
    Array.isArray(o) && o.forEach((S, A) => {
      typeof S == "object" ? c(`${S[a] ?? ""}`, A, S) : c(`${S ?? ""}`, A);
    });
  let d = h;
  const u = {};
  if (t.onAddRows) {
    const S = t.onAddRows.call(this, d);
    S && (d = S);
  }
  for (const S of e) {
    const A = (P = S.onAddRows) == null ? void 0 : P.call(this, d);
    A && (d = A);
  }
  d.forEach((S, A) => {
    u[S.id] = S, S.index = A, S.top = S.index * l;
  });
  const { header: p, footer: g } = t, y = p ? t.headerHeight || l : 0, w = g ? t.footerHeight || l : 0;
  let v = t.height, _ = 0;
  const b = d.length * l, E = y + w + b;
  if (typeof v == "function" && (v = v.call(this, E)), v === "auto")
    _ = E;
  else if (typeof v == "object")
    _ = Math.min(v.max, Math.max(v.min, E));
  else if (v === "100%") {
    const { parent: S } = this;
    if (S)
      _ = S.clientHeight;
    else {
      _ = 0, G(this, Pe, !0);
      return;
    }
  } else
    _ = v;
  const $ = _ - y - w, T = {
    options: t,
    allRows: h,
    width: i,
    height: _,
    rows: d,
    rowsMap: u,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: b,
    header: p,
    footer: g,
    footerGenerators: n,
    headerHeight: y,
    footerHeight: w,
    cols: r
  }, R = (H = t.onLayout) == null ? void 0 : H.call(this, T);
  R && Object.assign(T, R), e.forEach((S) => {
    if (S.onLayout) {
      const A = S.onLayout.call(this, T);
      A && Object.assign(T, A);
    }
  }), G(this, zt, T);
};
Do = /* @__PURE__ */ new WeakSet();
fd = function() {
  (ht(this, Oa, dd).call(this) || !N(this, zt)) && ht(this, Ha, ud).call(this);
  const { layout: e } = this;
  if (!e)
    return;
  const { cols: { center: t } } = e;
  let { scrollLeft: n } = this.state;
  n = Math.min(Math.max(0, t.totalWidth - t.width), n);
  let s = 0;
  t.list.forEach((g) => {
    g.left = s, s += g.realWidth, g.visible = g.left + g.realWidth >= n && g.left <= n + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = e, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), c = l + r, d = Math.min(o.length, Math.ceil(c / a)), u = [], { rowDataGetter: p } = this.options;
  for (let g = h; g < d; g++) {
    const y = o[g];
    y.lazy && p && (y.data = p([y.id])[0], y.lazy = !1), u.push(y);
  }
  return e.visibleRows = u, e.scrollTop = l, e.scrollLeft = n, e;
};
Ba.addPlugin = nd;
Ba.removePlugin = sd;
function fp(e, t, n = !1) {
  var a, l;
  typeof e == "boolean" && (t = e, e = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, c) => {
    const d = r ? r.call(this, h) : !0;
    !d || n && d === "disabled" || !!s[h] === c || (c ? s[h] = !0 : delete s[h], i[h] = c);
  };
  if (e === void 0 ? (t === void 0 && (t = !pd.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    o(h, !!t);
  })) : (Array.isArray(e) || (e = [e]), e.forEach((h) => {
    o(h, t ?? !s[h]);
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
function pp(e) {
  return this.state.checkedRows[e] ?? !1;
}
function pd() {
  var s, i;
  const e = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!e)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: n } = this.options;
  return n ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (n.call(this, o.id) ? 1 : 0), 0)) : t === e;
}
function mp() {
  return Object.keys(this.state.checkedRows);
}
function gp(e) {
  const { checkable: t } = this.options;
  e === void 0 && (e = !t), t !== e && this.setState({ forceCheckable: e });
}
function El(e, t, n = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${e ? " checked" : ""}${n ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const Nl = 'input[type="checkbox"],.dtable-checkbox', yp = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: El
  },
  when: (e) => !!e.checkable,
  options(e) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? e.checkable = t : e.checkable === "auto" && (e.checkable = !!e.cols.some((n) => n.checkbox)), e;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: fp,
    isRowChecked: pp,
    isAllRowChecked: pd,
    getChecks: mp,
    toggleCheckable: gp
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: El(e) })
      ];
    },
    checkedInfo(e, t) {
      const n = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, n)];
      const i = n.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(e, { row: t, col: n }) {
    var h;
    const { id: s } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, s) : !0;
    if (!r)
      return e;
    const { checkbox: o } = n.setting, a = typeof o == "function" ? o.call(this, s) : o, l = this.isRowChecked(s);
    if (a) {
      const c = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, s, r === "disabled");
      e.unshift(c), e.push({ outer: !0, className: "has-checkbox" });
    }
    return l && e.push({ outer: !0, className: "is-checked" }), e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var o;
    const { id: s } = t, { checkbox: i } = n.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, s);
      e.unshift(l), e.push({ outer: !0, className: "has-checkbox" });
    }
    return e;
  },
  onHeaderCellClick(e) {
    const t = e.target;
    if (!t)
      return;
    const n = t.closest(Nl);
    n && (this.toggleCheckRows(n.checked), e.stopPropagation());
  },
  onCellClick(e, { rowID: t }) {
    const n = m(e.target);
    if (!n.length || n.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (n.closest(Nl).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, vp = Fe(yp);
var md = /* @__PURE__ */ ((e) => (e.unknown = "", e.collapsed = "collapsed", e.expanded = "expanded", e.hidden = "hidden", e.normal = "normal", e))(md || {});
function Oi(e) {
  const t = this.data.nestedMap.get(e);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const n = this.state.collapsedRows, s = t.children && n && n[e];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Oi.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Oi.call(this, t.parent).level + 1 : 0, t;
}
function wp(e) {
  return e !== void 0 ? Oi.call(this, e) : this.data.nestedMap;
}
function _p(e, t) {
  let n = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (e === "HEADER")
    if (t === void 0 && (t = !gd.call(this)), t) {
      const i = s.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (n[r] = !0);
    } else
      n = {};
  else {
    const i = Array.isArray(e) ? e : [e];
    t === void 0 && (t = !n[i[0]]), i.forEach((r) => {
      const o = s.get(r);
      t && (o != null && o.children) ? n[r] = !0 : delete n[r];
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
function gd() {
  const e = this.data.nestedMap.values();
  for (const t of e)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function yd(e, t = 0, n, s = 0) {
  var i;
  n || (n = [...e.keys()]);
  for (const r of n) {
    const o = e.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = yd(e, t, o.children, s + 1)));
  }
  return t;
}
function vd(e, t, n, s) {
  const i = e.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = n, vd(e, r, n, s);
  }), i;
}
function wd(e, t, n, s, i) {
  var a;
  const r = e.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return n === h;
  })) && (s[t] = n), r.parent && wd(e, r.parent, n, s, i);
}
const bp = {
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
      return Object.entries(t).forEach(([i, r]) => {
        const o = vd(this, i, r, s);
        o != null && o.parent && wd(this, o.parent, r, s, n);
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
    getNestedInfo: wp,
    toggleRow: _p,
    isAllCollapsed: gd,
    getNestedRowInfo: Oi
  },
  beforeLayout() {
    var e;
    (e = this.data.nestedMap) == null || e.clear();
  },
  onAddRow(e) {
    var i, r;
    const { nestedMap: t } = this.data, n = String((i = e.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(e.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = n === "0" ? void 0 : n, (r = e.data) != null && r[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(e.id, s), n) {
      let o = t.get(n);
      o || (o = {
        state: "",
        level: 0
      }, t.set(n, o)), o.children || (o.children = []), o.children.push(e.id);
    }
  },
  onAddRows(e) {
    return e = e.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), yd(this.data.nestedMap), e.sort((t, n) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(n.id), r = (s.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - n.index : r;
    }), e;
  },
  onRenderCell(e, { col: t, row: n }) {
    var a;
    const { id: s, data: i } = n, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(s);
    if (r && (o.children || o.parent) && e.unshift(((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, s, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) })), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), e.unshift(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return e;
  },
  onRenderHeaderCell(e, { row: t, col: n }) {
    var i;
    const { id: s } = t;
    return n.setting.nestedToggle && e.unshift(((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, n, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) })), e;
  },
  onRenderRow({ props: e, row: t }) {
    const n = this.getNestedRowInfo(t.id);
    return {
      className: k(e.className, `is-${n.state}`),
      "data-parent": n.parent
    };
  },
  onRenderHeaderRow({ props: e }) {
    return e.className = k(e.className, `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), e;
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
}, xp = Fe(bp);
function _d(e, t, n, s) {
  if (typeof e == "function" && (e = e(t)), typeof e == "string" && e.length && (e = { url: e }), !e)
    return n;
  const { url: i, ...r } = e, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: it(i, t.row.data), ...s, ...r, ...a, children: n });
}
function za(e, t, n) {
  var s;
  if (e != null)
    return n = n ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof e == "function" ? e(n, t) : it(e, n);
}
function bd(e, t, n, s) {
  var i;
  return n = n ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === !1 ? n : (e === !0 && (e = "[yyyy-]MM-dd hh:mm"), typeof e == "function" && (e = e(n, t)), kt(n, e, s ?? n));
}
function xd(e, t) {
  const { link: n } = t.col.setting, s = _d(n, t, e[0]);
  return s && (e[0] = s), e;
}
function Cd(e, t) {
  const { format: n } = t.col.setting;
  return n && (e[0] = za(n, t, e[0])), e;
}
function $d(e, t) {
  const { map: n } = t.col.setting;
  return typeof n == "function" ? e[0] = n(e[0], t) : typeof n == "object" && n && (e[0] = n[e[0]] ?? e[0]), e;
}
function kd(e, t, n = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = n, invalidDate: i } = t.col.setting;
  return e[0] = bd(s, t, e[0], i), e;
}
function Lo(e, t, n = !1) {
  const { html: s = n } = t.col.setting;
  if (s === !1)
    return e;
  const i = e[0], r = s === !0 ? i : za(s, t, i);
  return e[0] = {
    html: r
  }, e;
}
const Cp = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(e, t) {
        return Lo(e, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(e, { col: t }) {
        const { circleSize: n = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-success-500)" } = t.setting, o = (n - s) / 2, a = n / 2, l = e[0];
        return e[0] = /* @__PURE__ */ f("svg", { width: n, height: n, children: [
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r: o, "stroke-width": s, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * o * 2, "stroke-dashoffset": Math.PI * o * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ f("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${o}px` }, children: Math.round(l) })
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
    if (n && (e = kd(e, t, n)), e = $d(e, t), e = Cd(e, t), s ? e = Lo(e, t) : e = xd(e, t), i) {
      let r = e[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = it(i, t.row.data)), e.push({ attrs: { title: r } });
    }
    return e;
  }
}, $p = Fe(Cp, { buildIn: !0 });
function Or(e, { row: t, col: n }) {
  const { data: s } = t, i = s ? s[n.name] : void 0;
  if (!(i != null && i.length))
    return e;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${n.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${n.name}Name` } = n.setting, c = (s ? s[h] : i) || e[0], d = {
    size: "xs",
    className: k(r, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[o] : void 0,
    text: c,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (e[0] = /* @__PURE__ */ f(Xc, { ...d }), n.type === "avatarBtn") {
    const { avatarBtnProps: u } = n.setting, p = typeof u == "function" ? u(n, t) : u;
    e[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
      e[0],
      /* @__PURE__ */ f("div", { children: c })
    ] });
  } else
    n.type === "avatarName" && (e[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      e[0],
      /* @__PURE__ */ f("span", { children: c })
    ] }));
  return e;
}
const kp = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Or
    },
    avatarBtn: {
      onRenderCell: Or
    },
    avatarName: {
      onRenderCell: Or
    }
  }
}, Sp = Fe(kp, { buildIn: !0 }), Mp = {
  name: "sort-type",
  onRenderHeaderCell(e, t) {
    const { col: n } = t, { sortType: s } = n.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      e.push(
        /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = n.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, n, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        e[0] = /* @__PURE__ */ f("a", { href: it(a, { ...n.setting, sortType: o }), ...l, children: e[0] });
      }
    }
    return e;
  }
}, Tp = Fe(Mp, { buildIn: !0 }), Hr = (e) => {
  e.length !== 1 && e.forEach((t, n) => {
    !n || t.setting.border || t.setting.group === e[n - 1].setting.group || (t.setting.border = "left");
  });
}, Ep = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (e) => !!e.groupDivider,
  onLayout(e) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = e;
    Hr(t.left.list), Hr(t.center.list), Hr(t.right.list);
  }
}, Np = Fe(Ep), Rp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: md,
  avatar: Sp,
  checkable: vp,
  group: Np,
  nested: xp,
  renderDatetime: bd,
  renderDatetimeCell: kd,
  renderFormat: za,
  renderFormatCell: Cd,
  renderHtmlCell: Lo,
  renderLink: _d,
  renderLinkCell: xd,
  renderMapCell: $d,
  rich: $p,
  sortType: Tp
}, Symbol.toStringTag, { value: "Module" }));
class As extends q {
}
As.NAME = "DTable";
As.Component = Ba;
As.definePlugin = Fe;
As.removePlugin = sd;
As.plugins = Rp;
var Sd = (e, t, n) => {
  if (!t.has(e))
    throw TypeError("Cannot " + n);
}, Rl = (e, t, n) => (Sd(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ap = (e, t, n) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, n);
}, Al = (e, t, n, s) => (Sd(e, t, "write to private field"), s ? s.call(e, n) : t.set(e, n), n), Je;
const Pp = "nav", fi = '[data-toggle="tab"]', Dp = "active";
class Md extends mt {
  constructor() {
    super(...arguments), Ap(this, Je, 0);
  }
  active(t) {
    const n = this.$element, s = n.find(fi);
    let i = t ? m(t).closest(fi) : s.filter(`.${Dp}`);
    if (!i.length && (i = n.find(fi).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = m(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), Rl(this, Je) && clearTimeout(Rl(this, Je)), Al(this, Je, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), Al(this, Je, 0);
    }, 10)));
  }
}
Je = /* @__PURE__ */ new WeakMap();
Md.NAME = "Tabs";
m(document).on("click.tabs.zui", fi, (e) => {
  e.preventDefault();
  const t = m(e.target), n = t.closest(`.${Pp}`);
  n.length && Md.ensure(n).active(t);
});
m(() => {
  m(".disabled, [disabled]").on("click", (e) => {
    e.preventDefault(), e.stopImmediatePropagation();
  });
});
export {
  m as $,
  bc as ActionMenu,
  Cc as ActionMenuNested,
  Jc as Avatar,
  Zc as BtnGroup,
  nh as ColorPicker,
  mt as Component,
  q as ComponentFromReact,
  rt as ContextMenu,
  Ss as CustomContent,
  Qo as CustomRender,
  As as DTable,
  ed as Dashboard,
  ch as DatePicker,
  Yt as Dropdown,
  Kc as EventBus,
  mc as HElement,
  Zo as HtmlContent,
  nt as Icon,
  $c as Menu,
  qc as Messager,
  dh as Modal,
  te as ModalBase,
  mh as ModalTrigger,
  yh as Nav,
  vh as Pager,
  wh as Pick,
  kh as Picker,
  Sh as Popovers,
  Yc as ProgressCircle,
  z as ReactComponent,
  Th as SearchBox,
  ss as TIME_DAY,
  Md as Tabs,
  lh as TimePicker,
  Eh as Toolbar,
  ft as Tooltip,
  Yh as Tree,
  Kh as Upload,
  op as UploadImgs,
  wf as addDate,
  m as cash,
  k as classes,
  kr as componentsMap,
  wu as convertBytes,
  $u as create,
  Z as createDate,
  Du as createPortal,
  K as createRef,
  yu as deepGet,
  gu as deepGetPath,
  yi as delay,
  Ip as dom,
  vu as formatBytes,
  kt as formatDate,
  Jp as formatDateSpan,
  it as formatString,
  Ql as getClassList,
  j as h,
  Wp as hh,
  Eu as htm,
  tt as i18n,
  Ns as isSameDay,
  sh as isSameMonth,
  Yp as isSameWeek,
  Qr as isSameYear,
  Kp as isToday,
  Xp as isTomorrow,
  Q as isValidElement,
  jp as isYesterday,
  dl as nativeEvents,
  es as render,
  gc as renderCustomContent,
  Ru as renderCustomResult,
  uf as store,
  tc as storeData,
  Cu as takeData
};
//# sourceMappingURL=zui.js.map
