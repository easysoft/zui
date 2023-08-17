var Ks = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
};
var T = (n, t, e) => (Ks(n, t, "read from private field"), e ? e.call(n) : t.get(n)), D = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, L = (n, t, e, s) => (Ks(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
var $t = (n, t, e) => (Ks(n, t, "access private method"), e);
const Rt = document, ts = window, Cr = Rt.documentElement, ge = Rt.createElement.bind(Rt), kr = ge("div"), Xs = ge("table"), jl = ge("tbody"), Ho = ge("tr"), { isArray: As, prototype: $r } = Array, { concat: ql, filter: Yi, indexOf: xr, map: Tr, push: Yl, slice: Er, some: Gi, splice: Gl } = $r, Kl = /^#(?:[\w-]|\\.|[^\x00-\xa0])*$/, Xl = /^\.(?:[\w-]|\\.|[^\x00-\xa0])*$/, Zl = /<.+>/, Jl = /^\w+$/;
function Ki(n, t) {
  const e = Ql(t);
  return !n || !e && !ue(t) && !j(t) ? [] : !e && Xl.test(n) ? t.getElementsByClassName(n.slice(1).replace(/\\/g, "")) : !e && Jl.test(n) ? t.getElementsByTagName(n) : t.querySelectorAll(n);
}
class Ps {
  constructor(t, e) {
    if (!t)
      return;
    if (hi(t))
      return t;
    let s = t;
    if (et(t)) {
      const i = e || Rt;
      if (s = Kl.test(t) && ue(i) ? i.getElementById(t.slice(1).replace(/\\/g, "")) : Zl.test(t) ? Nr(t) : hi(i) ? i.find(t) : et(i) ? u(i).find(t) : Ki(t, i), !s)
        return;
    } else if (ye(t))
      return this.ready(t);
    (s.nodeType || s === ts) && (s = [s]), this.length = s.length;
    for (let i = 0, o = this.length; i < o; i++)
      this[i] = s[i];
  }
  init(t, e) {
    return new Ps(t, e);
  }
}
const C = Ps.prototype, u = C.init;
u.fn = u.prototype = C;
C.length = 0;
C.splice = Gl;
typeof Symbol == "function" && (C[Symbol.iterator] = $r[Symbol.iterator]);
function hi(n) {
  return n instanceof Ps;
}
function Pe(n) {
  return !!n && n === n.window;
}
function ue(n) {
  return !!n && n.nodeType === 9;
}
function Ql(n) {
  return !!n && n.nodeType === 11;
}
function j(n) {
  return !!n && n.nodeType === 1;
}
function tc(n) {
  return !!n && n.nodeType === 3;
}
function ec(n) {
  return typeof n == "boolean";
}
function ye(n) {
  return typeof n == "function";
}
function et(n) {
  return typeof n == "string";
}
function rt(n) {
  return n === void 0;
}
function nn(n) {
  return n === null;
}
function Sr(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function Xi(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const t = Object.getPrototypeOf(n);
  return t === null || t === Object.prototype;
}
u.isWindow = Pe;
u.isFunction = ye;
u.isArray = As;
u.isNumeric = Sr;
u.isPlainObject = Xi;
function Y(n, t, e) {
  if (e) {
    let s = n.length;
    for (; s--; )
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  } else if (Xi(n)) {
    const s = Object.keys(n);
    for (let i = 0, o = s.length; i < o; i++) {
      const r = s[i];
      if (t.call(n[r], r, n[r]) === !1)
        return n;
    }
  } else
    for (let s = 0, i = n.length; s < i; s++)
      if (t.call(n[s], s, n[s]) === !1)
        return n;
  return n;
}
u.each = Y;
C.each = function(n) {
  return Y(this, n);
};
C.empty = function() {
  return this.each((n, t) => {
    for (; t.firstChild; )
      t.removeChild(t.firstChild);
  });
};
function es(...n) {
  const t = ec(n[0]) ? n.shift() : !1, e = n.shift(), s = n.length;
  if (!e)
    return {};
  if (!s)
    return es(t, u, e);
  for (let i = 0; i < s; i++) {
    const o = n[i];
    for (const r in o)
      t && (As(o[r]) || Xi(o[r])) ? ((!e[r] || e[r].constructor !== o[r].constructor) && (e[r] = new o[r].constructor()), es(t, e[r], o[r])) : e[r] = o[r];
  }
  return e;
}
u.extend = es;
C.extend = function(n) {
  return es(C, n);
};
const nc = /\S+/g;
function Is(n) {
  return et(n) ? n.match(nc) || [] : [];
}
C.toggleClass = function(n, t) {
  const e = Is(n), s = !rt(t);
  return this.each((i, o) => {
    j(o) && Y(e, (r, a) => {
      s ? t ? o.classList.add(a) : o.classList.remove(a) : o.classList.toggle(a);
    });
  });
};
C.addClass = function(n) {
  return this.toggleClass(n, !0);
};
C.removeAttr = function(n) {
  const t = Is(n);
  return this.each((e, s) => {
    j(s) && Y(t, (i, o) => {
      s.removeAttribute(o);
    });
  });
};
function sc(n, t) {
  if (n) {
    if (et(n)) {
      if (arguments.length < 2) {
        if (!this[0] || !j(this[0]))
          return;
        const e = this[0].getAttribute(n);
        return nn(e) ? void 0 : e;
      }
      return rt(t) ? this : nn(t) ? this.removeAttr(n) : this.each((e, s) => {
        j(s) && s.setAttribute(n, t);
      });
    }
    for (const e in n)
      this.attr(e, n[e]);
    return this;
  }
}
C.attr = sc;
C.removeClass = function(n) {
  return arguments.length ? this.toggleClass(n, !1) : this.attr("class", "");
};
C.hasClass = function(n) {
  return !!n && Gi.call(this, (t) => j(t) && t.classList.contains(n));
};
C.get = function(n) {
  return rt(n) ? Er.call(this) : (n = Number(n), this[n < 0 ? n + this.length : n]);
};
C.eq = function(n) {
  return u(this.get(n));
};
C.first = function() {
  return this.eq(0);
};
C.last = function() {
  return this.eq(-1);
};
function ic(n) {
  return rt(n) ? this.get().map((t) => j(t) || tc(t) ? t.textContent : "").join("") : this.each((t, e) => {
    j(e) && (e.textContent = n);
  });
}
C.text = ic;
function Lt(n, t, e) {
  if (!j(n))
    return;
  const s = ts.getComputedStyle(n, null);
  return e ? s.getPropertyValue(t) || void 0 : s[t] || n.style[t];
}
function wt(n, t) {
  return parseInt(Lt(n, t), 10) || 0;
}
function Fo(n, t) {
  return wt(n, `border${t ? "Left" : "Top"}Width`) + wt(n, `padding${t ? "Left" : "Top"}`) + wt(n, `padding${t ? "Right" : "Bottom"}`) + wt(n, `border${t ? "Right" : "Bottom"}Width`);
}
const Zs = {};
function oc(n) {
  if (Zs[n])
    return Zs[n];
  const t = ge(n);
  Rt.body.insertBefore(t, null);
  const e = Lt(t, "display");
  return Rt.body.removeChild(t), Zs[n] = e !== "none" ? e : "block";
}
function zo(n) {
  return Lt(n, "display") === "none";
}
function Mr(n, t) {
  const e = n && (n.matches || n.webkitMatchesSelector || n.msMatchesSelector);
  return !!e && !!t && e.call(n, t);
}
function Rs(n) {
  return et(n) ? (t, e) => Mr(e, n) : ye(n) ? n : hi(n) ? (t, e) => n.is(e) : n ? (t, e) => e === n : () => !1;
}
C.filter = function(n) {
  const t = Rs(n);
  return u(Yi.call(this, (e, s) => t.call(e, s, e)));
};
function Jt(n, t) {
  return t ? n.filter(t) : n;
}
C.detach = function(n) {
  return Jt(this, n).each((t, e) => {
    e.parentNode && e.parentNode.removeChild(e);
  }), this;
};
const rc = /^\s*<(\w+)[^>]*>/, ac = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, Vo = {
  "*": kr,
  tr: jl,
  td: Ho,
  th: Ho,
  thead: Xs,
  tbody: Xs,
  tfoot: Xs
};
function Nr(n) {
  if (!et(n))
    return [];
  if (ac.test(n))
    return [ge(RegExp.$1)];
  const t = rc.test(n) && RegExp.$1, e = Vo[t] || Vo["*"];
  return e.innerHTML = n, u(e.childNodes).detach().get();
}
u.parseHTML = Nr;
C.has = function(n) {
  const t = et(n) ? (e, s) => Ki(n, s).length : (e, s) => s.contains(n);
  return this.filter(t);
};
C.not = function(n) {
  const t = Rs(n);
  return this.filter((e, s) => (!et(n) || j(s)) && !t.call(s, e, s));
};
function Ot(n, t, e, s) {
  const i = [], o = ye(t), r = s && Rs(s);
  for (let a = 0, l = n.length; a < l; a++)
    if (o) {
      const h = t(n[a]);
      h.length && Yl.apply(i, h);
    } else {
      let h = n[a][t];
      for (; h != null && !(s && r(-1, h)); )
        i.push(h), h = e ? h[t] : null;
    }
  return i;
}
function Dr(n) {
  return n.multiple && n.options ? Ot(Yi.call(n.options, (t) => t.selected && !t.disabled && !t.parentNode.disabled), "value") : n.value || "";
}
function lc(n) {
  return arguments.length ? this.each((t, e) => {
    const s = e.multiple && e.options;
    if (s || Br.test(e.type)) {
      const i = As(n) ? Tr.call(n, String) : nn(n) ? [] : [String(n)];
      s ? Y(e.options, (o, r) => {
        r.selected = i.indexOf(r.value) >= 0;
      }, !0) : e.checked = i.indexOf(e.value) >= 0;
    } else
      e.value = rt(n) || nn(n) ? "" : n;
  }) : this[0] && Dr(this[0]);
}
C.val = lc;
C.is = function(n) {
  const t = Rs(n);
  return Gi.call(this, (e, s) => t.call(e, s, e));
};
u.guid = 1;
function kt(n) {
  return n.length > 1 ? Yi.call(n, (t, e, s) => xr.call(s, t) === e) : n;
}
u.unique = kt;
C.add = function(n, t) {
  return u(kt(this.get().concat(u(n, t).get())));
};
C.children = function(n) {
  return Jt(u(kt(Ot(this, (t) => t.children))), n);
};
C.parent = function(n) {
  return Jt(u(kt(Ot(this, "parentNode"))), n);
};
C.index = function(n) {
  const t = n ? u(n)[0] : this[0], e = n ? this : u(t).parent().children();
  return xr.call(e, t);
};
C.closest = function(n) {
  const t = this.filter(n);
  if (t.length)
    return t;
  const e = this.parent();
  return e.length ? e.closest(n) : t;
};
C.siblings = function(n) {
  return Jt(u(kt(Ot(this, (t) => u(t).parent().children().not(t)))), n);
};
C.find = function(n) {
  return u(kt(Ot(this, (t) => Ki(n, t))));
};
const cc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, hc = /^$|^module$|\/(java|ecma)script/i, dc = ["type", "src", "nonce", "noModule"];
function uc(n, t) {
  const e = u(n);
  e.filter("script").add(e.find("script")).each((s, i) => {
    if (hc.test(i.type) && Cr.contains(i)) {
      const o = ge("script");
      o.text = i.textContent.replace(cc, ""), Y(dc, (r, a) => {
        i[a] && (o[a] = i[a]);
      }), t.head.insertBefore(o, null), t.head.removeChild(o);
    }
  });
}
function fc(n, t, e, s, i) {
  s ? n.insertBefore(t, e ? n.firstChild : null) : n.nodeName === "HTML" ? n.parentNode.replaceChild(t, n) : n.parentNode.insertBefore(t, e ? n : n.nextSibling), i && uc(t, n.ownerDocument);
}
function Qt(n, t, e, s, i, o, r, a) {
  return Y(n, (l, h) => {
    Y(u(h), (d, c) => {
      Y(u(t), (p, m) => {
        const g = e ? c : m, y = e ? m : c, v = e ? d : p;
        fc(g, v ? y.cloneNode(!0) : y, s, i, !v);
      }, a);
    }, r);
  }, o), t;
}
C.after = function() {
  return Qt(arguments, this, !1, !1, !1, !0, !0);
};
C.append = function() {
  return Qt(arguments, this, !1, !1, !0);
};
function pc(n) {
  if (!arguments.length)
    return this[0] && this[0].innerHTML;
  if (rt(n))
    return this;
  const t = /<script[\s>]/.test(n);
  return this.each((e, s) => {
    j(s) && (t ? u(s).empty().append(n) : s.innerHTML = n);
  });
}
C.html = pc;
C.appendTo = function(n) {
  return Qt(arguments, this, !0, !1, !0);
};
C.wrapInner = function(n) {
  return this.each((t, e) => {
    const s = u(e), i = s.contents();
    i.length ? i.wrapAll(n) : s.append(n);
  });
};
C.before = function() {
  return Qt(arguments, this, !1, !0);
};
C.wrapAll = function(n) {
  let t = u(n), e = t[0];
  for (; e.children.length; )
    e = e.firstElementChild;
  return this.first().before(t), this.appendTo(e);
};
C.wrap = function(n) {
  return this.each((t, e) => {
    const s = u(n)[0];
    u(e).wrapAll(t ? s.cloneNode(!0) : s);
  });
};
C.insertAfter = function(n) {
  return Qt(arguments, this, !0, !1, !1, !1, !1, !0);
};
C.insertBefore = function(n) {
  return Qt(arguments, this, !0, !0);
};
C.prepend = function() {
  return Qt(arguments, this, !1, !0, !0, !0, !0);
};
C.prependTo = function(n) {
  return Qt(arguments, this, !0, !0, !0, !1, !1, !0);
};
C.contents = function() {
  return u(kt(Ot(this, (n) => n.tagName === "IFRAME" ? [n.contentDocument] : n.tagName === "TEMPLATE" ? n.content.childNodes : n.childNodes)));
};
C.next = function(n, t, e) {
  return Jt(u(kt(Ot(this, "nextElementSibling", t, e))), n);
};
C.nextAll = function(n) {
  return this.next(n, !0);
};
C.nextUntil = function(n, t) {
  return this.next(t, !0, n);
};
C.parents = function(n, t) {
  return Jt(u(kt(Ot(this, "parentElement", !0, t))), n);
};
C.parentsUntil = function(n, t) {
  return this.parents(t, n);
};
C.prev = function(n, t, e) {
  return Jt(u(kt(Ot(this, "previousElementSibling", t, e))), n);
};
C.prevAll = function(n) {
  return this.prev(n, !0);
};
C.prevUntil = function(n, t) {
  return this.prev(t, !0, n);
};
C.map = function(n) {
  return u(ql.apply([], Tr.call(this, (t, e) => n.call(t, e, t))));
};
C.clone = function() {
  return this.map((n, t) => t.cloneNode(!0));
};
C.offsetParent = function() {
  return this.map((n, t) => {
    let e = t.offsetParent;
    for (; e && Lt(e, "position") === "static"; )
      e = e.offsetParent;
    return e || Cr;
  });
};
C.slice = function(n, t) {
  return u(Er.call(this, n, t));
};
const mc = /-([a-z])/g;
function Zi(n) {
  return n.replace(mc, (t, e) => e.toUpperCase());
}
C.ready = function(n) {
  const t = () => setTimeout(n, 0, u);
  return Rt.readyState !== "loading" ? t() : Rt.addEventListener("DOMContentLoaded", t), this;
};
C.unwrap = function() {
  return this.parent().each((n, t) => {
    if (t.tagName === "BODY")
      return;
    const e = u(t);
    e.replaceWith(e.children());
  }), this;
};
C.offset = function() {
  const n = this[0];
  if (!n)
    return;
  const t = n.getBoundingClientRect();
  return {
    top: t.top + ts.pageYOffset,
    left: t.left + ts.pageXOffset
  };
};
C.position = function() {
  const n = this[0];
  if (!n)
    return;
  const t = Lt(n, "position") === "fixed", e = t ? n.getBoundingClientRect() : this.offset();
  if (!t) {
    const s = n.ownerDocument;
    let i = n.offsetParent || s.documentElement;
    for (; (i === s.body || i === s.documentElement) && Lt(i, "position") === "static"; )
      i = i.parentNode;
    if (i !== n && j(i)) {
      const o = u(i).offset();
      e.top -= o.top + wt(i, "borderTopWidth"), e.left -= o.left + wt(i, "borderLeftWidth");
    }
  }
  return {
    top: e.top - wt(n, "marginTop"),
    left: e.left - wt(n, "marginLeft")
  };
};
const Ar = {
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
C.prop = function(n, t) {
  if (n) {
    if (et(n))
      return n = Ar[n] || n, arguments.length < 2 ? this[0] && this[0][n] : this.each((e, s) => {
        s[n] = t;
      });
    for (const e in n)
      this.prop(e, n[e]);
    return this;
  }
};
C.removeProp = function(n) {
  return this.each((t, e) => {
    delete e[Ar[n] || n];
  });
};
const gc = /^--/;
function Ji(n) {
  return gc.test(n);
}
const Js = {}, { style: yc } = kr, _c = ["webkit", "moz", "ms"];
function vc(n, t = Ji(n)) {
  if (t)
    return n;
  if (!Js[n]) {
    const e = Zi(n), s = `${e[0].toUpperCase()}${e.slice(1)}`, i = `${e} ${_c.join(`${s} `)}${s}`.split(" ");
    Y(i, (o, r) => {
      if (r in yc)
        return Js[n] = r, !1;
    });
  }
  return Js[n];
}
const wc = {
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
function Pr(n, t, e = Ji(n)) {
  return !e && !wc[n] && Sr(t) ? `${t}px` : t;
}
function bc(n, t) {
  if (et(n)) {
    const e = Ji(n);
    return n = vc(n, e), arguments.length < 2 ? this[0] && Lt(this[0], n, e) : n ? (t = Pr(n, t, e), this.each((s, i) => {
      j(i) && (e ? i.style.setProperty(n, t) : i.style[n] = t);
    })) : this;
  }
  for (const e in n)
    this.css(e, n[e]);
  return this;
}
C.css = bc;
function Ir(n, t) {
  try {
    return n(t);
  } catch {
    return t;
  }
}
const Cc = /^\s+|\s+$/;
function Uo(n, t) {
  const e = n.dataset[t] || n.dataset[Zi(t)];
  return Cc.test(e) ? e : Ir(JSON.parse, e);
}
function kc(n, t, e) {
  e = Ir(JSON.stringify, e), n.dataset[Zi(t)] = e;
}
function $c(n, t) {
  if (!n) {
    if (!this[0])
      return;
    const e = {};
    for (const s in this[0].dataset)
      e[s] = Uo(this[0], s);
    return e;
  }
  if (et(n))
    return arguments.length < 2 ? this[0] && Uo(this[0], n) : rt(t) ? this : this.each((e, s) => {
      kc(s, n, t);
    });
  for (const e in n)
    this.data(e, n[e]);
  return this;
}
C.data = $c;
function Rr(n, t) {
  const e = n.documentElement;
  return Math.max(n.body[`scroll${t}`], e[`scroll${t}`], n.body[`offset${t}`], e[`offset${t}`], e[`client${t}`]);
}
Y([!0, !1], (n, t) => {
  Y(["Width", "Height"], (e, s) => {
    const i = `${t ? "outer" : "inner"}${s}`;
    C[i] = function(o) {
      if (this[0])
        return Pe(this[0]) ? t ? this[0][`inner${s}`] : this[0].document.documentElement[`client${s}`] : ue(this[0]) ? Rr(this[0], s) : this[0][`${t ? "offset" : "client"}${s}`] + (o && t ? wt(this[0], `margin${e ? "Top" : "Left"}`) + wt(this[0], `margin${e ? "Bottom" : "Right"}`) : 0);
    };
  });
});
Y(["Width", "Height"], (n, t) => {
  const e = t.toLowerCase();
  C[e] = function(s) {
    if (!this[0])
      return rt(s) ? void 0 : this;
    if (!arguments.length)
      return Pe(this[0]) ? this[0].document.documentElement[`client${t}`] : ue(this[0]) ? Rr(this[0], t) : this[0].getBoundingClientRect()[e] - Fo(this[0], !n);
    const i = parseInt(s, 10);
    return this.each((o, r) => {
      if (!j(r))
        return;
      const a = Lt(r, "boxSizing");
      r.style[e] = Pr(e, i + (a === "border-box" ? Fo(r, !n) : 0));
    });
  };
});
const jo = "___cd";
C.toggle = function(n) {
  return this.each((t, e) => {
    if (!j(e))
      return;
    const s = zo(e);
    (rt(n) ? s : n) ? (e.style.display = e[jo] || "", zo(e) && (e.style.display = oc(e.tagName))) : s || (e[jo] = Lt(e, "display"), e.style.display = "none");
  });
};
C.hide = function() {
  return this.toggle(!1);
};
C.show = function() {
  return this.toggle(!0);
};
const qo = "___ce", Qi = ".", to = { focus: "focusin", blur: "focusout" }, Lr = { mouseenter: "mouseover", mouseleave: "mouseout" }, xc = /^(mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;
function eo(n) {
  return Lr[n] || to[n] || n;
}
function no(n) {
  const t = n.split(Qi);
  return [t[0], t.slice(1).sort()];
}
C.trigger = function(n, t) {
  if (et(n)) {
    const [s, i] = no(n), o = eo(s);
    if (!o)
      return this;
    const r = xc.test(o) ? "MouseEvents" : "HTMLEvents";
    n = Rt.createEvent(r), n.initEvent(o, !0, !0), n.namespace = i.join(Qi), n.___ot = s;
  }
  n.___td = t;
  const e = n.___ot in to;
  return this.each((s, i) => {
    e && ye(i[n.___ot]) && (i[`___i${n.type}`] = !0, i[n.___ot](), i[`___i${n.type}`] = !1), i.dispatchEvent(n);
  });
};
function Wr(n) {
  return n[qo] = n[qo] || {};
}
function Tc(n, t, e, s, i) {
  const o = Wr(n);
  o[t] = o[t] || [], o[t].push([e, s, i]), n.addEventListener(t, i);
}
function Or(n, t) {
  return !t || !Gi.call(t, (e) => n.indexOf(e) < 0);
}
function ns(n, t, e, s, i) {
  const o = Wr(n);
  if (t)
    o[t] && (o[t] = o[t].filter(([r, a, l]) => {
      if (i && l.guid !== i.guid || !Or(r, e) || s && s !== a)
        return !0;
      n.removeEventListener(t, l);
    }));
  else
    for (t in o)
      ns(n, t, e, s, i);
}
C.off = function(n, t, e) {
  if (rt(n))
    this.each((s, i) => {
      !j(i) && !ue(i) && !Pe(i) || ns(i);
    });
  else if (et(n))
    ye(t) && (e = t, t = ""), Y(Is(n), (s, i) => {
      const [o, r] = no(i), a = eo(o);
      this.each((l, h) => {
        !j(h) && !ue(h) && !Pe(h) || ns(h, a, r, t, e);
      });
    });
  else
    for (const s in n)
      this.off(s, n[s]);
  return this;
};
C.remove = function(n) {
  return Jt(this, n).detach().off(), this;
};
C.replaceWith = function(n) {
  return this.before(n).remove();
};
C.replaceAll = function(n) {
  return u(n).replaceWith(this), this;
};
function Ec(n, t, e, s, i) {
  if (!et(n)) {
    for (const o in n)
      this.on(o, t, e, n[o], i);
    return this;
  }
  return et(t) || (rt(t) || nn(t) ? t = "" : rt(e) ? (e = t, t = "") : (s = e, e = t, t = "")), ye(s) || (s = e, e = void 0), s ? (Y(Is(n), (o, r) => {
    const [a, l] = no(r), h = eo(a), d = a in Lr, c = a in to;
    h && this.each((p, m) => {
      if (!j(m) && !ue(m) && !Pe(m))
        return;
      const g = function(y) {
        if (y.target[`___i${y.type}`])
          return y.stopImmediatePropagation();
        if (y.namespace && !Or(l, y.namespace.split(Qi)) || !t && (c && (y.target !== m || y.___ot === h) || d && y.relatedTarget && m.contains(y.relatedTarget)))
          return;
        let v = m;
        if (t) {
          let w = y.target;
          for (; !Mr(w, t); )
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
        const _ = s.call(v, y, y.___td);
        i && ns(m, h, l, t, g), _ === !1 && (y.preventDefault(), y.stopPropagation());
      };
      g.guid = s.guid = s.guid || u.guid++, Tc(m, h, l, t, g);
    });
  }), this) : this;
}
C.on = Ec;
function Sc(n, t, e, s) {
  return this.on(n, t, e, s, !0);
}
C.one = Sc;
const Mc = /\r?\n/g;
function Nc(n, t) {
  return `&${encodeURIComponent(n)}=${encodeURIComponent(t.replace(Mc, `\r
`))}`;
}
const Dc = /file|reset|submit|button|image/i, Br = /radio|checkbox/i;
C.serialize = function() {
  let n = "";
  return this.each((t, e) => {
    Y(e.elements || [e], (s, i) => {
      if (i.disabled || !i.name || i.tagName === "FIELDSET" || Dc.test(i.type) || Br.test(i.type) && !i.checked)
        return;
      const o = Dr(i);
      if (!rt(o)) {
        const r = As(o) ? o : [o];
        Y(r, (a, l) => {
          n += Nc(i.name, l);
        });
      }
    });
  }), n.slice(1);
};
window.$ = u;
function Ac(n, t) {
  if (n == null)
    return [n, void 0];
  typeof t == "string" && (t = t.split("."));
  const e = t.join(".");
  let s = n;
  const i = [s];
  for (; typeof s == "object" && s !== null && t.length; ) {
    let o = t.shift(), r;
    const a = o.indexOf("[");
    if (a > 0 && a < o.length - 1 && o.endsWith("]") && (r = o.substring(a + 1, o.length - 1), o = o.substring(0, a)), s = s[o], i.push(s), r !== void 0)
      if (typeof s == "object" && s !== null)
        s instanceof Map ? s = s.get(r) : s = s[r], i.push(s);
      else
        throw new Error(`Cannot access property "${o}[${r}]", the full path is "${e}".`);
  }
  if (t.length)
    throw new Error(`Cannot access property with rest path "${t.join(".")}", the full path is "${e}".`);
  return i;
}
function Pc(n, t, e) {
  try {
    const s = Ac(n, t), i = s[s.length - 1];
    return i === void 0 ? e : i;
  } catch {
    return e;
  }
}
function K(n, ...t) {
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
var so = /* @__PURE__ */ ((n) => (n[n.B = 1] = "B", n[n.KB = 1024] = "KB", n[n.MB = 1048576] = "MB", n[n.GB = 1073741824] = "GB", n[n.TB = 1099511627776] = "TB", n))(so || {});
function Ic(n, t = 2, e) {
  return Number.isNaN(n) ? "?KB" : (e || (n < 1024 ? e = "B" : n < 1048576 ? e = "KB" : n < 1073741824 ? e = "MB" : n < 1099511627776 ? e = "GB" : e = "TB"), (n / so[e]).toFixed(t) + e);
}
const Rc = (n) => {
  const t = /^[0-9]*(B|KB|MB|GB|TB)$/;
  n = n.toUpperCase();
  const e = n.match(t);
  if (!e)
    return 0;
  const s = e[1];
  return n = n.replace(s, ""), Number.parseInt(n, 10) * so[s];
};
let io = (document.documentElement.getAttribute("lang") || "zh_cn").toLowerCase().replace("-", "_"), Ut;
function Lc() {
  return io;
}
function Wc(n) {
  io = n.toLowerCase();
}
function Hr(n, t) {
  Ut || (Ut = {}), typeof n == "string" && (n = { [n]: t ?? {} }), u.extend(!0, Ut, n);
}
function G(n, t, e, s, i, o) {
  Array.isArray(n) ? Ut && n.unshift(Ut) : n = Ut ? [Ut, n] : [n], typeof e == "string" && (o = i, i = s, s = e, e = void 0);
  const r = i || io;
  let a;
  for (const l of n) {
    if (!l)
      continue;
    const h = l[r];
    if (!h)
      continue;
    const d = o && l === Ut ? `${o}.${t}` : t;
    if (a = Pc(h, d), a !== void 0)
      break;
  }
  return a === void 0 ? s : e ? K(a, ...Array.isArray(e) ? e : [e]) : a;
}
function Oc(n, t, e, s) {
  return G(void 0, n, t, e, s);
}
G.addLang = Hr;
G.getLang = Oc;
G.getCode = Lc;
G.setCode = Wc;
Hr({
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
function Fr(...n) {
  const t = [], e = /* @__PURE__ */ new Map(), s = (i, o) => {
    if (Array.isArray(i) && (o = i[1], i = i[0]), !i.length)
      return;
    const r = e.get(i);
    typeof r == "number" ? t[r][1] = !!o : (e.set(i, t.length), t.push([i, !!o]));
  };
  return n.forEach((i) => {
    typeof i == "function" && (i = i()), Array.isArray(i) ? Fr(...i).forEach(s) : i && typeof i == "object" ? Object.entries(i).forEach(s) : typeof i == "string" && i.split(" ").forEach((o) => s(o, !0));
  }), t.sort((i, o) => (e.get(i[0]) || 0) - (e.get(o[0]) || 0));
}
const x = (...n) => Fr(...n).reduce((t, [e, s]) => (s && t.push(e), t), []).join(" ");
u.classes = x;
u.fn.setClass = function(n, ...t) {
  return this.each((e, s) => {
    const i = u(s);
    n === !0 ? i.attr("class", x(i.attr("class"), ...t)) : i.addClass(x(n, ...t));
  });
};
const ze = /* @__PURE__ */ new WeakMap();
function zr(n, t, e) {
  const s = ze.has(n), i = s ? ze.get(n) : {};
  typeof t == "string" ? i[t] = e : t === null ? Object.keys(i).forEach((o) => {
    delete i[o];
  }) : Object.assign(i, t), Object.keys(i).forEach((o) => {
    i[o] === void 0 && delete i[o];
  }), Object.keys(i).length ? (!s && n instanceof Element && Object.assign(i, u(n).dataset(), i), ze.set(n, i)) : ze.delete(n);
}
function Vr(n, t, e) {
  let s = ze.get(n) || {};
  return !e && n instanceof Element && (s = Object.assign({}, u(n).dataset(), s)), t === void 0 ? s : s[t];
}
u.fn.dataset = u.fn.data;
u.fn.data = function(...n) {
  if (!this.length)
    return;
  const [t, e] = n;
  return !n.length || n.length === 1 && typeof t == "string" ? Vr(this[0], t) : this.each((s, i) => zr(i, t, e));
};
u.fn.removeData = function(n = null) {
  return this.each((t, e) => zr(e, n));
};
u.fn._attr = u.fn.attr;
u.fn.extend({
  attr(...n) {
    const [t, e] = n;
    return !n.length || n.length === 1 && typeof t == "string" ? this._attr.apply(this, n) : typeof t == "object" ? (t && Object.keys(t).forEach((s) => {
      const i = t[s];
      i === null ? this.removeAttr(s) : this._attr(s, i);
    }), this) : e === null ? this.removeAttr(t) : this._attr(t, e);
  }
});
u.Event = (n, t) => {
  const [e, ...s] = n.split("."), i = new Event(e, {
    bubbles: !0,
    cancelable: !0
  });
  return i.namespace = s.join("."), i.___ot = e, i.___td = t, i;
};
const ss = (n, t) => new Promise((e) => {
  const s = window.setTimeout(e, n);
  t && t(s);
}), Bc = {};
u.share = Bc;
const Ve = /* @__PURE__ */ new Map();
function is(n) {
  const { zui: t } = window;
  return (!Ve.size || n && !Ve.has(n.toUpperCase())) && Object.keys(t).forEach((e) => {
    const s = t[e];
    !s.NAME || !s.ZUI || Ve.set(e.toLowerCase(), s);
  }), n ? Ve.get(n.toLowerCase()) : void 0;
}
function Hc(n, t, e) {
  const s = is(n);
  return s ? !s.MULTI_INSTANCE && s.get(t) ? (console.error(`[ZUI] cannot create component "${n}" on element which already has a component instance.`, { element: t, options: e }), null) : new s(t, e) : null;
}
function Qd(n) {
  if (n) {
    const t = is(n);
    t && t.defineFn();
  } else
    is(), Ve.forEach((t) => {
      t.defineFn();
    });
}
u.fn.zuiInit = function() {
  return this.find("[data-zui]").each(function() {
    const n = u(this);
    let t = n.dataset();
    const [e, s] = t.zui.split(":");
    n.zui(e) || (s ? t = u.share[s] : delete t.zui, requestAnimationFrame(() => Hc(e, this, t)));
  }), this;
};
u.fn.zui = function(n, t) {
  const e = this[0];
  if (!e)
    return;
  if (typeof n != "string") {
    const i = Vr(e, void 0, !0), o = {};
    let r;
    return Object.keys(i).forEach((a) => {
      if (a.startsWith("zui.")) {
        const l = i[a];
        o[a] = l, (!r || r.gid < l.gid) && (r = o[a]);
      }
    }), n === !0 ? o : r;
  }
  const s = is(n);
  if (s)
    return t === !0 ? s.getAll(e) : s.query(e, t);
};
u(() => {
  u("body").zuiInit();
});
function oo(n, t) {
  const e = u(n)[0];
  if (!e)
    return !1;
  let { viewport: s } = t || {};
  const { left: i, top: o, width: r, height: a } = e.getBoundingClientRect();
  if (!s) {
    const { innerHeight: g, innerWidth: y } = window, { clientHeight: v, clientWidth: _ } = document.documentElement;
    s = { left: 0, top: 0, width: y || _, height: g || v };
  }
  const { left: l, top: h, width: d, height: c } = s;
  if (t != null && t.fullyCheck)
    return i >= l && o >= h && i + r <= d && o + a <= c;
  const p = i <= d && i + r >= l;
  return o <= c && o + a >= h && p;
}
u.fn.isVisible = function(n) {
  return oo(this, n);
};
function ro(n, t, e = !1) {
  const s = u(n);
  if (t !== void 0) {
    if (t.length) {
      const i = `zui-runjs-${u.guid++}`;
      s.append(`<script id="${i}">${t}<\/script>`), e && s.find(`#${i}`).remove();
    }
    return;
  }
  s.find("script").each((i, o) => {
    ro(s, o.innerHTML), o.remove();
  });
}
u.runJS = (n, ...t) => (n = n.trim(), !n.startsWith("return ") && !n.endsWith(";") && (n = `return ${n}`), new Function(...t.map(([s]) => s), n)(...t.map(([, s]) => s)));
u.fn.runJS = function(n) {
  return this.each((t, e) => {
    ro(e, n);
  });
};
function Ur(n, t) {
  const e = u(n), { ifNeeded: s = !0, ...i } = t || {};
  return e.each((o, r) => {
    s && oo(r, { viewport: r.getBoundingClientRect() }) || r.scrollIntoView(i);
  }), e;
}
u.fn.scrollIntoView = function(n) {
  return this.each((t, e) => {
    Ur(e, n);
  });
};
u.setLibRoot = function(n) {
  u.libRoot = n;
};
u.registerLib = function(n, t) {
  u.libMap || (u.libMap = {}), !t.name && t.id && (t.id = `zui-lib-${n}`), u.libMap[n] = t;
};
u.getLib = function(n, t, e) {
  return new Promise((s, i) => {
    let o = typeof n == "string" ? { src: n } : u.extend({}, n);
    typeof t == "function" ? o.success = t : t && u.extend(o, t), e && (o.success = e);
    let { src: r } = o;
    if (!r)
      return i(new Error("[ZUI] No src provided for $.getLib."));
    const a = u.libMap && u.libMap[r];
    a && (o = u.extend({}, a, o), r = a.src || o.src);
    const { root: l = u.libRoot } = o;
    l && (r = `${l}/${r}`.replace("//", "/"));
    const { success: h, name: d } = o, c = () => d ? window[d] : void 0, p = () => {
      s(c()), h == null || h();
    };
    if (c()) {
      p();
      return;
    }
    const { id: m } = o, g = u(m ? `#${m}` : `script[src="${r}"]`);
    if (g.length) {
      if (g.dataset("loaded"))
        p();
      else {
        const b = g.data("loadCalls") || [];
        b.push(p), g.data("loadCalls", b);
      }
      return;
    }
    const { async: y = !0, defer: v = !1, noModule: _ = !1, type: w, integrity: k } = o, $ = document.createElement("script");
    $.async = y, $.defer = v, $.noModule = _, w && ($.type = w), k && ($.integrity = k), $.onload = () => {
      p(), (u($).dataset("loaded", !0).data("loadCalls") || []).forEach((S) => S()), u($).removeData("loadCalls");
    }, $.onerror = () => {
      i(new Error(`[ZUI] Failed to load lib from: ${r}`));
    }, $.src = r, u("head").append($);
  });
};
u.getScript = u.getLib;
const tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isVisible: oo,
  runJS: ro,
  scrollIntoView: Ur
}, Symbol.toStringTag, { value: "Module" }));
var Ls, B, jr, Z, ie, Yo, qr, di, $e = {}, Yr = [], Fc = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, ao = Array.isArray;
function Gt(n, t) {
  for (var e in t)
    n[e] = t[e];
  return n;
}
function Gr(n) {
  var t = n.parentNode;
  t && t.removeChild(n);
}
function X(n, t, e) {
  var s, i, o, r = {};
  for (o in t)
    o == "key" ? s = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Ls.call(arguments, 2) : e), typeof n == "function" && n.defaultProps != null)
    for (o in n.defaultProps)
      r[o] === void 0 && (r[o] = n.defaultProps[o]);
  return Wn(n, r, s, i, null);
}
function Wn(n, t, e, s, i) {
  var o = { type: n, props: t, key: e, ref: s, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i ?? ++jr };
  return i == null && B.vnode != null && B.vnode(o), o;
}
function q() {
  return { current: null };
}
function Le(n) {
  return n.children;
}
function O(n, t) {
  this.props = n, this.context = t;
}
function sn(n, t) {
  if (t == null)
    return n.__ ? sn(n.__, n.__.__k.indexOf(n) + 1) : null;
  for (var e; t < n.__k.length; t++)
    if ((e = n.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof n.type == "function" ? sn(n) : null;
}
function Kr(n) {
  var t, e;
  if ((n = n.__) != null && n.__c != null) {
    for (n.__e = n.__c.base = null, t = 0; t < n.__k.length; t++)
      if ((e = n.__k[t]) != null && e.__e != null) {
        n.__e = n.__c.base = e.__e;
        break;
      }
    return Kr(n);
  }
}
function Go(n) {
  (!n.__d && (n.__d = !0) && ie.push(n) && !os.__r++ || Yo !== B.debounceRendering) && ((Yo = B.debounceRendering) || qr)(os);
}
function os() {
  var n, t, e, s, i, o, r, a, l;
  for (ie.sort(di); n = ie.shift(); )
    n.__d && (t = ie.length, s = void 0, i = void 0, o = void 0, a = (r = (e = n).__v).__e, (l = e.__P) && (s = [], i = [], (o = Gt({}, r)).__v = r.__v + 1, lo(l, r, o, e.__n, l.ownerSVGElement !== void 0, r.__h != null ? [a] : null, s, a ?? sn(r), r.__h, i), Qr(s, r, i), r.__e != a && Kr(r)), ie.length > t && ie.sort(di));
  os.__r = 0;
}
function Xr(n, t, e, s, i, o, r, a, l, h, d) {
  var c, p, m, g, y, v, _, w, k, $ = 0, b = s && s.__k || Yr, S = b.length, A = S, R = t.length;
  for (e.__k = [], c = 0; c < R; c++)
    (g = e.__k[c] = (g = t[c]) == null || typeof g == "boolean" || typeof g == "function" ? null : typeof g == "string" || typeof g == "number" || typeof g == "bigint" ? Wn(null, g, null, null, g) : ao(g) ? Wn(Le, { children: g }, null, null, null) : g.__b > 0 ? Wn(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v) : g) != null ? (g.__ = e, g.__b = e.__b + 1, (w = zc(g, b, _ = c + $, A)) === -1 ? m = $e : (m = b[w] || $e, b[w] = void 0, A--), lo(n, g, m, i, o, r, a, l, h, d), y = g.__e, (p = g.ref) && m.ref != p && (m.ref && co(m.ref, null, g), d.push(p, g.__c || y, g)), y != null && (v == null && (v = y), (k = m === $e || m.__v === null) ? w == -1 && $-- : w !== _ && (w === _ + 1 ? $++ : w > _ ? A > R - _ ? $ += w - _ : $-- : $ = w < _ && w == _ - 1 ? w - _ : 0), _ = c + $, typeof g.type != "function" || w === _ && m.__k !== g.__k ? typeof g.type == "function" || w === _ && !k ? g.__d !== void 0 ? (l = g.__d, g.__d = void 0) : l = y.nextSibling : l = Jr(n, y, l) : l = Zr(g, l, n), typeof e.type == "function" && (e.__d = l))) : (m = b[c]) && m.key == null && m.__e && (m.__e == l && (l = sn(m)), ui(m, m, !1));
  for (e.__e = v, c = S; c--; )
    b[c] != null && (typeof e.type == "function" && b[c].__e != null && b[c].__e == e.__d && (e.__d = b[c].__e.nextSibling), ui(b[c], b[c]));
}
function Zr(n, t, e) {
  for (var s, i = n.__k, o = 0; i && o < i.length; o++)
    (s = i[o]) && (s.__ = n, t = typeof s.type == "function" ? Zr(s, t, e) : Jr(e, s.__e, t));
  return t;
}
function Jr(n, t, e) {
  return e == null || e.parentNode !== n ? n.insertBefore(t, null) : t == e && t.parentNode != null || n.insertBefore(t, e), t.nextSibling;
}
function zc(n, t, e, s) {
  var i = n.key, o = n.type, r = e - 1, a = e + 1, l = t[e];
  if (l === null || l && i == l.key && o === l.type)
    return e;
  if (s > (l != null ? 1 : 0))
    for (; r >= 0 || a < t.length; ) {
      if (r >= 0) {
        if ((l = t[r]) && i == l.key && o === l.type)
          return r;
        r--;
      }
      if (a < t.length) {
        if ((l = t[a]) && i == l.key && o === l.type)
          return a;
        a++;
      }
    }
  return -1;
}
function Vc(n, t, e, s, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || rs(n, o, null, e[o], s);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || rs(n, o, t[o], e[o], s);
}
function Ko(n, t, e) {
  t[0] === "-" ? n.setProperty(t, e ?? "") : n[t] = e == null ? "" : typeof e != "number" || Fc.test(t) ? e : e + "px";
}
function rs(n, t, e, s, i) {
  var o;
  t:
    if (t === "style")
      if (typeof e == "string")
        n.style.cssText = e;
      else {
        if (typeof s == "string" && (n.style.cssText = s = ""), s)
          for (t in s)
            e && t in e || Ko(n.style, t, "");
        if (e)
          for (t in e)
            s && e[t] === s[t] || Ko(n.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in n ? t.toLowerCase().slice(2) : t.slice(2), n.l || (n.l = {}), n.l[t + o] = e, e ? s || n.addEventListener(t, o ? Zo : Xo, o) : n.removeEventListener(t, o ? Zo : Xo, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t in n)
        try {
          n[t] = e ?? "";
          break t;
        } catch {
        }
      typeof e == "function" || (e == null || e === !1 && t[4] !== "-" ? n.removeAttribute(t) : n.setAttribute(t, e));
    }
}
function Xo(n) {
  return this.l[n.type + !1](B.event ? B.event(n) : n);
}
function Zo(n) {
  return this.l[n.type + !0](B.event ? B.event(n) : n);
}
function lo(n, t, e, s, i, o, r, a, l, h) {
  var d, c, p, m, g, y, v, _, w, k, $, b, S, A, R, I = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (l = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (d = B.__b) && d(t);
  t:
    if (typeof I == "function")
      try {
        if (_ = t.props, w = (d = I.contextType) && s[d.__c], k = d ? w ? w.props.value : d.__ : s, e.__c ? v = (c = t.__c = e.__c).__ = c.__E : ("prototype" in I && I.prototype.render ? t.__c = c = new I(_, k) : (t.__c = c = new O(_, k), c.constructor = I, c.render = jc), w && w.sub(c), c.props = _, c.state || (c.state = {}), c.context = k, c.__n = s, p = c.__d = !0, c.__h = [], c._sb = []), c.__s == null && (c.__s = c.state), I.getDerivedStateFromProps != null && (c.__s == c.state && (c.__s = Gt({}, c.__s)), Gt(c.__s, I.getDerivedStateFromProps(_, c.__s))), m = c.props, g = c.state, c.__v = t, p)
          I.getDerivedStateFromProps == null && c.componentWillMount != null && c.componentWillMount(), c.componentDidMount != null && c.__h.push(c.componentDidMount);
        else {
          if (I.getDerivedStateFromProps == null && _ !== m && c.componentWillReceiveProps != null && c.componentWillReceiveProps(_, k), !c.__e && (c.shouldComponentUpdate != null && c.shouldComponentUpdate(_, c.__s, k) === !1 || t.__v === e.__v)) {
            for (t.__v !== e.__v && (c.props = _, c.state = c.__s, c.__d = !1), t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(N) {
              N && (N.__ = t);
            }), $ = 0; $ < c._sb.length; $++)
              c.__h.push(c._sb[$]);
            c._sb = [], c.__h.length && r.push(c);
            break t;
          }
          c.componentWillUpdate != null && c.componentWillUpdate(_, c.__s, k), c.componentDidUpdate != null && c.__h.push(function() {
            c.componentDidUpdate(m, g, y);
          });
        }
        if (c.context = k, c.props = _, c.__P = n, c.__e = !1, b = B.__r, S = 0, "prototype" in I && I.prototype.render) {
          for (c.state = c.__s, c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), A = 0; A < c._sb.length; A++)
            c.__h.push(c._sb[A]);
          c._sb = [];
        } else
          do
            c.__d = !1, b && b(t), d = c.render(c.props, c.state, c.context), c.state = c.__s;
          while (c.__d && ++S < 25);
        c.state = c.__s, c.getChildContext != null && (s = Gt(Gt({}, s), c.getChildContext())), p || c.getSnapshotBeforeUpdate == null || (y = c.getSnapshotBeforeUpdate(m, g)), Xr(n, ao(R = d != null && d.type === Le && d.key == null ? d.props.children : d) ? R : [R], t, e, s, i, o, r, a, l, h), c.base = t.__e, t.__h = null, c.__h.length && r.push(c), v && (c.__E = c.__ = null);
      } catch (N) {
        t.__v = null, (l || o != null) && (t.__e = a, t.__h = !!l, o[o.indexOf(a)] = null), B.__e(N, t, e);
      }
    else
      o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Uc(e.__e, t, e, s, i, o, r, l, h);
  (d = B.diffed) && d(t);
}
function Qr(n, t, e) {
  for (var s = 0; s < e.length; s++)
    co(e[s], e[++s], e[++s]);
  B.__c && B.__c(t, n), n.some(function(i) {
    try {
      n = i.__h, i.__h = [], n.some(function(o) {
        o.call(i);
      });
    } catch (o) {
      B.__e(o, i.__v);
    }
  });
}
function Uc(n, t, e, s, i, o, r, a, l) {
  var h, d, c, p = e.props, m = t.props, g = t.type, y = 0;
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
    if (o = o && Ls.call(n.childNodes), d = (p = e.props || $e).dangerouslySetInnerHTML, c = m.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (p = {}, y = 0; y < n.attributes.length; y++)
          p[n.attributes[y].name] = n.attributes[y].value;
      (c || d) && (c && (d && c.__html == d.__html || c.__html === n.innerHTML) || (n.innerHTML = c && c.__html || ""));
    }
    if (Vc(n, m, p, i, a), c)
      t.__k = [];
    else if (Xr(n, ao(y = t.props.children) ? y : [y], t, e, s, i && g !== "foreignObject", o, r, o ? o[0] : e.__k && sn(e, 0), a, l), o != null)
      for (y = o.length; y--; )
        o[y] != null && Gr(o[y]);
    a || ("value" in m && (y = m.value) !== void 0 && (y !== n.value || g === "progress" && !y || g === "option" && y !== p.value) && rs(n, "value", y, p.value, !1), "checked" in m && (y = m.checked) !== void 0 && y !== n.checked && rs(n, "checked", y, p.checked, !1));
  }
  return n;
}
function co(n, t, e) {
  try {
    typeof n == "function" ? n(t) : n.current = t;
  } catch (s) {
    B.__e(s, e);
  }
}
function ui(n, t, e) {
  var s, i;
  if (B.unmount && B.unmount(n), (s = n.ref) && (s.current && s.current !== n.__e || co(s, null, t)), (s = n.__c) != null) {
    if (s.componentWillUnmount)
      try {
        s.componentWillUnmount();
      } catch (o) {
        B.__e(o, t);
      }
    s.base = s.__P = null, n.__c = void 0;
  }
  if (s = n.__k)
    for (i = 0; i < s.length; i++)
      s[i] && ui(s[i], t, e || typeof n.type != "function");
  e || n.__e == null || Gr(n.__e), n.__ = n.__e = n.__d = void 0;
}
function jc(n, t, e) {
  return this.constructor(n, e);
}
function as(n, t, e) {
  var s, i, o, r;
  B.__ && B.__(n, t), i = (s = typeof e == "function") ? null : e && e.__k || t.__k, o = [], r = [], lo(t, n = (!s && e || t).__k = X(Le, null, [n]), i || $e, $e, t.ownerSVGElement !== void 0, !s && e ? [e] : i ? null : t.firstChild ? Ls.call(t.childNodes) : null, o, !s && e ? e : i ? i.__e : t.firstChild, s, r), Qr(o, n, r);
}
Ls = Yr.slice, B = { __e: function(n, t, e, s) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(n, s || {}), r = i.__d), r)
          return i.__E = i;
      } catch (a) {
        n = a;
      }
  throw n;
} }, jr = 0, Z = function(n) {
  return n != null && n.constructor === void 0;
}, O.prototype.setState = function(n, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = Gt({}, this.state), typeof n == "function" && (n = n(Gt({}, e), this.props)), n && Gt(e, n), n != null && this.__v && (t && this._sb.push(t), Go(this));
}, O.prototype.forceUpdate = function(n) {
  this.__v && (this.__e = !0, n && this.__h.push(n), Go(this));
}, O.prototype.render = Le, ie = [], qr = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, di = function(n, t) {
  return n.__v.__b - t.__v.__b;
}, os.__r = 0;
var ta = function(n, t, e, s) {
  var i;
  t[0] = 0;
  for (var o = 1; o < t.length; o++) {
    var r = t[o++], a = t[o] ? (t[0] |= r ? 1 : 2, e[t[o++]]) : t[++o];
    r === 3 ? s[0] = a : r === 4 ? s[1] = Object.assign(s[1] || {}, a) : r === 5 ? (s[1] = s[1] || {})[t[++o]] = a : r === 6 ? s[1][t[++o]] += a + "" : r ? (i = n.apply(a, ta(n, a, e, ["", null])), s.push(i), a[0] ? t[0] |= 2 : (t[o - 2] = 0, t[o] = i)) : s.push(a);
  }
  return s;
}, Jo = /* @__PURE__ */ new Map();
function qc(n) {
  var t = Jo.get(this);
  return t || (t = /* @__PURE__ */ new Map(), Jo.set(this, t)), (t = ta(this, t.get(n) || (t.set(n, t = function(e) {
    for (var s, i, o = 1, r = "", a = "", l = [0], h = function(p) {
      o === 1 && (p || (r = r.replace(/^\s*\n\s*|\s*\n\s*$/g, ""))) ? l.push(0, p, r) : o === 3 && (p || r) ? (l.push(3, p, r), o = 2) : o === 2 && r === "..." && p ? l.push(4, p, 0) : o === 2 && r && !p ? l.push(5, 0, !0, r) : o >= 5 && ((r || !p && o === 5) && (l.push(o, 0, r, i), o = 6), p && (l.push(o, p, 0, i), o = 6)), r = "";
    }, d = 0; d < e.length; d++) {
      d && (o === 1 && h(), h(d));
      for (var c = 0; c < e[d].length; c++)
        s = e[d][c], o === 1 ? s === "<" ? (h(), l = [l], o = 3) : r += s : o === 4 ? r === "--" && s === ">" ? (o = 1, r = "") : r = s + r[0] : a ? s === a ? a = "" : r += s : s === '"' || s === "'" ? a = s : s === ">" ? (h(), o = 1) : o && (s === "=" ? (o = 5, i = r, r = "") : s === "/" && (o < 5 || e[d][c + 1] === ">") ? (h(), o === 3 && (l = l[0]), o = l, (l = l[0]).push(2, 0, o), o = 0) : s === " " || s === "	" || s === `
` || s === "\r" ? (h(), o = 2) : r += s), o === 3 && r === "!--" && (o = 4, l = l[0]);
    }
    return h(), l;
  }(n)), t), arguments, [])).length > 1 ? t : t[0];
}
const eu = qc.bind(X);
class ho extends O {
  _getClassName(t) {
    return [t.className, t.class];
  }
  _getProps(t) {
    const { className: e, class: s, attrs: i, data: o, forwardRef: r, children: a, style: l, ...h } = t, d = Object.keys(h).reduce((c, p) => ((p === "dangerouslySetInnerHTML" || /^(on[A-Z]|data-)[a-zA-Z-]+/.test(p)) && (c[p] = h[p]), c), {});
    return { ref: r, class: x(this._getClassName(t)), style: l, ...d, ...i };
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
var Yc = 0;
function f(n, t, e, s, i, o) {
  var r, a, l = {};
  for (a in t)
    a == "ref" ? r = t[a] : l[a] = t[a];
  var h = { type: n, props: l, key: e, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --Yc, __source: i, __self: o };
  if (typeof n == "function" && (r = n.defaultProps))
    for (a in r)
      l[a] === void 0 && (l[a] = r[a]);
  return B.vnode && B.vnode(h), h;
}
class $n extends O {
  constructor() {
    super(...arguments), this._ref = q();
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
    const { executeScript: e, html: s, ...i } = t;
    return /* @__PURE__ */ f(ho, { forwardRef: this._ref, dangerouslySetInnerHTML: { __html: s }, ...i });
  }
}
function Gc(n) {
  const {
    tag: t,
    className: e,
    style: s,
    renders: i,
    generateArgs: o = [],
    generatorThis: r,
    generators: a,
    onGenerate: l,
    onRenderItem: h,
    ...d
  } = n, c = [e], p = { ...s }, m = [], g = [];
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
        /* @__PURE__ */ f("div", { className: x(_.className), style: _.style, dangerouslySetInnerHTML: { __html: _.html }, ..._.attrs ?? {} })
      ) : _.__html ? g.push(_.__html) : (_.style && Object.assign(p, _.style), _.className && c.push(_.className), _.children && m.push(_.children), _.attrs && Object.assign(d, _.attrs)) : m.push(_));
    });
  }), g.length && Object.assign(d, { dangerouslySetInnerHTML: { __html: g } }), [{
    className: x(c),
    style: p,
    ...d
  }, m];
}
function uo({
  tag: n = "div",
  ...t
}) {
  const [e, s] = Gc(t);
  return X(n, e, ...s);
}
function ea(n, t, e) {
  return typeof n == "function" ? n.call(t, ...e || []) : Array.isArray(n) ? n.map((s) => ea(s, t, e)) : Z(n) || n === null ? n : typeof n == "object" ? n.html ? /* @__PURE__ */ f($n, { ...n }) : /* @__PURE__ */ f(ho, { ...n }) : n;
}
function te(n) {
  const { content: t, generatorThis: e, generatorArgs: s } = n, i = ea(t, e, s);
  return i == null || typeof i == "boolean" ? null : Z(i) ? i : /* @__PURE__ */ f(Le, { children: i });
}
const Qo = (n) => n.startsWith("icon-") ? n : `icon-${n}`;
function J(n) {
  const { icon: t, className: e, ...s } = n;
  if (!t)
    return null;
  if (Z(t))
    return t;
  const i = ["icon", e];
  if (typeof t == "string")
    i.push(Qo(t));
  else if (typeof t == "object") {
    const { className: o, icon: r, ...a } = t;
    i.push(o, r ? Qo(r) : ""), Object.assign(s, a);
  }
  return /* @__PURE__ */ f("i", { className: x(i), ...s });
}
function Kc(n) {
  return this.getChildContext = () => n.context, n.children;
}
function Xc(n) {
  const t = this, e = n._container;
  t.componentWillUnmount = function() {
    as(null, t._temp), t._temp = null, t._container = null;
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
  }), as(
    X(Kc, { context: t.context }, n._vnode),
    t._temp
  )) : t._temp && t.componentWillUnmount();
}
function Zc(n, t) {
  const e = X(Xc, { _vnode: n, _container: t });
  return e.containerInfo = t, e;
}
function na(n) {
  return n.parentNode === document ? !1 : n.parentNode ? na(n.parentNode) : !0;
}
class at {
  /**
   * The component constructor.
   *
   * @param options The component initial options.
   */
  constructor(t, e) {
    this._inited = !1, this._autoDestory = 0;
    const { KEY: s, DATA_KEY: i, DEFAULT: o, MULTI_INSTANCE: r, NAME: a } = this.constructor;
    if (!a)
      throw new Error('[ZUI] The component must have a "NAME" static property.');
    const l = u(t);
    if (l.data(s) && !r)
      throw new Error("[ZUI] The component has been initialized on element.");
    const h = l[0], d = u.guid++;
    if (this._gid = d, this._element = h, l.on("DOMNodeRemovedFromDocument", () => {
      this._autoDestory && clearTimeout(this._autoDestory), this._autoDestory = window.setTimeout(() => {
        this._autoDestory = 0, na(h) && this.destroy();
      }, 100);
    }), this._options = { ...o, ...l.dataset() }, this.setOptions(e), this._key = this.options.key ?? `__${d}`, l.data(s, this).attr(i, `${d}`), r) {
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
    const { KEY: t, DATA_KEY: e, MULTI_INSTANCE: s } = this.constructor, { $element: i } = this;
    if (this.emit("destroyed"), i.off(this.namespace).removeData(t).attr(e, null), s) {
      const o = this.$element.data(`${t}:ALL`);
      if (o)
        if (o.delete(this._key), o.size === 0)
          this.$element.removeData(`${t}:ALL`);
        else {
          const r = o.values().next().value;
          i.data(t, r).attr(e, r.gid);
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
    const s = u.Event(t);
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
    this.$element[s != null && s.once ? "one" : "on"](this._wrapEvent(t), function(o, r) {
      (!o.__src || o.__src === i) && e.call(this, o, r);
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
    return G(this.options.i18n, t, e, s, this.options.lang, this.constructor.NAME) ?? G(this.options.i18n, t, e, s, this.options.lang) ?? `{i18n:${t}}`;
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
    const s = u(t);
    if (this.MULTI_INSTANCE && e !== void 0) {
      const i = s.data(`${this.KEY}:ALL`);
      return i ? i.get(e) : void 0;
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
  static ensure(t, e) {
    const s = this.get(t, e == null ? void 0 : e.key);
    return s ? (e && s.setOptions(e), s) : new this(t, e);
  }
  /**
   * Get all component instances.
   *
   * @param this     Current component constructor.
   * @param selector The component element selector.
   * @returns        All component instances.
   */
  static getAll(t) {
    const { MULTI_INSTANCE: e, DATA_KEY: s } = this, i = [];
    return u(t || document).find(`[${s}]`).each((o, r) => {
      if (e) {
        const l = u(r).data(`${this.KEY}:ALL`);
        if (l) {
          i.push(...l.values());
          return;
        }
      }
      const a = u(r).data(this.KEY);
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
    return t === void 0 ? this.getAll().sort((s, i) => s.gid - i.gid)[0] : this.get(u(t).closest(`[${this.DATA_KEY}]`), e);
  }
  /**
   * Create cash fn.method for current component.
   *
   * @param name The method name.
   */
  static defineFn(t) {
    let e = t || this.ZUI;
    u.fn[e] && (e = `zui${this.NAME}`);
    const s = this;
    u.fn.extend({
      [e](i, ...o) {
        const r = typeof i == "object" ? i : void 0, a = typeof i == "string" ? i : void 0;
        let l;
        return this.each((h, d) => {
          let c = s.get(d);
          if (c ? r && c.render(r) : c = new s(d, r), a) {
            let p = c[a], m = c;
            p === void 0 && (m = c.$, p = m[a]), typeof p == "function" ? l = p.call(m, ...o) : l = p;
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
    var t, e;
    (e = (t = this.$) == null ? void 0 : t.componentWillUnmount) == null || e.call(t), this.element && (this.element.innerHTML = ""), super.destroy();
  }
  /**
   * Render component.
   *
   * @param options new options.
   */
  render(t) {
    as(
      X(this.constructor.Component, {
        ref: this.ref,
        ...this.setOptions(t)
      }),
      this.element
    );
  }
}
function Jc({
  component: n = "div",
  className: t,
  children: e,
  style: s,
  attrs: i
}) {
  return X(n, {
    className: x(t),
    style: s,
    ...i
  }, e);
}
function sa({
  type: n,
  component: t = "a",
  className: e,
  children: s,
  content: i,
  attrs: o,
  url: r,
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
    /* @__PURE__ */ f(te, { content: i }),
    s,
    /* @__PURE__ */ f(J, { icon: p })
  ];
  return X(t, {
    className: x(e, { disabled: a, active: l }),
    title: m,
    [t === "a" ? "href" : "data-url"]: a ? void 0 : r,
    [t === "a" ? "target" : "data-target"]: a ? void 0 : c,
    onClick: y,
    ..._,
    ...o
  }, ...w);
}
function Qc({
  component: n = "div",
  className: t,
  text: e,
  attrs: s,
  children: i,
  content: o,
  style: r,
  onClick: a
}) {
  return X(n, {
    className: x(t),
    style: r,
    onClick: a,
    ...s
  }, e, /* @__PURE__ */ f(te, { content: o }), i);
}
function th({
  component: n = "div",
  className: t,
  style: e,
  space: s,
  flex: i,
  attrs: o,
  onClick: r,
  children: a
}) {
  return X(n, {
    className: x(t),
    style: { width: s, height: s, flex: i, ...e },
    onClick: r,
    ...o
  }, a);
}
function eh({ type: n, ...t }) {
  return /* @__PURE__ */ f(uo, { ...t });
}
function ia({
  component: n = "div",
  className: t,
  children: e,
  content: s,
  style: i,
  attrs: o
}) {
  return X(n, {
    className: x(t),
    style: i,
    ...o
  }, /* @__PURE__ */ f(te, { content: s }), e);
}
const Ws = class fi extends O {
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
    var t, e;
    (e = (t = this.props).beforeDestroy) == null || e.call(t, { menu: this });
  }
  afterRender(t) {
    var e, s;
    (s = (e = this.props).afterRender) == null || s.call(e, { menu: this, firstRender: t });
  }
  handleItemClick(t, e, s, i) {
    s && s.call(i.target, i, t, e);
    const { onClickItem: o } = this.props;
    o && o({ menu: this, item: t, index: e, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props };
    typeof t.items == "function" && (t.items = t.items(this)), t.items || (t.items = []);
    const e = (s = t.beforeRender) == null ? void 0 : s.call(t, { menu: this, options: t });
    return e && Object.assign(t, e), t;
  }
  getItemRenderProps(t, e, s) {
    const { commonItemProps: i, onClickItem: o, itemRenderProps: r } = t;
    let a = { ...e };
    return i && Object.assign(a, i[e.type || "item"]), (o || e.onClick) && (a.onClick = this.handleItemClick.bind(this, a, s, e.onClick)), a.className = x(a.className), r && (a = r(a)), a;
  }
  renderItem(t, e, s) {
    if (!e)
      return null;
    const i = this.getItemRenderProps(t, e, s), { itemRender: o } = t;
    if (o) {
      if (typeof o == "object") {
        const y = o[e.type || "item"];
        if (y)
          return /* @__PURE__ */ f(y, { ...i });
      } else if (typeof o == "function") {
        const y = o.call(this, i, X);
        if (Z(y))
          return y;
        typeof y == "object" && Object.assign(i, y);
      }
    }
    const { type: r = "item", component: a, key: l = s, rootAttrs: h, rootClass: d, rootStyle: c, rootChildren: p, ...m } = i;
    if (r === "html")
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
    const g = !a || typeof a == "string" ? this.constructor.ItemComponents && this.constructor.ItemComponents[r] || fi.ItemComponents[r] : a;
    return Object.assign(m, {
      type: r,
      component: typeof a == "string" ? a : void 0
    }), t.checkbox && r === "item" && m.checked === void 0 && (m.checked = !!m.active), this.renderTypedItem(g, {
      className: x(d),
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
  renderTypedItem(t, e, s) {
    const { children: i, className: o, key: r, ...a } = e;
    return /* @__PURE__ */ f(
      "li",
      {
        className: x(`${this.constructor.NAME}-item`, `${this.name}-${s.type}`, o),
        ...a,
        children: [
          /* @__PURE__ */ f(t, { ...s }),
          typeof i == "function" ? i() : i
        ]
      },
      r
    );
  }
  render() {
    const t = this.beforeRender(), {
      name: e,
      style: s,
      commonItemProps: i,
      className: o,
      items: r,
      children: a,
      itemRender: l,
      onClickItem: h,
      beforeRender: d,
      afterRender: c,
      beforeDestroy: p,
      compact: m,
      ...g
    } = t, y = this.constructor.ROOT_TAG;
    return /* @__PURE__ */ f(y, { class: x(this.name, o, m ? "compact" : ""), style: s, ...g, ref: this.ref, children: [
      r && r.map(this.renderItem.bind(this, t)),
      a
    ] });
  }
};
Ws.ItemComponents = {
  divider: Jc,
  item: sa,
  heading: Qc,
  space: th,
  custom: eh,
  basic: ia
};
Ws.ROOT_TAG = "menu";
Ws.NAME = "action-menu";
let Os = Ws;
class oa extends z {
}
oa.NAME = "ActionMenu";
oa.Component = Os;
function nh({
  items: n,
  show: t,
  level: e,
  ...s
}) {
  return /* @__PURE__ */ f(sa, { ...s });
}
var ra = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ut = (n, t, e) => (ra(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Qs = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, sh = (n, t, e, s) => (ra(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), On, xt, Ue;
let Bs = class extends Os {
  constructor(t) {
    super(t), Qs(this, On, /* @__PURE__ */ new Set()), Qs(this, xt, void 0), Qs(this, Ue, (e, s, i) => {
      u(i.target).closest(".not-nested-toggle").length || (this.toggle(e, s), i.preventDefault());
    }), sh(this, xt, t.nestedShow === void 0), ut(this, xt) && (this.state = { nestedShow: t.defaultNestedShow ?? {} });
  }
  get nestedTrigger() {
    return this.props.nestedTrigger;
  }
  beforeRender() {
    const t = super.beforeRender(), { nestedShow: e, nestedTrigger: s, defaultNestedShow: i, controlledMenu: o, indent: r, ...a } = t;
    return typeof a.items == "function" && (a.items = a.items(this)), a.items || (a.items = []), a.items.some((l) => l.items) || (a.className = x(a.className, "no-nested-items")), !o && r && (a.style = Object.assign({
      [`--${this.name}-indent`]: `${r}px`
    }, a.style)), a;
  }
  getNestedMenuProps(t) {
    const { name: e, controlledMenu: s, nestedShow: i, beforeDestroy: o, beforeRender: r, itemRender: a, onClickItem: l, afterRender: h, commonItemProps: d, level: c, itemRenderProps: p } = this.props;
    return {
      items: t,
      name: e,
      nestedShow: ut(this, xt) ? this.state.nestedShow : i,
      nestedTrigger: this.nestedTrigger,
      controlledMenu: s || this,
      commonItemProps: d,
      onClickItem: l,
      afterRender: h,
      beforeRender: r,
      beforeDestroy: o,
      itemRender: a,
      itemRenderProps: p,
      level: (c || 0) + 1
    };
  }
  renderNestedMenu(t) {
    let { items: e } = t;
    if (!e || (typeof e == "function" && (e = e(t, this)), !e.length))
      return;
    const s = this.constructor, i = this.getNestedMenuProps(e);
    return /* @__PURE__ */ f(
      s,
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
  getItemRenderProps(t, e, s) {
    const i = super.getItemRenderProps(t, e, s);
    if (i.level = t.level || 0, !this.isNestedItem(i))
      return i;
    const o = i.key ?? i.id ?? `${t.level || 0}:${s}`;
    ut(this, On).add(o);
    const r = this.isExpanded(o);
    if (r && (i.rootChildren = [
      i.rootChildren,
      this.renderNestedMenu(e)
    ]), this.nestedTrigger === "hover")
      i.rootAttrs = {
        ...i.rootAttrs,
        onMouseEnter: ut(this, Ue).bind(this, o, !0),
        onMouseLeave: ut(this, Ue).bind(this, o, !1)
      };
    else if (this.nestedTrigger === "click") {
      const { onClick: l } = i;
      i.onClick = (h) => {
        ut(this, Ue).call(this, o, void 0, h), l == null || l(h);
      };
    }
    const a = this.renderToggleIcon(r, i);
    return a && (i.children = [i.children, a]), i.show = r, i.rootClass = [i.rootClass, "has-nested-menu", r ? "show" : ""], i;
  }
  isExpanded(t) {
    const e = ut(this, xt) ? this.state.nestedShow : this.props.nestedShow;
    return e && typeof e == "object" ? e[t] : !!e;
  }
  toggle(t, e) {
    const { controlledMenu: s } = this.props;
    if (s)
      return s.toggle(t, e);
    if (!ut(this, xt))
      return !1;
    let { nestedShow: i = {} } = this.state;
    if (typeof i == "boolean" && (i === !0 ? i = [...ut(this, On).values()].reduce((o, r) => (o[r] = !0, o), {}) : i = {}), e === void 0)
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
    ut(this, xt) && this.setState({ nestedShow: !0 });
  }
  collapseAll() {
    ut(this, xt) && this.setState({ nestedShow: !1 });
  }
};
On = /* @__PURE__ */ new WeakMap();
xt = /* @__PURE__ */ new WeakMap();
Ue = /* @__PURE__ */ new WeakMap();
Bs.ItemComponents = {
  item: nh
};
class aa extends z {
}
aa.NAME = "ActionMenuNested";
aa.Component = Bs;
let Kt = class extends Bs {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "menu-nested";
  }
  beforeRender() {
    const t = super.beforeRender();
    let { hasIcons: e } = t;
    return e === void 0 && (e = t.items.some((s) => s.icon)), t.className = x(t.className, this.menuName, {
      "has-icons": e,
      "has-nested-items": t.items.some((s) => this.isNestedItem(s)),
      popup: t.popup
    }), t;
  }
  renderToggleIcon(t) {
    return /* @__PURE__ */ f("span", { class: `${this.name}-toggle-icon caret-${t ? "down" : "right"}` });
  }
};
Kt.NAME = "menu";
class la extends z {
}
la.NAME = "Menu";
la.Component = Kt;
class Q extends ho {
  _beforeRender(t) {
    const { text: e, loading: s, loadingText: i, caret: o, icon: r, trailingIcon: a, children: l } = t;
    this._isEmptyText = e == null || typeof e == "string" && !e.length || s && !i, this._onlyCaret = o && this._isEmptyText && !r && !a && !l && !s;
  }
  _getChildren(t) {
    const { loading: e, loadingIcon: s, loadingText: i, icon: o, text: r, children: a, trailingIcon: l, caret: h } = t;
    return [
      e ? /* @__PURE__ */ f(J, { icon: s || "icon-spinner-snake", className: "spin" }) : /* @__PURE__ */ f(J, { icon: o }),
      this._isEmptyText ? null : /* @__PURE__ */ f("span", { className: "text", children: e ? i : r }),
      e ? null : a,
      e ? null : /* @__PURE__ */ f(J, { icon: l }),
      e ? null : h ? /* @__PURE__ */ f("span", { className: typeof h == "string" ? `caret-${h}` : "caret" }) : null
    ];
  }
  _getClassName(t) {
    const { type: e, className: s, disabled: i, loading: o, active: r, children: a, square: l, size: h, rounded: d } = t;
    return x("btn", e, s, {
      "btn-caret": this._onlyCaret,
      disabled: i || o,
      active: r,
      loading: o,
      square: l === void 0 ? !this._onlyCaret && !a && this._isEmptyText : l
    }, h ? `size-${h}` : "", typeof d == "string" ? d : { rounded: d });
  }
  _getComponent(t) {
    return t.component || (t.url ? "a" : "button");
  }
  _getProps(t) {
    const e = this._getComponent(t), { url: s, target: i, disabled: o, btnType: r = "button", hint: a } = t, l = {
      ...super._getProps(t),
      disabled: o,
      title: a,
      type: e === "button" ? r : void 0
    };
    return o || (s !== void 0 && (l[e === "a" ? "href" : "data-url"] = s), i !== void 0 && (l[e === "a" ? "target" : "data-target"] = i)), l;
  }
}
function ih({
  key: n,
  type: t,
  btnType: e,
  ...s
}) {
  return /* @__PURE__ */ f(Q, { type: e, ...s });
}
let oh = class extends O {
  render(t) {
    const {
      id: e,
      popup: s,
      title: i,
      content: o,
      style: r,
      className: a,
      closeBtn: l,
      arrow: h,
      headingClass: d,
      titleClass: c,
      contentClass: p,
      arrowStyle: m,
      onlyInner: g
    } = t;
    let y = /* @__PURE__ */ f(te, { content: o }, "content");
    (p || i) && (y = /* @__PURE__ */ f("div", { className: p, children: y }, "content"));
    const v = [], _ = l ? /* @__PURE__ */ f("button", { className: "btn ghost square size-sm btn-close", "data-dismiss": "popover", children: /* @__PURE__ */ f("span", { className: "close" }) }) : null;
    return i ? v.push(/* @__PURE__ */ f("div", { className: d, children: [
      i ? /* @__PURE__ */ f("div", { className: c, children: i }) : null,
      _
    ] }, "heading")) : v.push(_), v.push(y), h && v.push(/* @__PURE__ */ f("div", { className: typeof h == "string" ? h : "arrow", style: m }, "arrow")), g ? v : /* @__PURE__ */ f("div", { id: e, className: x("popover", a, { popup: s }), style: r, children: v });
  }
};
class fo extends z {
}
fo.NAME = "PopoverPanel";
fo.Component = oh;
const Ie = Math.min, le = Math.max, ls = Math.round, Dn = Math.floor, Xt = (n) => ({
  x: n,
  y: n
}), rh = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, ah = {
  start: "end",
  end: "start"
};
function pi(n, t, e) {
  return le(n, Ie(t, e));
}
function xn(n, t) {
  return typeof n == "function" ? n(t) : n;
}
function fe(n) {
  return n.split("-")[0];
}
function Tn(n) {
  return n.split("-")[1];
}
function ca(n) {
  return n === "x" ? "y" : "x";
}
function po(n) {
  return n === "y" ? "height" : "width";
}
function Hs(n) {
  return ["top", "bottom"].includes(fe(n)) ? "y" : "x";
}
function mo(n) {
  return ca(Hs(n));
}
function lh(n, t, e) {
  e === void 0 && (e = !1);
  const s = Tn(n), i = mo(n), o = po(i);
  let r = i === "x" ? s === (e ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (r = cs(r)), [r, cs(r)];
}
function ch(n) {
  const t = cs(n);
  return [mi(n), t, mi(t)];
}
function mi(n) {
  return n.replace(/start|end/g, (t) => ah[t]);
}
function hh(n, t, e) {
  const s = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], r = ["bottom", "top"];
  switch (n) {
    case "top":
    case "bottom":
      return e ? t ? i : s : t ? s : i;
    case "left":
    case "right":
      return t ? o : r;
    default:
      return [];
  }
}
function dh(n, t, e, s) {
  const i = Tn(n);
  let o = hh(fe(n), e === "start", s);
  return i && (o = o.map((r) => r + "-" + i), t && (o = o.concat(o.map(mi)))), o;
}
function cs(n) {
  return n.replace(/left|right|bottom|top/g, (t) => rh[t]);
}
function uh(n) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...n
  };
}
function ha(n) {
  return typeof n != "number" ? uh(n) : {
    top: n,
    right: n,
    bottom: n,
    left: n
  };
}
function hs(n) {
  return {
    ...n,
    top: n.y,
    left: n.x,
    right: n.x + n.width,
    bottom: n.y + n.height
  };
}
function tr(n, t, e) {
  let {
    reference: s,
    floating: i
  } = n;
  const o = Hs(t), r = mo(t), a = po(r), l = fe(t), h = o === "y", d = s.x + s.width / 2 - i.width / 2, c = s.y + s.height / 2 - i.height / 2, p = s[a] / 2 - i[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: d,
        y: s.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: d,
        y: s.y + s.height
      };
      break;
    case "right":
      m = {
        x: s.x + s.width,
        y: c
      };
      break;
    case "left":
      m = {
        x: s.x - i.width,
        y: c
      };
      break;
    default:
      m = {
        x: s.x,
        y: s.y
      };
  }
  switch (Tn(t)) {
    case "start":
      m[r] -= p * (e && h ? -1 : 1);
      break;
    case "end":
      m[r] += p * (e && h ? -1 : 1);
      break;
  }
  return m;
}
const fh = async (n, t, e) => {
  const {
    placement: s = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: r
  } = e, a = o.filter(Boolean), l = await (r.isRTL == null ? void 0 : r.isRTL(t));
  let h = await r.getElementRects({
    reference: n,
    floating: t,
    strategy: i
  }), {
    x: d,
    y: c
  } = tr(h, s, l), p = s, m = {}, g = 0;
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
      initialPlacement: s,
      placement: p,
      strategy: i,
      middlewareData: m,
      rects: h,
      platform: r,
      elements: {
        reference: n,
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
      g++, typeof b == "object" && (b.placement && (p = b.placement), b.rects && (h = b.rects === !0 ? await r.getElementRects({
        reference: n,
        floating: t,
        strategy: i
      }) : b.rects), {
        x: d,
        y: c
      } = tr(h, p, l)), y = -1;
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
async function da(n, t) {
  var e;
  t === void 0 && (t = {});
  const {
    x: s,
    y: i,
    platform: o,
    rects: r,
    elements: a,
    strategy: l
  } = n, {
    boundary: h = "clippingAncestors",
    rootBoundary: d = "viewport",
    elementContext: c = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = xn(t, n), g = ha(m), v = a[p ? c === "floating" ? "reference" : "floating" : c], _ = hs(await o.getClippingRect({
    element: (e = await (o.isElement == null ? void 0 : o.isElement(v))) == null || e ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: h,
    rootBoundary: d,
    strategy: l
  })), w = c === "floating" ? {
    ...r.floating,
    x: s,
    y: i
  } : r.reference, k = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), $ = await (o.isElement == null ? void 0 : o.isElement(k)) ? await (o.getScale == null ? void 0 : o.getScale(k)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, b = hs(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
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
const gi = (n) => ({
  name: "arrow",
  options: n,
  async fn(t) {
    const {
      x: e,
      y: s,
      placement: i,
      rects: o,
      platform: r,
      elements: a
    } = t, {
      element: l,
      padding: h = 0
    } = xn(n, t) || {};
    if (l == null)
      return {};
    const d = ha(h), c = {
      x: e,
      y: s
    }, p = mo(i), m = po(p), g = await r.getDimensions(l), y = p === "y", v = y ? "top" : "left", _ = y ? "bottom" : "right", w = y ? "clientHeight" : "clientWidth", k = o.reference[m] + o.reference[p] - c[p] - o.floating[m], $ = c[p] - o.reference[p], b = await (r.getOffsetParent == null ? void 0 : r.getOffsetParent(l));
    let S = b ? b[w] : 0;
    (!S || !await (r.isElement == null ? void 0 : r.isElement(b))) && (S = a.floating[w] || o.floating[m]);
    const A = k / 2 - $ / 2, R = S / 2 - g[m] / 2 - 1, I = Ie(d[v], R), N = Ie(d[_], R), P = I, F = S - g[m] - N, M = S / 2 - g[m] / 2 + A, H = pi(P, M, F), mt = Tn(i) != null && M != H && o.reference[m] / 2 - (M < P ? I : N) - g[m] / 2 < 0 ? M < P ? P - M : F - M : 0;
    return {
      [p]: c[p] - mt,
      data: {
        [p]: H,
        centerOffset: M - H + mt
      }
    };
  }
}), Fs = function(n) {
  return n === void 0 && (n = {}), {
    name: "flip",
    options: n,
    async fn(t) {
      var e;
      const {
        placement: s,
        middlewareData: i,
        rects: o,
        initialPlacement: r,
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
      } = xn(n, t), v = fe(s), _ = fe(r) === r, w = await (a.isRTL == null ? void 0 : a.isRTL(l.floating)), k = c || (_ || !g ? [cs(r)] : ch(r));
      !c && m !== "none" && k.push(...dh(r, g, m, w));
      const $ = [r, ...k], b = await da(t, y), S = [];
      let A = ((e = i.flip) == null ? void 0 : e.overflows) || [];
      if (h && S.push(b[v]), d) {
        const P = lh(s, o, w);
        S.push(b[P[0]], b[P[1]]);
      }
      if (A = [...A, {
        placement: s,
        overflows: S
      }], !S.every((P) => P <= 0)) {
        var R, I;
        const P = (((R = i.flip) == null ? void 0 : R.index) || 0) + 1, F = $[P];
        if (F)
          return {
            data: {
              index: P,
              overflows: A
            },
            reset: {
              placement: F
            }
          };
        let M = (I = A.filter((H) => H.overflows[0] <= 0).sort((H, it) => H.overflows[1] - it.overflows[1])[0]) == null ? void 0 : I.placement;
        if (!M)
          switch (p) {
            case "bestFit": {
              var N;
              const H = (N = A.map((it) => [it.placement, it.overflows.filter((mt) => mt > 0).reduce((mt, Ul) => mt + Ul, 0)]).sort((it, mt) => it[1] - mt[1])[0]) == null ? void 0 : N[0];
              H && (M = H);
              break;
            }
            case "initialPlacement":
              M = r;
              break;
          }
        if (s !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
async function ph(n, t) {
  const {
    placement: e,
    platform: s,
    elements: i
  } = n, o = await (s.isRTL == null ? void 0 : s.isRTL(i.floating)), r = fe(e), a = Tn(e), l = Hs(e) === "y", h = ["left", "top"].includes(r) ? -1 : 1, d = o && l ? -1 : 1, c = xn(t, n);
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
const zs = function(n) {
  return n === void 0 && (n = 0), {
    name: "offset",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s
      } = t, i = await ph(t, n);
      return {
        x: e + i.x,
        y: s + i.y,
        data: i
      };
    }
  };
}, on = function(n) {
  return n === void 0 && (n = {}), {
    name: "shift",
    options: n,
    async fn(t) {
      const {
        x: e,
        y: s,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: r = !1,
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
      } = xn(n, t), h = {
        x: e,
        y: s
      }, d = await da(t, l), c = Hs(fe(i)), p = ca(c);
      let m = h[p], g = h[c];
      if (o) {
        const v = p === "y" ? "top" : "left", _ = p === "y" ? "bottom" : "right", w = m + d[v], k = m - d[_];
        m = pi(w, m, k);
      }
      if (r) {
        const v = c === "y" ? "top" : "left", _ = c === "y" ? "bottom" : "right", w = g + d[v], k = g - d[_];
        g = pi(w, g, k);
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
          y: y.y - s
        }
      };
    }
  };
};
function Zt(n) {
  return ua(n) ? (n.nodeName || "").toLowerCase() : "#document";
}
function ot(n) {
  var t;
  return (n == null || (t = n.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Bt(n) {
  var t;
  return (t = (ua(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : t.documentElement;
}
function ua(n) {
  return n instanceof Node || n instanceof ot(n).Node;
}
function Wt(n) {
  return n instanceof Element || n instanceof ot(n).Element;
}
function Ct(n) {
  return n instanceof HTMLElement || n instanceof ot(n).HTMLElement;
}
function er(n) {
  return typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof ot(n).ShadowRoot;
}
function En(n) {
  const {
    overflow: t,
    overflowX: e,
    overflowY: s,
    display: i
  } = ht(n);
  return /auto|scroll|overlay|hidden|clip/.test(t + s + e) && !["inline", "contents"].includes(i);
}
function mh(n) {
  return ["table", "td", "th"].includes(Zt(n));
}
function go(n) {
  const t = yo(), e = ht(n);
  return e.transform !== "none" || e.perspective !== "none" || (e.containerType ? e.containerType !== "normal" : !1) || !t && (e.backdropFilter ? e.backdropFilter !== "none" : !1) || !t && (e.filter ? e.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((s) => (e.willChange || "").includes(s)) || ["paint", "layout", "strict", "content"].some((s) => (e.contain || "").includes(s));
}
function gh(n) {
  let t = Re(n);
  for (; Ct(t) && !Vs(t); ) {
    if (go(t))
      return t;
    t = Re(t);
  }
  return null;
}
function yo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function Vs(n) {
  return ["html", "body", "#document"].includes(Zt(n));
}
function ht(n) {
  return ot(n).getComputedStyle(n);
}
function Us(n) {
  return Wt(n) ? {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  } : {
    scrollLeft: n.pageXOffset,
    scrollTop: n.pageYOffset
  };
}
function Re(n) {
  if (Zt(n) === "html")
    return n;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    n.assignedSlot || // DOM Element detected.
    n.parentNode || // ShadowRoot detected.
    er(n) && n.host || // Fallback.
    Bt(n)
  );
  return er(t) ? t.host : t;
}
function fa(n) {
  const t = Re(n);
  return Vs(t) ? n.ownerDocument ? n.ownerDocument.body : n.body : Ct(t) && En(t) ? t : fa(t);
}
function ds(n, t) {
  var e;
  t === void 0 && (t = []);
  const s = fa(n), i = s === ((e = n.ownerDocument) == null ? void 0 : e.body), o = ot(s);
  return i ? t.concat(o, o.visualViewport || [], En(s) ? s : []) : t.concat(s, ds(s));
}
function pa(n) {
  const t = ht(n);
  let e = parseFloat(t.width) || 0, s = parseFloat(t.height) || 0;
  const i = Ct(n), o = i ? n.offsetWidth : e, r = i ? n.offsetHeight : s, a = ls(e) !== o || ls(s) !== r;
  return a && (e = o, s = r), {
    width: e,
    height: s,
    $: a
  };
}
function _o(n) {
  return Wt(n) ? n : n.contextElement;
}
function xe(n) {
  const t = _o(n);
  if (!Ct(t))
    return Xt(1);
  const e = t.getBoundingClientRect(), {
    width: s,
    height: i,
    $: o
  } = pa(t);
  let r = (o ? ls(e.width) : e.width) / s, a = (o ? ls(e.height) : e.height) / i;
  return (!r || !Number.isFinite(r)) && (r = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: r,
    y: a
  };
}
const yh = /* @__PURE__ */ Xt(0);
function ma(n) {
  const t = ot(n);
  return !yo() || !t.visualViewport ? yh : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function _h(n, t, e) {
  return t === void 0 && (t = !1), !e || t && e !== ot(n) ? !1 : t;
}
function pe(n, t, e, s) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  const i = n.getBoundingClientRect(), o = _o(n);
  let r = Xt(1);
  t && (s ? Wt(s) && (r = xe(s)) : r = xe(n));
  const a = _h(o, e, s) ? ma(o) : Xt(0);
  let l = (i.left + a.x) / r.x, h = (i.top + a.y) / r.y, d = i.width / r.x, c = i.height / r.y;
  if (o) {
    const p = ot(o), m = s && Wt(s) ? ot(s) : s;
    let g = p.frameElement;
    for (; g && s && m !== p; ) {
      const y = xe(g), v = g.getBoundingClientRect(), _ = ht(g), w = v.left + (g.clientLeft + parseFloat(_.paddingLeft)) * y.x, k = v.top + (g.clientTop + parseFloat(_.paddingTop)) * y.y;
      l *= y.x, h *= y.y, d *= y.x, c *= y.y, l += w, h += k, g = ot(g).frameElement;
    }
  }
  return hs({
    width: d,
    height: c,
    x: l,
    y: h
  });
}
function vh(n) {
  let {
    rect: t,
    offsetParent: e,
    strategy: s
  } = n;
  const i = Ct(e), o = Bt(e);
  if (e === o)
    return t;
  let r = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = Xt(1);
  const l = Xt(0);
  if ((i || !i && s !== "fixed") && ((Zt(e) !== "body" || En(o)) && (r = Us(e)), Ct(e))) {
    const h = pe(e);
    a = xe(e), l.x = h.x + e.clientLeft, l.y = h.y + e.clientTop;
  }
  return {
    width: t.width * a.x,
    height: t.height * a.y,
    x: t.x * a.x - r.scrollLeft * a.x + l.x,
    y: t.y * a.y - r.scrollTop * a.y + l.y
  };
}
function wh(n) {
  return Array.from(n.getClientRects());
}
function ga(n) {
  return pe(Bt(n)).left + Us(n).scrollLeft;
}
function bh(n) {
  const t = Bt(n), e = Us(n), s = n.ownerDocument.body, i = le(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth), o = le(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight);
  let r = -e.scrollLeft + ga(n);
  const a = -e.scrollTop;
  return ht(s).direction === "rtl" && (r += le(t.clientWidth, s.clientWidth) - i), {
    width: i,
    height: o,
    x: r,
    y: a
  };
}
function Ch(n, t) {
  const e = ot(n), s = Bt(n), i = e.visualViewport;
  let o = s.clientWidth, r = s.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, r = i.height;
    const h = yo();
    (!h || h && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: r,
    x: a,
    y: l
  };
}
function kh(n, t) {
  const e = pe(n, !0, t === "fixed"), s = e.top + n.clientTop, i = e.left + n.clientLeft, o = Ct(n) ? xe(n) : Xt(1), r = n.clientWidth * o.x, a = n.clientHeight * o.y, l = i * o.x, h = s * o.y;
  return {
    width: r,
    height: a,
    x: l,
    y: h
  };
}
function nr(n, t, e) {
  let s;
  if (t === "viewport")
    s = Ch(n, e);
  else if (t === "document")
    s = bh(Bt(n));
  else if (Wt(t))
    s = kh(t, e);
  else {
    const i = ma(n);
    s = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return hs(s);
}
function ya(n, t) {
  const e = Re(n);
  return e === t || !Wt(e) || Vs(e) ? !1 : ht(e).position === "fixed" || ya(e, t);
}
function $h(n, t) {
  const e = t.get(n);
  if (e)
    return e;
  let s = ds(n).filter((a) => Wt(a) && Zt(a) !== "body"), i = null;
  const o = ht(n).position === "fixed";
  let r = o ? Re(n) : n;
  for (; Wt(r) && !Vs(r); ) {
    const a = ht(r), l = go(r);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || En(r) && !l && ya(n, r)) ? s = s.filter((d) => d !== r) : i = a, r = Re(r);
  }
  return t.set(n, s), s;
}
function xh(n) {
  let {
    element: t,
    boundary: e,
    rootBoundary: s,
    strategy: i
  } = n;
  const r = [...e === "clippingAncestors" ? $h(t, this._c) : [].concat(e), s], a = r[0], l = r.reduce((h, d) => {
    const c = nr(t, d, i);
    return h.top = le(c.top, h.top), h.right = Ie(c.right, h.right), h.bottom = Ie(c.bottom, h.bottom), h.left = le(c.left, h.left), h;
  }, nr(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Th(n) {
  return pa(n);
}
function Eh(n, t, e) {
  const s = Ct(t), i = Bt(t), o = e === "fixed", r = pe(n, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Xt(0);
  if (s || !s && !o)
    if ((Zt(t) !== "body" || En(i)) && (a = Us(t)), s) {
      const h = pe(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else
      i && (l.x = ga(i));
  return {
    x: r.left + a.scrollLeft - l.x,
    y: r.top + a.scrollTop - l.y,
    width: r.width,
    height: r.height
  };
}
function sr(n, t) {
  return !Ct(n) || ht(n).position === "fixed" ? null : t ? t(n) : n.offsetParent;
}
function _a(n, t) {
  const e = ot(n);
  if (!Ct(n))
    return e;
  let s = sr(n, t);
  for (; s && mh(s) && ht(s).position === "static"; )
    s = sr(s, t);
  return s && (Zt(s) === "html" || Zt(s) === "body" && ht(s).position === "static" && !go(s)) ? e : s || gh(n) || e;
}
const Sh = async function(n) {
  let {
    reference: t,
    floating: e,
    strategy: s
  } = n;
  const i = this.getOffsetParent || _a, o = this.getDimensions;
  return {
    reference: Eh(t, await i(e), s),
    floating: {
      x: 0,
      y: 0,
      ...await o(e)
    }
  };
};
function Mh(n) {
  return ht(n).direction === "rtl";
}
const Nh = {
  convertOffsetParentRelativeRectToViewportRelativeRect: vh,
  getDocumentElement: Bt,
  getClippingRect: xh,
  getOffsetParent: _a,
  getElementRects: Sh,
  getClientRects: wh,
  getDimensions: Th,
  getScale: xe,
  isElement: Wt,
  isRTL: Mh
};
function Dh(n, t) {
  let e = null, s;
  const i = Bt(n);
  function o() {
    clearTimeout(s), e && e.disconnect(), e = null;
  }
  function r(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: h,
      top: d,
      width: c,
      height: p
    } = n.getBoundingClientRect();
    if (a || t(), !c || !p)
      return;
    const m = Dn(d), g = Dn(i.clientWidth - (h + c)), y = Dn(i.clientHeight - (d + p)), v = Dn(h), w = {
      rootMargin: -m + "px " + -g + "px " + -y + "px " + -v + "px",
      threshold: le(0, Ie(1, l)) || 1
    };
    let k = !0;
    function $(b) {
      const S = b[0].intersectionRatio;
      if (S !== l) {
        if (!k)
          return r();
        S ? r(!1, S) : s = setTimeout(() => {
          r(!1, 1e-7);
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
    e.observe(n);
  }
  return r(!0), o;
}
function vo(n, t, e, s) {
  s === void 0 && (s = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: r = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = s, h = _o(n), d = i || o ? [...h ? ds(h) : [], ...ds(t)] : [];
  d.forEach((_) => {
    i && _.addEventListener("scroll", e, {
      passive: !0
    }), o && _.addEventListener("resize", e);
  });
  const c = h && a ? Dh(h, e) : null;
  let p = -1, m = null;
  r && (m = new ResizeObserver((_) => {
    let [w] = _;
    w && w.target === h && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      m && m.observe(t);
    })), e();
  }), h && !l && m.observe(h), m.observe(t));
  let g, y = l ? pe(n) : null;
  l && v();
  function v() {
    const _ = pe(n);
    y && (_.x !== y.x || _.y !== y.y || _.width !== y.width || _.height !== y.height) && e(), y = _, g = requestAnimationFrame(v);
  }
  return e(), () => {
    d.forEach((_) => {
      i && _.removeEventListener("scroll", e), o && _.removeEventListener("resize", e);
    }), c && c(), m && m.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const js = (n, t, e) => {
  const s = /* @__PURE__ */ new Map(), i = {
    platform: Nh,
    ...e
  }, o = {
    ...i.platform,
    _c: s
  };
  return fh(n, t, {
    ...i,
    platform: o
  });
}, Ah = '[data-toggle="popover"]', ir = "show", or = "in";
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
    const { trigger: t, id: e, triggerEvent: s } = this.options;
    this._triggerEvent = s, this._id = e || `popover_${this.gid}`;
    const i = this.getTriggerElement();
    if (i instanceof HTMLElement) {
      const r = u(i), { namespace: a } = this;
      t === "hover" ? r.on(`mouseenter${a}`, (l) => {
        this.show({ delay: !0, event: l });
      }).on(`mouseleave${a}`, () => {
        this.delayHide();
      }) : t && r.on(`${t}${a}`, (l) => {
        this.toggle({ event: l }), l.preventDefault();
      });
    }
    const { show: o } = this.options;
    o && this.show({ delay: typeof o == "number" ? o : !1 });
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
    const { delay: e, event: s } = t || {};
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
    const i = this.initTarget();
    if (!i)
      return;
    this._targetElement = i;
    const o = u(i), { animation: r, mask: a, onShow: l, onShown: h, trigger: d } = this.options;
    if (o.addClass(ir), r && o.addClass(r === !0 ? "fade" : r), this._shown = !0, this.render(), l == null || l.call(this), this.emit("show"), d === "hover") {
      this._clearDelayHide();
      const { namespace: c } = this;
      o.on(`mouseenter${c}`, () => {
        this._clearDelayHide();
      }).on(`mouseleave${c}`, () => {
        this.delayHide();
      });
    }
    this._virtual || u(this._triggerElement).addClass("with-popover-show"), this._resetTimer(() => {
      o.addClass(or), this._resetTimer(() => {
        h == null || h.call(this), this.emit("shown");
      }, 200), a && u(document).on(`click${this.namespace}`, this._onClickDoc);
    }, 50);
  }
  hide() {
    (!this._shown || !this._targetElement) && this._resetTimer();
    const { destroyOnHide: t, animation: e, onHide: s, onHidden: i, trigger: o } = this.options, r = u(this._targetElement);
    this._shown = !1, s == null || s.call(this), this.emit("hide"), r.removeClass(or), o === "hover" && (this._clearDelayHide(), r.off(this.namespace)), this._virtual || u(this._triggerElement).removeClass("with-popover-show").removeAttr("data-popover-placement"), u(document).off(this.namespace), this._resetTimer(() => {
      i == null || i.call(this), this.emit("hidden"), r.removeClass(ir), t && this._resetTimer(() => {
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
    const t = this._triggerElement, e = this._targetElement, s = this._layoutWatcher;
    if (!e || !t || !this._shown) {
      s && (s(), this._layoutWatcher = void 0);
      return;
    }
    s || (this._layoutWatcher = vo(t, e, () => {
      const { width: i, animation: o, name: r = "popover" } = this.options;
      i === "100%" && !this._virtual && u(e).css({ width: u(t).width() }), js(...this._getLayoutOptions()).then(({ x: a, y: l, middlewareData: h, placement: d, strategy: c }) => {
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
        }).attr("class", `arrow ${r}-arrow arrow-${g}`), o === !0 && p.attr("class", `${p.attr("class").split(" ").filter((v) => v !== "fade" && !v.startsWith("fade-from")).join(" ")} fade-from-${g}`), this._virtual || u(this._triggerElement).attr("data-popover-placement", m);
      });
    }));
  }
  render(t) {
    super.render(t);
    const e = this._targetElement;
    if (!e)
      return;
    const s = this._getRenderOptions(), i = u(e);
    if (i.toggleClass("popup", s.popup).css(s.style), s.className && i.setClass(s.className), this._dynamic) {
      let o = this._panel;
      o && o.element !== e && (o.destroy(), o = void 0), o ? o.render(s) : (o = new fo(e, s), o.on("inited", () => this.layout())), this._panel = o;
    } else
      s.arrow && (i.find(".arrow").length || i.append(u('<div class="arrow"></div>').css(s.arrowStyle))), this.layout();
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
    const t = this._triggerElement, e = this._targetElement, { placement: s, flip: i, shift: o, offset: r, arrow: a, strategy: l } = this.options, h = a ? e.querySelector(".arrow") : null, d = h ? typeof a == "number" ? a : 5 : 0;
    return [t, e, {
      placement: s,
      strategy: l,
      middleware: [
        i ? Fs() : null,
        o ? on(typeof o == "object" ? o : void 0) : null,
        r || d ? zs((r || 0) + d) : null,
        a ? gi({ element: h }) : null
      ].filter(Boolean)
    }];
  }
  _getRenderOptions() {
    const { name: t = "popover" } = this.options, {
      popup: e,
      title: s,
      content: i,
      headingClass: o = `${t}-heading`,
      titleClass: r = `${t}-title`,
      contentClass: a = `${t}-content`,
      style: l,
      className: h = t,
      closeBtn: d,
      arrow: c
    } = this.options;
    return {
      popup: e,
      title: s,
      titleClass: r,
      headingClass: o,
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
    var t, e, s;
    (t = this._layoutWatcher) == null || t.call(this), this._layoutWatcher = void 0, this._dynamic && ((e = this._panel) == null || e.destroy(), (s = this._targetElement) == null || s.remove(), this._panel = void 0, this._targetElement = void 0);
  }
  _resetTimer(t, e = 0) {
    this._timer && clearTimeout(this._timer), t && (this._timer = window.setTimeout(() => {
      this._timer = 0, t();
    }, e));
  }
  _createTarget() {
    const { container: t = "body" } = this.options, e = u(t);
    let s = e.find(`#${this._id}`);
    return s.length || (s = u("<div />").attr({ id: this._id, class: "popover" }).appendTo(e)), s[0];
  }
  static show(t) {
    const { element: e, event: s, ...i } = t, o = e || (s == null ? void 0 : s.currentTarget);
    return this.ensure(o instanceof HTMLElement ? o : document.body, { element: o, show: !0, destroyOnHide: !0, triggerEvent: s, ...i });
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
u(document).on(`click${ct.NAMESPACE} mouseenter${ct.NAMESPACE}`, Ah, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(ct.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    ct.ensure(t, { show: !0, triggerEvent: n }), n.preventDefault();
  }
});
const Ph = '[data-toggle="dropdown"]';
class bt extends ct {
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
      content: X(va, this._getMenuOptions())
    };
  }
}
bt.NAME = "Dropdown";
bt.DEFAULT = {
  ...ct.DEFAULT,
  name: "dropdown",
  placement: "bottom-start",
  arrow: !1,
  closeBtn: !1,
  animation: "fade"
};
u(document).on(`click${bt.NAMESPACE} mouseenter${bt.NAMESPACE}`, Ph, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(bt.KEY)) {
    const e = t.data("trigger") || "click";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    const i = {
      ...t.data(),
      show: !0,
      triggerEvent: n
    };
    if (!i.target && t.is("a")) {
      const o = t.attr("href");
      o && "#0".includes(o[0]) && (i.target = o);
    }
    !i.target && !i.items && !i.menu && (i.target = t.next(".dropdown-menu")), bt.ensure(t, i), n.preventDefault();
  }
});
class wo extends Q {
  constructor() {
    super(...arguments), this._ref = q();
  }
  get triggerElement() {
    return this._ref.current;
  }
  _updateData() {
    const { dropdown: t, items: e } = this.props, s = u(this.triggerElement), i = bt.get(this.triggerElement), o = {
      items: e,
      ...t
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
    var t;
    (t = bt.get(this.triggerElement)) == null || t.destroy();
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
wo.defaultProps = {
  caret: !0
};
class va extends Kt {
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
    !t || !e || js(e, t, {
      placement: this.props.placement,
      middleware: [Fs(), on(), zs(1)]
    }).then(({ x: s, y: i }) => {
      u(t).css({
        left: s,
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
va.defaultProps = {
  ...Kt.defaultProps,
  popup: !0,
  nestedTrigger: "hover",
  placement: "right-start"
};
function wa({
  key: n,
  type: t,
  btnType: e,
  ...s
}) {
  return /* @__PURE__ */ f(wo, { type: e, ...s });
}
let ba = class extends O {
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
  handleItemClick(t, e, s, i) {
    s && s.call(i.target, i);
    const { onClickItem: o } = this.props;
    o && o.call(this, { item: t, index: e, event: i });
  }
  beforeRender() {
    var s;
    const t = { ...this.props }, e = (s = t.beforeRender) == null ? void 0 : s.call(this, t);
    return e && Object.assign(t, e), typeof t.items == "function" && (t.items = t.items.call(this)), t;
  }
  onRenderItem(t, e) {
    const { key: s = e, ...i } = t, o = t.dropdown || t.items ? wo : Q;
    return /* @__PURE__ */ f(o, { ...i }, s);
  }
  renderItem(t, e, s) {
    const { itemRender: i, btnProps: o, onClickItem: r } = t, a = { key: s, ...e };
    if (o && Object.assign(a, o), r && (a.onClick = this.handleItemClick.bind(this, a, s, e.onClick)), i) {
      const l = i.call(this, a, X);
      if (Z(l))
        return l;
      typeof l == "object" && Object.assign(a, l);
    }
    return this.onRenderItem(a, s);
  }
  render() {
    const t = this.beforeRender(), {
      className: e,
      items: s,
      size: i,
      type: o,
      btnProps: r,
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
          s && s.map(this.renderItem.bind(this, t)),
          a
        ]
      }
    );
  }
};
function Ih({
  key: n,
  type: t,
  btnType: e,
  ...s
}) {
  return /* @__PURE__ */ f(ba, { type: e, ...s });
}
let dt = class extends Os {
  beforeRender() {
    const { gap: t, btnProps: e, wrap: s, ...i } = super.beforeRender();
    return i.className = x(i.className, s ? "flex-wrap" : "", typeof t == "number" ? `gap-${t}` : ""), typeof t == "string" && (i.style ? i.style.gap = t : i.style = { gap: t }), i;
  }
  isBtnItem(t) {
    return t === "item" || t === "dropdown";
  }
  renderTypedItem(t, e, s) {
    const { type: i } = s, o = this.props.btnProps, r = this.isBtnItem(i) ? { btnType: "ghost", ...o } : {};
    r.type && (r.btnType = r.type, delete r.type);
    const a = {
      ...e,
      ...r,
      ...s,
      className: x(`${this.name}-${i}`, e.className, r.className, s.className),
      style: Object.assign({}, e.style, r.style, s.style)
    };
    return i === "btn-group" && (a.btnProps = o), /* @__PURE__ */ f(t, { ...a });
  }
};
dt.ItemComponents = {
  item: ih,
  dropdown: wa,
  "btn-group": Ih
};
dt.ROOT_TAG = "nav";
dt.NAME = "toolbar";
dt.defaultProps = {
  btnProps: {
    btnType: "ghost"
  }
};
function Rh({
  className: n,
  style: t,
  actions: e,
  heading: s,
  content: i,
  contentClass: o,
  children: r,
  close: a,
  onClose: l,
  icon: h,
  iconClass: d,
  ...c
}) {
  let p;
  a === !0 ? p = /* @__PURE__ */ f(Q, { className: "alert-close btn ghost square text-inherit", square: !0, onClick: l, children: /* @__PURE__ */ f("span", { class: "close" }) }) : Z(a) ? p = a : typeof a == "object" && (p = /* @__PURE__ */ f(Q, { ...a, onClick: l }));
  const m = Z(e) ? e : e ? /* @__PURE__ */ f(dt, { ...e }) : null;
  return /* @__PURE__ */ f("div", { className: x("alert", n), style: t, ...c, children: [
    /* @__PURE__ */ f(J, { icon: h, className: x("alert-icon", d) }),
    Z(i) ? i : /* @__PURE__ */ f("div", { className: x("alert-content", o), children: [
      Z(s) ? s : s && /* @__PURE__ */ f("div", { className: "alert-heading", children: s }),
      /* @__PURE__ */ f("div", { className: "alert-text", children: i }),
      s ? m : null
    ] }),
    s ? null : m,
    p,
    r
  ] });
}
function Lh(n) {
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
function Wh({
  margin: n,
  type: t,
  placement: e,
  animation: s,
  show: i,
  className: o,
  time: r,
  ...a
}) {
  return /* @__PURE__ */ f(
    Rh,
    {
      className: x("messager", o, t, s === !0 ? Lh(e) : s, i ? "in" : ""),
      ...a
    }
  );
}
var Oh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Bh = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, We = (n, t, e) => (Oh(n, t, "access private method"), e), ne, we;
class bo extends z {
  constructor() {
    super(...arguments), Bh(this, ne), this._show = !1, this._showTimer = 0, this._afterRender = ({ firstRender: t }) => {
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
    this.render(), this.emit("show"), We(this, ne, we).call(this, () => {
      this._show = !0, this.render(), We(this, ne, we).call(this, () => {
        this.emit("shown");
        const { time: t } = this.options;
        t && We(this, ne, we).call(this, () => this.hide(), t);
      });
    }, 100);
  }
  hide() {
    this._show && We(this, ne, we).call(this, () => {
      this.emit("hide"), this._show = !1, this.render(), We(this, ne, we).call(this, () => {
        this.emit("hidden");
      });
    }, 50);
  }
}
ne = /* @__PURE__ */ new WeakSet();
we = function(n, t = 200) {
  this._showTimer && clearTimeout(this._showTimer), this._showTimer = window.setTimeout(() => {
    n(), this._showTimer = 0;
  }, t);
};
bo.NAME = "MessagerItem";
bo.Component = Wh;
var Co = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ce = (n, t, e) => (Co(n, t, "read from private field"), e ? e.call(n) : t.get(n)), An = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Bn = (n, t, e, s) => (Co(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Ca = (n, t, e) => (Co(n, t, "access private method"), e), Te, At, yi, ka, ko, $a;
const qs = class xa extends at {
  constructor() {
    super(...arguments), An(this, yi), An(this, ko), An(this, Te, void 0), An(this, At, void 0);
  }
  get isShown() {
    var t;
    return !!((t = ce(this, At)) != null && t.isShown);
  }
  show(t) {
    this.setOptions(t), Ca(this, yi, ka).call(this).show();
  }
  hide() {
    var t;
    (t = ce(this, At)) == null || t.hide();
  }
  static show(t) {
    typeof t == "string" && (t = { content: t });
    const { container: e, ...s } = t, i = xa.ensure(e || "body", { key: `messager_${u.guid++}`, ...s });
    return i.hide(), i.show(), i;
  }
};
Te = /* @__PURE__ */ new WeakMap();
At = /* @__PURE__ */ new WeakMap();
yi = /* @__PURE__ */ new WeakSet();
ka = function() {
  if (ce(this, At))
    ce(this, At).setOptions(this.options);
  else {
    const n = Ca(this, ko, $a).call(this), t = new bo(n, this.options);
    t.on("hidden", () => {
      t.destroy(), n == null || n.remove(), Bn(this, Te, void 0), Bn(this, At, void 0);
    }), Bn(this, At, t);
  }
  return ce(this, At);
};
ko = /* @__PURE__ */ new WeakSet();
$a = function() {
  if (ce(this, Te))
    return ce(this, Te);
  const { placement: n = "top" } = this.options;
  let t = this.$element.find(`.messagers-${n}`);
  t.length || (t = u(`<div class="messagers messagers-${n}"></div>`).appendTo(this.$element));
  let e = t.find(`#messager-${this.gid}`);
  return e.length || (e = u(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo(t), Bn(this, Te, e[0])), e[0];
};
qs.NAME = "messager";
qs.DEFAULT = {
  placement: "top",
  animation: !0,
  close: !0,
  margin: 6,
  time: 5e3
};
qs.MULTI_INSTANCE = !0;
let au = qs;
let $o = class extends O {
  render(t) {
    const { percent: e = 50, size: s = 24, circleBg: i, circleColor: o, text: r, className: a, textStyle: l, textX: h, textY: d, children: c } = t, p = s / 2;
    let { circleWidth: m = 0.2 } = t;
    m < 1 && (m = s * m);
    const g = (s - m) / 2;
    return /* @__PURE__ */ f("svg", { className: a, width: s, height: s, children: [
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: i, fill: "transparent" }),
      /* @__PURE__ */ f("circle", { cx: p, cy: p, r: g, "stroke-width": m, stroke: o, fill: "transparent", "stroke-linecap": "round", "stroke-dasharray": Math.PI * g * 2, "stroke-dashoffset": Math.PI * g * 2 * (100 - e) / 100, style: { transformOrigin: "center", transform: "rotate(-90deg)" } }),
      r ? /* @__PURE__ */ f("text", { x: h ?? p, y: d ?? p + m / 2, "dominant-baseline": "middle", "text-anchor": "middle", style: l || { fontSize: `${g}px` }, children: r === !0 ? Math.round(e) : r }) : null,
      c
    ] });
  }
};
$o.defaultProps = {
  percent: 50,
  size: 24,
  circleWidth: 0.1,
  circleBg: "var(--color-surface)",
  circleColor: "var(--color-primary-500)",
  text: !0
};
class Ta extends z {
}
Ta.NAME = "ProgressCircle";
Ta.Component = $o;
const Oe = '[droppable="true"]';
class Ea extends at {
  constructor() {
    super(...arguments), this._state = { dragging: null, dropping: null }, this._handleMouseDown = (t) => {
      const { selector: e, handle: s, beforeDrag: i } = this.options, o = u(t.target), r = o.closest(e), a = r[0];
      if (!a || s && !o.closest(s).length || i && i.call(this, t, a) === !1)
        return;
      r.attr("draggable", "true");
      const { draggingClass: l } = this.options;
      l && (this.$element.find(l).removeClass(l), r.addClass(l)), this._setState({ dragging: a });
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
      const { $element: o } = this, { target: r, selector: a, droppableClass: l, hasDraggingClass: h } = s, d = typeof r == "function" ? u(r.call(this, e)) : o.find(r || a || Oe);
      l && (o.find(l).removeClass(l), d.addClass(l)), h && o.addClass(h), o.find(Oe).removeAttr("droppable"), d.attr("droppable", "true"), this._$targets = d;
    }, this._handleDrag = (t) => {
      var s;
      const { dragElement: e } = this;
      e && (this._setDragEffect(t), (s = this.options.onDrag) == null || s.call(this, t, e));
    }, this._handleDragEnd = (t) => {
      var s;
      const { dragElement: e } = this;
      this._clean(), e && ((s = this.options.onDragEnd) == null || s.call(this, t, e));
    }, this._handleDragEnter = (t) => {
      this._handleDragOver(t);
    }, this._handleDragOver = (t) => {
      var o, r;
      const { dragElement: e } = this, s = u(t.target).closest(Oe)[0], i = this.state.dropping;
      if (!(!e || !s)) {
        if (t.preventDefault(), this._setDragEffect(t), i !== s) {
          const { droppingClass: a } = this.options;
          a && (i && this._leaveDropElement(t, i), u(s).addClass(a)), this._setState({ dropping: s }), (o = this.options.onDragEnter) == null || o.call(this, t, e, s);
        }
        (r = this.options.onDragOver) == null || r.call(this, t, e, s);
      }
    }, this._handleDragLeave = (t) => {
      const { dragElement: e } = this, s = u(t.target).filter(Oe)[0];
      !e || !s || (t.preventDefault(), this._leaveDropElement(t, s), this._setState({ dropping: null }));
    }, this._handleDrop = (t) => {
      var s;
      const e = u(t.target).closest(Oe)[0];
      e && (t.preventDefault(), (s = this.options.onDrop) == null || s.call(this, t, this.dragElement, e));
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
    var o;
    const e = this._state, { dragging: s = e.dragging, dropping: i = e.dropping } = t;
    s === e.dragging && i === e.dropping || (this._state = { dragging: s, dropping: i }, (o = this.options.onChange) == null || o.call(this, this._state, e));
  }
  _setDragEffect(t) {
    const { dropEffect: e } = this.options;
    e && (t.dataTransfer.dropEffect = e);
  }
  _leaveDropElement(t, e) {
    var i;
    const { droppingClass: s } = this.options;
    s && u(e).removeClass(s), (i = this.options.onDragLeave) == null || i.call(this, t, this.dragElement, e);
  }
  _clean() {
    const { draggingClass: t, droppableClass: e, droppingClass: s, hasDraggingClass: i } = this.options;
    i && this.$element.removeClass(i);
    const { dragElement: o } = this;
    if (o) {
      const a = u(o);
      t && a.removeClass(t);
    }
    this._setState({ dropping: null, dragging: null });
    const r = this._$targets;
    r && (e && r.removeClass(e), s && r.removeClass(s), this._$targets = void 0);
  }
}
Ea.NAME = "Draggable";
Ea.DEFAULT = {
  selector: '[draggable="true"]',
  dropEffect: "move",
  hasDraggingClass: "has-dragging",
  draggingClass: "is-dragging",
  droppableClass: "is-droppable",
  droppingClass: "is-dropping"
};
const Hh = '[moveable="true"]';
class Sa extends at {
  constructor() {
    super(...arguments), this._handleMouseDown = (t) => {
      const { options: e } = this, { selector: s, handle: i, onMoveStart: o } = e, r = u(t.target), a = r.closest(s), l = a[0];
      if (!l || i && !r.closest(i).length || o && o.call(this, t, l) === !1)
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
    this._clean(), u(document).off(this.namespace), super.destroy();
  }
  _setState(t, e) {
    var a;
    t.preventDefault();
    let s = {
      x: t.pageX,
      y: t.pageY
    };
    const i = this._state;
    if (e) {
      const l = u(e);
      if (this.options.move === !0) {
        const d = l.css("position");
        s.strategy = d === "fixed" || d === "absolute" ? "position" : "transform";
      } else
        s.strategy = "none";
      const h = l.position();
      s = u.extend(s, {
        target: e,
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
      s = u.extend({}, i, s, {
        deltaX: l,
        deltaY: h,
        left: i.startLeft + l,
        top: i.startTop + h
      });
    }
    this._state = s;
    const { strategy: o, target: r } = s;
    o === "position" ? u(r).css({ left: s.left, top: s.top }) : o === "transform" && u(r).css("transform", `translate(${s.deltaX}px, ${s.deltaY}px)`), (a = this.options.onChange) == null || a.call(this, s, i, t);
  }
  _clean() {
    u(document).off("mousemove mouseup");
    const { hasMovingClass: t, movingClass: e } = this.options;
    t && this.$element.removeClass(t);
    const { moveElement: s } = this;
    if (s) {
      const i = u(s);
      e && i.removeClass(e);
    }
    this._state = void 0;
  }
}
Sa.NAME = "Moveable";
Sa.DEFAULT = {
  selector: Hh,
  hasMovingClass: "has-moving",
  movingClass: "is-moving",
  move: !0
};
var Dt;
class Fh {
  constructor(t = "") {
    D(this, Dt, void 0);
    typeof t == "object" ? L(this, Dt, t) : L(this, Dt, document.appendChild(document.createComment(t)));
  }
  on(t, e, s) {
    T(this, Dt).addEventListener(t, e, s);
  }
  once(t, e, s) {
    T(this, Dt).addEventListener(t, e, { once: !0, ...s });
  }
  off(t, e, s) {
    T(this, Dt).removeEventListener(t, e, s);
  }
  emit(t) {
    return T(this, Dt).dispatchEvent(t), t;
  }
}
Dt = new WeakMap();
const rr = /* @__PURE__ */ new Set([
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
class Ma extends Fh {
  on(t, e, s) {
    super.on(t, e, s);
  }
  off(t, e, s) {
    super.off(t, e, s);
  }
  once(t, e, s) {
    super.once(t, e, s);
  }
  emit(t, e) {
    return typeof t == "string" && (rr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), super.emit(Ma.createEvent(t, e));
  }
  static createEvent(t, e) {
    return typeof t == "string" && (rr.has(t) ? (t = new Event(t), Object.assign(t, { detail: e })) : t = new CustomEvent(t, { detail: e })), t;
  }
}
const xo = class Na extends at {
  async afterInit() {
    const t = await Na.loadModule();
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
xo.NAME = "Sortable";
xo.DEFAULT = {
  animation: 150
};
let cu = xo;
u.registerLib("sortablejs", {
  src: "sortable/sortable.min.js",
  name: "Sortable"
});
let Da = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
const ti = "```ZUI_STR\n";
var cn, re, Ee, _t, Se, Me, Hn;
const Bo = class Bo {
  /**
   * Create new store instance
   * @param name Name of store
   * @param type Store type
   */
  constructor(t, e = "local") {
    D(this, Me);
    D(this, cn, void 0);
    D(this, re, void 0);
    D(this, Ee, void 0);
    D(this, _t, void 0);
    D(this, Se, void 0);
    L(this, cn, e), L(this, Ee, t ?? Da()), L(this, re, `ZUI_STORE:${T(this, Ee)}`), L(this, _t, e === "local" ? localStorage : sessionStorage);
  }
  /**
   * Get store type
   */
  get type() {
    return T(this, cn);
  }
  /**
   * Get session type store instance
   */
  get session() {
    return this.type === "session" ? this : (T(this, Se) || L(this, Se, new Bo(T(this, Ee), "session")), T(this, Se));
  }
  /**
   * Get value from store.
   *
   * @param key          Key to get.
   * @param defaultValue Default value to return if key is not found.
   * @returns Value of key or defaultValue if key is not found.
   */
  get(t, e) {
    const s = T(this, _t).getItem($t(this, Me, Hn).call(this, t));
    if (typeof s == "string") {
      if (s.startsWith(ti))
        return s.substring(ti.length);
      try {
        return JSON.parse(s);
      } catch {
      }
    }
    return s ?? e;
  }
  /**
   * Set key-value pair in store
   * @param key Key to set
   * @param value Value to set
   */
  set(t, e) {
    if (e == null)
      return this.remove(t);
    T(this, _t).setItem($t(this, Me, Hn).call(this, t), typeof e == "string" ? `${ti}${e}` : JSON.stringify(e));
  }
  /**
   * Remove key-value pair from store
   * @param key Key to remove
   */
  remove(t) {
    T(this, _t).removeItem($t(this, Me, Hn).call(this, t));
  }
  /**
   * Iterate all key-value pairs in store
   * @param callback Callback function to call for each key-value pair in the store
   */
  each(t) {
    for (let e = 0; e < T(this, _t).length; e++) {
      const s = T(this, _t).key(e);
      if (s != null && s.startsWith(T(this, re))) {
        const i = T(this, _t).getItem(s);
        typeof i == "string" && t(s.substring(T(this, re).length + 1), JSON.parse(i));
      }
    }
  }
  /**
   * Get all key values in store
   * @returns All key-value pairs in the store
   */
  getAll() {
    const t = {};
    return this.each((e, s) => {
      t[e] = s;
    }), t;
  }
};
cn = new WeakMap(), re = new WeakMap(), Ee = new WeakMap(), _t = new WeakMap(), Se = new WeakMap(), Me = new WeakSet(), Hn = function(t) {
  return `${T(this, re)}:${t}`;
};
let us = Bo;
const je = new us("DEFAULT");
function zh(n, t = "local") {
  return new us(n, t);
}
Object.assign(je, { create: zh });
function Vh(n) {
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
function Uh(n) {
  const [t, e, s] = typeof n == "string" ? Vh(n) : n;
  return t * 0.299 + e * 0.587 + s * 0.114 > 186;
}
function ar(n, t) {
  return Uh(n) ? (t == null ? void 0 : t.dark) ?? "#333333" : (t == null ? void 0 : t.light) ?? "#ffffff";
}
function lr(n, t = 255) {
  return Math.min(Math.max(n, 0), t);
}
function jh(n, t, e) {
  n = n % 360 / 360, t = lr(t), e = lr(e);
  const s = e <= 0.5 ? e * (t + 1) : e + t - e * t, i = e * 2 - s, o = (r) => (r = r < 0 ? r + 1 : r > 1 ? r - 1 : r, r * 6 < 1 ? i + (s - i) * r * 6 : r * 2 < 1 ? s : r * 3 < 2 ? i + (s - i) * (2 / 3 - r) * 6 : i);
  return [
    o(n + 1 / 3) * 255,
    o(n) * 255,
    o(n - 1 / 3) * 255
  ];
}
function qh(n) {
  let t = 0;
  if (typeof n != "string" && (n = String(n)), n && n.length)
    for (let e = 0; e < n.length; ++e)
      t += (e + 1) * n.charCodeAt(e);
  return t;
}
function Yh(n, t) {
  return /^[\u4e00-\u9fa5\s]+$/.test(n) ? n.length <= t ? n : n.substring(n.length - t) : /^[A-Za-z\d\s]+$/.test(n) ? n[0].toUpperCase() : n.length <= t ? n : n.substring(0, t);
}
let Aa = class extends O {
  render() {
    const {
      className: t,
      style: e,
      size: s = "",
      circle: i,
      rounded: o,
      background: r,
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
    } = this.props, _ = ["avatar", t], w = { ...e, background: r, color: a };
    let k = 32;
    s && (typeof s == "number" ? (w.width = `${s}px`, w.height = `${s}px`, w.fontSize = `${Math.max(12, Math.round(s / 2))}px`, k = s) : (_.push(`size-${s}`), k = { xs: 20, sm: 24, lg: 48, xl: 80 }[s])), i ? _.push("circle") : o && (typeof o == "number" ? w.borderRadius = `${o}px` : _.push(`rounded-${o}`));
    let $;
    if (c)
      _.push("has-img"), $ = /* @__PURE__ */ f("img", { className: "avatar-img", src: c, alt: l });
    else if (l != null && l.length) {
      const b = Yh(l, d);
      if (_.push("has-text", `has-text-${b.length}`), r)
        !a && r && (w.color = ar(r));
      else {
        const A = h ?? l, R = (typeof A == "number" ? A : qh(A)) * p % 360;
        if (w.background = `hsl(${R},${m * 100}%,${g * 100}%)`, !a) {
          const I = jh(R, m, g);
          w.color = ar(I);
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
class Pa extends z {
}
Pa.NAME = "Avatar";
Pa.Component = Aa;
class Ia extends z {
}
Ia.NAME = "BtnGroup";
Ia.Component = ba;
const _i = Symbol("EVENT_PICK");
class To extends O {
  constructor(t) {
    super(t), this._handleClick = this._handleClick.bind(this), this._hasInput = !!u(`#${t.id}`).length;
  }
  get hasInput() {
    return this._hasInput;
  }
  _handleClick(t) {
    const { togglePop: e, clickType: s, onClick: i } = this.props;
    let o = s === "open" ? !0 : void 0;
    const r = u(t.target), a = i == null ? void 0 : i(t);
    if (!t.defaultPrevented) {
      if (typeof a == "boolean")
        o = a;
      else {
        if (r.closest('[data-dismiss="pick"]').length) {
          e(!1);
          return;
        }
        if (r.closest("a,input").length)
          return;
      }
      requestAnimationFrame(() => e(o));
    }
  }
  _getClass(t) {
    const { state: e, className: s } = t, { open: i, disabled: o } = e;
    return x(
      "pick",
      s,
      i && "is-open focus",
      o && "disabled"
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
    const { name: e, state: { value: s = "" }, id: i } = t;
    if (e)
      if (this._hasInput)
        u(`#${i}`).val(s);
      else
        return /* @__PURE__ */ f("input", { id: i, type: "hidden", className: "pick-value", name: e, value: s });
    return null;
  }
  componentDidMount() {
    const { id: t, state: e } = this.props;
    u(`#${t}`).on(`change.zui.pick.${t}`, (s, i) => {
      if (i === _i)
        return;
      const o = s.target.value;
      o !== e.value && (this._skipTriggerChange = o, this.props.changeState({ value: o }));
    });
  }
  componentWillUnmount() {
    const { id: t } = this.props;
    u(`#${t}`).off(`change.zui.pick.${t}`);
  }
  componentDidUpdate(t) {
    const { id: e, state: s, name: i } = this.props;
    i && t.state.value !== s.value && (this._skipTriggerChange !== s.value && u(`#${e}`).trigger("change", _i), this._skipTriggerChange = !1);
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
var ae, vt, jt;
class Ra extends O {
  constructor(e) {
    super(e);
    D(this, ae, void 0);
    D(this, vt, void 0);
    D(this, jt, void 0);
    L(this, ae, q()), this._handleDocClick = (s) => {
      const { state: { open: i }, id: o, togglePop: r } = this.props, a = u(s.target);
      i !== "closing" && !a.closest(`#pick-${o},#pick-pop-${o}`).length && a.parent().length && r(!1);
    }, this._handleClick = this._handleClick.bind(this);
  }
  get trigger() {
    return u(`#pick-${this.props.id}`)[0];
  }
  get element() {
    var e;
    return (e = T(this, ae)) == null ? void 0 : e.current;
  }
  get container() {
    return T(this, jt);
  }
  _handleClick(e) {
    const { togglePop: s } = this.props, i = u(e.target), o = i.closest("[data-pick-value]");
    if (o.length)
      return e.stopPropagation(), s(!1, { value: `${o.dataset("pickValue")}` });
    if (i.closest('[data-dismiss="pick"]').length)
      return s(!1);
  }
  _getClass(e) {
    const { className: s, state: i } = e, { open: o } = i;
    return x(
      "pick-pop",
      s,
      o === !0 && "in"
    );
  }
  _getProps(e) {
    const {
      id: s,
      style: i,
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    } = e, h = u.extend({
      maxHeight: o,
      maxWidth: r,
      minHeight: a,
      minWidth: l
    }, i);
    return {
      id: `pick-pop-${s}`,
      className: this._getClass(e),
      style: h,
      ref: T(this, ae),
      onClick: this._handleClick
    };
  }
  _getContainer(e) {
    if (!T(this, jt)) {
      const s = u(e.container || "body");
      let i = s.find(".pick-container");
      i.length || (i = u("<div>").addClass("pick-container").appendTo(s)), L(this, jt, i[0]);
    }
    return T(this, jt);
  }
  _render(e) {
    return /* @__PURE__ */ f("div", { ...this._getProps(e), children: this._renderPop(e) });
  }
  _renderPop(e) {
    return e.children;
  }
  layout() {
    const { element: e, trigger: s, props: i } = this, { state: o } = i;
    if (!e || !s || !o.open) {
      T(this, vt) && (T(this, vt).call(this), L(this, vt, void 0));
      return;
    }
    T(this, vt) || L(this, vt, vo(s, e, () => {
      const { placement: r, width: a } = i;
      js(s, e, {
        placement: !r || r === "auto" ? "bottom-start" : r,
        middleware: [r === "auto" ? Fs() : null, on(), zs(1)].filter(Boolean)
      }).then(({ x: l, y: h }) => {
        var d, c;
        u(e).css({
          left: l,
          top: h,
          width: a === "100%" ? u(s).outerWidth() : void 0
        }), (c = (d = this.props).onLayout) == null || c.call(d, e);
      }), a === "100%" && u(e).css({ width: u(e).width() });
    }));
  }
  componentDidMount() {
    var e, s;
    this.layout(), u(document).on("click", this._handleDocClick), (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !0 });
  }
  componentDidUpdate() {
    var e, s;
    (s = (e = this.props).afterRender) == null || s.call(e, { firstRender: !1 });
  }
  componentWillUnmount() {
    var s, i;
    u(document).off("click", this._handleDocClick);
    const e = T(this, vt);
    e && (e(), L(this, vt, void 0)), L(this, jt, void 0), L(this, ae, void 0), u(`#pick-pop-${this.props.id}`).remove(), (i = (s = this.props).beforeDestroy) == null || i.call(s);
  }
  render(e) {
    return Zc(this._render(e), this._getContainer(e));
  }
}
ae = new WeakMap(), vt = new WeakMap(), jt = new WeakMap();
var La = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Ft = (n, t, e) => (La(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ei = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, _e = (n, t, e, s) => (La(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Fn, pt, qe;
let st = class extends O {
  constructor(t) {
    super(t), ei(this, Fn, void 0), ei(this, pt, 0), ei(this, qe, q()), this.toggle = async (e, s) => {
      this.props.disabled && (e = !1);
      const { state: i } = this;
      if (typeof e == "boolean" && e === (!!i.open && i.open !== "closing"))
        return s && await this.changeState(s), this.state;
      Ft(this, pt) && (clearTimeout(Ft(this, pt)), _e(this, pt, 0));
      let o = await this.changeState((a) => (e = e ?? !a.open, {
        open: e ? "opening" : "closing",
        ...s
      }));
      const { open: r } = o;
      return r === "closing" ? (await ss(200, (a) => {
        _e(this, pt, a);
      }), _e(this, pt, 0), o = await this.changeState({ open: !1 })) : r === "opening" && (await ss(50, (a) => {
        _e(this, pt, a);
      }), _e(this, pt, 0), o = await this.changeState({ open: !0 })), o;
    }, this.state = {
      value: String(t.defaultValue ?? ""),
      open: !1,
      disabled: !1
    }, _e(this, Fn, t.id ?? `_pick${u.guid++}`), this.changeState = this.changeState.bind(this);
  }
  get id() {
    return Ft(this, Fn);
  }
  get pop() {
    return Ft(this, qe).current;
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
    const { onChange: s } = this.props;
    s && s.call(this, t, e);
  }
  setValue(t) {
    if (!this.props.disabled)
      return this.changeState({ value: t });
  }
  componentDidMount() {
    this._afterRender(!0);
  }
  componentWillUpdate(t, e) {
    const { open: s } = this.state, { open: i } = e;
    if (s === i)
      return;
    const { onPopShow: o, onPopHide: r } = this.props;
    i && o ? o() : !i && r && r();
  }
  componentDidUpdate(t, e) {
    const { open: s, value: i } = this.state, { open: o, value: r } = e;
    if (!!s != !!o) {
      const { onPopShown: a, onPopHidden: l } = this.props;
      s && a ? a() : !s && l && l();
    }
    i !== r && this._handleChange(i, r), this._afterRender();
  }
  componentWillUnmount() {
    var e;
    (e = this.props.beforeDestroy) == null || e.call(this), Ft(this, pt) && clearTimeout(Ft(this, pt));
    const t = Ft(this, qe).current;
    t && t.componentWillUnmount && t.componentWillUnmount();
  }
  render(t, e) {
    const { open: s } = e, i = this._getTrigger(t);
    let o;
    if (s) {
      const r = this._getPop(t);
      o = /* @__PURE__ */ f(r, { ref: Ft(this, qe), ...this._getPopProps(t, e), children: this._renderPop(t, e) }, "pop");
    }
    return /* @__PURE__ */ f(Le, { children: [
      /* @__PURE__ */ f(i, { ...this._getTriggerProps(t, e), children: this._renderTrigger(t, e) }, "pick"),
      o
    ] });
  }
};
Fn = /* @__PURE__ */ new WeakMap();
pt = /* @__PURE__ */ new WeakMap();
qe = /* @__PURE__ */ new WeakMap();
st.Trigger = To;
st.Pop = Ra;
st.defaultProps = {
  popContainer: "body",
  popClass: "popup",
  popWidth: "100%",
  popPlacement: "auto",
  popMinWidth: 50,
  popMinHeight: 32,
  popMaxHeight: 300,
  clickType: "open"
};
let Wa = class extends st {
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
    const { syncBackground: t, syncBorder: e, syncColor: s, syncValue: i } = this.props, o = this.state.value || "";
    if (t && u(t).css("backgroundColor", o), e && u(e).css("borderColor", o), s && u(s).css("color", o), i) {
      const r = u(i);
      r.is("input,textarea,select") ? r.val(o) : r.text(o);
    }
  }
  _handleChange(t, e) {
    this.props.disabled || (super._handleChange(t, e), this.syncColor());
  }
  _renderTrigger(t, e) {
    const { icon: s } = t, { value: i } = e;
    return [
      s ? /* @__PURE__ */ f(J, { icon: s }, "icon") : /* @__PURE__ */ f("span", { class: "color-picker-item bg-current ring", style: { background: i } })
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return s.style = u.extend({
      color: e.value
    }, s.style), s.className = x("color-picker", s.className, { disabled: t.disabled }), s;
  }
  _renderPop(t, e) {
    const { closeBtn: s, heading: i } = t, o = this.getColors(), { value: r } = e;
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
};
Wa.defaultProps = {
  ...st.defaultProps,
  className: "rounded btn square size-sm ghost",
  popClass: "color-picker-pop popup",
  colors: ["#ef4444", "#f97316", "#eab308", "#84cc16", "#22c55e", "#14b8a6", "#0ea5e9", "#6366f1", "#a855f7", "#d946ef", "#ec4899"],
  closeBtn: !0,
  popWidth: "auto",
  popMinWidth: 176
};
class Oa extends z {
}
Oa.NAME = "ColorPicker";
Oa.Component = Wa;
const rn = 24 * 60 * 60 * 1e3, V = (n) => n ? (n instanceof Date || (typeof n == "string" && (n = n.trim(), /^\d+$/.test(n) && (n = Number.parseInt(n, 10))), typeof n == "number" && n < 1e10 && (n *= 1e3), n = new Date(n)), n) : /* @__PURE__ */ new Date(), Gh = (n, t, e = "day") => {
  if (typeof t == "string") {
    const s = Number.parseInt(t, 10);
    e = t.replace(s.toString(), ""), t = s;
  }
  return n = new Date(V(n).getTime()), e === "month" ? n.setMonth(n.getMonth() + t) : e === "year" ? n.setFullYear(n.getFullYear() + t) : e === "week" ? n.setDate(n.getDate() + t * 7) : e === "hour" ? n.setHours(n.getHours() + t) : e === "minute" ? n.setMinutes(n.getMinutes() + t) : e === "second" ? n.setSeconds(n.getSeconds() + t) : n.setDate(n.getDate() + t), n;
}, Sn = (n, t = /* @__PURE__ */ new Date()) => V(n).toDateString() === V(t).toDateString(), vi = (n, t = /* @__PURE__ */ new Date()) => V(n).getFullYear() === V(t).getFullYear(), Ba = (n, t = /* @__PURE__ */ new Date()) => (n = V(n), t = V(t), n.getFullYear() === t.getFullYear() && n.getMonth() === t.getMonth()), fu = (n, t = /* @__PURE__ */ new Date()) => {
  n = V(n), t = V(t);
  const e = 1e3 * 60 * 60 * 24, s = Math.floor(n.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((s + 4) / 7) === Math.floor((i + 4) / 7);
}, pu = (n, t) => Sn(V(t), n), mu = (n, t) => Sn(V(t).getTime() - rn, n), gu = (n, t) => Sn(V(t).getTime() + rn, n), tt = (n, t = "yyyy-MM-dd hh:mm", e = "") => {
  if (n = V(n), Number.isNaN(n.getDay()))
    return e;
  const s = {
    "M+": n.getMonth() + 1,
    "d+": n.getDate(),
    "h+": n.getHours(),
    "H+": n.getHours() % 12,
    "m+": n.getMinutes(),
    "s+": n.getSeconds(),
    "S+": n.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t.includes("[yyyy-]") && (t = t.replace("[yyyy-]", vi(n) ? "" : "yyyy-")), t = t.replace(RegExp.$1, `${n.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(s).forEach((i) => {
    if (new RegExp(`(${i})`).test(t)) {
      const o = `${s[i]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, yu = (n, t, e) => {
  const s = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = tt(n, vi(n) ? s.month : s.full);
  if (Sn(n, t))
    return i;
  const o = tt(t, vi(n, t) ? Ba(n, t) ? s.day : s.month : s.full);
  return s.str.replace("{0}", i).replace("{1}", o);
};
var hn, dn;
class Ha extends O {
  constructor() {
    super(...arguments);
    D(this, hn, q());
    D(this, dn, (e, s) => {
      var i, o;
      (o = (i = this.props).onChange) == null || o.call(i, e, String(s.item.key || ""));
    });
  }
  componentDidMount() {
    u(T(this, hn).current).find(".menu-item>.active").scrollIntoView();
  }
  render(e) {
    const { minuteStep: s = 5, hour: i, minute: o } = e, r = [], a = [];
    for (let h = 0; h < 24; ++h)
      r.push({ key: h, text: h < 10 ? `0${h}` : h, active: i === h });
    for (let h = 0; h < 60; h += s)
      a.push({ key: h, text: h < 10 ? `0${h}` : h, active: o === h });
    const l = "col w-10 max-h-full overflow-y-auto scrollbar-thin scrollbar-hover";
    return /* @__PURE__ */ f("div", { className: "time-picker-menu row", ref: T(this, hn), children: [
      /* @__PURE__ */ f(
        Kt,
        {
          className: l,
          items: r,
          onClickItem: T(this, dn).bind(this, "hour")
        }
      ),
      /* @__PURE__ */ f(
        Kt,
        {
          className: l,
          items: a,
          onClickItem: T(this, dn).bind(this, "minute")
        }
      )
    ] });
  }
}
hn = new WeakMap(), dn = new WeakMap();
var Kh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Pn = (n, t, e) => (Kh(n, t, "read from private field"), e ? e.call(n) : t.get(n)), In = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, wi, bi, Ci, ki;
const cr = (n) => {
  if (!n)
    return;
  const t = V(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Fa = class extends st {
  constructor(t) {
    super(t), In(this, wi, () => {
      this.toggle(!0);
    }), In(this, bi, (s) => {
      this.setTime(s.target.value);
    }), In(this, Ci, (s, i) => {
      this.setTime({ [s]: i });
    }), In(this, ki, () => {
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
    const s = cr(e), { onInvalid: i, required: o, defaultValue: r } = this.props;
    this.setState({ value: s ? tt(s, this.props.format) : o ? r : "" }, () => {
      !s && i && i(e);
    });
  }
  getTime() {
    const t = cr(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: h } = e, d = `time-picker-${this.id}`;
    let c;
    return h && !o && l.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: Pn(this, ki), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-time" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: r, readOnly: a, onFocus: Pn(this, wi), onChange: Pn(this, bi) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "time-picker input-control has-suffix-icon")
    };
  }
  _renderPop(t) {
    const [e, s] = this.getTime() || [];
    return /* @__PURE__ */ f(Ha, { hour: e, minute: s, minuteStep: t.minuteStep, onChange: Pn(this, Ci) });
  }
};
wi = /* @__PURE__ */ new WeakMap();
bi = /* @__PURE__ */ new WeakMap();
Ci = /* @__PURE__ */ new WeakMap();
ki = /* @__PURE__ */ new WeakMap();
Fa.defaultProps = {
  ...st.defaultProps,
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
const Xh = (n, t, e = 0) => {
  const s = new Date(n, t - 1, 1), i = s.getDay(), o = s.getTime() - (7 + i - e) % 7 * rn;
  return {
    days: 7 * 5,
    startTime: o,
    firstDay: s.getTime()
  };
}, hr = (n, t) => new Set((Array.isArray(n) ? n : [n]).map((e) => tt(e, t)));
var vs;
class Zh extends O {
  constructor() {
    super(...arguments);
    D(this, vs, (e) => {
      const { onClickDate: s } = this.props;
      if (!s)
        return;
      const i = u(e.target).closest(".mini-calendar-day").dataset("date");
      i && s(i);
    });
  }
  render(e) {
    const s = /* @__PURE__ */ new Date(), {
      weekStart: i = 1,
      weekNames: o = G.getLang("weekNames"),
      monthNames: r = G.getLang("monthNames"),
      year: a = s.getFullYear(),
      month: l = s.getMonth() + 1,
      highlights: h = [],
      selections: d = []
    } = e, c = [], p = "btn ghost square rounded-full";
    for (let S = 0; S < 7; S++) {
      const A = (i + S) % 7;
      c.push(/* @__PURE__ */ f("div", { className: x("col mini-calendar-day", { "is-weekend": A === 0 || A === 6 }), children: /* @__PURE__ */ f("div", { children: o ? o[A] : A }) }, S));
    }
    const { startTime: m, days: g, firstDay: y } = Xh(a, l, i), v = y + g * rn;
    let _ = m;
    const w = [], k = "yyyy-MM-dd", $ = hr(h, k), b = hr(d, k);
    for (; _ <= v; ) {
      const S = [];
      for (let A = 0; A < 7; A++) {
        const R = new Date(_), I = R.getDate(), N = tt(R, k), P = R.getDay(), F = Ba(R, y), M = x("col mini-calendar-day", {
          active: $.has(N),
          selected: b.has(N),
          "is-first": I === 1,
          "is-in-month": F,
          "is-out-month": !F,
          "is-today": Sn(R, s),
          "is-weekend": P === 0 || P === 6
        });
        S.push(
          /* @__PURE__ */ f("div", { className: M, "data-date": N, children: /* @__PURE__ */ f("a", { className: p, onClick: T(this, vs), children: I === 1 && r ? r[R.getMonth()] : R.getDate() }) }, N)
        ), _ += rn;
      }
      w.push(/* @__PURE__ */ f("div", { className: "row", children: S }, _));
    }
    return /* @__PURE__ */ f("div", { className: "mini-calendar", children: [
      /* @__PURE__ */ f("div", { className: "row", children: c }),
      w
    ] });
  }
}
vs = new WeakMap();
var un, ws;
class dr extends O {
  constructor() {
    super(...arguments);
    D(this, un, q());
    D(this, ws, (e) => {
      const { onChange: s } = this.props;
      if (!s)
        return;
      const o = u(e.target).closest("[data-value]").dataset("value");
      o && (s(+o), e.stopPropagation());
    });
  }
  componentDidMount() {
    u(T(this, un).current).find(".active").scrollIntoView({ block: "center" });
  }
  render(e) {
    const { className: s, max: i, min: o, value: r } = e, a = [], l = (/* @__PURE__ */ new Date()).getFullYear();
    for (let h = o; h <= i; ++h)
      a.push(/* @__PURE__ */ f(Q, { type: "ghost", "data-value": h, active: h === r, className: x(l === h ? "is-current" : ""), onClick: T(this, ws), children: h }, h));
    return /* @__PURE__ */ f("div", { className: s, ref: T(this, un), children: a });
  }
}
un = new WeakMap(), ws = new WeakMap();
var Ne, fn, pn, mn, gn, yn, bs, Va, Cs, Ua;
class za extends O {
  constructor(e) {
    super(e);
    D(this, bs);
    D(this, Cs);
    D(this, Ne, void 0);
    D(this, fn, void 0);
    D(this, pn, void 0);
    D(this, mn, void 0);
    D(this, gn, void 0);
    D(this, yn, void 0);
    L(this, Ne, q()), L(this, fn, (o) => {
      const r = u(o.target).closest("[data-set-date]");
      r.length && this.changeDate(r.dataset("set-date"));
    }), L(this, pn, () => {
      const { year: o, month: r } = this.state;
      r === 1 ? this.setState({ year: o - 1, month: 12 }) : this.setState({ month: r - 1 });
    }), L(this, mn, () => {
      const { year: o, month: r } = this.state;
      r === 12 ? this.setState({ year: o + 1, month: 1 }) : this.setState({ month: r + 1 });
    }), L(this, gn, (o) => {
      this.setState({ year: o, select: "day" });
    }), L(this, yn, (o) => {
      this.setState({ month: o, select: "day" });
    }), this.changeDate = (o) => {
      var r, a;
      if (o.startsWith("today")) {
        let l = /* @__PURE__ */ new Date();
        o.length > 3 && (l = Gh(l, o.substring(5).replace("+", ""))), o = tt(l, "yyyy-MM-dd");
      }
      (a = (r = this.props).onChange) == null || a.call(r, o);
    };
    const { date: s } = e, i = s ? new Date(s) : /* @__PURE__ */ new Date();
    this.state = {
      select: "day",
      year: i.getFullYear(),
      month: i.getMonth() + 1
    };
  }
  _showSelect(e) {
    this.setState((s) => s.select === e ? { select: "day" } : { select: e });
  }
  componentDidMount() {
    u(T(this, Ne).current).find(".active").scrollIntoView();
  }
  render(e, s) {
    const {
      date: i,
      yearText: o = G.getLang("yearFormat") || "{0}",
      weekNames: r = G.getLang("weekNames"),
      monthNames: a = G.getLang("monthNames"),
      weekStart: l
    } = e, h = i ? new Date(i) : void 0, {
      year: d,
      month: c,
      select: p
    } = s, m = p === "day", g = V(e.minDate || "1970-1-1"), y = V(e.maxDate || "2099-12-1");
    return /* @__PURE__ */ f("div", { className: "date-picker-menu row", ref: T(this, Ne), onClick: T(this, fn), children: [
      $t(this, bs, Va).call(this, e),
      /* @__PURE__ */ f("div", { className: "cell", style: "width: 312px", children: [
        /* @__PURE__ */ f("div", { className: "row p-2", children: [
          /* @__PURE__ */ f(Q, { type: p === "year" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "year"), children: K(o, d) }),
          /* @__PURE__ */ f(Q, { type: p === "month" ? "primary-pale" : "ghost", size: "sm", caret: !0, onClick: this._showSelect.bind(this, "month"), children: a ? a[c - 1] : c }),
          /* @__PURE__ */ f("div", { className: "flex-auto" }),
          m ? /* @__PURE__ */ f("div", { children: [
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: T(this, pn), children: /* @__PURE__ */ f("i", { className: "chevron-left" }) }),
            /* @__PURE__ */ f(Q, { type: "ghost", size: "sm", square: !0, onClick: T(this, mn), children: /* @__PURE__ */ f("i", { className: "chevron-right" }) })
          ] }) : null
        ] }),
        m ? /* @__PURE__ */ f(
          Zh,
          {
            weekStart: l,
            weekNames: r,
            monthNames: a,
            year: d,
            month: c,
            selections: h,
            onClickDate: this.changeDate
          }
        ) : null,
        p === "year" ? /* @__PURE__ */ f(
          dr,
          {
            className: "date-pick-menu-years overflow-y-auto scrollbar-hover scrollbar-thin",
            value: d,
            min: g.getFullYear(),
            max: y.getFullYear(),
            onChange: T(this, gn)
          }
        ) : p === "month" ? /* @__PURE__ */ f(
          dr,
          {
            className: "date-pick-menu-month overflow-y-auto scrollbar-hover scrollbar-thin",
            value: c,
            min: 1,
            max: 12,
            onChange: T(this, yn)
          }
        ) : null,
        m ? $t(this, Cs, Ua).call(this, e) : null
      ] })
    ] });
  }
}
Ne = new WeakMap(), fn = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), gn = new WeakMap(), yn = new WeakMap(), bs = new WeakSet(), Va = function(e) {
  let { menu: s } = e;
  return s ? (Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f(Kt, { ...s })) : null;
}, Cs = new WeakSet(), Ua = function(e) {
  let { actions: s } = e;
  const { todayText: i, clearText: o } = e;
  return s || (s = [{ text: i, "data-set-date": tt(/* @__PURE__ */ new Date(), "yyyy-MM-dd") }]), Array.isArray(s) && (s = { items: s }), /* @__PURE__ */ f("div", { className: "date-picker-menu-footer", children: [
    /* @__PURE__ */ f(dt, { btnProps: { className: "ghost text-primary" }, ...s }),
    o ? /* @__PURE__ */ f(Q, { type: "ghost text-link", "data-set-date": "", children: o }) : null
  ] });
};
var Jh = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ni = (n, t, e) => (Jh(n, t, "read from private field"), e ? e.call(n) : t.get(n)), si = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, $i, xi, Ti;
let ja = class extends st {
  constructor(t) {
    super(t), si(this, $i, () => {
      this.toggle(!0);
    }), si(this, xi, (s) => {
      this.setDate(s.target.value);
    }), si(this, Ti, () => {
      this.setDate("");
    }), this.setDate = (s) => {
      const { onInvalid: i, defaultValue: o = "", required: r, disabled: a, format: l } = this.props;
      if (a)
        return;
      const h = V(s), d = !s || Number.isNaN(h.getDay());
      this.setState({ value: d ? r ? o : "" : tt(h, l) }, () => {
        !d && i && i(s), this.toggle(!1);
      });
    };
    const { value: e } = this.state;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, t.format));
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: h } = e, d = `date-picker-${this.id}`;
    let c;
    return h && !o && l.length ? c = /* @__PURE__ */ f("button", { type: "button", className: "btn size-sm square ghost", onClick: ni(this, Ti), children: /* @__PURE__ */ f("span", { className: "close" }) }) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-calendar" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f("input", { id: d, type: "text", className: "form-control", placeholder: s, value: l, disabled: r, readOnly: a, onFocus: ni(this, $i), onChange: ni(this, xi) }, "input"),
      c ? /* @__PURE__ */ f("label", { for: d, className: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "date-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: x(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: o, yearText: r, todayText: a = G.getLang("today"), clearText: l, menu: h, actions: d, minDate: c, maxDate: p, required: m } = t;
    return /* @__PURE__ */ f(
      za,
      {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: o,
        yearText: r,
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
$i = /* @__PURE__ */ new WeakMap();
xi = /* @__PURE__ */ new WeakMap();
Ti = /* @__PURE__ */ new WeakMap();
ja.defaultProps = {
  ...st.defaultProps,
  popWidth: "auto",
  popMaxHeight: 320,
  format: "yyyy-MM-dd",
  icon: !0
};
class qa extends z {
}
qa.NAME = "TimePicker";
qa.Component = Fa;
class Ya extends z {
}
Ya.NAME = "DatePicker";
Ya.Component = ja;
class Qh extends O {
  render(t) {
    const { date: e, time: s } = t;
    return /* @__PURE__ */ f("div", { className: "datetime-picker-menu row", children: [
      /* @__PURE__ */ f(za, { ...e }),
      /* @__PURE__ */ f(Ha, { ...s })
    ] });
  }
}
var td = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, Be = (n, t, e) => (td(n, t, "read from private field"), e ? e.call(n) : t.get(n)), He = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Ei, Si, Mi, Ni, Di;
const ur = (n) => {
  if (!n)
    return;
  const t = V(`1999-01-01 ${n}`);
  if (!Number.isNaN(t.getDay()))
    return t;
};
let Ga = class extends st {
  constructor(t) {
    super(t), He(this, Ei, () => {
      this.toggle(!0);
    }), He(this, Si, (r) => {
      this.setDate(r.target.value);
    }), He(this, Mi, () => {
      this.setDate("");
      const { required: r, defaultValue: a } = this.props;
      this.setState({ value: r ? a : "" });
    }), He(this, Ni, (r, a) => {
      this.setTime({ [r]: a });
    }), He(this, Di, (r) => {
      this.setTime(r.target.value);
    }), this.setDate = (r) => {
      const { onInvalid: a, defaultValue: l = "", required: h, dateFormat: d, disabled: c, joiner: p } = this.props;
      if (c)
        return;
      const m = V(r), g = !r || Number.isNaN(m.getDay()), y = tt(m, d), [, v = "00:00"] = this.state.value.split(p);
      this.setState({ value: g ? h ? l : "" : `${y}${p}${v}` }, () => {
        !g && a && a(r);
      });
    };
    const { value: e } = this.state, { dateFormat: s, timeFormat: i, joiner: o } = t;
    e && (this.state.value = tt(e === "today" ? /* @__PURE__ */ new Date() : e, `${s}${o}${i}`));
  }
  setTime(t) {
    const { onInvalid: e, required: s, defaultValue: i, timeFormat: o, joiner: r, disabled: a, dateFormat: l } = this.props;
    if (a)
      return;
    let h = "";
    if (typeof t == "string")
      h = t;
    else {
      const [, p = "00:00"] = this.state.value.split(r), [m, g] = p.split(":"), { hour: y = +m, minute: v = +g } = t;
      h = `${y}:${v}`;
    }
    const d = ur(h), c = this.state.value.split(r)[0] || tt(/* @__PURE__ */ new Date(), l);
    this.setState({ value: d ? `${c}${r}${tt(d, o)}` : s ? i : "" }, () => {
      !d && e && e(h);
    });
  }
  getTime() {
    const t = ur(this.state.value);
    return t ? [t.getHours(), t.getMinutes()] : null;
  }
  _renderTrigger(t, e) {
    const { placeholder: s, icon: i, required: o, disabled: r, readonly: a } = t, { value: l = "", open: h } = e, d = `datetime-picker-${this.id}`;
    let c;
    return h && !o && l.length ? c = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        className: "btn size-sm square ghost",
        onClick: Be(this, Mi),
        children: /* @__PURE__ */ f("span", { className: "close" })
      }
    ) : i && (i === !0 ? c = /* @__PURE__ */ f("i", { class: "i-calendar" }) : c = /* @__PURE__ */ f(J, { icon: i })), [
      /* @__PURE__ */ f(
        "input",
        {
          id: d,
          type: "text",
          className: "form-control",
          placeholder: s,
          value: l,
          disabled: r,
          readOnly: a,
          onFocus: Be(this, Ei),
          onChange: (p) => {
            Be(this, Si).call(this, p), Be(this, Di).call(this, p);
          }
        },
        "input"
      ),
      c ? /* @__PURE__ */ f("label", { for: d, class: "input-control-suffix", children: c }, "icon") : null
    ];
  }
  _getTriggerProps(t, e) {
    const s = super._getTriggerProps(t, e);
    return {
      ...s,
      className: x(s.className, "datetime-picker input-control has-suffix-icon")
    };
  }
  _getPopProps(t, e) {
    const s = super._getPopProps(t, e);
    return {
      ...s,
      className: x(s.className, "popup")
    };
  }
  _renderPop(t, e) {
    const { weekNames: s, monthNames: i, weekStart: o, yearText: r, todayText: a = G.getLang("today"), clearText: l, menu: h, actions: d, minDate: c, maxDate: p, required: m, minuteStep: g } = t, [y, v] = this.getTime() || [], _ = {
      date: {
        onChange: this.setDate,
        date: e.value,
        weekNames: s,
        monthNames: i,
        weekStart: o,
        yearText: r,
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
        onChange: Be(this, Ni)
      }
    };
    return /* @__PURE__ */ f(Qh, { ..._ });
  }
};
Ei = /* @__PURE__ */ new WeakMap();
Si = /* @__PURE__ */ new WeakMap();
Mi = /* @__PURE__ */ new WeakMap();
Ni = /* @__PURE__ */ new WeakMap();
Di = /* @__PURE__ */ new WeakMap();
Ga.defaultProps = {
  ...st.defaultProps,
  popWidth: "auto",
  popMaxHeight: 310,
  dateFormat: "yyyy-MM-dd",
  timeFormat: "hh:mm",
  joiner: " ",
  icon: !0,
  minuteStep: 5
};
class Ka extends z {
}
Ka.NAME = "DatetimePicker";
Ka.Component = Ga;
const ii = "show", fr = "in", ed = '[data-dismiss="modal"]', Mn = class Ye extends at {
  constructor() {
    super(...arguments), this._timer = 0, this._handleClick = (t) => {
      const e = t.target, s = e.closest(".modal");
      !s || s !== this.modalElement || (e.closest(ed) || this.options.backdrop === !0 && e === s) && (t.preventDefault(), this.hide());
    };
  }
  get modalElement() {
    return this.element;
  }
  get shown() {
    return this.modalElement.classList.contains(ii);
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
          if (!this.shown)
            return;
          const i = e.clientWidth, o = e.clientHeight, [r, a] = this._lastDialogSize || [];
          (r !== i || a !== o) && (this._lastDialogSize = [i, o], this.layout());
        });
        s.observe(e), this._rob = s;
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
      return u(e).css("z-index", `${Ye.zIndex++}`), !1;
    this.setOptions(t);
    const { animation: s, backdrop: i, className: o, style: r } = this.options;
    return u(e).setClass({
      "modal-trans": s,
      "modal-no-backdrop": !i
    }, ii, o).css({
      zIndex: `${Ye.zIndex++}`,
      ...r
    }), this.layout(), this.emit("show"), this._setTimer(() => {
      u(e).addClass(fr), this._setTimer(() => {
        this.emit("shown");
      });
    }, 50), !0;
  }
  hide() {
    return this.shown ? (u(this.modalElement).removeClass(fr), this.emit("hide"), this._setTimer(() => {
      u(this.modalElement).removeClass(ii), this.emit("hidden");
    }), !0) : !1;
  }
  layout(t, e) {
    if (!this.shown)
      return;
    const { dialog: s } = this;
    if (!s)
      return;
    const i = u(s);
    if (e = e ?? this.options.size, e) {
      i.removeAttr("data-size");
      const l = { width: "", height: "" };
      typeof e == "object" ? (l.width = e.width, l.height = e.height) : typeof e == "string" && ["md", "sm", "lg", "full"].includes(e) ? i.attr("data-size", e) : e && (l.width = e), i.css(l);
    }
    t = t ?? this.options.position ?? "fit";
    const o = s.clientWidth, r = s.clientHeight;
    this._lastDialogSize = [o, r], typeof t == "function" && (t = t({ width: o, height: r }));
    const a = {
      top: null,
      left: null,
      bottom: null,
      right: null,
      alignSelf: "center"
    };
    typeof t == "number" ? (a.alignSelf = "flex-start", a.top = t) : typeof t == "object" && t ? (a.alignSelf = "flex-start", Object.assign(a, t)) : t === "fit" ? (a.alignSelf = "flex-start", a.top = `${Math.max(0, Math.floor((window.innerHeight - r) / 3))}px`) : t === "bottom" ? a.alignSelf = "flex-end" : t === "top" ? a.alignSelf = "flex-start" : t !== "center" && typeof t == "string" && (a.alignSelf = "flex-start", a.top = t), i.css(a), u(this.modalElement).css("justifyContent", a.left ? "flex-start" : "center");
  }
  _setTimer(t, e) {
    this._timer && (clearTimeout(this._timer), this._timer = 0), t && (this.options.animation ? this._timer = window.setTimeout(t, e ?? this.options.transTime) : t());
  }
  static hide(t) {
    var e;
    (e = Ye.query(t)) == null || e.hide();
  }
  static show(t) {
    var e;
    (e = Ye.query(t)) == null || e.show();
  }
};
Mn.NAME = "Modal";
Mn.MULTI_INSTANCE = !0;
Mn.DEFAULT = {
  position: "fit",
  show: !0,
  keyboard: !0,
  animation: !0,
  backdrop: !0,
  responsive: !0,
  transTime: 300
};
Mn.zIndex = 1500;
let me = Mn;
u(window).on(`resize.${me.NAMESPACE}`, () => {
  me.getAll().forEach((n) => {
    const t = n;
    t.shown && t.options.responsive && t.layout();
  });
});
u(document).on(`to-hide.${me.NAMESPACE}`, (n, t) => {
  me.hide(t == null ? void 0 : t.target);
});
class Xa extends O {
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
      title: s
    } = this.props;
    return Z(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: x("modal-header", e), children: /* @__PURE__ */ f("div", { className: "modal-title", children: s }) });
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
      footerActions: s
    } = this.props;
    return Z(t) ? t : t === !1 || !s ? null : /* @__PURE__ */ f("div", { className: x("modal-footer", e), children: s ? /* @__PURE__ */ f(dt, { ...s }) : null });
  }
  render() {
    const {
      className: t,
      style: e,
      contentClass: s,
      children: i
    } = this.props;
    return /* @__PURE__ */ f("div", { className: x("modal-dialog", t), style: e, children: /* @__PURE__ */ f("div", { className: x("modal-content", s), children: [
      this.renderHeader(),
      this.renderActions(),
      this.renderBody(),
      i,
      this.renderFooter()
    ] }) });
  }
}
Xa.defaultProps = { closeBtn: !0 };
class Za extends O {
  constructor() {
    super(...arguments), this._ref = q(), this.state = {}, this._watchIframeHeight = () => {
      var s, i;
      const t = (i = (s = this._ref.current) == null ? void 0 : s.contentWindow) == null ? void 0 : i.document;
      if (!t)
        return;
      let e = this._rob;
      e == null || e.disconnect(), e = new ResizeObserver(() => {
        const o = t.body, r = t.documentElement, a = Math.ceil(Math.max(o.scrollHeight, o.offsetHeight, r.offsetHeight)) + 1;
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
Za.defaultProps = {
  watchHeight: !0
};
var Eo = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, ft = (n, t, e) => (Eo(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Fe = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, ve = (n, t, e, s) => (Eo(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), zn = (n, t, e) => (Eo(n, t, "access private method"), e), Tt, Ge, Et, fs, So, Vn, Ai;
function nd(n, t) {
  const { custom: e, title: s, content: i } = t;
  return {
    body: i,
    title: s,
    ...typeof e == "function" ? e() : e
  };
}
async function sd(n, t) {
  const { dataType: e = "html", url: s, request: i, custom: o, title: r, replace: a = !0, executeScript: l = !0 } = t, d = await (await fetch(s, {
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
        title: r,
        ...o,
        ...c
      };
    } catch {
    }
  return a !== !1 && e === "html" ? [d] : {
    title: r,
    ...o,
    body: e === "html" ? /* @__PURE__ */ f($n, { className: "modal-body", html: d, executeScript: l }) : d
  };
}
async function id(n, t) {
  const { url: e, custom: s, title: i, size: o } = t, r = typeof o == "object" && typeof o.height == "number";
  return {
    title: i,
    ...s,
    body: /* @__PURE__ */ f(Za, { url: e, watchHeight: !r })
  };
}
const od = {
  custom: nd,
  ajax: sd,
  iframe: id
}, oi = "loading", Ja = class be extends me {
  constructor() {
    super(...arguments), Fe(this, fs), Fe(this, Vn), Fe(this, Tt, void 0), Fe(this, Ge, void 0), Fe(this, Et, void 0);
  }
  get id() {
    return ft(this, Ge);
  }
  get loading() {
    var t;
    return (t = ft(this, Tt)) == null ? void 0 : t.classList.contains(oi);
  }
  get shown() {
    var t;
    return !!((t = ft(this, Tt)) != null && t.classList.contains("show"));
  }
  get modalElement() {
    let t = ft(this, Tt);
    if (!t) {
      const { options: e } = this;
      let s = ft(this, Ge);
      s || (s = e.id || `modal-${u.guid++}`, ve(this, Ge, s));
      const { $element: i } = this;
      if (t = i.find(`#${s}`)[0], !t) {
        const o = this.key;
        t = u("<div>").attr({
          id: s,
          "data-key": o
        }).data(this.constructor.KEY, this).css(e.style || {}).setClass("modal modal-async load-indicator", e.className).appendTo(i)[0];
      }
      ve(this, Tt, t);
    }
    return t;
  }
  get $emitter() {
    const t = ft(this, Tt);
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
    const t = ft(this, Tt);
    t && (u(t).removeData(this.constructor.KEY).remove(), ve(this, Tt, void 0));
  }
  render(t) {
    return super.render(t), this.buildDialog();
  }
  async buildDialog() {
    if (this.loading)
      return !1;
    ft(this, Et) && clearTimeout(ft(this, Et));
    const { modalElement: t, options: e } = this, s = u(t), { type: i, loadTimeout: o, loadingText: r = null } = e, a = od[i];
    if (!a)
      return console.warn(`Modal: Cannot build modal with type "${i}"`), !1;
    s.attr("data-loading", r).addClass(oi), o && ve(this, Et, window.setTimeout(() => {
      ve(this, Et, 0), zn(this, Vn, Ai).call(this, this.options.timeoutTip);
    }, o));
    const l = await a.call(this, t, e);
    return l === !1 ? await zn(this, Vn, Ai).call(this, this.options.failedTip) : l && typeof l == "object" && await zn(this, fs, So).call(this, l), ft(this, Et) && (clearTimeout(ft(this, Et)), ve(this, Et, 0)), this.layout(), await ss(100), s.removeClass(oi), !0;
  }
  static open(t) {
    return new Promise((e) => {
      const { container: s = document.body, ...i } = t, o = { show: !0, ...i };
      !o.type && o.url && (o.type = "ajax");
      const r = be.ensure(s, o), a = `${be.NAMESPACE}.open${u.guid++}`;
      r.on(`hidden${a}`, () => {
        r.off(a), e(r);
      }), r.show();
    });
  }
  static async alert(t) {
    typeof t == "string" && (t = { message: t });
    const { type: e, message: s, icon: i, iconClass: o = "icon-lg muted", actions: r = "confirm", onClickAction: a, custom: l, key: h = "__alert", ...d } = t, c = (typeof l == "function" ? l() : l) || {};
    let p = typeof s == "object" && s.html ? /* @__PURE__ */ f("div", { dangerouslySetInnerHTML: { __html: s.html } }) : /* @__PURE__ */ f("div", { children: s });
    i ? p = /* @__PURE__ */ f("div", { className: x("modal-body row gap-4 items-center", c.bodyClass), children: [
      /* @__PURE__ */ f("div", { className: `icon ${i} ${o}` }),
      p
    ] }) : p = /* @__PURE__ */ f("div", { className: x("modal-body", c.bodyClass), children: p });
    const m = [];
    (Array.isArray(r) ? r : [r]).forEach((v) => {
      v = {
        ...typeof v == "string" ? { key: v } : v
      }, typeof v.key == "string" && (v.text || (v.text = G.getLang(v.key, v.key)), v.btnType || (v.btnType = `btn-wide ${v.key === "confirm" ? "primary" : "btn-default"}`)), v && m.push(v);
    }, []);
    let g;
    const y = m.length ? {
      gap: 4,
      items: m,
      onClickItem: ({ item: v, event: _ }) => {
        const w = be.query(_.target, h);
        g = v.key, (a == null ? void 0 : a(v, w)) !== !1 && w && w.hide();
      }
    } : void 0;
    return await be.open({
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
    const { onClickAction: e, onResult: s, ...i } = t;
    return await be.alert({
      actions: ["confirm", "cancel"],
      onClickAction: (r, a) => {
        s == null || s(r.key === "confirm", a), e == null || e(r, a);
      },
      ...i
    }) === "confirm";
  }
};
Tt = /* @__PURE__ */ new WeakMap();
Ge = /* @__PURE__ */ new WeakMap();
Et = /* @__PURE__ */ new WeakMap();
fs = /* @__PURE__ */ new WeakSet();
So = function(n) {
  return new Promise((t) => {
    if (Array.isArray(n))
      return u(this.modalElement).html(n[0]), this.layout(), this._observeResize(), t();
    const { afterRender: e, ...s } = n;
    n = {
      afterRender: (i) => {
        this.layout(), e == null || e(i), this._observeResize(), t();
      },
      ...s
    }, as(
      /* @__PURE__ */ f(Xa, { ...n }),
      this.modalElement
    );
  });
};
Vn = /* @__PURE__ */ new WeakSet();
Ai = function(n) {
  if (n)
    return zn(this, fs, So).call(this, {
      body: /* @__PURE__ */ f("div", { className: "modal-load-failed", children: n })
    });
};
Ja.DEFAULT = {
  ...me.DEFAULT,
  loadTimeout: 1e4,
  destoryOnHide: !0
};
let rd = Ja;
const ad = '[data-toggle="modal"]';
class Pi extends at {
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
    return s.type || (s.target || i[0] === "#" ? s.type = "static" : s.type = s.type || (s.url || i ? "ajax" : "custom")), !s.url && (s.type === "iframe" || s.type === "ajax") && i[0] !== "#" && (s.url = i), !s.key && s.id && (s.key = s.id), s;
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
      e = me.ensure(s, t);
    } else
      e = rd.ensure(this.container, t);
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
Pi.NAME = "ModalTrigger";
u(document).on(`click${Pi.NAMESPACE}`, ad, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.is("[disabled],.disabled")) {
    const e = Pi.ensure(t);
    e && (e.show(), n.preventDefault());
  }
});
let Qa = class extends Os {
  beforeRender() {
    const t = super.beforeRender();
    return t.className = x(t.className, t.type ? `nav-${t.type}` : "", {
      "nav-stacked": t.stacked
    }), t;
  }
};
Qa.NAME = "nav";
class tl extends z {
}
tl.NAME = "Nav";
tl.Component = Qa;
function an(n, t) {
  const e = n.pageTotal || Math.ceil(n.recTotal / n.recPerPage);
  return typeof t == "string" && (t === "first" ? t = 1 : t === "last" ? t = e : t === "prev" ? t = n.page - 1 : t === "next" ? t = n.page + 1 : t === "current" ? t = n.page : t = Number.parseInt(t, 10)), t = t !== void 0 ? Math.max(1, Math.min(t < 0 ? e + t : t, e)) : n.page, {
    ...n,
    pageTotal: e,
    page: t
  };
}
function ld({
  key: n,
  type: t,
  btnType: e,
  page: s,
  format: i,
  pagerInfo: o,
  linkCreator: r,
  ...a
}) {
  const l = an(o, s);
  return a.text === void 0 && !a.icon && i && (a.text = typeof i == "function" ? i(l) : K(i, l)), a.url === void 0 && r && (a.url = typeof r == "function" ? r(l) : K(r, l)), a.disabled === void 0 && (a.disabled = s !== void 0 && l.page === o.page), /* @__PURE__ */ f(Q, { type: e, ...a });
}
function cd({
  key: n,
  type: t,
  page: e,
  text: s = "",
  pagerInfo: i,
  children: o,
  ...r
}) {
  const a = an(i, e);
  return s = typeof s == "function" ? s(a) : K(s, a), /* @__PURE__ */ f(ia, { ...r, children: [
    o,
    s
  ] });
}
function hd({
  key: n,
  type: t,
  btnType: e,
  count: s = 12,
  pagerInfo: i,
  onClick: o,
  linkCreator: r,
  ...a
}) {
  if (!i.pageTotal)
    return;
  const l = { ...a, square: !0 }, h = () => (l.text = "", l.icon = "icon-ellipsis-h", l.disabled = !0, /* @__PURE__ */ f(Q, { type: e, ...l })), d = (p, m) => {
    const g = [];
    for (let y = p; y <= m; y++) {
      l.text = y, delete l.icon, l.disabled = !1;
      const v = an(i, y);
      r && (l.url = typeof r == "function" ? r(v) : K(r, v)), g.push(/* @__PURE__ */ f(Q, { type: e, ...l, onClick: o }));
    }
    return g;
  };
  let c = [];
  return c = [...d(1, 1)], i.pageTotal <= 1 || (i.pageTotal <= s ? c = [...c, ...d(2, i.pageTotal)] : i.page < s - 2 ? c = [...c, ...d(2, s - 2), h(), ...d(i.pageTotal, i.pageTotal)] : i.page > i.pageTotal - s + 3 ? c = [...c, h(), ...d(i.pageTotal - s + 3, i.pageTotal)] : c = [...c, h(), ...d(i.page - Math.ceil((s - 4) / 2), i.page + Math.floor((s - 4) / 2)), h(), ...d(i.pageTotal, i.pageTotal)]), c;
}
function dd({
  type: n,
  pagerInfo: t,
  linkCreator: e,
  items: s = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 100, 200, 500, 1e3, 2e3],
  dropdown: i = {},
  itemProps: o,
  ...r
}) {
  var l;
  i.items = i.items || s.map((h) => {
    const d = { ...t, recPerPage: h };
    return {
      ...o,
      text: `${h}`,
      active: h === t.recPerPage,
      url: typeof e == "function" ? e(d) : K(e, d)
    };
  });
  const { text: a = "" } = r;
  return r.text = typeof a == "function" ? a(t) : K(a, t), i.menu = { ...i.menu, className: x((l = i.menu) == null ? void 0 : l.className, "pager-size-menu") }, /* @__PURE__ */ f(wa, { type: "dropdown", dropdown: i, ...r });
}
function ud({
  key: n,
  page: t,
  type: e,
  btnType: s,
  pagerInfo: i,
  size: o,
  onClick: r,
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
    const v = an(i, c);
    a && !a({ info: v, event: y }) || (y.target.href = d.url = typeof l == "function" ? l(v) : K(l, v));
  }, g = an(i, t || 0);
  return d.url = typeof l == "function" ? l(g) : K(l, g), /* @__PURE__ */ f("div", { className: x("input-group", "pager-goto-group", o ? `size-${o}` : ""), children: [
    /* @__PURE__ */ f("input", { type: "number", class: "form-control", max: i.pageTotal, min: "1", onInput: p }),
    /* @__PURE__ */ f(Q, { type: s, ...d, onClick: m })
  ] });
}
let Ys = class extends dt {
  get pagerInfo() {
    const { page: t = 1, recTotal: e = 0, recPerPage: s = 10 } = this.props;
    return { page: +t, recTotal: +e, recPerPage: +s, pageTotal: s ? Math.ceil(e / s) : 0 };
  }
  isBtnItem(t) {
    return t === "link" || t === "nav" || t === "size-menu" || t === "goto" || super.isBtnItem(t);
  }
  getItemRenderProps(t, e, s) {
    const i = super.getItemRenderProps(t, e, s), o = e.type || "item", { pagerInfo: r } = this;
    return o === "info" ? Object.assign(i, { pagerInfo: r }) : (o === "link" || o === "size-menu" || o === "nav" || o === "goto") && Object.assign(i, { pagerInfo: r, linkCreator: t.linkCreator }), i;
  }
};
Ys.NAME = "pager";
Ys.defaultProps = {
  btnProps: {
    btnType: "ghost",
    size: "sm"
  }
};
Ys.ItemComponents = {
  ...dt.ItemComponents,
  link: ld,
  info: cd,
  nav: hd,
  "size-menu": dd,
  goto: ud
};
class el extends z {
}
el.NAME = "Pager";
el.Component = Ys;
class nl extends z {
}
nl.NAME = "Pick";
nl.Component = st;
var De, _n, vn, ks;
class sl extends O {
  constructor(e) {
    super(e);
    D(this, De, q());
    D(this, _n, q());
    D(this, vn, (e) => {
      var i, o;
      const s = e.target.value;
      (o = (i = this.props).onSearch) == null || o.call(i, s), this.setState({ search: s }), e.stopPropagation();
    });
    D(this, ks, (e) => {
      var s, i;
      e.stopPropagation(), (i = (s = this.props).onClear) == null || i.call(s), this.setState({ search: "" }, () => this.focus());
    });
    this.state = { search: e.defaultSearch ?? "" };
  }
  focus() {
    var e;
    (e = T(this, De).current) == null || e.focus();
  }
  componentDidMount() {
    this.focus();
  }
  componentDidUpdate() {
    const { inline: e } = this.props;
    if (e) {
      const { current: s } = T(this, _n), { current: i } = T(this, De);
      if (s && i) {
        const o = u(i).parent();
        o.width(Math.ceil(Math.min(s.clientWidth, o.closest(".picker").outerWidth() - 32)));
      }
    }
  }
  render(e, s) {
    const { placeholder: i, inline: o } = e, { search: r } = s, a = r.trim().length > 0;
    let l;
    return o ? l = /* @__PURE__ */ f("div", { className: "picker-search-measure", ref: T(this, _n), children: r }) : a ? l = /* @__PURE__ */ f("button", { type: "button", className: "btn picker-search-clear square size-sm ghost", onClick: T(this, ks), children: /* @__PURE__ */ f("span", { className: "close" }) }) : l = /* @__PURE__ */ f("span", { className: "magnifier" }), /* @__PURE__ */ f("div", { className: `picker-search${o ? " is-inline" : ""}`, children: [
      /* @__PURE__ */ f(
        "input",
        {
          className: "form-control picker-search-input",
          type: "text",
          placeholder: i,
          value: r,
          onChange: T(this, vn),
          onInput: T(this, vn),
          ref: T(this, De)
        }
      ),
      l
    ] });
  }
}
De = new WeakMap(), _n = new WeakMap(), vn = new WeakMap(), ks = new WeakMap();
var Ae, wn, bn, Cn;
class fd extends To {
  constructor() {
    super(...arguments);
    D(this, Ae, void 0);
    D(this, wn, void 0);
    D(this, bn, void 0);
    D(this, Cn, void 0);
    L(this, Ae, q()), L(this, wn, (e) => {
      const { onDeselect: s, state: { selections: i } } = this.props, o = u(e.target).closest(".picker-deselect-btn").attr("data-value");
      s && i.length && typeof o == "string" && s(o), e.stopPropagation();
    }), L(this, bn, (e) => {
      this.props.changeState({ search: e });
    }), L(this, Cn, () => {
      this.props.togglePop(!0, { search: "" });
    }), this._renderSelection = (e) => /* @__PURE__ */ f("div", { className: "picker-multi-selection", children: [
      /* @__PURE__ */ f("span", { className: "text", children: /* @__PURE__ */ f(te, { content: e.text }) }),
      this.props.disabled ? null : /* @__PURE__ */ f("div", { className: "picker-deselect-btn btn size-xs ghost", onClick: T(this, wn), "data-value": e.value, children: /* @__PURE__ */ f("span", { className: "close" }) })
    ] }, e.value);
  }
  _handleClick(e) {
    var s;
    super._handleClick(e), (s = T(this, Ae).current) == null || s.focus();
  }
  _getClass(e) {
    return x(
      super._getClass(e),
      "picker-select picker-select-multi form-control",
      e.disabled ? "disabled" : ""
    );
  }
  _renderSearch(e) {
    const { state: { search: s }, searchHint: i } = e;
    return /* @__PURE__ */ f(
      sl,
      {
        inline: !0,
        ref: T(this, Ae),
        defaultSearch: s,
        onSearch: T(this, bn),
        onClear: T(this, Cn),
        placeholder: i
      }
    );
  }
  _renderTrigger(e) {
    const { state: { selections: s = [], open: i }, search: o, placeholder: r, children: a } = this.props, l = i && o;
    return !l && !s.length ? /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "selections") : [
      /* @__PURE__ */ f("div", { className: "picker-multi-selections", children: [
        s.map(this._renderSelection),
        l ? this._renderSearch(e) : null
      ] }, "selections"),
      a,
      /* @__PURE__ */ f("span", { class: "caret" }, "caret")
    ];
  }
  _renderValue(e) {
    const { name: s, state: { value: i = "" }, id: o, valueList: r, emptyValue: a } = e;
    if (!r.length)
      return super._renderValue(e);
    if (s)
      if (this.hasInput)
        u(`#${o}`).val(i);
      else {
        const l = r.length ? r : [a];
        return /* @__PURE__ */ f("select", { id: o, multiple: !0, className: "pick-value", name: s.endsWith("[]") ? s : `${s}[]`, style: { display: "none" }, children: l.map((h) => /* @__PURE__ */ f("option", { value: h, children: h }, h)) });
      }
    return null;
  }
  componentDidMount() {
    super.componentDidMount();
    const { id: e, valueList: s, emptyValue: i } = this.props;
    u(`#${e}`).val(s.length ? s : [i]);
  }
  componentDidUpdate(e) {
    const { id: s, state: i, name: o, valueList: r, emptyValue: a } = this.props;
    o && e.state.value !== i.value && u(`#${s}`).val(r.length ? r : [a]).trigger("change", _i);
  }
}
Ae = new WeakMap(), wn = new WeakMap(), bn = new WeakMap(), Cn = new WeakMap();
var kn, $s, xs, Ts, Es, il;
class pd extends To {
  constructor() {
    super(...arguments);
    D(this, Es);
    D(this, kn, q());
    D(this, $s, (e) => {
      this.props.disabled || (this.props.onClear(), e.stopPropagation());
    });
    D(this, xs, (e) => {
      this.props.changeState({ search: e });
    });
    D(this, Ts, () => {
      this.props.togglePop(!0, { search: "" });
    });
  }
  _handleClick(e) {
    var s;
    super._handleClick(e), (s = T(this, kn).current) == null || s.focus();
  }
  _getClass(e) {
    return x(
      super._getClass(e),
      "picker-select picker-select-single form-control",
      e.disabled ? "disabled" : ""
    );
  }
  _renderSearch(e) {
    const { state: { search: s } } = e;
    return /* @__PURE__ */ f(
      sl,
      {
        ref: T(this, kn),
        defaultSearch: s,
        onSearch: T(this, xs),
        onClear: T(this, Ts),
        placeholder: $t(this, Es, il).call(this)
      }
    );
  }
  _renderTrigger(e) {
    const { children: s, state: { selections: i = [], open: o }, placeholder: r, search: a, disabled: l, clearable: h } = e, [d] = i, c = o && a;
    let p;
    c ? p = this._renderSearch(e) : d ? p = /* @__PURE__ */ f("span", { className: "picker-single-selection", children: /* @__PURE__ */ f(te, { content: d.text }) }, "main") : p = /* @__PURE__ */ f("span", { className: "picker-select-placeholder", children: r }, "main");
    const m = h && !c ? /* @__PURE__ */ f("button", { type: "button", className: "btn picker-deselect-btn size-sm square ghost", disabled: l, onClick: T(this, $s), children: /* @__PURE__ */ f("span", { className: "close" }) }, "deselect") : null;
    return [
      p,
      s,
      m,
      c ? null : /* @__PURE__ */ f("span", { className: "caret" }, "caret")
    ];
  }
}
kn = new WeakMap(), $s = new WeakMap(), xs = new WeakMap(), Ts = new WeakMap(), Es = new WeakSet(), il = function() {
  const { searchHint: e, state: { value: s, selections: i } } = this.props;
  let o = e;
  if (o === void 0) {
    const r = i.find((a) => a.value === s);
    r && typeof r.text == "string" && (o = r.text);
  }
  return o;
};
const md = (n, t, e = "is-match") => n.reduce((s, i) => [...s].reduce((o, r) => {
  if (typeof r != "string")
    return o.push(r), o;
  const a = r.toLowerCase().split(i);
  if (a.length === 1)
    return o.push(r), o;
  let l = 0;
  return a.forEach((h, d) => {
    d && (o.push(/* @__PURE__ */ f("span", { class: e, children: r.substring(l, l + i.length) })), l += i.length), o.push(r.substring(l, l + h.length)), l += h.length;
  }), o;
}, []), t);
var Ss, Ms, ol, Ns, rl, Ds;
class gd extends Ra {
  constructor() {
    super(...arguments);
    D(this, Ms);
    D(this, Ns);
    D(this, Ss, q());
    D(this, Ds, ({ item: e }) => {
      const s = e.key, { multiple: i, onToggleValue: o, onSelect: r, togglePop: a } = this.props;
      i ? o(s) : (r(s), a(!1, { search: "" }));
    });
  }
  componentDidMount() {
    super.componentDidMount();
    const e = this.element;
    e && u(e).on("mouseenter.picker.zui", ".menu-item", (s) => {
      const i = u(s.currentTarget);
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
      const s = $t(this, Ms, ol).call(this);
      s != null && s.length && s.scrollIntoView({ block: "nearest", behavior: "smooth" });
    });
  }
  _getClass(e) {
    return x(
      super._getClass(e),
      "picker-menu"
    );
  }
  _renderPop(e) {
    const { menu: s } = e;
    return /* @__PURE__ */ f(
      Kt,
      {
        ref: T(this, Ss),
        className: "picker-menu-list",
        items: $t(this, Ns, rl).call(this),
        onClickItem: T(this, Ds),
        ...s
      }
    );
  }
}
Ss = new WeakMap(), Ms = new WeakSet(), ol = function() {
  const e = this.element;
  if (e)
    return u(e).find(".menu-item>a.hover");
}, Ns = new WeakSet(), rl = function() {
  const { selections: e, items: s, hoverItem: i, search: o } = this.props.state, r = new Set(e.map((d) => d.value));
  let a = !1;
  const l = u.unique(o.toLowerCase().split(" ").filter((d) => d.length)), h = s.reduce((d, c) => {
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
      active: r.has(p),
      text: v ? null : typeof g == "string" ? md(l, [g]) : /* @__PURE__ */ f(te, { content: g }),
      className: x(y, { hover: p === i }),
      "data-value": p,
      content: v,
      ..._
    }), d;
  }, []);
  return !a && h.length && (h[0].className = x(h[0].className, "hover")), h;
}, Ds = new WeakMap();
var al = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, gt = (n, t, e) => (al(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Rn = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, zt = (n, t, e, s) => (al(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), Ke, St, se, Xe;
let Mo = class extends st {
  constructor(t) {
    super(t), Rn(this, Ke, void 0), Rn(this, St, void 0), Rn(this, se, 0), Rn(this, Xe, void 0), this.isEmptyValue = (o) => gt(this, Xe).has(o), this.toggleValue = (o, r) => {
      if (!this.props.multiple)
        return r || o !== this.value ? this.setValue(o) : this.setValue();
      const { valueList: a } = this, l = a.indexOf(o);
      if (r !== l >= 0)
        return l > -1 ? a.splice(l, 1) : a.push(o), this.setValue(a);
    }, this.deselect = (o) => {
      const { valueList: r } = this, a = new Set(this.formatValueList(o)), l = r.filter((h) => !a.has(h));
      this.setValue(l);
    }, this.clear = () => {
      this.setValue();
    }, this.select = (o) => {
      const r = this.formatValueList(o), a = this.props.multiple ? [...this.valueList, ...r] : r[0];
      return this.setValue(a);
    }, this.isSelected = (o) => this.valueList.includes(o), u.extend(this.state, {
      loading: !1,
      search: "",
      items: t.items,
      selections: []
    });
    const { valueSplitter: e = ",", emptyValue: s = "" } = this.props;
    zt(this, Xe, new Set(s.split(e)));
    const { items: i } = this.state;
    if (Array.isArray(i) && i.length) {
      if (i.forEach((o) => o.value = String(o.value)), t.limitValueInList) {
        const o = new Set(i.map((r) => r.value));
        this.state.value = this.valueList.filter((r) => o.has(r)).join(t.valueSplitter);
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
    return gt(this, Xe).values().next().value;
  }
  async load() {
    let t = gt(this, St);
    t && t.abort(), t = new AbortController(), zt(this, St, t);
    const { items: e, searchDelay: s } = this.props, { search: i } = this.state;
    let o = [];
    if (typeof e == "function") {
      if (await ss(s || 500), gt(this, St) !== t || (o = await e(i, { signal: t.signal }), gt(this, St) !== t))
        return o;
    } else if (i.length) {
      const r = u.unique(i.toLowerCase().split(" ").filter((a) => a.length));
      o = e, r.length && (o = e.reduce((a, l) => {
        const {
          value: h,
          keys: d = "",
          text: c
        } = l;
        return r.every((p) => h.toLowerCase().includes(p) || d.toLowerCase().includes(p) || typeof c == "string" && c.toLowerCase().includes(p)) && a.push(l), a;
      }, []));
    } else
      o = e;
    return zt(this, St, void 0), o;
  }
  changeState(t, e) {
    return super.changeState((s) => {
      const i = typeof t == "function" ? t(s) : t;
      if (i.value !== void 0 && i.value !== s.value || i.items && i.items !== s.items) {
        const o = i.items || s.items, r = new Map(o.map((a) => [a.value, a]));
        i.selections = this.formatValueList(i.value ?? s.value).reduce((a, l) => (this.isEmptyValue(l) || a.push(r.get(l) || { value: l }), a), []);
      }
      return i;
    }, e);
  }
  async update(t) {
    const { state: e, props: s } = this, i = gt(this, Ke) || {}, o = {};
    if (zt(this, Ke, i), t || i.search !== e.search || s.items !== i.items) {
      const a = await this.load();
      o.items = a.filter((l) => (l.value = String(l.value), !this.isEmptyValue(l.value))), o.loading = !1, i.items = s.items, i.search = e.search;
    }
    (t || i.value !== e.value) && (i.value = e.value);
    const r = o.items;
    s.required && !s.multiple && this.isEmptyValue(this.state.value) && Array.isArray(r) && r.length && (o.value = r[0].value), Object.keys(o).length && await this.changeState(o);
  }
  async tryUpdate() {
    gt(this, se) && clearTimeout(gt(this, se)), zt(this, se, window.setTimeout(() => {
      zt(this, se, 0), this.update();
    }, 50));
  }
  componentDidUpdate(t, e) {
    super.componentDidUpdate(t, e), this.tryUpdate();
  }
  componentDidMount() {
    super.componentDidMount(), this.tryUpdate();
  }
  componentWillUnmount() {
    var t;
    (t = gt(this, St)) == null || t.abort(), zt(this, St, void 0), zt(this, Ke, void 0), clearTimeout(gt(this, se)), super.componentWillUnmount();
  }
  _getTriggerProps(t, e) {
    return {
      ...super._getTriggerProps(t, e),
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
    return t.Trigger || (t.multiple ? fd : pd);
  }
  formatValueList(t) {
    let e = [];
    return typeof t == "string" && t.length ? e = u.unique(t.split(this.props.valueSplitter ?? ",")) : Array.isArray(t) && (e = u.unique(t)), e.filter((s) => !this.isEmptyValue(s));
  }
  formatValue(t) {
    const e = this.formatValueList(t);
    return e.length ? e.join(this.props.valueSplitter ?? ",") : this.firstEmptyValue;
  }
  setValue(t = []) {
    if (this.props.disabled)
      return;
    !Array.isArray(t) && typeof t != "string" && (t = t !== null ? String(t) : this.firstEmptyValue);
    let e = this.formatValueList(t);
    if (!e.length)
      return this.changeState({ value: this.firstEmptyValue });
    const { items: s, limitValueInList: i } = this.props;
    if (i) {
      const r = new Set((Array.isArray(s) ? s : this.state.items).map((a) => String(a.value)));
      e = e.filter((a) => r.has(a));
    }
    const o = this.formatValue(e);
    return this.changeState({ value: o });
  }
};
Ke = /* @__PURE__ */ new WeakMap();
St = /* @__PURE__ */ new WeakMap();
se = /* @__PURE__ */ new WeakMap();
Xe = /* @__PURE__ */ new WeakMap();
Mo.defaultProps = {
  ...st.defaultProps,
  className: "picker",
  valueSplitter: ",",
  limitValueInList: !0,
  search: !0,
  emptyValue: ""
};
Mo.Pop = gd;
class ll extends z {
}
ll.NAME = "Picker";
ll.Component = Mo;
class cl extends at {
  init() {
    const { trigger: t } = this.options;
    this.initTarget(), this.initMask(), this.initArrow(), this.createPopper(), this.toggle = () => {
      const e = () => {
        if (this.$target.hasClass("hidden")) {
          this.show();
          return;
        }
        this.hide();
      }, { delay: s } = this.options;
      s === 0 ? e() : setTimeout(e, s);
    }, this.$element.addClass("z-50").on(t, this.toggle);
  }
  destroy() {
    this.cleanup(), this.$element.off(this.options.trigger, this.toggle), this.$target.remove();
  }
  computePositionConfig() {
    const { placement: t, strategy: e } = this.options, s = {
      placement: t,
      strategy: e,
      middleware: []
    }, { flip: i, shift: o, arrow: r, offset: a } = this.options;
    return i && s.middleware.push(Fs()), o && s.middleware.push(o === !0 ? on() : on(o)), r && s.middleware.push(gi({ element: this.$arrow[0] })), a && s.middleware.push(zs(a)), s;
  }
  createPopper() {
    const t = this.element, e = this.$target[0];
    this.cleanup = vo(t, e, () => {
      js(t, e, this.computePositionConfig()).then(({ x: s, y: i, placement: o, middlewareData: r }) => {
        if (Object.assign(e.style, {
          left: `${s}px`,
          top: `${i}px`
        }), !gi || !r.arrow)
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
    const t = this.$element.data("target");
    if (!t)
      throw new Error("popsvers trigger must have target.");
    const e = u(t);
    if (!e.length)
      throw new Error("popovers target must exist.");
    const { strategy: s } = this.options;
    e.addClass(s), e.addClass("hidden"), e.addClass("z-50"), e.on("click", (i) => {
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
cl.NAME = "Popovers";
cl.DEFAULT = {
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
var No = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, yt = (n, t, e) => (No(n, t, "read from private field"), e ? e.call(n) : t.get(n)), ee = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, Un = (n, t, e, s) => (No(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), pr = (n, t, e) => (No(n, t, "access private method"), e), jn, qn, he, Ii, Yn, Gn, Kn, Ri;
let hl = class extends O {
  constructor(t) {
    super(t), ee(this, Kn), ee(this, jn, void 0), ee(this, qn, q()), ee(this, he, 0), ee(this, Ii, (e) => {
      const s = this.state.value;
      e.stopPropagation(), this.setState({ value: "" }, () => {
        const { onChange: i, onClear: o } = this.props;
        o == null || o(e), this.focus(), s.trim() !== "" && (i == null || i("", e));
      });
    }), ee(this, Yn, (e) => {
      const s = this.state.value, i = e.target.value, { onChange: o } = this.props;
      this.setState({ value: i }, () => {
        !o || s === i || (pr(this, Kn, Ri).call(this), Un(this, he, window.setTimeout(() => {
          o(i, e), Un(this, he, 0);
        }, this.props.delay || 0)));
      });
    }), ee(this, Gn, (e) => {
      const s = e.type === "focus";
      this.setState({ focus: s }, () => {
        const i = s ? this.props.onFocus : this.props.onBlur;
        i == null || i(e);
      });
    }), this.state = { focus: !1, value: t.defaultValue || "" }, Un(this, jn, t.id || `search-box-${u.guid++}`);
  }
  get id() {
    return yt(this, jn);
  }
  get input() {
    return yt(this, qn).current;
  }
  focus() {
    var t;
    (t = this.input) == null || t.focus();
  }
  componentWillUnmount() {
    pr(this, Kn, Ri).call(this);
  }
  render(t, e) {
    const { style: s, className: i, rootClass: o, rootStyle: r, readonly: a, disabled: l, circle: h, placeholder: d, mergeIcon: c, searchIcon: p, clearIcon: m } = t, { focus: g, value: y } = e, { id: v } = this, _ = typeof y != "string" || !y.trim().length;
    let w, k, $;
    return p && ($ = p === !0 ? /* @__PURE__ */ f("span", { class: "magnifier" }) : /* @__PURE__ */ f(J, { icon: p })), !c && p && (w = /* @__PURE__ */ f("label", { for: v, class: "input-control-prefix", children: $ }, "prefix")), m && !_ ? k = /* @__PURE__ */ f(
      "button",
      {
        type: "button",
        class: "btn ghost size-sm square rounded-full",
        onClick: yt(this, Ii),
        children: m === !0 ? /* @__PURE__ */ f("span", { class: "close" }) : /* @__PURE__ */ f(J, { icon: m })
      }
    ) : c && p && (k = $), k && (k = /* @__PURE__ */ f("label", { for: v, class: "input-control-suffix", children: k }, "suffix")), /* @__PURE__ */ f("div", { class: x("search-box input-control", o, { focus: g, empty: _, "has-prefix-icon": w, "has-suffix-icon": k }), style: r, children: [
      w,
      /* @__PURE__ */ f(
        "input",
        {
          ref: yt(this, qn),
          id: v,
          type: "text",
          class: x("form-control", i, { "rounded-full": h }),
          style: s,
          placeholder: d,
          disabled: l,
          readonly: a,
          value: y,
          onInput: yt(this, Yn),
          onChange: yt(this, Yn),
          onFocus: yt(this, Gn),
          onBlur: yt(this, Gn)
        }
      ),
      k
    ] });
  }
};
jn = /* @__PURE__ */ new WeakMap();
qn = /* @__PURE__ */ new WeakMap();
he = /* @__PURE__ */ new WeakMap();
Ii = /* @__PURE__ */ new WeakMap();
Yn = /* @__PURE__ */ new WeakMap();
Gn = /* @__PURE__ */ new WeakMap();
Kn = /* @__PURE__ */ new WeakSet();
Ri = function() {
  yt(this, he) && clearTimeout(yt(this, he)), Un(this, he, 0);
};
hl.defaultProps = {
  clearIcon: !0,
  searchIcon: !0,
  delay: 500
};
class dl extends z {
}
dl.NAME = "SearchBox";
dl.Component = hl;
class ul extends z {
}
ul.NAME = "Toolbar";
ul.Component = dt;
const yd = '[data-toggle="tooltip"]';
class Pt extends ct {
  _getRenderOptions() {
    const { type: t, className: e, title: s, content: i } = this.options;
    let o = s, r = i;
    return r === void 0 && (r = o, o = void 0), {
      ...super._getRenderOptions(),
      title: o,
      content: r,
      className: x("tooltip", t, e, o ? "tooltip-has-title" : ""),
      contentClass: o ? "tooltip-content" : ""
    };
  }
}
Pt.NAME = "Tooltip";
Pt.DEFAULT = {
  ...ct.DEFAULT,
  trigger: "hover",
  delay: 500,
  closeBtn: !1,
  popup: !1,
  name: "tooltip",
  animation: "fade",
  destroyOnHide: 5e3
};
u(document).on(`click${Pt.NAMESPACE} mouseenter${Pt.NAMESPACE}`, yd, (n) => {
  const t = u(n.currentTarget);
  if (t.length && !t.data(Pt.KEY)) {
    const e = t.data("trigger") || "hover";
    if ((n.type === "mouseover" ? "hover" : "click") !== e)
      return;
    Pt.ensure(t, { show: Pt.DEFAULT.delay || !0 }), n.preventDefault();
  }
});
function _d({
  type: n,
  component: t,
  className: e,
  children: s,
  content: i,
  style: o,
  attrs: r,
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
        a ? /* @__PURE__ */ f("a", { className: "text tree-link not-nested-toggle", href: a, style: o, ...r, children: c }) : /* @__PURE__ */ f("span", { class: "text", style: o, ...r, children: c }),
        /* @__PURE__ */ f(te, { content: i }),
        s,
        b ? /* @__PURE__ */ f(dt, { ...b }) : null,
        /* @__PURE__ */ f(J, { icon: m, className: "tree-trailing-icon" })
      ]
    }
  );
}
let Do = class extends Bs {
  get nestedTrigger() {
    return this.props.nestedTrigger || "click";
  }
  get menuName() {
    return "tree";
  }
  getNestedMenuProps(t) {
    const e = super.getNestedMenuProps(t), { collapsedIcon: s, expandedIcon: i, normalIcon: o, itemActions: r } = this.props;
    return {
      collapsedIcon: s,
      expandedIcon: i,
      normalIcon: o,
      itemActions: r,
      ...e
    };
  }
  getItemRenderProps(t, e, s) {
    const i = super.getItemRenderProps(t, e, s), { collapsedIcon: o, expandedIcon: r, normalIcon: a, itemActions: l } = t;
    return i.icon === void 0 && (i.icon = i.items ? i.show ? r : o : a), i.actions === void 0 && l && (i.actions = typeof l == "function" ? l(e) : l), i;
  }
  renderToggleIcon() {
    return null;
  }
  beforeRender() {
    const t = super.beforeRender(), { hover: e } = this.props;
    return e && (t.className = x(t.className, "tree-hover")), t;
  }
};
Do.ItemComponents = {
  item: _d
};
Do.NAME = "tree";
class fl extends z {
}
fl.NAME = "Tree";
fl.Component = Do;
class Ao extends at {
  init() {
    const { multiple: t, defaultFileList: e, limitSize: s } = this.options;
    this.fileMap = /* @__PURE__ */ new Map(), this.renameMap = /* @__PURE__ */ new Map(), this.itemMap = /* @__PURE__ */ new Map(), this.dataTransfer = new DataTransfer(), this.limitBytes = s ? Rc(s) : Number.MAX_VALUE, this.currentBytes = 0, t || (this.options.limitCount = 1), this.$element.addClass("upload"), this.initFileInputCash(), this.initUploadCash(), e && this.addFileItem(e);
  }
  initUploadCash() {
    const { name: t, uploadText: e, uploadIcon: s, listPosition: i, btnClass: o, tip: r, draggable: a } = this.options;
    this.$list = u('<ul class="file-list py-1"></ul>');
    const l = u(`<span class="upload-tip">${r}</span>`);
    if (!a) {
      if (this.$label = u(`<label class="btn ${o}" for="${t}">${e}</label>`), s) {
        const p = u(`<i class="icon icon-${s}"></i>`);
        this.$label.prepend(p);
      }
      const c = i === "bottom" ? [this.$label, l, this.$list] : [this.$list, this.$label, l];
      this.$element.append(this.$input, ...c);
      return;
    }
    const h = u(`<span class="text-primary">${e}</span>`);
    if (s) {
      const c = u(`<i class="icon icon-${s} mr-1"></i>`);
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
      var s;
      t.preventDefault(), this.$label.removeClass("border-primary"), this.$label.addClass("border-gray"), this.$label.removeClass("dragover");
      const e = Array.from(((s = t.dataTransfer) == null ? void 0 : s.files) ?? []);
      console.log(t.dataTransfer.files), this.addFileItem(e);
    });
  }
  initFileInputCash() {
    const { name: t, multiple: e, accept: s } = this.options;
    this.$input = u("<input />").addClass("hidden").prop("type", "file").prop("name", t).prop("id", t).prop("multiple", e).on("change", (i) => {
      const o = i.target.files;
      if (!o)
        return;
      const r = [...o];
      this.addFileItem(r);
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
    const s = e.replace(/\s/g, "").split(","), i = [], o = [], r = [];
    return s.forEach((a) => {
      a.endsWith("/*") ? o.push(a.substring(0, a.length - 1)) : a.includes("/") ? i.push(a) : a.startsWith(".") && r.push(a);
    }), t.filter((a) => i.includes(a.type) || o.some((l) => a.type.startsWith(l)) || r.some((l) => a.name.endsWith(l)));
  }
  addFileItem(t) {
    t = this.filterFiles(t);
    const { multiple: e, limitCount: s, exceededSizeHint: i, exceededCountHint: o, onAdd: r } = this.options;
    if (e) {
      const h = [];
      for (let d of t) {
        if (s && this.fileMap.size >= s)
          return r == null || r(h), alert(o);
        if (this.currentBytes + d.size > this.limitBytes)
          return r == null || r(h), alert(i);
        d = this.renameDuplicatedFile(d);
        const c = this.createFileItem(d);
        this.itemMap.set(d.name, c), this.$list.append(c), h.push(d);
      }
      r == null || r(h);
      return;
    }
    if (t[0].size > this.limitBytes)
      return;
    const a = this.renameDuplicatedFile(t[0]), l = this.createFileItem(a);
    this.itemMap.clear(), this.itemMap.set(a.name, l), this.$list.empty().append(l), r == null || r(a);
  }
  deleteFileItem(t) {
    var l;
    const e = this.renameMap.get(t) ?? t;
    this.renameMap.delete(t);
    const s = this.fileMap.get(e);
    if (!s)
      return;
    const { onDelete: i, onSizeChange: o } = this.options, r = this.itemMap.get(s.name);
    this.itemMap.delete(s.name), r == null || r.addClass("hidden");
    const a = (l = r == null ? void 0 : r.find(".file-delete")) == null ? void 0 : l.data("tooltip");
    a && (a.destroy(), a.tooltip.remove()), setTimeout(() => r == null ? void 0 : r.remove(), 3e3), i == null || i(s), this.fileMap.delete(s.name), this.currentBytes -= s.size, o == null || o(this.currentBytes), this.dataTransfer = new DataTransfer(), this.fileMap.forEach((h) => this.dataTransfer.items.add(h)), this.$input.prop("files", this.dataTransfer.files);
  }
  renameFileItem(t, e) {
    var o, r;
    const s = this.renameMap.get(t.name);
    this.renameMap.set(t.name, e), s && (t = this.fileMap.get(s) ?? t);
    const i = this.itemMap.get(t.name);
    i && (this.itemMap.set(e, i).delete(t.name), (r = (o = this.options).onRename) == null || r.call(o, e, t.name), this.fileMap.delete(t.name), this.dataTransfer = new DataTransfer(), t = new File([t], e), this.fileMap.set(e, t).forEach((a) => this.dataTransfer.items.add(a)), this.$input.prop("files", this.dataTransfer.files));
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
    const { useIconBtn: t, renameText: e, renameIcon: s, renameClass: i } = this.options;
    if (t) {
      const o = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-rename");
      return new Pt(o, { title: e }), o;
    }
    return u("<button />").prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${i}`).html(e);
  }
  fileDeleteBtn() {
    const { useIconBtn: t, deleteText: e, deleteIcon: s, deleteClass: i } = this.options;
    if (t) {
      const o = u(`<button class="btn btn-link h-5 w-5 p-0 ${i}"><i class="icon icon-${s}"></i></button>`).prop("type", "button").addClass("file-action file-delete");
      return o.data("tooltip", new Pt(o, { title: e })), o;
    }
    return u("<button />").html(e).prop("type", "button").addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${i}`);
  }
  fileName(t) {
    return u(`<span class="file-name">${t}</span>`);
  }
  fileSize(t) {
    return u(`<span class="file-size text-gray">${Ic(t)}</span>`);
  }
  createFileInfo(t) {
    const { renameBtn: e, deleteBtn: s, showSize: i } = this.options, o = u('<div class="file-info flex items-center gap-2"></div>');
    return o.append(this.fileName(t.name)), i && o.append(this.fileSize(t.size)), e && o.append(
      this.fileRenameBtn().on("click", (r) => {
        o.addClass("hidden").closest(".file-item").find(".input-rename-container.hidden").removeClass("hidden");
        const a = u(r.target).closest("li").find("input")[0];
        a.focus(), a.value.lastIndexOf(".") !== -1 && a.setSelectionRange(0, a.value.lastIndexOf("."));
      })
    ), s && o.append(
      this.fileDeleteBtn().on("click", () => this.deleteFileItem(t.name))
    ), o;
  }
  createRenameContainer(t) {
    const { confirmText: e, cancelText: s, duplicatedHint: i } = this.options, o = u('<div class="input-group input-rename-container hidden"></div>'), r = u("<input />").addClass("form-control").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).on("keydown", (d) => {
      if (d.key === "Enter") {
        const c = o.closest(".file-item"), p = c.find(".file-name");
        if (p.html() === r.val()) {
          o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(r.val()))
          return alert(i);
        this.renameFileItem(t, r.val()), o.addClass("hidden"), c.find(".file-info.hidden").removeClass("hidden"), p.html(r.val());
      } else
        d.key === "Escape" && (r.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden"));
    }), a = u("<button />").addClass("btn primary rename-confirm-btn").prop("type", "button").html(e).on("click", () => {
      const d = o.closest(".file-item"), c = d.find(".file-name");
      if (c.html() === r.val()) {
        o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(r.val()))
        return alert(i);
      this.renameFileItem(t, r.val()), o.addClass("hidden"), d.find(".file-info.hidden").removeClass("hidden"), c.html(r.val());
    }), l = u("<button />").prop("type", "button").addClass("btn rename-cancel-btn").html(s).on("click", () => {
      r.val(t.name), o.addClass("hidden").closest(".file-item").find(".file-info.hidden").removeClass("hidden");
    }), h = u('<div class="btn-group"></div').append(a).append(l);
    return o.append(r).append(h);
  }
}
Ao.NAME = "Upload";
Ao.DEFAULT = {
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
class pl extends Ao {
  init() {
    this.initUploadButtonItemCash(), this.options.onSizeChange = () => {
      this.$uploadInfo.html(this.options.totalCountText.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.fileMap.size > 0 ? (this.$tip.remove(), this.$list.append(this.$uploadButtonItem)) : (this.$uploadButtonItem.remove(), this.$label.append(this.$tip));
    }, super.init(), this.$list.addClass("flex");
  }
  initUploadButtonItemCash() {
    this.$uploadButtonItem = u(`<label class="upload-button-item order-last" for="${this.options.name}" />`).addClass("flex justify-center items-center cursor-pointer").css({ width: 120, height: 120, background: "var(--color-slate-100)" }).append(u('<i class="icon icon-plus" />'));
  }
  initUploadCash() {
    const { name: t, tip: e, uploadText: s, uploadIcon: i, totalCountText: o } = this.options;
    this.$list = u('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>'), this.$label = u('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({ minHeight: 64 });
    const r = u(`<label for="${t}" class="text-primary cursor-pointer">${s}</label>`);
    if (i) {
      const a = u(`<i class="icon icon-${i} mr-1"></i>`);
      r.prepend(a);
    }
    this.$tip = u('<div class="absolute inset-0 col justify-center items-center"></div>').append(r), e && this.$tip.append(u(`<span class="upload-tip">${e}</span>`)), this.$label.append(this.$tip), this.$label.append(this.$input, this.$list), this.bindDragEvent(), this.$element.append(this.$label), this.$uploadInfo = u('<div class="py-1" />').css({ color: "var(--color-slate-500)" }).html(o.replace("%s", this.fileMap.size.toString()).replace("%s", this.fileMap.size.toString())), this.$element.append(this.$uploadInfo);
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
      u('<div class="img flex-none" />').addClass("rounded").css({ backgroundImage: `url(${s.result})` }).prependTo(e);
    }, s.readAsDataURL(t);
  }
  createFileInfo(t) {
    const e = this.fileRenameBtn().addClass("flex-none").on("click", (i) => {
      const o = u(i.target).closest(".file-item");
      o.find(".file-info").addClass("hidden"), o.find(".input-rename-container").removeClass("hidden");
      const r = o.find("input")[0];
      r.focus(), r.value.lastIndexOf(".") !== -1 && r.setSelectionRange(0, r.value.lastIndexOf("."));
    });
    return u('<div class="file-info flex justify-between items-center"></div>').css({ width: 120 }).append(u(`<div class="file-name py-1 ellipsis">${t.name}</div>`)).append(e);
  }
  createRenameContainer(t) {
    const { duplicatedHint: e } = this.options, s = u("<input />").addClass("input-rename-container border-primary border hidden").prop("type", "text").prop("autofocus", !0).prop("defaultValue", t.name).css({ width: 120 }).on("keydown", (i) => {
      if (i.key === "Enter") {
        const o = s.closest(".file-item").find(".file-name");
        if (o.html() === s.val()) {
          s.addClass("hidden"), o.closest(".file-info").removeClass("hidden");
          return;
        }
        if (this.fileMap.has(s.val()))
          return alert(e);
        this.renameFileItem(t, s.val()), s.addClass("hidden"), o.html(s.val()).closest(".file-info").removeClass("hidden");
      } else
        i.key === "Escape" && s.val(t.name).addClass("hidden").closest(".file-item").find(".file-name").removeClass("hidden");
    }).on("blur", () => {
      const i = s.closest(".file-item").find(".file-name");
      if (i.html() === s.val()) {
        s.addClass("hidden"), i.closest(".file-info").removeClass("hidden");
        return;
      }
      if (this.fileMap.has(s.val()))
        return alert(e);
      this.renameFileItem(t, s.val()), s.addClass("hidden"), i.html(s.val()).closest(".file-info").removeClass("hidden");
    });
    return s;
  }
}
pl.NAME = "UploadImgs";
pl.DEFAULT = {
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
class Po extends bt {
  _getLayoutOptions() {
    const t = super._getLayoutOptions();
    return this.options.element || (t[0] = {
      getBoundingClientRect: this._getClickBounding
    }), t;
  }
}
Po.NAME = "ContextMenu";
Po.DEFAULT = {
  ...bt.DEFAULT,
  name: "contextmenu",
  trigger: "contextmenu"
};
let vd = class extends O {
  constructor() {
    super(...arguments), this._onDragStart = (t) => {
      var i, o, r;
      const e = t.target.closest(".dashboard-block");
      if (!e)
        return;
      const s = e.getBoundingClientRect();
      if (t.clientY - s.top > 48) {
        t.preventDefault();
        return;
      }
      this.setState({ dragging: !0 }), (i = t.dataTransfer) == null || i.setData("application/id", this.props.id), (r = (o = this.props).onDragStart) == null || r.call(o, t);
    }, this._onDragEnd = (t) => {
      var e, s;
      this.setState({ dragging: !1 }), (s = (e = this.props).onDragEnd) == null || s.call(e, t);
    };
  }
  render() {
    const { left: t, top: e, id: s, onMenuBtnClick: i, title: o, width: r, height: a, content: l, loading: h } = this.props, { dragging: d } = this.state;
    return /* @__PURE__ */ f("div", { class: "dashboard-block-cell", style: { left: t, top: e, width: r, height: a }, children: /* @__PURE__ */ f(
      "div",
      {
        class: `dashboard-block load-indicator${h && !l ? " loading" : ""}${i ? " has-more-menu" : ""}${d ? " is-dragging" : ""}`,
        draggable: !0,
        onDragStart: this._onDragStart,
        onDragEnd: this._onDragEnd,
        "data-id": s,
        children: [
          /* @__PURE__ */ f("div", { class: "dashboard-block-header", children: [
            /* @__PURE__ */ f("div", { class: "dashboard-block-title", children: o }),
            i ? /* @__PURE__ */ f("div", { class: "dashboard-block-actions toolbar", children: /* @__PURE__ */ f("button", { class: "toolbar-item dashboard-block-action btn square ghost rounded size-sm", "data-type": "more", onClick: i, children: /* @__PURE__ */ f("div", { class: "more-vert" }) }) }) : null
          ] }),
          u.isPlainObject(l) && l.html ? /* @__PURE__ */ f($n, { className: "dashboard-block-body", executeScript: !0, ...l }) : /* @__PURE__ */ f("div", { class: "dashboard-block-body", children: l })
        ]
      }
    ) });
  }
};
const mr = ([n, t, e, s], [i, o, r, a]) => !(n + e <= i || i + r <= n || t + s <= o || o + a <= t), Ln = "Dashboard:Block.cache:";
let ml = class extends O {
  constructor(t) {
    super(t), this._ref = q(), this._loadTimer = 0, this.map = /* @__PURE__ */ new Map(), this.tryLoadNext = () => {
      clearTimeout(this._loadTimer), this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    }, this._handleDragStart = (e) => {
      var i;
      const s = (i = e.dataTransfer) == null ? void 0 : i.getData("application/id");
      s !== void 0 && (this.setState({ dragging: s }), console.log("handleBlockDragStart", e));
    }, this._handleDragEnd = (e) => {
      this.setState({ dragging: void 0 }), console.log("handleBlockDragEnd", e);
    }, this._handleMenuClick = (e) => {
      const s = e.target.closest(".dashboard-block");
      if (!s)
        return;
      const i = s.dataset.id;
      if (!i)
        return;
      const o = this.getBlock(i);
      if (!o || !o.menu)
        return;
      const { menu: r } = o, { onClickMenu: a } = this.props;
      Po.show({
        triggerEvent: e,
        element: e.currentTarget,
        placement: "bottom-end",
        menu: {
          onClickItem: (l) => {
            var h;
            ((h = l.item.data) == null ? void 0 : h.type) === "refresh" && this.load(i), a && a.call(this, l, o);
          },
          ...r
        }
      });
    }, this.state = { blocks: this._initBlocks(t.blocks) };
  }
  getBlock(t) {
    return this.state.blocks.find((e) => e.id === t);
  }
  update(t, e) {
    const { id: s } = t, { blocks: i } = this.state, o = i.findIndex((a) => a.id === s);
    if (o < 0)
      return;
    const r = i[o];
    t.fetch && t.fetch !== r.fetch && r.needLoad && (t.needLoad = !1), i[o] = { ...r, ...t }, this.setState({ blocks: i }, e);
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
    if (!s || s.loading || (e = e || s.fetch, typeof e == "string" ? e = { url: e } : typeof e == "function" && (e = e(s.id, s)), !e || !e.url))
      return;
    const { url: i, ...o } = e;
    this.update({ id: t, loading: !0, needLoad: !1 }, async () => {
      const r = K(i, s);
      try {
        const a = await fetch(K(r, s), {
          headers: { "X-Requested-With": "XMLHttpRequest" },
          ...o
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
    return !!u(this._ref.current).find(`.dashboard-block[data-id="${t}"]`).isVisible();
  }
  _setCache(t, e) {
    const { cache: s } = this.props;
    if (s)
      try {
        typeof s == "string" ? je.set(`${Ln}${s}:${t}`, e) : je.session.set(`${Ln}${t}`, e);
      } catch {
        console.warn("ZUI: Failed to cache block content.", { id: t, html: e });
      }
  }
  _getCache(t) {
    const { cache: e } = this.props;
    if (!e)
      return;
    const s = typeof e == "string" ? je.get(`${Ln}${e}:${t}`) : je.session.get(`${Ln}${t}`);
    if (s)
      return { html: s };
  }
  _initBlocks(t) {
    const { blockFetch: e, blockMenu: s } = this.props;
    return t.map((o) => {
      const {
        id: r,
        size: a,
        left: l = -1,
        top: h = -1,
        fetch: d = e,
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
        fetch: d,
        menu: c,
        content: p ?? this._getCache(`${r}`),
        loading: !1,
        needLoad: !!d,
        ...m
      };
    });
  }
  _getBlockSize(t) {
    const { blockDefaultSize: e, blockSizeMap: s } = this.props;
    return t = t ?? e, typeof t == "string" && (t = s[t]), t = t || e, Array.isArray(t) || (t = [t.width, t.height]), t;
  }
  _layout() {
    this.map.clear();
    let t = 0;
    const { blocks: e } = this.state;
    return e.forEach((s) => {
      this._layoutBlock(s);
      const [, i, , o] = this.map.get(s.id);
      t = Math.max(t, i + o);
    }), { blocks: e, height: t };
  }
  _layoutBlock(t) {
    const e = this.map, { id: s, left: i, top: o, width: r, height: a } = t;
    if (i < 0 || o < 0) {
      const [l, h] = this._appendBlock(r, a, i, o);
      e.set(s, [l, h, r, a]);
    } else
      this._insertBlock(s, [i, o, r, a]);
  }
  _canPlace(t) {
    const { dragging: e } = this.state;
    for (const [s, i] of this.map.entries())
      if (s !== e && mr(i, t))
        return !1;
    return !0;
  }
  _insertBlock(t, e) {
    this.map.set(t, e);
    for (const [s, i] of this.map.entries())
      s !== t && mr(i, e) && (i[1] = e[1] + e[3], this._insertBlock(s, i));
  }
  _appendBlock(t, e, s, i) {
    if (s >= 0 && i >= 0) {
      if (this._canPlace([s, i, t, e]))
        return [s, i];
      i = -1;
    }
    let o = s < 0 ? 0 : s, r = i < 0 ? 0 : i, a = !1;
    const l = this.props.grid;
    for (; !a; ) {
      if (this._canPlace([o, r, t, e])) {
        a = !0;
        break;
      }
      s < 0 ? (o += 1, o + t > l && (o = 0, r += 1)) : r += 1;
    }
    return [o, r];
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
    const { blocks: t, height: e } = this._layout(), { cellHeight: s, grid: i } = this.props, o = this.map;
    return /* @__PURE__ */ f("div", { class: "dashboard", children: /* @__PURE__ */ f(
      "div",
      {
        class: "dashboard-blocks",
        style: { height: e * s },
        ref: this._ref,
        children: t.map((r, a) => {
          const { id: l, menu: h, content: d, title: c } = r, [p, m, g, y] = o.get(l) || [0, 0, r.width, r.height];
          return /* @__PURE__ */ f(
            vd,
            {
              id: l,
              index: a,
              left: `${100 * p / i}%`,
              top: s * m,
              width: `${100 * g / i}%`,
              height: s * y,
              content: d,
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
};
ml.defaultProps = {
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
class gl extends z {
}
gl.NAME = "Dashboard";
gl.Component = ml;
var qt, Yt;
class gr extends O {
  constructor(e) {
    super(e);
    D(this, qt, void 0);
    D(this, Yt, void 0);
    L(this, qt, 0), L(this, Yt, null), this._handleWheel = (s) => {
      const { wheelContainer: i } = this.props, o = s.target;
      if (!(!o || !i) && (typeof i == "string" && o.closest(i) || typeof i == "object")) {
        const r = (this.props.type === "horz" ? s.deltaX : s.deltaY) * (this.props.wheelSpeed ?? 1);
        this.scrollOffset(r) && s.preventDefault();
      }
    }, this._handleMouseMove = (s) => {
      const { dragStart: i } = this.state;
      i && (T(this, qt) && cancelAnimationFrame(T(this, qt)), L(this, qt, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? s.clientX - i.x : s.clientY - i.y;
        this.scroll(i.offset + o * this.props.scrollSize / this.props.clientSize), L(this, qt, 0);
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
    const { scrollSize: e, clientSize: s } = this.props;
    return Math.max(0, e - s);
  }
  get barSize() {
    const { clientSize: e, scrollSize: s, size: i = 12, minBarSize: o = 3 * i } = this.props;
    return Math.max(Math.round(e * e / s), o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (L(this, Yt, typeof e == "string" ? document : e.current), T(this, Yt).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), T(this, Yt) && T(this, Yt).removeEventListener("wheel", this._handleWheel);
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
      className: o,
      style: r,
      left: a,
      top: l,
      bottom: h,
      right: d
    } = this.props, { maxScrollPos: c, scrollPos: p } = this, { dragStart: m } = this.state, g = {
      left: a,
      top: l,
      bottom: h,
      right: d,
      ...r
    }, y = {};
    return s === "horz" ? (g.height = i, g.width = e, y.width = this.barSize, y.left = Math.round(Math.min(c, p) * (e - y.width) / c)) : (g.width = i, g.height = e, y.height = this.barSize, y.top = Math.round(Math.min(c, p) * (e - y.height) / c)), /* @__PURE__ */ f(
      "div",
      {
        className: x("scrollbar", o, {
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
qt = new WeakMap(), Yt = new WeakMap();
const ps = /* @__PURE__ */ new Map(), ms = [];
function yl(n, t) {
  const { name: e } = n;
  if (!(t != null && t.override) && ps.has(e))
    throw new Error(`DTable: Plugin with name ${e} already exists`);
  ps.set(e, n), t != null && t.buildIn && !ms.includes(e) && ms.push(e);
}
function Ht(n, t) {
  yl(n, t);
  const e = (s) => {
    if (!s)
      return n;
    const { defaultOptions: i, ...o } = n;
    return {
      ...o,
      defaultOptions: { ...i, ...s }
    };
  };
  return e.plugin = n, e;
}
function _l(n) {
  return ps.delete(n);
}
function wd(n) {
  if (typeof n == "string") {
    const t = ps.get(n);
    return t || console.warn(`DTable: Cannot found plugin "${n}"`), t;
  }
  if (typeof n == "function" && "plugin" in n)
    return n.plugin;
  if (typeof n == "object")
    return n;
  console.warn("DTable: Invalid plugin", n);
}
function vl(n, t, e) {
  return t.forEach((s) => {
    var o;
    if (!s)
      return;
    const i = wd(s);
    i && (e.has(i.name) || ((o = i.plugins) != null && o.length && vl(n, i.plugins, e), n.push(i), e.add(i.name)));
  }), n;
}
function bd(n = [], t = !0) {
  return t && ms.length && n.unshift(...ms), n != null && n.length ? vl([], n, /* @__PURE__ */ new Set()) : [];
}
function wl() {
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
function Cd(n, t, e) {
  return n && (t && (n = Math.max(t, n)), e && (n = Math.min(e, n))), n;
}
function yr(n, t) {
  return typeof n == "string" && (n = n.endsWith("%") ? parseFloat(n) / 100 : parseFloat(n)), typeof t == "number" && (typeof n != "number" || isNaN(n)) && (n = t), n;
}
function ri(n, t = !1) {
  if (!n.list.length)
    return;
  if (n.widthSetting && n.width !== n.widthSetting) {
    n.width = n.widthSetting;
    const s = n.width - n.totalWidth;
    if (!t && s > 0 || t && s !== 0) {
      const i = n.flexList.length ? n.flexList : n.list, o = i.reduce((r, a) => r + (a.flex || 1), 0);
      i.forEach((r) => {
        const a = Math[s < 0 ? "max" : "min"](s, Math.ceil(s * ((r.flex || 1) / o)));
        r.realWidth = r.width + a;
      });
    }
  }
  let e = 0;
  n.list.forEach((s) => {
    s.realWidth || (s.realWidth = s.width), s.left = e, e += s.realWidth;
  });
}
function kd(n, t, e, s) {
  const { defaultColWidth: i, minColWidth: o, maxColWidth: r, fixedLeftWidth: a = 0, fixedRightWidth: l = 0 } = t, h = (w) => (typeof w == "function" && (w = w.call(n)), w = yr(w, 0), w < 1 && (w = Math.round(w * s)), w), d = {
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
      minWidth: o,
      maxWidth: r,
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
    }, A = _[k];
    A && A.forEach((H) => {
      const it = typeof H == "function" ? H.call(n, b) : H;
      it && Object.assign(b, it, w);
    });
    const { fixed: R, flex: I, minWidth: N = o, maxWidth: P = r } = b, F = yr(b.width || i, i);
    S.flex = I === !0 ? 1 : typeof I == "number" ? I : 0, S.width = Cd(F < 1 ? Math.round(F * s) : F, N, P), v.forEach((H) => H.call(n, S)), m.push(S), g[S.name] = S;
    const M = R ? R === "left" ? c : p : d;
    M.list.push(S), M.totalWidth += S.width, M.width = M.totalWidth, S.flex && M.flexList.push(S), typeof b.order == "number" && (y = !0);
  }), y) {
    const w = (k, $) => (k.setting.order ?? 0) - ($.setting.order ?? 0);
    m.sort(w), c.list.sort(w), d.list.sort(w), p.list.sort(w);
  }
  return ri(c, !0), ri(p, !0), d.widthSetting = s - c.width - p.width, ri(d), {
    list: m,
    map: g,
    left: c,
    center: d,
    right: p
  };
}
function $d({ col: n, className: t, height: e, row: s, onRenderCell: i, style: o, outerStyle: r, children: a, outerClass: l, width: h, left: d, top: c, ...p }) {
  var F;
  const m = {
    left: d ?? n.left,
    top: c ?? s.top,
    width: h ?? n.realWidth,
    height: e,
    ...r
  }, { align: g, border: y } = n.setting, v = {
    justifyContent: g ? g === "left" ? "start" : g === "right" ? "end" : g : void 0,
    ...n.setting.cellStyle,
    ...o
  }, _ = ["dtable-cell", l, t, n.setting.className, {
    "has-border-left": y === !0 || y === "left",
    "has-border-right": y === !0 || y === "right"
  }], w = ["dtable-cell-content", n.setting.cellClass], k = (F = s.data) == null ? void 0 : F[n.name], $ = [a ?? k ?? ""], b = i ? i($, { row: s, col: n, value: k }, X) : $, S = [], A = [], R = {}, I = {};
  let N = "div";
  b == null || b.forEach((M) => {
    if (typeof M == "object" && M && !Z(M) && ("html" in M || "className" in M || "style" in M || "attrs" in M || "children" in M || "tagName" in M)) {
      const H = M.outer ? S : A;
      M.html ? H.push(/* @__PURE__ */ f("div", { className: x("dtable-cell-html", M.className), style: M.style, dangerouslySetInnerHTML: { __html: M.html }, ...M.attrs ?? {} })) : (M.style && Object.assign(M.outer ? m : v, M.style), M.className && (M.outer ? _ : w).push(M.className), M.children && H.push(M.children), M.attrs && Object.assign(M.outer ? R : I, M.attrs)), M.tagName && !M.outer && (N = M.tagName);
    } else
      A.push(M);
  });
  const P = N;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x(_),
      style: m,
      "data-col": n.name,
      "data-row": s.id,
      "data-type": n.type || null,
      ...p,
      ...R,
      children: [
        A.length > 0 && /* @__PURE__ */ f(P, { className: x(w), style: v, ...I, children: A }),
        S
      ]
    }
  );
}
function ai({
  rows: n = [],
  cols: t,
  rowHeight: e,
  scrollLeft: s = 0,
  scrollTop: i = 0,
  left: o = 0,
  top: r = 0,
  width: a,
  height: l = "100%",
  className: h,
  CellComponent: d = $d,
  onRenderCell: c
}) {
  var y;
  const p = Array.isArray(n) ? n : [n], m = ((y = p[0]) == null ? void 0 : y.top) ?? 0, g = p.length;
  return /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-cells", h),
      style: { top: r, left: o, width: a, height: l },
      children: /* @__PURE__ */ f("div", { className: "dtable-cells-container", style: { left: -s, top: -i + m }, children: p.reduce((v, _, w) => {
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
function bl({
  top: n,
  height: t,
  rowHeight: e,
  rows: s,
  cols: { left: i, center: o, right: r },
  scrollLeft: a,
  scrollTop: l,
  className: h,
  style: d,
  onRenderCell: c,
  children: p
}) {
  let m = null;
  i.list.length && (m = /* @__PURE__ */ f(
    ai,
    {
      className: "dtable-fixed-left",
      rows: s,
      scrollTop: l,
      cols: i.list,
      width: i.width,
      rowHeight: e,
      onRenderCell: c
    },
    "left"
  ));
  let g = null;
  o.list.length && (g = /* @__PURE__ */ f(
    ai,
    {
      rows: s,
      className: "dtable-scroll-center",
      scrollLeft: a,
      scrollTop: l,
      cols: o.list,
      left: i.width,
      width: o.width,
      rowHeight: e,
      onRenderCell: c
    },
    "center"
  ));
  let y = null;
  return r.list.length && (y = /* @__PURE__ */ f(
    ai,
    {
      className: "dtable-fixed-right",
      rows: s,
      scrollTop: l,
      cols: r.list,
      left: i.width + o.width,
      width: r.width,
      rowHeight: e,
      onRenderCell: c
    },
    "right"
  )), /* @__PURE__ */ f(
    "div",
    {
      className: x("dtable-block", h),
      style: { ...d, top: n, height: t },
      children: [
        m,
        g,
        y,
        p
      ]
    }
  );
}
var Io = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, E = (n, t, e) => (Io(n, t, "read from private field"), e ? e.call(n) : t.get(n)), W = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, U = (n, t, e, s) => (Io(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), lt = (n, t, e) => (Io(n, t, "access private method"), e), Ce, Ze, de, It, oe, nt, Nt, Mt, Je, Xn, gs, ln, Vt, Qe, tn, Li, Cl, Wi, kl, Oi, $l, Bi, xl, Zn, Hi, Gs, ys, Fi, zi, Vi, Ui, en, Jn, Ro, Tl, Lo, El, ji, Sl;
let Wo = class extends O {
  constructor(t) {
    super(t), W(this, Li), W(this, Wi), W(this, Oi), W(this, Bi), W(this, Zn), W(this, en), W(this, Ro), W(this, Lo), W(this, ji), this.ref = q(), W(this, Ce, 0), W(this, Ze, void 0), W(this, de, !1), W(this, It, void 0), W(this, oe, void 0), W(this, nt, []), W(this, Nt, void 0), W(this, Mt, /* @__PURE__ */ new Map()), W(this, Je, {}), W(this, Xn, void 0), W(this, gs, []), W(this, ln, { in: !1 }), this.updateLayout = () => {
      E(this, Ce) && cancelAnimationFrame(E(this, Ce)), U(this, Ce, requestAnimationFrame(() => {
        this.update({ dirtyType: "layout" }), U(this, Ce, 0);
      }));
    }, W(this, Vt, (e, s) => {
      s = s || e.type;
      const i = E(this, Mt).get(s);
      if (i != null && i.length) {
        for (const o of i)
          if (o.call(this, e) === !1) {
            e.stopPropagation(), e.preventDefault();
            break;
          }
      }
    }), W(this, Qe, (e) => {
      E(this, Vt).call(this, e, `window_${e.type}`);
    }), W(this, tn, (e) => {
      E(this, Vt).call(this, e, `document_${e.type}`);
    }), W(this, Gs, (e, s, i) => {
      const { row: o, col: r } = s;
      s.value = this.getCellValue(o, r), e[0] = s.value;
      const a = o.id === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return E(this, nt).forEach((l) => {
        l[a] && (e = l[a].call(this, e, s, i));
      }), this.options[a] && (e = this.options[a].call(this, e, s, i)), r.setting[a] && (e = r.setting[a].call(this, e, s, i)), e;
    }), W(this, ys, (e, s) => {
      s === "horz" ? this.scroll({ scrollLeft: e }) : this.scroll({ scrollTop: e });
    }), W(this, Fi, (e) => {
      var a, l, h;
      const s = this.getPointerInfo(e);
      if (!s)
        return;
      const { rowID: i, colName: o, cellElement: r } = s;
      if (i === "HEADER")
        r && ((a = this.options.onHeaderCellClick) == null || a.call(this, e, { colName: o, element: r }), E(this, nt).forEach((d) => {
          var c;
          (c = d.onHeaderCellClick) == null || c.call(this, e, { colName: o, element: r });
        }));
      else {
        const d = this.layout.visibleRows.find((c) => c.id === i);
        if (r) {
          if (((l = this.options.onCellClick) == null ? void 0 : l.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
            return;
          for (const c of E(this, nt))
            if (((h = c.onCellClick) == null ? void 0 : h.call(this, e, { colName: o, rowID: i, rowInfo: d, element: r })) === !0)
              return;
        }
      }
    }), W(this, zi, (e) => {
      const s = e.key.toLowerCase();
      if (["pageup", "pagedown", "home", "end"].includes(s))
        return !this.scroll({ to: s.replace("page", "") });
    }), W(this, Vi, (e) => {
      const s = u(e.target).closest(".dtable-cell");
      if (!s.length)
        return lt(this, en, Jn).call(this, !1);
      lt(this, en, Jn).call(this, [s.attr("data-row"), s.attr("data-col")]);
    }), W(this, Ui, () => {
      lt(this, en, Jn).call(this, !1);
    }), U(this, Ze, t.id ?? `dtable-${Da(10)}`), this.state = { scrollTop: 0, scrollLeft: 0, renderCount: 0 }, U(this, oe, Object.freeze(bd(t.plugins))), E(this, oe).forEach((e) => {
      var r;
      const { methods: s, data: i, state: o } = e;
      s && Object.entries(s).forEach(([a, l]) => {
        typeof l == "function" && Object.assign(this, { [a]: l.bind(this) });
      }), i && Object.assign(E(this, Je), i.call(this)), o && Object.assign(this.state, o.call(this)), (r = e.onCreate) == null || r.call(this, e);
    });
  }
  get options() {
    var t;
    return ((t = E(this, Nt)) == null ? void 0 : t.options) || E(this, It) || wl();
  }
  get plugins() {
    return E(this, nt);
  }
  get layout() {
    return E(this, Nt);
  }
  get id() {
    return E(this, Ze);
  }
  get data() {
    return E(this, Je);
  }
  get element() {
    return this.ref.current;
  }
  get parent() {
    var t;
    return this.props.parent ?? ((t = this.element) == null ? void 0 : t.parentElement);
  }
  get hoverInfo() {
    return E(this, ln);
  }
  componentWillReceiveProps() {
    U(this, It, void 0);
  }
  componentDidMount() {
    E(this, de) ? this.forceUpdate() : lt(this, Zn, Hi).call(this), E(this, nt).forEach((e) => {
      let { events: s } = e;
      s && (typeof s == "function" && (s = s.call(this)), Object.entries(s).forEach(([i, o]) => {
        o && this.on(i, o);
      }));
    }), this.on("click", E(this, Fi)), this.on("keydown", E(this, zi));
    const { options: t } = this;
    if ((t.rowHover || t.colHover) && (this.on("mouseover", E(this, Vi)), this.on("mouseleave", E(this, Ui))), t.responsive)
      if (typeof ResizeObserver < "u") {
        const { parent: e } = this;
        if (e) {
          const s = new ResizeObserver(this.updateLayout);
          s.observe(e), U(this, Xn, s);
        }
      } else
        this.on("window_resize", this.updateLayout);
    E(this, nt).forEach((e) => {
      var s;
      (s = e.onMounted) == null || s.call(this);
    });
  }
  componentDidUpdate() {
    E(this, de) ? lt(this, Zn, Hi).call(this) : E(this, nt).forEach((t) => {
      var e;
      (e = t.onUpdated) == null || e.call(this);
    });
  }
  componentWillUnmount() {
    var e;
    (e = E(this, Xn)) == null || e.disconnect();
    const { element: t } = this;
    if (t)
      for (const s of E(this, Mt).keys())
        s.startsWith("window_") ? window.removeEventListener(s.replace("window_", ""), E(this, Qe)) : s.startsWith("document_") ? document.removeEventListener(s.replace("document_", ""), E(this, tn)) : t.removeEventListener(s, E(this, Vt));
    E(this, nt).forEach((s) => {
      var i;
      (i = s.onUnmounted) == null || i.call(this);
    }), E(this, oe).forEach((s) => {
      var i;
      (i = s.onDestory) == null || i.call(this);
    }), U(this, Je, {}), E(this, Mt).clear();
  }
  on(t, e, s) {
    var o;
    s && (t = `${s}_${t}`);
    const i = E(this, Mt).get(t);
    i ? i.push(e) : (E(this, Mt).set(t, [e]), t.startsWith("window_") ? window.addEventListener(t.replace("window_", ""), E(this, Qe)) : t.startsWith("document_") ? document.addEventListener(t.replace("document_", ""), E(this, tn)) : (o = this.element) == null || o.addEventListener(t, E(this, Vt)));
  }
  off(t, e, s) {
    var r;
    s && (t = `${s}_${t}`);
    const i = E(this, Mt).get(t);
    if (!i)
      return;
    const o = i.indexOf(e);
    o >= 0 && i.splice(o, 1), i.length || (E(this, Mt).delete(t), t.startsWith("window_") ? window.removeEventListener(t.replace("window_", ""), E(this, Qe)) : t.startsWith("document_") ? document.removeEventListener(t.replace("document_", ""), E(this, tn)) : (r = this.element) == null || r.removeEventListener(t, E(this, Vt)));
  }
  emitCustomEvent(t, e) {
    E(this, Vt).call(this, e instanceof Event ? e : new CustomEvent(t, { detail: e }), t);
  }
  scroll(t, e) {
    const { scrollLeft: s, scrollTop: i, rowsHeightTotal: o, rowsHeight: r, rowHeight: a, cols: { center: { totalWidth: l, width: h } } } = this.layout, { to: d } = t;
    let { scrollLeft: c, scrollTop: p } = t;
    if (d === "up" || d === "down")
      p = i + (d === "down" ? 1 : -1) * Math.floor(r / a) * a;
    else if (d === "left" || d === "right")
      c = s + (d === "right" ? 1 : -1) * h;
    else if (d === "top")
      p = 0;
    else if (d === "bottom")
      p = o - r;
    else if (d === "begin")
      c = 0;
    else if (d === "end")
      c = l - h;
    else {
      const { offsetLeft: g, offsetTop: y } = t;
      typeof g == "number" && (c = s + g), typeof y == "number" && (c = i + y);
    }
    const m = {};
    return typeof c == "number" && (c = Math.max(0, Math.min(c, l - h)), c !== s && (m.scrollLeft = c)), typeof p == "number" && (p = Math.max(0, Math.min(p, o - r)), p !== i && (m.scrollTop = p)), Object.keys(m).length ? (this.setState(m, () => {
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
    const { rows: e, rowsMap: s, allRows: i } = this.layout;
    return typeof t == "number" ? e[t] : s[t] || i.find((o) => o.id === t);
  }
  getCellValue(t, e) {
    var a;
    const s = typeof t == "object" ? t : this.getRowInfo(t);
    if (!s)
      return;
    const i = typeof e == "object" ? e : this.getColInfo(e);
    if (!i)
      return;
    let o = s.id === "HEADER" ? i.setting.title : (a = s.data) == null ? void 0 : a[i.name];
    const { cellValueGetter: r } = this.options;
    return r && (o = r.call(this, s, i, o)), o;
  }
  getRowInfoByIndex(t) {
    return this.layout.rows[t];
  }
  update(t = {}, e) {
    if (!E(this, It))
      return;
    typeof t == "function" && (e = t, t = {});
    const { dirtyType: s, state: i } = t;
    if (s === "layout")
      U(this, Nt, void 0);
    else if (s === "options") {
      if (U(this, It, void 0), !E(this, Nt))
        return;
      U(this, Nt, void 0);
    }
    this.setState(i ?? ((o) => ({ renderCount: o.renderCount + 1 })), e);
  }
  getPointerInfo(t) {
    const e = t.target;
    if (!e || e.closest(".no-cell-event"))
      return;
    const s = u(e).closest(".dtable-cell");
    if (!s.length)
      return;
    const i = s.attr("data-row"), o = s.attr("data-col");
    if (!(typeof o != "string" || typeof i != "string"))
      return {
        cellElement: s[0],
        colName: o,
        rowID: i,
        target: e
      };
  }
  i18n(t, e, s) {
    return G(E(this, gs), t, e, s, this.options.lang) ?? `{i18n:${t}}`;
  }
  getPlugin(t) {
    return this.plugins.find((e) => e.name === t);
  }
  render() {
    let t = lt(this, ji, Sl).call(this);
    const { className: e, rowHover: s, colHover: i, cellHover: o, bordered: r, striped: a, scrollbarHover: l, beforeRender: h } = this.options, d = {}, c = ["dtable", e, {
      "dtable-hover-row": s,
      "dtable-hover-col": i,
      "dtable-hover-cell": o,
      "dtable-bordered": r,
      "dtable-striped": a,
      "scrollbar-hover": l
    }], p = [];
    if (t) {
      if (c.push(t.className), h) {
        const m = h.call(this, t);
        m && (t = m);
      }
      E(this, nt).forEach((m) => {
        var y;
        const g = (y = m.beforeRender) == null ? void 0 : y.call(this, t);
        g && (t = g);
      }), d.width = t.width, d.height = t.height, d["--dtable-row-height"] = `${t.rowHeight}px`, c.push({
        "dtable-scrolled-down": t.scrollTop > 0,
        "dtable-scrolled-bottom": t.scrollTop >= t.rowsHeightTotal - t.rowsHeight,
        "dtable-scrolled-right": t.scrollLeft > 0,
        "dtable-scrolled-end": t.scrollLeft >= t.cols.center.totalWidth - t.cols.center.width
      }), t.children && p.push(...t.children), p.push(
        lt(this, Li, Cl).call(this, t),
        lt(this, Wi, kl).call(this, t),
        lt(this, Oi, $l).call(this, t)
      ), t.scrollable && p.push(lt(this, Bi, xl).call(this, t)), E(this, nt).forEach((m) => {
        var y;
        const g = (y = m.onRender) == null ? void 0 : y.call(this, t);
        g && (g.style && Object.assign(d, g.style), g.className && c.push(g.className), g.children && p.push(g.children));
      });
    }
    return /* @__PURE__ */ f(
      "div",
      {
        id: E(this, Ze),
        className: x(c),
        style: d,
        ref: this.ref,
        tabIndex: -1,
        children: p
      }
    );
  }
};
Ce = /* @__PURE__ */ new WeakMap();
Ze = /* @__PURE__ */ new WeakMap();
de = /* @__PURE__ */ new WeakMap();
It = /* @__PURE__ */ new WeakMap();
oe = /* @__PURE__ */ new WeakMap();
nt = /* @__PURE__ */ new WeakMap();
Nt = /* @__PURE__ */ new WeakMap();
Mt = /* @__PURE__ */ new WeakMap();
Je = /* @__PURE__ */ new WeakMap();
Xn = /* @__PURE__ */ new WeakMap();
gs = /* @__PURE__ */ new WeakMap();
ln = /* @__PURE__ */ new WeakMap();
Vt = /* @__PURE__ */ new WeakMap();
Qe = /* @__PURE__ */ new WeakMap();
tn = /* @__PURE__ */ new WeakMap();
Li = /* @__PURE__ */ new WeakSet();
Cl = function(n) {
  const { header: t, cols: e, headerHeight: s, scrollLeft: i, headerChildren: o } = n;
  if (!t)
    return null;
  if (t === !0)
    return /* @__PURE__ */ f(
      bl,
      {
        className: "dtable-header",
        cols: e,
        height: s,
        scrollLeft: i,
        rowHeight: s,
        scrollTop: 0,
        rows: { id: "HEADER", index: -1, top: 0 },
        top: 0,
        onRenderCell: E(this, Gs),
        children: o
      },
      "header"
    );
  const r = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    uo,
    {
      className: "dtable-header",
      style: { height: s },
      renders: r,
      generateArgs: [n],
      generatorThis: this,
      children: o
    },
    "header"
  );
};
Wi = /* @__PURE__ */ new WeakSet();
kl = function(n) {
  const { headerHeight: t, rowsHeight: e, visibleRows: s, rowHeight: i, cols: o, scrollLeft: r, scrollTop: a, bodyChildren: l } = n;
  return /* @__PURE__ */ f(
    bl,
    {
      className: "dtable-body",
      top: t,
      height: e,
      rows: s,
      rowHeight: i,
      scrollLeft: r,
      scrollTop: a,
      cols: o,
      onRenderCell: E(this, Gs),
      children: l
    },
    "body"
  );
};
Oi = /* @__PURE__ */ new WeakSet();
$l = function(n) {
  let { footer: t } = n;
  if (typeof t == "function" && (t = t.call(this, n)), !t)
    return null;
  const e = Array.isArray(t) ? t : [t];
  return /* @__PURE__ */ f(
    uo,
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
Bi = /* @__PURE__ */ new WeakSet();
xl = function(n) {
  const t = [], { scrollLeft: e, cols: { left: { width: s }, center: { width: i, totalWidth: o } }, scrollTop: r, rowsHeight: a, rowsHeightTotal: l, footerHeight: h, headerHeight: d } = n, { scrollbarSize: c = 12, horzScrollbarPos: p } = this.options;
  return o > i && t.push(
    /* @__PURE__ */ f(
      gr,
      {
        type: "horz",
        scrollPos: e,
        scrollSize: o,
        clientSize: i,
        onScroll: E(this, ys),
        left: s,
        bottom: (p === "inside" ? 0 : -c) + h,
        size: c,
        wheelContainer: this.ref
      },
      "horz"
    ),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-left", style: { left: s, height: d + a } }),
    /* @__PURE__ */ f("div", { className: "dtable-scroll-shadow is-right", style: { left: s + i, height: d + a } })
  ), l > a && t.push(
    /* @__PURE__ */ f(
      gr,
      {
        type: "vert",
        scrollPos: r,
        scrollSize: l,
        clientSize: a,
        onScroll: E(this, ys),
        right: 0,
        size: c,
        top: d,
        wheelContainer: this.ref
      },
      "vert"
    )
  ), t.length ? t : null;
};
Zn = /* @__PURE__ */ new WeakSet();
Hi = function() {
  var n;
  U(this, de, !1), (n = this.options.afterRender) == null || n.call(this), E(this, nt).forEach((t) => {
    var e;
    return (e = t.afterRender) == null ? void 0 : e.call(this);
  });
};
Gs = /* @__PURE__ */ new WeakMap();
ys = /* @__PURE__ */ new WeakMap();
Fi = /* @__PURE__ */ new WeakMap();
zi = /* @__PURE__ */ new WeakMap();
Vi = /* @__PURE__ */ new WeakMap();
Ui = /* @__PURE__ */ new WeakMap();
en = /* @__PURE__ */ new WeakSet();
Jn = function(n) {
  const { element: t, options: e } = this;
  if (!t)
    return;
  const s = u(t), i = n ? { in: !0, row: n[0], col: n[1] } : { in: !1 };
  e.colHover === "header" && i.row !== "HEADER" && (i.col = void 0);
  const o = E(this, ln);
  i.in !== o.in && s.toggleClass("dtable-hover", i.in), i.row !== o.row && (s.find(".is-hover-row").removeClass("is-hover-row"), i.row && s.find(`.dtable-cell[data-row="${i.row}"]`).addClass("is-hover-row")), i.col !== o.col && (s.find(".is-hover-col").removeClass("is-hover-col"), i.col && s.find(`.dtable-cell[data-col="${i.col}"]`).addClass("is-hover-col")), U(this, ln, i);
};
Ro = /* @__PURE__ */ new WeakSet();
Tl = function() {
  if (E(this, It))
    return !1;
  const t = { ...wl(), ...E(this, oe).reduce((e, s) => {
    const { defaultOptions: i } = s;
    return i && Object.assign(e, i), e;
  }, {}), ...this.props };
  return U(this, It, t), U(this, nt, E(this, oe).reduce((e, s) => {
    const { when: i, options: o } = s;
    let r = t;
    return o && (r = Object.assign({ ...r }, typeof o == "function" ? o.call(this, t) : o)), (!i || i(r)) && (r !== t && Object.assign(t, r), e.push(s)), e;
  }, [])), U(this, gs, [this.options.i18n, ...this.plugins.map((e) => e.i18n)].filter(Boolean)), !0;
};
Lo = /* @__PURE__ */ new WeakSet();
El = function() {
  var R, I;
  const { plugins: n } = this;
  let t = E(this, It);
  const e = {
    flex: /* @__PURE__ */ f("div", { style: "flex:auto" }),
    divider: /* @__PURE__ */ f("div", { style: "width:1px;margin:var(--space);background:var(--color-border);height:50%" })
  };
  n.forEach((N) => {
    var F;
    const P = (F = N.beforeLayout) == null ? void 0 : F.call(this, t);
    P && (t = { ...t, ...P }), Object.assign(e, N.footer);
  });
  let s = t.width, i = 0;
  if (typeof s == "function" && (s = s.call(this)), s === "100%") {
    const { parent: N } = this;
    if (N)
      i = N.clientWidth;
    else {
      U(this, de, !0);
      return;
    }
  }
  const o = kd(this, t, n, i), { data: r, rowKey: a = "id", rowHeight: l } = t, h = [], d = (N, P, F) => {
    var H, it;
    const M = { data: F ?? { [a]: N }, id: N, index: h.length, top: 0 };
    if (F || (M.lazy = !0), h.push(M), ((H = t.onAddRow) == null ? void 0 : H.call(this, M, P)) !== !1) {
      for (const mt of n)
        if (((it = mt.onAddRow) == null ? void 0 : it.call(this, M, P)) === !1)
          return;
    }
  };
  if (typeof r == "number")
    for (let N = 0; N < r; N++)
      d(`${N}`, N);
  else
    Array.isArray(r) && r.forEach((N, P) => {
      typeof N == "object" ? d(`${N[a] ?? ""}`, P, N) : d(`${N ?? ""}`, P);
    });
  let c = h;
  const p = {};
  if (t.onAddRows) {
    const N = t.onAddRows.call(this, c);
    N && (c = N);
  }
  for (const N of n) {
    const P = (R = N.onAddRows) == null ? void 0 : R.call(this, c);
    P && (c = P);
  }
  c.forEach((N, P) => {
    p[N.id] = N, N.index = P, N.top = N.index * l;
  });
  const { header: m, footer: g } = t, y = m ? t.headerHeight || l : 0, v = g ? t.footerHeight || l : 0;
  let _ = t.height, w = 0;
  const k = c.length * l, $ = y + v + k;
  if (typeof _ == "function" && (_ = _.call(this, $)), _ === "auto")
    w = $;
  else if (typeof _ == "object")
    w = Math.min(_.max, Math.max(_.min, $));
  else if (_ === "100%") {
    const { parent: N } = this;
    if (N)
      w = N.clientHeight;
    else {
      w = 0, U(this, de, !0);
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
    cols: o
  }, A = (I = t.onLayout) == null ? void 0 : I.call(this, S);
  A && Object.assign(S, A), n.forEach((N) => {
    if (N.onLayout) {
      const P = N.onLayout.call(this, S);
      P && Object.assign(S, P);
    }
  }), U(this, Nt, S);
};
ji = /* @__PURE__ */ new WeakSet();
Sl = function() {
  (lt(this, Ro, Tl).call(this) || !E(this, Nt)) && lt(this, Lo, El).call(this);
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
  const { rowsHeightTotal: i, rowsHeight: o, rows: r, rowHeight: a } = n, l = Math.min(Math.max(0, i - o), this.state.scrollTop), h = Math.floor(l / a), d = l + o, c = Math.min(r.length, Math.ceil(d / a)), p = [], { rowDataGetter: m } = this.options;
  for (let g = h; g < c; g++) {
    const y = r[g];
    y.lazy && m && (y.data = m([y.id])[0], y.lazy = !1), p.push(y);
  }
  return Object.assign(n, {
    visibleRows: p,
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
Wo.addPlugin = yl;
Wo.removePlugin = _l;
const xd = {
  html: { component: $n }
}, Td = {
  name: "custom",
  onRenderCell(n, t) {
    const { col: e } = t;
    let { custom: s } = e.setting;
    if (typeof s == "function" && (s = s.call(this, t)), !s)
      return n;
    const i = Array.isArray(s) ? s : [s], { customMap: o } = this.options;
    return i.forEach((r) => {
      let a;
      typeof r == "string" ? a = r.startsWith("<") ? {
        component: $n,
        props: { html: K(r, { value: t.value, ...t.row.data, $value: t.value }) }
      } : {
        component: r
      } : a = r;
      let { component: l } = a;
      const h = [a];
      typeof l == "string" && h.unshift(xd[l], o == null ? void 0 : o[l]);
      const d = {};
      h.forEach((p) => {
        if (p) {
          const { props: m } = p;
          m && u.extend(d, typeof m == "function" ? m.call(this, t) : m), l = p.component || l;
        }
      }, { props: {} });
      const c = l;
      n[0] = { outer: !0, className: "dtable-custom-cell", children: /* @__PURE__ */ f(c, { ...d }) };
    }), n;
  }
}, Ed = Ht(Td);
class Ml extends O {
  render(t) {
    const { percent: e = 50, color: s, background: i = null, height: o, width: r, children: a, className: l, style: h } = t;
    return /* @__PURE__ */ f("div", { class: x("progress", l), style: {
      width: r,
      height: o,
      "--progress-bg": i,
      "--progress-bar-color": s,
      ...h
    }, children: [
      /* @__PURE__ */ f("div", { class: "progress-bar", style: { width: `${e}%` } }),
      a
    ] });
  }
}
Ml.defaultProps = {
  percent: 50,
  height: 20,
  width: "auto"
};
function Nl(n, t, e, s) {
  if (typeof n == "function" && (n = n(t)), typeof n == "string" && n.length && (n = { url: n }), !n)
    return e;
  const { url: i, ...o } = n, { setting: r } = t.col, a = {};
  return r && Object.keys(r).forEach((l) => {
    l.startsWith("data-") && (a[l] = r[l]);
  }), /* @__PURE__ */ f("a", { href: K(i, t.row.data), ...s, ...o, ...a, children: e });
}
function Oo(n, t, e) {
  var s;
  if (n != null)
    return e = e ?? ((s = t.row.data) == null ? void 0 : s[t.col.name]), typeof n == "function" ? n(e, t) : K(n, e);
}
function Dl(n, t, e, s) {
  var i;
  return e ? (e = e ?? ((i = t.row.data) == null ? void 0 : i[t.col.name]), n === !1 ? e : (n === !0 && (n = "[yyyy-]MM-dd hh:mm"), typeof n == "function" && (n = n(e, t)), tt(e, n, s ?? e))) : s ?? e;
}
function Al(n, t) {
  const { link: e } = t.col.setting, s = Nl(e, t, n[0]);
  return s && (n[0] = s), n;
}
function Pl(n, t) {
  const { format: e } = t.col.setting;
  return e && (n[0] = Oo(e, t, n[0])), n;
}
function Il(n, t) {
  const { map: e } = t.col.setting;
  return typeof e == "function" ? n[0] = e(n[0], t) : typeof e == "object" && e && (n[0] = e[n[0]] ?? n[0]), n;
}
function Rl(n, t, e = "[yyyy-]MM-dd hh:mm") {
  const { formatDate: s = e, invalidDate: i } = t.col.setting;
  return n[0] = Dl(s, t, n[0], i), n;
}
function qi(n, t, e = !1) {
  const { html: s = e } = t.col.setting;
  if (s === !1)
    return n;
  const i = n[0], o = s === !0 ? i : Oo(s, t, i);
  return n[0] = {
    html: o
  }, n;
}
const Sd = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(n, t) {
        return qi(n, t, !0);
      }
    },
    progress: {
      align: "center",
      onRenderCell(n, { col: t }) {
        const { progressType: e, barColor: s, barBgColor: i, barHeight: o = 6, barWidth: r = 64, circleSize: a = 24, circleBorderSize: l = 1, circleBgColor: h = "var(--color-border)", circleColor: d = "var(--color-success-500)" } = t.setting, c = n[0];
        return n[0] = e === "bar" ? /* @__PURE__ */ f(
          Ml,
          {
            className: "rounded-full",
            width: r,
            height: o,
            color: s || d,
            background: i,
            percent: c
          }
        ) : /* @__PURE__ */ f(
          $o,
          {
            percent: c,
            size: a,
            circleWidth: l,
            circleBg: h,
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
    const { formatDate: e, html: s, hint: i } = t.col.setting;
    if (e && (n = Rl(n, t, e)), n = Il(n, t), n = Pl(n, t), s ? n = qi(n, t) : n = Al(n, t), i) {
      let o = n[0];
      typeof i == "function" ? o = i.call(this, t) : typeof i == "string" && (o = K(i, t.row.data)), n.push({ attrs: { title: o } });
    }
    return n;
  }
}, Md = Ht(Sd, { buildIn: !0 });
function Nd(n, t, e = !1) {
  var a, l;
  typeof n == "boolean" && (t = n, n = void 0);
  const s = this.state.checkedRows, i = {}, { canRowCheckable: o } = this.options, r = (h, d) => {
    const c = o ? o.call(this, h) : !0;
    !c || e && c === "disabled" || !!s[h] === d || (d ? s[h] = !0 : delete s[h], i[h] = d);
  };
  if (n === void 0 ? (t === void 0 && (t = !Ll.call(this)), (a = this.layout) == null || a.allRows.forEach(({ id: h }) => {
    r(h, !!t);
  })) : (Array.isArray(n) || (n = [n]), n.forEach((h) => {
    r(h, t ?? !s[h]);
  })), Object.keys(i).length) {
    const h = (l = this.options.beforeCheckRows) == null ? void 0 : l.call(this, n, i, s);
    h && Object.keys(h).forEach((d) => {
      h[d] ? s[d] = !0 : delete s[d];
    }), this.setState({ checkedRows: { ...s } }, () => {
      var d;
      (d = this.options.onCheckChange) == null || d.call(this, i);
    });
  }
  return i;
}
function Dd(n) {
  return this.state.checkedRows[n] ?? !1;
}
function Ll() {
  var s, i;
  const n = (s = this.layout) == null ? void 0 : s.allRows.length;
  if (!n)
    return !1;
  const t = this.getChecks().length, { canRowCheckable: e } = this.options;
  return e ? t === ((i = this.layout) == null ? void 0 : i.allRows.reduce((o, r) => o + (e.call(this, r.id) ? 1 : 0), 0)) : t === n;
}
function Ad() {
  return Object.keys(this.state.checkedRows);
}
function Pd(n) {
  const { checkable: t } = this.options;
  n === void 0 && (n = !t), t !== n && this.setState({ forceCheckable: n });
}
function _r(n, t, e = !1) {
  return /* @__PURE__ */ f("div", { class: `checkbox-primary dtable-checkbox${n ? " checked" : ""}${e ? " disabled" : ""}`, children: /* @__PURE__ */ f("label", {}) });
}
const vr = 'input[type="checkbox"],.dtable-checkbox', Id = {
  name: "checkable",
  defaultOptions: {
    checkable: "auto",
    checkboxRender: _r
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
    toggleCheckRows: Nd,
    isRowChecked: Dd,
    isAllRowChecked: Ll,
    getChecks: Ad,
    toggleCheckable: Pd
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
        /* @__PURE__ */ f("div", { style: { paddingRight: "calc(3*var(--space))", display: "flex", alignItems: "center" }, onClick: () => this.toggleCheckRows(), children: _r(n) })
      ];
    },
    checkedInfo(n, t) {
      const e = this.getChecks(), { checkInfo: s } = this.options;
      if (s)
        return [s.call(this, e)];
      const i = e.length, o = [];
      return i && o.push(this.i18n("checkedCountInfo", { selected: i })), o.push(this.i18n("totalCountInfo", { total: t.allRows.length })), [
        /* @__PURE__ */ f("div", { children: o.join(", ") })
      ];
    }
  },
  onRenderCell(n, { row: t, col: e }) {
    var h;
    const { id: s } = t, { canRowCheckable: i } = this.options, o = i ? i.call(this, s) : !0;
    if (!o)
      return n;
    const { checkbox: r } = e.setting, a = typeof r == "function" ? r.call(this, s) : r, l = this.isRowChecked(s);
    if (a) {
      const d = (h = this.options.checkboxRender) == null ? void 0 : h.call(this, l, s, o === "disabled");
      n.unshift(d), n.push({ outer: !0, className: "has-checkbox" });
    }
    return l && n.push({ outer: !0, className: "is-checked" }), n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var r;
    const { id: s } = t, { checkbox: i } = e.setting;
    if (typeof i == "function" ? i.call(this, s) : i) {
      const a = this.isAllRowChecked(), l = (r = this.options.checkboxRender) == null ? void 0 : r.call(this, a, s);
      n.unshift(l), n.push({ outer: !0, className: "has-checkbox" });
    }
    return n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!t)
      return;
    const e = t.closest(vr);
    e && this.toggleCheckRows(e.checked);
  },
  onCellClick(n, { rowID: t }) {
    const e = u(n.target);
    if (!e.length || e.closest("btn,a,button.not-checkable,.form-control,.btn").length)
      return;
    (e.closest(vr).not(".disabled").length || this.options.checkOnClickRow) && this.toggleCheckRows(t, void 0, !0);
  }
}, Rd = Ht(Id);
var Wl = /* @__PURE__ */ ((n) => (n.unknown = "", n.collapsed = "collapsed", n.expanded = "expanded", n.hidden = "hidden", n.normal = "normal", n))(Wl || {});
function _s(n) {
  const t = this.data.nestedMap.get(n);
  if (!t || t.state !== "")
    return t ?? { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, s = t.children && e && e[n];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = _s.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : s ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? _s.call(this, t.parent).level + 1 : 0, t;
}
function Ld(n) {
  return n !== void 0 ? _s.call(this, n) : this.data.nestedMap;
}
function Wd(n, t) {
  let e = this.state.collapsedRows ?? {};
  const { nestedMap: s } = this.data;
  if (n === "HEADER")
    if (t === void 0 && (t = !Ol.call(this)), t) {
      const i = s.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (e[o] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(n) ? n : [n];
    t === void 0 && (t = !e[i[0]]), i.forEach((o) => {
      const r = s.get(o);
      t && (r != null && r.children) ? e[o] = !0 : delete e[o];
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
function Ol() {
  const n = this.data.nestedMap.values();
  for (const t of n)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function Bl(n, t = 0, e, s = 0) {
  var i;
  e || (e = [...n.keys()]);
  for (const o of e) {
    const r = n.get(o);
    r && (r.level === s && (r.order = t++), (i = r.children) != null && i.length && (t = Bl(n, t, r.children, s + 1)));
  }
  return t;
}
function Hl(n, t, e, s) {
  const i = n.getNestedRowInfo(t);
  return !i || i.state === "" || !i.children || i.children.forEach((o) => {
    s[o] = e, Hl(n, o, e, s);
  }), i;
}
function Fl(n, t, e, s, i) {
  var a;
  const o = n.getNestedRowInfo(t);
  if (!o || o.state === "")
    return;
  ((a = o.children) == null ? void 0 : a.every((l) => {
    const h = !!(s[l] !== void 0 ? s[l] : i[l]);
    return e === h;
  })) && (s[t] = e), o.parent && Fl(n, o.parent, e, s, i);
}
const Od = {
  name: "nested",
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
      if (!this.options.checkable || !(n != null && n.length))
        return;
      const s = {};
      return Object.entries(t).forEach(([i, o]) => {
        const r = Hl(this, i, o, s);
        r != null && r.parent && Fl(this, r.parent, o, s, e);
      }), s;
    }
  },
  options(n) {
    return n.nested === "auto" && (n.nested = !!n.cols.some((t) => t.nestedToggle)), n;
  },
  when: (n) => !!n.nested,
  data() {
    return { nestedMap: /* @__PURE__ */ new Map() };
  },
  methods: {
    getNestedInfo: Ld,
    toggleRow: Wd,
    isAllCollapsed: Ol,
    getNestedRowInfo: _s
  },
  beforeLayout() {
    var n;
    (n = this.data.nestedMap) == null || n.clear();
  },
  onAddRow(n) {
    var i, o;
    const { nestedMap: t } = this.data, e = String((i = n.data) == null ? void 0 : i[this.options.nestedParentKey ?? "parent"]), s = t.get(n.id) ?? {
      state: "",
      level: 0
    };
    if (s.parent = e === "0" ? void 0 : e, (o = n.data) != null && o[this.options.asParentKey ?? "asParent"] && (s.children = []), t.set(n.id, s), e) {
      let r = t.get(e);
      r || (r = {
        state: "",
        level: 0
      }, t.set(e, r)), r.children || (r.children = []), r.children.push(n.id);
    }
  },
  onAddRows(n) {
    return n = n.filter(
      (t) => this.getNestedRowInfo(t.id).state !== "hidden"
      /* hidden */
    ), Bl(this.data.nestedMap), n.sort((t, e) => {
      const s = this.getNestedRowInfo(t.id), i = this.getNestedRowInfo(e.id), o = (s.order ?? 0) - (i.order ?? 0);
      return o === 0 ? t.index - e.index : o;
    }), n;
  },
  onRenderCell(n, { col: t, row: e }) {
    var a;
    const { id: s, data: i } = e, { nestedToggle: o } = t.setting, r = this.getNestedRowInfo(s);
    if (o && (r.children || r.parent) && n.unshift(
      ((a = this.options.onRenderNestedToggle) == null ? void 0 : a.call(this, r, s, t, i)) ?? /* @__PURE__ */ f("a", { className: `dtable-nested-toggle state${r.children ? "" : " is-no-child"}`, children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${r.state}` }
    ), r.level) {
      let { nestedIndent: l = o } = t.setting;
      l && (l === !0 && (l = this.options.nestedIndent ?? 12), n.unshift(/* @__PURE__ */ f("div", { className: "dtable-nested-indent", style: { width: l * r.level + "px" } })));
    }
    return n;
  },
  onRenderHeaderCell(n, { row: t, col: e }) {
    var i;
    const { id: s } = t;
    return e.setting.nestedToggle && n.unshift(
      ((i = this.options.onRenderNestedToggle) == null ? void 0 : i.call(this, void 0, s, e, void 0)) ?? /* @__PURE__ */ f("a", { className: "dtable-nested-toggle state", children: /* @__PURE__ */ f("span", { className: "toggle-icon" }) }),
      { outer: !0, className: `is-${this.isAllCollapsed() ? "collapsed" : "expanded"}` }
    ), n;
  },
  onHeaderCellClick(n) {
    const t = n.target;
    if (!(!t || !t.closest(".dtable-nested-toggle")))
      return this.toggleRow("HEADER"), !0;
  },
  onCellClick(n, { rowID: t }) {
    const e = n.target;
    if (!(!e || !this.getNestedRowInfo(t).children || !e.closest(".dtable-nested-toggle")))
      return this.toggleRow(t), !0;
  }
}, Bd = Ht(Od);
function li(n, { row: t, col: e }) {
  const { data: s } = t, i = s ? s[e.name] : void 0;
  if (!(i != null && i.length))
    return n;
  const { avatarClass: o = "rounded-full", avatarKey: r = `${e.name}Avatar`, avatarProps: a, avatarCodeKey: l, avatarNameKey: h = `${e.name}Name` } = e.setting, d = (s ? s[h] : i) || n[0], c = {
    size: "xs",
    className: x(o, a == null ? void 0 : a.className, "flex-none"),
    src: s ? s[r] : void 0,
    text: d,
    code: l ? s ? s[l] : void 0 : i,
    ...a
  };
  if (n[0] = /* @__PURE__ */ f(Aa, { ...c }), e.type === "avatarBtn") {
    const { avatarBtnProps: p } = e.setting, m = typeof p == "function" ? p(e, t) : p;
    n[0] = /* @__PURE__ */ f("button", { type: "button", className: "btn btn-avatar", ...m, children: [
      n[0],
      /* @__PURE__ */ f("div", { children: d })
    ] });
  } else
    e.type === "avatarName" && (n[0] = /* @__PURE__ */ f("div", { className: "flex items-center gap-1", children: [
      n[0],
      /* @__PURE__ */ f("span", { children: d })
    ] }));
  return n;
}
const Hd = {
  name: "avatar",
  colTypes: {
    avatar: {
      onRenderCell: li
    },
    avatarBtn: {
      onRenderCell: li
    },
    avatarName: {
      onRenderCell: li
    }
  }
}, Fd = Ht(Hd, { buildIn: !0 }), zd = {
  name: "sort-type",
  onRenderHeaderCell(n, t) {
    const { col: e } = t, { sortType: s } = e.setting;
    if (s) {
      const i = s === !0 ? "none" : s;
      n.push(
        /* @__PURE__ */ f("div", { className: `dtable-sort dtable-sort-${i}` }),
        { outer: !0, attrs: { "data-sort": i } }
      );
      let { sortLink: o = this.options.sortLink } = e.setting;
      if (o) {
        const r = i === "asc" ? "desc" : "asc";
        typeof o == "function" && (o = o.call(this, e, r, i)), typeof o == "string" && (o = { url: o });
        const { url: a, ...l } = o;
        n[0] = /* @__PURE__ */ f("a", { href: K(a, { ...e.setting, sortType: r }), ...l, children: n[0] });
      }
    }
    return n;
  }
}, Vd = Ht(zd, { buildIn: !0 }), ci = (n) => {
  n.length !== 1 && n.forEach((t, e) => {
    !e || t.setting.border || t.setting.group === n[e - 1].setting.group || (t.setting.border = "left");
  });
}, Ud = {
  name: "group",
  defaultOptions: {
    groupDivider: !0
  },
  when: (n) => !!n.groupDivider,
  onLayout(n) {
    if (!this.options.groupDivider)
      return;
    const { cols: t } = n;
    ci(t.left.list), ci(t.center.list), ci(t.right.list);
  }
}, jd = Ht(Ud), qd = {
  name: "cellspan",
  when: (n) => !!n.getCellSpan,
  data() {
    return { cellSpanMap: /* @__PURE__ */ new Map(), overlayedCellSet: /* @__PURE__ */ new Set() };
  },
  onLayout(n) {
    const { getCellSpan: t } = this.options;
    if (!t)
      return;
    const { cellSpanMap: e, overlayedCellSet: s } = this.data, { rows: i, cols: o, rowHeight: r } = n;
    e.clear(), s.clear();
    const a = (l, h, d) => {
      const { index: c } = h;
      l.forEach((p, m) => {
        const { index: g } = p, y = `C${g}R${c}`;
        if (s.has(y))
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
            S !== y && s.add(S);
          }
        }
        e.set(y, {
          colSpan: _,
          rowSpan: w,
          width: k,
          height: r * w
        });
      });
    };
    i.forEach((l, h) => {
      ["left", "center", "right"].forEach((d) => {
        a(o[d].list, l, h);
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
}, Yd = Ht(qd), Gd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  NestedRowState: Wl,
  avatar: Fd,
  cellspan: Yd,
  checkable: Rd,
  custom: Ed,
  group: jd,
  nested: Bd,
  renderDatetime: Dl,
  renderDatetimeCell: Rl,
  renderFormat: Oo,
  renderFormatCell: Pl,
  renderHtmlCell: qi,
  renderLink: Nl,
  renderLinkCell: Al,
  renderMapCell: Il,
  rich: Md,
  sortType: Vd
}, Symbol.toStringTag, { value: "Module" }));
class Nn extends z {
}
Nn.NAME = "DTable";
Nn.Component = Wo;
Nn.definePlugin = Ht;
Nn.removePlugin = _l;
Nn.plugins = Gd;
var zl = (n, t, e) => {
  if (!t.has(n))
    throw TypeError("Cannot " + e);
}, wr = (n, t, e) => (zl(n, t, "read from private field"), e ? e.call(n) : t.get(n)), Kd = (n, t, e) => {
  if (t.has(n))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(n) : t.set(n, e);
}, br = (n, t, e, s) => (zl(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e), ke;
const Xd = "nav", Qn = '[data-toggle="tab"]', Zd = "active";
class Vl extends at {
  constructor() {
    super(...arguments), Kd(this, ke, 0);
  }
  active(t) {
    const e = this.$element, s = e.find(Qn);
    let i = t ? u(t).closest(Qn) : s.filter(`.${Zd}`);
    if (!i.length && (i = e.find(Qn).first(), !i.length))
      return;
    s.removeClass("active"), i.addClass("active");
    const o = i.attr("href") || i.data("target"), r = i.data("name") || o, a = u(o);
    a.length && (a.parent().children(".tab-pane").removeClass("active in"), a.addClass("active").trigger("show", [r]), this.emit("show", r), wr(this, ke) && clearTimeout(wr(this, ke)), br(this, ke, setTimeout(() => {
      a.addClass("in").trigger("show", [r]), this.emit("shown", r), br(this, ke, 0);
    }, 10)));
  }
}
ke = /* @__PURE__ */ new WeakMap();
Vl.NAME = "Tabs";
u(document).on("click.tabs.zui", Qn, (n) => {
  n.preventDefault();
  const t = u(n.target), e = t.closest(`.${Xd}`);
  e.length && Vl.ensure(e).active(t);
});
u(() => {
  u(".disabled, [disabled]").on("click", (n) => {
    n.preventDefault(), n.stopImmediatePropagation();
  });
});
export {
  u as $,
  oa as ActionMenu,
  aa as ActionMenuNested,
  Pa as Avatar,
  Ia as BtnGroup,
  Oa as ColorPicker,
  at as Component,
  z as ComponentFromReact,
  Po as ContextMenu,
  te as CustomContent,
  uo as CustomRender,
  Nn as DTable,
  gl as Dashboard,
  Ya as DatePicker,
  Ka as DatetimePicker,
  Ea as Draggable,
  bt as Dropdown,
  Ma as EventBus,
  ho as HElement,
  $n as HtmlContent,
  J as Icon,
  la as Menu,
  au as Messager,
  rd as Modal,
  me as ModalBase,
  Pi as ModalTrigger,
  Sa as Moveable,
  tl as Nav,
  el as Pager,
  nl as Pick,
  ll as Picker,
  ct as Popover,
  fo as PopoverPanel,
  cl as Popovers,
  Ta as ProgressCircle,
  O as ReactComponent,
  dl as SearchBox,
  cu as Sortable,
  rn as TIME_DAY,
  Vl as Tabs,
  qa as TimePicker,
  ul as Toolbar,
  Pt as Tooltip,
  fl as Tree,
  Ao as Upload,
  pl as UploadImgs,
  Gh as addDate,
  u as cash,
  x as classes,
  Ve as componentsMap,
  Rc as convertBytes,
  Hc as create,
  V as createDate,
  Zc as createPortal,
  q as createRef,
  Pc as deepGet,
  Ac as deepGetPath,
  Qd as defineFn,
  ss as delay,
  tu as dom,
  Ic as formatBytes,
  tt as formatDate,
  yu as formatDateSpan,
  K as formatString,
  Fr as getClassList,
  is as getComponent,
  X as h,
  eu as hh,
  qc as htm,
  G as i18n,
  Sn as isSameDay,
  Ba as isSameMonth,
  fu as isSameWeek,
  vi as isSameYear,
  pu as isToday,
  gu as isTomorrow,
  Z as isValidElement,
  mu as isYesterday,
  rr as nativeEvents,
  as as render,
  ea as renderCustomContent,
  Gc as renderCustomResult,
  Bc as shareData,
  je as store,
  zr as storeData,
  Vr as takeData
};
//# sourceMappingURL=zui.js.map
