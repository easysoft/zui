var bn = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var at = (s, t, e) => (bn(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ct = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, vt = (s, t, e, n) => (bn(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Cn = (s, t, e) => (bn(s, t, "access private method"), e);
const bd = "3.0.0", Cd = 1725525943681, Ht = document, $s = window, oo = Ht.documentElement, de = Ht.createElement.bind(Ht), ao = de("div"), Sn = de("table"), $l = de("tbody"), _r = de("tr"), { isArray: Xs, prototype: lo } = Array, { concat: Nl, filter: di, indexOf: co, map: ho, push: El, slice: uo, some: fi, splice: Al } = lo, Ml = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Il = /<.+>/, Rl = /^\w+$/;
function pi(s, t) {
  const e = Dl(t);
  return !s || !e && !le(t) && !tt(t) ? [] : !e && Pl.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Rl.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class Qs {
  constructor(t, e) {
    if (!t)
      return;
    if (On(t))
      return t;
    let n = t;
    if (it(t)) {
      const i = e || Ht;
      if (n = Ml.test(t) && le(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Il.test(t) ? go(t) : On(i) ? i.find(t) : it(i) ? f(i).find(t) : pi(t, i), !n)
        return;
    } else if (fe(t))
      return this.ready(t);
    (n.nodeType || n === $s) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new Qs(t, e);
  }
}
const x = Qs.prototype, f = x.init;
f.fn = f.prototype = x;
x.length = 0;
x.splice = Al;
typeof Symbol == "function" && (x[Symbol.iterator] = lo[Symbol.iterator]);
function On(s) {
  return s instanceof Qs;
}
function Se(s) {
  return !!s && s === s.window;
}
function le(s) {
  return !!s && s.nodeType === 9;
}
function Dl(s) {
  return !!s && s.nodeType === 11;
}
function tt(s) {
  return !!s && s.nodeType === 1;
}
function Ll(s) {
  return !!s && s.nodeType === 3;
}
function zl(s) {
  return typeof s == "boolean";
}
function fe(s) {
  return typeof s == "function";
}
function it(s) {
  return typeof s == "string";
}
function mt(s) {
  return s === void 0;
}
function qe(s) {
  return s === null;
}
function fo(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function gi(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
f.isWindow = Se;
f.isFunction = fe;
f.isArray = Xs;
f.isNumeric = fo;
f.isPlainObject = gi;
function et(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (gi(s)) {
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
f.each = et;
x.each = function(s) {
  return et(this, s);
};
x.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Ns(...s) {
  const t = zl(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Ns(t, f, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Xs(r[o]) || gi(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Ns(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
f.extend = Ns;
x.extend = function(s) {
  return Ns(x, s);
};
const Ol = /\S+/g;
function tn(s) {
  return it(s) ? s.match(Ol) || [] : [];
}
x.toggleClass = function(s, t) {
  const e = tn(s), n = !mt(t);
  return this.each((i, r) => {
    tt(r) && et(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
x.addClass = function(s) {
  return this.toggleClass(s, !0);
};
x.removeAttr = function(s) {
  const t = tn(s);
  return this.each((e, n) => {
    tt(n) && et(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Hl(s, t) {
  if (s) {
    if (it(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !tt(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return qe(e) ? void 0 : e;
      }
      return mt(t) ? this : qe(t) ? this.removeAttr(s) : this.each((e, n) => {
        tt(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
x.attr = Hl;
x.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
x.hasClass = function(s) {
  return !!s && fi.call(this, (t) => tt(t) && t.classList.contains(s));
};
x.get = function(s) {
  return mt(s) ? uo.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
x.eq = function(s) {
  return f(this.get(s));
};
x.first = function() {
  return this.eq(0);
};
x.last = function() {
  return this.eq(-1);
};
function Fl(s) {
  return mt(s) ? this.get().map((t) => tt(t) || Ll(t) ? t.textContent : "").join("") : this.each((t, e) => {
    tt(e) && (e.textContent = s);
  });
}
x.text = Fl;
function Ft(s, t, e) {
  if (!tt(s))
    return;
  const n = $s.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function At(s, t) {
  return parseInt(Ft(s, t), 10) || 0;
}
function yr(s, t) {
  return At(s, `border${t ? "Left" : "Top"}Width`) + At(s, `padding${t ? "Left" : "Top"}`) + At(s, `padding${t ? "Right" : "Bottom"}`) + At(s, `border${t ? "Right" : "Bottom"}Width`);
}
const xn = {};
function Wl(s) {
  if (xn[s])
    return xn[s];
  const t = de(s);
  Ht.body.insertBefore(t, null);
  const e = Ft(t, "display");
  return Ht.body.removeChild(t), xn[s] = e !== "none" ? e : "block";
}
function vr(s) {
  return Ft(s, "display") === "none";
}
function po(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function en(s) {
  return it(s) ? (t, e) => po(e, s) : fe(s) ? s : On(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
x.filter = function(s) {
  const t = en(s);
  return f(di.call(this, (e, n) => t.call(e, n, e)));
};
function te(s, t) {
  return t ? s.filter(t) : s;
}
x.detach = function(s) {
  return te(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const jl = /^\s*<(\w+)[^>]*>/, Bl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, wr = {
  "*": ao,
  tr: $l,
  td: _r,
  th: _r,
  thead: Sn,
  tbody: Sn,
  tfoot: Sn
};
function go(s) {
  if (!it(s))
    return [];
  if (Bl.test(s))
    return [de(RegExp.$1)];
  const t = jl.test(s) && RegExp.$1, e = wr[t] || wr["*"];
  return e.innerHTML = s, f(e.childNodes).detach().get();
}
f.parseHTML = go;
x.has = function(s) {
  const t = it(s) ? (e, n) => pi(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
x.not = function(s) {
  const t = en(s);
  return this.filter((e, n) => (!it(s) || tt(n)) && !t.call(n, e, n));
};
function jt(s, t, e, n) {
  const i = [], r = fe(t), o = n && en(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && El.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function mo(s) {
  return s.multiple && s.options ? jt(di.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Vl(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || xo.test(e.type)) {
      const i = Xs(s) ? ho.call(s, String) : qe(s) ? [] : [String(s)];
      n ? et(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = mt(s) || qe(s) ? "" : s;
  }) : this[0] && mo(this[0]);
}
x.val = Vl;
x.is = function(s) {
  const t = en(s);
  return fi.call(this, (e, n) => t.call(e, n, e));
};
f.guid = 1;
function Rt(s) {
  return s.length > 1 ? di.call(s, (t, e, n) => co.call(n, t) === e) : s;
}
f.unique = Rt;
x.add = function(s, t) {
  return f(Rt(this.get().concat(f(s, t).get())));
};
x.children = function(s) {
  return te(f(Rt(jt(this, (t) => t.children))), s);
};
x.parent = function(s) {
  return te(f(Rt(jt(this, "parentNode"))), s);
};
x.index = function(s) {
  const t = s ? f(s)[0] : this[0], e = s ? this : f(t).parent().children();
  return co.call(e, t);
};
x.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
x.siblings = function(s) {
  return te(f(Rt(jt(this, (t) => f(t).parent().children().not(t)))), s);
};
x.find = function(s) {
  return f(Rt(jt(this, (t) => pi(s, t))));
};
const Ul = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Kl = /^$|^module$|\/(java|ecma)script/i, ql = ["type", "src", "nonce", "noModule"];
function Gl(s, t) {
  const e = f(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Kl.test(i.type) && oo.contains(i)) {
      const r = de("script");
      r.text = i.textContent.replace(Ul, ""), et(ql, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function Yl(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && Gl(t, s.ownerDocument);
}
function ee(s, t, e, n, i, r, o, a) {
  return et(s, (l, c) => {
    et(f(c), (u, h) => {
      et(f(t), (p, d) => {
        const _ = e ? h : d, m = e ? d : h, v = e ? u : p;
        Yl(_, v ? m.cloneNode(!0) : m, n, i, !v);
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
function Jl(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (mt(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    tt(n) && (t ? f(n).empty().append(s) : n.innerHTML = s);
  });
}
x.html = Jl;
x.appendTo = function(s) {
  return ee(arguments, this, !0, !1, !0);
};
x.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = f(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
x.before = function() {
  return ee(arguments, this, !1, !0);
};
x.wrapAll = function(s) {
  let t = f(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
x.wrap = function(s) {
  return this.each((t, e) => {
    const n = f(s)[0];
    f(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
x.insertAfter = function(s) {
  return ee(arguments, this, !0, !1, !1, !1, !1, !0);
};
x.insertBefore = function(s) {
  return ee(arguments, this, !0, !0);
};
x.prepend = function() {
  return ee(arguments, this, !1, !0, !0, !0, !0);
};
x.prependTo = function(s) {
  return ee(arguments, this, !0, !0, !0, !1, !1, !0);
};
x.contents = function() {
  return f(Rt(jt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
x.next = function(s, t, e) {
  return te(f(Rt(jt(this, "nextElementSibling", t, e))), s);
};
x.nextAll = function(s) {
  return this.next(s, !0);
};
x.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
x.parents = function(s, t) {
  return te(f(Rt(jt(this, "parentElement", !0, t))), s);
};
x.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
x.prev = function(s, t, e) {
  return te(f(Rt(jt(this, "previousElementSibling", t, e))), s);
};
x.prevAll = function(s) {
  return this.prev(s, !0);
};
x.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
x.map = function(s) {
  return f(Nl.apply([], ho.call(this, (t, e) => s.call(t, e, t))));
};
x.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
x.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Ft(e, "position") === "static"; )
      e = e.offsetParent;
    return e || oo;
  });
};
x.slice = function(s, t) {
  return f(uo.call(this, s, t));
};
const Zl = /-([a-z])/g;
function mi(s) {
  return s.replace(Zl, (t, e) => e.toUpperCase());
}
x.ready = function(s) {
  const t = () => setTimeout(s, 0, f);
  return Ht.readyState !== "loading" ? t() : Ht.addEventListener("DOMContentLoaded", t), this;
};
x.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = f(t);
    e.replaceWith(e.children());
  }), this;
};
x.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + $s.pageYOffset,
    left: t.left + $s.pageXOffset
  };
};
x.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Ft(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Ft(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && tt(i)) {
      const r = f(i).offset();
      e.top -= r.top + At(i, "borderTopWidth"), e.left -= r.left + At(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - At(s, "marginTop"),
    left: e.left - At(s, "marginLeft")
  };
};
const _o = {
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
x.prop = function(s, t) {
  if (s) {
    if (it(s))
      return s = _o[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
x.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[_o[s] || s];
  });
};
const Xl = /^--/;
function _i(s) {
  return Xl.test(s);
}
const kn = {}, { style: Ql } = ao, tc = ["webkit", "moz", "ms"];
function ec(s, t = _i(s)) {
  if (t)
    return s;
  if (!kn[s]) {
    const e = mi(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${tc.join(`${n} `)}${n}`.split(" ");
    et(i, (r, o) => {
      if (o in Ql)
        return kn[s] = o, !1;
    });
  }
  return kn[s];
}
const sc = {
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
function yo(s, t, e = _i(s)) {
  return !e && !sc[s] && fo(t) ? `${t}px` : t;
}
function nc(s, t) {
  if (it(s)) {
    const e = _i(s);
    return s = ec(s, e), arguments.length < 2 ? this[0] && Ft(this[0], s, e) : s ? (t = yo(s, t, e), this.each((n, i) => {
      tt(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
x.css = nc;
function vo(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const ic = /^\s+|\s+$/;
function br(s, t) {
  const e = s.dataset[t] || s.dataset[mi(t)];
  return ic.test(e) ? e : vo(JSON.parse, e);
}
function rc(s, t, e) {
  e = vo(JSON.stringify, e), s.dataset[mi(t)] = e;
}
function oc(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = br(this[0], n);
    return e;
  }
  if (it(s))
    return arguments.length < 2 ? this[0] && br(this[0], s) : mt(t) ? this : this.each((e, n) => {
      rc(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
x.data = oc;
function wo(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
et([!0, !1], (s, t) => {
  et(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    x[i] = function(r) {
      if (this[0])
        return Se(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : le(this[0]) ? wo(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? At(this[0], `margin${e ? "Top" : "Left"}`) + At(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
et(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  x[e] = function(n) {
    if (!this[0])
      return mt(n) ? void 0 : this;
    if (!arguments.length)
      return Se(this[0]) ? this[0].document.documentElement[`client${t}`] : le(this[0]) ? wo(this[0], t) : this[0].getBoundingClientRect()[e] - yr(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!tt(o))
        return;
      const a = Ft(o, "boxSizing");
      o.style[e] = yo(e, i + (a === "border-box" ? yr(o, !s) : 0));
    });
  };
});
const Cr = "___cd";
x.toggle = function(s) {
  return this.each((t, e) => {
    if (!tt(e))
      return;
    const n = vr(e);
    (mt(s) ? n : s) ? (e.style.display = e[Cr] || "", vr(e) && (e.style.display = Wl(e.tagName))) : n || (e[Cr] = Ft(e, "display"), e.style.display = "none");
  });
};
x.hide = function() {
  return this.toggle(!1);
};
x.show = function() {
  return this.toggle(!0);
};
const Sr = "___ce", yi = ".", vi = { focus: "focusin", blur: "focusout" }, bo = { mouseenter: "mouseover", mouseleave: "mouseout" }, ac = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function wi(s) {
  return bo[s] || vi[s] || s;
}
function bi(s) {
  const t = s.split(yi);
  return [t[0], t.slice(1).sort()];
}
x.trigger = function(s, t) {
  if (it(s)) {
    const [n, i] = bi(s), r = wi(n);
    if (!r)
      return this;
    const o = ac.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Ht.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(yi), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in vi;
  return this.each((n, i) => {
    e && fe(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function Co(s) {
  return s[Sr] = s[Sr] || {};
}
function lc(s, t, e, n, i) {
  const r = Co(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function So(s, t) {
  return !t || !fi.call(t, (e) => s.indexOf(e) < 0);
}
function Es(s, t, e, n, i) {
  const r = Co(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !So(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      Es(s, t, e, n, i);
}
x.off = function(s, t, e) {
  if (mt(s))
    this.each((n, i) => {
      !tt(i) && !le(i) && !Se(i) || Es(i);
    });
  else if (it(s))
    fe(t) && (e = t, t = ""), et(tn(s), (n, i) => {
      const [r, o] = bi(i), a = wi(r);
      this.each((l, c) => {
        !tt(c) && !le(c) && !Se(c) || Es(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
x.remove = function(s) {
  return te(this, s).detach().off(), this;
};
x.replaceWith = function(s) {
  return this.before(s).remove();
};
x.replaceAll = function(s) {
  return f(s).replaceWith(this), this;
};
function cc(s, t, e, n, i) {
  if (!it(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return it(t) || (mt(t) || qe(t) ? t = "" : mt(e) ? (e = t, t = "") : (n = e, e = t, t = "")), fe(n) || (n = e, e = void 0), n ? (et(tn(s), (r, o) => {
    const [a, l] = bi(o), c = wi(a), u = a in bo, h = a in vi;
    c && this.each((p, d) => {
      if (!tt(d) && !le(d) && !Se(d))
        return;
      const _ = function(m) {
        if (m.target[`___i${m.type}`])
          return m.stopImmediatePropagation();
        if (m.namespace && !So(l, m.namespace.split(yi)) || !t && (h && (m.target !== d || m.___ot === c) || u && m.relatedTarget && d.contains(m.relatedTarget)))
          return;
        let v = d;
        if (t) {
          let w = m.target;
          for (; !po(w, t); )
            if (w === d || (w = w.parentNode, !w))
              return;
          v = w;
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
        const y = n.call(v, m, m.___td);
        i && Es(d, c, l, t, _), y === !1 && (m.preventDefault(), m.stopPropagation());
      };
      _.guid = n.guid = n.guid || f.guid++, lc(d, c, l, t, _);
    });
  }), this) : this;
}
x.on = cc;
function hc(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
x.one = hc;
const uc = /\r?\n/g;
function dc(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(uc, `\r
`))}`;
}
const fc = /file|reset|submit|button|image/i, xo = /radio|checkbox/i;
x.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    et(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || fc.test(i.type) || xo.test(i.type) && !i.checked)
        return;
      const r = mo(i);
      if (!mt(r)) {
        const o = Xs(r) ? r : [r];
        et(o, (a, l) => {
          s += dc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = f;
function pc(s, t) {
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
function ko(s, t, e) {
  try {
    const n = pc(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function B(s, ...t) {
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
var Ci = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(Ci || {});
function Dt(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / Ci[e]).toFixed(t) + e);
}
const ps = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * Ci[n];
};
let Si = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ot;
function gc() {
  return Si;
}
function mc(s) {
  Si = s.toLowerCase().replace("-", "_");
}
function To(s, t) {
  Ot || (Ot = {}), typeof s == "string" && (s = { [s]: t ?? {} }), f.extend(!0, Ot, s);
}
function F(s, t, e, n, i, r) {
  Array.isArray(s) ? Ot && s.unshift(Ot) : s = Ot ? [Ot, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || Si;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o] || l.default;
    if (!c)
      continue;
    const u = r && l === Ot ? `${r}.${t}` : t;
    if (a = ko(c, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? B(a, ...Array.isArray(e) ? e : [e]) : a;
}
function _c(s, t, e, n) {
  return F(void 0, s, t, e, n);
}
F.addLang = To;
F.getLang = _c;
F.getCode = gc;
F.setCode = mc;
F.map = Ot;
To({
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
function xr(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function ve(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => ve(s, t, n)) : !(e instanceof Blob) && f.isPlainObject(e) ? Object.entries(e).forEach(([n, i]) => {
    ve(s, `${t}[${n}]`, i);
  }) : s.append(t, e instanceof Blob ? e : String(e)));
}
function yc(s, t) {
  if (s) {
    const e = {
      text: "text/plain",
      html: "text/html",
      json: "application/json",
      ...t
    };
    for (const [n, i] of Object.entries(e))
      if (i.split(",").map((r) => r.trim()).includes(s))
        return n;
  }
  return "text";
}
function vc(s, t) {
  const e = t || new FormData();
  return s && (typeof s == "string" && (s = new URLSearchParams(s)), s instanceof URLSearchParams ? s.forEach((n, i) => {
    ve(e, i, n);
  }) : Array.isArray(s) ? s.forEach(([n, i]) => {
    ve(e, n, i);
  }) : s instanceof FormData ? s.forEach((n, i) => {
    ve(e, i, n);
  }) : f.isPlainObject(s) && Object.entries(s).forEach(([n, i]) => {
    ve(e, n, i);
  })), e;
}
class $o {
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
    return this.completed ? e && this.error ? e(this.error) : t(this.data) : (this.success((n) => t(n)), e && this.fail(e)), this;
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
      data: n,
      processData: i = !0,
      contentType: r,
      crossDomain: o,
      accepts: a,
      dataType: l,
      timeout: c,
      dataFilter: u,
      beforeSend: h,
      success: p,
      error: d,
      complete: _,
      ...m
    } = this.setting;
    if ((h == null ? void 0 : h(m)) === !1)
      return;
    e && (m.method = e);
    let v = n;
    v && (i && (v = vc(v)), m.body = v), o && (m.mode = "cors");
    const y = m.headers || {};
    xr(y, "X-Requested-With", "XMLHttpRequest"), r && xr(y, "Content-Type", r), m.headers = y, m.signal && m.signal.addEventListener("abort", () => {
      this.abort();
    }), p && this.success(p), d && this.fail(d), _ && this.complete(_), m.signal = this._controller.signal, this.url = t, this.request = m;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
    });
  }
  async send() {
    var u;
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r, jsonParser: o } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let a, l, c;
    try {
      a = await fetch(this.url, this.request), this.response = a;
      const { statusText: h } = a;
      if (a.ok) {
        const p = (u = a.headers.get("Content-Disposition")) == null ? void 0 : u.startsWith("attachment"), d = p ? "blob" : e || yc(a.headers.get("Content-Type"), n);
        p || d === "blob" || d === "file" ? c = await a.blob() : d === "json" ? typeof o == "function" ? (c = await a.text(), c = o(c)) : c = await a.json() : c = await a.text(), this.data = c;
        const _ = (i == null ? void 0 : i(c, d)) ?? c;
        this._emit("success", _, h, a);
      } else
        throw this.data = await a.text(), new Error(h);
    } catch (h) {
      this.data === void 0 && c !== void 0 && (this.data = c), l = h;
      let p = !1;
      l.name === "AbortError" && (this._abortError ? l = this._abortError : p = !0), this.error = l, p || this._emit("error", l, a == null ? void 0 : a.statusText, l.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", a, a == null ? void 0 : a.statusText), l && r)
      throw l;
    return [c, l, a];
  }
}
f.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : f.extend(t, s);
  const e = new $o(t);
  return e.send(), e;
};
f.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), f.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
f.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, f.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
f.post = (s, t, e, n) => f.get(s, t, e, n, "POST");
f.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return f.get(n, t, (r, o, a) => {
    i && (r = f(r).find(i).html()), f(this).html(r).zuiInit(), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function xi(s, t = [], e, n, i) {
  const r = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    r.url = B(s, ...t);
  else if (typeof s == "object")
    f.extend(r, s);
  else if (typeof s == "function") {
    const l = s.call(n, ...t);
    return l instanceof Promise ? await l : l;
  }
  e && f.extend(r, typeof e == "function" ? e(r) : e);
  const o = new $o(r);
  i == null || i(o);
  const [a] = await o.send();
  return a;
}
function Sd(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
f.fetch = xi;
function pt() {
  return f.guid++;
}
function Hn(s, t) {
  if (s === t)
    return !1;
  if (s && t) {
    const e = typeof s, n = typeof t;
    if (e !== n)
      return !0;
    if (e === "object" && n === "object") {
      const i = Array.isArray(s), r = Array.isArray(t);
      if (i !== r)
        return !0;
      if (i && r) {
        if (s.length !== t.length)
          return !0;
        for (let l = 0; l < s.length; l++)
          if (Hn(s[l], t[l]))
            return !0;
        return !1;
      }
      const o = Object.keys(s), a = Object.keys(t);
      if (o.length !== a.length)
        return !0;
      for (const l of o)
        if (Hn(s[l], t[l]))
          return !0;
      return !1;
    }
    if (e === "function" && n === "function")
      return s.toString() !== t.toString();
  }
  return s !== t;
}
class As {
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
    return (!e || t.some((n, i) => n instanceof As ? n.value !== e[i] : Hn(n, e[i]))) && (this._value = this._compute(), this._lastDependencies = t.map((n) => n instanceof As ? n.cache : n)), this._value;
  }
}
function No(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? No(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const k = (...s) => No(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
f.classes = k;
f.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = f(n);
    s === !0 ? i.attr("class", k(i.attr("class"), ...t)) : i.addClass(k(s, ...t));
  });
};
const we = /* @__PURE__ */ new WeakMap();
function ki(s, t, e) {
  const n = we.has(s), i = n ? we.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, f(s).dataset(), i), we.set(s, i)) : we.delete(s);
}
function Ti(s, t, e) {
  let n = we.get(s) || {};
  return e && s instanceof Element && (n = Object.assign({}, f(s).dataset(), n)), t === void 0 ? n : n[t];
}
function xd(s) {
  we.delete(s);
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...s) {
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? this.length ? Ti(this[0], t, !0) : void 0 : this.each((n, i) => ki(i, t, e));
};
f.fn.removeData = function(s = null) {
  return this.each((t, e) => ki(e, s));
};
function xe(s, ...t) {
  return s.includes("RAWJS") && (s = s.split('"RAWJS<').join("").split('>RAWJS"').join("").split("<RAWJS_QUOTE>").join('"').split("<RAWJS_LINE>").join(`
`)), new Function(`return ${s}`)(...t);
}
function kd(s, ...t) {
  return s.includes("RAWJS") ? xe(s, ...t) : JSON.parse(s);
}
function Ge(s, t) {
  const e = f(s)[0];
  if (!e)
    return;
  const { prefix: n, getter: i, evalValue: r, json: o = !0, evalArgs: a = [] } = {
    prefix: "z-",
    ...typeof t == "string" ? { prefix: t } : t
  }, l = Array.isArray(r) ? new Set(r) : void 0;
  return Array.from(e.attributes).reduce((c, u) => {
    let { name: h } = u;
    const { value: p } = u;
    let d = p;
    if (h.startsWith(n)) {
      if (h = h.slice(n.length).replace(/-([a-z])/g, (_) => _[1].toUpperCase()), i)
        d = i(h, p);
      else
        try {
          r && (!l || l.has(h)) || r === void 0 && p.includes("RAWJS") ? d = xe(p, ...a) : o && (d = JSON.parse(p));
        } catch {
        }
      c[h] = d;
    }
    return c;
  }, {});
}
function kr(s, t, e = "z-") {
  const n = f(s);
  Object.keys(t).forEach((i) => {
    let r = t[i];
    typeof r == "function" && (r = `RAWJS<${r}>RAWJS`), typeof r != "string" && (r = JSON.stringify(r)), i = i.replace(/[A-Z]/g, (o) => `-${o.toLowerCase()}`), n.attr(`${e}${i}`, r);
  });
}
function wc(...s) {
  var e;
  const t = s.length;
  if (!t)
    return Ge(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = Ge(this)) == null ? void 0 : e[n] : (f.isPlainObject(n) && kr(this, n), this);
  }
  return kr(this, { [s[0]]: s[1] }), this;
}
f.fn.z = wc;
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...s) {
    const [t, e] = s;
    return !s.length || s.length === 1 && typeof t == "string" ? this._attr.apply(this, s) : typeof t == "object" ? (t && Object.keys(t).forEach((n) => {
      const i = t[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
f.Event || (f.Event = (s, t) => {
  const [e, ...n] = s.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = e, i.___td = t, i;
});
const Ms = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), bc = {};
f.share = bc;
var sn, O, Eo, ft, re, Tr, Ao, Fn, $i, Wn, jn, Ye = {}, Mo = [], Cc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, nn = Array.isArray;
function qt(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Po(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function wt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? sn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return ws(s, o, n, i, null);
}
function ws(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: i ?? ++Eo, __i: -1, __u: 0 };
  return i == null && O.vnode != null && O.vnode(r), r;
}
function G() {
  return { current: null };
}
function Ne(s) {
  return s.children;
}
function W(s, t) {
  this.props = s, this.context = t;
}
function ce(s, t) {
  if (t == null)
    return s.__ ? ce(s.__, s.__i + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ce(s) : null;
}
function Io(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Io(s);
  }
}
function $r(s) {
  (!s.__d && (s.__d = !0) && re.push(s) && !Ps.__r++ || Tr !== O.debounceRendering) && ((Tr = O.debounceRendering) || Ao)(Ps);
}
function Ps() {
  var s, t, e, n, i, r, o, a;
  for (re.sort(Fn); s = re.shift(); )
    s.__d && (t = re.length, n = void 0, r = (i = (e = s).__v).__e, o = [], a = [], e.__P && ((n = qt({}, i)).__v = i.__v + 1, O.vnode && O.vnode(n), Ni(e.__P, n, i, e.__n, e.__P.namespaceURI, 32 & i.__u ? [r] : null, o, r ?? ce(i), !!(32 & i.__u), a), n.__v = i.__v, n.__.__k[n.__i] = n, Lo(o, n, a), n.__e != r && Io(n)), re.length > t && re.sort(Fn));
  Ps.__r = 0;
}
function Ro(s, t, e, n, i, r, o, a, l, c, u) {
  var h, p, d, _, m, v = n && n.__k || Mo, y = t.length;
  for (e.__d = l, Sc(e, t, v), l = e.__d, h = 0; h < y; h++)
    (d = e.__k[h]) != null && typeof d != "boolean" && typeof d != "function" && (p = d.__i === -1 ? Ye : v[d.__i] || Ye, d.__i = h, Ni(s, d, p, i, r, o, a, l, c, u), _ = d.__e, d.ref && p.ref != d.ref && (p.ref && Ei(p.ref, null, d), u.push(d.ref, d.__c || _, d)), m == null && _ != null && (m = _), 65536 & d.__u || p.__k === d.__k ? l = Do(d, l, s) : typeof d.type == "function" && d.__d !== void 0 ? l = d.__d : _ && (l = _.nextSibling), d.__d = void 0, d.__u &= -196609);
  e.__d = l, e.__e = m;
}
function Sc(s, t, e) {
  var n, i, r, o, a, l = t.length, c = e.length, u = c, h = 0;
  for (s.__k = [], n = 0; n < l; n++)
    o = n + h, (i = s.__k[n] = (i = t[n]) == null || typeof i == "boolean" || typeof i == "function" ? null : typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? ws(null, i, null, null, null) : nn(i) ? ws(Ne, { children: i }, null, null, null) : i.constructor === void 0 && i.__b > 0 ? ws(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i) != null ? (i.__ = s, i.__b = s.__b + 1, a = xc(i, e, o, u), i.__i = a, r = null, a !== -1 && (u--, (r = e[a]) && (r.__u |= 131072)), r == null || r.__v === null ? (a == -1 && h--, typeof i.type != "function" && (i.__u |= 65536)) : a !== o && (a == o - 1 ? h-- : a == o + 1 ? h++ : a > o ? u > l - o ? h += a - o : h-- : a < o && (a == o - h ? h -= a - o : h++), a !== n + h && (i.__u |= 65536))) : (r = e[o]) && r.key == null && r.__e && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ce(r)), Bn(r, r, !1), e[o] = null, u--);
  if (u)
    for (n = 0; n < c; n++)
      (r = e[n]) != null && !(131072 & r.__u) && (r.__e == s.__d && (s.__d = ce(r)), Bn(r, r));
}
function Do(s, t, e) {
  var n, i;
  if (typeof s.type == "function") {
    for (n = s.__k, i = 0; n && i < n.length; i++)
      n[i] && (n[i].__ = s, t = Do(n[i], t, e));
    return t;
  }
  s.__e != t && (t && s.type && !e.contains(t) && (t = ce(s)), e.insertBefore(s.__e, t || null), t = s.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Is(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (nn(s) ? s.some(function(e) {
    Is(e, t);
  }) : t.push(s)), t;
}
function xc(s, t, e, n) {
  var i = s.key, r = s.type, o = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && r === l.type && !(131072 & l.__u))
    return e;
  if (n > (l != null && !(131072 & l.__u) ? 1 : 0))
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
function Nr(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Cc.test(t) ? e : e + "px";
}
function gs(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || Nr(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || Nr(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in s || t === "onFocusOut" || t === "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n ? e.u = n.u : (e.u = $i, s.addEventListener(t, r ? jn : Wn, r)) : s.removeEventListener(t, r ? jn : Wn, r);
    else {
      if (i == "http://www.w3.org/2000/svg")
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in s)
        try {
          s[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? s.removeAttribute(t) : s.setAttribute(t, t == "popover" && e == 1 ? "" : e));
    }
}
function Er(s) {
  return function(t) {
    if (this.l) {
      var e = this.l[t.type + s];
      if (t.t == null)
        t.t = $i++;
      else if (t.t < e.u)
        return;
      return e(O.event ? O.event(t) : t);
    }
  };
}
function Ni(s, t, e, n, i, r, o, a, l, c) {
  var u, h, p, d, _, m, v, y, w, C, b, S, $, A, N, E, T = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & e.__u && (l = !!(32 & e.__u), r = [a = t.__e = e.__e]), (u = O.__b) && u(t);
  t:
    if (typeof T == "function")
      try {
        if (y = t.props, w = "prototype" in T && T.prototype.render, C = (u = T.contextType) && n[u.__c], b = u ? C ? C.props.value : u.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : (w ? t.__c = h = new T(y, b) : (t.__c = h = new W(y, b), h.constructor = T, h.render = Tc), C && C.sub(h), h.props = y, h.state || (h.state = {}), h.context = b, h.__n = n, p = h.__d = !0, h.__h = [], h._sb = []), w && h.__s == null && (h.__s = h.state), w && T.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = qt({}, h.__s)), qt(h.__s, T.getDerivedStateFromProps(y, h.__s))), d = h.props, _ = h.state, h.__v = t, p)
          w && T.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), w && h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (w && T.getDerivedStateFromProps == null && y !== d && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, b), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, b) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(M) {
              M && (M.__ = t);
            }), S = 0; S < h._sb.length; S++)
              h.__h.push(h._sb[S]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, b), w && h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(d, _, m);
          });
        }
        if (h.context = b, h.props = y, h.__P = s, h.__e = !1, $ = O.__r, A = 0, w) {
          for (h.state = h.__s, h.__d = !1, $ && $(t), u = h.render(h.props, h.state, h.context), N = 0; N < h._sb.length; N++)
            h.__h.push(h._sb[N]);
          h._sb = [];
        } else
          do
            h.__d = !1, $ && $(t), u = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++A < 25);
        h.state = h.__s, h.getChildContext != null && (n = qt(qt({}, n), h.getChildContext())), w && !p && h.getSnapshotBeforeUpdate != null && (m = h.getSnapshotBeforeUpdate(d, _)), Ro(s, nn(E = u != null && u.type === Ne && u.key == null ? u.props.children : u) ? E : [E], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__u &= -161, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (M) {
        if (t.__v = null, l || r != null) {
          for (t.__u |= l ? 160 : 32; a && a.nodeType === 8 && a.nextSibling; )
            a = a.nextSibling;
          r[r.indexOf(a)] = null, t.__e = a;
        } else
          t.__e = e.__e, t.__k = e.__k;
        O.__e(M, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = kc(e.__e, t, e, n, i, r, o, l, c);
  (u = O.diffed) && u(t);
}
function Lo(s, t, e) {
  t.__d = void 0;
  for (var n = 0; n < e.length; n++)
    Ei(e[n], e[++n], e[++n]);
  O.__c && O.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      O.__e(r, i.__v);
    }
  });
}
function kc(s, t, e, n, i, r, o, a, l) {
  var c, u, h, p, d, _, m, v = e.props, y = t.props, w = t.type;
  if (w === "svg" ? i = "http://www.w3.org/2000/svg" : w === "math" ? i = "http://www.w3.org/1998/Math/MathML" : i || (i = "http://www.w3.org/1999/xhtml"), r != null) {
    for (c = 0; c < r.length; c++)
      if ((d = r[c]) && "setAttribute" in d == !!w && (w ? d.localName === w : d.nodeType === 3)) {
        s = d, r[c] = null;
        break;
      }
  }
  if (s == null) {
    if (w === null)
      return document.createTextNode(y);
    s = document.createElementNS(i, w, y.is && y), r = null, a = !1;
  }
  if (w === null)
    v === y || a && s.data === y || (s.data = y);
  else {
    if (r = r && sn.call(s.childNodes), v = e.props || Ye, !a && r != null)
      for (v = {}, c = 0; c < s.attributes.length; c++)
        v[(d = s.attributes[c]).name] = d.value;
    for (c in v)
      if (d = v[c], c != "children") {
        if (c == "dangerouslySetInnerHTML")
          h = d;
        else if (c !== "key" && !(c in y)) {
          if (c == "value" && "defaultValue" in y || c == "checked" && "defaultChecked" in y)
            continue;
          gs(s, c, null, d, i);
        }
      }
    for (c in y)
      d = y[c], c == "children" ? p = d : c == "dangerouslySetInnerHTML" ? u = d : c == "value" ? _ = d : c == "checked" ? m = d : c === "key" || a && typeof d != "function" || v[c] === d || gs(s, c, d, v[c], i);
    if (u)
      a || h && (u.__html === h.__html || u.__html === s.innerHTML) || (s.innerHTML = u.__html), t.__k = [];
    else if (h && (s.innerHTML = ""), Ro(s, nn(p) ? p : [p], t, e, n, w === "foreignObject" ? "http://www.w3.org/1999/xhtml" : i, r, o, r ? r[0] : e.__k && ce(e, 0), a, l), r != null)
      for (c = r.length; c--; )
        r[c] != null && Po(r[c]);
    a || (c = "value", _ !== void 0 && (_ !== s[c] || w === "progress" && !_ || w === "option" && _ !== v[c]) && gs(s, c, _, v[c], i), c = "checked", m !== void 0 && m !== s[c] && gs(s, c, m, v[c], i));
  }
  return s;
}
function Ei(s, t, e) {
  try {
    if (typeof s == "function") {
      var n = typeof s.__u == "function";
      n && s.__u(), n && t == null || (s.__u = s(t));
    } else
      s.current = t;
  } catch (i) {
    O.__e(i, e);
  }
}
function Bn(s, t, e) {
  var n, i;
  if (O.unmount && O.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Ei(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        O.__e(r, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Bn(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Po(s.__e), s.__c = s.__ = s.__e = s.__d = void 0;
}
function Tc(s, t, e) {
  return this.constructor(s, e);
}
function be(s, t, e) {
  var n, i, r, o;
  O.__ && O.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], Ni(t, s = (!n && e || t).__k = wt(Ne, null, [s]), i || Ye, Ye, t.namespaceURI, !n && e ? [e] : i ? null : t.firstChild ? sn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Lo(r, s, o);
}
sn = Mo.slice, O = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Eo = 0, ft = function(s) {
  return s != null && s.constructor == null;
}, W.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = qt({}, this.state), typeof s == "function" && (s = s(qt({}, e), this.props)), s && qt(e, s), s != null && this.__v && (t && this._sb.push(t), $r(this));
}, W.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), $r(this));
}, W.prototype.render = Ne, re = [], Ao = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Fn = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, Ps.__r = 0, $i = 0, Wn = Er(!1), jn = Er(!0);
function z(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Is(r), ...Is(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = f.extend(r, i))), s[n] = i);
    });
  }), s;
}
function zo(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
function $c(s, t = !0) {
  const e = f(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    if ((e.css("scrollbar-gutter") || "").includes("stable")) {
      e.data(i, { overflow: e.css("overflow") }).css("overflow", "hidden");
      return;
    }
    const r = n === document.body || e.is("html") ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
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
f.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    $c(e, s);
  });
};
f.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Tn(s, t, e) {
  if (!(e.on || "click").split(" ").includes(t.type))
    return;
  const n = e.selector ? f(t.target).closest(e.selector) : s;
  if (!n.length)
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
    s.dataset("once-called", !0);
  }
  if (i(e.prevent) && t.preventDefault(), i(e.stop) && t.stopPropagation(), i(e.self) && t.currentTarget !== t.target)
    return;
  const o = [["$element", s], ["event", t], ["options", e], ["$target", n]], a = (c) => typeof c == "function" ? c(...o) : f.runJS(c, ...o);
  if (e.if !== void 0 && !a(e.if))
    return;
  const l = e.call;
  if (l) {
    let c;
    if (typeof l == "string" ? c = /^[$A-Z_][0-9A-Z_$.]*$/i.test(l) ? ko(window, l) : a(l) : c = l, typeof c == "function") {
      const u = [], h = e.params;
      e.params = u, typeof h == "string" && h.length ? h[0] === "[" ? u.push(...r(h)) : u.push(...h.split(", ").map((p) => (p = p.trim(), p === "$element" ? s : p === "event" ? t : p === "options" ? e : p.startsWith("$element.") || p.startsWith("event.") || p.startsWith("options.") ? a(p) : r(p)))) : Array.isArray(h) ? u.push(...h) : u.push(h), c(...u);
    }
  }
  e.do && a(e.do);
}
function Nc(s) {
  const t = f(this), e = s.type, n = t.attr("zui-on");
  if (n) {
    const [o, a] = n.split("~").map((l) => l.trim());
    o && o.split(" ").includes(e) && Tn(t, s, f.extend({
      on: o
    }, a ? a.startsWith("{") ? xe(a) : { do: a } : Ge(t, { prefix: "data-", evalValue: ["call", "if", "do"] })));
  }
  const i = t.attr(`zui-on-${e}`);
  i && Tn(t, s, f.extend({
    on: e
  }, i.startsWith("{") ? xe(i) : { do: i }));
  const r = t.attr("data-on");
  r && r.split(" ").includes(e) && Tn(t, s, Ge(t, { prefix: "data-", evalValue: ["call", "if", "do"] }));
}
function Ec(s) {
  f(document).off(".zui.global").on(s.map((t) => `${t}.zui.global`).join(" "), `[zui-on],${s.map((t) => `[zui-on-${t}]`)},[data-on]`, Nc);
}
f(() => {
  Ec(["click", "change", "inited"]);
});
function Ai(s, t) {
  if (typeof s == "function")
    return Ai(s(...t || []));
  if (typeof s == "number")
    return [s];
  let e = s.match(/(\d+)(%|px)?/);
  return e ? [parseInt(e[1]), e[2]] : (e = s.match(/(\d+)\/(\d+)/), e ? [100 * parseInt(e[1]) / parseInt(e[2]), "%"] : [NaN]);
}
function Gt(s, t) {
  if (s == null)
    return null;
  const [e, n = "px"] = Ai(s, t);
  return Number.isNaN(e) ? typeof s == "string" ? s : null : `${e}${n}`;
}
async function Ar(s, t) {
  var n, i, r;
  if (s instanceof Blob) {
    const o = document.createElement("a");
    return o.href = window.URL.createObjectURL(s), t && (o.download = decodeURIComponent(t)), o.click(), o.remove(), s;
  }
  if (s instanceof Response) {
    const o = await s.blob();
    return t = t || ((r = (i = (n = s.headers.get("Content-Disposition")) == null ? void 0 : n.split(";")[1]) == null ? void 0 : i.split("=")[1]) == null ? void 0 : r.replace(/"/g, "")), Ar(o, t);
  }
  const e = await fetch(s);
  return Ar(e);
}
class Ac {
  constructor(t) {
    this._$target = f(t);
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
const Wt = new Ac(document);
f.bus = Wt;
f.on = Wt.on.bind(Wt);
f.one = Wt.one.bind(Wt);
f.off = Wt.off.bind(Wt);
f.trigger = Wt.trigger.bind(Wt);
var Mc = ["Shift", "Meta", "Alt", "Control"], Oo = typeof navigator == "object" ? navigator.platform : "", Ho = /Mac|iPod|iPhone|iPad/.test(Oo), Pc = Ho ? "Meta" : "Control", Ic = Oo === "Win32" ? ["Control", "Alt"] : Ho ? ["Alt"] : [];
function $n(s, t) {
  return typeof s.getModifierState == "function" && (s.getModifierState(t) || Ic.includes(t) && s.getModifierState("AltGraph"));
}
function Rc(s) {
  return s.trim().split(" ").map(function(t) {
    var e = t.split(/\b\+/), n = e.pop();
    return [e = e.map(function(i) {
      return i === "$mod" ? Pc : i;
    }), n];
  });
}
function Fo(s, t) {
  var e;
  t === void 0 && (t = {});
  var n = (e = t.timeout) != null ? e : 1e3, i = Object.keys(s).map(function(a) {
    return [Rc(a), s[a]];
  }), r = /* @__PURE__ */ new Map(), o = null;
  return function(a) {
    a instanceof KeyboardEvent && (i.forEach(function(l) {
      var c = l[0], u = l[1], h = r.get(c) || c;
      (function(p, d) {
        return !(d[1].toUpperCase() !== p.key.toUpperCase() && d[1] !== p.code || d[0].find(function(_) {
          return !$n(p, _);
        }) || Mc.find(function(_) {
          return !d[0].includes(_) && d[1] !== _ && $n(p, _);
        }));
      })(a, h[0]) ? h.length > 1 ? r.set(c, h.slice(1)) : (r.delete(c), u(a)) : $n(a, a.key) || r.delete(c);
    }), o && clearTimeout(o), o = setTimeout(r.clear.bind(r), n));
  };
}
function Dc(s, t, e) {
  var n;
  e === void 0 && (e = {});
  var i = (n = e.event) != null ? n : "keydown", r = Fo(t, e);
  return s.addEventListener(i, r), function() {
    s.removeEventListener(i, r);
  };
}
function Wo(s, t = {}) {
  if (!s)
    return;
  const e = Object.keys(t).reduce((n, i) => (t[i].optional || (n[i] = {
    ...t[i]
  }), n), {});
  return Object.keys(s).forEach((n) => {
    const i = s[n];
    i ? i === !0 ? t[n] && (e[n] = {
      ...t[n]
    }) : e[n] = i : delete e[n];
  }), Object.keys(e).reduce((n, i) => {
    const { keys: r, handler: o } = e[i];
    return typeof r == "string" ? n[r] = o : r.forEach((a) => {
      n[a] = o;
    }), n;
  }, {});
}
function jo(s, t, e) {
  const { timeout: n, event: i = "keydown", scope: r, when: o } = e || {}, a = Fo(t, { timeout: n }), l = `.zui.hotkeys${r ? `.${r}` : ""}`, c = "zui-hotkeys-composing";
  return f(s).on(`${i}${l}`, function(u) {
    o && o(u) === !1 || f(u.target).data(c) || a(u);
  }).on(`compositionstart${l}`, (u) => {
    f(u.target).data(c, !0);
  }).on(`compositionend${l}`, (u) => {
    f(u.target).removeData(c);
  });
}
function Bo(s, t) {
  return f(s).off(`.zui.hotkeys${t ? `.${t}` : ""}`);
}
const Td = Dc;
f.fn.hotkeys = function(s, t) {
  return jo(this, s, t);
};
f.fn.unbindHotkeys = function(s) {
  return Bo(this, s);
};
f.hotkeys = function(s, t) {
  jo(window, s, t);
};
f.unbindHotkeys = function(s) {
  Bo(window, s);
};
function Mi() {
  return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement;
}
async function Lc(s) {
  (typeof s == "string" || s instanceof Element || s instanceof f) && (s = { target: s });
  const { target: t, onError: e, onSuccess: n, afterExit: i, afterEnter: r } = s, o = f(t), a = o[0];
  if (!a)
    return;
  const l = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen;
  if (!l) {
    e == null || e.call(a, new Error("[ZUI] The browser does not support full screen feature."));
    return;
  }
  try {
    await l.call(a), n == null || n.call(a), f(a).off(".zui.fullscreen"), i && o.on("exitFullscreen.zui.fullscreen", i), r && o.on("enterFullscreen.zui.fullscreen", r);
  } catch (c) {
    e == null || e.call(a, c);
  }
  document.zuiBindFullscreenChange || (document.zuiBindFullscreenChange = !0, f(document).on("fullscreenchange.zui webkitfullscreenchange.zui mozfullscreenchange.zui", (c) => {
    const u = Mi();
    let h = u;
    u ? f(u).addClass("is-in-fullscreen") : (h = f(document).find(".is-in-fullscreen")[0] || document, f(h).removeClass("is-in-fullscreen")), f("body").toggleClass("has-in-fullscreen", !!u);
    const p = { event: c, target: h, fullscreenElement: u };
    f(h).trigger(u ? "enterFullscreen" : "exitFullscreen", p).trigger("toggleFullscreen", p);
  }));
}
async function Vo(s) {
  const t = Mi();
  return s === !1 && !!t === s ? s : t ? (document.exitFullscreen(), !1) : (await Lc(s), !0);
}
f.fn.fullscreen = function(s) {
  return Vo({
    target: this,
    ...s
  });
};
f.getFullscreenElement = Mi;
f.toggleFullscreen = Vo;
function pe(s) {
  return !s || s.parentNode === document ? !1 : s.parentNode ? pe(s.parentNode) : !0;
}
f.isDetached = pe;
f.fn.isDetached = function() {
  const s = this[0];
  return !s || pe(s);
};
const ge = class Uo {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0, this._destroyed = !1;
    const { KEY: n, DATA_KEY: i, DEFAULT: r, MULTI_INSTANCE: o, NAME: a, ATTR_KEY: l, ALL: c, TYPED_ALL: u } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const h = f(t);
    if (h.data(n) && !o)
      throw new Error(`[ZUI] The component "${a}" has been initialized on element.`);
    const p = h[0], d = pt();
    if (this._gid = d, this._element = p, this._options = { ...r, ...(e == null ? void 0 : e.$optionsFromDataset) !== !1 ? h.dataset() : {} }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, c.has(p) ? c.get(p).add(this) : c.set(p, /* @__PURE__ */ new Set([this])), u.has(a) ? u.get(a).add(this) : u.set(a, /* @__PURE__ */ new Set([this])), h.data(n, this).attr(l, "").attr(i, `${d}`), o) {
      const _ = `${n}:ALL`;
      let m = h.data(_);
      m || (m = /* @__PURE__ */ new Map(), h.data(_, m)), m.set(this._key, this);
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
    return f(this.element);
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
    const { KEY: t, DATA_KEY: e, ALL: n, TYPED_ALL: i, NAME: r, MULTI_INSTANCE: o, ATTR_KEY: a } = this.constructor, { $element: l, element: c } = this;
    if (this.emit("destroyed"), this._destroyed = !0, l.off(this.namespace).removeData(t).removeAttr(a).removeAttr(e), o) {
      const p = this.$element.data(`${t}:ALL`);
      if (p)
        if (p.delete(this._key), p.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const d = p.values().next().value;
          l.data(t, d).attr(e, d.gid);
        }
    }
    const u = n.get(c);
    u && (u.delete(this), u.size === 0 && n.delete(c));
    const h = i.get(r);
    h && (h.delete(this), h.size === 0 && i.delete(r));
  }
  /**
   * Auto destroy the component when detached.
   */
  autoDestroy(t = 100) {
    this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
      this._autoDestory = 0, pe(this.element) && this.destroy();
    }, t);
  }
  /**
   * Set the component options.
   *
   * @param options  The component options to set.
   * @returns The component options.
   */
  setOptions(t, e) {
    return e ? this._options = {
      ...this.constructor.DEFAULT,
      ...(t == null ? void 0 : t.$optionsFromDataset) !== !1 ? this.$element.dataset() : {},
      ...t
    } : t && f.extend(this._options, t), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(t, ...e) {
    const n = f.Event(t);
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
    const { i18nData: i } = this;
    return F(i, t, e, n, this.options.lang, this.constructor.NAME) ?? F(i, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
    const n = f(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = n.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
    }
    return n.data(this.KEY);
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
    const n = this.get(t, e == null ? void 0 : e.key);
    if (n) {
      if (this.isValid(n))
        return e && n.setOptions(e), n;
      n.destroy();
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
    const { SELECTOR: n, ALL: i, TYPED_ALL: r } = this, o = [], a = (c) => {
      c instanceof this && (!e || e(c) !== !1) && o.push(c);
    };
    return t ? f(t).find(n).each((c, u) => {
      var h;
      (h = i.get(u)) == null || h.forEach(a);
    }) : this !== Uo ? (l = r.get(this.NAME)) == null || l.forEach(a) : i.forEach((c) => {
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
  static query(t, e, n) {
    return t === void 0 ? this.getAll(void 0, n).pop() : this.get(f(t).closest(this.SELECTOR), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    f.fn[e] && (e = `zui${this.NAME}`);
    const n = this;
    f.fn.extend({
      [e](i, ...r) {
        const o = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((c, u) => {
          let h = n.get(u);
          if (h ? o && h.render(o) : h = new n(u, o), a) {
            let p = h[a], d = h;
            p === void 0 && (d = h.$, p = d[a]), typeof p == "function" ? l = p.call(d, ...r) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
  static register(t, e) {
    var i, r;
    t = t || this, e = (e ?? t.NAME).toLowerCase(), this.map.set(e, t);
    const n = (r = (i = t.toggle) == null ? void 0 : i.name) == null ? void 0 : r.toLowerCase();
    n && n !== e && this.toggleMap.set(n, t);
  }
};
ge.DEFAULT = {};
ge.MULTI_INSTANCE = !1;
ge.ALL = /* @__PURE__ */ new Map();
ge.TYPED_ALL = /* @__PURE__ */ new Map();
ge.map = /* @__PURE__ */ new Map();
ge.toggleMap = /* @__PURE__ */ new Map();
let yt = ge;
function rn(s) {
  return yt.map.get(s.toLowerCase());
}
function Ko(s, t, e = {}) {
  let n = rn(s);
  if (n || (n = qo(s)), !n)
    return null;
  const { $update: i, ...r } = e;
  if (!n.MULTI_INSTANCE) {
    const o = n.get(t);
    if (o)
      return i && o.render(r, i === "reset"), o;
  }
  return new n(t, r);
}
function zc(s, t, e = {}) {
  requestAnimationFrame(() => Ko(s, t, e));
}
function Oc(s, t) {
  yt.register(s, t);
}
function qo(s) {
  const { zui: t } = window;
  if (t) {
    s = s == null ? void 0 : s.toLowerCase();
    for (const e in t) {
      const n = e.toLowerCase() === s;
      if (s && !n)
        continue;
      const i = t[e];
      if (!(typeof i != "function" || !i.NAME || !i.ZUI) && (yt.map.has(e.toLowerCase()) || Oc(i), n))
        return i;
    }
  }
}
function $d(s) {
  var t;
  s ? (t = rn(s)) == null || t.defineFn() : window._zuiDefined || (qo(), yt.map.forEach((e) => {
    e.defineFn();
  }), Object.assign(window, { _zuiDefined: !0 }));
}
function Hc(s, t = {}) {
  const e = f(s);
  let n = e.attr("zui-create");
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
      delete l.$lib, f.getLib(c).then(() => Ko(a, s, l));
      return;
    }
    zc(a, s, l);
  };
  if (typeof n == "string") {
    n = n.trim();
    const a = n.length ? n.split(",").map((u) => u.trim()) : [], l = Ge(s, { prefix: "zui-create-", evalValue: !0 }), c = Object.keys(l);
    if (!c.length && a.length === 1)
      o(a[0], e.dataset());
    else {
      const u = /* @__PURE__ */ new Set();
      [...a, ...c].forEach((h) => {
        if (u.has(h))
          return;
        const p = l[h];
        o(h, p), delete l[h], u.add(h);
      });
    }
  } else {
    const a = e.dataset(), l = a == null ? void 0 : a.zui;
    if (!l)
      return;
    console.warn("[ZUI] create component instance with [data-zui] is deprecated, use [zui-create] instead.", { element: s, options: t }), delete a.zui, o(l, a);
  }
}
function Fc() {
  f(document).on("click.zui.toggle mouseenter.zui.toggle", "[data-toggle],[zui-toggle]", function(s) {
    const t = f(this), e = t.dataset("toggle") || t.attr("zui-toggle");
    if (!e)
      return;
    const n = yt.toggleMap.get(e) || rn(e), i = n == null ? void 0 : n.toggle;
    if (!i)
      return;
    const { trigger: r = "click", skip: o = "[disabled],.disabled", check: a } = i, l = s.type === "mouseover" ? "hover" : "click";
    if (!r.includes(l) || a && !a.call(n, this, l, s) || o && t.is(o))
      return;
    const { onGet: c, onCreate: u, setOptions: h = !0, getOptions: p, prevent: d = !0, handler: _, onToggle: m, convertHref: v } = i;
    let y = t.dataset();
    const w = t.attr(`zui-toggle-${e}`);
    if (w && (y = f.extend(y, xe(w))), v && t.is("a")) {
      const b = t.attr("href");
      if (b) {
        const S = v === !0 ? { selector: "target", url: "url" } : v;
        "#.".includes(b[0]) ? S.selector && y[S.selector] === void 0 && (y[S.selector] = b) : S.url && y[S.url] === void 0 && (y[S.url] = b);
      }
    }
    if (p && (y = p.call(n, this, y, s)), _) {
      _.call(n, this, y, l, s), d && s.preventDefault();
      return;
    }
    let C = c ? c.call(n, this) : n.get(this);
    if (C)
      h && C.setOptions(y);
    else {
      const b = u ? u.call(n, this, s, y) : new n(this, y);
      if (!b)
        return;
      C = b;
    }
    if (m) {
      if (m.call(n, C, this, s) === !1)
        return;
    } else {
      const { shown: b, show: S, hide: $, toggle: A } = C;
      let N;
      if (A ? N = A : S && $ ? b ? N = $ : N = S : S && (N = S), N)
        N.call(C);
      else
        return;
    }
    d && s.preventDefault();
  });
}
function Wc(s, t) {
  const e = Ti(s), n = [];
  return Object.keys(e).forEach((i) => {
    if (!i.startsWith("zui."))
      return;
    const r = e[i];
    (t == null ? void 0 : t(r, i)) !== !1 && n.push(e[i]);
  }), n;
}
let ms = 0;
function Go(s = 100) {
  if (ms && clearTimeout(ms), s) {
    ms = window.setTimeout(() => Go(0), s);
    return;
  }
  ms = 0, yt.ALL.forEach((t) => {
    t.forEach((e) => e.autoDestroy());
  });
}
function jc() {
  if (!document.body || Ti(document.body, "_autoDestoryMob"))
    return;
  const s = new MutationObserver((t) => {
    let e = !1;
    for (const n of t)
      if (n.removedNodes.length) {
        e = !0;
        break;
      }
    e && Go();
  });
  s.observe(document.body, { childList: !0, subtree: !0 }), ki(document.body, "_autoDestoryMob", s);
}
f.fn.zuiInit = function(s) {
  return this.find("[zui-create],[data-zui]").each(function() {
    var t;
    ((t = s == null ? void 0 : s.beforeCreate) == null ? void 0 : t.call(s, this)) !== !1 && Hc(this, s);
  }), this.find("[zui-init]").each(function() {
    this.hasAttribute("z-zui-inited") || (this.setAttribute("z-zui-inited", ""), f.runJS(this.getAttribute("zui-init"), ["$element", f(this)]));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this.find('[data-on="inited"],[zui-on-inited]').each((t, e) => {
    const n = f(e);
    n.zui() || n.trigger("inited");
  }), this;
};
f.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = {};
    let r;
    return Wc(e, (o, a) => {
      i[a] = o, (!r || r.gid < o.gid) && (r = i[a]);
    }), s === !0 ? i : r;
  }
  const n = rn(s);
  return n ? t === !0 ? n.getAll(e) : n.query(e, t) : f(e).data(`zui.${s}`);
};
f.fn.zuiCall = function(s, t = []) {
  return this.each(function() {
    const e = s.split("."), n = e.length > 1 ? e[0] : void 0, i = e[e.length > 1 ? 1 : 0], r = f(this).zui(n), o = r == null ? void 0 : r[i];
    typeof o == "function" && o.apply(r, t);
  }), this;
};
f(() => {
  f("body").zuiInit({ update: !0 }), Fc(), jc();
});
class Bc extends yt {
  init() {
    const { offset: t = 1, side: e, zIndex: n, pinnedClass: i = "is-pinned", targets: r, scrollContainer: o } = this.options, { $element: a } = this, l = r ? a.find(r) : a;
    if (l.css({ position: "sticky", zIndex: n }), e && l.css(e, -t), o) {
      const c = a.closest(o)[0];
      if (c) {
        const u = () => {
          this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
            if (this._raf = 0, c.scrollTop === 0 && (!e || e === "top")) {
              l.toggleClass(i, !1);
              return;
            }
            const h = c.getBoundingClientRect();
            l.each((p, d) => {
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
Bc.NAME = "Sticky";
function bs(s, t) {
  s = s.replace(/^#?!?!?>?/, ""), s.startsWith("/") || (s = `/${s}`);
  const e = new URL(window.location.origin + s), [, n = "", ...i] = e.pathname.split("/"), { execute: r, event: o, scope: a } = t;
  let { options: l } = t;
  return l = {
    ...Object.fromEntries([...e.searchParams.entries()].map(([c, u]) => {
      try {
        u.includes("%") && (u = decodeURIComponent(u)), u = JSON.parse(u);
      } catch {
      }
      return [c, u];
    })),
    ...l
  }, r({ name: n, options: l, event: o, scope: a }, ...i.map((c) => {
    try {
      return c.includes("%") && (c = decodeURIComponent(c)), JSON.parse(c);
    } catch {
      return c;
    }
  }));
}
async function Vc(s, t) {
  if (s.includes(">")) {
    const e = s.split(">"), n = [];
    for (const i of e) {
      if (!i.length)
        continue;
      const r = await bs(i, t);
      n.push(r);
    }
    return n;
  }
  return s.includes("|") ? Promise.all(s.split("|").map((e) => bs(e, t))) : bs(s, t);
}
function Vn(s, t) {
  if (/^#?!?!?>/.test(s))
    return Vc(s, t);
  if (s.includes(">")) {
    const e = s.split(">"), n = [];
    for (const i of e) {
      const r = Vn(i, t);
      n.push(r);
    }
    return n;
  }
  if (s.includes("|")) {
    const e = s.split("|"), n = [];
    for (const i of e) {
      const r = Vn(i, t);
      n.push(r);
    }
    return n;
  }
  return bs(s, t);
}
function Yo(s, t) {
  typeof t == "string" ? t = { scope: t } : typeof t == "function" && (t = { execute: t });
  const { scope: e = "", events: n = "click", execute: i, commands: r } = t ?? {}, o = f(s), a = `z-commands${e ? `-${e}` : ""}`;
  if (typeof o.attr(a) == "string")
    return;
  const l = e ? `zui-command-${e}` : "zui-command";
  o.attr(a, "").on(n.split(" ").map((c) => `${c}.zui.command.${e}`).join(" "), `[${l}]${e ? "" : ',a[href^="#!"]'}`, (c) => {
    if (c.commandHandled)
      return;
    const u = f(c.currentTarget);
    if (u.is(".disabled,[disabled]"))
      return;
    const h = u.attr(l) || (u.is('a[href^="#!"]') ? u.attr("href") : "");
    h && (c.commandHandled = !0, (h.startsWith("#!!") || h.startsWith("!!")) && c.stopPropagation(), Vn(h, {
      execute: (p, ...d) => {
        i == null || i(p, ...d);
        const _ = r == null ? void 0 : r[p.name];
        _ == null || _(p, ...d);
        const { name: m } = p, v = [p, d];
        u.trigger("command", v).trigger(`command:${e ? `${m}.${e}` : m}`, v), e && u.trigger(`command:.${e}`, v);
      },
      event: c,
      scope: e,
      options: {}
    }));
  });
}
function Uc(s, t) {
  const e = `z-commands${t ? `-${t}` : ""}`;
  f(s).removeAttr(e).off(`.zui.command${t ? `.${t}` : ""}`);
}
f.fn.command = function(s, t) {
  return this.on(`command:${s}`, t);
};
f.fn.offCommand = function(s, t) {
  return this.off(`command:${s}`, t);
};
f.fn.commands = function(s) {
  return this.each((t, e) => Yo(e, s)), this;
};
f.fn.unbindCommands = function(s) {
  return this.each((t, e) => Uc(e, s)), this;
};
f(() => Yo(document.body));
function on(s, t = {}) {
  const e = f(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t;
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (t.checkZeroSize && !(o * a))
    return !1;
  if (!n)
    if (t.container)
      n = f(e).closest(t.container)[0].getBoundingClientRect();
    else {
      const { innerHeight: _, innerWidth: m } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
      n = { left: 0, top: 0, width: m || y, height: _ || v };
    }
  const { left: l, top: c, width: u, height: h } = n;
  if (t.fullyCheck)
    return i >= l && r >= c && i + o <= u + l && r + a <= h + c;
  const p = i <= l + u && i + o >= l;
  return r <= c + h && r + a >= c && p;
}
f.fn.isVisible = function(s) {
  return on(this, s);
};
function Rs(s, t, e = !1) {
  var i;
  const n = f(s);
  if (t !== void 0) {
    if (typeof t == "string" && t.length) {
      const r = `zui-runjs-${pt()}`;
      n.append(`<script id="${r}">${t}<\/script>`), e && n.find(`#${r}`).remove();
    }
    return;
  }
  if (n.is("script")) {
    const r = (i = n[0]) == null ? void 0 : i.textContent;
    r && Rs(n.parent(), r);
    return;
  }
  n.find("script").each((r, o) => {
    Rs(n, o.textContent), o.remove();
  });
}
f.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
f.fn.runJS = function(s) {
  return this.each((t, e) => {
    Rs(e, s);
  });
};
function Kc(s, t = "both") {
  return (t === "vert" || t === "both") && s.clientHeight < s.scrollHeight || (t === "horz" || t === "both") && s.clientWidth < s.scrollWidth;
}
function Jo(s, t) {
  const e = f(s), { ifNeeded: n = !0, container: i, ...r } = t || {};
  return e.each((o, a) => {
    if (i) {
      const l = f(a).closest(i);
      if (!l.length || !Kc(l[0]))
        return;
    }
    if (n) {
      if (a.scrollIntoViewIfNeeded)
        return a.scrollIntoViewIfNeeded(r);
      if (on(a, { viewport: a.getBoundingClientRect() }))
        return;
    }
    a.scrollIntoView(r);
  }), e;
}
f.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Jo(e, s);
  });
};
f.setLibRoot = function(s) {
  f.libRoot = s;
};
f.registerLib = function(s, t) {
  f.libMap || (f.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${s}`), f.libMap[s] = t;
};
function Zo(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s;
    if (f(i ? `#${i}` : `link[href="${n}"]`).length) {
      t();
      return;
    }
    const o = document.createElement("link");
    o.onload = () => {
      t();
    }, o.onerror = () => {
      e(new Error(`[ZUI] Failed to load CSS from: ${n}`));
    }, o.rel = "stylesheet", o.href = n, i && (o.id = i), f("head").append(o);
  });
}
function Xo(s) {
  return new Promise((t, e) => {
    typeof s == "string" && (s = { src: s });
    const { src: n, id: i } = s, r = f(i ? `#${i}` : `script[src="${n}"]`);
    if (r.length) {
      if (r.dataset("loaded"))
        t();
      else {
        const p = r.data("loadCalls") || [];
        p.push(t), r.data("loadCalls", p);
      }
      return;
    }
    const { async: o = !0, defer: a = !1, noModule: l = !1, type: c, integrity: u } = s, h = document.createElement("script");
    h.async = o, h.defer = a, h.noModule = l, c && (h.type = c), u && (h.integrity = u), h.onload = () => {
      t(), (f(h).dataset("loaded", !0).data("loadCalls") || []).forEach((d) => d()), f(h).removeData("loadCalls");
    }, h.onerror = () => {
      e(new Error(`[ZUI] Failed to load JS from: ${n}`));
    }, f("head").append(h), h.src = n;
  });
}
function Qo(s) {
  return new Promise((t) => {
    typeof s == "string" && (s = { type: "module", src: s });
    const { src: e, imports: n, srcList: i = [], id: r } = s;
    e && i.unshift({ src: e, imports: n });
    const o = i.map((y) => y.src).join(","), a = f(r ? `#${r}` : `script[data-src-list="${o}"]`);
    if (a.length) {
      const y = a.data("module");
      if (y)
        t(y);
      else {
        const w = a.data("resolves") || [];
        w.push(t), a.data("resolves", w);
      }
      return;
    }
    const { async: l = !0, defer: c = !1, integrity: u, globalVar: h, resolve: p } = s, d = document.createElement("script"), _ = `zui-module-resolve-${f.guid++}`, m = f(d);
    Object.assign(window, { [_]: (y) => {
      (m.data("module", y).data("resolves") || []).forEach((C) => C(y)), m.removeData("resolves").removeData("module"), p == null || p(y), t(y), delete window[_];
    } }), d.async = l, d.defer = c, d.type = "module", m.attr("data-src-list", o).attr("data-resolve-id", _);
    const v = [];
    d.text = [
      ...i.map(({ src: y, imports: w }) => {
        if (n) {
          if (typeof w == "string")
            return v.push(w), `import * as ${w} from '${y}';`;
          if (w)
            return v.push(...Object.values(w)), `import {${Object.entries(w).map(([C, b]) => `${C} as ${b}`).join(",")}} from '${y}';`;
        }
        return `import '${y}';`;
      }),
      `const zuiImportResult = {${v.map((y) => `${y}: ${y},`)}};`,
      h ? `Object.assign(window, ${h === !0 ? "zuiImportResult" : `{${h}: zuiImportResult}`});` : "",
      `if(window['${_}']) window['${_}'](zuiImportResult);`
    ].join(`
`), u && (d.integrity = u), f("head").append(d);
  });
}
f.getLib = async function(s, t, e) {
  var _;
  typeof s == "string" && (s = ((_ = f.libMap) == null ? void 0 : _[s]) || { src: s });
  let n = Array.isArray(s) ? { src: s } : f.extend({}, s);
  typeof t == "function" ? n.success = t : t && f.extend(n, t), e && (n.success = e);
  let { src: i } = n;
  const { name: r, success: o } = n, a = f.libMap && r ? f.libMap[r] : null;
  if (a && (n = f.extend({}, a, n), i = a.src || n.src), typeof i == "string" && (i = [i]), !i || !i.length)
    throw new Error("[ZUI] No src provided for $.getLib.");
  let { check: l = !0 } = n;
  l === !0 && r && (l = r);
  const c = typeof l == "string" ? l : r;
  let u;
  const h = () => c ? window[c] || u : void 0;
  typeof l == "string" && (l = () => !!h());
  const p = () => (o == null || o(), h());
  if (typeof l == "function" && await l())
    return p();
  const { root: d = f.libRoot } = n;
  for (let m of i) {
    typeof m == "string" && (m = { src: m });
    let { src: v } = m;
    d && !/https?:\/\//.test(v) && (v = `${d}${d.endsWith("/") || v.startsWith("/") ? "" : "/"}${v}`);
    const y = {
      ...n,
      ...m,
      src: v
    };
    if (m.type === "css" || !m.type && v.endsWith(".css")) {
      await Zo(y);
      continue;
    }
    if (y.type === "module") {
      u = await Qo(y);
      continue;
    }
    await Xo(y);
  }
  return p();
};
f.getScript = f.getLib;
function ta(s, t) {
  const e = f(s), n = new ResizeObserver(t);
  return e.each((i, r) => {
    n.observe(r);
  }), n;
}
f.fn.resize = function(s) {
  return ta(this, s);
};
const Nd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isElementDetached: pe,
  isVisible: on,
  listenResize: ta,
  loadCSS: Zo,
  loadJS: Xo,
  loadModule: Qo,
  runJS: Rs,
  scrollIntoView: Jo
}, Symbol.toStringTag, { value: "Module" }));
var Un, ut, Nn, Mr, Pr = 0, ea = [], J = O, Ir = J.__b, Rr = J.__r, Dr = J.diffed, Lr = J.__c, zr = J.unmount, Or = J.__;
function qc(s, t) {
  J.__h && J.__h(ut, s, Pr || t), Pr = 0;
  var e = ut.__H || (ut.__H = { __: [], __h: [] });
  return s >= e.__.length && e.__.push({}), e.__[s];
}
function sa(s, t) {
  var e = qc(Un++, 7);
  return Jc(e.__H, t) && (e.__ = s(), e.__H = t, e.__h = s), e.__;
}
function Gc() {
  for (var s; s = ea.shift(); )
    if (s.__P && s.__H)
      try {
        s.__H.__h.forEach(Cs), s.__H.__h.forEach(Kn), s.__H.__h = [];
      } catch (t) {
        s.__H.__h = [], J.__e(t, s.__v);
      }
}
J.__b = function(s) {
  ut = null, Ir && Ir(s);
}, J.__ = function(s, t) {
  s && t.__k && t.__k.__m && (s.__m = t.__k.__m), Or && Or(s, t);
}, J.__r = function(s) {
  Rr && Rr(s), Un = 0;
  var t = (ut = s.__c).__H;
  t && (Nn === ut ? (t.__h = [], ut.__h = [], t.__.forEach(function(e) {
    e.__N && (e.__ = e.__N), e.i = e.__N = void 0;
  })) : (t.__h.forEach(Cs), t.__h.forEach(Kn), t.__h = [], Un = 0)), Nn = ut;
}, J.diffed = function(s) {
  Dr && Dr(s);
  var t = s.__c;
  t && t.__H && (t.__H.__h.length && (ea.push(t) !== 1 && Mr === J.requestAnimationFrame || ((Mr = J.requestAnimationFrame) || Yc)(Gc)), t.__H.__.forEach(function(e) {
    e.i && (e.__H = e.i), e.i = void 0;
  })), Nn = ut = null;
}, J.__c = function(s, t) {
  t.some(function(e) {
    try {
      e.__h.forEach(Cs), e.__h = e.__h.filter(function(n) {
        return !n.__ || Kn(n);
      });
    } catch (n) {
      t.some(function(i) {
        i.__h && (i.__h = []);
      }), t = [], J.__e(n, e.__v);
    }
  }), Lr && Lr(s, t);
}, J.unmount = function(s) {
  zr && zr(s);
  var t, e = s.__c;
  e && e.__H && (e.__H.__.forEach(function(n) {
    try {
      Cs(n);
    } catch (i) {
      t = i;
    }
  }), e.__H = void 0, t && J.__e(t, e.__v));
};
var Hr = typeof requestAnimationFrame == "function";
function Yc(s) {
  var t, e = function() {
    clearTimeout(n), Hr && cancelAnimationFrame(t), setTimeout(s);
  }, n = setTimeout(e, 100);
  Hr && (t = requestAnimationFrame(e));
}
function Cs(s) {
  var t = ut, e = s.__c;
  typeof e == "function" && (s.__c = void 0, e()), ut = t;
}
function Kn(s) {
  var t = ut;
  s.__c = s.__(), ut = t;
}
function Jc(s, t) {
  return !s || s.length !== t.length || t.some(function(e, n) {
    return e !== s[n];
  });
}
var Zc = Symbol.for("preact-signals");
function an() {
  if (Yt > 1)
    Yt--;
  else {
    for (var s, t = !1; Ve !== void 0; ) {
      var e = Ve;
      for (Ve = void 0, qn++; e !== void 0; ) {
        var n = e.o;
        if (e.o = void 0, e.f &= -3, !(8 & e.f) && ia(e))
          try {
            e.c();
          } catch (i) {
            t || (s = i, t = !0);
          }
        e = n;
      }
    }
    if (qn = 0, Yt--, t)
      throw s;
  }
}
function Xc(s) {
  if (Yt > 0)
    return s();
  Yt++;
  try {
    return s();
  } finally {
    an();
  }
}
var I = void 0;
function Ed(s) {
  var t = I;
  I = void 0;
  try {
    return s();
  } finally {
    I = t;
  }
}
var Ve = void 0, Yt = 0, qn = 0, Ds = 0;
function na(s) {
  if (I !== void 0) {
    var t = s.n;
    if (t === void 0 || t.t !== I)
      return t = { i: 0, S: s, p: I.s, n: void 0, t: I, e: void 0, x: void 0, r: t }, I.s !== void 0 && (I.s.n = t), I.s = t, s.n = t, 32 & I.f && s.S(t), t;
    if (t.i === -1)
      return t.i = 0, t.n !== void 0 && (t.n.p = t.p, t.p !== void 0 && (t.p.n = t.n), t.p = I.s, t.n = void 0, I.s.n = t, I.s = t), t;
  }
}
function nt(s) {
  this.v = s, this.i = 0, this.n = void 0, this.t = void 0;
}
nt.prototype.brand = Zc;
nt.prototype.h = function() {
  return !0;
};
nt.prototype.S = function(s) {
  this.t !== s && s.e === void 0 && (s.x = this.t, this.t !== void 0 && (this.t.e = s), this.t = s);
};
nt.prototype.U = function(s) {
  if (this.t !== void 0) {
    var t = s.e, e = s.x;
    t !== void 0 && (t.x = e, s.e = void 0), e !== void 0 && (e.e = t, s.x = void 0), s === this.t && (this.t = e);
  }
};
nt.prototype.subscribe = function(s) {
  var t = this;
  return Ri(function() {
    var e = t.value, n = I;
    I = void 0;
    try {
      s(e);
    } finally {
      I = n;
    }
  });
};
nt.prototype.valueOf = function() {
  return this.value;
};
nt.prototype.toString = function() {
  return this.value + "";
};
nt.prototype.toJSON = function() {
  return this.value;
};
nt.prototype.peek = function() {
  var s = I;
  I = void 0;
  try {
    return this.value;
  } finally {
    I = s;
  }
};
Object.defineProperty(nt.prototype, "value", { get: function() {
  var s = na(this);
  return s !== void 0 && (s.i = this.i), this.v;
}, set: function(s) {
  if (s !== this.v) {
    if (qn > 100)
      throw new Error("Cycle detected");
    this.v = s, this.i++, Ds++, Yt++;
    try {
      for (var t = this.t; t !== void 0; t = t.x)
        t.t.N();
    } finally {
      an();
    }
  }
} });
function Pi(s) {
  return new nt(s);
}
function ia(s) {
  for (var t = s.s; t !== void 0; t = t.n)
    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i)
      return !0;
  return !1;
}
function ra(s) {
  for (var t = s.s; t !== void 0; t = t.n) {
    var e = t.S.n;
    if (e !== void 0 && (t.r = e), t.S.n = t, t.i = -1, t.n === void 0) {
      s.s = t;
      break;
    }
  }
}
function oa(s) {
  for (var t = s.s, e = void 0; t !== void 0; ) {
    var n = t.p;
    t.i === -1 ? (t.S.U(t), n !== void 0 && (n.n = t.n), t.n !== void 0 && (t.n.p = n)) : e = t, t.S.n = t.r, t.r !== void 0 && (t.r = void 0), t = n;
  }
  s.s = e;
}
function Ee(s) {
  nt.call(this, void 0), this.x = s, this.s = void 0, this.g = Ds - 1, this.f = 4;
}
(Ee.prototype = new nt()).h = function() {
  if (this.f &= -3, 1 & this.f)
    return !1;
  if ((36 & this.f) == 32 || (this.f &= -5, this.g === Ds))
    return !0;
  if (this.g = Ds, this.f |= 1, this.i > 0 && !ia(this))
    return this.f &= -2, !0;
  var s = I;
  try {
    ra(this), I = this;
    var t = this.x();
    (16 & this.f || this.v !== t || this.i === 0) && (this.v = t, this.f &= -17, this.i++);
  } catch (e) {
    this.v = e, this.f |= 16, this.i++;
  }
  return I = s, oa(this), this.f &= -2, !0;
};
Ee.prototype.S = function(s) {
  if (this.t === void 0) {
    this.f |= 36;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.S(t);
  }
  nt.prototype.S.call(this, s);
};
Ee.prototype.U = function(s) {
  if (this.t !== void 0 && (nt.prototype.U.call(this, s), this.t === void 0)) {
    this.f &= -33;
    for (var t = this.s; t !== void 0; t = t.n)
      t.S.U(t);
  }
};
Ee.prototype.N = function() {
  if (!(2 & this.f)) {
    this.f |= 6;
    for (var s = this.t; s !== void 0; s = s.x)
      s.t.N();
  }
};
Object.defineProperty(Ee.prototype, "value", { get: function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  var s = na(this);
  if (this.h(), s !== void 0 && (s.i = this.i), 16 & this.f)
    throw this.v;
  return this.v;
} });
function Qc(s) {
  return new Ee(s);
}
function aa(s) {
  var t = s.u;
  if (s.u = void 0, typeof t == "function") {
    Yt++;
    var e = I;
    I = void 0;
    try {
      t();
    } catch (n) {
      throw s.f &= -2, s.f |= 8, Ii(s), n;
    } finally {
      I = e, an();
    }
  }
}
function Ii(s) {
  for (var t = s.s; t !== void 0; t = t.n)
    t.S.U(t);
  s.x = void 0, s.s = void 0, aa(s);
}
function th(s) {
  if (I !== this)
    throw new Error("Out-of-order effect");
  oa(this), I = s, this.f &= -2, 8 & this.f && Ii(this), an();
}
function os(s) {
  this.x = s, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32;
}
os.prototype.c = function() {
  var s = this.S();
  try {
    if (8 & this.f || this.x === void 0)
      return;
    var t = this.x();
    typeof t == "function" && (this.u = t);
  } finally {
    s();
  }
};
os.prototype.S = function() {
  if (1 & this.f)
    throw new Error("Cycle detected");
  this.f |= 1, this.f &= -9, aa(this), ra(this), Yt++;
  var s = I;
  return I = this, th.bind(this, s);
};
os.prototype.N = function() {
  2 & this.f || (this.f |= 2, this.o = Ve, Ve = this);
};
os.prototype.d = function() {
  this.f |= 8, 1 & this.f || Ii(this);
};
function Ri(s) {
  var t = new os(s);
  try {
    t.c();
  } catch (e) {
    throw t.d(), e;
  }
  return t.d.bind(t);
}
var En;
function Ae(s, t) {
  O[s] = t.bind(null, O[s] || function() {
  });
}
function Ls(s) {
  En && En(), En = s && s.S();
}
function la(s) {
  var t = this, e = s.data, n = sh(e);
  n.value = e;
  var i = sa(function() {
    for (var r = t.__v; r = r.__; )
      if (r.__c) {
        r.__c.__$f |= 4;
        break;
      }
    return t.__$u.c = function() {
      var o;
      !ft(i.peek()) && ((o = t.base) == null ? void 0 : o.nodeType) === 3 ? t.base.data = i.peek() : (t.__$f |= 1, t.setState({}));
    }, Qc(function() {
      var o = n.value.value;
      return o === 0 ? 0 : o === !0 ? "" : o || "";
    });
  }, []);
  return i.value;
}
la.displayName = "_st";
Object.defineProperties(nt.prototype, { constructor: { configurable: !0, value: void 0 }, type: { configurable: !0, value: la }, props: { configurable: !0, get: function() {
  return { data: this };
} }, __b: { configurable: !0, value: 1 } });
Ae("__b", function(s, t) {
  if (typeof t.type == "string") {
    var e, n = t.props;
    for (var i in n)
      if (i !== "children") {
        var r = n[i];
        r instanceof nt && (e || (t.__np = e = {}), e[i] = r, n[i] = r.peek());
      }
  }
  s(t);
});
Ae("__r", function(s, t) {
  Ls();
  var e, n = t.__c;
  n && (n.__$f &= -2, (e = n.__$u) === void 0 && (n.__$u = e = function(i) {
    var r;
    return Ri(function() {
      r = this;
    }), r.c = function() {
      n.__$f |= 1, n.setState({});
    }, r;
  }())), Ls(e), s(t);
});
Ae("__e", function(s, t, e, n) {
  Ls(), s(t, e, n);
});
Ae("diffed", function(s, t) {
  Ls();
  var e;
  if (typeof t.type == "string" && (e = t.__e)) {
    var n = t.__np, i = t.props;
    if (n) {
      var r = e.U;
      if (r)
        for (var o in r) {
          var a = r[o];
          a !== void 0 && !(o in n) && (a.d(), r[o] = void 0);
        }
      else
        e.U = r = {};
      for (var l in n) {
        var c = r[l], u = n[l];
        c === void 0 ? (c = eh(e, l, u, i), r[l] = c) : c.o(u, i);
      }
    }
  }
  s(t);
});
function eh(s, t, e, n) {
  var i = t in s && s.ownerSVGElement === void 0, r = Pi(e);
  return { o: function(o, a) {
    r.value = o, n = a;
  }, d: Ri(function() {
    var o = r.value.value;
    n[t] !== o && (n[t] = o, i ? s[t] = o : o ? s.setAttribute(t, o) : s.removeAttribute(t));
  }) };
}
Ae("unmount", function(s, t) {
  if (typeof t.type == "string") {
    var e = t.__e;
    if (e) {
      var n = e.U;
      if (n) {
        e.U = void 0;
        for (var i in n) {
          var r = n[i];
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
  s(t);
});
Ae("__h", function(s, t, e, n) {
  (n < 3 || n === 9) && (t.__$f |= 2), s(t, e, n);
});
W.prototype.shouldComponentUpdate = function(s, t) {
  var e = this.__$u;
  if (!(e && e.s !== void 0 || 4 & this.__$f) || 3 & this.__$f)
    return !0;
  for (var n in t)
    return !0;
  for (var i in s)
    if (i !== "__source" && s[i] !== this.props[i])
      return !0;
  for (var r in this.props)
    if (!(r in s))
      return !0;
  return !1;
};
function sh(s) {
  return sa(function() {
    return Pi(s);
  }, []);
}
const ca = {};
function lt(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    lt(e, s[e]);
  }) : t && (ca[s.toLowerCase()] = t);
}
function nh(s) {
  return ca[s.toLowerCase()];
}
class Q extends W {
  constructor(t) {
    super(t), this._gid = pt(), this.state = this.getDefaultState(t);
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDefaultState(t) {
    return {};
  }
  resetState(t, e) {
    const n = this.getDefaultState(t);
    e ? this.state = n : this.changeState(n);
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
    const { i18nData: i } = this;
    return F(i, t, e, n, this.props.lang, this.constructor.NAME) ?? F(i, t, e, n, this.props.lang) ?? `{i18n:${t}}`;
  }
  changeState(t, e) {
    return new Promise((n) => {
      this.setState(t, () => {
        e == null || e(), n(this.state);
      });
    });
  }
  _getClassName(t) {
    return t.className;
  }
  _getProps(t) {
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, class: u, ...h } = t, p = new Set(this.constructor.customProps), d = "dangerouslySetInnerHTML", _ = Object.keys(h).reduce((m, v) => {
      if (!p.has(v) && (v === d || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(v))) {
        const y = h[v];
        m[v] = v !== d && y && typeof y == "object" ? JSON.stringify(y) : y;
      }
      return m;
    }, {});
    return { ref: o, className: k(this._getClassName(t), u) || void 0, style: c, [`z-gid-${this._gid}`]: "", ..._, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? nh(e) : e) || e;
  }
  _getChildren(t) {
    return t.children;
  }
  _beforeRender(t) {
    return t;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _onRender(t, e, n, i) {
    return [t, e, n];
  }
  render(t) {
    t = this._beforeRender(t) || t;
    let e = this._getComponent(t), n = this._getChildren(t), i = this._getProps(t);
    const r = this._onRender(e, i, n, t);
    return r && ([e, i, n] = r), wt(e, i, n);
  }
}
Q.HElement = !0;
Q.customProps = [];
class ih extends Q {
  constructor(t) {
    super(t), this.singals = {};
    const { state: e } = this;
    this.changeState(e), this.state = {};
  }
  changeState(t, e) {
    return Xc(() => {
      typeof t == "function" && (t = t(this.state));
      for (const n in t) {
        const i = this.singals[n];
        i ? i.value = t[n] : this.singals[n] = Pi(t[n]);
      }
      e == null || e();
    }), Promise.resolve({});
  }
  resetState(t) {
    this.changeState(this.getDefaultState(t));
  }
}
ih.HElementSignals = !0;
var rh = 0;
function g(s, t, e, n, i, r) {
  t || (t = {});
  var o, a, l = t;
  if ("ref" in l)
    for (a in l = {}, t)
      a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --rh, __i: -1, __u: 0, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return O.vnode && O.vnode(c), c;
}
class ke extends W {
  constructor() {
    super(...arguments), this._ref = G();
  }
  _runJS() {
    this.props.executeScript && f(this._ref.current).runJS().zuiInit();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && this._runJS();
  }
  render(t) {
    const { executeScript: e, html: n, ...i } = t;
    return /* @__PURE__ */ g(Q, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function oh(s) {
  const {
    tag: t,
    className: e,
    style: n,
    renders: i,
    generateArgs: r = [],
    generatorThis: o,
    generators: a,
    onGenerate: l,
    onRenderItem: c,
    ...u
  } = s, h = [e], p = { ...n }, d = [], _ = [];
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
      y != null && (typeof y == "object" && !ft(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? d.push(
        /* @__PURE__ */ g("div", { className: k(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? _.push(y.__html) : (y.style && Object.assign(p, y.style), y.className && h.push(y.className), y.children && d.push(y.children), y.attrs && Object.assign(u, y.attrs)) : d.push(y));
    });
  }), _.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: _ } }), [{
    className: k(h),
    style: p,
    ...u
  }, d];
}
function ha({
  tag: s = "div",
  ...t
}) {
  const [e, n] = oh(t);
  return wt(s, e, ...n);
}
function Gn(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => Gn({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "string" || typeof r == "number")
    return Object.keys(i).length ? /* @__PURE__ */ g("div", { ...i, children: r }) : r;
  if (r && typeof r == "object" && (typeof r.html == "string" || r.component)) {
    if (r.html)
      return /* @__PURE__ */ g(ke, { ...z(i, r) });
    const { children: o, ...a } = r;
    return o && (r = z({ children: (Array.isArray(o) ? o : [o]).map((l) => Gn({ ...i, content: l, generatorThis: n, generatorArgs: e })) }, a)), /* @__PURE__ */ g(Q, { ...z(i, r) });
  }
  return ft(r) ? r : (r && (console.groupCollapsed("[ZUI] CustomContent format error"), console.trace("content:", r), console.log("props:", s), console.groupEnd()), null);
}
function L(s) {
  const t = Gn(s);
  return t == null || typeof t == "boolean" ? null : ft(t) ? t : /* @__PURE__ */ g(Ne, { children: t });
}
const Fr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function st(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (ft(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Fr(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? Fr(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ g("i", { className: k(i), ...n });
}
function ah(s) {
  return this.getChildContext = () => s.context, s.children;
}
function ua(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    be(null, t._temp), t._temp = null, t._container = null;
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
  }), be(
    wt(ah, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function lh(s, t) {
  const e = wt(ua, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
lt({
  HElement: Q,
  element: Q,
  HtmlContent: ke,
  html: ke,
  CustomContent: L,
  custom: L,
  Icon: st,
  Portal: ua
});
class U extends yt {
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
    const { element: n, $: i } = this, { Component: r, replace: o } = this.constructor, { $replace: a = o, $optionsFromDataset: l, ...c } = this.setOptions(t, e), u = {
      ref: this._ref,
      ...c
    };
    if (e && ((h = i == null ? void 0 : i.resetState) == null || h.call(i, c)), a && r.HElement && (n.tagName.toLowerCase() === a || a === !0)) {
      const p = Array.from(n.attributes).reduce((d, _) => {
        const { name: m, value: v } = _;
        return d[m === "class" ? "className" : m] = v, d;
      }, {});
      be(
        wt(r, z({ component: n.tagName.toLowerCase(), attrs: p }, u)),
        n.parentElement,
        n
      );
    } else
      be(
        wt(r, u),
        n
      );
  }
  static renderHTML(t) {
    const e = document.createElement("div");
    return be(wt(this.Component, t), e), e.innerHTML;
  }
}
U.replace = !1;
class Z extends Q {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ g(st, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ g(st, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ g("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ g(st, { icon: l }),
      e ? null : c ? /* @__PURE__ */ g("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: u } = t;
    return ["btn", e, n, {
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
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      type: l ? void 0 : "button",
      disabled: !l && r ? "" : void 0,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = k([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: Z
}, Symbol.toStringTag, { value: "Module" }));
lt(ch);
let rt = class extends Q {
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
    var e, n;
    return (n = (e = this._renderedItems) == null ? void 0 : e[t]) == null ? void 0 : n.key;
  }
  _getItemFromEvent(t, e) {
    var l;
    const n = (e || t.target).closest("[z-item]");
    if (!n || !((l = n.parentElement) != null && l.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const i = +n.getAttribute("z-item"), r = this._items[i];
    if (!r)
      return;
    const o = this.getKey(i);
    if (o === void 0)
      return;
    const a = this._renderedItems[i];
    return { index: i, item: r, element: n, event: t, key: o, renderedItem: a, relativeTarget: this.props.relativeTarget };
  }
  _handleClick(t) {
    var n, i;
    const e = this._getItemFromEvent(t);
    if (e)
      return (n = this.props.onClickItem) == null || n.call(this, e), (i = e.item.onClick) == null || i.call(this, t, e), e;
  }
  /**
   * Render the item content.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item rendered content.
   */
  _renderItem(t, e, n) {
    const { beforeRenderItem: i } = t;
    if (i) {
      const c = i.call(this, e, n);
      c !== void 0 && (e = c);
    }
    const { type: r } = e;
    let { itemRender: o } = t;
    if (o && typeof o == "object" && (o = o[r]), o) {
      const c = o.call(this, e, n);
      if (c !== void 0)
        return /* @__PURE__ */ g(L, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r];
    if (!l && e.component)
      return /* @__PURE__ */ g(L, { "z-key": e.key, "z-item": n, "z-type": r, content: { ...e } });
    if (l = l || a.default || Q, Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = z({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ g(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
  }
  /**
   * Get the rendered item final properties.
   *
   * @param props  Current list properties.
   * @param item   The item to render.
   * @param index  The item index.
   * @returns The item to rendered, if return false, the item will not be rendered.
   */
  _getItem(t, e, n) {
    if (!e)
      return !1;
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: u } = this, { defaultItemProps: h = {}, defaultItemPropsMap: p = {} } = this.constructor;
    if (e = z(
      { type: l },
      h,
      p[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", u] },
      e,
      {
        _item: e,
        _index: n,
        key: String((a ? e[a] : e.key) ?? e.key ?? n),
        onClick: void 0
      }
    ), o) {
      const d = o.call(this, e, n);
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
    const { getItems: n } = t;
    if (n) {
      const i = n.call(this, e);
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
    return this._renderedItems = e.map((n, i) => {
      const r = this._getItem(t, n, i);
      return r || void 0;
    }), this._renderedItems.reduce((n, i, r) => (i && n.push(this._renderItem(t, i, r)), n), []);
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
    const n = this._renderItems(t, e);
    return t.children && n.push(t.children), n;
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
rt.NAME = "";
rt.ITEM_NAME = "item";
rt.TAG = "ul";
rt.ItemComponents = {
  default: Q,
  divider: [Q, { className: "divider" }],
  space: [Q, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
rt.defaultItemProps = {
  component: "li"
};
rt.defaultItemPropsMap = {};
rt.defaultItemType = "item";
rt.defaultProps = {
  itemKey: "id"
};
const hh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: rt
}, Symbol.toStringTag, { value: "Module" }));
class ln extends U {
}
ln.NAME = "CommonList";
ln.Component = rt;
ln.replace = rt.TAG;
ln.register();
lt(hh);
function uh(s) {
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
function dh(s) {
  const [t, e, n] = typeof s == "string" ? uh(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Wr(s, t) {
  return dh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function jr(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function fh(s, t, e) {
  s = s % 360 / 360, t = jr(t), e = jr(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function ph(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function gh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let cn = class extends W {
  render() {
    const {
      className: t,
      style: e,
      size: n = "",
      circle: i,
      rounded: r,
      background: o,
      foreColor: a,
      icon: l,
      text: c,
      code: u,
      maxTextLength: h = 2,
      src: p,
      hueDistance: d = 43,
      saturation: _ = 0.4,
      lightness: m = 0.6,
      children: v,
      ...y
    } = this.props, w = ["avatar", t], C = { ...e, background: o, color: a };
    let b = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, b = n) : (w.push(`size-${n}`), b = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : r && (typeof r == "number" ? C.borderRadius = `${r}px` : w.push(`rounded-${r}`));
    let S;
    if (p)
      w.push("has-img"), S = /* @__PURE__ */ g("img", { className: "avatar-img", src: p, alt: c });
    else if (l)
      w.push("has-icon"), S = /* @__PURE__ */ g(st, { icon: l });
    else if (c != null && c.length) {
      const $ = gh(c, h), A = $.length;
      if (w.push("has-text", `has-text-${A}`), o === void 0) {
        const E = u ?? c, T = (typeof E == "number" ? E : ph(E)) * d % 360;
        if (C.background = `hsl(${T},${_ * 100}%,${m * 100}%)`, !a) {
          const M = fh(T, _, m);
          C.color = Wr(M);
        }
      } else
        !a && o && (C.color = Wr(o));
      let N;
      b && b < 16 * A && (N = { transform: `scale(${b / (16 * A)})`, whiteSpace: "nowrap" }), S = /* @__PURE__ */ g("div", { "data-actualSize": b, className: "avatar-text", style: N, children: $ });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        className: k(w),
        style: C,
        ...y,
        children: [
          S,
          v
        ]
      }
    );
  }
};
const mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: cn
}, Symbol.toStringTag, { value: "Module" }));
let kt = class extends rt {
  _isBtnType({ type: t }) {
    return t === "item" || t === "dropdown";
  }
  _getItem(t, e, n) {
    if (!e)
      return !1;
    e.type || (e = f.extend({ type: e.dropdown || e.items ? "dropdown" : "item" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = z({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = z({}, e, zo({ btnType: n, size: i }));
  }
};
kt.NAME = "btn-group";
kt.TAG = "nav";
kt.ItemComponents = {
  ...rt.ItemComponents,
  default: Z
};
kt.defaultItemProps = {
  component: void 0
};
const hn = class da extends kt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = k(n.className, `gap-${e}`) : n.style = f.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { type: r } = i, o = r === "btn-group" || r === "btnGroup";
    return o && (i.btnProps = z({}, this._shareBtnProps, i.btnProps)), (o || r === "dropdown") && !i.relativeTarget && (i.relativeTarget = t.relativeTarget), i;
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = z(n, r)), /* @__PURE__ */ g(da, { ...r });
  }
};
hn.NAME = "toolbar";
hn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
hn.ItemComponents = {
  ...kt.ItemComponents,
  btnGroup: kt,
  "btn-group": kt
};
let Tt = hn;
const _h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: Tt
}, Symbol.toStringTag, { value: "Module" }));
class un extends Q {
  constructor(t) {
    super(t), this._handleChange = (e) => {
      const { onChange: n } = this.props, i = e.target.indeterminate ? "indeterminate" : e.target.checked;
      n && n.call(this, e, i), this._controlled || this.setState({ checked: i });
    }, this.state = {
      checked: t.checked ?? t.defaultChecked ?? !1
    }, this._controlled = t.checked !== void 0;
  }
  get checked() {
    return this._controlled ? this.props.checked : this.state.checked;
  }
  _getClassName(t) {
    const { disabled: e, type: n = "checkbox" } = t, { checked: i } = this;
    return [t.className, n === "switch" ? n : `${n}-primary`, {
      disabled: e,
      checked: i === !0,
      indeterminate: i === "indeterminate"
    }];
  }
  _getChildren(t) {
    const { name: e, type: n, value: i, id: r, label: o } = t, { checked: a } = this;
    return [
      e ? /* @__PURE__ */ g(
        "input",
        {
          type: n === "radio" ? n : "checkbox",
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
class yh extends un {
}
yh.defaultProps = {
  type: "radio"
};
class vh extends un {
}
vh.defaultProps = {
  type: "switch"
};
class Te extends Q {
  _renderLeading(t) {
    const {
      icon: e,
      avatar: n,
      toggleIcon: i,
      leading: r,
      leadingClass: o,
      checked: a,
      checkbox: l,
      multiline: c
    } = t, u = [];
    if (i && u.push(/* @__PURE__ */ g(L, { content: i }, "toggleIcon")), a !== void 0 && u.push(/* @__PURE__ */ g(un, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && u.push(/* @__PURE__ */ g(st, { className: "item-icon", icon: e }, "icon")), n) {
      const p = typeof n == "function" ? n.call(this, t) : n;
      p && (p.className = k("item-avatar", p.className), u.push(/* @__PURE__ */ g(cn, { ...p }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ g(L, { content: r }, "leading") : null;
    return h && u.push(h), c ? u.length ? [
      /* @__PURE__ */ g("div", { className: k("item-leading", o), children: u }, "leading")
    ] : [] : u;
  }
  _renderContent(t, e) {
    const {
      textClass: n,
      titleClass: i,
      titleAttrs: r,
      subtitle: o,
      subtitleClass: a,
      url: l,
      target: c,
      content: u,
      contentClass: h,
      contentAttrs: p
    } = t, d = l && !e, _ = d ? "a" : "div";
    let { title: m, text: v } = t;
    return m === void 0 && (m = v, v = null), [
      /* @__PURE__ */ g("div", { className: k("item-content", h), ...p, children: [
        m ? /* @__PURE__ */ g(_, { className: k("item-title", i), href: d ? l : void 0, target: d ? c : void 0, ...r, children: /* @__PURE__ */ g(L, { content: m }) }, "title") : null,
        o ? /* @__PURE__ */ g("div", { className: k("item-subtitle", a), children: /* @__PURE__ */ g(L, { content: o }) }, "subtitle") : null,
        v ? /* @__PURE__ */ g("div", { className: k("item-text text", n), children: v }, "text") : null,
        u ? /* @__PURE__ */ g(L, { content: u }, "extraContent") : null
      ] }, "content")
    ];
  }
  _renderTrailing(t) {
    const {
      multiline: e,
      trailing: n,
      trailingClass: i,
      trailingIcon: r,
      actions: o
    } = t, a = [];
    r && a.push(/* @__PURE__ */ g(st, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o && a.push(Tt.render(o, [t], { key: "actions", relativeTarget: t, size: "sm" }, this));
    const l = n ? /* @__PURE__ */ g(L, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ g("div", { className: k("item-trailing", i), children: [
        a,
        l
      ] }, "trailing")
    ] : [] : a;
  }
  _render(t, e) {
    const {
      innerComponent: n,
      innerClass: i,
      innerAttrs: r,
      url: o,
      actions: a,
      target: l,
      active: c,
      disabled: u,
      divider: h,
      checked: p,
      multiline: d,
      title: _,
      subtitle: m,
      hint: v,
      selected: y
    } = t, w = n || (o && !a ? "a" : "div"), C = w === "a", b = z({
      key: "item",
      title: v,
      className: k("listitem", i, {
        active: c,
        disabled: u,
        "has-divider": h,
        selected: y,
        checked: p,
        multiline: d ?? !!(_ && m),
        state: C && !u
      })
    }, C ? { href: o || "javascript:;", target: l } : null, e, r);
    return /* @__PURE__ */ g(w, { ...b, children: [
      this._renderLeading(t),
      this._renderContent(t, C),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Is(n)]];
  }
}
class as extends rt {
  constructor(t) {
    super(t), this._activeSet = new As(() => {
      const e = /* @__PURE__ */ new Set(), { active: n } = this.props;
      Array.isArray(n) ? n.forEach((r) => e.add(r)) : typeof n == "string" ? e.add(n) : n && Object.keys(n).forEach((r) => n[r] && e.add(r));
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
    this._afterRender(!0), this.tryLoad(), this.props.activeOnHover && !this.props.multipleActive && f(this.element).on(`mouseenter${this.namespace}`, "[z-item]", (t) => {
      const e = this._getItemFromEvent(t);
      e && e.renderedItem.type === "item" && !e.renderedItem.disabled && !this.isActive(e.key) && this.toggleActive(e.key, !0);
    });
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    f(this.element).off(this.namespace), (t = this.props.beforeDestroy) == null || t.call(this);
  }
  setItems(t, e) {
    const { onLoadFail: n } = this.props;
    return this.changeState({
      loading: !1,
      items: t || [],
      loadFailed: e ? (typeof n == "function" ? n.call(this, e) : n) || String(e) : void 0
    });
  }
  load() {
    const { items: t, onLoad: e } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      try {
        const n = await xi(t, [this], { throws: !0 });
        this.setItems((e == null ? void 0 : e.call(this, n)) || n);
      } catch (n) {
        this.setItems(void 0, n);
      }
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    return t || !e || Array.isArray(e) || e === this._loadedSetting ? !1 : (this.load(), !0);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.state.checked[t] ?? i.checked ?? n;
  }
  isAllChecked() {
    return this._renderedItems.every(({ key: t }, e) => this.isChecked(t, e) === !0);
  }
  toggleAllChecked(t) {
    return t === void 0 && (t = !this.isAllChecked()), this.toggleChecked(this._renderedItems.map((e) => e.key), t);
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((i, r) => (i[r] = e, i), {});
    } else if (typeof t == "object")
      n = t;
    else {
      const i = this.isChecked(t);
      e === void 0 && (e = !i), n = { [t]: e };
    }
    Object.keys(n).length && await this.changeState((i) => ({
      checked: {
        ...i.checked,
        ...n
      }
    }), () => {
      var r;
      const i = this.state.checked;
      (r = this.props.onCheck) == null || r.call(this, n, Object.keys(i).filter((o) => i[o] === !0));
    });
  }
  getChecks() {
    return this._renderedItems.reduce((t, { key: e }, n) => (e !== void 0 && this.isChecked(e, n) === !0 && t.push(e), t), []);
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
    typeof t == "string" && (t = [t]), t.length && (e = e ?? !this.isActive(t[0]), await this.changeState((n) => ({ activeMap: this.props.multipleActive ? t.reduce((r, o) => (r[o] = e, r), { ...n.activeMap }) : { [t[0]]: e } }), () => {
      var n;
      (n = this.props.onActive) == null || n.call(this, t, e);
    }));
  }
  getNextItem(t, e, n = 1, i = void 0) {
    i = i || this._renderedItems;
    const r = i.length;
    if (t === void 0)
      return i[n ? 0 : r - 1];
    let o = i.findIndex((l) => l.key === t);
    if (o < 0 || r < 2)
      return i[n ? 0 : r - 1];
    let a = 0;
    for (e = e || ((l) => l.type === "item" && !l.disabled); a < r; ) {
      o = (o + n + r) % r;
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
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n.key);
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
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _getRenderedItem(t, e, n) {
    const { divider: i, multiline: r } = t;
    e = z({}, zo({
      divider: i,
      multiline: r
    }), e);
    const { itemName: o, name: a } = this;
    if (e.innerClass = [o ? `${o}-inner${a ? ` ${a}-${e.type}-inner` : ""}` : "", e.innerClass], e.type === "item") {
      const { checkbox: l } = t;
      e.checkbox === !1 ? e.checked = void 0 : (l || e.checkbox) && (e.checked = this.isChecked(e.key, n, e.checked), typeof l == "object" && e.checkbox !== !1 && (e.checkbox = e.checkbox ? f.extend({}, l, e.checkbox) : l), t.selectOnChecked && e.checked === !0 && (e.selected = !0)), e.active === void 0 && this.isActive(e) && (e.active = !0);
    }
    return e.icon && (this._hasIcons = !0), e.checked !== void 0 && (this._hasCheckbox = !0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && this._getRenderedItem(t, i, n);
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    let { checkOnClick: n } = this.props;
    if (n === "any" ? n = ".item-checkbox,.item-content,.item-icon" : n === !0 && (n = ".item-checkbox"), !n || !e || !e.renderedItem)
      return e;
    const i = e.renderedItem, r = i.checkbox;
    if (r !== !1 && (this.props.checkbox || r || i.checked !== void 0) && !i.disabled && e && t.target.closest(n)) {
      this.toggleChecked(e.key), t.stopPropagation();
      return;
    }
    return e;
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      className: k(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    this._hasIcons = !1, this._hasCheckbox = !1, this._activeSet.compute();
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
}
as.ItemComponents = {
  ...rt.ItemComponents,
  default: Q,
  item: Te,
  heading: Te
};
as.NAME = "list";
const An = "```ZUI_STR\n";
class ls {
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
    return this.type === "session" ? this : (this._altStorage || (this._altStorage = new ls(this._id, "session")), this._altStorage);
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
    const n = this._storage.getItem(this._getKey(t));
    if (typeof n == "string") {
      if (n.startsWith(An))
        return n.substring(An.length);
      try {
        return JSON.parse(n);
      } catch {
      }
    }
    return n ?? e;
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
    this._storage.setItem(this._getKey(t), typeof e == "string" ? `${An}${e}` : JSON.stringify(e));
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
      const n = this._storage.key(e);
      if (n != null && n.startsWith(this._name)) {
        const i = this._storage.getItem(n);
        typeof i == "string" && t(n.substring(this._name.length + 1), JSON.parse(i));
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
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
}
const Yn = new ls("DEFAULT");
function wh(s, t = "local") {
  return new ls(s, t);
}
Object.assign(Yn, { create: wh });
function fa(s, t) {
  const { children: e } = s;
  e.length && e.forEach((n) => {
    t(n), fa(n, t);
  });
}
function bh(s, t) {
  let e = s.parent;
  for (; e; )
    t(e), e = e.parent;
}
function Br(s) {
  return s.split(":").reduce((t, e, n) => (t.push(n ? t[n - 1] + ":" + e : e), t), []);
}
function Jn(s, t, e, n, i = 0, r) {
  return s.reduce((o, a, l) => {
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
    return r && r.children.push(h), o = e(o, h), Array.isArray(a.items) ? Jn(a.items, t, e, o, i + 1, h) : o;
  }, n);
}
class Me extends as {
  constructor(t) {
    super(t);
    const { defaultNestedShow: e, preserve: n, nestedShow: i } = t;
    if (f.extend(
      this.state,
      typeof e == "boolean" ? { defaultShow: e, nestedShow: {} } : { nestedShow: e || {} },
      i !== void 0 ? { nestedShow: i } : null
    ), n && i === void 0) {
      this._storeID = `${this.constructor.NAME}:${n}:state`;
      const r = Yn.get(this._storeID);
      r && (this.state.nestedShow = r.nestedShow);
    }
    if (!t.level) {
      const r = this.state.nestedShow;
      r && Object.keys(r).forEach((o) => {
        r[o] && Br(o).forEach((a) => {
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
    const n = await super.setItems(t, e);
    return t && ((i = this.props.parent) == null ? void 0 : i.checked) === !0 ? this.toggleChecked(this._renderedItems.map((r) => r.key), !0) : t != null && t.some((r) => r.checked) && (this._needInitChecks = !0, this.forceUpdate()), n;
  }
  getItemMap(t) {
    if (t && (this._itemMap || this._itemMapCache))
      return this._itemMap || this._itemMapCache;
    if (!this._itemMap) {
      let e = !1;
      const n = Jn(this._items, this.props.itemKey, (i, r) => (i.set(r.keyPath, r), r.data.items && !Array.isArray(r.data.items) && (e = !0), i), /* @__PURE__ */ new Map());
      if (e)
        return this._renderedItemMap.forEach((i, r) => {
          n.has(r) || n.set(r, {
            key: i.key,
            level: i._level,
            keyPath: r,
            parentKey: `${r.split(":").slice(0, -1).join(":")}`,
            children: [],
            data: i
          });
        }), n.forEach((i) => {
          const { parentKey: r } = i;
          if (!r)
            return;
          const o = n.get(r);
          o && (o.children.push(i), i.parent = o);
        }), this._itemMapCache = n, n;
      this._itemMap = n;
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
    const n = this.getRenderedItem(t);
    return n ? n._item : super.getItem(t);
  }
  isExpanded(t) {
    const { nestedShow: e } = this;
    return typeof e == "boolean" ? e : !!(e[t] ?? this.state.defaultShow);
  }
  async toggle(t, e, n) {
    const i = this.isExpanded(t);
    if (!n && e === i)
      return;
    e === void 0 && (e = !i);
    const { nestedShow: r, onToggle: o, accordion: a } = this.props;
    o && o.call(this, t, e, n) === !1 || r === void 0 && await this.changeState((l) => {
      let c = {
        ...n ? {} : l.nestedShow,
        [t]: e
      };
      if (e && a) {
        let u = `${t.split(":").slice(0, -1).join(":")}`;
        u.length && (u += ":"), Object.keys(c).forEach((h) => {
          h !== t && h.startsWith(u) && (c[h] = !1);
        });
      }
      return c = e ? Br(t).reduce((u, h) => (u[h] = e, u), c) : c, {
        nestedShow: c
      };
    }, this._preserveState);
  }
  toggleAll(t) {
    if (this.props.nestedShow === void 0)
      return this.setState({ nestedShow: {}, defaultShow: t }, this._preserveState);
  }
  getChecks() {
    return Array.from(this.getItemMap(!0).values()).reduce((t, { keyPath: e, data: n }) => {
      const i = this.state.checked[e];
      return (i === !0 || n.checked && i !== !1) === !0 && t.push(e), t;
    }, []);
  }
  isChecked(t, e, n = !1) {
    const i = (typeof e == "number" ? this._items[e] : this.getItem(t)) || {};
    return this.isRoot ? this.state.checked[t] ?? i.checked ?? n : this.props.checkedState[`${this.props.parentKey}:${t}`] ?? i.checked ?? n;
  }
  async toggleChecked(t, e) {
    let n;
    if (Array.isArray(t)) {
      if (!t.length)
        return;
      e === void 0 && (e = !this.isChecked(t[0])), n = t.reduce((a, l) => (a[l] = e, a), {});
    } else
      typeof t == "object" ? n = t : (e === void 0 && (e = !this.isChecked(t)), n = { [t]: e });
    if (!Object.keys(n).length)
      return;
    if (this.isRoot) {
      await this.changeState(({ checked: a, nestedShow: l }) => {
        const c = (d) => n[d.keyPath] ?? a[d.keyPath] ?? d.data.checked ?? !1, u = this.getItemMap(), h = {}, { expandChildrenOnCheck: p } = this.props;
        return Object.keys(n).forEach((d) => {
          e = n[d];
          const _ = u.get(d);
          _ && (fa(_, (m) => {
            c(m) !== e && (n[m.keyPath] = e);
          }), bh(_, (m) => {
            const { children: v } = m, y = v.reduce((w, C) => (c(C) && w++, w), 0);
            n[m.keyPath] = y === v.length ? !0 : y ? "indeterminate" : !1;
          }), p && e && _.data.items && (h[d] = !0));
        }), {
          checked: {
            ...a,
            ...n
          },
          nestedShow: {
            ...l,
            ...h
          }
        };
      }, () => {
        var l;
        const a = this.state.checked;
        (l = this.props.onCheck) == null || l.call(this, n, Object.keys(a).filter((c) => a[c] === !0));
      });
      return;
    }
    const { parentKey: i, onCheck: r } = this.props, o = Object.keys(n).reduce((a, l) => (a[`${i !== void 0 ? `${i}:` : ""}${l}`] = n[l], a), {});
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
    if (typeof t == "string" && (t = [t]), t = t.map((n) => this.getKeyPath(n)), this.isRoot) {
      await super.toggleActive(t, e), this.props.toggleOnActive && t.forEach((n) => {
        this.isActive(n) && !this.isExpanded(n) && this.toggle(n, !0);
      });
      return;
    }
    this.props.onActive.call(this, t, e ?? !this.isActive(t[0]));
  }
  activeNext(t, e = 1) {
    const n = this.getNextItem(this.getActiveKey(), t, e);
    n && this.toggleActive(n._keyPath);
  }
  getNextItem(t, e, n = 1, i = void 0) {
    return i = i || Jn(this._items, this.props.itemKey, (r, o) => (o.data.disabled || r.push({
      _keyPath: o.keyPath,
      type: "item",
      ...o.data,
      ...this._renderedItemMap.get(o.keyPath),
      key: o.keyPath
    }), r), []), super.getNextItem(t, e, n, i);
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
    this._storeID && Yn.set(this._storeID, { nestedShow: this.state.nestedShow });
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t, { isRoot: a } = this;
    return z(this.constructor.inheritNestedProps.reduce((l, c) => (l[c] = t[c], l), {}), {
      key: n.key,
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parent: n,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      defaultNestedShow: this.state.defaultShow,
      checkedState: t.checkedState || this.state.checked,
      onCheck: a ? this._handleNestedCheck : t.onCheck,
      onToggle: a ? this._handleNestedToggle : t.onToggle,
      beforeRenderItem: a ? this._beforeRenderNestedItem : t.beforeRenderItem,
      active: a ? this.getActiveKeys() : t.active,
      onActive: a ? this.toggleActive.bind(this) : t.onActive
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ g(o, { ...r }, `nested:${n.key}`);
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ g("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ g("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`, ft(n) || (n = /* @__PURE__ */ g(st, { icon: n }))) : (n = /* @__PURE__ */ g(st, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ g("span", { className: k(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItems(t) {
    const e = super._getItems(t);
    return this.isRoot && e !== this._items && (this._itemMap = void 0), e;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
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
  _beforeRenderNestedItem(t, e) {
    const { beforeRenderItem: n } = this.props;
    if (n) {
      const i = n.call(this, t, e);
      i !== void 0 && (t = i);
    }
    return this._renderedItemMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    (this._hasNestedItems || !this.isRoot) && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = z(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, i ? { children: i } : null), this._renderedItemMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t, e) {
    e = e || t.target;
    let n = super._getItemFromEvent(t, e);
    if (!n) {
      const r = e.closest("[z-list]");
      if (r) {
        const o = r.getAttribute("z-list"), a = this.getItem(o), l = this.getRenderedItem(o);
        if (!a || !l)
          return;
        n = {
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
    (t.type === "mouseenter" || t.type === "mouseleave" || t.type === "mouseover") && (n.hover = t.type !== "mouseleave");
    const { parentKey: i } = this.props;
    return { ...n, parentKey: i, keyPath: `${i !== void 0 ? `${i}:` : ""}${n.key}`, target: e };
  }
  _handleNestedToggle(t, e, n) {
    this.toggle(t, e, n);
  }
  _handleClick(t) {
    const e = super._handleClick(t);
    if (e) {
      const { renderedItem: n, keyPath: i, target: r } = e, { nestedToggle: o } = this.props;
      if (!n.items || t.defaultPrevented || r.closest(".not-nested-toggle") || o && !n.disabled && !r.closest(o) || !o && !n.disabled && r.closest("a,.btn,.item-checkbox,.open-url,input,select,textarea") && !r.closest(".nested-toggle-icon,.item-icon"))
        return e;
      this.toggle(i), t.preventDefault();
    }
    return e;
  }
  _handleNestedCheck(t) {
    this.toggleChecked(t);
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = z(super._getProps(t), {
      "z-level": e,
      "z-list": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = k(r.className), r;
  }
  _beforeRender(t) {
    return this._renderedItemMap.clear(), this._hasIcons = !1, this._hasNestedItems = !1, super._beforeRender(t);
  }
}
Me.defaultProps = {
  ...as.defaultProps,
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
Me.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "accordion", "itemRender", "itemProps", "onToggle", "checkbox", "getItem", "getItems", "checkOnClick", "selectOnChecked", "checkedState", "onClickItem", "activeOnHover", "multipleActive", "onActive"];
const Pe = class pa extends Me {
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
    const { wrapAttrs: e, height: n, maxHeight: i, parentKey: r } = t, o = z(
      { "z-list-wrapper": r },
      e,
      n || i ? { style: { height: n, maxHeight: i } } : null,
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
    let n;
    if (t.type !== "mouseleave") {
      const c = e.closest("[z-item]");
      if (c)
        n = c.getAttribute("z-key-path"), c.classList.contains("is-nested") || (n = c.getAttribute("z-parent"));
      else {
        const u = e.closest("[z-list-wrapper]");
        n = u == null ? void 0 : u.getAttribute("z-list-wrapper");
      }
    }
    const i = this._hoverInfo, r = i == null ? void 0 : i.keyPath;
    if (r === n)
      return;
    i != null && i.timer && clearTimeout(i.timer);
    const o = typeof n == "string", l = o ? typeof r == "string" && (i != null && i.shown) ? 50 : 200 : i != null && i.shown ? 100 : 200;
    this._hoverInfo = {
      keyPath: n,
      timer: window.setTimeout(() => {
        o ? (this.toggle(n, !0, !0), this._hoverInfo.shown = !0) : (this.toggleAll(!1), this._hoverInfo = void 0);
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
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = z(n, r)), /* @__PURE__ */ g(pa, { ...r });
  }
};
Pe.NAME = "menu";
Pe.TAG = "menu";
Pe.inheritNestedProps = [...Me.inheritNestedProps, "compact"];
Pe.ItemComponents = {
  ...Me.ItemComponents,
  item: [Te, { innerComponent: "a" }]
};
Pe.defaultProps = {
  ...Me.defaultProps,
  scrollbarHover: !0
};
let _t = Pe;
let dn = class extends W {
  constructor(t) {
    super(t), this._input = G(), this._timer = 0, this._handleClearBtnClick = (e) => {
      e.stopPropagation(), this.clear(e);
    }, this._handleChange = (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r, delay: o } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (o ? (this._clearTimer(), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, o)) : r(i, e));
      });
    }, this._handleFocus = (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }, this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${pt()}`;
  }
  componentDidMount() {
    const { hotkeys: t } = this.props;
    if (t) {
      const e = Wo(t, {
        clear: {
          keys: "Escape",
          handler: (n) => {
            this.clear(n);
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            var i, r;
            (r = (i = this.props).onEnter) == null || r.call(i, this.state.value, n);
          }
        }
      });
      e && (this._hotkeysScope = `SearchBox_${this._gid}`, f(this.input).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentWillUnmount() {
    this._hotkeysScope && f(this.input).unbindHotkeys(this._hotkeysScope);
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
      const { onChange: n, onClear: i } = this.props;
      i == null || i(t), this.focus(), e.trim() !== "" && (n == null || n("", t));
    });
  }
  _clearTimer() {
    this._timer && clearTimeout(this._timer), this._timer = 0;
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: u, mergeIcon: h, searchIcon: p, clearIcon: d, value: _, compact: m, prefixClass: v, suffixClass: y } = t, { focus: w, value: C } = e, { id: b } = this, S = _ ?? C, $ = typeof S != "string" || !S.trim().length;
    let A, N, E;
    return p && (E = p === !0 ? /* @__PURE__ */ g("span", { class: "magnifier" }) : /* @__PURE__ */ g(st, { icon: p })), !h && p && (A = /* @__PURE__ */ g("label", { for: b, class: k("input-control-prefix", v), children: E }, "prefix")), d && !$ ? N = /* @__PURE__ */ g(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: this._handleClearBtnClick,
        children: d === !0 ? /* @__PURE__ */ g("span", { class: "close" }) : /* @__PURE__ */ g(st, { icon: d })
      }
    ) : h && p && (N = E), N && (N = /* @__PURE__ */ g("label", { for: b, class: k("input-control-suffix", y), children: N }, "suffix")), /* @__PURE__ */ g("div", { class: k("search-box input-control", r, { focus: w, empty: $, compact: m, "has-prefix-icon": A, "has-suffix-icon": N }), style: o, children: [
      A,
      /* @__PURE__ */ g(
        "input",
        {
          ref: this._input,
          id: b,
          type: "text",
          class: k("form-control", { "rounded-full": c, "size-sm": m }, i),
          style: n,
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
dn.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500,
  hotkeys: !0
};
const Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SearchBox: dn
}, Symbol.toStringTag, { value: "Module" }));
let bt = class extends _t {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
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
    var n;
    if (!this.isRoot)
      return;
    const t = f(this.element), e = t.find(".item.is-nested.is-not-match").filter((i, r) => this._matchedParents.has(r.getAttribute("z-key-path") || "")).addClass("has-match-child");
    t.parent().toggleClass("no-match-child", !!((n = this._searchKeys) != null && n.length) && !e.length && !t.children(".item").not(".is-not-match").length);
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r, nestedSearch: o } = t, a = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (o && this.isRoot && a && i !== void 0) {
      let l = "";
      String(i).split(":").forEach((c) => {
        l += `${l.length ? ":" : ""}${c}`, this._matchedParents.add(l);
      });
    }
    return a;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && t.nestedSearch ? (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")) : t.nestedSearch || z(r, { search: void 0, defaultSearch: void 0 }, n.listProps), r;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && (this.isRoot && this.props.limit && this._showCount >= this.props.limit ? !1 : (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i.hidden || this._showCount++, i));
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getWrapClass(t) {
    const e = this.isRoot && this._searchKeys.length;
    return k(super._getWrapClass(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : "");
  }
  _getSearchBoxProps(t) {
    const { searchBox: e } = t, n = {
      compact: !0,
      className: "not-nested-toggle",
      onChange: this._handleSearchChange
    };
    return typeof e == "object" && z(n, e), t.search !== void 0 && (n.value = this._searchKeys.join(" "), n.disabled = !0), n;
  }
  _renderSearchBox(t) {
    const e = this._getSearchBoxProps(t);
    return /* @__PURE__ */ g(dn, { ...e }, "search");
  }
  _renderWrapperHeader(t) {
    const e = t.header, { noMatchHint: n, searchBox: i, searchPlacement: r, nestedSearch: o, headerClass: a } = t, l = (!o || this.isRoot) && i && r !== "bottom";
    return !e && !l && !n ? null : [
      n ? /* @__PURE__ */ g("div", { className: "search-menu-no-match-hint", children: n }, "noMatchHint") : null,
      e || l ? /* @__PURE__ */ g("header", { className: k("search-menu-header", a), children: [
        e ? super._renderWrapperHeader(t) : null,
        l ? this._renderSearchBox(t) : null
      ] }, "header") : null
    ];
  }
  _renderWrapperFooter(t) {
    const e = t.footer, { searchBox: n, searchPlacement: i, nestedSearch: r, footerClass: o } = t, a = (!r || this.isRoot) && n && i === "bottom";
    return !e && !a ? null : /* @__PURE__ */ g("footer", { className: k("search-menu-footer", o), children: [
      e ? super._renderWrapperFooter(t) : null,
      a ? this._renderSearchBox(t) : null
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
  static isItemMatch(t, e, n = ["keys", "text", "title", "subtitle"]) {
    return e.length ? e.every((i) => n.some((r) => {
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
    return f.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((u, h) => {
        h && (o.push(/* @__PURE__ */ g("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + u.length)), c += u.length;
      }), o;
    }, []), e);
  }
};
bt.inheritNestedProps = [..._t.inheritNestedProps, "isItemMatch", "search", "underlineKeys", "nestedSearch"];
bt.defaultProps = {
  ..._t.defaultProps,
  defaultNestedShow: !0,
  wrap: !0,
  nestedSearch: !0,
  underlineKeys: !0
};
const Sh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Menu: _t,
  SearchMenu: bt
}, Symbol.toStringTag, { value: "Module" }));
class Di extends U {
}
Di.NAME = "Menu";
Di.Component = _t;
Di.replace = _t.TAG;
class Li extends U {
}
Li.NAME = "SearchMenu";
Li.Component = bt;
Li.replace = bt.TAG;
lt(Sh);
function xh({
  className: s,
  style: t,
  actions: e,
  heading: n,
  content: i,
  contentClass: r,
  children: o,
  close: a,
  onClose: l,
  icon: c,
  iconClass: u,
  ...h
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ g(Z, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ g("span", { class: "close" }) }) : ft(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ g(Z, { ...a, onClick: l }));
  const d = Tt.render(e, []);
  return /* @__PURE__ */ g("div", { className: k("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ g(st, { icon: c, className: k("alert-icon", u) }),
    typeof i != "string" ? /* @__PURE__ */ g(L, { content: i }) : /* @__PURE__ */ g("div", { className: k("alert-content", r), children: [
      typeof n != "string" ? /* @__PURE__ */ g(L, { content: n }) : n && /* @__PURE__ */ g("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ g("div", { className: "alert-text", children: i }),
      n ? d : null
    ] }),
    n ? null : d,
    p,
    o
  ] });
}
function kh(s) {
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
function Th({
  margin: s,
  type: t,
  placement: e,
  animation: n,
  show: i,
  className: r,
  time: o,
  ...a
}) {
  return typeof a.html == "string" && (a.content = { html: a.html }, delete a.html), /* @__PURE__ */ g(
    xh,
    {
      className: k("messager", r, t, n === !0 ? kh(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var $h = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, Nh = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Oe = (s, t, e) => ($h(s, t, "access private method"), e), se, _e;
class zi extends U {
  constructor() {
    super(...arguments), Nh(this, se), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
      f(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), Oe(this, se, _e).call(this, () => {
      this._show = !0, this.render(), Oe(this, se, _e).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && Oe(this, se, _e).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && Oe(this, se, _e).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), Oe(this, se, _e).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
se = /* @__PURE__ */ new WeakSet();
_e = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
zi.NAME = "MessagerItem";
zi.Component = Th;
const cs = class ga extends yt {
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
      const t = this._getHolder(), e = new zi(t, this.options);
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
    e.length || (e = f(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
    let n = e.find(`#messager-${this.gid}`);
    return n.length || (n = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(e), this._holder = n[0]), n[0];
  }
  static show(t, e) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, r = { type: e, key: `messager_${pt()}`, ...i };
    r.type && f.extend(r, this.TypeOptions[r.type]);
    const o = ga.ensure(n || "body", r);
    return o.hide(), o.show(), o;
  }
};
cs.NAME = "messager";
cs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
cs.MULTI_INSTANCE = !0;
cs.TypeOptions = {};
let Dd = cs, fn = class extends W {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ g("div", { class: k("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ g("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
};
fn.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
const Eh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressBar: fn
}, Symbol.toStringTag, { value: "Module" }));
lt(Eh);
class Oi extends U {
}
Oi.NAME = "ProgressBar";
Oi.Component = fn;
Oi.register();
let pn = class extends W {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: u, children: h } = t, p = n / 2;
    let { circleWidth: d = 0.1 } = t;
    d < 1 && (d = n * d);
    const _ = (n - d) / 2;
    return /* @__PURE__ */ g("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: _, "stroke-width": d, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ g("circle", { cx: p, cy: p, r: _, "stroke-width": d, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * _ * 2, "stroke-dashoffset": Math.PI * _ * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ g("text", { x: c ?? p, y: u ?? p + d / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${_}px`, stroke: "currentColor" }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
pn.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Hi extends U {
}
Hi.NAME = "ProgressCircle";
Hi.Component = pn;
Hi.register();
const Ah = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ProgressCircle: pn
}, Symbol.toStringTag, { value: "Module" }));
lt(Ah);
class ma extends U {
}
ma.NAME = "Avatar";
ma.Component = cn;
lt(mh);
class _a extends U {
}
_a.NAME = "BtnGroup";
_a.Component = kt;
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: kt
}, Symbol.toStringTag, { value: "Module" }));
lt(Mh);
const ya = Symbol("EVENT_PICK");
class Fi extends W {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!f(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: n, onClick: i } = this.props;
    let r = n === "open" ? !0 : void 0;
    const o = f(t.target), a = i == null ? void 0 : i(t);
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
    const { state: e, className: n, disabled: i, readonly: r, pickerName: o, empty: a } = t, { open: l } = e;
    return k(
      "pick",
      n,
      o ? `${o}-pick` : "",
      l && "is-open focus",
      i && "disabled",
      r && "readonly",
      a ? "is-empty-value" : ""
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
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o } = t;
    if (e)
      if (this._hasInput)
        f(`#${o}`).val(n);
      else
        return /* @__PURE__ */ g("input", { id: o, type: "hidden", className: "pick-value", name: e, value: n, readonly: r, disabled: i });
    return null;
  }
  componentDidMount() {
    const { id: t } = this.props;
    f(`#${t}`).on(`change.zui.pick.${t} syncValue.zui.pick.${t}`, (e, n) => {
      if (typeof n == "symbol")
        return;
      const i = e.target.value;
      this._skipTriggerChange = i, this.props.changeState({ value: i });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i } = this.props;
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && f(`#${e}`).trigger("change", ya), this._skipTriggerChange = !1);
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
const Mt = Math.min, dt = Math.max, zs = Math.round, _s = Math.floor, Jt = (s) => ({
  x: s,
  y: s
}), Ph = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Ih = {
  start: "end",
  end: "start"
};
function Zn(s, t, e) {
  return dt(s, Mt(t, e));
}
function Ie(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Zt(s) {
  return s.split("-")[0];
}
function Re(s) {
  return s.split("-")[1];
}
function va(s) {
  return s === "x" ? "y" : "x";
}
function Wi(s) {
  return s === "y" ? "height" : "width";
}
function he(s) {
  return ["top", "bottom"].includes(Zt(s)) ? "y" : "x";
}
function ji(s) {
  return va(he(s));
}
function Rh(s, t, e) {
  e === void 0 && (e = !1);
  const n = Re(s), i = ji(s), r = Wi(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = Os(o)), [o, Os(o)];
}
function Dh(s) {
  const t = Os(s);
  return [Xn(s), t, Xn(t)];
}
function Xn(s) {
  return s.replace(/start|end/g, (t) => Ih[t]);
}
function Lh(s, t, e) {
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
function zh(s, t, e, n) {
  const i = Re(s);
  let r = Lh(Zt(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Xn)))), r;
}
function Os(s) {
  return s.replace(/left|right|bottom|top/g, (t) => Ph[t]);
}
function Oh(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function wa(s) {
  return typeof s != "number" ? Oh(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function Hs(s) {
  const {
    x: t,
    y: e,
    width: n,
    height: i
  } = s;
  return {
    width: n,
    height: i,
    top: e,
    left: t,
    right: t + n,
    bottom: e + i,
    x: t,
    y: e
  };
}
function Vr(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = he(t), o = ji(t), a = Wi(o), l = Zt(t), c = r === "y", u = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, p = n[a] / 2 - i[a] / 2;
  let d;
  switch (l) {
    case "top":
      d = {
        x: u,
        y: n.y - i.height
      };
      break;
    case "bottom":
      d = {
        x: u,
        y: n.y + n.height
      };
      break;
    case "right":
      d = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      d = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      d = {
        x: n.x,
        y: n.y
      };
  }
  switch (Re(t)) {
    case "start":
      d[o] -= p * (e && c ? -1 : 1);
      break;
    case "end":
      d[o] += p * (e && c ? -1 : 1);
      break;
  }
  return d;
}
const Hh = async (s, t, e) => {
  const {
    placement: n = "bottom",
    strategy: i = "absolute",
    middleware: r = [],
    platform: o
  } = e, a = r.filter(Boolean), l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({
    reference: s,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: h
  } = Vr(c, n, l), p = n, d = {}, _ = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: v,
      fn: y
    } = a[m], {
      x: w,
      y: C,
      data: b,
      reset: S
    } = await y({
      x: u,
      y: h,
      initialPlacement: n,
      placement: p,
      strategy: i,
      middlewareData: d,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    u = w ?? u, h = C ?? h, d = {
      ...d,
      [v]: {
        ...d[v],
        ...b
      }
    }, S && _ <= 50 && (_++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (c = S.rects === !0 ? await o.getElementRects({
      reference: s,
      floating: t,
      strategy: i
    }) : S.rects), {
      x: u,
      y: h
    } = Vr(c, p, l)), m = -1);
  }
  return {
    x: u,
    y: h,
    placement: p,
    strategy: i,
    middlewareData: d
  };
};
async function Bi(s, t) {
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
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: h = "floating",
    altBoundary: p = !1,
    padding: d = 0
  } = Ie(t, s), _ = wa(d), v = a[p ? h === "floating" ? "reference" : "floating" : h], y = Hs(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = h === "floating" ? {
    x: n,
    y: i,
    width: o.floating.width,
    height: o.floating.height
  } : o.reference, C = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), b = await (r.isElement == null ? void 0 : r.isElement(C)) ? await (r.getScale == null ? void 0 : r.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, S = Hs(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: w,
    offsetParent: C,
    strategy: l
  }) : w);
  return {
    top: (y.top - S.top + _.top) / b.y,
    bottom: (S.bottom - y.bottom + _.bottom) / b.y,
    left: (y.left - S.left + _.left) / b.x,
    right: (S.right - y.right + _.right) / b.x
  };
}
const Fh = (s) => ({
  name: "arrow",
  options: s,
  async fn(t) {
    const {
      x: e,
      y: n,
      placement: i,
      rects: r,
      platform: o,
      elements: a,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = Ie(s, t) || {};
    if (c == null)
      return {};
    const h = wa(u), p = {
      x: e,
      y: n
    }, d = ji(i), _ = Wi(d), m = await o.getDimensions(c), v = d === "y", y = v ? "top" : "left", w = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", b = r.reference[_] + r.reference[d] - p[d] - r.floating[_], S = p[d] - r.reference[d], $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
    let A = $ ? $[C] : 0;
    (!A || !await (o.isElement == null ? void 0 : o.isElement($))) && (A = a.floating[C] || r.floating[_]);
    const N = b / 2 - S / 2, E = A / 2 - m[_] / 2 - 1, T = Mt(h[y], E), M = Mt(h[w], E), R = T, H = A - m[_] - M, D = A / 2 - m[_] / 2 + N, j = Zn(R, D, H), K = !l.arrow && Re(i) != null && D !== j && r.reference[_] / 2 - (D < R ? T : M) - m[_] / 2 < 0, Y = K ? D < R ? D - R : D - H : 0;
    return {
      [d]: p[d] + Y,
      data: {
        [d]: j,
        centerOffset: D - j - Y,
        ...K && {
          alignmentOffset: Y
        }
      },
      reset: K
    };
  }
}), Wh = function(s) {
  return s === void 0 && (s = {}), {
    name: "flip",
    options: s,
    async fn(t) {
      var e, n;
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
        fallbackPlacements: p,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: _ = "none",
        flipAlignment: m = !0,
        ...v
      } = Ie(s, t);
      if ((e = r.arrow) != null && e.alignmentOffset)
        return {};
      const y = Zt(i), w = he(a), C = Zt(a) === a, b = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), S = p || (C || !m ? [Os(a)] : Dh(a)), $ = _ !== "none";
      !p && $ && S.push(...zh(a, m, _, b));
      const A = [a, ...S], N = await Bi(t, v), E = [];
      let T = ((n = r.flip) == null ? void 0 : n.overflows) || [];
      if (u && E.push(N[y]), h) {
        const D = Rh(i, o, b);
        E.push(N[D[0]], N[D[1]]);
      }
      if (T = [...T, {
        placement: i,
        overflows: E
      }], !E.every((D) => D <= 0)) {
        var M, R;
        const D = (((M = r.flip) == null ? void 0 : M.index) || 0) + 1, j = A[D];
        if (j)
          return {
            data: {
              index: D,
              overflows: T
            },
            reset: {
              placement: j
            }
          };
        let K = (R = T.filter((Y) => Y.overflows[0] <= 0).sort((Y, P) => Y.overflows[1] - P.overflows[1])[0]) == null ? void 0 : R.placement;
        if (!K)
          switch (d) {
            case "bestFit": {
              var H;
              const Y = (H = T.filter((P) => {
                if ($) {
                  const St = he(P.placement);
                  return St === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  St === "y";
                }
                return !0;
              }).map((P) => [P.placement, P.overflows.filter((St) => St > 0).reduce((St, Tl) => St + Tl, 0)]).sort((P, St) => P[1] - St[1])[0]) == null ? void 0 : H[0];
              Y && (K = Y);
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
async function jh(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Zt(e), a = Re(e), l = he(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, u = r && l ? -1 : 1, h = Ie(t, s);
  let {
    mainAxis: p,
    crossAxis: d,
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
  return a && typeof _ == "number" && (d = a === "end" ? _ * -1 : _), l ? {
    x: d * u,
    y: p * c
  } : {
    x: p * c,
    y: d * u
  };
}
const Bh = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      var e, n;
      const {
        x: i,
        y: r,
        placement: o,
        middlewareData: a
      } = t, l = await jh(t, s);
      return o === ((e = a.offset) == null ? void 0 : e.placement) && (n = a.arrow) != null && n.alignmentOffset ? {} : {
        x: i + l.x,
        y: r + l.y,
        data: {
          ...l,
          placement: o
        }
      };
    }
  };
}, Vh = function(s) {
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
              x: y,
              y: w
            } = v;
            return {
              x: y,
              y: w
            };
          }
        },
        ...l
      } = Ie(s, t), c = {
        x: e,
        y: n
      }, u = await Bi(t, l), h = he(Zt(i)), p = va(h);
      let d = c[p], _ = c[h];
      if (r) {
        const v = p === "y" ? "top" : "left", y = p === "y" ? "bottom" : "right", w = d + u[v], C = d - u[y];
        d = Zn(w, d, C);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", w = _ + u[v], C = _ - u[y];
        _ = Zn(w, _, C);
      }
      const m = a.fn({
        ...t,
        [p]: d,
        [h]: _
      });
      return {
        ...m,
        data: {
          x: m.x - e,
          y: m.y - n
        }
      };
    }
  };
}, Uh = function(s) {
  return s === void 0 && (s = {}), {
    name: "size",
    options: s,
    async fn(t) {
      const {
        placement: e,
        rects: n,
        platform: i,
        elements: r
      } = t, {
        apply: o = () => {
        },
        ...a
      } = Ie(s, t), l = await Bi(t, a), c = Zt(e), u = Re(e), h = he(e) === "y", {
        width: p,
        height: d
      } = n.floating;
      let _, m;
      c === "top" || c === "bottom" ? (_ = c, m = u === (await (i.isRTL == null ? void 0 : i.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (m = c, _ = u === "end" ? "top" : "bottom");
      const v = d - l.top - l.bottom, y = p - l.left - l.right, w = Mt(d - l[_], v), C = Mt(p - l[m], y), b = !t.middlewareData.shift;
      let S = w, $ = C;
      if (h ? $ = u || b ? Mt(C, y) : y : S = u || b ? Mt(w, v) : v, b && !u) {
        const N = dt(l.left, 0), E = dt(l.right, 0), T = dt(l.top, 0), M = dt(l.bottom, 0);
        h ? $ = p - 2 * (N !== 0 || E !== 0 ? N + E : dt(l.left, l.right)) : S = d - 2 * (T !== 0 || M !== 0 ? T + M : dt(l.top, l.bottom));
      }
      await o({
        ...t,
        availableWidth: $,
        availableHeight: S
      });
      const A = await i.getDimensions(r.floating);
      return p !== A.width || d !== A.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function De(s) {
  return ba(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function gt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(s) {
  var t;
  return (t = (ba(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function ba(s) {
  return s instanceof Node || s instanceof gt(s).Node;
}
function Pt(s) {
  return s instanceof Element || s instanceof gt(s).Element;
}
function It(s) {
  return s instanceof HTMLElement || s instanceof gt(s).HTMLElement;
}
function Ur(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof gt(s).ShadowRoot;
}
function hs(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = $t(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function Kh(s) {
  return ["table", "td", "th"].includes(De(s));
}
function gn(s) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return s.matches(t);
    } catch {
      return !1;
    }
  });
}
function Vi(s) {
  const t = Ui(), e = $t(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function qh(s) {
  let t = Xt(s);
  for (; It(t) && !$e(t); ) {
    if (gn(t))
      return null;
    if (Vi(t))
      return t;
    t = Xt(t);
  }
  return null;
}
function Ui() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function $e(s) {
  return ["html", "body", "#document"].includes(De(s));
}
function $t(s) {
  return gt(s).getComputedStyle(s);
}
function mn(s) {
  return Pt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.scrollX,
    scrollTop: s.scrollY
  };
}
function Xt(s) {
  if (De(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Ur(s) && s.host || // Fallback.
    Bt(s)
  );
  return Ur(t) ? t.host : t;
}
function Ca(s) {
  const t = Xt(s);
  return $e(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : It(t) && hs(t) ? t : Ca(t);
}
function Je(s, t, e) {
  var n;
  t === void 0 && (t = []), e === void 0 && (e = !0);
  const i = Ca(s), r = i === ((n = s.ownerDocument) == null ? void 0 : n.body), o = gt(i);
  return r ? t.concat(o, o.visualViewport || [], hs(i) ? i : [], o.frameElement && e ? Je(o.frameElement) : []) : t.concat(i, Je(i, [], e));
}
function Sa(s) {
  const t = $t(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = It(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = zs(e) !== r || zs(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Ki(s) {
  return Pt(s) ? s : s.contextElement;
}
function Ce(s) {
  const t = Ki(s);
  if (!It(t))
    return Jt(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = Sa(t);
  let o = (r ? zs(e.width) : e.width) / n, a = (r ? zs(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Gh = /* @__PURE__ */ Jt(0);
function xa(s) {
  const t = gt(s);
  return !Ui() || !t.visualViewport ? Gh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Yh(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== gt(s) ? !1 : t;
}
function ue(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Ki(s);
  let o = Jt(1);
  t && (n ? Pt(n) && (o = Ce(n)) : o = Ce(s));
  const a = Yh(r, e, n) ? xa(r) : Jt(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, u = i.width / o.x, h = i.height / o.y;
  if (r) {
    const p = gt(r), d = n && Pt(n) ? gt(n) : n;
    let _ = p, m = _.frameElement;
    for (; m && n && d !== _; ) {
      const v = Ce(m), y = m.getBoundingClientRect(), w = $t(m), C = y.left + (m.clientLeft + parseFloat(w.paddingLeft)) * v.x, b = y.top + (m.clientTop + parseFloat(w.paddingTop)) * v.y;
      l *= v.x, c *= v.y, u *= v.x, h *= v.y, l += C, c += b, _ = gt(m), m = _.frameElement;
    }
  }
  return Hs({
    width: u,
    height: h,
    x: l,
    y: c
  });
}
function Jh(s) {
  let {
    elements: t,
    rect: e,
    offsetParent: n,
    strategy: i
  } = s;
  const r = i === "fixed", o = Bt(n), a = t ? gn(t.floating) : !1;
  if (n === o || a && r)
    return e;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Jt(1);
  const u = Jt(0), h = It(n);
  if ((h || !h && !r) && ((De(n) !== "body" || hs(o)) && (l = mn(n)), It(n))) {
    const p = ue(n);
    c = Ce(n), u.x = p.x + n.clientLeft, u.y = p.y + n.clientTop;
  }
  return {
    width: e.width * c.x,
    height: e.height * c.y,
    x: e.x * c.x - l.scrollLeft * c.x + u.x,
    y: e.y * c.y - l.scrollTop * c.y + u.y
  };
}
function Zh(s) {
  return Array.from(s.getClientRects());
}
function ka(s) {
  return ue(Bt(s)).left + mn(s).scrollLeft;
}
function Xh(s) {
  const t = Bt(s), e = mn(s), n = s.ownerDocument.body, i = dt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = dt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + ka(s);
  const a = -e.scrollTop;
  return $t(n).direction === "rtl" && (o += dt(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Qh(s, t) {
  const e = gt(s), n = Bt(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Ui();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function tu(s, t) {
  const e = ue(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = It(s) ? Ce(s) : Jt(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function Kr(s, t, e) {
  let n;
  if (t === "viewport")
    n = Qh(s, e);
  else if (t === "document")
    n = Xh(Bt(s));
  else if (Pt(t))
    n = tu(t, e);
  else {
    const i = xa(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Hs(n);
}
function Ta(s, t) {
  const e = Xt(s);
  return e === t || !Pt(e) || $e(e) ? !1 : $t(e).position === "fixed" || Ta(e, t);
}
function eu(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Je(s, [], !1).filter((a) => Pt(a) && De(a) !== "body"), i = null;
  const r = $t(s).position === "fixed";
  let o = r ? Xt(s) : s;
  for (; Pt(o) && !$e(o); ) {
    const a = $t(o), l = Vi(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || hs(o) && !l && Ta(s, o)) ? n = n.filter((u) => u !== o) : i = a, o = Xt(o);
  }
  return t.set(s, n), n;
}
function su(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? gn(t) ? [] : eu(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, u) => {
    const h = Kr(t, u, i);
    return c.top = dt(h.top, c.top), c.right = Mt(h.right, c.right), c.bottom = Mt(h.bottom, c.bottom), c.left = dt(h.left, c.left), c;
  }, Kr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function nu(s) {
  const {
    width: t,
    height: e
  } = Sa(s);
  return {
    width: t,
    height: e
  };
}
function iu(s, t, e) {
  const n = It(t), i = Bt(t), r = e === "fixed", o = ue(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Jt(0);
  if (n || !n && !r)
    if ((De(t) !== "body" || hs(i)) && (a = mn(t)), n) {
      const h = ue(t, !0, r, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = ka(i));
  const c = o.left + a.scrollLeft - l.x, u = o.top + a.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: o.width,
    height: o.height
  };
}
function Mn(s) {
  return $t(s).position === "static";
}
function qr(s, t) {
  return !It(s) || $t(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function $a(s, t) {
  const e = gt(s);
  if (gn(s))
    return e;
  if (!It(s)) {
    let i = Xt(s);
    for (; i && !$e(i); ) {
      if (Pt(i) && !Mn(i))
        return i;
      i = Xt(i);
    }
    return e;
  }
  let n = qr(s, t);
  for (; n && Kh(n) && Mn(n); )
    n = qr(n, t);
  return n && $e(n) && Mn(n) && !Vi(n) ? e : n || qh(s) || e;
}
const ru = async function(s) {
  const t = this.getOffsetParent || $a, e = this.getDimensions, n = await e(s.floating);
  return {
    reference: iu(s.reference, await t(s.floating), s.strategy),
    floating: {
      x: 0,
      y: 0,
      width: n.width,
      height: n.height
    }
  };
};
function ou(s) {
  return $t(s).direction === "rtl";
}
const au = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Jh,
  getDocumentElement: Bt,
  getClippingRect: su,
  getOffsetParent: $a,
  getElementRects: ru,
  getClientRects: Zh,
  getDimensions: nu,
  getScale: Ce,
  isElement: Pt,
  isRTL: ou
};
function lu(s, t) {
  let e = null, n;
  const i = Bt(s);
  function r() {
    var a;
    clearTimeout(n), (a = e) == null || a.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: u,
      width: h,
      height: p
    } = s.getBoundingClientRect();
    if (a || t(), !h || !p)
      return;
    const d = _s(u), _ = _s(i.clientWidth - (c + h)), m = _s(i.clientHeight - (u + p)), v = _s(c), w = {
      rootMargin: -d + "px " + -_ + "px " + -m + "px " + -v + "px",
      threshold: dt(0, Mt(1, l)) || 1
    };
    let C = !0;
    function b(S) {
      const $ = S[0].intersectionRatio;
      if ($ !== l) {
        if (!C)
          return o();
        $ ? o(!1, $) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      e = new IntersectionObserver(b, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(b, w);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Na(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Ki(s), u = i || r ? [...c ? Je(c) : [], ...Je(t)] : [];
  u.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? lu(c, e) : null;
  let p = -1, d = null;
  o && (d = new ResizeObserver((y) => {
    let [w] = y;
    w && w.target === c && d && (d.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var C;
      (C = d) == null || C.observe(t);
    })), e();
  }), c && !l && d.observe(c), d.observe(t));
  let _, m = l ? ue(s) : null;
  l && v();
  function v() {
    const y = ue(s);
    m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && e(), m = y, _ = requestAnimationFrame(v);
  }
  return e(), () => {
    var y;
    u.forEach((w) => {
      i && w.removeEventListener("scroll", e), r && w.removeEventListener("resize", e);
    }), h == null || h(), (y = d) == null || y.disconnect(), d = null, l && cancelAnimationFrame(_);
  };
}
const qi = Bh, Gi = Vh, Yi = Wh, Ea = Uh, cu = Fh, Ji = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: au,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return Hh(s, t, {
    ...i,
    platform: r
  });
};
class Aa extends W {
  constructor(t) {
    super(t), this._ref = G(), this._handleDocClick = (e) => {
      const { state: { open: n }, id: i, togglePop: r } = this.props, o = f(e.target);
      n !== "closing" && !o.closest(`#pick-${i},#pick-pop-${i}`).length && o.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = this._ref) == null ? void 0 : t.current;
  }
  get container() {
    return this._container;
  }
  _handleClick(t) {
    const { togglePop: e } = this.props, n = f(t.target), i = n.closest("[data-pick-value]");
    if (i.length)
      return t.stopPropagation(), e(!1, { value: `${i.dataset("pickValue")}` });
    if (n.closest('[data-dismiss="pick"]').length)
      return e(!1);
  }
  _getClass(t) {
    const { className: e, state: n, pickerName: i, empty: r } = t, { open: o } = n;
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
      style: n,
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    } = t, l = f.extend({
      maxHeight: i,
      maxWidth: r,
      minHeight: o,
      minWidth: a
    }, n);
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
      const e = f(t.container || "body");
      let n = e.find(".pick-container");
      n.length || (n = f("<div>").addClass("pick-container").appendTo(e)), this._container = n[0];
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
    const n = (c = this.trigger) == null ? void 0 : c.getBoundingClientRect();
    if (!n)
      return {};
    const { width: i, minWidth: r, maxWidth: o, maxHeight: a } = this.props, l = n.width;
    if (typeof i == "function" ? t.width = i() : i === "100%" ? t.width = l : i && (t.width = Gt(i)), r === "100%" && (t.minWidth = l), o === "100%" && (t.maxWidth = l), this.props.limitInScreen && e && (!a || a === "auto" || typeof a == "number")) {
      let u;
      if (e.includes("bottom"))
        u = window.innerHeight - n.bottom - 2;
      else {
        const h = this.element.getBoundingClientRect().height;
        u = n.top, h > u && typeof t.top == "number" && (t.top += h - u);
      }
      u && (t.maxHeight = typeof a == "number" ? Math.min(u, a) : u);
    } else
      a && (t.maxHeight = a);
    return t;
  }
  layout() {
    const { element: t, trigger: e, props: n } = this, { state: i } = n;
    if (!t || !e || !i.open) {
      this._layoutWatcher && (this._layoutWatcher(), this._layoutWatcher = void 0);
      return;
    }
    this._layoutWatcher || (this._layoutWatcher = Na(e, t, () => {
      const { placement: r, width: o } = n;
      Ji(e, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Yi() : null, Gi(), qi(1)].filter(Boolean)
      }).then(({ x: a, y: l, placement: c }) => {
        var u, h;
        if (pe(e) || !on(e)) {
          f(t).css({ display: "none" });
          return;
        }
        f(t).css(this._getStyle({
          left: a,
          top: l
        }, c)), (h = (u = this.props).onLayout) == null || h.call(u, t);
      }), o === "100%" && f(t).css(this._getStyle());
    }));
  }
  componentDidMount() {
    var t, e;
    this.layout(), f(document).on("click", this._handleDocClick), (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, e;
    (e = (t = this.props).afterRender) == null || e.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var e, n;
    f(document).off("click", this._handleDocClick);
    const t = this._layoutWatcher;
    t && (t(), this._layoutWatcher = void 0), this._container = void 0, this._ref = void 0, f(`#pick-pop-${this.props.id}`).remove(), (n = (e = this.props).beforeDestroy) == null || n.call(e);
  }
  render(t) {
    return lh(this._render(t), this._getContainer(t));
  }
}
let Ct = class extends W {
  constructor(t) {
    super(t), this._toggleTimer = 0, this._pop = G(), this._trigger = G(), this.toggle = async (e, n) => {
      (this.props.disabled || this.props.readonly) && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      this._toggleTimer && (clearTimeout(this._toggleTimer), this._toggleTimer = 0);
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await Ms(200, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !1 })) : o === "opening" && (await Ms(50, (a) => {
        this._toggleTimer = a;
      }), this._toggleTimer = 0, r = await this.changeState({ open: !0 })), r;
    }, this._id = t.id ?? `_pick${pt()}`, this.changeState = this.changeState.bind(this), this.state = this.getDefaultState(t);
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
    const n = this.getDefaultState(t);
    e ? this.state = n : this.changeState(n);
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
    const { onChange: n } = this.props;
    n && n.call(this, t, e);
  }
  _handlePopToggle(t) {
    const { onPopShown: e, onPopHidden: n } = this.props;
    t === !0 && e ? e.call(this) : !t && n && n.call(this);
  }
  setValue(t, e) {
    if (e) {
      const n = this._trigger.current;
      n && (n._skipTriggerChange = t);
    }
    return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: n } = this.state, { open: i } = e;
    if (!n == !i)
      return;
    const { onPopShow: r, onPopHide: o } = this.props;
    i && r ? r.call(this) : !i && o && o.call(this);
  }
  componentDidUpdate(t, e) {
    const { open: n, value: i } = this.state, { open: r, value: o } = e;
    !!n != !!r && this._handlePopToggle(!!n), i !== o && this._handleChange(i, o), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), this._toggleTimer && clearTimeout(this._toggleTimer);
    const t = this._pop.current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n && (!t.hidePopWhenEmpty || !this._isEmptyValue())) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ g(o, { ref: this._pop, ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ g(Ne, { children: [
      /* @__PURE__ */ g(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
Ct.Trigger = Fi;
Ct.Pop = Aa;
Ct.defaultProps = {
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
let Ma = class extends Ct {
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
    const { syncBackground: t, syncBorder: e, syncColor: n, syncValue: i } = this.props, r = this.state.value || "";
    if (t && f(t).css("backgroundColor", r), e && f(e).css("borderColor", r), n && f(n).css("color", r), i) {
      const o = f(i);
      o.is("input,textarea,select") ? o.val(r) : o.text(r);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: n } = t, { value: i } = e;
    return [
      n ? /* @__PURE__ */ g(st, { icon: n }, "icon") : /* @__PURE__ */ g("span", { class: "color-picker-item bg-current ring ring-gray ring-inset", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return n.style = f.extend({
      color: e.value
    }, n.style), n.className = k("color-picker", n.className, { disabled: t.disabled }), n;
  }
  _renderPop(t, e) {
    const { closeBtn: n, heading: i } = t, r = this.getColors(), { value: o } = e;
    let a;
    return i && (a = /* @__PURE__ */ g("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ g("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ g("div", { className: "color-picker-row", children: [
        r.map((l) => /* @__PURE__ */ g("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: o === l ? /* @__PURE__ */ g(st, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ g("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ g(st, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
};
Ma.defaultProps = {
  ...Ct.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 184
};
class Pa extends U {
}
Pa.NAME = "ColorPicker";
Pa.Component = Ma;
const Ze = 24 * 60 * 60 * 1e3, V = (s) => s === void 0 ? /* @__PURE__ */ new Date() : (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s), hu = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(V(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, oe = (s, t = /* @__PURE__ */ new Date()) => V(s).toDateString() === V(t).toDateString(), Qn = (s, t = /* @__PURE__ */ new Date()) => V(s).getFullYear() === V(t).getFullYear(), Ia = (s, t = /* @__PURE__ */ new Date()) => (s = V(s), t = V(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), Fd = (s, t = /* @__PURE__ */ new Date()) => {
  s = V(s), t = V(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Wd = (s, t) => oe(V(t), s), jd = (s, t) => oe(V(t).getTime() - Ze, s), Bd = (s, t) => oe(V(t).getTime() + Ze, s), Ra = (s) => s != null && !isNaN(V(s).getTime()), Nt = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = V(s), !Ra(s))
    return e;
  if (typeof t == "function")
    return t(s);
  const n = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Qn(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, Vd = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Nt(s, Qn(s) ? n.month : n.full);
  if (oe(s, t))
    return i;
  const r = Nt(t, Qn(s, t) ? Ia(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
class Da extends W {
  constructor() {
    super(...arguments), this._ref = G(), this._handleClickItem = (t, e) => {
      var n, i;
      (i = (n = this.props).onChange) == null || i.call(n, t, +e.item.key);
    };
  }
  componentDidMount() {
    setTimeout(() => {
      f(this._ref.current).find(".menu-item>.active").scrollIntoView({ container: ".menu" });
    }, 100);
  }
  render(t) {
    const { minuteStep: e = 5, hour: n, minute: i } = t, r = [], o = [];
    for (let l = 0; l < 24; ++l)
      r.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: n === l });
    for (let l = 0; l < 60; l += e)
      o.push({ key: String(l), text: l < 10 ? `0${l}` : l, active: i === l });
    const a = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ g("div", { className: "time-picker-menu row", ref: this._ref, children: [
      /* @__PURE__ */ g(
        _t,
        {
          className: a,
          items: r,
          onClickItem: this._handleClickItem.bind(this, "hour")
        }
      ),
      /* @__PURE__ */ g(
        _t,
        {
          className: a,
          items: o,
          onClickItem: this._handleClickItem.bind(this, "minute")
        }
      )
    ] });
  }
}
const Gr = (s) => {
  if (!s)
    return;
  const t = V(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let La = class extends Ct {
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
    return e.value === "now" && (e.value = Nt(/* @__PURE__ */ new Date(), (t || this.props).format)), e;
  }
  setTime(t, e) {
    if (!e && (this.props.disabled || this.props.readonly))
      return;
    let n = "";
    if (typeof t == "string")
      n = t;
    else {
      const [c, u] = (this.state.value || "00:00").split(":"), { hour: h = +c, minute: p = +u } = t;
      n = `${h}:${p}`;
    }
    const i = Gr(n), { onInvalid: r, required: o, defaultValue: a, format: l } = this.props;
    return this.changeState({ value: i ? Nt(i, l) : o ? a : "" }, () => {
      !i && r && r(n);
    });
  }
  setValue(t, e) {
    if (e) {
      const n = this._trigger.current;
      n && (n._skipTriggerChange = t);
    }
    return this.setTime(t, !0);
  }
  getTime() {
    const t = Gr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, u = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ g("i", { class: "i-time" }) : h = /* @__PURE__ */ g(st, { icon: i })), [
      /* @__PURE__ */ g("input", { id: u, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, autoComplete: "off", onFocus: this._handleInputFocus, onChange: this._handleInputChange }, "input"),
      h ? /* @__PURE__ */ g("label", { for: u, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ g(Da, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: this._handleSetTime });
  }
};
La.defaultProps = {
  ...Ct.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
function uu(s, t, e) {
  return t && s < t ? t : e && s > e ? e : s;
}
function Ue(s) {
  if (s == null)
    return null;
  if (typeof s == "function" && (s = s()), typeof s == "string" && s.startsWith("today")) {
    const t = /* @__PURE__ */ new Date();
    s.length > 6 ? s = hu(t, s.substring(5).replace("+", "")) : s = t;
  } else
    s = V(s);
  return Ra(s) ? s : null;
}
F.addLang({
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
const du = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Ze;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, Yr = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => Nt(e, t)));
class fu extends W {
  constructor() {
    super(...arguments), this._handleClickDate = (t) => {
      const { onClickDate: e } = this.props;
      if (!e)
        return;
      const n = f(t.target).closest(".mini-calendar-day").dataset("date");
      n && e(n);
    };
  }
  render(t) {
    var E, T;
    const e = /* @__PURE__ */ new Date(), {
      weekStart: n = 1,
      weekNames: i = F.getLang("weekNames"),
      monthNames: r = F.getLang("monthNames"),
      year: o = e.getFullYear(),
      month: a = e.getMonth() + 1,
      highlights: l = [],
      selections: c = [],
      maxDate: u,
      minDate: h
    } = t, p = [], d = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const R = (n + M) % 7;
      p.push(/* @__PURE__ */ g("div", { className: k("col mini-calendar-day", { "is-weekend": R === 0 || R === 6 }), children: /* @__PURE__ */ g("div", { children: i ? i[R] : R }) }, M));
    }
    const { startTime: _, days: m, firstDay: v } = du(o, a, n), y = v + m * Ze;
    let w = _;
    const C = [], b = "yyyy-MM-dd", S = Yr(l, b), $ = Yr(c, b), A = ((E = u ? V(u) : null) == null ? void 0 : E.getTime()) ?? Number.MAX_SAFE_INTEGER, N = ((T = h ? V(h) : null) == null ? void 0 : T.getTime()) ?? 0;
    for (; w <= y; ) {
      const M = [];
      for (let R = 0; R < 7; R++) {
        const H = new Date(w), D = H.getDate(), j = Nt(H, b), K = H.getDay(), Y = Ia(H, v), P = k("col mini-calendar-day", {
          active: S.has(j),
          selected: $.has(j),
          "is-first": D === 1,
          "is-in-month": Y,
          "is-out-month": !Y,
          "is-today": oe(H, e),
          "is-weekend": K === 0 || K === 6,
          disabled: !oe(H, A) && !oe(H, N) && (w > A || w < N)
        });
        M.push(
          /* @__PURE__ */ g("div", { className: P, "data-date": j, children: /* @__PURE__ */ g("button", { type: "button", className: d, onClick: this._handleClickDate, children: D === 1 && r ? r[H.getMonth()] : H.getDate() }) }, j)
        ), w += Ze;
      }
      C.push(/* @__PURE__ */ g("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ g("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ g("div", { className: "row", children: p }),
      C
    ] });
  }
}
var Gs, Ys;
class Jr extends W {
  constructor() {
    super(...arguments);
    ct(this, Gs, G());
    ct(this, Ys, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = f(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ g(Z, { type: "ghost", "data-value": c, active: c === o, className: k(l === c ? "is-current" : ""), onClick: at(this, Ys), children: c }, c));
    return /* @__PURE__ */ g("div", { className: n, ref: at(this, Gs), children: a });
  }
}
Gs = new WeakMap(), Ys = new WeakMap();
var ts, es, ss, ns, is, rs, Js, za, Zs, Oa;
class pu extends W {
  constructor(e) {
    super(e);
    ct(this, Js);
    ct(this, Zs);
    ct(this, ts, void 0);
    ct(this, es, void 0);
    ct(this, ss, void 0);
    ct(this, ns, void 0);
    ct(this, is, void 0);
    ct(this, rs, void 0);
    vt(this, ts, G()), vt(this, es, (r) => {
      const o = f(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), vt(this, ss, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), vt(this, ns, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), vt(this, is, (r) => {
      this.setState({ year: r, select: "day" });
    }), vt(this, rs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      (a = (o = this.props).onChange) == null || a.call(o, r);
    };
    const { date: n } = e, i = Ue(n) || /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((n) => n.select === e ? { select: "day" } : { select: e });
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = F.getLang("yearFormat") || "{0}",
      weekNames: o = F.getLang("weekNames"),
      monthNames: a = F.getLang("monthNames"),
      minDate: l,
      maxDate: c,
      weekStart: u
    } = e, h = Ue(i), {
      year: p,
      month: d,
      select: _
    } = n, m = _ === "day", v = l || V("1970-1-1"), y = c || V("2099-12-31");
    return /* @__PURE__ */ g("div", { className: "date-picker-menu row", ref: at(this, ts), onClick: at(this, es), children: [
      Cn(this, Js, za).call(this, e),
      /* @__PURE__ */ g("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ g("div", { className: "row p-2", children: [
          /* @__PURE__ */ g(Z, { type: _ === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: B(r, p) }),
          /* @__PURE__ */ g(Z, { type: _ === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[d - 1] : d }),
          /* @__PURE__ */ g("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ g("div", { children: [
            /* @__PURE__ */ g(Z, { type: "ghost", size: "sm", square: !0, onClick: at(this, ss), children: /* @__PURE__ */ g("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ g(Z, { type: "ghost", size: "sm", square: !0, onClick: at(this, ns), children: /* @__PURE__ */ g("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ g(
          fu,
          {
            weekStart: u,
            weekNames: o,
            monthNames: a,
            maxDate: y,
            minDate: v,
            year: p,
            month: d,
            selections: h || [],
            onClickDate: this.changeDate
          }
        ) : null,
        _ === "year" ? /* @__PURE__ */ g(
          Jr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: p,
            min: v.getFullYear(),
            max: y.getFullYear(),
            onChange: at(this, is)
          }
        ) : _ === "month" ? /* @__PURE__ */ g(
          Jr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: 1,
            max: 12,
            onChange: at(this, rs)
          }
        ) : null,
        m ? Cn(this, Zs, Oa).call(this, e) : null
      ] })
    ] });
  }
}
ts = new WeakMap(), es = new WeakMap(), ss = new WeakMap(), ns = new WeakMap(), is = new WeakMap(), rs = new WeakMap(), Js = new WeakSet(), za = function(e) {
  return _t.render(e.menu, [], {
    onClickItem: (n) => {
      const i = n.item.value;
      typeof i == "string" && this.changeDate(i);
    }
  }, this);
}, Zs = new WeakSet(), Oa = function(e) {
  let { actions: n } = e;
  const { todayText: i = F.getLang("today"), clearText: r } = e;
  return n === void 0 && (n = [{ text: i, "data-set-date": Nt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ g("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ g(Tt, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ g(Z, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
let _n = class extends Ct {
  constructor() {
    super(...arguments), this.setDate = (t, e) => {
      const { disabled: n, readonly: i } = this.props;
      if (!e && (n || i))
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
      const n = this._trigger.current;
      n && (n._skipTriggerChange = t);
    }
    return this.setDate(t, !0);
  }
  _calcValue(t) {
    const { onInvalid: e, defaultValue: n = "", required: i, allowInvalid: r, format: o } = this.props;
    let a = this._parseDate(t);
    if (!a && e) {
      const l = e(t);
      l && (a = this._parseDate(l));
    }
    return this._date = a, a ? Nt(a, o) : r ? t : i ? n : "";
  }
  _getDateRange(t) {
    const { minDate: e, maxDate: n } = this.props;
    return [Ue(typeof e == "function" ? e(t) : e), Ue(typeof n == "function" ? n(t) : n)];
  }
  _parseDate(t) {
    const e = Ue(t);
    return e ? uu(e, ...this._getDateRange(t)) : null;
  }
  _afterSetDate() {
    this.toggle(!1);
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a, display: l } = t, { value: c = "", open: u } = e, h = `date-picker-${this.id}`;
    let p;
    u && !r && c.length ? p = /* @__PURE__ */ g("button", { type: "button", className: "btn size-sm square ghost", onClick: this._handleClearBtnClick, children: /* @__PURE__ */ g("span", { className: "close" }) }) : i && (i === !0 ? p = /* @__PURE__ */ g("i", { class: "i-calendar" }) : p = /* @__PURE__ */ g(st, { icon: i }));
    const d = u ? c : l ? l(c, this._date) : c;
    return [
      /* @__PURE__ */ g(
        "input",
        {
          id: h,
          type: "text",
          className: "form-control",
          placeholder: n,
          value: d,
          disabled: o,
          readOnly: a,
          autoComplete: "off",
          onFocus: this._handleInputFocus,
          onChange: this._handleInputChange
        },
        "input"
      ),
      p ? /* @__PURE__ */ g("label", { for: h, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: k(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: k(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a, clearText: l, menu: c, actions: u, required: h } = t, [p, d] = this._getDateRange(e.value);
    return /* @__PURE__ */ g(
      pu,
      {
        onChange: this._handleSetDate,
        date: this._date,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: h ? "" : l,
        menu: c,
        actions: u,
        minDate: p,
        maxDate: d
      }
    );
  }
};
_n.defaultProps = {
  ...Ct.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0,
  limitPopInScreen: !1
};
let Ha = class extends _n {
  constructor() {
    super(...arguments), this._handleSetDate = (t) => {
      const e = V(t), n = this.getDate() || /* @__PURE__ */ new Date();
      e.setHours(n.getHours()), e.setMinutes(n.getMinutes()), this.setDate(Nt(e, this.props.format));
    }, this._handleSetTime = (t, e) => {
      const n = this.getDate() || /* @__PURE__ */ new Date();
      t === "hour" ? n.setHours(e) : n.setMinutes(e), this.setDate(Nt(n, this.props.format));
    };
  }
  getTime() {
    const t = this.getDate();
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _afterSetDate() {
  }
  _renderPop(t, e) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ g("div", { className: "datetime-picker-menu row", children: [
      super._renderPop(t, e),
      /* @__PURE__ */ g("div", { className: "divider" }),
      /* @__PURE__ */ g(
        Da,
        {
          hour: n,
          minute: i,
          minuteStep: t.minuteStep,
          onChange: this._handleSetTime
        }
      )
    ] });
  }
};
Ha.defaultProps = {
  ..._n.defaultProps,
  popMaxHeight: 310,
  format: "yyyy-MM-dd hh:mm",
  minuteStep: 5
};
class Zi extends U {
}
Zi.NAME = "TimePicker";
Zi.Component = La;
Zi.register();
class Xi extends U {
}
Xi.NAME = "DatePicker";
Xi.Component = _n;
Xi.register();
class Qi extends U {
}
Qi.NAME = "DatetimePicker";
Qi.Component = Ha;
Qi.register();
const Zr = "show", Pn = "in", gu = '[data-dismiss="modal"]', ys = "modal-hide", Le = class ne extends yt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(gu) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
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
        const n = new ResizeObserver(() => {
          if (!this._shown)
            return;
          const i = e.clientWidth, r = e.clientHeight, [o, a] = this._lastDialogSize || [];
          (o !== i || a !== r) && (this._lastDialogSize = [i, r], this.layout());
        });
        n.observe(e), this._rob = n;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize(), this.on("hidden", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && !ne.getAll().some((n) => n.shown) && f("html").enableScroll();
    }), this.on("show", (t) => {
      const { modalElement: e } = this;
      if (!e.parentNode)
        return this.destroy();
      t.target.closest(".modal") === e && f("html").disableScroll();
    }), this.shown && f("html").disableScroll();
  }
  destroy() {
    super.destroy(), this._rob && (this._rob.disconnect(), this._rob = void 0);
  }
  show(t) {
    const { modalElement: e } = this, n = f(e);
    if (this._shown && n.hasClass(Pn))
      return n.removeClass(ys).css("z-index", `${ne.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: i, backdrop: r, className: o, style: a } = this.options;
    n.setClass({
      "modal-trans": i,
      "modal-no-backdrop": !r,
      [ys]: !1
    }, Zr, o).css({
      zIndex: `${ne.zIndex++}`,
      ...a
    });
    const l = this.constructor;
    return l.hideOthers && this.options.hideOthers !== !1 && l.getAll().forEach((c) => {
      c !== this && c.shown && !n.closest(c.modalElement).length && c.hideForOther();
    }), this.options.closeOthers && l.getAll().forEach((c) => {
      c !== this && !n.closest(c.modalElement).length && c.hide();
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      n.addClass(Pn), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hideForOther() {
    f(this.modalElement).addClass(ys);
  }
  hide() {
    if (!this._shown)
      return !1;
    this._shown = !1, f(this.modalElement).removeClass(Pn), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(Zr), this.emit("hidden");
    });
    const t = this.constructor;
    return t.hideOthers && this.options.hideOthers !== !1 && t.getAll().forEach((e) => {
      e.shown && e !== this && f(e.modalElement).removeClass(ys);
    }), !0;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = f(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const u = { width: "", height: "" };
      typeof e == "object" ? (u.width = e.width, u.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (u.width = e), i.css(u);
    }
    t = t ?? this.options.position ?? "fit";
    const r = n.clientWidth, o = n.clientHeight;
    this._lastDialogSize = [r, o], typeof t == "function" && (t = t({ width: r, height: o }));
    const a = {
      left: null,
      bottom: null,
      right: null
    };
    let l = null, c = "center";
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
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
    (e = ne.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
Le.NAME = "Modal";
Le.MULTI_INSTANCE = !0;
Le.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Le.hideOthers = !0;
Le.zIndex = 1500;
let Xe = Le;
f(window).on(`resize.${Xe.NAMESPACE}`, () => {
  Xe.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
class Fa extends W {
  constructor(t) {
    super(t), this._ref = G(), this.state = { showed: !t.waitShowEvent };
  }
  componentDidMount() {
    const { waitShowEvent: t, afterRender: e } = this.props;
    e == null || e.call(this, { firstRender: !0 }), t && f(this._ref.current).on(t, () => {
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
      title: n
    } = this.props;
    return ft(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(L, { className: k("modal-header", e), content: t }) : /* @__PURE__ */ g("div", { className: k("modal-header", e), children: /* @__PURE__ */ g("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : ft(t) ? t : /* @__PURE__ */ g("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ g(Tt, { ...t }) : null,
      e ? /* @__PURE__ */ g("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ g("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? ft(t) ? t : /* @__PURE__ */ g(L, { className: k("modal-body", e), content: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return ft(t) ? t : t === !1 || !n ? null : t ? /* @__PURE__ */ g(L, { className: k("modal-footer", e), content: t }) : /* @__PURE__ */ g("div", { className: k("modal-footer", e), children: n ? /* @__PURE__ */ g(Tt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i,
      waitShowEvent: r
    } = this.props, o = r && !this.state.showed;
    return /* @__PURE__ */ g("div", { ref: r ? this._ref : void 0, className: k("modal-dialog", t, o ? "loading" : ""), style: e, children: [
      /* @__PURE__ */ g("div", { className: k("modal-content", n), children: [
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
Fa.defaultProps = { closeBtn: !0 };
class Wa extends W {
  constructor() {
    super(...arguments), this._ref = G(), this.state = {}, this._handleIframeLoad = () => {
      const t = this.iframeDoc;
      if (!t)
        return;
      const { iframeBodyClass: e, watchHeight: n } = this.props;
      n && this._watchIframeHeight(), e && t.body.classList.add(e), f(this._ref.current).trigger("modal-iframe-loaded");
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
      const n = t.body, i = t.documentElement, r = Math.ceil(Math.max(n.scrollHeight, n.offsetHeight, i.offsetHeight));
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
Wa.defaultProps = {
  watchHeight: !0
};
var tr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, xt = (s, t, e) => (tr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), He = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, me = (s, t, e, n) => (tr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Ss = (s, t, e) => (tr(s, t, "access private method"), e), Lt, Fe, zt, Fs, er, xs, ti;
function mu(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function _u(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await f.ajax({
    url: n,
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
    body: e === "html" ? /* @__PURE__ */ g(ke, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function yu(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    waitShowEvent: "modal-iframe-loaded",
    body: /* @__PURE__ */ g(Wa, { url: e, watchHeight: !o })
  };
}
const vu = {
  custom: mu,
  ajax: _u,
  iframe: yu
}, Xr = "loading", ja = class ye extends Xe {
  constructor() {
    super(...arguments), He(this, Fs), He(this, xs), He(this, Lt, void 0), He(this, Fe, void 0), He(this, zt, void 0);
  }
  get id() {
    return xt(this, Fe);
  }
  get loading() {
    var t;
    return (t = xt(this, Lt)) == null ? void 0 : t.classList.contains(Xr);
  }
  get shown() {
    var t;
    return !!((t = xt(this, Lt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = xt(this, Lt);
    if (!t) {
      const { options: e } = this;
      let n = xt(this, Fe);
      n || (n = e.id || `modal-${pt()}`, me(this, Fe, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], t)
        f(t).data(this.constructor.KEY, this);
      else {
        const r = this.key;
        t = f("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      me(this, Lt, t);
    }
    return t;
  }
  get $emitter() {
    const t = xt(this, Lt);
    return t ? f(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.options.destroyOnHide && this.options.type !== "static" && this.on("hidden", (t) => {
      f(t.target).data("key") === this.key && this.destroy();
    });
  }
  show(t) {
    return super.show(t) ? (this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = xt(this, Lt);
    t && (f(t).removeData(this.constructor.KEY).remove(), me(this, Lt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    xt(this, zt) && clearTimeout(xt(this, zt));
    const { modalElement: t, options: e } = this, n = f(t), { type: i, loadTimeout: r, loadingClass: o = Xr, loadingText: a = null } = e;
    if (!i || i === "static")
      return !0;
    const l = vu[i];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", a).addClass(o), r && me(this, zt, window.setTimeout(() => {
      me(this, zt, 0), Ss(this, xs, ti).call(this, this.options.timeoutTip);
    }, r));
    const c = await l.call(this, t, e);
    return this._destroyed ? !1 : (c === !1 ? await Ss(this, xs, ti).call(this, this.options.failedTip) : c && typeof c == "object" && await Ss(this, Fs, er).call(this, c), xt(this, zt) && (clearTimeout(xt(this, zt)), me(this, zt, 0)), this.layout(), await Ms(100), n.removeClass(o), !0);
  }
  static isValid(t) {
    return !f.isDetached(t.modalElement);
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax"), !r.type && t.id && (r.type = "static"), r.key === void 0 && (r.key = r.id);
      const o = ye.ensure(n, r), a = `${ye.NAMESPACE}.open${pt()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...u } = t, h = (typeof l == "function" ? l() : l) || {};
    let p = typeof n == "object" && n.html ? /* @__PURE__ */ g("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ g("div", { children: n });
    i ? p = /* @__PURE__ */ g("div", { className: k("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ g("div", { className: `icon ${i} ${r}` }),
      p
    ] }) : p = /* @__PURE__ */ g("div", { className: k("modal-body", h.bodyClass), children: p });
    const d = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = F.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && d.push(v);
    }, []);
    let _;
    const m = d.length ? {
      gap: 4,
      items: d,
      onClickItem: ({ item: v, event: y }) => {
        const w = ye.query(y.target);
        if (!w || w.key !== c)
          return;
        _ = v.key, (a == null ? void 0 : a(v, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await ye.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: p,
      modal: !0,
      backdrop: "static",
      hideOthers: !1,
      custom: { footerActions: m, ...h },
      ...u
    }), _;
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
Lt = /* @__PURE__ */ new WeakMap();
Fe = /* @__PURE__ */ new WeakMap();
zt = /* @__PURE__ */ new WeakMap();
Fs = /* @__PURE__ */ new WeakSet();
er = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return f(this.modalElement).html(s[0]).zuiInit(), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, be(
      /* @__PURE__ */ g(Fa, { ...s }),
      this.modalElement
    );
  });
};
xs = /* @__PURE__ */ new WeakSet();
ti = function(s) {
  if (s)
    return Ss(this, Fs, er).call(this, {
      body: /* @__PURE__ */ g("div", { className: "modal-load-failed", children: s })
    });
};
ja.DEFAULT = {
  ...Xe.DEFAULT,
  loadTimeout: 1e4,
  destroyOnHide: !0
};
let Ws = ja;
Ws.register();
class Ke extends yt {
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
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), n.key === void 0 && (n.key = `${this._key}`), n;
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
      e = Xe.ensure(n, t);
    } else
      e = Ws.ensure(this.container, t);
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
Ke.NAME = "ModalTrigger";
Ke.toggle = {
  name: "modal",
  skip: "[disabled],.disabled,.open-in-parent",
  convertHref: !0,
  onGet(s) {
    return Ke.get(s);
  },
  onCreate(s, t, e) {
    return new Ke(s, e);
  }
};
Ke.register();
const wu = {
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
let Qt = class extends Q {
  constructor(t) {
    super(t), this._input = G(), this._file = G(), this._id = `file-selector-input-${pt()}`, this._data = new DataTransfer(), this.stopRenameFile = () => {
      const { renaming: e, newName: n } = this.state;
      this.cancelRenameFile(), !(!e || !n) && this.renameFile(e, n);
    }, this.cancelRenameFile = () => {
      this.setState({ renaming: "" });
    }, this._handleChange = (e) => {
      const n = e.target;
      n.files && (this.selectFiles(n.files), this.setState({ inputKey: pt() }));
    }, this._handleDragOver = (e) => {
      e.preventDefault(), this.state.dragging || this.setState({ dragging: !0 });
    }, this._handleDragLeave = (e) => {
      e.preventDefault(), this.setState({ dragging: !1 });
    }, this._handleDrop = (e) => {
      var i;
      this._handleDragLeave(e);
      const n = this.constructor.filterFiles(((i = e.dataTransfer) == null ? void 0 : i.files) || [], this.props.accept);
      n.length && (this.selectFiles(n), this.setState({ inputKey: pt() }));
    }, this._handleRenameChange = (e) => {
      this.setState({
        newName: e.target.value
      });
    }, this._handleClick = (e) => {
      if (this.props.disabled)
        return;
      const i = f(e.target).closest("[data-remove-file],[data-rename-file]");
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
    const { multiple: t, maxFileCount: e, name: n = "" } = this.props;
    return !!(e !== 1 && (t ?? n.endsWith("[]")));
  }
  get info() {
    const { maxFileSize: t = 0, maxFileCount: e = Number.MAX_SAFE_INTEGER } = this.props;
    return {
      size: Dt(this.size, 1),
      maxFileSize: Dt(typeof t == "string" ? ps(t) : t, 1),
      maxFileCount: e,
      count: this.count
    };
  }
  get files() {
    return this._data.files;
  }
  componentDidMount() {
    const t = this.state.files.reduce((e, n) => (n.file && e.push(n.file), e), []);
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
      for (let n = 0; n < t.length && (await this.addFile(t[n]), !this._skipAddMore); n++)
        ;
    }
  }
  async _checkDuplicated(t) {
    const { allowSameName: e, onDuplicated: n, duplicatedTip: i = this.i18n("duplicatedTip") } = this.props, { name: r } = t, o = e ? this.getFile(t.id) : this.getFileByName(r);
    return o ? ((n == null ? void 0 : n.call(this, r, t, o)) === !0 || i && await this._showAlert(i, {
      name: r,
      size: Dt(t.size, 1)
    }), !0) : !1;
  }
  async _checkExceededSize(t) {
    const { maxFileSize: e, onExceededSize: n, exceededSizeTip: i = this.i18n("exceededSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? ps(e) : e;
    return t.size <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1)
    }), !0);
  }
  async _checkTotalSize(t) {
    const { totalFileSize: e, onExceededTotalSize: n, exceededTotalSizeTip: i = this.i18n("exceededTotalSizeTip") } = this.props;
    if (!e)
      return !1;
    const r = typeof e == "string" ? ps(e) : e, o = t.size + this.size;
    return o <= r ? !1 : ((n == null ? void 0 : n.call(this, r, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1),
      totalSize: Dt(o, 1)
    }), !0);
  }
  async _checkExceededCount(t) {
    const { maxFileCount: e = 0, onExceededCount: n, exceededCountTip: i = this.i18n("exceededCountTip") } = this.props;
    if (!e)
      return !1;
    const r = this.count + 1;
    return r <= e ? !1 : ((n == null ? void 0 : n.call(this, e, t)) === !0 || i && await this._showAlert(i, {
      name: t.name,
      size: Dt(t.size, 1),
      exceededCount: r
    }), !0);
  }
  async addFile(t) {
    const { onAdd: e, disabled: n } = this.props;
    if (n)
      return !1;
    const i = this.constructor.getInfo(t);
    return await this._checkExceededCount(i) ? (this._skipAddMore = !0, !1) : await this._checkDuplicated(i) ? !1 : await this._checkExceededSize(i) ? (this._skipAddMore = !0, !1) : await this._checkTotalSize(i) ? (this._skipAddMore = !0, !1) : e && e.call(this, i) === !1 ? !1 : (this._data.items.add(t), this._syncFiles(!0), await this.changeState((c) => ({ files: [...c.files, i] })), !0);
  }
  startRenameFile(t) {
    this.setState({ renaming: t, newName: void 0 }, () => {
      const e = f(this._file.current).closest(".file-selector").find(".file-selector-rename-input")[0];
      e && (e.select(), e.focus());
    });
  }
  async renameFile(t, e) {
    const n = this.getFile(t);
    if (!n || n.name === e)
      return;
    const { onRename: i } = this.props;
    if (i && await i.call(this, e, n.name, n) === !1)
      return;
    const r = n.file;
    if (r) {
      const l = new File([r], e, { type: r.type, lastModified: r.lastModified }), c = Array.from(this._data.files).indexOf(r);
      c >= 0 && this._data.items.remove(c), this._data.items.add(l), this._syncFiles(!0), n.file = l;
    }
    n.name = e, n.ext = this.constructor.getExt(e);
    const { files: o } = this.state, a = o.indexOf(n);
    a >= 0 ? o.splice(a, 1, n) : o.push(n), this.setState({ files: [...o] });
  }
  async removeFile(t) {
    const e = this.getFile(t);
    if (!e)
      return;
    const { onRemove: n, removeConfirm: i } = this.props;
    if (i) {
      let o = i;
      if (typeof o == "string" && (o = { message: o }), typeof o.message == "string" && (o.message = B(o.message, {
        name: e.name,
        size: Dt(e.size, 1)
      })), !await Ws.confirm(o))
        return;
    }
    if (n && await n.call(this, e) === !1)
      return;
    if (e.file) {
      const o = Array.from(this._data.files).indexOf(e.file);
      o >= 0 && this._data.items.remove(o);
    }
    const r = this.state.files.indexOf(e);
    r >= 0 && (this.state.files.splice(r, 1), this.setState({ files: this.state.files }), this._syncFiles(!0));
  }
  _syncFiles(t = !1) {
    const e = this._data.files, n = this._file.current;
    n.files = e, t && f(n).trigger("change", { files: e });
  }
  _showAlert(t, e) {
    return typeof t == "string" && (t = { message: t }), typeof t.message == "string" && (t.message = B(t.message, { ...this.info, ...e })), Ws.alert(t);
  }
  _getTip(t) {
    return typeof t == "string" ? B(t, this.info) : t;
  }
  _renderInput(t) {
    return /* @__PURE__ */ g("input", { id: this._id, multiple: this.multiple, accept: t.accept, style: "display:none", type: "file", ref: this._input, onChange: this._handleChange }, `input${this.state.inputKey}`);
  }
  _getDraggableProps() {
    const t = {};
    return this.props.draggable && !this.props.disabled && (t.onDragOver = this._handleDragOver, t.onDragLeave = this._handleDragLeave, t.onDrop = this._handleDrop), t;
  }
  _renderUpload(t) {
    const { mode: e, disabled: n, tip: i = this.i18n("fileSelectTip"), uploadBtn: r } = t, o = z({
      component: "label",
      attrs: {
        for: n ? void 0 : this._id
      },
      disabled: n,
      text: this.i18n("selectFile")
    }, typeof r == "object" ? r : typeof r == "string" ? { text: r } : {}), a = /* @__PURE__ */ g("div", { className: "file-selector-tip", children: /* @__PURE__ */ g(L, { content: this._getTip(i), generatorThis: this, generatorArgs: [this.state] }) }), l = e === "grid", c = l ? {} : this._getDraggableProps();
    return l || e === "box" ? /* @__PURE__ */ g(Z, { ...o, ...c, className: k(l ? "file-selector-grid-btn" : "file-selector-box", o.className), children: a }, "upload") : /* @__PURE__ */ g("div", { className: "file-selector-btn", ...c, children: [
      /* @__PURE__ */ g(Z, { rounded: "full", size: "sm", ...o }),
      a
    ] }, "upload");
  }
  _renderForForm(t) {
    const { name: e, accept: n, onChange: i } = t;
    return /* @__PURE__ */ g("input", { ref: this._file, type: "file", name: e, multiple: this.multiple, accept: n, style: "display:none", onChange: i }, "form");
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
    let n;
    if (e)
      n = { src: e };
    else {
      const i = this._getIcon(t);
      i && (n = { icon: i });
    }
    return n && {
      size: this.props.mode === "grid" ? void 0 : "sm",
      ...n
    };
  }
  _getFileActions(t) {
    if (this.props.disabled)
      return;
    let { removeBtn: e, renameBtn: n } = this.props;
    typeof e == "function" && (e = e.call(this, t)), typeof e == "string" ? e = { text: e } : e === !0 && (e = { hint: this.i18n("removeFile"), icon: "trash" }), typeof n == "function" && (n = n.call(this, t)), typeof n == "string" ? n = { text: n } : n === !0 && (n = { hint: this.i18n("renameFile"), icon: "edit" });
    const i = [];
    return n && i.push({
      "data-rename-file": t.id,
      ...n
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
      subtitle: Dt(t.size, 1),
      avatar: this._getAvatar(t),
      actions: this._getFileActions(t),
      "z-id": t.id
    }, typeof e == "function" ? e.call(this, t) : e), /* @__PURE__ */ g(Te, { ...e }, t.id);
  }
  _renderFileRename(t) {
    let { itemProps: e } = this.props;
    if (typeof e == "function")
      e = e.call(this, t);
    else {
      const { newName: n = t.name } = this.state, i = this.props.mode === "grid", r = /* @__PURE__ */ g("div", { className: "file-selector-rename-text", children: [
        /* @__PURE__ */ g("div", { className: "form-control size-sm", children: n }),
        /* @__PURE__ */ g("input", { type: "text", defaultValue: t.name, className: "form-control size-sm select-all file-selector-rename-input", autofocus: !0, onBlur: i ? this.stopRenameFile : void 0, onChange: this._handleRenameChange, onInput: this._handleRenameChange })
      ] });
      e = z({
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
    return /* @__PURE__ */ g(Te, { ...e }, t.id);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderList(t) {
    const { files: e, renaming: n } = this.state;
    return /* @__PURE__ */ g("div", { className: `file-selector-list${e.length ? "" : " is-empty"}`, onClick: this._handleClick, children: e.map((i) => i.id === n ? this._renderFileRename(i) : this._renderFile(i)) }, "list");
  }
  _renderGrid(t) {
    const e = this._getDraggableProps(), { gridWidth: n = 120, gridHeight: i = 148, gridGap: r = 12 } = t, o = {
      "--file-selector-grid-width": Gt(n),
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
    const { name: e, size: n, type: i } = t;
    if (t instanceof File)
      return {
        name: e,
        size: n,
        type: i,
        file: t,
        id: [e, n].join(":"),
        ext: this.getExt(e)
      };
    const r = typeof n == "string" ? ps(n) : n;
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
    const n = e.split(",");
    return t.filter((i) => this.isAccept(i, n));
  }
};
Qt.defaultProps = {
  mode: "button",
  maxFileSize: "100MB",
  fileIcons: "file",
  renameBtn: !0,
  removeBtn: !0,
  draggable: !0,
  thumbnail: !0,
  maxFileCount: 0
};
Qt.i18n = wu;
Qt.imageAccepts = "image/*,.png,.jpg,.jpeg,.gif";
let sr = class extends Qt {
};
sr.defaultProps = {
  ...Qt.defaultProps,
  mode: "grid",
  accept: Qt.imageAccepts
};
const bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FileSelector: Qt,
  ImageSelector: sr
}, Symbol.toStringTag, { value: "Module" }));
class nr extends U {
}
nr.NAME = "FileSelector";
nr.Component = Qt;
nr.replace = !0;
class ir extends U {
}
ir.NAME = "ImageSelector";
ir.Component = sr;
ir.replace = !0;
lt(bu);
const rr = class Ba extends as {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = z(n, r)), /* @__PURE__ */ wt(Ba, { ...r });
  }
};
rr.NAME = "nav";
rr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
let Va = rr;
const Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Nav: Va
}, Symbol.toStringTag, { value: "Module" }));
class Ua extends U {
}
Ua.NAME = "Nav";
Ua.Component = Va;
lt(Cu);
function Qe(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Ka({
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
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : B(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : B(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ g(Z, { type: e, ...a });
}
function qa({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Qe(i, e);
  return n = typeof n == "function" ? n(a) : B(n, a), /* @__PURE__ */ g(Q, { ...o, children: [
    r,
    n
  ] });
}
function Su({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ g(Z, { type: t, ...o })), l = (u, h) => {
    const p = [];
    for (let d = u; d <= h; d++) {
      o.text = d, delete o.icon, o.disabled = !1;
      const _ = Qe(n, d);
      i && (o.url = typeof i == "function" ? i(_) : B(i, _)), p.push(/* @__PURE__ */ g(Z, { type: t, ...o }));
    }
    return p;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let xu = class extends W {
  render(t) {
    const {
      id: e,
      popup: n,
      title: i,
      content: r,
      style: o,
      className: a,
      closeBtn: l,
      arrow: c,
      headingClass: u,
      titleClass: h,
      contentClass: p,
      arrowStyle: d,
      onlyInner: _,
      footer: m,
      footerClass: v
    } = t;
    let y = /* @__PURE__ */ g(L, { content: r }, "content");
    (p || i) && (y = /* @__PURE__ */ g("div", { className: p, children: y }, "content"));
    let w = /* @__PURE__ */ g(L, { content: m }, "footer");
    (v || i) && (w = /* @__PURE__ */ g("div", { className: v, children: w }, "footer"));
    const C = [], b = l ? /* @__PURE__ */ g("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ g("span", { className: "close" }) }) : null;
    return i ? C.push(/* @__PURE__ */ g("div", { className: u, children: [
      i ? /* @__PURE__ */ g(L, { className: h, content: i }) : null,
      b
    ] }, "heading")) : C.push(b), C.push(y, w), c && C.push(/* @__PURE__ */ g("div", { className: typeof c == "string" ? c : "arrow", style: d }, "arrow")), _ ? C : /* @__PURE__ */ g("div", { id: e, className: k("popover", a, { popup: n, "has-heading": i }), style: o, children: C });
  }
};
class or extends U {
}
or.NAME = "PopoverPanel";
or.Component = xu;
const Qr = "show", to = "in", ze = class Ga extends yt {
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
    const { trigger: t, id: e, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const o = f(i), { namespace: a } = this;
      if (t) {
        const l = () => {
          let c = o.dataset();
          const u = o.attr(`zui-toggle-${this.constructor.ZUI}`);
          u && (c = f.extend(c, xe(u))), this.setOptions(c);
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
    return this._dynamic = !t, t ? (typeof t == "function" && (t = t()), typeof t == "string" && (t === "$next" ? t = f(this._triggerElement).next() : t.startsWith("$target:") && (t = f(this._triggerElement).closest(t.slice(8)))), f(t)[0]) : this._createTarget();
  }
  show(t) {
    const { delay: e, event: n, hideOthers: i = this.options.hideOthers } = t || {};
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
    const r = this.initTarget();
    if (!r)
      return;
    this._targetElement = r;
    const o = f(r), { animation: a, onShow: l, onShown: c, trigger: u, elementShowClass: h } = this.options, { SHOWN_POPOVERS: p } = this.constructor;
    o.addClass(Qr), a && o.addClass(a === !0 ? "fade" : a), this._zIndex = Ga.Z_INDEX++, this._shown = !0, this.render(), p.set(this.gid, this), l == null || l.call(this), this.emit("show"), i && p.forEach((_) => {
      _ !== this && _.hide();
    });
    const { namespace: d } = this;
    u === "hover" && (this._clearDelayHide(), o.off(d).on(`pointerenter${d}`, () => {
      this._clearDelayHide();
    }).on(`pointerleave${d}`, () => {
      this.delayHide();
    })), !this._virtual && h && f(this._triggerElement).addClass(h), this._resetTimer(() => {
      o.addClass(to), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200);
    }, 50);
  }
  hide(t) {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: n, onHide: i, onHidden: r, trigger: o, hideNewOnHide: a, elementShowClass: l } = this.options, c = f(this._targetElement), { SHOWN_POPOVERS: u } = this.constructor;
    this._shown = !1, u.delete(this.gid), i == null || i.call(this), this.emit("hide"), c.removeClass(to), o === "hover" && (this._clearDelayHide(), c.off(this.namespace)), !this._virtual && l && f(this._triggerElement).removeClass(l).removeAttr("data-pop-placement"), a && u.forEach((h) => {
      h !== this && h.zIndex > this.zIndex && h.hide();
    }), this._resetTimer(() => {
      r == null || r.call(this), this.emit("hidden"), c.removeClass(Qr), (e || t) && this._resetTimer(() => {
        this.destroy();
      }, !t && typeof e == "number" ? e : 0), this._destoryTarget();
    }, n && !t ? 200 : 0);
  }
  toggle(t) {
    this._shown ? this.hide() : this.show(t);
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: t } = this;
      f(this._triggerElement).off(t);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const t = this._triggerElement, e = this._targetElement, n = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Na(t, e, () => {
      if (this.destroyed || !this._shown)
        return;
      const { animation: i, name: r = "popover", minWidth: o, minHeight: a, maxWidth: l, maxHeight: c, limitInScreen: u, onLayout: h } = this.options;
      if (!this._virtual) {
        const p = {
          minWidth: Gt(o),
          minHeight: Gt(a),
          maxWidth: Gt(l),
          maxHeight: Gt(c)
        }, { width: d, height: _ } = this.options;
        d && (p.width = typeof d == "function" ? d() : d === "100%" ? f(t).outerWidth() : d), _ && (p.height = typeof _ == "function" ? _() : _), Object.keys(p).length && f(e).css(p);
      }
      Ji(...this._getLayoutOptions()).then(({ x: p, y: d, middlewareData: _, placement: m, strategy: v }) => {
        if (t instanceof HTMLElement && pe(t)) {
          this.hide(!0);
          return;
        }
        const y = {
          position: v,
          left: p,
          top: d
        }, w = f(e).css(y);
        u && w.css({
          top: Math.max(0, Math.min(window.innerHeight - w.outerHeight(), d)),
          left: Math.max(0, Math.min(window.innerWidth - w.outerWidth(), p))
        });
        const C = m.split("-")[0], b = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[C], S = _.arrow;
        S && w.attr("data-pop-placement", C).find(".arrow").css({
          left: S.x,
          top: S.y
        }).attr("class", `arrow ${r}-arrow arrow-${b}`), i === !0 && w.attr("class", `${w.attr("class").split(" ").filter(($) => $ !== "fade" && !$.startsWith("fade-from")).join(" ")} fade-from-${b}`), this._virtual || f(this._triggerElement).attr("data-pop-placement", C), h && h.call(this, {
          target: e,
          trigger: t,
          popSide: C,
          arrowSide: b,
          x: p,
          y: d,
          placement: m,
          strategy: v
        });
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const n = this._getRenderOptions(), i = f(e);
    if (i.z("popover", this.gid).toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let r = this._panel;
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new or(e, n), r.on("inited", () => this.layout())), this._panel = r;
    } else
      n.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
  }
  handleClickOutside(t) {
    if (this.options.mask) {
      const e = this._triggerElement;
      e instanceof HTMLElement && f(t.target).closest(e).length || this.hide();
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
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, limitSize: r, shift: o, offset: a, arrow: l, strategy: c } = this.options, u = l ? e.querySelector(".arrow") : null, h = u ? typeof l == "number" ? l : 5 : 0, p = () => typeof a == "function" ? a : typeof a == "object" ? {
      mainAxis: (a.mainAxis || 0) + h,
      ...a
    } : (a || 0) + h;
    return [t, e, {
      placement: n,
      strategy: c,
      middleware: [
        i ? Yi() : null,
        o ? Gi(typeof o == "object" ? o : void 0) : null,
        a || h ? qi(p()) : null,
        l ? cu({ element: u }) : null,
        r ? Ea({
          apply({ availableWidth: d, availableHeight: _, placement: m }) {
            f(e).css({ maxHeight: _ - (["top", "bottom"].includes(m.split("-")[0]) ? h : 0) - 2, maxWidth: d - 2 });
          }
        }) : null
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
      className: c = t,
      closeBtn: u,
      arrow: h,
      footer: p,
      footerClass: d = `${t}-footer`
    } = this.options;
    return {
      popup: e,
      title: n,
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
      footer: p,
      footerClass: d
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
    const { container: t = "body" } = this.options, e = f(t);
    let n = e.find(`#${this._id}`);
    return n.length || (n = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), n[0];
  }
  static show(t) {
    const { element: e, event: n, ...i } = t, r = e || (n == null ? void 0 : n.currentTarget);
    return this.ensure(r instanceof HTMLElement ? r : document.body, { element: r, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
  }
};
ze.NAME = "Popover";
ze.Z_INDEX = 1700;
ze.MULTI_INSTANCE = !0;
ze.DEFAULT = {
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
ze.SHOWN_POPOVERS = /* @__PURE__ */ new Map();
let Et = ze;
Et.toggle = {
  trigger: ["click", "hover"],
  convertHref: { selector: "target" },
  check(s, t) {
    const e = f(s);
    return e.data(this.KEY) ? !1 : t === "hover" ? (e.dataset("trigger") || this.DEFAULT.trigger) === "hover" : !0;
  },
  getOptions(s, t, e) {
    return {
      triggerEvent: e,
      ...t
    };
  },
  onToggle(s, t, e) {
    s.toggle({ event: e });
  }
};
Et.register();
f(() => {
  f(document).on(`click.${Et.NAMESPACE}`, (s) => {
    const { SHOWN_POPOVERS: t } = Et;
    if (!t.size)
      return;
    const e = f(s.target), n = e.closest("[z-popover]"), i = n.length ? n.z("popover") : 0, r = i ? t.get(i) : null;
    if (r) {
      const a = r.options.name ?? r.constructor.ZUI;
      if (e.closest(`[data-dismiss="popover"],[data-dismiss="${a}"]`).length) {
        r.hide();
        return;
      }
      if (r.handleClickTarget(s))
        return;
    }
    const o = [...t.values()].sort((a, l) => l.zIndex - a.zIndex);
    for (const a of o)
      if (a !== r && a.handleClickOutside(s))
        return;
  });
});
Object.assign(window, { Popover: Et });
class ae extends Et {
  handleClickTarget(t) {
    const e = f(t.target), { notHideOnClick: n } = this.options;
    return (!n || !e.closest(n).length) && this.hide(), !0;
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, tree: i, onClickItem: r, relativeTarget: o = this._triggerElement } = this.options;
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
      ...n
    };
  }
  _getRenderOptions() {
    const t = super._getRenderOptions();
    return this._dynamic ? {
      ...t,
      contentClass: "",
      popup: !1,
      content: wt(ar, this._getMenuOptions())
    } : t;
  }
}
ae.NAME = "Dropdown";
ae.DEFAULT = {
  ...Et.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade",
  limitSize: !0,
  notHideOnClick: ".not-hide-menu,.form-control,input,label,.nested-toggle-icon"
};
ae.toggle = {
  ...Et.toggle,
  getOptions(s, t, e) {
    return t = Et.toggle.getOptions.call(this, s, t, e), !t.target && !t.items && !t.menu && (t.target = f(s).next(".dropdown-menu")), t;
  }
};
ae.register();
class yn extends Z {
  constructor() {
    super(...arguments), this._ref = G();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, menu: e, items: n, onClickItem: i, relativeTarget: r = this.triggerElement } = this.props, o = ae.get(this.triggerElement), a = {
      items: n,
      onClickItem: i,
      menu: e,
      relativeTarget: r,
      ...f(this.triggerElement).dataset(),
      ...t
    };
    o ? o.setOptions(a) : new ae(this.triggerElement, a);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = ae.get(this.triggerElement)) == null || t.destroy();
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
yn.defaultProps = {
  caret: !0
};
Object.assign(kt.ItemComponents, { dropdown: yn });
Object.assign(Tt.ItemComponents, { dropdown: yn });
class ar extends bt {
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
    var a;
    if (this.props.tree || this.isRoot)
      return;
    const t = (a = this.element) == null ? void 0 : a.parentElement, e = f(t);
    t && this._searchFocused && this._position && e.css(this._position);
    const r = e.parent().children(".dropdown-menu").children(`[z-key-path="${this.props.parentKey}"]`)[0];
    if (!t || !r)
      return;
    let { maxHeight: o } = this.props;
    Ji(r, t, {
      placement: this.props.placement,
      middleware: [Yi(), Gi(), qi(1), Ea({
        apply({ availableWidth: l, availableHeight: c }) {
          if (o) {
            const [u, h] = Ai(o);
            o = Math.min(h === "%" ? u * window.innerHeight : u, c - 2);
          } else
            o = c;
          e.css({ maxHeight: o, maxWidth: l - 2 });
        }
      })]
    }).then(({ x: l, y: c }) => {
      e.css({
        left: l,
        top: c
      }), this._position = { left: l, top: c, width: t.offsetWidth, height: t.offsetHeight };
    });
  }
  _getClassName(t) {
    return ["dropdown-menu scrollbar-hover scrollbar-thin", super._getClassName(t)];
  }
  _afterRender(t) {
    super._afterRender(t), this.layout();
  }
  _getNestedProps(t, e, n, i) {
    return z(this.isHoverTrigger ? {
      "z-key": n.key,
      "z-hover": this.props.parentKey ?? "root",
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : {}, super._getNestedProps(t, e, n, i));
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return e;
    const n = f(t.target).closest(".dropdown-menu[z-key]");
    if (n.length) {
      const i = n.attr("z-key"), r = n.parent().parent().children(".dropdown-menu").children(`[z-key="${i}"]`);
      if (r.length)
        return super._getItemFromEvent(t, r[0]);
    }
  }
  _renderNestedList(t, e, n, i) {
    const r = super._renderNestedList(t, e, n, i);
    if (this.props.tree)
      return r;
    this._nestedContextMenu.push(r);
  }
  _getWrapClass(t) {
    return [super._getWrapClass(t), t.tree ? "is-tree" : this.isRoot ? "is-contextmenu" : "is-contextmenu popup"];
  }
  _renderWrapperFooter(t) {
    const e = super._renderWrapperFooter(t), n = this._nestedContextMenu;
    return this.props.tree || !n.length ? e : [e, ...n];
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
ar.defaultProps = {
  ...bt.defaultProps,
  searchBox: !1,
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1,
  nestedSearch: !1
};
ar.inheritNestedProps = [...bt.inheritNestedProps, "container", "tree"];
function ku({
  type: s,
  pagerInfo: t,
  linkCreator: e,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: r,
  ...o
}) {
  var l;
  i.items = i.items || n.map((c) => {
    const u = { ...t, recPerPage: c };
    return {
      ...r,
      key: c,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(u) : B(e, u)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : B(a, t), i.menu = { ...i.menu, className: k((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ g(yn, { dropdown: i, ...o });
}
function Ya({
  key: s,
  page: t,
  type: e,
  btnType: n,
  pagerInfo: i,
  size: r,
  onClick: o,
  onChange: a,
  linkCreator: l,
  ...c
}) {
  const u = { ...c };
  let h;
  const p = (m) => {
    var v;
    h = Number((v = m.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, d = (m) => {
    if (!(m != null && m.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = Qe(i, h);
    a && !a({ info: v, event: m }) || (m.target.href = u.url = typeof l == "function" ? l(v) : B(l, v));
  }, _ = Qe(i, t || 0);
  return u.url = typeof l == "function" ? l(_) : B(l, _), /* @__PURE__ */ g("div", { className: k("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ g("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ g(Z, { type: n, ...u, onClick: d })
  ] });
}
let us = class extends Tt {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _isBtnType(t) {
    const { type: e } = t;
    return super._isBtnType(t) || ["link", "nav", "size-menu", "goto"].includes(e);
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    if (!i)
      return !1;
    const { type: r = "item" } = e, o = this._pagerInfo;
    return r === "info" ? f.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && f.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
us.NAME = "pager";
us.ItemComponents = {
  ...Tt.ItemComponents,
  info: qa,
  link: Ka,
  nav: Su,
  "size-menu": ku,
  goto: Ya
};
us.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
class Ja extends U {
}
Ja.NAME = "Pager";
Ja.Component = us;
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Pager: us,
  PagerGoto: Ya,
  PagerInfoItem: qa,
  PagerLink: Ka
}, Symbol.toStringTag, { value: "Module" }));
lt(Tu);
class lr extends U {
}
lr.NAME = "Pick";
lr.Component = Ct;
lr.replace = !0;
class Za extends W {
  constructor(t) {
    super(t), this._searchInput = G(), this._measure = G(), this._changeTimer = 0, this._handleChange = (e) => {
      const n = e.target.value;
      this.setState({ search: n }, () => {
        const { onSearch: i } = this.props;
        i && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, i(n);
        }, this.props.debounce || 300));
      }), e.stopPropagation();
    }, this._handleClear = (e) => {
      e.stopPropagation(), this.clear();
    }, this.state = { search: t.defaultSearch ?? "" };
  }
  get $pop() {
    return f(`#pick-pop-${this.props.id}`);
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
      const e = Wo(t, {
        clear: {
          keys: "Escape",
          handler: () => {
            this.state.search.trim().length ? this.clear() : this.$pop.trigger("hidePop");
          }
        },
        enter: {
          keys: "Enter",
          handler: (n) => {
            n.preventDefault(), this.$pop.trigger("selectActive"), this.clear();
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
      e && (this._hotkeysScope = `PickerSearch_${pt()}`, f(this._searchInput.current).hotkeys(e, {
        scope: this._hotkeysScope,
        event: "keydown"
      }));
    }
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: e } = this._measure, { current: n } = this._searchInput;
      if (e && n) {
        const i = f(n).parent();
        i.width(Math.ceil(Math.min(e.clientWidth, i.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  componentWillUnmount() {
    clearTimeout(this._changeTimer), this._hotkeysScope && f(this._searchInput.current).unbindHotkeys(this._hotkeysScope);
  }
  render(t, e) {
    const { placeholder: n, inline: i } = t, { search: r } = e, o = r.trim().length > 0;
    let a;
    return i ? a = /* @__PURE__ */ g("div", { className: "picker-search-measure", ref: this._measure, children: r }) : o ? a = /* @__PURE__ */ g("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: this._handleClear, children: /* @__PURE__ */ g("span", { className: "close" }) }) : a = /* @__PURE__ */ g("span", { className: "magnifier" }), /* @__PURE__ */ g("div", { className: `picker-search${i ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ g(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: n,
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
class $u extends Fi {
  constructor() {
    super(...arguments), this._search = G(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
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
    const { state: { search: e }, searchHint: n, hotkeys: i } = t;
    return /* @__PURE__ */ g(
      Za,
      {
        inline: !0,
        id: t.id,
        ref: this._search,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: n,
        hotkeys: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: e = [], open: n, value: i }, search: r, placeholder: o, display: a, valueList: l, children: c, caretClass: u } = this.props, h = n && r;
    let p;
    const d = !h && !e.length;
    return a && (!d || o === void 0) ? (typeof a == "function" ? p = a.call(this, l, e) : typeof a == "string" && (p = B(a, { value: i, values: l, count: l.length })), p = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: p }, "selections")) : d ? p = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "selections") : p = /* @__PURE__ */ g("div", { className: "picker-multi-selections", children: [
      e.map(this._renderSelection),
      h ? this._renderSearch(t) : null
    ] }, "selections"), [
      p,
      c,
      /* @__PURE__ */ g("span", { class: k("caret", u) }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: e, state: { value: n = "" }, disabled: i, readonly: r, id: o, valueList: a, emptyValue: l } = t;
    if (e)
      if (this.hasInput)
        f(`#${o}`).val(n);
      else {
        const c = a.length ? a : [l];
        return /* @__PURE__ */ g("select", { id: o, multiple: !0, className: "pick-value", name: e.endsWith("[]") ? e : `${e}[]`, disabled: i, readonly: r, style: { display: "none" }, children: c.map((u) => /* @__PURE__ */ g("option", { value: u, children: u }, u)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: e, emptyValue: n } = this.props;
    f(`#${t}`).val(e.length ? e : [n]);
  }
  componentDidUpdate(t) {
    const { id: e, state: n, name: i, valueList: r, emptyValue: o } = this.props;
    if (i && t.state.value !== n.value) {
      const a = f(`#${e}`).val(r.length ? r : [o]);
      this._skipTriggerChange !== n.value && a.trigger("change", ya), this._skipTriggerChange = !1;
    }
  }
}
class Nu extends Fi {
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
    return k(
      super._getClass(t),
      t.search ? "" : "picker-no-search",
      "picker-select picker-select-single form-control"
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, hotkeys: n } = t;
    return /* @__PURE__ */ g(
      Za,
      {
        ref: this._search,
        id: t.id,
        defaultSearch: e,
        onSearch: this._handleSearch,
        onClear: this._handleSearchClear,
        placeholder: this._getSearchPlaceholder(),
        hotkeys: n
      }
    );
  }
  _renderTrigger(t) {
    const { children: e, state: { selections: n = [], value: i, open: r }, placeholder: o, search: a, disabled: l, readonly: c, clearable: u, display: h, caretClass: p } = t, [d] = n, _ = r && a;
    let m;
    if (_)
      m = this._renderSearch(t);
    else if (d || o === void 0 && h) {
      const { text: w } = d || { text: "", value: "" };
      typeof h == "function" ? m = h.call(this, i, n) : typeof h == "string" ? m = B(h, d) : m = /* @__PURE__ */ g(L, { content: w }), m = /* @__PURE__ */ g("span", { className: "picker-single-selection", title: typeof w == "string" ? w : void 0, children: m }, "main");
    } else
      m = /* @__PURE__ */ g("span", { className: "picker-select-placeholder", children: o }, "main");
    const v = u && !_ ? /* @__PURE__ */ g("button", { type: "button", className: "btn picker-deselect-btn size-xs square ghost", disabled: l, readonly: c, onClick: this._handleDeselectClick, children: /* @__PURE__ */ g("span", { className: "close" }) }, "deselect") : null, y = _ ? null : /* @__PURE__ */ g("span", { className: k("caret flex-none", p) }, "caret");
    return [
      m,
      e,
      v,
      y
    ];
  }
}
class ds extends _t {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
}
ds.NAME = "tree";
ds.defaultProps = {
  ..._t.defaultProps,
  indent: 12
};
ds.defaultItemProps = {
  ..._t.defaultItemProps,
  innerComponent: "div"
};
ds.inheritNestedProps = [..._t.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
class vn extends bt {
  _getClassName(t) {
    return [super._getClassName(t), t.lines ? "tree-lines" : ""];
  }
  _getItem(t, e, n) {
    return ds.getTreeItem(t, super._getItem(t, e, n));
  }
}
vn.NAME = "tree";
vn.inheritNestedProps = [...bt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
vn.ItemComponents = {
  ...bt.ItemComponents,
  item: [Te, { innerComponent: "div" }]
};
function Xa(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Xa(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class Eu extends Aa {
  constructor() {
    super(...arguments), this._menu = G(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((u, h, p) => {
        const d = this._getItem(h, p);
        return d && (d.selected ? o = !0 : r = !1, u.push(d)), u;
      }, []));
      const a = r || n.has(t.value);
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
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((u) => this._disabledSet.has(u.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...Xa(t.items).values()].filter((p) => !p.items && !this._disabledSet.has(p.value)).map((p) => p.value);
          f(i).closest(".item").children(".item-inner.selected").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
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
    super.componentDidMount(), this._firstSelected === void 0 ? (t = this.menu) == null || t.activeNext() : (e = this.menu) == null || e.toggleActive(this._firstSelected, !0), f(this.element).on("activeNext.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activeNext();
    }).on("activePrev.zui.Picker", () => {
      var n;
      (n = this.menu) == null || n.activePrev();
    }).on("selectActive.zui.Picker", () => {
      const n = this.menu;
      if (!n)
        return;
      const i = n.getActiveKey();
      if (i !== void 0) {
        const r = n.getRenderedItem(i);
        r && f(this.element).find(`.item[z-key-path="${r._keyPath}"]`).trigger("click");
      }
    }).on("hidePop.zui.Picker", () => {
      this.props.togglePop(!1);
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), f(this.element).off(".zui.Picker");
  }
  _getClass(t) {
    return k(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r, header: o, footer: a, noMatchHint: l, maxItemsCount: c } = t, { items: u, search: h } = i;
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
      noMatchHint: l,
      relativeTarget: this
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._firstSelected = void 0, this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ g(vn, { ...n }) : /* @__PURE__ */ g(bt, { ...n });
  }
}
function ie(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && ie(n.items, e), e.set(n.value === void 0 ? "" : String(n.value), n), e), t || /* @__PURE__ */ new Map());
}
let cr = class extends Ct {
  constructor(t) {
    super(t), this._updateTimer = 0, this.toggleValue = (e, n) => {
      if (!this.props.multiple)
        return n || e !== this.value ? this.setValue(e) : this.setValue();
      const { valueList: i } = this, r = i.indexOf(e);
      if (n !== r >= 0)
        return r > -1 ? i.splice(r, 1) : i.push(e), this.setValue(i);
    }, this.deselect = (e = []) => {
      const { valueList: n } = this, i = new Set(this.formatValueList(e)), r = n.filter((o) => !i.has(o));
      this.setValue(r);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (e) => {
      const n = this.formatValueList(e), i = this.props.multiple ? [...this.valueList, ...n] : n[0];
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
    const { items: e, valueSplitter: n = ",", emptyValue: i = "" } = t || this.props, r = {
      ...super.getDefaultState(t),
      loading: !1,
      search: "",
      items: e,
      selections: []
    };
    if (this._emptyValueSet = new Set(i.split(n)), Array.isArray(e) && e.length) {
      const { limitValueInList: o, required: a, multiple: l } = this.props;
      if (e.forEach((c) => {
        typeof c.value == "number" && (c.value = String(c.value));
      }), o) {
        const c = ie(e);
        r.value = this.formatValueList(r.value, n).filter((u) => c.has(u)).join(n);
      }
      !this.formatValueList(r.value, n).length && a && !l && (r.value = e[0].value ?? "");
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
    const n = [...ie(t).values()].reduce((i, r) => (r.disabled || i.push(r.value), i), []);
    return this.select(n);
  }
  isSelectedAll() {
    const { items: t } = this.state;
    if (!Array.isArray(t))
      return !1;
    const e = ie(t), n = new Set(this.valueList);
    return [...e.values()].every((i) => i.disabled || n.has(i.value));
  }
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i = "" } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else {
      if (await Ms(n || 500), this._abort !== t)
        return r;
      let o = e;
      if (typeof o == "string" && (o = B(o, { search: encodeURIComponent(i) })), r = await xi(o, [this, i], { signal: t.signal }), this._abort !== t)
        return r;
    }
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = /* @__PURE__ */ new Map();
        Array.isArray(n.items) && n.items !== i.items && ie(n.items, o), ie(r, o), i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: n } = this, i = this._itemsCacheInfo || {}, r = {};
    if (this._itemsCacheInfo = i, !e.loading && (t || i.search !== e.search || n.items !== i.items)) {
      await this.changeState({ loading: !0 });
      let a = await this.load();
      a = a.filter((l) => (l.key = l.key ?? l.value, typeof l.value == "number" && (l.value = String(l.value)), !this.isEmptyValue(l.value))), r.loading = !1, r.items = a, i.items = n.items, i.search = e.search;
    } else
      i.items && !e.open && n.cache === !1 && !Array.isArray(n.items) && (i.items = void 0);
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
  _handleChange(t, e) {
    if (super._handleChange(t, e), t !== e) {
      const { onDeselect: n, onSelect: i, onClear: r, multiple: o } = this.props, a = this.formatValueList(e), l = this.valueList;
      if (r && !l.length && a.length && r.call(this), n) {
        const c = a.filter((u) => !l.includes(u));
        c.length && n.call(this, o ? c : c[0]);
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
      noMatchHint: e.loading ? F.getLang("loadingHint") : t.searchEmptyHint ?? F.getLang("searchEmptyHint"),
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? $u : Nu);
  }
  _renderToolbar() {
    let { toolbar: t } = this.props;
    return t ? (t === !0 && (t = [{
      key: "selectAll",
      text: F.getLang("selectAll")
    }, {
      key: "cancelSelect",
      text: F.getLang("cancelSelect")
    }]), Tt.render(t, [], { size: "sm", relativeTarget: this, getItem: (e) => (e.onClick || (e.key === "selectAll" ? (e.onClick = this.selectAll.bind(this), e.disabled = this.isSelectedAll()) : e.key === "cancelSelect" && (e.onClick = this.deselectAll.bind(this), e.disabled = !this.valueList.length)), e) }, this)) : null;
  }
  formatValueList(t, e) {
    let n;
    return typeof t == "string" && t.length ? n = t.split(e ?? this.props.valueSplitter ?? ",") : Array.isArray(t) ? n = t : n = [t], f.unique(n).reduce((i, r) => (r == null || (r = typeof r != "string" ? String(r) : r, this.isEmptyValue(r) || i.push(r)), i), []);
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = [], e) {
    let n = this.formatValueList(t);
    if (n.length) {
      const { items: r, limitValueInList: o } = this.props;
      if (o) {
        const a = ie(Array.isArray(r) ? r : this.state.items);
        n = n.filter((l) => a.has(l));
      }
    }
    const i = this.formatValue(n);
    return super.setValue(i, e);
  }
};
cr.defaultProps = {
  ...Ct.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: "",
  cache: !0,
  hotkeys: !0
};
cr.Pop = Eu;
class hr extends U {
}
hr.NAME = "Picker";
hr.Component = cr;
hr.register();
F.addLang({
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
class ur extends U {
}
ur.NAME = "SearchBox";
ur.Component = dn;
ur.register();
lt(Ch);
class Qa extends U {
}
Qa.NAME = "Toolbar";
Qa.Component = Tt;
lt(_h);
class dr extends Et {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: k("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
dr.NAME = "Tooltip";
dr.DEFAULT = {
  ...Et.DEFAULT,
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
dr.register();
var Ut, Kt;
class eo extends W {
  constructor(e) {
    super(e);
    ct(this, Ut, void 0);
    ct(this, Kt, void 0);
    vt(this, Ut, 0), vt(this, Kt, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (at(this, Ut) && cancelAnimationFrame(at(this, Ut)), vt(this, Ut, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), vt(this, Ut, 0);
      })), n.preventDefault());
    }, this._handleMouseUp = () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    }, this._handleMouseDown = (n) => {
      this.state.dragStart || this.setState({ dragStart: { x: n.clientX, y: n.clientY, offset: this.scrollPos } }), n.preventDefault(), n.stopPropagation();
    }, this._handleClick = (n) => {
      const i = n.currentTarget;
      if (!i)
        return;
      const r = i.getBoundingClientRect(), { type: o, clientSize: a, scrollSize: l } = this.props, c = (o === "horz" ? n.clientX - r.left : n.clientY - r.top) - this.barSize / 2;
      this.scroll(c * l / a), n.preventDefault();
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
    e && (vt(this, Kt, typeof e == "string" ? document : e.current), at(this, Kt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), at(this, Kt) && at(this, Kt).removeEventListener("wheel", this._handleWheel);
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
      bottom: c,
      right: u
    } = this.props, { maxScrollPos: h, scrollPos: p } = this, { dragStart: d } = this.state, _ = {
      left: a,
      top: l,
      bottom: c,
      right: u,
      ...o
    }, m = {};
    return n === "horz" ? (_.height = i, _.width = e, m.width = this.barSize, m.left = Math.round(Math.min(h, p) * (e - m.width) / h)) : (_.width = i, _.height = e, m.height = this.barSize, m.top = Math.round(Math.min(h, p) * (e - m.height) / h)), /* @__PURE__ */ g(
      "div",
      {
        className: k("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
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
const js = /* @__PURE__ */ new Map(), Bs = [];
function tl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && js.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  js.set(e, s), t != null && t.buildIn && !Bs.includes(e) && Bs.push(e);
}
function ot(s, t) {
  tl(s, t);
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
function el(s) {
  return js.delete(s);
}
function Au(s) {
  if (typeof s == "string") {
    const t = js.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function sl(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = Au(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && sl(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function Mu(s = [], t = !0) {
  if (t && Bs.length && s.unshift(...Bs), !(s != null && s.length))
    return [];
  const e = sl([], s, /* @__PURE__ */ new Set()), n = [], i = e.reduce((r, o, a) => {
    var l;
    return r.set(o.name, a * 1e3), (l = o.requireAfter) != null && l.length && n.push(o), r;
  }, /* @__PURE__ */ new Map());
  return n.length && (n.forEach((r) => {
    const o = r.requireAfter.reduce((a, l) => (i.has(l) && a.push(i.get(l)), a), []);
    o.length && i.set(r.name, Math.max(...o) + 1);
  }), e.sort((r, o) => i.get(r.name) - i.get(o.name))), e;
}
function nl() {
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
function Pu(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function so(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function In(s, t = !1, e = 0) {
  if (!s.list.length)
    return;
  if (t && s.widthSetting && (s.widthSetting = Math.min(s.widthSetting, s.width)), e && (!s.widthSetting || s.widthSetting > e) && s.width > e && (s.widthSetting = e), s.widthSetting && s.width !== s.widthSetting) {
    s.width = s.widthSetting;
    const i = s.width - s.totalWidth;
    if (!t && i > 0 || t && i !== 0) {
      const r = s.flexList.length ? s.flexList : s.list, o = r.reduce((a, l) => a + (l.flex || 1), 0);
      r.forEach((a) => {
        const l = Math[i < 0 ? "max" : "min"](i, Math.ceil(i * ((a.flex || 1) / o)));
        a.realWidth = a.width + l;
      });
    }
  }
  let n = 0;
  s.list.forEach((i, r) => {
    i.realWidth || (i.realWidth = i.width), i.left = n, i.sideIndex = r, n += i.realWidth;
  });
}
function no(s) {
  return s ? s === "left" ? "left" : "right" : "center";
}
function Iu(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = so(b, 0), b < 1 && (b = Math.round(b * n)), b), u = {
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
  }, p = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, d = {
    left: h,
    center: u,
    right: p
  }, _ = [], m = {};
  let v = !1;
  const y = [], w = {};
  if (e.forEach((b) => {
    const { colTypes: S, onAddCol: $ } = b;
    S && Object.entries(S).forEach(([A, N]) => {
      w[A] || (w[A] = []), w[A].push(N);
    }), $ && y.push($);
  }), t.cols.forEach((b, S) => {
    if (b.hidden)
      return;
    const { type: $ = "", name: A } = b, N = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: $
    }, E = {
      name: A,
      type: $,
      setting: N,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: S,
      side: no(N.fixed),
      sideIndex: 0,
      order: N.order,
      border: N.border
    }, T = w[$];
    T && T.forEach((K) => {
      const Y = typeof K == "function" ? K.call(s, N) : K;
      Y && Object.assign(N, Y, b);
    });
    const { flex: M, minWidth: R = r, maxWidth: H = o } = N, D = so(N.width || i, i);
    E.flex = M === !0 ? 1 : typeof M == "number" ? M : 0, E.width = Pu(D < 1 ? Math.round(D * n) : D, R, H), E.side = no(N.fixed), y.forEach((K) => K.call(s, E)), _.push(E), m[E.name] = E;
    const j = d[E.side];
    j.list.push(E), j.totalWidth += E.width, j.width = j.totalWidth, E.flex && j.flexList.push(E), typeof E.order == "number" && (v = !0);
  }), v) {
    const b = (S, $) => (S.order ?? S.index) - ($.order ?? $.index);
    _.sort(b), h.list.sort(b), u.list.sort(b), p.list.sort(b);
  }
  In(p, !0);
  const C = n - p.width - Math.max(40, r);
  return In(h, !0, C), u.widthSetting = n - h.width - p.width, In(u), {
    list: _,
    map: m,
    ...d
  };
}
function Ru(s) {
  var Y;
  const { col: t, className: e, height: n, row: i, onRenderCell: r, style: o, outerStyle: a, children: l, outerClass: c, width: u, left: h, top: p, ...d } = s, _ = {
    left: h ?? t.left,
    top: p ?? i.top,
    width: u ?? t.realWidth,
    height: n,
    ...a
  }, { align: m, cellStyle: v, cellClass: y, className: w } = t.setting, C = {
    justifyContent: m ? m === "left" ? "start" : m === "right" ? "end" : m : void 0,
    ...v,
    ...o
  }, { name: b, border: S } = t, $ = ["dtable-cell", c, e, w, {
    "has-border-left": S === !0 || S === "left",
    "has-border-right": S === !0 || S === "right"
  }], A = ["dtable-cell-content", y], N = (Y = i.data) == null ? void 0 : Y[b], E = [l ?? N ?? ""], T = r ? r(E, { row: i, col: t, value: N }, s, wt) : E, M = [], R = [], H = {}, D = {};
  let j = "div";
  T == null || T.forEach((P) => {
    if (typeof P == "object" && P && !ft(P) && ("html" in P || "className" in P || "style" in P || "attrs" in P || "children" in P || "tagName" in P)) {
      const St = P.outer ? M : R;
      P.html ? St.push(/* @__PURE__ */ g("div", { className: k("dtable-cell-html", P.className), style: P.style, dangerouslySetInnerHTML: { __html: P.html }, ...P.attrs ?? {} })) : (P.style && Object.assign(P.outer ? _ : C, P.style), P.className && (P.outer ? $ : A).push(P.className), P.children && St.push(P.children), P.attrs && Object.assign(P.outer ? H : D, P.attrs)), P.tagName && !P.outer && (j = P.tagName);
    } else
      R.push(P);
  });
  const K = j;
  return /* @__PURE__ */ g(
    "div",
    {
      className: k($),
      style: _,
      "data-col": b,
      "data-row": i.id,
      "data-type": t.type || null,
      ...d,
      ...H,
      children: [
        R.length > 0 && /* @__PURE__ */ g(K, { className: k(A), style: C, ...D, children: R }),
        M
      ]
    }
  );
}
function Rn({
  rows: s = [],
  cols: t,
  rowHeight: e,
  scrollLeft: n = 0,
  scrollTop: i = 0,
  left: r = 0,
  top: o = 0,
  width: a,
  height: l = "100%",
  className: c,
  CellComponent: u = Ru,
  cellClass: h,
  onRenderCell: p
}) {
  var v;
  const d = Array.isArray(s) ? s : [s], _ = ((v = d[0]) == null ? void 0 : v.top) ?? 0, m = d.length;
  return /* @__PURE__ */ g(
    "div",
    {
      className: k("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ g("div", { className: "dtable-cells-container", style: { left: -n, top: -i + _ }, children: d.reduce((y, w, C) => {
        const b = t.length;
        return t.forEach((S, $) => {
          y.push(
            /* @__PURE__ */ g(
              u,
              {
                className: k(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  $ ? "" : "is-first-in-row",
                  $ === b - 1 ? "is-last-in-row" : "",
                  C ? "" : "is-first-row",
                  C === m - 1 ? "is-last-row" : "",
                  h
                ),
                col: S,
                row: w,
                top: w.top - _,
                height: e,
                onRenderCell: p
              },
              `${w.index}:${S.name}`
            )
          );
        }), y;
      }, []) })
    }
  );
}
function il({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  cellClass: u,
  style: h,
  onRenderCell: p,
  children: d
}) {
  let _ = null;
  i.list.length && (_ = /* @__PURE__ */ g(
    Rn,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "left"
  ));
  let m = null;
  r.list.length && (m = /* @__PURE__ */ g(
    Rn,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "center"
  ));
  let v = null;
  return o.list.length && (v = /* @__PURE__ */ g(
    Rn,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      cellClass: u,
      onRenderCell: p
    },
    "right"
  )), /* @__PURE__ */ g(
    "div",
    {
      className: k("dtable-block", c),
      style: { ...h, top: s, height: t },
      children: [
        _,
        m,
        v,
        d
      ]
    }
  );
}
var rl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, q = (s, t, e) => (rl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), X = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ht = (s, t, e) => (rl(s, t, "access private method"), e), Vt, We, je, ei, ol, si, al, ni, ll, ii, cl, ks, ri, wn, Vs, oi, ai, li, ci, Be, Ts, Us, fr, pr, hl, hi, ul;
let gr = class extends W {
  constructor(t) {
    super(t), X(this, ei), X(this, si), X(this, ni), X(this, ii), X(this, ks), X(this, Be), X(this, Us), X(this, pr), X(this, hi), this.ref = G(), this._rafId = 0, this._needRender = !1, this._plugins = [], this._lastUsedPlugins = /* @__PURE__ */ new Map(), this._events = /* @__PURE__ */ new Map(), this._data = {}, this._i18nMaps = [], this._hover = { in: !1 }, this.updateLayout = () => {
      this._rafId && cancelAnimationFrame(this._rafId), this._rafId = requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), this._rafId = 0;
      });
    }, X(this, Vt, (e, n) => {
      n = n || e.type;
      const i = this._events.get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), X(this, We, (e) => {
      q(this, Vt).call(this, e, `window_${e.type}`);
    }), X(this, je, (e) => {
      q(this, Vt).call(this, e, `document_${e.type}`);
    }), X(this, wn, (e, n, i, r) => {
      const { row: o, col: a } = n;
      n.value = this.getCellValue(o, a), e[0] = n.value;
      const l = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return a.setting[l] && (e = a.setting[l].call(this, e, n, i, r)), this._plugins.forEach((c) => {
        c[l] && (e = c[l].call(this, e, n, i, r));
      }), this.options[l] && (e = this.options[l].call(this, e, n, i, r)), e;
    }), X(this, Vs, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), X(this, oi, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
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
    }), X(this, ai, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), X(this, li, (e) => {
      const n = f(e.target).closest(".dtable-cell");
      if (!n.length)
        return ht(this, Be, Ts).call(this, !1);
      ht(this, Be, Ts).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), X(this, ci, () => {
      ht(this, Be, Ts).call(this, !1);
    }), this._id = t.id ?? `dtable-${pt()}`, this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, this._allPlugins = Object.freeze(Mu(t.plugins)), this._allPlugins.forEach((e) => {
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([o, a]) => {
        typeof a == "function" && Object.assign(this, { [o]: a.bind(this) });
      }), i && Object.assign(this._data, i.call(this)), r && Object.assign(this.state, r.call(this));
    }), ht(this, Us, fr).call(this), this._plugins.forEach((e) => {
      var n;
      (n = e.onCreate) == null || n.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = this._layout) == null ? void 0 : t.options) || this._options || nl();
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
  componentDidMount() {
    this._needRender ? this.forceUpdate() : ht(this, ks, ri).call(this), this.on("click", q(this, oi)), this.on("keydown", q(this, ai));
    const { options: t } = this;
    (t.rowHover || t.colHover) && (this.on("mouseover", q(this, li)), this.on("mouseleave", q(this, ci)));
    let { responsive: e } = t;
    if (e) {
      e === !0 && (e = "window,parent");
      const n = e.split(",");
      if (typeof ResizeObserver < "u") {
        const i = [], r = new ResizeObserver(this.updateLayout);
        this._rob = r;
        const { parent: o } = this;
        n.forEach((a) => {
          a !== "window" && (a === "parent" ? o && r.observe(o) : a[0] === "~" ? i.push(a.slice(1)) : f(a).each((l, c) => r.observe(c)));
        }), i.length && this.on(i.join(" "), this.updateLayout);
      }
      n.includes("window") && this.on("window_resize", this.updateLayout);
    }
    this._checkPluginsState();
  }
  componentDidUpdate() {
    ht(this, ks, ri).call(this), this._checkPluginsState(), this._plugins.forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = this._rob) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of this._events.keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), q(this, We)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), q(this, je)) : t.removeEventListener(n, q(this, Vt));
    this._plugins.forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), this._allPlugins.forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), this._data = {}, this._events.clear(), this._noAnimation && clearTimeout(this._noAnimation);
  }
  resetState(t, e) {
    this._options = void 0, this._layout = void 0, t = t || this.props;
    const n = {};
    this._plugins.forEach((i) => {
      const { resetState: r, state: o } = i;
      r && (typeof r == "function" ? Object.assign(n, r.call(this, t)) : o && Object.assign(n, o.call(this)));
    }), Object.keys(n).length && this.setState(n);
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = this._events.get(t);
    i ? i.push(e) : (this._events.set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), q(this, We)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), q(this, je)) : (r = this.element) == null || r.addEventListener(t, q(this, Vt)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = this._events.get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (this._events.delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), q(this, We)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), q(this, je)) : (o = this.element) == null || o.removeEventListener(t, q(this, Vt)));
  }
  emitCustomEvent(t, e) {
    q(this, Vt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  disableAnimation(t = 200) {
    var e;
    this._noAnimation && clearTimeout(this._noAnimation), (e = this.element) == null || e.classList.add("no-animation"), this._noAnimation = window.setTimeout(() => {
      var n;
      this._noAnimation = void 0, (n = this.element) == null || n.classList.remove("no-animation");
    }, t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: u } = t;
    let { scrollLeft: h, scrollTop: p } = t;
    if (u === "up" || u === "down")
      p = i + (u === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (u === "left" || u === "right")
      h = n + (u === "right" ? 1 : -1) * c;
    else if (u === "top")
      p = 0;
    else if (u === "bottom")
      p = r - o;
    else if (u === "begin")
      h = 0;
    else if (u === "end")
      h = l - c;
    else {
      const { offsetLeft: _, offsetTop: m } = t;
      typeof _ == "number" && (h = n + _), typeof m == "number" && (p = i + m);
    }
    const d = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (d.scrollLeft = h)), typeof p == "number" && (p = Math.max(0, Math.min(p, r - o)), p !== i && (d.scrollTop = p)), Object.keys(d).length ? (this.setState(d, () => {
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
    if (!this._options)
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      this._layout = void 0;
    else if (n === "options") {
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
    const n = f(e).closest(".dtable-cell");
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
    return F(this._i18nMaps, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([r, o]) => {
        o && this.on(r, o);
      })), (i = e.onMounted) == null || i.call(this), this._lastUsedPlugins.set(e.name, e);
    }), t.size && t.forEach((e) => {
      var i;
      const n = this._lastUsedPlugins.get(e);
      (i = n == null ? void 0 : n.onUnmounted) == null || i.call(this), this._lastUsedPlugins.delete(e);
    });
  }
  render() {
    let t = ht(this, hi, ul).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: u, style: h } = this.options, p = { ...h }, d = ["dtable", e, {
      "dtable-hover-row": n,
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
        var w;
        const y = (w = v.beforeRender) == null ? void 0 : w.call(this, t);
        y && (t = y);
      }), p.width = t.width, p.height = t.height, p["--dtable-row-height"] = `${t.rowHeight}px`, p["--dtable-header-height"] = `${t.headerHeight}px`, d.push(
        t.className,
        m ? "dtable-is-empty" : "",
        {
          "dtable-has-scroll-y": t.rowsHeightTotal > t.rowsHeight,
          "dtable-scrolled-down": t.scrollTop > 0,
          "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
          "dtable-scrolled-right": t.scrollLeft > 0,
          "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
        }
      ), t.children && _.push(...t.children), m && u ? (delete p.height, _.push(
        /* @__PURE__ */ g("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ g(L, { content: u, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (_.push(
        ht(this, ei, ol).call(this, t),
        ht(this, si, al).call(this, t),
        ht(this, ni, ll).call(this, t)
      ), t.scrollable && _.push(ht(this, ii, cl).call(this, t))), this._plugins.forEach((v) => {
        var w;
        const y = (w = v.onRender) == null ? void 0 : w.call(this, t);
        y && (y.style && Object.assign(p, y.style), y.className && d.push(y.className), y.children && _.push(y.children));
      });
    }
    return /* @__PURE__ */ g(
      "div",
      {
        id: this._id,
        className: k(d),
        style: p,
        ref: this.ref,
        tabIndex: -1,
        children: _
      }
    );
  }
};
Vt = /* @__PURE__ */ new WeakMap();
We = /* @__PURE__ */ new WeakMap();
je = /* @__PURE__ */ new WeakMap();
ei = /* @__PURE__ */ new WeakSet();
ol = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ g(
      il,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        cellClass: "dtable-header-cell",
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: q(this, wn),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    ha,
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
si = /* @__PURE__ */ new WeakSet();
al = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ g(
    il,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: q(this, wn),
      children: l
    },
    "body"
  );
};
ni = /* @__PURE__ */ new WeakSet();
ll = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ g(
    ha,
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
ii = /* @__PURE__ */ new WeakSet();
cl = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: u } = s, { scrollbarSize: h = 12, horzScrollbarPos: p, vertScrollbarPos: d } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ g(
      eo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: q(this, Vs),
        left: n,
        bottom: (p === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: u + a } }),
    /* @__PURE__ */ g("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: u + a } })
  ), l > a && t.push(
    /* @__PURE__ */ g(
      eo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: q(this, Vs),
        right: d === "outside" ? -h : 0,
        size: h,
        top: u,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
ks = /* @__PURE__ */ new WeakSet();
ri = function() {
  var s;
  this._needRender = !1, this._plugins.forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  }), (s = this.options.afterRender) == null || s.call(this);
};
wn = /* @__PURE__ */ new WeakMap();
Vs = /* @__PURE__ */ new WeakMap();
oi = /* @__PURE__ */ new WeakMap();
ai = /* @__PURE__ */ new WeakMap();
li = /* @__PURE__ */ new WeakMap();
ci = /* @__PURE__ */ new WeakMap();
Be = /* @__PURE__ */ new WeakSet();
Ts = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = f(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = this._hover;
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), this._hover = i;
};
Us = /* @__PURE__ */ new WeakSet();
fr = function() {
  if (this._options)
    return !1;
  const t = { ...nl(), ...this._allPlugins.reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return this._options = t, this._plugins = this._allPlugins.reduce((e, n) => {
    const { options: i } = n;
    let r = t;
    return i && (r = Object.assign({ ...r }, typeof i == "function" ? i.call(this, t) : i)), r !== t && Object.assign(t, r), e.push(n), e;
  }, []).filter((e) => {
    const { when: n } = e;
    return !n || n.call(this, t);
  }), this._i18nMaps = [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean), !0;
};
pr = /* @__PURE__ */ new WeakSet();
hl = function() {
  var N, E;
  const { plugins: s } = this;
  let t = this._options;
  const e = {
    flex: /* @__PURE__ */ g("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ g("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((T) => {
    var R;
    const M = (R = T.beforeLayout) == null ? void 0 : R.call(this, t);
    M && (t = { ...t, ...M }), Object.assign(e, T.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: T } = this;
    if (T)
      i = T.clientWidth;
    else {
      this._needRender = !0;
      return;
    }
  }
  const r = Iu(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], u = (T, M, R) => {
    var D, j;
    const H = { data: R ?? { [a]: T }, id: T, index: c.length, top: 0 };
    if (R || (H.lazy = !0), c.push(H), ((D = t.onAddRow) == null ? void 0 : D.call(this, H, M)) !== !1) {
      for (const K of s)
        if (((j = K.onAddRow) == null ? void 0 : j.call(this, H, M)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let T = 0; T < o; T++)
      u(`${T}`, T);
  else
    Array.isArray(o) && o.forEach((T, M) => {
      typeof T == "object" ? u(`${T[a] ?? ""}`, M, T) : u(`${T ?? ""}`, M);
    });
  let h = c;
  const p = {};
  if (t.onAddRows) {
    const T = t.onAddRows.call(this, h, r);
    T && (h = T);
  }
  for (const T of s) {
    const M = (N = T.onAddRows) == null ? void 0 : N.call(this, h, r);
    M && (h = M);
  }
  h.forEach((T, M) => {
    p[T.id] = T, T.index = M, T.top = T.index * l;
  });
  const { header: d, footer: _ } = t, m = d ? t.headerHeight || l : 0, v = _ ? t.footerHeight || l : 0;
  let y = t.height, w = 0;
  const C = h.length * l, b = m + v + C;
  if (typeof y == "function" && (y = y.call(this, b)), y === "auto")
    w = b;
  else if (typeof y == "object")
    w = Math.min(y.max, Math.max(y.min, b));
  else if (y === "100%") {
    const { parent: T } = this;
    if (T)
      w = T.clientHeight;
    else {
      w = 0, this._needRender = !0;
      return;
    }
  } else
    w = y;
  const S = w - m - v, $ = {
    options: t,
    allRows: c,
    width: i,
    height: w,
    rows: h,
    rowsMap: p,
    rowHeight: l,
    rowsHeight: S,
    rowsHeightTotal: C,
    header: d,
    footer: _,
    footerGenerators: e,
    headerHeight: m,
    footerHeight: v,
    cols: r
  }, A = (E = t.onLayout) == null ? void 0 : E.call(this, $);
  A && Object.assign($, A), s.forEach((T) => {
    if (T.onLayout) {
      const M = T.onLayout.call(this, $);
      M && Object.assign($, M);
    }
  }), this._layout = $;
};
hi = /* @__PURE__ */ new WeakSet();
ul = function() {
  (ht(this, Us, fr).call(this) || !this._layout) && ht(this, pr, hl).call(this);
  const { layout: s } = this;
  if (!s)
    return;
  const { cols: { center: t } } = s;
  let { scrollLeft: e } = this.state;
  e = Math.min(Math.max(0, t.totalWidth - t.width), e);
  let n = 0;
  t.list.forEach((_) => {
    _.left = n, n += _.realWidth, _.visible = _.left + _.realWidth >= e && _.left <= e + t.width;
  });
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), u = l + r, h = Math.min(o.length, Math.ceil(u / a)), p = [], { rowDataGetter: d } = this.options;
  for (let _ = c; _ < h; _++) {
    const m = o[_];
    m.lazy && d && (m.data = d([m.id])[0], m.lazy = !1), p.push(m);
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
gr.addPlugin = tl;
gr.removePlugin = el;
function dl(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ g("a", { href: B(i, t.row.data), ...n, ...r, ...a, children: e });
}
function mr(s, t, e) {
  if (s == null)
    return;
  const n = t.row.data;
  return e = e ?? (n == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : B(s, { ...n, 0: e });
}
function fl(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), e === "0000-00-00 00:00:00" || e === "0000-00-00" ? n ?? "" : s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), Nt(e, s, n ?? e))) : n ?? e;
}
function pl(s, t) {
  const { link: e } = t.col.setting, n = dl(e, t, s[0]);
  return n && (s[0] = n), s;
}
function gl(s, t) {
  const { format: e, digits: n } = t.col.setting;
  let i = s[0];
  return typeof n == "number" && !Number.isNaN(Number(i)) && (i = Number(i), n >= 0 && (i = i.toFixed(n))), e && (i = mr(e, t, i)), s[0] = i, s;
}
function ml(s, t) {
  const { map: e, mapSplitter: n = ",", mapJoiner: i } = t.col.setting;
  if (e) {
    let r = s[0];
    typeof r == "string" && n && (r = r.split(n)), typeof e == "function" ? s[0] = e(r, t) : typeof e == "object" && (Array.isArray(r) || (r = [r]), s[0] = r.map((o) => e[o] ?? o).join(i ?? n));
  }
  return s;
}
function _l(s, t, e) {
  const n = {};
  return typeof s == "function" ? Object.assign(n, s(e)) : Object.keys(s).forEach((i) => {
    var o;
    const r = (o = e.row.data) == null ? void 0 : o[s[i]];
    r !== void 0 && (n[i] = r);
  }), Object.keys(n).length && t.push({ style: n }), t;
}
function yl(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = fl(n, t, s[0], i), s;
}
function ui(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : mr(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const Du = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return ui(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: u = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ g(
          fn,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || u,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ g(
          pn,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
            circleColor: u,
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
    const { formatDate: e, html: n, hint: i, styleMap: r } = t.col.setting;
    if (e && (s = yl(s, t, e)), s = ml(s, t), s = gl(s, t), n ? s = ui(s, t) : s = pl(s, t), i) {
      let o = t.value;
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" ? o = B(i, t.row.data) : typeof s[0] == "string" && (o = s[0]), s.push({ attrs: { title: o } });
    }
    return r && (s = _l(r, s, t)), s;
  }
}, Lu = ot(Du, { buildIn: !0 }), zu = {
  default: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return n === i ? 0 : n == null ? 1 : String(n).localeCompare(String(i));
  },
  date: (s, t, e) => {
    var r, o;
    const n = V(((r = s.data) == null ? void 0 : r[e.name]) ?? 0), i = V(((o = t.data) == null ? void 0 : o[e.name]) ?? 0);
    return n.getTime() - i.getTime();
  },
  number: (s, t, e) => {
    var r, o;
    const n = (r = s.data) == null ? void 0 : r[e.name], i = (o = t.data) == null ? void 0 : o[e.name];
    return Number.parseFloat(n) - Number.parseFloat(i);
  }
}, Ou = {
  name: "sort",
  defaultOptions: { sort: !0 },
  when: (s) => !!s.sort,
  onCreate() {
    const { sortBy: s } = this.options;
    s && (this.state.sortBy = Array.isArray(s) ? s : [s]);
  },
  onAddRows(s, t) {
    const { sortBy: e } = this.state;
    if (!e || !e.length)
      return;
    const { sort: n } = this.options, i = {
      ...zu,
      ...typeof n == "function" ? { default: n } : typeof n == "object" ? n : {}
    };
    return [...s].sort((r, o) => {
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
  onHeaderCellClick(s, t) {
    if (!s.target.closest(".dtable-sort-link"))
      return;
    const e = this.getColInfo(t.colName);
    if (!e || !e.setting.sort)
      return;
    const { sortBy: n = [] } = this.state, i = n.findIndex((a) => a.name === e.name), { multiSort: r } = this.options;
    let o = "asc";
    if (i >= 0) {
      const a = n[i].order;
      a === "asc" ? o = "desc" : a === "desc" && (o = "none"), r && n.splice(i, 1);
    }
    r || (n.length = 0), this.update({ dirtyType: "layout", state: { sortBy: [{ name: t.colName, order: o }, ...n].filter((a) => a.order !== "none") } });
  },
  onRenderHeaderCell(s, t) {
    var l;
    const { col: e } = t, { sortBy: n } = this.state;
    if (!e.setting.sort)
      return s;
    const o = ((l = n == null ? void 0 : n.find((c) => c.name === e.name)) == null ? void 0 : l.order) || "none", a = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${o}` });
    return s[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: "javascript:;", children: [
      s[0],
      a
    ] }), s.push(
      { outer: !0, attrs: { "data-sort": o } }
    ), s;
  }
}, Hu = ot(Ou, { buildIn: !0 }), Fu = {
  html: { component: ke }
}, Wu = {
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
        component: ke,
        props: { html: B(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(Fu[l], r == null ? void 0 : r[l]);
      const u = {};
      c.forEach((p) => {
        if (p) {
          const { props: d } = p;
          d && f.extend(u, typeof d == "function" ? d.call(this, t) : d), l = p.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ g(h, { ...u }) };
    }), s;
  }
}, ju = ot(Wu);
function Bu(s, t) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, { canRowCheckable: i, allowCheckDisabled: r } = this.options, o = (c, u) => {
    const h = i ? i.call(this, c) : !0;
    !h || !r && h === "disabled" || !!e[c] === u || (u ? e[c] = !0 : delete e[c], n[c] = u);
  };
  if (s === void 0 ? (t === void 0 && (t = !vl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !e[c]);
  })), Object.keys(n).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, n, e);
    c && Object.keys(c).forEach((u) => {
      const h = i ? i.call(this, u) : !0;
      !h || !r && h === "disabled" || (c[u] ? e[u] = !0 : delete e[u]);
    }), this.setState({ checkedRows: { ...e } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, n);
    });
  }
  return n;
}
function Vu(s) {
  return this.state.checkedRows[s] ?? !1;
}
function vl() {
  var i, r;
  const s = (i = this.layout) == null ? void 0 : i.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e, allowCheckDisabled: n } = this.options;
  return e ? t === ((r = this.layout) == null ? void 0 : r.allRows.reduce((o, a) => {
    const l = e ? e.call(this, a.id) : !0;
    return o + (!l || !n && l === "disabled" ? 0 : 1);
  }, 0)) : t === s;
}
function Uu() {
  var t;
  const s = new Set((t = this.layout) == null ? void 0 : t.allRows.map((e) => e.id));
  return Object.keys(this.state.checkedRows).filter((e) => s.has(e));
}
function Ku(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function io(s, t, e = !1, n = void 0) {
  return /* @__PURE__ */ g(un, { className: "dtable-checkbox", checked: s, disabled: e, label: n });
}
const ro = 'input[type="checkbox"],.dtable-checkbox', qu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: io
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
    toggleCheckRows: Bu,
    isRowChecked: Vu,
    isAllRowChecked: vl,
    getChecks: Uu,
    toggleCheckable: Ku
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
        /* @__PURE__ */ g("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: io(s, void 0, !1, this.options.checkboxLabel) })
      ];
    },
    checkedInfo(s, t) {
      const e = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [/* @__PURE__ */ g(L, { className: "dtable-check-info", content: n.call(this, e) })];
      const i = e.length, r = [];
      return i && r.push(this.i18n("checkedCountInfo", { selected: i })), r.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ g("div", { className: "dtable-check-info", children: r.join(", ") })
      ];
    }
  },
  onCreate() {
    const { checkedRows: s } = this.options;
    s && this.setState((t) => ({
      checkedRows: {
        ...t.checkedRows,
        ...s.reduce((e, n) => (e[n] = !0, e), {})
      }
    }));
  },
  onRenderCell(s, { row: t, col: e }) {
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const u = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
      s.push(
        u,
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
    if (this.data.disableCheckable)
      return;
    const t = s.target;
    if (!t)
      return;
    const e = t.closest(ro);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    if (this.data.disableCheckable)
      return;
    const e = f(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(ro).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
}, Gu = ot(qu), Yu = {
  name: "store",
  defaultOptions: {
    store: !0
  },
  when: (s) => !!s.store,
  data() {
    return { store: new ls(`DTable:${this.id}`) };
  }
}, Ju = ot(Yu);
var wl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(wl || {});
function Ks(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = t.children && this.state.nestedState[s];
  let n = !1, { parent: i } = t;
  for (; i; ) {
    const r = Ks.call(this, i);
    if (r.state !== "expanded") {
      n = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = n ? "hidden" : e ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ks.call(this, t.parent).level + 1 : 0, t;
}
function Zu(s) {
  return s !== void 0 ? Ks.call(this, s) : this.data.nestedMap;
}
function Xu(s, t) {
  let { nestedState: e } = this.state;
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !bl.call(this)), t) {
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
    state: { nestedState: { ...e } }
  }, () => {
    const { onNestedChange: i, preserveNested: r } = this.options;
    i == null || i.call(this), r && this.data.store.set("nestedState", e);
  });
}
function bl() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Cl(s, t = 1, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = Cl(s, t, o.children, n + 1)));
  }
  return t;
}
function Sl(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, Sl(s, r, e, n);
  }), i;
}
function xl(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && xl(s, r.parent, e, n, i);
}
const vs = "dtable-nested-toggle", Qu = {
  name: "nested",
  plugins: [Ju],
  requireAfter: ["sortable"],
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
      if (!this.options.checkable || !(s != null && s.length) || this.options.noNestedCheck)
        return;
      const n = {};
      return Object.entries(t).forEach(([i, r]) => {
        const o = Sl(this, i, r, n);
        o != null && o.parent && xl(this, o.parent, r, n, e);
      }), n;
    }
  },
  options(s) {
    return s.nested === "auto" && (s.nested = !!s.cols.some((t) => t.nestedToggle)), s;
  },
  when: (s) => !!s.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map(), nestedRowMap: /* @__PURE__ */ new Map() };
  },
  state() {
    return { nestedState: {} };
  },
  methods: {
    getNestedInfo: Zu,
    toggleRow: Xu,
    isAllCollapsed: bl,
    getNestedRowInfo: Ks
  },
  onCreate() {
    let { defaultNestedState: s } = this.options;
    if (this.options.preserveNested) {
      const t = this.data.store.get("nestedState");
      t && (s = t);
    }
    this.state.nestedState = s || {};
  },
  beforeLayout() {
    this.data.nestedMap.clear(), this.data.nestedRowMap.clear();
  },
  onAddRow(s) {
    this.data.nestedRowMap.set(s.id, s);
  },
  onAddRows(s) {
    const { nestedMap: t, nestedRowMap: e } = this.data;
    s.forEach((r) => {
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
    const n = /* @__PURE__ */ new Map(), i = s.length * 100;
    return s = s.filter((r) => {
      const o = this.getNestedRowInfo(r.id);
      return n.set(r.id, o), o.state !== "hidden";
    }), Cl(n), s.sort((r, o) => {
      const a = n.get(r.id), l = n.get(o.id);
      return ((a == null ? void 0 : a.order) ?? i + r.index) - ((l == null ? void 0 : l.order) ?? i + o.index);
    }), s;
  },
  onRenderCell(s, t) {
    var c;
    const { row: e, col: n } = t, { id: i, data: r } = e, { nestedToggle: o, childLabel: a } = n.setting, l = this.getNestedRowInfo(i);
    if (a) {
      const u = Number(r[this.options.nestedParentKey || "parent"]);
      if (!Number.isNaN(u) && u > 0) {
        let h;
        typeof a == "string" ? h = /* @__PURE__ */ g("span", { className: "dtable-child-label label rounded-full size-sm gray-pale", children: B(a, r) }) : h = /* @__PURE__ */ g(L, { className: "dtable-child-label", content: a, generatorThis: t }), s.unshift(h);
      }
    }
    if (o && (l.children || l.parent) && s.push(
      ((c = this.options.onRenderNestedToggle) == null ? void 0 : c.call(this, l, i, n, r)) ?? /* @__PURE__ */ g("a", { className: `${vs} state${l.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${l.state}` }
    ), l.level) {
      let { nestedIndent: u = o } = n.setting;
      u && (u === !0 && (u = this.options.nestedIndent ?? 12), s.push(/* @__PURE__ */ g("div", { className: "dtable-nested-indent", style: { width: u * l.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: t, col: e }) {
    var i;
    const { id: n } = t;
    return e.setting.nestedToggle && s.push(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, e, void 0)) ?? /* @__PURE__ */ g("a", { className: `${vs} state`, children: /* @__PURE__ */ g("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!(!t || !t.closest(`.${vs}`)))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(s, { rowID: t }) {
    const e = s.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(`.${vs}`)))
      return this.toggleRow(t), !0;
  }
}, td = ot(Qu);
function Dn(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarCodeKey: a, avatarNameKey: l = `${e.name}Name` } = e.setting;
  let { avatarProps: c = {} } = e.setting;
  typeof c == "function" && (c = c(e, t));
  const u = (n ? n[l] : i) || s[0], h = {
    size: "xs",
    src: n ? n[o] : void 0,
    text: u,
    code: a ? n ? n[a] : void 0 : i,
    ...c,
    className: k(r, c.className, "flex-none")
  };
  if (s[0] = /* @__PURE__ */ g(cn, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, d = typeof p == "function" ? p(e, t) : p;
    s[0] = /* @__PURE__ */ g("button", { type: "button", className: "btn btn-avatar", ...d, children: [
      s[0],
      /* @__PURE__ */ g("div", { children: u })
    ] });
  } else
    e.type === "avatarName" && (s[0] = /* @__PURE__ */ g("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ g("span", { children: u })
    ] }));
  return s;
}
const ed = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Dn
    },
    avatarBtn: {
      onRenderCell: Dn
    },
    avatarName: {
      onRenderCell: Dn
    }
  }
}, sd = ot(ed, { buildIn: !0 }), nd = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { setting: n } = e;
    let { sortType: i } = n;
    if (e.setting.sort !== void 0 || i === !1)
      return s;
    const { sortLink: r, orderBy: o } = this.options;
    if (o && o[e.name] !== void 0 && (i = o[e.name]), i) {
      const a = i === !0 ? "none" : i, l = /* @__PURE__ */ g("div", { className: `dtable-sort dtable-sort-${a}` });
      s.push(
        { outer: !0, attrs: { "data-sort": a } }
      );
      let { sortLink: c = r } = n;
      if (c) {
        const u = a === "asc" ? "desc" : "asc";
        typeof c == "function" && (c = c.call(this, e, u, a)), typeof c == "string" && (c = { url: c });
        const { url: h, ...p } = c;
        s[0] = /* @__PURE__ */ g("a", { className: "dtable-sort-link", href: B(h, { ...n, sortType: u }), ...p, children: [
          s[0],
          l
        ] });
      } else
        s.push(l);
    }
    return s;
  }
}, id = ot(nd, { buildIn: !0 }), Ln = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.border !== void 0 || t.setting.group === s[e - 1].setting.group || (t.border = "left");
  });
}, rd = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Ln(t.left.list), Ln(t.center.list), Ln(t.right.list);
  }
}, od = ot(rd);
const ad = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  data() {
    return { headerGroups: /* @__PURE__ */ new Map() };
  },
  when: (s) => !!s.headerGroup,
  beforeLayout(s) {
    const { headerGroups: t } = this.data;
    t.clear();
    const { cols: e } = s;
    if (!(e != null && e.length))
      return;
    const n = {};
    return e.forEach((i, r) => {
      const { headerGroup: o } = i;
      if (!o) {
        n[i.name] = r;
        return;
      }
      let a = t.get(o);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: r }, t.set(o, a)), n[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, r) => n[i.name] - n[r.name]), {
      headerHeight: !s.headerHeight && s.rowHeight ? s.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(s, { col: t }) {
    const { headerGroup: e } = t.setting;
    if (e) {
      const n = this.data.headerGroups.get(e), i = this.layout.headerHeight / 2;
      if (t.name === n.cols[0]) {
        const r = n.cols.reduce((a, l) => {
          var c;
          return a + (((c = this.getColInfo(l)) == null ? void 0 : c.realWidth) ?? 0);
        }, 0), o = {
          height: i - 1,
          width: r - 1
        };
        s.push(/* @__PURE__ */ g("div", { class: "dtable-header-group", style: o, children: e }));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return s;
  }
}, ld = ot(ad), cd = {
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
    const a = (l, c, u) => {
      const { index: h } = c;
      l.forEach((p, d) => {
        const { index: _ } = p, m = `C${_}R${h}`;
        if (n.has(m))
          return;
        const v = t.call(this, { row: c, col: p });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - d), w = Math.min(v.rowSpan || 1, i.length - u);
        if (y <= 1 && w <= 1)
          return;
        let C = 0;
        for (let b = 0; b < y; b++) {
          C += l[d + b].realWidth;
          for (let S = 0; S < w; S++) {
            const $ = `C${_ + b}R${h + S}`;
            $ !== m && n.add($);
          }
        }
        e.set(m, {
          colSpan: y,
          rowSpan: w,
          width: C,
          height: o * w
        });
      });
    };
    i.forEach((l, c) => {
      ["left", "center", "right"].forEach((u) => {
        a(r[u].list, l, c);
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
}, hd = ot(cd), ud = {
  name: "mousemove",
  events: {
    click(s) {
      this.data.ignoreNextClick && (s.preventDefault(), this.data.ignoreNextClick = void 0);
    },
    mousedown() {
      this.data.ignoreNextClick && clearTimeout(this.data.ignoreNextClick);
    },
    mousemove(s) {
      this.data.mmRafID && (cancelAnimationFrame(this.data.mmRafID), this.data.mmRafID = 0), this.data.mmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("mousemovesmooth", s);
      }), s.preventDefault();
    },
    document_mousemove(s) {
      this.data.dmmRafID && (cancelAnimationFrame(this.data.dmmRafID), this.data.dmmRafID = 0), this.data.dmmRafID = requestAnimationFrame(() => {
        this.emitCustomEvent("document_mousemovesmooth", s);
      });
    }
  },
  methods: {
    ignoreNextClick(s = 10) {
      this.data.ignoreNextClick = window.setTimeout(() => {
        this.data.ignoreNextClick = void 0;
      }, s);
    }
  }
}, kl = ot(ud);
function dd() {
  var C, b, S, $;
  const { scrollToMouse: s } = this.data;
  if (!s)
    return this.stopScrollToMouse();
  const { position: t, startTime: e, delay: n } = s;
  if (!t || Date.now() - e < n)
    return;
  const i = (b = (C = this.ref.current) == null ? void 0 : C.querySelector(".dtable-body")) == null ? void 0 : b.getBoundingClientRect();
  if (!i)
    return;
  const r = ($ = (S = this.ref.current) == null ? void 0 : S.querySelector(".dtable-scroll-center")) == null ? void 0 : $.getBoundingClientRect(), { maxStep: o, detectPadding: a, speed: l, side: c } = s, { x: u, y: h } = t, { top: p, bottom: d } = i, { left: _, right: m } = r || i;
  let v = 0;
  u < _ - a ? v = -Math.max(o, _ - a - u) : u > m - a && (v = Math.max(o, u - (m - a)));
  let y = 0;
  if (h < p - a ? y = -Math.max(o, p - a - h) : h > d - a && (y = Math.max(o, h - (d - a))), c) {
    const A = new Set((Array.isArray(c) ? c : [c]).reduce((N, E) => (E === "x" ? N.push("left", "right") : E === "y" ? N.push("top", "bottom") : N.push(E), N), []));
    (!A.has("left") && v < 0 || !A.has("right") && v > 0) && (v = 0), (!A.has("top") && y < 0 || !A.has("bottom") && y > 0) && (y = 0);
  }
  const w = {};
  v !== 0 && (w.scrollLeft = this.layout.scrollLeft + l * v), y !== 0 && (w.scrollTop = this.layout.scrollTop + l * y), this.scroll(w);
}
const fd = {
  name: "autoscroll",
  plugins: [kl],
  events: {
    document_mousemovesmooth(s) {
      if (!this.data.scrollToMouse)
        return;
      const { clientX: t, clientY: e } = s;
      this.data.scrollToMouse.position = { x: t, y: e };
    }
  },
  methods: {
    scrollTo({ col: s, row: t, extra: e = 2 }) {
      const n = this.getColInfo(s), i = this.getRowInfo(t);
      if (!n && !i)
        return !1;
      const r = {}, { layout: o } = this;
      if (n) {
        const { scrollLeft: a, cols: l } = o, c = n.left + n.realWidth;
        n.left < a ? r.scrollLeft = n.left - e : c > l.center.width + a && (r.scrollLeft = c - l.center.width + e);
      }
      if (i) {
        const { scrollTop: a, rowHeight: l, rowsHeight: c } = o, u = i.top + l;
        i.top < a ? r.scrollTop = i.top - e : u > c + a && (r.scrollTop = u - c + e);
      }
      return this.scroll(r), !0;
    },
    startScrollToMouse(s) {
      const t = {
        interval: 60,
        speed: 0.5,
        delay: 200,
        maxStep: this.options.rowHeight,
        onlyInside: !1,
        detectPadding: 30,
        startTime: Date.now(),
        ...s
      };
      this.data.scrollToMouse = t, clearInterval(this.data.scrollToTimer), this.data.scrollToTimer = window.setInterval(dd.bind(this), t.interval);
    },
    stopScrollToMouse() {
      clearInterval(this.data.scrollToTimer), this.data.scrollToMouse = void 0;
    }
  },
  onUnmounted() {
    clearInterval(this.data.scrollToTimer);
  }
}, pd = ot(fd);
const gd = {
  name: "sortable",
  defaultOptions: {
    sortable: !0
  },
  when: (s) => !!s.sortable,
  plugins: [kl, pd],
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
    click(s) {
      s.target.closest(".dtable-sort-link") && (this.state.rowOrders = void 0);
    },
    mousedown(s) {
      var a;
      if (this.data.disableSortable)
        return;
      const { sortHandler: t = ".dtable-cell" } = this.options;
      if (!f(s.target).closest(t).length)
        return;
      const i = this.getPointerInfo(s);
      if (!i || i.rowID === "HEADER")
        return;
      const r = this.getRowInfo(i.rowID);
      if (!r || ((a = this.options.onSortStart) == null ? void 0 : a.call(this, r, s)) === !1)
        return;
      s.preventDefault();
      const o = s.clientY;
      this.data.sortableInfo = { from: r, offset: o - i.cellElement.getBoundingClientRect().top, startMouseY: o, lastMouseY: o };
    },
    document_mouseup(s) {
      var n;
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      this.stopScrollToMouse();
      const e = this.getSortingState(s);
      if (e) {
        let i, r;
        const { sortingFrom: o, sortingTo: a, sortingSide: l } = e;
        if (a && l) {
          const c = this.layout.rows.map((d) => d.id), u = [...c], h = o.index, p = a.index;
          if (!(h === p + 1 && l === "after") && !(h === p - 1 && l === "before")) {
            const d = c.splice(h, 1);
            c.splice(p, 0, d[0]), i = {}, r = [], c.forEach((_, m) => {
              i[_] = m, r.push(_);
            }), (u.join() === r.join() || ((n = this.options.onSort) == null ? void 0 : n.call(this, o, a, l, r)) === !1) && (i = void 0, r = void 0);
          }
        }
        (a || Math.abs(t.lastMouseY - t.startMouseY) > 4) && this.ignoreNextClick(), this.disableAnimation(), this.update({
          dirtyType: "layout",
          state: (c) => f.extend({
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
    document_mousemovesmooth(s) {
      const { sortableInfo: t } = this.data;
      if (!t)
        return;
      const e = this.getSortingState(s);
      e && (t.state || (this.startScrollToMouse({ side: "y" }), this.data.disableCheckable = !0), t.lastMouseY = s.clientY, t.state = e, this.setState(e));
    }
  },
  methods: {
    getSortingState(s) {
      var $;
      const { disableSortable: t, sortableInfo: e } = this.data;
      if (t || !e)
        return;
      const { headerHeight: n, footerHeight: i, visibleRows: r, scrollTop: o, rowHeight: a } = this.layout, l = this.element.getBoundingClientRect(), c = l.width, u = l.height - n - i, h = s.clientX - l.left, p = s.clientY - l.top - n;
      if (h < 0 || h > c || p < 0 || p > u)
        return e.state;
      const d = p + o, _ = r.find((A) => A.top <= d && A.top + a > d);
      if (!_)
        return e.state;
      const m = e.from, v = _.id !== m.id ? _.id : void 0, y = v ? this.getRowInfo(v) : void 0, w = p, C = d < _.top + a / 2 ? "before" : "after";
      return y && (($ = this.options.canSortTo) == null ? void 0 : $.call(this, m, y, C)) !== !1 ? {
        sortingFrom: m,
        sortingPos: w,
        sortingTo: y,
        sortingSide: C
      } : {
        sortingFrom: m,
        sortingPos: w,
        sortingTo: void 0,
        sortingSide: void 0
      };
    }
  },
  onAddRows(s) {
    const { rowOrders: t } = this.state;
    if (!t)
      return;
    const e = s.length * 100;
    return s = s.sort((n, i) => {
      const r = t[n.id] ?? e + n.index, o = t[i.id] ?? e + i.index;
      return r - o;
    }), s;
  },
  beforeRender(s) {
    const { sortingFrom: t } = this.state, { visibleRows: e } = s;
    t && (e.some((n) => n.id === t.id) || (s.visibleRows = [...e, t]), s.className = k(s.className, "dtable-sorting"));
  },
  onRenderCell(s, t, e) {
    const { sortingFrom: n, sortingPos: i, sortingTo: r, sortingSide: o } = this.state;
    if (!n)
      return s;
    const a = t.row, l = {}, c = [];
    if (n.id === a.id)
      l.top = i - this.data.sortableInfo.offset + ((e.top ?? a.top) - (a.top - this.layout.scrollTop)), c.push("is-sorting-from");
    else if (r) {
      const u = r.id === a.id;
      u && c.push(`text-primary is-sorting-to is-sorting-to-${o}`), n.index > a.index && (u && o === "before" || a.index > r.index) ? c.push("is-sorting-before") : n.index < a.index && (u && o === "after" || a.index < r.index) && c.push("is-sorting-after");
    }
    return c.length && s.push({
      outer: !0,
      style: l,
      className: c
    }), s;
  }
}, md = ot(gd), _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: wl,
  avatar: sd,
  cellspan: hd,
  checkable: Gu,
  custom: ju,
  group: od,
  headerGroup: ld,
  nested: td,
  renderDatetime: fl,
  renderDatetimeCell: yl,
  renderFormat: mr,
  renderFormatCell: gl,
  renderHtmlCell: ui,
  renderLink: dl,
  renderLinkCell: pl,
  renderMapCell: ml,
  renderStyleMapCell: _l,
  rich: Lu,
  sort: Hu,
  sortType: id,
  sortable: md
}, Symbol.toStringTag, { value: "Module" }));
class fs extends U {
  setOptions(t, e) {
    return t = super.setOptions(t, e), t.parent || (t.parent = this.element), t;
  }
}
fs.NAME = "DTable";
fs.Component = gr;
fs.definePlugin = ot;
fs.removePlugin = el;
fs.plugins = _d;
const yd = "nav", zn = '[data-toggle="tab"]', vd = "active";
class qs extends yt {
  constructor() {
    super(...arguments), this._timer = 0;
  }
  active(t) {
    const e = this.$element, n = e.find(zn);
    let i = t ? f(t).closest(zn) : n.filter(`.${vd}`);
    if (!i.length && (i = e.find(zn).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = f(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), this._timer && clearTimeout(this._timer), this._timer = setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), this._timer = 0;
    }, 10));
  }
}
qs.NAME = "Tabs";
qs.toggle = {
  name: "tab",
  handler(s, t) {
    const e = f(s), n = e.closest(`.${yd}`);
    n.length && qs.ensure(n, t).active(e);
  }
};
qs.register();
export {
  f as $,
  $o as Ajax,
  ma as Avatar,
  Cd as BUILD,
  _a as BtnGroup,
  Ac as Bus,
  Pa as ColorPicker,
  ln as CommonList,
  yt as Component,
  U as ComponentFromReact,
  As as Computed,
  L as CustomContent,
  ha as CustomRender,
  fs as DTable,
  Xi as DatePicker,
  Qi as DatetimePicker,
  ae as Dropdown,
  nr as FileSelector,
  Q as HElement,
  ih as HElementSignals,
  ke as HtmlContent,
  st as Icon,
  ir as ImageSelector,
  Di as Menu,
  Dd as Messager,
  Ws as Modal,
  Xe as ModalBase,
  Ke as ModalTrigger,
  Ua as Nav,
  Ja as Pager,
  lr as Pick,
  hr as Picker,
  ua as Portal,
  Hi as ProgressCircle,
  W as ReactComponent,
  ur as SearchBox,
  Li as SearchMenu,
  nt as Signal,
  Bc as Sticky,
  Ze as TIME_DAY,
  qs as Tabs,
  Zi as TimePicker,
  Qa as Toolbar,
  dr as Tooltip,
  bd as VERSION,
  hu as addDate,
  Xc as batch,
  Yo as bindCommands,
  jo as bindHotkeys,
  Wt as bus,
  f as cash,
  k as classes,
  xd as clearData,
  Qc as computed,
  ps as convertBytes,
  Ko as create,
  V as createDate,
  vc as createFormData,
  lh as createPortal,
  G as createRef,
  ko as deepGet,
  pc as deepGetPath,
  $d as defineFn,
  Ms as delay,
  $c as disableScroll,
  Nd as dom,
  Ar as downloadFile,
  Ri as effect,
  Lc as enterFullscreen,
  xe as evalValue,
  xi as fetchData,
  Dt as formatBytes,
  Nt as formatDate,
  Vd as formatDateSpan,
  B as formatString,
  No as getClassList,
  rn as getComponent,
  Mi as getFullscreenElement,
  Wo as getHotkeysMap,
  nh as getReactComponent,
  ph as getUniqueCode,
  Ge as getZData,
  wt as h,
  Td as hotkeys,
  F as i18n,
  qo as initGlobalComponents,
  Hn as isDiff,
  Sd as isFetchSetting,
  oe as isSameDay,
  Ia as isSameMonth,
  Fd as isSameWeek,
  Qn as isSameYear,
  Wd as isToday,
  Bd as isTomorrow,
  Ra as isValidDate,
  ft as isValidElement,
  jd as isYesterday,
  z as mergeProps,
  pt as nextGid,
  kd as parseRawData,
  Ai as parseSize,
  ca as reactComponents,
  Oc as registerComponent,
  Ec as registerGlobalListener,
  lt as registerReactComponent,
  zo as removeUndefinedProps,
  be as render,
  Gn as renderCustomContent,
  oh as renderCustomResult,
  kr as setZData,
  bc as shareData,
  Pi as signal,
  Yn as store,
  ki as storeData,
  Ti as takeData,
  Gt as toCssSize,
  Vo as toggleFullscreen,
  Uc as unbindCommands,
  Bo as unbindHotkeys,
  Ed as untracked
};
//# sourceMappingURL=zui.esm.js.map
