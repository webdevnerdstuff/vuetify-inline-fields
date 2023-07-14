import { Fragment as fe, reactive as Te, computed as p, watchEffect as Ye, toRefs as po, capitalize as vo, warn as At, watch as Y, onScopeDispose as ke, effectScope as rl, inject as ve, ref as R, unref as s, provide as We, shallowRef as se, defineComponent as Me, camelize as fo, h as _t, getCurrentInstance as Va, onBeforeUnmount as an, readonly as sl, toRaw as nn, TransitionGroup as Aa, Transition as yn, createVNode as d, mergeProps as X, onBeforeMount as yo, nextTick as Fe, withDirectives as Ie, resolveDirective as je, vShow as Tn, isRef as mn, onMounted as zn, toRef as Q, Text as _a, resolveDynamicComponent as Oa, Teleport as sn, cloneVNode as Pa, createTextVNode as mo, vModelText as $a, mergeModels as _e, useModel as un, openBlock as U, createBlock as he, useSlots as cn, createElementBlock as le, normalizeClass as J, normalizeStyle as ge, renderSlot as we, normalizeProps as ye, createCommentVNode as pe, createElementVNode as Se, toDisplayString as ul, useAttrs as dn, withCtx as re, mergeDefaults as Sn, onUnmounted as Bn, createSlots as qe, renderList as He, guardReactiveProps as be, withKeys as ft } from "vue";
import { useTheme as cl } from "vuetify";
import { useWindowSize as Ea } from "@vueuse/core";
/**
 * @name vuetify-inline-fields
 * @version 1.0.0-beta-1.5
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const xn = Symbol("identifier"), kn = { elevation: 5, variant: "flat" }, Qn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, dl = { autofocus: !0 }, Ot = { hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, go = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Ta = { ...Qn, ...go, ...Ot, falseIcon: void 0, icons: !0, trueIcon: void 0 }, za = { ...Qn, ...dl, ...Ot, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, Da = { ...Qn, ...go, icons: !0, falseIcon: "" }, La = { ...dl, ...Ot, ...Qn, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ho = { ...Qn, ...dl, ...Ot, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Wa = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, ze = (e) => {
  const { icon: l, iconOptions: n, name: t } = e;
  if (l)
    return l;
  const a = Wa[n == null ? void 0 : n.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${t}. Please set the icon prop.`);
  const i = a[t];
  if (!i)
    throw new Error(`VInlineFields: No ${t} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function G(e, l) {
  return (n) => Object.keys(e).reduce((t, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return t[a] = n && a in n ? { ...i, default: n[a] } : i, l && !t[a].source && (t[a].source = l), t;
  }, {});
}
const ie = G({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component");
function Pl(e, l, n) {
  const t = l.length - 1;
  if (t < 0)
    return e === void 0 ? n : e;
  for (let a = 0; a < t; a++) {
    if (e == null)
      return n;
    e = e[l[a]];
  }
  return e == null || e[l[t]] === void 0 ? n : e[l[t]];
}
function Dn(e, l) {
  if (e === l)
    return !0;
  if (e instanceof Date && l instanceof Date && e.getTime() !== l.getTime() || e !== Object(e) || l !== Object(l))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(l).length && n.every((t) => Dn(e[t], l[t]));
}
function Ue(e, l, n) {
  if (l == null)
    return e === void 0 ? n : e;
  if (e !== Object(e)) {
    if (typeof l != "function")
      return n;
    const a = l(e, n);
    return a === void 0 ? n : a;
  }
  if (typeof l == "string")
    return function(a, i, u) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : Pl(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), u) : u;
    }(e, l, n);
  if (Array.isArray(l))
    return Pl(e, l, n);
  if (typeof l != "function")
    return n;
  const t = l(e, n);
  return t === void 0 ? n : t;
}
function ee(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${l}` : void 0;
}
function Gt(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function qt(e) {
  return e && "$el" in e ? e.$el : e;
}
const $l = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function et(e, l, n) {
  const t = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    l.some((u) => u instanceof RegExp ? u.test(i) : u === i) && !(n != null && n.some((u) => u === i)) ? t[i] = e[i] : a[i] = e[i];
  return [t, a];
}
function pl(e, l) {
  const n = { ...e };
  return l.forEach((t) => delete n[t]), n;
}
function nt(e) {
  return et(e, ["class", "style", "id", /^data-/]);
}
function tn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Hn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(l, Math.min(n, e));
}
function In() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const t = {};
  for (const a in e)
    t[a] = e[a];
  for (const a in l) {
    const i = e[a], u = l[a];
    Gt(i) && Gt(u) ? t[a] = In(i, u, n) : Array.isArray(i) && Array.isArray(u) && n ? t[a] = n(i, u) : t[a] = u;
  }
  return t;
}
function bo(e) {
  return e.map((l) => l.type === fe ? bo(l.children) : l).flat();
}
function pn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (pn.cache.has(e))
    return pn.cache.get(e);
  const l = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return pn.cache.set(e, l), l;
}
function yt(e, l) {
  if (!l || typeof l != "object")
    return [];
  if (Array.isArray(l))
    return l.map((n) => yt(e, n)).flat(1);
  if (Array.isArray(l.children))
    return l.children.map((n) => yt(e, n)).flat(1);
  if (l.component) {
    if (Object.getOwnPropertySymbols(l.component.provides).includes(e))
      return [l.component];
    if (l.component.subTree)
      return yt(e, l.component.subTree).flat(1);
  }
  return [];
}
function vl(e) {
  const l = Te({}), n = p(e);
  return Ye(() => {
    for (const t in n.value)
      l[t] = n.value[t];
  }, { flush: "sync" }), po(l);
}
function ht(e, l) {
  return e.includes(l);
}
pn.cache = /* @__PURE__ */ new Map();
const Ra = /^on[^a-z]/, Ht = (e) => Ra.test(e);
function El(e) {
  return e[2].toLowerCase() + e.slice(3);
}
const Ne = () => [Function, Array];
function Tl(e, l) {
  return !!(e[l = "on" + vo(l)] || e[`${l}Once`] || e[`${l}Capture`] || e[`${l}OnceCapture`] || e[`${l}CaptureOnce`]);
}
function Io(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  if (Array.isArray(e))
    for (const a of e)
      a(...n);
  else
    typeof e == "function" && e(...n);
}
function bt(e, l) {
  var a, i, u;
  const n = function(o) {
    const r = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((v) => `${v}:not([tabindex="-1"]):not([disabled])`).join(", ");
    return [...o.querySelectorAll(r)];
  }(e), t = n.indexOf(document.activeElement);
  if (l)
    if (l === "first")
      (a = n[0]) == null || a.focus();
    else if (l === "last")
      (i = n.at(-1)) == null || i.focus();
    else {
      let o, r = t;
      const v = l === "next" ? 1 : -1;
      do
        r += v, o = n[r];
      while ((!o || o.offsetParent == null) && r < n.length && r >= 0);
      o ? o.focus() : bt(e, l === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((u = n[0]) == null || u.focus());
}
const Co = ["top", "bottom"], Ma = ["start", "end", "left", "right"];
function Ut(e, l) {
  let [n, t] = e.split(" ");
  return t || (t = ht(Co, n) ? "start" : ht(Ma, n) ? "top" : "center"), { side: zl(n, l), align: zl(t, l) };
}
function zl(e, l) {
  return e === "start" ? l ? "right" : "left" : e === "end" ? l ? "left" : "right" : e;
}
function Dt(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function Lt(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Dl(e) {
  return { side: e.align, align: e.side };
}
function Ll(e) {
  return ht(Co, e.side) ? "y" : "x";
}
class wn {
  constructor(l) {
    let { x: n, y: t, width: a, height: i } = l;
    this.x = n, this.y = t, this.width = a, this.height = i;
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
function Wl(e, l) {
  return { x: { before: Math.max(0, l.left - e.left), after: Math.max(0, e.right - l.right) }, y: { before: Math.max(0, l.top - e.top), after: Math.max(0, e.bottom - l.bottom) } };
}
function fl(e) {
  const l = e.getBoundingClientRect(), n = getComputedStyle(e), t = n.transform;
  if (t) {
    let a, i, u, o, r;
    if (t.startsWith("matrix3d("))
      a = t.slice(9, -1).split(/, /), i = +a[0], u = +a[5], o = +a[12], r = +a[13];
    else {
      if (!t.startsWith("matrix("))
        return new wn(l);
      a = t.slice(7, -1).split(/, /), i = +a[0], u = +a[3], o = +a[4], r = +a[5];
    }
    const v = n.transformOrigin, y = l.x - o - (1 - i) * parseFloat(v), c = l.y - r - (1 - u) * parseFloat(v.slice(v.indexOf(" ") + 1)), f = i ? l.width / i : e.offsetWidth + 1, m = u ? l.height / u : e.offsetHeight + 1;
    return new wn({ x: y, y: c, width: f, height: m });
  }
  return new wn(l);
}
function Cn(e, l, n) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let t;
  try {
    t = e.animate(l, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return t.finished === void 0 && (t.finished = new Promise((a) => {
    t.onfinish = () => {
      a(t);
    };
  })), t;
}
const pt = /* @__PURE__ */ new WeakMap();
function So(e) {
  At(`Vuetify: ${e}`);
}
function Rl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
function ln(e, l) {
  let n;
  function t() {
    n = rl(), n.run(() => l.length ? l(() => {
      n == null || n.stop(), t();
    }) : l());
  }
  Y(e, (a) => {
    a && !n ? t() : a || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), ke(() => {
    n == null || n.stop();
  });
}
const yl = Symbol.for("vuetify:defaults");
function ml() {
  const e = ve(yl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function gn(e, l) {
  const n = ml(), t = R(e), a = p(() => {
    if (s(l == null ? void 0 : l.disabled))
      return n.value;
    const i = s(l == null ? void 0 : l.scoped), u = s(l == null ? void 0 : l.reset), o = s(l == null ? void 0 : l.root);
    let r = In(t.value, { prev: n.value });
    if (i)
      return r;
    if (u || o) {
      const v = Number(u || 1 / 0);
      for (let y = 0; y <= v && r && "prev" in r; y++)
        r = r.prev;
      return r && typeof o == "string" && o in r && (r = In(In(r, { prev: r }), r[o])), r;
    }
    return r.prev ? In(r.prev, r) : r;
  });
  return We(yl, a), a;
}
function Na() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ml();
  const t = xe("useDefaults");
  if (l = l ?? t.type.name ?? t.type.__name, !l)
    throw new Error("[Vuetify] Could not determine component name");
  const a = p(() => {
    var o;
    return (o = n.value) == null ? void 0 : o[e._as ?? l];
  }), i = new Proxy(e, { get(o, r) {
    var y, c, f, m;
    const v = Reflect.get(o, r);
    return r === "class" || r === "style" ? [(y = a.value) == null ? void 0 : y[r], v].filter((g) => g != null) : typeof r != "string" || function(g, b) {
      var h, x;
      return ((h = g.props) == null ? void 0 : h[b]) !== void 0 || ((x = g.props) == null ? void 0 : x[pn(b)]) !== void 0;
    }(t.vnode, r) ? v : ((c = a.value) == null ? void 0 : c[r]) ?? ((m = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : m[r]) ?? v;
  } }), u = se();
  return Ye(() => {
    if (a.value) {
      const o = Object.entries(a.value).filter((r) => {
        let [v] = r;
        return v.startsWith(v[0].toUpperCase());
      });
      o.length && (u.value = Object.fromEntries(o));
    }
  }), { props: i, provideSubDefaults: function() {
    ln(u, () => {
      var o;
      gn(In(((o = function(r) {
        const { provides: v } = xe("injectSelf");
        if (v && r in v)
          return v[r];
      }(yl)) == null ? void 0 : o.value) ?? {}, u.value));
    });
  } };
}
function Un(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return So("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = G(e.props ?? {}, e.name)();
    const l = Object.keys(e.props);
    e.filterProps = function(n) {
      return et(n, l, ["class", "style"]);
    }, e.props._as = String, e.setup = function(n, t) {
      const a = ml();
      if (!a.value)
        return e._setup(n, t);
      const { props: i, provideSubDefaults: u } = Na(n, n._as ?? e.name, a), o = e._setup(i, t);
      return u(), o;
    };
  }
  return e;
}
function Z() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (l) => (e ? Un : Me)(l);
}
function tt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return Z()({ name: n ?? vo(fo(e.replace(/__/g, "-"))), props: { tag: { type: String, default: l }, ...ie() }, setup(t, a) {
    let { slots: i } = a;
    return () => {
      var u;
      return _t(t.tag, { class: [e, t.class], style: t.style }, (u = i.default) == null ? void 0 : u.call(i));
    };
  } });
}
function Bo(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const l = e.getRootNode();
  return l !== document && l.getRootNode({ composed: !0 }) !== document ? null : l;
}
const It = "cubic-bezier(0.4, 0, 0.2, 1)";
function xe(e, l) {
  const n = Va();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${l || "must be called from inside a setup function"}`);
  return n;
}
function Ke() {
  const e = xe(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return pn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let xo = 0, mt = /* @__PURE__ */ new WeakMap();
function De() {
  const e = xe("getUid");
  if (mt.has(e))
    return mt.get(e);
  {
    const l = xo++;
    return mt.set(e, l), l;
  }
}
function ko(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (l ? ja(e) : gl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Ct(e, l) {
  const n = [];
  if (l && e && !l.contains(e))
    return n;
  for (; e && (gl(e) && n.push(e), e !== l); )
    e = e.parentElement;
  return n;
}
function gl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return l.overflowY === "scroll" || l.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function ja(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const l = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(l.overflowY);
}
De.reset = () => {
  xo = 0, mt = /* @__PURE__ */ new WeakMap();
};
const Ee = typeof window < "u", hl = Ee && "IntersectionObserver" in window, Yt = Ee && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports("selector(:focus-visible)");
function te(e) {
  xe("useRender").render = e;
}
function bl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = R(), t = R();
  if (Ee) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (t.value = l === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    an(() => {
      a.disconnect();
    }), Y(n, (i, u) => {
      u && (a.unobserve(qt(u)), t.value = void 0), i && a.observe(qt(i));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: sl(t) };
}
function me(e, l, n) {
  let t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (y) => y, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (y) => y;
  const i = xe("useProxiedModel"), u = R(e[l] !== void 0 ? e[l] : n), o = pn(l), r = p(o !== l ? () => {
    var y, c, f, m;
    return e[l], !(!((y = i.vnode.props) != null && y.hasOwnProperty(l)) && !((c = i.vnode.props) != null && c.hasOwnProperty(o)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${l}`)) && !((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${o}`)));
  } : () => {
    var y, c;
    return e[l], !(!((y = i.vnode.props) != null && y.hasOwnProperty(l)) || !((c = i.vnode.props) != null && c.hasOwnProperty(`onUpdate:${l}`)));
  });
  ln(() => !r.value, () => {
    Y(() => e[l], (y) => {
      u.value = y;
    });
  });
  const v = p({ get() {
    const y = e[l];
    return t(r.value ? y : u.value);
  }, set(y) {
    const c = a(y), f = nn(r.value ? e[l] : u.value);
    f !== c && t(f) !== y && (u.value = c, i == null || i.emit(`update:${l}`, c));
  } });
  return Object.defineProperty(v, "externalValue", { get: () => r.value ? e[l] : u.value }), v;
}
const wo = Symbol.for("vuetify:locale");
function Il() {
  const e = ve(wo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function lt() {
  const e = ve(wo);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Ml = Symbol.for("vuetify:theme"), Ce = G({ theme: String }, "theme");
function Ve(e) {
  xe("provideTheme");
  const l = ve(Ml, null);
  if (!l)
    throw new Error("Could not find Vuetify theme injection");
  const n = p(() => e.theme ?? (l == null ? void 0 : l.name.value)), t = p(() => l.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...l, name: n, themeClasses: t };
  return We(Ml, a), a;
}
const Pe = G({ tag: { type: String, default: "div" } }, "tag"), Ga = G({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Ae(e, l, n) {
  return Z()({ name: e, props: Ga({ mode: n, origin: l }), setup(t, a) {
    let { slots: i } = a;
    const u = { onBeforeEnter(o) {
      t.origin && (o.style.transformOrigin = t.origin);
    }, onLeave(o) {
      if (t.leaveAbsolute) {
        const { offsetTop: r, offsetLeft: v, offsetWidth: y, offsetHeight: c } = o;
        o._transitionInitialStyles = { position: o.style.position, top: o.style.top, left: o.style.left, width: o.style.width, height: o.style.height }, o.style.position = "absolute", o.style.top = `${r}px`, o.style.left = `${v}px`, o.style.width = `${y}px`, o.style.height = `${c}px`;
      }
      t.hideOnLeave && o.style.setProperty("display", "none", "important");
    }, onAfterLeave(o) {
      if (t.leaveAbsolute && (o != null && o._transitionInitialStyles)) {
        const { position: r, top: v, left: y, width: c, height: f } = o._transitionInitialStyles;
        delete o._transitionInitialStyles, o.style.position = r || "", o.style.top = v || "", o.style.left = y || "", o.style.width = c || "", o.style.height = f || "";
      }
    } };
    return () => {
      const o = t.group ? Aa : yn;
      return _t(o, { name: t.disabled ? "" : e, css: !t.disabled, ...t.group ? void 0 : { mode: t.mode }, ...t.disabled ? {} : u }, i.default);
    };
  } });
}
function Fo(e, l) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return Z()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(t, a) {
    let { slots: i } = a;
    return () => _t(yn, { name: t.disabled ? "" : e, css: !t.disabled, ...t.disabled ? {} : l }, i.default);
  } });
}
function Vo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = fo(`offset-${l}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [l]: i.style[l] };
  }, onEnter(i) {
    const u = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const o = `${i[n]}px`;
    i.style[l] = "0", i.offsetHeight, i.style.transition = u.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[l] = o;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [l]: i.style[l] }, i.style.overflow = "hidden", i.style[l] = `${i[n]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[l] = "0");
  }, onAfterLeave: t, onLeaveCancelled: t };
  function t(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const u = i._initialStyle[l];
    i.style.overflow = i._initialStyle.overflow, u != null && (i.style[l] = u), delete i._initialStyle;
  }
}
const qa = G({ target: Object }, "v-dialog-transition"), Ao = Z()({ name: "VDialogTransition", props: qa(), setup(e, l) {
  let { slots: n } = l;
  const t = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), a.style.visibility = "";
    const { x: u, y: o, sx: r, sy: v, speed: y } = jl(e.target, a), c = Cn(a, [{ transform: `translate(${u}px, ${o}px) scale(${r}, ${v})`, opacity: 0 }, {}], { duration: 225 * y, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = Nl(a)) == null || f.forEach((m) => {
      Cn(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * y, easing: It });
    }), c.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var c;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: u, y: o, sx: r, sy: v, speed: y } = jl(e.target, a);
    Cn(a, [{}, { transform: `translate(${u}px, ${o}px) scale(${r}, ${v})`, opacity: 0 }], { duration: 125 * y, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (c = Nl(a)) == null || c.forEach((f) => {
      Cn(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * y, easing: It });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(yn, X({ name: "dialog-transition" }, t, { css: !1 }), n) : d(yn, { name: "dialog-transition" }, n);
} });
function Nl(e) {
  var n;
  const l = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return l && [...l];
}
function jl(e, l) {
  const n = e.getBoundingClientRect(), t = fl(l), [a, i] = getComputedStyle(l).transformOrigin.split(" ").map((x) => parseFloat(x)), [u, o] = getComputedStyle(l).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let r = n.left + n.width / 2;
  u === "left" || o === "left" ? r -= n.width / 2 : u !== "right" && o !== "right" || (r += n.width / 2);
  let v = n.top + n.height / 2;
  u === "top" || o === "top" ? v -= n.height / 2 : u !== "bottom" && o !== "bottom" || (v += n.height / 2);
  const y = n.width / t.width, c = n.height / t.height, f = Math.max(1, y, c), m = y / f || 0, g = c / f || 0, b = t.width * t.height / (window.innerWidth * window.innerHeight), h = b > 0.12 ? Math.min(1.5, 10 * (b - 0.12) + 1) : 1;
  return { x: r - (a + t.left), y: v - (i + t.top), sx: m, sy: g, speed: h };
}
Ae("fab-transition", "center center", "out-in"), Ae("dialog-bottom-transition"), Ae("dialog-top-transition"), Ae("fade-transition"), Ae("scale-transition"), Ae("scroll-x-transition"), Ae("scroll-x-reverse-transition"), Ae("scroll-y-transition"), Ae("scroll-y-reverse-transition"), Ae("slide-x-transition"), Ae("slide-x-reverse-transition");
const _o = Ae("slide-y-transition");
Ae("slide-y-reverse-transition");
const Ha = Fo("expand-transition", Vo()), Oo = Fo("expand-x-transition", Vo("", !0)), Ua = G({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Be = Z(!1)({ name: "VDefaultsProvider", props: Ua(), setup(e, l) {
  let { slots: n } = l;
  const { defaults: t, disabled: a, reset: i, root: u, scoped: o } = po(e);
  return gn(t, { reset: i, root: u, scoped: o, disabled: a }), () => {
    var r;
    return (r = n.default) == null ? void 0 : r.call(n);
  };
} }), hn = G({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function bn(e) {
  return { dimensionStyles: p(() => ({ height: ee(e.height), maxHeight: ee(e.maxHeight), maxWidth: ee(e.maxWidth), minHeight: ee(e.minHeight), minWidth: ee(e.minWidth), width: ee(e.width) })) };
}
const Po = G({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ie(), ...hn() }, "VResponsive"), Gl = Z()({ name: "VResponsive", props: Po(), setup(e, l) {
  let { slots: n } = l;
  const { aspectStyles: t } = function(i) {
    return { aspectStyles: p(() => {
      const u = Number(i.aspectRatio);
      return u ? { paddingBottom: String(1 / u * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = bn(e);
  return te(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: t.value }, null), (i = n.additional) == null ? void 0 : i.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), ot = G({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), en = (e, l) => {
  let { slots: n } = l;
  const { transition: t, disabled: a, ...i } = e, { component: u = yn, ...o } = typeof t == "object" ? t : {};
  return _t(u, X(typeof t == "string" ? { name: a ? "" : t } : o, i, { disabled: a }), n);
};
function ql(e, l) {
  var t;
  const n = (t = e._observe) == null ? void 0 : t[l.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[l.instance.$.uid]);
}
const Cl = { mounted: function(e, l) {
  if (!hl)
    return;
  const n = l.modifiers || {}, t = l.value, { handler: a, options: i } = typeof t == "object" ? t : { handler: t, options: {} }, u = new IntersectionObserver(function() {
    var c;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], r = arguments.length > 1 ? arguments[1] : void 0;
    const v = (c = e._observe) == null ? void 0 : c[l.instance.$.uid];
    if (!v)
      return;
    const y = o.some((f) => f.isIntersecting);
    !a || n.quiet && !v.init || n.once && !y && !v.init || a(y, o, r), y && n.once ? ql(e, l) : v.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[l.instance.$.uid] = { init: !1, observer: u }, u.observe(e);
}, unmounted: ql }, Ya = G({ alt: String, cover: Boolean, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, srcset: String, ...Po(), ...ie(), ...ot() }, "VImg"), $o = Z()({ name: "VImg", directives: { intersect: Cl }, props: Ya(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, l) {
  let { emit: n, slots: t } = l;
  const a = se(""), i = R(), u = se(e.eager ? "loading" : "idle"), o = se(), r = se(), v = p(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = p(() => v.value.aspect || o.value / r.value || 0);
  function c(B) {
    if ((!e.eager || !B) && (!hl || B || e.eager)) {
      if (u.value = "loading", v.value.lazySrc) {
        const C = new Image();
        C.src = v.value.lazySrc, h(C, null);
      }
      v.value.src && Fe(() => {
        var C, $;
        if (n("loadstart", ((C = i.value) == null ? void 0 : C.currentSrc) || v.value.src), ($ = i.value) == null ? void 0 : $.complete) {
          if (i.value.naturalWidth || m(), u.value === "error")
            return;
          y.value || h(i.value, null), f();
        } else
          y.value || h(i.value), g();
      });
    }
  }
  function f() {
    var B;
    g(), u.value = "loaded", n("load", ((B = i.value) == null ? void 0 : B.currentSrc) || v.value.src);
  }
  function m() {
    var B;
    u.value = "error", n("error", ((B = i.value) == null ? void 0 : B.currentSrc) || v.value.src);
  }
  function g() {
    const B = i.value;
    B && (a.value = B.currentSrc || B.src);
  }
  Y(() => e.src, () => {
    c(u.value !== "idle");
  }), Y(y, (B, C) => {
    !B && C && i.value && h(i.value);
  }), yo(() => c());
  let b = -1;
  function h(B) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const $ = () => {
      clearTimeout(b);
      const { naturalHeight: w, naturalWidth: E } = B;
      w || E ? (o.value = E, r.value = w) : B.complete || u.value !== "loading" || C == null ? (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (o.value = 1, r.value = 1) : b = window.setTimeout($, C);
    };
    $();
  }
  const x = p(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), O = () => {
    var $;
    if (!v.value.src || u.value === "idle")
      return null;
    const B = d("img", { class: ["v-img__img", x.value], src: v.value.src, srcset: v.value.srcset, alt: e.alt, sizes: e.sizes, ref: i, onLoad: f, onError: m }, null), C = ($ = t.sources) == null ? void 0 : $.call(t);
    return d(en, { transition: e.transition, appear: !0 }, { default: () => [Ie(C ? d("picture", { class: "v-img__picture" }, [C, B]) : B, [[Tn, u.value === "loaded"]])] });
  }, S = () => d(en, { transition: e.transition }, { default: () => [v.value.lazySrc && u.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", x.value], src: v.value.lazySrc, alt: e.alt }, null)] }), T = () => t.placeholder ? d(en, { transition: e.transition, appear: !0 }, { default: () => [(u.value === "loading" || u.value === "error" && !t.error) && d("div", { class: "v-img__placeholder" }, [t.placeholder()])] }) : null, N = () => t.error ? d(en, { transition: e.transition, appear: !0 }, { default: () => [u.value === "error" && d("div", { class: "v-img__error" }, [t.error()])] }) : null, P = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, k = se(!1);
  {
    const B = Y(y, (C) => {
      C && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          k.value = !0;
        });
      }), B());
    });
  }
  return te(() => {
    const [B] = Gl.filterProps(e);
    return Ie(d(Gl, X({ class: ["v-img", { "v-img--booting": !k.value }, e.class], style: [{ width: ee(e.width === "auto" ? o.value : e.width) }, e.style] }, B, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(fe, null, [d(O, null, null), d(S, null, null), d(P, null, null), d(T, null, null), d(N, null, null)]), default: t.default }), [[je("intersect"), { handler: c, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: i, state: u, naturalWidth: o, naturalHeight: r };
} }), Ln = G({ border: [Boolean, Number, String] }, "border");
function Wn(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { borderClasses: p(() => {
    const n = mn(e) ? e.value : e.border, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--border`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`border-${a}`);
    return t;
  }) };
}
function Sl(e) {
  return vl(() => {
    const l = [], n = {};
    return e.value.background && (Rl(e.value.background) ? n.backgroundColor = e.value.background : l.push(`bg-${e.value.background}`)), e.value.text && (Rl(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : l.push(`text-${e.value.text}`)), { colorClasses: l, colorStyles: n };
  });
}
function Xe(e, l) {
  const n = p(() => ({ text: mn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Sl(n);
  return { textColorClasses: t, textColorStyles: a };
}
function Yn(e, l) {
  const n = p(() => ({ background: mn(e) ? e.value : l ? e[l] : null })), { colorClasses: t, colorStyles: a } = Sl(n);
  return { backgroundColorClasses: t, backgroundColorStyles: a };
}
const Rn = G({ elevation: { type: [Number, String], validator(e) {
  const l = parseInt(e);
  return !isNaN(l) && l >= 0 && l <= 24;
} } }, "elevation");
function Mn(e) {
  return { elevationClasses: p(() => {
    const l = mn(e) ? e.value : e.elevation, n = [];
    return l == null || n.push(`elevation-${l}`), n;
  }) };
}
const Ze = G({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function Je(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { roundedClasses: p(() => {
    const n = mn(e) ? e.value : e.rounded, t = [];
    if (n === !0 || n === "")
      t.push(`${l}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const a of String(n).split(" "))
        t.push(`rounded-${a}`);
    return t;
  }) };
}
const Xa = [null, "default", "comfortable", "compact"], Ge = G({ density: { type: String, default: "default", validator: (e) => Xa.includes(e) } }, "density");
function Qe(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { densityClasses: p(() => `${l}--density-${e.density}`) };
}
const Ka = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function at(e, l) {
  return d(fe, null, [e && d("span", { key: "overlay", class: `${l}__overlay` }, null), d("span", { key: "underlay", class: `${l}__underlay` }, null)]);
}
const rn = G({ color: String, variant: { type: String, default: "elevated", validator: (e) => Ka.includes(e) } }, "variant");
function it(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = p(() => {
    const { variant: i } = s(e);
    return `${l}--variant-${i}`;
  }), { colorClasses: t, colorStyles: a } = Sl(p(() => {
    const { variant: i, color: u } = s(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: u };
  }));
  return { colorClasses: t, colorStyles: a, variantClasses: n };
}
const Eo = G({ divided: Boolean, ...Ln(), ...ie(), ...Ge(), ...Rn(), ...Ze(), ...Pe(), ...Ce(), ...rn() }, "VBtnGroup"), Hl = Z()({ name: "VBtnGroup", props: Eo(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { densityClasses: a } = Qe(e), { borderClasses: i } = Wn(e), { elevationClasses: u } = Mn(e), { roundedClasses: o } = Je(e);
  gn({ VBtn: { height: "auto", color: Q(e, "color"), density: Q(e, "density"), flat: !0, variant: Q(e, "variant") } }), te(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, t.value, i.value, a.value, u.value, o.value, e.class], style: e.style }, n));
} }), To = G({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), zo = G({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Do(e, l) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const t = xe("useGroupItem");
  if (!t)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = De();
  We(Symbol.for(`${l.description}:id`), a);
  const i = ve(l, null);
  if (!i) {
    if (!n)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${l.description}`);
  }
  const u = Q(e, "value"), o = p(() => i.disabled.value || e.disabled);
  i.register({ id: a, value: u, disabled: o }, t), an(() => {
    i.unregister(a);
  });
  const r = p(() => i.isSelected(a)), v = p(() => r.value && [i.selectedClass.value, e.selectedClass]);
  return Y(r, (y) => {
    t.emit("group:selected", { value: y });
  }), { id: a, isSelected: r, toggle: () => i.select(a, !r.value), select: (y) => i.select(a, y), selectedClass: v, value: u, disabled: o, group: i };
}
function Lo(e, l) {
  let n = !1;
  const t = Te([]), a = me(e, "modelValue", [], (v) => v == null ? [] : Ul(t, tn(v)), (v) => {
    const y = function(c, f) {
      const m = [];
      return f.forEach((g) => {
        const b = c.findIndex((h) => h.id === g);
        if (~b) {
          const h = c[b];
          m.push(h.value != null ? h.value : b);
        }
      }), m;
    }(t, v);
    return e.multiple ? y : y[0];
  }), i = xe("useGroup");
  function u() {
    const v = t.find((y) => !y.disabled);
    v && e.mandatory === "force" && !a.value.length && (a.value = [v.id]);
  }
  function o(v) {
    if (e.multiple && So('This method is not supported when using "multiple" prop'), a.value.length) {
      const y = a.value[0], c = t.findIndex((g) => g.id === y);
      let f = (c + v) % t.length, m = t[f];
      for (; m.disabled && f !== c; )
        f = (f + v) % t.length, m = t[f];
      if (m.disabled)
        return;
      a.value = [t[f].id];
    } else {
      const y = t.find((c) => !c.disabled);
      y && (a.value = [y.id]);
    }
  }
  zn(() => {
    u();
  }), an(() => {
    n = !0;
  });
  const r = { register: function(v, y) {
    const c = v, f = yt(Symbol.for(`${l.description}:id`), i == null ? void 0 : i.vnode).indexOf(y);
    f > -1 ? t.splice(f, 0, c) : t.push(c);
  }, unregister: function(v) {
    if (n)
      return;
    u();
    const y = t.findIndex((c) => c.id === v);
    t.splice(y, 1);
  }, selected: a, select: function(v, y) {
    const c = t.find((f) => f.id === v);
    if (!y || !(c != null && c.disabled))
      if (e.multiple) {
        const f = a.value.slice(), m = f.findIndex((b) => b === v), g = ~m;
        if (y = y ?? !g, g && e.mandatory && f.length <= 1 || !g && e.max != null && f.length + 1 > e.max)
          return;
        m < 0 && y ? f.push(v) : m >= 0 && !y && f.splice(m, 1), a.value = f;
      } else {
        const f = a.value.includes(v);
        if (e.mandatory && f)
          return;
        a.value = y ?? !f ? [v] : [];
      }
  }, disabled: Q(e, "disabled"), prev: () => o(t.length - 1), next: () => o(1), isSelected: (v) => a.value.includes(v), selectedClass: p(() => e.selectedClass), items: p(() => t), getItemIndex: (v) => function(y, c) {
    const f = Ul(y, [c]);
    return f.length ? y.findIndex((m) => m.id === f[0]) : -1;
  }(t, v) };
  return We(l, r), r;
}
function Ul(e, l) {
  const n = [];
  return l.forEach((t) => {
    const a = e.find((u) => Dn(t, u.value)), i = e[t];
    (a == null ? void 0 : a.value) != null ? n.push(a.id) : i != null && n.push(i.id);
  }), n;
}
const Wo = Symbol.for("vuetify:v-btn-toggle"), Za = G({ ...Eo(), ...To() }, "VBtnToggle");
Z()({ name: "VBtnToggle", props: Za(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { isSelected: t, next: a, prev: i, select: u, selected: o } = Lo(e, Wo);
  return te(() => {
    const [r] = Hl.filterProps(e);
    return d(Hl, X({ class: ["v-btn-toggle", e.class] }, r, { style: e.style }), { default: () => {
      var v;
      return [(v = n.default) == null ? void 0 : v.call(n, { isSelected: t, next: a, prev: i, select: u, selected: o })];
    } });
  }), { next: a, prev: i, select: u };
} });
const ue = [String, Function, Object, Array], Ja = Symbol.for("vuetify:icons"), St = G({ icon: { type: ue }, tag: { type: String, required: !0 } }, "icon"), Yl = Z()({ name: "VComponentIcon", props: St(), setup(e, l) {
  let { slots: n } = l;
  return () => {
    const t = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(t, null, null) : (a = n.default) == null ? void 0 : a.call(n)];
    } });
  };
} }), Qa = Un({ name: "VSvgIcon", inheritAttrs: !1, props: St(), setup(e, l) {
  let { attrs: n } = l;
  return () => d(e.tag, X(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((t) => Array.isArray(t) ? d("path", { d: t[0], "fill-opacity": t[1] }, null) : d("path", { d: t }, null)) : d("path", { d: e.icon }, null)])] });
} });
Un({ name: "VLigatureIcon", props: St(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Un({ name: "VClassIcon", props: St(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const ei = ["x-small", "small", "default", "large", "x-large"], rt = G({ size: { type: [String, Number], default: "default" } }, "size");
function st(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return vl(() => {
    let n, t;
    return ht(ei, e.size) ? n = `${l}--size-${e.size}` : e.size && (t = { width: ee(e.size), height: ee(e.size) }), { sizeClasses: n, sizeStyles: t };
  });
}
const ni = G({ color: String, start: Boolean, end: Boolean, icon: ue, ...ie(), ...rt(), ...Pe({ tag: "i" }), ...Ce() }, "VIcon"), ce = Z()({ name: "VIcon", props: ni(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = R(), { themeClasses: i } = Ve(e), { iconData: u } = ((y) => {
    const c = ve(Ja);
    if (!c)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: p(() => {
      var h;
      const f = s(y);
      if (!f)
        return { component: Yl };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (h = c.aliases) == null ? void 0 : h[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: Qa, icon: m };
      if (typeof m != "string")
        return { component: Yl, icon: m };
      const g = Object.keys(c.sets).find((x) => typeof m == "string" && m.startsWith(`${x}:`)), b = g ? m.slice(g.length + 1) : m;
      return { component: c.sets[g ?? c.defaultSet].component, icon: b };
    }) };
  })(p(() => a.value || e.icon)), { sizeClasses: o } = st(e), { textColorClasses: r, textColorStyles: v } = Xe(Q(e, "color"));
  return te(() => {
    var c, f;
    const y = (c = t.default) == null ? void 0 : c.call(t);
    return y && (a.value = (f = bo(y).filter((m) => m.type === _a && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), d(u.value.component, { tag: e.tag, icon: u.value.icon, class: ["v-icon", "notranslate", i.value, o.value, r.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [o.value ? void 0 : { fontSize: ee(e.size), height: ee(e.size), width: ee(e.size) }, v.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [y] });
  }), {};
} });
function Ro(e, l) {
  const n = R(), t = se(!1);
  if (hl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), t.value = !!i.find((u) => u.isIntersecting);
    }, l);
    an(() => {
      a.disconnect();
    }), Y(n, (i, u) => {
      u && (a.unobserve(u), t.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: t };
}
const ti = G({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ie(), ...rt(), ...Pe({ tag: "div" }), ...Ce() }, "VProgressCircular"), Mo = Z()({ name: "VProgressCircular", props: ti(), setup(e, l) {
  let { slots: n } = l;
  const t = 2 * Math.PI * 20, a = R(), { themeClasses: i } = Ve(e), { sizeClasses: u, sizeStyles: o } = st(e), { textColorClasses: r, textColorStyles: v } = Xe(Q(e, "color")), { textColorClasses: y, textColorStyles: c } = Xe(Q(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = Ro(), { resizeRef: g, contentRect: b } = bl(), h = p(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), x = p(() => Number(e.width)), O = p(() => o.value ? Number(e.size) : b.value ? b.value.width : Math.max(x.value, 32)), S = p(() => 20 / (1 - x.value / O.value) * 2), T = p(() => x.value / O.value * S.value), N = p(() => ee((100 - h.value) / 100 * t));
  return Ye(() => {
    f.value = a.value, g.value = a.value;
  }), te(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, u.value, r.value, e.class], style: [o.value, v.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${S.value} ${S.value}` }, [d("circle", { class: ["v-progress-circular__underlay", y.value], style: c.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": T.value, "stroke-dasharray": t, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": T.value, "stroke-dasharray": t, "stroke-dashoffset": N.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: h.value })])] })), {};
} }), Xl = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Bl = G({ location: String }, "location");
function xl(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: t } = lt();
  return { locationStyles: p(() => {
    if (!e.location)
      return {};
    const { side: i, align: u } = Ut(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, t.value);
    function o(v) {
      return n ? n(v) : 0;
    }
    const r = {};
    return i !== "center" && (l ? r[Xl[i]] = `calc(100% - ${o(i)}px)` : r[i] = 0), u !== "center" ? l ? r[Xl[u]] = `calc(100% - ${o(u)}px)` : r[u] = 0 : (i === "center" ? r.top = r.left = "50%" : r[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", r.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), r;
  }) };
}
const li = G({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ie(), ...Bl({ location: "top" }), ...Ze(), ...Pe(), ...Ce() }, "VProgressLinear"), oi = Z()({ name: "VProgressLinear", props: li(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), { isRtl: a, rtlClasses: i } = lt(), { themeClasses: u } = Ve(e), { locationStyles: o } = xl(e), { textColorClasses: r, textColorStyles: v } = Xe(e, "color"), { backgroundColorClasses: y, backgroundColorStyles: c } = Yn(p(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = Yn(e, "color"), { roundedClasses: g } = Je(e), { intersectionRef: b, isIntersecting: h } = Ro(), x = p(() => parseInt(e.max, 10)), O = p(() => parseInt(e.height, 10)), S = p(() => parseFloat(e.bufferValue) / x.value * 100), T = p(() => parseFloat(t.value) / x.value * 100), N = p(() => a.value !== e.reverse), P = p(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), k = p(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function B(C) {
    if (!b.value)
      return;
    const { left: $, right: w, width: E } = b.value.getBoundingClientRect(), _ = N.value ? E - C.clientX + (w - E) : C.clientX - $;
    t.value = Math.round(_ / E * x.value);
  }
  return te(() => d(e.tag, { ref: b, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": N.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, g.value, u.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ee(O.value) : 0, "--v-progress-linear-height": ee(O.value), ...o.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : T.value, onClick: e.clickable && B }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", r.value], style: { ...v.value, [N.value ? "left" : "right"]: ee(-O.value), borderTop: `${ee(O.value / 2)} dotted`, opacity: k.value, top: `calc(50% - ${ee(O.value / 4)})`, width: ee(100 - S.value, "%"), "--v-progress-linear-stream-to": ee(O.value * (N.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", y.value], style: [c.value, { opacity: k.value, width: ee(e.stream ? S.value : 100, "%") }] }, null), d(yn, { name: P.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((C) => d("div", { key: C, class: ["v-progress-linear__indeterminate", C, f.value], style: m.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: ee(T.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: T.value, buffer: S.value })])] })), {};
} }), kl = G({ loading: [Boolean, String] }, "loader");
function Pt(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { loaderClasses: p(() => ({ [`${l}--loading`]: e.loading })) };
}
function wl(e, l) {
  var t;
  let { slots: n } = l;
  return d("div", { class: `${e.name}__loader` }, [((t = n.default) == null ? void 0 : t.call(n, { color: e.color, isActive: e.active })) || d(oi, { active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const ai = ["static", "relative", "fixed", "absolute", "sticky"], No = G({ position: { type: String, validator: (e) => ai.includes(e) } }, "position");
function jo(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  return { positionClasses: p(() => e.position ? `${l}--${e.position}` : void 0) };
}
function $t(e, l) {
  const n = Oa("RouterLink"), t = p(() => !(!e.href && !e.to)), a = p(() => (t == null ? void 0 : t.value) || Tl(l, "click") || Tl(e, "click"));
  if (typeof n == "string")
    return { isLink: t, isClickable: a, href: Q(e, "href") };
  const i = e.to ? n.useLink(e) : void 0;
  return { isLink: t, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && p(() => {
    var u, o;
    return e.exact ? (u = i.isExactActive) == null ? void 0 : u.value : (o = i.isActive) == null ? void 0 : o.value;
  }), href: p(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const Et = G({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Wt = !1;
const Xt = Symbol("rippleStop"), ii = 80;
function Kl(e, l) {
  e.style.transform = l, e.style.webkitTransform = l;
}
function Kt(e) {
  return e.constructor.name === "TouchEvent";
}
function Go(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Bt = { show(e, l) {
  var m;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = l == null ? void 0 : l._ripple) != null && m.enabled))
    return;
  const t = document.createElement("span"), a = document.createElement("span");
  t.appendChild(a), t.className = "v-ripple__container", n.class && (t.className += ` ${n.class}`);
  const { radius: i, scale: u, x: o, y: r, centerX: v, centerY: y } = function(g, b) {
    var k;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = 0, O = 0;
    if (!Go(g)) {
      const B = b.getBoundingClientRect(), C = Kt(g) ? g.touches[g.touches.length - 1] : g;
      x = C.clientX - B.left, O = C.clientY - B.top;
    }
    let S = 0, T = 0.3;
    (k = b._ripple) != null && k.circle ? (T = 0.15, S = b.clientWidth / 2, S = h.center ? S : S + Math.sqrt((x - S) ** 2 + (O - S) ** 2) / 4) : S = Math.sqrt(b.clientWidth ** 2 + b.clientHeight ** 2) / 2;
    const N = (b.clientWidth - 2 * S) / 2 + "px", P = (b.clientHeight - 2 * S) / 2 + "px";
    return { radius: S, scale: T, x: h.center ? N : x - S + "px", y: h.center ? P : O - S + "px", centerX: N, centerY: P };
  }(e, l, n), c = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = c, a.style.height = c, l.appendChild(t);
  const f = window.getComputedStyle(l);
  f && f.position === "static" && (l.style.position = "relative", l.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), Kl(a, `translate(${o}, ${r}) scale3d(${u},${u},${u})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), Kl(a, `translate(${v}, ${y}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var i;
  if (!((i = e == null ? void 0 : e._ripple) != null && i.enabled))
    return;
  const l = e.getElementsByClassName("v-ripple__animation");
  if (l.length === 0)
    return;
  const n = l[l.length - 1];
  if (n.dataset.isHiding)
    return;
  n.dataset.isHiding = "true";
  const t = performance.now() - Number(n.dataset.activated), a = Math.max(250 - t, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var u;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((u = n.parentNode) == null ? void 0 : u.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, a);
} };
function qo(e) {
  return e === void 0 || !!e;
}
function Xn(e) {
  const l = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[Xt]) {
    if (e[Xt] = !0, Kt(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (l.center = n._ripple.centered || Go(e), n._ripple.class && (l.class = n._ripple.class), Kt(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Bt.show(e, n, l);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var t;
        (t = n == null ? void 0 : n._ripple) != null && t.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, ii);
    } else
      Bt.show(e, n, l);
  }
}
function Zl(e) {
  e[Xt] = !0;
}
function Oe(e) {
  const l = e.currentTarget;
  if (l != null && l._ripple) {
    if (window.clearTimeout(l._ripple.showTimer), e.type === "touchend" && l._ripple.showTimerCommit)
      return l._ripple.showTimerCommit(), l._ripple.showTimerCommit = null, void (l._ripple.showTimer = window.setTimeout(() => {
        Oe(e);
      }));
    window.setTimeout(() => {
      l._ripple && (l._ripple.touched = !1);
    }), Bt.hide(l);
  }
}
function Ho(e) {
  const l = e.currentTarget;
  l != null && l._ripple && (l._ripple.showTimerCommit && (l._ripple.showTimerCommit = null), window.clearTimeout(l._ripple.showTimer));
}
let Kn = !1;
function Uo(e) {
  Kn || e.keyCode !== $l.enter && e.keyCode !== $l.space || (Kn = !0, Xn(e));
}
function Yo(e) {
  Kn = !1, Oe(e);
}
function Xo(e) {
  Kn && (Kn = !1, Oe(e));
}
function Jl(e, l, n) {
  const { value: t, modifiers: a } = l, i = qo(t);
  if (i || Bt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, Gt(t) && t.class && (e._ripple.class = t.class), i && !n) {
    if (a.stop)
      return e.addEventListener("touchstart", Zl, { passive: !0 }), void e.addEventListener("mousedown", Zl);
    e.addEventListener("touchstart", Xn, { passive: !0 }), e.addEventListener("touchend", Oe, { passive: !0 }), e.addEventListener("touchmove", Ho, { passive: !0 }), e.addEventListener("touchcancel", Oe), e.addEventListener("mousedown", Xn), e.addEventListener("mouseup", Oe), e.addEventListener("mouseleave", Oe), e.addEventListener("keydown", Uo), e.addEventListener("keyup", Yo), e.addEventListener("blur", Xo), e.addEventListener("dragstart", Oe, { passive: !0 });
  } else
    !i && n && Ko(e);
}
function Ko(e) {
  e.removeEventListener("mousedown", Xn), e.removeEventListener("touchstart", Xn), e.removeEventListener("touchend", Oe), e.removeEventListener("touchmove", Ho), e.removeEventListener("touchcancel", Oe), e.removeEventListener("mouseup", Oe), e.removeEventListener("mouseleave", Oe), e.removeEventListener("keydown", Uo), e.removeEventListener("keyup", Yo), e.removeEventListener("dragstart", Oe), e.removeEventListener("blur", Xo);
}
const ut = { mounted: function(e, l) {
  Jl(e, l, !1);
}, unmounted: function(e) {
  delete e._ripple, Ko(e);
}, updated: function(e, l) {
  l.value !== l.oldValue && Jl(e, l, qo(l.oldValue));
} }, ri = G({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Wo }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: ue, appendIcon: ue, block: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...Ln(), ...ie(), ...Ge(), ...hn(), ...Rn(), ...zo(), ...kl(), ...Bl(), ...No(), ...Ze(), ...Et(), ...rt(), ...Pe({ tag: "button" }), ...Ce(), ...rn({ variant: "elevated" }) }, "VBtn"), Zt = Z()({ name: "VBtn", directives: { Ripple: ut }, props: ri(), emits: { "group:selected": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Wn(e), { colorClasses: u, colorStyles: o, variantClasses: r } = it(e), { densityClasses: v } = Qe(e), { dimensionStyles: y } = bn(e), { elevationClasses: c } = Mn(e), { loaderClasses: f } = Pt(e), { locationStyles: m } = xl(e), { positionClasses: g } = jo(e), { roundedClasses: b } = Je(e), { sizeClasses: h, sizeStyles: x } = st(e), O = Do(e, e.symbol, !1), S = $t(e, n), T = p(() => {
    var C;
    return e.active !== void 0 ? e.active : S.isLink.value ? (C = S.isActive) == null ? void 0 : C.value : O == null ? void 0 : O.isSelected.value;
  }), N = p(() => (O == null ? void 0 : O.disabled.value) || e.disabled), P = p(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), k = p(() => {
    if (e.value !== void 0)
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function B(C) {
    var $;
    N.value || S.isLink.value && (C.metaKey || C.ctrlKey || C.shiftKey || C.button !== 0 || n.target === "_blank") || (($ = S.navigate) == null || $.call(S, C), O == null || O.toggle());
  }
  return function(C, $) {
    Y(() => {
      var w;
      return (w = C.isActive) == null ? void 0 : w.value;
    }, (w) => {
      C.isLink.value && w && $ && Fe(() => {
        $(!0);
      });
    }, { immediate: !0 });
  }(S, O == null ? void 0 : O.select), te(() => {
    var F, z;
    const C = S.isLink.value ? "a" : e.tag, $ = !(!e.prependIcon && !t.prepend), w = !(!e.appendIcon && !t.append), E = !(!e.icon || e.icon === !0), _ = (O == null ? void 0 : O.isSelected.value) && (!S.isLink.value || ((F = S.isActive) == null ? void 0 : F.value)) || !O || ((z = S.isActive) == null ? void 0 : z.value);
    return Ie(d(C, { type: C === "a" ? void 0 : "button", class: ["v-btn", O == null ? void 0 : O.selectedClass.value, { "v-btn--active": T.value, "v-btn--block": e.block, "v-btn--disabled": N.value, "v-btn--elevated": P.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--stacked": e.stacked }, a.value, i.value, _ ? u.value : void 0, v.value, c.value, f.value, g.value, b.value, h.value, r.value, e.class], style: [_ ? o.value : void 0, y.value, m.value, x.value, e.style], disabled: N.value || void 0, href: S.href.value, onClick: B, value: k.value }, { default: () => {
      var L;
      return [at(!0, "v-btn"), !e.icon && $ && d("span", { key: "prepend", class: "v-btn__prepend" }, [t.prepend ? d(Be, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, t.prepend) : d(ce, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!t.default && E ? d(ce, { key: "content-icon", icon: e.icon }, null) : d(Be, { key: "content-defaults", disabled: !E, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var j;
        return [((j = t.default) == null ? void 0 : j.call(t)) ?? e.text];
      } })]), !e.icon && w && d("span", { key: "append", class: "v-btn__append" }, [t.append ? d(Be, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, t.append) : d(ce, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((L = t.loader) == null ? void 0 : L.call(t)) ?? d(Mo, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[je("ripple"), !N.value && e.ripple, null]]);
  }), {};
} }), si = G({ text: String, clickable: Boolean, ...ie(), ...Ce() }, "VLabel"), Zo = Z()({ name: "VLabel", props: si(), setup(e, l) {
  let { slots: n } = l;
  return te(() => {
    var t;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), Jo = Symbol.for("vuetify:selection-control-group"), Qo = G({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: ue, trueIcon: ue, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: Boolean, modelValue: null, type: String, valueComparator: { type: Function, default: Dn }, ...ie(), ...Ge(), ...Ce() }, "SelectionControlGroup"), ui = G({ ...Qo({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
Z()({ name: "VSelectionControlGroup", props: ui(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), a = De(), i = p(() => e.id || `v-selection-control-group-${a}`), u = p(() => e.name || i.value), o = /* @__PURE__ */ new Set();
  return We(Jo, { modelValue: t, forceUpdate: () => {
    o.forEach((r) => r());
  }, onForceUpdate: (r) => {
    o.add(r), ke(() => {
      o.delete(r);
    });
  } }), gn({ [e.defaultsTarget]: { color: Q(e, "color"), disabled: Q(e, "disabled"), density: Q(e, "density"), error: Q(e, "error"), inline: Q(e, "inline"), modelValue: t, multiple: p(() => !!e.multiple || e.multiple == null && Array.isArray(t.value)), name: u, falseIcon: Q(e, "falseIcon"), trueIcon: Q(e, "trueIcon"), readonly: Q(e, "readonly"), ripple: Q(e, "ripple"), type: Q(e, "type"), valueComparator: Q(e, "valueComparator") } }), te(() => {
    var r;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(r = n.default) == null ? void 0 : r.call(n)]);
  }), {};
} });
const Fl = G({ label: String, trueValue: null, falseValue: null, value: null, ...ie(), ...Qo() }, "VSelectionControl"), Jt = Z()({ name: "VSelectionControl", directives: { Ripple: ut }, inheritAttrs: !1, props: Fl(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { group: a, densityClasses: i, icon: u, model: o, textColorClasses: r, textColorStyles: v, trueValue: y } = function(S) {
    const T = ve(Jo, void 0), { densityClasses: N } = Qe(S), P = me(S, "modelValue"), k = p(() => S.trueValue !== void 0 ? S.trueValue : S.value === void 0 || S.value), B = p(() => S.falseValue !== void 0 && S.falseValue), C = p(() => !!S.multiple || S.multiple == null && Array.isArray(P.value)), $ = p({ get() {
      const F = T ? T.modelValue.value : P.value;
      return C.value ? F.some((z) => S.valueComparator(z, k.value)) : S.valueComparator(F, k.value);
    }, set(F) {
      if (S.readonly)
        return;
      const z = F ? k.value : B.value;
      let L = z;
      C.value && (L = F ? [...tn(P.value), z] : tn(P.value).filter((j) => !S.valueComparator(j, k.value))), T ? T.modelValue.value = L : P.value = L;
    } }), { textColorClasses: w, textColorStyles: E } = Xe(p(() => !$.value || S.error || S.disabled ? void 0 : S.color)), _ = p(() => $.value ? S.trueIcon : S.falseIcon);
    return { group: T, densityClasses: N, trueValue: k, falseValue: B, model: $, textColorClasses: w, textColorStyles: E, icon: _ };
  }(e), c = De(), f = p(() => e.id || `input-${c}`), m = se(!1), g = se(!1), b = R();
  function h(S) {
    m.value = !0, (!Yt || Yt && S.target.matches(":focus-visible")) && (g.value = !0);
  }
  function x() {
    m.value = !1, g.value = !1;
  }
  function O(S) {
    e.readonly && a && Fe(() => a.forceUpdate()), o.value = S.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    b.value && (b.value.checked = o.value);
  }), te(() => {
    var P, k;
    const S = t.label ? t.label({ label: e.label, props: { for: f.value } }) : e.label, [T, N] = nt(n);
    return d("div", X({ class: ["v-selection-control", { "v-selection-control--dirty": o.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, T, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", r.value], style: v.value }, [(P = t.default) == null ? void 0 : P.call(t), Ie(d("div", { class: ["v-selection-control__input"] }, [u.value && d(ce, { key: "icon", icon: u.value }, null), d("input", X({ ref: b, checked: o.value, disabled: !(!e.readonly && !e.disabled), id: f.value, onBlur: x, onFocus: h, onInput: O, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: y.value, name: e.name, "aria-checked": e.type === "checkbox" ? o.value : void 0 }, N), null), (k = t.input) == null ? void 0 : k.call(t, { model: o, textColorClasses: r, textColorStyles: v, props: { onFocus: h, onBlur: x, id: f.value } })]), [[je("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), S && d(Zo, { for: f.value, clickable: !0 }, { default: () => [S] })]);
  }), { isFocused: m, input: b };
} }), ea = G({ indeterminate: Boolean, indeterminateIcon: { type: ue, default: "$checkboxIndeterminate" }, ...Fl({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Qt = Z()({ name: "VCheckboxBtn", props: ea(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "indeterminate"), a = me(e, "modelValue");
  function i(r) {
    t.value && (t.value = !1);
  }
  const u = p(() => t.value ? e.indeterminateIcon : e.falseIcon), o = p(() => t.value ? e.indeterminateIcon : e.trueIcon);
  return te(() => d(Jt, X(e, { modelValue: a.value, "onUpdate:modelValue": [(r) => a.value = r, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: u.value, trueIcon: o.value, "aria-checked": t.value ? "mixed" : void 0 }), n)), {};
} });
function na(e) {
  const { t: l } = Il();
  return { InputIcon: function(n) {
    let { name: t } = n;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[t], i = e[`onClick:${t}`], u = i && a ? l(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(ce, { icon: e[`${t}Icon`], "aria-label": u, onClick: i }, null);
  } };
}
const ci = G({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ie(), ...ot({ transition: { component: _o, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), di = Z()({ name: "VMessages", props: ci(), setup(e, l) {
  let { slots: n } = l;
  const t = p(() => tn(e.messages)), { textColorClasses: a, textColorStyles: i } = Xe(p(() => e.color));
  return te(() => d(en, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && t.value.map((u, o) => d("div", { class: "v-messages__message", key: `${o}-${t.value}` }, [n.message ? n.message({ message: u }) : u]))] })), {};
} }), ta = G({ focused: Boolean, "onUpdate:focused": Ne() }, "focus");
function ct(e) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke();
  const n = me(e, "focused");
  return { focusClasses: p(() => ({ [`${l}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const pi = Symbol.for("vuetify:form");
function la() {
  return ve(pi, null);
}
const vi = G({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...ta() }, "validation"), dt = G({ id: String, appendIcon: ue, centerAffix: { type: Boolean, default: !0 }, prependIcon: ue, hideDetails: [Boolean, String], hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": Ne(), "onClick:append": Ne(), ...ie(), ...Ge(), ...vi() }, "VInput"), on = Z()({ name: "VInput", props: { ...dt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const { densityClasses: i } = Qe(e), { rtlClasses: u } = lt(), { InputIcon: o } = na(e), r = De(), v = p(() => e.id || `input-${r}`), y = p(() => `${v.value}-messages`), { errorMessages: c, isDirty: f, isDisabled: m, isReadonly: g, isPristine: b, isValid: h, isValidating: x, reset: O, resetValidation: S, validate: T, validationClasses: N } = function(B) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ke(), $ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : De();
    const w = me(B, "modelValue"), E = p(() => B.validationValue === void 0 ? w.value : B.validationValue), _ = la(), F = R([]), z = se(!0), L = p(() => !(!tn(w.value === "" ? null : w.value).length && !tn(E.value === "" ? null : E.value).length)), j = p(() => !!(B.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), M = p(() => !!(B.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), A = p(() => B.errorMessages.length ? tn(B.errorMessages).slice(0, Math.max(0, +B.maxErrors)) : F.value), D = p(() => {
      let ne = (B.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      ne === "lazy" && (ne = "input lazy");
      const de = new Set((ne == null ? void 0 : ne.split(" ")) ?? []);
      return { blur: de.has("blur") || de.has("input"), input: de.has("input"), submit: de.has("submit"), lazy: de.has("lazy") };
    }), q = p(() => !B.error && !B.errorMessages.length && (!B.rules.length || (z.value ? !F.value.length && !D.value.lazy || null : !F.value.length))), I = se(!1), V = p(() => ({ [`${C}--error`]: q.value === !1, [`${C}--dirty`]: L.value, [`${C}--disabled`]: j.value, [`${C}--readonly`]: M.value })), W = p(() => B.name ?? s($));
    function H() {
      w.value = null, Fe(K);
    }
    function K() {
      z.value = !0, D.value.lazy ? F.value = [] : oe(!0);
    }
    async function oe() {
      let ne = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const de = [];
      I.value = !0;
      for (const $e of B.rules) {
        if (de.length >= +(B.maxErrors ?? 1))
          break;
        const zt = typeof $e == "function" ? $e : () => $e, Re = await zt(E.value);
        Re !== !0 && (Re === !1 || typeof Re == "string" ? de.push(Re || "") : console.warn(`${Re} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return F.value = de, I.value = !1, z.value = ne, F.value;
    }
    return yo(() => {
      _ == null || _.register({ id: W.value, validate: oe, reset: H, resetValidation: K });
    }), an(() => {
      _ == null || _.unregister(W.value);
    }), zn(async () => {
      D.value.lazy || await oe(!0), _ == null || _.update(W.value, q.value, A.value);
    }), ln(() => D.value.input, () => {
      Y(E, () => {
        if (E.value != null)
          oe();
        else if (B.focused) {
          const ne = Y(() => B.focused, (de) => {
            de || oe(), ne();
          });
        }
      });
    }), ln(() => D.value.blur, () => {
      Y(() => B.focused, (ne) => {
        ne || oe();
      });
    }), Y(q, () => {
      _ == null || _.update(W.value, q.value, A.value);
    }), { errorMessages: A, isDirty: L, isDisabled: j, isReadonly: M, isPristine: z, isValid: q, isValidating: I, reset: H, resetValidation: K, validate: oe, validationClasses: V };
  }(e, "v-input", v), P = p(() => ({ id: v, messagesId: y, isDirty: f, isDisabled: m, isReadonly: g, isPristine: b, isValid: h, isValidating: x, reset: O, resetValidation: S, validate: T })), k = p(() => {
    var B;
    return (B = e.errorMessages) != null && B.length || !b.value && c.value.length ? c.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return te(() => {
    var E, _, F, z;
    const B = !(!t.prepend && !e.prependIcon), C = !(!t.append && !e.appendIcon), $ = k.value.length > 0, w = !e.hideDetails || e.hideDetails === "auto" && ($ || !!t.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix }, i.value, u.value, N.value, e.class], style: e.style }, [B && d("div", { key: "prepend", class: "v-input__prepend" }, [(E = t.prepend) == null ? void 0 : E.call(t, P.value), e.prependIcon && d(o, { key: "prepend-icon", name: "prepend" }, null)]), t.default && d("div", { class: "v-input__control" }, [(_ = t.default) == null ? void 0 : _.call(t, P.value)]), C && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(o, { key: "append-icon", name: "append" }, null), (F = t.append) == null ? void 0 : F.call(t, P.value)]), w && d("div", { class: "v-input__details" }, [d(di, { id: y.value, active: $, messages: k.value }, { message: t.message }), (z = t.details) == null ? void 0 : z.call(t, P.value)])]);
  }), { reset: O, resetValidation: S, validate: T };
} }), fi = G({ ...dt(), ...pl(ea(), ["inline"]) }, "VCheckbox"), yi = Z()({ name: "VCheckbox", inheritAttrs: !1, props: fi(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = me(e, "modelValue"), { isFocused: i, focus: u, blur: o } = ct(e), r = De(), v = p(() => e.id || `checkbox-${r}`);
  return te(() => {
    const [y, c] = nt(n), [f, m] = on.filterProps(e), [g, b] = Qt.filterProps(e);
    return d(on, X({ class: ["v-checkbox", e.class] }, y, f, { modelValue: a.value, "onUpdate:modelValue": (h) => a.value = h, id: v.value, focused: i.value, style: e.style }), { ...t, default: (h) => {
      let { id: x, messagesId: O, isDisabled: S, isReadonly: T } = h;
      return d(Qt, X(g, { id: x.value, "aria-describedby": O.value, disabled: S.value, readonly: T.value }, c, { modelValue: a.value, "onUpdate:modelValue": (N) => a.value = N, onFocus: u, onBlur: o }), t);
    } });
  }), {};
} }), mi = G({ start: Boolean, end: Boolean, icon: ue, image: String, ...ie(), ...Ge(), ...Ze(), ...rt(), ...Pe(), ...Ce(), ...rn({ variant: "flat" }) }, "VAvatar"), En = Z()({ name: "VAvatar", props: mi(), setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { colorClasses: a, colorStyles: i, variantClasses: u } = it(e), { densityClasses: o } = Qe(e), { roundedClasses: r } = Je(e), { sizeClasses: v, sizeStyles: y } = st(e);
  return te(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, t.value, a.value, o.value, r.value, v.value, u.value, e.class], style: [i.value, y.value, e.style] }, { default: () => {
    var c;
    return [e.image ? d($o, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(ce, { key: "icon", icon: e.icon }, null) : (c = n.default) == null ? void 0 : c.call(n), at(!1, "v-avatar")];
  } })), {};
} }), oa = Symbol.for("vuetify:v-chip-group"), gi = G({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Dn }, ...ie(), ...To({ selectedClass: "v-chip--selected" }), ...Pe(), ...Ce(), ...rn({ variant: "tonal" }) }, "VChipGroup");
Z()({ name: "VChipGroup", props: gi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { themeClasses: t } = Ve(e), { isSelected: a, select: i, next: u, prev: o, selected: r } = Lo(e, oa);
  return gn({ VChip: { color: Q(e, "color"), disabled: Q(e, "disabled"), filter: Q(e, "filter"), variant: Q(e, "variant") } }), te(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, t.value, e.class], style: e.style }, { default: () => {
    var v;
    return [(v = n.default) == null ? void 0 : v.call(n, { isSelected: a, select: i, next: u, prev: o, selected: r.value })];
  } })), {};
} });
const hi = G({ activeClass: String, appendAvatar: String, appendIcon: ue, closable: Boolean, closeIcon: { type: ue, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: Ne(), onClickOnce: Ne(), ...Ln(), ...ie(), ...Ge(), ...Rn(), ...zo(), ...Ze(), ...Et(), ...rt(), ...Pe({ tag: "span" }), ...Ce(), ...rn({ variant: "tonal" }) }, "VChip"), bi = Z()({ name: "VChip", directives: { Ripple: ut }, props: hi(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { t: i } = Il(), { borderClasses: u } = Wn(e), { colorClasses: o, colorStyles: r, variantClasses: v } = it(e), { densityClasses: y } = Qe(e), { elevationClasses: c } = Mn(e), { roundedClasses: f } = Je(e), { sizeClasses: m } = st(e), { themeClasses: g } = Ve(e), b = me(e, "modelValue"), h = Do(e, oa, !1), x = $t(e, n), O = p(() => e.link !== !1 && x.isLink.value), S = p(() => !e.disabled && e.link !== !1 && (!!h || e.link || x.isClickable.value)), T = p(() => ({ "aria-label": i(e.closeLabel), onClick(k) {
    b.value = !1, t("click:close", k);
  } }));
  function N(k) {
    var B;
    t("click", k), S.value && ((B = x.navigate) == null || B.call(x, k), h == null || h.toggle());
  }
  function P(k) {
    k.key !== "Enter" && k.key !== " " || (k.preventDefault(), N(k));
  }
  return () => {
    const k = x.isLink.value ? "a" : e.tag, B = !(!e.appendIcon && !e.appendAvatar), C = !(!B && !a.append), $ = !(!a.close && !e.closable), w = !(!a.filter && !e.filter) && h, E = !(!e.prependIcon && !e.prependAvatar), _ = !(!E && !a.prepend), F = !h || h.isSelected.value;
    return b.value && Ie(d(k, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": S.value, "v-chip--filter": w, "v-chip--pill": e.pill }, g.value, u.value, F ? o.value : void 0, y.value, c.value, f.value, m.value, v.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [F ? r.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: x.href.value, tabindex: S.value ? 0 : void 0, onClick: N, onKeydown: S.value && !O.value && P }, { default: () => {
      var z;
      return [at(S.value, "v-chip"), w && d(Oo, { key: "filter" }, { default: () => [Ie(d("div", { class: "v-chip__filter" }, [a.filter ? Ie(d(Be, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, null), [[je("slot"), a.filter, "default"]]) : d(ce, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Tn, h.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(Be, { key: "prepend-defaults", disabled: !E, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(fe, null, [e.prependIcon && d(ce, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(En, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((z = a.default) == null ? void 0 : z.call(a, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), C && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(Be, { key: "append-defaults", disabled: !B, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(fe, null, [e.appendIcon && d(ce, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(En, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), $ && d("div", X({ key: "close", class: "v-chip__close" }, T.value), [a.close ? d(Be, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(ce, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[je("ripple"), S.value && e.ripple, null]]);
  };
} }), el = Symbol.for("vuetify:list");
function aa() {
  const e = ve(el, { hasPrepend: se(!1), updateHasPrepend: () => null }), l = { hasPrepend: se(!1), updateHasPrepend: (n) => {
    n && (l.hasPrepend.value = n);
  } };
  return We(el, l), e;
}
function ia() {
  return ve(el, null);
}
const Ii = { open: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (n) {
    const i = /* @__PURE__ */ new Set();
    i.add(l);
    let u = a.get(l);
    for (; u != null; )
      i.add(u), u = a.get(u);
    return i;
  }
  return t.delete(l), t;
}, select: () => null }, ra = { open: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (n) {
    let i = a.get(l);
    for (t.add(l); i != null && i !== l; )
      t.add(i), i = a.get(i);
    return t;
  }
  return t.delete(l), t;
}, select: () => null }, Ci = { open: ra.open, select: (e) => {
  let { id: l, value: n, opened: t, parents: a } = e;
  if (!n)
    return t;
  const i = [];
  let u = a.get(l);
  for (; u != null; )
    i.push(u), u = a.get(u);
  return new Set(i);
} }, nl = (e) => {
  const l = { select: (n) => {
    let { id: t, value: a, selected: i } = n;
    if (t = nn(t), e && !a) {
      const u = Array.from(i.entries()).reduce((o, r) => {
        let [v, y] = r;
        return y === "on" ? [...o, v] : o;
      }, []);
      if (u.length === 1 && u[0] === t)
        return i;
    }
    return i.set(t, a ? "on" : "off"), i;
  }, in: (n, t, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const u of n || [])
      i = l.select({ id: u, value: !0, selected: new Map(i), children: t, parents: a });
    return i;
  }, out: (n) => {
    const t = [];
    for (const [a, i] of n.entries())
      i === "on" && t.push(a);
    return t;
  } };
  return l;
}, Ql = (e) => {
  const l = nl(e);
  return { select: (n) => {
    let { selected: t, id: a, ...i } = n;
    a = nn(a);
    const u = t.has(a) ? /* @__PURE__ */ new Map([[a, t.get(a)]]) : /* @__PURE__ */ new Map();
    return l.select({ ...i, id: a, selected: u });
  }, in: (n, t, a) => {
    let i = /* @__PURE__ */ new Map();
    return n != null && n.length && (i = l.in(n.slice(0, 1), t, a)), i;
  }, out: (n, t, a) => l.out(n, t, a) };
}, Zn = Symbol.for("vuetify:nested"), sa = { id: se(), root: { register: () => null, unregister: () => null, parents: R(/* @__PURE__ */ new Map()), children: R(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: R(/* @__PURE__ */ new Set()), selected: R(/* @__PURE__ */ new Map()), selectedValues: R([]) } }, Si = G({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Bi = (e) => {
  let l = !1;
  const n = R(/* @__PURE__ */ new Map()), t = R(/* @__PURE__ */ new Map()), a = me(e, "opened", e.opened, (c) => new Set(c), (c) => [...c.values()]), i = p(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((c) => {
          const f = Ql(c);
          return { select: (m) => {
            let { id: g, selected: b, children: h, ...x } = m;
            return g = nn(g), h.has(g) ? b : f.select({ id: g, selected: b, children: h, ...x });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((c) => {
          const f = nl(c);
          return { select: (m) => {
            let { id: g, selected: b, children: h, ...x } = m;
            return g = nn(g), h.has(g) ? b : f.select({ id: g, selected: b, children: h, ...x });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return nl(e.mandatory);
      case "single-independent":
        return Ql(e.mandatory);
      default:
        return ((c) => {
          const f = { select: (m) => {
            let { id: g, value: b, selected: h, children: x, parents: O } = m;
            g = nn(g);
            const S = new Map(h), T = [g];
            for (; T.length; ) {
              const P = T.shift();
              h.set(P, b ? "on" : "off"), x.has(P) && T.push(...x.get(P));
            }
            let N = O.get(g);
            for (; N; ) {
              const P = x.get(N), k = P.every((C) => h.get(C) === "on"), B = P.every((C) => !h.has(C) || h.get(C) === "off");
              h.set(N, k ? "on" : B ? "off" : "indeterminate"), N = O.get(N);
            }
            return c && !b && Array.from(h.entries()).reduce((k, B) => {
              let [C, $] = B;
              return $ === "on" ? [...k, C] : k;
            }, []).length === 0 ? S : h;
          }, in: (m, g, b) => {
            let h = /* @__PURE__ */ new Map();
            for (const x of m || [])
              h = f.select({ id: x, value: !0, selected: new Map(h), children: g, parents: b });
            return h;
          }, out: (m, g) => {
            const b = [];
            for (const [h, x] of m.entries())
              x !== "on" || g.has(h) || b.push(h);
            return b;
          } };
          return f;
        })(e.mandatory);
    }
  }), u = p(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Ci;
      case "single":
        return Ii;
      default:
        return ra;
    }
  }), o = me(e, "selected", e.selected, (c) => i.value.in(c, n.value, t.value), (c) => i.value.out(c, n.value, t.value));
  function r(c) {
    const f = [];
    let m = c;
    for (; m != null; )
      f.unshift(m), m = t.value.get(m);
    return f;
  }
  an(() => {
    l = !0;
  });
  const v = xe("nested"), y = { id: se(), root: { opened: a, selected: o, selectedValues: p(() => {
    const c = [];
    for (const [f, m] of o.value.entries())
      m === "on" && c.push(f);
    return c;
  }), register: (c, f, m) => {
    f && c !== f && t.value.set(c, f), m && n.value.set(c, []), f != null && n.value.set(f, [...n.value.get(f) || [], c]);
  }, unregister: (c) => {
    if (l)
      return;
    n.value.delete(c);
    const f = t.value.get(c);
    if (f) {
      const m = n.value.get(f) ?? [];
      n.value.set(f, m.filter((g) => g !== c));
    }
    t.value.delete(c), a.value.delete(c);
  }, open: (c, f, m) => {
    v.emit("click:open", { id: c, value: f, path: r(c), event: m });
    const g = u.value.open({ id: c, value: f, opened: new Set(a.value), children: n.value, parents: t.value, event: m });
    g && (a.value = g);
  }, openOnSelect: (c, f, m) => {
    const g = u.value.select({ id: c, value: f, selected: new Map(o.value), opened: new Set(a.value), children: n.value, parents: t.value, event: m });
    g && (a.value = g);
  }, select: (c, f, m) => {
    v.emit("click:select", { id: c, value: f, path: r(c), event: m });
    const g = i.value.select({ id: c, value: f, selected: new Map(o.value), children: n.value, parents: t.value, event: m });
    g && (o.value = g), y.root.openOnSelect(c, f, m);
  }, children: n, parents: t } };
  return We(Zn, y), y.root;
}, ua = (e, l) => {
  const n = ve(Zn, sa), t = Symbol(De()), a = p(() => e.value !== void 0 ? e.value : t), i = { ...n, id: a, open: (u, o) => n.root.open(a.value, u, o), openOnSelect: (u, o) => n.root.openOnSelect(a.value, u, o), isOpen: p(() => n.root.opened.value.has(a.value)), parent: p(() => n.root.parents.value.get(a.value)), select: (u, o) => n.root.select(a.value, u, o), isSelected: p(() => n.root.selected.value.get(nn(a.value)) === "on"), isIndeterminate: p(() => n.root.selected.value.get(a.value) === "indeterminate"), isLeaf: p(() => !n.root.children.value.get(a.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(a.value, n.id.value, l), an(() => {
    !n.isGroupActivator && n.root.unregister(a.value);
  }), l && We(Zn, i), i;
}, xi = Un({ name: "VListGroupActivator", setup(e, l) {
  let { slots: n } = l;
  return (() => {
    const t = ve(Zn, sa);
    We(Zn, { ...t, isGroupActivator: !0 });
  })(), () => {
    var t;
    return (t = n.default) == null ? void 0 : t.call(n);
  };
} }), ki = G({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: ue, default: "$collapse" }, expandIcon: { type: ue, default: "$expand" }, prependIcon: ue, appendIcon: ue, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ie(), ...Pe() }, "VListGroup"), eo = Z()({ name: "VListGroup", props: ki(), setup(e, l) {
  let { slots: n } = l;
  const { isOpen: t, open: a, id: i } = ua(Q(e, "value"), !0), u = p(() => `v-list-group--id-${String(i.value)}`), o = ia(), { isBooted: r } = function() {
    const m = se(!1);
    return zn(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: p(() => m.value ? void 0 : { transition: "none !important" }), isBooted: sl(m) };
  }();
  function v(m) {
    a(!t.value, m);
  }
  const y = p(() => ({ onClick: v, class: "v-list-group__header", id: u.value })), c = p(() => t.value ? e.collapseIcon : e.expandIcon), f = p(() => ({ VListItem: { active: t.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && c.value, appendIcon: e.appendIcon || !e.subgroup && c.value, title: e.title, value: e.value } }));
  return te(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": o == null ? void 0 : o.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": t.value }, e.class], style: e.style }, { default: () => [n.activator && d(Be, { defaults: f.value }, { default: () => [d(xi, null, { default: () => [n.activator({ props: y.value, isOpen: t.value })] })] }), d(en, { transition: { component: Ha }, disabled: !r.value }, { default: () => {
    var m;
    return [Ie(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": u.value }, [(m = n.default) == null ? void 0 : m.call(n)]), [[Tn, t.value]])];
  } })] })), {};
} }), wi = tt("v-list-item-subtitle"), Fi = tt("v-list-item-title"), Vi = G({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: ue, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number, Boolean], title: [String, Number, Boolean], value: null, onClick: Ne(), onClickOnce: Ne(), ...Ln(), ...ie(), ...Ge(), ...hn(), ...Rn(), ...Ze(), ...Et(), ...Pe(), ...Ce(), ...rn({ variant: "text" }) }, "VListItem"), xt = Z()({ name: "VListItem", directives: { Ripple: ut }, props: Vi(), emits: { click: (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t, emit: a } = l;
  const i = $t(e, n), u = p(() => e.value === void 0 ? i.href.value : e.value), { select: o, isSelected: r, isIndeterminate: v, isGroupActivator: y, root: c, parent: f, openOnSelect: m } = ua(u, !1), g = ia(), b = p(() => {
    var M;
    return e.active !== !1 && (e.active || ((M = i.isActive) == null ? void 0 : M.value) || r.value);
  }), h = p(() => e.link !== !1 && i.isLink.value), x = p(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!g)), O = p(() => e.rounded || e.nav), S = p(() => e.color ?? e.activeColor), T = p(() => ({ color: b.value ? S.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Y(() => {
    var M;
    return (M = i.isActive) == null ? void 0 : M.value;
  }, (M) => {
    M && f.value != null && c.open(f.value, !0), M && m(M);
  }, { immediate: !0 });
  const { themeClasses: N } = Ve(e), { borderClasses: P } = Wn(e), { colorClasses: k, colorStyles: B, variantClasses: C } = it(T), { densityClasses: $ } = Qe(e), { dimensionStyles: w } = bn(e), { elevationClasses: E } = Mn(e), { roundedClasses: _ } = Je(O), F = p(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), z = p(() => ({ isActive: b.value, select: o, isSelected: r.value, isIndeterminate: v.value }));
  function L(M) {
    var A;
    a("click", M), !y && x.value && ((A = i.navigate) == null || A.call(i, M), e.value != null && o(!r.value, M));
  }
  function j(M) {
    M.key !== "Enter" && M.key !== " " || (M.preventDefault(), L(M));
  }
  return te(() => {
    const M = h.value ? "a" : e.tag, A = t.title || e.title, D = t.subtitle || e.subtitle, q = !(!e.appendAvatar && !e.appendIcon), I = !(!q && !t.append), V = !(!e.prependAvatar && !e.prependIcon), W = !(!V && !t.prepend);
    var H, K;
    return g == null || g.updateHasPrepend(W), e.activeColor && (H = "active-color", K = ["color", "base-color"], K = Array.isArray(K) ? K.slice(0, -1).map((oe) => `'${oe}'`).join(", ") + ` or '${K.at(-1)}'` : `'${K}'`, At(`[Vuetify UPGRADE] '${H}' is deprecated, use ${K} instead.`)), Ie(d(M, { class: ["v-list-item", { "v-list-item--active": b.value, "v-list-item--disabled": e.disabled, "v-list-item--link": x.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !W && (g == null ? void 0 : g.hasPrepend.value), [`${e.activeClass}`]: e.activeClass && b.value }, N.value, P.value, k.value, $.value, E.value, F.value, _.value, C.value, e.class], style: [B.value, w.value, e.style], href: i.href.value, tabindex: x.value ? g ? -2 : 0 : void 0, onClick: L, onKeydown: x.value && !h.value && j }, { default: () => {
      var oe;
      return [at(x.value || b.value, "v-list-item"), W && d("div", { key: "prepend", class: "v-list-item__prepend" }, [t.prepend ? d(Be, { key: "prepend-defaults", disabled: !V, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var ne;
        return [(ne = t.prepend) == null ? void 0 : ne.call(t, z.value)];
      } }) : d(fe, null, [e.prependAvatar && d(En, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(ce, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)])]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [A && d(Fi, { key: "title" }, { default: () => {
        var ne;
        return [((ne = t.title) == null ? void 0 : ne.call(t, { title: e.title })) ?? e.title];
      } }), D && d(wi, { key: "subtitle" }, { default: () => {
        var ne;
        return [((ne = t.subtitle) == null ? void 0 : ne.call(t, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (oe = t.default) == null ? void 0 : oe.call(t, z.value)]), I && d("div", { key: "append", class: "v-list-item__append" }, [t.append ? d(Be, { key: "append-defaults", disabled: !q, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var ne;
        return [(ne = t.append) == null ? void 0 : ne.call(t, z.value)];
      } }) : d(fe, null, [e.appendIcon && d(ce, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(En, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)])])];
    } }), [[je("ripple"), x.value && e.ripple]]);
  }), {};
} }), Ai = G({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ie(), ...Pe() }, "VListSubheader"), _i = Z()({ name: "VListSubheader", props: Ai(), setup(e, l) {
  let { slots: n } = l;
  const { textColorClasses: t, textColorStyles: a } = Xe(Q(e, "color"));
  return te(() => {
    const i = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, t.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var u;
      return [i && d("div", { class: "v-list-subheader__text" }, [((u = n.default) == null ? void 0 : u.call(n)) ?? e.title])];
    } });
  }), {};
} }), Oi = G({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ie(), ...Ce() }, "VDivider"), Pi = Z()({ name: "VDivider", props: Oi(), setup(e, l) {
  let { attrs: n } = l;
  const { themeClasses: t } = Ve(e), { textColorClasses: a, textColorStyles: i } = Xe(Q(e, "color")), u = p(() => {
    const o = {};
    return e.length && (o[e.vertical ? "maxHeight" : "maxWidth"] = ee(e.length)), e.thickness && (o[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ee(e.thickness)), o;
  });
  return te(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, t.value, a.value, e.class], style: [u.value, i.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), $i = G({ items: Array }, "VListChildren"), ca = Z()({ name: "VListChildren", props: $i(), setup(e, l) {
  let { slots: n } = l;
  return aa(), () => {
    var t, a;
    return ((t = n.default) == null ? void 0 : t.call(n)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var m, g;
      let { children: u, props: o, type: r, raw: v } = i;
      if (r === "divider")
        return ((m = n.divider) == null ? void 0 : m.call(n, { props: o })) ?? d(Pi, o, null);
      if (r === "subheader")
        return ((g = n.subheader) == null ? void 0 : g.call(n, { props: o })) ?? d(_i, o, null);
      const y = { subtitle: n.subtitle ? (b) => {
        var h;
        return (h = n.subtitle) == null ? void 0 : h.call(n, { ...b, item: v });
      } : void 0, prepend: n.prepend ? (b) => {
        var h;
        return (h = n.prepend) == null ? void 0 : h.call(n, { ...b, item: v });
      } : void 0, append: n.append ? (b) => {
        var h;
        return (h = n.append) == null ? void 0 : h.call(n, { ...b, item: v });
      } : void 0, title: n.title ? (b) => {
        var h;
        return (h = n.title) == null ? void 0 : h.call(n, { ...b, item: v });
      } : void 0 }, [c, f] = eo.filterProps(o);
      return u ? d(eo, X({ value: o == null ? void 0 : o.value }, c), { activator: (b) => {
        let { props: h } = b;
        return n.header ? n.header({ props: { ...o, ...h } }) : d(xt, X(o, h), y);
      }, default: () => d(ca, { items: u }, n) }) : n.item ? n.item({ props: o }) : d(xt, o, y);
    }));
  };
} }), da = G({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean }, "list-items");
function pa(e, l) {
  const n = Ue(l, e.itemTitle, l), t = e.returnObject ? l : Ue(l, e.itemValue, n), a = Ue(l, e.itemChildren), i = { title: n, value: t, ...e.itemProps === !0 ? typeof l != "object" || l == null || Array.isArray(l) ? void 0 : "children" in l ? et(l, ["children"])[1] : l : Ue(l, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? va(e, a) : void 0, raw: l };
}
function va(e, l) {
  const n = [];
  for (const t of l)
    n.push(pa(e, t));
  return n;
}
function Ei(e) {
  return function(l, n) {
    function t(i) {
      return i.filter((u) => u !== null || l.value.some((o) => o.value === null)).map((u) => l.value.find((o) => Dn(u, o.value)) ?? n(u));
    }
    function a(i) {
      return i.map((u) => {
        let { value: o } = u;
        return o;
      });
    }
    return { items: l, transformIn: t, transformOut: a };
  }(p(() => va(e, e.items)), (l) => pa(e, l));
}
function Ti(e, l) {
  const n = Ue(l, e.itemType, "item"), t = function(o) {
    return typeof o == "string" || typeof o == "number" || typeof o == "boolean";
  }(l) ? l : Ue(l, e.itemTitle), a = Ue(l, e.itemValue, void 0), i = Ue(l, e.itemChildren), u = { title: t, value: a, ...e.itemProps === !0 ? et(l, ["children"])[1] : Ue(l, e.itemProps) };
  return { type: n, title: u.title, value: u.value, props: u, children: n === "item" && i ? fa(e, i) : void 0, raw: l };
}
function fa(e, l) {
  const n = [];
  for (const t of l)
    n.push(Ti(e, t));
  return n;
}
const zi = G({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, nav: Boolean, ...Si({ selectStrategy: "single-leaf", openStrategy: "list" }), ...Ln(), ...ie(), ...Ge(), ...hn(), ...Rn(), itemType: { type: String, default: "type" }, ...da(), ...Ze(), ...Pe(), ...Ce(), ...rn({ variant: "text" }) }, "VList"), Di = Z()({ name: "VList", props: zi(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { items: t } = function(C) {
    return { items: p(() => fa(C, C.items)) };
  }(e), { themeClasses: a } = Ve(e), { backgroundColorClasses: i, backgroundColorStyles: u } = Yn(Q(e, "bgColor")), { borderClasses: o } = Wn(e), { densityClasses: r } = Qe(e), { dimensionStyles: v } = bn(e), { elevationClasses: y } = Mn(e), { roundedClasses: c } = Je(e), { open: f, select: m } = Bi(e), g = p(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = Q(e, "activeColor"), h = Q(e, "baseColor"), x = Q(e, "color");
  aa(), gn({ VListGroup: { activeColor: b, baseColor: h, color: x }, VListItem: { activeClass: Q(e, "activeClass"), activeColor: b, baseColor: h, color: x, density: Q(e, "density"), disabled: Q(e, "disabled"), lines: Q(e, "lines"), nav: Q(e, "nav"), variant: Q(e, "variant") } });
  const O = se(!1), S = R();
  function T(C) {
    O.value = !0;
  }
  function N(C) {
    O.value = !1;
  }
  function P(C) {
    var $;
    O.value || C.relatedTarget && (($ = S.value) != null && $.contains(C.relatedTarget)) || B();
  }
  function k(C) {
    if (S.value) {
      if (C.key === "ArrowDown")
        B("next");
      else if (C.key === "ArrowUp")
        B("prev");
      else if (C.key === "Home")
        B("first");
      else {
        if (C.key !== "End")
          return;
        B("last");
      }
      C.preventDefault();
    }
  }
  function B(C) {
    if (S.value)
      return bt(S.value, C);
  }
  return te(() => d(e.tag, { ref: S, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, o.value, r.value, y.value, g.value, c.value, e.class], style: [u.value, v.value, e.style], tabindex: e.disabled || O.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: T, onFocusout: N, onFocus: P, onKeydown: k }, { default: () => [d(ca, { items: t.value }, n)] })), { open: f, select: m, focus: B };
} });
function Rt(e, l) {
  return { x: e.x + l.x, y: e.y + l.y };
}
function no(e, l) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: t } = e;
    return Rt({ x: t === "left" ? 0 : t === "center" ? l.width / 2 : t === "right" ? l.width : t, y: n === "top" ? 0 : n === "bottom" ? l.height : n }, l);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: t } = e;
    return Rt({ x: n === "left" ? 0 : n === "right" ? l.width : n, y: t === "top" ? 0 : t === "center" ? l.height / 2 : t === "bottom" ? l.height : t }, l);
  }
  return Rt({ x: l.width / 2, y: l.height / 2 }, l);
}
const ya = { static: function() {
}, connected: function(e, l, n) {
  (function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  })(e.activatorEl.value) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: t, preferredOrigin: a } = vl(() => {
    const m = Ut(l.location, e.isRtl.value), g = l.origin === "overlap" ? m : l.origin === "auto" ? Dt(m) : Ut(l.origin, e.isRtl.value);
    return m.side === g.side && m.align === Lt(g).align ? { preferredAnchor: Dl(m), preferredOrigin: Dl(g) } : { preferredAnchor: m, preferredOrigin: g };
  }), [i, u, o, r] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => p(() => {
    const g = parseFloat(l[m]);
    return isNaN(g) ? 1 / 0 : g;
  })), v = p(() => {
    if (Array.isArray(l.offset))
      return l.offset;
    if (typeof l.offset == "string") {
      const m = l.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof l.offset == "number" ? [l.offset, 0] : [0, 0];
  });
  let y = !1;
  const c = new ResizeObserver(() => {
    y && f();
  });
  function f() {
    if (y = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => y = !0);
    }), !e.activatorEl.value || !e.contentEl.value)
      return;
    const m = e.activatorEl.value.getBoundingClientRect(), g = function(C, $) {
      const w = fl(C);
      return $ ? w.x += parseFloat(C.style.right || 0) : w.x -= parseFloat(C.style.left || 0), w.y -= parseFloat(C.style.top || 0), w;
    }(e.contentEl.value, e.isRtl.value), b = Ct(e.contentEl.value);
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (g.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), g.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = b.reduce((C, $) => {
      const w = $.getBoundingClientRect(), E = new wn({ x: $ === document.documentElement ? 0 : w.x, y: $ === document.documentElement ? 0 : w.y, width: $.clientWidth, height: $.clientHeight });
      return C ? new wn({ x: Math.max(C.left, E.left), y: Math.max(C.top, E.top), width: Math.min(C.right, E.right) - Math.max(C.left, E.left), height: Math.min(C.bottom, E.bottom) - Math.max(C.top, E.top) }) : E;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let x = { anchor: t.value, origin: a.value };
    function O(C) {
      const $ = new wn(g), w = no(C.anchor, m), E = no(C.origin, $);
      let { x: _, y: F } = (L = E, { x: (z = w).x - L.x, y: z.y - L.y });
      var z, L;
      switch (C.anchor.side) {
        case "top":
          F -= v.value[0];
          break;
        case "bottom":
          F += v.value[0];
          break;
        case "left":
          _ -= v.value[0];
          break;
        case "right":
          _ += v.value[0];
      }
      switch (C.anchor.align) {
        case "top":
          F -= v.value[1];
          break;
        case "bottom":
          F += v.value[1];
          break;
        case "left":
          _ -= v.value[1];
          break;
        case "right":
          _ += v.value[1];
      }
      return $.x += _, $.y += F, $.width = Math.min($.width, o.value), $.height = Math.min($.height, r.value), { overflows: Wl($, h), x: _, y: F };
    }
    let S = 0, T = 0;
    const N = { x: 0, y: 0 }, P = { x: !1, y: !1 };
    let k = -1;
    for (; ; ) {
      if (k++ > 10) {
        At("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: C, y: $, overflows: w } = O(x);
      S += C, T += $, g.x += C, g.y += $;
      {
        const E = Ll(x.anchor), _ = w.x.before || w.x.after, F = w.y.before || w.y.after;
        let z = !1;
        if (["x", "y"].forEach((L) => {
          if (L === "x" && _ && !P.x || L === "y" && F && !P.y) {
            const j = { anchor: { ...x.anchor }, origin: { ...x.origin } }, M = L === "x" ? E === "y" ? Lt : Dt : E === "y" ? Dt : Lt;
            j.anchor = M(j.anchor), j.origin = M(j.origin);
            const { overflows: A } = O(j);
            (A[L].before <= w[L].before && A[L].after <= w[L].after || A[L].before + A[L].after < (w[L].before + w[L].after) / 2) && (x = j, z = P[L] = !0);
          }
        }), z)
          continue;
      }
      w.x.before && (S += w.x.before, g.x += w.x.before), w.x.after && (S -= w.x.after, g.x -= w.x.after), w.y.before && (T += w.y.before, g.y += w.y.before), w.y.after && (T -= w.y.after, g.y -= w.y.after);
      {
        const E = Wl(g, h);
        N.x = h.width - E.x.before - E.x.after, N.y = h.height - E.y.before - E.y.after, S += E.x.before, g.x += E.x.before, T += E.y.before, g.y += E.y.before;
      }
      break;
    }
    const B = Ll(x.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${x.anchor.side} ${x.anchor.align}`, transformOrigin: `${x.origin.side} ${x.origin.align}`, top: ee(Mt(T)), left: e.isRtl.value ? void 0 : ee(Mt(S)), right: e.isRtl.value ? ee(Mt(-S)) : void 0, minWidth: ee(B === "y" ? Math.min(i.value, m.width) : i.value), maxWidth: ee(to(Hn(N.x, i.value === 1 / 0 ? 0 : i.value, o.value))), maxHeight: ee(to(Hn(N.y, u.value === 1 / 0 ? 0 : u.value, r.value))) }), { available: N, contentBox: g };
  }
  return Y([e.activatorEl, e.contentEl], (m, g) => {
    let [b, h] = m, [x, O] = g;
    x && c.unobserve(x), b && c.observe(b), O && c.unobserve(O), h && c.observe(h);
  }, { immediate: !0 }), ke(() => {
    c.disconnect();
  }), Y(() => [t.value, a.value, l.offset, l.minWidth, l.minHeight, l.maxWidth, l.maxHeight], () => f()), Fe(() => {
    const m = f();
    if (!m)
      return;
    const { available: g, contentBox: b } = m;
    b.height > g.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Li = G({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ya }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Mt(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function to(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let tl = !0;
const kt = [];
let lo = -1;
function ll() {
  cancelAnimationFrame(lo), lo = requestAnimationFrame(() => {
    const e = kt.shift();
    e && e(), kt.length ? ll() : tl = !0;
  });
}
const gt = { none: null, close: function(e) {
  oo(e.activatorEl.value ?? e.contentEl.value, function(l) {
    e.isActive.value = !1;
  });
}, block: function(e, l) {
  var o;
  const n = (o = e.root.value) == null ? void 0 : o.offsetParent, t = [.../* @__PURE__ */ new Set([...Ct(e.activatorEl.value, l.contained ? n : void 0), ...Ct(e.contentEl.value, l.contained ? n : void 0)])].filter((r) => !r.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (u = n || document.documentElement, gl(u) && u);
  var u;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), t.forEach((r, v) => {
    r.style.setProperty("--v-body-scroll-x", ee(-r.scrollLeft)), r.style.setProperty("--v-body-scroll-y", ee(-r.scrollTop)), r !== document.documentElement && r.style.setProperty("--v-scrollbar-offset", ee(a)), r.classList.add("v-overlay-scroll-blocked");
  }), ke(() => {
    t.forEach((r, v) => {
      const y = parseFloat(r.style.getPropertyValue("--v-body-scroll-x")), c = parseFloat(r.style.getPropertyValue("--v-body-scroll-y"));
      r.style.removeProperty("--v-body-scroll-x"), r.style.removeProperty("--v-body-scroll-y"), r.style.removeProperty("--v-scrollbar-offset"), r.classList.remove("v-overlay-scroll-blocked"), r.scrollLeft = -y, r.scrollTop = -c;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, l, n) {
  let t = !1, a = -1, i = -1;
  function u(o) {
    var r;
    r = () => {
      var c, f;
      const v = performance.now();
      (f = (c = e.updateLocation).value) == null || f.call(c, o), t = (performance.now() - v) / (1e3 / 60) > 2;
    }, !tl || kt.length ? (kt.push(r), ll()) : (tl = !1, r(), ll());
  }
  i = (typeof requestIdleCallback > "u" ? (o) => o() : requestIdleCallback)(() => {
    n.run(() => {
      oo(e.activatorEl.value ?? e.contentEl.value, (o) => {
        t ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            u(o);
          });
        })) : u(o);
      });
    });
  }), ke(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Wi = G({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in gt } }, "VOverlay-scroll-strategies");
function oo(e, l) {
  const n = [document, ...Ct(e)];
  n.forEach((t) => {
    t.addEventListener("scroll", l, { passive: !0 });
  }), ke(() => {
    n.forEach((t) => {
      t.removeEventListener("scroll", l);
    });
  });
}
const ol = Symbol.for("vuetify:v-menu"), Ri = G({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Mi = G({ activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Ri() }, "VOverlay-activator");
function Ni(e, l) {
  let { isActive: n, isTop: t } = l;
  const a = R();
  let i = !1, u = !1, o = !0;
  const r = p(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = p(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !r.value), { runOpenDelay: y, runCloseDelay: c } = function(k, B) {
    const C = {}, $ = (w) => () => {
      if (!Ee)
        return Promise.resolve(!0);
      const E = w === "openDelay";
      return C.closeDelay && window.clearTimeout(C.closeDelay), delete C.closeDelay, C.openDelay && window.clearTimeout(C.openDelay), delete C.openDelay, new Promise((_) => {
        const F = parseInt(k[w] ?? 0, 10);
        C[w] = window.setTimeout(() => {
          B == null || B(E), _(E);
        }, F);
      });
    };
    return { runCloseDelay: $("closeDelay"), runOpenDelay: $("openDelay") };
  }(e, (k) => {
    k !== (e.openOnHover && i || r.value && u) || e.openOnHover && n.value && !t.value || (n.value !== k && (o = !0), n.value = k);
  }), f = (k) => {
    k.stopPropagation(), a.value = k.currentTarget || k.target, n.value = !n.value;
  }, m = (k) => {
    var B;
    (B = k.sourceCapabilities) != null && B.firesTouchEvents || (i = !0, a.value = k.currentTarget || k.target, y());
  }, g = (k) => {
    i = !1, c();
  }, b = (k) => {
    Yt && !k.target.matches(":focus-visible") || (u = !0, k.stopPropagation(), a.value = k.currentTarget || k.target, y());
  }, h = (k) => {
    u = !1, k.stopPropagation(), c();
  }, x = p(() => {
    const k = {};
    return v.value && (k.onClick = f), e.openOnHover && (k.onMouseenter = m, k.onMouseleave = g), r.value && (k.onFocus = b, k.onBlur = h), k;
  }), O = p(() => {
    const k = {};
    if (e.openOnHover && (k.onMouseenter = () => {
      i = !0, y();
    }, k.onMouseleave = () => {
      i = !1, c();
    }), r.value && (k.onFocusin = () => {
      u = !0, y();
    }, k.onFocusout = () => {
      u = !1, c();
    }), e.closeOnContentClick) {
      const B = ve(ol, null);
      k.onClick = () => {
        n.value = !1, B == null || B.closeParents();
      };
    }
    return k;
  }), S = p(() => {
    const k = {};
    return e.openOnHover && (k.onMouseenter = () => {
      o && (i = !0, o = !1, y());
    }, k.onMouseleave = () => {
      i = !1, c();
    }), k;
  });
  Y(t, (k) => {
    !k || (!e.openOnHover || i || r.value && u) && (!r.value || u || e.openOnHover && i) || (n.value = !1);
  });
  const T = R();
  Ye(() => {
    T.value && Fe(() => {
      a.value = qt(T.value);
    });
  });
  const N = xe("useActivator");
  let P;
  return Y(() => !!e.activator, (k) => {
    k && Ee ? (P = rl(), P.run(() => {
      (function(B, C, $) {
        let { activatorEl: w, activatorEvents: E } = $;
        function _() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z(), j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.activatorProps;
          L && function(M, A) {
            Object.keys(A).forEach((D) => {
              if (Ht(D)) {
                const q = El(D), I = pt.get(M);
                if (A[D] == null)
                  I == null || I.forEach((V) => {
                    const [W, H] = V;
                    W === q && (M.removeEventListener(q, H), I.delete(V));
                  });
                else if (!I || ![...I].some((V) => V[0] === q && V[1] === A[D])) {
                  M.addEventListener(q, A[D]);
                  const V = I || /* @__PURE__ */ new Set();
                  V.add([q, A[D]]), pt.has(M) || pt.set(M, V);
                }
              } else
                A[D] == null ? M.removeAttribute(D) : M.setAttribute(D, A[D]);
            });
          }(L, X(E.value, j));
        }
        function F() {
          let L = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : z(), j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : B.activatorProps;
          L && function(M, A) {
            Object.keys(A).forEach((D) => {
              if (Ht(D)) {
                const q = El(D), I = pt.get(M);
                I == null || I.forEach((V) => {
                  const [W, H] = V;
                  W === q && (M.removeEventListener(q, H), I.delete(V));
                });
              } else
                M.removeAttribute(D);
            });
          }(L, X(E.value, j));
        }
        function z() {
          var M, A;
          let L, j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : B.activator;
          if (j)
            if (j === "parent") {
              let D = (A = (M = C == null ? void 0 : C.proxy) == null ? void 0 : M.$el) == null ? void 0 : A.parentNode;
              for (; D.hasAttribute("data-no-activator"); )
                D = D.parentNode;
              L = D;
            } else
              L = typeof j == "string" ? document.querySelector(j) : "$el" in j ? j.$el : j;
          return w.value = (L == null ? void 0 : L.nodeType) === Node.ELEMENT_NODE ? L : null, w.value;
        }
        Y(() => B.activator, (L, j) => {
          if (j && L !== j) {
            const M = z(j);
            M && F(M);
          }
          L && Fe(() => _());
        }, { immediate: !0 }), Y(() => B.activatorProps, () => {
          _();
        }), ke(() => {
          F();
        });
      })(e, N, { activatorEl: a, activatorEvents: x });
    })) : P && P.stop();
  }, { flush: "post", immediate: !0 }), ke(() => {
    P == null || P.stop();
  }), { activatorEl: a, activatorRef: T, activatorEvents: x, contentEvents: O, scrimEvents: S };
}
const ji = Symbol.for("vuetify:display");
function ma() {
  const e = ve(ji);
  if (!e)
    throw new Error("Could not find Vuetify display injection");
  return e;
}
const Gi = G({ eager: Boolean }, "lazy");
function ga() {
  const e = xe("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const ao = Symbol.for("vuetify:stack"), jn = Te([]);
function qi() {
  return !0;
}
function io(e, l, n) {
  if (!e || ha(e, n) === !1)
    return !1;
  const t = Bo(l);
  if (typeof ShadowRoot < "u" && t instanceof ShadowRoot && t.host === e.target)
    return !1;
  const a = (typeof n.value == "object" && n.value.include || (() => []))();
  return a.push(l), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ha(e, l) {
  return (typeof l.value == "object" && l.value.closeConditional || qi)(e);
}
function ro(e, l) {
  const n = Bo(e);
  l(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && l(n);
}
const Hi = { mounted(e, l) {
  const n = (a) => function(i, u, o) {
    const r = typeof o.value == "function" ? o.value : o.value.handler;
    u._clickOutside.lastMousedownWasOutside && io(i, u, o) && setTimeout(() => {
      ha(i, o) && r && r(i);
    }, 0);
  }(a, e, l), t = (a) => {
    e._clickOutside.lastMousedownWasOutside = io(a, e, l);
  };
  ro(e, (a) => {
    a.addEventListener("click", n, !0), a.addEventListener("mousedown", t, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[l.instance.$.uid] = { onClick: n, onMousedown: t };
}, unmounted(e, l) {
  e._clickOutside && (ro(e, (n) => {
    var i;
    if (!n || !((i = e._clickOutside) != null && i[l.instance.$.uid]))
      return;
    const { onClick: t, onMousedown: a } = e._clickOutside[l.instance.$.uid];
    n.removeEventListener("click", t, !0), n.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[l.instance.$.uid]);
} };
function Ui(e) {
  const { modelValue: l, color: n, ...t } = e;
  return d(yn, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", X({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, t), null)] });
}
const ba = G({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Mi(), ...ie(), ...hn(), ...Gi(), ...Li(), ...Wi(), ...Ce(), ...ot() }, "VOverlay"), so = Z()({ name: "VOverlay", directives: { ClickOutside: Hi }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ba() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, l) {
  var D, q;
  let { slots: n, attrs: t, emit: a } = l;
  const i = me(e, "modelValue"), u = p({ get: () => i.value, set: (I) => {
    I && e.disabled || (i.value = I);
  } }), { teleportTarget: o } = (r = p(() => e.attach || e.contained), { teleportTarget: p(() => {
    const I = r.value;
    if (I === !0 || !Ee)
      return;
    const V = I === !1 ? document.body : typeof I == "string" ? document.querySelector(I) : I;
    if (V == null)
      return void At(`Unable to locate target ${I}`);
    let W = V.querySelector(":scope > .v-overlay-container");
    return W || (W = document.createElement("div"), W.className = "v-overlay-container", V.appendChild(W)), W;
  }) });
  var r;
  const { themeClasses: v } = Ve(e), { rtlClasses: y, isRtl: c } = lt(), { hasContent: f, onAfterLeave: m } = function(I, V) {
    const W = se(!1), H = p(() => W.value || I.eager || V.value);
    return Y(V, () => W.value = !0), { isBooted: W, hasContent: H, onAfterLeave: function() {
      I.eager || (W.value = !1);
    } };
  }(e, u), g = Yn(p(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: b, localTop: h, stackStyles: x } = function(I, V, W) {
    const H = xe("useStack"), K = !W, oe = ve(ao, void 0), ne = Te({ activeChildren: /* @__PURE__ */ new Set() });
    We(ao, ne);
    const de = se(+V.value);
    ln(I, () => {
      var Nn;
      const Re = (Nn = jn.at(-1)) == null ? void 0 : Nn[1];
      de.value = Re ? Re + 10 : +V.value, K && jn.push([H.uid, de.value]), oe == null || oe.activeChildren.add(H.uid), ke(() => {
        if (K) {
          const wa = nn(jn).findIndex((Fa) => Fa[0] === H.uid);
          jn.splice(wa, 1);
        }
        oe == null || oe.activeChildren.delete(H.uid);
      });
    });
    const $e = se(!0);
    K && Ye(() => {
      var Nn;
      const Re = ((Nn = jn.at(-1)) == null ? void 0 : Nn[0]) === H.uid;
      setTimeout(() => $e.value = Re);
    });
    const zt = p(() => !ne.activeChildren.size);
    return { globalTop: sl($e), localTop: zt, stackStyles: p(() => ({ zIndex: de.value })) };
  }(u, Q(e, "zIndex"), e._disableGlobalStack), { activatorEl: O, activatorRef: S, activatorEvents: T, contentEvents: N, scrimEvents: P } = Ni(e, { isActive: u, isTop: h }), { dimensionStyles: k } = bn(e), B = function() {
    if (!Ee)
      return se(!1);
    const { ssr: I } = ma();
    if (I) {
      const V = se(!1);
      return zn(() => {
        V.value = !0;
      }), V;
    }
    return se(!0);
  }(), { scopeId: C } = ga();
  Y(() => e.disabled, (I) => {
    I && (u.value = !1);
  });
  const $ = R(), w = R(), { contentStyles: E, updateLocation: _ } = function(I, V) {
    const W = R({}), H = R();
    function K(oe) {
      var ne;
      (ne = H.value) == null || ne.call(H, oe);
    }
    return Ee && (ln(() => !(!V.isActive.value || !I.locationStrategy), (oe) => {
      var ne, de;
      Y(() => I.locationStrategy, oe), ke(() => {
        H.value = void 0;
      }), typeof I.locationStrategy == "function" ? H.value = (ne = I.locationStrategy(V, I, W)) == null ? void 0 : ne.updateLocation : H.value = (de = ya[I.locationStrategy](V, I, W)) == null ? void 0 : de.updateLocation;
    }), window.addEventListener("resize", K, { passive: !0 }), ke(() => {
      window.removeEventListener("resize", K), H.value = void 0;
    })), { contentStyles: W, updateLocation: H };
  }(e, { isRtl: c, contentEl: w, activatorEl: O, isActive: u });
  function F(I) {
    a("click:outside", I), e.persistent ? A() : u.value = !1;
  }
  function z() {
    return u.value && b.value;
  }
  function L(I) {
    var V, W;
    I.key === "Escape" && b.value && (e.persistent ? A() : (u.value = !1, (V = w.value) != null && V.contains(document.activeElement) && ((W = O.value) == null || W.focus())));
  }
  (function(I, V) {
    if (!Ee)
      return;
    let W;
    Ye(async () => {
      W == null || W.stop(), V.isActive.value && I.scrollStrategy && (W = rl(), await Fe(), W.active && W.run(() => {
        var H;
        typeof I.scrollStrategy == "function" ? I.scrollStrategy(V, I, W) : (H = gt[I.scrollStrategy]) == null || H.call(gt, V, I, W);
      }));
    }), ke(() => {
      W == null || W.stop();
    });
  })(e, { root: $, contentEl: w, activatorEl: O, isActive: u, updateLocation: _ }), Ee && Y(u, (I) => {
    I ? window.addEventListener("keydown", L) : window.removeEventListener("keydown", L);
  }, { immediate: !0 });
  const j = (q = (D = xe("useRouter")) == null ? void 0 : D.proxy) == null ? void 0 : q.$router;
  ln(() => e.closeOnBack, () => {
    (function(I, V) {
      let W, H, K = !1;
      function oe(ne) {
        var de;
        (de = ne.state) != null && de.replaced || (K = !0, setTimeout(() => K = !1));
      }
      Ee && (Fe(() => {
        window.addEventListener("popstate", oe), W = I == null ? void 0 : I.beforeEach((ne, de, $e) => {
          Wt ? K ? V($e) : $e() : setTimeout(() => K ? V($e) : $e()), Wt = !0;
        }), H = I == null ? void 0 : I.afterEach(() => {
          Wt = !1;
        });
      }), ke(() => {
        window.removeEventListener("popstate", oe), W == null || W(), H == null || H();
      }));
    })(j, (I) => {
      b.value && u.value ? (I(!1), e.persistent ? A() : u.value = !1) : I();
    });
  });
  const M = R();
  function A() {
    e.noClickAnimation || w.value && Cn(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: It });
  }
  return Y(() => u.value && (e.absolute || e.contained) && o.value == null, (I) => {
    if (I) {
      const V = ko($.value);
      V && V !== document.scrollingElement && (M.value = V.scrollTop);
    }
  }), te(() => {
    var I;
    return d(fe, null, [(I = n.activator) == null ? void 0 : I.call(n, { isActive: u.value, props: X({ ref: S }, T.value, e.activatorProps) }), B.value && f.value && d(sn, { disabled: !o.value, to: o.value }, { default: () => [d("div", X({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": u.value, "v-overlay--contained": e.contained }, v.value, y.value, e.class], style: [x.value, { top: ee(M.value) }, e.style], ref: $ }, C, t), [d(Ui, X({ color: g, modelValue: u.value && !!e.scrim }, P.value), null), d(en, { appear: !0, persisted: !0, transition: e.transition, target: O.value, onAfterLeave: () => {
      m(), a("afterLeave");
    } }, { default: () => {
      var V;
      return [Ie(d("div", X({ ref: w, class: ["v-overlay__content", e.contentClass], style: [k.value, E.value] }, N.value, e.contentProps), [(V = n.default) == null ? void 0 : V.call(n, { isActive: u })]), [[Tn, u.value], [je("click-outside"), { handler: F, closeConditional: z, include: () => [O.value] }]])];
    } })])] })]);
  }), { activatorEl: O, animateClick: A, contentEl: w, globalTop: b, localTop: h, updateLocation: _ };
} }), Nt = Symbol("Forwarded refs");
function jt(e, l) {
  let n = e;
  for (; n; ) {
    const t = Reflect.getOwnPropertyDescriptor(n, l);
    if (t)
      return t;
    n = Object.getPrototypeOf(n);
  }
}
function Tt(e) {
  for (var l = arguments.length, n = new Array(l > 1 ? l - 1 : 0), t = 1; t < l; t++)
    n[t - 1] = arguments[t];
  return e[Nt] = n, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const u of n)
        if (u.value && Reflect.has(u.value, i)) {
          const o = Reflect.get(u.value, i);
          return typeof o == "function" ? o.bind(u.value) : o;
        }
    }
  }, has(a, i) {
    if (Reflect.has(a, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("__"))
      return !1;
    for (const u of n)
      if (u.value && Reflect.has(u.value, i))
        return !0;
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var o;
    const u = Reflect.getOwnPropertyDescriptor(a, i);
    if (u)
      return u;
    if (typeof i != "symbol" && !i.startsWith("__")) {
      for (const r of n) {
        if (!r.value)
          continue;
        const v = jt(r.value, i) ?? ("_" in r.value ? jt((o = r.value._) == null ? void 0 : o.setupState, i) : void 0);
        if (v)
          return v;
      }
      for (const r of n) {
        const v = r.value && r.value[Nt];
        if (!v)
          continue;
        const y = v.slice();
        for (; y.length; ) {
          const c = y.shift(), f = jt(c.value, i);
          if (f)
            return f;
          const m = c.value && c.value[Nt];
          m && y.push(...m);
        }
      }
    }
  } });
}
const Yi = G({ id: String, ...pl(ba({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Ao } }), ["absolute"]) }, "VMenu"), Xi = Z()({ name: "VMenu", props: Yi(), emits: { "update:modelValue": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const t = me(e, "modelValue"), { scopeId: a } = ga(), i = De(), u = p(() => e.id || `v-menu-${i}`), o = R(), r = ve(ol, null), v = se(0);
  function y() {
    r == null || r.closeParents();
  }
  function c(g) {
    var b, h;
    e.disabled || g.key === "Tab" && (t.value = !1, (h = (b = o.value) == null ? void 0 : b.activatorEl) == null || h.focus());
  }
  function f(g) {
    var h;
    if (e.disabled)
      return;
    const b = (h = o.value) == null ? void 0 : h.contentEl;
    b && t.value ? g.key === "ArrowDown" ? (g.preventDefault(), bt(b, "next")) : g.key === "ArrowUp" && (g.preventDefault(), bt(b, "prev")) : ["ArrowDown", "ArrowUp"].includes(g.key) && (t.value = !0, g.preventDefault(), setTimeout(() => setTimeout(() => f(g))));
  }
  We(ol, { register() {
    ++v.value;
  }, unregister() {
    --v.value;
  }, closeParents() {
    setTimeout(() => {
      v.value || (t.value = !1, r == null || r.closeParents());
    }, 40);
  } }), Y(t, (g) => {
    g ? r == null || r.register() : r == null || r.unregister();
  });
  const m = p(() => X({ "aria-haspopup": "menu", "aria-expanded": String(t.value), "aria-owns": u.value, onKeydown: f }, e.activatorProps));
  return te(() => {
    const [g] = so.filterProps(e);
    return d(so, X({ ref: o, class: ["v-menu", e.class], style: e.style }, g, { modelValue: t.value, "onUpdate:modelValue": (b) => t.value = b, absolute: !0, activatorProps: m.value, "onClick:outside": y, onKeydown: c }, a), { activator: n.activator, default: function() {
      for (var b = arguments.length, h = new Array(b), x = 0; x < b; x++)
        h[x] = arguments[x];
      return d(Be, { root: "VMenu" }, { default: () => {
        var O;
        return [(O = n.default) == null ? void 0 : O.call(n, ...h)];
      } });
    } });
  }), Tt({ id: u, ΨopenChildren: v }, o);
} }), Ki = G({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ie(), ...ot({ transition: { component: _o } }) }, "VCounter"), Ia = Z()({ name: "VCounter", functional: !0, props: Ki(), setup(e, l) {
  let { slots: n } = l;
  const t = p(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return te(() => d(en, { transition: e.transition }, { default: () => [Ie(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: t.value, max: e.max, value: e.value }) : t.value]), [[Tn, e.active]])] })), {};
} }), Zi = G({ floating: Boolean, ...ie() }, "VFieldLabel"), vt = Z()({ name: "VFieldLabel", props: Zi(), setup(e, l) {
  let { slots: n } = l;
  return te(() => d(Zo, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), Ji = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], Vl = G({ appendInnerIcon: ue, bgColor: String, clearable: Boolean, clearIcon: { type: ue, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: ue, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Ji.includes(e) }, "onClick:clear": Ne(), "onClick:appendInner": Ne(), "onClick:prependInner": Ne(), ...ie(), ...kl(), ...Ze(), ...Ce() }, "VField"), Al = Z()({ name: "VField", inheritAttrs: !1, props: { id: String, ...ta(), ...Vl() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { themeClasses: i } = Ve(e), { loaderClasses: u } = Pt(e), { focusClasses: o, isFocused: r, focus: v, blur: y } = ct(e), { InputIcon: c } = na(e), { roundedClasses: f } = Je(e), { rtlClasses: m } = lt(), g = p(() => e.dirty || e.active), b = p(() => !(e.singleLine || !e.label && !a.label)), h = De(), x = p(() => e.id || `input-${h}`), O = p(() => `${x.value}-messages`), S = R(), T = R(), N = R(), P = p(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: k, backgroundColorStyles: B } = Yn(Q(e, "bgColor")), { textColorClasses: C, textColorStyles: $ } = Xe(p(() => e.error || e.disabled ? void 0 : g.value && r.value ? e.color : e.baseColor));
  Y(g, (_) => {
    if (b.value) {
      const F = S.value.$el, z = T.value.$el;
      requestAnimationFrame(() => {
        const L = fl(F), j = z.getBoundingClientRect(), M = j.x - L.x, A = j.y - L.y - (L.height / 2 - j.height / 2), D = j.width / 0.75, q = Math.abs(D - L.width) > 1 ? { maxWidth: ee(D) } : void 0, I = getComputedStyle(F), V = getComputedStyle(z), W = 1e3 * parseFloat(I.transitionDuration) || 150, H = parseFloat(V.getPropertyValue("--v-field-label-scale")), K = V.getPropertyValue("color");
        F.style.visibility = "visible", z.style.visibility = "hidden", Cn(F, { transform: `translate(${M}px, ${A}px) scale(${H})`, color: K, ...q }, { duration: W, easing: It, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          F.style.removeProperty("visibility"), z.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const w = p(() => ({ isActive: g, isFocused: r, controlRef: N, blur: y, focus: v }));
  function E(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return te(() => {
    var M, A, D;
    const _ = e.variant === "outlined", F = a["prepend-inner"] || e.prependInnerIcon, z = !(!e.clearable && !a.clear), L = !!(a["append-inner"] || e.appendInnerIcon || z), j = a.label ? a.label({ ...w.value, label: e.label, props: { for: x.value } }) : e.label;
    return d("div", X({ class: ["v-field", { "v-field--active": g.value, "v-field--appended": L, "v-field--center-affix": e.centerAffix ?? !P.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": F, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !j, [`v-field--variant-${e.variant}`]: !0 }, i.value, k.value, o.value, u.value, f.value, m.value, e.class], style: [B.value, $.value, e.style], onClick: E }, n), [d("div", { class: "v-field__overlay" }, null), d(wl, { name: "v-field", active: !!e.loading, color: e.error ? "error" : e.color }, { default: a.loader }), F && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(c, { key: "prepend-icon", name: "prependInner" }, null), (M = a["prepend-inner"]) == null ? void 0 : M.call(a, w.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && d(vt, { key: "floating-label", ref: T, class: [C.value], floating: !0, for: x.value }, { default: () => [j] }), d(vt, { ref: S, for: x.value }, { default: () => [j] }), (A = a.default) == null ? void 0 : A.call(a, { ...w.value, props: { id: x.value, class: "v-field__input", "aria-describedby": O.value }, focus: v, blur: y })]), z && d(Oo, { key: "clear" }, { default: () => [Ie(d("div", { class: "v-field__clearable", onMousedown: (q) => {
      q.preventDefault(), q.stopPropagation();
    } }, [a.clear ? a.clear() : d(c, { name: "clear" }, null)]), [[Tn, e.dirty]])] }), L && d("div", { key: "append", class: "v-field__append-inner" }, [(D = a["append-inner"]) == null ? void 0 : D.call(a, w.value), e.appendInnerIcon && d(c, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", C.value] }, [_ && d(fe, null, [d("div", { class: "v-field__outline__start" }, null), b.value && d("div", { class: "v-field__outline__notch" }, [d(vt, { ref: T, floating: !0, for: x.value }, { default: () => [j] })]), d("div", { class: "v-field__outline__end" }, null)]), P.value && b.value && d(vt, { ref: T, floating: !0, for: x.value }, { default: () => [j] })])]);
  }), { controlRef: N };
} });
function Ca(e) {
  return et(e, Object.keys(Al.props).filter((l) => !Ht(l) && l !== "class" && l !== "style"));
}
const Qi = ["color", "file", "time", "date", "datetime-local", "week", "month"], Sa = G({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, type: { type: String, default: "text" }, modelModifiers: Object, ...dt(), ...Vl() }, "VTextField"), al = Z()({ name: "VTextField", directives: { Intersect: Cl }, inheritAttrs: !1, props: Sa(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = me(e, "modelValue"), { isFocused: u, focus: o, blur: r } = ct(e), v = p(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value ?? "").toString().length), y = p(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), c = p(() => ["plain", "underlined"].includes(e.variant));
  function f(P, k) {
    var B, C;
    e.autofocus && P && ((C = (B = k[0].target) == null ? void 0 : B.focus) == null || C.call(B));
  }
  const m = R(), g = R(), b = R(), h = p(() => Qi.includes(e.type) || e.persistentPlaceholder || u.value || e.active);
  function x() {
    var P;
    b.value !== document.activeElement && ((P = b.value) == null || P.focus()), u.value || o();
  }
  function O(P) {
    t("mousedown:control", P), P.target !== b.value && (x(), P.preventDefault());
  }
  function S(P) {
    x(), t("click:control", P);
  }
  function T(P) {
    P.stopPropagation(), x(), Fe(() => {
      i.value = null, Io(e["onClick:clear"], P);
    });
  }
  function N(P) {
    var B;
    const k = P.target;
    if (i.value = k.value, ((B = e.modelModifiers) == null ? void 0 : B.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const C = [k.selectionStart, k.selectionEnd];
      Fe(() => {
        k.selectionStart = C[0], k.selectionEnd = C[1];
      });
    }
  }
  return te(() => {
    const P = !!(a.counter || e.counter || e.counterValue), k = !(!P && !a.details), [B, C] = nt(n), [{ modelValue: $, ...w }] = on.filterProps(e), [E] = Ca(e);
    return d(on, X({ ref: m, modelValue: i.value, "onUpdate:modelValue": (_) => i.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-text-field--plain-underlined": ["plain", "underlined"].includes(e.variant) }, e.class], style: e.style }, B, w, { centerAffix: !c.value, focused: u.value }), { ...a, default: (_) => {
      let { id: F, isDisabled: z, isDirty: L, isReadonly: j, isValid: M } = _;
      return d(Al, X({ ref: g, onMousedown: O, onClick: S, "onClick:clear": T, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, E, { id: F.value, active: h.value || L.value, dirty: L.value || e.dirty, disabled: z.value, focused: u.value, error: M.value === !1 }), { ...a, default: (A) => {
        let { props: { class: D, ...q } } = A;
        const I = Ie(d("input", X({ ref: b, value: i.value, onInput: N, autofocus: e.autofocus, readonly: j.value, disabled: z.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: x, onBlur: r }, q, C), null), [[je("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), d("div", { class: D, "data-no-activator": "" }, [a.default ? d(fe, null, [a.default(), I]) : Pa(I)]), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: k ? (_) => {
      var F;
      return d(fe, null, [(F = a.details) == null ? void 0 : F.call(a, _), P && d(fe, null, [d("span", null, null), d(Ia, { active: e.persistentCounter || u.value, value: v.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Tt({}, m, g, b);
} }), er = G({ renderless: Boolean, ...ie() }, "VVirtualScrollItem"), nr = Z()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: er(), emits: { "update:height": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const { resizeRef: i, contentRect: u } = bl(void 0, "border");
  Y(() => {
    var o;
    return (o = u.value) == null ? void 0 : o.height;
  }, (o) => {
    o != null && t("update:height", o);
  }), te(() => {
    var o, r;
    return e.renderless ? d(fe, null, [(o = a.default) == null ? void 0 : o.call(a, { itemRef: i })]) : d("div", X({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(r = a.default) == null ? void 0 : r.call(a)]);
  });
} }), tr = G({ itemHeight: { type: [Number, String], default: 48 } }, "virtual");
function lr(e, l, n) {
  const t = se(0), a = se(e.itemHeight), i = p({ get: () => parseInt(a.value ?? 0, 10), set(S) {
    a.value = S;
  } }), u = R(), { resizeRef: o, contentRect: r } = bl();
  Ye(() => {
    o.value = u.value;
  });
  const v = ma(), y = /* @__PURE__ */ new Map();
  let c = Array.from({ length: l.value.length });
  const f = p(() => {
    const S = (r.value && u.value !== document.documentElement ? r.value.height : v.height.value) - ((n == null ? void 0 : n.value) ?? 0);
    return Math.ceil(S / i.value * 1.7 + 1);
  });
  function m(S) {
    return c.slice(0, S).reduce((T, N) => T + (N || i.value), 0);
  }
  let g = 0;
  const b = p(() => Math.min(l.value.length, t.value + f.value)), h = p(() => l.value.slice(t.value, b.value).map((S, T) => ({ raw: S, index: T + t.value }))), x = p(() => m(t.value)), O = p(() => m(l.value.length) - m(b.value));
  return Y(() => l.value.length, () => {
    c = function(S) {
      let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return Array.from({ length: S }, (N, P) => T + P);
    }(l.value.length).map(() => i.value), y.forEach((S, T) => {
      const N = l.value.indexOf(T);
      N === -1 ? y.delete(T) : c[N] = S;
    });
  }), { containerRef: u, computedItems: h, itemHeight: i, paddingTop: x, paddingBottom: O, scrollToIndex: function(S) {
    if (!u.value)
      return;
    const T = m(S);
    u.value.scrollTop = T;
  }, handleScroll: function() {
    if (!u.value || !r.value)
      return;
    const S = r.value.height - 56, T = u.value.scrollTop, N = T < g ? -1 : 1, P = function($) {
      const w = l.value.length;
      let E = 0, _ = 0;
      for (; _ < $ && E < w; )
        _ += c[E++] || i.value;
      return E - 1;
    }(T + S / 2), k = Math.round(f.value / 3), B = P - k, C = t.value + 2 * k - 1;
    N === -1 && P <= C ? t.value = Hn(B, 0, l.value.length) : N === 1 && P >= C && (t.value = Hn(B, 0, l.value.length - f.value)), g = T;
  }, handleItemResize: function(S, T) {
    i.value = Math.max(i.value, T), c[S] = T, y.set(l.value[S], T);
  } };
}
const or = G({ items: { type: Array, default: () => [] }, renderless: Boolean, ...tr(), ...ie(), ...hn() }, "VVirtualScroll"), ar = Z()({ name: "VVirtualScroll", props: or(), setup(e, l) {
  let { slots: n } = l;
  const t = xe("VVirtualScroll"), { dimensionStyles: a } = bn(e), { containerRef: i, handleScroll: u, handleItemResize: o, scrollToIndex: r, paddingTop: v, paddingBottom: y, computedItems: c } = lr(e, Q(e, "items"));
  return ln(() => e.renderless, () => {
    zn(() => {
      var f;
      i.value = ko(t.vnode.el, !0), (f = i.value) == null || f.addEventListener("scroll", u);
    }), ke(() => {
      var f;
      (f = i.value) == null || f.removeEventListener("scroll", u);
    });
  }), te(() => {
    const f = c.value.map((m) => d(nr, { key: m.index, renderless: e.renderless, "onUpdate:height": (g) => o(m.index, g) }, { default: (g) => {
      var b;
      return (b = n.default) == null ? void 0 : b.call(n, { item: m.raw, index: m.index, ...g });
    } }));
    return e.renderless ? d(fe, null, [d("div", { class: "v-virtual-scroll__spacer", style: { paddingTop: ee(v.value) } }, null), f, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ee(y.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScroll: u, style: [a.value, e.style] }, [d("div", { class: "v-virtual-scroll__container", style: { paddingTop: ee(v.value), paddingBottom: ee(y.value) } }, [f])]);
  }), { scrollToIndex: r };
} });
function ir(e, l) {
  const n = se(!1);
  let t;
  return { onListScroll: function(a) {
    cancelAnimationFrame(t), n.value = !0, t = requestAnimationFrame(() => {
      t = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var o, r;
    if (a.key === "Tab" && ((o = l.value) == null || o.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (r = e.value) == null ? void 0 : r.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => requestAnimationFrame(v)), await new Promise((v) => {
        if (n.value) {
          const y = Y(n, () => {
            y(), v();
          });
        } else
          v();
      });
    }();
    const u = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const v = i.getBoundingClientRect().top;
      for (const y of u)
        if (y.getBoundingClientRect().top >= v) {
          y.focus();
          break;
        }
    } else {
      const v = i.getBoundingClientRect().bottom;
      for (const y of [...u].reverse())
        if (y.getBoundingClientRect().bottom <= v) {
          y.focus();
          break;
        }
    }
  } };
}
const rr = G({ chips: Boolean, closableChips: Boolean, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: ue, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, valueComparator: { type: Function, default: Dn }, ...da({ itemChildren: !1 }) }, "Select"), sr = G({ ...rr(), ...pl(Sa({ modelValue: null }), ["validationValue", "dirty", "appendInnerIcon"]), ...ot({ transition: { component: Ao } }) }, "VSelect"), ur = Z()({ name: "VSelect", props: sr(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, l) {
  let { slots: n } = l;
  const { t } = Il(), a = R(), i = R(), u = me(e, "menu"), o = p({ get: () => u.value, set: (F) => {
    var z;
    u.value && !F && ((z = i.value) != null && z.ΨopenChildren) || (u.value = F);
  } }), { items: r, transformIn: v, transformOut: y } = Ei(e), c = me(e, "modelValue", [], (F) => v(F === null ? [null] : tn(F)), (F) => {
    const z = y(F);
    return e.multiple ? z : z[0] ?? null;
  }), f = la(), m = p(() => c.value.map((F) => r.value.find((z) => e.valueComparator(z.value, F.value)) || F)), g = p(() => m.value.map((F) => F.props.value)), b = se(!1);
  let h, x = "";
  const O = p(() => e.hideSelected ? r.value.filter((F) => !m.value.some((z) => z === F)) : r.value), S = p(() => e.hideNoData && !r.value.length || e.readonly || (f == null ? void 0 : f.isReadonly.value)), T = R(), { onListScroll: N, onListKeydown: P } = ir(T, a);
  function k(F) {
    e.openOnClear && (o.value = !0);
  }
  function B() {
    S.value || (o.value = !o.value);
  }
  function C(F) {
    var j, M;
    if (e.readonly || f != null && f.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(F.key) && F.preventDefault(), ["Enter", "ArrowDown", " "].includes(F.key) && (o.value = !0), ["Escape", "Tab"].includes(F.key) && (o.value = !1), F.key === "Home" ? (j = T.value) == null || j.focus("first") : F.key === "End" && ((M = T.value) == null || M.focus("last")), e.multiple || !function(A) {
      const D = A.key.length === 1, q = !A.ctrlKey && !A.metaKey && !A.altKey;
      return D && q;
    }(F)))
      return;
    const z = performance.now();
    z - h > 1e3 && (x = ""), x += F.key.toLowerCase(), h = z;
    const L = r.value.find((A) => A.title.toLowerCase().startsWith(x));
    L !== void 0 && (c.value = [L]);
  }
  function $(F) {
    if (e.multiple) {
      const z = g.value.findIndex((L) => e.valueComparator(L, F.value));
      if (z === -1)
        c.value = [...c.value, F];
      else {
        const L = [...c.value];
        L.splice(z, 1), c.value = L;
      }
    } else
      c.value = [F], o.value = !1;
  }
  function w(F) {
    var z;
    (z = T.value) != null && z.$el.contains(F.relatedTarget) || (o.value = !1);
  }
  function E() {
    var F;
    b.value && ((F = a.value) == null || F.focus());
  }
  function _(F) {
    b.value = !0;
  }
  return te(() => {
    const F = !(!e.chips && !n.chip), z = !!(!e.hideNoData || O.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), L = c.value.length > 0, [j] = al.filterProps(e), M = L || !b.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(al, X({ ref: a }, j, { modelValue: c.value.map((A) => A.props.value).join(", "), "onUpdate:modelValue": (A) => {
      A == null && (c.value = []);
    }, focused: b.value, "onUpdate:focused": (A) => b.value = A, validationValue: c.externalValue, dirty: L, class: ["v-select", { "v-select--active-menu": o.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": c.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, readonly: !0, placeholder: M, "onClick:clear": k, "onMousedown:control": B, onBlur: w, onKeydown: C }), { ...n, default: () => d(fe, null, [d(Xi, X({ ref: i, modelValue: o.value, "onUpdate:modelValue": (A) => o.value = A, activator: "parent", contentClass: "v-select__content", disabled: S.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: E }, e.menuProps), { default: () => [z && d(Di, { ref: T, selected: g.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (A) => A.preventDefault(), onKeydown: P, onFocusin: _, onScrollPassive: N, tabindex: "-1" }, { default: () => {
      var A, D, q;
      return [(A = n["prepend-item"]) == null ? void 0 : A.call(n), !O.value.length && !e.hideNoData && (((D = n["no-data"]) == null ? void 0 : D.call(n)) ?? d(xt, { title: t(e.noDataText) }, null)), d(ar, { renderless: !0, items: O.value }, { default: (I) => {
        var oe;
        let { item: V, index: W, itemRef: H } = I;
        const K = X(V.props, { ref: H, key: W, onClick: () => $(V) });
        return ((oe = n.item) == null ? void 0 : oe.call(n, { item: V, index: W, props: K })) ?? d(xt, K, { prepend: (ne) => {
          let { isSelected: de } = ne;
          return d(fe, null, [e.multiple && !e.hideSelected ? d(Qt, { key: V.value, modelValue: de, ripple: !1, tabindex: "-1" }, null) : void 0, V.props.prependIcon && d(ce, { icon: V.props.prependIcon }, null)]);
        } });
      } }), (q = n["append-item"]) == null ? void 0 : q.call(n)];
    } })] }), m.value.map((A, D) => {
      var I;
      const q = { "onClick:close": function(V) {
        V.stopPropagation(), V.preventDefault(), $(A);
      }, onMousedown(V) {
        V.preventDefault(), V.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 };
      return d("div", { key: A.value, class: "v-select__selection" }, [F ? n.chip ? d(Be, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: A.title } } }, { default: () => {
        var V;
        return [(V = n.chip) == null ? void 0 : V.call(n, { item: A, index: D, props: q })];
      } }) : d(bi, X({ key: "chip", closable: e.closableChips, size: "small", text: A.title }, q), null) : ((I = n.selection) == null ? void 0 : I.call(n, { item: A, index: D })) ?? d("span", { class: "v-select__selection-text" }, [A.title, e.multiple && D < m.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [mo(",")])])]);
    })]), "append-inner": function() {
      var I;
      for (var A = arguments.length, D = new Array(A), q = 0; q < A; q++)
        D[q] = arguments[q];
      return d(fe, null, [(I = n["append-inner"]) == null ? void 0 : I.call(n, ...D), e.menuIcon ? d(ce, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Tt({ isFocused: b, menu: o, select: $ }, a);
} }), cr = Z()({ name: "VCardActions", props: ie(), setup(e, l) {
  let { slots: n } = l;
  return gn({ VBtn: { variant: "text" } }), te(() => {
    var t;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(t = n.default) == null ? void 0 : t.call(n)]);
  }), {};
} }), dr = tt("v-card-subtitle"), pr = tt("v-card-title"), vr = G({ appendAvatar: String, appendIcon: ue, prependAvatar: String, prependIcon: ue, subtitle: String, title: String, ...ie(), ...Ge() }, "VCardItem"), fr = Z()({ name: "VCardItem", props: vr(), setup(e, l) {
  let { slots: n } = l;
  return te(() => {
    var v;
    const t = !(!e.prependAvatar && !e.prependIcon), a = !(!t && !n.prepend), i = !(!e.appendAvatar && !e.appendIcon), u = !(!i && !n.append), o = !(!e.title && !n.title), r = !(!e.subtitle && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(Be, { key: "prepend-defaults", disabled: !t, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : t && d(En, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [o && d(pr, { key: "title" }, { default: () => {
      var y;
      return [((y = n.title) == null ? void 0 : y.call(n)) ?? e.title];
    } }), r && d(dr, { key: "subtitle" }, { default: () => {
      var y;
      return [((y = n.subtitle) == null ? void 0 : y.call(n)) ?? e.subtitle];
    } }), (v = n.default) == null ? void 0 : v.call(n)]), u && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(Be, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : i && d(En, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), vn = tt("v-card-text"), yr = G({ appendAvatar: String, appendIcon: ue, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: ue, ripple: { type: [Boolean, Object], default: !0 }, subtitle: String, text: String, title: String, ...Ln(), ...ie(), ...Ge(), ...hn(), ...Rn(), ...kl(), ...Bl(), ...No(), ...Ze(), ...Et(), ...Pe(), ...Ce(), ...rn({ variant: "elevated" }) }, "VCard"), Fn = Z()({ name: "VCard", directives: { Ripple: ut }, props: yr(), setup(e, l) {
  let { attrs: n, slots: t } = l;
  const { themeClasses: a } = Ve(e), { borderClasses: i } = Wn(e), { colorClasses: u, colorStyles: o, variantClasses: r } = it(e), { densityClasses: v } = Qe(e), { dimensionStyles: y } = bn(e), { elevationClasses: c } = Mn(e), { loaderClasses: f } = Pt(e), { locationStyles: m } = xl(e), { positionClasses: g } = jo(e), { roundedClasses: b } = Je(e), h = $t(e, n), x = p(() => e.link !== !1 && h.isLink.value), O = p(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
  return te(() => {
    const S = x.value ? "a" : e.tag, T = !(!t.title && !e.title), N = !(!t.subtitle && !e.subtitle), P = T || N, k = !!(t.append || e.appendAvatar || e.appendIcon), B = !!(t.prepend || e.prependAvatar || e.prependIcon), C = !(!t.image && !e.image), $ = P || B || k, w = !(!t.text && !e.text);
    return Ie(d(S, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": O.value }, a.value, i.value, u.value, v.value, c.value, f.value, g.value, b.value, r.value, e.class], style: [o.value, y.value, m.value, e.style], href: h.href.value, onClick: O.value && h.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var E;
      return [C && d("div", { key: "image", class: "v-card__image" }, [t.image ? d(Be, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, t.image) : d($o, { key: "image-img", cover: !0, src: e.image }, null)]), d(wl, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: t.loader }), $ && d(fr, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: t.item, prepend: t.prepend, title: t.title, subtitle: t.subtitle, append: t.append }), w && d(vn, { key: "text" }, { default: () => {
        var _;
        return [((_ = t.text) == null ? void 0 : _.call(t)) ?? e.text];
      } }), (E = t.default) == null ? void 0 : E.call(t), t.actions && d(cr, null, { default: t.actions }), at(O.value, "v-card")];
    } }), [[je("ripple"), O.value && e.ripple]]);
  }), {};
} }), mr = G({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...dt(), ...Fl() }, "VSwitch"), gr = Z()({ name: "VSwitch", inheritAttrs: !1, props: mr(), emits: { "update:focused": (e) => !0, "update:modelValue": () => !0, "update:indeterminate": (e) => !0 }, setup(e, l) {
  let { attrs: n, slots: t } = l;
  const a = me(e, "indeterminate"), i = me(e, "modelValue"), { loaderClasses: u } = Pt(e), { isFocused: o, focus: r, blur: v } = ct(e), y = p(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), c = De(), f = p(() => e.id || `switch-${c}`);
  function m() {
    a.value && (a.value = !1);
  }
  return te(() => {
    const [g, b] = nt(n), [h, x] = on.filterProps(e), [O, S] = Jt.filterProps(e), T = R();
    function N(P) {
      var k, B;
      P.stopPropagation(), P.preventDefault(), (B = (k = T.value) == null ? void 0 : k.input) == null || B.click();
    }
    return d(on, X({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, u.value, e.class], style: e.style }, g, h, { id: f.value, focused: o.value }), { ...t, default: (P) => {
      let { id: k, messagesId: B, isDisabled: C, isReadonly: $, isValid: w } = P;
      return d(Jt, X({ ref: T }, O, { modelValue: i.value, "onUpdate:modelValue": [(E) => i.value = E, m], id: k.value, "aria-describedby": B.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: C.value, readonly: $.value, onFocus: r, onBlur: v }, b), { ...t, default: () => d("div", { class: "v-switch__track", onClick: N }, null), input: (E) => {
        let { textColorClasses: _, textColorStyles: F } = E;
        return d("div", { class: ["v-switch__thumb", _.value], style: F.value }, [e.loading && d(wl, { name: "v-switch", active: !0, color: w.value === !1 ? void 0 : y.value }, { default: (z) => t.loader ? t.loader(z) : d(Mo, { active: z.isActive, color: z.color, indeterminate: !0, size: "16", width: "2" }, null) })]);
      } });
    } });
  }), {};
} }), hr = G({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...dt(), ...Vl() }, "VTextarea"), br = Z()({ name: "VTextarea", directives: { Intersect: Cl }, inheritAttrs: !1, props: hr(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, l) {
  let { attrs: n, emit: t, slots: a } = l;
  const i = me(e, "modelValue"), { isFocused: u, focus: o, blur: r } = ct(e), v = p(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), y = p(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function c(w, E) {
    var _, F;
    e.autofocus && w && ((F = (_ = E[0].target) == null ? void 0 : _.focus) == null || F.call(_));
  }
  const f = R(), m = R(), g = se(""), b = R(), h = p(() => e.persistentPlaceholder || u.value || e.active);
  function x() {
    var w;
    b.value !== document.activeElement && ((w = b.value) == null || w.focus()), u.value || o();
  }
  function O(w) {
    x(), t("click:control", w);
  }
  function S(w) {
    t("mousedown:control", w);
  }
  function T(w) {
    w.stopPropagation(), x(), Fe(() => {
      i.value = "", Io(e["onClick:clear"], w);
    });
  }
  function N(w) {
    var _;
    const E = w.target;
    if (i.value = E.value, (_ = e.modelModifiers) == null ? void 0 : _.trim) {
      const F = [E.selectionStart, E.selectionEnd];
      Fe(() => {
        E.selectionStart = F[0], E.selectionEnd = F[1];
      });
    }
  }
  const P = R(), k = R(+e.rows), B = p(() => ["plain", "underlined"].includes(e.variant));
  function C() {
    e.autoGrow && Fe(() => {
      if (!P.value || !m.value)
        return;
      const w = getComputedStyle(P.value), E = getComputedStyle(m.value.$el), _ = parseFloat(w.getPropertyValue("--v-field-padding-top")) + parseFloat(w.getPropertyValue("--v-input-padding-top")) + parseFloat(w.getPropertyValue("--v-field-padding-bottom")), F = P.value.scrollHeight, z = parseFloat(w.lineHeight), L = Hn(F ?? 0, Math.max(parseFloat(e.rows) * z + _, parseFloat(E.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * z + _ || 1 / 0);
      k.value = Math.floor((L - _) / z), g.value = ee(L);
    });
  }
  let $;
  return Ye(() => {
    e.autoGrow || (k.value = +e.rows);
  }), zn(C), Y(i, C), Y(() => e.rows, C), Y(() => e.maxRows, C), Y(() => e.density, C), Y(P, (w) => {
    w ? ($ = new ResizeObserver(C), $.observe(P.value)) : $ == null || $.disconnect();
  }), an(() => {
    $ == null || $.disconnect();
  }), te(() => {
    const w = !!(a.counter || e.counter || e.counterValue), E = !(!w && !a.details), [_, F] = nt(n), [{ modelValue: z, ...L }] = on.filterProps(e), [j] = Ca(e);
    return d(on, X({ ref: f, modelValue: i.value, "onUpdate:modelValue": (M) => i.value = M, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-text-field--plain-underlined": B.value }, e.class], style: e.style }, _, L, { centerAffix: k.value === 1 && !B.value, focused: u.value }), { ...a, default: (M) => {
      let { isDisabled: A, isDirty: D, isReadonly: q, isValid: I } = M;
      return d(Al, X({ ref: m, style: { "--v-textarea-control-height": g.value }, onClick: O, onMousedown: S, "onClick:clear": T, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: "textbox" }, j, { active: h.value || D.value, centerAffix: k.value === 1 && !B.value, dirty: D.value || e.dirty, disabled: A.value, focused: u.value, error: I.value === !1 }), { ...a, default: (V) => {
        let { props: { class: W, ...H } } = V;
        return d(fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Ie(d("textarea", X({ ref: b, class: W, value: i.value, onInput: N, autofocus: e.autofocus, readonly: q.value, disabled: A.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: x, onBlur: r }, H, F), null), [[je("intersect"), { handler: c }, null, { once: !0 }]]), e.autoGrow && Ie(d("textarea", { class: [W, "v-textarea__sizer"], "onUpdate:modelValue": (K) => i.value = K, ref: P, readonly: !0, "aria-hidden": "true" }, null), [[$a, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: E ? (M) => {
      var A;
      return d(fe, null, [(A = a.details) == null ? void 0 : A.call(a, M), w && d(fe, null, [d("span", null, null), d(Ia, { active: e.persistentCounter || u.value, value: v.value, max: y.value }, a.counter)])]);
    } : void 0 });
  }), Tt({}, f, m, b);
} }), Ba = Me({ __name: "BooleanIcons", props: _e({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const l = e, n = ve(Symbol.for("vuetify:icons")), t = un(e, "modelValue"), a = p(() => ze({ icon: l.iconFalse, iconOptions: n, name: "false" })), i = p(() => ze({ icon: l.iconTrue, iconOptions: n, name: "true" }));
  return (u, o) => t.value ? (U(), he(s(ce), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: u.iconTrueColor, icon: s(i), size: "x-small", title: u.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (U(), he(s(ce), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: u.iconFalseColor, icon: s(a), size: "x-small", title: u.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ae = "v-inline-fields", Vn = (e) => {
  const { field: l = "", density: n = "", disabled: t = !1, iconSet: a = "mdi", loading: i = !1, loadingWait: u, tableField: o = !1, variant: r } = e, v = n && r;
  return { [`${ae}`]: !0, [`${ae}--container`]: !0, [`${ae}--container-disabled`]: s(t), [`${ae}--container-table`]: o, [`${ae}--container-icon-set-${a}`]: !0, [`${ae}--container-loading`]: i && u, [`${ae}--container-${l}`]: !0, [`${ae}--container-${l}-${n}`]: !0, [`${ae}--container-${l}-${n}-${r}`]: v, [`${ae}--container-${l}-${r}`]: r, [`${ae}--container-${l}-${r}-${n}`]: v, [`${ae}--container-${n}`]: n, [`${ae}--container-${n}-${l}`]: n, [`${ae}--container-${n}-${r}`]: v, [`${ae}--container-${r}`]: r, [`${ae}--container-${r}-${n}`]: v, [`${ae}--container-${r}-${l}`]: r };
}, An = (e) => {
  const { field: l = "", density: n = "" } = e;
  return { [`${ae}--display-container`]: !0, [`${ae}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${n}`]: !0, "v-input--horizontal": !0 };
}, wt = (e) => {
  const { density: l = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${l}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, xa = (e) => {
  const { density: l = "" } = e;
  return { [`v-selection-control--density-${l}`]: !0 };
}, _l = (e, l, n) => {
  const { error: t = !1, empty: a = !1 } = n;
  return { [`${ae}`]: !0, [`${ae}--display-value-${e}`]: !0, [`${ae}--display-value`]: !0, [`${ae}--display-value-empty`]: s(a), [`text-${l}`]: !s(t), "text-danger": s(t) };
}, _n = (e) => {
  const { name: l, active: n = !1 } = e;
  return { [`${ae}`]: !0, [`${ae}--field`]: !0, [`${ae}--field-${l}`]: !0, [`${ae}--field-active`]: n };
}, On = (e) => {
  const { name: l, showField: n } = e;
  return { [`${ae}--card-container`]: !0, [`${ae}--card-container-${l}`]: !0, "d-none": !n };
};
function uo(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const l = 100 * Number(e);
    return l >= 100 ? 100 : l;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function co(e) {
  let l = function(c) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let m = c;
    return Object.entries(f).forEach(([g, b]) => {
      c.toLowerCase() != g.toLowerCase() || (m = b);
    }), m;
  }(e), n = 0, t = 0, a = 0, i = 100, u = 0, o = 0, r = 0;
  if (l.substring(0, 1) === "#")
    l = function(c) {
      let f = c.replace("#", "");
      f.length === 3 && (f = f.split("").map((x) => x + x).join(""));
      const m = parseInt(f.substring(0, 2), 16), g = parseInt(f.substring(2, 4), 16), b = parseInt(f.substring(4, 6), 16);
      return [m, g, b, 100];
    }(l);
  else if (l.includes("rgb"))
    l = [...l.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (l.includes("hsl"))
    return l = [...l.matchAll(/[\d+.\d+]+/g)].map(String), n = l[0], t = l[1], a = l[2], i = uo(l[3]), `${n} ${t}% ${a}% / ${i}%`;
  [u, o, r, i] = l, u /= 255, o /= 255, r /= 255, i = uo(i);
  const v = Math.max(u, o, r), y = Math.min(u, o, r);
  if (v === null || !y === null || isNaN(v) || isNaN(y)) {
    const c = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${l}" doesn't exist. Using the value "hsl(${c})" in it's place.`), c;
  }
  if (n = (v + y) / 2, t = (v + y) / 2, a = (v + y) / 2, v == y)
    n = t = 0;
  else {
    const c = v - y;
    switch (t = a > 0.5 ? c / (2 - v - y) : c / (v + y), v) {
      case u:
        n = (o - r) / c + (o < r ? 6 : 0);
        break;
      case o:
        n = (r - u) / c + 2;
        break;
      case r:
        n = (u - o) / c + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), t = Math.round(100 * t), a = Math.round(100 * a), `${n} ${t}% ${a}% / ${i}%`;
}
const Ir = (e, l) => {
  if (function(t) {
    return t === "transparent" || t === "none" || t === "inherit" || t === "currentColor" || t === "initial" || t === "unset";
  }(e))
    return e;
  if (function(t) {
    return t.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const n = function(t, a) {
    const i = a.global.current.value.colors;
    return Object.entries(i).find(([u]) => u === t);
  }(e, l);
  return n ? `hsl(${co(n[1])})` : `hsl(${co(e)})`;
}, Gn = (e) => {
  const { str: l, unit: n = "px" } = e;
  if (l != null && l !== "")
    return +l ? `${Number(l)}${n}` : String(l);
}, ka = (e) => {
  var a;
  const { modelValue: l, trueValue: n } = e, t = s(l);
  return ((a = t == null ? void 0 : t.toLowerCase) == null ? void 0 : a.call(t)) === "true" || t === "1" || t == "1" || t === !0 || t == n || t === n;
}, Ol = (e) => {
  const { underlineStyle: l, underlineWidth: n, color: t, error: a, theme: i, underlined: u } = e;
  let { underlineColor: o } = e;
  o = o || t;
  const r = { "border-bottom-color": Ir(o, i), "border-bottom-style": l, "border-bottom-width": n };
  return s(a) && (r["border-bottom-color"] = "rgb(var(--v-theme-danger))"), u || (r["border-bottom"] = "none"), r;
}, fn = (e) => {
  const { cardMinWidth: l, cardOffsetX: n, cardOffsetY: t, cardWidth: a, field: i, name: u = "" } = e, o = ((y) => {
    const { cardOffsetX: c, cardOffsetY: f, field: m } = y;
    if (!m)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: g, y: b } = m.getBoundingClientRect(), { width: h, height: x } = m.getBoundingClientRect(), { right: O, bottom: S } = m.getBoundingClientRect();
    return { bottom: Gn({ str: S + Number(f) }), height: x, left: Gn({ str: 0 + Number(c) }), right: Gn({ str: O + Number(c) }), top: Gn({ str: 2 + Number(f) }), width: Gn({ str: h }), x: g, y: b };
  })({ cardOffsetX: n, cardOffsetY: t, field: i });
  let r = l, v = a;
  return v || (v = u === "checkbox" ? "fit-content" : o.width), r || (r = u === "checkbox" ? "fit-content" : o.width), { left: o.left, top: o.top, width: v, zIndex: 10 };
}, Cr = { class: "v-inline-fields--display-wrapper" }, Ft = Me({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean } }, emits: ["toggleField"], setup(e, { emit: l }) {
  const n = e, t = cn(), a = cl(), i = { displayValue: n.displayValue, empty: n.empty, error: n.error }, u = p(() => _l(n.field, n.valueColor, { empty: n.empty, error: n.error })), o = p(() => Ol({ color: n.color, error: n.error, theme: a, underlineColor: n.underlineColor, underlineStyle: n.underlineStyle, underlineWidth: n.underlineWidth, underlined: n.underlined })), r = p(() => ((c) => {
    const { underlineWidth: f } = c;
    return { borderBottom: `${f || "0px"} solid transparent` };
  })({ underlineWidth: n.underlineWidth })), v = (c, f = !1) => ((m) => {
    const { inner: g = !1, position: b } = m;
    return { [`${ae}--display-icon`]: !g, [`${ae}--display-${b}-icon`]: !g, [`${ae}--display-${b}-inner-icon`]: g, "me-1": b === "prepend", "ms-1": b === "append" };
  })({ inner: f, position: c });
  function y() {
    l("toggleField");
  }
  return (c, f) => (U(), le("div", Cr, [c.displayPrependIcon || s(t)["display.prepend"] ? (U(), le("div", { key: 0, class: J(v("prepend")), style: ge(s(r)) }, [s(t)["display.prepend"] ? we(c.$slots, "display.prepend", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayPrependIconColor, icon: c.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0), Se("div", { class: J(["d-inline-flex", s(u)]), style: ge(s(o)), onClick: y }, [c.displayPrependInnerIcon || s(t)["display.prependInner"] ? (U(), le("div", { key: 0, class: J(v("prepend", !0)) }, [s(t)["display.prependInner"] ? we(c.$slots, "display.prependInner", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayPrependInnerIconColor, icon: c.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0), mo(" " + ul(c.displayValue) + " ", 1), c.displayAppendInnerIcon || s(t)["display.appendInner"] ? (U(), le("div", { key: 1, class: J(v("append", !0)) }, [s(t)["display.appendInner"] ? we(c.$slots, "display.appendInner", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayAppendInnerIconColor, icon: c.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : pe("", !0)], 6), c.displayAppendIcon || s(t)["display.append"] ? (U(), le("div", { key: 1, class: J(v("append")), style: ge(s(r)) }, [s(t)["display.append"] ? we(c.$slots, "display.append", ye(X({ key: 0 }, i))) : (U(), he(ce, { key: 1, color: c.displayAppendIconColor, icon: c.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : pe("", !0)]));
} }), Jn = Me({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideSaveIcon: { type: Boolean }, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, cancelIcon: {}, loadingIcon: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: l }) {
  const n = e, t = dn(), a = ve(Symbol.for("vuetify:icons")), i = p(() => n.error), u = p(() => ({ [`${ae}--save-fields-container`]: !0 })), o = p(() => n.loading), r = Te({ ...t, ...n }), v = p(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "fa-spin" : (a == null ? void 0 : a.defaultSet) === "mdi" ? "mdi-spin" : ""), y = p(() => ((h) => {
    const { cancelButtonVariant: x } = h;
    return { "me-1": x === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: r.cancelButtonVariant })), c = p(() => ze({ icon: n.cancelIcon, iconOptions: a, name: "false" })), f = p(() => ze({ icon: n.loadingIcon, iconOptions: a, name: "loading" })), m = p(() => ze({ icon: n.saveIcon, iconOptions: a, name: "save" }));
  function g() {
    l("close");
  }
  function b() {
    l("save");
  }
  return (h, x) => (U(), le("div", X({ class: s(u) }, h.$attrs), [s(r).hideSaveIcon ? pe("", !0) : (U(), he(Zt, { key: 0, class: "ms-1", color: s(r).saveButtonColor, disabled: s(i), icon: "", size: s(r).saveButtonSize, title: s(o) ? "Loading" : s(r).saveButtonTitle, variant: s(r).saveButtonVariant, onClick: b }, { default: re(() => [s(o) ? (U(), he(ce, { key: 1, class: J(s(v)), color: s(r).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (U(), he(ce, { key: 0, color: s(i) ? "error" : s(r).saveIconColor, icon: s(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), d(Zt, { class: J(s(y)), color: s(r).cancelButtonColor, icon: "", size: s(r).cancelButtonSize, title: s(r).cancelButtonTitle, variant: s(r).cancelButtonVariant, onClick: g }, { default: re(() => [s(r).hideSaveIcon && s(o) ? (U(), he(ce, { key: 0, class: J(s(v)), color: s(r).loadingIconColor, icon: s(f) }, null, 8, ["class", "color", "icon"])) : (U(), he(ce, { key: 1, class: "text-default", color: s(r).cancelIconColor, icon: s(c) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"])], 16));
} }), Vt = (e) => {
  const { required: l, rules: n } = e;
  let { value: t } = e;
  t = s(t);
  const a = [];
  let i = !1;
  if (l && !t)
    return a.push("Field is required."), { errors: !0, results: a };
  if (n) {
    for (const u of n) {
      const o = (typeof u == "function" ? u : () => u)(t);
      o !== !0 && (typeof o == "string" ? a.push(o) : console.warn(`${o} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, Pn = (e) => {
  const { attrs: l, closeSiblings: n, fieldOnly: t, props: a, showField: i, timeOpened: u } = e;
  let o = u;
  return n && !t && (o = /* @__PURE__ */ new Date()), { settings: { ...l, ...a }, showField: !s(i), timeOpened: o };
}, il = (e) => {
  const { length: l = 0 } = e;
  let { suffix: n, text: t } = e;
  return t = t.toString(), n = n || "...", t.length > l ? `${t.substring(0, l)}${n}` : t;
}, $n = ["error", "update", "update:closeSiblingFields", "update:model-value"], Sr = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], qn = (e) => {
  let l = e;
  return l = Object.entries(l).filter(([n]) => !Sr.includes(n)), Object.fromEntries(l);
}, Br = { class: "v-selection-control__wrapper" }, xr = Me({ __name: "VInlineCheckbox", props: _e(Sn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ta }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons")), o = cl();
  let r = Te({ ...a, ...n });
  const v = p(() => n.loading), y = R(!1), c = R(!1), f = R(null), m = p(() => qn(r)), g = p(() => ({ ...kn, ...n.cardProps }));
  Y(() => v.value, (I, V) => {
    !I && V && c.value && j();
  });
  const b = p(() => ze({ icon: n.trueIcon, iconOptions: u, name: "checkboxFalse" })), h = p(() => ze({ icon: n.iconTrue, iconOptions: u, name: "checkboxTrue" })), x = p(() => t.value == r.trueValue), O = p(() => ka({ modelValue: t, trueValue: r.trueValue })), S = p(() => Vn({ density: r.density, disabled: r.disabled, field: "v-checkbox", loading: v.value, loadingWait: r.loadingWait, tableField: r.tableField })), T = p(() => An({ density: r.density, field: "v-checkbox" })), N = xa({ density: r.density }), P = p(() => _n({ active: c.value, name: "checkbox" })), k = p(() => _l("checkbox", r.valueColor, { error: y })), B = p(() => On({ name: "checkbox", showField: c.value })), C = p(() => ({})), $ = p(() => Ol({ color: r.color, error: y, theme: o, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), w = p(() => _.value);
  function E() {
    y.value = !1, j();
  }
  const _ = R(), F = R(null), z = R("body"), L = Ea();
  function j() {
    var V, W;
    if (r.disabled || r.loadingWait && v.value)
      return;
    _.value = fn({ cardMinWidth: (V = r.cardProps) == null ? void 0 : V.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (W = r.cardProps) == null ? void 0 : W.width, field: F.value, name: "checkbox" });
    const I = Pn({ attrs: a, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: n, showField: c, timeOpened: f.value });
    r = { ...r, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, A !== null && r.closeSiblings && c.value && !r.fieldOnly && A.emit(I.timeOpened);
  }
  function M(I) {
    t.value = I, l("update", I), r.loadingWait || j();
  }
  let A, D;
  function q(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && j();
  }
  return Y(() => L, () => {
    var I, V;
    _.value = fn({ cardMinWidth: (I = r.cardProps) == null ? void 0 : I.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (V = r.cardProps) == null ? void 0 : V.width, field: F.value, name: "checkbox" });
  }, { deep: !0 }), r.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    A = I(xn), D = A.on(q);
  }), Bn(() => {
    D !== void 0 && A.off(q);
  }), (I, V) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: F, class: J(s(S)), style: ge(s(C)) }, [!s(c) && !s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 0, class: J(s(T)) }, [Se("div", { class: J(s(N)) }, [Se("div", Br, [I.icons ? (U(), le("div", { key: 0, class: J(s(k)), style: ge(s($)), onClick: j }, [d(s(Ba), { modelValue: s(O), "onUpdate:modelValue": V[0] || (V[0] = (W) => mn(O) ? O.value = W : null), "icon-false": s(r).iconFalse, "icon-false-color": s(r).iconFalseColor, "icon-false-title": s(r).iconFalseTitle, "icon-true": s(r).iconTrue, "icon-true-color": s(r).iconTrueColor, "icon-true-title": s(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (U(), le("div", { key: 1, class: J(["d-inline-flex align-center justify-center", s(k)]), style: ge(s($)), onClick: j }, ul(s(x)), 7))])], 2)], 2)) : pe("", !0), s(c) || s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 1, class: J(s(P)) }, [(U(), he(sn, { disabled: !s(r).cardField, to: s(z) }, [d(yi, X(s(m), { color: s(r).color, density: s(r).density, disabled: s(v), error: s(y), "false-icon": s(b), "false-value": s(r).falseValue, "hide-details": s(r).hideDetails, label: s(r).label, "model-value": s(O), "true-icon": s(h), "true-value": s(r).trueValue, "onUpdate:modelValue": M }), qe({ _: 2 }, [He(s(i), (W, H) => ({ name: H, fn: re((K) => [we(I.$slots, H, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(Jn), { "cancel-button-color": s(r).cancelButtonColor, "cancel-button-size": s(r).cancelButtonSize, "cancel-button-title": s(r).cancelButtonTitle, "cancel-button-variant": s(r).cancelButtonVariant, "cancel-icon": s(r).cancelIcon, "cancel-icon-color": s(r).cancelIconColor, error: s(y), "field-only": s(r).fieldOnly, "hide-save-icon": !0, loading: s(v), "loading-icon": s(r).loadingIcon, "loading-icon-color": s(r).loadingIconColor, "save-button-color": s(r).saveButtonColor, "save-button-size": s(r).saveButtonSize, "save-button-title": s(r).saveButtonTitle, "save-button-variant": s(r).saveButtonVariant, "save-icon": s(r).saveIcon, "save-icon-color": s(r).saveIconColor, onClose: E, onSave: M }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(r).cardField ? (U(), le("div", { key: 2, class: J(s(B)), style: ge(s(w)) }, [d(Fn, ye(be(s(g))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: z }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), kr = Me({ __name: "VInlineCustomField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ho }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons"));
  let o = Te({ ...a, ...n });
  const r = p(() => n.loading), v = R(!1), y = R(!1), c = R(!1), f = R(null);
  let m = t.value;
  Y(() => r.value, (D, q) => {
    !D && q && c.value && _();
  });
  const g = p(() => t.value ? (v.value = !1, o.truncateLength ? il({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (v.value = !0, o.emptyText)), b = p(() => ({ ...o, loading: r.value, modelValue: t.value, originalValue: m })), h = p(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: g.value, empty: v.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), x = p(() => ({ ...kn, ...n.cardProps })), O = p(() => Vn({ density: o.density, disabled: o.disabled, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), S = p(() => An({ density: o.density, field: "v-text-field" })), T = wt({ density: o.density, variant: o.variant }), N = p(() => _n({ active: c.value, name: "text-field" })), P = p(() => On({ name: "custom-field", showField: c.value })), k = p(() => ({})), B = p(() => $.value);
  function C() {
    y.value = !1, t.value = m, _();
  }
  const $ = R(), w = R(null), E = R("body");
  function _() {
    var q, I;
    if (o.disabled || o.loadingWait && r.value)
      return;
    $.value = fn({ cardMinWidth: (q = o.cardProps) == null ? void 0 : q.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (I = o.cardProps) == null ? void 0 : I.width, field: w.value });
    const D = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...D.settings }, c.value = D.showField, f.value = D.timeOpened, j !== null && o.closeSiblings && c.value && !o.fieldOnly && j.emit(D.timeOpened);
  }
  const F = R();
  function z() {
    const D = Vt({ required: o.required, rules: o.rules, value: t });
    return y.value = D.errors, F.value = D.results, D.results;
  }
  function L() {
    y.value ? y.value = !0 : (m = t.value, l("update", t.value), o.loadingWait || _());
  }
  let j, M;
  function A(D) {
    l("update:closeSiblingFields", f), c.value && f.value !== D && C();
  }
  return Y(() => c.value, () => {
    c.value && z();
  }), Y(() => t.value, () => {
    c.value && z();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: D }) => {
    j = D(xn), M = j.on(A);
  }), Bn(() => {
    M !== void 0 && j.off(A);
  }), (D, q) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: w, class: J(s(O)), style: ge(s(k)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(S)) }, [Se("div", { class: J(s(T)) }, [d(s(Ft), X(s(h), { onToggleField: _ }), qe({ _: 2 }, [He(s(i), (I, V) => ({ name: V, fn: re((W) => [we(D.$slots, V, ye(be({ ...W })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(["d-flex align-center py-2", s(N)]) }, [(U(), he(sn, { disabled: !s(o).cardField, to: s(E) }, [we(D.$slots, "default", ye(be(s(b)))), d(s(Jn), { modelValue: t.value, "onUpdate:modelValue": q[0] || (q[0] = (I) => t.value = I), "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, required: s(o).required, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: C, onSave: L }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(P)), style: ge(s(B)) }, [d(Fn, ye(be(s(x))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: E }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), wr = Me({ __name: "VInlineSelect", props: _e(Sn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...za }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons"));
  let o = Te({ ...a, ...n });
  const r = p(() => n.loading), v = R(!1), y = R(!1), c = R(), f = R(!1), m = R(null);
  let g = t.value;
  Y(() => r.value, (V, W) => {
    !V && W && f.value && z();
  });
  const b = p(() => ze({ icon: n.clearIcon, iconOptions: u, name: "clear" })), h = p(() => t.value && t.value[o.itemTitle] ? (v.value = !1, t.value[o.itemTitle]) : (t.value = "", v.value = !0, o.emptyText)), x = p(() => qn(o)), O = p(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: h.value, empty: v.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), S = p(() => ({ ...kn, ...n.cardProps }));
  Ye(() => {
    c.value = o.items || [];
  });
  const T = p(() => Vn({ density: o.density, disabled: o.disabled, field: "v-select", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), N = p(() => An({ density: o.density, field: "v-select" })), P = wt({ density: o.density, variant: o.variant }), k = p(() => _n({ active: f.value, name: "select" })), B = p(() => On({ name: "select", showField: f.value })), C = p(() => ({})), $ = p(() => E.value);
  function w() {
    y.value = !1, t.value = g, z();
  }
  const E = R(), _ = R(null), F = R("body");
  function z() {
    var W, H;
    if (o.disabled || o.loadingWait && r.value)
      return;
    E.value = fn({ cardMinWidth: (W = o.cardProps) == null ? void 0 : W.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (H = o.cardProps) == null ? void 0 : H.width, field: _.value });
    const V = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: f, timeOpened: m.value });
    o = { ...o, ...V.settings }, f.value = V.showField, m.value = V.timeOpened, D !== null && o.closeSiblings && f.value && !o.fieldOnly && D.emit(V.timeOpened);
  }
  const L = R(), j = p(() => L.value);
  function M() {
    const V = Vt({ required: o.required, rules: o.rules, value: t });
    return y.value = V.errors, L.value = V.results, V.results;
  }
  function A() {
    g = t.value, l("update", t.value), o.loadingWait || z();
  }
  let D, q;
  function I(V) {
    l("update:closeSiblingFields", m), f.value && m.value !== V && w();
  }
  return Y(() => f.value, () => {
    f.value && M();
  }), Y(() => t.value, () => {
    f.value && M();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: V }) => {
    D = V(xn), q = D.on(I);
  }), Bn(() => {
    q !== void 0 && D.off(I);
  }), (V, W) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: _, class: J(s(T)), style: ge(s(C)) }, [!s(f) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(N)) }, [Se("div", { class: J(s(P)) }, [d(s(Ft), X(s(O), { onToggleField: z }), qe({ _: 2 }, [He(s(i), (H, K) => ({ name: K, fn: re((oe) => [we(V.$slots, K, ye(be({ ...oe })), void 0, !0)]) }))]), 1040)], 2)], 2)) : pe("", !0), s(f) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(k)) }, [(U(), he(sn, { disabled: !s(o).cardField, to: s(F) }, [d(ur, X(s(x), { modelValue: t.value, "onUpdate:modelValue": W[0] || (W[0] = (H) => t.value = H), autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(b), clearable: s(o).clearable, color: s(o).color, density: s(o).density, disabled: s(r), error: s(y), "error-messages": s(j), "hide-details": s(o).hideDetails, "hide-selected": s(o).hideSelected, "item-title": s(o).itemTitle, "item-value": s(o).itemValue, items: s(c), label: s(o).label, loading: s(r), menu: s(o).menu && !s(o).fieldOnly && s(f), variant: s(o).variant, width: "100%", onKeyup: ft(w, ["esc"]) }), qe({ _: 2 }, [He(s(i), (H, K) => ({ name: K, fn: re((oe) => [we(V.$slots, K, ye(be({ ...oe })), void 0, !0)]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(Jn), { "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: w, onSave: A }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(B)), style: ge(s($)) }, [d(Fn, ye(be(s(S))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: F }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), Fr = { class: "v-selection-control__wrapper" }, Le = { VInlineCheckbox: xr, VInlineCustomField: kr, VInlineSelect: ((e, l) => {
  const n = e.__vccOpts || e;
  for (const [t, a] of l)
    n[t] = a;
  return n;
})(wr, [["__scopeId", "data-v-0d72d990"]]), VInlineSwitch: Me({ __name: "VInlineSwitch", props: _e(Sn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Da }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons")), o = cl();
  let r = Te({ ...a, ...n });
  const v = p(() => n.loading), y = R(!1), c = R(!1), f = R(null), m = p(() => qn(r)), g = p(() => ({ ...kn, ...n.cardProps }));
  Y(() => v.value, (A, D) => {
    !A && D && c.value && F();
  });
  const b = p(() => ze({ icon: r.cancelIcon, iconOptions: u, name: "false" })), h = p(() => t.value == r.trueValue), x = p(() => ka({ modelValue: t, trueValue: r.trueValue })), O = p(() => Vn({ density: r.density, disabled: r.disabled, field: "v-switch", loading: v.value, loadingWait: r.loadingWait, tableField: r.tableField })), S = p(() => An({ density: r.density, field: "v-switch" })), T = xa({ density: r.density }), N = p(() => _n({ active: c.value, name: "switch" })), P = p(() => _l("switch", r.valueColor, { error: y })), k = p(() => On({ name: "switch", showField: c.value })), B = p(() => ({})), C = p(() => Ol({ color: r.color, error: y, theme: o, underlineColor: r.underlineColor, underlineStyle: r.underlineStyle, underlineWidth: r.underlineWidth, underlined: r.underlined })), $ = p(() => w.value), w = R(), E = R(null), _ = R("body");
  function F() {
    var D, q;
    if (r.disabled || r.loadingWait && v.value)
      return;
    w.value = fn({ cardMinWidth: (D = r.cardProps) == null ? void 0 : D.minWidth, cardOffsetX: r.cardOffsetX, cardOffsetY: r.cardOffsetY, cardWidth: (q = r.cardProps) == null ? void 0 : q.width, field: E.value });
    const A = Pn({ attrs: a, closeSiblings: r.closeSiblings, fieldOnly: r.fieldOnly, props: n, showField: c.value, timeOpened: f.value });
    r = { ...r, ...A.settings }, c.value = A.showField, f.value = A.timeOpened, L !== null && r.closeSiblings && c.value && !r.fieldOnly && L.emit(A.timeOpened);
  }
  function z(A) {
    t.value = A, l("update", A), r.loadingWait || F();
  }
  let L, j;
  function M(A) {
    l("update:closeSiblingFields", f), c.value && f.value !== A && F();
  }
  return r.closeSiblings && import("@vueuse/core").then(({ useEventBus: A }) => {
    L = A(xn), j = L.on(M);
  }), Bn(() => {
    j !== void 0 && L.off(M);
  }), (A, D) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(O)), style: ge(s(B)) }, [!s(c) && !s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 0, class: J(s(S)) }, [Se("div", { class: J(s(T)) }, [Se("div", Fr, [A.icons ? (U(), le("div", { key: 0, class: J(s(P)), style: ge(s(C)), onClick: F }, [d(s(Ba), { modelValue: s(x), "onUpdate:modelValue": D[0] || (D[0] = (q) => mn(x) ? x.value = q : null), "icon-false": s(r).iconFalse, "icon-false-color": s(r).iconFalseColor, "icon-false-title": s(r).iconFalseTitle, "icon-true": s(r).iconTrue, "icon-true-color": s(r).iconTrueColor, "icon-true-title": s(r).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (U(), le("div", { key: 1, class: J(["d-inline-flex align-center justify-center", s(P)]), style: ge(s(C)), onClick: F }, ul(s(h)), 7))])], 2)], 2)) : pe("", !0), s(c) || s(r).fieldOnly || s(r).cardField ? (U(), le("div", { key: 1, class: J(s(N)) }, [(U(), he(sn, { disabled: !s(r).cardField, to: s(_) }, [d(gr, X(s(m), { color: s(r).color, density: s(r).density, disabled: s(v), error: s(y), "false-icon": s(r).falseIcon, "false-value": s(r).falseValue, "hide-details": s(r).hideDetails, label: s(r).label, loading: s(v), "model-value": s(x), "true-value": s(r).trueValue, "onUpdate:modelValue": z }), qe({ _: 2 }, [He(s(i), (q, I) => ({ name: I, fn: re((V) => [we(A.$slots, I, ye(be({ ...V })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [!s(r).fieldOnly || s(r).cardField ? (U(), he(Zt, { key: 0, class: "ms-3", color: s(r).cancelButtonColor, icon: "", size: s(r).cancelButtonSize, title: s(r).cancelButtonTitle, variant: s(r).cancelButtonVariant, onClick: F }, { default: re(() => [d(ce, { color: s(r).cancelIconColor, icon: s(b) }, null, 8, ["color", "icon"])]), _: 1 }, 8, ["color", "size", "title", "variant"])) : pe("", !0)]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(r).cardField ? (U(), le("div", { key: 2, class: J(s(k)), style: ge(s($)) }, [d(Fn, ye(be(s(g))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextField: Me({ __name: "VInlineTextField", props: _e(Sn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ho }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons"));
  let o = Te({ ...a, ...n });
  const r = p(() => n.loading), v = R(!1), y = R(!1), c = R(!1), f = R(null);
  let m = t.value;
  Y(() => r.value, (I, V) => {
    !I && V && c.value && F();
  });
  const g = p(() => ze({ icon: n.clearIcon, iconOptions: u, name: "clear" })), b = p(() => t.value ? (v.value = !1, o.truncateLength ? il({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (v.value = !0, o.emptyText)), h = p(() => qn(o)), x = p(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: b.value, empty: v.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), O = p(() => ({ ...kn, ...n.cardProps })), S = p(() => Vn({ density: o.density, disabled: o.disabled, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = p(() => An({ density: o.density, field: "v-text-field" })), N = wt({ density: o.density, variant: o.variant }), P = p(() => _n({ active: c.value, name: "text-field" })), k = p(() => On({ name: "text-field", showField: c.value })), B = p(() => ({})), C = p(() => w.value);
  function $() {
    y.value = !1, t.value = m, F();
  }
  const w = R(), E = R(null), _ = R("body");
  function F() {
    var V, W;
    if (o.disabled || o.loadingWait && r.value)
      return;
    w.value = fn({ cardMinWidth: (V = o.cardProps) == null ? void 0 : V.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (W = o.cardProps) == null ? void 0 : W.width, field: E.value });
    const I = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, A !== null && o.closeSiblings && c.value && !o.fieldOnly && A.emit(I.timeOpened);
  }
  const z = R(), L = p(() => z.value);
  function j() {
    const I = Vt({ required: o.required, rules: o.rules, value: t });
    return y.value = I.errors, z.value = I.results, I.results;
  }
  function M() {
    y.value ? y.value = !0 : (m = t.value, l("update", t.value), o.loadingWait || F());
  }
  let A, D;
  function q(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && $();
  }
  return Y(() => c.value, () => {
    c.value && j();
  }), Y(() => t.value, () => {
    c.value && j();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    A = I(xn), D = A.on(q);
  }), Bn(() => {
    D !== void 0 && A.off(q);
  }), (I, V) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(S)), style: ge(s(B)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(T)) }, [Se("div", { class: J(s(N)) }, [d(s(Ft), X(s(x), { onToggleField: F }), qe({ _: 2 }, [He(s(i), (W, H) => ({ name: H, fn: re((K) => [we(I.$slots, H, ye(be({ ...K })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(P)) }, [(U(), he(sn, { disabled: !s(o).cardField, to: s(_) }, [d(al, X(s(h), { modelValue: t.value, "onUpdate:modelValue": V[1] || (V[1] = (W) => t.value = W), autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(g), disabled: s(r), error: s(y), "error-messages": s(L), label: s(o).label, loading: s(r), width: "100%", onKeyup: [ft(M, ["enter"]), ft($, ["esc"])] }), qe({ _: 2 }, [He(s(i), (W, H) => ({ name: H, fn: re((K) => [we(I.$slots, H, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(Jn), { modelValue: t.value, "onUpdate:modelValue": V[0] || (V[0] = (W) => t.value = W), "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, required: s(o).required, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: $, onSave: M }, null, 8, ["modelValue", "cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "required", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "disabled", "error", "error-messages", "label", "loading", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(k)), style: ge(s(C)) }, [d(Fn, ye(be(s(O))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }), VInlineTextarea: Me({ __name: "VInlineTextarea", props: _e(Sn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...La }), { modelValue: {} }), emits: _e([...$n], ["update:modelValue"]), setup(e, { emit: l }) {
  const n = e, t = un(e, "modelValue"), a = dn(), i = cn(), u = ve(Symbol.for("vuetify:icons"));
  let o = Te({ ...a, ...n });
  const r = p(() => n.loading), v = R(!1), y = R(!1), c = R(!1), f = R(null);
  let m = t.value;
  Y(() => r.value, (I, V) => {
    !I && V && c.value && F();
  });
  const g = p(() => ze({ icon: n.clearIcon, iconOptions: u, name: "clear" })), b = p(() => t.value ? (v.value = !1, o.truncateLength ? il({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (v.value = !0, o.emptyText)), h = p(() => qn(o)), x = p(() => ({ color: o.color, displayAppendIcon: n.displayAppendIcon, displayAppendIconColor: n.displayAppendIconColor, displayAppendIconSize: n.displayAppendIconSize, displayAppendInnerIcon: n.displayAppendInnerIcon, displayAppendInnerIconColor: n.displayAppendInnerIconColor, displayAppendInnerIconSize: n.displayAppendInnerIconSize, displayPrependIcon: n.displayPrependIcon, displayPrependIconColor: n.displayPrependIconColor, displayPrependIconSize: n.displayPrependIconSize, displayPrependInnerIcon: n.displayPrependInnerIcon, displayPrependInnerIconColor: n.displayPrependInnerIconColor, displayPrependInnerIconSize: n.displayPrependInnerIconSize, displayValue: b.value, empty: v.value, error: y.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), O = p(() => ({ ...kn, ...n.cardProps })), S = p(() => Vn({ density: o.density, disabled: o.disabled, field: "v-textarea", iconSet: u == null ? void 0 : u.defaultSet, loading: r.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), T = p(() => An({ density: o.density, field: "v-textarea" })), N = wt({ density: o.density, variant: o.variant }), P = p(() => _n({ active: c.value, name: "textarea" })), k = p(() => On({ name: "textarea", showField: c.value })), B = p(() => ({})), C = p(() => w.value);
  function $() {
    y.value = !1, t.value = m, F();
  }
  const w = R(), E = R(null), _ = R("body");
  function F() {
    var V, W;
    if (o.disabled || o.loadingWait && r.value)
      return;
    w.value = fn({ cardMinWidth: (V = o.cardProps) == null ? void 0 : V.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (W = o.cardProps) == null ? void 0 : W.width, field: E.value });
    const I = Pn({ attrs: a, closeSiblings: o.closeSiblings, fieldOnly: o.fieldOnly, props: n, showField: c, timeOpened: f.value });
    o = { ...o, ...I.settings }, c.value = I.showField, f.value = I.timeOpened, A !== null && o.closeSiblings && c.value && !o.fieldOnly && A.emit(I.timeOpened);
  }
  const z = R(), L = p(() => z.value);
  function j() {
    const I = Vt({ required: o.required, rules: o.rules, value: t });
    return y.value = I.errors, z.value = I.results, I.results;
  }
  function M() {
    m = t.value, l("update", t.value), o.loadingWait || F();
  }
  let A, D;
  function q(I) {
    l("update:closeSiblingFields", f), c.value && f.value !== I && $();
  }
  return Y(() => c.value, () => {
    c.value && j();
  }), Y(() => t.value, () => {
    c.value && j();
  }), o.closeSiblings && import("@vueuse/core").then(({ useEventBus: I }) => {
    A = I(xn), D = A.on(q);
  }), Bn(() => {
    D !== void 0 && A.off(q);
  }), (I, V) => (U(), le("div", { ref_key: "inlineFieldsContainer", ref: E, class: J(s(S)), style: ge(s(B)) }, [!s(c) && !s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 0, class: J(s(T)) }, [Se("div", { class: J(s(N)) }, [d(s(Ft), X(s(x), { onToggleField: F }), qe({ _: 2 }, [He(s(i), (W, H) => ({ name: H, fn: re((K) => [we(I.$slots, H, ye(be({ ...K })))]) }))]), 1040)], 2)], 2)) : pe("", !0), s(c) || s(o).fieldOnly || s(o).cardField ? (U(), le("div", { key: 1, class: J(s(P)) }, [(U(), he(sn, { disabled: !s(o).cardField, to: s(_) }, [d(br, X(s(h), { modelValue: t.value, "onUpdate:modelValue": V[0] || (V[0] = (W) => t.value = W), "auto-grow": s(o).autoGrow, autofocus: !s(o).fieldOnly || s(o).autofocus, "clear-icon": s(g), color: s(o).color, density: s(o).density, disabled: s(r), error: s(y), "error-messages": s(L), "hide-details": s(o).hideDetails, label: s(o).label, loading: s(r), rows: s(o).rows, variant: s(o).variant, width: "100%", onKeyup: ft($, ["esc"]) }), qe({ _: 2 }, [He(s(i), (W, H) => ({ name: H, fn: re((K) => [we(I.$slots, H, ye(be({ ...K })))]) })), s(i).append ? void 0 : { name: "append", fn: re(() => [d(s(Jn), { "cancel-button-color": s(o).cancelButtonColor, "cancel-button-size": s(o).cancelButtonSize, "cancel-button-title": s(o).cancelButtonTitle, "cancel-button-variant": s(o).cancelButtonVariant, "cancel-icon": s(o).cancelIcon, "cancel-icon-color": s(o).cancelIconColor, error: s(y), "field-only": s(o).fieldOnly, "hide-save-icon": s(o).hideSaveIcon, loading: s(r), "loading-icon": s(o).loadingIcon, "loading-icon-color": s(o).loadingIconColor, "save-button-color": s(o).saveButtonColor, "save-button-size": s(o).saveButtonSize, "save-button-title": s(o).saveButtonTitle, "save-button-variant": s(o).saveButtonVariant, "save-icon": s(o).saveIcon, "save-icon-color": s(o).saveIconColor, onClose: $, onSave: M }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant", "onKeyup"])], 8, ["disabled", "to"]))], 2)) : pe("", !0), s(o).cardField ? (U(), le("div", { key: 2, class: J(s(k)), style: ge(s(C)) }, [d(Fn, ye(be(s(O))), { default: re(() => [d(vn, null, { default: re(() => [Se("div", { ref_key: "cardFieldRef", ref: _ }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : pe("", !0)], 6));
} }) }, Vr = (e) => {
  for (const l in Le) {
    const n = Le[l];
    e.component(n.name, n);
  }
};
for (const e in Le)
  Le[e].install = Vr;
const Pr = Le.VInlineCheckbox, $r = Le.VInlineCustomField, Er = Le.VInlineSelect, Tr = Le.VInlineSwitch, zr = Le.VInlineTextField, Dr = Le.VInlineTextarea, Lr = { VInlineFields: Le };
export {
  Pr as VInlineCheckbox,
  $r as VInlineCustomField,
  Er as VInlineSelect,
  Tr as VInlineSwitch,
  zr as VInlineTextField,
  Dr as VInlineTextarea,
  Lr as default
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode('.v-img{--v-theme-overlay-multiplier: 3;z-index:0}.v-img--booting .v-responsive__sizer{transition:none}.v-img__img,.v-img__picture,.v-img__gradient,.v-img__placeholder,.v-img__error{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-img__img--preload{filter:blur(4px)}.v-img__img--contain{object-fit:contain}.v-img__img--cover{object-fit:cover}.v-img__gradient{background-repeat:no-repeat}.v-responsive{display:flex;flex:1 0 auto;max-height:100%;max-width:100%;overflow:hidden;position:relative}.v-responsive--inline{display:inline-flex;flex:0 0 auto}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-responsive__sizer~.v-responsive__content{margin-inline-start:-100%}.v-responsive__sizer{flex:1 0 0px;transition:padding-bottom .2s cubic-bezier(.4,0,.2,1);pointer-events:none}.v-btn{align-items:center;border-radius:4px;display:inline-grid;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;font-weight:500;justify-content:center;letter-spacing:.0892857143em;line-height:normal;max-width:100%;outline:none;position:relative;text-decoration:none;text-indent:.0892857143em;text-transform:uppercase;transition-property:box-shadow,transform,opacity,background;transition-duration:.28s;transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-user-select:none;user-select:none;vertical-align:middle;flex-shrink:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0}.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 20px;font-size:var(--v-btn-size);min-width:36px;padding:0 8px}.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 28px;font-size:var(--v-btn-size);min-width:50px;padding:0 12px}.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 36px;font-size:var(--v-btn-size);min-width:64px;padding:0 16px}.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 44px;font-size:var(--v-btn-size);min-width:78px;padding:0 20px}.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 52px;font-size:var(--v-btn-size);min-width:92px;padding:0 24px}.v-btn.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -8px)}.v-btn.v-btn--density-compact{height:calc(var(--v-btn-height) + -12px)}.v-btn--border{border-width:thin;box-shadow:none}.v-btn--absolute{position:absolute}.v-btn--fixed{position:fixed}.v-btn:hover>.v-btn__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-btn:focus-visible>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn:focus>.v-btn__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-btn--active>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]>.v-btn__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-btn--active:hover>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:hover>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-btn--active:focus-visible>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-btn--active:focus>.v-btn__overlay,.v-btn[aria-haspopup=menu][aria-expanded=true]:focus>.v-btn__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-btn--variant-plain,.v-btn--variant-outlined,.v-btn--variant-text,.v-btn--variant-tonal{background:transparent;color:inherit}.v-btn--variant-plain{opacity:.62}.v-btn--variant-plain:focus,.v-btn--variant-plain:hover{opacity:1}.v-btn--variant-plain .v-btn__overlay{display:none}.v-btn--variant-elevated,.v-btn--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn--variant-elevated{box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--variant-outlined{border:thin solid currentColor}.v-btn--variant-text .v-btn__overlay{background:currentColor}.v-btn--variant-tonal .v-btn__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-btn:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn:focus-visible:after{opacity:calc(.25 * var(--v-theme-overlay-multiplier))}}.v-btn--icon{border-radius:50%;min-width:0;padding:0}.v-btn--icon.v-btn--size-default{--v-btn-size: 1rem}.v-btn--icon.v-btn--density-default{width:calc(var(--v-btn-height) + 12px);height:calc(var(--v-btn-height) + 12px)}.v-btn--icon.v-btn--density-comfortable{width:calc(var(--v-btn-height) + 0px);height:calc(var(--v-btn-height) + 0px)}.v-btn--icon.v-btn--density-compact{width:calc(var(--v-btn-height) + -8px);height:calc(var(--v-btn-height) + -8px)}.v-btn--elevated:hover,.v-btn--elevated:focus{box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--elevated:active{box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-btn--flat{box-shadow:none}.v-btn--block{display:flex;flex:1 0 auto;min-width:100%}.v-btn--disabled{pointer-events:none;opacity:.26}.v-btn--disabled.v-btn--variant-elevated,.v-btn--disabled.v-btn--variant-flat{box-shadow:none;opacity:1;color:rgba(var(--v-theme-on-surface),.26);background:rgb(var(--v-theme-surface))}.v-btn--disabled.v-btn--variant-elevated .v-btn__overlay,.v-btn--disabled.v-btn--variant-flat .v-btn__overlay{opacity:.4615384615}.v-btn--loading{pointer-events:none}.v-btn--loading .v-btn__content,.v-btn--loading .v-btn__prepend,.v-btn--loading .v-btn__append{opacity:0}.v-btn--stacked{grid-template-areas:"prepend" "content" "append";grid-template-columns:auto;grid-template-rows:max-content max-content max-content;justify-items:center;align-content:center}.v-btn--stacked .v-btn__content{flex-direction:column;line-height:1.25}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--start,.v-btn--stacked .v-btn__content>.v-icon--end{margin-inline-start:0;margin-inline-end:0}.v-btn--stacked .v-btn__prepend,.v-btn--stacked .v-btn__content>.v-icon--start{margin-bottom:4px}.v-btn--stacked .v-btn__append,.v-btn--stacked .v-btn__content>.v-icon--end{margin-top:4px}.v-btn--stacked.v-btn--size-x-small{--v-btn-size: .625rem;--v-btn-height: 56px;font-size:var(--v-btn-size);min-width:56px;padding:0 12px}.v-btn--stacked.v-btn--size-small{--v-btn-size: .75rem;--v-btn-height: 64px;font-size:var(--v-btn-size);min-width:64px;padding:0 14px}.v-btn--stacked.v-btn--size-default{--v-btn-size: .875rem;--v-btn-height: 72px;font-size:var(--v-btn-size);min-width:72px;padding:0 16px}.v-btn--stacked.v-btn--size-large{--v-btn-size: 1rem;--v-btn-height: 80px;font-size:var(--v-btn-size);min-width:80px;padding:0 18px}.v-btn--stacked.v-btn--size-x-large{--v-btn-size: 1.125rem;--v-btn-height: 88px;font-size:var(--v-btn-size);min-width:88px;padding:0 20px}.v-btn--stacked.v-btn--density-default{height:calc(var(--v-btn-height) + 0px)}.v-btn--stacked.v-btn--density-comfortable{height:calc(var(--v-btn-height) + -16px)}.v-btn--stacked.v-btn--density-compact{height:calc(var(--v-btn-height) + -24px)}.v-btn--rounded{border-radius:24px}.v-btn .v-icon{--v-icon-size-multiplier: .8571428571}.v-btn--icon .v-icon{--v-icon-size-multiplier: 1}.v-btn--stacked .v-icon{--v-icon-size-multiplier: 1.1428571429}.v-btn__loader{align-items:center;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%}.v-btn__content,.v-btn__prepend,.v-btn__append{align-items:center;display:flex;transition:transform,opacity .2s cubic-bezier(.4,0,.2,1)}.v-btn__prepend{grid-area:prepend;margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__append{grid-area:append;margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn__content{grid-area:content;justify-content:center;white-space:nowrap}.v-btn__content>.v-icon--start{margin-inline-start:calc(var(--v-btn-height) / -9);margin-inline-end:calc(var(--v-btn-height) / 4.5)}.v-btn__content>.v-icon--end{margin-inline-start:calc(var(--v-btn-height) / 4.5);margin-inline-end:calc(var(--v-btn-height) / -9)}.v-btn--stacked .v-btn__content{white-space:normal}.v-btn__overlay{background-color:currentColor;border-radius:inherit;opacity:0;transition:opacity .2s ease-in-out}.v-btn__overlay,.v-btn__underlay{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.v-card-actions .v-btn{padding:0 8px}.v-card-actions .v-btn~.v-btn:not(.v-btn-toggle .v-btn){margin-inline-start:.5rem}.v-banner-actions .v-btn{padding:0 8px}.v-pagination .v-btn{border-radius:4px}.v-btn__overlay{transition:none}.v-pagination__item--is-active .v-btn__overlay{opacity:var(--v-border-opacity)}.v-snackbar-actions .v-btn{padding:0 8px}.v-btn-toggle .v-btn.v-btn--selected:not(.v-btn--disabled) .v-btn__overlay{opacity:var(--v-activated-opacity)}.v-btn-group{display:inline-flex;flex-wrap:nowrap;max-width:100%;min-width:0;overflow:hidden;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px;background:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-btn-group--border{border-width:thin;box-shadow:none}.v-btn-group--density-default.v-btn-group{height:48px}.v-btn-group--density-comfortable.v-btn-group{height:40px}.v-btn-group--density-compact.v-btn-group{height:36px}.v-btn-group .v-btn{border-radius:0;border-color:inherit}.v-btn-group .v-btn:not(:last-child){border-inline-end:none}.v-btn-group .v-btn:not(:first-child){border-inline-start:none}.v-btn-group .v-btn:first-child{border-start-start-radius:inherit;border-end-start-radius:inherit}.v-btn-group .v-btn:last-child{border-start-end-radius:inherit;border-end-end-radius:inherit}.v-btn-group--divided .v-btn:not(:last-child){border-inline-end-width:thin;border-inline-end-style:solid;border-inline-end-color:rgba(var(--v-border-color),var(--v-border-opacity))}.v-btn-group--tile{border-radius:0}.v-icon{--v-icon-size-multiplier: 1;align-items:center;display:inline-flex;font-feature-settings:"liga";height:1em;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;text-align:center;-webkit-user-select:none;user-select:none;vertical-align:middle;width:1em}.v-icon--clickable{cursor:pointer}.v-icon--size-x-small{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-icon--size-small{font-size:calc(var(--v-icon-size-multiplier) * 1.25em)}.v-icon--size-default{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)}.v-icon--size-large{font-size:calc(var(--v-icon-size-multiplier) * 1.75em)}.v-icon--size-x-large{font-size:calc(var(--v-icon-size-multiplier) * 2em)}.v-icon__svg{fill:currentColor;width:100%;height:100%}.v-icon--start{margin-inline-end:8px}.v-icon--end{margin-inline-start:8px}.v-progress-circular{align-items:center;display:inline-flex;justify-content:center;position:relative;vertical-align:middle}.v-progress-circular>svg{width:100%;height:100%;margin:auto;position:absolute;top:0;bottom:0;left:0;right:0;z-index:0}.v-progress-circular__content{align-items:center;display:flex;justify-content:center}.v-progress-circular__underlay{color:rgba(var(--v-border-color),var(--v-border-opacity));stroke:currentColor;z-index:1}.v-progress-circular__overlay{stroke:currentColor;transition:all .2s ease-in-out,stroke-width 0s;z-index:2}.v-progress-circular--size-x-small{height:16px;width:16px}.v-progress-circular--size-small{height:24px;width:24px}.v-progress-circular--size-default{height:32px;width:32px}.v-progress-circular--size-large{height:48px;width:48px}.v-progress-circular--size-x-large{height:64px;width:64px}.v-progress-circular--indeterminate>svg{animation:progress-circular-rotate 1.4s linear infinite;transform-origin:center center;transition:all .2s ease-in-out}.v-progress-circular--indeterminate .v-progress-circular__overlay{animation:progress-circular-dash 1.4s ease-in-out infinite,progress-circular-rotate 1.4s linear infinite;stroke-dasharray:25,200;stroke-dashoffset:0;stroke-linecap:round;transform-origin:center center;transform:rotate(-90deg)}.v-progress-circular--disable-shrink>svg{animation-duration:.7s}.v-progress-circular--disable-shrink .v-progress-circular__overlay{animation:none}.v-progress-circular--indeterminate:not(.v-progress-circular--visible)>svg,.v-progress-circular--indeterminate:not(.v-progress-circular--visible) .v-progress-circular__overlay{animation-play-state:paused!important}@keyframes progress-circular-dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0px}50%{stroke-dasharray:100,200;stroke-dashoffset:-15px}to{stroke-dasharray:100,200;stroke-dashoffset:-124px}}@keyframes progress-circular-rotate{to{transform:rotate(270deg)}}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.2,1);width:100%}.v-progress-linear__background{background:currentColor;bottom:0;left:0;opacity:var(--v-border-opacity);position:absolute;top:0;transition-property:width,left,right;transition:inherit}.v-progress-linear__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-progress-linear__determinate,.v-progress-linear__indeterminate{background:currentColor}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear__indeterminate .long,.v-progress-linear__indeterminate .short{animation-play-state:paused;animation-duration:2.2s;animation-iteration-count:infinite;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear__indeterminate .long{animation-name:indeterminate-ltr}.v-progress-linear__indeterminate .short{animation-name:indeterminate-short-ltr}.v-progress-linear__stream{animation:stream .25s infinite linear;animation-play-state:paused;bottom:0;left:auto;opacity:.3;pointer-events:none;position:absolute;transition:inherit;transition-property:width,left,right}.v-progress-linear--reverse .v-progress-linear__background,.v-progress-linear--reverse .v-progress-linear__determinate,.v-progress-linear--reverse .v-progress-linear__content,.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate .long{animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate .short{animation-name:indeterminate-short-rtl}.v-progress-linear--reverse .v-progress-linear__stream{right:auto}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--rounded{border-radius:9999px}.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded.v-progress-linear--rounded-bar .v-progress-linear__indeterminate{border-radius:inherit}.v-progress-linear--striped .v-progress-linear__determinate{animation:progress-linear-stripes 1s infinite linear;background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-repeat:repeat;background-size:var(--v-progress-linear-height)}.v-progress-linear--active .v-progress-linear__indeterminate .long,.v-progress-linear--active .v-progress-linear__indeterminate .short,.v-progress-linear--active .v-progress-linear__stream{animation-play-state:running}.v-progress-linear--rounded-bar .v-progress-linear__determinate,.v-progress-linear--rounded-bar .v-progress-linear__indeterminate,.v-progress-linear--rounded-bar .v-progress-linear__stream+.v-progress-linear__background{border-radius:9999px}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-ltr,.v-locale--is-ltr .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-left-radius:0;border-bottom-left-radius:0}.v-progress-linear--rounded-bar .v-progress-linear__determinate.v-locale--is-rtl,.v-locale--is-rtl .v-progress-linear--rounded-bar .v-progress-linear__determinate{border-top-right-radius:0;border-bottom-right-radius:0}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes stream{to{transform:translate(var(--v-progress-linear-stream-to))}}@keyframes progress-linear-stripes{0%{background-position-x:var(--v-progress-linear-height)}}.v-ripple__container{color:inherit;border-radius:inherit;position:absolute;width:100%;height:100%;left:0;top:0;overflow:hidden;z-index:0;pointer-events:none;contain:strict}.v-ripple__animation{color:inherit;position:absolute;top:0;left:0;border-radius:50%;background:currentColor;opacity:0;pointer-events:none;overflow:hidden;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(0,0,.2,1),opacity .1s cubic-bezier(0,0,.2,1);opacity:calc(.25 * var(--v-theme-overlay-multiplier))}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(0,0,.2,1);opacity:0}.v-checkbox .v-selection-control{min-height:var(--v-input-control-height)}.v-selection-control{align-items:center;contain:layout;display:flex;flex:1 0;grid-area:control;position:relative;-webkit-user-select:none;user-select:none}.v-selection-control .v-label{white-space:normal;word-break:break-word;height:100%;width:100%}.v-selection-control--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-selection-control--error .v-label,.v-selection-control--disabled .v-label{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-label{color:rgb(var(--v-theme-error))}.v-selection-control--inline{display:inline-flex;flex:0 0 auto;min-width:0;max-width:100%}.v-selection-control--inline .v-label{width:auto}.v-selection-control--density-default{--v-selection-control-size: 40px}.v-selection-control--density-comfortable{--v-selection-control-size: 36px}.v-selection-control--density-compact{--v-selection-control-size: 28px}.v-selection-control__wrapper{width:var(--v-selection-control-size);height:var(--v-selection-control-size);display:inline-flex;align-items:center;position:relative;justify-content:center;flex:none}.v-selection-control__input{width:var(--v-selection-control-size);height:var(--v-selection-control-size);align-items:center;display:flex;flex:none;justify-content:center;position:relative;border-radius:50%}.v-selection-control__input input{cursor:pointer;position:absolute;left:0;top:0;width:100%;height:100%;opacity:0}.v-selection-control__input:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:100%;background-color:currentColor;opacity:0;pointer-events:none}.v-selection-control__input:hover:before{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-selection-control__input>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-selection-control--disabled .v-selection-control__input>.v-icon,.v-selection-control--dirty .v-selection-control__input>.v-icon,.v-selection-control--error .v-selection-control__input>.v-icon{opacity:1}.v-selection-control--error:not(.v-selection-control--disabled) .v-selection-control__input>.v-icon{color:rgb(var(--v-theme-error))}.v-selection-control--focus-visible .v-selection-control__input:before{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}.v-label{align-items:center;display:inline-flex;font-size:1rem;letter-spacing:.009375em;min-width:0;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-label--clickable{cursor:pointer}.v-selection-control-group{grid-area:control;display:flex;flex-direction:column}.v-selection-control-group--inline{flex-direction:row;flex-wrap:wrap}.v-input{display:grid;flex:1 1 auto;font-size:1rem;font-weight:400;line-height:1.5;--v-input-chips-margin-top: 2px}.v-input--disabled{pointer-events:none}.v-input--density-default{--v-input-control-height: 56px;--v-input-padding-top: 15px}.v-input--density-comfortable{--v-input-control-height: 48px;--v-input-padding-top: 11px}.v-input--density-compact{--v-input-control-height: 40px;--v-input-padding-top: 7px}.v-input--density-default{--v-input-chips-margin-bottom: 0px}.v-input--density-comfortable{--v-input-chips-margin-bottom: 2px}.v-input--density-compact{--v-input-chips-margin-bottom: 4px}.v-input--vertical{grid-template-areas:"append" "control" "prepend";grid-template-rows:max-content auto max-content;grid-template-columns:min-content}.v-input--vertical .v-input__prepend{margin-block-start:16px}.v-input--vertical .v-input__append{margin-block-end:16px}.v-input--horizontal{grid-template-areas:"prepend control append" "a messages b";grid-template-columns:max-content minmax(0,1fr) max-content;grid-template-rows:auto auto}.v-input--horizontal .v-input__prepend{margin-inline-end:16px}.v-input--horizontal .v-input__append{margin-inline-start:16px}.v-input__details{align-items:flex-end;display:flex;font-size:.75rem;font-weight:400;grid-area:messages;letter-spacing:.0333333333em;line-height:normal;min-height:22px;padding-top:6px;overflow:hidden;justify-content:space-between}.v-input__details>.v-icon,.v-input__prepend>.v-icon,.v-input__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-input--disabled .v-input__details>.v-icon,.v-input--disabled .v-input__details .v-messages,.v-input--error .v-input__details>.v-icon,.v-input--error .v-input__details .v-messages,.v-input--disabled .v-input__prepend>.v-icon,.v-input--disabled .v-input__prepend .v-messages,.v-input--error .v-input__prepend>.v-icon,.v-input--error .v-input__prepend .v-messages,.v-input--disabled .v-input__append>.v-icon,.v-input--disabled .v-input__append .v-messages,.v-input--error .v-input__append>.v-icon,.v-input--error .v-input__append .v-messages{opacity:1}.v-input--disabled .v-input__details,.v-input--disabled .v-input__prepend,.v-input--disabled .v-input__append{opacity:var(--v-disabled-opacity)}.v-input--error:not(.v-input--disabled) .v-input__details>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__details .v-messages,.v-input--error:not(.v-input--disabled) .v-input__prepend>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__prepend .v-messages,.v-input--error:not(.v-input--disabled) .v-input__append>.v-icon,.v-input--error:not(.v-input--disabled) .v-input__append .v-messages{color:rgb(var(--v-theme-error))}.v-input__prepend,.v-input__append{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top)}.v-input--center-affix .v-input__prepend,.v-input--center-affix .v-input__append{align-items:center;padding-top:0}.v-input__prepend{grid-area:prepend}.v-input__append{grid-area:append}.v-input__control{display:flex;grid-area:control}.v-messages{flex:1 1 auto;font-size:12px;min-height:14px;min-width:1px;opacity:var(--v-medium-emphasis-opacity);position:relative}.v-messages__message{line-height:12px;word-break:break-word;overflow-wrap:break-word;word-wrap:break-word;-webkit-hyphens:auto;hyphens:auto;transition-duration:.15s}.v-chip{align-items:center;cursor:default;display:inline-flex;font-weight:400;max-width:100%;min-width:0;overflow:hidden;position:relative;text-decoration:none;white-space:nowrap;vertical-align:middle;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:9999px}.v-chip.v-chip--size-x-small{--v-chip-size: .625rem;--v-chip-height: 18px;font-size:.625rem;padding:0 7px}.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 12px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar{--v-avatar-height: 18px}.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-4.9px;margin-inline-end:3.5px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--start{margin-inline-start:-7px}.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-start:3.5px;margin-inline-end:-4.9px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end{margin-inline-end:-7px}.v-chip--pill.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close{margin-inline-start:10.5px}.v-chip.v-chip--size-x-small .v-icon--start,.v-chip.v-chip--size-x-small .v-chip__filter{margin-inline-start:-3.5px;margin-inline-end:3.5px}.v-chip.v-chip--size-x-small .v-icon--end,.v-chip.v-chip--size-x-small .v-chip__close{margin-inline-start:3.5px;margin-inline-end:-3.5px}.v-chip.v-chip--size-x-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-small .v-chip__append+.v-chip__close{margin-inline-start:7px}.v-chip.v-chip--size-small{--v-chip-size: .75rem;--v-chip-height: 24px;font-size:.75rem;padding:0 9px}.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 18px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar{--v-avatar-height: 24px}.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-6.3px;margin-inline-end:4.5px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--start{margin-inline-start:-9px}.v-chip.v-chip--size-small .v-avatar--end{margin-inline-start:4.5px;margin-inline-end:-6.3px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end{margin-inline-end:-9px}.v-chip--pill.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close{margin-inline-start:13.5px}.v-chip.v-chip--size-small .v-icon--start,.v-chip.v-chip--size-small .v-chip__filter{margin-inline-start:-4.5px;margin-inline-end:4.5px}.v-chip.v-chip--size-small .v-icon--end,.v-chip.v-chip--size-small .v-chip__close{margin-inline-start:4.5px;margin-inline-end:-4.5px}.v-chip.v-chip--size-small .v-icon--end+.v-chip__close,.v-chip.v-chip--size-small .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-small .v-chip__append+.v-chip__close{margin-inline-start:9px}.v-chip.v-chip--size-default{--v-chip-size: .875rem;--v-chip-height: 30px;font-size:.875rem;padding:0 11px}.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 24px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar{--v-avatar-height: 30px}.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-7.7px;margin-inline-end:5.5px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--start{margin-inline-start:-11px}.v-chip.v-chip--size-default .v-avatar--end{margin-inline-start:5.5px;margin-inline-end:-7.7px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end{margin-inline-end:-11px}.v-chip--pill.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close{margin-inline-start:16.5px}.v-chip.v-chip--size-default .v-icon--start,.v-chip.v-chip--size-default .v-chip__filter{margin-inline-start:-5.5px;margin-inline-end:5.5px}.v-chip.v-chip--size-default .v-icon--end,.v-chip.v-chip--size-default .v-chip__close{margin-inline-start:5.5px;margin-inline-end:-5.5px}.v-chip.v-chip--size-default .v-icon--end+.v-chip__close,.v-chip.v-chip--size-default .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-default .v-chip__append+.v-chip__close{margin-inline-start:11px}.v-chip.v-chip--size-large{--v-chip-size: 1rem;--v-chip-height: 36px;font-size:1rem;padding:0 14px}.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 30px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar{--v-avatar-height: 36px}.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-9.8px;margin-inline-end:7px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--start{margin-inline-start:-14px}.v-chip.v-chip--size-large .v-avatar--end{margin-inline-start:7px;margin-inline-end:-9.8px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end{margin-inline-end:-14px}.v-chip--pill.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close{margin-inline-start:21px}.v-chip.v-chip--size-large .v-icon--start,.v-chip.v-chip--size-large .v-chip__filter{margin-inline-start:-7px;margin-inline-end:7px}.v-chip.v-chip--size-large .v-icon--end,.v-chip.v-chip--size-large .v-chip__close{margin-inline-start:7px;margin-inline-end:-7px}.v-chip.v-chip--size-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-large .v-chip__append+.v-chip__close{margin-inline-start:14px}.v-chip.v-chip--size-x-large{--v-chip-size: 1.125rem;--v-chip-height: 42px;font-size:1.125rem;padding:0 16px}.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 36px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar{--v-avatar-height: 42px}.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-11.2px;margin-inline-end:8px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--start{margin-inline-start:-16px}.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-start:8px;margin-inline-end:-11.2px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end{margin-inline-end:-16px}.v-chip--pill.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close{margin-inline-start:24px}.v-chip.v-chip--size-x-large .v-icon--start,.v-chip.v-chip--size-x-large .v-chip__filter{margin-inline-start:-8px;margin-inline-end:8px}.v-chip.v-chip--size-x-large .v-icon--end,.v-chip.v-chip--size-x-large .v-chip__close{margin-inline-start:8px;margin-inline-end:-8px}.v-chip.v-chip--size-x-large .v-icon--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-avatar--end+.v-chip__close,.v-chip.v-chip--size-x-large .v-chip__append+.v-chip__close{margin-inline-start:16px}.v-chip.v-chip--density-default{height:calc(var(--v-chip-height) + 0px)}.v-chip.v-chip--density-comfortable{height:calc(var(--v-chip-height) + -8px)}.v-chip.v-chip--density-compact{height:calc(var(--v-chip-height) + -12px)}.v-chip:hover>.v-chip__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-chip:focus-visible>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip:focus>.v-chip__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-chip--active>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]>.v-chip__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-chip--active:hover>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:hover>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-chip--active:focus-visible>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-chip--active:focus>.v-chip__overlay,.v-chip[aria-haspopup=menu][aria-expanded=true]:focus>.v-chip__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-chip--variant-plain,.v-chip--variant-outlined,.v-chip--variant-text,.v-chip--variant-tonal{background:transparent;color:inherit}.v-chip--variant-plain{opacity:.26}.v-chip--variant-plain:focus,.v-chip--variant-plain:hover{opacity:1}.v-chip--variant-plain .v-chip__overlay{display:none}.v-chip--variant-elevated,.v-chip--variant-flat{background:rgb(var(--v-theme-surface-variant));color:rgb(var(--v-theme-on-surface-variant))}.v-chip--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-chip--variant-outlined{border:thin solid currentColor}.v-chip--variant-text .v-chip__overlay{background:currentColor}.v-chip--variant-tonal .v-chip__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-chip--border{border-width:thin}.v-chip--link{cursor:pointer}.v-chip--filter{-webkit-user-select:none;user-select:none}.v-chip__content{align-items:center;display:inline-flex}.v-autocomplete__selection .v-chip__content,.v-combobox__selection .v-chip__content,.v-select__selection .v-chip__content{overflow:hidden}.v-chip__filter,.v-chip__prepend,.v-chip__append,.v-chip__close{align-items:center;display:inline-flex}.v-chip__close{cursor:pointer;flex:0 1 auto;font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;user-select:none}.v-chip__close .v-icon{font-size:inherit}.v-chip__filter{transition:.15s cubic-bezier(.4,0,.2,1)}.v-chip__overlay{position:absolute;top:0;left:0;width:100%;height:100%;background-color:currentColor;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-chip--disabled{opacity:.3;pointer-events:none;-webkit-user-select:none;user-select:none}.v-chip--label{border-radius:4px}.v-avatar{flex:none;align-items:center;display:inline-flex;justify-content:center;line-height:normal;overflow:hidden;position:relative;text-align:center;transition:.2s cubic-bezier(.4,0,.2,1);transition-property:width,height;vertical-align:middle;border-radius:50%}.v-avatar.v-avatar--size-x-small{--v-avatar-height: 24px}.v-avatar.v-avatar--size-small{--v-avatar-height: 32px}.v-avatar.v-avatar--size-default{--v-avatar-height: 40px}.v-avatar.v-avatar--size-large{--v-avatar-height: 48px}.v-avatar.v-avatar--size-x-large{--v-avatar-height: 56px}.v-avatar.v-avatar--density-default{height:calc(var(--v-avatar-height) + 0px);width:calc(var(--v-avatar-height) + 0px)}.v-avatar.v-avatar--density-comfortable{height:calc(var(--v-avatar-height) + -4px);width:calc(var(--v-avatar-height) + -4px)}.v-avatar.v-avatar--density-compact{height:calc(var(--v-avatar-height) + -8px);width:calc(var(--v-avatar-height) + -8px)}.v-avatar--variant-plain,.v-avatar--variant-outlined,.v-avatar--variant-text,.v-avatar--variant-tonal{background:transparent;color:inherit}.v-avatar--variant-plain{opacity:.62}.v-avatar--variant-plain:focus,.v-avatar--variant-plain:hover{opacity:1}.v-avatar--variant-plain .v-avatar__overlay{display:none}.v-avatar--variant-elevated,.v-avatar--variant-flat{background:var(--v-theme-surface);color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity))}.v-avatar--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-avatar--variant-outlined{border:thin solid currentColor}.v-avatar--variant-text .v-avatar__overlay{background:currentColor}.v-avatar--variant-tonal .v-avatar__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-avatar--rounded{border-radius:4px}.v-avatar .v-img{height:100%;width:100%}.v-chip-group{display:flex;max-width:100%;min-width:0;overflow-x:auto;padding:4px 0;flex-wrap:wrap}.v-chip-group .v-chip{margin:4px 8px 4px 0}.v-chip-group .v-chip.v-chip--selected:not(.v-chip--disabled) .v-chip__overlay{opacity:var(--v-activated-opacity)}.v-chip-group--column{flex-wrap:wrap;white-space:normal}.v-list{overflow:auto;padding:8px 0;position:relative;outline:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:0;background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list--border{border-width:thin;box-shadow:none}.v-list--disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.v-list--nav{padding-inline-start:8px;padding-inline-end:8px}.v-navigation-drawer--rail:not(.v-navigation-drawer--is-hovering) .v-list .v-avatar{--v-avatar-height: 24px}.v-list--rounded{border-radius:4px}.v-list--subheader{padding-top:0}.v-list-img{border-radius:inherit;display:flex;height:100%;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-list-subheader{align-items:center;background:inherit;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));display:flex;font-size:.875rem;font-weight:400;line-height:1.375rem;padding-inline-end:16px;min-height:40px;transition:.2s min-height cubic-bezier(.4,0,.2,1)}.v-list-subheader__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-list--density-default .v-list-subheader{min-height:40px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-comfortable .v-list-subheader{min-height:36px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list--density-compact .v-list-subheader{min-height:32px;padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-subheader--inset{--indent-padding: 56px}.v-list--nav .v-list-subheader{font-size:.75rem}.v-list-subheader--sticky{background:inherit;left:0;position:sticky;top:0;z-index:1}.v-list__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;outline:none;max-width:100%;padding:4px 16px;position:relative;text-decoration:none;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:0}.v-list-item--border{border-width:thin;box-shadow:none}.v-list-item:hover>.v-list-item__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item:focus-visible>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item:focus>.v-list-item__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-list-item--active>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]>.v-list-item__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-list-item--active:hover>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:hover>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-list-item--active:focus-visible>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-list-item--active:focus>.v-list-item__overlay,.v-list-item[aria-haspopup=menu][aria-expanded=true]:focus>.v-list-item__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-list-item--variant-plain,.v-list-item--variant-outlined,.v-list-item--variant-text,.v-list-item--variant-tonal{background:transparent;color:inherit}.v-list-item--variant-plain{opacity:.62}.v-list-item--variant-plain:focus,.v-list-item--variant-plain:hover{opacity:1}.v-list-item--variant-plain .v-list-item__overlay{display:none}.v-list-item--variant-elevated,.v-list-item--variant-flat{background:rgba(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-list-item--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-list-item--variant-outlined{border:thin solid currentColor}.v-list-item--variant-text .v-list-item__overlay{background:currentColor}.v-list-item--variant-tonal .v-list-item__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}@supports selector(:focus-visible){.v-list-item:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;border:2px solid currentColor;border-radius:4px;opacity:0;transition:opacity .2s ease-in-out}.v-list-item:focus-visible:after{opacity:calc(.15 * var(--v-theme-overlay-multiplier))}}.v-list-item__prepend>.v-icon,.v-list-item__append>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-list-item--active .v-list-item__prepend>.v-icon,.v-list-item--active .v-list-item__append>.v-icon{opacity:1}.v-list-item--rounded{border-radius:4px}.v-list-item--disabled{pointer-events:none;-webkit-user-select:none;user-select:none;opacity:.6}.v-list-item--link{cursor:pointer}.v-list-item__prepend{align-items:center;align-self:center;display:flex;grid-area:prepend}.v-list-item__prepend>.v-avatar{margin-inline-end:16px}.v-list-item__prepend>.v-icon{margin-inline-end:32px}.v-list-item--three-line .v-list-item__prepend{align-self:start}.v-list-item__append{align-self:center;display:flex;align-items:center;grid-area:append}.v-list-item__append>.v-avatar{margin-inline-start:16px}.v-list-item__append>.v-icon{margin-inline-start:32px}.v-list-item--three-line .v-list-item__append{align-self:start}.v-list-item__content{align-self:center;grid-area:content;overflow:hidden}.v-list-item-action{align-self:center;display:flex;align-items:center;grid-area:prepend;flex:none;transition:inherit;transition-property:height,width}.v-list-item-action--start{margin-inline-end:12px}.v-list-item-action--end{margin-inline-start:12px}.v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-media--start{margin-inline-end:16px}.v-list-item-media--end{margin-inline-start:16px}.v-list-item--two-line .v-list-item-media{margin-top:-4px;margin-bottom:-4px}.v-list-item--three-line .v-list-item-media{margin-top:0;margin-bottom:0}.v-list-item-subtitle{-webkit-box-orient:vertical;display:-webkit-box;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0;text-overflow:ellipsis;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem;text-transform:none}.v-list-item--one-line .v-list-item-subtitle{-webkit-line-clamp:1}.v-list-item--two-line .v-list-item-subtitle{-webkit-line-clamp:2}.v-list-item--three-line .v-list-item-subtitle{-webkit-line-clamp:3}.v-list-item--nav .v-list-item-subtitle{font-size:.75rem;font-weight:400;letter-spacing:.0178571429em;line-height:1rem}.v-list-item-title{-webkit-hyphens:auto;hyphens:auto;overflow-wrap:normal;overflow:hidden;padding:0;white-space:nowrap;text-overflow:ellipsis;word-break:normal;word-wrap:break-word;font-size:1rem;font-weight:400;letter-spacing:.009375em;line-height:1.5rem;text-transform:none}.v-list-item--nav .v-list-item-title{font-size:.8125rem;font-weight:500;letter-spacing:normal;line-height:1rem}.v-list-item--density-default{min-height:40px}.v-list-item--density-default.v-list-item--one-line{min-height:48px;padding-top:4px;padding-bottom:4px}.v-list-item--density-default.v-list-item--two-line{min-height:64px;padding-top:12px;padding-bottom:12px}.v-list-item--density-default.v-list-item--three-line{min-height:88px;padding-top:16px;padding-bottom:16px}.v-list-item--density-default.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-default.v-list-item--three-line .v-list-item__append{padding-top:8px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-default:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable{min-height:36px}.v-list-item--density-comfortable.v-list-item--one-line{min-height:44px}.v-list-item--density-comfortable.v-list-item--two-line{min-height:60px;padding-top:8px;padding-bottom:8px}.v-list-item--density-comfortable.v-list-item--three-line{min-height:84px;padding-top:12px;padding-bottom:12px}.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-comfortable.v-list-item--three-line .v-list-item__append{padding-top:6px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-comfortable:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact{min-height:32px}.v-list-item--density-compact.v-list-item--one-line{min-height:40px}.v-list-item--density-compact.v-list-item--two-line{min-height:56px;padding-top:4px;padding-bottom:4px}.v-list-item--density-compact.v-list-item--three-line{min-height:80px;padding-top:8px;padding-bottom:8px}.v-list-item--density-compact.v-list-item--three-line .v-list-item__prepend,.v-list-item--density-compact.v-list-item--three-line .v-list-item__append{padding-top:4px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--one-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--two-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--density-compact:not(.v-list-item--nav).v-list-item--three-line{padding-inline-start:16px;padding-inline-end:16px}.v-list-item--nav{padding-inline-start:8px;padding-inline-end:8px}.v-list .v-list-item--nav:not(:only-child){margin-bottom:4px}.v-list-item__underlay{position:absolute}.v-list-item__overlay{background-color:currentColor;border-radius:inherit;bottom:0;left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s ease-in-out}.v-list-item--active.v-list-item--variant-elevated .v-list-item__overlay{--v-theme-overlay-multiplier: 0}.v-list{--indent-padding: 0px}.v-list--nav{--indent-padding: -8px}.v-list-group{--list-indent-size: 16px;--parent-padding: var(--indent-padding);--prepend-width: 40px}.v-list-group--fluid{--list-indent-size: 0px}.v-list-group--prepend{--parent-padding: calc(var(--indent-padding) + var(--prepend-width))}.v-list-group--fluid.v-list-group--prepend{--parent-padding: var(--indent-padding)}.v-list-group__items{--indent-padding: calc(var(--parent-padding) + var(--list-indent-size))}.v-list-group__items .v-list-item{padding-inline-start:calc(16px + var(--indent-padding))!important}.v-list-group__header.v-list-item--active:not(:focus-visible) .v-list-item__overlay{opacity:0}.v-divider{display:block;flex:1 1 100%;height:0px;max-height:0px;opacity:var(--v-border-opacity);transition:inherit;border-style:solid;border-width:thin 0 0 0}.v-divider--vertical{align-self:stretch;border-width:0 thin 0 0;display:inline-flex;height:inherit;margin-left:-1px;max-height:100%;max-width:0px;vertical-align:text-bottom;width:0px}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px);margin-inline-start:72px}.v-divider--inset.v-divider--vertical{margin-bottom:8px;margin-top:8px;max-height:calc(100% - 16px)}.v-menu>.v-overlay__content{display:flex;flex-direction:column;border-radius:4px}.v-menu>.v-overlay__content>.v-card,.v-menu>.v-overlay__content>.v-sheet,.v-menu>.v-overlay__content>.v-list{background:rgb(var(--v-theme-surface));border-radius:inherit;overflow:auto;height:100%;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-overlay-container{contain:layout;left:0;pointer-events:none;position:absolute;top:0;display:contents}.v-overlay-scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-overlay-scroll-blocked:not(html){overflow-y:hidden!important}html.v-overlay-scroll-blocked{position:fixed;top:var(--v-body-scroll-y);left:var(--v-body-scroll-x);width:100%;height:100%}.v-overlay{border-radius:inherit;display:flex;left:0;pointer-events:none;position:fixed;top:0;bottom:0;right:0}.v-overlay__content{outline:none;position:absolute;pointer-events:auto;contain:layout}.v-overlay__scrim{pointer-events:auto;background:rgb(var(--v-theme-on-surface));border-radius:inherit;bottom:0;left:0;opacity:.32;position:fixed;right:0;top:0}.v-overlay--absolute,.v-overlay--contained .v-overlay__scrim{position:absolute}.v-overlay--scroll-blocked{padding-inline-end:var(--v-scrollbar-offset)}.v-select .v-field .v-text-field__prefix,.v-select .v-field .v-text-field__suffix,.v-select .v-field .v-field__input,.v-select .v-field.v-field{cursor:pointer}.v-select .v-field .v-field__input>input{align-self:flex-start;opacity:1;flex:0 0;position:absolute;width:100%;transition:none;pointer-events:none}.v-select .v-field--dirty .v-select__selection{margin-inline-end:2px}.v-select .v-select__selection-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-select__content{overflow:hidden;box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12));border-radius:4px}.v-select__selection{display:inline-flex;align-items:center;letter-spacing:inherit;line-height:inherit;max-width:100%}.v-select .v-select__selection{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-select .v-select__selection:first-child{margin-inline-start:0}.v-select--selected .v-field .v-field__input>input{opacity:0}.v-select__menu-icon{margin-inline-start:4px;transition:.2s cubic-bezier(.4,0,.2,1)}.v-select--active-menu .v-select__menu-icon{opacity:var(--v-high-emphasis-opacity);transform:rotate(180deg)}.v-text-field input{color:inherit;opacity:0;flex:1;transition:.15s opacity cubic-bezier(.4,0,.2,1);min-width:0;margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-text-field input:focus,.v-text-field input:active{outline:none}.v-text-field input:invalid{box-shadow:none}.v-text-field .v-field{cursor:text}.v-text-field--prefixed.v-text-field .v-field__input{--v-field-padding-start: 6px}.v-text-field--suffixed.v-text-field .v-field__input{--v-field-padding-end: 0}.v-text-field .v-input__details{padding-inline-start:16px;padding-inline-end:16px}.v-text-field .v-field--no-label input,.v-text-field .v-field--active input{opacity:1}.v-text-field .v-field--single-line input{transition:none}.v-text-field__prefix,.v-text-field__suffix{align-items:center;color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));cursor:default;display:flex;opacity:0;transition:inherit;white-space:nowrap;min-height:calc(max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom)) + var(--v-input-chips-margin-bottom) + 2px);padding-top:calc(var(--v-field-padding-top, 4px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 6px)}.v-text-field__prefix__text,.v-text-field__suffix__text{margin-top:var(--v-input-chips-margin-top);margin-bottom:var(--v-input-chips-margin-bottom)}.v-field--active .v-text-field__prefix,.v-field--active .v-text-field__suffix{opacity:1}.v-field--disabled .v-text-field__prefix,.v-field--disabled .v-text-field__suffix{color:rgba(var(--v-theme-on-surface),var(--v-disabled-opacity))}.v-text-field__prefix{padding-inline-start:var(--v-field-padding-start)}.v-text-field__suffix{padding-inline-end:var(--v-field-padding-end)}.v-text-field--plain-underlined{--v-field-padding-top--plain-underlined: 6px}.v-text-field--plain-underlined .v-input__details{padding:0}.v-text-field--plain-underlined .v-input__prepend,.v-text-field--plain-underlined .v-input__append{align-items:flex-start;padding-top:calc(var(--v-field-padding-top--plain-underlined) + var(--v-input-padding-top))}.v-counter{color:rgba(var(--v-theme-on-surface),var(--v-medium-emphasis-opacity));flex:0 1 auto;font-size:12px;transition-duration:.15s}.v-field{display:grid;grid-template-areas:"prepend-inner field clear append-inner";grid-template-columns:min-content minmax(0,1fr) min-content min-content;font-size:16px;letter-spacing:.009375em;max-width:100%;border-radius:4px;contain:layout;flex:1 0;grid-area:control;position:relative;--v-field-padding-start: 16px;--v-field-padding-end: 16px;--v-field-padding-top: 10px;--v-field-padding-bottom: 5px;--v-field-input-padding-top: calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));--v-field-input-padding-bottom: var(--v-field-padding-bottom, 5px)}.v-field--disabled{opacity:var(--v-disabled-opacity);pointer-events:none}.v-field--prepended{padding-inline-start:12px}.v-field--appended{padding-inline-end:12px}.v-field--variant-solo,.v-field--variant-solo-filled,.v-field--variant-solo-inverted{background:rgb(var(--v-theme-surface));border-color:transparent;color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity));box-shadow:0 3px 1px -2px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 2px 2px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-field--variant-solo-inverted.v-field--focused{color:rgb(var(--v-theme-on-surface-variant))}.v-field--variant-filled{border-bottom-left-radius:0;border-bottom-right-radius:0}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 54px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 52px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-solo,.v-input--density-default .v-field--variant-solo-inverted,.v-input--density-default .v-field--variant-solo-filled,.v-input--density-default .v-field--variant-filled{--v-input-control-height: 50px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 46px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 44px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-solo,.v-input--density-comfortable .v-field--variant-solo-inverted,.v-input--density-comfortable .v-field--variant-solo-filled,.v-input--density-comfortable .v-field--variant-filled{--v-input-control-height: 42px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 38px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 36px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-solo,.v-input--density-compact .v-field--variant-solo-inverted,.v-input--density-compact .v-field--variant-solo-filled,.v-input--density-compact .v-field--variant-filled{--v-input-control-height: 34px;--v-field-padding-bottom: 0px}.v-field--variant-outlined,.v-field--single-line,.v-field--no-label{--v-field-padding-top: 0px}.v-input--density-default .v-field--variant-outlined,.v-input--density-default .v-field--single-line,.v-input--density-default .v-field--no-label{--v-field-padding-bottom: 15px}.v-input--density-comfortable .v-field--variant-outlined,.v-input--density-comfortable .v-field--single-line,.v-input--density-comfortable .v-field--no-label{--v-field-padding-bottom: 11px}.v-input--density-compact .v-field--variant-outlined,.v-input--density-compact .v-field--single-line,.v-input--density-compact .v-field--no-label{--v-field-padding-bottom: 7px}.v-field--variant-plain,.v-field--variant-underlined{border-radius:0;padding:0}.v-field--variant-plain.v-field,.v-field--variant-underlined.v-field{--v-field-padding-start: 0px;--v-field-padding-end: 0px;--v-field-padding-top: var(--v-field-padding-top--plain-underlined, 6px)}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 46px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 44px;--v-field-padding-bottom: 5px}.v-input--density-default .v-field--variant-plain,.v-input--density-default .v-field--variant-underlined{--v-input-control-height: 42px;--v-field-padding-bottom: 5px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 38px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 36px;--v-field-padding-bottom: 1px}.v-input--density-comfortable .v-field--variant-plain,.v-input--density-comfortable .v-field--variant-underlined{--v-input-control-height: 34px;--v-field-padding-bottom: 1px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 30px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 28px;--v-field-padding-bottom: 0px}.v-input--density-compact .v-field--variant-plain,.v-input--density-compact .v-field--variant-underlined{--v-input-control-height: 26px;--v-field-padding-bottom: 0px}.v-field--variant-outlined{--v-input-chips-margin-bottom: 2px}.v-field--flat{box-shadow:none}.v-field--rounded{border-radius:9999px}.v-field.v-field--prepended{--v-field-padding-start: 6px}.v-field.v-field--appended{--v-field-padding-end: 6px}.v-field__input{color:inherit;display:flex;flex-wrap:wrap;letter-spacing:.009375em;opacity:var(--v-high-emphasis-opacity);min-height:calc(max(var(--v-input-control-height, 56px),1.5rem + var(--v-field-input-padding-top) + var(--v-field-input-padding-bottom)) + var(--v-input-chips-margin-bottom) + 2px);min-width:0;padding-inline-start:var(--v-field-padding-start);padding-inline-end:var(--v-field-padding-end);padding-top:var(--v-field-input-padding-top);padding-bottom:var(--v-field-input-padding-bottom);position:relative;width:100%}.v-field__input input{letter-spacing:inherit}.v-field__input input::placeholder,input.v-field__input::placeholder,textarea.v-field__input::placeholder{color:currentColor;opacity:var(--v-disabled-opacity)}.v-field__input:focus,.v-field__input:active{outline:none}.v-field__input:invalid{box-shadow:none}.v-field__field{flex:1 0;grid-area:field;position:relative;align-items:flex-start;display:flex}.v-field__prepend-inner{grid-area:prepend-inner;padding-inline-end:var(--v-field-padding-after)}.v-field__clearable{grid-area:clear}.v-field__append-inner{grid-area:append-inner;padding-inline-start:var(--v-field-padding-after)}.v-field__append-inner,.v-field__clearable,.v-field__prepend-inner{display:flex;align-items:flex-start;padding-top:var(--v-input-padding-top, 10px)}.v-field--center-affix .v-field__append-inner,.v-field--center-affix .v-field__clearable,.v-field--center-affix .v-field__prepend-inner{align-items:center;padding-top:0}.v-field.v-field--variant-underlined .v-field__append-inner,.v-field.v-field--variant-underlined .v-field__clearable,.v-field.v-field--variant-underlined .v-field__prepend-inner,.v-field.v-field--variant-plain .v-field__append-inner,.v-field.v-field--variant-plain .v-field__clearable,.v-field.v-field--variant-plain .v-field__prepend-inner{align-items:flex-start;padding-top:calc(var(--v-field-padding-top, 10px) + var(--v-input-padding-top, 0));padding-bottom:var(--v-field-padding-bottom, 5px)}.v-field--focused .v-field__prepend-inner,.v-field--focused .v-field__append-inner{opacity:1}.v-field__prepend-inner>.v-icon,.v-field__append-inner>.v-icon,.v-field__clearable>.v-icon{opacity:var(--v-medium-emphasis-opacity)}.v-field--disabled .v-field__prepend-inner>.v-icon,.v-field--error .v-field__prepend-inner>.v-icon,.v-field--disabled .v-field__append-inner>.v-icon,.v-field--error .v-field__append-inner>.v-icon,.v-field--disabled .v-field__clearable>.v-icon,.v-field--error .v-field__clearable>.v-icon{opacity:1}.v-field--error:not(.v-field--disabled) .v-field__prepend-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__append-inner>.v-icon,.v-field--error:not(.v-field--disabled) .v-field__clearable>.v-icon{color:rgb(var(--v-theme-error))}.v-field__clearable{cursor:pointer;opacity:0;margin-inline-start:4px;margin-inline-end:4px;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform,width}.v-field--focused .v-field__clearable,.v-field--persistent-clear .v-field__clearable{opacity:1}@media (hover: hover){.v-field:hover .v-field__clearable{opacity:1}}.v-label.v-field-label{contain:layout paint;margin-inline-start:var(--v-field-padding-start);margin-inline-end:var(--v-field-padding-end);max-width:calc(100% - var(--v-field-padding-start) - var(--v-field-padding-end));pointer-events:none;position:absolute;top:var(--v-input-padding-top);transform-origin:left center;transition:.15s cubic-bezier(.4,0,.2,1);transition-property:opacity,transform}.v-field--variant-underlined .v-label.v-field-label,.v-field--variant-plain .v-label.v-field-label{top:calc(var(--v-input-padding-top) + var(--v-field-padding-top))}.v-field--center-affix .v-label.v-field-label{top:50%;transform:translateY(-50%)}.v-field--active .v-label.v-field-label{visibility:hidden}.v-field--focused .v-label.v-field-label,.v-field--error .v-label.v-field-label{opacity:1}.v-field--error:not(.v-field--disabled) .v-label.v-field-label{color:rgb(var(--v-theme-error))}.v-label.v-field-label--floating{--v-field-label-scale: .75em;font-size:var(--v-field-label-scale);visibility:hidden;max-width:100%}.v-field--center-affix .v-label.v-field-label--floating{transform:none}.v-field.v-field--active .v-label.v-field-label--floating{visibility:visible}.v-input--density-default .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-default .v-field--variant-solo-filled .v-label.v-field-label--floating{top:7px}.v-input--density-comfortable .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-comfortable .v-field--variant-solo-filled .v-label.v-field-label--floating{top:5px}.v-input--density-compact .v-field--variant-solo .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-inverted .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-filled .v-label.v-field-label--floating,.v-input--density-compact .v-field--variant-solo-filled .v-label.v-field-label--floating{top:3px}.v-field--variant-plain .v-label.v-field-label--floating,.v-field--variant-underlined .v-label.v-field-label--floating{transform:translateY(-16px);margin:0;top:var(--v-input-padding-top)}.v-field--variant-outlined .v-label.v-field-label--floating{transform:translateY(-50%);transform-origin:center;position:static;margin:0 4px}.v-field__outline{--v-field-border-width: 1px;--v-field-border-opacity: .38;align-items:stretch;contain:layout;display:flex;height:100%;left:0;pointer-events:none;position:absolute;right:0;width:100%}@media (hover: hover){.v-field:hover .v-field__outline{--v-field-border-opacity: var(--v-high-emphasis-opacity)}}.v-field--error:not(.v-field--disabled) .v-field__outline{color:rgb(var(--v-theme-error))}.v-field.v-field--focused .v-field__outline,.v-input.v-input--error .v-field__outline{--v-field-border-opacity: 1}.v-field--variant-outlined.v-field--focused .v-field__outline{--v-field-border-width: 2px}.v-field--variant-filled .v-field__outline:before,.v-field--variant-underlined .v-field__outline:before{border-style:solid;border-width:0 0 var(--v-field-border-width);opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__outline:after,.v-field--variant-underlined .v-field__outline:after{border-color:currentColor;border-style:solid;border-width:0 0 2px;transform:scaleX(0);transition:transform .15s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--focused.v-field--variant-filled .v-field__outline:after,.v-field--focused.v-field--variant-underlined .v-field__outline:after{transform:scaleX(1)}.v-field--variant-outlined .v-field__outline{border-radius:inherit}.v-field--variant-outlined .v-field__outline__start,.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after,.v-field--variant-outlined .v-field__outline__end{border:0 solid currentColor;opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-outlined .v-field__outline__start{flex:0 0 12px;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-start-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__start.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field--variant-outlined .v-field__outline__start.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__start{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__notch{flex:none;position:relative}.v-field--variant-outlined .v-field__outline__notch:before,.v-field--variant-outlined .v-field__outline__notch:after{opacity:var(--v-field-border-opacity);transition:opacity .25s cubic-bezier(.4,0,.2,1);content:"";position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-outlined .v-field__outline__notch:before{border-width:var(--v-field-border-width) 0 0}.v-field--variant-outlined .v-field__outline__notch:after{bottom:0;border-width:0 0 var(--v-field-border-width)}.v-field--active.v-field--variant-outlined .v-field__outline__notch:before{opacity:0}.v-field--variant-outlined .v-field__outline__end{flex:1;border-top-width:var(--v-field-border-width);border-bottom-width:var(--v-field-border-width);border-inline-end-width:var(--v-field-border-width)}.v-field--variant-outlined .v-field__outline__end.v-locale--is-ltr,.v-locale--is-ltr .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;border-bottom-left-radius:0}.v-field--variant-outlined .v-field__outline__end.v-locale--is-rtl,.v-locale--is-rtl .v-field--variant-outlined .v-field__outline__end{border-top-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:inherit}.v-field__loader{bottom:0;left:0;position:absolute;right:0;width:100%}.v-field__overlay{border-radius:inherit;pointer-events:none;position:absolute;top:0;left:0;width:100%;height:100%}.v-field--variant-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-filled.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-filled .v-field__overlay{background-color:currentColor;opacity:.04;transition:opacity .25s cubic-bezier(.4,0,.2,1)}@media (hover: hover){.v-field--variant-solo-filled:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-filled.v-field--focused .v-field__overlay{opacity:calc((.04 + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}.v-field--variant-solo-inverted .v-field__overlay{transition:opacity .25s cubic-bezier(.4,0,.2,1)}.v-field--variant-solo-inverted.v-field--has-background .v-field__overlay{opacity:0}@media (hover: hover){.v-field--variant-solo-inverted:hover .v-field__overlay{opacity:calc((.04 + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}}.v-field--variant-solo-inverted.v-field--focused .v-field__overlay{background-color:rgb(var(--v-theme-surface-variant));opacity:1}.v-field--reverse .v-field__input.v-locale--is-ltr,.v-locale--is-ltr .v-field--reverse .v-field__input{text-align:right}.v-field--reverse .v-field__input.v-locale--is-rtl,.v-locale--is-rtl .v-field--reverse .v-field__input{text-align:left}.v-input--disabled .v-field--variant-filled .v-field__outline:before,.v-input--disabled .v-field--variant-underlined .v-field__outline:before{border-image:repeating-linear-gradient(to right,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 0px,rgba(var(--v-theme-on-surface),var(--v-disabled-opacity)) 2px,transparent 2px,transparent 4px) 1 repeat}.v-field--loading .v-field__outline:after,.v-field--loading .v-field__outline:before{opacity:0}.v-virtual-scroll{display:block;flex:1 1 auto;max-width:100%;overflow:auto;position:relative}.v-virtual-scroll__container{display:block}.v-card{display:block;overflow:hidden;overflow-wrap:break-word;position:relative;padding:0;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity,background;transition-timing-function:cubic-bezier(.4,0,.2,1);z-index:0;border-color:rgba(var(--v-border-color),var(--v-border-opacity));border-style:solid;border-width:0;border-radius:4px}.v-card--border{border-width:thin;box-shadow:none}.v-card--absolute{position:absolute}.v-card--fixed{position:fixed}.v-card:hover>.v-card__overlay{opacity:calc(var(--v-hover-opacity) * var(--v-theme-overlay-multiplier))}.v-card:focus-visible>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card:focus>.v-card__overlay{opacity:calc(var(--v-focus-opacity) * var(--v-theme-overlay-multiplier))}}.v-card--active>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]>.v-card__overlay{opacity:calc(var(--v-activated-opacity) * var(--v-theme-overlay-multiplier))}.v-card--active:hover>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:hover>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-hover-opacity)) * var(--v-theme-overlay-multiplier))}.v-card--active:focus-visible>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus-visible>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}@supports not selector(:focus-visible){.v-card--active:focus>.v-card__overlay,.v-card[aria-haspopup=menu][aria-expanded=true]:focus>.v-card__overlay{opacity:calc((var(--v-activated-opacity) + var(--v-focus-opacity)) * var(--v-theme-overlay-multiplier))}}.v-card--variant-plain,.v-card--variant-outlined,.v-card--variant-text,.v-card--variant-tonal{background:transparent;color:inherit}.v-card--variant-plain{opacity:.62}.v-card--variant-plain:focus,.v-card--variant-plain:hover{opacity:1}.v-card--variant-plain .v-card__overlay{display:none}.v-card--variant-elevated,.v-card--variant-flat{background:rgb(var(--v-theme-surface));color:rgba(var(--v-theme-on-surface),var(--v-high-emphasis-opacity))}.v-card--variant-elevated{box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-card--variant-flat{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-card--variant-outlined{border:thin solid currentColor}.v-card--variant-text .v-card__overlay{background:currentColor}.v-card--variant-tonal .v-card__underlay{background:currentColor;opacity:var(--v-activated-opacity);border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none}.v-card--disabled{pointer-events:none;-webkit-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__loader){opacity:.6}.v-card--flat{box-shadow:none}.v-card--hover{cursor:pointer;box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-card--hover:before,.v-card--hover:after{border-radius:inherit;bottom:0;content:"";display:block;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:inherit}.v-card--hover:before{opacity:1;z-index:-1;box-shadow:0 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 1px 1px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 3px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-card--hover:after{z-index:1;opacity:0;box-shadow:0 5px 5px -3px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 8px 10px 1px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 3px 14px 2px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-card--hover:hover:after{opacity:1}.v-card--hover:hover:before{opacity:0}.v-card--link{cursor:pointer}.v-card-actions{align-items:center;display:flex;flex:none;min-height:52px;padding:.5rem}.v-card-item{align-items:center;display:grid;flex:none;grid-template-areas:"prepend content append";grid-template-columns:max-content auto max-content;padding:.625rem 1rem}.v-card-item+.v-card-text{padding-top:0}.v-card-item__prepend{grid-area:prepend;padding-inline-end:1rem}.v-card-item__append{grid-area:append;padding-inline-start:1rem}.v-card-item__content{align-self:center;grid-area:content;overflow:hidden}.v-card-title{display:block;flex:none;font-size:1.25rem;font-weight:500;-webkit-hyphens:auto;hyphens:auto;letter-spacing:.0125em;min-width:0;overflow-wrap:normal;overflow:hidden;padding:.5rem 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap;word-break:normal;word-wrap:break-word}.v-card .v-card-title{line-height:2rem}.v-card--density-comfortable .v-card-title{line-height:1.75rem}.v-card--density-compact .v-card-title{line-height:1.55rem}.v-card-item .v-card-title{padding:0}.v-card-title+.v-card-text,.v-card-title+.v-card-actions{padding-top:0}.v-card-subtitle{display:block;flex:none;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;opacity:var(--v-medium-emphasis-opacity);overflow:hidden;padding:0 1rem;text-overflow:ellipsis;text-transform:none;white-space:nowrap}.v-card .v-card-subtitle{line-height:1.25rem}.v-card--density-comfortable .v-card-subtitle{line-height:1.125rem}.v-card--density-compact .v-card-subtitle{line-height:1rem}.v-card-item .v-card-subtitle{padding:0 0 .25rem}.v-card-text{flex:1 1 auto;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;padding:1rem;text-transform:none}.v-card .v-card-text{line-height:1.25rem}.v-card--density-comfortable .v-card-text{line-height:1.2rem}.v-card--density-compact .v-card-text{line-height:1.15rem}.v-card__image{display:flex;height:100%;flex:1 1 auto;left:0;overflow:hidden;position:absolute;top:0;width:100%;z-index:-1}.v-card__content{border-radius:inherit;overflow:hidden;position:relative}.v-card__loader{bottom:auto;top:0;left:0;position:absolute;right:0;width:100%;z-index:1}.v-card__overlay{background-color:currentColor;border-radius:inherit;position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.v-switch .v-label{padding-inline-start:10px}.v-switch__loader{display:flex}.v-switch__track,.v-switch__thumb{background-color:currentColor;transition:none}.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__track,.v-selection-control--error:not(.v-selection-control--disabled) .v-switch__thumb{background-color:rgb(var(--v-theme-error))}.v-selection-control--dirty .v-switch__thumb{color:currentColor}.v-switch__track{border-radius:8px;height:14px;opacity:.6;width:36px;cursor:pointer}.v-switch--inset .v-switch__track{border-radius:14px;height:28px;width:48px}.v-switch__thumb{align-items:center;border-radius:50%;color:rgb(var(--v-theme-surface));display:flex;height:20px;justify-content:center;width:20px;pointer-events:none;transition:.15s transform cubic-bezier(.4,0,.2,1);box-shadow:0 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 4px 5px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 1px 10px 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch--inset .v-switch__thumb{box-shadow:0 0 0 0 var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, .2)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .14)),0 0 0 0 var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, .12))}.v-switch:not(.v-switch--loading) .v-icon~.v-switch__thumb{display:none}.v-switch--loading .v-selection-control__input>.v-icon{display:none}.v-switch .v-selection-control{min-height:var(--v-input-control-height)}.v-switch .v-selection-control__input{border-radius:50%;transition:.15s transform cubic-bezier(.4,0,.2,1);transform:translate(-10px);position:absolute}.v-switch .v-selection-control--dirty .v-selection-control__input{transform:translate(10px)}.v-switch.v-switch--indeterminate .v-selection-control__input{transform:scale(.8)}.v-switch.v-switch--indeterminate .v-switch__thumb{transform:scale(.75);box-shadow:none}.v-switch.v-switch--inset .v-selection-control__wrapper{width:auto}.v-textarea .v-field{--v-textarea-control-height: var(--v-input-control-height)}.v-textarea .v-field__field{--v-input-control-height: var(--v-textarea-control-height)}.v-textarea .v-field__input{flex:1 1 auto;outline:none;-webkit-mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px));mask-image:linear-gradient(to bottom,transparent,transparent calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) - 6px),black calc(var(--v-field-padding-top, 0) + var(--v-input-padding-top, 0) + 4px))}.v-textarea .v-field__input.v-textarea__sizer{visibility:hidden;position:absolute;top:0;left:0;height:0!important;min-height:0!important;pointer-events:none}.v-textarea--auto-grow .v-field__input{overflow:hidden}.v-textarea--no-resize .v-field__input{resize:none}.v-textarea .v-field--no-label textarea,.v-textarea .v-field--active textarea{opacity:1}.v-textarea textarea{opacity:0;flex:1;min-width:0;transition:.15s opacity cubic-bezier(.4,0,.2,1)}.v-textarea textarea:focus,.v-textarea textarea:active{outline:none}.v-textarea textarea:invalid{box-shadow:none}[data-v-0d72d990] .v-field__field{align-items:flex-end!important}:root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}')),document.head.appendChild(i)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
