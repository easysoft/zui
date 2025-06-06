var gi = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var bt = (n, t, e) => (gi(n, t, "read from private field"), e ? e.call(n) : t.get(n)), St = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, It = (n, t, e, s) => (gi(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var _i = (n, t, e) => (gi(n, t, "access private method"), e);
const Kp = "3.0.0", Gp = 1749201864197, qp = "production", Yp = "9e16db0520cff99925702459c691faee67cbc730", ae = document, mn = window, Ha = ae.documentElement, Fe = ae.createElement.bind(ae), Wa = Fe("div"), yi = Fe("table"), Ih = Fe("tbody"), Oo = Fe("tr"), { isArray: Hn, prototype: Ba } = Array, { concat: Dh, filter: gr, indexOf: ja, map: Ua, push: Ph, slice: Va, some: _r, splice: Lh } = Ba, Rh = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, zh = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Oh = /<.+>/, Fh = /^\w+$/;
function yr(n, t) {
  const e = Hh(t);
  return !n || !e && !Re(t) && !lt(t) ? [] : !e && zh.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && Fh.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class Wn {
  constructor(t, e) {
    if (!t)
      return;
    if (Hi(t))
      return t;
    let s = t;
    if (_t(t)) {
      const i = e || ae;
      if (s = Rh.test(t) && Re(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Oh.test(t) ? qa(t) : Hi(i) ? i.find(t) : _t(i) ? p(i).find(t) : yr(t, i), !s)
        return;
    } else if (He(t))
      return this.ready(t);
    (s.nodeType || s === mn) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new Wn(t, e);
  }
}
const T = Wn.prototype, p = T.init;
p.fn = p.prototype = T;
T.length = 0;
T.splice = Lh;
typeof Symbol == "function" && (T[Symbol.iterator] = Ba[Symbol.iterator]);
function Hi(n) {
  return n instanceof Wn;
}
function Je(n) {
  return !!n && n === n.window;
}
function Re(n) {
  return !!n && n.nodeType === 9;
}
function Hh(n) {
  return !!n && n.nodeType === 11;
}
function lt(n) {
  return !!n && n.nodeType === 1;
}
function Wh(n) {
  return !!n && n.nodeType === 3;
}
function Bh(n) {
  return typeof n == "boolean";
}
function He(n) {
  return typeof n == "function";
}
function _t(n) {
  return typeof n == "string";
}
function Et(n) {
  return n === void 0;
}
function $s(n) {
  return n === null;
}
function Ka(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function vr(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
p.isWindow = Je;
p.isFunction = He;
p.isArray = Hn;
p.isNumeric = Ka;
p.isPlainObject = vr;
function ut(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (vr(n)) {
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
p.each = ut;
T.each = function(n) {
  return ut(this, n);
};
T.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function gn(...n) {
  const t = Bh(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return gn(t, p, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (Hn(r[o]) || vr(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), gn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
p.extend = gn;
T.extend = function(n) {
  return gn(T, n);
};
const jh = /\S+/g;
function Bn(n) {
  return _t(n) ? n.match(jh) || [] : [];
}
T.toggleClass = function(n, t) {
  const e = Bn(n), s = !Et(t);
  return this.each((i, r) => {
    lt(r) && ut(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
T.addClass = function(n) {
  return this.toggleClass(n, !0);
};
T.removeAttr = function(n) {
  const t = Bn(n);
  return this.each((e, s) => {
    lt(s) && ut(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Uh(n, t) {
  if (n) {
    if (_t(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !lt(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return $s(e) ? void 0 : e;
      }
      return Et(t) ? this : $s(t) ? this.removeAttr(n) : this.each((e, s) => {
        lt(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
T.attr = Uh;
T.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
T.hasClass = function(n) {
  return !!n && _r.call(this, (t) => lt(t) && t.classList.contains(n));
};
T.get = function(n) {
  return Et(n) ? Va.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
T.eq = function(n) {
  return p(this.get(n));
};
T.first = function() {
  return this.eq(0);
};
T.last = function() {
  return this.eq(-1);
};
function Vh(n) {
  return Et(n) ? this.get().map((t) => lt(t) || Wh(t) ? t.textContent : "").join("") : this.each((t, e) => {
    lt(e) && (e.textContent = n);
  });
}
T.text = Vh;
function le(n, t, e) {
  if (!lt(n))
    return;
  const s = mn.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function Yt(n, t) {
  return parseInt(le(n, t), 10) || 0;
}
function Fo(n, t) {
  return Yt(n, `border${t ? "Left" : "Top"}Width`) + Yt(n, `padding${t ? "Left" : "Top"}`) + Yt(n, `padding${t ? "Right" : "Bottom"}`) + Yt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const vi = {};
function Kh(n) {
  if (vi[n])
    return vi[n];
  const t = Fe(n);
  ae.body.insertBefore(t, null);
  const e = le(t, "display");
  return ae.body.removeChild(t), vi[n] = e !== "none" ? e : "block";
}
function Ho(n) {
  return le(n, "display") === "none";
}
function Ga(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function jn(n) {
  return _t(n) ? (t, e) => Ga(e, n) : He(n) ? n : Hi(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
T.filter = function(n) {
  const t = jn(n);
  return p(gr.call(this, (e, s) => t.call(e, s, e)));
};
function ke(n, t) {
  return t ? n.filter(t) : n;
}
T.detach = function(n) {
  return ke(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Gh = /^\s*<(\w+)[^>]*>/, qh = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Wo = {
  "*": Wa,
  tr: Ih,
  td: Oo,
  th: Oo,
  thead: yi,
  tbody: yi,
  tfoot: yi
};
function qa(n) {
  if (!_t(n))
    return [];
  if (qh.test(n))
    return [Fe(RegExp.$1)];
  const t = Gh.test(n) && RegExp.$1, e = Wo[t] || Wo["*"];
  return e.innerHTML = n, p(e.childNodes).detach().get();
}
p.parseHTML = qa;
T.has = function(n) {
  const t = _t(n) ? (e, s) => yr(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
T.not = function(n) {
  const t = jn(n);
  return this.filter((e, s) => (!_t(n) || lt(s)) && !t.call(s, e, s));
};
function he(n, t, e, s) {
  const i = [], r = He(t), o = s && jn(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && Ph.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Ya(n) {
  return n.multiple && n.options ? he(gr.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function Yh(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || nl.test(e.type)) {
      const i = Hn(n) ? Ua.call(n, String) : $s(n) ? [] : [String(n)];
      s ? ut(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = Et(n) || $s(n) ? "" : n;
  }) : this[0] && Ya(this[0]);
}
T.val = Yh;
T.is = function(n) {
  const t = jn(n);
  return _r.call(this, (e, s) => t.call(e, s, e));
};
p.guid = 1;
function Zt(n) {
  return n.length > 1 ? gr.call(n, (t, e, s) => ja.call(s, t) === e) : n;
}
p.unique = Zt;
T.add = function(n, t) {
  return p(Zt(this.get().concat(p(n, t).get())));
};
T.children = function(n) {
  return ke(p(Zt(he(this, (t) => t.children))), n);
};
T.parent = function(n) {
  return ke(p(Zt(he(this, "parentNode"))), n);
};
T.index = function(n) {
  const t = n ? p(n)[0] : this[0], e = n ? this : p(t).parent().children();
  return ja.call(e, t);
};
T.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
T.siblings = function(n) {
  return ke(p(Zt(he(this, (t) => p(t).parent().children().not(t)))), n);
};
T.find = function(n) {
  return p(Zt(he(this, (t) => yr(n, t))));
};
const Jh = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xh = /^$|^module$|\/(java|ecma)script/i, Zh = ["type", "src", "nonce", "noModule"];
function Qh(n, t) {
  const e = p(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (Xh.test(i.type) && Ha.contains(i)) {
      const r = Fe("script");
      r.text = i.textContent.replace(Jh, ""), ut(Zh, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function td(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && Qh(t, n.ownerDocument);
}
function xe(n, t, e, s, i, r, o, a) {
  return ut(n, (l, c) => {
    ut(p(c), (d, h) => {
      ut(p(t), (u, f) => {
        const g = e ? h : f, _ = e ? f : h, y = e ? d : u;
        td(g, y ? _.cloneNode(!0) : _, s, i, !y);
      }, a);
    }, o);
  }, r), t;
}
T.after = function() {
  return xe(arguments, this, !1, !1, !1, !0, !0);
};
T.append = function() {
  return xe(arguments, this, !1, !1, !0);
};
function ed(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (Et(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    lt(s) && (t ? p(s).empty().append(n) : s.innerHTML = n);
  });
}
T.html = ed;
T.appendTo = function(n) {
  return xe(arguments, this, !0, !1, !0);
};
T.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = p(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
T.before = function() {
  return xe(arguments, this, !1, !0);
};
T.wrapAll = function(n) {
  let t = p(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
T.wrap = function(n) {
  return this.each((t, e) => {
    const s = p(n)[0];
    p(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
T.insertAfter = function(n) {
  return xe(arguments, this, !0, !1, !1, !1, !1, !0);
};
T.insertBefore = function(n) {
  return xe(arguments, this, !0, !0);
};
T.prepend = function() {
  return xe(arguments, this, !1, !0, !0, !0, !0);
};
T.prependTo = function(n) {
  return xe(arguments, this, !0, !0, !0, !1, !1, !0);
};
T.contents = function() {
  return p(Zt(he(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
T.next = function(n, t, e) {
  return ke(p(Zt(he(this, "nextElementSibling", t, e))), n);
};
T.nextAll = function(n) {
  return this.next(n, !0);
};
T.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
T.parents = function(n, t) {
  return ke(p(Zt(he(this, "parentElement", !0, t))), n);
};
T.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
T.prev = function(n, t, e) {
  return ke(p(Zt(he(this, "previousElementSibling", t, e))), n);
};
T.prevAll = function(n) {
  return this.prev(n, !0);
};
T.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
T.map = function(n) {
  return p(Dh.apply([], Ua.call(this, (t, e) => n.call(t, e, t))));
};
T.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
T.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && le(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Ha;
  });
};
T.slice = function(n, t) {
  return p(Va.call(this, n, t));
};
const sd = /-([a-z])/g;
function br(n) {
  return n.replace(sd, (t, e) => e.toUpperCase());
}
T.ready = function(n) {
  const t = () => setTimeout(n, 0, p);
  return ae.readyState !== "loading" ? t() : ae.addEventListener("DOMContentLoaded", t), this;
};
T.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = p(t);
    e.replaceWith(e.children());
  }), this;
};
T.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + mn.pageYOffset,
    left: t.left + mn.pageXOffset
  };
};
T.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = le(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && le(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && lt(i)) {
      const r = p(i).offset();
      e.top -= r.top + Yt(i, "borderTopWidth"), e.left -= r.left + Yt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Yt(n, "marginTop"),
    left: e.left - Yt(n, "marginLeft")
  };
};
const Ja = {
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
T.prop = function(n, t) {
  if (n) {
    if (_t(n))
      return n = Ja[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
T.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Ja[n] || n];
  });
};
const nd = /^--/;
function wr(n) {
  return nd.test(n);
}
const bi = {}, { style: id } = Wa, rd = ["webkit", "moz", "ms"];
function od(n, t = wr(n)) {
  if (t)
    return n;
  if (!bi[n]) {
    const e = br(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${rd.join(`${s} `)}${s}`.split(" ");
    ut(i, (r, o) => {
      if (o in id)
        return bi[n] = o, !1;
    });
  }
  return bi[n];
}
const ad = {
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
function Xa(n, t, e = wr(n)) {
  return !e && !ad[n] && Ka(t) ? `${t}px` : t;
}
function ld(n, t) {
  if (_t(n)) {
    const e = wr(n);
    return n = od(n, e), arguments.length < 2 ? this[0] && le(this[0], n, e) : n ? (t = Xa(n, t, e), this.each((s, i) => {
      lt(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
T.css = ld;
function Za(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const cd = /^\s+|\s+$/;
function Bo(n, t) {
  const e = n.dataset[t] || n.dataset[br(t)];
  return cd.test(e) ? e : Za(JSON.parse, e);
}
function hd(n, t, e) {
  e = Za(JSON.stringify, e), n.dataset[br(t)] = e;
}
function dd(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Bo(this[0], s);
    return e;
  }
  if (_t(n))
    return arguments.length < 2 ? this[0] && Bo(this[0], n) : Et(t) ? this : this.each((e, s) => {
      hd(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
T.data = dd;
function Qa(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
ut([!0, !1], (n, t) => {
  ut(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    T[i] = function(r) {
      if (this[0])
        return Je(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : Re(this[0]) ? Qa(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Yt(this[0], `margin${e ? "Top" : "Left"}`) + Yt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
ut(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  T[e] = function(s) {
    if (!this[0])
      return Et(s) ? void 0 : this;
    if (!arguments.length)
      return Je(this[0]) ? this[0].document.documentElement[`client${t}`] : Re(this[0]) ? Qa(this[0], t) : this[0].getBoundingClientRect()[e] - Fo(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!lt(o))
        return;
      const a = le(o, "boxSizing");
      o.style[e] = Xa(e, i + (a === "border-box" ? Fo(o, !n) : 0));
    });
  };
});
const jo = "___cd";
T.toggle = function(n) {
  return this.each((t, e) => {
    if (!lt(e))
      return;
    const s = Ho(e);
    (Et(n) ? s : n) ? (e.style.display = e[jo] || "", Ho(e) && (e.style.display = Kh(e.tagName))) : s || (e[jo] = le(e, "display"), e.style.display = "none");
  });
};
T.hide = function() {
  return this.toggle(!1);
};
T.show = function() {
  return this.toggle(!0);
};
const Uo = "___ce", Cr = ".", Sr = { focus: "focusin", blur: "focusout" }, tl = { mouseenter: "mouseover", mouseleave: "mouseout" }, ud = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function kr(n) {
  return tl[n] || Sr[n] || n;
}
function xr(n) {
  const t = n.split(Cr);
  return [t[0], t.slice(1).sort()];
}
T.trigger = function(n, t) {
  if (_t(n)) {
    const [s, i] = xr(n), r = kr(s);
    if (!r)
      return this;
    const o = ud.test(r) ? "MouseEvents" : "HTMLEvents";
    n = ae.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Cr), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in Sr;
  return this.each((s, i) => {
    e && He(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function el(n) {
  return n[Uo] = n[Uo] || {};
}
function fd(n, t, e, s, i) {
  const r = el(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function sl(n, t) {
  return !t || !_r.call(t, (e) => n.indexOf(e) < 0);
}
function _n(n, t, e, s, i) {
  const r = el(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !sl(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      _n(n, t, e, s, i);
}
T.off = function(n, t, e) {
  if (Et(n))
    this.each((s, i) => {
      !lt(i) && !Re(i) && !Je(i) || _n(i);
    });
  else if (_t(n))
    He(t) && (e = t, t = ""), ut(Bn(n), (s, i) => {
      const [r, o] = xr(i), a = kr(r);
      this.each((l, c) => {
        !lt(c) && !Re(c) && !Je(c) || _n(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
T.remove = function(n) {
  return ke(this, n).detach().off(), this;
};
T.replaceWith = function(n) {
  return this.before(n).remove();
};
T.replaceAll = function(n) {
  return p(n).replaceWith(this), this;
};
function pd(n, t, e, s, i) {
  if (!_t(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return _t(t) || (Et(t) || $s(t) ? t = "" : Et(e) ? (e = t, t = "") : (s = e, e = t, t = "")), He(s) || (s = e, e = void 0), s ? (ut(Bn(n), (r, o) => {
    const [a, l] = xr(o), c = kr(a), d = a in tl, h = a in Sr;
    c && this.each((u, f) => {
      if (!lt(f) && !Re(f) && !Je(f))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !sl(l, _.namespace.split(Cr)) || !t && (h && (_.target !== f || _.___ot === c) || d && _.relatedTarget && f.contains(_.relatedTarget)))
          return;
        let y = f;
        if (t) {
          let b = _.target;
          for (; !Ga(b, t); )
            if (b === f || (b = b.parentNode, !b))
              return;
          y = b;
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
        const v = s.call(y, _, _.___td);
        i && _n(f, c, l, t, g), v === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = s.guid = s.guid || p.guid++, fd(f, c, l, t, g);
    });
  }), this) : this;
}
T.on = pd;
function md(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
T.one = md;
const gd = /\r?\n/g;
function _d(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(gd, `\r
`))}`;
}
const yd = /file|reset|submit|button|image/i, nl = /radio|checkbox/i;
T.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    ut(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || yd.test(i.type) || nl.test(i.type) && !i.checked)
        return;
      const r = Ya(i);
      if (!Et(r)) {
        const o = Hn(r) ? r : [r];
        ut(o, (a, l) => {
          n += _d(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = p;
function vd(n, t) {
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
function $r(n, t, e) {
  try {
    const s = vd(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function Ee(n, t, e, s) {
  const i = $r(n, t);
  return typeof i == "function" ? i.apply(s || n, e) : i;
}
function Jp(n) {
  return typeof n == "string" && n !== "";
}
function X(n, ...t) {
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
var Tr = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Tr || {});
function qt(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / Tr[e]).toFixed(t) + e);
}
const Me = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase(), n.endsWith("B") || (n += "B");
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Tr[s];
};
let Nr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ne;
function bd() {
  return Nr;
}
function wd(n) {
  Nr = n.toLowerCase().replace("-", "_");
}
function il(n, t) {
  ne || (ne = {}), typeof n == "string" && (n = { [n]: t ?? {} }), p.extend(!0, ne, n);
}
function J(n, t, e, s, i, r) {
  Array.isArray(n) ? ne && n.unshift(ne) : n = ne ? [ne, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || Nr;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const d = r && l === ne ? `${r}.${t}` : t;
    if (a = $r(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? X(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Cd(n, t, e, s) {
  return J(void 0, n, t, e, s);
}
J.addLang = il;
J.getLang = Cd;
J.getCode = bd;
J.setCode = wd;
J.map = ne;
il({
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
function Ve(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => Ve(n, t, s)) : !(e instanceof Blob) && p.isPlainObject(e) ? Object.entries(e).forEach(([s, i]) => {
    Ve(n, `${t}[${s}]`, i);
  }) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Sd(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    Ve(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    Ve(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    Ve(e, i, s);
  }) : typeof n == "object" && n && Object.entries(n).forEach(([s, i]) => {
    Ve(e, s, i);
  })), e;
}
function wt() {
  return p.guid++;
}
function Wi(n, t) {
  if (n === t)
    return !1;
  if (n && t) {
    const e = typeof n, s = typeof t;
    if (e !== s)
      return !0;
    if (e === "object" && s === "object") {
      const i = Array.isArray(n), r = Array.isArray(t);
      if (i !== r)
        return !0;
      if (i && r) {
        if (n.length !== t.length)
          return !0;
        for (let l = 0; l < n.length; l++)
          if (Wi(n[l], t[l]))
            return !0;
        return !1;
      }
      const o = Object.keys(n), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if (Wi(n[l], t[l]))
          return !0;
      return !1;
    }
    if (e === "function" && s === "function")
      return n.toString() !== t.toString();
  }
  return n !== t;
}
class Xe {
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
   * Set the dependencies of the computed value.
   *
   * @param dependencies The dependencies of the computed value.
   * @returns The computed value.
   */
  depends(t) {
    return this._dependencies = t, this;
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
    return (!e || t.some((s, i) => s instanceof Xe ? s.value !== e[i] : Wi(s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof Xe ? s.cache : s)), this._value;
  }
}
function rl(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? rl(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...n) => rl(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
p.classes = k;
p.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = p(s);
    n === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(n, ...t));
  });
};
const Ke = /* @__PURE__ */ new WeakMap();
function Er(n, t, e) {
  const s = Ke.has(n), i = s ? Ke.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, p(n).dataset(), i), Ke.set(n, i)) : Ke.delete(n);
}
function Mr(n, t, e) {
  let s = Ke.get(n) || {};
  return e && n instanceof Element && (s = Object.assign({}, p(n).dataset(), s)), t === void 0 ? s : s[t];
}
function Xp(n) {
  Ke.delete(n);
}
p.fn.dataset = p.fn.data;
p.fn.data = function(...n) {
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? this.length ? Mr(this[0], t, !0) : void 0 : this.each((s, i) => Er(i, t, e));
};
p.fn.removeData = function(n = null) {
  return this.each((t, e) => Er(e, n));
};
function Ze(n, ...t) {
  return n.includes("RAWJS") && (n = n.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(`return ${n}`)(...t);
}
function kd(n, ...t) {
  return n.includes("RAWJS") ? Ze(n, ...t) : JSON.parse(n);
}
function Zp(n) {
  return JSON.stringify(n, (t, e) => {
    if (typeof e == "function")
      return `RAWJS<${e.toString().split('"').join("<RAWJS_QUOTE>").split(`
`).join("<RAWJS_LINE>")}>RAWJS`;
  });
}
function Ts(n, t) {
  const e = p(n)[0];
  if (!e)
    return;
  const { prefix: s, getter: i, evalValue: r, json: o = !0, evalArgs: a = [] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, l = Array.isArray(r) ? new Set(r) : void 0;
  return Array.from(e.attributes).reduce((c, d) => {
    let { name: h } = d;
    const { value: u } = d;
    let f = u;
    if (h.startsWith(s)) {
      if (h = h.slice(s.length).replace(/-([a-z])/g, (g) => g[1].toUpperCase()), i)
        f = i(h, u);
      else
        try {
          r && (!l || l.has(h)) || r === void 0 && u.includes("RAWJS") ? f = Ze(u, ...a) : o && (f = JSON.parse(u));
        } catch {
        }
      c[h] = f;
    }
    return c;
  }, {});
}
function Vo(n, t, e = "z-") {
  const s = p(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function xd(...n) {
  var e;
  const t = n.length;
  if (!t)
    return Ts(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = Ts(this)) == null ? void 0 : e[s] : (p.isPlainObject(s) && Vo(this, s), this);
  }
  return Vo(this, { [n[0]]: n[1] }), this;
}
p.fn.z = xd;
p.fn._attr = p.fn.attr;
p.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
p.Event || (p.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
});
const yn = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), $d = {};
p.share = $d;
var Un, G, ol, gt, Pe, Ko, al, Bi, Ar, ji, Ui, Ns = {}, ll = [], Td = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Vn = Array.isArray;
function me(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function cl(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function Pt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Un.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return cn(n, o, s, i, null);
}
function cn(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++ol, __i: -1, __u: 0 };
  return i == null && G.vnode != null && G.vnode(r), r;
}
function V() {
  return { current: null };
}
function We(n) {
  return n.children;
}
function j(n, t) {
  this.props = n, this.context = t;
}
function Qe(n, t) {
  if (t == null)
    return n.__ ? Qe(n.__, n.__i + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Qe(n) : null;
}
function hl(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return hl(n);
  }
}
function Go(n) {
  (!n.__d && (n.__d = !0) && Pe.push(n) && !vn.__r++ || Ko !== G.debounceRendering) && ((Ko = G.debounceRendering) || al)(vn);
}
function vn() {
  var n, t, e, s, i, r, o, a;
  for (Pe.sort(Bi); n = Pe.shift(); )
    n.__d && (t = Pe.length, s = void 0, r = (i = (e = n).__v).__e, o = [], a = [], e.__P && ((s = me({}, i)).__v = i.__v + 1, G.vnode && G.vnode(s), Ir(e.__P, s, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? Qe(i), !!(32 & i.__u), a), s.__v = i.__v, s.__.__k[s.__i] = s, fl(o, s, a), s.__e != r && hl(s)), Pe.length > t && Pe.sort(Bi));
  vn.__r = 0;
}
function dl(n, t, e, s, i, r, o, a, l, c, d) {
  var h, u, f, g, _, y = s && s.__k || ll, v = t.length;
  for (e.__d = l, Nd(e, t, y), l = e.__d, h = 0; h < v; h++)
    (f = e.__k[h]) != null && (u = f.__i === -1 ? Ns : y[f.__i] || Ns, f.__i = h, Ir(n, f, u, i, r, o, a, l, c, d), g = f.__e, f.ref && u.ref != f.ref && (u.ref && Dr(u.ref, null, f), d.push(f.ref, f.__c || g, f)), _ == null && g != null && (_ = g), 65536 & f.__u || u.__k === f.__k ? l = ul(f, l, n) : typeof f.type == "function" && f.__d !== void 0 ? l = f.__d : g && (l = g.nextSibling), f.__d = void 0, f.__u &= -196609);
  e.__d = l, e.__e = _;
}
function Nd(n, t, e) {
  var s, i, r, o, a, l = t.length, c = e.length, d = c, h = 0;
  for (n.__k = [], s = 0; s < l; s++)
    (i = t[s]) != null && typeof i != "boolean" && typeof i != "function" ? (o = s + h, (i = n.__k[s] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? cn(null, i, null, null, null) : Vn(i) ? cn(We, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? cn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n, i.__b = n.__b + 1, r = null, (a = i.__i = Ed(i, e, o, d)) !== -1 && (d--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a == o - 1 ? h-- : a == o + 1 ? h++ : (a > o ? h-- : h++, i.__u |= 65536))) : i = n.__k[s] = null;
  if (d)
    for (s = 0; s < c; s++)
      (r = e[s]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = Qe(r)), pl(r, r));
}
function ul(n, t, e) {
  var s, i;
  if (typeof n.type == "function") {
    for (s = n.__k, i = 0; s && i < s.length; i++)
      s[i] && (s[i].__ = n, t = ul(s[i], t, e));
    return t;
  }
  n.__e != t && (t && n.type && !e.contains(t) && (t = Qe(n)), e.insertBefore(n.__e, t || null), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function bn(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (Vn(n) ? n.some(function(e) {
    bn(e, t);
  }) : t.push(n)), t;
}
function Ed(n, t, e, s) {
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
function qo(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Td.test(t) ? e : e + "px";
}
function Qs(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || qo(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || qo(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in n || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Ar, n.addEventListener(t, r ? Ui : ji, r)) : n.removeEventListener(t, r ? Ui : ji, r);
    else {
      if (i == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? n.removeAttribute(t) : n.setAttribute(t, t == "popover" && e == 1 ? "" : e));
    }
}
function Yo(n) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + n];
      if (t.t == null)
        t.t = Ar++;
      else if (t.t < e.u)
        return;
      return e(G.event ? G.event(t) : t);
    }
  };
}
function Ir(n, t, e, s, i, r, o, a, l, c) {
  var d, h, u, f, g, _, y, v, b, w, C, S, $, I, E, D, H = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (d = G.__b) && d(t);
  t:
    if (typeof H == "function")
      try {
        if (v = t.props, b = "prototype" in H && H.prototype.render, w = (d = H.contextType) && s[d.__c], C = d ? w ? w.props.value : d.__ : s, e.__c ? y = (h = t.__c = e.__c).__ = h.__E : (b ? t.__c = h = new H(v, C) : (t.__c = h = new j(v, C), h.constructor = H, h.render = Ad), w && w.sub(h), h.props = v, h.state || (h.state = {}), h.context = C, h.__n = s, u = h.__d = !0, h.__h = [], h._sb = []), b && h.__s == null && (h.__s = h.state), b && H.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = me({}, h.__s)), me(h.__s, H.getDerivedStateFromProps(v, h.__s))), f = h.props, g = h.state, h.__v = t, u)
          b && H.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), b && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (b && H.getDerivedStateFromProps == null && v !== f && h.componentWillReceiveProps != null && h.componentWillReceiveProps(v, C), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(v, h.__s, C) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = v, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.some(function(M) {
              M && (M.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(v, h.__s, C), b && h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(f, g, _);
          });
        }
        if (h.context = C, h.props = v, h.__P = n, h.__e = !1, $ = G.__r, I = 0, b) {
          for (h.state = h.__s, h.__d = !1, $ && $(t), d = h.render(h.props, h.state, h.context), E = 0; E < h._sb.length; E++)
            h.__h.push(h._sb[E]);
          h._sb = [];
        } else
          do
            h.__d = !1, $ && $(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++I < 25);
        h.state = h.__s, h.getChildContext != null && (s = me(me({}, s), h.getChildContext())), b && !u && h.getSnapshotBeforeUpdate != null && (_ = h.getSnapshotBeforeUpdate(f, g)), dl(n, Vn(D = d != null && d.type === We && d.key == null ? d.props.children : d) ? D : [D], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), y && (h.__E = h.__ = null);
      } catch (M) {
        if (t.__v = null, l || r != null) {
          for (t.__u |= l ? 160 : 128; a && a.nodeType === 8 && a.nextSibling; )
            a = a.nextSibling;
          r[r.indexOf(a)] = null, t.__e = a;
        } else
          t.__e = e.__e, t.__k = e.__k;
        G.__e(M, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Md(e.__e, t, e, s, i, r, o, l, c);
  (d = G.diffed) && d(t);
}
function fl(n, t, e) {
  t.__d = void 0;
  for (var s = 0; s < e.length; s++)
    Dr(e[s], e[++s], e[++s]);
  G.__c && G.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      G.__e(r, i.__v);
    }
  });
}
function Md(n, t, e, s, i, r, o, a, l) {
  var c, d, h, u, f, g, _, y = e.props, v = t.props, b = t.type;
  if (b === "svg" ? i = "http://www.w3.org/2000/svg" : b === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((f = r[c]) && "setAttribute" in f == !!b && (b ? f.localName === b : f.nodeType === 3)) {
        n = f, r[c] = null;
        break;
      }
  }
  if (n == null) {
    if (b === null)
      return document.createTextNode(v);
    n = document.createElementNS(i, b, v.is && v), a && (G.__m && G.__m(t, r), a = !1), r = null;
  }
  if (b === null)
    y === v || a && n.data === v || (n.data = v);
  else {
    if (r = r && Un.call(n.childNodes), y = e.props || Ns, !a && r != null)
      for (y = {}, c = 0; c < n.attributes.length; c++)
        y[(f = n.attributes[c]).name] = f.value;
    for (c in y)
      if (f = y[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = f;
        else if (!(c in v)) {
          if (c == "value" && "defaultValue" in v || c == "checked" && "defaultChecked" in v)
            continue;
          Qs(n, c, null, f, i);
        }
      }
    for (c in v)
      f = v[c], c == "children" ? u = f : c == "dangerouslySetInnerHTML" ? d = f : c == "value" ? g = f : c == "checked" ? _ = f : a && typeof f != "function" || y[c] === f || Qs(n, c, f, y[c], i);
    if (d)
      a || h && (d.__html === h.__html || d.__html === n.innerHTML) || (n.innerHTML = d.__html), t.__k = [];
    else if (h && (n.innerHTML = ""), dl(n, Vn(u) ? u : [u], t, e, s, b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && Qe(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        cl(r[c]);
    a || (c = "value", b === "progress" && g == null ? n.removeAttribute("value") : g !== void 0 && (g !== n[c] || b === "progress" && !g || b === "option" && g !== y[c]) && Qs(n, c, g, y[c], i), c = "checked", _ !== void 0 && _ !== n[c] && Qs(n, c, _, y[c], i));
  }
  return n;
}
function Dr(n, t, e) {
  try {
    if (typeof n == "function") {
      var s = typeof n.__u == "function";
      s && n.__u(), s && t == null || (n.__u = n(t));
    } else
      n.current = t;
  } catch (i) {
    G.__e(i, e);
  }
}
function pl(n, t, e) {
  var s, i;
  if (G.unmount && G.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Dr(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        G.__e(r, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && pl(s[i], t, e || typeof n.type != "function");
  e || cl(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function Ad(n, t, e) {
  return this.constructor(n, e);
}
function Ge(n, t, e) {
  var s, i, r, o;
  G.__ && G.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ir(t, n = (!s && e || t).__k = Pt(We, null, [n]), i || Ns, Ns, t.namespaceURI, !s && e ? [e] : i ? null : t.firstChild ? Un.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), fl(r, n, o);
}
Un = ll.slice, G = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, ol = 0, gt = function(n) {
  return n != null && n.constructor == null;
}, j.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = me({}, this.state), typeof n == "function" && (n = n(me({}, e), this.props)), n && me(e, n), n != null && this.__v && (t && this._sb.push(t), Go(this));
}, j.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Go(this));
}, j.prototype.render = We, Pe = [], al = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Bi = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, vn.__r = 0, Ar = 0, ji = Yo(!1), Ui = Yo(!0);
function O(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...bn(r), ...bn(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = p.extend(r, i))), n[s] = i);
    });
  }), n;
}
function ml(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
function Id(n, t = !0) {
  const e = p(n), s = e[0], i = "zui-disable-scroll";
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
p.fn.disableScroll = function(n = !0) {
  return this.each((t, e) => {
    Id(e, n);
  });
};
p.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function wi(n, t, e) {
  if (!(e.on || "click").split(" ").includes(t.type))
    return;
  const s = e.selector ? p(t.target).closest(e.selector) : n;
  if (!s.length)
    return;
  const i = (c) => c === "" ? !0 : c, r = (c) => {
    if (typeof c == "string")
      try {
        c = JSON.parse(c);
      } catch {
      }
    return c;
  };
  if (i(e.once)) {
    if (e.onceCalled)
      return;
    n.dataset("once-called", !0);
  }
  if (i(e.prevent) && t.preventDefault(), i(e.stop) && t.stopPropagation(), i(e.self) && t.currentTarget !== t.target)
    return;
  const o = [["$element", n], ["event", t], ["options", e], ["$target", s]], a = (c) => typeof c == "function" ? c(...o) : p.runJS(c, ...o);
  if (e.if !== void 0 && !a(e.if))
    return;
  const l = e.call;
  if (l) {
    let c;
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? $r(window, l) : a(l) : c = l, typeof c == "function") {
      const d = [], h = e.params;
      e.params = d, typeof h == "string" && h.length ? h[0] === "[" ? d.push(...r(h)) : d.push(...h.split(", ").map((u) => (u = u.trim(), u === "$element" ? n : u === "event" ? t : u === "options" ? e : u.startsWith("$element.") || u.startsWith("event.") || u.startsWith("options.") ? a(u) : r(u)))) : Array.isArray(h) ? d.push(...h) : d.push(h), c(...d);
    }
  }
  e.do && a(e.do);
}
function Dd(n) {
  const t = p(this), e = n.type, s = t.attr("zui-on");
  if (s) {
    const [o, a] = s.split("~").map((l) => l.trim());
    o && o.split(" ").includes(e) && wi(t, n, p.extend({
      on: o
    }, a ? a.startsWith("{") ? Ze(a) : { do: a } : Ts(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && wi(t, n, p.extend({
    on: e
  }, i.startsWith("{") ? Ze(i) : { do: i }));
  const r = t.attr("data-on");
  r && r.split(" ").includes(e) && wi(t, n, Ts(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Pd(n) {
  p(document).off(".zui.global").on(n.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${n.map((t) => `[zui-on-${t}]`)},[data-on]`, Dd);
}
p(() => {
  Pd(["click", "change", "inited"]);
});
function Be(n, t) {
  if (typeof n == "function")
    return Be(n(...t || []));
  if (typeof n == "number")
    return [n];
  let e = n.match(/(\d+)(%|px)?/);
  return e ? [parseInt(e[1]), e[2]] : (e = n.match(/(\d+)\/(\d+)/), e ? [100 * parseInt(e[1]) / parseInt(e[2]), "%"] : [NaN]);
}
function tt(n, t) {
  if (n == null)
    return null;
  const [e, s = "px"] = Be(n, t);
  return Number.isNaN(e) ? typeof n == "string" ? n : null : `${e}${s}`;
}
async function Jo(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), Jo(o, t);
  }
  const e = await fetch(n);
  return Jo(e);
}
class Ld {
  constructor(t) {
    this._$target = p(t);
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
const ce = new Ld(document);
p.bus = ce;
p.on = ce.on.bind(ce);
p.one = ce.one.bind(ce);
p.off = ce.off.bind(ce);
p.trigger = ce.trigger.bind(ce);
var Rd = ["Shift", "Meta", "Alt", "Control"], gl = typeof navigator == "object" ? navigator.platform : "", _l = /Mac|iPod|iPhone|iPad/.test(gl), zd = _l ? "Meta" : "Control", Od = gl === "Win32" ? ["Control", "Alt"] : _l ? ["Alt"] : [];
function Ci(n, t) {
  return typeof n.getModifierState == "function" && (n.getModifierState(t) || Od.includes(t) && n.getModifierState("AltGraph"));
}
function Fd(n) {
  return n.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), s = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? zd : i;
    }), s];
  });
}
function yl(n, t) {
  var e;
  t === void 0 && (t = {});
  var s = (e = t.timeout) != null ? e : 1e3, i = Object.keys(n).map(function(a) {
    return [Fd(a), n[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], d = l[1], h = r.get(c) || c;
      (function(u, f) {
        return !(f[1].toUpperCase() !== u.key.toUpperCase() && f[1] !== u.code || f[0].find(function(g) {
          return !Ci(u, g);
        }) || Rd.find(function(g) {
          return !f[0].includes(g) && f[1] !== g && Ci(u, g);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), d(a)) : Ci(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Hd(n, t, e) {
  var s;
  e === void 0 && (e = {});
  var i = (s = e.event) != null ? s : "keydown", r = yl(t, e);
  return n.addEventListener(i, r), function() {
    n.removeEventListener(i, r);
  };
}
function vl(n, t = {}) {
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
function bl(n, t, e) {
  const { timeout: s, event: i = "keydown", scope: r, when: o } = e || {}, a = yl(t, { timeout: s }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return p(n).on(`${i}${l}`, function(d) {
    o && o(d) === !1 || p(d.target).data(c) || a(d);
  }).on(`compositionstart${l}`, (d) => {
    p(d.target).data(c, !0);
  }).on(`compositionend${l}`, (d) => {
    p(d.target).removeData(c);
  });
}
function wl(n, t) {
  return p(n).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const Qp = Hd;
p.fn.hotkeys = function(n, t) {
  return bl(this, n, t);
};
p.fn.unbindHotkeys = function(n) {
  return wl(this, n);
};
p.hotkeys = function(n, t) {
  bl(window, n, t);
};
p.unbindHotkeys = function(n) {
  wl(window, n);
};
function Pr() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Wd(n) {
  (typeof n == "string" || n instanceof Element || n instanceof p) && (n = { target: n });
  const { target: t, onError: e, onSuccess: s, afterExit: i, afterEnter: r } = n, o = p(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), s == null || s.call(a), p(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, p(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const d = Pr();
    let h = d;
    d ? p(d).addClass("is-in-fullscreen") : (h = p(document).find(".is-in-fullscreen")[0] || document, p(h).removeClass("is-in-fullscreen")), p("body").toggleClass("has-in-fullscreen", !!d);
    const u = { event: c, target: h, fullscreenElement: d };
    p(h).trigger(d ? "enterFullscreen" : "exitFullscreen", u).trigger("toggleFullscreen", u);
  }));
}
async function Cl(n) {
  const t = Pr();
  return n === !1 && !!t === n ? n : t ? (document.exitFullscreen(), !1) : (await Wd(n), !0);
}
p.fn.fullscreen = function(n) {
  return Cl({
    target: this,
    ...n
  });
};
p.getFullscreenElement = Pr;
p.toggleFullscreen = Cl;
function $e(n) {
  return !n || n.parentNode === document ? !1 : n.parentNode ? $e(n.parentNode) : !0;
}
p.isDetached = $e;
p.fn.isDetached = function() {
  const n = this[0];
  return !n || $e(n);
};
const je = class Sl {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    var g;
    this._inited = !1, this._autoDestory = 0, this._destroyed = !1;
    const { KEY: s, DATA_KEY: i, MULTI_INSTANCE: r, NAME: o, ATTR_KEY: a, ALL: l, TYPED_ALL: c } = this.constructor;
    if (!o)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const d = p(t);
    if (d.data(s) && !r)
      throw new Error(`[ZUI] The component "${o}" has been initialized on element.`);
    const h = d[0];
    if (!h)
      throw new Error(`[ZUI] Invalid selector "${t}" for component "${o}", can not find the element matched.`);
    const u = wt();
    this._gid = u, this._element = h, this.resetOptions(e), this._key = this.options.key ?? `__${u}`;
    let f = l.get(h);
    if (f ? f.add(this) : (f = /* @__PURE__ */ new Set([this]), l.set(h, f)), c.has(o) ? c.get(o).add(this) : c.set(o, /* @__PURE__ */ new Set([this])), d.data(s, this).attr(a, "").attr(i, `${u}`).attr("z-use", [...new Set([...f].map((_) => _.constructor.NAME))].join(",")), r) {
      const _ = `${s}:ALL`;
      let y = d.data(_);
      y || (y = /* @__PURE__ */ new Map(), d.data(_, y)), y.set(this._key, this);
    }
    this.init(), (g = this.options.$onCreate) == null || g.call(this), requestAnimationFrame(async () => {
      var y;
      const { $fetcher: _ } = this.options;
      if (_) {
        const v = await ss(_, [], { dataType: "js" });
        if (this.destroyed)
          return;
        v && this.setOptions(v);
      }
      this._inited = !0, await this.afterInit(), this.emit("inited", this.options), (y = this.options.$onInited) == null || y.call(this);
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
  /**
   * @deprecated Use ATTR_KEY instead.
   */
  static get DATA_KEY() {
    return `data-zui-${this.NAME}`;
  }
  /**
   * Component attribute key, like "z-use-menu"
   */
  static get ATTR_KEY() {
    return `z-use-${this.NAME}`;
  }
  /**
   * The component default selector.
   */
  static get SELECTOR() {
    return `[${this.DATA_KEY}]`;
  }
  /**
   * Get the component initialized flag.
   */
  get inited() {
    return this._inited;
  }
  /**
   * Get the component destroyed flag.
   */
  get destroyed() {
    return this._destroyed;
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
    return p(this.element);
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
  render(t, e) {
    this.setOptions(t, e);
  }
  /**
   * Destroy the component.
   */
  destroy() {
    var f;
    const { KEY: t, DATA_KEY: e, ALL: s, TYPED_ALL: i, NAME: r, MULTI_INSTANCE: o, ATTR_KEY: a } = this.constructor, { $element: l, element: c } = this;
    if (this.emit("destroyed"), this._destroyed = !0, l.off(this.namespace).removeData(t).removeAttr(a).removeAttr(e), o) {
      const g = this.$element.data(`${t}:ALL`);
      if (g)
        if (g.delete(this._key), g.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const _ = g.values().next().value;
          l.data(t, _).attr(e, String(_ == null ? void 0 : _.gid));
        }
    }
    const d = s.get(c);
    d && (d.delete(this), d.size === 0 && s.delete(c));
    const h = i.get(r);
    h && (h.delete(this), h.size === 0 && i.delete(r));
    const u = s.get(c);
    u != null && u.size ? l.attr("z-use", [...new Set([...u].map((g) => g.constructor.NAME))].join(",")) : l.removeAttr("z-use"), (f = this.options.$onDestroy) == null || f.call(this);
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, $e(this.element) && this.destroy();
    }, t);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t, e) {
    if (e) {
      const s = {
        ...this.constructor.DEFAULT,
        ...(t == null ? void 0 : t.$optionsFromDataset) !== !1 ? this.$element.dataset() : {},
        ...t
      }, { $options: i } = s;
      if (i) {
        const r = typeof i == "function" ? i.call(this, this.element, s) : i;
        r && p.extend(s, r), delete s.$options;
      }
      this._options = s;
    } else
      t && p.extend(this._options, t);
    return this._options;
  }
  resetOptions(t) {
    return this.setOptions(t, !0);
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const s = p.Event(t);
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
    return J(i, t, e, s, this.options.lang, this.constructor.NAME) ?? J(i, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = p(t);
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
  static getAll(t, e) {
    var l;
    const { SELECTOR: s, ALL: i, TYPED_ALL: r } = this, o = [], a = (c) => {
      c instanceof this && (!e || e(c) !== !1) && o.push(c);
    };
    return t ? p(t).find(s).each((c, d) => {
      var h;
      (h = i.get(d)) == null || h.forEach(a);
    }) : this !== Sl ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
      c.forEach(a);
    }), o.sort((c, d) => c.gid - d.gid);
  }
  /**
   * Query the component instance.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        The component instance.
   */
  static query(t, e, s) {
    return t === void 0 ? this.getAll(void 0, s).pop() : this.get(p(t).closest(this.SELECTOR), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    p.fn[e] && (e = `zui${this.NAME}`);
    const s = this;
    p.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, d) => {
          let h = s.get(d);
          if (h)
            o && h.render(o);
          else {
            if (a)
              return;
            h = new s(d, o);
          }
          if (a) {
            let u = h[a], f = h;
            u === void 0 && (f = h.$, u = f[a]), typeof u == "function" ? l = u.call(f, ...r) : l = u;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
  static register(t, e) {
    var i, r;
    t = t || this, e = (e ?? t.NAME).toLowerCase(), this.map.set(e, t);
    const s = (r = (i = t.toggle) == null ? void 0 : i.name) == null ? void 0 : r.toLowerCase();
    s && s !== e && this.toggleMap.set(s, t);
  }
};
je.DEFAULT = {};
je.MULTI_INSTANCE = !1;
je.ALL = /* @__PURE__ */ new Map();
je.TYPED_ALL = /* @__PURE__ */ new Map();
je.map = /* @__PURE__ */ new Map();
je.toggleMap = /* @__PURE__ */ new Map();
let ot = je;
function Kn(n) {
  return ot.map.get(n.toLowerCase());
}
function kl(n, t, e = {}) {
  let s = Kn(n);
  if (s || (s = xl(n)), !s)
    return null;
  const { $update: i, ...r } = e;
  if (!s.MULTI_INSTANCE) {
    const o = s.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new s(t, r);
}
function Bd(n, t, e = {}) {
  requestAnimationFrame(() => kl(n, t, e));
}
function jd(n, t) {
  ot.register(n, t);
}
function xl(n) {
  const { zui: t } = window;
  if (t) {
    n = n == null ? void 0 : n.toLowerCase();
    for (const e in t) {
      const s = e.toLowerCase() === n;
      if (n && !s)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (ot.map.has(e.toLowerCase()) || jd(i), s))
        return i;
    }
  }
}
function tm(n) {
  var t;
  n ? (t = Kn(n)) == null || t.defineFn() : window._zuiDefined || (xl(), ot.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function Ud(n, t = {}) {
  const e = p(n);
  let s = e.attr("zui-create");
  const { update: i, onCreate: r } = t, o = (a, l) => {
    if (l = {
      $update: i,
      $optionsFromDataset: !1,
      ...l
    }, r) {
      const d = r(a, l);
      if (d === !1)
        return;
      d && (l = d);
    }
    const c = l.$lib;
    if (c) {
      delete l.$lib, p.getLib(c).then(() => kl(a, n, l));
      return;
    }
    Bd(a, n, l);
  };
  if (typeof s == "string") {
    s = s.trim();
    const a = s.length ? s.split(",").map((d) => d.trim()) : [], l = Ts(n, { prefix: "zui-create-", evalValue: !0 }), c = Object.keys(l);
    if (!c.length && a.length === 1)
      o(a[0], e.dataset());
    else {
      const d = /* @__PURE__ */ new Set();
      [...a, ...c].forEach((h) => {
        if (d.has(h))
          return;
        const u = l[h];
        o(h, u), delete l[h], d.add(h);
      });
    }
  } else {
    const a = e.dataset(), l = a == null ? void 0 : a.zui;
    if (!l)
      return;
    console.warn("[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.", { element: n, options: t }), delete a.zui, o(l, a);
  }
}
function Vd() {
  p(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(n) {
    const t = p(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const s = ot.toggleMap.get(e) || Kn(e), i = s == null ? void 0 : s.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = n.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(s, this, l, n) || o && t.is(o))
      return;
    const { onGet: c, onCreate: d, setOptions: h = !0, getOptions: u, prevent: f = !0, handler: g, onToggle: _, convertHref: y } = i;
    let v = t.dataset();
    const b = t.attr(`zui-toggle-${e}`);
    if (b && (v = p.extend(v, Ze(b))), y && t.is("a")) {
      const C = t.attr("href");
      if (C) {
        const S = y === !0 ? { selector: "target", url: "url" } : y;
        "#.".includes(C[0]) ? S.selector && v[S.selector] === void 0 && (v[S.selector] = C) : S.url && v[S.url] === void 0 && (v[S.url] = C);
      }
    }
    if (u && (v = u.call(s, this, v, n)), g) {
      g.call(s, this, v, l, n), f && n.preventDefault();
      return;
    }
    let w = c ? c.call(s, this) : s.get(this);
    if (w)
      h && w.setOptions(v);
    else {
      const C = d ? d.call(s, this, n, v) : new s(this, v);
      if (!C)
        return;
      w = C;
    }
    if (_) {
      if (_.call(s, w, this, n) === !1)
        return;
    } else {
      const { shown: C, show: S, hide: $, toggle: I } = w;
      let E;
      if (I ? E = I : S && $ ? C ? E = $ : E = S : S && (E = S), E)
        E.call(w);
      else
        return;
    }
    f && n.preventDefault();
  });
}
function Kd(n, t) {
  const e = Mr(n), s = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && s.push(e[i]);
  }), s;
}
let tn = 0;
function $l(n = 100) {
  if (tn && clearTimeout(tn), n) {
    tn = window.setTimeout(() => $l(0), n);
    return;
  }
  tn = 0, ot.ALL.forEach((t) => {
    t.forEach((e) => e.autoDestroy());
  });
}
function Gd() {
  if (!document.body || Mr(document.body, "_autoDestoryMob"))
    return;
  const n = new MutationObserver((t) => {
    let e = !1;
    for (const s of t)
      if (s.removedNodes.length) {
        e = !0;
        break;
      }
    e && $l();
  });
  n.observe(document.body, { childList: !0, subtree: !0 }), Er(document.body, "_autoDestoryMob", n);
}
function qd(n, t) {
  const e = p(n);
  e.find("[zui-create],[data-zui]").each(function() {
    var s;
    ((s = t == null ? void 0 : t.beforeCreate) == null ? void 0 : s.call(t, this)) !== !1 && Ud(this, t);
  }), e.find("[zui-init]").each(function() {
    this.hasAttribute("z-zui-inited") || (this.setAttribute("z-zui-inited", ""), p.runJS(this.getAttribute("zui-init"), ["$element", p(this)]));
  }), e.find(".hide-before-init").removeClass("invisible hidden opacity-0"), e.find(".scroll-into-view").scrollIntoView(), e.find('[data-on="inited"],[zui-on-inited]').each((s, i) => {
    const r = p(i);
    r.zui() || r.trigger("inited");
  }), t != null && t.runJS && e.runJS();
}
p.fn.zuiInit = function(n) {
  return qd(this, n), this;
};
p.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = {};
    let r;
    return Kd(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), n === !0 ? i : r;
  }
  const s = Kn(n);
  return s ? t === !0 ? s.getAll(e) : s.query(e, t) : p(e).data(`zui.${n}`);
};
p.fn.zuiCall = function(n, t = []) {
  return this.each(function() {
    const e = n.split("."), s = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = p(this).zui(s), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
p(() => {
  p("body").zuiInit({ update: !0 }), Vd(), Gd();
});
class Tl extends ot {
  get $targets() {
    const { $element: t } = this, { targets: e } = this.options;
    return e ? t.find(e) : t;
  }
  _handleScroll(t, e, s) {
    const { offset: i = 1 } = this.options, r = this.$targets, o = t.getBoundingClientRect(), { scrollTop: a, scrollLeft: l } = t;
    r.each((c, d) => {
      const h = d.getBoundingClientRect(), u = e === "top" && a > 0 && h.top <= o.top + i || e === "bottom" && h.bottom >= o.bottom - i || e === "left" && l > 0 && h.left <= o.left + i || e === "right" && l < t.scrollWidth - t.clientWidth;
      d.classList.toggle(s, u);
    });
  }
  init() {
    const { offset: t = 1, side: e = "top", zIndex: s, pinnedClass: i = "is-pinned", scrollContainer: r } = this.options, { $element: o, $targets: a } = this;
    if (a.css({ position: "sticky", zIndex: s, [e]: 0 }), r) {
      const l = o.closest(r)[0] || o.find(r)[0];
      if (l) {
        const c = () => {
          this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
            this._raf = 0, this._handleScroll(l, e, i);
          });
        };
        this._scrollListener = c, l.addEventListener("scroll", c);
      }
      this._container = l, requestAnimationFrame(() => {
        this._handleScroll(l, e, i);
      });
    } else
      this._ob = new IntersectionObserver(
        (l) => {
          l.forEach((c) => {
            c.target.classList.toggle(i, c.intersectionRatio < t);
          });
        },
        { threshold: [1] }
      ), a.css("side", -t).each((l, c) => this._ob.observe(c));
  }
  destroy() {
    var t;
    (t = this._ob) == null || t.disconnect(), this._container && (this._container.removeEventListener("scroll", this._scrollListener), this._raf && cancelAnimationFrame(this._raf));
  }
}
Tl.NAME = "Sticky";
const Es = 24 * 60 * 60 * 1e3, Q = (n) => n === void 0 ? /* @__PURE__ */ new Date() : (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n), Yd = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(Q(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, Le = (n, t = /* @__PURE__ */ new Date()) => Q(n).toDateString() === Q(t).toDateString(), Vi = (n, t = /* @__PURE__ */ new Date()) => Q(n).getFullYear() === Q(t).getFullYear(), Nl = (n, t = /* @__PURE__ */ new Date()) => (n = Q(n), t = Q(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), em = (n, t = /* @__PURE__ */ new Date()) => {
  n = Q(n), t = Q(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, sm = (n, t) => Le(Q(t), n), nm = (n, t) => Le(Q(t).getTime() - Es, n), im = (n, t) => Le(Q(t).getTime() + Es, n), El = (n) => n != null && !isNaN(Q(n).getTime()), jt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = Q(n), !El(n))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Vi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, rm = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = jt(n, Vi(n) ? s.month : s.full);
  if (Le(n, t))
    return i;
  const r = jt(t, Vi(n, t) ? Nl(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
function Ml(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function Ki(n) {
  if (!n)
    return;
  if (typeof n == "object")
    return n;
  if (n = n.replace(/^#/, ""), !n.length)
    return;
  n.startsWith("/") || (n = `/${n}`);
  const t = new URL(window.location.origin + n), [, e = "", ...s] = t.pathname.split("/");
  let i = e.trim();
  if (!i.length)
    return;
  let r = "";
  return i.includes("~") && ([r, i] = i.split("~")), {
    name: i,
    scope: r,
    options: Object.fromEntries([...t.searchParams.entries()].map(([o, a]) => {
      try {
        a.includes("%") && (a = decodeURIComponent(a)), a = JSON.parse(a);
      } catch {
      }
      return [o, a];
    })),
    params: s.map((o) => {
      if (o !== "undefined") {
        if (o === "null")
          return null;
        try {
          return o.includes("%") && (o = decodeURIComponent(o)), JSON.parse(o);
        } catch {
          return o;
        }
      }
    })
  };
}
function Jd(n) {
  if (Array.isArray(n))
    return { commands: n.map(Ki).filter(Boolean) };
  if (typeof n == "object")
    return n;
  n = n.replace(/^#!?/, "");
  const t = n.includes(">"), e = n.split(t ? ">" : "|").map(Ki);
  return {
    async: t,
    commands: e.filter(Boolean)
  };
}
function Xo(n, t, e) {
  if (typeof n == "string" && (n = Ki(n)), !n)
    return;
  const { execute: s, event: i, scope: r } = t;
  if (!(r && n.scope && n.scope !== r))
    return s({
      name: n.name,
      options: {
        ...t.options,
        ...n.options
      },
      event: i,
      scope: n.scope,
      prevResult: e
    }, n.params);
}
async function Xd(n, t) {
  const { async: e, commands: s } = Jd(n);
  if (!s.length)
    return [];
  const { signal: i } = t;
  if (e) {
    const o = [];
    let a;
    for (const l of s) {
      if (!(i != null && i.aborted))
        break;
      a = await Xo(l, t, a), i != null && i.aborted && (a = void 0), o.push(a);
    }
    return o;
  }
  return await Promise.all(s.map((o) => {
    if (!(i != null && i.aborted))
      return Xo(o, t);
  }));
}
const qe = "zui.commands", ts = "z-commands", Si = "zui-commands-proxy", Al = "zui-command", wn = {};
function om(n, t) {
  typeof n == "string" && t ? wn[n] = t : typeof n == "object" && Object.assign(wn, n);
}
function Lr(n, t) {
  typeof t == "string" ? t = { scope: t } : typeof t == "function" && (t = { onCommand: t });
  const { scope: e = "", events: s = "click" } = t ?? {}, i = p(n), r = (i.attr(ts) || "").split(",");
  e && !r.includes(e) && r.push(e), i.attr(ts, r.join(",")).data(qe, {
    [e]: {
      ...t,
      scope: e,
      events: s,
      gid: wt()
    },
    ...i.data(qe)
  });
}
function Rr(n, t = !0) {
  const e = p(n);
  if (t === !0)
    e.removeAttr(ts), e.removeData(qe);
  else if (t.length) {
    const s = e.data(qe) || {};
    t.split(",").forEach((r) => {
      delete s[r];
    });
    const i = Object.keys(s);
    i.length ? e.attr(ts, i.join(",")).data(qe, Lr) : Rr(e, !0);
  }
}
function Il(n, t) {
  let e = n.closest(`[${ts}],[${Si}]`).first();
  if (e.attr(Si) !== void 0 && (e = p(e.data("zui.commandProxy") || e.attr(Si)).closest(`[${ts}]`)), !e.length)
    return;
  const s = e.data(qe) || {}, i = Object.values(s).sort((o, a) => a.gid - o.gid);
  let r;
  return t != null && t.length ? (r = i.find((o) => o.scope === t), r || (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  })), r) : (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  }), r || (r = i.find((o) => !o.scoped)), r ? r.element = e[0] : r = Il(n.parent(), t), r);
}
function Zd(n) {
  if (!n.currentTarget)
    return;
  const t = p(n.currentTarget);
  if (t.closest(".disabled,[disabled]").length)
    return;
  const e = t.attr(Al) || (t.is('a[href^="#!"]') ? t.attr("href") : "");
  if (!e)
    return;
  const s = new AbortController(), i = () => s.abort();
  Xd(e, {
    signal: s.signal,
    execute: (r, o) => {
      const { scope: a, name: l } = r, c = {
        ...r,
        abort: i
      };
      let d;
      const h = Il(t, a);
      if (h) {
        c.element = h.element;
        const f = (h.commands ? h.commands[`${a}~${l}`] || h.commands[l] : null) || h.onCommand;
        if (f && (d = f(c, o), n.commandHandled))
          return d;
      }
      const u = [c, o];
      if (t.trigger("command", u).trigger(`command:${a ? `${l}.${a}` : l}`, u), a && t.trigger(`command:.${a}`, u), n.commandHandled)
        return d;
      if (a === "event") {
        l === "stop" ? n.stopPropagation() : l === "prevent" ? n.preventDefault() : Ee(n, l, o);
        return;
      }
      return a === "window" ? Ee(window, l, o) : a === "zui" ? Ee(window.zui, l, o) : a === "target" ? Ee(t[0], l, o) : a === "$target" ? Ee(t, l, o) : a === "$" ? Ee(p, l, o) : a === "" && wn[l] !== void 0 ? wn[l](c, o) : d;
    },
    event: n
  });
}
p.fn.command = function(n, t) {
  return this.on(`command:${n}`, t);
};
p.fn.offCommand = function(n, t) {
  return this.off(`command:${n}`, t);
};
p.fn.commands = function(n) {
  return this.each((t, e) => Lr(e, n)), this;
};
p.fn.unbindCommands = function(n) {
  return this.each((t, e) => Rr(e, n)), this;
};
p(() => {
  p(document).on("click.zui.command", `[${Al}],a[href^="#!"]`, Zd);
});
function Gi(n, t, e = !1) {
  var i;
  const s = p(n);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${wt()}`;
      s.append(`<script id="${r}">${t}<\/script>`), e && s.find(`#${r}`).remove();
    }
    return;
  }
  if (s.is("script")) {
    const r = (i = s[0]) == null ? void 0 : i.textContent;
    r && Gi(s.parent(), r);
    return;
  }
  s.find("script").each((r, o) => {
    Gi(s, o.textContent), o.remove();
  });
}
p.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
p.fn.runJS = function(n) {
  return this.each((t, e) => {
    Gi(e, n);
  });
};
function am(n) {
  return new Promise((t) => {
    typeof n == "string" && (n = { accept: n });
    const e = document.createElement("input");
    e.type = "file", e.accept = (n == null ? void 0 : n.accept) || "*/*", e.multiple = (n == null ? void 0 : n.multiple) || !1, e.onchange = () => {
      e.files ? t(e.multiple ? e.files : e.files[0]) : t(null), e.remove();
    }, e.click();
  });
}
function lm(n) {
  return new Promise((t, e) => {
    const s = new FileReader();
    s.onload = () => {
      t(s.result);
    }, s.onerror = (i) => {
      e(i);
    }, s.readAsText(n);
  });
}
function Zo(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function Qd(n, t) {
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
class zr {
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
      success: u,
      error: f,
      complete: g,
      ..._
    } = this.setting;
    e && (_.method = e);
    let y = s;
    y && (i && (y = Sd(y)), _.body = y), o && (_.mode = "cors");
    const v = _.headers || {};
    Zo(v, "X-Requested-With", "XMLHttpRequest"), r && Zo(v, "Content-Type", r), _.headers = v, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    });
    const b = [...this.constructor.globalBeforeSends, h];
    for (const w of b) {
      if (!w)
        continue;
      const C = w.call(this, _);
      if (C === !1)
        return;
      C && Object.assign(_, C);
    }
    u && this.success(u), f && this.fail(f), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((s) => {
      s.call(this, ...e);
    });
  }
  async send() {
    var d;
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
        const u = (d = a.headers.get("Content-Disposition")) == null ? void 0 : d.startsWith("attachment"), f = u ? "blob" : e || Qd(a.headers.get("Content-Type"), s);
        u || f === "blob" || f === "file" ? c = await a.blob() : f === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : f === "js" ? (c = await a.text(), c = kd(c)) : c = await a.text(), this.data = c;
        const g = (i == null ? void 0 : i(c, f)) ?? c;
        this._emit("success", g, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      this.data === void 0 && c !== void 0 && (this.data = c), l = h;
      let u = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : u = !0), this.error = l, u || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
zr.globalBeforeSends = [];
p.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : p.extend(t, n);
  const e = new zr(t);
  return e.send(), e;
};
p.getJSON = (n, t, e) => (typeof t == "function" && (e = t, t = void 0), p.ajax({
  url: n,
  data: t,
  success: e,
  dataType: "json"
}));
p.get = (n, t, e, s, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, s = void 0) : s = e, p.ajax({
    method: i,
    url: n,
    data: o,
    success: r,
    dataType: s
  });
};
p.post = (n, t, e, s) => p.get(n, t, e, s, "POST");
p.fn.load = function(n, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [s, i] = n.split(" ");
  return p.get(s, t, (r, o, a) => {
    i && (r = p(r).find(i).html()), p(this).html(r).zuiInit(), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function ss(n, t = [], e, s, i) {
  const r = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    r.url = n;
  else if (typeof n == "object")
    p.extend(r, n);
  else if (typeof n == "function") {
    const l = n.call(s, ...t);
    return l instanceof Promise ? await l : l;
  }
  e && p.extend(r, typeof e == "function" ? e(r) : e), r.url && (r.url = X(r.url, ...t));
  const o = new zr(r);
  i == null || i(o);
  const [a] = await o.send();
  return a;
}
function Qo(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
p.fetch = ss;
function Bs(n, t = {}) {
  const e = p(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!s)
    if (t.container)
      s = p(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: g, innerWidth: _ } = window, { clientHeight: y, clientWidth: v } = document.documentElement;
      s = { left: 0, top: 0, width: _ || v, height: g || y };
    }
  const { left: l, top: c, width: d, height: h } = s;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= d + l && r + a <= h + c;
  const u = i <= l + d && i + o >= l;
  return r <= c + h && r + a >= c && u;
}
p.fn.isVisible = function(n) {
  return Bs(this, n);
};
function tu(n, t = "both") {
  return (t === "vert" || t === "both") && n.clientHeight < n.scrollHeight || (t === "horz" || t === "both") && n.clientWidth < n.scrollWidth;
}
function Dl(n, t) {
  const e = p(n), { ifNeeded: s = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = p(a).closest(i);
      if (!l.length || !tu(l[0]))
        return;
    }
    if (s) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (Bs(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
p.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    Dl(e, n);
  });
};
p.setLibRoot = function(n, t) {
  p.libRoot = n, t && (p.libVersion = t);
};
p.registerLib = function(n, t) {
  p.libMap || (p.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), p.libMap[n] = t;
};
p.libVersion = 1749201864197 .toString(36);
function Pl(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i, version: r } = n;
    if (p(i ? `#${i}` : `link[href^="${s}"]`).length) {
      t();
      return;
    }
    const a = document.createElement("link");
    a.onload = () => {
      t();
    }, a.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${s}`));
    }, a.rel = "stylesheet", a.href = `${s}${r ? `${s.includes("?") ? "&" : "?"}v=${r}` : ""}`, i && (a.id = i), p("head").append(a);
  });
}
function Ll(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i, version: r } = n, o = p(i ? `#${i}` : `script[src^="${s}"]`);
    if (o.length) {
      if (o.dataset("loaded"))
        t();
      else {
        const f = o.data("loadCalls") || [];
        f.push(t), o.data("loadCalls", f);
      }
      return;
    }
    const { async: a = !0, defer: l = !1, noModule: c = !1, type: d, integrity: h } = n, u = document.createElement("script");
    u.async = a, u.defer = l, u.noModule = c, d && (u.type = d), h && (u.integrity = h), u.onload = () => {
      t(), (p(u).dataset("loaded", !0).data("loadCalls") || []).forEach((g) => g()), p(u).removeData("loadCalls");
    }, u.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${s}`));
    }, p("head").append(u), u.src = `${s}${r ? `${s.includes("?") ? "&" : "?"}v=${r}` : ""}`;
  });
}
function Rl(n) {
  return new Promise((t) => {
    typeof n == "string" && (n = { type: "module", src: n });
    const { src: e, imports: s, srcList: i = [], id: r } = n;
    e && i.unshift({ src: e, imports: s });
    const o = i.map((v) => v.src).join(","), a = p(r ? `#${r}` : `script[data-src-list="${o}"]`);
    if (a.length) {
      const v = a.data("module");
      if (v)
        t(v);
      else {
        const b = a.data("resolves") || [];
        b.push(t), a.data("resolves", b);
      }
      return;
    }
    const { async: l = !0, defer: c = !1, integrity: d, globalVar: h, resolve: u } = n, f = document.createElement("script"), g = `zui-module-resolve-${p.guid++}`, _ = p(f);
    Object.assign(window, { [g]: (v) => {
      (_.data("module", v).data("resolves") || []).forEach((w) => w(v)), _.removeData("resolves"), u == null || u(v), t(v), delete window[g];
    } }), f.async = l, f.defer = c, f.type = "module", _.attr("data-src-list", o).attr("data-resolve-id", g);
    const y = [];
    f.text = [
      ...i.map(({ src: v, imports: b }) => {
        if (s) {
          if (typeof b == "string")
            return y.push(b), `import * as ${b} from '${v}';`;
          if (b)
            return y.push(...Object.values(b)), `import {${Object.entries(b).map(([w, C]) => `${w} as ${C}`).join(",")}} from '${v}';`;
        }
        return `import '${v}';`;
      }),
      `const zuiImportResult = {${y.map((v) => `${v}: ${v},`)}};`,
      h ? `Object.assign(window, ${h === !0 ? "zuiImportResult" : `{${h}: zuiImportResult}`});` : "",
      `if(window['${g}']) window['${g}'](zuiImportResult);`
    ].join(`
`), d && (f.integrity = d), p("head").append(f);
  });
}
p.getLib = async function(n, t, e) {
  var _;
  typeof n == "string" && (n = ((_ = p.libMap) == null ? void 0 : _[n]) || { src: n });
  let s = Array.isArray(n) ? { src: n } : p.extend({}, n);
  typeof t == "function" ? s.success = t : t && p.extend(s, t), e && (s.success = e);
  let { src: i } = s;
  const { name: r, success: o } = s, a = p.libMap && r ? p.libMap[r] : null;
  if (a && (s = p.extend({}, a, s), i = a.src || s.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = s;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r;
  let d;
  const h = () => c ? window[c] || d : void 0;
  typeof l == "string" && (l = () => !!h());
  const u = () => (o == null || o(), h());
  if (typeof l == "function" && await l())
    return u();
  const { root: f = p.libRoot, version: g = p.libVersion } = s;
  for (let y of i) {
    typeof y == "string" && (y = { src: y });
    let { src: v } = y;
    f && !/https?:\/\//.test(v) && (v = `${f}${f.endsWith("/") || v.startsWith("/") ? "" : "/"}${v}`);
    const b = {
      ...s,
      ...y,
      version: g,
      src: v
    };
    if (y.type === "css" || !y.type && v.endsWith(".css")) {
      await Pl(b);
      continue;
    }
    if (b.type === "module") {
      d = await Rl(b);
      continue;
    }
    await Ll(b);
  }
  return u();
};
p.getScript = p.getLib;
function zl(n, t) {
  const e = p(n), s = new ResizeObserver(t);
  return e.each((i, r) => {
    s.observe(r);
  }), s;
}
p.fn.resize = function(n) {
  return zl(this, n);
};
const cm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: $e,
  isVisible: Bs,
  listenResize: zl,
  loadCSS: Pl,
  loadJS: Ll,
  loadModule: Rl,
  scrollIntoView: Dl
}, Symbol.toStringTag, { value: "Module" }));
var qi, $t, ki, ta, ea = 0, Ol = [], it = G, sa = it.__b, na = it.__r, ia = it.diffed, ra = it.__c, oa = it.unmount, aa = it.__;
function eu(n, t) {
  it.__h && it.__h($t, n, ea || t), ea = 0;
  var e = $t.__H || ($t.__H = { __: [], __h: [] });
  return n >= e.__.length && e.__.push({}), e.__[n];
}
function Fl(n, t) {
  var e = eu(qi++, 7);
  return iu(e.__H, t) && (e.__ = n(), e.__H = t, e.__h = n), e.__;
}
function su() {
  for (var n; n = Ol.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(hn), n.__H.__h.forEach(Yi), n.__H.__h = [];
      } catch (t) {
        n.__H.__h = [], it.__e(t, n.__v);
      }
}
it.__b = function(n) {
  $t = null, sa && sa(n);
}, it.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), aa && aa(n, t);
}, it.__r = function(n) {
  na && na(n), qi = 0;
  var t = ($t = n.__c).__H;
  t && (ki === $t ? (t.__h = [], $t.__h = [], t.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.i = e.__N = void 0;
  })) : (t.__h.forEach(hn), t.__h.forEach(Yi), t.__h = [], qi = 0)), ki = $t;
}, it.diffed = function(n) {
  ia && ia(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (Ol.push(t) !== 1 && ta === it.requestAnimationFrame || ((ta = it.requestAnimationFrame) || nu)(su)), t.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.i = void 0;
  })), ki = $t = null;
}, it.__c = function(n, t) {
  t.some(function(e) {
    try {
      e.__h.forEach(hn), e.__h = e.__h.filter(function(s) {
        return !s.__ || Yi(s);
      });
    } catch (s) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], it.__e(s, e.__v);
    }
  }), ra && ra(n, t);
}, it.unmount = function(n) {
  oa && oa(n);
  var t, e = n.__c;
  e && e.__H && (e.__H.__.forEach(function(s) {
    try {
      hn(s);
    } catch (i) {
      t = i;
    }
  }), e.__H = void 0, t && it.__e(t, e.__v));
};
var la = typeof requestAnimationFrame == "function";
function nu(n) {
  var t, e = function() {
    clearTimeout(s), la && cancelAnimationFrame(t), setTimeout(n);
  }, s = setTimeout(e, 100);
  la && (t = requestAnimationFrame(e));
}
function hn(n) {
  var t = $t, e = n.__c;
  typeof e == "function" && (n.__c = void 0, e()), $t = t;
}
function Yi(n) {
  var t = $t;
  n.__c = n.__(), $t = t;
}
function iu(n, t) {
  return !n || n.length !== t.length || t.some(function(e, s) {
    return e !== n[s];
  });
}
var ru = Symbol.for("preact-signals");
function Gn() {
  if (ge > 1)
    ge--;
  else {
    for (var n, t = !1; Ss !== void 0; ) {
      var e = Ss;
      for (Ss = void 0, Ji++; e !== void 0; ) {
        var s = e.o;
        if (e.o = void 0, e.f &= -3, !(8 & e.f) && Wl(e))
          try {
            e.c();
          } catch (i) {
            t || (n = i, t = !0);
          }
        e = s;
      }
    }
    if (Ji = 0, ge--, t)
      throw n;
  }
}
function ou(n) {
  if (ge > 0)
    return n();
  ge++;
  try {
    return n();
  } finally {
    Gn();
  }
}
var K = void 0;
function hm(n) {
  var t = K;
  K = void 0;
  try {
    return n();
  } finally {
    K = t;
  }
}
var Ss = void 0, ge = 0, Ji = 0, Cn = 0;
function Hl(n) {
  if (K !== void 0) {
    var t = n.n;
    if (t === void 0 || t.t !== K)
      return t = { i: 0, S: n, p: K.s, n: void 0, t: K, e: void 0, x: void 0, r: t }, K.s !== void 0 && (K.s.n = t), K.s = t, n.n = t, 32 & K.f && n.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = K.s, t.n = void 0, K.s.n = t, K.s = t), t;
  }
}
function ft(n) {
  this.v = n, this.i = 0, this.n = void 0, this.t = void 0;
}
ft.prototype.brand = ru;
ft.prototype.h = function() {
  return !0;
};
ft.prototype.S = function(n) {
  this.t !== n && n.e === void 0 && (n.x = this.t, this.t !== void 0 && (this.t.e = n), this.t = n);
};
ft.prototype.U = function(n) {
  if (this.t !== void 0) {
    var t = n.e, e = n.x;
    t !== void 0 && (t.x = e, n.e = void 0), e !== void 0 && (e.e = t, n.x = void 0), n === this.t && (this.t = e);
  }
};
ft.prototype.subscribe = function(n) {
  var t = this;
  return qn(function() {
    var e = t.value, s = K;
    K = void 0;
    try {
      n(e);
    } finally {
      K = s;
    }
  });
};
ft.prototype.valueOf = function() {
  return this.value;
};
ft.prototype.toString = function() {
  return this.value + "";
};
ft.prototype.toJSON = function() {
  return this.value;
};
ft.prototype.peek = function() {
  var n = K;
  K = void 0;
  try {
    return this.value;
  } finally {
    K = n;
  }
};
Object.defineProperty(ft.prototype, "value", { get: function() {
  var n = Hl(this);
  return n !== void 0 && (n.i = this.i), this.v;
}, set: function(n) {
  if (n !== this.v) {
    if (Ji > 100)
      throw new Error("Cycle detected");
    this.v = n, this.i++, Cn++, ge++;
    try {
      for (var t = this.t; t !== void 0; t = t.x)
        t.t.N();
    } finally {
      Gn();
    }
  }
} });
function js(n) {
  return new ft(n);
}
function Wl(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
      return !0;
  return !1;
}
function Bl(n) {
  for (var t = n.s; t !== void 0; t = t.n) {
    var e = t.S.n;
    if (e !== void 0 && (t.r = e), t.S.n = t, t.i = -1, t.n === void 0) {
      n.s = t;
      break;
    }
  }
}
function jl(n) {
  for (var t = n.s, e = void 0; t !== void 0; ) {
    var s = t.p;
    t.i === -1 ? (t.S.U(t), s !== void 0 && (s.n = t.n), t.n !== void 0 && (t.n.p = s)) : e = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = s;
  }
  n.s = e;
}
function ns(n) {
  ft.call(this, void 0), this.x = n, this.s = void 0, this.g = Cn - 1, this.f = 4;
}
(ns.prototype = new ft()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Cn))
    return !0;
  if (this.g = Cn, this.f |= 1, this.i > 0 && !Wl(this))
    return this.f &= -2, !0;
  var n = K;
  try {
    Bl(this), K = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 16, this.i++;
  }
  return K = n, jl(this), this.f &= -2, !0;
};
ns.prototype.S = function(n) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.S(t);
  }
  ft.prototype.S.call(this, n);
};
ns.prototype.U = function(n) {
  if (this.t !== void 0 && (ft.prototype.U.call(this, n), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.U(t);
  }
};
ns.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var n = this.t; n !== void 0; n = n.x)
      n.t.N();
  }
};
Object.defineProperty(ns.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var n = Hl(this);
  if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function Ul(n) {
  return new ns(n);
}
function Vl(n) {
  var t = n.u;
  if (n.u = void 0, typeof t == "function") {
    ge++;
    var e = K;
    K = void 0;
    try {
      t();
    } catch (s) {
      throw n.f &= -2, n.f |= 8, Or(n), s;
    } finally {
      K = e, Gn();
    }
  }
}
function Or(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    t.S.U(t);
  n.x = void 0, n.s = void 0, Vl(n);
}
function au(n) {
  if (K !== this)
    throw new Error("Out-of-order effect");
  jl(this), K = n, this.f &= -2, 8 & this.f && Or(this), Gn();
}
function Us(n) {
  this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
Us.prototype.c = function() {
  var n = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    n();
  }
};
Us.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Vl(this), Bl(this), ge++;
  var n = K;
  return K = this, au.bind(this, n);
};
Us.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Ss, Ss = this);
};
Us.prototype.d = function() {
  this.f |= 8, 1 & this.f || Or(this);
};
function qn(n) {
  var t = new Us(n);
  try {
    t.c();
  } catch (e) {
    throw t.d(), e;
  }
  return t.d.bind(t);
}
var xi;
function is(n, t) {
  G[n] = t.bind(null, G[n] || function() {
  });
}
function Sn(n) {
  xi && xi(), xi = n && n.S();
}
function Kl(n) {
  var t = this, e = n.data, s = cu(e);
  s.value = e;
  var i = Fl(function() {
    for (var r = t.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 4;
        break;
      }
    return t.__$u.c = function() {
      var o;
      !gt(i.peek()) && ((o = t.base) == null ? void 0 : o.nodeType) === 3 ? t.base.data = i.peek() : (t.__$f |= 1, t.setState({}));
    }, Ul(function() {
      var o = s.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return i.value;
}
Kl.displayName = "_st";
Object.defineProperties(ft.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: Kl }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
is("__b", function(n, t) {
  if (typeof t.type == "string") {
    var e, s = t.props;
    for (var i in s)
      if (i !== "children") {
        var r = s[i];
        r instanceof ft && (e || (t.__np = e = {}), e[i] = r, s[i] = r.peek());
      }
  }
  n(t);
});
is("__r", function(n, t) {
  Sn();
  var e, s = t.__c;
  s && (s.__$f &= -2, (e = s.__$u) === void 0 && (s.__$u = e = function(i) {
    var r;
    return qn(function() {
      r = this;
    }), r.c = function() {
      s.__$f |= 1, s.setState({});
    }, r;
  }())), Sn(e), n(t);
});
is("__e", function(n, t, e, s) {
  Sn(), n(t, e, s);
});
is("diffed", function(n, t) {
  Sn();
  var e;
  if (typeof t.type == "string" && (e = t.__e)) {
    var s = t.__np, i = t.props;
    if (s) {
      var r = e.U;
      if (r)
        for (var o in r) {
          var a = r[o];
          a !== void 0 && !(o in s) && (a.d(), r[o] = void 0);
        }
      else
        e.U = r = {};
      for (var l in s) {
        var c = r[l], d = s[l];
        c === void 0 ? (c = lu(e, l, d, i), r[l] = c) : c.o(d, i);
      }
    }
  }
  n(t);
});
function lu(n, t, e, s) {
  var i = t in n && n.ownerSVGElement === void 0, r = js(e);
  return { o: function(o, a) {
    r.value = o, s = a;
  }, d: qn(function() {
    var o = r.value.value;
    s[t] !== o && (s[t] = o, i ? n[t] = o : o ? n.setAttribute(t, o) : n.removeAttribute(t));
  }) };
}
is("unmount", function(n, t) {
  if (typeof t.type == "string") {
    var e = t.__e;
    if (e) {
      var s = e.U;
      if (s) {
        e.U = void 0;
        for (var i in s) {
          var r = s[i];
          r && r.d();
        }
      }
    }
  } else {
    var o = t.__c;
    if (o) {
      var a = o.__$u;
      a && (o.__$u = void 0, a.d());
    }
  }
  n(t);
});
is("__h", function(n, t, e, s) {
  (s < 3 || s === 9) && (t.__$f |= 2), n(t, e, s);
});
j.prototype.shouldComponentUpdate = function(n, t) {
  var e = this.__$u;
  if (!(e && e.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var s in t)
    return !0;
  for (var i in n)
    if (i !== "__source" && n[i] !== this.props[i])
      return !0;
  for (var r in this.props)
    if (!(r in n))
      return !0;
  return !1;
};
function cu(n) {
  return Fl(function() {
    return js(n);
  }, []);
}
const Gl = {};
function ct(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    ct(e, n[e]);
  }) : t && (Gl[n.toLowerCase()] = t);
}
function hu(n) {
  return Gl[n.toLowerCase()];
}
class Z extends j {
  constructor(t) {
    super(t), this._gid = wt(), this.state = this.getDefaultState(t);
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
   * Get the command scope.
   */
  get commandScope() {
    return this.constructor.NAME;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDefaultState(t) {
    return {};
  }
  resetState(t, e) {
    const s = this.getDefaultState(t);
    e ? this.state = s : this.changeState(s);
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
    return J(i, t, e, s, this.props.lang, this.constructor.NAME) ?? J(i, t, e, s, this.props.lang) ?? `{i18n:${t}}`;
  }
  changeState(t, e) {
    return new Promise((s) => {
      this.setState(t, () => {
        e == null || e(), s(this.state);
      });
    });
  }
  executeCommand(t, e = []) {
    const { onCommand: s, commands: i } = this.props;
    let r;
    typeof t == "string" && (t = { name: t });
    const { scope: o, name: a } = t, l = i ? i[`${o}~${a}`] || i[a] : null;
    return l ? l.call(this, t, e) : ((!t.scope || t.scope === this.commandScope) && (r = Ee(this, t.name, e)), s && (r = s.call(this, t, e)), r);
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: d, commands: h, onCommand: u, ...f } = t, g = new Set(this.constructor.customProps), _ = "dangerouslySetInnerHTML", y = Object.keys(f).reduce((v, b) => {
      if (!g.has(b) && (b === _ || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(b))) {
        const w = f[b];
        v[b] = b !== _ && w && typeof w == "object" ? JSON.stringify(w) : w;
      }
      return v;
    }, {});
    return { ref: o, className: k(this._getClassName(t), d) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...y, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? hu(e) : e) || e;
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
  componentDidMount() {
    const { commands: t, onCommand: e } = this.props;
    (t || e) && Lr(this.element, {
      commands: t,
      scope: this.commandScope,
      onCommand: this.executeCommand.bind(this)
    });
  }
  componentWillUnmount() {
    const { commands: t, onCommand: e } = this.props;
    (t || e) && Rr(this.element, this.commandScope);
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), s = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, s, t);
    return r && ([e, i, s] = r), Pt(e, i, s);
  }
}
Z.HElement = !0;
Z.customProps = [];
class du extends Z {
  constructor(t) {
    super(t), this.signals = {};
    const { state: e } = this;
    this.changeState(e), this.state = {};
  }
  changeState(t, e) {
    return new Promise((s) => {
      ou(() => {
        typeof t == "function" && (t = t(this.state));
        for (const i in t) {
          const r = this.signals[i];
          r ? r.value = t[i] : this.signals[i] = js(t[i]);
        }
        s(this.state), e == null || e();
      });
    });
  }
  resetState(t) {
    this.changeState(this.getDefaultState(t));
  }
}
du.HElementSignals = !0;
var uu = 0;
function m(n, t, e, s, i, r) {
  t || (t = {});
  var o, a, l = t;
  "ref" in t && (o = t.ref, delete t.ref);
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --uu, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return G.vnode && G.vnode(c), c;
}
class ye extends j {
  constructor() {
    super(...arguments), this._ref = V();
  }
  _runJS() {
    this.props.executeScript && p(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ m(Z, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function fu(n) {
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
  } = n, h = [e], u = { ...s }, f = [], g = [];
  return i.forEach((_) => {
    const y = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        y.push(...l.call(o, _, f, ...r));
      else {
        const v = _.call(o, f, ...r);
        v && (Array.isArray(v) ? y.push(...v) : y.push(v));
      }
    else
      y.push(_);
    y.forEach((v) => {
      v != null && (typeof v == "object" && !gt(v) && ("html" in v || "__html" in v || "className" in v || "style" in v || "attrs" in v || "children" in v) ? v.html ? f.push(
        /* @__PURE__ */ m("div", { className: k(v.className), style: v.style, dangerouslySetInnerHTML: { __html: v.html }, ...v.attrs ?? {} })
      ) : v.__html ? g.push(v.__html) : (v.style && Object.assign(u, v.style), v.className && h.push(v.className), v.children && f.push(v.children), v.attrs && Object.assign(d, v.attrs)) : f.push(v));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: k(h),
    style: u,
    ...d
  }, f];
}
function ql({
  tag: n = "div",
  ...t
}) {
  const [e, s] = fu(t);
  return Pt(n, e, ...s);
}
class kn extends j {
  constructor() {
    super(...arguments), this.state = {}, this._ref = V();
  }
  async load(t) {
    const { props: e } = this, { fetcher: s, type: i, fetcherArgs: r, fetcherThis: o = this, clearBeforeLoad: a } = e;
    this.setState({ loading: !0, error: void 0, ...a ? { content: void 0 } : {} });
    try {
      const l = await ss(t || s, r, { throws: !0, dataType: i === "custom" ? "json" : "text" }, o, (c) => {
        this._ajax = c;
      });
      this.setState({ content: l, loading: !1 });
    } catch (l) {
      this.setState({ error: l, loading: !1 });
    }
    this._ajax = void 0;
  }
  componentDidMount() {
    this.load(), p(this._ref.current).on("loadContent.zui", (t, e) => {
      t.stopPropagation(), this.load(e);
    });
  }
  componentDidUpdate(t) {
    (this.props.fetcher !== t.fetcher || this.props.fetcherArgs !== t.fetcherArgs || this.props.fetcherThis !== t.fetcherThis) && this.load();
  }
  componentWillUnmount() {
    var t;
    (t = this._ajax) == null || t.abort(), p(this._ref.current).off(".zui");
  }
  _renderContent(t, e) {
    const { loading: s, error: i, content: r = "" } = this.state, { loadingContent: o, errorText: a, type: l, clearBeforeLoad: c, ...d } = e;
    return s && c ? o : i ? a ?? i.message : l === "html" ? /* @__PURE__ */ m(ye, { html: r, executeScript: !0, ...d }) : l === "text" ? r : /* @__PURE__ */ m(R, { content: r, ...d });
  }
  render(t) {
    const { loading: e } = this.state, { id: s, loadingClass: i, loadingIndicator: r, className: o, style: a, attrs: l, loadingText: c, ...d } = t;
    return /* @__PURE__ */ m("div", { id: s, ref: this._ref, className: k("lazy-content", o, e ? i : "", r ? "load-indicator" : ""), "data-loading": c, style: a, ...l, children: this._renderContent(t, d) });
  }
}
kn.defaultProps = {
  type: "html",
  loadingIndicator: !0,
  loadingClass: "loading",
  clearBeforeLoad: !0
};
function Xi(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => Xi({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ m("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component || r.fetcher)) {
    if (r.fetcher)
      return /* @__PURE__ */ m(kn, { ...O(i, r) });
    if (r.html)
      return /* @__PURE__ */ m(ye, { ...O(i, r) });
    const { children: o, ...a } = r;
    return o && (r = O({ children: (Array.isArray(o) ? o : [o]).map((l) => Xi({ ...i, content: l, generatorThis: s, generatorArgs: e })) }, a)), /* @__PURE__ */ m(Z, { ...O(i, r) });
  }
  return gt(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function R(n) {
  const t = Xi(n);
  return t == null || typeof t == "boolean" ? null : gt(t) ? t : /* @__PURE__ */ m(We, { children: t });
}
class pu extends j {
  render(t) {
    return R(t);
  }
}
const ca = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function nt(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (gt(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(ca(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? ca(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ m("i", { className: k(i), ...s });
}
function mu(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Yl(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    Ge(null, t._temp), t._temp = null, t._container = null;
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
  }), Ge(
    Pt(mu, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function gu(n, t) {
  const e = Pt(Yl, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
ct({
  HElement: Z,
  element: Z,
  HtmlContent: ye,
  html: ye,
  CustomContent: R,
  LazyContent: kn,
  custom: R,
  lazy: kn,
  Icon: nt,
  Portal: Yl
});
class W extends ot {
  constructor() {
    super(...arguments), this._ref = V();
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
  _getRenderProps(t) {
    return {
      ref: this._ref,
      ...t
    };
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t, e) {
    var h;
    const { element: s, $: i } = this, { Component: r, replace: o } = this.constructor, { $replace: a = o, $optionsFromDataset: l, ...c } = this.setOptions(t, e), d = this._getRenderProps(c);
    if (e && ((h = i == null ? void 0 : i.resetState) == null || h.call(i, c)), a && r.HElement && (s.tagName.toLowerCase() === a || a === !0)) {
      const u = Array.from(s.attributes).reduce((f, g) => {
        const { name: _, value: y } = g;
        return f[_ === "class" ? "className" : _] = y, f;
      }, {});
      Ge(
        Pt(r, O({ component: s.tagName.toLowerCase(), attrs: u }, d)),
        s.parentElement,
        s
      );
    } else
      Ge(
        Pt(r, d),
        s
      );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return Ge(Pt(this.Component, t), e), e.innerHTML;
  }
}
W.replace = !1;
class Fr extends W {
}
Fr.NAME = "Custom";
Fr.Component = pu;
Fr.register();
class rt extends Z {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, iconClass: o, text: a, textClass: l, children: c, trailingIcon: d, trailingIconClass: h, caret: u } = t;
    return [
      e ? /* @__PURE__ */ m(nt, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ m(nt, { icon: r, className: o }),
      this._isEmptyText ? null : /* @__PURE__ */ m("span", { className: k("text", l), children: e ? i : a }),
      e ? null : c,
      e ? null : /* @__PURE__ */ m(nt, { icon: d, className: h }),
      e ? null : u ? /* @__PURE__ */ m("span", { className: typeof u == "string" ? `caret-${u}` : "caret" }) : null
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
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a, command: l } = t, c = e === "a", d = {
      ...super._getProps(t),
      type: c ? void 0 : "button",
      disabled: !c && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (d.type = o) : d.className = k([d.className, o])), r || (s !== void 0 && (d[c ? "href" : "data-url"] = s), i !== void 0 && (d[c ? "target" : "data-target"] = i), l && (d["zui-command"] = l)), d;
  }
}
const _u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: rt
}, Symbol.toStringTag, { value: "Module" }));
ct(_u);
let vt = class extends Z {
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
        return /* @__PURE__ */ m(R, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ m(R, { "z-key": e.key, "z-item": s, "z-type": r, content: { ...e } });
    if (l = l || a.default || Z, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = O({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ m(l, { "z-key": e.key, "z-item": s, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: u = {} } = this.constructor;
    if (e = O(
      { type: l },
      h,
      u[l],
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
    typeof e == "function" ? e = e.call(this) : Array.isArray(e) || (e = []);
    const { getItems: s } = t;
    if (s) {
      const i = s.call(this, e);
      if (i !== void 0)
        return i;
    }
    return e;
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
vt.NAME = "";
vt.ITEM_NAME = "item";
vt.TAG = "ul";
vt.ItemComponents = {
  default: Z,
  divider: [Z, { className: "divider" }],
  space: [Z, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
vt.defaultItemProps = {
  component: "li"
};
vt.defaultItemPropsMap = {};
vt.defaultItemType = "item";
vt.defaultProps = {
  itemKey: "id"
};
const yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: vt
}, Symbol.toStringTag, { value: "Module" }));
class Yn extends W {
}
Yn.NAME = "CommonList";
Yn.Component = vt;
Yn.replace = vt.TAG;
Yn.register();
ct(yu);
function vu(n) {
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
function bu(n) {
  const [t, e, s] = typeof n == "string" ? vu(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function ha(n, t) {
  return bu(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function da(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function wu(n, t, e) {
  n = n % 360 / 360, t = da(t), e = da(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function Cu(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let Vs = class extends j {
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
      displayText: h,
      maxTextLength: u = 2,
      src: f,
      hueDistance: g = 43,
      saturation: _ = 0.4,
      lightness: y = 0.6,
      children: v,
      ...b
    } = this.props, w = ["avatar", t], C = { ...e, background: o, color: a };
    let S = 32;
    s && (typeof s == "number" ? (C.width = `${s}px`, C.height = `${s}px`, C.fontSize = `${Math.max(12, Math.round(s / 2))}px`, S = s) : (w.push(`size-${s}`), S = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let $;
    if (f)
      w.push("has-img"), $ = /* @__PURE__ */ m("img", { className: "avatar-img", src: f, alt: c });
    else if (l)
      w.push("has-icon"), $ = /* @__PURE__ */ m(nt, { icon: l });
    else if (c != null && c.length || h != null && h.length) {
      const I = h ?? Cu(c, u), E = I.length;
      w.push("has-text", `has-text-${E}`);
      let D;
      S && S < 16 * E && (D = { transform: `scale(${S / (16 * E)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ m("div", { "data-actualSize": S, className: "avatar-text", style: D, children: I });
    }
    if (!f)
      if (o === void 0) {
        const I = d ?? c ?? h, E = (typeof I == "number" ? I : Ml(I)) * g % 360;
        if (C.background = `hsl(${E},${_ * 100}%,${y * 100}%)`, !a) {
          const D = wu(E, _, y);
          C.color = ha(D);
        }
      } else
        !a && o && /#?[0-9a-fA-F]{6}/.test(o) && (C.color = ha(o));
    return /* @__PURE__ */ m(
      "div",
      {
        className: k(w),
        style: C,
        ...b,
        children: [
          $,
          v
        ]
      }
    );
  }
};
const Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Vs
}, Symbol.toStringTag, { value: "Module" }));
let Bt = class extends vt {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, s) {
    if (!e)
      return !1;
    e.type || (e = p.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, s);
    return i && (this._isBtnType(i) && (i = O({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: s, size: i } = t;
    this._shareBtnProps = O({}, e, ml({ btnType: s, size: i }));
  }
};
Bt.NAME = "btn-group";
Bt.TAG = "nav";
Bt.ItemComponents = {
  ...vt.ItemComponents,
  default: rt
};
Bt.defaultItemProps = {
  component: void 0
};
const Jn = class Jl extends Bt {
  _getProps(t) {
    const { gap: e } = t, s = super._getProps(t);
    return e && (typeof e == "number" ? s.className = k(s.className, `gap-${e}`) : s.style = p.extend(s.style || {}, { gap: e })), s;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = O({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = O(s, r)), /* @__PURE__ */ m(Jl, { ...r });
  }
};
Jn.NAME = "toolbar";
Jn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Jn.ItemComponents = {
  ...Bt.ItemComponents,
  btnGroup: Bt,
  "btn-group": Bt
};
let yt = Jn;
const ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: yt
}, Symbol.toStringTag, { value: "Module" }));
class Xn extends Z {
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
      e ? /* @__PURE__ */ m(
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
      /* @__PURE__ */ m("label", { htmlFor: r, children: /* @__PURE__ */ m(R, { content: o }) }, "label")
    ];
  }
}
class xu extends Xn {
}
xu.defaultProps = {
  type: "radio"
};
class $u extends Xn {
}
$u.defaultProps = {
  type: "switch"
};
class ve extends Z {
  _renderLeading(t) {
    const {
      icon: e,
      iconClass: s,
      avatar: i,
      toggleIcon: r,
      leading: o,
      leadingClass: a,
      checked: l,
      checkbox: c,
      multiline: d
    } = t, h = [];
    if (r && h.push(/* @__PURE__ */ m(R, { content: r }, "toggleIcon")), l !== void 0 && h.push(/* @__PURE__ */ m(Xn, { className: "item-checkbox", checked: l, ...c }, "checkbox")), e && h.push(/* @__PURE__ */ m(nt, { className: k("item-icon", s), icon: e }, "icon")), i) {
      const f = typeof i == "function" ? i.call(this, t) : i;
      f && (f.className = k("item-avatar", f.className), h.push(/* @__PURE__ */ m(Vs, { ...f }, "avatar")));
    }
    const u = o ? /* @__PURE__ */ m(R, { content: o }, "leading") : null;
    return u && h.push(u), d ? h.length ? [
      /* @__PURE__ */ m("div", { className: k("item-leading", a), children: h }, "leading")
    ] : [] : h;
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
      contentAttrs: u
    } = t, f = l && !e, g = f ? "a" : "div";
    let { title: _, text: y } = t;
    return _ === void 0 && (_ = y, y = null), [
      /* @__PURE__ */ m("div", { className: k("item-content", h), ...u, children: [
        _ ? /* @__PURE__ */ m(g, { className: k("item-title", i), href: f ? l : void 0, target: f ? c : void 0, ...r, children: /* @__PURE__ */ m(R, { content: _ }) }, "title") : null,
        o ? /* @__PURE__ */ m("div", { className: k("item-subtitle", a), children: /* @__PURE__ */ m(R, { content: o }) }, "subtitle") : null,
        y ? /* @__PURE__ */ m("div", { className: k("item-text text", s), children: y }, "text") : null,
        d ? /* @__PURE__ */ m(R, { content: d }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: s,
      trailingClass: i,
      trailingIcon: r,
      trailingIconClass: o,
      actions: a
    } = t, l = [];
    r && l.push(/* @__PURE__ */ m(nt, { className: k("item-trailing-icon", o), icon: r }, "trailing-icon")), a && l.push(yt.render(a, [t], { key: "actions", className: "item-actions", relativeTarget: t, size: "sm" }, this));
    const c = s ? /* @__PURE__ */ m(R, { content: s }, "trailing") : null;
    return c && l.push(c), e ? l.length ? [
      /* @__PURE__ */ m("div", { className: k("item-trailing", i), children: [
        l,
        c
      ] }, "trailing")
    ] : [] : l;
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
      checked: u,
      multiline: f,
      title: g,
      subtitle: _,
      hint: y,
      selected: v,
      command: b,
      hover: w
    } = t, C = s || (o && !a ? "a" : "div"), S = C === "a", $ = O({
      key: "item",
      title: y,
      className: k("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "no-hover": w === !1,
        selected: v,
        checked: u,
        multiline: f ?? !!(g && _),
        state: S && !d
      })
    }, b ? { "zui-command": b } : null, S ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ m(C, { ...$, children: [
      this._renderLeading(t),
      this._renderContent(t, S),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...bn(s)]];
  }
}
let At = class extends vt {
  constructor(t) {
    super(t), this._activeSet = new Xe(() => {
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
  get isLazyItems() {
    const { items: t } = this.props;
    return t && !Array.isArray(t);
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && p(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && e.renderedItem.hover !== !1 && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    p(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
  }
  setItems(t, e) {
    const { onLoadFail: s } = this.props;
    return this.changeState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof s == "function" ? s.call(this, e) : s) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const s = await ss(t, [this], { throws: !0 });
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
    i = i || this._renderedItems, e = e || ((l) => l.type === "item" && !l.disabled);
    const r = i.length;
    let o = t === void 0 ? r - 1 : i.findIndex((l) => l.key === t), a = 0;
    for (; a < r; ) {
      o = (o + s + r) % r;
      const l = i[o];
      if (l && !l.hidden && e.call(this, l, o))
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
  _beforeRender(t) {
    var e;
    return (e = this.props.beforeRender) == null ? void 0 : e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: s } = this.state;
    return s || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, s) {
    const { divider: i, multiline: r } = t;
    e = O({}, ml({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      e.checkbox === !1 ? e.checked = void 0 : (l || e.checkbox) && (e.checked = this.isChecked(e.key, s, e.checked), typeof l == "object" && e.checkbox !== !1 && (e.checkbox = e.checkbox ? p.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
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
    if (s === "any" ? s = ".item-checkbox,.item-content,.item-icon" : s === !0 && (s = ".item-checkbox"), !s || !e || !e.renderedItem)
      return e;
    const i = e.renderedItem, r = i.checkbox;
    if (r !== !1 && (this.props.checkbox || r || i.checked !== void 0) && !i.disabled && e && t.target.closest(s)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: s } = this.state;
    return [super._getClassName(t), e ? "loading" : s ? "is-load-failed" : "", t.hoverItemActions ? "with-hover-actions" : ""];
  }
  _getProps(t) {
    const { className: e, ...s } = super._getProps(t);
    return {
      ...s,
      className: k(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: s } = this.state;
    return s && e.push(s), e;
  }
};
At.ItemComponents = {
  ...vt.ItemComponents,
  default: Z,
  item: ve,
  heading: ve
};
At.NAME = "list";
const $i = "```ZUI_STR\n";
class Ks {
  /**
   * Create new store instance.
   * @param id   Store profile ID.
   * @param type Store type.
   */
  constructor(t = "", e = "local") {
    this._cache = /* @__PURE__ */ new Map(), this._type = e, this._id = t, this._name = `ZUI_STORE:${this._id}`, this._storage = e === "local" ? localStorage : sessionStorage;
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new Ks(this._id, "session")), this._altStorage);
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
    this._id = t, this._name = `ZUI_STORE:${this._id}`, this._cache.clear();
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    if (this._cache.has(t))
      return this._cache.get(t);
    const s = this._storage.getItem(this._getKey(t));
    if (typeof s == "string") {
      if (s.startsWith($i))
        return s.substring($i.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? e;
  }
  /**
   * Set cache value.
   * @param key Key to set.
   * @param value Value to set.
   */
  setCache(t, e) {
    this._cache.set(t, e);
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
    try {
      this._storage.setItem(this._getKey(t), typeof e == "string" ? `${$i}${e}` : JSON.stringify(e));
    } catch (s) {
      this.setCache(t, e), console.warn(`[ZUI] Failed to set value to ${this._type} store: ${this._getKey(t)}, use cache instead.`, s);
    }
  }
  /**
   * Remove key-value pair from store.
   *
   * @param key Key to remove.
   */
  remove(t) {
    this._cache.delete(t), this._storage.removeItem(this._getKey(t));
  }
  /**
   * Iterate all key-value pairs in store.
   *
   * @param callback Callback function to call for each key-value pair in the store.
   */
  each(t) {
    const e = [];
    for (let s = 0; s < this._storage.length; s++) {
      const i = this._storage.key(s);
      if (i != null && i.startsWith(this._name)) {
        const r = this._storage.getItem(i), o = i.substring(this._name.length + 1);
        typeof r == "string" && t(o, JSON.parse(r)), e.push(o);
      }
    }
    for (const s of this._cache.keys())
      e.includes(s) || t(s, this._cache.get(s));
  }
  /**
   * Get all key values in store.
   *
   * @returns All key-value pairs in the store.
   */
  getAll() {
    const t = {};
    this.each((e, s) => {
      t[e] = s;
    });
    for (const e of this._cache.keys())
      t[e] = this._cache.get(e);
    return t;
  }
}
const ie = new Ks("DEFAULT");
function Tu(n, t = "local") {
  return new Ks(n, t);
}
Object.assign(ie, { create: Tu });
function Xl(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), Xl(s, t);
  });
}
function Nu(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function ua(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function Zi(n, t, e, s, i = 0, r) {
  return n.reduce((o, a, l) => {
    if (!a)
      return o;
    const c = String((t ? a[t] : a.key) ?? a.key ?? l), d = r ? `${r.keyPath}:${c}` : c, h = {
      key: c,
      level: i,
      keyPath: d,
      parentKey: r == null ? void 0 : r.keyPath,
      parent: r,
      data: a,
      children: []
    };
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? Zi(a.items, t, e, o, i + 1, h) : o;
  }, s);
}
let de = class extends At {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (p.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = ie.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && ua(o).forEach((a) => {
          r[a] = !0;
        });
      }), this._needInitChecks = !0;
    }
    this._renderedItemMap = /* @__PURE__ */ new Map(), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this), this._handleNestedToggle = this._handleNestedToggle.bind(this), this._handleNestedCheck = this._handleNestedCheck.bind(this), this._preserveState = this._preserveState.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return this.props.nestedShow ?? this.state.nestedShow ?? !1;
  }
  async setItems(t, e) {
    var i;
    this.isRoot && (this._needInitChecks = !0);
    const s = await super.setItems(t, e);
    return t && ((i = this.props.parent) == null ? void 0 : i.checked) === !0 ? this.toggleChecked(this._renderedItems.map((r) => r.key), !0) : t != null && t.some((r) => r.checked) && (this._needInitChecks = !0, this.forceUpdate()), s;
  }
  getItemMap(t) {
    if (t && (this._itemMap || this._itemMapCache))
      return this._itemMap || this._itemMapCache;
    if (!this._itemMap) {
      let e = !1;
      const s = Zi(this._items, this.props.itemKey, (i, r) => (i.set(r.keyPath, r), r.data.items && !Array.isArray(r.data.items) && (e = !0), i), /* @__PURE__ */ new Map());
      if (e)
        return this._renderedItemMap.forEach((i, r) => {
          s.has(r) || s.set(r, {
            key: i.key,
            level: i._level,
            keyPath: r,
            parentKey: `${r.split(":").slice(0, -1).join(":")}`,
            children: [],
            data: i
          });
        }), s.forEach((i) => {
          const { parentKey: r } = i;
          if (!r)
            return;
          const o = s.get(r);
          o && (o.children.push(i), i.parent = o);
        }), this._itemMapCache = s, s;
      this._itemMap = s;
    }
    return this._itemMap;
  }
  getRenderedItem(t) {
    return this._renderedItemMap.get(t);
  }
  getItem(t) {
    var i;
    const e = this._itemMap || this._itemMapCache;
    if (e)
      return (i = e.get(t)) == null ? void 0 : i.data;
    const s = this.getRenderedItem(t);
    return s ? s._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  async toggle(t, e, s) {
    const i = this.isExpanded(t);
    if (!s && e === i)
      return;
    e === void 0 && (e = !i);
    const { nestedShow: r, onToggle: o, accordion: a } = this.props;
    o && o.call(this, t, e, s) === !1 || r === void 0 && await this.changeState((l) => {
      let c = {
        ...s ? {} : l.nestedShow,
        [t]: e
      };
      if (e && a) {
        let d = `${t.split(":").slice(0, -1).join(":")}`;
        d.length && (d += ":"), Object.keys(c).forEach((h) => {
          h !== t && h.startsWith(d) && (c[h] = !1);
        });
      }
      return c = e ? ua(t).reduce((d, h) => (d[h] = e, d), c) : c, {
        nestedShow: c
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap(!0).values()).reduce((t, { keyPath: e, data: s }) => {
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
      await this.changeState(({ checked: a, nestedShow: l }) => {
        const c = (f) => s[f.keyPath] ?? a[f.keyPath] ?? f.data.checked ?? !1, d = this.getItemMap(), h = {}, { expandChildrenOnCheck: u } = this.props;
        return Object.keys(s).forEach((f) => {
          e = s[f];
          const g = d.get(f);
          g && (Xl(g, (_) => {
            c(_) !== e && (s[_.keyPath] = e);
          }), Nu(g, (_) => {
            const { children: y } = _, v = y.reduce((b, w) => (c(w) && b++, b), 0);
            s[_.keyPath] = v === y.length ? !0 : v ? "indeterminate" : !1;
          }), u && e && g.data.items && (h[f] = !0));
        }), {
          checked: {
            ...a,
            ...s
          },
          nestedShow: {
            ...l,
            ...h
          }
        };
      }, () => {
        var l;
        const a = this.state.checked;
        (l = this.props.onCheck) == null || l.call(this, s, Object.keys(a).filter((c) => a[c] === !0));
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
    return i = i || Zi(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
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
    this._storeID && ie.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, s, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return O(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: s.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parent: s,
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
    return /* @__PURE__ */ m(o, { ...r }, `nested:${s.key}`);
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ m("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ m("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`, gt(s) || (s = /* @__PURE__ */ m(nt, { icon: s }))) : (s = /* @__PURE__ */ m(nt, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ m("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: s });
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
      O(i, {
        expanded: l,
        className: ["is-nested", `is-nested-${l ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return O(i, {
      _level: t.level,
      _keyPath: a,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t, e) {
    const { beforeRenderItem: s } = this.props;
    if (s) {
      const i = s.call(this, t, e);
      i !== void 0 && (t = i);
    }
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, s) {
    (this._hasNestedItems || !this.isRoot) && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = O(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, s);
  }
  _getItemFromEvent(t, e) {
    e = e || t.target;
    let s = super._getItemFromEvent(t, e);
    if (!s) {
      const r = e.closest("[z-list]");
      if (r) {
        const o = r.getAttribute("z-list"), a = this.getItem(o), l = this.getRenderedItem(o);
        if (!a || !l)
          return;
        s = {
          target: e,
          index: l._index,
          item: a,
          element: r,
          event: t,
          key: o,
          keyPath: o,
          renderedItem: l
        };
      }
      return;
    }
    (t.type === "mouseenter" || t.type === "mouseleave" || t.type === "mouseover") && (s.hover = t.type !== "mouseleave");
    const { parentKey: i } = this.props;
    return { ...s, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${s.key}`, target: e };
  }
  _handleNestedToggle(t, e, s) {
    this.toggle(t, e, s);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    if (e) {
      const { renderedItem: s, keyPath: i, target: r } = e, { nestedToggle: o } = this.props;
      if (!s.items || t.defaultPrevented || r.closest(".not-nested-toggle") || o && !s.disabled && !r.closest(o) || !o && !s.disabled && r.closest("a,.btn,.item-checkbox,.open-url,input,select,textarea") && !r.closest(".nested-toggle-icon,.item-icon"))
        return e;
      this.toggle(i), t.preventDefault();
    }
    return e;
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: s = 20, parentKey: i } = t, r = O(super._getProps(t), {
      "z-level": e,
      "z-list": i,
      style: { "--list-nested-indent": `${e * s}px`, "--list-indent": `${s}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = k(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !1, super._beforeRender(t);
  }
};
de.defaultProps = {
  ...At.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
de.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "onToggle", "checkbox", "getItem", "getItems", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive", "hoverItemActions"];
const Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  List: At,
  Listitem: ve,
  NestedList: de
}, Symbol.toStringTag, { value: "Module" }));
class Zn extends W {
}
Zn.NAME = "List";
Zn.Component = At;
Zn.replace = At.TAG;
Zn.register();
class Qn extends W {
}
Qn.NAME = "NestedList";
Qn.Component = de;
Qn.replace = de.TAG;
Qn.register();
ct(Eu);
const rs = class Zl extends de {
  constructor(t) {
    super(t), this._handleHover = this._handleHover.bind(this);
  }
  get isHoverTrigger() {
    return this.props.nestedTrigger === "hover";
  }
  _getClassName(t) {
    return [super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.wrap ? { "scrollbar-thin": t.scrollbarThin, "scrollbar-hover": t.scrollbarHover } : { popup: t.popup, compact: t.compact }];
  }
  _getWrapClass(t) {
    return ["menu-wrapper", t.wrapClass, { popup: t.popup, compact: t.compact }];
  }
  _getWrapperProps(t) {
    const { wrapAttrs: e, height: s, maxHeight: i, parentKey: r } = t, o = O(
      { "z-list-wrapper": r },
      e,
      s || i ? { style: { height: s, maxHeight: i } } : null,
      this.isRoot && this.isHoverTrigger ? {
        onMouseEnter: this._handleHover,
        onMouseLeave: this._handleHover,
        onMouseOver: this._handleHover
      } : null
    );
    return o.className = k(this._getWrapClass(t), o.className), o;
  }
  _renderWrapperHeader(t) {
    return /* @__PURE__ */ m(R, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ m(R, { content: t.footer, generatorThis: this }, "footer");
  }
  _handleHover(t) {
    const e = t.target;
    if (!(e instanceof HTMLElement) || !this.isHoverTrigger)
      return;
    let s;
    if (t.type !== "mouseleave") {
      const c = e.closest("[z-item]");
      if (c)
        s = c.getAttribute("z-key-path"), c.classList.contains("is-nested") || (s = c.getAttribute("z-parent"));
      else {
        const d = e.closest("[z-list-wrapper]");
        s = d == null ? void 0 : d.getAttribute("z-list-wrapper");
      }
    }
    const i = this._hoverInfo, r = i == null ? void 0 : i.keyPath;
    if (r === s)
      return;
    i != null && i.timer && clearTimeout(i.timer);
    const o = typeof s == "string", l = o ? typeof r == "string" && (i != null && i.shown) ? 50 : 200 : i != null && i.shown ? 100 : 200;
    this._hoverInfo = {
      keyPath: s,
      timer: window.setTimeout(() => {
        o ? (this.toggle(s, !0, !0), this._hoverInfo.shown = !0) : (this.toggleAll(!1), this._hoverInfo = void 0);
      }, l)
    };
  }
  componentWillUnmount() {
    var e;
    super.componentWillUnmount();
    const t = (e = this._hoverInfo) == null ? void 0 : e.timer;
    t && clearTimeout(t);
  }
  render(t) {
    const e = super.render(t);
    return t.wrap ? /* @__PURE__ */ m("menu", { ...this._getWrapperProps(t), children: [
      this._renderWrapperHeader(t),
      e,
      this._renderWrapperFooter(t)
    ] }) : e;
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = O(s, r)), /* @__PURE__ */ m(Zl, { ...r });
  }
};
rs.NAME = "menu";
rs.TAG = "menu";
rs.inheritNestedProps = [...de.inheritNestedProps, "compact"];
rs.ItemComponents = {
  ...de.ItemComponents,
  item: [ve, { innerComponent: "a" }]
};
rs.defaultProps = {
  ...de.defaultProps,
  scrollbarHover: !0
};
let Mt = rs;
let ti = class extends j {
  constructor(t) {
    super(t), this._input = V(), this._timer = 0, this._handleClearBtnClick = (e) => {
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
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${wt()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = vl(t, {
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
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, p(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && p(this.input).unbindHotkeys(this._hotkeysScope);
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
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: u, clearIcon: f, value: g, compact: _, prefixClass: y, suffixClass: v } = t, { focus: b, value: w } = e, { id: C } = this, S = g ?? w, $ = typeof S != "string" || !S.trim().length;
    let I, E, D;
    return u && (D = u === !0 ? /* @__PURE__ */ m("span", { class: "magnifier" }) : /* @__PURE__ */ m(nt, { icon: u })), !h && u && (I = /* @__PURE__ */ m("label", { for: C, class: k("input-control-prefix", y), children: D }, "prefix")), f && !$ ? E = /* @__PURE__ */ m(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: f === !0 ? /* @__PURE__ */ m("span", { class: "close" }) : /* @__PURE__ */ m(nt, { icon: f })
      }
    ) : h && u && (E = D), E && (E = /* @__PURE__ */ m("label", { for: C, class: k("input-control-suffix", v), children: E }, "suffix")), /* @__PURE__ */ m("div", { class: k("search-box input-control", r, { focus: b, empty: $, compact: _, "has-prefix-icon": I, "has-suffix-icon": E }), style: o, children: [
      I,
      /* @__PURE__ */ m(
        "input",
        {
          ref: this._input,
          id: C,
          type: "text",
          class: k("form-control", { "rounded-full": c, "size-sm": _ }, i),
          style: s,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: S,
          onInput: this._handleChange,
          onChange: this._handleChange,
          onFocus: this._handleFocus,
          onBlur: this._handleFocus
        },
        "input"
      ),
      E
    ] });
  }
};
ti.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: ti
}, Symbol.toStringTag, { value: "Module" }));
let Lt = class extends Mt {
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
    const t = p(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((s = this._searchKeys) != null && s.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, s, i) {
    const { isItemMatch: r, nestedSearch: o } = t, a = r ? r.call(this, e, this._searchKeys, s, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (o && this.isRoot && a && i !== void 0) {
      let l = "";
      String(i).split(":").forEach((c) => {
        l += `${l.length ? ":" : ""}${c}`, this._matchedParents.add(l);
      });
    }
    return a;
  }
  _isNestedItemMatch(t, e, s, i) {
    return this._isItemMatch(this.props, t, s, i);
  }
  _getNestedProps(t, e, s, i) {
    const r = super._getNestedProps(t, e, s, i);
    return this.isRoot && t.nestedSearch ? (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")) : t.nestedSearch || O(r, { search: void 0, defaultSearch: void 0 }, s.listProps), r;
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, s, t.parentKey), i.hidden || this._showCount++, i));
  }
  _renderItem(t, e, s) {
    return e.hidden && !this._hasNestedItems ? null : (e.className = [e.className, e.hidden ? "is-not-match" : ""], !e.hidden && t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, s));
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return k(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _getSearchBoxProps(t) {
    const { searchBox: e } = t, s = {
      compact: !0,
      className: "not-nested-toggle",
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && O(s, e), t.search !== void 0 && (s.value = this._searchKeys.join(" "), s.disabled = !0), s;
  }
  _renderSearchBox(t) {
    const e = this._getSearchBoxProps(t);
    return /* @__PURE__ */ m(ti, { ...e }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, { noMatchHint: s, searchBox: i, searchPlacement: r, nestedSearch: o, headerClass: a } = t, l = (!o || this.isRoot) && i && r !== "bottom";
    return !e && !l && !s ? null : [
      s ? /* @__PURE__ */ m("div", { className: "search-menu-no-match-hint", children: s }, "noMatchHint") : null,
      e || l ? /* @__PURE__ */ m("header", { className: k("search-menu-header", a), children: [
        e ? super._renderWrapperHeader(t) : null,
        l ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, { searchBox: s, searchPlacement: i, nestedSearch: r, footerClass: o, exceedLimitHint: a, limit: l } = t, c = (!r || this.isRoot) && s && i === "bottom", d = a && l && this._items.length > l;
    return !e && !c && !d ? null : /* @__PURE__ */ m("footer", { className: k("search-menu-footer", o), children: [
      d ? /* @__PURE__ */ m("div", { className: "search-menu-exceed-limit-hint", children: X(a, this._items.length - l) }) : null,
      e ? super._renderWrapperFooter(t) : null,
      c ? this._renderSearchBox(t) : null
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
      const o = typeof r == "function" ? r(t) : t[r];
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
    return p.unique(t.toLowerCase().split(" ").filter((e) => e.length));
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
        h && (o.push(/* @__PURE__ */ m("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Lt.inheritNestedProps = [...Mt.inheritNestedProps, "isItemMatch", "search", "underlineKeys", "nestedSearch"];
Lt.defaultProps = {
  ...Mt.defaultProps,
  defaultNestedShow: !0,
  wrap: !0,
  nestedSearch: !0,
  underlineKeys: !0,
  limit: 200
};
const Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: Mt,
  SearchMenu: Lt
}, Symbol.toStringTag, { value: "Module" }));
class Hr extends W {
}
Hr.NAME = "Menu";
Hr.Component = Mt;
Hr.replace = Mt.TAG;
class Wr extends W {
}
Wr.NAME = "SearchMenu";
Wr.Component = Lt;
Wr.replace = Lt.TAG;
ct(Au);
function Iu({
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
  let u;
  a === !0 ? u = /* @__PURE__ */ m(rt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ m("span", { class: "close" }) }) : gt(a) ? u = a : typeof a == "object" && (u = /* @__PURE__ */ m(rt, { ...a, onClick: l }));
  const f = yt.render(e, []);
  return /* @__PURE__ */ m("div", { className: k("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ m(nt, { icon: c, className: k("alert-icon", d) }),
    typeof i != "string" ? /* @__PURE__ */ m(R, { content: i }) : /* @__PURE__ */ m("div", { className: k("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ m(R, { content: s }) : s && /* @__PURE__ */ m("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ m("div", { className: "alert-text", children: i }),
      s ? f : null
    ] }),
    s ? null : f,
    u,
    o
  ] });
}
function Du(n) {
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
let Pu = class extends j {
  render(t) {
    const {
      margin: e,
      type: s,
      placement: i,
      animation: r,
      show: o,
      className: a,
      time: l,
      ...c
    } = t;
    return typeof c.html == "string" && (c.content = { html: c.html }, delete c.html), /* @__PURE__ */ m(
      Iu,
      {
        className: k("messager", a, s, r === !0 ? Du(i) : r, o ? "in" : ""),
        ...c
      }
    );
  }
};
class Br extends W {
  constructor() {
    super(...arguments), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      p(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
    });
  }
  setOptions(t, e) {
    return t = super.setOptions(t, e), {
      ...t,
      show: this._show,
      afterRender: this._afterRender
    };
  }
  show() {
    this.render(), this.emit("show"), this._resetTimer(() => {
      this._show = !0, this.render(), this._resetTimer(() => {
        this.emit("shown");
        const { time: t } = this.options;
        t && this._resetTimer(() => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && this._resetTimer(() => {
      this.emit("hide"), this._show = !1, this.render(), this._resetTimer(() => {
        this.emit("hidden");
      });
    }, 50);
  }
  _resetTimer(t, e = 200) {
    this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
      t(), this._showTimer = 0;
    }, e);
  }
}
Br.NAME = "MessagerItem";
Br.Component = Pu;
const Gs = class Ql extends ot {
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
    const t = { ...this.options };
    if (this._item)
      this._item.setOptions(t);
    else {
      const e = this._getHolder(), s = new Br(e, t);
      s.on("hidden", () => {
        s.destroy(), e == null || e.remove(), this._holder = void 0, this._item = void 0;
      }), this._item = s;
    }
    return this._item;
  }
  _getHolder() {
    if (this._holder)
      return this._holder;
    const { placement: t = "top" } = this.options;
    let e = this.$element.find(`.messagers-${t}`);
    e.length || (e = p(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let s = e.find(`#messager-${this.gid}`);
    return s.length || (s = p(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = s[0]), s[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, r = { type: e, key: `messager_${wt()}`, ...i };
    r.type && p.extend(r, this.TypeOptions[r.type]);
    const o = Ql.ensure(s || "body", r);
    return o.hide(), o.show(), o;
  }
};
Gs.NAME = "messager";
Gs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Gs.MULTI_INSTANCE = !0;
Gs.TypeOptions = {};
let vm = Gs, ei = class extends j {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ m("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...c
    }, children: [
      /* @__PURE__ */ m("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
};
ei.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: ei
}, Symbol.toStringTag, { value: "Module" }));
ct(Lu);
class jr extends W {
}
jr.NAME = "ProgressBar";
jr.Component = ei;
jr.register();
let si = class extends j {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, u = s / 2;
    let { circleWidth: f = 0.1 } = t;
    f < 1 && (f = s * f);
    const g = (s - f) / 2;
    return /* @__PURE__ */ m("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ m("circle", { cx: u, cy: u, r: g, "stroke-width": f, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ m("circle", { cx: u, cy: u, r: g, "stroke-width": f, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ m("text", { x: c ?? u, y: d ?? u + f / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px`, stroke: "currentColor" }, children: o === !0 ? Math.floor(e) : o }) : null,
      h
    ] });
  }
};
si.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Ur extends W {
}
Ur.NAME = "ProgressCircle";
Ur.Component = si;
Ur.register();
const Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: si
}, Symbol.toStringTag, { value: "Module" }));
ct(Ru);
const ms = '[droppable="true"]';
class ni extends ot {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, r = p(t.target), o = r.closest(e), a = o[0];
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
      l && (this.$element.find(l).removeClass(l), p(e).addClass(l));
      let u = typeof o == "function" ? p(o.call(this, e)) : r.find(o || a || ms);
      if (h && (u = u.filter((f, g) => h.call(this, t, e, g) !== !1)), !u.length) {
        this._clean();
        return;
      }
      c && (r.find(c).removeClass(c), u.addClass(c)), d && r.addClass(d), r.find(ms).removeAttr("droppable"), u.attr("droppable", "true"), this._$targets = u;
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
      const { dragElement: e } = this, i = p(t.target).closest(ms)[0];
      if (!e || !i)
        return;
      const r = this.state.dropping;
      if (t.preventDefault(), this._setDragEffect(t), r !== i) {
        const { droppingClass: l } = this.options;
        l && (r && this._leaveDropElement(t, r), p(i).addClass(l)), this._setState({ dropping: i }), (o = this.options.onDragEnter) == null || o.call(this, t, e, i);
      }
      (a = this.options.onDragOver) == null || a.call(this, t, e, i);
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = p(t.target).filter(ms)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = p(t.target).closest(ms)[0];
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
    const { namespace: t } = this, { dragContainer: e, dropContainer: s, onDrag: i } = this.options;
    this._$dragContainer = e ? p(e) : this.$element, this._$dropContainer = s ? p(s) : this._$dragContainer, this._$dragContainer.on("mousedown" + t, this._handleMouseDown).on("dragstart" + t, this._handleDragStart).on("dragend" + t, this._handleDragEnd), i && this._$dragContainer.on("drag" + t, this._handleDrag), this._$dropContainer.on("dragover" + t, this._handleDragOver).on("dragenter" + t, this._handleDragEnter).on("dragleave" + t, this._handleDragLeave).on("drop" + t, this._handleDrop), p(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), p(document).off(this.namespace), this._$dragContainer.off(this.namespace), this._$dropContainer.off(this.namespace), super.destroy();
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
    s && p(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    this._needClean = !0;
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = p(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), s && o.removeClass(s), this._$targets = void 0);
  }
}
ni.NAME = "Draggable";
ni.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const zu = '[moveable="true"]', Vr = class tc extends ot {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: r } = e, o = p(t.target), a = s === "self" ? this.$element : o.closest(s), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), t.preventDefault(), this._setState(t, l), p(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      !this._state || !t.buttons || (t.preventDefault(), this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
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
    this._clean(), p(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var l;
    let s = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = p(e);
      let d;
      if (this.options.move === !0) {
        const u = c.css("position");
        d = u === "fixed" || u === "absolute" || u === "relative" ? "position" : "transform";
      } else
        d = this.options.move || "none";
      const h = d === "transform" ? tc.getTranslate(e) : d === "scroll" ? { left: e.scrollLeft, top: e.scrollTop } : c.position();
      s = p.extend(s, {
        strategy: d,
        target: e,
        startX: s.x,
        startY: s.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: h.left,
        startTop: h.top,
        left: h.left,
        top: h.top,
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      });
    } else if (i) {
      const c = s.x - i.startX, d = s.y - i.startY;
      s = p.extend({}, i, s, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = s;
    const { strategy: r, target: o } = s, a = p(o);
    r === "position" ? a.css({ left: s.left, top: s.top }) : r === "transform" ? a.css("transform", `translate(${s.left}px, ${s.top}px)`) : r === "scroll" && (o.scrollLeft = s.scrollLeft - s.deltaX, o.scrollTop = s.scrollTop - s.deltaY), (l = this.options.onChange) == null || l.call(this, s, i, t);
  }
  _clean() {
    p(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = p(s);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
  static getTranslate(t) {
    const s = window.getComputedStyle(t).getPropertyValue("transform");
    if (s === "none")
      return { left: 0, top: 0 };
    const i = s.match(/^matrix\((.+)\)$/);
    if (!i)
      return { left: 0, top: 0 };
    const r = i[1].split(", ");
    return {
      left: parseFloat(r[4]),
      top: parseFloat(r[5])
    };
  }
};
Vr.NAME = "Moveable";
Vr.DEFAULT = {
  selector: zu,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
let Kr = Vr;
const Gr = class ec extends ot {
  async afterInit() {
    const t = await ec.loadModule(), { options: e } = this;
    if (e.dragShadow !== void 0 && e.dragShadow !== !0) {
      const { dragShadow: s, onEnd: i, setData: r } = e;
      e.setData = (o, a) => {
        s === !1 && !this._emptyShadow && (this._emptyShadow = a.cloneNode(!0), this._emptyShadow.classList.add("sortable-empty-shadow"), document.body.appendChild(this._emptyShadow)), o.setDragImage(s === !1 ? this._emptyShadow : s, 0, 0), r == null || r(o, a);
      }, e.onEnd = (o) => {
        var a;
        i == null || i(o), (a = this._emptyShadow) == null || a.remove(), this._emptyShadow = void 0;
      }, delete e.dragShadow;
    }
    this.module = new t(this.element, e);
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
    return this.Module || (this.Module = await p.getLib("sortablejs")), this.Module;
  }
};
Gr.NAME = "Sortable";
Gr.DEFAULT = {
  animation: 150
};
let sc = Gr;
p.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  check: "Sortable"
});
let qr = class extends At {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new sc(this.element, t));
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-list"];
  }
  _getSortableOptions() {
    const { sortable: t, canSortTo: e } = this.props;
    if (!t)
      return;
    const s = typeof t == "object" ? t : {};
    return {
      group: `SortableList.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".list-item",
      ...s,
      onSort: (i) => {
        var o, a;
        const r = this.getOrders();
        (o = this.props.onSort) == null || o.call(this, i, r), (a = s.onSort) == null || a.call(this, i);
      },
      onMove: (i, r) => {
        var o;
        if (e) {
          const a = i.dragged.getAttribute("z-key-path"), l = i.related.getAttribute("z-key-path"), c = this.getItem(a), d = this.getItem(l), h = e.call(this, i, c, d);
          if (h !== void 0)
            return h;
        }
        return (o = s.onMove) == null ? void 0 : o.call(this, i, r);
      }
    };
  }
};
qr.defaultProps = {
  ...At.defaultProps,
  sortable: !0
};
let Gt = class extends Mt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, s));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Gt.NAME = "tree";
Gt.defaultProps = {
  ...Mt.defaultProps,
  indent: 12
};
Gt.defaultItemProps = {
  ...Mt.defaultItemProps,
  innerComponent: "div"
};
Gt.inheritNestedProps = [...Mt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let os = class extends Lt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return Gt.getTreeItem(t, super._getItem(t, e, s));
  }
};
os.NAME = "tree";
os.inheritNestedProps = [...Lt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
os.ItemComponents = {
  ...Lt.ItemComponents,
  item: [ve, { innerComponent: "div" }]
};
const Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchTree: os,
  Tree: Gt
}, Symbol.toStringTag, { value: "Module" }));
let ii = class extends Gt {
  componentDidMount() {
    super.componentDidMount();
    const t = this._getSortableOptions();
    t && (this._sortable = new sc(this.element, t));
  }
  getOrders() {
    var t;
    return ((t = this._sortable) == null ? void 0 : t.toArray()) || [];
  }
  _getClassName(t) {
    return [super._getClassName(t), "sortable-tree"];
  }
  _getSortableOptions() {
    const { sortable: t } = this.props;
    if (!t)
      return;
    const e = typeof t == "object" ? t : {}, { onSort: s, canSortTo: i, parentKey: r } = this.props;
    return {
      group: `SortableTree.${this.gid}`,
      dataIdAttr: "z-key",
      draggable: ".tree-item",
      ...e,
      onSort: (o) => {
        var l;
        const a = this.getOrders();
        s == null || s.call(this, o, a, r), (l = e.onSort) == null || l.call(this, o);
      },
      onMove: (o, a) => {
        var l;
        if (i) {
          const c = o.dragged.getAttribute("z-key-path"), d = o.related.getAttribute("z-key-path"), h = this.getItem(c), u = this.getItem(d), f = i.call(this, o, h, u, r);
          if (f !== void 0)
            return f;
        }
        return (l = e.onMove) == null ? void 0 : l.call(this, o, a);
      }
    };
  }
};
ii.defaultProps = {
  ...Gt.defaultProps,
  sortable: !0
};
ii.inheritNestedProps = [...Gt.inheritNestedProps, "onSort", "sortable", "canSortTo"];
class Yr extends W {
}
Yr.NAME = "SortableList";
Yr.Component = qr;
Yr.replace = qr.TAG;
class Jr extends W {
}
Jr.NAME = "SortableTree";
Jr.Component = ii;
Jr.replace = ii.TAG;
var Dt = typeof window < "u" ? window : null, Xr = Dt === null, Ms = Xr ? void 0 : Dt.document, zt = "addEventListener", Ot = "removeEventListener", Ti = "getBoundingClientRect", gs = "_a", Ft = "_b", te = "_c", en = "horizontal", Ht = function() {
  return !1;
}, Fu = Xr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(n) {
  var t = Ms.createElement("div");
  return t.style.cssText = "width:" + n + "calc(9px)", !!t.style.length;
}).shift() + "calc", nc = function(n) {
  return typeof n == "string" || n instanceof String;
}, fa = function(n) {
  if (nc(n)) {
    var t = Ms.querySelector(n);
    if (!t)
      throw new Error("Selector " + n + " did not match a DOM element");
    return t;
  }
  return n;
}, pt = function(n, t, e) {
  var s = n[t];
  return s !== void 0 ? s : e;
}, sn = function(n, t, e, s) {
  if (t) {
    if (s === "end")
      return 0;
    if (s === "center")
      return n / 2;
  } else if (e) {
    if (s === "start")
      return 0;
    if (s === "center")
      return n / 2;
  }
  return n;
}, Hu = function(n, t) {
  var e = Ms.createElement("div");
  return e.className = "gutter gutter-" + t, e;
}, Wu = function(n, t, e) {
  var s = {};
  return nc(t) ? s[n] = t : s[n] = Fu + "(" + t + "% - " + e + "px)", s;
}, Bu = function(n, t) {
  var e;
  return e = {}, e[n] = t + "px", e;
}, ic = function(n, t) {
  if (t === void 0 && (t = {}), Xr)
    return {};
  var e = n, s, i, r, o, a, l;
  Array.from && (e = Array.from(e));
  var c = fa(e[0]), d = c.parentNode, h = getComputedStyle ? getComputedStyle(d) : null, u = h ? h.flexDirection : null, f = pt(t, "sizes") || e.map(function() {
    return 100 / e.length;
  }), g = pt(t, "minSize", 100), _ = Array.isArray(g) ? g : e.map(function() {
    return g;
  }), y = pt(t, "maxSize", 1 / 0), v = Array.isArray(y) ? y : e.map(function() {
    return y;
  }), b = pt(t, "expandToMin", !1), w = pt(t, "gutterSize", 10), C = pt(t, "gutterAlign", "center"), S = pt(t, "snapOffset", 30), $ = Array.isArray(S) ? S : e.map(function() {
    return S;
  }), I = pt(t, "dragInterval", 1), E = pt(t, "direction", en), D = pt(
    t,
    "cursor",
    E === en ? "col-resize" : "row-resize"
  ), H = pt(t, "gutter", Hu), M = pt(
    t,
    "elementStyle",
    Wu
  ), z = pt(t, "gutterStyle", Bu);
  E === en ? (s = "width", i = "clientX", r = "left", o = "right", a = "clientWidth") : E === "vertical" && (s = "height", i = "clientY", r = "top", o = "bottom", a = "clientHeight");
  function B(A, x, N, P) {
    var dt = M(s, x, N, P);
    Object.keys(dt).forEach(function(et) {
      A.style[et] = dt[et];
    });
  }
  function F(A, x, N) {
    var P = z(s, x, N);
    Object.keys(P).forEach(function(dt) {
      A.style[dt] = P[dt];
    });
  }
  function U() {
    return l.map(function(A) {
      return A.size;
    });
  }
  function Y(A) {
    return "touches" in A ? A.touches[0][i] : A[i];
  }
  function q(A) {
    var x = l[this.a], N = l[this.b], P = x.size + N.size;
    x.size = A / this.size * P, N.size = P - A / this.size * P, B(x.element, x.size, this[Ft], x.i), B(N.element, N.size, this[te], N.i);
  }
  function L(A) {
    var x, N = l[this.a], P = l[this.b];
    this.dragging && (x = Y(A) - this.start + (this[Ft] - this.dragOffset), I > 1 && (x = Math.round(x / I) * I), x <= N.minSize + N.snapOffset + this[Ft] ? x = N.minSize + this[Ft] : x >= this.size - (P.minSize + P.snapOffset + this[te]) && (x = this.size - (P.minSize + this[te])), x >= N.maxSize - N.snapOffset + this[Ft] ? x = N.maxSize + this[Ft] : x <= this.size - (P.maxSize - P.snapOffset + this[te]) && (x = this.size - (P.maxSize + this[te])), q.call(this, x), pt(t, "onDrag", Ht)(U()));
  }
  function ht() {
    var A = l[this.a].element, x = l[this.b].element, N = A[Ti](), P = x[Ti]();
    this.size = N[s] + P[s] + this[Ft] + this[te], this.start = N[r], this.end = N[o];
  }
  function ps(A) {
    if (!getComputedStyle)
      return null;
    var x = getComputedStyle(A);
    if (!x)
      return null;
    var N = A[a];
    return N === 0 ? null : (E === en ? N -= parseFloat(x.paddingLeft) + parseFloat(x.paddingRight) : N -= parseFloat(x.paddingTop) + parseFloat(x.paddingBottom), N);
  }
  function Ro(A) {
    var x = ps(d);
    if (x === null || _.reduce(function(et, Ct) {
      return et + Ct;
    }, 0) > x)
      return A;
    var N = 0, P = [], dt = A.map(function(et, Ct) {
      var Ne = x * et / 100, Xs = sn(
        w,
        Ct === 0,
        Ct === A.length - 1,
        C
      ), Zs = _[Ct] + Xs;
      return Ne < Zs ? (N += Zs - Ne, P.push(0), Zs) : (P.push(Ne - Zs), Ne);
    });
    return N === 0 ? A : dt.map(function(et, Ct) {
      var Ne = et;
      if (N > 0 && P[Ct] - N > 0) {
        var Xs = Math.min(
          N,
          P[Ct] - N
        );
        N -= Xs, Ne = et - Xs;
      }
      return Ne / x * 100;
    });
  }
  function Nh() {
    var A = this, x = l[A.a].element, N = l[A.b].element;
    A.dragging && pt(t, "onDragEnd", Ht)(U()), A.dragging = !1, Dt[Ot]("mouseup", A.stop), Dt[Ot]("touchend", A.stop), Dt[Ot]("touchcancel", A.stop), Dt[Ot]("mousemove", A.move), Dt[Ot]("touchmove", A.move), A.stop = null, A.move = null, x[Ot]("selectstart", Ht), x[Ot]("dragstart", Ht), N[Ot]("selectstart", Ht), N[Ot]("dragstart", Ht), x.style.userSelect = "", x.style.webkitUserSelect = "", x.style.MozUserSelect = "", x.style.pointerEvents = "", N.style.userSelect = "", N.style.webkitUserSelect = "", N.style.MozUserSelect = "", N.style.pointerEvents = "", A.gutter.style.cursor = "", A.parent.style.cursor = "", Ms.body.style.cursor = "";
  }
  function Eh(A) {
    if (!("button" in A && A.button !== 0)) {
      var x = this, N = l[x.a].element, P = l[x.b].element;
      x.dragging || pt(t, "onDragStart", Ht)(U()), A.preventDefault(), x.dragging = !0, x.move = L.bind(x), x.stop = Nh.bind(x), Dt[zt]("mouseup", x.stop), Dt[zt]("touchend", x.stop), Dt[zt]("touchcancel", x.stop), Dt[zt]("mousemove", x.move), Dt[zt]("touchmove", x.move), N[zt]("selectstart", Ht), N[zt]("dragstart", Ht), P[zt]("selectstart", Ht), P[zt]("dragstart", Ht), N.style.userSelect = "none", N.style.webkitUserSelect = "none", N.style.MozUserSelect = "none", N.style.pointerEvents = "none", P.style.userSelect = "none", P.style.webkitUserSelect = "none", P.style.MozUserSelect = "none", P.style.pointerEvents = "none", x.gutter.style.cursor = D, x.parent.style.cursor = D, Ms.body.style.cursor = D, ht.call(x), x.dragOffset = Y(A) - x.end;
    }
  }
  f = Ro(f);
  var Te = [];
  l = e.map(function(A, x) {
    var N = {
      element: fa(A),
      size: f[x],
      minSize: _[x],
      maxSize: v[x],
      snapOffset: $[x],
      i: x
    }, P;
    if (x > 0 && (P = {
      a: x - 1,
      b: x,
      dragging: !1,
      direction: E,
      parent: d
    }, P[Ft] = sn(
      w,
      x - 1 === 0,
      !1,
      C
    ), P[te] = sn(
      w,
      !1,
      x === e.length - 1,
      C
    ), u === "row-reverse" || u === "column-reverse")) {
      var dt = P.a;
      P.a = P.b, P.b = dt;
    }
    if (x > 0) {
      var et = H(x, E, N.element);
      F(et, w, x), P[gs] = Eh.bind(P), et[zt](
        "mousedown",
        P[gs]
      ), et[zt](
        "touchstart",
        P[gs]
      ), d.insertBefore(et, N.element), P.gutter = et;
    }
    return B(
      N.element,
      N.size,
      sn(
        w,
        x === 0,
        x === e.length - 1,
        C
      ),
      x
    ), x > 0 && Te.push(P), N;
  });
  function zo(A) {
    var x = A.i === Te.length, N = x ? Te[A.i - 1] : Te[A.i];
    ht.call(N);
    var P = x ? N.size - A.minSize - N[te] : A.minSize + N[Ft];
    q.call(N, P);
  }
  l.forEach(function(A) {
    var x = A.element[Ti]()[s];
    x < A.minSize && (b ? zo(A) : A.minSize = x);
  });
  function Mh(A) {
    var x = Ro(A);
    x.forEach(function(N, P) {
      if (P > 0) {
        var dt = Te[P - 1], et = l[dt.a], Ct = l[dt.b];
        et.size = x[P - 1], Ct.size = N, B(et.element, et.size, dt[Ft], et.i), B(Ct.element, Ct.size, dt[te], Ct.i);
      }
    });
  }
  function Ah(A, x) {
    Te.forEach(function(N) {
      if (x !== !0 ? N.parent.removeChild(N.gutter) : (N.gutter[Ot](
        "mousedown",
        N[gs]
      ), N.gutter[Ot](
        "touchstart",
        N[gs]
      )), A !== !0) {
        var P = M(
          s,
          N.a.size,
          N[Ft]
        );
        Object.keys(P).forEach(function(dt) {
          l[N.a].element.style[dt] = "", l[N.b].element.style[dt] = "";
        });
      }
    });
  }
  return {
    setSizes: Mh,
    getSizes: U,
    collapse: function(x) {
      zo(l[x]);
    },
    destroy: Ah,
    parent: d,
    pairs: Te
  };
};
function pa(n, t, e, s) {
  for (t = t - (e - 1) * s; n.length < e; )
    n.push(void 0);
  n = n.splice(0, e);
  const i = [], r = [];
  let o = 0;
  if (n.forEach((a, l) => {
    if (a == null) {
      r.push(l);
      return;
    }
    const [c, d] = Be(a);
    if (Number.isNaN(c)) {
      r.push(l);
      return;
    }
    const h = d === "%" ? t * c / 100 : c;
    o += h, i[l] = h;
  }), r.length) {
    const a = Math.max(1, (t - o) / r.length);
    r.forEach((l) => {
      i[l] = a, o += a;
    });
  }
  return i.map((a) => 100 * a / o);
}
class Zr extends ot {
  constructor() {
    super(...arguments), this._sizeBack = [];
  }
  get count() {
    return this._elements.length;
  }
  get isVertical() {
    return this.options.direction === "vertical" || !!this.options.vertical;
  }
  get totalSize() {
    return this.$element[this.isVertical ? "height" : "width"]();
  }
  isCollapsed(t) {
    return p(this._elements[t])[this.isVertical ? "height" : "width"]() < 1;
  }
  /**
   * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
   * It updates the sizes of the elements in the split.
   *
   * @param sizes Sizes of the elements in the split.
   */
  setSizes(t, e) {
    e || (t = pa(t, this.totalSize, this.count, this.options.gutterSize)), this._split.setSizes(t), this._update();
  }
  /**
   * getSizes returns an array of percents, suitable for using with setSizes or creation.
   *
   * @returns An array of percents, suitable for using with setSizes or creation.
   */
  getSizes() {
    return this._split.getSizes();
  }
  /**
   * collapse changes the size of element at index to 0.
   * Every element except the last is collapsed towards the front (left or top).
   * The last is collapsed towards the back.
   *
   * @param index Index of the element to collapse.
   */
  collapse(t) {
    this._sizeBack[t] = this.getSizes(), this._split.collapse(t), this._update();
  }
  expand(t) {
    const e = this.getSizes(), s = this._sizeBack[t];
    if (s) {
      e[t] = s[t];
      const i = t === this.count - 1 ? t - 1 : t + 1;
      e[i] = s[i];
    } else
      e[t] = 50;
    this.setSizes(e);
  }
  toggle(t) {
    this.isCollapsed(t) ? this.expand(t) : this.collapse(t);
  }
  afterInit() {
    const { elements: t = ".split-cell", toggleBtn: e, vertical: s, sizes: i, gutterSize: r = 8, animation: o, dblClickToggle: a, ...l } = this.options, c = (Array.isArray(t) ? t : [t]).reduce((u, f) => (f && (f instanceof HTMLElement ? u.push(f) : (typeof f == "string" ? this.$element.children(f) : p(f)).each((g, _) => {
      u.push(_);
    })), u), []);
    c.forEach((u) => p(u).addClass("split-cell")), this._elements = c, this._handleDragEnd = this._handleDragEnd.bind(this), this._createGutter = this._createGutter.bind(this);
    let d;
    i && (d = pa(i, this.totalSize, c.length, r)), this._split = ic(c, {
      direction: s ? "vertical" : "horizontal",
      sizes: d,
      gutterSize: r,
      ...l,
      onDragEnd: this._handleDragEnd,
      gutter: this._createGutter
    });
    const h = (u) => {
      const f = u.z("index"), { count: g } = this;
      this.toggle(f === g - 1 && g > 2 ? f : f - 1);
    };
    e && this.on("click", (u) => {
      const f = p(u.target).closest(".gutter-toggle");
      f.length && h(f.parent());
    }), a && this.on("dblclick", (u) => {
      const f = p(u.target).closest(".gutter");
      f.length && h(f);
    }), o && this.on("transitionend", this._update.bind(this, !1)), this._update();
  }
  /**
   * Destroy the instance. It removes the gutter elements, and the size CSS styles Split.js set.
   *
   * @param preserveStyles   Whether to preserve styles.
   * @param preserveGutters  Whether to preserve gutters.
   */
  destroy(t, e) {
    return super.destroy(), this.off("click transitionend"), this._raf && cancelAnimationFrame(this._raf), this._split.destroy(t, e);
  }
  render() {
    super.render(), this._update();
  }
  _update(t) {
    if (!t) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this._update(!0);
      });
      return;
    }
    const { animation: e, vertical: s, gutterSize: i } = this.options, r = this.isVertical || !!s;
    this.$element.css("--split-gutter-size", `${i}px`).toggleClass("split-vert", r).toggleClass("split-horz", !r).toggleClass("has-animation", !!e), this._elements.forEach((o, a) => {
      const l = this.isCollapsed(a), c = p(this._elements[a]).toggleClass("is-collapsed", l);
      c.prev(".gutter").toggleClass("is-next-collapsed", l), c.next(".gutter").toggleClass("is-prev-collapsed", l);
    });
  }
  _createGutter(t, e) {
    const { toggleBtn: s } = this.options, { count: i } = this, r = p(`<div class="gutter gutter-${e === "vertical" ? "vert" : "horz"}" />`).z("index", t).toggleClass("is-first", t === 1).toggleClass("is-last", t === i - 1);
    return (s === !0 || Array.isArray(s) && s[t]) && r.append('<button class="gutter-toggle" type="button"><span class="chevron-left"></span></button>'), r[0];
  }
  _handleDragEnd(t) {
    var e, s;
    this._update(), (s = (e = this.options).onDragEnd) == null || s.call(e, t);
  }
}
Zr.NAME = "Split";
Zr.DEFAULT = {
  gutterSize: 8,
  dblClickToggle: !0
};
Zr.SplitJS = ic;
class rc extends W {
}
rc.NAME = "Avatar";
rc.Component = Vs;
ct(Su);
class oc extends W {
}
oc.NAME = "BtnGroup";
oc.Component = Bt;
const ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Bt
}, Symbol.toStringTag, { value: "Module" }));
ct(ju);
const ac = Symbol("EVENT_PICK");
class Qr extends j {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!p(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let r = s === "open" ? !0 : void 0;
    const o = p(t.target), a = i == null ? void 0 : i(t);
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
    return k(
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
        p(`#${o}`).val(s);
      else
        return /* @__PURE__ */ m("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    p(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (typeof s == "symbol")
        return;
      const i = p.isPlainObject(s) && typeof s.setValue == "string" ? s.setValue : e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    p(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && p(`#${e}`).trigger("change", ac), this._skipTriggerChange = !1);
  }
  render(t) {
    return Pt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const be = Math.min, Tt = Math.max, xn = Math.round, nn = Math.floor, Jt = (n) => ({
  x: n,
  y: n
}), Uu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Vu = {
  start: "end",
  end: "start"
};
function Qi(n, t, e) {
  return Tt(n, be(t, e));
}
function as(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function we(n) {
  return n.split("-")[0];
}
function ls(n) {
  return n.split("-")[1];
}
function lc(n) {
  return n === "x" ? "y" : "x";
}
function to(n) {
  return n === "y" ? "height" : "width";
}
function ze(n) {
  return ["top", "bottom"].includes(we(n)) ? "y" : "x";
}
function eo(n) {
  return lc(ze(n));
}
function Ku(n, t, e) {
  e === void 0 && (e = !1);
  const s = ls(n), i = eo(n), r = to(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = $n(o)), [o, $n(o)];
}
function Gu(n) {
  const t = $n(n);
  return [tr(n), t, tr(t)];
}
function tr(n) {
  return n.replace(/start|end/g, (t) => Vu[t]);
}
function qu(n, t, e) {
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
function Yu(n, t, e, s) {
  const i = ls(n);
  let r = qu(we(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(tr)))), r;
}
function $n(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Uu[t]);
}
function Ju(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function cc(n) {
  return typeof n != "number" ? Ju(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Tn(n) {
  const {
    x: t,
    y: e,
    width: s,
    height: i
  } = n;
  return {
    width: s,
    height: i,
    top: e,
    left: t,
    right: t + s,
    bottom: e + i,
    x: t,
    y: e
  };
}
function ma(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = ze(t), o = eo(t), a = to(o), l = we(t), c = r === "y", d = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, u = s[a] / 2 - i[a] / 2;
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
  switch (ls(t)) {
    case "start":
      f[o] -= u * (e && c ? -1 : 1);
      break;
    case "end":
      f[o] += u * (e && c ? -1 : 1);
      break;
  }
  return f;
}
const Xu = async (n, t, e) => {
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
  } = ma(c, s, l), u = s, f = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: y,
      fn: v
    } = a[_], {
      x: b,
      y: w,
      data: C,
      reset: S
    } = await v({
      x: d,
      y: h,
      initialPlacement: s,
      placement: u,
      strategy: i,
      middlewareData: f,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    d = b ?? d, h = w ?? h, f = {
      ...f,
      [y]: {
        ...f[y],
        ...C
      }
    }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (u = S.placement), S.rects && (c = S.rects === !0 ? await o.getElementRects({
      reference: n,
      floating: t,
      strategy: i
    }) : S.rects), {
      x: d,
      y: h
    } = ma(c, u, l)), _ = -1);
  }
  return {
    x: d,
    y: h,
    placement: u,
    strategy: i,
    middlewareData: f
  };
};
async function so(n, t) {
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
    altBoundary: u = !1,
    padding: f = 0
  } = as(t, n), g = cc(f), y = a[u ? h === "floating" ? "reference" : "floating" : h], v = Tn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(y))) == null || e ? y : y.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    x: s,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, w = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), C = await (r.isElement == null ? void 0 : r.isElement(w)) ? await (r.getScale == null ? void 0 : r.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Tn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (v.top - S.top + g.top) / C.y,
    bottom: (S.bottom - v.bottom + g.bottom) / C.y,
    left: (v.left - S.left + g.left) / C.x,
    right: (S.right - v.right + g.right) / C.x
  };
}
const Zu = (n) => ({
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
    } = as(n, t) || {};
    if (c == null)
      return {};
    const h = cc(d), u = {
      x: e,
      y: s
    }, f = eo(i), g = to(f), _ = await o.getDimensions(c), y = f === "y", v = y ? "top" : "left", b = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", C = r.reference[g] + r.reference[f] - u[f] - r.floating[g], S = u[f] - r.reference[f], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let I = $ ? $[w] : 0;
    (!I || !await (o.isElement == null ? void 0 : o.isElement($))) && (I = a.floating[w] || r.floating[g]);
    const E = C / 2 - S / 2, D = I / 2 - _[g] / 2 - 1, H = be(h[v], D), M = be(h[b], D), z = H, B = I - _[g] - M, F = I / 2 - _[g] / 2 + E, U = Qi(z, F, B), Y = !l.arrow && ls(i) != null && F !== U && r.reference[g] / 2 - (F < z ? H : M) - _[g] / 2 < 0, q = Y ? F < z ? F - z : F - B : 0;
    return {
      [f]: u[f] + q,
      data: {
        [f]: U,
        centerOffset: F - U - q,
        ...Y && {
          alignmentOffset: q
        }
      },
      reset: Y
    };
  }
}), Qu = function(n) {
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
        fallbackPlacements: u,
        fallbackStrategy: f = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: _ = !0,
        ...y
      } = as(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const v = we(i), b = ze(a), w = we(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = u || (w || !_ ? [$n(a)] : Gu(a)), $ = g !== "none";
      !u && $ && S.push(...Yu(a, _, g, C));
      const I = [a, ...S], E = await so(t, y), D = [];
      let H = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (d && D.push(E[v]), h) {
        const F = Ku(i, o, C);
        D.push(E[F[0]], E[F[1]]);
      }
      if (H = [...H, {
        placement: i,
        overflows: D
      }], !D.every((F) => F <= 0)) {
        var M, z;
        const F = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, U = I[F];
        if (U)
          return {
            data: {
              index: F,
              overflows: H
            },
            reset: {
              placement: U
            }
          };
        let Y = (z = H.filter((q) => q.overflows[0] <= 0).sort((q, L) => q.overflows[1] - L.overflows[1])[0]) == null ? void 0 : z.placement;
        if (!Y)
          switch (f) {
            case "bestFit": {
              var B;
              const q = (B = H.filter((L) => {
                if ($) {
                  const ht = ze(L.placement);
                  return ht === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ht === "y";
                }
                return !0;
              }).map((L) => [L.placement, L.overflows.filter((ht) => ht > 0).reduce((ht, ps) => ht + ps, 0)]).sort((L, ht) => L[1] - ht[1])[0]) == null ? void 0 : B[0];
              q && (Y = q);
              break;
            }
            case "initialPlacement":
              Y = a;
              break;
          }
        if (i !== Y)
          return {
            reset: {
              placement: Y
            }
          };
      }
      return {};
    }
  };
};
async function tf(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = we(e), a = ls(e), l = ze(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = as(t, n);
  let {
    mainAxis: u,
    crossAxis: f,
    alignmentAxis: g
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof g == "number" && (f = a === "end" ? g * -1 : g), l ? {
    x: f * d,
    y: u * c
  } : {
    x: u * c,
    y: f * d
  };
}
const ef = function(n) {
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
      } = t, l = await tf(t, n);
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
}, sf = function(n) {
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
      } = as(n, t), c = {
        x: e,
        y: s
      }, d = await so(t, l), h = ze(we(i)), u = lc(h);
      let f = c[u], g = c[h];
      if (r) {
        const y = u === "y" ? "top" : "left", v = u === "y" ? "bottom" : "right", b = f + d[y], w = f - d[v];
        f = Qi(b, f, w);
      }
      if (o) {
        const y = h === "y" ? "top" : "left", v = h === "y" ? "bottom" : "right", b = g + d[y], w = g - d[v];
        g = Qi(b, g, w);
      }
      const _ = a.fn({
        ...t,
        [u]: f,
        [h]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - s,
          enabled: {
            [u]: r,
            [h]: o
          }
        }
      };
    }
  };
}, nf = function(n) {
  return n === void 0 && (n = {}), {
    name: "size",
    options: n,
    async fn(t) {
      var e, s;
      const {
        placement: i,
        rects: r,
        platform: o,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...c
      } = as(n, t), d = await so(t, c), h = we(i), u = ls(i), f = ze(i) === "y", {
        width: g,
        height: _
      } = r.floating;
      let y, v;
      h === "top" || h === "bottom" ? (y = h, v = u === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (v = h, y = u === "end" ? "top" : "bottom");
      const b = _ - d.top - d.bottom, w = g - d.left - d.right, C = be(_ - d[y], b), S = be(g - d[v], w), $ = !t.middlewareData.shift;
      let I = C, E = S;
      if ((e = t.middlewareData.shift) != null && e.enabled.x && (E = w), (s = t.middlewareData.shift) != null && s.enabled.y && (I = b), $ && !u) {
        const H = Tt(d.left, 0), M = Tt(d.right, 0), z = Tt(d.top, 0), B = Tt(d.bottom, 0);
        f ? E = g - 2 * (H !== 0 || M !== 0 ? H + M : Tt(d.left, d.right)) : I = _ - 2 * (z !== 0 || B !== 0 ? z + B : Tt(d.top, d.bottom));
      }
      await l({
        ...t,
        availableWidth: E,
        availableHeight: I
      });
      const D = await o.getDimensions(a.floating);
      return g !== D.width || _ !== D.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function ri() {
  return typeof window < "u";
}
function cs(n) {
  return hc(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function Nt(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Qt(n) {
  var t;
  return (t = (hc(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function hc(n) {
  return ri() ? n instanceof Node || n instanceof Nt(n).Node : !1;
}
function Ut(n) {
  return ri() ? n instanceof Element || n instanceof Nt(n).Element : !1;
}
function Xt(n) {
  return ri() ? n instanceof HTMLElement || n instanceof Nt(n).HTMLElement : !1;
}
function ga(n) {
  return !ri() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Nt(n).ShadowRoot;
}
function qs(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = Vt(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function rf(n) {
  return ["table", "td", "th"].includes(cs(n));
}
function oi(n) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
function no(n) {
  const t = io(), e = Ut(n) ? Vt(n) : n;
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function of(n) {
  let t = Ce(n);
  for (; Xt(t) && !es(t); ) {
    if (no(t))
      return t;
    if (oi(t))
      return null;
    t = Ce(t);
  }
  return null;
}
function io() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function es(n) {
  return ["html", "body", "#document"].includes(cs(n));
}
function Vt(n) {
  return Nt(n).getComputedStyle(n);
}
function ai(n) {
  return Ut(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Ce(n) {
  if (cs(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    ga(n) && n.host || // Fallback.
    Qt(n)
  );
  return ga(t) ? t.host : t;
}
function dc(n) {
  const t = Ce(n);
  return es(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Xt(t) && qs(t) ? t : dc(t);
}
function As(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = dc(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = Nt(i);
  if (r) {
    const a = er(o);
    return t.concat(o, o.visualViewport || [], qs(i) ? i : [], a && e ? As(a) : []);
  }
  return t.concat(i, As(i, [], e));
}
function er(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function uc(n) {
  const t = Vt(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Xt(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = xn(e) !== r || xn(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function ro(n) {
  return Ut(n) ? n : n.contextElement;
}
function Ye(n) {
  const t = ro(n);
  if (!Xt(t))
    return Jt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = uc(t);
  let o = (r ? xn(e.width) : e.width) / s, a = (r ? xn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const af = /* @__PURE__ */ Jt(0);
function fc(n) {
  const t = Nt(n);
  return !io() || !t.visualViewport ? af : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function lf(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== Nt(n) ? !1 : t;
}
function Oe(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = ro(n);
  let o = Jt(1);
  t && (s ? Ut(s) && (o = Ye(s)) : o = Ye(n));
  const a = lf(r, e, s) ? fc(r) : Jt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const u = Nt(r), f = s && Ut(s) ? Nt(s) : s;
    let g = u, _ = er(g);
    for (; _ && s && f !== g; ) {
      const y = Ye(_), v = _.getBoundingClientRect(), b = Vt(_), w = v.left + (_.clientLeft + parseFloat(b.paddingLeft)) * y.x, C = v.top + (_.clientTop + parseFloat(b.paddingTop)) * y.y;
      l *= y.x, c *= y.y, d *= y.x, h *= y.y, l += w, c += C, g = Nt(_), _ = er(g);
    }
  }
  return Tn({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function oo(n, t) {
  const e = ai(n).scrollLeft;
  return t ? t.left + e : Oe(Qt(n)).left + e;
}
function pc(n, t, e) {
  e === void 0 && (e = !1);
  const s = n.getBoundingClientRect(), i = s.left + t.scrollLeft - (e ? 0 : (
    // RTL <body> scrollbar.
    oo(n, s)
  )), r = s.top + t.scrollTop;
  return {
    x: i,
    y: r
  };
}
function cf(n) {
  let {
    elements: t,
    rect: e,
    offsetParent: s,
    strategy: i
  } = n;
  const r = i === "fixed", o = Qt(s), a = t ? oi(t.floating) : !1;
  if (s === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Jt(1);
  const d = Jt(0), h = Xt(s);
  if ((h || !h && !r) && ((cs(s) !== "body" || qs(o)) && (l = ai(s)), Xt(s))) {
    const f = Oe(s);
    c = Ye(s), d.x = f.x + s.clientLeft, d.y = f.y + s.clientTop;
  }
  const u = o && !h && !r ? pc(o, l, !0) : Jt(0);
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + d.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + d.y + u.y
  };
}
function hf(n) {
  return Array.from(n.getClientRects());
}
function df(n) {
  const t = Qt(n), e = ai(n), s = n.ownerDocument.body, i = Tt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = Tt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + oo(n);
  const a = -e.scrollTop;
  return Vt(s).direction === "rtl" && (o += Tt(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function uf(n, t) {
  const e = Nt(n), s = Qt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = io();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function ff(n, t) {
  const e = Oe(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = Xt(n) ? Ye(n) : Jt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function _a(n, t, e) {
  let s;
  if (t === "viewport")
    s = uf(n, e);
  else if (t === "document")
    s = df(Qt(n));
  else if (Ut(t))
    s = ff(t, e);
  else {
    const i = fc(n);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Tn(s);
}
function mc(n, t) {
  const e = Ce(n);
  return e === t || !Ut(e) || es(e) ? !1 : Vt(e).position === "fixed" || mc(e, t);
}
function pf(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = As(n, [], !1).filter((a) => Ut(a) && cs(a) !== "body"), i = null;
  const r = Vt(n).position === "fixed";
  let o = r ? Ce(n) : n;
  for (; Ut(o) && !es(o); ) {
    const a = Vt(o), l = no(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || qs(o) && !l && mc(n, o)) ? s = s.filter((d) => d !== o) : i = a, o = Ce(o);
  }
  return t.set(n, s), s;
}
function mf(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? oi(t) ? [] : pf(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, d) => {
    const h = _a(t, d, i);
    return c.top = Tt(h.top, c.top), c.right = be(h.right, c.right), c.bottom = be(h.bottom, c.bottom), c.left = Tt(h.left, c.left), c;
  }, _a(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function gf(n) {
  const {
    width: t,
    height: e
  } = uc(n);
  return {
    width: t,
    height: e
  };
}
function _f(n, t, e) {
  const s = Xt(t), i = Qt(t), r = e === "fixed", o = Oe(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jt(0);
  if (s || !s && !r)
    if ((cs(t) !== "body" || qs(i)) && (a = ai(t)), s) {
      const u = Oe(t, !0, r, t);
      l.x = u.x + t.clientLeft, l.y = u.y + t.clientTop;
    } else
      i && (l.x = oo(i));
  const c = i && !s && !r ? pc(i, a) : Jt(0), d = o.left + a.scrollLeft - l.x - c.x, h = o.top + a.scrollTop - l.y - c.y;
  return {
    x: d,
    y: h,
    width: o.width,
    height: o.height
  };
}
function Ni(n) {
  return Vt(n).position === "static";
}
function ya(n, t) {
  if (!Xt(n) || Vt(n).position === "fixed")
    return null;
  if (t)
    return t(n);
  let e = n.offsetParent;
  return Qt(n) === e && (e = e.ownerDocument.body), e;
}
function gc(n, t) {
  const e = Nt(n);
  if (oi(n))
    return e;
  if (!Xt(n)) {
    let i = Ce(n);
    for (; i && !es(i); ) {
      if (Ut(i) && !Ni(i))
        return i;
      i = Ce(i);
    }
    return e;
  }
  let s = ya(n, t);
  for (; s && rf(s) && Ni(s); )
    s = ya(s, t);
  return s && es(s) && Ni(s) && !no(s) ? e : s || of(n) || e;
}
const yf = async function(n) {
  const t = this.getOffsetParent || gc, e = this.getDimensions, s = await e(n.floating);
  return {
    reference: _f(n.reference, await t(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function vf(n) {
  return Vt(n).direction === "rtl";
}
const bf = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cf,
  getDocumentElement: Qt,
  getClippingRect: mf,
  getOffsetParent: gc,
  getElementRects: yf,
  getClientRects: hf,
  getDimensions: gf,
  getScale: Ye,
  isElement: Ut,
  isRTL: vf
};
function wf(n, t) {
  let e = null, s;
  const i = Qt(n);
  function r() {
    var a;
    clearTimeout(s), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: u
    } = n.getBoundingClientRect();
    if (a || t(), !h || !u)
      return;
    const f = nn(d), g = nn(i.clientWidth - (c + h)), _ = nn(i.clientHeight - (d + u)), y = nn(c), b = {
      rootMargin: -f + "px " + -g + "px " + -_ + "px " + -y + "px",
      threshold: Tt(0, be(1, l)) || 1
    };
    let w = !0;
    function C(S) {
      const $ = S[0].intersectionRatio;
      if ($ !== l) {
        if (!w)
          return o();
        $ ? o(!1, $) : s = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      e = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(C, b);
    }
    e.observe(n);
  }
  return o(!0), r;
}
function _c(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = ro(n), d = i || r ? [...c ? As(c) : [], ...As(t)] : [];
  d.forEach((v) => {
    i && v.addEventListener("scroll", e, {
      passive: !0
    }), r && v.addEventListener("resize", e);
  });
  const h = c && a ? wf(c, e) : null;
  let u = -1, f = null;
  o && (f = new ResizeObserver((v) => {
    let [b] = v;
    b && b.target === c && f && (f.unobserve(t), cancelAnimationFrame(u), u = requestAnimationFrame(() => {
      var w;
      (w = f) == null || w.observe(t);
    })), e();
  }), c && !l && f.observe(c), f.observe(t));
  let g, _ = l ? Oe(n) : null;
  l && y();
  function y() {
    const v = Oe(n);
    _ && (v.x !== _.x || v.y !== _.y || v.width !== _.width || v.height !== _.height) && e(), _ = v, g = requestAnimationFrame(y);
  }
  return e(), () => {
    var v;
    d.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (v = f) == null || v.disconnect(), f = null, l && cancelAnimationFrame(g);
  };
}
const ao = ef, lo = sf, co = Qu, yc = nf, Cf = Zu, ho = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: bf,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return Xu(n, t, {
    ...i,
    platform: r
  });
};
class vc extends j {
  constructor(t) {
    super(t), this._ref = V(), this._handleDocClick = (e) => {
      const { state: { open: s }, id: i, togglePop: r } = this.props, o = p(e.target);
      s !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return p(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e, onClickItem: s, state: i } = this.props, r = p(t.target), o = r.closest("[data-pick-value]");
    if (s && s(t, i.value), o.length)
      return t.stopPropagation(), e(!1, { value: `${o.dataset("pickValue")}` });
    if (r.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: s, pickerName: i, empty: r } = t, { open: o } = s;
    return k(
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
    } = t, l = p.extend({
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
      const e = p(t.container || "body");
      let s = e.find(".pick-container");
      s.length || (s = p("<div>").addClass("pick-container").appendTo(e)), this._container = s[0];
    }
    return this._container;
  }
  _renderHeader(t) {
    const { header: e } = t;
    return e ? /* @__PURE__ */ m(R, { component: "header", className: "pick-pop-header", content: e }, "header") : null;
  }
  _renderFooter(t) {
    const { footer: e } = t;
    return e ? /* @__PURE__ */ m(R, { component: "footer", className: "pick-pop-footer", content: e }, "footer") : null;
  }
  _render(t) {
    return /* @__PURE__ */ m("div", { ...this._getProps(t), children: [
      this._renderHeader(t),
      this._renderPop(t),
      this._renderFooter(t)
    ] });
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
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = tt(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let d;
      if (e.includes("bottom"))
        d = window.innerHeight - s.bottom - 2;
      else {
        const h = this.element.getBoundingClientRect().height;
        d = s.top, h > d && typeof t.top == "number" && (t.top += h - d);
      }
      d && (t.maxHeight = typeof a == "number" ? Math.min(d, a) : d);
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
    this._layoutWatcher || (this._layoutWatcher = _c(e, t, () => {
      const { placement: r, width: o, noFlipAfterShow: a } = s, l = this._lastPlacement;
      ho(e, t, {
        placement: a && l ? l : !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" && (!a || !l) ? co() : null, lo(), ao(1)].filter(Boolean)
      }).then(({ x: c, y: d, placement: h }) => {
        var u, f;
        if ($e(e) || !Bs(e, { checkZeroSize: !0 })) {
          p(t).css({ display: "none" });
          return;
        }
        p(t).css(this._getStyle({
          left: c,
          top: d
        }, h)), (f = (u = this.props).onLayout) == null || f.call(u, t), l || (this._lastPlacement = h);
      }), o === "100%" && p(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), p(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, s;
    p(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, p(`#pick-pop-${this.props.id}`).remove(), (s = (e = this.props).beforeDestroy) == null || s.call(e);
  }
  render(t) {
    return gu(this._render(t), this._getContainer(t));
  }
}
let Rt = class extends j {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = V(), this._trigger = V(), this.toggle = async (e, s) => {
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
      return o === "closing" ? (await yn(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await yn(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${wt()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
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
  getDefaultState(t) {
    return {
      value: String((t || this.props).defaultValue ?? ""),
      open: !1
    };
  }
  resetState(t, e) {
    const s = this.getDefaultState(t);
    e ? this.state = s : this.changeState(s);
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
      limitInScreen: t.limitPopInScreen,
      onClickItem: t.onClickItem,
      header: t.popHeader,
      footer: t.popFooter
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
      r = /* @__PURE__ */ m(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ m(We, { children: [
      /* @__PURE__ */ m(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Rt.Trigger = Qr;
Rt.Pop = vc;
Rt.defaultProps = {
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
let bc = class extends Rt {
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === void 0 && (t || this.props).required && (e.value = this.getColors()[0]), e;
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
    if (t && p(t).css("backgroundColor", r), e && p(e).css("borderColor", r), s && p(s).css("color", r), i) {
      const o = p(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s, hint: i = "" } = t, { value: r } = e;
    return [
      s ? /* @__PURE__ */ m(nt, { icon: s, title: i }, "icon") : /* @__PURE__ */ m("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: r }, title: i })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = p.extend({
      color: e.value
    }, s.style), s.className = k("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ m("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ m("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ m("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ m("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ m(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ m("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ m(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
bc.defaultProps = {
  ...Rt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class uo extends W {
}
uo.NAME = "ColorPicker";
uo.Component = bc;
uo.register();
class wc extends j {
  constructor() {
    super(...arguments), this._ref = V(), this._handleClickItem = (t, e) => {
      var s, i;
      (i = (s = this.props).onChange) == null || i.call(s, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      p(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: s, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: s === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ m("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ m(
        Mt,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ m(
        Mt,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const va = (n) => {
  if (!n)
    return;
  const t = Q(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Cc = class extends Rt {
  constructor() {
    super(...arguments), this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setTime(t.target.value);
    }, this._handleSetTime = (t, e) => {
      this.setTime({ [t]: String(e) });
    }, this._handleClearBtnClick = () => {
      this.setTime("");
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return e.value === "now" && (e.value = jt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
  }
  setTime(t, e) {
    if (!e && (this.props.disabled || this.props.readonly))
      return;
    let s = "";
    if (typeof t == "string")
      s = t;
    else {
      const [c, d] = (this.state.value || "00:00").split(":"), { hour: h = +c, minute: u = +d } = t;
      s = `${h}:${u}`;
    }
    const i = va(s), { onInvalid: r, required: o, defaultValue: a, format: l } = this.props;
    return this.changeState({ value: i ? jt(i, l) : o ? a : "" }, () => {
      !i && r && r(s);
    });
  }
  setValue(t, e) {
    if (e) {
      const s = this._trigger.current;
      s && (s._skipTriggerChange = t);
    }
    return this.setTime(t, !0);
  }
  getTime() {
    const t = va(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ m("i", { class: "i-time" }) : h = /* @__PURE__ */ m(nt, { icon: i })), [
      /* @__PURE__ */ m("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ m("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: k(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ m(wc, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Cc.defaultProps = {
  ...Rt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function Sf(n, t, e) {
  return t && n < t ? t : e && n > e ? e : n;
}
function ks(n) {
  if (n == null)
    return null;
  if (typeof n == "function" && (n = n()), typeof n == "string" && n.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    n.length > 6 ? n = Yd(t, n.substring(5).replace("+", "")) : n = t;
  } else
    n = Q(n);
  return El(n) ? n : null;
}
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
const kf = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * Es;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, ba = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => jt(e, t)));
class xf extends j {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const s = p(t.target).closest(".mini-calendar-day").dataset("date");
      s && e(s);
    };
  }
  render(t) {
    var H, M;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: s = 1,
      weekNames: i = J.getLang("weekNames"),
      monthNames: r = J.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: d,
      minDate: h,
      isAllowDate: u
    } = t, f = [], g = "btn ghost square rounded-full";
    for (let z = 0; z < 7; z++) {
      const B = (s + z) % 7;
      f.push(/* @__PURE__ */ m("div", { className: k("col mini-calendar-day", { "is-weekend": B === 0 || B === 6 }), children: /* @__PURE__ */ m("div", { children: i ? i[B] : B }) }, z));
    }
    const { startTime: _, days: y, firstDay: v } = kf(o, a, s), b = v + y * Es;
    let w = _;
    const C = [], S = "yyyy-MM-dd", $ = ba(l, S), I = ba(c, S), E = ((H = d ? Q(d) : null) == null ? void 0 : H.getTime()) ?? Number.MAX_SAFE_INTEGER, D = ((M = h ? Q(h) : null) == null ? void 0 : M.getTime()) ?? 0;
    for (; w <= b; ) {
      const z = [];
      for (let B = 0; B < 7; B++) {
        const F = new Date(w);
        let U = (u == null ? void 0 : u(F)) ?? !0;
        typeof U == "boolean" && (U = { allow: U });
        const Y = F.getDate(), q = jt(F, S), L = F.getDay(), ht = Nl(F, v), ps = k("col mini-calendar-day", {
          active: $.has(q),
          selected: I.has(q),
          "is-first": Y === 1,
          "is-in-month": ht,
          "is-out-month": !ht,
          "is-today": Le(F, e),
          "is-weekend": L === 0 || L === 6,
          disabled: !U.allow || (w > E || w < D) && !Le(F, E) && !Le(F, D)
        });
        z.push(
          /* @__PURE__ */ m("div", { className: ps, "data-date": q, children: /* @__PURE__ */ m("button", { type: "button", className: g, onClick: this._handleClickDate, title: U.hint, children: Y === 1 && r ? r[F.getMonth()] : F.getDate() }) }, q)
        ), w += Es;
      }
      C.push(/* @__PURE__ */ m("div", { className: "row", children: z }, w));
    }
    return /* @__PURE__ */ m("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ m("div", { className: "row", children: f }),
      C
    ] });
  }
}
var Rn, zn;
class wa extends j {
  constructor() {
    super(...arguments);
    St(this, Rn, V());
    St(this, zn, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const r = p(e.target).closest("[data-value]").dataset("value");
      r && (s(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: s, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ m(rt, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: bt(this, zn), children: c }, c));
    return /* @__PURE__ */ m("div", { className: s, ref: bt(this, Rn), children: a });
  }
}
Rn = new WeakMap(), zn = new WeakMap();
var Rs, zs, Os, Fs, Hs, Ws, On, Sc, Fn, kc;
class $f extends j {
  constructor(e) {
    super(e);
    St(this, On);
    St(this, Fn);
    St(this, Rs, void 0);
    St(this, zs, void 0);
    St(this, Os, void 0);
    St(this, Fs, void 0);
    St(this, Hs, void 0);
    St(this, Ws, void 0);
    It(this, Rs, V()), It(this, zs, (r) => {
      const o = p(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), It(this, Os, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), It(this, Fs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), It(this, Hs, (r) => {
      this.setState({ year: r, select: "day" });
    }), It(this, Ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: s } = e, i = ks(s) || /* @__PURE__ */ new Date();
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
      yearText: r = J.getLang("yearFormat") || "{0}",
      weekNames: o = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: d
    } = e, h = ks(i), {
      year: u,
      month: f,
      select: g
    } = s, _ = g === "day", y = l || Q("1970-1-1"), v = c || Q("2099-12-31");
    return /* @__PURE__ */ m("div", { className: "date-picker-menu row", ref: bt(this, Rs), onClick: bt(this, zs), children: [
      _i(this, On, Sc).call(this, e),
      /* @__PURE__ */ m("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ m("div", { className: "row p-2", children: [
          /* @__PURE__ */ m(rt, { type: g === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: X(r, u) }),
          /* @__PURE__ */ m(rt, { type: g === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[f - 1] : f }),
          /* @__PURE__ */ m("div", { className: "flex-auto" }),
          _ ? /* @__PURE__ */ m("div", { children: [
            /* @__PURE__ */ m(rt, { type: "ghost", size: "sm", square: !0, onClick: bt(this, Os), children: /* @__PURE__ */ m("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ m(rt, { type: "ghost", size: "sm", square: !0, onClick: bt(this, Fs), children: /* @__PURE__ */ m("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        _ ? /* @__PURE__ */ m(
          xf,
          {
            weekStart: d,
            weekNames: o,
            monthNames: a,
            maxDate: v,
            minDate: y,
            year: u,
            month: f,
            selections: h || [],
            onClickDate: this.changeDate,
            isAllowDate: e.isAllowDate
          }
        ) : null,
        g === "year" ? /* @__PURE__ */ m(
          wa,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: y.getFullYear(),
            max: v.getFullYear(),
            onChange: bt(this, Hs)
          }
        ) : g === "month" ? /* @__PURE__ */ m(
          wa,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: 1,
            max: 12,
            onChange: bt(this, Ws)
          }
        ) : null,
        _ ? _i(this, Fn, kc).call(this, e) : null
      ] })
    ] });
  }
}
Rs = new WeakMap(), zs = new WeakMap(), Os = new WeakMap(), Fs = new WeakMap(), Hs = new WeakMap(), Ws = new WeakMap(), On = new WeakSet(), Sc = function(e) {
  return Mt.render(e.menu, [], {
    onClickItem: (s) => {
      const i = s.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Fn = new WeakSet(), kc = function(e) {
  let { actions: s } = e;
  const { todayText: i = J.getLang("today"), clearText: r } = e;
  return s === void 0 && (s = [{ text: i, "data-set-date": jt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ m("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ m(yt, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ m(rt, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let li = class extends Rt {
  constructor() {
    super(...arguments), this.setDate = (t, e) => {
      const { disabled: s, readonly: i } = this.props;
      if (!e && (s || i))
        return;
      const r = this._calcValue(t);
      return this.changeState({ value: r }, () => {
        this._afterSetDate();
      });
    }, this._handleInputFocus = () => {
      this.toggle(!0);
    }, this._handleInputChange = (t) => {
      this.setDate(t.target.value);
    }, this._handleClearBtnClick = () => {
      this.setDate("");
    }, this._handleSetDate = (t) => {
      this.setDate(t);
    };
  }
  getDefaultState(t) {
    const e = super.getDefaultState(t);
    return {
      ...e,
      value: this._calcValue(e.value)
    };
  }
  getDate() {
    return this._date;
  }
  setValue(t, e) {
    if (e) {
      const s = this._trigger.current;
      s && (s._skipTriggerChange = t);
    }
    return this.setDate(t, !0);
  }
  _calcValue(t) {
    const { onInvalid: e, defaultValue: s = "", required: i, allowInvalid: r, format: o } = this.props;
    let a = this._parseDate(t);
    if (!a && e) {
      const l = e(t);
      l && (a = this._parseDate(l));
    }
    return this._date = a, a ? jt(a, o) : r ? t : i ? s : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: s } = this.props;
    return [ks(typeof e == "function" ? e(t) : e), ks(typeof s == "function" ? s(t) : s)];
  }
  _parseDate(t) {
    const e = ks(t);
    return e && this._isAllowDate(e) ? Sf(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: d } = e, h = `date-picker-${this.id}`;
    let u;
    d && !r && c.length ? u = /* @__PURE__ */ m("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ m("span", { className: "close" }) }) : i && (i === !0 ? u = /* @__PURE__ */ m("i", { class: "i-calendar" }) : u = /* @__PURE__ */ m(nt, { icon: i }));
    const f = d ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ m(
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
      u ? /* @__PURE__ */ m("label", { for: h, className: "input-control-suffix", children: u }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: k(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: k(s.className, "popup")
    };
  }
  _isAllowDate(t) {
    var s;
    const e = ((s = this.props.isAllowDate) == null ? void 0 : s.call(this, t)) ?? !0;
    return e === !0 || typeof e == "object" && e && e.allow;
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: d, required: h, isAllowDate: u } = t, [f, g] = this._getDateRange(e.value);
    return /* @__PURE__ */ m(
      $f,
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
        actions: d,
        minDate: f,
        maxDate: g,
        isAllowDate: u ? this._isAllowDate.bind(this) : void 0
      }
    );
  }
};
li.defaultProps = {
  ...Rt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let xc = class extends li {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = Q(t), s = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(s.getHours()), e.setMinutes(s.getMinutes()), this.setDate(jt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const s = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? s.setHours(e) : s.setMinutes(e), this.setDate(jt(s, this.props.format));
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
    return /* @__PURE__ */ m("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ m("div", { className: "divider" }),
      /* @__PURE__ */ m(
        wc,
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
xc.defaultProps = {
  ...li.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class fo extends W {
}
fo.NAME = "TimePicker";
fo.Component = Cc;
fo.register();
class po extends W {
}
po.NAME = "DatePicker";
po.Component = li;
po.register();
class mo extends W {
}
mo.NAME = "DatetimePicker";
mo.Component = xc;
mo.register();
const Ca = "show", Ei = "in", Tf = '[data-dismiss="modal"]', rn = "modal-hide", hs = class Ae extends ot {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(Tf) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
  _cancelObserver() {
    var t;
    (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && (this.show(), this._observeResize()), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      const s = t.target.closest(".modal") === e;
      s && this._cancelObserver(), s && !Ae.getAll().some((i) => i.shown) && p("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && (this._observeResize(), p("html").disableScroll());
    }), this.shown && p("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._cancelObserver();
  }
  show(t) {
    var c;
    const { modalElement: e } = this, s = p(e);
    if (this._shown && s.hasClass(Ei))
      return s.removeClass(rn).css("z-index", `${Ae.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [rn]: !1
    }, Ca, o).css({
      zIndex: `${Ae.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((d) => {
      d !== this && d.shown && !s.closest(d.modalElement).length && d.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((d) => {
      d !== this && !s.closest(d.modalElement).length && d.hide();
    }), this.layout(), (c = this.options.onShow) == null || c.call(this), this.emit("show"), this._setTimer(() => {
      s.addClass(Ei), this._setTimer(() => {
        var d, h;
        (d = s.find("[autofocus]")[0]) == null || d.focus(), (h = this.options.onShown) == null || h.call(this), this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    p(this.modalElement).addClass(rn);
  }
  hide() {
    var e;
    if (!this._shown || (this._shown = !1, p(this.modalElement).removeClass(Ei), ((e = this.options.onHide) == null ? void 0 : e.call(this)) === !1))
      return !1;
    this.emit("hide"), this._setTimer(() => {
      var s;
      p(this.modalElement).removeClass(Ca), (s = this.options.onHidden) == null || s.call(this), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((s) => {
      s.shown && s !== this && p(s.modalElement).removeClass(rn);
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = p(s);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), p(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return Ae.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = Ae.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ae.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
hs.NAME = "Modal";
hs.MULTI_INSTANCE = !0;
hs.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
hs.hideOthers = !0;
hs.zIndex = 1500;
let Is = hs;
p(window).on(`resize.${Is.NAMESPACE}`, () => {
  Is.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class $c extends j {
  constructor(t) {
    super(t), this._ref = V(), this.state = { showed: !t.waitShowEvent };
  }
  componentDidMount() {
    const { waitShowEvent: t, afterRender: e } = this.props;
    e == null || e.call(this, { firstRender: !0 }), t && p(this._ref.current).on(t, () => {
      this.setState({ showed: !0 });
    });
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
    return gt(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ m(R, { className: k("modal-header", e), content: t }) : /* @__PURE__ */ m("div", { className: k("modal-header", e), children: /* @__PURE__ */ m("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : gt(t) ? t : /* @__PURE__ */ m("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ m(yt, { ...t }) : null,
      e ? /* @__PURE__ */ m("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ m("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? gt(t) ? t : /* @__PURE__ */ m(R, { className: k("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return gt(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ m(R, { className: k("modal-footer", e), content: t }) : /* @__PURE__ */ m("div", { className: k("modal-footer", e), children: s ? /* @__PURE__ */ m(yt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i,
      waitShowEvent: r
    } = this.props, o = r && !this.state.showed;
    return /* @__PURE__ */ m("div", { ref: r ? this._ref : void 0, className: k("modal-dialog", t, o ? "loading" : ""), style: e, children: [
      /* @__PURE__ */ m("div", { className: k("modal-content", s), children: [
        this.renderHeader(),
        this.renderActions(),
        this.renderBody(),
        i,
        this.renderFooter()
      ] }),
      o ? /* @__PURE__ */ m("div", { class: "load-indicator loading" }) : null
    ] });
  }
}
$c.defaultProps = { closeBtn: !0 };
class Tc extends j {
  constructor() {
    super(...arguments), this._ref = V(), this._height = js(), this._timer = 0, this._handleError = (t) => {
      t.message.includes("ResizeObserver loop completed with undelivered notifications") && this.componentWillUnmount();
    }, this._handleIframeLoad = () => {
      const t = this.iframeDoc;
      if (!t)
        return;
      const { iframeBodyClass: e, watchHeight: s } = this.props;
      s && this._watchIframeHeight(), e && t.body.classList.add(e), p(this._ref.current).trigger("modal-iframe-loaded");
    };
  }
  get iframeDoc() {
    var t, e;
    return (e = (t = this._ref.current) == null ? void 0 : t.contentWindow) == null ? void 0 : e.document;
  }
  componentDidMount() {
    this.props.watchHeight && this._watchIframeHeight(), window.addEventListener("error", this._handleError);
  }
  componentWillUnmount() {
    var t;
    window.removeEventListener("error", this._handleError), (t = this._rob) == null || t.disconnect(), this._timer && clearTimeout(this._timer);
  }
  _watchIframeHeight() {
    const t = this.iframeDoc;
    if (!t)
      return;
    let e = this._rob;
    e == null || e.disconnect(), e = new ResizeObserver(() => {
      this._timer && clearTimeout(this._timer), this._timer = window.setTimeout(() => {
        const s = t.body, i = t.documentElement, r = Math.ceil(Math.max(s.scrollHeight, s.offsetHeight, i.offsetHeight));
        r && r !== this._height.value && (this._height.value = r), this._timer = 0;
      }, 10);
    }), e.observe(t.body), this._rob = e;
  }
  render() {
    return /* @__PURE__ */ m(
      "iframe",
      {
        className: "modal-iframe",
        style: this._height.value ? `height: ${this._height.value}px;` : void 0,
        src: this.props.url,
        ref: this._ref,
        onLoad: this._handleIframeLoad
      }
    );
  }
}
Tc.defaultProps = {
  watchHeight: !0
};
var go = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Wt = (n, t, e) => (go(n, t, "read from private field"), e ? e.call(n) : t.get(n)), _s = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ue = (n, t, e, s) => (go(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), dn = (n, t, e) => (go(n, t, "access private method"), e), ee, vs, se, Nn, _o, un, sr;
function Nf(n, t) {
  const { custom: e, title: s, content: i, closeBtn: r } = t;
  return {
    body: i,
    closeBtn: r,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function Ef(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await p.ajax({
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
    body: e === "html" ? /* @__PURE__ */ m(ye, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Mf(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    waitShowEvent: "modal-iframe-loaded",
    body: /* @__PURE__ */ m(Tc, { url: e, watchHeight: !o })
  };
}
const Af = {
  custom: Nf,
  ajax: Ef,
  iframe: Mf
}, Sa = "loading", Nc = class Ie extends Is {
  constructor() {
    super(...arguments), _s(this, Nn), _s(this, un), _s(this, ee, void 0), _s(this, vs, void 0), _s(this, se, void 0), this._builded = !1;
  }
  get id() {
    return Wt(this, vs);
  }
  get loading() {
    var t;
    return (t = Wt(this, ee)) == null ? void 0 : t.classList.contains(Sa);
  }
  get shown() {
    var t;
    return !!((t = Wt(this, ee)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = Wt(this, ee);
    if (!t) {
      const { options: e } = this;
      let s = Wt(this, vs);
      s || (s = e.id || `modal-${wt()}`, Ue(this, vs, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], t)
        p(t).data(this.constructor.KEY, this);
      else {
        const r = this.key;
        t = p("<div>").attr({
          id: s,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      Ue(this, ee, t);
    }
    return t;
  }
  get $emitter() {
    const t = Wt(this, ee);
    return t ? p(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destroyOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      p(t.target).data("key") === this.key && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = Wt(this, ee);
    t && (p(t).removeData(this.constructor.KEY).remove(), Ue(this, ee, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    Wt(this, se) && clearTimeout(Wt(this, se));
    const { modalElement: t, options: e } = this, s = p(t), { type: i, loadTimeout: r, loadingClass: o = Sa, loadingText: a = null, cache: l } = e;
    if (!i || i === "static")
      return !0;
    if (l && this._builded)
      return this.layout(), !0;
    const c = Af[i];
    if (!c)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", a).addClass(o), r && Ue(this, se, window.setTimeout(() => {
      Ue(this, se, 0), dn(this, un, sr).call(this, this.options.timeoutTip);
    }, r));
    const d = await c.call(this, t, e);
    return this._destroyed ? !1 : (d === !1 ? await dn(this, un, sr).call(this, this.options.failedTip) : d && typeof d == "object" && await dn(this, Nn, _o).call(this, d), Wt(this, se) && (clearTimeout(Wt(this, se)), Ue(this, se, 0)), this.layout(), this._builded = !0, await yn(100), s.removeClass(o), !0);
  }
  static isValid(t) {
    return !p.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ref: i, ...r } = t, o = { show: !0, ...r };
      !o.type && o.url && (o.type = "ajax"), !o.type && t.id && (o.type = "static"), o.key === void 0 && (o.key = o.id);
      const a = Ie.ensure(s, o);
      i && (i.current = a);
      const l = `${Ie.NAMESPACE}.open${wt()}`;
      a.on(`hidden${l}`, () => {
        a.off(l), e(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let u = /* @__PURE__ */ m(R, { content: s });
    i ? u = /* @__PURE__ */ m("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ m("div", { className: `icon ${i} ${r}` }),
      u
    ] }) : u = /* @__PURE__ */ m("div", { className: k("modal-body", h.bodyClass), children: u });
    const f = [];
    (Array.isArray(o) ? o : o ? [o] : []).forEach((y) => {
      y = {
        ...typeof y == "string" ? { key: y } : y
      }, typeof y.key == "string" && (y.text || (y.text = J.getLang(y.key, y.key)), y.btnType || (y.btnType = `btn-wide ${y.key === "confirm" ? "primary" : "btn-default"}`)), y && f.push(y);
    }, []);
    let g;
    const _ = f.length ? {
      gap: 4,
      items: f,
      onClickItem: ({ item: y, event: v }) => {
        const b = Ie.query(v.target);
        if (!b || b.key !== c)
          return;
        g = y.key, (a == null ? void 0 : a(y, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await Ie.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: u,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: s, ...i } = t;
    return await Ie.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
  static async prompt(t) {
    typeof t == "string" && (t = { message: t });
    const { defaultValue: e = "", placeholder: s, onResult: i, onShown: r, message: o, content: a, bodyClass: l, custom: c, multiline: d, ...h } = t;
    let u = e, f = !1;
    const g = (b) => {
      u = b.target.value;
    }, _ = V(), y = (b) => {
      var w, C;
      b.key === "Enter" ? (f = !0, b.preventDefault(), (w = _.current) == null || w.hide()) : b.key === "Escape" && ((C = _.current) == null || C.hide());
    };
    return await Ie.confirm({
      ...h,
      custom: { closeBtn: !1, ...c },
      message: o,
      ref: _,
      content: /* @__PURE__ */ m("div", { className: k("modal-body", l), children: [
        /* @__PURE__ */ m(R, { content: o }),
        d ? /* @__PURE__ */ m("textarea", { className: "modal-prompt-input form-control mt-3", autoFocus: !0, placeholder: s, defaultValue: e, onChange: g, onKeyDown: y, rows: 10 }) : /* @__PURE__ */ m("input", { type: "text", className: "modal-prompt-input form-control mt-3", autoFocus: !0, placeholder: s, defaultValue: e, onChange: g, onKeyDown: y }),
        a
      ] })
    }) || f ? u : null;
  }
};
ee = /* @__PURE__ */ new WeakMap();
vs = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Nn = /* @__PURE__ */ new WeakSet();
_o = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return p(this.modalElement).html(n[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, Ge(
      /* @__PURE__ */ m($c, { ...n }),
      this.modalElement
    );
  });
};
un = /* @__PURE__ */ new WeakSet();
sr = function(n) {
  if (n)
    return dn(this, Nn, _o).call(this, {
      body: /* @__PURE__ */ m("div", { className: "modal-load-failed", children: n })
    });
};
Nc.DEFAULT = {
  ...Is.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let En = Nc;
En.register();
class xs extends ot {
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
      e = Is.ensure(s, t);
    } else
      e = En.ensure(this.container, t);
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
xs.NAME = "ModalTrigger";
xs.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(n) {
    return xs.get(n);
  },
  onCreate(n, t, e) {
    return new xs(n, e);
  }
};
xs.register();
const If = {
  zh_cn: {
    selectFile: "选择文件",
    fileSelectTip: "（不超过 {maxFileSize}）",
    removeFile: "移除文件",
    renameFile: "重命名",
    duplicatedTip: "文件 “{name}”（{size}） 已存在。",
    exceededSizeTip: "文件 “{name}”（{size}） 超过了 {maxFileSize} 的限制。",
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
let Se = class extends Z {
  constructor(t) {
    if (t.totalFileSize)
      if (t.maxFileSize) {
        const { maxFileSize: e, totalFileSize: s } = t, i = typeof e == "number" ? e : Me(e), r = typeof s == "number" ? s : Me(s);
        t.maxFileSize = i > r ? s : e;
      } else
        t.maxFileSize = t.totalFileSize;
    t.maxFileSize || (t.maxFileSize = "100MB"), super(t), this._input = V(), this._file = V(), this._id = `file-selector-input-${wt()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: s } = this.state;
      this.cancelRenameFile(), !(!e || !s) && this.renameFile(e, s);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const s = e.target;
      s.files && (this.selectFiles(s.files), this.setState({ inputKey: wt() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const s = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      s.length && (this.selectFiles(s), this.setState({ inputKey: wt() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = p(e.target).closest("[data-remove-file],[data-rename-file]");
      if (!i.length)
        return;
      const r = i.data();
      r.renameFile ? this.startRenameFile(String(r.renameFile)) : r.removeFile && this.removeFile(String(r.removeFile));
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
      size: qt(this.size, 1),
      maxFileSize: qt(typeof t == "string" ? Me(t) : t, 1),
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
      size: qt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: s, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? Me(e) : e;
    return t.size <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: qt(t.size, 1),
      maxFileSize: e
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: s, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? Me(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: qt(t.size, 1),
      totalSize: qt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: s, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((s == null ? void 0 : s.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: qt(t.size, 1),
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
      const e = p(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
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
    const r = s.file, { files: o, renamedFiles: a = {} } = this.state;
    if (r) {
      const c = new File([r], e, { type: r.type, lastModified: r.lastModified }), d = Array.from(this._data.files).indexOf(r);
      d >= 0 && this._data.items.remove(d), this._data.items.add(c), this._syncFiles(!0), s.file = c;
    } else
      a[s.id] = e;
    s.name = e, s.ext = this.constructor.getExt(e);
    const l = o.indexOf(s);
    l >= 0 ? o.splice(l, 1, s) : o.push(s), this.setState({ files: [...o], renamedFiles: { ...a } });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: s, removeConfirm: i } = this.props;
    if (i) {
      let c = i;
      if (typeof c == "string" && (c = { message: c }), typeof c.message == "string" && (c.message = X(c.message, {
        name: e.name,
        size: qt(e.size, 1)
      })), !await En.confirm(c))
        return;
    }
    if (s && await s.call(this, e) === !1)
      return;
    if (e.file) {
      const c = Array.from(this._data.files).indexOf(e.file);
      c >= 0 && this._data.items.remove(c);
    }
    const { files: r, deletedFiles: o = [], renamedFiles: a = {} } = this.state, l = r.indexOf(e);
    l >= 0 && (!e.file && !o.includes(e.id) && (delete a[e.id], o.push(e.id)), r.splice(l, 1), this.setState({ files: [...r], deletedFiles: [...o], renamedFiles: { ...a } }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, s = this._file.current;
    s.files = e, t && p(s).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = X(t.message, { ...this.info, ...e })), En.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? X(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ m("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: s, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = O({
      component: "label",
      attrs: {
        for: s ? void 0 : this._id
      },
      disabled: s,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ m("div", { className: "file-selector-tip", children: /* @__PURE__ */ m(R, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ m(rt, { ...o, ...c, className: k(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ m("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ m(rt, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: s, onChange: i, deleteName: r, renameName: o } = t, { deletedFiles: a, renamedFiles: l } = this.state, c = [
      /* @__PURE__ */ m("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: s, style: "display:none", onChange: i }, "form")
    ];
    return r && a && c.push(
      ...a.map((d) => /* @__PURE__ */ m("input", { type: "hidden", name: `${r}[${d}]`, value: d }, `delete:${d}`))
    ), o && l && c.push(
      ...Object.entries(l).map(([d, h]) => /* @__PURE__ */ m("input", { type: "hidden", name: `${o}[${d}]`, value: h }, `rename:${d}`))
    ), c;
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
    return e = O({
      className: this.props.mode === "grid" ? "file-selector-grid-item" : "file-selector-item",
      multiline: !1,
      title: t.name,
      subtitle: qt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ m(ve, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: s = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ m("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ m("div", { className: "form-control size-sm", children: s }),
        /* @__PURE__ */ m("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = O({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ m(rt, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ m(rt, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ m(ve, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: s } = this.state;
    return /* @__PURE__ */ m("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === s ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: s = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": tt(s),
      "--file-selector-grid-height": tt(i),
      "--file-selector-grid-gap": tt(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ m("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
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
    const r = typeof s == "string" ? Me(s) : s;
    return {
      name: e,
      size: r,
      id: t.id ? String(t.id) : [e, r].join(":"),
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
Se.defaultProps = {
  mode: "button",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Se.i18n = If;
Se.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let yo = class extends Se {
};
yo.defaultProps = {
  ...Se.defaultProps,
  mode: "grid",
  accept: Se.imageAccepts
};
const Df = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Se,
  ImageSelector: yo
}, Symbol.toStringTag, { value: "Module" }));
class vo extends W {
}
vo.NAME = "FileSelector";
vo.Component = Se;
vo.replace = !0;
class bo extends W {
}
bo.NAME = "ImageSelector";
bo.Component = yo;
bo.replace = !0;
ct(Df);
const wo = class Ec extends At {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = O(s, r)), /* @__PURE__ */ Pt(Ec, { ...r });
  }
};
wo.NAME = "nav";
wo.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let Mc = wo;
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: Mc
}, Symbol.toStringTag, { value: "Module" }));
class Ac extends W {
}
Ac.NAME = "Nav";
Ac.Component = Mc;
ct(Pf);
function Ds(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function Ic({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Ds(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : X(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : X(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ m(rt, { type: e, "z-go-to-page": l.page, ...a });
}
function Dc({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Ds(i, e);
  return s = typeof s == "function" ? s(a) : X(s, a), /* @__PURE__ */ m(Z, { ...o, children: [
    r,
    s
  ] });
}
function Lf({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ m(rt, { type: t, ...o })), l = (d, h) => {
    const u = [];
    for (let f = d; f <= h; f++) {
      o.text = f, delete o.icon, o.disabled = !1;
      const g = Ds(s, f);
      i && (o.url = typeof i == "function" ? i(g) : X(i, g)), u.push(/* @__PURE__ */ m(rt, { type: t, ...o }));
    }
    return u;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let Rf = class extends j {
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
      contentClass: u,
      arrowStyle: f,
      onlyInner: g,
      footer: _,
      footerClass: y
    } = t;
    let v = /* @__PURE__ */ m(R, { content: r }, "content");
    (u || i) && (v = /* @__PURE__ */ m("div", { className: u, children: v }, "content"));
    let b = /* @__PURE__ */ m(R, { content: _ }, "footer");
    (y || i) && (b = /* @__PURE__ */ m("div", { className: y, children: b }, "footer"));
    const w = [], C = l ? /* @__PURE__ */ m("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ m("span", { className: "close" }) }) : null;
    return i ? w.push(/* @__PURE__ */ m("div", { className: d, children: [
      i ? /* @__PURE__ */ m(R, { className: h, content: i }) : null,
      C
    ] }, "heading")) : w.push(C), w.push(v, b), c && w.push(/* @__PURE__ */ m("div", { className: typeof c == "string" ? c : "arrow", style: f }, "arrow")), g ? w : /* @__PURE__ */ m("div", { id: e, className: k("popover", a, { popup: s, "has-heading": i }), style: o, children: w });
  }
};
class Co extends W {
}
Co.NAME = "PopoverPanel";
Co.Component = Rf;
const ka = "show", xa = "in", ds = class Pc extends ot {
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
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  get zIndex() {
    return this._zIndex;
  }
  get trigger() {
    return this._triggerElement;
  }
  get target() {
    return this._targetElement;
  }
  afterInit() {
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = p(i), { namespace: a } = this;
      if (t) {
        const l = () => {
          let c = o.dataset();
          const d = o.attr(`zui-toggle-${this.constructor.ZUI}`);
          d && (c = p.extend(c, Ze(d))), this.setOptions(c);
        };
        t === "hover" ? o.on(`pointerenter${a}`, (c) => {
          o.is("[disabled],.disabled") || (l(), this.show({ delay: !0, event: c }));
        }).on(`pointerleave${a} pointercancel${a}`, () => {
          this.delayHide();
        }) : o.on(`${t}${a}`, (c) => {
          o.is("[disabled],.disabled") || (this.shown || l(), this.toggle({ event: c, delay: !0 }), c.preventDefault());
        });
      }
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), typeof t == "string" && (t === "$next" ? t = p(this._triggerElement).next() : t.startsWith("$target:") && (t = p(this._triggerElement).closest(t.slice(8)))), p(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: s, hideOthers: i = this.options.hideOthers } = t || {};
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
    const o = p(r), { animation: a, onShow: l, onShown: c, trigger: d, elementShowClass: h } = this.options, { SHOWN_POPOVERS: u } = this.constructor;
    o.addClass(ka), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = Pc.Z_INDEX++, this._shown = !0, this.render(), u.set(this.gid, this), l == null || l.call(this), this.emit("show"), i && u.forEach((g) => {
      g !== this && g.hide();
    });
    const { namespace: f } = this;
    d === "hover" && (this._clearDelayHide(), o.off(f).on(`pointerenter${f}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${f}`, () => {
      this.delayHide();
    })), this._virtual || (o.attr("zui-commands-proxy", "").data("zui.commandProxy", this._triggerElement), h && p(this._triggerElement).addClass(h)), this._resetTimer(() => {
      o.addClass(xa), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a, elementShowClass: l } = this.options, c = p(this._targetElement), { SHOWN_POPOVERS: d } = this.constructor;
    if (this._shown = !1, d.delete(this.gid), i == null || i.call(this), this.emit("hide"), c.removeClass(xa), o === "hover" && (this._clearDelayHide(), c.off(this.namespace)), !this._virtual) {
      const h = p(this._triggerElement);
      h.removeAttr("zui-commands-proxy").removeData("zui.commandProxy"), l && h.removeClass(l).removeAttr("data-pop-placement");
    }
    a && d.forEach((h) => {
      h !== this && h.zIndex > this.zIndex && h.hide();
    }), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), c.removeClass(ka), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, s && !t ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: t } = this;
      p(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = _c(t, e, () => {
      if (this.destroyed || !this._shown)
        return;
      const { animation: i, name: r = "popover", minWidth: o, minHeight: a, maxWidth: l, maxHeight: c, limitInScreen: d, onLayout: h } = this.options;
      if (!this._virtual) {
        const u = {
          minWidth: tt(o),
          minHeight: tt(a),
          maxWidth: tt(l),
          maxHeight: tt(c)
        }, { width: f, height: g } = this.options;
        f && (u.width = typeof f == "function" ? f() : f === "100%" ? p(t).outerWidth() : f), g && (u.height = typeof g == "function" ? g() : g), Object.keys(u).length && p(e).css(u);
      }
      ho(...this._getLayoutOptions()).then(({ x: u, y: f, middlewareData: g, placement: _, strategy: y }) => {
        if (t instanceof HTMLElement && $e(t)) {
          this.hide(!0);
          return;
        }
        const v = {
          position: y,
          left: u,
          top: f
        }, b = p(e).css(v);
        d && b.css({
          top: Math.max(0, Math.min(window.innerHeight - b.outerHeight(), f)),
          left: Math.max(0, Math.min(window.innerWidth - b.outerWidth(), u))
        });
        const w = _.split("-")[0], C = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[w], S = g.arrow;
        S && b.attr("data-pop-placement", w).find(".arrow").css({
          left: S.x,
          top: S.y
        }).attr("class", `arrow ${r}-arrow arrow-${C}`), i === !0 && b.attr("class", `${b.attr("class").split(" ").filter(($) => $ !== "fade" && !$.startsWith("fade-from")).join(" ")} fade-from-${C}`), this._virtual || p(this._triggerElement).attr("data-pop-placement", w), h && h.call(this, {
          target: e,
          trigger: t,
          popSide: w,
          arrowSide: C,
          x: u,
          y: f,
          placement: _,
          strategy: y
        });
      });
    }, { ancestorResize: !1 }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = p(e);
    if (i.z("popover", this.gid).toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new Co(e, s), r.on("inited", () => this.layout())), this._panel = r;
    } else
      s.arrow && (i.find(".arrow").length || i.append(p('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
  }
  handleClickOutside(t) {
    if (this.options.mask) {
      const e = this._triggerElement;
      e instanceof HTMLElement && p(t.target).closest(e).length || this.hide();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleClickTarget(t) {
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, d = l ? e.querySelector(".arrow") : null, h = d ? typeof l == "number" ? l : 5 : 0, u = () => typeof a == "function" ? a : typeof a == "object" ? {
      mainAxis: (a.mainAxis || 0) + h,
      ...a
    } : (a || 0) + h;
    return [t, e, {
      placement: s,
      strategy: c,
      middleware: [
        i ? co() : null,
        o ? lo(typeof o == "object" ? o : void 0) : null,
        a || h ? ao(u()) : null,
        l ? Cf({ element: d }) : null,
        r ? yc({
          apply({ availableWidth: f, availableHeight: g, placement: _ }) {
            p(e).css({ maxHeight: g - (["top", "bottom"].includes(_.split("-")[0]) ? h : 0) - 2, maxWidth: f - 2 });
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
      arrow: h,
      footer: u,
      footerClass: f = `${t}-footer`
    } = this.options;
    return {
      popup: e,
      title: s,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this._zIndex, ...l },
      className: c,
      closeBtn: d,
      arrow: h ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof h == "number" ? h : 5}px` },
      onlyInner: !0,
      footer: u,
      footerClass: f
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
    const { container: t = "body" } = this.options, e = p(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = p("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, r = e || (s == null ? void 0 : s.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
  }
};
ds.NAME = "Popover";
ds.Z_INDEX = 1700;
ds.MULTI_INSTANCE = !0;
ds.DEFAULT = {
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
  popup: !0,
  elementShowClass: "with-popover-show",
  hideNewOnHide: !0
};
ds.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let Kt = ds;
Kt.toggle = {
  trigger: ["click", "hover"],
  convertHref: { selector: "target" },
  check(n, t) {
    const e = p(n);
    return e.data(this.KEY) ? !1 : t === "hover" ? (e.dataset("trigger") || this.DEFAULT.trigger) === "hover" : !0;
  },
  getOptions(n, t, e) {
    return {
      triggerEvent: e,
      ...t
    };
  },
  onToggle(n, t, e) {
    n.toggle({ event: e });
  }
};
Kt.register();
p(() => {
  p(document).on(`click.${Kt.NAMESPACE}`, (n) => {
    const { SHOWN_POPOVERS: t } = Kt;
    if (!t.size)
      return;
    const e = p(n.target), s = e.closest("[z-popover]"), i = s.length ? s.z("popover") : 0, r = i ? t.get(i) : null;
    if (r) {
      const a = r.options.name ?? r.constructor.ZUI;
      if (e.closest(`[data-dismiss="popover"],[data-dismiss="${a}"]`).length) {
        r.hide();
        return;
      }
      if (r.handleClickTarget(n))
        return;
    }
    const o = [...t.values()].sort((a, l) => l.zIndex - a.zIndex);
    for (const a of o)
      if (a !== r && a.handleClickOutside(n))
        return;
  });
});
Object.assign(window, { Popover: Kt });
class oe extends Kt {
  handleClickTarget(t) {
    const e = p(t.target), { notHideOnClick: s } = this.options;
    return (!s || !e.closest(s).length) && this.hide(), !0;
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
      dropdown: this,
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
      content: Pt(ci, this._getMenuOptions())
    } : t;
  }
}
oe.NAME = "Dropdown";
oe.DEFAULT = {
  ...Kt.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
oe.toggle = {
  ...Kt.toggle,
  getOptions(n, t, e) {
    return t = Kt.toggle.getOptions.call(this, n, t, e), !t.target && !t.items && !t.menu && (t.target = p(n).next(".dropdown-menu")), t;
  }
};
oe.register();
class Ys extends rt {
  constructor() {
    super(...arguments), this._ref = V();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = oe.get(this.triggerElement), a = {
      items: s,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...p(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new oe(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = oe.get(this.triggerElement)) == null || t.destroy();
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
Ys.defaultProps = {
  caret: !0
};
Object.assign(Bt.ItemComponents, { dropdown: Ys });
Object.assign(yt.ItemComponents, { dropdown: Ys });
class ci extends Lt {
  constructor() {
    super(...arguments), this._handleSearchFocus = () => {
      this._searchFocused = !0;
    }, this._handleSearchBlur = () => {
      this._searchFocused = !1;
    };
  }
  get isHoverTrigger() {
    const { nestedTrigger: t, tree: e } = this.props;
    return t ? t === "hover" : !e;
  }
  get dropdown() {
    return this.props.dropdown;
  }
  layout() {
    var d;
    if (this.props.tree || this.isRoot)
      return;
    const t = (d = this.element) == null ? void 0 : d.parentElement, e = p(t);
    t && this._searchFocused && this._position && e.css(this._position);
    const r = e.parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    if (!t || !r)
      return;
    let { maxHeight: o } = this.props;
    const { flip: a, shift: l, offset: c } = this.props;
    ho(r, t, {
      placement: this.props.placement,
      middleware: [
        a ? co() : null,
        l ? lo(typeof l == "object" ? l : void 0) : null,
        ao(c),
        yc({
          apply({ availableWidth: h, availableHeight: u }) {
            if (o) {
              const [f, g] = Be(o);
              o = Math.min(g === "%" ? f * window.innerHeight : f, u - 2);
            } else
              o = u;
            e.css({ maxHeight: o, maxWidth: h - 2 });
          }
        })
      ]
    }).then(({ x: h, y: u }) => {
      e.css({
        left: h,
        top: u
      }), this._position = { left: h, top: u, width: t.offsetWidth, height: t.offsetHeight };
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, s, i) {
    return O(this.isHoverTrigger ? {
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
    const s = p(t.target).closest(".dropdown-menu[z-key]");
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
      return /* @__PURE__ */ m("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ m("span", { className: "caret-right" }) });
  }
  _getSearchBoxProps(t) {
    return {
      ...super._getSearchBoxProps(t),
      onFocus: this._handleSearchFocus,
      onBlur: this._handleSearchBlur
    };
  }
  _beforeRender(t) {
    return this._nestedContextMenu = [], super._beforeRender(t);
  }
}
ci.defaultProps = {
  ...Lt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1,
  nestedSearch: !1,
  flip: !0,
  shift: !0,
  offset: 1
};
ci.inheritNestedProps = [...Lt.inheritNestedProps, "container", "tree"];
const zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DropdownButton: Ys,
  DropdownMenu: ci
}, Symbol.toStringTag, { value: "Module" }));
function Of({
  type: n,
  pagerInfo: t,
  linkCreator: e,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  menu: r,
  itemProps: o,
  ...a
}) {
  var c;
  i.items = s.map((d) => {
    const h = { ...t, recPerPage: d };
    return {
      ...o,
      key: d,
      text: `${d}`,
      active: d === t.recPerPage,
      url: e ? typeof e == "function" ? e(h) : X(e, h) : void 0,
      "z-change-page-size": d
    };
  });
  const { text: l = "" } = a;
  return a.text = typeof l == "function" ? l(t) : X(l, t), i.menu = { ...r, ...i.menu, className: k((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ m(Ys, { dropdown: i, ...a });
}
function Lc({
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
  const u = (_) => {
    var y;
    h = Number((y = _.target) == null ? void 0 : y.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, f = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const y = Ds(i, h);
    a && !a({ info: y, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(y) : X(l, y));
  }, g = Ds(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : X(l, g), /* @__PURE__ */ m("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ m("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: u }),
    /* @__PURE__ */ m(rt, { type: s, ...d, onClick: f })
  ] });
}
const hi = class nr extends yt {
  constructor() {
    super(...arguments), this._pagerChanges = js({}), this._changedPager = Ul(() => nr.format({
      ...this.props,
      ...this._pagerChanges.value
    })), this._changeEffect = qn(() => {
      const { onChangePageInfo: t } = this.props, e = this._changedPager.value;
      t && this._changeEvent && (t(e, this._changeEvent), this._changeEvent = void 0);
    }), this._handleClickLink = (t) => {
      const e = p(t.currentTarget);
      if (e.is(".disabled"))
        return;
      const s = e.z("goToPage");
      typeof s == "number" && (this._changeEvent = t, this._pagerChanges.value = {
        ...this._pagerChanges.value,
        page: s
      });
    }, this._handleClickSizeMenu = (t) => {
      const { item: e } = t, s = e["z-change-page-size"];
      typeof s == "number" && !e.disabled && (this._changeEvent = t.event, this._pagerChanges.value = {
        ...this._pagerChanges.value,
        recPerPage: s
      });
    };
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  componentDidUpdate(t) {
    if (this.props.useState)
      this.props.recTotal !== t.recTotal && (this._pagerChanges.value = {
        ...this._pagerChanges.value,
        recTotal: this.props.recTotal
      });
    else {
      const { page: e, recTotal: s, recPerPage: i } = this.props;
      (e !== t.page || s !== t.recTotal || i !== t.recPerPage) && (this._pagerChanges.value = {});
    }
  }
  componentWillUnmount() {
    this._changeEffect();
  }
  _beforeRender(t) {
    return this._pagerInfo = t.useState ? this._changedPager.value : nr.format(t), super._beforeRender(t);
  }
  _getItem(t, e, s) {
    const i = super._getItem(t, e, s);
    if (!i)
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? p.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && p.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), r === "size-menu" && (i.menu = {
      onClickItem: this._handleClickSizeMenu,
      ...i.menu
    }), r === "link" && (i.onClick = this._handleClickLink), i;
  }
  static format(t) {
    const { page: e = 1, recTotal: s = 0, recPerPage: i = 10 } = t, r = Math.max(0, +s), o = Math.max(1, +i), a = o ? Math.ceil(r / o) : 0;
    return {
      page: Math.min(Math.max(1, +e), a),
      recTotal: r,
      recPerPage: o,
      pageTotal: a
    };
  }
};
hi.NAME = "pager";
hi.ItemComponents = {
  ...yt.ItemComponents,
  info: Dc,
  link: Ic,
  nav: Lf,
  "size-menu": Of,
  goto: Lc
};
hi.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let So = hi;
class Rc extends W {
}
Rc.NAME = "Pager";
Rc.Component = So;
const Ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: So,
  PagerGoto: Lc,
  PagerInfoItem: Dc,
  PagerLink: Ic
}, Symbol.toStringTag, { value: "Module" }));
ct(Ff);
class ko extends W {
}
ko.NAME = "Pick";
ko.Component = Rt;
ko.replace = !0;
class xo extends j {
  constructor(t) {
    super(t), this._searchInput = V(), this._measure = V(), this._changeTimer = 0, this._handleChange = (e) => {
      if (e.isComposing)
        return;
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
    return p(`#pick-pop-${this.props.id}`);
  }
  focus() {
    var t;
    (t = this._searchInput.current) == null || t.focus();
  }
  setSearch(t, e = !0) {
    var i, r, o, a;
    if (!t.length && this.state.search.length && ((r = (i = this.props).onClear) == null || r.call(i)), ((o = this._searchInput.current) == null ? void 0 : o.value) === t) {
      e && this.focus();
      return;
    }
    p((a = this._searchInput) == null ? void 0 : a.current).val(t).trigger("change"), e && this.focus();
  }
  clear() {
    this.setSearch("");
  }
  componentDidMount() {
    this.focus();
    const { hotkeys: t } = this.props;
    if (t) {
      const e = vl(t, {
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
        },
        deselectLast: {
          keys: "Backspace",
          handler: () => {
            this.state.search.trim().length || this.$pop.trigger("deselectLast");
          }
        }
      });
      e && (this._hotkeysScope = `PickerSearch_${wt()}`, p(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
    p(this._searchInput.current).on("compositionend", this._handleChange);
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: s } = this._searchInput;
      if (e && s) {
        const i = p(s).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && p(this._searchInput.current).unbindHotkeys(this._hotkeysScope), p(this._searchInput.current).off("compositionend", this._handleChange);
  }
  render(t, e) {
    const { placeholder: s, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ m("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ m("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ m("span", { className: "close" }) }) : a = /* @__PURE__ */ m("span", { className: "magnifier" }), /* @__PURE__ */ m("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ m(
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
class zc extends Qr {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = p(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ m("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ m("span", { className: "text", children: /* @__PURE__ */ m(R, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ m("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ m("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  get searchBox() {
    return this._search.current;
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-multi form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: s, hotkeys: i } = t;
    return /* @__PURE__ */ m(
      xo,
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
    const { state: { selections: e = [], open: s, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c, caretClass: d } = this.props, h = s && r;
    let u;
    const f = !h && !e.length;
    return a && (!f || o === void 0) ? (typeof a == "function" ? u = a.call(this, l, e) : typeof a == "string" && (u = X(a, { value: i, values: l, count: l.length })), u = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: u }, "selections")) : f ? u = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "selections") : u = /* @__PURE__ */ m("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      h ? this._renderSearch(t) : null
    ] }, "selections"), [
      u,
      c,
      /* @__PURE__ */ m("span", { class: k("caret", d) }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        p(`#${o}`).val(s);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ m("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((d) => /* @__PURE__ */ m("option", { value: d, children: d }, d)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: s } = this.props;
    p(`#${t}`).val(e.length ? e : [s]);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== s.value) {
      const a = p(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== s.value && a.trigger("change", ac), this._skipTriggerChange = !1;
    }
  }
}
class Oc extends Qr {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  get searchBox() {
    return this._search.current;
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
    return k(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: s } = t;
    return /* @__PURE__ */ m(
      xo,
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
    const { children: e, state: { selections: s = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: d, display: h, caretClass: u } = t, [f] = s, g = r && a;
    let _;
    if (g)
      _ = this._renderSearch(t);
    else if (f || o === void 0 && h) {
      const { text: b } = f || { text: "", value: "" };
      typeof h == "function" ? _ = h.call(this, i, s) : typeof h == "string" ? _ = X(h, f) : _ = /* @__PURE__ */ m(R, { content: b }), _ = /* @__PURE__ */ m("span", { className: "picker-single-selection", title: typeof b == "string" ? b : void 0, children: _ }, "main");
    } else
      _ = /* @__PURE__ */ m("span", { className: "picker-select-placeholder", children: o }, "main");
    const y = d && !g ? /* @__PURE__ */ m("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ m("span", { className: "close" }) }, "deselect") : null, v = g ? null : /* @__PURE__ */ m("span", { className: k("caret flex-none", u) }, "caret");
    return [
      _,
      e,
      y,
      v
    ];
  }
}
function Fc(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && Fc(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class Hc extends vc {
  constructor() {
    super(...arguments), this._menu = V(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && this.props.multiple && (r = !0, i = i.reduce((d, h, u) => {
        const f = this._getItem(h, u);
        return f && (f.selected ? o = !0 : r = !1, d.push(f)), d;
      }, []));
      const a = r || s.has(t.value);
      t = {
        selected: a,
        hint: typeof t.text == "string" ? t.text : void 0,
        ...t,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: k(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      }, t.content && t.text && delete t.text;
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && ((l.disabled || l.value === void 0) && (l.hover === void 0 && (l.hover = !1), l.disabled === void 0 && (l.disabled = !0), this._disabledSet.add(l.value)), a && !l.disabled && l.value !== void 0 && this._firstSelected === void 0 && (this._firstSelected = l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var s;
      return (s = this._renderItemCallback) == null ? void 0 : s.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const s = t.value, i = e.target;
      if (t.disabled || s === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((a) => this._disabledSet.has(a.value)))
        return;
      const { multiple: r, onPick: o } = this.props;
      if (r)
        if (t.items) {
          const l = [...Fc(t.items).values()].filter((c) => !c.items && !this._disabledSet.has(c.value)).map((c) => c.value);
          p(i).closest(".item").children(".item-inner.selected").length ? o({ diselect: l }) : o({ select: l });
        } else
          o({ toggle: s });
      else
        o({ select: s });
    };
  }
  get menu() {
    return this._menu.current;
  }
  get picker() {
    return this.props.picker;
  }
  componentDidMount() {
    var t, e;
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), p(this.element).on("activeNext.zui.Picker", () => {
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
        r && p(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    }).on("deselectLast.zui.Picker", () => {
      if (this.props.multiple) {
        const { valueList: s } = this.props, i = s[s.length - 1];
        i && this.props.onDeselect(i);
      }
    }), setTimeout(() => {
      var s;
      p((s = this.menu) == null ? void 0 : s.element).find(".menu-item>.selected").scrollIntoView({ block: "center" });
    }, 100);
  }
  componentWillUnmount() {
    super.componentWillUnmount(), p(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: s, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c, exceedLimitHint: d } = t, { items: h, search: u } = i;
    return O({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      limit: c,
      items: h,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: u,
      exceedLimitHint: d,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"],
      header: o,
      footer: a,
      noMatchHint: l,
      relativeTarget: this
    }, e, s);
  }
  _renderHeader() {
    return null;
  }
  _renderFooter() {
    return null;
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ m(os, { ...s }) : /* @__PURE__ */ m(Lt, { ...s });
  }
}
function De(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && De(s.items, e), e.set(s.value === void 0 ? "" : String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let di = class extends Rt {
  constructor(t) {
    super(t), this._updateTimer = 0, this.toggleValue = (e, s) => {
      if (!this.props.multiple)
        return s || e !== this.value ? this.setValue(e) : this.setValue();
      const { valueList: i } = this, r = i.indexOf(e);
      if (s !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(e), this.setValue(i);
    }, this.deselect = (e = []) => {
      const { valueList: s } = this, i = new Set(this.formatValueList(e)), r = s.filter((o) => !i.has(o));
      this.setValue(r);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (e) => {
      const s = this.formatValueList(e), i = this.props.multiple ? [...this.valueList, ...s] : s[0];
      return this.setValue(i);
    }, this.isSelected = (e) => this.valueList.includes(e), this._handlePickValue = (e) => {
      var o, a;
      const { toggle: s, select: i, diselect: r } = e;
      s !== void 0 ? this.toggleValue(s) : i !== void 0 ? this.select(i) : r !== void 0 && this.deselect(r), this.props.multiple ? this.props.clearSearchOnSelect && ((o = this.state.search) != null && o.length) && this.focusSearch("") : (this.toggle(!1), (a = this.searchBox) == null || a.clear());
    }, this.setValue = this.setValue.bind(this), this.isEmptyValue = this.isEmptyValue.bind(this);
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  get searchBox() {
    var t;
    return (t = this.trigger) == null ? void 0 : t.searchBox;
  }
  focusSearch(t) {
    const { searchBox: e } = this;
    e && (typeof t == "string" ? e.setSearch(t) : e.focus());
  }
  getDefaultState(t) {
    const { items: e, valueSplitter: s = ",", emptyValue: i = "" } = t || this.props, r = {
      ...super.getDefaultState(t),
      loading: !1,
      search: "",
      items: Array.isArray(e) ? e : [],
      selections: []
    };
    if (this._emptyValueSet = new Set(typeof i == "string" ? i.split(s) : []), Array.isArray(e) && e.length) {
      const { limitValueInList: o, required: a, multiple: l } = this.props;
      if (e.forEach((c) => {
        typeof c.value == "number" && (c.value = String(c.value));
      }), o) {
        const c = De(e);
        r.value = this.formatValueList(r.value, s).filter((d) => c.has(d)).join(s), a && !l && !this.formatValueList(r.value, s).length && (r.value = e[0].value ?? "");
      }
    }
    return r;
  }
  isEmptyValue(t) {
    return this._emptyValueSet.has(t);
  }
  deselectAll() {
    this.setValue([]);
  }
  selectAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return;
    const s = [...De(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(s);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = De(t), s = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || s.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort();
    const { items: e = [], searchDelay: s } = this.props, { search: i = "" } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (t = new AbortController(), this._abort = t, await yn(s || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = { url: o }), typeof o == "object" && o.url && (o = {
        ...o,
        url: X(o.url, { search: encodeURIComponent(i) })
      }), r = await ss(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = /* @__PURE__ */ new Map();
        Array.isArray(s.items) && s.items !== i.items && De(s.items, o), Array.isArray(r) && (De(r, o), i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []));
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || s.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      const l = (c) => c.filter((d) => (d.key = d.key ?? d.value, typeof d.value == "number" && (d.value = String(d.value)), this.isEmptyValue(d.value) ? !1 : (Array.isArray(d.items) && (d.items = l(d.items)), !0)));
      a = l(a), r.loading = !1, r.items = a, i.items = s.items, i.search = e.search;
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
        const c = a.filter((d) => !l.includes(d));
        c.length && s.call(this, o ? c : c[0]);
      }
      if (i) {
        const c = l.filter((d) => !a.includes(d));
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
      caretClass: t.caretClass,
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
      picker: this,
      menu: t.menu,
      tree: t.tree,
      checkbox: t.checkbox,
      multiple: t.multiple,
      search: t.search,
      maxItemsCount: t.maxItemsCount,
      footer: this._renderToolbar(),
      valueList: this.valueList,
      noFlipAfterShow: !0,
      noMatchHint: e.loading ? J.getLang("loadingHint") : t.searchEmptyHint ?? J.getLang("searchEmptyHint"),
      exceedLimitHint: t.exceedLimitHint ?? J.getLang("exceedLimitHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue,
      onPick: this._handlePickValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? zc : Oc);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: J.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: J.getLang("cancelSelect")
    }]), yt.render(t, [], { size: "sm", relativeTarget: this, getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t, e) {
    let s;
    return typeof t == "string" && t.length ? s = t.split(e ?? this.props.valueSplitter ?? ",") : Array.isArray(t) ? s = t : s = [t], p.unique(s).reduce((i, r) => (r == null || (r = typeof r != "string" ? String(r) : r, this.isEmptyValue(r) || i.push(r)), i), []);
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
        const a = De(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
};
di.defaultProps = {
  ...Rt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0,
  clearSearchOnSelect: !0
};
di.Pop = Hc;
const Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Picker: di,
  PickerMenu: Hc,
  PickerMultiSelect: zc,
  PickerSearch: xo,
  PickerSingleSelect: Oc
}, Symbol.toStringTag, { value: "Module" }));
class $o extends W {
}
$o.NAME = "Picker";
$o.Component = di;
$o.register();
J.addLang({
  zh_cn: {
    selectAll: "全选",
    cancelSelect: "取消选择",
    searchEmptyHint: "无匹配选项",
    loadingHint: "正在加载...",
    exceedLimitHint: "还有 {0} 个选项没有显示，可尝试搜索来查找"
  },
  zh_tw: {
    selectAll: "全選",
    cancelSelect: "取消選擇",
    searchEmptyHint: "無匹配選項",
    loadingHint: "正在載入...",
    exceedLimitHint: "還有 {0} 個選項沒有顯示，可嘗試搜索來查找"
  },
  en: {
    selectAll: "Select All",
    cancelSelect: "Cancel Select",
    searchEmptyHint: "No matching options",
    loadingHint: "Loading...",
    exceedLimitHint: "There are {0} items not displayed, try searching to find"
  }
});
ct(Hf);
class To extends W {
}
To.NAME = "SearchBox";
To.Component = ti;
To.register();
ct(Mu);
function Mi(n, t) {
  const [e, s] = Be(n);
  return s === "%" ? t * e / 100 : e;
}
const $a = "is-sidebar-resizing", Ta = "has-sidebar-animation", Ai = "is-animating", on = ".sidebar-gutter";
class Wc extends ot {
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  get $parent() {
    const { parent: t } = this.options;
    return t ? p(t) : this.$element.parent();
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), s = e[0], i = e.width();
    this._container = s;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      animation: a,
      dragToResize: l,
      width: c,
      minWidth: d = 0,
      maxWidth: h = Number.MAX_SAFE_INTEGER,
      toggleBtn: u,
      dbclick: f
    } = this.options;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._minWidth = Mi(d, i), this._maxWidth = Mi(h, i), this._defaultWidth = Math.max(this._minWidth, Math.min(this._maxWidth, Mi(c || t.width(), i))), this._width = (r ? ie.get(this._storeID) : null) ?? this._defaultWidth, this.render(), u && t.on(`click${this.namespace}`, ".gutter-toggle", () => this.toggle()), f && t.on(`dblclick${this.namespace}`, on, () => {
      f === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }).on("mousedown", on, (g) => {
      g.preventDefault();
    }), l && (this._moveable = new Kr(t, {
      selector: on,
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, this.$parent.addClass($a).removeClass(Ta);
      },
      onMove: (g, _) => {
        const { deltaX: y } = _;
        Math.abs(y) < 10 || this.update(this._startWidth + y * (o === "left" ? 1 : -1));
      },
      onMoveEnd: () => {
        a && this.$parent.addClass(Ta), this.$parent.removeClass($a);
      }
    })), a && this.on("transitionend", (g) => {
      g.target === t[0] && g.propertyName === "width" && t.removeClass(Ai);
    });
  }
  destroy() {
    var t;
    super.destroy(), this._raf && cancelAnimationFrame(this._raf), (t = this._moveable) == null || t.destroy();
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
    const { preserve: s, toggleBtn: i, onResize: r, onToggle: o, animation: a } = this.options;
    if (t = t < this._minWidth ? i ? 0 : this._minWidth : Math.min(this._maxWidth, t, this._container.clientWidth), t === this._width)
      return;
    const l = !this._width, c = !t;
    this._width = t, s && ie.set(this._storeID, t), this.render(), r == null || r(t), l !== c && (l && a && this.$element.addClass(Ai), o == null || o(c)), this.emit("sidebarResize", t);
  }
  render() {
    var d;
    const { side: t, width: e, $element: s, $parent: i } = this, r = !e, { toggleBtn: o, gutterWidth: a = Be(s.parent().css("gap"))[0] || 1, animation: l } = this.options;
    s.addClass(`sidebar-${t}`).toggleClass("is-collapsed", r).toggleClass("is-expanded", !r).css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${t}-width)`, "--sidebar-duration": typeof l == "number" ? `${l}ms` : null });
    let c = s.find(on);
    c.length || (c = p('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(s)), o ? c.children(".gutter-toggle").length || c.append(`<button class="gutter-toggle" type="button"><span class="chevron-${t}"></span></button>`) : c.children(".gutter-resize-handler").length || c.append('<div class="gutter-resize-handler"></div>'), i.addClass(`has-sidebar-${t}`).css(`--sidebar-${t}-width`, `${e}px`).toggleClass(`is-sidebar-${t}-collapsed`, r), (d = this._moveable) != null && d.state && s.removeClass(Ai);
  }
}
Wc.NAME = "Sidebar";
Wc.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class Bc extends W {
}
Bc.NAME = "Toolbar";
Bc.Component = yt;
ct(ku);
class Ps extends Kt {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let r = s, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: k("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Ps.NAME = "Tooltip";
Ps.DEFAULT = {
  ...Kt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3,
  hideOthers: !0,
  hideNewOnHide: !1
};
Ps.register();
class No extends W {
}
No.NAME = "Tree";
No.Component = Gt;
No.replace = Gt.TAG;
class jc extends W {
}
jc.NAME = "SearchTree";
jc.Component = os;
ct(Ou);
class Eo extends ot {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Me(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = p('<ul class="file-list py-1"></ul>');
    const l = p(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = p(`<label class="btn ${r}" for="${t}">${e}</label>`), s) {
        const u = p(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(u);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = p(`<span class="text-primary">${e}</span>`);
    if (s) {
      const h = p(`<i class="icon icon-${s} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = p(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
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
    this.$input = p("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
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
    const { multiple: e, limitCount: s, exceededSizeHint: i, onExceededSize: r, exceededCountHint: o, onExceededCount: a, onAdd: l } = this.options;
    if (e) {
      for (let u of t) {
        if (s && this.fileMap.size >= s) {
          a == null || a(s), o && alert(o);
          return;
        }
        if (this.currentBytes + u.size > this.limitBytes) {
          r == null || r(this.limitBytes), i && alert(i);
          return;
        }
        u = this.renameDuplicatedFile(u);
        const f = l == null ? void 0 : l(u);
        if (!f)
          continue;
        u = f;
        const g = this.createFileItem(u);
        this.itemMap.set(u.name, g), this.$list.append(g);
      }
      return;
    }
    if (t.length === 0 || t[0].size > this.limitBytes)
      return;
    let c = this.renameDuplicatedFile(t[0]);
    const d = l == null ? void 0 : l(c);
    if (!d)
      return;
    c = d;
    const h = this.createFileItem(c);
    this.itemMap.clear(), this.itemMap.set(c.name, h), this.$list.empty().append(h);
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
    return this.addFile(t), p('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return p(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const r = p(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Ps(r, { title: e }), r;
    }
    return p("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const r = p(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Ps(r, { title: e })), r;
    }
    return p("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return p(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return p(`<span class="file-size text-gray">${qt(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, r = p('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = p(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i, onDuplicated: r } = this.options, o = p('<div class="input-group input-rename-container hidden"></div>'), a = p("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (h) => {
      if (h.key === "Enter") {
        const u = o.closest(".file-item"), f = u.find(".file-name");
        if (f.html() === a.val()) {
          o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(a.val())) {
          r == null || r(a.val()), i && alert(i);
          return;
        }
        this.renameFileItem(t, a.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), f.html(a.val());
      } else
        h.key === "Escape" && (a.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), l = p("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const h = o.closest(".file-item"), u = h.find(".file-name");
      if (u.html() === a.val()) {
        o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(a.val())) {
        r == null || r(a.val()), i && alert(i);
        return;
      }
      this.renameFileItem(t, a.val()), o.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), u.html(a.val());
    }), c = p("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      a.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), d = p('<div class="btn-group"></div').append(l).append(c);
    return o.append(a).append(d);
  }
}
Eo.NAME = "Upload";
Eo.DEFAULT = {
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
  showSize: !0,
  onAdd: (n) => n
};
class Uc extends Eo {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = p(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(p('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = p('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = p('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = p(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = p(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = p('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(p(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = p('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      p('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})`, backgroundSize: "cover" }).prependTo(e);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = p(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return p('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(p(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e, onDuplicated: s } = this.options, i = p("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (r) => {
      if (r.key === "Enter") {
        const o = i.closest(".file-item").find(".file-name");
        if (o.html() === i.val()) {
          i.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(i.val())) {
          s == null || s(i.val()), e && alert(e);
          return;
        }
        this.renameFileItem(t, i.val()), i.addClass("hidden"), o.html(i.val()).closest(".file-info").removeClass("hidden");
      } else
        r.key === "Escape" && i.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const r = i.closest(".file-item").find(".file-name");
      if (r.html() === i.val()) {
        i.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(i.val())) {
        s == null || s(i.val()), e && alert(e);
        return;
      }
      this.renameFileItem(t, i.val()), i.addClass("hidden"), r.html(i.val()).closest(".file-info").removeClass("hidden");
    });
    return i;
  }
}
Uc.NAME = "UploadImgs";
Uc.DEFAULT = {
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
let Vc = class extends Z {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: s,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ m("div", { className: k("card-content", r), children: [
          e ? /* @__PURE__ */ m("div", { className: k("card-subtitle", s), children: /* @__PURE__ */ m(R, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ m(R, { content: i }, "extraContent") : null
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
      headingClass: u
    } = t;
    if (!e && !s && !r && !c && !h)
      return;
    const f = a ? "a" : "span";
    return /* @__PURE__ */ m("div", { className: k("card-heading", u), children: [
      e ? /* @__PURE__ */ m(nt, { className: "card-icon", icon: e }, "icon") : null,
      s ? /* @__PURE__ */ m(R, { className: k("card-prefix", i), content: s }, "prefix") : null,
      r ? /* @__PURE__ */ m(f, { className: k("card-title", o), href: a, ...l, children: /* @__PURE__ */ m(R, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ m(R, { className: k("card-suffix", d), content: c }, "suffix") : null,
      h ? /* @__PURE__ */ m(R, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: s
    } = t;
    if (e)
      return /* @__PURE__ */ m("div", { className: k("card-header", s), children: /* @__PURE__ */ m(R, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: s,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ m("div", { className: k("card-footer", s), children: [
        /* @__PURE__ */ m(R, { content: e }, "footer"),
        yt.render(i, [t], { key: "foot-actions", relativeTarget: t, className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return yt.render(t.actions, [t], { key: "actions", relativeTarget: t, className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const s = O({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ m(At, { ...s });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const s = typeof e == "function" ? e.call(this, t) : e;
      if (s)
        return s.className = k("item-avatar", s.className), /* @__PURE__ */ m(Vs, { ...s }, "avatar");
    }
  }
  _getClassName(t) {
    return ["card", t.className, t.selected ? "selected" : ""];
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
class Na extends Vc {
  _getClassName(t) {
    return t.className;
  }
  _getChildren(t) {
    const { innerAttrs: e, innerClass: s, selected: i, innerComponent: r = "div" } = t, o = O({ className: k("card", s, i ? "selected" : "") }, e);
    return /* @__PURE__ */ m(r, { ...o, children: super._getChildren(t) });
  }
}
let us = class extends At {
  _getClassName(t) {
    return [super._getClassName(t), t.countPerRow ? "card-grid" : ""];
  }
  _getProps(t) {
    const { gap: e, countPerRow: s } = t;
    return O({
      style: {
        "--list-gap": e ? tt(e) : void 0,
        "--list-count-per-row": s
      }
    }, super._getProps(t));
  }
  _getRenderedItem(t, e) {
    return e;
  }
};
us.NAME = "card-list";
us.TAG = "div";
us.ItemComponents = {
  ...At.ItemComponents,
  default: Na,
  item: Na
};
us.defaultItemProps = {
  component: "div"
};
class Mo extends W {
}
Mo.NAME = "Card";
Mo.Component = Vc;
Mo.replace = !0;
class Kc extends W {
}
Kc.NAME = "CardList";
Kc.Component = us;
ct(zf);
class ui extends oe {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
ui.NAME = "ContextMenu";
ui.DEFAULT = {
  ...oe.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
ui.register();
function Wf(n) {
  const { left: t, className: e, top: s, id: i, onMenuBtnClick: r, title: o, width: a, height: l, content: c, loading: d, draggable: h = !0 } = n;
  return /* @__PURE__ */ m("div", { class: "dashboard-block-cell", style: { left: t, top: s, width: a, height: l }, children: /* @__PURE__ */ m(
    "div",
    {
      className: k("dashboard-block load-indicator", d && !c ? "loading" : "", r ? "has-more-menu" : "", e),
      draggable: h,
      "data-id": i,
      children: [
        /* @__PURE__ */ m("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ m("div", { class: "dashboard-block-title", children: o }),
          r ? /* @__PURE__ */ m("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ m("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: r, children: /* @__PURE__ */ m("div", { class: "more-vert" }) }) }) : null
        ] }),
        p.isPlainObject(c) && c.html ? /* @__PURE__ */ m(ye, { className: "dashboard-block-body", executeScript: !0, ...c }) : /* @__PURE__ */ m("div", { class: "dashboard-block-body", children: c })
      ]
    }
  ) });
}
const Ii = ([n, t, e, s], [i, r, o, a]) => !(n + e <= i || i + o <= n || t + s <= r || r + a <= t), Ea = (n, t) => n[1] === t[1] ? n[0] - t[0] : n[1] - t[1], an = "Dashboard:Block.cache:";
let Gc = class extends j {
  constructor(t) {
    super(t), this._ref = V(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 50);
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
      ui.show({
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
        const i = await p.fetch(e, [t, s], ({ url: r }) => ({ url: X(r, s), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, s);
        });
      } catch (i) {
        const r = /* @__PURE__ */ m("div", { class: "panel center text-danger p-5", children: [
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
    return !this.props.onlyLoadVisible || !!p(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? ie.set(`${an}${s}:${t}`, e) : ie.session.set(`${an}${t}`, e);
      } catch (i) {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e, error: i });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? ie.get(`${an}${e}:${t}`) : ie.session.get(`${an}${t}`);
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
        top: u = -1,
        fetch: f = e,
        menu: g = s,
        content: _,
        ...y
      } = o, [v, b] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: v,
        height: b,
        left: Math.min(h, i - v),
        top: u,
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
      t.sort((l, c) => Ea(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && s && i.set(e, s), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => Ea(a[1], l[1]));
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
    this._draggable = new ni(t, {
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
        const { cellHeight: s, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / s)), u = this.state.dropping;
        u && u[0] === d && u[1] === h || this.setState({ dropping: [d, h, o, a] });
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
    if (s && Ii(t, s))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && Ii(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: s } = this.state;
    for (s && Ii(e, s) && (e[1] = s[1] + s[3]); !this._canPlace(e); )
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
    this.loadNext(), p(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), p(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i, emptyBlockContent: r } = this.props, { dropping: o, dragging: a } = this.state, l = this._map;
    return /* @__PURE__ */ m("div", { class: "dashboard", children: /* @__PURE__ */ m(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: [
          o ? /* @__PURE__ */ m(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * o[0] / i}%`, top: s * o[1], width: `${100 * o[2] / i}%`, height: s * o[3] }
            },
            "dropping"
          ) : null,
          t.map((c, d) => {
            const { id: h, menu: u, content: f, title: g } = c, [_, y, v, b] = h === a && o ? o : l.get(h) || [0, 0, c.width, c.height];
            return /* @__PURE__ */ m(
              Wf,
              {
                id: h,
                index: d,
                left: `${100 * _ / i}%`,
                top: s * y,
                width: `${100 * v / i}%`,
                height: s * b,
                content: f ?? r,
                title: g,
                className: k(c.needLoad ? "need-load" : "", f ? "has-content" : ""),
                onMenuBtnClick: u ? this._handleMenuClick : void 0
              },
              c.id
            );
          })
        ]
      }
    ) });
  }
};
Gc.defaultProps = {
  responsive: !1,
  cache: !0,
  blocks: [],
  grid: 3,
  gap: 16,
  cellHeight: 64,
  blockDefaultSize: [1, 3],
  blockMenu: { items: [{ text: "Refresh", data: { type: "refresh" } }] },
  onlyLoadVisible: !0,
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
class qc extends W {
}
qc.NAME = "Dashboard";
qc.Component = Gc;
var fe, pe;
class Ma extends j {
  constructor(e) {
    super(e);
    St(this, fe, void 0);
    St(this, pe, void 0);
    It(this, fe, 0), It(this, pe, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (bt(this, fe) && cancelAnimationFrame(bt(this, fe)), It(this, fe, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), It(this, fe, 0);
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
    e && (It(this, pe, typeof e == "string" ? document : e.current), bt(this, pe).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), bt(this, pe) && bt(this, pe).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: u } = this, { dragStart: f } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return s === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, u) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, u) * (e - _.height) / h)), /* @__PURE__ */ m(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": f
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ m(
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
fe = new WeakMap(), pe = new WeakMap();
const Mn = /* @__PURE__ */ new Map(), An = [];
function Yc(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && Mn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Mn.set(e, n), t != null && t.buildIn && !An.includes(e) && An.push(e);
}
function mt(n, t) {
  Yc(n, t);
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
function Jc(n) {
  return Mn.delete(n);
}
function Xc(n) {
  if (typeof n == "string") {
    const t = Mn.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Zc(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Xc(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && Zc(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Bf(n = [], t = !0) {
  if (t && An.length && n.unshift(...An), !(n != null && n.length))
    return [];
  const e = Zc([], n, /* @__PURE__ */ new Set()), s = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && s.push(o), r;
  }, /* @__PURE__ */ new Map());
  return s.length && (s.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
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
    minColWidth: 24,
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
function jf(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function Aa(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function Di(n, t = !1, e = 0) {
  if (!n.list.length)
    return;
  if (t && n.widthSetting && (n.widthSetting = Math.min(n.widthSetting, n.width)), e && (!n.widthSetting || n.widthSetting > e) && n.width > e && (n.widthSetting = e), n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const i = n.width - n.totalWidth;
    if (!t && i > 0 || t && i !== 0) {
      const r = n.flexList.length ? n.flexList : n.list, o = r.reduce((a, l) => a + (l.flex || 1), 0);
      r.forEach((a) => {
        const l = Math[i < 0 ? "max" : "min"](i, Math.ceil(i * ((a.flex || 1) / o)));
        a.realWidth = a.width + l;
      });
    }
  }
  let s = 0;
  n.list.forEach((i, r) => {
    i.realWidth || (i.realWidth = i.width), i.left = s, i.sideIndex = r, s += i.realWidth;
  });
}
function Ia(n) {
  return n ? n === "left" ? "left" : "right" : "center";
}
function Uf(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (C) => (typeof C == "function" && (C = C.call(n)), C = Aa(C, 0), C < 1 && (C = Math.round(C * s)), C), d = {
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
  }, u = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, f = {
    left: h,
    center: d,
    right: u
  }, g = [], _ = {};
  let y = !1;
  const v = [], b = {};
  if (e.forEach((C) => {
    const { colTypes: S, onAddCol: $ } = C;
    S && Object.entries(S).forEach(([I, E]) => {
      b[I] || (b[I] = []), b[I].push(E);
    }), $ && v.push($);
  }), t.cols.forEach((C, S) => {
    if (C.hidden)
      return;
    const { type: $ = "", name: I } = C, E = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...C,
      type: $
    }, D = {
      name: I,
      type: $,
      setting: E,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: S,
      side: Ia(E.fixed),
      sideIndex: 0,
      order: E.order,
      border: E.border
    }, H = b[$];
    H && H.forEach((Y) => {
      const q = typeof Y == "function" ? Y.call(n, E) : Y;
      q && Object.assign(E, q, C);
    });
    const { flex: M, minWidth: z = r, maxWidth: B = o } = E, F = Aa(E.width || i, i);
    D.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, D.width = jf(F < 1 ? Math.round(F * s) : F, z, B), D.side = Ia(E.fixed), v.forEach((Y) => Y.call(n, D)), g.push(D), _[D.name] = D;
    const U = f[D.side];
    U.list.push(D), U.totalWidth += D.width, U.width = U.totalWidth, D.flex && U.flexList.push(D), typeof D.order == "number" && (y = !0);
  }), y) {
    const C = (S, $) => (S.order ?? S.index) - ($.order ?? $.index);
    g.sort(C), h.list.sort(C), d.list.sort(C), u.list.sort(C);
  }
  Di(u, !0);
  const w = s - u.width - Math.max(40, r);
  return Di(h, !0, w), d.widthSetting = s - h.width - u.width, Di(d), {
    list: g,
    map: _,
    ...f
  };
}
function Vf(n) {
  var q;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: d, left: h, top: u, ...f } = n, g = {
    left: h ?? t.left,
    top: u ?? i.top,
    width: d ?? t.realWidth,
    height: s,
    ...a
  }, { align: _, cellStyle: y, cellClass: v, className: b } = t.setting, w = {
    justifyContent: _ ? _ === "left" ? "start" : _ === "right" ? "end" : _ : void 0,
    ...y,
    ...o
  }, { name: C, border: S } = t, $ = ["dtable-cell", c, e, b, {
    "has-border-left": S === !0 || S === "left",
    "has-border-right": S === !0 || S === "right"
  }], I = ["dtable-cell-content", v], E = (q = i.data) == null ? void 0 : q[C], D = [l ?? E ?? ""], H = r ? r(D, { row: i, col: t, value: E }, n, Pt) : D, M = [], z = [], B = {}, F = {};
  let U = "div";
  H == null || H.forEach((L) => {
    if (typeof L == "object" && L && !gt(L) && ("html" in L || "className" in L || "style" in L || "attrs" in L || "children" in L || "tagName" in L)) {
      const ht = L.outer ? M : z;
      L.html ? ht.push(/* @__PURE__ */ m("div", { className: k("dtable-cell-html", L.className), style: L.style, dangerouslySetInnerHTML: { __html: L.html }, ...L.attrs ?? {} })) : (L.style && Object.assign(L.outer ? g : w, L.style), L.className && (L.outer ? $ : I).push(L.className), L.children && ht.push(L.children), L.attrs && Object.assign(L.outer ? B : F, L.attrs)), L.tagName && !L.outer && (U = L.tagName);
    } else
      (typeof L != "object" || gt(L)) && z.push(L);
  });
  const Y = U;
  return /* @__PURE__ */ m(
    "div",
    {
      className: k($),
      style: g,
      "data-col": C,
      "data-row": i.id,
      "data-type": t.type || null,
      ...f,
      ...B,
      children: [
        z.length > 0 && /* @__PURE__ */ m(Y, { className: k(I), style: w, ...F, children: z }),
        M
      ]
    }
  );
}
function Pi({
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
  CellComponent: d = Vf,
  cellClass: h,
  onRenderCell: u
}) {
  var y;
  const f = Array.isArray(n) ? n : [n], g = ((y = f[0]) == null ? void 0 : y.top) ?? 0, _ = f.length;
  return /* @__PURE__ */ m(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ m("div", { className: "dtable-cells-container", style: { left: -s, top: -i + g }, children: f.reduce((v, b, w) => {
        const C = t.length;
        return t.forEach((S, $) => {
          v.push(
            /* @__PURE__ */ m(
              d,
              {
                className: k(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === C - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === _ - 1 ? "is-last-row" : "",
                  h
                ),
                col: S,
                row: b,
                top: b.top - g,
                height: e,
                onRenderCell: u
              },
              `${b.index}:${S.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function th({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  cellClass: d,
  style: h,
  onRenderCell: u,
  children: f
}) {
  let g = null;
  i.list.length && (g = /* @__PURE__ */ m(
    Pi,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      cellClass: d,
      onRenderCell: u
    },
    "left"
  ));
  let _ = null;
  r.list.length && (_ = /* @__PURE__ */ m(
    Pi,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      cellClass: d,
      onRenderCell: u
    },
    "center"
  ));
  let y = null;
  return o.list.length && (y = /* @__PURE__ */ m(
    Pi,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      cellClass: d,
      onRenderCell: u
    },
    "right"
  )), /* @__PURE__ */ m(
    "div",
    {
      className: k("dtable-block", c),
      style: { ...h, top: n, height: t },
      children: [
        g,
        _,
        y,
        f
      ]
    }
  );
}
var eh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, st = (n, t, e) => (eh(n, t, "read from private field"), e ? e.call(n) : t.get(n)), at = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, kt = (n, t, e) => (eh(n, t, "access private method"), e), ue, bs, ws, ir, sh, rr, nh, or, ih, ar, rh, fn, lr, fi, In, cr, hr, dr, ur, Cs, pn, Dn, Ao, Io, oh, fr, ah;
let Do = class extends j {
  constructor(t) {
    super(t), at(this, ir), at(this, rr), at(this, or), at(this, ar), at(this, fn), at(this, Cs), at(this, Dn), at(this, Io), at(this, fr), this.ref = V(), this._rafId = 0, this._needRender = !1, this._plugins = [], this._lastUsedPlugins = /* @__PURE__ */ new Map(), this._events = /* @__PURE__ */ new Map(), this._data = {}, this._i18nMaps = [], this._hover = { in: !1 }, this.updateLayout = () => {
      this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const { element: e } = this;
        e && !$e(e) && this.update({ dirtyType: "layout" }), this._rafId = 0;
      });
    }, at(this, ue, (e, s) => {
      s = s || e.type;
      const i = this._events.get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), at(this, bs, (e) => {
      st(this, ue).call(this, e, `window_${e.type}`);
    }), at(this, ws, (e) => {
      st(this, ue).call(this, e, `document_${e.type}`);
    }), at(this, fi, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell", c = (d, h) => {
        try {
          e = d.call(this, e, s, i, r);
        } catch (u) {
          console.error(`[ZUI] DTable render cell(${o.id}:${a.name}) by ${h} error:`, u);
        }
      };
      return a.setting[l] && c(a.setting[l], "col"), this._plugins.forEach((d) => {
        d[l] && c(d[l], `plugin (${d.name})`);
      }), this.options[l] && c(this.options[l], "options"), e;
    }), at(this, In, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), at(this, cr, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), this._plugins.forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of this._plugins)
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), at(this, hr, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), at(this, dr, (e) => {
      const s = p(e.target).closest(".dtable-cell");
      if (!s.length)
        return kt(this, Cs, pn).call(this, !1);
      kt(this, Cs, pn).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), at(this, ur, () => {
      kt(this, Cs, pn).call(this, !1);
    }), this._id = t.id ?? `dtable-${wt()}`, this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, this._allPlugins = Object.freeze(Bf(t.plugins)), this._allPlugins.forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(this._data, i.call(this)), r && Object.assign(this.state, r.call(this));
    }), kt(this, Dn, Ao).call(this), this._plugins.forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = this._layout) == null ? void 0 : t.options) || this._options || Qc();
  }
  get plugins() {
    return this._plugins;
  }
  get layout() {
    return this._layout;
  }
  get id() {
    return this._id;
  }
  get data() {
    return this._data;
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return this._hover;
  }
  componentWillReceiveProps() {
    this._options = void 0;
  }
  shouldComponentUpdate() {
    return !0;
  }
  componentDidMount() {
    this._needRender ? this.forceUpdate() : kt(this, fn, lr).call(this), this.on("click", st(this, cr)), this.on("keydown", st(this, hr));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", st(this, dr)), this.on("mouseleave", st(this, ur)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const s = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        this._rob = r;
        const { parent: o } = this;
        s.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : p(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      s.includes("window") && this.on("window_resize", this.updateLayout);
    }
    this._checkPluginsState();
  }
  componentDidUpdate() {
    kt(this, fn, lr).call(this), this._checkPluginsState(), this._plugins.forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = this._rob) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of this._events.keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), st(this, bs)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), st(this, ws)) : t.removeEventListener(s, st(this, ue));
    this._plugins.forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), this._allPlugins.forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), this._data = {}, this._events.clear(), this._noAnimation && clearTimeout(this._noAnimation), this._rafId && cancelAnimationFrame(this._rafId);
  }
  resetState(t, e) {
    this._options = void 0, this._layout = void 0, t = t || this.props;
    const s = {};
    this._plugins.forEach((i) => {
      const { resetState: r, state: o } = i;
      r && (typeof r == "function" ? Object.assign(s, r.call(this, t)) : o && Object.assign(s, o.call(this)));
    }), Object.keys(s).length && this.setState(s);
  }
  on(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = this._events.get(t);
    i ? i.push(e) : (this._events.set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), st(this, bs)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), st(this, ws)) : (r = this.element) == null || r.addEventListener(t, st(this, ue)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = this._events.get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (this._events.delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), st(this, bs)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), st(this, ws)) : (o = this.element) == null || o.removeEventListener(t, st(this, ue)));
  }
  emitCustomEvent(t, e) {
    st(this, ue).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    let { scrollLeft: h, scrollTop: u } = t;
    if (d === "up" || d === "down")
      u = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = s + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      u = 0;
    else if (d === "bottom")
      u = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = s + g), typeof _ == "number" && (u = i + _);
    }
    const f = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (f.scrollLeft = h)), typeof u == "number" && (u = Math.max(0, Math.min(u, r - o)), u !== i && (f.scrollTop = u)), Object.keys(f).length ? (this.setState(f, () => {
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
    if (!this._options)
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      this._layout = void 0;
    else if (s === "options") {
      if (this._options = void 0, !this._layout)
        return;
      this._layout = void 0;
    }
    this.setState(i || ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = p(e).closest(".dtable-cell");
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
  componentDidCatch(t, e) {
    console.error(`[ZUI] DTable ${this.id} Error:`, t, e);
  }
  i18n(t, e, s) {
    return J(this._i18nMaps, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  _checkPluginsState() {
    const t = new Set(this._lastUsedPlugins.keys());
    this._plugins.forEach((e) => {
      var i;
      if (t.has(e.name)) {
        t.delete(e.name);
        return;
      }
      let { events: s } = e;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([r, o]) => {
        o && this.on(r, o);
      })), (i = e.onMounted) == null || i.call(this), this._lastUsedPlugins.set(e.name, e);
    }), t.size && t.forEach((e) => {
      var i;
      const s = this._lastUsedPlugins.get(e);
      (i = s == null ? void 0 : s.onUnmounted) == null || i.call(this), this._lastUsedPlugins.delete(e);
    });
  }
  render() {
    let t = kt(this, fr, ah).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d, style: h } = this.options, u = { ...h }, f = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], g = [];
    if (t) {
      const _ = !t.rows.length;
      if (c) {
        const y = c.call(this, t);
        y && (t = y);
      }
      this._plugins.forEach((y) => {
        var b;
        const v = (b = y.beforeRender) == null ? void 0 : b.call(this, t);
        v && (t = v);
      }), u.width = t.width, u.height = t.height, u["--dtable-row-height"] = `${t.rowHeight}px`, u["--dtable-header-height"] = `${t.headerHeight}px`, f.push(
        t.className,
        _ ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && g.push(...t.children), _ && d ? (delete u.height, g.push(
        /* @__PURE__ */ m("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ m(R, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (g.push(
        kt(this, ir, sh).call(this, t),
        kt(this, rr, nh).call(this, t),
        kt(this, or, ih).call(this, t)
      ), t.scrollable && g.push(kt(this, ar, rh).call(this, t))), this._plugins.forEach((y) => {
        var b;
        const v = (b = y.onRender) == null ? void 0 : b.call(this, t);
        v && (v.style && Object.assign(u, v.style), v.className && f.push(v.className), v.children && g.push(v.children));
      });
    }
    return /* @__PURE__ */ m(
      "div",
      {
        id: this._id,
        className: k(f),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: g
      }
    );
  }
};
ue = /* @__PURE__ */ new WeakMap();
bs = /* @__PURE__ */ new WeakMap();
ws = /* @__PURE__ */ new WeakMap();
ir = /* @__PURE__ */ new WeakSet();
sh = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ m(
      th,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        cellClass: "dtable-header-cell",
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: st(this, fi),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    ql,
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
rr = /* @__PURE__ */ new WeakSet();
nh = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ m(
    th,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: st(this, fi),
      children: l
    },
    "body"
  );
};
or = /* @__PURE__ */ new WeakSet();
ih = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ m(
    ql,
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
ar = /* @__PURE__ */ new WeakSet();
rh = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = n, { scrollbarSize: h = 12, horzScrollbarPos: u, vertScrollbarPos: f } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ m(
      Ma,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: st(this, In),
        left: s,
        bottom: (u === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: d + a } }),
    /* @__PURE__ */ m("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ m(
      Ma,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: st(this, In),
        right: f === "outside" ? -h : 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
fn = /* @__PURE__ */ new WeakSet();
lr = function() {
  var n;
  this._needRender = !1, this._plugins.forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (n = this.options.afterRender) == null || n.call(this);
};
fi = /* @__PURE__ */ new WeakMap();
In = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakMap();
hr = /* @__PURE__ */ new WeakMap();
dr = /* @__PURE__ */ new WeakMap();
ur = /* @__PURE__ */ new WeakMap();
Cs = /* @__PURE__ */ new WeakSet();
pn = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = p(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = this._hover;
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), this._hover = i;
};
Dn = /* @__PURE__ */ new WeakSet();
Ao = function() {
  if (this._options)
    return !1;
  const t = { ...Qc(), ...this._allPlugins.reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return this._options = t, this._plugins = this._allPlugins.reduce((e, s) => {
    const { options: i } = s;
    let r = t;
    return i && (r = Object.assign({ ...r }, typeof i == "function" ? i.call(this, t) : i)), r !== t && Object.assign(t, r), e.push(s), e;
  }, []).filter((e) => {
    const { when: s } = e;
    return !s || s.call(this, t);
  }), this._i18nMaps = [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean), !0;
};
Io = /* @__PURE__ */ new WeakSet();
oh = function() {
  var D, H;
  const { plugins: n } = this;
  let t = this._options;
  const e = {
    flex: /* @__PURE__ */ m("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ m("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((M) => {
    var B;
    const z = (B = M.beforeLayout) == null ? void 0 : B.call(this, t);
    z && (t = { ...t, ...z }), Object.assign(e, M.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: M } = this;
    if (M)
      i = M.clientWidth;
    else {
      this._needRender = !0;
      return;
    }
  }
  const r = Uf(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l = 35, rowConverter: c } = t, d = [], h = (M, z, B) => {
    var Y, q;
    const F = B ?? { [a]: M }, U = { data: c ? c.call(this, F, z) : F, id: M, index: d.length, top: 0 };
    if (B || (U.lazy = !0), d.push(U), ((Y = t.onAddRow) == null ? void 0 : Y.call(this, U, z)) !== !1) {
      for (const L of n)
        if (((q = L.onAddRow) == null ? void 0 : q.call(this, U, z)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let M = 0; M < o; M++)
      h(`${M}`, M);
  else
    Array.isArray(o) && o.forEach((M, z) => {
      typeof M == "object" ? h(`${M[a] ?? ""}`, z, M) : h(`${M ?? ""}`, z);
    });
  let u = d;
  const f = {};
  if (t.onAddRows) {
    const M = t.onAddRows.call(this, u, r);
    M && (u = M);
  }
  for (const M of n) {
    const z = (D = M.onAddRows) == null ? void 0 : D.call(this, u, r);
    z && (u = z);
  }
  u.forEach((M, z) => {
    f[M.id] = M, M.index = z, M.top = M.index * l;
  });
  const { header: g, footer: _ } = t, y = g ? t.headerHeight || l : 0, v = _ ? t.footerHeight || l : 0;
  let b = t.height, w = 0;
  const C = u.length * l, S = y + v + C;
  if (typeof b == "function" && (b = b.call(this, S)), b === "auto")
    w = S;
  else if (typeof b == "object")
    w = Math.min(b.max, Math.max(b.min, S));
  else if (b === "100%") {
    const { parent: M } = this;
    if (M)
      w = M.clientHeight;
    else {
      w = 0, this._needRender = !0;
      return;
    }
  } else
    w = b;
  const $ = w - y - v, I = {
    options: t,
    allRows: d,
    width: i,
    height: w,
    rows: u,
    rowsMap: f,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: C,
    header: g,
    footer: _,
    footerGenerators: e,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, E = (H = t.onLayout) == null ? void 0 : H.call(this, I);
  E && Object.assign(I, E), n.forEach((M) => {
    if (M.onLayout) {
      const z = M.onLayout.call(this, I);
      z && Object.assign(I, z);
    }
  }), this._layout = I;
};
fr = /* @__PURE__ */ new WeakSet();
ah = function() {
  (kt(this, Dn, Ao).call(this) || !this._layout) && kt(this, Io, oh).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), u = [], { rowDataGetter: f } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && f && (_.data = f([_.id])[0], _.lazy = !1), u.push(_);
  }
  return Object.assign(n, {
    visibleRows: u,
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
Do.addPlugin = Yc;
Do.removePlugin = Jc;
function lh(n, t, e, s) {
  if (typeof n == "function" && (n = n.call(this, t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return Array.isArray(e) ? /* @__PURE__ */ m(We, { children: e }) : e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ m("a", { href: X(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Po(n, t, e) {
  if (n == null)
    return;
  const s = t.row.data;
  return e = e ?? (s == null ? void 0 : s[t.col.name]), typeof n == "function" ? n.call(this, e, t) : X(n, { ...s, 0: e });
}
function ch(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? s ?? "" : n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n.call(this, e, t)), jt(e, n, s ?? e))) : s ?? e;
}
function hh(n, t) {
  const { link: e } = t.col.setting, s = lh.call(this, e, t, n[0]);
  return s && (n[0] = s), n;
}
function dh(n, t) {
  const { format: e, digits: s } = t.col.setting;
  let i = n[0];
  return typeof s == "number" && !Number.isNaN(Number(i)) && (i = Number(i), s >= 0 && (i = i.toFixed(s))), e && (i = Po.call(this, e, t, i)), n[0] = i, n;
}
function uh(n, t) {
  const { map: e, mapSplitter: s = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = n[0];
    typeof r == "string" && s && (r = r.split(s)), typeof e == "function" ? n[0] = e.call(this, r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), n[0] = r.map((o) => e[o] ?? o).join(i ?? s));
  }
  return n;
}
function fh(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n.call(this, e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function ph(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = ch.call(this, s, t, n[0], i), n;
}
function pr(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Po.call(this, s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Kf = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return pr.call(this, n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ m(
          ei,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ m(
          si,
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
    if (e && (n = ph.call(this, n, t, e)), n = uh.call(this, n, t), n = dh.call(this, n, t), s ? n = pr.call(this, n, t) : n = hh.call(this, n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = X(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = fh.call(this, r, n, t)), n;
  }
}, Gf = mt(Kf, { buildIn: !0 }), qf = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = Q(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = Q(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, Yf = {
  name: "sort",
  defaultOptions: { sort: !1 },
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
      ...qf,
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
    const o = ((l = s == null ? void 0 : s.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${o}` });
    return n[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      n[0],
      a
    ] }), n.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), n;
  }
}, Jf = mt(Yf, { buildIn: !0 }), Xf = {
  html: { component: ye }
}, Zf = {
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
        component: ye,
        props: { html: X(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Xf[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((u) => {
        if (u) {
          const { props: f } = u;
          f && p.extend(d, typeof f == "function" ? f.call(this, t) : f), l = u.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ m(h, { ...d }) };
    }), n;
  }
}, Qf = mt(Zf);
function tp(n, t) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const e = this.state.checkedRows, s = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, d) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === d || (d ? e[c] = !0 : delete e[c], s[c] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !mh.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(s).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, s, e);
    c && Object.keys(c).forEach((d) => {
      const h = i ? i.call(this, d) : !0;
      !h || !r && h === "disabled" || (c[d] ? e[d] = !0 : delete e[d]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, s);
    });
  }
  return s;
}
function ep(n) {
  return this.state.checkedRows[n] ?? !1;
}
function mh() {
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
function sp() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function np(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function Da(n, t, e = !1, s = void 0) {
  return /* @__PURE__ */ m(Xn, { className: "dtable-checkbox", checked: n, disabled: e, label: s });
}
const Pa = 'input[type="checkbox"],.dtable-checkbox', ip = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Da
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
    toggleCheckRows: tp,
    isRowChecked: ep,
    isAllRowChecked: mh,
    getChecks: sp,
    toggleCheckable: np
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
        /* @__PURE__ */ m("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Da(n, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ m(R, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ m("div", { className: "dtable-check-info", children: r.join(", ") })
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
    const e = t.closest(Pa);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = p(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Pa).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, rp = mt(ip), op = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new Ks(`DTable:${this.id}`) };
  }
}, ap = mt(op);
var gh = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(gh || {});
function Pn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = Pn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Pn.call(this, t.parent).level + 1 : 0, t;
}
function lp(n) {
  return n !== void 0 ? Pn.call(this, n) : this.data.nestedMap;
}
function cp(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !_h.call(this)), t) {
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
function _h() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function yh(n, t = 1, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = yh(n, t, o.children, s + 1)));
  }
  return t;
}
function vh(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, vh(n, r, e, s);
  }), i;
}
function bh(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && bh(n, r.parent, e, s, i);
}
const ln = "dtable-nested-toggle", hp = {
  name: "nested",
  plugins: [ap],
  requireAfter: ["sortable"],
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
      if (!this.options.checkable || !(n != null && n.length) || this.options.noNestedCheck)
        return;
      const s = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = vh(this, i, r, s);
        o != null && o.parent && bh(this, o.parent, r, s, e);
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
    getNestedInfo: lp,
    toggleRow: cp,
    isAllCollapsed: _h,
    getNestedRowInfo: Pn
  },
  onCreate() {
    let { defaultNestedState: n } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (n = t);
    }
    if (n === !0) {
      const { data: t, rowKey: e = "id" } = this.options;
      Array.isArray(t) && (n = t.reduce((s, i) => (s[typeof i == "string" ? i : i[e]] = !0, s), {}));
    }
    this.state.nestedState = n || {};
  },
  onMounted() {
    this.options.defaultNestedState === !0 && !this.options.preserveNested && this.toggleRow("HEADER", !0);
  },
  beforeLayout() {
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(n) {
    this.data.nestedRowMap.set(n.id, n);
  },
  onAddRows(n) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    n.forEach((r) => {
      var c, d;
      const o = t.get(r.id) ?? {
        state: "",
        level: 0
      };
      let a = ((c = r.data) == null ? void 0 : c[this.options.nestedParentKey ?? "parent"]) ?? [];
      Array.isArray(a) || (a = [a]);
      let l;
      for (a = [...a]; a.length; ) {
        let h = a.pop();
        if (h === void 0)
          continue;
        if (h = String(h), e.get(h)) {
          l = h;
          break;
        }
      }
      if (o.parent = l === "0" ? void 0 : l, (d = r.data) != null && d[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(r.id, o), l) {
        let h = t.get(l);
        h || (h = {
          state: "",
          level: 0
        }, t.set(l, h)), h.children || (h.children = []), h.children.push(r.id);
      }
    });
    const s = /* @__PURE__ */ new Map(), i = n.length * 100;
    return n = n.filter((r) => {
      const o = this.getNestedRowInfo(r.id);
      return s.set(r.id, o), o.state !== "hidden";
    }), yh(s), n.sort((r, o) => {
      const a = s.get(r.id), l = s.get(o.id);
      return ((a == null ? void 0 : a.order) ?? i + r.index) - ((l == null ? void 0 : l.order) ?? i + o.index);
    }), n;
  },
  onRenderCell(n, t) {
    var c;
    const { row: e, col: s } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = s.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const d = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(d) && d > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ m("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: X(a, r) }) : h = /* @__PURE__ */ m(R, { className: "dtable-child-label", content: a, generatorThis: t }), n.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && n.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, s, r)) ?? /* @__PURE__ */ m("a", { className: `${ln} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: d = o } = s.setting;
      d && (d === !0 && (d = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ m("div", { className: "dtable-nested-indent", style: { width: d * l.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ m("a", { className: `${ln} state`, children: /* @__PURE__ */ m("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${ln}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${ln}`)))
      return this.toggleRow(t), !0;
  }
}, dp = mt(hp);
function Li(n, { row: t, col: e }) {
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
    className: k(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ m(Vs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: u } = e.setting, f = typeof u == "function" ? u(e, t) : u;
    n[0] = /* @__PURE__ */ m("button", { type: "button", className: "btn btn-avatar", ...f, children: [
      n[0],
      /* @__PURE__ */ m("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ m("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ m("span", { children: d })
    ] }));
  return n;
}
const up = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Li
    },
    avatarBtn: {
      onRenderCell: Li
    },
    avatarName: {
      onRenderCell: Li
    }
  }
}, fp = mt(up, { buildIn: !0 }), pp = {
  name: "sort-type",
  defaultOptions: { sortType: !0 },
  when: (n) => !!n.sortType && !n.sort,
  onRenderHeaderCell(n, t) {
    const { col: e } = t, { setting: s } = e;
    let { sortType: i } = s;
    if (e.setting.sort !== void 0 || i === !1)
      return n;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ m("div", { className: `dtable-sort dtable-sort-${a}` });
      n.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = s;
      if (c) {
        const d = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, d, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...u } = c;
        n[0] = /* @__PURE__ */ m("a", { className: "dtable-sort-link", href: X(h, { ...s, sortType: d }), ...u, children: [
          typeof n[0] != "object" || gt(n[0]) ? n[0] : e.name,
          l
        ] });
      } else
        n.push(l);
    }
    return n;
  }
}, mp = mt(pp, { buildIn: !0 }), Ri = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.border !== void 0 || t.setting.group === n[e - 1].setting.group || (t.border = "left");
  });
}, gp = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    Ri(t.left.list), Ri(t.center.list), Ri(t.right.list);
  }
}, _p = mt(gp);
const yp = {
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
        n.push(/* @__PURE__ */ m("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, vp = mt(yp), bp = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayCellSet: s } = this.data, { rows: i, cols: r, rowHeight: o } = n;
    e.clear(), s.clear();
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((u, f) => {
        const { index: g } = u, _ = `C${g}R${h}`;
        if (s.has(_))
          return;
        const y = t.call(this, { row: c, col: u });
        if (!y)
          return;
        const v = Math.min(y.colSpan || 1, l.length - f), b = Math.min(y.rowSpan || 1, i.length - d);
        if (v <= 1 && b <= 1)
          return;
        let w = 0;
        for (let C = 0; C < v; C++) {
          w += l[f + C].realWidth;
          for (let S = 0; S < b; S++) {
            const $ = `C${g + C}R${h + S}`;
            $ !== _ && s.add($);
          }
        }
        e.set(_, {
          colSpan: v,
          rowSpan: b,
          width: w,
          height: o * b
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
    if (this.data.overlayCellSet.has(s))
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
}, wp = mt(bp), Cp = {
  name: "mousemove",
  events: {
    click(n) {
      this.data.ignoreNextClick && (n.preventDefault(), this.data.ignoreNextClick = void 0);
    },
    mousedown() {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick);
    },
    mousemove(n) {
      this.data.mmRafID && cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", n), this.data.mmRafID = 0;
      }), n.preventDefault();
    },
    document_mousemove(n) {
      this.data.dmmRafID && cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", n), this.data.mmRafID = 0;
      });
    }
  },
  methods: {
    ignoreNextClick(n = 10) {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick), this.data.ignoreNextClick = window.setTimeout(() => {
        this.data.ignoreNextClick = void 0;
      }, n);
    }
  }
}, wh = mt(Cp);
function Sp() {
  var w, C, S, $;
  const { scrollToMouse: n } = this.data;
  if (!n)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: s } = n;
  if (!t || Date.now() - e < s)
    return;
  const i = (C = (w = this.ref.current) == null ? void 0 : w.querySelector(".dtable-body")) == null ? void 0 : C.getBoundingClientRect();
  if (!i)
    return;
  const r = ($ = (S = this.ref.current) == null ? void 0 : S.querySelector(".dtable-scroll-center")) == null ? void 0 : $.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = n, { x: d, y: h } = t, { top: u, bottom: f } = i, { left: g, right: _ } = r || i;
  let y = 0;
  d < g - a ? y = -Math.max(o, g - a - d) : d > _ - a && (y = Math.max(o, d - (_ - a)));
  let v = 0;
  if (h < u - a ? v = -Math.max(o, u - a - h) : h > f - a && (v = Math.max(o, h - (f - a))), c) {
    const I = new Set((Array.isArray(c) ? c : [c]).reduce((E, D) => (D === "x" ? E.push("left", "right") : D === "y" ? E.push("top", "bottom") : E.push(D), E), []));
    (!I.has("left") && y < 0 || !I.has("right") && y > 0) && (y = 0), (!I.has("top") && v < 0 || !I.has("bottom") && v > 0) && (v = 0);
  }
  const b = {};
  y !== 0 && (b.scrollLeft = this.layout.scrollLeft + l * y), v !== 0 && (b.scrollTop = this.layout.scrollTop + l * v), this.scroll(b);
}
const kp = {
  name: "autoscroll",
  plugins: [wh],
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
        speed: 0.5,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...n
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(Sp.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, xp = mt(kp);
const $p = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (n) => !!n.sortable,
  plugins: [wh, xp],
  resetState: !0,
  state() {
    return {
      rowOrders: void 0,
      sortingFrom: void 0,
      sortingPos: void 0,
      sortingTo: void 0,
      sortingSide: void 0
    };
  },
  events: {
    click(n) {
      n.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(n) {
      var a;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!p(n.target).closest(t).length)
        return;
      const i = this.getPointerInfo(n);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, n)) === !1)
        return;
      n.preventDefault();
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
          const c = this.layout.rows.map((f) => f.id), d = [...c], h = o.index, u = a.index;
          if (!(h === u + 1 && l === "after") && !(h === u - 1 && l === "before")) {
            const f = c.splice(h, 1);
            c.splice(u, 0, f[0]), i = {}, r = [], c.forEach((g, _) => {
              i[g] = _, r.push(g);
            }), (d.join() === r.join() || ((s = this.options.onSort) == null ? void 0 : s.call(this, o, a, l, r)) === !1) && (i = void 0, r = void 0);
          }
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && this.ignoreNextClick(), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: (c) => p.extend({
            sortingFrom: void 0,
            sortingPos: void 0,
            sortingTo: void 0,
            sortingSide: void 0
          }, i ? { rowOrders: {
            ...c.rowOrders,
            ...i
          } } : null)
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
      var $;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, d = l.height - s - i, h = n.clientX - l.left, u = n.clientY - l.top - s;
      if (h < 0 || h > c || u < 0 || u > d)
        return e.state;
      const f = u + o, g = r.find((I) => I.top <= f && I.top + a > f);
      if (!g)
        return e.state;
      const _ = e.from, y = g.id !== _.id ? g.id : void 0, v = y ? this.getRowInfo(y) : void 0, b = u, w = f < g.top + a / 2 ? "before" : "after";
      return v && (($ = this.options.canSortTo) == null ? void 0 : $.call(this, _, v, w)) !== !1 ? {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: v,
        sortingSide: w
      } : {
        sortingFrom: _,
        sortingPos: b,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(n) {
    const { rowOrders: t } = this.state;
    if (!t)
      return;
    const e = n.length * 100;
    return n = n.sort((s, i) => {
      const r = t[s.id] ?? e + s.index, o = t[i.id] ?? e + i.index;
      return r - o;
    }), n;
  },
  beforeRender(n) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = n;
    t && (e.some((s) => s.id === t.id) || (n.visibleRows = [...e, t]), n.className = k(n.className, "dtable-sorting"));
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
}, Tp = mt($p), Np = {
  name: "pager",
  state() {
    const n = this.props.localPager;
    if (n) {
      const { page: t = 1, recTotal: e = 0, recPerPage: s = 20, pageTotal: i = 1 } = this.props.footPager || {};
      return {
        pager: {
          page: t,
          recTotal: e,
          recPerPage: s,
          pageTotal: i,
          ...typeof n == "object" ? n : null
        }
      };
    }
    return {};
  },
  footer: {
    pager() {
      let { footPager: n } = this.options;
      const { localPager: t } = this.options;
      return n ? (n = {
        items: [
          {
            type: "link",
            page: "first",
            icon: "icon-first-page"
          },
          {
            type: "link",
            page: "prev",
            icon: "icon-angle-left"
          },
          {
            type: "info",
            text: "{page}/{pageTotal}"
          },
          {
            type: "link",
            page: "next",
            icon: "icon-angle-right"
          },
          {
            type: "link",
            page: "last",
            icon: "icon-last-page"
          }
        ],
        ...n
      }, Array.isArray(n.items) && n.items.forEach((e) => {
        e.type === "size-menu" && e.caret === void 0 && (e.caret = "up");
      }), this.options.localPager && (Object.assign(n, {
        ...typeof t == "object" ? t : null,
        ...this.state.pager,
        recTotal: this.layout.allRows.length,
        useState: !0
      }), n.onChangePageInfo = (e) => {
        this.update({
          dirtyType: "layout",
          state: (s) => ({ pager: { ...s.pager, ...e } })
        });
      }), [/* @__PURE__ */ m(So, { ...n })]) : [];
    }
  },
  onAddRows(n) {
    const { localPager: t } = this.options;
    if (t) {
      const { page: e = 1, recPerPage: s = 20 } = {
        ...typeof t == "object" ? t : null,
        ...this.state.pager
      }, i = (e - 1) * s, r = Math.min(e * s, n.length);
      return n.slice(i, r);
    }
  }
}, Ep = mt(Np), Mp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: gh,
  avatar: fp,
  cellspan: wp,
  checkable: rp,
  custom: Qf,
  group: _p,
  headerGroup: vp,
  nested: dp,
  pager: Ep,
  renderDatetime: ch,
  renderDatetimeCell: ph,
  renderFormat: Po,
  renderFormatCell: dh,
  renderHtmlCell: pr,
  renderLink: lh,
  renderLinkCell: hh,
  renderMapCell: uh,
  renderStyleMapCell: fh,
  rich: Gf,
  sort: Jf,
  sortType: mp,
  sortable: Tp
}, Symbol.toStringTag, { value: "Module" }));
class fs extends W {
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
fs.NAME = "DTable";
fs.Component = Do;
fs.definePlugin = mt;
fs.removePlugin = Jc;
fs.getPlugin = Xc;
fs.plugins = Mp;
class Lo extends Z {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      color: s,
      name: i,
      gapLeft: r,
      gapRight: o
    } = t;
    return O(super._getProps(t), {
      style: {
        "--kanban-col-color": s,
        "--kanban-col-width": tt(e),
        "--kanban-col-gap-left": tt(r),
        "--kanban-col-gap-right": tt(o)
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
      titleAlign: o = "center",
      subtitle: a,
      subtitleClass: l,
      icon: c,
      trailingIcon: d,
      actions: h,
      subCols: u
    } = t;
    return [
      /* @__PURE__ */ m("div", { className: `kanban-header-col-wrapper is-align-${o}`, children: [
        /* @__PURE__ */ m("div", { className: "kanban-header-title", children: [
          c ? /* @__PURE__ */ m(nt, { className: "as-leading-icon", icon: c }, "icon") : null,
          e ? /* @__PURE__ */ m("span", { className: k("as-prefix", s), children: /* @__PURE__ */ m(R, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ m("span", { className: k("as-title", r), title: typeof i == "string" ? i : void 0, children: /* @__PURE__ */ m(R, { content: i }) }, "title") : null,
          a ? /* @__PURE__ */ m("span", { className: k("as-subtitle", l), children: /* @__PURE__ */ m(R, { content: a }) }, "subtitle") : null,
          d ? /* @__PURE__ */ m(nt, { className: "as-trailing-icon", icon: d }, "trailingIcon") : null
        ] }, "title"),
        yt.render(h, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      u ? /* @__PURE__ */ m("div", { className: "kanban-header-sub-cols", children: u.map((f, g) => /* @__PURE__ */ m(Lo, { index: g, ...f }, f.name)) }, "subs") : null
    ];
  }
}
class Ap extends j {
  constructor() {
    super(...arguments), this._ref = V();
  }
  componentDidMount() {
    this._ref.current && (this._sticky = Tl.ensure(this._ref.current, { scrollContainer: ".kanban-list" }));
  }
  componentWillUnmount() {
    var t;
    (t = this._sticky) == null || t.destroy();
  }
  render(t) {
    return /* @__PURE__ */ m("div", { className: "kanban-header", ref: this._ref, children: [
      /* @__PURE__ */ m("div", { className: "kanban-header-lane-name" }, "name"),
      /* @__PURE__ */ m("div", { className: "kanban-header-cols", children: t.cols.map((e, s) => /* @__PURE__ */ m(Lo, { index: s, ...e }, e.name)) }, "cols")
    ] });
  }
}
class Ch extends j {
  constructor() {
    super(...arguments), this._listRef = V(), this._renderItem = (t) => {
      const { itemRender: e, lane: s, name: i } = this.props;
      return e.call(this, { item: t, lane: s, col: i });
    }, this._handleScroll = (t) => {
      const { current: e } = this._listRef;
      e && p(e).trigger("laneColScroll", t);
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      p(this._listRef.current).trigger("laneColResize", e[0]);
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
      itemCountPerRow: u,
      gapLeft: f,
      gapRight: g,
      laneColClass: _
    } = t, y = {
      "--kanban-col-color": i,
      "--kanban-col-width": tt(s),
      "--kanban-col-gap-left": tt(f),
      "--kanban-col-gap-right": tt(g)
    };
    return /* @__PURE__ */ m("div", { className: k("kanban-lane-col", _), style: y, "z-lane": h, "z-col": d, children: [
      r ? /* @__PURE__ */ m("div", { className: k("kanban-col-content", o), children: /* @__PURE__ */ m(R, { content: r, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ m("div", { className: "kanban-items scrollbar-thin scrollbar-hover", onScroll: this._handleScroll, children: /* @__PURE__ */ m(
        us,
        {
          forwardRef: c ? this._listRef : void 0,
          itemProps: { className: "kanban-item card-list-item" },
          items: e,
          itemRender: a ? this._renderItem : void 0,
          countPerRow: u,
          gap: l
        },
        "list"
      ) })
    ] });
  }
}
Ch.defaultProps = {
  watchSize: !0
};
class Ip extends Z {
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
      name: o,
      gapTop: a,
      gapBottom: l
    } = t;
    return O(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: tt(e),
        minHeight: tt(s),
        maxHeight: tt(i),
        "--kanban-col-gap-top": tt(a),
        "--kanban-col-gap-bottom": tt(l)
      },
      "z-lane": o
    });
  }
  _renderCol(t, e, s, i, r) {
    if (r) {
      const o = r(t, e);
      o && (e = { ...e, ...o });
    }
    return /* @__PURE__ */ m(Ch, { itemRender: s, lane: t.name, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      title: e,
      titleClass: s,
      actions: i,
      cols: r,
      items: o = {},
      hideName: a,
      itemRender: l,
      getLaneCol: c
    } = t;
    return [
      a ? null : /* @__PURE__ */ m("div", { className: "kanban-lane-name", children: [
        yt.render(i, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this),
        /* @__PURE__ */ m("div", { className: k("kanban-lane-title", s), title: typeof e == "string" ? e : void 0, children: /* @__PURE__ */ m(R, { content: e }) }, "title")
      ] }, "name"),
      /* @__PURE__ */ m("div", { className: "kanban-lane-cols", children: r.reduce((d, h) => (h.subCols ? h.subCols.forEach((u) => {
        d.push(this._renderCol(t, u, l, o, c));
      }) : d.push(this._renderCol(t, h, l, o, c)), d), []) }, "cols")
    ];
  }
}
function Dp(n) {
  const { lanes: t, cols: e, items: s = {}, itemRender: i, hideLaneName: r, getLaneCol: o } = n;
  return /* @__PURE__ */ m("div", { className: "kanban-body", children: t.map((a, l) => /* @__PURE__ */ m(Ip, { index: l, cols: e, items: s[a.name], hideName: r, itemRender: i, getLaneCol: o, ...a }, a.name)) });
}
const xt = 12, Pp = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
}, _e = ({ from: n, to: t, fromKanban: e, toKanban: s }) => `${e ? `${e}_` : ""}${n}-${s ? `${s}_` : ""}${t}`;
function La(n, t) {
  return t === "top" ? { x: n.x + n.width / 2, y: n.y } : t === "left" ? { x: n.x, y: n.y + n.height / 2 } : t === "right" ? { x: n.x + n.width, y: n.y + n.height / 2 } : { x: n.x + n.width / 2, y: n.y + n.height };
}
function Lp(n, t) {
  return (n.x - t.x) * (n.x - t.x) + (n.y - t.y) * (n.y - t.y);
}
function Rp(n, t, e, s) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = s ? [s] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = La(n, c), u = La(t, d), f = Lp(h, u) * (Pp[c] === d ? 1 : 2);
      f < o && (o = f, e = c, s = d, a = h, l = u);
    });
  }), {
    fromSide: e,
    toSide: s,
    fromPos: a,
    toPos: l
  };
}
function zp(n, t) {
  return { x: (n.x + t.x) / 2, y: (n.y + t.y) / 2 };
}
function Sh(n, t) {
  return {
    x: Math.min(n.x, t.x),
    y: Math.min(n.y, t.y),
    width: Math.abs(n.x - t.x),
    height: Math.abs(n.y - t.y)
  };
}
function Ra(n, t, e) {
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
function Op(n, t, e, s, i = "curve", r = 2, o = 1) {
  const {
    x: a,
    y: l,
    width: c,
    height: d
  } = Sh(n, t), h = xt - a, u = xt - l;
  if (i === "curve") {
    const f = c * (1 + Math.max(-0.3, Math.min(0.3, 1 - c / 50))) * o, g = d * (1 + Math.max(-0.3, Math.min(0.3, 1 - d / 50))) * o, _ = r * 5, y = {
      a1x: n.x + (e === "left" ? -_ : e === "right" ? _ : 0),
      a1y: n.y + (e === "top" ? -_ : e === "bottom" ? _ : 0),
      ax: n.x + (e === "left" ? -f : e === "right" ? f : 0),
      ay: n.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (s === "left" ? -(f - _) : s === "right" ? f - _ : 0),
      by: t.y + (s === "top" ? -(g - _) : s === "bottom" ? g - _ : 0),
      b1x: t.x + (s === "left" ? -_ : s === "right" ? _ : 0),
      b1y: t.y + (s === "top" ? -_ : s === "bottom" ? _ : 0)
    };
    return `M ${n.x + h} ${n.y + u} L ${y.a1x + h} ${y.a1y + u} C ${y.ax + h} ${y.ay + u} ${y.bx + h} ${y.by + u} ${y.b1x + h} ${y.b1y + u} L ${t.x + h} ${t.y + u}`;
  }
  if (i === "fold") {
    const f = zp(n, t), g = c / 2, _ = d / 2, y = {
      ax: n.x + (e === "left" ? -g : e === "right" ? g : 0),
      ay: n.y + (e === "top" ? -_ : e === "bottom" ? _ : 0),
      bx: t.x + (s === "left" ? -g : s === "right" ? g : 0),
      by: t.y + (s === "top" ? -_ : s === "bottom" ? _ : 0)
    };
    return `M ${n.x + h} ${n.y + u} L ${y.ax + h} ${y.ay + u} L ${f.x + h} ${f.y + u} L ${y.bx + h} ${y.by + u} L ${t.x + h} ${t.y + u}`;
  }
  return `M ${n.x + h} ${n.y + u} L ${t.x + h} ${t.y + u}`;
}
function Fp(n) {
  const { fromRect: t, toRect: e } = n, s = _e(n), i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = Rp(i, r), d = Sh(l, c), { x: h, y: u, width: f, height: g } = d;
  l.x += xt - h, l.y += xt - u, c.x += xt - h, c.y += xt - u;
  const {
    weight: _ = 1.5,
    fromPoint: y,
    toPoint: v = "arrow"
  } = n, b = {
    left: `${0 - xt}px`,
    top: `${0 - xt}px`,
    width: `${f + 2 * xt}px`,
    height: `${g + 2 * xt}px`
  }, w = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": y && y !== "none" ? `url(#marker-start-${s}-${y})` : void 0,
    "marker-end": v && v !== "none" ? `url(#marker-end-${s}-${v})` : void 0,
    d: Op(l, c, o, a, n.shape, _)
  }, C = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: w.d,
    class: "opacity-0"
  }, S = {
    width: f + 2 * xt,
    height: g + 2 * xt
  }, $ = [];
  return n.lineStyle === "dashed" ? w["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : n.lineStyle === "dotted" && (w["stroke-dasharray"] = `${_} ${_}`), y && y !== "none" && $.push(Ra(y, "start", s)), v && v !== "none" && $.push(Ra(v, "end", s)), {
    x: h,
    y: u,
    width: f,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: w,
    svgPathBackProps: C,
    svgProps: S,
    markers: $,
    padding: xt
  };
}
class kh extends j {
  constructor() {
    super(...arguments), this.state = {}, this._handleMouseHover = (t) => {
      this.setState({ hover: t.type === "mouseenter" });
    }, this._onDelete = () => {
      var t;
      (t = this.props.onDelete) == null || t.call(this, this.props);
    };
  }
  render(t, e) {
    const { text: s, textSize: i, color: r, onDelete: o, weight: a = 1.5, from: l, to: c } = t, { hover: d } = e, { x: h, y: u, padding: f, width: g, height: _, svgProps: y, markers: v, svgPathProps: b, svgPathBackProps: w, fromPos: C } = Fp(t);
    return /* @__PURE__ */ m("div", { className: k("kanban-link", d ? "is-hover" : ""), style: { left: h, top: u, width: g, height: _, color: r, "--kanban-link-weight": a }, "z-from": l, "z-to": c, onMouseEnter: o ? this._handleMouseHover : void 0, onMouseLeave: o ? this._handleMouseHover : void 0, children: [
      /* @__PURE__ */ m("svg", { ...y, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
        v.length ? /* @__PURE__ */ m("defs", { children: v.map(({ path: S, id: $, ...I }) => /* @__PURE__ */ m("marker", { ...I, id: $, children: /* @__PURE__ */ m("path", { ...S }) }, $)) }) : null,
        /* @__PURE__ */ m("path", { ...w }),
        /* @__PURE__ */ m("path", { ...b })
      ] }),
      /* @__PURE__ */ m("div", { className: "kanban-link-start-point", style: { left: C.x - f, top: C.y - f } }),
      o ? /* @__PURE__ */ m("div", { className: "kanban-link-delete-btn", children: /* @__PURE__ */ m("button", { type: "button", className: "btn rounded-full size-sm square primary", onClick: this._onDelete, children: /* @__PURE__ */ m("i", { className: "close" }) }) }) : null,
      s ? /* @__PURE__ */ m("div", { className: "kanban-link-text", style: { fontSize: `${i || 12}px` }, children: s }) : null
    ] });
  }
}
const ys = ".kanban";
class Hp extends j {
  constructor() {
    super(...arguments), this._ref = V(), this.state = {};
  }
  componentDidMount() {
    const t = this._ref.current, { container: e = ".kanban" } = this.props, s = t.closest(e), i = p(s);
    this._container = s, this._multiKanban = i.find(".kanban").length > 1;
    const r = ".kanban-item,.kanban-link-editor-from";
    i.on(`mouseenter${ys}`, r, (o) => {
      if (this.state.dragPos)
        return;
      clearTimeout(this._leaveTimer);
      const a = p(o.target).closest(r), l = a.z("key");
      this.state.from === l || a.hasClass("is-dragging") || this.setState({
        from: l,
        fromKanban: this._multiKanban ? a.closest(".kanban").z("key") : void 0,
        to: void 0,
        fromRect: this._getRect(a.children()[0]),
        dragPos: void 0
      });
    }).on(`mouseleave${ys}`, r, () => {
      this.state.dragPos || (clearTimeout(this._leaveTimer), this._leaveTimer = window.setTimeout(() => {
        this._cancelHover(), this._leaveTimer = 0;
      }, 200));
    }).on(`dragstart${ys}`, ".kanban-item", () => {
      this.state.dragPos || this._cancelHover();
    }).on(`laneColScroll${ys}`, (o) => {
      const { from: a } = this.state;
      a && this.setState({ fromRect: this._getRect(p(o.target).find(`.kanban-item[z-key="${a}"]`).children()[0]) });
    }), this._moveable = new Kr(t, {
      selector: ".kanban-link-editor-point",
      move: "none",
      onMoveStart: () => {
        if (!this.state.from)
          return !1;
        i.addClass("is-adding-link");
      },
      onMove: (o) => {
        const { top: a, left: l } = s.getBoundingClientRect(), c = { left: o.clientX - l + s.scrollLeft, top: o.clientY - a + s.scrollTop };
        let d, h, u;
        const f = p(o.target).closest(r);
        f.length && d !== this.state.from && (d = f.attr("z-key"), u = this._multiKanban ? f.closest(".kanban").z("key") : void 0, h = this._getRect(f.children()[0])), this.setState({ dragPos: c, to: d, toKanban: u, toRect: h });
      },
      onMoveEnd: () => {
        const { from: o, fromKanban: a, to: l, toKanban: c } = this.state, { onAddLink: d } = this.props;
        (o !== l || a !== c) && d && o !== void 0 && l !== void 0 && (d == null || d.call(this, { from: o, fromKanban: a, to: l, toKanban: c })), this._cancelHover(), i.removeClass("is-adding-link");
      }
    });
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && p(t).off(ys), this._raf && cancelAnimationFrame(this._raf);
  }
  _getRect(t) {
    const e = t.getBoundingClientRect(), s = this._container, { top: i, left: r } = s.getBoundingClientRect();
    return {
      left: e.left - r + s.scrollLeft,
      top: e.top - i + s.scrollTop,
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
    return /* @__PURE__ */ m(
      kh,
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
    return s && i && (a = /* @__PURE__ */ m("div", { className: "kanban-link-editor-from not-moveable", "z-key": s, style: i, children: [
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-left" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-top" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-right" }),
      /* @__PURE__ */ m("div", { className: "kanban-link-editor-point is-bottom" })
    ] })), r && o && (l = /* @__PURE__ */ m("div", { className: "kanban-link-editor-to", "z-key": r, style: o })), /* @__PURE__ */ m("div", { className: k("kanban-link-editor"), ref: this._ref, children: [
      a,
      l,
      this._renderLink(e)
    ] });
  }
}
const zi = ".kanban";
class xh extends j {
  constructor() {
    super(...arguments), this._ref = V(), this._watchSet = /* @__PURE__ */ new Set(), this.state = { layout: {}, scrollTop: 0, scrollLeft: 0 };
  }
  componentDidMount() {
    var i;
    const { container: t = ".kanban" } = this.props, e = (i = this._ref.current) == null ? void 0 : i.closest(t), s = p(e);
    this._multiKanban = s.find(".kanban").length > 1, s.on(`laneColResize${zi} laneColScroll${zi}`, () => {
      this._tryUpdateLayout();
    }), this._container = e, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    const t = this._container;
    t && p(t).off(zi), this._raf && cancelAnimationFrame(this._raf);
  }
  componentDidUpdate(t) {
    (t.links !== this.props.links || t.filters !== this.props.filters) && this._tryUpdateLayout();
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._watchSet], e = this._container, s = p(e), { top: i, left: r } = e.getBoundingClientRect(), o = e.scrollTop - i, a = e.scrollLeft - r, l = {};
    t.forEach((c) => {
      const [d, h] = c.split("_"), u = s.find(`${this._multiKanban ? `.kanban[z-key="${d}"] ` : ""}.kanban-item[z-key="${h}"]`).children()[0];
      if (u && Bs(u, { container: ".kanban-lane-col" })) {
        const { top: f, left: g, bottom: _, right: y } = u.getBoundingClientRect();
        l[c] = { top: f + o, left: g + a, bottom: _ + o, right: y + a };
      }
    }), this.setState({ layout: l });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: s, fromKanban: i = "", to: r, toKanban: o = "" } = t, a = `${i}_${s}`, l = `${o}_${r}`, c = e[a], d = e[l];
    return this._watchSet.add(a), this._watchSet.add(l), !c || !d ? null : /* @__PURE__ */ m(kh, { ...t, fromRect: c, toRect: d, onDelete: this.props.onDeleteLink }, `${s}-${r}`);
  }
  _renderLinks(t) {
    const { links: e, filters: s } = t, i = new Set(s), r = (o) => {
      const { from: a, to: l, fromKanban: c = "", toKanban: d = "" } = o;
      return this._multiKanban ? i.has(`${c}_${a}`) || i.has(`${d}_${l}`) || i.has(c) || i.has(d) || i.has(_e(o)) : i.has(a) || i.has(l) || i.has(`${a}-${l}`);
    };
    return e.reduce((o, a) => {
      if (!s || r(a)) {
        const l = this._renderLink(a);
        l && o.push(l);
      }
      return o;
    }, []);
  }
  _renderEditor(t) {
    const { editLinks: e, onAddLink: s, container: i } = t;
    return e ? /* @__PURE__ */ m(Hp, { container: i, onAddLink: s }, "editor") : null;
  }
  render(t) {
    return this._watchSet.clear(), /* @__PURE__ */ m("div", { className: "kanban-links", ref: this._ref, children: [
      this._renderLinks(t),
      this._renderEditor(t)
    ] });
  }
}
function Wp(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getCol: s, colProps: i, itemCountPerRow: r, itemGap: o } = t;
  let a = !1;
  const l = [], c = /* @__PURE__ */ new Map();
  return n = n.reduce((d, h, u) => {
    if (h = O({ itemGap: o, itemCountPerRow: r }, i, h), s) {
      const f = s.call(this, h);
      f !== !1 && (h = f || h);
    }
    return h.deleted || (typeof h.order == "number" ? a = !0 : h.order = u, typeof h.name != "string" && (h.name = String(h.name)), e == null || e.call(this, h), h.parentName !== void 0 ? (h.parentName = String(h.parentName), l.push(h)) : (c.set(h.name, h), d.push(h))), d;
  }, []), l.forEach((d) => {
    const h = c.get(d.parentName);
    h && (h.subCols = re(h.subCols, [d], "name"));
  }), a && (n.sort(Ls), [...c.values()].forEach((d) => {
    d.subCols && d.subCols.sort(Ls);
  })), n;
}
function Bp(n, t, e) {
  if (!n || !n.length)
    return [];
  const { getLane: s, laneProps: i } = t;
  let r = !1;
  return n = n.reduce((o, a, l) => {
    if (i && (a = O({}, i, a)), s) {
      const c = s.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.order == "number" ? r = !0 : a.order = l, a.color === void 0 && (a.color = `hsl(${43 * Ml(a.name) % 360}deg 40% 50%)`), typeof a.name != "string" && (a.name = String(a.name)), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && n.sort(Ls), n;
}
function za(n, t, e, s, i) {
  if (!(n != null && n.length))
    return [];
  const { itemProps: r, getItem: o } = s;
  let a = !1;
  return n = n.reduce((l, c) => {
    r && (c = O({}, r, c));
    const d = (o == null ? void 0 : o.call(this, { col: e.name, lane: t.name, item: c, laneInfo: t, colInfo: e })) ?? c;
    return d !== !1 && !d.deleted && (typeof d.order == "number" ? a = !0 : d.order = l.length - 1, l.push(d), i == null || i.call(this, d)), l;
  }, []), a && n.sort(Ls), n;
}
function Ls(n, t) {
  return n.order - t.order;
}
function re(n, t, e = "key") {
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
function $h(n, t) {
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
function Oa(n, t) {
  const { items: e = [], ...s } = n;
  return {
    items: $h(e, t),
    ...s
  };
}
function mr(n, t, e) {
  var a;
  const s = re(n.lanes, t.lanes, "name"), i = re(n.cols, t.cols, "name"), r = re(n.links, (a = t.links) == null ? void 0 : a.map((l) => (l[e] === void 0 && (l[e] = _e(l)), l)), e), o = re(n.items, $h(t.items || [], e), e);
  return { lanes: s, cols: i, items: o, links: r };
}
let Js = class extends Z {
  constructor() {
    super(...arguments), this._ref = V(), this._raf = 0, this._data = new Xe(this._getData.bind(this), () => {
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
    }), this._kanbanData = new Xe(() => {
      const { itemKey: t, props: e } = this, { data: s } = e, { data: i, changes: r } = this.state, o = (i || Qo(s) ? i : Oa(s, t)) || {};
      return r ? mr(o, r, t) : o;
    }, () => {
      const { data: t, changes: e, selected: s } = this.state;
      return [
        t,
        e,
        s,
        this.props.data
      ];
    }), this._handleGlobalClick = (t) => {
      p(t.target).closest(".kanban-item").length || this.select([]);
    }, this._onAddLink = async (t) => {
      const { onAddLink: e } = this.props;
      t[this.itemKey] = _e(t), await (e == null ? void 0 : e.call(this, t)) !== !1 && this.addLink(t);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    }, this._handleMouseMove = (t) => {
      this._hoverTimer && clearTimeout(this._hoverTimer);
      const e = this._getElementInfo(t.target), s = (e == null ? void 0 : e.type) === "item" ? e.key : void 0;
      this._hoverTimer = window.setTimeout(() => {
        s !== this.state.hover && this.setState({ hover: s }, () => {
          p(this._ref.current).trigger("kanbanItemHover", { kanban: this.props.key, hover: s });
        }), this._hoverTimer = 0;
      }, !s && this.state.hover ? 0 : 20);
    }, this._handleClick = (t) => {
      if (t.target.closest("a,button"))
        return;
      const { onClickItem: e, selectable: s } = this.props, i = this._getElementInfo(t.target);
      e && (i == null ? void 0 : i.type) === "item" && e.call(this, t, i) === !1 || s && (i == null ? void 0 : i.type) === "item" && this.select(i.key, !0);
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
    const { responsive: t, selectable: e } = this.props, s = this._ref.current;
    if (s && t) {
      const i = new ResizeObserver(this.updateLayout.bind(this));
      p(typeof t != "boolean" ? t : s.closest(".kanban-list") || s.parentElement).each((o, a) => {
        i.observe(a);
      }), this._rob = i, this.state.containerWidth || this.updateLayout();
    }
    e && p(document).on("click.kanban", this._handleGlobalClick);
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e, s;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy(), (s = this._rob) == null || s.disconnect(), this.props.selectable && p(document).off("click.kanban", this._handleGlobalClick);
  }
  getDefaultState(t) {
    return {
      loading: !1,
      selected: (t || this.props).defaultSelected,
      data: void 0,
      changes: void 0,
      loadFailed: void 0
    };
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: s } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = Oa(await ss(t, [this], { throws: !0 }), this.itemKey);
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
        const { responsive: e, laneNameWidth: s = 20 } = this.props, i = p(typeof e != "boolean" ? e : t.closest(".kanban-list") || t.parentElement), r = i[0];
        let o = i.width() - s - (r.offsetWidth - r.clientWidth);
        const a = t.closest(".kanban-region");
        a && (o -= a.clientWidth - p(a).width()), this.setState({ containerWidth: o });
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !Qo(e) || e === this._loadedSetting || this.load();
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
      changes: mr({ ...e.changes }, t, this.itemKey)
    }));
  }
  createSnap() {
    return {
      date: Date.now(),
      kanban: this,
      data: p.extend(!0, {}, this._data),
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
        [this.itemKey]: _e(s)
      }))
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
  }
  select(t, e) {
    let s = Array.isArray(t) ? t : t ? [t] : [], i = this.state.selected || [];
    const { onSelect: r } = this.props;
    return this.changeState((o) => {
      if (i = o.selected || [], e) {
        const a = new Set(i), l = /* @__PURE__ */ new Set();
        return s.forEach((c) => {
          a.has(c) ? a.delete(c) : l.add(c);
        }), s = [...a, ...l], { selected: s };
      }
      return { selected: s };
    }, () => {
      r == null || r(s, i), p(this._ref.current).trigger("kanbanItemSelected", { kanban: this.props.key, selected: s, oldSelected: i });
    });
  }
  _getElementInfo(t) {
    const e = p(t), s = e.closest(".kanban-item");
    if (s.length) {
      const a = s.attr("z-key");
      if (a) {
        const l = this.getItem(a);
        if (l)
          return { type: "item", key: a, element: t, item: l, lane: l.lane, col: l.col };
      }
    }
    if (e.closest(".kanban-new-item").length)
      return { type: "newItem", element: t };
    const r = e.closest(".kanban-header-col,.kanban-lane-col");
    if (r.length)
      return { type: "col", element: t, col: r.attr("z-col"), lane: r.attr("z-lane") };
    const o = e.closest(".kanban-lane").attr("z-lane");
    if (o !== void 0)
      return { type: "lane", element: t, lane: o };
  }
  _getDropInfo(t, e, s) {
    const i = this._getElementInfo(e);
    if (!i)
      return;
    const r = this._getElementInfo(s);
    if (!r || r.element.closest(".kanban") !== this.element)
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
      }, u = s.col === l.col, f = s.lane === l.lane;
      if (u && f && l[o] === s.item[o])
        return { changes: r, data: a };
      u || (h.col = s.col), f || (h.lane = s.lane);
      let g = !1;
      if (s.type === "col" && (!f || !u))
        d.push(h), g = !0;
      else if (s.type === "item") {
        const _ = s.item, y = s.col !== l.col || s.lane !== l.lane ? -1 : d.findIndex((b) => b[o] === l[o]);
        y >= 0 && d.splice(y, 1);
        const v = d.findIndex((b) => b[o] === _[o]);
        d.splice(t.side === "before" ? v : v + 1, 0, h), g = !0;
      }
      if (g) {
        r.items = [];
        let _ = -1;
        d.forEach((y, v) => {
          const b = Math.max(0, _ + 1, y.order ?? v), w = c[v];
          _ = b, (w !== y || b !== w.order) && (y = {
            ...y,
            order: b
          }), y !== w && r.items.push(y), a.list.push(y[o]);
        });
      }
    } else if (e.type === "newItem") {
      const { onDropNewItem: l } = this.props;
      let c;
      if (l ? c = l.call(this, t) : (c = p(e.element).data(), c != null && c.item && (c = c.item)), c = {
        lane: s.lane,
        col: s.col,
        ...c
      }, c != null && c[o]) {
        const h = [...i.items[s.lane][s.col]];
        h.push(c), r.items = h, a.list.push(c[o]);
      }
    }
    return { changes: r, data: a };
  }
  _initDraggable() {
    const { draggable: t } = this.props, e = this._ref.current;
    if (!t || !e)
      return;
    const { dragTypes: s = ["item", "newItem"], onDragStart: i, onDrop: r, canDrop: o, dropRules: a } = this.props, l = typeof s == "string" ? s.split(",") : s, c = {
      item: ".kanban-item",
      lane: ".kanban-lane-name",
      col: ".kanban-header-col",
      newItem: ".kanban-new-item"
    }, d = typeof t == "object" ? t : {}, h = (f, g) => {
      p(f).attr({
        "z-drag-type": g ? g.drag.type : null,
        "z-drop-type": g ? g.drop.type : null,
        "z-drop-side": g ? g.side : null
      });
    }, u = {
      ...d,
      selector: d.selector || l.map((f) => c[f] || "").filter(Boolean).join(","),
      target: d.target || ((f) => {
        const g = this._getElementInfo(f);
        if (!g)
          return;
        const _ = {
          lane: ".kanban-lane",
          col: ".kanban-header-col",
          item: ".kanban-item,.kanban-items",
          newItem: ".kanban-item,.kanban-items"
        }[g.type];
        return p(e).find(_);
      }),
      canDrop: d.canDrop || o || a ? (f, g, _) => {
        const y = this._getElementInfo(g);
        if (!y)
          return !1;
        const v = this._getElementInfo(_);
        if (!v || v.element.closest(".kanban") !== this.element)
          return !1;
        if (y.type === "item" && a) {
          const b = y.col, w = v.col, C = y.lane, S = v.lane, $ = a[`${C}:${b}`] ?? a[b];
          return typeof $ == "boolean" ? $ : !$ || $.includes(w) || $.includes(`${S}:${w}`) || $.includes(`${S}:`);
        }
        if (o)
          return o.call(this, y, v);
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
        var v;
        h(_);
        const y = this._getDropInfo(f, g, _);
        if (!y)
          return !1;
        if (r) {
          const { changes: b, data: w } = this._getDropChanges(y);
          if (Object.keys(b).length) {
            y.data = w;
            const C = this.createSnap();
            r.call(this, b, y, C.restore) !== !1 && this.update(b);
          }
        }
        return (v = d.onDrop) == null ? void 0 : v.call(this, f, g, _);
      }
    };
    this._draggable = new ni(e, u);
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData() {
    const { itemKey: t, props: e } = this, s = this._kanbanData.value;
    let i = !1;
    const { items: r = [] } = s, o = {}, a = /* @__PURE__ */ new Map(), l = Wp.call(this, s.cols, e, (y) => {
      y.parentName !== void 0 && (i = !0), a.set(y.name, y);
    }), c = Bp.call(this, s.lanes, e, (y) => {
      o[y.name] = l.reduce((v, b) => (b.subCols ? b.subCols.forEach((w) => {
        v[w.name] = [];
      }) : v[b.name] = [], v), {});
    }), d = /* @__PURE__ */ new Set(), h = r.reduce((y, v) => {
      if (v.deleted)
        return d.add(v[t]), y;
      y.set(v[t], v);
      const b = o[v.lane];
      if (b) {
        const w = b[v.col];
        w && w.push(v);
      }
      return y;
    }, /* @__PURE__ */ new Map()), { selected: u = [] } = this.state, f = new Set(u), g = (y) => {
      y.selected = f.has(y[t]);
    };
    c.forEach((y) => {
      const v = o[y.name];
      v && l.forEach((b) => {
        var w;
        v[b.name] = za.call(this, v[b.name], y, b, e, g), (w = b.subCols) == null || w.forEach((C) => {
          v[C.name] = za.call(this, v[C.name], y, C, e, g);
        });
      });
    });
    let { links: _ = [] } = s;
    return _ = _.reduce((y, v) => {
      var b;
      if (!v.deleted && h.has(v.from) && h.has(v.to) && !d.has(v.from) && !d.has(v.to)) {
        v[t] === void 0 && (v[t] = _e(v));
        const w = ((b = e.getLink) == null ? void 0 : b.call(this, v)) ?? v;
        w !== !1 && !w.deleted && y.push(w);
      }
      return y;
    }, []), { cols: l, lanes: c, items: o, map: h, colMap: a, links: _, hasSubCols: i };
  }
  _layoutCols(t, e) {
    const { containerWidth: s = 0 } = this.state, { colsGap: i = 8, minColWidth: r = 150, maxColWidth: o = 600, colWidth: a = 200 } = e, l = [];
    let c = 0;
    const d = (h) => {
      const { minWidth: u = r, maxWidth: f = o } = h;
      let { width: g = a } = h;
      typeof g == "function" && (g = g.call(this, h));
      const _ = g === "auto";
      if (_)
        g = u;
      else {
        const [y, v] = Be(g);
        v === "%" ? g = s * y / 100 : g = y;
      }
      return g = Math.min(f, Math.max(u, g)), c += g + (c ? i : 0), h = { ...h, width: g, maxWidth: f, minWidth: u }, _ && l.push(h), h;
    };
    if (t = t.map((h) => h.subCols ? {
      ...h,
      subCols: h.subCols.map(d)
    } : d(h)), l.length && c < s) {
      const h = Math.floor((s - c) / l.length);
      l.forEach((u) => {
        u.width = Math.min(u.maxWidth, Math.max(u.minWidth, u.width + h));
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
    const { laneNameWidth: e, colsGap: s, lanesGap: i, selectable: r, onClickItem: o, showLinkOnHover: a } = t;
    return O(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": e,
        "--kanban-cols-gap": tt(s),
        "--kanban-lanes-gap": tt(i)
      },
      onClick: o || r ? this._handleClick : void 0,
      onMouseMove: a ? this._handleMouseMove : void 0
    });
  }
  _renderLinks(t) {
    const { links: e = [] } = this.data, { editLinks: s } = t;
    if (!s && !e.length)
      return;
    const { showLinkOnHover: i, showLinkOnSelected: r } = t;
    let o;
    if (r || i) {
      o = [];
      const { selected: a, hover: l } = this.state;
      r && a && o.push(...a), i && l && o.push(l), o = [...new Set(o)];
    }
    return /* @__PURE__ */ m(
      xh,
      {
        links: e,
        filters: o,
        editLinks: s,
        onDeleteLink: s ? this._onDeleteLink : void 0,
        onAddLink: s ? this._onAddLink : void 0
      },
      "links"
    );
  }
  _getChildren(t) {
    const e = this._data.value, { cols: s, lanes: i, items: r } = e, { laneNameWidth: o } = t, a = this._layoutCols(s, t), l = this._layoutLanes(i, t);
    return [
      /* @__PURE__ */ m(Ap, { cols: a }, "header"),
      /* @__PURE__ */ m(
        Dp,
        {
          itemRender: t.itemRender,
          getLaneCol: t.getLaneCol,
          cols: a,
          lanes: l,
          items: r,
          hideLaneName: o === 0
        },
        "body"
      ),
      this._renderLinks(t),
      t.children
    ];
  }
};
Js.defaultProps = {
  draggable: !0,
  sticky: !0,
  responsive: !0,
  itemKey: "id",
  colWidth: 200,
  colsGap: 8
};
Js.customProps = ["onDrop", "onDragStart"];
class Fa extends Z {
  constructor() {
    super(...arguments), this._kanbanRefs = /* @__PURE__ */ new Map(), this._needUpdateData = /* @__PURE__ */ new Map(), this._handleClickHeading = (t) => {
      p(t.target).closest("a,.btn,button").not(".kanban-region-toggle").length || this.setState((e) => ({ collapsed: !e.collapsed }));
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
  getDefaultState(t) {
    return {
      collapsed: (t || this.props).collapsed,
      heading: void 0,
      items: void 0
    };
  }
  resetState(t, e) {
    this._kanbanRefs.forEach((s) => {
      var i;
      return (i = s.current) == null ? void 0 : i.resetState();
    }), super.resetState(t, e);
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(String(t))) == null ? void 0 : e.current;
  }
  toggle(t) {
    this.setState((e) => ({ collapsed: t === void 0 ? !e.collapsed : !t }));
  }
  update(t) {
    const { items: e } = t;
    return e && (t = { ...t }, t.items = e.map((s, i) => {
      const r = String(s.key || i);
      return s.deleted ? { key: r, deleted: !0 } : (s.data && typeof s.data == "object" && this.getKanban(r) && (this._needUpdateKanban(r, s.data), s = { ...s }, delete s.data), s);
    })), new Promise((s) => {
      this.setState(t.items ? (i) => ({ ...t, items: re(i.items, t.items) }) : t, s);
    });
  }
  _needUpdateKanban(t, e) {
    const s = this._needUpdateData, i = s.get(t), { kanbanItemKey: r = "key" } = this.props;
    s.set(t, mr(i || {}, e, r));
  }
  _buildItems(t) {
    const { items: e = [], kanbanProps: s, kanbanItemKey: i = "key" } = t;
    let { items: r } = this.state;
    r ? (r = re(e, r, i).filter((c) => !c.deleted), r.sort(Ls)) : r = e;
    const o = this._kanbanRefs, a = new Set(o.keys()), l = r.map((c, d) => {
      if (c.deleted)
        return null;
      const h = O(
        { className: "kanban-region-item", key: d },
        typeof s == "function" ? s.call(this, c, d) : s,
        c
      ), u = String(h.key);
      let f = o.get(u);
      return f || (f = V(), o.set(u, f)), h.ref = f, a.delete(u), /* @__PURE__ */ m(Js, { "z-key": u, ...h });
    });
    return a.forEach((c) => {
      o.delete(c);
    }), l;
  }
  _getClassName(t) {
    return ["kanban-region", t.className, this.state.collapsed ? "is-collapsed" : "is-expanded", t.heading ? "has-heading" : ""];
  }
  _getChildren(t) {
    const { heading: e, toggleFromHeading: s } = t, { collapsed: i, heading: r } = this.state, o = O({ className: "kanban-heading", onClick: s ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e, r);
    return [
      e && /* @__PURE__ */ m(ve, { ...o }, "heading"),
      i ? null : this._buildItems(t)
    ];
  }
}
const Oi = ".kanban";
let Th = class extends Z {
  constructor() {
    super(...arguments), this.state = {}, this._ref = V(), this._kanbanRefs = /* @__PURE__ */ new Map(), this._onAddLink = async (t) => {
      const { onAddLink: e, linkItemKey: s } = this.props;
      t[s] = _e(t), await (e == null ? void 0 : e.call(this, t)) !== !1 && this.addLink(t);
    }, this._onDeleteLink = async (t) => {
      const { onDeleteLink: e } = this.props;
      await (e == null ? void 0 : e.call(this, t)) !== !1 && this.deleteLink(t);
    };
  }
  componentDidMount() {
    const t = this._ref.current;
    if (t) {
      const { moveable: e, responsive: s, showLinkOnSelected: i, showLinkOnHover: r } = this.props;
      if (e && (this._moveable = new Kr(t, p.extend({ selector: "self", move: "scroll", onMoveStart: (o, a) => {
        const { bottom: l, right: c } = a.getBoundingClientRect();
        return o.clientY < l && o.clientY > l - 20 || o.clientX < c && o.clientX > c - 20 ? !1 : !p(o.target).closest("a,input,.btn,.state,.kanban-item,.not-moveable").length;
      } }, typeof e == "object" ? e : null))), i && p(t).on(`kanbanItemSelected${Oi}`, (o, a) => {
        this.setState((l) => ({
          selected: {
            ...l.selected,
            [a.kanban]: a.selected
          }
        }));
      }), r && p(t).on(`kanbanItemHover${Oi}`, (o, { kanban: a, hover: l }) => {
        this.setState({ hover: l === void 0 ? l : `${a}_${l}` });
      }), s) {
        const o = new ResizeObserver(this._tryUpdateLayout.bind(this));
        (typeof s != "boolean" ? p(s) : p(t).parent()).each((l, c) => {
          o.observe(c);
        }), this._rob = o;
      }
    }
  }
  componentWillUnmount() {
    var e, s;
    (e = this._moveable) == null || e.destroy(), (s = this._rob) == null || s.disconnect();
    const t = this._ref.current;
    t && p(t).off(Oi);
  }
  getDefaultState(t) {
    return { linkChanges: void 0 };
  }
  resetState(t, e) {
    this._kanbanRefs.forEach((s) => {
      var i;
      (i = s.current) == null || i.resetState();
    }), super.resetState(t, e);
  }
  getKanban(t) {
    const e = String(t), s = this._kanbanRefs;
    if (s.has(e))
      return s.get(e).current;
    let i = null;
    const r = Array.from(s.values());
    for (const o of r) {
      const a = o.current;
      if (a instanceof Fa && (i = a.getKanban(t), i))
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
    const e = p(t), s = e.width(), i = e.height();
    this.setState({ width: s, height: i });
  }
  updateLink(t, e) {
    return this.changeState((s) => {
      let i = Array.isArray(t) ? t : [t];
      return e && (i = i.map((r) => ({ ...r, ...e }))), { linkChanges: re(s.linkChanges, i, this.props.linkItemKey) };
    });
  }
  addLink(t) {
    return this.updateLink(t);
  }
  deleteLink(t) {
    return this.updateLink(t, { deleted: !0 });
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
    return O(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || s}px`
      }
    });
  }
  _getLinks(t) {
    const { linkChanges: e = [] } = this.state, { links: s = [], getLink: i, linkItemKey: r } = t;
    return re(s, e, this.props.linkItemKey).reduce((o, a) => {
      const l = i == null ? void 0 : i.call(this, a);
      return l !== !1 && (a = l || a, a.deleted || (a[r] || (a[r] = _e(a)), o.push(a))), o;
    }, []);
  }
  _renderLinks(t) {
    const e = this._getLinks(t), { editLinks: s } = t;
    if (!s && !e.length)
      return;
    const { showLinkOnHover: i, showLinkOnSelected: r } = t;
    let o;
    if (e.length && (r || i)) {
      o = [];
      const { selected: a = {}, hover: l } = this.state;
      r && a && Object.keys(a).forEach((c) => {
        const d = a[c];
        d.length && o.push(...d.map((h) => `${c}_${h}`));
      }), i && l && o.push(l), o = [...new Set(o)];
    }
    return /* @__PURE__ */ m(
      xh,
      {
        container: ".kanban-list",
        links: e,
        filters: o,
        editLinks: s,
        onDeleteLink: s ? this._onDeleteLink : void 0,
        onAddLink: s ? this._onAddLink : void 0
      },
      "links"
    );
  }
  _getChildren(t) {
    const { items: e = [], kanbanProps: s, showLinkOnSelected: i, showLinkOnHover: r, selectable: o, editLinks: a } = t, l = this._kanbanRefs, c = new Set(l.keys()), d = [
      ...e.map((u, f) => {
        s && (u = typeof s == "function" ? s.call(this, u, f) : p.extend({}, s, u));
        const g = String(u.key ?? f);
        let _ = l.get(g);
        _ || (_ = V(), l.set(g, _)), c.delete(g);
        const y = u.heading !== void 0 || u.items;
        return (i || r || o) && (y ? u.kanbanProps = { showLinkOnSelected: i, showLinkOnHover: r, selectable: o, ...u.kanbanProps } : u = { showLinkOnSelected: i, showLinkOnHover: r, selectable: o, ...u }), a && (y ? u.items = (u.items || []).map((b) => ({ ...b, editLinks: !1 })) : u = { ...u, editLinks: !1 }), /* @__PURE__ */ m(y ? Fa : Js, { ref: _, sticky: t.sticky, ...u, "z-key": g }, g);
      }),
      t.children
    ];
    c.forEach((u) => {
      l.delete(u);
    });
    const h = this._renderLinks(t);
    return h && d.push(h), d;
  }
};
Th.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0,
  linkItemKey: "id"
};
class pi extends W {
}
pi.NAME = "Kanban";
pi.replace = !0;
pi.Component = Js;
pi.register();
class mi extends W {
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
mi.NAME = "KanbanList";
mi.replace = !0;
mi.Component = Th;
mi.register();
const jp = "nav", Fi = '[data-toggle="tab"]', Up = "active";
class Ln extends ot {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, s = e.find(Fi);
    let i = t ? p(t).closest(Fi) : s.filter(`.${Up}`);
    if (!i.length && (i = e.find(Fi).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = e.closest(".tabs"), l = a.length ? a.find(r) : p(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      l.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
Ln.NAME = "Tabs";
Ln.toggle = {
  name: "tab",
  handler(n, t) {
    const e = p(n), s = e.closest(`.${jp}`);
    s.length && Ln.ensure(s, t).active(e);
  }
};
Ln.register();
export {
  p as $,
  zr as Ajax,
  rc as Avatar,
  Gp as BUILD,
  Yp as BUILD_HASH,
  qp as BUILD_MODE,
  oc as BtnGroup,
  Ld as Bus,
  Mo as Card,
  Kc as CardList,
  uo as ColorPicker,
  Yn as CommonList,
  ot as Component,
  W as ComponentFromReact,
  Xe as Computed,
  ui as ContextMenu,
  Fr as Custom,
  R as CustomContent,
  pu as CustomContentClass,
  ql as CustomRender,
  fs as DTable,
  qc as Dashboard,
  po as DatePicker,
  mo as DatetimePicker,
  ni as Draggable,
  oe as Dropdown,
  vo as FileSelector,
  Z as HElement,
  du as HElementSignals,
  ye as HtmlContent,
  nt as Icon,
  bo as ImageSelector,
  pi as Kanban,
  mi as KanbanList,
  Zn as List,
  Hr as Menu,
  vm as Messager,
  En as Modal,
  Is as ModalBase,
  xs as ModalTrigger,
  Kr as Moveable,
  Ac as Nav,
  Qn as NestedList,
  Rc as Pager,
  ko as Pick,
  $o as Picker,
  Kt as Popover,
  Co as PopoverPanel,
  Yl as Portal,
  Ur as ProgressCircle,
  j as ReactComponent,
  To as SearchBox,
  Wr as SearchMenu,
  jc as SearchTree,
  Wc as Sidebar,
  ft as Signal,
  sc as Sortable,
  Yr as SortableList,
  Jr as SortableTree,
  Zr as Split,
  Tl as Sticky,
  Es as TIME_DAY,
  Ln as Tabs,
  fo as TimePicker,
  Bc as Toolbar,
  Ps as Tooltip,
  No as Tree,
  Eo as Upload,
  Uc as UploadImgs,
  Kp as VERSION,
  Yd as addDate,
  ou as batch,
  Lr as bindCommands,
  bl as bindHotkeys,
  ce as bus,
  p as cash,
  k as classes,
  Xp as clearData,
  Ul as computed,
  Me as convertBytes,
  kl as create,
  Q as createDate,
  Sd as createFormData,
  gu as createPortal,
  V as createRef,
  Ee as deepCall,
  $r as deepGet,
  vd as deepGetPath,
  tm as defineFn,
  yn as delay,
  Id as disableScroll,
  cm as dom,
  Jo as downloadFile,
  qn as effect,
  Wd as enterFullscreen,
  Ze as evalValue,
  Xo as executeCommand,
  Xd as executeCommands,
  ss as fetchData,
  qt as formatBytes,
  jt as formatDate,
  rm as formatDateSpan,
  X as formatString,
  rl as getClassList,
  Kn as getComponent,
  Pr as getFullscreenElement,
  vl as getHotkeysMap,
  hu as getReactComponent,
  Ml as getUniqueCode,
  Ts as getZData,
  Pt as h,
  Qp as hotkeys,
  J as i18n,
  qd as init,
  xl as initGlobalComponents,
  Wi as isDiff,
  Qo as isFetchSetting,
  Jp as isNotEmptyString,
  Le as isSameDay,
  Nl as isSameMonth,
  em as isSameWeek,
  Vi as isSameYear,
  sm as isToday,
  im as isTomorrow,
  El as isValidDate,
  gt as isValidElement,
  nm as isYesterday,
  Zp as jsRaw,
  O as mergeProps,
  wt as nextGid,
  Ki as parseCommand,
  Jd as parseCommands,
  kd as parseRawData,
  Be as parseSize,
  Gl as reactComponents,
  lm as readFile,
  jd as registerComponent,
  om as registerGlobalCommand,
  Pd as registerGlobalListener,
  ct as registerReactComponent,
  ml as removeUndefinedProps,
  Ge as render,
  Xi as renderCustomContent,
  fu as renderCustomResult,
  Gi as runJS,
  am as selectFile,
  Ve as setFormDataValue,
  Vo as setZData,
  $d as shareData,
  js as signal,
  ie as store,
  Er as storeData,
  Mr as takeData,
  tt as toCssSize,
  Cl as toggleFullscreen,
  Rr as unbindCommands,
  wl as unbindHotkeys,
  hm as untracked
};
//# sourceMappingURL=zui.esm.js.map
