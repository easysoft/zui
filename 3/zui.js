var Li = (s, e, t) => {
  if (!e.has(s))
    throw TypeError("Cannot " + t);
};
var y = (s, e, t) => (Li(s, e, "read from private field"), t ? t.call(s) : e.get(s)), _ = (s, e, t) => {
  if (e.has(s))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(s) : e.set(s, t);
}, $ = (s, e, t, n) => (Li(s, e, "write to private field"), n ? n.call(s, t) : e.set(s, t), t);
var P = (s, e, t) => (Li(s, e, "access private method"), t);
const At = document, as = window, Qr = At.documentElement, we = At.createElement.bind(At), ta = we("div"), Oi = we("table"), Ml = we("tbody"), Jo = we("tr"), { isArray: ki, prototype: ea } = Array, { concat: Rl, filter: bo, indexOf: na, map: sa, push: Il, slice: ia, some: wo, splice: Al } = ea, Dl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Ll = /<.+>/, Ol = /^\w+$/;
function vo(s, e) {
  const t = Hl(e);
  return !s || !t && !ge(e) && !V(e) ? [] : !t && Pl.test(s) ? e.getElementsByClassName(s.slice(1).replace(/\\/g, "")) : !t && Ol.test(s) ? e.getElementsByTagName(s) : e.querySelectorAll(s);
}
class Si {
  constructor(e, t) {
    if (!e)
      return;
    if (Ki(e))
      return e;
    let n = e;
    if (et(e)) {
      const i = t || At;
      if (n = Dl.test(e) && ge(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Ll.test(e) ? aa(e) : Ki(i) ? i.find(e) : et(i) ? f(i).find(e) : vo(e, i), !n)
        return;
    } else if (ve(e))
      return this.ready(e);
    (n.nodeType || n === as) && (n = [n]), this.length = n.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = n[i];
  }
  init(e, t) {
    return new Si(e, t);
  }
}
const k = Si.prototype, f = k.init;
f.fn = f.prototype = k;
k.length = 0;
k.splice = Al;
typeof Symbol == "function" && (k[Symbol.iterator] = ea[Symbol.iterator]);
function Ki(s) {
  return s instanceof Si;
}
function Ue(s) {
  return !!s && s === s.window;
}
function ge(s) {
  return !!s && s.nodeType === 9;
}
function Hl(s) {
  return !!s && s.nodeType === 11;
}
function V(s) {
  return !!s && s.nodeType === 1;
}
function Bl(s) {
  return !!s && s.nodeType === 3;
}
function Wl(s) {
  return typeof s == "boolean";
}
function ve(s) {
  return typeof s == "function";
}
function et(s) {
  return typeof s == "string";
}
function it(s) {
  return s === void 0;
}
function nn(s) {
  return s === null;
}
function oa(s) {
  return !isNaN(parseFloat(s)) && isFinite(s);
}
function _o(s) {
  if (typeof s != "object" || s === null)
    return !1;
  const e = Object.getPrototypeOf(s);
  return e === null || e === Object.prototype;
}
f.isWindow = Ue;
f.isFunction = ve;
f.isArray = ki;
f.isNumeric = oa;
f.isPlainObject = _o;
function U(s, e, t) {
  if (t) {
    let n = s.length;
    for (; n--; )
      if (e.call(s[n], n, s[n]) === !1)
        return s;
  } else if (_o(s)) {
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
f.each = U;
k.each = function(s) {
  return U(this, s);
};
k.empty = function() {
  return this.each((s, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function ls(...s) {
  const e = Wl(s[0]) ? s.shift() : !1, t = s.shift(), n = s.length;
  if (!t)
    return {};
  if (!n)
    return ls(e, f, t);
  for (let i = 0; i < n; i++) {
    const o = s[i];
    for (const r in o)
      e && (ki(o[r]) || _o(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), ls(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
f.extend = ls;
k.extend = function(s) {
  return ls(k, s);
};
const Fl = /\S+/g;
function Ei(s) {
  return et(s) ? s.match(Fl) || [] : [];
}
k.toggleClass = function(s, e) {
  const t = Ei(s), n = !it(e);
  return this.each((i, o) => {
    V(o) && U(t, (r, a) => {
      n ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
k.addClass = function(s) {
  return this.toggleClass(s, !0);
};
k.removeAttr = function(s) {
  const e = Ei(s);
  return this.each((t, n) => {
    V(n) && U(e, (i, o) => {
      n.removeAttribute(o);
    });
  });
};
function zl(s, e) {
  if (s) {
    if (et(s)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(s);
        return nn(t) ? void 0 : t;
      }
      return it(e) ? this : nn(e) ? this.removeAttr(s) : this.each((t, n) => {
        V(n) && n.setAttribute(s, e);
      });
    }
    for (const t in s)
      this.attr(t, s[t]);
    return this;
  }
}
k.attr = zl;
k.removeClass = function(s) {
  return arguments.length ? this.toggleClass(s, !1) : this.attr("class", "");
};
k.hasClass = function(s) {
  return !!s && wo.call(this, (e) => V(e) && e.classList.contains(s));
};
k.get = function(s) {
  return it(s) ? ia.call(this) : (s = Number(s), this[s < 0 ? s + this.length : s]);
};
k.eq = function(s) {
  return f(this.get(s));
};
k.first = function() {
  return this.eq(0);
};
k.last = function() {
  return this.eq(-1);
};
function jl(s) {
  return it(s) ? this.get().map((e) => V(e) || Bl(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = s);
  });
}
k.text = jl;
function Dt(s, e, t) {
  if (!V(s))
    return;
  const n = as.getComputedStyle(s, null);
  return t ? n.getPropertyValue(e) || void 0 : n[e] || s.style[e];
}
function vt(s, e) {
  return parseInt(Dt(s, e), 10) || 0;
}
function Zo(s, e) {
  return vt(s, `border${e ? "Left" : "Top"}Width`) + vt(s, `padding${e ? "Left" : "Top"}`) + vt(s, `padding${e ? "Right" : "Bottom"}`) + vt(s, `border${e ? "Right" : "Bottom"}Width`);
}
const Hi = {};
function Vl(s) {
  if (Hi[s])
    return Hi[s];
  const e = we(s);
  At.body.insertBefore(e, null);
  const t = Dt(e, "display");
  return At.body.removeChild(e), Hi[s] = t !== "none" ? t : "block";
}
function Qo(s) {
  return Dt(s, "display") === "none";
}
function ra(s, e) {
  const t = s && (s.matches || s.webkitMatchesSelector || s.msMatchesSelector);
  return !!t && !!e && t.call(s, e);
}
function Ti(s) {
  return et(s) ? (e, t) => ra(t, s) : ve(s) ? s : Ki(s) ? (e, t) => s.is(t) : s ? (e, t) => t === s : () => !1;
}
k.filter = function(s) {
  const e = Ti(s);
  return f(bo.call(this, (t, n) => e.call(t, n, t)));
};
function Qt(s, e) {
  return e ? s.filter(e) : s;
}
k.detach = function(s) {
  return Qt(this, s).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const Ul = /^\s*<(\w+)[^>]*>/, ql = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, tr = {
  "*": ta,
  tr: Ml,
  td: Jo,
  th: Jo,
  thead: Oi,
  tbody: Oi,
  tfoot: Oi
};
function aa(s) {
  if (!et(s))
    return [];
  if (ql.test(s))
    return [we(RegExp.$1)];
  const e = Ul.test(s) && RegExp.$1, t = tr[e] || tr["*"];
  return t.innerHTML = s, f(t.childNodes).detach().get();
}
f.parseHTML = aa;
k.has = function(s) {
  const e = et(s) ? (t, n) => vo(s, n).length : (t, n) => n.contains(s);
  return this.filter(e);
};
k.not = function(s) {
  const e = Ti(s);
  return this.filter((t, n) => (!et(s) || V(n)) && !e.call(n, t, n));
};
function Ot(s, e, t, n) {
  const i = [], o = ve(e), r = n && Ti(n);
  for (let a = 0, l = s.length; a < l; a++)
    if (o) {
      const h = e(s[a]);
      h.length && Il.apply(i, h);
    } else {
      let h = s[a][e];
      for (; h != null && !(n && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function la(s) {
  return s.multiple && s.options ? Ot(bo.call(s.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : s.value || "";
}
function Yl(s) {
  return arguments.length ? this.each((e, t) => {
    const n = t.multiple && t.options;
    if (n || ga.test(t.type)) {
      const i = ki(s) ? sa.call(s, String) : nn(s) ? [] : [String(s)];
      n ? U(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = it(s) || nn(s) ? "" : s;
  }) : this[0] && la(this[0]);
}
k.val = Yl;
k.is = function(s) {
  const e = Ti(s);
  return wo.call(this, (t, n) => e.call(t, n, t));
};
f.guid = 1;
function kt(s) {
  return s.length > 1 ? bo.call(s, (e, t, n) => na.call(n, e) === t) : s;
}
f.unique = kt;
k.add = function(s, e) {
  return f(kt(this.get().concat(f(s, e).get())));
};
k.children = function(s) {
  return Qt(f(kt(Ot(this, (e) => e.children))), s);
};
k.parent = function(s) {
  return Qt(f(kt(Ot(this, "parentNode"))), s);
};
k.index = function(s) {
  const e = s ? f(s)[0] : this[0], t = s ? this : f(e).parent().children();
  return na.call(t, e);
};
k.closest = function(s) {
  const e = this.filter(s);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(s) : e;
};
k.siblings = function(s) {
  return Qt(f(kt(Ot(this, (e) => f(e).parent().children().not(e)))), s);
};
k.find = function(s) {
  return f(kt(Ot(this, (e) => vo(s, e))));
};
const Kl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Gl = /^$|^module$|\/(java|ecma)script/i, Xl = ["type", "src", "nonce", "noModule"];
function Jl(s, e) {
  const t = f(s);
  t.filter("script").add(t.find("script")).each((n, i) => {
    if (Gl.test(i.type) && Qr.contains(i)) {
      const o = we("script");
      o.text = i.textContent.replace(Kl, ""), U(Xl, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function Zl(s, e, t, n, i) {
  n ? s.insertBefore(e, t ? s.firstChild : null) : s.nodeName === "HTML" ? s.parentNode.replaceChild(e, s) : s.parentNode.insertBefore(e, t ? s : s.nextSibling), i && Jl(e, s.ownerDocument);
}
function te(s, e, t, n, i, o, r, a) {
  return U(s, (l, h) => {
    U(f(h), (u, c) => {
      U(f(e), (p, m) => {
        const g = t ? c : m, b = t ? m : c, v = t ? u : p;
        Zl(g, v ? b.cloneNode(!0) : b, n, i, !v);
      }, a);
    }, r);
  }, o), e;
}
k.after = function() {
  return te(arguments, this, !1, !1, !1, !0, !0);
};
k.append = function() {
  return te(arguments, this, !1, !1, !0);
};
function Ql(s) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (it(s))
    return this;
  const e = /<script[\s>]/.test(s);
  return this.each((t, n) => {
    V(n) && (e ? f(n).empty().append(s) : n.innerHTML = s);
  });
}
k.html = Ql;
k.appendTo = function(s) {
  return te(arguments, this, !0, !1, !0);
};
k.wrapInner = function(s) {
  return this.each((e, t) => {
    const n = f(t), i = n.contents();
    i.length ? i.wrapAll(s) : n.append(s);
  });
};
k.before = function() {
  return te(arguments, this, !1, !0);
};
k.wrapAll = function(s) {
  let e = f(s), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
k.wrap = function(s) {
  return this.each((e, t) => {
    const n = f(s)[0];
    f(t).wrapAll(e ? n.cloneNode(!0) : n);
  });
};
k.insertAfter = function(s) {
  return te(arguments, this, !0, !1, !1, !1, !1, !0);
};
k.insertBefore = function(s) {
  return te(arguments, this, !0, !0);
};
k.prepend = function() {
  return te(arguments, this, !1, !0, !0, !0, !0);
};
k.prependTo = function(s) {
  return te(arguments, this, !0, !0, !0, !1, !1, !0);
};
k.contents = function() {
  return f(kt(Ot(this, (s) => s.tagName === "IFRAME" ? [s.contentDocument] : s.tagName === "TEMPLATE" ? s.content.childNodes : s.childNodes)));
};
k.next = function(s, e, t) {
  return Qt(f(kt(Ot(this, "nextElementSibling", e, t))), s);
};
k.nextAll = function(s) {
  return this.next(s, !0);
};
k.nextUntil = function(s, e) {
  return this.next(e, !0, s);
};
k.parents = function(s, e) {
  return Qt(f(kt(Ot(this, "parentElement", !0, e))), s);
};
k.parentsUntil = function(s, e) {
  return this.parents(e, s);
};
k.prev = function(s, e, t) {
  return Qt(f(kt(Ot(this, "previousElementSibling", e, t))), s);
};
k.prevAll = function(s) {
  return this.prev(s, !0);
};
k.prevUntil = function(s, e) {
  return this.prev(e, !0, s);
};
k.map = function(s) {
  return f(Rl.apply([], sa.call(this, (e, t) => s.call(e, t, e))));
};
k.clone = function() {
  return this.map((s, e) => e.cloneNode(!0));
};
k.offsetParent = function() {
  return this.map((s, e) => {
    let t = e.offsetParent;
    for (; t && Dt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Qr;
  });
};
k.slice = function(s, e) {
  return f(ia.call(this, s, e));
};
const tc = /-([a-z])/g;
function Co(s) {
  return s.replace(tc, (e, t) => t.toUpperCase());
}
k.ready = function(s) {
  const e = () => setTimeout(s, 0, f);
  return At.readyState !== "loading" ? e() : At.addEventListener("DOMContentLoaded", e), this;
};
k.unwrap = function() {
  return this.parent().each((s, e) => {
    if (e.tagName === "BODY")
      return;
    const t = f(e);
    t.replaceWith(t.children());
  }), this;
};
k.offset = function() {
  const s = this[0];
  if (!s)
    return;
  const e = s.getBoundingClientRect();
  return {
    top: e.top + as.pageYOffset,
    left: e.left + as.pageXOffset
  };
};
k.position = function() {
  const s = this[0];
  if (!s)
    return;
  const e = Dt(s, "position") === "fixed", t = e ? s.getBoundingClientRect() : this.offset();
  if (!e) {
    const n = s.ownerDocument;
    let i = s.offsetParent || n.documentElement;
    for (; (i === n.body || i === n.documentElement) && Dt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== s && V(i)) {
      const o = f(i).offset();
      t.top -= o.top + vt(i, "borderTopWidth"), t.left -= o.left + vt(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - vt(s, "marginTop"),
    left: t.left - vt(s, "marginLeft")
  };
};
const ca = {
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
k.prop = function(s, e) {
  if (s) {
    if (et(s))
      return s = ca[s] || s, arguments.length < 2 ? this[0] && this[0][s] : this.each((t, n) => {
        n[s] = e;
      });
    for (const t in s)
      this.prop(t, s[t]);
    return this;
  }
};
k.removeProp = function(s) {
  return this.each((e, t) => {
    delete t[ca[s] || s];
  });
};
const ec = /^--/;
function $o(s) {
  return ec.test(s);
}
const Bi = {}, { style: nc } = ta, sc = ["webkit", "moz", "ms"];
function ic(s, e = $o(s)) {
  if (e)
    return s;
  if (!Bi[s]) {
    const t = Co(s), n = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${sc.join(`${n} `)}${n}`.split(" ");
    U(i, (o, r) => {
      if (r in nc)
        return Bi[s] = r, !1;
    });
  }
  return Bi[s];
}
const oc = {
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
function ha(s, e, t = $o(s)) {
  return !t && !oc[s] && oa(e) ? `${e}px` : e;
}
function rc(s, e) {
  if (et(s)) {
    const t = $o(s);
    return s = ic(s, t), arguments.length < 2 ? this[0] && Dt(this[0], s, t) : s ? (e = ha(s, e, t), this.each((n, i) => {
      V(i) && (t ? i.style.setProperty(s, e) : i.style[s] = e);
    })) : this;
  }
  for (const t in s)
    this.css(t, s[t]);
  return this;
}
k.css = rc;
function ua(s, e) {
  try {
    return s(e);
  } catch {
    return e;
  }
}
const ac = /^\s+|\s+$/;
function er(s, e) {
  const t = s.dataset[e] || s.dataset[Co(e)];
  return ac.test(t) ? t : ua(JSON.parse, t);
}
function lc(s, e, t) {
  t = ua(JSON.stringify, t), s.dataset[Co(e)] = t;
}
function cc(s, e) {
  if (!s) {
    if (!this[0])
      return;
    const t = {};
    for (const n in this[0].dataset)
      t[n] = er(this[0], n);
    return t;
  }
  if (et(s))
    return arguments.length < 2 ? this[0] && er(this[0], s) : it(e) ? this : this.each((t, n) => {
      lc(n, s, e);
    });
  for (const t in s)
    this.data(t, s[t]);
  return this;
}
k.data = cc;
function da(s, e) {
  const t = s.documentElement;
  return Math.max(s.body[`scroll${e}`], t[`scroll${e}`], s.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
U([!0, !1], (s, e) => {
  U(["Width", "Height"], (t, n) => {
    const i = `${e ? "outer" : "inner"}${n}`;
    k[i] = function(o) {
      if (this[0])
        return Ue(this[0]) ? e ? this[0][`inner${n}`] : this[0].document.documentElement[`client${n}`] : ge(this[0]) ? da(this[0], n) : this[0][`${e ? "offset" : "client"}${n}`] + (o && e ? vt(this[0], `margin${t ? "Top" : "Left"}`) + vt(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
U(["Width", "Height"], (s, e) => {
  const t = e.toLowerCase();
  k[t] = function(n) {
    if (!this[0])
      return it(n) ? void 0 : this;
    if (!arguments.length)
      return Ue(this[0]) ? this[0].document.documentElement[`client${e}`] : ge(this[0]) ? da(this[0], e) : this[0].getBoundingClientRect()[t] - Zo(this[0], !s);
    const i = parseInt(n, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Dt(r, "boxSizing");
      r.style[t] = ha(t, i + (a === "border-box" ? Zo(r, !s) : 0));
    });
  };
});
const nr = "___cd";
k.toggle = function(s) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const n = Qo(t);
    (it(s) ? n : s) ? (t.style.display = t[nr] || "", Qo(t) && (t.style.display = Vl(t.tagName))) : n || (t[nr] = Dt(t, "display"), t.style.display = "none");
  });
};
k.hide = function() {
  return this.toggle(!1);
};
k.show = function() {
  return this.toggle(!0);
};
const sr = "___ce", xo = ".", ko = { focus: "focusin", blur: "focusout" }, fa = { mouseenter: "mouseover", mouseleave: "mouseout" }, hc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function So(s) {
  return fa[s] || ko[s] || s;
}
function Eo(s) {
  const e = s.split(xo);
  return [e[0], e.slice(1).sort()];
}
k.trigger = function(s, e) {
  if (et(s)) {
    const [n, i] = Eo(s), o = So(n);
    if (!o)
      return this;
    const r = hc.test(o) ? "MouseEvents" : "HTMLEvents";
    s = At.createEvent(r), s.initEvent(o, !0, !0), s.namespace = i.join(xo), s.___ot = n;
  }
  s.___td = e;
  const t = s.___ot in ko;
  return this.each((n, i) => {
    t && ve(i[s.___ot]) && (i[`___i${s.type}`] = !0, i[s.___ot](), i[`___i${s.type}`] = !1), i.dispatchEvent(s);
  });
};
function pa(s) {
  return s[sr] = s[sr] || {};
}
function uc(s, e, t, n, i) {
  const o = pa(s);
  o[e] = o[e] || [], o[e].push([t, n, i]), s.addEventListener(e, i);
}
function ma(s, e) {
  return !e || !wo.call(e, (t) => s.indexOf(t) < 0);
}
function cs(s, e, t, n, i) {
  const o = pa(s);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !ma(r, t) || n && n !== a)
        return !0;
      s.removeEventListener(e, l);
    }));
  else
    for (e in o)
      cs(s, e, t, n, i);
}
k.off = function(s, e, t) {
  if (it(s))
    this.each((n, i) => {
      !V(i) && !ge(i) && !Ue(i) || cs(i);
    });
  else if (et(s))
    ve(e) && (t = e, e = ""), U(Ei(s), (n, i) => {
      const [o, r] = Eo(i), a = So(o);
      this.each((l, h) => {
        !V(h) && !ge(h) && !Ue(h) || cs(h, a, r, e, t);
      });
    });
  else
    for (const n in s)
      this.off(n, s[n]);
  return this;
};
k.remove = function(s) {
  return Qt(this, s).detach().off(), this;
};
k.replaceWith = function(s) {
  return this.before(s).remove();
};
k.replaceAll = function(s) {
  return f(s).replaceWith(this), this;
};
function dc(s, e, t, n, i) {
  if (!et(s)) {
    for (const o in s)
      this.on(o, e, t, s[o], i);
    return this;
  }
  return et(e) || (it(e) || nn(e) ? e = "" : it(t) ? (t = e, e = "") : (n = t, t = e, e = "")), ve(n) || (n = t, t = void 0), n ? (U(Ei(s), (o, r) => {
    const [a, l] = Eo(r), h = So(a), u = a in fa, c = a in ko;
    h && this.each((p, m) => {
      if (!V(m) && !ge(m) && !Ue(m))
        return;
      const g = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !ma(l, b.namespace.split(xo)) || !e && (c && (b.target !== m || b.___ot === h) || u && b.relatedTarget && m.contains(b.relatedTarget)))
          return;
        let v = m;
        if (e) {
          let C = b.target;
          for (; !ra(C, e); )
            if (C === m || (C = C.parentNode, !C))
              return;
          v = C;
        }
        Object.defineProperty(b, "currentTarget", {
          configurable: !0,
          get() {
            return v;
          }
        }), Object.defineProperty(b, "delegateTarget", {
          configurable: !0,
          get() {
            return m;
          }
        }), Object.defineProperty(b, "data", {
          configurable: !0,
          get() {
            return t;
          }
        });
        const w = n.call(v, b, b.___td);
        i && cs(m, h, l, e, g), w === !1 && (b.preventDefault(), b.stopPropagation());
      };
      g.guid = n.guid = n.guid || f.guid++, uc(m, h, l, e, g);
    });
  }), this) : this;
}
k.on = dc;
function fc(s, e, t, n) {
  return this.on(s, e, t, n, !0);
}
k.one = fc;
const pc = /\r?\n/g;
function mc(s, e) {
  return `&${encodeURIComponent(s)}=${encodeURIComponent(e.replace(pc, `\r
`))}`;
}
const gc = /file|reset|submit|button|image/i, ga = /radio|checkbox/i;
k.serialize = function() {
  let s = "";
  return this.each((e, t) => {
    U(t.elements || [t], (n, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || gc.test(i.type) || ga.test(i.type) && !i.checked)
        return;
      const o = la(i);
      if (!it(o)) {
        const r = ki(o) ? o : [o];
        U(r, (a, l) => {
          s += mc(i.name, l);
        });
      }
    });
  }), s.slice(1);
};
window.$ = f;
function yc(s, e) {
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
function bc(s, e, t) {
  try {
    const n = yc(s, e), i = n[n.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function q(s, ...e) {
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
var To = /* @__PURE__ */ ((s) => (s[s.B = 1] = "B", s[s.KB = 1024] = "KB", s[s.MB = 1048576] = "MB", s[s.GB = 1073741824] = "GB", s[s.TB = 1099511627776] = "TB", s))(To || {});
function wc(s, e = 2, t) {
  return Number.isNaN(s) ? "?KB" : (t || (s < 1024 ? t = "B" : s < 1048576 ? t = "KB" : s < 1073741824 ? t = "MB" : s < 1099511627776 ? t = "GB" : t = "TB"), (s / To[t]).toFixed(e) + t);
}
const vc = (s) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  s = s.toUpperCase();
  const t = s.match(e);
  if (!t)
    return 0;
  const n = t[1];
  return s = s.replace(n, ""), Number.parseInt(s, 10) * To[n];
};
let No = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Wt;
function _c() {
  return No;
}
function Cc(s) {
  No = s.toLowerCase();
}
function ya(s, e) {
  Wt || (Wt = {}), typeof s == "string" && (s = { [s]: e ?? {} }), f.extend(!0, Wt, s);
}
function J(s, e, t, n, i, o) {
  Array.isArray(s) ? Wt && s.unshift(Wt) : s = Wt ? [Wt, s] : [s], typeof t == "string" && (o = i, i = n, n = t, t = void 0);
  const r = i || No;
  let a;
  for (const l of s) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Wt ? `${o}.${e}` : e;
    if (a = bc(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? n : t ? q(a, ...Array.isArray(t) ? t : [t]) : a;
}
function $c(s, e, t, n) {
  return J(void 0, s, e, t, n);
}
J.addLang = ya;
J.getLang = $c;
J.getCode = _c;
J.setCode = Cc;
ya({
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
function ba(...s) {
  const e = [], t = /* @__PURE__ */ new Map(), n = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return s.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ba(...i).forEach(n) : i && typeof i == "object" ? Object.entries(i).forEach(n) : typeof i == "string" && i.split(" ").forEach((o) => n(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const N = (...s) => ba(...s).reduce((e, [t, n]) => (n && e.push(t), e), []).join(" ");
f.classes = N;
f.fn.setClass = function(s, ...e) {
  return this.each((t, n) => {
    const i = f(n);
    s === !0 ? i.attr("class", N(i.attr("class"), ...e)) : i.addClass(N(s, ...e));
  });
};
const Ze = /* @__PURE__ */ new WeakMap();
function wa(s, e, t) {
  const n = Ze.has(s), i = n ? Ze.get(s) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!n && s instanceof Element && Object.assign(i, f(s).dataset(), i), Ze.set(s, i)) : Ze.delete(s);
}
function va(s, e, t) {
  let n = Ze.get(s) || {};
  return !t && s instanceof Element && (n = Object.assign({}, f(s).dataset(), n)), e === void 0 ? n : n[e];
}
f.fn.dataset = f.fn.data;
f.fn.data = function(...s) {
  if (!this.length)
    return;
  const [e, t] = s;
  return !s.length || s.length === 1 && typeof e == "string" ? va(this[0], e) : this.each((n, i) => wa(i, e, t));
};
f.fn.removeData = function(s = null) {
  return this.each((e, t) => wa(t, s));
};
f.fn._attr = f.fn.attr;
f.fn.extend({
  attr(...s) {
    const [e, t] = s;
    return !s.length || s.length === 1 && typeof e == "string" ? this._attr.apply(this, s) : typeof e == "object" ? (e && Object.keys(e).forEach((n) => {
      const i = e[n];
      i === null ? this.removeAttr(n) : this._attr(n, i);
    }), this) : t === null ? this.removeAttr(e) : this._attr(e, t);
  }
});
f.Event = (s, e) => {
  const [t, ...n] = s.split("."), i = new Event(t, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = n.join("."), i.___ot = t, i.___td = e, i;
};
const hs = (s, e) => new Promise((t) => {
  const n = window.setTimeout(t, s);
  e && e(n);
}), Qe = /* @__PURE__ */ new Map();
function us(s) {
  const { zui: e } = window;
  return (!Qe.size || s && !Qe.has(s.toUpperCase())) && Object.keys(e).forEach((t) => {
    const n = e[t];
    !n.NAME || !n.ZUI || Qe.set(t.toLowerCase(), n);
  }), s ? Qe.get(s.toLowerCase()) : void 0;
}
function xc(s, e, t) {
  const n = us(s);
  return n ? new n(e, t) : null;
}
function Su(s) {
  if (s) {
    const e = us(s);
    e && e.defineFn();
  } else
    us(), Qe.forEach((e) => {
      e.defineFn();
    });
}
f.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const e = f(this).dataset(), t = e.zui;
    delete e.zui, xc(t, this, e);
  }), this;
};
f.fn.zui = function(s, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof s != "string") {
    const i = va(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), s === !0 ? o : r;
  }
  const n = us(s);
  if (n)
    return e === !0 ? n.getAll(t) : n.query(t, e);
};
f(() => {
  f("body").zuiInit();
});
function Mo(s, e) {
  const t = f(s)[0];
  if (!t)
    return !1;
  let { viewport: n } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!n) {
    const { innerHeight: g, innerWidth: b } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    n = { left: 0, top: 0, width: b || w, height: g || v };
  }
  const { left: l, top: h, width: u, height: c } = n;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const p = i <= u && i + r >= l;
  return o <= c && o + a >= h && p;
}
f.fn.isVisible = function(s) {
  return this.each((e, t) => {
    Mo(t, s);
  });
};
function Ro(s, e, t = !1) {
  const n = f(s);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${f.guid++}`;
      n.append(`<script id="${i}">${e}<\/script>`), t && n.find(`#${i}`).remove();
    }
    return;
  }
  n.find("script").each((i, o) => {
    Ro(n, o.innerHTML), o.remove();
  });
}
f.runJS = (s, ...e) => (s = s.trim(), !s.startsWith("return ") && !s.endsWith(";") && (s = `return ${s}`), new Function(...e.map(([n]) => n), s)(...e.map(([, n]) => n)));
f.fn.runJS = function(s) {
  return this.each((e, t) => {
    Ro(t, s);
  });
};
function _a(s, e) {
  const t = f(s), { ifNeeded: n = !0, ...i } = e || {};
  return t.each((o, r) => {
    n && Mo(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
f.fn.scrollIntoView = function(s) {
  return this.each((e, t) => {
    _a(t, s);
  });
};
f.getScript = function(s, e, t) {
  return new Promise((n) => {
    const i = f(`script[src="${s}"]`), o = () => {
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
      o(), (f(r).dataset("loaded", !0).data("loadCalls") || []).forEach((l) => l()), f(r).removeData("loadCalls");
    }, r.src = s, f("head").append(r);
  });
};
const Eu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Mo,
  runJS: Ro,
  scrollIntoView: _a
}, Symbol.toStringTag, { value: "Module" }));
var Ni, W, Ca, X, ne, ir, $a, Gi, $e = {}, xa = [], kc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Io = Array.isArray;
function Kt(s, e) {
  for (var t in e)
    s[t] = e[t];
  return s;
}
function ka(s) {
  var e = s.parentNode;
  e && e.removeChild(s);
}
function G(s, e, t) {
  var n, i, o, r = {};
  for (o in e)
    o == "key" ? n = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ni.call(arguments, 2) : t), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ss(s, r, n, i, null);
}
function ss(s, e, t, n, i) {
  var o = { type: s, props: e, key: t, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ca };
  return i == null && W.vnode != null && W.vnode(o), o;
}
function Y() {
  return { current: null };
}
function Xe(s) {
  return s.children;
}
function B(s, e) {
  this.props = s, this.context = e;
}
function ds(s, e) {
  if (e == null)
    return s.__ ? ds(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var t; e < s.__k.length; e++)
    if ((t = s.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof s.type == "function" ? ds(s) : null;
}
function Sa(s) {
  var e, t;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, e = 0; e < s.__k.length; e++)
      if ((t = s.__k[e]) != null && t.__e != null) {
        s.__e = s.__c.base = t.__e;
        break;
      }
    return Sa(s);
  }
}
function or(s) {
  (!s.__d && (s.__d = !0) && ne.push(s) && !fs.__r++ || ir !== W.debounceRendering) && ((ir = W.debounceRendering) || $a)(fs);
}
function fs() {
  var s, e, t, n, i, o, r, a, l;
  for (ne.sort(Gi); s = ne.shift(); )
    s.__d && (e = ne.length, n = void 0, i = void 0, o = void 0, a = (r = (t = s).__v).__e, (l = t.__P) && (n = [], i = [], (o = Kt({}, r)).__v = r.__v + 1, Ao(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, n, a ?? ds(r), r.__h, i), Ma(n, r, i), r.__e != a && Sa(r)), ne.length > e && ne.sort(Gi));
  fs.__r = 0;
}
function Ea(s, e, t, n, i, o, r, a, l, h, u) {
  var c, p, m, g, b, v, w, C, x, T, S = 0, M = n && n.__k || xa, I = M.length, A = I, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = e[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? ss(null, g, null, null, g) : Io(g) ? ss(Xe, { children: g }, null, null, null) : g.__b > 0 ? ss(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (C = Sc(g, M, w = c + S, A)) === -1 ? m = $e : (m = M[C] || $e, M[C] = void 0, A--), Ao(s, g, m, i, o, r, a, l, h, u), b = g.__e, (p = g.ref) && m.ref != p && (m.ref && Do(m.ref, null, g), u.push(p, g.__c || b, g)), b != null && (v == null && (v = b), T = !(x = m === $e || m.__v === null) && C === w, x ? C == -1 && S-- : C !== w && (C === w + 1 ? (S++, T = !0) : C > w ? A > D - w ? (S += C - w, T = !0) : S-- : S = C < w && C == w - 1 ? C - w : 0), w = c + S, T = T || C == c && !x, typeof g.type != "function" || C === w && m.__k !== g.__k ? typeof g.type == "function" || T ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = b.nextSibling : l = Na(s, b, l) : l = Ta(g, l, s), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = I; c--; )
    M[c] != null && (typeof t.type == "function" && M[c].__e != null && M[c].__e == t.__d && (t.__d = M[c].__e.nextSibling), Ra(M[c], M[c]));
}
function Ta(s, e, t) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, e = typeof n.type == "function" ? Ta(n, e, t) : Na(t, n.__e, e));
  return e;
}
function Na(s, e, t) {
  return t == null || t.parentNode !== s ? s.insertBefore(e, null) : e == t && e.parentNode != null || s.insertBefore(e, t), e.nextSibling;
}
function Sc(s, e, t, n) {
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
function Ec(s, e, t, n, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || ps(s, o, null, t[o], n);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || ps(s, o, e[o], t[o], n);
}
function rr(s, e, t) {
  e[0] === "-" ? s.setProperty(e, t ?? "") : s[e] = t == null ? "" : typeof t != "number" || kc.test(e) ? t : t + "px";
}
function ps(s, e, t, n, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        s.style.cssText = t;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (e in n)
            t && e in t || rr(s.style, e, "");
        if (t)
          for (e in t)
            n && t[e] === n[e] || rr(s.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in s ? e.toLowerCase().slice(2) : e.slice(2), s.l || (s.l = {}), s.l[e + o] = t, t ? n || s.addEventListener(e, o ? lr : ar, o) : s.removeEventListener(e, o ? lr : ar, o);
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
function ar(s) {
  return this.l[s.type + !1](W.event ? W.event(s) : s);
}
function lr(s) {
  return this.l[s.type + !0](W.event ? W.event(s) : s);
}
function Ao(s, e, t, n, i, o, r, a, l, h) {
  var u, c, p, m, g, b, v, w, C, x, T, S, M, I, A, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = W.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (w = e.props, C = (u = D.contextType) && n[u.__c], x = u ? C ? C.props.value : u.__ : n, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(w, x) : (e.__c = c = new B(w, x), c.constructor = D, c.render = Nc), C && C.sub(c), c.props = w, c.state || (c.state = {}), c.context = x, c.__n = n, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Kt({}, c.__s)), Kt(c.__s, D.getDerivedStateFromProps(w, c.__s))), m = c.props, g = c.state, c.__v = e, p)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(H) {
              H && (H.__ = e);
            }), T = 0; T < c._sb.length; T++)
              c.__h.push(c._sb[T]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, b);
          });
        }
        if (c.context = x, c.props = w, c.__P = s, c.__e = !1, S = W.__r, M = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++)
            c.__h.push(c._sb[I]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++M < 25);
        c.state = c.__s, c.getChildContext != null && (n = Kt(Kt({}, n), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (b = c.getSnapshotBeforeUpdate(m, g)), Ea(s, Io(A = u != null && u.type === Xe && u.key == null ? u.props.children : u) ? A : [A], e, t, n, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Tc(t.__e, e, t, n, i, o, r, l, h);
    (u = W.diffed) && u(e);
  } catch (H) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), W.__e(H, e, t);
  }
}
function Ma(s, e, t) {
  for (var n = 0; n < t.length; n++)
    Do(t[n], t[++n], t[++n]);
  W.__c && W.__c(e, s), s.some(function(i) {
    try {
      s = i.__h, i.__h = [], s.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      W.__e(o, i.__v);
    }
  });
}
function Tc(s, e, t, n, i, o, r, a, l) {
  var h, u, c, p = t.props, m = e.props, g = e.type, b = 0;
  if (g === "svg" && (i = !0), o != null) {
    for (; b < o.length; b++)
      if ((h = o[b]) && "setAttribute" in h == !!g && (g ? h.localName === g : h.nodeType === 3)) {
        s = h, o[b] = null;
        break;
      }
  }
  if (s == null) {
    if (g === null)
      return document.createTextNode(m);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", g) : document.createElement(g, m.is && m), o = null, a = !1;
  }
  if (g === null)
    p === m || a && s.data === m || (s.data = m);
  else {
    if (o = o && Ni.call(s.childNodes), u = (p = t.props || $e).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, b = 0; b < s.attributes.length; b++)
          p[s.attributes[b].name] = s.attributes[b].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === s.innerHTML) || (s.innerHTML = c && c.__html || ""));
    }
    if (Ec(s, m, p, i, a), c)
      e.__k = [];
    else if (Ea(s, Io(b = e.props.children) ? b : [b], e, t, n, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && ds(t, 0), a, l), o != null)
      for (b = o.length; b--; )
        o[b] != null && ka(o[b]);
    a || ("value" in m && (b = m.value) !== void 0 && (b !== s.value || g === "progress" && !b || g === "option" && b !== p.value) && ps(s, "value", b, p.value, !1), "checked" in m && (b = m.checked) !== void 0 && b !== s.checked && ps(s, "checked", b, p.checked, !1));
  }
  return s;
}
function Do(s, e, t) {
  try {
    typeof s == "function" ? s(e) : s.current = e;
  } catch (n) {
    W.__e(n, t);
  }
}
function Ra(s, e, t) {
  var n, i;
  if (W.unmount && W.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Do(n, null, e)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        W.__e(o, e);
      }
    n.base = n.__P = null, s.__c = void 0;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && Ra(n[i], e, t || typeof s.type != "function");
  t || s.__e == null || ka(s.__e), s.__ = s.__e = s.__d = void 0;
}
function Nc(s, e, t) {
  return this.constructor(s, t);
}
function ms(s, e, t) {
  var n, i, o, r;
  W.__ && W.__(s, e), i = (n = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Ao(e, s = (!n && t || e).__k = G(Xe, null, [s]), i || $e, $e, e.ownerSVGElement !== void 0, !n && t ? [t] : i ? null : e.firstChild ? Ni.call(e.childNodes) : null, o, !n && t ? t : i ? i.__e : e.firstChild, n, r), Ma(o, s, r);
}
Ni = xa.slice, W = { __e: function(s, e, t, n) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        s = a;
      }
  throw s;
} }, Ca = 0, X = function(s) {
  return s != null && s.constructor === void 0;
}, B.prototype.setState = function(s, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof s == "function" && (s = s(Kt({}, t), this.props)), s && Kt(t, s), s != null && this.__v && (e && this._sb.push(e), or(this));
}, B.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), or(this));
}, B.prototype.render = Xe, ne = [], $a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, Gi = function(s, e) {
  return s.__v.__b - e.__v.__b;
}, fs.__r = 0;
var Ia = function(s, e, t, n) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? n[0] = a : r === 4 ? n[1] = Object.assign(n[1] || {}, a) : r === 5 ? (n[1] = n[1] || {})[e[++o]] = a : r === 6 ? n[1][e[++o]] += a + "" : r ? (i = s.apply(a, Ia(s, a, t, ["", null])), n.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : n.push(a);
  }
  return n;
}, cr = /* @__PURE__ */ new Map();
function Mc(s) {
  var e = cr.get(this);
  return e || (e = /* @__PURE__ */ new Map(), cr.set(this, e)), (e = Ia(this, e.get(s) || (e.set(s, e = function(t) {
    for (var n, i, o = 1, r = "", a = "", l = [0], h = function(p) {
      o === 1 && (p || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, r) : o === 3 && (p || r) ? (l.push(3, p, r), o = 2) : o === 2 && r === "..." && p ? l.push(4, p, 0) : o === 2 && r && !p ? l.push(5, 0, !0, r) : o >= 5 && ((r || !p && o === 5) && (l.push(o, 0, r, i), o = 6), p && (l.push(o, p, 0, i), o = 6)), r = "";
    }, u = 0; u < t.length; u++) {
      u && (o === 1 && h(), h(u));
      for (var c = 0; c < t[u].length; c++)
        n = t[u][c], o === 1 ? n === "<" ? (h(), l = [l], o = 3) : r += n : o === 4 ? r === "--" && n === ">" ? (o = 1, r = "") : r = n + r[0] : a ? n === a ? a = "" : r += n : n === '"' || n === "'" ? a = n : n === ">" ? (h(), o = 1) : o && (n === "=" ? (o = 5, i = r, r = "") : n === "/" && (o < 5 || t[u][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : n === " " || n === "	" || n === `
` || n === "\r" ? (h(), o = 2) : r += n), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(s)), e), arguments, [])).length > 1 ? e : e[0];
}
const Tu = Mc.bind(G);
class Po extends B {
  _getClassName(e) {
    return [e.className, e.class];
  }
  _getProps(e) {
    const { className: t, class: n, attrs: i, data: o, forwardRef: r, children: a, style: l, ...h } = e, u = Object.keys(h).reduce((c, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-)[a-zA-Z-]+/.test(p)) && (c[p] = h[p]), c), {});
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
    return e = this._beforeRender(e) || e, G(this._getComponent(e), this._getProps(e), this._getChildren(e));
  }
}
var Rc = 0;
function d(s, e, t, n, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: s, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Rc, __source: i, __self: o };
  if (typeof s == "function" && (r = s.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return W.vnode && W.vnode(h), h;
}
class Xn extends B {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  _runJS() {
    this.props.executeScript && f(this._ref.current).runJS();
  }
  componentDidMount() {
    this._runJS();
  }
  componentDidUpdate(e) {
    this.props.html !== e.html && this._runJS();
  }
  render(e) {
    const { executeScript: t, html: n, ...i } = e;
    return /* @__PURE__ */ d(Po, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: n }, ...i });
  }
}
function Ic(s) {
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
  } = s, c = [t], p = { ...n }, m = [], g = [];
  return i.forEach((b) => {
    const v = [];
    if (typeof b == "string" && a && a[b] && (b = a[b]), typeof b == "function")
      if (l)
        v.push(...l.call(r, b, m, ...o));
      else {
        const w = b.call(r, m, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(b);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !X(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? m.push(
        /* @__PURE__ */ d("div", { className: N(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(p, w.style), w.className && c.push(w.className), w.children && m.push(w.children), w.attrs && Object.assign(u, w.attrs)) : m.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: N(c),
    style: p,
    ...u
  }, m];
}
function Xi({
  tag: s = "div",
  ...e
}) {
  const [t, n] = Ic(e);
  return G(s, t, ...n);
}
function Aa(s, e, t) {
  return typeof s == "function" ? s.call(e, ...t) : Array.isArray(s) ? s.map((n) => Aa(n, e, t)) : X(s) || s === null ? s : typeof s == "object" ? s.html ? /* @__PURE__ */ d(Xn, { ...s }) : /* @__PURE__ */ d(Po, { ...s }) : s;
}
function ee(s) {
  const { content: e, generatorThis: t, generatorArgs: n } = s, i = Aa(e, t, n);
  return i == null || typeof i == "boolean" ? null : X(i) ? i : /* @__PURE__ */ d(Xe, { children: i });
}
const hr = (s) => s.startsWith("icon-") ? s : `icon-${s}`;
function tt(s) {
  const { icon: e, className: t, ...n } = s;
  if (!e)
    return null;
  if (X(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(hr(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? hr(r) : ""), Object.assign(n, a);
  }
  return /* @__PURE__ */ d("i", { className: N(i), ...n });
}
function Ac(s) {
  return this.getChildContext = () => s.context, s.children;
}
function Dc(s) {
  const e = this, t = s._container;
  e.componentWillUnmount = function() {
    ms(null, e._temp), e._temp = null, e._container = null;
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
  }), ms(
    G(Ac, { context: e.context }, s._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function Pc(s, e) {
  const t = G(Dc, { _vnode: s, _container: e });
  return t.containerInfo = e, t;
}
const Ss = class Ss {
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
    const l = f(e);
    if (l.data(n) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = f.guid++;
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
    return f(this.element);
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
    return e && f.extend(this._options, e), this._options;
  }
  /**
   * Emit a component event.
   * @param event  The event name.
   * @param args   The event arguments.
   */
  emit(e, ...t) {
    const n = f.Event(e);
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
    return J(this.options.i18n, e, t, n, this.options.lang, this.constructor.NAME) ?? J(this.options.i18n, e, t, n, this.options.lang) ?? `{i18n:${e}}`;
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
    const n = f(e);
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
    return f(e || document).find(`[${n}]`).each((o, r) => {
      if (t) {
        const l = f(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = f(r).data(this.KEY);
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
    return e === void 0 ? this.getAll().sort((n, i) => n.gid - i.gid)[0] : this.get(f(e).closest(`[${this.DATA_KEY}]`), t);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(e) {
    let t = e || this.ZUI;
    f.fn[t] && (t = `zui${this.NAME}`);
    const n = this;
    f.fn.extend({
      [t](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, u) => {
          let c = n.get(u);
          if (c ? r && c.render(r) : c = new n(u, r), a) {
            let p = c[a], m = c;
            p === void 0 && (m = c.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...o) : l = p;
          }
        }), l !== void 0 ? l : this;
      }
    });
  }
};
Ss.DEFAULT = {}, Ss.MULTI_INSTANCE = !1;
let $t = Ss;
class z extends $t {
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
    var e, t;
    (t = (e = this.$) == null ? void 0 : e.componentWillUnmount) == null || t.call(e), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(e) {
    ms(
      G(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function Lc({
  component: s = "div",
  className: e,
  children: t,
  style: n,
  attrs: i
}) {
  return G(s, {
    className: N(e),
    style: n,
    ...i
  }, t);
}
function Da({
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
  trailingIcon: p,
  hint: m,
  checked: g,
  onClick: b,
  data: v,
  ...w
}) {
  const C = [
    typeof g == "boolean" ? /* @__PURE__ */ d("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ d("label", {}) }) : null,
    /* @__PURE__ */ d(tt, { icon: h }),
    u ? /* @__PURE__ */ d("span", { className: "text", children: u }) : null,
    /* @__PURE__ */ d(ee, { content: i }),
    n,
    /* @__PURE__ */ d(tt, { icon: p })
  ];
  return G(e, {
    className: N(t, { disabled: a, active: l }),
    title: m,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: b,
    ...w,
    ...o
  }, ...C);
}
function Oc({
  component: s = "div",
  className: e,
  text: t,
  attrs: n,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return G(s, {
    className: N(e),
    style: r,
    onClick: a,
    ...n
  }, t, /* @__PURE__ */ d(ee, { content: o }), i);
}
function Hc({
  component: s = "div",
  className: e,
  style: t,
  space: n,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return G(s, {
    className: N(e),
    style: { width: n, height: n, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function Bc({ type: s, ...e }) {
  return /* @__PURE__ */ d(Xi, { ...e });
}
function Pa({
  component: s = "div",
  className: e,
  children: t,
  content: n,
  style: i,
  attrs: o
}) {
  return G(s, {
    className: N(e),
    style: i,
    ...o
  }, /* @__PURE__ */ d(ee, { content: n }), t);
}
var Mt;
let Mi = (Mt = class extends B {
  constructor() {
    super(...arguments), this.ref = Y();
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
    return i && Object.assign(a, i[t.type || "item"]), (o || t.onClick) && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), a.className = N(a.className), r && (a = r(a)), a;
  }
  renderItem(e, t, n) {
    if (!t)
      return null;
    const i = this.getItemRenderProps(e, t, n), { itemRender: o } = e;
    if (o) {
      if (typeof o == "object") {
        const b = o[t.type || "item"];
        if (b)
          return /* @__PURE__ */ d(b, { ...i });
      } else if (typeof o == "function") {
        const b = o.call(this, i, G);
        if (X(b))
          return b;
        typeof b == "object" && Object.assign(i, b);
      }
    }
    const { type: r = "item", component: a, key: l = n, rootAttrs: h, rootClass: u, rootStyle: c, rootChildren: p, ...m } = i;
    if (r === "html")
      return /* @__PURE__ */ d(
        "li",
        {
          className: N("action-menu-item", `${this.name}-html`, u, m.className),
          ...h,
          style: c || m.style,
          dangerouslySetInnerHTML: { __html: m.html }
        },
        l
      );
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Mt.ItemComponents[r] : a;
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
  renderTypedItem(e, t, n) {
    const { children: i, className: o, key: r, ...a } = t;
    return /* @__PURE__ */ d(
      "li",
      {
        className: N(`${this.constructor.NAME}-item`, `${this.name}-${n.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ d(e, { ...n }),
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
      beforeDestroy: p,
      compact: m,
      ...g
    } = e, b = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ d(b, { class: N(this.name, o, m ? "compact" : ""), style: n, ...g, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, Mt.ItemComponents = {
  divider: Lc,
  item: Da,
  heading: Oc,
  space: Hc,
  custom: Bc,
  basic: Pa
}, Mt.ROOT_TAG = "menu", Mt.NAME = "action-menu", Mt);
const Es = class Es extends z {
};
Es.NAME = "ActionMenu", Es.Component = Mi;
let ur = Es;
function Wc({
  items: s,
  show: e,
  level: t,
  ...n
}) {
  return /* @__PURE__ */ d(Da, { ...n });
}
var ln, ht, Se, cn;
let Lo = (cn = class extends Mi {
  constructor(t) {
    super(t);
    _(this, ln, /* @__PURE__ */ new Set());
    _(this, ht, void 0);
    _(this, Se, (t, n, i) => {
      f(i.target).closest(".not-nested-toggle").length || (this.toggle(t, n), i.preventDefault());
    });
    $(this, ht, t.nestedShow === void 0), y(this, ht) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: n, nestedTrigger: i, defaultNestedShow: o, controlledMenu: r, indent: a, ...l } = t;
    return typeof l.items == "function" && (l.items = l.items(this)), l.items || (l.items = []), l.items.some((h) => h.items) || (l.className = N(l.className, "no-nested-items")), !r && a && (l.style = Object.assign({
      [`--${this.name}-indent`]: `${a}px`
    }, l.style)), l;
  }
  getNestedMenuProps(t) {
    const { name: n, controlledMenu: i, nestedShow: o, beforeDestroy: r, beforeRender: a, itemRender: l, onClickItem: h, afterRender: u, commonItemProps: c, level: p, itemRenderProps: m } = this.props;
    return {
      items: t,
      name: n,
      nestedShow: y(this, ht) ? this.state.nestedShow : o,
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
    let { items: n } = t;
    if (!n || (typeof n == "function" && (n = n(t, this)), !n.length))
      return;
    const i = this.constructor, o = this.getNestedMenuProps(n);
    return /* @__PURE__ */ d(i, { ...o, "data-level": o.level });
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
    y(this, ln).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(n)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: y(this, Se).bind(this, r, !0),
        onMouseLeave: y(this, Se).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        y(this, Se).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const n = y(this, ht) ? this.state.nestedShow : this.props.nestedShow;
    return n && typeof n == "object" ? n[t] : !!n;
  }
  toggle(t, n) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, n);
    if (!y(this, ht))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...y(this, ln).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), n === void 0)
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
    y(this, ht) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    y(this, ht) && this.setState({ nestedShow: !1 });
  }
}, ln = new WeakMap(), ht = new WeakMap(), Se = new WeakMap(), cn.ItemComponents = {
  item: Wc
}, cn);
const Ts = class Ts extends z {
};
Ts.NAME = "ActionMenuNested", Ts.Component = Lo;
let dr = Ts;
var hn;
let ye = (hn = class extends Lo {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const e = super.beforeRender();
    let { hasIcons: t } = e;
    return t === void 0 && (t = e.items.some((n) => n.icon)), e.className = N(e.className, this.menuName, {
      "has-icons": t,
      "has-nested-items": e.items.some((n) => this.isNestedItem(n)),
      popup: e.popup
    }), e;
  }
  renderToggleIcon(e) {
    return /* @__PURE__ */ d("span", { class: `${this.name}-toggle-icon caret-${e ? "down" : "right"}` });
  }
}, hn.NAME = "menu", hn);
const Ns = class Ns extends z {
};
Ns.NAME = "Menu", Ns.Component = ye;
let fr = Ns;
class Q extends Po {
  _beforeRender(e) {
    const { text: t, loading: n, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = e;
    this._isEmptyText = t == null || typeof t == "string" && !t.length || n && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !n;
  }
  _getChildren(e) {
    const { loading: t, loadingIcon: n, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: h } = e;
    return [
      t ? /* @__PURE__ */ d(tt, { icon: n || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ d(tt, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ d("span", { className: "text", children: t ? i : r }),
      t ? null : a,
      t ? null : /* @__PURE__ */ d(tt, { icon: l }),
      t ? null : h ? /* @__PURE__ */ d("span", { className: typeof h == "string" ? `caret-${h}` : "caret" }) : null
    ];
  }
  _getClassName(e) {
    const { type: t, className: n, disabled: i, loading: o, active: r, children: a, square: l, size: h, rounded: u } = e;
    return N("btn", t, n, {
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
    const t = this._getComponent(e), { url: n, target: i, btnType: o = "button", hint: r } = e, a = {
      ...super._getProps(e),
      title: r,
      type: t === "button" ? o : void 0
    };
    return n !== void 0 && (a[t === "a" ? "href" : "data-url"] = n), i !== void 0 && (a[t === "a" ? "target" : "data-target"] = i), a;
  }
}
function Fc({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ d(Q, { type: t, ...n });
}
let zc = class extends B {
  render(e) {
    const {
      id: t,
      popup: n,
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
    let b = /* @__PURE__ */ d(ee, { content: o }, "content");
    (p || i) && (b = /* @__PURE__ */ d("div", { className: p, children: b }, "content"));
    const v = [], w = l ? /* @__PURE__ */ d("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ d("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ d("div", { className: u, children: [
      i ? /* @__PURE__ */ d("div", { className: c, children: i }) : null,
      w
    ] }, "heading")) : v.push(w), v.push(b), h && v.push(/* @__PURE__ */ d("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ d("div", { id: t, className: N("popover", a, { popup: n }), style: r, children: v });
  }
};
const Ms = class Ms extends z {
};
Ms.NAME = "PopoverPanel", Ms.Component = zc;
let Ji = Ms;
function Jn(s) {
  return s.split("-")[1];
}
function Oo(s) {
  return s === "y" ? "height" : "width";
}
function fe(s) {
  return s.split("-")[0];
}
function Zn(s) {
  return ["top", "bottom"].includes(fe(s)) ? "x" : "y";
}
function pr(s, e, t) {
  let { reference: n, floating: i } = s;
  const o = n.x + n.width / 2 - i.width / 2, r = n.y + n.height / 2 - i.height / 2, a = Zn(e), l = Oo(a), h = n[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (fe(e)) {
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
  switch (Jn(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const jc = async (s, e, t) => {
  const { placement: n = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: s, floating: e, strategy: i }), { x: u, y: c } = pr(h, n, l), p = n, m = {}, g = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: v, fn: w } = a[b], { x: C, y: x, data: T, reset: S } = await w({ x: u, y: c, initialPlacement: n, placement: p, strategy: i, middlewareData: m, rects: h, platform: r, elements: { reference: s, floating: e } });
    u = C ?? u, c = x ?? c, m = { ...m, [v]: { ...m[v], ...T } }, S && g <= 50 && (g++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: s, floating: e, strategy: i }) : S.rects), { x: u, y: c } = pr(h, p, l)), b = -1);
  }
  return { x: u, y: c, placement: p, strategy: i, middlewareData: m };
};
function Qn(s, e) {
  return typeof s == "function" ? s(e) : s;
}
function La(s) {
  return typeof s != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(s) : { top: s, right: s, bottom: s, left: s };
}
function gs(s) {
  return { ...s, top: s.y, left: s.x, right: s.x + s.width, bottom: s.y + s.height };
}
async function Oa(s, e) {
  var t;
  e === void 0 && (e = {});
  const { x: n, y: i, platform: o, rects: r, elements: a, strategy: l } = s, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: p = !1, padding: m = 0 } = Qn(e, s), g = La(m), b = a[p ? c === "floating" ? "reference" : "floating" : c], v = gs(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: n, y: i } : r.reference, C = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), x = await (o.isElement == null ? void 0 : o.isElement(C)) && await (o.getScale == null ? void 0 : o.getScale(C)) || { x: 1, y: 1 }, T = gs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: C, strategy: l }) : w);
  return { top: (v.top - T.top + g.top) / x.y, bottom: (T.bottom - v.bottom + g.bottom) / x.y, left: (v.left - T.left + g.left) / x.x, right: (T.right - v.right + g.right) / x.x };
}
const Zi = Math.min, Vc = Math.max;
function Qi(s, e, t) {
  return Vc(s, Zi(e, t));
}
const to = (s) => ({ name: "arrow", options: s, async fn(e) {
  const { x: t, y: n, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = Qn(s, e) || {};
  if (l == null)
    return {};
  const u = La(h), c = { x: t, y: n }, p = Zn(i), m = Oo(p), g = await r.getDimensions(l), b = p === "y", v = b ? "top" : "left", w = b ? "bottom" : "right", C = b ? "clientHeight" : "clientWidth", x = o.reference[m] + o.reference[p] - c[p] - o.floating[m], T = c[p] - o.reference[p], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = S ? S[C] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(S)) || (M = a.floating[C] || o.floating[m]);
  const I = x / 2 - T / 2, A = M / 2 - g[m] / 2 - 1, D = Zi(u[v], A), H = Zi(u[w], A), L = D, R = M - g[m] - H, E = M / 2 - g[m] / 2 + I, O = Qi(L, E, R), F = Jn(i) != null && E != O && o.reference[m] / 2 - (E < L ? D : H) - g[m] / 2 < 0 ? E < L ? L - E : R - E : 0;
  return { [p]: c[p] - F, data: { [p]: O, centerOffset: E - O + F } };
} }), Uc = ["top", "right", "bottom", "left"];
Uc.reduce((s, e) => s.concat(e, e + "-start", e + "-end"), []);
const qc = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ys(s) {
  return s.replace(/left|right|bottom|top/g, (e) => qc[e]);
}
function Yc(s, e, t) {
  t === void 0 && (t = !1);
  const n = Jn(s), i = Zn(s), o = Oo(i);
  let r = i === "x" ? n === (t ? "end" : "start") ? "right" : "left" : n === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = ys(r)), { main: r, cross: ys(r) };
}
const Kc = { start: "end", end: "start" };
function Wi(s) {
  return s.replace(/start|end/g, (e) => Kc[e]);
}
const Ri = function(s) {
  return s === void 0 && (s = {}), { name: "flip", options: s, async fn(e) {
    var t;
    const { placement: n, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = !0, ...b } = Qn(s, e), v = fe(n), w = fe(r) === r, C = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = c || (w || !g ? [ys(r)] : function(L) {
      const R = ys(L);
      return [Wi(L), R, Wi(R)];
    }(r));
    c || m === "none" || x.push(...function(L, R, E, O) {
      const F = Jn(L);
      let j = function(ot, Je, El) {
        const Go = ["left", "right"], Xo = ["right", "left"], Tl = ["top", "bottom"], Nl = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return El ? Je ? Xo : Go : Je ? Go : Xo;
          case "left":
          case "right":
            return Je ? Tl : Nl;
          default:
            return [];
        }
      }(fe(L), E === "start", O);
      return F && (j = j.map((ot) => ot + "-" + F), R && (j = j.concat(j.map(Wi)))), j;
    }(r, g, m, C));
    const T = [r, ...x], S = await Oa(e, b), M = [];
    let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && M.push(S[v]), u) {
      const { main: L, cross: R } = Yc(n, o, C);
      M.push(S[L], S[R]);
    }
    if (I = [...I, { placement: n, overflows: M }], !M.every((L) => L <= 0)) {
      var A, D;
      const L = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = T[L];
      if (R)
        return { data: { index: L, overflows: I }, reset: { placement: R } };
      let E = (D = I.filter((O) => O.overflows[0] <= 0).sort((O, F) => O.overflows[1] - F.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!E)
        switch (p) {
          case "bestFit": {
            var H;
            const O = (H = I.map((F) => [F.placement, F.overflows.filter((j) => j > 0).reduce((j, ot) => j + ot, 0)]).sort((F, j) => F[1] - j[1])[0]) == null ? void 0 : H[0];
            O && (E = O);
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
}, Ii = function(s) {
  return s === void 0 && (s = 0), { name: "offset", options: s, async fn(e) {
    const { x: t, y: n } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = fe(a), p = Jn(a), m = Zn(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, b = u && m ? -1 : 1, v = Qn(r, o);
      let { mainAxis: w, crossAxis: C, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof x == "number" && (C = p === "end" ? -1 * x : x), m ? { x: C * b, y: w * g } : { x: w * g, y: C * b };
    }(e, s);
    return { x: t + i.x, y: n + i.y, data: i };
  } };
};
function Gc(s) {
  return s === "x" ? "y" : "x";
}
const sn = function(s) {
  return s === void 0 && (s = {}), { name: "shift", options: s, async fn(e) {
    const { x: t, y: n, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: C } = v;
      return { x: w, y: C };
    } }, ...l } = Qn(s, e), h = { x: t, y: n }, u = await Oa(e, l), c = Zn(fe(i)), p = Gc(c);
    let m = h[c], g = h[p];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      m = Qi(m + u[c === "y" ? "top" : "left"], m, m - u[v]);
    }
    if (r) {
      const v = p === "y" ? "bottom" : "right";
      g = Qi(g + u[p === "y" ? "top" : "left"], g, g - u[v]);
    }
    const b = a.fn({ ...e, [c]: m, [p]: g });
    return { ...b, data: { x: b.x - t, y: b.y - n } };
  } };
};
function st(s) {
  var e;
  return (s == null || (e = s.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function xt(s) {
  return st(s).getComputedStyle(s);
}
function Ha(s) {
  return s instanceof st(s).Node;
}
function Xt(s) {
  return Ha(s) ? (s.nodeName || "").toLowerCase() : "#document";
}
function at(s) {
  return s instanceof HTMLElement || s instanceof st(s).HTMLElement;
}
function mr(s) {
  return typeof ShadowRoot < "u" && (s instanceof st(s).ShadowRoot || s instanceof ShadowRoot);
}
function on(s) {
  const { overflow: e, overflowX: t, overflowY: n, display: i } = xt(s);
  return /auto|scroll|overlay|hidden|clip/.test(e + n + t) && !["inline", "contents"].includes(i);
}
function Xc(s) {
  return ["table", "td", "th"].includes(Xt(s));
}
function eo(s) {
  const e = Ho(), t = xt(s);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((n) => (t.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some((n) => (t.contain || "").includes(n));
}
function Ho() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Ai(s) {
  return ["html", "body", "#document"].includes(Xt(s));
}
const no = Math.min, xe = Math.max, bs = Math.round, es = Math.floor, Jt = (s) => ({ x: s, y: s });
function Ba(s) {
  const e = xt(s);
  let t = parseFloat(e.width) || 0, n = parseFloat(e.height) || 0;
  const i = at(s), o = i ? s.offsetWidth : t, r = i ? s.offsetHeight : n, a = bs(t) !== o || bs(n) !== r;
  return a && (t = o, n = r), { width: t, height: n, $: a };
}
function Rt(s) {
  return s instanceof Element || s instanceof st(s).Element;
}
function Bo(s) {
  return Rt(s) ? s : s.contextElement;
}
function ke(s) {
  const e = Bo(s);
  if (!at(e))
    return Jt(1);
  const t = e.getBoundingClientRect(), { width: n, height: i, $: o } = Ba(e);
  let r = (o ? bs(t.width) : t.width) / n, a = (o ? bs(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Jc = Jt(0);
function Wa(s) {
  const e = st(s);
  return Ho() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : Jc;
}
function be(s, e, t, n) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = s.getBoundingClientRect(), o = Bo(s);
  let r = Jt(1);
  e && (n ? Rt(n) && (r = ke(n)) : r = ke(s));
  const a = function(p, m, g) {
    return m === void 0 && (m = !1), !(!g || m && g !== st(p)) && m;
  }(o, t, n) ? Wa(o) : Jt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = st(o), m = n && Rt(n) ? st(n) : n;
    let g = p.frameElement;
    for (; g && n && m !== p; ) {
      const b = ke(g), v = g.getBoundingClientRect(), w = getComputedStyle(g), C = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, x = v.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, h *= b.y, u *= b.x, c *= b.y, l += C, h += x, g = st(g).frameElement;
    }
  }
  return gs({ width: u, height: c, x: l, y: h });
}
function Di(s) {
  return Rt(s) ? { scrollLeft: s.scrollLeft, scrollTop: s.scrollTop } : { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
}
function It(s) {
  var e;
  return (e = (Ha(s) ? s.ownerDocument : s.document) || window.document) == null ? void 0 : e.documentElement;
}
function Fa(s) {
  return be(It(s)).left + Di(s).scrollLeft;
}
function qe(s) {
  if (Xt(s) === "html")
    return s;
  const e = s.assignedSlot || s.parentNode || mr(s) && s.host || It(s);
  return mr(e) ? e.host : e;
}
function za(s) {
  const e = qe(s);
  return Ai(e) ? s.ownerDocument ? s.ownerDocument.body : s.body : at(e) && on(e) ? e : za(e);
}
function ws(s, e) {
  var t;
  e === void 0 && (e = []);
  const n = za(s), i = n === ((t = s.ownerDocument) == null ? void 0 : t.body), o = st(n);
  return i ? e.concat(o, o.visualViewport || [], on(n) ? n : []) : e.concat(n, ws(n));
}
function gr(s, e, t) {
  let n;
  if (e === "viewport")
    n = function(i, o) {
      const r = st(i), a = It(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, p = 0;
      if (l) {
        h = l.width, u = l.height;
        const m = Ho();
        (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: p };
    }(s, t);
  else if (e === "document")
    n = function(i) {
      const o = It(i), r = Di(i), a = i.ownerDocument.body, l = xe(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = xe(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + Fa(i);
      const c = -r.scrollTop;
      return xt(a).direction === "rtl" && (u += xe(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(It(s));
  else if (Rt(e))
    n = function(i, o) {
      const r = be(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = at(i) ? ke(i) : Jt(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = Wa(s);
    n = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return gs(n);
}
function ja(s, e) {
  const t = qe(s);
  return !(t === e || !Rt(t) || Ai(t)) && (xt(t).position === "fixed" || ja(t, e));
}
function Zc(s, e, t) {
  const n = at(e), i = It(e), o = t === "fixed", r = be(s, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Jt(0);
  if (n || !n && !o)
    if ((Xt(e) !== "body" || on(i)) && (a = Di(e)), at(e)) {
      const h = be(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = Fa(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function yr(s, e) {
  return at(s) && xt(s).position !== "fixed" ? e ? e(s) : s.offsetParent : null;
}
function br(s, e) {
  const t = st(s);
  if (!at(s))
    return t;
  let n = yr(s, e);
  for (; n && Xc(n) && xt(n).position === "static"; )
    n = yr(n, e);
  return n && (Xt(n) === "html" || Xt(n) === "body" && xt(n).position === "static" && !eo(n)) ? t : n || function(i) {
    let o = qe(i);
    for (; at(o) && !Ai(o); ) {
      if (eo(o))
        return o;
      o = qe(o);
    }
    return null;
  }(s) || t;
}
const Qc = { convertOffsetParentRelativeRectToViewportRelativeRect: function(s) {
  let { rect: e, offsetParent: t, strategy: n } = s;
  const i = at(t), o = It(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Jt(1);
  const l = Jt(0);
  if ((i || !i && n !== "fixed") && ((Xt(t) !== "body" || on(o)) && (r = Di(t)), at(t))) {
    const h = be(t);
    a = ke(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: It, getClippingRect: function(s) {
  let { element: e, boundary: t, rootBoundary: n, strategy: i } = s;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = ws(l).filter((b) => Rt(b) && Xt(b) !== "body"), p = null;
    const m = xt(l).position === "fixed";
    let g = m ? qe(l) : l;
    for (; Rt(g) && !Ai(g); ) {
      const b = xt(g), v = eo(g);
      v || b.position !== "fixed" || (p = null), (m ? !v && !p : !v && b.position === "static" && p && ["absolute", "fixed"].includes(p.position) || on(g) && !v && ja(l, g)) ? c = c.filter((w) => w !== g) : p = b, g = qe(g);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), n], r = o[0], a = o.reduce((l, h) => {
    const u = gr(e, h, i);
    return l.top = xe(u.top, l.top), l.right = no(u.right, l.right), l.bottom = no(u.bottom, l.bottom), l.left = xe(u.left, l.left), l;
  }, gr(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: br, getElementRects: async function(s) {
  let { reference: e, floating: t, strategy: n } = s;
  const i = this.getOffsetParent || br, o = this.getDimensions;
  return { reference: Zc(e, await i(t), n), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(s) {
  return Array.from(s.getClientRects());
}, getDimensions: function(s) {
  return Ba(s);
}, getScale: ke, isElement: Rt, isRTL: function(s) {
  return getComputedStyle(s).direction === "rtl";
} };
function Wo(s, e, t, n) {
  n === void 0 && (n = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = n, h = Bo(s), u = i || o ? [...h ? ws(h) : [], ...ws(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, w) {
    let C, x = null;
    const T = It(v);
    function S() {
      clearTimeout(C), x && x.disconnect(), x = null;
    }
    return function M(I, A) {
      I === void 0 && (I = !1), A === void 0 && (A = 1), S();
      const { left: D, top: H, width: L, height: R } = v.getBoundingClientRect();
      if (I || w(), !L || !R)
        return;
      const E = { rootMargin: -es(H) + "px " + -es(T.clientWidth - (D + L)) + "px " + -es(T.clientHeight - (H + R)) + "px " + -es(D) + "px", threshold: xe(0, no(1, A)) || 1 };
      let O = !0;
      function F(j) {
        const ot = j[0].intersectionRatio;
        if (ot !== A) {
          if (!O)
            return M();
          ot ? M(!1, ot) : C = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        O = !1;
      }
      try {
        x = new IntersectionObserver(F, { ...E, root: T.ownerDocument });
      } catch {
        x = new IntersectionObserver(F, E);
      }
      x.observe(v);
    }(!0), S;
  }(h, t) : null;
  let p, m = -1, g = null;
  r && (g = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      g && g.observe(e);
    })), t();
  }), h && !l && g.observe(h), g.observe(e));
  let b = l ? be(s) : null;
  return l && function v() {
    const w = be(s);
    !b || w.x === b.x && w.y === b.y && w.width === b.width && w.height === b.height || t(), b = w, p = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const Pi = (s, e, t) => {
  const n = /* @__PURE__ */ new Map(), i = { platform: Qc, ...t }, o = { ...i.platform, _c: n };
  return jc(s, e, { ...i, platform: o });
}, th = '[data-toggle="popover"]', wr = "show", vr = "in", Ce = class Ce extends $t {
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
      const t = f(e.target);
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
    const { trigger: e, id: t, triggerEvent: n } = this.options;
    this._triggerEvent = n, this._id = t || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const r = f(i), { namespace: a } = this;
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
    return this._dynamic = !e, e ? (typeof e == "function" && (e = e()), f(e)[0]) : this._createTarget();
  }
  show(e) {
    const { delay: t, event: n } = e || {};
    if (n && (this._triggerEvent = n), t)
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
    const o = f(i), { animation: r, mask: a, onShow: l, onShown: h, trigger: u } = this.options;
    if (o.addClass(wr), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), u === "hover") {
      this._clearDelayHide();
      const { namespace: c } = this;
      o.on(`mouseenter${c}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${c}`, () => {
        this.delayHide();
      });
    }
    this._virtual || f(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(vr), this._resetTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && f(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: t, onHide: n, onHidden: i, trigger: o } = this.options, r = f(this._targetElement);
    this._shown = !1, n == null || n.call(this), this.emit("hide"), r.removeClass(vr), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || f(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), f(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(wr), e && this._resetTimer(() => {
        this.destroy();
      }, typeof e == "number" ? e : 0), this._destoryTarget();
    }, t ? 200 : 0);
  }
  toggle(e) {
    this._shown ? this.hide() : this.show(e);
  }
  destroy() {
    if (super.destroy(), f(document).off(this.namespace), !this._virtual) {
      const { namespace: e } = this;
      f(this._triggerElement).off(e);
    }
    this._resetTimer(), this._destoryTarget(), this._clearDelayHide();
  }
  layout() {
    const e = this._triggerElement, t = this._targetElement, n = this._layoutWatcher;
    if (!t || !e || !this._shown) {
      n && (n(), this._layoutWatcher = void 0);
      return;
    }
    n || (this._layoutWatcher = Wo(e, t, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && f(t).css({ width: f(e).width() }), Pi(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: u, strategy: c }) => {
        const p = f(t).css({
          position: c,
          left: a,
          top: l
        }), m = u.split("-")[0], g = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[m], b = h.arrow;
        b && p.find(".arrow").css({
          left: b.x,
          top: b.y
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), o === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || f(this._triggerElement).attr("data-popover-placement", m);
      });
    }));
  }
  render(e) {
    super.render(e);
    const t = this._targetElement;
    if (!t)
      return;
    const n = this._getRenderOptions(), i = f(t);
    if (i.toggleClass("popup", n.popup).css(n.style), n.className && i.setClass(n.className), this._dynamic) {
      let o = this._panel;
      o && o.element !== t && (o.destroy(), o = void 0), o ? o.render(n) : (o = new Ji(t, n), o.on("inited", () => this.layout())), this._panel = o;
    } else
      n.arrow && (i.find(".arrow").length || i.append(f('<div class="arrow"></div>').css(n.arrowStyle))), this.layout();
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
    const e = this._triggerElement, t = this._targetElement, { placement: n, flip: i, shift: o, offset: r, arrow: a, strategy: l } = this.options, h = a ? t.querySelector(".arrow") : null, u = h ? typeof a == "number" ? a : 5 : 0;
    return [e, t, {
      placement: n,
      strategy: l,
      middleware: [
        i ? Ri() : null,
        o ? sn(typeof o == "object" ? o : void 0) : null,
        r || u ? Ii((r || 0) + u) : null,
        a ? to({ element: h }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: e = "popover" } = this.options, {
      popup: t,
      title: n,
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
      title: n,
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
    var e, t, n;
    (e = this._layoutWatcher) == null || e.call(this), this._layoutWatcher = void 0, this._dynamic && ((t = this._panel) == null || t.destroy(), (n = this._targetElement) == null || n.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(e, t = 0) {
    this._timer && clearTimeout(this._timer), e && (this._timer = window.setTimeout(() => {
      this._timer = 0, e();
    }, t));
  }
  _createTarget() {
    const { container: e = "body" } = this.options, t = f(e);
    let n = t.find(`#${this._id}`);
    return n.length || (n = f("<div />").attr({ id: this._id, class: "popover" }).appendTo(t)), n[0];
  }
  static show(e) {
    const { element: t, event: n, ...i } = e, o = t || (n == null ? void 0 : n.currentTarget);
    return this.ensure(o instanceof HTMLElement ? o : document.body, { element: o, show: !0, destroyOnHide: !0, triggerEvent: n, ...i });
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
let _t = Ce;
f(document).on(`click${_t.NAMESPACE} mouseenter${_t.NAMESPACE}`, th, (s) => {
  const e = f(s.currentTarget);
  if (e.length && !e.data(_t.KEY)) {
    const t = e.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== t)
      return;
    _t.ensure(e, { show: !0, triggerEvent: s }), s.preventDefault();
  }
});
const eh = '[data-toggle="dropdown"]', Rs = class Rs extends _t {
  constructor() {
    super(...arguments), this._onClickDoc = (e) => {
      f(e.target).closest(".not-hide-menu").length || this.hide();
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
      content: G(so, this._getMenuOptions())
    };
  }
};
Rs.NAME = "Dropdown", Rs.DEFAULT = {
  ..._t.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
let Ct = Rs;
f(document).on(`click${Ct.NAMESPACE} mouseenter${Ct.NAMESPACE}`, eh, (s) => {
  const e = f(s.currentTarget);
  if (e.length && !e.data(Ct.KEY)) {
    const t = e.data("trigger") || "click";
    if ((s.type === "mouseover" ? "hover" : "click") !== t)
      return;
    const i = {
      ...e.data(),
      show: !0,
      triggerEvent: s
    };
    if (!i.target && e.is("a")) {
      const o = e.attr("href");
      o && "#0".includes(o[0]) && (i.target = o);
    }
    !i.target && !i.items && !i.menu && (i.target = e.next(".dropdown-menu")), Ct.ensure(e, i), s.preventDefault();
  }
});
const jo = class jo extends Q {
  constructor() {
    super(...arguments), this._ref = Y();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: e, items: t } = this.props, n = f(this.triggerElement), i = Ct.get(this.triggerElement), o = {
      items: t,
      ...e
    };
    i ? i.setOptions(o) : n.data(o);
  }
  componentDidMount() {
    this._updateData();
  }
  componentDidUpdate() {
    this._updateData();
  }
  componentWillUnmount() {
    var e;
    (e = Ct.get(this.triggerElement)) == null || e.destroy();
  }
  _getProps(e) {
    const { trigger: t, placement: n } = e;
    return {
      ...super._getProps(e),
      "data-toggle": "dropdown",
      "data-trigger": t,
      "data-placement": n,
      ref: this._ref
    };
  }
};
jo.defaultProps = {
  caret: !0
};
let vs = jo;
const Vo = class Vo extends ye {
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
    !e || !t || Pi(t, e, {
      placement: this.props.placement,
      middleware: [Ri(), sn(), Ii(1)]
    }).then(({ x: n, y: i }) => {
      f(e).css({
        left: n,
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
    return /* @__PURE__ */ d("span", { class: "dropdown-menu-toggle-icon caret-right ml-2" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), this._layoutTimer && clearTimeout(this._layoutTimer);
  }
};
Vo.defaultProps = {
  ...ye.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
let so = Vo;
function Va({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ d(vs, { type: t, ...n });
}
let Ua = class extends B {
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
    const { key: n = t, ...i } = e, o = e.dropdown || e.items ? vs : Q;
    return /* @__PURE__ */ d(o, { ...i }, n);
  }
  renderItem(e, t, n) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: n, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, n, t.onClick)), i) {
      const l = i.call(this, a, G);
      if (X(l))
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
      beforeDestroy: p,
      ...m
    } = e;
    return /* @__PURE__ */ d(
      "div",
      {
        className: N("btn-group", i ? `size-${i}` : "", t),
        ...m,
        children: [
          n && n.map(this.renderItem.bind(this, e)),
          a
        ]
      }
    );
  }
};
function nh({
  key: s,
  type: e,
  btnType: t,
  ...n
}) {
  return /* @__PURE__ */ d(Ua, { type: t, ...n });
}
var Gt;
let Zt = (Gt = class extends Mi {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: n, ...i } = super.beforeRender();
    return i.className = N(i.className, n ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, n) {
    const { type: i } = n, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {};
    r.type && (r.btnType = r.type, delete r.type);
    const a = {
      ...t,
      ...r,
      ...n,
      className: N(`${this.name}-${i}`, t.className, r.className, n.className),
      style: Object.assign({}, t.style, r.style, n.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ d(e, { ...a });
  }
}, Gt.ItemComponents = {
  item: Fc,
  dropdown: Va,
  "btn-group": nh
}, Gt.ROOT_TAG = "nav", Gt.NAME = "toolbar", Gt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, Gt);
function sh({
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
  a === !0 ? c = /* @__PURE__ */ d(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ d("span", { class: "close" }) }) : X(a) ? c = a : typeof a == "object" && (c = /* @__PURE__ */ d(Q, { ...a, onClick: l }));
  const p = X(t) ? t : t ? /* @__PURE__ */ d(Zt, { ...t }) : null;
  return /* @__PURE__ */ d("div", { className: N("alert", s), style: e, ...u, children: [
    /* @__PURE__ */ d(tt, { icon: h, className: "alert-icon" }),
    X(i) ? i : /* @__PURE__ */ d("div", { className: N("alert-content", o), children: [
      X(n) ? n : n && /* @__PURE__ */ d("div", { className: "alert-heading", children: n }),
      /* @__PURE__ */ d("div", { className: "alert-text", children: i }),
      n ? p : null
    ] }),
    n ? null : p,
    c,
    r
  ] });
}
function ih(s) {
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
function oh({
  margin: s,
  type: e,
  placement: t,
  animation: n,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ d(
    sh,
    {
      className: N("messager", o, e, n === !0 ? ih(t) : n, i ? "in" : ""),
      ...a
    }
  );
}
var Ft, _e;
const Is = class Is extends z {
  constructor() {
    super(...arguments);
    _(this, Ft);
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
    this.render(), this.emit("show"), P(this, Ft, _e).call(this, () => {
      this._show = !0, this.render(), P(this, Ft, _e).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && P(this, Ft, _e).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && P(this, Ft, _e).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), P(this, Ft, _e).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Ft = new WeakSet(), _e = function(t, n = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, n);
}, Is.NAME = "MessagerItem", Is.Component = oh;
let io = Is;
var ie, ut, As, qa, Ds, Ya;
const en = class en extends $t {
  constructor() {
    super(...arguments);
    _(this, As);
    _(this, Ds);
    _(this, ie, void 0);
    _(this, ut, void 0);
  }
  get isShown() {
    var t;
    return !!((t = y(this, ut)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), P(this, As, qa).call(this).show();
  }
  hide() {
    var t;
    (t = y(this, ut)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: n, ...i } = t, o = en.ensure(n || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ie = new WeakMap(), ut = new WeakMap(), As = new WeakSet(), qa = function() {
  if (y(this, ut))
    y(this, ut).setOptions(this.options);
  else {
    const t = P(this, Ds, Ya).call(this), n = new io(t, this.options);
    n.on("hidden", () => {
      n.destroy(), t == null || t.remove(), $(this, ie, void 0), $(this, ut, void 0);
    }), $(this, ut, n);
  }
  return y(this, ut);
}, Ds = new WeakSet(), Ya = function() {
  if (y(this, ie))
    return y(this, ie);
  const { placement: t = "top" } = this.options;
  let n = this.$element.find(`.messagers-${t}`);
  n.length || (n = f(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = n.find(`#messager-${this.gid}`);
  return i.length || (i = f(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(n), $(this, ie, i[0])), i[0];
}, en.NAME = "messager", en.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let _r = en;
var un;
let rh = (un = class extends B {
  render(e) {
    const { percent: t = 50, size: n = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: u } = e, c = n / 2;
    let { circleWidth: p = 0.2 } = e;
    p < 1 && (p = n * p);
    const m = (n - p) / 2;
    return /* @__PURE__ */ d("svg", { className: a, width: n, height: n, children: [
      /* @__PURE__ */ d("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ d("circle", { cx: c, cy: c, r: m, "stroke-width": p, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * m * 2, "stroke-dashoffset": Math.PI * m * 2 * (100 - t) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ d("text", { x: h ?? c, y: u ?? c + p / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${m}px` }, children: r === !0 ? Math.round(t) : r }) : null
    ] });
  }
}, un.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, un);
const Ps = class Ps extends z {
};
Ps.NAME = "ProgressCircle", Ps.Component = rh;
let Cr = Ps;
var St;
class ah {
  constructor(e = "") {
    _(this, St, void 0);
    typeof e == "object" ? $(this, St, e) : $(this, St, document.appendChild(document.createComment(e)));
  }
  on(e, t, n) {
    y(this, St).addEventListener(e, t, n);
  }
  once(e, t, n) {
    y(this, St).addEventListener(e, t, { once: !0, ...n });
  }
  off(e, t, n) {
    y(this, St).removeEventListener(e, t, n);
  }
  emit(e) {
    return y(this, St).dispatchEvent(e), e;
  }
}
St = new WeakMap();
const $r = /* @__PURE__ */ new Set([
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
class Ka extends ah {
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
    return typeof e == "string" && ($r.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(Ka.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && ($r.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
let Ga = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Fi = "```ZUI_STR\n";
var dn, oe, Ee, dt, Te, Ne, is;
const Uo = class Uo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    _(this, Ne);
    _(this, dn, void 0);
    _(this, oe, void 0);
    _(this, Ee, void 0);
    _(this, dt, void 0);
    _(this, Te, void 0);
    $(this, dn, t), $(this, Ee, e ?? Ga()), $(this, oe, `ZUI_STORE:${y(this, Ee)}`), $(this, dt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return y(this, dn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (y(this, Te) || $(this, Te, new Uo(y(this, Ee), "session")), y(this, Te));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const n = y(this, dt).getItem(P(this, Ne, is).call(this, e));
    if (typeof n == "string") {
      if (n.startsWith(Fi))
        return n.substring(Fi.length);
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
    y(this, dt).setItem(P(this, Ne, is).call(this, e), typeof t == "string" ? `${Fi}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    y(this, dt).removeItem(P(this, Ne, is).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < y(this, dt).length; t++) {
      const n = y(this, dt).key(t);
      if (n != null && n.startsWith(y(this, oe))) {
        const i = y(this, dt).getItem(n);
        typeof i == "string" && e(n.substring(y(this, oe).length + 1), JSON.parse(i));
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
dn = new WeakMap(), oe = new WeakMap(), Ee = new WeakMap(), dt = new WeakMap(), Te = new WeakMap(), Ne = new WeakSet(), is = function(e) {
  return `${y(this, oe)}:${e}`;
};
let _s = Uo;
const tn = new _s("DEFAULT");
function lh(s, e = "local") {
  return new _s(s, e);
}
Object.assign(tn, { create: lh });
function ch(s) {
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
function hh(s) {
  const [e, t, n] = typeof s == "string" ? ch(s) : s;
  return e * 0.299 + t * 0.587 + n * 0.114 > 186;
}
function xr(s, e) {
  return hh(s) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function kr(s, e = 255) {
  return Math.min(Math.max(s, 0), e);
}
function uh(s, e, t) {
  s = s % 360 / 360, e = kr(e), t = kr(t);
  const n = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - n, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (n - i) * r * 6 : r * 2 < 1 ? n : r * 3 < 2 ? i + (n - i) * (2 / 3 - r) * 6 : i);
  return [
    o(s + 1 / 3) * 255,
    o(s) * 255,
    o(s - 1 / 3) * 255
  ];
}
function dh(s) {
  let e = 0;
  if (typeof s != "string" && (s = String(s)), s && s.length)
    for (let t = 0; t < s.length; ++t)
      e += (t + 1) * s.charCodeAt(t);
  return e;
}
function fh(s, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(s) ? s.length <= e ? s : s.substring(s.length - e) : /^[A-Za-z\d\s]+$/.test(s) ? s[0].toUpperCase() : s.length <= e ? s : s.substring(0, e);
}
let Xa = class extends B {
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
      hueDistance: p = 43,
      saturation: m = 0.4,
      lightness: g = 0.6,
      children: b,
      ...v
    } = this.props, w = ["avatar", e], C = { ...t, background: r, color: a };
    let x = 32;
    n && (typeof n == "number" ? (C.width = `${n}px`, C.height = `${n}px`, C.fontSize = `${Math.max(12, Math.round(n / 2))}px`, x = n) : (w.push(`size-${n}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[n])), i ? w.push("circle") : o && (typeof o == "number" ? C.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let T;
    if (c)
      w.push("has-img"), T = /* @__PURE__ */ d("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = fh(l, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !a && r && (C.color = xr(r));
      else {
        const I = h ?? l, A = (typeof I == "number" ? I : dh(I)) * p % 360;
        if (C.background = `hsl(${A},${m * 100}%,${g * 100}%)`, !a) {
          const D = uh(A, m, g);
          C.color = xr(D);
        }
      }
      let M;
      x && x < 14 * S.length && (M = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), T = /* @__PURE__ */ d("div", { "data-actualSize": x, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ d(
      "div",
      {
        className: N(w),
        style: C,
        ...v,
        children: [
          T,
          b
        ]
      }
    );
  }
};
const Ls = class Ls extends z {
};
Ls.NAME = "Avatar", Ls.Component = Xa;
let Sr = Ls;
const Os = class Os extends z {
};
Os.NAME = "BtnGroup", Os.Component = Ua;
let Er = Os;
const oo = Symbol("EVENT_PICK");
var Me;
class Fo extends B {
  constructor(t) {
    super(t);
    _(this, Me, void 0);
    this._handleClick = this._handleClick.bind(this), $(this, Me, !!f(`#${t.id}`).length);
  }
  get hasInput() {
    return y(this, Me);
  }
  _handleClick(t) {
    const { togglePop: n, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = f(t.target), l = o == null ? void 0 : o(t);
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
    return N(
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
      if (y(this, Me))
        f(`#${o}`).val(i);
      else
        return /* @__PURE__ */ d("input", { id: o, type: "hidden", className: "pick-value", name: n, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: n } = this.props;
    f(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === oo)
        return;
      const r = i.target.value;
      r !== n.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    f(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o } = this.props;
    o && t.state.value !== i.value && f(`#${n}`).trigger("change", oo);
  }
  render(t) {
    return G(
      t.tagName || "div",
      this._getProps(t),
      this._renderTrigger(t),
      this._renderValue(t)
    );
  }
}
Me = new WeakMap();
var re, ft, zt;
class Ja extends B {
  constructor(t) {
    super(t);
    _(this, re, void 0);
    _(this, ft, void 0);
    _(this, zt, void 0);
    $(this, re, Y()), this._handleDocClick = (n) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = f(n.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return f(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = y(this, re)) == null ? void 0 : t.current;
  }
  get container() {
    return y(this, zt);
  }
  _handleClick(t) {
    const { togglePop: n } = this.props, i = f(t.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return t.stopPropagation(), n(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return n(!1);
  }
  _getClass(t) {
    const { className: n, state: i } = t, { open: o } = i;
    return N(
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
    } = t, h = f.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${n}`,
      className: this._getClass(t),
      style: h,
      ref: y(this, re),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!y(this, zt)) {
      const n = f(t.container || "body");
      let i = n.find(".pick-container");
      i.length || (i = f("<div>").addClass("pick-container").appendTo(n)), $(this, zt, i[0]);
    }
    return y(this, zt);
  }
  _render(t) {
    return /* @__PURE__ */ d("div", { ...this._getProps(t), children: this._renderPop(t) });
  }
  _renderPop(t) {
    return t.children;
  }
  layout() {
    const { element: t, trigger: n, props: i } = this, { state: o } = i;
    if (!t || !n || !o.open) {
      y(this, ft) && (y(this, ft).call(this), $(this, ft, void 0));
      return;
    }
    y(this, ft) || $(this, ft, Wo(n, t, () => {
      const { placement: r, width: a } = i;
      Pi(n, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Ri() : null, sn(), Ii(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var u, c;
        f(t).css({
          left: l,
          top: h,
          width: a === "100%" ? f(n).outerWidth() : void 0
        }), (c = (u = this.props).onLayout) == null || c.call(u, t);
      }), a === "100%" && f(t).css({ width: f(t).width() });
    }));
  }
  componentDidMount() {
    var t, n;
    this.layout(), f(document).on("click", this._handleDocClick), (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !0 });
  }
  componentDidUpdate() {
    var t, n;
    (n = (t = this.props).afterRender) == null || n.call(t, { firstRender: !1 });
  }
  componentWillUnmount() {
    var n, i;
    f(document).off("click", this._handleDocClick);
    const t = y(this, ft);
    t && (t(), $(this, ft, void 0)), $(this, zt, void 0), $(this, re, void 0), f(`#pick-pop-${this.props.id}`).remove(), (i = (n = this.props).beforeDestroy) == null || i.call(n);
  }
  render(t) {
    return Pc(this._render(t), this._getContainer(t));
  }
}
re = new WeakMap(), ft = new WeakMap(), zt = new WeakMap();
var fn, nt, ae, pe;
let Pt = (pe = class extends B {
  constructor(t) {
    super(t);
    _(this, fn, void 0);
    _(this, nt, void 0);
    _(this, ae, void 0);
    $(this, nt, 0), $(this, ae, Y()), this.changeState = (n, i) => new Promise((o) => {
      this.setState(n, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (n, i) => {
      this.props.disabled && (n = !1);
      const { state: o } = this;
      if (typeof n == "boolean" && n === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      y(this, nt) && (clearTimeout(y(this, nt)), $(this, nt, 0));
      let r = await this.changeState((l) => (n = n ?? !l.open, {
        open: n ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await hs(200, (l) => {
        $(this, nt, l);
      }), $(this, nt, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await hs(50, (l) => {
        $(this, nt, l);
      }), $(this, nt, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, $(this, fn, t.id ?? `_pick${f.guid++}`);
  }
  get id() {
    return y(this, fn);
  }
  get pop() {
    return y(this, ae).current;
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
    (n = this.props.beforeDestroy) == null || n.call(this), y(this, nt) && clearTimeout(y(this, nt));
    const t = y(this, ae).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, n) {
    const { open: i } = n, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ d(a, { ref: y(this, ae), ...this._getPopProps(t, n), children: this._renderPop(t, n) }, "pop");
    }
    return /* @__PURE__ */ d(Xe, { children: [
      /* @__PURE__ */ d(o, { ...this._getTriggerProps(t, n), children: this._renderTrigger(t, n) }, "pick"),
      r
    ] });
  }
}, fn = new WeakMap(), nt = new WeakMap(), ae = new WeakMap(), pe.Trigger = Fo, pe.Pop = Ja, pe.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, pe);
var pn;
let ph = (pn = class extends Pt {
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
    if (e && f(e).css("backgroundColor", o), t && f(t).css("borderColor", o), n && f(n).css("color", o), i) {
      const r = f(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(e, t) {
    this.props.disabled || (super._handleChange(e, t), this.syncColor());
  }
  _renderTrigger(e, t) {
    const { icon: n } = e, { value: i } = t;
    return [
      n ? /* @__PURE__ */ d(tt, { icon: n }, "icon") : /* @__PURE__ */ d("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(e, t) {
    const n = super._getTriggerProps(e, t);
    return n.style = f.extend({
      color: t.value
    }, n.style), n.className = N("color-picker", n.className, { disabled: e.disabled }), n;
  }
  _renderPop(e, t) {
    const { closeBtn: n, heading: i } = e, o = this.getColors(), { value: r } = t;
    let a;
    return i && (a = /* @__PURE__ */ d("div", { className: "color-picker-heading", children: [
      i,
      n ? /* @__PURE__ */ d("button", { className: "btn ghost square rounded size-sm", "data-dismiss": "pick", children: /* @__PURE__ */ d("span", { class: "close" }) }) : null
    ] }, "heading")), [
      a,
      /* @__PURE__ */ d("div", { className: "color-picker-row", children: [
        o.map((l) => /* @__PURE__ */ d("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ d(tt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ d("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ d(tt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, pn.defaultProps = {
  ...Pt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, pn);
const Hs = class Hs extends z {
};
Hs.NAME = "ColorPicker", Hs.Component = ph;
let Tr = Hs;
const rn = 24 * 60 * 60 * 1e3, K = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : /* @__PURE__ */ new Date(), mh = (s, e, t = "day") => {
  if (typeof e == "string") {
    const n = Number.parseInt(e, 10);
    t = e.replace(n.toString(), ""), e = n;
  }
  return s = new Date(K(s).getTime()), t === "month" ? s.setMonth(s.getMonth() + e) : t === "year" ? s.setFullYear(s.getFullYear() + e) : t === "week" ? s.setDate(s.getDate() + e * 7) : t === "hour" ? s.setHours(s.getHours() + e) : t === "minute" ? s.setMinutes(s.getMinutes() + e) : t === "second" ? s.setSeconds(s.getSeconds() + e) : s.setDate(s.getDate() + e), s;
}, ts = (s, e = /* @__PURE__ */ new Date()) => K(s).toDateString() === K(e).toDateString(), ro = (s, e = /* @__PURE__ */ new Date()) => K(s).getFullYear() === K(e).getFullYear(), Za = (s, e = /* @__PURE__ */ new Date()) => (s = K(s), e = K(e), s.getFullYear() === e.getFullYear() && s.getMonth() === e.getMonth()), Iu = (s, e = /* @__PURE__ */ new Date()) => {
  s = K(s), e = K(e);
  const t = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, Au = (s, e) => ts(K(e), s), Du = (s, e) => ts(K(e).getTime() - rn, s), Pu = (s, e) => ts(K(e).getTime() + rn, s), lt = (s, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (s = K(s), Number.isNaN(s.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", ro(s) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(n).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${n[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, Lu = (s, e, t) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = lt(s, ro(s) ? n.month : n.full);
  if (ts(s, e))
    return i;
  const o = lt(e, ro(s, e) ? Za(s, e) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
};
var mn, gn;
class gh extends B {
  constructor() {
    super(...arguments);
    _(this, mn, Y());
    _(this, gn, (t, n) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(n.item.key || ""));
    });
  }
  componentDidMount() {
    f(y(this, mn).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: n = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += n)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ d("div", { className: "time-picker-menu row", ref: y(this, mn), children: [
      /* @__PURE__ */ d(
        ye,
        {
          className: l,
          items: r,
          onClickItem: y(this, gn).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ d(
        ye,
        {
          className: l,
          items: a,
          onClickItem: y(this, gn).bind(this, "minute")
        }
      )
    ] });
  }
}
mn = new WeakMap(), gn = new WeakMap();
const Nr = (s) => {
  if (!s)
    return;
  const e = K(`1999-01-01 ${s}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var Bs, Ws, Fs, zs, yn;
let yh = (yn = class extends Pt {
  constructor(t) {
    super(t);
    _(this, Bs, () => {
      this.toggle(!0);
    });
    _(this, Ws, (t) => {
      this.setTime(t.target.value);
    });
    _(this, Fs, (t, n) => {
      this.setTime({ [t]: n });
    });
    _(this, zs, () => {
      this.setTime("");
    });
    const n = this.state;
    n.value === "now" && (n.value = lt(/* @__PURE__ */ new Date(), t.format));
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
    const i = Nr(n), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? lt(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(n);
    });
  }
  getTime() {
    const t = Nr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, n) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = n, p = `time-picker-${this.id}`;
    let m;
    return c && !a && u.length ? m = /* @__PURE__ */ d("button", { type: "button", className: "btn size-sm square ghost", onClick: y(this, zs), children: /* @__PURE__ */ d("span", { className: "close" }) }) : r && (r === !0 ? m = /* @__PURE__ */ d("i", { class: "i-time" }) : m = /* @__PURE__ */ d(tt, { icon: r })), [
      /* @__PURE__ */ d("input", { name: o, id: p, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: y(this, Bs), onChange: y(this, Ws) }, "input"),
      m ? /* @__PURE__ */ d("label", { for: p, class: "input-control-suffix", children: m }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: N(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [n, i] = this.getTime() || [];
    return /* @__PURE__ */ d(gh, { hour: n, minute: i, minuteStep: t.minuteStep, onChange: y(this, Fs) });
  }
}, Bs = new WeakMap(), Ws = new WeakMap(), Fs = new WeakMap(), zs = new WeakMap(), yn.defaultProps = {
  ...Pt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, yn);
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
const bh = (s, e, t = 0) => {
  const n = new Date(s, e - 1, 1), i = new Date(s, e, 0), o = n.getDay(), r = n.getTime() - (7 + o - t) % 7 * rn;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: n.getTime()
  };
}, Mr = (s, e) => new Set((Array.isArray(s) ? s : [s]).map((t) => lt(t, e)));
var js;
class wh extends B {
  constructor() {
    super(...arguments);
    _(this, js, (t) => {
      const { onClickDate: n } = this.props;
      if (!n)
        return;
      const i = f(t.target).closest(".mini-calendar-day").dataset("date");
      i && n(i);
    });
  }
  render(t) {
    const n = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = J.getLang("weekNames"),
      monthNames: r = J.getLang("monthNames"),
      year: a = n.getFullYear(),
      month: l = n.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], p = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const I = (i + M) % 7;
      c.push(/* @__PURE__ */ d("div", { className: N("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ d("div", { children: o ? o[I] : I }) }, M));
    }
    const { startTime: m, days: g, firstDay: b } = bh(a, l, i), v = b + g * rn;
    let w = m;
    const C = [], x = "yyyy-MM-dd", T = Mr(h, x), S = Mr(u, x);
    for (; w <= v; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const A = new Date(w), D = A.getDate(), H = lt(A, x), L = A.getDay(), R = Za(A, b), E = N("col mini-calendar-day", {
          active: T.has(H),
          selected: S.has(H),
          "is-first": D === 1,
          "is-in-month": R,
          "is-out-month": !R,
          "is-today": ts(A, n),
          "is-weekend": L === 0 || L === 6
        });
        M.push(
          /* @__PURE__ */ d("div", { className: E, "data-date": H, children: /* @__PURE__ */ d("a", { className: p, onClick: y(this, js), children: D === 1 && r ? r[A.getMonth()] : A.getDate() }) }, H)
        ), w += rn;
      }
      C.push(/* @__PURE__ */ d("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ d("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ d("div", { className: "row", children: c }),
      C
    ] });
  }
}
js = new WeakMap();
var bn, Vs;
class Rr extends B {
  constructor() {
    super(...arguments);
    _(this, bn, Y());
    _(this, Vs, (t) => {
      const { onChange: n } = this.props;
      if (!n)
        return;
      const o = f(t.target).closest("[data-value]").dataset("value");
      o && (n(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    f(y(this, bn).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: n, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ d(Q, { type: "ghost", "data-value": h, active: h === r, className: N(l === h ? "is-current" : ""), onClick: y(this, Vs), children: h }, h));
    return /* @__PURE__ */ d("div", { className: n, ref: y(this, bn), children: a });
  }
}
bn = new WeakMap(), Vs = new WeakMap();
var Re, wn, vn, _n, Cn, $n, Us, Qa, qs, tl;
class vh extends B {
  constructor(t) {
    super(t);
    _(this, Us);
    _(this, qs);
    _(this, Re, void 0);
    _(this, wn, void 0);
    _(this, vn, void 0);
    _(this, _n, void 0);
    _(this, Cn, void 0);
    _(this, $n, void 0);
    $(this, Re, Y()), $(this, wn, (r) => {
      const a = f(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), $(this, vn, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), $(this, _n, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), $(this, Cn, (r) => {
      this.setState({ year: r, select: "day" });
    }), $(this, $n, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = mh(h, r.substring(5).replace("+", ""))), r = lt(h, "yyyy-MM-dd");
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
    f(y(this, Re).current).find(".active").scrollIntoView();
  }
  render(t, n) {
    const {
      date: i,
      yearText: o = J.getLang("yearFormat") || "{0}",
      weekNames: r = J.getLang("weekNames"),
      monthNames: a = J.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: p
    } = n, m = p === "day", g = K(t.minDate || "1970-1-1"), b = K(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ d("div", { className: "date-picker-menu row", ref: y(this, Re), onClick: y(this, wn), children: [
      P(this, Us, Qa).call(this, t),
      /* @__PURE__ */ d("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ d("div", { className: "row p-2", children: [
          /* @__PURE__ */ d(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: q(o, u) }),
          /* @__PURE__ */ d(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ d("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ d("div", { children: [
            /* @__PURE__ */ d(Q, { type: "ghost", size: "sm", square: !0, onClick: y(this, vn), children: /* @__PURE__ */ d("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ d(Q, { type: "ghost", size: "sm", square: !0, onClick: y(this, _n), children: /* @__PURE__ */ d("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ d(
          wh,
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
        p === "year" ? /* @__PURE__ */ d(
          Rr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: b.getFullYear(),
            onChange: y(this, Cn)
          }
        ) : p === "month" ? /* @__PURE__ */ d(
          Rr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: y(this, $n)
          }
        ) : null,
        m ? P(this, qs, tl).call(this, t) : null
      ] })
    ] });
  }
}
Re = new WeakMap(), wn = new WeakMap(), vn = new WeakMap(), _n = new WeakMap(), Cn = new WeakMap(), $n = new WeakMap(), Us = new WeakSet(), Qa = function(t) {
  let { menu: n } = t;
  return n ? (Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ d(ye, { ...n })) : null;
}, qs = new WeakSet(), tl = function(t) {
  let { actions: n } = t;
  const { todayText: i, clearText: o } = t;
  return n || (n = [{ text: i, "data-set-date": lt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(n) && (n = { items: n }), /* @__PURE__ */ d("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ d(Zt, { btnProps: { className: "ghost text-primary" }, ...n }),
    o ? /* @__PURE__ */ d(Q, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var xn, kn, Sn, En;
let _h = (En = class extends Pt {
  constructor(t) {
    super(t);
    _(this, xn, void 0);
    _(this, kn, void 0);
    _(this, Sn, void 0);
    $(this, xn, () => {
      this.toggle(!0);
    }), $(this, kn, (i) => {
      this.setDate(i.target.value);
    }), $(this, Sn, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = K(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : lt(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: n } = this.state;
    n && (this.state.value = lt(n === "today" ? /* @__PURE__ */ new Date() : n, t.format));
  }
  _renderTrigger(t, n) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = n, c = `date-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ d("button", { type: "button", className: "btn size-sm square ghost", onClick: y(this, Sn), children: /* @__PURE__ */ d("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ d("i", { class: "i-calendar" }) : p = /* @__PURE__ */ d(tt, { icon: o })), [
      /* @__PURE__ */ d("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: y(this, xn), onChange: y(this, kn) }, "input"),
      p ? /* @__PURE__ */ d("label", { for: c, class: "input-control-suffix", children: p }, "icon") : null
    ];
  }
  _getTriggerProps(t, n) {
    const i = super._getTriggerProps(t, n);
    return {
      ...i,
      className: N(i.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, n) {
    const i = super._getPopProps(t, n);
    return {
      ...i,
      className: N(i.className, "popup")
    };
  }
  _renderPop(t, n) {
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = J.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: g } = t;
    return /* @__PURE__ */ d(
      vh,
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
        minDate: p,
        maxDate: m
      }
    );
  }
}, xn = new WeakMap(), kn = new WeakMap(), Sn = new WeakMap(), En.defaultProps = {
  ...Pt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, En);
const Ys = class Ys extends z {
};
Ys.NAME = "TimePicker", Ys.Component = yh;
let Ir = Ys;
const Ks = class Ks extends z {
};
Ks.NAME = "DatePicker", Ks.Component = _h;
let Ar = Ks;
const zi = "show", Dr = "in", Ch = '[data-dismiss="modal"]', ct = class ct extends $t {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (e) => {
      const t = e.target, n = t.closest(".modal");
      !n || n !== this.modalElement || (t.closest(Ch) || this.options.backdrop === !0 && t === n) && (e.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(zi);
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
        const n = new ResizeObserver(() => {
          if (!this.shown)
            return;
          const i = t.clientWidth, o = t.clientHeight, [r, a] = this._lastDialogSize || [];
          (r !== i || a !== o) && (this._lastDialogSize = [i, o], this.layout());
        });
        n.observe(t), this._rob = n;
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
      return f(t).css("z-index", `${ct.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: n, backdrop: i, className: o, style: r } = this.options;
    return f(t).setClass({
      "modal-trans": n,
      "modal-no-backdrop": !i
    }, zi, o).css({
      zIndex: `${ct.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      f(t).addClass(Dr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (f(this.modalElement).removeClass(Dr), this.emit("hide"), this._setTimer(() => {
      f(this.modalElement).removeClass(zi), this.emit("hidden");
    }), !0) : !1;
  }
  layout(e, t) {
    if (!this.shown)
      return;
    const { dialog: n } = this;
    if (!n)
      return;
    const i = f(n);
    if (t = t ?? this.options.size, t) {
      i.removeAttr("data-size");
      const l = { width: "", height: "" };
      typeof t == "object" ? (l.width = t.width, l.height = t.height) : typeof t == "string" && ["md", "sm", "lg", "full"].includes(t) ? i.attr("data-size", t) : t && (l.width = t), i.css(l);
    }
    e = e ?? this.options.position ?? "fit";
    const o = n.clientWidth, r = n.clientHeight;
    this._lastDialogSize = [o, r], typeof e == "function" && (e = e({ width: o, height: r }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof e == "number" ? (a.alignSelf = "flex-start", a.top = e) : typeof e == "object" && e ? (a.alignSelf = "flex-start", Object.assign(a, e)) : e === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : e === "bottom" ? a.alignSelf = "flex-end" : e === "top" ? a.alignSelf = "flex-start" : e !== "center" && typeof e == "string" && (a.alignSelf = "flex-start", a.top = e), i.css(a), f(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(e, t) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), e && (this.options.animation ? this._timer = window.setTimeout(e, t ?? this.options.transTime) : e());
  }
  static hide(e) {
    var t;
    (t = ct.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = ct.query(e)) == null || t.show();
  }
};
ct.NAME = "Modal", ct.MULTI_INSTANCE = !0, ct.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, ct.zIndex = 1500;
let Lt = ct;
f(window).on(`resize.${Lt.NAMESPACE}`, () => {
  Lt.getAll().forEach((s) => {
    const e = s;
    e.shown && e.options.responsive && e.layout();
  });
});
f(document).on(`to-hide.${Lt.NAMESPACE}`, (s, e) => {
  Lt.hide(e == null ? void 0 : e.target);
});
const qo = class qo extends B {
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
    return X(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ d("div", { className: N("modal-header", t), children: /* @__PURE__ */ d("div", { className: "modal-title", children: n }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : X(e) ? e : /* @__PURE__ */ d("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ d(Zt, { ...e }) : null,
      t ? /* @__PURE__ */ d("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ d("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? X(e) ? e : /* @__PURE__ */ d("div", { className: N("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: n
    } = this.props;
    return X(e) ? e : e === !1 || !n ? null : /* @__PURE__ */ d("div", { className: N("modal-footer", t), children: n ? /* @__PURE__ */ d(Zt, { ...n }) : null });
  }
  render() {
    const {
      className: e,
      style: t,
      contentClass: n,
      children: i
    } = this.props;
    return /* @__PURE__ */ d("div", { className: N("modal-dialog", e), style: t, children: /* @__PURE__ */ d("div", { className: N("modal-content", n), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
};
qo.defaultProps = { closeBtn: !0 };
let ao = qo;
var Ie, Ae, De;
class $h extends B {
  constructor() {
    super(...arguments);
    _(this, Ie, void 0);
    _(this, Ae, void 0);
    _(this, De, void 0);
    $(this, Ie, Y()), this.state = {}, $(this, De, () => {
      var i, o;
      const t = (o = (i = y(this, Ie).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let n = y(this, Ae);
      n == null || n.disconnect(), n = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), n.observe(t.body), n.observe(t.documentElement), $(this, Ae, n);
    });
  }
  componentDidMount() {
    y(this, De).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = y(this, Ae)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ d(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: y(this, Ie),
        onLoad: y(this, De)
      }
    );
  }
}
Ie = new WeakMap(), Ae = new WeakMap(), De = new WeakMap();
function xh(s, e) {
  const { custom: t, title: n, content: i } = e;
  return {
    body: i,
    title: n,
    ...typeof t == "function" ? t() : t
  };
}
async function kh(s, e) {
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
    body: t === "html" ? /* @__PURE__ */ d(Xn, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function Sh(s, e) {
  const { url: t, custom: n, title: i } = e;
  return {
    title: i,
    ...n,
    body: /* @__PURE__ */ d($h, { url: t })
  };
}
const Eh = {
  custom: xh,
  ajax: kh,
  iframe: Sh
}, ji = "loading";
var pt, Pe, mt, Tn, co, Nn, ho;
const Bt = class Bt extends Lt {
  constructor() {
    super(...arguments);
    _(this, Tn);
    _(this, Nn);
    _(this, pt, void 0);
    _(this, Pe, void 0);
    _(this, mt, void 0);
  }
  get id() {
    return y(this, Pe);
  }
  get loading() {
    var t;
    return (t = y(this, pt)) == null ? void 0 : t.classList.contains(ji);
  }
  get shown() {
    var t;
    return !!((t = y(this, pt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = y(this, pt);
    if (!t) {
      const { options: n } = this;
      let i = y(this, Pe);
      i || (i = n.id || `modal-${f.guid++}`, $(this, Pe, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = f("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(n.style || {}).setClass("modal modal-async load-indicator", n.className).appendTo(o)[0];
      }
      $(this, pt, t);
    }
    return t;
  }
  get $emitter() {
    const t = y(this, pt);
    return t ? f(t) : this.$element;
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
    const t = y(this, pt);
    t && (f(t).removeData(this.constructor.KEY).remove(), $(this, pt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    y(this, mt) && clearTimeout(y(this, mt));
    const { modalElement: t, options: n } = this, i = f(t), { type: o, loadTimeout: r, loadingText: a = null } = n, l = Eh[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(ji), r && $(this, mt, window.setTimeout(() => {
      $(this, mt, 0), P(this, Nn, ho).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, n);
    return h === !1 ? await P(this, Nn, ho).call(this, this.options.failedTip) : h && typeof h == "object" && await P(this, Tn, co).call(this, h), y(this, mt) && (clearTimeout(y(this, mt)), $(this, mt, 0)), this.layout(), await hs(100), i.removeClass(ji), !0;
  }
  static open(t) {
    return new Promise((n) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = Bt.ensure(i, r), l = `${Bt.NAMESPACE}.open${f.guid++}`;
      a.on(`hidden${l}`, () => {
        a.off(l), n(a);
      }), a.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: n, message: i, icon: o, iconClass: r = "icon-lg muted", actions: a = "confirm", onClickAction: l, custom: h, key: u = "__alert", ...c } = t, p = (typeof h == "function" ? h() : h) || {};
    let m = typeof i == "object" && i.html ? /* @__PURE__ */ d("div", { dangerouslySetInnerHTML: { __html: i.html } }) : /* @__PURE__ */ d("div", { children: i });
    o ? m = /* @__PURE__ */ d("div", { className: N("modal-body row gap-4 items-center", p.bodyClass), children: [
      /* @__PURE__ */ d("div", { className: `icon ${o} ${r}` }),
      m
    ] }) : m = /* @__PURE__ */ d("div", { className: N("modal-body", p.bodyClass), children: m });
    const g = [];
    (Array.isArray(a) ? a : [a]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = J.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && g.push(w);
    }, []);
    let b;
    const v = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: w, event: C }) => {
        const x = Bt.query(C.target, u);
        b = w.key, (l == null ? void 0 : l(w, x)) !== !1 && x && x.hide();
      }
    } : void 0;
    return await Bt.open({
      key: u,
      type: "custom",
      size: 400,
      className: "modal-alert",
      content: m,
      backdrop: "static",
      custom: { footerActions: v, ...p },
      ...c
    }), b;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: n, onResult: i, ...o } = t;
    return await Bt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), n == null || n(a, l);
      },
      ...o
    }) === "confirm";
  }
};
pt = new WeakMap(), Pe = new WeakMap(), mt = new WeakMap(), Tn = new WeakSet(), co = function(t) {
  return new Promise((n) => {
    if (Array.isArray(t))
      return f(this.modalElement).html(t[0]), this.layout(), this._observeResize(), n();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), n();
      },
      ...o
    }, ms(
      /* @__PURE__ */ d(ao, { ...t }),
      this.modalElement
    );
  });
}, Nn = new WeakSet(), ho = function(t) {
  if (t)
    return P(this, Tn, co).call(this, {
      body: /* @__PURE__ */ d("div", { className: "modal-load-failed", children: t })
    });
}, Bt.DEFAULT = {
  ...Lt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let lo = Bt;
const Th = '[data-toggle="modal"]', Yo = class Yo extends $t {
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
    } = this.options, n = t, i = this.$element.attr("href") || "";
    return n.type || (n.target || i[0] === "#" ? n.type = "static" : n.type = n.type || (n.url || i ? "ajax" : "custom")), !n.url && (n.type === "iframe" || n.type === "ajax") && i[0] !== "#" && (n.url = i), !n.key && n.id && (n.key = n.id), n;
  }
  _initModal() {
    const e = this._getBuilderOptions();
    let t = this._modal;
    if (t)
      return t.setOptions(e), t;
    if (e.type === "static") {
      const n = this._getStaticModalElement();
      if (!n)
        return;
      t = Lt.ensure(n, e);
    } else
      t = lo.ensure(this.container, e);
    return this._modal = t, t.on("destroyed", () => {
      this._modal = void 0;
    }), t;
  }
  _getStaticModalElement() {
    let e = this.options.target;
    if (!e) {
      const { $element: t } = this;
      if (t.is("a")) {
        const n = t.attr("href");
        n != null && n.startsWith("#") && (e = n);
      }
    }
    return this.container.querySelector(e || ".modal");
  }
};
Yo.NAME = "ModalTrigger";
let Cs = Yo;
f(document).on(`click${Cs.NAMESPACE}`, Th, (s) => {
  const e = s.currentTarget;
  if (e) {
    const t = Cs.ensure(e);
    t && (t.show(), s.preventDefault());
  }
});
var Mn;
let Nh = (Mn = class extends Mi {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = N(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, Mn.NAME = "nav", Mn);
const Gs = class Gs extends z {
};
Gs.NAME = "Nav", Gs.Component = Nh;
let Pr = Gs;
function an(s, e) {
  const t = s.pageTotal || Math.ceil(s.recTotal / s.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = s.page - 1 : e === "next" ? e = s.page + 1 : e === "current" ? e = s.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : s.page, {
    ...s,
    pageTotal: t,
    page: e
  };
}
function Mh({
  key: s,
  type: e,
  btnType: t,
  page: n,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = an(o, n);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : q(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : q(r, l)), a.disabled === void 0 && (a.disabled = n !== void 0 && l.page === o.page), /* @__PURE__ */ d(Q, { type: t, ...a });
}
function Rh({
  key: s,
  type: e,
  page: t,
  text: n = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = an(i, t);
  return n = typeof n == "function" ? n(a) : q(n, a), /* @__PURE__ */ d(Pa, { ...r, children: [
    o,
    n
  ] });
}
function Ih({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ d(Q, { type: t, ...l })), u = (p, m) => {
    const g = [];
    for (let b = p; b <= m; b++) {
      l.text = b, delete l.icon, l.disabled = !1;
      const v = an(i, b);
      r && (l.url = typeof r == "function" ? r(v) : q(r, v)), g.push(/* @__PURE__ */ d(Q, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= n ? c = [...c, ...u(2, i.pageTotal)] : i.page < n - 2 ? c = [...c, ...u(2, n - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - n + 3 ? c = [...c, h(), ...u(i.pageTotal - n + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((n - 4) / 2), i.page + Math.floor((n - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Ah({
  type: s,
  pagerInfo: e,
  linkCreator: t,
  items: n = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items || n.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : q(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : q(a, e), i.menu = { ...i.menu, className: N((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ d(Va, { type: "dropdown", dropdown: i, ...r });
}
function Dh({
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
  const p = (b) => {
    var v;
    c = Number((v = b.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, m = (b) => {
    if (!(b != null && b.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = an(i, c);
    a && !a({ info: v, event: b }) || (b.target.href = u.url = typeof l == "function" ? l(v) : q(l, v));
  }, g = an(i, e || 0);
  return u.url = typeof l == "function" ? l(g) : q(l, g), /* @__PURE__ */ d("div", { className: N("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ d("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ d(Q, { type: n, ...u, onClick: m })
  ] });
}
var me;
let Ph = (me = class extends Zt {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: n = 10 } = this.props;
    return { page: +e, recTotal: +t, recPerPage: +n, pageTotal: n ? Math.ceil(t / n) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, n) {
    const i = super.getItemRenderProps(e, t, n), o = t.type || "item", { pagerInfo: r } = this;
    return o === "info" ? Object.assign(i, { pagerInfo: r }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: r, linkCreator: e.linkCreator }), i;
  }
}, me.NAME = "pager", me.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, me.ItemComponents = {
  ...Zt.ItemComponents,
  link: Mh,
  info: Rh,
  nav: Ih,
  "size-menu": Ah,
  goto: Dh
}, me);
const Xs = class Xs extends z {
};
Xs.NAME = "Pager", Xs.Component = Ph;
let Lr = Xs;
const Js = class Js extends z {
};
Js.NAME = "Pick", Js.Component = Pt;
let Or = Js;
var Le, Rn, In, Zs;
class el extends B {
  constructor(t) {
    super(t);
    _(this, Le, Y());
    _(this, Rn, Y());
    _(this, In, (t) => {
      var i, o;
      const n = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, n), this.setState({ search: n }), t.stopPropagation();
    });
    _(this, Zs, (t) => {
      var n, i;
      t.stopPropagation(), (i = (n = this.props).onClear) == null || i.call(n), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = y(this, Le).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: n } = y(this, Rn), { current: i } = y(this, Le);
      if (n && i) {
        const o = f(i).parent();
        o.width(Math.ceil(Math.min(n.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, n) {
    const { placeholder: i, inline: o } = t, { search: r } = n, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ d("div", { className: "picker-search-measure", ref: y(this, Rn), children: r }) : a ? l = /* @__PURE__ */ d("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: y(this, Zs), children: /* @__PURE__ */ d("span", { className: "close" }) }) : l = /* @__PURE__ */ d("span", { className: "magnifier" }), /* @__PURE__ */ d("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ d(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: y(this, In),
          onInput: y(this, In),
          ref: y(this, Le)
        }
      ),
      l
    ] });
  }
}
Le = new WeakMap(), Rn = new WeakMap(), In = new WeakMap(), Zs = new WeakMap();
var Oe, An, Dn, Pn;
class Lh extends Fo {
  constructor() {
    super(...arguments);
    _(this, Oe, void 0);
    _(this, An, void 0);
    _(this, Dn, void 0);
    _(this, Pn, void 0);
    $(this, Oe, Y()), $(this, An, (t) => {
      const { onDeselect: n, state: { selections: i } } = this.props, o = f(t.target).closest(".picker-deselect-btn").attr("data-value");
      n && i.length && typeof o == "string" && n(o), t.stopPropagation();
    }), $(this, Dn, (t) => {
      this.props.changeState({ search: t });
    }), $(this, Pn, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ d("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ d("span", { className: "text", children: /* @__PURE__ */ d(ee, { content: t.text }) }),
      this.props.disabled ? null : /* @__PURE__ */ d("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: y(this, An), "data-value": t.value, children: /* @__PURE__ */ d("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = y(this, Oe).current) == null || n.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-multi form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n }, searchHint: i } = t;
    return /* @__PURE__ */ d(
      el,
      {
        inline: !0,
        ref: y(this, Oe),
        defaultSearch: n,
        onSearch: y(this, Dn),
        onClear: y(this, Pn),
        placeholder: i
      }
    );
  }
  _renderTrigger(t) {
    const { state: { selections: n = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !n.length ? /* @__PURE__ */ d("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ d("div", { className: "picker-multi-selections", children: [
        n.map(this._renderSelection),
        l ? this._renderSearch(t) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ d("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(t) {
    const { name: n, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (n)
      if (this.hasInput)
        f(`#${o}`).val(i);
      else
        return /* @__PURE__ */ d("select", { id: o, multiple: !0, className: "pick-value", name: n, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ d("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: n, emptyValue: i } = this.props;
    f(`#${t}`).val(n.length ? n : [i]);
  }
  componentDidUpdate(t) {
    const { id: n, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && f(`#${n}`).val(r.length ? r : [a]).trigger("change", oo);
  }
}
Oe = new WeakMap(), An = new WeakMap(), Dn = new WeakMap(), Pn = new WeakMap();
var Ln, Qs, ti, ei, ni, nl;
class Oh extends Fo {
  constructor() {
    super(...arguments);
    _(this, ni);
    _(this, Ln, Y());
    _(this, Qs, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    _(this, ti, (t) => {
      this.props.changeState({ search: t });
    });
    _(this, ei, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var n;
    super._handleClick(t), (n = y(this, Ln).current) == null || n.focus();
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-select picker-select-single form-control",
      t.disabled ? "disabled" : ""
    );
  }
  _renderSearch(t) {
    const { state: { search: n } } = t;
    return /* @__PURE__ */ d(
      el,
      {
        ref: y(this, Ln),
        defaultSearch: n,
        onSearch: y(this, ti),
        onClear: y(this, ei),
        placeholder: P(this, ni, nl).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: n, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(t) : u ? p = /* @__PURE__ */ d("span", { className: "picker-single-selection", children: /* @__PURE__ */ d(ee, { content: u.text }) }, "main") : p = /* @__PURE__ */ d("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ d("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: y(this, Qs), children: /* @__PURE__ */ d("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      n,
      m,
      c ? null : /* @__PURE__ */ d("span", { className: "caret" }, "caret")
    ];
  }
}
Ln = new WeakMap(), Qs = new WeakMap(), ti = new WeakMap(), ei = new WeakMap(), ni = new WeakSet(), nl = function() {
  const { searchHint: t, state: { value: n, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === n);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const Hh = (s, e, t = "is-match") => s.reduce((n, i) => [...n].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, u) => {
    u && (o.push(/* @__PURE__ */ d("span", { class: t, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), e);
var si, ii, sl, oi, il, ri;
class Bh extends Ja {
  constructor() {
    super(...arguments);
    _(this, ii);
    _(this, oi);
    _(this, si, Y());
    _(this, ri, ({ item: t }) => {
      const n = t.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(n) : (r(n), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const t = this.element;
    t && f(t).on("mouseenter.picker.zui", ".menu-item", (n) => {
      const i = f(n.currentTarget);
      this.setHoverItem(i.children("a").attr("data-value") ?? "");
    });
  }
  componentWillUnmount() {
    super.componentWillUnmount();
    const t = this.element;
    t && f(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const n = P(this, ii, sl).call(this);
      n != null && n.length && n.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(t) {
    return N(
      super._getClass(t),
      "picker-menu"
    );
  }
  _renderPop(t) {
    const { menu: n } = t;
    return /* @__PURE__ */ d(
      ye,
      {
        ref: y(this, si),
        className: "picker-menu-list",
        items: P(this, oi, il).call(this),
        onClickItem: y(this, ri),
        ...n
      }
    );
  }
}
si = new WeakMap(), ii = new WeakSet(), sl = function() {
  const t = this.element;
  if (t)
    return f(t).find(".menu-item>a.hover");
}, oi = new WeakSet(), il = function() {
  const { selections: t, items: n, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = f.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = n.reduce((u, c) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: b,
      content: v,
      ...w
    } = c;
    return p === i && (a = !0), g && u.push({
      key: p,
      active: r.has(p),
      text: v ? null : typeof g == "string" ? Hh(l, [g]) : /* @__PURE__ */ d(ee, { content: g }),
      className: N(b, { hover: p === i }),
      "data-value": p,
      content: v,
      ...w
    }), u;
  }, []);
  return !a && h.length && (h[0].className = N(h[0].className, "hover")), h;
}, ri = new WeakMap();
var He, gt, Et, Be, Ye;
let Wh = (Ye = class extends Pt {
  constructor(t) {
    super(t);
    _(this, He, void 0);
    _(this, gt, void 0);
    _(this, Et, void 0);
    _(this, Be, void 0);
    $(this, Et, 0), this.isEmptyValue = (r) => y(this, Be).has(r), this.toggleValue = (r, a) => {
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
    }, this.isSelected = (r) => this.valueList.includes(r), f.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: n = ",", emptyValue: i = "" } = this.props;
    $(this, Be, new Set(i.split(n)));
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
    return y(this, Be).values().next().value;
  }
  async load() {
    let t = y(this, gt);
    t && t.abort(), t = new AbortController(), $(this, gt, t);
    const { items: n, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof n == "function") {
      if (await hs(i || 500), y(this, gt) !== t || (r = await n(o, { signal: t.signal }), y(this, gt) !== t))
        return r;
    } else if (o.length) {
      const a = f.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = n.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: p
        } = h;
        return a.every((m) => u.toLowerCase().includes(m) || c.toLowerCase().includes(m) || typeof p == "string" && p.toLowerCase().includes(m)) && l.push(h), l;
      }, []) : r = n;
    } else
      r = n;
    return $(this, gt, void 0), r;
  }
  async update(t) {
    const { state: n, props: i } = this, o = y(this, He) || {}, r = {};
    if ($(this, He, o), (t || o.search !== n.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = n.search), t || o.value !== n.value) {
      const l = r.items || n.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = n.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    y(this, Et) && clearTimeout(y(this, Et)), $(this, Et, window.setTimeout(() => {
      $(this, Et, 0), this.update();
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
    (t = y(this, gt)) == null || t.abort(), $(this, gt, void 0), $(this, He, void 0), clearTimeout(y(this, Et)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Lh : Oh);
  }
  formatValueList(t) {
    let n = [];
    return typeof t == "string" && t.length ? n = f.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (n = f.unique(t)), n.filter((i) => !this.isEmptyValue(i));
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
}, He = new WeakMap(), gt = new WeakMap(), Et = new WeakMap(), Be = new WeakMap(), Ye.defaultProps = {
  ...Pt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, Ye.Pop = Bh, Ye);
const ai = class ai extends z {
};
ai.NAME = "Picker", ai.Component = Wh;
let Hr = ai;
const li = class li extends $t {
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
    return i && n.middleware.push(Ri()), o && n.middleware.push(o === !0 ? sn() : sn(o)), r && n.middleware.push(to({ element: this.$arrow[0] })), a && n.middleware.push(Ii(a)), n;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = Wo(e, t, () => {
      Pi(e, t, this.computePositionConfig()).then(({ x: n, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${n}px`,
          top: `${i}px`
        }), !to || !r.arrow)
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
    const t = f(e);
    if (!t.length)
      throw new Error("popovers target must exist.");
    const { strategy: n } = this.options;
    t.addClass(n), t.addClass("hidden"), t.addClass("z-50"), t.on("click", (i) => {
      f(i.target).data("dismiss") === "popovers" && this.hide();
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
    const t = f('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
    t.on("click", () => {
      this.hide();
    }), this.$target.parent().append(t), this.$mask = t;
  }
  initArrow() {
    const { arrow: e } = this.options;
    e && (this.$arrow = f('<div class="fl-arrow bg-inherit rotate-45 absolute w-2 h-2"></div>'), this.$target.append(this.$arrow));
  }
};
li.NAME = "Popovers", li.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0
};
let Br = li;
var On, Hn, jt, ci, Bn, Wn, Fn, uo, zn;
let Fh = (zn = class extends B {
  constructor(t) {
    super(t);
    _(this, Fn);
    _(this, On, void 0);
    _(this, Hn, Y());
    _(this, jt, 0);
    _(this, ci, (t) => {
      const n = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), n.trim() !== "" && (i == null || i("", t));
      });
    });
    _(this, Bn, (t) => {
      const n = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || n === i || (P(this, Fn, uo).call(this), $(this, jt, window.setTimeout(() => {
          o(i, t), $(this, jt, 0);
        }, this.props.delay || 0)));
      });
    });
    _(this, Wn, (t) => {
      const n = t.type === "focus";
      this.setState({ focus: n }, () => {
        const i = n ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, $(this, On, t.id || `search-box-${f.guid++}`);
  }
  get id() {
    return y(this, On);
  }
  get input() {
    return y(this, Hn).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    P(this, Fn, uo).call(this);
  }
  render(t, n) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: p, searchIcon: m, clearIcon: g } = t, { focus: b, value: v } = n, { id: w } = this, C = typeof v != "string" || !v.trim().length;
    let x, T, S;
    return m && (S = m === !0 ? /* @__PURE__ */ d("span", { class: "magnifier" }) : /* @__PURE__ */ d(tt, { icon: m })), !p && m && (x = /* @__PURE__ */ d("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), g && !C ? T = /* @__PURE__ */ d(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: y(this, ci),
        children: g === !0 ? /* @__PURE__ */ d("span", { class: "close" }) : /* @__PURE__ */ d(tt, { icon: g })
      }
    ) : p && m && (T = S), T && (T = /* @__PURE__ */ d("label", { for: w, class: "input-control-suffix", children: T }, "suffix")), /* @__PURE__ */ d("div", { class: N("search-box input-control", r, { focus: b, empty: C, "has-prefix-icon": x, "has-suffix-icon": T }), style: a, children: [
      x,
      /* @__PURE__ */ d(
        "input",
        {
          ref: y(this, Hn),
          id: w,
          type: "text",
          class: N("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: y(this, Bn),
          onChange: y(this, Bn),
          onFocus: y(this, Wn),
          onBlur: y(this, Wn)
        }
      ),
      T
    ] });
  }
}, On = new WeakMap(), Hn = new WeakMap(), jt = new WeakMap(), ci = new WeakMap(), Bn = new WeakMap(), Wn = new WeakMap(), Fn = new WeakSet(), uo = function() {
  y(this, jt) && clearTimeout(y(this, jt)), $(this, jt, 0);
}, zn.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, zn);
const hi = class hi extends z {
};
hi.NAME = "SearchBox", hi.Component = Fh;
let Wr = hi;
const ui = class ui extends z {
};
ui.NAME = "Toolbar", ui.Component = Zt;
let Fr = ui;
const zh = '[data-toggle="tooltip"]', di = class di extends _t {
  _getRenderOptions() {
    const { type: e, className: t, title: n, content: i } = this.options;
    let o = n, r = i;
    return r === void 0 && (r = o, o = void 0), {
      ...super._getRenderOptions(),
      title: o,
      content: r,
      className: N("tooltip", e, t, o ? "tooltip-has-title" : ""),
      contentClass: o ? "tooltip-content" : ""
    };
  }
};
di.NAME = "Tooltip", di.DEFAULT = {
  ..._t.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
let Nt = di;
f(document).on(`click${Nt.NAMESPACE} mouseenter${Nt.NAMESPACE}`, zh, (s) => {
  const e = f(s.currentTarget);
  if (e.length && !e.data(Nt.KEY)) {
    const t = e.data("trigger") || "hover";
    if ((s.type === "mouseover" ? "hover" : "click") !== t)
      return;
    Nt.ensure(e, { show: Nt.DEFAULT.delay || !0 }), s.preventDefault();
  }
});
function jh({
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
  target: p,
  trailingIcon: m,
  hint: g,
  checked: b,
  actions: v,
  show: w,
  level: C = 0,
  items: x,
  ...T
}) {
  const S = Array.isArray(v) ? { items: v } : v;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = N("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ d(
    "div",
    {
      className: N("tree-item-content", t, { disabled: l, active: h }),
      title: g,
      "data-target": p,
      style: { paddingLeft: `calc(${C} * var(--tree-indent, 20px))` },
      "data-level": C,
      ...T,
      children: [
        /* @__PURE__ */ d("span", { class: `tree-toggle-icon${x ? " state" : ""}`, children: x ? /* @__PURE__ */ d("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof b == "boolean" ? /* @__PURE__ */ d("div", { class: `tree-checkbox checkbox-primary${b ? " checked" : ""}`, children: /* @__PURE__ */ d("label", {}) }) : null,
        /* @__PURE__ */ d(tt, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ d("a", { className: "text tree-link not-nested-toggle", href: a, style: o, ...r, children: c }) : /* @__PURE__ */ d("span", { class: "text", style: o, ...r, children: c }),
        /* @__PURE__ */ d(ee, { content: i }),
        n,
        S ? /* @__PURE__ */ d(Zt, { ...S }) : null,
        /* @__PURE__ */ d(tt, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Ke;
let Vh = (Ke = class extends Lo {
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
    return t && (e.className = N(e.className, "tree-hover")), e;
  }
}, Ke.ItemComponents = {
  item: jh
}, Ke.NAME = "tree", Ke);
const fi = class fi extends z {
};
fi.NAME = "Tree", fi.Component = Vh;
let zr = fi;
const pi = class pi extends $t {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: n } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = n ? vc(n) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
  }
  initUploadCash() {
    const { name: e, uploadText: t, uploadIcon: n, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = f('<ul class="file-list py-1"></ul>');
    const l = f(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = f(`<label class="btn ${o}" for="${e}">${t}</label>`), n) {
        const p = f(`<i class="icon icon-${n}"></i>`);
        this.$label.prepend(p);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = f(`<span class="text-primary">${t}</span>`);
    if (n) {
      const c = f(`<i class="icon icon-${n} mr-1"></i>`);
      h.prepend(c);
    }
    this.$label = f(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${e}"></label>`).append(h).append(l), this.bindDragEvent();
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
    this.$input = f("<input />").addClass("hidden").prop("type", "file").prop("name", e).prop("id", e).prop("multiple", t).on("change", (i) => {
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
    return this.addFile(e), f('<li class="file-item my-1 flex items-center gap-2"></li>').append(t ? this.fileIcon() : null).append(this.createFileInfo(e)).append(this.createRenameContainer(e));
  }
  fileIcon() {
    const { icon: e } = this.options;
    return f(`<i class="icon icon-${e}"></i>`);
  }
  fileRenameBtn() {
    const { useIconBtn: e, renameText: t, renameIcon: n, renameClass: i } = this.options;
    if (e) {
      const o = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Nt(o, { title: t }), o;
    }
    return f("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: n, deleteClass: i } = this.options;
    if (e) {
      const o = f(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${n}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Nt(o, { title: t })), o;
    }
    return f("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return f(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return f(`<span class="file-size text-gray">${wc(e)}</span>`);
  }
  createFileInfo(e) {
    const { renameBtn: t, deleteBtn: n, showSize: i } = this.options, o = f('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(e.name)), i && o.append(this.fileSize(e.size)), t && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = f(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), n && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(e.name))
    ), o;
  }
  createRenameContainer(e) {
    const { confirmText: t, cancelText: n, duplicatedHint: i } = this.options, o = f('<div class="input-group input-rename-container hidden"></div>'), r = f("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).on("keydown", (u) => {
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
    }), a = f("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(t).on("click", () => {
      const u = o.closest(".file-item"), c = u.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(e, r.val()), o.addClass("hidden"), u.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = f("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(n).on("click", () => {
      r.val(e.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = f('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
};
pi.NAME = "Upload", pi.DEFAULT = {
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
let fo = pi;
const mi = class mi extends fo {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = f(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(f('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: e, tip: t, uploadText: n, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = f('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = f('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = f(`<label for="${e}" class="text-primary cursor-pointer">${n}</label>`);
    if (i) {
      const a = f(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = f('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), t && this.$tip.append(f(`<span class="upload-tip">${t}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = f('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      f('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${n.result})` }).prependTo(t);
    }, n.readAsDataURL(e);
  }
  createFileInfo(e) {
    const t = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = f(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return f('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(f(`<div class="file-name py-1 ellipsis">${e.name}</div>`)).append(t);
  }
  createRenameContainer(e) {
    const { duplicatedHint: t } = this.options, n = f("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", e.name).css({ width: 120 }).on("keydown", (i) => {
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
mi.NAME = "UploadImgs", mi.DEFAULT = {
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
let jr = mi;
const gi = class gi extends Ct {
  _getLayoutOptions() {
    const e = super._getLayoutOptions();
    return this.options.element || (e[0] = {
      getBoundingClientRect: this._getClickBounding
    }), e;
  }
};
gi.NAME = "ContextMenu", gi.DEFAULT = {
  ...Ct.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let po = gi;
let Uh = class extends B {
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
    return /* @__PURE__ */ d("div", { class: "dashboard-block-cell", style: { left: e, top: t, width: r, height: a }, children: /* @__PURE__ */ d(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${u ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": n,
        children: [
          /* @__PURE__ */ d("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ d("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ d("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ d("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ d("div", { class: "more-vert" }) }) }) : null
          ] }),
          f.isPlainObject(l) && l.html ? /* @__PURE__ */ d(Xn, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ d("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const Vr = ([s, e, t, n], [i, o, r, a]) => !(s + t <= i || i + r <= s || e + n <= o || o + a <= e), ns = "Dashboard:Block.cache:";
var jn;
let qh = (jn = class extends B {
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
      const { menu: r } = o, { onClickMenu: a } = this.props;
      po.show({
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
      const r = q(i, n);
      try {
        const a = await fetch(q(r, n), {
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
        const l = /* @__PURE__ */ d("div", { class: "panel center text-danger p-5", children: [
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
        typeof n == "string" ? tn.set(`${ns}${n}:${e}`, t) : tn.session.set(`${ns}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const n = typeof t == "string" ? tn.get(`${ns}${t}:${e}`) : tn.session.get(`${ns}${e}`);
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
        content: p,
        ...m
      } = o, [g, b] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: g,
        height: b,
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
      if (n !== t && Vr(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [n, i] of this.map.entries())
      n !== e && Vr(i, t) && (i[1] = t[1] + t[3], this._insertBlock(n, i));
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
    return /* @__PURE__ */ d("div", { class: "dashboard", children: /* @__PURE__ */ d("div", { class: "dashboard-blocks", style: { height: t * n }, children: e.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [p, m, g, b] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ d(
        Uh,
        {
          id: l,
          index: a,
          left: `${100 * p / i}%`,
          top: n * m,
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
}, jn.defaultProps = {
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
}, jn);
const yi = class yi extends z {
};
yi.NAME = "Dashboard", yi.Component = qh;
let Ur = yi;
var Vt, Ut;
class qr extends B {
  constructor(t) {
    super(t);
    _(this, Vt, void 0);
    _(this, Ut, void 0);
    $(this, Vt, 0), $(this, Ut, null), this._handleWheel = (n) => {
      const { wheelContainer: i } = this.props, o = n.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? n.deltaX : n.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && n.preventDefault();
      }
    }, this._handleMouseMove = (n) => {
      const { dragStart: i } = this.state;
      i && (y(this, Vt) && cancelAnimationFrame(y(this, Vt)), $(this, Vt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? n.clientX - i.x : n.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), $(this, Vt, 0);
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
    t && ($(this, Ut, typeof t == "string" ? document : t.current), y(this, Ut).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), y(this, Ut) && y(this, Ut).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, b = {};
    return n === "horz" ? (g.height = i, g.width = t, b.width = this.barSize, b.left = Math.round(Math.min(c, p) * (t - b.width) / c)) : (g.width = i, g.height = t, b.height = this.barSize, b.top = Math.round(Math.min(c, p) * (t - b.height) / c)), /* @__PURE__ */ d(
      "div",
      {
        className: N("scrollbar", o, {
          "is-vert": n === "vert",
          "is-horz": n === "horz",
          "is-dragging": m
        }),
        style: g,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ d(
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
Vt = new WeakMap(), Ut = new WeakMap();
const $s = /* @__PURE__ */ new Map(), xs = [];
function ol(s, e) {
  const { name: t } = s;
  if (!(e != null && e.override) && $s.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  $s.set(t, s), e != null && e.buildIn && !xs.includes(t) && xs.push(t);
}
function Ht(s, e) {
  ol(s, e);
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
function rl(s) {
  return $s.delete(s);
}
function Yh(s) {
  if (typeof s == "string") {
    const e = $s.get(s);
    return e || console.warn(`DTable: Cannot found plugin "${s}"`), e;
  }
  if (typeof s == "function" && "plugin" in s)
    return s.plugin;
  if (typeof s == "object")
    return s;
  console.warn("DTable: Invalid plugin", s);
}
function al(s, e, t) {
  return e.forEach((n) => {
    var o;
    if (!n)
      return;
    const i = Yh(n);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && al(s, i.plugins, t), s.push(i), t.add(i.name)));
  }), s;
}
function Kh(s = [], e = !0) {
  return e && xs.length && s.unshift(...xs), s != null && s.length ? al([], s, /* @__PURE__ */ new Set()) : [];
}
function Yr() {
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
function Gh(s, e, t) {
  return s && (e && (s = Math.max(e, s)), t && (s = Math.min(t, s))), s;
}
function Kr(s, e) {
  return typeof s == "string" && (s = s.endsWith("%") ? parseFloat(s) / 100 : parseFloat(s)), typeof e == "number" && (typeof s != "number" || isNaN(s)) && (s = e), s;
}
function Vi(s, e = !1) {
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
function Xh(s, e, t, n) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (C) => (typeof C == "function" && (C = C.call(s)), C = Kr(C, 0), C < 1 && (C = Math.round(C * n)), C), u = {
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
  let b = !1;
  const v = [], w = {};
  if (t.forEach((C) => {
    const { colTypes: x, onAddCol: T } = C;
    x && Object.entries(x).forEach(([S, M]) => {
      w[S] || (w[S] = []), w[S].push(M);
    }), T && v.push(T);
  }), e.cols.forEach((C) => {
    if (C.hidden)
      return;
    const { type: x = "", name: T } = C, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...C,
      type: x
    }, M = {
      name: T,
      type: x,
      setting: S,
      flex: 0,
      left: 0,
      width: 0,
      realWidth: 0,
      visible: !0,
      index: m.length
    }, I = w[x];
    I && I.forEach((O) => {
      const F = typeof O == "function" ? O.call(s, S) : O;
      F && Object.assign(S, F, C);
    });
    const { fixed: A, flex: D, minWidth: H = o, maxWidth: L = r } = S, R = Kr(S.width || i, i);
    M.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, M.width = Gh(R < 1 ? Math.round(R * n) : R, H, L), v.forEach((O) => O.call(s, M)), m.push(M), g[M.name] = M;
    const E = A ? A === "left" ? c : p : u;
    E.list.push(M), E.totalWidth += M.width, E.width = E.totalWidth, M.flex && E.flexList.push(M), typeof S.order == "number" && (b = !0);
  }), b) {
    const C = (x, T) => (x.setting.order ?? 0) - (T.setting.order ?? 0);
    m.sort(C), c.list.sort(C), u.list.sort(C), p.list.sort(C);
  }
  return Vi(c, !0), Vi(p, !0), u.widthSetting = n - c.width - p.width, Vi(u), {
    list: m,
    map: g,
    left: c,
    center: u,
    right: p
  };
}
function Jh({ col: s, className: e, height: t, row: n, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...p }) {
  var R;
  const m = {
    left: u ?? s.left,
    top: c ?? n.top,
    width: h ?? s.realWidth,
    height: t,
    ...r
  }, { align: g, border: b } = s.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...s.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", l, e, s.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], C = ["dtable-cell-content", s.setting.cellClass], x = (R = n.data) == null ? void 0 : R[s.name], T = [a ?? x ?? ""], S = i ? i(T, { row: n, col: s, value: x }, G) : T, M = [], I = [], A = {}, D = {};
  let H = "div";
  S == null || S.forEach((E) => {
    if (typeof E == "object" && E && !X(E) && ("html" in E || "className" in E || "style" in E || "attrs" in E || "children" in E || "tagName" in E)) {
      const O = E.outer ? M : I;
      E.html ? O.push(/* @__PURE__ */ d("div", { className: N("dtable-cell-html", E.className), style: E.style, dangerouslySetInnerHTML: { __html: E.html }, ...E.attrs ?? {} })) : (E.style && Object.assign(E.outer ? m : v, E.style), E.className && (E.outer ? w : C).push(E.className), E.children && O.push(E.children), E.attrs && Object.assign(E.outer ? A : D, E.attrs)), E.tagName && !E.outer && (H = E.tagName);
    } else
      I.push(E);
  });
  const L = H;
  return /* @__PURE__ */ d(
    "div",
    {
      className: N(w),
      style: m,
      "data-col": s.name,
      "data-row": n.id,
      "data-type": s.type || null,
      ...p,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ d(L, { className: N(C), style: v, ...D, children: I }),
        M
      ]
    }
  );
}
function Ui({
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
  CellComponent: u = Jh,
  onRenderCell: c
}) {
  var b;
  const p = Array.isArray(s) ? s : [s], m = ((b = p[0]) == null ? void 0 : b.top) ?? 0, g = p.length;
  return /* @__PURE__ */ d(
    "div",
    {
      className: N("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ d("div", { className: "dtable-cells-container", style: { left: -n, top: -i + m }, children: p.reduce((v, w, C) => {
        const x = e.length;
        return e.forEach((T, S) => {
          v.push(
            /* @__PURE__ */ d(
              u,
              {
                className: N(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === x - 1 ? "is-last-in-row" : "",
                  C ? "" : "is-first-row",
                  C === g - 1 ? "is-last-row" : ""
                ),
                col: T,
                row: w,
                top: w.top - m,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${T.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Gr({
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
  let p = null;
  i.list.length && (p = /* @__PURE__ */ d(
    Ui,
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
  let m = null;
  o.list.length && (m = /* @__PURE__ */ d(
    Ui,
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
  return r.list.length && (g = /* @__PURE__ */ d(
    Ui,
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
  )), /* @__PURE__ */ d(
    "div",
    {
      className: N("dtable-block", h),
      style: { ...u, top: s, height: e },
      children: [
        p,
        m,
        g
      ]
    }
  );
}
var qt, We, Tt, yt, Yt, Z, bt, rt, le, Vn, Fe, ce, wt, he, ue, bi, ll, wi, cl, vi, hl, _i, ul, Un, mo, ze, je, qn, Yn, Kn, Gn, Ve, os, Ci, dl, $i, fl, xi, pl, Ge;
let Zh = (Ge = class extends B {
  constructor(t) {
    super(t);
    _(this, bi);
    _(this, wi);
    _(this, vi);
    _(this, _i);
    _(this, Un);
    _(this, Ve);
    _(this, Ci);
    _(this, $i);
    _(this, xi);
    _(this, qt, void 0);
    _(this, We, void 0);
    _(this, Tt, void 0);
    _(this, yt, void 0);
    _(this, Yt, void 0);
    _(this, Z, void 0);
    _(this, bt, void 0);
    _(this, rt, void 0);
    _(this, le, void 0);
    _(this, Vn, void 0);
    _(this, Fe, void 0);
    _(this, ce, void 0);
    _(this, wt, void 0);
    _(this, he, void 0);
    _(this, ue, void 0);
    _(this, ze, void 0);
    _(this, je, void 0);
    _(this, qn, void 0);
    _(this, Yn, void 0);
    _(this, Kn, void 0);
    _(this, Gn, void 0);
    this.ref = Y(), $(this, qt, 0), $(this, Tt, !1), $(this, Z, []), $(this, rt, /* @__PURE__ */ new Map()), $(this, le, {}), $(this, Fe, []), $(this, ce, { in: !1 }), this.updateLayout = () => {
      y(this, qt) && cancelAnimationFrame(y(this, qt)), $(this, qt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), $(this, qt, 0);
      }));
    }, $(this, wt, (n, i) => {
      i = i || n.type;
      const o = y(this, rt).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, n) === !1) {
            n.stopPropagation(), n.preventDefault();
            break;
          }
      }
    }), $(this, he, (n) => {
      y(this, wt).call(this, n, `window_${n.type}`);
    }), $(this, ue, (n) => {
      y(this, wt).call(this, n, `document_${n.type}`);
    }), $(this, ze, (n, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), n[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return y(this, Z).forEach((h) => {
        h[l] && (n = h[l].call(this, n, i, o));
      }), this.options[l] && (n = this.options[l].call(this, n, i, o)), a.setting[l] && (n = a.setting[l].call(this, n, i, o)), n;
    }), $(this, je, (n, i) => {
      i === "horz" ? this.scroll({ scrollLeft: n }) : this.scroll({ scrollTop: n });
    }), $(this, qn, (n) => {
      var l, h, u;
      const i = this.getPointerInfo(n);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, n, { colName: r, element: a }), y(this, Z).forEach((c) => {
          var p;
          (p = c.onHeaderCellClick) == null || p.call(this, n, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((p) => p.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const p of y(this, Z))
            if (((u = p.onCellClick) == null ? void 0 : u.call(this, n, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), $(this, Yn, (n) => {
      const i = n.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), $(this, Kn, (n) => {
      const i = f(n.target).closest(".dtable-cell");
      if (!i.length)
        return P(this, Ve, os).call(this, !1);
      P(this, Ve, os).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), $(this, Gn, () => {
      P(this, Ve, os).call(this, !1);
    }), $(this, We, t.id ?? `dtable-${Ga(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Yt, Object.freeze(Kh(t.plugins))), y(this, Yt).forEach((n) => {
      var a;
      const { methods: i, data: o, state: r } = n;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(y(this, le), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = n.onCreate) == null || a.call(this, n);
    });
  }
  get options() {
    var t;
    return ((t = y(this, bt)) == null ? void 0 : t.options) || y(this, yt) || Yr();
  }
  get plugins() {
    return y(this, Z);
  }
  get layout() {
    return y(this, bt);
  }
  get id() {
    return y(this, We);
  }
  get data() {
    return y(this, le);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return y(this, ce);
  }
  componentWillReceiveProps() {
    $(this, yt, void 0);
  }
  componentDidMount() {
    y(this, Tt) ? this.forceUpdate() : P(this, Un, mo).call(this), y(this, Z).forEach((n) => {
      let { events: i } = n;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", y(this, qn)), this.on("keydown", y(this, Yn));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", y(this, Kn)), this.on("mouseleave", y(this, Gn))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: n } = this;
        if (n) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(n), $(this, Vn, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    y(this, Z).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    y(this, Tt) ? P(this, Un, mo).call(this) : y(this, Z).forEach((t) => {
      var n;
      (n = t.onUpdated) == null || n.call(this);
    });
  }
  componentWillUnmount() {
    var n;
    (n = y(this, Vn)) == null || n.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of y(this, rt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), y(this, he)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), y(this, ue)) : t.removeEventListener(i, y(this, wt));
    y(this, Z).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), y(this, Yt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, le, {}), y(this, rt).clear();
  }
  on(t, n, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = y(this, rt).get(t);
    o ? o.push(n) : (y(this, rt).set(t, [n]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), y(this, he)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), y(this, ue)) : (r = this.element) == null || r.addEventListener(t, y(this, wt)));
  }
  off(t, n, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = y(this, rt).get(t);
    if (!o)
      return;
    const r = o.indexOf(n);
    r >= 0 && o.splice(r, 1), o.length || (y(this, rt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), y(this, he)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), y(this, ue)) : (a = this.element) == null || a.removeEventListener(t, y(this, wt)));
  }
  emitCustomEvent(t, n) {
    y(this, wt).call(this, n instanceof Event ? n : new CustomEvent(t, { detail: n }), t);
  }
  scroll(t, n) {
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
      const { offsetLeft: b, offsetTop: v } = t;
      typeof b == "number" && (p = i + b), typeof v == "number" && (p = o + v);
    }
    const g = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, h - u)), p !== i && (g.scrollLeft = p)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - a)), m !== o && (g.scrollTop = m)), Object.keys(g).length ? (this.setState(g, () => {
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
    if (!y(this, yt))
      return;
    typeof t == "function" && (n = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, bt, void 0);
    else if (i === "options") {
      if ($(this, yt, void 0), !y(this, bt))
        return;
      $(this, bt, void 0);
    }
    this.setState(o ?? ((r) => ({ renderCount: r.renderCount + 1 })), n);
  }
  getPointerInfo(t) {
    const n = t.target;
    if (!n || n.closest(".no-cell-event"))
      return;
    const i = f(n).closest(".dtable-cell");
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
    return J(y(this, Fe), t, n, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((n) => n.name === t);
  }
  render() {
    const t = P(this, xi, pl).call(this), { className: n, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", n, {
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
      P(this, bi, ll).call(this, t),
      P(this, wi, cl).call(this, t),
      P(this, vi, hl).call(this, t),
      P(this, _i, ul).call(this, t)
    ), y(this, Z).forEach((m) => {
      var b;
      const g = (b = m.onRender) == null ? void 0 : b.call(this, t);
      g && (g.style && Object.assign(u, g.style), g.className && c.push(g.className), g.children && p.push(g.children));
    })), /* @__PURE__ */ d(
      "div",
      {
        id: y(this, We),
        className: N(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
}, qt = new WeakMap(), We = new WeakMap(), Tt = new WeakMap(), yt = new WeakMap(), Yt = new WeakMap(), Z = new WeakMap(), bt = new WeakMap(), rt = new WeakMap(), le = new WeakMap(), Vn = new WeakMap(), Fe = new WeakMap(), ce = new WeakMap(), wt = new WeakMap(), he = new WeakMap(), ue = new WeakMap(), bi = new WeakSet(), ll = function(t) {
  const { header: n, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!n)
    return null;
  if (n === !0)
    return /* @__PURE__ */ d(
      Gr,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: y(this, ze)
      },
      "header"
    );
  const a = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ d(
    Xi,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, wi = new WeakSet(), cl = function(t) {
  const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ d(
    Gr,
    {
      className: "dtable-body",
      top: n,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: y(this, ze)
    },
    "body"
  );
}, vi = new WeakSet(), hl = function(t) {
  let { footer: n } = t;
  if (typeof n == "function" && (n = n.call(this, t)), !n)
    return null;
  const i = Array.isArray(n) ? n : [n];
  return /* @__PURE__ */ d(
    Xi,
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
}, _i = new WeakSet(), ul = function(t) {
  const n = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: p } = t, { scrollbarSize: m = 12, horzScrollbarPos: g } = this.options;
  return a > r && n.push(
    /* @__PURE__ */ d(
      qr,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: y(this, je),
        left: o,
        bottom: (g === "inside" ? 0 : -m) + c,
        size: m,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ d("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: p + h } }),
    /* @__PURE__ */ d("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: p + h } })
  ), u > h && n.push(
    /* @__PURE__ */ d(
      qr,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: y(this, je),
        right: 0,
        size: m,
        top: p,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), n.length ? n : null;
}, Un = new WeakSet(), mo = function() {
  var t;
  $(this, Tt, !1), (t = this.options.afterRender) == null || t.call(this), y(this, Z).forEach((n) => {
    var i;
    return (i = n.afterRender) == null ? void 0 : i.call(this);
  });
}, ze = new WeakMap(), je = new WeakMap(), qn = new WeakMap(), Yn = new WeakMap(), Kn = new WeakMap(), Gn = new WeakMap(), Ve = new WeakSet(), os = function(t) {
  const { element: n, options: i } = this;
  if (!n)
    return;
  const o = f(n), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = y(this, ce);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), $(this, ce, r);
}, Ci = new WeakSet(), dl = function() {
  if (y(this, yt))
    return !1;
  const n = { ...Yr(), ...y(this, Yt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, yt, n), $(this, Z, y(this, Yt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = n;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, n) : a)), (!r || r(l)) && (l !== n && Object.assign(n, l), i.push(o)), i;
  }, [])), $(this, Fe, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, $i = new WeakSet(), fl = function() {
  var H, L;
  const { plugins: t } = this;
  let n = y(this, yt);
  const i = {
    flex: /* @__PURE__ */ d("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ d("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((R) => {
    var O;
    const E = (O = R.beforeLayout) == null ? void 0 : O.call(this, n);
    E && (n = { ...n, ...E }), Object.assign(i, R.footer);
  });
  let o = n.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: R } = this;
    if (R)
      r = R.clientWidth;
    else {
      $(this, Tt, !0);
      return;
    }
  }
  const a = Xh(this, n, t, r), { data: l, rowKey: h = "id", rowHeight: u } = n, c = [], p = (R, E, O) => {
    var j, ot;
    const F = { data: O ?? { [h]: R }, id: R, index: c.length, top: 0 };
    if (O || (F.lazy = !0), c.push(F), ((j = n.onAddRow) == null ? void 0 : j.call(this, F, E)) !== !1) {
      for (const Je of t)
        if (((ot = Je.onAddRow) == null ? void 0 : ot.call(this, F, E)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let R = 0; R < l; R++)
      p(`${R}`, R);
  else
    Array.isArray(l) && l.forEach((R, E) => {
      typeof R == "object" ? p(`${R[h] ?? ""}`, E, R) : p(`${R ?? ""}`, E);
    });
  let m = c;
  const g = {};
  if (n.onAddRows) {
    const R = n.onAddRows.call(this, m);
    R && (m = R);
  }
  for (const R of t) {
    const E = (H = R.onAddRows) == null ? void 0 : H.call(this, m);
    E && (m = E);
  }
  m.forEach((R, E) => {
    g[R.id] = R, R.index = E, R.top = R.index * u;
  });
  const { header: b, footer: v } = n, w = b ? n.headerHeight || u : 0, C = v ? n.footerHeight || u : 0;
  let x = n.height, T = 0;
  const S = m.length * u, M = w + C + S;
  if (typeof x == "function" && (x = x.call(this, M)), x === "auto")
    T = M;
  else if (typeof x == "object")
    T = Math.min(x.max, Math.max(x.min, M));
  else if (x === "100%") {
    const { parent: R } = this;
    if (R)
      T = R.clientHeight;
    else {
      T = 0, $(this, Tt, !0);
      return;
    }
  } else
    T = x;
  const I = T - w - C, A = {
    options: n,
    allRows: c,
    width: r,
    height: T,
    rows: m,
    rowsMap: g,
    rowHeight: u,
    rowsHeight: I,
    rowsHeightTotal: S,
    header: b,
    footer: v,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: C,
    cols: a
  }, D = (L = n.onLayout) == null ? void 0 : L.call(this, A);
  D && Object.assign(A, D), t.forEach((R) => {
    if (R.onLayout) {
      const E = R.onLayout.call(this, A);
      E && Object.assign(A, E);
    }
  }), $(this, bt, A);
}, xi = new WeakSet(), pl = function() {
  (P(this, Ci, dl).call(this) || !y(this, bt)) && P(this, $i, fl).call(this);
  const { layout: t } = this;
  if (!t)
    return;
  const { cols: { center: n } } = t;
  let { scrollLeft: i } = this.state;
  i = Math.min(Math.max(0, n.totalWidth - n.width), i);
  let o = 0;
  n.list.forEach((v) => {
    v.left = o, o += v.realWidth, v.visible = v.left + v.realWidth >= i && v.left <= i + n.width;
  });
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), p = u + a, m = Math.min(l.length, Math.ceil(p / h)), g = [], { rowDataGetter: b } = this.options;
  for (let v = c; v < m; v++) {
    const w = l[v];
    w.lazy && b && (w.data = b([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, Ge.addPlugin = ol, Ge.removePlugin = rl, Ge);
const Qh = {
  html: { component: Xn }
}, tu = {
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
        component: Xn,
        props: { html: q(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(Qh[l], o == null ? void 0 : o[l]);
      const u = {};
      h.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && f.extend(u, typeof m == "function" ? m.call(this, e) : m), l = p.component || l;
        }
      }, { props: {} });
      const c = l;
      s[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ d(c, { ...u }) };
    }), s;
  }
}, eu = Ht(tu);
function ml(s, e, t, n) {
  if (typeof s == "function" && (s = s(e)), typeof s == "string" && s.length && (s = { url: s }), !s)
    return t;
  const { url: i, ...o } = s, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ d("a", { href: q(i, e.row.data), ...n, ...o, ...a, children: t });
}
function zo(s, e, t) {
  var n;
  if (s != null)
    return t = t ?? ((n = e.row.data) == null ? void 0 : n[e.col.name]), typeof s == "function" ? s(t, e) : q(s, t);
}
function gl(s, e, t, n) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), s === !1 ? t : (s === !0 && (s = "[yyyy-]MM-dd hh:mm"), typeof s == "function" && (s = s(t, e)), lt(t, s, n ?? t))) : n ?? t;
}
function yl(s, e) {
  const { link: t } = e.col.setting, n = ml(t, e, s[0]);
  return n && (s[0] = n), s;
}
function bl(s, e) {
  const { format: t } = e.col.setting;
  return t && (s[0] = zo(t, e, s[0])), s;
}
function wl(s, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? s[0] = t(s[0], e) : typeof t == "object" && t && (s[0] = t[s[0]] ?? s[0]), s;
}
function vl(s, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: n = t, invalidDate: i } = e.col.setting;
  return s[0] = gl(n, e, s[0], i), s;
}
function go(s, e, t = !1) {
  const { html: n = t } = e.col.setting;
  if (n === !1)
    return s;
  const i = s[0], o = n === !0 ? i : zo(n, e, i);
  return s[0] = {
    html: o
  }, s;
}
const nu = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s, e) {
        return go(s, e, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(s, { col: e }) {
        const { circleSize: t = 24, circleBorderSize: n = 1, circleBgColor: i = "var(--color-border)", circleColor: o = "var(--color-success-500)" } = e.setting, r = (t - n) / 2, a = t / 2, l = s[0];
        return s[0] = /* @__PURE__ */ d("svg", { width: t, height: t, children: [
          /* @__PURE__ */ d("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: i, fill: "transparent" }),
          /* @__PURE__ */ d("circle", { cx: a, cy: a, r, "stroke-width": n, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * r * 2, "stroke-dashoffset": Math.PI * r * 2 * (100 - l) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
          /* @__PURE__ */ d("text", { x: a, y: a + n, "dominant-baseline": "middle", "text-anchor": "middle", style: { fontSize: `${r}px` }, children: Math.round(l) })
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
    if (t && (s = vl(s, e, t)), s = wl(s, e), s = bl(s, e), n ? s = go(s, e) : s = yl(s, e), i) {
      let o = s[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = q(i, e.row.data)), s.push({ attrs: { title: o } });
    }
    return s;
  }
}, su = Ht(nu, { buildIn: !0 });
function iu(s, e, t = !1) {
  var a, l;
  typeof s == "boolean" && (e = s, s = void 0);
  const n = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!n[h] === u || (u ? n[h] = !0 : delete n[h], i[h] = u);
  };
  if (s === void 0 ? (e === void 0 && (e = !_l.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function ou(s) {
  return this.state.checkedRows[s] ?? !1;
}
function _l() {
  var n, i;
  const s = (n = this.layout) == null ? void 0 : n.allRows.length;
  if (!s)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === s;
}
function ru() {
  return Object.keys(this.state.checkedRows);
}
function au(s) {
  const { checkable: e } = this.options;
  s === void 0 && (s = !e), e !== s && this.setState({ forceCheckable: s });
}
function Xr(s, e, t = !1) {
  return /* @__PURE__ */ d("div", { class: `checkbox-primary dtable-checkbox${s ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ d("label", {}) });
}
const Jr = 'input[type="checkbox"],.dtable-checkbox', lu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Xr
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
    toggleCheckRows: iu,
    isRowChecked: ou,
    isAllRowChecked: _l,
    getChecks: ru,
    toggleCheckable: au
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
        /* @__PURE__ */ d("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xr(s) })
      ];
    },
    checkedInfo(s, e) {
      const t = this.getChecks(), { checkInfo: n } = this.options;
      if (n)
        return [n.call(this, t)];
      const i = t.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: e.allRows.length })), [
        /* @__PURE__ */ d("div", { children: o.join(", ") })
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
    const t = e.closest(Jr);
    t && (this.toggleCheckRows(t.checked), s.stopPropagation());
  },
  onCellClick(s, { rowID: e }) {
    const t = f(s.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(Jr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, cu = Ht(lu);
var Cl = /* @__PURE__ */ ((s) => (s.unknown = "", s.collapsed = "collapsed", s.expanded = "expanded", s.hidden = "hidden", s.normal = "normal", s))(Cl || {});
function ks(s) {
  const e = this.data.nestedMap.get(s);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, n = e.children && t && t[s];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = ks.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : n ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? ks.call(this, e.parent).level + 1 : 0, e;
}
function hu(s) {
  return s !== void 0 ? ks.call(this, s) : this.data.nestedMap;
}
function uu(s, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: n } = this.data;
  if (s === "HEADER")
    if (e === void 0 && (e = !$l.call(this)), e) {
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
function $l() {
  const s = this.data.nestedMap.values();
  for (const e of s)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function xl(s, e = 0, t, n = 0) {
  var i;
  t || (t = [...s.keys()]);
  for (const o of t) {
    const r = s.get(o);
    r && (r.level === n && (r.order = e++), (i = r.children) != null && i.length && (e = xl(s, e, r.children, n + 1)));
  }
  return e;
}
function kl(s, e, t, n) {
  const i = s.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    n[o] = t, kl(s, o, t, n);
  }), i;
}
function Sl(s, e, t, n, i) {
  var a;
  const o = s.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(n[l] !== void 0 ? n[l] : i[l]);
    return t === h;
  })) && (n[e] = t), o.parent && Sl(s, o.parent, t, n, i);
}
const du = {
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
        const r = kl(this, i, o, n);
        r != null && r.parent && Sl(this, r.parent, o, n, t);
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
    getNestedInfo: hu,
    toggleRow: uu,
    isAllCollapsed: $l,
    getNestedRowInfo: ks
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
    ), xl(this.data.nestedMap), s.sort((e, t) => {
      const n = this.getNestedRowInfo(e.id), i = this.getNestedRowInfo(t.id), o = (n.order ?? 0) - (i.order ?? 0);
      return o === 0 ? e.index - t.index : o;
    }), s;
  },
  onRenderCell(s, { col: e, row: t }) {
    var a;
    const { id: n, data: i } = t, { nestedToggle: o } = e.setting, r = this.getNestedRowInfo(n);
    if (o && (r.children || r.parent) && s.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, n, e, i)) ?? /* @__PURE__ */ d("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ d("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = e.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), s.unshift(/* @__PURE__ */ d("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return s;
  },
  onRenderHeaderCell(s, { row: e, col: t }) {
    var i;
    const { id: n } = e;
    return t.setting.nestedToggle && s.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, n, t, void 0)) ?? /* @__PURE__ */ d("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ d("span", { className: "toggle-icon" }) }),
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
}, fu = Ht(du);
function qi(s, { row: e, col: t }) {
  const { data: n } = e, i = n ? n[t.name] : void 0;
  if (!(i != null && i.length))
    return s;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${t.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${t.name}Name` } = t.setting, u = (n ? n[h] : i) || s[0], c = {
    size: "xs",
    className: N(o, a == null ? void 0 : a.className, "flex-none"),
    src: n ? n[r] : void 0,
    text: u,
    code: l ? n ? n[l] : void 0 : i,
    ...a
  };
  if (s[0] = /* @__PURE__ */ d(Xa, { ...c }), t.type === "avatarBtn") {
    const { avatarBtnProps: p } = t.setting, m = typeof p == "function" ? p(t, e) : p;
    s[0] = /* @__PURE__ */ d("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      s[0],
      /* @__PURE__ */ d("div", { children: u })
    ] });
  } else
    t.type === "avatarName" && (s[0] = /* @__PURE__ */ d("div", { className: "flex items-center gap-1", children: [
      s[0],
      /* @__PURE__ */ d("span", { children: u })
    ] }));
  return s;
}
const pu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: qi
    },
    avatarBtn: {
      onRenderCell: qi
    },
    avatarName: {
      onRenderCell: qi
    }
  }
}, mu = Ht(pu, { buildIn: !0 }), gu = {
  name: "sort-type",
  onRenderHeaderCell(s, e) {
    const { col: t } = e, { sortType: n } = t.setting;
    if (n) {
      const i = n === !0 ? "none" : n;
      s.push(
        /* @__PURE__ */ d("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = t.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, t, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        s[0] = /* @__PURE__ */ d("a", { href: q(a, { ...t.setting, sortType: r }), ...l, children: s[0] });
      }
    }
    return s;
  }
}, yu = Ht(gu, { buildIn: !0 }), Yi = (s) => {
  s.length !== 1 && s.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === s[t - 1].setting.group || (e.setting.border = "left");
  });
}, bu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (s) => !!s.groupDivider,
  onLayout(s) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = s;
    Yi(e.left.list), Yi(e.center.list), Yi(e.right.list);
  }
}, wu = Ht(bu), vu = {
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
      l.forEach((p, m) => {
        const { index: g } = p, b = `C${g}R${c}`;
        if (n.has(b))
          return;
        const v = e.call(this, { row: h, col: p });
        if (!v)
          return;
        const w = Math.min(v.colSpan || 1, l.length - m), C = Math.min(v.rowSpan || 1, i.length - u);
        if (w <= 1 && C <= 1)
          return;
        let x = 0;
        for (let T = 0; T < w; T++) {
          x += l[m + T].realWidth;
          for (let S = 0; S < C; S++) {
            const M = `C${g + T}R${c + S}`;
            M !== b && n.add(M);
          }
        }
        t.set(b, {
          colSpan: w,
          rowSpan: C,
          width: x,
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
}, _u = Ht(vu), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Cl,
  avatar: mu,
  cellspan: _u,
  checkable: cu,
  custom: eu,
  group: wu,
  nested: fu,
  renderDatetime: gl,
  renderDatetimeCell: vl,
  renderFormat: zo,
  renderFormatCell: bl,
  renderHtmlCell: go,
  renderLink: ml,
  renderLinkCell: yl,
  renderMapCell: wl,
  rich: su,
  sortType: yu
}, Symbol.toStringTag, { value: "Module" })), se = class se extends z {
};
se.NAME = "DTable", se.Component = Zh, se.definePlugin = Ht, se.removePlugin = rl, se.plugins = Cu;
let Zr = se;
const $u = "nav", rs = '[data-toggle="tab"]', xu = "active";
var de;
const Ko = class Ko extends $t {
  constructor() {
    super(...arguments);
    _(this, de, 0);
  }
  active(t) {
    const n = this.$element, i = n.find(rs);
    let o = t ? f(t).closest(rs) : i.filter(`.${xu}`);
    if (!o.length && (o = n.find(rs).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = f(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), y(this, de) && clearTimeout(y(this, de)), $(this, de, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), $(this, de, 0);
    }, 10)));
  }
};
de = new WeakMap(), Ko.NAME = "Tabs";
let yo = Ko;
f(document).on("click.tabs.zui", rs, (s) => {
  s.preventDefault();
  const e = f(s.target), t = e.closest(`.${$u}`);
  t.length && yo.ensure(t).active(e);
});
f(() => {
  f(".disabled, [disabled]").on("click", (s) => {
    s.preventDefault(), s.stopImmediatePropagation();
  });
});
export {
  f as $,
  ur as ActionMenu,
  dr as ActionMenuNested,
  Sr as Avatar,
  Er as BtnGroup,
  Tr as ColorPicker,
  $t as Component,
  z as ComponentFromReact,
  po as ContextMenu,
  ee as CustomContent,
  Xi as CustomRender,
  Zr as DTable,
  Ur as Dashboard,
  Ar as DatePicker,
  Ct as Dropdown,
  Ka as EventBus,
  Po as HElement,
  Xn as HtmlContent,
  tt as Icon,
  fr as Menu,
  _r as Messager,
  lo as Modal,
  Lt as ModalBase,
  Cs as ModalTrigger,
  Pr as Nav,
  Lr as Pager,
  Or as Pick,
  Hr as Picker,
  _t as Popover,
  Ji as PopoverPanel,
  Br as Popovers,
  Cr as ProgressCircle,
  B as ReactComponent,
  Wr as SearchBox,
  rn as TIME_DAY,
  yo as Tabs,
  Ir as TimePicker,
  Fr as Toolbar,
  Nt as Tooltip,
  zr as Tree,
  fo as Upload,
  jr as UploadImgs,
  mh as addDate,
  f as cash,
  N as classes,
  Qe as componentsMap,
  vc as convertBytes,
  xc as create,
  K as createDate,
  Pc as createPortal,
  Y as createRef,
  bc as deepGet,
  yc as deepGetPath,
  Su as defineFn,
  hs as delay,
  Eu as dom,
  wc as formatBytes,
  lt as formatDate,
  Lu as formatDateSpan,
  q as formatString,
  ba as getClassList,
  us as getComponent,
  G as h,
  Tu as hh,
  Mc as htm,
  J as i18n,
  ts as isSameDay,
  Za as isSameMonth,
  Iu as isSameWeek,
  ro as isSameYear,
  Au as isToday,
  Pu as isTomorrow,
  X as isValidElement,
  Du as isYesterday,
  $r as nativeEvents,
  ms as render,
  Aa as renderCustomContent,
  Ic as renderCustomResult,
  tn as store,
  wa as storeData,
  va as takeData
};
//# sourceMappingURL=zui.js.map
