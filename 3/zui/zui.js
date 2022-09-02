var Dt = Object.defineProperty;
var Bt = (s, t, e) => t in s ? Dt(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e;
var _ = (s, t, e) => (Bt(s, typeof t != "symbol" ? t + "" : t, e), e), ze = (s, t, e) => {
  if (!t.has(s))
    throw TypeError("Cannot " + e);
};
var d = (s, t, e) => (ze(s, t, "read from private field"), e ? e.call(s) : t.get(s)), M = (s, t, e) => {
  if (t.has(s))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(s) : t.set(s, e);
}, C = (s, t, e, n) => (ze(s, t, "write to private field"), n ? n.call(s, e) : t.set(s, e), e);
var me = (s, t, e) => (ze(s, t, "access private method"), e);
var $;
class mt {
  constructor(t, e) {
    M(this, $, void 0);
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
    _(this, "disabled");
    _(this, "validation");
    _(this, "isPass");
    _(this, "rules");
    this.ajaxUrl = "", this.formData = {}, this.timer = null, this.invalid = !1, t = t.replace(/\s*/g, "");
    const n = t.split(",");
    n != null && n.length && n.forEach((i) => {
      var o, r;
      if (i && (C(this, $, document.querySelector(`#${i}`)), d(this, $))) {
        this.getAjaxFormData(d(this, $), e), this.ajaxUrl = (d(this, $).action ? d(this, $).action : e.url) || "", this.submitBtn = document.querySelector(`#${i} [data-type=submit]`), this.resetBtn = document.querySelector(`#${i} [data-type=reset]`), this.submitBtn && this.submitBtn.addEventListener("click", () => {
          this.submitForm();
        }), this.resetBtn && this.resetBtn.addEventListener("click", () => this.reset()), d(this, $).addEventListener("keydown", (c) => {
          if (c.target !== this.resetBtn)
            switch (c.keyCode) {
              case 13:
                this.submitForm();
                break;
            }
        }), this.disabled = ((o = d(this, $).querySelectorAll(".disabled")) == null ? void 0 : o.length) > 0, this.novalidate = ((r = d(this, $).dataset) == null ? void 0 : r.novalidate) === "true";
        const a = [...d(this, $).querySelectorAll(".form-control:not(.disabled)")];
        this.validity = a.every((c) => c == null ? void 0 : c.validity), this.novalidate || a.forEach((c) => {
          c.tagName === "input" ? c.addEventListener("blur", () => {
            this.invalid = !this.validity;
          }) : c.addEventListener("change", () => {
            this.invalid = !this.validity;
          });
        });
      }
    });
  }
  reset() {
    this.invalid = !1, d(this, $).querySelectorAll(".form-control").forEach((e) => {
      var n;
      e.parentElement.classList.remove("has-error"), (n = e.nextElementSibling) != null && n.classList.contains("form-tip") && e.nextElementSibling.remove(), e.value = null;
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
  checkValidity() {
    if (this.novalidate)
      return !0;
    const e = [...d(this, $).querySelectorAll(".form-control:not(.disabled)")].reverse();
    let n = !0;
    return e.forEach((i) => {
      i.checkValidity && !i.checkValidity() && (n = !1);
    }), this.invalid = !n, n;
  }
  getAjaxFormData(t, e) {
    typeof e == "function" && (e = { complete: e });
    const n = {};
    d(this, $).querySelectorAll(".form-control:not(.disabled)").forEach((o) => {
      n[o.id] = o.value || "";
    }), e.beforeSubmit && (this.beforeSubmit = e.beforeSubmit, delete e.beforeSubmit), e.success && (this.success = e.success, delete e.success), e.error && (this.error = e.error, delete e.error), e.finish && (this.finish = e.finish, delete e.finish), e.rules ? (this.rules = e.rules, delete e.rules) : this.rules = {}, this.formData = {
      timeout: window != null && window.config ? window == null ? void 0 : window.config.timeout : 0,
      dataType: "json",
      ...this.formData,
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
  validate(t) {
    if (t)
      for (const e in this.formData)
        this.validation[e] = { valid: !1, msg: "" };
    for (const e in this.validation)
      if (typeof this.validation[e] == "object")
        if (this.validation[e].valid)
          this.validation.valid = !0, this.validation.msg = "";
        else {
          this.validation.valid = !1, this.validation.msg = this.validation[e].msg;
          break;
        }
    this.isPass = this.validation.valid;
  }
  setTrue(t) {
    this.validation[t].valid = !0, this.validation[t].msg = "";
  }
  setFalse(t, e) {
    this.validation[t].valid = !1, this.validation[t].msg = e;
  }
  onBeforeSubmit(t, e, n) {
    if (this.rules && this.validate(this.rules), (this.callback.beforeSubmit && this.callback.beforeSubmit(t, e, n)) === !1)
      return !1;
    d(this, $).classList.remove("form-watched");
  }
  ajaxRequest(t) {
    const { params: e, data: n, headers: i, timeout: o } = t;
    let r = t.url;
    const a = t.method ? t.method.toUpperCase() : "POST", c = e ? this.changeFormDataToString(e) : null;
    let u = n || null;
    c && (a == "GET" || u ? r += r.indexOf("?") >= 0 ? "&" : "?" + c : u = c);
    const l = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    l.onreadystatechange = () => {
      let f = l.response || {};
      if (f = {
        result: "fail",
        message: {
          fruit: "\u8BF7\u9009\u62E9\u6C34\u679C",
          name: "\u8BF7\u8F93\u5165\u8D26\u53F7",
          pw: "\u8BF7\u8F93\u5165\u5BC6\u7801"
        }
      }, l.readyState === 4 && l.status === 200) {
        if (typeof f == "string" && (f = JSON.parse(f)), f === null || typeof f != "object")
          return f ? alert(f) : this.showFormMessage("No response.", "danger", null);
        f.result === "success" ? this.success && this.success(f) : (this._error(f), this.error && this.error(f));
      } else
        this._error(f), this.error && this.error(f);
      this.finish && this.finish(f);
    }, l.open(a, r, !0);
    for (const f in i) {
      const g = i[f];
      typeof g == "string" && l.setRequestHeader(f, g);
    }
    o && (this.timer = setInterval(() => {
      l.abort();
    })), l.send(u);
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
    return this.checkValidity(), this.ajaxSubmit(d(this, $), this.formData), !1;
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
        const o = Array.isArray(e[i]) ? e[i].join("") : e[i], r = d(this, $).querySelectorAll(`#${i}`);
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
$ = new WeakMap(), _(mt, "NAME", "zui.ajaxForm");
document.addEventListener("click", (s) => {
  var t;
  s !== null && s.target instanceof HTMLElement && ((t = s.target.dataset) == null ? void 0 : t.type) === "submit" && new mt("apiForm2", {
    rules: {
      name: {
        required: !0,
        msg: "name\u5FC5\u586B",
        patterns: [{
          reg: /^[a-zA-Z]+$/,
          msg: "name\u8BF7\u586B\u5165\u82F1\u6587"
        }]
      }
    },
    success: (e) => {
      console.log("success", e);
    },
    error: (e) => {
      console.log("fail", e);
    }
  });
});
var xe, R, _t, he, at, we = {}, bt = [], Ot = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function X(s, t) {
  for (var e in t)
    s[e] = t[e];
  return s;
}
function yt(s) {
  var t = s.parentNode;
  t && t.removeChild(s);
}
function y(s, t, e) {
  var n, i, o, r = {};
  for (o in t)
    o == "key" ? n = t[o] : o == "ref" ? i = t[o] : r[o] = t[o];
  if (arguments.length > 2 && (r.children = arguments.length > 3 ? xe.call(arguments, 2) : e), typeof s == "function" && s.defaultProps != null)
    for (o in s.defaultProps)
      r[o] === void 0 && (r[o] = s.defaultProps[o]);
  return ye(s, r, n, i, null);
}
function ye(s, t, e, n, i) {
  var o = { type: s, props: t, key: e, ref: n, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: i == null ? ++_t : i };
  return i == null && R.vnode != null && R.vnode(o), o;
}
function vt() {
  return { current: null };
}
function Me(s) {
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
function ct(s) {
  (!s.__d && (s.__d = !0) && he.push(s) && !ke.__r++ || at !== R.debounceRendering) && ((at = R.debounceRendering) || setTimeout)(ke);
}
function ke() {
  for (var s; ke.__r = he.length; )
    s = he.sort(function(t, e) {
      return t.__v.__b - e.__v.__b;
    }), he = [], s.some(function(t) {
      var e, n, i, o, r, a;
      t.__d && (r = (o = (e = t).__v).__e, (a = e.__P) && (n = [], (i = X({}, o)).__v = o.__v + 1, Be(a, o, i, e.__n, a.ownerSVGElement !== void 0, o.__h != null ? [r] : null, n, r == null ? le(o) : r, o.__h), Et(n, o), o.__e != r && wt(o)));
    });
}
function kt(s, t, e, n, i, o, r, a, c, u) {
  var l, f, g, p, m, S, b, v = n && n.__k || bt, w = v.length;
  for (e.__k = [], l = 0; l < t.length; l++)
    if ((p = e.__k[l] = (p = t[l]) == null || typeof p == "boolean" ? null : typeof p == "string" || typeof p == "number" || typeof p == "bigint" ? ye(null, p, null, null, p) : Array.isArray(p) ? ye(Me, { children: p }, null, null, null) : p.__b > 0 ? ye(p.type, p.props, p.key, null, p.__v) : p) != null) {
      if (p.__ = e, p.__b = e.__b + 1, (g = v[l]) === null || g && p.key == g.key && p.type === g.type)
        v[l] = void 0;
      else
        for (f = 0; f < w; f++) {
          if ((g = v[f]) && p.key == g.key && p.type === g.type) {
            v[f] = void 0;
            break;
          }
          g = null;
        }
      Be(s, p, g = g || we, i, o, r, a, c, u), m = p.__e, (f = p.ref) && g.ref != f && (b || (b = []), g.ref && b.push(g.ref, null, p), b.push(f, p.__c || m, p)), m != null ? (S == null && (S = m), typeof p.type == "function" && p.__k === g.__k ? p.__d = c = St(p, c, s) : c = Ct(s, p, g, v, m, c), typeof e.type == "function" && (e.__d = c)) : c && g.__e == c && c.parentNode != s && (c = le(g));
    }
  for (e.__e = S, l = w; l--; )
    v[l] != null && (typeof e.type == "function" && v[l].__e != null && v[l].__e == e.__d && (e.__d = le(n, l + 1)), xt(v[l], v[l]));
  if (b)
    for (l = 0; l < b.length; l++)
      Rt(b[l], b[++l], b[++l]);
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
function Ut(s, t, e, n, i) {
  var o;
  for (o in e)
    o === "children" || o === "key" || o in t || Se(s, o, null, e[o], n);
  for (o in t)
    i && typeof t[o] != "function" || o === "children" || o === "key" || o === "value" || o === "checked" || e[o] === t[o] || Se(s, o, t[o], e[o], n);
}
function ht(s, t, e) {
  t[0] === "-" ? s.setProperty(t, e) : s[t] = e == null ? "" : typeof e != "number" || Ot.test(t) ? e : e + "px";
}
function Se(s, t, e, n, i) {
  var o;
  e:
    if (t === "style")
      if (typeof e == "string")
        s.style.cssText = e;
      else {
        if (typeof n == "string" && (s.style.cssText = n = ""), n)
          for (t in n)
            e && t in e || ht(s.style, t, "");
        if (e)
          for (t in e)
            n && e[t] === n[t] || ht(s.style, t, e[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in s ? t.toLowerCase().slice(2) : t.slice(2), s.l || (s.l = {}), s.l[t + o] = e, e ? n || s.addEventListener(t, o ? ft : dt, o) : s.removeEventListener(t, o ? ft : dt, o);
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
function dt(s) {
  this.l[s.type + !1](R.event ? R.event(s) : s);
}
function ft(s) {
  this.l[s.type + !0](R.event ? R.event(s) : s);
}
function Be(s, t, e, n, i, o, r, a, c) {
  var u, l, f, g, p, m, S, b, v, w, A, W, D, H = t.type;
  if (t.constructor !== void 0)
    return null;
  e.__h != null && (c = e.__h, a = t.__e = e.__e, t.__h = null, o = [a]), (u = R.__b) && u(t);
  try {
    e:
      if (typeof H == "function") {
        if (b = t.props, v = (u = H.contextType) && n[u.__c], w = u ? v ? v.props.value : u.__ : n, e.__c ? S = (l = t.__c = e.__c).__ = l.__E : ("prototype" in H && H.prototype.render ? t.__c = l = new H(b, w) : (t.__c = l = new se(b, w), l.constructor = H, l.render = Yt), v && v.sub(l), l.props = b, l.state || (l.state = {}), l.context = w, l.__n = n, f = l.__d = !0, l.__h = []), l.__s == null && (l.__s = l.state), H.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = X({}, l.__s)), X(l.__s, H.getDerivedStateFromProps(b, l.__s))), g = l.props, p = l.state, f)
          H.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), l.componentDidMount != null && l.__h.push(l.componentDidMount);
        else {
          if (H.getDerivedStateFromProps == null && b !== g && l.componentWillReceiveProps != null && l.componentWillReceiveProps(b, w), !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(b, l.__s, w) === !1 || t.__v === e.__v) {
            l.props = b, l.state = l.__s, t.__v !== e.__v && (l.__d = !1), l.__v = t, t.__e = e.__e, t.__k = e.__k, t.__k.forEach(function(B) {
              B && (B.__ = t);
            }), l.__h.length && r.push(l);
            break e;
          }
          l.componentWillUpdate != null && l.componentWillUpdate(b, l.__s, w), l.componentDidUpdate != null && l.__h.push(function() {
            l.componentDidUpdate(g, p, m);
          });
        }
        if (l.context = w, l.props = b, l.__v = t, l.__P = s, A = R.__r, W = 0, "prototype" in H && H.prototype.render)
          l.state = l.__s, l.__d = !1, A && A(t), u = l.render(l.props, l.state, l.context);
        else
          do
            l.__d = !1, A && A(t), u = l.render(l.props, l.state, l.context), l.state = l.__s;
          while (l.__d && ++W < 25);
        l.state = l.__s, l.getChildContext != null && (n = X(X({}, n), l.getChildContext())), f || l.getSnapshotBeforeUpdate == null || (m = l.getSnapshotBeforeUpdate(g, p)), D = u != null && u.type === Me && u.key == null ? u.props.children : u, kt(s, Array.isArray(D) ? D : [D], t, e, n, i, o, r, a, c), l.base = t.__e, t.__h = null, l.__h.length && r.push(l), S && (l.__E = l.__ = null), l.__e = !1;
      } else
        o == null && t.__v === e.__v ? (t.__k = e.__k, t.__e = e.__e) : t.__e = qt(e.__e, t, e, n, i, o, r, c);
    (u = R.diffed) && u(t);
  } catch (B) {
    t.__v = null, (c || o != null) && (t.__e = a, t.__h = !!c, o[o.indexOf(a)] = null), R.__e(B, t, e);
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
function qt(s, t, e, n, i, o, r, a) {
  var c, u, l, f = e.props, g = t.props, p = t.type, m = 0;
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
    f === g || a && s.data === g || (s.data = g);
  else {
    if (o = o && xe.call(s.childNodes), u = (f = e.props || we).dangerouslySetInnerHTML, l = g.dangerouslySetInnerHTML, !a) {
      if (o != null)
        for (f = {}, m = 0; m < s.attributes.length; m++)
          f[s.attributes[m].name] = s.attributes[m].value;
      (l || u) && (l && (u && l.__html == u.__html || l.__html === s.innerHTML) || (s.innerHTML = l && l.__html || ""));
    }
    if (Ut(s, g, f, i, a), l)
      t.__k = [];
    else if (m = t.props.children, kt(s, Array.isArray(m) ? m : [m], t, e, n, i && p !== "foreignObject", o, r, o ? o[0] : e.__k && le(e, 0), a), o != null)
      for (m = o.length; m--; )
        o[m] != null && yt(o[m]);
    a || ("value" in g && (m = g.value) !== void 0 && (m !== s.value || p === "progress" && !m || p === "option" && m !== f.value) && Se(s, "value", m, f.value, !1), "checked" in g && (m = g.checked) !== void 0 && m !== s.checked && Se(s, "checked", m, f.checked, !1));
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
function Yt(s, t, e) {
  return this.constructor(s, e);
}
function Vt(s, t, e) {
  var n, i, o;
  R.__ && R.__(s, t), i = (n = typeof e == "function") ? null : e && e.__k || t.__k, o = [], Be(t, s = (!n && e || t).__k = y(Me, null, [s]), i || we, we, t.ownerSVGElement !== void 0, !n && e ? [e] : i ? null : t.firstChild ? xe.call(t.childNodes) : null, o, !n && e ? e : i ? i.__e : t.firstChild, n), Et(o, s);
}
xe = bt.slice, R = { __e: function(s, t, e, n) {
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
  e = this.__s != null && this.__s !== this.state ? this.__s : this.__s = X({}, this.state), typeof s == "function" && (s = s(X({}, e), this.props)), s && X(e, s), s != null && this.__v && (t && this.__h.push(t), ct(this));
}, se.prototype.forceUpdate = function(s) {
  this.__v && (this.__e = !0, s && this.__h.push(s), ct(this));
}, se.prototype.render = Me, he = [], ke.__r = 0;
const z = (...s) => s.map((t) => Array.isArray(t) ? z(...t) : typeof t == "function" ? z(t()) : t !== null && typeof t == "object" ? Object.keys(t).filter((e) => {
  const n = t[e];
  return typeof n == "function" ? !!n() : !!n;
}).join(" ") : t).filter((t) => typeof t == "string" && t.length).join(" ");
class ks extends se {
  render() {
    const { size: t, rounded: e, className: n, style: i, src: o, text: r, children: a, ...c } = this.props, u = [n], l = { ...i };
    let f = null;
    return o ? f = /* @__PURE__ */ y("img", {
      src: o,
      alt: r
    }) : f = r, typeof t == "number" ? (l.width = t, l.height = t) : typeof t == "string" && u.push(`avatar-${t}`), typeof e == "string" && u.push(`rounded-${e}`), /* @__PURE__ */ y("div", {
      className: z(u),
      style: l,
      ...c
    }, f, a);
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
function Gt(s, t) {
  const e = typeof s == "string" ? document.querySelector(s) : s;
  if (!e)
    return !1;
  const n = e.getBoundingClientRect(), i = window.innerHeight || document.documentElement.clientHeight, o = window.innerWidth || document.documentElement.clientWidth;
  if (t != null && t.fullyCheck)
    return n.left >= 0 && n.top >= 0 && n.left + n.width <= o && n.top + n.height <= i;
  const r = n.top <= i && n.top + n.height >= 0, a = n.left <= o && n.left + n.width >= 0;
  return r && a;
}
const Ss = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  selectText: Kt,
  domReady: Xt,
  isElementVisible: Gt,
  classes: z
}, Symbol.toStringTag, { value: "Module" }));
const Jt = (s) => {
  const t = {};
  if (!s)
    return t;
  const e = Object.values(s.attributes);
  return e && e.length > 0 && e.forEach((n) => {
    const { name: i, value: o } = n;
    t[i] = o;
  }), t;
};
class Zt extends HTMLElement {
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
    const e = Jt(this);
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
customElements.get("zui-button") || customElements.define("zui-button", Zt);
function Mt() {
  document.querySelectorAll(".dropdown-menu").forEach((t) => {
    var e;
    (e = t.parentElement) == null || e.classList.remove("open");
  });
}
function Qt(s) {
  const t = s.parentElement, e = s.nextElementSibling;
  !t || !e || t.classList.contains("dropdown-hover") || (t.className.includes("open") ? t.classList.remove("open") : (Mt(), t.classList.add("open")));
}
document.addEventListener("click", function(s) {
  const t = s.target;
  t.dataset.toggle === "dropdown" ? Qt(t) : Mt();
});
var Z, Q;
class ut extends se {
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
      bottom: u,
      right: l
    } = this.props, { maxScrollPos: f, scrollPos: g } = this, { dragStart: p } = this.state, m = {
      left: a,
      top: c,
      bottom: u,
      right: l,
      ...r
    }, S = {};
    return n === "horz" ? (m.height = i, m.width = e, S.width = this.barSize, S.left = Math.round(g * (e - S.width) / f)) : (m.width = i, m.height = e, S.height = this.barSize, S.top = Math.round(g * (e - S.height) / f)), /* @__PURE__ */ y("div", {
      className: z("scrollbar", o, {
        "is-vert": n === "vert",
        "is-horz": n === "horz",
        "is-dragging": p
      }),
      style: m,
      onMouseDown: this._handleClick
    }, /* @__PURE__ */ y("div", {
      className: "scrollbar-bar",
      style: S,
      onMouseDown: this._handleMouseDown
    }));
  }
}
Z = new WeakMap(), Q = new WeakMap();
function Oe({ col: s, className: t, height: e, rowID: n, hoverCol: i, rowData: o, onRenderCell: r, style: a, children: c, ...u }) {
  const { cellStyle: l, align: f, className: g } = s.setting, p = {
    left: s.left,
    width: s.realWidth,
    height: e,
    justifyContent: f ? f === "left" ? "start" : f === "right" ? "end" : f : void 0,
    ...a,
    ...l
  };
  let m = [
    c != null ? c : o == null ? void 0 : o[s.name]
  ];
  r && (m = r(m, n, s, o));
  const S = [], b = [];
  m == null || m.forEach((w) => {
    typeof w == "object" && w && ("html" in w || "className" in w || "style" in w) ? (w.html && b.push(/* @__PURE__ */ y("div", {
      className: "dtable-cell-html",
      dangerouslySetInnerHTML: { __html: w.html }
    })), w.style && Object.assign(p, w.style), w.className && S.push(w.className)) : b.push(w);
  });
  const v = z("dtable-cell", t, {
    "dtable-col-hover": i
  }, g, S);
  return /* @__PURE__ */ y("div", {
    className: v,
    style: p,
    "data-col": s.name,
    ...u
  }, b);
}
function es({ col: s, children: t, style: e, ...n }) {
  const { sortType: i } = s.setting;
  return /* @__PURE__ */ y(Oe, {
    col: s,
    style: { ...e, ...s.setting.style },
    "data-sort": i || null,
    "data-type": s.type,
    ...n
  }, s.setting.title, i && /* @__PURE__ */ y("div", {
    className: `dtable-sort dtable-sort-${i === !0 ? "none" : i}`
  }), t);
}
function je({ rowID: s, className: t, top: e = 0, left: n = 0, width: i, height: o, cols: r, data: a, hoverCol: c, CellComponent: u = Oe, onRenderCell: l }) {
  return /* @__PURE__ */ y("div", {
    className: z("dtable-cells", t),
    style: { top: e, left: n, width: i, height: o }
  }, r.map((f) => f.visible ? /* @__PURE__ */ y(u, {
    key: f.name,
    col: f,
    hoverCol: c === f.name && f.setting.colHover !== !1,
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
  scrollWidthTotal: u,
  flexRightWidth: l,
  scrollLeft: f,
  CellComponent: g = Oe,
  onRenderCell: p,
  hoverCol: m,
  data: S
}) {
  let b = null;
  i != null && i.length && (b = /* @__PURE__ */ y(je, {
    className: "dtable-fixed-left",
    cols: i,
    width: a,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  let v = null;
  r != null && r.length && (v = /* @__PURE__ */ y(je, {
    className: "dtable-flexable",
    cols: r,
    left: a - f,
    width: u,
    rowID: s,
    hoverCol: m,
    CellComponent: g,
    onRenderCell: p,
    data: S
  }));
  let w = null;
  o != null && o.length && (w = /* @__PURE__ */ y(je, {
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
  const A = { top: e, height: n, lineHeight: `${n - 2}px` };
  return /* @__PURE__ */ y("div", {
    className: z("dtable-row", t),
    style: A,
    "data-id": s
  }, b, v, w);
}
function ts({ height: s, onRenderRow: t, ...e }) {
  let n = {
    height: s,
    ...e,
    rowID: "HEADER",
    className: "dtable-in-header",
    top: 0,
    CellComponent: es
  };
  return t && (n = t(n)), /* @__PURE__ */ y("div", {
    className: "dtable-header",
    style: { height: s }
  }, /* @__PURE__ */ y($t, {
    ...n
  }));
}
function ss({
  className: s,
  style: t,
  top: e,
  rows: n,
  height: i,
  rowHeight: o,
  onRenderRow: r,
  ...a
}) {
  return t = { ...t, top: e, height: i }, /* @__PURE__ */ y("div", {
    className: z("dtable-rows", s),
    style: t
  }, n.map((c) => {
    let u = {
      className: `dtable-row-${c.index % 2 ? "odd" : "even"}`,
      rowID: c.id,
      data: c.data,
      top: c.top,
      height: o,
      ...a
    };
    return r && (u = r(u, c)), /* @__PURE__ */ y($t, {
      ...u
    });
  }));
}
const Ce = /* @__PURE__ */ new Map();
function At(s, t = !1) {
  if (!t && Ce.has(s.name))
    throw new Error(`DTable: Plugin with name ${s.name} already exists`);
  Ce.set(s.name, s);
}
function $e(s, t = !1) {
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
function pt(s) {
  return Ce.get(s);
}
function Ht(s) {
  return Ce.delete(s);
}
function ns(s) {
  const t = /* @__PURE__ */ new Map();
  return [s == null ? void 0 : s.plugins].flat().reduce((e, n) => {
    var o;
    if (!n)
      return e;
    let i;
    return typeof n == "string" ? (i = pt(n), i || console.warn(`DTable: Cannot found plugin "${n}"`)) : typeof n == "function" ? i = n.plugin : typeof n == "object" ? i = n : console.warn("DTable: Invalid plugin", n), i && !t.has(i.name) && ((o = i.plugins) == null || o.forEach((r) => {
      if (t.has(r))
        return;
      const a = pt(r);
      if (!a) {
        console.warn(`DTable: Cannot found dependency plugin "${r}" for plugin "${i == null ? void 0 : i.name}"`);
        return;
      }
      e.push(a), t.set(a.name, a);
    }), e.push(i), t.set(i.name, i)), e;
  }, []);
}
function is(s, t) {
  return s.reduce((e, n) => {
    const { options: i, defaultOptions: o } = n;
    return o && (e = { ...o, ...e }), i && Object.assign(e, typeof i == "function" ? i(e) : i), e;
  }, t);
}
function We() {
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
var ee, V, E, te, L, ie;
class Pe extends se {
  constructor(e) {
    super(e);
    _(this, "ref", vt());
    M(this, ee, 0);
    M(this, V, !1);
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
      var c, u, l, f, g, p, m, S;
      const n = e.target;
      if (!n)
        return;
      const i = n.closest(".dtable-row");
      if (!i)
        return;
      const o = n.closest(".dtable-cell"), r = (c = o == null ? void 0 : o.getAttribute("data-col")) != null ? c : "", a = (u = i.getAttribute("data-id")) != null ? u : "";
      if (a === "HEADER")
        o && ((l = d(this, E).onHeaderCellClick) == null || l.call(this, e, { colName: r, element: o }), d(this, L).forEach((b) => {
          var v;
          (v = b.onHeaderCellClick) == null || v.call(this, e, { colName: r, element: o });
        }));
      else {
        const b = (f = d(this, ie)) == null ? void 0 : f.visibleRows.find((v) => v.id === a);
        if (o) {
          if (((g = d(this, E).onCellClick) == null ? void 0 : g.call(this, e, { colName: r, rowID: a, rowInfo: b, element: o, rowElement: i })) === !0)
            return;
          for (const v of d(this, L))
            if (((p = v.onCellClick) == null ? void 0 : p.call(this, e, { colName: r, rowID: a, rowInfo: b, element: o, rowElement: i })) === !0)
              return;
        }
        if (((m = d(this, E).onRowClick) == null ? void 0 : m.call(this, e, { rowID: a, rowInfo: b, element: i })) === !0)
          return;
        for (const v of d(this, L))
          if (((S = v.onRowClick) == null ? void 0 : S.call(this, e, { rowID: a, rowInfo: b, element: i })) === !0)
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
    const n = { ...We(), ...e };
    C(this, E, Object.freeze(n)), C(this, te, Object.freeze(ns(n))), d(this, te).forEach((i) => {
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
    d(this, V) ? this.forceUpdate() : this._afterRender();
    const { current: e } = this.ref;
    e && (e.addEventListener("click", this._handleClick), e.addEventListener("mouseover", this._handleMouseOver), e.addEventListener("mouseleave", this._handleMouseLeave)), d(this, E).responsive && window.addEventListener("resize", this._handleResize), d(this, L).forEach((n) => {
      var i;
      (i = n.onMounted) == null || i.call(this);
    });
  }
  componentDidUpdate() {
    d(this, V) && this._afterRender();
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
    var Je, Ze, Qe;
    const e = We(), n = is(d(this, te), { ...e, ...this.props }), i = d(this, te).filter((h) => !h.when || h.when(n));
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
      minColWidth: u = e.minColWidth,
      maxColWidth: l = e.maxColWidth
    } = n, f = o ? n.headerHeight || a : 0, g = r ? n.footerHeight || a : 0, p = (h, k, x) => (h && (k && (h = Math.max(k, h)), x && (h = Math.min(x, h))), h), m = [], S = [], b = [];
    let v = 0, w = 0;
    (Je = n.cols) == null || Je.forEach((h) => {
      var et, tt, st;
      if (h.hidden)
        return;
      h = { ...h };
      const { minWidth: k = u, maxWidth: x = l } = h, j = p((et = h.width) != null ? et : 0, k, x), q = (tt = h.flex) != null ? tt : 1, pe = q * p(c, k, x), Y = {
        name: h.name,
        type: (st = h.type) != null ? st : "",
        setting: h,
        left: 0,
        flex: q,
        realWidth: j,
        flexWidth: pe,
        visible: !0
      };
      h.fixed === "left" ? (Y.left = v, v += j, m.push(Y)) : h.fixed === "right" ? (Y.left = w, w += j, S.push(Y)) : b.push(Y), i.forEach((nt) => {
        var it, ot, rt;
        const ge = (ot = nt.colTypes) == null ? void 0 : ot[(it = h.type) != null ? it : ""];
        if (ge) {
          const lt = typeof ge == "function" ? ge(h) : ge;
          lt && Object.assign(h, lt);
        }
        (rt = nt.onAddCol) == null || rt.call(this, Y);
      });
    });
    let A = n.width, W = 0;
    if (typeof A == "function" && (A = A()), A === "auto")
      W = v + w, b.forEach((h) => {
        h.realWidth || (h.realWidth = h.flexWidth), W += h.realWidth;
      });
    else if (A === "100%") {
      const h = (Ze = this.ref.current) == null ? void 0 : Ze.parentElement;
      if (h)
        W = h.clientWidth;
      else {
        W = 0, C(this, V, !0);
        return;
      }
    } else
      W = A != null ? A : 0;
    const { data: D, rowKey: H = "id" } = n, B = [], Ae = (h, k, x) => {
      var q, pe;
      const j = { data: x != null ? x : { [H]: h }, top: 0, id: h, index: B.length };
      if (x || (j.lazy = !0), B.push(j), ((q = n.onAddRow) == null ? void 0 : q.call(this, j, k)) !== !1) {
        for (const Y of i)
          if (((pe = Y.onAddRow) == null ? void 0 : pe.call(this, j, k)) === !1)
            return;
      }
    };
    if (typeof D == "number")
      for (let h = 0; h < D; h++)
        Ae(h, h);
    else
      Array.isArray(D) && D.forEach((h, k) => {
        typeof h == "object" ? Ae(h[H], k, h) : Ae(h, k);
      });
    const O = [];
    let ce = 0;
    B.forEach((h) => {
      var k, x;
      if (((k = n.rowFilter) == null ? void 0 : k.call(this, h)) !== !1) {
        for (const j of i)
          if (((x = j.rowFilter) == null ? void 0 : x.call(this, h)) === !1)
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
    let U = n.height, G = 0;
    if (typeof U == "function" && (U = U()), U === "auto")
      G = f + g + ce;
    else if (typeof U == "object")
      G = Math.min(U.max, Math.max(U.min, f + g + ce));
    else if (U === "100%") {
      const h = (Qe = this.ref.current) == null ? void 0 : Qe.parentElement;
      if (h)
        G = h.clientHeight;
      else {
        G = 0, C(this, V, !0);
        return;
      }
    } else
      G = U;
    const { scrollTop: ue = 0, scrollLeft: Le = 0, hoverCol: Ft } = this.state, qe = G - f - g, Ye = ue + qe, Ve = [], Ne = W - v - w;
    let J = 0;
    const Te = [];
    let Ke = 0;
    if (b.forEach((h) => {
      h.realWidth ? J += h.realWidth : (Te.push(h), Ke += h.flex);
    }), Te.length) {
      const h = Math.max(0, Ne - J);
      Te.forEach((k) => {
        var q;
        const { minWidth: x = u, maxWidth: j = l } = k.setting;
        k.realWidth = Math.min(j, Math.max(x, Math.ceil(h * ((q = k.flex) != null ? q : 1) / Ke))), J += k.realWidth;
      });
    }
    J = 0, b.forEach((h) => {
      h.left += J, J += h.realWidth, (h.left + h.realWidth < Le || h.left > Le + Ne) && (h.visible = !1);
    });
    const Xe = Math.floor(ue / a), Ge = Math.min(O.length, Math.ceil(Ye / a)), It = [];
    for (let h = Xe; h < Ge; h++) {
      const k = O[h];
      k.top -= ue, Ve.push(k), k.lazy === !0 && It.push(k.id);
    }
    let ne = {
      allRows: B,
      width: W,
      height: G,
      rows: O,
      visibleRows: Ve,
      rowHeight: a,
      rowsHeight: qe,
      rowsHeightTotal: ce,
      hoverCol: Ft,
      header: o,
      footer: r,
      headerHeight: f,
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
      scrollBottom: Ye,
      scrollTop: ue,
      scrollLeft: Le,
      startRowIndex: Xe,
      endRowIndex: Ge
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
      return /* @__PURE__ */ y(ts, {
        scrollLeft: this.state.scrollLeft,
        height: r,
        onRenderCell: this._handleRenderCell,
        onRenderRow: this._handleRenderHeaderRow,
        hoverCol: i,
        ...o
      });
    let a, c;
    if (typeof n == "function") {
      const u = n(e, this.state);
      typeof u == "object" && u && "__html" in u ? c = u : a = u;
    } else
      a = n;
    return /* @__PURE__ */ y("div", {
      className: "dtable-header",
      style: { height: r },
      dangerouslySetInnerHTML: c
    }, a);
  }
  renderRows(e) {
    const { headerHeight: n, rowsHeight: i, visibleRows: o, rowHeight: r, hoverCol: a, colsInfo: c } = e;
    return /* @__PURE__ */ y(ss, {
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
    return /* @__PURE__ */ y("div", {
      className: "dtable-footer",
      style: { height: i },
      dangerouslySetInnerHTML: r
    }, o);
  }
  renderScrollBars(e) {
    const n = [], { scrollLeft: i, colsInfo: o, scrollTop: r, rowsHeight: a, rowsHeightTotal: c } = e, { scrollWidthTotal: u, scrollWidth: l } = o, { scrollbarSize: f = 10, horzScrollbarPos: g } = this.props;
    return u > l && n.push(/* @__PURE__ */ y(ut, {
      key: "horz",
      type: "horz",
      scrollPos: i,
      scrollSize: u,
      clientSize: l,
      onScroll: this._handleScroll,
      left: o.flexLeftWidth,
      bottom: g === "inside" ? 0 : -f,
      size: f,
      wheelContainer: this.ref
    })), c > a && n.push(/* @__PURE__ */ y(ut, {
      key: "vert",
      type: "vert",
      scrollPos: r,
      scrollSize: c,
      clientSize: a,
      onScroll: this._handleScroll,
      right: 0,
      size: f,
      top: e.headerHeight,
      wheelContainer: this.ref
    })), n.length ? n : null;
  }
  _afterRender() {
    var e;
    C(this, V, !1), (e = d(this, E).afterRender) == null || e.call(this), d(this, L).forEach((n) => {
      var i;
      return (i = n.afterRender) == null ? void 0 : i.call(this);
    });
  }
  render() {
    var f, g;
    const e = this.getLayout(), { className: n, rowHover: i, colHover: o, cellHover: r, bordered: a, striped: c, scrollbarHover: u } = (f = d(this, E)) != null ? f : this.props, l = { width: e == null ? void 0 : e.width, height: e == null ? void 0 : e.height };
    return /* @__PURE__ */ y("div", {
      className: z("dtable", n, {
        "dtable-hover-row": i,
        "dtable-hover-col": o,
        "dtable-hover-cell": r,
        "dtable-bordered": a,
        "dtable-striped": c,
        "dtable-scrolled-down": ((g = e == null ? void 0 : e.scrollTop) != null ? g : 0) > 0,
        "scrollbar-hover": u
      }),
      style: l,
      ref: this.ref
    }, e && this.renderHeader(e), e && this.renderRows(e), e && this.renderFooter(e), e && this.renderScrollBars(e));
  }
}
ee = new WeakMap(), V = new WeakMap(), E = new WeakMap(), te = new WeakMap(), L = new WeakMap(), ie = new WeakMap(), _(Pe, "addPlugin", At), _(Pe, "removePlugin", Ht);
function os(s, t) {
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
function rs(s) {
  var t;
  return (t = this.state.checkedRows[s]) != null ? t : !1;
}
function Lt() {
  var s;
  return this.getChecks().length === ((s = this.layout) == null ? void 0 : s.allRows.length);
}
function ls() {
  return Object.keys(this.state.checkedRows);
}
const Nt = {
  name: "checkable",
  defaultOptions: { checkable: !0 },
  when: (s) => !!s.checkable,
  onCreate() {
    this.state.checkedRows = {}, this.toggleCheckRows = os.bind(this), this.isRowChecked = rs.bind(this), this.isAllRowChecked = Lt.bind(this), this.getChecks = ls.bind(this);
  },
  onRenderCell(s, t, e) {
    var o, r;
    const { checkbox: n } = e.setting;
    if (typeof n == "function" ? n.call(this, t) : n) {
      const a = this.isRowChecked(t), c = (r = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, t)) != null ? r : /* @__PURE__ */ y("input", {
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
      const a = this.isAllRowChecked(), c = (r = (o = this.options.checkboxRender) == null ? void 0 : o.call(this, a, t)) != null ? r : /* @__PURE__ */ y("input", {
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
$e(Nt);
function Fe(s) {
  const t = this.nestedMap.get(s);
  if (!t || t.state !== "")
    return t != null ? t : { state: "normal", level: -1 };
  if (!t.parent && !t.children)
    return t.state = "normal", t;
  const e = this.state.collapsedRows, n = t.children && e && e[s];
  let i = !1, { parent: o } = t;
  for (; o; ) {
    const r = Fe.call(this, o);
    if (r.state !== "expanded") {
      i = !0;
      break;
    }
    o = r.parent;
  }
  return t.state = i ? "hidden" : n ? "collapsed" : t.children ? "expanded" : "normal", t.level = t.parent ? Fe.call(this, t.parent).level + 1 : 0, t;
}
function as(s, t) {
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
    this.nestedMap = /* @__PURE__ */ new Map(), this.toggleRow = as.bind(this), this.isAllCollapsed = Tt.bind(this), this.getNestedRowInfo = Fe.bind(this);
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
    if (i && (o.children || o.parent) && s.unshift((a = (r = this.options.onRenderNestedToggle) == null ? void 0 : r.call(this, o, t, e, n)) != null ? a : /* @__PURE__ */ y("a", {
      role: "button",
      className: `dtable-nested-toggle state${o.children ? "" : " is-no-child"}`
    }, /* @__PURE__ */ y("span", {
      className: "dtable-nested-toggle-icon"
    }))), o.level) {
      let { nestedIndent: u = i } = e.setting;
      u && (u === !0 && (u = (c = this.options.nestedIndent) != null ? c : 12), s.unshift(/* @__PURE__ */ y("div", {
        className: "dtable-nested-indent",
        style: { width: u * o.level + "px" }
      })));
    }
    return s;
  },
  onRenderHeaderCell(s, t, e) {
    var n, i;
    return e.setting.nestedToggle && s.unshift((i = (n = this.options.onRenderNestedToggle) == null ? void 0 : n.call(this, void 0, t, e, void 0)) != null ? i : /* @__PURE__ */ y("a", {
      type: "button",
      className: "dtable-nested-toggle state"
    }, /* @__PURE__ */ y("span", {
      className: "dtable-nested-toggle-icon"
    }))), s;
  },
  onRenderRow(s, t) {
    return s.className = z(s.className, `is-nested-${this.getNestedRowInfo(t.id).state}`), s;
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
$e(jt);
function _e(s, ...t) {
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
const I = 24 * 60 * 60 * 1e3, N = (s) => s ? (s instanceof Date || (typeof s == "string" && (s = s.trim(), /^\d+$/.test(s) && (s = Number.parseInt(s, 10))), typeof s == "number" && s < 1e10 && (s *= 1e3), s = new Date(s)), s) : new Date(), ae = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth() && s.getDate() === t.getDate()), Ie = (s, t = new Date()) => N(s).getFullYear() === N(t).getFullYear(), Wt = (s, t = new Date()) => (s = N(s), t = N(t), s.getFullYear() === t.getFullYear() && s.getMonth() === t.getMonth()), cs = (s, t = new Date()) => {
  s = N(s), t = N(t);
  const e = 1e3 * 60 * 60 * 24, n = Math.floor(s.getTime() / e), i = Math.floor(t.getTime() / e);
  return Math.floor((n + 4) / 7) === Math.floor((i + 4) / 7);
}, hs = (s, t) => ae(N(t), s), ds = (s, t) => ae(N(t).getTime() - I, s), fs = (s, t) => ae(N(t).getTime() + I, s), us = (s, t) => ae(N(t).getTime() - 2 * I, s), Ee = (s, t = "yyyy-MM-dd hh:mm") => {
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
}, ps = (s, t, e) => {
  const n = {
    full: "yyyy-M-d",
    month: "M-d",
    day: "d",
    str: "{0} ~ {1}",
    ...e
  }, i = Ee(s, Ie(s) ? n.month : n.full);
  if (ae(s, t))
    return i;
  const o = Ee(t, Ie(s, t) ? Wt(s, t) ? n.day : n.month : n.full);
  return n.str.replace("{0}", i).replace("{1}", o);
}, gs = (s) => {
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
}, De = (s, t, e = !0, n = Date.now()) => {
  switch (t) {
    case "year":
      return s *= 365, De(s, "day", e, n);
    case "quarter":
      s *= 3;
    case "month":
      return s *= 30, De(s, "day", e, n);
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
const Pt = {
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
        const { linkTemplate: i = "", linkProps: o } = e.setting, r = _e(i, n);
        return s[0] = /* @__PURE__ */ y("a", {
          href: r,
          ...o
        }, s[0]), s;
      }
    },
    avatar: {
      onRenderCell(s, t, e, n) {
        const { avatarWithName: i, avatarClass: o = "size-sm circle", avatarKey: r = `${e.name}Avatar` } = e.setting, a = /* @__PURE__ */ y("div", {
          className: `avatar ${o} flex-none`
        }, /* @__PURE__ */ y("img", {
          src: n ? n[r] : ""
        }));
        return i ? s.unshift(a) : s[0] = a, s;
      }
    },
    circleProgress: {
      onRenderCell(s, t, e) {
        const { circleSize: n = 24, circleBorderSize: i = 1, circleBgColor: o = "var(--color-border)", circleColor: r = "var(--color-green-500)" } = e.setting, a = (n - i) / 2, c = n / 2, u = s[0];
        return s[0] = /* @__PURE__ */ y("svg", {
          width: n,
          height: n
        }, /* @__PURE__ */ y("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: o,
          fill: "transparent"
        }), /* @__PURE__ */ y("circle", {
          cx: c,
          cy: c,
          r: a,
          "stroke-width": i,
          stroke: r,
          fill: "transparent",
          "stroke-linecap": "round",
          "stroke-dasharray": Math.PI * a * 2,
          "stroke-dashoffset": Math.PI * a * 2 * (100 - u) / 100,
          style: { transformOrigin: "center", transform: "rotate(-90deg)" }
        }), /* @__PURE__ */ y("text", {
          x: c,
          y: c + i,
          "dominant-baseline": "middle",
          "text-anchor": "middle",
          style: { fontSize: `${a}px` }
        }, Math.round(u))), s;
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
            const u = r[c.action];
            return u && (c = { className: a, ...u, ...c }), _e(o, c);
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
        return typeof i == "function" ? s[0] = o === "html" ? { html: i(r) } : i(r) : o === "datetime" ? s[0] = Ee(r, i) : o === "html" ? s[0] = { html: _e(i, r) } : s[0] = _e(i, r), s;
      }
    }
  }
};
$e(Pt);
const ms = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  checkable: Nt,
  nested: jt,
  rich: Pt
}, Symbol.toStringTag, { value: "Module" }));
var de;
class be {
  constructor(t, e) {
    _(this, "element");
    _(this, "options");
    M(this, de, vt());
    var n;
    this.element = t, this.options = { ...We(), ...e }, (n = this.options.cols) != null && n.length && this.render();
  }
  get $() {
    return d(this, de).current;
  }
  render(t) {
    this.options = Object.assign(this.options, t), Vt(/* @__PURE__ */ y(Pe, {
      ref: d(this, de),
      ...this.options
    }), this.element);
  }
}
de = new WeakMap(), _(be, "NAME", "zui.dtable"), _(be, "definePlugin", $e), _(be, "removePlugin", Ht), _(be, "plugins", ms);
let _s = (s = 21) => crypto.getRandomValues(new Uint8Array(s)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
var fe, K, P, oe, re, ve;
const Ue = class {
  constructor(t, e = "local") {
    M(this, re);
    M(this, fe, void 0);
    M(this, K, void 0);
    M(this, P, void 0);
    M(this, oe, void 0);
    C(this, fe, e), C(this, K, `ZUI_STORE:${t != null ? t : _s()}`), C(this, P, e === "local" ? localStorage : sessionStorage);
  }
  get type() {
    return d(this, fe);
  }
  get session() {
    return this.type === "session" ? this : (d(this, oe) || C(this, oe, new Ue(d(this, K), "session")), d(this, oe));
  }
  get(t, e) {
    const n = d(this, P).getItem(me(this, re, ve).call(this, t));
    return typeof n == "string" ? JSON.parse(n) : n != null ? n : e;
  }
  set(t, e) {
    if (e == null)
      return this.remove(t);
    d(this, P).setItem(me(this, re, ve).call(this, t), JSON.stringify(e));
  }
  remove(t) {
    d(this, P).removeItem(me(this, re, ve).call(this, t));
  }
  each(t) {
    for (let e = 0; e < d(this, P).length; e++) {
      const n = d(this, P).key(e);
      if (n != null && n.startsWith(d(this, K))) {
        const i = d(this, P).getItem(n);
        typeof i == "string" && t(n.substring(d(this, K).length + 1), JSON.parse(i));
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
let Re = Ue;
fe = new WeakMap(), K = new WeakMap(), P = new WeakMap(), oe = new WeakMap(), re = new WeakSet(), ve = function(t) {
  return `${d(this, K)}:${t}`;
};
const bs = new Re("DEFAULT");
function ys(s, t = "local") {
  return new Re(s, t);
}
Object.assign(bs, { create: ys });
class gt {
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
        const u = (c == null ? void 0 : c.getElementsByClassName("modal-header")[0].clientHeight) || 0, l = c == null ? void 0 : c.getElementsByClassName("modal-body")[0], f = (c == null ? void 0 : c.getElementsByClassName("modal-footer")[0].clientHeight) || 0, g = i - u - f, p = l && l.scrollHeight > g ? "auto" : "visible";
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
      new gt(o, r);
    } else
      s.target.parentElement.className.includes("modal") || new gt(s, { type: "hide" }).onClear();
});
const Cs = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  TIME_DAY: I,
  createDate: N,
  isSameDay: ae,
  isSameYear: Ie,
  isSameMonth: Wt,
  isSameWeek: cs,
  isToday: hs,
  isYesterday: ds,
  isTomorrow: fs,
  isDBY: us,
  formatDate: Ee,
  formatDateSpan: ps,
  getTimeBeforeDesc: gs,
  calculateTimestamp: De
}, Symbol.toStringTag, { value: "Module" }));
var F, T;
class vs {
  constructor(t) {
    M(this, F, void 0);
    M(this, T, void 0);
    C(this, F, t), C(this, T, document.querySelector(t.getAttribute("data-target")) || document.querySelector(t.getAttribute("data-tab")) || document.querySelector(t.getAttribute("href")));
  }
  showTarget() {
    this.addActive(d(this, F).parentElement.parentElement, d(this, F).parentElement), this.addActive(d(this, T).parentElement, d(this, T)), d(this, T).dispatchEvent(new CustomEvent("show.zui3.tab"));
  }
  show() {
    C(this, T, d(this, F)), this.addActive(d(this, T).parentElement, d(this, T)), C(this, F, document.querySelector(`[href='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-tab='#${d(this, T).getAttribute("id")}']`) || document.querySelector(`[data-target='#${d(this, T).getAttribute("id")}']`)), this.addActive(d(this, F).parentElement.parentElement, d(this, F).parentElement);
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
F = new WeakMap(), T = new WeakMap();
document.addEventListener("click", function(s) {
  s !== null && s.target instanceof HTMLElement && (s.target.dataset.toggle === "tab" || s.target.getAttribute("data-tab")) && (s.preventDefault(), new vs(s.target).showTarget());
});
export {
  ks as Avatar,
  be as DTable,
  vs as NavTabs,
  ut as Scrollbar,
  Ss as browser,
  ms as dtablePlugins,
  Cs as helpers,
  bs as store
};
