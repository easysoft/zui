var Ot = Object.defineProperty;
var Ut = (s, t, e) => t in s ? Ot(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var y = (s, t, e) => (Ut(s, typeof t != "symbol" ? t + "" : t, e), e), ze = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var d = (s, t, e) => (ze(s, t, "read from private field"), e ? e.call(s) : t.get(s)), M = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, C = (s, t, e, n) => (ze(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var _e = (s, t, e) => (ze(s, t, "access private method"), e);
var L;
class We {
  constructor(t, e) {
    M(this, L, void 0);
    y(this, "submitBtn");
    y(this, "resetBtn");
    y(this, "beforeSubmit");
    y(this, "success");
    y(this, "error");
    y(this, "finish");
    y(this, "ajaxUrl");
    y(this, "formData");
    y(this, "invalid");
    y(this, "timer");
    y(this, "novalidate");
    y(this, "validity");
    y(this, "rules");
    var n;
    if (this.ajaxUrl = "", this.formData = {}, this.timer = null, this.invalid = !1, C(this, L, document.querySelector(`#${t}`)), d(this, L)) {
      this.getAjaxFormData(d(this, L), e), this.ajaxUrl = (d(this, L).action ? d(this, L).action : e.url) || "", this.submitBtn = document.querySelector(`#${t} [data-type=submit]`), this.resetBtn = document.querySelector(`#${t} [data-type=reset]`), this.submitBtn && this.submitBtn.addEventListener("click", () => {
        this.submitForm();
      }), this.resetBtn && this.resetBtn.addEventListener("click", () => this.reset()), d(this, L).addEventListener("keydown", (i) => {
        if (i.target !== this.resetBtn)
          switch (i.keyCode) {
            case 13:
              this.submitForm();
              break;
          }
      }), this.novalidate = ((n = d(this, L).dataset) == null ? void 0 : n.novalidate) === "true";
      const o = [...d(this, L).querySelectorAll(".form-control:not(.disabled)")];
      this.validity = o.every((i) => i == null ? void 0 : i.validity), this.novalidate || o.forEach((i) => {
        i.tagName === "input" ? i.addEventListener("blur", () => {
          this.invalid = !this.validity;
        }) : i.addEventListener("change", () => {
          this.invalid = !this.validity;
        });
      });
    }
  }
  reset() {
    this.invalid = !1, d(this, L).querySelectorAll(".form-control").forEach((e) => {
      this.removeError(e), e.value = null;
    });
  }
  addErrorTip(t, e) {
    const n = t.querySelectorAll(".form-tip");
    n != null && n.length && n.forEach((i) => {
      i.remove();
    });
    const o = document.createElement("div");
    o.innerText = e, o.classList.add("form-tip"), t.classList.add("has-error"), t.append(o);
  }
  removeError(t) {
    var e;
    t.parentElement.classList.remove("has-error"), (e = t.nextElementSibling) != null && e.classList.contains("form-tip") && t.nextElementSibling.remove();
  }
  checkRequired(t, e) {
    if (t.previousSibling.previousElementSibling.classList.contains("required"))
      if (/\S/.test(e))
        this.removeError(t);
      else
        return this.addErrorTip(t.parentElement, `${t.tagName === "INPUT" ? "\u8BF7\u8F93\u5165" : "\u8BF7\u9009\u62E9"}${t.previousElementSibling.innerText}`), !1;
  }
  beforeCheck(t, e, n) {
    var i;
    let o = !0;
    return n.required && !/\S/.test(e) ? (this.addErrorTip(t.parentElement, n.msg), o = !1, !1) : (this.removeError(t), (i = n.patterns) != null && i.length && n.patterns.forEach((a) => {
      if (a.reg.test(e))
        this.removeError(t);
      else
        return this.addErrorTip(t.parentElement, a.msg), o = !1, !1;
    }), this.invalid = !o, !0);
  }
  checkValidity() {
    if (this.novalidate || !this.rules || !Object.keys(this.rules).length)
      return !0;
    [...d(this, L).querySelectorAll(".form-control:not(.disabled)")].reverse().forEach((n) => {
      for (const o in this.rules)
        o === n.id ? this.beforeCheck(n, this.formData[o], this.rules[o]) : this.checkRequired(n, n.value);
    });
  }
  getAjaxFormData(t, e) {
    typeof e == "function" && (e = { complete: e });
    const n = {};
    t.querySelectorAll(".form-control:not(.disabled)").forEach((i) => {
      n[i.id] = i.value || "";
    }), e.beforeSubmit && (this.beforeSubmit = e.beforeSubmit, delete e.beforeSubmit), e.success && (this.success = e.success, delete e.success), e.error && (this.error = e.error, delete e.error), e.finish && (this.finish = e.finish, delete e.finish), e.rules && (this.rules = { ...e.rules }, delete e.rules), this.formData = {
      timeout: window != null && window.config ? window == null ? void 0 : window.config.timeout : 0,
      dataType: "json",
      ...n,
      ...e
    };
  }
  changeFormDataToString(t) {
    const e = [], n = t.constructor == Array;
    let o;
    if (n)
      for (let i = 0; i < t.length; i++) {
        o = t[i];
        const r = o.name;
        o = o.value, e[e.length] = encodeURIComponent(r) + "=" + encodeURIComponent(o);
      }
    else
      for (const i in t)
        if (o = t[i], o && o.constructor == Array)
          for (const r in o)
            e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o[r]);
        else
          e[e.length] = encodeURIComponent(i) + "=" + encodeURIComponent(o);
    return e.join("&").replace(" ", "+");
  }
  ajaxRequest(t) {
    const { params: e, data: n, headers: o, timeout: i } = t;
    let r = t.url;
    const a = t.method ? t.method.toUpperCase() : "POST", c = e ? this.changeFormDataToString(e) : null;
    let f = n || null;
    c && (a == "GET" || f ? r += r.indexOf("?") >= 0 ? "&" : "?" + c : f = c);
    const l = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    l.onreadystatechange = () => {
      let u = l.response || {};
      if (u = {
        result: "fail",
        message: {
          fruit: "\u8BF7\u9009\u62E9\u6C34\u679C",
          name: "\u8BF7\u8F93\u5165\u8D26\u53F7",
          pw: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }
      }, l.readyState === 4 && l.status === 200) {
        if (typeof u == "string" && (u = JSON.parse(u)), u === null || typeof u != "object")
          return u ? alert(u) : this.showFormMessage("No response.", "danger", null);
        u.result === "success" ? this.success && this.success(u) : (this._error(u), this.error && this.error(u));
      } else
        this._error(u), this.error && this.error(u);
      this.finish && this.finish(u);
    }, l.open(a, r, !0);
    for (const u in o) {
      const g = o[u];
      typeof g == "string" && l.setRequestHeader(u, g);
    }
    i && (this.timer = setInterval(() => {
      l.abort();
    })), l.send(f);
  }
  ajaxSubmit(t, e) {
    const n = {
      url: this.ajaxUrl,
      method: t.method,
      params: this.formData,
      data: null,
      headers: e.headers || { "Content-Type": "application/x-www-form-urlencoded" },
      timeout: e.timeout
    };
    this.ajaxRequest(n);
  }
  submitForm() {
    this.checkValidity() && this.ajaxSubmit(d(this, L), this.formData);
  }
  showFormMessage(t, e, n) {
    console.log(e, n), alert(t);
  }
  _error(t) {
    const e = t.message || t.reason || t.error;
    if (typeof e == "string")
      this.showFormMessage(e, "danger", null);
    else if (typeof e == "object") {
      const n = [];
      for (const o in e) {
        const i = Array.isArray(e[o]) ? e[o].join("") : e[o], r = d(this, L).querySelectorAll(`#${o}`);
        if (!(r != null && r.length)) {
          n.push(i);
          return;
        }
        r.forEach((a) => {
          this.addErrorTip(a.parentElement, e[o]);
        });
      }
      n.length && this.showFormMessage(n.join(""), "danger", null);
    }
  }
}
L = new WeakMap(), y(We, "NAME", "zui.ajaxForm");
document.addEventListener("form", () => {
  console.log(window.addEventListener);
});
document.addEventListener("click", (s) => {
  new We("resetForm", {
    rules: {
      name: {
        required: !0,
        msg: "\u767B\u5F55\u540D\u5FC5\u586B",
        patterns: [{
          reg: /^[a-zA-Z]+$/,
          msg: "\u767B\u5F55\u540D\u8BF7\u586B\u5165\u82F1\u6587"
        }]
      },
      pw: {
        required: !0,
        msg: "\u5BC6\u7801\u5FC5\u586B"
      }
    },
    success: (t) => {
      console.log("success", t);
    },
    error: (t) => {
      console.log("fail", t);
    }
  }), new We("apiForm2", {
    rules: {
      name: {
        required: !0,
        msg: "\u767B\u5F55\u540D\u5FC5\u586B"
      },
      pw: {
        required: !0,
        msg: "\u5BC6\u7801\u5FC5\u586B"
      }
    },
    success: (t) => {
      console.log("success", t);
    },
    error: (t) => {
      console.log("fail", t);
    }
  });
});
var Me, R, _t, he, ct, ke = {}, bt = [], qt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function yt(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function _(s, t, e) {
  var n, o, i, r = {};
  for (i in t)
    i == "key" ? n = t[i] : i == "ref" ? o = t[i] : r[i] = t[i];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Me.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (i in s.defaultProps)
      r[i] === void 0 && (r[i] = s.defaultProps[i]);
  return ve(s, r, n, o, null);
}
function ve(s, t, e, n, o) {
  var i = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: o == null ? ++_t : o };
  return o == null && R.vnode != null && R.vnode(i), i;
}
function vt() {
  return { current: null };
}
function $e(s) {
  return s.children;
}
function se(s, t) {
  this.props = s, this.context = t;
}
function le(s, t) {
  if (t == null)
    return s.__ ? le(s.__, s.__.__k.indexOf(s) + 1) : null;
  for (var e; t < s.__k.length; t++)
    if ((e = s.__k[t]) != null && e.__e != null)
      return e.__e;
  return typeof s.type == "function" ? le(s) : null;
}
function wt(s) {
  var t, e;
  if ((s = s.__) != null && s.__c != null) {
    for (s.__e = s.__c.base = null, t = 0; t < s.__k.length; t++)
      if ((e = s.__k[t]) != null && e.__e != null) {
        s.__e = s.__c.base = e.__e;
        break;
      }
    return wt(s);
  }
}
function ht(s) {
  (!s.__d && (s.__d = !0) && he.push(s) && !Se.__r++ || ct !== R.debounceRendering) && ((ct = R.debounceRendering) || setTimeout)(Se);
}
function Se() {
  for (var s; Se.__r = he.length; )
    s = he.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), he = [], s.some(function(t) {
      var e, n, o, i, r, a;
      t.__d && (r = (i = (e = t).__v).__e, (a = e.__P) && (n = [], (o = K({}, i)).__v = i.__v + 1, Oe(a, i, o, e.__n, a.ownerSVGElement !== void 0, i.__h != null ? [r] : null, n, r == null ? le(i) : r, i.__h), Et(n, i), i.__e != r && wt(i)));
    });
}
function kt(s, t, e, n, o, i, r, a, c, f) {
  var l, u, g, p, m, S, b, v = n && n.__k || bt, w = v.length;
  for (e.__k = [], l = 0; l < t.length; l++)
    if ((p = e.__k[l] = (p = t[l]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? ve(null, p, null, null, p) : Array.isArray(p) ? ve($e, { children: p }, null, null, null) : p.__b > 0 ? ve(p.type, p.props, p.key, null, p.__v) : p) != null) {
      if (p.__ = e, p.__b = e.__b + 1, (g = v[l]) === null || g && p.key == g.key && p.type === g.type)
        v[l] = void 0;
      else
        for (u = 0; u < w; u++) {
          if ((g = v[u]) && p.key == g.key && p.type === g.type) {
            v[u] = void 0;
            break;
          }
          g = null;
        }
      Oe(s, p, g = g || ke, o, i, r, a, c, f), m = p.__e, (u = p.ref) && g.ref != u && (b || (b = []), g.ref && b.push(g.ref, null, p), b.push(u, p.__c || m, p)), m != null ? (S == null && (S = m), typeof p.type == "function" && p.__k === g.__k ? p.__d = c = St(p, c, s) : c = Ct(s, p, g, v, m, c), typeof e.type == "function" && (e.__d = c)) : c && g.__e == c && c.parentNode != s && (c = le(g));
    }
  for (e.__e = S, l = w; l--; )
    v[l] != null && (typeof e.type == "function" && v[l].__e != null && v[l].__e == e.__d && (e.__d = le(n, l + 1)), xt(v[l], v[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      Rt(b[l], b[++l], b[++l]);
}
function St(s, t, e) {
  for (var n, o = s.__k, i = 0; o && i < o.length; i++)
    (n = o[i]) && (n.__ = s, t = typeof n.type == "function" ? St(n, t, e) : Ct(e, n, n, o, n.__e, t));
  return t;
}
function Ct(s, t, e, n, o, i) {
  var r, a, c;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (e == null || o != i || o.parentNode == null)
    e:
      if (i == null || i.parentNode !== s)
        s.appendChild(o), r = null;
      else {
        for (a = i, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
          if (a == o)
            break e;
        s.insertBefore(o, i), r = i;
      }
  return r !== void 0 ? r : o.nextSibling;
}
function Yt(s, t, e, n, o) {
  var i;
  for (i in e)
    i === "children" || i === "key" || i in t || Ce(s, i, null, e[i], n);
  for (i in t)
    o && typeof t[i] != "function" || i === "children" || i === "key" || i === "value" || i === "checked" || e[i] === t[i] || Ce(s, i, t[i], e[i], n);
}
function dt(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || qt.test(t) ? e : e + "px";
}
function Ce(s, t, e, n, o) {
  var i;
  e:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || dt(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || dt(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + i] = e, e ? n || s.addEventListener(t, i ? ft : ut, i) : s.removeEventListener(t, i ? ft : ut, i);
    else if (t !== "dangerouslySetInnerHTML") {
      if (o)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t in s)
        try {
          s[t] = e == null ? "" : e;
          break e;
        } catch {
        }
      typeof e == "function" || (e != null && (e !== !1 || t[0] === "a" && t[1] === "r") ? s.setAttribute(t, e) : s.removeAttribute(t));
    }
}
function ut(s) {
  this.l[s.type + !1](R.event ? R.event(s) : s);
}
function ft(s) {
  this.l[s.type + !0](R.event ? R.event(s) : s);
}
function Oe(s, t, e, n, o, i, r, a, c) {
  var f, l, u, g, p, m, S, b, v, w, $, j, B, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = t.__e = e.__e, t.__h = null, i = [a]), (f = R.__b) && f(t);
  try {
    e:
      if (typeof A == "function") {
        if (b = t.props, v = (f = A.contextType) && n[f.__c], w = f ? v ? v.props.value : f.__ : n, e.__c ? S = (l = t.__c = e.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? t.__c = l = new A(b, w) : (t.__c = l = new se(b, w), l.constructor = A, l.render = Vt), v && v.sub(l), l.props = b, l.state || (l.state = {}), l.context = w, l.__n = n, u = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = K({}, l.__s)), K(l.__s, A.getDerivedStateFromProps(b, l.__s))), g = l.props, p = l.state, u)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && b !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, w), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, w) === !1 || t.__v === e.__v) {
            l.props = b, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(P) {
              P && (P.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, w), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(g, p, m);
          });
        }
        if (l.context = w, l.props = b, l.__v = t, l.__P = s, $ = R.__r, j = 0, "prototype" in A && A.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++j < 25);
        l.state = l.__s, l.getChildContext != null && (n = K(K({}, n), l.getChildContext())), u || l.getSnapshotBeforeUpdate == null || (m = l.getSnapshotBeforeUpdate(g, p)), B = f != null && f.type === $e && f.key == null ? f.props.children : f, kt(s, Array.isArray(B) ? B : [B], t, e, n, o, i, r, a, c), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), S && (l.__E = l.__ = null), l.__e = !1;
      } else
        i == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Gt(e.__e, t, e, n, o, i, r, c);
    (f = R.diffed) && f(t);
  } catch (P) {
    t.__v = null, (c || i != null) && (t.__e = a, t.__h = !!c, i[i.indexOf(a)] = null), R.__e(P, t, e);
  }
}
function Et(s, t) {
  R.__c && R.__c(t, s), s.some(function(e) {
    try {
      s = e.__h, e.__h = [], s.some(function(n) {
        n.call(e);
      });
    } catch (n) {
      R.__e(n, e.__v);
    }
  });
}
function Gt(s, t, e, n, o, i, r, a) {
  var c, f, l, u = e.props, g = t.props, p = t.type, m = 0;
  if (p === "svg" && (o = !0), i != null) {
    for (; m < i.length; m++)
      if ((c = i[m]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        s = c, i[m] = null;
        break;
      }
  }
  if (s == null) {
    if (p === null)
      return document.createTextNode(g);
    s = o ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, g.is && g), i = null, a = !1;
  }
  if (p === null)
    u === g || a && s.data === g || (s.data = g);
  else {
    if (i = i && Me.call(s.childNodes), f = (u = e.props || ke).dangerouslySetInnerHTML, l = g.dangerouslySetInnerHTML, !a) {
      if (i != null)
        for (u = {}, m = 0; m < s.attributes.length; m++)
          u[s.attributes[m].name] = s.attributes[m].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === s.innerHTML) || (s.innerHTML = l && l.__html || ""));
    }
    if (Yt(s, g, u, o, a), l)
      t.__k = [];
    else if (m = t.props.children, kt(s, Array.isArray(m) ? m : [m], t, e, n, o && p !== "foreignObject", i, r, i ? i[0] : e.__k && le(e, 0), a), i != null)
      for (m = i.length; m--; )
        i[m] != null && yt(i[m]);
    a || ("value" in g && (m = g.value) !== void 0 && (m !== s.value || p === "progress" && !m || p === "option" && m !== u.value) && Ce(s, "value", m, u.value, !1), "checked" in g && (m = g.checked) !== void 0 && m !== s.checked && Ce(s, "checked", m, u.checked, !1));
  }
  return s;
}
function Rt(s, t, e) {
  try {
    typeof s == "function" ? s(t) : s.current = t;
  } catch (n) {
    R.__e(n, e);
  }
}
function xt(s, t, e) {
  var n, o;
  if (R.unmount && R.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Rt(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (i) {
        R.__e(i, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (o = 0; o < n.length; o++)
      n[o] && xt(n[o], t, typeof s.type != "function");
  e || s.__e == null || yt(s.__e), s.__e = s.__d = void 0;
}
function Vt(s, t, e) {
  return this.constructor(s, e);
}
function Kt(s, t, e) {
  var n, o, i;
  R.__ && R.__(s, t), o = (n = typeof e == "function") ? null : e && e.__k || t.__k, i = [], Oe(t, s = (!n && e || t).__k = _($e, null, [s]), o || ke, ke, t.ownerSVGElement !== void 0, !n && e ? [e] : o ? null : t.firstChild ? Me.call(t.childNodes) : null, i, !n && e ? e : o ? o.__e : t.firstChild, n), Et(i, s);
}
Me = bt.slice, R = { __e: function(s, t, e, n) {
  for (var o, i, r; t = t.__; )
    if ((o = t.__c) && !o.__)
      try {
        if ((i = o.constructor) && i.getDerivedStateFromError != null && (o.setState(i.getDerivedStateFromError(s)), r = o.__d), o.componentDidCatch != null && (o.componentDidCatch(s, n || {}), r = o.__d), r)
          return o.__E = o;
      } catch (a) {
        s = a;
      }
  throw s;
} }, _t = 0, se.prototype.setState = function(s, t) {
  var e;
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = K({}, this.state), typeof s == "function" && (s = s(K({}, e), this.props)), s && K(e, s), s != null && this.__v && (t && this.__h.push(t), ht(this));
}, se.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ht(this));
}, se.prototype.render = $e, he = [], Se.__r = 0;
const z = (...s) => s.map((t) => Array.isArray(t) ? z(...t) : typeof t == "function" ? z(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const n = t[e];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class $s extends se {
  render() {
    const { size: t, rounded: e, className: n, style: o, src: i, text: r, children: a, ...c } = this.props, f = [n], l = { ...o };
    let u = null;
    return i ? u = /* @__PURE__ */ _("img", {
      src: i,
      alt: r
    }) : u = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && f.push(`avatar-${t}`), typeof e == "string" && f.push(`rounded-${e}`), /* @__PURE__ */ _("div", {
      className: z(f),
      style: l,
      ...c
    }, u, a);
  }
}
function Xt(s) {
  const t = typeof s == "string" ? document.querySelector(s) : s;
  if (!t)
    return !1;
  if (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
    return t.select(), !0;
  if (window.getSelection) {
    const e = window.getSelection();
    if (e) {
      const n = document.createRange();
      return n.selectNodeContents(t), e.removeAllRanges(), e.addRange(n), !0;
    }
  }
  return !1;
}
function Jt(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
function Zt(s, t) {
  const e = typeof s == "string" ? document.querySelector(s) : s;
  if (!e)
    return !1;
  const n = e.getBoundingClientRect(), o = window.innerHeight || document.documentElement.clientHeight, i = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return n.left >= 0 && n.top >= 0 && n.left + n.width <= i && n.top + n.height <= o;
  const r = n.top <= o && n.top + n.height >= 0, a = n.left <= i && n.left + n.width >= 0;
  return r && a;
}
const As = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Xt,
  domReady: Jt,
  isElementVisible: Zt,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
const Qt = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: o, value: i } = n;
    t[o] = i;
  }), t;
};
class es extends HTMLElement {
  constructor() {
    super();
    y(this, "$button");
    y(this, "$icon");
    y(this, "onClick");
    this.$button = document.createElement("button");
    const e = this.innerHTML;
    this.innerHTML = "", this.$button.innerHTML = e, this.icon && (this.$icon = document.createElement("i"), this.addClass(this.$icon, `icon ${this.icon}`), this.$button.prepend(this.$icon)), this.$button.classList.add("btn"), this.append(this.$button);
  }
  connectedCallback() {
    this.initStyle(), this.initEventListen(), this.isDisabled && this.$button.setAttribute("disabled", "disabled"), this.$button.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 13:
          e.stopPropagation();
          break;
      }
    });
  }
  initStyle() {
    const e = Qt(this);
    if (e)
      for (const n in e)
        ["type", "size", "rounded", "outline"].includes(n) && this.addClass(this.$button, `-${e[n]}`);
  }
  initEventListen() {
    if (this.isDisabled || this.loading)
      return !1;
  }
  addClass(e, n) {
    e && e.classList.add(n);
  }
  get type() {
    return this.getAttribute("type");
  }
  set type(e) {
    this.getAttribute("type") ? (this.setAttribute("type", e), this.addClass(this.$button, `-${this.type}`)) : this.removeAttribute("type");
  }
  get size() {
    return this.getAttribute("size");
  }
  set size(e) {
    this.getAttribute("size") ? (this.setAttribute("size", e || "base"), this.addClass(this.$button, `-${e}`)) : this.removeAttribute("size");
  }
  get loading() {
    return this.getAttribute("loading");
  }
  set loading(e) {
    this.getAttribute("loading") ? this.setAttribute("loading", e || "") : this.removeAttribute("loading");
  }
  get rounded() {
    return this.getAttribute("rounded");
  }
  set rounded(e) {
    this.getAttribute("rounded") ? (this.setAttribute("rounded", e || ""), this.addClass(this.$button, `-${e}`)) : this.removeAttribute("rounded");
  }
  get isDisabled() {
    return this.getAttribute("isDisabled") !== null;
  }
  set isDisabled(e) {
    e === null || e === !1 ? this.removeAttribute("isDisabled") : this.setAttribute("isDisabled", "");
  }
  get icon() {
    return this.getAttribute("icon");
  }
  set icon(e) {
    this.setAttribute("icon", e);
  }
  static get observedAttributes() {
    return ["type", "size", "rounded", "disabled", "loading", "outline"];
  }
  get class() {
    return this.$button.classList;
  }
  attributeChangedCallback(e, n) {
    e === "isDisabled" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "loading" && this.$button && (n !== null ? this.$button.setAttribute("disabled", "disabled") : this.$button.removeAttribute("disabled")), e === "icon" && this.$icon && n && this.addClass(this.$icon, `-${n}`), this.render();
  }
  render() {
  }
}
customElements.get("zui-button") || customElements.define("zui-button", es);
function Mt() {
  document.querySelectorAll(".dropdown-menu").forEach((t) => {
    var e;
    (e = t.parentElement) == null || e.classList.remove("open");
  });
}
function ts(s) {
  const t = s.parentElement, e = s.nextElementSibling;
  !t || !e || t.classList.contains("dropdown-hover") || (t.className.includes("open") ? t.classList.remove("open") : (Mt(), t.classList.add("open")));
}
document.addEventListener("click", function(s) {
  const e = s.target.closest("[data-toggle=dropdown]");
  e ? ts(e) : Mt();
});
var Z, Q;
class pt extends se {
  constructor(e) {
    var n;
    super(e);
    M(this, Z, 0);
    M(this, Q, null);
    y(this, "_handleWheel", (e) => {
      var i;
      const { wheelContainer: n } = this.props, o = e.target;
      !o || !n || (typeof n == "string" && o.closest(n) || typeof n == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((i = this.props.wheelSpeed) != null ? i : 1)) && e.preventDefault();
    });
    y(this, "_handleMouseMove", (e) => {
      const { dragStart: n } = this.state;
      n && (d(this, Z) && cancelAnimationFrame(d(this, Z)), C(this, Z, requestAnimationFrame(() => {
        const o = this.props.type === "horz" ? e.clientX - n.x : e.clientY - n.y;
        this.scroll(n.offset + o * this.props.scrollSize / this.props.clientSize), C(this, Z, 0);
      })), e.preventDefault());
    });
    y(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    y(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    y(this, "_handleClick", (e) => {
      const n = e.currentTarget;
      if (!n)
        return;
      const o = n.getBoundingClientRect(), { type: i, clientSize: r, scrollSize: a } = this.props, c = (i === "horz" ? e.clientX - o.left : e.clientY - o.top) - this.barSize / 2;
      this.scroll(c * a / r);
    });
    this.state = {
      scrollPos: (n = this.props.defaultScrollPos) != null ? n : 0,
      dragStart: !1
    };
  }
  get scrollPos() {
    var e;
    return (e = this.props.scrollPos) != null ? e : this.state.scrollPos;
  }
  get controlled() {
    return this.props.scrollPos !== void 0;
  }
  get maxScrollPos() {
    const { scrollSize: e, clientSize: n } = this.props;
    return Math.max(0, e - n);
  }
  get barSize() {
    const { clientSize: e, scrollSize: n, size: o = 10 } = this.props;
    return Math.max(Math.round(e * e / n), 2 * o);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("mouseup", this._handleMouseUp);
    const { wheelContainer: e } = this.props;
    e && (C(this, Q, typeof e == "string" ? document : e.current), d(this, Q).addEventListener("wheel", this._handleWheel, { passive: !1 }));
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("mouseup", this._handleMouseUp), d(this, Q) && d(this, Q).removeEventListener("wheel", this._handleWheel);
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
    var o;
    const { onScroll: n } = this.props;
    n && n(e, (o = this.props.type) != null ? o : "vert");
  }
  render() {
    const {
      clientSize: e,
      type: n,
      size: o = 10,
      className: i,
      style: r,
      left: a,
      top: c,
      bottom: f,
      right: l
    } = this.props, { maxScrollPos: u, scrollPos: g } = this, { dragStart: p } = this.state, m = {
      left: a,
      top: c,
      bottom: f,
      right: l,
      ...r
    }, S = {};
    return n === "horz" ? (m.height = o, m.width = e, S.width = this.barSize, S.left = Math.round(g * (e - S.width) / u)) : (m.width = o, m.height = e, S.height = this.barSize, S.top = Math.round(g * (e - S.height) / u)), /* @__PURE__ */ _("div", {
      className: z("scrollbar", i, {
        "is-vert": n === "vert",
        "is-horz": n === "horz",
        "is-dragging": p
      }),
      style: m,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ _("div", {
      className: "scrollbar-bar",
      style: S,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Z = new WeakMap(), Q = new WeakMap();
function Ue({ col: s, className: t, height: e, rowID: n, hoverCol: o, rowData: i, onRenderCell: r, style: a, children: c, ...f }) {
  const { cellStyle: l, align: u, className: g } = s.setting, p = {
    left: s.left,
    width: s.realWidth,
    height: e,
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...a,
    ...l
  };
  let m = [
    c != null ? c : i == null ? void 0 : i[s.name]
  ];
  r && (m = r(m, n, s, i));
  const S = [], b = [];
  m == null || m.forEach((w) => {
    typeof w == "object" && w && ("html" in w || "className" in w || "style" in w) ? (w.html && b.push(/* @__PURE__ */ _("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: w.html }
    })), w.style && Object.assign(p, w.style), w.className && S.push(w.className)) : b.push(w);
  });
  const v = z("dtable-cell", t, {
    "dtable-col-hover": o
  }, g, S);
  return /* @__PURE__ */ _("div", {
    className: v,
    style: p,
    "data-col": s.name,
    ...f
  }, b);
}
function ss({ col: s, children: t, style: e, ...n }) {
  const { sortType: o } = s.setting;
  return /* @__PURE__ */ _(Ue, {
    col: s,
    style: { ...e, ...s.setting.style },
    "data-sort": o || null,
    "data-type": s.type,
    ...n
  }, s.setting.title, o && /* @__PURE__ */ _("div", {
    className: `dtable-sort dtable-sort-${o === !0 ? "none" : o}`
  }), t);
}
function je({ rowID: s, className: t, top: e = 0, left: n = 0, width: o, height: i, cols: r, data: a, hoverCol: c, CellComponent: f = Ue, onRenderCell: l }) {
  return /* @__PURE__ */ _("div", {
    className: z("dtable-cells", t),
    style: { top: e, left: n, width: o, height: i }
  }, r.map((u) => u.visible ? /* @__PURE__ */ _(f, {
    key: u.name,
    col: u,
    hoverCol: c === u.name && u.setting.colHover !== !1,
    rowData: a,
    rowID: s,
    onRenderCell: l
  }) : null));
}
function $t({
  rowID: s,
  className: t,
  top: e,
  height: n,
  fixedLeftCols: o,
  fixedRightCols: i,
  scrollCols: r,
  flexLeftWidth: a,
  scrollWidth: c,
  scrollWidthTotal: f,
  flexRightWidth: l,
  scrollLeft: u,
  CellComponent: g = Ue,
  onRenderCell: p,
  hoverCol: m,
  data: S,
  ...b
}) {
  let v = null;
  o != null && o.length && (v = /* @__PURE__ */ _(je, {
    className: "dtable-fixed-left",
    cols: o,
    width: a,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  let w = null;
  r != null && r.length && (w = /* @__PURE__ */ _(je, {
    className: "dtable-flexable",
    cols: r,
    left: a - u,
    width: f,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  let $ = null;
  i != null && i.length && ($ = /* @__PURE__ */ _(je, {
    className: "dtable-fixed-right",
    cols: i,
    left: a + c,
    width: l,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  const j = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ _("div", {
    className: z("dtable-row", t),
    style: j,
    "data-id": s,
    ...b
  }, v, w, $);
}
function ns({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: ss
  };
  return t && (n = t(n)), /* @__PURE__ */ _("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ _($t, {
    ...n
  }));
}
function os({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: o,
  rowHeight: i,
  onRenderRow: r,
  ...a
}) {
  return t = { ...t, top: e, height: o }, /* @__PURE__ */ _("div", {
    className: z("dtable-rows", s),
    style: t
  }, n.map((c) => {
    let f = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: i,
      ...a
    };
    return r && (f = r(f, c)), /* @__PURE__ */ _($t, {
      ...f
    });
  }));
}
const Ee = /* @__PURE__ */ new Map();
function At(s, t = !1) {
  if (!t && Ee.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  Ee.set(s.name, s);
}
function fe(s, t = !1) {
  At(s, t);
  const e = (n) => {
    if (!n)
      return s;
    const { defaultOptions: o, ...i } = s;
    return {
      ...i,
      defaultOptions: { ...o, ...n }
    };
  };
  return e.plugin = s, e;
}
function gt(s) {
  return Ee.get(s);
}
function Lt(s) {
  return Ee.delete(s);
}
function is(s) {
  const t = /* @__PURE__ */ new Map();
  return [s == null ? void 0 : s.plugins].flat().reduce((e, n) => {
    var i;
    if (!n)
      return e;
    let o;
    return typeof n == "string" ? (o = gt(n), o || console.warn(`DTable: Cannot found plugin "${n}"`)) : typeof n == "function" ? o = n.plugin : typeof n == "object" ? o = n : console.warn("DTable: Invalid plugin", n), o && !t.has(o.name) && ((i = o.plugins) == null || i.forEach((r) => {
      if (t.has(r))
        return;
      const a = gt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${o == null ? void 0 : o.name}"`);
        return;
      }
      e.push(a), t.set(a.name, a);
    }), e.push(o), t.set(o.name, o)), e;
  }, []);
}
function rs(s, t) {
  return s.reduce((e, n) => {
    const { options: o, defaultOptions: i } = n;
    return i && (e = { ...i, ...e }), o && Object.assign(e, typeof o == "function" ? o(e) : o), e;
  }, t);
}
function Fe() {
  return {
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 9999,
    header: !0,
    footer: !1,
    headerHeight: 0,
    footerHeight: 0,
    rowHover: !0,
    colHover: !1,
    cellHover: !1,
    bordered: !1,
    striped: !0,
    responsive: !1,
    scrollbarHover: !0,
    scrollbarSize: 10,
    horzScrollbarPos: "outside"
  };
}
var ee, G, E, te, H, oe;
class De extends se {
  constructor(e) {
    super(e);
    y(this, "ref", vt());
    M(this, ee, 0);
    M(this, G, !1);
    M(this, E, void 0);
    M(this, te, void 0);
    M(this, H, []);
    M(this, oe, void 0);
    y(this, "_handleResize", () => {
      d(this, ee) && cancelAnimationFrame(d(this, ee)), C(this, ee, requestAnimationFrame(() => {
        this.forceUpdate(), C(this, ee, 0);
      }));
    });
    y(this, "_handleRenderRow", (e, n) => (d(this, E).onRenderRow && (e = d(this, E).onRenderRow.call(this, e, n)), d(this, H).forEach((o) => {
      o.onRenderRow && (e = o.onRenderRow.call(this, e, n));
    }), e));
    y(this, "_handleRenderHeaderRow", (e) => (d(this, E).onRenderHeaderRow && (e = d(this, E).onRenderHeaderRow.call(this, e)), d(this, H).forEach((n) => {
      n.onRenderHeaderRow && (e = n.onRenderHeaderRow.call(this, e));
    }), e));
    y(this, "_handleRenderCell", (e, n, o, i) => {
      const r = n === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return o.setting[r] && (e = o.setting[r].call(this, e, n, o, i)), d(this, E)[r] && (e = d(this, E)[r].call(this, e, n, o, i)), d(this, H).forEach((a) => {
        a[r] && (e = a[r].call(this, e, n, o, i));
      }), e;
    });
    y(this, "_handleScroll", (e, n) => {
      n === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    y(this, "_handleClick", (e) => {
      var c, f, l, u, g, p, m, S;
      const n = e.target;
      if (!n)
        return;
      const o = n.closest(".dtable-row");
      if (!o)
        return;
      const i = n.closest(".dtable-cell"), r = (c = i == null ? void 0 : i.getAttribute("data-col")) != null ? c : "", a = (f = o.getAttribute("data-id")) != null ? f : "";
      if (a === "HEADER")
        i && ((l = d(this, E).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: i }), d(this, H).forEach((b) => {
          var v;
          (v = b.onHeaderCellClick) == null || v.call(this, e, { colName: r, element: i });
        }));
      else {
        const b = (u = d(this, oe)) == null ? void 0 : u.visibleRows.find((v) => v.id === a);
        if (i) {
          if (((g = d(this, E).onCellClick) == null ? void 0 : g.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
            return;
          for (const v of d(this, H))
            if (((p = v.onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: b, element: i, rowElement: o })) === !0)
              return;
        }
        if (((m = d(this, E).onRowClick) == null ? void 0 : m.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
          return;
        for (const v of d(this, H))
          if (((S = v.onRowClick) == null ? void 0 : S.call(this, e, { rowID: a, rowInfo: b, element: o })) === !0)
            return;
      }
    });
    y(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: n } = d(this, E);
      if (!n)
        return;
      const o = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!o || n === "header" && !o.closest(".dtable-header"))
        return;
      const i = (a = o == null ? void 0 : o.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: i });
    });
    y(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const n = { ...Fe(), ...e };
    C(this, E, Object.freeze(n)), C(this, te, Object.freeze(is(n))), d(this, te).forEach((o) => {
      var i;
      (i = o.onCreate) == null || i.call(this, o);
    });
  }
  get options() {
    return d(this, E);
  }
  get plugins() {
    return d(this, H);
  }
  get layout() {
    return d(this, oe);
  }
  componentDidMount() {
    d(this, G) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, E).responsive && window.addEventListener("resize", this._handleResize), d(this, H).forEach((n) => {
      var o;
      (o = n.onMounted) == null || o.call(this);
    });
  }
  componentDidUpdate() {
    d(this, G) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: e } = this.ref;
    e && (e.removeEventListener("click", this._handleClick), d(this, E).colHover && (e.removeEventListener("mouseover", this._handleMouseOver), e.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), d(this, H).forEach((n) => {
      var o;
      (o = n.onUnmounted) == null || o.call(this);
    });
  }
  scrollLeft(e) {
    this.setState({ scrollLeft: e }, () => {
      var n;
      (n = d(this, E).onScroll) == null || n.call(this, e, "horz");
    });
  }
  scrollTop(e) {
    this.setState({ scrollTop: e }, () => {
      var n;
      (n = d(this, E).onScroll) == null || n.call(this, e, "vert");
    });
  }
  getLayout() {
    var Ze, Qe, et;
    const e = Fe(), n = rs(d(this, te), { ...e, ...this.props }), o = d(this, te).filter((h) => !h.when || h.when(n));
    C(this, H, Object.freeze(o)), o.forEach((h) => {
      var x;
      const k = (x = h.beforeLayout) == null ? void 0 : x.call(this, n);
      k && Object.assign(n, k);
    }), C(this, E, Object.freeze(n));
    const {
      header: i,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: f = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = n, u = i ? n.headerHeight || a : 0, g = r ? n.footerHeight || a : 0, p = (h, k, x) => (h && (k && (h = Math.max(k, h)), x && (h = Math.min(x, h))), h), m = [], S = [], b = [];
    let v = 0, w = 0;
    (Ze = n.cols) == null || Ze.forEach((h) => {
      var tt, st, nt;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: k = f, maxWidth: x = l } = h, W = p((tt = h.width) != null ? tt : 0, k, x), q = (st = h.flex) != null ? st : 1, ge = q * p(c, k, x), Y = {
        name: h.name,
        type: (nt = h.type) != null ? nt : "",
        setting: h,
        left: 0,
        flex: q,
        realWidth: W,
        flexWidth: ge,
        visible: !0
      };
      h.fixed === "left" ? (Y.left = v, v += W, m.push(Y)) : h.fixed === "right" ? (Y.left = w, w += W, S.push(Y)) : b.push(Y), o.forEach((ot) => {
        var it, rt, lt;
        const me = (rt = ot.colTypes) == null ? void 0 : rt[(it = h.type) != null ? it : ""];
        if (me) {
          const at = typeof me == "function" ? me(h) : me;
          at && Object.assign(h, at);
        }
        (lt = ot.onAddCol) == null || lt.call(this, Y);
      });
    });
    let $ = n.width, j = 0;
    if (typeof $ == "function" && ($ = $()), $ === "auto")
      j = v + w, b.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), j += h.realWidth;
      });
    else if ($ === "100%") {
      const h = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (h)
        j = h.clientWidth;
      else {
        j = 0, C(this, G, !0);
        return;
      }
    } else
      j = $ != null ? $ : 0;
    const { data: B, rowKey: A = "id" } = n, P = [], Ae = (h, k, x) => {
      var q, ge;
      const W = { data: x != null ? x : { [A]: h }, top: 0, id: h, index: P.length };
      if (x || (W.lazy = !0), P.push(W), ((q = n.onAddRow) == null ? void 0 : q.call(this, W, k)) !== !1) {
        for (const Y of o)
          if (((ge = Y.onAddRow) == null ? void 0 : ge.call(this, W, k)) === !1)
            return;
      }
    };
    if (typeof B == "number")
      for (let h = 0; h < B; h++)
        Ae(h, h);
    else
      Array.isArray(B) && B.forEach((h, k) => {
        typeof h == "object" ? Ae(h[A], k, h) : Ae(h, k);
      });
    const O = [];
    let ce = 0;
    P.forEach((h) => {
      var k, x;
      if (((k = n.rowFilter) == null ? void 0 : k.call(this, h)) !== !1) {
        for (const W of o)
          if (((x = W.rowFilter) == null ? void 0 : x.call(this, h)) === !1)
            return;
        h.index = O.length, h.top = ce, O.push(h), ce += a;
      }
    });
    let Le = !1;
    n.rowSorter && (O.sort(n.rowSorter.bind(this)), Le = !0), o.forEach((h) => {
      h.rowSorter && (O.sort(h.rowSorter.bind(this)), Le = !0);
    }), Le && O.forEach((h, k) => {
      h.index = k, h.top = k * a, O.push(h);
    });
    let U = n.height, X = 0;
    if (typeof U == "function" && (U = U()), U === "auto")
      X = u + g + ce;
    else if (typeof U == "object")
      X = Math.min(U.max, Math.max(U.min, u + g + ce));
    else if (U === "100%") {
      const h = (et = this.ref.current) == null ? void 0 : et.parentElement;
      if (h)
        X = h.clientHeight;
      else {
        X = 0, C(this, G, !0);
        return;
      }
    } else
      X = U;
    const { scrollTop: pe = 0, scrollLeft: He = 0, hoverCol: Bt } = this.state, Ye = X - u - g, Ge = pe + Ye, Ve = [], Ne = j - v - w;
    let J = 0;
    const Te = [];
    let Ke = 0;
    if (b.forEach((h) => {
      h.realWidth ? J += h.realWidth : (Te.push(h), Ke += h.flex);
    }), Te.length) {
      const h = Math.max(0, Ne - J);
      Te.forEach((k) => {
        var q;
        const { minWidth: x = f, maxWidth: W = l } = k.setting;
        k.realWidth = Math.min(W, Math.max(x, Math.ceil(h * ((q = k.flex) != null ? q : 1) / Ke))), J += k.realWidth;
      });
    }
    J = 0, b.forEach((h) => {
      h.left += J, J += h.realWidth, (h.left + h.realWidth < He || h.left > He + Ne) && (h.visible = !1);
    });
    const Xe = Math.floor(pe / a), Je = Math.min(O.length, Math.ceil(Ge / a)), Pt = [];
    for (let h = Xe; h < Je; h++) {
      const k = O[h];
      k.top -= pe, Ve.push(k), k.lazy === !0 && Pt.push(k.id);
    }
    let ne = {
      allRows: P,
      width: j,
      height: X,
      rows: O,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: Ye,
      rowsHeightTotal: ce,
      hoverCol: Bt,
      header: i,
      footer: r,
      headerHeight: u,
      footerHeight: g,
      colsInfo: {
        fixedLeftCols: m,
        fixedRightCols: S,
        scrollCols: b,
        flexLeftWidth: v,
        scrollWidth: Ne,
        scrollWidthTotal: J,
        flexRightWidth: w
      },
      scrollBottom: Ge,
      scrollTop: pe,
      scrollLeft: He,
      startRowIndex: Xe,
      endRowIndex: Je
    };
    if (n.onLayout) {
      const h = n.onLayout.call(this, ne);
      h && (ne = h);
    }
    return o.forEach((h) => {
      if (h.onLayout) {
        const k = h.onLayout.call(this, ne);
        k && (ne = k);
      }
    }), C(this, oe, Object.freeze(ne)), ne;
  }
  getColInfo(e) {
    var o, i;
    const { layout: n } = this;
    if (!!n)
      return (i = (o = n.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? o : n.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? i : n.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: n, hoverCol: o, colsInfo: i, headerHeight: r } = e;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ _(ns, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: o,
        ...i
      });
    let a, c;
    if (typeof n == "function") {
      const f = n(e, this.state);
      typeof f == "object" && f && "__html" in f ? c = f : a = f;
    } else
      a = n;
    return /* @__PURE__ */ _("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: c
    }, a);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: o, visibleRows: i, rowHeight: r, hoverCol: a, colsInfo: c } = e;
    return /* @__PURE__ */ _(os, {
      top: n,
      height: o,
      rows: i,
      rowHeight: r,
      hoverCol: a,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(e) {
    const { footer: n, footerHeight: o } = e;
    if (!n)
      return null;
    let i, r;
    if (typeof n == "function") {
      const a = n(e, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : i = a;
    } else
      i = n;
    return /* @__PURE__ */ _("div", {
      className: "dtable-footer",
      style: { height: o },
      dangerouslySetInnerHTML: r
    }, i);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: o, colsInfo: i, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: f, scrollWidth: l } = i, { scrollbarSize: u = 10, horzScrollbarPos: g } = this.props;
    return f > l && n.push(/* @__PURE__ */ _(pt, {
      key: "horz",
      type: "horz",
      scrollPos: o,
      scrollSize: f,
      clientSize: l,
      onScroll: this._handleScroll,
      left: i.flexLeftWidth,
      bottom: g === "inside" ? 0 : -u,
      size: u,
      wheelContainer: this.ref
    })), c > a && n.push(/* @__PURE__ */ _(pt, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: u,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), n.length ? n : null;
  }
  _afterRender() {
    var e;
    C(this, G, !1), (e = d(this, E).afterRender) == null || e.call(this), d(this, H).forEach((n) => {
      var o;
      return (o = n.afterRender) == null ? void 0 : o.call(this);
    });
  }
  render() {
    var u, g;
    const e = this.getLayout(), { className: n, rowHover: o, colHover: i, cellHover: r, bordered: a, striped: c, scrollbarHover: f } = (u = d(this, E)) != null ? u : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ _("div", {
      className: z("dtable", n, {
        "dtable-hover-row": o,
        "dtable-hover-col": i,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((g = e == null ? void 0 : e.scrollTop) != null ? g : 0) > 0,
        "scrollbar-hover": f
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
ee = new WeakMap(), G = new WeakMap(), E = new WeakMap(), te = new WeakMap(), H = new WeakMap(), oe = new WeakMap(), y(De, "addPlugin", At), y(De, "removePlugin", Lt);
function ls(s, t) {
  var i;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, o = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], n[r] = a);
  };
  return s === void 0 ? (t === void 0 && (t = !Ht.call(this)), (i = this.layout) == null || i.allRows.forEach(({ id: r }) => {
    o(r, !!t);
  })) : (Array.isArray(s) ? s : [s]).forEach((a) => {
    o(a, t != null ? t : !e[a]);
  }), Object.keys(n).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, n);
  }), n;
}
function as(s) {
  var t;
  return (t = this.state.checkedRows[s]) != null ? t : !1;
}
function Ht() {
  var s;
  return this.getChecks().length === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function cs() {
  return Object.keys(this.state.checkedRows);
}
const Nt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (s) => !!s.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = ls.bind(this), this.isRowChecked = as.bind(this), this.isAllRowChecked = Ht.bind(this), this.getChecks = cs.bind(this);
  },
  onRenderCell(s, t, e) {
    var i, r;
    const { checkbox: n } = e.setting;
    if (typeof n == "function" ? n.call(this, t) : n) {
      const a = this.isRowChecked(t), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, t)) != null ? r : /* @__PURE__ */ _("input", {
        type: "checkbox",
        checked: a
      });
      s.unshift(c), s.push({ className: "has-checkbox" });
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var i, r;
    const { checkbox: n } = e.setting;
    if (typeof n == "function" ? n.call(this, t) : n) {
      const a = this.isAllRowChecked(), c = (r = (i = this.options.checkboxRender) == null ? void 0 : i.call(this, a, t)) != null ? r : /* @__PURE__ */ _("input", {
        type: "checkbox",
        checked: a
      });
      s.unshift(c), s.push({ className: "has-checkbox" });
    }
    return s;
  },
  onRenderRow(s, t) {
    return this.isRowChecked(t.id) && (s.className = z(s.className, "is-checked")), s;
  },
  onHeaderCellClick(s) {
    const t = s.target;
    if (!t)
      return;
    const e = t.closest('input[type="checkbox"],.dtable-checkbox');
    e && this.toggleCheckRows(e.checked);
  },
  onRowClick(s, { rowID: t }) {
    const e = s.target;
    if (!e)
      return;
    (e.closest('input[type="checkbox"],.dtable-checkbox') || this.options.checkOnClickRow) && this.toggleCheckRows(t);
  }
};
fe(Nt);
function Ie(s) {
  const t = this.nestedMap.get(s);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let o = !1, { parent: i } = t;
  for (; i; ) {
    const r = Ie.call(this, i);
    if (r.state !== "expanded") {
      o = !0;
      break;
    }
    i = r.parent;
  }
  return t.state = o ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Ie.call(this, t.parent).level + 1 : 0, t;
}
function hs(s, t) {
  var n;
  let e = (n = this.state.collapsedRows) != null ? n : {};
  if (s === "HEADER")
    if (t === void 0 && (t = !Tt.call(this)), t) {
      const o = this.nestedMap.entries();
      for (const [i, r] of o)
        r.state === "expanded" && (e[i] = !0);
    } else
      e = {};
  else {
    const o = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[o[0]]), o.forEach((i) => {
      const r = this.nestedMap.get(i);
      t && (r == null ? void 0 : r.children) ? e[i] = !0 : delete e[i];
    });
  }
  this.setState({ collapsedRows: { ...e } }, () => {
    var o;
    (o = this.options.onNestedChange) == null || o.call(this);
  });
}
function Tt() {
  const s = this.nestedMap.values();
  for (const t of s)
    if (t.state === "expanded")
      return !1;
  return !0;
}
function zt(s, t = 0, e) {
  var n;
  e || (e = [...s.keys()]);
  for (const o of e) {
    const i = s.get(o);
    !i || typeof i.order == "number" || (i.order = t++, (n = i.children) != null && n.length && (t = zt(s, t, i.children)));
  }
  return t;
}
const jt = {
  name: "nested",
  defaultOptions: {
    nested: !0,
    nestedParentKey: "parent",
    asParentKey: "asParent",
    nestedIndent: 16
  },
  when: (s) => !!s.nested,
  onCreate() {
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = hs.bind(this), this.isAllCollapsed = Tt.bind(this), this.getNestedRowInfo = Ie.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(s) {
    var n, o, i;
    const t = s.data[(n = this.options.nestedParentKey) != null ? n : "parent"], e = (o = this.nestedMap.get(s.id)) != null ? o : {
      state: "",
      parent: t,
      level: 0
    };
    if (s.data[(i = this.options.asParentKey) != null ? i : "asParent"] && (e.children = []), this.nestedMap.set(s.id, e), t) {
      let r = this.nestedMap.get(t);
      r || (r = {
        state: "",
        level: 0
      }, this.nestedMap.set(t, r)), r.children || (r.children = []), r.children.push(s.id);
    }
  },
  rowFilter(s) {
    return this.getNestedRowInfo(s.id).state !== "hidden";
  },
  rowSorter(s, t) {
    var i, r;
    const e = this.getNestedRowInfo(s.id), n = this.getNestedRowInfo(t.id);
    typeof e.order != "number" && zt(this.nestedMap);
    const o = ((i = e.order) != null ? i : 0) - ((r = n.order) != null ? r : 0);
    return o === 0 ? s.index - t.index : o;
  },
  onRenderCell(s, t, e, n) {
    var r, a, c;
    const { nestedToggle: o } = e.setting, i = this.getNestedRowInfo(t);
    if (o && (i.children || i.parent) && s.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, i, t, e, n)) != null ? a : /* @__PURE__ */ _("a", {
      role: "button",
      className: `dtable-nested-toggle state${i.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ _("span", {
      className: "dtable-nested-toggle-icon"
    }))), i.level) {
      let { nestedIndent: f = o } = e.setting;
      f && (f === !0 && (f = (c = this.options.nestedIndent) != null ? c : 12), s.unshift(/* @__PURE__ */ _("div", {
        className: "dtable-nested-indent",
        style: { width: f * i.level + "px" }
      })));
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var n, o;
    return e.setting.nestedToggle && s.unshift((o = (n = this.options.onRenderNestedToggle) == null ? void 0 : n.call(this, void 0, t, e, void 0)) != null ? o : /* @__PURE__ */ _("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ _("span", {
      className: "dtable-nested-toggle-icon"
    }))), s;
  },
  onRenderRow(s, t) {
    const e = this.getNestedRowInfo(t.id);
    return Object.assign(s, {
      className: z(s.className, `is-nested-${e.state}`),
      "data-parent": e.parent
    }), s;
  },
  onRenderHeaderRow(s) {
    return s.className = z(s.className, `is-nested-${this.isAllCollapsed() ? "collapsed" : "expanded"}`), s;
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
};
fe(jt);
function be(s, ...t) {
  var e;
  if (t.length === 0)
    return s;
  if (t.length === 1 && typeof t[0] == "object" && t[0]) {
    const n = t[0];
    return Object.keys(n).forEach((o) => {
      var r;
      const i = (r = n[o]) != null ? r : 0;
      s = s.replace(new RegExp(`\\{${o}\\}`, "g"), `${i}`);
    }), s;
  }
  for (let n = 0; n < t.length; n++) {
    const o = (e = t[n]) != null ? e : "";
    s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${o}`);
  }
  return s;
}
const I = 24 * 60 * 60 * 1e3, N = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ae = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), Be = (s, t = new Date()) => N(s).getFullYear() === N(t).getFullYear(), Wt = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), ds = (s, t = new Date()) => {
  s = N(s), t = N(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), o = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((o + 4) / 7);
}, us = (s, t) => ae(N(t), s), fs = (s, t) => ae(N(t).getTime() - I, s), ps = (s, t) => ae(N(t).getTime() + I, s), gs = (s, t) => ae(N(t).getTime() - 2 * I, s), Re = (s, t = "yyyy-MM-dd hh:mm") => {
  s = N(s);
  const e = {
    "M+": s.getMonth() + 1,
    "d+": s.getDate(),
    "h+": s.getHours(),
    "H+": s.getHours() % 12,
    "m+": s.getMinutes(),
    "s+": s.getSeconds(),
    "S+": s.getMilliseconds()
  };
  return /(y+)/i.test(t) && (t = t.replace(RegExp.$1, `${s.getFullYear()}`.substring(4 - RegExp.$1.length))), Object.keys(e).forEach((n) => {
    if (new RegExp(`(${n})`).test(t)) {
      const o = `${e[n]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? o : `00${o}`.substring(o.length));
    }
  }), t;
}, ms = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, o = Re(s, Be(s) ? n.month : n.full);
  if (ae(s, t))
    return o;
  const i = Re(t, Be(s, t) ? Wt(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", o).replace("{1}", i);
}, _s = (s) => {
  const t = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return t - I * 7;
    case "oneMonth":
      return t - I * 31;
    case "threeMonth":
      return t - I * 31 * 3;
    case "halfYear":
      return t - I * 183;
    case "oneYear":
      return t - I * 365;
    case "twoYear":
      return t - 2 * (I * 365);
    default:
      return 0;
  }
}, Pe = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, Pe(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, Pe(s, "day", e, n);
    case "week":
      s *= 7;
    case "day":
      s *= 24;
    case "hour":
      s *= 60;
    case "minute":
      s *= 6e4;
      break;
    default:
      s = 0;
  }
  return e ? n + s : n - s;
};
const Ft = {
  name: "rich",
  colTypes: {
    html: {
      onRenderCell(s) {
        return s[0] = {
          html: s[0]
        }, s;
      }
    },
    link: {
      onRenderCell(s, t, e, n) {
        const { linkTemplate: o = "", linkProps: i } = e.setting, r = be(o, n);
        return s[0] = /* @__PURE__ */ _("a", {
          href: r,
          ...i
        }, s[0]), s;
      }
    },
    avatar: {
      onRenderCell(s, t, e, n) {
        const { avatarWithName: o, avatarClass: i = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ _("div", {
          className: `avatar ${i} flex-none`
        }, /* @__PURE__ */ _("img", {
          src: n ? n[r] : ""
        }));
        return o ? s.unshift(a) : s[0] = a, s;
      }
    },
    circleProgress: {
      onRenderCell(s, t, e) {
        const { circleSize: n = 24, circleBorderSize: o = 1, circleBgColor: i = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (n - o) / 2, c = n / 2, f = s[0];
        return s[0] = /* @__PURE__ */ _("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ _("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": o,
          stroke: i,
          fill: "transparent"
        }), /* @__PURE__ */ _("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": o,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ _("text", {
          x: c,
          y: c + o,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), s;
      }
    },
    actionButtons: {
      onRenderCell(s, t, e, n) {
        const o = n == null ? void 0 : n[e.name];
        if (!o)
          return s;
        const { actionBtnTemplate: i = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: o.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), be(i, c);
          }).join(" ")
        }];
      }
    },
    format: {
      onRenderCell(s, t, e) {
        let { format: n } = e.setting;
        if (!n)
          return s;
        typeof n == "string" && (n = { type: "text", format: n });
        const { format: o, type: i } = n, r = s[0];
        return typeof o == "function" ? s[0] = i === "html" ? { html: o(r) } : o(r) : i === "datetime" ? s[0] = Re(r, o) : i === "html" ? s[0] = { html: be(o, r) } : s[0] = be(o, r), s;
      }
    }
  }
};
fe(Ft);
const Dt = {
  name: "header-group",
  defaultOptions: {
    headerGroup: !0
  },
  onCreate() {
    this.headerGroups = /* @__PURE__ */ new Map();
  },
  when: (s) => !!s.headerGroup,
  beforeLayout(s) {
    const { headerGroups: t } = this;
    t.clear();
    const { cols: e } = s;
    if (!(e != null && e.length))
      return;
    const n = {};
    return e.forEach((o, i) => {
      const { group: r } = o;
      if (!r) {
        n[o.name] = i;
        return;
      }
      let a = this.headerGroups.get(r);
      a ? a.cols.push(o.name) : (a = { cols: [o.name], index: i }, this.headerGroups.set(r, a)), n[o.name] = a.index + a.cols.length / e.length;
    }), e.sort((o, i) => n[o.name] - n[i.name]), {
      headerHeight: !s.headerHeight && s.rowHeight ? s.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(s, t, e) {
    const { group: n } = e.setting;
    if (n) {
      const o = this.headerGroups.get(n), i = this.layout.headerHeight / 2;
      if (e.name === o.cols[0]) {
        const r = o.cols.reduce((c, f) => {
          var l, u;
          return c + ((u = (l = this.getColInfo(f)) == null ? void 0 : l.realWidth) != null ? u : 0);
        }, 0), a = {
          height: i - 1,
          width: r - 1
        };
        s.push(/* @__PURE__ */ _("div", {
          class: "dtable-header-group",
          style: a
        }, n));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: i }
      });
    }
    return s;
  }
};
fe(Dt);
const bs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Nt,
  nested: jt,
  rich: Ft,
  headerGroup: Dt
}, Symbol.toStringTag, { value: "Module" }));
var de;
class ye {
  constructor(t, e) {
    y(this, "element");
    y(this, "options");
    M(this, de, vt());
    var n;
    this.element = t, this.options = { ...Fe(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  get $() {
    return d(this, de).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Kt(/* @__PURE__ */ _(De, {
      ref: d(this, de),
      ...this.options
    }), this.element);
  }
}
de = new WeakMap(), y(ye, "NAME", "zui.dtable"), y(ye, "definePlugin", fe), y(ye, "removePlugin", Lt), y(ye, "plugins", bs);
let ys = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var ue, V, F, ie, re, we;
const qe = class {
  constructor(t, e = "local") {
    M(this, re);
    M(this, ue, void 0);
    M(this, V, void 0);
    M(this, F, void 0);
    M(this, ie, void 0);
    C(this, ue, e), C(this, V, `ZUI_STORE:${t != null ? t : ys()}`), C(this, F, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, ue);
  }
  get session() {
    return this.type === "session" ? this : (d(this, ie) || C(this, ie, new qe(d(this, V), "session")), d(this, ie));
  }
  get(t, e) {
    const n = d(this, F).getItem(_e(this, re, we).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    d(this, F).setItem(_e(this, re, we).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    d(this, F).removeItem(_e(this, re, we).call(this, t));
  }
  each(t) {
    for (let e = 0; e < d(this, F).length; e++) {
      const n = d(this, F).key(e);
      if (n != null && n.startsWith(d(this, V))) {
        const o = d(this, F).getItem(n);
        typeof o == "string" && t(n.substring(d(this, V).length + 1), JSON.parse(o));
      }
    }
  }
  getAll() {
    const t = {};
    return this.each((e, n) => {
      t[e] = n;
    }), t;
  }
};
let xe = qe;
ue = new WeakMap(), V = new WeakMap(), F = new WeakMap(), ie = new WeakMap(), re = new WeakSet(), we = function(t) {
  return `${d(this, V)}:${t}`;
};
const vs = new xe("DEFAULT");
function ws(s, t = "local") {
  return new xe(s, t);
}
Object.assign(vs, { create: ws });
function ks() {
  const s = typeof window.innerWidth == "number" ? window.innerWidth - document.body.clientWidth : 17;
  document.body.style.paddingRight = `${s}px`, document.body.classList.add("modal-open");
}
function Ss() {
  document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
}
function Cs(s, t) {
  ks(), s.classList.add("block"), mt(s, t), s.onclick = (e) => Es(e, s), window.addEventListener("resize", () => {
    mt(s, t);
  });
}
function It(s) {
  var t;
  Ss(), (t = s.classList) == null || t.remove("block");
}
function mt(s, t) {
  const e = s.querySelector(".modal-dialog");
  if (!e)
    return;
  const n = Math.max(0, (window.innerHeight - e.clientHeight) / 2);
  if (t === "fit") {
    e.style.top = `${n > 50 ? Math.floor(n * 2 / 3) : n}px`;
    return;
  }
  if (t === "center") {
    e.style.top = `${n}px`;
    return;
  }
  e.style.top = t;
}
function Es(s, t) {
  s.target.closest("[data-dismiss=modal]") && (s.stopPropagation(), It(t));
}
function Rs(s) {
  var t, e;
  return s instanceof HTMLAnchorElement ? (e = (t = (s.href || "").match(/(?<selector>#\S+)$/)) == null ? void 0 : t.groups) == null ? void 0 : e.selector : s.dataset.target;
}
document.addEventListener("click", (s) => {
  const t = s.target, e = t.closest("[data-toggle=modal]");
  if (e) {
    const n = Rs(e);
    if (!n)
      return;
    const o = document.querySelector(n);
    if (!o)
      return;
    Cs(o, e.dataset.position || "fit");
  } else
    t.className.includes("modal") && It(t);
});
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: I,
  createDate: N,
  isSameDay: ae,
  isSameYear: Be,
  isSameMonth: Wt,
  isSameWeek: ds,
  isToday: us,
  isYesterday: fs,
  isTomorrow: ps,
  isDBY: gs,
  formatDate: Re,
  formatDateSpan: ms,
  getTimeBeforeDesc: _s,
  calculateTimestamp: Pe
}, Symbol.toStringTag, { value: "Module" }));
var D, T;
class xs {
  constructor(t) {
    M(this, D, void 0);
    M(this, T, void 0);
    C(this, D, t), C(this, T, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, D).parentElement.parentElement, d(this, D).parentElement), this.addActive(d(this, T).parentElement, d(this, T)), d(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, T, d(this, D)), this.addActive(d(this, T).parentElement, d(this, T)), C(this, D, document.querySelector(`[href='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, T).getAttribute("id")}']`)), this.addActive(d(this, D).parentElement.parentElement, d(this, D).parentElement);
  }
  addActive(t, e) {
    const n = t.children;
    Array.from(n).forEach((i) => {
      i.classList.remove("active"), i.classList.contains("fade") && i.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && this.transition(e).then(function(i) {
      e.dispatchEvent(new CustomEvent("shown.zui3.tab"));
    });
  }
  transition(t) {
    return new Promise(function(e, n) {
      setTimeout(() => {
        t.classList.add("in"), e();
      }, 100);
    });
  }
}
D = new WeakMap(), T = new WeakMap();
document.addEventListener("click", function(s) {
  s.target instanceof HTMLElement && (s.target.dataset.toggle === "tab" || s.target.getAttribute("data-tab")) && (s.preventDefault(), new xs(s.target).showTarget());
});
export {
  $s as Avatar,
  ye as DTable,
  xs as NavTabs,
  pt as Scrollbar,
  As as browser,
  bs as dtablePlugins,
  Ls as helpers,
  vs as store
};
