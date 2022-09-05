var It = Object.defineProperty;
var Ot = (s, t, e) => t in s ? It(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var _ = (s, t, e) => (Ot(s, typeof t != "symbol" ? t + "" : t, e), e), ze = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var d = (s, t, e) => (ze(s, t, "read from private field"), e ? e.call(s) : t.get(s)), M = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, C = (s, t, e, n) => (ze(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var _e = (s, t, e) => (ze(s, t, "access private method"), e);
var H;
class We {
  constructor(t, e) {
    M(this, H, void 0);
    _(this, "submitBtn");
    _(this, "resetBtn");
    _(this, "beforeSubmit");
    _(this, "success");
    _(this, "error");
    _(this, "finish");
    _(this, "ajaxUrl");
    _(this, "formData");
    _(this, "invalid");
    _(this, "timer");
    _(this, "novalidate");
    _(this, "validity");
    _(this, "rules");
    this.ajaxUrl = "", this.formData = {}, this.timer = null, this.invalid = !1, t = t.replace(/\s*/g, "");
    const n = t.split(",");
    n != null && n.length && n.forEach((i) => {
      var o;
      if (i && (C(this, H, document.querySelector(`#${i}`)), d(this, H))) {
        this.getAjaxFormData(d(this, H), e), this.ajaxUrl = (d(this, H).action ? d(this, H).action : e.url) || "", this.submitBtn = document.querySelector(`#${i} [data-type=submit]`), this.resetBtn = document.querySelector(`#${i} [data-type=reset]`), this.submitBtn && this.submitBtn.addEventListener("click", () => {
          this.submitForm();
        }), this.resetBtn && this.resetBtn.addEventListener("click", () => this.reset()), d(this, H).addEventListener("keydown", (a) => {
          if (a.target !== this.resetBtn)
            switch (a.keyCode) {
              case 13:
                this.submitForm();
                break;
            }
        }), this.novalidate = ((o = d(this, H).dataset) == null ? void 0 : o.novalidate) === "true";
        const r = [...d(this, H).querySelectorAll(".form-control:not(.disabled)")];
        this.validity = r.every((a) => a == null ? void 0 : a.validity), this.novalidate || r.forEach((a) => {
          a.tagName === "input" ? a.addEventListener("blur", () => {
            this.invalid = !this.validity;
          }) : a.addEventListener("change", () => {
            this.invalid = !this.validity;
          });
        });
      }
    });
  }
  reset() {
    this.invalid = !1, d(this, H).querySelectorAll(".form-control").forEach((e) => {
      this.removeError(e), e.value = null;
    });
  }
  addErrorTip(t, e) {
    const n = t.querySelectorAll(".form-tip");
    n != null && n.length && n.forEach((o) => {
      o.remove();
    });
    const i = document.createElement("div");
    i.innerText = e, i.classList.add("form-tip"), t.classList.add("has-error"), t.append(i);
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
    var o;
    let i = !0;
    return n.required && !/\S/.test(e) ? (this.addErrorTip(t.parentElement, n.msg), i = !1, !1) : (this.removeError(t), (o = n.patterns) != null && o.length && n.patterns.forEach((a) => {
      if (a.reg.test(e))
        this.removeError(t);
      else
        return this.addErrorTip(t.parentElement, a.msg), i = !1, !1;
    }), this.invalid = !i, !0);
  }
  checkValidity() {
    if (this.novalidate || !this.rules || !Object.keys(this.rules).length)
      return !0;
    [...d(this, H).querySelectorAll(".form-control:not(.disabled)")].reverse().forEach((n) => {
      for (const i in this.rules)
        i === n.id ? this.beforeCheck(n, this.formData[i], this.rules[i]) : this.checkRequired(n, n.value);
    });
  }
  getAjaxFormData(t, e) {
    typeof e == "function" && (e = { complete: e });
    const n = {};
    t.querySelectorAll(".form-control:not(.disabled)").forEach((o) => {
      n[o.id] = o.value || "";
    }), e.beforeSubmit && (this.beforeSubmit = e.beforeSubmit, delete e.beforeSubmit), e.success && (this.success = e.success, delete e.success), e.error && (this.error = e.error, delete e.error), e.finish && (this.finish = e.finish, delete e.finish), e.rules && (this.rules = { ...e.rules }, delete e.rules), this.formData = {
      timeout: window != null && window.config ? window == null ? void 0 : window.config.timeout : 0,
      dataType: "json",
      ...n,
      ...e
    };
  }
  changeFormDataToString(t) {
    const e = [], n = t.constructor == Array;
    let i;
    if (n)
      for (let o = 0; o < t.length; o++) {
        i = t[o];
        const r = i.name;
        i = i.value, e[e.length] = encodeURIComponent(r) + "=" + encodeURIComponent(i);
      }
    else
      for (const o in t)
        if (i = t[o], i && i.constructor == Array)
          for (const r in i)
            e[e.length] = encodeURIComponent(o) + "=" + encodeURIComponent(i[r]);
        else
          e[e.length] = encodeURIComponent(o) + "=" + encodeURIComponent(i);
    return e.join("&").replace(" ", "+");
  }
  ajaxRequest(t) {
    const { params: e, data: n, headers: i, timeout: o } = t;
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
    for (const u in i) {
      const g = i[u];
      typeof g == "string" && l.setRequestHeader(u, g);
    }
    o && (this.timer = setInterval(() => {
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
    this.checkValidity() && this.ajaxSubmit(d(this, H), this.formData);
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
      for (const i in e) {
        const o = Array.isArray(e[i]) ? e[i].join("") : e[i], r = d(this, H).querySelectorAll(`#${i}`);
        if (!(r != null && r.length)) {
          n.push(o);
          return;
        }
        r.forEach((a) => {
          this.addErrorTip(a.parentElement, e[i]);
        });
      }
      n.length && this.showFormMessage(n.join(""), "danger", null);
    }
  }
}
H = new WeakMap(), _(We, "NAME", "zui.ajaxForm");
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
var Me, R, _t, he, ct, ke = {}, bt = [], Ut = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function K(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function yt(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function b(s, t, e) {
  var n, i, o, r = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? Me.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ve(s, r, n, i, null);
}
function ve(s, t, e, n, i) {
  var o = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_t : i };
  return i == null && R.vnode != null && R.vnode(o), o;
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
      var e, n, i, o, r, a;
      t.__d && (r = (o = (e = t).__v).__e, (a = e.__P) && (n = [], (i = K({}, o)).__v = o.__v + 1, Oe(a, o, i, e.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, n, r == null ? le(o) : r, o.__h), Et(n, o), o.__e != r && wt(o)));
    });
}
function kt(s, t, e, n, i, o, r, a, c, f) {
  var l, u, g, p, m, S, y, v = n && n.__k || bt, w = v.length;
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
      Oe(s, p, g = g || ke, i, o, r, a, c, f), m = p.__e, (u = p.ref) && g.ref != u && (y || (y = []), g.ref && y.push(g.ref, null, p), y.push(u, p.__c || m, p)), m != null ? (S == null && (S = m), typeof p.type == "function" && p.__k === g.__k ? p.__d = c = St(p, c, s) : c = Ct(s, p, g, v, m, c), typeof e.type == "function" && (e.__d = c)) : c && g.__e == c && c.parentNode != s && (c = le(g));
    }
  for (e.__e = S, l = w; l--; )
    v[l] != null && (typeof e.type == "function" && v[l].__e != null && v[l].__e == e.__d && (e.__d = le(n, l + 1)), xt(v[l], v[l]));
  if (y)
    for (l = 0; l < y.length; l++)
      Rt(y[l], y[++l], y[++l]);
}
function St(s, t, e) {
  for (var n, i = s.__k, o = 0; i && o < i.length; o++)
    (n = i[o]) && (n.__ = s, t = typeof n.type == "function" ? St(n, t, e) : Ct(e, n, n, i, n.__e, t));
  return t;
}
function Ct(s, t, e, n, i, o) {
  var r, a, c;
  if (t.__d !== void 0)
    r = t.__d, t.__d = void 0;
  else if (e == null || i != o || i.parentNode == null)
    e:
      if (o == null || o.parentNode !== s)
        s.appendChild(i), r = null;
      else {
        for (a = o, c = 0; (a = a.nextSibling) && c < n.length; c += 2)
          if (a == i)
            break e;
        s.insertBefore(i, o), r = o;
      }
  return r !== void 0 ? r : i.nextSibling;
}
function qt(s, t, e, n, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Ce(s, o, null, e[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Ce(s, o, t[o], e[o], n);
}
function dt(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || Ut.test(t) ? e : e + "px";
}
function Ce(s, t, e, n, i) {
  var o;
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
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + o] = e, e ? n || s.addEventListener(t, o ? ft : ut, o) : s.removeEventListener(t, o ? ft : ut, o);
    else if (t !== "dangerouslySetInnerHTML") {
      if (i)
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
function Oe(s, t, e, n, i, o, r, a, c) {
  var f, l, u, g, p, m, S, y, v, w, $, j, D, A = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (f = R.__b) && f(t);
  try {
    e:
      if (typeof A == "function") {
        if (y = t.props, v = (f = A.contextType) && n[f.__c], w = f ? v ? v.props.value : f.__ : n, e.__c ? S = (l = t.__c = e.__c).__ = l.__E : ("prototype" in A && A.prototype.render ? t.__c = l = new A(y, w) : (t.__c = l = new se(y, w), l.constructor = A, l.render = Gt), v && v.sub(l), l.props = y, l.state || (l.state = {}), l.context = w, l.__n = n, u = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), A.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = K({}, l.__s)), K(l.__s, A.getDerivedStateFromProps(y, l.__s))), g = l.props, p = l.state, u)
          A.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (A.getDerivedStateFromProps == null && y !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(y, w), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(y, l.__s, w) === !1 || t.__v === e.__v) {
            l.props = y, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(y, l.__s, w), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(g, p, m);
          });
        }
        if (l.context = w, l.props = y, l.__v = t, l.__P = s, $ = R.__r, j = 0, "prototype" in A && A.prototype.render)
          l.state = l.__s, l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, $ && $(t), f = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++j < 25);
        l.state = l.__s, l.getChildContext != null && (n = K(K({}, n), l.getChildContext())), u || l.getSnapshotBeforeUpdate == null || (m = l.getSnapshotBeforeUpdate(g, p)), D = f != null && f.type === $e && f.key == null ? f.props.children : f, kt(s, Array.isArray(D) ? D : [D], t, e, n, i, o, r, a, c), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), S && (l.__E = l.__ = null), l.__e = !1;
      } else
        o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = Yt(e.__e, t, e, n, i, o, r, c);
    (f = R.diffed) && f(t);
  } catch (I) {
    t.__v = null, (c || o != null) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), R.__e(I, t, e);
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
function Yt(s, t, e, n, i, o, r, a) {
  var c, f, l, u = e.props, g = t.props, p = t.type, m = 0;
  if (p === "svg" && (i = !0), o != null) {
    for (; m < o.length; m++)
      if ((c = o[m]) && "setAttribute" in c == !!p && (p ? c.localName === p : c.nodeType === 3)) {
        s = c, o[m] = null;
        break;
      }
  }
  if (s == null) {
    if (p === null)
      return document.createTextNode(g);
    s = i ? document.createElementNS("http://www.w3.org/2000/svg", p) : document.createElement(p, g.is && g), o = null, a = !1;
  }
  if (p === null)
    u === g || a && s.data === g || (s.data = g);
  else {
    if (o = o && Me.call(s.childNodes), f = (u = e.props || ke).dangerouslySetInnerHTML, l = g.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (u = {}, m = 0; m < s.attributes.length; m++)
          u[s.attributes[m].name] = s.attributes[m].value;
      (l || f) && (l && (f && l.__html == f.__html || l.__html === s.innerHTML) || (s.innerHTML = l && l.__html || ""));
    }
    if (qt(s, g, u, i, a), l)
      t.__k = [];
    else if (m = t.props.children, kt(s, Array.isArray(m) ? m : [m], t, e, n, i && p !== "foreignObject", o, r, o ? o[0] : e.__k && le(e, 0), a), o != null)
      for (m = o.length; m--; )
        o[m] != null && yt(o[m]);
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
  var n, i;
  if (R.unmount && R.unmount(s), (n = s.ref) && (n.current && n.current !== s.__e || Rt(n, null, t)), (n = s.__c) != null) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (o) {
        R.__e(o, t);
      }
    n.base = n.__P = null;
  }
  if (n = s.__k)
    for (i = 0; i < n.length; i++)
      n[i] && xt(n[i], t, typeof s.type != "function");
  e || s.__e == null || yt(s.__e), s.__e = s.__d = void 0;
}
function Gt(s, t, e) {
  return this.constructor(s, e);
}
function Vt(s, t, e) {
  var n, i, o;
  R.__ && R.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, o = [], Oe(t, s = (!n && e || t).__k = b($e, null, [s]), i || ke, ke, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? Me.call(t.childNodes) : null, o, !n && e ? e : i ? i.__e : t.firstChild, n), Et(o, s);
}
Me = bt.slice, R = { __e: function(s, t, e, n) {
  for (var i, o, r; t = t.__; )
    if ((i = t.__c) && !i.__)
      try {
        if ((o = i.constructor) && o.getDerivedStateFromError != null && (i.setState(o.getDerivedStateFromError(s)), r = i.__d), i.componentDidCatch != null && (i.componentDidCatch(s, n || {}), r = i.__d), r)
          return i.__E = i;
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
class Ss extends se {
  render() {
    const { size: t, rounded: e, className: n, style: i, src: o, text: r, children: a, ...c } = this.props, f = [n], l = { ...i };
    let u = null;
    return o ? u = /* @__PURE__ */ b("img", {
      src: o,
      alt: r
    }) : u = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && f.push(`avatar-${t}`), typeof e == "string" && f.push(`rounded-${e}`), /* @__PURE__ */ b("div", {
      className: z(f),
      style: l,
      ...c
    }, u, a);
  }
}
function Kt(s) {
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
function Xt(s) {
  document.readyState !== "loading" ? s() : document.addEventListener("DOMContentLoaded", s);
}
function Jt(s, t) {
  const e = typeof s == "string" ? document.querySelector(s) : s;
  if (!e)
    return !1;
  const n = e.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return n.left >= 0 && n.top >= 0 && n.left + n.width <= o && n.top + n.height <= i;
  const r = n.top <= i && n.top + n.height >= 0, a = n.left <= o && n.left + n.width >= 0;
  return r && a;
}
const Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Kt,
  domReady: Xt,
  isElementVisible: Jt,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
const Zt = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: i, value: o } = n;
    t[i] = o;
  }), t;
};
class Qt extends HTMLElement {
  constructor() {
    super();
    _(this, "$button");
    _(this, "$icon");
    _(this, "onClick");
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
    const e = Zt(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Qt);
function Mt() {
  document.querySelectorAll(".dropdown-menu").forEach((t) => {
    var e;
    (e = t.parentElement) == null || e.classList.remove("open");
  });
}
function es(s) {
  const t = s.parentElement, e = s.nextElementSibling;
  !t || !e || t.classList.contains("dropdown-hover") || (t.className.includes("open") ? t.classList.remove("open") : (Mt(), t.classList.add("open")));
}
document.addEventListener("click", function(s) {
  const t = s.target;
  t.dataset.toggle === "dropdown" ? es(t) : Mt();
});
var Z, Q;
class pt extends se {
  constructor(e) {
    var n;
    super(e);
    M(this, Z, 0);
    M(this, Q, null);
    _(this, "_handleWheel", (e) => {
      var o;
      const { wheelContainer: n } = this.props, i = e.target;
      !i || !n || (typeof n == "string" && i.closest(n) || typeof n == "object") && this.scrollOffset((this.props.type === "horz" ? e.deltaX : e.deltaY) * ((o = this.props.wheelSpeed) != null ? o : 1)) && e.preventDefault();
    });
    _(this, "_handleMouseMove", (e) => {
      const { dragStart: n } = this.state;
      n && (d(this, Z) && cancelAnimationFrame(d(this, Z)), C(this, Z, requestAnimationFrame(() => {
        const i = this.props.type === "horz" ? e.clientX - n.x : e.clientY - n.y;
        this.scroll(n.offset + i * this.props.scrollSize / this.props.clientSize), C(this, Z, 0);
      })), e.preventDefault());
    });
    _(this, "_handleMouseUp", () => {
      this.state.dragStart && this.setState({
        dragStart: !1
      });
    });
    _(this, "_handleMouseDown", (e) => {
      this.state.dragStart || this.setState({ dragStart: { x: e.clientX, y: e.clientY, offset: this.scrollPos } }), e.stopPropagation();
    });
    _(this, "_handleClick", (e) => {
      const n = e.currentTarget;
      if (!n)
        return;
      const i = n.getBoundingClientRect(), { type: o, clientSize: r, scrollSize: a } = this.props, c = (o === "horz" ? e.clientX - i.left : e.clientY - i.top) - this.barSize / 2;
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
    const { clientSize: e, scrollSize: n, size: i = 10 } = this.props;
    return Math.max(Math.round(e * e / n), 2 * i);
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
    var i;
    const { onScroll: n } = this.props;
    n && n(e, (i = this.props.type) != null ? i : "vert");
  }
  render() {
    const {
      clientSize: e,
      type: n,
      size: i = 10,
      className: o,
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
    return n === "horz" ? (m.height = i, m.width = e, S.width = this.barSize, S.left = Math.round(g * (e - S.width) / u)) : (m.width = i, m.height = e, S.height = this.barSize, S.top = Math.round(g * (e - S.height) / u)), /* @__PURE__ */ b("div", {
      className: z("scrollbar", o, {
        "is-vert": n === "vert",
        "is-horz": n === "horz",
        "is-dragging": p
      }),
      style: m,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ b("div", {
      className: "scrollbar-bar",
      style: S,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Z = new WeakMap(), Q = new WeakMap();
function Ue({ col: s, className: t, height: e, rowID: n, hoverCol: i, rowData: o, onRenderCell: r, style: a, children: c, ...f }) {
  const { cellStyle: l, align: u, className: g } = s.setting, p = {
    left: s.left,
    width: s.realWidth,
    height: e,
    justifyContent: u ? u === "left" ? "start" : u === "right" ? "end" : u : void 0,
    ...a,
    ...l
  };
  let m = [
    c != null ? c : o == null ? void 0 : o[s.name]
  ];
  r && (m = r(m, n, s, o));
  const S = [], y = [];
  m == null || m.forEach((w) => {
    typeof w == "object" && w && ("html" in w || "className" in w || "style" in w) ? (w.html && y.push(/* @__PURE__ */ b("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: w.html }
    })), w.style && Object.assign(p, w.style), w.className && S.push(w.className)) : y.push(w);
  });
  const v = z("dtable-cell", t, {
    "dtable-col-hover": i
  }, g, S);
  return /* @__PURE__ */ b("div", {
    className: v,
    style: p,
    "data-col": s.name,
    ...f
  }, y);
}
function ts({ col: s, children: t, style: e, ...n }) {
  const { sortType: i } = s.setting;
  return /* @__PURE__ */ b(Ue, {
    col: s,
    style: { ...e, ...s.setting.style },
    "data-sort": i || null,
    "data-type": s.type,
    ...n
  }, s.setting.title, i && /* @__PURE__ */ b("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), t);
}
function je({ rowID: s, className: t, top: e = 0, left: n = 0, width: i, height: o, cols: r, data: a, hoverCol: c, CellComponent: f = Ue, onRenderCell: l }) {
  return /* @__PURE__ */ b("div", {
    className: z("dtable-cells", t),
    style: { top: e, left: n, width: i, height: o }
  }, r.map((u) => u.visible ? /* @__PURE__ */ b(f, {
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
  fixedLeftCols: i,
  fixedRightCols: o,
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
  ...y
}) {
  let v = null;
  i != null && i.length && (v = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-left",
    cols: i,
    width: a,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  let w = null;
  r != null && r.length && (w = /* @__PURE__ */ b(je, {
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
  o != null && o.length && ($ = /* @__PURE__ */ b(je, {
    className: "dtable-fixed-right",
    cols: o,
    left: a + c,
    width: l,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  const j = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ b("div", {
    className: z("dtable-row", t),
    style: j,
    "data-id": s,
    ...y
  }, v, w, $);
}
function ss({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: ts
  };
  return t && (n = t(n)), /* @__PURE__ */ b("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ b($t, {
    ...n
  }));
}
function ns({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: i,
  rowHeight: o,
  onRenderRow: r,
  ...a
}) {
  return t = { ...t, top: e, height: i }, /* @__PURE__ */ b("div", {
    className: z("dtable-rows", s),
    style: t
  }, n.map((c) => {
    let f = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: o,
      ...a
    };
    return r && (f = r(f, c)), /* @__PURE__ */ b($t, {
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
    const { defaultOptions: i, ...o } = s;
    return {
      ...o,
      defaultOptions: { ...i, ...n }
    };
  };
  return e.plugin = s, e;
}
function gt(s) {
  return Ee.get(s);
}
function Ht(s) {
  return Ee.delete(s);
}
function is(s) {
  const t = /* @__PURE__ */ new Map();
  return [s == null ? void 0 : s.plugins].flat().reduce((e, n) => {
    var o;
    if (!n)
      return e;
    let i;
    return typeof n == "string" ? (i = gt(n), i || console.warn(`DTable: Cannot found plugin "${n}"`)) : typeof n == "function" ? i = n.plugin : typeof n == "object" ? i = n : console.warn("DTable: Invalid plugin", n), i && !t.has(i.name) && ((o = i.plugins) == null || o.forEach((r) => {
      if (t.has(r))
        return;
      const a = gt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${i == null ? void 0 : i.name}"`);
        return;
      }
      e.push(a), t.set(a.name, a);
    }), e.push(i), t.set(i.name, i)), e;
  }, []);
}
function os(s, t) {
  return s.reduce((e, n) => {
    const { options: i, defaultOptions: o } = n;
    return o && (e = { ...o, ...e }), i && Object.assign(e, typeof i == "function" ? i(e) : i), e;
  }, t);
}
function Fe() {
  return {
    width: "100%",
    height: "auto",
    rowHeight: 35,
    defaultColWidth: 80,
    minColWidth: 20,
    maxColWidth: 1e3,
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
var ee, G, E, te, L, ie;
class Be extends se {
  constructor(e) {
    super(e);
    _(this, "ref", vt());
    M(this, ee, 0);
    M(this, G, !1);
    M(this, E, void 0);
    M(this, te, void 0);
    M(this, L, []);
    M(this, ie, void 0);
    _(this, "_handleResize", () => {
      d(this, ee) && cancelAnimationFrame(d(this, ee)), C(this, ee, requestAnimationFrame(() => {
        this.forceUpdate(), C(this, ee, 0);
      }));
    });
    _(this, "_handleRenderRow", (e, n) => (d(this, E).onRenderRow && (e = d(this, E).onRenderRow.call(this, e, n)), d(this, L).forEach((i) => {
      i.onRenderRow && (e = i.onRenderRow.call(this, e, n));
    }), e));
    _(this, "_handleRenderHeaderRow", (e) => (d(this, E).onRenderHeaderRow && (e = d(this, E).onRenderHeaderRow.call(this, e)), d(this, L).forEach((n) => {
      n.onRenderHeaderRow && (e = n.onRenderHeaderRow.call(this, e));
    }), e));
    _(this, "_handleRenderCell", (e, n, i, o) => {
      const r = n === "HEADER" ? "onRenderHeaderCell" : "onRenderCell";
      return i.setting[r] && (e = i.setting[r].call(this, e, n, i, o)), d(this, E)[r] && (e = d(this, E)[r].call(this, e, n, i, o)), d(this, L).forEach((a) => {
        a[r] && (e = a[r].call(this, e, n, i, o));
      }), e;
    });
    _(this, "_handleScroll", (e, n) => {
      n === "horz" ? this.scrollLeft(e) : this.scrollTop(e);
    });
    _(this, "_handleClick", (e) => {
      var c, f, l, u, g, p, m, S;
      const n = e.target;
      if (!n)
        return;
      const i = n.closest(".dtable-row");
      if (!i)
        return;
      const o = n.closest(".dtable-cell"), r = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "", a = (f = i.getAttribute("data-id")) != null ? f : "";
      if (a === "HEADER")
        o && ((l = d(this, E).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: o }), d(this, L).forEach((y) => {
          var v;
          (v = y.onHeaderCellClick) == null || v.call(this, e, { colName: r, element: o });
        }));
      else {
        const y = (u = d(this, ie)) == null ? void 0 : u.visibleRows.find((v) => v.id === a);
        if (o) {
          if (((g = d(this, E).onCellClick) == null ? void 0 : g.call(this, e, { colName: r, rowID: a, rowInfo: y, element: o, rowElement: i })) === !0)
            return;
          for (const v of d(this, L))
            if (((p = v.onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: y, element: o, rowElement: i })) === !0)
              return;
        }
        if (((m = d(this, E).onRowClick) == null ? void 0 : m.call(this, e, { rowID: a, rowInfo: y, element: i })) === !0)
          return;
        for (const v of d(this, L))
          if (((S = v.onRowClick) == null ? void 0 : S.call(this, e, { rowID: a, rowInfo: y, element: i })) === !0)
            return;
      }
    });
    _(this, "_handleMouseOver", (e) => {
      var r, a;
      const { colHover: n } = d(this, E);
      if (!n)
        return;
      const i = (r = e.target) == null ? void 0 : r.closest(".dtable-cell");
      if (!i || n === "header" && !i.closest(".dtable-header"))
        return;
      const o = (a = i == null ? void 0 : i.getAttribute("data-col")) != null ? a : "";
      this.setState({ hoverCol: o });
    });
    _(this, "_handleMouseLeave", () => {
      this.setState({ hoverCol: void 0 });
    });
    this.state = { scrollTop: 0, scrollLeft: 0 };
    const n = { ...Fe(), ...e };
    C(this, E, Object.freeze(n)), C(this, te, Object.freeze(is(n))), d(this, te).forEach((i) => {
      var o;
      (o = i.onCreate) == null || o.call(this, i);
    });
  }
  get options() {
    return d(this, E);
  }
  get plugins() {
    return d(this, L);
  }
  get layout() {
    return d(this, ie);
  }
  componentDidMount() {
    d(this, G) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, E).responsive && window.addEventListener("resize", this._handleResize), d(this, L).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    d(this, G) && this._afterRender();
  }
  componentWillUnmount() {
    const { current: e } = this.ref;
    e && (e.removeEventListener("click", this._handleClick), d(this, E).colHover && (e.removeEventListener("mouseover", this._handleMouseOver), e.removeEventListener("mouseleave", this._handleMouseLeave))), window.removeEventListener("resize", this._handleResize), d(this, L).forEach((n) => {
      var i;
      (i = n.onUnmounted) == null || i.call(this);
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
    const e = Fe(), n = os(d(this, te), { ...e, ...this.props }), i = d(this, te).filter((h) => !h.when || h.when(n));
    C(this, L, Object.freeze(i)), i.forEach((h) => {
      var x;
      const k = (x = h.beforeLayout) == null ? void 0 : x.call(this, n);
      k && Object.assign(n, k);
    }), C(this, E, Object.freeze(n));
    const {
      header: o,
      footer: r,
      rowHeight: a = e.rowHeight,
      defaultColWidth: c = e.minColWidth,
      minColWidth: f = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = n, u = o ? n.headerHeight || a : 0, g = r ? n.footerHeight || a : 0, p = (h, k, x) => (h && (k && (h = Math.max(k, h)), x && (h = Math.min(x, h))), h), m = [], S = [], y = [];
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
      h.fixed === "left" ? (Y.left = v, v += W, m.push(Y)) : h.fixed === "right" ? (Y.left = w, w += W, S.push(Y)) : y.push(Y), i.forEach((it) => {
        var ot, rt, lt;
        const me = (rt = it.colTypes) == null ? void 0 : rt[(ot = h.type) != null ? ot : ""];
        if (me) {
          const at = typeof me == "function" ? me(h) : me;
          at && Object.assign(h, at);
        }
        (lt = it.onAddCol) == null || lt.call(this, Y);
      });
    });
    let $ = n.width, j = 0;
    if (typeof $ == "function" && ($ = $()), $ === "auto")
      j = v + w, y.forEach((h) => {
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
    const { data: D, rowKey: A = "id" } = n, I = [], Ae = (h, k, x) => {
      var q, ge;
      const W = { data: x != null ? x : { [A]: h }, top: 0, id: h, index: I.length };
      if (x || (W.lazy = !0), I.push(W), ((q = n.onAddRow) == null ? void 0 : q.call(this, W, k)) !== !1) {
        for (const Y of i)
          if (((ge = Y.onAddRow) == null ? void 0 : ge.call(this, W, k)) === !1)
            return;
      }
    };
    if (typeof D == "number")
      for (let h = 0; h < D; h++)
        Ae(h, h);
    else
      Array.isArray(D) && D.forEach((h, k) => {
        typeof h == "object" ? Ae(h[A], k, h) : Ae(h, k);
      });
    const O = [];
    let ce = 0;
    I.forEach((h) => {
      var k, x;
      if (((k = n.rowFilter) == null ? void 0 : k.call(this, h)) !== !1) {
        for (const W of i)
          if (((x = W.rowFilter) == null ? void 0 : x.call(this, h)) === !1)
            return;
        h.index = O.length, h.top = ce, O.push(h), ce += a;
      }
    });
    let He = !1;
    n.rowSorter && (O.sort(n.rowSorter.bind(this)), He = !0), i.forEach((h) => {
      h.rowSorter && (O.sort(h.rowSorter.bind(this)), He = !0);
    }), He && O.forEach((h, k) => {
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
    const { scrollTop: pe = 0, scrollLeft: Le = 0, hoverCol: Pt } = this.state, Ye = X - u - g, Ge = pe + Ye, Ve = [], Ne = j - v - w;
    let J = 0;
    const Te = [];
    let Ke = 0;
    if (y.forEach((h) => {
      h.realWidth ? J += h.realWidth : (Te.push(h), Ke += h.flex);
    }), Te.length) {
      const h = Math.max(0, Ne - J);
      Te.forEach((k) => {
        var q;
        const { minWidth: x = f, maxWidth: W = l } = k.setting;
        k.realWidth = Math.min(W, Math.max(x, Math.ceil(h * ((q = k.flex) != null ? q : 1) / Ke))), J += k.realWidth;
      });
    }
    J = 0, y.forEach((h) => {
      h.left += J, J += h.realWidth, (h.left + h.realWidth < Le || h.left > Le + Ne) && (h.visible = !1);
    });
    const Xe = Math.floor(pe / a), Je = Math.min(O.length, Math.ceil(Ge / a)), Dt = [];
    for (let h = Xe; h < Je; h++) {
      const k = O[h];
      k.top -= pe, Ve.push(k), k.lazy === !0 && Dt.push(k.id);
    }
    let ne = {
      allRows: I,
      width: j,
      height: X,
      rows: O,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: Ye,
      rowsHeightTotal: ce,
      hoverCol: Pt,
      header: o,
      footer: r,
      headerHeight: u,
      footerHeight: g,
      colsInfo: {
        fixedLeftCols: m,
        fixedRightCols: S,
        scrollCols: y,
        flexLeftWidth: v,
        scrollWidth: Ne,
        scrollWidthTotal: J,
        flexRightWidth: w
      },
      scrollBottom: Ge,
      scrollTop: pe,
      scrollLeft: Le,
      startRowIndex: Xe,
      endRowIndex: Je
    };
    if (n.onLayout) {
      const h = n.onLayout.call(this, ne);
      h && (ne = h);
    }
    return i.forEach((h) => {
      if (h.onLayout) {
        const k = h.onLayout.call(this, ne);
        k && (ne = k);
      }
    }), C(this, ie, Object.freeze(ne)), ne;
  }
  getColInfo(e) {
    var i, o;
    const { layout: n } = this;
    if (!!n)
      return (o = (i = n.colsInfo.fixedLeftCols.find((r) => r.name === e)) != null ? i : n.colsInfo.fixedRightCols.find((r) => r.name === e)) != null ? o : n.colsInfo.scrollCols.find((r) => r.name === e);
  }
  renderHeader(e) {
    const { header: n, hoverCol: i, colsInfo: o, headerHeight: r } = e;
    if (!n)
      return null;
    if (n === !0)
      return /* @__PURE__ */ b(ss, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: i,
        ...o
      });
    let a, c;
    if (typeof n == "function") {
      const f = n(e, this.state);
      typeof f == "object" && f && "__html" in f ? c = f : a = f;
    } else
      a = n;
    return /* @__PURE__ */ b("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: c
    }, a);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: r, hoverCol: a, colsInfo: c } = e;
    return /* @__PURE__ */ b(ns, {
      top: n,
      height: i,
      rows: o,
      rowHeight: r,
      hoverCol: a,
      scrollLeft: this.state.scrollLeft,
      onRenderCell: this._handleRenderCell,
      onRenderRow: this._handleRenderRow,
      ...c
    });
  }
  renderFooter(e) {
    const { footer: n, footerHeight: i } = e;
    if (!n)
      return null;
    let o, r;
    if (typeof n == "function") {
      const a = n(e, this.state);
      typeof a == "object" && a && "__html" in a ? r = a : o = a;
    } else
      o = n;
    return /* @__PURE__ */ b("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: r
    }, o);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: f, scrollWidth: l } = o, { scrollbarSize: u = 10, horzScrollbarPos: g } = this.props;
    return f > l && n.push(/* @__PURE__ */ b(pt, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: f,
      clientSize: l,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: g === "inside" ? 0 : -u,
      size: u,
      wheelContainer: this.ref
    })), c > a && n.push(/* @__PURE__ */ b(pt, {
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
    C(this, G, !1), (e = d(this, E).afterRender) == null || e.call(this), d(this, L).forEach((n) => {
      var i;
      return (i = n.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var u, g;
    const e = this.getLayout(), { className: n, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: c, scrollbarHover: f } = (u = d(this, E)) != null ? u : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ b("div", {
      className: z("dtable", n, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
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
ee = new WeakMap(), G = new WeakMap(), E = new WeakMap(), te = new WeakMap(), L = new WeakMap(), ie = new WeakMap(), _(Be, "addPlugin", At), _(Be, "removePlugin", Ht);
function rs(s, t) {
  var o;
  typeof s == "boolean" && (t = s, s = void 0);
  const e = this.state.checkedRows, n = {}, i = (r, a) => {
    !!e[r] !== a && (a ? e[r] = !0 : delete e[r], n[r] = a);
  };
  return s === void 0 ? (t === void 0 && (t = !Lt.call(this)), (o = this.layout) == null || o.allRows.forEach(({ id: r }) => {
    i(r, !!t);
  })) : (Array.isArray(s) ? s : [s]).forEach((a) => {
    i(a, t != null ? t : !e[a]);
  }), Object.keys(n).length && this.setState({ checkedRows: { ...e } }, () => {
    var r;
    (r = this.options.onCheckChange) == null || r.call(this, n);
  }), n;
}
function ls(s) {
  var t;
  return (t = this.state.checkedRows[s]) != null ? t : !1;
}
function Lt() {
  var s;
  return this.getChecks().length === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function as() {
  return Object.keys(this.state.checkedRows);
}
const Nt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (s) => !!s.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = rs.bind(this), this.isRowChecked = ls.bind(this), this.isAllRowChecked = Lt.bind(this), this.getChecks = as.bind(this);
  },
  onRenderCell(s, t, e) {
    var o, r;
    const { checkbox: n } = e.setting;
    if (typeof n == "function" ? n.call(this, t) : n) {
      const a = this.isRowChecked(t), c = (r = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, t)) != null ? r : /* @__PURE__ */ b("input", {
        type: "checkbox",
        checked: a
      });
      s.unshift(c), s.push({ className: "has-checkbox" });
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var o, r;
    const { checkbox: n } = e.setting;
    if (typeof n == "function" ? n.call(this, t) : n) {
      const a = this.isAllRowChecked(), c = (r = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, t)) != null ? r : /* @__PURE__ */ b("input", {
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
function Pe(s) {
  const t = this.nestedMap.get(s);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = Pe.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Pe.call(this, t.parent).level + 1 : 0, t;
}
function cs(s, t) {
  var n;
  let e = (n = this.state.collapsedRows) != null ? n : {};
  if (s === "HEADER")
    if (t === void 0 && (t = !Tt.call(this)), t) {
      const i = this.nestedMap.entries();
      for (const [o, r] of i)
        r.state === "expanded" && (e[o] = !0);
    } else
      e = {};
  else {
    const i = Array.isArray(s) ? s : [s];
    t === void 0 && (t = !e[i[0]]), i.forEach((o) => {
      const r = this.nestedMap.get(o);
      t && (r == null ? void 0 : r.children) ? e[o] = !0 : delete e[o];
    });
  }
  this.setState({ collapsedRows: { ...e } }, () => {
    var i;
    (i = this.options.onNestedChange) == null || i.call(this);
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
  for (const i of e) {
    const o = s.get(i);
    !o || typeof o.order == "number" || (o.order = t++, (n = o.children) != null && n.length && (t = zt(s, t, o.children)));
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
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = cs.bind(this), this.isAllCollapsed = Tt.bind(this), this.getNestedRowInfo = Pe.bind(this);
  },
  beforeLayout() {
    this.nestedMap.clear();
  },
  onAddRow(s) {
    var n, i, o;
    const t = s.data[(n = this.options.nestedParentKey) != null ? n : "parent"], e = (i = this.nestedMap.get(s.id)) != null ? i : {
      state: "",
      parent: t,
      level: 0
    };
    if (s.data[(o = this.options.asParentKey) != null ? o : "asParent"] && (e.children = []), this.nestedMap.set(s.id, e), t) {
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
    var o, r;
    const e = this.getNestedRowInfo(s.id), n = this.getNestedRowInfo(t.id);
    typeof e.order != "number" && zt(this.nestedMap);
    const i = ((o = e.order) != null ? o : 0) - ((r = n.order) != null ? r : 0);
    return i === 0 ? s.index - t.index : i;
  },
  onRenderCell(s, t, e, n) {
    var r, a, c;
    const { nestedToggle: i } = e.setting, o = this.getNestedRowInfo(t);
    if (i && (o.children || o.parent) && s.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, o, t, e, n)) != null ? a : /* @__PURE__ */ b("a", {
      role: "button",
      className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ b("span", {
      className: "dtable-nested-toggle-icon"
    }))), o.level) {
      let { nestedIndent: f = i } = e.setting;
      f && (f === !0 && (f = (c = this.options.nestedIndent) != null ? c : 12), s.unshift(/* @__PURE__ */ b("div", {
        className: "dtable-nested-indent",
        style: { width: f * o.level + "px" }
      })));
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var n, i;
    return e.setting.nestedToggle && s.unshift((i = (n = this.options.onRenderNestedToggle) == null ? void 0 : n.call(this, void 0, t, e, void 0)) != null ? i : /* @__PURE__ */ b("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ b("span", {
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
    return Object.keys(n).forEach((i) => {
      var r;
      const o = (r = n[i]) != null ? r : 0;
      s = s.replace(new RegExp(`\\{${i}\\}`, "g"), `${o}`);
    }), s;
  }
  for (let n = 0; n < t.length; n++) {
    const i = (e = t[n]) != null ? e : "";
    s = s.replace(new RegExp(`\\{${n}\\}`, "g"), `${i}`);
  }
  return s;
}
const P = 24 * 60 * 60 * 1e3, N = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ae = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), De = (s, t = new Date()) => N(s).getFullYear() === N(t).getFullYear(), Wt = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), hs = (s, t = new Date()) => {
  s = N(s), t = N(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, ds = (s, t) => ae(N(t), s), us = (s, t) => ae(N(t).getTime() - P, s), fs = (s, t) => ae(N(t).getTime() + P, s), ps = (s, t) => ae(N(t).getTime() - 2 * P, s), Re = (s, t = "yyyy-MM-dd hh:mm") => {
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
      const i = `${e[n]}`;
      t = t.replace(RegExp.$1, RegExp.$1.length === 1 ? i : `00${i}`.substring(i.length));
    }
  }), t;
}, gs = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Re(s, De(s) ? n.month : n.full);
  if (ae(s, t))
    return i;
  const o = Re(t, De(s, t) ? Wt(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
}, ms = (s) => {
  const t = new Date().getTime();
  switch (s) {
    case "oneWeek":
      return t - P * 7;
    case "oneMonth":
      return t - P * 31;
    case "threeMonth":
      return t - P * 31 * 3;
    case "halfYear":
      return t - P * 183;
    case "oneYear":
      return t - P * 365;
    case "twoYear":
      return t - 2 * (P * 365);
    default:
      return 0;
  }
}, Ie = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, Ie(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, Ie(s, "day", e, n);
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
        const { linkTemplate: i = "", linkProps: o } = e.setting, r = be(i, n);
        return s[0] = /* @__PURE__ */ b("a", {
          href: r,
          ...o
        }, s[0]), s;
      }
    },
    avatar: {
      onRenderCell(s, t, e, n) {
        const { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ b("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ b("img", {
          src: n ? n[r] : ""
        }));
        return i ? s.unshift(a) : s[0] = a, s;
      }
    },
    circleProgress: {
      onRenderCell(s, t, e) {
        const { circleSize: n = 24, circleBorderSize: i = 1, circleBgColor: o = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (n - i) / 2, c = n / 2, f = s[0];
        return s[0] = /* @__PURE__ */ b("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ b("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - f) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ b("text", {
          x: c,
          y: c + i,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(f))), s;
      }
    },
    actionButtons: {
      onRenderCell(s, t, e, n) {
        const i = n == null ? void 0 : n[e.name];
        if (!i)
          return s;
        const { actionBtnTemplate: o = '<button type="button" data-action="{action}" title="{title}" class="{className}"><i class="icon icon-{icon}"></i></button>', actionBtnData: r = {}, actionBtnClass: a = "btn text-primary square size-sm ghost" } = e.setting;
        return [{
          html: i.map((c) => {
            typeof c == "string" && (c = { action: c });
            const f = r[c.action];
            return f && (c = { className: a, ...f, ...c }), be(o, c);
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
        const { format: i, type: o } = n, r = s[0];
        return typeof i == "function" ? s[0] = o === "html" ? { html: i(r) } : i(r) : o === "datetime" ? s[0] = Re(r, i) : o === "html" ? s[0] = { html: be(i, r) } : s[0] = be(i, r), s;
      }
    }
  }
};
fe(Ft);
const Bt = {
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
    return e.forEach((i, o) => {
      const { group: r } = i;
      if (!r) {
        n[i.name] = o;
        return;
      }
      let a = this.headerGroups.get(r);
      a ? a.cols.push(i.name) : (a = { cols: [i.name], index: o }, this.headerGroups.set(r, a)), n[i.name] = a.index + a.cols.length / e.length;
    }), e.sort((i, o) => n[i.name] - n[o.name]), {
      headerHeight: !s.headerHeight && s.rowHeight ? s.rowHeight * 2 : void 0,
      cols: e
    };
  },
  onRenderHeaderCell(s, t, e) {
    const { group: n } = e.setting;
    if (n) {
      const i = this.headerGroups.get(n), o = this.layout.headerHeight / 2;
      if (e.name === i.cols[0]) {
        const r = i.cols.reduce((c, f) => {
          var l, u;
          return c + ((u = (l = this.getColInfo(f)) == null ? void 0 : l.realWidth) != null ? u : 0);
        }, 0), a = {
          height: o - 1,
          width: r - 1
        };
        s.push(/* @__PURE__ */ b("div", {
          class: "dtable-header-group",
          style: a
        }, n));
      }
      s.push({
        className: "dtable-header-as-group",
        style: { paddingTop: o }
      });
    }
    return s;
  }
};
fe(Bt);
const _s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Nt,
  nested: jt,
  rich: Ft,
  headerGroup: Bt
}, Symbol.toStringTag, { value: "Module" }));
var de;
class ye {
  constructor(t, e) {
    _(this, "element");
    _(this, "options");
    M(this, de, vt());
    var n;
    this.element = t, this.options = { ...Fe(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  get $() {
    return d(this, de).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Vt(/* @__PURE__ */ b(Be, {
      ref: d(this, de),
      ...this.options
    }), this.element);
  }
}
de = new WeakMap(), _(ye, "NAME", "zui.dtable"), _(ye, "definePlugin", fe), _(ye, "removePlugin", Ht), _(ye, "plugins", _s);
let bs = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var ue, V, F, oe, re, we;
const qe = class {
  constructor(t, e = "local") {
    M(this, re);
    M(this, ue, void 0);
    M(this, V, void 0);
    M(this, F, void 0);
    M(this, oe, void 0);
    C(this, ue, e), C(this, V, `ZUI_STORE:${t != null ? t : bs()}`), C(this, F, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, ue);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || C(this, oe, new qe(d(this, V), "session")), d(this, oe));
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
        const i = d(this, F).getItem(n);
        typeof i == "string" && t(n.substring(d(this, V).length + 1), JSON.parse(i));
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
ue = new WeakMap(), V = new WeakMap(), F = new WeakMap(), oe = new WeakMap(), re = new WeakSet(), we = function(t) {
  return `${d(this, V)}:${t}`;
};
const ys = new xe("DEFAULT");
function vs(s, t = "local") {
  return new xe(s, t);
}
Object.assign(ys, { create: vs });
class mt {
  constructor(t, e) {
    _(this, "$modal");
    _(this, "options");
    _(this, "reposTask", null);
    this.$modal = t, this.$modal && (this.options = e, e.type === "show" ? this.onShow(this.$modal) : this.onHide(this.$modal), e.type === "show" && e.position && this.adjustPosition(e.position, null), this.$modal.onclick = (n) => this.onClick(n), window.addEventListener("resize", () => {
      e.type === "show" && e.position && this.adjustPosition(e.position, null);
    }));
  }
  get modalClosable() {
    return this.$modal.dataset.modalClosable;
  }
  onClick(t) {
    var e, n;
    (((e = t.target.dataset) == null ? void 0 : e.dismiss) === "modal" || ((n = t.target.parentElement.dataset) == null ? void 0 : n.dismiss) === "modal") && (this.onHide(this.$modal), t.stopPropagation());
  }
  lockScroll() {
    let t = 17;
    typeof window.innerWidth == "number" && (t = window.innerWidth - document.body.clientWidth), document.body.style.overflow = "hidden", document.body.style.paddingRight = `${t}px`, document.body.classList.add("modal-open");
  }
  unlockScroll() {
    document.body.style.overflow = "", document.body.style.paddingRight = "", document.body.classList.remove("modal-open");
  }
  onShow(t) {
    this.lockScroll(), t.classList.add("block");
  }
  onHide(t) {
    t && t.classList && (this.unlockScroll(), t.classList.remove("block"));
  }
  onClear(t) {
    document.querySelectorAll(".modal").forEach((n) => {
      (n.dataset.modalClosable !== "false" || t === "destory") && n.classList.remove("block");
    });
  }
  adjustPosition(t, e) {
    var a;
    if (clearTimeout(this.reposTask), e) {
      this.reposTask = setTimeout(this.adjustPosition.bind(this, t, 0), e);
      return;
    }
    if (t === void 0 && (t = this.options.position), t == null)
      return;
    const n = this.$modal.getElementsByClassName("modal-dialog")[0];
    if (!n)
      return;
    const i = window.innerHeight, o = Math.max(0, (i - n.clientHeight) / 2);
    let r = null;
    if (t === "fit" ? r = `${o > 50 ? Math.floor(o * 2 / 3) : o}px` : t === "center" ? r = `${o}px` : this.isPlainObject(t) || (r = t), n.setAttribute("style", `top: ${r}`), n.className.includes("-fullscreen")) {
      let c = null;
      if (((a = n.childNodes) == null ? void 0 : a.length) && n.childNodes.length === 1 ? c = n.childNodes[0] : c = n.childNodes[1], c) {
        const f = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, l = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], u = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, g = i - f - u, p = l && l.scrollHeight > g ? "auto" : "visible";
        l && l.setAttribute("style", `max-height:${g}px;overflow:${p}`);
      }
    }
  }
  isPlainObject(t) {
    return Object.prototype.toString.call(t) === "[object Object]";
  }
}
document.addEventListener("click", (s) => {
  var t, e, n;
  if (s !== null && s.target instanceof HTMLElement)
    if (((t = s.target.dataset) == null ? void 0 : t.toggle) === "modal") {
      let i = s.target.dataset.target;
      if (s.target.localName === "a") {
        const a = ((e = s.target) == null ? void 0 : e.href) || "";
        i = a && a.replace(/.*(?=#[^\s]+$)/, "");
      }
      if (!i.length)
        return;
      const o = document.querySelector(i), r = {
        type: "show",
        position: ((n = s.target.dataset) == null ? void 0 : n.position) || "fit"
      };
      new mt(o, r);
    } else
      s.target.parentElement.className.includes("modal") || new mt(s, { type: "hide" }).onClear();
});
const Es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: P,
  createDate: N,
  isSameDay: ae,
  isSameYear: De,
  isSameMonth: Wt,
  isSameWeek: hs,
  isToday: ds,
  isYesterday: us,
  isTomorrow: fs,
  isDBY: ps,
  formatDate: Re,
  formatDateSpan: gs,
  getTimeBeforeDesc: ms,
  calculateTimestamp: Ie
}, Symbol.toStringTag, { value: "Module" }));
var B, T;
class ws {
  constructor(t) {
    M(this, B, void 0);
    M(this, T, void 0);
    C(this, B, t), C(this, T, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, B).parentElement.parentElement, d(this, B).parentElement), this.addActive(d(this, T).parentElement, d(this, T)), d(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, T, d(this, B)), this.addActive(d(this, T).parentElement, d(this, T)), C(this, B, document.querySelector(`[href='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, T).getAttribute("id")}']`)), this.addActive(d(this, B).parentElement.parentElement, d(this, B).parentElement);
  }
  addActive(t, e) {
    const n = t.children;
    Array.from(n).forEach((o) => {
      o.classList.remove("active"), o.classList.contains("fade") && o.classList.remove("in");
    }), e.classList.add("active"), e.classList.contains("fade") && this.transition(e).then(function(o) {
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
B = new WeakMap(), T = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "tab" || s.target.getAttribute("data-tab")) && (s.preventDefault(), new ws(s.target).showTarget());
});
export {
  Ss as Avatar,
  ye as DTable,
  ws as NavTabs,
  pt as Scrollbar,
  Cs as browser,
  _s as dtablePlugins,
  Es as helpers,
  ys as store
};
