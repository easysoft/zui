var $s = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var ht = (n, t, e) => ($s(n, t, "read from private field"), e ? e.call(n) : t.get(n)), dt = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, bt = (n, t, e, s) => ($s(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var Ns = (n, t, e) => ($s(n, t, "access private method"), e);
const zd = "3.0.0", Od = 1732172418263, Hd = "production", Ft = document, $n = window, bo = Ft.documentElement, pe = Ft.createElement.bind(Ft), wo = pe("div"), Es = pe("table"), Wl = pe("tbody"), Er = pe("tr"), { isArray: Xn, prototype: Co } = Array, { concat: jl, filter: bi, indexOf: So, map: xo, push: Bl, slice: ko, some: wi, splice: Vl } = Co, Ul = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Kl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, ql = /<.+>/, Gl = /^\w+$/;
function Ci(n, t) {
  const e = Yl(t);
  return !n || !e && !he(t) && !tt(t) ? [] : !e && Kl.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && Gl.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class Qn {
  constructor(t, e) {
    if (!t)
      return;
    if (Vs(t))
      return t;
    let s = t;
    if (at(t)) {
      const i = e || Ft;
      if (s = Ul.test(t) && he(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : ql.test(t) ? No(t) : Vs(i) ? i.find(t) : at(i) ? p(i).find(t) : Ci(t, i), !s)
        return;
    } else if (ge(t))
      return this.ready(t);
    (s.nodeType || s === $n) && (s = [s]), this.length = s.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new Qn(t, e);
  }
}
const x = Qn.prototype, p = x.init;
p.fn = p.prototype = x;
x.length = 0;
x.splice = Vl;
typeof Symbol == "function" && (x[Symbol.iterator] = Co[Symbol.iterator]);
function Vs(n) {
  return n instanceof Qn;
}
function xe(n) {
  return !!n && n === n.window;
}
function he(n) {
  return !!n && n.nodeType === 9;
}
function Yl(n) {
  return !!n && n.nodeType === 11;
}
function tt(n) {
  return !!n && n.nodeType === 1;
}
function Jl(n) {
  return !!n && n.nodeType === 3;
}
function Zl(n) {
  return typeof n == "boolean";
}
function ge(n) {
  return typeof n == "function";
}
function at(n) {
  return typeof n == "string";
}
function _t(n) {
  return n === void 0;
}
function Ge(n) {
  return n === null;
}
function To(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Si(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
p.isWindow = xe;
p.isFunction = ge;
p.isArray = Xn;
p.isNumeric = To;
p.isPlainObject = Si;
function et(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Si(n)) {
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
p.each = et;
x.each = function(n) {
  return et(this, n);
};
x.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Nn(...n) {
  const t = Zl(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return Nn(t, p, e);
  for (let i = 0; i < s; i++) {
    const r = n[i];
    for (const o in r)
      t && (Xn(r[o]) || Si(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Nn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
p.extend = Nn;
x.extend = function(n) {
  return Nn(x, n);
};
const Xl = /\S+/g;
function ts(n) {
  return at(n) ? n.match(Xl) || [] : [];
}
x.toggleClass = function(n, t) {
  const e = ts(n), s = !_t(t);
  return this.each((i, r) => {
    tt(r) && et(e, (o, a) => {
      s ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(n) {
  return this.toggleClass(n, !0);
};
x.removeAttr = function(n) {
  const t = ts(n);
  return this.each((e, s) => {
    tt(s) && et(t, (i, r) => {
      s.removeAttribute(r);
    });
  });
};
function Ql(n, t) {
  if (n) {
    if (at(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !tt(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return Ge(e) ? void 0 : e;
      }
      return _t(t) ? this : Ge(t) ? this.removeAttr(n) : this.each((e, s) => {
        tt(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
x.attr = Ql;
x.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
x.hasClass = function(n) {
  return !!n && wi.call(this, (t) => tt(t) && t.classList.contains(n));
};
x.get = function(n) {
  return _t(n) ? ko.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
x.eq = function(n) {
  return p(this.get(n));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function tc(n) {
  return _t(n) ? this.get().map((t) => tt(t) || Jl(t) ? t.textContent : "").join("") : this.each((t, e) => {
    tt(e) && (e.textContent = n);
  });
}
x.text = tc;
function Wt(n, t, e) {
  if (!tt(n))
    return;
  const s = $n.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function Mt(n, t) {
  return parseInt(Wt(n, t), 10) || 0;
}
function Ar(n, t) {
  return Mt(n, `border${t ? "Left" : "Top"}Width`) + Mt(n, `padding${t ? "Left" : "Top"}`) + Mt(n, `padding${t ? "Right" : "Bottom"}`) + Mt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const As = {};
function ec(n) {
  if (As[n])
    return As[n];
  const t = pe(n);
  Ft.body.insertBefore(t, null);
  const e = Wt(t, "display");
  return Ft.body.removeChild(t), As[n] = e !== "none" ? e : "block";
}
function Mr(n) {
  return Wt(n, "display") === "none";
}
function $o(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function es(n) {
  return at(n) ? (t, e) => $o(e, n) : ge(n) ? n : Vs(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
x.filter = function(n) {
  const t = es(n);
  return p(bi.call(this, (e, s) => t.call(e, s, e)));
};
function te(n, t) {
  return t ? n.filter(t) : n;
}
x.detach = function(n) {
  return te(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const nc = /^\s*<(\w+)[^>]*>/, sc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Pr = {
  "*": wo,
  tr: Wl,
  td: Er,
  th: Er,
  thead: Es,
  tbody: Es,
  tfoot: Es
};
function No(n) {
  if (!at(n))
    return [];
  if (sc.test(n))
    return [pe(RegExp.$1)];
  const t = nc.test(n) && RegExp.$1, e = Pr[t] || Pr["*"];
  return e.innerHTML = n, p(e.childNodes).detach().get();
}
p.parseHTML = No;
x.has = function(n) {
  const t = at(n) ? (e, s) => Ci(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
x.not = function(n) {
  const t = es(n);
  return this.filter((e, s) => (!at(n) || tt(s)) && !t.call(s, e, s));
};
function Bt(n, t, e, s) {
  const i = [], r = ge(t), o = s && es(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (r) {
      const c = t(n[a]);
      c.length && Bl.apply(i, c);
    } else {
      let c = n[a][t];
      for (; c != null && !(s && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function Eo(n) {
  return n.multiple && n.options ? Bt(bi.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function ic(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || zo.test(e.type)) {
      const i = Xn(n) ? xo.call(n, String) : Ge(n) ? [] : [String(n)];
      s ? et(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = _t(n) || Ge(n) ? "" : n;
  }) : this[0] && Eo(this[0]);
}
x.val = ic;
x.is = function(n) {
  const t = es(n);
  return wi.call(this, (e, s) => t.call(e, s, e));
};
p.guid = 1;
function Rt(n) {
  return n.length > 1 ? bi.call(n, (t, e, s) => So.call(s, t) === e) : n;
}
p.unique = Rt;
x.add = function(n, t) {
  return p(Rt(this.get().concat(p(n, t).get())));
};
x.children = function(n) {
  return te(p(Rt(Bt(this, (t) => t.children))), n);
};
x.parent = function(n) {
  return te(p(Rt(Bt(this, "parentNode"))), n);
};
x.index = function(n) {
  const t = n ? p(n)[0] : this[0], e = n ? this : p(t).parent().children();
  return So.call(e, t);
};
x.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
x.siblings = function(n) {
  return te(p(Rt(Bt(this, (t) => p(t).parent().children().not(t)))), n);
};
x.find = function(n) {
  return p(Rt(Bt(this, (t) => Ci(n, t))));
};
const rc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, oc = /^$|^module$|\/(java|ecma)script/i, ac = ["type", "src", "nonce", "noModule"];
function lc(n, t) {
  const e = p(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (oc.test(i.type) && bo.contains(i)) {
      const r = pe("script");
      r.text = i.textContent.replace(rc, ""), et(ac, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function cc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && lc(t, n.ownerDocument);
}
function ee(n, t, e, s, i, r, o, a) {
  return et(n, (l, c) => {
    et(p(c), (u, h) => {
      et(p(t), (f, d) => {
        const _ = e ? h : d, m = e ? d : h, v = e ? u : f;
        cc(_, v ? m.cloneNode(!0) : m, s, i, !v);
      }, a);
    }, o);
  }, r), t;
}
x.after = function() {
  return ee(arguments, this, !1, !1, !1, !0, !0);
};
x.append = function() {
  return ee(arguments, this, !1, !1, !0);
};
function hc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (_t(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    tt(s) && (t ? p(s).empty().append(n) : s.innerHTML = n);
  });
}
x.html = hc;
x.appendTo = function(n) {
  return ee(arguments, this, !0, !1, !0);
};
x.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = p(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
x.before = function() {
  return ee(arguments, this, !1, !0);
};
x.wrapAll = function(n) {
  let t = p(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
x.wrap = function(n) {
  return this.each((t, e) => {
    const s = p(n)[0];
    p(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
x.insertAfter = function(n) {
  return ee(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(n) {
  return ee(arguments, this, !0, !0);
};
x.prepend = function() {
  return ee(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(n) {
  return ee(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return p(Rt(Bt(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
x.next = function(n, t, e) {
  return te(p(Rt(Bt(this, "nextElementSibling", t, e))), n);
};
x.nextAll = function(n) {
  return this.next(n, !0);
};
x.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
x.parents = function(n, t) {
  return te(p(Rt(Bt(this, "parentElement", !0, t))), n);
};
x.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
x.prev = function(n, t, e) {
  return te(p(Rt(Bt(this, "previousElementSibling", t, e))), n);
};
x.prevAll = function(n) {
  return this.prev(n, !0);
};
x.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
x.map = function(n) {
  return p(jl.apply([], xo.call(this, (t, e) => n.call(t, e, t))));
};
x.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Wt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || bo;
  });
};
x.slice = function(n, t) {
  return p(ko.call(this, n, t));
};
const uc = /-([a-z])/g;
function xi(n) {
  return n.replace(uc, (t, e) => e.toUpperCase());
}
x.ready = function(n) {
  const t = () => setTimeout(n, 0, p);
  return Ft.readyState !== "loading" ? t() : Ft.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = p(t);
    e.replaceWith(e.children());
  }), this;
};
x.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + $n.pageYOffset,
    left: t.left + $n.pageXOffset
  };
};
x.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = Wt(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Wt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && tt(i)) {
      const r = p(i).offset();
      e.top -= r.top + Mt(i, "borderTopWidth"), e.left -= r.left + Mt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Mt(n, "marginTop"),
    left: e.left - Mt(n, "marginLeft")
  };
};
const Ao = {
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
x.prop = function(n, t) {
  if (n) {
    if (at(n))
      return n = Ao[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
x.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Ao[n] || n];
  });
};
const dc = /^--/;
function ki(n) {
  return dc.test(n);
}
const Ms = {}, { style: fc } = wo, pc = ["webkit", "moz", "ms"];
function gc(n, t = ki(n)) {
  if (t)
    return n;
  if (!Ms[n]) {
    const e = xi(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${pc.join(`${s} `)}${s}`.split(" ");
    et(i, (r, o) => {
      if (o in fc)
        return Ms[n] = o, !1;
    });
  }
  return Ms[n];
}
const mc = {
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
function Mo(n, t, e = ki(n)) {
  return !e && !mc[n] && To(t) ? `${t}px` : t;
}
function _c(n, t) {
  if (at(n)) {
    const e = ki(n);
    return n = gc(n, e), arguments.length < 2 ? this[0] && Wt(this[0], n, e) : n ? (t = Mo(n, t, e), this.each((s, i) => {
      tt(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
x.css = _c;
function Po(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const yc = /^\s+|\s+$/;
function Ir(n, t) {
  const e = n.dataset[t] || n.dataset[xi(t)];
  return yc.test(e) ? e : Po(JSON.parse, e);
}
function vc(n, t, e) {
  e = Po(JSON.stringify, e), n.dataset[xi(t)] = e;
}
function bc(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Ir(this[0], s);
    return e;
  }
  if (at(n))
    return arguments.length < 2 ? this[0] && Ir(this[0], n) : _t(t) ? this : this.each((e, s) => {
      vc(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
x.data = bc;
function Io(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
et([!0, !1], (n, t) => {
  et(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    x[i] = function(r) {
      if (this[0])
        return xe(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : he(this[0]) ? Io(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (r && t ? Mt(this[0], `margin${e ? "Top" : "Left"}`) + Mt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
et(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  x[e] = function(s) {
    if (!this[0])
      return _t(s) ? void 0 : this;
    if (!arguments.length)
      return xe(this[0]) ? this[0].document.documentElement[`client${t}`] : he(this[0]) ? Io(this[0], t) : this[0].getBoundingClientRect()[e] - Ar(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((r, o) => {
      if (!tt(o))
        return;
      const a = Wt(o, "boxSizing");
      o.style[e] = Mo(e, i + (a === "border-box" ? Ar(o, !n) : 0));
    });
  };
});
const Rr = "___cd";
x.toggle = function(n) {
  return this.each((t, e) => {
    if (!tt(e))
      return;
    const s = Mr(e);
    (_t(n) ? s : n) ? (e.style.display = e[Rr] || "", Mr(e) && (e.style.display = ec(e.tagName))) : s || (e[Rr] = Wt(e, "display"), e.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Dr = "___ce", Ti = ".", $i = { focus: "focusin", blur: "focusout" }, Ro = { mouseenter: "mouseover", mouseleave: "mouseout" }, wc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ni(n) {
  return Ro[n] || $i[n] || n;
}
function Ei(n) {
  const t = n.split(Ti);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(n, t) {
  if (at(n)) {
    const [s, i] = Ei(n), r = Ni(s);
    if (!r)
      return this;
    const o = wc.test(r) ? "MouseEvents" : "HTMLEvents";
    n = Ft.createEvent(o), n.initEvent(r, !0, !0), n.namespace = i.join(Ti), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in $i;
  return this.each((s, i) => {
    e && ge(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Do(n) {
  return n[Dr] = n[Dr] || {};
}
function Cc(n, t, e, s, i) {
  const r = Do(n);
  r[t] = r[t] || [], r[t].push([e, s, i]), n.addEventListener(t, i);
}
function Lo(n, t) {
  return !t || !wi.call(t, (e) => n.indexOf(e) < 0);
}
function En(n, t, e, s, i) {
  const r = Do(n);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !Lo(o, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in r)
      En(n, t, e, s, i);
}
x.off = function(n, t, e) {
  if (_t(n))
    this.each((s, i) => {
      !tt(i) && !he(i) && !xe(i) || En(i);
    });
  else if (at(n))
    ge(t) && (e = t, t = ""), et(ts(n), (s, i) => {
      const [r, o] = Ei(i), a = Ni(r);
      this.each((l, c) => {
        !tt(c) && !he(c) && !xe(c) || En(c, a, o, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
x.remove = function(n) {
  return te(this, n).detach().off(), this;
};
x.replaceWith = function(n) {
  return this.before(n).remove();
};
x.replaceAll = function(n) {
  return p(n).replaceWith(this), this;
};
function Sc(n, t, e, s, i) {
  if (!at(n)) {
    for (const r in n)
      this.on(r, t, e, n[r], i);
    return this;
  }
  return at(t) || (_t(t) || Ge(t) ? t = "" : _t(e) ? (e = t, t = "") : (s = e, e = t, t = "")), ge(s) || (s = e, e = void 0), s ? (et(ts(n), (r, o) => {
    const [a, l] = Ei(o), c = Ni(a), u = a in Ro, h = a in $i;
    c && this.each((f, d) => {
      if (!tt(d) && !he(d) && !xe(d))
        return;
      const _ = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !Lo(l, m.namespace.split(Ti)) || !t && (h && (m.target !== d || m.___ot === c) || u && m.relatedTarget && d.contains(m.relatedTarget)))
          return;
        let v = d;
        if (t) {
          let b = m.target;
          for (; !$o(b, t); )
            if (b === d || (b = b.parentNode, !b))
              return;
          v = b;
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
            return e;
          }
        });
        const y = s.call(v, m, m.___td);
        i && En(d, c, l, t, _), y === !1 && (m.preventDefault(), m.stopPropagation());
      };
      _.guid = s.guid = s.guid || p.guid++, Cc(d, c, l, t, _);
    });
  }), this) : this;
}
x.on = Sc;
function xc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
x.one = xc;
const kc = /\r?\n/g;
function Tc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(kc, `\r
`))}`;
}
const $c = /file|reset|submit|button|image/i, zo = /radio|checkbox/i;
x.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    et(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || $c.test(i.type) || zo.test(i.type) && !i.checked)
        return;
      const r = Eo(i);
      if (!_t(r)) {
        const o = Xn(r) ? r : [r];
        et(o, (a, l) => {
          n += Tc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = p;
function Nc(n, t) {
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
function Ai(n, t, e) {
  try {
    const s = Nc(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function se(n, t, e, s) {
  const i = Ai(n, t);
  return typeof i == "function" ? i.apply(s || n, e) : i;
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
var Mi = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Mi || {});
function Lt(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / Mi[e]).toFixed(t) + e);
}
const _e = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Mi[s];
};
let Pi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ht;
function Ec() {
  return Pi;
}
function Ac(n) {
  Pi = n.toLowerCase().replace("-", "_");
}
function Oo(n, t) {
  Ht || (Ht = {}), typeof n == "string" && (n = { [n]: t ?? {} }), p.extend(!0, Ht, n);
}
function j(n, t, e, s, i, r) {
  Array.isArray(n) ? Ht && n.unshift(Ht) : n = Ht ? [Ht, n] : [n], typeof e == "string" && (r = i, i = s, s = e, e = void 0);
  const o = i || Pi;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Ht ? `${r}.${t}` : t;
    if (a = Ai(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? V(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Mc(n, t, e, s) {
  return j(void 0, n, t, e, s);
}
j.addLang = Oo;
j.getLang = Mc;
j.getCode = Ec;
j.setCode = Ac;
j.map = Ht;
Oo({
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
function Lr(n, t, e) {
  n instanceof Headers ? n.set(t, e) : Array.isArray(n) ? n.push([t, e]) : n[t] = e;
}
function ve(n, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((s) => ve(n, t, s)) : !(e instanceof Blob) && p.isPlainObject(e) ? Object.entries(e).forEach(([s, i]) => {
    ve(n, `${t}[${s}]`, i);
  }) : n.append(t, e instanceof Blob ? e : String(e)));
}
function Pc(n, t) {
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
function Ic(n, t) {
  const e = t || new FormData();
  return n && (typeof n == "string" && (n = new URLSearchParams(n)), n instanceof URLSearchParams ? n.forEach((s, i) => {
    ve(e, i, s);
  }) : Array.isArray(n) ? n.forEach(([s, i]) => {
    ve(e, s, i);
  }) : n instanceof FormData ? n.forEach((s, i) => {
    ve(e, i, s);
  }) : p.isPlainObject(n) && Object.entries(n).forEach(([s, i]) => {
    ve(e, s, i);
  })), e;
}
class Ii {
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
      success: f,
      error: d,
      complete: _,
      ...m
    } = this.setting;
    e && (m.method = e);
    let v = s;
    v && (i && (v = Ic(v)), m.body = v), o && (m.mode = "cors");
    const y = m.headers || {};
    Lr(y, "X-Requested-With", "XMLHttpRequest"), r && Lr(y, "Content-Type", r), m.headers = y, m.signal && m.signal.addEventListener("abort", () => {
      this.abort();
    });
    const b = [...this.constructor.globalBeforeSends, h];
    for (const w of b) {
      if (!w)
        continue;
      const C = w.call(this, m);
      if (C === !1)
        return;
      C && Object.assign(m, C);
    }
    f && this.success(f), d && this.fail(d), _ && this.complete(_), m.signal = this._controller.signal, this.url = t, this.request = m;
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
        const f = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), d = f ? "blob" : e || Pc(a.headers.get("Content-Type"), s);
        f || d === "blob" || d === "file" ? c = await a.blob() : d === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const _ = (i == null ? void 0 : i(c, d)) ?? c;
        this._emit("success", _, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      this.data === void 0 && c !== void 0 && (this.data = c), l = h;
      let f = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : f = !0), this.error = l, f || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
Ii.globalBeforeSends = [];
p.ajax = (n, t) => {
  t = t || {}, typeof n == "string" ? t.url = n : p.extend(t, n);
  const e = new Ii(t);
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
async function ns(n, t = [], e, s, i) {
  const r = { throws: !0, dataType: "json" };
  if (typeof n == "string")
    r.url = n;
  else if (typeof n == "object")
    p.extend(r, n);
  else if (typeof n == "function") {
    const l = n.call(s, ...t);
    return l instanceof Promise ? await l : l;
  }
  e && p.extend(r, typeof e == "function" ? e(r) : e), r.url && (r.url = V(r.url, ...t));
  const o = new Ii(r);
  i == null || i(o);
  const [a] = await o.send();
  return a;
}
function Fd(n) {
  return !!(n && (typeof n == "string" || typeof n == "object" && n.url || typeof n == "function"));
}
p.fetch = ns;
function ut() {
  return p.guid++;
}
function Us(n, t) {
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
          if (Us(n[l], t[l]))
            return !0;
        return !1;
      }
      const o = Object.keys(n), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if (Us(n[l], t[l]))
          return !0;
      return !1;
    }
    if (e === "function" && s === "function")
      return n.toString() !== t.toString();
  }
  return n !== t;
}
class An {
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
    return (!e || t.some((s, i) => s instanceof An ? s.value !== e[i] : Us(s, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((s) => s instanceof An ? s.cache : s)), this._value;
  }
}
function Ho(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ho(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((r) => s(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...n) => Ho(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
p.classes = k;
p.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = p(s);
    n === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(n, ...t));
  });
};
const be = /* @__PURE__ */ new WeakMap();
function Ri(n, t, e) {
  const s = be.has(n), i = s ? be.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, p(n).dataset(), i), be.set(n, i)) : be.delete(n);
}
function Di(n, t, e) {
  let s = be.get(n) || {};
  return e && n instanceof Element && (s = Object.assign({}, p(n).dataset(), s)), t === void 0 ? s : s[t];
}
function Wd(n) {
  be.delete(n);
}
p.fn.dataset = p.fn.data;
p.fn.data = function(...n) {
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? this.length ? Di(this[0], t, !0) : void 0 : this.each((s, i) => Ri(i, t, e));
};
p.fn.removeData = function(n = null) {
  return this.each((t, e) => Ri(e, n));
};
function ke(n, ...t) {
  return n.includes("RAWJS") && (n = n.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(`return ${n}`)(...t);
}
function jd(n, ...t) {
  return n.includes("RAWJS") ? ke(n, ...t) : JSON.parse(n);
}
function Bd(n) {
  return JSON.stringify(n, (t, e) => {
    if (typeof e == "function")
      return `RAWJS<${e.toString().split('"').join("<RAWJS_QUOTE>").split(`
`).join("<RAWJS_LINE>")}>RAWJS`;
  });
}
function Ye(n, t) {
  const e = p(n)[0];
  if (!e)
    return;
  const { prefix: s, getter: i, evalValue: r, json: o = !0, evalArgs: a = [] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, l = Array.isArray(r) ? new Set(r) : void 0;
  return Array.from(e.attributes).reduce((c, u) => {
    let { name: h } = u;
    const { value: f } = u;
    let d = f;
    if (h.startsWith(s)) {
      if (h = h.slice(s.length).replace(/-([a-z])/g, (_) => _[1].toUpperCase()), i)
        d = i(h, f);
      else
        try {
          r && (!l || l.has(h)) || r === void 0 && f.includes("RAWJS") ? d = ke(f, ...a) : o && (d = JSON.parse(f));
        } catch {
        }
      c[h] = d;
    }
    return c;
  }, {});
}
function zr(n, t, e = "z-") {
  const s = p(n);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), s.attr(`${e}${i}`, r);
  });
}
function Rc(...n) {
  var e;
  const t = n.length;
  if (!t)
    return Ye(this);
  if (t === 1) {
    const [s] = n;
    return typeof s == "string" ? (e = Ye(this)) == null ? void 0 : e[s] : (p.isPlainObject(s) && zr(this, s), this);
  }
  return zr(this, { [n[0]]: n[1] }), this;
}
p.fn.z = Rc;
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
const Mn = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Dc = {};
p.share = Dc;
var ss, z, Fo, ot, ae, Or, Wo, Ks, Li, qs, Gs, Je = {}, jo = [], Lc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, is = Array.isArray;
function qt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Bo(n) {
  n && n.parentNode && n.parentNode.removeChild(n);
}
function wt(n, t, e) {
  var s, i, r, o = {};
  for (r in t)
    r == "key" ? s = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? ss.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (r in n.defaultProps)
      o[r] === void 0 && (o[r] = n.defaultProps[r]);
  return wn(n, o, s, i, null);
}
function wn(n, t, e, s, i) {
  var r = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Fo, __i: -1, __u: 0 };
  return i == null && z.vnode != null && z.vnode(r), r;
}
function G() {
  return { current: null };
}
function Ae(n) {
  return n.children;
}
function F(n, t) {
  this.props = n, this.context = t;
}
function Te(n, t) {
  if (t == null)
    return n.__ ? Te(n.__, n.__i + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? Te(n) : null;
}
function Vo(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Vo(n);
  }
}
function Hr(n) {
  (!n.__d && (n.__d = !0) && ae.push(n) && !Pn.__r++ || Or !== z.debounceRendering) && ((Or = z.debounceRendering) || Wo)(Pn);
}
function Pn() {
  var n, t, e, s, i, r, o, a;
  for (ae.sort(Ks); n = ae.shift(); )
    n.__d && (t = ae.length, s = void 0, r = (i = (e = n).__v).__e, o = [], a = [], e.__P && ((s = qt({}, i)).__v = i.__v + 1, z.vnode && z.vnode(s), zi(e.__P, s, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? Te(i), !!(32 & i.__u), a), s.__v = i.__v, s.__.__k[s.__i] = s, qo(o, s, a), s.__e != r && Vo(s)), ae.length > t && ae.sort(Ks));
  Pn.__r = 0;
}
function Uo(n, t, e, s, i, r, o, a, l, c, u) {
  var h, f, d, _, m, v = s && s.__k || jo, y = t.length;
  for (e.__d = l, zc(e, t, v), l = e.__d, h = 0; h < y; h++)
    (d = e.__k[h]) != null && (f = d.__i === -1 ? Je : v[d.__i] || Je, d.__i = h, zi(n, d, f, i, r, o, a, l, c, u), _ = d.__e, d.ref && f.ref != d.ref && (f.ref && Oi(f.ref, null, d), u.push(d.ref, d.__c || _, d)), m == null && _ != null && (m = _), 65536 & d.__u || f.__k === d.__k ? l = Ko(d, l, n) : typeof d.type == "function" && d.__d !== void 0 ? l = d.__d : _ && (l = _.nextSibling), d.__d = void 0, d.__u &= -196609);
  e.__d = l, e.__e = m;
}
function zc(n, t, e) {
  var s, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (n.__k = [], s = 0; s < l; s++)
    (i = t[s]) != null && typeof i != "boolean" && typeof i != "function" ? (o = s + h, (i = n.__k[s] = typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? wn(null, i, null, null, null) : is(i) ? wn(Ae, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? wn(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n, i.__b = n.__b + 1, r = null, (a = i.__i = Oc(i, e, o, u)) !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a == o - 1 ? h-- : a == o + 1 ? h++ : (a > o ? h-- : h++, i.__u |= 65536))) : i = n.__k[s] = null;
  if (u)
    for (s = 0; s < c; s++)
      (r = e[s]) != null && !(131072 & r.__u) && (r.__e == n.__d && (n.__d = Te(r)), Go(r, r));
}
function Ko(n, t, e) {
  var s, i;
  if (typeof n.type == "function") {
    for (s = n.__k, i = 0; s && i < s.length; i++)
      s[i] && (s[i].__ = n, t = Ko(s[i], t, e));
    return t;
  }
  n.__e != t && (t && n.type && !e.contains(t) && (t = Te(n)), e.insertBefore(n.__e, t || null), t = n.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function In(n, t) {
  return t = t || [], n == null || typeof n == "boolean" || (is(n) ? n.some(function(e) {
    In(e, t);
  }) : t.push(n)), t;
}
function Oc(n, t, e, s) {
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
function Fr(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Lc.test(t) ? e : e + "px";
}
function mn(n, t, e, s, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || Fr(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || Fr(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in n || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + r] = e, e ? s ? e.u = s.u : (e.u = Li, n.addEventListener(t, r ? Gs : qs, r)) : n.removeEventListener(t, r ? Gs : qs, r);
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
function Wr(n) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + n];
      if (t.t == null)
        t.t = Li++;
      else if (t.t < e.u)
        return;
      return e(z.event ? z.event(t) : t);
    }
  };
}
function zi(n, t, e, s, i, r, o, a, l, c) {
  var u, h, f, d, _, m, v, y, b, w, C, S, $, E, N, A, I = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = z.__b) && u(t);
  t:
    if (typeof I == "function")
      try {
        if (y = t.props, b = "prototype" in I && I.prototype.render, w = (u = I.contextType) && s[u.__c], C = u ? w ? w.props.value : u.__ : s, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : (b ? t.__c = h = new I(y, C) : (t.__c = h = new F(y, C), h.constructor = I, h.render = Fc), w && w.sub(h), h.props = y, h.state || (h.state = {}), h.context = C, h.__n = s, f = h.__d = !0, h.__h = [], h._sb = []), b && h.__s == null && (h.__s = h.state), b && I.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = qt({}, h.__s)), qt(h.__s, I.getDerivedStateFromProps(y, h.__s))), d = h.props, _ = h.state, h.__v = t, f)
          b && I.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), b && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (b && I.getDerivedStateFromProps == null && y !== d && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, C), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, C) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.some(function(T) {
              T && (T.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, C), b && h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(d, _, m);
          });
        }
        if (h.context = C, h.props = y, h.__P = n, h.__e = !1, $ = z.__r, E = 0, b) {
          for (h.state = h.__s, h.__d = !1, $ && $(t), u = h.render(h.props, h.state, h.context), N = 0; N < h._sb.length; N++)
            h.__h.push(h._sb[N]);
          h._sb = [];
        } else
          do
            h.__d = !1, $ && $(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++E < 25);
        h.state = h.__s, h.getChildContext != null && (s = qt(qt({}, s), h.getChildContext())), b && !f && h.getSnapshotBeforeUpdate != null && (m = h.getSnapshotBeforeUpdate(d, _)), Uo(n, is(A = u != null && u.type === Ae && u.key == null ? u.props.children : u) ? A : [A], t, e, s, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (T) {
        if (t.__v = null, l || r != null) {
          for (t.__u |= l ? 160 : 128; a && a.nodeType === 8 && a.nextSibling; )
            a = a.nextSibling;
          r[r.indexOf(a)] = null, t.__e = a;
        } else
          t.__e = e.__e, t.__k = e.__k;
        z.__e(T, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Hc(e.__e, t, e, s, i, r, o, l, c);
  (u = z.diffed) && u(t);
}
function qo(n, t, e) {
  t.__d = void 0;
  for (var s = 0; s < e.length; s++)
    Oi(e[s], e[++s], e[++s]);
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
function Hc(n, t, e, s, i, r, o, a, l) {
  var c, u, h, f, d, _, m, v = e.props, y = t.props, b = t.type;
  if (b === "svg" ? i = "http://www.w3.org/2000/svg" : b === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((d = r[c]) && "setAttribute" in d == !!b && (b ? d.localName === b : d.nodeType === 3)) {
        n = d, r[c] = null;
        break;
      }
  }
  if (n == null) {
    if (b === null)
      return document.createTextNode(y);
    n = document.createElementNS(i, b, y.is && y), a && (z.__m && z.__m(t, r), a = !1), r = null;
  }
  if (b === null)
    v === y || a && n.data === y || (n.data = y);
  else {
    if (r = r && ss.call(n.childNodes), v = e.props || Je, !a && r != null)
      for (v = {}, c = 0; c < n.attributes.length; c++)
        v[(d = n.attributes[c]).name] = d.value;
    for (c in v)
      if (d = v[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = d;
        else if (!(c in y)) {
          if (c == "value" && "defaultValue" in y || c == "checked" && "defaultChecked" in y)
            continue;
          mn(n, c, null, d, i);
        }
      }
    for (c in y)
      d = y[c], c == "children" ? f = d : c == "dangerouslySetInnerHTML" ? u = d : c == "value" ? _ = d : c == "checked" ? m = d : a && typeof d != "function" || v[c] === d || mn(n, c, d, v[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === n.innerHTML) || (n.innerHTML = u.__html), t.__k = [];
    else if (h && (n.innerHTML = ""), Uo(n, is(f) ? f : [f], t, e, s, b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && Te(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        Bo(r[c]);
    a || (c = "value", b === "progress" && _ == null ? n.removeAttribute("value") : _ !== void 0 && (_ !== n[c] || b === "progress" && !_ || b === "option" && _ !== v[c]) && mn(n, c, _, v[c], i), c = "checked", m !== void 0 && m !== n[c] && mn(n, c, m, v[c], i));
  }
  return n;
}
function Oi(n, t, e) {
  try {
    if (typeof n == "function") {
      var s = typeof n.__u == "function";
      s && n.__u(), s && t == null || (n.__u = n(t));
    } else
      n.current = t;
  } catch (i) {
    z.__e(i, e);
  }
}
function Go(n, t, e) {
  var s, i;
  if (z.unmount && z.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Oi(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (r) {
        z.__e(r, t);
      }
    s.base = s.__P = null;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Go(s[i], t, e || typeof n.type != "function");
  e || Bo(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function Fc(n, t, e) {
  return this.constructor(n, e);
}
function we(n, t, e) {
  var s, i, r, o;
  z.__ && z.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], zi(t, n = (!s && e || t).__k = wt(Ae, null, [n]), i || Je, Je, t.namespaceURI, !s && e ? [e] : i ? null : t.firstChild ? ss.call(t.childNodes) : null, r, !s && e ? e : i ? i.__e : t.firstChild, s, o), qo(r, n, o);
}
ss = jo.slice, z = { __e: function(n, t, e, s) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(n)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Fo = 0, ot = function(n) {
  return n != null && n.constructor == null;
}, F.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof n == "function" && (n = n(qt({}, e), this.props)), n && qt(e, n), n != null && this.__v && (t && this._sb.push(t), Hr(this));
}, F.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Hr(this));
}, F.prototype.render = Ae, ae = [], Wo = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Ks = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, Pn.__r = 0, Li = 0, qs = Wr(!1), Gs = Wr(!0);
function O(n, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((s) => {
      let i = e[s];
      const r = n[s];
      i !== r && (r !== void 0 && (s === "className" || s.endsWith("Class") ? i = [r, i] : s === "children" ? i = [...In(r), ...In(i)] : typeof r == "object" && (s === "style" || s.endsWith("Style") || s === "attrs" || s.endsWith("Attrs") || s === "props") && (i = p.extend(r, i))), n[s] = i);
    });
  }), n;
}
function Yo(n) {
  return Object.keys(n).forEach((t) => {
    n[t] === void 0 && delete n[t];
  }), n;
}
function Wc(n, t = !0) {
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
    Wc(e, n);
  });
};
p.fn.enableScroll = function(n = !0) {
  return this.disableScroll(!n);
};
function Ps(n, t, e) {
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
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? Ai(window, l) : a(l) : c = l, typeof c == "function") {
      const u = [], h = e.params;
      e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((f) => (f = f.trim(), f === "$element" ? n : f === "event" ? t : f === "options" ? e : f.startsWith("$element.") || f.startsWith("event.") || f.startsWith("options.") ? a(f) : r(f)))) : Array.isArray(h) ? u.push(...h) : u.push(h), c(...u);
    }
  }
  e.do && a(e.do);
}
function jc(n) {
  const t = p(this), e = n.type, s = t.attr("zui-on");
  if (s) {
    const [o, a] = s.split("~").map((l) => l.trim());
    o && o.split(" ").includes(e) && Ps(t, n, p.extend({
      on: o
    }, a ? a.startsWith("{") ? ke(a) : { do: a } : Ye(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && Ps(t, n, p.extend({
    on: e
  }, i.startsWith("{") ? ke(i) : { do: i }));
  const r = t.attr("data-on");
  r && r.split(" ").includes(e) && Ps(t, n, Ye(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Bc(n) {
  p(document).off(".zui.global").on(n.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${n.map((t) => `[zui-on-${t}]`)},[data-on]`, jc);
}
p(() => {
  Bc(["click", "change", "inited"]);
});
function Hi(n, t) {
  if (typeof n == "function")
    return Hi(n(...t || []));
  if (typeof n == "number")
    return [n];
  let e = n.match(/(\d+)(%|px)?/);
  return e ? [parseInt(e[1]), e[2]] : (e = n.match(/(\d+)\/(\d+)/), e ? [100 * parseInt(e[1]) / parseInt(e[2]), "%"] : [NaN]);
}
function Gt(n, t) {
  if (n == null)
    return null;
  const [e, s = "px"] = Hi(n, t);
  return Number.isNaN(e) ? typeof n == "string" ? n : null : `${e}${s}`;
}
async function jr(n, t) {
  var s, i, r;
  if (n instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(n), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), n;
  }
  if (n instanceof Response) {
    const o = await n.blob();
    return t = t || ((r = (i = (s = n.headers.get("Content-Disposition")) == null ? void 0 : s.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), jr(o, t);
  }
  const e = await fetch(n);
  return jr(e);
}
class Vc {
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
const jt = new Vc(document);
p.bus = jt;
p.on = jt.on.bind(jt);
p.one = jt.one.bind(jt);
p.off = jt.off.bind(jt);
p.trigger = jt.trigger.bind(jt);
var Uc = ["Shift", "Meta", "Alt", "Control"], Jo = typeof navigator == "object" ? navigator.platform : "", Zo = /Mac|iPod|iPhone|iPad/.test(Jo), Kc = Zo ? "Meta" : "Control", qc = Jo === "Win32" ? ["Control", "Alt"] : Zo ? ["Alt"] : [];
function Is(n, t) {
  return typeof n.getModifierState == "function" && (n.getModifierState(t) || qc.includes(t) && n.getModifierState("AltGraph"));
}
function Gc(n) {
  return n.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), s = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Kc : i;
    }), s];
  });
}
function Xo(n, t) {
  var e;
  t === void 0 && (t = {});
  var s = (e = t.timeout) != null ? e : 1e3, i = Object.keys(n).map(function(a) {
    return [Gc(a), n[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(f, d) {
        return !(d[1].toUpperCase() !== f.key.toUpperCase() && d[1] !== f.code || d[0].find(function(_) {
          return !Is(f, _);
        }) || Uc.find(function(_) {
          return !d[0].includes(_) && d[1] !== _ && Is(f, _);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : Is(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), s));
  };
}
function Yc(n, t, e) {
  var s;
  e === void 0 && (e = {});
  var i = (s = e.event) != null ? s : "keydown", r = Xo(t, e);
  return n.addEventListener(i, r), function() {
    n.removeEventListener(i, r);
  };
}
function Qo(n, t = {}) {
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
function ta(n, t, e) {
  const { timeout: s, event: i = "keydown", scope: r, when: o } = e || {}, a = Xo(t, { timeout: s }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return p(n).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || p(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    p(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    p(u.target).removeData(c);
  });
}
function ea(n, t) {
  return p(n).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const Vd = Yc;
p.fn.hotkeys = function(n, t) {
  return ta(this, n, t);
};
p.fn.unbindHotkeys = function(n) {
  return ea(this, n);
};
p.hotkeys = function(n, t) {
  ta(window, n, t);
};
p.unbindHotkeys = function(n) {
  ea(window, n);
};
function Fi() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Jc(n) {
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
    const u = Fi();
    let h = u;
    u ? p(u).addClass("is-in-fullscreen") : (h = p(document).find(".is-in-fullscreen")[0] || document, p(h).removeClass("is-in-fullscreen")), p("body").toggleClass("has-in-fullscreen", !!u);
    const f = { event: c, target: h, fullscreenElement: u };
    p(h).trigger(u ? "enterFullscreen" : "exitFullscreen", f).trigger("toggleFullscreen", f);
  }));
}
async function na(n) {
  const t = Fi();
  return n === !1 && !!t === n ? n : t ? (document.exitFullscreen(), !1) : (await Jc(n), !0);
}
p.fn.fullscreen = function(n) {
  return na({
    target: this,
    ...n
  });
};
p.getFullscreenElement = Fi;
p.toggleFullscreen = na;
function ne(n) {
  return !n || n.parentNode === document ? !1 : n.parentNode ? ne(n.parentNode) : !0;
}
p.isDetached = ne;
p.fn.isDetached = function() {
  const n = this[0];
  return !n || ne(n);
};
const me = class sa {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    var _;
    this._inited = !1, this._autoDestory = 0, this._destroyed = !1;
    const { KEY: s, DATA_KEY: i, MULTI_INSTANCE: r, NAME: o, ATTR_KEY: a, ALL: l, TYPED_ALL: c } = this.constructor;
    if (!o)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const u = p(t);
    if (u.data(s) && !r)
      throw new Error(`[ZUI] The component "${o}" has been initialized on element.`);
    const h = u[0], f = ut();
    this._gid = f, this._element = h, this.resetOptions(e), this._key = this.options.key ?? `__${f}`;
    let d = l.get(h);
    if (d ? d.add(this) : (d = /* @__PURE__ */ new Set([this]), l.set(h, d)), c.has(o) ? c.get(o).add(this) : c.set(o, /* @__PURE__ */ new Set([this])), u.data(s, this).attr(a, "").attr(i, `${f}`).attr("z-use", [...new Set([...d].map((m) => m.constructor.NAME))].join(",")), r) {
      const m = `${s}:ALL`;
      let v = u.data(m);
      v || (v = /* @__PURE__ */ new Map(), u.data(m, v)), v.set(this._key, this);
    }
    this.init(), (_ = this.options.$onCreate) == null || _.call(this), requestAnimationFrame(async () => {
      var m;
      this._inited = !0, await this.afterInit(), this.emit("inited", this.options), (m = this.options.$onInited) == null || m.call(this);
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
    var d;
    const { KEY: t, DATA_KEY: e, ALL: s, TYPED_ALL: i, NAME: r, MULTI_INSTANCE: o, ATTR_KEY: a } = this.constructor, { $element: l, element: c } = this;
    if (this.emit("destroyed"), this._destroyed = !0, l.off(this.namespace).removeData(t).removeAttr(a).removeAttr(e), o) {
      const _ = this.$element.data(`${t}:ALL`);
      if (_)
        if (_.delete(this._key), _.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const m = _.values().next().value;
          l.data(t, m).attr(e, String(m == null ? void 0 : m.gid));
        }
    }
    const u = s.get(c);
    u && (u.delete(this), u.size === 0 && s.delete(c));
    const h = i.get(r);
    h && (h.delete(this), h.size === 0 && i.delete(r));
    const f = s.get(c);
    f != null && f.size ? l.attr("z-use", [...new Set([...f].map((_) => _.constructor.NAME))].join(",")) : l.removeAttr("z-use"), (d = this.options.$onDestroy) == null || d.call(this);
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, ne(this.element) && this.destroy();
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
    return j(i, t, e, s, this.options.lang, this.constructor.NAME) ?? j(i, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    return t ? p(t).find(s).each((c, u) => {
      var h;
      (h = i.get(u)) == null || h.forEach(a);
    }) : this !== sa ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
      c.forEach(a);
    }), o.sort((c, u) => c.gid - u.gid);
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
        return this.each((c, u) => {
          let h = s.get(u);
          if (h)
            o && h.render(o);
          else {
            if (a)
              return;
            h = new s(u, o);
          }
          if (a) {
            let f = h[a], d = h;
            f === void 0 && (d = h.$, f = d[a]), typeof f == "function" ? l = f.call(d, ...r) : l = f;
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
me.DEFAULT = {};
me.MULTI_INSTANCE = !1;
me.ALL = /* @__PURE__ */ new Map();
me.TYPED_ALL = /* @__PURE__ */ new Map();
me.map = /* @__PURE__ */ new Map();
me.toggleMap = /* @__PURE__ */ new Map();
let vt = me;
function rs(n) {
  return vt.map.get(n.toLowerCase());
}
function ia(n, t, e = {}) {
  let s = rs(n);
  if (s || (s = ra(n)), !s)
    return null;
  const { $update: i, ...r } = e;
  if (!s.MULTI_INSTANCE) {
    const o = s.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new s(t, r);
}
function Zc(n, t, e = {}) {
  requestAnimationFrame(() => ia(n, t, e));
}
function Xc(n, t) {
  vt.register(n, t);
}
function ra(n) {
  const { zui: t } = window;
  if (t) {
    n = n == null ? void 0 : n.toLowerCase();
    for (const e in t) {
      const s = e.toLowerCase() === n;
      if (n && !s)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (vt.map.has(e.toLowerCase()) || Xc(i), s))
        return i;
    }
  }
}
function Ud(n) {
  var t;
  n ? (t = rs(n)) == null || t.defineFn() : window._zuiDefined || (ra(), vt.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function Qc(n, t = {}) {
  const e = p(n);
  let s = e.attr("zui-create");
  const { update: i, onCreate: r } = t, o = (a, l) => {
    if (l = {
      $update: i,
      $optionsFromDataset: !1,
      ...l
    }, r) {
      const u = r(a, l);
      if (u === !1)
        return;
      u && (l = u);
    }
    const c = l.$lib;
    if (c) {
      delete l.$lib, p.getLib(c).then(() => ia(a, n, l));
      return;
    }
    Zc(a, n, l);
  };
  if (typeof s == "string") {
    s = s.trim();
    const a = s.length ? s.split(",").map((u) => u.trim()) : [], l = Ye(n, { prefix: "zui-create-", evalValue: !0 }), c = Object.keys(l);
    if (!c.length && a.length === 1)
      o(a[0], e.dataset());
    else {
      const u = /* @__PURE__ */ new Set();
      [...a, ...c].forEach((h) => {
        if (u.has(h))
          return;
        const f = l[h];
        o(h, f), delete l[h], u.add(h);
      });
    }
  } else {
    const a = e.dataset(), l = a == null ? void 0 : a.zui;
    if (!l)
      return;
    console.warn("[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.", { element: n, options: t }), delete a.zui, o(l, a);
  }
}
function th() {
  p(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(n) {
    const t = p(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const s = vt.toggleMap.get(e) || rs(e), i = s == null ? void 0 : s.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = n.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(s, this, l, n) || o && t.is(o))
      return;
    const { onGet: c, onCreate: u, setOptions: h = !0, getOptions: f, prevent: d = !0, handler: _, onToggle: m, convertHref: v } = i;
    let y = t.dataset();
    const b = t.attr(`zui-toggle-${e}`);
    if (b && (y = p.extend(y, ke(b))), v && t.is("a")) {
      const C = t.attr("href");
      if (C) {
        const S = v === !0 ? { selector: "target", url: "url" } : v;
        "#.".includes(C[0]) ? S.selector && y[S.selector] === void 0 && (y[S.selector] = C) : S.url && y[S.url] === void 0 && (y[S.url] = C);
      }
    }
    if (f && (y = f.call(s, this, y, n)), _) {
      _.call(s, this, y, l, n), d && n.preventDefault();
      return;
    }
    let w = c ? c.call(s, this) : s.get(this);
    if (w)
      h && w.setOptions(y);
    else {
      const C = u ? u.call(s, this, n, y) : new s(this, y);
      if (!C)
        return;
      w = C;
    }
    if (m) {
      if (m.call(s, w, this, n) === !1)
        return;
    } else {
      const { shown: C, show: S, hide: $, toggle: E } = w;
      let N;
      if (E ? N = E : S && $ ? C ? N = $ : N = S : S && (N = S), N)
        N.call(w);
      else
        return;
    }
    d && n.preventDefault();
  });
}
function eh(n, t) {
  const e = Di(n), s = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && s.push(e[i]);
  }), s;
}
let _n = 0;
function oa(n = 100) {
  if (_n && clearTimeout(_n), n) {
    _n = window.setTimeout(() => oa(0), n);
    return;
  }
  _n = 0, vt.ALL.forEach((t) => {
    t.forEach((e) => e.autoDestroy());
  });
}
function nh() {
  if (!document.body || Di(document.body, "_autoDestoryMob"))
    return;
  const n = new MutationObserver((t) => {
    let e = !1;
    for (const s of t)
      if (s.removedNodes.length) {
        e = !0;
        break;
      }
    e && oa();
  });
  n.observe(document.body, { childList: !0, subtree: !0 }), Ri(document.body, "_autoDestoryMob", n);
}
function sh(n, t) {
  const e = p(n);
  e.find("[zui-create],[data-zui]").each(function() {
    var s;
    ((s = t == null ? void 0 : t.beforeCreate) == null ? void 0 : s.call(t, this)) !== !1 && Qc(this, t);
  }), e.find("[zui-init]").each(function() {
    this.hasAttribute("z-zui-inited") || (this.setAttribute("z-zui-inited", ""), p.runJS(this.getAttribute("zui-init"), ["$element", p(this)]));
  }), e.find(".hide-before-init").removeClass("invisible hidden opacity-0"), e.find(".scroll-into-view").scrollIntoView(), e.find('[data-on="inited"],[zui-on-inited]').each((s, i) => {
    const r = p(i);
    r.zui() || r.trigger("inited");
  }), t != null && t.runJS && e.runJS();
}
p.fn.zuiInit = function(n) {
  return sh(this, n), this;
};
p.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = {};
    let r;
    return eh(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), n === !0 ? i : r;
  }
  const s = rs(n);
  return s ? t === !0 ? s.getAll(e) : s.query(e, t) : p(e).data(`zui.${n}`);
};
p.fn.zuiCall = function(n, t = []) {
  return this.each(function() {
    const e = n.split("."), s = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = p(this).zui(s), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
p(() => {
  p("body").zuiInit({ update: !0 }), th(), nh();
});
class ih extends vt {
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
            l.each((f, d) => {
              const m = d.getBoundingClientRect()[e || "top"] === h[e || "top"];
              d.classList.toggle(i, m);
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
ih.NAME = "Sticky";
const Ze = 24 * 60 * 60 * 1e3, q = (n) => n === void 0 ? /* @__PURE__ */ new Date() : (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n), rh = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(q(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, le = (n, t = /* @__PURE__ */ new Date()) => q(n).toDateString() === q(t).toDateString(), Ys = (n, t = /* @__PURE__ */ new Date()) => q(n).getFullYear() === q(t).getFullYear(), aa = (n, t = /* @__PURE__ */ new Date()) => (n = q(n), t = q(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), Kd = (n, t = /* @__PURE__ */ new Date()) => {
  n = q(n), t = q(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, qd = (n, t) => le(q(t), n), Gd = (n, t) => le(q(t).getTime() - Ze, n), Yd = (n, t) => le(q(t).getTime() + Ze, n), la = (n) => n != null && !isNaN(q(n).getTime()), Tt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = q(n), !la(n))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Ys(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Jd = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Tt(n, Ys(n) ? s.month : s.full);
  if (le(n, t))
    return i;
  const r = Tt(t, Ys(n, t) ? aa(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", r);
};
function oh(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function Js(n) {
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
  return i.includes("~") && ([i, r] = i.split("~")), {
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
function ah(n) {
  if (Array.isArray(n))
    return { commands: n.map(Js).filter(Boolean) };
  if (typeof n == "object")
    return n;
  n = n.replace(/^#!?/, "");
  const t = n.includes(">"), e = n.split(t ? ">" : "|").map(Js);
  return {
    async: t,
    commands: e.filter(Boolean)
  };
}
function Br(n, t, e) {
  if (typeof n == "string" && (n = Js(n)), !n)
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
async function lh(n, t) {
  const { async: e, commands: s } = ah(n);
  if (!s.length)
    return [];
  const { signal: i } = t;
  if (e) {
    const o = [];
    let a;
    for (const l of s) {
      if (!(i != null && i.aborted))
        break;
      a = await Br(l, t, a), i != null && i.aborted && (a = void 0), o.push(a);
    }
    return o;
  }
  return await Promise.all(s.map((o) => {
    if (!(i != null && i.aborted))
      return Br(o, t);
  }));
}
const Ce = "zui.commands", $e = "z-commands", ch = "zui-commands-proxy", ca = "zui-command";
function Wi(n, t) {
  typeof t == "string" ? t = { scope: t } : typeof t == "function" && (t = { onCommand: t });
  const { scope: e = "", events: s = "click" } = t ?? {}, i = p(n), r = (i.attr($e) || "").split(",");
  e && !r.includes(e) && r.push(e), i.attr($e, r.join(",")).data(Ce, {
    [e]: {
      ...t,
      scope: e,
      events: s,
      gid: ut()
    },
    ...i.data(Ce)
  });
}
function ji(n, t = !0) {
  const e = p(n);
  if (t === !0)
    e.removeAttr($e), e.removeData(Ce);
  else if (t.length) {
    const s = e.data(Ce) || {};
    t.split(",").forEach((r) => {
      delete s[r];
    });
    const i = Object.keys(s);
    i.length ? e.attr($e, i.join(",")).data(Ce, Wi) : ji(e, !0);
  }
}
function ha(n, t) {
  let e = n.closest(`[${$e}]`);
  if (!e.length) {
    const o = n.closest(`[${ch}]`);
    o.length && (e = p(o.data("zui.commandProxy") || o.attr("COMMAND_PROXY_ATTR")).closest(`[${$e}]`));
  }
  if (!e.length)
    return;
  const s = e.data(Ce) || {}, i = Object.values(s).sort((o, a) => a.gid - o.gid);
  let r;
  return t != null && t.length ? (r = i.find((o) => o.scope === t), r || (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  })), r) : (r = i.find((o) => {
    var a;
    return !((a = o.scope) != null && a.length) && !o.scoped;
  }), r || (r = i.find((o) => !o.scoped)), r ? r.element = e[0] : r = ha(n.parent(), t), r);
}
function hh(n) {
  if (!n.currentTarget)
    return;
  const t = p(n.currentTarget);
  if (t.closest(".disabled,[disabled]").length)
    return;
  const e = t.attr(ca) || (t.is('a[href^="#!"]') ? t.attr("href") : "");
  if (!e)
    return;
  const s = new AbortController(), i = () => s.abort();
  lh(e, {
    signal: s.signal,
    execute: (r, o) => {
      const { scope: a, name: l } = r, c = {
        ...r,
        abort: i
      };
      let u;
      const h = ha(t, a);
      if (h) {
        c.element = h.element;
        const d = (h.commands ? h.commands[`${a}~${l}`] || h.commands[l] : null) || h.onCommand;
        if (d && (u = d(c, o), n.commandHandled))
          return u;
      }
      const f = [c, o];
      if (t.trigger("command", f).trigger(`command:${a ? `${l}.${a}` : l}`, f), a && t.trigger(`command:.${a}`, f), n.commandHandled)
        return u;
      if (a === "event") {
        l === "stop" ? n.stopPropagation() : l === "prevent" ? n.preventDefault() : se(n, l, o);
        return;
      }
      return a === "window" ? se(window, l, o) : a === "zui" ? se(window.zui, l, o) : a === "target" ? se(t[0], l, o) : a === "$target" ? se(t, l, o) : a === "$" ? se(p, l, o) : u;
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
  return this.each((t, e) => Wi(e, n)), this;
};
p.fn.unbindCommands = function(n) {
  return this.each((t, e) => ji(e, n)), this;
};
p(() => {
  p(document).on("click.zui.command", `[${ca}],a[href^="#!"]`, hh);
});
function Zs(n, t, e = !1) {
  var i;
  const s = p(n);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${ut()}`;
      s.append(`<script id="${r}">${t}<\/script>`), e && s.find(`#${r}`).remove();
    }
    return;
  }
  if (s.is("script")) {
    const r = (i = s[0]) == null ? void 0 : i.textContent;
    r && Zs(s.parent(), r);
    return;
  }
  s.find("script").each((r, o) => {
    Zs(s, o.textContent), o.remove();
  });
}
p.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
p.fn.runJS = function(n) {
  return this.each((t, e) => {
    Zs(e, n);
  });
};
function os(n, t = {}) {
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
      const { innerHeight: _, innerWidth: m } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
      s = { left: 0, top: 0, width: m || y, height: _ || v };
    }
  const { left: l, top: c, width: u, height: h } = s;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= u + l && r + a <= h + c;
  const f = i <= l + u && i + o >= l;
  return r <= c + h && r + a >= c && f;
}
p.fn.isVisible = function(n) {
  return os(this, n);
};
function uh(n, t = "both") {
  return (t === "vert" || t === "both") && n.clientHeight < n.scrollHeight || (t === "horz" || t === "both") && n.clientWidth < n.scrollWidth;
}
function ua(n, t) {
  const e = p(n), { ifNeeded: s = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = p(a).closest(i);
      if (!l.length || !uh(l[0]))
        return;
    }
    if (s) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (os(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
p.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    ua(e, n);
  });
};
p.setLibRoot = function(n) {
  p.libRoot = n;
};
p.registerLib = function(n, t) {
  p.libMap || (p.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), p.libMap[n] = t;
};
function da(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i } = n;
    if (p(i ? `#${i}` : `link[href="${s}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${s}`));
    }, o.rel = "stylesheet", o.href = s, i && (o.id = i), p("head").append(o);
  });
}
function fa(n) {
  return new Promise((t, e) => {
    typeof n == "string" && (n = { src: n });
    const { src: s, id: i } = n, r = p(i ? `#${i}` : `script[src="${s}"]`);
    if (r.length) {
      if (r.dataset("loaded"))
        t();
      else {
        const f = r.data("loadCalls") || [];
        f.push(t), r.data("loadCalls", f);
      }
      return;
    }
    const { async: o = !0, defer: a = !1, noModule: l = !1, type: c, integrity: u } = n, h = document.createElement("script");
    h.async = o, h.defer = a, h.noModule = l, c && (h.type = c), u && (h.integrity = u), h.onload = () => {
      t(), (p(h).dataset("loaded", !0).data("loadCalls") || []).forEach((d) => d()), p(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${s}`));
    }, p("head").append(h), h.src = s;
  });
}
function pa(n) {
  return new Promise((t) => {
    typeof n == "string" && (n = { type: "module", src: n });
    const { src: e, imports: s, srcList: i = [], id: r } = n;
    e && i.unshift({ src: e, imports: s });
    const o = i.map((y) => y.src).join(","), a = p(r ? `#${r}` : `script[data-src-list="${o}"]`);
    if (a.length) {
      const y = a.data("module");
      if (y)
        t(y);
      else {
        const b = a.data("resolves") || [];
        b.push(t), a.data("resolves", b);
      }
      return;
    }
    const { async: l = !0, defer: c = !1, integrity: u, globalVar: h, resolve: f } = n, d = document.createElement("script"), _ = `zui-module-resolve-${p.guid++}`, m = p(d);
    Object.assign(window, { [_]: (y) => {
      (m.data("module", y).data("resolves") || []).forEach((w) => w(y)), m.removeData("resolves"), f == null || f(y), t(y), delete window[_];
    } }), d.async = l, d.defer = c, d.type = "module", m.attr("data-src-list", o).attr("data-resolve-id", _);
    const v = [];
    d.text = [
      ...i.map(({ src: y, imports: b }) => {
        if (s) {
          if (typeof b == "string")
            return v.push(b), `import * as ${b} from '${y}';`;
          if (b)
            return v.push(...Object.values(b)), `import {${Object.entries(b).map(([w, C]) => `${w} as ${C}`).join(",")}} from '${y}';`;
        }
        return `import '${y}';`;
      }),
      `const zuiImportResult = {${v.map((y) => `${y}: ${y},`)}};`,
      h ? `Object.assign(window, ${h === !0 ? "zuiImportResult" : `{${h}: zuiImportResult}`});` : "",
      `if(window['${_}']) window['${_}'](zuiImportResult);`
    ].join(`
`), u && (d.integrity = u), p("head").append(d);
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
  let u;
  const h = () => c ? window[c] || u : void 0;
  typeof l == "string" && (l = () => !!h());
  const f = () => (o == null || o(), h());
  if (typeof l == "function" && await l())
    return f();
  const { root: d = p.libRoot } = s;
  for (let m of i) {
    typeof m == "string" && (m = { src: m });
    let { src: v } = m;
    d && !/https?:\/\//.test(v) && (v = `${d}${d.endsWith("/") || v.startsWith("/") ? "" : "/"}${v}`);
    const y = {
      ...s,
      ...m,
      src: v
    };
    if (m.type === "css" || !m.type && v.endsWith(".css")) {
      await da(y);
      continue;
    }
    if (y.type === "module") {
      u = await pa(y);
      continue;
    }
    await fa(y);
  }
  return f();
};
p.getScript = p.getLib;
function ga(n, t) {
  const e = p(n), s = new ResizeObserver(t);
  return e.each((i, r) => {
    s.observe(r);
  }), s;
}
p.fn.resize = function(n) {
  return ga(this, n);
};
const Zd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: ne,
  isVisible: os,
  listenResize: ga,
  loadCSS: da,
  loadJS: fa,
  loadModule: pa,
  scrollIntoView: ua
}, Symbol.toStringTag, { value: "Module" }));
var Xs, pt, Rs, Vr, Ur = 0, ma = [], J = z, Kr = J.__b, qr = J.__r, Gr = J.diffed, Yr = J.__c, Jr = J.unmount, Zr = J.__;
function dh(n, t) {
  J.__h && J.__h(pt, n, Ur || t), Ur = 0;
  var e = pt.__H || (pt.__H = { __: [], __h: [] });
  return n >= e.__.length && e.__.push({}), e.__[n];
}
function _a(n, t) {
  var e = dh(Xs++, 7);
  return gh(e.__H, t) && (e.__ = n(), e.__H = t, e.__h = n), e.__;
}
function fh() {
  for (var n; n = ma.shift(); )
    if (n.__P && n.__H)
      try {
        n.__H.__h.forEach(Cn), n.__H.__h.forEach(Qs), n.__H.__h = [];
      } catch (t) {
        n.__H.__h = [], J.__e(t, n.__v);
      }
}
J.__b = function(n) {
  pt = null, Kr && Kr(n);
}, J.__ = function(n, t) {
  n && t.__k && t.__k.__m && (n.__m = t.__k.__m), Zr && Zr(n, t);
}, J.__r = function(n) {
  qr && qr(n), Xs = 0;
  var t = (pt = n.__c).__H;
  t && (Rs === pt ? (t.__h = [], pt.__h = [], t.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.i = e.__N = void 0;
  })) : (t.__h.forEach(Cn), t.__h.forEach(Qs), t.__h = [], Xs = 0)), Rs = pt;
}, J.diffed = function(n) {
  Gr && Gr(n);
  var t = n.__c;
  t && t.__H && (t.__H.__h.length && (ma.push(t) !== 1 && Vr === J.requestAnimationFrame || ((Vr = J.requestAnimationFrame) || ph)(fh)), t.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.i = void 0;
  })), Rs = pt = null;
}, J.__c = function(n, t) {
  t.some(function(e) {
    try {
      e.__h.forEach(Cn), e.__h = e.__h.filter(function(s) {
        return !s.__ || Qs(s);
      });
    } catch (s) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], J.__e(s, e.__v);
    }
  }), Yr && Yr(n, t);
}, J.unmount = function(n) {
  Jr && Jr(n);
  var t, e = n.__c;
  e && e.__H && (e.__H.__.forEach(function(s) {
    try {
      Cn(s);
    } catch (i) {
      t = i;
    }
  }), e.__H = void 0, t && J.__e(t, e.__v));
};
var Xr = typeof requestAnimationFrame == "function";
function ph(n) {
  var t, e = function() {
    clearTimeout(s), Xr && cancelAnimationFrame(t), setTimeout(n);
  }, s = setTimeout(e, 100);
  Xr && (t = requestAnimationFrame(e));
}
function Cn(n) {
  var t = pt, e = n.__c;
  typeof e == "function" && (n.__c = void 0, e()), pt = t;
}
function Qs(n) {
  var t = pt;
  n.__c = n.__(), pt = t;
}
function gh(n, t) {
  return !n || n.length !== t.length || t.some(function(e, s) {
    return e !== n[s];
  });
}
var mh = Symbol.for("preact-signals");
function as() {
  if (Yt > 1)
    Yt--;
  else {
    for (var n, t = !1; Ue !== void 0; ) {
      var e = Ue;
      for (Ue = void 0, ti++; e !== void 0; ) {
        var s = e.o;
        if (e.o = void 0, e.f &= -3, !(8 & e.f) && va(e))
          try {
            e.c();
          } catch (i) {
            t || (n = i, t = !0);
          }
        e = s;
      }
    }
    if (ti = 0, Yt--, t)
      throw n;
  }
}
function _h(n) {
  if (Yt > 0)
    return n();
  Yt++;
  try {
    return n();
  } finally {
    as();
  }
}
var D = void 0;
function Xd(n) {
  var t = D;
  D = void 0;
  try {
    return n();
  } finally {
    D = t;
  }
}
var Ue = void 0, Yt = 0, ti = 0, Rn = 0;
function ya(n) {
  if (D !== void 0) {
    var t = n.n;
    if (t === void 0 || t.t !== D)
      return t = { i: 0, S: n, p: D.s, n: void 0, t: D, e: void 0, x: void 0, r: t }, D.s !== void 0 && (D.s.n = t), D.s = t, n.n = t, 32 & D.f && n.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = D.s, t.n = void 0, D.s.n = t, D.s = t), t;
  }
}
function st(n) {
  this.v = n, this.i = 0, this.n = void 0, this.t = void 0;
}
st.prototype.brand = mh;
st.prototype.h = function() {
  return !0;
};
st.prototype.S = function(n) {
  this.t !== n && n.e === void 0 && (n.x = this.t, this.t !== void 0 && (this.t.e = n), this.t = n);
};
st.prototype.U = function(n) {
  if (this.t !== void 0) {
    var t = n.e, e = n.x;
    t !== void 0 && (t.x = e, n.e = void 0), e !== void 0 && (e.e = t, n.x = void 0), n === this.t && (this.t = e);
  }
};
st.prototype.subscribe = function(n) {
  var t = this;
  return cs(function() {
    var e = t.value, s = D;
    D = void 0;
    try {
      n(e);
    } finally {
      D = s;
    }
  });
};
st.prototype.valueOf = function() {
  return this.value;
};
st.prototype.toString = function() {
  return this.value + "";
};
st.prototype.toJSON = function() {
  return this.value;
};
st.prototype.peek = function() {
  var n = D;
  D = void 0;
  try {
    return this.value;
  } finally {
    D = n;
  }
};
Object.defineProperty(st.prototype, "value", { get: function() {
  var n = ya(this);
  return n !== void 0 && (n.i = this.i), this.v;
}, set: function(n) {
  if (n !== this.v) {
    if (ti > 100)
      throw new Error("Cycle detected");
    this.v = n, this.i++, Rn++, Yt++;
    try {
      for (var t = this.t; t !== void 0; t = t.x)
        t.t.N();
    } finally {
      as();
    }
  }
} });
function ls(n) {
  return new st(n);
}
function va(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
      return !0;
  return !1;
}
function ba(n) {
  for (var t = n.s; t !== void 0; t = t.n) {
    var e = t.S.n;
    if (e !== void 0 && (t.r = e), t.S.n = t, t.i = -1, t.n === void 0) {
      n.s = t;
      break;
    }
  }
}
function wa(n) {
  for (var t = n.s, e = void 0; t !== void 0; ) {
    var s = t.p;
    t.i === -1 ? (t.S.U(t), s !== void 0 && (s.n = t.n), t.n !== void 0 && (t.n.p = s)) : e = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = s;
  }
  n.s = e;
}
function Me(n) {
  st.call(this, void 0), this.x = n, this.s = void 0, this.g = Rn - 1, this.f = 4;
}
(Me.prototype = new st()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Rn))
    return !0;
  if (this.g = Rn, this.f |= 1, this.i > 0 && !va(this))
    return this.f &= -2, !0;
  var n = D;
  try {
    ba(this), D = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 16, this.i++;
  }
  return D = n, wa(this), this.f &= -2, !0;
};
Me.prototype.S = function(n) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.S(t);
  }
  st.prototype.S.call(this, n);
};
Me.prototype.U = function(n) {
  if (this.t !== void 0 && (st.prototype.U.call(this, n), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.U(t);
  }
};
Me.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var n = this.t; n !== void 0; n = n.x)
      n.t.N();
  }
};
Object.defineProperty(Me.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var n = ya(this);
  if (this.h(), n !== void 0 && (n.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function Ca(n) {
  return new Me(n);
}
function Sa(n) {
  var t = n.u;
  if (n.u = void 0, typeof t == "function") {
    Yt++;
    var e = D;
    D = void 0;
    try {
      t();
    } catch (s) {
      throw n.f &= -2, n.f |= 8, Bi(n), s;
    } finally {
      D = e, as();
    }
  }
}
function Bi(n) {
  for (var t = n.s; t !== void 0; t = t.n)
    t.S.U(t);
  n.x = void 0, n.s = void 0, Sa(n);
}
function yh(n) {
  if (D !== this)
    throw new Error("Out-of-order effect");
  wa(this), D = n, this.f &= -2, 8 & this.f && Bi(this), as();
}
function ln(n) {
  this.x = n, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
ln.prototype.c = function() {
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
ln.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, Sa(this), ba(this), Yt++;
  var n = D;
  return D = this, yh.bind(this, n);
};
ln.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Ue, Ue = this);
};
ln.prototype.d = function() {
  this.f |= 8, 1 & this.f || Bi(this);
};
function cs(n) {
  var t = new ln(n);
  try {
    t.c();
  } catch (e) {
    throw t.d(), e;
  }
  return t.d.bind(t);
}
var Ds;
function Pe(n, t) {
  z[n] = t.bind(null, z[n] || function() {
  });
}
function Dn(n) {
  Ds && Ds(), Ds = n && n.S();
}
function xa(n) {
  var t = this, e = n.data, s = bh(e);
  s.value = e;
  var i = _a(function() {
    for (var r = t.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 4;
        break;
      }
    return t.__$u.c = function() {
      var o;
      !ot(i.peek()) && ((o = t.base) == null ? void 0 : o.nodeType) === 3 ? t.base.data = i.peek() : (t.__$f |= 1, t.setState({}));
    }, Ca(function() {
      var o = s.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return i.value;
}
xa.displayName = "_st";
Object.defineProperties(st.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: xa }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Pe("__b", function(n, t) {
  if (typeof t.type == "string") {
    var e, s = t.props;
    for (var i in s)
      if (i !== "children") {
        var r = s[i];
        r instanceof st && (e || (t.__np = e = {}), e[i] = r, s[i] = r.peek());
      }
  }
  n(t);
});
Pe("__r", function(n, t) {
  Dn();
  var e, s = t.__c;
  s && (s.__$f &= -2, (e = s.__$u) === void 0 && (s.__$u = e = function(i) {
    var r;
    return cs(function() {
      r = this;
    }), r.c = function() {
      s.__$f |= 1, s.setState({});
    }, r;
  }())), Dn(e), n(t);
});
Pe("__e", function(n, t, e, s) {
  Dn(), n(t, e, s);
});
Pe("diffed", function(n, t) {
  Dn();
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
        var c = r[l], u = s[l];
        c === void 0 ? (c = vh(e, l, u, i), r[l] = c) : c.o(u, i);
      }
    }
  }
  n(t);
});
function vh(n, t, e, s) {
  var i = t in n && n.ownerSVGElement === void 0, r = ls(e);
  return { o: function(o, a) {
    r.value = o, s = a;
  }, d: cs(function() {
    var o = r.value.value;
    s[t] !== o && (s[t] = o, i ? n[t] = o : o ? n.setAttribute(t, o) : n.removeAttribute(t));
  }) };
}
Pe("unmount", function(n, t) {
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
Pe("__h", function(n, t, e, s) {
  (s < 3 || s === 9) && (t.__$f |= 2), n(t, e, s);
});
F.prototype.shouldComponentUpdate = function(n, t) {
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
function bh(n) {
  return _a(function() {
    return ls(n);
  }, []);
}
const ka = {};
function it(n, t) {
  typeof n == "object" ? Object.keys(n).forEach((e) => {
    it(e, n[e]);
  }) : t && (ka[n.toLowerCase()] = t);
}
function wh(n) {
  return ka[n.toLowerCase()];
}
class Q extends F {
  constructor(t) {
    super(t), this._gid = ut(), this.state = this.getDefaultState(t);
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
    return j(i, t, e, s, this.props.lang, this.constructor.NAME) ?? j(i, t, e, s, this.props.lang) ?? `{i18n:${t}}`;
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
    return l ? l.call(this, t, e) : ((!t.scope || t.scope === this.commandScope) && (r = se(this, t.name, e)), s && (r = s.call(this, t, e)), r);
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: s, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, commands: h, onCommand: f, ...d } = t, _ = new Set(this.constructor.customProps), m = "dangerouslySetInnerHTML", v = Object.keys(d).reduce((y, b) => {
      if (!_.has(b) && (b === m || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(b))) {
        const w = d[b];
        y[b] = b !== m && w && typeof w == "object" ? JSON.stringify(w) : w;
      }
      return y;
    }, {});
    return { ref: o, className: k(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...v, ...s, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? wh(e) : e) || e;
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
    (t || e) && Wi(this.element, {
      commands: t,
      scope: this.commandScope,
      onCommand: this.executeCommand.bind(this)
    });
  }
  componentWillUnmount() {
    const { commands: t, onCommand: e } = this.props;
    (t || e) && ji(this.element, this.commandScope);
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), s = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, s, t);
    return r && ([e, i, s] = r), wt(e, i, s);
  }
}
Q.HElement = !0;
Q.customProps = [];
class Ch extends Q {
  constructor(t) {
    super(t), this.signals = {};
    const { state: e } = this;
    this.changeState(e), this.state = {};
  }
  changeState(t, e) {
    return new Promise((s) => {
      _h(() => {
        typeof t == "function" && (t = t(this.state));
        for (const i in t) {
          const r = this.signals[i];
          r ? r.value = t[i] : this.signals[i] = ls(t[i]);
        }
        s(this.state), e == null || e();
      });
    });
  }
  resetState(t) {
    this.changeState(this.getDefaultState(t));
  }
}
Ch.HElementSignals = !0;
var Sh = 0;
function g(n, t, e, s, i, r) {
  t || (t = {});
  var o, a, l = t;
  "ref" in t && (o = t.ref, delete t.ref);
  var c = { type: n, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Sh, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof n == "function" && (o = n.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return z.vnode && z.vnode(c), c;
}
class ue extends F {
  constructor() {
    super(...arguments), this._ref = G();
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
    return /* @__PURE__ */ g(Q, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function xh(n) {
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
  } = n, h = [e], f = { ...s }, d = [], _ = [];
  return i.forEach((m) => {
    const v = [];
    if (typeof m == "string" && a && a[m] && (m = a[m]), typeof m == "function")
      if (l)
        v.push(...l.call(o, m, d, ...r));
      else {
        const y = m.call(o, d, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(m);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !ot(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? d.push(
        /* @__PURE__ */ g("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? _.push(y.__html) : (y.style && Object.assign(f, y.style), y.className && h.push(y.className), y.children && d.push(y.children), y.attrs && Object.assign(u, y.attrs)) : d.push(y));
    });
  }), _.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: k(h),
    style: f,
    ...u
  }, d];
}
function Ta({
  tag: n = "div",
  ...t
}) {
  const [e, s] = xh(t);
  return wt(n, e, ...s);
}
class Ln extends F {
  constructor() {
    super(...arguments), this.state = {}, this._ref = G();
  }
  async load(t) {
    const { props: e } = this, { fetcher: s, type: i, fetcherArgs: r, fetcherThis: o = this, clearBeforeLoad: a } = e;
    this.setState({ loading: !0, error: void 0, ...a ? { content: void 0 } : {} });
    try {
      const l = await ns(t || s, r, { throws: !0, dataType: i === "custom" ? "json" : "text" }, o, (c) => {
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
    const { loading: s, error: i, content: r = "" } = this.state, { loadingContent: o, errorText: a, type: l, clearBeforeLoad: c, ...u } = e;
    return s && c ? o : i ? a ?? i.message : l === "html" ? /* @__PURE__ */ g(ue, { html: r, executeScript: !0, ...u }) : l === "text" ? r : /* @__PURE__ */ g(L, { content: r, ...u });
  }
  render(t) {
    const { loading: e } = this.state, { id: s, loadingClass: i, loadingIndicator: r, className: o, style: a, attrs: l, loadingText: c, ...u } = t;
    return /* @__PURE__ */ g("div", { id: s, ref: this._ref, className: k("lazy-content", o, e ? i : "", r ? "load-indicator" : ""), "data-loading": c, style: a, ...l, children: this._renderContent(t, u) });
  }
}
Ln.defaultProps = {
  type: "html",
  loadingIndicator: !0,
  loadingClass: "loading",
  clearBeforeLoad: !0
};
function ei(n) {
  const { content: t, generatorArgs: e, generatorThis: s, ...i } = n;
  let r = t;
  if (typeof r == "function" && (r = r.call(s, ...e || [])), Array.isArray(r))
    return r.map((o) => ei({ ...i, content: o, generatorThis: s, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ g("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component || r.fetcher)) {
    if (r.fetcher)
      return /* @__PURE__ */ g(Ln, { ...O(i, r) });
    if (r.html)
      return /* @__PURE__ */ g(ue, { ...O(i, r) });
    const { children: o, ...a } = r;
    return o && (r = O({ children: (Array.isArray(o) ? o : [o]).map((l) => ei({ ...i, content: l, generatorThis: s, generatorArgs: e })) }, a)), /* @__PURE__ */ g(Q, { ...O(i, r) });
  }
  return ot(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", n), console.groupEnd()), null);
}
function L(n) {
  const t = ei(n);
  return t == null || typeof t == "boolean" ? null : ot(t) ? t : /* @__PURE__ */ g(Ae, { children: t });
}
class kh extends F {
  render(t) {
    return L(t);
  }
}
const Qr = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function nt(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (ot(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Qr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Qr(o) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ g("i", { className: k(i), ...s });
}
function Th(n) {
  return this.getChildContext = () => n.context, n.children;
}
function $a(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    we(null, t._temp), t._temp = null, t._container = null;
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
  }), we(
    wt(Th, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function $h(n, t) {
  const e = wt($a, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
it({
  HElement: Q,
  element: Q,
  HtmlContent: ue,
  html: ue,
  CustomContent: L,
  LazyContent: Ln,
  custom: L,
  lazy: Ln,
  Icon: nt,
  Portal: $a
});
class U extends vt {
  constructor() {
    super(...arguments), this._ref = G();
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
  render(t, e) {
    var h;
    const { element: s, $: i } = this, { Component: r, replace: o } = this.constructor, { $replace: a = o, $optionsFromDataset: l, ...c } = this.setOptions(t, e), u = {
      ref: this._ref,
      ...c
    };
    if (e && ((h = i == null ? void 0 : i.resetState) == null || h.call(i, c)), a && r.HElement && (s.tagName.toLowerCase() === a || a === !0)) {
      const f = Array.from(s.attributes).reduce((d, _) => {
        const { name: m, value: v } = _;
        return d[m === "class" ? "className" : m] = v, d;
      }, {});
      we(
        wt(r, O({ component: s.tagName.toLowerCase(), attrs: f }, u)),
        s.parentElement,
        s
      );
    } else
      we(
        wt(r, u),
        s
      );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return we(wt(this.Component, t), e), e.innerHTML;
  }
}
U.replace = !1;
class Vi extends U {
}
Vi.NAME = "Custom";
Vi.Component = kh;
Vi.register();
class Z extends Q {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: r, iconClass: o, text: a, textClass: l, children: c, trailingIcon: u, trailingIconClass: h, caret: f } = t;
    return [
      e ? /* @__PURE__ */ g(nt, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(nt, { icon: r, className: o }),
      this._isEmptyText ? null : /* @__PURE__ */ g("span", { className: k("text", l), children: e ? i : a }),
      e ? null : c,
      e ? null : /* @__PURE__ */ g(nt, { icon: u, className: h }),
      e ? null : f ? /* @__PURE__ */ g("span", { className: typeof f == "string" ? `caret-${f}` : "caret" }) : null
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
    const e = this._getComponent(t), { url: s, target: i, disabled: r, btnType: o = "button", hint: a, command: l } = t, c = e === "a", u = {
      ...super._getProps(t),
      type: c ? void 0 : "button",
      disabled: !c && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (u.type = o) : u.className = k([u.className, o])), r || (s !== void 0 && (u[c ? "href" : "data-url"] = s), i !== void 0 && (u[c ? "target" : "data-target"] = i), l && (u["zui-command"] = l)), u;
  }
}
const Nh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Z
}, Symbol.toStringTag, { value: "Module" }));
it(Nh);
let lt = class extends Q {
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
        return /* @__PURE__ */ g(L, { "z-key": e.key, "z-item": s, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ g(L, { "z-key": e.key, "z-item": s, "z-type": r, content: { ...e } });
    if (l = l || a.default || Q, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = O({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ g(l, { "z-key": e.key, "z-item": s, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: f = {} } = this.constructor;
    if (e = O(
      { type: l },
      h,
      f[l],
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
      const d = o.call(this, e, s);
      if (d !== void 0)
        return d;
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
lt.NAME = "";
lt.ITEM_NAME = "item";
lt.TAG = "ul";
lt.ItemComponents = {
  default: Q,
  divider: [Q, { className: "divider" }],
  space: [Q, (n) => {
    const { space: t, flex: e, style: s } = n;
    return {
      style: { width: t, height: t, flex: e, ...s }
    };
  }]
};
lt.defaultItemProps = {
  component: "li"
};
lt.defaultItemPropsMap = {};
lt.defaultItemType = "item";
lt.defaultProps = {
  itemKey: "id"
};
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: lt
}, Symbol.toStringTag, { value: "Module" }));
class hs extends U {
}
hs.NAME = "CommonList";
hs.Component = lt;
hs.replace = lt.TAG;
hs.register();
it(Eh);
function Ah(n) {
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
function Mh(n) {
  const [t, e, s] = typeof n == "string" ? Ah(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function to(n, t) {
  return Mh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function eo(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function Ph(n, t, e) {
  n = n % 360 / 360, t = eo(t), e = eo(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (s - i) * o * 6 : o * 2 < 1 ? s : o * 3 < 2 ? i + (s - i) * (2 / 3 - o) * 6 : i);
  return [
    r(n + 1 / 3) * 255,
    r(n) * 255,
    r(n - 1 / 3) * 255
  ];
}
function Ih(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let us = class extends F {
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
      src: f,
      hueDistance: d = 43,
      saturation: _ = 0.4,
      lightness: m = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], w = { ...e, background: o, color: a };
    let C = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, C = s) : (b.push(`size-${s}`), C = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? b.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let S;
    if (f)
      b.push("has-img"), S = /* @__PURE__ */ g("img", { className: "avatar-img", src: f, alt: c });
    else if (l)
      b.push("has-icon"), S = /* @__PURE__ */ g(nt, { icon: l });
    else if (c != null && c.length) {
      const $ = Ih(c, h), E = $.length;
      if (b.push("has-text", `has-text-${E}`), o === void 0) {
        const A = u ?? c, I = (typeof A == "number" ? A : oh(A)) * d % 360;
        if (w.background = `hsl(${I},${_ * 100}%,${m * 100}%)`, !a) {
          const T = Ph(I, _, m);
          w.color = to(T);
        }
      } else
        !a && o && (w.color = to(o));
      let N;
      C && C < 16 * E && (N = { transform: `scale(${C / (16 * E)})`, whiteSpace: "nowrap" }), S = /* @__PURE__ */ g("div", { "data-actualSize": C, className: "avatar-text", style: N, children: $ });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: k(b),
        style: w,
        ...y,
        children: [
          S,
          v
        ]
      }
    );
  }
};
const Rh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: us
}, Symbol.toStringTag, { value: "Module" }));
let kt = class extends lt {
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
    this._shareBtnProps = O({}, e, Yo({ btnType: s, size: i }));
  }
};
kt.NAME = "btn-group";
kt.TAG = "nav";
kt.ItemComponents = {
  ...lt.ItemComponents,
  default: Z
};
kt.defaultItemProps = {
  component: void 0
};
const ds = class Na extends kt {
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
      }), s && (r = O(s, r)), /* @__PURE__ */ g(Na, { ...r });
  }
};
ds.NAME = "toolbar";
ds.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
ds.ItemComponents = {
  ...kt.ItemComponents,
  btnGroup: kt,
  "btn-group": kt
};
let $t = ds;
const Dh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: $t
}, Symbol.toStringTag, { value: "Module" }));
class fs extends Q {
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
      e ? /* @__PURE__ */ g(
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
      /* @__PURE__ */ g("label", { htmlFor: r, children: /* @__PURE__ */ g(L, { content: o }) }, "label")
    ];
  }
}
class Lh extends fs {
}
Lh.defaultProps = {
  type: "radio"
};
class zh extends fs {
}
zh.defaultProps = {
  type: "switch"
};
class Ne extends Q {
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
      multiline: u
    } = t, h = [];
    if (r && h.push(/* @__PURE__ */ g(L, { content: r }, "toggleIcon")), l !== void 0 && h.push(/* @__PURE__ */ g(fs, { className: "item-checkbox", checked: l, ...c }, "checkbox")), e && h.push(/* @__PURE__ */ g(nt, { className: k("item-icon", s), icon: e }, "icon")), i) {
      const d = typeof i == "function" ? i.call(this, t) : i;
      d && (d.className = k("item-avatar", d.className), h.push(/* @__PURE__ */ g(us, { ...d }, "avatar")));
    }
    const f = o ? /* @__PURE__ */ g(L, { content: o }, "leading") : null;
    return f && h.push(f), u ? h.length ? [
      /* @__PURE__ */ g("div", { className: k("item-leading", a), children: h }, "leading")
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
      content: u,
      contentClass: h,
      contentAttrs: f
    } = t, d = l && !e, _ = d ? "a" : "div";
    let { title: m, text: v } = t;
    return m === void 0 && (m = v, v = null), [
      /* @__PURE__ */ g("div", { className: k("item-content", h), ...f, children: [
        m ? /* @__PURE__ */ g(_, { className: k("item-title", i), href: d ? l : void 0, target: d ? c : void 0, ...r, children: /* @__PURE__ */ g(L, { content: m }) }, "title") : null,
        o ? /* @__PURE__ */ g("div", { className: k("item-subtitle", a), children: /* @__PURE__ */ g(L, { content: o }) }, "subtitle") : null,
        v ? /* @__PURE__ */ g("div", { className: k("item-text text", s), children: v }, "text") : null,
        u ? /* @__PURE__ */ g(L, { content: u }, "extraContent") : null
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
    r && l.push(/* @__PURE__ */ g(nt, { className: k("item-trailing-icon", o), icon: r }, "trailing-icon")), a && l.push($t.render(a, [t], { key: "actions", className: "item-actions", relativeTarget: t, size: "sm" }, this));
    const c = s ? /* @__PURE__ */ g(L, { content: s }, "trailing") : null;
    return c && l.push(c), e ? l.length ? [
      /* @__PURE__ */ g("div", { className: k("item-trailing", i), children: [
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
      disabled: u,
      divider: h,
      checked: f,
      multiline: d,
      title: _,
      subtitle: m,
      hint: v,
      selected: y,
      command: b
    } = t, w = s || (o && !a ? "a" : "div"), C = w === "a", S = O({
      key: "item",
      title: v,
      className: k("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: y,
        checked: f,
        multiline: d ?? !!(_ && m),
        state: C && !u
      })
    }, b ? { "zui-command": b } : null, C ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ g(w, { ...S, children: [
      this._renderLeading(t),
      this._renderContent(t, C),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, s, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...In(s)]];
  }
}
class cn extends lt {
  constructor(t) {
    super(t), this._activeSet = new An(() => {
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
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && !this.isActive(e.key) && this.toggleActive(e.key, !0);
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
        const s = await ns(t, [this], { throws: !0 });
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
    e = O({}, Yo({
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
}
cn.ItemComponents = {
  ...lt.ItemComponents,
  default: Q,
  item: Ne,
  heading: Ne
};
cn.NAME = "list";
const Ls = "```ZUI_STR\n";
class hn {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new hn(this._id, "session")), this._altStorage);
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
      if (s.startsWith(Ls))
        return s.substring(Ls.length);
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${Ls}${e}` : JSON.stringify(e));
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
const ni = new hn("DEFAULT");
function Oh(n, t = "local") {
  return new hn(n, t);
}
Object.assign(ni, { create: Oh });
function Ea(n, t) {
  const { children: e } = n;
  e.length && e.forEach((s) => {
    t(s), Ea(s, t);
  });
}
function Hh(n, t) {
  let e = n.parent;
  for (; e; )
    t(e), e = e.parent;
}
function no(n) {
  return n.split(":").reduce((t, e, s) => (t.push(s ? t[s - 1] + ":" + e : e), t), []);
}
function si(n, t, e, s, i = 0, r) {
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
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? si(a.items, t, e, o, i + 1, h) : o;
  }, s);
}
class Ie extends cn {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: s, nestedShow: i } = t;
    if (p.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), s && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${s}:state`;
      const r = ni.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && no(o).forEach((a) => {
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
      const s = si(this._items, this.props.itemKey, (i, r) => (i.set(r.keyPath, r), r.data.items && !Array.isArray(r.data.items) && (e = !0), i), /* @__PURE__ */ new Map());
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
        let u = `${t.split(":").slice(0, -1).join(":")}`;
        u.length && (u += ":"), Object.keys(c).forEach((h) => {
          h !== t && h.startsWith(u) && (c[h] = !1);
        });
      }
      return c = e ? no(t).reduce((u, h) => (u[h] = e, u), c) : c, {
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
        const c = (d) => s[d.keyPath] ?? a[d.keyPath] ?? d.data.checked ?? !1, u = this.getItemMap(), h = {}, { expandChildrenOnCheck: f } = this.props;
        return Object.keys(s).forEach((d) => {
          e = s[d];
          const _ = u.get(d);
          _ && (Ea(_, (m) => {
            c(m) !== e && (s[m.keyPath] = e);
          }), Hh(_, (m) => {
            const { children: v } = m, y = v.reduce((b, w) => (c(w) && b++, b), 0);
            s[m.keyPath] = y === v.length ? !0 : y ? "indeterminate" : !1;
          }), f && e && _.data.items && (h[d] = !0));
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
    return i = i || si(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
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
    this._storeID && ni.set(this._storeID, { nestedShow: this.state.nestedShow });
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
    return /* @__PURE__ */ g(o, { ...r }, `nested:${s.key}`);
  }
  _renderNestedToggle(t, e) {
    let s, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (s = e ? r.expanded || /* @__PURE__ */ g("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ g("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`, ot(s) || (s = /* @__PURE__ */ g(nt, { icon: s }))) : (s = /* @__PURE__ */ g(nt, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ g("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: s });
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
}
Ie.defaultProps = {
  ...cn.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Ie.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "onToggle", "checkbox", "getItem", "getItems", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive", "hoverItemActions"];
const Re = class Aa extends Ie {
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
    return /* @__PURE__ */ g(L, { content: t.header, generatorThis: this }, "header");
  }
  _renderWrapperFooter(t) {
    return /* @__PURE__ */ g(L, { content: t.footer, generatorThis: this }, "footer");
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
        const u = e.closest("[z-list-wrapper]");
        s = u == null ? void 0 : u.getAttribute("z-list-wrapper");
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
    return t.wrap ? /* @__PURE__ */ g("menu", { ...this._getWrapperProps(t), children: [
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
      }), s && (r = O(s, r)), /* @__PURE__ */ g(Aa, { ...r });
  }
};
Re.NAME = "menu";
Re.TAG = "menu";
Re.inheritNestedProps = [...Ie.inheritNestedProps, "compact"];
Re.ItemComponents = {
  ...Ie.ItemComponents,
  item: [Ne, { innerComponent: "a" }]
};
Re.defaultProps = {
  ...Ie.defaultProps,
  scrollbarHover: !0
};
let yt = Re;
let ps = class extends F {
  constructor(t) {
    super(t), this._input = G(), this._timer = 0, this._handleClearBtnClick = (e) => {
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
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${ut()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = Qo(t, {
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
    const { style: s, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: f, clearIcon: d, value: _, compact: m, prefixClass: v, suffixClass: y } = t, { focus: b, value: w } = e, { id: C } = this, S = _ ?? w, $ = typeof S != "string" || !S.trim().length;
    let E, N, A;
    return f && (A = f === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(nt, { icon: f })), !h && f && (E = /* @__PURE__ */ g("label", { for: C, class: k("input-control-prefix", v), children: A }, "prefix")), d && !$ ? N = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: d === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(nt, { icon: d })
      }
    ) : h && f && (N = A), N && (N = /* @__PURE__ */ g("label", { for: C, class: k("input-control-suffix", y), children: N }, "suffix")), /* @__PURE__ */ g("div", { class: k("search-box input-control", r, { focus: b, empty: $, compact: m, "has-prefix-icon": E, "has-suffix-icon": N }), style: o, children: [
      E,
      /* @__PURE__ */ g(
        "input",
        {
          ref: this._input,
          id: C,
          type: "text",
          class: k("form-control", { "rounded-full": c, "size-sm": m }, i),
          style: s,
          placeholder: u,
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
      N
    ] });
  }
};
ps.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const Fh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: ps
}, Symbol.toStringTag, { value: "Module" }));
let Ct = class extends yt {
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
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, s);
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
    return /* @__PURE__ */ g(ps, { ...e }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, { noMatchHint: s, searchBox: i, searchPlacement: r, nestedSearch: o, headerClass: a } = t, l = (!o || this.isRoot) && i && r !== "bottom";
    return !e && !l && !s ? null : [
      s ? /* @__PURE__ */ g("div", { className: "search-menu-no-match-hint", children: s }, "noMatchHint") : null,
      e || l ? /* @__PURE__ */ g("header", { className: k("search-menu-header", a), children: [
        e ? super._renderWrapperHeader(t) : null,
        l ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, { searchBox: s, searchPlacement: i, nestedSearch: r, footerClass: o, exceedLimitHint: a, limit: l } = t, c = (!r || this.isRoot) && s && i === "bottom", u = a && l && this._items.length > l;
    return !e && !c && !u ? null : /* @__PURE__ */ g("footer", { className: k("search-menu-footer", o), children: [
      u ? /* @__PURE__ */ g("div", { className: "search-menu-exceed-limit-hint", children: V(a, this._items.length - l) }) : null,
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
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ g("span", { class: s, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
Ct.inheritNestedProps = [...yt.inheritNestedProps, "isItemMatch", "search", "underlineKeys", "nestedSearch"];
Ct.defaultProps = {
  ...yt.defaultProps,
  defaultNestedShow: !0,
  wrap: !0,
  nestedSearch: !0,
  underlineKeys: !0
};
const Wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: yt,
  SearchMenu: Ct
}, Symbol.toStringTag, { value: "Module" }));
class Ui extends U {
}
Ui.NAME = "Menu";
Ui.Component = yt;
Ui.replace = yt.TAG;
class Ki extends U {
}
Ki.NAME = "SearchMenu";
Ki.Component = Ct;
Ki.replace = Ct.TAG;
it(Wh);
function jh({
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
  let f;
  a === !0 ? f = /* @__PURE__ */ g(Z, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : ot(a) ? f = a : typeof a == "object" && (f = /* @__PURE__ */ g(Z, { ...a, onClick: l }));
  const d = $t.render(e, []);
  return /* @__PURE__ */ g("div", { className: k("alert", n), style: t, ...h, children: [
    /* @__PURE__ */ g(nt, { icon: c, className: k("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ g(L, { content: i }) : /* @__PURE__ */ g("div", { className: k("alert-content", r), children: [
      typeof s != "string" ? /* @__PURE__ */ g(L, { content: s }) : s && /* @__PURE__ */ g("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      s ? d : null
    ] }),
    s ? null : d,
    f,
    o
  ] });
}
function Bh(n) {
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
let Vh = class extends F {
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
    return typeof c.html == "string" && (c.content = { html: c.html }, delete c.html), /* @__PURE__ */ g(
      jh,
      {
        className: k("messager", a, s, r === !0 ? Bh(i) : r, o ? "in" : ""),
        ...c
      }
    );
  }
};
class qi extends U {
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
qi.NAME = "MessagerItem";
qi.Component = Vh;
const un = class Ma extends vt {
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
      const e = this._getHolder(), s = new qi(e, t);
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
    const { container: s, ...i } = t, r = { type: e, key: `messager_${ut()}`, ...i };
    r.type && p.extend(r, this.TypeOptions[r.type]);
    const o = Ma.ensure(s || "body", r);
    return o.hide(), o.show(), o;
  }
};
un.NAME = "messager";
un.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
un.MULTI_INSTANCE = !0;
un.TypeOptions = {};
let of = un, gs = class extends F {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ g("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...c
    }, children: [
      /* @__PURE__ */ g("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
};
gs.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: gs
}, Symbol.toStringTag, { value: "Module" }));
it(Uh);
class Gi extends U {
}
Gi.NAME = "ProgressBar";
Gi.Component = gs;
Gi.register();
let ms = class extends F {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, f = s / 2;
    let { circleWidth: d = 0.1 } = t;
    d < 1 && (d = s * d);
    const _ = (s - d) / 2;
    return /* @__PURE__ */ g("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ g("circle", { cx: f, cy: f, r: _, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ g("circle", { cx: f, cy: f, r: _, "stroke-width": d, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * _ * 2, "stroke-dashoffset": Math.PI * _ * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ g("text", { x: c ?? f, y: u ?? f + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${_}px`, stroke: "currentColor" }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
ms.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Yi extends U {
}
Yi.NAME = "ProgressCircle";
Yi.Component = ms;
Yi.register();
const Kh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: ms
}, Symbol.toStringTag, { value: "Module" }));
it(Kh);
class Pa extends U {
}
Pa.NAME = "Avatar";
Pa.Component = us;
it(Rh);
class Ia extends U {
}
Ia.NAME = "BtnGroup";
Ia.Component = kt;
const qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: kt
}, Symbol.toStringTag, { value: "Module" }));
it(qh);
const Ra = Symbol("EVENT_PICK");
class Ji extends F {
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
        return /* @__PURE__ */ g("input", { id: o, type: "hidden", className: "pick-value", name: e, value: s, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    p(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, s) => {
      if (typeof s == "symbol")
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    p(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && p(`#${e}`).trigger("change", Ra), this._skipTriggerChange = !1);
  }
  render(t) {
    return wt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Jt = Math.min, gt = Math.max, zn = Math.round, yn = Math.floor, Pt = (n) => ({
  x: n,
  y: n
}), Gh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Yh = {
  start: "end",
  end: "start"
};
function ii(n, t, e) {
  return gt(n, Jt(t, e));
}
function De(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function Zt(n) {
  return n.split("-")[0];
}
function Le(n) {
  return n.split("-")[1];
}
function Da(n) {
  return n === "x" ? "y" : "x";
}
function Zi(n) {
  return n === "y" ? "height" : "width";
}
function de(n) {
  return ["top", "bottom"].includes(Zt(n)) ? "y" : "x";
}
function Xi(n) {
  return Da(de(n));
}
function Jh(n, t, e) {
  e === void 0 && (e = !1);
  const s = Le(n), i = Xi(n), r = Zi(i);
  let o = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = On(o)), [o, On(o)];
}
function Zh(n) {
  const t = On(n);
  return [ri(n), t, ri(t)];
}
function ri(n) {
  return n.replace(/start|end/g, (t) => Yh[t]);
}
function Xh(n, t, e) {
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
function Qh(n, t, e, s) {
  const i = Le(n);
  let r = Xh(Zt(n), e === "start", s);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(ri)))), r;
}
function On(n) {
  return n.replace(/left|right|bottom|top/g, (t) => Gh[t]);
}
function tu(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function La(n) {
  return typeof n != "number" ? tu(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function Hn(n) {
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
function so(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const r = de(t), o = Xi(t), a = Zi(o), l = Zt(t), c = r === "y", u = s.x + s.width / 2 - i.width / 2, h = s.y + s.height / 2 - i.height / 2, f = s[a] / 2 - i[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: s.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: s.y + s.height
      };
      break;
    case "right":
      d = {
        x: s.x + s.width,
        y: h
      };
      break;
    case "left":
      d = {
        x: s.x - i.width,
        y: h
      };
      break;
    default:
      d = {
        x: s.x,
        y: s.y
      };
  }
  switch (Le(t)) {
    case "start":
      d[o] -= f * (e && c ? -1 : 1);
      break;
    case "end":
      d[o] += f * (e && c ? -1 : 1);
      break;
  }
  return d;
}
const eu = async (n, t, e) => {
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
  } = so(c, s, l), f = s, d = {}, _ = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: v,
      fn: y
    } = a[m], {
      x: b,
      y: w,
      data: C,
      reset: S
    } = await y({
      x: u,
      y: h,
      initialPlacement: s,
      placement: f,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: o,
      elements: {
        reference: n,
        floating: t
      }
    });
    u = b ?? u, h = w ?? h, d = {
      ...d,
      [v]: {
        ...d[v],
        ...C
      }
    }, S && _ <= 50 && (_++, typeof S == "object" && (S.placement && (f = S.placement), S.rects && (c = S.rects === !0 ? await o.getElementRects({
      reference: n,
      floating: t,
      strategy: i
    }) : S.rects), {
      x: u,
      y: h
    } = so(c, f, l)), m = -1);
  }
  return {
    x: u,
    y: h,
    placement: f,
    strategy: i,
    middlewareData: d
  };
};
async function Qi(n, t) {
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
    altBoundary: f = !1,
    padding: d = 0
  } = De(t, n), _ = La(d), v = a[f ? h === "floating" ? "reference" : "floating" : h], y = Hn(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
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
  }, S = Hn(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - S.top + _.top) / C.y,
    bottom: (S.bottom - y.bottom + _.bottom) / C.y,
    left: (y.left - S.left + _.left) / C.x,
    right: (S.right - y.right + _.right) / C.x
  };
}
const nu = (n) => ({
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
    } = De(n, t) || {};
    if (c == null)
      return {};
    const h = La(u), f = {
      x: e,
      y: s
    }, d = Xi(i), _ = Zi(d), m = await o.getDimensions(c), v = d === "y", y = v ? "top" : "left", b = v ? "bottom" : "right", w = v ? "clientHeight" : "clientWidth", C = r.reference[_] + r.reference[d] - f[d] - r.floating[_], S = f[d] - r.reference[d], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let E = $ ? $[w] : 0;
    (!E || !await (o.isElement == null ? void 0 : o.isElement($))) && (E = a.floating[w] || r.floating[_]);
    const N = C / 2 - S / 2, A = E / 2 - m[_] / 2 - 1, I = Jt(h[y], A), T = Jt(h[b], A), P = I, H = E - m[_] - T, R = E / 2 - m[_] / 2 + N, W = ii(P, R, H), K = !l.arrow && Le(i) != null && R !== W && r.reference[_] / 2 - (R < P ? I : T) - m[_] / 2 < 0, B = K ? R < P ? R - P : R - H : 0;
    return {
      [d]: f[d] + B,
      data: {
        [d]: W,
        centerOffset: R - W - B,
        ...K && {
          alignmentOffset: B
        }
      },
      reset: K
    };
  }
}), su = function(n) {
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
        fallbackPlacements: f,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: m = !0,
        ...v
      } = De(n, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const y = Zt(i), b = de(a), w = Zt(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = f || (w || !m ? [On(a)] : Zh(a)), $ = _ !== "none";
      !f && $ && S.push(...Qh(a, m, _, C));
      const E = [a, ...S], N = await Qi(t, v), A = [];
      let I = ((s = r.flip) == null ? void 0 : s.overflows) || [];
      if (u && A.push(N[y]), h) {
        const R = Jh(i, o, C);
        A.push(N[R[0]], N[R[1]]);
      }
      if (I = [...I, {
        placement: i,
        overflows: A
      }], !A.every((R) => R <= 0)) {
        var T, P;
        const R = (((T = r.flip) == null ? void 0 : T.index) || 0) + 1, W = E[R];
        if (W)
          return {
            data: {
              index: R,
              overflows: I
            },
            reset: {
              placement: W
            }
          };
        let K = (P = I.filter((B) => B.overflows[0] <= 0).sort((B, M) => B.overflows[1] - M.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!K)
          switch (d) {
            case "bestFit": {
              var H;
              const B = (H = I.filter((M) => {
                if ($) {
                  const ct = de(M.placement);
                  return ct === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  ct === "y";
                }
                return !0;
              }).map((M) => [M.placement, M.overflows.filter((ct) => ct > 0).reduce((ct, Ts) => ct + Ts, 0)]).sort((M, ct) => M[1] - ct[1])[0]) == null ? void 0 : H[0];
              B && (K = B);
              break;
            }
            case "initialPlacement":
              K = a;
              break;
          }
        if (i !== K)
          return {
            reset: {
              placement: K
            }
          };
      }
      return {};
    }
  };
};
async function iu(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, r = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), o = Zt(e), a = Le(e), l = de(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = De(t, n);
  let {
    mainAxis: f,
    crossAxis: d,
    alignmentAxis: _
  } = typeof h == "number" ? {
    mainAxis: h,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: h.mainAxis || 0,
    crossAxis: h.crossAxis || 0,
    alignmentAxis: h.alignmentAxis
  };
  return a && typeof _ == "number" && (d = a === "end" ? _ * -1 : _), l ? {
    x: d * u,
    y: f * c
  } : {
    x: f * c,
    y: d * u
  };
}
const ru = function(n) {
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
      } = t, l = await iu(t, n);
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
}, ou = function(n) {
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
          fn: (v) => {
            let {
              x: y,
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = De(n, t), c = {
        x: e,
        y: s
      }, u = await Qi(t, l), h = de(Zt(i)), f = Da(h);
      let d = c[f], _ = c[h];
      if (r) {
        const v = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = d + u[v], w = d - u[y];
        d = ii(b, d, w);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = _ + u[v], w = _ - u[y];
        _ = ii(b, _, w);
      }
      const m = a.fn({
        ...t,
        [f]: d,
        [h]: _
      });
      return {
        ...m,
        data: {
          x: m.x - e,
          y: m.y - s,
          enabled: {
            [f]: r,
            [h]: o
          }
        }
      };
    }
  };
}, au = function(n) {
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
      } = De(n, t), u = await Qi(t, c), h = Zt(i), f = Le(i), d = de(i) === "y", {
        width: _,
        height: m
      } = r.floating;
      let v, y;
      h === "top" || h === "bottom" ? (v = h, y = f === (await (o.isRTL == null ? void 0 : o.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = h, v = f === "end" ? "top" : "bottom");
      const b = m - u.top - u.bottom, w = _ - u.left - u.right, C = Jt(m - u[v], b), S = Jt(_ - u[y], w), $ = !t.middlewareData.shift;
      let E = C, N = S;
      if ((e = t.middlewareData.shift) != null && e.enabled.x && (N = w), (s = t.middlewareData.shift) != null && s.enabled.y && (E = b), $ && !f) {
        const I = gt(u.left, 0), T = gt(u.right, 0), P = gt(u.top, 0), H = gt(u.bottom, 0);
        d ? N = _ - 2 * (I !== 0 || T !== 0 ? I + T : gt(u.left, u.right)) : E = m - 2 * (P !== 0 || H !== 0 ? P + H : gt(u.top, u.bottom));
      }
      await l({
        ...t,
        availableWidth: N,
        availableHeight: E
      });
      const A = await o.getDimensions(a.floating);
      return _ !== A.width || m !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function _s() {
  return typeof window < "u";
}
function ze(n) {
  return za(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function mt(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dt(n) {
  var t;
  return (t = (za(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function za(n) {
  return _s() ? n instanceof Node || n instanceof mt(n).Node : !1;
}
function Nt(n) {
  return _s() ? n instanceof Element || n instanceof mt(n).Element : !1;
}
function It(n) {
  return _s() ? n instanceof HTMLElement || n instanceof mt(n).HTMLElement : !1;
}
function io(n) {
  return !_s() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof mt(n).ShadowRoot;
}
function dn(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = Et(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function lu(n) {
  return ["table", "td", "th"].includes(ze(n));
}
function ys(n) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return n.matches(t);
    } catch {
      return !1;
    }
  });
}
function tr(n) {
  const t = er(), e = Nt(n) ? Et(n) : n;
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function cu(n) {
  let t = Xt(n);
  for (; It(t) && !Ee(t); ) {
    if (tr(t))
      return t;
    if (ys(t))
      return null;
    t = Xt(t);
  }
  return null;
}
function er() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Ee(n) {
  return ["html", "body", "#document"].includes(ze(n));
}
function Et(n) {
  return mt(n).getComputedStyle(n);
}
function vs(n) {
  return Nt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.scrollX,
    scrollTop: n.scrollY
  };
}
function Xt(n) {
  if (ze(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    io(n) && n.host || // Fallback.
    Dt(n)
  );
  return io(t) ? t.host : t;
}
function Oa(n) {
  const t = Xt(n);
  return Ee(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : It(t) && dn(t) ? t : Oa(t);
}
function Xe(n, t, e) {
  var s;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Oa(n), r = i === ((s = n.ownerDocument) == null ? void 0 : s.body), o = mt(i);
  if (r) {
    const a = oi(o);
    return t.concat(o, o.visualViewport || [], dn(i) ? i : [], a && e ? Xe(a) : []);
  }
  return t.concat(i, Xe(i, [], e));
}
function oi(n) {
  return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null;
}
function Ha(n) {
  const t = Et(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = It(n), r = i ? n.offsetWidth : e, o = i ? n.offsetHeight : s, a = zn(e) !== r || zn(s) !== o;
  return a && (e = r, s = o), {
    width: e,
    height: s,
    $: a
  };
}
function nr(n) {
  return Nt(n) ? n : n.contextElement;
}
function Se(n) {
  const t = nr(n);
  if (!It(t))
    return Pt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: r
  } = Ha(t);
  let o = (r ? zn(e.width) : e.width) / s, a = (r ? zn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const hu = /* @__PURE__ */ Pt(0);
function Fa(n) {
  const t = mt(n);
  return !er() || !t.visualViewport ? hu : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function uu(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== mt(n) ? !1 : t;
}
function fe(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), r = nr(n);
  let o = Pt(1);
  t && (s ? Nt(s) && (o = Se(s)) : o = Se(n));
  const a = uu(r, e, s) ? Fa(r) : Pt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const f = mt(r), d = s && Nt(s) ? mt(s) : s;
    let _ = f, m = oi(_);
    for (; m && s && d !== _; ) {
      const v = Se(m), y = m.getBoundingClientRect(), b = Et(m), w = y.left + (m.clientLeft + parseFloat(b.paddingLeft)) * v.x, C = y.top + (m.clientTop + parseFloat(b.paddingTop)) * v.y;
      l *= v.x, c *= v.y, u *= v.x, h *= v.y, l += w, c += C, _ = mt(m), m = oi(_);
    }
  }
  return Hn({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
function sr(n, t) {
  const e = vs(n).scrollLeft;
  return t ? t.left + e : fe(Dt(n)).left + e;
}
function Wa(n, t, e) {
  e === void 0 && (e = !1);
  const s = n.getBoundingClientRect(), i = s.left + t.scrollLeft - (e ? 0 : (
    // RTL <body> scrollbar.
    sr(n, s)
  )), r = s.top + t.scrollTop;
  return {
    x: i,
    y: r
  };
}
function du(n) {
  let {
    elements: t,
    rect: e,
    offsetParent: s,
    strategy: i
  } = n;
  const r = i === "fixed", o = Dt(s), a = t ? ys(t.floating) : !1;
  if (s === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Pt(1);
  const u = Pt(0), h = It(s);
  if ((h || !h && !r) && ((ze(s) !== "body" || dn(o)) && (l = vs(s)), It(s))) {
    const d = fe(s);
    c = Se(s), u.x = d.x + s.clientLeft, u.y = d.y + s.clientTop;
  }
  const f = o && !h && !r ? Wa(o, l, !0) : Pt(0);
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y + f.y
  };
}
function fu(n) {
  return Array.from(n.getClientRects());
}
function pu(n) {
  const t = Dt(n), e = vs(n), s = n.ownerDocument.body, i = gt(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), r = gt(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let o = -e.scrollLeft + sr(n);
  const a = -e.scrollTop;
  return Et(s).direction === "rtl" && (o += gt(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function gu(n, t) {
  const e = mt(n), s = Dt(n), i = e.visualViewport;
  let r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = er();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function mu(n, t) {
  const e = fe(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, r = It(n) ? Se(n) : Pt(1), o = n.clientWidth * r.x, a = n.clientHeight * r.y, l = i * r.x, c = s * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function ro(n, t, e) {
  let s;
  if (t === "viewport")
    s = gu(n, e);
  else if (t === "document")
    s = pu(Dt(n));
  else if (Nt(t))
    s = mu(t, e);
  else {
    const i = Fa(n);
    s = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return Hn(s);
}
function ja(n, t) {
  const e = Xt(n);
  return e === t || !Nt(e) || Ee(e) ? !1 : Et(e).position === "fixed" || ja(e, t);
}
function _u(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = Xe(n, [], !1).filter((a) => Nt(a) && ze(a) !== "body"), i = null;
  const r = Et(n).position === "fixed";
  let o = r ? Xt(n) : n;
  for (; Nt(o) && !Ee(o); ) {
    const a = Et(o), l = tr(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || dn(o) && !l && ja(n, o)) ? s = s.filter((u) => u !== o) : i = a, o = Xt(o);
  }
  return t.set(n, s), s;
}
function yu(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const o = [...e === "clippingAncestors" ? ys(t) ? [] : _u(t, this._c) : [].concat(e), s], a = o[0], l = o.reduce((c, u) => {
    const h = ro(t, u, i);
    return c.top = gt(h.top, c.top), c.right = Jt(h.right, c.right), c.bottom = Jt(h.bottom, c.bottom), c.left = gt(h.left, c.left), c;
  }, ro(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function vu(n) {
  const {
    width: t,
    height: e
  } = Ha(n);
  return {
    width: t,
    height: e
  };
}
function bu(n, t, e) {
  const s = It(t), i = Dt(t), r = e === "fixed", o = fe(n, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Pt(0);
  if (s || !s && !r)
    if ((ze(t) !== "body" || dn(i)) && (a = vs(t)), s) {
      const f = fe(t, !0, r, t);
      l.x = f.x + t.clientLeft, l.y = f.y + t.clientTop;
    } else
      i && (l.x = sr(i));
  const c = i && !s && !r ? Wa(i, a) : Pt(0), u = o.left + a.scrollLeft - l.x - c.x, h = o.top + a.scrollTop - l.y - c.y;
  return {
    x: u,
    y: h,
    width: o.width,
    height: o.height
  };
}
function zs(n) {
  return Et(n).position === "static";
}
function oo(n, t) {
  if (!It(n) || Et(n).position === "fixed")
    return null;
  if (t)
    return t(n);
  let e = n.offsetParent;
  return Dt(n) === e && (e = e.ownerDocument.body), e;
}
function Ba(n, t) {
  const e = mt(n);
  if (ys(n))
    return e;
  if (!It(n)) {
    let i = Xt(n);
    for (; i && !Ee(i); ) {
      if (Nt(i) && !zs(i))
        return i;
      i = Xt(i);
    }
    return e;
  }
  let s = oo(n, t);
  for (; s && lu(s) && zs(s); )
    s = oo(s, t);
  return s && Ee(s) && zs(s) && !tr(s) ? e : s || cu(n) || e;
}
const wu = async function(n) {
  const t = this.getOffsetParent || Ba, e = this.getDimensions, s = await e(n.floating);
  return {
    reference: bu(n.reference, await t(n.floating), n.strategy),
    floating: {
      x: 0,
      y: 0,
      width: s.width,
      height: s.height
    }
  };
};
function Cu(n) {
  return Et(n).direction === "rtl";
}
const Su = {
  convertOffsetParentRelativeRectToViewportRelativeRect: du,
  getDocumentElement: Dt,
  getClippingRect: yu,
  getOffsetParent: Ba,
  getElementRects: wu,
  getClientRects: fu,
  getDimensions: vu,
  getScale: Se,
  isElement: Nt,
  isRTL: Cu
};
function xu(n, t) {
  let e = null, s;
  const i = Dt(n);
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
      height: f
    } = n.getBoundingClientRect();
    if (a || t(), !h || !f)
      return;
    const d = yn(u), _ = yn(i.clientWidth - (c + h)), m = yn(i.clientHeight - (u + f)), v = yn(c), b = {
      rootMargin: -d + "px " + -_ + "px " + -m + "px " + -v + "px",
      threshold: gt(0, Jt(1, l)) || 1
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
function Va(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, c = nr(n), u = i || r ? [...c ? Xe(c) : [], ...Xe(t)] : [];
  u.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? xu(c, e) : null;
  let f = -1, d = null;
  o && (d = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && d && (d.unobserve(t), cancelAnimationFrame(f), f = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(t);
    })), e();
  }), c && !l && d.observe(c), d.observe(t));
  let _, m = l ? fe(n) : null;
  l && v();
  function v() {
    const y = fe(n);
    m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && e(), m = y, _ = requestAnimationFrame(v);
  }
  return e(), () => {
    var y;
    u.forEach((b) => {
      i && b.removeEventListener("scroll", e), r && b.removeEventListener("resize", e);
    }), h == null || h(), (y = d) == null || y.disconnect(), d = null, l && cancelAnimationFrame(_);
  };
}
const ir = ru, rr = ou, or = su, Ua = au, ku = nu, ar = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: Su,
    ...e
  }, r = {
    ...i.platform,
    _c: s
  };
  return eu(n, t, {
    ...i,
    platform: r
  });
};
class Ka extends F {
  constructor(t) {
    super(t), this._ref = G(), this._handleDocClick = (e) => {
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
  _render(t) {
    return /* @__PURE__ */ g("div", { ...this._getProps(t), children: this._renderPop(t) });
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
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = Gt(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
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
    this._layoutWatcher || (this._layoutWatcher = Va(e, t, () => {
      const { placement: r, width: o } = s;
      ar(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? or() : null, rr(), ir(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (ne(e) || !os(e)) {
          p(t).css({ display: "none" });
          return;
        }
        p(t).css(this._getStyle({
          left: a,
          top: l
        }, c)), (h = (u = this.props).onLayout) == null || h.call(u, t);
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
    return $h(this._render(t), this._getContainer(t));
  }
}
let St = class extends F {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = G(), this._trigger = G(), this.toggle = async (e, s) => {
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
      return o === "closing" ? (await Mn(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await Mn(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${ut()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
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
      onClickItem: t.onClickItem
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
      r = /* @__PURE__ */ g(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ g(Ae, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
St.Trigger = Ji;
St.Pop = Ka;
St.defaultProps = {
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
let qa = class extends St {
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
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ g(nt, { icon: s }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
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
    return i && (a = /* @__PURE__ */ g("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ g("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ g("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(nt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(nt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
qa.defaultProps = {
  ...St.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class lr extends U {
}
lr.NAME = "ColorPicker";
lr.Component = qa;
lr.register();
class Ga extends F {
  constructor() {
    super(...arguments), this._ref = G(), this._handleClickItem = (t, e) => {
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
    return /* @__PURE__ */ g("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ g(
        yt,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ g(
        yt,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const ao = (n) => {
  if (!n)
    return;
  const t = q(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ya = class extends St {
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
    return e.value === "now" && (e.value = Tt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
  }
  setTime(t, e) {
    if (!e && (this.props.disabled || this.props.readonly))
      return;
    let s = "";
    if (typeof t == "string")
      s = t;
    else {
      const [c, u] = (this.state.value || "00:00").split(":"), { hour: h = +c, minute: f = +u } = t;
      s = `${h}:${f}`;
    }
    const i = ao(s), { onInvalid: r, required: o, defaultValue: a, format: l } = this.props;
    return this.changeState({ value: i ? Tt(i, l) : o ? a : "" }, () => {
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
    const t = ao(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ g("i", { class: "i-time" }) : h = /* @__PURE__ */ g(nt, { icon: i })), [
      /* @__PURE__ */ g("input", { id: u, type: "text", className: "form-control", placeholder: s, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ g("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
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
    return /* @__PURE__ */ g(Ga, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
Ya.defaultProps = {
  ...St.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function Tu(n, t, e) {
  return t && n < t ? t : e && n > e ? e : n;
}
function Ke(n) {
  if (n == null)
    return null;
  if (typeof n == "function" && (n = n()), typeof n == "string" && n.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    n.length > 6 ? n = rh(t, n.substring(5).replace("+", "")) : n = t;
  } else
    n = q(n);
  return la(n) ? n : null;
}
j.addLang({
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
const $u = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), r = s.getTime() - (7 + i - e) % 7 * Ze;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: s.getTime()
  };
}, lo = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => Tt(e, t)));
class Nu extends F {
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
    var I, T;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: s = 1,
      weekNames: i = j.getLang("weekNames"),
      monthNames: r = j.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h,
      isAllowDate: f
    } = t, d = [], _ = "btn ghost square rounded-full";
    for (let P = 0; P < 7; P++) {
      const H = (s + P) % 7;
      d.push(/* @__PURE__ */ g("div", { className: k("col mini-calendar-day", { "is-weekend": H === 0 || H === 6 }), children: /* @__PURE__ */ g("div", { children: i ? i[H] : H }) }, P));
    }
    const { startTime: m, days: v, firstDay: y } = $u(o, a, s), b = y + v * Ze;
    let w = m;
    const C = [], S = "yyyy-MM-dd", $ = lo(l, S), E = lo(c, S), N = ((I = u ? q(u) : null) == null ? void 0 : I.getTime()) ?? Number.MAX_SAFE_INTEGER, A = ((T = h ? q(h) : null) == null ? void 0 : T.getTime()) ?? 0;
    for (; w <= b; ) {
      const P = [];
      for (let H = 0; H < 7; H++) {
        const R = new Date(w);
        let W = (f == null ? void 0 : f(R)) ?? !0;
        typeof W == "boolean" && (W = { allow: W });
        const K = R.getDate(), B = Tt(R, S), M = R.getDay(), ct = aa(R, y), Ts = k("col mini-calendar-day", {
          active: $.has(B),
          selected: E.has(B),
          "is-first": K === 1,
          "is-in-month": ct,
          "is-out-month": !ct,
          "is-today": le(R, e),
          "is-weekend": M === 0 || M === 6,
          disabled: !W.allow || (w > N || w < A) && !le(R, N) && !le(R, A)
        });
        P.push(
          /* @__PURE__ */ g("div", { className: Ts, "data-date": B, children: /* @__PURE__ */ g("button", { type: "button", className: _, onClick: this._handleClickDate, title: W.hint, children: K === 1 && r ? r[R.getMonth()] : R.getDate() }) }, B)
        ), w += Ze;
      }
      C.push(/* @__PURE__ */ g("div", { className: "row", children: P }, w));
    }
    return /* @__PURE__ */ g("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ g("div", { className: "row", children: d }),
      C
    ] });
  }
}
var Gn, Yn;
class co extends F {
  constructor() {
    super(...arguments);
    dt(this, Gn, G());
    dt(this, Yn, (e) => {
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
      a.push(/* @__PURE__ */ g(Z, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: ht(this, Yn), children: c }, c));
    return /* @__PURE__ */ g("div", { className: s, ref: ht(this, Gn), children: a });
  }
}
Gn = new WeakMap(), Yn = new WeakMap();
var en, nn, sn, rn, on, an, Jn, Ja, Zn, Za;
class Eu extends F {
  constructor(e) {
    super(e);
    dt(this, Jn);
    dt(this, Zn);
    dt(this, en, void 0);
    dt(this, nn, void 0);
    dt(this, sn, void 0);
    dt(this, rn, void 0);
    dt(this, on, void 0);
    dt(this, an, void 0);
    bt(this, en, G()), bt(this, nn, (r) => {
      const o = p(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), bt(this, sn, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), bt(this, rn, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), bt(this, on, (r) => {
      this.setState({ year: r, select: "day" });
    }), bt(this, an, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: s } = e, i = Ke(s) || /* @__PURE__ */ new Date();
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
      yearText: r = j.getLang("yearFormat") || "{0}",
      weekNames: o = j.getLang("weekNames"),
      monthNames: a = j.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: u
    } = e, h = Ke(i), {
      year: f,
      month: d,
      select: _
    } = s, m = _ === "day", v = l || q("1970-1-1"), y = c || q("2099-12-31");
    return /* @__PURE__ */ g("div", { className: "date-picker-menu row", ref: ht(this, en), onClick: ht(this, nn), children: [
      Ns(this, Jn, Ja).call(this, e),
      /* @__PURE__ */ g("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ g("div", { className: "row p-2", children: [
          /* @__PURE__ */ g(Z, { type: _ === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: V(r, f) }),
          /* @__PURE__ */ g(Z, { type: _ === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ g("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ g(Z, { type: "ghost", size: "sm", square: !0, onClick: ht(this, sn), children: /* @__PURE__ */ g("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ g(Z, { type: "ghost", size: "sm", square: !0, onClick: ht(this, rn), children: /* @__PURE__ */ g("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ g(
          Nu,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: y,
            minDate: v,
            year: f,
            month: d,
            selections: h || [],
            onClickDate: this.changeDate,
            isAllowDate: e.isAllowDate
          }
        ) : null,
        _ === "year" ? /* @__PURE__ */ g(
          co,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: f,
            min: v.getFullYear(),
            max: y.getFullYear(),
            onChange: ht(this, on)
          }
        ) : _ === "month" ? /* @__PURE__ */ g(
          co,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: ht(this, an)
          }
        ) : null,
        m ? Ns(this, Zn, Za).call(this, e) : null
      ] })
    ] });
  }
}
en = new WeakMap(), nn = new WeakMap(), sn = new WeakMap(), rn = new WeakMap(), on = new WeakMap(), an = new WeakMap(), Jn = new WeakSet(), Ja = function(e) {
  return yt.render(e.menu, [], {
    onClickItem: (s) => {
      const i = s.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Zn = new WeakSet(), Za = function(e) {
  let { actions: s } = e;
  const { todayText: i = j.getLang("today"), clearText: r } = e;
  return s === void 0 && (s = [{ text: i, "data-set-date": Tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ g("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ g($t, { btnProps: { className: "ghost text-primary" }, ...s }),
    r ? /* @__PURE__ */ g(Z, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let bs = class extends St {
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
    return this._date = a, a ? Tt(a, o) : r ? t : i ? s : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: s } = this.props;
    return [Ke(typeof e == "function" ? e(t) : e), Ke(typeof s == "function" ? s(t) : s)];
  }
  _parseDate(t) {
    const e = Ke(t);
    return e && this._isAllowDate(e) ? Tu(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let f;
    u && !r && c.length ? f = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? f = /* @__PURE__ */ g("i", { class: "i-calendar" }) : f = /* @__PURE__ */ g(nt, { icon: i }));
    const d = u ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ g(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: d,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      f ? /* @__PURE__ */ g("label", { for: h, className: "input-control-suffix", children: f }, "icon") : null
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
    const { weekNames: s, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: u, required: h, isAllowDate: f } = t, [d, _] = this._getDateRange(e.value);
    return /* @__PURE__ */ g(
      Eu,
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
        minDate: d,
        maxDate: _,
        isAllowDate: f ? this._isAllowDate.bind(this) : void 0
      }
    );
  }
};
bs.defaultProps = {
  ...St.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Xa = class extends bs {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = q(t), s = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(s.getHours()), e.setMinutes(s.getMinutes()), this.setDate(Tt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const s = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? s.setHours(e) : s.setMinutes(e), this.setDate(Tt(s, this.props.format));
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
    return /* @__PURE__ */ g("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ g("div", { className: "divider" }),
      /* @__PURE__ */ g(
        Ga,
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
Xa.defaultProps = {
  ...bs.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class cr extends U {
}
cr.NAME = "TimePicker";
cr.Component = Ya;
cr.register();
class hr extends U {
}
hr.NAME = "DatePicker";
hr.Component = bs;
hr.register();
class ur extends U {
}
ur.NAME = "DatetimePicker";
ur.Component = Xa;
ur.register();
const ho = "show", Os = "in", Au = '[data-dismiss="modal"]', vn = "modal-hide", Oe = class ie extends vt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(Au) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
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
      t.target.closest(".modal") === e && !ie.getAll().some((s) => s.shown) && p("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && p("html").disableScroll();
    }), this.shown && p("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    var c;
    const { modalElement: e } = this, s = p(e);
    if (this._shown && s.hasClass(Os))
      return s.removeClass(vn).css("z-index", `${ie.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    s.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [vn]: !1
    }, ho, o).css({
      zIndex: `${ie.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((u) => {
      u !== this && u.shown && !s.closest(u.modalElement).length && u.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((u) => {
      u !== this && !s.closest(u.modalElement).length && u.hide();
    }), this.layout(), (c = this.options.onShow) == null || c.call(this), this.emit("show"), this._setTimer(() => {
      s.addClass(Os), this._setTimer(() => {
        var u, h;
        (u = s.find("[autofocus]")[0]) == null || u.focus(), (h = this.options.onShown) == null || h.call(this), this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    p(this.modalElement).addClass(vn);
  }
  hide() {
    var e;
    if (!this._shown)
      return !1;
    this._shown = !1, p(this.modalElement).removeClass(Os), (e = this.options.onHide) == null || e.call(this), this.emit("hide"), this._setTimer(() => {
      var s;
      p(this.modalElement).removeClass(ho), (s = this.options.onHidden) == null || s.call(this), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((s) => {
      s.shown && s !== this && p(s.modalElement).removeClass(vn);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), p(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static last(t) {
    return ie.query(t, void 0, (e) => e.shown);
  }
  static hide(t) {
    var e;
    (e = ie.last(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = ie.query(t, void 0, (s) => !s.shown)) == null || e.show();
  }
};
Oe.NAME = "Modal";
Oe.MULTI_INSTANCE = !0;
Oe.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Oe.hideOthers = !0;
Oe.zIndex = 1500;
let Qe = Oe;
p(window).on(`resize.${Qe.NAMESPACE}`, () => {
  Qe.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
class Qa extends F {
  constructor(t) {
    super(t), this._ref = G(), this.state = { showed: !t.waitShowEvent };
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
    return ot(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ g(L, { className: k("modal-header", e), content: t }) : /* @__PURE__ */ g("div", { className: k("modal-header", e), children: /* @__PURE__ */ g("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : ot(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g($t, { ...t }) : null,
      e ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? ot(t) ? t : /* @__PURE__ */ g(L, { className: k("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: s
    } = this.props;
    return ot(t) ? t : t === !1 || !s ? null : t ? /* @__PURE__ */ g(L, { className: k("modal-footer", e), content: t }) : /* @__PURE__ */ g("div", { className: k("modal-footer", e), children: s ? /* @__PURE__ */ g($t, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i,
      waitShowEvent: r
    } = this.props, o = r && !this.state.showed;
    return /* @__PURE__ */ g("div", { ref: r ? this._ref : void 0, className: k("modal-dialog", t, o ? "loading" : ""), style: e, children: [
      /* @__PURE__ */ g("div", { className: k("modal-content", s), children: [
        this.renderHeader(),
        this.renderActions(),
        this.renderBody(),
        i,
        this.renderFooter()
      ] }),
      o ? /* @__PURE__ */ g("div", { class: "load-indicator loading" }) : null
    ] });
  }
}
Qa.defaultProps = { closeBtn: !0 };
class tl extends F {
  constructor() {
    super(...arguments), this._ref = G(), this.state = {}, this._handleIframeLoad = () => {
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
      const s = t.body, i = t.documentElement, r = Math.ceil(Math.max(s.scrollHeight, s.offsetHeight, i.offsetHeight));
      this.setState({ height: r });
    }), e.observe(t.body), e.observe(t.documentElement), this._rob = e;
  }
  render() {
    return /* @__PURE__ */ g(
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
tl.defaultProps = {
  watchHeight: !0
};
var dr = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, xt = (n, t, e) => (dr(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Fe = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ye = (n, t, e, s) => (dr(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Sn = (n, t, e) => (dr(n, t, "access private method"), e), zt, We, Ot, Fn, fr, xn, ai;
function Mu(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function Pu(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await p.ajax({
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
    body: e === "html" ? /* @__PURE__ */ g(ue, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function Iu(n, t) {
  const { url: e, custom: s, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...s,
    waitShowEvent: "modal-iframe-loaded",
    body: /* @__PURE__ */ g(tl, { url: e, watchHeight: !o })
  };
}
const Ru = {
  custom: Mu,
  ajax: Pu,
  iframe: Iu
}, uo = "loading", el = class re extends Qe {
  constructor() {
    super(...arguments), Fe(this, Fn), Fe(this, xn), Fe(this, zt, void 0), Fe(this, We, void 0), Fe(this, Ot, void 0);
  }
  get id() {
    return xt(this, We);
  }
  get loading() {
    var t;
    return (t = xt(this, zt)) == null ? void 0 : t.classList.contains(uo);
  }
  get shown() {
    var t;
    return !!((t = xt(this, zt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = xt(this, zt);
    if (!t) {
      const { options: e } = this;
      let s = xt(this, We);
      s || (s = e.id || `modal-${ut()}`, ye(this, We, s));
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
      ye(this, zt, t);
    }
    return t;
  }
  get $emitter() {
    const t = xt(this, zt);
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
    const t = xt(this, zt);
    t && (p(t).removeData(this.constructor.KEY).remove(), ye(this, zt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    xt(this, Ot) && clearTimeout(xt(this, Ot));
    const { modalElement: t, options: e } = this, s = p(t), { type: i, loadTimeout: r, loadingClass: o = uo, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = Ru[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", a).addClass(o), r && ye(this, Ot, window.setTimeout(() => {
      ye(this, Ot, 0), Sn(this, xn, ai).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return this._destroyed ? !1 : (c === !1 ? await Sn(this, xn, ai).call(this, this.options.failedTip) : c && typeof c == "object" && await Sn(this, Fn, fr).call(this, c), xt(this, Ot) && (clearTimeout(xt(this, Ot)), ye(this, Ot, 0)), this.layout(), await Mn(100), s.removeClass(o), !0);
  }
  static isValid(t) {
    return !p.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ref: i, ...r } = t, o = { show: !0, ...r };
      !o.type && o.url && (o.type = "ajax"), !o.type && t.id && (o.type = "static"), o.key === void 0 && (o.key = o.id);
      const a = re.ensure(s, o);
      i && (i.current = a);
      const l = `${re.NAMESPACE}.open${ut()}`;
      a.on(`hidden${l}`, () => {
        a.off(l), e(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let f = typeof s == "object" && s.html ? /* @__PURE__ */ g("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ g("div", { children: s });
    i ? f = /* @__PURE__ */ g("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ g("div", { className: `icon ${i} ${r}` }),
      f
    ] }) : f = /* @__PURE__ */ g("div", { className: k("modal-body", h.bodyClass), children: f });
    const d = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = j.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && d.push(v);
    }, []);
    let _;
    const m = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: v, event: y }) => {
        const b = re.query(y.target);
        if (!b || b.key !== c)
          return;
        _ = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await re.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: f,
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
    return await re.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        s == null || s(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
  static async prompt(t) {
    typeof t == "string" && (t = { message: t });
    const { defaultValue: e = "", placeholder: s, onResult: i, onShown: r, message: o, content: a, bodyClass: l, custom: c, ...u } = t;
    let h = e, f = !1;
    const d = G();
    return await re.confirm({
      ...u,
      custom: { closeBtn: !1, ...c },
      message: o,
      ref: d,
      content: /* @__PURE__ */ g("div", { className: k("modal-body", l), children: [
        /* @__PURE__ */ g(L, { content: o }),
        /* @__PURE__ */ g("input", { type: "text", className: "modal-prompt-input form-control mt-3", autoFocus: !0, placeholder: s, defaultValue: e, onChange: (m) => {
          h = m.target.value;
        }, onKeyDown: (m) => {
          var v, y;
          m.key === "Enter" ? (f = !0, m.preventDefault(), (v = d.current) == null || v.hide()) : m.key === "Escape" && ((y = d.current) == null || y.hide());
        } }),
        a
      ] })
    }) || f ? h : null;
  }
};
zt = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
Ot = /* @__PURE__ */ new WeakMap();
Fn = /* @__PURE__ */ new WeakSet();
fr = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return p(this.modalElement).html(n[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, we(
      /* @__PURE__ */ g(Qa, { ...n }),
      this.modalElement
    );
  });
};
xn = /* @__PURE__ */ new WeakSet();
ai = function(n) {
  if (n)
    return Sn(this, Fn, fr).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: n })
    });
};
el.DEFAULT = {
  ...Qe.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let Wn = el;
Wn.register();
class qe extends vt {
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
      e = Qe.ensure(s, t);
    } else
      e = Wn.ensure(this.container, t);
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
qe.NAME = "ModalTrigger";
qe.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(n) {
    return qe.get(n);
  },
  onCreate(n, t, e) {
    return new qe(n, e);
  }
};
qe.register();
const Du = {
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
let Qt = class extends Q {
  constructor(t) {
    if (t.totalFileSize)
      if (t.maxFileSize) {
        const { maxFileSize: e, totalFileSize: s } = t, i = typeof e == "number" ? e : _e(e), r = typeof s == "number" ? s : _e(s);
        t.maxFileSize = i > r ? s : e;
      } else
        t.maxFileSize = t.totalFileSize;
    t.maxFileSize || (t.maxFileSize = "100MB"), super(t), this._input = G(), this._file = G(), this._id = `file-selector-input-${ut()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: s } = this.state;
      this.cancelRenameFile(), !(!e || !s) && this.renameFile(e, s);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const s = e.target;
      s.files && (this.selectFiles(s.files), this.setState({ inputKey: ut() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const s = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      s.length && (this.selectFiles(s), this.setState({ inputKey: ut() }));
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
      size: Lt(this.size, 1),
      maxFileSize: Lt(typeof t == "string" ? _e(t) : t, 1),
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
      size: Lt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: s, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? _e(e) : e;
    return t.size <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Lt(t.size, 1),
      maxFileSize: e
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: s, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? _e(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((s == null ? void 0 : s.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Lt(t.size, 1),
      totalSize: Lt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: s, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((s == null ? void 0 : s.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Lt(t.size, 1),
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
        size: Lt(e.size, 1)
      })), !await Wn.confirm(o))
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
    s.files = e, t && p(s).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = V(t.message, { ...this.info, ...e })), Wn.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? V(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ g("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
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
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ g("div", { className: "file-selector-tip", children: /* @__PURE__ */ g(L, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ g(Z, { ...o, ...c, className: k(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ g("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ g(Z, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: s, onChange: i } = t;
    return /* @__PURE__ */ g("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: s, style: "display:none", onChange: i }, "form");
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
      subtitle: Lt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ g(Ne, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: s = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ g("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ g("div", { className: "form-control size-sm", children: s }),
        /* @__PURE__ */ g("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = O({
        className: `${i ? "file-selector-grid-item" : "file-selector-item"} is-renaming`,
        multiline: !1,
        avatar: this._getAvatar(t),
        "z-id": t.id,
        contentClass: "file-selector-rename",
        content: i ? r : [
          r,
          /* @__PURE__ */ g(Z, { icon: "check", text: this.i18n("confirm"), type: "primary-pale", size: "sm", onClick: this.stopRenameFile }),
          /* @__PURE__ */ g(Z, { icon: "close", text: this.i18n("cancel"), type: "gray-pale", size: "sm", onClick: this.cancelRenameFile })
        ]
      }, e);
    }
    return /* @__PURE__ */ g(Ne, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: s } = this.state;
    return /* @__PURE__ */ g("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === s ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: s = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": Gt(s),
      "--file-selector-grid-height": Gt(i),
      "--file-selector-grid-gap": Gt(r)
    }, { files: a, renaming: l } = this.state;
    return /* @__PURE__ */ g("div", { className: "file-selector-grid", style: o, onClick: this._handleClick, ...e, children: [
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
    const r = typeof s == "string" ? _e(s) : s;
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
Qt.defaultProps = {
  mode: "button",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Qt.i18n = Du;
Qt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let pr = class extends Qt {
};
pr.defaultProps = {
  ...Qt.defaultProps,
  mode: "grid",
  accept: Qt.imageAccepts
};
const Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Qt,
  ImageSelector: pr
}, Symbol.toStringTag, { value: "Module" }));
class gr extends U {
}
gr.NAME = "FileSelector";
gr.Component = Qt;
gr.replace = !0;
class mr extends U {
}
mr.NAME = "ImageSelector";
mr.Component = pr;
mr.replace = !0;
it(Lu);
const _r = class nl extends cn {
  _getClassName(t) {
    const { type: e, stacked: s } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", s ? "nav-stacked" : ""];
  }
  static render(t, e, s, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), s && (r = O(s, r)), /* @__PURE__ */ wt(nl, { ...r });
  }
};
_r.NAME = "nav";
_r.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let sl = _r;
const zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: sl
}, Symbol.toStringTag, { value: "Module" }));
class il extends U {
}
il.NAME = "Nav";
il.Component = sl;
it(zu);
function tn(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function rl({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = tn(r, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : V(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : V(o, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === r.page), /* @__PURE__ */ g(Z, { type: e, "z-go-to-page": l.page, ...a });
}
function ol({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = tn(i, e);
  return s = typeof s == "function" ? s(a) : V(s, a), /* @__PURE__ */ g(Q, { ...o, children: [
    r,
    s
  ] });
}
function Ou({
  type: n,
  btnType: t,
  count: e = 12,
  pagerInfo: s,
  linkCreator: i,
  ...r
}) {
  if (!s.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ g(Z, { type: t, ...o })), l = (u, h) => {
    const f = [];
    for (let d = u; d <= h; d++) {
      o.text = d, delete o.icon, o.disabled = !1;
      const _ = tn(s, d);
      i && (o.url = typeof i == "function" ? i(_) : V(i, _)), f.push(/* @__PURE__ */ g(Z, { type: t, ...o }));
    }
    return f;
  };
  let c = [];
  return c = [...l(1, 1)], s.pageTotal <= 1 || (s.pageTotal <= e ? c = [...c, ...l(2, s.pageTotal)] : s.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(s.pageTotal, s.pageTotal)] : s.page > s.pageTotal - e + 3 ? c = [...c, a(), ...l(s.pageTotal - e + 3, s.pageTotal)] : c = [...c, a(), ...l(s.page - Math.ceil((e - 4) / 2), s.page + Math.floor((e - 4) / 2)), a(), ...l(s.pageTotal, s.pageTotal)]), c;
}
let Hu = class extends F {
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
      contentClass: f,
      arrowStyle: d,
      onlyInner: _,
      footer: m,
      footerClass: v
    } = t;
    let y = /* @__PURE__ */ g(L, { content: r }, "content");
    (f || i) && (y = /* @__PURE__ */ g("div", { className: f, children: y }, "content"));
    let b = /* @__PURE__ */ g(L, { content: m }, "footer");
    (v || i) && (b = /* @__PURE__ */ g("div", { className: v, children: b }, "footer"));
    const w = [], C = l ? /* @__PURE__ */ g("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return i ? w.push(/* @__PURE__ */ g("div", { className: u, children: [
      i ? /* @__PURE__ */ g(L, { className: h, content: i }) : null,
      C
    ] }, "heading")) : w.push(C), w.push(y, b), c && w.push(/* @__PURE__ */ g("div", { className: typeof c == "string" ? c : "arrow", style: d }, "arrow")), _ ? w : /* @__PURE__ */ g("div", { id: e, className: k("popover", a, { popup: s, "has-heading": i }), style: o, children: w });
  }
};
class yr extends U {
}
yr.NAME = "PopoverPanel";
yr.Component = Hu;
const fo = "show", po = "in", He = class al extends vt {
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
          const u = o.attr(`zui-toggle-${this.constructor.ZUI}`);
          u && (c = p.extend(c, ke(u))), this.setOptions(c);
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
    const o = p(r), { animation: a, onShow: l, onShown: c, trigger: u, elementShowClass: h } = this.options, { SHOWN_POPOVERS: f } = this.constructor;
    o.addClass(fo), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = al.Z_INDEX++, this._shown = !0, this.render(), f.set(this.gid, this), l == null || l.call(this), this.emit("show"), i && f.forEach((_) => {
      _ !== this && _.hide();
    });
    const { namespace: d } = this;
    u === "hover" && (this._clearDelayHide(), o.off(d).on(`pointerenter${d}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${d}`, () => {
      this.delayHide();
    })), this._virtual || (o.attr("zui-commands-proxy", "").data("zui.commandProxy", this._triggerElement), h && p(this._triggerElement).addClass(h)), this._resetTimer(() => {
      o.addClass(po), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: s, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a, elementShowClass: l } = this.options, c = p(this._targetElement), { SHOWN_POPOVERS: u } = this.constructor;
    if (this._shown = !1, u.delete(this.gid), i == null || i.call(this), this.emit("hide"), c.removeClass(po), o === "hover" && (this._clearDelayHide(), c.off(this.namespace)), !this._virtual) {
      const h = p(this._triggerElement);
      h.removeAttr("zui-commands-proxy").removeData("zui.commandProxy"), l && h.removeClass(l).removeAttr("data-pop-placement");
    }
    a && u.forEach((h) => {
      h !== this && h.zIndex > this.zIndex && h.hide();
    }), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), c.removeClass(fo), (e || t) && this._resetTimer(() => {
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
    s || (this._layoutWatcher = Va(t, e, () => {
      if (this.destroyed || !this._shown)
        return;
      const { animation: i, name: r = "popover", minWidth: o, minHeight: a, maxWidth: l, maxHeight: c, limitInScreen: u, onLayout: h } = this.options;
      if (!this._virtual) {
        const f = {
          minWidth: Gt(o),
          minHeight: Gt(a),
          maxWidth: Gt(l),
          maxHeight: Gt(c)
        }, { width: d, height: _ } = this.options;
        d && (f.width = typeof d == "function" ? d() : d === "100%" ? p(t).outerWidth() : d), _ && (f.height = typeof _ == "function" ? _() : _), Object.keys(f).length && p(e).css(f);
      }
      ar(...this._getLayoutOptions()).then(({ x: f, y: d, middlewareData: _, placement: m, strategy: v }) => {
        if (t instanceof HTMLElement && ne(t)) {
          this.hide(!0);
          return;
        }
        const y = {
          position: v,
          left: f,
          top: d
        }, b = p(e).css(y);
        u && b.css({
          top: Math.max(0, Math.min(window.innerHeight - b.outerHeight(), d)),
          left: Math.max(0, Math.min(window.innerWidth - b.outerWidth(), f))
        });
        const w = m.split("-")[0], C = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[w], S = _.arrow;
        S && b.attr("data-pop-placement", w).find(".arrow").css({
          left: S.x,
          top: S.y
        }).attr("class", `arrow ${r}-arrow arrow-${C}`), i === !0 && b.attr("class", `${b.attr("class").split(" ").filter(($) => $ !== "fade" && !$.startsWith("fade-from")).join(" ")} fade-from-${C}`), this._virtual || p(this._triggerElement).attr("data-pop-placement", w), h && h.call(this, {
          target: e,
          trigger: t,
          popSide: w,
          arrowSide: C,
          x: f,
          y: d,
          placement: m,
          strategy: v
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
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(s) : (r = new yr(e, s), r.on("inited", () => this.layout())), this._panel = r;
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0, f = () => typeof a == "function" ? a : typeof a == "object" ? {
      mainAxis: (a.mainAxis || 0) + h,
      ...a
    } : (a || 0) + h;
    return [t, e, {
      placement: s,
      strategy: c,
      middleware: [
        i ? or() : null,
        o ? rr(typeof o == "object" ? o : void 0) : null,
        a || h ? ir(f()) : null,
        l ? ku({ element: u }) : null,
        r ? Ua({
          apply({ availableWidth: d, availableHeight: _, placement: m }) {
            p(e).css({ maxHeight: _ - (["top", "bottom"].includes(m.split("-")[0]) ? h : 0) - 2, maxWidth: d - 2 });
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
      arrow: h,
      footer: f,
      footerClass: d = `${t}-footer`
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
      closeBtn: u,
      arrow: h ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof h == "number" ? h : 5}px` },
      onlyInner: !0,
      footer: f,
      footerClass: d
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
He.NAME = "Popover";
He.Z_INDEX = 1700;
He.MULTI_INSTANCE = !0;
He.DEFAULT = {
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
He.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let At = He;
At.toggle = {
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
At.register();
p(() => {
  p(document).on(`click.${At.NAMESPACE}`, (n) => {
    const { SHOWN_POPOVERS: t } = At;
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
Object.assign(window, { Popover: At });
class ce extends At {
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
      content: wt(ws, this._getMenuOptions())
    } : t;
  }
}
ce.NAME = "Dropdown";
ce.DEFAULT = {
  ...At.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
ce.toggle = {
  ...At.toggle,
  getOptions(n, t, e) {
    return t = At.toggle.getOptions.call(this, n, t, e), !t.target && !t.items && !t.menu && (t.target = p(n).next(".dropdown-menu")), t;
  }
};
ce.register();
class fn extends Z {
  constructor() {
    super(...arguments), this._ref = G();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: s, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = ce.get(this.triggerElement), a = {
      items: s,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...p(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new ce(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = ce.get(this.triggerElement)) == null || t.destroy();
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
fn.defaultProps = {
  caret: !0
};
Object.assign(kt.ItemComponents, { dropdown: fn });
Object.assign($t.ItemComponents, { dropdown: fn });
class ws extends Ct {
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
    var u;
    if (this.props.tree || this.isRoot)
      return;
    const t = (u = this.element) == null ? void 0 : u.parentElement, e = p(t);
    t && this._searchFocused && this._position && e.css(this._position);
    const r = e.parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    if (!t || !r)
      return;
    let { maxHeight: o } = this.props;
    const { flip: a, shift: l, offset: c } = this.props;
    ar(r, t, {
      placement: this.props.placement,
      middleware: [
        a ? or() : null,
        l ? rr(typeof l == "object" ? l : void 0) : null,
        ir(c),
        Ua({
          apply({ availableWidth: h, availableHeight: f }) {
            if (o) {
              const [d, _] = Hi(o);
              o = Math.min(_ === "%" ? d * window.innerHeight : d, f - 2);
            } else
              o = f;
            e.css({ maxHeight: o, maxWidth: h - 2 });
          }
        })
      ]
    }).then(({ x: h, y: f }) => {
      e.css({
        left: h,
        top: f
      }), this._position = { left: h, top: f, width: t.offsetWidth, height: t.offsetHeight };
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
      return /* @__PURE__ */ g("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ g("span", { className: "caret-right" }) });
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
ws.defaultProps = {
  ...Ct.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1,
  nestedSearch: !1,
  flip: !0,
  shift: !0,
  offset: 1
};
ws.inheritNestedProps = [...Ct.inheritNestedProps, "container", "tree"];
const Fu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DropdownButton: fn,
  DropdownMenu: ws
}, Symbol.toStringTag, { value: "Module" }));
function Wu({
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
  i.items = s.map((u) => {
    const h = { ...t, recPerPage: u };
    return {
      ...o,
      key: u,
      text: `${u}`,
      active: u === t.recPerPage,
      url: e ? typeof e == "function" ? e(h) : V(e, h) : void 0,
      "z-change-page-size": u
    };
  });
  const { text: l = "" } = a;
  return a.text = typeof l == "function" ? l(t) : V(l, t), i.menu = { ...r, ...i.menu, className: k((c = i.menu) == null ? void 0 : c.className, "pager-size-menu") }, /* @__PURE__ */ g(fn, { dropdown: i, ...a });
}
function ll({
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
  const f = (m) => {
    var v;
    h = Number((v = m.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, d = (m) => {
    if (!(m != null && m.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = tn(i, h);
    a && !a({ info: v, event: m }) || (m.target.href = u.url = typeof l == "function" ? l(v) : V(l, v));
  }, _ = tn(i, t || 0);
  return u.url = typeof l == "function" ? l(_) : V(l, _), /* @__PURE__ */ g("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: f }),
    /* @__PURE__ */ g(Z, { type: s, ...u, onClick: d })
  ] });
}
const Cs = class li extends $t {
  constructor() {
    super(...arguments), this._pagerChanges = ls({}), this._changedPager = Ca(() => li.format({
      ...this.props,
      ...this._pagerChanges.value
    })), this._changeEffect = cs(() => {
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
    return this._pagerInfo = t.useState ? this._changedPager.value : li.format(t), super._beforeRender(t);
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
Cs.NAME = "pager";
Cs.ItemComponents = {
  ...$t.ItemComponents,
  info: ol,
  link: rl,
  nav: Ou,
  "size-menu": Wu,
  goto: ll
};
Cs.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let vr = Cs;
class cl extends U {
}
cl.NAME = "Pager";
cl.Component = vr;
const ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: vr,
  PagerGoto: ll,
  PagerInfoItem: ol,
  PagerLink: rl
}, Symbol.toStringTag, { value: "Module" }));
it(ju);
class br extends U {
}
br.NAME = "Pick";
br.Component = St;
br.replace = !0;
class wr extends F {
  constructor(t) {
    super(t), this._searchInput = G(), this._measure = G(), this._changeTimer = 0, this._handleChange = (e) => {
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
  clear() {
    var t, e;
    (e = (t = this.props).onClear) == null || e.call(t), this.setState({ search: "" }, () => this.focus());
  }
  componentDidMount() {
    this.focus();
    const { hotkeys: t } = this.props;
    if (t) {
      const e = Qo(t, {
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
      e && (this._hotkeysScope = `PickerSearch_${ut()}`, p(this._searchInput.current).hotkeys(e, {
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
        const i = p(s).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && p(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
  }
  render(t, e) {
    const { placeholder: s, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ g("span", { className: "close" }) }) : a = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
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
class hl extends Ji {
  constructor() {
    super(...arguments), this._search = G(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: s } } = this.props, i = p(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && s.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ g("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ g("span", { className: "text", children: /* @__PURE__ */ g(L, { content: e }) }),
        this.props.disabled || this.props.readonly ? null : /* @__PURE__ */ g("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ g("span", { className: "close" }) })
      ] }, t.value);
    };
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
    return /* @__PURE__ */ g(
      wr,
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
    const { state: { selections: e = [], open: s, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c, caretClass: u } = this.props, h = s && r;
    let f;
    const d = !h && !e.length;
    return a && (!d || o === void 0) ? (typeof a == "function" ? f = a.call(this, l, e) : typeof a == "string" && (f = V(a, { value: i, values: l, count: l.length })), f = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: f }, "selections")) : d ? f = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : f = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      h ? this._renderSearch(t) : null
    ] }, "selections"), [
      f,
      c,
      /* @__PURE__ */ g("span", { class: k("caret", u) }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: s = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        p(`#${o}`).val(s);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ g("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ g("option", { value: u, children: u }, u)) });
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
      this._skipTriggerChange !== s.value && a.trigger("change", Ra), this._skipTriggerChange = !1;
    }
  }
}
class ul extends Ji {
  constructor() {
    super(...arguments), this._search = G(), this._handleDeselectClick = (t) => {
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
    return k(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: s } = t;
    return /* @__PURE__ */ g(
      wr,
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
    const { children: e, state: { selections: s = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h, caretClass: f } = t, [d] = s, _ = r && a;
    let m;
    if (_)
      m = this._renderSearch(t);
    else if (d || o === void 0 && h) {
      const { text: b } = d || { text: "", value: "" };
      typeof h == "function" ? m = h.call(this, i, s) : typeof h == "string" ? m = V(h, d) : m = /* @__PURE__ */ g(L, { content: b }), m = /* @__PURE__ */ g("span", { className: "picker-single-selection", title: typeof b == "string" ? b : void 0, children: m }, "main");
    } else
      m = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const v = u && !_ ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null, y = _ ? null : /* @__PURE__ */ g("span", { className: k("caret flex-none", f) }, "caret");
    return [
      m,
      e,
      v,
      y
    ];
  }
}
class pn extends yt {
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
pn.NAME = "tree";
pn.defaultProps = {
  ...yt.defaultProps,
  indent: 12
};
pn.defaultItemProps = {
  ...yt.defaultItemProps,
  innerComponent: "div"
};
pn.inheritNestedProps = [...yt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class Ss extends Ct {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, s) {
    return pn.getTreeItem(t, super._getItem(t, e, s));
  }
}
Ss.NAME = "tree";
Ss.inheritNestedProps = [...Ct.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
Ss.ItemComponents = {
  ...Ct.ItemComponents,
  item: [Ne, { innerComponent: "div" }]
};
function dl(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && dl(s.items, e), typeof s.value == "string" && e.set(s.value, s), e), t || /* @__PURE__ */ new Map());
}
class fl extends Ka {
  constructor() {
    super(...arguments), this._menu = G(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const s = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, f) => {
        const d = this._getItem(h, f);
        return d && (d.selected ? o = !0 : r = !1, u.push(d)), u;
      }, []));
      const a = r || s.has(t.value);
      t = {
        selected: a,
        hint: typeof t.text == "string" ? t.text : void 0,
        ...t,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: k(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
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
          const h = [...dl(t.items).values()].filter((f) => !f.items && !this._disabledSet.has(f.value)).map((f) => f.value);
          p(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
        } else
          o(s);
      else
        a(s), l(!1, { search: "" });
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
    }), setTimeout(() => {
      var s;
      p((s = this.menu) == null ? void 0 : s.element).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
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
    const { menu: e, tree: s, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c, exceedLimitHint: u } = t, { items: h, search: f } = i;
    return O({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      limit: c,
      items: h,
      defaultNestedShow: !0,
      activeOnHover: !0,
      search: f,
      exceedLimitHint: u,
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
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const s = this._getMenuProps(t);
    return this._hasCheckbox = !!s.checkbox, this._getItemCallback = s.getItem, this._renderItemCallback = s.beforeRenderItem, s.getItem = this._getItem, s.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ g(Ss, { ...s }) : /* @__PURE__ */ g(Ct, { ...s });
  }
}
function oe(n, t) {
  return n.reduce((e, s) => (Array.isArray(s.items) && oe(s.items, e), e.set(s.value === void 0 ? "" : String(s.value), s), e), t || /* @__PURE__ */ new Map());
}
let xs = class extends St {
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
    }, this.isSelected = (e) => this.valueList.includes(e), this.setValue = this.setValue.bind(this), this.isEmptyValue = this.isEmptyValue.bind(this);
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  getDefaultState(t) {
    const { items: e, valueSplitter: s = ",", emptyValue: i = "" } = t || this.props, r = {
      ...super.getDefaultState(t),
      loading: !1,
      search: "",
      items: e,
      selections: []
    };
    if (this._emptyValueSet = new Set(typeof i == "string" ? i.split(s) : []), Array.isArray(e) && e.length) {
      const { limitValueInList: o, required: a, multiple: l } = this.props;
      if (e.forEach((c) => {
        typeof c.value == "number" && (c.value = String(c.value));
      }), o) {
        const c = oe(e);
        r.value = this.formatValueList(r.value, s).filter((u) => c.has(u)).join(s), a && !l && !this.formatValueList(r.value, s).length && (r.value = e[0].value ?? "");
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
    const s = [...oe(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(s);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = oe(t), s = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || s.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: s } = this.props, { search: i = "" } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (await Mn(s || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = { url: o }), typeof o == "object" && o.url && (o = {
        ...o,
        url: V(o.url, { search: encodeURIComponent(i) })
      }), r = await ns(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const r = i.items || s.items, o = /* @__PURE__ */ new Map();
        Array.isArray(s.items) && s.items !== i.items && oe(s.items, o), oe(r, o), i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
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
      noMatchHint: e.loading ? j.getLang("loadingHint") : t.searchEmptyHint ?? j.getLang("searchEmptyHint"),
      exceedLimitHint: t.exceedLimitHint ?? j.getLang("exceedLimitHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? hl : ul);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: j.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: j.getLang("cancelSelect")
    }]), $t.render(t, [], { size: "sm", relativeTarget: this, getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
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
        const a = oe(Array.isArray(r) ? r : this.state.items);
        s = s.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(s);
    return super.setValue(i, e);
  }
};
xs.defaultProps = {
  ...St.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
xs.Pop = fl;
const Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Picker: xs,
  PickerMenu: fl,
  PickerMultiSelect: hl,
  PickerSearch: wr,
  PickerSingleSelect: ul
}, Symbol.toStringTag, { value: "Module" }));
class Cr extends U {
}
Cr.NAME = "Picker";
Cr.Component = xs;
Cr.register();
j.addLang({
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
it(Bu);
class Sr extends U {
}
Sr.NAME = "SearchBox";
Sr.Component = ps;
Sr.register();
it(Fh);
class pl extends U {
}
pl.NAME = "Toolbar";
pl.Component = $t;
it(Dh);
class xr extends At {
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
xr.NAME = "Tooltip";
xr.DEFAULT = {
  ...At.DEFAULT,
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
xr.register();
it(Fu);
var Ut, Kt;
class go extends F {
  constructor(e) {
    super(e);
    dt(this, Ut, void 0);
    dt(this, Kt, void 0);
    bt(this, Ut, 0), bt(this, Kt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, r = s.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (ht(this, Ut) && cancelAnimationFrame(ht(this, Ut)), bt(this, Ut, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), bt(this, Ut, 0);
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
    e && (bt(this, Kt, typeof e == "string" ? document : e.current), ht(this, Kt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), ht(this, Kt) && ht(this, Kt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: h, scrollPos: f } = this, { dragStart: d } = this.state, _ = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, m = {};
    return s === "horz" ? (_.height = i, _.width = e, m.width = this.barSize, m.left = Math.round(Math.min(h, f) * (e - m.width) / h)) : (_.width = i, _.height = e, m.height = this.barSize, m.top = Math.round(Math.min(h, f) * (e - m.height) / h)), /* @__PURE__ */ g(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": d
        }),
        style: _,
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
Ut = new WeakMap(), Kt = new WeakMap();
const jn = /* @__PURE__ */ new Map(), Bn = [];
function gl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && jn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  jn.set(e, n), t != null && t.buildIn && !Bn.includes(e) && Bn.push(e);
}
function rt(n, t) {
  gl(n, t);
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
function ml(n) {
  return jn.delete(n);
}
function Vu(n) {
  if (typeof n == "string") {
    const t = jn.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function _l(n, t, e) {
  return t.forEach((s) => {
    var r;
    if (!s)
      return;
    const i = Vu(s);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && _l(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function Uu(n = [], t = !0) {
  if (t && Bn.length && n.unshift(...Bn), !(n != null && n.length))
    return [];
  const e = _l([], n, /* @__PURE__ */ new Set()), s = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && s.push(o), r;
  }, /* @__PURE__ */ new Map());
  return s.length && (s.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
}
function yl() {
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
function Ku(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function mo(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function Hs(n, t = !1, e = 0) {
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
function _o(n) {
  return n ? n === "left" ? "left" : "right" : "center";
}
function qu(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (C) => (typeof C == "function" && (C = C.call(n)), C = mo(C, 0), C < 1 && (C = Math.round(C * s)), C), u = {
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
  }, f = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, d = {
    left: h,
    center: u,
    right: f
  }, _ = [], m = {};
  let v = !1;
  const y = [], b = {};
  if (e.forEach((C) => {
    const { colTypes: S, onAddCol: $ } = C;
    S && Object.entries(S).forEach(([E, N]) => {
      b[E] || (b[E] = []), b[E].push(N);
    }), $ && y.push($);
  }), t.cols.forEach((C, S) => {
    if (C.hidden)
      return;
    const { type: $ = "", name: E } = C, N = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...C,
      type: $
    }, A = {
      name: E,
      type: $,
      setting: N,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: S,
      side: _o(N.fixed),
      sideIndex: 0,
      order: N.order,
      border: N.border
    }, I = b[$];
    I && I.forEach((K) => {
      const B = typeof K == "function" ? K.call(n, N) : K;
      B && Object.assign(N, B, C);
    });
    const { flex: T, minWidth: P = r, maxWidth: H = o } = N, R = mo(N.width || i, i);
    A.flex = T === !0 ? 1 : typeof T == "number" ? T : 0, A.width = Ku(R < 1 ? Math.round(R * s) : R, P, H), A.side = _o(N.fixed), y.forEach((K) => K.call(n, A)), _.push(A), m[A.name] = A;
    const W = d[A.side];
    W.list.push(A), W.totalWidth += A.width, W.width = W.totalWidth, A.flex && W.flexList.push(A), typeof A.order == "number" && (v = !0);
  }), v) {
    const C = (S, $) => (S.order ?? S.index) - ($.order ?? $.index);
    _.sort(C), h.list.sort(C), u.list.sort(C), f.list.sort(C);
  }
  Hs(f, !0);
  const w = s - f.width - Math.max(40, r);
  return Hs(h, !0, w), u.widthSetting = s - h.width - f.width, Hs(u), {
    list: _,
    map: m,
    ...d
  };
}
function Gu(n) {
  var B;
  const { col: t, className: e, height: s, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: f, ...d } = n, _ = {
    left: h ?? t.left,
    top: f ?? i.top,
    width: u ?? t.realWidth,
    height: s,
    ...a
  }, { align: m, cellStyle: v, cellClass: y, className: b } = t.setting, w = {
    justifyContent: m ? m === "left" ? "start" : m === "right" ? "end" : m : void 0,
    ...v,
    ...o
  }, { name: C, border: S } = t, $ = ["dtable-cell", c, e, b, {
    "has-border-left": S === !0 || S === "left",
    "has-border-right": S === !0 || S === "right"
  }], E = ["dtable-cell-content", y], N = (B = i.data) == null ? void 0 : B[C], A = [l ?? N ?? ""], I = r ? r(A, { row: i, col: t, value: N }, n, wt) : A, T = [], P = [], H = {}, R = {};
  let W = "div";
  I == null || I.forEach((M) => {
    if (typeof M == "object" && M && !ot(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const ct = M.outer ? T : P;
      M.html ? ct.push(/* @__PURE__ */ g("div", { className: k("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? _ : w, M.style), M.className && (M.outer ? $ : E).push(M.className), M.children && ct.push(M.children), M.attrs && Object.assign(M.outer ? H : R, M.attrs)), M.tagName && !M.outer && (W = M.tagName);
    } else
      (typeof M != "object" || ot(M)) && P.push(M);
  });
  const K = W;
  return /* @__PURE__ */ g(
    "div",
    {
      className: k($),
      style: _,
      "data-col": C,
      "data-row": i.id,
      "data-type": t.type || null,
      ...d,
      ...H,
      children: [
        P.length > 0 && /* @__PURE__ */ g(K, { className: k(E), style: w, ...R, children: P }),
        T
      ]
    }
  );
}
function Fs({
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
  CellComponent: u = Gu,
  cellClass: h,
  onRenderCell: f
}) {
  var v;
  const d = Array.isArray(n) ? n : [n], _ = ((v = d[0]) == null ? void 0 : v.top) ?? 0, m = d.length;
  return /* @__PURE__ */ g(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ g("div", { className: "dtable-cells-container", style: { left: -s, top: -i + _ }, children: d.reduce((y, b, w) => {
        const C = t.length;
        return t.forEach((S, $) => {
          y.push(
            /* @__PURE__ */ g(
              u,
              {
                className: k(
                  `is-${b.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === C - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === m - 1 ? "is-last-row" : "",
                  h
                ),
                col: S,
                row: b,
                top: b.top - _,
                height: e,
                onRenderCell: f
              },
              `${b.index}:${S.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function vl({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  cellClass: u,
  style: h,
  onRenderCell: f,
  children: d
}) {
  let _ = null;
  i.list.length && (_ = /* @__PURE__ */ g(
    Fs,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: f
    },
    "left"
  ));
  let m = null;
  r.list.length && (m = /* @__PURE__ */ g(
    Fs,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: f
    },
    "center"
  ));
  let v = null;
  return o.list.length && (v = /* @__PURE__ */ g(
    Fs,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: f
    },
    "right"
  )), /* @__PURE__ */ g(
    "div",
    {
      className: k("dtable-block", c),
      style: { ...h, top: n, height: t },
      children: [
        _,
        m,
        v,
        d
      ]
    }
  );
}
var bl = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Y = (n, t, e) => (bl(n, t, "read from private field"), e ? e.call(n) : t.get(n)), X = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ft = (n, t, e) => (bl(n, t, "access private method"), e), Vt, je, Be, ci, wl, hi, Cl, ui, Sl, di, xl, kn, fi, ks, Vn, pi, gi, mi, _i, Ve, Tn, Un, kr, Tr, kl, yi, Tl;
let $r = class extends F {
  constructor(t) {
    super(t), X(this, ci), X(this, hi), X(this, ui), X(this, di), X(this, kn), X(this, Ve), X(this, Un), X(this, Tr), X(this, yi), this.ref = G(), this._rafId = 0, this._needRender = !1, this._plugins = [], this._lastUsedPlugins = /* @__PURE__ */ new Map(), this._events = /* @__PURE__ */ new Map(), this._data = {}, this._i18nMaps = [], this._hover = { in: !1 }, this.updateLayout = () => {
      this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        const { element: e } = this;
        e && !ne(e) && this.update({ dirtyType: "layout" }), this._rafId = 0;
      });
    }, X(this, Vt, (e, s) => {
      s = s || e.type;
      const i = this._events.get(s);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), X(this, je, (e) => {
      Y(this, Vt).call(this, e, `window_${e.type}`);
    }), X(this, Be, (e) => {
      Y(this, Vt).call(this, e, `document_${e.type}`);
    }), X(this, ks, (e, s, i, r) => {
      const { row: o, col: a } = s;
      s.value = this.getCellValue(o, a), e[0] = s.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, s, i, r)), this._plugins.forEach((c) => {
        c[l] && (e = c[l].call(this, e, s, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, s, i, r)), e;
    }), X(this, Vn, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), X(this, pi, (e) => {
      var a, l, c;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: r, cellElement: o } = s;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), this._plugins.forEach((u) => {
          var h;
          (h = u.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const u = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
            return;
          for (const h of this._plugins)
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: u, element: o })) === !0)
              return;
        }
      }
    }), X(this, gi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), X(this, mi, (e) => {
      const s = p(e.target).closest(".dtable-cell");
      if (!s.length)
        return ft(this, Ve, Tn).call(this, !1);
      ft(this, Ve, Tn).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), X(this, _i, () => {
      ft(this, Ve, Tn).call(this, !1);
    }), this._id = t.id ?? `dtable-${ut()}`, this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, this._allPlugins = Object.freeze(Uu(t.plugins)), this._allPlugins.forEach((e) => {
      const { methods: s, data: i, state: r } = e;
      s && Object.entries(s).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(this._data, i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ft(this, Un, kr).call(this), this._plugins.forEach((e) => {
      var s;
      (s = e.onCreate) == null || s.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = this._layout) == null ? void 0 : t.options) || this._options || yl();
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
    this._needRender ? this.forceUpdate() : ft(this, kn, fi).call(this), this.on("click", Y(this, pi)), this.on("keydown", Y(this, gi));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", Y(this, mi)), this.on("mouseleave", Y(this, _i)));
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
    ft(this, kn, fi).call(this), this._checkPluginsState(), this._plugins.forEach((t) => {
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
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), Y(this, je)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), Y(this, Be)) : t.removeEventListener(s, Y(this, Vt));
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
    i ? i.push(e) : (this._events.set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), Y(this, je)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), Y(this, Be)) : (r = this.element) == null || r.addEventListener(t, Y(this, Vt)));
  }
  off(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = this._events.get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (this._events.delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), Y(this, je)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), Y(this, Be)) : (o = this.element) == null || o.removeEventListener(t, Y(this, Vt)));
  }
  emitCustomEvent(t, e) {
    Y(this, Vt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
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
    let { scrollLeft: h, scrollTop: f } = t;
    if (u === "up" || u === "down")
      f = i + (u === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (u === "left" || u === "right")
      h = s + (u === "right" ? 1 : -1) * c;
    else if (u === "top")
      f = 0;
    else if (u === "bottom")
      f = r - o;
    else if (u === "begin")
      h = 0;
    else if (u === "end")
      h = l - c;
    else {
      const { offsetLeft: _, offsetTop: m } = t;
      typeof _ == "number" && (h = s + _), typeof m == "number" && (f = i + m);
    }
    const d = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== s && (d.scrollLeft = h)), typeof f == "number" && (f = Math.max(0, Math.min(f, r - o)), f !== i && (d.scrollTop = f)), Object.keys(d).length ? (this.setState(d, () => {
      var _;
      (_ = this.options.onScroll) == null || _.call(this, d), e == null || e.call(this, !0);
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
    return j(this._i18nMaps, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    let t = ft(this, yi, Tl).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h } = this.options, f = { ...h }, d = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l,
      "no-animation": this._noAnimation
    }], _ = [];
    if (t) {
      const m = !t.rows.length;
      if (c) {
        const v = c.call(this, t);
        v && (t = v);
      }
      this._plugins.forEach((v) => {
        var b;
        const y = (b = v.beforeRender) == null ? void 0 : b.call(this, t);
        y && (t = y);
      }), f.width = t.width, f.height = t.height, f["--dtable-row-height"] = `${t.rowHeight}px`, f["--dtable-header-height"] = `${t.headerHeight}px`, d.push(
        t.className,
        m ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && _.push(...t.children), m && u ? (delete f.height, _.push(
        /* @__PURE__ */ g("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ g(L, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (_.push(
        ft(this, ci, wl).call(this, t),
        ft(this, hi, Cl).call(this, t),
        ft(this, ui, Sl).call(this, t)
      ), t.scrollable && _.push(ft(this, di, xl).call(this, t))), this._plugins.forEach((v) => {
        var b;
        const y = (b = v.onRender) == null ? void 0 : b.call(this, t);
        y && (y.style && Object.assign(f, y.style), y.className && d.push(y.className), y.children && _.push(y.children));
      });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        id: this._id,
        className: k(d),
        style: f,
        ref: this.ref,
        tabIndex: -1,
        children: _
      }
    );
  }
};
Vt = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakSet();
wl = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: r } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      vl,
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
        onRenderCell: Y(this, ks),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    Ta,
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
hi = /* @__PURE__ */ new WeakSet();
Cl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ g(
    vl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: Y(this, ks),
      children: l
    },
    "body"
  );
};
ui = /* @__PURE__ */ new WeakSet();
Sl = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    Ta,
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
di = /* @__PURE__ */ new WeakSet();
xl = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = n, { scrollbarSize: h = 12, horzScrollbarPos: f, vertScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      go,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: Y(this, Vn),
        left: s,
        bottom: (f === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: u + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      go,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: Y(this, Vn),
        right: d === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
kn = /* @__PURE__ */ new WeakSet();
fi = function() {
  var n;
  this._needRender = !1, this._plugins.forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (n = this.options.afterRender) == null || n.call(this);
};
ks = /* @__PURE__ */ new WeakMap();
Vn = /* @__PURE__ */ new WeakMap();
pi = /* @__PURE__ */ new WeakMap();
gi = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
_i = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakSet();
Tn = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = p(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = this._hover;
  i.in !== r.in && s.toggleClass("dtable-hover", i.in), i.row !== r.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), this._hover = i;
};
Un = /* @__PURE__ */ new WeakSet();
kr = function() {
  if (this._options)
    return !1;
  const t = { ...yl(), ...this._allPlugins.reduce((e, s) => {
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
Tr = /* @__PURE__ */ new WeakSet();
kl = function() {
  var A, I;
  const { plugins: n } = this;
  let t = this._options;
  const e = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((T) => {
    var H;
    const P = (H = T.beforeLayout) == null ? void 0 : H.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, T.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      this._needRender = !0;
      return;
    }
  }
  const r = qu(this, t, n, i), { data: o, rowKey: a = "id", rowHeight: l = 35, rowConverter: c } = t, u = [], h = (T, P, H) => {
    var K, B;
    const R = H ?? { [a]: T }, W = { data: c ? c.call(this, R, P) : R, id: T, index: u.length, top: 0 };
    if (H || (W.lazy = !0), u.push(W), ((K = t.onAddRow) == null ? void 0 : K.call(this, W, P)) !== !1) {
      for (const M of n)
        if (((B = M.onAddRow) == null ? void 0 : B.call(this, W, P)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      h(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, P) => {
      typeof T == "object" ? h(`${T[a] ?? ""}`, P, T) : h(`${T ?? ""}`, P);
    });
  let f = u;
  const d = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, f, r);
    T && (f = T);
  }
  for (const T of n) {
    const P = (A = T.onAddRows) == null ? void 0 : A.call(this, f, r);
    P && (f = P);
  }
  f.forEach((T, P) => {
    d[T.id] = T, T.index = P, T.top = T.index * l;
  });
  const { header: _, footer: m } = t, v = _ ? t.headerHeight || l : 0, y = m ? t.footerHeight || l : 0;
  let b = t.height, w = 0;
  const C = f.length * l, S = v + y + C;
  if (typeof b == "function" && (b = b.call(this, S)), b === "auto")
    w = S;
  else if (typeof b == "object")
    w = Math.min(b.max, Math.max(b.min, S));
  else if (b === "100%") {
    const { parent: T } = this;
    if (T)
      w = T.clientHeight;
    else {
      w = 0, this._needRender = !0;
      return;
    }
  } else
    w = b;
  const $ = w - v - y, E = {
    options: t,
    allRows: u,
    width: i,
    height: w,
    rows: f,
    rowsMap: d,
    rowHeight: l,
    rowsHeight: $,
    rowsHeightTotal: C,
    header: _,
    footer: m,
    footerGenerators: e,
    headerHeight: v,
    footerHeight: y,
    cols: r
  }, N = (I = t.onLayout) == null ? void 0 : I.call(this, E);
  N && Object.assign(E, N), n.forEach((T) => {
    if (T.onLayout) {
      const P = T.onLayout.call(this, E);
      P && Object.assign(E, P);
    }
  }), this._layout = E;
};
yi = /* @__PURE__ */ new WeakSet();
Tl = function() {
  (ft(this, Un, kr).call(this) || !this._layout) && ft(this, Tr, kl).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = n, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), f = [], { rowDataGetter: d } = this.options;
  for (let _ = c; _ < h; _++) {
    const m = o[_];
    m.lazy && d && (m.data = d([m.id])[0], m.lazy = !1), f.push(m);
  }
  return Object.assign(n, {
    visibleRows: f,
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
$r.addPlugin = gl;
$r.removePlugin = ml;
function $l(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...r } = n, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: V(i, t.row.data), ...s, ...r, ...a, children: e });
}
function Nr(n, t, e) {
  if (n == null)
    return;
  const s = t.row.data;
  return e = e ?? (s == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : V(n, { ...s, 0: e });
}
function Nl(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? s ?? "" : n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), Tt(e, n, s ?? e))) : s ?? e;
}
function El(n, t) {
  const { link: e } = t.col.setting, s = $l(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Al(n, t) {
  const { format: e, digits: s } = t.col.setting;
  let i = n[0];
  return typeof s == "number" && !Number.isNaN(Number(i)) && (i = Number(i), s >= 0 && (i = i.toFixed(s))), e && (i = Nr(e, t, i)), n[0] = i, n;
}
function Ml(n, t) {
  const { map: e, mapSplitter: s = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = n[0];
    typeof r == "string" && s && (r = r.split(s)), typeof e == "function" ? n[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), n[0] = r.map((o) => e[o] ?? o).join(i ?? s));
  }
  return n;
}
function Pl(n, t, e) {
  const s = {};
  return typeof n == "function" ? Object.assign(s, n(e)) : Object.keys(n).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[n[i]];
    r !== void 0 && (s[i] = r);
  }), Object.keys(s).length && t.push({ style: s }), t;
}
function Il(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Nl(s, t, n[0], i), n;
}
function vi(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], r = s === !0 ? i : Nr(s, t, i);
  return n[0] = {
    html: r
  }, n;
}
const Yu = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return vi(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ g(
          gs,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: s || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ g(
          ms,
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
    if (e && (n = Il(n, t, e)), n = Ml(n, t), n = Al(n, t), s ? n = vi(n, t) : n = El(n, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = V(i, t.row.data) : typeof n[0] == "string" && (o = n[0]), n.push({ attrs: { title: o } });
    }
    return r && (n = Pl(r, n, t)), n;
  }
}, Ju = rt(Yu, { buildIn: !0 }), Zu = {
  default: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return s === i ? 0 : s == null ? 1 : String(s).localeCompare(String(i));
  },
  date: (n, t, e) => {
    var r, o;
    const s = q(((r = n.data) == null ? void 0 : r[e.name]) ?? 0), i = q(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return s.getTime() - i.getTime();
  },
  number: (n, t, e) => {
    var r, o;
    const s = (r = n.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(s) - Number.parseFloat(i);
  }
}, Xu = {
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
      ...Zu,
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
    const o = ((l = s == null ? void 0 : s.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${o}` });
    return n[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      n[0],
      a
    ] }), n.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), n;
  }
}, Qu = rt(Xu, { buildIn: !0 }), td = {
  html: { component: ue }
}, ed = {
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
        component: ue,
        props: { html: V(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(td[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((f) => {
        if (f) {
          const { props: d } = f;
          d && p.extend(u, typeof d == "function" ? d.call(this, t) : d), l = f.component || l;
        }
      }, { props: {} });
      const h = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ g(h, { ...u }) };
    }), n;
  }
}, nd = rt(ed);
function sd(n, t) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const e = this.state.checkedRows, s = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], s[c] = u);
  };
  if (n === void 0 ? (t === void 0 && (t = !Rl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
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
function id(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Rl() {
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
function rd() {
  var t;
  const n = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => n.has(e));
}
function od(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function yo(n, t, e = !1, s = void 0) {
  return /* @__PURE__ */ g(fs, { className: "dtable-checkbox", checked: n, disabled: e, label: s });
}
const vo = 'input[type="checkbox"],.dtable-checkbox', ad = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: yo
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
    toggleCheckRows: sd,
    isRowChecked: id,
    isAllRowChecked: Rl,
    getChecks: rd,
    toggleCheckable: od
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: yo(n, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [/* @__PURE__ */ g(L, { className: "dtable-check-info", content: s.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { className: "dtable-check-info", children: r.join(", ") })
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
    const e = t.closest(vo);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = p(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(vo).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, ld = rt(ad), cd = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (n) => !!n.store,
  data() {
    return { store: new hn(`DTable:${this.id}`) };
  }
}, hd = rt(cd);
var Dl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Dl || {});
function Kn(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[n];
  let s = !1, { parent: i } = t;
  for (; i; ) {
    const r = Kn.call(this, i);
    if (r.state !== "expanded") {
      s = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = s ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Kn.call(this, t.parent).level + 1 : 0, t;
}
function ud(n) {
  return n !== void 0 ? Kn.call(this, n) : this.data.nestedMap;
}
function dd(n, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Ll.call(this)), t) {
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
function Ll() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function zl(n, t = 1, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const r of e) {
    const o = n.get(r);
    o && (o.level === s && (o.order = t++), (i = o.children) != null && i.length && (t = zl(n, t, o.children, s + 1)));
  }
  return t;
}
function Ol(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    s[r] = e, Ol(n, r, e, s);
  }), i;
}
function Hl(n, t, e, s, i) {
  var a;
  const r = n.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === c;
  })) && (s[t] = e), r.parent && Hl(n, r.parent, e, s, i);
}
const bn = "dtable-nested-toggle", fd = {
  name: "nested",
  plugins: [hd],
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
        const o = Ol(this, i, r, s);
        o != null && o.parent && Hl(this, o.parent, r, s, e);
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
    getNestedInfo: ud,
    toggleRow: dd,
    isAllCollapsed: Ll,
    getNestedRowInfo: Kn
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
      var c, u;
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
      if (o.parent = l === "0" ? void 0 : l, (u = r.data) != null && u[this.options.asParentKey ?? "asParent"] && (o.children = []), t.set(r.id, o), l) {
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
    }), zl(s), n.sort((r, o) => {
      const a = s.get(r.id), l = s.get(o.id);
      return ((a == null ? void 0 : a.order) ?? i + r.index) - ((l == null ? void 0 : l.order) ?? i + o.index);
    }), n;
  },
  onRenderCell(n, t) {
    var c;
    const { row: e, col: s } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = s.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ g("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: V(a, r) }) : h = /* @__PURE__ */ g(L, { className: "dtable-child-label", content: a, generatorThis: t }), n.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && n.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, s, r)) ?? /* @__PURE__ */ g("a", { className: `${bn} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: u = o } = s.setting;
      u && (u === !0 && (u = this.options.nestedIndent ?? 12), n.push(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: u * l.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ g("a", { className: `${bn} state`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(`.${bn}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${bn}`)))
      return this.toggleRow(t), !0;
  }
}, pd = rt(fd);
function Ws(n, { row: t, col: e }) {
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
    className: k(r, c.className, "flex-none")
  };
  if (n[0] = /* @__PURE__ */ g(us, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: f } = e.setting, d = typeof f == "function" ? f(e, t) : f;
    n[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...d, children: [
      n[0],
      /* @__PURE__ */ g("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ g("span", { children: u })
    ] }));
  return n;
}
const gd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Ws
    },
    avatarBtn: {
      onRenderCell: Ws
    },
    avatarName: {
      onRenderCell: Ws
    }
  }
}, md = rt(gd, { buildIn: !0 }), _d = {
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
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${a}` });
      n.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = s;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...f } = c;
        n[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: V(h, { ...s, sortType: u }), ...f, children: [
          typeof n[0] != "object" || ot(n[0]) ? n[0] : e.name,
          l
        ] });
      } else
        n.push(l);
    }
    return n;
  }
}, yd = rt(_d, { buildIn: !0 }), js = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.border !== void 0 || t.setting.group === n[e - 1].setting.group || (t.border = "left");
  });
}, vd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    js(t.left.list), js(t.center.list), js(t.right.list);
  }
}, bd = rt(vd);
const wd = {
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
        n.push(/* @__PURE__ */ g("div", { class: "dtable-header-group", style: o, children: e }));
      }
      n.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return n;
  }
}, Cd = rt(wd), Sd = {
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
      l.forEach((f, d) => {
        const { index: _ } = f, m = `C${_}R${h}`;
        if (s.has(m))
          return;
        const v = t.call(this, { row: c, col: f });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - d), b = Math.min(v.rowSpan || 1, i.length - u);
        if (y <= 1 && b <= 1)
          return;
        let w = 0;
        for (let C = 0; C < y; C++) {
          w += l[d + C].realWidth;
          for (let S = 0; S < b; S++) {
            const $ = `C${_ + C}R${h + S}`;
            $ !== m && s.add($);
          }
        }
        e.set(m, {
          colSpan: y,
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
}, xd = rt(Sd), kd = {
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
}, Fl = rt(kd);
function Td() {
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
  const r = ($ = (S = this.ref.current) == null ? void 0 : S.querySelector(".dtable-scroll-center")) == null ? void 0 : $.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = n, { x: u, y: h } = t, { top: f, bottom: d } = i, { left: _, right: m } = r || i;
  let v = 0;
  u < _ - a ? v = -Math.max(o, _ - a - u) : u > m - a && (v = Math.max(o, u - (m - a)));
  let y = 0;
  if (h < f - a ? y = -Math.max(o, f - a - h) : h > d - a && (y = Math.max(o, h - (d - a))), c) {
    const E = new Set((Array.isArray(c) ? c : [c]).reduce((N, A) => (A === "x" ? N.push("left", "right") : A === "y" ? N.push("top", "bottom") : N.push(A), N), []));
    (!E.has("left") && v < 0 || !E.has("right") && v > 0) && (v = 0), (!E.has("top") && y < 0 || !E.has("bottom") && y > 0) && (y = 0);
  }
  const b = {};
  v !== 0 && (b.scrollLeft = this.layout.scrollLeft + l * v), y !== 0 && (b.scrollTop = this.layout.scrollTop + l * y), this.scroll(b);
}
const $d = {
  name: "autoscroll",
  plugins: [Fl],
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
        speed: 0.5,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...n
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(Td.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, Nd = rt($d);
const Ed = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (n) => !!n.sortable,
  plugins: [Fl, Nd],
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
          const c = this.layout.rows.map((d) => d.id), u = [...c], h = o.index, f = a.index;
          if (!(h === f + 1 && l === "after") && !(h === f - 1 && l === "before")) {
            const d = c.splice(h, 1);
            c.splice(f, 0, d[0]), i = {}, r = [], c.forEach((_, m) => {
              i[_] = m, r.push(_);
            }), (u.join() === r.join() || ((s = this.options.onSort) == null ? void 0 : s.call(this, o, a, l, r)) === !1) && (i = void 0, r = void 0);
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
      const { headerHeight: s, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - s - i, h = n.clientX - l.left, f = n.clientY - l.top - s;
      if (h < 0 || h > c || f < 0 || f > u)
        return e.state;
      const d = f + o, _ = r.find((E) => E.top <= d && E.top + a > d);
      if (!_)
        return e.state;
      const m = e.from, v = _.id !== m.id ? _.id : void 0, y = v ? this.getRowInfo(v) : void 0, b = f, w = d < _.top + a / 2 ? "before" : "after";
      return y && (($ = this.options.canSortTo) == null ? void 0 : $.call(this, m, y, w)) !== !1 ? {
        sortingFrom: m,
        sortingPos: b,
        sortingTo: y,
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
      const u = r.id === a.id;
      u && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), s.index > a.index && (u && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : s.index < a.index && (u && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && n.push({
      outer: !0,
      style: l,
      className: c
    }), n;
  }
}, Ad = rt(Ed), Md = {
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
      }), [/* @__PURE__ */ g(vr, { ...n })]) : [];
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
}, Pd = rt(Md), Id = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Dl,
  avatar: md,
  cellspan: xd,
  checkable: ld,
  custom: nd,
  group: bd,
  headerGroup: Cd,
  nested: pd,
  pager: Pd,
  renderDatetime: Nl,
  renderDatetimeCell: Il,
  renderFormat: Nr,
  renderFormatCell: Al,
  renderHtmlCell: vi,
  renderLink: $l,
  renderLinkCell: El,
  renderMapCell: Ml,
  renderStyleMapCell: Pl,
  rich: Ju,
  sort: Qu,
  sortType: yd,
  sortable: Ad
}, Symbol.toStringTag, { value: "Module" }));
class gn extends U {
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
gn.NAME = "DTable";
gn.Component = $r;
gn.definePlugin = rt;
gn.removePlugin = ml;
gn.plugins = Id;
const Rd = "nav", Bs = '[data-toggle="tab"]', Dd = "active";
class qn extends vt {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, s = e.find(Bs);
    let i = t ? p(t).closest(Bs) : s.filter(`.${Dd}`);
    if (!i.length && (i = e.find(Bs).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = e.closest(".tabs"), l = a.length ? a.find(r) : p(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      l.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
qn.NAME = "Tabs";
qn.toggle = {
  name: "tab",
  handler(n, t) {
    const e = p(n), s = e.closest(`.${Rd}`);
    s.length && qn.ensure(s, t).active(e);
  }
};
qn.register();
export {
  p as $,
  Ii as Ajax,
  Pa as Avatar,
  Od as BUILD,
  Hd as BUILD_MODE,
  Ia as BtnGroup,
  Vc as Bus,
  lr as ColorPicker,
  hs as CommonList,
  vt as Component,
  U as ComponentFromReact,
  An as Computed,
  Vi as Custom,
  L as CustomContent,
  kh as CustomContentClass,
  Ta as CustomRender,
  gn as DTable,
  hr as DatePicker,
  ur as DatetimePicker,
  ce as Dropdown,
  gr as FileSelector,
  Q as HElement,
  Ch as HElementSignals,
  ue as HtmlContent,
  nt as Icon,
  mr as ImageSelector,
  Ui as Menu,
  of as Messager,
  Wn as Modal,
  Qe as ModalBase,
  qe as ModalTrigger,
  il as Nav,
  cl as Pager,
  br as Pick,
  Cr as Picker,
  $a as Portal,
  Yi as ProgressCircle,
  F as ReactComponent,
  Sr as SearchBox,
  Ki as SearchMenu,
  st as Signal,
  ih as Sticky,
  Ze as TIME_DAY,
  qn as Tabs,
  cr as TimePicker,
  pl as Toolbar,
  xr as Tooltip,
  zd as VERSION,
  rh as addDate,
  _h as batch,
  Wi as bindCommands,
  ta as bindHotkeys,
  jt as bus,
  p as cash,
  k as classes,
  Wd as clearData,
  Ca as computed,
  _e as convertBytes,
  ia as create,
  q as createDate,
  Ic as createFormData,
  $h as createPortal,
  G as createRef,
  se as deepCall,
  Ai as deepGet,
  Nc as deepGetPath,
  Ud as defineFn,
  Mn as delay,
  Wc as disableScroll,
  Zd as dom,
  jr as downloadFile,
  cs as effect,
  Jc as enterFullscreen,
  ke as evalValue,
  Br as executeCommand,
  lh as executeCommands,
  ns as fetchData,
  Lt as formatBytes,
  Tt as formatDate,
  Jd as formatDateSpan,
  V as formatString,
  Ho as getClassList,
  rs as getComponent,
  Fi as getFullscreenElement,
  Qo as getHotkeysMap,
  wh as getReactComponent,
  oh as getUniqueCode,
  Ye as getZData,
  wt as h,
  Vd as hotkeys,
  j as i18n,
  sh as init,
  ra as initGlobalComponents,
  Us as isDiff,
  Fd as isFetchSetting,
  le as isSameDay,
  aa as isSameMonth,
  Kd as isSameWeek,
  Ys as isSameYear,
  qd as isToday,
  Yd as isTomorrow,
  la as isValidDate,
  ot as isValidElement,
  Gd as isYesterday,
  Bd as jsRaw,
  O as mergeProps,
  ut as nextGid,
  Js as parseCommand,
  ah as parseCommands,
  jd as parseRawData,
  Hi as parseSize,
  ka as reactComponents,
  Xc as registerComponent,
  Bc as registerGlobalListener,
  it as registerReactComponent,
  Yo as removeUndefinedProps,
  we as render,
  ei as renderCustomContent,
  xh as renderCustomResult,
  Zs as runJS,
  zr as setZData,
  Dc as shareData,
  ls as signal,
  ni as store,
  Ri as storeData,
  Di as takeData,
  Gt as toCssSize,
  na as toggleFullscreen,
  ji as unbindCommands,
  ea as unbindHotkeys,
  Xd as untracked
};
//# sourceMappingURL=zui.esm.js.map
