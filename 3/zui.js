var so = (n, e, t) => {
  if (!e.has(n))
    throw TypeError("Cannot " + t);
};
var g = (n, e, t) => (so(n, e, "read from private field"), t ? t.call(n) : e.get(n)), _ = (n, e, t) => {
  if (e.has(n))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n) : e.set(n, t);
}, C = (n, e, t, s) => (so(n, e, "write to private field"), s ? s.call(n, t) : e.set(n, t), t);
var P = (n, e, t) => (so(n, e, "access private method"), t);
const At = document, Nn = window, ma = At.documentElement, Ce = At.createElement.bind(At), ga = Ce("div"), no = Ce("table"), Zl = Ce("tbody"), dr = Ce("tr"), { isArray: Yi, prototype: ya } = Array, { concat: Jl, filter: Oo, indexOf: ba, map: wa, push: Ql, slice: va, some: Ho, splice: tc } = ya, ec = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, sc = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, nc = /<.+>/, ic = /^\w+$/;
function Bo(n, e) {
  const t = oc(e);
  return !n || !t && !we(e) && !V(e) ? [] : !t && sc.test(n) ? e.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !t && ic.test(n) ? e.getElementsByTagName(n) : e.querySelectorAll(n);
}
class Ki {
  constructor(e, t) {
    if (!e)
      return;
    if (go(e))
      return e;
    let s = e;
    if (et(e)) {
      const i = t || At;
      if (s = ec.test(e) && we(i) ? i.getElementById(e.slice(1).replace(/\\/g, "")) : nc.test(e) ? $a(e) : go(i) ? i.find(e) : et(i) ? d(i).find(e) : Bo(e, i), !s)
        return;
    } else if ($e(e))
      return this.ready(e);
    (s.nodeType || s === Nn) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(e, t) {
    return new Ki(e, t);
  }
}
const k = Ki.prototype, d = k.init;
d.fn = d.prototype = k;
k.length = 0;
k.splice = tc;
typeof Symbol == "function" && (k[Symbol.iterator] = ya[Symbol.iterator]);
function go(n) {
  return n instanceof Ki;
}
function ts(n) {
  return !!n && n === n.window;
}
function we(n) {
  return !!n && n.nodeType === 9;
}
function oc(n) {
  return !!n && n.nodeType === 11;
}
function V(n) {
  return !!n && n.nodeType === 1;
}
function rc(n) {
  return !!n && n.nodeType === 3;
}
function ac(n) {
  return typeof n == "boolean";
}
function $e(n) {
  return typeof n == "function";
}
function et(n) {
  return typeof n == "string";
}
function it(n) {
  return n === void 0;
}
function us(n) {
  return n === null;
}
function _a(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Wo(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const e = Object.getPrototypeOf(n);
  return e === null || e === Object.prototype;
}
d.isWindow = ts;
d.isFunction = $e;
d.isArray = Yi;
d.isNumeric = _a;
d.isPlainObject = Wo;
function q(n, e, t) {
  if (t) {
    let s = n.length;
    for (; s--; )
      if (e.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Wo(n)) {
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
k.each = function(n) {
  return q(this, n);
};
k.empty = function() {
  return this.each((n, e) => {
    for (; e.firstChild; )
      e.removeChild(e.firstChild);
  });
};
function Mn(...n) {
  const e = ac(n[0]) ? n.shift() : !1, t = n.shift(), s = n.length;
  if (!t)
    return {};
  if (!s)
    return Mn(e, d, t);
  for (let i = 0; i < s; i++) {
    const o = n[i];
    for (const r in o)
      e && (Yi(o[r]) || Wo(o[r])) ? ((!t[r] || t[r].constructor !== o[r].constructor) && (t[r] = new o[r].constructor()), Mn(e, t[r], o[r])) : t[r] = o[r];
  }
  return t;
}
d.extend = Mn;
k.extend = function(n) {
  return Mn(k, n);
};
const lc = /\S+/g;
function Gi(n) {
  return et(n) ? n.match(lc) || [] : [];
}
k.toggleClass = function(n, e) {
  const t = Gi(n), s = !it(e);
  return this.each((i, o) => {
    V(o) && q(t, (r, a) => {
      s ? e ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
k.addClass = function(n) {
  return this.toggleClass(n, !0);
};
k.removeAttr = function(n) {
  const e = Gi(n);
  return this.each((t, s) => {
    V(s) && q(e, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function cc(n, e) {
  if (n) {
    if (et(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !V(this[0]))
          return;
        const t = this[0].getAttribute(n);
        return us(t) ? void 0 : t;
      }
      return it(e) ? this : us(e) ? this.removeAttr(n) : this.each((t, s) => {
        V(s) && s.setAttribute(n, e);
      });
    }
    for (const t in n)
      this.attr(t, n[t]);
    return this;
  }
}
k.attr = cc;
k.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
k.hasClass = function(n) {
  return !!n && Ho.call(this, (e) => V(e) && e.classList.contains(n));
};
k.get = function(n) {
  return it(n) ? va.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
k.eq = function(n) {
  return d(this.get(n));
};
k.first = function() {
  return this.eq(0);
};
k.last = function() {
  return this.eq(-1);
};
function hc(n) {
  return it(n) ? this.get().map((e) => V(e) || rc(e) ? e.textContent : "").join("") : this.each((e, t) => {
    V(t) && (t.textContent = n);
  });
}
k.text = hc;
function Dt(n, e, t) {
  if (!V(n))
    return;
  const s = Nn.getComputedStyle(n, null);
  return t ? s.getPropertyValue(e) || void 0 : s[e] || n.style[e];
}
function Ct(n, e) {
  return parseInt(Dt(n, e), 10) || 0;
}
function fr(n, e) {
  return Ct(n, `border${e ? "Left" : "Top"}Width`) + Ct(n, `padding${e ? "Left" : "Top"}`) + Ct(n, `padding${e ? "Right" : "Bottom"}`) + Ct(n, `border${e ? "Right" : "Bottom"}Width`);
}
const io = {};
function uc(n) {
  if (io[n])
    return io[n];
  const e = Ce(n);
  At.body.insertBefore(e, null);
  const t = Dt(e, "display");
  return At.body.removeChild(e), io[n] = t !== "none" ? t : "block";
}
function pr(n) {
  return Dt(n, "display") === "none";
}
function Ca(n, e) {
  const t = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!t && !!e && t.call(n, e);
}
function Xi(n) {
  return et(n) ? (e, t) => Ca(t, n) : $e(n) ? n : go(n) ? (e, t) => n.is(t) : n ? (e, t) => t === n : () => !1;
}
k.filter = function(n) {
  const e = Xi(n);
  return d(Oo.call(this, (t, s) => e.call(t, s, t)));
};
function te(n, e) {
  return e ? n.filter(e) : n;
}
k.detach = function(n) {
  return te(this, n).each((e, t) => {
    t.parentNode && t.parentNode.removeChild(t);
  }), this;
};
const dc = /^\s*<(\w+)[^>]*>/, fc = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, mr = {
  "*": ga,
  tr: Zl,
  td: dr,
  th: dr,
  thead: no,
  tbody: no,
  tfoot: no
};
function $a(n) {
  if (!et(n))
    return [];
  if (fc.test(n))
    return [Ce(RegExp.$1)];
  const e = dc.test(n) && RegExp.$1, t = mr[e] || mr["*"];
  return t.innerHTML = n, d(t.childNodes).detach().get();
}
d.parseHTML = $a;
k.has = function(n) {
  const e = et(n) ? (t, s) => Bo(n, s).length : (t, s) => s.contains(n);
  return this.filter(e);
};
k.not = function(n) {
  const e = Xi(n);
  return this.filter((t, s) => (!et(n) || V(s)) && !e.call(s, t, s));
};
function Ot(n, e, t, s) {
  const i = [], o = $e(e), r = s && Xi(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (o) {
      const h = e(n[a]);
      h.length && Ql.apply(i, h);
    } else {
      let h = n[a][e];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = t ? h[e] : null;
    }
  return i;
}
function xa(n) {
  return n.multiple && n.options ? Ot(Oo.call(n.options, (e) => e.selected && !e.disabled && !e.parentNode.disabled), "value") : n.value || "";
}
function pc(n) {
  return arguments.length ? this.each((e, t) => {
    const s = t.multiple && t.options;
    if (s || Ia.test(t.type)) {
      const i = Yi(n) ? wa.call(n, String) : us(n) ? [] : [String(n)];
      s ? q(t.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : t.checked = i.indexOf(t.value) >= 0;
    } else
      t.value = it(n) || us(n) ? "" : n;
  }) : this[0] && xa(this[0]);
}
k.val = pc;
k.is = function(n) {
  const e = Xi(n);
  return Ho.call(this, (t, s) => e.call(t, s, t));
};
d.guid = 1;
function xt(n) {
  return n.length > 1 ? Oo.call(n, (e, t, s) => ba.call(s, e) === t) : n;
}
d.unique = xt;
k.add = function(n, e) {
  return d(xt(this.get().concat(d(n, e).get())));
};
k.children = function(n) {
  return te(d(xt(Ot(this, (e) => e.children))), n);
};
k.parent = function(n) {
  return te(d(xt(Ot(this, "parentNode"))), n);
};
k.index = function(n) {
  const e = n ? d(n)[0] : this[0], t = n ? this : d(e).parent().children();
  return ba.call(t, e);
};
k.closest = function(n) {
  const e = this.filter(n);
  if (e.length)
    return e;
  const t = this.parent();
  return t.length ? t.closest(n) : e;
};
k.siblings = function(n) {
  return te(d(xt(Ot(this, (e) => d(e).parent().children().not(e)))), n);
};
k.find = function(n) {
  return d(xt(Ot(this, (e) => Bo(n, e))));
};
const mc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gc = /^$|^module$|\/(java|ecma)script/i, yc = ["type", "src", "nonce", "noModule"];
function bc(n, e) {
  const t = d(n);
  t.filter("script").add(t.find("script")).each((s, i) => {
    if (gc.test(i.type) && ma.contains(i)) {
      const o = Ce("script");
      o.text = i.textContent.replace(mc, ""), q(yc, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), e.head.insertBefore(o, null), e.head.removeChild(o);
    }
  });
}
function wc(n, e, t, s, i) {
  s ? n.insertBefore(e, t ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(e, n) : n.parentNode.insertBefore(e, t ? n : n.nextSibling), i && bc(e, n.ownerDocument);
}
function ee(n, e, t, s, i, o, r, a) {
  return q(n, (l, h) => {
    q(d(h), (u, c) => {
      q(d(e), (p, m) => {
        const y = t ? c : m, b = t ? m : c, v = t ? u : p;
        wc(y, v ? b.cloneNode(!0) : b, s, i, !v);
      }, a);
    }, r);
  }, o), e;
}
k.after = function() {
  return ee(arguments, this, !1, !1, !1, !0, !0);
};
k.append = function() {
  return ee(arguments, this, !1, !1, !0);
};
function vc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (it(n))
    return this;
  const e = /<script[\s>]/.test(n);
  return this.each((t, s) => {
    V(s) && (e ? d(s).empty().append(n) : s.innerHTML = n);
  });
}
k.html = vc;
k.appendTo = function(n) {
  return ee(arguments, this, !0, !1, !0);
};
k.wrapInner = function(n) {
  return this.each((e, t) => {
    const s = d(t), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
k.before = function() {
  return ee(arguments, this, !1, !0);
};
k.wrapAll = function(n) {
  let e = d(n), t = e[0];
  for (; t.children.length; )
    t = t.firstElementChild;
  return this.first().before(e), this.appendTo(t);
};
k.wrap = function(n) {
  return this.each((e, t) => {
    const s = d(n)[0];
    d(t).wrapAll(e ? s.cloneNode(!0) : s);
  });
};
k.insertAfter = function(n) {
  return ee(arguments, this, !0, !1, !1, !1, !1, !0);
};
k.insertBefore = function(n) {
  return ee(arguments, this, !0, !0);
};
k.prepend = function() {
  return ee(arguments, this, !1, !0, !0, !0, !0);
};
k.prependTo = function(n) {
  return ee(arguments, this, !0, !0, !0, !1, !1, !0);
};
k.contents = function() {
  return d(xt(Ot(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
k.next = function(n, e, t) {
  return te(d(xt(Ot(this, "nextElementSibling", e, t))), n);
};
k.nextAll = function(n) {
  return this.next(n, !0);
};
k.nextUntil = function(n, e) {
  return this.next(e, !0, n);
};
k.parents = function(n, e) {
  return te(d(xt(Ot(this, "parentElement", !0, e))), n);
};
k.parentsUntil = function(n, e) {
  return this.parents(e, n);
};
k.prev = function(n, e, t) {
  return te(d(xt(Ot(this, "previousElementSibling", e, t))), n);
};
k.prevAll = function(n) {
  return this.prev(n, !0);
};
k.prevUntil = function(n, e) {
  return this.prev(e, !0, n);
};
k.map = function(n) {
  return d(Jl.apply([], wa.call(this, (e, t) => n.call(e, t, e))));
};
k.clone = function() {
  return this.map((n, e) => e.cloneNode(!0));
};
k.offsetParent = function() {
  return this.map((n, e) => {
    let t = e.offsetParent;
    for (; t && Dt(t, "position") === "static"; )
      t = t.offsetParent;
    return t || ma;
  });
};
k.slice = function(n, e) {
  return d(va.call(this, n, e));
};
const _c = /-([a-z])/g;
function zo(n) {
  return n.replace(_c, (e, t) => t.toUpperCase());
}
k.ready = function(n) {
  const e = () => setTimeout(n, 0, d);
  return At.readyState !== "loading" ? e() : At.addEventListener("DOMContentLoaded", e), this;
};
k.unwrap = function() {
  return this.parent().each((n, e) => {
    if (e.tagName === "BODY")
      return;
    const t = d(e);
    t.replaceWith(t.children());
  }), this;
};
k.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const e = n.getBoundingClientRect();
  return {
    top: e.top + Nn.pageYOffset,
    left: e.left + Nn.pageXOffset
  };
};
k.position = function() {
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
      t.top -= o.top + Ct(i, "borderTopWidth"), t.left -= o.left + Ct(i, "borderLeftWidth");
    }
  }
  return {
    top: t.top - Ct(n, "marginTop"),
    left: t.left - Ct(n, "marginLeft")
  };
};
const ka = {
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
k.prop = function(n, e) {
  if (n) {
    if (et(n))
      return n = ka[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((t, s) => {
        s[n] = e;
      });
    for (const t in n)
      this.prop(t, n[t]);
    return this;
  }
};
k.removeProp = function(n) {
  return this.each((e, t) => {
    delete t[ka[n] || n];
  });
};
const Cc = /^--/;
function Fo(n) {
  return Cc.test(n);
}
const oo = {}, { style: $c } = ga, xc = ["webkit", "moz", "ms"];
function kc(n, e = Fo(n)) {
  if (e)
    return n;
  if (!oo[n]) {
    const t = zo(n), s = `${t[0].toUpperCase()}${t.slice(1)}`, i = `${t} ${xc.join(`${s} `)}${s}`.split(" ");
    q(i, (o, r) => {
      if (r in $c)
        return oo[n] = r, !1;
    });
  }
  return oo[n];
}
const Sc = {
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
function Sa(n, e, t = Fo(n)) {
  return !t && !Sc[n] && _a(e) ? `${e}px` : e;
}
function Ec(n, e) {
  if (et(n)) {
    const t = Fo(n);
    return n = kc(n, t), arguments.length < 2 ? this[0] && Dt(this[0], n, t) : n ? (e = Sa(n, e, t), this.each((s, i) => {
      V(i) && (t ? i.style.setProperty(n, e) : i.style[n] = e);
    })) : this;
  }
  for (const t in n)
    this.css(t, n[t]);
  return this;
}
k.css = Ec;
function Ea(n, e) {
  try {
    return n(e);
  } catch {
    return e;
  }
}
const Tc = /^\s+|\s+$/;
function gr(n, e) {
  const t = n.dataset[e] || n.dataset[zo(e)];
  return Tc.test(t) ? t : Ea(JSON.parse, t);
}
function Nc(n, e, t) {
  t = Ea(JSON.stringify, t), n.dataset[zo(e)] = t;
}
function Mc(n, e) {
  if (!n) {
    if (!this[0])
      return;
    const t = {};
    for (const s in this[0].dataset)
      t[s] = gr(this[0], s);
    return t;
  }
  if (et(n))
    return arguments.length < 2 ? this[0] && gr(this[0], n) : it(e) ? this : this.each((t, s) => {
      Nc(s, n, e);
    });
  for (const t in n)
    this.data(t, n[t]);
  return this;
}
k.data = Mc;
function Ta(n, e) {
  const t = n.documentElement;
  return Math.max(n.body[`scroll${e}`], t[`scroll${e}`], n.body[`offset${e}`], t[`offset${e}`], t[`client${e}`]);
}
q([!0, !1], (n, e) => {
  q(["Width", "Height"], (t, s) => {
    const i = `${e ? "outer" : "inner"}${s}`;
    k[i] = function(o) {
      if (this[0])
        return ts(this[0]) ? e ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : we(this[0]) ? Ta(this[0], s) : this[0][`${e ? "offset" : "client"}${s}`] + (o && e ? Ct(this[0], `margin${t ? "Top" : "Left"}`) + Ct(this[0], `margin${t ? "Bottom" : "Right"}`) : 0);
    };
  });
});
q(["Width", "Height"], (n, e) => {
  const t = e.toLowerCase();
  k[t] = function(s) {
    if (!this[0])
      return it(s) ? void 0 : this;
    if (!arguments.length)
      return ts(this[0]) ? this[0].document.documentElement[`client${e}`] : we(this[0]) ? Ta(this[0], e) : this[0].getBoundingClientRect()[t] - fr(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!V(r))
        return;
      const a = Dt(r, "boxSizing");
      r.style[t] = Sa(t, i + (a === "border-box" ? fr(r, !n) : 0));
    });
  };
});
const yr = "___cd";
k.toggle = function(n) {
  return this.each((e, t) => {
    if (!V(t))
      return;
    const s = pr(t);
    (it(n) ? s : n) ? (t.style.display = t[yr] || "", pr(t) && (t.style.display = uc(t.tagName))) : s || (t[yr] = Dt(t, "display"), t.style.display = "none");
  });
};
k.hide = function() {
  return this.toggle(!1);
};
k.show = function() {
  return this.toggle(!0);
};
const br = "___ce", jo = ".", Vo = { focus: "focusin", blur: "focusout" }, Na = { mouseenter: "mouseover", mouseleave: "mouseout" }, Rc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function Uo(n) {
  return Na[n] || Vo[n] || n;
}
function qo(n) {
  const e = n.split(jo);
  return [e[0], e.slice(1).sort()];
}
k.trigger = function(n, e) {
  if (et(n)) {
    const [s, i] = qo(n), o = Uo(s);
    if (!o)
      return this;
    const r = Rc.test(o) ? "MouseEvents" : "HTMLEvents";
    n = At.createEvent(r), n.initEvent(o, !0, !0), n.namespace = i.join(jo), n.___ot = s;
  }
  n.___td = e;
  const t = n.___ot in Vo;
  return this.each((s, i) => {
    t && $e(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Ma(n) {
  return n[br] = n[br] || {};
}
function Ic(n, e, t, s, i) {
  const o = Ma(n);
  o[e] = o[e] || [], o[e].push([t, s, i]), n.addEventListener(e, i);
}
function Ra(n, e) {
  return !e || !Ho.call(e, (t) => n.indexOf(t) < 0);
}
function Rn(n, e, t, s, i) {
  const o = Ma(n);
  if (e)
    o[e] && (o[e] = o[e].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Ra(r, t) || s && s !== a)
        return !0;
      n.removeEventListener(e, l);
    }));
  else
    for (e in o)
      Rn(n, e, t, s, i);
}
k.off = function(n, e, t) {
  if (it(n))
    this.each((s, i) => {
      !V(i) && !we(i) && !ts(i) || Rn(i);
    });
  else if (et(n))
    $e(e) && (t = e, e = ""), q(Gi(n), (s, i) => {
      const [o, r] = qo(i), a = Uo(o);
      this.each((l, h) => {
        !V(h) && !we(h) && !ts(h) || Rn(h, a, r, e, t);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
k.remove = function(n) {
  return te(this, n).detach().off(), this;
};
k.replaceWith = function(n) {
  return this.before(n).remove();
};
k.replaceAll = function(n) {
  return d(n).replaceWith(this), this;
};
function Ac(n, e, t, s, i) {
  if (!et(n)) {
    for (const o in n)
      this.on(o, e, t, n[o], i);
    return this;
  }
  return et(e) || (it(e) || us(e) ? e = "" : it(t) ? (t = e, e = "") : (s = t, t = e, e = "")), $e(s) || (s = t, t = void 0), s ? (q(Gi(n), (o, r) => {
    const [a, l] = qo(r), h = Uo(a), u = a in Na, c = a in Vo;
    h && this.each((p, m) => {
      if (!V(m) && !we(m) && !ts(m))
        return;
      const y = function(b) {
        if (b.target[`___i${b.type}`])
          return b.stopImmediatePropagation();
        if (b.namespace && !Ra(l, b.namespace.split(jo)) || !e && (c && (b.target !== m || b.___ot === h) || u && b.relatedTarget && m.contains(b.relatedTarget)))
          return;
        let v = m;
        if (e) {
          let $ = b.target;
          for (; !Ca($, e); )
            if ($ === m || ($ = $.parentNode, !$))
              return;
          v = $;
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
        const w = s.call(v, b, b.___td);
        i && Rn(m, h, l, e, y), w === !1 && (b.preventDefault(), b.stopPropagation());
      };
      y.guid = s.guid = s.guid || d.guid++, Ic(m, h, l, e, y);
    });
  }), this) : this;
}
k.on = Ac;
function Dc(n, e, t, s) {
  return this.on(n, e, t, s, !0);
}
k.one = Dc;
const Pc = /\r?\n/g;
function Lc(n, e) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(e.replace(Pc, `\r
`))}`;
}
const Oc = /file|reset|submit|button|image/i, Ia = /radio|checkbox/i;
k.serialize = function() {
  let n = "";
  return this.each((e, t) => {
    q(t.elements || [t], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Oc.test(i.type) || Ia.test(i.type) && !i.checked)
        return;
      const o = xa(i);
      if (!it(o)) {
        const r = Yi(o) ? o : [o];
        q(r, (a, l) => {
          n += Lc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = d;
function Hc(n, e) {
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
function Bc(n, e, t) {
  try {
    const s = Hc(n, e), i = s[s.length - 1];
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
var Yo = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(Yo || {});
function Wc(n, e = 2, t) {
  return Number.isNaN(n) ? "?KB" : (t || (n < 1024 ? t = "B" : n < 1048576 ? t = "KB" : n < 1073741824 ? t = "MB" : n < 1099511627776 ? t = "GB" : t = "TB"), (n / Yo[t]).toFixed(e) + t);
}
const zc = (n) => {
  const e = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const t = n.match(e);
  if (!t)
    return 0;
  const s = t[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * Yo[s];
};
let Ko = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Bt;
function Fc() {
  return Ko;
}
function jc(n) {
  Ko = n.toLowerCase();
}
function Aa(n, e) {
  Bt || (Bt = {}), typeof n == "string" && (n = { [n]: e ?? {} }), d.extend(!0, Bt, n);
}
function Z(n, e, t, s, i, o) {
  Array.isArray(n) ? Bt && n.unshift(Bt) : n = Bt ? [Bt, n] : [n], typeof t == "string" && (o = i, i = s, s = t, t = void 0);
  const r = i || Ko;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const u = o && l === Bt ? `${o}.${e}` : e;
    if (a = Bc(h, u), a !== void 0)
      break;
  }
  return a === void 0 ? s : t ? Y(a, ...Array.isArray(t) ? t : [t]) : a;
}
function Vc(n, e, t, s) {
  return Z(void 0, n, e, t, s);
}
Z.addLang = Aa;
Z.getLang = Vc;
Z.getCode = Fc;
Z.setCode = jc;
Aa({
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
function Da(...n) {
  const e = [], t = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = t.get(i);
    typeof r == "number" ? e[r][1] = !!o : (t.set(i, e.length), e.push([i, !!o]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Da(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), e.sort((i, o) => (t.get(i[0]) || 0) - (t.get(o[0]) || 0));
}
const N = (...n) => Da(...n).reduce((e, [t, s]) => (s && e.push(t), e), []).join(" ");
d.classes = N;
d.fn.setClass = function(n, ...e) {
  return this.each((t, s) => {
    const i = d(s);
    n === !0 ? i.attr("class", N(i.attr("class"), ...e)) : i.addClass(N(n, ...e));
  });
};
const ls = /* @__PURE__ */ new WeakMap();
function Pa(n, e, t) {
  const s = ls.has(n), i = s ? ls.get(n) : {};
  typeof e == "string" ? i[e] = t : e === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, e), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, d(n).dataset(), i), ls.set(n, i)) : ls.delete(n);
}
function La(n, e, t) {
  let s = ls.get(n) || {};
  return !t && n instanceof Element && (s = Object.assign({}, d(n).dataset(), s)), e === void 0 ? s : s[e];
}
d.fn.dataset = d.fn.data;
d.fn.data = function(...n) {
  if (!this.length)
    return;
  const [e, t] = n;
  return !n.length || n.length === 1 && typeof e == "string" ? La(this[0], e) : this.each((s, i) => Pa(i, e, t));
};
d.fn.removeData = function(n = null) {
  return this.each((e, t) => Pa(t, n));
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
const In = (n, e) => new Promise((t) => {
  const s = window.setTimeout(t, n);
  e && e(s);
}), xn = /* @__PURE__ */ new Map();
function An(n) {
  const { zui: e } = window;
  return xn.size || Object.keys(e).forEach((t) => {
    const s = e[t];
    !s.NAME || !s.ZUI || xn.set(t.toLowerCase(), s);
  }), n ? xn.get(n.toLowerCase()) : void 0;
}
function Uc(n, e, t) {
  const s = An(n);
  return s ? new s(e, t) : null;
}
function Gu(n) {
  if (n) {
    const e = An(n);
    e && e.defineFn();
  } else
    An(), xn.forEach((e) => {
      e.defineFn();
    });
}
d.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const e = d(this).dataset(), t = e.zui;
    delete e.zui, Uc(t, this, e);
  }), this;
};
d.fn.zui = function(n, e) {
  const t = this[0];
  if (!t)
    return;
  if (typeof n != "string") {
    const i = La(t, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), n === !0 ? o : r;
  }
  const s = An(n);
  if (s)
    return e === !0 ? s.getAll(t) : s.query(t, e);
};
d(() => {
  d("body").zuiInit();
});
function Go(n, e) {
  const t = d(n)[0];
  if (!t)
    return !1;
  let { viewport: s } = e || {};
  const { left: i, top: o, width: r, height: a } = t.getBoundingClientRect();
  if (!s) {
    const { innerHeight: y, innerWidth: b } = window, { clientHeight: v, clientWidth: w } = document.documentElement;
    s = { left: 0, top: 0, width: b || w, height: y || v };
  }
  const { left: l, top: h, width: u, height: c } = s;
  if (e != null && e.fullyCheck)
    return i >= l && o >= h && i + r <= u && o + a <= c;
  const p = i <= u && i + r >= l;
  return o <= c && o + a >= h && p;
}
d.fn.isVisible = function(n) {
  return this.each((e, t) => {
    Go(t, n);
  });
};
function Xo(n, e, t = !1) {
  const s = d(n);
  if (e !== void 0) {
    if (e.length) {
      const i = `zui-runjs-${d.guid++}`;
      s.append(`<script id="${i}">${e}<\/script>`), t && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    Xo(s, o.innerHTML), o.remove();
  });
}
d.runJS = (n, ...e) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...e.map(([s]) => s), n)(...e.map(([, s]) => s)));
d.fn.runJS = function(n) {
  return this.each((e, t) => {
    Xo(t, n);
  });
};
function Oa(n, e) {
  const t = d(n), { ifNeeded: s = !0, ...i } = e || {};
  return t.each((o, r) => {
    s && Go(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), t;
}
d.fn.scrollIntoView = function(n) {
  return this.each((e, t) => {
    Oa(t, n);
  });
};
d.getScript = function(n, e, t) {
  return new Promise((s) => {
    const i = d(`script[src="${n}"]`), o = () => {
      s(), t == null || t();
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
      o(), (d(r).dataset("loaded", !0).data("loadCalls") || []).forEach((l) => l()), d(r).removeData("loadCalls");
    }, r.src = n, d("head").append(r);
  });
};
const Xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: Go,
  runJS: Xo,
  scrollIntoView: Oa
}, Symbol.toStringTag, { value: "Module" }));
var Zi, W, Ha, X, se, wr, Ba, yo, Te = {}, Wa = [], qc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Zo = Array.isArray;
function Yt(n, e) {
  for (var t in e)
    n[t] = e[t];
  return n;
}
function za(n) {
  var e = n.parentNode;
  e && e.removeChild(n);
}
function U(n, e, t) {
  var s, i, o, r = {};
  for (o in e)
    o == "key" ? s = e[o] : o == "ref" ? i = e[o] : r[o] = e[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Zi.call(arguments, 2) : t), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return kn(n, r, s, i, null);
}
function kn(n, e, t, s, i) {
  var o = { type: n, props: e, key: t, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++Ha };
  return i == null && W.vnode != null && W.vnode(o), o;
}
function K() {
  return { current: null };
}
function os(n) {
  return n.children;
}
function H(n, e) {
  this.props = n, this.context = e;
}
function Dn(n, e) {
  if (e == null)
    return n.__ ? Dn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var t; e < n.__k.length; e++)
    if ((t = n.__k[e]) != null && t.__e != null)
      return t.__e;
  return typeof n.type == "function" ? Dn(n) : null;
}
function Fa(n) {
  var e, t;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, e = 0; e < n.__k.length; e++)
      if ((t = n.__k[e]) != null && t.__e != null) {
        n.__e = n.__c.base = t.__e;
        break;
      }
    return Fa(n);
  }
}
function vr(n) {
  (!n.__d && (n.__d = !0) && se.push(n) && !Pn.__r++ || wr !== W.debounceRendering) && ((wr = W.debounceRendering) || Ba)(Pn);
}
function Pn() {
  var n, e, t, s, i, o, r, a, l;
  for (se.sort(yo); n = se.shift(); )
    n.__d && (e = se.length, s = void 0, i = void 0, o = void 0, a = (r = (t = n).__v).__e, (l = t.__P) && (s = [], i = [], (o = Yt({}, r)).__v = r.__v + 1, Jo(l, r, o, t.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, s, a ?? Dn(r), r.__h, i), qa(s, r, i), r.__e != a && Fa(r)), se.length > e && se.sort(yo));
  Pn.__r = 0;
}
function ja(n, e, t, s, i, o, r, a, l, h, u) {
  var c, p, m, y, b, v, w, $, x, E, S = 0, M = s && s.__k || Wa, I = M.length, A = I, D = e.length;
  for (t.__k = [], c = 0; c < D; c++)
    (y = t.__k[c] = (y = e[c]) == null || typeof y == "boolean" || typeof y == "function" ? null : typeof y == "string" || typeof y == "number" || typeof y == "bigint" ? kn(null, y, null, null, y) : Zo(y) ? kn(os, { children: y }, null, null, null) : y.__b > 0 ? kn(y.type, y.props, y.key, y.ref ? y.ref : null, y.__v) : y) != null && (y.__ = t, y.__b = t.__b + 1, ($ = Yc(y, M, w = c + S, A)) === -1 ? m = Te : (m = M[$] || Te, M[$] = void 0, A--), Jo(n, y, m, i, o, r, a, l, h, u), b = y.__e, (p = y.ref) && m.ref != p && (m.ref && Qo(m.ref, null, y), u.push(p, y.__c || b, y)), b != null && (v == null && (v = b), E = !(x = m === Te || m.__v === null) && $ === w, x ? $ == -1 && S-- : $ !== w && ($ === w + 1 ? (S++, E = !0) : $ > w ? A > D - w ? (S += $ - w, E = !0) : S-- : S = $ < w && $ == w - 1 ? $ - w : 0), w = c + S, E = E || $ == c && !x, typeof y.type != "function" || $ === w && m.__k !== y.__k ? typeof y.type == "function" || E ? y.__d !== void 0 ? (l = y.__d, y.__d = void 0) : l = b.nextSibling : l = Ua(n, b, l) : l = Va(y, l, n), typeof t.type == "function" && (t.__d = l)));
  for (t.__e = v, c = I; c--; )
    M[c] != null && (typeof t.type == "function" && M[c].__e != null && M[c].__e == t.__d && (t.__d = M[c].__e.nextSibling), Ya(M[c], M[c]));
}
function Va(n, e, t) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, e = typeof s.type == "function" ? Va(s, e, t) : Ua(t, s.__e, e));
  return e;
}
function Ua(n, e, t) {
  return t == null || t.parentNode !== n ? n.insertBefore(e, null) : e == t && e.parentNode != null || n.insertBefore(e, t), e.nextSibling;
}
function Yc(n, e, t, s) {
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
function Kc(n, e, t, s, i) {
  var o;
  for (o in t)
    o === "children" || o === "key" || o in e || Ln(n, o, null, t[o], s);
  for (o in e)
    i && typeof e[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || t[o] === e[o] || Ln(n, o, e[o], t[o], s);
}
function _r(n, e, t) {
  e[0] === "-" ? n.setProperty(e, t ?? "") : n[e] = t == null ? "" : typeof t != "number" || qc.test(e) ? t : t + "px";
}
function Ln(n, e, t, s, i) {
  var o;
  t:
    if (e === "style")
      if (typeof t == "string")
        n.style.cssText = t;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (e in s)
            t && e in t || _r(n.style, e, "");
        if (t)
          for (e in t)
            s && t[e] === s[e] || _r(n.style, e, t[e]);
      }
    else if (e[0] === "o" && e[1] === "n")
      o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in n ? e.toLowerCase().slice(2) : e.slice(2), n.l || (n.l = {}), n.l[e + o] = t, t ? s || n.addEventListener(e, o ? $r : Cr, o) : n.removeEventListener(e, o ? $r : Cr, o);
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
function Cr(n) {
  return this.l[n.type + !1](W.event ? W.event(n) : n);
}
function $r(n) {
  return this.l[n.type + !0](W.event ? W.event(n) : n);
}
function Jo(n, e, t, s, i, o, r, a, l, h) {
  var u, c, p, m, y, b, v, w, $, x, E, S, M, I, A, D = e.type;
  if (e.constructor !== void 0)
    return null;
  t.__h != null && (l = t.__h, a = e.__e = t.__e, e.__h = null, o = [a]), (u = W.__b) && u(e);
  try {
    t:
      if (typeof D == "function") {
        if (w = e.props, $ = (u = D.contextType) && s[u.__c], x = u ? $ ? $.props.value : u.__ : s, t.__c ? v = (c = e.__c = t.__c).__ = c.__E : ("prototype" in D && D.prototype.render ? e.__c = c = new D(w, x) : (e.__c = c = new H(w, x), c.constructor = D, c.render = Xc), $ && $.sub(c), c.props = w, c.state || (c.state = {}), c.context = x, c.__n = s, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), D.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Yt({}, c.__s)), Yt(c.__s, D.getDerivedStateFromProps(w, c.__s))), m = c.props, y = c.state, c.__v = e, p)
          D.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && w !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(w, x), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(w, c.__s, x) === !1 || e.__v === t.__v)) {
            for (e.__v !== t.__v && (c.props = w, c.state = c.__s, c.__d = !1), e.__e = t.__e, e.__k = t.__k, e.__k.forEach(function(B) {
              B && (B.__ = e);
            }), E = 0; E < c._sb.length; E++)
              c.__h.push(c._sb[E]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(w, c.__s, x), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, y, b);
          });
        }
        if (c.context = x, c.props = w, c.__P = n, c.__e = !1, S = W.__r, M = 0, "prototype" in D && D.prototype.render) {
          for (c.state = c.__s, c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), I = 0; I < c._sb.length; I++)
            c.__h.push(c._sb[I]);
          c._sb = [];
        } else
          do
            c.__d = !1, S && S(e), u = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++M < 25);
        c.state = c.__s, c.getChildContext != null && (s = Yt(Yt({}, s), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (b = c.getSnapshotBeforeUpdate(m, y)), ja(n, Zo(A = u != null && u.type === os && u.key == null ? u.props.children : u) ? A : [A], e, t, s, i, o, r, a, l, h), c.base = e.__e, e.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } else
        o == null && e.__v === t.__v ? (e.__k = t.__k, e.__e = t.__e) : e.__e = Gc(t.__e, e, t, s, i, o, r, l, h);
    (u = W.diffed) && u(e);
  } catch (B) {
    e.__v = null, (l || o != null) && (e.__e = a, e.__h = !!l, o[o.indexOf(a)] = null), W.__e(B, e, t);
  }
}
function qa(n, e, t) {
  for (var s = 0; s < t.length; s++)
    Qo(t[s], t[++s], t[++s]);
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
function Gc(n, e, t, s, i, o, r, a, l) {
  var h, u, c, p = t.props, m = e.props, y = e.type, b = 0;
  if (y === "svg" && (i = !0), o != null) {
    for (; b < o.length; b++)
      if ((h = o[b]) && "setAttribute" in h == !!y && (y ? h.localName === y : h.nodeType === 3)) {
        n = h, o[b] = null;
        break;
      }
  }
  if (n == null) {
    if (y === null)
      return document.createTextNode(m);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, m.is && m), o = null, a = !1;
  }
  if (y === null)
    p === m || a && n.data === m || (n.data = m);
  else {
    if (o = o && Zi.call(n.childNodes), u = (p = t.props || Te).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, b = 0; b < n.attributes.length; b++)
          p[n.attributes[b].name] = n.attributes[b].value;
      (c || u) && (c && (u && c.__html == u.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""));
    }
    if (Kc(n, m, p, i, a), c)
      e.__k = [];
    else if (ja(n, Zo(b = e.props.children) ? b : [b], e, t, s, i && y !== "foreignObject", o, r, o ? o[0] : t.__k && Dn(t, 0), a, l), o != null)
      for (b = o.length; b--; )
        o[b] != null && za(o[b]);
    a || ("value" in m && (b = m.value) !== void 0 && (b !== n.value || y === "progress" && !b || y === "option" && b !== p.value) && Ln(n, "value", b, p.value, !1), "checked" in m && (b = m.checked) !== void 0 && b !== n.checked && Ln(n, "checked", b, p.checked, !1));
  }
  return n;
}
function Qo(n, e, t) {
  try {
    typeof n == "function" ? n(e) : n.current = e;
  } catch (s) {
    W.__e(s, t);
  }
}
function Ya(n, e, t) {
  var s, i;
  if (W.unmount && W.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || Qo(s, null, e)), (s = n.__c) != null) {
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
      s[i] && Ya(s[i], e, t || typeof n.type != "function");
  t || n.__e == null || za(n.__e), n.__ = n.__e = n.__d = void 0;
}
function Xc(n, e, t) {
  return this.constructor(n, t);
}
function ds(n, e, t) {
  var s, i, o, r;
  W.__ && W.__(n, e), i = (s = typeof t == "function") ? null : t && t.__k || e.__k, o = [], r = [], Jo(e, n = (!s && t || e).__k = U(os, null, [n]), i || Te, Te, e.ownerSVGElement !== void 0, !s && t ? [t] : i ? null : e.firstChild ? Zi.call(e.childNodes) : null, o, !s && t ? t : i ? i.__e : e.firstChild, s, r), qa(o, n, r);
}
Zi = Wa.slice, W = { __e: function(n, e, t, s) {
  for (var i, o, r; e = e.__; )
    if ((i = e.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, Ha = 0, X = function(n) {
  return n != null && n.constructor === void 0;
}, H.prototype.setState = function(n, e) {
  var t;
  t = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Yt({}, this.state), typeof n == "function" && (n = n(Yt({}, t), this.props)), n && Yt(t, n), n != null && this.__v && (e && this._sb.push(e), vr(this));
}, H.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), vr(this));
}, H.prototype.render = os, se = [], Ba = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, yo = function(n, e) {
  return n.__v.__b - e.__v.__b;
}, Pn.__r = 0;
var Ka = function(n, e, t, s) {
  var i;
  e[0] = 0;
  for (var o = 1; o < e.length; o++) {
    var r = e[o++], a = e[o] ? (e[0] |= r ? 1 : 2, t[e[o++]]) : e[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[e[++o]] = a : r === 6 ? s[1][e[++o]] += a + "" : r ? (i = n.apply(a, Ka(n, a, t, ["", null])), s.push(i), a[0] ? e[0] |= 2 : (e[o - 2] = 0, e[o] = i)) : s.push(a);
  }
  return s;
}, xr = /* @__PURE__ */ new Map();
function Zc(n) {
  var e = xr.get(this);
  return e || (e = /* @__PURE__ */ new Map(), xr.set(this, e)), (e = Ka(this, e.get(n) || (e.set(n, e = function(t) {
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
const Zu = Zc.bind(U);
function Ga(n) {
  const { tagName: e = "div", className: t, style: s, children: i, attrs: o, forwardRef: r, ...a } = n;
  return U(e, { ref: r, class: N(t), style: s, ...a, ...o }, i);
}
var Jc = 0;
function f(n, e, t, s, i, o) {
  var r, a, l = {};
  for (a in e)
    a == "ref" ? r = e[a] : l[a] = e[a];
  var h = { type: n, props: l, key: t, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Jc, __source: i, __self: o };
  if (typeof n == "function" && (r = n.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return W.vnode && W.vnode(h), h;
}
var ys, bs, bo;
class dn extends H {
  constructor() {
    super(...arguments);
    _(this, bs);
    _(this, ys, K());
  }
  componentDidMount() {
    P(this, bs, bo).call(this);
  }
  componentDidUpdate(t) {
    this.props.html !== t.html && P(this, bs, bo).call(this);
  }
  render(t) {
    const { executeScript: s, html: i, ...o } = t;
    return /* @__PURE__ */ f(Ga, { forwardRef: g(this, ys), dangerouslySetInnerHTML: { __html: i }, ...o });
  }
}
ys = new WeakMap(), bs = new WeakSet(), bo = function() {
  this.props.executeScript && d(g(this, ys).current).runJS();
};
function Qc(n) {
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
  } = n, c = [t], p = { ...s }, m = [], y = [];
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
        /* @__PURE__ */ f("div", { className: N(w.className), style: w.style, dangerouslySetInnerHTML: { __html: w.html }, ...w.attrs ?? {} })
      ) : w.__html ? y.push(w.__html) : (w.style && Object.assign(p, w.style), w.className && c.push(w.className), w.children && m.push(w.children), w.attrs && Object.assign(u, w.attrs)) : m.push(w));
    });
  }), y.length && Object.assign(u, { dangerouslySetInnerHTML: { __html: y } }), [{
    className: N(c),
    style: p,
    ...u
  }, m];
}
function wo({
  tag: n = "div",
  ...e
}) {
  const [t, s] = Qc(e);
  return U(n, t, ...s);
}
function Xa(n, e, t) {
  return typeof n == "function" ? n.call(e, ...t) : Array.isArray(n) ? n.map((s) => Xa(s, e, t)) : X(n) || n === null ? n : typeof n == "object" ? n.html ? /* @__PURE__ */ f(dn, { ...n }) : /* @__PURE__ */ f(Ga, { ...n }) : n;
}
function rs(n) {
  const { content: e, generatorThis: t, generatorArgs: s } = n, i = Xa(e, t, s);
  return i == null || typeof i == "boolean" ? null : X(i) ? i : /* @__PURE__ */ f(os, { children: i });
}
const kr = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function tt(n) {
  const { icon: e, className: t, ...s } = n;
  if (!e)
    return null;
  if (X(e))
    return e;
  const i = ["icon", t];
  if (typeof e == "string")
    i.push(kr(e));
  else if (typeof e == "object") {
    const { className: o, icon: r, ...a } = e;
    i.push(o, r ? kr(r) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: N(i), ...s });
}
function th(n) {
  return this.getChildContext = () => n.context, n.children;
}
function eh(n) {
  const e = this, t = n._container;
  e.componentWillUnmount = function() {
    ds(null, e._temp), e._temp = null, e._container = null;
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
  }), ds(
    U(th, { context: e.context }, n._vnode),
    e._temp
  )) : e._temp && e.componentWillUnmount();
}
function sh(n, e) {
  const t = U(eh, { _vnode: n, _container: e });
  return t.containerInfo = e, t;
}
const Yn = class Yn {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(e, t) {
    this._inited = !1;
    const { KEY: s, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = d(e);
    if (l.data(s) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = d.guid++;
    if (this._gid = h, this._element = l[0], l.on("DOMNodeRemovedFromDocument", () => {
      this.destroy();
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(t), this._key = this.options.key ?? `__${h}`, l.data(s, this).attr(i, `${h}`), r) {
      const u = `${s}:ALL`;
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
Yn.DEFAULT = {}, Yn.MULTI_INSTANCE = !1;
let lt = Yn;
class F extends lt {
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
    ds(
      U(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(e)
      }),
      this.element
    );
  }
}
function nh({
  component: n = "div",
  className: e,
  children: t,
  style: s,
  attrs: i
}) {
  return U(n, {
    className: N(e),
    style: s,
    ...i
  }, t);
}
function Za({
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
  checked: y,
  onClick: b,
  data: v,
  ...w
}) {
  const $ = [
    typeof y == "boolean" ? /* @__PURE__ */ f("div", { class: `checkbox-primary${y ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
    /* @__PURE__ */ f(tt, { icon: h }),
    /* @__PURE__ */ f("span", { className: "text", children: u }),
    /* @__PURE__ */ f(rs, { content: i }),
    s,
    /* @__PURE__ */ f(tt, { icon: p })
  ];
  return U(e, {
    className: N(t, { disabled: a, active: l }),
    title: m,
    [e === "a" ? "href" : "data-url"]: r,
    [e === "a" ? "target" : "data-target"]: c,
    onClick: b,
    ...w,
    ...o
  }, ...$);
}
function ih({
  component: n = "div",
  className: e,
  text: t,
  attrs: s,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return U(n, {
    className: N(e),
    style: r,
    onClick: a,
    ...s
  }, t, /* @__PURE__ */ f(rs, { content: o }), i);
}
function oh({
  component: n = "div",
  className: e,
  style: t,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return U(n, {
    className: N(e),
    style: { width: s, height: s, flex: i, ...t },
    onClick: r,
    ...o
  }, a);
}
function rh({ type: n, ...e }) {
  return /* @__PURE__ */ f(wo, { ...e });
}
function Ja({
  component: n = "div",
  className: e,
  children: t,
  content: s,
  style: i,
  attrs: o
}) {
  return U(n, {
    className: N(e),
    style: i,
    ...o
  }, /* @__PURE__ */ f(rs, { content: s }), t);
}
var Mt;
let Ji = (Mt = class extends H {
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
        const b = o[t.type || "item"];
        if (b)
          return /* @__PURE__ */ f(b, { ...i });
      } else if (typeof o == "function") {
        const b = o.call(this, i, U);
        if (X(b))
          return b;
        typeof b == "object" && Object.assign(i, b);
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
    const y = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || Mt.ItemComponents[r] : a;
    return Object.assign(m, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), e.checkbox && r === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(y, {
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
      ...m
    } = e, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(y, { class: N(this.name, o), style: s, ...m, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, e)),
      a
    ] });
  }
}, Mt.ItemComponents = {
  divider: nh,
  item: Za,
  heading: ih,
  space: oh,
  custom: rh,
  basic: Ja
}, Mt.ROOT_TAG = "menu", Mt.NAME = "action-menu", Mt);
const Kn = class Kn extends F {
};
Kn.NAME = "ActionMenu", Kn.Component = Ji;
let Sr = Kn;
function ah({
  items: n,
  show: e,
  level: t,
  ...s
}) {
  return /* @__PURE__ */ f(Za, { ...s });
}
var ws, dt, Re, vs;
let tr = (vs = class extends Ji {
  constructor(t) {
    super(t);
    _(this, ws, /* @__PURE__ */ new Set());
    _(this, dt, void 0);
    _(this, Re, (t, s, i) => {
      d(i.target).closest(".not-nested-toggle").length || (this.toggle(t, s), i.preventDefault());
    });
    C(this, dt, t.nestedShow === void 0), g(this, dt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
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
      nestedShow: g(this, dt) ? this.state.nestedShow : o,
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
    g(this, ws).add(r);
    const a = this.isExpanded(r);
    if (a && (o.rootChildren = [
      o.rootChildren,
      this.renderNestedMenu(s)
    ]), this.nestedTrigger === "hover")
      o.rootAttrs = {
        ...o.rootAttrs,
        onMouseEnter: g(this, Re).bind(this, r, !0),
        onMouseLeave: g(this, Re).bind(this, r, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: h } = o;
      o.onClick = (u) => {
        g(this, Re).call(this, r, void 0, u), h == null || h(u);
      };
    }
    const l = this.renderToggleIcon(a, o);
    return l && (o.children = [o.children, l]), o.show = a, o.rootClass = [o.rootClass, "has-nested-menu", a ? "show" : ""], o;
  }
  isExpanded(t) {
    const s = g(this, dt) ? this.state.nestedShow : this.props.nestedShow;
    return s && typeof s == "object" ? s[t] : !!s;
  }
  toggle(t, s) {
    const { controlledMenu: i } = this.props;
    if (i)
      return i.toggle(t, s);
    if (!g(this, dt))
      return !1;
    let { nestedShow: o = {} } = this.state;
    if (typeof o == "boolean" && (o === !0 ? o = [...g(this, ws).values()].reduce((r, a) => (r[a] = !0, r), {}) : o = {}), s === void 0)
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
    g(this, dt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    g(this, dt) && this.setState({ nestedShow: !1 });
  }
}, ws = new WeakMap(), dt = new WeakMap(), Re = new WeakMap(), vs.ItemComponents = {
  item: ah
}, vs);
const Gn = class Gn extends F {
};
Gn.NAME = "ActionMenuNested", Gn.Component = tr;
let Er = Gn;
var _s;
let ve = (_s = class extends tr {
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
}, _s.NAME = "menu", _s);
const Xn = class Xn extends F {
};
Xn.NAME = "Menu", Xn.Component = ve;
let Tr = Xn;
class Q extends H {
  render() {
    const {
      component: e,
      type: t,
      btnType: s,
      size: i,
      className: o,
      children: r,
      url: a,
      target: l,
      disabled: h,
      active: u,
      loading: c,
      loadingIcon: p,
      loadingText: m,
      icon: y,
      text: b,
      trailingIcon: v,
      caret: w,
      square: $,
      rounded: x = !0,
      hint: E,
      ...S
    } = this.props, M = e || (a ? "a" : "button"), I = b == null || typeof b == "string" && !b.length || c && !m, A = w && I && !y && !v && !r && !c;
    return U(
      M,
      {
        className: N("btn", t, o, {
          "btn-caret": A,
          disabled: h || c,
          active: u,
          loading: c,
          square: $ === void 0 ? !A && !r && I : $
        }, i ? `size-${i}` : "", typeof x == "string" ? x : { rounded: x }),
        title: E,
        [M === "a" ? "href" : "data-url"]: a,
        [M === "a" ? "target" : "data-target"]: l,
        type: M === "button" ? s : void 0,
        ...S
      },
      c ? /* @__PURE__ */ f(tt, { icon: p || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(tt, { icon: y }),
      I ? null : /* @__PURE__ */ f("span", { className: "text", children: c ? m : b }),
      c ? null : r,
      c ? null : /* @__PURE__ */ f(tt, { icon: v }),
      c ? null : w ? /* @__PURE__ */ f("span", { className: typeof w == "string" ? `caret-${w}` : "caret" }) : null
    );
  }
}
function lh({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(Q, { type: t, ...s });
}
function fn(n) {
  return n.split("-")[1];
}
function er(n) {
  return n === "y" ? "height" : "width";
}
function ge(n) {
  return n.split("-")[0];
}
function pn(n) {
  return ["top", "bottom"].includes(ge(n)) ? "x" : "y";
}
function Nr(n, e, t) {
  let { reference: s, floating: i } = n;
  const o = s.x + s.width / 2 - i.width / 2, r = s.y + s.height / 2 - i.height / 2, a = pn(e), l = er(a), h = s[l] / 2 - i[l] / 2, u = a === "x";
  let c;
  switch (ge(e)) {
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
  switch (fn(e)) {
    case "start":
      c[a] -= h * (t && u ? -1 : 1);
      break;
    case "end":
      c[a] += h * (t && u ? -1 : 1);
  }
  return c;
}
const ch = async (n, e, t) => {
  const { placement: s = "bottom", strategy: i = "absolute", middleware: o = [], platform: r } = t, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(e));
  let h = await r.getElementRects({ reference: n, floating: e, strategy: i }), { x: u, y: c } = Nr(h, s, l), p = s, m = {}, y = 0;
  for (let b = 0; b < a.length; b++) {
    const { name: v, fn: w } = a[b], { x: $, y: x, data: E, reset: S } = await w({ x: u, y: c, initialPlacement: s, placement: p, strategy: i, middlewareData: m, rects: h, platform: r, elements: { reference: n, floating: e } });
    u = $ ?? u, c = x ?? c, m = { ...m, [v]: { ...m[v], ...E } }, S && y <= 50 && (y++, typeof S == "object" && (S.placement && (p = S.placement), S.rects && (h = S.rects === !0 ? await r.getElementRects({ reference: n, floating: e, strategy: i }) : S.rects), { x: u, y: c } = Nr(h, p, l)), b = -1);
  }
  return { x: u, y: c, placement: p, strategy: i, middlewareData: m };
};
function mn(n, e) {
  return typeof n == "function" ? n(e) : n;
}
function Qa(n) {
  return typeof n != "number" ? function(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
  }(n) : { top: n, right: n, bottom: n, left: n };
}
function On(n) {
  return { ...n, top: n.y, left: n.x, right: n.x + n.width, bottom: n.y + n.height };
}
async function tl(n, e) {
  var t;
  e === void 0 && (e = {});
  const { x: s, y: i, platform: o, rects: r, elements: a, strategy: l } = n, { boundary: h = "clippingAncestors", rootBoundary: u = "viewport", elementContext: c = "floating", altBoundary: p = !1, padding: m = 0 } = mn(e, n), y = Qa(m), b = a[p ? c === "floating" ? "reference" : "floating" : c], v = On(await o.getClippingRect({ element: (t = await (o.isElement == null ? void 0 : o.isElement(b))) == null || t ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)), boundary: h, rootBoundary: u, strategy: l })), w = c === "floating" ? { ...r.floating, x: s, y: i } : r.reference, $ = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), x = await (o.isElement == null ? void 0 : o.isElement($)) && await (o.getScale == null ? void 0 : o.getScale($)) || { x: 1, y: 1 }, E = On(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({ rect: w, offsetParent: $, strategy: l }) : w);
  return { top: (v.top - E.top + y.top) / x.y, bottom: (E.bottom - v.bottom + y.bottom) / x.y, left: (v.left - E.left + y.left) / x.x, right: (E.right - v.right + y.right) / x.x };
}
const vo = Math.min, hh = Math.max;
function _o(n, e, t) {
  return hh(n, vo(e, t));
}
const Hn = (n) => ({ name: "arrow", options: n, async fn(e) {
  const { x: t, y: s, placement: i, rects: o, platform: r, elements: a } = e, { element: l, padding: h = 0 } = mn(n, e) || {};
  if (l == null)
    return {};
  const u = Qa(h), c = { x: t, y: s }, p = pn(i), m = er(p), y = await r.getDimensions(l), b = p === "y", v = b ? "top" : "left", w = b ? "bottom" : "right", $ = b ? "clientHeight" : "clientWidth", x = o.reference[m] + o.reference[p] - c[p] - o.floating[m], E = c[p] - o.reference[p], S = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
  let M = S ? S[$] : 0;
  M && await (r.isElement == null ? void 0 : r.isElement(S)) || (M = a.floating[$] || o.floating[m]);
  const I = x / 2 - E / 2, A = M / 2 - y[m] / 2 - 1, D = vo(u[v], A), B = vo(u[w], A), L = D, R = M - y[m] - B, T = M / 2 - y[m] / 2 + I, O = _o(L, T, R), z = fn(i) != null && T != O && o.reference[m] / 2 - (T < L ? D : B) - y[m] / 2 < 0 ? T < L ? L - T : R - T : 0;
  return { [p]: c[p] - z, data: { [p]: O, centerOffset: T - O + z } };
} }), uh = ["top", "right", "bottom", "left"];
uh.reduce((n, e) => n.concat(e, e + "-start", e + "-end"), []);
const dh = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Bn(n) {
  return n.replace(/left|right|bottom|top/g, (e) => dh[e]);
}
function fh(n, e, t) {
  t === void 0 && (t = !1);
  const s = fn(n), i = pn(n), o = er(i);
  let r = i === "x" ? s === (t ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (r = Bn(r)), { main: r, cross: Bn(r) };
}
const ph = { start: "end", end: "start" };
function ro(n) {
  return n.replace(/start|end/g, (e) => ph[e]);
}
const gn = function(n) {
  return n === void 0 && (n = {}), { name: "flip", options: n, async fn(e) {
    var t;
    const { placement: s, middlewareData: i, rects: o, initialPlacement: r, platform: a, elements: l } = e, { mainAxis: h = !0, crossAxis: u = !0, fallbackPlacements: c, fallbackStrategy: p = "bestFit", fallbackAxisSideDirection: m = "none", flipAlignment: y = !0, ...b } = mn(n, e), v = ge(s), w = ge(r) === r, $ = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), x = c || (w || !y ? [Bn(r)] : function(L) {
      const R = Bn(L);
      return [ro(L), R, ro(R)];
    }(r));
    c || m === "none" || x.push(...function(L, R, T, O) {
      const z = fn(L);
      let j = function(ot, as, Kl) {
        const hr = ["left", "right"], ur = ["right", "left"], Gl = ["top", "bottom"], Xl = ["bottom", "top"];
        switch (ot) {
          case "top":
          case "bottom":
            return Kl ? as ? ur : hr : as ? hr : ur;
          case "left":
          case "right":
            return as ? Gl : Xl;
          default:
            return [];
        }
      }(ge(L), T === "start", O);
      return z && (j = j.map((ot) => ot + "-" + z), R && (j = j.concat(j.map(ro)))), j;
    }(r, y, m, $));
    const E = [r, ...x], S = await tl(e, b), M = [];
    let I = ((t = i.flip) == null ? void 0 : t.overflows) || [];
    if (h && M.push(S[v]), u) {
      const { main: L, cross: R } = fh(s, o, $);
      M.push(S[L], S[R]);
    }
    if (I = [...I, { placement: s, overflows: M }], !M.every((L) => L <= 0)) {
      var A, D;
      const L = (((A = i.flip) == null ? void 0 : A.index) || 0) + 1, R = E[L];
      if (R)
        return { data: { index: L, overflows: I }, reset: { placement: R } };
      let T = (D = I.filter((O) => O.overflows[0] <= 0).sort((O, z) => O.overflows[1] - z.overflows[1])[0]) == null ? void 0 : D.placement;
      if (!T)
        switch (p) {
          case "bestFit": {
            var B;
            const O = (B = I.map((z) => [z.placement, z.overflows.filter((j) => j > 0).reduce((j, ot) => j + ot, 0)]).sort((z, j) => z[1] - j[1])[0]) == null ? void 0 : B[0];
            O && (T = O);
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
}, yn = function(n) {
  return n === void 0 && (n = 0), { name: "offset", options: n, async fn(e) {
    const { x: t, y: s } = e, i = await async function(o, r) {
      const { placement: a, platform: l, elements: h } = o, u = await (l.isRTL == null ? void 0 : l.isRTL(h.floating)), c = ge(a), p = fn(a), m = pn(a) === "x", y = ["left", "top"].includes(c) ? -1 : 1, b = u && m ? -1 : 1, v = mn(r, o);
      let { mainAxis: w, crossAxis: $, alignmentAxis: x } = typeof v == "number" ? { mainAxis: v, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...v };
      return p && typeof x == "number" && ($ = p === "end" ? -1 * x : x), m ? { x: $ * b, y: w * y } : { x: w * y, y: $ * b };
    }(e, n);
    return { x: t + i.x, y: s + i.y, data: i };
  } };
};
function mh(n) {
  return n === "x" ? "y" : "x";
}
const fs = function(n) {
  return n === void 0 && (n = {}), { name: "shift", options: n, async fn(e) {
    const { x: t, y: s, placement: i } = e, { mainAxis: o = !0, crossAxis: r = !1, limiter: a = { fn: (v) => {
      let { x: w, y: $ } = v;
      return { x: w, y: $ };
    } }, ...l } = mn(n, e), h = { x: t, y: s }, u = await tl(e, l), c = pn(ge(i)), p = mh(c);
    let m = h[c], y = h[p];
    if (o) {
      const v = c === "y" ? "bottom" : "right";
      m = _o(m + u[c === "y" ? "top" : "left"], m, m - u[v]);
    }
    if (r) {
      const v = p === "y" ? "bottom" : "right";
      y = _o(y + u[p === "y" ? "top" : "left"], y, y - u[v]);
    }
    const b = a.fn({ ...e, [c]: m, [p]: y });
    return { ...b, data: { x: b.x - t, y: b.y - s } };
  } };
};
function nt(n) {
  var e;
  return (n == null || (e = n.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function $t(n) {
  return nt(n).getComputedStyle(n);
}
function el(n) {
  return n instanceof nt(n).Node;
}
function Zt(n) {
  return el(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ct(n) {
  return n instanceof HTMLElement || n instanceof nt(n).HTMLElement;
}
function Mr(n) {
  return typeof ShadowRoot < "u" && (n instanceof nt(n).ShadowRoot || n instanceof ShadowRoot);
}
function ps(n) {
  const { overflow: e, overflowX: t, overflowY: s, display: i } = $t(n);
  return /auto|scroll|overlay|hidden|clip/.test(e + s + t) && !["inline", "contents"].includes(i);
}
function gh(n) {
  return ["table", "td", "th"].includes(Zt(n));
}
function Co(n) {
  const e = sr(), t = $t(n);
  return t.transform !== "none" || t.perspective !== "none" || !!t.containerType && t.containerType !== "normal" || !e && !!t.backdropFilter && t.backdropFilter !== "none" || !e && !!t.filter && t.filter !== "none" || ["transform", "perspective", "filter"].some((s) => (t.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (t.contain || "").includes(s));
}
function sr() {
  return !(typeof CSS > "u" || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none");
}
function Qi(n) {
  return ["html", "body", "#document"].includes(Zt(n));
}
const $o = Math.min, Ne = Math.max, Wn = Math.round, vn = Math.floor, Jt = (n) => ({ x: n, y: n });
function sl(n) {
  const e = $t(n);
  let t = parseFloat(e.width) || 0, s = parseFloat(e.height) || 0;
  const i = ct(n), o = i ? n.offsetWidth : t, r = i ? n.offsetHeight : s, a = Wn(t) !== o || Wn(s) !== r;
  return a && (t = o, s = r), { width: t, height: s, $: a };
}
function Rt(n) {
  return n instanceof Element || n instanceof nt(n).Element;
}
function nr(n) {
  return Rt(n) ? n : n.contextElement;
}
function Me(n) {
  const e = nr(n);
  if (!ct(e))
    return Jt(1);
  const t = e.getBoundingClientRect(), { width: s, height: i, $: o } = sl(e);
  let r = (o ? Wn(t.width) : t.width) / s, a = (o ? Wn(t.height) : t.height) / i;
  return r && Number.isFinite(r) || (r = 1), a && Number.isFinite(a) || (a = 1), { x: r, y: a };
}
const yh = Jt(0);
function nl(n) {
  const e = nt(n);
  return sr() && e.visualViewport ? { x: e.visualViewport.offsetLeft, y: e.visualViewport.offsetTop } : yh;
}
function _e(n, e, t, s) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  const i = n.getBoundingClientRect(), o = nr(n);
  let r = Jt(1);
  e && (s ? Rt(s) && (r = Me(s)) : r = Me(n));
  const a = function(p, m, y) {
    return m === void 0 && (m = !1), !(!y || m && y !== nt(p)) && m;
  }(o, t, s) ? nl(o) : Jt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, u = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = nt(o), m = s && Rt(s) ? nt(s) : s;
    let y = p.frameElement;
    for (; y && s && m !== p; ) {
      const b = Me(y), v = y.getBoundingClientRect(), w = getComputedStyle(y), $ = v.left + (y.clientLeft + parseFloat(w.paddingLeft)) * b.x, x = v.top + (y.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, h *= b.y, u *= b.x, c *= b.y, l += $, h += x, y = nt(y).frameElement;
    }
  }
  return On({ width: u, height: c, x: l, y: h });
}
function to(n) {
  return Rt(n) ? { scrollLeft: n.scrollLeft, scrollTop: n.scrollTop } : { scrollLeft: n.pageXOffset, scrollTop: n.pageYOffset };
}
function It(n) {
  var e;
  return (e = (el(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : e.documentElement;
}
function il(n) {
  return _e(It(n)).left + to(n).scrollLeft;
}
function es(n) {
  if (Zt(n) === "html")
    return n;
  const e = n.assignedSlot || n.parentNode || Mr(n) && n.host || It(n);
  return Mr(e) ? e.host : e;
}
function ol(n) {
  const e = es(n);
  return Qi(e) ? n.ownerDocument ? n.ownerDocument.body : n.body : ct(e) && ps(e) ? e : ol(e);
}
function zn(n, e) {
  var t;
  e === void 0 && (e = []);
  const s = ol(n), i = s === ((t = n.ownerDocument) == null ? void 0 : t.body), o = nt(s);
  return i ? e.concat(o, o.visualViewport || [], ps(s) ? s : []) : e.concat(s, zn(s));
}
function Rr(n, e, t) {
  let s;
  if (e === "viewport")
    s = function(i, o) {
      const r = nt(i), a = It(i), l = r.visualViewport;
      let h = a.clientWidth, u = a.clientHeight, c = 0, p = 0;
      if (l) {
        h = l.width, u = l.height;
        const m = sr();
        (!m || m && o === "fixed") && (c = l.offsetLeft, p = l.offsetTop);
      }
      return { width: h, height: u, x: c, y: p };
    }(n, t);
  else if (e === "document")
    s = function(i) {
      const o = It(i), r = to(i), a = i.ownerDocument.body, l = Ne(o.scrollWidth, o.clientWidth, a.scrollWidth, a.clientWidth), h = Ne(o.scrollHeight, o.clientHeight, a.scrollHeight, a.clientHeight);
      let u = -r.scrollLeft + il(i);
      const c = -r.scrollTop;
      return $t(a).direction === "rtl" && (u += Ne(o.clientWidth, a.clientWidth) - l), { width: l, height: h, x: u, y: c };
    }(It(n));
  else if (Rt(e))
    s = function(i, o) {
      const r = _e(i, !0, o === "fixed"), a = r.top + i.clientTop, l = r.left + i.clientLeft, h = ct(i) ? Me(i) : Jt(1);
      return { width: i.clientWidth * h.x, height: i.clientHeight * h.y, x: l * h.x, y: a * h.y };
    }(e, t);
  else {
    const i = nl(n);
    s = { ...e, x: e.x - i.x, y: e.y - i.y };
  }
  return On(s);
}
function rl(n, e) {
  const t = es(n);
  return !(t === e || !Rt(t) || Qi(t)) && ($t(t).position === "fixed" || rl(t, e));
}
function bh(n, e, t) {
  const s = ct(e), i = It(e), o = t === "fixed", r = _e(n, !0, o, e);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = Jt(0);
  if (s || !s && !o)
    if ((Zt(e) !== "body" || ps(i)) && (a = to(e)), ct(e)) {
      const h = _e(e, !0, o, e);
      l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
    } else
      i && (l.x = il(i));
  return { x: r.left + a.scrollLeft - l.x, y: r.top + a.scrollTop - l.y, width: r.width, height: r.height };
}
function Ir(n, e) {
  return ct(n) && $t(n).position !== "fixed" ? e ? e(n) : n.offsetParent : null;
}
function Ar(n, e) {
  const t = nt(n);
  if (!ct(n))
    return t;
  let s = Ir(n, e);
  for (; s && gh(s) && $t(s).position === "static"; )
    s = Ir(s, e);
  return s && (Zt(s) === "html" || Zt(s) === "body" && $t(s).position === "static" && !Co(s)) ? t : s || function(i) {
    let o = es(i);
    for (; ct(o) && !Qi(o); ) {
      if (Co(o))
        return o;
      o = es(o);
    }
    return null;
  }(n) || t;
}
const wh = { convertOffsetParentRelativeRectToViewportRelativeRect: function(n) {
  let { rect: e, offsetParent: t, strategy: s } = n;
  const i = ct(t), o = It(t);
  if (t === o)
    return e;
  let r = { scrollLeft: 0, scrollTop: 0 }, a = Jt(1);
  const l = Jt(0);
  if ((i || !i && s !== "fixed") && ((Zt(t) !== "body" || ps(o)) && (r = to(t)), ct(t))) {
    const h = _e(t);
    a = Me(t), l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
  }
  return { width: e.width * a.x, height: e.height * a.y, x: e.x * a.x - r.scrollLeft * a.x + l.x, y: e.y * a.y - r.scrollTop * a.y + l.y };
}, getDocumentElement: It, getClippingRect: function(n) {
  let { element: e, boundary: t, rootBoundary: s, strategy: i } = n;
  const o = [...t === "clippingAncestors" ? function(l, h) {
    const u = h.get(l);
    if (u)
      return u;
    let c = zn(l).filter((b) => Rt(b) && Zt(b) !== "body"), p = null;
    const m = $t(l).position === "fixed";
    let y = m ? es(l) : l;
    for (; Rt(y) && !Qi(y); ) {
      const b = $t(y), v = Co(y);
      v || b.position !== "fixed" || (p = null), (m ? !v && !p : !v && b.position === "static" && p && ["absolute", "fixed"].includes(p.position) || ps(y) && !v && rl(l, y)) ? c = c.filter((w) => w !== y) : p = b, y = es(y);
    }
    return h.set(l, c), c;
  }(e, this._c) : [].concat(t), s], r = o[0], a = o.reduce((l, h) => {
    const u = Rr(e, h, i);
    return l.top = Ne(u.top, l.top), l.right = $o(u.right, l.right), l.bottom = $o(u.bottom, l.bottom), l.left = Ne(u.left, l.left), l;
  }, Rr(e, r, i));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}, getOffsetParent: Ar, getElementRects: async function(n) {
  let { reference: e, floating: t, strategy: s } = n;
  const i = this.getOffsetParent || Ar, o = this.getDimensions;
  return { reference: bh(e, await i(t), s), floating: { x: 0, y: 0, ...await o(t) } };
}, getClientRects: function(n) {
  return Array.from(n.getClientRects());
}, getDimensions: function(n) {
  return sl(n);
}, getScale: Me, isElement: Rt, isRTL: function(n) {
  return getComputedStyle(n).direction === "rtl";
} };
function eo(n, e, t, s) {
  s === void 0 && (s = {});
  const { ancestorScroll: i = !0, ancestorResize: o = !0, elementResize: r = typeof ResizeObserver == "function", layoutShift: a = typeof IntersectionObserver == "function", animationFrame: l = !1 } = s, h = nr(n), u = i || o ? [...h ? zn(h) : [], ...zn(e)] : [];
  u.forEach((v) => {
    i && v.addEventListener("scroll", t, { passive: !0 }), o && v.addEventListener("resize", t);
  });
  const c = h && a ? function(v, w) {
    let $, x = null;
    const E = It(v);
    function S() {
      clearTimeout($), x && x.disconnect(), x = null;
    }
    return function M(I, A) {
      I === void 0 && (I = !1), A === void 0 && (A = 1), S();
      const { left: D, top: B, width: L, height: R } = v.getBoundingClientRect();
      if (I || w(), !L || !R)
        return;
      const T = { rootMargin: -vn(B) + "px " + -vn(E.clientWidth - (D + L)) + "px " + -vn(E.clientHeight - (B + R)) + "px " + -vn(D) + "px", threshold: Ne(0, $o(1, A)) || 1 };
      let O = !0;
      function z(j) {
        const ot = j[0].intersectionRatio;
        if (ot !== A) {
          if (!O)
            return M();
          ot ? M(!1, ot) : $ = setTimeout(() => {
            M(!1, 1e-7);
          }, 100);
        }
        O = !1;
      }
      try {
        x = new IntersectionObserver(z, { ...T, root: E.ownerDocument });
      } catch {
        x = new IntersectionObserver(z, T);
      }
      x.observe(v);
    }(!0), S;
  }(h, t) : null;
  let p, m = -1, y = null;
  r && (y = new ResizeObserver((v) => {
    let [w] = v;
    w && w.target === h && y && (y.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame(() => {
      y && y.observe(e);
    })), t();
  }), h && !l && y.observe(h), y.observe(e));
  let b = l ? _e(n) : null;
  return l && function v() {
    const w = _e(n);
    !b || w.x === b.x && w.y === b.y && w.width === b.width && w.height === b.height || t(), b = w, p = requestAnimationFrame(v);
  }(), t(), () => {
    u.forEach((v) => {
      i && v.removeEventListener("scroll", t), o && v.removeEventListener("resize", t);
    }), c && c(), y && y.disconnect(), y = null, l && cancelAnimationFrame(p);
  };
}
const bn = (n, e, t) => {
  const s = /* @__PURE__ */ new Map(), i = { platform: wh, ...t }, o = { ...i.platform, _c: s };
  return ch(n, e, { ...i, platform: o });
};
var Ie, Cs;
let vh = (Cs = class extends ve {
  constructor() {
    super(...arguments);
    _(this, Ie, 0);
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
    const t = this.ref.current, s = t == null ? void 0 : t.parentElement;
    !t || !s || bn(s, t, {
      placement: "right-start",
      middleware: [gn(), fs(), yn(1)]
    }).then(({ x: i, y: o }) => {
      d(t).css({
        left: i,
        top: o
      });
    });
  }
  getNestedMenuProps(t) {
    const s = super.getNestedMenuProps(t);
    return {
      ...s,
      className: N("absolute", s.className),
      popup: !0
    };
  }
  afterRender(t) {
    super.afterRender(t), this.props.controlledMenu && (this.layout(), C(this, Ie, window.setTimeout(this.layout.bind(this), 100)));
  }
  renderToggleIcon() {
    return /* @__PURE__ */ f("span", { class: "contextmenu-toggle-icon caret-right" });
  }
  componentWillUnmount() {
    super.componentWillUnmount(), g(this, Ie) && clearTimeout(g(this, Ie));
  }
}, Ie = new WeakMap(), Cs.defaultProps = {
  ...ve.defaultProps,
  popup: !0
}, Cs);
const ao = "show", _h = '[data-toggle="contextmenu"]';
var kt, Ae, $s, xs, Zn, al, Jn, ll;
const ke = class ke extends lt {
  constructor() {
    super(...arguments);
    _(this, Zn);
    _(this, Jn);
    _(this, kt, void 0);
    _(this, Ae, void 0);
    _(this, $s, void 0);
    _(this, xs, void 0);
  }
  get isShown() {
    return g(this, kt) && d(g(this, kt)).hasClass(ao);
  }
  get menu() {
    return g(this, kt) || this.ensureMenu();
  }
  get trigger() {
    return g(this, $s) || this.element;
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
    return this.isShown || (C(this, $s, t), this.emit("show", this.trigger).defaultPrevented) || this.isDynamic && !this.renderMenu() ? !1 : (d(this.menu).addClass(ao), this.createPopper(), this.emit("shown"), !0);
  }
  hide() {
    var s;
    return !this.isShown || ((s = g(this, xs)) == null || s.call(this), this.emit("hide").defaultPrevented) ? !1 : (d(g(this, kt)).removeClass(ao), this.emit("hidden"), !0);
  }
  toggle(t) {
    return this.isShown ? this.hide() : this.show(t);
  }
  destroy() {
    var t;
    super.destroy(), this.hide(), (t = g(this, kt)) == null || t.remove();
  }
  ensureMenu() {
    const { $element: t } = this, s = this.constructor.MENU_CLASS;
    let i;
    if (this.isDynamic)
      i = d(`<div class="${s}" />`).appendTo("body");
    else if (t.length) {
      const o = t.attr("href") || t.dataset("target") || "";
      if (o[0] === "#" && (i = d(document).find(o)), !(i != null && i.length)) {
        const r = t.next();
        r.hasClass(s) ? i = r : i = t.parent().find(`.${s}`);
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
    }), C(this, kt, i[0]), i[0];
  }
  getPopperOptions() {
    var o;
    const { placement: t, strategy: s } = this.options, i = {
      middleware: [],
      placement: t,
      strategy: s
    };
    return this.options.flip && ((o = i.middleware) == null || o.push(gn())), i;
  }
  createPopper() {
    const t = this.getPopperOptions(), s = this.getPopperElement(), i = this.menu;
    C(this, xs, eo(s, i, () => {
      bn(s, i, t).then(({ x: o, y: r, middlewareData: a, placement: l }) => {
        if (d(i).css({ left: o, top: r }), a.arrow && this.arrowEl) {
          const h = l.split("-")[0], u = P(this, Zn, al).call(this, h), { x: c, y: p } = a.arrow;
          d(this.arrowEl).css({
            left: c != null ? `${c}px` : "",
            top: p != null ? `${p}px` : "",
            [u]: `${-this.arrowEl.offsetWidth / 2}px`,
            background: "inherit",
            border: "inherit",
            ...P(this, Jn, ll).call(this, h)
          });
        }
      });
    }));
  }
  getMenuOptions() {
    const { menu: t, items: s } = this.options;
    let i = s || (t == null ? void 0 : t.items);
    if (i)
      return typeof i == "function" && (i = i(this)), {
        nestedTrigger: "hover",
        ...t,
        items: i
      };
  }
  renderMenu() {
    const t = this.getMenuOptions();
    return !t || this.emit("updateMenu", t, this.trigger).defaultPrevented ? !1 : (ds(U(vh, t), this.menu), !0);
  }
  getPopperElement() {
    return g(this, Ae) || C(this, Ae, {
      getBoundingClientRect: () => {
        const { trigger: t } = this;
        if (t instanceof MouseEvent) {
          const { clientX: s, clientY: i } = t;
          return {
            width: 0,
            height: 0,
            top: i,
            right: s,
            bottom: i,
            left: s
          };
        }
        return t instanceof HTMLElement ? t.getBoundingClientRect() : t;
      },
      contextElement: this.element
    }), g(this, Ae);
  }
  static clear(t) {
    var l, h;
    t instanceof Event && (t = { event: t });
    const { event: s, exclude: i, ignoreSelector: o = ".not-hide-menu" } = t || {};
    if (s && o && ((h = (l = s.target).closest) != null && h.call(l, o)) || s && s.button === 2)
      return;
    const r = this.getAll(), a = new Set(i || []);
    for (const u of r)
      a.has(u.element) || u.hide();
  }
  static show(t) {
    const { event: s, ...i } = t, o = this.ensure(document.body);
    return o.setOptions(i), o.show(s), s instanceof Event && s.stopPropagation(), o;
  }
  static hide(t) {
    const s = this.query(t);
    return s == null || s.hide(), s;
  }
};
kt = new WeakMap(), Ae = new WeakMap(), $s = new WeakMap(), xs = new WeakMap(), Zn = new WeakSet(), al = function(t) {
  return {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[t];
}, Jn = new WeakSet(), ll = function(t) {
  const s = {
    bottom: "Right",
    top: "Left",
    left: "Bottom",
    right: "Top"
  };
  return {
    [`border${t[0].toUpperCase()}${t.substring(1)}Style`]: "none",
    [`border${s[t]}Style`]: "none"
  };
}, ke.MENU_CLASS = "contextmenu", ke.NAME = "ContextMenu", ke.MULTI_INSTANCE = !0, ke.DEFAULT = {
  placement: "bottom-start",
  strategy: "absolute",
  flip: !0,
  preventOverflow: !0,
  destoryOnHide: !0
};
let rt = ke;
d(document).on(`contextmenu${rt.NAMESPACE}`, (n) => {
  const e = d(n.target);
  if (e.closest(`.${rt.MENU_CLASS}`).length)
    return;
  const t = e.closest(_h).not(":disabled,.disabled");
  if (t.length) {
    const s = `${rt.KEY}:options`, i = t.data(s), o = rt.ensure(t, i);
    i || t.data(s, o.options), o.show(n), n.preventDefault();
  }
}).on(`click${rt.NAMESPACE}`, rt.clear.bind(rt));
const Dr = '[data-toggle="dropdown"]';
var oe, re, De, Qn, cl;
const Se = class Se extends rt {
  constructor() {
    super(...arguments);
    _(this, Qn);
    _(this, oe, void 0);
    _(this, re, void 0);
    _(this, De, void 0);
    C(this, oe, !1), C(this, re, 0), this.hideLater = () => {
      g(this, De).call(this), C(this, re, window.setTimeout(this.hide.bind(this), 100));
    }, C(this, De, () => {
      clearTimeout(g(this, re)), C(this, re, 0);
    });
  }
  get isHover() {
    return this.options.trigger === "hover";
  }
  get elementShowClass() {
    return `with-${this.constructor.NAME}-show`;
  }
  show(t, s) {
    (s == null ? void 0 : s.clearOthers) !== !1 && Se.clear({ event: s == null ? void 0 : s.event, exclude: [this.element] });
    const i = super.show(t);
    return i && (!g(this, oe) && this.isHover && P(this, Qn, cl).call(this), this.$element.addClass(this.elementShowClass)), i;
  }
  hide() {
    const t = super.hide();
    return t && this.$element.removeClass(this.elementShowClass), t;
  }
  toggle(t, s) {
    return this.isShown ? this.hide() : this.show(t, { event: t, ...s });
  }
  destroy() {
    g(this, oe) && d(this.menu).off(this.constructor.NAMESPACE), super.destroy();
  }
  getArrowSize() {
    const { arrow: t } = this.options;
    return t ? typeof t == "number" ? t : 8 : 0;
  }
  getPopperOptions() {
    var i, o;
    const t = super.getPopperOptions(), s = this.getArrowSize();
    return s && this.arrowEl && ((i = t.middleware) == null || i.push(yn(s)), (o = t.middleware) == null || o.push(Hn({ element: this.arrowEl }))), t;
  }
  ensureMenu() {
    const t = super.ensureMenu();
    if (this.options.arrow) {
      const s = this.getArrowSize(), i = d('<div class="arrow-el" />').css({
        position: "absolute",
        width: `${s}px`,
        height: `${s}px`,
        transform: "rotate(45deg)"
      });
      this.arrowEl = i[0];
    }
    return t;
  }
  getMenuOptions() {
    const t = super.getMenuOptions();
    if (t && this.options.arrow) {
      const { afterRender: s } = t;
      t.afterRender = (...i) => {
        this.arrowEl && d(this.menu).find(".menu").each((o, r) => {
          d(r).find(".arrow-el").length === 0 && d(r).parent().hasClass("dropdown-menu") && d(r).append(this.arrowEl);
        }), s == null || s(...i);
      };
    }
    return t;
  }
};
oe = new WeakMap(), re = new WeakMap(), De = new WeakMap(), Qn = new WeakSet(), cl = function() {
  d(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, g(this, De)).on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater), this.on("mouseleave", this.hideLater), C(this, oe, !0);
}, Se.MENU_CLASS = "dropdown-menu", Se.NAME = "Dropdown", Se.DEFAULT = {
  ...rt.DEFAULT,
  trigger: "click"
};
let Xt = Se;
const _n = `${Xt.KEY}:options`;
d(document).on("click", function(n) {
  const e = d(n.target).closest(Dr).not(":disabled,.disabled");
  if (!e.length) {
    Xt.clear({ event: n });
    return;
  }
  const t = e.data(_n), s = Xt.ensure(e, t);
  t || e.data(_n, s.options), s.options.trigger === "click" && s.toggle();
}).on("mouseover", function(n) {
  const e = d(n.target).closest(Dr);
  if (!e.length)
    return;
  const t = e.data(_n), s = Xt.ensure(e, t);
  t || e.data(_n, s.options), s.isHover && s.show();
});
let Cn = 0;
window.addEventListener("scroll", (n) => {
  Cn && clearTimeout(Cn), Cn = window.setTimeout(() => {
    Xt.clear({ event: n }), Cn = 0;
  }, 50);
}, !0);
var ks, Pe;
class Ch extends H {
  constructor(t) {
    var s;
    super(t);
    _(this, ks, void 0);
    _(this, Pe, K());
    this.state = { placement: ((s = t.dropdown) == null ? void 0 : s.placement) || "", show: !1 };
  }
  get ref() {
    return g(this, Pe);
  }
  get triggerElement() {
    return g(this, Pe).current;
  }
  componentDidMount() {
    const { items: t } = this.props, { modifiers: s = [], ...i } = this.props.dropdown || {};
    s.push({
      name: "dropdown-trigger",
      enabled: !0,
      phase: "beforeMain",
      fn: ({ state: o }) => {
        var a;
        const r = ((a = o.placement) == null ? void 0 : a.split("-").shift()) || "";
        this.setState({ placement: r });
      }
    }), C(this, ks, Xt.ensure(this.triggerElement, {
      items: t,
      ...i,
      modifiers: s,
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
    (t = g(this, ks)) == null || t.destroy();
  }
  beforeRender() {
    const { className: t, children: s, dropdown: i, items: o, ...r } = this.props;
    return {
      className: N("dropdown", t),
      children: typeof s == "function" ? s(this.state) : s,
      ...r,
      "data-toggle": "dropdown",
      "data-dropdown-placement": this.state.placement,
      ref: g(this, Pe)
    };
  }
  render() {
    const { children: t, ...s } = this.beforeRender();
    return /* @__PURE__ */ f("div", { ...s, children: t });
  }
}
ks = new WeakMap(), Pe = new WeakMap();
class hl extends Ch {
  get triggerElement() {
    return this.ref.current.base;
  }
  render() {
    var o;
    const { placement: e, show: t } = this.state, s = this.beforeRender();
    let { caret: i = !0 } = s;
    if (i !== !1 && (t || i === !0)) {
      const r = (t ? e : (o = this.props.dropdown) == null ? void 0 : o.placement) || "";
      i = (r.includes("top") ? "up" : r.includes("bottom") ? "down" : r) || (typeof i == "string" ? i : "") || "down";
    }
    return s.caret = i, /* @__PURE__ */ f(Q, { ...s });
  }
}
function ul({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(hl, { type: t, ...s });
}
let dl = class extends H {
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
    const { key: s = t, ...i } = e, o = e.dropdown || e.items ? hl : Q;
    return /* @__PURE__ */ f(o, { ...i }, s);
  }
  renderItem(e, t, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = e, a = { key: s, ...t };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, t.onClick)), i) {
      const l = i.call(this, a, U);
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
function $h({
  key: n,
  type: e,
  btnType: t,
  ...s
}) {
  return /* @__PURE__ */ f(dl, { type: t, ...s });
}
var Gt;
let Qt = (Gt = class extends Ji {
  beforeRender() {
    const { gap: e, btnProps: t, wrap: s, ...i } = super.beforeRender();
    return i.className = N(i.className, s ? "flex-wrap" : "", typeof e == "number" ? `gap-${e}` : ""), typeof e == "string" && (i.style ? i.style.gap = e : i.style = { gap: e }), i;
  }
  isBtnItem(e) {
    return e === "item" || e === "dropdown";
  }
  renderTypedItem(e, t, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {}, a = {
      ...t,
      ...r,
      ...s,
      className: N(`${this.name}-${i}`, t.className, r.className, s.className),
      style: Object.assign({}, t.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ f(e, { ...a });
  }
}, Gt.ItemComponents = {
  item: lh,
  dropdown: ul,
  "btn-group": $h
}, Gt.ROOT_TAG = "nav", Gt.NAME = "toolbar", Gt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
}, Gt);
function xh({
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
  ...u
}) {
  let c;
  a === !0 ? c = /* @__PURE__ */ f(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : X(a) ? c = a : typeof a == "object" && (c = /* @__PURE__ */ f(Q, { ...a, onClick: l }));
  const p = X(t) ? t : t ? /* @__PURE__ */ f(Qt, { ...t }) : null;
  return /* @__PURE__ */ f("div", { className: N("alert", n), style: e, ...u, children: [
    /* @__PURE__ */ f(tt, { icon: h, className: "alert-icon" }),
    X(i) ? i : /* @__PURE__ */ f("div", { className: N("alert-content", o), children: [
      X(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? p : null
    ] }),
    s ? null : p,
    c,
    r
  ] });
}
function kh(n) {
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
function Sh({
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
    xh,
    {
      className: N("messager", o, e, s === !0 ? kh(t) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Wt, xe;
const ti = class ti extends F {
  constructor() {
    super(...arguments);
    _(this, Wt);
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
    this.render(), this.emit("show"), P(this, Wt, xe).call(this, () => {
      this._show = !0, this.render(), P(this, Wt, xe).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && P(this, Wt, xe).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && P(this, Wt, xe).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), P(this, Wt, xe).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
};
Wt = new WeakSet(), xe = function(t, s = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    t(), this._showTimer = 0;
  }, s);
}, ti.NAME = "MessagerItem", ti.Component = Sh;
let xo = ti;
var ae, ft, ei, fl, si, pl;
const hs = class hs extends lt {
  constructor() {
    super(...arguments);
    _(this, ei);
    _(this, si);
    _(this, ae, void 0);
    _(this, ft, void 0);
  }
  get isShown() {
    var t;
    return !!((t = g(this, ft)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), P(this, ei, fl).call(this).show();
  }
  hide() {
    var t;
    (t = g(this, ft)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: s, ...i } = t, o = hs.ensure(s || "body");
    return o.setOptions(i), o.hide(), o.show(), o;
  }
};
ae = new WeakMap(), ft = new WeakMap(), ei = new WeakSet(), fl = function() {
  if (g(this, ft))
    g(this, ft).setOptions(this.options);
  else {
    const t = P(this, si, pl).call(this), s = new xo(t, this.options);
    s.on("hidden", () => {
      s.destroy(), t == null || t.remove(), C(this, ae, void 0), C(this, ft, void 0);
    }), C(this, ft, s);
  }
  return g(this, ft);
}, si = new WeakSet(), pl = function() {
  if (g(this, ae))
    return g(this, ae);
  const { placement: t = "top" } = this.options;
  let s = this.$element.find(`.messagers-${t}`);
  s.length || (s = d(`<div class="messagers messagers-${t}"></div>`).appendTo(this.$element));
  let i = s.find(`#messager-${this.gid}`);
  return i.length || (i = d(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(s), C(this, ae, i[0])), i[0];
}, hs.NAME = "messager", hs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
let Pr = hs;
var Ss;
let Eh = (Ss = class extends H {
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
}, Ss.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
}, Ss);
const ni = class ni extends F {
};
ni.NAME = "ProgressCircle", ni.Component = Eh;
let Lr = ni;
var St;
class Th {
  constructor(e = "") {
    _(this, St, void 0);
    typeof e == "object" ? C(this, St, e) : C(this, St, document.appendChild(document.createComment(e)));
  }
  on(e, t, s) {
    g(this, St).addEventListener(e, t, s);
  }
  once(e, t, s) {
    g(this, St).addEventListener(e, t, { once: !0, ...s });
  }
  off(e, t, s) {
    g(this, St).removeEventListener(e, t, s);
  }
  emit(e) {
    return g(this, St).dispatchEvent(e), e;
  }
}
St = new WeakMap();
const Or = /* @__PURE__ */ new Set([
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
class ml extends Th {
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
    return typeof e == "string" && (Or.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), super.emit(ml.createEvent(e, t));
  }
  static createEvent(e, t) {
    return typeof e == "string" && (Or.has(e) ? (e = new Event(e), Object.assign(e, { detail: t })) : e = new CustomEvent(e, { detail: t })), e;
  }
}
let gl = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((e, t) => (t &= 63, t < 36 ? e += t.toString(36) : t < 62 ? e += (t - 26).toString(36).toUpperCase() : t > 62 ? e += "-" : e += "_", e), "");
const lo = "```ZUI_STR\n";
var Es, le, Le, pt, Oe, He, Sn;
const rr = class rr {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(e, t = "local") {
    _(this, He);
    _(this, Es, void 0);
    _(this, le, void 0);
    _(this, Le, void 0);
    _(this, pt, void 0);
    _(this, Oe, void 0);
    C(this, Es, t), C(this, Le, e ?? gl()), C(this, le, `ZUI_STORE:${g(this, Le)}`), C(this, pt, t === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return g(this, Es);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (g(this, Oe) || C(this, Oe, new rr(g(this, Le), "session")), g(this, Oe));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(e, t) {
    const s = g(this, pt).getItem(P(this, He, Sn).call(this, e));
    if (typeof s == "string") {
      if (s.startsWith(lo))
        return s.substring(lo.length);
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
    g(this, pt).setItem(P(this, He, Sn).call(this, e), typeof t == "string" ? `${lo}${t}` : JSON.stringify(t));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(e) {
    g(this, pt).removeItem(P(this, He, Sn).call(this, e));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(e) {
    for (let t = 0; t < g(this, pt).length; t++) {
      const s = g(this, pt).key(t);
      if (s != null && s.startsWith(g(this, le))) {
        const i = g(this, pt).getItem(s);
        typeof i == "string" && e(s.substring(g(this, le).length + 1), JSON.parse(i));
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
Es = new WeakMap(), le = new WeakMap(), Le = new WeakMap(), pt = new WeakMap(), Oe = new WeakMap(), He = new WeakSet(), Sn = function(e) {
  return `${g(this, le)}:${e}`;
};
let Fn = rr;
const cs = new Fn("DEFAULT");
function Nh(n, e = "local") {
  return new Fn(n, e);
}
Object.assign(cs, { create: Nh });
function Mh(n) {
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
function Rh(n) {
  const [e, t, s] = typeof n == "string" ? Mh(n) : n;
  return e * 0.299 + t * 0.587 + s * 0.114 > 186;
}
function Hr(n, e) {
  return Rh(n) ? (e == null ? void 0 : e.dark) ?? "#333333" : (e == null ? void 0 : e.light) ?? "#ffffff";
}
function Br(n, e = 255) {
  return Math.min(Math.max(n, 0), e);
}
function Ih(n, e, t) {
  n = n % 360 / 360, e = Br(e), t = Br(t);
  const s = t <= 0.5 ? t * (e + 1) : t + e - t * e, i = t * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(n + 1 / 3) * 255,
    o(n) * 255,
    o(n - 1 / 3) * 255
  ];
}
function Ah(n) {
  let e = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let t = 0; t < n.length; ++t)
      e += (t + 1) * n.charCodeAt(t);
  return e;
}
function Dh(n, e) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= e ? n : n.substring(n.length - e) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= e ? n : n.substring(0, e);
}
let yl = class extends H {
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
      lightness: y = 0.6,
      children: b,
      ...v
    } = this.props, w = ["avatar", e], $ = { ...t, background: r, color: a };
    let x = 32;
    s && (typeof s == "number" ? ($.width = `${s}px`, $.height = `${s}px`, $.fontSize = `${Math.max(12, Math.round(s / 2))}px`, x = s) : (w.push(`size-${s}`), x = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? w.push("circle") : o && (typeof o == "number" ? $.borderRadius = `${o}px` : w.push(`rounded-${o}`));
    let E;
    if (c)
      w.push("has-img"), E = /* @__PURE__ */ f("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const S = Dh(l, u);
      if (w.push("has-text", `has-text-${S.length}`), r)
        !a && r && ($.color = Hr(r));
      else {
        const I = h ?? l, A = (typeof I == "number" ? I : Ah(I)) * p % 360;
        if ($.background = `hsl(${A},${m * 100}%,${y * 100}%)`, !a) {
          const D = Ih(A, m, y);
          $.color = Hr(D);
        }
      }
      let M;
      x && x < 14 * S.length && (M = { transform: `scale(${x / (14 * S.length)})`, whiteSpace: "nowrap" }), E = /* @__PURE__ */ f("div", { "data-actualSize": x, className: "avatar-text", style: M, children: S });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        className: N(w),
        style: $,
        ...v,
        children: [
          E,
          b
        ]
      }
    );
  }
};
const ii = class ii extends F {
};
ii.NAME = "Avatar", ii.Component = yl;
let Wr = ii;
const oi = class oi extends F {
};
oi.NAME = "BtnGroup", oi.Component = dl;
let zr = oi;
const ko = Symbol("EVENT_PICK");
var Be;
class ir extends H {
  constructor(t) {
    super(t);
    _(this, Be, void 0);
    this._handleClick = this._handleClick.bind(this), C(this, Be, !!d(`#${t.id}`).length);
  }
  get hasInput() {
    return g(this, Be);
  }
  _handleClick(t) {
    const { togglePop: s, clickType: i, onClick: o } = this.props;
    let r = i === "open" ? !0 : void 0;
    const a = d(t.target), l = o == null ? void 0 : o(t);
    if (!t.defaultPrevented) {
      if (typeof l == "boolean")
        r = l;
      else {
        if (a.closest('[data-dismiss="pick"]').length) {
          s(!1);
          return;
        }
        if (a.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => s(r));
    }
  }
  _getClass(t) {
    const { state: s, className: i } = t, { open: o, disabled: r } = s;
    return N(
      "pick",
      i,
      o && "is-open focus",
      r && "disabled"
    );
  }
  _getProps(t) {
    const { id: s, style: i, attrs: o } = t;
    return {
      id: `pick-${s}`,
      className: this._getClass(t),
      style: i,
      tabIndex: -1,
      onClick: this._handleClick,
      ...o
    };
  }
  _renderTrigger(t) {
    const { children: s, state: i } = t;
    return s ?? i.value;
  }
  _renderValue(t) {
    const { name: s, state: { value: i = "" }, id: o } = t;
    if (s)
      if (g(this, Be))
        d(`#${o}`).val(i);
      else
        return /* @__PURE__ */ f("input", { id: o, type: "hidden", className: "pick-value", name: s, value: i });
    return null;
  }
  componentDidMount() {
    const { id: t, state: s } = this.props;
    d(`#${t}`).on(`change.pick.zui.${t}`, (i, o) => {
      if (o === ko)
        return;
      const r = i.target.value;
      r !== s.value && this.props.changeState({ value: r });
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    d(`#${t}`).off(`change.pick.zui.${t}`);
  }
  componentDidUpdate(t) {
    const { id: s, state: i, name: o } = this.props;
    o && t.state.value !== i.value && d(`#${s}`).trigger("change", ko);
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
Be = new WeakMap();
var ce, mt, zt;
class bl extends H {
  constructor(t) {
    super(t);
    _(this, ce, void 0);
    _(this, mt, void 0);
    _(this, zt, void 0);
    C(this, ce, K()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = d(s.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return d(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var t;
    return (t = g(this, ce)) == null ? void 0 : t.current;
  }
  get container() {
    return g(this, zt);
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
      ref: g(this, ce),
      onClick: this._handleClick
    };
  }
  _getContainer(t) {
    if (!g(this, zt)) {
      const s = d(t.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = d("<div>").addClass("pick-container").appendTo(s)), C(this, zt, i[0]);
    }
    return g(this, zt);
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
      g(this, mt) && (g(this, mt).call(this), C(this, mt, void 0));
      return;
    }
    g(this, mt) || C(this, mt, eo(s, t, () => {
      const { placement: r, width: a } = i;
      bn(s, t, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? gn() : null, fs(), yn(1)].filter(Boolean)
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
    const t = g(this, mt);
    t && (t(), C(this, mt, void 0)), C(this, zt, void 0), C(this, ce, void 0), d(`pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(t) {
    return sh(this._render(t), this._getContainer(t));
  }
}
ce = new WeakMap(), mt = new WeakMap(), zt = new WeakMap();
var Ts, st, he, ye;
let Pt = (ye = class extends H {
  constructor(t) {
    super(t);
    _(this, Ts, void 0);
    _(this, st, void 0);
    _(this, he, void 0);
    C(this, st, 0), C(this, he, K()), this.changeState = (s, i) => new Promise((o) => {
      this.setState(s, () => {
        i == null || i(), o(this.state);
      });
    }), this.toggle = async (s, i) => {
      this.props.disabled && (s = !1);
      const { state: o } = this;
      if (typeof s == "boolean" && s === (!!o.open && o.open !== "closing"))
        return i && await this.changeState(i), this.state;
      g(this, st) && (clearTimeout(g(this, st)), C(this, st, 0));
      let r = await this.changeState((l) => (s = s ?? !l.open, {
        open: s ? "opening" : "closing",
        ...i
      }));
      const { open: a } = r;
      return a === "closing" ? (await In(200, (l) => {
        C(this, st, l);
      }), C(this, st, 0), r = await this.changeState({ open: !1 })) : a === "opening" && (await In(50, (l) => {
        C(this, st, l);
      }), C(this, st, 0), r = await this.changeState({ open: !0 })), r;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, C(this, Ts, t.id ?? `_pick${d.guid++}`);
  }
  get id() {
    return g(this, Ts);
  }
  get pop() {
    return g(this, he).current;
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
    (s = this.props.beforeDestroy) == null || s.call(this), g(this, st) && clearTimeout(g(this, st));
    const t = g(this, he).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, s) {
    const { open: i } = s, o = this._getTrigger(t);
    let r;
    if (i) {
      const a = this._getPop(t);
      r = /* @__PURE__ */ f(a, { ref: g(this, he), ...this._getPopProps(t, s), children: this._renderPop(t, s) }, "pop");
    }
    return /* @__PURE__ */ f(os, { children: [
      /* @__PURE__ */ f(o, { ...this._getTriggerProps(t, s), children: this._renderTrigger(t, s) }, "pick"),
      r
    ] });
  }
}, Ts = new WeakMap(), st = new WeakMap(), he = new WeakMap(), ye.Trigger = ir, ye.Pop = bl, ye.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
}, ye);
var Ns;
let Ph = (Ns = class extends Pt {
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
}, Ns.defaultProps = {
  ...Pt.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
}, Ns);
const ri = class ri extends F {
};
ri.NAME = "ColorPicker", ri.Component = Ph;
let Fr = ri;
const ms = 24 * 60 * 60 * 1e3, G = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), Lh = (n, e, t = "day") => {
  if (typeof e == "string") {
    const s = Number.parseInt(e, 10);
    t = e.replace(s.toString(), ""), e = s;
  }
  return n = new Date(G(n).getTime()), t === "month" ? n.setMonth(n.getMonth() + e) : t === "year" ? n.setFullYear(n.getFullYear() + e) : t === "week" ? n.setDate(n.getDate() + e * 7) : t === "hour" ? n.setHours(n.getHours() + e) : t === "minute" ? n.setMinutes(n.getMinutes() + e) : t === "second" ? n.setSeconds(n.getSeconds() + e) : n.setDate(n.getDate() + e), n;
}, wn = (n, e = /* @__PURE__ */ new Date()) => G(n).toDateString() === G(e).toDateString(), So = (n, e = /* @__PURE__ */ new Date()) => G(n).getFullYear() === G(e).getFullYear(), wl = (n, e = /* @__PURE__ */ new Date()) => (n = G(n), e = G(e), n.getFullYear() === e.getFullYear() && n.getMonth() === e.getMonth()), td = (n, e = /* @__PURE__ */ new Date()) => {
  n = G(n), e = G(e);
  const t = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / t), i = Math.floor(e.getTime() / t);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, ed = (n, e) => wn(G(e), n), sd = (n, e) => wn(G(e).getTime() - ms, n), nd = (n, e) => wn(G(e).getTime() + ms, n), ht = (n, e = "yyyy-MM-dd hh:mm", t = "") => {
  if (n = G(n), Number.isNaN(n.getDay()))
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
  return /(y+)/i.test(e) && (e.includes("[yyyy-]") && (e = e.replace("[yyyy-]", So(n) ? "" : "yyyy-")), e = e.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(e)) {
      const o = `${s[i]}`;
      e = e.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), e;
}, id = (n, e, t) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...t
  }, i = ht(n, So(n) ? s.month : s.full);
  if (wn(n, e))
    return i;
  const o = ht(e, So(n, e) ? wl(n, e) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
};
var Ms, Rs;
class Oh extends H {
  constructor() {
    super(...arguments);
    _(this, Ms, K());
    _(this, Rs, (t, s) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, t, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    d(g(this, Ms).current).find(".menu-item>.active").scrollIntoView();
  }
  render(t) {
    const { minuteStep: s = 5, hour: i, minute: o } = t, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: g(this, Ms), children: [
      /* @__PURE__ */ f(
        ve,
        {
          className: l,
          items: r,
          onClickItem: g(this, Rs).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        ve,
        {
          className: l,
          items: a,
          onClickItem: g(this, Rs).bind(this, "minute")
        }
      )
    ] });
  }
}
Ms = new WeakMap(), Rs = new WeakMap();
const jr = (n) => {
  if (!n)
    return;
  const e = G(`1999-01-01 ${n}`);
  if (!Number.isNaN(e.getDay()))
    return e;
};
var ai, li, ci, hi, Is;
let Hh = (Is = class extends Pt {
  constructor(t) {
    super(t);
    _(this, ai, () => {
      this.toggle(!0);
    });
    _(this, li, (t) => {
      this.setTime(t.target.value);
    });
    _(this, ci, (t, s) => {
      this.setTime({ [t]: s });
    });
    _(this, hi, () => {
      this.setTime("");
    });
    const s = this.state;
    s.value === "now" && (s.value = ht(/* @__PURE__ */ new Date(), t.format));
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
    const i = jr(s), { onInvalid: o, required: r, defaultValue: a } = this.props;
    this.setState({ value: i ? ht(i, this.props.format) : r ? a : "" }, () => {
      !i && o && o(s);
    });
  }
  getTime() {
    const t = jr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, s) {
    const { placeholder: i, name: o, icon: r, required: a, disabled: l, readonly: h } = t, { value: u = "", open: c } = s, p = `time-picker-${this.id}`;
    let m;
    return c && !a && u.length ? m = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: g(this, hi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : r && (r === !0 ? m = /* @__PURE__ */ f("i", { class: "i-time" }) : m = /* @__PURE__ */ f(tt, { icon: r })), [
      /* @__PURE__ */ f("input", { name: o, id: p, type: "text", class: "form-control", placeholder: i, value: u, disabled: l, readOnly: h, onFocus: g(this, ai), onChange: g(this, li) }, "input"),
      m ? /* @__PURE__ */ f("label", { for: p, class: "input-control-suffix", children: m }, "icon") : null
    ];
  }
  _getTriggerProps(t, s) {
    const i = super._getTriggerProps(t, s);
    return {
      ...i,
      className: N(i.className, "time-picker input-control has-suffix-icon"),
      name: ""
    };
  }
  _renderPop(t) {
    const [s, i] = this.getTime() || [];
    return /* @__PURE__ */ f(Oh, { hour: s, minute: i, minuteStep: t.minuteStep, onChange: g(this, ci) });
  }
}, ai = new WeakMap(), li = new WeakMap(), ci = new WeakMap(), hi = new WeakMap(), Is.defaultProps = {
  ...Pt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  minuteStep: 5,
  format: "hh:mm",
  icon: !0
}, Is);
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
const Bh = (n, e, t = 0) => {
  const s = new Date(n, e - 1, 1), i = new Date(n, e, 0), o = s.getDay(), r = s.getTime() - (7 + o - t) % 7 * ms;
  return {
    days: i.getDate(),
    startTime: r,
    firstDay: s.getTime()
  };
}, Vr = (n, e) => new Set((Array.isArray(n) ? n : [n]).map((t) => ht(t, e)));
var ui;
class Wh extends H {
  constructor() {
    super(...arguments);
    _(this, ui, (t) => {
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
    const { startTime: m, days: y, firstDay: b } = Bh(a, l, i), v = b + y * ms;
    let w = m;
    const $ = [], x = "yyyy-MM-dd", E = Vr(h, x), S = Vr(u, x);
    for (; w <= v; ) {
      const M = [];
      for (let I = 0; I < 7; I++) {
        const A = new Date(w), D = A.getDate(), B = ht(A, x), L = A.getDay(), R = wl(A, b), T = N("col mini-calendar-day", {
          active: E.has(B),
          selected: S.has(B),
          "is-first": D === 1,
          "is-in-month": R,
          "is-out-month": !R,
          "is-today": wn(A, s),
          "is-weekend": L === 0 || L === 6
        });
        M.push(
          /* @__PURE__ */ f("div", { className: T, "data-date": B, children: /* @__PURE__ */ f("a", { className: p, onClick: g(this, ui), children: D === 1 && r ? r[A.getMonth()] : A.getDate() }) }, B)
        ), w += ms;
      }
      $.push(/* @__PURE__ */ f("div", { className: "row", children: M }, w));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: c }),
      $
    ] });
  }
}
ui = new WeakMap();
var As, di;
class Ur extends H {
  constructor() {
    super(...arguments);
    _(this, As, K());
    _(this, di, (t) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const o = d(t.target).closest("[data-value]").dataset("value");
      o && (s(+o), t.stopPropagation());
    });
  }
  componentDidMount() {
    d(g(this, As).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(t) {
    const { className: s, max: i, min: o, value: r } = t, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ f(Q, { type: "ghost", "data-value": h, active: h === r, className: N(l === h ? "is-current" : ""), onClick: g(this, di), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: g(this, As), children: a });
  }
}
As = new WeakMap(), di = new WeakMap();
var We, Ds, Ps, Ls, Os, Hs, fi, vl, pi, _l;
class zh extends H {
  constructor(t) {
    super(t);
    _(this, fi);
    _(this, pi);
    _(this, We, void 0);
    _(this, Ds, void 0);
    _(this, Ps, void 0);
    _(this, Ls, void 0);
    _(this, Os, void 0);
    _(this, Hs, void 0);
    C(this, We, K()), C(this, Ds, (r) => {
      const a = d(r.target).closest("[data-set-date]");
      a.length && this.changeDate(a.dataset("set-date"));
    }), C(this, Ps, () => {
      const { year: r, month: a } = this.state;
      a === 1 ? this.setState({ year: r - 1, month: 12 }) : this.setState({ month: a - 1 });
    }), C(this, Ls, () => {
      const { year: r, month: a } = this.state;
      a === 12 ? this.setState({ year: r + 1, month: 1 }) : this.setState({ month: a + 1 });
    }), C(this, Os, (r) => {
      this.setState({ year: r, select: "day" });
    }), C(this, Hs, (r) => {
      this.setState({ month: r, select: "day" });
    }), this.changeDate = (r) => {
      var a, l;
      if (r.startsWith("today")) {
        let h = /* @__PURE__ */ new Date();
        r.length > 3 && (h = Lh(h, r.substring(5).replace("+", ""))), r = ht(h, "yyyy-MM-dd");
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
    d(g(this, We).current).find(".active").scrollIntoView();
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
    } = s, m = p === "day", y = G(t.minDate || "1970-1-1"), b = G(t.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: g(this, We), onClick: g(this, Ds), children: [
      P(this, fi, vl).call(this, t),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: Y(o, u) }),
          /* @__PURE__ */ f(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: g(this, Ps), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: g(this, Ls), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Wh,
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
          Ur,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: u,
            min: y.getFullYear(),
            max: b.getFullYear(),
            onChange: g(this, Os)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          Ur,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: g(this, Hs)
          }
        ) : null,
        m ? P(this, pi, _l).call(this, t) : null
      ] })
    ] });
  }
}
We = new WeakMap(), Ds = new WeakMap(), Ps = new WeakMap(), Ls = new WeakMap(), Os = new WeakMap(), Hs = new WeakMap(), fi = new WeakSet(), vl = function(t) {
  let { menu: s } = t;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(ve, { ...s })) : null;
}, pi = new WeakSet(), _l = function(t) {
  let { actions: s } = t;
  const { todayText: i, clearText: o } = t;
  return s || (s = [{ text: i, "data-set-date": ht(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(Qt, { btnProps: { className: "ghost text-primary" }, ...s }),
    o ? /* @__PURE__ */ f(Q, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var Bs, Ws, zs, Fs;
let Fh = (Fs = class extends Pt {
  constructor(t) {
    super(t);
    _(this, Bs, void 0);
    _(this, Ws, void 0);
    _(this, zs, void 0);
    C(this, Bs, () => {
      this.toggle(!0);
    }), C(this, Ws, (i) => {
      this.setDate(i.target.value);
    }), C(this, zs, () => {
      this.setDate("");
    }), this.setDate = (i) => {
      if (this.props.disabled)
        return;
      const o = G(i), r = !i || Number.isNaN(o.getDay()), { onInvalid: a, defaultValue: l = "", required: h } = this.props;
      this.setState({ value: r ? h ? l : "" : ht(o, this.props.format) }, () => {
        !r && a && a(i), this.toggle(!1);
      });
    };
    const { value: s } = this.state;
    s && (this.state.value = ht(s === "today" ? /* @__PURE__ */ new Date() : s, t.format));
  }
  _renderTrigger(t, s) {
    const { placeholder: i, icon: o, required: r, disabled: a, readonly: l } = t, { value: h = "", open: u } = s, c = `date-picker-${this.id}`;
    let p;
    return u && !r && h.length ? p = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: g(this, zs), children: /* @__PURE__ */ f("span", { className: "close" }) }) : o && (o === !0 ? p = /* @__PURE__ */ f("i", { class: "i-calendar" }) : p = /* @__PURE__ */ f(tt, { icon: o })), [
      /* @__PURE__ */ f("input", { id: c, type: "text", class: "form-control", placeholder: i, value: h, disabled: a, readOnly: l, onFocus: g(this, Bs), onChange: g(this, Ws) }, "input"),
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
    const { weekNames: i, monthNames: o, weekStart: r, yearText: a, todayText: l = Z.getLang("today"), clearText: h, menu: u, actions: c, minDate: p, maxDate: m, required: y } = t;
    return /* @__PURE__ */ f(
      zh,
      {
        onChange: this.setDate,
        date: s.value,
        weekNames: i,
        monthNames: o,
        weekStart: r,
        yearText: a,
        todayText: l,
        clearText: y ? "" : h,
        menu: u,
        actions: c,
        minDate: p,
        maxDate: m
      }
    );
  }
}, Bs = new WeakMap(), Ws = new WeakMap(), zs = new WeakMap(), Fs.defaultProps = {
  ...Pt.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
}, Fs);
const mi = class mi extends F {
};
mi.NAME = "TimePicker", mi.Component = Hh;
let qr = mi;
const gi = class gi extends F {
};
gi.NAME = "DatePicker", gi.Component = Fh;
let Yr = gi;
const co = "show", Kr = "in", jh = '[data-dismiss="modal"]', ut = class ut extends lt {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (e) => {
      const t = e.target, s = t.closest(".modal");
      !s || s !== this.modalElement || (t.closest(jh) || this.options.backdrop === !0 && t === s) && (e.stopPropagation(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(co);
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
    }, co, o).css({
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
      d(this.modalElement).removeClass(co), this.emit("hidden");
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
let Lt = ut;
d(window).on(`resize.${Lt.NAMESPACE}`, () => {
  Lt.getAll().forEach((n) => {
    const e = n;
    e.shown && e.options.responsive && e.layout();
  });
});
d(document).on(`to-hide.${Lt.NAMESPACE}`, (n, e) => {
  Lt.hide(e == null ? void 0 : e.target);
});
const ar = class ar extends H {
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
      e ? /* @__PURE__ */ f(Qt, { ...e }) : null,
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
    return X(e) ? e : e === !1 || !s ? null : /* @__PURE__ */ f("div", { className: N("modal-footer", t), children: s ? /* @__PURE__ */ f(Qt, { ...s }) : null });
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
ar.defaultProps = { closeBtn: !0 };
let Eo = ar;
var ze, Fe, je;
class Vh extends H {
  constructor() {
    super(...arguments);
    _(this, ze, void 0);
    _(this, Fe, void 0);
    _(this, je, void 0);
    C(this, ze, K()), this.state = {}, C(this, je, () => {
      var i, o;
      const t = (o = (i = g(this, ze).current) == null ? void 0 : i.contentWindow) == null ? void 0 : o.document;
      if (!t)
        return;
      let s = g(this, Fe);
      s == null || s.disconnect(), s = new ResizeObserver(() => {
        const r = t.body, a = t.documentElement, l = Math.ceil(Math.max(r.scrollHeight, r.offsetHeight, a.offsetHeight));
        this.setState({ height: l });
      }), s.observe(t.body), s.observe(t.documentElement), C(this, Fe, s);
    });
  }
  componentDidMount() {
    g(this, je).call(this);
  }
  componentWillUnmount() {
    var t;
    (t = g(this, Fe)) == null || t.disconnect();
  }
  render() {
    const { url: t } = this.props;
    return /* @__PURE__ */ f(
      "iframe",
      {
        className: "modal-iframe",
        style: this.state,
        src: t,
        ref: g(this, ze),
        onLoad: g(this, je)
      }
    );
  }
}
ze = new WeakMap(), Fe = new WeakMap(), je = new WeakMap();
function Uh(n, e) {
  const { custom: t, title: s, content: i } = e;
  return {
    body: i,
    title: s,
    ...typeof t == "function" ? t() : t
  };
}
async function qh(n, e) {
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
    body: t === "html" ? /* @__PURE__ */ f(dn, { className: "modal-body", html: u, executeScript: l }) : u
  };
}
async function Yh(n, e) {
  const { url: t, custom: s, title: i } = e;
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(Vh, { url: t })
  };
}
const Kh = {
  custom: Uh,
  ajax: qh,
  iframe: Yh
}, ho = "loading";
var gt, Ve, yt, js, No, Vs, Mo;
const ne = class ne extends Lt {
  constructor() {
    super(...arguments);
    _(this, js);
    _(this, Vs);
    _(this, gt, void 0);
    _(this, Ve, void 0);
    _(this, yt, void 0);
  }
  get id() {
    return g(this, Ve);
  }
  get loading() {
    var t;
    return (t = g(this, gt)) == null ? void 0 : t.classList.contains(ho);
  }
  get shown() {
    var t;
    return !!((t = g(this, gt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = g(this, gt);
    if (!t) {
      const { options: s } = this;
      let i = g(this, Ve);
      i || (i = s.id || `modal-${d.guid++}`, C(this, Ve, i));
      const { $element: o } = this;
      if (t = o.find(`#${i}`)[0], !t) {
        const r = this.key;
        t = d("<div>").attr({
          id: i,
          "data-key": r
        }).data(this.constructor.KEY, this).css(s.style || {}).setClass("modal modal-async load-indicator", s.className).appendTo(o)[0];
      }
      C(this, gt, t);
    }
    return t;
  }
  get $emitter() {
    const t = g(this, gt);
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
    const t = g(this, gt);
    t && (d(t).removeData(this.constructor.KEY).remove(), C(this, gt, void 0));
  }
  render(t) {
    super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    g(this, yt) && clearTimeout(g(this, yt));
    const { modalElement: t, options: s } = this, i = d(t), { type: o, loadTimeout: r, loadingText: a = null } = s, l = Kh[o];
    if (!l)
      return console.warn(`Modal: Cannot build modal with type "${o}"`), !1;
    i.attr("data-loading", a).addClass(ho), r && C(this, yt, window.setTimeout(() => {
      C(this, yt, 0), P(this, Vs, Mo).call(this, this.options.timeoutTip);
    }, r));
    const h = await l.call(this, t, s);
    return h === !1 ? await P(this, Vs, Mo).call(this, this.options.failedTip) : h && typeof h == "object" && await P(this, js, No).call(this, h), g(this, yt) && (clearTimeout(g(this, yt)), C(this, yt, 0)), this.layout(), await In(100), i.removeClass(ho), !0;
  }
  static open(t) {
    return new Promise((s) => {
      const { container: i = document.body, ...o } = t, r = { show: !0, ...o };
      !r.type && r.url && (r.type = "ajax");
      const a = ne.ensure(i, r), l = `.zui.Modal.open${d.guid++}`;
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
    const y = [];
    (Array.isArray(a) ? a : [a]).forEach((w) => {
      w = {
        ...typeof w == "string" ? { key: w } : w
      }, typeof w.key == "string" && (w.text || (w.text = Z.getLang(w.key, w.key)), w.btnType || (w.btnType = `btn-wide ${w.key === "confirm" ? "primary" : "btn-default"}`)), w && y.push(w);
    }, []);
    let b;
    const v = y.length ? {
      gap: 4,
      items: y,
      onClickItem: ({ item: w, event: $ }) => {
        const x = ne.query($.target, u);
        b = w.key, (l == null ? void 0 : l(w, x)) !== !1 && x && x.hide();
      }
    } : void 0;
    return await ne.open({
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
    const { onClickAction: s, onResult: i, ...o } = t;
    return await ne.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (a, l) => {
        i == null || i(a.key === "confirm", l), s == null || s(a, l);
      },
      ...o
    }) === "confirm";
  }
};
gt = new WeakMap(), Ve = new WeakMap(), yt = new WeakMap(), js = new WeakSet(), No = function(t) {
  return new Promise((s) => {
    if (Array.isArray(t))
      return d(this.modalElement).html(t[0]), this.layout(), this._observeResize(), s();
    const { afterRender: i, ...o } = t;
    t = {
      afterRender: (r) => {
        this.layout(), i == null || i(r), this._observeResize(), s();
      },
      ...o
    }, ds(
      /* @__PURE__ */ f(Eo, { ...t }),
      this.modalElement
    );
  });
}, Vs = new WeakSet(), Mo = function(t) {
  if (t)
    return P(this, js, No).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: t })
    });
}, ne.DEFAULT = {
  ...Lt.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let To = ne;
const Gh = '[data-toggle="modal"]', lr = class lr extends lt {
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
      t = Lt.ensure(s, e);
    } else
      t = To.ensure(this.container, e);
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
lr.NAME = "ModalTrigger";
let jn = lr;
d(document).on(`click${jn.NAMESPACE}`, Gh, (n) => {
  const e = n.currentTarget;
  if (e) {
    const t = jn.ensure(e);
    t && (t.show(), n.preventDefault());
  }
});
var Us;
let Xh = (Us = class extends Ji {
  beforeRender() {
    const e = super.beforeRender();
    return e.className = N(e.className, e.type ? `nav-${e.type}` : "", {
      "nav-stacked": e.stacked
    }), e;
  }
}, Us.NAME = "nav", Us);
const yi = class yi extends F {
};
yi.NAME = "Nav", yi.Component = Xh;
let Gr = yi;
function gs(n, e) {
  const t = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof e == "string" && (e === "first" ? e = 1 : e === "last" ? e = t : e === "prev" ? e = n.page - 1 : e === "next" ? e = n.page + 1 : e === "current" ? e = n.page : e = Number.parseInt(e, 10)), e = e !== void 0 ? Math.max(1, Math.min(e < 0 ? t + e : e, t)) : n.page, {
    ...n,
    pageTotal: t,
    page: e
  };
}
function Zh({
  key: n,
  type: e,
  btnType: t,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = gs(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : Y(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : Y(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ f(Q, { type: t, ...a });
}
function Jh({
  key: n,
  type: e,
  page: t,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = gs(i, t);
  return s = typeof s == "function" ? s(a) : Y(s, a), /* @__PURE__ */ f(Ja, { ...r, children: [
    o,
    s
  ] });
}
function Qh({
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
    const y = [];
    for (let b = p; b <= m; b++) {
      l.text = b, delete l.icon, l.disabled = !1;
      const v = gs(i, b);
      r && (l.url = typeof r == "function" ? r(v) : Y(r, v)), y.push(/* @__PURE__ */ f(Q, { type: t, ...l, onClick: o }));
    }
    return y;
  };
  let c = [];
  return c = [...u(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? c = [...c, ...u(2, i.pageTotal)] : i.page < s - 2 ? c = [...c, ...u(2, s - 2), h(), ...u(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? c = [...c, h(), ...u(i.pageTotal - s + 3, i.pageTotal)] : c = [...c, h(), ...u(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...u(i.pageTotal, i.pageTotal)]), c;
}
function tu({
  type: n,
  pagerInfo: e,
  linkCreator: t,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items ?? s.map((h) => {
    const u = { ...e, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === e.recPerPage,
      url: typeof t == "function" ? t(u) : Y(t, u)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(e) : Y(a, e), i.menu = { ...i.menu, className: N((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(ul, { type: "dropdown", dropdown: i, ...r });
}
function eu({
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
  const p = (b) => {
    var v;
    c = Number((v = b.target) == null ? void 0 : v.value) || 1, c = c > i.pageTotal ? i.pageTotal : c;
  }, m = (b) => {
    if (!(b != null && b.target))
      return;
    c = c <= i.pageTotal ? c : i.pageTotal;
    const v = gs(i, c);
    a && !a({ info: v, event: b }) || (b.target.href = u.url = typeof l == "function" ? l(v) : Y(l, v));
  }, y = gs(i, e || 0);
  return u.url = typeof l == "function" ? l(y) : Y(l, y), /* @__PURE__ */ f("div", { className: N("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Q, { type: s, ...u, onClick: m })
  ] });
}
var be;
let su = (be = class extends Qt {
  get pagerInfo() {
    const { page: e = 1, recTotal: t = 0, recPerPage: s = 10 } = this.props;
    return { page: e, recTotal: t, recPerPage: s, pageTotal: s ? Math.ceil(t / s) : 0 };
  }
  isBtnItem(e) {
    return e === "link" || e === "nav" || e === "size-menu" || e === "goto" || super.isBtnItem(e);
  }
  getItemRenderProps(e, t, s) {
    const i = super.getItemRenderProps(e, t, s), o = t.type || "item";
    return o === "info" ? Object.assign(i, { pagerInfo: this.pagerInfo }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: this.pagerInfo, linkCreator: e.linkCreator }), i;
  }
}, be.NAME = "pager", be.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
}, be.ItemComponents = {
  ...Qt.ItemComponents,
  link: Zh,
  info: Jh,
  nav: Qh,
  "size-menu": tu,
  goto: eu
}, be);
const bi = class bi extends F {
};
bi.NAME = "Pager", bi.Component = su;
let Xr = bi;
const wi = class wi extends F {
};
wi.NAME = "Pick", wi.Component = Pt;
let Zr = wi;
var Ue, qs, Ys, vi;
class Cl extends H {
  constructor(t) {
    super(t);
    _(this, Ue, K());
    _(this, qs, K());
    _(this, Ys, (t) => {
      var i, o;
      const s = t.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, s), this.setState({ search: s }), t.stopPropagation();
    });
    _(this, vi, (t) => {
      var s, i;
      t.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: t.defaultSearch ?? "" };
  }
  focus() {
    var t;
    (t = g(this, Ue).current) == null || t.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: t } = this.props;
    if (t) {
      const { current: s } = g(this, qs), { current: i } = g(this, Ue);
      if (s && i) {
        const o = d(i).parent();
        o.width(Math.ceil(Math.min(s.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(t, s) {
    const { placeholder: i, inline: o } = t, { search: r } = s, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: g(this, qs), children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: g(this, vi), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: g(this, Ys),
          onInput: g(this, Ys),
          ref: g(this, Ue)
        }
      ),
      l
    ] });
  }
}
Ue = new WeakMap(), qs = new WeakMap(), Ys = new WeakMap(), vi = new WeakMap();
var qe, Ks, Gs, Xs;
class nu extends ir {
  constructor() {
    super(...arguments);
    _(this, qe, void 0);
    _(this, Ks, void 0);
    _(this, Gs, void 0);
    _(this, Xs, void 0);
    C(this, qe, K()), C(this, Ks, (t) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = d(t.target).closest(".picker-deselect-btn").attr("data-value");
      s && i.length && typeof o == "string" && s(o), t.stopPropagation();
    }), C(this, Gs, (t) => {
      this.props.changeState({ search: t });
    }), C(this, Xs, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (t) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: t.text }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: g(this, Ks), "data-value": t.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, t.value);
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = g(this, qe).current) == null || s.focus();
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
      Cl,
      {
        inline: !0,
        ref: g(this, qe),
        defaultSearch: s,
        onSearch: g(this, Gs),
        onClear: g(this, Xs),
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
    const { name: s, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = t, l = r.length ? r : [a];
    if (s)
      if (this.hasInput)
        d(`#${o}`).val(i);
      else
        return /* @__PURE__ */ f("select", { id: o, multiple: !0, className: "pick-value", name: s, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ f("option", { value: h, children: h }, h)) });
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: t, valueList: s, emptyValue: i } = this.props;
    d(`#${t}`).val(s.length ? s : [i]);
  }
  componentDidUpdate(t) {
    const { id: s, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && t.state.value !== i.value && d(`#${s}`).val(r.length ? r : [a]).trigger("change", ko);
  }
}
qe = new WeakMap(), Ks = new WeakMap(), Gs = new WeakMap(), Xs = new WeakMap();
var Zs, _i, Ci, $i, xi, $l;
class iu extends ir {
  constructor() {
    super(...arguments);
    _(this, xi);
    _(this, Zs, K());
    _(this, _i, (t) => {
      this.props.disabled || (this.props.onClear(), t.stopPropagation());
    });
    _(this, Ci, (t) => {
      this.props.changeState({ search: t });
    });
    _(this, $i, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(t) {
    var s;
    super._handleClick(t), (s = g(this, Zs).current) == null || s.focus();
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
      Cl,
      {
        ref: g(this, Zs),
        defaultSearch: s,
        onSearch: g(this, Ci),
        onClear: g(this, $i),
        placeholder: P(this, xi, $l).call(this)
      }
    );
  }
  _renderTrigger(t) {
    const { children: s, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = t, [u] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(t) : u ? p = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: u.text }, "main") : p = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: g(this, _i), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      s,
      m,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
Zs = new WeakMap(), _i = new WeakMap(), Ci = new WeakMap(), $i = new WeakMap(), xi = new WeakSet(), $l = function() {
  const { searchHint: t, state: { value: s, selections: i } } = this.props;
  let o = t;
  if (o === void 0) {
    const r = i.find((a) => a.value === s);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const ou = (n, e, t = "is-match") => n.reduce((s, i) => [...s].reduce((o, r) => {
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
var ki, Si, xl, Ei, kl, Ti;
class ru extends bl {
  constructor() {
    super(...arguments);
    _(this, Si);
    _(this, Ei);
    _(this, ki, K());
    _(this, Ti, ({ item: t }) => {
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
    super.componentDidMount();
    const t = this.element;
    t && d(t).off(".picker.zui");
  }
  setHoverItem(t) {
    this.props.changeState({ hoverItem: t }, () => {
      const s = P(this, Si, xl).call(this);
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
      ve,
      {
        ref: g(this, ki),
        className: "picker-menu-list",
        items: P(this, Ei, kl).call(this),
        onClickItem: g(this, Ti),
        ...s
      }
    );
  }
}
ki = new WeakMap(), Si = new WeakSet(), xl = function() {
  const t = this.element;
  if (t)
    return d(t).find(".menu-item>a.hover");
}, Ei = new WeakSet(), kl = function() {
  const { selections: t, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(t.map((u) => u.value));
  let a = !1;
  const l = d.unique(o.toLowerCase().split(" ").filter((u) => u.length)), h = s.reduce((u, c) => {
    const {
      value: p = "",
      keys: m,
      text: y,
      className: b,
      ...v
    } = c;
    p === i && (a = !0);
    const w = y ?? p;
    return w && u.push({
      key: p,
      active: r.has(p),
      text: typeof w == "string" ? ou(l, [w]) : /* @__PURE__ */ f(rs, { content: w }),
      className: N(b, { hover: p === i }),
      "data-value": p,
      ...v
    }), u;
  }, []);
  return !a && h.length && (h[0].className = N(h[0].className, "hover")), h;
}, Ti = new WeakMap();
var Ye, bt, Et, Ke, ss;
let au = (ss = class extends Pt {
  constructor(t) {
    super(t);
    _(this, Ye, void 0);
    _(this, bt, void 0);
    _(this, Et, void 0);
    _(this, Ke, void 0);
    C(this, Et, 0), this.isEmptyValue = (r) => g(this, Ke).has(r), this.toggleValue = (r, a) => {
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
    C(this, Ke, new Set(i.split(s)));
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
    return g(this, Ke).values().next().value;
  }
  async load() {
    let t = g(this, bt);
    t && t.abort(), t = new AbortController(), C(this, bt, t);
    const { items: s, searchDelay: i } = this.props, { search: o } = this.state;
    let r = [];
    if (typeof s == "function") {
      if (await In(i || 500), g(this, bt) !== t || (r = await s(o, { signal: t.signal }), g(this, bt) !== t))
        return r;
    } else if (o.length) {
      const a = d.unique(o.toLowerCase().split(" ").filter((l) => l.length));
      a.length ? r = s.reduce((l, h) => {
        const {
          value: u,
          keys: c = "",
          text: p
        } = h;
        return a.every((m) => u.toLowerCase().includes(m) || c.toLowerCase().includes(m) || typeof p == "string" && p.toLowerCase().includes(m)) && l.push(h), l;
      }, []) : r = s;
    } else
      r = s;
    return C(this, bt, void 0), r;
  }
  async update(t) {
    const { state: s, props: i } = this, o = g(this, Ye) || {}, r = {};
    if (C(this, Ye, o), (t || o.search !== s.search || i.items !== o.items) && (r.items = (await this.load()).filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), r.loading = !1, o.items = i.items, o.search = s.search), t || o.value !== s.value) {
      const l = r.items || s.items, h = new Map(l.map((u) => [u.value, u]));
      r.selections = this.valueList.reduce((u, c) => (this.isEmptyValue(c) || u.push(h.get(c) || { value: c }), u), []), o.value = s.value;
    }
    const a = r.items;
    i.required && !i.multiple && this.isEmptyValue(this.state.value) && Array.isArray(a) && a.length && (r.value = a[0].value), Object.keys(r).length && await this.changeState(r);
  }
  async tryUpdate() {
    g(this, Et) && clearTimeout(g(this, Et)), C(this, Et, window.setTimeout(() => {
      C(this, Et, 0), this.update();
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
    (t = g(this, bt)) == null || t.abort(), C(this, bt, void 0), C(this, Ye, void 0), clearTimeout(g(this, Et)), super.componentWillUnmount();
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
    return t.Trigger || (t.multiple ? nu : iu);
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
}, Ye = new WeakMap(), bt = new WeakMap(), Et = new WeakMap(), Ke = new WeakMap(), ss.defaultProps = {
  ...Pt.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
}, ss.Pop = ru, ss);
const Ni = class Ni extends F {
};
Ni.NAME = "Picker", Ni.Component = au;
let Jr = Ni, lu = class extends H {
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
      onlyInner: y
    } = e;
    let b = /* @__PURE__ */ f(rs, { content: o }, "content");
    (p || i) && (b = /* @__PURE__ */ f("div", { className: p, children: b }, "content"));
    const v = [], w = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: u, children: [
      i ? /* @__PURE__ */ f("div", { className: c, children: i }) : null,
      w
    ] }, "heading")) : v.push(w), v.push(b), h && v.push(/* @__PURE__ */ f("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), y ? v : /* @__PURE__ */ f("div", { id: t, className: N("popover", a, { popup: s }), style: r, children: v });
  }
};
const Mi = class Mi extends F {
};
Mi.NAME = "PopoverPanel", Mi.Component = lu;
let Ro = Mi;
const cu = '[data-toggle="popover"]', Qr = "show", ta = "in", Ee = class Ee extends lt {
  get shown() {
    return this._shown;
  }
  get id() {
    return this._id;
  }
  afterInit() {
    const { element: e = this.element, trigger: t, id: s } = this.options;
    let i;
    if (typeof e == "function" ? i = e() : i = typeof e == "string" ? d(e)[0] : e, !i)
      return;
    if (this._triggerElement = i, this._id = s || `popover_${this.gid}`, this._virtual = !i, i instanceof HTMLElement) {
      const r = d(i), { namespace: a } = this;
      t === "hover" ? r.on(`mouseenter${a}`, () => {
        this.show(!0);
      }).on(`mouseleave${a}`, () => {
        this.hide();
      }) : t === "click" && r.on(`click${a}`, () => {
        this.toggle();
      });
    }
    const { show: o } = this.options;
    o && this.show(o);
  }
  initTarget() {
    let e = this.options.target;
    return this._dynamic = !e, e ? (typeof e == "function" && (e = e()), d(e)[0]) : this._createTarget();
  }
  show(e) {
    if (e)
      return this._setTimer(() => {
        this.show();
      }, e === !0 ? this.options.delay : e);
    if (!this.inited) {
      this.setOptions({ show: !0 });
      return;
    }
    if (this._shown)
      return;
    const t = this.initTarget();
    if (!t)
      return;
    this._targetElement = t;
    const s = d(t), { animation: i, mask: o } = this.options;
    if (s.addClass(Qr), i && s.addClass(i === !0 ? "fade" : i), this._shown = !0, this.render(), this.emit("show"), !this._virtual) {
      const r = this._triggerElement;
      d(r).addClass("with-popover-show");
    }
    this._setTimer(() => {
      s.addClass(ta), this._setTimer(() => {
        this.emit("shown");
      }, 200), o && d(document).on(`click${this.namespace}`, (r) => {
        const a = d(r.target);
        (!a.closest(`#${this._id}`).length || a.closest('[data-dismiss="popover"]').length) && this.hide();
      });
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._setTimer();
    const e = d(this._targetElement);
    if (this._shown = !1, this.emit("hide"), e.removeClass(ta), !this._virtual) {
      const t = this._triggerElement;
      d(t).removeClass("with-popover-show");
    }
    d(document).off(this.namespace), this._setTimer(() => {
      this.emit("hidden"), e.removeClass(Qr), this._destoryTarget();
    }, this.options.animation ? 200 : 0);
  }
  toggle() {
    this._shown ? this.hide() : this.show();
  }
  destroy() {
    if (super.destroy(), !this._virtual) {
      const { namespace: e } = this;
      d(this._triggerElement).off(e);
    }
    this._setTimer(), this._destoryTarget(), d(document).off(this.namespace);
  }
  layout() {
    const e = this._triggerElement, t = this._targetElement, s = this._layoutWatcher;
    if (!t || !e || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = eo(e, t, () => {
      const { placement: i, width: o, flip: r, shift: a, offset: l, arrow: h, name: u = "popover" } = this.options;
      o === "100%" && !this._virtual && d(t).css({ width: d(e).width() });
      const c = h ? t.querySelector(".arrow") : null, p = h ? typeof h == "number" ? h : 8 : 0;
      bn(e, t, {
        placement: i,
        middleware: [
          r ? gn() : null,
          a ? fs(typeof a == "object" ? a : void 0) : null,
          l || p ? yn((l || 0) + p) : null,
          h ? Hn({ element: c }) : null
        ].filter(Boolean)
      }).then(({ x: m, y, middlewareData: b, placement: v }) => {
        const w = d(t).css({
          left: m,
          top: y
        }), $ = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        }[v.split("-")[0]], x = b.arrow;
        x && d(c).css({
          left: x.x,
          top: x.y
        }).attr("class", `arrow ${u}-arrow arrow-${$}`), this.options.animation === !0 && w.attr("class", `${w.attr("class").split(" ").filter((E) => E !== "fade" && !E.startsWith("fade-from")).join(" ")} fade-from-${$}`);
      });
    }));
  }
  render(e) {
    super.render(e);
    const t = this._targetElement;
    if (!t)
      return;
    const s = this._getRenderOptions();
    if (d(t).toggleClass("popup", s.popup).css(s.style), s.className && d(t).setClass(s.className), this._dynamic) {
      let i = this._panel;
      i && i.element !== t && (i.destroy(), i = void 0), i ? i.render(s) : (i = new Ro(t, s), i.on("inited", () => this.layout())), this._panel = i;
    } else
      this.layout();
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
      onlyInner: !0
    };
  }
  _destoryTarget() {
    var e, t, s;
    (e = this._layoutWatcher) == null || e.call(this), this._layoutWatcher = void 0, this._dynamic && ((t = this._panel) == null || t.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _setTimer(e, t = 0) {
    this._timer && clearTimeout(this._timer), e && (this._timer = window.setTimeout(() => {
      this._timer = 0, e();
    }, t));
  }
  _createTarget() {
    const { container: e = "body" } = this.options, t = d(e);
    let s = t.find(`#${this._id}`);
    return s.length || (s = d("<div />").attr({ id: this._id, class: "popover" }).appendTo(t)), s[0];
  }
};
Ee.NAME = "Popover", Ee.Z_INDEX = 1700, Ee.MULTI_INSTANCE = !0, Ee.DEFAULT = {
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
let Kt = Ee;
d(document).on(`click${Kt.NAMESPACE} mouseenter${Kt.NAMESPACE}`, cu, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(Kt.KEY)) {
    const t = e.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    Kt.ensure(e, { show: !0 }), n.preventDefault();
  }
});
const Ri = class Ri extends lt {
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
    const { placement: e, strategy: t } = this.options, s = {
      placement: e,
      strategy: t,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(gn()), o && s.middleware.push(o === !0 ? fs() : fs(o)), r && s.middleware.push(Hn({ element: this.$arrow[0] })), a && s.middleware.push(yn(a)), s;
  }
  createPopper() {
    const e = this.element, t = this.$target[0];
    this.cleanup = eo(e, t, () => {
      bn(e, t, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(t.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !Hn || !r.arrow)
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
Ri.NAME = "Popovers", Ri.DEFAULT = {
  placement: "bottom",
  strategy: "fixed",
  flip: !0,
  shift: { padding: 5 },
  arrow: !1,
  offset: 1,
  trigger: "click",
  mask: !0
};
let ea = Ri;
var Js, Qs, Ft, Ii, tn, en, sn, Io, nn;
let hu = (nn = class extends H {
  constructor(t) {
    super(t);
    _(this, sn);
    _(this, Js, void 0);
    _(this, Qs, K());
    _(this, Ft, 0);
    _(this, Ii, (t) => {
      const s = this.state.value;
      t.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(t), this.focus(), s.trim() !== "" && (i == null || i("", t));
      });
    });
    _(this, tn, (t) => {
      const s = this.state.value, i = t.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || s === i || (P(this, sn, Io).call(this), C(this, Ft, window.setTimeout(() => {
          o(i, t), C(this, Ft, 0);
        }, this.props.delay || 0)));
      });
    });
    _(this, en, (t) => {
      const s = t.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(t);
      });
    });
    this.state = { focus: !1, value: t.defaultValue || "" }, C(this, Js, t.id || `search-box-${d.guid++}`);
  }
  get id() {
    return g(this, Js);
  }
  get input() {
    return g(this, Qs).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    P(this, sn, Io).call(this);
  }
  render(t, s) {
    const { style: i, className: o, rootClass: r, rootStyle: a, readonly: l, disabled: h, circle: u, placeholder: c, mergeIcon: p, searchIcon: m, clearIcon: y } = t, { focus: b, value: v } = s, { id: w } = this, $ = typeof v != "string" || !v.trim().length;
    let x, E, S;
    return m && (S = m === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(tt, { icon: m })), !p && m && (x = /* @__PURE__ */ f("label", { for: w, class: "input-control-prefix", children: S }, "prefix")), y && !$ ? E = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: g(this, Ii),
        children: y === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(tt, { icon: y })
      }
    ) : p && m && (E = S), E && (E = /* @__PURE__ */ f("label", { for: w, class: "input-control-suffix", children: E }, "suffix")), /* @__PURE__ */ f("div", { class: N("search-box input-control", r, { focus: b, empty: $, "has-prefix-icon": x, "has-suffix-icon": E }), style: a, children: [
      x,
      /* @__PURE__ */ f(
        "input",
        {
          ref: g(this, Qs),
          id: w,
          type: "text",
          class: N("form-control", o, { "rounded-full": u }),
          style: i,
          placeholder: c,
          disabled: h,
          readonly: l,
          value: v,
          onInput: g(this, tn),
          onChange: g(this, tn),
          onFocus: g(this, en),
          onBlur: g(this, en)
        }
      ),
      E
    ] });
  }
}, Js = new WeakMap(), Qs = new WeakMap(), Ft = new WeakMap(), Ii = new WeakMap(), tn = new WeakMap(), en = new WeakMap(), sn = new WeakSet(), Io = function() {
  g(this, Ft) && clearTimeout(g(this, Ft)), C(this, Ft, 0);
}, nn.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
}, nn);
const Ai = class Ai extends F {
};
Ai.NAME = "SearchBox", Ai.Component = hu;
let sa = Ai;
const Di = class Di extends F {
};
Di.NAME = "Toolbar", Di.Component = Qt;
let na = Di;
const uu = '[data-toggle="tooltip"]', Pi = class Pi extends Kt {
  _getRenderOptions() {
    const { type: e, className: t, title: s } = this.options;
    return {
      ...super._getRenderOptions(),
      className: N("tooltip", e, t, s ? "tooltip-has-title" : ""),
      contentClass: s ? "tooltip-content" : ""
    };
  }
};
Pi.NAME = "Tooltip", Pi.DEFAULT = {
  ...Kt.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip"
};
let Nt = Pi;
d(document).on(`click${Nt.NAMESPACE} mouseenter${Nt.NAMESPACE}`, uu, (n) => {
  const e = d(n.currentTarget);
  if (e.length && !e.data(Nt.KEY)) {
    const t = e.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== t)
      return;
    const i = e.attr("title"), o = e.dataset("content");
    i && e.removeAttr("title").attr("data-origin-title", i), Nt.ensure(e, { show: Nt.DEFAULT.delay || !0, content: o || i, title: o ? i : void 0 }), n.preventDefault();
  }
});
function du({
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
  hint: y,
  checked: b,
  actions: v,
  show: w,
  level: $ = 0,
  items: x,
  ...E
}) {
  const S = Array.isArray(v) ? { items: v } : v;
  return S && (S.btnProps || (S.btnProps = { size: "sm" }), S.className = N("tree-actions not-nested-toggle", S.className)), /* @__PURE__ */ f(
    "div",
    {
      className: N("tree-item-content", t, { disabled: l, active: h }),
      title: y,
      "data-target": p,
      style: Object.assign({ paddingLeft: `calc(${$} * var(--tree-indent, 20px))` }, o),
      "data-level": $,
      ...r,
      ...E,
      children: [
        /* @__PURE__ */ f("span", { class: `tree-toggle-icon${x ? " state" : ""}`, children: x ? /* @__PURE__ */ f("span", { class: `caret-${w ? "down" : "right"}` }) : null }),
        typeof b == "boolean" ? /* @__PURE__ */ f("div", { class: `tree-checkbox checkbox-primary${b ? " checked" : ""}`, children: /* @__PURE__ */ f("label", {}) }) : null,
        /* @__PURE__ */ f(tt, { icon: u, className: "tree-icon" }),
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, children: c }) : /* @__PURE__ */ f("span", { class: "text", children: c }),
        /* @__PURE__ */ f(rs, { content: i }),
        s,
        S ? /* @__PURE__ */ f(Qt, { ...S }) : null,
        /* @__PURE__ */ f(tt, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
var ns;
let fu = (ns = class extends tr {
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
}, ns.ItemComponents = {
  item: du
}, ns.NAME = "tree", ns);
const Li = class Li extends F {
};
Li.NAME = "Tree", Li.Component = fu;
let ia = Li;
const Oi = class Oi extends lt {
  init() {
    const { multiple: e, defaultFileList: t, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? zc(s) : Number.MAX_VALUE, this.currentBytes = 0, e || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), t && this.addFileItem(t);
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
    return d(`<span class="file-size text-gray">${Wc(e)}</span>`);
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
Oi.NAME = "Upload", Oi.DEFAULT = {
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
let Ao = Oi;
const Hi = class Hi extends Ao {
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
Hi.NAME = "UploadImgs", Hi.DEFAULT = {
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
let oa = Hi;
let pu = class extends H {
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
          d.isPlainObject(l) && l.html ? /* @__PURE__ */ f(dn, { class: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const ra = ([n, e, t, s], [i, o, r, a]) => !(n + t <= i || i + r <= n || e + s <= o || o + a <= e), $n = "Dashboard:Block.cache:";
var on;
let mu = (on = class extends H {
  constructor(e) {
    super(e), this.map = /* @__PURE__ */ new Map(), this._handleDragStart = (t) => {
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
      t.stopPropagation();
      const { menu: r } = o, { onClickMenu: a } = this.props;
      rt.show({
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
      s.needLoad && (t = s.id);
    }
    t.length && requestAnimationFrame(() => this.load(t));
  }
  _setCache(e, t) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? cs.set(`${$n}${s}:${e}`, t) : cs.session.set(`${$n}${e}`, t);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: e, html: t });
      }
  }
  _getCache(e) {
    const { cache: t } = this.props;
    if (!t)
      return;
    const s = typeof t == "string" ? cs.get(`${$n}${t}:${e}`) : cs.session.get(`${$n}${e}`);
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
      } = o, [y, b] = this._getBlockSize(a);
      return {
        id: `${r}`,
        width: y,
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
      if (s !== t && ra(i, e))
        return !1;
    return !0;
  }
  _insertBlock(e, t) {
    this.map.set(e, t);
    for (const [s, i] of this.map.entries())
      s !== e && ra(i, t) && (i[1] = t[1] + t[3], this._insertBlock(s, i));
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
    this.loadNext();
  }
  componentDidUpdate(e) {
    e.blocks !== this.props.blocks ? this.setState({ blocks: this._initBlocks(this.props.blocks) }) : this.loadNext();
  }
  render() {
    const { blocks: e, height: t } = this._layout(), { cellHeight: s, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f("div", { class: "dashboard-blocks", style: { height: t * s }, children: e.map((r, a) => {
      const { id: l, menu: h, content: u, title: c } = r, [p, m, y, b] = o.get(l) || [0, 0, r.width, r.height];
      return /* @__PURE__ */ f(
        pu,
        {
          id: l,
          index: a,
          left: `${100 * p / i}%`,
          top: s * m,
          width: `${100 * y / i}%`,
          height: s * b,
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
}, on.defaultProps = {
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
}, on);
const Bi = class Bi extends F {
};
Bi.NAME = "Dashboard", Bi.Component = mu;
let aa = Bi;
var jt, Vt;
class la extends H {
  constructor(t) {
    super(t);
    _(this, jt, void 0);
    _(this, Vt, void 0);
    C(this, jt, 0), C(this, Vt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (g(this, jt) && cancelAnimationFrame(g(this, jt)), C(this, jt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), C(this, jt, 0);
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
    t && (C(this, Vt, typeof t == "string" ? document : t.current), g(this, Vt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), g(this, Vt) && g(this, Vt).removeEventListener("wheel", this._handleWheel);
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
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, y = {
      left: a,
      top: l,
      bottom: h,
      right: u,
      ...r
    }, b = {};
    return s === "horz" ? (y.height = i, y.width = t, b.width = this.barSize, b.left = Math.round(Math.min(c, p) * (t - b.width) / c)) : (y.width = i, y.height = t, b.height = this.barSize, b.top = Math.round(Math.min(c, p) * (t - b.height) / c)), /* @__PURE__ */ f(
      "div",
      {
        className: N("scrollbar", o, {
          "is-vert": s === "vert",
          "is-horz": s === "horz",
          "is-dragging": m
        }),
        style: y,
        onMouseDown: this._handleClick,
        children: /* @__PURE__ */ f(
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
jt = new WeakMap(), Vt = new WeakMap();
const Vn = /* @__PURE__ */ new Map(), Un = [];
function Sl(n, e) {
  const { name: t } = n;
  if (!(e != null && e.override) && Vn.has(t))
    throw new Error(`DTable: Plugin with name ${t} already exists`);
  Vn.set(t, n), e != null && e.buildIn && !Un.includes(t) && Un.push(t);
}
function Ht(n, e) {
  Sl(n, e);
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
function El(n) {
  return Vn.delete(n);
}
function gu(n) {
  if (typeof n == "string") {
    const e = Vn.get(n);
    return e || console.warn(`DTable: Cannot found plugin "${n}"`), e;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function Tl(n, e, t) {
  return e.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = gu(s);
    i && (t.has(i.name) || ((o = i.plugins) != null && o.length && Tl(n, i.plugins, t), n.push(i), t.add(i.name)));
  }), n;
}
function yu(n = [], e = !0) {
  return e && Un.length && n.unshift(...Un), n != null && n.length ? Tl([], n, /* @__PURE__ */ new Set()) : [];
}
function ca() {
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
function bu(n, e, t) {
  return n && (e && (n = Math.max(e, n)), t && (n = Math.min(t, n))), n;
}
function ha(n, e) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof e == "number" && (typeof n != "number" || isNaN(n)) && (n = e), n;
}
function uo(n, e = !1) {
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
function wu(n, e, t, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = e, h = ($) => (typeof $ == "function" && ($ = $.call(n)), $ = ha($, 0), $ < 1 && ($ = Math.round($ * s)), $), u = {
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
  }, m = [], y = {};
  let b = !1;
  const v = [], w = {};
  if (t.forEach(($) => {
    const { colTypes: x, onAddCol: E } = $;
    x && Object.entries(x).forEach(([S, M]) => {
      w[S] || (w[S] = []), w[S].push(M);
    }), E && v.push(E);
  }), e.cols.forEach(($) => {
    if ($.hidden)
      return;
    const { type: x = "", name: E } = $, S = {
      fixed: !1,
      flex: !1,
      width: i,
      minWidth: o,
      maxWidth: r,
      ...$,
      type: x
    }, M = {
      name: E,
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
      const z = typeof O == "function" ? O.call(n, S) : O;
      z && Object.assign(S, z, $);
    });
    const { fixed: A, flex: D, minWidth: B = o, maxWidth: L = r } = S, R = ha(S.width || i, i);
    M.flex = D === !0 ? 1 : typeof D == "number" ? D : 0, M.width = bu(R < 1 ? Math.round(R * s) : R, B, L), v.forEach((O) => O.call(n, M)), m.push(M), y[M.name] = M;
    const T = A ? A === "left" ? c : p : u;
    T.list.push(M), T.totalWidth += M.width, T.width = T.totalWidth, M.flex && T.flexList.push(M), typeof S.order == "number" && (b = !0);
  }), b) {
    const $ = (x, E) => (x.setting.order ?? 0) - (E.setting.order ?? 0);
    m.sort($), c.list.sort($), u.list.sort($), p.list.sort($);
  }
  return uo(c, !0), uo(p, !0), u.widthSetting = s - c.width - p.width, uo(u), {
    list: m,
    map: y,
    left: c,
    center: u,
    right: p
  };
}
function vu({ col: n, className: e, height: t, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: u, top: c, ...p }) {
  var R;
  const m = {
    left: u ?? n.left,
    top: c ?? s.top,
    width: h ?? n.realWidth,
    height: t,
    ...r
  }, { align: y, border: b } = n.setting, v = {
    justifyContent: y ? y === "left" ? "start" : y === "right" ? "end" : y : void 0,
    ...n.setting.cellStyle,
    ...o
  }, w = ["dtable-cell", l, e, n.setting.className, {
    "has-border-left": b === !0 || b === "left",
    "has-border-right": b === !0 || b === "right"
  }], $ = ["dtable-cell-content", n.setting.cellClass], x = (R = s.data) == null ? void 0 : R[n.name], E = [a ?? x ?? ""], S = i ? i(E, { row: s, col: n, value: x }, U) : E, M = [], I = [], A = {}, D = {};
  let B = "div";
  S == null || S.forEach((T) => {
    if (typeof T == "object" && T && !X(T) && ("html" in T || "className" in T || "style" in T || "attrs" in T || "children" in T || "tagName" in T)) {
      const O = T.outer ? M : I;
      T.html ? O.push(/* @__PURE__ */ f("div", { className: N("dtable-cell-html", T.className), style: T.style, dangerouslySetInnerHTML: { __html: T.html }, ...T.attrs ?? {} })) : (T.style && Object.assign(T.outer ? m : v, T.style), T.className && (T.outer ? w : $).push(T.className), T.children && O.push(T.children), T.attrs && Object.assign(T.outer ? A : D, T.attrs)), T.tagName && !T.outer && (B = T.tagName);
    } else
      I.push(T);
  });
  const L = B;
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
        I.length > 0 && /* @__PURE__ */ f(L, { className: N($), style: v, ...D, children: I }),
        M
      ]
    }
  );
}
function fo({
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
  CellComponent: u = vu,
  onRenderCell: c
}) {
  var b;
  const p = Array.isArray(n) ? n : [n], m = ((b = p[0]) == null ? void 0 : b.top) ?? 0, y = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: N("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + m }, children: p.reduce((v, w, $) => {
        const x = e.length;
        return e.forEach((E, S) => {
          v.push(
            /* @__PURE__ */ f(
              u,
              {
                className: N(
                  `is-${w.index % 2 ? "odd" : "even"}-row`,
                  S ? "" : "is-first-in-row",
                  S === x - 1 ? "is-last-in-row" : "",
                  $ ? "" : "is-first-row",
                  $ === y - 1 ? "is-last-row" : ""
                ),
                col: E,
                row: w,
                top: w.top - m,
                height: t,
                onRenderCell: c
              },
              `${w.index}:${E.name}`
            )
          );
        }), v;
      }, []) })
    }
  );
}
function ua({
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
    fo,
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
    fo,
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
  let y = null;
  return r.list.length && (y = /* @__PURE__ */ f(
    fo,
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
        y
      ]
    }
  );
}
var Ut, Ge, Tt, wt, qt, J, vt, at, ue, rn, Xe, de, _t, fe, pe, Wi, Nl, zi, Ml, Fi, Rl, ji, Il, an, Do, Ze, Je, ln, cn, hn, un, Qe, En, Vi, Al, Ui, Dl, qi, Pl, is;
let _u = (is = class extends H {
  constructor(t) {
    super(t);
    _(this, Wi);
    _(this, zi);
    _(this, Fi);
    _(this, ji);
    _(this, an);
    _(this, Qe);
    _(this, Vi);
    _(this, Ui);
    _(this, qi);
    _(this, Ut, void 0);
    _(this, Ge, void 0);
    _(this, Tt, void 0);
    _(this, wt, void 0);
    _(this, qt, void 0);
    _(this, J, void 0);
    _(this, vt, void 0);
    _(this, at, void 0);
    _(this, ue, void 0);
    _(this, rn, void 0);
    _(this, Xe, void 0);
    _(this, de, void 0);
    _(this, _t, void 0);
    _(this, fe, void 0);
    _(this, pe, void 0);
    _(this, Ze, void 0);
    _(this, Je, void 0);
    _(this, ln, void 0);
    _(this, cn, void 0);
    _(this, hn, void 0);
    _(this, un, void 0);
    this.ref = K(), C(this, Ut, 0), C(this, Tt, !1), C(this, J, []), C(this, at, /* @__PURE__ */ new Map()), C(this, ue, {}), C(this, Xe, []), C(this, de, { in: !1 }), this.updateLayout = () => {
      g(this, Ut) && cancelAnimationFrame(g(this, Ut)), C(this, Ut, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), C(this, Ut, 0);
      }));
    }, C(this, _t, (s, i) => {
      i = i || s.type;
      const o = g(this, at).get(i);
      if (o != null && o.length) {
        for (const r of o)
          if (r.call(this, s) === !1) {
            s.stopPropagation(), s.preventDefault();
            break;
          }
      }
    }), C(this, fe, (s) => {
      g(this, _t).call(this, s, `window_${s.type}`);
    }), C(this, pe, (s) => {
      g(this, _t).call(this, s, `document_${s.type}`);
    }), C(this, Ze, (s, i, o) => {
      const { row: r, col: a } = i;
      i.value = this.getCellValue(r, a), s[0] = i.value;
      const l = r.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return g(this, J).forEach((h) => {
        h[l] && (s = h[l].call(this, s, i, o));
      }), this.options[l] && (s = this.options[l].call(this, s, i, o)), a.setting[l] && (s = a.setting[l].call(this, s, i, o)), s;
    }), C(this, Je, (s, i) => {
      i === "horz" ? this.scroll({ scrollLeft: s }) : this.scroll({ scrollTop: s });
    }), C(this, ln, (s) => {
      var l, h, u;
      const i = this.getPointerInfo(s);
      if (!i)
        return;
      const { rowID: o, colName: r, cellElement: a } = i;
      if (o === "HEADER")
        a && ((l = this.options.onHeaderCellClick) == null || l.call(this, s, { colName: r, element: a }), g(this, J).forEach((c) => {
          var p;
          (p = c.onHeaderCellClick) == null || p.call(this, s, { colName: r, element: a });
        }));
      else {
        const c = this.layout.visibleRows.find((p) => p.id === o);
        if (a) {
          if (((h = this.options.onCellClick) == null ? void 0 : h.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
            return;
          for (const p of g(this, J))
            if (((u = p.onCellClick) == null ? void 0 : u.call(this, s, { colName: r, rowID: o, rowInfo: c, element: a })) === !0)
              return;
        }
      }
    }), C(this, cn, (s) => {
      const i = s.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(i))
        return !this.scroll({ to: i.replace("page", "") });
    }), C(this, hn, (s) => {
      const i = d(s.target).closest(".dtable-cell");
      if (!i.length)
        return P(this, Qe, En).call(this, !1);
      P(this, Qe, En).call(this, [i.attr("data-row"), i.attr("data-col")]);
    }), C(this, un, () => {
      P(this, Qe, En).call(this, !1);
    }), C(this, Ge, t.id ?? `dtable-${gl(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, C(this, qt, Object.freeze(yu(t.plugins))), g(this, qt).forEach((s) => {
      var a;
      const { methods: i, data: o, state: r } = s;
      i && Object.entries(i).forEach(([l, h]) => {
        typeof h == "function" && Object.assign(this, { [l]: h.bind(this) });
      }), o && Object.assign(g(this, ue), o.call(this)), r && Object.assign(this.state, r.call(this)), (a = s.onCreate) == null || a.call(this, s);
    });
  }
  get options() {
    var t;
    return ((t = g(this, vt)) == null ? void 0 : t.options) || g(this, wt) || ca();
  }
  get plugins() {
    return g(this, J);
  }
  get layout() {
    return g(this, vt);
  }
  get id() {
    return g(this, Ge);
  }
  get data() {
    return g(this, ue);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return g(this, de);
  }
  componentWillReceiveProps() {
    C(this, wt, void 0);
  }
  componentDidMount() {
    g(this, Tt) ? this.forceUpdate() : P(this, an, Do).call(this), g(this, J).forEach((s) => {
      let { events: i } = s;
      i && (typeof i == "function" && (i = i.call(this)), Object.entries(i).forEach(([o, r]) => {
        r && this.on(o, r);
      }));
    }), this.on("click", g(this, ln)), this.on("keydown", g(this, cn));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", g(this, hn)), this.on("mouseleave", g(this, un))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: s } = this;
        if (s) {
          const i = new ResizeObserver(this.updateLayout);
          i.observe(s), C(this, rn, i);
        }
      } else
        this.on("window_resize", this.updateLayout);
    g(this, J).forEach((s) => {
      var i;
      (i = s.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    g(this, Tt) ? P(this, an, Do).call(this) : g(this, J).forEach((t) => {
      var s;
      (s = t.onUpdated) == null || s.call(this);
    });
  }
  componentWillUnmount() {
    var s;
    (s = g(this, rn)) == null || s.disconnect();
    const { element: t } = this;
    if (t)
      for (const i of g(this, at).keys())
        i.startsWith("window_") ? window.removeEventListener(i.replace("window_", ""), g(this, fe)) : i.startsWith("document_") ? document.removeEventListener(i.replace("document_", ""), g(this, pe)) : t.removeEventListener(i, g(this, _t));
    g(this, J).forEach((i) => {
      var o;
      (o = i.onUnmounted) == null || o.call(this);
    }), g(this, qt).forEach((i) => {
      var o;
      (o = i.onDestory) == null || o.call(this);
    }), C(this, ue, {}), g(this, at).clear();
  }
  on(t, s, i) {
    var r;
    i && (t = `${i}_${t}`);
    const o = g(this, at).get(t);
    o ? o.push(s) : (g(this, at).set(t, [s]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), g(this, fe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), g(this, pe)) : (r = this.element) == null || r.addEventListener(t, g(this, _t)));
  }
  off(t, s, i) {
    var a;
    i && (t = `${i}_${t}`);
    const o = g(this, at).get(t);
    if (!o)
      return;
    const r = o.indexOf(s);
    r >= 0 && o.splice(r, 1), o.length || (g(this, at).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), g(this, fe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), g(this, pe)) : (a = this.element) == null || a.removeEventListener(t, g(this, _t)));
  }
  emitCustomEvent(t, s) {
    g(this, _t).call(this, s instanceof Event ? s : new CustomEvent(t, { detail: s }), t);
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
      const { offsetLeft: b, offsetTop: v } = t;
      typeof b == "number" && (p = i + b), typeof v == "number" && (p = o + v);
    }
    const y = {};
    return typeof p == "number" && (p = Math.max(0, Math.min(p, h - u)), p !== i && (y.scrollLeft = p)), typeof m == "number" && (m = Math.max(0, Math.min(m, r - a)), m !== o && (y.scrollTop = m)), Object.keys(y).length ? (this.setState(y, () => {
      var b;
      (b = this.options.onScroll) == null || b.call(this, y), s == null || s.call(this, !0);
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
    if (!g(this, wt))
      return;
    typeof t == "function" && (s = t, t = {});
    const { dirtyType: i, state: o } = t;
    if (i === "layout")
      C(this, vt, void 0);
    else if (i === "options") {
      if (C(this, wt, void 0), !g(this, vt))
        return;
      C(this, vt, void 0);
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
    return Z(g(this, Xe), t, s, i, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((s) => s.name === t);
  }
  render() {
    const t = P(this, qi, Pl).call(this), { className: s, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: l, scrollbarHover: h } = this.options, u = {}, c = ["dtable", s, {
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
      P(this, Wi, Nl).call(this, t),
      P(this, zi, Ml).call(this, t),
      P(this, Fi, Rl).call(this, t),
      P(this, ji, Il).call(this, t)
    ), g(this, J).forEach((m) => {
      var b;
      const y = (b = m.onRender) == null ? void 0 : b.call(this, t);
      y && (y.style && Object.assign(u, y.style), y.className && c.push(y.className), y.children && p.push(y.children));
    })), /* @__PURE__ */ f(
      "div",
      {
        id: g(this, Ge),
        className: N(c),
        style: u,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
}, Ut = new WeakMap(), Ge = new WeakMap(), Tt = new WeakMap(), wt = new WeakMap(), qt = new WeakMap(), J = new WeakMap(), vt = new WeakMap(), at = new WeakMap(), ue = new WeakMap(), rn = new WeakMap(), Xe = new WeakMap(), de = new WeakMap(), _t = new WeakMap(), fe = new WeakMap(), pe = new WeakMap(), Wi = new WeakSet(), Nl = function(t) {
  const { header: s, cols: i, headerHeight: o, scrollLeft: r } = t;
  if (!s)
    return null;
  if (s === !0)
    return /* @__PURE__ */ f(
      ua,
      {
        className: "dtable-header",
        cols: i,
        height: o,
        scrollLeft: r,
        rowHeight: o,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: g(this, Ze)
      },
      "header"
    );
  const a = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    wo,
    {
      className: "dtable-header",
      style: { height: o },
      renders: a,
      generateArgs: [t],
      generatorThis: this
    },
    "header"
  );
}, zi = new WeakSet(), Ml = function(t) {
  const { headerHeight: s, rowsHeight: i, visibleRows: o, rowHeight: r, cols: a, scrollLeft: l, scrollTop: h } = t;
  return /* @__PURE__ */ f(
    ua,
    {
      className: "dtable-body",
      top: s,
      height: i,
      rows: o,
      rowHeight: r,
      scrollLeft: l,
      scrollTop: h,
      cols: a,
      onRenderCell: g(this, Ze)
    },
    "body"
  );
}, Fi = new WeakSet(), Rl = function(t) {
  let { footer: s } = t;
  if (typeof s == "function" && (s = s.call(this, t)), !s)
    return null;
  const i = Array.isArray(s) ? s : [s];
  return /* @__PURE__ */ f(
    wo,
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
}, ji = new WeakSet(), Il = function(t) {
  const s = [], { scrollLeft: i, cols: { left: { width: o }, center: { width: r, totalWidth: a } }, scrollTop: l, rowsHeight: h, rowsHeightTotal: u, footerHeight: c, headerHeight: p } = t, { scrollbarSize: m = 12, horzScrollbarPos: y } = this.options;
  return a > r && s.push(
    /* @__PURE__ */ f(
      la,
      {
        type: "horz",
        scrollPos: i,
        scrollSize: a,
        clientSize: r,
        onScroll: g(this, Je),
        left: o,
        bottom: (y === "inside" ? 0 : -m) + c,
        size: m,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: o, height: p + h } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: o + r, height: p + h } })
  ), u > h && s.push(
    /* @__PURE__ */ f(
      la,
      {
        type: "vert",
        scrollPos: l,
        scrollSize: u,
        clientSize: h,
        onScroll: g(this, Je),
        right: 0,
        size: m,
        top: p,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), s.length ? s : null;
}, an = new WeakSet(), Do = function() {
  var t;
  C(this, Tt, !1), (t = this.options.afterRender) == null || t.call(this), g(this, J).forEach((s) => {
    var i;
    return (i = s.afterRender) == null ? void 0 : i.call(this);
  });
}, Ze = new WeakMap(), Je = new WeakMap(), ln = new WeakMap(), cn = new WeakMap(), hn = new WeakMap(), un = new WeakMap(), Qe = new WeakSet(), En = function(t) {
  const { element: s, options: i } = this;
  if (!s)
    return;
  const o = d(s), r = t ? { in: !0, row: t[0], col: t[1] } : { in: !1 };
  i.colHover === "header" && r.row !== "HEADER" && (r.col = void 0);
  const a = g(this, de);
  r.in !== a.in && o.toggleClass("dtable-hover", r.in), r.row !== a.row && (o.find(".is-hover-row").removeClass("is-hover-row"), r.row && o.find(`.dtable-cell[data-row="${r.row}"]`).addClass("is-hover-row")), r.col !== a.col && (o.find(".is-hover-col").removeClass("is-hover-col"), r.col && o.find(`.dtable-cell[data-col="${r.col}"]`).addClass("is-hover-col")), C(this, de, r);
}, Vi = new WeakSet(), Al = function() {
  if (g(this, wt))
    return !1;
  const s = { ...ca(), ...g(this, qt).reduce((i, o) => {
    const { defaultOptions: r } = o;
    return r && Object.assign(i, r), i;
  }, {}), ...this.props };
  return C(this, wt, s), C(this, J, g(this, qt).reduce((i, o) => {
    const { when: r, options: a } = o;
    let l = s;
    return a && (l = Object.assign({ ...l }, typeof a == "function" ? a.call(this, s) : a)), (!r || r(l)) && (l !== s && Object.assign(s, l), i.push(o)), i;
  }, [])), C(this, Xe, [this.options.i18n, ...this.plugins.map((i) => i.i18n)].filter(Boolean)), !0;
}, Ui = new WeakSet(), Dl = function() {
  var B, L;
  const { plugins: t } = this;
  let s = g(this, wt);
  const i = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  t.forEach((R) => {
    var O;
    const T = (O = R.beforeLayout) == null ? void 0 : O.call(this, s);
    T && (s = { ...s, ...T }), Object.assign(i, R.footer);
  });
  let o = s.width, r = 0;
  if (typeof o == "function" && (o = o.call(this)), o === "100%") {
    const { parent: R } = this;
    if (R)
      r = R.clientWidth;
    else {
      C(this, Tt, !0);
      return;
    }
  }
  const a = wu(this, s, t, r), { data: l, rowKey: h = "id", rowHeight: u } = s, c = [], p = (R, T, O) => {
    var j, ot;
    const z = { data: O ?? { [h]: R }, id: R, index: c.length, top: 0 };
    if (O || (z.lazy = !0), c.push(z), ((j = s.onAddRow) == null ? void 0 : j.call(this, z, T)) !== !1) {
      for (const as of t)
        if (((ot = as.onAddRow) == null ? void 0 : ot.call(this, z, T)) === !1)
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
  const y = {};
  if (s.onAddRows) {
    const R = s.onAddRows.call(this, m);
    R && (m = R);
  }
  for (const R of t) {
    const T = (B = R.onAddRows) == null ? void 0 : B.call(this, m);
    T && (m = T);
  }
  m.forEach((R, T) => {
    y[R.id] = R, R.index = T, R.top = R.index * u;
  });
  const { header: b, footer: v } = s, w = b ? s.headerHeight || u : 0, $ = v ? s.footerHeight || u : 0;
  let x = s.height, E = 0;
  const S = m.length * u, M = w + $ + S;
  if (typeof x == "function" && (x = x.call(this, M)), x === "auto")
    E = M;
  else if (typeof x == "object")
    E = Math.min(x.max, Math.max(x.min, M));
  else if (x === "100%") {
    const { parent: R } = this;
    if (R)
      E = R.clientHeight;
    else {
      E = 0, C(this, Tt, !0);
      return;
    }
  } else
    E = x;
  const I = E - w - $, A = {
    options: s,
    allRows: c,
    width: r,
    height: E,
    rows: m,
    rowsMap: y,
    rowHeight: u,
    rowsHeight: I,
    rowsHeightTotal: S,
    header: b,
    footer: v,
    footerGenerators: i,
    headerHeight: w,
    footerHeight: $,
    cols: a
  }, D = (L = s.onLayout) == null ? void 0 : L.call(this, A);
  D && Object.assign(A, D), t.forEach((R) => {
    if (R.onLayout) {
      const T = R.onLayout.call(this, A);
      T && Object.assign(A, T);
    }
  }), C(this, vt, A);
}, qi = new WeakSet(), Pl = function() {
  (P(this, Vi, Al).call(this) || !g(this, vt)) && P(this, Ui, Dl).call(this);
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
  const { rowsHeightTotal: r, rowsHeight: a, rows: l, rowHeight: h } = t, u = Math.min(Math.max(0, r - a), this.state.scrollTop), c = Math.floor(u / h), p = u + a, m = Math.min(l.length, Math.ceil(p / h)), y = [], { rowDataGetter: b } = this.options;
  for (let v = c; v < m; v++) {
    const w = l[v];
    w.lazy && b && (w.data = b([w.id])[0], w.lazy = !1), y.push(w);
  }
  return t.visibleRows = y, t.scrollTop = u, t.scrollLeft = i, t;
}, is.addPlugin = Sl, is.removePlugin = El, is);
const Cu = {
  html: { component: dn }
}, $u = {
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
        component: dn,
        props: { html: Y(r, { value: e.value, ...e.row.data, $value: e.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(Cu[l], o == null ? void 0 : o[l]);
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
}, xu = Ht($u);
function Ll(n, e, t, s) {
  if (typeof n == "function" && (n = n(e)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return t;
  const { url: i, ...o } = n, { setting: r } = e.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: Y(i, e.row.data), ...s, ...o, ...a, children: t });
}
function or(n, e, t) {
  var s;
  if (n != null)
    return t = t ?? ((s = e.row.data) == null ? void 0 : s[e.col.name]), typeof n == "function" ? n(t, e) : Y(n, t);
}
function Ol(n, e, t, s) {
  var i;
  return t ? (t = t ?? ((i = e.row.data) == null ? void 0 : i[e.col.name]), n === !1 ? t : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(t, e)), ht(t, n, s ?? t))) : s ?? t;
}
function Hl(n, e) {
  const { link: t } = e.col.setting, s = Ll(t, e, n[0]);
  return s && (n[0] = s), n;
}
function Bl(n, e) {
  const { format: t } = e.col.setting;
  return t && (n[0] = or(t, e, n[0])), n;
}
function Wl(n, e) {
  const { map: t } = e.col.setting;
  return typeof t == "function" ? n[0] = t(n[0], e) : typeof t == "object" && t && (n[0] = t[n[0]] ?? n[0]), n;
}
function zl(n, e, t = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = t, invalidDate: i } = e.col.setting;
  return n[0] = Ol(s, e, n[0], i), n;
}
function Po(n, e, t = !1) {
  const { html: s = t } = e.col.setting;
  if (s === !1)
    return n;
  const i = n[0], o = s === !0 ? i : or(s, e, i);
  return n[0] = {
    html: o
  }, n;
}
const ku = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, e) {
        return Po(n, e, !0);
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
    if (t && (n = zl(n, e, t)), n = Wl(n, e), n = Bl(n, e), s ? n = Po(n, e) : n = Hl(n, e), i) {
      let o = n[0];
      typeof i == "function" ? o = i.call(this, e) : typeof i == "string" && (o = Y(i, e.row.data)), n.push({ attrs: { title: o } });
    }
    return n;
  }
}, Su = Ht(ku, { buildIn: !0 });
function Eu(n, e, t = !1) {
  var a, l;
  typeof n == "boolean" && (e = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, u) => {
    const c = o ? o.call(this, h) : !0;
    !c || t && c === "disabled" || !!s[h] === u || (u ? s[h] = !0 : delete s[h], i[h] = u);
  };
  if (n === void 0 ? (e === void 0 && (e = !Fl.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
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
function Tu(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Fl() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const e = this.getChecks().length, { canRowCheckable: t } = this.options;
  return t ? e === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (t.call(this, r.id) ? 1 : 0), 0)) : e === n;
}
function Nu() {
  return Object.keys(this.state.checkedRows);
}
function Mu(n) {
  const { checkable: e } = this.options;
  n === void 0 && (n = !e), e !== n && this.setState({ forceCheckable: n });
}
function da(n, e, t = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${n ? " checked" : ""}${t ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const fa = 'input[type="checkbox"],.dtable-checkbox', Ru = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: da
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
    toggleCheckRows: Eu,
    isRowChecked: Tu,
    isAllRowChecked: Fl,
    getChecks: Nu,
    toggleCheckable: Mu
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: da(n) })
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
    const t = e.closest(fa);
    t && (this.toggleCheckRows(t.checked), n.stopPropagation());
  },
  onCellClick(n, { rowID: e }) {
    const t = d(n.target);
    if (!t.length || t.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (t.closest(fa).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(e, void 0, !0);
  }
}, Iu = Ht(Ru);
var jl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(jl || {});
function qn(n) {
  const e = this.data.nestedMap.get(n);
  if (!e || e.state !== "")
    return e ?? { state: "normal", level: -1 };
  if (!e.parent && !e.children)
    return e.state = "normal", e;
  const t = this.state.collapsedRows, s = e.children && t && t[n];
  let i = !1, { parent: o } = e;
  for (; o; ) {
    const r = qn.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return e.state = i ? "hidden" : s ? "collapsed" : e.children ? "expanded" : "normal", e.level = e.parent ? qn.call(this, e.parent).level + 1 : 0, e;
}
function Au(n) {
  return n !== void 0 ? qn.call(this, n) : this.data.nestedMap;
}
function Du(n, e) {
  let t = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (e === void 0 && (e = !Vl.call(this)), e) {
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
function Vl() {
  const n = this.data.nestedMap.values();
  for (const e of n)
    if (e.state === "expanded")
      return !1;
  return !0;
}
function Ul(n, e = 0, t, s = 0) {
  var i;
  t || (t = [...n.keys()]);
  for (const o of t) {
    const r = n.get(o);
    r && (r.level === s && (r.order = e++), (i = r.children) != null && i.length && (e = Ul(n, e, r.children, s + 1)));
  }
  return e;
}
function ql(n, e, t, s) {
  const i = n.getNestedRowInfo(e);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = t, ql(n, o, t, s);
  }), i;
}
function Yl(n, e, t, s, i) {
  var a;
  const o = n.getNestedRowInfo(e);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return t === h;
  })) && (s[e] = t), o.parent && Yl(n, o.parent, t, s, i);
}
const Pu = {
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
        const r = ql(this, i, o, s);
        r != null && r.parent && Yl(this, r.parent, o, s, t);
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
    getNestedInfo: Au,
    toggleRow: Du,
    isAllCollapsed: Vl,
    getNestedRowInfo: qn
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
    ), Ul(this.data.nestedMap), n.sort((e, t) => {
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
}, Lu = Ht(Pu);
function po(n, { row: e, col: t }) {
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
  if (n[0] = /* @__PURE__ */ f(yl, { ...c }), t.type === "avatarBtn") {
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
const Ou = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: po
    },
    avatarBtn: {
      onRenderCell: po
    },
    avatarName: {
      onRenderCell: po
    }
  }
}, Hu = Ht(Ou, { buildIn: !0 }), Bu = {
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
}, Wu = Ht(Bu, { buildIn: !0 }), mo = (n) => {
  n.length !== 1 && n.forEach((e, t) => {
    !t || e.setting.border || e.setting.group === n[t - 1].setting.group || (e.setting.border = "left");
  });
}, zu = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: e } = n;
    mo(e.left.list), mo(e.center.list), mo(e.right.list);
  }
}, Fu = Ht(zu), ju = {
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
        const { index: y } = p, b = `C${y}R${c}`;
        if (s.has(b))
          return;
        const v = e.call(this, { row: h, col: p });
        if (!v)
          return;
        const w = Math.min(v.colSpan || 1, l.length - m), $ = Math.min(v.rowSpan || 1, i.length - u);
        if (w <= 1 && $ <= 1)
          return;
        let x = 0;
        for (let E = 0; E < w; E++) {
          x += l[m + E].realWidth;
          for (let S = 0; S < $; S++) {
            const M = `C${y + E}R${c + S}`;
            M !== b && s.add(M);
          }
        }
        t.set(b, {
          colSpan: w,
          rowSpan: $,
          width: x,
          height: r * $
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
}, Vu = Ht(ju), Uu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: jl,
  avatar: Hu,
  cellspan: Vu,
  checkable: Iu,
  custom: xu,
  group: Fu,
  nested: Lu,
  renderDatetime: Ol,
  renderDatetimeCell: zl,
  renderFormat: or,
  renderFormatCell: Bl,
  renderHtmlCell: Po,
  renderLink: Ll,
  renderLinkCell: Hl,
  renderMapCell: Wl,
  rich: Su,
  sortType: Wu
}, Symbol.toStringTag, { value: "Module" })), ie = class ie extends F {
};
ie.NAME = "DTable", ie.Component = _u, ie.definePlugin = Ht, ie.removePlugin = El, ie.plugins = Uu;
let pa = ie;
const qu = "nav", Tn = '[data-toggle="tab"]', Yu = "active";
var me;
const cr = class cr extends lt {
  constructor() {
    super(...arguments);
    _(this, me, 0);
  }
  active(t) {
    const s = this.$element, i = s.find(Tn);
    let o = t ? d(t).closest(Tn) : i.filter(`.${Yu}`);
    if (!o.length && (o = s.find(Tn).first(), !o.length))
      return;
    i.removeClass("active"), o.addClass("active");
    const r = o.attr("href") || o.data("target"), a = o.data("name") || r, l = d(r);
    l.length && (l.parent().children(".tab-pane").removeClass("active in"), l.addClass("active").trigger("show", [a]), this.emit("show", a), g(this, me) && clearTimeout(g(this, me)), C(this, me, setTimeout(() => {
      l.addClass("in").trigger("show", [a]), this.emit("shown", a), C(this, me, 0);
    }, 10)));
  }
};
me = new WeakMap(), cr.NAME = "Tabs";
let Lo = cr;
d(document).on("click.tabs.zui", Tn, (n) => {
  n.preventDefault();
  const e = d(n.target), t = e.closest(`.${qu}`);
  t.length && Lo.ensure(t).active(e);
});
d(() => {
  d(".disabled, [disabled]").on("click", (n) => {
    n.preventDefault(), n.stopImmediatePropagation();
  });
});
export {
  d as $,
  Sr as ActionMenu,
  Er as ActionMenuNested,
  Wr as Avatar,
  zr as BtnGroup,
  Fr as ColorPicker,
  lt as Component,
  F as ComponentFromReact,
  rt as ContextMenu,
  rs as CustomContent,
  wo as CustomRender,
  pa as DTable,
  aa as Dashboard,
  Yr as DatePicker,
  Xt as Dropdown,
  ml as EventBus,
  Ga as HElement,
  dn as HtmlContent,
  tt as Icon,
  Tr as Menu,
  Pr as Messager,
  To as Modal,
  Lt as ModalBase,
  jn as ModalTrigger,
  Gr as Nav,
  Xr as Pager,
  Zr as Pick,
  Jr as Picker,
  Kt as Popover,
  Ro as PopoverPanel,
  ea as Popovers,
  Lr as ProgressCircle,
  H as ReactComponent,
  sa as SearchBox,
  ms as TIME_DAY,
  Lo as Tabs,
  qr as TimePicker,
  na as Toolbar,
  Nt as Tooltip,
  ia as Tree,
  Ao as Upload,
  oa as UploadImgs,
  Lh as addDate,
  d as cash,
  N as classes,
  xn as componentsMap,
  zc as convertBytes,
  Uc as create,
  G as createDate,
  sh as createPortal,
  K as createRef,
  Bc as deepGet,
  Hc as deepGetPath,
  Gu as defineFn,
  In as delay,
  Xu as dom,
  Wc as formatBytes,
  ht as formatDate,
  id as formatDateSpan,
  Y as formatString,
  Da as getClassList,
  An as getComponent,
  U as h,
  Zu as hh,
  Zc as htm,
  Z as i18n,
  wn as isSameDay,
  wl as isSameMonth,
  td as isSameWeek,
  So as isSameYear,
  ed as isToday,
  nd as isTomorrow,
  X as isValidElement,
  sd as isYesterday,
  Or as nativeEvents,
  ds as render,
  Xa as renderCustomContent,
  Qc as renderCustomResult,
  cs as store,
  Pa as storeData,
  La as takeData
};
//# sourceMappingURL=zui.js.map
