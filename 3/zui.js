var ui = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var D = (s, t, e) => (ui(s, t, "read from private field"), e ? e.call(s) : t.get(s)), F = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, U = (s, t, e, n) => (ui(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var Re = (s, t, e) => (ui(s, t, "access private method"), e);
const Xt = document, wn = window, ia = Xt.documentElement, Pe = Xt.createElement.bind(Xt), ra = Pe("div"), fi = Pe("table"), Dc = Pe("tbody"), uo = Pe("tr"), { isArray: Un, prototype: oa } = Array, { concat: Lc, filter: fr, indexOf: aa, map: la, push: Rc, slice: ca, some: pr, splice: zc } = oa, Wc = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Oc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Hc = /<.+>/, Bc = /^\w+$/;
function mr(s, t) {
  const e = Fc(t);
  return !s || !e && !Ee(t) && !st(t) ? [] : !e && Oc.test(s) ? t.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !e && Bc.test(s) ? t.getElementsByTagName(s) : t.querySelectorAll(s);
}
class jn {
  constructor(t, e) {
    if (!t)
      return;
    if (Ti(t))
      return t;
    let n = t;
    if (ht(t)) {
      const i = e || Xt;
      if (n = Wc.test(t) && Ee(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Hc.test(t) ? ua(t) : Ti(i) ? i.find(t) : ht(i) ? u(i).find(t) : mr(t, i), !n)
        return;
    } else if (De(t))
      return this.ready(t);
    (n.nodeType || n === wn) && (n = [n]), this.length = n.length;
    for (let i = 0, r = this.length; i < r; i++)
      this[i] = n[i];
  }
  init(t, e) {
    return new jn(t, e);
  }
}
const S = jn.prototype, u = S.init;
u.fn = u.prototype = S;
S.length = 0;
S.splice = zc;
typeof Symbol == "function" && (S[Symbol.iterator] = oa[Symbol.iterator]);
function Ti(s) {
  return s instanceof jn;
}
function Xe(s) {
  return !!s && s === s.window;
}
function Ee(s) {
  return !!s && s.nodeType === 9;
}
function Fc(s) {
  return !!s && s.nodeType === 11;
}
function st(s) {
  return !!s && s.nodeType === 1;
}
function Vc(s) {
  return !!s && s.nodeType === 3;
}
function Uc(s) {
  return typeof s == "boolean";
}
function De(s) {
  return typeof s == "function";
}
function ht(s) {
  return typeof s == "string";
}
function wt(s) {
  return s === void 0;
}
function bs(s) {
  return s === null;
}
function ha(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function gr(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const t = Object.getPrototypeOf(s);
  return t === null || t === Object.prototype;
}
u.isWindow = Xe;
u.isFunction = De;
u.isArray = Un;
u.isNumeric = ha;
u.isPlainObject = gr;
function it(s, t, e) {
  if (e) {
    let n = s.length;
    for (; n--; )
      if (t.call(s[n], n, s[n]) === !1)
        return s;
  } else if (gr(s)) {
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
u.each = it;
S.each = function(s) {
  return it(this, s);
};
S.empty = function() {
  return this.each((s, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function Cn(...s) {
  const t = Uc(s[0]) ? s.shift() : !1, e = s.shift(), n = s.length;
  if (!e)
    return {};
  if (!n)
    return Cn(t, u, e);
  for (let i = 0; i < n; i++) {
    const r = s[i];
    for (const o in r)
      t && (Un(r[o]) || gr(r[o])) ? ((!e[o] || e[o].constructor !== r[o].constructor) && (e[o] = new r[o].constructor()), Cn(t, e[o], r[o])) : e[o] = r[o];
  }
  return e;
}
u.extend = Cn;
S.extend = function(s) {
  return Cn(S, s);
};
const jc = /\S+/g;
function Kn(s) {
  return ht(s) ? s.match(jc) || [] : [];
}
S.toggleClass = function(s, t) {
  const e = Kn(s), n = !wt(t);
  return this.each((i, r) => {
    st(r) && it(e, (o, a) => {
      n ? t ? r.classList.add(a) : r.classList.remove(a) : r.classList.toggle(a);
    });
  });
};
S.addClass = function(s) {
  return this.toggleClass(s, !0);
};
S.removeAttr = function(s) {
  const t = Kn(s);
  return this.each((e, n) => {
    st(n) && it(t, (i, r) => {
      n.removeAttribute(r);
    });
  });
};
function Kc(s, t) {
  if (s) {
    if (ht(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !st(this[0]))
          return;
        const e = this[0].getAttribute(s);
        return bs(e) ? void 0 : e;
      }
      return wt(t) ? this : bs(t) ? this.removeAttr(s) : this.each((e, n) => {
        st(n) && n.setAttribute(s, t);
      });
    }
    for (const e in s)
      this.attr(e, s[e]);
    return this;
  }
}
S.attr = Kc;
S.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
S.hasClass = function(s) {
  return !!s && pr.call(this, (t) => st(t) && t.classList.contains(s));
};
S.get = function(s) {
  return wt(s) ? ca.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
S.eq = function(s) {
  return u(this.get(s));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function qc(s) {
  return wt(s) ? this.get().map((t) => st(t) || Vc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    st(e) && (e.textContent = s);
  });
}
S.text = qc;
function Zt(s, t, e) {
  if (!st(s))
    return;
  const n = wn.getComputedStyle(s, null);
  return e ? n.getPropertyValue(t) || void 0 : n[t] || s.style[t];
}
function Rt(s, t) {
  return parseInt(Zt(s, t), 10) || 0;
}
function fo(s, t) {
  return Rt(s, `border${t ? "Left" : "Top"}Width`) + Rt(s, `padding${t ? "Left" : "Top"}`) + Rt(s, `padding${t ? "Right" : "Bottom"}`) + Rt(s, `border${t ? "Right" : "Bottom"}Width`);
}
const pi = {};
function Gc(s) {
  if (pi[s])
    return pi[s];
  const t = Pe(s);
  Xt.body.insertBefore(t, null);
  const e = Zt(t, "display");
  return Xt.body.removeChild(t), pi[s] = e !== "none" ? e : "block";
}
function po(s) {
  return Zt(s, "display") === "none";
}
function da(s, t) {
  const e = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!e && !!t && e.call(s, t);
}
function qn(s) {
  return ht(s) ? (t, e) => da(e, s) : De(s) ? s : Ti(s) ? (t, e) => s.is(e) : s ? (t, e) => e === s : () => !1;
}
S.filter = function(s) {
  const t = qn(s);
  return u(fr.call(this, (e, n) => t.call(e, n, e)));
};
function fe(s, t) {
  return t ? s.filter(t) : s;
}
S.detach = function(s) {
  return fe(this, s).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const Yc = /^\s*<(\w+)[^>]*>/, Xc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, mo = {
  "*": ra,
  tr: Dc,
  td: uo,
  th: uo,
  thead: fi,
  tbody: fi,
  tfoot: fi
};
function ua(s) {
  if (!ht(s))
    return [];
  if (Xc.test(s))
    return [Pe(RegExp.$1)];
  const t = Yc.test(s) && RegExp.$1, e = mo[t] || mo["*"];
  return e.innerHTML = s, u(e.childNodes).detach().get();
}
u.parseHTML = ua;
S.has = function(s) {
  const t = ht(s) ? (e, n) => mr(s, n).length : (e, n) => n.contains(s);
  return this.filter(t);
};
S.not = function(s) {
  const t = qn(s);
  return this.filter((e, n) => (!ht(s) || st(n)) && !t.call(n, e, n));
};
function Qt(s, t, e, n) {
  const i = [], r = De(t), o = n && qn(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (r) {
      const c = t(s[a]);
      c.length && Rc.apply(i, c);
    } else {
      let c = s[a][t];
      for (; c != null && !(n && o(-1, c)); )
        i.push(c), c = e ? c[t] : null;
    }
  return i;
}
function fa(s) {
  return s.multiple && s.options ? Qt(fr.call(s.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : s.value || "";
}
function Zc(s) {
  return arguments.length ? this.each((t, e) => {
    const n = e.multiple && e.options;
    if (n || wa.test(e.type)) {
      const i = Un(s) ? la.call(s, String) : bs(s) ? [] : [String(s)];
      n ? it(e.options, (r, o) => {
        o.selected = i.indexOf(o.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = wt(s) || bs(s) ? "" : s;
  }) : this[0] && fa(this[0]);
}
S.val = Zc;
S.is = function(s) {
  const t = qn(s);
  return pr.call(this, (e, n) => t.call(e, n, e));
};
u.guid = 1;
function Ht(s) {
  return s.length > 1 ? fr.call(s, (t, e, n) => aa.call(n, t) === e) : s;
}
u.unique = Ht;
S.add = function(s, t) {
  return u(Ht(this.get().concat(u(s, t).get())));
};
S.children = function(s) {
  return fe(u(Ht(Qt(this, (t) => t.children))), s);
};
S.parent = function(s) {
  return fe(u(Ht(Qt(this, "parentNode"))), s);
};
S.index = function(s) {
  const t = s ? u(s)[0] : this[0], e = s ? this : u(t).parent().children();
  return aa.call(e, t);
};
S.closest = function(s) {
  const t = this.filter(s);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(s) : t;
};
S.siblings = function(s) {
  return fe(u(Ht(Qt(this, (t) => u(t).parent().children().not(t)))), s);
};
S.find = function(s) {
  return u(Ht(Qt(this, (t) => mr(s, t))));
};
const Jc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qc = /^$|^module$|\/(java|ecma)script/i, th = ["type", "src", "nonce", "noModule"];
function eh(s, t) {
  const e = u(s);
  e.filter("script").add(e.find("script")).each((n, i) => {
    if (Qc.test(i.type) && ia.contains(i)) {
      const r = Pe("script");
      r.text = i.textContent.replace(Jc, ""), it(th, (o, a) => {
        i[a] && (r[a] = i[a]);
      }), t.head.insertBefore(r, null), t.head.removeChild(r);
    }
  });
}
function sh(s, t, e, n, i) {
  n ? s.insertBefore(t, e ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(t, s) : s.parentNode.insertBefore(t, e ? s : s.nextSibling), i && eh(t, s.ownerDocument);
}
function pe(s, t, e, n, i, r, o, a) {
  return it(s, (l, c) => {
    it(u(c), (d, h) => {
      it(u(t), (m, p) => {
        const g = e ? h : p, _ = e ? p : h, v = e ? d : m;
        sh(g, v ? _.cloneNode(!0) : _, n, i, !v);
      }, a);
    }, o);
  }, r), t;
}
S.after = function() {
  return pe(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return pe(arguments, this, !1, !1, !0);
};
function nh(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (wt(s))
    return this;
  const t = /<script[\s>]/.test(s);
  return this.each((e, n) => {
    st(n) && (t ? u(n).empty().append(s) : n.innerHTML = s);
  });
}
S.html = nh;
S.appendTo = function(s) {
  return pe(arguments, this, !0, !1, !0);
};
S.wrapInner = function(s) {
  return this.each((t, e) => {
    const n = u(e), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
S.before = function() {
  return pe(arguments, this, !1, !0);
};
S.wrapAll = function(s) {
  let t = u(s), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
S.wrap = function(s) {
  return this.each((t, e) => {
    const n = u(s)[0];
    u(e).wrapAll(t ? n.cloneNode(!0) : n);
  });
};
S.insertAfter = function(s) {
  return pe(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(s) {
  return pe(arguments, this, !0, !0);
};
S.prepend = function() {
  return pe(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(s) {
  return pe(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return u(Ht(Qt(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
S.next = function(s, t, e) {
  return fe(u(Ht(Qt(this, "nextElementSibling", t, e))), s);
};
S.nextAll = function(s) {
  return this.next(s, !0);
};
S.nextUntil = function(s, t) {
  return this.next(t, !0, s);
};
S.parents = function(s, t) {
  return fe(u(Ht(Qt(this, "parentElement", !0, t))), s);
};
S.parentsUntil = function(s, t) {
  return this.parents(t, s);
};
S.prev = function(s, t, e) {
  return fe(u(Ht(Qt(this, "previousElementSibling", t, e))), s);
};
S.prevAll = function(s) {
  return this.prev(s, !0);
};
S.prevUntil = function(s, t) {
  return this.prev(t, !0, s);
};
S.map = function(s) {
  return u(Lc.apply([], la.call(this, (t, e) => s.call(t, e, t))));
};
S.clone = function() {
  return this.map((s, t) => t.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((s, t) => {
    let e = t.offsetParent;
    for (; e && Zt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || ia;
  });
};
S.slice = function(s, t) {
  return u(ca.call(this, s, t));
};
const ih = /-([a-z])/g;
function _r(s) {
  return s.replace(ih, (t, e) => e.toUpperCase());
}
S.ready = function(s) {
  const t = () => setTimeout(s, 0, u);
  return Xt.readyState !== "loading" ? t() : Xt.addEventListener("DOMContentLoaded", t), this;
};
S.unwrap = function() {
  return this.parent().each((s, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
S.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const t = s.getBoundingClientRect();
  return {
    top: t.top + wn.pageYOffset,
    left: t.left + wn.pageXOffset
  };
};
S.position = function() {
  const s = this[0];
  if (!s)
    return;
  const t = Zt(s, "position") === "fixed", e = t ? s.getBoundingClientRect() : this.offset();
  if (!t) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Zt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && st(i)) {
      const r = u(i).offset();
      e.top -= r.top + Rt(i, "borderTopWidth"), e.left -= r.left + Rt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - Rt(s, "marginTop"),
    left: e.left - Rt(s, "marginLeft")
  };
};
const pa = {
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
S.prop = function(s, t) {
  if (s) {
    if (ht(s))
      return s = pa[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((e, n) => {
        n[s] = t;
      });
    for (const e in s)
      this.prop(e, s[e]);
    return this;
  }
};
S.removeProp = function(s) {
  return this.each((t, e) => {
    delete e[pa[s] || s];
  });
};
const rh = /^--/;
function yr(s) {
  return rh.test(s);
}
const mi = {}, { style: oh } = ra, ah = ["webkit", "moz", "ms"];
function lh(s, t = yr(s)) {
  if (t)
    return s;
  if (!mi[s]) {
    const e = _r(s), n = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${ah.join(`${n} `)}${n}`.split(" ");
    it(i, (r, o) => {
      if (o in oh)
        return mi[s] = o, !1;
    });
  }
  return mi[s];
}
const ch = {
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
function ma(s, t, e = yr(s)) {
  return !e && !ch[s] && ha(t) ? `${t}px` : t;
}
function hh(s, t) {
  if (ht(s)) {
    const e = yr(s);
    return s = lh(s, e), arguments.length < 2 ? this[0] && Zt(this[0], s, e) : s ? (t = ma(s, t, e), this.each((n, i) => {
      st(i) && (e ? i.style.setProperty(s, t) : i.style[s] = t);
    })) : this;
  }
  for (const e in s)
    this.css(e, s[e]);
  return this;
}
S.css = hh;
function ga(s, t) {
  try {
    return s(t);
  } catch {
    return t;
  }
}
const dh = /^\s+|\s+$/;
function go(s, t) {
  const e = s.dataset[t] || s.dataset[_r(t)];
  return dh.test(e) ? e : ga(JSON.parse, e);
}
function uh(s, t, e) {
  e = ga(JSON.stringify, e), s.dataset[_r(t)] = e;
}
function fh(s, t) {
  if (!s) {
    if (!this[0])
      return;
    const e = {};
    for (const n in this[0].dataset)
      e[n] = go(this[0], n);
    return e;
  }
  if (ht(s))
    return arguments.length < 2 ? this[0] && go(this[0], s) : wt(t) ? this : this.each((e, n) => {
      uh(n, s, t);
    });
  for (const e in s)
    this.data(e, s[e]);
  return this;
}
S.data = fh;
function _a(s, t) {
  const e = s.documentElement;
  return Math.max(s.body[`scroll${t}`], e[`scroll${t}`], s.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
it([!0, !1], (s, t) => {
  it(["Width", "Height"], (e, n) => {
    const i = `${t ? "outer" : "inner"}${n}`;
    S[i] = function(r) {
      if (this[0])
        return Xe(this[0]) ? t ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : Ee(this[0]) ? _a(this[0], n) : this[0][`${t ? "offset" : "client"}${n}`] + (r && t ? Rt(this[0], `margin${e ? "Top" : "Left"}`) + Rt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
it(["Width", "Height"], (s, t) => {
  const e = t.toLowerCase();
  S[e] = function(n) {
    if (!this[0])
      return wt(n) ? void 0 : this;
    if (!arguments.length)
      return Xe(this[0]) ? this[0].document.documentElement[`client${t}`] : Ee(this[0]) ? _a(this[0], t) : this[0].getBoundingClientRect()[e] - fo(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((r, o) => {
      if (!st(o))
        return;
      const a = Zt(o, "boxSizing");
      o.style[e] = ma(e, i + (a === "border-box" ? fo(o, !s) : 0));
    });
  };
});
const _o = "___cd";
S.toggle = function(s) {
  return this.each((t, e) => {
    if (!st(e))
      return;
    const n = po(e);
    (wt(s) ? n : s) ? (e.style.display = e[_o] || "", po(e) && (e.style.display = Gc(e.tagName))) : n || (e[_o] = Zt(e, "display"), e.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const yo = "___ce", vr = ".", br = { focus: "focusin", blur: "focusout" }, ya = { mouseenter: "mouseover", mouseleave: "mouseout" }, ph = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function wr(s) {
  return ya[s] || br[s] || s;
}
function Cr(s) {
  const t = s.split(vr);
  return [t[0], t.slice(1).sort()];
}
S.trigger = function(s, t) {
  if (ht(s)) {
    const [n, i] = Cr(s), r = wr(n);
    if (!r)
      return this;
    const o = ph.test(r) ? "MouseEvents" : "HTMLEvents";
    s = Xt.createEvent(o), s.initEvent(r, !0, !0), s.namespace = i.join(vr), s.___ot = n;
  }
  s.___td = t;
  const e = s.___ot in br;
  return this.each((n, i) => {
    e && De(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function va(s) {
  return s[yo] = s[yo] || {};
}
function mh(s, t, e, n, i) {
  const r = va(s);
  r[t] = r[t] || [], r[t].push([e, n, i]), s.addEventListener(t, i);
}
function ba(s, t) {
  return !t || !pr.call(t, (e) => s.indexOf(e) < 0);
}
function kn(s, t, e, n, i) {
  const r = va(s);
  if (t)
    r[t] && (r[t] = r[t].filter(([o, a, l]) => {
      if (i && l.guid !== i.guid || !ba(o, e) || n && n !== a)
        return !0;
      s.removeEventListener(t, l);
    }));
  else
    for (t in r)
      kn(s, t, e, n, i);
}
S.off = function(s, t, e) {
  if (wt(s))
    this.each((n, i) => {
      !st(i) && !Ee(i) && !Xe(i) || kn(i);
    });
  else if (ht(s))
    De(t) && (e = t, t = ""), it(Kn(s), (n, i) => {
      const [r, o] = Cr(i), a = wr(r);
      this.each((l, c) => {
        !st(c) && !Ee(c) && !Xe(c) || kn(c, a, o, t, e);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
S.remove = function(s) {
  return fe(this, s).detach().off(), this;
};
S.replaceWith = function(s) {
  return this.before(s).remove();
};
S.replaceAll = function(s) {
  return u(s).replaceWith(this), this;
};
function gh(s, t, e, n, i) {
  if (!ht(s)) {
    for (const r in s)
      this.on(r, t, e, s[r], i);
    return this;
  }
  return ht(t) || (wt(t) || bs(t) ? t = "" : wt(e) ? (e = t, t = "") : (n = e, e = t, t = "")), De(n) || (n = e, e = void 0), n ? (it(Kn(s), (r, o) => {
    const [a, l] = Cr(o), c = wr(a), d = a in ya, h = a in br;
    c && this.each((m, p) => {
      if (!st(p) && !Ee(p) && !Xe(p))
        return;
      const g = function(_) {
        if (_.target[`___i${_.type}`])
          return _.stopImmediatePropagation();
        if (_.namespace && !ba(l, _.namespace.split(vr)) || !t && (h && (_.target !== p || _.___ot === c) || d && _.relatedTarget && p.contains(_.relatedTarget)))
          return;
        let v = p;
        if (t) {
          let b = _.target;
          for (; !da(b, t); )
            if (b === p || (b = b.parentNode, !b))
              return;
          v = b;
        }
        Object.defineProperty(_, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(_, "delegateTarget", {
          configurable: !0,
          get() {
            return p;
          }
        }), Object.defineProperty(_, "data", {
          configurable: !0,
          get() {
            return e;
          }
        });
        const y = n.call(v, _, _.___td);
        i && kn(p, c, l, t, g), y === !1 && (_.preventDefault(), _.stopPropagation());
      };
      g.guid = n.guid = n.guid || u.guid++, mh(p, c, l, t, g);
    });
  }), this) : this;
}
S.on = gh;
function _h(s, t, e, n) {
  return this.on(s, t, e, n, !0);
}
S.one = _h;
const yh = /\r?\n/g;
function vh(s, t) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(t.replace(yh, `\r
`))}`;
}
const bh = /file|reset|submit|button|image/i, wa = /radio|checkbox/i;
S.serialize = function() {
  let s = "";
  return this.each((t, e) => {
    it(e.elements || [e], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || bh.test(i.type) || wa.test(i.type) && !i.checked)
        return;
      const r = fa(i);
      if (!wt(r)) {
        const o = Un(r) ? r : [r];
        it(o, (a, l) => {
          s += vh(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = u;
function wh(s, t) {
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
function Ch(s, t, e) {
  try {
    const n = wh(s, t), i = n[n.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function at(s, ...t) {
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
var kr = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(kr || {});
function kh(s, t = 2, e) {
  return Number.isNaN(s) ? "?KB" : (e || (s < 1024 ? e = "B" : s < 1048576 ? e = "KB" : s < 1073741824 ? e = "MB" : s < 1099511627776 ? e = "GB" : e = "TB"), (s / kr[e]).toFixed(t) + e);
}
const xh = (s) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const e = s.match(t);
  if (!e)
    return 0;
  const n = e[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * kr[n];
};
let xr = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), ie;
function $h() {
  return xr;
}
function Sh(s) {
  xr = s.toLowerCase();
}
function Ca(s, t) {
  ie || (ie = {}), typeof s == "string" && (s = { [s]: t ?? {} }), u.extend(!0, ie, s);
}
function rt(s, t, e, n, i, r) {
  Array.isArray(s) ? ie && s.unshift(ie) : s = ie ? [ie, s] : [s], typeof e == "string" && (r = i, i = n, n = e, e = void 0);
  const o = i || xr;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const c = l[o];
    if (!c)
      continue;
    const d = r && l === ie ? `${r}.${t}` : t;
    if (a = Ch(c, d), a !== void 0)
      break;
  }
  return a === void 0 ? n : e ? at(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Nh(s, t, e, n) {
  return rt(void 0, s, t, e, n);
}
rt.addLang = Ca;
rt.getLang = Nh;
rt.getCode = $h;
rt.setCode = Sh;
Ca({
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
function vo(s, t, e) {
  s instanceof Headers ? s.set(t, e) : Array.isArray(s) ? s.push([t, e]) : s[t] = e;
}
function ka(s, t, e) {
  e != null && (Array.isArray(e) ? e.forEach((n) => ka(s, t, n)) : s.append(t, e instanceof Blob ? e : String(e)));
}
function Eh(s, t) {
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
class xa {
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
      dataFilter: d,
      beforeSend: h,
      success: m,
      error: p,
      complete: g,
      ..._
    } = this.setting;
    if ((h == null ? void 0 : h(_)) === !1)
      return;
    e && (_.method = e);
    let v = n;
    v && (i && (u.isPlainObject(v) && (v = Object.entries(v)), Array.isArray(v) && (v = v.reduce((b, [k, x]) => (ka(b, k, x), b), new FormData()))), _.body = v), o && (_.mode = "cors");
    const y = _.headers || {};
    vo(y, "X-Requested-With", "XMLHttpRequest"), r && vo(y, "Content-Type", r), _.headers = y, _.signal && _.signal.addEventListener("abort", () => {
      this.abort();
    }), m && this.success(m), p && this.fail(p), g && this.complete(g), _.signal = this._controller.signal, this.url = t, this.request = _;
  }
  _emit(t, ...e) {
    this._callbacks[t].forEach((n) => {
      n.call(this, ...e);
    });
  }
  async send() {
    if (this.completed)
      return [];
    this._init();
    const { timeout: t, dataType: e, accepts: n, dataFilter: i, throws: r } = this.setting;
    t && (this._timeoutID = window.setTimeout(() => {
      this.abort(new Error("timeout"));
    }, t));
    let o, a, l;
    try {
      o = await fetch(this.url, this.request), this.response = o;
      const { statusText: c } = o;
      if (o.ok) {
        const d = e || Eh(o.headers.get("Content-Type"), n);
        d === "blob" || d === "file" ? l = await o.blob() : d === "json" ? l = await o.json() : l = await o.text(), this.data = l;
        const h = (i == null ? void 0 : i(l, d)) ?? l;
        this._emit("success", h, c, o);
      } else
        throw new Error(c);
    } catch (c) {
      a = c;
      let d = !1;
      a.name === "AbortError" && (this._abortError ? a = this._abortError : d = !0), this.error = a, d || this._emit("error", a, o == null ? void 0 : o.statusText, a.message);
    }
    if (this._timeoutID && clearTimeout(this._timeoutID), this._emit("complete", o, o == null ? void 0 : o.statusText), a && r)
      throw a;
    return [l, a, o];
  }
}
u.ajax = (s, t) => {
  t = t || {}, typeof s == "string" ? t.url = s : u.extend(t, s);
  const e = new xa(t);
  return e.send(), e;
};
u.getJSON = (s, t, e) => (typeof t == "function" && (e = t, t = void 0), u.ajax({
  url: s,
  data: t,
  success: e,
  dataType: "json"
}));
u.get = (s, t, e, n, i = "GET") => {
  let r, o;
  return typeof t == "function" ? (r = t, o = void 0) : o = t, typeof e == "function" ? (r = e, n = void 0) : n = e, u.ajax({
    method: i,
    url: s,
    data: o,
    success: r,
    dataType: n
  });
};
u.post = (s, t, e, n) => u.get(s, t, e, n, "POST");
u.fn.load = function(s, t, e) {
  typeof t == "function" && (e = t, t = void 0);
  const [n, i] = s.split(" ");
  return u.get(n, t, (r, o, a) => {
    i && (r = u(r).find(i).html()), u(this).html(r), e == null || e.call(this, r, o, a);
  }, "html"), this;
};
async function Gn(s, t = [], e) {
  const n = { throws: !0, dataType: "json" };
  if (typeof s == "string")
    n.url = s;
  else if (typeof s == "object")
    u.extend(n, s);
  else if (typeof s == "function") {
    const o = s(...t);
    if (o instanceof Promise)
      return await o;
    u.extend(n, o);
  }
  e && u.extend(n, typeof e == "function" ? e(n) : e);
  const i = new xa(n), [r] = await i.send();
  return r;
}
function bo(s) {
  return !!(s && (typeof s == "string" || typeof s == "object" && s.url || typeof s == "function"));
}
u.fetch = Gn;
function he() {
  return u.guid++;
}
function $a(...s) {
  const t = [], e = /* @__PURE__ */ new Map(), n = (i, r) => {
    if (Array.isArray(i) && (r = i[1], i = i[0]), !i.length)
      return;
    const o = e.get(i);
    typeof o == "number" ? t[o][1] = !!r : (e.set(i, t.length), t.push([i, !!r]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? $a(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((r) => n(r, !0));
  }), t.sort((i, r) => (e.get(i[0]) || 0) - (e.get(r[0]) || 0));
}
const $ = (...s) => $a(...s).reduce((t, [e, n]) => (n && t.push(e), t), []).join(" ");
u.classes = $;
u.fn.setClass = function(s, ...t) {
  return this.each((e, n) => {
    const i = u(n);
    s === !0 ? i.attr("class", $(i.attr("class"), ...t)) : i.addClass($(s, ...t));
  });
};
const cs = /* @__PURE__ */ new WeakMap();
function Sa(s, t, e) {
  const n = cs.has(s), i = n ? cs.get(s) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((r) => {
    delete i[r];
  }) : Object.assign(i, t), Object.keys(i).forEach((r) => {
    i[r] === void 0 && delete i[r];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, u(s).dataset(), i), cs.set(s, i)) : cs.delete(s);
}
function Na(s, t, e) {
  let n = cs.get(s) || {};
  return !e && s instanceof Element && (n = Object.assign({}, u(s).dataset(), n)), t === void 0 ? n : n[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...s) {
  if (!this.length)
    return;
  const [t, e] = s;
  return !s.length || s.length === 1 && typeof t == "string" ? Na(this[0], t) : this.each((n, i) => Sa(i, t, e));
};
u.fn.removeData = function(s = null) {
  return this.each((t, e) => Sa(e, s));
};
function wo(s) {
  const t = u(s)[0];
  if (t)
    return Array.from(t.attributes).reduce((e, n) => {
      let { name: i, value: r } = n;
      if (i.startsWith("z-")) {
        i = i.slice(2).replace(/-([a-z])/g, (o) => o[1].toUpperCase());
        try {
          r = JSON.parse(r);
        } catch {
        }
        e[i] = r;
      }
      return e;
    }, {});
}
function Co(s, t) {
  const e = u(s);
  Object.keys(t).forEach((n) => {
    let i = t[n];
    typeof i != "string" && (i = JSON.stringify(i)), n = n.replace(/[A-Z]/g, (r) => `-${r.toLowerCase()}`), e.attr(`z-${n}`, i);
  });
}
function Th(...s) {
  var e;
  const t = s.length;
  if (!t)
    return wo(this);
  if (t === 1) {
    const [n] = s;
    return typeof n == "string" ? (e = wo(this)) == null ? void 0 : e[n] : (u.isPlainObject(n) && Co(this, n), this);
  }
  return Co(this, { [s[0]]: s[1] }), this;
}
u.fn.z = Th;
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
const xn = (s, t) => new Promise((e) => {
  const n = window.setTimeout(e, s);
  t && t(n);
}), Mh = {};
u.share = Mh;
var Yn, q, Ea, ft, be, ko, Ta, Mi, Fe = {}, Ma = [], Ih = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Xn = Array.isArray;
function ce(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function Ia(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function Wt(s, t, e) {
  var n, i, r, o = {};
  for (r in t)
    r == "key" ? n = t[r] : r == "ref" ? i = t[r] : o[r] = t[r];
  if (arguments.length > 2 && (o.children = arguments.length > 3 ? Yn.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (r in s.defaultProps)
      o[r] === void 0 && (o[r] = s.defaultProps[r]);
  return an(s, o, n, i, null);
}
function an(s, t, e, n, i) {
  var r = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ea };
  return i == null && q.vnode != null && q.vnode(r), r;
}
function Y() {
  return { current: null };
}
function Qe(s) {
  return s.children;
}
function V(s, t) {
  this.props = s, this.context = t;
}
function ws(s, t) {
  if (t == null)
    return s.__ ? ws(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? ws(s) : null;
}
function Aa(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return Aa(s);
  }
}
function xo(s) {
  (!s.__d && (s.__d = !0) && be.push(s) && !$n.__r++ || ko !== q.debounceRendering) && ((ko = q.debounceRendering) || Ta)($n);
}
function $n() {
  var s, t, e, n, i, r, o, a, l;
  for (be.sort(Mi); s = be.shift(); )
    s.__d && (t = be.length, n = void 0, i = void 0, r = void 0, a = (o = (e = s).__v).__e, (l = e.__P) && (n = [], i = [], (r = ce({}, o)).__v = o.__v + 1, $r(l, o, r, e.__n, l.ownerSVGElement !== void 0, o.__h != null ? [a] : null, n, a ?? ws(o), o.__h, i), Ra(n, o, i), o.__e != a && Aa(o)), be.length > t && be.sort(Mi));
  $n.__r = 0;
}
function Pa(s, t, e, n, i, r, o, a, l, c, d) {
  var h, m, p, g, _, v, y, b, k, x = 0, w = n && n.__k || Ma, N = w.length, L = N, R = t.length;
  for (e.__k = [], h = 0; h < R; h++)
    (g = e.__k[h] = (g = t[h]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? an(null, g, null, null, g) : Xn(g) ? an(Qe, { children: g }, null, null, null) : g.__b > 0 ? an(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (b = Ah(g, w, y = h + x, L)) === -1 ? p = Fe : (p = w[b] || Fe, w[b] = void 0, L--), $r(s, g, p, i, r, o, a, l, c, d), _ = g.__e, (m = g.ref) && p.ref != m && (p.ref && Sr(p.ref, null, g), d.push(m, g.__c || _, g)), _ != null && (v == null && (v = _), (k = p === Fe || p.__v === null) ? b == -1 && x-- : b !== y && (b === y + 1 ? x++ : b > y ? L > R - y ? x += b - y : x-- : x = b < y && b == y - 1 ? b - y : 0), y = h + x, typeof g.type != "function" || b === y && p.__k !== g.__k ? typeof g.type == "function" || b === y && !k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = _.nextSibling : l = La(s, _, l) : l = Da(g, l, s), typeof e.type == "function" && (e.__d = l))) : (p = w[h]) && p.key == null && p.__e && (p.__e == l && (l = ws(p)), Ii(p, p, !1), w[h] = null);
  for (e.__e = v, h = N; h--; )
    w[h] != null && (typeof e.type == "function" && w[h].__e != null && w[h].__e == e.__d && (e.__d = w[h].__e.nextSibling), Ii(w[h], w[h]));
}
function Da(s, t, e) {
  for (var n, i = s.__k, r = 0; i && r < i.length; r++)
    (n = i[r]) && (n.__ = s, t = typeof n.type == "function" ? Da(n, t, e) : La(e, n.__e, t));
  return t;
}
function Cs(s, t) {
  return t = t || [], s == null || typeof s == "boolean" || (Xn(s) ? s.some(function(e) {
    Cs(e, t);
  }) : t.push(s)), t;
}
function La(s, t, e) {
  return e == null || e.parentNode !== s ? s.insertBefore(t, null) : t == e && t.parentNode != null || s.insertBefore(t, e), t.nextSibling;
}
function Ah(s, t, e, n) {
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
function Ph(s, t, e, n, i) {
  var r;
  for (r in e)
    r === "children" || r === "key" || r in t || Sn(s, r, null, e[r], n);
  for (r in t)
    i && typeof t[r] != "function" || r === "children" || r === "key" || r === "value" || r === "checked" || e[r] === t[r] || Sn(s, r, t[r], e[r], n);
}
function $o(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e ?? "") : s[t] = e == null ? "" : typeof e != "number" || Ih.test(t) ? e : e + "px";
}
function Sn(s, t, e, n, i) {
  var r;
  t:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || $o(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || $o(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      r = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + r] = e, e ? n || s.addEventListener(t, r ? No : So, r) : s.removeEventListener(t, r ? No : So, r);
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
function So(s) {
  return this.l[s.type + !1](q.event ? q.event(s) : s);
}
function No(s) {
  return this.l[s.type + !0](q.event ? q.event(s) : s);
}
function $r(s, t, e, n, i, r, o, a, l, c) {
  var d, h, m, p, g, _, v, y, b, k, x, w, N, L, R, W = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, r = [a]), (d = q.__b) && d(t);
  t:
    if (typeof W == "function")
      try {
        if (y = t.props, b = (d = W.contextType) && n[d.__c], k = d ? b ? b.props.value : d.__ : n, e.__c ? v = (h = t.__c = e.__c).__ = h.__E : ("prototype" in W && W.prototype.render ? t.__c = h = new W(y, k) : (t.__c = h = new V(y, k), h.constructor = W, h.render = Lh), b && b.sub(h), h.props = y, h.state || (h.state = {}), h.context = k, h.__n = n, m = h.__d = !0, h.__h = [], h._sb = []), h.__s == null && (h.__s = h.state), W.getDerivedStateFromProps != null && (h.__s == h.state && (h.__s = ce({}, h.__s)), ce(h.__s, W.getDerivedStateFromProps(y, h.__s))), p = h.props, g = h.state, h.__v = t, m)
          W.getDerivedStateFromProps == null && h.componentWillMount != null && h.componentWillMount(), h.componentDidMount != null && h.__h.push(h.componentDidMount);
        else {
          if (W.getDerivedStateFromProps == null && y !== p && h.componentWillReceiveProps != null && h.componentWillReceiveProps(y, k), !h.__e && (h.shouldComponentUpdate != null && h.shouldComponentUpdate(y, h.__s, k) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (h.props = y, h.state = h.__s, h.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(A) {
              A && (A.__ = t);
            }), x = 0; x < h._sb.length; x++)
              h.__h.push(h._sb[x]);
            h._sb = [], h.__h.length && o.push(h);
            break t;
          }
          h.componentWillUpdate != null && h.componentWillUpdate(y, h.__s, k), h.componentDidUpdate != null && h.__h.push(function() {
            h.componentDidUpdate(p, g, _);
          });
        }
        if (h.context = k, h.props = y, h.__P = s, h.__e = !1, w = q.__r, N = 0, "prototype" in W && W.prototype.render) {
          for (h.state = h.__s, h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), L = 0; L < h._sb.length; L++)
            h.__h.push(h._sb[L]);
          h._sb = [];
        } else
          do
            h.__d = !1, w && w(t), d = h.render(h.props, h.state, h.context), h.state = h.__s;
          while (h.__d && ++N < 25);
        h.state = h.__s, h.getChildContext != null && (n = ce(ce({}, n), h.getChildContext())), m || h.getSnapshotBeforeUpdate == null || (_ = h.getSnapshotBeforeUpdate(p, g)), Pa(s, Xn(R = d != null && d.type === Qe && d.key == null ? d.props.children : d) ? R : [R], t, e, n, i, r, o, a, l, c), h.base = t.__e, t.__h = null, h.__h.length && o.push(h), v && (h.__E = h.__ = null);
      } catch (A) {
        t.__v = null, (l || r != null) && (t.__e = a, t.__h = !!l, r[r.indexOf(a)] = null), q.__e(A, t, e);
      }
    else
      r == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Dh(e.__e, t, e, n, i, r, o, l, c);
  (d = q.diffed) && d(t);
}
function Ra(s, t, e) {
  for (var n = 0; n < e.length; n++)
    Sr(e[n], e[++n], e[++n]);
  q.__c && q.__c(t, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(r) {
        r.call(i);
      });
    } catch (r) {
      q.__e(r, i.__v);
    }
  });
}
function Dh(s, t, e, n, i, r, o, a, l) {
  var c, d, h, m = e.props, p = t.props, g = t.type, _ = 0;
  if (g === "svg" && (i = !0), r != null) {
    for (; _ < r.length; _++)
      if ((c = r[_]) && "setAttribute" in c == !!g && (g ? c.localName === g : c.nodeType === 3)) {
        s = c, r[_] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(p);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, p.is && p), r = null, a = !1;
  }
  if (g === null)
    m === p || a && s.data === p || (s.data = p);
  else {
    if (r = r && Yn.call(s.childNodes), d = (m = e.props || Fe).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !a) {
      if (r != null)
        for (m = {}, _ = 0; _ < s.attributes.length; _++)
          m[s.attributes[_].name] = s.attributes[_].value;
      (h || d) && (h && (d && h.__html == d.__html || h.__html === s.innerHTML) || (s.innerHTML = h && h.__html || ""));
    }
    if (Ph(s, p, m, i, a), h)
      t.__k = [];
    else if (Pa(s, Xn(_ = t.props.children) ? _ : [_], t, e, n, i && g !== "foreignObject", r, o, r ? r[0] : e.__k && ws(e, 0), a, l), r != null)
      for (_ = r.length; _--; )
        r[_] != null && Ia(r[_]);
    a || ("value" in p && (_ = p.value) !== void 0 && (_ !== s.value || g === "progress" && !_ || g === "option" && _ !== m.value) && Sn(s, "value", _, m.value, !1), "checked" in p && (_ = p.checked) !== void 0 && _ !== s.checked && Sn(s, "checked", _, m.checked, !1));
  }
  return s;
}
function Sr(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    q.__e(n, e);
  }
}
function Ii(s, t, e) {
  var n, i;
  if (q.unmount && q.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Sr(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        q.__e(r, t);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Ii(n[i], t, e || typeof s.type != "function");
  e || s.__e == null || Ia(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Lh(s, t, e) {
  return this.constructor(s, e);
}
function ks(s, t, e) {
  var n, i, r, o;
  q.__ && q.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, r = [], o = [], $r(t, s = (!n && e || t).__k = Wt(Qe, null, [s]), i || Fe, Fe, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Yn.call(t.childNodes) : null, r, !n && e ? e : i ? i.__e : t.firstChild, n, o), Ra(r, s, o);
}
Yn = Ma.slice, q = { __e: function(s, t, e, n) {
  for (var i, r, o; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((r = i.constructor) && r.getDerivedStateFromError != null && (i.setState(r.getDerivedStateFromError(s)), o = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), o = i.__d), o)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ea = 0, ft = function(s) {
  return s != null && s.constructor === void 0;
}, V.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ce({}, this.state), typeof s == "function" && (s = s(ce({}, e), this.props)), s && ce(e, s), s != null && this.__v && (t && this._sb.push(t), xo(this));
}, V.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), xo(this));
}, V.prototype.render = Qe, be = [], Ta = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Mi = function(s, t) {
  return s.__v.__b - t.__v.__b;
}, $n.__r = 0;
function H(s, ...t) {
  return t.forEach((e) => {
    !e || typeof e != "object" || Object.keys(e).forEach((n) => {
      let i = e[n];
      const r = s[n];
      i !== r && (r !== void 0 && (n === "className" || n.endsWith("Class") ? i = [r, i] : n === "children" ? i = [...Cs(r), ...Cs(i)] : typeof r == "object" && (n === "style" || n.endsWith("Style") || n === "attrs" || n.endsWith("Attrs") || n === "props") && (i = u.extend(r, i))), s[n] = i);
    });
  }), s;
}
function za(s) {
  return Object.keys(s).forEach((t) => {
    s[t] === void 0 && delete s[t];
  }), s;
}
const hs = /* @__PURE__ */ new Map();
function Nn(s) {
  const { zui: t } = window;
  return (!hs.size || s && !hs.has(s.toUpperCase())) && Object.keys(t).forEach((e) => {
    const n = t[e];
    !n.NAME || !n.ZUI || hs.set(e.toLowerCase(), n);
  }), s ? hs.get(s.toLowerCase()) : void 0;
}
function Rh(s, t, e) {
  const n = Nn(s);
  return n ? !n.MULTI_INSTANCE && n.get(t) ? (console.error(`[ZUI] cannot create component "${s}" on element which already has a component instance.`, { element: t, options: e }), null) : new n(t, e) : null;
}
function rf(s) {
  if (s) {
    const t = Nn(s);
    t && t.defineFn();
  } else
    Nn(), hs.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const s = u(this);
    let t = s.dataset();
    const [e, n] = t.zui.split(":");
    s.zui(e) || (n ? t = u.share[n] : delete t.zui, requestAnimationFrame(() => Rh(e, this, t)));
  }), this.find(".hide-before-init").removeClass("invisible hidden opacity-0"), this.find(".scroll-into-view").scrollIntoView(), this;
};
u.fn.zui = function(s, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof s != "string") {
    const i = Na(e, void 0, !0), r = {};
    let o;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        r[a] = l, (!o || o.gid < l.gid) && (o = r[a]);
      }
    }), s === !0 ? r : o;
  }
  const n = Nn(s);
  if (n)
    return t === !0 ? n.getAll(e) : n.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function zh(s, t = !0) {
  const e = u(s), n = e[0], i = "zui-disable-scroll";
  if (t) {
    if (e.data(i))
      return;
    const r = n === document.body ? window.innerWidth - document.body.clientWidth : n.offsetWidth - n.clientWidth;
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
u.fn.disableScroll = function(s = !0) {
  return this.each((t, e) => {
    zh(e, s);
  });
};
u.fn.enableScroll = function(s = !0) {
  return this.disableScroll(!s);
};
function Zn(s) {
  if (typeof s == "number")
    return [s];
  let t = s.match(/(\d+)(%|px)?/);
  return t ? [parseInt(t[1]), t[2]] : (t = s.match(/(\d+)\/(\d+)/), t ? [100 * parseInt(t[1]) / parseInt(t[2]), "%"] : [NaN]);
}
function Eo(s) {
  const [t, e = "px"] = Zn(s);
  return `${t}${e}`;
}
function Nr(s, t) {
  const e = u(s)[0];
  if (!e)
    return !1;
  let { viewport: n } = t || {};
  const { left: i, top: r, width: o, height: a } = e.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: _ } = window, { clientHeight: v, clientWidth: y } = document.documentElement;
    n = { left: 0, top: 0, width: _ || y, height: g || v };
  }
  const { left: l, top: c, width: d, height: h } = n;
  if (t != null && t.fullyCheck)
    return i >= l && r >= c && i + o <= d && r + a <= h;
  const m = i <= d && i + o >= l;
  return r <= h && r + a >= c && m;
}
u.fn.isVisible = function(s) {
  return Nr(this, s);
};
function Er(s, t, e = !1) {
  const n = u(s);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${he()}`;
      n.append(`<script id="${i}">${t}<\/script>`), e && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, r) => {
    Er(n, r.innerHTML), r.remove();
  });
}
u.runJS = (s, ...t) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...t.map(([n]) => n), s)(...t.map(([, n]) => n)));
u.fn.runJS = function(s) {
  return this.each((t, e) => {
    Er(e, s);
  });
};
function Wa(s, t) {
  const e = u(s), { ifNeeded: n = !0, ...i } = t || {};
  return e.each((r, o) => {
    if (n) {
      if (o.scrollIntoViewIfNeeded)
        return o.scrollIntoViewIfNeeded(i);
      if (Nr(o, { viewport: o.getBoundingClientRect() }))
        return;
    }
    o.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(s) {
  return this.each((t, e) => {
    Wa(e, s);
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
    const { success: c, name: d } = r, h = () => d ? window[d] : void 0, m = () => {
      n(h()), c == null || c();
    };
    if (h()) {
      m();
      return;
    }
    const { id: p } = r, g = u(p ? `#${p}` : `script[src="${o}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        m();
      else {
        const w = g.data("loadCalls") || [];
        w.push(m), g.data("loadCalls", w);
      }
      return;
    }
    const { async: _ = !0, defer: v = !1, noModule: y = !1, type: b, integrity: k } = r, x = document.createElement("script");
    x.async = _, x.defer = v, x.noModule = y, b && (x.type = b), k && (x.integrity = k), x.onload = () => {
      m(), (u(x).dataset("loaded", !0).data("loadCalls") || []).forEach((N) => N()), u(x).removeData("loadCalls");
    }, x.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${o}`));
    }, x.src = o, u("head").append(x);
  });
};
u.getScript = u.getLib;
const of = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Nr,
  runJS: Er,
  scrollIntoView: Wa
}, Symbol.toStringTag, { value: "Module" })), Oa = {};
function Le(s, t) {
  typeof s == "object" ? Object.keys(s).forEach((e) => {
    Le(e, s[e]);
  }) : t && (Oa[s.toLowerCase()] = t);
}
function Wh(s) {
  return Oa[s.toLowerCase()];
}
class Z extends V {
  constructor() {
    super(...arguments), this._gid = he();
  }
  get gid() {
    return this._gid;
  }
  get element() {
    return document.querySelector(`[z-gid-${this._gid}]`);
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
    const { className: e, attrs: n, props: i, data: r, forwardRef: o, children: a, component: l, style: c, ...d } = t, h = Object.keys(d).reduce((m, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-|zui-|z-)[a-zA-Z-]+/.test(p)) && (m[p] = d[p]), m), {});
    return { ref: o, className: $(this._getClassName(t)) || void 0, style: c, [`z-gid-${this._gid}`]: "", ...h, ...n, ...i };
  }
  _getComponent(t) {
    const { component: e = "div" } = t;
    return (typeof e == "string" ? Wh(e) : e) || e;
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
    return r && ([e, i, n] = r), Wt(e, i, n);
  }
}
Z.HElement = !0;
var Oh = 0;
function f(s, t, e, n, i, r) {
  var o, a, l = {};
  for (a in t)
    a == "ref" ? o = t[a] : l[a] = t[a];
  var c = { type: s, props: l, key: e, ref: o, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Oh, __source: i, __self: r };
  if (typeof s == "function" && (o = s.defaultProps))
    for (a in o)
      l[a] === void 0 && (l[a] = o[a]);
  return q.vnode && q.vnode(c), c;
}
class Te extends V {
  constructor() {
    super(...arguments), this._ref = Y();
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
    return /* @__PURE__ */ f(Z, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Hh(s) {
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
    ...d
  } = s, h = [e], m = { ...n }, p = [], g = [];
  return i.forEach((_) => {
    const v = [];
    if (typeof _ == "string" && a && a[_] && (_ = a[_]), typeof _ == "function")
      if (l)
        v.push(...l.call(o, _, p, ...r));
      else {
        const y = _.call(o, p, ...r);
        y && (Array.isArray(y) ? v.push(...y) : v.push(y));
      }
    else
      v.push(_);
    v.forEach((y) => {
      y != null && (typeof y == "object" && !ft(y) && ("html" in y || "__html" in y || "className" in y || "style" in y || "attrs" in y || "children" in y) ? y.html ? p.push(
        /* @__PURE__ */ f("div", { className: $(y.className), style: y.style, dangerouslySetInnerHTML: { __html: y.html }, ...y.attrs ?? {} })
      ) : y.__html ? g.push(y.__html) : (y.style && Object.assign(m, y.style), y.className && h.push(y.className), y.children && p.push(y.children), y.attrs && Object.assign(d, y.attrs)) : p.push(y));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: $(h),
    style: m,
    ...d
  }, p];
}
function Ha({
  tag: s = "div",
  ...t
}) {
  const [e, n] = Hh(t);
  return Wt(s, e, ...n);
}
function Ai(s) {
  const { content: t, generatorArgs: e, generatorThis: n, ...i } = s;
  let r = t;
  if (typeof r == "function" && (r = r.call(n, ...e || [])), Array.isArray(r))
    return r.map((o) => Ai({ ...i, content: o, generatorThis: n, generatorArgs: e }));
  if (typeof r == "object" && (r.html || r.component)) {
    if (r.html)
      return /* @__PURE__ */ f(Te, { ...H(i, r) });
    let { children: o } = r;
    return o && (o = Array.isArray(o) ? o : [o], r = H({ children: o.map((a) => Ai({ ...i, content: a, generatorThis: n, generatorArgs: e })) }, r)), /* @__PURE__ */ f(Z, { ...H(i, r) });
  }
  return ft(r) || r === null, r;
}
function j(s) {
  const t = Ai(s);
  return t == null || typeof t == "boolean" ? null : ft(t) ? t : /* @__PURE__ */ f(Qe, { children: t });
}
const To = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function J(s) {
  const { icon: t, className: e, ...n } = s;
  if (!t)
    return null;
  if (ft(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(To(t));
  else if (typeof t == "object") {
    const { className: r, icon: o, ...a } = t;
    i.push(r, o ? To(o) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ f("i", { className: $(i), ...n });
}
function Bh(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Ba(s) {
  const t = this, e = s._container;
  t.componentWillUnmount = function() {
    ks(null, t._temp), t._temp = null, t._container = null;
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
  }), ks(
    Wt(Bh, { context: t.context }, s._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Fh(s, t) {
  const e = Wt(Ba, { _vnode: s, _container: t });
  return e.containerInfo = t, e;
}
Le({
  HElement: Z,
  element: Z,
  HtmlContent: Te,
  html: Te,
  CustomContent: j,
  custom: j,
  Icon: J,
  Portal: Ba
});
function Fa(s) {
  return s.parentNode === document ? !1 : s.parentNode ? Fa(s.parentNode) : !0;
}
class dt {
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
    const c = l[0], d = he();
    this._gid = d, this._element = c;
    const h = l.parent();
    if (h.length && (this._mobs = new MutationObserver((m) => {
      m.forEach((p) => {
        p.removedNodes.forEach((g) => {
          g === c && (this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
            this._autoDestory = 0, Fa(c) && this.destroy();
          }, 100));
        });
      });
    }), this._mobs.observe(h[0], { childList: !0, subtree: !1 })), this._options = { ...r, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(n, this).attr(i, `${d}`), o) {
      const m = `${n}:ALL`;
      let p = l.data(m);
      p || (p = /* @__PURE__ */ new Map(), l.data(m, p)), p.set(this._key, this);
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
    var r;
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: n } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), (r = this._mobs) == null || r.disconnect(), i.off(this.namespace).removeData(t).attr(e, null), n) {
      const o = this.$element.data(`${t}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const a = o.values().next().value;
          i.data(t, a).attr(e, a.gid);
        }
    }
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
    return rt(this.options.i18n, t, e, n, this.options.lang, this.constructor.NAME) ?? rt(this.options.i18n, t, e, n, this.options.lang) ?? `{i18n:${t}}`;
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
  static query(t, e, n) {
    if (t === void 0) {
      let i = this.getAll();
      return n && (i = i.filter(n)), i.sort((r, o) => o.gid - r.gid)[0];
    }
    return this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
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
        return this.each((c, d) => {
          let h = n.get(d);
          if (h ? o && h.render(o) : h = new n(d, o), a) {
            let m = h[a], p = h;
            m === void 0 && (p = h.$, m = p[a]), typeof m == "function" ? l = m.call(p, ...r) : l = m;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
}
dt.DEFAULT = {};
dt.MULTI_INSTANCE = !1;
class B extends dt {
  constructor() {
    super(...arguments), this.ref = Y();
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
    const { element: e } = this, { Component: n, replace: i } = this.constructor, r = {
      ref: this.ref,
      ...this.setOptions(t)
    };
    if (i && n.HElement) {
      const o = Array.from(e.attributes).reduce((a, l) => {
        const { name: c, value: d } = l;
        return a[c === "class" ? "className" : c] = d, a;
      }, {});
      return ks(
        Wt(n, H({ component: e.tagName.toLowerCase(), attrs: o }, r)),
        e.parentElement,
        e
      );
    }
    ks(
      Wt(n, r),
      e
    );
  }
}
B.replace = !1;
class lt extends Z {
  _beforeRender(t) {
    const { text: e, loading: n, loadingText: i, caret: r, icon: o, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || n && !i, this._onlyCaret = r && this._isEmptyText && !o && !a && !l && !n;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: n, loadingText: i, icon: r, text: o, children: a, trailingIcon: l, caret: c } = t;
    return [
      e ? /* @__PURE__ */ f(J, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(J, { icon: r }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : o }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(J, { icon: l }),
      e ? null : c ? /* @__PURE__ */ f("span", { className: typeof c == "string" ? `caret-${c}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: n, disabled: i, loading: r, active: o, children: a, square: l, size: c, rounded: d } = t;
    return ["btn", e, n, {
      "btn-caret": this._onlyCaret,
      disabled: i || r,
      active: o,
      loading: r,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, c ? `size-${c}` : "", typeof d == "string" ? d : { rounded: d }];
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: n, target: i, disabled: r, btnType: o = "button", hint: a } = t, l = e === "a", c = {
      ...super._getProps(t),
      disabled: r,
      title: a
    };
    return o && (["button", "reset", "submit"].includes(o) ? e === "button" && (c.type = o) : c.className = $([c.className, o])), r || (n !== void 0 && (c[l ? "href" : "data-url"] = n), i !== void 0 && (c[l ? "target" : "data-target"] = i)), c;
  }
}
const Vh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Button: lt
}, Symbol.toStringTag, { value: "Module" }));
Le(Vh);
let Ct = class extends Z {
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
  _getItemFromEvent(t) {
    var a;
    const e = t.target.closest("[z-item]");
    if (!e || !((a = e.parentElement) != null && a.hasAttribute(`z-gid-${this._gid}`)))
      return;
    const n = +e.getAttribute("z-item"), i = this._items[n];
    if (!i)
      return;
    const r = this.getKey(n);
    if (r === void 0)
      return;
    const o = this._renderedItems[n];
    return { index: n, item: i, element: e, event: t, key: r, renderedItem: o };
  }
  _handleClick(t) {
    const { onClickItem: e } = this.props;
    if (!e)
      return;
    const n = this._getItemFromEvent(t);
    n && e.call(this, n);
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
        return /* @__PURE__ */ f(j, { "z-key": e.key, "z-item": n, "z-type": r, content: c });
    }
    const { ItemComponents: a } = this.constructor;
    let l = a[r] || a.default || Z;
    if (Array.isArray(l)) {
      let c = l[1];
      typeof c == "function" && (c = c.call(this, e, t)), e = H({}, c, e), l = l[0];
    }
    return /* @__PURE__ */ f(l, { "z-key": e.key, "z-item": n, "z-type": r, ...e });
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
    const { itemProps: i, itemPropsMap: r = {}, getItem: o, itemKey: a = "id" } = t, { type: l = this.constructor.defaultItemType } = e, { name: c, itemName: d } = this, { defaultItemProps: h = {}, defaultItemPropsMap: m = {} } = this.constructor;
    if (e = H(
      { type: l },
      h,
      m[l],
      i,
      r[l],
      { className: [c ? `${c}-${l}` : "", d] },
      e,
      {
        _index: n,
        key: String((a ? e[a] : e.key) ?? n)
      }
    ), o) {
      const p = o.call(this, e, n);
      if (p !== void 0)
        return p;
    }
    return e;
  }
  _getProps(t) {
    const e = super._getProps(t);
    return t.onClickItem ? { onClick: this._handleClick, ...e } : e;
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
    return typeof e == "function" ? e = e.call(this) : Array.isArray(e) || (e = []), e;
  }
  /**
   * Render items.
   *
   * @param props  props  Current list properties.
   * @param items  Render items.
   * @returns React render children.
   */
  _renderItems(t, e) {
    const n = [];
    return this._renderedItems = e.map((i, r) => {
      const o = this._getItem(t, i, r);
      return o && n.push(this._renderItem(t, o, r)), o || void 0;
    }), n;
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
Ct.NAME = "";
Ct.ITEM_NAME = "item";
Ct.TAG = "ul";
Ct.ItemComponents = {
  default: Z,
  divider: [Z, { className: "divider" }],
  space: [Z, (s) => {
    const { space: t, flex: e, style: n } = s;
    return {
      style: { width: t, height: t, flex: e, ...n }
    };
  }]
};
Ct.defaultItemProps = {
  component: "li"
};
Ct.defaultItemPropsMap = {};
Ct.defaultItemType = "item";
const Uh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CommonList: Ct
}, Symbol.toStringTag, { value: "Module" }));
class Tr extends B {
}
Tr.NAME = "CommonList";
Tr.Component = Ct;
Tr.replace = !0;
Le(Uh);
function jh(s) {
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
function Kh(s) {
  const [t, e, n] = typeof s == "string" ? jh(s) : s;
  return t * 0.299 + e * 0.587 + n * 0.114 > 186;
}
function Mo(s, t) {
  return Kh(s) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function Io(s, t = 255) {
  return Math.min(Math.max(s, 0), t);
}
function qh(s, t, e) {
  s = s % 360 / 360, t = Io(t), e = Io(e);
  const n = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - n, r = (o) => (o = o < 0 ? o + 1 : o > 1 ? o - 1 : o, o * 6 < 1 ? i + (n - i) * o * 6 : o * 2 < 1 ? n : o * 3 < 2 ? i + (n - i) * (2 / 3 - o) * 6 : i);
  return [
    r(s + 1 / 3) * 255,
    r(s) * 255,
    r(s - 1 / 3) * 255
  ];
}
function Va(s) {
  let t = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let e = 0; e < s.length; ++e)
      t += (e + 1) * s.charCodeAt(e);
  return t;
}
function Gh(s, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= t ? s : s.substring(s.length - t) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= t ? s : s.substring(0, t);
}
let Hs = class extends V {
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
      code: d,
      maxTextLength: h = 2,
      src: m,
      hueDistance: p = 43,
      saturation: g = 0.4,
      lightness: _ = 0.6,
      children: v,
      ...y
    } = this.props, b = ["avatar", t], k = { ...e, background: o, color: a };
    let x = 32;
    n && (typeof n == "number" ? (k.width = `${n}px`, k.height = `${n}px`, k.fontSize = `${Math.max(12, Math.round(n / 2))}px`, x = n) : (b.push(`size-${n}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? b.push("circle") : r && (typeof r == "number" ? k.borderRadius = `${r}px` : b.push(`rounded-${r}`));
    let w;
    if (m)
      b.push("has-img"), w = /* @__PURE__ */ f("img", { className: "avatar-img", src: m, alt: c });
    else if (l)
      b.push("has-icon"), w = /* @__PURE__ */ f(J, { icon: l });
    else if (c != null && c.length) {
      const N = Gh(c, h);
      if (b.push("has-text", `has-text-${N.length}`), o)
        !a && o && (k.color = Mo(o));
      else {
        const R = d ?? c, W = (typeof R == "number" ? R : Va(R)) * p % 360;
        if (k.background = `hsl(${W},${g * 100}%,${_ * 100}%)`, !a) {
          const A = qh(W, g, _);
          k.color = Mo(A);
        }
      }
      let L;
      x && x < 14 * N.length && (L = { transform: `scale(${x / (14 * N.length)})`, whiteSpace: "nowrap" }), w = /* @__PURE__ */ f("div", { "data-actualSize": x, className: "avatar-text", style: L, children: N });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: $(b),
        style: k,
        ...y,
        children: [
          w,
          v
        ]
      }
    );
  }
};
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Avatar: Hs
}, Symbol.toStringTag, { value: "Module" }));
let Pt = class extends Ct {
  _isBtnType(t) {
    return t.type === "item" || t.type === "dropdown";
  }
  _getItem(t, e, n) {
    !e.type && (e.dropdown || e.items) && (e = u.extend({ type: "dropdown" }, e));
    let i = super._getItem(t, e, n);
    return i && (this._isBtnType(i) && (i = H({}, this._shareBtnProps, i)), i);
  }
  _beforeRender(t) {
    const { btnProps: e, btnType: n, size: i } = t;
    this._shareBtnProps = H({}, e, za({ btnType: n, size: i }));
  }
};
Pt.NAME = "btn-group";
Pt.TAG = "nav";
Pt.ItemComponents = {
  ...Ct.ItemComponents,
  default: lt
};
Pt.defaultItemProps = {
  component: void 0
};
const Jn = class Ua extends Pt {
  _getProps(t) {
    const { gap: e } = t, n = super._getProps(t);
    return e && (typeof e == "number" ? n.className = $(n.className, `gap-${e}`) : n.style = u.extend(n.style || {}, { gap: e })), n;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && ((i.type === "btn-group" || i.type === "btnGroup") && (i.btnProps = H({}, this._shareBtnProps, i.btnProps)), i);
  }
  static render(t, e, n, i) {
    let r = typeof t == "function" ? t.call(i ?? this, ...e) : t;
    if (r)
      return Array.isArray(r) && (r = {
        items: r
      }), n && (r = H(n, r)), /* @__PURE__ */ f(Ua, { ...r });
  }
};
Jn.NAME = "toolbar";
Jn.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
Jn.ItemComponents = {
  ...Pt.ItemComponents,
  btnGroup: Pt,
  "btn-group": Pt
};
let pt = Jn;
const Xh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Toolbar: pt
}, Symbol.toStringTag, { value: "Module" }));
class Qn extends Z {
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
      e ? /* @__PURE__ */ f(
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
      /* @__PURE__ */ f("label", { htmlFor: r, children: /* @__PURE__ */ f(j, { content: o }) }, "label")
    ];
  }
}
class Zh extends Qn {
}
Zh.defaultProps = {
  type: "radio"
};
class Jh extends Qn {
}
Jh.defaultProps = {
  type: "switch"
};
class En extends Z {
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
    } = t, d = [];
    if (i && d.push(/* @__PURE__ */ f(j, { content: i }, "toggleIcon")), a !== void 0 && d.push(/* @__PURE__ */ f(Qn, { className: "item-checkbox", checked: a, ...l }, "checkbox")), e && d.push(/* @__PURE__ */ f(J, { className: "item-icon", icon: e }, "icon")), n) {
      const m = typeof n == "function" ? n.call(this, t) : n;
      m && (m.className = $("item-avatar", m.className), d.push(/* @__PURE__ */ f(Hs, { ...m }, "avatar")));
    }
    const h = r ? /* @__PURE__ */ f(j, { content: r }, "leading") : null;
    return h && d.push(h), c ? d.length ? [
      /* @__PURE__ */ f("div", { className: $("item-leading", o), children: d }, "leading")
    ] : [] : d;
  }
  _renderContent(t) {
    const {
      textClass: e,
      titleClass: n,
      subtitle: i,
      subtitleClass: r,
      url: o,
      actions: a,
      target: l,
      content: c,
      contentClass: d
    } = t, h = o && a, m = h ? "a" : "div";
    let { title: p, text: g } = t;
    return p === void 0 && (p = g, g = null), [
      /* @__PURE__ */ f("div", { className: $("item-content", d), children: [
        p ? /* @__PURE__ */ f(m, { className: $("item-title", n), href: h ? o : void 0, target: h ? l : void 0, children: /* @__PURE__ */ f(j, { content: p }) }, "title") : null,
        i ? /* @__PURE__ */ f("div", { className: $("item-subtitle", r), children: /* @__PURE__ */ f(j, { content: i }) }, "subtitle") : null,
        g ? /* @__PURE__ */ f("div", { className: $("item-text text", e), children: g }, "text") : null,
        c ? /* @__PURE__ */ f(j, { content: c }, "extraContent") : null
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
    if (r && a.push(/* @__PURE__ */ f(J, { className: "item-trailing-icon", icon: r }, "trailing-icon")), o) {
      let c = typeof o == "function" ? o.call(this, t) : o;
      Array.isArray(c) && (c = {
        items: c
      }), a.push(
        /* @__PURE__ */ f(pt, { size: "sm", ...c }, "actions")
      );
    }
    const l = n ? /* @__PURE__ */ f(j, { content: n }, "trailing") : null;
    return l && a.push(l), e ? a.length ? [
      /* @__PURE__ */ f("div", { className: $("item-trailing", i), children: [
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
      disabled: d,
      divider: h,
      checked: m,
      multiline: p,
      title: g,
      subtitle: _,
      hover: v
    } = t, y = n || (o && !a ? "a" : "div"), b = y === "a", k = H({
      key: "item",
      className: $("listitem", i, {
        active: c,
        disabled: d,
        "has-divider": h,
        "has-hover state": v,
        checked: m,
        multiline: p ?? !!(g && _),
        state: b
      }),
      href: b ? o : void 0,
      target: b ? l : void 0
    }, e, r);
    return /* @__PURE__ */ f(y, { ...k, children: [
      this._renderLeading(t),
      this._renderContent(t),
      this._renderTrailing(t)
    ] });
  }
  _onRender(t, e, n, i) {
    const r = Object.keys(e).reduce((o, a) => (a.startsWith("data-") && (o[a] = e[a], delete e[a]), o), {});
    return [t, e, [this._render(i, r), ...Cs(n)]];
  }
}
let me = class extends Ct {
  constructor(t) {
    super(t), this.state = {};
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t;
    (t = this.props.beforeDestroy) == null || t.call(this);
  }
  load() {
    const { items: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0, items: [] }, async () => {
      const i = { loading: !1 };
      try {
        const r = await Gn(t, [this], { throws: !0 });
        i.items = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { items: e } = this.props;
    t || !e || Array.isArray(e) || e === this._loadedSetting || this.load();
  }
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getItems(t) {
    const { items: e } = t, { items: n } = this.state;
    return n || (Array.isArray(e) ? e : []);
  }
  _getItem(t, e, n) {
    let i = super._getItem(t, e, n);
    if (!i)
      return i;
    const { divider: r, hover: o, multiline: a } = t;
    i = H({}, za({
      divider: r,
      hover: o,
      multiline: a
    }), i);
    const { itemName: l, name: c } = this;
    if (i.innerClass = [l ? `${l}-inner${c ? ` ${c}-${i.type}-inner` : ""}` : "", i.innerClass], i.type === "item") {
      const { checkbox: d } = t;
      d && (i.checked === void 0 && (i.checked = !1), typeof d == "object" && (i.checkbox = i.checkbox ? u.extend({}, d, i.checkbox) : d));
    }
    return i.icon && (this._hasIcons = !0), i.checked !== void 0 && (this._hasCheckbox = !0), i;
  }
  _renderItem(t, e, n) {
    return e.type === "item" && this._hasIcons && e.icon === void 0 && (e.icon = "EMPTY"), super._renderItem(t, e, n);
  }
  _getClassName(t) {
    const { loading: e, loadFailed: n } = this.state;
    return [super._getClassName(t), e ? "loading" : n ? "is-load-failed" : ""];
  }
  _getProps(t) {
    const { className: e, ...n } = super._getProps(t);
    return {
      ...n,
      onClick: this._handleClick,
      className: $(e, this._hasIcons ? "has-icons" : "", this._hasCheckbox ? "has-checkbox" : "")
    };
  }
  _getChildren(t) {
    const e = super._getChildren(t), { loadFailed: n } = this.state;
    return n && e.push(n), e;
  }
};
me.ItemComponents = {
  ...Ct.ItemComponents,
  default: Z,
  item: En,
  heading: En
};
me.NAME = "list";
let ts = class extends me {
  constructor(t) {
    super(t), this._itemsMap = /* @__PURE__ */ new Map(), this._controlled = t.nestedShow !== void 0, this.state.nestedShow = t.defaultNestedShow ?? {}, this._handleClickNestedItem = this._handleClickNestedItem.bind(this), this._handleHoverNestedItem = this._handleHoverNestedItem.bind(this), this._handleHover = this._handleHover.bind(this), this._handleClick = this._handleClick.bind(this), this._beforeRenderNestedItem = this._beforeRenderNestedItem.bind(this);
  }
  get isRoot() {
    return !this.props.level;
  }
  get nestedShow() {
    return (this._controlled ? this.props.nestedShow : this.state.nestedShow) ?? !1;
  }
  isExpanded(t, e, n) {
    const { nestedShow: i } = this, r = `${e !== void 0 ? `${e}:` : ""}${t}`;
    return !!(typeof i == "object" ? i[r] ?? n : i);
  }
  toggle(t, e) {
    var i;
    if (this._controlled)
      return;
    const n = this._getNestedMap();
    if (e = e ?? !n[t], e !== !!n[t] && ((i = this.props.onToggle) == null ? void 0 : i.call(this, t, e)) !== !1)
      return n[t] = e, this.setState({ nestedShow: n });
  }
  toggleAll(t) {
    var i, r;
    if (this._controlled)
      return;
    let { nestedShow: e } = this;
    if (typeof e == "boolean")
      return this.setState({ nestedShow: t ?? !e });
    e = this._getNestedMap();
    const n = (r = (i = this._items) == null ? void 0 : i[0]) == null ? void 0 : r.key;
    t = t ?? (n ? !e[n] : !0), this.setState({ nestedShow: t });
  }
  _getNestedMap() {
    const { nestedShow: t } = this;
    return typeof t == "boolean" ? (this._items || []).reduce((e, n, i) => {
      const { key: r = this.getKey(i) } = n;
      return r !== void 0 && (e[r] = t), e;
    }, {}) : t;
  }
  _getClassName(t) {
    return [super._getClassName(t), "is-nested", t.level ? "is-nested-sub" : "is-nested-root"];
  }
  _getNestedProps(t, e, n, i) {
    const {
      parentKey: r,
      level: o = 0
    } = t;
    return H(this.constructor.inheritNestedProps.reduce((a, l) => (a[l] = t[l], a), {}), {
      level: o + 1,
      className: `is-nested-${i ? "expanded" : "collapsed"}`,
      items: e,
      parentKey: r ? `${r}:${n.key}` : n.key,
      nestedShow: this.nestedShow,
      onClickItem: this._handleClickNestedItem,
      onHoverItem: this._needHandleHover ? this._handleHoverNestedItem : void 0,
      beforeRenderItem: this._beforeRenderNestedItem
    }, n.listProps);
  }
  _renderNestedList(t, e, n, i) {
    if (!i && !t.renderCollapsedList)
      return;
    const r = this._getNestedProps(t, e, n, i), o = this.constructor;
    return /* @__PURE__ */ f(o, { ...r }, "nested");
  }
  _renderNestedToggle(t, e) {
    let n, i = "";
    const { toggleIcons: r = {} } = t;
    return typeof e == "boolean" ? (n = e ? r.expanded || /* @__PURE__ */ f("span", { className: "caret-down" }) : r.collapsed || /* @__PURE__ */ f("span", { className: "caret-right" }), i = `state is-${e ? "expanded" : "collapsed"}`) : (n = /* @__PURE__ */ f(J, { icon: r.normal }), i = "is-empty"), /* @__PURE__ */ f("span", { className: $(`${this.name}-toggle nested-toggle-icon`, i), children: n });
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n) ?? e;
    if (!i)
      return i;
    const { parentKey: r } = t, o = i.key;
    if (i.items) {
      const a = i.expanded ?? this.isExpanded(o, r);
      H(i, {
        expanded: a,
        className: ["is-nested", `is-nested-${a ? "show" : "hide"}`]
      }), this._hasNestedItems = !0;
    }
    return H(i, {
      _keyPath: `${r !== void 0 ? `${r}:` : ""}${o}`,
      parentKey: r
    });
  }
  _beforeRenderNestedItem(t) {
    return this._itemsMap.set(t._keyPath, t), t;
  }
  _renderItem(t, e, n) {
    this._hasNestedItems && e.type === "item" && e.toggleIcon === void 0 && (e.toggleIcon = this._renderNestedToggle(t, e.expanded));
    const i = e.items ? this._renderNestedList(t, e.items, e, e.expanded) : null;
    return e = H(e, {
      "z-parent": e.parentKey,
      "z-key-path": e._keyPath
    }, this._needHandleHover ? {
      onMouseEnter: this._handleHover,
      onMouseLeave: this._handleHover
    } : null, i ? { children: i } : null), this.isRoot && this._itemsMap.set(e._keyPath, e), super._renderItem(t, e, n);
  }
  _getItemFromEvent(t) {
    const e = super._getItemFromEvent(t);
    if (e)
      return (t.type === "mouseenter" || t.type === "mouseleave") && (e.hover = t.type === "mouseenter"), { ...e, parentKey: this.props.parentKey };
  }
  _toggleFromEvent(t) {
    const { item: e, hover: n, event: i, key: r, parentKey: o } = t, { nestedTrigger: a, nestedToggle: l } = this.props, c = i.target;
    if (!e.items || i.defaultPrevented || a === "hover" && n === void 0 || a === "click" && i.type !== "click" || c.closest(".not-nested-toggle") || l && !c.closest(l) || !l && c.closest("a,.btn,.item-checkbox") && !c.closest(".nested-toggle-icon,.item-icon"))
      return;
    const d = typeof n == "boolean" ? n : void 0;
    this.toggle(`${o !== void 0 ? `${o}:` : ""}${r}`, d);
  }
  _handleClickNestedItem(t) {
    var e;
    (e = this.props.onClickItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleHoverNestedItem(t) {
    var e;
    (e = this.props.onHoverItem) == null || e.call(this, t), this._toggleFromEvent(t);
  }
  _handleClick(t) {
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onClickItem) == null || n.call(this, e), this._controlled || this._toggleFromEvent(e));
  }
  _handleHover(t) {
    var n;
    const e = this._getItemFromEvent(t);
    e && ((n = this.props.onHoverItem) == null || n.call(this, e), !this._controlled && this.props.nestedTrigger === "hover" && this._toggleFromEvent(e));
  }
  _getProps(t) {
    const { level: e = 0, indent: n = 20, parentKey: i } = t, r = H(super._getProps(t), {
      "z-level": e,
      "z-parent-key": i,
      style: { "--list-nested-indent": `${e * n}px`, "--list-indent": `${n}px` },
      className: this._hasNestedItems ? "has-nested-items" : "no-nested-items"
    });
    return r.className = $(r.className), r;
  }
  _beforeRender(t) {
    return this._itemsMap.clear(), this._hasIcons = !1, this._hasNestedItems = !this.isRoot, this._needHandleHover = !!(t.onHoverItem || t.nestedTrigger === "hover"), super._beforeRender(t);
  }
};
ts.defaultProps = {
  defaultNestedShow: !1,
  level: 0,
  indent: 20
};
ts.inheritNestedProps = ["component", "name", "itemName", "itemKey", "indent", "hover", "divider", "multiline", "toggleIcons", "nestedToggle", "itemRender", "beforeRenderItem", "onToggle", "checkbox", "getItem"];
class ja extends B {
}
ja.NAME = "List";
ja.Component = me;
class Ka extends B {
}
Ka.NAME = "NestedList";
Ka.Component = ts;
let mt = class extends ts {
  _getClassName(t) {
    return $(super._getClassName(t), this._hasNestedItems ? "menu-nested" : "", t.className, t.popup ? "popup" : "", t.compact ? "compact" : "");
  }
};
mt.NAME = "menu";
mt.TAG = "menu";
mt.inheritNestedProps = [...ts.inheritNestedProps, "compact"];
mt.ItemComponents = {
  ...ts.ItemComponents,
  item: [En, { innerComponent: "a" }]
};
var qa = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, ss = (s, t, e) => (qa(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Js = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Ao = (s, t, e) => (qa(s, t, "access private method"), e), Pi, ln, cn, hn, Di;
let Mr = class extends V {
  constructor(t) {
    super(t), Js(this, hn), this._input = Y(), this._timer = 0, Js(this, Pi, (e) => {
      const n = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: r } = this.props;
        r == null || r(e), this.focus(), n.trim() !== "" && (i == null || i("", e));
      });
    }), Js(this, ln, (e) => {
      const n = this.state.value, i = e.target.value, { onChange: r } = this.props;
      this.setState({ value: i }, () => {
        !r || n === i || (Ao(this, hn, Di).call(this), this._timer = window.setTimeout(() => {
          r(i, e), this._timer = 0;
        }, this.props.delay || 0));
      });
    }), Js(this, cn, (e) => {
      const n = e.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, this._gid = t.id || `search-box-${he()}`;
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
  componentWillUnmount() {
    Ao(this, hn, Di).call(this);
  }
  render(t, e) {
    const { style: n, className: i, rootClass: r, rootStyle: o, readonly: a, disabled: l, circle: c, placeholder: d, mergeIcon: h, searchIcon: m, clearIcon: p, value: g } = t, { focus: _, value: v } = e, { id: y } = this, b = g ?? v, k = typeof b != "string" || !b.trim().length;
    let x, w, N;
    return m && (N = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(J, { icon: m })), !h && m && (x = /* @__PURE__ */ f("label", { for: y, class: "input-control-prefix", children: N }, "prefix")), p && !k ? w = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: ss(this, Pi),
        children: p === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(J, { icon: p })
      }
    ) : h && m && (w = N), w && (w = /* @__PURE__ */ f("label", { for: y, class: "input-control-suffix", children: w }, "suffix")), /* @__PURE__ */ f("div", { class: $("search-box input-control", r, { focus: _, empty: k, "has-prefix-icon": x, "has-suffix-icon": w }), style: o, children: [
      x,
      /* @__PURE__ */ f(
        "input",
        {
          ref: this._input,
          id: y,
          type: "text",
          class: $("form-control", i, { "rounded-full": c }),
          style: n,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: b,
          onInput: ss(this, ln),
          onChange: ss(this, ln),
          onFocus: ss(this, cn),
          onBlur: ss(this, cn)
        }
      ),
      w
    ] });
  }
};
Pi = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
cn = /* @__PURE__ */ new WeakMap();
hn = /* @__PURE__ */ new WeakSet();
Di = function() {
  this._timer && clearTimeout(this._timer), this._timer = 0;
};
Mr.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
let Bt = class extends mt {
  constructor(t) {
    super(t), this._handleSearchChange = (e) => {
      const n = this.constructor.getSearchKeys(e);
      this._searchKeys = n, this.setState({ search: n.join(" ") });
    }, this._searchControlled = t.search !== void 0, this.state.search = this._searchControlled ? t.search : t.defaultSearch, this._searchKeys = this.constructor.getSearchKeys(this.state.search), this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
  }
  componentWillUpdate(t) {
    this.isRoot && (this._searchControlled = t.search !== void 0, this._searchControlled && t.search !== this.props.search && (this._searchKeys = this.constructor.getSearchKeys(t.search)));
  }
  componentDidMount() {
    super.componentDidMount(), this._updateMatchedParents();
  }
  componentDidUpdate() {
    super.componentDidUpdate(), this._updateMatchedParents();
  }
  isExpanded(t, e, n) {
    return this.props.expandOnSearch && this._searchKeys.length ? !0 : super.isExpanded(t, e, n);
  }
  _updateMatchedParents() {
    this.isRoot && u(this.element).find(".item.is-nested.is-not-match").filter((t, e) => this._matchedParents.has(e.getAttribute("z-key-path") || "")).addClass("has-match-child");
  }
  _isItemMatch(t, e, n, i) {
    const { isItemMatch: r } = t, o = r ? r.call(this, e, this._searchKeys, n, i) : this.constructor.isItemMatch(e, this._searchKeys, t.searchProps);
    if (this.isRoot && o && i !== void 0) {
      let a = "";
      String(i).split(":").forEach((l) => {
        a += `${a.length ? ":" : ""}${l}`, this._matchedParents.add(a);
      });
    }
    return o;
  }
  _isNestedItemMatch(t, e, n, i) {
    return this._isItemMatch(this.props, t, n, i);
  }
  _getNestedProps(t, e, n, i) {
    const r = super._getNestedProps(t, e, n, i);
    return this.isRoot && (r.isItemMatch = this._isNestedItemMatch, r.search = this._searchKeys.join(" ")), r;
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n);
    return i && (i.hidden = !this._isItemMatch(t, e, n, t.parentKey), i);
  }
  _renderItem(t, e, n) {
    return e.className = [e.className, e.hidden ? "is-not-match" : ""], t.underlineKeys && this._searchKeys.length && ["text", "title", "subtitle", "content"].forEach((i) => {
      typeof e[i] == "string" && (e[i] = this.constructor.underlineKeys(this._searchKeys, [e[i]]));
    }), super._renderItem(t, e, n);
  }
  _getChildren(t) {
    let e = super._getChildren(t);
    const { searchBox: n } = t;
    if (!n)
      return e;
    e = Cs(e);
    const i = {
      onChange: this._handleSearchChange
    };
    return typeof n == "object" && u.extend(i, n), this._searchControlled && (i.value = this._searchKeys.join(" "), i.disabled = !0), e.push(/* @__PURE__ */ f(Mr, { ...i }, "search")), e;
  }
  _getClassName(t) {
    const e = this.isRoot && this._searchKeys.length;
    return [super._getClassName(t), "search-menu", t.searchBox ? `search-menu-on-${t.searchPlacement || "top"}` : "", e ? "is-search-mode" : "", e && t.expandOnSearch ? "no-toggle-on-search" : ""];
  }
  _beforeRender(t) {
    return this.isRoot && (this._matchedParents = /* @__PURE__ */ new Set()), super._beforeRender(t);
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
    return u.unique(t.toLowerCase().split(" ").filter((e) => e.length));
  }
  static underlineKeys(t, e, n = "is-match-keys") {
    return t.reduce((i, r) => [...i].reduce((o, a) => {
      if (typeof a != "string")
        return o.push(a), o;
      const l = a.toLowerCase().split(r);
      if (l.length === 1)
        return o.push(a), o;
      let c = 0;
      return l.forEach((d, h) => {
        h && (o.push(/* @__PURE__ */ f("span", { class: n, children: a.substring(c, c + r.length) })), c += r.length), o.push(a.substring(c, c + d.length)), c += d.length;
      }), o;
    }, []), e);
  }
};
Bt.inheritNestedProps = [...mt.inheritNestedProps, "isItemMatch", "search", "underlineKeys"];
Bt.defaultProps = {
  ...mt.defaultProps,
  defaultNestedShow: !0
};
class Ga extends B {
}
Ga.NAME = "Menu";
Ga.Component = mt;
class Ya extends B {
}
Ya.NAME = "SearchMenu";
Ya.Component = Bt;
function Qh({
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
  iconClass: d,
  ...h
}) {
  let m;
  a === !0 ? m = /* @__PURE__ */ f(lt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : ft(a) ? m = a : typeof a == "object" && (m = /* @__PURE__ */ f(lt, { ...a, onClick: l }));
  const p = ft(e) ? e : e ? /* @__PURE__ */ f(pt, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: $("alert", s), style: t, ...h, children: [
    /* @__PURE__ */ f(J, { icon: c, className: $("alert-icon", d) }),
    ft(i) ? i : /* @__PURE__ */ f("div", { className: $("alert-content", r), children: [
      ft(n) ? n : n && /* @__PURE__ */ f("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    m,
    o
  ] });
}
function td(s) {
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
function ed({
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
    Qh,
    {
      className: $("messager", r, t, n === !0 ? td(e) : n, i ? "in" : ""),
      ...a
    }
  );
}
var sd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, nd = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ns = (s, t, e) => (sd(s, t, "access private method"), e), ye, Oe;
class Ir extends B {
  constructor() {
    super(...arguments), nd(this, ye), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), ns(this, ye, Oe).call(this, () => {
      this._show = !0, this.render(), ns(this, ye, Oe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && ns(this, ye, Oe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && ns(this, ye, Oe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), ns(this, ye, Oe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ye = /* @__PURE__ */ new WeakSet();
Oe = function(s, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    s(), this._showTimer = 0;
  }, t);
};
Ir.NAME = "MessagerItem";
Ir.Component = ed;
var Ar = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, $e = (s, t, e) => (Ar(s, t, "read from private field"), e ? e.call(s) : t.get(s)), Qs = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, dn = (s, t, e, n) => (Ar(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Xa = (s, t, e) => (Ar(s, t, "access private method"), e), Ve, qt, Li, Za, Pr, Ja;
const ti = class Qa extends dt {
  constructor() {
    super(...arguments), Qs(this, Li), Qs(this, Pr), Qs(this, Ve, void 0), Qs(this, qt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = $e(this, qt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Xa(this, Li, Za).call(this).show();
  }
  hide() {
    var t;
    (t = $e(this, qt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...n } = t, i = Qa.ensure(e || "body", { key: `messager_${he()}`, ...n });
    return i.hide(), i.show(), i;
  }
};
Ve = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakSet();
Za = function() {
  if ($e(this, qt))
    $e(this, qt).setOptions(this.options);
  else {
    const s = Xa(this, Pr, Ja).call(this), t = new Ir(s, this.options);
    t.on("hidden", () => {
      t.destroy(), s == null || s.remove(), dn(this, Ve, void 0), dn(this, qt, void 0);
    }), dn(this, qt, t);
  }
  return $e(this, qt);
};
Pr = /* @__PURE__ */ new WeakSet();
Ja = function() {
  if ($e(this, Ve))
    return $e(this, Ve);
  const { placement: s = "top" } = this.options;
  let t = this.$element.find(`.messagers-${s}`);
  t.length || (t = u(`<div class="messagers messagers-${s}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), dn(this, Ve, e[0])), e[0];
};
ti.NAME = "messager";
ti.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
ti.MULTI_INSTANCE = !0;
let mf = ti;
let Dr = class extends V {
  render(t) {
    const { percent: e = 50, size: n = 24, circleBg: i, circleColor: r, text: o, className: a, textStyle: l, textX: c, textY: d, children: h } = t, m = n / 2;
    let { circleWidth: p = 0.1 } = t;
    p < 1 && (p = n * p);
    const g = (n - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: m, cy: m, r: g, "stroke-width": p, stroke: r, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      o ? /* @__PURE__ */ f("text", { x: c ?? m, y: d ?? m + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: o === !0 ? Math.round(e) : o }) : null,
      h
    ] });
  }
};
Dr.defaultProps = {
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class tl extends B {
}
tl.NAME = "ProgressCircle";
tl.Component = Dr;
const is = '[droppable="true"]';
class ei extends dt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: n, beforeDrag: i } = this.options, r = u(t.target), o = r.closest(e), a = o[0];
      !a || n && !r.closest(n).length || i && i.call(this, t, a) === !1 || (o.attr("draggable", "true"), this._setState({ dragging: a }));
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
      const { $element: r } = this, { target: o, selector: a, draggingClass: l, droppableClass: c, hasDraggingClass: d } = n;
      l && (this.$element.find(l).removeClass(l), u(e).addClass(l));
      const h = typeof o == "function" ? u(o.call(this, e)) : r.find(o || a || is);
      c && (r.find(c).removeClass(c), h.addClass(c)), d && r.addClass(d), r.find(is).removeAttr("droppable"), h.attr("droppable", "true"), this._$targets = h;
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
      const { dragElement: e } = this, n = u(t.target).closest(is)[0], i = this.state.dropping;
      if (!(!e || !n)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== n) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(n).addClass(a)), this._setState({ dropping: n }), (r = this.options.onDragEnter) == null || r.call(this, t, e, n);
        }
        (o = this.options.onDragOver) == null || o.call(this, t, e, n);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, n = u(t.target).filter(is)[0];
      !e || !n || (t.preventDefault(), this._leaveDropElement(t, n), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var n;
      const e = u(t.target).closest(is)[0];
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
ei.NAME = "Draggable";
ei.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const id = '[moveable="true"]';
class si extends dt {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: n, handle: i, onMoveStart: r } = e, o = u(t.target), a = n === "self" ? this.$element : o.closest(n), l = a[0];
      if (!l || i && !o.closest(i).length || r && r.call(this, t, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: c, hasMovingClass: d } = e;
      c && a.addClass(c), d && this.$element.addClass(d), this._setState(t, l), u(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
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
    var l;
    t.preventDefault();
    let n = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const c = u(e);
      if (this.options.move === !0) {
        const h = c.css("position");
        n.strategy = h === "fixed" || h === "absolute" ? "position" : "transform";
      } else
        n.strategy = this.options.move || "none";
      const d = c.position();
      n = u.extend(n, {
        target: e,
        startX: n.x,
        startY: n.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: d.left,
        startTop: d.top,
        left: d.left,
        top: d.top,
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
      });
    } else if (i) {
      const c = n.x - i.startX, d = n.y - i.startY;
      n = u.extend({}, i, n, {
        deltaX: c,
        deltaY: d,
        left: i.startLeft + c,
        top: i.startTop + d
      });
    }
    this._state = n;
    const { strategy: r, target: o } = n, a = u(o);
    r === "position" ? a.css({ left: n.left, top: n.top }) : r === "transform" ? a.css("transform", `translate(${n.deltaX}px, ${n.deltaY}px)`) : r === "scroll" && (o.scrollLeft = n.scrollLeft - n.deltaX, o.scrollTop = n.scrollTop - n.deltaY), (l = this.options.onChange) == null || l.call(this, n, i, t);
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
si.NAME = "Moveable";
si.DEFAULT = {
  selector: id,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
const Lr = class el extends dt {
  async afterInit() {
    const t = await el.loadModule();
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
Lr.NAME = "Sortable";
Lr.DEFAULT = {
  animation: 150
};
let _f = Lr;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
var kt = typeof window < "u" ? window : null, Rr = kt === null, xs = Rr ? void 0 : kt.document, Nt = "addEventListener", Et = "removeEventListener", gi = "getBoundingClientRect", rs = "_a", Tt = "_b", Ft = "_c", tn = "horizontal", Mt = function() {
  return !1;
}, rd = Rr ? "calc" : ["", "-webkit-", "-moz-", "-o-"].filter(function(s) {
  var t = xs.createElement("div");
  return t.style.cssText = "width:" + s + "calc(9px)", !!t.style.length;
}).shift() + "calc", sl = function(s) {
  return typeof s == "string" || s instanceof String;
}, Po = function(s) {
  if (sl(s)) {
    var t = xs.querySelector(s);
    if (!t)
      throw new Error("Selector " + s + " did not match a DOM element");
    return t;
  }
  return s;
}, ot = function(s, t, e) {
  var n = s[t];
  return n !== void 0 ? n : e;
}, en = function(s, t, e, n) {
  if (t) {
    if (n === "end")
      return 0;
    if (n === "center")
      return s / 2;
  } else if (e) {
    if (n === "start")
      return 0;
    if (n === "center")
      return s / 2;
  }
  return s;
}, od = function(s, t) {
  var e = xs.createElement("div");
  return e.className = "gutter gutter-" + t, e;
}, ad = function(s, t, e) {
  var n = {};
  return sl(t) ? n[s] = t : n[s] = rd + "(" + t + "% - " + e + "px)", n;
}, ld = function(s, t) {
  var e;
  return e = {}, e[s] = t + "px", e;
}, nl = function(s, t) {
  if (t === void 0 && (t = {}), Rr)
    return {};
  var e = s, n, i, r, o, a, l;
  Array.from && (e = Array.from(e));
  var c = Po(e[0]), d = c.parentNode, h = getComputedStyle ? getComputedStyle(d) : null, m = h ? h.flexDirection : null, p = ot(t, "sizes") || e.map(function() {
    return 100 / e.length;
  }), g = ot(t, "minSize", 100), _ = Array.isArray(g) ? g : e.map(function() {
    return g;
  }), v = ot(t, "maxSize", 1 / 0), y = Array.isArray(v) ? v : e.map(function() {
    return v;
  }), b = ot(t, "expandToMin", !1), k = ot(t, "gutterSize", 10), x = ot(t, "gutterAlign", "center"), w = ot(t, "snapOffset", 30), N = Array.isArray(w) ? w : e.map(function() {
    return w;
  }), L = ot(t, "dragInterval", 1), R = ot(t, "direction", tn), W = ot(
    t,
    "cursor",
    R === tn ? "col-resize" : "row-resize"
  ), A = ot(t, "gutter", od), z = ot(
    t,
    "elementStyle",
    ad
  ), G = ot(t, "gutterStyle", ld);
  R === tn ? (n = "width", i = "clientX", r = "left", o = "right", a = "clientWidth") : R === "vertical" && (n = "height", i = "clientY", r = "top", o = "bottom", a = "clientHeight");
  function T(M, C, E, P) {
    var nt = z(n, C, E, P);
    Object.keys(nt).forEach(function(X) {
      M.style[X] = nt[X];
    });
  }
  function K(M, C, E) {
    var P = G(n, C, E);
    Object.keys(P).forEach(function(nt) {
      M.style[nt] = P[nt];
    });
  }
  function tt() {
    return l.map(function(M) {
      return M.size;
    });
  }
  function _t(M) {
    return "touches" in M ? M.touches[0][i] : M[i];
  }
  function Ys(M) {
    var C = l[this.a], E = l[this.b], P = C.size + E.size;
    C.size = M / this.size * P, E.size = P - M / this.size * P, T(C.element, C.size, this[Tt], C.i), T(E.element, E.size, this[Ft], E.i);
  }
  function Ec(M) {
    var C, E = l[this.a], P = l[this.b];
    this.dragging && (C = _t(M) - this.start + (this[Tt] - this.dragOffset), L > 1 && (C = Math.round(C / L) * L), C <= E.minSize + E.snapOffset + this[Tt] ? C = E.minSize + this[Tt] : C >= this.size - (P.minSize + P.snapOffset + this[Ft]) && (C = this.size - (P.minSize + this[Ft])), C >= E.maxSize - E.snapOffset + this[Tt] ? C = E.maxSize + this[Tt] : C <= this.size - (P.maxSize - P.snapOffset + this[Ft]) && (C = this.size - (P.maxSize + this[Ft])), Ys.call(this, C), ot(t, "onDrag", Mt)(tt()));
  }
  function lo() {
    var M = l[this.a].element, C = l[this.b].element, E = M[gi](), P = C[gi]();
    this.size = E[n] + P[n] + this[Tt] + this[Ft], this.start = E[r], this.end = E[o];
  }
  function Tc(M) {
    if (!getComputedStyle)
      return null;
    var C = getComputedStyle(M);
    if (!C)
      return null;
    var E = M[a];
    return E === 0 ? null : (R === tn ? E -= parseFloat(C.paddingLeft) + parseFloat(C.paddingRight) : E -= parseFloat(C.paddingTop) + parseFloat(C.paddingBottom), E);
  }
  function co(M) {
    var C = Tc(d);
    if (C === null || _.reduce(function(X, yt) {
      return X + yt;
    }, 0) > C)
      return M;
    var E = 0, P = [], nt = M.map(function(X, yt) {
      var _e = C * X / 100, Xs = en(
        k,
        yt === 0,
        yt === M.length - 1,
        x
      ), Zs = _[yt] + Xs;
      return _e < Zs ? (E += Zs - _e, P.push(0), Zs) : (P.push(_e - Zs), _e);
    });
    return E === 0 ? M : nt.map(function(X, yt) {
      var _e = X;
      if (E > 0 && P[yt] - E > 0) {
        var Xs = Math.min(
          E,
          P[yt] - E
        );
        E -= Xs, _e = X - Xs;
      }
      return _e / C * 100;
    });
  }
  function Mc() {
    var M = this, C = l[M.a].element, E = l[M.b].element;
    M.dragging && ot(t, "onDragEnd", Mt)(tt()), M.dragging = !1, kt[Et]("mouseup", M.stop), kt[Et]("touchend", M.stop), kt[Et]("touchcancel", M.stop), kt[Et]("mousemove", M.move), kt[Et]("touchmove", M.move), M.stop = null, M.move = null, C[Et]("selectstart", Mt), C[Et]("dragstart", Mt), E[Et]("selectstart", Mt), E[Et]("dragstart", Mt), C.style.userSelect = "", C.style.webkitUserSelect = "", C.style.MozUserSelect = "", C.style.pointerEvents = "", E.style.userSelect = "", E.style.webkitUserSelect = "", E.style.MozUserSelect = "", E.style.pointerEvents = "", M.gutter.style.cursor = "", M.parent.style.cursor = "", xs.body.style.cursor = "";
  }
  function Ic(M) {
    if (!("button" in M && M.button !== 0)) {
      var C = this, E = l[C.a].element, P = l[C.b].element;
      C.dragging || ot(t, "onDragStart", Mt)(tt()), M.preventDefault(), C.dragging = !0, C.move = Ec.bind(C), C.stop = Mc.bind(C), kt[Nt]("mouseup", C.stop), kt[Nt]("touchend", C.stop), kt[Nt]("touchcancel", C.stop), kt[Nt]("mousemove", C.move), kt[Nt]("touchmove", C.move), E[Nt]("selectstart", Mt), E[Nt]("dragstart", Mt), P[Nt]("selectstart", Mt), P[Nt]("dragstart", Mt), E.style.userSelect = "none", E.style.webkitUserSelect = "none", E.style.MozUserSelect = "none", E.style.pointerEvents = "none", P.style.userSelect = "none", P.style.webkitUserSelect = "none", P.style.MozUserSelect = "none", P.style.pointerEvents = "none", C.gutter.style.cursor = W, C.parent.style.cursor = W, xs.body.style.cursor = W, lo.call(C), C.dragOffset = _t(M) - C.end;
    }
  }
  p = co(p);
  var ge = [];
  l = e.map(function(M, C) {
    var E = {
      element: Po(M),
      size: p[C],
      minSize: _[C],
      maxSize: y[C],
      snapOffset: N[C],
      i: C
    }, P;
    if (C > 0 && (P = {
      a: C - 1,
      b: C,
      dragging: !1,
      direction: R,
      parent: d
    }, P[Tt] = en(
      k,
      C - 1 === 0,
      !1,
      x
    ), P[Ft] = en(
      k,
      !1,
      C === e.length - 1,
      x
    ), m === "row-reverse" || m === "column-reverse")) {
      var nt = P.a;
      P.a = P.b, P.b = nt;
    }
    if (C > 0) {
      var X = A(C, R, E.element);
      K(X, k, C), P[rs] = Ic.bind(P), X[Nt](
        "mousedown",
        P[rs]
      ), X[Nt](
        "touchstart",
        P[rs]
      ), d.insertBefore(X, E.element), P.gutter = X;
    }
    return T(
      E.element,
      E.size,
      en(
        k,
        C === 0,
        C === e.length - 1,
        x
      ),
      C
    ), C > 0 && ge.push(P), E;
  });
  function ho(M) {
    var C = M.i === ge.length, E = C ? ge[M.i - 1] : ge[M.i];
    lo.call(E);
    var P = C ? E.size - M.minSize - E[Ft] : M.minSize + E[Tt];
    Ys.call(E, P);
  }
  l.forEach(function(M) {
    var C = M.element[gi]()[n];
    C < M.minSize && (b ? ho(M) : M.minSize = C);
  });
  function Ac(M) {
    var C = co(M);
    C.forEach(function(E, P) {
      if (P > 0) {
        var nt = ge[P - 1], X = l[nt.a], yt = l[nt.b];
        X.size = C[P - 1], yt.size = E, T(X.element, X.size, nt[Tt], X.i), T(yt.element, yt.size, nt[Ft], yt.i);
      }
    });
  }
  function Pc(M, C) {
    ge.forEach(function(E) {
      if (C !== !0 ? E.parent.removeChild(E.gutter) : (E.gutter[Et](
        "mousedown",
        E[rs]
      ), E.gutter[Et](
        "touchstart",
        E[rs]
      )), M !== !0) {
        var P = z(
          n,
          E.a.size,
          E[Tt]
        );
        Object.keys(P).forEach(function(nt) {
          l[E.a].element.style[nt] = "", l[E.b].element.style[nt] = "";
        });
      }
    });
  }
  return {
    setSizes: Ac,
    getSizes: tt,
    collapse: function(C) {
      ho(l[C]);
    },
    destroy: Pc,
    parent: d,
    pairs: ge
  };
};
function Do(s, t, e, n) {
  for (t = t - (e - 1) * n; s.length < e; )
    s.push(void 0);
  s = s.splice(0, e);
  const i = [], r = [];
  let o = 0;
  if (s.forEach((a, l) => {
    if (a == null) {
      r.push(l);
      return;
    }
    const [c, d] = Zn(a);
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
class zr extends dt {
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
    return u(this._elements[t])[this.isVertical ? "height" : "width"]() < 1;
  }
  /**
   * setSizes behaves the same as the sizes configuration option, passing an array of percents or CSS values.
   * It updates the sizes of the elements in the split.
   *
   * @param sizes Sizes of the elements in the split.
   */
  setSizes(t, e) {
    e || (t = Do(t, this.totalSize, this.count, this.options.gutterSize)), this._split.setSizes(t), this._update();
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
    const e = this.getSizes(), n = this._sizeBack[t];
    if (n) {
      e[t] = n[t];
      const i = t === this.count - 1 ? t - 1 : t + 1;
      e[i] = n[i];
    } else
      e[t] = 50;
    this.setSizes(e);
  }
  toggle(t) {
    this.isCollapsed(t) ? this.expand(t) : this.collapse(t);
  }
  afterInit() {
    const { elements: t = ".split-cell", toggleBtn: e, vertical: n, sizes: i, gutterSize: r = 8, animation: o, dblClickToggle: a, ...l } = this.options, c = (Array.isArray(t) ? t : [t]).reduce((m, p) => (p && (p instanceof HTMLElement ? m.push(p) : (typeof p == "string" ? this.$element.children(p) : u(p)).each((g, _) => {
      m.push(_);
    })), m), []);
    c.forEach((m) => u(m).addClass("split-cell")), this._elements = c, this._handleDragEnd = this._handleDragEnd.bind(this), this._createGutter = this._createGutter.bind(this);
    let d;
    i && (d = Do(i, this.totalSize, c.length, r)), this._split = nl(c, {
      direction: n ? "vertical" : "horizontal",
      sizes: d,
      gutterSize: r,
      ...l,
      onDragEnd: this._handleDragEnd,
      gutter: this._createGutter
    });
    const h = (m) => {
      const p = m.z("index"), { count: g } = this;
      this.toggle(p === g - 1 && g > 2 ? p : p - 1);
    };
    e && this.on("click", (m) => {
      const p = u(m.target).closest(".gutter-toggle");
      p.length && h(p.parent());
    }), a && this.on("dblclick", (m) => {
      const p = u(m.target).closest(".gutter");
      p.length && h(p);
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
    const { animation: e, vertical: n, gutterSize: i } = this.options, r = this.isVertical || !!n;
    this.$element.css("--split-gutter-size", `${i}px`).toggleClass("split-vert", r).toggleClass("split-horz", !r).toggleClass("has-animation", !!e), this._elements.forEach((o, a) => {
      const l = this.isCollapsed(a), c = u(this._elements[a]).toggleClass("is-collapsed", l);
      c.prev(".gutter").toggleClass("is-next-collapsed", l), c.next(".gutter").toggleClass("is-prev-collapsed", l);
    });
  }
  _createGutter(t, e) {
    const { toggleBtn: n } = this.options, { count: i } = this, r = u(`<div class="gutter gutter-${e === "vertical" ? "vert" : "horz"}" />`).z("index", t).toggleClass("is-first", t === 1).toggleClass("is-last", t === i - 1);
    return (n === !0 || Array.isArray(n) && n[t]) && r.append('<button class="gutter-toggle" type="button"><span class="chevron-left"></span></button>'), r[0];
  }
  _handleDragEnd(t) {
    var e, n;
    this._update(), (n = (e = this.options).onDragEnd) == null || n.call(e, t);
  }
}
zr.NAME = "Split";
zr.DEFAULT = {
  gutterSize: 8,
  dblClickToggle: !0
};
zr.SplitJS = nl;
let il = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const _i = "```ZUI_STR\n";
var Ms, ke, je, Dt, Ke, qe, un;
const ao = class ao {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    F(this, qe);
    F(this, Ms, void 0);
    F(this, ke, void 0);
    F(this, je, void 0);
    F(this, Dt, void 0);
    F(this, Ke, void 0);
    U(this, Ms, e), U(this, je, t ?? il()), U(this, ke, `ZUI_STORE:${D(this, je)}`), U(this, Dt, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return D(this, Ms);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (D(this, Ke) || U(this, Ke, new ao(D(this, je), "session")), D(this, Ke));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const n = D(this, Dt).getItem(Re(this, qe, un).call(this, t));
    if (typeof n == "string") {
      if (n.startsWith(_i))
        return n.substring(_i.length);
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
    D(this, Dt).setItem(Re(this, qe, un).call(this, t), typeof e == "string" ? `${_i}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    D(this, Dt).removeItem(Re(this, qe, un).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < D(this, Dt).length; e++) {
      const n = D(this, Dt).key(e);
      if (n != null && n.startsWith(D(this, ke))) {
        const i = D(this, Dt).getItem(n);
        typeof i == "string" && t(n.substring(D(this, ke).length + 1), JSON.parse(i));
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
Ms = new WeakMap(), ke = new WeakMap(), je = new WeakMap(), Dt = new WeakMap(), Ke = new WeakMap(), qe = new WeakSet(), un = function(t) {
  return `${D(this, ke)}:${t}`;
};
let Tn = ao;
const we = new Tn("DEFAULT");
function cd(s, t = "local") {
  return new Tn(s, t);
}
Object.assign(we, { create: cd });
class rl extends B {
}
rl.NAME = "Avatar";
rl.Component = Hs;
Le(Yh);
class ol extends B {
}
ol.NAME = "BtnGroup";
ol.Component = Pt;
const hd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BtnGroup: Pt
}, Symbol.toStringTag, { value: "Module" }));
Le(hd);
const Ri = Symbol("EVENT_PICK");
class Wr extends V {
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
    return $(
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
      if (i === Ri)
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
    i && t.state.value !== n.value && (this._skipTriggerChange !== n.value && u(`#${e}`).trigger("change", Ri), this._skipTriggerChange = !1);
  }
  render(t) {
    return Wt(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
const Ze = Math.min, Se = Math.max, Mn = Math.round, sn = Math.floor, de = (s) => ({
  x: s,
  y: s
}), dd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ud = {
  start: "end",
  end: "start"
};
function zi(s, t, e) {
  return Se(s, Ze(t, e));
}
function Bs(s, t) {
  return typeof s == "function" ? s(t) : s;
}
function Me(s) {
  return s.split("-")[0];
}
function Fs(s) {
  return s.split("-")[1];
}
function al(s) {
  return s === "x" ? "y" : "x";
}
function Or(s) {
  return s === "y" ? "height" : "width";
}
function ni(s) {
  return ["top", "bottom"].includes(Me(s)) ? "y" : "x";
}
function Hr(s) {
  return al(ni(s));
}
function fd(s, t, e) {
  e === void 0 && (e = !1);
  const n = Fs(s), i = Hr(s), r = Or(i);
  let o = i === "x" ? n === (e ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return t.reference[r] > t.floating[r] && (o = In(o)), [o, In(o)];
}
function pd(s) {
  const t = In(s);
  return [Wi(s), t, Wi(t)];
}
function Wi(s) {
  return s.replace(/start|end/g, (t) => ud[t]);
}
function md(s, t, e) {
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
function gd(s, t, e, n) {
  const i = Fs(s);
  let r = md(Me(s), e === "start", n);
  return i && (r = r.map((o) => o + "-" + i), t && (r = r.concat(r.map(Wi)))), r;
}
function In(s) {
  return s.replace(/left|right|bottom|top/g, (t) => dd[t]);
}
function _d(s) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...s
  };
}
function ll(s) {
  return typeof s != "number" ? _d(s) : {
    top: s,
    right: s,
    bottom: s,
    left: s
  };
}
function An(s) {
  return {
    ...s,
    top: s.y,
    left: s.x,
    right: s.x + s.width,
    bottom: s.y + s.height
  };
}
function Lo(s, t, e) {
  let {
    reference: n,
    floating: i
  } = s;
  const r = ni(t), o = Hr(t), a = Or(o), l = Me(t), c = r === "y", d = n.x + n.width / 2 - i.width / 2, h = n.y + n.height / 2 - i.height / 2, m = n[a] / 2 - i[a] / 2;
  let p;
  switch (l) {
    case "top":
      p = {
        x: d,
        y: n.y - i.height
      };
      break;
    case "bottom":
      p = {
        x: d,
        y: n.y + n.height
      };
      break;
    case "right":
      p = {
        x: n.x + n.width,
        y: h
      };
      break;
    case "left":
      p = {
        x: n.x - i.width,
        y: h
      };
      break;
    default:
      p = {
        x: n.x,
        y: n.y
      };
  }
  switch (Fs(t)) {
    case "start":
      p[o] -= m * (e && c ? -1 : 1);
      break;
    case "end":
      p[o] += m * (e && c ? -1 : 1);
      break;
  }
  return p;
}
const yd = async (s, t, e) => {
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
    x: d,
    y: h
  } = Lo(c, n, l), m = n, p = {}, g = 0;
  for (let _ = 0; _ < a.length; _++) {
    const {
      name: v,
      fn: y
    } = a[_], {
      x: b,
      y: k,
      data: x,
      reset: w
    } = await y({
      x: d,
      y: h,
      initialPlacement: n,
      placement: m,
      strategy: i,
      middlewareData: p,
      rects: c,
      platform: o,
      elements: {
        reference: s,
        floating: t
      }
    });
    if (d = b ?? d, h = k ?? h, p = {
      ...p,
      [v]: {
        ...p[v],
        ...x
      }
    }, w && g <= 50) {
      g++, typeof w == "object" && (w.placement && (m = w.placement), w.rects && (c = w.rects === !0 ? await o.getElementRects({
        reference: s,
        floating: t,
        strategy: i
      }) : w.rects), {
        x: d,
        y: h
      } = Lo(c, m, l)), _ = -1;
      continue;
    }
  }
  return {
    x: d,
    y: h,
    placement: m,
    strategy: i,
    middlewareData: p
  };
};
async function cl(s, t) {
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
    rootBoundary: d = "viewport",
    elementContext: h = "floating",
    altBoundary: m = !1,
    padding: p = 0
  } = Bs(t, s), g = ll(p), v = a[m ? h === "floating" ? "reference" : "floating" : h], y = An(await r.getClippingRect({
    element: (e = await (r.isElement == null ? void 0 : r.isElement(v))) == null || e ? v : v.contextElement || await (r.getDocumentElement == null ? void 0 : r.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: d,
    strategy: l
  })), b = h === "floating" ? {
    ...o.floating,
    x: n,
    y: i
  } : o.reference, k = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(a.floating)), x = await (r.isElement == null ? void 0 : r.isElement(k)) ? await (r.getScale == null ? void 0 : r.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, w = An(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect: b,
    offsetParent: k,
    strategy: l
  }) : b);
  return {
    top: (y.top - w.top + g.top) / x.y,
    bottom: (w.bottom - y.bottom + g.bottom) / x.y,
    left: (y.left - w.left + g.left) / x.x,
    right: (w.right - y.right + g.right) / x.x
  };
}
const Oi = (s) => ({
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
      padding: c = 0
    } = Bs(s, t) || {};
    if (l == null)
      return {};
    const d = ll(c), h = {
      x: e,
      y: n
    }, m = Hr(i), p = Or(m), g = await o.getDimensions(l), _ = m === "y", v = _ ? "top" : "left", y = _ ? "bottom" : "right", b = _ ? "clientHeight" : "clientWidth", k = r.reference[p] + r.reference[m] - h[m] - r.floating[p], x = h[m] - r.reference[m], w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(l));
    let N = w ? w[b] : 0;
    (!N || !await (o.isElement == null ? void 0 : o.isElement(w))) && (N = a.floating[b] || r.floating[p]);
    const L = k / 2 - x / 2, R = N / 2 - g[p] / 2 - 1, W = Ze(d[v], R), A = Ze(d[y], R), z = W, G = N - g[p] - A, T = N / 2 - g[p] / 2 + L, K = zi(z, T, G), _t = Fs(i) != null && T != K && r.reference[p] / 2 - (T < z ? W : A) - g[p] / 2 < 0 ? T < z ? z - T : G - T : 0;
    return {
      [m]: h[m] - _t,
      data: {
        [m]: K,
        centerOffset: T - K + _t
      }
    };
  }
}), ii = function(s) {
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
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: p = "none",
        flipAlignment: g = !0,
        ..._
      } = Bs(s, t), v = Me(n), y = Me(o) === o, b = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = h || (y || !g ? [In(o)] : pd(o));
      !h && p !== "none" && k.push(...gd(o, g, p, b));
      const x = [o, ...k], w = await cl(t, _), N = [];
      let L = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (c && N.push(w[v]), d) {
        const z = fd(n, r, b);
        N.push(w[z[0]], w[z[1]]);
      }
      if (L = [...L, {
        placement: n,
        overflows: N
      }], !N.every((z) => z <= 0)) {
        var R, W;
        const z = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, G = x[z];
        if (G)
          return {
            data: {
              index: z,
              overflows: L
            },
            reset: {
              placement: G
            }
          };
        let T = (W = L.filter((K) => K.overflows[0] <= 0).sort((K, tt) => K.overflows[1] - tt.overflows[1])[0]) == null ? void 0 : W.placement;
        if (!T)
          switch (m) {
            case "bestFit": {
              var A;
              const K = (A = L.map((tt) => [tt.placement, tt.overflows.filter((_t) => _t > 0).reduce((_t, Ys) => _t + Ys, 0)]).sort((tt, _t) => tt[1] - _t[1])[0]) == null ? void 0 : A[0];
              K && (T = K);
              break;
            }
            case "initialPlacement":
              T = o;
              break;
          }
        if (n !== T)
          return {
            reset: {
              placement: T
            }
          };
      }
      return {};
    }
  };
};
async function vd(s, t) {
  const {
    placement: e,
    platform: n,
    elements: i
  } = s, r = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)), o = Me(e), a = Fs(e), l = ni(e) === "y", c = ["left", "top"].includes(o) ? -1 : 1, d = r && l ? -1 : 1, h = Bs(t, s);
  let {
    mainAxis: m,
    crossAxis: p,
    alignmentAxis: g
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
  return a && typeof g == "number" && (p = a === "end" ? g * -1 : g), l ? {
    x: p * d,
    y: m * c
  } : {
    x: m * c,
    y: p * d
  };
}
const ri = function(s) {
  return s === void 0 && (s = 0), {
    name: "offset",
    options: s,
    async fn(t) {
      const {
        x: e,
        y: n
      } = t, i = await vd(t, s);
      return {
        x: e + i.x,
        y: n + i.y,
        data: i
      };
    }
  };
}, $s = function(s) {
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
              y: b
            } = v;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = Bs(s, t), c = {
        x: e,
        y: n
      }, d = await cl(t, l), h = ni(Me(i)), m = al(h);
      let p = c[m], g = c[h];
      if (r) {
        const v = m === "y" ? "top" : "left", y = m === "y" ? "bottom" : "right", b = p + d[v], k = p - d[y];
        p = zi(b, p, k);
      }
      if (o) {
        const v = h === "y" ? "top" : "left", y = h === "y" ? "bottom" : "right", b = g + d[v], k = g - d[y];
        g = zi(b, g, k);
      }
      const _ = a.fn({
        ...t,
        [m]: p,
        [h]: g
      });
      return {
        ..._,
        data: {
          x: _.x - e,
          y: _.y - n
        }
      };
    }
  };
};
function ue(s) {
  return hl(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function bt(s) {
  var t;
  return (s == null || (t = s.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function te(s) {
  var t;
  return (t = (hl(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : t.documentElement;
}
function hl(s) {
  return s instanceof Node || s instanceof bt(s).Node;
}
function Jt(s) {
  return s instanceof Element || s instanceof bt(s).Element;
}
function Ot(s) {
  return s instanceof HTMLElement || s instanceof bt(s).HTMLElement;
}
function Ro(s) {
  return typeof ShadowRoot > "u" ? !1 : s instanceof ShadowRoot || s instanceof bt(s).ShadowRoot;
}
function Vs(s) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: n,
    display: i
  } = St(s);
  return /auto|scroll|overlay|hidden|clip/.test(t + n + e) && !["inline", "contents"].includes(i);
}
function bd(s) {
  return ["table", "td", "th"].includes(ue(s));
}
function Br(s) {
  const t = Fr(), e = St(s);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((n) => (e.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (e.contain || "").includes(n));
}
function wd(s) {
  let t = Je(s);
  for (; Ot(t) && !oi(t); ) {
    if (Br(t))
      return t;
    t = Je(t);
  }
  return null;
}
function Fr() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function oi(s) {
  return ["html", "body", "#document"].includes(ue(s));
}
function St(s) {
  return bt(s).getComputedStyle(s);
}
function ai(s) {
  return Jt(s) ? {
    scrollLeft: s.scrollLeft,
    scrollTop: s.scrollTop
  } : {
    scrollLeft: s.pageXOffset,
    scrollTop: s.pageYOffset
  };
}
function Je(s) {
  if (ue(s) === "html")
    return s;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    s.assignedSlot || // DOM Element detected.
    s.parentNode || // ShadowRoot detected.
    Ro(s) && s.host || // Fallback.
    te(s)
  );
  return Ro(t) ? t.host : t;
}
function dl(s) {
  const t = Je(s);
  return oi(t) ? s.ownerDocument ? s.ownerDocument.body : s.body : Ot(t) && Vs(t) ? t : dl(t);
}
function Ss(s, t) {
  var e;
  t === void 0 && (t = []);
  const n = dl(s), i = n === ((e = s.ownerDocument) == null ? void 0 : e.body), r = bt(n);
  return i ? t.concat(r, r.visualViewport || [], Vs(n) ? n : [], r.frameElement ? Ss(r.frameElement) : []) : t.concat(n, Ss(n));
}
function ul(s) {
  const t = St(s);
  let e = parseFloat(t.width) || 0, n = parseFloat(t.height) || 0;
  const i = Ot(s), r = i ? s.offsetWidth : e, o = i ? s.offsetHeight : n, a = Mn(e) !== r || Mn(n) !== o;
  return a && (e = r, n = o), {
    width: e,
    height: n,
    $: a
  };
}
function Vr(s) {
  return Jt(s) ? s : s.contextElement;
}
function Ue(s) {
  const t = Vr(s);
  if (!Ot(t))
    return de(1);
  const e = t.getBoundingClientRect(), {
    width: n,
    height: i,
    $: r
  } = ul(t);
  let o = (r ? Mn(e.width) : e.width) / n, a = (r ? Mn(e.height) : e.height) / i;
  return (!o || !Number.isFinite(o)) && (o = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: o,
    y: a
  };
}
const Cd = /* @__PURE__ */ de(0);
function fl(s) {
  const t = bt(s);
  return !Fr() || !t.visualViewport ? Cd : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function kd(s, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== bt(s) ? !1 : t;
}
function Ie(s, t, e, n) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = s.getBoundingClientRect(), r = Vr(s);
  let o = de(1);
  t && (n ? Jt(n) && (o = Ue(n)) : o = Ue(s));
  const a = kd(r, e, n) ? fl(r) : de(0);
  let l = (i.left + a.x) / o.x, c = (i.top + a.y) / o.y, d = i.width / o.x, h = i.height / o.y;
  if (r) {
    const m = bt(r), p = n && Jt(n) ? bt(n) : n;
    let g = m.frameElement;
    for (; g && n && p !== m; ) {
      const _ = Ue(g), v = g.getBoundingClientRect(), y = St(g), b = v.left + (g.clientLeft + parseFloat(y.paddingLeft)) * _.x, k = v.top + (g.clientTop + parseFloat(y.paddingTop)) * _.y;
      l *= _.x, c *= _.y, d *= _.x, h *= _.y, l += b, c += k, g = bt(g).frameElement;
    }
  }
  return An({
    width: d,
    height: h,
    x: l,
    y: c
  });
}
function xd(s) {
  let {
    rect: t,
    offsetParent: e,
    strategy: n
  } = s;
  const i = Ot(e), r = te(e);
  if (e === r)
    return t;
  let o = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = de(1);
  const l = de(0);
  if ((i || !i && n !== "fixed") && ((ue(e) !== "body" || Vs(r)) && (o = ai(e)), Ot(e))) {
    const c = Ie(e);
    a = Ue(e), l.x = c.x + e.clientLeft, l.y = c.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - o.scrollLeft * a.x + l.x,
    y: t.y * a.y - o.scrollTop * a.y + l.y
  };
}
function $d(s) {
  return Array.from(s.getClientRects());
}
function pl(s) {
  return Ie(te(s)).left + ai(s).scrollLeft;
}
function Sd(s) {
  const t = te(s), e = ai(s), n = s.ownerDocument.body, i = Se(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth), r = Se(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
  let o = -e.scrollLeft + pl(s);
  const a = -e.scrollTop;
  return St(n).direction === "rtl" && (o += Se(t.clientWidth, n.clientWidth) - i), {
    width: i,
    height: r,
    x: o,
    y: a
  };
}
function Nd(s, t) {
  const e = bt(s), n = te(s), i = e.visualViewport;
  let r = n.clientWidth, o = n.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    const c = Fr();
    (!c || c && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function Ed(s, t) {
  const e = Ie(s, !0, t === "fixed"), n = e.top + s.clientTop, i = e.left + s.clientLeft, r = Ot(s) ? Ue(s) : de(1), o = s.clientWidth * r.x, a = s.clientHeight * r.y, l = i * r.x, c = n * r.y;
  return {
    width: o,
    height: a,
    x: l,
    y: c
  };
}
function zo(s, t, e) {
  let n;
  if (t === "viewport")
    n = Nd(s, e);
  else if (t === "document")
    n = Sd(te(s));
  else if (Jt(t))
    n = Ed(t, e);
  else {
    const i = fl(s);
    n = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return An(n);
}
function ml(s, t) {
  const e = Je(s);
  return e === t || !Jt(e) || oi(e) ? !1 : St(e).position === "fixed" || ml(e, t);
}
function Td(s, t) {
  const e = t.get(s);
  if (e)
    return e;
  let n = Ss(s).filter((a) => Jt(a) && ue(a) !== "body"), i = null;
  const r = St(s).position === "fixed";
  let o = r ? Je(s) : s;
  for (; Jt(o) && !oi(o); ) {
    const a = St(o), l = Br(o);
    !l && a.position === "fixed" && (i = null), (r ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Vs(o) && !l && ml(s, o)) ? n = n.filter((d) => d !== o) : i = a, o = Je(o);
  }
  return t.set(s, n), n;
}
function Md(s) {
  let {
    element: t,
    boundary: e,
    rootBoundary: n,
    strategy: i
  } = s;
  const o = [...e === "clippingAncestors" ? Td(t, this._c) : [].concat(e), n], a = o[0], l = o.reduce((c, d) => {
    const h = zo(t, d, i);
    return c.top = Se(h.top, c.top), c.right = Ze(h.right, c.right), c.bottom = Ze(h.bottom, c.bottom), c.left = Se(h.left, c.left), c;
  }, zo(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Id(s) {
  return ul(s);
}
function Ad(s, t, e) {
  const n = Ot(t), i = te(t), r = e === "fixed", o = Ie(s, !0, r, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = de(0);
  if (n || !n && !r)
    if ((ue(t) !== "body" || Vs(i)) && (a = ai(t)), n) {
      const c = Ie(t, !0, r, t);
      l.x = c.x + t.clientLeft, l.y = c.y + t.clientTop;
    } else
      i && (l.x = pl(i));
  return {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Wo(s, t) {
  return !Ot(s) || St(s).position === "fixed" ? null : t ? t(s) : s.offsetParent;
}
function gl(s, t) {
  const e = bt(s);
  if (!Ot(s))
    return e;
  let n = Wo(s, t);
  for (; n && bd(n) && St(n).position === "static"; )
    n = Wo(n, t);
  return n && (ue(n) === "html" || ue(n) === "body" && St(n).position === "static" && !Br(n)) ? e : n || wd(s) || e;
}
const Pd = async function(s) {
  let {
    reference: t,
    floating: e,
    strategy: n
  } = s;
  const i = this.getOffsetParent || gl, r = this.getDimensions;
  return {
    reference: Ad(t, await i(e), n),
    floating: {
      x: 0,
      y: 0,
      ...await r(e)
    }
  };
};
function Dd(s) {
  return St(s).direction === "rtl";
}
const Ld = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xd,
  getDocumentElement: te,
  getClippingRect: Md,
  getOffsetParent: gl,
  getElementRects: Pd,
  getClientRects: $d,
  getDimensions: Id,
  getScale: Ue,
  isElement: Jt,
  isRTL: Dd
};
function Rd(s, t) {
  let e = null, n;
  const i = te(s);
  function r() {
    clearTimeout(n), e && e.disconnect(), e = null;
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), r();
    const {
      left: c,
      top: d,
      width: h,
      height: m
    } = s.getBoundingClientRect();
    if (a || t(), !h || !m)
      return;
    const p = sn(d), g = sn(i.clientWidth - (c + h)), _ = sn(i.clientHeight - (d + m)), v = sn(c), b = {
      rootMargin: -p + "px " + -g + "px " + -_ + "px " + -v + "px",
      threshold: Se(0, Ze(1, l)) || 1
    };
    let k = !0;
    function x(w) {
      const N = w[0].intersectionRatio;
      if (N !== l) {
        if (!k)
          return o();
        N ? o(!1, N) : n = setTimeout(() => {
          o(!1, 1e-7);
        }, 100);
      }
      k = !1;
    }
    try {
      e = new IntersectionObserver(x, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      e = new IntersectionObserver(x, b);
    }
    e.observe(s);
  }
  return o(!0), r;
}
function Ur(s, t, e, n) {
  n === void 0 && (n = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: r = !0,
    elementResize: o = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = n, c = Vr(s), d = i || r ? [...c ? Ss(c) : [], ...Ss(t)] : [];
  d.forEach((y) => {
    i && y.addEventListener("scroll", e, {
      passive: !0
    }), r && y.addEventListener("resize", e);
  });
  const h = c && a ? Rd(c, e) : null;
  let m = -1, p = null;
  o && (p = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === c && p && (p.unobserve(t), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      p && p.observe(t);
    })), e();
  }), c && !l && p.observe(c), p.observe(t));
  let g, _ = l ? Ie(s) : null;
  l && v();
  function v() {
    const y = Ie(s);
    _ && (y.x !== _.x || y.y !== _.y || y.width !== _.width || y.height !== _.height) && e(), _ = y, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((y) => {
      i && y.removeEventListener("scroll", e), r && y.removeEventListener("resize", e);
    }), h && h(), p && p.disconnect(), p = null, l && cancelAnimationFrame(g);
  };
}
const li = (s, t, e) => {
  const n = /* @__PURE__ */ new Map(), i = {
    platform: Ld,
    ...e
  }, r = {
    ...i.platform,
    _c: n
  };
  return yd(s, t, {
    ...i,
    platform: r
  });
};
var xe, Lt, oe;
class _l extends V {
  constructor(e) {
    super(e);
    F(this, xe, void 0);
    F(this, Lt, void 0);
    F(this, oe, void 0);
    U(this, xe, Y()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: r, togglePop: o } = this.props, a = u(n.target);
      i !== "closing" && !a.closest(`#pick-${r},#pick-pop-${r}`).length && a.parent().length && o(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = D(this, xe)) == null ? void 0 : e.current;
  }
  get container() {
    return D(this, oe);
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
    return $(
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
    } = e, c = u.extend({
      maxHeight: r,
      maxWidth: o,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(e),
      style: c,
      ref: D(this, xe),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!D(this, oe)) {
      const n = u(e.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(n)), U(this, oe, i[0]);
    }
    return D(this, oe);
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
      D(this, Lt) && (D(this, Lt).call(this), U(this, Lt, void 0));
      return;
    }
    D(this, Lt) || U(this, Lt, Ur(n, e, () => {
      const { placement: o, width: a } = i;
      li(n, e, {
        placement: !o || o === "auto" ? "bottom-start" : o,
        middleware: [o === "auto" ? ii() : null, $s(), ri(1)].filter(Boolean)
      }).then(({ x: l, y: c }) => {
        var d, h;
        u(e).css({
          left: l,
          top: c,
          width: a === "100%" ? u(n).outerWidth() : void 0
        }), (h = (d = this.props).onLayout) == null || h.call(d, e);
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
    const e = D(this, Lt);
    e && (e(), U(this, Lt, void 0)), U(this, oe, void 0), U(this, xe, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(e) {
    return Fh(this._render(e), this._getContainer(e));
  }
}
xe = new WeakMap(), Lt = new WeakMap(), oe = new WeakMap();
var yl = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, se = (s, t, e) => (yl(s, t, "read from private field"), e ? e.call(s) : t.get(s)), yi = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ze = (s, t, e, n) => (yl(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), fn, At, ds;
let gt = class extends V {
  constructor(t) {
    super(t), yi(this, fn, void 0), yi(this, At, 0), yi(this, ds, Y()), this.toggle = async (e, n) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return n && await this.changeState(n), this.state;
      se(this, At) && (clearTimeout(se(this, At)), ze(this, At, 0));
      let r = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...n
      }));
      const { open: o } = r;
      return o === "closing" ? (await xn(200, (a) => {
        ze(this, At, a);
      }), ze(this, At, 0), r = await this.changeState({ open: !1 })) : o === "opening" && (await xn(50, (a) => {
        ze(this, At, a);
      }), ze(this, At, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, ze(this, fn, t.id ?? `_pick${he()}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return se(this, fn);
  }
  get pop() {
    return se(this, ds).current;
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
    (e = this.props.beforeDestroy) == null || e.call(this), se(this, At) && clearTimeout(se(this, At));
    const t = se(this, ds).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: n } = e, i = this._getTrigger(t);
    let r;
    if (n) {
      const o = this._getPop(t);
      r = /* @__PURE__ */ f(o, { ref: se(this, ds), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Qe, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      r
    ] });
  }
};
fn = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
ds = /* @__PURE__ */ new WeakMap();
gt.Trigger = Wr;
gt.Pop = _l;
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
let vl = class extends gt {
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
    }, n.style), n.className = $("color-picker", n.className, { disabled: t.disabled }), n;
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
vl.defaultProps = {
  ...gt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class bl extends B {
}
bl.NAME = "ColorPicker";
bl.Component = vl;
const Ns = 24 * 60 * 60 * 1e3, Q = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), zd = (s, t, e = "day") => {
  if (typeof t == "string") {
    const n = Number.parseInt(t, 10);
    e = t.replace(n.toString(), ""), t = n;
  }
  return s = new Date(Q(s).getTime()), e === "month" ? s.setMonth(s.getMonth() + t) : e === "year" ? s.setFullYear(s.getFullYear() + t) : e === "week" ? s.setDate(s.getDate() + t * 7) : e === "hour" ? s.setHours(s.getHours() + t) : e === "minute" ? s.setMinutes(s.getMinutes() + t) : e === "second" ? s.setSeconds(s.getSeconds() + t) : s.setDate(s.getDate() + t), s;
}, Us = (s, t = /* @__PURE__ */ new Date()) => Q(s).toDateString() === Q(t).toDateString(), Hi = (s, t = /* @__PURE__ */ new Date()) => Q(s).getFullYear() === Q(t).getFullYear(), wl = (s, t = /* @__PURE__ */ new Date()) => (s = Q(s), t = Q(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), bf = (s, t = /* @__PURE__ */ new Date()) => {
  s = Q(s), t = Q(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, wf = (s, t) => Us(Q(t), s), Cf = (s, t) => Us(Q(t).getTime() - Ns, s), kf = (s, t) => Us(Q(t).getTime() + Ns, s), ct = (s, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (s = Q(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", Hi(s) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const r = `${n[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? r : `00${r}`.substring(r.length));
    }
  }), t;
}, xf = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = ct(s, Hi(s) ? n.month : n.full);
  if (Us(s, t))
    return i;
  const r = ct(t, Hi(s, t) ? wl(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", r);
};
var Is, As;
class Cl extends V {
  constructor() {
    super(...arguments);
    F(this, Is, Y());
    F(this, As, (e, n) => {
      var i, r;
      (r = (i = this.props).onChange) == null || r.call(i, e, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    u(D(this, Is).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: n = 5, hour: i, minute: r } = e, o = [], a = [];
    for (let c = 0; c < 24; ++c)
      o.push({ key: c, text: c < 10 ? `0${c}` : c, active: i === c });
    for (let c = 0; c < 60; c += n)
      a.push({ key: c, text: c < 10 ? `0${c}` : c, active: r === c });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: D(this, Is), children: [
      /* @__PURE__ */ f(
        mt,
        {
          className: l,
          items: o,
          onClickItem: D(this, As).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        mt,
        {
          className: l,
          items: a,
          onClickItem: D(this, As).bind(this, "minute")
        }
      )
    ] });
  }
}
Is = new WeakMap(), As = new WeakMap();
var Wd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, nn = (s, t, e) => (Wd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), rn = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Bi, Fi, Vi, Ui;
const Oo = (s) => {
  if (!s)
    return;
  const t = Q(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let kl = class extends gt {
  constructor(t) {
    super(t), rn(this, Bi, () => {
      this.toggle(!0);
    }), rn(this, Fi, (n) => {
      this.setTime(n.target.value);
    }), rn(this, Vi, (n, i) => {
      this.setTime({ [n]: i });
    }), rn(this, Ui, () => {
      this.setTime("");
    });
    const e = this.state;
    e.value === "now" && (e.value = ct(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let e = "";
    if (typeof t == "string")
      e = t;
    else {
      const [a, l] = (this.state.value || "00:00").split(":"), { hour: c = +a, minute: d = +l } = t;
      e = `${c}:${d}`;
    }
    const n = Oo(e), { onInvalid: i, required: r, defaultValue: o } = this.props;
    this.setState({ value: n ? ct(n, this.props.format) : r ? o : "" }, () => {
      !n && i && i(e);
    });
  }
  getTime() {
    const t = Oo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `time-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: nn(this, Ui), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-time" }) : h = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: nn(this, Bi), onChange: nn(this, Fi) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, n] = this.getTime() || [];
    return /* @__PURE__ */ f(Cl, { hour: e, minute: n, minuteStep: t.minuteStep, onChange: nn(this, Vi) });
  }
};
Bi = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
Ui = /* @__PURE__ */ new WeakMap();
kl.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
};
rt.addLang({
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
const Od = (s, t, e = 0) => {
  const n = new Date(s, t - 1, 1), i = n.getDay(), r = n.getTime() - (7 + i - e) % 7 * Ns;
  return {
    days: 7 * 5,
    startTime: r,
    firstDay: n.getTime()
  };
}, Ho = (s, t) => new Set((Array.isArray(s) ? s : [s]).map((e) => ct(e, t)));
var Hn;
class Hd extends V {
  constructor() {
    super(...arguments);
    F(this, Hn, (e) => {
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
      weekNames: r = rt.getLang("weekNames"),
      monthNames: o = rt.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: c = [],
      selections: d = []
    } = e, h = [], m = "btn ghost square rounded-full";
    for (let N = 0; N < 7; N++) {
      const L = (i + N) % 7;
      h.push(/* @__PURE__ */ f("div", { className: $("col mini-calendar-day", { "is-weekend": L === 0 || L === 6 }), children: /* @__PURE__ */ f("div", { children: r ? r[L] : L }) }, N));
    }
    const { startTime: p, days: g, firstDay: _ } = Od(a, l, i), v = _ + g * Ns;
    let y = p;
    const b = [], k = "yyyy-MM-dd", x = Ho(c, k), w = Ho(d, k);
    for (; y <= v; ) {
      const N = [];
      for (let L = 0; L < 7; L++) {
        const R = new Date(y), W = R.getDate(), A = ct(R, k), z = R.getDay(), G = wl(R, _), T = $("col mini-calendar-day", {
          active: x.has(A),
          selected: w.has(A),
          "is-first": W === 1,
          "is-in-month": G,
          "is-out-month": !G,
          "is-today": Us(R, n),
          "is-weekend": z === 0 || z === 6
        });
        N.push(
          /* @__PURE__ */ f("div", { className: T, "data-date": A, children: /* @__PURE__ */ f("a", { className: m, onClick: D(this, Hn), children: W === 1 && o ? o[R.getMonth()] : R.getDate() }) }, A)
        ), y += Ns;
      }
      b.push(/* @__PURE__ */ f("div", { className: "row", children: N }, y));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: h }),
      b
    ] });
  }
}
Hn = new WeakMap();
var Ps, Bn;
class Bo extends V {
  constructor() {
    super(...arguments);
    F(this, Ps, Y());
    F(this, Bn, (e) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const r = u(e.target).closest("[data-value]").dataset("value");
      r && (n(+r), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(D(this, Ps).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: n, max: i, min: r, value: o } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let c = r; c <= i; ++c)
      a.push(/* @__PURE__ */ f(lt, { type: "ghost", "data-value": c, active: c === o, className: $(l === c ? "is-current" : ""), onClick: D(this, Bn), children: c }, c));
    return /* @__PURE__ */ f("div", { className: n, ref: D(this, Ps), children: a });
  }
}
Ps = new WeakMap(), Bn = new WeakMap();
var Ge, Ds, Ls, Rs, zs, Ws, Fn, $l, Vn, Sl;
class xl extends V {
  constructor(e) {
    super(e);
    F(this, Fn);
    F(this, Vn);
    F(this, Ge, void 0);
    F(this, Ds, void 0);
    F(this, Ls, void 0);
    F(this, Rs, void 0);
    F(this, zs, void 0);
    F(this, Ws, void 0);
    U(this, Ge, Y()), U(this, Ds, (r) => {
      const o = u(r.target).closest("[data-set-date]");
      o.length && this.changeDate(o.dataset("set-date"));
    }), U(this, Ls, () => {
      const { year: r, month: o } = this.state;
      o === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: o - 1 });
    }), U(this, Rs, () => {
      const { year: r, month: o } = this.state;
      o === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: o + 1 });
    }), U(this, zs, (r) => {
      this.setState({ year: r, select: "day" });
    }), U(this, Ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var o, a;
      if (r.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        r.length > 3 && (l = zd(l, r.substring(5).replace("+", ""))), r = ct(l, "yyyy-MM-dd");
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
    u(D(this, Ge).current).find(".active").scrollIntoView();
  }
  render(e, n) {
    const {
      date: i,
      yearText: r = rt.getLang("yearFormat") || "{0}",
      weekNames: o = rt.getLang("weekNames"),
      monthNames: a = rt.getLang("monthNames"),
      weekStart: l
    } = e, c = i ? new Date(i) : void 0, {
      year: d,
      month: h,
      select: m
    } = n, p = m === "day", g = Q(e.minDate || "1970-1-1"), _ = Q(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: D(this, Ge), onClick: D(this, Ds), children: [
      Re(this, Fn, $l).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(lt, { type: m === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: at(r, d) }),
          /* @__PURE__ */ f(lt, { type: m === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[h - 1] : h }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          p ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(lt, { type: "ghost", size: "sm", square: !0, onClick: D(this, Ls), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(lt, { type: "ghost", size: "sm", square: !0, onClick: D(this, Rs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        p ? /* @__PURE__ */ f(
          Hd,
          {
            weekStart: l,
            weekNames: o,
            monthNames: a,
            year: d,
            month: h,
            selections: c,
            onClickDate: this.changeDate
          }
        ) : null,
        m === "year" ? /* @__PURE__ */ f(
          Bo,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: _.getFullYear(),
            onChange: D(this, zs)
          }
        ) : m === "month" ? /* @__PURE__ */ f(
          Bo,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: h,
            min: 1,
            max: 12,
            onChange: D(this, Ws)
          }
        ) : null,
        p ? Re(this, Vn, Sl).call(this, e) : null
      ] })
    ] });
  }
}
Ge = new WeakMap(), Ds = new WeakMap(), Ls = new WeakMap(), Rs = new WeakMap(), zs = new WeakMap(), Ws = new WeakMap(), Fn = new WeakSet(), $l = function(e) {
  let { menu: n } = e;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f(mt, { ...n })) : null;
}, Vn = new WeakSet(), Sl = function(e) {
  let { actions: n } = e;
  const { todayText: i, clearText: r } = e;
  return n || (n = [{ text: i, "data-set-date": ct(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(pt, { btnProps: { className: "ghost text-primary" }, ...n }),
    r ? /* @__PURE__ */ f(lt, { type: "ghost text-link", "data-set-date": "", children: r }) : null
  ] });
};
var Bd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, vi = (s, t, e) => (Bd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), bi = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, ji, Ki, qi;
let Nl = class extends gt {
  constructor(t) {
    super(t), bi(this, ji, () => {
      this.toggle(!0);
    }), bi(this, Ki, (n) => {
      this.setDate(n.target.value);
    }), bi(this, qi, () => {
      this.setDate("");
    }), this.setDate = (n) => {
      const { onInvalid: i, defaultValue: r = "", required: o, disabled: a, format: l } = this.props;
      if (a)
        return;
      const c = Q(n), d = !n || Number.isNaN(c.getDay());
      this.setState({ value: d ? o ? r : "" : ct(c, l) }, () => {
        !d && i && i(n), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = ct(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `date-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: vi(this, qi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: n, value: l, disabled: o, readOnly: a, onFocus: vi(this, ji), onChange: vi(this, Ki) }, "input"),
      h ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = rt.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p } = t;
    return /* @__PURE__ */ f(
      xl,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      }
    );
  }
};
ji = /* @__PURE__ */ new WeakMap();
Ki = /* @__PURE__ */ new WeakMap();
qi = /* @__PURE__ */ new WeakMap();
Nl.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class El extends B {
}
El.NAME = "TimePicker";
El.Component = kl;
class Tl extends B {
}
Tl.NAME = "DatePicker";
Tl.Component = Nl;
class Fd extends V {
  render(t) {
    const { date: e, time: n } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(xl, { ...e }),
      /* @__PURE__ */ f(Cl, { ...n })
    ] });
  }
}
var Vd = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, os = (s, t, e) => (Vd(s, t, "read from private field"), e ? e.call(s) : t.get(s)), as = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, Gi, Yi, Xi, Zi, Ji;
const Fo = (s) => {
  if (!s)
    return;
  const t = Q(`1999-01-01 ${s}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ml = class extends gt {
  constructor(t) {
    super(t), as(this, Gi, () => {
      this.toggle(!0);
    }), as(this, Yi, (o) => {
      this.setDate(o.target.value);
    }), as(this, Xi, () => {
      this.setDate("");
      const { required: o, defaultValue: a } = this.props;
      this.setState({ value: o ? a : "" });
    }), as(this, Zi, (o, a) => {
      this.setTime({ [o]: a });
    }), as(this, Ji, (o) => {
      this.setTime(o.target.value);
    }), this.setDate = (o) => {
      const { onInvalid: a, defaultValue: l = "", required: c, dateFormat: d, disabled: h, joiner: m } = this.props;
      if (h)
        return;
      const p = Q(o), g = !o || Number.isNaN(p.getDay()), _ = ct(p, d), [, v = "00:00"] = this.state.value.split(m);
      this.setState({ value: g ? c ? l : "" : `${_}${m}${v}` }, () => {
        !g && a && a(o);
      });
    };
    const { value: e } = this.state, { dateFormat: n, timeFormat: i, joiner: r } = t;
    e && (this.state.value = ct(e === "today" ? /* @__PURE__ */ new Date() : e, `${n}${r}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: n, defaultValue: i, timeFormat: r, joiner: o, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let c = "";
    if (typeof t == "string")
      c = t;
    else {
      const [, m = "00:00"] = this.state.value.split(o), [p, g] = m.split(":"), { hour: _ = +p, minute: v = +g } = t;
      c = `${_}:${v}`;
    }
    const d = Fo(c), h = this.state.value.split(o)[0] || ct(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${h}${o}${ct(d, r)}` : n ? i : "" }, () => {
      !d && e && e(c);
    });
  }
  getTime() {
    const t = Fo(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: n, icon: i, required: r, disabled: o, readonly: a } = t, { value: l = "", open: c } = e, d = `datetime-picker-${this.id}`;
    let h;
    return c && !r && l.length ? h = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: os(this, Xi),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? h = /* @__PURE__ */ f("i", { class: "i-calendar" }) : h = /* @__PURE__ */ f(J, { icon: i })), [
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
          onFocus: os(this, Gi),
          onChange: (m) => {
            os(this, Yi).call(this, m), os(this, Ji).call(this, m);
          }
        },
        "input"
      ),
      h ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: h }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const n = super._getTriggerProps(t, e);
    return {
      ...n,
      className: $(n.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const n = super._getPopProps(t, e);
    return {
      ...n,
      className: $(n.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: n, monthNames: i, weekStart: r, yearText: o, todayText: a = rt.getLang("today"), clearText: l, menu: c, actions: d, minDate: h, maxDate: m, required: p, minuteStep: g } = t, [_, v] = this.getTime() || [], y = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: n,
        monthNames: i,
        weekStart: r,
        yearText: o,
        todayText: a,
        clearText: p ? "" : l,
        menu: c,
        actions: d,
        minDate: h,
        maxDate: m
      },
      time: {
        hour: _,
        minute: v,
        minuteStep: g,
        onChange: os(this, Zi)
      }
    };
    return /* @__PURE__ */ f(Fd, { ...y });
  }
};
Gi = /* @__PURE__ */ new WeakMap();
Yi = /* @__PURE__ */ new WeakMap();
Xi = /* @__PURE__ */ new WeakMap();
Zi = /* @__PURE__ */ new WeakMap();
Ji = /* @__PURE__ */ new WeakMap();
Ml.defaultProps = {
  ...gt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Il extends B {
}
Il.NAME = "DatetimePicker";
Il.Component = Ml;
const Vo = "show", Uo = "in", Ud = '[data-dismiss="modal"]', js = class us extends dt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, n = e.closest(".modal");
      !n || n !== this.modalElement || (e.closest(Ud) || this.options.backdrop === !0 && e === n) && (t.preventDefault(), this.hide());
    };
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
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var t;
    super.destroy(), (t = this._rob) == null || t.disconnect(), this._rob = void 0;
  }
  show(t) {
    const { modalElement: e } = this;
    if (this._shown)
      return u(e).css("z-index", `${us.zIndex++}`), !1;
    this._shown = !0, this.setOptions(t);
    const { animation: n, backdrop: i, className: r, style: o } = this.options;
    return u(e).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, Vo, r).css({
      zIndex: `${us.zIndex++}`,
      ...o
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(Uo), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this._shown ? (this._shown = !1, u(this.modalElement).removeClass(Uo), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(Vo), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this._shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = u(n);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const d = { width: "", height: "" };
      typeof e == "object" ? (d.width = e.width, d.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (d.width = e), i.css(d);
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
    typeof t == "number" ? (c = "flex-start", l = t) : typeof t == "object" && t ? (Object.assign(a, t), l = a.top ?? l, c = a.alignSelf ?? "flex-start") : t === "fit" ? (c = "flex-start", l = `${Math.max(0, Math.floor((window.innerHeight - o) / 3))}px`) : t === "bottom" ? c = "flex-end" : t === "top" ? c = "flex-start" : t !== "center" && typeof t == "string" && (c = "flex-start", l = t), a.top = l, a.alignSelf = c, i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = us.query(t, void 0, (n) => n.shown)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = us.query(t, void 0, (n) => !n.shown)) == null || e.show();
  }
};
js.NAME = "Modal";
js.MULTI_INSTANCE = !0;
js.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
js.zIndex = 1500;
let Ae = js;
u(window).on(`resize.${Ae.NAMESPACE}`, () => {
  Ae.getAll().forEach((s) => {
    const t = s;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${Ae.NAMESPACE}`, (s, t) => {
  Ae.hide(t == null ? void 0 : t.target);
});
class Al extends V {
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
    return ft(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: $("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: t,
      closeBtn: e
    } = this.props;
    return !e && !t ? null : ft(t) ? t : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      t ? /* @__PURE__ */ f(pt, { ...t }) : null,
      e ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: t,
      bodyClass: e
    } = this.props;
    return t ? ft(t) ? t : /* @__PURE__ */ f("div", { className: $("modal-body", e), children: t }) : null;
  }
  renderFooter() {
    const {
      footer: t,
      footerClass: e,
      footerActions: n
    } = this.props;
    return ft(t) ? t : t === !1 || !n ? null : /* @__PURE__ */ f("div", { className: $("modal-footer", e), children: n ? /* @__PURE__ */ f(pt, { ...n }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: $("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: $("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Al.defaultProps = { closeBtn: !0 };
class Pl extends V {
  constructor() {
    super(...arguments), this._ref = Y(), this.state = {}, this._watchIframeHeight = () => {
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
Pl.defaultProps = {
  watchHeight: !0
};
var jr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, It = (s, t, e) => (jr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), ls = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, We = (s, t, e, n) => (jr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), pn = (s, t, e) => (jr(s, t, "access private method"), e), Vt, fs, Ut, Pn, Kr, mn, Qi;
function jd(s, t) {
  const { custom: e, title: n, content: i } = t;
  return {
    body: i,
    title: n,
    ...typeof e == "function" ? e() : e
  };
}
async function Kd(s, t) {
  const { dataType: e = "html", url: n, request: i, custom: r, title: o, replace: a = !0, executeScript: l = !0 } = t, c = await u.ajax({
    url: n,
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
    body: e === "html" ? /* @__PURE__ */ f(Te, { className: "modal-body", html: c, executeScript: l }) : c
  };
}
async function qd(s, t) {
  const { url: e, custom: n, title: i, size: r } = t, o = typeof r == "object" && typeof r.height == "number";
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ f(Pl, { url: e, watchHeight: !o })
  };
}
const Gd = {
  custom: jd,
  ajax: Kd,
  iframe: qd
}, wi = "loading", Dl = class ve extends Ae {
  constructor() {
    super(...arguments), ls(this, Pn), ls(this, mn), ls(this, Vt, void 0), ls(this, fs, void 0), ls(this, Ut, void 0);
  }
  get id() {
    return It(this, fs);
  }
  get loading() {
    var t;
    return (t = It(this, Vt)) == null ? void 0 : t.classList.contains(wi);
  }
  get shown() {
    var t;
    return !!((t = It(this, Vt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = It(this, Vt);
    if (!t) {
      const { options: e } = this;
      let n = It(this, fs);
      n || (n = e.id || `modal-${he()}`, We(this, fs, n));
      const { $element: i } = this;
      if (t = i.find(`#${n}`)[0], !t) {
        const r = this.key;
        t = u("<div>").attr({
          id: n,
          "data-key": r
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      We(this, Vt, t);
    }
    return t;
  }
  get $emitter() {
    const t = It(this, Vt);
    return t ? u(t) : this.$element;
  }
  afterInit() {
    super.afterInit(), this.on("hidden", () => {
      this.options.destoryOnHide && this.destroy(), ve.getAll().some((t) => t.shown) || u("body").enableScroll();
    });
  }
  show(t) {
    return super.show(t) ? (u("body").disableScroll(), this.buildDialog(), !0) : !1;
  }
  destroy() {
    super.destroy();
    const t = It(this, Vt);
    t && (u(t).removeData(this.constructor.KEY).remove(), We(this, Vt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    It(this, Ut) && clearTimeout(It(this, Ut));
    const { modalElement: t, options: e } = this, n = u(t), { type: i, loadTimeout: r, loadingText: o = null } = e, a = Gd[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    n.attr("data-loading", o).addClass(wi), r && We(this, Ut, window.setTimeout(() => {
      We(this, Ut, 0), pn(this, mn, Qi).call(this, this.options.timeoutTip);
    }, r));
    const l = await a.call(this, t, e);
    return l === !1 ? await pn(this, mn, Qi).call(this, this.options.failedTip) : l && typeof l == "object" && await pn(this, Pn, Kr).call(this, l), It(this, Ut) && (clearTimeout(It(this, Ut)), We(this, Ut, 0)), this.layout(), await xn(100), n.removeClass(wi), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: n = document.body, ...i } = t, r = { show: !0, ...i };
      !r.type && r.url && (r.type = "ajax");
      const o = ve.ensure(n, r), a = `${ve.NAMESPACE}.open${he()}`;
      o.on(`hidden${a}`, () => {
        o.off(a), e(o);
      }), o.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: n, icon: i, iconClass: r = "icon-lg muted", actions: o = "confirm", onClickAction: a, custom: l, key: c = "__alert", ...d } = t, h = (typeof l == "function" ? l() : l) || {};
    let m = typeof n == "object" && n.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: n.html } }) : /* @__PURE__ */ f("div", { children: n });
    i ? m = /* @__PURE__ */ f("div", { className: $("modal-body row gap-4 items-center", h.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: $("modal-body", h.bodyClass), children: m });
    const p = [];
    (Array.isArray(o) ? o : [o]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = rt.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && p.push(v);
    }, []);
    let g;
    const _ = p.length ? {
      gap: 4,
      items: p,
      onClickItem: ({ item: v, event: y }) => {
        const b = ve.query(y.target, c);
        g = v.key, (a == null ? void 0 : a(v, b)) !== !1 && b && b.hide();
      }
    } : void 0;
    return await ve.open({
      key: c,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: _, ...h },
      ...d
    }), g;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: e, onResult: n, ...i } = t;
    return await ve.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (o, a) => {
        n == null || n(o.key === "confirm", a), e == null || e(o, a);
      },
      ...i
    }) === "confirm";
  }
};
Vt = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakMap();
Ut = /* @__PURE__ */ new WeakMap();
Pn = /* @__PURE__ */ new WeakSet();
Kr = function(s) {
  return new Promise((t) => {
    if (Array.isArray(s))
      return u(this.modalElement).html(s[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...n } = s;
    s = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...n
    }, ks(
      /* @__PURE__ */ f(Al, { ...s }),
      this.modalElement
    );
  });
};
mn = /* @__PURE__ */ new WeakSet();
Qi = function(s) {
  if (s)
    return pn(this, Pn, Kr).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: s })
    });
};
Dl.DEFAULT = {
  ...Ae.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let Yd = Dl;
const Xd = '[data-toggle="modal"]';
class tr extends dt {
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
      e = Ae.ensure(n, t);
    } else
      e = Yd.ensure(this.container, t);
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
tr.NAME = "ModalTrigger";
u(document).on(`click${tr.NAMESPACE}`, Xd, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = tr.ensure(t);
    e && (e.show(), s.preventDefault());
  }
});
let qr = class extends me {
  _getClassName(t) {
    const { type: e, stacked: n } = t;
    return [super._getClassName(t), e ? `nav-${e}` : "", n ? "nav-stacked" : ""];
  }
};
qr.NAME = "nav";
qr.defaultItemProps = {
  component: "li",
  innerComponent: "a"
};
class Ll extends B {
}
Ll.NAME = "Nav";
Ll.Component = qr;
function Es(s, t) {
  const e = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = s.page - 1 : t === "next" ? t = s.page + 1 : t === "current" ? t = s.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : s.page, {
    ...s,
    pageTotal: e,
    page: t
  };
}
function Zd({
  key: s,
  type: t,
  btnType: e,
  page: n,
  format: i,
  pagerInfo: r,
  linkCreator: o,
  ...a
}) {
  const l = Es(r, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : at(i, l)), a.url === void 0 && o && (a.url = typeof o == "function" ? o(l) : at(o, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === r.page), /* @__PURE__ */ f(lt, { type: e, ...a });
}
function Jd({
  key: s,
  type: t,
  page: e,
  text: n = "",
  pagerInfo: i,
  children: r,
  ...o
}) {
  const a = Es(i, e);
  return n = typeof n == "function" ? n(a) : at(n, a), /* @__PURE__ */ f(Z, { ...o, children: [
    r,
    n
  ] });
}
function Qd({
  type: s,
  btnType: t,
  count: e = 12,
  pagerInfo: n,
  linkCreator: i,
  ...r
}) {
  if (!n.pageTotal)
    return;
  const o = { ...r, square: !0 }, a = () => (o.text = "", o.icon = "icon-ellipsis-h", o.disabled = !0, /* @__PURE__ */ f(lt, { type: t, ...o })), l = (d, h) => {
    const m = [];
    for (let p = d; p <= h; p++) {
      o.text = p, delete o.icon, o.disabled = !1;
      const g = Es(n, p);
      i && (o.url = typeof i == "function" ? i(g) : at(i, g)), m.push(/* @__PURE__ */ f(lt, { type: t, ...o }));
    }
    return m;
  };
  let c = [];
  return c = [...l(1, 1)], n.pageTotal <= 1 || (n.pageTotal <= e ? c = [...c, ...l(2, n.pageTotal)] : n.page < e - 2 ? c = [...c, ...l(2, e - 2), a(), ...l(n.pageTotal, n.pageTotal)] : n.page > n.pageTotal - e + 3 ? c = [...c, a(), ...l(n.pageTotal - e + 3, n.pageTotal)] : c = [...c, a(), ...l(n.page - Math.ceil((e - 4) / 2), n.page + Math.floor((e - 4) / 2)), a(), ...l(n.pageTotal, n.pageTotal)]), c;
}
let tu = class extends V {
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
      headingClass: d,
      titleClass: h,
      contentClass: m,
      arrowStyle: p,
      onlyInner: g
    } = t;
    let _ = /* @__PURE__ */ f(j, { content: r }, "content");
    (m || i) && (_ = /* @__PURE__ */ f("div", { className: m, children: _ }, "content"));
    const v = [], y = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: h, children: i }) : null,
      y
    ] }, "heading")) : v.push(y), v.push(_), c && v.push(/* @__PURE__ */ f("div", { className: typeof c == "string" ? c : "arrow", style: p }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: $("popover", a, { popup: n }), style: o, children: v });
  }
};
class Gr extends B {
}
Gr.NAME = "PopoverPanel";
Gr.Component = tu;
const eu = '[data-toggle="popover"]', jo = "show", Ko = "in";
class $t extends dt {
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
    const r = u(i), { animation: o, mask: a, onShow: l, onShown: c, trigger: d } = this.options;
    if (r.addClass(jo), o && r.addClass(o === !0 ? "fade" : o), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: h } = this;
      r.on(`mouseenter${h}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${h}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      r.addClass(Ko), this._resetTimer(() => {
        c == null || c.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: n, onHidden: i, trigger: r } = this.options, o = u(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), o.removeClass(Ko), r === "hover" && (this._clearDelayHide(), o.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), o.removeClass(jo), t && this._resetTimer(() => {
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
    n || (this._layoutWatcher = Ur(t, e, () => {
      const { width: i, animation: r, name: o = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), li(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: c, placement: d, strategy: h }) => {
        const m = u(e).css({
          position: h,
          left: a,
          top: l
        }), p = d.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[p], _ = c.arrow;
        _ && m.find(".arrow").css({
          left: _.x,
          top: _.y
        }).attr("class", `arrow ${o}-arrow arrow-${g}`), r === !0 && m.attr("class", `${m.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", p);
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
      r && r.element !== e && (r.destroy(), r = void 0), r ? r.render(n) : (r = new Gr(e, n), r.on("inited", () => this.layout())), this._panel = r;
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
    const t = this._triggerElement, e = this._targetElement, { placement: n, flip: i, shift: r, offset: o, arrow: a, strategy: l } = this.options, c = a ? e.querySelector(".arrow") : null, d = c ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: n,
      strategy: l,
      middleware: [
        i ? ii() : null,
        r ? $s(typeof r == "object" ? r : void 0) : null,
        o || d ? ri((o || 0) + d) : null,
        a ? Oi({ element: c }) : null
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
      closeBtn: d,
      arrow: h
    } = this.options;
    return {
      popup: e,
      title: n,
      titleClass: o,
      headingClass: r,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: c,
      closeBtn: d,
      arrow: h ? `arrow ${t}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof h == "number" ? h : 5}px` },
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
$t.NAME = "Popover";
$t.Z_INDEX = 1700;
$t.MULTI_INSTANCE = !0;
$t.DEFAULT = {
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
u(document).on(`click${$t.NAMESPACE} mouseenter${$t.NAMESPACE}`, eu, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data($t.KEY)) {
    const e = t.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    $t.ensure(t, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const su = '[data-toggle="dropdown"]';
class zt extends $t {
  constructor() {
    super(...arguments), this._onClickDoc = (t) => {
      u(t.target).closest(".not-hide-menu,.form-control,input,label").length || this.hide();
    };
  }
  _getMenuOptions() {
    const { items: t, placement: e, menu: n, onClickItem: i } = this.options;
    return {
      items: t,
      placement: e,
      onClickItem: i,
      ...n
    };
  }
  _getRenderOptions() {
    return {
      ...super._getRenderOptions(),
      contentClass: "",
      content: Wt(Yr, this._getMenuOptions())
    };
  }
}
zt.NAME = "Dropdown";
zt.DEFAULT = {
  ...$t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${zt.NAMESPACE} mouseenter${zt.NAMESPACE}`, su, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(zt.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), zt.ensure(t, i), s.preventDefault();
  }
});
class ci extends lt {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e, onClickItem: n } = this.props, i = u(this.triggerElement), r = zt.get(this.triggerElement), o = {
      items: e,
      onClickItem: n,
      ...t
    };
    r ? r.setOptions(o) : i.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var t;
    (t = zt.get(this.triggerElement)) == null || t.destroy();
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
ci.defaultProps = {
  caret: !0
};
Object.assign(Pt.ItemComponents, { dropdown: ci });
Object.assign(pt.ItemComponents, { dropdown: ci });
class Yr extends Bt {
  constructor() {
    super(...arguments), this._layoutTimer = 0;
  }
  _getClassName(t) {
    return ["dropdown-menu", super._getClassName(t)];
  }
  layout() {
    const t = this._ref.current, e = t == null ? void 0 : t.parentElement;
    !t || !e || li(e, t, {
      placement: this.props.placement,
      middleware: [ii(), $s(), ri(1)]
    }).then(({ x: n, y: i }) => {
      u(t).css({
        left: n,
        top: i
      });
    });
  }
  _afterRender(t) {
    super._afterRender(t), this.isRoot || (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  _renderNestedToggle(t, e) {
    if (typeof e == "boolean")
      return /* @__PURE__ */ f("span", { className: `${this.name}-toggle nested-toggle-icon`, children: /* @__PURE__ */ f("span", { className: "caret-right" }) });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
}
Yr.defaultProps = {
  ...Bt.defaultProps,
  popup: !0,
  searchBox: !1,
  nestedTrigger: "hover",
  placement: "right-start",
  defaultNestedShow: !1,
  expandOnSearch: !1
};
Yr.inheritNestedProps = [...Bt.inheritNestedProps, "popup"];
function nu({
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
    const d = { ...t, recPerPage: c };
    return {
      ...r,
      text: `${c}`,
      active: c === t.recPerPage,
      url: typeof e == "function" ? e(d) : at(e, d)
    };
  });
  const { text: a = "" } = o;
  return o.text = typeof a == "function" ? a(t) : at(a, t), i.menu = { ...i.menu, className: $((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(ci, { type: "dropdown", dropdown: i, ...o });
}
function iu({
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
  const d = { ...c };
  let h;
  const m = (_) => {
    var v;
    h = Number((v = _.target) == null ? void 0 : v.value) || 1, h = h > i.pageTotal ? i.pageTotal : h;
  }, p = (_) => {
    if (!(_ != null && _.target))
      return;
    h = h <= i.pageTotal ? h : i.pageTotal;
    const v = Es(i, h);
    a && !a({ info: v, event: _ }) || (_.target.href = d.url = typeof l == "function" ? l(v) : at(l, v));
  }, g = Es(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : at(l, g), /* @__PURE__ */ f("div", { className: $("input-group", "pager-goto-group", r ? `size-${r}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: m }),
    /* @__PURE__ */ f(lt, { type: n, ...d, onClick: p })
  ] });
}
const re = class extends pt {
  get pagerInfo() {
    return this._pagerInfo;
  }
  _beforeRender(t) {
    const { page: e = 1, recTotal: n = 0, recPerPage: i = 10 } = this.props;
    return this._pagerInfo = { page: +e, recTotal: +n, recPerPage: +i, pageTotal: i ? Math.ceil(n / i) : 0 }, super._beforeRender(t);
  }
  _getItem(t, e, n) {
    const i = super._getItem(t, e, n), r = e.type || "item", o = this._pagerInfo;
    return r === "info" ? u.extend(i, { pagerInfo: o }) : (r === "link" || r === "size-menu" || r === "nav" || r === "goto") && u.extend(i, { pagerInfo: o, linkCreator: t.linkCreator }), i;
  }
};
re.NAME = "pager";
re.ItemComponents = {
  ...pt.ItemComponents,
  info: Jd,
  link: [Zd, re.getBtnProps],
  nav: [Qd, re.getBtnProps],
  "size-menu": [nu, re.getBtnProps],
  goto: [iu, re.getBtnProps]
};
re.defaultItemProps = {
  btnType: "ghost",
  size: "sm"
};
let ru = re;
class Rl extends B {
}
Rl.NAME = "Pager";
Rl.Component = ru;
class zl extends B {
}
zl.NAME = "Pick";
zl.Component = gt;
var Ye, Os;
class Wl extends V {
  constructor(e) {
    super(e);
    F(this, Ye, void 0);
    F(this, Os, void 0);
    this._searchInput = Y(), this._measure = Y(), this._changeTimer = 0, U(this, Ye, (n) => {
      const i = n.target.value;
      this.setState({ search: i }, () => {
        const { onSearch: r } = this.props;
        r && (this._changeTimer && clearTimeout(this._changeTimer), this._changeTimer = window.setTimeout(() => {
          this._changeTimer = 0, r(i);
        }, this.props.debounce || 300));
      }), n.stopPropagation();
    }), U(this, Os, (n) => {
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
  componentWillUnmount() {
    clearTimeout(this._changeTimer);
  }
  render(e, n) {
    const { placeholder: i, inline: r } = e, { search: o } = n, a = o.trim().length > 0;
    let l;
    return r ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: this._measure, children: o }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: D(this, Os), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${r ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: o,
          onChange: D(this, Ye),
          onInput: D(this, Ye),
          ref: this._searchInput
        }
      ),
      l
    ] });
  }
}
Ye = new WeakMap(), Os = new WeakMap();
class ou extends Wr {
  constructor() {
    super(...arguments), this._search = Y(), this._handleDeselectClick = (t) => {
      const { onDeselect: e, state: { selections: n } } = this.props, i = u(t.target).closest(".picker-deselect-btn").attr("data-value");
      e && n.length && typeof i == "string" && e(i), t.stopPropagation();
    }, this._handleSearch = (t) => {
      this.props.changeState({ search: t });
    }, this._handleSearchClear = () => {
      this.props.togglePop(!0, { search: "" });
    }, this._renderSelection = (t) => {
      const { text: e } = t;
      return /* @__PURE__ */ f("div", { className: "picker-multi-selection", title: typeof e == "string" ? e : void 0, children: [
        /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(j, { content: e }) }),
        this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: this._handleDeselectClick, "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
      ] }, t.value);
    };
  }
  _handleClick(t) {
    var e;
    super._handleClick(t), (e = this._search.current) == null || e.focus();
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e }, searchHint: n } = t;
    return /* @__PURE__ */ f(
      Wl,
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
      this._skipTriggerChange !== n.value && a.trigger("change", Ri), this._skipTriggerChange = !1;
    }
  }
}
class au extends Wr {
  constructor() {
    super(...arguments), this._search = Y(), this._handleDeselectClick = (t) => {
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
    return $(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: e } } = t;
    return /* @__PURE__ */ f(
      Wl,
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
    const { children: e, state: { selections: n = [], open: i }, placeholder: r, search: o, disabled: a, clearable: l } = t, [c] = n, d = i && o;
    let h;
    if (d)
      h = this._renderSearch(t);
    else if (c) {
      const { text: g } = c;
      h = /* @__PURE__ */ f("span", { className: "picker-single-selection", title: typeof g == "string" ? g : void 0, children: /* @__PURE__ */ f(j, { content: g }) }, "main");
    } else
      h = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = l && !d ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: a, onClick: this._handleDeselectClick, children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      h,
      e,
      m,
      d ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
let Ks = class extends mt {
  _getItem(t, e, n) {
    return this.constructor.getTreeItem(t, super._getItem(t, e, n));
  }
  static getTreeItem(t, e) {
    return e && (e.type === "item" && (e.icon === void 0 && (e.icon = e.items ? e.expanded ? t.expandedIcon : t.collapsedIcon : t.normalIcon), e.actions === void 0 && (e.actions = t.itemActions)), e);
  }
};
Ks.NAME = "tree";
Ks.defaultItemProps = {
  ...mt.defaultItemProps,
  innerComponent: "div"
};
Ks.inheritNestedProps = [...mt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
let qs = class extends Bt {
  _getItem(t, e, n) {
    return Ks.getTreeItem(t, super._getItem(t, e, n));
  }
};
qs.NAME = "tree";
qs.inheritNestedProps = [...Bt.inheritNestedProps, "itemActions", "expandedIcon", "collapsedIcon", "normalIcon"];
qs.defaultItemProps = {
  ...Bt.defaultProps,
  innerComponent: "div"
};
function Ol(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && Ol(n.items, e), typeof n.value == "string" && e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
class lu extends _l {
  constructor() {
    super(...arguments), this._menu = Y(), this._disabledSet = /* @__PURE__ */ new Set(), this._getItem = (t, e) => {
      var c;
      if (t.parentKey !== void 0)
        return t;
      const n = new Set(this.props.valueList);
      let i = t.items, r = !1, o = !1;
      Array.isArray(i) && (r = !0, i = i.reduce((d, h, m) => {
        const p = this._getItem(h, m);
        return p && (p.active ? o = !0 : r = !1, d.push(p)), d;
      }, []));
      const a = r || n.has(t.value);
      t = {
        ...t,
        active: a,
        checked: this._hasCheckbox || typeof t.checked == "boolean" ? r ? !0 : o ? "indeterminate" : a : void 0,
        className: $(t.className, { hover: t.value !== void 0 && t.value === this.props.state.hoverItem }),
        items: i
      };
      const l = ((c = this._getItemCallback) == null ? void 0 : c.call(this, t, e)) ?? t;
      return l && (l.disabled && this._disabledSet.add(l.value), l);
    }, this._beforeRenderItem = (t, e) => {
      var n;
      return (n = this._renderItemCallback) == null ? void 0 : n.call(this, t, e);
    }, this._handleItemClick = ({ item: t, event: e }) => {
      const n = t.value, i = e.target;
      if (t.disabled || n === void 0 || i.closest(".item-icon,.nested-toggle-icon,.disabled") || Array.isArray(t.items) && t.items.every((d) => this._disabledSet.has(d.value)))
        return;
      const { multiple: r, onToggleValue: o, onSelect: a, togglePop: l, onDeselect: c } = this.props;
      if (r)
        if (t.items) {
          const h = [...Ol(t.items).values()].filter((m) => !m.items && !this._disabledSet.has(m.value)).map((m) => m.value);
          u(i).closest(".tree-item").children(".tree").children(".tree-item").children(".tree-item-inner.active").length ? c(h) : a(h);
        } else
          o(n);
      else
        a(n), l(!1, { search: "" });
    };
  }
  _getHoverItem() {
    const t = this.element;
    if (t)
      return u(t).find(".menu-item>a.hover");
  }
  _getClass(t) {
    return $(
      super._getClass(t),
      "picker-menu"
    );
  }
  _getMenuProps(t) {
    const { menu: e, tree: n, state: i, checkbox: r } = t, { items: o, search: a } = i;
    return H({
      ref: this._menu,
      className: "picker-menu-list",
      underlineKeys: !0,
      items: o,
      defaultNestedShow: !0,
      search: a,
      onClickItem: this._handleItemClick,
      nestedToggle: ".nested-toggle-icon,.item-icon",
      checkbox: r,
      searchProps: ["keys", "text", "title", "subtitle", "value"]
    }, e, n);
  }
  _renderPop(t) {
    const { tree: e } = t;
    this._disabledSet.clear();
    const n = this._getMenuProps(t);
    return this._hasCheckbox = !!n.checkbox, this._getItemCallback = n.getItem, this._renderItemCallback = n.beforeRenderItem, n.getItem = this._getItem, n.beforeRenderItem = this._beforeRenderItem, e ? /* @__PURE__ */ f(qs, { hover: !0, ...n }) : /* @__PURE__ */ f(Bt, { ...n });
  }
}
function gn(s, t) {
  return s.reduce((e, n) => (Array.isArray(n.items) && gn(n.items, e), e.set(n.value, n), e), t || /* @__PURE__ */ new Map());
}
let Xr = class extends gt {
  constructor(t) {
    super(t), this._updateTimer = 0, this._trigger = Y(), this.isEmptyValue = (r) => this._emptyValueSet.has(r), this.toggleValue = (r, o) => {
      if (!this.props.multiple)
        return o || r !== this.value ? this.setValue(r) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(r);
      if (o !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(r), this.setValue(a);
    }, this.deselect = (r) => {
      const { valueList: o } = this, a = new Set(this.formatValueList(r)), l = o.filter((c) => !a.has(c));
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
    this._emptyValueSet = new Set(n.split(e)), this.setValue = this.setValue.bind(this);
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((r) => r.value = String(r.value)), t.limitValueInList) {
        const r = gn(i);
        this.state.value = this.valueList.filter((o) => r.has(o)).join(t.valueSplitter);
      }
      !this.valueList.length && t.required && !t.multiple && (this.state.value = i[0].value ?? "");
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
  /**
   * @todo Let SearchMenu to load items.
   */
  async load() {
    let t = this._abort;
    t && t.abort(), t = new AbortController(), this._abort = t;
    const { items: e = [], searchDelay: n } = this.props, { search: i } = this.state;
    let r = [];
    if (Array.isArray(e))
      r = e;
    else if (await xn(n || 500), this._abort !== t || (r = await Gn(e, [this, i], { signal: t.signal }), this._abort !== t))
      return r;
    return this._abort = void 0, r;
  }
  changeState(t, e) {
    return super.changeState((n) => {
      const i = typeof t == "function" ? t(n) : t;
      if (i.value !== void 0 && i.value !== n.value || i.items && i.items !== n.items) {
        const r = i.items || n.items, o = gn(r);
        i.selections = this.formatValueList(i.value ?? n.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(o.get(l) || { value: l, text: l }), a), []);
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
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getPopProps(t, e) {
    return {
      ...super._getPopProps(t, e),
      menu: t.menu,
      tree: t.tree,
      checkbox: t.checkbox,
      multiple: t.multiple,
      search: t.search,
      searchHint: t.searchHint,
      valueList: this.valueList,
      onDeselect: this.deselect,
      onSelect: this.select,
      onClear: this.clear,
      onToggleValue: this.toggleValue,
      onSetValue: this.setValue
    };
  }
  _getTrigger(t) {
    return t.Trigger || (t.multiple ? ou : au);
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
        const a = gn(Array.isArray(r) ? r : this.state.items);
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
Xr.defaultProps = {
  ...gt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Xr.Pop = lu;
class Hl extends B {
}
Hl.NAME = "Picker";
Hl.Component = Xr;
class Bl extends dt {
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
    return i && n.middleware.push(ii()), r && n.middleware.push(r === !0 ? $s() : $s(r)), o && n.middleware.push(Oi({ element: this.$arrow[0] })), a && n.middleware.push(ri(a)), n;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = Ur(t, e, () => {
      li(t, e, this.computePositionConfig()).then(({ x: n, y: i, placement: r, middlewareData: o }) => {
        if (Object.assign(e.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !Oi || !o.arrow)
          return;
        const { x: a, y: l } = o.arrow, c = {
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
          [c]: "-4px"
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
Bl.NAME = "Popovers";
Bl.DEFAULT = {
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
class Fl extends B {
}
Fl.NAME = "SearchBox";
Fl.Component = Mr;
function Ci(s, t) {
  const [e, n] = Zn(s);
  return n === "%" ? t * e / 100 : e;
}
const qo = "is-resizing-sidebar", ki = "has-animation";
class Vl extends dt {
  get $container() {
    return u(this._container);
  }
  get side() {
    return this._side;
  }
  get width() {
    return this._width;
  }
  afterInit() {
    const { $element: t } = this, e = t.parent(), n = e[0], i = e.width();
    this._container = n;
    const {
      preserve: r,
      side: o = t.hasClass("sidebar-right") ? "right" : "left",
      gutterWidth: a = Zn(e.css("gap"))[0] || 1,
      toggleBtn: l,
      dbclick: c,
      animation: d,
      dragToResize: h,
      width: m,
      minWidth: p = 0,
      maxWidth: g = Number.MAX_SAFE_INTEGER
    } = this.options;
    this._storeID = r ? `SIDEBAR:${r}:width` : "", this._side = o, this._defaultWidth = Ci(m || t.width(), i), this._minWidth = Ci(p, i), this._maxWidth = Ci(g, i), this._width = (r ? we.get(this._storeID) : null) || this._defaultWidth, e.addClass(`has-sidebar-${o}`), t.addClass(`sidebar-${o}`);
    let _ = t.find(".sidebar-gutter");
    _.length || (_ = u('<div class="sidebar-gutter gutter gutter-horz"></div>').appendTo(t)), this._$gutter = _, this.render(), t.css({ "--gutter-width": `${a}px`, width: `var(--sidebar-${o}-width)` }), l && (_.append(`<button class="gutter-toggle" type="button"><span class="chevron-${o}"></span></button>`), _.on("click", ".gutter-toggle", () => this.toggle())), c && _.on("dblclick", () => {
      c === "reset" ? this.update(this._defaultWidth) : this.toggle();
    }), h && (this._moveable = new si(_, {
      selector: "self",
      move: !1,
      onMoveStart: () => {
        this._startWidth = this._width, t.removeClass(ki), e.addClass(qo);
      },
      onMove: (v, y) => {
        Math.abs(y.deltaX) < 10 || this.update(this._startWidth + y.deltaX);
      },
      onMoveEnd: () => {
        d && t.addClass(ki), e.removeClass(qo);
      }
    })), d && t.addClass(ki);
  }
  destroy() {
    var t;
    super.destroy(), this._raf && cancelAnimationFrame(this._raf), this._$gutter.off("click dbclick"), (t = this._moveable) == null || t.destroy();
  }
  toggle(t) {
    t = t ?? !!this._width, console.log("> toggle", t), t && (this._widthBack = this._width), this.update(t ? 0 : this._widthBack || this._defaultWidth);
  }
  update(t, e) {
    if (!e) {
      this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        this._raf = 0, this.update(t, !0);
      });
      return;
    }
    if (t = t < this._minWidth ? 0 : Math.min(this._maxWidth, t, this.$container.width()), t === this._width)
      return;
    const { preserve: n, onResize: i, onToggle: r } = this.options, o = !this._width, a = !t;
    this._width = t, n && we.set(this._storeID, t), this.render(), i == null || i(t), r && o !== a && r(a), this.emit("sidebarResize", t);
  }
  render() {
    const { side: t, width: e } = this, n = !e;
    this.$element.toggleClass("is-collapsed", n), this.$container.css(`--sidebar-${t}-width`, `${e}px`).toggleClass("is-sidebar-left-collapsed", n);
  }
}
Vl.NAME = "Sidebar";
Vl.DEFAULT = {
  minWidth: 40,
  toggleBtn: !0,
  animation: !0,
  dragToResize: !0,
  dbclick: "reset"
};
class Ul extends B {
}
Ul.NAME = "Toolbar";
Ul.Component = pt;
Le(Xh);
const cu = '[data-toggle="tooltip"]';
class Gt extends $t {
  _getRenderOptions() {
    const { type: t, className: e, title: n, content: i } = this.options;
    let r = n, o = i;
    return o === void 0 && (o = r, r = void 0), {
      ...super._getRenderOptions(),
      title: r,
      content: o,
      className: $("tooltip", t, e, r ? "tooltip-has-title" : ""),
      contentClass: r ? "tooltip-content" : ""
    };
  }
}
Gt.NAME = "Tooltip";
Gt.DEFAULT = {
  ...$t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Gt.NAMESPACE} mouseenter${Gt.NAMESPACE}`, cu, (s) => {
  const t = u(s.currentTarget);
  if (t.length && !t.data(Gt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Gt.ensure(t, { show: Gt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
class jl extends B {
}
jl.NAME = "Tree";
jl.Component = Ks;
class Kl extends B {
}
Kl.NAME = "SearchTree";
Kl.Component = qs;
class Zr extends dt {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? xh(n) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: n, listPosition: i, btnClass: r, tip: o, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${o}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${r}" for="${t}">${e}</label>`), n) {
        const m = u(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(m);
      }
      const h = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...h);
      return;
    }
    const c = u(`<span class="text-primary">${e}</span>`);
    if (n) {
      const h = u(`<i class="icon icon-${n} mr-1"></i>`);
      c.prepend(h);
    }
    this.$label = u(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${t}"></label>`).append(c).append(l), this.bindDragEvent();
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
      const c = [];
      for (let d of t) {
        if (n && this.fileMap.size >= n)
          return o == null || o(c), alert(r);
        if (this.currentBytes + d.size > this.limitBytes)
          return o == null || o(c), alert(i);
        d = this.renameDuplicatedFile(d);
        const h = this.createFileItem(d);
        this.itemMap.set(d.name, h), this.$list.append(h), c.push(d);
      }
      o == null || o(c);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), o == null || o(a);
  }
  deleteFileItem(t) {
    var l, c;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const n = this.fileMap.get(e);
    if (!n)
      return;
    const { onDelete: i, onSizeChange: r } = this.options, o = this.itemMap.get(n.name);
    this.itemMap.delete(n.name), o == null || o.addClass("hidden");
    const a = (l = o == null ? void 0 : o.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), (c = a.tooltip) == null || c.remove()), setTimeout(() => o == null ? void 0 : o.remove(), 3e3), i == null || i(n), this.fileMap.delete(n.name), this.currentBytes -= n.size, r == null || r(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((d) => this.dataTransfer.items.add(d)), this.$input.prop("files", this.dataTransfer.files);
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
      return new Gt(r, { title: e }), r;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: n, deleteClass: i } = this.options;
    if (t) {
      const r = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return r.data("tooltip", new Gt(r, { title: e })), r;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${kh(t)}</span>`);
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
        const h = r.closest(".file-item"), m = h.find(".file-name");
        if (m.html() === o.val()) {
          r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(o.val()))
          return alert(i);
        this.renameFileItem(t, o.val()), r.addClass("hidden"), h.find(".file-info.hidden").removeClass("hidden"), m.html(o.val());
      } else
        d.key === "Escape" && (o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = r.closest(".file-item"), h = d.find(".file-name");
      if (h.html() === o.val()) {
        r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(o.val()))
        return alert(i);
      this.renameFileItem(t, o.val()), r.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), h.html(o.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      o.val(t.name), r.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), c = u('<div class="btn-group"></div').append(a).append(l);
    return r.append(o).append(c);
  }
}
Zr.NAME = "Upload";
Zr.DEFAULT = {
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
class ql extends Zr {
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
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})`, backgroundSize: "cover" }).prependTo(e);
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
ql.NAME = "UploadImgs";
ql.DEFAULT = {
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
let er = class extends Z {
  _renderContent(t) {
    const {
      subtitle: e,
      subtitleClass: n,
      content: i,
      contentClass: r
    } = t;
    if (!(!e && !i))
      return [
        /* @__PURE__ */ f("div", { className: $("card-content", r), children: [
          e ? /* @__PURE__ */ f("div", { className: $("card-subtitle", n), children: /* @__PURE__ */ f(j, { content: e }) }, "subtitle") : null,
          i ? /* @__PURE__ */ f(j, { content: i }, "extraContent") : null
        ] }, "content")
      ];
  }
  _renderHeading(t) {
    const {
      icon: e,
      prefix: n,
      prefixClass: i,
      title: r,
      titleClass: o,
      titleUrl: a,
      titleAttrs: l,
      suffix: c,
      suffixClass: d,
      heading: h,
      headingClass: m
    } = t;
    if (!e && !n && !r && !c && !h)
      return;
    const p = a ? "a" : "span";
    return /* @__PURE__ */ f("div", { className: $("card-heading", m), children: [
      e ? /* @__PURE__ */ f(J, { className: "card-icon", icon: e }, "icon") : null,
      n ? /* @__PURE__ */ f("span", { className: $("card-prefix", i), children: n }, "prefix") : null,
      r ? /* @__PURE__ */ f(p, { className: $("card-title", o), href: a, ...l, children: /* @__PURE__ */ f(j, { content: r }) }, "title") : null,
      c ? /* @__PURE__ */ f("span", { className: $("card-suffix", d), children: c }, "suffix") : null,
      h ? /* @__PURE__ */ f(j, { content: h }, "extraHeading") : null
    ] });
  }
  _renderHeader(t) {
    const {
      header: e,
      headerClass: n
    } = t;
    if (e)
      return /* @__PURE__ */ f("div", { className: $("card-header", n), children: /* @__PURE__ */ f(j, { content: e }, "header") });
  }
  _renderFooter(t) {
    const {
      footer: e,
      footerClass: n,
      footActions: i
    } = t;
    if (e || i)
      return /* @__PURE__ */ f("div", { className: $("card-footer", n), children: [
        /* @__PURE__ */ f(j, { content: e }, "footer"),
        pt.render(i, [t], { key: "foot-actions", className: "card-foot-actions", size: "sm" }, this)
      ] });
  }
  _renderActions(t) {
    return pt.render(t.actions, [t], { key: "actions", className: "card-actions", size: "sm" }, this);
  }
  _renderList(t) {
    const { items: e } = t;
    if (!e)
      return;
    const n = H({ key: "list", className: "card-list" }, typeof e == "object" ? e : { items: e });
    return /* @__PURE__ */ f(me, { ...n });
  }
  _renderAvatar(t) {
    const {
      avatar: e
    } = t;
    if (e) {
      const n = typeof e == "function" ? e.call(this, t) : e;
      if (n)
        return n.className = $("item-avatar", n.className), /* @__PURE__ */ f(Hs, { ...n }, "avatar");
    }
  }
  _getClassName(t) {
    return ["card", t.className];
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
}, es = class extends me {
};
es.NAME = "card-list";
es.TAG = "div";
es.ItemComponents = {
  ...me.ItemComponents,
  default: er,
  item: er
};
es.defaultItemProps = {
  component: "div"
};
class Gl extends B {
}
Gl.NAME = "Card";
Gl.Component = er;
class Yl extends B {
}
Yl.NAME = "CardList";
Yl.Component = es;
class Jr extends zt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Jr.NAME = "ContextMenu";
Jr.DEFAULT = {
  ...zt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
function hu(s) {
  const { left: t, top: e, id: n, onMenuBtnClick: i, title: r, width: o, height: a, content: l, loading: c, draggable: d = !0 } = s;
  return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: o, height: a }, children: /* @__PURE__ */ f(
    "div",
    {
      class: `dashboard-block load-indicator${c && !l ? " loading" : ""}${i ? " has-more-menu" : ""}`,
      draggable: d,
      "data-id": n,
      children: [
        /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: r }),
          i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
        ] }),
        u.isPlainObject(l) && l.html ? /* @__PURE__ */ f(Te, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
      ]
    }
  ) });
}
const xi = ([s, t, e, n], [i, r, o, a]) => !(s + e <= i || i + o <= s || t + n <= r || r + a <= t), Go = (s, t) => s[1] === t[1] ? s[0] - t[0] : s[1] - t[1], on = "Dashboard:Block.cache:";
let Xl = class extends V {
  constructor(t) {
    super(t), this._ref = Y(), this._loadTimer = 0, this._map = /* @__PURE__ */ new Map(), this._oldMap = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._checkLayout = () => {
      const { onLayoutChange: e } = this.props;
      if (!e)
        return;
      const { blocks: n } = this.state, i = {};
      let r = !1;
      n.forEach((o) => {
        const [a, l, c, d] = this._map.get(o.id), h = this._oldMap.get(o.id);
        (!h || h[0] !== a || h[1] !== l || h[2] !== c || h[3] !== d) && (r = !0, i[o.id] = { left: a, top: l, width: c, height: d }, this._oldMap.set(o.id, [a, l, c, d]));
      }), r && e(i);
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
      Jr.show({
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
    const { id: n } = t, { blocks: i } = this.state, r = i.findIndex((a) => a.id === n);
    if (r < 0)
      return;
    const o = i[r];
    t.fetch && t.fetch !== o.fetch && t.needLoad === void 0 && (t.needLoad = !0), i[r] = { ...o, ...t }, this.setState({ blocks: i }, e);
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
    !n || n.loading || (e = e || n.fetch, e && this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      try {
        const i = await u.fetch(e, [t, n], ({ url: r }) => ({ url: at(r, n), dataType: "html" }));
        this.update({ id: t, loading: !1, content: { html: i } }, () => {
          var r;
          this._setCache(t, i), (r = this.props.onLoad) == null || r.call(this, n);
        });
      } catch (i) {
        const r = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
          "Error: ",
          i.message
        ] });
        this.update({ id: t, loading: !1, content: r }, () => {
          var o;
          (o = this.props.onLoadFail) == null || o.call(this, i, n);
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
        typeof n == "string" ? we.set(`${on}${n}:${t}`, e) : we.session.set(`${on}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const n = typeof e == "string" ? we.get(`${on}${e}:${t}`) : we.session.get(`${on}${t}`);
    if (n)
      return { html: n };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: n, grid: i } = this.props;
    return t.map((o) => {
      const {
        id: a,
        size: l,
        width: c,
        height: d,
        left: h = -1,
        top: m = -1,
        fetch: p = e,
        menu: g = n,
        content: _,
        ...v
      } = o, [y, b] = this._getBlockSize(c && d ? { width: c, height: d } : l);
      return {
        id: `${a}`,
        width: y,
        height: b,
        left: Math.min(h, i - y),
        top: m,
        fetch: p,
        menu: g,
        content: _ ?? this._getCache(`${a}`),
        loading: !1,
        needLoad: !!p,
        ...v
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: n } = this.props;
    return t = t ?? e, typeof t == "string" && (t = n[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    const { blocks: t, dragging: e, dropping: n } = this.state, i = this._map;
    if (i.size) {
      const a = [0, 0, 0, 0];
      t.sort((l, c) => Go(i.get(l.id) || a, i.get(c.id) || a));
    }
    i.clear(), e && n && i.set(e, n), t.forEach((a) => {
      a.id !== e && this._layoutBlock(a);
    });
    const r = Array.from(i.entries());
    r.sort((a, l) => Go(a[1], l[1]));
    let o = 0;
    return r.forEach(([a, l]) => {
      let c = l[1] - 1;
      for (; c >= 0 && this._canMove([l[0], c, l[2], l[3]], a); )
        c--;
      c++, l[1] = c, o = Math.max(o, c + l[3]);
    }), n && (o = Math.max(o, n[1] + n[3])), { blocks: t, height: o };
  }
  _initDraggable() {
    const t = this._ref.current;
    this._draggable = new ei(t, {
      selector: ".dashboard-block",
      target: () => t,
      beforeDrag: (e, n) => {
        const i = n.getBoundingClientRect();
        if (e.clientY - i.top > 48)
          return e.preventDefault(), !1;
        this._dragOffset = [e.clientX - i.left, e.clientY - i.top];
      },
      onDragStart: (e, n) => {
        const i = n.dataset.id;
        i !== void 0 && (this._dragging = this._map.get(i), this.setState({ dragging: i }));
      },
      onDragOver: (e) => {
        const { cellHeight: n, grid: i } = this.props, r = t.getBoundingClientRect(), [, , o, a] = this._dragging, [l, c] = this._dragOffset, d = Math.min(i - o, Math.max(0, Math.round((e.clientX - r.left - l) / (r.width / i)))), h = Math.max(0, Math.round((e.clientY - r.top - c) / n)), m = this.state.dropping;
        m && m[0] === d && m[1] === h || this.setState({ dropping: [d, h, o, a] });
      },
      onDragEnd: () => {
        const { dragging: e, dropping: n } = this.state, i = { dragging: void 0, dropping: void 0 }, r = {};
        if (e && n) {
          const { blocks: o } = this.state;
          o.forEach((a, l) => {
            const [c, d] = e === a.id ? n : this._map.get(a.id);
            (a.left !== c || a.top !== d) && (o[l] = { ...a, left: c, top: d }, r[a.id] = { left: c, top: d });
          }), i.blocks = o;
        }
        this.setState(i, this._checkLayout), this._dragging = void 0, this._dragOffset = void 0;
      }
    });
  }
  _layoutBlock(t) {
    const { id: e, left: n, top: i, width: r, height: o } = t, a = [n, i, r, o];
    n < 0 || i < 0 ? this._appendBlock(e, a) : this._insertBlock(e, a);
  }
  _canMove(t, e) {
    const { dropping: n } = this.state;
    if (n && xi(t, n))
      return !1;
    for (const [i, r] of this._map.entries())
      if (i !== e && xi(r, t))
        return !1;
    return !0;
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    return this._canMove(t, e);
  }
  _insertBlock(t, e) {
    const { dropping: n } = this.state;
    for (n && xi(e, n) && (e[1] = n[1] + n[3]); !this._canPlace(e); )
      e[1] = e[1] + 1;
    this._map.set(t, e);
  }
  _appendBlock(t, e) {
    const [n, i, r, o] = e;
    let a = i;
    if (n >= 0 && i >= 0) {
      if (this._canPlace(e)) {
        this._map.set(t, [n, i, r, o]);
        return;
      }
      a = -1;
    }
    let l = n < 0 ? 0 : n, c = a < 0 ? 0 : a, d = !1;
    const h = this.props.grid;
    for (; !d; ) {
      if (this._canPlace([l, c, r, o])) {
        d = !0;
        break;
      }
      n < 0 ? (l += 1, l + r > h && (l = 0, c += 1)) : c += 1;
    }
    this._map.set(t, [l, c, r, o]);
  }
  componentDidMount() {
    this.loadNext(), u(window).on("scroll", this.tryLoadNext), this._initDraggable();
    for (const [t, e] of this._map.entries())
      this._oldMap.set(t, [...e]);
  }
  componentDidUpdate(t) {
    t.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), u(window).off("scroll", this.tryLoadNext), this._draggable.destroy();
  }
  render() {
    const { blocks: t, height: e } = this._layout(), { cellHeight: n, grid: i } = this.props, { dropping: r, dragging: o } = this.state, a = this._map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * n },
        ref: this._ref,
        children: [
          r ? /* @__PURE__ */ f(
            "div",
            {
              className: "dashboard-drop-shadow",
              style: { left: `${100 * r[0] / i}%`, top: n * r[1], width: `${100 * r[2] / i}%`, height: n * r[3] }
            },
            "dropping"
          ) : null,
          t.map((l, c) => {
            const { id: d, menu: h, content: m, title: p } = l, [g, _, v, y] = d === o && r ? r : a.get(d) || [0, 0, l.width, l.height];
            return /* @__PURE__ */ f(
              hu,
              {
                id: d,
                index: c,
                left: `${100 * g / i}%`,
                top: n * _,
                width: `${100 * v / i}%`,
                height: n * y,
                content: m,
                title: p,
                onMenuBtnClick: h ? this._handleMenuClick : void 0
              },
              l.id
            );
          })
        ]
      }
    ) });
  }
};
Xl.defaultProps = {
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
class Zl extends B {
}
Zl.NAME = "Dashboard";
Zl.Component = Xl;
var ae, le;
class Yo extends V {
  constructor(e) {
    super(e);
    F(this, ae, void 0);
    F(this, le, void 0);
    U(this, ae, 0), U(this, le, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, r = n.target;
      if (!(!r || !i) && (typeof i == "string" && r.closest(i) || typeof i == "object")) {
        const o = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(o) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (D(this, ae) && cancelAnimationFrame(D(this, ae)), U(this, ae, requestAnimationFrame(() => {
        const r = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + r * this.props.scrollSize / this.props.clientSize), U(this, ae, 0);
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
    e && (U(this, le, typeof e == "string" ? document : e.current), D(this, le).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), D(this, le) && D(this, le).removeEventListener("wheel", this._handleWheel);
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
      right: d
    } = this.props, { maxScrollPos: h, scrollPos: m } = this, { dragStart: p } = this.state, g = {
      left: a,
      top: l,
      bottom: c,
      right: d,
      ...o
    }, _ = {};
    return n === "horz" ? (g.height = i, g.width = e, _.width = this.barSize, _.left = Math.round(Math.min(h, m) * (e - _.width) / h)) : (g.width = i, g.height = e, _.height = this.barSize, _.top = Math.round(Math.min(h, m) * (e - _.height) / h)), /* @__PURE__ */ f(
      "div",
      {
        className: $("scrollbar", r, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": p
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
ae = new WeakMap(), le = new WeakMap();
const Dn = /* @__PURE__ */ new Map(), Ln = [];
function Jl(s, t) {
  const { name: e } = s;
  if (!(t != null && t.override) && Dn.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  Dn.set(e, s), t != null && t.buildIn && !Ln.includes(e) && Ln.push(e);
}
function ee(s, t) {
  Jl(s, t);
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
function Ql(s) {
  return Dn.delete(s);
}
function du(s) {
  if (typeof s == "string") {
    const t = Dn.get(s);
    return t || console.warn(`DTable: Cannot found plugin "${s}"`), t;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function tc(s, t, e) {
  return t.forEach((n) => {
    var r;
    if (!n)
      return;
    const i = du(n);
    i && (e.has(i.name) || ((r = i.plugins) != null && r.length && tc(s, i.plugins, e), s.push(i), e.add(i.name)));
  }), s;
}
function uu(s = [], t = !0) {
  return t && Ln.length && s.unshift(...Ln), s != null && s.length ? tc([], s, /* @__PURE__ */ new Set()) : [];
}
function ec() {
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
function fu(s, t, e) {
  return s && (t && (s = Math.max(t, s)), e && (s = Math.min(e, s))), s;
}
function Xo(s, t) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof t == "number" && (typeof s != "number" || isNaN(s)) && (s = t), s;
}
function $i(s, t = !1) {
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
function pu(s, t, e, n) {
  const { defaultColWidth: i, minColWidth: r, maxColWidth: o, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, c = (b) => (typeof b == "function" && (b = b.call(s)), b = Xo(b, 0), b < 1 && (b = Math.round(b * n)), b), d = {
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
  }, m = {
    ...d,
    list: [],
    flexList: [],
    widthSetting: c(l)
  }, p = [], g = {};
  let _ = !1;
  const v = [], y = {};
  if (e.forEach((b) => {
    const { colTypes: k, onAddCol: x } = b;
    k && Object.entries(k).forEach(([w, N]) => {
      y[w] || (y[w] = []), y[w].push(N);
    }), x && v.push(x);
  }), t.cols.forEach((b) => {
    if (b.hidden)
      return;
    const { type: k = "", name: x } = b, w = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: r,
      maxWidth: o,
      ...b,
      type: k
    }, N = {
      name: x,
      type: k,
      setting: w,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: p.length
    }, L = y[k];
    L && L.forEach((K) => {
      const tt = typeof K == "function" ? K.call(s, w) : K;
      tt && Object.assign(w, tt, b);
    });
    const { fixed: R, flex: W, minWidth: A = r, maxWidth: z = o } = w, G = Xo(w.width || i, i);
    N.flex = W === !0 ? 1 : typeof W == "number" ? W : 0, N.width = fu(G < 1 ? Math.round(G * n) : G, A, z), v.forEach((K) => K.call(s, N)), p.push(N), g[N.name] = N;
    const T = R ? R === "left" ? h : m : d;
    T.list.push(N), T.totalWidth += N.width, T.width = T.totalWidth, N.flex && T.flexList.push(N), typeof w.order == "number" && (_ = !0);
  }), _) {
    const b = (k, x) => (k.setting.order ?? 0) - (x.setting.order ?? 0);
    p.sort(b), h.list.sort(b), d.list.sort(b), m.list.sort(b);
  }
  return $i(h, !0), $i(m, !0), d.widthSetting = n - h.width - m.width, $i(d), {
    list: p,
    map: g,
    left: h,
    center: d,
    right: m
  };
}
function mu({ col: s, className: t, height: e, row: n, onRenderCell: i, style: r, outerStyle: o, children: a, outerClass: l, width: c, left: d, top: h, ...m }) {
  var G;
  const p = {
    left: d ?? s.left,
    top: h ?? n.top,
    width: c ?? s.realWidth,
    height: e,
    ...o
  }, { align: g, border: _ } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...r
  }, y = ["dtable-cell", l, t, s.setting.className, {
    "has-border-left": _ === !0 || _ === "left",
    "has-border-right": _ === !0 || _ === "right"
  }], b = ["dtable-cell-content", s.setting.cellClass], k = (G = n.data) == null ? void 0 : G[s.name], x = [a ?? k ?? ""], w = i ? i(x, { row: n, col: s, value: k }, Wt) : x, N = [], L = [], R = {}, W = {};
  let A = "div";
  w == null || w.forEach((T) => {
    if (typeof T == "object" && T && !ft(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const K = T.outer ? N : L;
      T.html ? K.push(/* @__PURE__ */ f("div", { className: $("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? p : v, T.style), T.className && (T.outer ? y : b).push(T.className), T.children && K.push(T.children), T.attrs && Object.assign(T.outer ? R : W, T.attrs)), T.tagName && !T.outer && (A = T.tagName);
    } else
      L.push(T);
  });
  const z = A;
  return /* @__PURE__ */ f(
    "div",
    {
      className: $(y),
      style: p,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...m,
      ...R,
      children: [
        L.length > 0 && /* @__PURE__ */ f(z, { className: $(b), style: v, ...W, children: L }),
        N
      ]
    }
  );
}
function Si({
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
  CellComponent: d = mu,
  onRenderCell: h
}) {
  var _;
  const m = Array.isArray(s) ? s : [s], p = ((_ = m[0]) == null ? void 0 : _.top) ?? 0, g = m.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: $("dtable-cells", c),
      style: { top: o, left: r, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -n, top: -i + p }, children: m.reduce((v, y, b) => {
        const k = t.length;
        return t.forEach((x, w) => {
          v.push(
            /* @__PURE__ */ f(
              d,
              {
                className: $(
                  `is-${y.index % 2 ? "odd" : "even"}-row`,
                  w ? "" : "is-first-in-row",
                  w === k - 1 ? "is-last-in-row" : "",
                  b ? "" : "is-first-row",
                  b === g - 1 ? "is-last-row" : ""
                ),
                col: x,
                row: y,
                top: y.top - p,
                height: e,
                onRenderCell: h
              },
              `${y.index}:${x.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function sc({
  top: s,
  height: t,
  rowHeight: e,
  rows: n,
  cols: { left: i, center: r, right: o },
  scrollLeft: a,
  scrollTop: l,
  className: c,
  style: d,
  onRenderCell: h,
  children: m
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ f(
    Si,
    {
      className: "dtable-fixed-left",
      rows: n,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: h
    },
    "left"
  ));
  let g = null;
  r.list.length && (g = /* @__PURE__ */ f(
    Si,
    {
      rows: n,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: r.list,
      left: i.width,
      width: r.width,
      rowHeight: e,
      onRenderCell: h
    },
    "center"
  ));
  let _ = null;
  return o.list.length && (_ = /* @__PURE__ */ f(
    Si,
    {
      className: "dtable-fixed-right",
      rows: n,
      scrollTop: l,
      cols: o.list,
      left: i.width + r.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: h
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: $("dtable-block", c),
      style: { ...d, top: s, height: t },
      children: [
        p,
        g,
        _,
        m
      ]
    }
  );
}
var Qr = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, I = (s, t, e) => (Qr(s, t, "read from private field"), e ? e.call(s) : t.get(s)), O = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, et = (s, t, e, n) => (Qr(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), xt = (s, t, e) => (Qr(s, t, "access private method"), e), He, ps, Ne, Yt, Ce, ut, Kt, jt, ms, _n, Rn, Ts, ne, gs, _s, sr, nc, nr, ic, ir, rc, rr, oc, yn, or, hi, zn, ar, lr, cr, hr, ys, vn, to, ac, eo, lc, dr, cc;
let so = class extends V {
  constructor(t) {
    super(t), O(this, sr), O(this, nr), O(this, ir), O(this, rr), O(this, yn), O(this, ys), O(this, to), O(this, eo), O(this, dr), this.ref = Y(), O(this, He, 0), O(this, ps, void 0), O(this, Ne, !1), O(this, Yt, void 0), O(this, Ce, void 0), O(this, ut, []), O(this, Kt, void 0), O(this, jt, /* @__PURE__ */ new Map()), O(this, ms, {}), O(this, _n, void 0), O(this, Rn, []), O(this, Ts, { in: !1 }), this.updateLayout = () => {
      I(this, He) && cancelAnimationFrame(I(this, He)), et(this, He, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), et(this, He, 0);
      }));
    }, O(this, ne, (e, n) => {
      n = n || e.type;
      const i = I(this, jt).get(n);
      if (i != null && i.length) {
        for (const r of i)
          if (r.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), O(this, gs, (e) => {
      I(this, ne).call(this, e, `window_${e.type}`);
    }), O(this, _s, (e) => {
      I(this, ne).call(this, e, `document_${e.type}`);
    }), O(this, hi, (e, n, i) => {
      const { row: r, col: o } = n;
      n.value = this.getCellValue(r, o), e[0] = n.value;
      const a = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return I(this, ut).forEach((l) => {
        l[a] && (e = l[a].call(this, e, n, i));
      }), this.options[a] && (e = this.options[a].call(this, e, n, i)), o.setting[a] && (e = o.setting[a].call(this, e, n, i)), e;
    }), O(this, zn, (e, n) => {
      n === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), O(this, ar, (e) => {
      var a, l, c;
      const n = this.getPointerInfo(e);
      if (!n)
        return;
      const { rowID: i, colName: r, cellElement: o } = n;
      if (i === "HEADER")
        o && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: r, element: o }), I(this, ut).forEach((d) => {
          var h;
          (h = d.onHeaderCellClick) == null || h.call(this, e, { colName: r, element: o });
        }));
      else {
        const d = this.layout.visibleRows.find((h) => h.id === i);
        if (o) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
            return;
          for (const h of I(this, ut))
            if (((c = h.onCellClick) == null ? void 0 : c.call(this, e, { colName: r, rowID: i, rowInfo: d, element: o })) === !0)
              return;
        }
      }
    }), O(this, lr, (e) => {
      const n = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(n))
        return !this.scroll({ to: n.replace("page", "") });
    }), O(this, cr, (e) => {
      const n = u(e.target).closest(".dtable-cell");
      if (!n.length)
        return xt(this, ys, vn).call(this, !1);
      xt(this, ys, vn).call(this, [n.attr("data-row"), n.attr("data-col")]);
    }), O(this, hr, () => {
      xt(this, ys, vn).call(this, !1);
    }), et(this, ps, t.id ?? `dtable-${il(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, et(this, Ce, Object.freeze(uu(t.plugins))), I(this, Ce).forEach((e) => {
      var o;
      const { methods: n, data: i, state: r } = e;
      n && Object.entries(n).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(I(this, ms), i.call(this)), r && Object.assign(this.state, r.call(this)), (o = e.onCreate) == null || o.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = I(this, Kt)) == null ? void 0 : t.options) || I(this, Yt) || ec();
  }
  get plugins() {
    return I(this, ut);
  }
  get layout() {
    return I(this, Kt);
  }
  get id() {
    return I(this, ps);
  }
  get data() {
    return I(this, ms);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return I(this, Ts);
  }
  componentWillReceiveProps() {
    et(this, Yt, void 0);
  }
  componentDidMount() {
    I(this, Ne) ? this.forceUpdate() : xt(this, yn, or).call(this), I(this, ut).forEach((e) => {
      let { events: n } = e;
      n && (typeof n == "function" && (n = n.call(this)), Object.entries(n).forEach(([i, r]) => {
        r && this.on(i, r);
      }));
    }), this.on("click", I(this, ar)), this.on("keydown", I(this, lr));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", I(this, cr)), this.on("mouseleave", I(this, hr))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const n = new ResizeObserver(this.updateLayout);
          n.observe(e), et(this, _n, n);
        }
      } else
        this.on("window_resize", this.updateLayout);
    I(this, ut).forEach((e) => {
      var n;
      (n = e.onMounted) == null || n.call(this);
    });
  }
  componentDidUpdate() {
    I(this, Ne) ? xt(this, yn, or).call(this) : I(this, ut).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = I(this, _n)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const n of I(this, jt).keys())
        n.startsWith("window_") ? window.removeEventListener(n.replace("window_", ""), I(this, gs)) : n.startsWith("document_") ? document.removeEventListener(n.replace("document_", ""), I(this, _s)) : t.removeEventListener(n, I(this, ne));
    I(this, ut).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
    }), I(this, Ce).forEach((n) => {
      var i;
      (i = n.onDestory) == null || i.call(this);
    }), et(this, ms, {}), I(this, jt).clear();
  }
  on(t, e, n) {
    var r;
    n && (t = `${n}_${t}`);
    const i = I(this, jt).get(t);
    i ? i.push(e) : (I(this, jt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), I(this, gs)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), I(this, _s)) : (r = this.element) == null || r.addEventListener(t, I(this, ne)));
  }
  off(t, e, n) {
    var o;
    n && (t = `${n}_${t}`);
    const i = I(this, jt).get(t);
    if (!i)
      return;
    const r = i.indexOf(e);
    r >= 0 && i.splice(r, 1), i.length || (I(this, jt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), I(this, gs)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), I(this, _s)) : (o = this.element) == null || o.removeEventListener(t, I(this, ne)));
  }
  emitCustomEvent(t, e) {
    I(this, ne).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: n, scrollTop: i, rowsHeightTotal: r, rowsHeight: o, rowHeight: a, cols: { center: { totalWidth: l, width: c } } } = this.layout, { to: d } = t;
    let { scrollLeft: h, scrollTop: m } = t;
    if (d === "up" || d === "down")
      m = i + (d === "down" ? 1 : -1) * Math.floor(o / a) * a;
    else if (d === "left" || d === "right")
      h = n + (d === "right" ? 1 : -1) * c;
    else if (d === "top")
      m = 0;
    else if (d === "bottom")
      m = r - o;
    else if (d === "begin")
      h = 0;
    else if (d === "end")
      h = l - c;
    else {
      const { offsetLeft: g, offsetTop: _ } = t;
      typeof g == "number" && (h = n + g), typeof _ == "number" && (h = i + _);
    }
    const p = {};
    return typeof h == "number" && (h = Math.max(0, Math.min(h, l - c)), h !== n && (p.scrollLeft = h)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - o)), m !== i && (p.scrollTop = m)), Object.keys(p).length ? (this.setState(p, () => {
      var g;
      (g = this.options.onScroll) == null || g.call(this, p), e == null || e.call(this, !0);
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
    if (!I(this, Yt))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: n, state: i } = t;
    if (n === "layout")
      et(this, Kt, void 0);
    else if (n === "options") {
      if (et(this, Yt, void 0), !I(this, Kt))
        return;
      et(this, Kt, void 0);
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
    return rt(I(this, Rn), t, e, n, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = xt(this, dr, cc).call(this);
    const { className: e, rowHover: n, colHover: i, cellHover: r, bordered: o, striped: a, scrollbarHover: l, beforeRender: c, emptyTip: d } = this.options, h = {}, m = ["dtable", e, {
      "dtable-hover-row": n,
      "dtable-hover-col": i,
      "dtable-hover-cell": r,
      "dtable-bordered": o,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      const g = !t.rows.length;
      if (m.push(t.className, g ? "dtable-is-empty" : ""), c) {
        const _ = c.call(this, t);
        _ && (t = _);
      }
      I(this, ut).forEach((_) => {
        var y;
        const v = (y = _.beforeRender) == null ? void 0 : y.call(this, t);
        v && (t = v);
      }), h.width = t.width, h.height = t.height, h["--dtable-row-height"] = `${t.rowHeight}px`, m.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), g && d ? (delete h.height, p.push(
        /* @__PURE__ */ f("div", { className: "dtable-empty-tip", children: /* @__PURE__ */ f(j, { content: d, generatorThis: this, generatorArgs: [t] }) }, "empty-tip")
      )) : (p.push(
        xt(this, sr, nc).call(this, t),
        xt(this, nr, ic).call(this, t),
        xt(this, ir, rc).call(this, t)
      ), t.scrollable && p.push(xt(this, rr, oc).call(this, t))), I(this, ut).forEach((_) => {
        var y;
        const v = (y = _.onRender) == null ? void 0 : y.call(this, t);
        v && (v.style && Object.assign(h, v.style), v.className && m.push(v.className), v.children && p.push(v.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: I(this, ps),
        className: $(m),
        style: h,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
He = /* @__PURE__ */ new WeakMap();
ps = /* @__PURE__ */ new WeakMap();
Ne = /* @__PURE__ */ new WeakMap();
Yt = /* @__PURE__ */ new WeakMap();
Ce = /* @__PURE__ */ new WeakMap();
ut = /* @__PURE__ */ new WeakMap();
Kt = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
ms = /* @__PURE__ */ new WeakMap();
_n = /* @__PURE__ */ new WeakMap();
Rn = /* @__PURE__ */ new WeakMap();
Ts = /* @__PURE__ */ new WeakMap();
ne = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
_s = /* @__PURE__ */ new WeakMap();
sr = /* @__PURE__ */ new WeakSet();
nc = function(s) {
  const { header: t, cols: e, headerHeight: n, scrollLeft: i, headerChildren: r } = s;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      sc,
      {
        className: "dtable-header",
        cols: e,
        height: n,
        scrollLeft: i,
        rowHeight: n,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: I(this, hi),
        children: r
      },
      "header"
    );
  const o = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Ha,
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
nr = /* @__PURE__ */ new WeakSet();
ic = function(s) {
  const { headerHeight: t, rowsHeight: e, visibleRows: n, rowHeight: i, cols: r, scrollLeft: o, scrollTop: a, bodyChildren: l } = s;
  return /* @__PURE__ */ f(
    sc,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: n,
      rowHeight: i,
      scrollLeft: o,
      scrollTop: a,
      cols: r,
      onRenderCell: I(this, hi),
      children: l
    },
    "body"
  );
};
ir = /* @__PURE__ */ new WeakSet();
rc = function(s) {
  let { footer: t } = s;
  if (typeof t == "function" && (t = t.call(this, s)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    Ha,
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
rr = /* @__PURE__ */ new WeakSet();
oc = function(s) {
  const t = [], { scrollLeft: e, cols: { left: { width: n }, center: { width: i, totalWidth: r } }, scrollTop: o, rowsHeight: a, rowsHeightTotal: l, footerHeight: c, headerHeight: d } = s, { scrollbarSize: h = 12, horzScrollbarPos: m } = this.options;
  return r > i && t.push(
    /* @__PURE__ */ f(
      Yo,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: r,
        clientSize: i,
        onScroll: I(this, zn),
        left: n,
        bottom: (m === "inside" ? 0 : -h) + c,
        size: h,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: n, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: n + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      Yo,
      {
        type: "vert",
        scrollPos: o,
        scrollSize: l,
        clientSize: a,
        onScroll: I(this, zn),
        right: 0,
        size: h,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
yn = /* @__PURE__ */ new WeakSet();
or = function() {
  var s;
  et(this, Ne, !1), (s = this.options.afterRender) == null || s.call(this), I(this, ut).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
hi = /* @__PURE__ */ new WeakMap();
zn = /* @__PURE__ */ new WeakMap();
ar = /* @__PURE__ */ new WeakMap();
lr = /* @__PURE__ */ new WeakMap();
cr = /* @__PURE__ */ new WeakMap();
hr = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakSet();
vn = function(s) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const n = u(t), i = s ? { in: !0, row: s[0], col: s[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const r = I(this, Ts);
  i.in !== r.in && n.toggleClass("dtable-hover", i.in), i.row !== r.row && (n.find(".is-hover-row").removeClass("is-hover-row"), i.row && n.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== r.col && (n.find(".is-hover-col").removeClass("is-hover-col"), i.col && n.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), et(this, Ts, i);
};
to = /* @__PURE__ */ new WeakSet();
ac = function() {
  if (I(this, Yt))
    return !1;
  const t = { ...ec(), ...I(this, Ce).reduce((e, n) => {
    const { defaultOptions: i } = n;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return et(this, Yt, t), et(this, ut, I(this, Ce).reduce((e, n) => {
    const { when: i, options: r } = n;
    let o = t;
    return r && (o = Object.assign({ ...o }, typeof r == "function" ? r.call(this, t) : r)), (!i || i(o)) && (o !== t && Object.assign(t, o), e.push(n)), e;
  }, [])), et(this, Rn, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
eo = /* @__PURE__ */ new WeakSet();
lc = function() {
  var R, W;
  const { plugins: s } = this;
  let t = I(this, Yt);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  s.forEach((A) => {
    var G;
    const z = (G = A.beforeLayout) == null ? void 0 : G.call(this, t);
    z && (t = { ...t, ...z }), Object.assign(e, A.footer);
  });
  let n = t.width, i = 0;
  if (typeof n == "function" && (n = n.call(this)), n === "100%") {
    const { parent: A } = this;
    if (A)
      i = A.clientWidth;
    else {
      et(this, Ne, !0);
      return;
    }
  }
  const r = pu(this, t, s, i), { data: o, rowKey: a = "id", rowHeight: l } = t, c = [], d = (A, z, G) => {
    var K, tt;
    const T = { data: G ?? { [a]: A }, id: A, index: c.length, top: 0 };
    if (G || (T.lazy = !0), c.push(T), ((K = t.onAddRow) == null ? void 0 : K.call(this, T, z)) !== !1) {
      for (const _t of s)
        if (((tt = _t.onAddRow) == null ? void 0 : tt.call(this, T, z)) === !1)
          return;
    }
  };
  if (typeof o == "number")
    for (let A = 0; A < o; A++)
      d(`${A}`, A);
  else
    Array.isArray(o) && o.forEach((A, z) => {
      typeof A == "object" ? d(`${A[a] ?? ""}`, z, A) : d(`${A ?? ""}`, z);
    });
  let h = c;
  const m = {};
  if (t.onAddRows) {
    const A = t.onAddRows.call(this, h);
    A && (h = A);
  }
  for (const A of s) {
    const z = (R = A.onAddRows) == null ? void 0 : R.call(this, h);
    z && (h = z);
  }
  h.forEach((A, z) => {
    m[A.id] = A, A.index = z, A.top = A.index * l;
  });
  const { header: p, footer: g } = t, _ = p ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let y = t.height, b = 0;
  const k = h.length * l, x = _ + v + k;
  if (typeof y == "function" && (y = y.call(this, x)), y === "auto")
    b = x;
  else if (typeof y == "object")
    b = Math.min(y.max, Math.max(y.min, x));
  else if (y === "100%") {
    const { parent: A } = this;
    if (A)
      b = A.clientHeight;
    else {
      b = 0, et(this, Ne, !0);
      return;
    }
  } else
    b = y;
  const w = b - _ - v, N = {
    options: t,
    allRows: c,
    width: i,
    height: b,
    rows: h,
    rowsMap: m,
    rowHeight: l,
    rowsHeight: w,
    rowsHeightTotal: k,
    header: p,
    footer: g,
    footerGenerators: e,
    headerHeight: _,
    footerHeight: v,
    cols: r
  }, L = (W = t.onLayout) == null ? void 0 : W.call(this, N);
  L && Object.assign(N, L), s.forEach((A) => {
    if (A.onLayout) {
      const z = A.onLayout.call(this, N);
      z && Object.assign(N, z);
    }
  }), et(this, Kt, N);
};
dr = /* @__PURE__ */ new WeakSet();
cc = function() {
  (xt(this, to, ac).call(this) || !I(this, Kt)) && xt(this, eo, lc).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: r, rows: o, rowHeight: a } = s, l = Math.min(Math.max(0, i - r), this.state.scrollTop), c = Math.floor(l / a), d = l + r, h = Math.min(o.length, Math.ceil(d / a)), m = [], { rowDataGetter: p } = this.options;
  for (let g = c; g < h; g++) {
    const _ = o[g];
    _.lazy && p && (_.data = p([_.id])[0], _.lazy = !1), m.push(_);
  }
  return Object.assign(s, {
    visibleRows: m,
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
so.addPlugin = Jl;
so.removePlugin = Ql;
class hc extends V {
  render(t) {
    const { percent: e = 50, color: n, background: i = null, height: r, width: o, children: a, className: l, style: c } = t;
    return /* @__PURE__ */ f("div", { class: $("progress", l), style: {
      width: o,
      height: r,
      "--progress-bg": i,
      "--progress-bar-color": n,
      ...c
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
hc.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function dc(s, t, e, n) {
  if (typeof s == "function" && (s = s(t)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return e;
  const { url: i, ...r } = s, { setting: o } = t.col, a = {};
  return o && Object.keys(o).forEach((l) => {
    l.startsWith("data-") && (a[l] = o[l]);
  }), /* @__PURE__ */ f("a", { href: at(i, t.row.data), ...n, ...r, ...a, children: e });
}
function no(s, t, e) {
  var n;
  if (s != null)
    return e = e ?? ((n = t.row.data) == null ? void 0 : n[t.col.name]), typeof s == "function" ? s(e, t) : at(s, e);
}
function uc(s, t, e, n) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), s === !1 ? e : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(e, t)), ct(e, s, n ?? e))) : n ?? e;
}
function fc(s, t) {
  const { link: e } = t.col.setting, n = dc(e, t, s[0]);
  return n && (s[0] = n), s;
}
function pc(s, t) {
  const { format: e } = t.col.setting;
  return e && (s[0] = no(e, t, s[0])), s;
}
function mc(s, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? s[0] = e(s[0], t) : typeof e == "object" && e && (s[0] = e[s[0]] ?? s[0]), s;
}
function gc(s, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = e, invalidDate: i } = t.col.setting;
  return s[0] = uc(n, t, s[0], i), s;
}
function ur(s, t, e = !1) {
  const { html: n = e } = t.col.setting;
  if (n === !1)
    return s;
  const i = s[0], r = n === !0 ? i : no(n, t, i);
  return s[0] = {
    html: r
  }, s;
}
const gu = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, t) {
        return ur(s, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: t }) {
        const { progressType: e, barColor: n, barBgColor: i, barHeight: r = 6, barWidth: o = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: c = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, h = s[0];
        return s[0] = e === "bar" ? /* @__PURE__ */ f(
          hc,
          {
            className: "rounded-full",
            width: o,
            height: r,
            color: n || d,
            background: i,
            percent: h
          }
        ) : /* @__PURE__ */ f(
          Dr,
          {
            percent: h,
            size: a,
            circleWidth: l,
            circleBg: c,
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
    if (e && (s = gc(s, t, e)), s = mc(s, t), s = pc(s, t), n ? s = ur(s, t) : s = fc(s, t), i) {
      let r = s[0];
      typeof i == "function" ? r = i.call(this, t) : typeof i == "string" && (r = at(i, t.row.data)), s.push({ attrs: { title: r } });
    }
    return s;
  }
}, _u = ee(gu, { buildIn: !0 }), yu = {
  html: { component: Te }
}, vu = {
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
        component: Te,
        props: { html: at(o, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: o
      } : a = o;
      let { component: l } = a;
      const c = [a];
      typeof l == "string" && c.unshift(yu[l], r == null ? void 0 : r[l]);
      const d = {};
      c.forEach((m) => {
        if (m) {
          const { props: p } = m;
          p && u.extend(d, typeof p == "function" ? p.call(this, t) : p), l = m.component || l;
        }
      }, { props: {} });
      const h = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(h, { ...d }) };
    }), s;
  }
}, bu = ee(vu);
function wu(s, t, e = !1) {
  var a, l;
  typeof s == "boolean" && (t = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: r } = this.options, o = (c, d) => {
    const h = r ? r.call(this, c) : !0;
    !h || e && h === "disabled" || !!n[c] === d || (d ? n[c] = !0 : delete n[c], i[c] = d);
  };
  if (s === void 0 ? (t === void 0 && (t = !_c.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: c }) => {
    o(c, !!t);
  })) : (Array.isArray(s) || (s = [s]), s.forEach((c) => {
    o(c, t ?? !n[c]);
  })), Object.keys(i).length) {
    const c = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, s, i, n);
    c && Object.keys(c).forEach((d) => {
      c[d] ? n[d] = !0 : delete n[d];
    }), this.setState({ checkedRows: { ...n } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function Cu(s) {
  return this.state.checkedRows[s] ?? !1;
}
function _c() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((r, o) => r + (e.call(this, o.id) ? 1 : 0), 0)) : t === s;
}
function ku() {
  return Object.keys(this.state.checkedRows);
}
function xu(s) {
  const { checkable: t } = this.options;
  s === void 0 && (s = !t), t !== s && this.setState({ forceCheckable: s });
}
function Zo(s, t, e = !1) {
  return /* @__PURE__ */ f(Qn, { className: "dtable-checkbox", checked: s, disabled: e });
}
const Jo = 'input[type="checkbox"],.dtable-checkbox', $u = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Zo
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
    toggleCheckRows: wu,
    isRowChecked: Cu,
    isAllRowChecked: _c,
    getChecks: ku,
    toggleCheckable: xu
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Zo(s) })
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
    var c;
    const { id: n } = t, { canRowCheckable: i } = this.options, r = i ? i.call(this, n) : !0;
    if (!r)
      return s;
    const { checkbox: o } = e.setting, a = typeof o == "function" ? o.call(this, n) : o, l = this.isRowChecked(n);
    if (a) {
      const d = (c = this.options.checkboxRender) == null ? void 0 : c.call(this, l, n, r === "disabled");
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
    const e = t.closest(Jo);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(s, { rowID: t }) {
    const e = u(s.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(Jo).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Su = ee($u);
var yc = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(yc || {});
function Wn(s) {
  const t = this.data.nestedMap.get(s);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: r } = t;
  for (; r; ) {
    const o = Wn.call(this, r);
    if (o.state !== "expanded") {
      i = !0;
      break;
    }
    r = o.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Wn.call(this, t.parent).level + 1 : 0, t;
}
function Nu(s) {
  return s !== void 0 ? Wn.call(this, s) : this.data.nestedMap;
}
function Eu(s, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (t === void 0 && (t = !vc.call(this)), t) {
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
function vc() {
  const s = this.data.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function bc(s, t = 0, e, n = 0) {
  var i;
  e || (e = [...s.keys()]);
  for (const r of e) {
    const o = s.get(r);
    o && (o.level === n && (o.order = t++), (i = o.children) != null && i.length && (t = bc(s, t, o.children, n + 1)));
  }
  return t;
}
function wc(s, t, e, n) {
  const i = s.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((r) => {
    n[r] = e, wc(s, r, e, n);
  }), i;
}
function Cc(s, t, e, n, i) {
  var a;
  const r = s.getNestedRowInfo(t);
  if (!r || r.state === "")
    return;
  ((a = r.children) == null ? void 0 : a.every((l) => {
    const c = !!(n[l] !== void 0 ? n[l] : i[l]);
    return e === c;
  })) && (n[t] = e), r.parent && Cc(s, r.parent, e, n, i);
}
const Tu = {
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
        const o = wc(this, i, r, n);
        o != null && o.parent && Cc(this, o.parent, r, n, e);
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
    getNestedInfo: Nu,
    toggleRow: Eu,
    isAllCollapsed: vc,
    getNestedRowInfo: Wn
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
    ), bc(this.data.nestedMap), s.sort((t, e) => {
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
}, Mu = ee(Tu);
function Ni(s, { row: t, col: e }) {
  const { data: n } = t, i = n ? n[e.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: r = "rounded-full", avatarKey: o = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: c = `${e.name}Name` } = e.setting, d = (n ? n[c] : i) || s[0], h = {
    size: "xs",
    className: $(r, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[o] : void 0,
    text: d,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ f(Hs, { ...h }), e.type === "avatarBtn") {
    const { avatarBtnProps: m } = e.setting, p = typeof m == "function" ? m(e, t) : m;
    s[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...p, children: [
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
const Iu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Ni
    },
    avatarBtn: {
      onRenderCell: Ni
    },
    avatarName: {
      onRenderCell: Ni
    }
  }
}, Au = ee(Iu, { buildIn: !0 }), Pu = {
  name: "sort-type",
  onRenderHeaderCell(s, t) {
    const { col: e } = t, { sortType: n } = e.setting;
    if (n) {
      const i = n === !0 ? "none" : n, r = /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` });
      s.push(
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const a = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, a, i)), typeof o == "string" && (o = { url: o });
        const { url: l, ...c } = o;
        s[0] = /* @__PURE__ */ f("a", { className: "dtable-sort-link", href: at(l, { ...e.setting, sortType: a }), ...c, children: [
          s[0],
          r
        ] });
      } else
        s.push(r);
    }
    return s;
  }
}, Du = ee(Pu, { buildIn: !0 }), Ei = (s) => {
  s.length !== 1 && s.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === s[e - 1].setting.group || (t.setting.border = "left");
  });
}, Lu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = s;
    Ei(t.left.list), Ei(t.center.list), Ei(t.right.list);
  }
}, Ru = ee(Lu), zu = {
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
    const a = (l, c, d) => {
      const { index: h } = c;
      l.forEach((m, p) => {
        const { index: g } = m, _ = `C${g}R${h}`;
        if (n.has(_))
          return;
        const v = t.call(this, { row: c, col: m });
        if (!v)
          return;
        const y = Math.min(v.colSpan || 1, l.length - p), b = Math.min(v.rowSpan || 1, i.length - d);
        if (y <= 1 && b <= 1)
          return;
        let k = 0;
        for (let x = 0; x < y; x++) {
          k += l[p + x].realWidth;
          for (let w = 0; w < b; w++) {
            const N = `C${g + x}R${h + w}`;
            N !== _ && n.add(N);
          }
        }
        e.set(_, {
          colSpan: y,
          rowSpan: b,
          width: k,
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
}, Wu = ee(zu), Ou = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: yc,
  avatar: Au,
  cellspan: Wu,
  checkable: Su,
  custom: bu,
  group: Ru,
  nested: Mu,
  renderDatetime: uc,
  renderDatetimeCell: gc,
  renderFormat: no,
  renderFormatCell: pc,
  renderHtmlCell: ur,
  renderLink: dc,
  renderLinkCell: fc,
  renderMapCell: mc,
  rich: _u,
  sortType: Du
}, Symbol.toStringTag, { value: "Module" }));
class Gs extends B {
}
Gs.NAME = "DTable";
Gs.Component = so;
Gs.definePlugin = ee;
Gs.removePlugin = Ql;
Gs.plugins = Ou;
class io extends Z {
  _getClassName(t) {
    return ["kanban-header-col", t.className, t.subCols ? "has-subs" : "", t.parentName !== void 0 ? "is-sub" : ""];
  }
  _getProps(t) {
    const {
      width: e,
      minWidth: n,
      maxWidth: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-col-color": r,
        "--kanban-col-width": e,
        minWidth: n,
        maxWidth: i
      }
    });
  }
  _getChildren(t) {
    const {
      prefix: e,
      prefixClass: n,
      title: i,
      titleClass: r,
      subtitle: o,
      subtitleClass: a,
      icon: l,
      trailingIcon: c,
      actions: d,
      subCols: h
    } = t;
    return [
      /* @__PURE__ */ f("div", { className: "kanban-header-col-wrapper", children: [
        /* @__PURE__ */ f("div", { className: "kanban-header-title", children: [
          l ? /* @__PURE__ */ f(J, { className: "as-leading-icon", icon: l }, "icon") : null,
          e ? /* @__PURE__ */ f("span", { className: $("as-prefix", n), children: /* @__PURE__ */ f(j, { content: e }) }, "prefix") : null,
          i ? /* @__PURE__ */ f("span", { className: $("as-title", r), children: /* @__PURE__ */ f(j, { content: i }) }, "title") : null,
          o ? /* @__PURE__ */ f("span", { className: $("as-subtitle", a), children: /* @__PURE__ */ f(j, { content: o }) }, "subtitle") : null,
          c ? /* @__PURE__ */ f(J, { className: "as-trailing-icon", icon: c }, "trailingIcon") : null
        ] }, "title"),
        pt.render(d, [t], { key: "actions", className: "kanban-header-col-actions", size: "sm" }, this)
      ] }, "wrapper"),
      h ? /* @__PURE__ */ f("div", { className: "kanban-header-sub-cols", children: h.map((m, p) => /* @__PURE__ */ f(io, { index: p, ...m }, m.name)) }, "subs") : null
    ];
  }
}
function Hu(s) {
  const { cols: t } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-header", children: [
    /* @__PURE__ */ f("div", { className: "kanban-header-lane-name" }, "name"),
    /* @__PURE__ */ f("div", { className: "kanban-header-cols", children: t.map((e, n) => /* @__PURE__ */ f(io, { index: n, ...e }, e.name)) }, "cols")
  ] });
}
class kc extends V {
  constructor() {
    super(...arguments), this._listRef = Y(), this._renderItem = (t) => {
      const { itemRender: e, lane: n, name: i } = this.props, r = e.call(this, { item: t, lane: n, col: i });
      return typeof r == "object" && r.html && u.extend(r, {}), r;
    };
  }
  componentDidMount() {
    const { current: t } = this._listRef;
    t && (this._ob = new ResizeObserver((e) => {
      u(this._listRef.current).trigger("laneColResize", e[0]);
    }), this._ob.observe(t));
  }
  componentWillUnmount() {
    var t;
    (t = this._ob) == null || t.disconnect();
  }
  render(t) {
    const { items: e } = t, {
      width: n,
      minWidth: i,
      maxWidth: r,
      color: o,
      content: a,
      contentClass: l,
      itemRender: c,
      watchSize: d
    } = t;
    return /* @__PURE__ */ f("div", { className: "kanban-lane-col", style: {
      "--kanban-col-color": o,
      "--kanban-col-width": n,
      minWidth: i,
      maxWidth: r
    }, children: [
      a ? /* @__PURE__ */ f("div", { className: $("kanban-col-content", l), children: /* @__PURE__ */ f(j, { content: a, generatorThis: this, generatorArgs: [t] }) }) : null,
      /* @__PURE__ */ f(
        es,
        {
          forwardRef: d ? this._listRef : void 0,
          className: "kanban-items scrollbar-thin scrollbar-hover",
          itemProps: { className: "kanban-item" },
          items: e,
          itemRender: c ? this._renderItem : void 0
        },
        "list"
      )
    ] });
  }
}
kc.defaultProps = {
  watchSize: !0
};
class Bu extends Z {
  _getClassName(t) {
    return ["kanban-lane", t.className, t.index ? "" : "is-first"];
  }
  _getProps(t) {
    const {
      height: e,
      minHeight: n,
      maxHeight: i,
      color: r
    } = t;
    return H(super._getProps(t), {
      style: {
        "--kanban-lane-color": r,
        height: e,
        minHeight: n,
        maxHeight: i
      }
    });
  }
  _renderCol(t, e, n, i) {
    return /* @__PURE__ */ f(kc, { itemRender: n, lane: t, items: i[e.name], ...e }, e.name);
  }
  _getChildren(t) {
    const {
      name: e,
      title: n,
      titleClass: i,
      actions: r,
      cols: o,
      items: a = {},
      itemRender: l
    } = t;
    return [
      /* @__PURE__ */ f("div", { className: "kanban-lane-name", children: [
        /* @__PURE__ */ f("div", { className: $("kanban-lane-title", i), children: /* @__PURE__ */ f(j, { content: n }) }, "title"),
        pt.render(r, [t], { key: "actions", className: "kanban-lane-actions", size: "sm" }, this)
      ] }, "name"),
      /* @__PURE__ */ f("div", { className: "kanban-lane-cols", children: o.reduce((c, d) => (d.subCols ? d.subCols.forEach((h) => {
        c.push(this._renderCol(e, h, l, a));
      }) : c.push(this._renderCol(e, d, l, a)), c), []) }, "cols")
    ];
  }
}
function Fu(s) {
  const { lanes: t, cols: e, items: n = {}, itemRender: i } = s;
  return /* @__PURE__ */ f("div", { className: "kanban-body", children: t.map((r, o) => /* @__PURE__ */ f(Bu, { index: o, cols: e, items: n[r.name], itemRender: i, ...r }, r.name)) });
}
const vt = 12, Vu = {
  left: "right",
  right: "left",
  top: "bottom",
  bottom: "top",
  "": ""
};
function Qo(s, t) {
  return t === "top" ? { x: s.x + s.width / 2, y: s.y } : t === "left" ? { x: s.x, y: s.y + s.height / 2 } : t === "right" ? { x: s.x + s.width, y: s.y + s.height / 2 } : { x: s.x + s.width / 2, y: s.y + s.height };
}
function Uu(s, t) {
  return (s.x - t.x) * (s.x - t.x) + (s.y - t.y) * (s.y - t.y);
}
function ju(s, t, e, n) {
  const i = e ? [e] : ["left", "right", "top", "bottom"], r = n ? [n] : ["left", "right", "top", "bottom"];
  let o = Number.MAX_SAFE_INTEGER, a = { x: 0, y: 0 }, l = { x: 0, y: 0 };
  return i.forEach((c) => {
    r.forEach((d) => {
      const h = Qo(s, c), m = Qo(t, d), p = Uu(h, m) * (Vu[c] === d ? 1 : 2);
      p < o && (o = p, e = c, n = d, a = h, l = m);
    });
  }), {
    fromSide: e,
    toSide: n,
    fromPos: a,
    toPos: l
  };
}
function Ku(s, t) {
  return { x: (s.x + t.x) / 2, y: (s.y + t.y) / 2 };
}
function xc(s, t) {
  return {
    x: Math.min(s.x, t.x),
    y: Math.min(s.y, t.y),
    width: Math.abs(s.x - t.x),
    height: Math.abs(s.y - t.y)
  };
}
function ta(s, t, e) {
  const n = {
    id: `marker-${t}-${e}-${s}`,
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
  return s === "arrow" ? t === "start" ? n.path.d = "M6,0 L6,6 L0,3 z" : n.path.d = "M0,0 L0,6 L6,3 z" : s === "dot" ? n.path.d = "M3,3 m-3,0 a 3,3 0 1,1 6,0 a 3,3 0 1,1 -6,0" : s === "square" ? n.path.d = "M0,0 L0,6 L6,6 L6,0 z" : s === "diamond" && (n.path.d = "M3,0 L6,3 L3,6 L0,3 z"), n;
}
function qu(s, t, e, n, i = "curve", r = 2) {
  const {
    x: o,
    y: a,
    width: l,
    height: c
  } = xc(s, t), d = vt - o, h = vt - a;
  if (i === "curve") {
    const m = l * 0.7, p = c * 0.7, g = r * 2, _ = {
      a1x: s.x + (e === "left" ? -g : e === "right" ? g : 0),
      a1y: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      ax: s.x + (e === "left" ? -m : e === "right" ? m : 0),
      ay: s.y + (e === "top" ? -p : e === "bottom" ? p : 0),
      bx: t.x + (n === "left" ? -(m - g) : n === "right" ? m - g : 0),
      by: t.y + (n === "top" ? -(p - g) : n === "bottom" ? p - g : 0),
      b1x: t.x + (n === "left" ? -g : n === "right" ? g : 0),
      b1y: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.a1x + d} ${_.a1y + h} C ${_.ax + d} ${_.ay + h} ${_.bx + d} ${_.by + h} ${_.b1x + d} ${_.b1y + h} L ${t.x + d} ${t.y + h}`;
  }
  if (i === "fold") {
    const m = Ku(s, t), p = l / 2, g = c / 2, _ = {
      ax: s.x + (e === "left" ? -p : e === "right" ? p : 0),
      ay: s.y + (e === "top" ? -g : e === "bottom" ? g : 0),
      bx: t.x + (n === "left" ? -p : n === "right" ? p : 0),
      by: t.y + (n === "top" ? -g : n === "bottom" ? g : 0)
    };
    return `M ${s.x + d} ${s.y + h} L ${_.ax + d} ${_.ay + h} L ${m.x + d} ${m.y + h} L ${_.bx + d} ${_.by + h} L ${t.x + d} ${t.y + h}`;
  }
  return `M ${s.x + d} ${s.y + h} L ${t.x + d} ${t.y + h}`;
}
function Gu(s) {
  const { fromRect: t, toRect: e } = s, n = `${s.from}-${s.to}`, i = { x: t.left, y: t.top, width: t.right - t.left, height: t.bottom - t.top }, r = { x: e.left, y: e.top, width: e.right - e.left, height: e.bottom - e.top }, { fromSide: o, toSide: a, fromPos: l, toPos: c } = ju(i, r), d = xc(l, c), { x: h, y: m, width: p, height: g } = d;
  l.x += vt - h, l.y += vt - m, c.x += vt - h, c.y += vt - m;
  const {
    weight: _ = 2,
    fromPoint: v,
    toPoint: y = "arrow"
  } = s, b = {
    left: `${0 - vt}px`,
    top: `${0 - vt}px`,
    width: `${p + 2 * vt}px`,
    height: `${g + 2 * vt}px`
  }, k = {
    "stroke-width": _,
    fill: "transparent",
    stroke: "currentColor",
    "stroke-linejoin": "round",
    "marker-start": v && v !== "none" ? `url(#marker-start-${n}-${v})` : void 0,
    "marker-end": y && y !== "none" ? `url(#marker-end-${n}-${y})` : void 0,
    d: qu(l, c, o, a, s.shape, _)
  }, x = {
    "stroke-width": _ + 5,
    "stroke-linejoin": "round",
    fill: "transparent",
    stroke: "currentColor",
    d: k.d,
    class: "opacity-0"
  }, w = {
    width: p + 2 * vt,
    height: g + 2 * vt
  }, N = [];
  return s.lineStyle === "dashed" ? k["stroke-dasharray"] = `${_ * 3} ${_ * 3}` : s.lineStyle === "dotted" && (k["stroke-dasharray"] = `${_} ${_}`), v && v !== "none" && N.push(ta(v, "start", n)), y && y !== "none" && N.push(ta(y, "end", n)), {
    x: h,
    y: m,
    width: p,
    height: g,
    fromSide: o,
    toSide: a,
    fromPos: l,
    toPos: c,
    nodeStyle: b,
    svgPathProps: k,
    svgPathBackProps: x,
    svgProps: w,
    markers: N,
    padding: vt
  };
}
function Yu(s) {
  const { text: t, textSize: e } = s, { x: n, y: i, padding: r, width: o, height: a, svgProps: l, markers: c, svgPathProps: d, svgPathBackProps: h, fromPos: m } = Gu(s);
  return /* @__PURE__ */ f("div", { className: "kanban-link", style: { left: n, top: i, width: o, height: a }, children: [
    /* @__PURE__ */ f("svg", { ...l, xmlns: "http://www.w3.org/2000/svg", version: "1.1", children: [
      c.length ? /* @__PURE__ */ f("defs", { children: c.map(({ path: p, id: g, ..._ }) => /* @__PURE__ */ f("marker", { ..._, id: g, children: /* @__PURE__ */ f("path", { ...p }) }, g)) }) : null,
      /* @__PURE__ */ f("path", { className: "pointer-events-auto", ...h }),
      /* @__PURE__ */ f("path", { ...d })
    ] }),
    /* @__PURE__ */ f("div", { className: "kanban-link-start-point", style: { left: m.x - r, top: m.y - r } }),
    t ? /* @__PURE__ */ f("div", { className: "kanban-link-text", style: { fontSize: `${e || 12}px` }, children: t }) : null
  ] });
}
class Xu extends V {
  constructor() {
    super(...arguments), this._ref = Y(), this._idSet = /* @__PURE__ */ new Set(), this.state = { layout: {} };
  }
  componentDidMount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    u(t).on("laneColResize.kanban.link", (n, i) => {
      console.log("> laneColResize", n, i), this._tryUpdateLayout();
    }), this._kanban = t, this._tryUpdateLayout();
  }
  componentWillUnmount() {
    var e;
    const t = (e = this._ref.current) == null ? void 0 : e.closest(".kanban");
    t && u(t).off(".kanban.link"), this._raf && cancelAnimationFrame(this._raf);
  }
  _tryUpdateLayout() {
    this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
      this._updateLayout(), this._raf = 0;
    });
  }
  _updateLayout() {
    const t = [...this._idSet], e = u(this._kanban).find(".kanban-body"), { top: n, left: i } = this._kanban.getBoundingClientRect(), r = {};
    t.forEach((o) => {
      const a = e.find(`.kanban-item[z-key="${o}"]`)[0];
      if (a) {
        const { top: l, left: c, bottom: d, right: h } = a.getBoundingClientRect();
        r[o] = { top: l - n, left: c - i, bottom: d - n, right: h - i };
      }
    }), this.setState({ layout: r });
  }
  _renderLink(t) {
    const { layout: e } = this.state, { from: n, to: i } = t, r = e[n], o = e[i];
    return this._idSet.add(n), this._idSet.add(i), !r || !o ? null : /* @__PURE__ */ f(Yu, { ...t, fromRect: r, toRect: o }, `${n}-${i}`);
  }
  render(t) {
    const { links: e } = t;
    return this._idSet.clear(), /* @__PURE__ */ f("div", { className: "kanban-links", ref: this._ref, children: e.map((n) => this._renderLink(n)) });
  }
}
function Zu(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getCol: n, colProps: i } = t;
  let r = !1;
  const o = [], a = /* @__PURE__ */ new Map();
  return s = s.reduce((l, c, d) => {
    if (i && (c = H({}, i, c)), n) {
      const h = n.call(this, c);
      h !== !1 && (c = h || c);
    }
    return c.deleted || (typeof c.width == "function" && (c = H({}, c, {
      width: c.width.call(this, c)
    })), typeof c.order == "number" ? r = !0 : c.order = d, e == null || e.call(this, c), c.parentName !== void 0 ? o.push(c) : (a.set(c.name, c), l.push(c))), l;
  }, []), o.forEach((l) => {
    const c = a.get(l.parentName);
    c && (c.subCols = vs(c.subCols, [l], "name"));
  }), r && (s.sort(On), [...a.values()].forEach((l) => {
    l.subCols && l.subCols.sort(On);
  })), s;
}
function Ju(s, t, e) {
  if (!s || !s.length)
    return [];
  const { getLane: n, laneProps: i } = t;
  let r = !1;
  return s = s.reduce((o, a, l) => {
    if (i && (a = H({}, i, a)), n) {
      const c = n.call(this, a);
      c !== !1 && (a = c || a);
    }
    return a.deleted || (typeof a.height == "function" && (a = H({}, a, {
      height: a.height.call(this, a)
    })), typeof a.order == "number" ? r = !0 : a.order = l, a.color || (a = {
      color: `hsl(${43 * Va(a.name) % 360}deg 40% 50%)`,
      ...a
    }), e == null || e.call(this, a), o.push(a)), o;
  }, []), r && s.sort(On), s;
}
function On(s, t) {
  return s.order - t.order;
}
function vs(s, t, e) {
  if (!s)
    return t ? [...t] : [];
  const n = [...s];
  if (t) {
    let i = 0;
    const r = n.reduce((o, a, l) => (o.set(a[e], l), i = Math.max(a.order ?? l, i), o), /* @__PURE__ */ new Map());
    t.forEach((o) => {
      const a = o[e];
      r.has(a) ? n[r.get(a)] = {
        ...n[r.get(a)],
        ...o
      } : n.push({
        order: i++,
        ...o
      });
    });
  }
  return n;
}
function ea(s, t, e) {
  const n = vs(s.lanes, t.lanes, e), i = vs(s.cols, t.cols, e), r = vs(s.links, t.links, e), o = t.items || {}, a = Object.keys(o).reduce((l, c) => {
    const d = o[c];
    return l[c] = { ...l[c] }, Object.keys(d).forEach((h) => {
      l[c][h] = vs(l[c][h], d[h], e);
    }), l;
  }, { ...s.items });
  return { lanes: n, cols: i, items: a, links: r };
}
let di = class extends Z {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  componentDidMount() {
    this._afterRender(!0), this.tryLoad();
    const { draggable: t } = this.props;
    t && this._ref.current && (this._draggable = new ei(this._ref.current, u.extend({
      selector: ".kanban-item"
    }, typeof t == "object" ? t : null)));
  }
  componentDidUpdate() {
    this._afterRender(!1), this.tryLoad();
  }
  componentWillUnmount() {
    var t, e;
    (t = this.props.beforeDestroy) == null || t.call(this), (e = this._draggable) == null || e.destroy();
  }
  load() {
    const { data: t, onLoad: e, onLoadFail: n } = this.props;
    this._loadedSetting = t, this.setState({ loading: !0 }, async () => {
      const i = { loading: !1 };
      try {
        const r = await Gn(t, [this], { throws: !0 });
        i.data = (e == null ? void 0 : e.call(this, r)) || r;
      } catch (r) {
        i.loadFailed = (typeof n == "function" ? n.call(this, r) : n) || String(r);
      }
      this.setState(i);
    });
  }
  tryLoad() {
    const { loading: t } = this.state, { data: e } = this.props;
    t || !e || !bo(e) || e === this._loadedSetting || this.load();
  }
  getCol(t) {
    return this._data.cols.find((e) => e.name === t);
  }
  getLane(t) {
    return this._data.lanes.find((e) => e.name === t);
  }
  getData() {
    return this._data;
  }
  update(t) {
    return this.changeState((e) => ({
      changes: ea(e.changes || {}, t, this.props.itemKey || "id")
    }));
  }
  addItem(t, e, n) {
    return this.updateItem(t, e, n);
  }
  updateItem(t, e, n) {
    return this.update({
      items: {
        [t]: {
          [e]: Array.isArray(n) ? n : [n]
        }
      }
    });
  }
  deleteItem(t, e, n) {
    return this.updateItem(t, e, Array.isArray(n) ? n.map((i) => ({ [this.props.itemKey || "id"]: i, deleted: !0 })) : { [this.props.itemKey || "id"]: n, deleted: !0 });
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
  _afterRender(t) {
    var e;
    (e = this.props.afterRender) == null || e.call(this, t);
  }
  _getData(t) {
    const { data: e, getItem: n, itemProps: i, itemKey: r = "id" } = t, { data: o, changes: a } = this.state;
    let l = (o || bo(e) ? o : e) || {};
    a && (l = ea(l, a, r));
    let c = !1;
    const { items: d = {} } = l, h = /* @__PURE__ */ new Set(), m = Zu.call(this, l.cols, t, (_) => {
      _.parentName !== void 0 && (c = !0);
    }), p = Ju.call(this, l.lanes, t, (_) => {
      const v = d[_.name];
      v && m.forEach((y) => {
        let b = v[y.name];
        if (b) {
          let k = !1;
          b = b.reduce((x, w) => {
            i && (w = H({}, i, w));
            const N = (n == null ? void 0 : n.call(this, { col: y.name, lane: _.name, item: w })) ?? w;
            return N !== !1 && !N.deleted && (typeof N.order == "number" ? k = !0 : N.order = x.length - 1, x.push(N), h.add(String(N[r]))), x;
          }, []), k && b.sort(On), v[y.name] = b;
        }
      });
    });
    let { links: g = [] } = l;
    return g = g.reduce((_, v) => (!v.deleted && h.has(String(v.from)) && h.has(String(v.to)) && _.push(v), _), []), this._data = { cols: m, lanes: p, items: d, links: g, hasSubCols: c }, this._data;
  }
  _getClassName(t) {
    return ["kanban", t.className, t.sticky ? "kanban-sticky" : "", this._data.hasSubCols ? "has-sub-cols" : ""];
  }
  _getProps(t) {
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        "--kanban-lane-name-width": t.laneNameWidth,
        "--kanban-cols-gap": t.colsGap ? Eo(t.colsGap) : void 0,
        "--kanban-lanes-gap": t.lanesGap ? Eo(t.lanesGap) : void 0
      }
    });
  }
  _getChildren(t) {
    const { cols: e, lanes: n, items: i, links: r } = this._getData(t);
    return console.log("> Kanban.render", { cols: e, lanes: n, items: i, links: r }), [
      /* @__PURE__ */ f(Hu, { cols: e }, "header"),
      /* @__PURE__ */ f(
        Fu,
        {
          itemRender: t.itemRender,
          cols: e,
          lanes: n,
          items: i
        },
        "body"
      ),
      r != null && r.length ? /* @__PURE__ */ f(Xu, { links: r }, "links") : null,
      t.children
    ];
  }
};
di.defaultProps = {
  draggable: !0,
  sticky: !0,
  itemKey: "id"
};
class Qu extends di {
  constructor(t) {
    super(t), this._handleClickHeading = (e) => {
      u(e.target).closest("a,.btn,button").not(".kanban-group-toggle").length || this.setState((n) => ({ collapsed: !n.collapsed }));
    }, this.state = {
      ...this.state,
      collapsed: t.collapsed
    };
  }
  render(t) {
    const { heading: e, toggleFromHeading: n } = t, { collapsed: i } = this.state, r = H({ className: "kanban-heading", onClick: n ? this._handleClickHeading : void 0 }, typeof e == "function" ? e.call(this) : e);
    return /* @__PURE__ */ f("div", { className: $("kanban-group", i ? "is-collapsed" : "is-expanded", e ? "has-heading" : ""), children: [
      e && /* @__PURE__ */ f(En, { ...r }, "heading"),
      i ? null : super.render(t)
    ] });
  }
}
let $c = class extends Z {
  constructor(t) {
    super(t), this.state = {}, this._ref = Y(), this._kanbanRefs = /* @__PURE__ */ new Map(), console.time("kanbanList.init");
  }
  componentDidMount() {
    const { moveable: t, responsive: e } = this.props;
    if (t && this._ref.current && (this._moveable = new si(this._ref.current, u.extend({ selector: "self", move: "scroll", onMoveStart: (n, i) => {
      const { bottom: r, right: o } = i.getBoundingClientRect();
      return n.clientY < r && n.clientY > r - 20 || n.clientX < o && n.clientX > o - 20 ? !1 : !u(n.target).closest("a,.btn,.state,.kanban-item").length;
    } }, typeof t == "object" ? t : null))), e) {
      const n = new ResizeObserver(this._tryUpdateLayout.bind(this));
      (typeof e != "boolean" ? u(e) : u(this._ref.current).parent()).each((r, o) => {
        n.observe(o);
      }), this._rob = n;
    }
    console.timeEnd("kanbanList.init");
  }
  componentWillUnmount() {
    var t, e;
    (t = this._moveable) == null || t.destroy(), (e = this._rob) == null || e.disconnect();
  }
  getKanban(t) {
    var e;
    return (e = this._kanbanRefs.get(t)) == null ? void 0 : e.current;
  }
  updateLayout() {
    const t = this._ref.current;
    if (!t)
      return;
    const e = u(t), n = e.width(), i = e.height();
    this.setState({ width: n, height: i });
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
    const { width: e, height: n } = t, i = typeof e == "function" ? e.call(this) : e, r = typeof n == "function" ? n.call(this) : n, { width: o, height: a } = this.state ?? {};
    return H(super._getProps(t), {
      ref: this._ref,
      style: {
        width: i,
        height: r,
        "--kanban-list-width": `${o || e}px`,
        "--kanban-list-height": `${a || n}px`
      }
    });
  }
  _getChildren(t) {
    const { items: e = [] } = t;
    return [
      ...e.map((n, i) => {
        const r = String(n.key ?? i);
        let o = this._kanbanRefs.get(r);
        o || (o = Y(), this._kanbanRefs.set(r, o));
        const a = n.heading !== void 0 || n.type === "group" ? Qu : di;
        return /* @__PURE__ */ f(a, { ref: o, sticky: t.sticky, ...n }, r);
      }),
      t.children
    ];
  }
};
$c.defaultProps = {
  moveable: !0,
  sticky: !0,
  responsive: !0,
  scrollbarHover: !0
};
class ro extends B {
}
ro.NAME = "Kanban";
ro.replace = !0;
ro.Component = di;
class oo extends B {
}
oo.NAME = "KanbanList";
oo.replace = !0;
oo.Component = $c;
var Sc = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
}, sa = (s, t, e) => (Sc(s, t, "read from private field"), e ? e.call(s) : t.get(s)), tf = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, na = (s, t, e, n) => (Sc(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e), Be;
const ef = "nav", bn = '[data-toggle="tab"]', sf = "active";
class Nc extends dt {
  constructor() {
    super(...arguments), tf(this, Be, 0);
  }
  active(t) {
    const e = this.$element, n = e.find(bn);
    let i = t ? u(t).closest(bn) : n.filter(`.${sf}`);
    if (!i.length && (i = e.find(bn).first(), !i.length))
      return;
    n.removeClass("active"), i.addClass("active");
    const r = i.attr("href") || i.data("target"), o = i.data("name") || r, a = u(r);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [o]), this.emit("show", o), sa(this, Be) && clearTimeout(sa(this, Be)), na(this, Be, setTimeout(() => {
      a.addClass("in").trigger("shown", [o]), this.emit("shown", o), na(this, Be, 0);
    }, 10)));
  }
}
Be = /* @__PURE__ */ new WeakMap();
Nc.NAME = "Tabs";
u(document).on("click.tabs.zui", bn, (s) => {
  s.preventDefault();
  const t = u(s.target), e = t.closest(`.${ef}`);
  e.length && Nc.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  u as $,
  xa as Ajax,
  rl as Avatar,
  ol as BtnGroup,
  Gl as Card,
  Yl as CardList,
  bl as ColorPicker,
  Tr as CommonList,
  dt as Component,
  B as ComponentFromReact,
  Jr as ContextMenu,
  j as CustomContent,
  Ha as CustomRender,
  Gs as DTable,
  Zl as Dashboard,
  Tl as DatePicker,
  Il as DatetimePicker,
  ei as Draggable,
  zt as Dropdown,
  Z as HElement,
  Te as HtmlContent,
  J as Icon,
  ro as Kanban,
  oo as KanbanList,
  ja as List,
  Ga as Menu,
  mf as Messager,
  Yd as Modal,
  Ae as ModalBase,
  tr as ModalTrigger,
  si as Moveable,
  Ll as Nav,
  Ka as NestedList,
  Rl as Pager,
  zl as Pick,
  Hl as Picker,
  $t as Popover,
  Gr as PopoverPanel,
  Bl as Popovers,
  Ba as Portal,
  tl as ProgressCircle,
  V as ReactComponent,
  Fl as SearchBox,
  Ya as SearchMenu,
  Kl as SearchTree,
  Vl as Sidebar,
  _f as Sortable,
  zr as Split,
  Ns as TIME_DAY,
  Nc as Tabs,
  El as TimePicker,
  Ul as Toolbar,
  Gt as Tooltip,
  jl as Tree,
  Zr as Upload,
  ql as UploadImgs,
  zd as addDate,
  u as cash,
  $ as classes,
  hs as componentsMap,
  xh as convertBytes,
  Rh as create,
  Q as createDate,
  Fh as createPortal,
  Y as createRef,
  Ch as deepGet,
  wh as deepGetPath,
  rf as defineFn,
  xn as delay,
  zh as disableScroll,
  of as dom,
  Gn as fetchData,
  kh as formatBytes,
  ct as formatDate,
  xf as formatDateSpan,
  at as formatString,
  $a as getClassList,
  Nn as getComponent,
  Wh as getReactComponent,
  wo as getZData,
  Wt as h,
  rt as i18n,
  bo as isFetchSetting,
  Us as isSameDay,
  wl as isSameMonth,
  bf as isSameWeek,
  Hi as isSameYear,
  wf as isToday,
  kf as isTomorrow,
  ft as isValidElement,
  Cf as isYesterday,
  H as mergeProps,
  he as nextGid,
  Zn as parseSize,
  Oa as reactComponents,
  Le as registerReactComponent,
  za as removeUndefinedProps,
  ks as render,
  Ai as renderCustomContent,
  Hh as renderCustomResult,
  Co as setZData,
  Mh as shareData,
  we as store,
  Sa as storeData,
  Na as takeData,
  Eo as toCssSize
};
//# sourceMappingURL=zui.js.map
