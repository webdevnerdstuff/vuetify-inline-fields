import { Fragment as pe, reactive as Le, computed as v, watchEffect as qe, toRefs as Ul, capitalize as Gl, warn as mn, watch as U, onScopeDispose as be, effectScope as Kn, inject as re, ref as j, unref as s, provide as Te, shallowRef as oe, defineComponent as Ge, camelize as Kl, h as gn, getCurrentInstance as sa, onBeforeUnmount as Ke, readonly as Yn, toRaw as je, TransitionGroup as ua, Transition as tt, createVNode as c, mergeProps as G, onBeforeMount as Yl, nextTick as ge, withDirectives as fe, resolveDirective as De, vShow as rt, isRef as nt, onMounted as bt, toRef as Y, Text as ca, resolveDynamicComponent as da, Teleport as va, cloneVNode as pa, createTextVNode as fa, vModelText as ma, mergeModels as $e, useModel as st, openBlock as ne, createBlock as Ne, useAttrs as ut, createElementBlock as ce, withCtx as Ce, normalizeClass as ee, createCommentVNode as Xl, mergeDefaults as St, useSlots as Ct, onUnmounted as xt, normalizeStyle as Ve, createElementVNode as xe, toDisplayString as wt, createSlots as kt, renderList as Vt, renderSlot as Bt, normalizeProps as It, guardReactiveProps as _t, withKeys as on } from "vue";
/**
 * @name vuetify-inline-fields
 * @version 1.0.0-beta-1.3
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Ot = Symbol("identifier"), $t = { alignItems: "center", cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", closeSiblings: !1, color: "primary", density: "compact", disabled: !1, emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Xn = { autofocus: !0 }, yn = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Jl = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ga = { ...$t, ...Jl, ...yn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, ya = { ...$t, ...Xn, ...yn, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, ha = { ...$t, ...Jl, icons: !0, falseIcon: "" }, ba = { ...Xn, ...yn, ...$t, autoGrow: !0, rows: 1, variant: "underlined" }, Sa = { ...$t, ...Xn, ...yn, variant: "underlined" }, Ca = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, Oe = (e) => {
  const { icon: n, iconOptions: t, name: o } = e;
  if (n)
    return n;
  const a = Ca[t == null ? void 0 : t.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${t == null ? void 0 : t.defaultSet} icon set found for ${o}. Please set the icon prop.`);
  const i = a[o];
  if (!i)
    throw new Error(`VInlineFields: No ${o} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function W(e, n) {
  return (t) => Object.keys(e).reduce((o, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return o[a] = t && a in t ? { ...i, default: t[a] } : i, n && !o[a].source && (o[a].source = n), o;
  }, {});
}
const ae = W({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function ml(e, n, t) {
  const o = n.length - 1;
  if (o < 0)
    return e === void 0 ? t : e;
  for (let a = 0; a < o; a++) {
    if (e == null)
      return t;
    e = e[n[a]];
  }
  return e == null || e[n[o]] === void 0 ? t : e[n[o]];
}
function ct(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((o) => ct(e[o], n[o]));
}
function Pe(e, n, t) {
  if (n == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const a = n(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof n == "string")
    return function(a, i, r) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : ml(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), r) : r;
    }(e, n, t);
  if (Array.isArray(n))
    return ml(e, n, t);
  if (typeof n != "function")
    return t;
  const o = n(e, t);
  return o === void 0 ? t : o;
}
function Z(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function An(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Tn(e) {
  return e && "$el" in e ? e.$el : e;
}
const gl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function At(e, n, t) {
  const o = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((r) => r instanceof RegExp ? r.test(i) : r === i) && !(t != null && t.some((r) => r === i)) ? o[i] = e[i] : a[i] = e[i];
  return [o, a];
}
function Jn(e, n) {
  const t = { ...e };
  return n.forEach((o) => delete t[o]), t;
}
function Tt(e) {
  return At(e, ["class", "style", "id", /^data-/]);
}
function He(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function En(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function ot() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const o = {};
  for (const a in e)
    o[a] = e[a];
  for (const a in n) {
    const i = e[a], r = n[a];
    An(i) && An(r) ? o[a] = ot(i, r, t) : Array.isArray(i) && Array.isArray(r) && t ? o[a] = t(i, r) : o[a] = r;
  }
  return o;
}
function Zl(e) {
  return e.map((n) => n.type === pe ? Zl(n.children) : n).flat();
}
function Qe() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Qe.cache.has(e))
    return Qe.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Qe.cache.set(e, n), n;
}
function tn(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => tn(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => tn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return tn(e, n.component.subTree).flat(1);
  }
  return [];
}
function Zn(e) {
  const n = Le({}), t = v(e);
  return qe(() => {
    for (const o in t.value)
      n[o] = t.value[o];
  }, { flush: "sync" }), Ul(n);
}
function an(e, n) {
  return e.includes(n);
}
Qe.cache = /* @__PURE__ */ new Map();
const xa = /^on[^a-z]/, Fn = (e) => xa.test(e);
function yl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ee = () => [Function, Array];
function hl(e, n) {
  return !!(e[n = "on" + Gl(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function Ql(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else
    typeof e == "function" && e(...t);
}
function rn(e, n) {
  var a, i, r;
  const t = function(l) {
    const u = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((p) => `${p}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...l.querySelectorAll(u)];
  }(e), o = t.indexOf(document.activeElement);
  if (n)
    if (n === "first")
      (a = t[0]) == null || a.focus();
    else if (n === "last")
      (i = t.at(-1)) == null || i.focus();
    else {
      let l, u = o;
      const p = n === "next" ? 1 : -1;
      do
        u += p, l = t[u];
      while ((!l || l.offsetParent == null) && u < t.length && u >= 0);
      l ? l.focus() : rn(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((r = t[0]) == null || r.focus());
}
const eo = ["top", "bottom"], wa = ["start", "end", "left", "right"];
function Ln(e, n) {
  let [t, o] = e.split(" ");
  return o || (o = an(eo, t) ? "start" : an(wa, t) ? "top" : "center"), { side: bl(t, n), align: bl(o, n) };
}
function bl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function kn(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Vn(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Sl(e) {
  return { side: e.align, align: e.side };
}
function Cl(e) {
  return an(eo, e.side) ? "y" : "x";
}
class it {
  constructor(n) {
    let { x: t, y: o, width: a, height: i } = n;
    this.x = t, this.y = o, this.width = a, this.height = i;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function xl(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function Qn(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), o = t.transform;
  if (o) {
    let a, i, r, l, u;
    if (o.startsWith("matrix3d("))
      a = o.slice(9, -1).split(/, /), i = +a[0], r = +a[5], l = +a[12], u = +a[13];
    else {
      if (!o.startsWith("matrix("))
        return new it(n);
      a = o.slice(7, -1).split(/, /), i = +a[0], r = +a[3], l = +a[4], u = +a[5];
    }
    const p = t.transformOrigin, m = n.x - l - (1 - i) * parseFloat(p), d = n.y - u - (1 - r) * parseFloat(p.slice(p.indexOf(" ") + 1)), f = i ? n.width / i : e.offsetWidth + 1, g = r ? n.height / r : e.offsetHeight + 1;
    return new it({ x: m, y: d, width: f, height: g });
  }
  return new it(n);
}
function at(e, n, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let o;
  try {
    o = e.animate(n, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return o.finished === void 0 && (o.finished = new Promise((a) => {
    o.onfinish = () => {
      a(o);
    };
  })), o;
}
const Qt = /* @__PURE__ */ new WeakMap();
function to(e) {
  mn(`Vuetify: ${e}`);
}
function wl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function et(e, n) {
  let t;
  function o() {
    t = Kn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), o();
    }) : n());
  }
  U(e, (a) => {
    a && !t ? o() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), be(() => {
    t == null || t.stop();
  });
}
const el = Symbol.for("vuetify:defaults");
function tl() {
  const e = re(el);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function dt(e, n) {
  const t = tl(), o = j(e), a = v(() => {
    if (s(n == null ? void 0 : n.disabled))
      return t.value;
    const i = s(n == null ? void 0 : n.scoped), r = s(n == null ? void 0 : n.reset), l = s(n == null ? void 0 : n.root);
    let u = ot(o.value, { prev: t.value });
    if (i)
      return u;
    if (r || l) {
      const p = Number(r || 1 / 0);
      for (let m = 0; m <= p && u && "prev" in u; m++)
        u = u.prev;
      return u && typeof l == "string" && l in u && (u = ot(ot(u, { prev: u }), u[l])), u;
    }
    return u.prev ? ot(u.prev, u) : u;
  });
  return Te(el, a), a;
}
function ka() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tl();
  const o = ye("useDefaults");
  if (n = n ?? o.type.name ?? o.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = v(() => {
    var l;
    return (l = t.value) == null ? void 0 : l[e._as ?? n];
  }), i = new Proxy(e, { get(l, u) {
    var m, d, f, g;
    const p = Reflect.get(l, u);
    return u === "class" || u === "style" ? [(m = a.value) == null ? void 0 : m[u], p].filter((y) => y != null) : typeof u != "string" || function(y, x) {
      var h, B;
      return ((h = y.props) == null ? void 0 : h[x]) !== void 0 || ((B = y.props) == null ? void 0 : B[Qe(x)]) !== void 0;
    }(o.vnode, u) ? p : ((d = a.value) == null ? void 0 : d[u]) ?? ((g = (f = t.value) == null ? void 0 : f.global) == null ? void 0 : g[u]) ?? p;
  } }), r = oe();
  return qe(() => {
    if (a.value) {
      const l = Object.entries(a.value).filter((u) => {
        let [p] = u;
        return p.startsWith(p[0].toUpperCase());
      });
      l.length && (r.value = Object.fromEntries(l));
    }
  }), { props: i, provideSubDefaults: function() {
    et(r, () => {
      var l;
      dt(ot(((l = function(u) {
        const { provides: p } = ye("injectSelf");
        if (p && u in p)
          return p[u];
      }(el)) == null ? void 0 : l.value) ?? {}, r.value));
    });
  } };
}
function ft(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return to("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = W(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return At(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, o) {
      const a = tl();
      if (!a.value)
        return e._setup(t, o);
      const { props: i, provideSubDefaults: r } = ka(t, t._as ?? e.name, a), l = e._setup(i, o);
      return r(), l;
    };
  }
  return e;
}
function X() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? ft : Ge)(n);
}
function no(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return X()({ name: t ?? Gl(Kl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ae() }, setup(o, a) {
    let { slots: i } = a;
    return () => {
      var r;
      return gn(o.tag, { class: [e, o.class], style: o.style }, (r = i.default) == null ? void 0 : r.call(i));
    };
  } });
}
function lo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const sn = "cubic-bezier(0.4, 0, 0.2, 1)";
function ye(e, n) {
  const t = sa();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function We() {
  const e = ye(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Qe((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let oo = 0, nn = /* @__PURE__ */ new WeakMap();
function Ae() {
  const e = ye("getUid");
  if (nn.has(e))
    return nn.get(e);
  {
    const n = oo++;
    return nn.set(e, n), n;
  }
}
function un(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (nl(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function nl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
Ae.reset = () => {
  oo = 0, nn = /* @__PURE__ */ new WeakMap();
};
const _e = typeof window < "u", ll = _e && "IntersectionObserver" in window, zn = _e && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function Q(e) {
  ye("useRender").render = e;
}
function de(e, n, t) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (m) => m, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (m) => m;
  const i = ye("useProxiedModel"), r = j(e[n] !== void 0 ? e[n] : t), l = Qe(n), u = v(l !== n ? () => {
    var m, d, f, g;
    return e[n], !(!((m = i.vnode.props) != null && m.hasOwnProperty(n)) && !((d = i.vnode.props) != null && d.hasOwnProperty(l)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)) && !((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${l}`)));
  } : () => {
    var m, d;
    return e[n], !(!((m = i.vnode.props) != null && m.hasOwnProperty(n)) || !((d = i.vnode.props) != null && d.hasOwnProperty(`onUpdate:${n}`)));
  });
  et(() => !u.value, () => {
    U(() => e[n], (m) => {
      r.value = m;
    });
  });
  const p = v({ get() {
    const m = e[n];
    return o(u.value ? m : r.value);
  }, set(m) {
    const d = a(m), f = je(u.value ? e[n] : r.value);
    f !== d && o(f) !== m && (r.value = d, i == null || i.emit(`update:${n}`, d));
  } });
  return Object.defineProperty(p, "externalValue", { get: () => u.value ? e[n] : r.value }), p;
}
const ao = Symbol.for("vuetify:locale");
function ol() {
  const e = re(ao);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Et() {
  const e = re(ao);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const kl = Symbol.for("vuetify:theme"), me = W({ theme: String }, "theme");
function we(e) {
  ye("provideTheme");
  const n = re(kl, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = v(() => e.theme ?? (n == null ? void 0 : n.name.value)), o = v(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, themeClasses: o };
  return Te(kl, a), a;
}
const Be = W({ tag: { type: String, default: "div" } }, "tag"), Va = W({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function he(e, n, t) {
  return X()({ name: e, props: Va({ mode: t, origin: n }), setup(o, a) {
    let { slots: i } = a;
    const r = { onBeforeEnter(l) {
      o.origin && (l.style.transformOrigin = o.origin);
    }, onLeave(l) {
      if (o.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: p, offsetWidth: m, offsetHeight: d } = l;
        l._transitionInitialStyles = { position: l.style.position, top: l.style.top, left: l.style.left, width: l.style.width, height: l.style.height }, l.style.position = "absolute", l.style.top = `${u}px`, l.style.left = `${p}px`, l.style.width = `${m}px`, l.style.height = `${d}px`;
      }
      o.hideOnLeave && l.style.setProperty("display", "none", "important");
    }, onAfterLeave(l) {
      if (o.leaveAbsolute && (l != null && l._transitionInitialStyles)) {
        const { position: u, top: p, left: m, width: d, height: f } = l._transitionInitialStyles;
        delete l._transitionInitialStyles, l.style.position = u || "", l.style.top = p || "", l.style.left = m || "", l.style.width = d || "", l.style.height = f || "";
      }
    } };
    return () => {
      const l = o.group ? ua : tt;
      return gn(l, { name: o.disabled ? "" : e, css: !o.disabled, ...o.group ? void 0 : { mode: o.mode }, ...o.disabled ? {} : r }, i.default);
    };
  } });
}
function io(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return X()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(o, a) {
    let { slots: i } = a;
    return () => gn(tt, { name: o.disabled ? "" : e, css: !o.disabled, ...o.disabled ? {} : n }, i.default);
  } });
}
function ro() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Kl(`offset-${n}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [n]: i.style[n] };
  }, onEnter(i) {
    const r = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const l = `${i[t]}px`;
    i.style[n] = "0", i.offsetHeight, i.style.transition = r.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[n] = l;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [n]: i.style[n] }, i.style.overflow = "hidden", i.style[n] = `${i[t]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
  }, onAfterLeave: o, onLeaveCancelled: o };
  function o(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const r = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, r != null && (i.style[n] = r), delete i._initialStyle;
  }
}
const Ba = W({ target: Object }, "v-dialog-transition"), so = X()({ name: "VDialogTransition", props: Ba(), setup(e, n) {
  let { slots: t } = n;
  const o = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), a.style.visibility = "";
    const { x: r, y: l, sx: u, sy: p, speed: m } = Bl(e.target, a), d = at(a, [{ transform: `translate(${r}px, ${l}px) scale(${u}, ${p})`, opacity: 0 }, {}], { duration: 225 * m, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = Vl(a)) == null || f.forEach((g) => {
      at(g, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * m, easing: sn });
    }), d.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var d;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: r, y: l, sx: u, sy: p, speed: m } = Bl(e.target, a);
    at(a, [{}, { transform: `translate(${r}px, ${l}px) scale(${u}, ${p})`, opacity: 0 }], { duration: 125 * m, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (d = Vl(a)) == null || d.forEach((f) => {
      at(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * m, easing: sn });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? c(tt, G({ name: "dialog-transition" }, o, { css: !1 }), t) : c(tt, { name: "dialog-transition" }, t);
} });
function Vl(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Bl(e, n) {
  const t = e.getBoundingClientRect(), o = Qn(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((B) => parseFloat(B)), [r, l] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = t.left + t.width / 2;
  r === "left" || l === "left" ? u -= t.width / 2 : r !== "right" && l !== "right" || (u += t.width / 2);
  let p = t.top + t.height / 2;
  r === "top" || l === "top" ? p -= t.height / 2 : r !== "bottom" && l !== "bottom" || (p += t.height / 2);
  const m = t.width / o.width, d = t.height / o.height, f = Math.max(1, m, d), g = m / f || 0, y = d / f || 0, x = o.width * o.height / (window.innerWidth * window.innerHeight), h = x > 0.12 ? Math.min(1.5, 10 * (x - 0.12) + 1) : 1;
  return { x: u - (a + o.left), y: p - (i + o.top), sx: g, sy: y, speed: h };
}
he("fab-transition", "center center", "out-in"), he("dialog-bottom-transition"), he("dialog-top-transition"), he("fade-transition"), he("scale-transition"), he("scroll-x-transition"), he("scroll-x-reverse-transition"), he("scroll-y-transition"), he("scroll-y-reverse-transition"), he("slide-x-transition"), he("slide-x-reverse-transition");
const uo = he("slide-y-transition");
he("slide-y-reverse-transition");
const Ia = io("expand-transition", ro()), co = io("expand-x-transition", ro("", !0)), _a = W({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ke = X(!1)({ name: "VDefaultsProvider", props: _a(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: o, disabled: a, reset: i, root: r, scoped: l } = Ul(e);
  return dt(o, { reset: i, root: r, scoped: l, disabled: a }), () => {
    var u;
    return (u = t.default) == null ? void 0 : u.call(t);
  };
} }), Ft = W({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Lt(e) {
  return { dimensionStyles: v(() => ({ height: Z(e.height), maxHeight: Z(e.maxHeight), maxWidth: Z(e.maxWidth), minHeight: Z(e.minHeight), minWidth: Z(e.minWidth), width: Z(e.width) })) };
}
const vo = W({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ae(), ...Ft() }, "VResponsive"), Il = X()({ name: "VResponsive", props: vo(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: o } = function(i) {
    return { aspectStyles: v(() => {
      const r = Number(i.aspectRatio);
      return r ? { paddingBottom: String(1 / r * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = Lt(e);
  return Q(() => {
    var i;
    return c("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [c("div", { class: "v-responsive__sizer", style: o.value }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && c("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), zt = W({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Re = (e, n) => {
  let { slots: t } = n;
  const { transition: o, disabled: a, ...i } = e, { component: r = tt, ...l } = typeof o == "object" ? o : {};
  return gn(r, G(typeof o == "string" ? { name: a ? "" : o } : l, i, { disabled: a }), t);
};
function _l(e, n) {
  var o;
  const t = (o = e._observe) == null ? void 0 : o[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const al = { mounted: function(e, n) {
  if (!ll)
    return;
  const t = n.modifiers || {}, o = n.value, { handler: a, options: i } = typeof o == "object" ? o : { handler: o, options: {} }, r = new IntersectionObserver(function() {
    var d;
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const p = (d = e._observe) == null ? void 0 : d[n.instance.$.uid];
    if (!p)
      return;
    const m = l.some((f) => f.isIntersecting);
    !a || t.quiet && !p.init || t.once && !m && !p.init || a(m, l, u), m && t.once ? _l(e, n) : p.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: r }, r.observe(e);
}, unmounted: _l }, Oa = W({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...vo(), ...ae(), ...zt() }, "VImg"), $a = X()({ name: "VImg", directives: { intersect: al }, props: Oa(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: o } = n;
  const a = oe(""), i = j(), r = oe(e.eager ? "loading" : "idle"), l = oe(), u = oe(), p = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), m = v(() => p.value.aspect || l.value / u.value || 0);
  function d(S) {
    if ((!e.eager || !S) && (!ll || S || e.eager)) {
      if (r.value = "loading", p.value.lazySrc) {
        const b = new Image();
        b.src = p.value.lazySrc, h(b, null);
      }
      p.value.src && ge(() => {
        var b, O;
        if (t("loadstart", ((b = i.value) == null ? void 0 : b.currentSrc) || p.value.src), (O = i.value) == null ? void 0 : O.complete) {
          if (i.value.naturalWidth || g(), r.value === "error")
            return;
          m.value || h(i.value, null), f();
        } else
          m.value || h(i.value), y();
      });
    }
  }
  function f() {
    var S;
    y(), r.value = "loaded", t("load", ((S = i.value) == null ? void 0 : S.currentSrc) || p.value.src);
  }
  function g() {
    var S;
    r.value = "error", t("error", ((S = i.value) == null ? void 0 : S.currentSrc) || p.value.src);
  }
  function y() {
    const S = i.value;
    S && (a.value = S.currentSrc || S.src);
  }
  U(() => e.src, () => {
    d(r.value !== "idle");
  }), U(m, (S, b) => {
    !S && b && i.value && h(i.value);
  }), Yl(() => d());
  let x = -1;
  function h(S) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const O = () => {
      clearTimeout(x);
      const { naturalHeight: w, naturalWidth: A } = S;
      w || A ? (l.value = A, u.value = w) : S.complete || r.value !== "loading" || b == null ? (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (l.value = 1, u.value = 1) : x = window.setTimeout(O, b);
    };
    O();
  }
  const B = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), T = () => {
    var O;
    if (!p.value.src || r.value === "idle")
      return null;
    const S = c("img", { class: ["v-img__img", B.value], src: p.value.src, srcset: p.value.srcset, alt: e.alt, sizes: e.sizes, ref: i, onLoad: f, onError: g }, null), b = (O = o.sources) == null ? void 0 : O.call(o);
    return c(Re, { transition: e.transition, appear: !0 }, { default: () => [fe(b ? c("picture", { class: "v-img__picture" }, [b, S]) : S, [[rt, r.value === "loaded"]])] });
  }, I = () => c(Re, { transition: e.transition }, { default: () => [p.value.lazySrc && r.value !== "loaded" && c("img", { class: ["v-img__img", "v-img__img--preload", B.value], src: p.value.lazySrc, alt: e.alt }, null)] }), P = () => o.placeholder ? c(Re, { transition: e.transition, appear: !0 }, { default: () => [(r.value === "loading" || r.value === "error" && !o.error) && c("div", { class: "v-img__placeholder" }, [o.placeholder()])] }) : null, D = () => o.error ? c(Re, { transition: e.transition, appear: !0 }, { default: () => [r.value === "error" && c("div", { class: "v-img__error" }, [o.error()])] }) : null, $ = () => e.gradient ? c("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, k = oe(!1);
  {
    const S = U(m, (b) => {
      b && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          k.value = !0;
        });
      }), S());
    });
  }
  return Q(() => {
    const [S] = Il.filterProps(e);
    return fe(c(Il, G({ class: ["v-img", { "v-img--booting": !k.value }, e.class], style: e.style }, S, { aspectRatio: m.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => c(pe, null, [c(T, null, null), c(I, null, null), c($, null, null), c(P, null, null), c(D, null, null)]), default: o.default }), [[De("intersect"), { handler: d, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: r, naturalWidth: l, naturalHeight: u };
} }), Pt = W({ border: [Boolean, Number, String] }, "border");
function Dt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { borderClasses: v(() => {
    const t = nt(e) ? e.value : e.border, o = [];
    if (t === !0 || t === "")
      o.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        o.push(`border-${a}`);
    return o;
  }) };
}
function il(e) {
  return Zn(() => {
    const n = [], t = {};
    return e.value.background && (wl(e.value.background) ? t.backgroundColor = e.value.background : n.push(`bg-${e.value.background}`)), e.value.text && (wl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function Me(e, n) {
  const t = v(() => ({ text: nt(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: a } = il(t);
  return { textColorClasses: o, textColorStyles: a };
}
function mt(e, n) {
  const t = v(() => ({ background: nt(e) ? e.value : n ? e[n] : null })), { colorClasses: o, colorStyles: a } = il(t);
  return { backgroundColorClasses: o, backgroundColorStyles: a };
}
const Mt = W({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Wt(e) {
  return { elevationClasses: v(() => {
    const n = nt(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Ye = W({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Xe(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { roundedClasses: v(() => {
    const t = nt(e) ? e.value : e.rounded, o = [];
    if (t === !0 || t === "")
      o.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        o.push(`rounded-${a}`);
    return o;
  }) };
}
const Aa = [null, "default", "comfortable", "compact"], Je = W({ density: { type: String, default: "default", validator: (e) => Aa.includes(e) } }, "density");
function Ze(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { densityClasses: v(() => `${n}--density-${e.density}`) };
}
const Ta = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function hn(e, n) {
  return c(pe, null, [e && c("span", { key: "overlay", class: `${n}__overlay` }, null), c("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const lt = W({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ta.includes(e) } }, "variant");
function bn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = v(() => {
    const { variant: i } = s(e);
    return `${n}--variant-${i}`;
  }), { colorClasses: o, colorStyles: a } = il(v(() => {
    const { variant: i, color: r } = s(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: r };
  }));
  return { colorClasses: o, colorStyles: a, variantClasses: t };
}
const po = W({ divided: Boolean, ...Pt(), ...ae(), ...Je(), ...Mt(), ...Ye(), ...Be(), ...me(), ...lt() }, "VBtnGroup"), Ol = X()({ name: "VBtnGroup", props: po(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: o } = we(e), { densityClasses: a } = Ze(e), { borderClasses: i } = Dt(e), { elevationClasses: r } = Wt(e), { roundedClasses: l } = Xe(e);
  dt({ VBtn: { height: "auto", color: Y(e, "color"), density: Y(e, "density"), flat: !0, variant: Y(e, "variant") } }), Q(() => c(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, o.value, i.value, a.value, r.value, l.value, e.class], style: e.style }, t));
} }), fo = W({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), mo = W({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function go(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const o = ye("useGroupItem");
  if (!o)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = Ae();
  Te(Symbol.for(`${n.description}:id`), a);
  const i = re(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const r = Y(e, "value"), l = v(() => i.disabled.value || e.disabled);
  i.register({ id: a, value: r, disabled: l }, o), Ke(() => {
    i.unregister(a);
  });
  const u = v(() => i.isSelected(a)), p = v(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return U(u, (m) => {
    o.emit("group:selected", { value: m });
  }), { id: a, isSelected: u, toggle: () => i.select(a, !u.value), select: (m) => i.select(a, m), selectedClass: p, value: r, disabled: l, group: i };
}
function yo(e, n) {
  let t = !1;
  const o = Le([]), a = de(e, "modelValue", [], (p) => p == null ? [] : $l(o, He(p)), (p) => {
    const m = function(d, f) {
      const g = [];
      return f.forEach((y) => {
        const x = d.findIndex((h) => h.id === y);
        if (~x) {
          const h = d[x];
          g.push(h.value != null ? h.value : x);
        }
      }), g;
    }(o, p);
    return e.multiple ? m : m[0];
  }), i = ye("useGroup");
  function r() {
    const p = o.find((m) => !m.disabled);
    p && e.mandatory === "force" && !a.value.length && (a.value = [p.id]);
  }
  function l(p) {
    if (e.multiple && to('This method is not supported when using "multiple" prop'), a.value.length) {
      const m = a.value[0], d = o.findIndex((y) => y.id === m);
      let f = (d + p) % o.length, g = o[f];
      for (; g.disabled && f !== d; )
        f = (f + p) % o.length, g = o[f];
      if (g.disabled)
        return;
      a.value = [o[f].id];
    } else {
      const m = o.find((d) => !d.disabled);
      m && (a.value = [m.id]);
    }
  }
  bt(() => {
    r();
  }), Ke(() => {
    t = !0;
  });
  const u = { register: function(p, m) {
    const d = p, f = tn(Symbol.for(`${n.description}:id`), i == null ? void 0 : i.vnode).indexOf(m);
    f > -1 ? o.splice(f, 0, d) : o.push(d);
  }, unregister: function(p) {
    if (t)
      return;
    r();
    const m = o.findIndex((d) => d.id === p);
    o.splice(m, 1);
  }, selected: a, select: function(p, m) {
    const d = o.find((f) => f.id === p);
    if (!m || !(d != null && d.disabled))
      if (e.multiple) {
        const f = a.value.slice(), g = f.findIndex((x) => x === p), y = ~g;
        if (m = m ?? !y, y && e.mandatory && f.length <= 1 || !y && e.max != null && f.length + 1 > e.max)
          return;
        g < 0 && m ? f.push(p) : g >= 0 && !m && f.splice(g, 1), a.value = f;
      } else {
        const f = a.value.includes(p);
        if (e.mandatory && f)
          return;
        a.value = m ?? !f ? [p] : [];
      }
  }, disabled: Y(e, "disabled"), prev: () => l(o.length - 1), next: () => l(1), isSelected: (p) => a.value.includes(p), selectedClass: v(() => e.selectedClass), items: v(() => o), getItemIndex: (p) => function(m, d) {
    const f = $l(m, [d]);
    return f.length ? m.findIndex((g) => g.id === f[0]) : -1;
  }(o, p) };
  return Te(n, u), u;
}
function $l(e, n) {
  const t = [];
  return n.forEach((o) => {
    const a = e.find((r) => ct(o, r.value)), i = e[o];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
const ho = Symbol.for("vuetify:v-btn-toggle"), Ea = W({ ...po(), ...fo() }, "VBtnToggle");
X()({ name: "VBtnToggle", props: Ea(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: o, next: a, prev: i, select: r, selected: l } = yo(e, ho);
  return Q(() => {
    const [u] = Ol.filterProps(e);
    return c(Ol, G({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var p;
      return [(p = t.default) == null ? void 0 : p.call(t, { isSelected: o, next: a, prev: i, select: r, selected: l })];
    } });
  }), { next: a, prev: i, select: r };
} });
const ie = [String, Function, Object, Array], Fa = Symbol.for("vuetify:icons"), cn = W({ icon: { type: ie }, tag: { type: String, required: !0 } }, "icon"), Al = X()({ name: "VComponentIcon", props: cn(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const o = e.icon;
    return c(e.tag, null, { default: () => {
      var a;
      return [e.icon ? c(o, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), La = ft({ name: "VSvgIcon", inheritAttrs: !1, props: cn(), setup(e, n) {
  let { attrs: t } = n;
  return () => c(e.tag, G(t, { style: null }), { default: () => [c("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((o) => Array.isArray(o) ? c("path", { d: o[0], "fill-opacity": o[1] }, null) : c("path", { d: o }, null)) : c("path", { d: e.icon }, null)])] });
} });
ft({ name: "VLigatureIcon", props: cn(), setup: (e) => () => c(e.tag, null, { default: () => [e.icon] }) }), ft({ name: "VClassIcon", props: cn(), setup: (e) => () => c(e.tag, { class: e.icon }, null) });
const za = ["x-small", "small", "default", "large", "x-large"], Nt = W({ size: { type: [String, Number], default: "default" } }, "size");
function Rt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return Zn(() => {
    let t, o;
    return an(za, e.size) ? t = `${n}--size-${e.size}` : e.size && (o = { width: Z(e.size), height: Z(e.size) }), { sizeClasses: t, sizeStyles: o };
  });
}
const Pa = W({ color: String, start: Boolean, end: Boolean, icon: ie, ...ae(), ...Nt(), ...Be({ tag: "i" }), ...me() }, "VIcon"), ue = X()({ name: "VIcon", props: Pa(), setup(e, n) {
  let { attrs: t, slots: o } = n;
  const a = j(), { themeClasses: i } = we(e), { iconData: r } = ((m) => {
    const d = re(Fa);
    if (!d)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var h;
      const f = s(m);
      if (!f)
        return { component: Al };
      let g = f;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (h = d.aliases) == null ? void 0 : h[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(g))
        return { component: La, icon: g };
      if (typeof g != "string")
        return { component: Al, icon: g };
      const y = Object.keys(d.sets).find((B) => typeof g == "string" && g.startsWith(`${B}:`)), x = y ? g.slice(y.length + 1) : g;
      return { component: d.sets[y ?? d.defaultSet].component, icon: x };
    }) };
  })(v(() => a.value || e.icon)), { sizeClasses: l } = Rt(e), { textColorClasses: u, textColorStyles: p } = Me(Y(e, "color"));
  return Q(() => {
    var d, f;
    const m = (d = o.default) == null ? void 0 : d.call(o);
    return m && (a.value = (f = Zl(m).filter((g) => g.type === ca && g.children && typeof g.children == "string")[0]) == null ? void 0 : f.children), c(r.value.component, { tag: e.tag, icon: r.value.icon, class: ["v-icon", "notranslate", i.value, l.value, u.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [l.value ? void 0 : { fontSize: Z(e.size), height: Z(e.size), width: Z(e.size) }, p.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [m] });
  }), {};
} });
function bo(e, n) {
  const t = j(), o = oe(!1);
  if (ll) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), o.value = !!i.find((r) => r.isIntersecting);
    }, n);
    Ke(() => {
      a.disconnect();
    }), U(t, (i, r) => {
      r && (a.unobserve(r), o.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: o };
}
const Da = W({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ae(), ...Nt(), ...Be({ tag: "div" }), ...me() }, "VProgressCircular"), So = X()({ name: "VProgressCircular", props: Da(), setup(e, n) {
  let { slots: t } = n;
  const o = 2 * Math.PI * 20, a = j(), { themeClasses: i } = we(e), { sizeClasses: r, sizeStyles: l } = Rt(e), { textColorClasses: u, textColorStyles: p } = Me(Y(e, "color")), { textColorClasses: m, textColorStyles: d } = Me(Y(e, "bgColor")), { intersectionRef: f, isIntersecting: g } = bo(), { resizeRef: y, contentRect: x } = function($) {
    const k = j(), S = j();
    if (_e) {
      const b = new ResizeObserver((O) => {
        $ == null || $(O, b), O.length && (S.value = O[0].contentRect);
      });
      Ke(() => {
        b.disconnect();
      }), U(k, (O, w) => {
        w && (b.unobserve(Tn(w)), S.value = void 0), O && b.observe(Tn(O));
      }, { flush: "post" });
    }
    return { resizeRef: k, contentRect: Yn(S) };
  }(), h = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), B = v(() => Number(e.width)), T = v(() => l.value ? Number(e.size) : x.value ? x.value.width : Math.max(B.value, 32)), I = v(() => 20 / (1 - B.value / T.value) * 2), P = v(() => B.value / T.value * I.value), D = v(() => Z((100 - h.value) / 100 * o));
  return qe(() => {
    f.value = a.value, y.value = a.value;
  }), Q(() => c(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, r.value, u.value, e.class], style: [l.value, p.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [c("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${I.value} ${I.value}` }, [c("circle", { class: ["v-progress-circular__underlay", m.value], style: d.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": o, "stroke-dashoffset": 0 }, null), c("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": P.value, "stroke-dasharray": o, "stroke-dashoffset": D.value }, null)]), t.default && c("div", { class: "v-progress-circular__content" }, [t.default({ value: h.value })])] })), {};
} }), Tl = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Co = W({ location: String }, "location");
function xo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: o } = Et();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: r } = Ln(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, o.value);
    function l(p) {
      return t ? t(p) : 0;
    }
    const u = {};
    return i !== "center" && (n ? u[Tl[i]] = `calc(100% - ${l(i)}px)` : u[i] = 0), r !== "center" ? n ? u[Tl[r]] = `calc(100% - ${l(r)}px)` : u[r] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), u;
  }) };
}
const Ma = W({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ae(), ...Co({ location: "top" }), ...Ye(), ...Be(), ...me() }, "VProgressLinear"), Wa = X()({ name: "VProgressLinear", props: Ma(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const o = de(e, "modelValue"), { isRtl: a, rtlClasses: i } = Et(), { themeClasses: r } = we(e), { locationStyles: l } = xo(e), { textColorClasses: u, textColorStyles: p } = Me(e, "color"), { backgroundColorClasses: m, backgroundColorStyles: d } = mt(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: g } = mt(e, "color"), { roundedClasses: y } = Xe(e), { intersectionRef: x, isIntersecting: h } = bo(), B = v(() => parseInt(e.max, 10)), T = v(() => parseInt(e.height, 10)), I = v(() => parseFloat(e.bufferValue) / B.value * 100), P = v(() => parseFloat(o.value) / B.value * 100), D = v(() => a.value !== e.reverse), $ = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function S(b) {
    if (!x.value)
      return;
    const { left: O, right: w, width: A } = x.value.getBoundingClientRect(), C = D.value ? A - b.clientX + (w - A) : b.clientX - O;
    o.value = Math.round(C / A * B.value);
  }
  return Q(() => c(e.tag, { ref: x, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": D.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, y.value, r.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? Z(T.value) : 0, "--v-progress-linear-height": Z(T.value), ...l.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : P.value, onClick: e.clickable && S }, { default: () => [e.stream && c("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...p.value, [D.value ? "left" : "right"]: Z(-T.value), borderTop: `${Z(T.value / 2)} dotted`, opacity: k.value, top: `calc(50% - ${Z(T.value / 4)})`, width: Z(100 - I.value, "%"), "--v-progress-linear-stream-to": Z(T.value * (D.value ? 1 : -1)) } }, null), c("div", { class: ["v-progress-linear__background", m.value], style: [d.value, { opacity: k.value, width: Z(e.stream ? I.value : 100, "%") }] }, null), c(tt, { name: $.value }, { default: () => [e.indeterminate ? c("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((b) => c("div", { key: b, class: ["v-progress-linear__indeterminate", b, f.value], style: g.value }, null))]) : c("div", { class: ["v-progress-linear__determinate", f.value], style: [g.value, { width: Z(P.value, "%") }] }, null)] }), t.default && c("div", { class: "v-progress-linear__content" }, [t.default({ value: P.value, buffer: I.value })])] })), {};
} }), wo = W({ loading: [Boolean, String] }, "loader");
function rl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  return { loaderClasses: v(() => ({ [`${n}--loading`]: e.loading })) };
}
function ko(e, n) {
  var o;
  let { slots: t } = n;
  return c("div", { class: `${e.name}__loader` }, [((o = t.default) == null ? void 0 : o.call(t, { color: e.color, isActive: e.active })) || c(Wa, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Na = ["static", "relative", "fixed", "absolute", "sticky"], Ra = W({ position: { type: String, validator: (e) => Na.includes(e) } }, "position");
function sl(e, n) {
  const t = da("RouterLink"), o = v(() => !(!e.href && !e.to)), a = v(() => (o == null ? void 0 : o.value) || hl(n, "click") || hl(e, "click"));
  if (typeof t == "string")
    return { isLink: o, isClickable: a, href: Y(e, "href") };
  const i = e.to ? t.useLink(e) : void 0;
  return { isLink: o, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var r, l;
    return e.exact ? (r = i.isExactActive) == null ? void 0 : r.value : (l = i.isActive) == null ? void 0 : l.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const ul = W({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Bn = !1;
const Pn = Symbol("rippleStop"), ja = 80;
function El(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Dn(e) {
  return e.constructor.name === "TouchEvent";
}
function Vo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const dn = { show(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
    return;
  const o = document.createElement("span"), a = document.createElement("span");
  o.appendChild(a), o.className = "v-ripple__container", t.class && (o.className += ` ${t.class}`);
  const { radius: i, scale: r, x: l, y: u, centerX: p, centerY: m } = function(y, x) {
    var k;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, B = 0, T = 0;
    if (!Vo(y)) {
      const S = x.getBoundingClientRect(), b = Dn(y) ? y.touches[y.touches.length - 1] : y;
      B = b.clientX - S.left, T = b.clientY - S.top;
    }
    let I = 0, P = 0.3;
    (k = x._ripple) != null && k.circle ? (P = 0.15, I = x.clientWidth / 2, I = h.center ? I : I + Math.sqrt((B - I) ** 2 + (T - I) ** 2) / 4) : I = Math.sqrt(x.clientWidth ** 2 + x.clientHeight ** 2) / 2;
    const D = (x.clientWidth - 2 * I) / 2 + "px", $ = (x.clientHeight - 2 * I) / 2 + "px";
    return { radius: I, scale: P, x: h.center ? D : B - I + "px", y: h.center ? $ : T - I + "px", centerX: D, centerY: $ };
  }(e, n, t), d = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = d, a.style.height = d, n.appendChild(o);
  const f = window.getComputedStyle(n);
  f && f.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), El(a, `translate(${l}, ${u}) scale3d(${r},${r},${r})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), El(a, `translate(${p}, ${m}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var i;
  if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
    return;
  const n = e.getElementsByClassName("v-ripple__animation");
  if (n.length === 0)
    return;
  const t = n[n.length - 1];
  if (t.dataset.isHiding)
    return;
  t.dataset.isHiding = "true";
  const o = performance.now() - Number(t.dataset.activated), a = Math.max(250 - o, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var r;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((r = t.parentNode) == null ? void 0 : r.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, a);
} };
function Bo(e) {
  return e === void 0 || !!e;
}
function gt(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Pn]) {
    if (e[Pn] = !0, Dn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Vo(e), t._ripple.class && (n.class = t._ripple.class), Dn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        dn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var o;
        (o = t == null ? void 0 : t._ripple) != null && o.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, ja);
    } else
      dn.show(e, t, n);
  }
}
function Fl(e) {
  e[Pn] = !0;
}
function Se(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Se(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), dn.hide(n);
  }
}
function Io(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let yt = !1;
function _o(e) {
  yt || e.keyCode !== gl.enter && e.keyCode !== gl.space || (yt = !0, gt(e));
}
function Oo(e) {
  yt = !1, Se(e);
}
function $o(e) {
  yt && (yt = !1, Se(e));
}
function Ll(e, n, t) {
  const { value: o, modifiers: a } = n, i = Bo(o);
  if (i || dn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, An(o) && o.class && (e._ripple.class = o.class), i && !t) {
    if (a.stop)
      return e.addEventListener("touchstart", Fl, { passive: !0 }), void e.addEventListener("mousedown", Fl);
    e.addEventListener("touchstart", gt, { passive: !0 }), e.addEventListener("touchend", Se, { passive: !0 }), e.addEventListener("touchmove", Io, { passive: !0 }), e.addEventListener("touchcancel", Se), e.addEventListener("mousedown", gt), e.addEventListener("mouseup", Se), e.addEventListener("mouseleave", Se), e.addEventListener("keydown", _o), e.addEventListener("keyup", Oo), e.addEventListener("blur", $o), e.addEventListener("dragstart", Se, { passive: !0 });
  } else
    !i && t && Ao(e);
}
function Ao(e) {
  e.removeEventListener("mousedown", gt), e.removeEventListener("touchstart", gt), e.removeEventListener("touchend", Se), e.removeEventListener("touchmove", Io), e.removeEventListener("touchcancel", Se), e.removeEventListener("mouseup", Se), e.removeEventListener("mouseleave", Se), e.removeEventListener("keydown", _o), e.removeEventListener("keyup", Oo), e.removeEventListener("dragstart", Se), e.removeEventListener("blur", $o);
}
const Sn = { mounted: function(e, n) {
  Ll(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ao(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Ll(e, n, Bo(n.oldValue));
} }, Ha = W({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: ho }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ie, appendIcon: ie, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Pt(), ...ae(), ...Je(), ...Ft(), ...Mt(), ...mo(), ...wo(), ...Co(), ...Ra(), ...Ye(), ...ul(), ...Nt(), ...Be({ tag: "button" }), ...me(), ...lt({ variant: "elevated" }) }, "VBtn"), Mn = X()({ name: "VBtn", directives: { Ripple: Sn }, props: Ha(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o } = n;
  const { themeClasses: a } = we(e), { borderClasses: i } = Dt(e), { colorClasses: r, colorStyles: l, variantClasses: u } = bn(e), { densityClasses: p } = Ze(e), { dimensionStyles: m } = Lt(e), { elevationClasses: d } = Wt(e), { loaderClasses: f } = rl(e), { locationStyles: g } = xo(e), { positionClasses: y } = function(b) {
    let O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
    return { positionClasses: v(() => b.position ? `${O}--${b.position}` : void 0) };
  }(e), { roundedClasses: x } = Xe(e), { sizeClasses: h, sizeStyles: B } = Rt(e), T = go(e, e.symbol, !1), I = sl(e, t), P = v(() => {
    var b;
    return e.active !== void 0 ? e.active : I.isLink.value ? (b = I.isActive) == null ? void 0 : b.value : T == null ? void 0 : T.isSelected.value;
  }), D = v(() => (T == null ? void 0 : T.disabled.value) || e.disabled), $ = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = v(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function S(b) {
    var O;
    D.value || ((O = I.navigate) == null || O.call(I, b), T == null || T.toggle());
  }
  return function(b, O) {
    U(() => {
      var w;
      return (w = b.isActive) == null ? void 0 : w.value;
    }, (w) => {
      b.isLink.value && w && O && ge(() => {
        O(!0);
      });
    }, { immediate: !0 });
  }(I, T == null ? void 0 : T.select), Q(() => {
    var _, L;
    const b = I.isLink.value ? "a" : e.tag, O = !(!e.prependIcon && !o.prepend), w = !(!e.appendIcon && !o.append), A = !(!e.icon || e.icon === !0), C = (T == null ? void 0 : T.isSelected.value) && (!I.isLink.value || ((_ = I.isActive) == null ? void 0 : _.value)) || !T || ((L = I.isActive) == null ? void 0 : L.value);
    return fe(c(b, { type: b === "a" ? void 0 : "button", class: ["v-btn", T == null ? void 0 : T.selectedClass.value, { "v-btn--active": P.value, "v-btn--block": e.block, "v-btn--disabled": D.value, "v-btn--elevated": $.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, a.value, i.value, C ? r.value : void 0, p.value, d.value, f.value, y.value, x.value, h.value, u.value, e.class], style: [C ? l.value : void 0, m.value, g.value, B.value, e.style], disabled: D.value || void 0, href: I.href.value, onClick: S, value: k.value }, { default: () => {
      var z;
      return [hn(!0, "v-btn"), !e.icon && O && c("span", { key: "prepend", class: "v-btn__prepend" }, [o.prepend ? c(ke, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, o.prepend) : c(ue, { key: "prepend-icon", icon: e.prependIcon }, null)]), c("span", { class: "v-btn__content", "data-no-activator": "" }, [!o.default && A ? c(ue, { key: "content-icon", icon: e.icon }, null) : c(ke, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var E;
        return [((E = o.default) == null ? void 0 : E.call(o)) ?? e.text];
      } })]), !e.icon && w && c("span", { key: "append", class: "v-btn__append" }, [o.append ? c(ke, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, o.append) : c(ue, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && c("span", { key: "loader", class: "v-btn__loader" }, [((z = o.loader) == null ? void 0 : z.call(o)) ?? c(So, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[De("ripple"), !D.value && e.ripple, null]]);
  }), {};
} }), qa = W({ text: String, clickable: Boolean, ...ae(), ...me() }, "VLabel"), To = X()({ name: "VLabel", props: qa(), setup(e, n) {
  let { slots: t } = n;
  return Q(() => {
    var o;
    return c("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (o = t.default) == null ? void 0 : o.call(t)]);
  }), {};
} }), Eo = Symbol.for("vuetify:selection-control-group"), Fo = W({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ie, trueIcon: ie, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: ct }, ...ae(), ...Je(), ...me() }, "SelectionControlGroup"), Ua = W({ ...Fo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
X()({ name: "VSelectionControlGroup", props: Ua(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const o = de(e, "modelValue"), a = Ae(), i = v(() => e.id || `v-selection-control-group-${a}`), r = v(() => e.name || i.value), l = /* @__PURE__ */ new Set();
  return Te(Eo, { modelValue: o, forceUpdate: () => {
    l.forEach((u) => u());
  }, onForceUpdate: (u) => {
    l.add(u), be(() => {
      l.delete(u);
    });
  } }), dt({ [e.defaultsTarget]: { color: Y(e, "color"), disabled: Y(e, "disabled"), density: Y(e, "density"), error: Y(e, "error"), inline: Y(e, "inline"), modelValue: o, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(o.value)), name: r, falseIcon: Y(e, "falseIcon"), trueIcon: Y(e, "trueIcon"), readonly: Y(e, "readonly"), ripple: Y(e, "ripple"), type: Y(e, "type"), valueComparator: Y(e, "valueComparator") } }), Q(() => {
    var u;
    return c("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(u = t.default) == null ? void 0 : u.call(t)]);
  }), {};
} });
const cl = W({ label: String, trueValue: null, falseValue: null, value: null, ...ae(), ...Fo() }, "VSelectionControl"), Wn = X()({ name: "VSelectionControl", directives: { Ripple: Sn }, inheritAttrs: !1, props: cl(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o } = n;
  const { group: a, densityClasses: i, icon: r, model: l, textColorClasses: u, textColorStyles: p, trueValue: m } = function(I) {
    const P = re(Eo, void 0), { densityClasses: D } = Ze(I), $ = de(I, "modelValue"), k = v(() => I.trueValue !== void 0 ? I.trueValue : I.value === void 0 || I.value), S = v(() => I.falseValue !== void 0 && I.falseValue), b = v(() => !!I.multiple || I.multiple == null && Array.isArray($.value)), O = v({ get() {
      const _ = P ? P.modelValue.value : $.value;
      return b.value ? _.some((L) => I.valueComparator(L, k.value)) : I.valueComparator(_, k.value);
    }, set(_) {
      if (I.readonly)
        return;
      const L = _ ? k.value : S.value;
      let z = L;
      b.value && (z = _ ? [...He($.value), L] : He($.value).filter((E) => !I.valueComparator(E, k.value))), P ? P.modelValue.value = z : $.value = z;
    } }), { textColorClasses: w, textColorStyles: A } = Me(v(() => !O.value || I.error || I.disabled ? void 0 : I.color)), C = v(() => O.value ? I.trueIcon : I.falseIcon);
    return { group: P, densityClasses: D, trueValue: k, falseValue: S, model: O, textColorClasses: w, textColorStyles: A, icon: C };
  }(e), d = Ae(), f = v(() => e.id || `input-${d}`), g = oe(!1), y = oe(!1), x = j();
  function h(I) {
    g.value = !0, (!zn || zn && I.target.matches(":focus-visible")) && (y.value = !0);
  }
  function B() {
    g.value = !1, y.value = !1;
  }
  function T(I) {
    e.readonly && a && ge(() => a.forceUpdate()), l.value = I.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    x.value && (x.value.checked = l.value);
  }), Q(() => {
    var $, k;
    const I = o.label ? o.label({ label: e.label, props: { for: f.value } }) : e.label, [P, D] = Tt(t);
    return c("div", G({ class: ["v-selection-control", { "v-selection-control--dirty": l.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": g.value, "v-selection-control--focus-visible": y.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, P, { style: e.style }), [c("div", { class: ["v-selection-control__wrapper", u.value], style: p.value }, [($ = o.default) == null ? void 0 : $.call(o), fe(c("div", { class: ["v-selection-control__input"] }, [r.value && c(ue, { key: "icon", icon: r.value }, null), c("input", G({ ref: x, checked: l.value, disabled: e.disabled, id: f.value, onBlur: B, onFocus: h, onInput: T, "aria-disabled": e.readonly, type: e.type, value: m.value, name: e.name, "aria-checked": e.type === "checkbox" ? l.value : void 0 }, D), null), (k = o.input) == null ? void 0 : k.call(o, { model: l, textColorClasses: u, textColorStyles: p, props: { onFocus: h, onBlur: B, id: f.value } })]), [[De("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), I && c(To, { for: f.value, clickable: !0 }, { default: () => [I] })]);
  }), { isFocused: g, input: x };
} }), Lo = W({ indeterminate: Boolean, indeterminateIcon: { type: ie, default: "$checkboxIndeterminate" }, ...cl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Nn = X()({ name: "VCheckboxBtn", props: Lo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const o = de(e, "indeterminate"), a = de(e, "modelValue");
  function i(u) {
    o.value && (o.value = !1);
  }
  const r = v(() => o.value ? e.indeterminateIcon : e.falseIcon), l = v(() => o.value ? e.indeterminateIcon : e.trueIcon);
  return Q(() => c(Wn, G(e, { modelValue: a.value, "onUpdate:modelValue": [(u) => a.value = u, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: r.value, trueIcon: l.value, "aria-checked": o.value ? "mixed" : void 0 }), t)), {};
} });
function zo(e) {
  const { t: n } = ol();
  return { InputIcon: function(t) {
    let { name: o } = t;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[o], i = e[`onClick:${o}`], r = i && a ? n(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return c(ue, { icon: e[`${o}Icon`], "aria-label": r, onClick: i }, null);
  } };
}
const Ga = W({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ae(), ...zt({ transition: { component: uo, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ka = X()({ name: "VMessages", props: Ga(), setup(e, n) {
  let { slots: t } = n;
  const o = v(() => He(e.messages)), { textColorClasses: a, textColorStyles: i } = Me(v(() => e.color));
  return Q(() => c(Re, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && o.value.map((r, l) => c("div", { class: "v-messages__message", key: `${l}-${o.value}` }, [t.message ? t.message({ message: r }) : r]))] })), {};
} }), Po = W({ focused: Boolean, "onUpdate:focused": Ee() }, "focus");
function jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We();
  const t = de(e, "focused");
  return { focusClasses: v(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const Ya = Symbol.for("vuetify:form");
function Do() {
  return re(Ya, null);
}
const Xa = W({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Po() }, "validation"), Ht = W({ id: String, appendIcon: ie, centerAffix: { type: Boolean, default: !0 }, prependIcon: ie, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ee(), "onClick:append": Ee(), ...ae(), ...Je(), ...Xa() }, "VInput"), Ue = X()({ name: "VInput", props: { ...Ht() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o, emit: a } = n;
  const { densityClasses: i } = Ze(e), { rtlClasses: r } = Et(), { InputIcon: l } = zo(e), u = Ae(), p = v(() => e.id || `input-${u}`), m = v(() => `${p.value}-messages`), { errorMessages: d, isDirty: f, isDisabled: g, isReadonly: y, isPristine: x, isValid: h, isValidating: B, reset: T, resetValidation: I, validate: P, validationClasses: D } = function(S) {
    let b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We(), O = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ae();
    const w = de(S, "modelValue"), A = v(() => S.validationValue === void 0 ? w.value : S.validationValue), C = Do(), _ = j([]), L = oe(!0), z = v(() => !(!He(w.value === "" ? null : w.value).length && !He(A.value === "" ? null : A.value).length)), E = v(() => !!(S.disabled ?? (C == null ? void 0 : C.isDisabled.value))), V = v(() => !!(S.readonly ?? (C == null ? void 0 : C.isReadonly.value))), M = v(() => S.errorMessages.length ? He(S.errorMessages).slice(0, Math.max(0, +S.maxErrors)) : _.value), N = v(() => {
      let J = (S.validateOn ?? (C == null ? void 0 : C.validateOn.value)) || "input";
      J === "lazy" && (J = "input lazy");
      const se = new Set((J == null ? void 0 : J.split(" ")) ?? []);
      return { blur: se.has("blur") || se.has("input"), input: se.has("input"), submit: se.has("submit"), lazy: se.has("lazy") };
    }), q = v(() => !S.error && !S.errorMessages.length && (!S.rules.length || (L.value ? !_.value.length && !N.value.lazy || null : !_.value.length))), F = oe(!1), H = v(() => ({ [`${b}--error`]: q.value === !1, [`${b}--dirty`]: z.value, [`${b}--disabled`]: E.value, [`${b}--readonly`]: V.value })), R = v(() => S.name ?? s(O));
    function K() {
      w.value = null, ge(te);
    }
    function te() {
      L.value = !0, N.value.lazy ? _.value = [] : le(!0);
    }
    async function le() {
      let J = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const se = [];
      F.value = !0;
      for (const Ie of S.rules) {
        if (se.length >= +(S.maxErrors ?? 1))
          break;
        const wn = typeof Ie == "function" ? Ie : () => Ie, ze = await wn(A.value);
        ze !== !0 && (typeof ze == "string" ? se.push(ze) : console.warn(`${ze} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return _.value = se, F.value = !1, L.value = J, _.value;
    }
    return Yl(() => {
      C == null || C.register({ id: R.value, validate: le, reset: K, resetValidation: te });
    }), Ke(() => {
      C == null || C.unregister(R.value);
    }), bt(async () => {
      N.value.lazy || await le(!0), C == null || C.update(R.value, q.value, M.value);
    }), et(() => N.value.input, () => {
      U(A, () => {
        if (A.value != null)
          le();
        else if (S.focused) {
          const J = U(() => S.focused, (se) => {
            se || le(), J();
          });
        }
      });
    }), et(() => N.value.blur, () => {
      U(() => S.focused, (J) => {
        J || le();
      });
    }), U(q, () => {
      C == null || C.update(R.value, q.value, M.value);
    }), { errorMessages: M, isDirty: z, isDisabled: E, isReadonly: V, isPristine: L, isValid: q, isValidating: F, reset: K, resetValidation: te, validate: le, validationClasses: H };
  }(e, "v-input", p), $ = v(() => ({ id: p, messagesId: m, isDirty: f, isDisabled: g, isReadonly: y, isPristine: x, isValid: h, isValidating: B, reset: T, resetValidation: I, validate: P })), k = v(() => {
    var S;
    return (S = e.errorMessages) != null && S.length || !x.value && d.value.length ? d.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return Q(() => {
    var A, C, _, L;
    const S = !(!o.prepend && !e.prependIcon), b = !(!o.append && !e.appendIcon), O = k.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && (O || !!o.details);
    return c("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, i.value, r.value, D.value, e.class], style: e.style }, [S && c("div", { key: "prepend", class: "v-input__prepend" }, [(A = o.prepend) == null ? void 0 : A.call(o, $.value), e.prependIcon && c(l, { key: "prepend-icon", name: "prepend" }, null)]), o.default && c("div", { class: "v-input__control" }, [(C = o.default) == null ? void 0 : C.call(o, $.value)]), b && c("div", { key: "append", class: "v-input__append" }, [e.appendIcon && c(l, { key: "append-icon", name: "append" }, null), (_ = o.append) == null ? void 0 : _.call(o, $.value)]), w && c("div", { class: "v-input__details" }, [c(Ka, { id: m.value, active: O, messages: k.value }, { message: o.message }), (L = o.details) == null ? void 0 : L.call(o, $.value)])]);
  }), { reset: T, resetValidation: I, validate: P };
} }), Ja = W({ ...Ht(), ...Jn(Lo(), ["inline"]) }, "VCheckbox"), Za = X()({ name: "VCheckbox", inheritAttrs: !1, props: Ja(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o } = n;
  const a = de(e, "modelValue"), { isFocused: i, focus: r, blur: l } = jt(e), u = Ae(), p = v(() => e.id || `checkbox-${u}`);
  return Q(() => {
    const [m, d] = Tt(t), [f, g] = Ue.filterProps(e), [y, x] = Nn.filterProps(e);
    return c(Ue, G({ class: ["v-checkbox", e.class] }, m, f, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, id: p.value, focused: i.value, style: e.style }), { ...o, default: (h) => {
      let { id: B, messagesId: T, isDisabled: I, isReadonly: P } = h;
      return c(Nn, G(y, { id: B.value, "aria-describedby": T.value, disabled: I.value, readonly: P.value }, d, { modelValue: a.value, "onUpdate:modelValue": (D) => a.value = D, onFocus: r, onBlur: l }), o);
    } });
  }), {};
} }), Qa = W({ start: Boolean, end: Boolean, icon: ie, image: String, ...ae(), ...Je(), ...Ye(), ...Nt(), ...Be(), ...me(), ...lt({ variant: "flat" }) }, "VAvatar"), vn = X()({ name: "VAvatar", props: Qa(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: o } = we(e), { colorClasses: a, colorStyles: i, variantClasses: r } = bn(e), { densityClasses: l } = Ze(e), { roundedClasses: u } = Xe(e), { sizeClasses: p, sizeStyles: m } = Rt(e);
  return Q(() => c(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, o.value, a.value, l.value, u.value, p.value, r.value, e.class], style: [i.value, m.value, e.style] }, { default: () => {
    var d;
    return [e.image ? c($a, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? c(ue, { key: "icon", icon: e.icon }, null) : (d = t.default) == null ? void 0 : d.call(t), hn(!1, "v-avatar")];
  } })), {};
} }), Mo = Symbol.for("vuetify:v-chip-group"), ei = W({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: ct }, ...ae(), ...fo({ selectedClass: "v-chip--selected" }), ...Be(), ...me(), ...lt({ variant: "tonal" }) }, "VChipGroup");
X()({ name: "VChipGroup", props: ei(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: o } = we(e), { isSelected: a, select: i, next: r, prev: l, selected: u } = yo(e, Mo);
  return dt({ VChip: { color: Y(e, "color"), disabled: Y(e, "disabled"), filter: Y(e, "filter"), variant: Y(e, "variant") } }), Q(() => c(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, o.value, e.class], style: e.style }, { default: () => {
    var p;
    return [(p = t.default) == null ? void 0 : p.call(t, { isSelected: a, select: i, next: r, prev: l, selected: u.value })];
  } })), {};
} });
const ti = W({ activeClass: String, appendAvatar: String, appendIcon: ie, closable: Boolean, closeIcon: { type: ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ee(), onClickOnce: Ee(), ...Pt(), ...ae(), ...Je(), ...Mt(), ...mo(), ...Ye(), ...ul(), ...Nt(), ...Be({ tag: "span" }), ...me(), ...lt({ variant: "tonal" }) }, "VChip"), ni = X()({ name: "VChip", directives: { Ripple: Sn }, props: ti(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: o, slots: a } = n;
  const { t: i } = ol(), { borderClasses: r } = Dt(e), { colorClasses: l, colorStyles: u, variantClasses: p } = bn(e), { densityClasses: m } = Ze(e), { elevationClasses: d } = Wt(e), { roundedClasses: f } = Xe(e), { sizeClasses: g } = Rt(e), { themeClasses: y } = we(e), x = de(e, "modelValue"), h = go(e, Mo, !1), B = sl(e, t), T = v(() => e.link !== !1 && B.isLink.value), I = v(() => !e.disabled && e.link !== !1 && (!!h || e.link || B.isClickable.value)), P = v(() => ({ "aria-label": i(e.closeLabel), onClick(k) {
    x.value = !1, o("click:close", k);
  } }));
  function D(k) {
    var S;
    o("click", k), I.value && ((S = B.navigate) == null || S.call(B, k), h == null || h.toggle());
  }
  function $(k) {
    k.key !== "Enter" && k.key !== " " || (k.preventDefault(), D(k));
  }
  return () => {
    const k = B.isLink.value ? "a" : e.tag, S = !(!e.appendIcon && !e.appendAvatar), b = !(!S && !a.append), O = !(!a.close && !e.closable), w = !(!a.filter && !e.filter) && h, A = !(!e.prependIcon && !e.prependAvatar), C = !(!A && !a.prepend), _ = !h || h.isSelected.value;
    return x.value && fe(c(k, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": I.value, "v-chip--filter": w, "v-chip--pill": e.pill }, y.value, r.value, _ ? l.value : void 0, m.value, d.value, f.value, g.value, p.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [_ ? u.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: B.href.value, tabindex: I.value ? 0 : void 0, onClick: D, onKeydown: I.value && !T.value && $ }, { default: () => {
      var L;
      return [hn(I.value, "v-chip"), w && c(co, { key: "filter" }, { default: () => [fe(c("div", { class: "v-chip__filter" }, [a.filter ? fe(c(ke, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[De("slot"), a.filter, "default"]]) : c(ue, { key: "filter-icon", icon: e.filterIcon }, null)]), [[rt, h.isSelected.value]])] }), C && c("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? c(ke, { key: "prepend-defaults", disabled: !A, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : c(pe, null, [e.prependIcon && c(ue, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && c(vn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), c("div", { class: "v-chip__content" }, [((L = a.default) == null ? void 0 : L.call(a, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), b && c("div", { key: "append", class: "v-chip__append" }, [a.append ? c(ke, { key: "append-defaults", disabled: !S, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : c(pe, null, [e.appendIcon && c(ue, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && c(vn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), O && c("div", G({ key: "close", class: "v-chip__close" }, P.value), [a.close ? c(ke, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : c(ue, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[De("ripple"), I.value && e.ripple, null]]);
  };
} }), Rn = Symbol.for("vuetify:list");
function Wo() {
  const e = re(Rn, { hasPrepend: oe(!1), updateHasPrepend: () => null }), n = { hasPrepend: oe(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return Te(Rn, n), e;
}
function No() {
  return re(Rn, null);
}
const li = { open: (e) => {
  let { id: n, value: t, opened: o, parents: a } = e;
  if (t) {
    const i = /* @__PURE__ */ new Set();
    i.add(n);
    let r = a.get(n);
    for (; r != null; )
      i.add(r), r = a.get(r);
    return i;
  }
  return o.delete(n), o;
}, select: () => null }, Ro = { open: (e) => {
  let { id: n, value: t, opened: o, parents: a } = e;
  if (t) {
    let i = a.get(n);
    for (o.add(n); i != null && i !== n; )
      o.add(i), i = a.get(i);
    return o;
  }
  return o.delete(n), o;
}, select: () => null }, oi = { open: Ro.open, select: (e) => {
  let { id: n, value: t, opened: o, parents: a } = e;
  if (!t)
    return o;
  const i = [];
  let r = a.get(n);
  for (; r != null; )
    i.push(r), r = a.get(r);
  return new Set(i);
} }, jn = (e) => {
  const n = { select: (t) => {
    let { id: o, value: a, selected: i } = t;
    if (o = je(o), e && !a) {
      const r = Array.from(i.entries()).reduce((l, u) => {
        let [p, m] = u;
        return m === "on" ? [...l, p] : l;
      }, []);
      if (r.length === 1 && r[0] === o)
        return i;
    }
    return i.set(o, a ? "on" : "off"), i;
  }, in: (t, o, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const r of t || [])
      i = n.select({ id: r, value: !0, selected: new Map(i), children: o, parents: a });
    return i;
  }, out: (t) => {
    const o = [];
    for (const [a, i] of t.entries())
      i === "on" && o.push(a);
    return o;
  } };
  return n;
}, zl = (e) => {
  const n = jn(e);
  return { select: (t) => {
    let { selected: o, id: a, ...i } = t;
    a = je(a);
    const r = o.has(a) ? /* @__PURE__ */ new Map([[a, o.get(a)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...i, id: a, selected: r });
  }, in: (t, o, a) => {
    let i = /* @__PURE__ */ new Map();
    return t != null && t.length && (i = n.in(t.slice(0, 1), o, a)), i;
  }, out: (t, o, a) => n.out(t, o, a) };
}, ht = Symbol.for("vuetify:nested"), jo = { id: oe(), root: { register: () => null, unregister: () => null, parents: j(/* @__PURE__ */ new Map()), children: j(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: j(/* @__PURE__ */ new Set()), selected: j(/* @__PURE__ */ new Map()), selectedValues: j([]) } }, ai = W({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ii = (e) => {
  let n = !1;
  const t = j(/* @__PURE__ */ new Map()), o = j(/* @__PURE__ */ new Map()), a = de(e, "opened", e.opened, (d) => new Set(d), (d) => [...d.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((d) => {
          const f = zl(d);
          return { select: (g) => {
            let { id: y, selected: x, children: h, ...B } = g;
            return y = je(y), h.has(y) ? x : f.select({ id: y, selected: x, children: h, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((d) => {
          const f = jn(d);
          return { select: (g) => {
            let { id: y, selected: x, children: h, ...B } = g;
            return y = je(y), h.has(y) ? x : f.select({ id: y, selected: x, children: h, ...B });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return jn(e.mandatory);
      case "single-independent":
        return zl(e.mandatory);
      default:
        return ((d) => {
          const f = { select: (g) => {
            let { id: y, value: x, selected: h, children: B, parents: T } = g;
            y = je(y);
            const I = new Map(h), P = [y];
            for (; P.length; ) {
              const $ = P.shift();
              h.set($, x ? "on" : "off"), B.has($) && P.push(...B.get($));
            }
            let D = T.get(y);
            for (; D; ) {
              const $ = B.get(D), k = $.every((b) => h.get(b) === "on"), S = $.every((b) => !h.has(b) || h.get(b) === "off");
              h.set(D, k ? "on" : S ? "off" : "indeterminate"), D = T.get(D);
            }
            return d && !x && Array.from(h.entries()).reduce((k, S) => {
              let [b, O] = S;
              return O === "on" ? [...k, b] : k;
            }, []).length === 0 ? I : h;
          }, in: (g, y, x) => {
            let h = /* @__PURE__ */ new Map();
            for (const B of g || [])
              h = f.select({ id: B, value: !0, selected: new Map(h), children: y, parents: x });
            return h;
          }, out: (g, y) => {
            const x = [];
            for (const [h, B] of g.entries())
              B !== "on" || y.has(h) || x.push(h);
            return x;
          } };
          return f;
        })(e.mandatory);
    }
  }), r = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return oi;
      case "single":
        return li;
      default:
        return Ro;
    }
  }), l = de(e, "selected", e.selected, (d) => i.value.in(d, t.value, o.value), (d) => i.value.out(d, t.value, o.value));
  function u(d) {
    const f = [];
    let g = d;
    for (; g != null; )
      f.unshift(g), g = o.value.get(g);
    return f;
  }
  Ke(() => {
    n = !0;
  });
  const p = ye("nested"), m = { id: oe(), root: { opened: a, selected: l, selectedValues: v(() => {
    const d = [];
    for (const [f, g] of l.value.entries())
      g === "on" && d.push(f);
    return d;
  }), register: (d, f, g) => {
    f && d !== f && o.value.set(d, f), g && t.value.set(d, []), f != null && t.value.set(f, [...t.value.get(f) || [], d]);
  }, unregister: (d) => {
    if (n)
      return;
    t.value.delete(d);
    const f = o.value.get(d);
    if (f) {
      const g = t.value.get(f) ?? [];
      t.value.set(f, g.filter((y) => y !== d));
    }
    o.value.delete(d), a.value.delete(d);
  }, open: (d, f, g) => {
    p.emit("click:open", { id: d, value: f, path: u(d), event: g });
    const y = r.value.open({ id: d, value: f, opened: new Set(a.value), children: t.value, parents: o.value, event: g });
    y && (a.value = y);
  }, openOnSelect: (d, f, g) => {
    const y = r.value.select({ id: d, value: f, selected: new Map(l.value), opened: new Set(a.value), children: t.value, parents: o.value, event: g });
    y && (a.value = y);
  }, select: (d, f, g) => {
    p.emit("click:select", { id: d, value: f, path: u(d), event: g });
    const y = i.value.select({ id: d, value: f, selected: new Map(l.value), children: t.value, parents: o.value, event: g });
    y && (l.value = y), m.root.openOnSelect(d, f, g);
  }, children: t, parents: o } };
  return Te(ht, m), m.root;
}, Ho = (e, n) => {
  const t = re(ht, jo), o = Symbol(Ae()), a = v(() => e.value !== void 0 ? e.value : o), i = { ...t, id: a, open: (r, l) => t.root.open(a.value, r, l), openOnSelect: (r, l) => t.root.openOnSelect(a.value, r, l), isOpen: v(() => t.root.opened.value.has(a.value)), parent: v(() => t.root.parents.value.get(a.value)), select: (r, l) => t.root.select(a.value, r, l), isSelected: v(() => t.root.selected.value.get(je(a.value)) === "on"), isIndeterminate: v(() => t.root.selected.value.get(a.value) === "indeterminate"), isLeaf: v(() => !t.root.children.value.get(a.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), Ke(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && Te(ht, i), i;
}, ri = ft({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const o = re(ht, jo);
    Te(ht, { ...o, isGroupActivator: !0 });
  })(), () => {
    var o;
    return (o = t.default) == null ? void 0 : o.call(t);
  };
} }), si = W({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ie, default: "$collapse" }, expandIcon: { type: ie, default: "$expand" }, prependIcon: ie, appendIcon: ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ae(), ...Be() }, "VListGroup"), Pl = X()({ name: "VListGroup", props: si(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: o, open: a, id: i } = Ho(Y(e, "value"), !0), r = v(() => `v-list-group--id-${String(i.value)}`), l = No(), { isBooted: u } = function() {
    const g = oe(!1);
    return bt(() => {
      window.requestAnimationFrame(() => {
        g.value = !0;
      });
    }), { ssrBootStyles: v(() => g.value ? void 0 : { transition: "none !important" }), isBooted: Yn(g) };
  }();
  function p(g) {
    a(!o.value, g);
  }
  const m = v(() => ({ onClick: p, class: "v-list-group__header", id: r.value })), d = v(() => o.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: o.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && d.value, appendIcon: e.appendIcon || !e.subgroup && d.value, title: e.title, value: e.value } }));
  return Q(() => c(e.tag, { class: ["v-list-group", { "v-list-group--prepend": l == null ? void 0 : l.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": o.value }, e.class], style: e.style }, { default: () => [t.activator && c(ke, { defaults: f.value }, { default: () => [c(ri, null, { default: () => [t.activator({ props: m.value, isOpen: o.value })] })] }), c(Re, { transition: { component: Ia }, disabled: !u.value }, { default: () => {
    var g;
    return [fe(c("div", { class: "v-list-group__items", role: "group", "aria-labelledby": r.value }, [(g = t.default) == null ? void 0 : g.call(t)]), [[rt, o.value]])];
  } })] })), {};
} }), ui = no("v-list-item-subtitle"), ci = no("v-list-item-title"), di = W({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ie, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ee(), onClickOnce: Ee(), ...Pt(), ...ae(), ...Je(), ...Ft(), ...Mt(), ...Ye(), ...ul(), ...Be(), ...me(), ...lt({ variant: "text" }) }, "VListItem"), pn = X()({ name: "VListItem", directives: { Ripple: Sn }, props: di(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o, emit: a } = n;
  const i = sl(e, t), r = v(() => e.value === void 0 ? i.href.value : e.value), { select: l, isSelected: u, isIndeterminate: p, isGroupActivator: m, root: d, parent: f, openOnSelect: g } = Ho(r, !1), y = No(), x = v(() => {
    var V;
    return e.active !== !1 && (e.active || ((V = i.isActive) == null ? void 0 : V.value) || u.value);
  }), h = v(() => e.link !== !1 && i.isLink.value), B = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!y)), T = v(() => e.rounded || e.nav), I = v(() => e.color ?? e.activeColor), P = v(() => ({ color: x.value ? I.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  U(() => {
    var V;
    return (V = i.isActive) == null ? void 0 : V.value;
  }, (V) => {
    V && f.value != null && d.open(f.value, !0), V && g(V);
  }, { immediate: !0 });
  const { themeClasses: D } = we(e), { borderClasses: $ } = Dt(e), { colorClasses: k, colorStyles: S, variantClasses: b } = bn(P), { densityClasses: O } = Ze(e), { dimensionStyles: w } = Lt(e), { elevationClasses: A } = Wt(e), { roundedClasses: C } = Xe(T), _ = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), L = v(() => ({ isActive: x.value, select: l, isSelected: u.value, isIndeterminate: p.value }));
  function z(V) {
    var M;
    a("click", V), !m && B.value && ((M = i.navigate) == null || M.call(i, V), e.value != null && l(!u.value, V));
  }
  function E(V) {
    V.key !== "Enter" && V.key !== " " || (V.preventDefault(), z(V));
  }
  return Q(() => {
    const V = h.value ? "a" : e.tag, M = o.title || e.title, N = o.subtitle || e.subtitle, q = !(!e.appendAvatar && !e.appendIcon), F = !(!q && !o.append), H = !(!e.prependAvatar && !e.prependIcon), R = !(!H && !o.prepend);
    var K, te;
    return y == null || y.updateHasPrepend(R), e.activeColor && (K = "active-color", te = ["color", "base-color"], te = Array.isArray(te) ? te.slice(0, -1).map((le) => `'${le}'`).join(", ") + ` or '${te.at(-1)}'` : `'${te}'`, mn(`[Vuetify UPGRADE] '${K}' is deprecated, use ${te} instead.`)), fe(c(V, { class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": B.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !R && (y == null ? void 0 : y.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && x.value }, D.value, $.value, k.value, O.value, A.value, _.value, C.value, b.value, e.class], style: [S.value, w.value, e.style], href: i.href.value, tabindex: B.value ? y ? -2 : 0 : void 0, onClick: z, onKeydown: B.value && !h.value && E }, { default: () => {
      var le;
      return [hn(B.value || x.value, "v-list-item"), R && c("div", { key: "prepend", class: "v-list-item__prepend" }, [o.prepend ? c(ke, { key: "prepend-defaults", disabled: !H, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var J;
        return [(J = o.prepend) == null ? void 0 : J.call(o, L.value)];
      } }) : c(pe, null, [e.prependAvatar && c(vn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && c(ue, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), c("div", { class: "v-list-item__content", "data-no-activator": "" }, [M && c(ci, { key: "title" }, { default: () => {
        var J;
        return [((J = o.title) == null ? void 0 : J.call(o, { title: e.title })) ?? e.title];
      } }), N && c(ui, { key: "subtitle" }, { default: () => {
        var J;
        return [((J = o.subtitle) == null ? void 0 : J.call(o, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (le = o.default) == null ? void 0 : le.call(o, L.value)]), F && c("div", { key: "append", class: "v-list-item__append" }, [o.append ? c(ke, { key: "append-defaults", disabled: !q, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var J;
        return [(J = o.append) == null ? void 0 : J.call(o, L.value)];
      } }) : c(pe, null, [e.appendIcon && c(ue, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && c(vn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[De("ripple"), B.value && e.ripple]]);
  }), {};
} }), vi = W({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ae(), ...Be() }, "VListSubheader"), pi = X()({ name: "VListSubheader", props: vi(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: o, textColorStyles: a } = Me(Y(e, "color"));
  return Q(() => {
    const i = !(!t.default && !e.title);
    return c(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, o.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var r;
      return [i && c("div", { class: "v-list-subheader__text" }, [((r = t.default) == null ? void 0 : r.call(t)) ?? e.title])];
    } });
  }), {};
} }), fi = W({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ae(), ...me() }, "VDivider"), mi = X()({ name: "VDivider", props: fi(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: o } = we(e), { textColorClasses: a, textColorStyles: i } = Me(Y(e, "color")), r = v(() => {
    const l = {};
    return e.length && (l[e.vertical ? "maxHeight" : "maxWidth"] = Z(e.length)), e.thickness && (l[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Z(e.thickness)), l;
  });
  return Q(() => c("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, o.value, a.value, e.class], style: [r.value, i.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), gi = W({ items: Array }, "VListChildren"), qo = X()({ name: "VListChildren", props: gi(), setup(e, n) {
  let { slots: t } = n;
  return Wo(), () => {
    var o, a;
    return ((o = t.default) == null ? void 0 : o.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var g, y;
      let { children: r, props: l, type: u, raw: p } = i;
      if (u === "divider")
        return ((g = t.divider) == null ? void 0 : g.call(t, { props: l })) ?? c(mi, l, null);
      if (u === "subheader")
        return ((y = t.subheader) == null ? void 0 : y.call(t, { props: l })) ?? c(pi, l, null);
      const m = { subtitle: t.subtitle ? (x) => {
        var h;
        return (h = t.subtitle) == null ? void 0 : h.call(t, { ...x, item: p });
      } : void 0, prepend: t.prepend ? (x) => {
        var h;
        return (h = t.prepend) == null ? void 0 : h.call(t, { ...x, item: p });
      } : void 0, append: t.append ? (x) => {
        var h;
        return (h = t.append) == null ? void 0 : h.call(t, { ...x, item: p });
      } : void 0, title: t.title ? (x) => {
        var h;
        return (h = t.title) == null ? void 0 : h.call(t, { ...x, item: p });
      } : void 0 }, [d, f] = Pl.filterProps(l);
      return r ? c(Pl, G({ value: l == null ? void 0 : l.value }, d), { activator: (x) => {
        let { props: h } = x;
        return t.header ? t.header({ props: { ...l, ...h } }) : c(pn, G(l, h), m);
      }, default: () => c(qo, { items: r }, t) }) : t.item ? t.item({ props: l }) : c(pn, l, m);
    }));
  };
} }), Uo = W({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Go(e, n) {
  const t = Pe(n, e.itemTitle, n), o = e.returnObject ? n : Pe(n, e.itemValue, t), a = Pe(n, e.itemChildren), i = { title: t, value: o, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? At(n, ["children"])[1] : n : Pe(n, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? Ko(e, a) : void 0, raw: n };
}
function Ko(e, n) {
  const t = [];
  for (const o of n)
    t.push(Go(e, o));
  return t;
}
function yi(e) {
  return function(n, t) {
    function o(i) {
      return i.filter((r) => r !== null || n.value.some((l) => l.value === null)).map((r) => n.value.find((l) => ct(r, l.value)) ?? t(r));
    }
    function a(i) {
      return i.map((r) => {
        let { value: l } = r;
        return l;
      });
    }
    return { items: n, transformIn: o, transformOut: a };
  }(v(() => Ko(e, e.items)), (n) => Go(e, n));
}
function hi(e, n) {
  const t = Pe(n, e.itemType, "item"), o = function(l) {
    return typeof l == "string" || typeof l == "number" || typeof l == "boolean";
  }(n) ? n : Pe(n, e.itemTitle), a = Pe(n, e.itemValue, void 0), i = Pe(n, e.itemChildren), r = { title: o, value: a, ...e.itemProps === !0 ? At(n, ["children"])[1] : Pe(n, e.itemProps) };
  return { type: t, title: r.title, value: r.value, props: r, children: t === "item" && i ? Yo(e, i) : void 0, raw: n };
}
function Yo(e, n) {
  const t = [];
  for (const o of n)
    t.push(hi(e, o));
  return t;
}
const bi = W({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...ai({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Pt(), ...ae(), ...Je(), ...Ft(), ...Mt(), itemType: { type: String, default: "type" }, ...Uo(), ...Ye(), ...Be(), ...me(), ...lt({ variant: "text" }) }, "VList"), Si = X()({ name: "VList", props: bi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: o } = function(b) {
    return { items: v(() => Yo(b, b.items)) };
  }(e), { themeClasses: a } = we(e), { backgroundColorClasses: i, backgroundColorStyles: r } = mt(Y(e, "bgColor")), { borderClasses: l } = Dt(e), { densityClasses: u } = Ze(e), { dimensionStyles: p } = Lt(e), { elevationClasses: m } = Wt(e), { roundedClasses: d } = Xe(e), { open: f, select: g } = ii(e), y = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), x = Y(e, "activeColor"), h = Y(e, "baseColor"), B = Y(e, "color");
  Wo(), dt({ VListGroup: { activeColor: x, baseColor: h, color: B }, VListItem: { activeClass: Y(e, "activeClass"), activeColor: x, baseColor: h, color: B, density: Y(e, "density"), disabled: Y(e, "disabled"), lines: Y(e, "lines"), nav: Y(e, "nav"), variant: Y(e, "variant") } });
  const T = oe(!1), I = j();
  function P(b) {
    T.value = !0;
  }
  function D(b) {
    T.value = !1;
  }
  function $(b) {
    var O;
    T.value || b.relatedTarget && ((O = I.value) != null && O.contains(b.relatedTarget)) || S();
  }
  function k(b) {
    if (I.value) {
      if (b.key === "ArrowDown")
        S("next");
      else if (b.key === "ArrowUp")
        S("prev");
      else if (b.key === "Home")
        S("first");
      else {
        if (b.key !== "End")
          return;
        S("last");
      }
      b.preventDefault();
    }
  }
  function S(b) {
    if (I.value)
      return rn(I.value, b);
  }
  return Q(() => c(e.tag, { ref: I, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, l.value, u.value, m.value, y.value, d.value, e.class], style: [r.value, p.value, e.style], tabindex: e.disabled || T.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: P, onFocusout: D, onFocus: $, onKeydown: k }, { default: () => [c(qo, { items: o.value }, t)] })), { open: f, select: g, focus: S };
} });
function In(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function Dl(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: o } = e;
    return In({ x: o === "left" ? 0 : o === "center" ? n.width / 2 : o === "right" ? n.width : o, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: o } = e;
    return In({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: o === "top" ? 0 : o === "center" ? n.height / 2 : o === "bottom" ? n.height : o }, n);
  }
  return In({ x: n.width / 2, y: n.height / 2 }, n);
}
const Xo = { static: function() {
}, connected: function(e, n, t) {
  (function(g) {
    for (; g; ) {
      if (window.getComputedStyle(g).position === "fixed")
        return !0;
      g = g.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: o, preferredOrigin: a } = Zn(() => {
    const g = Ln(n.location, e.isRtl.value), y = n.origin === "overlap" ? g : n.origin === "auto" ? kn(g) : Ln(n.origin, e.isRtl.value);
    return g.side === y.side && g.align === Vn(y).align ? { preferredAnchor: Sl(g), preferredOrigin: Sl(y) } : { preferredAnchor: g, preferredOrigin: y };
  }), [i, r, l, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => v(() => {
    const y = parseFloat(n[g]);
    return isNaN(y) ? 1 / 0 : y;
  })), p = v(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const g = n.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let m = !1;
  const d = new ResizeObserver(() => {
    m && f();
  });
  function f() {
    if (m = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => m = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const g = e.activatorEl.value.getBoundingClientRect(), y = function(b, O) {
      const w = Qn(b);
      return O ? w.x += parseFloat(b.style.right || 0) : w.x -= parseFloat(b.style.left || 0), w.y -= parseFloat(b.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), x = un(e.contentEl.value);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (y.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), y.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = x.reduce((b, O) => {
      const w = O.getBoundingClientRect(), A = new it({ x: O === document.documentElement ? 0 : w.x, y: O === document.documentElement ? 0 : w.y, width: O.clientWidth, height: O.clientHeight });
      return b ? new it({ x: Math.max(b.left, A.left), y: Math.max(b.top, A.top), width: Math.min(b.right, A.right) - Math.max(b.left, A.left), height: Math.min(b.bottom, A.bottom) - Math.max(b.top, A.top) }) : A;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let B = { anchor: o.value, origin: a.value };
    function T(b) {
      const O = new it(y), w = Dl(b.anchor, g), A = Dl(b.origin, O);
      let { x: C, y: _ } = (z = A, { x: (L = w).x - z.x, y: L.y - z.y });
      var L, z;
      switch (b.anchor.side) {
        case "top":
          _ -= p.value[0];
          break;
        case "bottom":
          _ += p.value[0];
          break;
        case "left":
          C -= p.value[0];
          break;
        case "right":
          C += p.value[0];
      }
      switch (b.anchor.align) {
        case "top":
          _ -= p.value[1];
          break;
        case "bottom":
          _ += p.value[1];
          break;
        case "left":
          C -= p.value[1];
          break;
        case "right":
          C += p.value[1];
      }
      return O.x += C, O.y += _, O.width = Math.min(O.width, l.value), O.height = Math.min(O.height, u.value), { overflows: xl(O, h), x: C, y: _ };
    }
    let I = 0, P = 0;
    const D = { x: 0, y: 0 }, $ = { x: !1, y: !1 };
    let k = -1;
    for (; ; ) {
      if (k++ > 10) {
        mn("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: b, y: O, overflows: w } = T(B);
      I += b, P += O, y.x += b, y.y += O;
      {
        const A = Cl(B.anchor), C = w.x.before || w.x.after, _ = w.y.before || w.y.after;
        let L = !1;
        if (["x", "y"].forEach((z) => {
          if (z === "x" && C && !$.x || z === "y" && _ && !$.y) {
            const E = { anchor: { ...B.anchor }, origin: { ...B.origin } }, V = z === "x" ? A === "y" ? Vn : kn : A === "y" ? kn : Vn;
            E.anchor = V(E.anchor), E.origin = V(E.origin);
            const { overflows: M } = T(E);
            (M[z].before <= w[z].before && M[z].after <= w[z].after || M[z].before + M[z].after < (w[z].before + w[z].after) / 2) && (B = E, L = $[z] = !0);
          }
        }), L)
          continue;
      }
      w.x.before && (I += w.x.before, y.x += w.x.before), w.x.after && (I -= w.x.after, y.x -= w.x.after), w.y.before && (P += w.y.before, y.y += w.y.before), w.y.after && (P -= w.y.after, y.y -= w.y.after);
      {
        const A = xl(y, h);
        D.x = h.width - A.x.before - A.x.after, D.y = h.height - A.y.before - A.y.after, I += A.x.before, y.x += A.x.before, P += A.y.before, y.y += A.y.before;
      }
      break;
    }
    const S = Cl(B.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${B.anchor.side} ${B.anchor.align}`, transformOrigin: `${B.origin.side} ${B.origin.align}`, top: Z(_n(P)), left: e.isRtl.value ? void 0 : Z(_n(I)), right: e.isRtl.value ? Z(_n(-I)) : void 0, minWidth: Z(S === "y" ? Math.min(i.value, g.width) : i.value), maxWidth: Z(Ml(En(D.x, i.value === 1 / 0 ? 0 : i.value, l.value))), maxHeight: Z(Ml(En(D.y, r.value === 1 / 0 ? 0 : r.value, u.value))) }), { available: D, contentBox: y };
  }
  return U([e.activatorEl, e.contentEl], (g, y) => {
    let [x, h] = g, [B, T] = y;
    B && d.unobserve(B), x && d.observe(x), T && d.unobserve(T), h && d.observe(h);
  }, { immediate: !0 }), be(() => {
    d.disconnect();
  }), U(() => [o.value, a.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => f()), ge(() => {
    const g = f();
    if (!g)
      return;
    const { available: y, contentBox: x } = g;
    x.height > y.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Ci = W({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Xo }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function _n(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Ml(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Hn = !0;
const fn = [];
let Wl = -1;
function qn() {
  cancelAnimationFrame(Wl), Wl = requestAnimationFrame(() => {
    const e = fn.shift();
    e && e(), fn.length ? qn() : Hn = !0;
  });
}
const ln = { none: null, close: function(e) {
  Nl(e.activatorEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var l;
  const t = (l = e.root.value) == null ? void 0 : l.offsetParent, o = [.../* @__PURE__ */ new Set([...un(e.activatorEl.value, n.contained ? t : void 0), ...un(e.contentEl.value, n.contained ? t : void 0)])].filter((u) => !u.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (r = t || document.documentElement, nl(r) && r);
  var r;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), o.forEach((u, p) => {
    u.style.setProperty("--v-body-scroll-x", Z(-u.scrollLeft)), u.style.setProperty("--v-body-scroll-y", Z(-u.scrollTop)), u.style.setProperty("--v-scrollbar-offset", Z(a)), u.classList.add("v-overlay-scroll-blocked");
  }), be(() => {
    o.forEach((u, p) => {
      const m = parseFloat(u.style.getPropertyValue("--v-body-scroll-x")), d = parseFloat(u.style.getPropertyValue("--v-body-scroll-y"));
      u.style.removeProperty("--v-body-scroll-x"), u.style.removeProperty("--v-body-scroll-y"), u.style.removeProperty("--v-scrollbar-offset"), u.classList.remove("v-overlay-scroll-blocked"), u.scrollLeft = -m, u.scrollTop = -d;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let o = !1, a = -1, i = -1;
  function r(l) {
    var u;
    u = () => {
      var d, f;
      const p = performance.now();
      (f = (d = e.updateLocation).value) == null || f.call(d, l), o = (performance.now() - p) / (1e3 / 60) > 2;
    }, !Hn || fn.length ? (fn.push(u), qn()) : (Hn = !1, u(), qn());
  }
  i = (typeof requestIdleCallback > "u" ? (l) => l() : requestIdleCallback)(() => {
    t.run(() => {
      Nl(e.activatorEl.value ?? e.contentEl.value, (l) => {
        o ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            r(l);
          });
        })) : r(l);
      });
    });
  }), be(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, xi = W({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ln } }, "VOverlay-scroll-strategies");
function Nl(e, n) {
  const t = [document, ...un(e)];
  t.forEach((o) => {
    o.addEventListener("scroll", n, { passive: !0 });
  }), be(() => {
    t.forEach((o) => {
      o.removeEventListener("scroll", n);
    });
  });
}
const Un = Symbol.for("vuetify:v-menu"), wi = W({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), ki = W({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...wi() }, "VOverlay-activator");
function Vi(e, n) {
  let { isActive: t, isTop: o } = n;
  const a = j();
  let i = !1, r = !1, l = !0;
  const u = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), p = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !u.value), { runOpenDelay: m, runCloseDelay: d } = function(k, S) {
    const b = {}, O = (w) => () => {
      if (!_e)
        return Promise.resolve(!0);
      const A = w === "openDelay";
      return b.closeDelay && window.clearTimeout(b.closeDelay), delete b.closeDelay, b.openDelay && window.clearTimeout(b.openDelay), delete b.openDelay, new Promise((C) => {
        const _ = parseInt(k[w] ?? 0, 10);
        b[w] = window.setTimeout(() => {
          S == null || S(A), C(A);
        }, _);
      });
    };
    return { runCloseDelay: O("closeDelay"), runOpenDelay: O("openDelay") };
  }(e, (k) => {
    k !== (e.openOnHover && i || u.value && r) || e.openOnHover && t.value && !o.value || (t.value !== k && (l = !0), t.value = k);
  }), f = (k) => {
    k.stopPropagation(), a.value = k.currentTarget || k.target, t.value = !t.value;
  }, g = (k) => {
    var S;
    (S = k.sourceCapabilities) != null && S.firesTouchEvents || (i = !0, a.value = k.currentTarget || k.target, m());
  }, y = (k) => {
    i = !1, d();
  }, x = (k) => {
    zn && !k.target.matches(":focus-visible") || (r = !0, k.stopPropagation(), a.value = k.currentTarget || k.target, m());
  }, h = (k) => {
    r = !1, k.stopPropagation(), d();
  }, B = v(() => {
    const k = {};
    return p.value && (k.onClick = f), e.openOnHover && (k.onMouseenter = g, k.onMouseleave = y), u.value && (k.onFocus = x, k.onBlur = h), k;
  }), T = v(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      i = !0, m();
    }, k.onMouseleave = () => {
      i = !1, d();
    }), u.value && (k.onFocusin = () => {
      r = !0, m();
    }, k.onFocusout = () => {
      r = !1, d();
    }), e.closeOnContentClick) {
      const S = re(Un, null);
      k.onClick = () => {
        t.value = !1, S == null || S.closeParents();
      };
    }
    return k;
  }), I = v(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      l && (i = !0, l = !1, m());
    }, k.onMouseleave = () => {
      i = !1, d();
    }), k;
  });
  U(o, (k) => {
    !k || (!e.openOnHover || i || u.value && r) && (!u.value || r || e.openOnHover && i) || (t.value = !1);
  });
  const P = j();
  qe(() => {
    P.value && ge(() => {
      a.value = Tn(P.value);
    });
  });
  const D = ye("useActivator");
  let $;
  return U(() => !!e.activator, (k) => {
    k && _e ? ($ = Kn(), $.run(() => {
      (function(S, b, O) {
        let { activatorEl: w, activatorEvents: A } = O;
        function C() {
          let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : L(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.activatorProps;
          z && function(V, M) {
            Object.keys(M).forEach((N) => {
              if (Fn(N)) {
                const q = yl(N), F = Qt.get(V);
                if (M[N] == null)
                  F == null || F.forEach((H) => {
                    const [R, K] = H;
                    R === q && (V.removeEventListener(q, K), F.delete(H));
                  });
                else if (!F || ![...F].some((H) => H[0] === q && H[1] === M[N])) {
                  V.addEventListener(q, M[N]);
                  const H = F || /* @__PURE__ */ new Set();
                  H.add([q, M[N]]), Qt.has(V) || Qt.set(V, H);
                }
              } else
                M[N] == null ? V.removeAttribute(N) : V.setAttribute(N, M[N]);
            });
          }(z, G(A.value, E));
        }
        function _() {
          let z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : L(), E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : S.activatorProps;
          z && function(V, M) {
            Object.keys(M).forEach((N) => {
              if (Fn(N)) {
                const q = yl(N), F = Qt.get(V);
                F == null || F.forEach((H) => {
                  const [R, K] = H;
                  R === q && (V.removeEventListener(q, K), F.delete(H));
                });
              } else
                V.removeAttribute(N);
            });
          }(z, G(A.value, E));
        }
        function L() {
          var V, M;
          let z, E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : S.activator;
          if (E)
            if (E === "parent") {
              let N = (M = (V = b == null ? void 0 : b.proxy) == null ? void 0 : V.$el) == null ? void 0 : M.parentNode;
              for (; N.hasAttribute("data-no-activator"); )
                N = N.parentNode;
              z = N;
            } else
              z = typeof E == "string" ? document.querySelector(E) : "$el" in E ? E.$el : E;
          return w.value = (z == null ? void 0 : z.nodeType) === Node.ELEMENT_NODE ? z : null, w.value;
        }
        U(() => S.activator, (z, E) => {
          if (E && z !== E) {
            const V = L(E);
            V && _(V);
          }
          z && ge(() => C());
        }, { immediate: !0 }), U(() => S.activatorProps, () => {
          C();
        }), be(() => {
          _();
        });
      })(e, D, { activatorEl: a, activatorEvents: B });
    })) : $ && $.stop();
  }, { flush: "post", immediate: !0 }), be(() => {
    $ == null || $.stop();
  }), { activatorEl: a, activatorRef: P, activatorEvents: B, contentEvents: T, scrimEvents: I };
}
const Bi = Symbol.for("vuetify:display");
function Ii() {
  if (!_e)
    return oe(!1);
  const { ssr: e } = function() {
    const n = re(Bi);
    if (!n)
      throw new Error("Could not find Vuetify display injection");
    return n;
  }();
  if (e) {
    const n = oe(!1);
    return bt(() => {
      n.value = !0;
    }), n;
  }
  return oe(!0);
}
const _i = W({ eager: Boolean }, "lazy");
function Jo() {
  const e = ye("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Rl = Symbol.for("vuetify:stack"), pt = Le([]);
function Oi() {
  return !0;
}
function jl(e, n, t) {
  if (!e || Zo(e, t) === !1)
    return !1;
  const o = lo(n);
  if (typeof ShadowRoot < "u" && o instanceof ShadowRoot && o.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function Zo(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Oi)(e);
}
function Hl(e, n) {
  const t = lo(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const $i = { mounted(e, n) {
  const t = (a) => function(i, r, l) {
    const u = typeof l.value == "function" ? l.value : l.value.handler;
    r._clickOutside.lastMousedownWasOutside && jl(i, r, l) && setTimeout(() => {
      Zo(i, l) && u && u(i);
    }, 0);
  }(a, e, n), o = (a) => {
    e._clickOutside.lastMousedownWasOutside = jl(a, e, n);
  };
  Hl(e, (a) => {
    a.addEventListener("click", t, !0), a.addEventListener("mousedown", o, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: o };
}, unmounted(e, n) {
  e._clickOutside && (Hl(e, (t) => {
    var i;
    if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid]))
      return;
    const { onClick: o, onMousedown: a } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", o, !0), t.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function Ai(e) {
  const { modelValue: n, color: t, ...o } = e;
  return c(tt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && c("div", G({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, o), null)] });
}
const Qo = W({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...ki(), ...ae(), ...Ft(), ..._i(), ...Ci(), ...xi(), ...me(), ...zt() }, "VOverlay"), ql = X()({ name: "VOverlay", directives: { ClickOutside: $i }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...Qo() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var N, q;
  let { slots: t, attrs: o, emit: a } = n;
  const i = de(e, "modelValue"), r = v({ get: () => i.value, set: (F) => {
    F && e.disabled || (i.value = F);
  } }), { teleportTarget: l } = (u = v(() => e.attach || e.contained), { teleportTarget: v(() => {
    const F = u.value;
    if (F === !0 || !_e)
      return;
    const H = F === !1 ? document.body : typeof F == "string" ? document.querySelector(F) : F;
    if (H == null)
      return void mn(`Unable to locate target ${F}`);
    let R = H.querySelector(":scope > .v-overlay-container");
    return R || (R = document.createElement("div"), R.className = "v-overlay-container", H.appendChild(R)), R;
  }) });
  var u;
  const { themeClasses: p } = we(e), { rtlClasses: m, isRtl: d } = Et(), { hasContent: f, onAfterLeave: g } = function(F, H) {
    const R = oe(!1), K = v(() => R.value || F.eager || H.value);
    return U(H, () => R.value = !0), { isBooted: R, hasContent: K, onAfterLeave: function() {
      F.eager || (R.value = !1);
    } };
  }(e, r), y = mt(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: x, localTop: h, stackStyles: B } = function(F, H, R) {
    const K = ye("useStack"), te = !R, le = re(Rl, void 0), J = Le({ activeChildren: /* @__PURE__ */ new Set() });
    Te(Rl, J);
    const se = oe(+H.value);
    et(F, () => {
      var vt;
      const ze = (vt = pt.at(-1)) == null ? void 0 : vt[1];
      se.value = ze ? ze + 10 : +H.value, te && pt.push([K.uid, se.value]), le == null || le.activeChildren.add(K.uid), be(() => {
        if (te) {
          const ia = je(pt).findIndex((ra) => ra[0] === K.uid);
          pt.splice(ia, 1);
        }
        le == null || le.activeChildren.delete(K.uid);
      });
    });
    const Ie = oe(!0);
    te && qe(() => {
      var vt;
      const ze = ((vt = pt.at(-1)) == null ? void 0 : vt[0]) === K.uid;
      setTimeout(() => Ie.value = ze);
    });
    const wn = v(() => !J.activeChildren.size);
    return { globalTop: Yn(Ie), localTop: wn, stackStyles: v(() => ({ zIndex: se.value })) };
  }(r, Y(e, "zIndex"), e._disableGlobalStack), { activatorEl: T, activatorRef: I, activatorEvents: P, contentEvents: D, scrimEvents: $ } = Vi(e, { isActive: r, isTop: h }), { dimensionStyles: k } = Lt(e), S = Ii(), { scopeId: b } = Jo();
  U(() => e.disabled, (F) => {
    F && (r.value = !1);
  });
  const O = j(), w = j(), { contentStyles: A, updateLocation: C } = function(F, H) {
    const R = j({}), K = j();
    function te(le) {
      var J;
      (J = K.value) == null || J.call(K, le);
    }
    return _e && (et(() => !(!H.isActive.value || !F.locationStrategy), (le) => {
      var J, se;
      U(() => F.locationStrategy, le), be(() => {
        K.value = void 0;
      }), typeof F.locationStrategy == "function" ? K.value = (J = F.locationStrategy(H, F, R)) == null ? void 0 : J.updateLocation : K.value = (se = Xo[F.locationStrategy](H, F, R)) == null ? void 0 : se.updateLocation;
    }), window.addEventListener("resize", te, { passive: !0 }), be(() => {
      window.removeEventListener("resize", te), K.value = void 0;
    })), { contentStyles: R, updateLocation: K };
  }(e, { isRtl: d, contentEl: w, activatorEl: T, isActive: r });
  function _(F) {
    a("click:outside", F), e.persistent ? M() : r.value = !1;
  }
  function L() {
    return r.value && x.value;
  }
  function z(F) {
    var H, R;
    F.key === "Escape" && x.value && (e.persistent ? M() : (r.value = !1, (H = w.value) != null && H.contains(document.activeElement) && ((R = T.value) == null || R.focus())));
  }
  (function(F, H) {
    if (!_e)
      return;
    let R;
    qe(async () => {
      R == null || R.stop(), H.isActive.value && F.scrollStrategy && (R = Kn(), await ge(), R.active && R.run(() => {
        var K;
        typeof F.scrollStrategy == "function" ? F.scrollStrategy(H, F, R) : (K = ln[F.scrollStrategy]) == null || K.call(ln, H, F, R);
      }));
    }), be(() => {
      R == null || R.stop();
    });
  })(e, { root: O, contentEl: w, activatorEl: T, isActive: r, updateLocation: C }), _e && U(r, (F) => {
    F ? window.addEventListener("keydown", z) : window.removeEventListener("keydown", z);
  }, { immediate: !0 });
  const E = (q = (N = ye("useRouter")) == null ? void 0 : N.proxy) == null ? void 0 : q.$router;
  et(() => e.closeOnBack, () => {
    (function(F, H) {
      let R, K, te = !1;
      function le(J) {
        var se;
        (se = J.state) != null && se.replaced || (te = !0, setTimeout(() => te = !1));
      }
      _e && (ge(() => {
        window.addEventListener("popstate", le), R = F == null ? void 0 : F.beforeEach((J, se, Ie) => {
          Bn ? te ? H(Ie) : Ie() : setTimeout(() => te ? H(Ie) : Ie()), Bn = !0;
        }), K = F == null ? void 0 : F.afterEach(() => {
          Bn = !1;
        });
      }), be(() => {
        window.removeEventListener("popstate", le), R == null || R(), K == null || K();
      }));
    })(E, (F) => {
      x.value && r.value ? (F(!1), e.persistent ? M() : r.value = !1) : F();
    });
  });
  const V = j();
  function M() {
    e.noClickAnimation || w.value && at(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: sn });
  }
  return U(() => r.value && (e.absolute || e.contained) && l.value == null, (F) => {
    if (F) {
      const H = function(R) {
        for (; R; ) {
          if (nl(R))
            return R;
          R = R.parentElement;
        }
        return document.scrollingElement;
      }(O.value);
      H && H !== document.scrollingElement && (V.value = H.scrollTop);
    }
  }), Q(() => {
    var F;
    return c(pe, null, [(F = t.activator) == null ? void 0 : F.call(t, { isActive: r.value, props: G({ ref: I }, P.value, e.activatorProps) }), S.value && c(va, { disabled: !l.value, to: l.value }, { default: () => [f.value && c("div", G({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": r.value, "v-overlay--contained": e.contained }, p.value, m.value, e.class], style: [B.value, { top: Z(V.value) }, e.style], ref: O }, b, o), [c(Ai, G({ color: y, modelValue: r.value && !!e.scrim }, $.value), null), c(Re, { appear: !0, persisted: !0, transition: e.transition, target: T.value, onAfterLeave: () => {
      g(), a("afterLeave");
    } }, { default: () => {
      var H;
      return [fe(c("div", G({ ref: w, class: ["v-overlay__content", e.contentClass], style: [k.value, A.value] }, D.value, e.contentProps), [(H = t.default) == null ? void 0 : H.call(t, { isActive: r })]), [[rt, r.value], [De("click-outside"), { handler: _, closeConditional: L, include: () => [T.value] }]])];
    } })])] })]);
  }), { activatorEl: T, animateClick: M, contentEl: w, globalTop: x, localTop: h, updateLocation: C };
} }), On = Symbol("Forwarded refs");
function $n(e, n) {
  let t = e;
  for (; t; ) {
    const o = Reflect.getOwnPropertyDescriptor(t, n);
    if (o)
      return o;
    t = Object.getPrototypeOf(t);
  }
}
function Cn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    t[o - 1] = arguments[o];
  return e[On] = t, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const r of t)
        if (r.value && Reflect.has(r.value, i)) {
          const l = Reflect.get(r.value, i);
          return typeof l == "function" ? l.bind(r.value) : l;
        }
    }
  }, has(a, i) {
    if (Reflect.has(a, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("__"))
      return !1;
    for (const r of t)
      if (r.value && Reflect.has(r.value, i))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var l;
    const r = Reflect.getOwnPropertyDescriptor(a, i);
    if (r)
      return r;
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const u of t) {
        if (!u.value)
          continue;
        const p = $n(u.value, i) ?? ("_" in u.value ? $n((l = u.value._) == null ? void 0 : l.setupState, i) : void 0);
        if (p)
          return p;
      }
      for (const u of t) {
        const p = u.value && u.value[On];
        if (!p)
          continue;
        const m = p.slice();
        for (; m.length; ) {
          const d = m.shift(), f = $n(d.value, i);
          if (f)
            return f;
          const g = d.value && d.value[On];
          g && m.push(...g);
        }
      }
    }
  } });
}
const Ti = W({ id: String, ...Jn(Qo({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: so } }), ["absolute"]) }, "VMenu"), Ei = X()({ name: "VMenu", props: Ti(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const o = de(e, "modelValue"), { scopeId: a } = Jo(), i = Ae(), r = v(() => e.id || `v-menu-${i}`), l = j(), u = re(Un, null), p = oe(0);
  function m() {
    u == null || u.closeParents();
  }
  function d(y) {
    var x, h;
    e.disabled || y.key === "Tab" && (o.value = !1, (h = (x = l.value) == null ? void 0 : x.activatorEl) == null || h.focus());
  }
  function f(y) {
    var h;
    if (e.disabled)
      return;
    const x = (h = l.value) == null ? void 0 : h.contentEl;
    x && o.value ? y.key === "ArrowDown" ? (y.preventDefault(), rn(x, "next")) : y.key === "ArrowUp" && (y.preventDefault(), rn(x, "prev")) : ["ArrowDown", "ArrowUp"].includes(y.key) && (o.value = !0, y.preventDefault(), setTimeout(() => setTimeout(() => f(y))));
  }
  Te(Un, { register() {
    ++p.value;
  }, unregister() {
    --p.value;
  }, closeParents() {
    setTimeout(() => {
      p.value || (o.value = !1, u == null || u.closeParents());
    }, 40);
  } }), U(o, (y) => {
    y ? u == null || u.register() : u == null || u.unregister();
  });
  const g = v(() => G({ "aria-haspopup": "menu", "aria-expanded": String(o.value), "aria-owns": r.value, onKeydown: f }, e.activatorProps));
  return Q(() => {
    const [y] = ql.filterProps(e);
    return c(ql, G({ ref: l, class: ["v-menu", e.class], style: e.style }, y, { modelValue: o.value, "onUpdate:modelValue": (x) => o.value = x, absolute: !0, activatorProps: g.value, "onClick:outside": m, onKeydown: d }, a), { activator: t.activator, default: function() {
      for (var x = arguments.length, h = new Array(x), B = 0; B < x; B++)
        h[B] = arguments[B];
      return c(ke, { root: "VMenu" }, { default: () => {
        var T;
        return [(T = t.default) == null ? void 0 : T.call(t, ...h)];
      } });
    } });
  }), Cn({ id: r, ΨopenChildren: p }, l);
} }), Fi = W({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ae(), ...zt({ transition: { component: uo } }) }, "VCounter"), ea = X()({ name: "VCounter", functional: !0, props: Fi(), setup(e, n) {
  let { slots: t } = n;
  const o = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return Q(() => c(Re, { transition: e.transition }, { default: () => [fe(c("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: o.value, max: e.max, value: e.value }) : o.value]), [[rt, e.active]])] })), {};
} }), Li = W({ floating: Boolean, ...ae() }, "VFieldLabel"), en = X()({ name: "VFieldLabel", props: Li(), setup(e, n) {
  let { slots: t } = n;
  return Q(() => c(To, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), zi = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], dl = W({ appendInnerIcon: ie, bgColor: String, clearable: Boolean, clearIcon: { type: ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => zi.includes(e) }, "onClick:clear": Ee(), "onClick:appendInner": Ee(), "onClick:prependInner": Ee(), ...ae(), ...wo(), ...Ye(), ...me() }, "VField"), vl = X()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Po(), ...dl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: o, slots: a } = n;
  const { themeClasses: i } = we(e), { loaderClasses: r } = rl(e), { focusClasses: l, isFocused: u, focus: p, blur: m } = jt(e), { InputIcon: d } = zo(e), { roundedClasses: f } = Xe(e), { rtlClasses: g } = Et(), y = v(() => e.dirty || e.active), x = v(() => !(e.singleLine || !e.label && !a.label)), h = Ae(), B = v(() => e.id || `input-${h}`), T = v(() => `${B.value}-messages`), I = j(), P = j(), D = j(), $ = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: k, backgroundColorStyles: S } = mt(Y(e, "bgColor")), { textColorClasses: b, textColorStyles: O } = Me(v(() => e.error || e.disabled ? void 0 : y.value && u.value ? e.color : e.baseColor));
  U(y, (C) => {
    if (x.value) {
      const _ = I.value.$el, L = P.value.$el;
      requestAnimationFrame(() => {
        const z = Qn(_), E = L.getBoundingClientRect(), V = E.x - z.x, M = E.y - z.y - (z.height / 2 - E.height / 2), N = E.width / 0.75, q = Math.abs(N - z.width) > 1 ? { maxWidth: Z(N) } : void 0, F = getComputedStyle(_), H = getComputedStyle(L), R = 1e3 * parseFloat(F.transitionDuration) || 150, K = parseFloat(H.getPropertyValue("--v-field-label-scale")), te = H.getPropertyValue("color");
        _.style.visibility = "visible", L.style.visibility = "hidden", at(_, { transform: `translate(${V}px, ${M}px) scale(${K})`, color: te, ...q }, { duration: R, easing: sn, direction: C ? "normal" : "reverse" }).finished.then(() => {
          _.style.removeProperty("visibility"), L.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = v(() => ({ isActive: y, isFocused: u, controlRef: D, blur: m, focus: p }));
  function A(C) {
    C.target !== document.activeElement && C.preventDefault();
  }
  return Q(() => {
    var V, M, N;
    const C = e.variant === "outlined", _ = a["prepend-inner"] || e.prependInnerIcon, L = !(!e.clearable && !a.clear), z = !!(a["append-inner"] || e.appendInnerIcon || L), E = a.label ? a.label({ ...w.value, label: e.label, props: { for: B.value } }) : e.label;
    return c("div", G({ class: ["v-field", { "v-field--active": y.value, "v-field--appended": z, "v-field--center-affix": e.centerAffix ?? !$.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": _, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !E, [`v-field--variant-${e.variant}`]: !0 }, i.value, k.value, l.value, r.value, f.value, g.value, e.class], style: [S.value, O.value, e.style], onClick: A }, t), [c("div", { class: "v-field__overlay" }, null), c(ko, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: a.loader }), _ && c("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && c(d, { key: "prepend-icon", name: "prependInner" }, null), (V = a["prepend-inner"]) == null ? void 0 : V.call(a, w.value)]), c("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && x.value && c(en, { key: "floating-label", ref: P, class: [b.value], floating: !0, for: B.value }, { default: () => [E] }), c(en, { ref: I, for: B.value }, { default: () => [E] }), (M = a.default) == null ? void 0 : M.call(a, { ...w.value, props: { id: B.value, class: "v-field__input", "aria-describedby": T.value }, focus: p, blur: m })]), L && c(co, { key: "clear" }, { default: () => [fe(c("div", { class: "v-field__clearable", onMousedown: (q) => {
      q.preventDefault(), q.stopPropagation();
    } }, [a.clear ? a.clear() : c(d, { name: "clear" }, null)]), [[rt, e.dirty]])] }), z && c("div", { key: "append", class: "v-field__append-inner" }, [(N = a["append-inner"]) == null ? void 0 : N.call(a, w.value), e.appendInnerIcon && c(d, { key: "append-icon", name: "appendInner" }, null)]), c("div", { class: ["v-field__outline", b.value] }, [C && c(pe, null, [c("div", { class: "v-field__outline__start" }, null), x.value && c("div", { class: "v-field__outline__notch" }, [c(en, { ref: P, floating: !0, for: B.value }, { default: () => [E] })]), c("div", { class: "v-field__outline__end" }, null)]), $.value && x.value && c(en, { ref: P, floating: !0, for: B.value }, { default: () => [E] })])]);
  }), { controlRef: D };
} });
function ta(e) {
  return At(e, Object.keys(vl.props).filter((n) => !Fn(n) && n !== "class" && n !== "style"));
}
const Pi = ["color", "file", "time", "date", "datetime-local", "week", "month"], na = W({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Ht(), ...dl() }, "VTextField"), Gn = X()({ name: "VTextField", directives: { Intersect: al }, inheritAttrs: !1, props: na(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: o, slots: a } = n;
  const i = de(e, "modelValue"), { isFocused: r, focus: l, blur: u } = jt(e), p = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value ?? "").toString().length), m = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), d = v(() => ["plain", "underlined"].includes(e.variant));
  function f($, k) {
    var S, b;
    e.autofocus && $ && ((b = (S = k[0].target) == null ? void 0 : S.focus) == null || b.call(S));
  }
  const g = j(), y = j(), x = j(), h = v(() => Pi.includes(e.type) || e.persistentPlaceholder || r.value || e.active);
  function B() {
    var $;
    x.value !== document.activeElement && (($ = x.value) == null || $.focus()), r.value || l();
  }
  function T($) {
    o("mousedown:control", $), $.target !== x.value && (B(), $.preventDefault());
  }
  function I($) {
    B(), o("click:control", $);
  }
  function P($) {
    $.stopPropagation(), B(), ge(() => {
      i.value = null, Ql(e["onClick:clear"], $);
    });
  }
  function D($) {
    var S;
    const k = $.target;
    if (i.value = k.value, ((S = e.modelModifiers) == null ? void 0 : S.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const b = [k.selectionStart, k.selectionEnd];
      ge(() => {
        k.selectionStart = b[0], k.selectionEnd = b[1];
      });
    }
  }
  return Q(() => {
    const $ = !!(a.counter || e.counter || e.counterValue), k = !(!$ && !a.details), [S, b] = Tt(t), [{ modelValue: O, ...w }] = Ue.filterProps(e), [A] = ta(e);
    return c(Ue, G({ ref: g, modelValue: i.value, "onUpdate:modelValue": (C) => i.value = C, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, S, w, { centerAffix: !d.value, focused: r.value }), { ...a, default: (C) => {
      let { id: _, isDisabled: L, isDirty: z, isReadonly: E, isValid: V } = C;
      return c(vl, G({ ref: y, onMousedown: T, onClick: I, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, A, { id: _.value, active: h.value || z.value, dirty: z.value || e.dirty, disabled: L.value, focused: r.value, error: V.value === !1 }), { ...a, default: (M) => {
        let { props: { class: N, ...q } } = M;
        const F = fe(c("input", G({ ref: x, value: i.value, onInput: D, autofocus: e.autofocus, readonly: E.value, disabled: L.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: B, onBlur: u }, q, b), null), [[De("intersect"), { handler: f }, null, { once: !0 }]]);
        return c(pe, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [e.prefix]), a.default ? c("div", { class: N, "data-no-activator": "" }, [a.default(), F]) : pa(F, { class: N }), e.suffix && c("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: k ? (C) => {
      var _;
      return c(pe, null, [(_ = a.details) == null ? void 0 : _.call(a, C), $ && c(pe, null, [c("span", null, null), c(ea, { active: e.persistentCounter || r.value, value: p.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Cn({}, g, y, x);
} }), Di = W({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: ct }, ...Uo({ itemChildren: !1 }) }, "Select"), Mi = W({ ...Di(), ...Jn(na({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...zt({ transition: { component: so } }) }, "VSelect"), Wi = X()({ name: "VSelect", props: Mi(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: o } = ol(), a = j(), i = j(), r = de(e, "menu"), l = v({ get: () => r.value, set: (C) => {
    var _;
    r.value && !C && ((_ = i.value) != null && _.ΨopenChildren) || (r.value = C);
  } }), { items: u, transformIn: p, transformOut: m } = yi(e), d = de(e, "modelValue", [], (C) => p(C === null ? [null] : He(C)), (C) => {
    const _ = m(C);
    return e.multiple ? _ : _[0] ?? null;
  }), f = Do(), g = v(() => d.value.map((C) => u.value.find((_) => e.valueComparator(_.value, C.value)) || C)), y = v(() => g.value.map((C) => C.props.value)), x = oe(!1);
  let h, B = "";
  const T = v(() => e.hideSelected ? u.value.filter((C) => !g.value.some((_) => _ === C)) : u.value), I = v(() => e.hideNoData && !u.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), P = j();
  function D(C) {
    e.openOnClear && (l.value = !0);
  }
  function $() {
    I.value || (l.value = !l.value);
  }
  function k(C) {
    var z, E;
    if (e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(C.key) && C.preventDefault(), ["Enter", "ArrowDown", " "].includes(C.key) && (l.value = !0), ["Escape", "Tab"].includes(C.key) && (l.value = !1), C.key === "Home" ? (z = P.value) == null || z.focus("first") : C.key === "End" && ((E = P.value) == null || E.focus("last")), e.multiple || !function(V) {
      const M = V.key.length === 1, N = !V.ctrlKey && !V.metaKey && !V.altKey;
      return M && N;
    }(C)))
      return;
    const _ = performance.now();
    _ - h > 1e3 && (B = ""), B += C.key.toLowerCase(), h = _;
    const L = u.value.find((V) => V.title.toLowerCase().startsWith(B));
    L !== void 0 && (d.value = [L]);
  }
  function S(C) {
    var _;
    C.key === "Tab" && ((_ = a.value) == null || _.focus());
  }
  function b(C) {
    if (e.multiple) {
      const _ = y.value.findIndex((L) => e.valueComparator(L, C.value));
      if (_ === -1)
        d.value = [...d.value, C];
      else {
        const L = [...d.value];
        L.splice(_, 1), d.value = L;
      }
    } else
      d.value = [C], l.value = !1;
  }
  function O(C) {
    var _;
    (_ = P.value) != null && _.$el.contains(C.relatedTarget) || (l.value = !1);
  }
  function w() {
    var C;
    x.value && ((C = a.value) == null || C.focus());
  }
  function A(C) {
    x.value = !0;
  }
  return Q(() => {
    const C = !(!e.chips && !t.chip), _ = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), L = d.value.length > 0, [z] = Gn.filterProps(e), E = L || !x.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return c(Gn, G({ ref: a }, z, { modelValue: d.value.map((V) => V.props.value).join(", "), "onUpdate:modelValue": (V) => {
      V == null && (d.value = []);
    }, focused: x.value, "onUpdate:focused": (V) => x.value = V, validationValue: d.externalValue, dirty: L, class: ["v-select", { "v-select--active-menu": l.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": d.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: E, "onClick:clear": D, "onMousedown:control": $, onBlur: O, onKeydown: k }), { ...t, default: () => c(pe, null, [c(Ei, G({ ref: i, modelValue: l.value, "onUpdate:modelValue": (V) => l.value = V, activator: "parent", contentClass: "v-select__content", disabled: I.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: w }, e.menuProps), { default: () => [_ && c(Si, { ref: P, selected: y.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (V) => V.preventDefault(), onKeydown: S, onFocusin: A, tabindex: "-1" }, { default: () => {
      var V, M, N;
      return [(V = t["prepend-item"]) == null ? void 0 : V.call(t), !T.value.length && !e.hideNoData && (((M = t["no-data"]) == null ? void 0 : M.call(t)) ?? c(pn, { title: o(e.noDataText) }, null)), T.value.map((q, F) => {
        var R;
        const H = G(q.props, { key: F, onClick: () => b(q) });
        return ((R = t.item) == null ? void 0 : R.call(t, { item: q, index: F, props: H })) ?? c(pn, H, { prepend: (K) => {
          let { isSelected: te } = K;
          return c(pe, null, [e.multiple && !e.hideSelected ? c(Nn, { key: q.value, modelValue: te, ripple: !1, tabindex: "-1" }, null) : void 0, q.props.prependIcon && c(ue, { icon: q.props.prependIcon }, null)]);
        } });
      }), (N = t["append-item"]) == null ? void 0 : N.call(t)];
    } })] }), g.value.map((V, M) => {
      var q;
      const N = { "onClick:close": function(F) {
        F.stopPropagation(), F.preventDefault(), b(V);
      }, onMousedown(F) {
        F.preventDefault(), F.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return c("div", { key: V.value, class: "v-select__selection" }, [C ? t.chip ? c(ke, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: V.title } } }, { default: () => {
        var F;
        return [(F = t.chip) == null ? void 0 : F.call(t, { item: V, index: M, props: N })];
      } }) : c(ni, G({ key: "chip", closable: e.closableChips, size: "small", text: V.title }, N), null) : ((q = t.selection) == null ? void 0 : q.call(t, { item: V, index: M })) ?? c("span", { class: "v-select__selection-text" }, [V.title, e.multiple && M < g.value.length - 1 && c("span", { class: "v-select__selection-comma" }, [fa(",")])])]);
    })]), "append-inner": function() {
      var q;
      for (var V = arguments.length, M = new Array(V), N = 0; N < V; N++)
        M[N] = arguments[N];
      return c(pe, null, [(q = t["append-inner"]) == null ? void 0 : q.call(t, ...M), e.menuIcon ? c(ue, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Cn({ isFocused: x, menu: l, select: b }, a);
} }), Ni = W({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Ht(), ...cl() }, "VSwitch"), Ri = X()({ name: "VSwitch", inheritAttrs: !1, props: Ni(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: o } = n;
  const a = de(e, "indeterminate"), i = de(e, "modelValue"), { loaderClasses: r } = rl(e), { isFocused: l, focus: u, blur: p } = jt(e), m = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), d = Ae(), f = v(() => e.id || `switch-${d}`);
  function g() {
    a.value && (a.value = !1);
  }
  return Q(() => {
    const [y, x] = Tt(t), [h, B] = Ue.filterProps(e), [T, I] = Wn.filterProps(e), P = j();
    function D($) {
      var k, S;
      $.stopPropagation(), $.preventDefault(), (S = (k = P.value) == null ? void 0 : k.input) == null || S.click();
    }
    return c(Ue, G({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, r.value, e.class], style: e.style }, y, h, { id: f.value, focused: l.value }), { ...o, default: ($) => {
      let { id: k, messagesId: S, isDisabled: b, isReadonly: O, isValid: w } = $;
      return c(Wn, G({ ref: P }, T, { modelValue: i.value, "onUpdate:modelValue": [(A) => i.value = A, g], id: k.value, "aria-describedby": S.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: b.value, readonly: O.value, onFocus: u, onBlur: p }, x), { ...o, default: () => c("div", { class: "v-switch__track", onClick: D }, null), input: (A) => {
        let { textColorClasses: C, textColorStyles: _ } = A;
        return c("div", { class: ["v-switch__thumb", C.value], style: _.value }, [e.loading && c(ko, { name: "v-switch", active: !0, color: w.value === !1 ? void 0 : m.value }, { default: (L) => o.loader ? o.loader(L) : c(So, { active: L.isActive, color: L.color, indeterminate: !0, size: "16", width: "2" }, null) })]);
      } });
    } });
  }), {};
} }), ji = W({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Ht(), ...dl() }, "VTextarea"), Hi = X()({ name: "VTextarea", directives: { Intersect: al }, inheritAttrs: !1, props: ji(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: o, slots: a } = n;
  const i = de(e, "modelValue"), { isFocused: r, focus: l, blur: u } = jt(e), p = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), m = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function d(w, A) {
    var C, _;
    e.autofocus && w && ((_ = (C = A[0].target) == null ? void 0 : C.focus) == null || _.call(C));
  }
  const f = j(), g = j(), y = oe(""), x = j(), h = v(() => e.persistentPlaceholder || r.value || e.active);
  function B() {
    var w;
    x.value !== document.activeElement && ((w = x.value) == null || w.focus()), r.value || l();
  }
  function T(w) {
    B(), o("click:control", w);
  }
  function I(w) {
    o("mousedown:control", w);
  }
  function P(w) {
    w.stopPropagation(), B(), ge(() => {
      i.value = "", Ql(e["onClick:clear"], w);
    });
  }
  function D(w) {
    var C;
    const A = w.target;
    if (i.value = A.value, (C = e.modelModifiers) == null ? void 0 : C.trim) {
      const _ = [A.selectionStart, A.selectionEnd];
      ge(() => {
        A.selectionStart = _[0], A.selectionEnd = _[1];
      });
    }
  }
  const $ = j(), k = j(+e.rows), S = v(() => ["plain", "underlined"].includes(e.variant));
  function b() {
    e.autoGrow && ge(() => {
      if (!$.value || !g.value)
        return;
      const w = getComputedStyle($.value), A = getComputedStyle(g.value.$el), C = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), _ = $.value.scrollHeight, L = parseFloat(w.lineHeight), z = En(_ ?? 0, Math.max(parseFloat(e.rows) * L + C, parseFloat(A.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * L + C || 1 / 0);
      k.value = Math.floor((z - C) / L), y.value = Z(z);
    });
  }
  let O;
  return qe(() => {
    e.autoGrow || (k.value = +e.rows);
  }), bt(b), U(i, b), U(() => e.rows, b), U(() => e.maxRows, b), U(() => e.density, b), U($, (w) => {
    w ? (O = new ResizeObserver(b), O.observe($.value)) : O == null || O.disconnect();
  }), Ke(() => {
    O == null || O.disconnect();
  }), Q(() => {
    const w = !!(a.counter || e.counter || e.counterValue), A = !(!w && !a.details), [C, _] = Tt(t), [{ modelValue: L, ...z }] = Ue.filterProps(e), [E] = ta(e);
    return c(Ue, G({ ref: f, modelValue: i.value, "onUpdate:modelValue": (V) => i.value = V, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": S.value }, e.class], style: e.style }, C, z, { centerAffix: k.value === 1 && !S.value, focused: r.value }), { ...a, default: (V) => {
      let { isDisabled: M, isDirty: N, isReadonly: q, isValid: F } = V;
      return c(vl, G({ ref: g, style: { "--v-textarea-control-height": y.value }, onClick: T, onMousedown: I, "onClick:clear": P, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, E, { active: h.value || N.value, centerAffix: k.value === 1 && !S.value, dirty: N.value || e.dirty, disabled: M.value, focused: r.value, error: F.value === !1 }), { ...a, default: (H) => {
        let { props: { class: R, ...K } } = H;
        return c(pe, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [e.prefix]), fe(c("textarea", G({ ref: x, class: R, value: i.value, onInput: D, autofocus: e.autofocus, readonly: q.value, disabled: M.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: B, onBlur: u }, K, _), null), [[De("intersect"), { handler: d }, null, { once: !0 }]]), e.autoGrow && fe(c("textarea", { class: [R, "v-textarea__sizer"], "onUpdate:modelValue": (te) => i.value = te, ref: $, readonly: !0, "aria-hidden": "true" }, null), [[ma, i.value]]), e.suffix && c("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: A ? (V) => {
      var M;
      return c(pe, null, [(M = a.details) == null ? void 0 : M.call(a, V), w && c(pe, null, [c("span", null, null), c(ea, { active: e.persistentCounter || r.value, value: p.value, max: m.value }, a.counter)])]);
    } : void 0 });
  }), Cn({}, f, g, x);
} }), la = Ge({ __name: "BooleanIcons", props: $e({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const n = e, t = re(Symbol.for("vuetify:icons")), o = st(e, "modelValue"), a = v(() => Oe({ icon: n.iconFalse, iconOptions: t, name: "false" })), i = v(() => Oe({ icon: n.iconTrue, iconOptions: t, name: "true" }));
  return (r, l) => o.value ? (ne(), Ne(s(ue), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: r.iconTrueColor, icon: s(i), size: "x-small", title: r.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (ne(), Ne(s(ue), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: r.iconFalseColor, icon: s(a), size: "x-small", title: r.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ve = "v-inline-fields", qt = (e) => {
  const { field: n = "", density: t = "", disabled: o = !1, iconSet: a = "mdi", loading: i = !1, loadingWait: r, tableField: l = !1 } = e;
  return { [`${ve}`]: !0, [`${ve}--container`]: !0, [`${ve}--container-disabled`]: s(o), [`${ve}--container-table`]: l, [`${ve}--container-icon-set-${a}`]: !0, [`${ve}--container-loading`]: i && r, [`${ve}--container-${n}`]: !0, [`${ve}--container-${n}-${t}`]: !0, [`vi-${n}`]: !0, [`vi-${n}-${t}`]: !0 };
}, Ut = (e) => {
  const { field: n = "", density: t = "" } = e;
  return { [`${ve}--display-wrapper-value`]: !0, [`${n}`]: !0, "v-input": !0, [`v-input--density-${t}`]: !0, "v-input--horizontal": !0 };
}, pl = (e) => {
  const { density: n = "", variant: t = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${n}`]: !0, [`v-text-field--plain-${t}`]: !0 };
}, oa = (e) => {
  const { density: n = "" } = e;
  return { [`v-selection-control--density-${n}`]: !0 };
}, Gt = (e, n, t) => {
  const { error: o = !1, empty: a = !1 } = t;
  return { [`${ve}`]: !0, [`${ve}--display-value-${e}`]: !0, [`${ve}--display-value`]: !0, [`${ve}--display-wrapper-value-empty`]: s(a), [`text-${n}`]: !s(o), "text-danger": s(o) };
}, Kt = (e) => {
  const { name: n, active: t = !1 } = e;
  return { [`${ve}`]: !0, [`${ve}--field`]: !0, [`${ve}--field-${n}`]: !0, [`${ve}--field-active`]: t };
}, xn = Ge({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: n }) {
  const t = e, o = ut(), a = re(Symbol.for("vuetify:icons")), i = v(() => t.error), r = v(() => ({ [`${ve}--save-fields-container`]: !0, "align-center": !0, "d-flex": !0 })), l = v(() => t.loading), u = Le({ ...o, ...t }), p = v(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "fa-spin" : (a == null ? void 0 : a.defaultSet) === "mdi" ? "mdi-spin" : ""), m = v(() => ((h) => {
    const { cancelButtonVariant: B } = h;
    return { "me-1": B === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: u.cancelButtonVariant })), d = v(() => Oe({ icon: t.cancelIcon, iconOptions: a, name: "false" })), f = v(() => Oe({ icon: t.loadingIcon, iconOptions: a, name: "loading" })), g = v(() => Oe({ icon: t.saveIcon, iconOptions: a, name: "save" }));
  function y() {
    n("close");
  }
  function x() {
    n("save");
  }
  return (h, B) => (ne(), ce("div", G({ class: s(r) }, h.$attrs), [s(u).hideSaveIcon ? Xl("", !0) : (ne(), Ne(Mn, { key: 0, class: "ms-1", color: s(u).saveButtonColor, disabled: s(i), icon: "", size: s(u).saveButtonSize, title: s(l) ? "Loading" : s(u).saveButtonTitle, variant: s(u).saveButtonVariant, onClick: x }, { default: Ce(() => [s(l) ? (ne(), Ne(ue, { key: 1, class: ee(s(p)), color: s(u).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (ne(), Ne(ue, { key: 0, color: s(i) ? "error" : s(u).saveIconColor, icon: s(g) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), c(Mn, { class: ee(s(m)), color: s(u).cancelButtonColor, icon: "", size: s(u).cancelButtonSize, title: s(u).cancelButtonTitle, variant: s(u).cancelButtonVariant, onClick: y }, { default: Ce(() => [s(u).hideSaveIcon && s(l) ? (ne(), Ne(ue, { key: 0, class: ee(s(p)), color: s(u).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (ne(), Ne(ue, { key: 1, class: "text-default", color: s(u).cancelIconColor, icon: s(d) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
} }), fl = (e) => {
  const { required: n, rules: t } = e;
  let { value: o } = e;
  o = s(o);
  const a = [];
  let i = !1;
  if (n && !o)
    return a.push("Field is required."), { errors: !0, results: a };
  if (t) {
    for (const r of t) {
      const l = (typeof r == "function" ? r : () => r)(o);
      l !== !0 && (typeof l == "string" ? a.push(l) : console.warn(`${l} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, Yt = (e) => {
  const { attrs: n, closeSiblings: t, fieldOnly: o, props: a, showField: i, timeOpened: r } = e;
  let l = r;
  return t && !o && (l = /* @__PURE__ */ new Date()), { settings: { ...n, ...a }, showField: !s(i), timeOpened: l };
}, aa = (e) => {
  const { length: n = 0 } = e;
  let { suffix: t, text: o } = e;
  return o = o.toString(), t = t || "...", o.length > n ? `${o.substring(0, n)}${t}` : o;
}, Xt = (e) => {
  const { alignItems: n } = e;
  return { "align-items": n };
}, Jt = (e) => {
  const { underlineStyle: n, underlineWidth: t, color: o, error: a, underlined: i } = e;
  let { underlineColor: r } = e;
  r = r || o;
  const l = { "border-bottom-color": `rgb(var(--v-theme-${r}))`, "border-bottom-style": n, "border-bottom-width": t };
  return s(a) && (l["border-bottom-color"] = "rgb(var(--v-theme-danger))"), i || (l["border-bottom"] = "none"), l;
}, Zt = ["error", "update", "update:closeSiblingFields", "update:model-value"], qi = { class: "v-selection-control__wrapper" }, Ui = Ge({ __name: "VInlineCheckbox", props: $e(St({ density: {}, falseIcon: {}, trueIcon: {}, alignItems: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ga }), { modelValue: { type: Boolean } }), emits: $e([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, o = st(e, "modelValue"), a = ut(), i = Ct(), r = re(Symbol.for("vuetify:icons"));
  let l = Le({ ...a, ...t });
  const u = v(() => t.loading), p = j(!1), m = j(!1), d = j(null), f = v(() => l);
  U(() => u.value, (C, _) => {
    !C && _ && m.value && S();
  });
  const g = v(() => Oe({ icon: t.trueIcon, iconOptions: r, name: "checkboxFalse" })), y = v(() => Oe({ icon: t.iconTrue, iconOptions: r, name: "checkboxTrue" })), x = v(() => o.value == l.trueValue), h = v(() => qt({ density: l.density, disabled: l.disabled, field: "v-checkbox", loading: u.value, loadingWait: l.loadingWait, tableField: l.tableField })), B = v(() => Ut({ density: l.density, field: "v-checkbox" })), T = oa({ density: l.density }), I = v(() => Kt({ active: m.value, name: "checkbox" })), P = v(() => Gt("checkbox", l.valueColor, { error: p })), D = v(() => Xt({ alignItems: l.alignItems })), $ = v(() => Jt({ color: l.color, error: p, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined }));
  function k() {
    p.value = !1, S();
  }
  function S() {
    if (l.disabled || l.loadingWait && u.value)
      return;
    const C = Yt({ attrs: a, closeSiblings: l.closeSiblings, fieldOnly: l.fieldOnly, props: t, showField: m, timeOpened: d.value });
    l = { ...l, ...C.settings }, m.value = C.showField, d.value = C.timeOpened, O !== null && l.closeSiblings && m.value && !l.fieldOnly && O.emit(C.timeOpened);
  }
  function b(C) {
    o.value = C, n("update", C), l.loadingWait || S();
  }
  let O, w;
  function A(C) {
    n("update:closeSiblingFields", d), m.value && d.value !== C && S();
  }
  return l.closeSiblings && import("@vueuse/core").then(({ useEventBus: C }) => {
    O = C(Ot), w = O.on(A);
  }), xt(() => {
    w !== void 0 && O.off(A);
  }), (C, _) => (ne(), ce("div", { class: ee(s(h)), style: Ve(s(D)) }, [s(m) || s(l).fieldOnly ? (ne(), ce("div", { key: 1, class: ee(s(I)) }, [c(Za, G(s(f), { modelValue: o.value, "onUpdate:modelValue": [_[1] || (_[1] = (L) => o.value = L), b], color: s(l).color, density: s(l).density, disabled: s(u), error: s(p), "false-icon": s(g), "false-value": s(l).falseValue, "hide-details": s(l).hideDetails, label: s(l).label, "true-icon": s(y), value: s(l).trueValue }), kt({ _: 2 }, [Vt(s(i), (L, z) => ({ name: z, fn: Ce((E) => [Bt(C.$slots, z, It(_t({ ...E })))]) })), s(i).append ? void 0 : { name: "append", fn: Ce(() => [c(s(xn), { "cancel-button-color": s(l).cancelButtonColor, "cancel-button-size": s(l).cancelButtonSize, "cancel-button-title": s(l).cancelButtonTitle, "cancel-button-variant": s(l).cancelButtonVariant, "cancel-icon": s(l).cancelIcon, "cancel-icon-color": s(l).cancelIconColor, error: s(p), "field-only": s(l).fieldOnly, "hide-save-icon": !0, loading: s(u), "loading-icon": s(l).loadingIcon, "loading-icon-color": s(l).loadingIconColor, "save-button-color": s(l).saveButtonColor, "save-button-size": s(l).saveButtonSize, "save-button-title": s(l).saveButtonTitle, "save-button-variant": s(l).saveButtonVariant, "save-icon": s(l).saveIcon, "save-icon-color": s(l).saveIconColor, onClose: k, onSave: b }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "true-icon", "value"])], 2)) : (ne(), ce("div", { key: 0, class: ee(["v-inline-fields--container-display-container", s(B)]) }, [xe("div", { class: ee(s(T)) }, [xe("div", qi, [C.icons ? (ne(), ce("div", { key: 0, class: ee(["v-inline-fields--container-display-container-value-icons", s(P)]), style: Ve(s($)), onClick: S }, [c(s(la), { modelValue: s(x), "onUpdate:modelValue": _[0] || (_[0] = (L) => nt(x) ? x.value = L : null), "icon-false": s(l).iconFalse, "icon-false-color": s(l).iconFalseColor, "icon-false-title": s(l).iconFalseTitle, "icon-true": s(l).iconTrue, "icon-true-color": s(l).iconTrueColor, "icon-true-title": s(l).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (ne(), ce("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", s(P)]), style: Ve(s($)), onClick: S }, wt(s(x)), 7))])], 2)], 2))], 6));
} }), Gi = { class: "v-inline-fields--display-wrapper" }, Ki = ((e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of n)
    t[o] = a;
  return t;
})(Ge({ __name: "VInlineSelect", props: $e(St({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ya }), { modelValue: { type: Boolean } }), emits: $e([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, o = st(e, "modelValue"), a = ut(), i = Ct(), r = re(Symbol.for("vuetify:icons"));
  let l = Le({ ...a, ...t });
  const u = v(() => t.loading), p = j(!1), m = j(!1), d = j(), f = j(!1), g = j(null);
  let y = o.value;
  const x = v(() => l);
  U(() => u.value, (V, M) => {
    !V && M && f.value && O();
  });
  const h = v(() => Oe({ icon: t.clearIcon, iconOptions: r, name: "clear" })), B = v(() => o.value && o.value[l.itemTitle] ? (p.value = !1, o.value[l.itemTitle]) : (o.value = "", p.value = !0, l.emptyText));
  qe(() => {
    d.value = l.items || [];
  });
  const T = v(() => qt({ density: l.density, disabled: l.disabled, field: "v-select", iconSet: r == null ? void 0 : r.defaultSet, loading: u.value, loadingWait: l.loadingWait, tableField: l.tableField })), I = v(() => Ut({ density: l.density, field: "v-select" })), P = pl({ density: l.density, variant: l.variant }), D = v(() => Kt({ active: f.value, name: "select" })), $ = v(() => Gt("select", l.valueColor, { empty: p, error: m })), k = v(() => Xt({ alignItems: l.alignItems })), S = v(() => Jt({ color: l.color, error: m, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined }));
  function b() {
    m.value = !1, o.value = y, O();
  }
  function O() {
    if (l.disabled || l.loadingWait && u.value)
      return;
    const V = Yt({ attrs: a, closeSiblings: l.closeSiblings, fieldOnly: l.fieldOnly, props: t, showField: f, timeOpened: g.value });
    l = { ...l, ...V.settings }, f.value = V.showField, g.value = V.timeOpened, L !== null && l.closeSiblings && f.value && !l.fieldOnly && L.emit(V.timeOpened);
  }
  const w = j(), A = v(() => w.value);
  function C() {
    const V = fl({ required: l.required, rules: l.rules, value: o });
    return m.value = V.errors, w.value = V.results, V.results;
  }
  function _() {
    y = o.value, n("update", o.value), l.loadingWait || O();
  }
  let L, z;
  function E(V) {
    n("update:closeSiblingFields", g), f.value && g.value !== V && b();
  }
  return U(() => f.value, () => {
    f.value && C();
  }), U(() => o.value, () => {
    f.value && C();
  }), l.closeSiblings && import("@vueuse/core").then(({ useEventBus: V }) => {
    L = V(Ot), z = L.on(E);
  }), xt(() => {
    z !== void 0 && L.off(E);
  }), (V, M) => (ne(), ce("div", { class: ee(s(T)), style: Ve(s(k)) }, [s(f) || s(l).fieldOnly ? (ne(), ce("div", { key: 1, class: ee(s(D)) }, [c(Wi, G(s(x), { modelValue: o.value, "onUpdate:modelValue": M[0] || (M[0] = (N) => o.value = N), autofocus: !s(l).fieldOnly || s(l).autofocus, "clear-icon": s(h), clearable: s(l).clearable, color: s(l).color, density: s(l).density, disabled: s(u), error: s(m), "error-messages": s(A), "hide-details": s(l).hideDetails, "hide-selected": s(l).hideSelected, "item-title": s(l).itemTitle, "item-value": s(l).itemValue, items: s(d), label: s(l).label, loading: s(u), menu: s(l).menu && !s(l).fieldOnly, variant: s(l).variant, width: "100%", onKeyup: on(b, ["esc"]) }), kt({ _: 2 }, [Vt(s(i), (N, q) => ({ name: q, fn: Ce((F) => [Bt(V.$slots, q, It(_t({ ...F })), void 0, !0)]) })), s(i).append ? void 0 : { name: "append", fn: Ce(() => [c(s(xn), { "cancel-button-color": s(l).cancelButtonColor, "cancel-button-size": s(l).cancelButtonSize, "cancel-button-title": s(l).cancelButtonTitle, "cancel-button-variant": s(l).cancelButtonVariant, "cancel-icon": s(l).cancelIcon, "cancel-icon-color": s(l).cancelIconColor, error: s(m), "field-only": s(l).fieldOnly, "hide-save-icon": s(l).hideSaveIcon, loading: s(u), "loading-icon": s(l).loadingIcon, "loading-icon-color": s(l).loadingIconColor, "save-button-color": s(l).saveButtonColor, "save-button-size": s(l).saveButtonSize, "save-button-title": s(l).saveButtonTitle, "save-button-variant": s(l).saveButtonVariant, "save-icon": s(l).saveIcon, "save-icon-color": s(l).saveIconColor, onClose: b, onSave: _ }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 2)) : (ne(), ce("div", { key: 0, class: ee(s(I)) }, [xe("div", { class: ee(s(P)) }, [xe("div", Gi, [xe("div", { class: ee(["d-inline-flex", s($)]), style: Ve(s(S)), onClick: O }, wt(s(B)), 7)])], 2)], 2))], 6));
} }), [["__scopeId", "data-v-549e17b9"]]), Yi = { class: "v-selection-control__wrapper" }, Xi = Ge({ __name: "VInlineSwitch", props: $e(St({ density: {}, falseIcon: {}, alignItems: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ha }), { modelValue: { type: Boolean } }), emits: $e([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, o = st(e, "modelValue"), a = ut(), i = Ct(), r = re(Symbol.for("vuetify:icons"));
  let l = Le({ ...a, ...t });
  const u = v(() => t.loading), p = j(!1), m = j(!1), d = j(null), f = v(() => l);
  U(() => u.value, (w, A) => {
    !w && A && m.value && $();
  });
  const g = v(() => Oe({ icon: l.cancelIcon, iconOptions: r, name: "false" })), y = v(() => o.value == l.trueValue), x = v(() => qt({ density: l.density, disabled: l.disabled, field: "v-switch", loading: u.value, loadingWait: l.loadingWait, tableField: l.tableField })), h = v(() => Ut({ density: l.density, field: "v-switch" })), B = oa({ density: l.density }), T = v(() => Kt({ active: m.value, name: "switch" })), I = v(() => Gt("switch", l.valueColor, { error: p })), P = v(() => Xt({ alignItems: l.alignItems })), D = v(() => Jt({ color: l.color, error: p, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined }));
  function $() {
    if (l.disabled || l.loadingWait && u.value)
      return;
    const w = Yt({ attrs: a, closeSiblings: l.closeSiblings, fieldOnly: l.fieldOnly, props: t, showField: m.value, timeOpened: d.value });
    l = { ...l, ...w.settings }, m.value = w.showField, d.value = w.timeOpened, S !== null && l.closeSiblings && m.value && !l.fieldOnly && S.emit(w.timeOpened);
  }
  function k(w) {
    o.value = w, n("update", w), l.loadingWait || $();
  }
  let S, b;
  function O(w) {
    n("update:closeSiblingFields", d), m.value && d.value !== w && $();
  }
  return l.closeSiblings && import("@vueuse/core").then(({ useEventBus: w }) => {
    S = w(Ot), b = S.on(O);
  }), xt(() => {
    b !== void 0 && S.off(O);
  }), (w, A) => (ne(), ce("div", { class: ee(s(x)), style: Ve(s(P)) }, [s(m) || s(l).fieldOnly ? (ne(), ce("div", { key: 1, class: ee(s(T)) }, [c(Ri, G(s(f), { modelValue: o.value, "onUpdate:modelValue": [A[1] || (A[1] = (C) => o.value = C), k], color: s(l).color, density: s(l).density, disabled: s(u), error: s(p), "false-icon": s(l).falseIcon, "false-value": s(l).falseValue, "hide-details": s(l).hideDetails, label: s(l).label, loading: s(u), value: s(l).trueValue }), kt({ _: 2 }, [Vt(s(i), (C, _) => ({ name: _, fn: Ce((L) => [Bt(w.$slots, _, It(_t({ ...L })))]) })), s(i).append ? void 0 : { name: "append", fn: Ce(() => [s(l).fieldOnly ? Xl("", !0) : (ne(), Ne(Mn, { key: 0, class: "ms-3", color: s(l).cancelButtonColor, icon: "", size: s(l).cancelButtonSize, title: s(l).cancelButtonTitle, variant: s(l).cancelButtonVariant, onClick: $ }, { default: Ce(() => [c(ue, { color: s(l).cancelIconColor, icon: s(g) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "value"])], 2)) : (ne(), ce("div", { key: 0, class: ee(s(h)) }, [xe("div", { class: ee(s(B)) }, [xe("div", Yi, [w.icons ? (ne(), ce("div", { key: 0, class: ee(s(I)), style: Ve(s(D)), onClick: $ }, [c(s(la), { modelValue: s(y), "onUpdate:modelValue": A[0] || (A[0] = (C) => nt(y) ? y.value = C : null), "icon-false": s(l).iconFalse, "icon-false-color": s(l).iconFalseColor, "icon-false-title": s(l).iconFalseTitle, "icon-true": s(l).iconTrue, "icon-true-color": s(l).iconTrueColor, "icon-true-title": s(l).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (ne(), ce("div", { key: 1, class: ee(["d-inline-flex align-center justify-center", s(I)]), style: Ve(s(D)), onClick: $ }, wt(s(y)), 7))])], 2)], 2))], 6));
} }), Ji = { class: "v-inline-fields--display-wrapper" }, Zi = Ge({ __name: "VInlineTextField", props: $e(St({ clearIcon: {}, density: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Sa }), { modelValue: { type: Boolean } }), emits: $e([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, o = st(e, "modelValue"), a = ut(), i = Ct(), r = re(Symbol.for("vuetify:icons"));
  let l = Le({ ...a, ...t });
  const u = v(() => t.loading), p = j(!1), m = j(!1), d = j(!1), f = j(null);
  let g = o.value;
  const y = v(() => l);
  U(() => u.value, (E, V) => {
    !E && V && d.value && b();
  });
  const x = v(() => Oe({ icon: t.clearIcon, iconOptions: r, name: "clear" })), h = v(() => o.value ? (p.value = !1, l.truncateLength ? aa({ length: l.truncateLength, suffix: l.truncateSuffix, text: o.value }) : o.value) : (p.value = !0, l.emptyText)), B = v(() => qt({ density: l.density, disabled: l.disabled, field: "v-text-field", iconSet: r == null ? void 0 : r.defaultSet, loading: u.value, loadingWait: l.loadingWait, tableField: l.tableField })), T = v(() => Ut({ density: l.density, field: "v-text-field" })), I = pl({ density: l.density, variant: l.variant }), P = v(() => Kt({ active: d.value, name: "text-field" })), D = v(() => Gt("text-field", l.valueColor, { empty: p, error: m })), $ = v(() => Xt({ alignItems: l.alignItems })), k = v(() => Jt({ color: l.color, error: m, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined }));
  function S() {
    m.value = !1, o.value = g, b();
  }
  function b() {
    if (l.disabled || l.loadingWait && u.value)
      return;
    const E = Yt({ attrs: a, closeSiblings: l.closeSiblings, fieldOnly: l.fieldOnly, props: t, showField: d, timeOpened: f.value });
    l = { ...l, ...E.settings }, d.value = E.showField, f.value = E.timeOpened, _ !== null && l.closeSiblings && d.value && !l.fieldOnly && _.emit(E.timeOpened);
  }
  const O = j(), w = v(() => O.value);
  function A() {
    const E = fl({ required: l.required, rules: l.rules, value: o });
    return m.value = E.errors, O.value = E.results, E.results;
  }
  function C() {
    m.value ? m.value = !0 : (g = o.value, n("update", o.value), l.loadingWait || b());
  }
  let _, L;
  function z(E) {
    n("update:closeSiblingFields", f), d.value && f.value !== E && S();
  }
  return U(() => d.value, () => {
    d.value && A();
  }), U(() => o.value, () => {
    d.value && A();
  }), l.closeSiblings && import("@vueuse/core").then(({ useEventBus: E }) => {
    _ = E(Ot), L = _.on(z);
  }), xt(() => {
    L !== void 0 && _.off(z);
  }), (E, V) => (ne(), ce("div", { class: ee(s(B)), style: Ve(s($)) }, [s(d) || s(l).fieldOnly ? (ne(), ce("div", { key: 1, class: ee(s(P)) }, [c(Gn, G(s(y), { modelValue: o.value, "onUpdate:modelValue": V[1] || (V[1] = (M) => o.value = M), autofocus: !s(l).fieldOnly || s(l).autofocus, "clear-icon": s(x), color: s(l).color, density: s(l).density, disabled: s(u), error: s(m), "error-messages": s(w), "hide-details": s(l).hideDetails, label: s(l).label, loading: s(u), variant: s(l).variant, width: "100%", onKeyup: [on(C, ["enter"]), on(S, ["esc"])] }), kt({ _: 2 }, [Vt(s(i), (M, N) => ({ name: N, fn: Ce((q) => [Bt(E.$slots, N, It(_t({ ...q })))]) })), s(i).append ? void 0 : { name: "append", fn: Ce(() => [c(s(xn), { modelValue: o.value, "onUpdate:modelValue": V[0] || (V[0] = (M) => o.value = M), "cancel-button-color": s(l).cancelButtonColor, "cancel-button-size": s(l).cancelButtonSize, "cancel-button-title": s(l).cancelButtonTitle, "cancel-button-variant": s(l).cancelButtonVariant, "cancel-icon": s(l).cancelIcon, "cancel-icon-color": s(l).cancelIconColor, error: s(m), "field-only": s(l).fieldOnly, "hide-save-icon": s(l).hideSaveIcon, loading: s(u), "loading-icon": s(l).loadingIcon, "loading-icon-color": s(l).loadingIconColor, required: s(l).required, "save-button-color": s(l).saveButtonColor, "save-button-size": s(l).saveButtonSize, "save-button-title": s(l).saveButtonTitle, "save-button-variant": s(l).saveButtonVariant, "save-icon": s(l).saveIcon, "save-icon-color": s(l).saveIconColor, onClose: S, onSave: C }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant", "onKeyup"])], 2)) : (ne(), ce("div", { key: 0, class: ee(s(T)) }, [xe("div", { class: ee(s(I)) }, [xe("div", Ji, [xe("div", { class: ee(["d-inline-flex", s(D)]), style: Ve(s(k)), onClick: b }, wt(s(h)), 7)])], 2)], 2))], 6));
} }), Qi = { class: "v-inline-fields--container-display-container-fields" }, Fe = { VInlineCheckbox: Ui, VInlineSelect: Ki, VInlineSwitch: Xi, VInlineTextField: Zi, VInlineTextarea: Ge({ __name: "VInlineTextarea", props: $e(St({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ba }), { modelValue: { type: Boolean } }), emits: $e([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, o = st(e, "modelValue"), a = ut(), i = Ct(), r = re(Symbol.for("vuetify:icons"));
  let l = Le({ ...a, ...t });
  const u = v(() => t.loading), p = j(!1), m = j(!1), d = j(!1), f = j(null);
  let g = o.value;
  const y = v(() => l);
  U(() => u.value, (E, V) => {
    !E && V && d.value && b();
  });
  const x = v(() => Oe({ icon: t.clearIcon, iconOptions: r, name: "clear" })), h = v(() => o.value ? (p.value = !1, l.truncateLength ? aa({ length: l.truncateLength, suffix: l.truncateSuffix, text: o.value }) : o.value) : (p.value = !0, l.emptyText)), B = v(() => qt({ density: l.density, disabled: l.disabled, field: "v-textarea", iconSet: r == null ? void 0 : r.defaultSet, loading: u.value, loadingWait: l.loadingWait, tableField: l.tableField })), T = v(() => Ut({ density: l.density, field: "v-textarea" })), I = pl({ density: l.density, variant: l.variant }), P = v(() => Kt({ active: d.value, name: "textarea" })), D = v(() => Gt("textarea", l.valueColor, { empty: p, error: m })), $ = v(() => Xt({ alignItems: l.alignItems })), k = v(() => Jt({ color: l.color, error: m, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined }));
  function S() {
    m.value = !1, o.value = g, b();
  }
  function b() {
    if (l.disabled || l.loadingWait && u.value)
      return;
    const E = Yt({ attrs: a, closeSiblings: l.closeSiblings, fieldOnly: l.fieldOnly, props: t, showField: d, timeOpened: f.value });
    l = { ...l, ...E.settings }, d.value = E.showField, f.value = E.timeOpened, _ !== null && l.closeSiblings && d.value && !l.fieldOnly && _.emit(E.timeOpened);
  }
  const O = j(), w = v(() => O.value);
  function A() {
    const E = fl({ required: l.required, rules: l.rules, value: o });
    return m.value = E.errors, O.value = E.results, E.results;
  }
  function C() {
    g = o.value, n("update", o.value), l.loadingWait || b();
  }
  let _, L;
  function z(E) {
    n("update:closeSiblingFields", f), d.value && f.value !== E && S();
  }
  return U(() => d.value, () => {
    d.value && A();
  }), U(() => o.value, () => {
    d.value && A();
  }), l.closeSiblings && import("@vueuse/core").then(({ useEventBus: E }) => {
    _ = E(Ot), L = _.on(z);
  }), xt(() => {
    L !== void 0 && _.off(z);
  }), (E, V) => (ne(), ce("div", { class: ee(s(B)), style: Ve(s($)) }, [s(d) || s(l).fieldOnly ? (ne(), ce("div", { key: 1, class: ee(s(P)) }, [c(Hi, G(s(y), { modelValue: o.value, "onUpdate:modelValue": V[0] || (V[0] = (M) => o.value = M), "auto-grow": s(l).autoGrow, autofocus: !s(l).fieldOnly || s(l).autofocus, "clear-icon": s(x), color: s(l).color, density: s(l).density, disabled: s(u), error: s(m), "error-messages": s(w), "hide-details": s(l).hideDetails, label: s(l).label, loading: s(u), rows: s(l).rows, variant: s(l).variant, width: "100%", onKeyup: on(S, ["esc"]) }), kt({ _: 2 }, [Vt(s(i), (M, N) => ({ name: N, fn: Ce((q) => [Bt(E.$slots, N, It(_t({ ...q })))]) })), s(i).append ? void 0 : { name: "append", fn: Ce(() => [c(s(xn), { "cancel-button-color": s(l).cancelButtonColor, "cancel-button-size": s(l).cancelButtonSize, "cancel-button-title": s(l).cancelButtonTitle, "cancel-button-variant": s(l).cancelButtonVariant, "cancel-icon": s(l).cancelIcon, "cancel-icon-color": s(l).cancelIconColor, error: s(m), "field-only": s(l).fieldOnly, "hide-save-icon": s(l).hideSaveIcon, loading: s(u), "loading-icon": s(l).loadingIcon, "loading-icon-color": s(l).loadingIconColor, "save-button-color": s(l).saveButtonColor, "save-button-size": s(l).saveButtonSize, "save-button-title": s(l).saveButtonTitle, "save-button-variant": s(l).saveButtonVariant, "save-icon": s(l).saveIcon, "save-icon-color": s(l).saveIconColor, onClose: S, onSave: C }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 2)) : (ne(), ce("div", { key: 0, class: ee(["v-inline-fields--container-display-container", s(T)]) }, [xe("div", { class: ee(s(I)) }, [xe("div", Qi, [xe("div", { class: ee(["d-inline-flex align-center justify-center", s(D)]), style: Ve(s(k)), onClick: b }, wt(s(h)), 7)])], 2)], 2))], 6));
} }) }, er = (e) => {
  for (const n in Fe) {
    const t = Fe[n];
    e.component(t.name, t);
  }
};
for (const e in Fe)
  Fe[e].install = er;
const nr = Fe.VInlineCheckbox, lr = Fe.VInlineSelect, or = Fe.VInlineSwitch, ar = Fe.VInlineTextField, ir = Fe.VInlineTextarea, rr = { VInlineFields: Fe };
export {
  nr as VInlineCheckbox,
  lr as VInlineSelect,
  or as VInlineSwitch,
  ar as VInlineTextField,
  ir as VInlineTextarea,
  rr as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-switch .v-label{padding-inline-start:10px}.v-switch__loader{display:flex}.v-switch__track,.v-switch__thumb{background-color:currentColor;transition:none}.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__track,.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__thumb{background-color:rgb(var(--v-theme-error))}.v-selection-control--dirty .v-switch__thumb{color:currentColor}.v-switch__track{border-radius:8px;height:14px;opacity:.6;width:36px;cursor:pointer}.v-switch--inset .v-switch__track{border-radius:14px;height:28px;width:48px}.v-switch__thumb{align-items:center;border-radius:50%;color:rgb(var(--v-theme-surface));display:flex;height:20px;justify-content:center;width:20px;pointer-events:none;transition:.15s transform cubic-bezier(.4,0,.2,1);box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch--inset .v-switch__thumb{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch:not(.v-switch--loading) .v-icon~.v-switch__thumb{display:none}.v-switch--loading .v-selection-control__input>.v-icon{display:none}.v-switch .v-selection-control{min-height:var(--v-input-control-height)}.v-switch .v-selection-control__input{border-radius:50%;transition:.15s transform cubic-bezier(.4,0,.2,1);transform:translate(-10px);position:absolute}.v-switch .v-selection-control--dirty .v-selection-control__input{transform:translate(10px)}.v-switch.v-switch--indeterminate .v-selection-control__input{transform:scale(.8)}.v-switch.v-switch--indeterminate .v-switch__thumb{transform:scale(.75);box-shadow:none}.v-switch.v-switch--inset .v-selection-control__wrapper{width:auto}.v-textarea .v-field{--v-textarea-control-height: var(--v-input-control-height)}.v-textarea .v-field__field{--v-input-control-height: var(--v-textarea-control-height)}.v-textarea .v-field__input{flex:1 1 auto;outline:none;-webkit-mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px))}.v-textarea .v-field__input.v-textarea__sizer{visibility:hidden;position:absolute;top:0;left:0;height:0!important;min-height:0!important;pointer-events:none}.v-textarea--auto-grow .v-field__input{overflow:hidden}.v-textarea--no-resize .v-field__input{resize:none}.v-textarea .v-field--no-label textarea,.v-textarea .v-field--active textarea{opacity:1}.v-textarea textarea{opacity:0;flex:1;min-width:0;transition:.15s opacity cubic-bezier(.4,0,.2,1)}.v-textarea textarea:focus,.v-textarea textarea:active{outline:none}.v-textarea textarea:invalid{box-shadow:none}[data-v-549e17b9] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field__clearable,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field__clearable,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field__clearable,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field__clearable,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field__clearable,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field__clearable,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field__append-inner,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field__append-inner,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field__append-inner,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-input__append,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-input__append,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-input__append,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-input__append,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-input__append,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-input__append{align-items:flex-end!important;padding-bottom:8px!important;padding-top:0!important}.v-inline-fields--container{display:flex;height:100%}.v-inline-fields--container-disabled .v-inline-fields--display-wrapper-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-wrapper-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:center}.v-inline-fields--container-table{--v-inline-fields-top-padding-compact: 0;--v-inline-fields-top-padding-comfortable: 0;--v-inline-fields-top-padding-default: 0}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{min-height:unset!important}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable{line-height:1rem}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-default .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-input__control{padding-bottom:3px}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field__append-inner{padding:0 0 6px!important}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-top:0}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input{padding-bottom:7px}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-bottom:2px}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-bottom:0}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input{padding-top:4px}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-top:1px}.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{max-width:100%;overflow:hidden}.v-inline-fields--display-wrapper-value{cursor:pointer;padding-bottom:1px}.v-inline-fields--display-wrapper-value-empty{color:#909090;font-style:italic}.v-inline-fields--field-checkbox .v-input,.v-inline-fields--field-switch .v-input{display:flex}.v-inline-fields--field-checkbox .v-input__append,.v-inline-fields--field-switch .v-input__append{margin-left:0}.v-inline-fields--field-checkbox :deep(.v-input__control),.v-inline-fields--field-switch :deep(.v-input__control){display:inline-flex!important}.v-inline-fields--field-select,.v-inline-fields--field-textarea,.v-inline-fields--field-text-field{width:100%}.v-inline-fields--field-select .v-input__append,.v-inline-fields--field-textarea .v-input__append,.v-inline-fields--field-text-field .v-input__append{margin-left:.1rem}.v-inline-fields--save-fields-container{height:100%}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
