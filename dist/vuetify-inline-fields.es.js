import { Fragment as pe, reactive as Le, computed as p, watchEffect as He, toRefs as Kl, capitalize as Yl, warn as gn, watch as q, onScopeDispose as Se, effectScope as Gn, inject as ue, ref as N, unref as u, provide as Ae, shallowRef as oe, defineComponent as Ue, camelize as Xl, h as yn, getCurrentInstance as ua, onBeforeUnmount as Ge, readonly as Kn, toRaw as We, TransitionGroup as ca, Transition as et, createVNode as c, mergeProps as G, onBeforeMount as Jl, nextTick as ge, withDirectives as fe, resolveDirective as De, vShow as rt, isRef as tt, onMounted as bt, toRef as Y, Text as da, resolveDynamicComponent as va, Teleport as pa, cloneVNode as fa, createTextVNode as ma, vModelText as ga, mergeModels as Oe, useModel as st, openBlock as le, createBlock as it, useAttrs as ut, createElementBlock as ce, withCtx as ye, normalizeClass as te, createCommentVNode as Yn, mergeDefaults as St, useSlots as Ct, onUnmounted as xt, normalizeStyle as Ve, createElementVNode as xe, toDisplayString as wt, createSlots as kt, renderList as Vt, renderSlot as Bt, normalizeProps as It, guardReactiveProps as _t, withKeys as on } from "vue";
/**
 * @name vuetify-inline-fields
 * @version 1.0.0-beta-1.2
 * @description Vuetify's Inline Form Fields Component Library offers a comprehensive collection of reusable UI components designed to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Ot = Symbol("identifier"), $t = { alignItems: "center", cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "tonal", cancelIcon: void 0, cancelIconColor: "default", closeSiblings: !1, color: "primary", density: "compact", disabled: !1, emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Xn = { autofocus: !0 }, Jn = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, Zl = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, ya = { ...$t, ...Zl, falseIcon: void 0, icons: !0, trueIcon: void 0 }, ha = { ...$t, ...Xn, ...Jn, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, ba = { ...$t, ...Zl, icons: !0, falseIcon: "" }, Sa = { ...Xn, ...Jn, ...$t, autoGrow: !0, rows: 1, variant: "underlined" }, Ca = { ...$t, ...Xn, ...Jn, variant: "underlined" }, xa = { fa: { checkboxFalse: "far fa-square", checkboxTrue: "far fa-square-check", clear: "fa-circle-xmark", false: "fa-xmark", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "fa-check" }, mdi: { checkboxFalse: "mdi:mdi-checkbox-blank-outline", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "mdi-close-circle-outline", false: "mdi-close", loading: "mdi-loading", save: "mdi-content-save", true: "mdi-check" } }, Te = (e) => {
  const { icon: n, iconOptions: t, name: l } = e;
  if (n)
    return n;
  const o = xa[t == null ? void 0 : t.defaultSet];
  if (!o)
    throw new Error(`VInlineFields: No VInlineFields default ${t == null ? void 0 : t.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const r = o[l];
  if (!r)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return r;
};
function D(e, n) {
  return (t) => Object.keys(e).reduce((l, o) => {
    const r = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = t && o in t ? { ...r, default: t[o] } : r, n && !l[o].source && (l[o].source = n), l;
  }, {});
}
const ae = D({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function yl(e, n, t) {
  const l = n.length - 1;
  if (l < 0)
    return e === void 0 ? t : e;
  for (let o = 0; o < l; o++) {
    if (e == null)
      return t;
    e = e[n[o]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function ct(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => ct(e[l], n[l]));
}
function Pe(e, n, t) {
  if (n == null)
    return e === void 0 ? t : e;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const o = n(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof n == "string")
    return function(o, r, i) {
      return o != null && r && typeof r == "string" ? o[r] !== void 0 ? o[r] : yl(o, (r = (r = r.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), i) : i;
    }(e, n, t);
  if (Array.isArray(n))
    return yl(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function Z(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function $n(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function An(e) {
  return e && "$el" in e ? e.$el : e;
}
const hl = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function At(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const r in e)
    n.some((i) => i instanceof RegExp ? i.test(r) : i === r) && !(t != null && t.some((i) => i === r)) ? l[r] = e[r] : o[r] = e[r];
  return [l, o];
}
function Zn(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
function Tt(e) {
  return At(e, ["class", "style", "id", /^data-/]);
}
function je(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Tn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function lt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in n) {
    const r = e[o], i = n[o];
    $n(r) && $n(i) ? l[o] = lt(r, i, t) : Array.isArray(r) && Array.isArray(i) && t ? l[o] = t(r, i) : l[o] = i;
  }
  return l;
}
function Ql(e) {
  return e.map((n) => n.type === pe ? Ql(n.children) : n).flat();
}
function Ze() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (Ze.cache.has(e))
    return Ze.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return Ze.cache.set(e, n), n;
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
function Qn(e) {
  const n = Le({}), t = p(e);
  return He(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), Kl(n);
}
function an(e, n) {
  return e.includes(n);
}
Ze.cache = /* @__PURE__ */ new Map();
const wa = /^on[^a-z]/, En = (e) => wa.test(e);
function bl(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ee = () => [Function, Array];
function Sl(e, n) {
  return !!(e[n = "on" + Yl(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function eo(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const o of e)
      o(...t);
  else
    typeof e == "function" && e(...t);
}
function rn(e, n) {
  var o, r, i;
  const t = function(a) {
    const s = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((d) => `${d}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...a.querySelectorAll(s)];
  }(e), l = t.indexOf(document.activeElement);
  if (n)
    if (n === "first")
      (o = t[0]) == null || o.focus();
    else if (n === "last")
      (r = t.at(-1)) == null || r.focus();
    else {
      let a, s = l;
      const d = n === "next" ? 1 : -1;
      do
        s += d, a = t[s];
      while ((!a || a.offsetParent == null) && s < t.length && s >= 0);
      a ? a.focus() : rn(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((i = t[0]) == null || i.focus());
}
const to = ["top", "bottom"], ka = ["start", "end", "left", "right"];
function Fn(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = an(to, t) ? "start" : an(ka, t) ? "top" : "center"), { side: Cl(t, n), align: Cl(l, n) };
}
function Cl(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function wn(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function kn(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function xl(e) {
  return { side: e.align, align: e.side };
}
function wl(e) {
  return an(to, e.side) ? "y" : "x";
}
class at {
  constructor(n) {
    let { x: t, y: l, width: o, height: r } = n;
    this.x = t, this.y = l, this.width = o, this.height = r;
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
function kl(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function el(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let o, r, i, a, s;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), r = +o[0], i = +o[5], a = +o[12], s = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new at(n);
      o = l.slice(7, -1).split(/, /), r = +o[0], i = +o[3], a = +o[4], s = +o[5];
    }
    const d = t.transformOrigin, y = n.x - a - (1 - r) * parseFloat(d), v = n.y - s - (1 - i) * parseFloat(d.slice(d.indexOf(" ") + 1)), m = r ? n.width / r : e.offsetWidth + 1, f = i ? n.height / i : e.offsetHeight + 1;
    return new at({ x: y, y: v, width: m, height: f });
  }
  return new at(n);
}
function ot(e, n, t) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(n, t);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((o) => {
    l.onfinish = () => {
      o(l);
    };
  })), l;
}
const Qt = /* @__PURE__ */ new WeakMap();
function no(e) {
  gn(`Vuetify: ${e}`);
}
function Vl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function Qe(e, n) {
  let t;
  function l() {
    t = Gn(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  q(e, (o) => {
    o && !t ? l() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Se(() => {
    t == null || t.stop();
  });
}
const tl = Symbol.for("vuetify:defaults");
function nl() {
  const e = ue(tl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function dt(e, n) {
  const t = nl(), l = N(e), o = p(() => {
    if (u(n == null ? void 0 : n.disabled))
      return t.value;
    const r = u(n == null ? void 0 : n.scoped), i = u(n == null ? void 0 : n.reset), a = u(n == null ? void 0 : n.root);
    let s = lt(l.value, { prev: t.value });
    if (r)
      return s;
    if (i || a) {
      const d = Number(i || 1 / 0);
      for (let y = 0; y <= d && s && "prev" in s; y++)
        s = s.prev;
      return s && typeof a == "string" && a in s && (s = lt(lt(s, { prev: s }), s[a])), s;
    }
    return s.prev ? lt(s.prev, s) : s;
  });
  return Ae(tl, o), o;
}
function Va() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nl();
  const l = he("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = p(() => {
    var a;
    return (a = t.value) == null ? void 0 : a[e._as ?? n];
  }), r = new Proxy(e, { get(a, s) {
    var y, v, m, f;
    const d = Reflect.get(a, s);
    return s === "class" || s === "style" ? [(y = o.value) == null ? void 0 : y[s], d].filter((b) => b != null) : typeof s != "string" || function(b, x) {
      var S, V;
      return ((S = b.props) == null ? void 0 : S[x]) !== void 0 || ((V = b.props) == null ? void 0 : V[Ze(x)]) !== void 0;
    }(l.vnode, s) ? d : ((v = o.value) == null ? void 0 : v[s]) ?? ((f = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : f[s]) ?? d;
  } }), i = oe();
  return He(() => {
    if (o.value) {
      const a = Object.entries(o.value).filter((s) => {
        let [d] = s;
        return d.startsWith(d[0].toUpperCase());
      });
      a.length && (i.value = Object.fromEntries(a));
    }
  }), { props: r, provideSubDefaults: function() {
    Qe(i, () => {
      var a;
      dt(lt(((a = function(s) {
        const { provides: d } = he("injectSelf");
        if (d && s in d)
          return d[s];
      }(tl)) == null ? void 0 : a.value) ?? {}, i.value));
    });
  } };
}
function ft(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return no("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = D(e.props ?? {}, e.name)();
    const n = Object.keys(e.props);
    e.filterProps = function(t) {
      return At(t, n, ["class", "style"]);
    }, e.props._as = String, e.setup = function(t, l) {
      const o = nl();
      if (!o.value)
        return e._setup(t, l);
      const { props: r, provideSubDefaults: i } = Va(t, t._as ?? e.name, o), a = e._setup(r, l);
      return i(), a;
    };
  }
  return e;
}
function X() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? ft : Ue)(n);
}
function lo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return X()({ name: t ?? Yl(Xl(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ae() }, setup(l, o) {
    let { slots: r } = o;
    return () => {
      var i;
      return yn(l.tag, { class: [e, l.class], style: l.style }, (i = r.default) == null ? void 0 : i.call(r));
    };
  } });
}
function oo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const sn = "cubic-bezier(0.4, 0, 0.2, 1)";
function he(e, n) {
  const t = ua();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function Re() {
  const e = he(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return Ze((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ao = 0, nn = /* @__PURE__ */ new WeakMap();
function $e() {
  const e = he("getUid");
  if (nn.has(e))
    return nn.get(e);
  {
    const n = ao++;
    return nn.set(e, n), n;
  }
}
function un(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (ll(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function ll(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
$e.reset = () => {
  ao = 0, nn = /* @__PURE__ */ new WeakMap();
};
const _e = typeof window < "u", ol = _e && "IntersectionObserver" in window, Ln = _e && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function Q(e) {
  he("useRender").render = e;
}
function de(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const r = he("useProxiedModel"), i = N(e[n] !== void 0 ? e[n] : t), a = Ze(n), s = p(a !== n ? () => {
    var y, v, m, f;
    return e[n], !(!((y = r.vnode.props) != null && y.hasOwnProperty(n)) && !((v = r.vnode.props) != null && v.hasOwnProperty(a)) || !((m = r.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)) && !((f = r.vnode.props) != null && f.hasOwnProperty(`onUpdate:${a}`)));
  } : () => {
    var y, v;
    return e[n], !(!((y = r.vnode.props) != null && y.hasOwnProperty(n)) || !((v = r.vnode.props) != null && v.hasOwnProperty(`onUpdate:${n}`)));
  });
  Qe(() => !s.value, () => {
    q(() => e[n], (y) => {
      i.value = y;
    });
  });
  const d = p({ get() {
    const y = e[n];
    return l(s.value ? y : i.value);
  }, set(y) {
    const v = o(y), m = We(s.value ? e[n] : i.value);
    m !== v && l(m) !== y && (i.value = v, r == null || r.emit(`update:${n}`, v));
  } });
  return Object.defineProperty(d, "externalValue", { get: () => s.value ? e[n] : i.value }), d;
}
const io = Symbol.for("vuetify:locale");
function al() {
  const e = ue(io);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Et() {
  const e = ue(io);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Bl = Symbol.for("vuetify:theme"), me = D({ theme: String }, "theme");
function we(e) {
  he("provideTheme");
  const n = ue(Bl, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = p(() => e.theme ?? (n == null ? void 0 : n.name.value)), l = p(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), o = { ...n, name: t, themeClasses: l };
  return Ae(Bl, o), o;
}
const Be = D({ tag: { type: String, default: "div" } }, "tag"), Ba = D({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function be(e, n, t) {
  return X()({ name: e, props: Ba({ mode: t, origin: n }), setup(l, o) {
    let { slots: r } = o;
    const i = { onBeforeEnter(a) {
      l.origin && (a.style.transformOrigin = l.origin);
    }, onLeave(a) {
      if (l.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: d, offsetWidth: y, offsetHeight: v } = a;
        a._transitionInitialStyles = { position: a.style.position, top: a.style.top, left: a.style.left, width: a.style.width, height: a.style.height }, a.style.position = "absolute", a.style.top = `${s}px`, a.style.left = `${d}px`, a.style.width = `${y}px`, a.style.height = `${v}px`;
      }
      l.hideOnLeave && a.style.setProperty("display", "none", "important");
    }, onAfterLeave(a) {
      if (l.leaveAbsolute && (a != null && a._transitionInitialStyles)) {
        const { position: s, top: d, left: y, width: v, height: m } = a._transitionInitialStyles;
        delete a._transitionInitialStyles, a.style.position = s || "", a.style.top = d || "", a.style.left = y || "", a.style.width = v || "", a.style.height = m || "";
      }
    } };
    return () => {
      const a = l.group ? ca : et;
      return yn(a, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : i }, r.default);
    };
  } });
}
function ro(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return X()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, o) {
    let { slots: r } = o;
    return () => yn(et, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, r.default);
  } });
}
function so() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Xl(`offset-${n}`);
  return { onBeforeEnter(r) {
    r._parent = r.parentNode, r._initialStyle = { transition: r.style.transition, overflow: r.style.overflow, [n]: r.style[n] };
  }, onEnter(r) {
    const i = r._initialStyle;
    r.style.setProperty("transition", "none", "important"), r.style.overflow = "hidden";
    const a = `${r[t]}px`;
    r.style[n] = "0", r.offsetHeight, r.style.transition = i.transition, e && r._parent && r._parent.classList.add(e), requestAnimationFrame(() => {
      r.style[n] = a;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(r) {
    r._initialStyle = { transition: "", overflow: r.style.overflow, [n]: r.style[n] }, r.style.overflow = "hidden", r.style[n] = `${r[t]}px`, r.offsetHeight, requestAnimationFrame(() => r.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(r) {
    e && r._parent && r._parent.classList.remove(e), o(r);
  }
  function o(r) {
    const i = r._initialStyle[n];
    r.style.overflow = r._initialStyle.overflow, i != null && (r.style[n] = i), delete r._initialStyle;
  }
}
const Ia = D({ target: Object }, "v-dialog-transition"), uo = X()({ name: "VDialogTransition", props: Ia(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, r) {
    var m;
    await new Promise((f) => requestAnimationFrame(f)), await new Promise((f) => requestAnimationFrame(f)), o.style.visibility = "";
    const { x: i, y: a, sx: s, sy: d, speed: y } = _l(e.target, o), v = ot(o, [{ transform: `translate(${i}px, ${a}px) scale(${s}, ${d})`, opacity: 0 }, {}], { duration: 225 * y, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (m = Il(o)) == null || m.forEach((f) => {
      ot(f, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * y, easing: sn });
    }), v.finished.then(() => r());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, r) {
    var v;
    await new Promise((m) => requestAnimationFrame(m));
    const { x: i, y: a, sx: s, sy: d, speed: y } = _l(e.target, o);
    ot(o, [{}, { transform: `translate(${i}px, ${a}px) scale(${s}, ${d})`, opacity: 0 }], { duration: 125 * y, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => r()), (v = Il(o)) == null || v.forEach((m) => {
      ot(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * y, easing: sn });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? c(et, G({ name: "dialog-transition" }, l, { css: !1 }), t) : c(et, { name: "dialog-transition" }, t);
} });
function Il(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function _l(e, n) {
  const t = e.getBoundingClientRect(), l = el(n), [o, r] = getComputedStyle(n).transformOrigin.split(" ").map((V) => parseFloat(V)), [i, a] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  i === "left" || a === "left" ? s -= t.width / 2 : i !== "right" && a !== "right" || (s += t.width / 2);
  let d = t.top + t.height / 2;
  i === "top" || a === "top" ? d -= t.height / 2 : i !== "bottom" && a !== "bottom" || (d += t.height / 2);
  const y = t.width / l.width, v = t.height / l.height, m = Math.max(1, y, v), f = y / m || 0, b = v / m || 0, x = l.width * l.height / (window.innerWidth * window.innerHeight), S = x > 0.12 ? Math.min(1.5, 10 * (x - 0.12) + 1) : 1;
  return { x: s - (o + l.left), y: d - (r + l.top), sx: f, sy: b, speed: S };
}
be("fab-transition", "center center", "out-in"), be("dialog-bottom-transition"), be("dialog-top-transition"), be("fade-transition"), be("scale-transition"), be("scroll-x-transition"), be("scroll-x-reverse-transition"), be("scroll-y-transition"), be("scroll-y-reverse-transition"), be("slide-x-transition"), be("slide-x-reverse-transition");
const co = be("slide-y-transition");
be("slide-y-reverse-transition");
const _a = ro("expand-transition", so()), vo = ro("expand-x-transition", so("", !0)), Oa = D({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), ke = X(!1)({ name: "VDefaultsProvider", props: Oa(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: o, reset: r, root: i, scoped: a } = Kl(e);
  return dt(l, { reset: r, root: i, scoped: a, disabled: o }), () => {
    var s;
    return (s = t.default) == null ? void 0 : s.call(t);
  };
} }), Ft = D({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Lt(e) {
  return { dimensionStyles: p(() => ({ height: Z(e.height), maxHeight: Z(e.maxHeight), maxWidth: Z(e.maxWidth), minHeight: Z(e.minHeight), minWidth: Z(e.minWidth), width: Z(e.width) })) };
}
const po = D({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ae(), ...Ft() }, "VResponsive"), Ol = X()({ name: "VResponsive", props: po(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(r) {
    return { aspectStyles: p(() => {
      const i = Number(r.aspectRatio);
      return i ? { paddingBottom: String(1 / i * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Lt(e);
  return Q(() => {
    var r;
    return c("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [c("div", { class: "v-responsive__sizer", style: l.value }, null), (r = t.additional) == null ? void 0 : r.call(t), t.default && c("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), zt = D({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ne = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: o, ...r } = e, { component: i = et, ...a } = typeof l == "object" ? l : {};
  return yn(i, G(typeof l == "string" ? { name: o ? "" : l } : a, r, { disabled: o }), t);
};
function $l(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const il = { mounted: function(e, n) {
  if (!ol)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: o, options: r } = typeof l == "object" ? l : { handler: l, options: {} }, i = new IntersectionObserver(function() {
    var v;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const d = (v = e._observe) == null ? void 0 : v[n.instance.$.uid];
    if (!d)
      return;
    const y = a.some((m) => m.isIntersecting);
    !o || t.quiet && !d.init || t.once && !y && !d.init || o(y, a, s), y && t.once ? $l(e, n) : d.init = !0;
  }, r);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: i }, i.observe(e);
}, unmounted: $l }, $a = D({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...po(), ...ae(), ...zt() }, "VImg"), Aa = X()({ name: "VImg", directives: { intersect: il }, props: $a(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const o = oe(""), r = N(), i = oe(e.eager ? "loading" : "idle"), a = oe(), s = oe(), d = p(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = p(() => d.value.aspect || a.value / s.value || 0);
  function v(C) {
    if ((!e.eager || !C) && (!ol || C || e.eager)) {
      if (i.value = "loading", d.value.lazySrc) {
        const h = new Image();
        h.src = d.value.lazySrc, S(h, null);
      }
      d.value.src && ge(() => {
        var h, I;
        if (t("loadstart", ((h = r.value) == null ? void 0 : h.currentSrc) || d.value.src), (I = r.value) == null ? void 0 : I.complete) {
          if (r.value.naturalWidth || f(), i.value === "error")
            return;
          y.value || S(r.value, null), m();
        } else
          y.value || S(r.value), b();
      });
    }
  }
  function m() {
    var C;
    b(), i.value = "loaded", t("load", ((C = r.value) == null ? void 0 : C.currentSrc) || d.value.src);
  }
  function f() {
    var C;
    i.value = "error", t("error", ((C = r.value) == null ? void 0 : C.currentSrc) || d.value.src);
  }
  function b() {
    const C = r.value;
    C && (o.value = C.currentSrc || C.src);
  }
  q(() => e.src, () => {
    v(i.value !== "idle");
  }), q(y, (C, h) => {
    !C && h && r.value && S(r.value);
  }), Jl(() => v());
  let x = -1;
  function S(C) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const I = () => {
      clearTimeout(x);
      const { naturalHeight: w, naturalWidth: A } = C;
      w || A ? (a.value = A, s.value = w) : C.complete || i.value !== "loading" || h == null ? (C.currentSrc.endsWith(".svg") || C.currentSrc.startsWith("data:image/svg+xml")) && (a.value = 1, s.value = 1) : x = window.setTimeout(I, h);
    };
    I();
  }
  const V = p(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), T = () => {
    var I;
    if (!d.value.src || i.value === "idle")
      return null;
    const C = c("img", { class: ["v-img__img", V.value], src: d.value.src, srcset: d.value.srcset, alt: e.alt, sizes: e.sizes, ref: r, onLoad: m, onError: f }, null), h = (I = l.sources) == null ? void 0 : I.call(l);
    return c(Ne, { transition: e.transition, appear: !0 }, { default: () => [fe(h ? c("picture", { class: "v-img__picture" }, [h, C]) : C, [[rt, i.value === "loaded"]])] });
  }, B = () => c(Ne, { transition: e.transition }, { default: () => [d.value.lazySrc && i.value !== "loaded" && c("img", { class: ["v-img__img", "v-img__img--preload", V.value], src: d.value.lazySrc, alt: e.alt }, null)] }), L = () => l.placeholder ? c(Ne, { transition: e.transition, appear: !0 }, { default: () => [(i.value === "loading" || i.value === "error" && !l.error) && c("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, P = () => l.error ? c(Ne, { transition: e.transition, appear: !0 }, { default: () => [i.value === "error" && c("div", { class: "v-img__error" }, [l.error()])] }) : null, _ = () => e.gradient ? c("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, k = oe(!1);
  {
    const C = q(y, (h) => {
      h && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          k.value = !0;
        });
      }), C());
    });
  }
  return Q(() => {
    const [C] = Ol.filterProps(e);
    return fe(c(Ol, G({ class: ["v-img", { "v-img--booting": !k.value }, e.class], style: e.style }, C, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => c(pe, null, [c(T, null, null), c(B, null, null), c(_, null, null), c(L, null, null), c(P, null, null)]), default: l.default }), [[De("intersect"), { handler: v, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: o, image: r, state: i, naturalWidth: a, naturalHeight: s };
} }), Pt = D({ border: [Boolean, Number, String] }, "border");
function Dt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  return { borderClasses: p(() => {
    const t = tt(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
function rl(e) {
  return Qn(() => {
    const n = [], t = {};
    return e.value.background && (Vl(e.value.background) ? t.backgroundColor = e.value.background : n.push(`bg-${e.value.background}`)), e.value.text && (Vl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function Me(e, n) {
  const t = p(() => ({ text: tt(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = rl(t);
  return { textColorClasses: l, textColorStyles: o };
}
function mt(e, n) {
  const t = p(() => ({ background: tt(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = rl(t);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const Mt = D({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function Rt(e) {
  return { elevationClasses: p(() => {
    const n = tt(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Ke = D({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Ye(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  return { roundedClasses: p(() => {
    const t = tt(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const Ta = [null, "default", "comfortable", "compact"], Xe = D({ density: { type: String, default: "default", validator: (e) => Ta.includes(e) } }, "density");
function Je(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  return { densityClasses: p(() => `${n}--density-${e.density}`) };
}
const Ea = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function hn(e, n) {
  return c(pe, null, [e && c("span", { key: "overlay", class: `${n}__overlay` }, null), c("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const nt = D({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ea.includes(e) } }, "variant");
function bn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  const t = p(() => {
    const { variant: r } = u(e);
    return `${n}--variant-${r}`;
  }), { colorClasses: l, colorStyles: o } = rl(p(() => {
    const { variant: r, color: i } = u(e);
    return { [["elevated", "flat"].includes(r) ? "background" : "text"]: i };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: t };
}
const fo = D({ divided: Boolean, ...Pt(), ...ae(), ...Xe(), ...Mt(), ...Ke(), ...Be(), ...me(), ...nt() }, "VBtnGroup"), Al = X()({ name: "VBtnGroup", props: fo(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = we(e), { densityClasses: o } = Je(e), { borderClasses: r } = Dt(e), { elevationClasses: i } = Rt(e), { roundedClasses: a } = Ye(e);
  dt({ VBtn: { height: "auto", color: Y(e, "color"), density: Y(e, "density"), flat: !0, variant: Y(e, "variant") } }), Q(() => c(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, r.value, o.value, i.value, a.value, e.class], style: e.style }, t));
} }), mo = D({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), go = D({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function yo(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = he("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = $e();
  Ae(Symbol.for(`${n.description}:id`), o);
  const r = ue(n, null);
  if (!r) {
    if (!t)
      return r;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const i = Y(e, "value"), a = p(() => r.disabled.value || e.disabled);
  r.register({ id: o, value: i, disabled: a }, l), Ge(() => {
    r.unregister(o);
  });
  const s = p(() => r.isSelected(o)), d = p(() => s.value && [r.selectedClass.value, e.selectedClass]);
  return q(s, (y) => {
    l.emit("group:selected", { value: y });
  }), { id: o, isSelected: s, toggle: () => r.select(o, !s.value), select: (y) => r.select(o, y), selectedClass: d, value: i, disabled: a, group: r };
}
function ho(e, n) {
  let t = !1;
  const l = Le([]), o = de(e, "modelValue", [], (d) => d == null ? [] : Tl(l, je(d)), (d) => {
    const y = function(v, m) {
      const f = [];
      return m.forEach((b) => {
        const x = v.findIndex((S) => S.id === b);
        if (~x) {
          const S = v[x];
          f.push(S.value != null ? S.value : x);
        }
      }), f;
    }(l, d);
    return e.multiple ? y : y[0];
  }), r = he("useGroup");
  function i() {
    const d = l.find((y) => !y.disabled);
    d && e.mandatory === "force" && !o.value.length && (o.value = [d.id]);
  }
  function a(d) {
    if (e.multiple && no('This method is not supported when using "multiple" prop'), o.value.length) {
      const y = o.value[0], v = l.findIndex((b) => b.id === y);
      let m = (v + d) % l.length, f = l[m];
      for (; f.disabled && m !== v; )
        m = (m + d) % l.length, f = l[m];
      if (f.disabled)
        return;
      o.value = [l[m].id];
    } else {
      const y = l.find((v) => !v.disabled);
      y && (o.value = [y.id]);
    }
  }
  bt(() => {
    i();
  }), Ge(() => {
    t = !0;
  });
  const s = { register: function(d, y) {
    const v = d, m = tn(Symbol.for(`${n.description}:id`), r == null ? void 0 : r.vnode).indexOf(y);
    m > -1 ? l.splice(m, 0, v) : l.push(v);
  }, unregister: function(d) {
    if (t)
      return;
    i();
    const y = l.findIndex((v) => v.id === d);
    l.splice(y, 1);
  }, selected: o, select: function(d, y) {
    const v = l.find((m) => m.id === d);
    if (!y || !(v != null && v.disabled))
      if (e.multiple) {
        const m = o.value.slice(), f = m.findIndex((x) => x === d), b = ~f;
        if (y = y ?? !b, b && e.mandatory && m.length <= 1 || !b && e.max != null && m.length + 1 > e.max)
          return;
        f < 0 && y ? m.push(d) : f >= 0 && !y && m.splice(f, 1), o.value = m;
      } else {
        const m = o.value.includes(d);
        if (e.mandatory && m)
          return;
        o.value = y ?? !m ? [d] : [];
      }
  }, disabled: Y(e, "disabled"), prev: () => a(l.length - 1), next: () => a(1), isSelected: (d) => o.value.includes(d), selectedClass: p(() => e.selectedClass), items: p(() => l), getItemIndex: (d) => function(y, v) {
    const m = Tl(y, [v]);
    return m.length ? y.findIndex((f) => f.id === m[0]) : -1;
  }(l, d) };
  return Ae(n, s), s;
}
function Tl(e, n) {
  const t = [];
  return n.forEach((l) => {
    const o = e.find((i) => ct(l, i.value)), r = e[l];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : r != null && t.push(r.id);
  }), t;
}
const bo = Symbol.for("vuetify:v-btn-toggle"), Fa = D({ ...fo(), ...mo() }, "VBtnToggle");
X()({ name: "VBtnToggle", props: Fa(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: o, prev: r, select: i, selected: a } = ho(e, bo);
  return Q(() => {
    const [s] = Al.filterProps(e);
    return c(Al, G({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var d;
      return [(d = t.default) == null ? void 0 : d.call(t, { isSelected: l, next: o, prev: r, select: i, selected: a })];
    } });
  }), { next: o, prev: r, select: i };
} });
const ie = [String, Function, Object, Array], La = Symbol.for("vuetify:icons"), cn = D({ icon: { type: ie }, tag: { type: String, required: !0 } }, "icon"), El = X()({ name: "VComponentIcon", props: cn(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return c(e.tag, null, { default: () => {
      var o;
      return [e.icon ? c(l, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), za = ft({ name: "VSvgIcon", inheritAttrs: !1, props: cn(), setup(e, n) {
  let { attrs: t } = n;
  return () => c(e.tag, G(t, { style: null }), { default: () => [c("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? c("path", { d: l[0], "fill-opacity": l[1] }, null) : c("path", { d: l }, null)) : c("path", { d: e.icon }, null)])] });
} });
ft({ name: "VLigatureIcon", props: cn(), setup: (e) => () => c(e.tag, null, { default: () => [e.icon] }) }), ft({ name: "VClassIcon", props: cn(), setup: (e) => () => c(e.tag, { class: e.icon }, null) });
const Pa = ["x-small", "small", "default", "large", "x-large"], Nt = D({ size: { type: [String, Number], default: "default" } }, "size");
function Wt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  return Qn(() => {
    let t, l;
    return an(Pa, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: Z(e.size), height: Z(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const Da = D({ color: String, start: Boolean, end: Boolean, icon: ie, ...ae(), ...Nt(), ...Be({ tag: "i" }), ...me() }, "VIcon"), se = X()({ name: "VIcon", props: Da(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = N(), { themeClasses: r } = we(e), { iconData: i } = ((y) => {
    const v = ue(La);
    if (!v)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: p(() => {
      var S;
      const m = u(y);
      if (!m)
        return { component: El };
      let f = m;
      if (typeof f == "string" && (f = f.trim(), f.startsWith("$") && (f = (S = v.aliases) == null ? void 0 : S[f.slice(1)])), !f)
        throw new Error(`Could not find aliased icon "${m}"`);
      if (Array.isArray(f))
        return { component: za, icon: f };
      if (typeof f != "string")
        return { component: El, icon: f };
      const b = Object.keys(v.sets).find((V) => typeof f == "string" && f.startsWith(`${V}:`)), x = b ? f.slice(b.length + 1) : f;
      return { component: v.sets[b ?? v.defaultSet].component, icon: x };
    }) };
  })(p(() => o.value || e.icon)), { sizeClasses: a } = Wt(e), { textColorClasses: s, textColorStyles: d } = Me(Y(e, "color"));
  return Q(() => {
    var v, m;
    const y = (v = l.default) == null ? void 0 : v.call(l);
    return y && (o.value = (m = Ql(y).filter((f) => f.type === da && f.children && typeof f.children == "string")[0]) == null ? void 0 : m.children), c(i.value.component, { tag: e.tag, icon: i.value.icon, class: ["v-icon", "notranslate", r.value, a.value, s.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [a.value ? void 0 : { fontSize: Z(e.size), height: Z(e.size), width: Z(e.size) }, d.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [y] });
  }), {};
} });
function So(e, n) {
  const t = N(), l = oe(!1);
  if (ol) {
    const o = new IntersectionObserver((r) => {
      e == null || e(r, o), l.value = !!r.find((i) => i.isIntersecting);
    }, n);
    Ge(() => {
      o.disconnect();
    }), q(t, (r, i) => {
      i && (o.unobserve(i), l.value = !1), r && o.observe(r);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const Ma = D({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ae(), ...Nt(), ...Be({ tag: "div" }), ...me() }, "VProgressCircular"), Co = X()({ name: "VProgressCircular", props: Ma(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, o = N(), { themeClasses: r } = we(e), { sizeClasses: i, sizeStyles: a } = Wt(e), { textColorClasses: s, textColorStyles: d } = Me(Y(e, "color")), { textColorClasses: y, textColorStyles: v } = Me(Y(e, "bgColor")), { intersectionRef: m, isIntersecting: f } = So(), { resizeRef: b, contentRect: x } = function(_) {
    const k = N(), C = N();
    if (_e) {
      const h = new ResizeObserver((I) => {
        _ == null || _(I, h), I.length && (C.value = I[0].contentRect);
      });
      Ge(() => {
        h.disconnect();
      }), q(k, (I, w) => {
        w && (h.unobserve(An(w)), C.value = void 0), I && h.observe(An(I));
      }, { flush: "post" });
    }
    return { resizeRef: k, contentRect: Kn(C) };
  }(), S = p(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), V = p(() => Number(e.width)), T = p(() => a.value ? Number(e.size) : x.value ? x.value.width : Math.max(V.value, 32)), B = p(() => 20 / (1 - V.value / T.value) * 2), L = p(() => V.value / T.value * B.value), P = p(() => Z((100 - S.value) / 100 * l));
  return He(() => {
    m.value = o.value, b.value = o.value;
  }), Q(() => c(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": f.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, r.value, i.value, s.value, e.class], style: [a.value, d.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : S.value }, { default: () => [c("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${B.value} ${B.value}` }, [c("circle", { class: ["v-progress-circular__underlay", y.value], style: v.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": L.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), c("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": L.value, "stroke-dasharray": l, "stroke-dashoffset": P.value }, null)]), t.default && c("div", { class: "v-progress-circular__content" }, [t.default({ value: S.value })])] })), {};
} }), Fl = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, xo = D({ location: String }, "location");
function wo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Et();
  return { locationStyles: p(() => {
    if (!e.location)
      return {};
    const { side: r, align: i } = Fn(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function a(d) {
      return t ? t(d) : 0;
    }
    const s = {};
    return r !== "center" && (n ? s[Fl[r]] = `calc(100% - ${a(r)}px)` : s[r] = 0), i !== "center" ? n ? s[Fl[i]] = `calc(100% - ${a(i)}px)` : s[i] = 0 : (r === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[r]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[r]), s;
  }) };
}
const Ra = D({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ae(), ...xo({ location: "top" }), ...Ke(), ...Be(), ...me() }, "VProgressLinear"), Na = X()({ name: "VProgressLinear", props: Ra(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = de(e, "modelValue"), { isRtl: o, rtlClasses: r } = Et(), { themeClasses: i } = we(e), { locationStyles: a } = wo(e), { textColorClasses: s, textColorStyles: d } = Me(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: v } = mt(p(() => e.bgColor || e.color)), { backgroundColorClasses: m, backgroundColorStyles: f } = mt(e, "color"), { roundedClasses: b } = Ye(e), { intersectionRef: x, isIntersecting: S } = So(), V = p(() => parseInt(e.max, 10)), T = p(() => parseInt(e.height, 10)), B = p(() => parseFloat(e.bufferValue) / V.value * 100), L = p(() => parseFloat(l.value) / V.value * 100), P = p(() => o.value !== e.reverse), _ = p(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = p(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function C(h) {
    if (!x.value)
      return;
    const { left: I, right: w, width: A } = x.value.getBoundingClientRect(), g = P.value ? A - h.clientX + (w - A) : h.clientX - I;
    l.value = Math.round(g / A * V.value);
  }
  return Q(() => c(e.tag, { ref: x, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && S.value, "v-progress-linear--reverse": P.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, b.value, i.value, r.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? Z(T.value) : 0, "--v-progress-linear-height": Z(T.value), ...a.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : L.value, onClick: e.clickable && C }, { default: () => [e.stream && c("div", { key: "stream", class: ["v-progress-linear__stream", s.value], style: { ...d.value, [P.value ? "left" : "right"]: Z(-T.value), borderTop: `${Z(T.value / 2)} dotted`, opacity: k.value, top: `calc(50% - ${Z(T.value / 4)})`, width: Z(100 - B.value, "%"), "--v-progress-linear-stream-to": Z(T.value * (P.value ? 1 : -1)) } }, null), c("div", { class: ["v-progress-linear__background", y.value], style: [v.value, { opacity: k.value, width: Z(e.stream ? B.value : 100, "%") }] }, null), c(et, { name: _.value }, { default: () => [e.indeterminate ? c("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((h) => c("div", { key: h, class: ["v-progress-linear__indeterminate", h, m.value], style: f.value }, null))]) : c("div", { class: ["v-progress-linear__determinate", m.value], style: [f.value, { width: Z(L.value, "%") }] }, null)] }), t.default && c("div", { class: "v-progress-linear__content" }, [t.default({ value: L.value, buffer: B.value })])] })), {};
} }), ko = D({ loading: [Boolean, String] }, "loader");
function sl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  return { loaderClasses: p(() => ({ [`${n}--loading`]: e.loading })) };
}
function Vo(e, n) {
  var l;
  let { slots: t } = n;
  return c("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || c(Na, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const Wa = ["static", "relative", "fixed", "absolute", "sticky"], ja = D({ position: { type: String, validator: (e) => Wa.includes(e) } }, "position");
function ul(e, n) {
  const t = va("RouterLink"), l = p(() => !(!e.href && !e.to)), o = p(() => (l == null ? void 0 : l.value) || Sl(n, "click") || Sl(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: o, href: Y(e, "href") };
  const r = e.to ? t.useLink(e) : void 0;
  return { isLink: l, isClickable: o, route: r == null ? void 0 : r.route, navigate: r == null ? void 0 : r.navigate, isActive: r && p(() => {
    var i, a;
    return e.exact ? (i = r.isExactActive) == null ? void 0 : i.value : (a = r.isActive) == null ? void 0 : a.value;
  }), href: p(() => e.to ? r == null ? void 0 : r.route.value.href : e.href) };
}
const cl = D({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Vn = !1;
const zn = Symbol("rippleStop"), Ha = 80;
function Ll(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Pn(e) {
  return e.constructor.name === "TouchEvent";
}
function Bo(e) {
  return e.constructor.name === "KeyboardEvent";
}
const dn = { show(e, n) {
  var f;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((f = n == null ? void 0 : n._ripple) != null && f.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: r, scale: i, x: a, y: s, centerX: d, centerY: y } = function(b, x) {
    var k;
    let S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, V = 0, T = 0;
    if (!Bo(b)) {
      const C = x.getBoundingClientRect(), h = Pn(b) ? b.touches[b.touches.length - 1] : b;
      V = h.clientX - C.left, T = h.clientY - C.top;
    }
    let B = 0, L = 0.3;
    (k = x._ripple) != null && k.circle ? (L = 0.15, B = x.clientWidth / 2, B = S.center ? B : B + Math.sqrt((V - B) ** 2 + (T - B) ** 2) / 4) : B = Math.sqrt(x.clientWidth ** 2 + x.clientHeight ** 2) / 2;
    const P = (x.clientWidth - 2 * B) / 2 + "px", _ = (x.clientHeight - 2 * B) / 2 + "px";
    return { radius: B, scale: L, x: S.center ? P : V - B + "px", y: S.center ? _ : T - B + "px", centerX: P, centerY: _ };
  }(e, n, t), v = 2 * r + "px";
  o.className = "v-ripple__animation", o.style.width = v, o.style.height = v, n.appendChild(l);
  const m = window.getComputedStyle(n);
  m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Ll(o, `translate(${a}, ${s}) scale3d(${i},${i},${i})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Ll(o, `translate(${d}, ${y}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var r;
  if (!((r = e == null ? void 0 : e._ripple) != null && r.enabled))
    return;
  const n = e.getElementsByClassName("v-ripple__animation");
  if (n.length === 0)
    return;
  const t = n[n.length - 1];
  if (t.dataset.isHiding)
    return;
  t.dataset.isHiding = "true";
  const l = performance.now() - Number(t.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var i;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((i = t.parentNode) == null ? void 0 : i.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, o);
} };
function Io(e) {
  return e === void 0 || !!e;
}
function gt(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[zn]) {
    if (e[zn] = !0, Pn(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Bo(e), t._ripple.class && (n.class = t._ripple.class), Pn(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        dn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, Ha);
    } else
      dn.show(e, t, n);
  }
}
function zl(e) {
  e[zn] = !0;
}
function Ce(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Ce(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), dn.hide(n);
  }
}
function _o(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let yt = !1;
function Oo(e) {
  yt || e.keyCode !== hl.enter && e.keyCode !== hl.space || (yt = !0, gt(e));
}
function $o(e) {
  yt = !1, Ce(e);
}
function Ao(e) {
  yt && (yt = !1, Ce(e));
}
function Pl(e, n, t) {
  const { value: l, modifiers: o } = n, r = Io(l);
  if (r || dn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = r, e._ripple.centered = o.center, e._ripple.circle = o.circle, $n(l) && l.class && (e._ripple.class = l.class), r && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", zl, { passive: !0 }), void e.addEventListener("mousedown", zl);
    e.addEventListener("touchstart", gt, { passive: !0 }), e.addEventListener("touchend", Ce, { passive: !0 }), e.addEventListener("touchmove", _o, { passive: !0 }), e.addEventListener("touchcancel", Ce), e.addEventListener("mousedown", gt), e.addEventListener("mouseup", Ce), e.addEventListener("mouseleave", Ce), e.addEventListener("keydown", Oo), e.addEventListener("keyup", $o), e.addEventListener("blur", Ao), e.addEventListener("dragstart", Ce, { passive: !0 });
  } else
    !r && t && To(e);
}
function To(e) {
  e.removeEventListener("mousedown", gt), e.removeEventListener("touchstart", gt), e.removeEventListener("touchend", Ce), e.removeEventListener("touchmove", _o), e.removeEventListener("touchcancel", Ce), e.removeEventListener("mouseup", Ce), e.removeEventListener("mouseleave", Ce), e.removeEventListener("keydown", Oo), e.removeEventListener("keyup", $o), e.removeEventListener("dragstart", Ce), e.removeEventListener("blur", Ao);
}
const Sn = { mounted: function(e, n) {
  Pl(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, To(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Pl(e, n, Io(n.oldValue));
} }, qa = D({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: bo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ie, appendIcon: ie, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Pt(), ...ae(), ...Xe(), ...Ft(), ...Mt(), ...go(), ...ko(), ...xo(), ...ja(), ...Ke(), ...cl(), ...Nt(), ...Be({ tag: "button" }), ...me(), ...nt({ variant: "elevated" }) }, "VBtn"), vn = X()({ name: "VBtn", directives: { Ripple: Sn }, props: qa(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = we(e), { borderClasses: r } = Dt(e), { colorClasses: i, colorStyles: a, variantClasses: s } = bn(e), { densityClasses: d } = Je(e), { dimensionStyles: y } = Lt(e), { elevationClasses: v } = Rt(e), { loaderClasses: m } = sl(e), { locationStyles: f } = wo(e), { positionClasses: b } = function(h) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
    return { positionClasses: p(() => h.position ? `${I}--${h.position}` : void 0) };
  }(e), { roundedClasses: x } = Ye(e), { sizeClasses: S, sizeStyles: V } = Wt(e), T = yo(e, e.symbol, !1), B = ul(e, t), L = p(() => {
    var h;
    return e.active !== void 0 ? e.active : B.isLink.value ? (h = B.isActive) == null ? void 0 : h.value : T == null ? void 0 : T.isSelected.value;
  }), P = p(() => (T == null ? void 0 : T.disabled.value) || e.disabled), _ = p(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = p(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function C(h) {
    var I;
    P.value || ((I = B.navigate) == null || I.call(B, h), T == null || T.toggle());
  }
  return function(h, I) {
    q(() => {
      var w;
      return (w = h.isActive) == null ? void 0 : w.value;
    }, (w) => {
      h.isLink.value && w && I && ge(() => {
        I(!0);
      });
    }, { immediate: !0 });
  }(B, T == null ? void 0 : T.select), Q(() => {
    var O, z;
    const h = B.isLink.value ? "a" : e.tag, I = !(!e.prependIcon && !l.prepend), w = !(!e.appendIcon && !l.append), A = !(!e.icon || e.icon === !0), g = (T == null ? void 0 : T.isSelected.value) && (!B.isLink.value || ((O = B.isActive) == null ? void 0 : O.value)) || !T || ((z = B.isActive) == null ? void 0 : z.value);
    return fe(c(h, { type: h === "a" ? void 0 : "button", class: ["v-btn", T == null ? void 0 : T.selectedClass.value, { "v-btn--active": L.value, "v-btn--block": e.block, "v-btn--disabled": P.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, o.value, r.value, g ? i.value : void 0, d.value, v.value, m.value, b.value, x.value, S.value, s.value, e.class], style: [g ? a.value : void 0, y.value, f.value, V.value, e.style], disabled: P.value || void 0, href: B.href.value, onClick: C, value: k.value }, { default: () => {
      var $;
      return [hn(!0, "v-btn"), !e.icon && I && c("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? c(ke, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : c(se, { key: "prepend-icon", icon: e.prependIcon }, null)]), c("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && A ? c(se, { key: "content-icon", icon: e.icon }, null) : c(ke, { key: "content-defaults", disabled: !A, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var M;
        return [((M = l.default) == null ? void 0 : M.call(l)) ?? e.text];
      } })]), !e.icon && w && c("span", { key: "append", class: "v-btn__append" }, [l.append ? c(ke, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : c(se, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && c("span", { key: "loader", class: "v-btn__loader" }, [(($ = l.loader) == null ? void 0 : $.call(l)) ?? c(Co, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[De("ripple"), !P.value && e.ripple, null]]);
  }), {};
} }), Ua = D({ text: String, clickable: Boolean, ...ae(), ...me() }, "VLabel"), Eo = X()({ name: "VLabel", props: Ua(), setup(e, n) {
  let { slots: t } = n;
  return Q(() => {
    var l;
    return c("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Fo = Symbol.for("vuetify:selection-control-group"), Lo = D({ color: String, disabled: Boolean, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ie, trueIcon: ie, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: ct }, ...ae(), ...Xe(), ...me() }, "SelectionControlGroup"), Ga = D({ ...Lo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
X()({ name: "VSelectionControlGroup", props: Ga(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = de(e, "modelValue"), o = $e(), r = p(() => e.id || `v-selection-control-group-${o}`), i = p(() => e.name || r.value), a = /* @__PURE__ */ new Set();
  return Ae(Fo, { modelValue: l, forceUpdate: () => {
    a.forEach((s) => s());
  }, onForceUpdate: (s) => {
    a.add(s), Se(() => {
      a.delete(s);
    });
  } }), dt({ [e.defaultsTarget]: { color: Y(e, "color"), disabled: Y(e, "disabled"), density: Y(e, "density"), error: Y(e, "error"), inline: Y(e, "inline"), modelValue: l, multiple: p(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: i, falseIcon: Y(e, "falseIcon"), trueIcon: Y(e, "trueIcon"), readonly: Y(e, "readonly"), ripple: Y(e, "ripple"), type: Y(e, "type"), valueComparator: Y(e, "valueComparator") } }), Q(() => {
    var s;
    return c("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(s = t.default) == null ? void 0 : s.call(t)]);
  }), {};
} });
const dl = D({ label: String, trueValue: null, falseValue: null, value: null, ...ae(), ...Lo() }, "VSelectionControl"), Dn = X()({ name: "VSelectionControl", directives: { Ripple: Sn }, inheritAttrs: !1, props: dl(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: o, densityClasses: r, icon: i, model: a, textColorClasses: s, textColorStyles: d, trueValue: y } = function(B) {
    const L = ue(Fo, void 0), { densityClasses: P } = Je(B), _ = de(B, "modelValue"), k = p(() => B.trueValue !== void 0 ? B.trueValue : B.value === void 0 || B.value), C = p(() => B.falseValue !== void 0 && B.falseValue), h = p(() => !!B.multiple || B.multiple == null && Array.isArray(_.value)), I = p({ get() {
      const O = L ? L.modelValue.value : _.value;
      return h.value ? O.some((z) => B.valueComparator(z, k.value)) : B.valueComparator(O, k.value);
    }, set(O) {
      if (B.readonly)
        return;
      const z = O ? k.value : C.value;
      let $ = z;
      h.value && ($ = O ? [...je(_.value), z] : je(_.value).filter((M) => !B.valueComparator(M, k.value))), L ? L.modelValue.value = $ : _.value = $;
    } }), { textColorClasses: w, textColorStyles: A } = Me(p(() => !I.value || B.error || B.disabled ? void 0 : B.color)), g = p(() => I.value ? B.trueIcon : B.falseIcon);
    return { group: L, densityClasses: P, trueValue: k, falseValue: C, model: I, textColorClasses: w, textColorStyles: A, icon: g };
  }(e), v = $e(), m = p(() => e.id || `input-${v}`), f = oe(!1), b = oe(!1), x = N();
  function S(B) {
    f.value = !0, (!Ln || Ln && B.target.matches(":focus-visible")) && (b.value = !0);
  }
  function V() {
    f.value = !1, b.value = !1;
  }
  function T(B) {
    e.readonly && o && ge(() => o.forceUpdate()), a.value = B.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    x.value && (x.value.checked = a.value);
  }), Q(() => {
    var _, k;
    const B = l.label ? l.label({ label: e.label, props: { for: m.value } }) : e.label, [L, P] = Tt(t);
    return c("div", G({ class: ["v-selection-control", { "v-selection-control--dirty": a.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": f.value, "v-selection-control--focus-visible": b.value, "v-selection-control--inline": e.inline }, r.value, e.class] }, L, { style: e.style }), [c("div", { class: ["v-selection-control__wrapper", s.value], style: d.value }, [(_ = l.default) == null ? void 0 : _.call(l), fe(c("div", { class: ["v-selection-control__input"] }, [i.value && c(se, { key: "icon", icon: i.value }, null), c("input", G({ ref: x, checked: a.value, disabled: e.disabled, id: m.value, onBlur: V, onFocus: S, onInput: T, "aria-disabled": e.readonly, type: e.type, value: y.value, name: e.name, "aria-checked": e.type === "checkbox" ? a.value : void 0 }, P), null), (k = l.input) == null ? void 0 : k.call(l, { model: a, textColorClasses: s, textColorStyles: d, props: { onFocus: S, onBlur: V, id: m.value } })]), [[De("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), B && c(Eo, { for: m.value, clickable: !0 }, { default: () => [B] })]);
  }), { isFocused: f, input: x };
} }), zo = D({ indeterminate: Boolean, indeterminateIcon: { type: ie, default: "$checkboxIndeterminate" }, ...dl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Mn = X()({ name: "VCheckboxBtn", props: zo(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = de(e, "indeterminate"), o = de(e, "modelValue");
  function r(s) {
    l.value && (l.value = !1);
  }
  const i = p(() => l.value ? e.indeterminateIcon : e.falseIcon), a = p(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return Q(() => c(Dn, G(e, { modelValue: o.value, "onUpdate:modelValue": [(s) => o.value = s, r], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: i.value, trueIcon: a.value, "aria-checked": l.value ? "mixed" : void 0 }), t)), {};
} });
function Po(e) {
  const { t: n } = al();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], r = e[`onClick:${l}`], i = r && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return c(se, { icon: e[`${l}Icon`], "aria-label": i, onClick: r }, null);
  } };
}
const Ka = D({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ae(), ...zt({ transition: { component: co, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Ya = X()({ name: "VMessages", props: Ka(), setup(e, n) {
  let { slots: t } = n;
  const l = p(() => je(e.messages)), { textColorClasses: o, textColorStyles: r } = Me(p(() => e.color));
  return Q(() => c(Ne, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [r.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((i, a) => c("div", { class: "v-messages__message", key: `${a}-${l.value}` }, [t.message ? t.message({ message: i }) : i]))] })), {};
} }), Do = D({ focused: Boolean, "onUpdate:focused": Ee() }, "focus");
function jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re();
  const t = de(e, "focused");
  return { focusClasses: p(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const Xa = Symbol.for("vuetify:form");
function Mo() {
  return ue(Xa, null);
}
const Ja = D({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Do() }, "validation"), Ht = D({ id: String, appendIcon: ie, centerAffix: { type: Boolean, default: !0 }, prependIcon: ie, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ee(), "onClick:append": Ee(), ...ae(), ...Xe(), ...Ja() }, "VInput"), qe = X()({ name: "VInput", props: { ...Ht() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const { densityClasses: r } = Je(e), { rtlClasses: i } = Et(), { InputIcon: a } = Po(e), s = $e(), d = p(() => e.id || `input-${s}`), y = p(() => `${d.value}-messages`), { errorMessages: v, isDirty: m, isDisabled: f, isReadonly: b, isPristine: x, isValid: S, isValidating: V, reset: T, resetValidation: B, validate: L, validationClasses: P } = function(C) {
    let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Re(), I = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $e();
    const w = de(C, "modelValue"), A = p(() => C.validationValue === void 0 ? w.value : C.validationValue), g = Mo(), O = N([]), z = oe(!0), $ = p(() => !(!je(w.value === "" ? null : w.value).length && !je(A.value === "" ? null : A.value).length)), M = p(() => !!(C.disabled ?? (g == null ? void 0 : g.isDisabled.value))), E = p(() => !!(C.readonly ?? (g == null ? void 0 : g.isReadonly.value))), W = p(() => C.errorMessages.length ? je(C.errorMessages).slice(0, Math.max(0, +C.maxErrors)) : O.value), j = p(() => {
      let J = (C.validateOn ?? (g == null ? void 0 : g.validateOn.value)) || "input";
      J === "lazy" && (J = "input lazy");
      const re = new Set((J == null ? void 0 : J.split(" ")) ?? []);
      return { blur: re.has("blur") || re.has("input"), input: re.has("input"), submit: re.has("submit"), lazy: re.has("lazy") };
    }), U = p(() => !C.error && !C.errorMessages.length && (!C.rules.length || (z.value ? !O.value.length && !j.value.lazy || null : !O.value.length))), F = oe(!1), H = p(() => ({ [`${h}--error`]: U.value === !1, [`${h}--dirty`]: $.value, [`${h}--disabled`]: M.value, [`${h}--readonly`]: E.value })), R = p(() => C.name ?? u(I));
    function K() {
      w.value = null, ge(ee);
    }
    function ee() {
      z.value = !0, j.value.lazy ? O.value = [] : ne(!0);
    }
    async function ne() {
      let J = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const re = [];
      F.value = !0;
      for (const Ie of C.rules) {
        if (re.length >= +(C.maxErrors ?? 1))
          break;
        const xn = typeof Ie == "function" ? Ie : () => Ie, ze = await xn(A.value);
        ze !== !0 && (typeof ze == "string" ? re.push(ze) : console.warn(`${ze} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return O.value = re, F.value = !1, z.value = J, O.value;
    }
    return Jl(() => {
      g == null || g.register({ id: R.value, validate: ne, reset: K, resetValidation: ee });
    }), Ge(() => {
      g == null || g.unregister(R.value);
    }), bt(async () => {
      j.value.lazy || await ne(!0), g == null || g.update(R.value, U.value, W.value);
    }), Qe(() => j.value.input, () => {
      q(A, () => {
        if (A.value != null)
          ne();
        else if (C.focused) {
          const J = q(() => C.focused, (re) => {
            re || ne(), J();
          });
        }
      });
    }), Qe(() => j.value.blur, () => {
      q(() => C.focused, (J) => {
        J || ne();
      });
    }), q(U, () => {
      g == null || g.update(R.value, U.value, W.value);
    }), { errorMessages: W, isDirty: $, isDisabled: M, isReadonly: E, isPristine: z, isValid: U, isValidating: F, reset: K, resetValidation: ee, validate: ne, validationClasses: H };
  }(e, "v-input", d), _ = p(() => ({ id: d, messagesId: y, isDirty: m, isDisabled: f, isReadonly: b, isPristine: x, isValid: S, isValidating: V, reset: T, resetValidation: B, validate: L })), k = p(() => {
    var C;
    return (C = e.errorMessages) != null && C.length || !x.value && v.value.length ? v.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return Q(() => {
    var A, g, O, z;
    const C = !(!l.prepend && !e.prependIcon), h = !(!l.append && !e.appendIcon), I = k.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && (I || !!l.details);
    return c("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, r.value, i.value, P.value, e.class], style: e.style }, [C && c("div", { key: "prepend", class: "v-input__prepend" }, [(A = l.prepend) == null ? void 0 : A.call(l, _.value), e.prependIcon && c(a, { key: "prepend-icon", name: "prepend" }, null)]), l.default && c("div", { class: "v-input__control" }, [(g = l.default) == null ? void 0 : g.call(l, _.value)]), h && c("div", { key: "append", class: "v-input__append" }, [e.appendIcon && c(a, { key: "append-icon", name: "append" }, null), (O = l.append) == null ? void 0 : O.call(l, _.value)]), w && c("div", { class: "v-input__details" }, [c(Ya, { id: y.value, active: I, messages: k.value }, { message: l.message }), (z = l.details) == null ? void 0 : z.call(l, _.value)])]);
  }), { reset: T, resetValidation: B, validate: L };
} }), Za = D({ ...Ht(), ...Zn(zo(), ["inline"]) }, "VCheckbox"), Qa = X()({ name: "VCheckbox", inheritAttrs: !1, props: Za(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = de(e, "modelValue"), { isFocused: r, focus: i, blur: a } = jt(e), s = $e(), d = p(() => e.id || `checkbox-${s}`);
  return Q(() => {
    const [y, v] = Tt(t), [m, f] = qe.filterProps(e), [b, x] = Mn.filterProps(e);
    return c(qe, G({ class: ["v-checkbox", e.class] }, y, m, { modelValue: o.value, "onUpdate:modelValue": (S) => o.value = S, id: d.value, focused: r.value, style: e.style }), { ...l, default: (S) => {
      let { id: V, messagesId: T, isDisabled: B, isReadonly: L } = S;
      return c(Mn, G(b, { id: V.value, "aria-describedby": T.value, disabled: B.value, readonly: L.value }, v, { modelValue: o.value, "onUpdate:modelValue": (P) => o.value = P, onFocus: i, onBlur: a }), l);
    } });
  }), {};
} }), ei = D({ start: Boolean, end: Boolean, icon: ie, image: String, ...ae(), ...Xe(), ...Ke(), ...Nt(), ...Be(), ...me(), ...nt({ variant: "flat" }) }, "VAvatar"), pn = X()({ name: "VAvatar", props: ei(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = we(e), { colorClasses: o, colorStyles: r, variantClasses: i } = bn(e), { densityClasses: a } = Je(e), { roundedClasses: s } = Ye(e), { sizeClasses: d, sizeStyles: y } = Wt(e);
  return Q(() => c(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, a.value, s.value, d.value, i.value, e.class], style: [r.value, y.value, e.style] }, { default: () => {
    var v;
    return [e.image ? c(Aa, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? c(se, { key: "icon", icon: e.icon }, null) : (v = t.default) == null ? void 0 : v.call(t), hn(!1, "v-avatar")];
  } })), {};
} }), Ro = Symbol.for("vuetify:v-chip-group"), ti = D({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: ct }, ...ae(), ...mo({ selectedClass: "v-chip--selected" }), ...Be(), ...me(), ...nt({ variant: "tonal" }) }, "VChipGroup");
X()({ name: "VChipGroup", props: ti(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = we(e), { isSelected: o, select: r, next: i, prev: a, selected: s } = ho(e, Ro);
  return dt({ VChip: { color: Y(e, "color"), disabled: Y(e, "disabled"), filter: Y(e, "filter"), variant: Y(e, "variant") } }), Q(() => c(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var d;
    return [(d = t.default) == null ? void 0 : d.call(t, { isSelected: o, select: r, next: i, prev: a, selected: s.value })];
  } })), {};
} });
const ni = D({ activeClass: String, appendAvatar: String, appendIcon: ie, closable: Boolean, closeIcon: { type: ie, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ee(), onClickOnce: Ee(), ...Pt(), ...ae(), ...Xe(), ...Mt(), ...go(), ...Ke(), ...cl(), ...Nt(), ...Be({ tag: "span" }), ...me(), ...nt({ variant: "tonal" }) }, "VChip"), li = X()({ name: "VChip", directives: { Ripple: Sn }, props: ni(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { t: r } = al(), { borderClasses: i } = Dt(e), { colorClasses: a, colorStyles: s, variantClasses: d } = bn(e), { densityClasses: y } = Je(e), { elevationClasses: v } = Rt(e), { roundedClasses: m } = Ye(e), { sizeClasses: f } = Wt(e), { themeClasses: b } = we(e), x = de(e, "modelValue"), S = yo(e, Ro, !1), V = ul(e, t), T = p(() => e.link !== !1 && V.isLink.value), B = p(() => !e.disabled && e.link !== !1 && (!!S || e.link || V.isClickable.value)), L = p(() => ({ "aria-label": r(e.closeLabel), onClick(k) {
    x.value = !1, l("click:close", k);
  } }));
  function P(k) {
    var C;
    l("click", k), B.value && ((C = V.navigate) == null || C.call(V, k), S == null || S.toggle());
  }
  function _(k) {
    k.key !== "Enter" && k.key !== " " || (k.preventDefault(), P(k));
  }
  return () => {
    const k = V.isLink.value ? "a" : e.tag, C = !(!e.appendIcon && !e.appendAvatar), h = !(!C && !o.append), I = !(!o.close && !e.closable), w = !(!o.filter && !e.filter) && S, A = !(!e.prependIcon && !e.prependAvatar), g = !(!A && !o.prepend), O = !S || S.isSelected.value;
    return x.value && fe(c(k, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": B.value, "v-chip--filter": w, "v-chip--pill": e.pill }, b.value, i.value, O ? a.value : void 0, y.value, v.value, m.value, f.value, d.value, S == null ? void 0 : S.selectedClass.value, e.class], style: [O ? s.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: V.href.value, tabindex: B.value ? 0 : void 0, onClick: P, onKeydown: B.value && !T.value && _ }, { default: () => {
      var z;
      return [hn(B.value, "v-chip"), w && c(vo, { key: "filter" }, { default: () => [fe(c("div", { class: "v-chip__filter" }, [o.filter ? fe(c(ke, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[De("slot"), o.filter, "default"]]) : c(se, { key: "filter-icon", icon: e.filterIcon }, null)]), [[rt, S.isSelected.value]])] }), g && c("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? c(ke, { key: "prepend-defaults", disabled: !A, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : c(pe, null, [e.prependIcon && c(se, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && c(pn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), c("div", { class: "v-chip__content" }, [((z = o.default) == null ? void 0 : z.call(o, { isSelected: S == null ? void 0 : S.isSelected.value, selectedClass: S == null ? void 0 : S.selectedClass.value, select: S == null ? void 0 : S.select, toggle: S == null ? void 0 : S.toggle, value: S == null ? void 0 : S.value.value, disabled: e.disabled })) ?? e.text]), h && c("div", { key: "append", class: "v-chip__append" }, [o.append ? c(ke, { key: "append-defaults", disabled: !C, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : c(pe, null, [e.appendIcon && c(se, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && c(pn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), I && c("div", G({ key: "close", class: "v-chip__close" }, L.value), [o.close ? c(ke, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : c(se, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[De("ripple"), B.value && e.ripple, null]]);
  };
} }), Rn = Symbol.for("vuetify:list");
function No() {
  const e = ue(Rn, { hasPrepend: oe(!1), updateHasPrepend: () => null }), n = { hasPrepend: oe(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return Ae(Rn, n), e;
}
function Wo() {
  return ue(Rn, null);
}
const oi = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    const r = /* @__PURE__ */ new Set();
    r.add(n);
    let i = o.get(n);
    for (; i != null; )
      r.add(i), i = o.get(i);
    return r;
  }
  return l.delete(n), l;
}, select: () => null }, jo = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    let r = o.get(n);
    for (l.add(n); r != null && r !== n; )
      l.add(r), r = o.get(r);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, ai = { open: jo.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (!t)
    return l;
  const r = [];
  let i = o.get(n);
  for (; i != null; )
    r.push(i), i = o.get(i);
  return new Set(r);
} }, Nn = (e) => {
  const n = { select: (t) => {
    let { id: l, value: o, selected: r } = t;
    if (l = We(l), e && !o) {
      const i = Array.from(r.entries()).reduce((a, s) => {
        let [d, y] = s;
        return y === "on" ? [...a, d] : a;
      }, []);
      if (i.length === 1 && i[0] === l)
        return r;
    }
    return r.set(l, o ? "on" : "off"), r;
  }, in: (t, l, o) => {
    let r = /* @__PURE__ */ new Map();
    for (const i of t || [])
      r = n.select({ id: i, value: !0, selected: new Map(r), children: l, parents: o });
    return r;
  }, out: (t) => {
    const l = [];
    for (const [o, r] of t.entries())
      r === "on" && l.push(o);
    return l;
  } };
  return n;
}, Dl = (e) => {
  const n = Nn(e);
  return { select: (t) => {
    let { selected: l, id: o, ...r } = t;
    o = We(o);
    const i = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...r, id: o, selected: i });
  }, in: (t, l, o) => {
    let r = /* @__PURE__ */ new Map();
    return t != null && t.length && (r = n.in(t.slice(0, 1), l, o)), r;
  }, out: (t, l, o) => n.out(t, l, o) };
}, ht = Symbol.for("vuetify:nested"), Ho = { id: oe(), root: { register: () => null, unregister: () => null, parents: N(/* @__PURE__ */ new Map()), children: N(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: N(/* @__PURE__ */ new Set()), selected: N(/* @__PURE__ */ new Map()), selectedValues: N([]) } }, ii = D({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), ri = (e) => {
  let n = !1;
  const t = N(/* @__PURE__ */ new Map()), l = N(/* @__PURE__ */ new Map()), o = de(e, "opened", e.opened, (v) => new Set(v), (v) => [...v.values()]), r = p(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((v) => {
          const m = Dl(v);
          return { select: (f) => {
            let { id: b, selected: x, children: S, ...V } = f;
            return b = We(b), S.has(b) ? x : m.select({ id: b, selected: x, children: S, ...V });
          }, in: m.in, out: m.out };
        })(e.mandatory);
      case "leaf":
        return ((v) => {
          const m = Nn(v);
          return { select: (f) => {
            let { id: b, selected: x, children: S, ...V } = f;
            return b = We(b), S.has(b) ? x : m.select({ id: b, selected: x, children: S, ...V });
          }, in: m.in, out: m.out };
        })(e.mandatory);
      case "independent":
        return Nn(e.mandatory);
      case "single-independent":
        return Dl(e.mandatory);
      default:
        return ((v) => {
          const m = { select: (f) => {
            let { id: b, value: x, selected: S, children: V, parents: T } = f;
            b = We(b);
            const B = new Map(S), L = [b];
            for (; L.length; ) {
              const _ = L.shift();
              S.set(_, x ? "on" : "off"), V.has(_) && L.push(...V.get(_));
            }
            let P = T.get(b);
            for (; P; ) {
              const _ = V.get(P), k = _.every((h) => S.get(h) === "on"), C = _.every((h) => !S.has(h) || S.get(h) === "off");
              S.set(P, k ? "on" : C ? "off" : "indeterminate"), P = T.get(P);
            }
            return v && !x && Array.from(S.entries()).reduce((k, C) => {
              let [h, I] = C;
              return I === "on" ? [...k, h] : k;
            }, []).length === 0 ? B : S;
          }, in: (f, b, x) => {
            let S = /* @__PURE__ */ new Map();
            for (const V of f || [])
              S = m.select({ id: V, value: !0, selected: new Map(S), children: b, parents: x });
            return S;
          }, out: (f, b) => {
            const x = [];
            for (const [S, V] of f.entries())
              V !== "on" || b.has(S) || x.push(S);
            return x;
          } };
          return m;
        })(e.mandatory);
    }
  }), i = p(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return ai;
      case "single":
        return oi;
      default:
        return jo;
    }
  }), a = de(e, "selected", e.selected, (v) => r.value.in(v, t.value, l.value), (v) => r.value.out(v, t.value, l.value));
  function s(v) {
    const m = [];
    let f = v;
    for (; f != null; )
      m.unshift(f), f = l.value.get(f);
    return m;
  }
  Ge(() => {
    n = !0;
  });
  const d = he("nested"), y = { id: oe(), root: { opened: o, selected: a, selectedValues: p(() => {
    const v = [];
    for (const [m, f] of a.value.entries())
      f === "on" && v.push(m);
    return v;
  }), register: (v, m, f) => {
    m && v !== m && l.value.set(v, m), f && t.value.set(v, []), m != null && t.value.set(m, [...t.value.get(m) || [], v]);
  }, unregister: (v) => {
    if (n)
      return;
    t.value.delete(v);
    const m = l.value.get(v);
    if (m) {
      const f = t.value.get(m) ?? [];
      t.value.set(m, f.filter((b) => b !== v));
    }
    l.value.delete(v), o.value.delete(v);
  }, open: (v, m, f) => {
    d.emit("click:open", { id: v, value: m, path: s(v), event: f });
    const b = i.value.open({ id: v, value: m, opened: new Set(o.value), children: t.value, parents: l.value, event: f });
    b && (o.value = b);
  }, openOnSelect: (v, m, f) => {
    const b = i.value.select({ id: v, value: m, selected: new Map(a.value), opened: new Set(o.value), children: t.value, parents: l.value, event: f });
    b && (o.value = b);
  }, select: (v, m, f) => {
    d.emit("click:select", { id: v, value: m, path: s(v), event: f });
    const b = r.value.select({ id: v, value: m, selected: new Map(a.value), children: t.value, parents: l.value, event: f });
    b && (a.value = b), y.root.openOnSelect(v, m, f);
  }, children: t, parents: l } };
  return Ae(ht, y), y.root;
}, qo = (e, n) => {
  const t = ue(ht, Ho), l = Symbol($e()), o = p(() => e.value !== void 0 ? e.value : l), r = { ...t, id: o, open: (i, a) => t.root.open(o.value, i, a), openOnSelect: (i, a) => t.root.openOnSelect(o.value, i, a), isOpen: p(() => t.root.opened.value.has(o.value)), parent: p(() => t.root.parents.value.get(o.value)), select: (i, a) => t.root.select(o.value, i, a), isSelected: p(() => t.root.selected.value.get(We(o.value)) === "on"), isIndeterminate: p(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: p(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, n), Ge(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), n && Ae(ht, r), r;
}, si = ft({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = ue(ht, Ho);
    Ae(ht, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), ui = D({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ie, default: "$collapse" }, expandIcon: { type: ie, default: "$expand" }, prependIcon: ie, appendIcon: ie, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ae(), ...Be() }, "VListGroup"), Ml = X()({ name: "VListGroup", props: ui(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: o, id: r } = qo(Y(e, "value"), !0), i = p(() => `v-list-group--id-${String(r.value)}`), a = Wo(), { isBooted: s } = function() {
    const f = oe(!1);
    return bt(() => {
      window.requestAnimationFrame(() => {
        f.value = !0;
      });
    }), { ssrBootStyles: p(() => f.value ? void 0 : { transition: "none !important" }), isBooted: Kn(f) };
  }();
  function d(f) {
    o(!l.value, f);
  }
  const y = p(() => ({ onClick: d, class: "v-list-group__header", id: i.value })), v = p(() => l.value ? e.collapseIcon : e.expandIcon), m = p(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && v.value, appendIcon: e.appendIcon || !e.subgroup && v.value, title: e.title, value: e.value } }));
  return Q(() => c(e.tag, { class: ["v-list-group", { "v-list-group--prepend": a == null ? void 0 : a.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && c(ke, { defaults: m.value }, { default: () => [c(si, null, { default: () => [t.activator({ props: y.value, isOpen: l.value })] })] }), c(Ne, { transition: { component: _a }, disabled: !s.value }, { default: () => {
    var f;
    return [fe(c("div", { class: "v-list-group__items", role: "group", "aria-labelledby": i.value }, [(f = t.default) == null ? void 0 : f.call(t)]), [[rt, l.value]])];
  } })] })), {};
} }), ci = lo("v-list-item-subtitle"), di = lo("v-list-item-title"), vi = D({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ie, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ie, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ee(), onClickOnce: Ee(), ...Pt(), ...ae(), ...Xe(), ...Ft(), ...Mt(), ...Ke(), ...cl(), ...Be(), ...me(), ...nt({ variant: "text" }) }, "VListItem"), fn = X()({ name: "VListItem", directives: { Ripple: Sn }, props: vi(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const r = ul(e, t), i = p(() => e.value === void 0 ? r.href.value : e.value), { select: a, isSelected: s, isIndeterminate: d, isGroupActivator: y, root: v, parent: m, openOnSelect: f } = qo(i, !1), b = Wo(), x = p(() => {
    var E;
    return e.active !== !1 && (e.active || ((E = r.isActive) == null ? void 0 : E.value) || s.value);
  }), S = p(() => e.link !== !1 && r.isLink.value), V = p(() => !e.disabled && e.link !== !1 && (e.link || r.isClickable.value || e.value != null && !!b)), T = p(() => e.rounded || e.nav), B = p(() => e.color ?? e.activeColor), L = p(() => ({ color: x.value ? B.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  q(() => {
    var E;
    return (E = r.isActive) == null ? void 0 : E.value;
  }, (E) => {
    E && m.value != null && v.open(m.value, !0), E && f(E);
  }, { immediate: !0 });
  const { themeClasses: P } = we(e), { borderClasses: _ } = Dt(e), { colorClasses: k, colorStyles: C, variantClasses: h } = bn(L), { densityClasses: I } = Je(e), { dimensionStyles: w } = Lt(e), { elevationClasses: A } = Rt(e), { roundedClasses: g } = Ye(T), O = p(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), z = p(() => ({ isActive: x.value, select: a, isSelected: s.value, isIndeterminate: d.value }));
  function $(E) {
    var W;
    o("click", E), !y && V.value && ((W = r.navigate) == null || W.call(r, E), e.value != null && a(!s.value, E));
  }
  function M(E) {
    E.key !== "Enter" && E.key !== " " || (E.preventDefault(), $(E));
  }
  return Q(() => {
    const E = S.value ? "a" : e.tag, W = l.title || e.title, j = l.subtitle || e.subtitle, U = !(!e.appendAvatar && !e.appendIcon), F = !(!U && !l.append), H = !(!e.prependAvatar && !e.prependIcon), R = !(!H && !l.prepend);
    var K, ee;
    return b == null || b.updateHasPrepend(R), e.activeColor && (K = "active-color", ee = ["color", "base-color"], ee = Array.isArray(ee) ? ee.slice(0, -1).map((ne) => `'${ne}'`).join(", ") + ` or '${ee.at(-1)}'` : `'${ee}'`, gn(`[Vuetify UPGRADE] '${K}' is deprecated, use ${ee} instead.`)), fe(c(E, { class: ["v-list-item", { "v-list-item--active": x.value, "v-list-item--disabled": e.disabled, "v-list-item--link": V.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !R && (b == null ? void 0 : b.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && x.value }, P.value, _.value, k.value, I.value, A.value, O.value, g.value, h.value, e.class], style: [C.value, w.value, e.style], href: r.href.value, tabindex: V.value ? b ? -2 : 0 : void 0, onClick: $, onKeydown: V.value && !S.value && M }, { default: () => {
      var ne;
      return [hn(V.value || x.value, "v-list-item"), R && c("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? c(ke, { key: "prepend-defaults", disabled: !H, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var J;
        return [(J = l.prepend) == null ? void 0 : J.call(l, z.value)];
      } }) : c(pe, null, [e.prependAvatar && c(pn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && c(se, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), c("div", { class: "v-list-item__content", "data-no-activator": "" }, [W && c(di, { key: "title" }, { default: () => {
        var J;
        return [((J = l.title) == null ? void 0 : J.call(l, { title: e.title })) ?? e.title];
      } }), j && c(ci, { key: "subtitle" }, { default: () => {
        var J;
        return [((J = l.subtitle) == null ? void 0 : J.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (ne = l.default) == null ? void 0 : ne.call(l, z.value)]), F && c("div", { key: "append", class: "v-list-item__append" }, [l.append ? c(ke, { key: "append-defaults", disabled: !U, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var J;
        return [(J = l.append) == null ? void 0 : J.call(l, z.value)];
      } }) : c(pe, null, [e.appendIcon && c(se, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && c(pn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[De("ripple"), V.value && e.ripple]]);
  }), {};
} }), pi = D({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ae(), ...Be() }, "VListSubheader"), fi = X()({ name: "VListSubheader", props: pi(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: o } = Me(Y(e, "color"));
  return Q(() => {
    const r = !(!t.default && !e.title);
    return c(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var i;
      return [r && c("div", { class: "v-list-subheader__text" }, [((i = t.default) == null ? void 0 : i.call(t)) ?? e.title])];
    } });
  }), {};
} }), mi = D({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ae(), ...me() }, "VDivider"), gi = X()({ name: "VDivider", props: mi(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = we(e), { textColorClasses: o, textColorStyles: r } = Me(Y(e, "color")), i = p(() => {
    const a = {};
    return e.length && (a[e.vertical ? "maxHeight" : "maxWidth"] = Z(e.length)), e.thickness && (a[e.vertical ? "borderRightWidth" : "borderTopWidth"] = Z(e.thickness)), a;
  });
  return Q(() => c("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [i.value, r.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), yi = D({ items: Array }, "VListChildren"), Uo = X()({ name: "VListChildren", props: yi(), setup(e, n) {
  let { slots: t } = n;
  return No(), () => {
    var l, o;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((r) => {
      var f, b;
      let { children: i, props: a, type: s, raw: d } = r;
      if (s === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: a })) ?? c(gi, a, null);
      if (s === "subheader")
        return ((b = t.subheader) == null ? void 0 : b.call(t, { props: a })) ?? c(fi, a, null);
      const y = { subtitle: t.subtitle ? (x) => {
        var S;
        return (S = t.subtitle) == null ? void 0 : S.call(t, { ...x, item: d });
      } : void 0, prepend: t.prepend ? (x) => {
        var S;
        return (S = t.prepend) == null ? void 0 : S.call(t, { ...x, item: d });
      } : void 0, append: t.append ? (x) => {
        var S;
        return (S = t.append) == null ? void 0 : S.call(t, { ...x, item: d });
      } : void 0, title: t.title ? (x) => {
        var S;
        return (S = t.title) == null ? void 0 : S.call(t, { ...x, item: d });
      } : void 0 }, [v, m] = Ml.filterProps(a);
      return i ? c(Ml, G({ value: a == null ? void 0 : a.value }, v), { activator: (x) => {
        let { props: S } = x;
        return t.header ? t.header({ props: { ...a, ...S } }) : c(fn, G(a, S), y);
      }, default: () => c(Uo, { items: i }, t) }) : t.item ? t.item({ props: a }) : c(fn, a, y);
    }));
  };
} }), Go = D({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function Ko(e, n) {
  const t = Pe(n, e.itemTitle, n), l = e.returnObject ? n : Pe(n, e.itemValue, t), o = Pe(n, e.itemChildren), r = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? At(n, ["children"])[1] : n : Pe(n, e.itemProps) };
  return { title: String(r.title ?? ""), value: r.value, props: r, children: Array.isArray(o) ? Yo(e, o) : void 0, raw: n };
}
function Yo(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ko(e, l));
  return t;
}
function hi(e) {
  return function(n, t) {
    function l(r) {
      return r.filter((i) => i !== null || n.value.some((a) => a.value === null)).map((i) => n.value.find((a) => ct(i, a.value)) ?? t(i));
    }
    function o(r) {
      return r.map((i) => {
        let { value: a } = i;
        return a;
      });
    }
    return { items: n, transformIn: l, transformOut: o };
  }(p(() => Yo(e, e.items)), (n) => Ko(e, n));
}
function bi(e, n) {
  const t = Pe(n, e.itemType, "item"), l = function(a) {
    return typeof a == "string" || typeof a == "number" || typeof a == "boolean";
  }(n) ? n : Pe(n, e.itemTitle), o = Pe(n, e.itemValue, void 0), r = Pe(n, e.itemChildren), i = { title: l, value: o, ...e.itemProps === !0 ? At(n, ["children"])[1] : Pe(n, e.itemProps) };
  return { type: t, title: i.title, value: i.value, props: i, children: t === "item" && r ? Xo(e, r) : void 0, raw: n };
}
function Xo(e, n) {
  const t = [];
  for (const l of n)
    t.push(bi(e, l));
  return t;
}
const Si = D({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...ii({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Pt(), ...ae(), ...Xe(), ...Ft(), ...Mt(), itemType: { type: String, default: "type" }, ...Go(), ...Ke(), ...Be(), ...me(), ...nt({ variant: "text" }) }, "VList"), Ci = X()({ name: "VList", props: Si(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(h) {
    return { items: p(() => Xo(h, h.items)) };
  }(e), { themeClasses: o } = we(e), { backgroundColorClasses: r, backgroundColorStyles: i } = mt(Y(e, "bgColor")), { borderClasses: a } = Dt(e), { densityClasses: s } = Je(e), { dimensionStyles: d } = Lt(e), { elevationClasses: y } = Rt(e), { roundedClasses: v } = Ye(e), { open: m, select: f } = ri(e), b = p(() => e.lines ? `v-list--${e.lines}-line` : void 0), x = Y(e, "activeColor"), S = Y(e, "baseColor"), V = Y(e, "color");
  No(), dt({ VListGroup: { activeColor: x, baseColor: S, color: V }, VListItem: { activeClass: Y(e, "activeClass"), activeColor: x, baseColor: S, color: V, density: Y(e, "density"), disabled: Y(e, "disabled"), lines: Y(e, "lines"), nav: Y(e, "nav"), variant: Y(e, "variant") } });
  const T = oe(!1), B = N();
  function L(h) {
    T.value = !0;
  }
  function P(h) {
    T.value = !1;
  }
  function _(h) {
    var I;
    T.value || h.relatedTarget && ((I = B.value) != null && I.contains(h.relatedTarget)) || C();
  }
  function k(h) {
    if (B.value) {
      if (h.key === "ArrowDown")
        C("next");
      else if (h.key === "ArrowUp")
        C("prev");
      else if (h.key === "Home")
        C("first");
      else {
        if (h.key !== "End")
          return;
        C("last");
      }
      h.preventDefault();
    }
  }
  function C(h) {
    if (B.value)
      return rn(B.value, h);
  }
  return Q(() => c(e.tag, { ref: B, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, r.value, a.value, s.value, y.value, b.value, v.value, e.class], style: [i.value, d.value, e.style], tabindex: e.disabled || T.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: L, onFocusout: P, onFocus: _, onKeydown: k }, { default: () => [c(Uo, { items: l.value }, t)] })), { open: m, select: f, focus: C };
} });
function Bn(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function Rl(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return Bn({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return Bn({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return Bn({ x: n.width / 2, y: n.height / 2 }, n);
}
const Jo = { static: function() {
}, connected: function(e, n, t) {
  (function(f) {
    for (; f; ) {
      if (window.getComputedStyle(f).position === "fixed")
        return !0;
      f = f.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = Qn(() => {
    const f = Fn(n.location, e.isRtl.value), b = n.origin === "overlap" ? f : n.origin === "auto" ? wn(f) : Fn(n.origin, e.isRtl.value);
    return f.side === b.side && f.align === kn(b).align ? { preferredAnchor: xl(f), preferredOrigin: xl(b) } : { preferredAnchor: f, preferredOrigin: b };
  }), [r, i, a, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((f) => p(() => {
    const b = parseFloat(n[f]);
    return isNaN(b) ? 1 / 0 : b;
  })), d = p(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const f = n.offset.split(" ").map(parseFloat);
      return f.length < 2 && f.push(0), f;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let y = !1;
  const v = new ResizeObserver(() => {
    y && m();
  });
  function m() {
    if (y = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => y = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const f = e.activatorEl.value.getBoundingClientRect(), b = function(h, I) {
      const w = el(h);
      return I ? w.x += parseFloat(h.style.right || 0) : w.x -= parseFloat(h.style.left || 0), w.y -= parseFloat(h.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), x = un(e.contentEl.value);
    x.length || (x.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const S = x.reduce((h, I) => {
      const w = I.getBoundingClientRect(), A = new at({ x: I === document.documentElement ? 0 : w.x, y: I === document.documentElement ? 0 : w.y, width: I.clientWidth, height: I.clientHeight });
      return h ? new at({ x: Math.max(h.left, A.left), y: Math.max(h.top, A.top), width: Math.min(h.right, A.right) - Math.max(h.left, A.left), height: Math.min(h.bottom, A.bottom) - Math.max(h.top, A.top) }) : A;
    }, void 0);
    S.x += 12, S.y += 12, S.width -= 24, S.height -= 24;
    let V = { anchor: l.value, origin: o.value };
    function T(h) {
      const I = new at(b), w = Rl(h.anchor, f), A = Rl(h.origin, I);
      let { x: g, y: O } = ($ = A, { x: (z = w).x - $.x, y: z.y - $.y });
      var z, $;
      switch (h.anchor.side) {
        case "top":
          O -= d.value[0];
          break;
        case "bottom":
          O += d.value[0];
          break;
        case "left":
          g -= d.value[0];
          break;
        case "right":
          g += d.value[0];
      }
      switch (h.anchor.align) {
        case "top":
          O -= d.value[1];
          break;
        case "bottom":
          O += d.value[1];
          break;
        case "left":
          g -= d.value[1];
          break;
        case "right":
          g += d.value[1];
      }
      return I.x += g, I.y += O, I.width = Math.min(I.width, a.value), I.height = Math.min(I.height, s.value), { overflows: kl(I, S), x: g, y: O };
    }
    let B = 0, L = 0;
    const P = { x: 0, y: 0 }, _ = { x: !1, y: !1 };
    let k = -1;
    for (; ; ) {
      if (k++ > 10) {
        gn("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: h, y: I, overflows: w } = T(V);
      B += h, L += I, b.x += h, b.y += I;
      {
        const A = wl(V.anchor), g = w.x.before || w.x.after, O = w.y.before || w.y.after;
        let z = !1;
        if (["x", "y"].forEach(($) => {
          if ($ === "x" && g && !_.x || $ === "y" && O && !_.y) {
            const M = { anchor: { ...V.anchor }, origin: { ...V.origin } }, E = $ === "x" ? A === "y" ? kn : wn : A === "y" ? wn : kn;
            M.anchor = E(M.anchor), M.origin = E(M.origin);
            const { overflows: W } = T(M);
            (W[$].before <= w[$].before && W[$].after <= w[$].after || W[$].before + W[$].after < (w[$].before + w[$].after) / 2) && (V = M, z = _[$] = !0);
          }
        }), z)
          continue;
      }
      w.x.before && (B += w.x.before, b.x += w.x.before), w.x.after && (B -= w.x.after, b.x -= w.x.after), w.y.before && (L += w.y.before, b.y += w.y.before), w.y.after && (L -= w.y.after, b.y -= w.y.after);
      {
        const A = kl(b, S);
        P.x = S.width - A.x.before - A.x.after, P.y = S.height - A.y.before - A.y.after, B += A.x.before, b.x += A.x.before, L += A.y.before, b.y += A.y.before;
      }
      break;
    }
    const C = wl(V.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${V.anchor.side} ${V.anchor.align}`, transformOrigin: `${V.origin.side} ${V.origin.align}`, top: Z(In(L)), left: e.isRtl.value ? void 0 : Z(In(B)), right: e.isRtl.value ? Z(In(-B)) : void 0, minWidth: Z(C === "y" ? Math.min(r.value, f.width) : r.value), maxWidth: Z(Nl(Tn(P.x, r.value === 1 / 0 ? 0 : r.value, a.value))), maxHeight: Z(Nl(Tn(P.y, i.value === 1 / 0 ? 0 : i.value, s.value))) }), { available: P, contentBox: b };
  }
  return q([e.activatorEl, e.contentEl], (f, b) => {
    let [x, S] = f, [V, T] = b;
    V && v.unobserve(V), x && v.observe(x), T && v.unobserve(T), S && v.observe(S);
  }, { immediate: !0 }), Se(() => {
    v.disconnect();
  }), q(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => m()), ge(() => {
    const f = m();
    if (!f)
      return;
    const { available: b, contentBox: x } = f;
    x.height > b.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), { updateLocation: m };
} }, xi = D({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in Jo }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function In(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Nl(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Wn = !0;
const mn = [];
let Wl = -1;
function jn() {
  cancelAnimationFrame(Wl), Wl = requestAnimationFrame(() => {
    const e = mn.shift();
    e && e(), mn.length ? jn() : Wn = !0;
  });
}
const ln = { none: null, close: function(e) {
  jl(e.activatorEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var a;
  const t = (a = e.root.value) == null ? void 0 : a.offsetParent, l = [.../* @__PURE__ */ new Set([...un(e.activatorEl.value, n.contained ? t : void 0), ...un(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, r = (i = t || document.documentElement, ll(i) && i);
  var i;
  r && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, d) => {
    s.style.setProperty("--v-body-scroll-x", Z(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", Z(-s.scrollTop)), s.style.setProperty("--v-scrollbar-offset", Z(o)), s.classList.add("v-overlay-scroll-blocked");
  }), Se(() => {
    l.forEach((s, d) => {
      const y = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), v = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
      s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -y, s.scrollTop = -v;
    }), r && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, o = -1, r = -1;
  function i(a) {
    var s;
    s = () => {
      var v, m;
      const d = performance.now();
      (m = (v = e.updateLocation).value) == null || m.call(v, a), l = (performance.now() - d) / (1e3 / 60) > 2;
    }, !Wn || mn.length ? (mn.push(s), jn()) : (Wn = !1, s(), jn());
  }
  r = (typeof requestIdleCallback > "u" ? (a) => a() : requestIdleCallback)(() => {
    t.run(() => {
      jl(e.activatorEl.value ?? e.contentEl.value, (a) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            i(a);
          });
        })) : i(a);
      });
    });
  }), Se(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(r), cancelAnimationFrame(o);
  });
} }, wi = D({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in ln } }, "VOverlay-scroll-strategies");
function jl(e, n) {
  const t = [document, ...un(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Se(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const Hn = Symbol.for("vuetify:v-menu"), ki = D({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Vi = D({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...ki() }, "VOverlay-activator");
function Bi(e, n) {
  let { isActive: t, isTop: l } = n;
  const o = N();
  let r = !1, i = !1, a = !0;
  const s = p(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), d = p(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !s.value), { runOpenDelay: y, runCloseDelay: v } = function(k, C) {
    const h = {}, I = (w) => () => {
      if (!_e)
        return Promise.resolve(!0);
      const A = w === "openDelay";
      return h.closeDelay && window.clearTimeout(h.closeDelay), delete h.closeDelay, h.openDelay && window.clearTimeout(h.openDelay), delete h.openDelay, new Promise((g) => {
        const O = parseInt(k[w] ?? 0, 10);
        h[w] = window.setTimeout(() => {
          C == null || C(A), g(A);
        }, O);
      });
    };
    return { runCloseDelay: I("closeDelay"), runOpenDelay: I("openDelay") };
  }(e, (k) => {
    k !== (e.openOnHover && r || s.value && i) || e.openOnHover && t.value && !l.value || (t.value !== k && (a = !0), t.value = k);
  }), m = (k) => {
    k.stopPropagation(), o.value = k.currentTarget || k.target, t.value = !t.value;
  }, f = (k) => {
    var C;
    (C = k.sourceCapabilities) != null && C.firesTouchEvents || (r = !0, o.value = k.currentTarget || k.target, y());
  }, b = (k) => {
    r = !1, v();
  }, x = (k) => {
    Ln && !k.target.matches(":focus-visible") || (i = !0, k.stopPropagation(), o.value = k.currentTarget || k.target, y());
  }, S = (k) => {
    i = !1, k.stopPropagation(), v();
  }, V = p(() => {
    const k = {};
    return d.value && (k.onClick = m), e.openOnHover && (k.onMouseenter = f, k.onMouseleave = b), s.value && (k.onFocus = x, k.onBlur = S), k;
  }), T = p(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      r = !0, y();
    }, k.onMouseleave = () => {
      r = !1, v();
    }), s.value && (k.onFocusin = () => {
      i = !0, y();
    }, k.onFocusout = () => {
      i = !1, v();
    }), e.closeOnContentClick) {
      const C = ue(Hn, null);
      k.onClick = () => {
        t.value = !1, C == null || C.closeParents();
      };
    }
    return k;
  }), B = p(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      a && (r = !0, a = !1, y());
    }, k.onMouseleave = () => {
      r = !1, v();
    }), k;
  });
  q(l, (k) => {
    !k || (!e.openOnHover || r || s.value && i) && (!s.value || i || e.openOnHover && r) || (t.value = !1);
  });
  const L = N();
  He(() => {
    L.value && ge(() => {
      o.value = An(L.value);
    });
  });
  const P = he("useActivator");
  let _;
  return q(() => !!e.activator, (k) => {
    k && _e ? (_ = Gn(), _.run(() => {
      (function(C, h, I) {
        let { activatorEl: w, activatorEvents: A } = I;
        function g() {
          let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C.activatorProps;
          $ && function(E, W) {
            Object.keys(W).forEach((j) => {
              if (En(j)) {
                const U = bl(j), F = Qt.get(E);
                if (W[j] == null)
                  F == null || F.forEach((H) => {
                    const [R, K] = H;
                    R === U && (E.removeEventListener(U, K), F.delete(H));
                  });
                else if (!F || ![...F].some((H) => H[0] === U && H[1] === W[j])) {
                  E.addEventListener(U, W[j]);
                  const H = F || /* @__PURE__ */ new Set();
                  H.add([U, W[j]]), Qt.has(E) || Qt.set(E, H);
                }
              } else
                W[j] == null ? E.removeAttribute(j) : E.setAttribute(j, W[j]);
            });
          }($, G(A.value, M));
        }
        function O() {
          let $ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z(), M = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : C.activatorProps;
          $ && function(E, W) {
            Object.keys(W).forEach((j) => {
              if (En(j)) {
                const U = bl(j), F = Qt.get(E);
                F == null || F.forEach((H) => {
                  const [R, K] = H;
                  R === U && (E.removeEventListener(U, K), F.delete(H));
                });
              } else
                E.removeAttribute(j);
            });
          }($, G(A.value, M));
        }
        function z() {
          var E, W;
          let $, M = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : C.activator;
          if (M)
            if (M === "parent") {
              let j = (W = (E = h == null ? void 0 : h.proxy) == null ? void 0 : E.$el) == null ? void 0 : W.parentNode;
              for (; j.hasAttribute("data-no-activator"); )
                j = j.parentNode;
              $ = j;
            } else
              $ = typeof M == "string" ? document.querySelector(M) : "$el" in M ? M.$el : M;
          return w.value = ($ == null ? void 0 : $.nodeType) === Node.ELEMENT_NODE ? $ : null, w.value;
        }
        q(() => C.activator, ($, M) => {
          if (M && $ !== M) {
            const E = z(M);
            E && O(E);
          }
          $ && ge(() => g());
        }, { immediate: !0 }), q(() => C.activatorProps, () => {
          g();
        }), Se(() => {
          O();
        });
      })(e, P, { activatorEl: o, activatorEvents: V });
    })) : _ && _.stop();
  }, { flush: "post", immediate: !0 }), Se(() => {
    _ == null || _.stop();
  }), { activatorEl: o, activatorRef: L, activatorEvents: V, contentEvents: T, scrimEvents: B };
}
const Ii = Symbol.for("vuetify:display");
function _i() {
  if (!_e)
    return oe(!1);
  const { ssr: e } = function() {
    const n = ue(Ii);
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
const Oi = D({ eager: Boolean }, "lazy");
function Zo() {
  const e = he("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Hl = Symbol.for("vuetify:stack"), pt = Le([]);
function $i() {
  return !0;
}
function ql(e, n, t) {
  if (!e || Qo(e, t) === !1)
    return !1;
  const l = oo(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(n), !o.some((r) => r == null ? void 0 : r.contains(e.target));
}
function Qo(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || $i)(e);
}
function Ul(e, n) {
  const t = oo(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ai = { mounted(e, n) {
  const t = (o) => function(r, i, a) {
    const s = typeof a.value == "function" ? a.value : a.value.handler;
    i._clickOutside.lastMousedownWasOutside && ql(r, i, a) && setTimeout(() => {
      Qo(r, a) && s && s(r);
    }, 0);
  }(o, e, n), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = ql(o, e, n);
  };
  Ul(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (Ul(e, (t) => {
    var r;
    if (!t || !((r = e._clickOutside) != null && r[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function Ti(e) {
  const { modelValue: n, color: t, ...l } = e;
  return c(et, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && c("div", G({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const ea = D({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [String, Boolean], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Vi(), ...ae(), ...Ft(), ...Oi(), ...xi(), ...wi(), ...me(), ...zt() }, "VOverlay"), Gl = X()({ name: "VOverlay", directives: { ClickOutside: Ai }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ea() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var j, U;
  let { slots: t, attrs: l, emit: o } = n;
  const r = de(e, "modelValue"), i = p({ get: () => r.value, set: (F) => {
    F && e.disabled || (r.value = F);
  } }), { teleportTarget: a } = (s = p(() => e.attach || e.contained), { teleportTarget: p(() => {
    const F = s.value;
    if (F === !0 || !_e)
      return;
    const H = F === !1 ? document.body : typeof F == "string" ? document.querySelector(F) : F;
    if (H == null)
      return void gn(`Unable to locate target ${F}`);
    let R = H.querySelector(":scope > .v-overlay-container");
    return R || (R = document.createElement("div"), R.className = "v-overlay-container", H.appendChild(R)), R;
  }) });
  var s;
  const { themeClasses: d } = we(e), { rtlClasses: y, isRtl: v } = Et(), { hasContent: m, onAfterLeave: f } = function(F, H) {
    const R = oe(!1), K = p(() => R.value || F.eager || H.value);
    return q(H, () => R.value = !0), { isBooted: R, hasContent: K, onAfterLeave: function() {
      F.eager || (R.value = !1);
    } };
  }(e, i), b = mt(p(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: x, localTop: S, stackStyles: V } = function(F, H, R) {
    const K = he("useStack"), ee = !R, ne = ue(Hl, void 0), J = Le({ activeChildren: /* @__PURE__ */ new Set() });
    Ae(Hl, J);
    const re = oe(+H.value);
    Qe(F, () => {
      var vt;
      const ze = (vt = pt.at(-1)) == null ? void 0 : vt[1];
      re.value = ze ? ze + 10 : +H.value, ee && pt.push([K.uid, re.value]), ne == null || ne.activeChildren.add(K.uid), Se(() => {
        if (ee) {
          const ra = We(pt).findIndex((sa) => sa[0] === K.uid);
          pt.splice(ra, 1);
        }
        ne == null || ne.activeChildren.delete(K.uid);
      });
    });
    const Ie = oe(!0);
    ee && He(() => {
      var vt;
      const ze = ((vt = pt.at(-1)) == null ? void 0 : vt[0]) === K.uid;
      setTimeout(() => Ie.value = ze);
    });
    const xn = p(() => !J.activeChildren.size);
    return { globalTop: Kn(Ie), localTop: xn, stackStyles: p(() => ({ zIndex: re.value })) };
  }(i, Y(e, "zIndex"), e._disableGlobalStack), { activatorEl: T, activatorRef: B, activatorEvents: L, contentEvents: P, scrimEvents: _ } = Bi(e, { isActive: i, isTop: S }), { dimensionStyles: k } = Lt(e), C = _i(), { scopeId: h } = Zo();
  q(() => e.disabled, (F) => {
    F && (i.value = !1);
  });
  const I = N(), w = N(), { contentStyles: A, updateLocation: g } = function(F, H) {
    const R = N({}), K = N();
    function ee(ne) {
      var J;
      (J = K.value) == null || J.call(K, ne);
    }
    return _e && (Qe(() => !(!H.isActive.value || !F.locationStrategy), (ne) => {
      var J, re;
      q(() => F.locationStrategy, ne), Se(() => {
        K.value = void 0;
      }), typeof F.locationStrategy == "function" ? K.value = (J = F.locationStrategy(H, F, R)) == null ? void 0 : J.updateLocation : K.value = (re = Jo[F.locationStrategy](H, F, R)) == null ? void 0 : re.updateLocation;
    }), window.addEventListener("resize", ee, { passive: !0 }), Se(() => {
      window.removeEventListener("resize", ee), K.value = void 0;
    })), { contentStyles: R, updateLocation: K };
  }(e, { isRtl: v, contentEl: w, activatorEl: T, isActive: i });
  function O(F) {
    o("click:outside", F), e.persistent ? W() : i.value = !1;
  }
  function z() {
    return i.value && x.value;
  }
  function $(F) {
    var H, R;
    F.key === "Escape" && x.value && (e.persistent ? W() : (i.value = !1, (H = w.value) != null && H.contains(document.activeElement) && ((R = T.value) == null || R.focus())));
  }
  (function(F, H) {
    if (!_e)
      return;
    let R;
    He(async () => {
      R == null || R.stop(), H.isActive.value && F.scrollStrategy && (R = Gn(), await ge(), R.active && R.run(() => {
        var K;
        typeof F.scrollStrategy == "function" ? F.scrollStrategy(H, F, R) : (K = ln[F.scrollStrategy]) == null || K.call(ln, H, F, R);
      }));
    }), Se(() => {
      R == null || R.stop();
    });
  })(e, { root: I, contentEl: w, activatorEl: T, isActive: i, updateLocation: g }), _e && q(i, (F) => {
    F ? window.addEventListener("keydown", $) : window.removeEventListener("keydown", $);
  }, { immediate: !0 });
  const M = (U = (j = he("useRouter")) == null ? void 0 : j.proxy) == null ? void 0 : U.$router;
  Qe(() => e.closeOnBack, () => {
    (function(F, H) {
      let R, K, ee = !1;
      function ne(J) {
        var re;
        (re = J.state) != null && re.replaced || (ee = !0, setTimeout(() => ee = !1));
      }
      _e && (ge(() => {
        window.addEventListener("popstate", ne), R = F == null ? void 0 : F.beforeEach((J, re, Ie) => {
          Vn ? ee ? H(Ie) : Ie() : setTimeout(() => ee ? H(Ie) : Ie()), Vn = !0;
        }), K = F == null ? void 0 : F.afterEach(() => {
          Vn = !1;
        });
      }), Se(() => {
        window.removeEventListener("popstate", ne), R == null || R(), K == null || K();
      }));
    })(M, (F) => {
      x.value && i.value ? (F(!1), e.persistent ? W() : i.value = !1) : F();
    });
  });
  const E = N();
  function W() {
    e.noClickAnimation || w.value && ot(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: sn });
  }
  return q(() => i.value && (e.absolute || e.contained) && a.value == null, (F) => {
    if (F) {
      const H = function(R) {
        for (; R; ) {
          if (ll(R))
            return R;
          R = R.parentElement;
        }
        return document.scrollingElement;
      }(I.value);
      H && H !== document.scrollingElement && (E.value = H.scrollTop);
    }
  }), Q(() => {
    var F;
    return c(pe, null, [(F = t.activator) == null ? void 0 : F.call(t, { isActive: i.value, props: G({ ref: B }, L.value, e.activatorProps) }), C.value && c(pa, { disabled: !a.value, to: a.value }, { default: () => [m.value && c("div", G({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": i.value, "v-overlay--contained": e.contained }, d.value, y.value, e.class], style: [V.value, { top: Z(E.value) }, e.style], ref: I }, h, l), [c(Ti, G({ color: b, modelValue: i.value && !!e.scrim }, _.value), null), c(Ne, { appear: !0, persisted: !0, transition: e.transition, target: T.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var H;
      return [fe(c("div", G({ ref: w, class: ["v-overlay__content", e.contentClass], style: [k.value, A.value] }, P.value, e.contentProps), [(H = t.default) == null ? void 0 : H.call(t, { isActive: i })]), [[rt, i.value], [De("click-outside"), { handler: O, closeConditional: z, include: () => [T.value] }]])];
    } })])] })]);
  }), { activatorEl: T, animateClick: W, contentEl: w, globalTop: x, localTop: S, updateLocation: g };
} }), _n = Symbol("Forwarded refs");
function On(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function Cn(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[_n] = t, new Proxy(e, { get(o, r) {
    if (Reflect.has(o, r))
      return Reflect.get(o, r);
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const i of t)
        if (i.value && Reflect.has(i.value, r)) {
          const a = Reflect.get(i.value, r);
          return typeof a == "function" ? a.bind(i.value) : a;
        }
    }
  }, has(o, r) {
    if (Reflect.has(o, r))
      return !0;
    if (typeof r == "symbol" || r.startsWith("__"))
      return !1;
    for (const i of t)
      if (i.value && Reflect.has(i.value, r))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(o, r) {
    var a;
    const i = Reflect.getOwnPropertyDescriptor(o, r);
    if (i)
      return i;
    if (typeof r != "symbol" && !r.startsWith("__")) {
      for (const s of t) {
        if (!s.value)
          continue;
        const d = On(s.value, r) ?? ("_" in s.value ? On((a = s.value._) == null ? void 0 : a.setupState, r) : void 0);
        if (d)
          return d;
      }
      for (const s of t) {
        const d = s.value && s.value[_n];
        if (!d)
          continue;
        const y = d.slice();
        for (; y.length; ) {
          const v = y.shift(), m = On(v.value, r);
          if (m)
            return m;
          const f = v.value && v.value[_n];
          f && y.push(...f);
        }
      }
    }
  } });
}
const Ei = D({ id: String, ...Zn(ea({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: uo } }), ["absolute"]) }, "VMenu"), Fi = X()({ name: "VMenu", props: Ei(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = de(e, "modelValue"), { scopeId: o } = Zo(), r = $e(), i = p(() => e.id || `v-menu-${r}`), a = N(), s = ue(Hn, null), d = oe(0);
  function y() {
    s == null || s.closeParents();
  }
  function v(b) {
    var x, S;
    e.disabled || b.key === "Tab" && (l.value = !1, (S = (x = a.value) == null ? void 0 : x.activatorEl) == null || S.focus());
  }
  function m(b) {
    var S;
    if (e.disabled)
      return;
    const x = (S = a.value) == null ? void 0 : S.contentEl;
    x && l.value ? b.key === "ArrowDown" ? (b.preventDefault(), rn(x, "next")) : b.key === "ArrowUp" && (b.preventDefault(), rn(x, "prev")) : ["ArrowDown", "ArrowUp"].includes(b.key) && (l.value = !0, b.preventDefault(), setTimeout(() => setTimeout(() => m(b))));
  }
  Ae(Hn, { register() {
    ++d.value;
  }, unregister() {
    --d.value;
  }, closeParents() {
    setTimeout(() => {
      d.value || (l.value = !1, s == null || s.closeParents());
    }, 40);
  } }), q(l, (b) => {
    b ? s == null || s.register() : s == null || s.unregister();
  });
  const f = p(() => G({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": i.value, onKeydown: m }, e.activatorProps));
  return Q(() => {
    const [b] = Gl.filterProps(e);
    return c(Gl, G({ ref: a, class: ["v-menu", e.class], style: e.style }, b, { modelValue: l.value, "onUpdate:modelValue": (x) => l.value = x, absolute: !0, activatorProps: f.value, "onClick:outside": y, onKeydown: v }, o), { activator: t.activator, default: function() {
      for (var x = arguments.length, S = new Array(x), V = 0; V < x; V++)
        S[V] = arguments[V];
      return c(ke, { root: "VMenu" }, { default: () => {
        var T;
        return [(T = t.default) == null ? void 0 : T.call(t, ...S)];
      } });
    } });
  }), Cn({ id: i, ΨopenChildren: d }, a);
} }), Li = D({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ae(), ...zt({ transition: { component: co } }) }, "VCounter"), ta = X()({ name: "VCounter", functional: !0, props: Li(), setup(e, n) {
  let { slots: t } = n;
  const l = p(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return Q(() => c(Ne, { transition: e.transition }, { default: () => [fe(c("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[rt, e.active]])] })), {};
} }), zi = D({ floating: Boolean, ...ae() }, "VFieldLabel"), en = X()({ name: "VFieldLabel", props: zi(), setup(e, n) {
  let { slots: t } = n;
  return Q(() => c(Eo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Pi = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], vl = D({ appendInnerIcon: ie, bgColor: String, clearable: Boolean, clearIcon: { type: ie, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ie, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Pi.includes(e) }, "onClick:clear": Ee(), "onClick:appendInner": Ee(), "onClick:prependInner": Ee(), ...ae(), ...ko(), ...Ke(), ...me() }, "VField"), pl = X()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Do(), ...vl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { themeClasses: r } = we(e), { loaderClasses: i } = sl(e), { focusClasses: a, isFocused: s, focus: d, blur: y } = jt(e), { InputIcon: v } = Po(e), { roundedClasses: m } = Ye(e), { rtlClasses: f } = Et(), b = p(() => e.dirty || e.active), x = p(() => !(e.singleLine || !e.label && !o.label)), S = $e(), V = p(() => e.id || `input-${S}`), T = p(() => `${V.value}-messages`), B = N(), L = N(), P = N(), _ = p(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: k, backgroundColorStyles: C } = mt(Y(e, "bgColor")), { textColorClasses: h, textColorStyles: I } = Me(p(() => e.error || e.disabled ? void 0 : b.value && s.value ? e.color : e.baseColor));
  q(b, (g) => {
    if (x.value) {
      const O = B.value.$el, z = L.value.$el;
      requestAnimationFrame(() => {
        const $ = el(O), M = z.getBoundingClientRect(), E = M.x - $.x, W = M.y - $.y - ($.height / 2 - M.height / 2), j = M.width / 0.75, U = Math.abs(j - $.width) > 1 ? { maxWidth: Z(j) } : void 0, F = getComputedStyle(O), H = getComputedStyle(z), R = 1e3 * parseFloat(F.transitionDuration) || 150, K = parseFloat(H.getPropertyValue("--v-field-label-scale")), ee = H.getPropertyValue("color");
        O.style.visibility = "visible", z.style.visibility = "hidden", ot(O, { transform: `translate(${E}px, ${W}px) scale(${K})`, color: ee, ...U }, { duration: R, easing: sn, direction: g ? "normal" : "reverse" }).finished.then(() => {
          O.style.removeProperty("visibility"), z.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = p(() => ({ isActive: b, isFocused: s, controlRef: P, blur: y, focus: d }));
  function A(g) {
    g.target !== document.activeElement && g.preventDefault();
  }
  return Q(() => {
    var E, W, j;
    const g = e.variant === "outlined", O = o["prepend-inner"] || e.prependInnerIcon, z = !(!e.clearable && !o.clear), $ = !!(o["append-inner"] || e.appendInnerIcon || z), M = o.label ? o.label({ ...w.value, label: e.label, props: { for: V.value } }) : e.label;
    return c("div", G({ class: ["v-field", { "v-field--active": b.value, "v-field--appended": $, "v-field--center-affix": e.centerAffix ?? !_.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": O, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !M, [`v-field--variant-${e.variant}`]: !0 }, r.value, k.value, a.value, i.value, m.value, f.value, e.class], style: [C.value, I.value, e.style], onClick: A }, t), [c("div", { class: "v-field__overlay" }, null), c(Vo, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: o.loader }), O && c("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && c(v, { key: "prepend-icon", name: "prependInner" }, null), (E = o["prepend-inner"]) == null ? void 0 : E.call(o, w.value)]), c("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && x.value && c(en, { key: "floating-label", ref: L, class: [h.value], floating: !0, for: V.value }, { default: () => [M] }), c(en, { ref: B, for: V.value }, { default: () => [M] }), (W = o.default) == null ? void 0 : W.call(o, { ...w.value, props: { id: V.value, class: "v-field__input", "aria-describedby": T.value }, focus: d, blur: y })]), z && c(vo, { key: "clear" }, { default: () => [fe(c("div", { class: "v-field__clearable", onMousedown: (U) => {
      U.preventDefault(), U.stopPropagation();
    } }, [o.clear ? o.clear() : c(v, { name: "clear" }, null)]), [[rt, e.dirty]])] }), $ && c("div", { key: "append", class: "v-field__append-inner" }, [(j = o["append-inner"]) == null ? void 0 : j.call(o, w.value), e.appendInnerIcon && c(v, { key: "append-icon", name: "appendInner" }, null)]), c("div", { class: ["v-field__outline", h.value] }, [g && c(pe, null, [c("div", { class: "v-field__outline__start" }, null), x.value && c("div", { class: "v-field__outline__notch" }, [c(en, { ref: L, floating: !0, for: V.value }, { default: () => [M] })]), c("div", { class: "v-field__outline__end" }, null)]), _.value && x.value && c(en, { ref: L, floating: !0, for: V.value }, { default: () => [M] })])]);
  }), { controlRef: P };
} });
function na(e) {
  return At(e, Object.keys(pl.props).filter((n) => !En(n) && n !== "class" && n !== "style"));
}
const Di = ["color", "file", "time", "date", "datetime-local", "week", "month"], la = D({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Ht(), ...vl() }, "VTextField"), qn = X()({ name: "VTextField", directives: { Intersect: il }, inheritAttrs: !1, props: la(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const r = de(e, "modelValue"), { isFocused: i, focus: a, blur: s } = jt(e), d = p(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value ?? "").toString().length), y = p(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), v = p(() => ["plain", "underlined"].includes(e.variant));
  function m(_, k) {
    var C, h;
    e.autofocus && _ && ((h = (C = k[0].target) == null ? void 0 : C.focus) == null || h.call(C));
  }
  const f = N(), b = N(), x = N(), S = p(() => Di.includes(e.type) || e.persistentPlaceholder || i.value || e.active);
  function V() {
    var _;
    x.value !== document.activeElement && ((_ = x.value) == null || _.focus()), i.value || a();
  }
  function T(_) {
    l("mousedown:control", _), _.target !== x.value && (V(), _.preventDefault());
  }
  function B(_) {
    V(), l("click:control", _);
  }
  function L(_) {
    _.stopPropagation(), V(), ge(() => {
      r.value = null, eo(e["onClick:clear"], _);
    });
  }
  function P(_) {
    var C;
    const k = _.target;
    if (r.value = k.value, ((C = e.modelModifiers) == null ? void 0 : C.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const h = [k.selectionStart, k.selectionEnd];
      ge(() => {
        k.selectionStart = h[0], k.selectionEnd = h[1];
      });
    }
  }
  return Q(() => {
    const _ = !!(o.counter || e.counter || e.counterValue), k = !(!_ && !o.details), [C, h] = Tt(t), [{ modelValue: I, ...w }] = qe.filterProps(e), [A] = na(e);
    return c(qe, G({ ref: f, modelValue: r.value, "onUpdate:modelValue": (g) => r.value = g, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, C, w, { centerAffix: !v.value, focused: i.value }), { ...o, default: (g) => {
      let { id: O, isDisabled: z, isDirty: $, isReadonly: M, isValid: E } = g;
      return c(pl, G({ ref: b, onMousedown: T, onClick: B, "onClick:clear": L, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, A, { id: O.value, active: S.value || $.value, dirty: $.value || e.dirty, disabled: z.value, focused: i.value, error: E.value === !1 }), { ...o, default: (W) => {
        let { props: { class: j, ...U } } = W;
        const F = fe(c("input", G({ ref: x, value: r.value, onInput: P, autofocus: e.autofocus, readonly: M.value, disabled: z.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: V, onBlur: s }, U, h), null), [[De("intersect"), { handler: m }, null, { once: !0 }]]);
        return c(pe, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [e.prefix]), o.default ? c("div", { class: j, "data-no-activator": "" }, [o.default(), F]) : fa(F, { class: j }), e.suffix && c("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: k ? (g) => {
      var O;
      return c(pe, null, [(O = o.details) == null ? void 0 : O.call(o, g), _ && c(pe, null, [c("span", null, null), c(ta, { active: e.persistentCounter || i.value, value: d.value, max: y.value }, o.counter)])]);
    } : void 0 });
  }), Cn({}, f, b, x);
} }), Mi = D({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ie, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: ct }, ...Go({ itemChildren: !1 }) }, "Select"), Ri = D({ ...Mi(), ...Zn(la({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...zt({ transition: { component: uo } }) }, "VSelect"), Ni = X()({ name: "VSelect", props: Ri(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = al(), o = N(), r = N(), i = de(e, "menu"), a = p({ get: () => i.value, set: (g) => {
    var O;
    i.value && !g && ((O = r.value) != null && O.ΨopenChildren) || (i.value = g);
  } }), { items: s, transformIn: d, transformOut: y } = hi(e), v = de(e, "modelValue", [], (g) => d(g === null ? [null] : je(g)), (g) => {
    const O = y(g);
    return e.multiple ? O : O[0] ?? null;
  }), m = Mo(), f = p(() => v.value.map((g) => s.value.find((O) => e.valueComparator(O.value, g.value)) || g)), b = p(() => f.value.map((g) => g.props.value)), x = oe(!1);
  let S, V = "";
  const T = p(() => e.hideSelected ? s.value.filter((g) => !f.value.some((O) => O === g)) : s.value), B = p(() => e.hideNoData && !s.value.length || e.readonly || (m == null ? void 0 : m.isReadonly.value)), L = N();
  function P(g) {
    e.openOnClear && (a.value = !0);
  }
  function _() {
    B.value || (a.value = !a.value);
  }
  function k(g) {
    var $, M;
    if (e.readonly || m != null && m.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(g.key) && g.preventDefault(), ["Enter", "ArrowDown", " "].includes(g.key) && (a.value = !0), ["Escape", "Tab"].includes(g.key) && (a.value = !1), g.key === "Home" ? ($ = L.value) == null || $.focus("first") : g.key === "End" && ((M = L.value) == null || M.focus("last")), e.multiple || !function(E) {
      const W = E.key.length === 1, j = !E.ctrlKey && !E.metaKey && !E.altKey;
      return W && j;
    }(g)))
      return;
    const O = performance.now();
    O - S > 1e3 && (V = ""), V += g.key.toLowerCase(), S = O;
    const z = s.value.find((E) => E.title.toLowerCase().startsWith(V));
    z !== void 0 && (v.value = [z]);
  }
  function C(g) {
    var O;
    g.key === "Tab" && ((O = o.value) == null || O.focus());
  }
  function h(g) {
    if (e.multiple) {
      const O = b.value.findIndex((z) => e.valueComparator(z, g.value));
      if (O === -1)
        v.value = [...v.value, g];
      else {
        const z = [...v.value];
        z.splice(O, 1), v.value = z;
      }
    } else
      v.value = [g], a.value = !1;
  }
  function I(g) {
    var O;
    (O = L.value) != null && O.$el.contains(g.relatedTarget) || (a.value = !1);
  }
  function w() {
    var g;
    x.value && ((g = o.value) == null || g.focus());
  }
  function A(g) {
    x.value = !0;
  }
  return Q(() => {
    const g = !(!e.chips && !t.chip), O = !!(!e.hideNoData || T.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), z = v.value.length > 0, [$] = qn.filterProps(e), M = z || !x.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return c(qn, G({ ref: o }, $, { modelValue: v.value.map((E) => E.props.value).join(", "), "onUpdate:modelValue": (E) => {
      E == null && (v.value = []);
    }, focused: x.value, "onUpdate:focused": (E) => x.value = E, validationValue: v.externalValue, dirty: z, class: ["v-select", { "v-select--active-menu": a.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": v.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, readonly: !0, placeholder: M, "onClick:clear": P, "onMousedown:control": _, onBlur: I, onKeydown: k }), { ...t, default: () => c(pe, null, [c(Fi, G({ ref: r, modelValue: a.value, "onUpdate:modelValue": (E) => a.value = E, activator: "parent", contentClass: "v-select__content", disabled: B.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: w }, e.menuProps), { default: () => [O && c(Ci, { ref: L, selected: b.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (E) => E.preventDefault(), onKeydown: C, onFocusin: A, tabindex: "-1" }, { default: () => {
      var E, W, j;
      return [(E = t["prepend-item"]) == null ? void 0 : E.call(t), !T.value.length && !e.hideNoData && (((W = t["no-data"]) == null ? void 0 : W.call(t)) ?? c(fn, { title: l(e.noDataText) }, null)), T.value.map((U, F) => {
        var R;
        const H = G(U.props, { key: F, onClick: () => h(U) });
        return ((R = t.item) == null ? void 0 : R.call(t, { item: U, index: F, props: H })) ?? c(fn, H, { prepend: (K) => {
          let { isSelected: ee } = K;
          return c(pe, null, [e.multiple && !e.hideSelected ? c(Mn, { key: U.value, modelValue: ee, ripple: !1, tabindex: "-1" }, null) : void 0, U.props.prependIcon && c(se, { icon: U.props.prependIcon }, null)]);
        } });
      }), (j = t["append-item"]) == null ? void 0 : j.call(t)];
    } })] }), f.value.map((E, W) => {
      var U;
      const j = { "onClick:close": function(F) {
        F.stopPropagation(), F.preventDefault(), h(E);
      }, onMousedown(F) {
        F.preventDefault(), F.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return c("div", { key: E.value, class: "v-select__selection" }, [g ? t.chip ? c(ke, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: E.title } } }, { default: () => {
        var F;
        return [(F = t.chip) == null ? void 0 : F.call(t, { item: E, index: W, props: j })];
      } }) : c(li, G({ key: "chip", closable: e.closableChips, size: "small", text: E.title }, j), null) : ((U = t.selection) == null ? void 0 : U.call(t, { item: E, index: W })) ?? c("span", { class: "v-select__selection-text" }, [E.title, e.multiple && W < f.value.length - 1 && c("span", { class: "v-select__selection-comma" }, [ma(",")])])]);
    })]), "append-inner": function() {
      var U;
      for (var E = arguments.length, W = new Array(E), j = 0; j < E; j++)
        W[j] = arguments[j];
      return c(pe, null, [(U = t["append-inner"]) == null ? void 0 : U.call(t, ...W), e.menuIcon ? c(se, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Cn({ isFocused: x, menu: a, select: h }, o);
} }), Wi = D({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Ht(), ...dl() }, "VSwitch"), ji = X()({ name: "VSwitch", inheritAttrs: !1, props: Wi(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = de(e, "indeterminate"), r = de(e, "modelValue"), { loaderClasses: i } = sl(e), { isFocused: a, focus: s, blur: d } = jt(e), y = p(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), v = $e(), m = p(() => e.id || `switch-${v}`);
  function f() {
    o.value && (o.value = !1);
  }
  return Q(() => {
    const [b, x] = Tt(t), [S, V] = qe.filterProps(e), [T, B] = Dn.filterProps(e), L = N();
    function P(_) {
      var k, C;
      _.stopPropagation(), _.preventDefault(), (C = (k = L.value) == null ? void 0 : k.input) == null || C.click();
    }
    return c(qe, G({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": o.value }, i.value, e.class], style: e.style }, b, S, { id: m.value, focused: a.value }), { ...l, default: (_) => {
      let { id: k, messagesId: C, isDisabled: h, isReadonly: I, isValid: w } = _;
      return c(Dn, G({ ref: L }, T, { modelValue: r.value, "onUpdate:modelValue": [(A) => r.value = A, f], id: k.value, "aria-describedby": C.value, type: "checkbox", "aria-checked": o.value ? "mixed" : void 0, disabled: h.value, readonly: I.value, onFocus: s, onBlur: d }, x), { ...l, default: () => c("div", { class: "v-switch__track", onClick: P }, null), input: (A) => {
        let { textColorClasses: g, textColorStyles: O } = A;
        return c("div", { class: ["v-switch__thumb", g.value], style: O.value }, [e.loading && c(Vo, { name: "v-switch", active: !0, color: w.value === !1 ? void 0 : y.value }, { default: (z) => l.loader ? l.loader(z) : c(Co, { active: z.isActive, color: z.color, indeterminate: !0, size: "16", width: "2" }, null) })]);
      } });
    } });
  }), {};
} }), Hi = D({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Ht(), ...vl() }, "VTextarea"), qi = X()({ name: "VTextarea", directives: { Intersect: il }, inheritAttrs: !1, props: Hi(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const r = de(e, "modelValue"), { isFocused: i, focus: a, blur: s } = jt(e), d = p(() => typeof e.counterValue == "function" ? e.counterValue(r.value) : (r.value || "").toString().length), y = p(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function v(w, A) {
    var g, O;
    e.autofocus && w && ((O = (g = A[0].target) == null ? void 0 : g.focus) == null || O.call(g));
  }
  const m = N(), f = N(), b = oe(""), x = N(), S = p(() => e.persistentPlaceholder || i.value || e.active);
  function V() {
    var w;
    x.value !== document.activeElement && ((w = x.value) == null || w.focus()), i.value || a();
  }
  function T(w) {
    V(), l("click:control", w);
  }
  function B(w) {
    l("mousedown:control", w);
  }
  function L(w) {
    w.stopPropagation(), V(), ge(() => {
      r.value = "", eo(e["onClick:clear"], w);
    });
  }
  function P(w) {
    var g;
    const A = w.target;
    if (r.value = A.value, (g = e.modelModifiers) == null ? void 0 : g.trim) {
      const O = [A.selectionStart, A.selectionEnd];
      ge(() => {
        A.selectionStart = O[0], A.selectionEnd = O[1];
      });
    }
  }
  const _ = N(), k = N(+e.rows), C = p(() => ["plain", "underlined"].includes(e.variant));
  function h() {
    e.autoGrow && ge(() => {
      if (!_.value || !f.value)
        return;
      const w = getComputedStyle(_.value), A = getComputedStyle(f.value.$el), g = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), O = _.value.scrollHeight, z = parseFloat(w.lineHeight), $ = Tn(O ?? 0, Math.max(parseFloat(e.rows) * z + g, parseFloat(A.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * z + g || 1 / 0);
      k.value = Math.floor(($ - g) / z), b.value = Z($);
    });
  }
  let I;
  return He(() => {
    e.autoGrow || (k.value = +e.rows);
  }), bt(h), q(r, h), q(() => e.rows, h), q(() => e.maxRows, h), q(() => e.density, h), q(_, (w) => {
    w ? (I = new ResizeObserver(h), I.observe(_.value)) : I == null || I.disconnect();
  }), Ge(() => {
    I == null || I.disconnect();
  }), Q(() => {
    const w = !!(o.counter || e.counter || e.counterValue), A = !(!w && !o.details), [g, O] = Tt(t), [{ modelValue: z, ...$ }] = qe.filterProps(e), [M] = na(e);
    return c(qe, G({ ref: m, modelValue: r.value, "onUpdate:modelValue": (E) => r.value = E, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": C.value }, e.class], style: e.style }, g, $, { centerAffix: k.value === 1 && !C.value, focused: i.value }), { ...o, default: (E) => {
      let { isDisabled: W, isDirty: j, isReadonly: U, isValid: F } = E;
      return c(pl, G({ ref: f, style: { "--v-textarea-control-height": b.value }, onClick: T, onMousedown: B, "onClick:clear": L, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, M, { active: S.value || j.value, centerAffix: k.value === 1 && !C.value, dirty: j.value || e.dirty, disabled: W.value, focused: i.value, error: F.value === !1 }), { ...o, default: (H) => {
        let { props: { class: R, ...K } } = H;
        return c(pe, null, [e.prefix && c("span", { class: "v-text-field__prefix" }, [e.prefix]), fe(c("textarea", G({ ref: x, class: R, value: r.value, onInput: P, autofocus: e.autofocus, readonly: U.value, disabled: W.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: V, onBlur: s }, K, O), null), [[De("intersect"), { handler: v }, null, { once: !0 }]]), e.autoGrow && fe(c("textarea", { class: [R, "v-textarea__sizer"], "onUpdate:modelValue": (ee) => r.value = ee, ref: _, readonly: !0, "aria-hidden": "true" }, null), [[ga, r.value]]), e.suffix && c("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: A ? (E) => {
      var W;
      return c(pe, null, [(W = o.details) == null ? void 0 : W.call(o, E), w && c(pe, null, [c("span", null, null), c(ta, { active: e.persistentCounter || i.value, value: d.value, max: y.value }, o.counter)])]);
    } : void 0 });
  }), Cn({}, m, f, x);
} }), oa = Ue({ __name: "BooleanIcons", props: Oe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const n = e, t = ue(Symbol.for("vuetify:icons")), l = st(e, "modelValue"), o = p(() => Te({ icon: n.iconFalse, iconOptions: t, name: "false" })), r = p(() => Te({ icon: n.iconTrue, iconOptions: t, name: "true" }));
  return (i, a) => l.value ? (le(), it(u(se), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: i.iconTrueColor, icon: u(r), size: "x-small", title: i.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (le(), it(u(se), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: i.iconFalseColor, icon: u(o), size: "x-small", title: i.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ve = "v-inline-fields", qt = (e) => {
  const { field: n = "", density: t = "", disabled: l = !1, iconSet: o = "mdi", loading: r = !1, loadingWait: i, tableField: a = !1 } = e;
  return { [`${ve}`]: !0, [`${ve}--container`]: !0, [`${ve}--container-disabled`]: u(l), [`${ve}--container-table`]: a, [`${ve}--container-icon-set-${o}`]: !0, [`${ve}--container-loading`]: r && i, [`${ve}--container-${n}`]: !0, [`${ve}--container-${n}-${t}`]: !0, [`vi-${n}`]: !0, [`vi-${n}-${t}`]: !0 };
}, Ut = (e) => {
  const { field: n = "", density: t = "" } = e;
  return { [`${ve}--display-wrapper-value`]: !0, [`${n}`]: !0, "v-input": !0, [`v-input--density-${t}`]: !0, "v-input--horizontal": !0 };
}, fl = (e) => {
  const { density: n = "", variant: t = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${n}`]: !0, [`v-text-field--plain-${t}`]: !0 };
}, aa = (e) => {
  const { density: n = "" } = e;
  return { [`v-selection-control--density-${n}`]: !0 };
}, Gt = (e, n, t) => {
  const { error: l = !1, empty: o = !1 } = t;
  return { [`${ve}`]: !0, [`${ve}--display-value-${e}`]: !0, [`${ve}--display-value`]: !0, [`${ve}--display-wrapper-value-empty`]: u(o), [`text-${n}`]: !u(l), "text-danger": u(l) };
}, Kt = (e) => {
  const { name: n, active: t = !1 } = e;
  return { [`${ve}`]: !0, [`${ve}--field`]: !0, [`${ve}--field-${n}`]: !0, [`${ve}--field-active`]: t };
}, ml = Ue({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: n }) {
  const t = e, l = ut(), o = ue(Symbol.for("vuetify:icons")), r = p(() => t.error), i = p(() => ({ [`${ve}--save-fields-container`]: !0, "align-center": !0, "d-flex": !0 })), a = p(() => t.loading), s = Le({ ...l, ...t }), d = p(() => (o == null ? void 0 : o.defaultSet) === "fa" ? "fa-spin" : (o == null ? void 0 : o.defaultSet) === "mdi" ? "mdi-spin" : ""), y = p(() => Te({ icon: t.cancelIcon, iconOptions: o, name: "false" })), v = p(() => Te({ icon: t.loadingIcon, iconOptions: o, name: "loading" })), m = p(() => Te({ icon: t.saveIcon, iconOptions: o, name: "save" }));
  function f() {
    n("close");
  }
  function b() {
    n("save");
  }
  return (x, S) => (le(), ce("div", G({ class: u(i) }, x.$attrs), [c(vn, { class: "ms-1", color: u(s).saveButtonColor, disabled: u(r), icon: "", size: u(s).saveButtonSize, title: u(a) ? "Loading" : u(s).saveButtonTitle, variant: u(s).saveButtonVariant, onClick: b }, { default: ye(() => [u(a) || u(s).hideSaveIcon ? u(s).hideSaveIcon ? Yn("", !0) : (le(), it(se, { key: 1, class: te(u(d)), color: u(s).loadingIconColor, icon: u(v) }, null, 8, ["class", "color", "icon"])) : (le(), it(se, { key: 0, color: u(r) ? "error" : u(s).saveIconColor, icon: u(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"]), c(vn, { class: "ms-1", color: u(s).cancelButtonColor, icon: "", size: u(s).cancelButtonSize, title: u(s).cancelButtonTitle, variant: u(s).cancelButtonVariant, onClick: f }, { default: ye(() => [c(se, { class: "text-default", color: u(s).cancelIconColor, icon: u(y) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"])], 16));
} }), gl = (e) => {
  const { required: n, rules: t } = e;
  let { value: l } = e;
  l = u(l);
  const o = [];
  let r = !1;
  if (n && !l)
    return o.push("Field is required."), { errors: !0, results: o };
  if (t) {
    for (const i of t) {
      const a = (typeof i == "function" ? i : () => i)(l);
      a !== !0 && (typeof a == "string" ? o.push(a) : console.warn(`${a} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    r = o.length > 0;
  }
  return { errors: r, results: o };
}, Yt = (e) => {
  const { attrs: n, closeSiblings: t, fieldOnly: l, props: o, showField: r, timeOpened: i } = e;
  let a = i;
  return t && !l && (a = /* @__PURE__ */ new Date()), { settings: { ...n, ...o }, showField: !u(r), timeOpened: a };
}, ia = (e) => {
  const { length: n = 0 } = e;
  let { suffix: t, text: l } = e;
  return l = l.toString(), t = t || "...", l.length > n ? `${l.substring(0, n)}${t}` : l;
}, Xt = (e) => {
  const { alignItems: n } = e;
  return { "align-items": n };
}, Jt = (e) => {
  const { underlineStyle: n, underlineWidth: t, color: l, error: o, underlined: r } = e;
  let { underlineColor: i } = e;
  i = i || l;
  const a = { "border-bottom-color": `rgb(var(--v-theme-${i}))`, "border-bottom-style": n, "border-bottom-width": t };
  return u(o) && (a["border-bottom-color"] = "rgb(var(--v-theme-danger))"), r || (a["border-bottom"] = "none"), a;
}, Zt = ["error", "update", "update:closeSiblingFields", "update:model-value"], Ui = { class: "v-selection-control__wrapper" }, Gi = Ue({ __name: "VInlineCheckbox", props: Oe(St({ density: {}, falseIcon: {}, trueIcon: {}, alignItems: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ya }), { modelValue: { type: Boolean } }), emits: Oe([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, l = st(e, "modelValue"), o = ut(), r = Ct(), i = ue(Symbol.for("vuetify:icons"));
  console.log(i);
  let a = Le({ ...o, ...t });
  const s = N(!1), d = N(!1), y = N(null);
  q(() => t.loading, (w, A) => {
    !w && A && d.value && _();
  });
  const v = p(() => Te({ icon: a.cancelIcon, iconOptions: i, name: "false" })), m = p(() => Te({ icon: t.trueIcon, iconOptions: i, name: "checkboxFalse" })), f = p(() => Te({ icon: t.iconTrue, iconOptions: i, name: "checkboxTrue" })), b = p(() => l.value == a.trueValue), x = p(() => qt({ density: a.density, disabled: a.disabled, field: "v-checkbox", loading: t.loading, loadingWait: a.loadingWait, tableField: a.tableField })), S = p(() => Ut({ density: a.density, field: "v-checkbox" })), V = aa({ density: a.density }), T = p(() => Kt({ active: d.value, name: "checkbox" })), B = p(() => Gt("checkbox", a.valueColor, { error: s })), L = p(() => Xt({ alignItems: a.alignItems })), P = p(() => Jt({ color: a.color, error: s, underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined }));
  function _() {
    if (a.disabled || a.loadingWait && t.loading)
      return;
    const w = Yt({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: t, showField: d, timeOpened: y.value });
    a = { ...a, ...w.settings }, d.value = w.showField, y.value = w.timeOpened, C !== null && a.closeSiblings && d.value && !a.fieldOnly && C.emit(w.timeOpened);
  }
  function k(w) {
    l.value = w, n("update", w), _();
  }
  let C, h;
  function I(w) {
    n("update:closeSiblingFields", y), d.value && y.value !== w && _();
  }
  return a.closeSiblings && import("@vueuse/core").then(({ useEventBus: w }) => {
    C = w(Ot), h = C.on(I);
  }), xt(() => {
    h !== void 0 && C.off(I);
  }), (w, A) => (le(), ce("div", { class: te(u(x)), style: Ve(u(L)) }, [u(d) || u(a).fieldOnly ? (le(), ce("div", { key: 1, class: te(u(T)) }, [c(Qa, G(w.$attrs, { modelValue: l.value, "onUpdate:modelValue": [A[1] || (A[1] = (g) => l.value = g), k], color: u(a).color, density: u(a).density, disabled: w.loading, error: u(s), "false-icon": u(m), "false-value": u(a).falseValue, "hide-details": u(a).hideDetails, label: u(a).label, "true-icon": u(f), value: u(a).trueValue }), kt({ _: 2 }, [Vt(u(r), (g, O) => ({ name: O, fn: ye((z) => [Bt(w.$slots, O, It(_t({ ...z })))]) })), u(r).append ? void 0 : { name: "append", fn: ye(() => [u(a).fieldOnly ? Yn("", !0) : (le(), it(vn, { key: 0, class: "ms-1", color: u(a).cancelButtonColor, disabled: w.loading, icon: "", size: u(a).cancelButtonSize, title: u(a).cancelButtonTitle, variant: u(a).cancelButtonVariant, onClick: _ }, { default: ye(() => [c(se, { color: u(a).cancelIconColor, icon: u(v) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"]))]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "true-icon", "value"])], 2)) : (le(), ce("div", { key: 0, class: te(["v-inline-fields--container-display-container", u(S)]) }, [xe("div", { class: te(u(V)) }, [xe("div", Ui, [w.icons ? (le(), ce("div", { key: 0, class: te(["v-inline-fields--container-display-container-value-icons", u(B)]), style: Ve(u(P)), onClick: _ }, [c(u(oa), { modelValue: u(b), "onUpdate:modelValue": A[0] || (A[0] = (g) => tt(b) ? b.value = g : null), "icon-false": u(a).iconFalse, "icon-false-color": u(a).iconFalseColor, "icon-false-title": u(a).iconFalseTitle, "icon-true": u(a).iconTrue, "icon-true-color": u(a).iconTrueColor, "icon-true-title": u(a).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (le(), ce("div", { key: 1, class: te(["d-inline-flex align-center justify-center", u(B)]), style: Ve(u(P)), onClick: _ }, wt(u(b)), 7))])], 2)], 2))], 6));
} }), Ki = { class: "v-inline-fields--display-wrapper" }, Un = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, Yi = Un(Ue({ __name: "VInlineSelect", props: Oe(St({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ha }), { modelValue: { type: Boolean } }), emits: Oe([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, l = st(e, "modelValue"), o = ut(), r = Ct(), i = ue(Symbol.for("vuetify:icons"));
  let a = Le({ ...o, ...t });
  const s = N(!1), d = N(!1), y = N(), v = N(!1), m = N(null);
  let f = l.value;
  q(() => t.loading, ($, M) => {
    !$ && M && v.value && C();
  });
  const b = p(() => Te({ icon: t.clearIcon, iconOptions: i, name: "clear" })), x = p(() => l.value && l.value[a.itemTitle] ? (s.value = !1, l.value[a.itemTitle]) : (l.value = "", s.value = !0, a.emptyText));
  He(() => {
    y.value = a.items || [];
  });
  const S = p(() => qt({ density: a.density, disabled: a.disabled, field: "v-select", iconSet: i == null ? void 0 : i.defaultSet, loading: t.loading, loadingWait: a.loadingWait, tableField: a.tableField })), V = p(() => Ut({ density: a.density, field: "v-select" })), T = fl({ density: a.density, variant: a.variant }), B = p(() => Kt({ active: v.value, name: "select" })), L = p(() => Gt("select", a.valueColor, { empty: s, error: d })), P = p(() => Xt({ alignItems: a.alignItems })), _ = p(() => Jt({ color: a.color, error: d, underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined }));
  function k() {
    d.value = !1, l.value = f, C();
  }
  function C() {
    if (a.disabled || a.loadingWait && t.loading)
      return;
    const $ = Yt({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: t, showField: v, timeOpened: m.value });
    a = { ...a, ...$.settings }, v.value = $.showField, m.value = $.timeOpened, g !== null && a.closeSiblings && v.value && !a.fieldOnly && g.emit($.timeOpened);
  }
  const h = N(), I = p(() => h.value);
  function w() {
    const $ = gl({ required: a.required, rules: a.rules, value: l });
    return d.value = $.errors, h.value = $.results, $.results;
  }
  function A() {
    f = l.value, n("update", l.value);
  }
  let g, O;
  function z($) {
    n("update:closeSiblingFields", m), v.value && m.value !== $ && k();
  }
  return q(() => v.value, () => {
    v.value && w();
  }), q(() => l.value, () => {
    v.value && w();
  }), a.closeSiblings && import("@vueuse/core").then(({ useEventBus: $ }) => {
    g = $(Ot), O = g.on(z);
  }), xt(() => {
    O !== void 0 && g.off(z);
  }), ($, M) => (le(), ce("div", { class: te(u(S)), style: Ve(u(P)) }, [u(v) || u(a).fieldOnly ? (le(), ce("div", { key: 1, class: te(u(B)) }, [c(Ni, G($.$attrs, { modelValue: l.value, "onUpdate:modelValue": M[0] || (M[0] = (E) => l.value = E), autofocus: !u(a).fieldOnly || u(a).autofocus, "clear-icon": u(b), clearable: u(a).clearable, color: u(a).color, density: u(a).density, disabled: $.loading, error: u(d), "error-messages": u(I), "hide-details": u(a).hideDetails, "hide-selected": u(a).hideSelected, "item-title": u(a).itemTitle, "item-value": u(a).itemValue, items: u(y), label: u(a).label, loading: $.loading, menu: u(a).menu, variant: u(a).variant, width: "100%", onKeyup: on(k, ["esc"]) }), kt({ _: 2 }, [Vt(u(r), (E, W) => ({ name: W, fn: ye((j) => [Bt($.$slots, W, It(_t({ ...j })), void 0, !0)]) })), u(r).append ? void 0 : { name: "append", fn: ye(() => [c(u(ml), { "cancel-button-color": u(a).cancelButtonColor, "cancel-button-size": u(a).cancelButtonSize, "cancel-button-title": u(a).cancelButtonTitle, "cancel-button-variant": u(a).cancelButtonVariant, "cancel-icon": u(a).cancelIcon, "cancel-icon-color": u(a).cancelIconColor, error: u(d), "field-only": u(a).fieldOnly, "hide-save-icon": u(a).hideSaveIcon, loading: $.loading, "loading-icon": u(a).loadingIcon, "loading-icon-color": u(a).loadingIconColor, "save-button-color": u(a).saveButtonColor, "save-button-size": u(a).saveButtonSize, "save-button-title": u(a).saveButtonTitle, "save-button-variant": u(a).saveButtonVariant, "save-icon": u(a).saveIcon, "save-icon-color": u(a).saveIconColor, onClose: k, onSave: A }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 2)) : (le(), ce("div", { key: 0, class: te(u(V)) }, [xe("div", { class: te(u(T)) }, [xe("div", Ki, [xe("div", { class: te(["d-inline-flex", u(L)]), style: Ve(u(_)), onClick: C }, wt(u(x)), 7)])], 2)], 2))], 6));
} }), [["__scopeId", "data-v-24bc7fc7"]]), Xi = { class: "v-selection-control__wrapper" }, Ji = Ue({ __name: "VInlineSwitch", props: Oe(St({ density: {}, falseIcon: {}, alignItems: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ba }), { modelValue: { type: Boolean } }), emits: Oe([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, l = st(e, "modelValue"), o = ut(), r = Ct(), i = ue(Symbol.for("vuetify:icons"));
  let a = Le({ ...o, ...t });
  const s = N(!1), d = N(!1), y = N(null);
  q(() => t.loading, (h, I) => {
    !h && I && d.value && L();
  });
  const v = p(() => Te({ icon: a.cancelIcon, iconOptions: i, name: "false" })), m = p(() => l.value == a.trueValue), f = p(() => qt({ density: a.density, disabled: a.disabled, field: "v-switch", loading: t.loading, loadingWait: a.loadingWait, tableField: a.tableField })), b = p(() => Ut({ density: a.density, field: "v-switch" })), x = aa({ density: a.density }), S = p(() => Kt({ active: d.value, name: "switch" })), V = p(() => Gt("switch", a.valueColor, { error: s })), T = p(() => Xt({ alignItems: a.alignItems })), B = p(() => Jt({ color: a.color, error: s, underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined }));
  function L() {
    if (a.disabled || a.loadingWait && t.loading)
      return;
    const h = Yt({ attrs: o, closeSiblings: a.closeSiblings, fieldOnly: a.fieldOnly, props: t, showField: d.value, timeOpened: y.value });
    a = { ...a, ...h.settings }, d.value = h.showField, y.value = h.timeOpened, _ !== null && a.closeSiblings && d.value && !a.fieldOnly && _.emit(h.timeOpened);
  }
  function P(h) {
    l.value = h, n("update", h);
  }
  let _, k;
  function C(h) {
    n("update:closeSiblingFields", y), d.value && y.value !== h && L();
  }
  return a.closeSiblings && import("@vueuse/core").then(({ useEventBus: h }) => {
    _ = h(Ot), k = _.on(C);
  }), xt(() => {
    k !== void 0 && _.off(C);
  }), (h, I) => (le(), ce("div", { class: te(u(f)), style: Ve(u(T)) }, [u(d) || u(a).fieldOnly ? (le(), ce("div", { key: 1, class: te(u(S)) }, [c(ji, G(h.$attrs, { modelValue: l.value, "onUpdate:modelValue": [I[1] || (I[1] = (w) => l.value = w), P], color: u(a).color, density: u(a).density, disabled: h.loading, error: u(s), "false-icon": u(a).falseIcon, "false-value": u(a).falseValue, "hide-details": u(a).hideDetails, label: u(a).label, loading: h.loading, value: u(a).trueValue }), kt({ _: 2 }, [Vt(u(r), (w, A) => ({ name: A, fn: ye((g) => [Bt(h.$slots, A, It(_t({ ...g })))]) })), u(r).append ? void 0 : { name: "append", fn: ye(() => [u(a).fieldOnly ? Yn("", !0) : (le(), it(vn, { key: 0, class: "ms-3", color: u(a).cancelButtonColor, icon: "", size: u(a).cancelButtonSize, title: u(a).cancelButtonTitle, variant: u(a).cancelButtonVariant, onClick: L }, { default: ye(() => [c(se, { color: u(a).cancelIconColor, icon: u(v) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"]))]), key: "0" }]), 1040, ["modelValue", "color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "value"])], 2)) : (le(), ce("div", { key: 0, class: te(u(b)) }, [xe("div", { class: te(u(x)) }, [xe("div", Xi, [h.icons ? (le(), ce("div", { key: 0, class: te(u(V)), style: Ve(u(B)), onClick: L }, [c(u(oa), { modelValue: u(m), "onUpdate:modelValue": I[0] || (I[0] = (w) => tt(m) ? m.value = w : null), "icon-false": u(a).iconFalse, "icon-false-color": u(a).iconFalseColor, "icon-false-title": u(a).iconFalseTitle, "icon-true": u(a).iconTrue, "icon-true-color": u(a).iconTrueColor, "icon-true-title": u(a).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (le(), ce("div", { key: 1, class: te(["d-inline-flex align-center justify-center", u(V)]), style: Ve(u(B)), onClick: L }, wt(u(m)), 7))])], 2)], 2))], 6));
} }), Zi = { class: "v-inline-fields--display-wrapper" }, Qi = Ue({ __name: "VInlineTextField", props: Oe(St({ density: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ca }), { modelValue: { type: Boolean } }), emits: Oe([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, l = st(e, "modelValue"), o = ut(), r = Ct();
  let i = Le({ ...o, ...t });
  const a = N(!1), s = N(!1), d = N(!1), y = N(null);
  let v = l.value;
  q(() => t.loading, (g, O) => {
    !g && O && d.value && P();
  });
  const m = p(() => l.value ? (a.value = !1, i.truncateLength ? ia({ length: i.truncateLength, suffix: i.truncateSuffix, text: l.value }) : l.value) : (a.value = !0, i.emptyText)), f = p(() => qt({ density: i.density, disabled: i.disabled, field: "v-text-field", loading: t.loading, loadingWait: i.loadingWait, tableField: i.tableField })), b = p(() => Ut({ density: i.density, field: "v-text-field" })), x = fl({ density: i.density, variant: i.variant }), S = p(() => Kt({ active: d.value, name: "text-field" })), V = p(() => Gt("text-field", i.valueColor, { empty: a, error: s })), T = p(() => Xt({ alignItems: i.alignItems })), B = p(() => Jt({ color: i.color, error: s, underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined }));
  function L() {
    s.value = !1, l.value = v, P();
  }
  function P() {
    if (i.disabled || i.loadingWait && t.loading)
      return;
    const g = Yt({ attrs: o, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: t, showField: d, timeOpened: y.value });
    i = { ...i, ...g.settings }, d.value = g.showField, y.value = g.timeOpened, I !== null && i.closeSiblings && d.value && !i.fieldOnly && I.emit(g.timeOpened);
  }
  const _ = N(), k = p(() => _.value);
  function C() {
    const g = gl({ required: i.required, rules: i.rules, value: l });
    return s.value = g.errors, _.value = g.results, g.results;
  }
  function h() {
    s.value ? s.value = !0 : (v = l.value, n("update", l.value));
  }
  let I, w;
  function A(g) {
    n("update:closeSiblingFields", y), d.value && y.value !== g && L();
  }
  return q(() => d.value, () => {
    d.value && C();
  }), q(() => l.value, () => {
    d.value && C();
  }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: g }) => {
    I = g(Ot), w = I.on(A);
  }), xt(() => {
    w !== void 0 && I.off(A);
  }), (g, O) => (le(), ce("div", { class: te(u(f)), style: Ve(u(T)) }, [u(d) || u(i).fieldOnly ? (le(), ce("div", { key: 1, class: te(u(S)) }, [c(qn, G(g.$attrs, { modelValue: l.value, "onUpdate:modelValue": O[1] || (O[1] = (z) => l.value = z), autofocus: !u(i).fieldOnly || u(i).autofocus, color: u(i).color, density: u(i).density, disabled: g.loading, error: u(s), "error-messages": u(k), "hide-details": u(i).hideDetails, label: u(i).label, loading: g.loading, variant: u(i).variant, width: "100%", onKeyup: [on(h, ["enter"]), on(L, ["esc"])] }), kt({ _: 2 }, [Vt(u(r), (z, $) => ({ name: $, fn: ye((M) => [Bt(g.$slots, $, It(_t({ ...M })), void 0, !0)]) })), u(r).append ? void 0 : { name: "append", fn: ye(() => [c(u(ml), { modelValue: l.value, "onUpdate:modelValue": O[0] || (O[0] = (z) => l.value = z), "cancel-button-color": u(i).cancelButtonColor, "cancel-button-size": u(i).cancelButtonSize, "cancel-button-title": u(i).cancelButtonTitle, "cancel-button-variant": u(i).cancelButtonVariant, "cancel-icon": u(i).cancelIcon, "cancel-icon-color": u(i).cancelIconColor, error: u(s), "field-only": u(i).fieldOnly, "hide-save-icon": u(i).hideSaveIcon, loading: g.loading, "loading-icon": u(i).loadingIcon, "loading-icon-color": u(i).loadingIconColor, required: u(i).required, "save-button-color": u(i).saveButtonColor, "save-button-size": u(i).saveButtonSize, "save-button-title": u(i).saveButtonTitle, "save-button-variant": u(i).saveButtonVariant, "save-icon": u(i).saveIcon, "save-icon-color": u(i).saveIconColor, onClose: L, onSave: h }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant", "onKeyup"])], 2)) : (le(), ce("div", { key: 0, class: te(u(b)) }, [xe("div", { class: te(u(x)) }, [xe("div", Zi, [xe("div", { class: te(["d-inline-flex", u(V)]), style: Ve(u(B)), onClick: P }, wt(u(m)), 7)])], 2)], 2))], 6));
} }), er = { class: "v-inline-fields--container-display-container-fields" }, Fe = { VInlineCheckbox: Gi, VInlineSelect: Yi, VInlineSwitch: Ji, VInlineTextField: Un(Qi, [["__scopeId", "data-v-f15394b0"]]), VInlineTextarea: Un(Ue({ __name: "VInlineTextarea", props: Oe(St({ autoGrow: {}, density: {}, rows: {}, rules: {}, variant: {}, alignItems: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Sa }), { modelValue: { type: Boolean } }), emits: Oe([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = e, l = st(e, "modelValue"), o = ut(), r = Ct();
  let i = Le({ ...o, ...t });
  const a = N(!1), s = N(!1), d = N(!1), y = N(null);
  let v = l.value;
  q(() => t.loading, (g, O) => {
    !g && O && d.value && P();
  });
  const m = p(() => l.value ? (a.value = !1, i.truncateLength ? ia({ length: i.truncateLength, suffix: i.truncateSuffix, text: l.value }) : l.value) : (a.value = !0, i.emptyText)), f = p(() => qt({ density: i.density, disabled: i.disabled, field: "v-textarea", loading: t.loading, loadingWait: i.loadingWait, tableField: i.tableField })), b = p(() => Ut({ density: i.density, field: "v-textarea" })), x = fl({ density: i.density, variant: i.variant }), S = p(() => Kt({ active: d.value, name: "textarea" })), V = p(() => Gt("textarea", i.valueColor, { empty: a, error: s })), T = p(() => Xt({ alignItems: i.alignItems })), B = p(() => Jt({ color: i.color, error: s, underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined }));
  function L() {
    s.value = !1, l.value = v, P();
  }
  function P() {
    if (i.disabled || i.loadingWait && t.loading)
      return;
    const g = Yt({ attrs: o, closeSiblings: i.closeSiblings, fieldOnly: i.fieldOnly, props: t, showField: d, timeOpened: y.value });
    i = { ...i, ...g.settings }, d.value = g.showField, y.value = g.timeOpened, I !== null && i.closeSiblings && d.value && !i.fieldOnly && I.emit(g.timeOpened);
  }
  const _ = N(), k = p(() => _.value);
  function C() {
    const g = gl({ required: i.required, rules: i.rules, value: l });
    return s.value = g.errors, _.value = g.results, g.results;
  }
  function h() {
    v = l.value, n("update", l.value);
  }
  let I, w;
  function A(g) {
    n("update:closeSiblingFields", y), d.value && y.value !== g && L();
  }
  return q(() => d.value, () => {
    d.value && C();
  }), q(() => l.value, () => {
    d.value && C();
  }), i.closeSiblings && import("@vueuse/core").then(({ useEventBus: g }) => {
    I = g(Ot), w = I.on(A);
  }), xt(() => {
    w !== void 0 && I.off(A);
  }), (g, O) => (le(), ce("div", { class: te(u(f)), style: Ve(u(T)) }, [u(d) || u(i).fieldOnly ? (le(), ce("div", { key: 1, class: te(u(S)) }, [c(qi, G(g.$attrs, { modelValue: l.value, "onUpdate:modelValue": O[0] || (O[0] = (z) => l.value = z), "auto-grow": u(i).autoGrow, autofocus: !u(i).fieldOnly || u(i).autofocus, color: u(i).color, density: u(i).density, disabled: g.loading, error: u(s), "error-messages": u(k), "hide-details": u(i).hideDetails, label: u(i).label, loading: g.loading, rows: u(i).rows, variant: u(i).variant, width: "100%", onKeyup: on(L, ["esc"]) }), kt({ _: 2 }, [Vt(u(r), (z, $) => ({ name: $, fn: ye((M) => [Bt(g.$slots, $, It(_t({ ...M })), void 0, !0)]) })), u(r).append ? void 0 : { name: "append", fn: ye(() => [c(u(ml), { "cancel-button-color": u(i).cancelButtonColor, "cancel-button-size": u(i).cancelButtonSize, "cancel-button-title": u(i).cancelButtonTitle, "cancel-button-variant": u(i).cancelButtonVariant, "cancel-icon": u(i).cancelIcon, "cancel-icon-color": u(i).cancelIconColor, error: u(s), "field-only": u(i).fieldOnly, "hide-save-icon": u(i).hideSaveIcon, loading: g.loading, "loading-icon": u(i).loadingIcon, "loading-icon-color": u(i).loadingIconColor, "save-button-color": u(i).saveButtonColor, "save-button-size": u(i).saveButtonSize, "save-button-title": u(i).saveButtonTitle, "save-button-variant": u(i).saveButtonVariant, "save-icon": u(i).saveIcon, "save-icon-color": u(i).saveIconColor, onClose: L, onSave: h }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 2)) : (le(), ce("div", { key: 0, class: te(["v-inline-fields--container-display-container", u(b)]) }, [xe("div", { class: te(u(x)) }, [xe("div", er, [xe("div", { class: te(["d-inline-flex align-center justify-center", u(V)]), style: Ve(u(B)), onClick: P }, wt(u(m)), 7)])], 2)], 2))], 6));
} }), [["__scopeId", "data-v-6642257d"]]) }, tr = (e) => {
  for (const n in Fe) {
    const t = Fe[n];
    e.component(t.name, t);
  }
};
for (const e in Fe)
  Fe[e].install = tr;
const lr = Fe.VInlineCheckbox, or = Fe.VInlineSelect, ar = Fe.VInlineSwitch, ir = Fe.VInlineTextField, rr = Fe.VInlineTextarea, sr = { VInlineFields: Fe };
export {
  lr as VInlineCheckbox,
  or as VInlineSelect,
  ar as VInlineSwitch,
  ir as VInlineTextField,
  rr as VInlineTextarea,
  sr as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{grid-row-start:1;grid-column-start:1;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:grid;grid-template-rows:minmax(100%,1fr);grid-template-columns:1fr;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-grid;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-responsive__sizer,.v-responsive__content{position:relative;grid-row-start:1;grid-column-start:1}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn{margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset);overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-field--single-line .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select--chips .v-select__selection,.v-select--selection-slot .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select--chips .v-select__selection:first-child,.v-select--selection-slot .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(var(--v-field-input-min-height) + var(--v-input-chips-margin-bottom) + 2px);padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%;--v-field-input-min-height: max(var(--v-input-control-height, 56px), 1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom))}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-radius:4px 0 0 4px}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-radius:0 4px 4px 0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-radius:4px 0 0 4px}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-switch .v-label{padding-inline-start:10px}.v-switch__loader{display:flex}.v-switch__track,.v-switch__thumb{background-color:currentColor;transition:none}.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__track,.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__thumb{background-color:rgb(var(--v-theme-error))}.v-selection-control--dirty .v-switch__thumb{color:currentColor}.v-switch__track{border-radius:8px;height:14px;opacity:.6;width:36px;cursor:pointer}.v-switch--inset .v-switch__track{border-radius:14px;height:28px;width:48px}.v-switch__thumb{align-items:center;border-radius:50%;color:rgb(var(--v-theme-surface));display:flex;height:20px;justify-content:center;width:20px;pointer-events:none;transition:.15s transform cubic-bezier(.4,0,.2,1);box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch--inset .v-switch__thumb{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch:not(.v-switch--loading) .v-icon~.v-switch__thumb{display:none}.v-switch--loading .v-selection-control__input>.v-icon{display:none}.v-switch .v-selection-control{min-height:var(--v-input-control-height)}.v-switch .v-selection-control__input{border-radius:50%;transition:.15s transform cubic-bezier(.4,0,.2,1);transform:translate(-10px);position:absolute}.v-switch .v-selection-control--dirty .v-selection-control__input{transform:translate(10px)}.v-switch.v-switch--indeterminate .v-selection-control__input{transform:scale(.8)}.v-switch.v-switch--indeterminate .v-switch__thumb{transform:scale(.75);box-shadow:none}.v-switch.v-switch--inset .v-selection-control__wrapper{width:auto}.v-textarea .v-field{--v-textarea-control-height: var(--v-input-control-height)}.v-textarea .v-field__field{--v-input-control-height: var(--v-textarea-control-height)}.v-textarea .v-field__input{flex:1 1 auto;outline:none;-webkit-mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px))}.v-textarea .v-field__input.v-textarea__sizer{visibility:hidden;position:absolute;top:0;left:0;height:0!important;min-height:0!important;pointer-events:none}.v-textarea--auto-grow .v-field__input{overflow:hidden}.v-textarea--no-resize .v-field__input{resize:none}.v-textarea .v-field--no-label textarea,.v-textarea .v-field--active textarea{opacity:1}.v-textarea textarea{opacity:0;flex:1;min-width:0;transition:.15s opacity cubic-bezier(.4,0,.2,1)}.v-textarea textarea:focus,.v-textarea textarea:active{outline:none}.v-textarea textarea:invalid{box-shadow:none}.v-inline-fields--container-icon-set-fa[data-v-24bc7fc7] .v-field__clearable{align-items:center;font-size:.8rem}.v-inline-fields--container-icon-set-fa[data-v-24bc7fc7] .v-field__append-inner{align-items:center}[data-v-24bc7fc7] .v-input__append{padding:0!important}[data-v-24bc7fc7] .v-field__field{align-items:flex-end!important}[data-v-24bc7fc7] .v-field__clearable{padding:0!important}.icons-container[data-v-24bc7fc7]{height:100%}[data-v-f15394b0] .v-input__append{padding:0!important}.truncate[data-v-f15394b0]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.icons-container[data-v-f15394b0]{height:100%}[data-v-6642257d] .v-input__append{padding:0!important}.icons-container[data-v-6642257d]{height:100%}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px}.v-inline-fields--container{display:flex;height:100%}.v-inline-fields--container-disabled .v-inline-fields--display-wrapper-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-wrapper-value{cursor:wait!important}.v-inline-fields--container-table{--v-inline-fields-top-padding-compact: 0;--v-inline-fields-top-padding-comfortable: 0;--v-inline-fields-top-padding-default: 0}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{min-height:unset!important}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable{line-height:1rem}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-textarea .v-inline-fields--field .v-input--density-default .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-input__control,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-input__control{padding-bottom:3px}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field__append-inner,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field__append-inner{padding:0!important}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-top:0}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input{padding-bottom:7px}.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-select .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-bottom:2px}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-bottom:0}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-compact .v-field--variant-plain .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-comfortable .v-field--variant-plain .v-field__input{padding-top:4px}.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-underlined .v-field__input,.v-inline-fields--container-table.vi-v-text-field .v-inline-fields--field .v-input--density-default .v-field--variant-plain .v-field__input{padding-top:1px}.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{max-width:100%;overflow:hidden}.v-inline-fields--display-wrapper-value{cursor:pointer;padding-bottom:1px}.v-inline-fields--display-wrapper-value-empty{color:#909090;font-style:italic}.v-inline-fields--field-checkbox .v-input,.v-inline-fields--field-switch .v-input{display:flex}.v-inline-fields--field-checkbox .v-input__append,.v-inline-fields--field-switch .v-input__append{margin-left:0}.v-inline-fields--field-checkbox :deep(.v-input__control),.v-inline-fields--field-switch :deep(.v-input__control){display:inline-flex!important}.v-inline-fields--field-select,.v-inline-fields--field-textarea,.v-inline-fields--field-text-field{width:100%}.v-inline-fields--field-select .v-input__append,.v-inline-fields--field-textarea .v-input__append,.v-inline-fields--field-text-field .v-input__append{margin-left:.1rem}.v-inline-fields--save-fields-container{height:100%}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
