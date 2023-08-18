var Nn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var N = (s, t, e) => (Nn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), R = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, W = (s, t, e, n) => (Nn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Ot = (s, t, e) => (Nn(s, t, "access private method"), e);
const At = document, Fs = window, so = At.documentElement, ue = At.createElement.bind(At), no = ue("div"), Dn = ue("table"), $l = ue("tbody"), wr = ue("tr"), { isArray: fn, prototype: io } = Array, { concat: xl, filter: Ei, indexOf: ro, map: oo, push: Tl, slice: ao, some: Mi, splice: Sl } = io, El = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ml = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Nl = /<.+>/, Dl = /^\w+$/;
function Ni(s, t) {
  const e = Al(t);
  return !s || !e && !le(t) && !q(t) ? [] : !e && Ml.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Dl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class pn {
  constructor(t, e) {
    if (!t)
      return;
    if (jn(t))
      return t;
    let n = t;
    if (et(t)) {
      const i = e || At;
      if (n = El.test(t) && le(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Nl.test(t) ? ho(t) : jn(i) ? i.find(t) : et(i) ? u(i).find(t) : Ni(t, i), !n)
        return;
    } else if (fe(t))
      return this.ready(t);
    (n.nodeType || n === Fs) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new pn(t, e);
  }
}
const C = pn.prototype, u = C.init;
u.fn = u.prototype = C;
C.length = 0;
C.splice = Sl;
typeof Symbol == "function" && (C[Symbol.iterator] = io[Symbol.iterator]);
function jn(s) {
  return s instanceof pn;
}
function Ee(s) {
  return !!s && s === s.window;
}
function le(s) {
  return !!s && s.nodeType === 9;
}
function Al(s) {
  return !!s && s.nodeType === 11;
}
function q(s) {
  return !!s && s.nodeType === 1;
}
function Pl(s) {
  return !!s && s.nodeType === 3;
}
function Il(s) {
  return typeof s == "boolean";
}
function fe(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function ot(s) {
  return s === void 0;
}
function Ke(s) {
  return s === null;
}
function lo(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function Di(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Ee;
u.isFunction = fe;
u.isArray = fn;
u.isNumeric = lo;
u.isPlainObject = Di;
function Y(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (Di(s)) {
    const n = Object.keys(s);
    for (let i = 0, r = n.length; i < r; i++) {
      const o = n[i];
      if (t.call(s[o], o, s[o]) === !1)
        return s;
    }
  } else
    for (let n = 0, i = s.length; n < i; n++)
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  return s;
}
u.each = Y;
C.each = function(s) {
  return Y(this, s);
};
C.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function zs(...s) {
  const t = Il(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return zs(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (fn(r[o]) || Di(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), zs(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = zs;
C.extend = function(s) {
  return zs(C, s);
};
const Rl = /\S+/g;
function mn(s) {
  return et(s) ? s.match(Rl) || [] : [];
}
C.toggleClass = function(s, t) {
  const e = mn(s), n = !ot(t);
  return this.each((i, r) => {
    q(r) && Y(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
C.addClass = function(s) {
  return this.toggleClass(s, !0);
};
C.removeAttr = function(s) {
  const t = mn(s);
  return this.each((e, n) => {
    q(n) && Y(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Ll(s, t) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !q(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return Ke(e) ? void 0 : e;
      }
      return ot(t) ? this : Ke(t) ? this.removeAttr(s) : this.each((e, n) => {
        q(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
C.attr = Ll;
C.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
C.hasClass = function(s) {
  return !!s && Mi.call(this, (t) => q(t) && t.classList.contains(s));
};
C.get = function(s) {
  return ot(s) ? ao.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
C.eq = function(s) {
  return u(this.get(s));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function Wl(s) {
  return ot(s) ? this.get().map((t) => q(t) || Pl(t) ? t.textContent : "").join("") : this.each((t, e) => {
    q(e) && (e.textContent = s);
  });
}
C.text = Wl;
function Pt(s, t, e) {
  if (!q(s))
    return;
  const n = Fs.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function vt(s, t) {
  return parseInt(Pt(s, t), 10) || 0;
}
function br(s, t) {
  return vt(s, `border${t ? "Left" : "Top"}Width`) + vt(s, `padding${t ? "Left" : "Top"}`) + vt(s, `padding${t ? "Right" : "Bottom"}`) + vt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const An = {};
function Ol(s) {
  if (An[s])
    return An[s];
  const t = ue(s);
  At.body.insertBefore(t, null);
  const e = Pt(t, "display");
  return At.body.removeChild(t), An[s] = e !== "none" ? e : "block";
}
function Cr(s) {
  return Pt(s, "display") === "none";
}
function co(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function gn(s) {
  return et(s) ? (t, e) => co(e, s) : fe(s) ? s : jn(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
C.filter = function(s) {
  const t = gn(s);
  return u(Ei.call(this, (e, n) => t.call(e, n, e)));
};
function Kt(s, t) {
  return t ? s.filter(t) : s;
}
C.detach = function(s) {
  return Kt(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Bl = /^\s*<(\w+)[^>]*>/, Hl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, kr = {
  "*": no,
  tr: $l,
  td: wr,
  th: wr,
  thead: Dn,
  tbody: Dn,
  tfoot: Dn
};
function ho(s) {
  if (!et(s))
    return [];
  if (Hl.test(s))
    return [ue(RegExp.$1)];
  const t = Bl.test(s) && RegExp.$1, e = kr[t] || kr["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = ho;
C.has = function(s) {
  const t = et(s) ? (e, n) => Ni(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
C.not = function(s) {
  const t = gn(s);
  return this.filter((e, n) => (!et(s) || q(n)) && !t.call(n, e, n));
};
function Rt(s, t, e, n) {
  const i = [], r = fe(t), o = n && gn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const h = t(s[a]);
      h.length && Tl.apply(i, h);
    } else {
      let h = s[a][t];
      for (; h != null && !(n && o(-1, h)); )
        i.push(h), h = e ? h[t] : null;
    }
  return i;
}
function uo(s) {
  return s.multiple && s.options ? Rt(Ei.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Fl(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || wo.test(e.type)) {
      const i = fn(s) ? oo.call(s, String) : Ke(s) ? [] : [String(s)];
      n ? Y(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = ot(s) || Ke(s) ? "" : s;
  }) : this[0] && uo(this[0]);
}
C.val = Fl;
C.is = function(s) {
  const t = gn(s);
  return Mi.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function Ct(s) {
  return s.length > 1 ? Ei.call(s, (t, e, n) => ro.call(n, t) === e) : s;
}
u.unique = Ct;
C.add = function(s, t) {
  return u(Ct(this.get().concat(u(s, t).get())));
};
C.children = function(s) {
  return Kt(u(Ct(Rt(this, (t) => t.children))), s);
};
C.parent = function(s) {
  return Kt(u(Ct(Rt(this, "parentNode"))), s);
};
C.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return ro.call(e, t);
};
C.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
C.siblings = function(s) {
  return Kt(u(Ct(Rt(this, (t) => u(t).parent().children().not(t)))), s);
};
C.find = function(s) {
  return u(Ct(Rt(this, (t) => Ni(s, t))));
};
const zl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Vl = /^$|^module$|\/(java|ecma)script/i, Ul = ["type", "src", "nonce", "noModule"];
function jl(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Vl.test(i.type) && so.contains(i)) {
      const r = ue("script");
      r.text = i.textContent.replace(zl, ""), Y(Ul, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function ql(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && jl(t, s.ownerDocument);
}
function Xt(s, t, e, n, i, r, o, a) {
  return Y(s, (l, h) => {
    Y(u(h), (d, c) => {
      Y(u(t), (p, m) => {
        const g = e ? c : m, y = e ? m : c, v = e ? d : p;
        ql(g, v ? y.cloneNode(!0) : y, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
C.after = function() {
  return Xt(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return Xt(arguments, this, !1, !1, !0);
};
function Yl(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    q(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
C.html = Yl;
C.appendTo = function(s) {
  return Xt(arguments, this, !0, !1, !0);
};
C.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
C.before = function() {
  return Xt(arguments, this, !1, !0);
};
C.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
C.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
C.insertAfter = function(s) {
  return Xt(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(s) {
  return Xt(arguments, this, !0, !0);
};
C.prepend = function() {
  return Xt(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(s) {
  return Xt(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return u(Ct(Rt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
C.next = function(s, t, e) {
  return Kt(u(Ct(Rt(this, "nextElementSibling", t, e))), s);
};
C.nextAll = function(s) {
  return this.next(s, !0);
};
C.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
C.parents = function(s, t) {
  return Kt(u(Ct(Rt(this, "parentElement", !0, t))), s);
};
C.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
C.prev = function(s, t, e) {
  return Kt(u(Ct(Rt(this, "previousElementSibling", t, e))), s);
};
C.prevAll = function(s) {
  return this.prev(s, !0);
};
C.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
C.map = function(s) {
  return u(xl.apply([], oo.call(this, (t, e) => s.call(t, e, t))));
};
C.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Pt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || so;
  });
};
C.slice = function(s, t) {
  return u(ao.call(this, s, t));
};
const Gl = /-([a-z])/g;
function Ai(s) {
  return s.replace(Gl, (t, e) => e.toUpperCase());
}
C.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return At.readyState !== "loading" ? t() : At.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
C.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + Fs.pageYOffset,
    left: t.left + Fs.pageXOffset
  };
};
C.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Pt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Pt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && q(i)) {
      const r = u(i).offset();
      e.top -= r.top + vt(i, "borderTopWidth"), e.left -= r.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - vt(s, "marginTop"),
    left: e.left - vt(s, "marginLeft")
  };
};
const fo = {
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
C.prop = function(s, t) {
  if (s) {
    if (et(s))
      return s = fo[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
C.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[fo[s] || s];
  });
};
const Kl = /^--/;
function Pi(s) {
  return Kl.test(s);
}
const Pn = {}, { style: Xl } = no, Zl = ["webkit", "moz", "ms"];
function Jl(s, t = Pi(s)) {
  if (t)
    return s;
  if (!Pn[s]) {
    const e = Ai(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${Zl.join(`${n} `)}${n}`.split(" ");
    Y(i, (r, o) => {
      if (o in Xl)
        return Pn[s] = o, !1;
    });
  }
  return Pn[s];
}
const Ql = {
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
function po(s, t, e = Pi(s)) {
  return !e && !Ql[s] && lo(t) ? `${t}px` : t;
}
function tc(s, t) {
  if (et(s)) {
    const e = Pi(s);
    return s = Jl(s, e), arguments.length < 2 ? this[0] && Pt(this[0], s, e) : s ? (t = po(s, t, e), this.each((n, i) => {
      q(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
C.css = tc;
function mo(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const ec = /^\s+|\s+$/;
function $r(s, t) {
  const e = s.dataset[t] || s.dataset[Ai(t)];
  return ec.test(e) ? e : mo(JSON.parse, e);
}
function sc(s, t, e) {
  e = mo(JSON.stringify, e), s.dataset[Ai(t)] = e;
}
function nc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = $r(this[0], n);
    return e;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && $r(this[0], s) : ot(t) ? this : this.each((e, n) => {
      sc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
C.data = nc;
function go(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Y([!0, !1], (s, t) => {
  Y(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    C[i] = function(r) {
      if (this[0])
        return Ee(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : le(this[0]) ? go(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? vt(this[0], `margin${e ? "Top" : "Left"}`) + vt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  C[e] = function(n) {
    if (!this[0])
      return ot(n) ? void 0 : this;
    if (!arguments.length)
      return Ee(this[0]) ? this[0].document.documentElement[`client${t}`] : le(this[0]) ? go(this[0], t) : this[0].getBoundingClientRect()[e] - br(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!q(o))
        return;
      const a = Pt(o, "boxSizing");
      o.style[e] = po(e, i + (a === "border-box" ? br(o, !s) : 0));
    });
  };
});
const xr = "___cd";
C.toggle = function(s) {
  return this.each((t, e) => {
    if (!q(e))
      return;
    const n = Cr(e);
    (ot(s) ? n : s) ? (e.style.display = e[xr] || "", Cr(e) && (e.style.display = Ol(e.tagName))) : n || (e[xr] = Pt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const Tr = "___ce", Ii = ".", Ri = { focus: "focusin", blur: "focusout" }, yo = { mouseenter: "mouseover", mouseleave: "mouseout" }, ic = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Li(s) {
  return yo[s] || Ri[s] || s;
}
function Wi(s) {
  const t = s.split(Ii);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(s, t) {
  if (et(s)) {
    const [n, i] = Wi(s), r = Li(n);
    if (!r)
      return this;
    const o = ic.test(r) ? "MouseEvents" : "HTMLEvents";
    s = At.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(Ii), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in Ri;
  return this.each((n, i) => {
    e && fe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function _o(s) {
  return s[Tr] = s[Tr] || {};
}
function rc(s, t, e, n, i) {
  const r = _o(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function vo(s, t) {
  return !t || !Mi.call(t, (e) => s.indexOf(e) < 0);
}
function Vs(s, t, e, n, i) {
  const r = _o(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !vo(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Vs(s, t, e, n, i);
}
C.off = function(s, t, e) {
  if (ot(s))
    this.each((n, i) => {
      !q(i) && !le(i) && !Ee(i) || Vs(i);
    });
  else if (et(s))
    fe(t) && (e = t, t = ""), Y(mn(s), (n, i) => {
      const [r, o] = Wi(i), a = Li(r);
      this.each((l, h) => {
        !q(h) && !le(h) && !Ee(h) || Vs(h, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
C.remove = function(s) {
  return Kt(this, s).detach().off(), this;
};
C.replaceWith = function(s) {
  return this.before(s).remove();
};
C.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function oc(s, t, e, n, i) {
  if (!et(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return et(t) || (ot(t) || Ke(t) ? t = "" : ot(e) ? (e = t, t = "") : (n = e, e = t, t = "")), fe(n) || (n = e, e = void 0), n ? (Y(mn(s), (r, o) => {
    const [a, l] = Wi(o), h = Li(a), d = a in yo, c = a in Ri;
    h && this.each((p, m) => {
      if (!q(m) && !le(m) && !Ee(m))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !vo(l, y.namespace.split(Ii)) || !t && (c && (y.target !== m || y.___ot === h) || d && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let v = m;
        if (t) {
          let w = y.target;
          for (; !co(w, t); )
            if (w === m || (w = w.parentNode, !w))
              return;
          v = w;
        }
        Object.defineProperty(y, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(y, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(y, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const _ = n.call(v, y, y.___td);
        i && Vs(m, h, l, t, g), _ === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, rc(m, h, l, t, g);
    });
  }), this) : this;
}
C.on = oc;
function ac(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
C.one = ac;
const lc = /\r?\n/g;
function cc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(lc, `\r
`))}`;
}
const hc = /file|reset|submit|button|image/i, wo = /radio|checkbox/i;
C.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    Y(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || hc.test(i.type) || wo.test(i.type) && !i.checked)
        return;
      const r = uo(i);
      if (!ot(r)) {
        const o = fn(r) ? r : [r];
        Y(o, (a, l) => {
          s += cc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function dc(s, t) {
  if (s == null)
    return [s, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let n = s;
  const i = [n];
  for (; typeof n == "object" && n !== null && t.length; ) {
    let r = t.shift(), o;
    const a = r.indexOf("[");
    if (a > 0 && a < r.length - 1 && r.endsWith("]") && (o = r.substring(a + 1, r.length - 1), r = r.substring(0, a)), n = n[r], i.push(n), o !== void 0)
      if (typeof n == "object" && n !== null)
        n instanceof Map ? n = n.get(o) : n = n[o], i.push(n);
      else
        throw new Error(`Cannot access property "${r}[${o}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function uc(s, t, e) {
  try {
    const n = dc(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function K(s, ...t) {
  if (t.length === 0)
    return s;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const e = t[0];
    return Object.keys(e).forEach((n) => {
      const i = e[n] ?? "";
      s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let e = 0; e < t.length; e++) {
    const n = t[e] ?? "";
    s = s.replace(new RegExp(`\\{${e}\\}`, "g"), `${n}`);
  }
  return s;
}
var Oi = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Oi || {});
function fc(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Oi[e]).toFixed(t) + e);
}
const pc = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Oi[n];
};
let Bi = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ft;
function mc() {
  return Bi;
}
function gc(s) {
  Bi = s.toLowerCase();
}
function bo(s, t) {
  Ft || (Ft = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, Ft, s);
}
function G(s, t, e, n, i, r) {
  Array.isArray(s) ? Ft && s.unshift(Ft) : s = Ft ? [Ft, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || Bi;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const h = l[o];
    if (!h)
      continue;
    const d = r && l === Ft ? `${r}.${t}` : t;
    if (a = uc(h, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? K(a, ...Array.isArray(e) ? e : [e]) : a;
}
function yc(s, t, e, n) {
  return G(void 0, s, t, e, n);
}
G.addLang = bo;
G.getLang = yc;
G.getCode = mc;
G.setCode = gc;
bo({
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
function Co(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Co(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const x = (...s) => Co(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = x;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(s, ...t));
  });
};
const We = /* @__PURE__ */ new WeakMap();
function ko(s, t, e) {
  const n = We.has(s), i = n ? We.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), We.set(s, i)) : We.delete(s);
}
function $o(s, t, e) {
  let n = We.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? $o(this[0], t) : this.each((n, i) => ko(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => ko(e, s));
};
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
};
const Us = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), _c = {};
u.share = _c;
const Oe = /* @__PURE__ */ new Map();
function js(s) {
  const { zui: t } = window;
  return (!Oe.size || s && !Oe.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || Oe.set(e.toLowerCase(), n);
  }), s ? Oe.get(s.toLowerCase()) : void 0;
}
function vc(s, t, e) {
  const n = js(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function Ad(s) {
  if (s) {
    const t = js(s);
    t && t.defineFn();
  } else
    js(), Oe.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => vc(e, this, t)));
  }), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = $o(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = js(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function Hi(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: _ } = document.documentElement;
    n = { left: 0, top: 0, width: y || _, height: g || v };
  }
  const { left: l, top: h, width: d, height: c } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= h && i + o <= d && r + a <= c;
  const p = i <= d && i + o >= l;
  return r <= c && r + a >= h && p;
}
u.fn.isVisible = function(s) {
  return Hi(this, s);
};
function Fi(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    Fi(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    Fi(e, s);
  });
};
function xo(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    n && Hi(o, { viewport: o.getBoundingClientRect() }) || o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    xo(e, s);
  });
};
u.setLibRoot = function(s) {
  u.libRoot = s;
};
u.registerLib = function(s, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), u.libMap[s] = t;
};
u.getLib = function(s, t, e) {
  return new Promise((n, i) => {
    let r = typeof s == "string" ? { src: s } : u.extend({}, s);
    typeof t == "function" ? r.success = t : t && u.extend(r, t), e && (r.success = e);
    let { src: o } = r;
    if (!o)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[o];
    a && (r = u.extend({}, a, r), o = a.src || r.src);
    const { root: l = u.libRoot } = r;
    l && (o = `${l}/${o}`.replace("//", "/"));
    const { success: h, name: d } = r, c = () => d ? window[d] : void 0, p = () => {
      n(c()), h == null || h();
    };
    if (c()) {
      p();
      return;
    }
    const { id: m } = r, g = u(m ? `#${m}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        p();
      else {
        const b = g.data("loadCalls") || [];
        b.push(p), g.data("loadCalls", b);
      }
      return;
    }
    const { async: y = !0, defer: v = !1, noModule: _ = !1, type: w, integrity: k } = r, $ = document.createElement("script");
    $.async = y, $.defer = v, $.noModule = _, w && ($.type = w), k && ($.integrity = k), $.onload = () => {
      p(), (u($).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u($).removeData("loadCalls");
    }, $.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, $.src = o, u("head").append($);
  });
};
u.getScript = u.getLib;
const Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Hi,
  runJS: Fi,
  scrollIntoView: xo
}, Symbol.toStringTag, { value: "Module" }));
var yn, B, To, Z, te, Sr, So, qn, we = {}, Eo = [], wc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, zi = Array.isArray;
function jt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Mo(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function X(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? yn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return $s(s, o, n, i, null);
}
function $s(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++To };
  return i == null && B.vnode != null && B.vnode(r), r;
}
function V() {
  return { current: null };
}
function De(s) {
  return s.children;
}
function O(s, t) {
  this.props = s, this.context = t;
}
function Xe(s, t) {
  if (t == null)
    return s.__ ? Xe(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? Xe(s) : null;
}
function No(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return No(s);
  }
}
function Er(s) {
  (!s.__d && (s.__d = !0) && te.push(s) && !qs.__r++ || Sr !== B.debounceRendering) && ((Sr = B.debounceRendering) || So)(qs);
}
function qs() {
  var s, t, e, n, i, r, o, a, l;
  for (te.sort(qn); s = te.shift(); )
    s.__d && (t = te.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = jt({}, o)).__v = o.__v + 1, Vi(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? Xe(o), o.__h, i), Io(n, o, i), o.__e != a && No(o)), te.length > t && te.sort(qn));
  qs.__r = 0;
}
function Do(s, t, e, n, i, r, o, a, l, h, d) {
  var c, p, m, g, y, v, _, w, k, $ = 0, b = n && n.__k || Eo, S = b.length, D = S, I = t.length;
  for (e.__k = [], c = 0; c < I; c++)
    (g = e.__k[c] = (g = t[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? $s(null, g, null, null, g) : zi(g) ? $s(De, { children: g }, null, null, null) : g.__b > 0 ? $s(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (w = bc(g, b, _ = c + $, D)) === -1 ? m = we : (m = b[w] || we, b[w] = void 0, D--), Vi(s, g, m, i, r, o, a, l, h, d), y = g.__e, (p = g.ref) && m.ref != p && (m.ref && Ui(m.ref, null, g), d.push(p, g.__c || y, g)), y != null && (v == null && (v = y), (k = m === we || m.__v === null) ? w == -1 && $-- : w !== _ && (w === _ + 1 ? $++ : w > _ ? D > I - _ ? $ += w - _ : $-- : $ = w < _ && w == _ - 1 ? w - _ : 0), _ = c + $, typeof g.type != "function" || w === _ && m.__k !== g.__k ? typeof g.type == "function" || w === _ && !k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = y.nextSibling : l = Po(s, y, l) : l = Ao(g, l, s), typeof e.type == "function" && (e.__d = l))) : (m = b[c]) && m.key == null && m.__e && (m.__e == l && (l = Xe(m)), Yn(m, m, !1));
  for (e.__e = v, c = S; c--; )
    b[c] != null && (typeof e.type == "function" && b[c].__e != null && b[c].__e == e.__d && (e.__d = b[c].__e.nextSibling), Yn(b[c], b[c]));
}
function Ao(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? Ao(n, t, e) : Po(e, n.__e, t));
  return t;
}
function Po(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function bc(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type)
    return e;
  if (n > (l != null ? 1 : 0))
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
function Cc(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Ys(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Ys(s, r, t[r], e[r], n);
}
function Mr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || wc.test(t) ? e : e + "px";
}
function Ys(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Mr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Mr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? Dr : Nr, r) : s.removeEventListener(t, r ? Dr : Nr, r);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, e));
    }
}
function Nr(s) {
  return this.l[s.type + !1](B.event ? B.event(s) : s);
}
function Dr(s) {
  return this.l[s.type + !0](B.event ? B.event(s) : s);
}
function Vi(s, t, e, n, i, r, o, a, l, h) {
  var d, c, p, m, g, y, v, _, w, k, $, b, S, D, I, P = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = B.__b) && d(t);
  t:
    if (typeof P == "function")
      try {
        if (_ = t.props, w = (d = P.contextType) && n[d.__c], k = d ? w ? w.props.value : d.__ : n, e.__c ? v = (c = t.__c = e.__c).__ = c.__E : ("prototype" in P && P.prototype.render ? t.__c = c = new P(_, k) : (t.__c = c = new O(_, k), c.constructor = P, c.render = $c), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = k, c.__n = n, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), P.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = jt({}, c.__s)), jt(c.__s, P.getDerivedStateFromProps(_, c.__s))), m = c.props, g = c.state, c.__v = t, p)
          P.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (P.getDerivedStateFromProps == null && _ !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, k), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, k) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (c.props = _, c.state = c.__s, c.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(M) {
              M && (M.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && o.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, k), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, y);
          });
        }
        if (c.context = k, c.props = _, c.__P = s, c.__e = !1, b = B.__r, S = 0, "prototype" in P && P.prototype.render) {
          for (c.state = c.__s, c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), D = 0; D < c._sb.length; D++)
            c.__h.push(c._sb[D]);
          c._sb = [];
        } else
          do
            c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (n = jt(jt({}, n), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(m, g)), Do(s, zi(I = d != null && d.type === De && d.key == null ? d.props.children : d) ? I : [I], t, e, n, i, r, o, a, l, h), c.base = t.__e, t.__h = null, c.__h.length && o.push(c), v && (c.__E = c.__ = null);
      } catch (M) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), B.__e(M, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = kc(e.__e, t, e, n, i, r, o, l, h);
  (d = B.diffed) && d(t);
}
function Io(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Ui(e[n], e[++n], e[++n]);
  B.__c && B.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      B.__e(r, i.__v);
    }
  });
}
function kc(s, t, e, n, i, r, o, a, l) {
  var h, d, c, p = e.props, m = t.props, g = t.type, y = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; y < r.length; y++)
      if ((h = r[y]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        s = h, r[y] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(m);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), r = null, a = !1;
  }
  if (g === null)
    p === m || a && s.data === m || (s.data = m);
  else {
    if (r = r && yn.call(s.childNodes), d = (p = e.props || we).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (p = {}, y = 0; y < s.attributes.length; y++)
          p[s.attributes[y].name] = s.attributes[y].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (Cc(s, m, p, i, a), c)
      t.__k = [];
    else if (Do(s, zi(y = t.props.children) ? y : [y], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && Xe(e, 0), a, l), r != null)
      for (y = r.length; y--; )
        r[y] != null && Mo(r[y]);
    a || ("value" in m && (y = m.value) !== void 0 && (y !== s.value || g === "progress" && !y || g === "option" && y !== p.value) && Ys(s, "value", y, p.value, !1), "checked" in m && (y = m.checked) !== void 0 && y !== s.checked && Ys(s, "checked", y, p.checked, !1));
  }
  return s;
}
function Ui(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    B.__e(n, e);
  }
}
function Yn(s, t, e) {
  var n, i;
  if (B.unmount && B.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Ui(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        B.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Yn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Mo(s.__e), s.__ = s.__e = s.__d = void 0;
}
function $c(s, t, e) {
  return this.constructor(s, e);
}
function Gs(s, t, e) {
  var n, i, r, o;
  B.__ && B.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Vi(t, s = (!n && e || t).__k = X(De, null, [s]), i || we, we, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? yn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Io(r, s, o);
}
yn = Eo.slice, B = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, To = 0, Z = function(s) {
  return s != null && s.constructor === void 0;
}, O.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = jt({}, this.state), typeof s == "function" && (s = s(jt({}, e), this.props)), s && jt(e, s), s != null && this.__v && (t && this._sb.push(t), Er(this));
}, O.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), Er(this));
}, O.prototype.render = De, te = [], So = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, qs.__r = 0;
var Ro = function(s, t, e, n) {
  var i;
  t[0] = 0;
  for (var r = 1; r < t.length; r++) {
    var o = t[r++], a = t[r] ? (t[0] |= o ? 1 : 2, e[t[r++]]) : t[++r];
    o === 3 ? n[0] = a : o === 4 ? n[1] = Object.assign(n[1] || {}, a) : o === 5 ? (n[1] = n[1] || {})[t[++r]] = a : o === 6 ? n[1][t[++r]] += a + "" : o ? (i = s.apply(a, Ro(s, a, e, ["", null])), n.push(i), a[0] ? t[0] |= 2 : (t[r - 2] = 0, t[r] = i)) : n.push(a);
  }
  return n;
}, Ar = /* @__PURE__ */ new Map();
function xc(s) {
  var t = Ar.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Ar.set(this, t)), (t = Ro(this, t.get(s) || (t.set(s, t = function(e) {
    for (var n, i, r = 1, o = "", a = "", l = [0], h = function(p) {
      r === 1 && (p || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, o) : r === 3 && (p || o) ? (l.push(3, p, o), r = 2) : r === 2 && o === "..." && p ? l.push(4, p, 0) : r === 2 && o && !p ? l.push(5, 0, !0, o) : r >= 5 && ((o || !p && r === 5) && (l.push(r, 0, o, i), r = 6), p && (l.push(r, p, 0, i), r = 6)), o = "";
    }, d = 0; d < e.length; d++) {
      d && (r === 1 && h(), h(d));
      for (var c = 0; c < e[d].length; c++)
        n = e[d][c], r === 1 ? n === "<" ? (h(), l = [l], r = 3) : o += n : r === 4 ? o === "--" && n === ">" ? (r = 1, o = "") : o = n + o[0] : a ? n === a ? a = "" : o += n : n === '"' || n === "'" ? a = n : n === ">" ? (h(), r = 1) : r && (n === "=" ? (r = 5, i = o, o = "") : n === "/" && (r < 5 || e[d][c + 1] === ">") ? (h(), r === 3 && (l = l[0]), r = l, (l = l[0]).push(2, 0, r), r = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (h(), r = 2) : o += n), r === 3 && o === "!--" && (r = 4, l = l[0]);
    }
    return h(), l;
  }(s)), t), arguments, [])).length > 1 ? t : t[0];
}
const Id = xc.bind(X);
class ji extends O {
  _getClassName(t) {
    return [t.className, t.class];
  }
  _getProps(t) {
    const { className: e, class: n, attrs: i, data: r, forwardRef: o, children: a, style: l, ...h } = t, d = Object.keys(h).reduce((c, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-)[a-zA-Z-]+/.test(p)) && (c[p] = h[p]), c), {});
    return { ref: o, class: x(this._getClassName(t)), style: l, ...d, ...i };
  }
  _getComponent(t) {
    return t.component || "div";
  }
  _getChildren(t) {
    return t.children;
  }
  _beforeRender(t) {
    return t;
  }
  render(t) {
    return t = this._beforeRender(t) || t, X(this._getComponent(t), this._getProps(t), this._getChildren(t));
  }
}
var Tc = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var h = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Tc, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return B.vnode && B.vnode(h), h;
}
class us extends O {
  constructor() {
    super(...arguments), this._ref = V();
  }
  _runJS() {
    this.props.executeScript && u(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ f(ji, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Sc(s) {
  const {
    tag: t,
    className: e,
    style: n,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...d
  } = s, c = [e], p = { ...n }, m = [], g = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(o, y, m, ...r));
      else {
        const _ = y.call(o, m, ...r);
        _ && (Array.isArray(_) ? v.push(..._) : v.push(_));
      }
    else
      v.push(y);
    v.forEach((_) => {
      _ != null && (typeof _ == "object" && !Z(_) && ("html" in _ || "__html" in _ || "className" in _ || "style" in _ || "attrs" in _ || "children" in _) ? _.html ? m.push(
        /* @__PURE__ */ f("div", { className: x(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? g.push(_.__html) : (_.style && Object.assign(p, _.style), _.className && c.push(_.className), _.children && m.push(_.children), _.attrs && Object.assign(d, _.attrs)) : m.push(_));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: x(c),
    style: p,
    ...d
  }, m];
}
function qi({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Sc(t);
  return X(s, e, ...n);
}
function Lo(s, t, e) {
  return typeof s == "function" ? s.call(t, ...e || []) : Array.isArray(s) ? s.map((n) => Lo(n, t, e)) : Z(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ f(us, { ...s }) : /* @__PURE__ */ f(ji, { ...s }) : s;
}
function Zt(s) {
  const { content: t, generatorThis: e, generatorArgs: n } = s, i = Lo(t, e, n);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ f(De, { children: i });
}
const Pr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function J(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Pr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Pr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: x(i), ...n });
}
function Ec(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Mc(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    Gs(null, t._temp), t._temp = null, t._container = null;
  }, t._container && t._container !== e && t.componentWillUnmount(), s._vnode ? (t._temp || (t._container = e, t._temp = {
    nodeType: 1,
    parentNode: e,
    childNodes: [],
    appendChild(n) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(n, i) {
      this.childNodes.push(n), t._container.appendChild(n);
    },
    removeChild(n) {
      this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1), t._container.removeChild(n);
    }
  }), Gs(
    X(Ec, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Nc(s, t) {
  const e = X(Mc, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
function Wo(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Wo(s.parentNode) : !0;
}
class at {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: n, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(n) && !o)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = l[0], d = u.guid++;
    if (this._gid = d, this._element = h, l.on("DOMNodeRemovedFromDocument", () => {
      this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
        this._autoDestory = 0, Wo(h) && this.destroy();
      }, 100);
    }), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
      const c = `${n}:ALL`;
      let p = l.data(c);
      p || (p = /* @__PURE__ */ new Map(), l.data(c, p)), p.set(this._key, this);
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
    return u(this.element);
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(t).attr(e, null), n) {
      const r = this.$element.data(`${t}:ALL`);
      if (r)
        if (r.delete(this._key), r.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const o = r.values().next().value;
          i.data(t, o).attr(e, o.gid);
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
  setOptions(t) {
    return t && u.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = u.Event(t);
    return n.__src = this, this.$emitter.trigger(n, [this, ...e]), n;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(t, e, n) {
    const i = this;
    this.$element[n != null && n.once ? "one" : "on"](this._wrapEvent(t), function(r, o) {
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
  i18n(t, e, n) {
    return G(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? G(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
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
  static ensure(t, e) {
    const n = this.get(t, e == null ? void 0 : e.key);
    return n ? (e && n.setOptions(e), n) : new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, DATA_KEY: n } = this, i = [];
    return u(t || document).find(`[${n}]`).each((r, o) => {
      if (e) {
        const l = u(o).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(o).data(this.KEY);
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
  static query(t, e) {
    return t === void 0 ? this.getAll().sort((n, i) => n.gid - i.gid)[0] : this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    u.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    u.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, d) => {
          let c = n.get(d);
          if (c ? o && c.render(o) : c = new n(d, o), a) {
            let p = c[a], m = c;
            p === void 0 && (m = c.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...r) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
at.DEFAULT = {};
at.MULTI_INSTANCE = !1;
class z extends at {
  constructor() {
    super(...arguments), this.ref = V();
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
    var t, e;
    (e = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || e.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    Gs(
      X(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Dc({
  component: s = "div",
  className: t,
  children: e,
  style: n,
  attrs: i
}) {
  return X(s, {
    className: x(t),
    style: n,
    ...i
  }, e);
}
function Oo({
  type: s,
  component: t = "a",
  className: e,
  children: n,
  content: i,
  attrs: r,
  url: o,
  disabled: a,
  active: l,
  icon: h,
  text: d,
  target: c,
  trailingIcon: p,
  hint: m,
  checked: g,
  onClick: y,
  data: v,
  ..._
}) {
  const w = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(J, { icon: h }),
    d ? /* @__PURE__ */ f("span", { className: "text", children: d }) : null,
    /* @__PURE__ */ f(Zt, { content: i }),
    n,
    /* @__PURE__ */ f(J, { icon: p })
  ];
  return X(t, {
    className: x(e, { disabled: a, active: l }),
    title: m,
    [t === "a" ? "href" : "data-url"]: a ? void 0 : o,
    [t === "a" ? "target" : "data-target"]: a ? void 0 : c,
    onClick: y,
    ..._,
    ...r
  }, ...w);
}
function Ac({
  component: s = "div",
  className: t,
  text: e,
  attrs: n,
  children: i,
  content: r,
  style: o,
  onClick: a
}) {
  return X(s, {
    className: x(t),
    style: o,
    onClick: a,
    ...n
  }, e, /* @__PURE__ */ f(Zt, { content: r }), i);
}
function Pc({
  component: s = "div",
  className: t,
  style: e,
  space: n,
  flex: i,
  attrs: r,
  onClick: o,
  children: a
}) {
  return X(s, {
    className: x(t),
    style: { width: n, height: n, flex: i, ...e },
    onClick: o,
    ...r
  }, a);
}
function Ic({ type: s, ...t }) {
  return /* @__PURE__ */ f(qi, { ...t });
}
function Bo({
  component: s = "div",
  className: t,
  children: e,
  content: n,
  style: i,
  attrs: r
}) {
  return X(s, {
    className: x(t),
    style: i,
    ...r
  }, /* @__PURE__ */ f(Zt, { content: n }), e);
}
const _n = class Gn extends O {
  constructor() {
    super(...arguments), this.ref = V();
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
    var t, e;
    (e = (t = this.props).beforeDestroy) == null || e.call(t, { menu: this });
  }
  afterRender(t) {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { menu: this, firstRender: t });
  }
  handleItemClick(t, e, n, i) {
    n && n.call(i.target, i, t, e);
    const { onClickItem: r } = this.props;
    r && r({ menu: this, item: t, index: e, event: i });
  }
  beforeRender() {
    var n;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this)), t.items || (t.items = []);
    const e = (n = t.beforeRender) == null ? void 0 : n.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, n) {
    const { commonItemProps: i, onClickItem: r, itemRenderProps: o } = t;
    let a = { ...e };
    return i && Object.assign(a, i[e.type || "item"]), (r || e.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, e.onClick)), a.className = x(a.className), o && (a = o(a)), a;
  }
  renderItem(t, e, n) {
    if (!e)
      return null;
    const i = this.getItemRenderProps(t, e, n), { itemRender: r } = t;
    if (r) {
      if (typeof r == "object") {
        const y = r[e.type || "item"];
        if (y)
          return /* @__PURE__ */ f(y, { ...i });
      } else if (typeof r == "function") {
        const y = r.call(this, i, X);
        if (Z(y))
          return y;
        typeof y == "object" && Object.assign(i, y);
      }
    }
    const { type: o = "item", component: a, key: l = n, rootAttrs: h, rootClass: d, rootStyle: c, rootChildren: p, ...m } = i;
    if (o === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: x("action-menu-item", `${this.name}-html`, d, m.className),
          ...h,
          style: c || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[o] || Gn.ItemComponents[o] : a;
    return Object.assign(m, {
      type: o,
      component: typeof a == "string" ? a : void 0
    }), t.checkbox && o === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(g, {
      className: x(d),
      children: p,
      style: c,
      key: l,
      ...h
    }, {
      ...m,
      type: o,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(t, e, n) {
    const { children: i, className: r, key: o, ...a } = e;
    return /* @__PURE__ */ f(
      "li",
      {
        className: x(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, r),
        ...a,
        children: [
          /* @__PURE__ */ f(t, { ...n }),
          typeof i == "function" ? i() : i
        ]
      },
      o
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
      style: n,
      commonItemProps: i,
      className: r,
      items: o,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: d,
      afterRender: c,
      beforeDestroy: p,
      compact: m,
      ...g
    } = t, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(y, { class: x(this.name, r, m ? "compact" : ""), style: n, ...g, ref: this.ref, children: [
      o && o.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
};
_n.ItemComponents = {
  divider: Dc,
  item: Oo,
  heading: Ac,
  space: Pc,
  custom: Ic,
  basic: Bo
};
_n.ROOT_TAG = "menu";
_n.NAME = "action-menu";
let vn = _n;
class Ho extends z {
}
Ho.NAME = "ActionMenu";
Ho.Component = vn;
function Rc({
  items: s,
  show: t,
  level: e,
  ...n
}) {
  return /* @__PURE__ */ f(Oo, { ...n });
}
var Fo = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ut = (s, t, e) => (Fo(s, t, "read from private field"), e ? e.call(s) : t.get(s)), In = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Lc = (s, t, e, n) => (Fo(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), xs, kt, Be;
let wn = class extends vn {
  constructor(t) {
    super(t), In(this, xs, /* @__PURE__ */ new Set()), In(this, kt, void 0), In(this, Be, (e, n, i) => {
      u(i.target).closest(".not-nested-toggle").length || (this.toggle(e, n), i.preventDefault());
    }), Lc(this, kt, t.nestedShow === void 0), ut(this, kt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: n, defaultNestedShow: i, controlledMenu: r, indent: o, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = x(a.className, "no-nested-items")), !r && o && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${o}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: n, nestedShow: i, beforeDestroy: r, beforeRender: o, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: d, level: c, itemRenderProps: p } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: ut(this, kt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: n || this,
      commonItemProps: d,
      onClickItem: l,
      afterRender: h,
      beforeRender: o,
      beforeDestroy: r,
      itemRender: a,
      itemRenderProps: p,
      level: (c || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: e } = t;
    if (!e || (typeof e == "function" && (e = e(t, this)), !e.length))
      return;
    const n = this.constructor, i = this.getNestedMenuProps(e);
    return /* @__PURE__ */ f(
      n,
      {
        ...i,
        "data-level": i.level,
        style: { "--level": i.level }
      }
    );
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, e) {
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const r = i.key ?? i.id ?? `${t.level || 0}:${n}`;
    ut(this, xs).add(r);
    const o = this.isExpanded(r);
    if (o && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, Be).bind(this, r, !0),
        onMouseLeave: ut(this, Be).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, Be).call(this, r, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(o, i);
    return a && (i.children = [i.children, a]), i.show = o, i.rootClass = [i.rootClass, "has-nested-menu", o ? "show" : ""], i;
  }
  isExpanded(t) {
    const e = ut(this, kt) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: n } = this.props;
    if (n)
      return n.toggle(t, e);
    if (!ut(this, kt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, xs).values()].reduce((r, o) => (r[o] = !0, r), {}) : i = {}), e === void 0)
      e = !i[t];
    else if (!!i[t] == !!e)
      return !1;
    return e ? i[t] = e : delete i[t], this.setState({ nestedShow: { ...i } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    ut(this, kt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, kt) && this.setState({ nestedShow: !1 });
  }
};
xs = /* @__PURE__ */ new WeakMap();
kt = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakMap();
wn.ItemComponents = {
  item: Rc
};
class zo extends z {
}
zo.NAME = "ActionMenuNested";
zo.Component = wn;
let qt = class extends wn {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: e } = t;
    return e === void 0 && (e = t.items.some((n) => n.icon)), t.className = x(t.className, this.menuName, {
      "has-icons": e,
      "has-nested-items": t.items.some((n) => this.isNestedItem(n)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
qt.NAME = "menu";
class Vo extends z {
}
Vo.NAME = "Menu";
Vo.Component = qt;
class Q extends ji {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: h } = t;
    return [
      e ? /* @__PURE__ */ f(J, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(J, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(J, { icon: l }),
      e ? null : h ? /* @__PURE__ */ f("span", { className: typeof h == "string" ? `caret-${h}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: h, rounded: d } = t;
    return x("btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, h ? `size-${h}` : "", typeof d == "string" ? d : { rounded: d });
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = {
      ...super._getProps(t),
      disabled: r,
      title: a,
      type: e === "button" ? o : void 0
    };
    return r || (n !== void 0 && (l[e === "a" ? "href" : "data-url"] = n), i !== void 0 && (l[e === "a" ? "target" : "data-target"] = i)), l;
  }
}
function Wc({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(Q, { type: e, ...n });
}
let Oc = class extends O {
  render(t) {
    const {
      id: e,
      popup: n,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: h,
      headingClass: d,
      titleClass: c,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = t;
    let y = /* @__PURE__ */ f(Zt, { content: r }, "content");
    (p || i) && (y = /* @__PURE__ */ f("div", { className: p, children: y }, "content"));
    const v = [], _ = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: c, children: i }) : null,
      _
    ] }, "heading")) : v.push(_), v.push(y), h && v.push(/* @__PURE__ */ f("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: x("popover", a, { popup: n }), style: o, children: v });
  }
};
class Yi extends z {
}
Yi.NAME = "PopoverPanel";
Yi.Component = Oc;
const Me = Math.min, ie = Math.max, Ks = Math.round, vs = Math.floor, Yt = (s) => ({
  x: s,
  y: s
}), Bc = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Hc = {
  start: "end",
  end: "start"
};
function Kn(s, t, e) {
  return ie(s, Me(t, e));
}
function fs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function ce(s) {
  return s.split("-")[0];
}
function ps(s) {
  return s.split("-")[1];
}
function Uo(s) {
  return s === "x" ? "y" : "x";
}
function Gi(s) {
  return s === "y" ? "height" : "width";
}
function bn(s) {
  return ["top", "bottom"].includes(ce(s)) ? "y" : "x";
}
function Ki(s) {
  return Uo(bn(s));
}
function Fc(s, t, e) {
  e === void 0 && (e = !1);
  const n = ps(s), i = Ki(s), r = Gi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Xs(o)), [o, Xs(o)];
}
function zc(s) {
  const t = Xs(s);
  return [Xn(s), t, Xn(t)];
}
function Xn(s) {
  return s.replace(/start|end/g, (t) => Hc[t]);
}
function Vc(s, t, e) {
  const n = ["left", "right"], i = ["right", "left"], r = ["top", "bottom"], o = ["bottom", "top"];
  switch (s) {
    case "top":
    case "bottom":
      return e ? t ? i : n : t ? n : i;
    case "left":
    case "right":
      return t ? r : o;
    default:
      return [];
  }
}
function Uc(s, t, e, n) {
  const i = ps(s);
  let r = Vc(ce(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Xn)))), r;
}
function Xs(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Bc[t]);
}
function jc(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function jo(s) {
  return typeof s != "number" ? jc(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Zs(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Ir(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = bn(t), o = Ki(t), a = Gi(o), l = ce(t), h = r === "y", d = n.x + n.width / 2 - i.width / 2, c = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      m = {
        x: n.x + n.width,
        y: c
      };
      break;
    case "left":
      m = {
        x: n.x - i.width,
        y: c
      };
      break;
    default:
      m = {
        x: n.x,
        y: n.y
      };
  }
  switch (ps(t)) {
    case "start":
      m[o] -= p * (e && h ? -1 : 1);
      break;
    case "end":
      m[o] += p * (e && h ? -1 : 1);
      break;
  }
  return m;
}
const qc = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let h = await o.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: c
  } = Ir(h, n, l), p = n, m = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const {
      name: v,
      fn: _
    } = a[y], {
      x: w,
      y: k,
      data: $,
      reset: b
    } = await _({
      x: d,
      y: c,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: m,
      rects: h,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = w ?? d, c = k ?? c, m = {
      ...m,
      [v]: {
        ...m[v],
        ...$
      }
    }, b && g <= 50) {
      g++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (h = b.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : b.rects), {
        x: d,
        y: c
      } = Ir(h, p, l)), y = -1;
      continue;
    }
  }
  return {
    x: d,
    y: c,
    placement: p,
    strategy: i,
    middlewareData: m
  };
};
async function qo(s, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: n,
    y: i,
    platform: r,
    rects: o,
    elements: a,
    strategy: l
  } = s, {
    boundary: h = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = fs(t, s), g = jo(m), v = a[p ? c === "floating" ? "reference" : "floating" : c], _ = Zs(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: l
  })), w = c === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), $ = await (r.isElement == null ? void 0 : r.isElement(k)) ? await (r.getScale == null ? void 0 : r.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = Zs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: w,
    offsetParent: k,
    strategy: l
  }) : w);
  return {
    top: (_.top - b.top + g.top) / $.y,
    bottom: (b.bottom - _.bottom + g.bottom) / $.y,
    left: (_.left - b.left + g.left) / $.x,
    right: (b.right - _.right + g.right) / $.x
  };
}
const Zn = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a
    } = t, {
      element: l,
      padding: h = 0
    } = fs(s, t) || {};
    if (l == null)
      return {};
    const d = jo(h), c = {
      x: e,
      y: n
    }, p = Ki(i), m = Gi(p), g = await o.getDimensions(l), y = p === "y", v = y ? "top" : "left", _ = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = r.reference[m] + r.reference[p] - c[p] - r.floating[m], $ = c[p] - r.reference[p], b = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let S = b ? b[w] : 0;
    (!S || !await (o.isElement == null ? void 0 : o.isElement(b))) && (S = a.floating[w] || r.floating[m]);
    const D = k / 2 - $ / 2, I = S / 2 - g[m] / 2 - 1, P = Me(d[v], I), M = Me(d[_], I), A = P, F = S - g[m] - M, E = S / 2 - g[m] / 2 + D, H = Kn(A, E, F), mt = ps(i) != null && E != H && r.reference[m] / 2 - (E < A ? P : M) - g[m] / 2 < 0 ? E < A ? A - E : F - E : 0;
    return {
      [p]: c[p] - mt,
      data: {
        [p]: H,
        centerOffset: E - H + mt
      }
    };
  }
}), Cn = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e;
      const {
        placement: n,
        middlewareData: i,
        rects: r,
        initialPlacement: o,
        platform: a,
        elements: l
      } = t, {
        mainAxis: h = !0,
        crossAxis: d = !0,
        fallbackPlacements: c,
        fallbackStrategy: p = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: g = !0,
        ...y
      } = fs(s, t), v = ce(n), _ = ce(o) === o, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = c || (_ || !g ? [Xs(o)] : zc(o));
      !c && m !== "none" && k.push(...Uc(o, g, m, w));
      const $ = [o, ...k], b = await qo(t, y), S = [];
      let D = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (h && S.push(b[v]), d) {
        const A = Fc(n, r, w);
        S.push(b[A[0]], b[A[1]]);
      }
      if (D = [...D, {
        placement: n,
        overflows: S
      }], !S.every((A) => A <= 0)) {
        var I, P;
        const A = (((I = i.flip) == null ? void 0 : I.index) || 0) + 1, F = $[A];
        if (F)
          return {
            data: {
              index: A,
              overflows: D
            },
            reset: {
              placement: F
            }
          };
        let E = (P = D.filter((H) => H.overflows[0] <= 0).sort((H, it) => H.overflows[1] - it.overflows[1])[0]) == null ? void 0 : P.placement;
        if (!E)
          switch (p) {
            case "bestFit": {
              var M;
              const H = (M = D.map((it) => [it.placement, it.overflows.filter((mt) => mt > 0).reduce((mt, kl) => mt + kl, 0)]).sort((it, mt) => it[1] - mt[1])[0]) == null ? void 0 : M[0];
              H && (E = H);
              break;
            }
            case "initialPlacement":
              E = o;
              break;
          }
        if (n !== E)
          return {
            reset: {
              placement: E
            }
          };
      }
      return {};
    }
  };
};
async function Yc(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = ce(e), a = ps(e), l = bn(e) === "y", h = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, c = fs(t, s);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: g
  } = typeof c == "number" ? {
    mainAxis: c,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...c
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * d,
    y: p * h
  } : {
    x: p * h,
    y: m * d
  };
}
const kn = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await Yc(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, Ze = function(s) {
  return s === void 0 && (s = {}), {
    name: "shift",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n,
        placement: i
      } = t, {
        mainAxis: r = !0,
        crossAxis: o = !1,
        limiter: a = {
          fn: (v) => {
            let {
              x: _,
              y: w
            } = v;
            return {
              x: _,
              y: w
            };
          }
        },
        ...l
      } = fs(s, t), h = {
        x: e,
        y: n
      }, d = await qo(t, l), c = bn(ce(i)), p = Uo(c);
      let m = h[p], g = h[c];
      if (r) {
        const v = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", w = m + d[v], k = m - d[_];
        m = Kn(w, m, k);
      }
      if (o) {
        const v = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", w = g + d[v], k = g - d[_];
        g = Kn(w, g, k);
      }
      const y = a.fn({
        ...t,
        [p]: m,
        [c]: g
      });
      return {
        ...y,
        data: {
          x: y.x - e,
          y: y.y - n
        }
      };
    }
  };
};
function Gt(s) {
  return Yo(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function rt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Lt(s) {
  var t;
  return (t = (Yo(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function Yo(s) {
  return s instanceof Node || s instanceof rt(s).Node;
}
function It(s) {
  return s instanceof Element || s instanceof rt(s).Element;
}
function bt(s) {
  return s instanceof HTMLElement || s instanceof rt(s).HTMLElement;
}
function Rr(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof rt(s).ShadowRoot;
}
function ms(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = ht(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Gc(s) {
  return ["table", "td", "th"].includes(Gt(s));
}
function Xi(s) {
  const t = Zi(), e = ht(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function Kc(s) {
  let t = Ne(s);
  for (; bt(t) && !$n(t); ) {
    if (Xi(t))
      return t;
    t = Ne(t);
  }
  return null;
}
function Zi() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function $n(s) {
  return ["html", "body", "#document"].includes(Gt(s));
}
function ht(s) {
  return rt(s).getComputedStyle(s);
}
function xn(s) {
  return It(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Ne(s) {
  if (Gt(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Rr(s) && s.host || // Fallback.
    Lt(s)
  );
  return Rr(t) ? t.host : t;
}
function Go(s) {
  const t = Ne(s);
  return $n(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : bt(t) && ms(t) ? t : Go(t);
}
function Js(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = Go(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = rt(n);
  return i ? t.concat(r, r.visualViewport || [], ms(n) ? n : []) : t.concat(n, Js(n));
}
function Ko(s) {
  const t = ht(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = bt(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Ks(e) !== r || Ks(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Ji(s) {
  return It(s) ? s : s.contextElement;
}
function be(s) {
  const t = Ji(s);
  if (!bt(t))
    return Yt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Ko(t);
  let o = (r ? Ks(e.width) : e.width) / n, a = (r ? Ks(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Xc = /* @__PURE__ */ Yt(0);
function Xo(s) {
  const t = rt(s);
  return !Zi() || !t.visualViewport ? Xc : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Zc(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== rt(s) ? !1 : t;
}
function he(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Ji(s);
  let o = Yt(1);
  t && (n ? It(n) && (o = be(n)) : o = be(s));
  const a = Zc(r, e, n) ? Xo(r) : Yt(0);
  let l = (i.left + a.x) / o.x, h = (i.top + a.y) / o.y, d = i.width / o.x, c = i.height / o.y;
  if (r) {
    const p = rt(r), m = n && It(n) ? rt(n) : n;
    let g = p.frameElement;
    for (; g && n && m !== p; ) {
      const y = be(g), v = g.getBoundingClientRect(), _ = ht(g), w = v.left + (g.clientLeft + parseFloat(_.paddingLeft)) * y.x, k = v.top + (g.clientTop + parseFloat(_.paddingTop)) * y.y;
      l *= y.x, h *= y.y, d *= y.x, c *= y.y, l += w, h += k, g = rt(g).frameElement;
    }
  }
  return Zs({
    width: d,
    height: c,
    x: l,
    y: h
  });
}
function Jc(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = bt(e), r = Lt(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Yt(1);
  const l = Yt(0);
  if ((i || !i && n !== "fixed") && ((Gt(e) !== "body" || ms(r)) && (o = xn(e)), bt(e))) {
    const h = he(e);
    a = be(e), l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function Qc(s) {
  return Array.from(s.getClientRects());
}
function Zo(s) {
  return he(Lt(s)).left + xn(s).scrollLeft;
}
function th(s) {
  const t = Lt(s), e = xn(s), n = s.ownerDocument.body, i = ie(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = ie(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + Zo(s);
  const a = -e.scrollTop;
  return ht(n).direction === "rtl" && (o += ie(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function eh(s, t) {
  const e = rt(s), n = Lt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const h = Zi();
    (!h || h && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function sh(s, t) {
  const e = he(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = bt(s) ? be(s) : Yt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, h = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: h
  };
}
function Lr(s, t, e) {
  let n;
  if (t === "viewport")
    n = eh(s, e);
  else if (t === "document")
    n = th(Lt(s));
  else if (It(t))
    n = sh(t, e);
  else {
    const i = Xo(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Zs(n);
}
function Jo(s, t) {
  const e = Ne(s);
  return e === t || !It(e) || $n(e) ? !1 : ht(e).position === "fixed" || Jo(e, t);
}
function nh(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Js(s).filter((a) => It(a) && Gt(a) !== "body"), i = null;
  const r = ht(s).position === "fixed";
  let o = r ? Ne(s) : s;
  for (; It(o) && !$n(o); ) {
    const a = ht(o), l = Xi(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ms(o) && !l && Jo(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Ne(o);
  }
  return t.set(s, n), n;
}
function ih(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? nh(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((h, d) => {
    const c = Lr(t, d, i);
    return h.top = ie(c.top, h.top), h.right = Me(c.right, h.right), h.bottom = Me(c.bottom, h.bottom), h.left = ie(c.left, h.left), h;
  }, Lr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function rh(s) {
  return Ko(s);
}
function oh(s, t, e) {
  const n = bt(t), i = Lt(t), r = e === "fixed", o = he(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Yt(0);
  if (n || !n && !r)
    if ((Gt(t) !== "body" || ms(i)) && (a = xn(t)), n) {
      const h = he(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = Zo(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Wr(s, t) {
  return !bt(s) || ht(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function Qo(s, t) {
  const e = rt(s);
  if (!bt(s))
    return e;
  let n = Wr(s, t);
  for (; n && Gc(n) && ht(n).position === "static"; )
    n = Wr(n, t);
  return n && (Gt(n) === "html" || Gt(n) === "body" && ht(n).position === "static" && !Xi(n)) ? e : n || Kc(s) || e;
}
const ah = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || Qo, r = this.getDimensions;
  return {
    reference: oh(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function lh(s) {
  return ht(s).direction === "rtl";
}
const ch = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jc,
  getDocumentElement: Lt,
  getClippingRect: ih,
  getOffsetParent: Qo,
  getElementRects: ah,
  getClientRects: Qc,
  getDimensions: rh,
  getScale: be,
  isElement: It,
  isRTL: lh
};
function hh(s, t) {
  let e = null, n;
  const i = Lt(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: h,
      top: d,
      width: c,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !c || !p)
      return;
    const m = vs(d), g = vs(i.clientWidth - (h + c)), y = vs(i.clientHeight - (d + p)), v = vs(h), w = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -v + "px",
      threshold: ie(0, Me(1, l)) || 1
    };
    let k = !0;
    function $(b) {
      const S = b[0].intersectionRatio;
      if (S !== l) {
        if (!k)
          return o();
        S ? o(!1, S) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      k = !1;
    }
    try {
      e = new IntersectionObserver($, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver($, w);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Qi(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, h = Ji(s), d = i || r ? [...h ? Js(h) : [], ...Js(t)] : [];
  d.forEach((_) => {
    i && _.addEventListener("scroll", e, {
      passive: !0
    }), r && _.addEventListener("resize", e);
  });
  const c = h && a ? hh(h, e) : null;
  let p = -1, m = null;
  o && (m = new ResizeObserver((_) => {
    let [w] = _;
    w && w.target === h && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), e();
  }), h && !l && m.observe(h), m.observe(t));
  let g, y = l ? he(s) : null;
  l && v();
  function v() {
    const _ = he(s);
    y && (_.x !== y.x || _.y !== y.y || _.width !== y.width || _.height !== y.height) && e(), y = _, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((_) => {
      i && _.removeEventListener("scroll", e), r && _.removeEventListener("resize", e);
    }), c && c(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const Tn = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: ch,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return qc(s, t, {
    ...i,
    platform: r
  });
}, dh = '[data-toggle="popover"]', Or = "show", Br = "in";
class ct extends at {
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
      const e = u(t.target);
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
    const { trigger: t, id: e, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = u(i), { namespace: a } = this;
      t === "hover" ? o.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && o.on(`${t}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), u(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n } = t || {};
    if (n && (this._triggerEvent = n), e)
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
    const r = u(i), { animation: o, mask: a, onShow: l, onShown: h, trigger: d } = this.options;
    if (r.addClass(Or), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: c } = this;
      r.on(`mouseenter${c}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${c}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(Br), this._resetTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(Br), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(Or), t && this._resetTimer(() => {
        this.destroy();
      }, typeof t == "number" ? t : 0), this._destoryTarget();
    }, e ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), u(document).off(this.namespace), !this._virtual) {
      const { namespace: t } = this;
      u(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Qi(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), Tn(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: d, strategy: c }) => {
        const p = u(e).css({
          position: c,
          left: a,
          top: l
        }), m = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], y = h.arrow;
        y && p.find(".arrow").css({
          left: y.x,
          top: y.y
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", m);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Yi(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, h = a ? e.querySelector(".arrow") : null, d = h ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: l,
      middleware: [
        i ? Cn() : null,
        r ? Ze(typeof r == "object" ? r : void 0) : null,
        o || d ? kn((o || 0) + d) : null,
        a ? Zn({ element: h }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: n,
      content: i,
      headingClass: r = `${t}-heading`,
      titleClass: o = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: h = t,
      closeBtn: d,
      arrow: c
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: h,
      closeBtn: d,
      arrow: c ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof c == "number" ? c : 5}px` },
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var t, e, n;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (n = this._targetElement) == null || n.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = u(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
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
u(document).on(`click${ct.NAMESPACE} mouseenter${ct.NAMESPACE}`, dh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(ct.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ct.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const uh = '[data-toggle="dropdown"]';
class wt extends ct {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu").length || this.hide();
    };
  }
  _getMenuOptions() {
    let { items: t = [] } = this.options;
    return typeof t == "function" && (t = t(this)), {
      items: t,
      nestedTrigger: "hover",
      placement: this.options.placement,
      popup: !1,
      ...this.options.menu
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: X(ta, this._getMenuOptions())
    };
  }
}
wt.NAME = "Dropdown";
wt.DEFAULT = {
  ...ct.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${wt.NAMESPACE} mouseenter${wt.NAMESPACE}`, uh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(wt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    const i = {
      ...t.data(),
      show: !0,
      triggerEvent: s
    };
    if (!i.target && t.is("a")) {
      const r = t.attr("href");
      r && "#0".includes(r[0]) && (i.target = r);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), wt.ensure(t, i), s.preventDefault();
  }
});
class tr extends Q {
  constructor() {
    super(...arguments), this._ref = V();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e } = this.props, n = u(this.triggerElement), i = wt.get(this.triggerElement), r = {
      items: e,
      ...t
    };
    i ? i.setOptions(r) : n.data(r);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = wt.get(this.triggerElement)) == null || t.destroy();
  }
  _getProps(t) {
    const { trigger: e, placement: n } = t;
    return {
      ...super._getProps(t),
      "data-toggle": "dropdown",
      "data-trigger": e,
      "data-placement": n,
      ref: this._ref
    };
  }
}
tr.defaultProps = {
  caret: !0
};
class ta extends qt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  get name() {
    return "menu";
  }
  get menuName() {
    return "dropdown-menu";
  }
  layout() {
    const t = this.ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || Tn(e, t, {
      placement: this.props.placement,
      middleware: [Cn(), Ze(), kn(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
        left: n,
        top: i
      });
    });
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t);
    return {
      ...e,
      className: x("show", e.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
ta.defaultProps = {
  ...qt.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
function ea({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(tr, { type: e, ...n });
}
let sa = class extends O {
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
  handleItemClick(t, e, n, i) {
    n && n.call(i.target, i);
    const { onClickItem: r } = this.props;
    r && r.call(this, { item: t, index: e, event: i });
  }
  beforeRender() {
    var n;
    const t = { ...this.props }, e = (n = t.beforeRender) == null ? void 0 : n.call(this, t);
    return e && Object.assign(t, e), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, e) {
    const { key: n = e, ...i } = t, r = t.dropdown || t.items ? tr : Q;
    return /* @__PURE__ */ f(r, { ...i }, n);
  }
  renderItem(t, e, n) {
    const { itemRender: i, btnProps: r, onClickItem: o } = t, a = { key: n, ...e };
    if (r && Object.assign(a, r), o && (a.onClick = this.handleItemClick.bind(this, a, n, e.onClick)), i) {
      const l = i.call(this, a, X);
      if (Z(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, n);
  }
  render() {
    const t = this.beforeRender(), {
      className: e,
      items: n,
      size: i,
      type: r,
      btnProps: o,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: d,
      afterRender: c,
      beforeDestroy: p,
      ...m
    } = t;
    return /* @__PURE__ */ f(
      "div",
      {
        className: x("btn-group", i ? `size-${i}` : "", e),
        ...m,
        children: [
          n && n.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function fh({
  key: s,
  type: t,
  btnType: e,
  ...n
}) {
  return /* @__PURE__ */ f(sa, { type: e, ...n });
}
let dt = class extends vn {
  beforeRender() {
    const { gap: t, btnProps: e, wrap: n, ...i } = super.beforeRender();
    return i.className = x(i.className, n ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, e, n) {
    const { type: i } = n, r = this.props.btnProps, o = this.isBtnItem(i) ? { btnType: "ghost", ...r } : {};
    o.type && (o.btnType = o.type, delete o.type);
    const a = {
      ...e,
      ...o,
      ...n,
      className: x(`${this.name}-${i}`, e.className, o.className, n.className),
      style: Object.assign({}, e.style, o.style, n.style)
    };
    return i === "btn-group" && (a.btnProps = r), /* @__PURE__ */ f(t, { ...a });
  }
};
dt.ItemComponents = {
  item: Wc,
  dropdown: ea,
  "btn-group": fh
};
dt.ROOT_TAG = "nav";
dt.NAME = "toolbar";
dt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function ph({
  className: s,
  style: t,
  actions: e,
  heading: n,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: h,
  iconClass: d,
  ...c
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ f(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Z(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(Q, { ...a, onClick: l }));
  const m = Z(e) ? e : e ? /* @__PURE__ */ f(dt, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: x("alert", s), style: t, ...c, children: [
    /* @__PURE__ */ f(J, { icon: h, className: x("alert-icon", d) }),
    Z(i) ? i : /* @__PURE__ */ f("div", { className: x("alert-content", r), children: [
      Z(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? m : null
    ] }),
    n ? null : m,
    p,
    o
  ] });
}
function mh(s) {
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
function gh({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return /* @__PURE__ */ f(
    ph,
    {
      className: x("messager", r, t, n === !0 ? mh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var yh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, _h = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ae = (s, t, e) => (yh(s, t, "access private method"), e), Qt, ge;
class er extends z {
  constructor() {
    super(...arguments), _h(this, Qt), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      u(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Ae(this, Qt, ge).call(this, () => {
      this._show = !0, this.render(), Ae(this, Qt, ge).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Ae(this, Qt, ge).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Ae(this, Qt, ge).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Ae(this, Qt, ge).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
Qt = /* @__PURE__ */ new WeakSet();
ge = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
er.NAME = "MessagerItem";
er.Component = gh;
var sr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, re = (s, t, e) => (sr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ws = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ts = (s, t, e, n) => (sr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), na = (s, t, e) => (sr(s, t, "access private method"), e), Ce, Mt, Jn, ia, nr, ra;
const Sn = class oa extends at {
  constructor() {
    super(...arguments), ws(this, Jn), ws(this, nr), ws(this, Ce, void 0), ws(this, Mt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = re(this, Mt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), na(this, Jn, ia).call(this).show();
  }
  hide() {
    var t;
    (t = re(this, Mt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = oa.ensure(e || "body", { key: `messager_${u.guid++}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
Jn = /* @__PURE__ */ new WeakSet();
ia = function() {
  if (re(this, Mt))
    re(this, Mt).setOptions(this.options);
  else {
    const s = na(this, nr, ra).call(this), t = new er(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), Ts(this, Ce, void 0), Ts(this, Mt, void 0);
    }), Ts(this, Mt, t);
  }
  return re(this, Mt);
};
nr = /* @__PURE__ */ new WeakSet();
ra = function() {
  if (re(this, Ce))
    return re(this, Ce);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Ts(this, Ce, e[0])), e[0];
};
Sn.NAME = "messager";
Sn.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
Sn.MULTI_INSTANCE = !0;
let Hd = Sn;
let ir = class extends O {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: h, textY: d, children: c } = t, p = n / 2;
    let { circleWidth: m = 0.2 } = t;
    m < 1 && (m = n * m);
    const g = (n - m) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: h ?? p, y: d ?? p + m / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      c
    ] });
  }
};
ir.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class aa extends z {
}
aa.NAME = "ProgressCircle";
aa.Component = ir;
const Pe = '[droppable="true"]';
class la extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      if (!a || n && !r.closest(n).length || i && i.call(this, t, a) === !1)
        return;
      o.attr("draggable", "true");
      const { draggingClass: l } = this.options;
      l && (this.$element.find(l).removeClass(l), o.addClass(l)), this._setState({ dragging: a });
    }, this._handleDragStart = (t) => {
      const { dragElement: e } = this;
      if (!e) {
        t.preventDefault();
        return;
      }
      const { options: n } = this, { onDragStart: i } = n;
      if (i && i.call(this, t, e) === !1) {
        this._clean();
        return;
      }
      const { $element: r } = this, { target: o, selector: a, droppableClass: l, hasDraggingClass: h } = n, d = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || Pe);
      l && (r.find(l).removeClass(l), d.addClass(l)), h && r.addClass(h), r.find(Pe).removeAttr("droppable"), d.attr("droppable", "true"), this._$targets = d;
    }, this._handleDrag = (t) => {
      var n;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (n = this.options.onDrag) == null || n.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var n;
      const { dragElement: e } = this;
      this._clean(), e && ((n = this.options.onDragEnd) == null || n.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var r, o;
      const { dragElement: e } = this, n = u(t.target).closest(Pe)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(Pe)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(Pe)[0];
      e && (t.preventDefault(), (n = this.options.onDrop) == null || n.call(this, t, this.dragElement, e));
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), u(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t) {
    var r;
    const e = this._state, { dragging: n = e.dragging, dropping: i = e.dropping } = t;
    n === e.dragging && i === e.dropping || (this._state = { dragging: n, dropping: i }, (r = this.options.onChange) == null || r.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: n } = this.options;
    n && u(e).removeClass(n), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: n, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: r } = this;
    if (r) {
      const a = u(r);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const o = this._$targets;
    o && (e && o.removeClass(e), n && o.removeClass(n), this._$targets = void 0);
  }
}
la.NAME = "Draggable";
la.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const vh = '[moveable="true"]';
class ca extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = u(t.target), a = o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: h, hasMovingClass: d } = e;
      h && a.addClass(h), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (t) => {
      this._state && (this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        var e;
        this._raf = 0, this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state);
      }));
    }, this._handleMouseUp = (t) => {
      var e, n;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(t), (e = this.options.onMove) == null || e.call(this, t, this._state), (n = this.options.onMoveEnd) == null || n.call(this, t, this._state), this._clean());
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
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var a;
    t.preventDefault();
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const l = u(e);
      if (this.options.move === !0) {
        const d = l.css("position");
        n.strategy = d === "fixed" || d === "absolute" ? "position" : "transform";
      } else
        n.strategy = "none";
      const h = l.position();
      n = u.extend(n, {
        target: e,
        startX: n.x,
        startY: n.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: h.left,
        startTop: h.top,
        left: h.left,
        top: h.top
      });
    } else if (i) {
      const l = n.x - i.startX, h = n.y - i.startY;
      n = u.extend({}, i, n, {
        deltaX: l,
        deltaY: h,
        left: i.startLeft + l,
        top: i.startTop + h
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n;
    r === "position" ? u(o).css({ left: n.left, top: n.top }) : r === "transform" && u(o).css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`), (a = this.options.onChange) == null || a.call(this, n, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: n } = this;
    if (n) {
      const i = u(n);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
ca.NAME = "Moveable";
ca.DEFAULT = {
  selector: vh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
var Et;
class wh {
  constructor(t = "") {
    R(this, Et, void 0);
    typeof t == "object" ? W(this, Et, t) : W(this, Et, document.appendChild(document.createComment(t)));
  }
  on(t, e, n) {
    N(this, Et).addEventListener(t, e, n);
  }
  once(t, e, n) {
    N(this, Et).addEventListener(t, e, { once: !0, ...n });
  }
  off(t, e, n) {
    N(this, Et).removeEventListener(t, e, n);
  }
  emit(t) {
    return N(this, Et).dispatchEvent(t), t;
  }
}
Et = new WeakMap();
const Hr = /* @__PURE__ */ new Set([
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
class ha extends wh {
  on(t, e, n) {
    super.on(t, e, n);
  }
  off(t, e, n) {
    super.off(t, e, n);
  }
  once(t, e, n) {
    super.once(t, e, n);
  }
  emit(t, e) {
    return typeof t == "string" && (Hr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(ha.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (Hr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const rr = class da extends at {
  async afterInit() {
    const t = await da.loadModule();
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
    return this.Module || (this.Module = await u.getLib("sortablejs")), this.Module;
  }
};
rr.NAME = "Sortable";
rr.DEFAULT = {
  animation: 150
};
let zd = rr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let ua = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const Rn = "```ZUI_STR\n";
var es, se, ke, yt, $e, xe, Ss;
const vr = class vr {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    R(this, xe);
    R(this, es, void 0);
    R(this, se, void 0);
    R(this, ke, void 0);
    R(this, yt, void 0);
    R(this, $e, void 0);
    W(this, es, e), W(this, ke, t ?? ua()), W(this, se, `ZUI_STORE:${N(this, ke)}`), W(this, yt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return N(this, es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (N(this, $e) || W(this, $e, new vr(N(this, ke), "session")), N(this, $e));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = N(this, yt).getItem(Ot(this, xe, Ss).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(Rn))
        return n.substring(Rn.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    N(this, yt).setItem(Ot(this, xe, Ss).call(this, t), typeof e == "string" ? `${Rn}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    N(this, yt).removeItem(Ot(this, xe, Ss).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < N(this, yt).length; e++) {
      const n = N(this, yt).key(e);
      if (n != null && n.startsWith(N(this, se))) {
        const i = N(this, yt).getItem(n);
        typeof i == "string" && t(n.substring(N(this, se).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
es = new WeakMap(), se = new WeakMap(), ke = new WeakMap(), yt = new WeakMap(), $e = new WeakMap(), xe = new WeakSet(), Ss = function(t) {
  return `${N(this, se)}:${t}`;
};
let Qs = vr;
const He = new Qs("DEFAULT");
function bh(s, t = "local") {
  return new Qs(s, t);
}
Object.assign(He, { create: bh });
function Ch(s) {
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
function kh(s) {
  const [t, e, n] = typeof s == "string" ? Ch(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Fr(s, t) {
  return kh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function zr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function $h(s, t, e) {
  s = s % 360 / 360, t = zr(t), e = zr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function xh(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Th(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let fa = class extends O {
  render() {
    const {
      className: t,
      style: e,
      size: n = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: d = 2,
      src: c,
      hueDistance: p = 43,
      saturation: m = 0.4,
      lightness: g = 0.6,
      children: y,
      ...v
    } = this.props, _ = ["avatar", t], w = { ...e, background: o, color: a };
    let k = 32;
    n && (typeof n == "number" ? (w.width = `${n}px`, w.height = `${n}px`, w.fontSize = `${Math.max(12, Math.round(n / 2))}px`, k = n) : (_.push(`size-${n}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? _.push("circle") : r && (typeof r == "number" ? w.borderRadius = `${r}px` : _.push(`rounded-${r}`));
    let $;
    if (c)
      _.push("has-img"), $ = /* @__PURE__ */ f("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const b = Th(l, d);
      if (_.push("has-text", `has-text-${b.length}`), o)
        !a && o && (w.color = Fr(o));
      else {
        const D = h ?? l, I = (typeof D == "number" ? D : xh(D)) * p % 360;
        if (w.background = `hsl(${I},${m * 100}%,${g * 100}%)`, !a) {
          const P = $h(I, m, g);
          w.color = Fr(P);
        }
      }
      let S;
      k && k < 14 * b.length && (S = { transform: `scale(${k / (14 * b.length)})`, whiteSpace: "nowrap" }), $ = /* @__PURE__ */ f("div", { "data-actualSize": k, className: "avatar-text", style: S, children: b });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: x(_),
        style: w,
        ...v,
        children: [
          $,
          y
        ]
      }
    );
  }
};
class pa extends z {
}
pa.NAME = "Avatar";
pa.Component = fa;
class ma extends z {
}
ma.NAME = "BtnGroup";
ma.Component = sa;
const Qn = Symbol("EVENT_PICK");
class or extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = u(t.target), a = i == null ? void 0 : i(t);
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
    const { state: e, className: n } = t, { open: i, disabled: r } = e;
    return x(
      "pick",
      n,
      i && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: e, style: n, attrs: i } = t;
    return {
      id: `pick-${e}`,
      className: this._getClass(t),
      style: n,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(t) {
    const { children: e, state: n } = t;
    return e ?? n.value;
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i } = t;
    if (e)
      if (this._hasInput)
        u(`#${i}`).val(n);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: n });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (n, i) => {
      if (i === Qn)
        return;
      const r = n.target.value;
      r !== e.value && (this._skipTriggerChange = r, this.props.changeState({ value: r }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", Qn), this._skipTriggerChange = !1);
  }
  render(t) {
    return X(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
var ne, _t, zt;
class ga extends O {
  constructor(e) {
    super(e);
    R(this, ne, void 0);
    R(this, _t, void 0);
    R(this, zt, void 0);
    W(this, ne, V()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = N(this, ne)) == null ? void 0 : e.current;
  }
  get container() {
    return N(this, zt);
  }
  _handleClick(e) {
    const { togglePop: n } = this.props, i = u(e.target), r = i.closest("[data-pick-value]");
    if (r.length)
      return e.stopPropagation(), n(!1, { value: `${r.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(e) {
    const { className: n, state: i } = e, { open: r } = i;
    return x(
      "pick-pop",
      n,
      r === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: n,
      style: i,
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    } = e, h = u.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: h,
      ref: N(this, ne),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!N(this, zt)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), W(this, zt, i[0]);
    }
    return N(this, zt);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: n, props: i } = this, { state: r } = i;
    if (!e || !n || !r.open) {
      N(this, _t) && (N(this, _t).call(this), W(this, _t, void 0));
      return;
    }
    N(this, _t) || W(this, _t, Qi(n, e, () => {
      const { placement: o, width: a } = i;
      Tn(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? Cn() : null, Ze(), kn(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var d, c;
        u(e).css({
          left: l,
          top: h,
          width: a === "100%" ? u(n).outerWidth() : void 0
        }), (c = (d = this.props).onLayout) == null || c.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, n;
    this.layout(), u(document).on("click", this._handleDocClick), (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, n;
    (n = (e = this.props).afterRender) == null || n.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    u(document).off("click", this._handleDocClick);
    const e = N(this, _t);
    e && (e(), W(this, _t, void 0)), W(this, zt, void 0), W(this, ne, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Nc(this._render(e), this._getContainer(e));
  }
}
ne = new WeakMap(), _t = new WeakMap(), zt = new WeakMap();
var ya = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Bt = (s, t, e) => (ya(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ln = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, pe = (s, t, e, n) => (ya(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Es, pt, Fe;
let nt = class extends O {
  constructor(t) {
    super(t), Ln(this, Es, void 0), Ln(this, pt, 0), Ln(this, Fe, V()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      Bt(this, pt) && (clearTimeout(Bt(this, pt)), pe(this, pt, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Us(200, (a) => {
        pe(this, pt, a);
      }), pe(this, pt, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await Us(50, (a) => {
        pe(this, pt, a);
      }), pe(this, pt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, pe(this, Es, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Bt(this, Es);
  }
  get pop() {
    return Bt(this, Fe).current;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
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
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (n === i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r() : !i && o && o();
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    if (!!n != !!r) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      n && a ? a() : !n && l && l();
    }
    i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Bt(this, pt) && clearTimeout(Bt(this, pt));
    const t = Bt(this, Fe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: Bt(this, Fe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(De, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Es = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
nt.Trigger = or;
nt.Pop = ga;
nt.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let _a = class extends nt {
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
    const { syncBackground: t, syncBorder: e, syncColor: n, syncValue: i } = this.props, r = this.state.value || "";
    if (t && u(t).css("backgroundColor", r), e && u(e).css("borderColor", r), n && u(n).css("color", r), i) {
      const o = u(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ f(J, { icon: n }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = u.extend({
      color: e.value
    }, n.style), n.className = x("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ f(J, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(J, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
_a.defaultProps = {
  ...nt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class va extends z {
}
va.NAME = "ColorPicker";
va.Component = _a;
const Je = 24 * 60 * 60 * 1e3, U = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), Sh = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(U(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, gs = (s, t = /* @__PURE__ */ new Date()) => U(s).toDateString() === U(t).toDateString(), ti = (s, t = /* @__PURE__ */ new Date()) => U(s).getFullYear() === U(t).getFullYear(), wa = (s, t = /* @__PURE__ */ new Date()) => (s = U(s), t = U(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), qd = (s, t = /* @__PURE__ */ new Date()) => {
  s = U(s), t = U(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Yd = (s, t) => gs(U(t), s), Gd = (s, t) => gs(U(t).getTime() - Je, s), Kd = (s, t) => gs(U(t).getTime() + Je, s), tt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = U(s), Number.isNaN(s.getDay()))
    return e;
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", ti(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Xd = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = tt(s, ti(s) ? n.month : n.full);
  if (gs(s, t))
    return i;
  const r = tt(t, ti(s, t) ? wa(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var ss, ns;
class ba extends O {
  constructor() {
    super(...arguments);
    R(this, ss, V());
    R(this, ns, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(N(this, ss).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let h = 0; h < 24; ++h)
      o.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += n)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: r === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: N(this, ss), children: [
      /* @__PURE__ */ f(
        qt,
        {
          className: l,
          items: o,
          onClickItem: N(this, ns).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        qt,
        {
          className: l,
          items: a,
          onClickItem: N(this, ns).bind(this, "minute")
        }
      )
    ] });
  }
}
ss = new WeakMap(), ns = new WeakMap();
var Eh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, bs = (s, t, e) => (Eh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Cs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ei, si, ni, ii;
const Vr = (s) => {
  if (!s)
    return;
  const t = U(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ca = class extends nt {
  constructor(t) {
    super(t), Cs(this, ei, () => {
      this.toggle(!0);
    }), Cs(this, si, (n) => {
      this.setTime(n.target.value);
    }), Cs(this, ni, (n, i) => {
      this.setTime({ [n]: i });
    }), Cs(this, ii, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = tt(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: h = +a, minute: d = +l } = t;
      e = `${h}:${d}`;
    }
    const n = Vr(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? tt(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = Vr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = e, d = `time-picker-${this.id}`;
    let c;
    return h && !r && l.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: bs(this, ii), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-time" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: bs(this, ei), onChange: bs(this, si) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(ba, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: bs(this, ni) });
  }
};
ei = /* @__PURE__ */ new WeakMap();
si = /* @__PURE__ */ new WeakMap();
ni = /* @__PURE__ */ new WeakMap();
ii = /* @__PURE__ */ new WeakMap();
Ca.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
G.addLang({
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
const Mh = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Je;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, Ur = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => tt(e, t)));
var an;
class Nh extends O {
  constructor() {
    super(...arguments);
    R(this, an, (e) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(e) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: r = G.getLang("weekNames"),
      monthNames: o = G.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: h = [],
      selections: d = []
    } = e, c = [], p = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const D = (i + S) % 7;
      c.push(/* @__PURE__ */ f("div", { className: x("col mini-calendar-day", { "is-weekend": D === 0 || D === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[D] : D }) }, S));
    }
    const { startTime: m, days: g, firstDay: y } = Mh(a, l, i), v = y + g * Je;
    let _ = m;
    const w = [], k = "yyyy-MM-dd", $ = Ur(h, k), b = Ur(d, k);
    for (; _ <= v; ) {
      const S = [];
      for (let D = 0; D < 7; D++) {
        const I = new Date(_), P = I.getDate(), M = tt(I, k), A = I.getDay(), F = wa(I, y), E = x("col mini-calendar-day", {
          active: $.has(M),
          selected: b.has(M),
          "is-first": P === 1,
          "is-in-month": F,
          "is-out-month": !F,
          "is-today": gs(I, n),
          "is-weekend": A === 0 || A === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: E, "data-date": M, children: /* @__PURE__ */ f("a", { className: p, onClick: N(this, an), children: P === 1 && o ? o[I.getMonth()] : I.getDate() }) }, M)
        ), _ += Je;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: S }, _));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: c }),
      w
    ] });
  }
}
an = new WeakMap();
var is, ln;
class jr extends O {
  constructor() {
    super(...arguments);
    R(this, is, V());
    R(this, ln, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(N(this, is).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = r; h <= i; ++h)
      a.push(/* @__PURE__ */ f(Q, { type: "ghost", "data-value": h, active: h === o, className: x(l === h ? "is-current" : ""), onClick: N(this, ln), children: h }, h));
    return /* @__PURE__ */ f("div", { className: n, ref: N(this, is), children: a });
  }
}
is = new WeakMap(), ln = new WeakMap();
var Te, rs, os, as, ls, cs, cn, $a, hn, xa;
class ka extends O {
  constructor(e) {
    super(e);
    R(this, cn);
    R(this, hn);
    R(this, Te, void 0);
    R(this, rs, void 0);
    R(this, os, void 0);
    R(this, as, void 0);
    R(this, ls, void 0);
    R(this, cs, void 0);
    W(this, Te, V()), W(this, rs, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), W(this, os, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), W(this, as, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), W(this, ls, (r) => {
      this.setState({ year: r, select: "day" });
    }), W(this, cs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = Sh(l, r.substring(5).replace("+", ""))), r = tt(l, "yyyy-MM-dd");
      }
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = n ? new Date(n) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((n) => n.select === e ? { select: "day" } : { select: e });
  }
  componentDidMount() {
    u(N(this, Te).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = G.getLang("yearFormat") || "{0}",
      weekNames: o = G.getLang("weekNames"),
      monthNames: a = G.getLang("monthNames"),
      weekStart: l
    } = e, h = i ? new Date(i) : void 0, {
      year: d,
      month: c,
      select: p
    } = n, m = p === "day", g = U(e.minDate || "1970-1-1"), y = U(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: N(this, Te), onClick: N(this, rs), children: [
      Ot(this, cn, $a).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: K(r, d) }),
          /* @__PURE__ */ f(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: N(this, os), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: N(this, as), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Nh,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: d,
            month: c,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        p === "year" ? /* @__PURE__ */ f(
          jr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: N(this, ls)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          jr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: N(this, cs)
          }
        ) : null,
        m ? Ot(this, hn, xa).call(this, e) : null
      ] })
    ] });
  }
}
Te = new WeakMap(), rs = new WeakMap(), os = new WeakMap(), as = new WeakMap(), ls = new WeakMap(), cs = new WeakMap(), cn = new WeakSet(), $a = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(qt, { ...n })) : null;
}, hn = new WeakSet(), xa = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(dt, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(Q, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Dh = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Wn = (s, t, e) => (Dh(s, t, "read from private field"), e ? e.call(s) : t.get(s)), On = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ri, oi, ai;
let Ta = class extends nt {
  constructor(t) {
    super(t), On(this, ri, () => {
      this.toggle(!0);
    }), On(this, oi, (n) => {
      this.setDate(n.target.value);
    }), On(this, ai, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const h = U(n), d = !n || Number.isNaN(h.getDay());
      this.setState({ value: d ? o ? r : "" : tt(h, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = e, d = `date-picker-${this.id}`;
    let c;
    return h && !r && l.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Wn(this, ai), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-calendar" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: Wn(this, ri), onChange: Wn(this, oi) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = G.getLang("today"), clearText: l, menu: h, actions: d, minDate: c, maxDate: p, required: m } = t;
    return /* @__PURE__ */ f(
      ka,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: m ? "" : l,
        menu: h,
        actions: d,
        minDate: c,
        maxDate: p
      }
    );
  }
};
ri = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
Ta.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class Sa extends z {
}
Sa.NAME = "TimePicker";
Sa.Component = Ca;
class Ea extends z {
}
Ea.NAME = "DatePicker";
Ea.Component = Ta;
class Ah extends O {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(ka, { ...e }),
      /* @__PURE__ */ f(ba, { ...n })
    ] });
  }
}
var Ph = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Ie = (s, t, e) => (Ph(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Re = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, li, ci, hi, di, ui;
const qr = (s) => {
  if (!s)
    return;
  const t = U(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ma = class extends nt {
  constructor(t) {
    super(t), Re(this, li, () => {
      this.toggle(!0);
    }), Re(this, ci, (o) => {
      this.setDate(o.target.value);
    }), Re(this, hi, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), Re(this, di, (o, a) => {
      this.setTime({ [o]: a });
    }), Re(this, ui, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: h, dateFormat: d, disabled: c, joiner: p } = this.props;
      if (c)
        return;
      const m = U(o), g = !o || Number.isNaN(m.getDay()), y = tt(m, d), [, v = "00:00"] = this.state.value.split(p);
      this.setState({ value: g ? h ? l : "" : `${y}${p}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let h = "";
    if (typeof t == "string")
      h = t;
    else {
      const [, p = "00:00"] = this.state.value.split(o), [m, g] = p.split(":"), { hour: y = +m, minute: v = +g } = t;
      h = `${y}:${v}`;
    }
    const d = qr(h), c = this.state.value.split(o)[0] || tt(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${c}${o}${tt(d, r)}` : n ? i : "" }, () => {
      !d && e && e(h);
    });
  }
  getTime() {
    const t = qr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: h } = e, d = `datetime-picker-${this.id}`;
    let c;
    return h && !r && l.length ? c = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Ie(this, hi),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-calendar" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: l,
          disabled: o,
          readOnly: a,
          onFocus: Ie(this, li),
          onChange: (p) => {
            Ie(this, ci).call(this, p), Ie(this, ui).call(this, p);
          }
        },
        "input"
      ),
      c ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: x(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: x(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = G.getLang("today"), clearText: l, menu: h, actions: d, minDate: c, maxDate: p, required: m, minuteStep: g } = t, [y, v] = this.getTime() || [], _ = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: m ? "" : l,
        menu: h,
        actions: d,
        minDate: c,
        maxDate: p
      },
      time: {
        hour: y,
        minute: v,
        minuteStep: g,
        onChange: Ie(this, di)
      }
    };
    return /* @__PURE__ */ f(Ah, { ..._ });
  }
};
li = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
hi = /* @__PURE__ */ new WeakMap();
di = /* @__PURE__ */ new WeakMap();
ui = /* @__PURE__ */ new WeakMap();
Ma.defaultProps = {
  ...nt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Na extends z {
}
Na.NAME = "DatetimePicker";
Na.Component = Ma;
const Bn = "show", Yr = "in", Ih = '[data-dismiss="modal"]', ys = class ze extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Ih) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Bn);
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
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  show(t) {
    const { modalElement: e } = this;
    if (this.shown)
      return u(e).css("z-index", `${ze.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Bn, r).css({
      zIndex: `${ze.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(Yr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(Yr), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(Bn), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = u(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const l = { width: "", height: "" };
      typeof e == "object" ? (l.width = e.width, l.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (l.width = e), i.css(l);
    }
    t = t ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = ze.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = ze.query(t)) == null || e.show();
  }
};
ys.NAME = "Modal";
ys.MULTI_INSTANCE = !0;
ys.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
ys.zIndex = 1500;
let de = ys;
u(window).on(`resize.${de.NAMESPACE}`, () => {
  de.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${de.NAMESPACE}`, (s, t) => {
  de.hide(t == null ? void 0 : t.target);
});
class Da extends O {
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
      title: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : Z(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(dt, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? Z(t) ? t : /* @__PURE__ */ f("div", { className: x("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return Z(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: x("modal-footer", e), children: n ? /* @__PURE__ */ f(dt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: x("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Da.defaultProps = { closeBtn: !0 };
class Aa extends O {
  constructor() {
    super(...arguments), this._ref = V(), this.state = {}, this._watchIframeHeight = () => {
      var n, i;
      const t = (i = (n = this._ref.current) == null ? void 0 : n.contentWindow) == null ? void 0 : i.document;
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
    return /* @__PURE__ */ f(
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
Aa.defaultProps = {
  watchHeight: !0
};
var ar = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ft = (s, t, e) => (ar(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Le = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, me = (s, t, e, n) => (ar(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ms = (s, t, e) => (ar(s, t, "access private method"), e), $t, Ve, xt, tn, lr, Ns, fi;
function Rh(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Lh(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, d = await (await fetch(n, {
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "X-ZUI-Modal": "true"
    },
    ...i
  })).text();
  if (e !== "html")
    try {
      const c = JSON.parse(d);
      return {
        title: o,
        ...r,
        ...c
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [d] : {
    title: o,
    ...r,
    body: e === "html" ? /* @__PURE__ */ f(us, { className: "modal-body", html: d, executeScript: l }) : d
  };
}
async function Wh(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(Aa, { url: e, watchHeight: !o })
  };
}
const Oh = {
  custom: Rh,
  ajax: Lh,
  iframe: Wh
}, Hn = "loading", Pa = class ye extends de {
  constructor() {
    super(...arguments), Le(this, tn), Le(this, Ns), Le(this, $t, void 0), Le(this, Ve, void 0), Le(this, xt, void 0);
  }
  get id() {
    return ft(this, Ve);
  }
  get loading() {
    var t;
    return (t = ft(this, $t)) == null ? void 0 : t.classList.contains(Hn);
  }
  get shown() {
    var t;
    return !!((t = ft(this, $t)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = ft(this, $t);
    if (!t) {
      const { options: e } = this;
      let n = ft(this, Ve);
      n || (n = e.id || `modal-${u.guid++}`, me(this, Ve, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      me(this, $t, t);
    }
    return t;
  }
  get $emitter() {
    const t = ft(this, $t);
    return t ? u(t) : this.$element;
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
    const t = ft(this, $t);
    t && (u(t).removeData(this.constructor.KEY).remove(), me(this, $t, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, xt) && clearTimeout(ft(this, xt));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = Oh[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(Hn), r && me(this, xt, window.setTimeout(() => {
      me(this, xt, 0), Ms(this, Ns, fi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await Ms(this, Ns, fi).call(this, this.options.failedTip) : l && typeof l == "object" && await Ms(this, tn, lr).call(this, l), ft(this, xt) && (clearTimeout(ft(this, xt)), me(this, xt, 0)), this.layout(), await Us(100), n.removeClass(Hn), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ye.ensure(n, r), a = `${ye.NAMESPACE}.open${u.guid++}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: h = "__alert", ...d } = t, c = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? p = /* @__PURE__ */ f("div", { className: x("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ f("div", { className: x("modal-body", c.bodyClass), children: p });
    const m = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = G.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && m.push(v);
    }, []);
    let g;
    const y = m.length ? {
      gap: 4,
      items: m,
      onClickItem: ({ item: v, event: _ }) => {
        const w = ye.query(_.target, h);
        g = v.key, (a == null ? void 0 : a(v, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await ye.open({
      key: h,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      backdrop: "static",
      custom: { footerActions: y, ...c },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ye.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
$t = /* @__PURE__ */ new WeakMap();
Ve = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakSet();
lr = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, Gs(
      /* @__PURE__ */ f(Da, { ...s }),
      this.modalElement
    );
  });
};
Ns = /* @__PURE__ */ new WeakSet();
fi = function(s) {
  if (s)
    return Ms(this, tn, lr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Pa.DEFAULT = {
  ...de.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Bh = Pa;
const Hh = '[data-toggle="modal"]';
class pi extends at {
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
    } = this.options, n = e, i = this.$element.attr("href") || "";
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), !n.key && n.id && (n.key = n.id), n;
  }
  _initModal() {
    const t = this._getBuilderOptions();
    let e = this._modal;
    if (e)
      return e.setOptions(t), e;
    if (t.type === "static") {
      const n = this._getStaticModalElement();
      if (!n)
        return;
      e = de.ensure(n, t);
    } else
      e = Bh.ensure(this.container, t);
    return this._modal = e, e.on("destroyed", () => {
      this._modal = void 0;
    }), e;
  }
  _getStaticModalElement() {
    let t = this.options.target;
    if (!t) {
      const { $element: e } = this;
      if (e.is("a")) {
        const n = e.attr("href");
        n != null && n.startsWith("#") && (t = n);
      }
    }
    return this.container.querySelector(t || ".modal");
  }
}
pi.NAME = "ModalTrigger";
u(document).on(`click${pi.NAMESPACE}`, Hh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = pi.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let Ia = class extends vn {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = x(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Ia.NAME = "nav";
class Ra extends z {
}
Ra.NAME = "Nav";
Ra.Component = Ia;
function Qe(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Fh({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Qe(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : K(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : K(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(Q, { type: e, ...a });
}
function zh({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Qe(i, e);
  return n = typeof n == "function" ? n(a) : K(n, a), /* @__PURE__ */ f(Bo, { ...o, children: [
    r,
    n
  ] });
}
function Vh({
  key: s,
  type: t,
  btnType: e,
  count: n = 12,
  pagerInfo: i,
  onClick: r,
  linkCreator: o,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(Q, { type: e, ...l })), d = (p, m) => {
    const g = [];
    for (let y = p; y <= m; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = Qe(i, y);
      o && (l.url = typeof o == "function" ? o(v) : K(o, v)), g.push(/* @__PURE__ */ f(Q, { type: e, ...l, onClick: r }));
    }
    return g;
  };
  let c = [];
  return c = [...d(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= n ? c = [...c, ...d(2, i.pageTotal)] : i.page < n - 2 ? c = [...c, ...d(2, n - 2), h(), ...d(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - n + 3 ? c = [...c, h(), ...d(i.pageTotal - n + 3, i.pageTotal)] : c = [...c, h(), ...d(i.page - Math.ceil((n - 4) / 2), i.page + Math.floor((n - 4) / 2)), h(), ...d(i.pageTotal, i.pageTotal)]), c;
}
function Uh({
  type: s,
  pagerInfo: t,
  linkCreator: e,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || n.map((h) => {
    const d = { ...t, recPerPage: h };
    return {
      ...r,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof e == "function" ? e(d) : K(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : K(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(ea, { type: "dropdown", dropdown: i, ...o });
}
function jh({
  key: s,
  page: t,
  type: e,
  btnType: n,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const d = { ...h };
  let c;
  const p = (y) => {
    var v;
    c = Number((v = y.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, m = (y) => {
    if (!(y != null && y.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = Qe(i, c);
    a && !a({ info: v, event: y }) || (y.target.href = d.url = typeof l == "function" ? l(v) : K(l, v));
  }, g = Qe(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : K(l, g), /* @__PURE__ */ f("div", { className: x("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Q, { type: n, ...d, onClick: m })
  ] });
}
let En = class extends dt {
  get pagerInfo() {
    const { page: t = 1, recTotal: e = 0, recPerPage: n = 10 } = this.props;
    return { page: +t, recTotal: +e, recPerPage: +n, pageTotal: n ? Math.ceil(e / n) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n), r = e.type || "item", { pagerInfo: o } = this;
    return r === "info" ? Object.assign(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && Object.assign(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
En.NAME = "pager";
En.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
En.ItemComponents = {
  ...dt.ItemComponents,
  link: Fh,
  info: zh,
  nav: Vh,
  "size-menu": Uh,
  goto: jh
};
class La extends z {
}
La.NAME = "Pager";
La.Component = En;
class Wa extends z {
}
Wa.NAME = "Pick";
Wa.Component = nt;
var Se, hs;
class Oa extends O {
  constructor(e) {
    super(e);
    R(this, Se, void 0);
    R(this, hs, void 0);
    this._searchInput = V(), this._measure = V(), W(this, Se, (n) => {
      var r, o;
      const i = n.target.value;
      (o = (r = this.props).onSearch) == null || o.call(r, i), this.setState({ search: i }), n.stopPropagation();
    }), W(this, hs, (n) => {
      var i, r;
      n.stopPropagation(), (r = (i = this.props).onClear) == null || r.call(i), this.setState({ search: "" }, () => this.focus());
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
      const { current: n } = this._measure, { current: i } = this._searchInput;
      if (n && i) {
        const r = u(i).parent();
        r.width(Math.ceil(Math.min(n.clientWidth, r.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(e, n) {
    const { placeholder: i, inline: r } = e, { search: o } = n, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: N(this, hs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: N(this, Se),
          onInput: N(this, Se),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Se = new WeakMap(), hs = new WeakMap();
class qh extends or {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(Zt, { content: t.text }) }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, t.value);
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
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Oa,
      {
        inline: !0,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n }, search: i, placeholder: r, children: o } = this.props, a = n && i;
    return !a && !e.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        e.map(this._renderSelection),
        a ? this._renderSearch(t) : null
      ] }, "selections"),
      o,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, id: i, valueList: r, emptyValue: o } = t;
    if (e)
      if (this.hasInput)
        u(`#${i}`).val(n);
      else {
        const a = r.length ? r : [o];
        return /* @__PURE__ */ f("select", { id: i, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, style: { display: "none" }, children: a.map((l) => /* @__PURE__ */ f("option", { value: l, children: l }, l)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    u(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = u(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", Qn), this._skipTriggerChange = !1;
    }
  }
}
class Yh extends or {
  constructor() {
    super(...arguments), this._search = V(), this._handleDeselectClick = (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    };
  }
  _getSearchPlaceholder() {
    const { searchHint: t, state: { value: e, selections: n } } = this.props;
    let i = t;
    if (i === void 0) {
      const r = n.find((o) => o.value === e);
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
    return /* @__PURE__ */ f(
      Oa,
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
    const { children: e, state: { selections: n = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [h] = n, d = i && o;
    let c;
    d ? c = this._renderSearch(t) : h ? c = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: /* @__PURE__ */ f(Zt, { content: h.text }) }, "main") : c = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const p = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      c,
      e,
      p,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
const Gh = (s, t, e = "is-match") => s.reduce((n, i) => [...n].reduce((r, o) => {
  if (typeof o != "string")
    return r.push(o), r;
  const a = o.toLowerCase().split(i);
  if (a.length === 1)
    return r.push(o), r;
  let l = 0;
  return a.forEach((h, d) => {
    d && (r.push(/* @__PURE__ */ f("span", { class: e, children: o.substring(l, l + i.length) })), l += i.length), r.push(o.substring(l, l + h.length)), l += h.length;
  }), r;
}, []), t);
var dn, Ba, un, Ha, ds;
class Kh extends ga {
  constructor() {
    super(...arguments);
    R(this, dn);
    R(this, un);
    R(this, ds, void 0);
    this._menu = V(), W(this, ds, ({ item: e }) => {
      const n = e.key, { multiple: i, onToggleValue: r, onSelect: o, togglePop: a } = this.props;
      i ? r(n) : (o(n), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const e = this.element;
    e && u(e).on("mouseenter.picker.zui", ".menu-item", (n) => {
      const i = u(n.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const e = this.element;
    e && u(e).off(".picker.zui");
  }
  setHoverItem(e) {
    this.props.changeState({ hoverItem: e }, () => {
      const n = Ot(this, dn, Ba).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(e) {
    return x(
      super._getClass(e),
      "picker-menu"
    );
  }
  _renderPop(e) {
    const { menu: n } = e;
    return /* @__PURE__ */ f(
      qt,
      {
        ref: this._menu,
        className: "picker-menu-list",
        items: Ot(this, un, Ha).call(this),
        onClickItem: N(this, ds),
        ...n
      }
    );
  }
}
dn = new WeakSet(), Ba = function() {
  const e = this.element;
  if (e)
    return u(e).find(".menu-item>a.hover");
}, un = new WeakSet(), Ha = function() {
  const { selections: e, items: n, hoverItem: i, search: r } = this.props.state, o = new Set(e.map((d) => d.value));
  let a = !1;
  const l = u.unique(r.toLowerCase().split(" ").filter((d) => d.length)), h = n.reduce((d, c) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: y,
      content: v,
      ..._
    } = c;
    return p === i && (a = !0), g && d.push({
      key: p,
      active: o.has(p),
      text: v ? null : typeof g == "string" ? Gh(l, [g]) : /* @__PURE__ */ f(Zt, { content: g }),
      className: x(y, { hover: p === i }),
      "data-value": p,
      content: v,
      ..._
    }), d;
  }, []);
  return !a && h.length && (h[0].className = x(h[0].className, "hover")), h;
}, ds = new WeakMap();
let cr = class extends nt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = V(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((h) => !a.has(h));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (r) => {
      const o = this.formatValueList(r), a = this.props.multiple ? [...this.valueList, ...o] : o[0];
      return this.setValue(a);
    }, this.isSelected = (r) => this.valueList.includes(r), u.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: n = "" } = this.props;
    this._emptyValueSet = new Set(n.split(e));
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = new Set(i.map((o) => o.value));
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value);
    }
  }
  get value() {
    return this.state.value;
  }
  get valueList() {
    return this.formatValueList(this.state.value);
  }
  get firstEmptyValue() {
    return this._emptyValueSet.values().next().value;
  }
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e, searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (typeof e == "function") {
      if (await Us(n || 500), this._abort !== t || (r = await e(i, { signal: t.signal }), this._abort !== t))
        return r;
    } else if (i.length) {
      const o = u.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      r = e, o.length && (r = e.reduce((a, l) => {
        const {
          value: h,
          keys: d = "",
          text: c
        } = l;
        return o.every((p) => h.toLowerCase().includes(p) || d.toLowerCase().includes(p) || typeof c == "string" && c.toLowerCase().includes(p)) && a.push(l), a;
      }, []));
    } else
      r = e;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = new Map(r.map((a) => [a.value, a]));
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, t || i.search !== e.search || n.items !== i.items) {
      const a = await this.load();
      r.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, i.items = n.items, i.search = e.search;
    }
    (t || i.value !== e.value) && (i.value = e.value);
    const o = r.items;
    n.required && !n.multiple && this.isEmptyValue(this.state.value) && Array.isArray(o) && o.length && (r.value = o[0].value), Object.keys(r).length && await this.changeState(r);
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
    return t.Trigger || (t.multiple ? qh : Yh);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = u.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = u.unique(t)), e.filter((n) => !this.isEmptyValue(n));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = new Set((Array.isArray(r) ? r : this.state.items).map((l) => String(l.value)));
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    if (e) {
      const r = this._trigger.current;
      r && (r._skipTriggerChange = i);
    }
    return this.changeState({ value: i });
  }
};
cr.defaultProps = {
  ...nt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
cr.Pop = Kh;
class Fa extends z {
}
Fa.NAME = "Picker";
Fa.Component = cr;
class za extends at {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: n } = this.options;
      n === 0 ? e() : setTimeout(e, n);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, n = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: r, arrow: o, offset: a } = this.options;
    return i && n.middleware.push(Cn()), r && n.middleware.push(r === !0 ? Ze() : Ze(r)), o && n.middleware.push(Zn({ element: this.$arrow[0] })), a && n.middleware.push(kn(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Qi(t, e, () => {
      Tn(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !Zn || !o.arrow)
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
    const e = u(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    e.addClass(n), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
      u(i.target).data("dismiss") === "popovers" && this.hide();
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
    const e = u('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    e.on("click", () => {
      this.hide();
    }), this.$target.parent().append(e), this.$mask = e;
  }
  initArrow() {
    const { arrow: t } = this.options;
    t && (this.$arrow = u('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
}
za.NAME = "Popovers";
za.DEFAULT = {
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
var hr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, gt = (s, t, e) => (hr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Jt = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ds = (s, t, e, n) => (hr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Gr = (s, t, e) => (hr(s, t, "access private method"), e), As, Ps, oe, mi, Is, Rs, Ls, gi;
let Va = class extends O {
  constructor(t) {
    super(t), Jt(this, Ls), Jt(this, As, void 0), Jt(this, Ps, V()), Jt(this, oe, 0), Jt(this, mi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Jt(this, Is, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (Gr(this, Ls, gi).call(this), Ds(this, oe, window.setTimeout(() => {
          r(i, e), Ds(this, oe, 0);
        }, this.props.delay || 0)));
      });
    }), Jt(this, Rs, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Ds(this, As, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return gt(this, As);
  }
  get input() {
    return gt(this, Ps).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    Gr(this, Ls, gi).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: h, placeholder: d, mergeIcon: c, searchIcon: p, clearIcon: m } = t, { focus: g, value: y } = e, { id: v } = this, _ = typeof y != "string" || !y.trim().length;
    let w, k, $;
    return p && ($ = p === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(J, { icon: p })), !c && p && (w = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: $ }, "prefix")), m && !_ ? k = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: gt(this, mi),
        children: m === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(J, { icon: m })
      }
    ) : c && p && (k = $), k && (k = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ f("div", { class: x("search-box input-control", r, { focus: g, empty: _, "has-prefix-icon": w, "has-suffix-icon": k }), style: o, children: [
      w,
      /* @__PURE__ */ f(
        "input",
        {
          ref: gt(this, Ps),
          id: v,
          type: "text",
          class: x("form-control", i, { "rounded-full": h }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: y,
          onInput: gt(this, Is),
          onChange: gt(this, Is),
          onFocus: gt(this, Rs),
          onBlur: gt(this, Rs)
        }
      ),
      k
    ] });
  }
};
As = /* @__PURE__ */ new WeakMap();
Ps = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
mi = /* @__PURE__ */ new WeakMap();
Is = /* @__PURE__ */ new WeakMap();
Rs = /* @__PURE__ */ new WeakMap();
Ls = /* @__PURE__ */ new WeakSet();
gi = function() {
  gt(this, oe) && clearTimeout(gt(this, oe)), Ds(this, oe, 0);
};
Va.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class Ua extends z {
}
Ua.NAME = "SearchBox";
Ua.Component = Va;
class ja extends z {
}
ja.NAME = "Toolbar";
ja.Component = dt;
const Xh = '[data-toggle="tooltip"]';
class Nt extends ct {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: x("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Nt.NAME = "Tooltip";
Nt.DEFAULT = {
  ...ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Nt.NAMESPACE} mouseenter${Nt.NAMESPACE}`, Xh, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Nt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Nt.ensure(t, { show: Nt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
function Zh({
  type: s,
  component: t,
  className: e,
  children: n,
  content: i,
  style: r,
  attrs: o,
  url: a,
  disabled: l,
  active: h,
  icon: d,
  text: c,
  target: p,
  trailingIcon: m,
  hint: g,
  checked: y,
  actions: v,
  show: _,
  level: w = 0,
  items: k,
  ...$
}) {
  const b = Array.isArray(v) ? { items: v } : v;
  return b && (b.btnProps || (b.btnProps = { size: "sm" }), b.className = x("tree-actions not-nested-toggle", b.className)), /* @__PURE__ */ f(
    "div",
    {
      className: x("tree-item-content", e, { disabled: l, active: h }),
      title: g,
      "data-target": p,
      style: { paddingLeft: `calc(${w} * var(--tree-indent, 20px))` },
      "data-level": w,
      ...$,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${k ? " state" : ""}`, children: k ? /* @__PURE__ */ f("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(J, { icon: d, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: r, ...o, children: c }) : /* @__PURE__ */ f("span", { class: "text", style: r, ...o, children: c }),
        /* @__PURE__ */ f(Zt, { content: i }),
        n,
        b ? /* @__PURE__ */ f(dt, { ...b }) : null,
        /* @__PURE__ */ f(J, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
let dr = class extends wn {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t), { collapsedIcon: n, expandedIcon: i, normalIcon: r, itemActions: o } = this.props;
    return {
      collapsedIcon: n,
      expandedIcon: i,
      normalIcon: r,
      itemActions: o,
      ...e
    };
  }
  getItemRenderProps(t, e, n) {
    const i = super.getItemRenderProps(t, e, n), { collapsedIcon: r, expandedIcon: o, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? o : r : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(e) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: e } = this.props;
    return e && (t.className = x(t.className, "tree-hover")), t;
  }
};
dr.ItemComponents = {
  item: Zh
};
dr.NAME = "tree";
class qa extends z {
}
qa.NAME = "Tree";
qa.Component = dr;
class ur extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? pc(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const p = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(p);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = u(`<span class="text-primary">${e}</span>`);
    if (n) {
      const c = u(`<i class="icon icon-${n} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = u(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${t}"></label>`).append(h).append(l), this.bindDragEvent();
    const d = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...d);
  }
  bindDragEvent() {
    this.$label.on("dragover", (t) => {
      t.preventDefault(), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary")), this.$label.hasClass("dragover") || this.$label.addClass("dragover");
    }).on("dragleave", (t) => {
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
    }).on("drop", (t) => {
      var n;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((n = t.dataTransfer) == null ? void 0 : n.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: n } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const r = i.target.files;
      if (!r)
        return;
      const o = [...r];
      this.addFileItem(o);
    }), n && this.$input.prop("accept", n);
  }
  addFile(t) {
    const { multiple: e, onSizeChange: n } = this.options;
    e || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = t.size), this.renameMap.set(t.name, t.name), this.fileMap.set(t.name, t), this.dataTransfer.items.add(t), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += t.size, n == null || n(this.currentBytes);
  }
  renameDuplicatedFile(t) {
    if (!this.fileMap.has(t.name))
      return t;
    const e = t.name.lastIndexOf(".");
    if (e === -1)
      return this.renameDuplicatedFile(new File([t], `${t.name}(1)`));
    const n = t.name.substring(0, e), i = t.name.substring(e);
    return this.renameDuplicatedFile(new File([t], `${n}(1)${i}`));
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (!e)
      return t;
    const n = e.replace(/\s/g, "").split(","), i = [], r = [], o = [];
    return n.forEach((a) => {
      a.endsWith("/*") ? r.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && o.push(a);
    }), t.filter((a) => i.includes(a.type) || r.some((l) => a.type.startsWith(l)) || o.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: n, exceededSizeHint: i, exceededCountHint: r, onAdd: o } = this.options;
    if (e) {
      const h = [];
      for (let d of t) {
        if (n && this.fileMap.size >= n)
          return o == null || o(h), alert(r);
        if (this.currentBytes + d.size > this.limitBytes)
          return o == null || o(h), alert(i);
        d = this.renameDuplicatedFile(d);
        const c = this.createFileItem(d);
        this.itemMap.set(d.name, c), this.$list.append(c), h.push(d);
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
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const n = this.fileMap.get(e);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var r, o;
    const n = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), n && (t = this.fileMap.get(n) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (o = (r = this.options).onRename) == null || o.call(r, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(t) {
    const { showIcon: e } = this.options;
    return this.addFile(t), u('<li class="file-item my-1 flex items-center gap-2"></li>').append(e ? this.fileIcon() : null).append(this.createFileInfo(t)).append(this.createRenameContainer(t));
  }
  fileIcon() {
    const { icon: t } = this.options;
    return u(`<i class="icon icon-${t}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: t, renameText: e, renameIcon: n, renameClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Nt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Nt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${fc(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: n, showSize: i } = this.options, r = u('<div class="file-info flex items-center gap-2"></div>');
    return r.append(this.fileName(t.name)), i && r.append(this.fileSize(t.size)), e && r.append(
      this.fileRenameBtn().on("click", (o) => {
        r.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(o.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && r.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), r;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: n, duplicatedHint: i } = this.options, r = u('<div class="input-group input-rename-container hidden"></div>'), o = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const c = r.closest(".file-item"), p = c.find(".file-name");
        if (p.html() === o.val()) {
          r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), p.html(o.val());
      } else
        d.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), c = d.find(".file-name");
      if (c.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), c.html(o.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(h);
  }
}
ur.NAME = "Upload";
ur.DEFAULT = {
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
class Ya extends ur {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: n, uploadIcon: i, totalCountText: r } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const o = u(`<label for="${t}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      o.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(o), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(r.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(t) {
    const { accept: e } = this.options;
    if (e === "image/*")
      return t.filter((i) => i.type.includes("image"));
    const n = e.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return t.filter((i) => n.includes(i.type));
  }
  createFileItem(t) {
    const e = super.createFileItem(t).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(t, e);
    const { deleteBtn: n, showSize: i } = this.options;
    return n && e.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(t.name))
    ), i && e.append(
      this.fileSize(t.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), e;
  }
  setImageUrl(t, e) {
    const n = new FileReader();
    n.onload = () => {
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})` }).prependTo(e);
    }, n.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const r = u(i.target).closest(".file-item");
      r.find(".file-info").addClass("hidden"), r.find(".input-rename-container").removeClass("hidden");
      const o = r.find("input")[0];
      o.focus(), o.value.lastIndexOf(".") !== -1 && o.setSelectionRange(0, o.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, n = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const r = n.closest(".file-item").find(".file-name");
        if (r.html() === n.val()) {
          n.addClass("hidden"), r.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(n.val()))
          return alert(e);
        this.renameFileItem(t, n.val()), n.addClass("hidden"), r.html(n.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && n.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = n.closest(".file-item").find(".file-name");
      if (i.html() === n.val()) {
        n.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(n.val()))
        return alert(e);
      this.renameFileItem(t, n.val()), n.addClass("hidden"), i.html(n.val()).closest(".file-info").removeClass("hidden");
    });
    return n;
  }
}
Ya.NAME = "UploadImgs";
Ya.DEFAULT = {
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
class fr extends wt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
fr.NAME = "ContextMenu";
fr.DEFAULT = {
  ...wt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let Jh = class extends O {
  constructor() {
    super(...arguments), this._onDragStart = (t) => {
      var i, r, o;
      const e = t.target.closest(".dashboard-block");
      if (!e)
        return;
      const n = e.getBoundingClientRect();
      if (t.clientY - n.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = t.dataTransfer) == null || i.setData("application/id", this.props.id), (o = (r = this.props).onDragStart) == null || o.call(r, t);
    }, this._onDragEnd = (t) => {
      var e, n;
      this.setState({ dragging: !1 }), (n = (e = this.props).onDragEnd) == null || n.call(e, t);
    };
  }
  render() {
    const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: h } = this.props, { dragging: d } = this.state;
    return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": n,
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
            i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(us, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const Kr = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), ks = "Dashboard:Block.cache:";
let Ga = class extends O {
  constructor(t) {
    super(t), this._ref = V(), this._loadTimer = 0, this.map = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._handleDragStart = (e) => {
      var i;
      const n = (i = e.dataTransfer) == null ? void 0 : i.getData("application/id");
      n !== void 0 && (this.setState({ dragging: n }), console.log("handleBlockDragStart", e));
    }, this._handleDragEnd = (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    }, this._handleMenuClick = (e) => {
      const n = e.target.closest(".dashboard-block");
      if (!n)
        return;
      const i = n.dataset.id;
      if (!i)
        return;
      const r = this.getBlock(i);
      if (!r || !r.menu)
        return;
      const { menu: o } = r, { onClickMenu: a } = this.props;
      fr.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var h;
            ((h = l.item.data) == null ? void 0 : h.type) === "refresh" && this.load(i), a && a.call(this, l, r);
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
    const { id: n } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === n);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && o.needLoad && (t.needLoad = !1), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
  }
  delete(t) {
    const { blocks: e } = this.state, n = e.findIndex((i) => i.id === t);
    n < 0 || (e.splice(n, 1), this.setState({ blocks: e }));
  }
  add(t) {
    t = Array.isArray(t) ? t : [t], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(t)] });
  }
  load(t, e) {
    const n = this.getBlock(t);
    if (!n || n.loading || (e = e || n.fetch, typeof e == "string" ? e = { url: e } : typeof e == "function" && (e = e(n.id, n)), !e || !e.url))
      return;
    const { url: i, ...r } = e;
    this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      const o = K(i, n);
      try {
        const a = await fetch(K(o, n), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...r
        });
        if (!a.ok)
          throw new Error(`Server response: ${a.status} ${a.statusText}}`);
        const l = await a.text();
        this.update({ id: t, loading: !1, content: { html: l } }, () => {
          this._setCache(t, l);
        });
      } catch (a) {
        const l = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          a.message
        ] });
        this.update({ id: t, loading: !1, content: l });
      }
    });
  }
  reset(t) {
    this.setState({ blocks: this._initBlocks(t) });
  }
  loadNext() {
    const { blocks: t } = this.state;
    let e = "";
    for (const n of t) {
      if (n.loading)
        return;
      if (!n.visible && this._isVisible(n.id))
        return this.update({ id: n.id, visible: !0 });
      if (n.needLoad && n.visible) {
        e = n.id;
        break;
      }
    }
    e.length && requestAnimationFrame(() => this.load(e));
  }
  _isVisible(t) {
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: n } = this.props;
    if (n)
      try {
        typeof n == "string" ? He.set(`${ks}${n}:${t}`, e) : He.session.set(`${ks}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? He.get(`${ks}${e}:${t}`) : He.session.get(`${ks}${t}`);
    if (n)
      return { html: n };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: n } = this.props;
    return t.map((r) => {
      const {
        id: o,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: d = e,
        menu: c = n,
        content: p,
        ...m
      } = r, [g, y] = this._getBlockSize(a);
      return {
        id: `${o}`,
        width: g,
        height: y,
        left: l,
        top: h,
        fetch: d,
        menu: c,
        content: p ?? this._getCache(`${o}`),
        loading: !1,
        needLoad: !!d,
        ...m
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: n } = this.props;
    return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    this.map.clear();
    let t = 0;
    const { blocks: e } = this.state;
    return e.forEach((n) => {
      this._layoutBlock(n);
      const [, i, , r] = this.map.get(n.id);
      t = Math.max(t, i + r);
    }), { blocks: e, height: t };
  }
  _layoutBlock(t) {
    const e = this.map, { id: n, left: i, top: r, width: o, height: a } = t;
    if (i < 0 || r < 0) {
      const [l, h] = this._appendBlock(o, a, i, r);
      e.set(n, [l, h, o, a]);
    } else
      this._insertBlock(n, [i, r, o, a]);
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    for (const [n, i] of this.map.entries())
      if (n !== e && Kr(i, t))
        return !1;
    return !0;
  }
  _insertBlock(t, e) {
    this.map.set(t, e);
    for (const [n, i] of this.map.entries())
      n !== t && Kr(i, e) && (i[1] = e[1] + e[3], this._insertBlock(n, i));
  }
  _appendBlock(t, e, n, i) {
    if (n >= 0 && i >= 0) {
      if (this._canPlace([n, i, t, e]))
        return [n, i];
      i = -1;
    }
    let r = n < 0 ? 0 : n, o = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([r, o, t, e])) {
        a = !0;
        break;
      }
      n < 0 ? (r += 1, r + t > l && (r = 0, o += 1)) : o += 1;
    }
    return [r, o];
  }
  componentDidMount() {
    this.loadNext(), u(window).on("scroll", this.tryLoadNext);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), u(window).off("scroll", this.tryLoadNext);
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, r = this.map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: t.map((o, a) => {
          const { id: l, menu: h, content: d, title: c } = o, [p, m, g, y] = r.get(l) || [0, 0, o.width, o.height];
          return /* @__PURE__ */ f(
            Jh,
            {
              id: l,
              index: a,
              left: `${100 * p / i}%`,
              top: n * m,
              width: `${100 * g / i}%`,
              height: n * y,
              content: d,
              title: c,
              onDragStart: this._handleDragStart,
              onDragEnd: this._handleDragEnd,
              onMenuBtnClick: h ? this._handleMenuClick : void 0
            },
            o.id
          );
        })
      }
    ) });
  }
};
Ga.defaultProps = {
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
class Ka extends z {
}
Ka.NAME = "Dashboard";
Ka.Component = Ga;
var Vt, Ut;
class Xr extends O {
  constructor(e) {
    super(e);
    R(this, Vt, void 0);
    R(this, Ut, void 0);
    W(this, Vt, 0), W(this, Ut, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (N(this, Vt) && cancelAnimationFrame(N(this, Vt)), W(this, Vt, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), W(this, Vt, 0);
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
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, h = (o === "horz" ? n.clientX - r.left : n.clientY - r.top) - this.barSize / 2;
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
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: i = 12, minBarSize: r = 3 * i } = this.props;
    return Math.max(Math.round(e * e / n), r);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (W(this, Ut, typeof e == "string" ? document : e.current), N(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), N(this, Ut) && N(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: n } = this.props;
    n && n(e, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: e,
      type: n,
      size: i = 12,
      className: r,
      style: o,
      left: a,
      top: l,
      bottom: h,
      right: d
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: d,
      ...o
    }, y = {};
    return n === "horz" ? (g.height = i, g.width = e, y.width = this.barSize, y.left = Math.round(Math.min(c, p) * (e - y.width) / c)) : (g.width = i, g.height = e, y.height = this.barSize, y.top = Math.round(Math.min(c, p) * (e - y.height) / c)), /* @__PURE__ */ f(
      "div",
      {
        className: x("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": m
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
Vt = new WeakMap(), Ut = new WeakMap();
const en = /* @__PURE__ */ new Map(), sn = [];
function Xa(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && en.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  en.set(e, s), t != null && t.buildIn && !sn.includes(e) && sn.push(e);
}
function Wt(s, t) {
  Xa(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: i, ...r } = s;
    return {
      ...r,
      defaultOptions: { ...i, ...n }
    };
  };
  return e.plugin = s, e;
}
function Za(s) {
  return en.delete(s);
}
function Qh(s) {
  if (typeof s == "string") {
    const t = en.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function Ja(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = Qh(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && Ja(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function td(s = [], t = !0) {
  return t && sn.length && s.unshift(...sn), s != null && s.length ? Ja([], s, /* @__PURE__ */ new Set()) : [];
}
function Qa() {
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
function ed(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function Zr(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function Fn(s, t = !1) {
  if (!s.list.length)
    return;
  if (s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const n = s.width - s.totalWidth;
    if (!t && n > 0 || t && n !== 0) {
      const i = s.flexList.length ? s.flexList : s.list, r = i.reduce((o, a) => o + (a.flex || 1), 0);
      i.forEach((o) => {
        const a = Math[n < 0 ? "max" : "min"](n, Math.ceil(n * ((o.flex || 1) / r)));
        o.realWidth = o.width + a;
      });
    }
  }
  let e = 0;
  s.list.forEach((n) => {
    n.realWidth || (n.realWidth = n.width), n.left = e, e += n.realWidth;
  });
}
function sd(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (w) => (typeof w == "function" && (w = w.call(s)), w = Zr(w, 0), w < 1 && (w = Math.round(w * n)), w), d = {
    width: 0,
    list: [],
    flexList: [],
    widthSetting: 0,
    totalWidth: 0
  }, c = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: h(a)
  }, p = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, m = [], g = {};
  let y = !1;
  const v = [], _ = {};
  if (e.forEach((w) => {
    const { colTypes: k, onAddCol: $ } = w;
    k && Object.entries(k).forEach(([b, S]) => {
      _[b] || (_[b] = []), _[b].push(S);
    }), $ && v.push($);
  }), t.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: k = "", name: $ } = w, b = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...w,
      type: k
    }, S = {
      name: $,
      type: k,
      setting: b,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, D = _[k];
    D && D.forEach((H) => {
      const it = typeof H == "function" ? H.call(s, b) : H;
      it && Object.assign(b, it, w);
    });
    const { fixed: I, flex: P, minWidth: M = r, maxWidth: A = o } = b, F = Zr(b.width || i, i);
    S.flex = P === !0 ? 1 : typeof P == "number" ? P : 0, S.width = ed(F < 1 ? Math.round(F * n) : F, M, A), v.forEach((H) => H.call(s, S)), m.push(S), g[S.name] = S;
    const E = I ? I === "left" ? c : p : d;
    E.list.push(S), E.totalWidth += S.width, E.width = E.totalWidth, S.flex && E.flexList.push(S), typeof b.order == "number" && (y = !0);
  }), y) {
    const w = (k, $) => (k.setting.order ?? 0) - ($.setting.order ?? 0);
    m.sort(w), c.list.sort(w), d.list.sort(w), p.list.sort(w);
  }
  return Fn(c, !0), Fn(p, !0), d.widthSetting = n - c.width - p.width, Fn(d), {
    list: m,
    map: g,
    left: c,
    center: d,
    right: p
  };
}
function nd({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: h, left: d, top: c, ...p }) {
  var F;
  const m = {
    left: d ?? s.left,
    top: c ?? n.top,
    width: h ?? s.realWidth,
    height: e,
    ...o
  }, { align: g, border: y } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...r
  }, _ = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", s.setting.cellClass], k = (F = n.data) == null ? void 0 : F[s.name], $ = [a ?? k ?? ""], b = i ? i($, { row: n, col: s, value: k }, X) : $, S = [], D = [], I = {}, P = {};
  let M = "div";
  b == null || b.forEach((E) => {
    if (typeof E == "object" && E && !Z(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const H = E.outer ? S : D;
      E.html ? H.push(/* @__PURE__ */ f("div", { className: x("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? m : v, E.style), E.className && (E.outer ? _ : w).push(E.className), E.children && H.push(E.children), E.attrs && Object.assign(E.outer ? I : P, E.attrs)), E.tagName && !E.outer && (M = E.tagName);
    } else
      D.push(E);
  });
  const A = M;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x(_),
      style: m,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...p,
      ...I,
      children: [
        D.length > 0 && /* @__PURE__ */ f(A, { className: x(w), style: v, ...P, children: D }),
        S
      ]
    }
  );
}
function zn({
  rows: s = [],
  cols: t,
  rowHeight: e,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: d = nd,
  onRenderCell: c
}) {
  var y;
  const p = Array.isArray(s) ? s : [s], m = ((y = p[0]) == null ? void 0 : y.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-cells", h),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: p.reduce((v, _, w) => {
        const k = t.length;
        return t.forEach(($, b) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: x(
                  `is-${_.index % 2 ? "odd" : "even"}-row`,
                  b ? "" : "is-first-in-row",
                  b === k - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: $,
                row: _,
                top: _.top - m,
                height: e,
                onRenderCell: c
              },
              `${_.index}:${$.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function tl({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: d,
  onRenderCell: c,
  children: p
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ f(
    zn,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: c
    },
    "left"
  ));
  let g = null;
  r.list.length && (g = /* @__PURE__ */ f(
    zn,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      onRenderCell: c
    },
    "center"
  ));
  let y = null;
  return o.list.length && (y = /* @__PURE__ */ f(
    zn,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-block", h),
      style: { ...d, top: s, height: t },
      children: [
        m,
        g,
        y,
        p
      ]
    }
  );
}
var pr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, T = (s, t, e) => (pr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), L = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, j = (s, t, e, n) => (pr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), lt = (s, t, e) => (pr(s, t, "access private method"), e), _e, Ue, ae, Dt, ee, st, St, Tt, je, Ws, nn, ts, Ht, qe, Ye, yi, el, _i, sl, vi, nl, wi, il, Os, bi, Mn, rn, Ci, ki, $i, xi, Ge, Bs, mr, rl, gr, ol, Ti, al;
let yr = class extends O {
  constructor(t) {
    super(t), L(this, yi), L(this, _i), L(this, vi), L(this, wi), L(this, Os), L(this, Ge), L(this, mr), L(this, gr), L(this, Ti), this.ref = V(), L(this, _e, 0), L(this, Ue, void 0), L(this, ae, !1), L(this, Dt, void 0), L(this, ee, void 0), L(this, st, []), L(this, St, void 0), L(this, Tt, /* @__PURE__ */ new Map()), L(this, je, {}), L(this, Ws, void 0), L(this, nn, []), L(this, ts, { in: !1 }), this.updateLayout = () => {
      T(this, _e) && cancelAnimationFrame(T(this, _e)), j(this, _e, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), j(this, _e, 0);
      }));
    }, L(this, Ht, (e, n) => {
      n = n || e.type;
      const i = T(this, Tt).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), L(this, qe, (e) => {
      T(this, Ht).call(this, e, `window_${e.type}`);
    }), L(this, Ye, (e) => {
      T(this, Ht).call(this, e, `document_${e.type}`);
    }), L(this, Mn, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return T(this, st).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), L(this, rn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), L(this, Ci, (e) => {
      var a, l, h;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), T(this, st).forEach((d) => {
          var c;
          (c = d.onHeaderCellClick) == null || c.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((c) => c.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const c of T(this, st))
            if (((h = c.onCellClick) == null ? void 0 : h.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), L(this, ki, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), L(this, $i, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return lt(this, Ge, Bs).call(this, !1);
      lt(this, Ge, Bs).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), L(this, xi, () => {
      lt(this, Ge, Bs).call(this, !1);
    }), j(this, Ue, t.id ?? `dtable-${ua(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, j(this, ee, Object.freeze(td(t.plugins))), T(this, ee).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(T(this, je), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = T(this, St)) == null ? void 0 : t.options) || T(this, Dt) || Qa();
  }
  get plugins() {
    return T(this, st);
  }
  get layout() {
    return T(this, St);
  }
  get id() {
    return T(this, Ue);
  }
  get data() {
    return T(this, je);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return T(this, ts);
  }
  componentWillReceiveProps() {
    j(this, Dt, void 0);
  }
  componentDidMount() {
    T(this, ae) ? this.forceUpdate() : lt(this, Os, bi).call(this), T(this, st).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", T(this, Ci)), this.on("keydown", T(this, ki));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", T(this, $i)), this.on("mouseleave", T(this, xi))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), j(this, Ws, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    T(this, st).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    T(this, ae) ? lt(this, Os, bi).call(this) : T(this, st).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = T(this, Ws)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of T(this, Tt).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), T(this, qe)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), T(this, Ye)) : t.removeEventListener(n, T(this, Ht));
    T(this, st).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), T(this, ee).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), j(this, je, {}), T(this, Tt).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = T(this, Tt).get(t);
    i ? i.push(e) : (T(this, Tt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), T(this, qe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), T(this, Ye)) : (r = this.element) == null || r.addEventListener(t, T(this, Ht)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = T(this, Tt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (T(this, Tt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), T(this, qe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), T(this, Ye)) : (o = this.element) == null || o.removeEventListener(t, T(this, Ht)));
  }
  emitCustomEvent(t, e) {
    T(this, Ht).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: d } = t;
    let { scrollLeft: c, scrollTop: p } = t;
    if (d === "up" || d === "down")
      p = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      c = n + (d === "right" ? 1 : -1) * h;
    else if (d === "top")
      p = 0;
    else if (d === "bottom")
      p = r - o;
    else if (d === "begin")
      c = 0;
    else if (d === "end")
      c = l - h;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (c = n + g), typeof y == "number" && (c = i + y);
    }
    const m = {};
    return typeof c == "number" && (c = Math.max(0, Math.min(c, l - h)), c !== n && (m.scrollLeft = c)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (m.scrollTop = p)), Object.keys(m).length ? (this.setState(m, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, m), e == null || e.call(this, !0);
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
    const { rows: e, rowsMap: n, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : n[t] || i.find((r) => r.id === t);
  }
  getCellValue(t, e) {
    var a;
    const n = typeof t == "object" ? t : this.getRowInfo(t);
    if (!n)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let r = n.id === "HEADER" ? i.setting.title : (a = n.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: o } = this.options;
    return o && (r = o.call(this, n, i, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!T(this, Dt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      j(this, St, void 0);
    else if (n === "options") {
      if (j(this, Dt, void 0), !T(this, St))
        return;
      j(this, St, void 0);
    }
    this.setState(i ?? ((r) => ({ renderCount: r.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const n = u(e).closest(".dtable-cell");
    if (!n.length)
      return;
    const i = n.attr("data-row"), r = n.attr("data-col");
    if (!(typeof r != "string" || typeof i != "string"))
      return {
        cellElement: n[0],
        colName: r,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, n) {
    return G(T(this, nn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, Ti, al).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: h } = this.options, d = {}, c = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      if (c.push(t.className), h) {
        const m = h.call(this, t);
        m && (t = m);
      }
      T(this, st).forEach((m) => {
        var y;
        const g = (y = m.beforeRender) == null ? void 0 : y.call(this, t);
        g && (t = g);
      }), d.width = t.width, d.height = t.height, d["--dtable-row-height"] = `${t.rowHeight}px`, c.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), p.push(
        lt(this, yi, el).call(this, t),
        lt(this, _i, sl).call(this, t),
        lt(this, vi, nl).call(this, t)
      ), t.scrollable && p.push(lt(this, wi, il).call(this, t)), T(this, st).forEach((m) => {
        var y;
        const g = (y = m.onRender) == null ? void 0 : y.call(this, t);
        g && (g.style && Object.assign(d, g.style), g.className && c.push(g.className), g.children && p.push(g.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: T(this, Ue),
        className: x(c),
        style: d,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
_e = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
ae = /* @__PURE__ */ new WeakMap();
Dt = /* @__PURE__ */ new WeakMap();
ee = /* @__PURE__ */ new WeakMap();
st = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
Tt = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
Ws = /* @__PURE__ */ new WeakMap();
nn = /* @__PURE__ */ new WeakMap();
ts = /* @__PURE__ */ new WeakMap();
Ht = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
Ye = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakSet();
el = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      tl,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: T(this, Mn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    qi,
    {
      className: "dtable-header",
      style: { height: n },
      renders: o,
      generateArgs: [s],
      generatorThis: this,
      children: r
    },
    "header"
  );
};
_i = /* @__PURE__ */ new WeakSet();
sl = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    tl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: T(this, Mn),
      children: l
    },
    "body"
  );
};
vi = /* @__PURE__ */ new WeakSet();
nl = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    qi,
    {
      className: "dtable-footer",
      style: { height: s.footerHeight, top: s.rowsHeight + s.headerHeight },
      renders: e,
      generateArgs: [s],
      generatorThis: this,
      generators: s.footerGenerators,
      children: s.footerChildren
    },
    "footer"
  );
};
wi = /* @__PURE__ */ new WeakSet();
il = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: d } = s, { scrollbarSize: c = 12, horzScrollbarPos: p } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Xr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: T(this, rn),
        left: n,
        bottom: (p === "inside" ? 0 : -c) + h,
        size: c,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Xr,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: T(this, rn),
        right: 0,
        size: c,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Os = /* @__PURE__ */ new WeakSet();
bi = function() {
  var s;
  j(this, ae, !1), (s = this.options.afterRender) == null || s.call(this), T(this, st).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Mn = /* @__PURE__ */ new WeakMap();
rn = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
$i = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakSet();
Bs = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = T(this, ts);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), j(this, ts, i);
};
mr = /* @__PURE__ */ new WeakSet();
rl = function() {
  if (T(this, Dt))
    return !1;
  const t = { ...Qa(), ...T(this, ee).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return j(this, Dt, t), j(this, st, T(this, ee).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), j(this, nn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
gr = /* @__PURE__ */ new WeakSet();
ol = function() {
  var I, P;
  const { plugins: s } = this;
  let t = T(this, Dt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((M) => {
    var F;
    const A = (F = M.beforeLayout) == null ? void 0 : F.call(this, t);
    A && (t = { ...t, ...A }), Object.assign(e, M.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: M } = this;
    if (M)
      i = M.clientWidth;
    else {
      j(this, ae, !0);
      return;
    }
  }
  const r = sd(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, h = [], d = (M, A, F) => {
    var H, it;
    const E = { data: F ?? { [a]: M }, id: M, index: h.length, top: 0 };
    if (F || (E.lazy = !0), h.push(E), ((H = t.onAddRow) == null ? void 0 : H.call(this, E, A)) !== !1) {
      for (const mt of s)
        if (((it = mt.onAddRow) == null ? void 0 : it.call(this, E, A)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let M = 0; M < o; M++)
      d(`${M}`, M);
  else
    Array.isArray(o) && o.forEach((M, A) => {
      typeof M == "object" ? d(`${M[a] ?? ""}`, A, M) : d(`${M ?? ""}`, A);
    });
  let c = h;
  const p = {};
  if (t.onAddRows) {
    const M = t.onAddRows.call(this, c);
    M && (c = M);
  }
  for (const M of s) {
    const A = (I = M.onAddRows) == null ? void 0 : I.call(this, c);
    A && (c = A);
  }
  c.forEach((M, A) => {
    p[M.id] = M, M.index = A, M.top = M.index * l;
  });
  const { header: m, footer: g } = t, y = m ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let _ = t.height, w = 0;
  const k = c.length * l, $ = y + v + k;
  if (typeof _ == "function" && (_ = _.call(this, $)), _ === "auto")
    w = $;
  else if (typeof _ == "object")
    w = Math.min(_.max, Math.max(_.min, $));
  else if (_ === "100%") {
    const { parent: M } = this;
    if (M)
      w = M.clientHeight;
    else {
      w = 0, j(this, ae, !0);
      return;
    }
  } else
    w = _;
  const b = w - y - v, S = {
    options: t,
    allRows: h,
    width: i,
    height: w,
    rows: c,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: b,
    rowsHeightTotal: k,
    header: m,
    footer: g,
    footerGenerators: e,
    headerHeight: y,
    footerHeight: v,
    cols: r
  }, D = (P = t.onLayout) == null ? void 0 : P.call(this, S);
  D && Object.assign(S, D), s.forEach((M) => {
    if (M.onLayout) {
      const A = M.onLayout.call(this, S);
      A && Object.assign(S, A);
    }
  }), j(this, St, S);
};
Ti = /* @__PURE__ */ new WeakSet();
al = function() {
  (lt(this, mr, rl).call(this) || !T(this, St)) && lt(this, gr, ol).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((g) => {
    g.left = n, n += g.realWidth, g.visible = g.left + g.realWidth >= e && g.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), h = Math.floor(l / a), d = l + r, c = Math.min(o.length, Math.ceil(d / a)), p = [], { rowDataGetter: m } = this.options;
  for (let g = h; g < c; g++) {
    const y = o[g];
    y.lazy && m && (y.data = m([y.id])[0], y.lazy = !1), p.push(y);
  }
  return Object.assign(s, {
    visibleRows: p,
    scrollTop: l,
    scrollLeft: e,
    headerChildren: [],
    bodyChildren: [],
    footerChildren: [],
    children: [],
    className: "",
    scrollable: !0
  }), s;
};
yr.addPlugin = Xa;
yr.removePlugin = Za;
class ll extends O {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: h } = t;
    return /* @__PURE__ */ f("div", { class: x("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...h
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
ll.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function cl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: K(i, t.row.data), ...n, ...r, ...a, children: e });
}
function _r(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : K(s, e);
}
function hl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), tt(e, s, n ?? e))) : n ?? e;
}
function dl(s, t) {
  const { link: e } = t.col.setting, n = cl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function ul(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = _r(e, t, s[0])), s;
}
function fl(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function pl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = hl(n, t, s[0], i), s;
}
function Si(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : _r(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const id = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return Si(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: h = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, c = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          ll,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: c
          }
        ) : /* @__PURE__ */ f(
          ir,
          {
            percent: c,
            size: a,
            circleWidth: l,
            circleBg: h,
            circleColor: d,
            text: !0
          }
        ), s;
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
  onRenderCell(s, t) {
    const { formatDate: e, html: n, hint: i } = t.col.setting;
    if (e && (s = pl(s, t, e)), s = fl(s, t), s = ul(s, t), n ? s = Si(s, t) : s = dl(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = K(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, rd = Wt(id, { buildIn: !0 }), od = {
  html: { component: us }
}, ad = {
  name: "custom",
  onRenderCell(s, t) {
    const { col: e } = t;
    let { custom: n } = e.setting;
    if (typeof n == "function" && (n = n.call(this, t)), !n)
      return s;
    const i = Array.isArray(n) ? n : [n], { customMap: r } = this.options;
    return i.forEach((o) => {
      let a;
      typeof o == "string" ? a = o.startsWith("<") ? {
        component: us,
        props: { html: K(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(od[l], r == null ? void 0 : r[l]);
      const d = {};
      h.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && u.extend(d, typeof m == "function" ? m.call(this, t) : m), l = p.component || l;
        }
      }, { props: {} });
      const c = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(c, { ...d }) };
    }), s;
  }
}, ld = Wt(ad);
function cd(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (h, d) => {
    const c = r ? r.call(this, h) : !0;
    !c || e && c === "disabled" || !!n[h] === d || (d ? n[h] = !0 : delete n[h], i[h] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !ml.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    o(h, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((h) => {
    o(h, t ?? !n[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    h && Object.keys(h).forEach((d) => {
      h[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function hd(s) {
  return this.state.checkedRows[s] ?? !1;
}
function ml() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function dd() {
  return Object.keys(this.state.checkedRows);
}
function ud(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Jr(s, t, e = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${e ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const Qr = 'input[type="checkbox"],.dtable-checkbox', fd = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Jr
  },
  when: (s) => !!s.checkable,
  options(s) {
    const { forceCheckable: t } = this.state;
    return t !== void 0 ? s.checkable = t : s.checkable === "auto" && (s.checkable = !!s.cols.some((e) => e.checkbox)), s;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: cd,
    isRowChecked: hd,
    isAllRowChecked: ml,
    getChecks: dd,
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
      const s = this.isAllRowChecked();
      return [
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Jr(s) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, e)];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: r.join(", ") })
      ];
    }
  },
  onRenderCell(s, { row: t, col: e }) {
    var h;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const d = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, n, r === "disabled");
      s.push(
        d,
        { outer: !0, className: "has-checkbox" }
      );
    }
    return l && s.push({ outer: !0, className: "is-checked" }), s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var o;
    const { id: n } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, n) : i) {
      const a = this.isAllRowChecked(), l = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, n);
      s.push(l, { outer: !0, className: "has-checkbox" });
    }
    return s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(Qr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Qr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, pd = Wt(fd);
var gl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(gl || {});
function on(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = on.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? on.call(this, t.parent).level + 1 : 0, t;
}
function md(s) {
  return s !== void 0 ? on.call(this, s) : this.data.nestedMap;
}
function gd(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !yl.call(this)), t) {
      const i = n.entries();
      for (const [r, o] of i)
        o.state === "expanded" && (e[r] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[i[0]]), i.forEach((r) => {
      const o = n.get(r);
      t && (o != null && o.children) ? e[r] = !0 : delete e[r];
    });
  }
  this.update({
    dirtyType: "layout",
    state: { collapsedRows: { ...e } }
  }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
  });
}
function yl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function _l(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = _l(s, t, o.children, n + 1)));
  }
  return t;
}
function vl(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, vl(s, r, e, n);
  }), i;
}
function wl(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const h = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === h;
  })) && (n[t] = e), r.parent && wl(s, r.parent, e, n, i);
}
const yd = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(s, t) {
      const { nestedMap: e } = this.data, n = e.get(s.id), i = e.get(t.id);
      return (n == null ? void 0 : n.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(s, t, e) {
      if (!this.options.checkable || !(s != null && s.length))
        return;
      const n = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = vl(this, i, r, n);
        o != null && o.parent && wl(this, o.parent, r, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: md,
    toggleRow: gd,
    isAllCollapsed: yl,
    getNestedRowInfo: on
  },
  beforeLayout() {
    var s;
    (s = this.data.nestedMap) == null || s.clear();
  },
  onAddRow(s) {
    var i, r;
    const { nestedMap: t } = this.data, e = String((i = s.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), n = t.get(s.id) ?? {
      state: "",
      level: 0
    };
    if (n.parent = e === "0" ? void 0 : e, (r = s.data) != null && r[this.options.asParentKey ?? "asParent"] && (n.children = []), t.set(s.id, n), e) {
      let o = t.get(e);
      o || (o = {
        state: "",
        level: 0
      }, t.set(e, o)), o.children || (o.children = []), o.children.push(s.id);
    }
  },
  onAddRows(s) {
    return s = s.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), _l(this.data.nestedMap), s.sort((t, e) => {
      const n = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), r = (n.order ?? 0) - (i.order ?? 0);
      return r === 0 ? t.index - e.index : r;
    }), s;
  },
  onRenderCell(s, { col: t, row: e }) {
    var a;
    const { id: n, data: i } = e, { nestedToggle: r } = t.setting, o = this.getNestedRowInfo(n);
    if (r && (o.children || o.parent) && s.push(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, o, n, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${o.state}` }
    ), o.level) {
      let { nestedIndent: l = r } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * o.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, _d = Wt(yd);
function Vn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${e.name}Name` } = e.setting, d = (n ? n[h] : i) || s[0], c = {
    size: "xs",
    className: x(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(fa, { ...c }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, m = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      s[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return s;
}
const vd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Vn
    },
    avatarBtn: {
      onRenderCell: Vn
    },
    avatarName: {
      onRenderCell: Vn
    }
  }
}, wd = Wt(vd, { buildIn: !0 }), bd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n;
      s.push(
        /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: r = this.options.sortLink } = e.setting;
      if (r) {
        const o = i === "asc" ? "desc" : "asc";
        typeof r == "function" && (r = r.call(this, e, o, i)), typeof r == "string" && (r = { url: r });
        const { url: a, ...l } = r;
        s[0] = /* @__PURE__ */ f("a", { href: K(a, { ...e.setting, sortType: o }), ...l, children: s[0] });
      }
    }
    return s;
  }
}, Cd = Wt(bd, { buildIn: !0 }), Un = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, kd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Un(t.left.list), Un(t.center.list), Un(t.right.list);
  }
}, $d = Wt(kd), xd = {
  name: "cellspan",
  when: (s) => !!s.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(s) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: n } = this.data, { rows: i, cols: r, rowHeight: o } = s;
    e.clear(), n.clear();
    const a = (l, h, d) => {
      const { index: c } = h;
      l.forEach((p, m) => {
        const { index: g } = p, y = `C${g}R${c}`;
        if (n.has(y))
          return;
        const v = t.call(this, { row: h, col: p });
        if (!v)
          return;
        const _ = Math.min(v.colSpan || 1, l.length - m), w = Math.min(v.rowSpan || 1, i.length - d);
        if (_ <= 1 && w <= 1)
          return;
        let k = 0;
        for (let $ = 0; $ < _; $++) {
          k += l[m + $].realWidth;
          for (let b = 0; b < w; b++) {
            const S = `C${g + $}R${c + b}`;
            S !== y && n.add(S);
          }
        }
        e.set(y, {
          colSpan: _,
          rowSpan: w,
          width: k,
          height: o * w
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((d) => {
        a(r[d].list, l, h);
      });
    });
  },
  onRenderCell(s, { row: t, col: e }) {
    const n = `C${e.index}R${t.index}`;
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
}, Td = Wt(xd), Sd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: gl,
  avatar: wd,
  cellspan: Td,
  checkable: pd,
  custom: ld,
  group: $d,
  nested: _d,
  renderDatetime: hl,
  renderDatetimeCell: pl,
  renderFormat: _r,
  renderFormatCell: ul,
  renderHtmlCell: Si,
  renderLink: cl,
  renderLinkCell: dl,
  renderMapCell: fl,
  rich: rd,
  sortType: Cd
}, Symbol.toStringTag, { value: "Module" }));
class _s extends z {
}
_s.NAME = "DTable";
_s.Component = yr;
_s.definePlugin = Wt;
_s.removePlugin = Za;
_s.plugins = Sd;
var bl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, to = (s, t, e) => (bl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Ed = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, eo = (s, t, e, n) => (bl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), ve;
const Md = "nav", Hs = '[data-toggle="tab"]', Nd = "active";
class Cl extends at {
  constructor() {
    super(...arguments), Ed(this, ve, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(Hs);
    let i = t ? u(t).closest(Hs) : n.filter(`.${Nd}`);
    if (!i.length && (i = e.find(Hs).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), to(this, ve) && clearTimeout(to(this, ve)), eo(this, ve, setTimeout(() => {
      a.addClass("in").trigger("show", [o]), this.emit("shown", o), eo(this, ve, 0);
    }, 10)));
  }
}
ve = /* @__PURE__ */ new WeakMap();
Cl.NAME = "Tabs";
u(document).on("click.tabs.zui", Hs, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${Md}`);
  e.length && Cl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  Ho as ActionMenu,
  zo as ActionMenuNested,
  pa as Avatar,
  ma as BtnGroup,
  va as ColorPicker,
  at as Component,
  z as ComponentFromReact,
  fr as ContextMenu,
  Zt as CustomContent,
  qi as CustomRender,
  _s as DTable,
  Ka as Dashboard,
  Ea as DatePicker,
  Na as DatetimePicker,
  la as Draggable,
  wt as Dropdown,
  ha as EventBus,
  ji as HElement,
  us as HtmlContent,
  J as Icon,
  Vo as Menu,
  Hd as Messager,
  Bh as Modal,
  de as ModalBase,
  pi as ModalTrigger,
  ca as Moveable,
  Ra as Nav,
  La as Pager,
  Wa as Pick,
  Fa as Picker,
  ct as Popover,
  Yi as PopoverPanel,
  za as Popovers,
  aa as ProgressCircle,
  O as ReactComponent,
  Ua as SearchBox,
  zd as Sortable,
  Je as TIME_DAY,
  Cl as Tabs,
  Sa as TimePicker,
  ja as Toolbar,
  Nt as Tooltip,
  qa as Tree,
  ur as Upload,
  Ya as UploadImgs,
  Sh as addDate,
  u as cash,
  x as classes,
  Oe as componentsMap,
  pc as convertBytes,
  vc as create,
  U as createDate,
  Nc as createPortal,
  V as createRef,
  uc as deepGet,
  dc as deepGetPath,
  Ad as defineFn,
  Us as delay,
  Pd as dom,
  fc as formatBytes,
  tt as formatDate,
  Xd as formatDateSpan,
  K as formatString,
  Co as getClassList,
  js as getComponent,
  X as h,
  Id as hh,
  xc as htm,
  G as i18n,
  gs as isSameDay,
  wa as isSameMonth,
  qd as isSameWeek,
  ti as isSameYear,
  Yd as isToday,
  Kd as isTomorrow,
  Z as isValidElement,
  Gd as isYesterday,
  Hr as nativeEvents,
  Gs as render,
  Lo as renderCustomContent,
  Sc as renderCustomResult,
  _c as shareData,
  He as store,
  ko as storeData,
  $o as takeData
};
//# sourceMappingURL=zui.js.map
