var ji = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var b = (n, e, t) => (ji(n, e, "read from private field"), t ? t.call(n) : e.get(n)), C = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, $ = (n, e, t, s) => (ji(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t);
var L = (n, e, t) => (ji(n, e, "access private method"), t);
const At = document, un = window, fa = At.documentElement, _e = At.createElement.bind(At), pa = _e("div"), Vi = _e("table"), Yl = _e("tbody"), rr = _e("tr"), { isArray: Ii, prototype: ma } = Array, { concat: Kl, filter: Eo, indexOf: ga, map: ya, push: Gl, slice: ba, some: So, splice: Xl } = ma, Zl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Jl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ql = /<.+>/, tc = /^\w+$/;
function To(n, e) {
  const t = ec(e);
  return !n || !t && !ge(e) && !U(e) ? [] : !t && Jl.test(n) ? e.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !t && tc.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n);
}
class Ri {
  constructor(e, t) {
    if (!e)
      return;
    if (eo(e))
      return e;
    let s = e;
    if (st(e)) {
      const i = t || At;
      if (s = Zl.test(e) && ge(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Ql.test(e) ? wa(e) : eo(i) ? i.find(e) : st(i) ? d(i).find(e) : To(e, i), !s)
        return;
    } else if (ve(e))
      return this.ready(e);
    (s.nodeType || s === un) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(e, t) {
    return new Ri(e, t);
  }
}
const S = Ri.prototype, d = S.init;
d.fn = d.prototype = S;
S.length = 0;
S.splice = Xl;
typeof Symbol == "function" && (S[Symbol.iterator] = ma[Symbol.iterator]);
function eo(n) {
  return n instanceof Ri;
}
function ze(n) {
  return !!n && n === n.window;
}
function ge(n) {
  return !!n && n.nodeType === 9;
}
function ec(n) {
  return !!n && n.nodeType === 11;
}
function U(n) {
  return !!n && n.nodeType === 1;
}
function sc(n) {
  return !!n && n.nodeType === 3;
}
function nc(n) {
  return typeof n == "boolean";
}
function ve(n) {
  return typeof n == "function";
}
function st(n) {
  return typeof n == "string";
}
function ot(n) {
  return n === void 0;
}
function ts(n) {
  return n === null;
}
function _a(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function No(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.getPrototypeOf(n);
  return e === null || e === Object.prototype;
}
d.isWindow = ze;
d.isFunction = ve;
d.isArray = Ii;
d.isNumeric = _a;
d.isPlainObject = No;
function Y(n, e, t) {
  if (t) {
    let s = n.length;
    for (; s--; )
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  } else if (No(n)) {
    const s = Object.keys(n);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (e.call(n[r], r, n[r]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
d.each = Y;
S.each = function(n) {
  return Y(this, n);
};
S.empty = function() {
  return this.each((n, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function dn(...n) {
  const e = nc(n[0]) ? n.shift() : !1, t = n.shift(), s = n.length;
  if (!t)
    return {};
  if (!s)
    return dn(e, d, t);
  for (let i = 0; i < s; i++) {
    const o = n[i];
    for (const r in o)
      e && (Ii(o[r]) || No(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), dn(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
d.extend = dn;
S.extend = function(n) {
  return dn(S, n);
};
const ic = /\S+/g;
function Ai(n) {
  return st(n) ? n.match(ic) || [] : [];
}
S.toggleClass = function(n, e) {
  const t = Ai(n), s = !ot(e);
  return this.each((i, o) => {
    U(o) && Y(t, (r, a) => {
      s ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
S.addClass = function(n) {
  return this.toggleClass(n, !0);
};
S.removeAttr = function(n) {
  const e = Ai(n);
  return this.each((t, s) => {
    U(s) && Y(e, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function oc(n, e) {
  if (n) {
    if (st(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !U(this[0]))
          return;
        const t = this[0].getAttribute(n);
        return ts(t) ? void 0 : t;
      }
      return ot(e) ? this : ts(e) ? this.removeAttr(n) : this.each((t, s) => {
        U(s) && s.setAttribute(n, e);
      });
    }
    for (const t in n)
      this.attr(t, n[t]);
    return this;
  }
}
S.attr = oc;
S.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
S.hasClass = function(n) {
  return !!n && So.call(this, (e) => U(e) && e.classList.contains(n));
};
S.get = function(n) {
  return ot(n) ? ba.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
S.eq = function(n) {
  return d(this.get(n));
};
S.first = function() {
  return this.eq(0);
};
S.last = function() {
  return this.eq(-1);
};
function rc(n) {
  return ot(n) ? this.get().map((e) => U(e) || sc(e) ? e.textContent : "").join("") : this.each((e, t) => {
    U(t) && (t.textContent = n);
  });
}
S.text = rc;
function Lt(n, e, t) {
  if (!U(n))
    return;
  const s = un.getComputedStyle(n, null);
  return t ? s.getPropertyValue(e) || void 0 : s[e] || n.style[e];
}
function Ct(n, e) {
  return parseInt(Lt(n, e), 10) || 0;
}
function ar(n, e) {
  return Ct(n, `border${e ? "Left" : "Top"}Width`) + Ct(n, `padding${e ? "Left" : "Top"}`) + Ct(n, `padding${e ? "Right" : "Bottom"}`) + Ct(n, `border${e ? "Right" : "Bottom"}Width`);
}
const Ui = {};
function ac(n) {
  if (Ui[n])
    return Ui[n];
  const e = _e(n);
  At.body.insertBefore(e, null);
  const t = Lt(e, "display");
  return At.body.removeChild(e), Ui[n] = t !== "none" ? t : "block";
}
function lr(n) {
  return Lt(n, "display") === "none";
}
function va(n, e) {
  const t = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!t && !!e && t.call(n, e);
}
function Li(n) {
  return st(n) ? (e, t) => va(t, n) : ve(n) ? n : eo(n) ? (e, t) => n.is(t) : n ? (e, t) => t === n : () => !1;
}
S.filter = function(n) {
  const e = Li(n);
  return d(Eo.call(this, (t, s) => e.call(t, s, t)));
};
function Qt(n, e) {
  return e ? n.filter(e) : n;
}
S.detach = function(n) {
  return Qt(this, n).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const lc = /^\s*<(\w+)[^>]*>/, cc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, cr = {
  "*": pa,
  tr: Yl,
  td: rr,
  th: rr,
  thead: Vi,
  tbody: Vi,
  tfoot: Vi
};
function wa(n) {
  if (!st(n))
    return [];
  if (cc.test(n))
    return [_e(RegExp.$1)];
  const e = lc.test(n) && RegExp.$1, t = cr[e] || cr["*"];
  return t.innerHTML = n, d(t.childNodes).detach().get();
}
d.parseHTML = wa;
S.has = function(n) {
  const e = st(n) ? (t, s) => To(n, s).length : (t, s) => s.contains(n);
  return this.filter(e);
};
S.not = function(n) {
  const e = Li(n);
  return this.filter((t, s) => (!st(n) || U(s)) && !e.call(s, t, s));
};
function Ht(n, e, t, s) {
  const i = [], o = ve(e), r = s && Li(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (o) {
      const h = e(n[a]);
      h.length && Gl.apply(i, h);
    } else {
      let h = n[a][e];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function Ca(n) {
  return n.multiple && n.options ? Ht(Eo.call(n.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : n.value || "";
}
function hc(n) {
  return arguments.length ? this.each((e, t) => {
    const s = t.multiple && t.options;
    if (s || Ma.test(t.type)) {
      const i = Ii(n) ? ya.call(n, String) : ts(n) ? [] : [String(n)];
      s ? Y(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = ot(n) || ts(n) ? "" : n;
  }) : this[0] && Ca(this[0]);
}
S.val = hc;
S.is = function(n) {
  const e = Li(n);
  return So.call(this, (t, s) => e.call(t, s, t));
};
d.guid = 1;
function Et(n) {
  return n.length > 1 ? Eo.call(n, (e, t, s) => ga.call(s, e) === t) : n;
}
d.unique = Et;
S.add = function(n, e) {
  return d(Et(this.get().concat(d(n, e).get())));
};
S.children = function(n) {
  return Qt(d(Et(Ht(this, (e) => e.children))), n);
};
S.parent = function(n) {
  return Qt(d(Et(Ht(this, "parentNode"))), n);
};
S.index = function(n) {
  const e = n ? d(n)[0] : this[0], t = n ? this : d(e).parent().children();
  return ga.call(t, e);
};
S.closest = function(n) {
  const e = this.filter(n);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(n) : e;
};
S.siblings = function(n) {
  return Qt(d(Et(Ht(this, (e) => d(e).parent().children().not(e)))), n);
};
S.find = function(n) {
  return d(Et(Ht(this, (e) => To(n, e))));
};
const uc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, dc = /^$|^module$|\/(java|ecma)script/i, fc = ["type", "src", "nonce", "noModule"];
function pc(n, e) {
  const t = d(n);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (dc.test(i.type) && fa.contains(i)) {
      const o = _e("script");
      o.text = i.textContent.replace(uc, ""), Y(fc, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function mc(n, e, t, s, i) {
  s ? n.insertBefore(e, t ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(e, n) : n.parentNode.insertBefore(e, t ? n : n.nextSibling), i && pc(e, n.ownerDocument);
}
function te(n, e, t, s, i, o, r, a) {
  return Y(n, (l, h) => {
    Y(d(h), (u, c) => {
      Y(d(e), (p, m) => {
        const g = t ? c : m, y = t ? m : c, v = t ? u : p;
        mc(g, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, r);
  }, o), e;
}
S.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
S.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function gc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (ot(n))
    return this;
  const e = /<script[\s>]/.test(n);
  return this.each((t, s) => {
    U(s) && (e ? d(s).empty().append(n) : s.innerHTML = n);
  });
}
S.html = gc;
S.appendTo = function(n) {
  return te(arguments, this, !0, !1, !0);
};
S.wrapInner = function(n) {
  return this.each((e, t) => {
    const s = d(t), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
S.before = function() {
  return te(arguments, this, !1, !0);
};
S.wrapAll = function(n) {
  let e = d(n), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
S.wrap = function(n) {
  return this.each((e, t) => {
    const s = d(n)[0];
    d(t).wrapAll(e ? s.cloneNode(!0) : s);
  });
};
S.insertAfter = function(n) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
S.insertBefore = function(n) {
  return te(arguments, this, !0, !0);
};
S.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
S.prependTo = function(n) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
S.contents = function() {
  return d(Et(Ht(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
S.next = function(n, e, t) {
  return Qt(d(Et(Ht(this, "nextElementSibling", e, t))), n);
};
S.nextAll = function(n) {
  return this.next(n, !0);
};
S.nextUntil = function(n, e) {
  return this.next(e, !0, n);
};
S.parents = function(n, e) {
  return Qt(d(Et(Ht(this, "parentElement", !0, e))), n);
};
S.parentsUntil = function(n, e) {
  return this.parents(e, n);
};
S.prev = function(n, e, t) {
  return Qt(d(Et(Ht(this, "previousElementSibling", e, t))), n);
};
S.prevAll = function(n) {
  return this.prev(n, !0);
};
S.prevUntil = function(n, e) {
  return this.prev(e, !0, n);
};
S.map = function(n) {
  return d(Kl.apply([], ya.call(this, (e, t) => n.call(e, t, e))));
};
S.clone = function() {
  return this.map((n, e) => e.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((n, e) => {
    let t = e.offsetParent;
    for (; t && Lt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || fa;
  });
};
S.slice = function(n, e) {
  return d(ba.call(this, n, e));
};
const yc = /-([a-z])/g;
function Mo(n) {
  return n.replace(yc, (e, t) => t.toUpperCase());
}
S.ready = function(n) {
  const e = () => setTimeout(n, 0, d);
  return At.readyState !== "loading" ? e() : At.addEventListener("DOMContentLoaded", e), this;
};
S.unwrap = function() {
  return this.parent().each((n, e) => {
    if (e.tagName === "BODY")
      return;
    const t = d(e);
    t.replaceWith(t.children());
  }), this;
};
S.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const e = n.getBoundingClientRect();
  return {
    top: e.top + un.pageYOffset,
    left: e.left + un.pageXOffset
  };
};
S.position = function() {
  const n = this[0];
  if (!n)
    return;
  const e = Lt(n, "position") === "fixed", t = e ? n.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Lt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && U(i)) {
      const o = d(i).offset();
      t.top -= o.top + Ct(i, "borderTopWidth"), t.left -= o.left + Ct(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - Ct(n, "marginTop"),
    left: t.left - Ct(n, "marginLeft")
  };
};
const $a = {
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
S.prop = function(n, e) {
  if (n) {
    if (st(n))
      return n = $a[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((t, s) => {
        s[n] = e;
      });
    for (const t in n)
      this.prop(t, n[t]);
    return this;
  }
};
S.removeProp = function(n) {
  return this.each((e, t) => {
    delete t[$a[n] || n];
  });
};
const bc = /^--/;
function Do(n) {
  return bc.test(n);
}
const qi = {}, { style: _c } = pa, vc = ["webkit", "moz", "ms"];
function wc(n, e = Do(n)) {
  if (e)
    return n;
  if (!qi[n]) {
    const t = Mo(n), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${vc.join(`${s} `)}${s}`.split(" ");
    Y(i, (o, r) => {
      if (r in _c)
        return qi[n] = r, !1;
    });
  }
  return qi[n];
}
const Cc = {
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
function xa(n, e, t = Do(n)) {
  return !t && !Cc[n] && _a(e) ? `${e}px` : e;
}
function $c(n, e) {
  if (st(n)) {
    const t = Do(n);
    return n = wc(n, t), arguments.length < 2 ? this[0] && Lt(this[0], n, t) : n ? (e = xa(n, e, t), this.each((s, i) => {
      U(i) && (t ? i.style.setProperty(n, e) : i.style[n] = e);
    })) : this;
  }
  for (const t in n)
    this.css(t, n[t]);
  return this;
}
S.css = $c;
function ka(n, e) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
const xc = /^\s+|\s+$/;
function hr(n, e) {
  const t = n.dataset[e] || n.dataset[Mo(e)];
  return xc.test(t) ? t : ka(JSON.parse, t);
}
function kc(n, e, t) {
  t = ka(JSON.stringify, t), n.dataset[Mo(e)] = t;
}
function Ec(n, e) {
  if (!n) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = hr(this[0], s);
    return t;
  }
  if (st(n))
    return arguments.length < 2 ? this[0] && hr(this[0], n) : ot(e) ? this : this.each((t, s) => {
      kc(s, n, e);
    });
  for (const t in n)
    this.data(t, n[t]);
  return this;
}
S.data = Ec;
function Ea(n, e) {
  const t = n.documentElement;
  return Math.max(n.body[`scroll${e}`], t[`scroll${e}`], n.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
Y([!0, !1], (n, e) => {
  Y(["Width", "Height"], (t, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    S[i] = function(o) {
      if (this[0])
        return ze(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ge(this[0]) ? Ea(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (o && e ? Ct(this[0], `margin${t ? "Top" : "Left"}`) + Ct(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (n, e) => {
  const t = e.toLowerCase();
  S[t] = function(s) {
    if (!this[0])
      return ot(s) ? void 0 : this;
    if (!arguments.length)
      return ze(this[0]) ? this[0].document.documentElement[`client${e}`] : ge(this[0]) ? Ea(this[0], e) : this[0].getBoundingClientRect()[t] - ar(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!U(r))
        return;
      const a = Lt(r, "boxSizing");
      r.style[t] = xa(t, i + (a === "border-box" ? ar(r, !n) : 0));
    });
  };
});
const ur = "___cd";
S.toggle = function(n) {
  return this.each((e, t) => {
    if (!U(t))
      return;
    const s = lr(t);
    (ot(n) ? s : n) ? (t.style.display = t[ur] || "", lr(t) && (t.style.display = ac(t.tagName))) : s || (t[ur] = Lt(t, "display"), t.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const dr = "___ce", Io = ".", Ro = { focus: "focusin", blur: "focusout" }, Sa = { mouseenter: "mouseover", mouseleave: "mouseout" }, Sc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Ao(n) {
  return Sa[n] || Ro[n] || n;
}
function Lo(n) {
  const e = n.split(Io);
  return [e[0], e.slice(1).sort()];
}
S.trigger = function(n, e) {
  if (st(n)) {
    const [s, i] = Lo(n), o = Ao(s);
    if (!o)
      return this;
    const r = Sc.test(o) ? "MouseEvents" : "HTMLEvents";
    n = At.createEvent(r), n.initEvent(o, !0, !0), n.namespace = i.join(Io), n.___ot = s;
  }
  n.___td = e;
  const t = n.___ot in Ro;
  return this.each((s, i) => {
    t && ve(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Ta(n) {
  return n[dr] = n[dr] || {};
}
function Tc(n, e, t, s, i) {
  const o = Ta(n);
  o[e] = o[e] || [], o[e].push([t, s, i]), n.addEventListener(e, i);
}
function Na(n, e) {
  return !e || !So.call(e, (t) => n.indexOf(t) < 0);
}
function fn(n, e, t, s, i) {
  const o = Ta(n);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Na(r, t) || s && s !== a)
        return !0;
      n.removeEventListener(e, l);
    }));
  else
    for (e in o)
      fn(n, e, t, s, i);
}
S.off = function(n, e, t) {
  if (ot(n))
    this.each((s, i) => {
      !U(i) && !ge(i) && !ze(i) || fn(i);
    });
  else if (st(n))
    ve(e) && (t = e, e = ""), Y(Ai(n), (s, i) => {
      const [o, r] = Lo(i), a = Ao(o);
      this.each((l, h) => {
        !U(h) && !ge(h) && !ze(h) || fn(h, a, r, e, t);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
S.remove = function(n) {
  return Qt(this, n).detach().off(), this;
};
S.replaceWith = function(n) {
  return this.before(n).remove();
};
S.replaceAll = function(n) {
  return d(n).replaceWith(this), this;
};
function Nc(n, e, t, s, i) {
  if (!st(n)) {
    for (const o in n)
      this.on(o, e, t, n[o], i);
    return this;
  }
  return st(e) || (ot(e) || ts(e) ? e = "" : ot(t) ? (t = e, e = "") : (s = t, t = e, e = "")), ve(s) || (s = t, t = void 0), s ? (Y(Ai(n), (o, r) => {
    const [a, l] = Lo(r), h = Ao(a), u = a in Sa, c = a in Ro;
    h && this.each((p, m) => {
      if (!U(m) && !ge(m) && !ze(m))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Na(l, y.namespace.split(Io)) || !e && (c && (y.target !== m || y.___ot === h) || u && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let v = m;
        if (e) {
          let w = y.target;
          for (; !va(w, e); )
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
            return t;
          }
        });
        const _ = s.call(v, y, y.___td);
        i && fn(m, h, l, e, g), _ === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || d.guid++, Tc(m, h, l, e, g);
    });
  }), this) : this;
}
S.on = Nc;
function Mc(n, e, t, s) {
  return this.on(n, e, t, s, !0);
}
S.one = Mc;
const Dc = /\r?\n/g;
function Ic(n, e) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(e.replace(Dc, `\r
`))}`;
}
const Rc = /file|reset|submit|button|image/i, Ma = /radio|checkbox/i;
S.serialize = function() {
  let n = "";
  return this.each((e, t) => {
    Y(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Rc.test(i.type) || Ma.test(i.type) && !i.checked)
        return;
      const o = Ca(i);
      if (!ot(o)) {
        const r = Ii(o) ? o : [o];
        Y(r, (a, l) => {
          n += Ic(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = d;
function Ac(n, e) {
  if (n == null)
    return [n, void 0];
  typeof e == "string" && (e = e.split("."));
  const t = e.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && e.length; ) {
    let o = e.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${t}".`);
  }
  if (e.length)
    throw new Error(`Cannot access property with rest path "${e.join(".")}", the full path is "${t}".`);
  return i;
}
function Lc(n, e, t) {
  try {
    const s = Ac(n, e), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function G(n, ...e) {
  if (e.length === 0)
    return n;
  if (e.length === 1 && typeof e[0] == "object" && e[0]) {
    const t = e[0];
    return Object.keys(t).forEach((s) => {
      const i = t[s] ?? "";
      n = n.replace(new RegExp(`\\{${s}\\}`, "g"), `${i}`);
    }), n;
  }
  for (let t = 0; t < e.length; t++) {
    const s = e[t] ?? "";
    n = n.replace(new RegExp(`\\{${t}\\}`, "g"), `${s}`);
  }
  return n;
}
var Po = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Po || {});
function Pc(n, e = 2, t) {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / Po[t]).toFixed(e) + t);
}
const Hc = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const s = t[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Po[s];
};
let Ho = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Bt;
function Oc() {
  return Ho;
}
function Fc(n) {
  Ho = n.toLowerCase();
}
function Da(n, e) {
  Bt || (Bt = {}), typeof n == "string" && (n = { [n]: e ?? {} }), d.extend(!0, Bt, n);
}
function K(n, e, t, s, i, o) {
  Array.isArray(n) ? Bt && n.unshift(Bt) : n = Bt ? [Bt, n] : [n], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Ho;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Bt ? `${o}.${e}` : e;
    if (a = Lc(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : t ? G(a, ...Array.isArray(t) ? t : [t]) : a;
}
function Bc(n, e, t, s) {
  return K(void 0, n, e, t, s);
}
K.addLang = Da;
K.getLang = Bc;
K.getCode = Oc;
K.setCode = Fc;
Da({
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
function Ia(...n) {
  const e = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Ia(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const N = (...n) => Ia(...n).reduce((e, [t, s]) => (s && e.push(t), e), []).join(" ");
d.classes = N;
d.fn.setClass = function(n, ...e) {
  return this.each((t, s) => {
    const i = d(s);
    n === !0 ? i.attr("class", N(i.attr("class"), ...e)) : i.addClass(N(n, ...e));
  });
};
const Xe = /* @__PURE__ */ new WeakMap();
function Ra(n, e, t) {
  const s = Xe.has(n), i = s ? Xe.get(n) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, d(n).dataset(), i), Xe.set(n, i)) : Xe.delete(n);
}
function Aa(n, e, t) {
  let s = Xe.get(n) || {};
  return !t && n instanceof Element && (s = Object.assign({}, d(n).dataset(), s)), e === void 0 ? s : s[e];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...n) {
  if (!this.length)
    return;
  const [e, t] = n;
  return !n.length || n.length === 1 && typeof e == "string" ? Aa(this[0], e) : this.each((s, i) => Ra(i, e, t));
};
d.fn.removeData = function(n = null) {
  return this.each((e, t) => Ra(t, n));
};
d.fn._attr = d.fn.attr;
d.fn.extend({
  attr(...n) {
    const [e, t] = n;
    return !n.length || n.length === 1 && typeof e == "string" ? this._attr.apply(this, n) : typeof e == "object" ? (e && Object.keys(e).forEach((s) => {
      const i = e[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : t === null ? this.removeAttr(e) : this._attr(e, t);
  }
});
d.Event = (n, e) => {
  const [t, ...s] = n.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = t, i.___td = e, i;
};
const pn = (n, e) => new Promise((t) => {
  const s = window.setTimeout(t, n);
  e && e(s);
}), Wc = {};
d.share = Wc;
const Ze = /* @__PURE__ */ new Map();
function mn(n) {
  const { zui: e } = window;
  return (!Ze.size || n && !Ze.has(n.toUpperCase())) && Object.keys(e).forEach((t) => {
    const s = e[t];
    !s.NAME || !s.ZUI || Ze.set(t.toLowerCase(), s);
  }), n ? Ze.get(n.toLowerCase()) : void 0;
}
function zc(n, e, t) {
  const s = mn(n);
  return s ? !s.MULTI_INSTANCE && s.get(e) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: e, options: t }), null) : new s(e, t) : null;
}
function Vu(n) {
  if (n) {
    const e = mn(n);
    e && e.defineFn();
  } else
    mn(), Ze.forEach((e) => {
      e.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = d(this);
    let e = n.dataset();
    const [t, s] = e.zui.split(":");
    n.zui(t) || (s ? e = d.share[s] : delete e.zui, requestAnimationFrame(() => zc(t, this, e)));
  }), this;
};
d.fn.zui = function(n, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof n != "string") {
    const i = Aa(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), n === !0 ? o : r;
  }
  const s = mn(n);
  if (s)
    return e === !0 ? s.getAll(t) : s.query(t, e);
};
d(() => {
  d("body").zuiInit();
});
function Oo(n, e) {
  const t = d(n)[0];
  if (!t)
    return !1;
  let { viewport: s } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: _ } = document.documentElement;
    s = { left: 0, top: 0, width: y || _, height: g || v };
  }
  const { left: l, top: h, width: u, height: c } = s;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const p = i <= u && i + r >= l;
  return o <= c && o + a >= h && p;
}
d.fn.isVisible = function(n) {
  return Oo(this, n);
};
function Fo(n, e, t = !1) {
  const s = d(n);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${d.guid++}`;
      s.append(`<script id="${i}">${e}<\/script>`), t && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    Fo(s, o.innerHTML), o.remove();
  });
}
d.runJS = (n, ...e) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...e.map(([s]) => s), n)(...e.map(([, s]) => s)));
d.fn.runJS = function(n) {
  return this.each((e, t) => {
    Fo(t, n);
  });
};
function La(n, e) {
  const t = d(n), { ifNeeded: s = !0, ...i } = e || {};
  return t.each((o, r) => {
    s && Oo(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
d.fn.scrollIntoView = function(n) {
  return this.each((e, t) => {
    La(t, n);
  });
};
d.setLibRoot = function(n) {
  d.libRoot = n;
};
d.registerLib = function(n, e) {
  d.libMap || (d.libMap = {}), !e.name && e.id && (e.id = `zui-lib-${n}`), d.libMap[n] = e;
};
d.getLib = function(n, e, t) {
  return new Promise((s, i) => {
    let o = typeof n == "string" ? { src: n } : d.extend({}, n);
    typeof e == "function" ? o.success = e : e && d.extend(o, e), t && (o.success = t);
    let { src: r } = o;
    if (!r)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = d.libMap && d.libMap[r];
    a && (o = d.extend({}, a, o), r = a.src || o.src);
    const { root: l = d.libRoot } = o;
    l && (r = `${l}/${r}`.replace("//", "/"));
    const { success: h, name: u } = o, c = () => u ? window[u] : void 0, p = () => {
      s(c()), h == null || h();
    };
    if (c()) {
      p();
      return;
    }
    const { id: m } = o, g = d(m ? `#${m}` : `script[src="${r}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        p();
      else {
        const E = g.data("loadCalls") || [];
        E.push(p), g.data("loadCalls", E);
      }
      return;
    }
    const { async: y = !0, defer: v = !1, noModule: _ = !1, type: w, integrity: x } = o, k = document.createElement("script");
    k.async = y, k.defer = v, k.noModule = _, w && (k.type = w), x && (k.integrity = x), k.onload = () => {
      p(), (d(k).dataset("loaded", !0).data("loadCalls") || []).forEach((M) => M()), d(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${r}`));
    }, k.src = r, d("head").append(k);
  });
};
d.getScript = d.getLib;
const Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Oo,
  runJS: Fo,
  scrollIntoView: La
}, Symbol.toStringTag, { value: "Module" }));
var Pi, B, Pa, Z, se, fr, Ha, so, xe = {}, Oa = [], jc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Bo = Array.isArray;
function Kt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function Fa(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function X(n, e, t) {
  var s, i, o, r = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Pi.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return an(n, r, s, i, null);
}
function an(n, e, t, s, i) {
  var o = { type: n, props: e, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Pa };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function q() {
  return { current: null };
}
function Ye(n) {
  return n.children;
}
function O(n, e) {
  this.props = n, this.context = e;
}
function gn(n, e) {
  if (e == null)
    return n.__ ? gn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? gn(n) : null;
}
function Ba(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Ba(n);
  }
}
function pr(n) {
  (!n.__d && (n.__d = !0) && se.push(n) && !yn.__r++ || fr !== B.debounceRendering) && ((fr = B.debounceRendering) || Ha)(yn);
}
function yn() {
  var n, e, t, s, i, o, r, a, l;
  for (se.sort(so); n = se.shift(); )
    n.__d && (e = se.length, s = void 0, i = void 0, o = void 0, a = (r = (t = n).__v).__e, (l = t.__P) && (s = [], i = [], (o = Kt({}, r)).__v = r.__v + 1, Wo(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, s, a ?? gn(r), r.__h, i), Va(s, r, i), r.__e != a && Ba(r)), se.length > e && se.sort(so));
  yn.__r = 0;
}
function Wa(n, e, t, s, i, o, r, a, l, h, u) {
  var c, p, m, g, y, v, _, w, x, k, E = 0, M = s && s.__k || Oa, I = M.length, R = I, A = e.length;
  for (t.__k = [], c = 0; c < A; c++)
    (g = t.__k[c] = (g = e[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? an(null, g, null, null, g) : Bo(g) ? an(Ye, { children: g }, null, null, null) : g.__b > 0 ? an(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (w = Vc(g, M, _ = c + E, R)) === -1 ? m = xe : (m = M[w] || xe, M[w] = void 0, R--), Wo(n, g, m, i, o, r, a, l, h, u), y = g.__e, (p = g.ref) && m.ref != p && (m.ref && zo(m.ref, null, g), u.push(p, g.__c || y, g)), y != null && (v == null && (v = y), k = !(x = m === xe || m.__v === null) && w === _, x ? w == -1 && E-- : w !== _ && (w === _ + 1 ? (E++, k = !0) : w > _ ? R > A - _ ? (E += w - _, k = !0) : E-- : E = w < _ && w == _ - 1 ? w - _ : 0), _ = c + E, k = k || w == c && !x, typeof g.type != "function" || w === _ && m.__k !== g.__k ? typeof g.type == "function" || k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = y.nextSibling : l = ja(n, y, l) : l = za(g, l, n), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = I; c--; )
    M[c] != null && (typeof t.type == "function" && M[c].__e != null && M[c].__e == t.__d && (t.__d = M[c].__e.nextSibling), Ua(M[c], M[c]));
}
function za(n, e, t) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, e = typeof s.type == "function" ? za(s, e, t) : ja(t, s.__e, e));
  return e;
}
function ja(n, e, t) {
  return t == null || t.parentNode !== n ? n.insertBefore(e, null) : e == t && e.parentNode != null || n.insertBefore(e, t), e.nextSibling;
}
function Vc(n, e, t, s) {
  var i = n.key, o = n.type, r = t - 1, a = t + 1, l = e[t];
  if (l === null || l && i == l.key && o === l.type)
    return t;
  if (s > (l != null ? 1 : 0))
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
function Uc(n, e, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || bn(n, o, null, t[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || bn(n, o, e[o], t[o], s);
}
function mr(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || jc.test(e) ? t : t + "px";
}
function bn(n, e, t, s, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (e in s)
            t && e in t || mr(n.style, e, "");
        if (t)
          for (e in t)
            s && t[e] === s[e] || mr(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? s || n.addEventListener(e, o ? yr : gr, o) : n.removeEventListener(e, o ? yr : gr, o);
    else if (e !== "dangerouslySetInnerHTML") {
      if (i)
        e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (e !== "width" && e !== "height" && e !== "href" && e !== "list" && e !== "form" && e !== "tabIndex" && e !== "download" && e !== "rowSpan" && e !== "colSpan" && e in n)
        try {
          n[e] = t ?? "";
          break t;
        } catch {
        }
      typeof t == "function" || (t == null || t === !1 && e[4] !== "-" ? n.removeAttribute(e) : n.setAttribute(e, t));
    }
}
function gr(n) {
  return this.l[n.type + !1](B.event ? B.event(n) : n);
}
function yr(n) {
  return this.l[n.type + !0](B.event ? B.event(n) : n);
}
function Wo(n, e, t, s, i, o, r, a, l, h) {
  var u, c, p, m, g, y, v, _, w, x, k, E, M, I, R, A = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = B.__b) && u(e);
  try {
    t:
      if (typeof A == "function") {
        if (_ = e.props, w = (u = A.contextType) && s[u.__c], x = u ? w ? w.props.value : u.__ : s, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in A && A.prototype.render ? e.__c = c = new A(_, x) : (e.__c = c = new O(_, x), c.constructor = A, c.render = Yc), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = x, c.__n = s, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), A.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Kt({}, c.__s)), Kt(c.__s, A.getDerivedStateFromProps(_, c.__s))), m = c.props, g = c.state, c.__v = e, p)
          A.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && _ !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = _, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(F) {
              F && (F.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, y);
          });
        }
        if (c.context = x, c.props = _, c.__P = n, c.__e = !1, E = B.__r, M = 0, "prototype" in A && A.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(e), u = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++)
            c.__h.push(c._sb[I]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++M < 25);
        c.state = c.__s, c.getChildContext != null && (s = Kt(Kt({}, s), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(m, g)), Wa(n, Bo(R = u != null && u.type === Ye && u.key == null ? u.props.children : u) ? R : [R], e, t, s, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = qc(t.__e, e, t, s, i, o, r, l, h);
    (u = B.diffed) && u(e);
  } catch (F) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), B.__e(F, e, t);
  }
}
function Va(n, e, t) {
  for (var s = 0; s < t.length; s++)
    zo(t[s], t[++s], t[++s]);
  B.__c && B.__c(e, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      B.__e(o, i.__v);
    }
  });
}
function qc(n, e, t, s, i, o, r, a, l) {
  var h, u, c, p = t.props, m = e.props, g = e.type, y = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; y < o.length; y++)
      if ((h = o[y]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        n = h, o[y] = null;
        break;
      }
  }
  if (n == null) {
    if (g === null)
      return document.createTextNode(m);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), o = null, a = !1;
  }
  if (g === null)
    p === m || a && n.data === m || (n.data = m);
  else {
    if (o = o && Pi.call(n.childNodes), u = (p = t.props || xe).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, y = 0; y < n.attributes.length; y++)
          p[n.attributes[y].name] = n.attributes[y].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""));
    }
    if (Uc(n, m, p, i, a), c)
      e.__k = [];
    else if (Wa(n, Bo(y = e.props.children) ? y : [y], e, t, s, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && gn(t, 0), a, l), o != null)
      for (y = o.length; y--; )
        o[y] != null && Fa(o[y]);
    a || ("value" in m && (y = m.value) !== void 0 && (y !== n.value || g === "progress" && !y || g === "option" && y !== p.value) && bn(n, "value", y, p.value, !1), "checked" in m && (y = m.checked) !== void 0 && y !== n.checked && bn(n, "checked", y, p.checked, !1));
  }
  return n;
}
function zo(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (s) {
    B.__e(s, t);
  }
}
function Ua(n, e, t) {
  var s, i;
  if (B.unmount && B.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || zo(s, null, e)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        B.__e(o, e);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Ua(s[i], e, t || typeof n.type != "function");
  t || n.__e == null || Fa(n.__e), n.__ = n.__e = n.__d = void 0;
}
function Yc(n, e, t) {
  return this.constructor(n, t);
}
function _n(n, e, t) {
  var s, i, o, r;
  B.__ && B.__(n, e), i = (s = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Wo(e, n = (!s && t || e).__k = X(Ye, null, [n]), i || xe, xe, e.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : e.firstChild ? Pi.call(e.childNodes) : null, o, !s && t ? t : i ? i.__e : e.firstChild, s, r), Va(o, n, r);
}
Pi = Oa.slice, B = { __e: function(n, e, t, s) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Pa = 0, Z = function(n) {
  return n != null && n.constructor === void 0;
}, O.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof n == "function" && (n = n(Kt({}, t), this.props)), n && Kt(t, n), n != null && this.__v && (e && this._sb.push(e), pr(this));
}, O.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), pr(this));
}, O.prototype.render = Ye, se = [], Ha = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, so = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, yn.__r = 0;
var qa = function(n, e, t, s) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[e[++o]] = a : r === 6 ? s[1][e[++o]] += a + "" : r ? (i = n.apply(a, qa(n, a, t, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : s.push(a);
  }
  return s;
}, br = /* @__PURE__ */ new Map();
function Kc(n) {
  var e = br.get(this);
  return e || (e = /* @__PURE__ */ new Map(), br.set(this, e)), (e = qa(this, e.get(n) || (e.set(n, e = function(t) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(p) {
      o === 1 && (p || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, r) : o === 3 && (p || r) ? (l.push(3, p, r), o = 2) : o === 2 && r === "..." && p ? l.push(4, p, 0) : o === 2 && r && !p ? l.push(5, 0, !0, r) : o >= 5 && ((r || !p && o === 5) && (l.push(o, 0, r, i), o = 6), p && (l.push(o, p, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        s = t[u][c], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(n)), e), arguments, [])).length > 1 ? e : e[0];
}
const qu = Kc.bind(X);
class jo extends O {
  _getClassName(e) {
    return [e.className, e.class];
  }
  _getProps(e) {
    const { className: t, class: s, attrs: i, data: o, forwardRef: r, children: a, style: l, ...h } = e, u = Object.keys(h).reduce((c, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-)[a-zA-Z-]+/.test(p)) && (c[p] = h[p]), c), {});
    return { ref: r, class: N(this._getClassName(e)), style: l, ...u, ...i };
  }
  _getComponent(e) {
    return e.component || "div";
  }
  _getChildren(e) {
    return e.children;
  }
  _beforeRender(e) {
    return e;
  }
  render(e) {
    return e = this._beforeRender(e) || e, X(this._getComponent(e), this._getProps(e), this._getChildren(e));
  }
}
var Gc = 0;
function f(n, e, t, s, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: n, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Gc, __source: i, __self: o };
  if (typeof n == "function" && (r = n.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return B.vnode && B.vnode(h), h;
}
class Qs extends O {
  constructor() {
    super(...arguments), this._ref = q();
  }
  _runJS() {
    this.props.executeScript && d(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(e) {
    this.props.html !== e.html && this._runJS();
  }
  render(e) {
    const { executeScript: t, html: s, ...i } = e;
    return /* @__PURE__ */ f(jo, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function Xc(n) {
  const {
    tag: e,
    className: t,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...u
  } = n, c = [t], p = { ...s }, m = [], g = [];
  return i.forEach((y) => {
    const v = [];
    if (typeof y == "string" && a && a[y] && (y = a[y]), typeof y == "function")
      if (l)
        v.push(...l.call(r, y, m, ...o));
      else {
        const _ = y.call(r, m, ...o);
        _ && (Array.isArray(_) ? v.push(..._) : v.push(_));
      }
    else
      v.push(y);
    v.forEach((_) => {
      _ != null && (typeof _ == "object" && !Z(_) && ("html" in _ || "__html" in _ || "className" in _ || "style" in _ || "attrs" in _ || "children" in _) ? _.html ? m.push(
        /* @__PURE__ */ f("div", { className: N(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? g.push(_.__html) : (_.style && Object.assign(p, _.style), _.className && c.push(_.className), _.children && m.push(_.children), _.attrs && Object.assign(u, _.attrs)) : m.push(_));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: N(c),
    style: p,
    ...u
  }, m];
}
function no({
  tag: n = "div",
  ...e
}) {
  const [t, s] = Xc(e);
  return X(n, t, ...s);
}
function Ya(n, e, t) {
  return typeof n == "function" ? n.call(e, ...t || []) : Array.isArray(n) ? n.map((s) => Ya(s, e, t)) : Z(n) || n === null ? n : typeof n == "object" ? n.html ? /* @__PURE__ */ f(Qs, { ...n }) : /* @__PURE__ */ f(jo, { ...n }) : n;
}
function ee(n) {
  const { content: e, generatorThis: t, generatorArgs: s } = n, i = Ya(e, t, s);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ f(Ye, { children: i });
}
const _r = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function J(n) {
  const { icon: e, className: t, ...s } = n;
  if (!e)
    return null;
  if (Z(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(_r(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? _r(r) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: N(i), ...s });
}
function Zc(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Jc(n) {
  const e = this, t = n._container;
  e.componentWillUnmount = function() {
    _n(null, e._temp), e._temp = null, e._container = null;
  }, e._container && e._container !== t && e.componentWillUnmount(), n._vnode ? (e._temp || (e._container = t, e._temp = {
    nodeType: 1,
    parentNode: t,
    childNodes: [],
    appendChild(s) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    insertBefore(s, i) {
      this.childNodes.push(s), e._container.appendChild(s);
    },
    removeChild(s) {
      this.childNodes.splice(this.childNodes.indexOf(s) >>> 1, 1), e._container.removeChild(s);
    }
  }), _n(
    X(Zc, { context: e.context }, n._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function Qc(n, e) {
  const t = X(Jc, { _vnode: n, _container: e });
  return t.containerInfo = e, t;
}
function Ka(n) {
  return n.parentNode === document ? !1 : n.parentNode ? Ka(n.parentNode) : !0;
}
const Mn = class Mn {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: s, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = d(e);
    if (l.data(s) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = l[0], u = d.guid++;
    if (this._gid = u, this._element = h, l.on("DOMNodeRemovedFromDocument", () => {
      this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
        this._autoDestory = 0, Ka(h) && this.destroy();
      }, 100);
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(t), this._key = this.options.key ?? `__${u}`, l.data(s, this).attr(i, `${u}`), r) {
      const c = `${s}:ALL`;
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
    return d(this.element);
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
    const { KEY: e, DATA_KEY: t, MULTI_INSTANCE: s } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(e).attr(t, null), s) {
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
    return e && d.extend(this._options, e), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const s = d.Event(e);
    return s.__src = this, this.$emitter.trigger(s, [this, ...t]), s;
  }
  /**
   * Listen to a component event.
   *
   * @param event     The event name.
   * @param callback  The event callback.
   */
  on(e, t, s) {
    const i = this;
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(e), function(o, r) {
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
  i18n(e, t, s) {
    return K(this.options.i18n, e, t, s, this.options.lang, this.constructor.NAME) ?? K(this.options.i18n, e, t, s, this.options.lang) ?? `{i18n:${e}}`;
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
    const s = d(e);
    if (this.MULTI_INSTANCE && t !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(t) : void 0;
    }
    return s.data(this.KEY);
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
    const s = this.get(e, t == null ? void 0 : t.key);
    return s ? (t && s.setOptions(t), s) : new this(e, t);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(e) {
    const { MULTI_INSTANCE: t, DATA_KEY: s } = this, i = [];
    return d(e || document).find(`[${s}]`).each((o, r) => {
      if (t) {
        const l = d(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = d(r).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((s, i) => s.gid - i.gid)[0] : this.get(d(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    let t = e || this.ZUI;
    d.fn[t] && (t = `zui${this.NAME}`);
    const s = this;
    d.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = s.get(u);
          if (c ? r && c.render(r) : c = new s(u, r), a) {
            let p = c[a], m = c;
            p === void 0 && (m = c.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...o) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
Mn.DEFAULT = {}, Mn.MULTI_INSTANCE = !1;
let rt = Mn;
class z extends rt {
  constructor() {
    super(...arguments), this.ref = q();
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
    _n(
      X(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function th({
  component: n = "div",
  className: e,
  children: t,
  style: s,
  attrs: i
}) {
  return X(n, {
    className: N(e),
    style: s,
    ...i
  }, t);
}
function Ga({
  type: n,
  component: e = "a",
  className: t,
  children: s,
  content: i,
  attrs: o,
  url: r,
  disabled: a,
  active: l,
  icon: h,
  text: u,
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
    u ? /* @__PURE__ */ f("span", { className: "text", children: u }) : null,
    /* @__PURE__ */ f(ee, { content: i }),
    s,
    /* @__PURE__ */ f(J, { icon: p })
  ];
  return X(e, {
    className: N(t, { disabled: a, active: l }),
    title: m,
    [e === "a" ? "href" : "data-url"]: a ? void 0 : r,
    [e === "a" ? "target" : "data-target"]: a ? void 0 : c,
    onClick: y,
    ..._,
    ...o
  }, ...w);
}
function eh({
  component: n = "div",
  className: e,
  text: t,
  attrs: s,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return X(n, {
    className: N(e),
    style: r,
    onClick: a,
    ...s
  }, t, /* @__PURE__ */ f(ee, { content: o }), i);
}
function sh({
  component: n = "div",
  className: e,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return X(n, {
    className: N(e),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function nh({ type: n, ...e }) {
  return /* @__PURE__ */ f(no, { ...e });
}
function Xa({
  component: n = "div",
  className: e,
  children: t,
  content: s,
  style: i,
  attrs: o
}) {
  return X(n, {
    className: N(e),
    style: i,
    ...o
  }, /* @__PURE__ */ f(ee, { content: s }), t);
}
var Dt;
let Hi = (Dt = class extends O {
  constructor() {
    super(...arguments), this.ref = q();
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
    var t, s;
    (s = (t = this.props).afterRender) == null || s.call(t, { menu: this, firstRender: e });
  }
  handleItemClick(e, t, s, i) {
    s && s.call(i.target, i, e, t);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: e, index: t, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props };
    typeof e.items == "function" && (e.items = e.items(this)), e.items || (e.items = []);
    const t = (s = e.beforeRender) == null ? void 0 : s.call(e, { menu: this, options: e });
    return t && Object.assign(e, t), e;
  }
  getItemRenderProps(e, t, s) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = e;
    let a = { ...t };
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), a.className = N(a.className), r && (a = r(a)), a;
  }
  renderItem(e, t, s) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(e, t, s), { itemRender: o } = e;
    if (o) {
      if (typeof o == "object") {
        const y = o[t.type || "item"];
        if (y)
          return /* @__PURE__ */ f(y, { ...i });
      } else if (typeof o == "function") {
        const y = o.call(this, i, X);
        if (Z(y))
          return y;
        typeof y == "object" && Object.assign(i, y);
      }
    }
    const { type: r = "item", component: a, key: l = s, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: p, ...m } = i;
    if (r === "html")
      return /* @__PURE__ */ f(
        "li",
        {
          className: N("action-menu-item", `${this.name}-html`, u, m.className),
          ...h,
          style: c || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Dt.ItemComponents[r] : a;
    return Object.assign(m, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), e.checkbox && r === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(g, {
      className: N(u),
      children: p,
      style: c,
      key: l,
      ...h
    }, {
      ...m,
      type: r,
      component: typeof a == "string" ? a : void 0
    });
  }
  renderTypedItem(e, t, s) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ f(
      "li",
      {
        className: N(`${this.constructor.NAME}-item`, `${this.name}-${s.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ f(e, { ...s }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const e = this.beforeRender(), {
      name: t,
      style: s,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: p,
      compact: m,
      ...g
    } = e, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(y, { class: N(this.name, o, m ? "compact" : ""), style: s, ...g, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, Dt.ItemComponents = {
  divider: th,
  item: Ga,
  heading: eh,
  space: sh,
  custom: nh,
  basic: Xa
}, Dt.ROOT_TAG = "menu", Dt.NAME = "action-menu", Dt);
const Dn = class Dn extends z {
};
Dn.NAME = "ActionMenu", Dn.Component = Hi;
let vr = Dn;
function ih({
  items: n,
  show: e,
  level: t,
  ...s
}) {
  return /* @__PURE__ */ f(Ga, { ...s });
}
var os, dt, Se, rs;
let Vo = (rs = class extends Hi {
  constructor(t) {
    super(t);
    C(this, os, /* @__PURE__ */ new Set());
    C(this, dt, void 0);
    C(this, Se, (t, s, i) => {
      d(i.target).closest(".not-nested-toggle").length || (this.toggle(t, s), i.preventDefault());
    });
    $(this, dt, t.nestedShow === void 0), b(this, dt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: s, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = N(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: s, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: p, itemRenderProps: m } = this.props;
    return {
      items: t,
      name: s,
      nestedShow: b(this, dt) ? this.state.nestedShow : o,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: i || this,
      commonItemProps: c,
      onClickItem: h,
      afterRender: u,
      beforeRender: a,
      beforeDestroy: r,
      itemRender: l,
      itemRenderProps: m,
      level: (p || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: s } = t;
    if (!s || (typeof s == "function" && (s = s(t, this)), !s.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(s);
    return /* @__PURE__ */ f(i, { ...o, "data-level": o.level });
  }
  isNestedItem(t) {
    return (!t.type || t.type === "item") && !!t.items;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  renderToggleIcon(t, s) {
  }
  getItemRenderProps(t, s, i) {
    const o = super.getItemRenderProps(t, s, i);
    if (o.level = t.level || 0, !this.isNestedItem(o))
      return o;
    const r = o.key ?? o.id ?? `${t.level || 0}:${i}`;
    b(this, os).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: b(this, Se).bind(this, r, !0),
        onMouseLeave: b(this, Se).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        b(this, Se).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const s = b(this, dt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggle(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, s);
    if (!b(this, dt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...b(this, os).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), s === void 0)
      s = !o[t];
    else if (!!o[t] == !!s)
      return !1;
    return s ? o[t] = s : delete o[t], this.setState({ nestedShow: { ...o } }), !0;
  }
  expand(t) {
    return this.toggle(t, !0);
  }
  collapse(t) {
    return this.toggle(t, !1);
  }
  expandAll() {
    b(this, dt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    b(this, dt) && this.setState({ nestedShow: !1 });
  }
}, os = new WeakMap(), dt = new WeakMap(), Se = new WeakMap(), rs.ItemComponents = {
  item: ih
}, rs);
const In = class In extends z {
};
In.NAME = "ActionMenuNested", In.Component = Vo;
let wr = In;
var as;
let ye = (as = class extends Vo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: t } = e;
    return t === void 0 && (t = e.items.some((s) => s.icon)), e.className = N(e.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": e.items.some((s) => this.isNestedItem(s)),
      popup: e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, as.NAME = "menu", as);
const Rn = class Rn extends z {
};
Rn.NAME = "Menu", Rn.Component = ye;
let Cr = Rn;
class tt extends jo {
  _beforeRender(e) {
    const { text: t, loading: s, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = e;
    this._isEmptyText = t == null || typeof t == "string" && !t.length || s && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !s;
  }
  _getChildren(e) {
    const { loading: t, loadingIcon: s, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: h } = e;
    return [
      t ? /* @__PURE__ */ f(J, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(J, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: t ? i : r }),
      t ? null : a,
      t ? null : /* @__PURE__ */ f(J, { icon: l }),
      t ? null : h ? /* @__PURE__ */ f("span", { className: typeof h == "string" ? `caret-${h}` : "caret" }) : null
    ];
  }
  _getClassName(e) {
    const { type: t, className: s, disabled: i, loading: o, active: r, children: a, square: l, size: h, rounded: u } = e;
    return N("btn", t, s, {
      "btn-caret": this._onlyCaret,
      disabled: i || o,
      active: r,
      loading: o,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, h ? `size-${h}` : "", typeof u == "string" ? u : { rounded: u });
  }
  _getComponent(e) {
    return e.component || (e.url ? "a" : "button");
  }
  _getProps(e) {
    const t = this._getComponent(e), { url: s, target: i, disabled: o, btnType: r = "button", hint: a } = e, l = {
      ...super._getProps(e),
      disabled: o,
      title: a,
      type: t === "button" ? r : void 0
    };
    return o || (s !== void 0 && (l[t === "a" ? "href" : "data-url"] = s), i !== void 0 && (l[t === "a" ? "target" : "data-target"] = i)), l;
  }
}
function oh({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(tt, { type: t, ...s });
}
let rh = class extends O {
  render(e) {
    const {
      id: t,
      popup: s,
      title: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: h,
      headingClass: u,
      titleClass: c,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = e;
    let y = /* @__PURE__ */ f(ee, { content: o }, "content");
    (p || i) && (y = /* @__PURE__ */ f("div", { className: p, children: y }, "content"));
    const v = [], _ = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: u, children: [
      i ? /* @__PURE__ */ f("div", { className: c, children: i }) : null,
      _
    ] }, "heading")) : v.push(_), v.push(y), h && v.push(/* @__PURE__ */ f("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: t, className: N("popover", a, { popup: s }), style: r, children: v });
  }
};
const An = class An extends z {
};
An.NAME = "PopoverPanel", An.Component = rh;
let io = An;
function tn(n) {
  return n.split("-")[1];
}
function Uo(n) {
  return n === "y" ? "height" : "width";
}
function fe(n) {
  return n.split("-")[0];
}
function en(n) {
  return ["top", "bottom"].includes(fe(n)) ? "x" : "y";
}
function $r(n, e, t) {
  let { reference: s, floating: i } = n;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = en(e), l = Uo(a), h = s[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (fe(e)) {
    case "top":
      c = { x: o, y: s.y - i.height };
      break;
    case "bottom":
      c = { x: o, y: s.y + s.height };
      break;
    case "right":
      c = { x: s.x + s.width, y: r };
      break;
    case "left":
      c = { x: s.x - i.width, y: r };
      break;
    default:
      c = { x: s.x, y: s.y };
  }
  switch (tn(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const ah = async (n, e, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: n, floating: e, strategy: i }), { x: u, y: c } = $r(h, s, l), p = s, m = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: _ } = a[y], { x: w, y: x, data: k, reset: E } = await _({ x: u, y: c, initialPlacement: s, placement: p, strategy: i, middlewareData: m, rects: h, platform: r, elements: { reference: n, floating: e } });
    u = w ?? u, c = x ?? c, m = { ...m, [v]: { ...m[v], ...k } }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (h = E.rects === !0 ? await r.getElementRects({ reference: n, floating: e, strategy: i }) : E.rects), { x: u, y: c } = $r(h, p, l)), y = -1);
  }
  return { x: u, y: c, placement: p, strategy: i, middlewareData: m };
};
function sn(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Za(n) {
  return typeof n != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function vn(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function Ja(n, e) {
  var t;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = n, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: p = !1, padding: m = 0 } = sn(e, n), g = Za(m), y = a[p ? c === "floating" ? "reference" : "floating" : c], v = vn(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), _ = c === "floating" ? { ...r.floating, x: s, y: i } : r.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), x = await (o.isElement == null ? void 0 : o.isElement(w)) && await (o.getScale == null ? void 0 : o.getScale(w)) || { x: 1, y: 1 }, k = vn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: _, offsetParent: w, strategy: l }) : _);
  return { top: (v.top - k.top + g.top) / x.y, bottom: (k.bottom - v.bottom + g.bottom) / x.y, left: (v.left - k.left + g.left) / x.x, right: (k.right - v.right + g.right) / x.x };
}
const oo = Math.min, lh = Math.max;
function ro(n, e, t) {
  return lh(n, oo(e, t));
}
const ao = (n) => ({ name: "arrow", options: n, async fn(e) {
  const { x: t, y: s, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = sn(n, e) || {};
  if (l == null)
    return {};
  const u = Za(h), c = { x: t, y: s }, p = en(i), m = Uo(p), g = await r.getDimensions(l), y = p === "y", v = y ? "top" : "left", _ = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", x = o.reference[m] + o.reference[p] - c[p] - o.floating[m], k = c[p] - o.reference[p], E = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = E ? E[w] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(E)) || (M = a.floating[w] || o.floating[m]);
  const I = x / 2 - k / 2, R = M / 2 - g[m] / 2 - 1, A = oo(u[v], R), F = oo(u[_], R), P = A, D = M - g[m] - F, T = M / 2 - g[m] / 2 + I, H = ro(P, T, D), W = tn(i) != null && T != H && o.reference[m] / 2 - (T < P ? A : F) - g[m] / 2 < 0 ? T < P ? P - T : D - T : 0;
  return { [p]: c[p] - W, data: { [p]: H, centerOffset: T - H + W } };
} }), ch = ["top", "right", "bottom", "left"];
ch.reduce((n, e) => n.concat(e, e + "-start", e + "-end"), []);
const hh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function wn(n) {
  return n.replace(/left|right|bottom|top/g, (e) => hh[e]);
}
function uh(n, e, t) {
  t === void 0 && (t = !1);
  const s = tn(n), i = en(n), o = Uo(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = wn(r)), { main: r, cross: wn(r) };
}
const dh = { start: "end", end: "start" };
function Yi(n) {
  return n.replace(/start|end/g, (e) => dh[e]);
}
const Oi = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(e) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = !0, ...y } = sn(n, e), v = fe(s), _ = fe(r) === r, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = c || (_ || !g ? [wn(r)] : function(P) {
      const D = wn(P);
      return [Yi(P), D, Yi(D)];
    }(r));
    c || m === "none" || x.push(...function(P, D, T, H) {
      const W = tn(P);
      let V = function(at, Ke, Vl) {
        const ir = ["left", "right"], or = ["right", "left"], Ul = ["top", "bottom"], ql = ["bottom", "top"];
        switch (at) {
          case "top":
          case "bottom":
            return Vl ? Ke ? or : ir : Ke ? ir : or;
          case "left":
          case "right":
            return Ke ? Ul : ql;
          default:
            return [];
        }
      }(fe(P), T === "start", H);
      return W && (V = V.map((at) => at + "-" + W), D && (V = V.concat(V.map(Yi)))), V;
    }(r, g, m, w));
    const k = [r, ...x], E = await Ja(e, y), M = [];
    let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && M.push(E[v]), u) {
      const { main: P, cross: D } = uh(s, o, w);
      M.push(E[P], E[D]);
    }
    if (I = [...I, { placement: s, overflows: M }], !M.every((P) => P <= 0)) {
      var R, A;
      const P = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, D = k[P];
      if (D)
        return { data: { index: P, overflows: I }, reset: { placement: D } };
      let T = (A = I.filter((H) => H.overflows[0] <= 0).sort((H, W) => H.overflows[1] - W.overflows[1])[0]) == null ? void 0 : A.placement;
      if (!T)
        switch (p) {
          case "bestFit": {
            var F;
            const H = (F = I.map((W) => [W.placement, W.overflows.filter((V) => V > 0).reduce((V, at) => V + at, 0)]).sort((W, V) => W[1] - V[1])[0]) == null ? void 0 : F[0];
            H && (T = H);
            break;
          }
          case "initialPlacement":
            T = r;
        }
      if (s !== T)
        return { reset: { placement: T } };
    }
    return {};
  } };
}, Fi = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(e) {
    const { x: t, y: s } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = fe(a), p = tn(a), m = en(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, y = u && m ? -1 : 1, v = sn(r, o);
      let { mainAxis: _, crossAxis: w, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof x == "number" && (w = p === "end" ? -1 * x : x), m ? { x: w * y, y: _ * g } : { x: _ * g, y: w * y };
    }(e, n);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function fh(n) {
  return n === "x" ? "y" : "x";
}
const es = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(e) {
    const { x: t, y: s, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: _, y: w } = v;
      return { x: _, y: w };
    } }, ...l } = sn(n, e), h = { x: t, y: s }, u = await Ja(e, l), c = en(fe(i)), p = fh(c);
    let m = h[c], g = h[p];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      m = ro(m + u[c === "y" ? "top" : "left"], m, m - u[v]);
    }
    if (r) {
      const v = p === "y" ? "bottom" : "right";
      g = ro(g + u[p === "y" ? "top" : "left"], g, g - u[v]);
    }
    const y = a.fn({ ...e, [c]: m, [p]: g });
    return { ...y, data: { x: y.x - t, y: y.y - s } };
  } };
};
function it(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function kt(n) {
  return it(n).getComputedStyle(n);
}
function Qa(n) {
  return n instanceof it(n).Node;
}
function Xt(n) {
  return Qa(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ct(n) {
  return n instanceof HTMLElement || n instanceof it(n).HTMLElement;
}
function xr(n) {
  return typeof ShadowRoot < "u" && (n instanceof it(n).ShadowRoot || n instanceof ShadowRoot);
}
function ss(n) {
  const { overflow: e, overflowX: t, overflowY: s, display: i } = kt(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + t) && !["inline", "contents"].includes(i);
}
function ph(n) {
  return ["table", "td", "th"].includes(Xt(n));
}
function lo(n) {
  const e = qo(), t = kt(n);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (t.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (t.contain || "").includes(s));
}
function qo() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Bi(n) {
  return ["html", "body", "#document"].includes(Xt(n));
}
const co = Math.min, ke = Math.max, Cn = Math.round, on = Math.floor, Zt = (n) => ({ x: n, y: n });
function tl(n) {
  const e = kt(n);
  let t = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = ct(n), o = i ? n.offsetWidth : t, r = i ? n.offsetHeight : s, a = Cn(t) !== o || Cn(s) !== r;
  return a && (t = o, s = r), { width: t, height: s, $: a };
}
function It(n) {
  return n instanceof Element || n instanceof it(n).Element;
}
function Yo(n) {
  return It(n) ? n : n.contextElement;
}
function Ee(n) {
  const e = Yo(n);
  if (!ct(e))
    return Zt(1);
  const t = e.getBoundingClientRect(), { width: s, height: i, $: o } = tl(e);
  let r = (o ? Cn(t.width) : t.width) / s, a = (o ? Cn(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const mh = Zt(0);
function el(n) {
  const e = it(n);
  return qo() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : mh;
}
function be(n, e, t, s) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(), o = Yo(n);
  let r = Zt(1);
  e && (s ? It(s) && (r = Ee(s)) : r = Ee(n));
  const a = function(p, m, g) {
    return m === void 0 && (m = !1), !(!g || m && g !== it(p)) && m;
  }(o, t, s) ? el(o) : Zt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = it(o), m = s && It(s) ? it(s) : s;
    let g = p.frameElement;
    for (; g && s && m !== p; ) {
      const y = Ee(g), v = g.getBoundingClientRect(), _ = getComputedStyle(g), w = v.left + (g.clientLeft + parseFloat(_.paddingLeft)) * y.x, x = v.top + (g.clientTop + parseFloat(_.paddingTop)) * y.y;
      l *= y.x, h *= y.y, u *= y.x, c *= y.y, l += w, h += x, g = it(g).frameElement;
    }
  }
  return vn({ width: u, height: c, x: l, y: h });
}
function Wi(n) {
  return It(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function Rt(n) {
  var e;
  return (e = (Qa(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function sl(n) {
  return be(Rt(n)).left + Wi(n).scrollLeft;
}
function je(n) {
  if (Xt(n) === "html")
    return n;
  const e = n.assignedSlot || n.parentNode || xr(n) && n.host || Rt(n);
  return xr(e) ? e.host : e;
}
function nl(n) {
  const e = je(n);
  return Bi(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : ct(e) && ss(e) ? e : nl(e);
}
function $n(n, e) {
  var t;
  e === void 0 && (e = []);
  const s = nl(n), i = s === ((t = n.ownerDocument) == null ? void 0 : t.body), o = it(s);
  return i ? e.concat(o, o.visualViewport || [], ss(s) ? s : []) : e.concat(s, $n(s));
}
function kr(n, e, t) {
  let s;
  if (e === "viewport")
    s = function(i, o) {
      const r = it(i), a = Rt(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, p = 0;
      if (l) {
        h = l.width, u = l.height;
        const m = qo();
        (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: p };
    }(n, t);
  else if (e === "document")
    s = function(i) {
      const o = Rt(i), r = Wi(i), a = i.ownerDocument.body, l = ke(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = ke(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + sl(i);
      const c = -r.scrollTop;
      return kt(a).direction === "rtl" && (u += ke(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(Rt(n));
  else if (It(e))
    s = function(i, o) {
      const r = be(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = ct(i) ? Ee(i) : Zt(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = el(n);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return vn(s);
}
function il(n, e) {
  const t = je(n);
  return !(t === e || !It(t) || Bi(t)) && (kt(t).position === "fixed" || il(t, e));
}
function gh(n, e, t) {
  const s = ct(e), i = Rt(e), o = t === "fixed", r = be(n, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Zt(0);
  if (s || !s && !o)
    if ((Xt(e) !== "body" || ss(i)) && (a = Wi(e)), ct(e)) {
      const h = be(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = sl(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function Er(n, e) {
  return ct(n) && kt(n).position !== "fixed" ? e ? e(n) : n.offsetParent : null;
}
function Sr(n, e) {
  const t = it(n);
  if (!ct(n))
    return t;
  let s = Er(n, e);
  for (; s && ph(s) && kt(s).position === "static"; )
    s = Er(s, e);
  return s && (Xt(s) === "html" || Xt(s) === "body" && kt(s).position === "static" && !lo(s)) ? t : s || function(i) {
    let o = je(i);
    for (; ct(o) && !Bi(o); ) {
      if (lo(o))
        return o;
      o = je(o);
    }
    return null;
  }(n) || t;
}
const yh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: e, offsetParent: t, strategy: s } = n;
  const i = ct(t), o = Rt(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Zt(1);
  const l = Zt(0);
  if ((i || !i && s !== "fixed") && ((Xt(t) !== "body" || ss(o)) && (r = Wi(t)), ct(t))) {
    const h = be(t);
    a = Ee(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: Rt, getClippingRect: function(n) {
  let { element: e, boundary: t, rootBoundary: s, strategy: i } = n;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = $n(l).filter((y) => It(y) && Xt(y) !== "body"), p = null;
    const m = kt(l).position === "fixed";
    let g = m ? je(l) : l;
    for (; It(g) && !Bi(g); ) {
      const y = kt(g), v = lo(g);
      v || y.position !== "fixed" || (p = null), (m ? !v && !p : !v && y.position === "static" && p && ["absolute", "fixed"].includes(p.position) || ss(g) && !v && il(l, g)) ? c = c.filter((_) => _ !== g) : p = y, g = je(g);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), s], r = o[0], a = o.reduce((l, h) => {
    const u = kr(e, h, i);
    return l.top = ke(u.top, l.top), l.right = co(u.right, l.right), l.bottom = co(u.bottom, l.bottom), l.left = ke(u.left, l.left), l;
  }, kr(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: Sr, getElementRects: async function(n) {
  let { reference: e, floating: t, strategy: s } = n;
  const i = this.getOffsetParent || Sr, o = this.getDimensions;
  return { reference: gh(e, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(n) {
  return Array.from(n.getClientRects());
}, getDimensions: function(n) {
  return tl(n);
}, getScale: Ee, isElement: It, isRTL: function(n) {
  return getComputedStyle(n).direction === "rtl";
} };
function Ko(n, e, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Yo(n), u = i || o ? [...h ? $n(h) : [], ...$n(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, _) {
    let w, x = null;
    const k = Rt(v);
    function E() {
      clearTimeout(w), x && x.disconnect(), x = null;
    }
    return function M(I, R) {
      I === void 0 && (I = !1), R === void 0 && (R = 1), E();
      const { left: A, top: F, width: P, height: D } = v.getBoundingClientRect();
      if (I || _(), !P || !D)
        return;
      const T = { rootMargin: -on(F) + "px " + -on(k.clientWidth - (A + P)) + "px " + -on(k.clientHeight - (F + D)) + "px " + -on(A) + "px", threshold: ke(0, co(1, R)) || 1 };
      let H = !0;
      function W(V) {
        const at = V[0].intersectionRatio;
        if (at !== R) {
          if (!H)
            return M();
          at ? M(!1, at) : w = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        x = new IntersectionObserver(W, { ...T, root: k.ownerDocument });
      } catch {
        x = new IntersectionObserver(W, T);
      }
      x.observe(v);
    }(!0), E;
  }(h, t) : null;
  let p, m = -1, g = null;
  r && (g = new ResizeObserver((v) => {
    let [_] = v;
    _ && _.target === h && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      g && g.observe(e);
    })), t();
  }), h && !l && g.observe(h), g.observe(e));
  let y = l ? be(n) : null;
  return l && function v() {
    const _ = be(n);
    !y || _.x === y.x && _.y === y.y && _.width === y.width && _.height === y.height || t(), y = _, p = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const zi = (n, e, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: yh, ...t }, o = { ...i.platform, _c: s };
  return ah(n, e, { ...i, platform: o });
}, bh = '[data-toggle="popover"]', Tr = "show", Nr = "in", Ce = class Ce extends rt {
  constructor() {
    super(...arguments), this._getClickBounding = () => {
      const e = this._triggerEvent;
      return {
        x: e.clientX,
        y: e.clientY,
        left: e.clientX,
        top: e.clientY,
        width: 0,
        height: 0,
        bottom: e.clientY,
        right: e.clientX
      };
    }, this._onClickDoc = (e) => {
      const t = d(e.target);
      (!t.closest(`#${this._id}`).length && this._targetElement !== t.closest(".popover")[0] || t.closest('[data-dismiss="popover"]').length) && this.hide();
    };
  }
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { trigger: e, id: t, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = t || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const r = d(i), { namespace: a } = this;
      e === "hover" ? r.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : e && r.on(`${e}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
      });
    }
    const { show: o } = this.options;
    o && this.show({ delay: typeof o == "number" ? o : !1 });
  }
  getTriggerElement() {
    if (!this._triggerElement) {
      let { element: e = this.element } = this.options;
      e === document.body && (e = {
        getBoundingClientRect: this._getClickBounding
      }), this._triggerElement = e, this._virtual = !(e instanceof HTMLElement);
    }
    return this._triggerElement;
  }
  initTarget() {
    let e = this.options.target;
    return this._dynamic = !e, e ? (typeof e == "function" && (e = e()), d(e)[0]) : this._createTarget();
  }
  show(e) {
    const { delay: t, event: s } = e || {};
    if (s && (this._triggerEvent = s), t)
      return this._resetTimer(() => {
        this.show();
      }, t === !0 ? this.options.delay : t);
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
    const o = d(i), { animation: r, mask: a, onShow: l, onShown: h, trigger: u } = this.options;
    if (o.addClass(Tr), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), u === "hover") {
      this._clearDelayHide();
      const { namespace: c } = this;
      o.on(`mouseenter${c}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${c}`, () => {
        this.delayHide();
      });
    }
    this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(Nr), this._resetTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && d(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: t, onHide: s, onHidden: i, trigger: o } = this.options, r = d(this._targetElement);
    this._shown = !1, s == null || s.call(this), this.emit("hide"), r.removeClass(Nr), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), d(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(Tr), e && this._resetTimer(() => {
        this.destroy();
      }, typeof e == "number" ? e : 0), this._destoryTarget();
    }, t ? 200 : 0);
  }
  toggle(e) {
    this._shown ? this.hide() : this.show(e);
  }
  destroy() {
    if (super.destroy(), d(document).off(this.namespace), !this._virtual) {
      const { namespace: e } = this;
      d(this._triggerElement).off(e);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const e = this._triggerElement, t = this._targetElement, s = this._layoutWatcher;
    if (!t || !e || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = Ko(e, t, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && d(t).css({ width: d(e).width() }), zi(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: u, strategy: c }) => {
        const p = d(t).css({
          position: c,
          left: a,
          top: l
        }), m = u.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], y = h.arrow;
        y && p.find(".arrow").css({
          left: y.x,
          top: y.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), o === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || d(this._triggerElement).attr("data-popover-placement", m);
      });
    }));
  }
  render(e) {
    super.render(e);
    const t = this._targetElement;
    if (!t)
      return;
    const s = this._getRenderOptions(), i = d(t);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let o = this._panel;
      o && o.element !== t && (o.destroy(), o = void 0), o ? o.render(s) : (o = new io(t, s), o.on("inited", () => this.layout())), this._panel = o;
    } else
      s.arrow && (i.find(".arrow").length || i.append(d('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
  }
  delayHide(e = 100) {
    this._hideTimer = window.setTimeout(() => {
      this._hideTimer = 0, this.hide();
    }, e);
  }
  _clearDelayHide() {
    this._hideTimer && (clearTimeout(this._hideTimer), this._hideTimer = 0);
  }
  _getLayoutOptions() {
    const e = this._triggerElement, t = this._targetElement, { placement: s, flip: i, shift: o, offset: r, arrow: a, strategy: l } = this.options, h = a ? t.querySelector(".arrow") : null, u = h ? typeof a == "number" ? a : 5 : 0;
    return [e, t, {
      placement: s,
      strategy: l,
      middleware: [
        i ? Oi() : null,
        o ? es(typeof o == "object" ? o : void 0) : null,
        r || u ? Fi((r || 0) + u) : null,
        a ? ao({ element: h }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: e = "popover" } = this.options, {
      popup: t,
      title: s,
      content: i,
      headingClass: o = `${e}-heading`,
      titleClass: r = `${e}-title`,
      contentClass: a = `${e}-content`,
      style: l,
      className: h = e,
      closeBtn: u,
      arrow: c
    } = this.options;
    return {
      popup: t,
      title: s,
      titleClass: r,
      headingClass: o,
      contentClass: a,
      content: i,
      style: { zIndex: this.constructor.Z_INDEX++, ...l },
      className: h,
      closeBtn: u,
      arrow: c ? `arrow ${e}-arrow` : !1,
      arrowStyle: { "--arrow-size": `${typeof c == "number" ? c : 5}px` },
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var e, t, s;
    (e = this._layoutWatcher) == null || e.call(this), this._layoutWatcher = void 0, this._dynamic && ((t = this._panel) == null || t.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(e, t = 0) {
    this._timer && clearTimeout(this._timer), e && (this._timer = window.setTimeout(() => {
      this._timer = 0, e();
    }, t));
  }
  _createTarget() {
    const { container: e = "body" } = this.options, t = d(e);
    let s = t.find(`#${this._id}`);
    return s.length || (s = d("<div />").attr({ id: this._id, class: "popover" }).appendTo(t)), s[0];
  }
  static show(e) {
    const { element: t, event: s, ...i } = e, o = t || (s == null ? void 0 : s.currentTarget);
    return this.ensure(o instanceof HTMLElement ? o : document.body, { element: o, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
  }
};
Ce.NAME = "Popover", Ce.Z_INDEX = 1700, Ce.MULTI_INSTANCE = !0, Ce.DEFAULT = {
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
let $t = Ce;
d(document).on(`click${$t.NAMESPACE} mouseenter${$t.NAMESPACE}`, bh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data($t.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    $t.ensure(e, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const _h = '[data-toggle="dropdown"]', Ln = class Ln extends $t {
  constructor() {
    super(...arguments), this._onClickDoc = (e) => {
      d(e.target).closest(".not-hide-menu").length || this.hide();
    };
  }
  _getMenuOptions() {
    let { items: e = [] } = this.options;
    return typeof e == "function" && (e = e(this)), {
      items: e,
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
      content: X(ho, this._getMenuOptions())
    };
  }
};
Ln.NAME = "Dropdown", Ln.DEFAULT = {
  ...$t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
let xt = Ln;
d(document).on(`click${xt.NAMESPACE} mouseenter${xt.NAMESPACE}`, _h, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(xt.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    const i = {
      ...e.data(),
      show: !0,
      triggerEvent: n
    };
    if (!i.target && e.is("a")) {
      const o = e.attr("href");
      o && "#0".includes(o[0]) && (i.target = o);
    }
    !i.target && !i.items && !i.menu && (i.target = e.next(".dropdown-menu")), xt.ensure(e, i), n.preventDefault();
  }
});
const Zo = class Zo extends tt {
  constructor() {
    super(...arguments), this._ref = q();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: e, items: t } = this.props, s = d(this.triggerElement), i = xt.get(this.triggerElement), o = {
      items: t,
      ...e
    };
    i ? i.setOptions(o) : s.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var e;
    (e = xt.get(this.triggerElement)) == null || e.destroy();
  }
  _getProps(e) {
    const { trigger: t, placement: s } = e;
    return {
      ...super._getProps(e),
      "data-toggle": "dropdown",
      "data-trigger": t,
      "data-placement": s,
      ref: this._ref
    };
  }
};
Zo.defaultProps = {
  caret: !0
};
let xn = Zo;
const Jo = class Jo extends ye {
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
    const e = this.ref.current, t = e == null ? void 0 : e.parentElement;
    !e || !t || zi(t, e, {
      placement: this.props.placement,
      middleware: [Oi(), es(), Fi(1)]
    }).then(({ x: s, y: i }) => {
      d(e).css({
        left: s,
        top: i
      });
    });
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e);
    return {
      ...t,
      className: N("show", t.className),
      popup: !0
    };
  }
  afterRender(e) {
    super.afterRender(e), this.props.controlledMenu && (this.layout(), this._layoutTimer = window.setTimeout(this.layout.bind(this), 100));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
};
Jo.defaultProps = {
  ...ye.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
let ho = Jo;
function ol({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(xn, { type: t, ...s });
}
let rl = class extends O {
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
  handleItemClick(e, t, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: e, index: t, event: i });
  }
  beforeRender() {
    var s;
    const e = { ...this.props }, t = (s = e.beforeRender) == null ? void 0 : s.call(this, e);
    return t && Object.assign(e, t), typeof e.items == "function" && (e.items = e.items.call(this)), e;
  }
  onRenderItem(e, t) {
    const { key: s = t, ...i } = e, o = e.dropdown || e.items ? xn : tt;
    return /* @__PURE__ */ f(o, { ...i }, s);
  }
  renderItem(e, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: s, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), i) {
      const l = i.call(this, a, X);
      if (Z(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const e = this.beforeRender(), {
      className: t,
      items: s,
      size: i,
      type: o,
      btnProps: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: u,
      afterRender: c,
      beforeDestroy: p,
      ...m
    } = e;
    return /* @__PURE__ */ f(
      "div",
      {
        className: N("btn-group", i ? `size-${i}` : "", t),
        ...m,
        children: [
          s && s.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function vh({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(rl, { type: t, ...s });
}
var Gt;
let Jt = (Gt = class extends Hi {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = N(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {};
    r.type && (r.btnType = r.type, delete r.type);
    const a = {
      ...t,
      ...r,
      ...s,
      className: N(`${this.name}-${i}`, t.className, r.className, s.className),
      style: Object.assign({}, t.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ f(e, { ...a });
  }
}, Gt.ItemComponents = {
  item: oh,
  dropdown: ol,
  "btn-group": vh
}, Gt.ROOT_TAG = "nav", Gt.NAME = "toolbar", Gt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, Gt);
function wh({
  className: n,
  style: e,
  actions: t,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  iconClass: u,
  ...c
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ f(tt, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Z(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(tt, { ...a, onClick: l }));
  const m = Z(t) ? t : t ? /* @__PURE__ */ f(Jt, { ...t }) : null;
  return /* @__PURE__ */ f("div", { className: N("alert", n), style: e, ...c, children: [
    /* @__PURE__ */ f(J, { icon: h, className: N("alert-icon", u) }),
    Z(i) ? i : /* @__PURE__ */ f("div", { className: N("alert-content", o), children: [
      Z(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? m : null
    ] }),
    s ? null : m,
    p,
    r
  ] });
}
function Ch(n) {
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
function $h({
  margin: n,
  type: e,
  placement: t,
  animation: s,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    wh,
    {
      className: N("messager", o, e, s === !0 ? Ch(t) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Wt, we;
const Pn = class Pn extends z {
  constructor() {
    super(...arguments);
    C(this, Wt);
    this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
      t && this.show();
      const { margin: s } = this.options;
      s && this.$element.css("margin", `${s}px`);
    };
  }
  get isShown() {
    return this._show;
  }
  afterInit() {
    this.on("click", (t) => {
      d(t.target).closest('.alert-close,[data-dismiss="messager"]').length && (t.preventDefault(), t.stopPropagation(), this.hide());
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
    this.render(), this.emit("show"), L(this, Wt, we).call(this, () => {
      this._show = !0, this.render(), L(this, Wt, we).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && L(this, Wt, we).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && L(this, Wt, we).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), L(this, Wt, we).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Wt = new WeakSet(), we = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, Pn.NAME = "MessagerItem", Pn.Component = $h;
let uo = Pn;
var ie, ft, Hn, al, On, ll;
const $e = class $e extends rt {
  constructor() {
    super(...arguments);
    C(this, Hn);
    C(this, On);
    C(this, ie, void 0);
    C(this, ft, void 0);
  }
  get isShown() {
    var t;
    return !!((t = b(this, ft)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), L(this, Hn, al).call(this).show();
  }
  hide() {
    var t;
    (t = b(this, ft)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = $e.ensure(s || "body", { key: `messager_${d.guid++}`, ...i });
    return o.hide(), o.show(), o;
  }
};
ie = new WeakMap(), ft = new WeakMap(), Hn = new WeakSet(), al = function() {
  if (b(this, ft))
    b(this, ft).setOptions(this.options);
  else {
    const t = L(this, On, ll).call(this), s = new uo(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t == null || t.remove(), $(this, ie, void 0), $(this, ft, void 0);
    }), $(this, ft, s);
  }
  return b(this, ft);
}, On = new WeakSet(), ll = function() {
  if (b(this, ie))
    return b(this, ie);
  const { placement: t = "top" } = this.options;
  let s = this.$element.find(`.messagers-${t}`);
  s.length || (s = d(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = s.find(`#messager-${this.gid}`);
  return i.length || (i = d(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(s), $(this, ie, i[0])), i[0];
}, $e.NAME = "messager", $e.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
}, $e.MULTI_INSTANCE = !0;
let Mr = $e;
var ls;
let xh = (ls = class extends O {
  render(e) {
    const { percent: t = 50, size: s = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = e, c = s / 2;
    let { circleWidth: p = 0.2 } = e;
    p < 1 && (p = s * p);
    const m = (s - p) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ f("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ f("text", { x: h ?? c, y: u ?? c + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, ls.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, ls);
const Fn = class Fn extends z {
};
Fn.NAME = "ProgressCircle", Fn.Component = xh;
let Dr = Fn;
const Ge = '[droppable="true"]', Bn = class Bn extends rt {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (e) => {
      const { selector: t, handle: s, beforeDrag: i } = this.options, o = d(e.target), r = o.closest(t), a = r[0];
      if (!a || s && !o.closest(s).length || i && i.call(this, e, a) === !1)
        return;
      r.attr("draggable", "true");
      const { draggingClass: l } = this.options;
      l && (this.$element.find(l).removeClass(l), r.addClass(l)), this._setState({ dragging: a });
    }, this._handleDragStart = (e) => {
      const { dragElement: t } = this;
      if (!t) {
        e.preventDefault();
        return;
      }
      const { options: s } = this, { onDragStart: i } = s;
      if (i && i.call(this, e, t) === !1) {
        this._clean();
        return;
      }
      const { $element: o } = this, { target: r, selector: a, droppableClass: l, hasDraggingClass: h } = s, u = typeof r == "function" ? d(r.call(this, t)) : o.find(r || a || Ge);
      l && (o.find(l).removeClass(l), u.addClass(l)), h && o.addClass(h), o.find(Ge).removeAttr("droppable"), u.attr("droppable", "true"), this._$targets = u;
    }, this._handleDrag = (e) => {
      var s;
      const { dragElement: t } = this;
      t && (this._setDragEffect(e), (s = this.options.onDrag) == null || s.call(this, e, t));
    }, this._handleDragEnd = (e) => {
      var s;
      const { dragElement: t } = this;
      this._clean(), t && ((s = this.options.onDragEnd) == null || s.call(this, e, t));
    }, this._handleDragEnter = (e) => {
      this._handleDragOver(e);
    }, this._handleDragOver = (e) => {
      var o, r;
      const { dragElement: t } = this, s = d(e.target).closest(Ge)[0], i = this.state.dropping;
      if (!(!t || !s)) {
        if (e.preventDefault(), this._setDragEffect(e), i !== s) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(e, i), d(s).addClass(a)), this._setState({ dropping: s }), (o = this.options.onDragEnter) == null || o.call(this, e, t, s);
        }
        (r = this.options.onDragOver) == null || r.call(this, e, t, s);
      }
    }, this._handleDragLeave = (e) => {
      const { dragElement: t } = this, s = d(e.target).filter(Ge)[0];
      !t || !s || (e.preventDefault(), this._leaveDropElement(e, s), this._setState({ dropping: null }));
    }, this._handleDrop = (e) => {
      var s;
      const t = d(e.target).closest(Ge)[0];
      t && (e.preventDefault(), (s = this.options.onDrop) == null || s.call(this, e, this.dragElement, t));
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
    this.on("mousedown", this._handleMouseDown), this.on("dragstart", this._handleDragStart), this.on("dragend", this._handleDragEnd), this.options.onDrag && this.on("drag", this._handleDrag), this.on("dragover", this._handleDragOver), this.on("dragenter", this._handleDragEnter), this.on("dragleave", this._handleDragLeave), this.on("drop", this._handleDrop), d(document).on(`mouseup${this.namespace}`, this._clean.bind(this));
  }
  destroy() {
    this._clean(), d(document).off(this.namespace), super.destroy();
  }
  _setState(e) {
    var o;
    const t = this._state, { dragging: s = t.dragging, dropping: i = t.dropping } = e;
    s === t.dragging && i === t.dropping || (this._state = { dragging: s, dropping: i }, (o = this.options.onChange) == null || o.call(this, this._state, t));
  }
  _setDragEffect(e) {
    const { dropEffect: t } = this.options;
    t && (e.dataTransfer.dropEffect = t);
  }
  _leaveDropElement(e, t) {
    var i;
    const { droppingClass: s } = this.options;
    s && d(t).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, e, this.dragElement, t);
  }
  _clean() {
    const { draggingClass: e, droppableClass: t, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: o } = this;
    if (o) {
      const a = d(o);
      e && a.removeClass(e);
    }
    this._setState({ dropping: null, dragging: null });
    const r = this._$targets;
    r && (t && r.removeClass(t), s && r.removeClass(s), this._$targets = void 0);
  }
};
Bn.NAME = "Draggable", Bn.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
let Ir = Bn;
const kh = '[moveable="true"]', Wn = class Wn extends rt {
  constructor() {
    super(...arguments), this._handleMouseDown = (e) => {
      const { options: t } = this, { selector: s, handle: i, onMoveStart: o } = t, r = d(e.target), a = r.closest(s), l = a[0];
      if (!l || i && !r.closest(i).length || o && o.call(this, e, l) === !1)
        return;
      a.attr("moveable", "true");
      const { movingClass: h, hasMovingClass: u } = t;
      h && a.addClass(h), u && this.$element.addClass(u), this._setState(e, l), d(document).off("mousemove mouseup").on(`mousemove${this.namespace}`, this._handleMouseMove.bind(this)).on(`mouseup${this.namespace}`, this._handleMouseUp.bind(this));
    }, this._handleMouseMove = (e) => {
      this._state && (this._raf && cancelAnimationFrame(this._raf), this._raf = requestAnimationFrame(() => {
        var t;
        this._raf = 0, this._setState(e), (t = this.options.onMove) == null || t.call(this, e, this._state);
      }));
    }, this._handleMouseUp = (e) => {
      var t, s;
      this._state && (this._raf && (cancelAnimationFrame(this._raf), this._raf = 0), this._setState(e), (t = this.options.onMove) == null || t.call(this, e, this._state), (s = this.options.onMoveEnd) == null || s.call(this, e, this._state), this._clean());
    };
  }
  get state() {
    return this._state;
  }
  get moveElement() {
    var e;
    return (e = this._state) == null ? void 0 : e.target;
  }
  async afterInit() {
    this.on("mousedown", this._handleMouseDown);
  }
  destroy() {
    this._clean(), d(document).off(this.namespace), super.destroy();
  }
  _setState(e, t) {
    var a;
    e.preventDefault();
    let s = {
      x: e.pageX,
      y: e.pageY
    };
    const i = this._state;
    if (t) {
      const l = d(t);
      if (this.options.move === !0) {
        const u = l.css("position");
        s.strategy = u === "fixed" || u === "absolute" ? "position" : "transform";
      } else
        s.strategy = "none";
      const h = l.position();
      s = d.extend(s, {
        target: t,
        startX: s.x,
        startY: s.y,
        deltaX: 0,
        deltaY: 0,
        startLeft: h.left,
        startTop: h.top,
        left: h.left,
        top: h.top
      });
    } else if (i) {
      const l = s.x - i.startX, h = s.y - i.startY;
      s = d.extend({}, i, s, {
        deltaX: l,
        deltaY: h,
        left: i.startLeft + l,
        top: i.startTop + h
      });
    }
    this._state = s;
    const { strategy: o, target: r } = s;
    o === "position" ? d(r).css({ left: s.left, top: s.top }) : o === "transform" && d(r).css("transform", `translate(${s.deltaX}px, ${s.deltaY}px)`), (a = this.options.onChange) == null || a.call(this, s, i, e);
  }
  _clean() {
    d(document).off("mousemove mouseup");
    const { hasMovingClass: e, movingClass: t } = this.options;
    e && this.$element.removeClass(e);
    const { moveElement: s } = this;
    if (s) {
      const i = d(s);
      t && i.removeClass(t);
    }
    this._state = void 0;
  }
};
Wn.NAME = "Moveable", Wn.DEFAULT = {
  selector: kh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
let Rr = Wn;
var St;
class Eh {
  constructor(e = "") {
    C(this, St, void 0);
    typeof e == "object" ? $(this, St, e) : $(this, St, document.appendChild(document.createComment(e)));
  }
  on(e, t, s) {
    b(this, St).addEventListener(e, t, s);
  }
  once(e, t, s) {
    b(this, St).addEventListener(e, t, { once: !0, ...s });
  }
  off(e, t, s) {
    b(this, St).removeEventListener(e, t, s);
  }
  emit(e) {
    return b(this, St).dispatchEvent(e), e;
  }
}
St = new WeakMap();
const Ar = /* @__PURE__ */ new Set([
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
class cl extends Eh {
  on(e, t, s) {
    super.on(e, t, s);
  }
  off(e, t, s) {
    super.off(e, t, s);
  }
  once(e, t, s) {
    super.once(e, t, s);
  }
  emit(e, t) {
    return typeof e == "string" && (Ar.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(cl.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Ar.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
const Qe = class Qe extends rt {
  async afterInit() {
    const e = await Qe.loadModule();
    this.module = new e(this.element, this.options);
  }
  option(e, t) {
    if (t === void 0)
      return this.module.option(e);
    this.module.option(e, t);
  }
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param element an HTMLElement or selector string.
   * @param selector default: `options.draggable`
   */
  closest(e, t) {
    return this.module.closest(e, t);
  }
  /**
   * Sorts the elements according to the array.
   * @param order an array of strings to sort.
   * @param useAnimation default: false.
   */
  sort(e, t) {
    this.module.sort(e, t);
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
    return this.Module || (this.Module = await d.getLib("sortablejs")), this.Module;
  }
};
Qe.NAME = "Sortable", Qe.DEFAULT = {
  animation: 150
};
let Lr = Qe;
d.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let hl = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Ki = "```ZUI_STR\n";
var cs, oe, Te, pt, Ne, Me, ln;
const Qo = class Qo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    C(this, Me);
    C(this, cs, void 0);
    C(this, oe, void 0);
    C(this, Te, void 0);
    C(this, pt, void 0);
    C(this, Ne, void 0);
    $(this, cs, t), $(this, Te, e ?? hl()), $(this, oe, `ZUI_STORE:${b(this, Te)}`), $(this, pt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, cs);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, Ne) || $(this, Ne, new Qo(b(this, Te), "session")), b(this, Ne));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const s = b(this, pt).getItem(L(this, Me, ln).call(this, e));
    if (typeof s == "string") {
      if (s.startsWith(Ki))
        return s.substring(Ki.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? t;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(e, t) {
    if (t == null)
      return this.remove(e);
    b(this, pt).setItem(L(this, Me, ln).call(this, e), typeof t == "string" ? `${Ki}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    b(this, pt).removeItem(L(this, Me, ln).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < b(this, pt).length; t++) {
      const s = b(this, pt).key(t);
      if (s != null && s.startsWith(b(this, oe))) {
        const i = b(this, pt).getItem(s);
        typeof i == "string" && e(s.substring(b(this, oe).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const e = {};
    return this.each((t, s) => {
      e[t] = s;
    }), e;
  }
};
cs = new WeakMap(), oe = new WeakMap(), Te = new WeakMap(), pt = new WeakMap(), Ne = new WeakMap(), Me = new WeakSet(), ln = function(e) {
  return `${b(this, oe)}:${e}`;
};
let kn = Qo;
const Je = new kn("DEFAULT");
function Sh(n, e = "local") {
  return new kn(n, e);
}
Object.assign(Je, { create: Sh });
function Th(n) {
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
function Nh(n) {
  const [e, t, s] = typeof n == "string" ? Th(n) : n;
  return e * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Pr(n, e) {
  return Nh(n) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Hr(n, e = 255) {
  return Math.min(Math.max(n, 0), e);
}
function Mh(n, e, t) {
  n = n % 360 / 360, e = Hr(e), t = Hr(t);
  const s = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(n + 1 / 3) * 255,
    o(n) * 255,
    o(n - 1 / 3) * 255
  ];
}
function Dh(n) {
  let e = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let t = 0; t < n.length; ++t)
      e += (t + 1) * n.charCodeAt(t);
  return e;
}
function Ih(n, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= e ? n : n.substring(n.length - e) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= e ? n : n.substring(0, e);
}
let ul = class extends O {
  render() {
    const {
      className: e,
      style: t,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
      foreColor: a,
      text: l,
      code: h,
      maxTextLength: u = 2,
      src: c,
      hueDistance: p = 43,
      saturation: m = 0.4,
      lightness: g = 0.6,
      children: y,
      ...v
    } = this.props, _ = ["avatar", e], w = { ...t, background: r, color: a };
    let x = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (_.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? _.push("circle") : o && (typeof o == "number" ? w.borderRadius = `${o}px` : _.push(`rounded-${o}`));
    let k;
    if (c)
      _.push("has-img"), k = /* @__PURE__ */ f("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const E = Ih(l, u);
      if (_.push("has-text", `has-text-${E.length}`), r)
        !a && r && (w.color = Pr(r));
      else {
        const I = h ?? l, R = (typeof I == "number" ? I : Dh(I)) * p % 360;
        if (w.background = `hsl(${R},${m * 100}%,${g * 100}%)`, !a) {
          const A = Mh(R, m, g);
          w.color = Pr(A);
        }
      }
      let M;
      x && x < 14 * E.length && (M = { transform: `scale(${x / (14 * E.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ f("div", { "data-actualSize": x, className: "avatar-text", style: M, children: E });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: N(_),
        style: w,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const zn = class zn extends z {
};
zn.NAME = "Avatar", zn.Component = ul;
let Or = zn;
const jn = class jn extends z {
};
jn.NAME = "BtnGroup", jn.Component = rl;
let Fr = jn;
const fo = Symbol("EVENT_PICK");
class Go extends O {
  constructor(e) {
    super(e), this._handleClick = this._handleClick.bind(this), this._hasInput = !!d(`#${e.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(e) {
    const { togglePop: t, clickType: s, onClick: i } = this.props;
    let o = s === "open" ? !0 : void 0;
    const r = d(e.target), a = i == null ? void 0 : i(e);
    if (!e.defaultPrevented) {
      if (typeof a == "boolean")
        o = a;
      else {
        if (r.closest('[data-dismiss="pick"]').length) {
          t(!1);
          return;
        }
        if (r.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => t(o));
    }
  }
  _getClass(e) {
    const { state: t, className: s } = e, { open: i, disabled: o } = t;
    return N(
      "pick",
      s,
      i && "is-open focus",
      o && "disabled"
    );
  }
  _getProps(e) {
    const { id: t, style: s, attrs: i } = e;
    return {
      id: `pick-${t}`,
      className: this._getClass(e),
      style: s,
      tabIndex: -1,
      onClick: this._handleClick,
      ...i
    };
  }
  _renderTrigger(e) {
    const { children: t, state: s } = e;
    return t ?? s.value;
  }
  _renderValue(e) {
    const { name: t, state: { value: s = "" }, id: i } = e;
    if (t)
      if (this._hasInput)
        d(`#${i}`).val(s);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: t, value: s });
    return null;
  }
  componentDidMount() {
    const { id: e, state: t } = this.props;
    d(`#${e}`).on(`change.zui.pick.${e}`, (s, i) => {
      if (i === fo)
        return;
      const o = s.target.value;
      o !== t.value && (this._skipTriggerChange = o, this.props.changeState({ value: o }));
    });
  }
  componentWillUnmount() {
    const { id: e } = this.props;
    d(`#${e}`).off(`change.zui.pick.${e}`);
  }
  componentDidUpdate(e) {
    const { id: t, state: s, name: i } = this.props;
    i && e.state.value !== s.value && (this._skipTriggerChange !== s.value && d(`#${t}`).trigger("change", fo), this._skipTriggerChange = !1);
  }
  render(e) {
    return X(
      e.tagName || "div",
      this._getProps(e),
      this._renderTrigger(e),
      this._renderValue(e)
    );
  }
}
var re, mt, zt;
class dl extends O {
  constructor(t) {
    super(t);
    C(this, re, void 0);
    C(this, mt, void 0);
    C(this, zt, void 0);
    $(this, re, q()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = d(s.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return d(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = b(this, re)) == null ? void 0 : t.current;
  }
  get container() {
    return b(this, zt);
  }
  _handleClick(t) {
    const { togglePop: s } = this.props, i = d(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), s(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(t) {
    const { className: s, state: i } = t, { open: o } = i;
    return N(
      "pick-pop",
      s,
      o === !0 && "in"
    );
  }
  _getProps(t) {
    const {
      id: s,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = t, h = d.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(t),
      style: h,
      ref: b(this, re),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!b(this, zt)) {
      const s = d(t.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = d("<div>").addClass("pick-container").appendTo(s)), $(this, zt, i[0]);
    }
    return b(this, zt);
  }
  _render(t) {
    return /* @__PURE__ */ f("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: s, props: i } = this, { state: o } = i;
    if (!t || !s || !o.open) {
      b(this, mt) && (b(this, mt).call(this), $(this, mt, void 0));
      return;
    }
    b(this, mt) || $(this, mt, Ko(s, t, () => {
      const { placement: r, width: a } = i;
      zi(s, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Oi() : null, es(), Fi(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        d(t).css({
          left: l,
          top: h,
          width: a === "100%" ? d(s).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && d(t).css({ width: d(t).width() });
    }));
  }
  componentDidMount() {
    var t, s;
    this.layout(), d(document).on("click", this._handleDocClick), (s = (t = this.props).afterRender) == null || s.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, s;
    (s = (t = this.props).afterRender) == null || s.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    d(document).off("click", this._handleDocClick);
    const t = b(this, mt);
    t && (t(), $(this, mt, void 0)), $(this, zt, void 0), $(this, re, void 0), d(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(t) {
    return Qc(this._render(t), this._getContainer(t));
  }
}
re = new WeakMap(), mt = new WeakMap(), zt = new WeakMap();
var hs, nt, ae, pe;
let ht = (pe = class extends O {
  constructor(t) {
    super(t);
    C(this, hs, void 0);
    C(this, nt, void 0);
    C(this, ae, void 0);
    $(this, nt, 0), $(this, ae, q()), this.changeState = (s, i) => new Promise((o) => {
      this.setState(s, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (s, i) => {
      this.props.disabled && (s = !1);
      const { state: o } = this;
      if (typeof s == "boolean" && s === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      b(this, nt) && (clearTimeout(b(this, nt)), $(this, nt, 0));
      let r = await this.changeState((l) => (s = s ?? !l.open, {
        open: s ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await pn(200, (l) => {
        $(this, nt, l);
      }), $(this, nt, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await pn(50, (l) => {
        $(this, nt, l);
      }), $(this, nt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, $(this, hs, t.id ?? `_pick${d.guid++}`);
  }
  get id() {
    return b(this, hs);
  }
  get pop() {
    return b(this, ae).current;
  }
  open(t) {
    return this.toggle(!0, t);
  }
  close(t) {
    return this.toggle(!1, t);
  }
  _getTriggerProps(t, s) {
    return {
      id: this.id,
      state: s,
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
  _getPopProps(t, s) {
    return {
      id: this.id,
      state: s,
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
  _renderTrigger(t, s) {
    return null;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _renderPop(t, s) {
    return null;
  }
  _afterRender(t = !1) {
    var s;
    (s = this.props.afterRender) == null || s.call(this, { firstRender: t });
  }
  _getPop(t) {
    return t.Pop || this.constructor.Pop;
  }
  _getTrigger(t) {
    return t.Trigger || this.constructor.Trigger;
  }
  _handleChange(t, s) {
    const { onChange: i } = this.props;
    i && i(t, s);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, s) {
    const { open: i } = this.state, { open: o } = s;
    if (i === o)
      return;
    const { onPopShow: r, onPopHide: a } = this.props;
    o && r ? r() : !o && a && a();
  }
  componentDidUpdate(t, s) {
    const { open: i, value: o } = this.state, { open: r, value: a } = s;
    if (!!i != !!r) {
      const { onPopShown: l, onPopHidden: h } = this.props;
      i && l ? l() : !i && h && h();
    }
    o !== a && this._handleChange(o, a), this._afterRender();
  }
  componentWillUnmount() {
    var s;
    (s = this.props.beforeDestroy) == null || s.call(this), b(this, nt) && clearTimeout(b(this, nt));
    const t = b(this, ae).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, s) {
    const { open: i } = s, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ f(a, { ref: b(this, ae), ...this._getPopProps(t, s), children: this._renderPop(t, s) }, "pop");
    }
    return /* @__PURE__ */ f(Ye, { children: [
      /* @__PURE__ */ f(o, { ...this._getTriggerProps(t, s), children: this._renderTrigger(t, s) }, "pick"),
      r
    ] });
  }
}, hs = new WeakMap(), nt = new WeakMap(), ae = new WeakMap(), pe.Trigger = Go, pe.Pop = dl, pe.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, pe);
var us;
let Rh = (us = class extends ht {
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
    const { syncBackground: e, syncBorder: t, syncColor: s, syncValue: i } = this.props, o = this.state.value || "";
    if (e && d(e).css("backgroundColor", o), t && d(t).css("borderColor", o), s && d(s).css("color", o), i) {
      const r = d(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(e, t) {
    this.props.disabled || (super._handleChange(e, t), this.syncColor());
  }
  _renderTrigger(e, t) {
    const { icon: s } = e, { value: i } = t;
    return [
      s ? /* @__PURE__ */ f(J, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(e, t) {
    const s = super._getTriggerProps(e, t);
    return s.style = d.extend({
      color: t.value
    }, s.style), s.className = N("color-picker", s.className, { disabled: e.disabled }), s;
  }
  _renderPop(e, t) {
    const { closeBtn: s, heading: i } = e, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ f("div", { className: "color-picker-heading", children: [
      i,
      s ? /* @__PURE__ */ f("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ f("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ f(J, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(J, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, us.defaultProps = {
  ...ht.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, us);
const Vn = class Vn extends z {
};
Vn.NAME = "ColorPicker", Vn.Component = Rh;
let Br = Vn;
const ns = 24 * 60 * 60 * 1e3, j = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), Ah = (n, e, t = "day") => {
  if (typeof e == "string") {
    const s = Number.parseInt(e, 10);
    t = e.replace(s.toString(), ""), e = s;
  }
  return n = new Date(j(n).getTime()), t === "month" ? n.setMonth(n.getMonth() + e) : t === "year" ? n.setFullYear(n.getFullYear() + e) : t === "week" ? n.setDate(n.getDate() + e * 7) : t === "hour" ? n.setHours(n.getHours() + e) : t === "minute" ? n.setMinutes(n.getMinutes() + e) : t === "second" ? n.setSeconds(n.getSeconds() + e) : n.setDate(n.getDate() + e), n;
}, nn = (n, e = /* @__PURE__ */ new Date()) => j(n).toDateString() === j(e).toDateString(), po = (n, e = /* @__PURE__ */ new Date()) => j(n).getFullYear() === j(e).getFullYear(), fl = (n, e = /* @__PURE__ */ new Date()) => (n = j(n), e = j(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Xu = (n, e = /* @__PURE__ */ new Date()) => {
  n = j(n), e = j(e);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Zu = (n, e) => nn(j(e), n), Ju = (n, e) => nn(j(e).getTime() - ns, n), Qu = (n, e) => nn(j(e).getTime() + ns, n), et = (n, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (n = j(n), Number.isNaN(n.getDay()))
    return t;
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", po(n) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, td = (n, e, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = et(n, po(n) ? s.month : s.full);
  if (nn(n, e))
    return i;
  const o = et(e, po(n, e) ? fl(n, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
};
var ds, fs;
class pl extends O {
  constructor() {
    super(...arguments);
    C(this, ds, q());
    C(this, fs, (t, s) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    d(b(this, ds).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: s = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: b(this, ds), children: [
      /* @__PURE__ */ f(
        ye,
        {
          className: l,
          items: r,
          onClickItem: b(this, fs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        ye,
        {
          className: l,
          items: a,
          onClickItem: b(this, fs).bind(this, "minute")
        }
      )
    ] });
  }
}
ds = new WeakMap(), fs = new WeakMap();
const Wr = (n) => {
  if (!n)
    return;
  const e = j(`1999-01-01 ${n}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var Un, qn, Yn, Kn, ps;
let Lh = (ps = class extends ht {
  constructor(t) {
    super(t);
    C(this, Un, () => {
      this.toggle(!0);
    });
    C(this, qn, (t) => {
      this.setTime(t.target.value);
    });
    C(this, Yn, (t, s) => {
      this.setTime({ [t]: s });
    });
    C(this, Kn, () => {
      this.setTime("");
    });
    const s = this.state;
    s.value === "now" && (s.value = et(/* @__PURE__ */ new Date(), t.format));
  }
  setTime(t) {
    if (this.props.disabled)
      return;
    let s = "";
    if (typeof t == "string")
      s = t;
    else {
      const [l, h] = (this.state.value || "00:00").split(":"), { hour: u = +l, minute: c = +h } = t;
      s = `${u}:${c}`;
    }
    const i = Wr(s), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? et(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(s);
    });
  }
  getTime() {
    const t = Wr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `time-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: b(this, Kn), children: /* @__PURE__ */ f("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-time" }) : p = /* @__PURE__ */ f(J, { icon: o })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", className: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: b(this, Un), onChange: b(this, qn) }, "input"),
      p ? /* @__PURE__ */ f("label", { for: c, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [s, i] = this.getTime() || [];
    return /* @__PURE__ */ f(pl, { hour: s, minute: i, minuteStep: t.minuteStep, onChange: b(this, Yn) });
  }
}, Un = new WeakMap(), qn = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), ps.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, ps);
K.addLang({
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
const Ph = (n, e, t = 0) => {
  const s = new Date(n, e - 1, 1), i = s.getDay(), o = s.getTime() - (7 + i - t) % 7 * ns;
  return {
    days: 7 * 5,
    startTime: o,
    firstDay: s.getTime()
  };
}, zr = (n, e) => new Set((Array.isArray(n) ? n : [n]).map((t) => et(t, e)));
var Gn;
class Hh extends O {
  constructor() {
    super(...arguments);
    C(this, Gn, (t) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = d(t.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(t) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = K.getLang("weekNames"),
      monthNames: r = K.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], p = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const I = (i + M) % 7;
      c.push(/* @__PURE__ */ f("div", { className: N("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: o ? o[I] : I }) }, M));
    }
    const { startTime: m, days: g, firstDay: y } = Ph(a, l, i), v = y + g * ns;
    let _ = m;
    const w = [], x = "yyyy-MM-dd", k = zr(h, x), E = zr(u, x);
    for (; _ <= v; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const R = new Date(_), A = R.getDate(), F = et(R, x), P = R.getDay(), D = fl(R, y), T = N("col mini-calendar-day", {
          active: k.has(F),
          selected: E.has(F),
          "is-first": A === 1,
          "is-in-month": D,
          "is-out-month": !D,
          "is-today": nn(R, s),
          "is-weekend": P === 0 || P === 6
        });
        M.push(
          /* @__PURE__ */ f("div", { className: T, "data-date": F, children: /* @__PURE__ */ f("a", { className: p, onClick: b(this, Gn), children: A === 1 && r ? r[R.getMonth()] : R.getDate() }) }, F)
        ), _ += ns;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: M }, _));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: c }),
      w
    ] });
  }
}
Gn = new WeakMap();
var ms, Xn;
class jr extends O {
  constructor() {
    super(...arguments);
    C(this, ms, q());
    C(this, Xn, (t) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const o = d(t.target).closest("[data-value]").dataset("value");
      o && (s(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    d(b(this, ms).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: s, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ f(tt, { type: "ghost", "data-value": h, active: h === r, className: N(l === h ? "is-current" : ""), onClick: b(this, Xn), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: b(this, ms), children: a });
  }
}
ms = new WeakMap(), Xn = new WeakMap();
var De, gs, ys, bs, _s, vs, Zn, gl, Jn, yl;
class ml extends O {
  constructor(t) {
    super(t);
    C(this, Zn);
    C(this, Jn);
    C(this, De, void 0);
    C(this, gs, void 0);
    C(this, ys, void 0);
    C(this, bs, void 0);
    C(this, _s, void 0);
    C(this, vs, void 0);
    $(this, De, q()), $(this, gs, (o) => {
      const r = d(o.target).closest("[data-set-date]");
      r.length && this.changeDate(r.dataset("set-date"));
    }), $(this, ys, () => {
      const { year: o, month: r } = this.state;
      r === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: r - 1 });
    }), $(this, bs, () => {
      const { year: o, month: r } = this.state;
      r === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: r + 1 });
    }), $(this, _s, (o) => {
      this.setState({ year: o, select: "day" });
    }), $(this, vs, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var r, a;
      if (o.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        o.length > 3 && (l = Ah(l, o.substring(5).replace("+", ""))), o = et(l, "yyyy-MM-dd");
      }
      (a = (r = this.props).onChange) == null || a.call(r, o);
    };
    const { date: s } = t, i = s ? new Date(s) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(t) {
    this.setState((s) => s.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    d(b(this, De).current).find(".active").scrollIntoView();
  }
  render(t, s) {
    const {
      date: i,
      yearText: o = K.getLang("yearFormat") || "{0}",
      weekNames: r = K.getLang("weekNames"),
      monthNames: a = K.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: p
    } = s, m = p === "day", g = j(t.minDate || "1970-1-1"), y = j(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: b(this, De), onClick: b(this, gs), children: [
      L(this, Zn, gl).call(this, t),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(tt, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: G(o, u) }),
          /* @__PURE__ */ f(tt, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: b(this, ys), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(tt, { type: "ghost", size: "sm", square: !0, onClick: b(this, bs), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Hh,
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
        p === "year" ? /* @__PURE__ */ f(
          jr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: b(this, _s)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          jr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: b(this, vs)
          }
        ) : null,
        m ? L(this, Jn, yl).call(this, t) : null
      ] })
    ] });
  }
}
De = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), bs = new WeakMap(), _s = new WeakMap(), vs = new WeakMap(), Zn = new WeakSet(), gl = function(t) {
  let { menu: s } = t;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(ye, { ...s })) : null;
}, Jn = new WeakSet(), yl = function(t) {
  let { actions: s } = t;
  const { todayText: i, clearText: o } = t;
  return s || (s = [{ text: i, "data-set-date": et(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(Jt, { btnProps: { className: "ghost text-primary" }, ...s }),
    o ? /* @__PURE__ */ f(tt, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var ws, Cs, $s, xs;
let Oh = (xs = class extends ht {
  constructor(t) {
    super(t);
    C(this, ws, void 0);
    C(this, Cs, void 0);
    C(this, $s, void 0);
    $(this, ws, () => {
      this.toggle(!0);
    }), $(this, Cs, (i) => {
      this.setDate(i.target.value);
    }), $(this, $s, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      const { onInvalid: o, defaultValue: r = "", required: a, disabled: l, format: h } = this.props;
      if (l)
        return;
      const u = j(i), c = !i || Number.isNaN(u.getDay());
      this.setState({ value: c ? a ? r : "" : et(u, h) }, () => {
        !c && o && o(i), this.toggle(!1);
      });
    };
    const { value: s } = this.state;
    s && (this.state.value = et(s === "today" ? /* @__PURE__ */ new Date() : s, t.format));
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `date-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: b(this, $s), children: /* @__PURE__ */ f("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-calendar" }) : p = /* @__PURE__ */ f(J, { icon: o })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", className: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: b(this, ws), onChange: b(this, Cs) }, "input"),
      p ? /* @__PURE__ */ f("label", { for: c, className: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, s) {
    const i = super._getPopProps(t, s);
    return {
      ...i,
      className: N(i.className, "popup")
    };
  }
  _renderPop(t, s) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = K.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: g } = t;
    return /* @__PURE__ */ f(
      ml,
      {
        onChange: this.setDate,
        date: s.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: p,
        maxDate: m
      }
    );
  }
}, ws = new WeakMap(), Cs = new WeakMap(), $s = new WeakMap(), xs.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, xs);
const Qn = class Qn extends z {
};
Qn.NAME = "TimePicker", Qn.Component = Lh;
let Vr = Qn;
const ti = class ti extends z {
};
ti.NAME = "DatePicker", ti.Component = Oh;
let Ur = ti;
class Fh extends O {
  render(e) {
    const { date: t, time: s } = e;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(ml, { ...t }),
      /* @__PURE__ */ f(pl, { ...s })
    ] });
  }
}
const qr = (n) => {
  if (!n)
    return;
  const e = j(`1999-01-01 ${n}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var ks, Es, Ss, Ts, Ns, Ms;
let Bh = (Ms = class extends ht {
  constructor(t) {
    super(t);
    C(this, ks, void 0);
    C(this, Es, void 0);
    C(this, Ss, void 0);
    C(this, Ts, void 0);
    C(this, Ns, void 0);
    $(this, ks, () => {
      this.toggle(!0);
    }), $(this, Es, (a) => {
      this.setDate(a.target.value);
    }), $(this, Ss, () => {
      this.setDate("");
      const { required: a, defaultValue: l } = this.props;
      this.setState({ value: a ? l : "" });
    }), $(this, Ts, (a, l) => {
      this.setTime({ [a]: l });
    }), $(this, Ns, (a) => {
      this.setTime(a.target.value);
    }), this.setDate = (a) => {
      const { onInvalid: l, defaultValue: h = "", required: u, dateFormat: c, disabled: p, joiner: m } = this.props;
      if (p)
        return;
      const g = j(a), y = !a || Number.isNaN(g.getDay()), v = et(g, c), [, _ = "00:00"] = this.state.value.split(m);
      this.setState({ value: y ? u ? h : "" : `${v}${m}${_}` }, () => {
        !y && l && l(a);
      });
    };
    const { value: s } = this.state, { dateFormat: i, timeFormat: o, joiner: r } = t;
    s && (this.state.value = et(s === "today" ? /* @__PURE__ */ new Date() : s, `${i}${r}${o}`));
  }
  setTime(t) {
    const { onInvalid: s, required: i, defaultValue: o, timeFormat: r, joiner: a, disabled: l, dateFormat: h } = this.props;
    if (l)
      return;
    let u = "";
    if (typeof t == "string")
      u = t;
    else {
      const [, m = "00:00"] = this.state.value.split(a), [g, y] = m.split(":"), { hour: v = +g, minute: _ = +y } = t;
      u = `${v}:${_}`;
    }
    const c = qr(u), p = this.state.value.split(a)[0] || et(/* @__PURE__ */ new Date(), h);
    this.setState({ value: c ? `${p}${a}${et(c, r)}` : i ? o : "" }, () => {
      !c && s && s(u);
    });
  }
  getTime() {
    const t = qr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `datetime-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: b(this, Ss),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-calendar" }) : p = /* @__PURE__ */ f(J, { icon: o })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: c,
          type: "text",
          className: "form-control",
          placeholder: i,
          value: h,
          disabled: a,
          readOnly: l,
          onFocus: b(this, ks),
          onChange: (m) => {
            b(this, Es).call(this, m), b(this, Ns).call(this, m);
          }
        },
        "input"
      ),
      p ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, s) {
    const i = super._getPopProps(t, s);
    return {
      ...i,
      className: N(i.className, "popup")
    };
  }
  _renderPop(t, s) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = K.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: g, minuteStep: y } = t, [v, _] = this.getTime() || [], w = {
      date: {
        onChange: this.setDate,
        date: s.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: g ? "" : h,
        menu: u,
        actions: c,
        minDate: p,
        maxDate: m
      },
      time: {
        hour: v,
        minute: _,
        minuteStep: y,
        onChange: b(this, Ts)
      }
    };
    return /* @__PURE__ */ f(Fh, { ...w });
  }
}, ks = new WeakMap(), Es = new WeakMap(), Ss = new WeakMap(), Ts = new WeakMap(), Ns = new WeakMap(), Ms.defaultProps = {
  ...ht.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
}, Ms);
const ei = class ei extends z {
};
ei.NAME = "DatetimePicker", ei.Component = Bh;
let Yr = ei;
const Gi = "show", Kr = "in", Wh = '[data-dismiss="modal"]', ut = class ut extends rt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (e) => {
      const t = e.target, s = t.closest(".modal");
      !s || s !== this.modalElement || (t.closest(Wh) || this.options.backdrop === !0 && t === s) && (e.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Gi);
  }
  get dialog() {
    return this.modalElement.querySelector(".modal-dialog");
  }
  get rob() {
    return this._rob;
  }
  _observeResize() {
    var e;
    if (this.options.responsive && typeof ResizeObserver < "u") {
      (e = this._rob) == null || e.disconnect();
      const { dialog: t } = this;
      if (t) {
        const s = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const i = t.clientWidth, o = t.clientHeight, [r, a] = this._lastDialogSize || [];
          (r !== i || a !== o) && (this._lastDialogSize = [i, o], this.layout());
        });
        s.observe(t), this._rob = s;
      }
    }
  }
  afterInit() {
    this.on("click", this._handleClick), this.options.show && this.show(), this._observeResize();
  }
  destroy() {
    var e;
    super.destroy(), (e = this._rob) == null || e.disconnect(), this._rob = void 0;
  }
  show(e) {
    const { modalElement: t } = this;
    if (this.shown)
      return d(t).css("z-index", `${ut.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: s, backdrop: i, className: o, style: r } = this.options;
    return d(t).setClass({
      "modal-trans": s,
      "modal-no-backdrop": !i
    }, Gi, o).css({
      zIndex: `${ut.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      d(t).addClass(Kr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (d(this.modalElement).removeClass(Kr), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(Gi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = d(s);
    if (t = t ?? this.options.size, t) {
      i.removeAttr("data-size");
      const l = { width: "", height: "" };
      typeof t == "object" ? (l.width = t.width, l.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? i.attr("data-size", t) : t && (l.width = t), i.css(l);
    }
    e = e ?? this.options.position ?? "fit";
    const o = s.clientWidth, r = s.clientHeight;
    this._lastDialogSize = [o, r], typeof e == "function" && (e = e({ width: o, height: r }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), i.css(a), d(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(e, t) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), e && (this.options.animation ? this._timer = window.setTimeout(e, t ?? this.options.transTime) : e());
  }
  static hide(e) {
    var t;
    (t = ut.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = ut.query(e)) == null || t.show();
  }
};
ut.NAME = "Modal", ut.MULTI_INSTANCE = !0, ut.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, ut.zIndex = 1500;
let Pt = ut;
d(window).on(`resize.${Pt.NAMESPACE}`, () => {
  Pt.getAll().forEach((n) => {
    const e = n;
    e.shown && e.options.responsive && e.layout();
  });
});
d(document).on(`to-hide.${Pt.NAMESPACE}`, (n, e) => {
  Pt.hide(e == null ? void 0 : e.target);
});
const tr = class tr extends O {
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
      title: s
    } = this.props;
    return Z(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ f("div", { className: N("modal-header", t), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : Z(e) ? e : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ f(Jt, { ...e }) : null,
      t ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? Z(e) ? e : /* @__PURE__ */ f("div", { className: N("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: s
    } = this.props;
    return Z(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ f("div", { className: N("modal-footer", t), children: s ? /* @__PURE__ */ f(Jt, { ...s }) : null });
  }
  render() {
    const {
      className: e,
      style: t,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: N("modal-dialog", e), style: t, children: /* @__PURE__ */ f("div", { className: N("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
tr.defaultProps = { closeBtn: !0 };
let mo = tr;
const er = class er extends O {
  constructor() {
    super(...arguments), this._ref = q(), this.state = {}, this._watchIframeHeight = () => {
      var s, i;
      const e = (i = (s = this._ref.current) == null ? void 0 : s.contentWindow) == null ? void 0 : i.document;
      if (!e)
        return;
      let t = this._rob;
      t == null || t.disconnect(), t = new ResizeObserver(() => {
        const o = e.body, r = e.documentElement, a = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, r.offsetHeight)) + 1;
        this.setState({ height: a });
      }), t.observe(e.body), t.observe(e.documentElement), this._rob = t;
    };
  }
  componentDidMount() {
    this.props.watchHeight && this._watchIframeHeight();
  }
  componentWillUnmount() {
    var e;
    (e = this._rob) == null || e.disconnect();
  }
  render() {
    const { url: e, watchHeight: t } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: e,
        ref: this._ref,
        onLoad: t ? this._watchIframeHeight : void 0
      }
    );
  }
};
er.defaultProps = {
  watchHeight: !0
};
let go = er;
function zh(n, e) {
  const { custom: t, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function jh(n, e) {
  const { dataType: t = "html", url: s, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = e, u = await (await fetch(s, {
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
    body: t === "html" ? /* @__PURE__ */ f(Qs, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function Vh(n, e) {
  const { url: t, custom: s, title: i, size: o } = e, r = typeof o == "object" && typeof o.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(go, { url: t, watchHeight: !r })
  };
}
const Uh = {
  custom: zh,
  ajax: jh,
  iframe: Vh
}, Xi = "loading";
var gt, Ie, yt, Ds, bo, Is, _o;
const Ft = class Ft extends Pt {
  constructor() {
    super(...arguments);
    C(this, Ds);
    C(this, Is);
    C(this, gt, void 0);
    C(this, Ie, void 0);
    C(this, yt, void 0);
  }
  get id() {
    return b(this, Ie);
  }
  get loading() {
    var t;
    return (t = b(this, gt)) == null ? void 0 : t.classList.contains(Xi);
  }
  get shown() {
    var t;
    return !!((t = b(this, gt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = b(this, gt);
    if (!t) {
      const { options: s } = this;
      let i = b(this, Ie);
      i || (i = s.id || `modal-${d.guid++}`, $(this, Ie, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = d("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(s.style || {}).setClass("modal modal-async load-indicator", s.className).appendTo(o)[0];
      }
      $(this, gt, t);
    }
    return t;
  }
  get $emitter() {
    const t = b(this, gt);
    return t ? d(t) : this.$element;
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
    const t = b(this, gt);
    t && (d(t).removeData(this.constructor.KEY).remove(), $(this, gt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    b(this, yt) && clearTimeout(b(this, yt));
    const { modalElement: t, options: s } = this, i = d(t), { type: o, loadTimeout: r, loadingText: a = null } = s, l = Uh[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(Xi), r && $(this, yt, window.setTimeout(() => {
      $(this, yt, 0), L(this, Is, _o).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, s);
    return h === !1 ? await L(this, Is, _o).call(this, this.options.failedTip) : h && typeof h == "object" && await L(this, Ds, bo).call(this, h), b(this, yt) && (clearTimeout(b(this, yt)), $(this, yt, 0)), this.layout(), await pn(100), i.removeClass(Xi), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = Ft.ensure(i, r), l = `${Ft.NAMESPACE}.open${d.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), s(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: s, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, p = (typeof h == "function" ? h() : h) || {};
    let m = typeof i == "object" && i.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ f("div", { children: i });
    o ? m = /* @__PURE__ */ f("div", { className: N("modal-body row gap-4 items-center", p.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${o} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ f("div", { className: N("modal-body", p.bodyClass), children: m });
    const g = [];
    (Array.isArray(a) ? a : [a]).forEach((_) => {
      _ = {
        ...typeof _ == "string" ? { key: _ } : _
      }, typeof _.key == "string" && (_.text || (_.text = K.getLang(_.key, _.key)), _.btnType || (_.btnType = `btn-wide ${_.key === "confirm" ? "primary" : "btn-default"}`)), _ && g.push(_);
    }, []);
    let y;
    const v = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: _, event: w }) => {
        const x = Ft.query(w.target, u);
        y = _.key, (l == null ? void 0 : l(_, x)) !== !1 && x && x.hide();
      }
    } : void 0;
    return await Ft.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: v, ...p },
      ...c
    }), y;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return await Ft.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), s == null || s(a, l);
      },
      ...o
    }) === "confirm";
  }
};
gt = new WeakMap(), Ie = new WeakMap(), yt = new WeakMap(), Ds = new WeakSet(), bo = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return d(this.modalElement).html(t[0]), this.layout(), this._observeResize(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), s();
      },
      ...o
    }, _n(
      /* @__PURE__ */ f(mo, { ...t }),
      this.modalElement
    );
  });
}, Is = new WeakSet(), _o = function(t) {
  if (t)
    return L(this, Ds, bo).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: t })
    });
}, Ft.DEFAULT = {
  ...Pt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let yo = Ft;
const qh = '[data-toggle="modal"]', sr = class sr extends rt {
  get modal() {
    return this._modal;
  }
  get container() {
    const { container: e } = this.options;
    return typeof e == "string" ? document.querySelector(e) : e instanceof HTMLElement ? e : document.body;
  }
  show() {
    var e;
    return (e = this._initModal()) == null ? void 0 : e.show();
  }
  hide() {
    var e;
    return (e = this._modal) == null ? void 0 : e.hide();
  }
  _getBuilderOptions() {
    const {
      container: e,
      ...t
    } = this.options, s = t, i = this.$element.attr("href") || "";
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), !s.key && s.id && (s.key = s.id), s;
  }
  _initModal() {
    const e = this._getBuilderOptions();
    let t = this._modal;
    if (t)
      return t.setOptions(e), t;
    if (e.type === "static") {
      const s = this._getStaticModalElement();
      if (!s)
        return;
      t = Pt.ensure(s, e);
    } else
      t = yo.ensure(this.container, e);
    return this._modal = t, t.on("destroyed", () => {
      this._modal = void 0;
    }), t;
  }
  _getStaticModalElement() {
    let e = this.options.target;
    if (!e) {
      const { $element: t } = this;
      if (t.is("a")) {
        const s = t.attr("href");
        s != null && s.startsWith("#") && (e = s);
      }
    }
    return this.container.querySelector(e || ".modal");
  }
};
sr.NAME = "ModalTrigger";
let En = sr;
d(document).on(`click${En.NAMESPACE}`, qh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.is("[disabled],.disabled")) {
    const t = En.ensure(e);
    t && (t.show(), n.preventDefault());
  }
});
var Rs;
let Yh = (Rs = class extends Hi {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = N(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, Rs.NAME = "nav", Rs);
const si = class si extends z {
};
si.NAME = "Nav", si.Component = Yh;
let Gr = si;
function is(n, e) {
  const t = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = n.page - 1 : e === "next" ? e = n.page + 1 : e === "current" ? e = n.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : n.page, {
    ...n,
    pageTotal: t,
    page: e
  };
}
function Kh({
  key: n,
  type: e,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = is(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : G(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : G(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ f(tt, { type: t, ...a });
}
function Gh({
  key: n,
  type: e,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = is(i, t);
  return s = typeof s == "function" ? s(a) : G(s, a), /* @__PURE__ */ f(Xa, { ...r, children: [
    o,
    s
  ] });
}
function Xh({
  key: n,
  type: e,
  btnType: t,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(tt, { type: t, ...l })), u = (p, m) => {
    const g = [];
    for (let y = p; y <= m; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = is(i, y);
      r && (l.url = typeof r == "function" ? r(v) : G(r, v)), g.push(/* @__PURE__ */ f(tt, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? c = [...c, ...u(2, i.pageTotal)] : i.page < s - 2 ? c = [...c, ...u(2, s - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? c = [...c, h(), ...u(i.pageTotal - s + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Zh({
  type: n,
  pagerInfo: e,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items || s.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : G(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : G(a, e), i.menu = { ...i.menu, className: N((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(ol, { type: "dropdown", dropdown: i, ...r });
}
function Jh({
  key: n,
  page: e,
  type: t,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
  onChange: a,
  linkCreator: l,
  ...h
}) {
  const u = { ...h };
  let c;
  const p = (y) => {
    var v;
    c = Number((v = y.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, m = (y) => {
    if (!(y != null && y.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = is(i, c);
    a && !a({ info: v, event: y }) || (y.target.href = u.url = typeof l == "function" ? l(v) : G(l, v));
  }, g = is(i, e || 0);
  return u.url = typeof l == "function" ? l(g) : G(l, g), /* @__PURE__ */ f("div", { className: N("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(tt, { type: s, ...u, onClick: m })
  ] });
}
var me;
let Qh = (me = class extends Jt {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: s = 10 } = this.props;
    return { page: +e, recTotal: +t, recPerPage: +s, pageTotal: s ? Math.ceil(t / s) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, s) {
    const i = super.getItemRenderProps(e, t, s), o = t.type || "item", { pagerInfo: r } = this;
    return o === "info" ? Object.assign(i, { pagerInfo: r }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: r, linkCreator: e.linkCreator }), i;
  }
}, me.NAME = "pager", me.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, me.ItemComponents = {
  ...Jt.ItemComponents,
  link: Kh,
  info: Gh,
  nav: Xh,
  "size-menu": Zh,
  goto: Jh
}, me);
const ni = class ni extends z {
};
ni.NAME = "Pager", ni.Component = Qh;
let Xr = ni;
const ii = class ii extends z {
};
ii.NAME = "Pick", ii.Component = ht;
let Zr = ii;
var Re, As, Ls, oi;
class bl extends O {
  constructor(t) {
    super(t);
    C(this, Re, q());
    C(this, As, q());
    C(this, Ls, (t) => {
      var i, o;
      const s = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, s), this.setState({ search: s }), t.stopPropagation();
    });
    C(this, oi, (t) => {
      var s, i;
      t.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = b(this, Re).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: s } = b(this, As), { current: i } = b(this, Re);
      if (s && i) {
        const o = d(i).parent();
        o.width(Math.ceil(Math.min(s.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, s) {
    const { placeholder: i, inline: o } = t, { search: r } = s, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: b(this, As), children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: b(this, oi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: b(this, Ls),
          onInput: b(this, Ls),
          ref: b(this, Re)
        }
      ),
      l
    ] });
  }
}
Re = new WeakMap(), As = new WeakMap(), Ls = new WeakMap(), oi = new WeakMap();
var Ae, Ps, Hs, Os;
class tu extends Go {
  constructor() {
    super(...arguments);
    C(this, Ae, void 0);
    C(this, Ps, void 0);
    C(this, Hs, void 0);
    C(this, Os, void 0);
    $(this, Ae, q()), $(this, Ps, (t) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      s && i.length && typeof o == "string" && s(o), t.stopPropagation();
    }), $(this, Hs, (t) => {
      this.props.changeState({ search: t });
    }), $(this, Os, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(ee, { content: t.text }) }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: b(this, Ps), "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = b(this, Ae).current) == null || s.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: s }, searchHint: i } = t;
    return /* @__PURE__ */ f(
      bl,
      {
        inline: !0,
        ref: b(this, Ae),
        defaultSearch: s,
        onSearch: b(this, Hs),
        onClear: b(this, Os),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: s = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !s.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: s, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t;
    if (!r.length)
      return super._renderValue(t);
    if (s)
      if (this.hasInput)
        d(`#${o}`).val(i);
      else {
        const l = r.length ? r : [a];
        return /* @__PURE__ */ f("select", { id: o, multiple: !0, className: "pick-value", name: s.endsWith("[]") ? s : `${s}[]`, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ f("option", { value: h, children: h }, h)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: s, emptyValue: i } = this.props;
    d(`#${t}`).val(s.length ? s : [i]);
  }
  componentDidUpdate(t) {
    const { id: s, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && d(`#${s}`).val(r.length ? r : [a]).trigger("change", fo);
  }
}
Ae = new WeakMap(), Ps = new WeakMap(), Hs = new WeakMap(), Os = new WeakMap();
var Fs, ri, ai, li, ci, _l;
class eu extends Go {
  constructor() {
    super(...arguments);
    C(this, ci);
    C(this, Fs, q());
    C(this, ri, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    C(this, ai, (t) => {
      this.props.changeState({ search: t });
    });
    C(this, li, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = b(this, Fs).current) == null || s.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: s } } = t;
    return /* @__PURE__ */ f(
      bl,
      {
        ref: b(this, Fs),
        defaultSearch: s,
        onSearch: b(this, ai),
        onClear: b(this, li),
        placeholder: L(this, ci, _l).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: s, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(t) : u ? p = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: /* @__PURE__ */ f(ee, { content: u.text }) }, "main") : p = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: b(this, ri), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      s,
      m,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
Fs = new WeakMap(), ri = new WeakMap(), ai = new WeakMap(), li = new WeakMap(), ci = new WeakSet(), _l = function() {
  const { searchHint: t, state: { value: s, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === s);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const su = (n, e, t = "is-match") => n.reduce((s, i) => [...s].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ f("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), e);
var hi, ui, vl, di, wl, fi;
class nu extends dl {
  constructor() {
    super(...arguments);
    C(this, ui);
    C(this, di);
    C(this, hi, q());
    C(this, fi, ({ item: t }) => {
      const s = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(s) : (r(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && d(t).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = d(s.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const t = this.element;
    t && d(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const s = L(this, ui, vl).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: s } = t;
    return /* @__PURE__ */ f(
      ye,
      {
        ref: b(this, hi),
        className: "picker-menu-list",
        items: L(this, di, wl).call(this),
        onClickItem: b(this, fi),
        ...s
      }
    );
  }
}
hi = new WeakMap(), ui = new WeakSet(), vl = function() {
  const t = this.element;
  if (t)
    return d(t).find(".menu-item>a.hover");
}, di = new WeakSet(), wl = function() {
  const { selections: t, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = d.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = s.reduce((u, c) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: y,
      content: v,
      ..._
    } = c;
    return p === i && (a = !0), g && u.push({
      key: p,
      active: r.has(p),
      text: v ? null : typeof g == "string" ? su(l, [g]) : /* @__PURE__ */ f(ee, { content: g }),
      className: N(y, { hover: p === i }),
      "data-value": p,
      content: v,
      ..._
    }), u;
  }, []);
  return !a && h.length && (h[0].className = N(h[0].className, "hover")), h;
}, fi = new WeakMap();
var Le, bt, Tt, Pe, Ve;
let iu = (Ve = class extends ht {
  constructor(t) {
    super(t);
    C(this, Le, void 0);
    C(this, bt, void 0);
    C(this, Tt, void 0);
    C(this, Pe, void 0);
    $(this, Tt, 0), this.isEmptyValue = (r) => b(this, Pe).has(r), this.toggleValue = (r, a) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), d.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: s = ",", emptyValue: i = "" } = this.props;
    $(this, Pe, new Set(i.split(s)));
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
    return b(this, Pe).values().next().value;
  }
  async load() {
    let t = b(this, bt);
    t && t.abort(), t = new AbortController(), $(this, bt, t);
    const { items: s, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof s == "function") {
      if (await pn(i || 500), b(this, bt) !== t || (r = await s(o, { signal: t.signal }), b(this, bt) !== t))
        return r;
    } else if (o.length) {
      const a = d.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      r = s, a.length && (r = s.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: p
        } = h;
        return a.every((m) => u.toLowerCase().includes(m) || c.toLowerCase().includes(m) || typeof p == "string" && p.toLowerCase().includes(m)) && l.push(h), l;
      }, []));
    } else
      r = s;
    return $(this, bt, void 0), r;
  }
  async update(t) {
    const { state: s, props: i } = this, o = b(this, Le) || {}, r = {};
    if ($(this, Le, o), t || o.search !== s.search || i.items !== o.items) {
      const l = await this.load();
      r.items = l.filter((h) => (h.value = String(h.value), !this.isEmptyValue(h.value))), r.loading = !1, o.items = i.items, o.search = s.search;
    }
    if (t || o.value !== s.value) {
      const l = r.items || s.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = s.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    b(this, Tt) && clearTimeout(b(this, Tt)), $(this, Tt, window.setTimeout(() => {
      $(this, Tt, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, s) {
    super.componentDidUpdate(t, s), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = b(this, bt)) == null || t.abort(), $(this, bt, void 0), $(this, Le, void 0), clearTimeout(b(this, Tt)), super.componentWillUnmount();
  }
  _getTriggerProps(t, s) {
    return {
      ...super._getTriggerProps(t, s),
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
  _getPopProps(t, s) {
    return {
      ...super._getPopProps(t, s),
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
    return t.Trigger || (t.multiple ? tu : eu);
  }
  formatValueList(t) {
    let s = [];
    return typeof t == "string" && t.length ? s = d.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (s = d.unique(t)), s.filter((i) => !this.isEmptyValue(i));
  }
  formatValue(t) {
    const s = this.formatValueList(t);
    return s.length ? s.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let s = this.formatValueList(t);
    if (!s.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: i, limitValueInList: o } = this.props;
    if (o) {
      const a = new Set((Array.isArray(i) ? i : this.state.items).map((l) => String(l.value)));
      s = s.filter((l) => a.has(l));
    }
    const r = this.formatValue(s);
    return this.changeState({ value: r });
  }
}, Le = new WeakMap(), bt = new WeakMap(), Tt = new WeakMap(), Pe = new WeakMap(), Ve.defaultProps = {
  ...ht.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, Ve.Pop = nu, Ve);
const pi = class pi extends z {
};
pi.NAME = "Picker", pi.Component = iu;
let Jr = pi;
const mi = class mi extends rt {
  init() {
    const { trigger: e } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const t = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: s } = this.options;
      s === 0 ? t() : setTimeout(t, s);
    }, this.$element.addClass("z-50").on(e, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: e, strategy: t } = this.options, s = {
      placement: e,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(Oi()), o && s.middleware.push(o === !0 ? es() : es(o)), r && s.middleware.push(ao({ element: this.$arrow[0] })), a && s.middleware.push(Fi(a)), s;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = Ko(e, t, () => {
      zi(e, t, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !ao || !r.arrow)
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
    const t = d(e);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    t.addClass(s), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      d(i.target).data("dismiss") === "popovers" && this.hide();
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
    const t = d('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = d('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
mi.NAME = "Popovers", mi.DEFAULT = {
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
let Qr = mi;
var Bs, Ws, jt, gi, zs, js, Vs, vo, Us;
let ou = (Us = class extends O {
  constructor(t) {
    super(t);
    C(this, Vs);
    C(this, Bs, void 0);
    C(this, Ws, q());
    C(this, jt, 0);
    C(this, gi, (t) => {
      const s = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), s.trim() !== "" && (i == null || i("", t));
      });
    });
    C(this, zs, (t) => {
      const s = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || s === i || (L(this, Vs, vo).call(this), $(this, jt, window.setTimeout(() => {
          o(i, t), $(this, jt, 0);
        }, this.props.delay || 0)));
      });
    });
    C(this, js, (t) => {
      const s = t.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, $(this, Bs, t.id || `search-box-${d.guid++}`);
  }
  get id() {
    return b(this, Bs);
  }
  get input() {
    return b(this, Ws).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    L(this, Vs, vo).call(this);
  }
  render(t, s) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: p, searchIcon: m, clearIcon: g } = t, { focus: y, value: v } = s, { id: _ } = this, w = typeof v != "string" || !v.trim().length;
    let x, k, E;
    return m && (E = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(J, { icon: m })), !p && m && (x = /* @__PURE__ */ f("label", { for: _, class: "input-control-prefix", children: E }, "prefix")), g && !w ? k = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: b(this, gi),
        children: g === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(J, { icon: g })
      }
    ) : p && m && (k = E), k && (k = /* @__PURE__ */ f("label", { for: _, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ f("div", { class: N("search-box input-control", r, { focus: y, empty: w, "has-prefix-icon": x, "has-suffix-icon": k }), style: a, children: [
      x,
      /* @__PURE__ */ f(
        "input",
        {
          ref: b(this, Ws),
          id: _,
          type: "text",
          class: N("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: b(this, zs),
          onChange: b(this, zs),
          onFocus: b(this, js),
          onBlur: b(this, js)
        }
      ),
      k
    ] });
  }
}, Bs = new WeakMap(), Ws = new WeakMap(), jt = new WeakMap(), gi = new WeakMap(), zs = new WeakMap(), js = new WeakMap(), Vs = new WeakSet(), vo = function() {
  b(this, jt) && clearTimeout(b(this, jt)), $(this, jt, 0);
}, Us.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Us);
const yi = class yi extends z {
};
yi.NAME = "SearchBox", yi.Component = ou;
let ta = yi;
const bi = class bi extends z {
};
bi.NAME = "Toolbar", bi.Component = Jt;
let ea = bi;
const ru = '[data-toggle="tooltip"]', _i = class _i extends $t {
  _getRenderOptions() {
    const { type: e, className: t, title: s, content: i } = this.options;
    let o = s, r = i;
    return r === void 0 && (r = o, o = void 0), {
      ...super._getRenderOptions(),
      title: o,
      content: r,
      className: N("tooltip", e, t, o ? "tooltip-has-title" : ""),
      contentClass: o ? "tooltip-content" : ""
    };
  }
};
_i.NAME = "Tooltip", _i.DEFAULT = {
  ...$t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
let Mt = _i;
d(document).on(`click${Mt.NAMESPACE} mouseenter${Mt.NAMESPACE}`, ru, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(Mt.KEY)) {
    const t = e.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    Mt.ensure(e, { show: Mt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
function au({
  type: n,
  component: e,
  className: t,
  children: s,
  content: i,
  style: o,
  attrs: r,
  url: a,
  disabled: l,
  active: h,
  icon: u,
  text: c,
  target: p,
  trailingIcon: m,
  hint: g,
  checked: y,
  actions: v,
  show: _,
  level: w = 0,
  items: x,
  ...k
}) {
  const E = Array.isArray(v) ? { items: v } : v;
  return E && (E.btnProps || (E.btnProps = { size: "sm" }), E.className = N("tree-actions not-nested-toggle", E.className)), /* @__PURE__ */ f(
    "div",
    {
      className: N("tree-item-content", t, { disabled: l, active: h }),
      title: g,
      "data-target": p,
      style: { paddingLeft: `calc(${w} * var(--tree-indent, 20px))` },
      "data-level": w,
      ...k,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${x ? " state" : ""}`, children: x ? /* @__PURE__ */ f("span", { class: `caret-${_ ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(J, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: o, ...r, children: c }) : /* @__PURE__ */ f("span", { class: "text", style: o, ...r, children: c }),
        /* @__PURE__ */ f(ee, { content: i }),
        s,
        E ? /* @__PURE__ */ f(Jt, { ...E }) : null,
        /* @__PURE__ */ f(J, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Ue;
let lu = (Ue = class extends Vo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(e) {
    const t = super.getNestedMenuProps(e), { collapsedIcon: s, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...t
    };
  }
  getItemRenderProps(e, t, s) {
    const i = super.getItemRenderProps(e, t, s), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = e;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(t) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const e = super.beforeRender(), { hover: t } = this.props;
    return t && (e.className = N(e.className, "tree-hover")), e;
  }
}, Ue.ItemComponents = {
  item: au
}, Ue.NAME = "tree", Ue);
const vi = class vi extends z {
};
vi.NAME = "Tree", vi.Component = lu;
let sa = vi;
const wi = class wi extends rt {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Hc(s) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: e, uploadText: t, uploadIcon: s, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = d('<ul class="file-list py-1"></ul>');
    const l = d(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = d(`<label class="btn ${o}" for="${e}">${t}</label>`), s) {
        const p = d(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(p);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = d(`<span class="text-primary">${t}</span>`);
    if (s) {
      const c = d(`<i class="icon icon-${s} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = d(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${e}"></label>`).append(h).append(l), this.bindDragEvent();
    const u = i === "bottom" ? [this.$label, this.$list] : [this.$list, this.$label];
    this.$element.append(this.$input, ...u);
  }
  bindDragEvent() {
    this.$label.on("dragover", (e) => {
      e.preventDefault(), console.log("dragover"), this.$label.hasClass("border-primary") || (this.$label.removeClass("border-gray"), this.$label.addClass("border-primary"));
    }).on("dragleave", (e) => {
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
    }).on("drop", (e) => {
      var s;
      e.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray");
      const t = Array.from(((s = e.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(e.dataTransfer.files), this.addFileItem(t);
    });
  }
  initFileInputCash() {
    const { name: e, multiple: t, accept: s } = this.options;
    this.$input = d("<input />").addClass("hidden").prop("type", "file").prop("name", e).prop("id", e).prop("multiple", t).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
    }), s && this.$input.prop("accept", s);
  }
  addFile(e) {
    const { multiple: t, onSizeChange: s } = this.options;
    t || (this.renameMap.clear(), this.fileMap.clear(), this.dataTransfer.items.clear(), this.currentBytes = e.size), this.renameMap.set(e.name, e.name), this.fileMap.set(e.name, e), this.dataTransfer.items.add(e), this.$input.prop("files", this.dataTransfer.files), this.currentBytes += e.size, s == null || s(this.currentBytes);
  }
  renameDuplicatedFile(e) {
    if (!this.fileMap.has(e.name))
      return e;
    const t = e.name.lastIndexOf(".");
    if (t === -1)
      return this.renameDuplicatedFile(new File([e], `${e.name}(1)`));
    const s = e.name.substring(0, t), i = e.name.substring(t);
    return this.renameDuplicatedFile(new File([e], `${s}(1)${i}`));
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (!t)
      return e;
    const s = t.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), e.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(e) {
    e = this.filterFiles(e);
    const { multiple: t, limitCount: s, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (t) {
      const h = [];
      for (let u of e) {
        if (s && this.fileMap.size >= s)
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
    const s = this.fileMap.get(t);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(e, t) {
    var o, r;
    const s = this.renameMap.get(e.name);
    this.renameMap.set(e.name, t), s && (e = this.fileMap.get(s) ?? e);
    const i = this.itemMap.get(e.name);
    i && (this.itemMap.set(t, i).delete(e.name), (r = (o = this.options).onRename) == null || r.call(o, t, e.name), this.fileMap.delete(e.name), this.dataTransfer = new DataTransfer(), e = new File([e], t), this.fileMap.set(t, e).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
  }
  createFileItem(e) {
    const { showIcon: t } = this.options;
    return this.addFile(e), d('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(e)).append(this.createRenameContainer(e));
  }
  fileIcon() {
    const { icon: e } = this.options;
    return d(`<i class="icon icon-${e}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: e, renameText: t, renameIcon: s, renameClass: i } = this.options;
    if (e) {
      const o = d(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Mt(o, { title: t }), o;
    }
    return d("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: s, deleteClass: i } = this.options;
    if (e) {
      const o = d(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Mt(o, { title: t })), o;
    }
    return d("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return d(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return d(`<span class="file-size text-gray">${Pc(e)}</span>`);
  }
  createFileInfo(e) {
    const { renameBtn: t, deleteBtn: s, showSize: i } = this.options, o = d('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(e.name)), i && o.append(this.fileSize(e.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = d(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(e.name))
    ), o;
  }
  createRenameContainer(e) {
    const { confirmText: t, cancelText: s, duplicatedHint: i } = this.options, o = d('<div class="input-group input-rename-container hidden"></div>'), r = d("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).on("keydown", (u) => {
      if (u.key === "Enter") {
        const c = o.closest(".file-item"), p = c.find(".file-name");
        if (p.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(e, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), p.html(r.val());
      } else
        u.key === "Escape" && (r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = d("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(e, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = d("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = d('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
wi.NAME = "Upload", wi.DEFAULT = {
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
let wo = wi;
const Ci = class Ci extends wo {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = d(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(d('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: e, tip: t, uploadText: s, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = d('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = d('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = d(`<label for="${e}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = d(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = d('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(d(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = d('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
  }
  filterFiles(e) {
    const { accept: t } = this.options;
    if (t === "image/*")
      return e.filter((i) => i.type.includes("image"));
    const s = t.replace(/\s/g, "").replace(/\./g, "image/").split(",");
    return e.filter((i) => s.includes(i.type));
  }
  createFileItem(e) {
    const t = super.createFileItem(e).addClass("relative").removeClass("flex items-center gap-2 my-1");
    this.setImageUrl(e, t);
    const { deleteBtn: s, showSize: i } = this.options;
    return s && t.append(
      this.fileDeleteBtn().addClass("absolute right-0 top-0 text-white").css({ background: "var(--color-slate-500)" }).on("click", () => this.deleteFileItem(e.name))
    ), i && t.append(
      this.fileSize(e.size).addClass("file-size label text-white circle darker absolute px-1 hidden").removeClass("text-gray").css({ top: 96, left: 4 })
    ), t;
  }
  setImageUrl(e, t) {
    const s = new FileReader();
    s.onload = () => {
      d('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(t);
    }, s.readAsDataURL(e);
  }
  createFileInfo(e) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = d(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return d('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(d(`<div class="file-name py-1 ellipsis">${e.name}</div>`)).append(t);
  }
  createRenameContainer(e) {
    const { duplicatedHint: t } = this.options, s = d("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = s.closest(".file-item").find(".file-name");
        if (o.html() === s.val()) {
          s.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(t);
        this.renameFileItem(e, s.val()), s.addClass("hidden"), o.html(s.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && s.val(e.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(t);
      this.renameFileItem(e, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
};
Ci.NAME = "UploadImgs", Ci.DEFAULT = {
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
let na = Ci;
const $i = class $i extends xt {
  _getLayoutOptions() {
    const e = super._getLayoutOptions();
    return this.options.element || (e[0] = {
      getBoundingClientRect: this._getClickBounding
    }), e;
  }
};
$i.NAME = "ContextMenu", $i.DEFAULT = {
  ...xt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let Co = $i;
let cu = class extends O {
  constructor() {
    super(...arguments), this._onDragStart = (e) => {
      var i, o, r;
      const t = e.target.closest(".dashboard-block");
      if (!t)
        return;
      const s = t.getBoundingClientRect();
      if (e.clientY - s.top > 48) {
        e.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = e.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, e);
    }, this._onDragEnd = (e) => {
      var t, s;
      this.setState({ dragging: !1 }), (s = (t = this.props).onDragEnd) == null || s.call(t, e);
    };
  }
  render() {
    const { left: e, top: t, id: s, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: u } = this.state;
    return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: e, top: t, width: r, height: a }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": s,
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          d.isPlainObject(l) && l.html ? /* @__PURE__ */ f(Qs, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const ia = ([n, e, t, s], [i, o, r, a]) => !(n + t <= i || i + r <= n || e + s <= o || o + a <= e), rn = "Dashboard:Block.cache:";
var qs;
let hu = (qs = class extends O {
  constructor(e) {
    super(e), this._ref = q(), this._loadTimer = 0, this.map = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._handleDragStart = (t) => {
      var i;
      const s = (i = t.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", t));
    }, this._handleDragEnd = (t) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", t);
    }, this._handleMenuClick = (t) => {
      const s = t.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      const { menu: r } = o, { onClickMenu: a } = this.props;
      Co.show({
        triggerEvent: t,
        element: t.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var h;
            ((h = l.item.data) == null ? void 0 : h.type) === "refresh" && this.load(i), a && a.call(this, l, o);
          },
          ...r
        }
      });
    }, this.state = { blocks: this._initBlocks(e.blocks) };
  }
  getBlock(e) {
    return this.state.blocks.find((t) => t.id === e);
  }
  update(e, t) {
    const { id: s } = e, { blocks: i } = this.state, o = i.findIndex((a) => a.id === s);
    if (o < 0)
      return;
    const r = i[o];
    e.fetch && e.fetch !== r.fetch && r.needLoad && (e.needLoad = !1), i[o] = { ...r, ...e }, this.setState({ blocks: i }, t);
  }
  delete(e) {
    const { blocks: t } = this.state, s = t.findIndex((i) => i.id === e);
    s < 0 || (t.splice(s, 1), this.setState({ blocks: t }));
  }
  add(e) {
    e = Array.isArray(e) ? e : [e], this.setState({ blocks: [...this.state.blocks, ...this._initBlocks(e)] });
  }
  load(e, t) {
    const s = this.getBlock(e);
    if (!s || s.loading || (t = t || s.fetch, typeof t == "string" ? t = { url: t } : typeof t == "function" && (t = t(s.id, s)), !t || !t.url))
      return;
    const { url: i, ...o } = t;
    this.update({ id: e, loading: !0, needLoad: !1 }, async () => {
      const r = G(i, s);
      try {
        const a = await fetch(G(r, s), {
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
        const l = /* @__PURE__ */ f("div", { class: "panel center text-danger p-5", children: [
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
    for (const s of e) {
      if (s.loading)
        return;
      if (!s.visible && this._isVisible(s.id))
        return this.update({ id: s.id, visible: !0 });
      if (s.needLoad && s.visible) {
        t = s.id;
        break;
      }
    }
    t.length && requestAnimationFrame(() => this.load(t));
  }
  _isVisible(e) {
    return !!d(this._ref.current).find(`.dashboard-block[data-id="${e}"]`).isVisible();
  }
  _setCache(e, t) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? Je.set(`${rn}${s}:${e}`, t) : Je.session.set(`${rn}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const s = typeof t == "string" ? Je.get(`${rn}${t}:${e}`) : Je.session.get(`${rn}${e}`);
    if (s)
      return { html: s };
  }
  _initBlocks(e) {
    const { blockFetch: t, blockMenu: s } = this.props;
    return e.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: u = t,
        menu: c = s,
        content: p,
        ...m
      } = o, [g, y] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: g,
        height: y,
        left: l,
        top: h,
        fetch: u,
        menu: c,
        content: p ?? this._getCache(`${r}`),
        loading: !1,
        needLoad: !!u,
        ...m
      };
    });
  }
  _getBlockSize(e) {
    const { blockDefaultSize: t, blockSizeMap: s } = this.props;
    return e = e ?? t, typeof e == "string" && (e = s[e]), e = e || t, Array.isArray(e) || (e = [e.width, e.height]), e;
  }
  _layout() {
    this.map.clear();
    let e = 0;
    const { blocks: t } = this.state;
    return t.forEach((s) => {
      this._layoutBlock(s);
      const [, i, , o] = this.map.get(s.id);
      e = Math.max(e, i + o);
    }), { blocks: t, height: e };
  }
  _layoutBlock(e) {
    const t = this.map, { id: s, left: i, top: o, width: r, height: a } = e;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      t.set(s, [l, h, r, a]);
    } else
      this._insertBlock(s, [i, o, r, a]);
  }
  _canPlace(e) {
    const { dragging: t } = this.state;
    for (const [s, i] of this.map.entries())
      if (s !== t && ia(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [s, i] of this.map.entries())
      s !== e && ia(i, t) && (i[1] = t[1] + t[3], this._insertBlock(s, i));
  }
  _appendBlock(e, t, s, i) {
    if (s >= 0 && i >= 0) {
      if (this._canPlace([s, i, e, t]))
        return [s, i];
      i = -1;
    }
    let o = s < 0 ? 0 : s, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, e, t])) {
        a = !0;
        break;
      }
      s < 0 ? (o += 1, o + e > l && (o = 0, r += 1)) : r += 1;
    }
    return [o, r];
  }
  componentDidMount() {
    this.loadNext(), d(window).on("scroll", this.tryLoadNext);
  }
  componentDidUpdate(e) {
    e.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  componentWillUnmount() {
    clearTimeout(this._loadTimer), d(window).off("scroll", this.tryLoadNext);
  }
  render() {
    const { blocks: e, height: t } = this._layout(), { cellHeight: s, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: t * s },
        ref: this._ref,
        children: e.map((r, a) => {
          const { id: l, menu: h, content: u, title: c } = r, [p, m, g, y] = o.get(l) || [0, 0, r.width, r.height];
          return /* @__PURE__ */ f(
            cu,
            {
              id: l,
              index: a,
              left: `${100 * p / i}%`,
              top: s * m,
              width: `${100 * g / i}%`,
              height: s * y,
              content: u,
              title: c,
              onDragStart: this._handleDragStart,
              onDragEnd: this._handleDragEnd,
              onMenuBtnClick: h ? this._handleMenuClick : void 0
            },
            r.id
          );
        })
      }
    ) });
  }
}, qs.defaultProps = {
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
}, qs);
const xi = class xi extends z {
};
xi.NAME = "Dashboard", xi.Component = hu;
let oa = xi;
var Vt, Ut;
class ra extends O {
  constructor(t) {
    super(t);
    C(this, Vt, void 0);
    C(this, Ut, void 0);
    $(this, Vt, 0), $(this, Ut, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (b(this, Vt) && cancelAnimationFrame(b(this, Vt)), $(this, Vt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), $(this, Vt, 0);
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
    const { scrollSize: t, clientSize: s } = this.props;
    return Math.max(0, t - s);
  }
  get barSize() {
    const { clientSize: t, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(t * t / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: t } = this.props;
    t && ($(this, Ut, typeof t == "string" ? document : t.current), b(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), b(this, Ut) && b(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    const { onScroll: s } = this.props;
    s && s(t, this.props.type ?? "vert");
  }
  render() {
    const {
      clientSize: t,
      type: s,
      size: i = 12,
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: u
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, y = {};
    return s === "horz" ? (g.height = i, g.width = t, y.width = this.barSize, y.left = Math.round(Math.min(c, p) * (t - y.width) / c)) : (g.width = i, g.height = t, y.height = this.barSize, y.top = Math.round(Math.min(c, p) * (t - y.height) / c)), /* @__PURE__ */ f(
      "div",
      {
        className: N("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
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
const Sn = /* @__PURE__ */ new Map(), Tn = [];
function Cl(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && Sn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Sn.set(t, n), e != null && e.buildIn && !Tn.includes(t) && Tn.push(t);
}
function Ot(n, e) {
  Cl(n, e);
  const t = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...o } = n;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return t.plugin = n, t;
}
function $l(n) {
  return Sn.delete(n);
}
function uu(n) {
  if (typeof n == "string") {
    const e = Sn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function xl(n, e, t) {
  return e.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = uu(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && xl(n, i.plugins, t), n.push(i), t.add(i.name)));
  }), n;
}
function du(n = [], e = !0) {
  return e && Tn.length && n.unshift(...Tn), n != null && n.length ? xl([], n, /* @__PURE__ */ new Set()) : [];
}
function aa() {
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
function fu(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function la(n, e) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof e == "number" && (typeof n != "number" || isNaN(n)) && (n = e), n;
}
function Zi(n, e = !1) {
  if (!n.list.length)
    return;
  if (n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const s = n.width - n.totalWidth;
    if (!e && s > 0 || e && s !== 0) {
      const i = n.flexList.length ? n.flexList : n.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[s < 0 ? "max" : "min"](s, Math.ceil(s * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let t = 0;
  n.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = t, t += s.realWidth;
  });
}
function pu(n, e, t, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (w) => (typeof w == "function" && (w = w.call(n)), w = la(w, 0), w < 1 && (w = Math.round(w * s)), w), u = {
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
  }, p = {
    ...u,
    list: [],
    flexList: [],
    widthSetting: h(l)
  }, m = [], g = {};
  let y = !1;
  const v = [], _ = {};
  if (t.forEach((w) => {
    const { colTypes: x, onAddCol: k } = w;
    x && Object.entries(x).forEach(([E, M]) => {
      _[E] || (_[E] = []), _[E].push(M);
    }), k && v.push(k);
  }), e.cols.forEach((w) => {
    if (w.hidden)
      return;
    const { type: x = "", name: k } = w, E = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...w,
      type: x
    }, M = {
      name: k,
      type: x,
      setting: E,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, I = _[x];
    I && I.forEach((H) => {
      const W = typeof H == "function" ? H.call(n, E) : H;
      W && Object.assign(E, W, w);
    });
    const { fixed: R, flex: A, minWidth: F = o, maxWidth: P = r } = E, D = la(E.width || i, i);
    M.flex = A === !0 ? 1 : typeof A == "number" ? A : 0, M.width = fu(D < 1 ? Math.round(D * s) : D, F, P), v.forEach((H) => H.call(n, M)), m.push(M), g[M.name] = M;
    const T = R ? R === "left" ? c : p : u;
    T.list.push(M), T.totalWidth += M.width, T.width = T.totalWidth, M.flex && T.flexList.push(M), typeof E.order == "number" && (y = !0);
  }), y) {
    const w = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    m.sort(w), c.list.sort(w), u.list.sort(w), p.list.sort(w);
  }
  return Zi(c, !0), Zi(p, !0), u.widthSetting = s - c.width - p.width, Zi(u), {
    list: m,
    map: g,
    left: c,
    center: u,
    right: p
  };
}
function mu({ col: n, className: e, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...p }) {
  var D;
  const m = {
    left: u ?? n.left,
    top: c ?? s.top,
    width: h ?? n.realWidth,
    height: t,
    ...r
  }, { align: g, border: y } = n.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...o
  }, _ = ["dtable-cell", l, e, n.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", n.setting.cellClass], x = (D = s.data) == null ? void 0 : D[n.name], k = [a ?? x ?? ""], E = i ? i(k, { row: s, col: n, value: x }, X) : k, M = [], I = [], R = {}, A = {};
  let F = "div";
  E == null || E.forEach((T) => {
    if (typeof T == "object" && T && !Z(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const H = T.outer ? M : I;
      T.html ? H.push(/* @__PURE__ */ f("div", { className: N("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? m : v, T.style), T.className && (T.outer ? _ : w).push(T.className), T.children && H.push(T.children), T.attrs && Object.assign(T.outer ? R : A, T.attrs)), T.tagName && !T.outer && (F = T.tagName);
    } else
      I.push(T);
  });
  const P = F;
  return /* @__PURE__ */ f(
    "div",
    {
      className: N(_),
      style: m,
      "data-col": n.name,
      "data-row": s.id,
      "data-type": n.type || null,
      ...p,
      ...R,
      children: [
        I.length > 0 && /* @__PURE__ */ f(P, { className: N(w), style: v, ...A, children: I }),
        M
      ]
    }
  );
}
function Ji({
  rows: n = [],
  cols: e,
  rowHeight: t,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: u = mu,
  onRenderCell: c
}) {
  var y;
  const p = Array.isArray(n) ? n : [n], m = ((y = p[0]) == null ? void 0 : y.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: N("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + m }, children: p.reduce((v, _, w) => {
        const x = e.length;
        return e.forEach((k, E) => {
          v.push(
            /* @__PURE__ */ f(
              u,
              {
                className: N(
                  `is-${_.index % 2 ? "odd" : "even"}-row`,
                  E ? "" : "is-first-in-row",
                  E === x - 1 ? "is-last-in-row" : "",
                  w ? "" : "is-first-row",
                  w === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: _,
                top: _.top - m,
                height: t,
                onRenderCell: c
              },
              `${_.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function ca({
  top: n,
  height: e,
  rowHeight: t,
  rows: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: u,
  onRenderCell: c
}) {
  let p = null;
  i.list.length && (p = /* @__PURE__ */ f(
    Ji,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: t,
      onRenderCell: c
    },
    "left"
  ));
  let m = null;
  o.list.length && (m = /* @__PURE__ */ f(
    Ji,
    {
      rows: s,
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
  return r.list.length && (g = /* @__PURE__ */ f(
    Ji,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: t,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: N("dtable-block", h),
      style: { ...u, top: n, height: e },
      children: [
        p,
        m,
        g
      ]
    }
  );
}
var qt, He, Nt, _t, Yt, Q, vt, lt, le, Ys, Oe, ce, wt, he, ue, ki, kl, Ei, El, Si, Sl, Ti, Tl, Ks, $o, Fe, Be, Gs, Xs, Zs, Js, We, cn, Ni, Nl, Mi, Ml, Di, Dl, qe;
let gu = (qe = class extends O {
  constructor(t) {
    super(t);
    C(this, ki);
    C(this, Ei);
    C(this, Si);
    C(this, Ti);
    C(this, Ks);
    C(this, We);
    C(this, Ni);
    C(this, Mi);
    C(this, Di);
    C(this, qt, void 0);
    C(this, He, void 0);
    C(this, Nt, void 0);
    C(this, _t, void 0);
    C(this, Yt, void 0);
    C(this, Q, void 0);
    C(this, vt, void 0);
    C(this, lt, void 0);
    C(this, le, void 0);
    C(this, Ys, void 0);
    C(this, Oe, void 0);
    C(this, ce, void 0);
    C(this, wt, void 0);
    C(this, he, void 0);
    C(this, ue, void 0);
    C(this, Fe, void 0);
    C(this, Be, void 0);
    C(this, Gs, void 0);
    C(this, Xs, void 0);
    C(this, Zs, void 0);
    C(this, Js, void 0);
    this.ref = q(), $(this, qt, 0), $(this, Nt, !1), $(this, Q, []), $(this, lt, /* @__PURE__ */ new Map()), $(this, le, {}), $(this, Oe, []), $(this, ce, { in: !1 }), this.updateLayout = () => {
      b(this, qt) && cancelAnimationFrame(b(this, qt)), $(this, qt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), $(this, qt, 0);
      }));
    }, $(this, wt, (s, i) => {
      i = i || s.type;
      const o = b(this, lt).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, s) === !1) {
            s.stopPropagation(), s.preventDefault();
            break;
          }
      }
    }), $(this, he, (s) => {
      b(this, wt).call(this, s, `window_${s.type}`);
    }), $(this, ue, (s) => {
      b(this, wt).call(this, s, `document_${s.type}`);
    }), $(this, Fe, (s, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), s[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return b(this, Q).forEach((h) => {
        h[l] && (s = h[l].call(this, s, i, o));
      }), this.options[l] && (s = this.options[l].call(this, s, i, o)), a.setting[l] && (s = a.setting[l].call(this, s, i, o)), s;
    }), $(this, Be, (s, i) => {
      i === "horz" ? this.scroll({ scrollLeft: s }) : this.scroll({ scrollTop: s });
    }), $(this, Gs, (s) => {
      var l, h, u;
      const i = this.getPointerInfo(s);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, s, { colName: r, element: a }), b(this, Q).forEach((c) => {
          var p;
          (p = c.onHeaderCellClick) == null || p.call(this, s, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((p) => p.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const p of b(this, Q))
            if (((u = p.onCellClick) == null ? void 0 : u.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), $(this, Xs, (s) => {
      const i = s.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), $(this, Zs, (s) => {
      const i = d(s.target).closest(".dtable-cell");
      if (!i.length)
        return L(this, We, cn).call(this, !1);
      L(this, We, cn).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), $(this, Js, () => {
      L(this, We, cn).call(this, !1);
    }), $(this, He, t.id ?? `dtable-${hl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Yt, Object.freeze(du(t.plugins))), b(this, Yt).forEach((s) => {
      var a;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(b(this, le), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = b(this, vt)) == null ? void 0 : t.options) || b(this, _t) || aa();
  }
  get plugins() {
    return b(this, Q);
  }
  get layout() {
    return b(this, vt);
  }
  get id() {
    return b(this, He);
  }
  get data() {
    return b(this, le);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return b(this, ce);
  }
  componentWillReceiveProps() {
    $(this, _t, void 0);
  }
  componentDidMount() {
    b(this, Nt) ? this.forceUpdate() : L(this, Ks, $o).call(this), b(this, Q).forEach((s) => {
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", b(this, Gs)), this.on("keydown", b(this, Xs));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", b(this, Zs)), this.on("mouseleave", b(this, Js))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: s } = this;
        if (s) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(s), $(this, Ys, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    b(this, Q).forEach((s) => {
      var i;
      (i = s.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    b(this, Nt) ? L(this, Ks, $o).call(this) : b(this, Q).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = b(this, Ys)) == null || s.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of b(this, lt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, he)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, ue)) : t.removeEventListener(i, b(this, wt));
    b(this, Q).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), b(this, Yt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, le, {}), b(this, lt).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = b(this, lt).get(t);
    o ? o.push(s) : (b(this, lt).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), b(this, he)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), b(this, ue)) : (r = this.element) == null || r.addEventListener(t, b(this, wt)));
  }
  off(t, s, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = b(this, lt).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (b(this, lt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), b(this, he)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), b(this, ue)) : (a = this.element) == null || a.removeEventListener(t, b(this, wt)));
  }
  emitCustomEvent(t, s) {
    b(this, wt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
  }
  scroll(t, s) {
    const { scrollLeft: i, scrollTop: o, rowsHeightTotal: r, rowsHeight: a, rowHeight: l, cols: { center: { totalWidth: h, width: u } } } = this.layout, { to: c } = t;
    let { scrollLeft: p, scrollTop: m } = t;
    if (c === "up" || c === "down")
      m = o + (c === "down" ? 1 : -1) * Math.floor(a / l) * l;
    else if (c === "left" || c === "right")
      p = i + (c === "right" ? 1 : -1) * u;
    else if (c === "top")
      m = 0;
    else if (c === "bottom")
      m = r - a;
    else if (c === "begin")
      p = 0;
    else if (c === "end")
      p = h - u;
    else {
      const { offsetLeft: y, offsetTop: v } = t;
      typeof y == "number" && (p = i + y), typeof v == "number" && (p = o + v);
    }
    const g = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, h - u)), p !== i && (g.scrollLeft = p)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - a)), m !== o && (g.scrollTop = m)), Object.keys(g).length ? (this.setState(g, () => {
      var y;
      (y = this.options.onScroll) == null || y.call(this, g), s == null || s.call(this, !0);
    }), !0) : (s == null || s.call(this, !1), !1);
  }
  getColInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    const { cols: s } = this.layout;
    return typeof t == "number" ? s.list[t] : s.map[t];
  }
  getRowInfo(t) {
    if (t === void 0)
      return;
    if (typeof t == "object")
      return t;
    if (t === -1 || t === "HEADER")
      return { id: "HEADER", index: -1, top: 0 };
    const { rows: s, rowsMap: i, allRows: o } = this.layout;
    return typeof t == "number" ? s[t] : i[t] || o.find((r) => r.id === t);
  }
  getCellValue(t, s) {
    var l;
    const i = typeof t == "object" ? t : this.getRowInfo(t);
    if (!i)
      return;
    const o = typeof s == "object" ? s : this.getColInfo(s);
    if (!o)
      return;
    let r = i.id === "HEADER" ? o.setting.title : (l = i.data) == null ? void 0 : l[o.name];
    const { cellValueGetter: a } = this.options;
    return a && (r = a.call(this, i, o, r)), r;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, s) {
    if (!b(this, _t))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, vt, void 0);
    else if (i === "options") {
      if ($(this, _t, void 0), !b(this, vt))
        return;
      $(this, vt, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), s);
  }
  getPointerInfo(t) {
    const s = t.target;
    if (!s || s.closest(".no-cell-event"))
      return;
    const i = d(s).closest(".dtable-cell");
    if (!i.length)
      return;
    const o = i.attr("data-row"), r = i.attr("data-col");
    if (!(typeof r != "string" || typeof o != "string"))
      return {
        cellElement: i[0],
        colName: r,
        rowID: o,
        target: s
      };
  }
  i18n(t, s, i) {
    return K(b(this, Oe), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = L(this, Di, Dl).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", s, {
      "dtable-hover-row": i,
      "dtable-hover-col": o,
      "dtable-hover-cell": r,
      "dtable-bordered": a,
      "dtable-striped": l,
      "scrollbar-hover": h
    }], p = [];
    return t && (u.width = t.width, u.height = t.height, c.push({
      "dtable-scrolled-down": t.scrollTop > 0,
      "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
      "dtable-scrolled-right": t.scrollLeft > 0,
      "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
    }), p.push(
      L(this, ki, kl).call(this, t),
      L(this, Ei, El).call(this, t),
      L(this, Si, Sl).call(this, t),
      L(this, Ti, Tl).call(this, t)
    ), b(this, Q).forEach((m) => {
      var y;
      const g = (y = m.onRender) == null ? void 0 : y.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && p.push(g.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: b(this, He),
        className: N(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
}, qt = new WeakMap(), He = new WeakMap(), Nt = new WeakMap(), _t = new WeakMap(), Yt = new WeakMap(), Q = new WeakMap(), vt = new WeakMap(), lt = new WeakMap(), le = new WeakMap(), Ys = new WeakMap(), Oe = new WeakMap(), ce = new WeakMap(), wt = new WeakMap(), he = new WeakMap(), ue = new WeakMap(), ki = new WeakSet(), kl = function(t) {
  const { header: s, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ f(
      ca,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: b(this, Fe)
      },
      "header"
    );
  const a = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    no,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, Ei = new WeakSet(), El = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ f(
    ca,
    {
      className: "dtable-body",
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: b(this, Fe)
    },
    "body"
  );
}, Si = new WeakSet(), Sl = function(t) {
  let { footer: s } = t;
  if (typeof s == "function" && (s = s.call(this, t)), !s)
    return null;
  const i = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    no,
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
}, Ti = new WeakSet(), Tl = function(t) {
  const s = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: p } = t, { scrollbarSize: m = 12, horzScrollbarPos: g } = this.options;
  return a > r && s.push(
    /* @__PURE__ */ f(
      ra,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: b(this, Be),
        left: o,
        bottom: (g === "inside" ? 0 : -m) + c,
        size: m,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: p + h } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: p + h } })
  ), u > h && s.push(
    /* @__PURE__ */ f(
      ra,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: b(this, Be),
        right: 0,
        size: m,
        top: p,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, Ks = new WeakSet(), $o = function() {
  var t;
  $(this, Nt, !1), (t = this.options.afterRender) == null || t.call(this), b(this, Q).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Fe = new WeakMap(), Be = new WeakMap(), Gs = new WeakMap(), Xs = new WeakMap(), Zs = new WeakMap(), Js = new WeakMap(), We = new WeakSet(), cn = function(t) {
  const { element: s, options: i } = this;
  if (!s)
    return;
  const o = d(s), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = b(this, ce);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), $(this, ce, r);
}, Ni = new WeakSet(), Nl = function() {
  if (b(this, _t))
    return !1;
  const s = { ...aa(), ...b(this, Yt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, _t, s), $(this, Q, b(this, Yt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = s;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, s) : a)), (!r || r(l)) && (l !== s && Object.assign(s, l), i.push(o)), i;
  }, [])), $(this, Oe, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Mi = new WeakSet(), Ml = function() {
  var F, P;
  const { plugins: t } = this;
  let s = b(this, _t);
  const i = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((D) => {
    var H;
    const T = (H = D.beforeLayout) == null ? void 0 : H.call(this, s);
    T && (s = { ...s, ...T }), Object.assign(i, D.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: D } = this;
    if (D)
      r = D.clientWidth;
    else {
      $(this, Nt, !0);
      return;
    }
  }
  const a = pu(this, s, t, r), { data: l, rowKey: h = "id", rowHeight: u } = s, c = [], p = (D, T, H) => {
    var V, at;
    const W = { data: H ?? { [h]: D }, id: D, index: c.length, top: 0 };
    if (H || (W.lazy = !0), c.push(W), ((V = s.onAddRow) == null ? void 0 : V.call(this, W, T)) !== !1) {
      for (const Ke of t)
        if (((at = Ke.onAddRow) == null ? void 0 : at.call(this, W, T)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let D = 0; D < l; D++)
      p(`${D}`, D);
  else
    Array.isArray(l) && l.forEach((D, T) => {
      typeof D == "object" ? p(`${D[h] ?? ""}`, T, D) : p(`${D ?? ""}`, T);
    });
  let m = c;
  const g = {};
  if (s.onAddRows) {
    const D = s.onAddRows.call(this, m);
    D && (m = D);
  }
  for (const D of t) {
    const T = (F = D.onAddRows) == null ? void 0 : F.call(this, m);
    T && (m = T);
  }
  m.forEach((D, T) => {
    g[D.id] = D, D.index = T, D.top = D.index * u;
  });
  const { header: y, footer: v } = s, _ = y ? s.headerHeight || u : 0, w = v ? s.footerHeight || u : 0;
  let x = s.height, k = 0;
  const E = m.length * u, M = _ + w + E;
  if (typeof x == "function" && (x = x.call(this, M)), x === "auto")
    k = M;
  else if (typeof x == "object")
    k = Math.min(x.max, Math.max(x.min, M));
  else if (x === "100%") {
    const { parent: D } = this;
    if (D)
      k = D.clientHeight;
    else {
      k = 0, $(this, Nt, !0);
      return;
    }
  } else
    k = x;
  const I = k - _ - w, R = {
    options: s,
    allRows: c,
    width: r,
    height: k,
    rows: m,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: I,
    rowsHeightTotal: E,
    header: y,
    footer: v,
    footerGenerators: i,
    headerHeight: _,
    footerHeight: w,
    cols: a
  }, A = (P = s.onLayout) == null ? void 0 : P.call(this, R);
  A && Object.assign(R, A), t.forEach((D) => {
    if (D.onLayout) {
      const T = D.onLayout.call(this, R);
      T && Object.assign(R, T);
    }
  }), $(this, vt, R);
}, Di = new WeakSet(), Dl = function() {
  (L(this, Ni, Nl).call(this) || !b(this, vt)) && L(this, Mi, Ml).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: s } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, s.totalWidth - s.width), i);
  let o = 0;
  s.list.forEach((v) => {
    v.left = o, o += v.realWidth, v.visible = v.left + v.realWidth >= i && v.left <= i + s.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), p = u + a, m = Math.min(l.length, Math.ceil(p / h)), g = [], { rowDataGetter: y } = this.options;
  for (let v = c; v < m; v++) {
    const _ = l[v];
    _.lazy && y && (_.data = y([_.id])[0], _.lazy = !1), g.push(_);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, qe.addPlugin = Cl, qe.removePlugin = $l, qe);
const yu = {
  html: { component: Qs }
}, bu = {
  name: "custom",
  onRenderCell(n, e) {
    const { col: t } = e;
    let { custom: s } = t.setting;
    if (typeof s == "function" && (s = s.call(this, e)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: Qs,
        props: { html: G(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(yu[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && d.extend(u, typeof m == "function" ? m.call(this, e) : m), l = p.component || l;
        }
      }, { props: {} });
      const c = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(c, { ...u }) };
    }), n;
  }
}, _u = Ot(bu);
function Il(n, e, t, s) {
  if (typeof n == "function" && (n = n(e)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return t;
  const { url: i, ...o } = n, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: G(i, e.row.data), ...s, ...o, ...a, children: t });
}
function Xo(n, e, t) {
  var s;
  if (n != null)
    return t = t ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof n == "function" ? n(t, e) : G(n, t);
}
function Rl(n, e, t, s) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), n === !1 ? t : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(t, e)), et(t, n, s ?? t))) : s ?? t;
}
function Al(n, e) {
  const { link: t } = e.col.setting, s = Il(t, e, n[0]);
  return s && (n[0] = s), n;
}
function Ll(n, e) {
  const { format: t } = e.col.setting;
  return t && (n[0] = Xo(t, e, n[0])), n;
}
function Pl(n, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? n[0] = t(n[0], e) : typeof t == "object" && t && (n[0] = t[n[0]] ?? n[0]), n;
}
function Hl(n, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = t, invalidDate: i } = e.col.setting;
  return n[0] = Rl(s, e, n[0], i), n;
}
function xo(n, e, t = !1) {
  const { html: s = t } = e.col.setting;
  if (s === !1)
    return n;
  const i = n[0], o = s === !0 ? i : Xo(s, e, i);
  return n[0] = {
    html: o
  }, n;
}
const vu = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, e) {
        return xo(n, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: s = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, r = (t - s) / 2, a = t / 2, l = n[0];
        return n[0] = /* @__PURE__ */ f("svg", { width: t, height: t, children: [
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ f("circle", { cx: a, cy: a, r, "stroke-width": s, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ f("text", { x: a, y: a + s, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
        ] }), n;
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
  onRenderCell(n, e) {
    const { formatDate: t, html: s, hint: i } = e.col.setting;
    if (t && (n = Hl(n, e, t)), n = Pl(n, e), n = Ll(n, e), s ? n = xo(n, e) : n = Al(n, e), i) {
      let o = n[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = G(i, e.row.data)), n.push({ attrs: { title: o } });
    }
    return n;
  }
}, wu = Ot(vu, { buildIn: !0 });
function Cu(n, e, t = !1) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!s[h] === u || (u ? s[h] = !0 : delete s[h], i[h] = u);
  };
  if (n === void 0 ? (e === void 0 && (e = !Ol.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!e);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((h) => {
    r(h, e ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, i, s);
    h && Object.keys(h).forEach((u) => {
      h[u] ? s[u] = !0 : delete s[u];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var u;
      (u = this.options.onCheckChange) == null || u.call(this, i);
    });
  }
  return i;
}
function $u(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Ol() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === n;
}
function xu() {
  return Object.keys(this.state.checkedRows);
}
function ku(n) {
  const { checkable: e } = this.options;
  n === void 0 && (n = !e), e !== n && this.setState({ forceCheckable: n });
}
function ha(n, e, t = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${n ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const ua = 'input[type="checkbox"],.dtable-checkbox', Eu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: ha
  },
  when: (n) => !!n.checkable,
  options(n) {
    const { forceCheckable: e } = this.state;
    return e !== void 0 ? n.checkable = e : n.checkable === "auto" && (n.checkable = !!n.cols.some((t) => t.checkbox)), n;
  },
  state() {
    return { checkedRows: {} };
  },
  methods: {
    toggleCheckRows: Cu,
    isRowChecked: $u,
    isAllRowChecked: Ol,
    getChecks: xu,
    toggleCheckable: ku
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: ha(n) })
      ];
    },
    checkedInfo(n, e) {
      const t = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ f("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(n, { row: e, col: t }) {
    var h;
    const { id: s } = e, { canRowCheckable: i } = this.options, o = i ? i.call(this, s) : !0;
    if (!o)
      return n;
    const { checkbox: r } = t.setting, a = typeof r == "function" ? r.call(this, s) : r, l = this.isRowChecked(s);
    if (a) {
      const u = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, s, o === "disabled");
      n.unshift(u), n.push({ outer: !0, className: "has-checkbox" });
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var r;
    const { id: s } = e, { checkbox: i } = t.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s);
      n.unshift(l), n.push({ outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!e)
      return;
    const t = e.closest(ua);
    t && (this.toggleCheckRows(t.checked), n.stopPropagation());
  },
  onCellClick(n, { rowID: e }) {
    const t = d(n.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(ua).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, Su = Ot(Eu);
var Fl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Fl || {});
function Nn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, s = e.children && t && t[n];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = Nn.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Nn.call(this, e.parent).level + 1 : 0, e;
}
function Tu(n) {
  return n !== void 0 ? Nn.call(this, n) : this.data.nestedMap;
}
function Nu(n, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !Bl.call(this)), e) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (t[o] = !0);
    } else
      t = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    e === void 0 && (e = !t[i[0]]), i.forEach((o) => {
      const r = s.get(o);
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
function Bl() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Wl(n, e = 0, t, s = 0) {
  var i;
  t || (t = [...n.keys()]);
  for (const o of t) {
    const r = n.get(o);
    r && (r.level === s && (r.order = e++), (i = r.children) != null && i.length && (e = Wl(n, e, r.children, s + 1)));
  }
  return e;
}
function zl(n, e, t, s) {
  const i = n.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, zl(n, o, t, s);
  }), i;
}
function jl(n, e, t, s, i) {
  var a;
  const o = n.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return t === h;
  })) && (s[e] = t), o.parent && jl(n, o.parent, t, s, i);
}
const Mu = {
  name: "nested",
  defaultOptions: {
    nested: "auto",
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 20,
    canSortTo(n, e) {
      const { nestedMap: t } = this.data, s = t.get(n.id), i = t.get(e.id);
      return (s == null ? void 0 : s.parent) === (i == null ? void 0 : i.parent);
    },
    beforeCheckRows(n, e, t) {
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const s = {};
      return Object.entries(e).forEach(([i, o]) => {
        const r = zl(this, i, o, s);
        r != null && r.parent && jl(this, r.parent, o, s, t);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((e) => e.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Tu,
    toggleRow: Nu,
    isAllCollapsed: Bl,
    getNestedRowInfo: Nn
  },
  beforeLayout() {
    var n;
    (n = this.data.nestedMap) == null || n.clear();
  },
  onAddRow(n) {
    var i, o;
    const { nestedMap: e } = this.data, t = String((i = n.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = e.get(n.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = t === "0" ? void 0 : t, (o = n.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), e.set(n.id, s), t) {
      let r = e.get(t);
      r || (r = {
        state: "",
        level: 0
      }, e.set(t, r)), r.children || (r.children = []), r.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter(
      (e) => this.getNestedRowInfo(e.id).state !== "hidden"
      /* hidden */
    ), Wl(this.data.nestedMap), n.sort((e, t) => {
      const s = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(t.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? e.index - t.index : o;
    }), n;
  },
  onRenderCell(n, { col: e, row: t }) {
    var a;
    const { id: s, data: i } = t, { nestedToggle: o } = e.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && n.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, e, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.unshift(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: e, col: t }) {
    var i;
    const { id: s } = e;
    return t.setting.nestedToggle && n.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, t, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const e = n.target;
    if (!(!e || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: e }) {
    const t = n.target;
    if (!(!t || !this.getNestedRowInfo(e).children || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow(e), !0;
  }
}, Du = Ot(Mu);
function Qi(n, { row: e, col: t }) {
  const { data: s } = e, i = s ? s[t.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (s ? s[h] : i) || n[0], c = {
    size: "xs",
    className: N(o, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: u,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (n[0] = /* @__PURE__ */ f(ul, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: p } = t.setting, m = typeof p == "function" ? p(t, e) : p;
    n[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      n[0],
      /* @__PURE__ */ f("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (n[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ f("span", { children: u })
    ] }));
  return n;
}
const Iu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: Qi
    },
    avatarBtn: {
      onRenderCell: Qi
    },
    avatarName: {
      onRenderCell: Qi
    }
  }
}, Ru = Ot(Iu, { buildIn: !0 }), Au = {
  name: "sort-type",
  onRenderHeaderCell(n, e) {
    const { col: t } = e, { sortType: s } = t.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      n.push(
        /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        n[0] = /* @__PURE__ */ f("a", { href: G(a, { ...t.setting, sortType: r }), ...l, children: n[0] });
      }
    }
    return n;
  }
}, Lu = Ot(Au, { buildIn: !0 }), to = (n) => {
  n.length !== 1 && n.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === n[t - 1].setting.group || (e.setting.border = "left");
  });
}, Pu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = n;
    to(e.left.list), to(e.center.list), to(e.right.list);
  }
}, Hu = Ot(Pu), Ou = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: e } = this.options;
    if (!e)
      return;
    const { cellSpanMap: t, overlayedCellSet: s } = this.data, { rows: i, cols: o, rowHeight: r } = n;
    t.clear(), s.clear();
    const a = (l, h, u) => {
      const { index: c } = h;
      l.forEach((p, m) => {
        const { index: g } = p, y = `C${g}R${c}`;
        if (s.has(y))
          return;
        const v = e.call(this, { row: h, col: p });
        if (!v)
          return;
        const _ = Math.min(v.colSpan || 1, l.length - m), w = Math.min(v.rowSpan || 1, i.length - u);
        if (_ <= 1 && w <= 1)
          return;
        let x = 0;
        for (let k = 0; k < _; k++) {
          x += l[m + k].realWidth;
          for (let E = 0; E < w; E++) {
            const M = `C${g + k}R${c + E}`;
            M !== y && s.add(M);
          }
        }
        t.set(y, {
          colSpan: _,
          rowSpan: w,
          width: x,
          height: r * w
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((u) => {
        a(o[u].list, l, h);
      });
    });
  },
  onRenderCell(n, { row: e, col: t }) {
    const s = `C${t.index}R${e.index}`;
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
}, Fu = Ot(Ou), Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Fl,
  avatar: Ru,
  cellspan: Fu,
  checkable: Su,
  custom: _u,
  group: Hu,
  nested: Du,
  renderDatetime: Rl,
  renderDatetimeCell: Hl,
  renderFormat: Xo,
  renderFormatCell: Ll,
  renderHtmlCell: xo,
  renderLink: Il,
  renderLinkCell: Al,
  renderMapCell: Pl,
  rich: wu,
  sortType: Lu
}, Symbol.toStringTag, { value: "Module" })), ne = class ne extends z {
};
ne.NAME = "DTable", ne.Component = gu, ne.definePlugin = Ot, ne.removePlugin = $l, ne.plugins = Bu;
let da = ne;
const Wu = "nav", hn = '[data-toggle="tab"]', zu = "active";
var de;
const nr = class nr extends rt {
  constructor() {
    super(...arguments);
    C(this, de, 0);
  }
  active(t) {
    const s = this.$element, i = s.find(hn);
    let o = t ? d(t).closest(hn) : i.filter(`.${zu}`);
    if (!o.length && (o = s.find(hn).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = d(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), b(this, de) && clearTimeout(b(this, de)), $(this, de, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), $(this, de, 0);
    }, 10)));
  }
};
de = new WeakMap(), nr.NAME = "Tabs";
let ko = nr;
d(document).on("click.tabs.zui", hn, (n) => {
  n.preventDefault();
  const e = d(n.target), t = e.closest(`.${Wu}`);
  t.length && ko.ensure(t).active(e);
});
d(() => {
  d(".disabled, [disabled]").on("click", (n) => {
    n.preventDefault(), n.stopImmediatePropagation();
  });
});
export {
  d as $,
  vr as ActionMenu,
  wr as ActionMenuNested,
  Or as Avatar,
  Fr as BtnGroup,
  Br as ColorPicker,
  rt as Component,
  z as ComponentFromReact,
  Co as ContextMenu,
  ee as CustomContent,
  no as CustomRender,
  da as DTable,
  oa as Dashboard,
  Ur as DatePicker,
  Yr as DatetimePicker,
  Ir as Draggable,
  xt as Dropdown,
  cl as EventBus,
  jo as HElement,
  Qs as HtmlContent,
  J as Icon,
  Cr as Menu,
  Mr as Messager,
  yo as Modal,
  Pt as ModalBase,
  En as ModalTrigger,
  Rr as Moveable,
  Gr as Nav,
  Xr as Pager,
  Zr as Pick,
  Jr as Picker,
  $t as Popover,
  io as PopoverPanel,
  Qr as Popovers,
  Dr as ProgressCircle,
  O as ReactComponent,
  ta as SearchBox,
  Lr as Sortable,
  ns as TIME_DAY,
  ko as Tabs,
  Vr as TimePicker,
  ea as Toolbar,
  Mt as Tooltip,
  sa as Tree,
  wo as Upload,
  na as UploadImgs,
  Ah as addDate,
  d as cash,
  N as classes,
  Ze as componentsMap,
  Hc as convertBytes,
  zc as create,
  j as createDate,
  Qc as createPortal,
  q as createRef,
  Lc as deepGet,
  Ac as deepGetPath,
  Vu as defineFn,
  pn as delay,
  Uu as dom,
  Pc as formatBytes,
  et as formatDate,
  td as formatDateSpan,
  G as formatString,
  Ia as getClassList,
  mn as getComponent,
  X as h,
  qu as hh,
  Kc as htm,
  K as i18n,
  nn as isSameDay,
  fl as isSameMonth,
  Xu as isSameWeek,
  po as isSameYear,
  Zu as isToday,
  Qu as isTomorrow,
  Z as isValidElement,
  Ju as isYesterday,
  Ar as nativeEvents,
  _n as render,
  Ya as renderCustomContent,
  Xc as renderCustomResult,
  Wc as shareData,
  Je as store,
  Ra as storeData,
  Aa as takeData
};
//# sourceMappingURL=zui.js.map
