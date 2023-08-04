var Ai = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var b = (n, e, t) => (Ai(n, e, "read from private field"), t ? t.call(n) : e.get(n)), C = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, $ = (n, e, t, s) => (Ai(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t);
var L = (n, e, t) => (Ai(n, e, "access private method"), t);
const At = document, nn = window, Qr = At.documentElement, we = At.createElement.bind(At), ta = we("div"), Di = we("table"), Rl = we("tbody"), Xo = we("tr"), { isArray: Ci, prototype: ea } = Array, { concat: Il, filter: go, indexOf: sa, map: na, push: Al, slice: ia, some: yo, splice: Dl } = ea, Ll = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Pl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Hl = /<.+>/, Ol = /^\w+$/;
function bo(n, e) {
  const t = Bl(e);
  return !n || !t && !ge(e) && !V(e) ? [] : !t && Pl.test(n) ? e.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !t && Ol.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n);
}
class $i {
  constructor(e, t) {
    if (!e)
      return;
    if (Ui(e))
      return e;
    let s = e;
    if (et(e)) {
      const i = t || At;
      if (s = Ll.test(e) && ge(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : Hl.test(e) ? aa(e) : Ui(i) ? i.find(e) : et(i) ? d(i).find(e) : bo(e, i), !s)
        return;
    } else if (ve(e))
      return this.ready(e);
    (s.nodeType || s === nn) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(e, t) {
    return new $i(e, t);
  }
}
const S = $i.prototype, d = S.init;
d.fn = d.prototype = S;
S.length = 0;
S.splice = Dl;
typeof Symbol == "function" && (S[Symbol.iterator] = ea[Symbol.iterator]);
function Ui(n) {
  return n instanceof $i;
}
function ze(n) {
  return !!n && n === n.window;
}
function ge(n) {
  return !!n && n.nodeType === 9;
}
function Bl(n) {
  return !!n && n.nodeType === 11;
}
function V(n) {
  return !!n && n.nodeType === 1;
}
function Wl(n) {
  return !!n && n.nodeType === 3;
}
function Fl(n) {
  return typeof n == "boolean";
}
function ve(n) {
  return typeof n == "function";
}
function et(n) {
  return typeof n == "string";
}
function it(n) {
  return n === void 0;
}
function Qe(n) {
  return n === null;
}
function oa(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function wo(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.getPrototypeOf(n);
  return e === null || e === Object.prototype;
}
d.isWindow = ze;
d.isFunction = ve;
d.isArray = Ci;
d.isNumeric = oa;
d.isPlainObject = wo;
function q(n, e, t) {
  if (t) {
    let s = n.length;
    for (; s--; )
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  } else if (wo(n)) {
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
d.each = q;
S.each = function(n) {
  return q(this, n);
};
S.empty = function() {
  return this.each((n, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function on(...n) {
  const e = Fl(n[0]) ? n.shift() : !1, t = n.shift(), s = n.length;
  if (!t)
    return {};
  if (!s)
    return on(e, d, t);
  for (let i = 0; i < s; i++) {
    const o = n[i];
    for (const r in o)
      e && (Ci(o[r]) || wo(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), on(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
d.extend = on;
S.extend = function(n) {
  return on(S, n);
};
const zl = /\S+/g;
function xi(n) {
  return et(n) ? n.match(zl) || [] : [];
}
S.toggleClass = function(n, e) {
  const t = xi(n), s = !it(e);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      s ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
S.addClass = function(n) {
  return this.toggleClass(n, !0);
};
S.removeAttr = function(n) {
  const e = xi(n);
  return this.each((t, s) => {
    V(s) && q(e, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function jl(n, e) {
  if (n) {
    if (et(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(n);
        return Qe(t) ? void 0 : t;
      }
      return it(e) ? this : Qe(e) ? this.removeAttr(n) : this.each((t, s) => {
        V(s) && s.setAttribute(n, e);
      });
    }
    for (const t in n)
      this.attr(t, n[t]);
    return this;
  }
}
S.attr = jl;
S.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
S.hasClass = function(n) {
  return !!n && yo.call(this, (e) => V(e) && e.classList.contains(n));
};
S.get = function(n) {
  return it(n) ? ia.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
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
function Vl(n) {
  return it(n) ? this.get().map((e) => V(e) || Wl(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = n);
  });
}
S.text = Vl;
function Dt(n, e, t) {
  if (!V(n))
    return;
  const s = nn.getComputedStyle(n, null);
  return t ? s.getPropertyValue(e) || void 0 : s[e] || n.style[e];
}
function _t(n, e) {
  return parseInt(Dt(n, e), 10) || 0;
}
function Zo(n, e) {
  return _t(n, `border${e ? "Left" : "Top"}Width`) + _t(n, `padding${e ? "Left" : "Top"}`) + _t(n, `padding${e ? "Right" : "Bottom"}`) + _t(n, `border${e ? "Right" : "Bottom"}Width`);
}
const Li = {};
function Ul(n) {
  if (Li[n])
    return Li[n];
  const e = we(n);
  At.body.insertBefore(e, null);
  const t = Dt(e, "display");
  return At.body.removeChild(e), Li[n] = t !== "none" ? t : "block";
}
function Jo(n) {
  return Dt(n, "display") === "none";
}
function ra(n, e) {
  const t = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!t && !!e && t.call(n, e);
}
function ki(n) {
  return et(n) ? (e, t) => ra(t, n) : ve(n) ? n : Ui(n) ? (e, t) => n.is(t) : n ? (e, t) => t === n : () => !1;
}
S.filter = function(n) {
  const e = ki(n);
  return d(go.call(this, (t, s) => e.call(t, s, t)));
};
function Qt(n, e) {
  return e ? n.filter(e) : n;
}
S.detach = function(n) {
  return Qt(this, n).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const ql = /^\s*<(\w+)[^>]*>/, Yl = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Qo = {
  "*": ta,
  tr: Rl,
  td: Xo,
  th: Xo,
  thead: Di,
  tbody: Di,
  tfoot: Di
};
function aa(n) {
  if (!et(n))
    return [];
  if (Yl.test(n))
    return [we(RegExp.$1)];
  const e = ql.test(n) && RegExp.$1, t = Qo[e] || Qo["*"];
  return t.innerHTML = n, d(t.childNodes).detach().get();
}
d.parseHTML = aa;
S.has = function(n) {
  const e = et(n) ? (t, s) => bo(n, s).length : (t, s) => s.contains(n);
  return this.filter(e);
};
S.not = function(n) {
  const e = ki(n);
  return this.filter((t, s) => (!et(n) || V(s)) && !e.call(s, t, s));
};
function Ht(n, e, t, s) {
  const i = [], o = ve(e), r = s && ki(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (o) {
      const h = e(n[a]);
      h.length && Al.apply(i, h);
    } else {
      let h = n[a][e];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function la(n) {
  return n.multiple && n.options ? Ht(go.call(n.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : n.value || "";
}
function Kl(n) {
  return arguments.length ? this.each((e, t) => {
    const s = t.multiple && t.options;
    if (s || ga.test(t.type)) {
      const i = Ci(n) ? na.call(n, String) : Qe(n) ? [] : [String(n)];
      s ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = it(n) || Qe(n) ? "" : n;
  }) : this[0] && la(this[0]);
}
S.val = Kl;
S.is = function(n) {
  const e = ki(n);
  return yo.call(this, (t, s) => e.call(t, s, t));
};
d.guid = 1;
function kt(n) {
  return n.length > 1 ? go.call(n, (e, t, s) => sa.call(s, e) === t) : n;
}
d.unique = kt;
S.add = function(n, e) {
  return d(kt(this.get().concat(d(n, e).get())));
};
S.children = function(n) {
  return Qt(d(kt(Ht(this, (e) => e.children))), n);
};
S.parent = function(n) {
  return Qt(d(kt(Ht(this, "parentNode"))), n);
};
S.index = function(n) {
  const e = n ? d(n)[0] : this[0], t = n ? this : d(e).parent().children();
  return sa.call(t, e);
};
S.closest = function(n) {
  const e = this.filter(n);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(n) : e;
};
S.siblings = function(n) {
  return Qt(d(kt(Ht(this, (e) => d(e).parent().children().not(e)))), n);
};
S.find = function(n) {
  return d(kt(Ht(this, (e) => bo(n, e))));
};
const Gl = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Xl = /^$|^module$|\/(java|ecma)script/i, Zl = ["type", "src", "nonce", "noModule"];
function Jl(n, e) {
  const t = d(n);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (Xl.test(i.type) && Qr.contains(i)) {
      const o = we("script");
      o.text = i.textContent.replace(Gl, ""), q(Zl, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function Ql(n, e, t, s, i) {
  s ? n.insertBefore(e, t ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(e, n) : n.parentNode.insertBefore(e, t ? n : n.nextSibling), i && Jl(e, n.ownerDocument);
}
function te(n, e, t, s, i, o, r, a) {
  return q(n, (l, h) => {
    q(d(h), (u, c) => {
      q(d(e), (p, m) => {
        const g = t ? c : m, y = t ? m : c, v = t ? u : p;
        Ql(g, v ? y.cloneNode(!0) : y, s, i, !v);
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
function tc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (it(n))
    return this;
  const e = /<script[\s>]/.test(n);
  return this.each((t, s) => {
    V(s) && (e ? d(s).empty().append(n) : s.innerHTML = n);
  });
}
S.html = tc;
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
  return d(kt(Ht(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
S.next = function(n, e, t) {
  return Qt(d(kt(Ht(this, "nextElementSibling", e, t))), n);
};
S.nextAll = function(n) {
  return this.next(n, !0);
};
S.nextUntil = function(n, e) {
  return this.next(e, !0, n);
};
S.parents = function(n, e) {
  return Qt(d(kt(Ht(this, "parentElement", !0, e))), n);
};
S.parentsUntil = function(n, e) {
  return this.parents(e, n);
};
S.prev = function(n, e, t) {
  return Qt(d(kt(Ht(this, "previousElementSibling", e, t))), n);
};
S.prevAll = function(n) {
  return this.prev(n, !0);
};
S.prevUntil = function(n, e) {
  return this.prev(e, !0, n);
};
S.map = function(n) {
  return d(Il.apply([], na.call(this, (e, t) => n.call(e, t, e))));
};
S.clone = function() {
  return this.map((n, e) => e.cloneNode(!0));
};
S.offsetParent = function() {
  return this.map((n, e) => {
    let t = e.offsetParent;
    for (; t && Dt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || Qr;
  });
};
S.slice = function(n, e) {
  return d(ia.call(this, n, e));
};
const ec = /-([a-z])/g;
function vo(n) {
  return n.replace(ec, (e, t) => t.toUpperCase());
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
    top: e.top + nn.pageYOffset,
    left: e.left + nn.pageXOffset
  };
};
S.position = function() {
  const n = this[0];
  if (!n)
    return;
  const e = Dt(n, "position") === "fixed", t = e ? n.getBoundingClientRect() : this.offset();
  if (!e) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Dt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && V(i)) {
      const o = d(i).offset();
      t.top -= o.top + _t(i, "borderTopWidth"), t.left -= o.left + _t(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - _t(n, "marginTop"),
    left: t.left - _t(n, "marginLeft")
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
S.prop = function(n, e) {
  if (n) {
    if (et(n))
      return n = ca[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((t, s) => {
        s[n] = e;
      });
    for (const t in n)
      this.prop(t, n[t]);
    return this;
  }
};
S.removeProp = function(n) {
  return this.each((e, t) => {
    delete t[ca[n] || n];
  });
};
const sc = /^--/;
function _o(n) {
  return sc.test(n);
}
const Pi = {}, { style: nc } = ta, ic = ["webkit", "moz", "ms"];
function oc(n, e = _o(n)) {
  if (e)
    return n;
  if (!Pi[n]) {
    const t = vo(n), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${ic.join(`${s} `)}${s}`.split(" ");
    q(i, (o, r) => {
      if (r in nc)
        return Pi[n] = r, !1;
    });
  }
  return Pi[n];
}
const rc = {
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
function ha(n, e, t = _o(n)) {
  return !t && !rc[n] && oa(e) ? `${e}px` : e;
}
function ac(n, e) {
  if (et(n)) {
    const t = _o(n);
    return n = oc(n, t), arguments.length < 2 ? this[0] && Dt(this[0], n, t) : n ? (e = ha(n, e, t), this.each((s, i) => {
      V(i) && (t ? i.style.setProperty(n, e) : i.style[n] = e);
    })) : this;
  }
  for (const t in n)
    this.css(t, n[t]);
  return this;
}
S.css = ac;
function ua(n, e) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
const lc = /^\s+|\s+$/;
function tr(n, e) {
  const t = n.dataset[e] || n.dataset[vo(e)];
  return lc.test(t) ? t : ua(JSON.parse, t);
}
function cc(n, e, t) {
  t = ua(JSON.stringify, t), n.dataset[vo(e)] = t;
}
function hc(n, e) {
  if (!n) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = tr(this[0], s);
    return t;
  }
  if (et(n))
    return arguments.length < 2 ? this[0] && tr(this[0], n) : it(e) ? this : this.each((t, s) => {
      cc(s, n, e);
    });
  for (const t in n)
    this.data(t, n[t]);
  return this;
}
S.data = hc;
function da(n, e) {
  const t = n.documentElement;
  return Math.max(n.body[`scroll${e}`], t[`scroll${e}`], n.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
q([!0, !1], (n, e) => {
  q(["Width", "Height"], (t, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    S[i] = function(o) {
      if (this[0])
        return ze(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ge(this[0]) ? da(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (o && e ? _t(this[0], `margin${t ? "Top" : "Left"}`) + _t(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (n, e) => {
  const t = e.toLowerCase();
  S[t] = function(s) {
    if (!this[0])
      return it(s) ? void 0 : this;
    if (!arguments.length)
      return ze(this[0]) ? this[0].document.documentElement[`client${e}`] : ge(this[0]) ? da(this[0], e) : this[0].getBoundingClientRect()[t] - Zo(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Dt(r, "boxSizing");
      r.style[t] = ha(t, i + (a === "border-box" ? Zo(r, !n) : 0));
    });
  };
});
const er = "___cd";
S.toggle = function(n) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const s = Jo(t);
    (it(n) ? s : n) ? (t.style.display = t[er] || "", Jo(t) && (t.style.display = Ul(t.tagName))) : s || (t[er] = Dt(t, "display"), t.style.display = "none");
  });
};
S.hide = function() {
  return this.toggle(!1);
};
S.show = function() {
  return this.toggle(!0);
};
const sr = "___ce", Co = ".", $o = { focus: "focusin", blur: "focusout" }, fa = { mouseenter: "mouseover", mouseleave: "mouseout" }, uc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function xo(n) {
  return fa[n] || $o[n] || n;
}
function ko(n) {
  const e = n.split(Co);
  return [e[0], e.slice(1).sort()];
}
S.trigger = function(n, e) {
  if (et(n)) {
    const [s, i] = ko(n), o = xo(s);
    if (!o)
      return this;
    const r = uc.test(o) ? "MouseEvents" : "HTMLEvents";
    n = At.createEvent(r), n.initEvent(o, !0, !0), n.namespace = i.join(Co), n.___ot = s;
  }
  n.___td = e;
  const t = n.___ot in $o;
  return this.each((s, i) => {
    t && ve(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function pa(n) {
  return n[sr] = n[sr] || {};
}
function dc(n, e, t, s, i) {
  const o = pa(n);
  o[e] = o[e] || [], o[e].push([t, s, i]), n.addEventListener(e, i);
}
function ma(n, e) {
  return !e || !yo.call(e, (t) => n.indexOf(t) < 0);
}
function rn(n, e, t, s, i) {
  const o = pa(n);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !ma(r, t) || s && s !== a)
        return !0;
      n.removeEventListener(e, l);
    }));
  else
    for (e in o)
      rn(n, e, t, s, i);
}
S.off = function(n, e, t) {
  if (it(n))
    this.each((s, i) => {
      !V(i) && !ge(i) && !ze(i) || rn(i);
    });
  else if (et(n))
    ve(e) && (t = e, e = ""), q(xi(n), (s, i) => {
      const [o, r] = ko(i), a = xo(o);
      this.each((l, h) => {
        !V(h) && !ge(h) && !ze(h) || rn(h, a, r, e, t);
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
function fc(n, e, t, s, i) {
  if (!et(n)) {
    for (const o in n)
      this.on(o, e, t, n[o], i);
    return this;
  }
  return et(e) || (it(e) || Qe(e) ? e = "" : it(t) ? (t = e, e = "") : (s = t, t = e, e = "")), ve(s) || (s = t, t = void 0), s ? (q(xi(n), (o, r) => {
    const [a, l] = ko(r), h = xo(a), u = a in fa, c = a in $o;
    h && this.each((p, m) => {
      if (!V(m) && !ge(m) && !ze(m))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !ma(l, y.namespace.split(Co)) || !e && (c && (y.target !== m || y.___ot === h) || u && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let v = m;
        if (e) {
          let _ = y.target;
          for (; !ra(_, e); )
            if (_ === m || (_ = _.parentNode, !_))
              return;
          v = _;
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
        const w = s.call(v, y, y.___td);
        i && rn(m, h, l, e, g), w === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || d.guid++, dc(m, h, l, e, g);
    });
  }), this) : this;
}
S.on = fc;
function pc(n, e, t, s) {
  return this.on(n, e, t, s, !0);
}
S.one = pc;
const mc = /\r?\n/g;
function gc(n, e) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(e.replace(mc, `\r
`))}`;
}
const yc = /file|reset|submit|button|image/i, ga = /radio|checkbox/i;
S.serialize = function() {
  let n = "";
  return this.each((e, t) => {
    q(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || yc.test(i.type) || ga.test(i.type) && !i.checked)
        return;
      const o = la(i);
      if (!it(o)) {
        const r = Ci(o) ? o : [o];
        q(r, (a, l) => {
          n += gc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = d;
function bc(n, e) {
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
function wc(n, e, t) {
  try {
    const s = bc(n, e), i = s[s.length - 1];
    return i === void 0 ? t : i;
  } catch {
    return t;
  }
}
function Y(n, ...e) {
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
var Eo = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Eo || {});
function vc(n, e = 2, t) {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / Eo[t]).toFixed(e) + t);
}
const _c = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const s = t[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Eo[s];
};
let So = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Wt;
function Cc() {
  return So;
}
function $c(n) {
  So = n.toLowerCase();
}
function ya(n, e) {
  Wt || (Wt = {}), typeof n == "string" && (n = { [n]: e ?? {} }), d.extend(!0, Wt, n);
}
function Z(n, e, t, s, i, o) {
  Array.isArray(n) ? Wt && n.unshift(Wt) : n = Wt ? [Wt, n] : [n], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || So;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Wt ? `${o}.${e}` : e;
    if (a = wc(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function xc(n, e, t, s) {
  return Z(void 0, n, e, t, s);
}
Z.addLang = ya;
Z.getLang = xc;
Z.getCode = Cc;
Z.setCode = $c;
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
function ba(...n) {
  const e = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? ba(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const N = (...n) => ba(...n).reduce((e, [t, s]) => (s && e.push(t), e), []).join(" ");
d.classes = N;
d.fn.setClass = function(n, ...e) {
  return this.each((t, s) => {
    const i = d(s);
    n === !0 ? i.attr("class", N(i.attr("class"), ...e)) : i.addClass(N(n, ...e));
  });
};
const Ge = /* @__PURE__ */ new WeakMap();
function wa(n, e, t) {
  const s = Ge.has(n), i = s ? Ge.get(n) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, d(n).dataset(), i), Ge.set(n, i)) : Ge.delete(n);
}
function va(n, e, t) {
  let s = Ge.get(n) || {};
  return !t && n instanceof Element && (s = Object.assign({}, d(n).dataset(), s)), e === void 0 ? s : s[e];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...n) {
  if (!this.length)
    return;
  const [e, t] = n;
  return !n.length || n.length === 1 && typeof e == "string" ? va(this[0], e) : this.each((s, i) => wa(i, e, t));
};
d.fn.removeData = function(n = null) {
  return this.each((e, t) => wa(t, n));
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
const an = (n, e) => new Promise((t) => {
  const s = window.setTimeout(t, n);
  e && e(s);
}), kc = {};
d.share = kc;
const Xe = /* @__PURE__ */ new Map();
function ln(n) {
  const { zui: e } = window;
  return (!Xe.size || n && !Xe.has(n.toUpperCase())) && Object.keys(e).forEach((t) => {
    const s = e[t];
    !s.NAME || !s.ZUI || Xe.set(t.toLowerCase(), s);
  }), n ? Xe.get(n.toLowerCase()) : void 0;
}
function Ec(n, e, t) {
  const s = ln(n);
  return s ? !s.MULTI_INSTANCE && s.get(e) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: e, options: t }), null) : new s(e, t) : null;
}
function Su(n) {
  if (n) {
    const e = ln(n);
    e && e.defineFn();
  } else
    ln(), Xe.forEach((e) => {
      e.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = d(this);
    let e = n.dataset();
    const [t, s] = e.zui.split(":");
    n.zui(t) || (s ? e = d.share[s] : delete e.zui, requestAnimationFrame(() => Ec(t, this, e)));
  }), this;
};
d.fn.zui = function(n, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof n != "string") {
    const i = va(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), n === !0 ? o : r;
  }
  const s = ln(n);
  if (s)
    return e === !0 ? s.getAll(t) : s.query(t, e);
};
d(() => {
  d("body").zuiInit();
});
function To(n, e) {
  const t = d(n)[0];
  if (!t)
    return !1;
  let { viewport: s } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    s = { left: 0, top: 0, width: y || w, height: g || v };
  }
  const { left: l, top: h, width: u, height: c } = s;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const p = i <= u && i + r >= l;
  return o <= c && o + a >= h && p;
}
d.fn.isVisible = function(n) {
  return To(this, n);
};
function No(n, e, t = !1) {
  const s = d(n);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${d.guid++}`;
      s.append(`<script id="${i}">${e}<\/script>`), t && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    No(s, o.innerHTML), o.remove();
  });
}
d.runJS = (n, ...e) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...e.map(([s]) => s), n)(...e.map(([, s]) => s)));
d.fn.runJS = function(n) {
  return this.each((e, t) => {
    No(t, n);
  });
};
function _a(n, e) {
  const t = d(n), { ifNeeded: s = !0, ...i } = e || {};
  return t.each((o, r) => {
    s && To(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
d.fn.scrollIntoView = function(n) {
  return this.each((e, t) => {
    _a(t, n);
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
    const { async: y = !0, defer: v = !1, noModule: w = !1, type: _, integrity: x } = o, k = document.createElement("script");
    k.async = y, k.defer = v, k.noModule = w, _ && (k.type = _), x && (k.integrity = x), k.onload = () => {
      p(), (d(k).dataset("loaded", !0).data("loadCalls") || []).forEach((M) => M()), d(k).removeData("loadCalls");
    }, k.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${r}`));
    }, k.src = r, d("head").append(k);
  });
};
d.getScript = d.getLib;
const Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: To,
  runJS: No,
  scrollIntoView: _a
}, Symbol.toStringTag, { value: "Module" }));
var Ei, W, Ca, X, se, nr, $a, qi, xe = {}, xa = [], Sc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Mo = Array.isArray;
function Kt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function ka(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function G(n, e, t) {
  var s, i, o, r = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ei.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return Qs(n, r, s, i, null);
}
function Qs(n, e, t, s, i) {
  var o = { type: n, props: e, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ca };
  return i == null && W.vnode != null && W.vnode(o), o;
}
function U() {
  return { current: null };
}
function Ye(n) {
  return n.children;
}
function B(n, e) {
  this.props = n, this.context = e;
}
function cn(n, e) {
  if (e == null)
    return n.__ ? cn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? cn(n) : null;
}
function Ea(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Ea(n);
  }
}
function ir(n) {
  (!n.__d && (n.__d = !0) && se.push(n) && !hn.__r++ || nr !== W.debounceRendering) && ((nr = W.debounceRendering) || $a)(hn);
}
function hn() {
  var n, e, t, s, i, o, r, a, l;
  for (se.sort(qi); n = se.shift(); )
    n.__d && (e = se.length, s = void 0, i = void 0, o = void 0, a = (r = (t = n).__v).__e, (l = t.__P) && (s = [], i = [], (o = Kt({}, r)).__v = r.__v + 1, Ro(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, s, a ?? cn(r), r.__h, i), Ma(s, r, i), r.__e != a && Ea(r)), se.length > e && se.sort(qi));
  hn.__r = 0;
}
function Sa(n, e, t, s, i, o, r, a, l, h, u) {
  var c, p, m, g, y, v, w, _, x, k, E = 0, M = s && s.__k || xa, I = M.length, A = I, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (g = t.__k[c] = (g = e[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Qs(null, g, null, null, g) : Mo(g) ? Qs(Ye, { children: g }, null, null, null) : g.__b > 0 ? Qs(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null && (g.__ = t, g.__b = t.__b + 1, (_ = Tc(g, M, w = c + E, A)) === -1 ? m = xe : (m = M[_] || xe, M[_] = void 0, A--), Ro(n, g, m, i, o, r, a, l, h, u), y = g.__e, (p = g.ref) && m.ref != p && (m.ref && Io(m.ref, null, g), u.push(p, g.__c || y, g)), y != null && (v == null && (v = y), k = !(x = m === xe || m.__v === null) && _ === w, x ? _ == -1 && E-- : _ !== w && (_ === w + 1 ? (E++, k = !0) : _ > w ? A > D - w ? (E += _ - w, k = !0) : E-- : E = _ < w && _ == w - 1 ? _ - w : 0), w = c + E, k = k || _ == c && !x, typeof g.type != "function" || _ === w && m.__k !== g.__k ? typeof g.type == "function" || k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = y.nextSibling : l = Na(n, y, l) : l = Ta(g, l, n), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = I; c--; )
    M[c] != null && (typeof t.type == "function" && M[c].__e != null && M[c].__e == t.__d && (t.__d = M[c].__e.nextSibling), Ra(M[c], M[c]));
}
function Ta(n, e, t) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, e = typeof s.type == "function" ? Ta(s, e, t) : Na(t, s.__e, e));
  return e;
}
function Na(n, e, t) {
  return t == null || t.parentNode !== n ? n.insertBefore(e, null) : e == t && e.parentNode != null || n.insertBefore(e, t), e.nextSibling;
}
function Tc(n, e, t, s) {
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
function Nc(n, e, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || un(n, o, null, t[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || un(n, o, e[o], t[o], s);
}
function or(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || Sc.test(e) ? t : t + "px";
}
function un(n, e, t, s, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (e in s)
            t && e in t || or(n.style, e, "");
        if (t)
          for (e in t)
            s && t[e] === s[e] || or(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? s || n.addEventListener(e, o ? ar : rr, o) : n.removeEventListener(e, o ? ar : rr, o);
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
function rr(n) {
  return this.l[n.type + !1](W.event ? W.event(n) : n);
}
function ar(n) {
  return this.l[n.type + !0](W.event ? W.event(n) : n);
}
function Ro(n, e, t, s, i, o, r, a, l, h) {
  var u, c, p, m, g, y, v, w, _, x, k, E, M, I, A, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = W.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (w = e.props, _ = (u = D.contextType) && s[u.__c], x = u ? _ ? _.props.value : u.__ : s, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(w, x) : (e.__c = c = new B(w, x), c.constructor = D, c.render = Rc), _ && _.sub(c), c.props = w, c.state || (c.state = {}), c.context = x, c.__n = s, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Kt({}, c.__s)), Kt(c.__s, D.getDerivedStateFromProps(w, c.__s))), m = c.props, g = c.state, c.__v = e, p)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(O) {
              O && (O.__ = e);
            }), k = 0; k < c._sb.length; k++)
              c.__h.push(c._sb[k]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, y);
          });
        }
        if (c.context = x, c.props = w, c.__P = n, c.__e = !1, E = W.__r, M = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, E && E(e), u = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++)
            c.__h.push(c._sb[I]);
          c._sb = [];
        } else
          do
            c.__d = !1, E && E(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++M < 25);
        c.state = c.__s, c.getChildContext != null && (s = Kt(Kt({}, s), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(m, g)), Sa(n, Mo(A = u != null && u.type === Ye && u.key == null ? u.props.children : u) ? A : [A], e, t, s, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Mc(t.__e, e, t, s, i, o, r, l, h);
    (u = W.diffed) && u(e);
  } catch (O) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), W.__e(O, e, t);
  }
}
function Ma(n, e, t) {
  for (var s = 0; s < t.length; s++)
    Io(t[s], t[++s], t[++s]);
  W.__c && W.__c(e, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      W.__e(o, i.__v);
    }
  });
}
function Mc(n, e, t, s, i, o, r, a, l) {
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
    if (o = o && Ei.call(n.childNodes), u = (p = t.props || xe).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, y = 0; y < n.attributes.length; y++)
          p[n.attributes[y].name] = n.attributes[y].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""));
    }
    if (Nc(n, m, p, i, a), c)
      e.__k = [];
    else if (Sa(n, Mo(y = e.props.children) ? y : [y], e, t, s, i && g !== "foreignObject", o, r, o ? o[0] : t.__k && cn(t, 0), a, l), o != null)
      for (y = o.length; y--; )
        o[y] != null && ka(o[y]);
    a || ("value" in m && (y = m.value) !== void 0 && (y !== n.value || g === "progress" && !y || g === "option" && y !== p.value) && un(n, "value", y, p.value, !1), "checked" in m && (y = m.checked) !== void 0 && y !== n.checked && un(n, "checked", y, p.checked, !1));
  }
  return n;
}
function Io(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (s) {
    W.__e(s, t);
  }
}
function Ra(n, e, t) {
  var s, i;
  if (W.unmount && W.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Io(s, null, e)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        W.__e(o, e);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && Ra(s[i], e, t || typeof n.type != "function");
  t || n.__e == null || ka(n.__e), n.__ = n.__e = n.__d = void 0;
}
function Rc(n, e, t) {
  return this.constructor(n, t);
}
function dn(n, e, t) {
  var s, i, o, r;
  W.__ && W.__(n, e), i = (s = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Ro(e, n = (!s && t || e).__k = G(Ye, null, [n]), i || xe, xe, e.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : e.firstChild ? Ei.call(e.childNodes) : null, o, !s && t ? t : i ? i.__e : e.firstChild, s, r), Ma(o, n, r);
}
Ei = xa.slice, W = { __e: function(n, e, t, s) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Ca = 0, X = function(n) {
  return n != null && n.constructor === void 0;
}, B.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Kt({}, this.state), typeof n == "function" && (n = n(Kt({}, t), this.props)), n && Kt(t, n), n != null && this.__v && (e && this._sb.push(e), ir(this));
}, B.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), ir(this));
}, B.prototype.render = Ye, se = [], $a = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, qi = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, hn.__r = 0;
var Ia = function(n, e, t, s) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[e[++o]] = a : r === 6 ? s[1][e[++o]] += a + "" : r ? (i = n.apply(a, Ia(n, a, t, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : s.push(a);
  }
  return s;
}, lr = /* @__PURE__ */ new Map();
function Ic(n) {
  var e = lr.get(this);
  return e || (e = /* @__PURE__ */ new Map(), lr.set(this, e)), (e = Ia(this, e.get(n) || (e.set(n, e = function(t) {
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
const Nu = Ic.bind(G);
class Ao extends B {
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
    return e = this._beforeRender(e) || e, G(this._getComponent(e), this._getProps(e), this._getChildren(e));
  }
}
var Ac = 0;
function f(n, e, t, s, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: n, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Ac, __source: i, __self: o };
  if (typeof n == "function" && (r = n.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return W.vnode && W.vnode(h), h;
}
class qs extends B {
  constructor() {
    super(...arguments), this._ref = U();
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
    return /* @__PURE__ */ f(Ao, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function Dc(n) {
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
        const w = y.call(r, m, ...o);
        w && (Array.isArray(w) ? v.push(...w) : v.push(w));
      }
    else
      v.push(y);
    v.forEach((w) => {
      w != null && (typeof w == "object" && !X(w) && ("html" in w || "__html" in w || "className" in w || "style" in w || "attrs" in w || "children" in w) ? w.html ? m.push(
        /* @__PURE__ */ f("div", { className: N(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? g.push(w.__html) : (w.style && Object.assign(p, w.style), w.className && c.push(w.className), w.children && m.push(w.children), w.attrs && Object.assign(u, w.attrs)) : m.push(w));
    });
  }), g.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: N(c),
    style: p,
    ...u
  }, m];
}
function Yi({
  tag: n = "div",
  ...e
}) {
  const [t, s] = Dc(e);
  return G(n, t, ...s);
}
function Aa(n, e, t) {
  return typeof n == "function" ? n.call(e, ...t || []) : Array.isArray(n) ? n.map((s) => Aa(s, e, t)) : X(n) || n === null ? n : typeof n == "object" ? n.html ? /* @__PURE__ */ f(qs, { ...n }) : /* @__PURE__ */ f(Ao, { ...n }) : n;
}
function ee(n) {
  const { content: e, generatorThis: t, generatorArgs: s } = n, i = Aa(e, t, s);
  return i == null || typeof i == "boolean" ? null : X(i) ? i : /* @__PURE__ */ f(Ye, { children: i });
}
const cr = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function tt(n) {
  const { icon: e, className: t, ...s } = n;
  if (!e)
    return null;
  if (X(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(cr(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? cr(r) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: N(i), ...s });
}
function Lc(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Pc(n) {
  const e = this, t = n._container;
  e.componentWillUnmount = function() {
    dn(null, e._temp), e._temp = null, e._container = null;
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
  }), dn(
    G(Lc, { context: e.context }, n._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function Hc(n, e) {
  const t = G(Pc, { _vnode: n, _container: e });
  return t.containerInfo = e, t;
}
function Da(n) {
  return n.parentNode === document ? !1 : n.parentNode ? Da(n.parentNode) : !0;
}
const $n = class $n {
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
        this._autoDestory = 0, Da(h) && this.destroy();
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
    return Z(this.options.i18n, e, t, s, this.options.lang, this.constructor.NAME) ?? Z(this.options.i18n, e, t, s, this.options.lang) ?? `{i18n:${e}}`;
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
$n.DEFAULT = {}, $n.MULTI_INSTANCE = !1;
let at = $n;
class z extends at {
  constructor() {
    super(...arguments), this.ref = U();
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
    dn(
      G(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function Oc({
  component: n = "div",
  className: e,
  children: t,
  style: s,
  attrs: i
}) {
  return G(n, {
    className: N(e),
    style: s,
    ...i
  }, t);
}
function La({
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
  ...w
}) {
  const _ = [
    typeof g == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${g ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(tt, { icon: h }),
    u ? /* @__PURE__ */ f("span", { className: "text", children: u }) : null,
    /* @__PURE__ */ f(ee, { content: i }),
    s,
    /* @__PURE__ */ f(tt, { icon: p })
  ];
  return G(e, {
    className: N(t, { disabled: a, active: l }),
    title: m,
    [e === "a" ? "href" : "data-url"]: a ? void 0 : r,
    [e === "a" ? "target" : "data-target"]: a ? void 0 : c,
    onClick: y,
    ...w,
    ...o
  }, ..._);
}
function Bc({
  component: n = "div",
  className: e,
  text: t,
  attrs: s,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return G(n, {
    className: N(e),
    style: r,
    onClick: a,
    ...s
  }, t, /* @__PURE__ */ f(ee, { content: o }), i);
}
function Wc({
  component: n = "div",
  className: e,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return G(n, {
    className: N(e),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function Fc({ type: n, ...e }) {
  return /* @__PURE__ */ f(Yi, { ...e });
}
function Pa({
  component: n = "div",
  className: e,
  children: t,
  content: s,
  style: i,
  attrs: o
}) {
  return G(n, {
    className: N(e),
    style: i,
    ...o
  }, /* @__PURE__ */ f(ee, { content: s }), t);
}
var Mt;
let Si = (Mt = class extends B {
  constructor() {
    super(...arguments), this.ref = U();
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
        const y = o.call(this, i, G);
        if (X(y))
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
}, Mt.ItemComponents = {
  divider: Oc,
  item: La,
  heading: Bc,
  space: Wc,
  custom: Fc,
  basic: Pa
}, Mt.ROOT_TAG = "menu", Mt.NAME = "action-menu", Mt);
const xn = class xn extends z {
};
xn.NAME = "ActionMenu", xn.Component = Si;
let hr = xn;
function zc({
  items: n,
  show: e,
  level: t,
  ...s
}) {
  return /* @__PURE__ */ f(La, { ...s });
}
var is, ut, Se, os;
let Do = (os = class extends Si {
  constructor(t) {
    super(t);
    C(this, is, /* @__PURE__ */ new Set());
    C(this, ut, void 0);
    C(this, Se, (t, s, i) => {
      d(i.target).closest(".not-nested-toggle").length || (this.toggle(t, s), i.preventDefault());
    });
    $(this, ut, t.nestedShow === void 0), b(this, ut) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: b(this, ut) ? this.state.nestedShow : o,
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
    b(this, is).add(r);
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
    const s = b(this, ut) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggle(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, s);
    if (!b(this, ut))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...b(this, is).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), s === void 0)
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
    b(this, ut) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    b(this, ut) && this.setState({ nestedShow: !1 });
  }
}, is = new WeakMap(), ut = new WeakMap(), Se = new WeakMap(), os.ItemComponents = {
  item: zc
}, os);
const kn = class kn extends z {
};
kn.NAME = "ActionMenuNested", kn.Component = Do;
let ur = kn;
var rs;
let ye = (rs = class extends Do {
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
}, rs.NAME = "menu", rs);
const En = class En extends z {
};
En.NAME = "Menu", En.Component = ye;
let dr = En;
class Q extends Ao {
  _beforeRender(e) {
    const { text: t, loading: s, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = e;
    this._isEmptyText = t == null || typeof t == "string" && !t.length || s && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !s;
  }
  _getChildren(e) {
    const { loading: t, loadingIcon: s, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: h } = e;
    return [
      t ? /* @__PURE__ */ f(tt, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(tt, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: t ? i : r }),
      t ? null : a,
      t ? null : /* @__PURE__ */ f(tt, { icon: l }),
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
function jc({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(Q, { type: t, ...s });
}
let Vc = class extends B {
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
    const v = [], w = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: u, children: [
      i ? /* @__PURE__ */ f("div", { className: c, children: i }) : null,
      w
    ] }, "heading")) : v.push(w), v.push(y), h && v.push(/* @__PURE__ */ f("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: t, className: N("popover", a, { popup: s }), style: r, children: v });
  }
};
const Sn = class Sn extends z {
};
Sn.NAME = "PopoverPanel", Sn.Component = Vc;
let Ki = Sn;
function Ys(n) {
  return n.split("-")[1];
}
function Lo(n) {
  return n === "y" ? "height" : "width";
}
function fe(n) {
  return n.split("-")[0];
}
function Ks(n) {
  return ["top", "bottom"].includes(fe(n)) ? "x" : "y";
}
function fr(n, e, t) {
  let { reference: s, floating: i } = n;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = Ks(e), l = Lo(a), h = s[l] / 2 - i[l] / 2, u = a === "x";
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
  switch (Ys(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const Uc = async (n, e, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: n, floating: e, strategy: i }), { x: u, y: c } = fr(h, s, l), p = s, m = {}, g = 0;
  for (let y = 0; y < a.length; y++) {
    const { name: v, fn: w } = a[y], { x: _, y: x, data: k, reset: E } = await w({ x: u, y: c, initialPlacement: s, placement: p, strategy: i, middlewareData: m, rects: h, platform: r, elements: { reference: n, floating: e } });
    u = _ ?? u, c = x ?? c, m = { ...m, [v]: { ...m[v], ...k } }, E && g <= 50 && (g++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (h = E.rects === !0 ? await r.getElementRects({ reference: n, floating: e, strategy: i }) : E.rects), { x: u, y: c } = fr(h, p, l)), y = -1);
  }
  return { x: u, y: c, placement: p, strategy: i, middlewareData: m };
};
function Gs(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Ha(n) {
  return typeof n != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function fn(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function Oa(n, e) {
  var t;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = n, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: p = !1, padding: m = 0 } = Gs(e, n), g = Ha(m), y = a[p ? c === "floating" ? "reference" : "floating" : c], v = fn(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(y))) == null || t ? y : y.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: s, y: i } : r.reference, _ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), x = await (o.isElement == null ? void 0 : o.isElement(_)) && await (o.getScale == null ? void 0 : o.getScale(_)) || { x: 1, y: 1 }, k = fn(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: _, strategy: l }) : w);
  return { top: (v.top - k.top + g.top) / x.y, bottom: (k.bottom - v.bottom + g.bottom) / x.y, left: (v.left - k.left + g.left) / x.x, right: (k.right - v.right + g.right) / x.x };
}
const Gi = Math.min, qc = Math.max;
function Xi(n, e, t) {
  return qc(n, Gi(e, t));
}
const Zi = (n) => ({ name: "arrow", options: n, async fn(e) {
  const { x: t, y: s, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = Gs(n, e) || {};
  if (l == null)
    return {};
  const u = Ha(h), c = { x: t, y: s }, p = Ks(i), m = Lo(p), g = await r.getDimensions(l), y = p === "y", v = y ? "top" : "left", w = y ? "bottom" : "right", _ = y ? "clientHeight" : "clientWidth", x = o.reference[m] + o.reference[p] - c[p] - o.floating[m], k = c[p] - o.reference[p], E = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = E ? E[_] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(E)) || (M = a.floating[_] || o.floating[m]);
  const I = x / 2 - k / 2, A = M / 2 - g[m] / 2 - 1, D = Gi(u[v], A), O = Gi(u[w], A), P = D, R = M - g[m] - O, T = M / 2 - g[m] / 2 + I, H = Xi(P, T, R), F = Ys(i) != null && T != H && o.reference[m] / 2 - (T < P ? D : O) - g[m] / 2 < 0 ? T < P ? P - T : R - T : 0;
  return { [p]: c[p] - F, data: { [p]: H, centerOffset: T - H + F } };
} }), Yc = ["top", "right", "bottom", "left"];
Yc.reduce((n, e) => n.concat(e, e + "-start", e + "-end"), []);
const Kc = { left: "right", right: "left", bottom: "top", top: "bottom" };
function pn(n) {
  return n.replace(/left|right|bottom|top/g, (e) => Kc[e]);
}
function Gc(n, e, t) {
  t === void 0 && (t = !1);
  const s = Ys(n), i = Ks(n), o = Lo(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = pn(r)), { main: r, cross: pn(r) };
}
const Xc = { start: "end", end: "start" };
function Hi(n) {
  return n.replace(/start|end/g, (e) => Xc[e]);
}
const Ti = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(e) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: g = !0, ...y } = Gs(n, e), v = fe(s), w = fe(r) === r, _ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = c || (w || !g ? [pn(r)] : function(P) {
      const R = pn(P);
      return [Hi(P), R, Hi(R)];
    }(r));
    c || m === "none" || x.push(...function(P, R, T, H) {
      const F = Ys(P);
      let j = function(ot, Ke, Tl) {
        const Ko = ["left", "right"], Go = ["right", "left"], Nl = ["top", "bottom"], Ml = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Tl ? Ke ? Go : Ko : Ke ? Ko : Go;
          case "left":
          case "right":
            return Ke ? Nl : Ml;
          default:
            return [];
        }
      }(fe(P), T === "start", H);
      return F && (j = j.map((ot) => ot + "-" + F), R && (j = j.concat(j.map(Hi)))), j;
    }(r, g, m, _));
    const k = [r, ...x], E = await Oa(e, y), M = [];
    let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && M.push(E[v]), u) {
      const { main: P, cross: R } = Gc(s, o, _);
      M.push(E[P], E[R]);
    }
    if (I = [...I, { placement: s, overflows: M }], !M.every((P) => P <= 0)) {
      var A, D;
      const P = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = k[P];
      if (R)
        return { data: { index: P, overflows: I }, reset: { placement: R } };
      let T = (D = I.filter((H) => H.overflows[0] <= 0).sort((H, F) => H.overflows[1] - F.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!T)
        switch (p) {
          case "bestFit": {
            var O;
            const H = (O = I.map((F) => [F.placement, F.overflows.filter((j) => j > 0).reduce((j, ot) => j + ot, 0)]).sort((F, j) => F[1] - j[1])[0]) == null ? void 0 : O[0];
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
}, Ni = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(e) {
    const { x: t, y: s } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = fe(a), p = Ys(a), m = Ks(a) === "x", g = ["left", "top"].includes(c) ? -1 : 1, y = u && m ? -1 : 1, v = Gs(r, o);
      let { mainAxis: w, crossAxis: _, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof x == "number" && (_ = p === "end" ? -1 * x : x), m ? { x: _ * y, y: w * g } : { x: w * g, y: _ * y };
    }(e, n);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function Zc(n) {
  return n === "x" ? "y" : "x";
}
const ts = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(e) {
    const { x: t, y: s, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: _ } = v;
      return { x: w, y: _ };
    } }, ...l } = Gs(n, e), h = { x: t, y: s }, u = await Oa(e, l), c = Ks(fe(i)), p = Zc(c);
    let m = h[c], g = h[p];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      m = Xi(m + u[c === "y" ? "top" : "left"], m, m - u[v]);
    }
    if (r) {
      const v = p === "y" ? "bottom" : "right";
      g = Xi(g + u[p === "y" ? "top" : "left"], g, g - u[v]);
    }
    const y = a.fn({ ...e, [c]: m, [p]: g });
    return { ...y, data: { x: y.x - t, y: y.y - s } };
  } };
};
function nt(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function xt(n) {
  return nt(n).getComputedStyle(n);
}
function Ba(n) {
  return n instanceof nt(n).Node;
}
function Xt(n) {
  return Ba(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function lt(n) {
  return n instanceof HTMLElement || n instanceof nt(n).HTMLElement;
}
function pr(n) {
  return typeof ShadowRoot < "u" && (n instanceof nt(n).ShadowRoot || n instanceof ShadowRoot);
}
function es(n) {
  const { overflow: e, overflowX: t, overflowY: s, display: i } = xt(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + t) && !["inline", "contents"].includes(i);
}
function Jc(n) {
  return ["table", "td", "th"].includes(Xt(n));
}
function Ji(n) {
  const e = Po(), t = xt(n);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (t.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (t.contain || "").includes(s));
}
function Po() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Mi(n) {
  return ["html", "body", "#document"].includes(Xt(n));
}
const Qi = Math.min, ke = Math.max, mn = Math.round, Zs = Math.floor, Zt = (n) => ({ x: n, y: n });
function Wa(n) {
  const e = xt(n);
  let t = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = lt(n), o = i ? n.offsetWidth : t, r = i ? n.offsetHeight : s, a = mn(t) !== o || mn(s) !== r;
  return a && (t = o, s = r), { width: t, height: s, $: a };
}
function Rt(n) {
  return n instanceof Element || n instanceof nt(n).Element;
}
function Ho(n) {
  return Rt(n) ? n : n.contextElement;
}
function Ee(n) {
  const e = Ho(n);
  if (!lt(e))
    return Zt(1);
  const t = e.getBoundingClientRect(), { width: s, height: i, $: o } = Wa(e);
  let r = (o ? mn(t.width) : t.width) / s, a = (o ? mn(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const Qc = Zt(0);
function Fa(n) {
  const e = nt(n);
  return Po() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : Qc;
}
function be(n, e, t, s) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(), o = Ho(n);
  let r = Zt(1);
  e && (s ? Rt(s) && (r = Ee(s)) : r = Ee(n));
  const a = function(p, m, g) {
    return m === void 0 && (m = !1), !(!g || m && g !== nt(p)) && m;
  }(o, t, s) ? Fa(o) : Zt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = nt(o), m = s && Rt(s) ? nt(s) : s;
    let g = p.frameElement;
    for (; g && s && m !== p; ) {
      const y = Ee(g), v = g.getBoundingClientRect(), w = getComputedStyle(g), _ = v.left + (g.clientLeft + parseFloat(w.paddingLeft)) * y.x, x = v.top + (g.clientTop + parseFloat(w.paddingTop)) * y.y;
      l *= y.x, h *= y.y, u *= y.x, c *= y.y, l += _, h += x, g = nt(g).frameElement;
    }
  }
  return fn({ width: u, height: c, x: l, y: h });
}
function Ri(n) {
  return Rt(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function It(n) {
  var e;
  return (e = (Ba(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function za(n) {
  return be(It(n)).left + Ri(n).scrollLeft;
}
function je(n) {
  if (Xt(n) === "html")
    return n;
  const e = n.assignedSlot || n.parentNode || pr(n) && n.host || It(n);
  return pr(e) ? e.host : e;
}
function ja(n) {
  const e = je(n);
  return Mi(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : lt(e) && es(e) ? e : ja(e);
}
function gn(n, e) {
  var t;
  e === void 0 && (e = []);
  const s = ja(n), i = s === ((t = n.ownerDocument) == null ? void 0 : t.body), o = nt(s);
  return i ? e.concat(o, o.visualViewport || [], es(s) ? s : []) : e.concat(s, gn(s));
}
function mr(n, e, t) {
  let s;
  if (e === "viewport")
    s = function(i, o) {
      const r = nt(i), a = It(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, p = 0;
      if (l) {
        h = l.width, u = l.height;
        const m = Po();
        (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: p };
    }(n, t);
  else if (e === "document")
    s = function(i) {
      const o = It(i), r = Ri(i), a = i.ownerDocument.body, l = ke(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = ke(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + za(i);
      const c = -r.scrollTop;
      return xt(a).direction === "rtl" && (u += ke(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(It(n));
  else if (Rt(e))
    s = function(i, o) {
      const r = be(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = lt(i) ? Ee(i) : Zt(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = Fa(n);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return fn(s);
}
function Va(n, e) {
  const t = je(n);
  return !(t === e || !Rt(t) || Mi(t)) && (xt(t).position === "fixed" || Va(t, e));
}
function th(n, e, t) {
  const s = lt(e), i = It(e), o = t === "fixed", r = be(n, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Zt(0);
  if (s || !s && !o)
    if ((Xt(e) !== "body" || es(i)) && (a = Ri(e)), lt(e)) {
      const h = be(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = za(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function gr(n, e) {
  return lt(n) && xt(n).position !== "fixed" ? e ? e(n) : n.offsetParent : null;
}
function yr(n, e) {
  const t = nt(n);
  if (!lt(n))
    return t;
  let s = gr(n, e);
  for (; s && Jc(s) && xt(s).position === "static"; )
    s = gr(s, e);
  return s && (Xt(s) === "html" || Xt(s) === "body" && xt(s).position === "static" && !Ji(s)) ? t : s || function(i) {
    let o = je(i);
    for (; lt(o) && !Mi(o); ) {
      if (Ji(o))
        return o;
      o = je(o);
    }
    return null;
  }(n) || t;
}
const eh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: e, offsetParent: t, strategy: s } = n;
  const i = lt(t), o = It(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Zt(1);
  const l = Zt(0);
  if ((i || !i && s !== "fixed") && ((Xt(t) !== "body" || es(o)) && (r = Ri(t)), lt(t))) {
    const h = be(t);
    a = Ee(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: It, getClippingRect: function(n) {
  let { element: e, boundary: t, rootBoundary: s, strategy: i } = n;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = gn(l).filter((y) => Rt(y) && Xt(y) !== "body"), p = null;
    const m = xt(l).position === "fixed";
    let g = m ? je(l) : l;
    for (; Rt(g) && !Mi(g); ) {
      const y = xt(g), v = Ji(g);
      v || y.position !== "fixed" || (p = null), (m ? !v && !p : !v && y.position === "static" && p && ["absolute", "fixed"].includes(p.position) || es(g) && !v && Va(l, g)) ? c = c.filter((w) => w !== g) : p = y, g = je(g);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), s], r = o[0], a = o.reduce((l, h) => {
    const u = mr(e, h, i);
    return l.top = ke(u.top, l.top), l.right = Qi(u.right, l.right), l.bottom = Qi(u.bottom, l.bottom), l.left = ke(u.left, l.left), l;
  }, mr(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: yr, getElementRects: async function(n) {
  let { reference: e, floating: t, strategy: s } = n;
  const i = this.getOffsetParent || yr, o = this.getDimensions;
  return { reference: th(e, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(n) {
  return Array.from(n.getClientRects());
}, getDimensions: function(n) {
  return Wa(n);
}, getScale: Ee, isElement: Rt, isRTL: function(n) {
  return getComputedStyle(n).direction === "rtl";
} };
function Oo(n, e, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = Ho(n), u = i || o ? [...h ? gn(h) : [], ...gn(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, w) {
    let _, x = null;
    const k = It(v);
    function E() {
      clearTimeout(_), x && x.disconnect(), x = null;
    }
    return function M(I, A) {
      I === void 0 && (I = !1), A === void 0 && (A = 1), E();
      const { left: D, top: O, width: P, height: R } = v.getBoundingClientRect();
      if (I || w(), !P || !R)
        return;
      const T = { rootMargin: -Zs(O) + "px " + -Zs(k.clientWidth - (D + P)) + "px " + -Zs(k.clientHeight - (O + R)) + "px " + -Zs(D) + "px", threshold: ke(0, Qi(1, A)) || 1 };
      let H = !0;
      function F(j) {
        const ot = j[0].intersectionRatio;
        if (ot !== A) {
          if (!H)
            return M();
          ot ? M(!1, ot) : _ = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        H = !1;
      }
      try {
        x = new IntersectionObserver(F, { ...T, root: k.ownerDocument });
      } catch {
        x = new IntersectionObserver(F, T);
      }
      x.observe(v);
    }(!0), E;
  }(h, t) : null;
  let p, m = -1, g = null;
  r && (g = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      g && g.observe(e);
    })), t();
  }), h && !l && g.observe(h), g.observe(e));
  let y = l ? be(n) : null;
  return l && function v() {
    const w = be(n);
    !y || w.x === y.x && w.y === y.y && w.width === y.width && w.height === y.height || t(), y = w, p = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), g && g.disconnect(), g = null, l && cancelAnimationFrame(p);
  };
}
const Ii = (n, e, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: eh, ...t }, o = { ...i.platform, _c: s };
  return Uc(n, e, { ...i, platform: o });
}, sh = '[data-toggle="popover"]', br = "show", wr = "in", Ce = class Ce extends at {
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
    if (o.addClass(br), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), u === "hover") {
      this._clearDelayHide();
      const { namespace: c } = this;
      o.on(`mouseenter${c}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${c}`, () => {
        this.delayHide();
      });
    }
    this._virtual || d(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(wr), this._resetTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && d(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: e, animation: t, onHide: s, onHidden: i, trigger: o } = this.options, r = d(this._targetElement);
    this._shown = !1, s == null || s.call(this), this.emit("hide"), r.removeClass(wr), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || d(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), d(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(br), e && this._resetTimer(() => {
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
    s || (this._layoutWatcher = Oo(e, t, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && d(t).css({ width: d(e).width() }), Ii(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: u, strategy: c }) => {
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
      o && o.element !== t && (o.destroy(), o = void 0), o ? o.render(s) : (o = new Ki(t, s), o.on("inited", () => this.layout())), this._panel = o;
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
        i ? Ti() : null,
        o ? ts(typeof o == "object" ? o : void 0) : null,
        r || u ? Ni((r || 0) + u) : null,
        a ? Zi({ element: h }) : null
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
let Ct = Ce;
d(document).on(`click${Ct.NAMESPACE} mouseenter${Ct.NAMESPACE}`, sh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(Ct.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    Ct.ensure(e, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const nh = '[data-toggle="dropdown"]', Tn = class Tn extends Ct {
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
      content: G(to, this._getMenuOptions())
    };
  }
};
Tn.NAME = "Dropdown", Tn.DEFAULT = {
  ...Ct.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
let $t = Tn;
d(document).on(`click${$t.NAMESPACE} mouseenter${$t.NAMESPACE}`, nh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data($t.KEY)) {
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
    !i.target && !i.items && !i.menu && (i.target = e.next(".dropdown-menu")), $t.ensure(e, i), n.preventDefault();
  }
});
const Fo = class Fo extends Q {
  constructor() {
    super(...arguments), this._ref = U();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: e, items: t } = this.props, s = d(this.triggerElement), i = $t.get(this.triggerElement), o = {
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
    (e = $t.get(this.triggerElement)) == null || e.destroy();
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
Fo.defaultProps = {
  caret: !0
};
let yn = Fo;
const zo = class zo extends ye {
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
    !e || !t || Ii(t, e, {
      placement: this.props.placement,
      middleware: [Ti(), ts(), Ni(1)]
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
zo.defaultProps = {
  ...ye.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
let to = zo;
function Ua({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(yn, { type: t, ...s });
}
let qa = class extends B {
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
    const { key: s = t, ...i } = e, o = e.dropdown || e.items ? yn : Q;
    return /* @__PURE__ */ f(o, { ...i }, s);
  }
  renderItem(e, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: s, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), i) {
      const l = i.call(this, a, G);
      if (X(l))
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
function ih({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(qa, { type: t, ...s });
}
var Gt;
let Jt = (Gt = class extends Si {
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
  item: jc,
  dropdown: Ua,
  "btn-group": ih
}, Gt.ROOT_TAG = "nav", Gt.NAME = "toolbar", Gt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, Gt);
function oh({
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
  a === !0 ? p = /* @__PURE__ */ f(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : X(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(Q, { ...a, onClick: l }));
  const m = X(t) ? t : t ? /* @__PURE__ */ f(Jt, { ...t }) : null;
  return /* @__PURE__ */ f("div", { className: N("alert", n), style: e, ...c, children: [
    /* @__PURE__ */ f(tt, { icon: h, className: N("alert-icon", u) }),
    X(i) ? i : /* @__PURE__ */ f("div", { className: N("alert-content", o), children: [
      X(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? m : null
    ] }),
    s ? null : m,
    p,
    r
  ] });
}
function rh(n) {
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
function ah({
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
    oh,
    {
      className: N("messager", o, e, s === !0 ? rh(t) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Ft, _e;
const Nn = class Nn extends z {
  constructor() {
    super(...arguments);
    C(this, Ft);
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
    this.render(), this.emit("show"), L(this, Ft, _e).call(this, () => {
      this._show = !0, this.render(), L(this, Ft, _e).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && L(this, Ft, _e).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && L(this, Ft, _e).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), L(this, Ft, _e).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Ft = new WeakSet(), _e = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, Nn.NAME = "MessagerItem", Nn.Component = ah;
let eo = Nn;
var ie, dt, Mn, Ya, Rn, Ka;
const $e = class $e extends at {
  constructor() {
    super(...arguments);
    C(this, Mn);
    C(this, Rn);
    C(this, ie, void 0);
    C(this, dt, void 0);
  }
  get isShown() {
    var t;
    return !!((t = b(this, dt)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), L(this, Mn, Ya).call(this).show();
  }
  hide() {
    var t;
    (t = b(this, dt)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = $e.ensure(s || "body", { key: `messager_${d.guid++}`, ...i });
    return o.hide(), o.show(), o;
  }
};
ie = new WeakMap(), dt = new WeakMap(), Mn = new WeakSet(), Ya = function() {
  if (b(this, dt))
    b(this, dt).setOptions(this.options);
  else {
    const t = L(this, Rn, Ka).call(this), s = new eo(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t == null || t.remove(), $(this, ie, void 0), $(this, dt, void 0);
    }), $(this, dt, s);
  }
  return b(this, dt);
}, Rn = new WeakSet(), Ka = function() {
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
let vr = $e;
var as;
let lh = (as = class extends B {
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
}, as.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, as);
const In = class In extends z {
};
In.NAME = "ProgressCircle", In.Component = lh;
let _r = In;
var Et;
class ch {
  constructor(e = "") {
    C(this, Et, void 0);
    typeof e == "object" ? $(this, Et, e) : $(this, Et, document.appendChild(document.createComment(e)));
  }
  on(e, t, s) {
    b(this, Et).addEventListener(e, t, s);
  }
  once(e, t, s) {
    b(this, Et).addEventListener(e, t, { once: !0, ...s });
  }
  off(e, t, s) {
    b(this, Et).removeEventListener(e, t, s);
  }
  emit(e) {
    return b(this, Et).dispatchEvent(e), e;
  }
}
Et = new WeakMap();
const Cr = /* @__PURE__ */ new Set([
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
class Ga extends ch {
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
    return typeof e == "string" && (Cr.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(Ga.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Cr.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
const Je = class Je extends at {
  async afterInit() {
    const e = await Je.loadModule();
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
Je.NAME = "Sortable", Je.DEFAULT = {
  animation: 150
};
let $r = Je;
d.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let Xa = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const Oi = "```ZUI_STR\n";
var ls, oe, Te, ft, Ne, Me, tn;
const jo = class jo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    C(this, Me);
    C(this, ls, void 0);
    C(this, oe, void 0);
    C(this, Te, void 0);
    C(this, ft, void 0);
    C(this, Ne, void 0);
    $(this, ls, t), $(this, Te, e ?? Xa()), $(this, oe, `ZUI_STORE:${b(this, Te)}`), $(this, ft, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return b(this, ls);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (b(this, Ne) || $(this, Ne, new jo(b(this, Te), "session")), b(this, Ne));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const s = b(this, ft).getItem(L(this, Me, tn).call(this, e));
    if (typeof s == "string") {
      if (s.startsWith(Oi))
        return s.substring(Oi.length);
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
    b(this, ft).setItem(L(this, Me, tn).call(this, e), typeof t == "string" ? `${Oi}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    b(this, ft).removeItem(L(this, Me, tn).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < b(this, ft).length; t++) {
      const s = b(this, ft).key(t);
      if (s != null && s.startsWith(b(this, oe))) {
        const i = b(this, ft).getItem(s);
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
ls = new WeakMap(), oe = new WeakMap(), Te = new WeakMap(), ft = new WeakMap(), Ne = new WeakMap(), Me = new WeakSet(), tn = function(e) {
  return `${b(this, oe)}:${e}`;
};
let bn = jo;
const Ze = new bn("DEFAULT");
function hh(n, e = "local") {
  return new bn(n, e);
}
Object.assign(Ze, { create: hh });
function uh(n) {
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
function dh(n) {
  const [e, t, s] = typeof n == "string" ? uh(n) : n;
  return e * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function xr(n, e) {
  return dh(n) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function kr(n, e = 255) {
  return Math.min(Math.max(n, 0), e);
}
function fh(n, e, t) {
  n = n % 360 / 360, e = kr(e), t = kr(t);
  const s = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(n + 1 / 3) * 255,
    o(n) * 255,
    o(n - 1 / 3) * 255
  ];
}
function ph(n) {
  let e = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let t = 0; t < n.length; ++t)
      e += (t + 1) * n.charCodeAt(t);
  return e;
}
function mh(n, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= e ? n : n.substring(n.length - e) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= e ? n : n.substring(0, e);
}
let Za = class extends B {
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
    } = this.props, w = ["avatar", e], _ = { ...t, background: r, color: a };
    let x = 32;
    s && (typeof s == "number" ? (_.width = `${s}px`, _.height = `${s}px`, _.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? _.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let k;
    if (c)
      w.push("has-img"), k = /* @__PURE__ */ f("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const E = mh(l, u);
      if (w.push("has-text", `has-text-${E.length}`), r)
        !a && r && (_.color = xr(r));
      else {
        const I = h ?? l, A = (typeof I == "number" ? I : ph(I)) * p % 360;
        if (_.background = `hsl(${A},${m * 100}%,${g * 100}%)`, !a) {
          const D = fh(A, m, g);
          _.color = xr(D);
        }
      }
      let M;
      x && x < 14 * E.length && (M = { transform: `scale(${x / (14 * E.length)})`, whiteSpace: "nowrap" }), k = /* @__PURE__ */ f("div", { "data-actualSize": x, className: "avatar-text", style: M, children: E });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: N(w),
        style: _,
        ...v,
        children: [
          k,
          y
        ]
      }
    );
  }
};
const An = class An extends z {
};
An.NAME = "Avatar", An.Component = Za;
let Er = An;
const Dn = class Dn extends z {
};
Dn.NAME = "BtnGroup", Dn.Component = qa;
let Sr = Dn;
const so = Symbol("EVENT_PICK");
class Bo extends B {
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
      if (i === so)
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
    i && e.state.value !== s.value && (this._skipTriggerChange !== s.value && d(`#${t}`).trigger("change", so), this._skipTriggerChange = !1);
  }
  render(e) {
    return G(
      e.tagName || "div",
      this._getProps(e),
      this._renderTrigger(e),
      this._renderValue(e)
    );
  }
}
var re, pt, zt;
class Ja extends B {
  constructor(t) {
    super(t);
    C(this, re, void 0);
    C(this, pt, void 0);
    C(this, zt, void 0);
    $(this, re, U()), this._handleDocClick = (s) => {
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
      b(this, pt) && (b(this, pt).call(this), $(this, pt, void 0));
      return;
    }
    b(this, pt) || $(this, pt, Oo(s, t, () => {
      const { placement: r, width: a } = i;
      Ii(s, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Ti() : null, ts(), Ni(1)].filter(Boolean)
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
    const t = b(this, pt);
    t && (t(), $(this, pt, void 0)), $(this, zt, void 0), $(this, re, void 0), d(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(t) {
    return Hc(this._render(t), this._getContainer(t));
  }
}
re = new WeakMap(), pt = new WeakMap(), zt = new WeakMap();
var cs, st, ae, pe;
let Lt = (pe = class extends B {
  constructor(t) {
    super(t);
    C(this, cs, void 0);
    C(this, st, void 0);
    C(this, ae, void 0);
    $(this, st, 0), $(this, ae, U()), this.changeState = (s, i) => new Promise((o) => {
      this.setState(s, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (s, i) => {
      this.props.disabled && (s = !1);
      const { state: o } = this;
      if (typeof s == "boolean" && s === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      b(this, st) && (clearTimeout(b(this, st)), $(this, st, 0));
      let r = await this.changeState((l) => (s = s ?? !l.open, {
        open: s ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await an(200, (l) => {
        $(this, st, l);
      }), $(this, st, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await an(50, (l) => {
        $(this, st, l);
      }), $(this, st, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, $(this, cs, t.id ?? `_pick${d.guid++}`);
  }
  get id() {
    return b(this, cs);
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
    (s = this.props.beforeDestroy) == null || s.call(this), b(this, st) && clearTimeout(b(this, st));
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
}, cs = new WeakMap(), st = new WeakMap(), ae = new WeakMap(), pe.Trigger = Bo, pe.Pop = Ja, pe.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, pe);
var hs;
let gh = (hs = class extends Lt {
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
      s ? /* @__PURE__ */ f(tt, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
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
        o.map((l) => /* @__PURE__ */ f("button", { className: "btn color-picker-item", style: { backgroundColor: l }, "data-pick-value": l, children: r === l ? /* @__PURE__ */ f(tt, { icon: "check" }) : null }, l)),
        /* @__PURE__ */ f("button", { className: "btn color-picker-item", "data-pick-value": "", children: /* @__PURE__ */ f(tt, { className: "text-fore", icon: "trash" }) })
      ] }, "row")
    ];
  }
}, hs.defaultProps = {
  ...Lt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, hs);
const Ln = class Ln extends z {
};
Ln.NAME = "ColorPicker", Ln.Component = gh;
let Tr = Ln;
const ss = 24 * 60 * 60 * 1e3, K = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), yh = (n, e, t = "day") => {
  if (typeof e == "string") {
    const s = Number.parseInt(e, 10);
    t = e.replace(s.toString(), ""), e = s;
  }
  return n = new Date(K(n).getTime()), t === "month" ? n.setMonth(n.getMonth() + e) : t === "year" ? n.setFullYear(n.getFullYear() + e) : t === "week" ? n.setDate(n.getDate() + e * 7) : t === "hour" ? n.setHours(n.getHours() + e) : t === "minute" ? n.setMinutes(n.getMinutes() + e) : t === "second" ? n.setSeconds(n.getSeconds() + e) : n.setDate(n.getDate() + e), n;
}, Xs = (n, e = /* @__PURE__ */ new Date()) => K(n).toDateString() === K(e).toDateString(), no = (n, e = /* @__PURE__ */ new Date()) => K(n).getFullYear() === K(e).getFullYear(), Qa = (n, e = /* @__PURE__ */ new Date()) => (n = K(n), e = K(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), Au = (n, e = /* @__PURE__ */ new Date()) => {
  n = K(n), e = K(e);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, Du = (n, e) => Xs(K(e), n), Lu = (n, e) => Xs(K(e).getTime() - ss, n), Pu = (n, e) => Xs(K(e).getTime() + ss, n), ct = (n, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (n = K(n), Number.isNaN(n.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", no(n) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, Hu = (n, e, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = ct(n, no(n) ? s.month : s.full);
  if (Xs(n, e))
    return i;
  const o = ct(e, no(n, e) ? Qa(n, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
};
var us, ds;
class bh extends B {
  constructor() {
    super(...arguments);
    C(this, us, U());
    C(this, ds, (t, s) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    d(b(this, us).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: s = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: b(this, us), children: [
      /* @__PURE__ */ f(
        ye,
        {
          className: l,
          items: r,
          onClickItem: b(this, ds).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        ye,
        {
          className: l,
          items: a,
          onClickItem: b(this, ds).bind(this, "minute")
        }
      )
    ] });
  }
}
us = new WeakMap(), ds = new WeakMap();
const Nr = (n) => {
  if (!n)
    return;
  const e = K(`1999-01-01 ${n}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var Pn, Hn, On, Bn, fs;
let wh = (fs = class extends Lt {
  constructor(t) {
    super(t);
    C(this, Pn, () => {
      this.toggle(!0);
    });
    C(this, Hn, (t) => {
      this.setTime(t.target.value);
    });
    C(this, On, (t, s) => {
      this.setTime({ [t]: s });
    });
    C(this, Bn, () => {
      this.setTime("");
    });
    const s = this.state;
    s.value === "now" && (s.value = ct(/* @__PURE__ */ new Date(), t.format));
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
    const i = Nr(s), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? ct(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(s);
    });
  }
  getTime() {
    const t = Nr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `time-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: b(this, Bn), children: /* @__PURE__ */ f("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-time" }) : p = /* @__PURE__ */ f(tt, { icon: o })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: b(this, Pn), onChange: b(this, Hn) }, "input"),
      p ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: p }, "icon") : null
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
    return /* @__PURE__ */ f(bh, { hour: s, minute: i, minuteStep: t.minuteStep, onChange: b(this, On) });
  }
}, Pn = new WeakMap(), Hn = new WeakMap(), On = new WeakMap(), Bn = new WeakMap(), fs.defaultProps = {
  ...Lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, fs);
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
const vh = (n, e, t = 0) => {
  const s = new Date(n, e - 1, 1), i = new Date(n, e, 0), o = s.getDay(), r = s.getTime() - (7 + o - t) % 7 * ss;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: s.getTime()
  };
}, Mr = (n, e) => new Set((Array.isArray(n) ? n : [n]).map((t) => ct(t, e)));
var Wn;
class _h extends B {
  constructor() {
    super(...arguments);
    C(this, Wn, (t) => {
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
      weekNames: o = Z.getLang("weekNames"),
      monthNames: r = Z.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: u = []
    } = t, c = [], p = "btn ghost square rounded-full";
    for (let M = 0; M < 7; M++) {
      const I = (i + M) % 7;
      c.push(/* @__PURE__ */ f("div", { className: N("col mini-calendar-day", { "is-weekend": I === 0 || I === 6 }), children: /* @__PURE__ */ f("div", { children: o ? o[I] : I }) }, M));
    }
    const { startTime: m, days: g, firstDay: y } = vh(a, l, i), v = y + g * ss;
    let w = m;
    const _ = [], x = "yyyy-MM-dd", k = Mr(h, x), E = Mr(u, x);
    for (; w <= v; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const A = new Date(w), D = A.getDate(), O = ct(A, x), P = A.getDay(), R = Qa(A, y), T = N("col mini-calendar-day", {
          active: k.has(O),
          selected: E.has(O),
          "is-first": D === 1,
          "is-in-month": R,
          "is-out-month": !R,
          "is-today": Xs(A, s),
          "is-weekend": P === 0 || P === 6
        });
        M.push(
          /* @__PURE__ */ f("div", { className: T, "data-date": O, children: /* @__PURE__ */ f("a", { className: p, onClick: b(this, Wn), children: D === 1 && r ? r[A.getMonth()] : A.getDate() }) }, O)
        ), w += ss;
      }
      _.push(/* @__PURE__ */ f("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: c }),
      _
    ] });
  }
}
Wn = new WeakMap();
var ps, Fn;
class Rr extends B {
  constructor() {
    super(...arguments);
    C(this, ps, U());
    C(this, Fn, (t) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const o = d(t.target).closest("[data-value]").dataset("value");
      o && (s(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    d(b(this, ps).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: s, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ f(Q, { type: "ghost", "data-value": h, active: h === r, className: N(l === h ? "is-current" : ""), onClick: b(this, Fn), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: b(this, ps), children: a });
  }
}
ps = new WeakMap(), Fn = new WeakMap();
var Re, ms, gs, ys, bs, ws, zn, tl, jn, el;
class Ch extends B {
  constructor(t) {
    super(t);
    C(this, zn);
    C(this, jn);
    C(this, Re, void 0);
    C(this, ms, void 0);
    C(this, gs, void 0);
    C(this, ys, void 0);
    C(this, bs, void 0);
    C(this, ws, void 0);
    $(this, Re, U()), $(this, ms, (r) => {
      const a = d(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), $(this, gs, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), $(this, ys, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), $(this, bs, (r) => {
      this.setState({ year: r, select: "day" });
    }), $(this, ws, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = yh(h, r.substring(5).replace("+", ""))), r = ct(h, "yyyy-MM-dd");
      }
      (l = (a = this.props).onChange) == null || l.call(a, r);
    };
    const { date: s } = t, i = /* @__PURE__ */ new Date(), o = s ? new Date(s) : void 0;
    this.state = { select: "day", year: o ? o.getFullYear() : i.getFullYear(), month: o ? o.getMonth() + 1 : i.getMonth() + 1 };
  }
  _showSelect(t) {
    this.setState((s) => s.select === t ? { select: "day" } : { select: t });
  }
  componentDidMount() {
    d(b(this, Re).current).find(".active").scrollIntoView();
  }
  render(t, s) {
    const {
      date: i,
      yearText: o = Z.getLang("yearFormat") || "{0}",
      weekNames: r = Z.getLang("weekNames"),
      monthNames: a = Z.getLang("monthNames"),
      weekStart: l
    } = t, h = i ? new Date(i) : void 0, {
      year: u,
      month: c,
      select: p
    } = s, m = p === "day", g = K(t.minDate || "1970-1-1"), y = K(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: b(this, Re), onClick: b(this, ms), children: [
      L(this, zn, tl).call(this, t),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ f(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: b(this, gs), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: b(this, ys), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          _h,
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
          Rr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: b(this, bs)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          Rr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: b(this, ws)
          }
        ) : null,
        m ? L(this, jn, el).call(this, t) : null
      ] })
    ] });
  }
}
Re = new WeakMap(), ms = new WeakMap(), gs = new WeakMap(), ys = new WeakMap(), bs = new WeakMap(), ws = new WeakMap(), zn = new WeakSet(), tl = function(t) {
  let { menu: s } = t;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(ye, { ...s })) : null;
}, jn = new WeakSet(), el = function(t) {
  let { actions: s } = t;
  const { todayText: i, clearText: o } = t;
  return s || (s = [{ text: i, "data-set-date": ct(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(Jt, { btnProps: { className: "ghost text-primary" }, ...s }),
    o ? /* @__PURE__ */ f(Q, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var vs, _s, Cs, $s;
let $h = ($s = class extends Lt {
  constructor(t) {
    super(t);
    C(this, vs, void 0);
    C(this, _s, void 0);
    C(this, Cs, void 0);
    $(this, vs, () => {
      this.toggle(!0);
    }), $(this, _s, (i) => {
      this.setDate(i.target.value);
    }), $(this, Cs, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = K(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : ct(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: s } = this.state;
    s && (this.state.value = ct(s === "today" ? /* @__PURE__ */ new Date() : s, t.format));
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `date-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: b(this, Cs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-calendar" }) : p = /* @__PURE__ */ f(tt, { icon: o })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: b(this, vs), onChange: b(this, _s) }, "input"),
      p ? /* @__PURE__ */ f("label", { for: c, class: "input-control-suffix", children: p }, "icon") : null
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
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = Z.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: g } = t;
    return /* @__PURE__ */ f(
      Ch,
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
}, vs = new WeakMap(), _s = new WeakMap(), Cs = new WeakMap(), $s.defaultProps = {
  ...Lt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, $s);
const Vn = class Vn extends z {
};
Vn.NAME = "TimePicker", Vn.Component = wh;
let Ir = Vn;
const Un = class Un extends z {
};
Un.NAME = "DatePicker", Un.Component = $h;
let Ar = Un;
const Bi = "show", Dr = "in", xh = '[data-dismiss="modal"]', ht = class ht extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (e) => {
      const t = e.target, s = t.closest(".modal");
      !s || s !== this.modalElement || (t.closest(xh) || this.options.backdrop === !0 && t === s) && (e.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(Bi);
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
      return d(t).css("z-index", `${ht.zIndex++}`), !1;
    this.setOptions(e);
    const { animation: s, backdrop: i, className: o, style: r } = this.options;
    return d(t).setClass({
      "modal-trans": s,
      "modal-no-backdrop": !i
    }, Bi, o).css({
      zIndex: `${ht.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      d(t).addClass(Dr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (d(this.modalElement).removeClass(Dr), this.emit("hide"), this._setTimer(() => {
      d(this.modalElement).removeClass(Bi), this.emit("hidden");
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
    (t = ht.query(e)) == null || t.hide();
  }
  static show(e) {
    var t;
    (t = ht.query(e)) == null || t.show();
  }
};
ht.NAME = "Modal", ht.MULTI_INSTANCE = !0, ht.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
}, ht.zIndex = 1500;
let Pt = ht;
d(window).on(`resize.${Pt.NAMESPACE}`, () => {
  Pt.getAll().forEach((n) => {
    const e = n;
    e.shown && e.options.responsive && e.layout();
  });
});
d(document).on(`to-hide.${Pt.NAMESPACE}`, (n, e) => {
  Pt.hide(e == null ? void 0 : e.target);
});
const Vo = class Vo extends B {
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
    return X(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ f("div", { className: N("modal-header", t), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
  }
  renderActions() {
    const {
      actions: e,
      closeBtn: t
    } = this.props;
    return !t && !e ? null : X(e) ? e : /* @__PURE__ */ f("div", { className: "modal-actions", children: [
      e ? /* @__PURE__ */ f(Jt, { ...e }) : null,
      t ? /* @__PURE__ */ f("button", { type: "button", class: "btn square ghost", "data-dismiss": "modal", children: /* @__PURE__ */ f("span", { class: "close" }) }) : null
    ] });
  }
  renderBody() {
    const {
      body: e,
      bodyClass: t
    } = this.props;
    return e ? X(e) ? e : /* @__PURE__ */ f("div", { className: N("modal-body", t), children: e }) : null;
  }
  renderFooter() {
    const {
      footer: e,
      footerClass: t,
      footerActions: s
    } = this.props;
    return X(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ f("div", { className: N("modal-footer", t), children: s ? /* @__PURE__ */ f(Jt, { ...s }) : null });
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
Vo.defaultProps = { closeBtn: !0 };
let io = Vo;
const Uo = class Uo extends B {
  constructor() {
    super(...arguments), this._ref = U(), this.state = {}, this._watchIframeHeight = () => {
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
Uo.defaultProps = {
  watchHeight: !0
};
let oo = Uo;
function kh(n, e) {
  const { custom: t, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function Eh(n, e) {
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
    body: t === "html" ? /* @__PURE__ */ f(qs, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function Sh(n, e) {
  const { url: t, custom: s, title: i, size: o } = e, r = typeof o == "object" && typeof o.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(oo, { url: t, watchHeight: !r })
  };
}
const Th = {
  custom: kh,
  ajax: Eh,
  iframe: Sh
}, Wi = "loading";
var mt, Ie, gt, xs, ao, ks, lo;
const Bt = class Bt extends Pt {
  constructor() {
    super(...arguments);
    C(this, xs);
    C(this, ks);
    C(this, mt, void 0);
    C(this, Ie, void 0);
    C(this, gt, void 0);
  }
  get id() {
    return b(this, Ie);
  }
  get loading() {
    var t;
    return (t = b(this, mt)) == null ? void 0 : t.classList.contains(Wi);
  }
  get shown() {
    var t;
    return !!((t = b(this, mt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = b(this, mt);
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
      $(this, mt, t);
    }
    return t;
  }
  get $emitter() {
    const t = b(this, mt);
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
    const t = b(this, mt);
    t && (d(t).removeData(this.constructor.KEY).remove(), $(this, mt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    b(this, gt) && clearTimeout(b(this, gt));
    const { modalElement: t, options: s } = this, i = d(t), { type: o, loadTimeout: r, loadingText: a = null } = s, l = Th[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(Wi), r && $(this, gt, window.setTimeout(() => {
      $(this, gt, 0), L(this, ks, lo).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, s);
    return h === !1 ? await L(this, ks, lo).call(this, this.options.failedTip) : h && typeof h == "object" && await L(this, xs, ao).call(this, h), b(this, gt) && (clearTimeout(b(this, gt)), $(this, gt, 0)), this.layout(), await an(100), i.removeClass(Wi), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = Bt.ensure(i, r), l = `${Bt.NAMESPACE}.open${d.guid++}`;
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
    (Array.isArray(a) ? a : [a]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = Z.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && g.push(w);
    }, []);
    let y;
    const v = g.length ? {
      gap: 4,
      items: g,
      onClickItem: ({ item: w, event: _ }) => {
        const x = Bt.query(_.target, u);
        y = w.key, (l == null ? void 0 : l(w, x)) !== !1 && x && x.hide();
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
    }), y;
  }
  static async confirm(t) {
    typeof t == "string" && (t = { message: t });
    const { onClickAction: s, onResult: i, ...o } = t;
    return await Bt.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), s == null || s(a, l);
      },
      ...o
    }) === "confirm";
  }
};
mt = new WeakMap(), Ie = new WeakMap(), gt = new WeakMap(), xs = new WeakSet(), ao = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return d(this.modalElement).html(t[0]), this.layout(), this._observeResize(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), s();
      },
      ...o
    }, dn(
      /* @__PURE__ */ f(io, { ...t }),
      this.modalElement
    );
  });
}, ks = new WeakSet(), lo = function(t) {
  if (t)
    return L(this, xs, ao).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: t })
    });
}, Bt.DEFAULT = {
  ...Pt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let ro = Bt;
const Nh = '[data-toggle="modal"]', qo = class qo extends at {
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
      t = ro.ensure(this.container, e);
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
qo.NAME = "ModalTrigger";
let wn = qo;
d(document).on(`click${wn.NAMESPACE}`, Nh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.is("[disabled],.disabled")) {
    const t = wn.ensure(e);
    t && (t.show(), n.preventDefault());
  }
});
var Es;
let Mh = (Es = class extends Si {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = N(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, Es.NAME = "nav", Es);
const qn = class qn extends z {
};
qn.NAME = "Nav", qn.Component = Mh;
let Lr = qn;
function ns(n, e) {
  const t = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = n.page - 1 : e === "next" ? e = n.page + 1 : e === "current" ? e = n.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : n.page, {
    ...n,
    pageTotal: t,
    page: e
  };
}
function Rh({
  key: n,
  type: e,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = ns(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ f(Q, { type: t, ...a });
}
function Ih({
  key: n,
  type: e,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = ns(i, t);
  return s = typeof s == "function" ? s(a) : Y(s, a), /* @__PURE__ */ f(Pa, { ...r, children: [
    o,
    s
  ] });
}
function Ah({
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
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(Q, { type: t, ...l })), u = (p, m) => {
    const g = [];
    for (let y = p; y <= m; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = ns(i, y);
      r && (l.url = typeof r == "function" ? r(v) : Y(r, v)), g.push(/* @__PURE__ */ f(Q, { type: t, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? c = [...c, ...u(2, i.pageTotal)] : i.page < s - 2 ? c = [...c, ...u(2, s - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? c = [...c, h(), ...u(i.pageTotal - s + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function Dh({
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
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : Y(a, e), i.menu = { ...i.menu, className: N((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(Ua, { type: "dropdown", dropdown: i, ...r });
}
function Lh({
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
    const v = ns(i, c);
    a && !a({ info: v, event: y }) || (y.target.href = u.url = typeof l == "function" ? l(v) : Y(l, v));
  }, g = ns(i, e || 0);
  return u.url = typeof l == "function" ? l(g) : Y(l, g), /* @__PURE__ */ f("div", { className: N("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Q, { type: s, ...u, onClick: m })
  ] });
}
var me;
let Ph = (me = class extends Jt {
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
  link: Rh,
  info: Ih,
  nav: Ah,
  "size-menu": Dh,
  goto: Lh
}, me);
const Yn = class Yn extends z {
};
Yn.NAME = "Pager", Yn.Component = Ph;
let Pr = Yn;
const Kn = class Kn extends z {
};
Kn.NAME = "Pick", Kn.Component = Lt;
let Hr = Kn;
var Ae, Ss, Ts, Gn;
class sl extends B {
  constructor(t) {
    super(t);
    C(this, Ae, U());
    C(this, Ss, U());
    C(this, Ts, (t) => {
      var i, o;
      const s = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, s), this.setState({ search: s }), t.stopPropagation();
    });
    C(this, Gn, (t) => {
      var s, i;
      t.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = b(this, Ae).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: s } = b(this, Ss), { current: i } = b(this, Ae);
      if (s && i) {
        const o = d(i).parent();
        o.width(Math.ceil(Math.min(s.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, s) {
    const { placeholder: i, inline: o } = t, { search: r } = s, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: b(this, Ss), children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: b(this, Gn), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: b(this, Ts),
          onInput: b(this, Ts),
          ref: b(this, Ae)
        }
      ),
      l
    ] });
  }
}
Ae = new WeakMap(), Ss = new WeakMap(), Ts = new WeakMap(), Gn = new WeakMap();
var De, Ns, Ms, Rs;
class Hh extends Bo {
  constructor() {
    super(...arguments);
    C(this, De, void 0);
    C(this, Ns, void 0);
    C(this, Ms, void 0);
    C(this, Rs, void 0);
    $(this, De, U()), $(this, Ns, (t) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      s && i.length && typeof o == "string" && s(o), t.stopPropagation();
    }), $(this, Ms, (t) => {
      this.props.changeState({ search: t });
    }), $(this, Rs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(ee, { content: t.text }) }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: b(this, Ns), "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = b(this, De).current) == null || s.focus();
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
      sl,
      {
        inline: !0,
        ref: b(this, De),
        defaultSearch: s,
        onSearch: b(this, Ms),
        onClear: b(this, Rs),
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
    o && t.state.value !== i.value && d(`#${s}`).val(r.length ? r : [a]).trigger("change", so);
  }
}
De = new WeakMap(), Ns = new WeakMap(), Ms = new WeakMap(), Rs = new WeakMap();
var Is, Xn, Zn, Jn, Qn, nl;
class Oh extends Bo {
  constructor() {
    super(...arguments);
    C(this, Qn);
    C(this, Is, U());
    C(this, Xn, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    C(this, Zn, (t) => {
      this.props.changeState({ search: t });
    });
    C(this, Jn, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = b(this, Is).current) == null || s.focus();
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
      sl,
      {
        ref: b(this, Is),
        defaultSearch: s,
        onSearch: b(this, Zn),
        onClear: b(this, Jn),
        placeholder: L(this, Qn, nl).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: s, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(t) : u ? p = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: /* @__PURE__ */ f(ee, { content: u.text }) }, "main") : p = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: b(this, Xn), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      s,
      m,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
Is = new WeakMap(), Xn = new WeakMap(), Zn = new WeakMap(), Jn = new WeakMap(), Qn = new WeakSet(), nl = function() {
  const { searchHint: t, state: { value: s, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === s);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const Bh = (n, e, t = "is-match") => n.reduce((s, i) => [...s].reduce((o, r) => {
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
var ti, ei, il, si, ol, ni;
class Wh extends Ja {
  constructor() {
    super(...arguments);
    C(this, ei);
    C(this, si);
    C(this, ti, U());
    C(this, ni, ({ item: t }) => {
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
      const s = L(this, ei, il).call(this);
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
        ref: b(this, ti),
        className: "picker-menu-list",
        items: L(this, si, ol).call(this),
        onClickItem: b(this, ni),
        ...s
      }
    );
  }
}
ti = new WeakMap(), ei = new WeakSet(), il = function() {
  const t = this.element;
  if (t)
    return d(t).find(".menu-item>a.hover");
}, si = new WeakSet(), ol = function() {
  const { selections: t, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = d.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = s.reduce((u, c) => {
    const {
      value: p = "",
      keys: m,
      text: g,
      className: y,
      content: v,
      ...w
    } = c;
    return p === i && (a = !0), g && u.push({
      key: p,
      active: r.has(p),
      text: v ? null : typeof g == "string" ? Bh(l, [g]) : /* @__PURE__ */ f(ee, { content: g }),
      className: N(y, { hover: p === i }),
      "data-value": p,
      content: v,
      ...w
    }), u;
  }, []);
  return !a && h.length && (h[0].className = N(h[0].className, "hover")), h;
}, ni = new WeakMap();
var Le, yt, St, Pe, Ve;
let Fh = (Ve = class extends Lt {
  constructor(t) {
    super(t);
    C(this, Le, void 0);
    C(this, yt, void 0);
    C(this, St, void 0);
    C(this, Pe, void 0);
    $(this, St, 0), this.isEmptyValue = (r) => b(this, Pe).has(r), this.toggleValue = (r, a) => {
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
    let t = b(this, yt);
    t && t.abort(), t = new AbortController(), $(this, yt, t);
    const { items: s, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof s == "function") {
      if (await an(i || 500), b(this, yt) !== t || (r = await s(o, { signal: t.signal }), b(this, yt) !== t))
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
    return $(this, yt, void 0), r;
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
    b(this, St) && clearTimeout(b(this, St)), $(this, St, window.setTimeout(() => {
      $(this, St, 0), this.update();
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
    (t = b(this, yt)) == null || t.abort(), $(this, yt, void 0), $(this, Le, void 0), clearTimeout(b(this, St)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? Hh : Oh);
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
}, Le = new WeakMap(), yt = new WeakMap(), St = new WeakMap(), Pe = new WeakMap(), Ve.defaultProps = {
  ...Lt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, Ve.Pop = Wh, Ve);
const ii = class ii extends z {
};
ii.NAME = "Picker", ii.Component = Fh;
let Or = ii;
const oi = class oi extends at {
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
    return i && s.middleware.push(Ti()), o && s.middleware.push(o === !0 ? ts() : ts(o)), r && s.middleware.push(Zi({ element: this.$arrow[0] })), a && s.middleware.push(Ni(a)), s;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = Oo(e, t, () => {
      Ii(e, t, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Zi || !r.arrow)
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
oi.NAME = "Popovers", oi.DEFAULT = {
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
let Br = oi;
var As, Ds, jt, ri, Ls, Ps, Hs, co, Os;
let zh = (Os = class extends B {
  constructor(t) {
    super(t);
    C(this, Hs);
    C(this, As, void 0);
    C(this, Ds, U());
    C(this, jt, 0);
    C(this, ri, (t) => {
      const s = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), s.trim() !== "" && (i == null || i("", t));
      });
    });
    C(this, Ls, (t) => {
      const s = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || s === i || (L(this, Hs, co).call(this), $(this, jt, window.setTimeout(() => {
          o(i, t), $(this, jt, 0);
        }, this.props.delay || 0)));
      });
    });
    C(this, Ps, (t) => {
      const s = t.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, $(this, As, t.id || `search-box-${d.guid++}`);
  }
  get id() {
    return b(this, As);
  }
  get input() {
    return b(this, Ds).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    L(this, Hs, co).call(this);
  }
  render(t, s) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: p, searchIcon: m, clearIcon: g } = t, { focus: y, value: v } = s, { id: w } = this, _ = typeof v != "string" || !v.trim().length;
    let x, k, E;
    return m && (E = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(tt, { icon: m })), !p && m && (x = /* @__PURE__ */ f("label", { for: w, class: "input-control-prefix", children: E }, "prefix")), g && !_ ? k = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: b(this, ri),
        children: g === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(tt, { icon: g })
      }
    ) : p && m && (k = E), k && (k = /* @__PURE__ */ f("label", { for: w, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ f("div", { class: N("search-box input-control", r, { focus: y, empty: _, "has-prefix-icon": x, "has-suffix-icon": k }), style: a, children: [
      x,
      /* @__PURE__ */ f(
        "input",
        {
          ref: b(this, Ds),
          id: w,
          type: "text",
          class: N("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: b(this, Ls),
          onChange: b(this, Ls),
          onFocus: b(this, Ps),
          onBlur: b(this, Ps)
        }
      ),
      k
    ] });
  }
}, As = new WeakMap(), Ds = new WeakMap(), jt = new WeakMap(), ri = new WeakMap(), Ls = new WeakMap(), Ps = new WeakMap(), Hs = new WeakSet(), co = function() {
  b(this, jt) && clearTimeout(b(this, jt)), $(this, jt, 0);
}, Os.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, Os);
const ai = class ai extends z {
};
ai.NAME = "SearchBox", ai.Component = zh;
let Wr = ai;
const li = class li extends z {
};
li.NAME = "Toolbar", li.Component = Jt;
let Fr = li;
const jh = '[data-toggle="tooltip"]', ci = class ci extends Ct {
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
ci.NAME = "Tooltip", ci.DEFAULT = {
  ...Ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
let Nt = ci;
d(document).on(`click${Nt.NAMESPACE} mouseenter${Nt.NAMESPACE}`, jh, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(Nt.KEY)) {
    const t = e.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    Nt.ensure(e, { show: Nt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
function Vh({
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
  show: w,
  level: _ = 0,
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
      style: { paddingLeft: `calc(${_} * var(--tree-indent, 20px))` },
      "data-level": _,
      ...k,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${x ? " state" : ""}`, children: x ? /* @__PURE__ */ f("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(tt, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: o, ...r, children: c }) : /* @__PURE__ */ f("span", { class: "text", style: o, ...r, children: c }),
        /* @__PURE__ */ f(ee, { content: i }),
        s,
        E ? /* @__PURE__ */ f(Jt, { ...E }) : null,
        /* @__PURE__ */ f(tt, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
var Ue;
let Uh = (Ue = class extends Do {
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
  item: Vh
}, Ue.NAME = "tree", Ue);
const hi = class hi extends z {
};
hi.NAME = "Tree", hi.Component = Uh;
let zr = hi;
const ui = class ui extends at {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? _c(s) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
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
      return new Nt(o, { title: t }), o;
    }
    return d("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(t);
  }
  fileDeleteBtn() {
    const { useIconBtn: e, deleteText: t, deleteIcon: s, deleteClass: i } = this.options;
    if (e) {
      const o = d(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Nt(o, { title: t })), o;
    }
    return d("<button />").html(t).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(e) {
    return d(`<span class="file-name">${e}</span>`);
  }
  fileSize(e) {
    return d(`<span class="file-size text-gray">${vc(e)}</span>`);
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
ui.NAME = "Upload", ui.DEFAULT = {
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
let ho = ui;
const di = class di extends ho {
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
di.NAME = "UploadImgs", di.DEFAULT = {
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
let jr = di;
const fi = class fi extends $t {
  _getLayoutOptions() {
    const e = super._getLayoutOptions();
    return this.options.element || (e[0] = {
      getBoundingClientRect: this._getClickBounding
    }), e;
  }
};
fi.NAME = "ContextMenu", fi.DEFAULT = {
  ...$t.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let uo = fi;
let qh = class extends B {
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
          d.isPlainObject(l) && l.html ? /* @__PURE__ */ f(qs, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const Vr = ([n, e, t, s], [i, o, r, a]) => !(n + t <= i || i + r <= n || e + s <= o || o + a <= e), Js = "Dashboard:Block.cache:";
var Bs;
let Yh = (Bs = class extends B {
  constructor(e) {
    super(e), this._ref = U(), this._loadTimer = 0, this.map = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
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
      uo.show({
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
      const r = Y(i, s);
      try {
        const a = await fetch(Y(r, s), {
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
        typeof s == "string" ? Ze.set(`${Js}${s}:${e}`, t) : Ze.session.set(`${Js}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const s = typeof t == "string" ? Ze.get(`${Js}${t}:${e}`) : Ze.session.get(`${Js}${e}`);
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
      if (s !== t && Vr(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [s, i] of this.map.entries())
      s !== e && Vr(i, t) && (i[1] = t[1] + t[3], this._insertBlock(s, i));
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
            qh,
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
}, Bs.defaultProps = {
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
}, Bs);
const pi = class pi extends z {
};
pi.NAME = "Dashboard", pi.Component = Yh;
let Ur = pi;
var Vt, Ut;
class qr extends B {
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
const vn = /* @__PURE__ */ new Map(), _n = [];
function rl(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && vn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  vn.set(t, n), e != null && e.buildIn && !_n.includes(t) && _n.push(t);
}
function Ot(n, e) {
  rl(n, e);
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
function al(n) {
  return vn.delete(n);
}
function Kh(n) {
  if (typeof n == "string") {
    const e = vn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function ll(n, e, t) {
  return e.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = Kh(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && ll(n, i.plugins, t), n.push(i), t.add(i.name)));
  }), n;
}
function Gh(n = [], e = !0) {
  return e && _n.length && n.unshift(..._n), n != null && n.length ? ll([], n, /* @__PURE__ */ new Set()) : [];
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
function Xh(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function Kr(n, e) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof e == "number" && (typeof n != "number" || isNaN(n)) && (n = e), n;
}
function Fi(n, e = !1) {
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
function Zh(n, e, t, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = (_) => (typeof _ == "function" && (_ = _.call(n)), _ = Kr(_, 0), _ < 1 && (_ = Math.round(_ * s)), _), u = {
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
  const v = [], w = {};
  if (t.forEach((_) => {
    const { colTypes: x, onAddCol: k } = _;
    x && Object.entries(x).forEach(([E, M]) => {
      w[E] || (w[E] = []), w[E].push(M);
    }), k && v.push(k);
  }), e.cols.forEach((_) => {
    if (_.hidden)
      return;
    const { type: x = "", name: k } = _, E = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ..._,
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
    }, I = w[x];
    I && I.forEach((H) => {
      const F = typeof H == "function" ? H.call(n, E) : H;
      F && Object.assign(E, F, _);
    });
    const { fixed: A, flex: D, minWidth: O = o, maxWidth: P = r } = E, R = Kr(E.width || i, i);
    M.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, M.width = Xh(R < 1 ? Math.round(R * s) : R, O, P), v.forEach((H) => H.call(n, M)), m.push(M), g[M.name] = M;
    const T = A ? A === "left" ? c : p : u;
    T.list.push(M), T.totalWidth += M.width, T.width = T.totalWidth, M.flex && T.flexList.push(M), typeof E.order == "number" && (y = !0);
  }), y) {
    const _ = (x, k) => (x.setting.order ?? 0) - (k.setting.order ?? 0);
    m.sort(_), c.list.sort(_), u.list.sort(_), p.list.sort(_);
  }
  return Fi(c, !0), Fi(p, !0), u.widthSetting = s - c.width - p.width, Fi(u), {
    list: m,
    map: g,
    left: c,
    center: u,
    right: p
  };
}
function Jh({ col: n, className: e, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...p }) {
  var R;
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
  }, w = ["dtable-cell", l, e, n.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], _ = ["dtable-cell-content", n.setting.cellClass], x = (R = s.data) == null ? void 0 : R[n.name], k = [a ?? x ?? ""], E = i ? i(k, { row: s, col: n, value: x }, G) : k, M = [], I = [], A = {}, D = {};
  let O = "div";
  E == null || E.forEach((T) => {
    if (typeof T == "object" && T && !X(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const H = T.outer ? M : I;
      T.html ? H.push(/* @__PURE__ */ f("div", { className: N("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? m : v, T.style), T.className && (T.outer ? w : _).push(T.className), T.children && H.push(T.children), T.attrs && Object.assign(T.outer ? A : D, T.attrs)), T.tagName && !T.outer && (O = T.tagName);
    } else
      I.push(T);
  });
  const P = O;
  return /* @__PURE__ */ f(
    "div",
    {
      className: N(w),
      style: m,
      "data-col": n.name,
      "data-row": s.id,
      "data-type": n.type || null,
      ...p,
      ...A,
      children: [
        I.length > 0 && /* @__PURE__ */ f(P, { className: N(_), style: v, ...D, children: I }),
        M
      ]
    }
  );
}
function zi({
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
  CellComponent: u = Jh,
  onRenderCell: c
}) {
  var y;
  const p = Array.isArray(n) ? n : [n], m = ((y = p[0]) == null ? void 0 : y.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: N("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + m }, children: p.reduce((v, w, _) => {
        const x = e.length;
        return e.forEach((k, E) => {
          v.push(
            /* @__PURE__ */ f(
              u,
              {
                className: N(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  E ? "" : "is-first-in-row",
                  E === x - 1 ? "is-last-in-row" : "",
                  _ ? "" : "is-first-row",
                  _ === g - 1 ? "is-last-row" : ""
                ),
                col: k,
                row: w,
                top: w.top - m,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${k.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function Gr({
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
    zi,
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
    zi,
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
    zi,
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
var qt, He, Tt, bt, Yt, J, wt, rt, le, Ws, Oe, ce, vt, he, ue, mi, cl, gi, hl, yi, ul, bi, dl, Fs, fo, Be, We, zs, js, Vs, Us, Fe, en, wi, fl, vi, pl, _i, ml, qe;
let Qh = (qe = class extends B {
  constructor(t) {
    super(t);
    C(this, mi);
    C(this, gi);
    C(this, yi);
    C(this, bi);
    C(this, Fs);
    C(this, Fe);
    C(this, wi);
    C(this, vi);
    C(this, _i);
    C(this, qt, void 0);
    C(this, He, void 0);
    C(this, Tt, void 0);
    C(this, bt, void 0);
    C(this, Yt, void 0);
    C(this, J, void 0);
    C(this, wt, void 0);
    C(this, rt, void 0);
    C(this, le, void 0);
    C(this, Ws, void 0);
    C(this, Oe, void 0);
    C(this, ce, void 0);
    C(this, vt, void 0);
    C(this, he, void 0);
    C(this, ue, void 0);
    C(this, Be, void 0);
    C(this, We, void 0);
    C(this, zs, void 0);
    C(this, js, void 0);
    C(this, Vs, void 0);
    C(this, Us, void 0);
    this.ref = U(), $(this, qt, 0), $(this, Tt, !1), $(this, J, []), $(this, rt, /* @__PURE__ */ new Map()), $(this, le, {}), $(this, Oe, []), $(this, ce, { in: !1 }), this.updateLayout = () => {
      b(this, qt) && cancelAnimationFrame(b(this, qt)), $(this, qt, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), $(this, qt, 0);
      }));
    }, $(this, vt, (s, i) => {
      i = i || s.type;
      const o = b(this, rt).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, s) === !1) {
            s.stopPropagation(), s.preventDefault();
            break;
          }
      }
    }), $(this, he, (s) => {
      b(this, vt).call(this, s, `window_${s.type}`);
    }), $(this, ue, (s) => {
      b(this, vt).call(this, s, `document_${s.type}`);
    }), $(this, Be, (s, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), s[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return b(this, J).forEach((h) => {
        h[l] && (s = h[l].call(this, s, i, o));
      }), this.options[l] && (s = this.options[l].call(this, s, i, o)), a.setting[l] && (s = a.setting[l].call(this, s, i, o)), s;
    }), $(this, We, (s, i) => {
      i === "horz" ? this.scroll({ scrollLeft: s }) : this.scroll({ scrollTop: s });
    }), $(this, zs, (s) => {
      var l, h, u;
      const i = this.getPointerInfo(s);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, s, { colName: r, element: a }), b(this, J).forEach((c) => {
          var p;
          (p = c.onHeaderCellClick) == null || p.call(this, s, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((p) => p.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const p of b(this, J))
            if (((u = p.onCellClick) == null ? void 0 : u.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), $(this, js, (s) => {
      const i = s.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), $(this, Vs, (s) => {
      const i = d(s.target).closest(".dtable-cell");
      if (!i.length)
        return L(this, Fe, en).call(this, !1);
      L(this, Fe, en).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), $(this, Us, () => {
      L(this, Fe, en).call(this, !1);
    }), $(this, He, t.id ?? `dtable-${Xa(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, $(this, Yt, Object.freeze(Gh(t.plugins))), b(this, Yt).forEach((s) => {
      var a;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(b(this, le), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = b(this, wt)) == null ? void 0 : t.options) || b(this, bt) || Yr();
  }
  get plugins() {
    return b(this, J);
  }
  get layout() {
    return b(this, wt);
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
    $(this, bt, void 0);
  }
  componentDidMount() {
    b(this, Tt) ? this.forceUpdate() : L(this, Fs, fo).call(this), b(this, J).forEach((s) => {
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", b(this, zs)), this.on("keydown", b(this, js));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", b(this, Vs)), this.on("mouseleave", b(this, Us))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: s } = this;
        if (s) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(s), $(this, Ws, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    b(this, J).forEach((s) => {
      var i;
      (i = s.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    b(this, Tt) ? L(this, Fs, fo).call(this) : b(this, J).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = b(this, Ws)) == null || s.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of b(this, rt).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), b(this, he)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), b(this, ue)) : t.removeEventListener(i, b(this, vt));
    b(this, J).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), b(this, Yt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), $(this, le, {}), b(this, rt).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = b(this, rt).get(t);
    o ? o.push(s) : (b(this, rt).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), b(this, he)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), b(this, ue)) : (r = this.element) == null || r.addEventListener(t, b(this, vt)));
  }
  off(t, s, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = b(this, rt).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (b(this, rt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), b(this, he)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), b(this, ue)) : (a = this.element) == null || a.removeEventListener(t, b(this, vt)));
  }
  emitCustomEvent(t, s) {
    b(this, vt).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
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
    if (!b(this, bt))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      $(this, wt, void 0);
    else if (i === "options") {
      if ($(this, bt, void 0), !b(this, wt))
        return;
      $(this, wt, void 0);
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
    return Z(b(this, Oe), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = L(this, _i, ml).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", s, {
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
      L(this, mi, cl).call(this, t),
      L(this, gi, hl).call(this, t),
      L(this, yi, ul).call(this, t),
      L(this, bi, dl).call(this, t)
    ), b(this, J).forEach((m) => {
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
}, qt = new WeakMap(), He = new WeakMap(), Tt = new WeakMap(), bt = new WeakMap(), Yt = new WeakMap(), J = new WeakMap(), wt = new WeakMap(), rt = new WeakMap(), le = new WeakMap(), Ws = new WeakMap(), Oe = new WeakMap(), ce = new WeakMap(), vt = new WeakMap(), he = new WeakMap(), ue = new WeakMap(), mi = new WeakSet(), cl = function(t) {
  const { header: s, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ f(
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
        onRenderCell: b(this, Be)
      },
      "header"
    );
  const a = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    Yi,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, gi = new WeakSet(), hl = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ f(
    Gr,
    {
      className: "dtable-body",
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: b(this, Be)
    },
    "body"
  );
}, yi = new WeakSet(), ul = function(t) {
  let { footer: s } = t;
  if (typeof s == "function" && (s = s.call(this, t)), !s)
    return null;
  const i = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    Yi,
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
}, bi = new WeakSet(), dl = function(t) {
  const s = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: p } = t, { scrollbarSize: m = 12, horzScrollbarPos: g } = this.options;
  return a > r && s.push(
    /* @__PURE__ */ f(
      qr,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: b(this, We),
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
      qr,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: b(this, We),
        right: 0,
        size: m,
        top: p,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, Fs = new WeakSet(), fo = function() {
  var t;
  $(this, Tt, !1), (t = this.options.afterRender) == null || t.call(this), b(this, J).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Be = new WeakMap(), We = new WeakMap(), zs = new WeakMap(), js = new WeakMap(), Vs = new WeakMap(), Us = new WeakMap(), Fe = new WeakSet(), en = function(t) {
  const { element: s, options: i } = this;
  if (!s)
    return;
  const o = d(s), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = b(this, ce);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), $(this, ce, r);
}, wi = new WeakSet(), fl = function() {
  if (b(this, bt))
    return !1;
  const s = { ...Yr(), ...b(this, Yt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return $(this, bt, s), $(this, J, b(this, Yt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = s;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, s) : a)), (!r || r(l)) && (l !== s && Object.assign(s, l), i.push(o)), i;
  }, [])), $(this, Oe, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, vi = new WeakSet(), pl = function() {
  var O, P;
  const { plugins: t } = this;
  let s = b(this, bt);
  const i = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((R) => {
    var H;
    const T = (H = R.beforeLayout) == null ? void 0 : H.call(this, s);
    T && (s = { ...s, ...T }), Object.assign(i, R.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: R } = this;
    if (R)
      r = R.clientWidth;
    else {
      $(this, Tt, !0);
      return;
    }
  }
  const a = Zh(this, s, t, r), { data: l, rowKey: h = "id", rowHeight: u } = s, c = [], p = (R, T, H) => {
    var j, ot;
    const F = { data: H ?? { [h]: R }, id: R, index: c.length, top: 0 };
    if (H || (F.lazy = !0), c.push(F), ((j = s.onAddRow) == null ? void 0 : j.call(this, F, T)) !== !1) {
      for (const Ke of t)
        if (((ot = Ke.onAddRow) == null ? void 0 : ot.call(this, F, T)) === !1)
          return;
    }
  };
  if (typeof l == "number")
    for (let R = 0; R < l; R++)
      p(`${R}`, R);
  else
    Array.isArray(l) && l.forEach((R, T) => {
      typeof R == "object" ? p(`${R[h] ?? ""}`, T, R) : p(`${R ?? ""}`, T);
    });
  let m = c;
  const g = {};
  if (s.onAddRows) {
    const R = s.onAddRows.call(this, m);
    R && (m = R);
  }
  for (const R of t) {
    const T = (O = R.onAddRows) == null ? void 0 : O.call(this, m);
    T && (m = T);
  }
  m.forEach((R, T) => {
    g[R.id] = R, R.index = T, R.top = R.index * u;
  });
  const { header: y, footer: v } = s, w = y ? s.headerHeight || u : 0, _ = v ? s.footerHeight || u : 0;
  let x = s.height, k = 0;
  const E = m.length * u, M = w + _ + E;
  if (typeof x == "function" && (x = x.call(this, M)), x === "auto")
    k = M;
  else if (typeof x == "object")
    k = Math.min(x.max, Math.max(x.min, M));
  else if (x === "100%") {
    const { parent: R } = this;
    if (R)
      k = R.clientHeight;
    else {
      k = 0, $(this, Tt, !0);
      return;
    }
  } else
    k = x;
  const I = k - w - _, A = {
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
    headerHeight: w,
    footerHeight: _,
    cols: a
  }, D = (P = s.onLayout) == null ? void 0 : P.call(this, A);
  D && Object.assign(A, D), t.forEach((R) => {
    if (R.onLayout) {
      const T = R.onLayout.call(this, A);
      T && Object.assign(A, T);
    }
  }), $(this, wt, A);
}, _i = new WeakSet(), ml = function() {
  (L(this, wi, fl).call(this) || !b(this, wt)) && L(this, vi, pl).call(this);
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
    const w = l[v];
    w.lazy && y && (w.data = y([w.id])[0], w.lazy = !1), g.push(w);
  }
  return t.visibleRows = g, t.scrollTop = u, t.scrollLeft = i, t;
}, qe.addPlugin = rl, qe.removePlugin = al, qe);
const tu = {
  html: { component: qs }
}, eu = {
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
        component: qs,
        props: { html: Y(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(tu[l], o == null ? void 0 : o[l]);
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
}, su = Ot(eu);
function gl(n, e, t, s) {
  if (typeof n == "function" && (n = n(e)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return t;
  const { url: i, ...o } = n, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: Y(i, e.row.data), ...s, ...o, ...a, children: t });
}
function Wo(n, e, t) {
  var s;
  if (n != null)
    return t = t ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof n == "function" ? n(t, e) : Y(n, t);
}
function yl(n, e, t, s) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), n === !1 ? t : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(t, e)), ct(t, n, s ?? t))) : s ?? t;
}
function bl(n, e) {
  const { link: t } = e.col.setting, s = gl(t, e, n[0]);
  return s && (n[0] = s), n;
}
function wl(n, e) {
  const { format: t } = e.col.setting;
  return t && (n[0] = Wo(t, e, n[0])), n;
}
function vl(n, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? n[0] = t(n[0], e) : typeof t == "object" && t && (n[0] = t[n[0]] ?? n[0]), n;
}
function _l(n, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = t, invalidDate: i } = e.col.setting;
  return n[0] = yl(s, e, n[0], i), n;
}
function po(n, e, t = !1) {
  const { html: s = t } = e.col.setting;
  if (s === !1)
    return n;
  const i = n[0], o = s === !0 ? i : Wo(s, e, i);
  return n[0] = {
    html: o
  }, n;
}
const nu = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, e) {
        return po(n, e, !0);
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
    if (t && (n = _l(n, e, t)), n = vl(n, e), n = wl(n, e), s ? n = po(n, e) : n = bl(n, e), i) {
      let o = n[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = Y(i, e.row.data)), n.push({ attrs: { title: o } });
    }
    return n;
  }
}, iu = Ot(nu, { buildIn: !0 });
function ou(n, e, t = !1) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!s[h] === u || (u ? s[h] = !0 : delete s[h], i[h] = u);
  };
  if (n === void 0 ? (e === void 0 && (e = !Cl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function ru(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Cl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === n;
}
function au() {
  return Object.keys(this.state.checkedRows);
}
function lu(n) {
  const { checkable: e } = this.options;
  n === void 0 && (n = !e), e !== n && this.setState({ forceCheckable: n });
}
function Xr(n, e, t = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${n ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const Zr = 'input[type="checkbox"],.dtable-checkbox', cu = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: Xr
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
    toggleCheckRows: ou,
    isRowChecked: ru,
    isAllRowChecked: Cl,
    getChecks: au,
    toggleCheckable: lu
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: Xr(n) })
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
    const t = e.closest(Zr);
    t && (this.toggleCheckRows(t.checked), n.stopPropagation());
  },
  onCellClick(n, { rowID: e }) {
    const t = d(n.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(Zr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, hu = Ot(cu);
var $l = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))($l || {});
function Cn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, s = e.children && t && t[n];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = Cn.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? Cn.call(this, e.parent).level + 1 : 0, e;
}
function uu(n) {
  return n !== void 0 ? Cn.call(this, n) : this.data.nestedMap;
}
function du(n, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !xl.call(this)), e) {
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
function xl() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function kl(n, e = 0, t, s = 0) {
  var i;
  t || (t = [...n.keys()]);
  for (const o of t) {
    const r = n.get(o);
    r && (r.level === s && (r.order = e++), (i = r.children) != null && i.length && (e = kl(n, e, r.children, s + 1)));
  }
  return e;
}
function El(n, e, t, s) {
  const i = n.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, El(n, o, t, s);
  }), i;
}
function Sl(n, e, t, s, i) {
  var a;
  const o = n.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return t === h;
  })) && (s[e] = t), o.parent && Sl(n, o.parent, t, s, i);
}
const fu = {
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
        const r = El(this, i, o, s);
        r != null && r.parent && Sl(this, r.parent, o, s, t);
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
    getNestedInfo: uu,
    toggleRow: du,
    isAllCollapsed: xl,
    getNestedRowInfo: Cn
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
    ), kl(this.data.nestedMap), n.sort((e, t) => {
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
}, pu = Ot(fu);
function ji(n, { row: e, col: t }) {
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
  if (n[0] = /* @__PURE__ */ f(Za, { ...c }), t.type === "avatarBtn") {
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
const mu = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: ji
    },
    avatarBtn: {
      onRenderCell: ji
    },
    avatarName: {
      onRenderCell: ji
    }
  }
}, gu = Ot(mu, { buildIn: !0 }), yu = {
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
        n[0] = /* @__PURE__ */ f("a", { href: Y(a, { ...t.setting, sortType: r }), ...l, children: n[0] });
      }
    }
    return n;
  }
}, bu = Ot(yu, { buildIn: !0 }), Vi = (n) => {
  n.length !== 1 && n.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === n[t - 1].setting.group || (e.setting.border = "left");
  });
}, wu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = n;
    Vi(e.left.list), Vi(e.center.list), Vi(e.right.list);
  }
}, vu = Ot(wu), _u = {
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
        const w = Math.min(v.colSpan || 1, l.length - m), _ = Math.min(v.rowSpan || 1, i.length - u);
        if (w <= 1 && _ <= 1)
          return;
        let x = 0;
        for (let k = 0; k < w; k++) {
          x += l[m + k].realWidth;
          for (let E = 0; E < _; E++) {
            const M = `C${g + k}R${c + E}`;
            M !== y && s.add(M);
          }
        }
        t.set(y, {
          colSpan: w,
          rowSpan: _,
          width: x,
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
}, Cu = Ot(_u), $u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: $l,
  avatar: gu,
  cellspan: Cu,
  checkable: hu,
  custom: su,
  group: vu,
  nested: pu,
  renderDatetime: yl,
  renderDatetimeCell: _l,
  renderFormat: Wo,
  renderFormatCell: wl,
  renderHtmlCell: po,
  renderLink: gl,
  renderLinkCell: bl,
  renderMapCell: vl,
  rich: iu,
  sortType: bu
}, Symbol.toStringTag, { value: "Module" })), ne = class ne extends z {
};
ne.NAME = "DTable", ne.Component = Qh, ne.definePlugin = Ot, ne.removePlugin = al, ne.plugins = $u;
let Jr = ne;
const xu = "nav", sn = '[data-toggle="tab"]', ku = "active";
var de;
const Yo = class Yo extends at {
  constructor() {
    super(...arguments);
    C(this, de, 0);
  }
  active(t) {
    const s = this.$element, i = s.find(sn);
    let o = t ? d(t).closest(sn) : i.filter(`.${ku}`);
    if (!o.length && (o = s.find(sn).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = d(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), b(this, de) && clearTimeout(b(this, de)), $(this, de, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), $(this, de, 0);
    }, 10)));
  }
};
de = new WeakMap(), Yo.NAME = "Tabs";
let mo = Yo;
d(document).on("click.tabs.zui", sn, (n) => {
  n.preventDefault();
  const e = d(n.target), t = e.closest(`.${xu}`);
  t.length && mo.ensure(t).active(e);
});
d(() => {
  d(".disabled, [disabled]").on("click", (n) => {
    n.preventDefault(), n.stopImmediatePropagation();
  });
});
export {
  d as $,
  hr as ActionMenu,
  ur as ActionMenuNested,
  Er as Avatar,
  Sr as BtnGroup,
  Tr as ColorPicker,
  at as Component,
  z as ComponentFromReact,
  uo as ContextMenu,
  ee as CustomContent,
  Yi as CustomRender,
  Jr as DTable,
  Ur as Dashboard,
  Ar as DatePicker,
  $t as Dropdown,
  Ga as EventBus,
  Ao as HElement,
  qs as HtmlContent,
  tt as Icon,
  dr as Menu,
  vr as Messager,
  ro as Modal,
  Pt as ModalBase,
  wn as ModalTrigger,
  Lr as Nav,
  Pr as Pager,
  Hr as Pick,
  Or as Picker,
  Ct as Popover,
  Ki as PopoverPanel,
  Br as Popovers,
  _r as ProgressCircle,
  B as ReactComponent,
  Wr as SearchBox,
  $r as Sortable,
  ss as TIME_DAY,
  mo as Tabs,
  Ir as TimePicker,
  Fr as Toolbar,
  Nt as Tooltip,
  zr as Tree,
  ho as Upload,
  jr as UploadImgs,
  yh as addDate,
  d as cash,
  N as classes,
  Xe as componentsMap,
  _c as convertBytes,
  Ec as create,
  K as createDate,
  Hc as createPortal,
  U as createRef,
  wc as deepGet,
  bc as deepGetPath,
  Su as defineFn,
  an as delay,
  Tu as dom,
  vc as formatBytes,
  ct as formatDate,
  Hu as formatDateSpan,
  Y as formatString,
  ba as getClassList,
  ln as getComponent,
  G as h,
  Nu as hh,
  Ic as htm,
  Z as i18n,
  Xs as isSameDay,
  Qa as isSameMonth,
  Au as isSameWeek,
  no as isSameYear,
  Du as isToday,
  Pu as isTomorrow,
  X as isValidElement,
  Lu as isYesterday,
  Cr as nativeEvents,
  dn as render,
  Aa as renderCustomContent,
  Dc as renderCustomResult,
  kc as shareData,
  Ze as store,
  wa as storeData,
  va as takeData
};
//# sourceMappingURL=zui.js.map
