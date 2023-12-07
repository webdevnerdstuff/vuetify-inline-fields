import { Fragment as Fe, reactive as ln, computed as v, watchEffect as rn, toRefs as xn, capitalize as Qo, isVNode as Si, Comment as Bi, unref as r, warn as ll, inject as me, ref as D, provide as nn, shallowRef as de, defineComponent as sn, camelize as ea, h as ol, getCurrentInstance as xi, onBeforeUnmount as mn, watch as K, readonly as zl, onScopeDispose as He, effectScope as Dl, toRaw as Sn, TransitionGroup as ki, Transition as An, createVNode as d, mergeProps as Z, onBeforeMount as na, nextTick as Me, withDirectives as Ue, resolveDirective as gn, vShow as Hn, isRef as On, onMounted as Yn, toRef as oe, Text as wi, resolveDynamicComponent as Fi, Teleport as Pn, cloneVNode as Vi, createTextVNode as ta, vModelText as Ai, mergeModels as Qe, useModel as $n, openBlock as J, createBlock as ze, useSlots as En, createElementBlock as ce, normalizeClass as le, normalizeStyle as Te, renderSlot as Ye, normalizeProps as Pe, createCommentVNode as xe, createElementVNode as Ge, toDisplayString as Ll, useAttrs as Tn, withCtx as he, mergeDefaults as Xn, onUnmounted as Kn, createSlots as vn, renderList as fn, guardReactiveProps as Re, withKeys as Gt } from "vue";
import { useTheme as Wl } from "vuetify";
import { useWindowSize as _i } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.3
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Jn = Symbol("identifier"), Zn = { elevation: 5, variant: "flat" }, Bt = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Ml = { autofocus: !0 }, xt = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, la = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Oi = { ...Bt, ...la, ...xt, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Pi = { ...Bt, ...Ml, ...xt, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, $i = { ...Bt, ...la, ...xt, icons: !0, falseIcon: "" }, Ei = { ...Ml, ...xt, ...Bt, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, oa = { ...Bt, ...Ml, ...xt, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, Ti = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, on = (e) => {
  const { icon: t, iconOptions: n, name: l } = e;
  if (t)
    return t;
  const o = Ti[n == null ? void 0 : n.defaultSet];
  if (!o)
    throw new Error(`VInlineFields: No VInlineFields default ${n == null ? void 0 : n.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const a = o[l];
  if (!a)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return a;
};
function H(e, t) {
  return (n) => Object.keys(e).reduce((l, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = n && o in n ? { ...a, default: n[o] } : a, t && !l[o].source && (l[o].source = t), l;
  }, {});
}
const ye = H({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ke = typeof window < "u", Rl = Ke && "IntersectionObserver" in window;
function io(e, t, n) {
  const l = t.length - 1;
  if (l < 0)
    return e === void 0 ? n : e;
  for (let o = 0; o < l; o++) {
    if (e == null)
      return n;
    e = e[t[o]];
  }
  return e == null || e[t[l]] === void 0 ? n : e[t[l]];
}
function Qn(e, t) {
  if (e === t)
    return !0;
  if (e instanceof Date && t instanceof Date && e.getTime() !== t.getTime() || e !== Object(e) || t !== Object(t))
    return !1;
  const n = Object.keys(e);
  return n.length === Object.keys(t).length && n.every((l) => Qn(e[l], t[l]));
}
function dn(e, t, n) {
  if (t === !0)
    return e === void 0 ? n : e;
  if (t == null || typeof t == "boolean")
    return n;
  if (e !== Object(e)) {
    if (typeof t != "function")
      return n;
    const o = t(e, n);
    return o === void 0 ? n : o;
  }
  if (typeof t == "string")
    return function(o, a, c) {
      return o != null && a && typeof a == "string" ? o[a] !== void 0 ? o[a] : io(o, (a = (a = a.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, t, n);
  if (Array.isArray(t))
    return io(e, t, n);
  if (typeof t != "function")
    return n;
  const l = t(e, n);
  return l === void 0 ? n : l;
}
function ae(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${t}` : void 0;
}
function Sl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Ut(e) {
  if (e && "$el" in e) {
    const t = e.$el;
    return (t == null ? void 0 : t.nodeType) === Node.TEXT_NODE ? t.nextElementSibling : t;
  }
  return e;
}
const ro = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function vl(e, t) {
  return t.every((n) => e.hasOwnProperty(n));
}
function aa(e, t) {
  const n = {}, l = new Set(Object.keys(e));
  for (const o of t)
    l.has(o) && (n[o] = e[o]);
  return n;
}
function so(e, t, n) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    t.some((c) => c instanceof RegExp ? c.test(a) : c === a) && !(n != null && n.some((c) => c === a)) ? l[a] = e[a] : o[a] = e[a];
  return [l, o];
}
function zn(e, t) {
  const n = { ...e };
  return t.forEach((l) => delete n[l]), n;
}
const ia = /^on[^a-z]/, Bl = (e) => ia.test(e), zi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function kt(e) {
  const [t, n] = so(e, [ia]), l = zn(t, zi), [o, a] = so(n, ["class", "style", "id", /^data-/]);
  return Object.assign(o, t), Object.assign(a, l), [o, a];
}
function pn(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Gn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(t, Math.min(n, e));
}
function uo(e, t) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, t - e.length));
}
function Nn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in t) {
    const a = e[o], c = t[o];
    Sl(a) && Sl(c) ? l[o] = Nn(a, c, n) : Array.isArray(a) && Array.isArray(c) && n ? l[o] = n(a, c) : l[o] = c;
  }
  return l;
}
function ra(e) {
  return e.map((t) => t.type === Fe ? ra(t.children) : t).flat();
}
function wn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (wn.cache.has(e))
    return wn.cache.get(e);
  const t = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return wn.cache.set(e, t), t;
}
function Rt(e, t) {
  if (!t || typeof t != "object")
    return [];
  if (Array.isArray(t))
    return t.map((n) => Rt(e, n)).flat(1);
  if (Array.isArray(t.children))
    return t.children.map((n) => Rt(e, n)).flat(1);
  if (t.component) {
    if (Object.getOwnPropertySymbols(t.component.provides).includes(e))
      return [t.component];
    if (t.component.subTree)
      return Rt(e, t.component.subTree).flat(1);
  }
  return [];
}
function Nl(e) {
  const t = ln({}), n = v(e);
  return rn(() => {
    for (const l in n.value)
      t[l] = n.value[l];
  }, { flush: "sync" }), xn(t);
}
function qt(e, t) {
  return e.includes(t);
}
function co(e) {
  return e[2].toLowerCase() + e.slice(3);
}
wn.cache = /* @__PURE__ */ new Map();
const an = () => [Function, Array];
function po(e, t) {
  return !!(e[t = "on" + Qo(t)] || e[`${t}Once`] || e[`${t}Capture`] || e[`${t}OnceCapture`] || e[`${t}CaptureOnce`]);
}
function sa(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const o of e)
      o(...n);
  else
    typeof e == "function" && e(...n);
}
function xl(e) {
  let t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const n = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${t ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(n)];
}
function ua(e, t, n) {
  let l, o = e.indexOf(document.activeElement);
  const a = t === "next" ? 1 : -1;
  do
    o += a, l = e[o];
  while ((!l || l.offsetParent == null || !((n == null ? void 0 : n(l)) ?? 1)) && o < e.length && o >= 0);
  return l;
}
function Ht(e, t) {
  var l, o, a, c;
  const n = xl(e);
  if (t)
    if (t === "first")
      (l = n[0]) == null || l.focus();
    else if (t === "last")
      (o = n.at(-1)) == null || o.focus();
    else if (typeof t == "number")
      (a = n[t]) == null || a.focus();
    else {
      const u = ua(n, t);
      u ? u.focus() : Ht(e, t === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = n[0]) == null || c.focus());
}
function Yt(e, t) {
  if (!(Ke && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${t})`)))
    return null;
  try {
    return !!e && e.matches(t);
  } catch {
    return null;
  }
}
function ca(e) {
  return e.some((t) => !Si(t) || t.type !== Bi && (t.type !== Fe || ca(t.children))) ? e : null;
}
const da = ["top", "bottom"], Di = ["start", "end", "left", "right"];
function kl(e, t) {
  let [n, l] = e.split(" ");
  return l || (l = qt(da, n) ? "start" : qt(Di, n) ? "top" : "center"), { side: vo(n, t), align: vo(l, t) };
}
function vo(e, t) {
  return e === "start" ? t ? "right" : "left" : e === "end" ? t ? "left" : "right" : e;
}
function fl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function yl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function fo(e) {
  return { side: e.align, align: e.side };
}
function yo(e) {
  return qt(da, e.side) ? "y" : "x";
}
class Fn {
  constructor(t) {
    let { x: n, y: l, width: o, height: a } = t;
    this.x = n, this.y = l, this.width = o, this.height = a;
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
function mo(e, t) {
  return { x: { before: Math.max(0, t.left - e.left), after: Math.max(0, e.right - t.right) }, y: { before: Math.max(0, t.top - e.top), after: Math.max(0, e.bottom - t.bottom) } };
}
function pa(e) {
  return Array.isArray(e) ? new Fn({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function jl(e) {
  const t = e.getBoundingClientRect(), n = getComputedStyle(e), l = n.transform;
  if (l) {
    let o, a, c, u, s;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), a = +o[0], c = +o[5], u = +o[12], s = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new Fn(t);
      o = l.slice(7, -1).split(/, /), a = +o[0], c = +o[3], u = +o[4], s = +o[5];
    }
    const i = n.transformOrigin, p = t.x - u - (1 - a) * parseFloat(i), y = t.y - s - (1 - c) * parseFloat(i.slice(i.indexOf(" ") + 1)), f = a ? t.width / a : e.offsetWidth + 1, m = c ? t.height / c : e.offsetHeight + 1;
    return new Fn({ x: p, y, width: f, height: m });
  }
  return new Fn(t);
}
function jn(e, t, n) {
  if (e.animate === void 0)
    return { finished: Promise.resolve() };
  let l;
  try {
    l = e.animate(t, n);
  } catch {
    return { finished: Promise.resolve() };
  }
  return l.finished === void 0 && (l.finished = new Promise((o) => {
    l.onfinish = () => {
      o(l);
    };
  })), l;
}
const Dt = /* @__PURE__ */ new WeakMap(), Rn = 2.4, go = 0.2126729, ho = 0.7151522, bo = 0.072175, Li = 0.55, Wi = 0.58, Mi = 0.57, Ri = 0.62, Lt = 0.03, Co = 1.45, Ni = 5e-4, ji = 1.25, Gi = 1.25, Io = 0.078, So = 12.82051282051282, Wt = 0.06, Bo = 1e-3;
function xo(e, t) {
  const n = (e.r / 255) ** Rn, l = (e.g / 255) ** Rn, o = (e.b / 255) ** Rn, a = (t.r / 255) ** Rn, c = (t.g / 255) ** Rn, u = (t.b / 255) ** Rn;
  let s, i = n * go + l * ho + o * bo, p = a * go + c * ho + u * bo;
  if (i <= Lt && (i += (Lt - i) ** Co), p <= Lt && (p += (Lt - p) ** Co), Math.abs(p - i) < Ni)
    return 0;
  if (p > i) {
    const y = (p ** Li - i ** Wi) * ji;
    s = y < Bo ? 0 : y < Io ? y - y * So * Wt : y - Wt;
  } else {
    const y = (p ** Ri - i ** Mi) * Gi;
    s = y > -Bo ? 0 : y > -Io ? y - y * So * Wt : y + Wt;
  }
  return 100 * s;
}
function gt(e) {
  ll(`Vuetify: ${e}`);
}
function ml(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const ko = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Ui = { rgb: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), rgba: (e, t, n, l) => ({ r: e, g: t, b: n, a: l }), hsl: (e, t, n, l) => wo({ h: e, s: t, l: n, a: l }), hsla: (e, t, n, l) => wo({ h: e, s: t, l: n, a: l }), hsv: (e, t, n, l) => ht({ h: e, s: t, v: n, a: l }), hsva: (e, t, n, l) => ht({ h: e, s: t, v: n, a: l }) };
function ft(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && gt(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && ko.test(e)) {
    const { groups: t } = e.match(ko), { fn: n, values: l } = t, o = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(n) ? parseFloat(a) / 100 : parseFloat(a));
    return Ui[n](...o);
  }
  if (typeof e == "string") {
    let t = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(t.length) ? t = t.split("").map((l) => l + l).join("") : [6, 8].includes(t.length) || gt(`'${e}' is not a valid hex(a) color`);
    const n = parseInt(t, 16);
    return (isNaN(n) || n < 0 || n > 4294967295) && gt(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(s) {
        return s.startsWith("#") && (s = s.slice(1)), s = s.replace(/([^0-9a-f])/gi, "F"), (s.length === 3 || s.length === 4) && (s = s.split("").map((i) => i + i).join("")), s.length !== 6 && (s = uo(uo(s, 6), 8, "F")), s;
      }(l);
      let [o, a, c, u] = function(s) {
        let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const p = [];
        let y = 0;
        for (; y < s.length; )
          p.push(s.substr(y, i)), y += i;
        return p;
      }(l, 2).map((s) => parseInt(s, 16));
      return u = u === void 0 ? u : u / 255, { r: o, g: a, b: c, a: u };
    }(t);
  }
  if (typeof e == "object") {
    if (vl(e, ["r", "g", "b"]))
      return e;
    if (vl(e, ["h", "s", "l"]))
      return ht(va(e));
    if (vl(e, ["h", "s", "v"]))
      return ht(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function ht(e) {
  const { h: t, s: n, v: l, a: o } = e, a = (u) => {
    const s = (u + t / 60) % 6;
    return l - l * n * Math.max(Math.min(s, 4 - s, 1), 0);
  }, c = [a(5), a(3), a(1)].map((u) => Math.round(255 * u));
  return { r: c[0], g: c[1], b: c[2], a: o };
}
function wo(e) {
  return ht(va(e));
}
function va(e) {
  const { h: t, s: n, l, a: o } = e, a = l + n * Math.min(l, 1 - l);
  return { h: t, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: o };
}
const Xt = Symbol.for("vuetify:defaults");
function Gl() {
  const e = me(Xt);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function et(e, t) {
  const n = Gl(), l = D(e), o = v(() => {
    if (r(t == null ? void 0 : t.disabled))
      return n.value;
    const a = r(t == null ? void 0 : t.scoped), c = r(t == null ? void 0 : t.reset), u = r(t == null ? void 0 : t.root);
    if (l.value == null && !(a || c || u))
      return n.value;
    let s = Nn(l.value, { prev: n.value });
    if (a)
      return s;
    if (c || u) {
      const i = Number(c || 1 / 0);
      for (let p = 0; p <= i && s && "prev" in s; p++)
        s = s.prev;
      return s && typeof u == "string" && u in s && (s = Nn(Nn(s, { prev: s }), s[u])), s;
    }
    return s.prev ? Nn(s.prev, s) : s;
  });
  return nn(Xt, o), o;
}
function qi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Gl();
  const l = Le("useDefaults");
  if (t = t ?? l.type.name ?? l.type.__name, !t)
    throw new Error("[Vuetify] Could not determine component name");
  const o = v(() => {
    var u;
    return (u = n.value) == null ? void 0 : u[e._as ?? t];
  }), a = new Proxy(e, { get(u, s) {
    var p, y, f, m;
    const i = Reflect.get(u, s);
    return s === "class" || s === "style" ? [(p = o.value) == null ? void 0 : p[s], i].filter((h) => h != null) : typeof s != "string" || function(h, b) {
      var g, C;
      return ((g = h.props) == null ? void 0 : g[b]) !== void 0 || ((C = h.props) == null ? void 0 : C[wn(b)]) !== void 0;
    }(l.vnode, s) ? i : ((y = o.value) == null ? void 0 : y[s]) ?? ((m = (f = n.value) == null ? void 0 : f.global) == null ? void 0 : m[s]) ?? i;
  } }), c = de();
  return rn(() => {
    if (o.value) {
      const u = Object.entries(o.value).filter((s) => {
        let [i] = s;
        return i.startsWith(i[0].toUpperCase());
      });
      c.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      c.value = void 0;
  }), { props: a, provideSubDefaults: function() {
    const u = function(s) {
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le("injectSelf");
      const { provides: p } = i;
      if (p && s in p)
        return p[s];
    }(Xt, l);
    nn(Xt, v(() => c.value ? Nn((u == null ? void 0 : u.value) ?? {}, c.value) : u == null ? void 0 : u.value));
  } };
}
function bt(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return gt("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const t = Object.keys(e.props).filter((n) => n !== "class" && n !== "style");
    e.filterProps = function(n) {
      return aa(n, t);
    }, e.props._as = String, e.setup = function(n, l) {
      const o = Gl();
      if (!o.value)
        return e._setup(n, l);
      const { props: a, provideSubDefaults: c } = qi(n, n._as ?? e.name, o), u = e._setup(a, l);
      return c(), u;
    };
  }
  return e;
}
function ne() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (t) => (e ? bt : sn)(t);
}
function wt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", n = arguments.length > 2 ? arguments[2] : void 0;
  return ne()({ name: n ?? Qo(ea(e.replace(/__/g, "-"))), props: { tag: { type: String, default: t }, ...ye() }, setup(l, o) {
    let { slots: a } = o;
    return () => {
      var c;
      return ol(l.tag, { class: [e, l.class], style: l.style }, (c = a.default) == null ? void 0 : c.call(a));
    };
  } });
}
function fa(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const t = e.getRootNode();
  return t !== document && t.getRootNode({ composed: !0 }) !== document ? null : t;
}
const Kt = "cubic-bezier(0.4, 0, 0.2, 1)";
function Le(e, t) {
  const n = xi();
  if (!n)
    throw new Error(`[Vuetify] ${e} ${t || "must be called from inside a setup function"}`);
  return n;
}
function un() {
  const e = Le(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return wn((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ya = 0, Nt = /* @__PURE__ */ new WeakMap();
function tn() {
  const e = Le("getUid");
  if (Nt.has(e))
    return Nt.get(e);
  {
    const t = ya++;
    return Nt.set(e, t), t;
  }
}
function ma(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (t ? Hi(e) : Ul(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Jt(e, t) {
  const n = [];
  if (t && e && !t.contains(e))
    return n;
  for (; e && (Ul(e) && n.push(e), e !== t); )
    e = e.parentElement;
  return n;
}
function Ul(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return t.overflowY === "scroll" || t.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Hi(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const t = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(t.overflowY);
}
function se(e) {
  Le("useRender").render = e;
}
function ql(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const n = D(), l = D();
  if (Ke) {
    const o = new ResizeObserver((a) => {
      e == null || e(a, o), a.length && (l.value = t === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    mn(() => {
      o.disconnect();
    }), K(n, (a, c) => {
      c && (o.unobserve(Ut(c)), l.value = void 0), a && o.observe(Ut(a));
    }, { flush: "post" });
  }
  return { resizeRef: n, contentRect: zl(l) };
}
function Vn(e, t) {
  let n;
  function l() {
    n = Dl(), n.run(() => t.length ? t(() => {
      n == null || n.stop(), l();
    }) : t());
  }
  K(e, (o) => {
    o && !n ? l() : o || (n == null || n.stop(), n = void 0);
  }, { immediate: !0 }), He(() => {
    n == null || n.stop();
  });
}
function $e(e, t, n) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (p) => p, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (p) => p;
  const a = Le("useProxiedModel"), c = D(e[t] !== void 0 ? e[t] : n), u = wn(t), s = v(u !== t ? () => {
    var p, y, f, m;
    return e[t], !(!((p = a.vnode.props) != null && p.hasOwnProperty(t)) && !((y = a.vnode.props) != null && y.hasOwnProperty(u)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${t}`)) && !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${u}`)));
  } : () => {
    var p, y;
    return e[t], !(!((p = a.vnode.props) != null && p.hasOwnProperty(t)) || !((y = a.vnode.props) != null && y.hasOwnProperty(`onUpdate:${t}`)));
  });
  Vn(() => !s.value, () => {
    K(() => e[t], (p) => {
      c.value = p;
    });
  });
  const i = v({ get() {
    const p = e[t];
    return l(s.value ? p : c.value);
  }, set(p) {
    const y = o(p), f = Sn(s.value ? e[t] : c.value);
    f !== y && l(f) !== p && (c.value = y, a == null || a.emit(`update:${t}`, y));
  } });
  return Object.defineProperty(i, "externalValue", { get: () => s.value ? e[t] : c.value }), i;
}
tn.reset = () => {
  ya = 0, Nt = /* @__PURE__ */ new WeakMap();
};
const ga = Symbol.for("vuetify:locale");
function Hl() {
  const e = me(ga);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Ft() {
  const e = me(ga);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Fo = Symbol.for("vuetify:theme"), Ne = H({ theme: String }, "theme");
function Xe(e) {
  Le("provideTheme");
  const t = me(Fo, null);
  if (!t)
    throw new Error("Could not find Vuetify theme injection");
  const n = v(() => e.theme ?? t.name.value), l = v(() => t.themes.value[n.value]), o = v(() => t.isDisabled ? void 0 : `v-theme--${n.value}`), a = { ...t, name: n, current: l, themeClasses: o };
  return nn(Fo, a), a;
}
const en = H({ tag: { type: String, default: "div" } }, "tag"), Yi = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Je(e, t, n) {
  return ne()({ name: e, props: Yi({ mode: n, origin: t }), setup(l, o) {
    let { slots: a } = o;
    const c = { onBeforeEnter(u) {
      l.origin && (u.style.transformOrigin = l.origin);
    }, onLeave(u) {
      if (l.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: i, offsetWidth: p, offsetHeight: y } = u;
        u._transitionInitialStyles = { position: u.style.position, top: u.style.top, left: u.style.left, width: u.style.width, height: u.style.height }, u.style.position = "absolute", u.style.top = `${s}px`, u.style.left = `${i}px`, u.style.width = `${p}px`, u.style.height = `${y}px`;
      }
      l.hideOnLeave && u.style.setProperty("display", "none", "important");
    }, onAfterLeave(u) {
      if (l.leaveAbsolute && (u != null && u._transitionInitialStyles)) {
        const { position: s, top: i, left: p, width: y, height: f } = u._transitionInitialStyles;
        delete u._transitionInitialStyles, u.style.position = s || "", u.style.top = i || "", u.style.left = p || "", u.style.width = y || "", u.style.height = f || "";
      }
    } };
    return () => {
      const u = l.group ? ki : An;
      return ol(u, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, a.default);
    };
  } });
}
function ha(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ne()({ name: e, props: { mode: { type: String, default: n }, disabled: Boolean }, setup(l, o) {
    let { slots: a } = o;
    return () => ol(An, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : t }, a.default);
  } });
}
function ba() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", n = ea(`offset-${t}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [t]: a.style[t] };
  }, onEnter(a) {
    const c = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const u = `${a[n]}px`;
    a.style[t] = "0", a.offsetHeight, a.style.transition = c.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[t] = u;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [t]: a.style[t] }, a.style.overflow = "hidden", a.style[t] = `${a[n]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[t] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), o(a);
  }
  function o(a) {
    const c = a._initialStyle[t];
    a.style.overflow = a._initialStyle.overflow, c != null && (a.style[t] = c), delete a._initialStyle;
  }
}
const Xi = H({ target: [Object, Array] }, "v-dialog-transition"), Ca = ne()({ name: "VDialogTransition", props: Xi(), setup(e, t) {
  let { slots: n } = t;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), o.style.visibility = "";
    const { x: c, y: u, sx: s, sy: i, speed: p } = Ao(e.target, o), y = jn(o, [{ transform: `translate(${c}px, ${u}px) scale(${s}, ${i})`, opacity: 0 }, {}], { duration: 225 * p, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = Vo(o)) == null || f.forEach((m) => {
      jn(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * p, easing: Kt });
    }), y.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var y;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: c, y: u, sx: s, sy: i, speed: p } = Ao(e.target, o);
    jn(o, [{}, { transform: `translate(${c}px, ${u}px) scale(${s}, ${i})`, opacity: 0 }], { duration: 125 * p, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (y = Vo(o)) == null || y.forEach((f) => {
      jn(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * p, easing: Kt });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(An, Z({ name: "dialog-transition" }, l, { css: !1 }), n) : d(An, { name: "dialog-transition" }, n);
} });
function Vo(e) {
  var n;
  const t = (n = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : n.children;
  return t && [...t];
}
function Ao(e, t) {
  const n = pa(e), l = jl(t), [o, a] = getComputedStyle(t).transformOrigin.split(" ").map((C) => parseFloat(C)), [c, u] = getComputedStyle(t).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = n.left + n.width / 2;
  c === "left" || u === "left" ? s -= n.width / 2 : c !== "right" && u !== "right" || (s += n.width / 2);
  let i = n.top + n.height / 2;
  c === "top" || u === "top" ? i -= n.height / 2 : c !== "bottom" && u !== "bottom" || (i += n.height / 2);
  const p = n.width / l.width, y = n.height / l.height, f = Math.max(1, p, y), m = p / f || 0, h = y / f || 0, b = l.width * l.height / (window.innerWidth * window.innerHeight), g = b > 0.12 ? Math.min(1.5, 10 * (b - 0.12) + 1) : 1;
  return { x: s - (o + l.left), y: i - (a + l.top), sx: m, sy: h, speed: g };
}
Je("fab-transition", "center center", "out-in"), Je("dialog-bottom-transition"), Je("dialog-top-transition"), Je("fade-transition");
const Ki = Je("scale-transition");
Je("scroll-x-transition"), Je("scroll-x-reverse-transition"), Je("scroll-y-transition"), Je("scroll-y-reverse-transition"), Je("slide-x-transition"), Je("slide-x-reverse-transition");
const Ia = Je("slide-y-transition");
Je("slide-y-reverse-transition");
const Ji = ha("expand-transition", ba()), Sa = ha("expand-x-transition", ba("", !0)), Zi = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), je = ne(!1)({ name: "VDefaultsProvider", props: Zi(), setup(e, t) {
  let { slots: n } = t;
  const { defaults: l, disabled: o, reset: a, root: c, scoped: u } = xn(e);
  return et(l, { reset: a, root: c, scoped: u, disabled: o }), () => {
    var s;
    return (s = n.default) == null ? void 0 : s.call(n);
  };
} }), Dn = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Ln(e) {
  return { dimensionStyles: v(() => ({ height: ae(e.height), maxHeight: ae(e.maxHeight), maxWidth: ae(e.maxWidth), minHeight: ae(e.minHeight), minWidth: ae(e.minWidth), width: ae(e.width) })) };
}
const Ba = H({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ye(), ...Dn() }, "VResponsive"), _o = ne()({ name: "VResponsive", props: Ba(), setup(e, t) {
  let { slots: n } = t;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: v(() => {
      const c = Number(a.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Ln(e);
  return se(() => {
    var a;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (a = n.additional) == null ? void 0 : a.call(n), n.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [n.default()])]);
  }), {};
} }), Vt = H({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), In = (e, t) => {
  let { slots: n } = t;
  const { transition: l, disabled: o, ...a } = e, { component: c = An, ...u } = typeof l == "object" ? l : {};
  return ol(c, Z(typeof l == "string" ? { name: o ? "" : l } : u, a, { disabled: o }), n);
};
function Oo(e, t) {
  var l;
  const n = (l = e._observe) == null ? void 0 : l[t.instance.$.uid];
  n && (n.observer.unobserve(e), delete e._observe[t.instance.$.uid]);
}
const Yl = { mounted: function(e, t) {
  if (!Rl)
    return;
  const n = t.modifiers || {}, l = t.value, { handler: o, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var y;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const i = (y = e._observe) == null ? void 0 : y[t.instance.$.uid];
    if (!i)
      return;
    const p = u.some((f) => f.isIntersecting);
    !o || n.quiet && !i.init || n.once && !p && !i.init || o(p, u, s), p && n.once ? Oo(e, t) : i.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[t.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: Oo }, Qi = H({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Ba(), ...ye(), ...Vt() }, "VImg"), xa = ne()({ name: "VImg", directives: { intersect: Yl }, props: Qi(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, t) {
  let { emit: n, slots: l } = t;
  const o = Le("VImg"), a = de(""), c = D(), u = de(e.eager ? "loading" : "idle"), s = de(), i = de(), p = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => p.value.aspect || s.value / i.value || 0);
  function f(S) {
    if ((!e.eager || !S) && (!Rl || S || e.eager)) {
      if (u.value = "loading", p.value.lazySrc) {
        const A = new Image();
        A.src = p.value.lazySrc, C(A, null);
      }
      p.value.src && Me(() => {
        var A;
        n("loadstart", ((A = c.value) == null ? void 0 : A.currentSrc) || p.value.src), setTimeout(() => {
          var I;
          if (!o.isUnmounted)
            if ((I = c.value) != null && I.complete) {
              if (c.value.naturalWidth || h(), u.value === "error")
                return;
              y.value || C(c.value, null), u.value === "loading" && m();
            } else
              y.value || C(c.value), b();
        });
      });
    }
  }
  function m() {
    var S;
    o.isUnmounted || (b(), C(c.value), u.value = "loaded", n("load", ((S = c.value) == null ? void 0 : S.currentSrc) || p.value.src));
  }
  function h() {
    var S;
    o.isUnmounted || (u.value = "error", n("error", ((S = c.value) == null ? void 0 : S.currentSrc) || p.value.src));
  }
  function b() {
    const S = c.value;
    S && (a.value = S.currentSrc || S.src);
  }
  K(() => e.src, () => {
    f(u.value !== "idle");
  }), K(y, (S, A) => {
    !S && A && c.value && C(c.value);
  }), na(() => f());
  let g = -1;
  function C(S) {
    let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const I = () => {
      if (clearTimeout(g), o.isUnmounted)
        return;
      const { naturalHeight: F, naturalWidth: _ } = S;
      F || _ ? (s.value = _, i.value = F) : S.complete || u.value !== "loading" || A == null ? (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : g = window.setTimeout(I, A);
    };
    I();
  }
  mn(() => {
    clearTimeout(g);
  });
  const w = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), O = () => {
    var I;
    if (!p.value.src || u.value === "idle")
      return null;
    const S = d("img", { class: ["v-img__img", w.value], style: { objectPosition: e.position }, src: p.value.src, srcset: p.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: m, onError: h }, null), A = (I = l.sources) == null ? void 0 : I.call(l);
    return d(In, { transition: e.transition, appear: !0 }, { default: () => [Ue(A ? d("picture", { class: "v-img__picture" }, [A, S]) : S, [[Hn, u.value === "loaded"]])] });
  }, G = () => d(In, { transition: e.transition }, { default: () => [p.value.lazySrc && u.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", w.value], style: { objectPosition: e.position }, src: p.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), T = () => l.placeholder ? d(In, { transition: e.transition, appear: !0 }, { default: () => [(u.value === "loading" || u.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, $ = () => l.error ? d(In, { transition: e.transition, appear: !0 }, { default: () => [u.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, R = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, P = de(!1);
  {
    const S = K(y, (A) => {
      A && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          P.value = !0;
        });
      }), S());
    });
  }
  return se(() => {
    const S = _o.filterProps(e);
    return Ue(d(_o, Z({ class: ["v-img", { "v-img--booting": !P.value }, e.class], style: [{ width: ae(e.width === "auto" ? s.value : e.width) }, e.style] }, S, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(Fe, null, [d(O, null, null), d(G, null, null), d(R, null, null), d(T, null, null), d($, null, null)]), default: l.default }), [[gn("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: c, state: u, naturalWidth: s, naturalHeight: i };
} }), nt = H({ border: [Boolean, Number, String] }, "border");
function tt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return { borderClasses: v(() => {
    const n = On(e) ? e.value : e.border, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--border`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
function Xl(e) {
  return Nl(() => {
    const t = [], n = {};
    if (e.value.background)
      if (ml(e.value.background)) {
        if (n.backgroundColor = e.value.background, !e.value.text && ml(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = ft(e.value.background);
          if (o.a == null || o.a === 1) {
            const a = function(c) {
              const u = Math.abs(xo(ft(0), ft(c)));
              return Math.abs(xo(ft(16777215), ft(c))) > Math.min(u, 50) ? "#fff" : "#000";
            }(o);
            n.color = a, n.caretColor = a;
          }
        }
      } else
        t.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (ml(e.value.text) ? (n.color = e.value.text, n.caretColor = e.value.text) : t.push(`text-${e.value.text}`)), { colorClasses: t, colorStyles: n };
  });
}
function yn(e, t) {
  const n = v(() => ({ text: On(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = Xl(n);
  return { textColorClasses: l, textColorStyles: o };
}
function Un(e, t) {
  const n = v(() => ({ background: On(e) ? e.value : t ? e[t] : null })), { colorClasses: l, colorStyles: o } = Xl(n);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const lt = H({ elevation: { type: [Number, String], validator(e) {
  const t = parseInt(e);
  return !isNaN(t) && t >= 0 && t <= 24;
} } }, "elevation");
function ot(e) {
  return { elevationClasses: v(() => {
    const t = On(e) ? e.value : e.elevation, n = [];
    return t == null || n.push(`elevation-${t}`), n;
  }) };
}
const hn = H({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function bn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return { roundedClasses: v(() => {
    const n = On(e) ? e.value : e.rounded, l = [];
    if (n === !0 || n === "")
      l.push(`${t}--rounded`);
    else if (typeof n == "string" || n === 0)
      for (const o of String(n).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const er = [null, "default", "comfortable", "compact"], cn = H({ density: { type: String, default: "default", validator: (e) => er.includes(e) } }, "density");
function Cn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return { densityClasses: v(() => `${t}--density-${e.density}`) };
}
const nr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function At(e, t) {
  return d(Fe, null, [e && d("span", { key: "overlay", class: `${t}__overlay` }, null), d("span", { key: "underlay", class: `${t}__underlay` }, null)]);
}
const kn = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => nr.includes(e) } }, "variant");
function _t(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  const n = v(() => {
    const { variant: a } = r(e);
    return `${t}--variant-${a}`;
  }), { colorClasses: l, colorStyles: o } = Xl(v(() => {
    const { variant: a, color: c } = r(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: n };
}
const ka = H({ divided: Boolean, ...nt(), ...ye(), ...cn(), ...lt(), ...hn(), ...en(), ...Ne(), ...kn() }, "VBtnGroup"), Po = ne()({ name: "VBtnGroup", props: ka(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Xe(e), { densityClasses: o } = Cn(e), { borderClasses: a } = tt(e), { elevationClasses: c } = ot(e), { roundedClasses: u } = bn(e);
  et({ VBtn: { height: "auto", color: oe(e, "color"), density: oe(e, "density"), flat: !0, variant: oe(e, "variant") } }), se(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, o.value, c.value, u.value, e.class], style: e.style }, n));
} }), wa = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Fa = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Va(e, t) {
  let n = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Le("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = tn();
  nn(Symbol.for(`${t.description}:id`), o);
  const a = me(t, null);
  if (!a) {
    if (!n)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`);
  }
  const c = oe(e, "value"), u = v(() => !(!a.disabled.value && !e.disabled));
  a.register({ id: o, value: c, disabled: u }, l), mn(() => {
    a.unregister(o);
  });
  const s = v(() => a.isSelected(o)), i = v(() => s.value && [a.selectedClass.value, e.selectedClass]);
  return K(s, (p) => {
    l.emit("group:selected", { value: p });
  }), { id: o, isSelected: s, toggle: () => a.select(o, !s.value), select: (p) => a.select(o, p), selectedClass: i, value: c, disabled: u, group: a };
}
function Aa(e, t) {
  let n = !1;
  const l = ln([]), o = $e(e, "modelValue", [], (i) => i == null ? [] : $o(l, pn(i)), (i) => {
    const p = function(y, f) {
      const m = [];
      return f.forEach((h) => {
        const b = y.findIndex((g) => g.id === h);
        if (~b) {
          const g = y[b];
          m.push(g.value != null ? g.value : b);
        }
      }), m;
    }(l, i);
    return e.multiple ? p : p[0];
  }), a = Le("useGroup");
  function c() {
    const i = l.find((p) => !p.disabled);
    i && e.mandatory === "force" && !o.value.length && (o.value = [i.id]);
  }
  function u(i) {
    if (e.multiple && gt('This method is not supported when using "multiple" prop'), o.value.length) {
      const p = o.value[0], y = l.findIndex((h) => h.id === p);
      let f = (y + i) % l.length, m = l[f];
      for (; m.disabled && f !== y; )
        f = (f + i) % l.length, m = l[f];
      if (m.disabled)
        return;
      o.value = [l[f].id];
    } else {
      const p = l.find((y) => !y.disabled);
      p && (o.value = [p.id]);
    }
  }
  Yn(() => {
    c();
  }), mn(() => {
    n = !0;
  });
  const s = { register: function(i, p) {
    const y = i, f = Rt(Symbol.for(`${t.description}:id`), a == null ? void 0 : a.vnode).indexOf(p);
    f > -1 ? l.splice(f, 0, y) : l.push(y);
  }, unregister: function(i) {
    if (n)
      return;
    c();
    const p = l.findIndex((y) => y.id === i);
    l.splice(p, 1);
  }, selected: o, select: function(i, p) {
    const y = l.find((f) => f.id === i);
    if (!p || !(y != null && y.disabled))
      if (e.multiple) {
        const f = o.value.slice(), m = f.findIndex((b) => b === i), h = ~m;
        if (p = p ?? !h, h && e.mandatory && f.length <= 1 || !h && e.max != null && f.length + 1 > e.max)
          return;
        m < 0 && p ? f.push(i) : m >= 0 && !p && f.splice(m, 1), o.value = f;
      } else {
        const f = o.value.includes(i);
        if (e.mandatory && f)
          return;
        o.value = p ?? !f ? [i] : [];
      }
  }, disabled: oe(e, "disabled"), prev: () => u(l.length - 1), next: () => u(1), isSelected: (i) => o.value.includes(i), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (i) => function(p, y) {
    const f = $o(p, [y]);
    return f.length ? p.findIndex((m) => m.id === f[0]) : -1;
  }(l, i) };
  return nn(t, s), s;
}
function $o(e, t) {
  const n = [];
  return t.forEach((l) => {
    const o = e.find((c) => Qn(l, c.value)), a = e[l];
    (o == null ? void 0 : o.value) != null ? n.push(o.id) : a != null && n.push(a.id);
  }), n;
}
const _a = Symbol.for("vuetify:v-btn-toggle"), tr = H({ ...ka(), ...wa() }, "VBtnToggle");
ne()({ name: "VBtnToggle", props: tr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { isSelected: l, next: o, prev: a, select: c, selected: u } = Aa(e, _a);
  return se(() => {
    const s = Po.filterProps(e);
    return d(Po, Z({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var i;
      return [(i = n.default) == null ? void 0 : i.call(n, { isSelected: l, next: o, prev: a, select: c, selected: u })];
    } });
  }), { next: o, prev: a, select: c };
} });
const Ce = [String, Function, Object, Array], lr = Symbol.for("vuetify:icons"), Zt = H({ icon: { type: Ce }, tag: { type: String, required: !0 } }, "icon"), Eo = ne()({ name: "VComponentIcon", props: Zt(), setup(e, t) {
  let { slots: n } = t;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(l, null, null) : (o = n.default) == null ? void 0 : o.call(n)];
    } });
  };
} }), or = bt({ name: "VSvgIcon", inheritAttrs: !1, props: Zt(), setup(e, t) {
  let { attrs: n } = t;
  return () => d(e.tag, Z(n, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
bt({ name: "VLigatureIcon", props: Zt(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), bt({ name: "VClassIcon", props: Zt(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const ar = ["x-small", "small", "default", "large", "x-large"], Ot = H({ size: { type: [String, Number], default: "default" } }, "size");
function Pt(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return Nl(() => {
    let n, l;
    return qt(ar, e.size) ? n = `${t}--size-${e.size}` : e.size && (l = { width: ae(e.size), height: ae(e.size) }), { sizeClasses: n, sizeStyles: l };
  });
}
const ir = H({ color: String, start: Boolean, end: Boolean, icon: Ce, ...ye(), ...Ot(), ...en({ tag: "i" }), ...Ne() }, "VIcon"), Se = ne()({ name: "VIcon", props: ir(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = D(), { themeClasses: a } = Xe(e), { iconData: c } = ((p) => {
    const y = me(lr);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var g;
      const f = r(p);
      if (!f)
        return { component: Eo };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (g = y.aliases) == null ? void 0 : g[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: or, icon: m };
      if (typeof m != "string")
        return { component: Eo, icon: m };
      const h = Object.keys(y.sets).find((C) => typeof m == "string" && m.startsWith(`${C}:`)), b = h ? m.slice(h.length + 1) : m;
      return { component: y.sets[h ?? y.defaultSet].component, icon: b };
    }) };
  })(v(() => o.value || e.icon)), { sizeClasses: u } = Pt(e), { textColorClasses: s, textColorStyles: i } = yn(oe(e, "color"));
  return se(() => {
    var y, f;
    const p = (y = l.default) == null ? void 0 : y.call(l);
    return p && (o.value = (f = ra(p).filter((m) => m.type === wi && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", a.value, u.value, s.value, { "v-icon--clickable": !!n.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [u.value ? void 0 : { fontSize: ae(e.size), height: ae(e.size), width: ae(e.size) }, i.value, e.style], role: n.onClick ? "button" : void 0, "aria-hidden": !n.onClick }, { default: () => [p] });
  }), {};
} });
function Oa(e, t) {
  const n = D(), l = de(!1);
  if (Rl) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), l.value = !!a.find((c) => c.isIntersecting);
    }, t);
    mn(() => {
      o.disconnect();
    }), K(n, (a, c) => {
      c && (o.unobserve(c), l.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: n, isIntersecting: l };
}
const rr = H({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ye(), ...Ot(), ...en({ tag: "div" }), ...Ne() }, "VProgressCircular"), Pa = ne()({ name: "VProgressCircular", props: rr(), setup(e, t) {
  let { slots: n } = t;
  const l = 2 * Math.PI * 20, o = D(), { themeClasses: a } = Xe(e), { sizeClasses: c, sizeStyles: u } = Pt(e), { textColorClasses: s, textColorStyles: i } = yn(oe(e, "color")), { textColorClasses: p, textColorStyles: y } = yn(oe(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = Oa(), { resizeRef: h, contentRect: b } = ql(), g = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), C = v(() => Number(e.width)), w = v(() => u.value ? Number(e.size) : b.value ? b.value.width : Math.max(C.value, 32)), O = v(() => 20 / (1 - C.value / w.value) * 2), G = v(() => C.value / w.value * O.value), T = v(() => ae((100 - g.value) / 100 * l));
  return rn(() => {
    f.value = o.value, h.value = o.value;
  }), se(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, c.value, s.value, e.class], style: [u.value, i.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${O.value} ${O.value}` }, [d("circle", { class: ["v-progress-circular__underlay", p.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": G.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": G.value, "stroke-dasharray": l, "stroke-dashoffset": T.value }, null)]), n.default && d("div", { class: "v-progress-circular__content" }, [n.default({ value: g.value })])] })), {};
} }), To = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Kl = H({ location: String }, "location");
function Jl(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], n = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Ft();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: a, align: c } = kl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function u(i) {
      return n ? n(i) : 0;
    }
    const s = {};
    return a !== "center" && (t ? s[To[a]] = `calc(100% - ${u(a)}px)` : s[a] = 0), c !== "center" ? t ? s[To[c]] = `calc(100% - ${u(c)}px)` : s[c] = 0 : (a === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), s;
  }) };
}
const sr = H({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ye(), ...Kl({ location: "top" }), ...hn(), ...en(), ...Ne() }, "VProgressLinear"), ur = ne()({ name: "VProgressLinear", props: sr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = $e(e, "modelValue"), { isRtl: o, rtlClasses: a } = Ft(), { themeClasses: c } = Xe(e), { locationStyles: u } = Jl(e), { textColorClasses: s, textColorStyles: i } = yn(e, "color"), { backgroundColorClasses: p, backgroundColorStyles: y } = Un(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = Un(e, "color"), { roundedClasses: h } = bn(e), { intersectionRef: b, isIntersecting: g } = Oa(), C = v(() => parseInt(e.max, 10)), w = v(() => parseInt(e.height, 10)), O = v(() => parseFloat(e.bufferValue) / C.value * 100), G = v(() => parseFloat(l.value) / C.value * 100), T = v(() => o.value !== e.reverse), $ = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), R = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function P(S) {
    if (!b.value)
      return;
    const { left: A, right: I, width: F } = b.value.getBoundingClientRect(), _ = T.value ? F - S.clientX + (I - F) : S.clientX - A;
    l.value = Math.round(_ / F * C.value);
  }
  return se(() => d(e.tag, { ref: b, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": T.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, c.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ae(w.value) : 0, "--v-progress-linear-height": ae(w.value), ...u.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : G.value, onClick: e.clickable && P }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", s.value], style: { ...i.value, [T.value ? "left" : "right"]: ae(-w.value), borderTop: `${ae(w.value / 2)} dotted`, opacity: R.value, top: `calc(50% - ${ae(w.value / 4)})`, width: ae(100 - O.value, "%"), "--v-progress-linear-stream-to": ae(w.value * (T.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", p.value], style: [y.value, { opacity: R.value, width: ae(e.stream ? O.value : 100, "%") }] }, null), d(An, { name: $.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((S) => d("div", { key: S, class: ["v-progress-linear__indeterminate", S, f.value], style: m.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: ae(G.value, "%") }] }, null)] }), n.default && d("div", { class: "v-progress-linear__content" }, [n.default({ value: G.value, buffer: O.value })])] })), {};
} }), Zl = H({ loading: [Boolean, String] }, "loader");
function al(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return { loaderClasses: v(() => ({ [`${t}--loading`]: e.loading })) };
}
function Ql(e, t) {
  var l;
  let { slots: n } = t;
  return d("div", { class: `${e.name}__loader` }, [((l = n.default) == null ? void 0 : l.call(n, { color: e.color, isActive: e.active })) || d(ur, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const cr = ["static", "relative", "fixed", "absolute", "sticky"], $a = H({ position: { type: String, validator: (e) => cr.includes(e) } }, "position");
function Ea(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  return { positionClasses: v(() => e.position ? `${t}--${e.position}` : void 0) };
}
function il(e, t) {
  const n = Fi("RouterLink"), l = v(() => !(!e.href && !e.to)), o = v(() => (l == null ? void 0 : l.value) || po(t, "click") || po(e, "click"));
  if (typeof n == "string")
    return { isLink: l, isClickable: o, href: oe(e, "href") };
  const a = e.to ? n.useLink(e) : void 0, c = function() {
    const u = Le("useRoute");
    return v(() => {
      var s;
      return (s = u == null ? void 0 : u.proxy) == null ? void 0 : s.$route;
    });
  }();
  return { isLink: l, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && v(() => {
    var u, s, i;
    return e.exact ? c.value ? ((u = a.isExactActive) == null ? void 0 : u.value) && Qn(a.route.value.query, c.value.query) : (s = a.isExactActive) == null ? void 0 : s.value : (i = a.isActive) == null ? void 0 : i.value;
  }), href: v(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const rl = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let gl = !1;
const wl = Symbol("rippleStop"), dr = 80;
function zo(e, t) {
  e.style.transform = t, e.style.webkitTransform = t;
}
function Fl(e) {
  return e.constructor.name === "TouchEvent";
}
function Ta(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Qt = { show(e, t) {
  var m;
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = t == null ? void 0 : t._ripple) != null && m.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", n.class && (l.className += ` ${n.class}`);
  const { radius: a, scale: c, x: u, y: s, centerX: i, centerY: p } = function(h, b) {
    var R;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = 0, w = 0;
    if (!Ta(h)) {
      const P = b.getBoundingClientRect(), S = Fl(h) ? h.touches[h.touches.length - 1] : h;
      C = S.clientX - P.left, w = S.clientY - P.top;
    }
    let O = 0, G = 0.3;
    (R = b._ripple) != null && R.circle ? (G = 0.15, O = b.clientWidth / 2, O = g.center ? O : O + Math.sqrt((C - O) ** 2 + (w - O) ** 2) / 4) : O = Math.sqrt(b.clientWidth ** 2 + b.clientHeight ** 2) / 2;
    const T = (b.clientWidth - 2 * O) / 2 + "px", $ = (b.clientHeight - 2 * O) / 2 + "px";
    return { radius: O, scale: G, x: g.center ? T : C - O + "px", y: g.center ? $ : w - O + "px", centerX: T, centerY: $ };
  }(e, t, n), y = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = y, o.style.height = y, t.appendChild(l);
  const f = window.getComputedStyle(t);
  f && f.position === "static" && (t.style.position = "relative", t.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), zo(o, `translate(${u}, ${s}) scale3d(${c},${c},${c})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), zo(o, `translate(${i}, ${p}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var a;
  if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled))
    return;
  const t = e.getElementsByClassName("v-ripple__animation");
  if (t.length === 0)
    return;
  const n = t[t.length - 1];
  if (n.dataset.isHiding)
    return;
  n.dataset.isHiding = "true";
  const l = performance.now() - Number(n.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    n.classList.remove("v-ripple__animation--in"), n.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var c;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = n.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(n.parentNode);
    }, 300);
  }, o);
} };
function za(e) {
  return e === void 0 || !!e;
}
function Ct(e) {
  const t = {}, n = e.currentTarget;
  if (n != null && n._ripple && !n._ripple.touched && !e[wl]) {
    if (e[wl] = !0, Fl(e))
      n._ripple.touched = !0, n._ripple.isTouch = !0;
    else if (n._ripple.isTouch)
      return;
    if (t.center = n._ripple.centered || Ta(e), n._ripple.class && (t.class = n._ripple.class), Fl(e)) {
      if (n._ripple.showTimerCommit)
        return;
      n._ripple.showTimerCommit = () => {
        Qt.show(e, n, t);
      }, n._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = n == null ? void 0 : n._ripple) != null && l.showTimerCommit && (n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null);
      }, dr);
    } else
      Qt.show(e, n, t);
  }
}
function Do(e) {
  e[wl] = !0;
}
function Ze(e) {
  const t = e.currentTarget;
  if (t != null && t._ripple) {
    if (window.clearTimeout(t._ripple.showTimer), e.type === "touchend" && t._ripple.showTimerCommit)
      return t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null, void (t._ripple.showTimer = window.setTimeout(() => {
        Ze(e);
      }));
    window.setTimeout(() => {
      t._ripple && (t._ripple.touched = !1);
    }), Qt.hide(t);
  }
}
function Da(e) {
  const t = e.currentTarget;
  t != null && t._ripple && (t._ripple.showTimerCommit && (t._ripple.showTimerCommit = null), window.clearTimeout(t._ripple.showTimer));
}
let It = !1;
function La(e) {
  It || e.keyCode !== ro.enter && e.keyCode !== ro.space || (It = !0, Ct(e));
}
function Wa(e) {
  It = !1, Ze(e);
}
function Ma(e) {
  It && (It = !1, Ze(e));
}
function Lo(e, t, n) {
  const { value: l, modifiers: o } = t, a = za(l);
  if (a || Qt.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Sl(l) && l.class && (e._ripple.class = l.class), a && !n) {
    if (o.stop)
      return e.addEventListener("touchstart", Do, { passive: !0 }), void e.addEventListener("mousedown", Do);
    e.addEventListener("touchstart", Ct, { passive: !0 }), e.addEventListener("touchend", Ze, { passive: !0 }), e.addEventListener("touchmove", Da, { passive: !0 }), e.addEventListener("touchcancel", Ze), e.addEventListener("mousedown", Ct), e.addEventListener("mouseup", Ze), e.addEventListener("mouseleave", Ze), e.addEventListener("keydown", La), e.addEventListener("keyup", Wa), e.addEventListener("blur", Ma), e.addEventListener("dragstart", Ze, { passive: !0 });
  } else
    !a && n && Ra(e);
}
function Ra(e) {
  e.removeEventListener("mousedown", Ct), e.removeEventListener("touchstart", Ct), e.removeEventListener("touchend", Ze), e.removeEventListener("touchmove", Da), e.removeEventListener("touchcancel", Ze), e.removeEventListener("mouseup", Ze), e.removeEventListener("mouseleave", Ze), e.removeEventListener("keydown", La), e.removeEventListener("keyup", Wa), e.removeEventListener("dragstart", Ze), e.removeEventListener("blur", Ma);
}
const $t = { mounted: function(e, t) {
  Lo(e, t, !1);
}, unmounted: function(e) {
  delete e._ripple, Ra(e);
}, updated: function(e, t) {
  t.value !== t.oldValue && Lo(e, t, za(t.oldValue));
} }, pr = H({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: _a }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...nt(), ...ye(), ...cn(), ...Dn(), ...lt(), ...Fa(), ...Zl(), ...Kl(), ...$a(), ...hn(), ...rl(), ...Ot(), ...en({ tag: "button" }), ...Ne(), ...kn({ variant: "elevated" }) }, "VBtn"), Wo = ne()({ name: "VBtn", directives: { Ripple: $t }, props: pr(), emits: { "group:selected": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: o } = Xe(e), { borderClasses: a } = tt(e), { colorClasses: c, colorStyles: u, variantClasses: s } = _t(e), { densityClasses: i } = Cn(e), { dimensionStyles: p } = Ln(e), { elevationClasses: y } = ot(e), { loaderClasses: f } = al(e), { locationStyles: m } = Jl(e), { positionClasses: h } = Ea(e), { roundedClasses: b } = bn(e), { sizeClasses: g, sizeStyles: C } = Pt(e), w = Va(e, e.symbol, !1), O = il(e, n), G = v(() => {
    var S;
    return e.active !== void 0 ? e.active : O.isLink.value ? (S = O.isActive) == null ? void 0 : S.value : w == null ? void 0 : w.isSelected.value;
  }), T = v(() => (w == null ? void 0 : w.disabled.value) || e.disabled), $ = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), R = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function P(S) {
    var A;
    T.value || O.isLink.value && (S.metaKey || S.ctrlKey || S.shiftKey || S.button !== 0 || n.target === "_blank") || ((A = O.navigate) == null || A.call(O, S), w == null || w.toggle());
  }
  return function(S, A) {
    K(() => {
      var I;
      return (I = S.isActive) == null ? void 0 : I.value;
    }, (I) => {
      S.isLink.value && I && A && Me(() => {
        A(!0);
      });
    }, { immediate: !0 });
  }(O, w == null ? void 0 : w.select), se(() => {
    var M, N;
    const S = O.isLink.value ? "a" : e.tag, A = !(!e.prependIcon && !l.prepend), I = !(!e.appendIcon && !l.append), F = !(!e.icon || e.icon === !0), _ = (w == null ? void 0 : w.isSelected.value) && (!O.isLink.value || ((M = O.isActive) == null ? void 0 : M.value)) || !w || ((N = O.isActive) == null ? void 0 : N.value);
    return Ue(d(S, { type: S === "a" ? void 0 : "button", class: ["v-btn", w == null ? void 0 : w.selectedClass.value, { "v-btn--active": G.value, "v-btn--block": e.block, "v-btn--disabled": T.value, "v-btn--elevated": $.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, o.value, a.value, _ ? c.value : void 0, i.value, y.value, f.value, h.value, b.value, g.value, s.value, e.class], style: [_ ? u.value : void 0, p.value, m.value, C.value, e.style], disabled: T.value || void 0, href: O.href.value, onClick: P, value: R.value }, { default: () => {
      var k;
      return [At(!0, "v-btn"), !e.icon && A && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(je, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(Se, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && F ? d(Se, { key: "content-icon", icon: e.icon }, null) : d(je, { key: "content-defaults", disabled: !F, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var B;
        return [((B = l.default) == null ? void 0 : B.call(l)) ?? e.text];
      } })]), !e.icon && I && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(je, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(Se, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((k = l.loader) == null ? void 0 : k.call(l)) ?? d(Pa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[gn("ripple"), !T.value && e.ripple, null]]);
  }), {};
} }), vr = H({ text: String, clickable: Boolean, ...ye(), ...Ne() }, "VLabel"), Na = ne()({ name: "VLabel", props: vr(), setup(e, t) {
  let { slots: n } = t;
  return se(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), ja = Symbol.for("vuetify:selection-control-group"), Ga = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Qn }, ...ye(), ...cn(), ...Ne() }, "SelectionControlGroup"), fr = H({ ...Ga({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
ne()({ name: "VSelectionControlGroup", props: fr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = $e(e, "modelValue"), o = tn(), a = v(() => e.id || `v-selection-control-group-${o}`), c = v(() => e.name || a.value), u = /* @__PURE__ */ new Set();
  return nn(ja, { modelValue: l, forceUpdate: () => {
    u.forEach((s) => s());
  }, onForceUpdate: (s) => {
    u.add(s), He(() => {
      u.delete(s);
    });
  } }), et({ [e.defaultsTarget]: { color: oe(e, "color"), disabled: oe(e, "disabled"), density: oe(e, "density"), error: oe(e, "error"), inline: oe(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: oe(e, "falseIcon"), trueIcon: oe(e, "trueIcon"), readonly: oe(e, "readonly"), ripple: oe(e, "ripple"), type: oe(e, "type"), valueComparator: oe(e, "valueComparator") } }), se(() => {
    var s;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(s = n.default) == null ? void 0 : s.call(n)]);
  }), {};
} });
const eo = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ye(), ...Ga() }, "VSelectionControl"), el = ne()({ name: "VSelectionControl", directives: { Ripple: $t }, inheritAttrs: !1, props: eo(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { group: o, densityClasses: a, icon: c, model: u, textColorClasses: s, textColorStyles: i, backgroundColorClasses: p, backgroundColorStyles: y, trueValue: f } = function(T) {
    const $ = me(ja, void 0), { densityClasses: R } = Cn(T), P = $e(T, "modelValue"), S = v(() => T.trueValue !== void 0 ? T.trueValue : T.value === void 0 || T.value), A = v(() => T.falseValue !== void 0 && T.falseValue), I = v(() => !!T.multiple || T.multiple == null && Array.isArray(P.value)), F = v({ get() {
      const x = $ ? $.modelValue.value : P.value;
      return I.value ? pn(x).some((V) => T.valueComparator(V, S.value)) : T.valueComparator(x, S.value);
    }, set(x) {
      if (T.readonly)
        return;
      const V = x ? S.value : A.value;
      let j = V;
      I.value && (j = x ? [...pn(P.value), V] : pn(P.value).filter((L) => !T.valueComparator(L, S.value))), $ ? $.modelValue.value = j : P.value = j;
    } }), { textColorClasses: _, textColorStyles: M } = yn(v(() => {
      if (!T.error && !T.disabled)
        return F.value ? T.color : T.baseColor;
    })), { backgroundColorClasses: N, backgroundColorStyles: k } = Un(v(() => !F.value || T.error || T.disabled ? void 0 : T.color)), B = v(() => F.value ? T.trueIcon : T.falseIcon);
    return { group: $, densityClasses: R, trueValue: S, falseValue: A, model: F, textColorClasses: _, textColorStyles: M, backgroundColorClasses: N, backgroundColorStyles: k, icon: B };
  }(e), m = tn(), h = v(() => e.id || `input-${m}`), b = de(!1), g = de(!1), C = D();
  function w(T) {
    b.value = !0, Yt(T.target, ":focus-visible") !== !1 && (g.value = !0);
  }
  function O() {
    b.value = !1, g.value = !1;
  }
  function G(T) {
    e.readonly && o && Me(() => o.forceUpdate()), u.value = T.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    C.value && (C.value.checked = u.value);
  }), se(() => {
    var S, A;
    const T = l.label ? l.label({ label: e.label, props: { for: h.value } }) : e.label, [$, R] = kt(n), P = d("input", Z({ ref: C, checked: u.value, disabled: !(!e.readonly && !e.disabled), id: h.value, onBlur: O, onFocus: w, onInput: G, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? u.value : void 0 }, R), null);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": u.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": b.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, $, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", s.value], style: i.value }, [(S = l.default) == null ? void 0 : S.call(l, { backgroundColorClasses: p, backgroundColorStyles: y }), Ue(d("div", { class: ["v-selection-control__input"] }, [((A = l.input) == null ? void 0 : A.call(l, { model: u, textColorClasses: s, textColorStyles: i, backgroundColorClasses: p, backgroundColorStyles: y, inputNode: P, icon: c.value, props: { onFocus: w, onBlur: O, id: h.value } })) ?? d(Fe, null, [c.value && d(Se, { key: "icon", icon: c.value }, null), P])]), [[gn("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), T && d(Na, { for: h.value, clickable: !0, onClick: (I) => I.stopPropagation() }, { default: () => [T] })]);
  }), { isFocused: b, input: C };
} }), Ua = H({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ...eo({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Vl = ne()({ name: "VCheckboxBtn", props: Ua(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = $e(e, "indeterminate"), o = $e(e, "modelValue");
  function a(s) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), u = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return se(() => {
    const s = zn(el.filterProps(e), ["modelValue"]);
    return d(el, Z(s, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: u.value, "aria-checked": l.value ? "mixed" : void 0 }), n);
  }), {};
} });
function qa(e) {
  const { t } = Hl();
  return { InputIcon: function(n) {
    let { name: l } = n;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], c = a && o ? t(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(Se, { icon: e[`${l}Icon`], "aria-label": c, onClick: a }, null);
  } };
}
const yr = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ye(), ...Vt({ transition: { component: Ia, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), mr = ne()({ name: "VMessages", props: yr(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => pn(e.messages)), { textColorClasses: o, textColorStyles: a } = yn(v(() => e.color));
  return se(() => d(In, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, u) => d("div", { class: "v-messages__message", key: `${u}-${l.value}` }, [n.message ? n.message({ message: c }) : c]))] })), {};
} }), Ha = H({ focused: Boolean, "onUpdate:focused": an() }, "focus");
function Et(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  const n = $e(e, "focused");
  return { focusClasses: v(() => ({ [`${t}--focused`]: n.value })), isFocused: n, focus: function() {
    n.value = !0;
  }, blur: function() {
    n.value = !1;
  } };
}
const gr = Symbol.for("vuetify:form");
function Ya() {
  return me(gr, null);
}
const hr = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Ha() }, "validation"), Tt = H({ id: String, appendIcon: Ce, centerAffix: { type: Boolean, default: !0 }, prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": an(), "onClick:append": an(), ...ye(), ...cn(), ...hr() }, "VInput"), Bn = ne()({ name: "VInput", props: { ...Tt() }, emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const { densityClasses: a } = Cn(e), { rtlClasses: c } = Ft(), { InputIcon: u } = qa(e), s = tn(), i = v(() => e.id || `input-${s}`), p = v(() => `${i.value}-messages`), { errorMessages: y, isDirty: f, isDisabled: m, isReadonly: h, isPristine: b, isValid: g, isValidating: C, reset: w, resetValidation: O, validate: G, validationClasses: T } = function(P) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un(), A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : tn();
    const I = $e(P, "modelValue"), F = v(() => P.validationValue === void 0 ? I.value : P.validationValue), _ = Ya(), M = D([]), N = de(!0), k = v(() => !(!pn(I.value === "" ? null : I.value).length && !pn(F.value === "" ? null : F.value).length)), B = v(() => !!(P.disabled ?? (_ == null ? void 0 : _.isDisabled.value))), x = v(() => !!(P.readonly ?? (_ == null ? void 0 : _.isReadonly.value))), V = v(() => {
      var Y;
      return (Y = P.errorMessages) != null && Y.length ? pn(P.errorMessages).concat(M.value).slice(0, Math.max(0, +P.maxErrors)) : M.value;
    }), j = v(() => {
      let Y = (P.validateOn ?? (_ == null ? void 0 : _.validateOn.value)) || "input";
      Y === "lazy" && (Y = "input lazy");
      const ee = new Set((Y == null ? void 0 : Y.split(" ")) ?? []);
      return { blur: ee.has("blur") || ee.has("input"), input: ee.has("input"), submit: ee.has("submit"), lazy: ee.has("lazy") };
    }), L = v(() => {
      var Y;
      return !P.error && !((Y = P.errorMessages) != null && Y.length) && (!P.rules.length || (N.value ? !M.value.length && !j.value.lazy || null : !M.value.length));
    }), z = de(!1), Q = v(() => ({ [`${S}--error`]: L.value === !1, [`${S}--dirty`]: k.value, [`${S}--disabled`]: B.value, [`${S}--readonly`]: x.value })), E = v(() => P.name ?? r(A));
    function U() {
      I.value = null, Me(W);
    }
    function W() {
      N.value = !0, j.value.lazy ? M.value = [] : q(!0);
    }
    async function q() {
      let Y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ee = [];
      z.value = !0;
      for (const pe of P.rules) {
        if (ee.length >= +(P.maxErrors ?? 1))
          break;
        const be = typeof pe == "function" ? pe : () => pe, ge = await be(F.value);
        ge !== !0 && (ge === !1 || typeof ge == "string" ? ee.push(ge || "") : console.warn(`${ge} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return M.value = ee, z.value = !1, N.value = Y, M.value;
    }
    return na(() => {
      _ == null || _.register({ id: E.value, validate: q, reset: U, resetValidation: W });
    }), mn(() => {
      _ == null || _.unregister(E.value);
    }), Yn(async () => {
      j.value.lazy || await q(!0), _ == null || _.update(E.value, L.value, V.value);
    }), Vn(() => j.value.input, () => {
      K(F, () => {
        if (F.value != null)
          q();
        else if (P.focused) {
          const Y = K(() => P.focused, (ee) => {
            ee || q(), Y();
          });
        }
      });
    }), Vn(() => j.value.blur, () => {
      K(() => P.focused, (Y) => {
        Y || q();
      });
    }), K(L, () => {
      _ == null || _.update(E.value, L.value, V.value);
    }), { errorMessages: V, isDirty: k, isDisabled: B, isReadonly: x, isPristine: N, isValid: L, isValidating: z, reset: U, resetValidation: W, validate: q, validationClasses: Q };
  }(e, "v-input", i), $ = v(() => ({ id: i, messagesId: p, isDirty: f, isDisabled: m, isReadonly: h, isPristine: b, isValid: g, isValidating: C, reset: w, resetValidation: O, validate: G })), R = v(() => {
    var P;
    return (P = e.errorMessages) != null && P.length || !b.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return se(() => {
    var F, _, M, N;
    const P = !(!l.prepend && !e.prependIcon), S = !(!l.append && !e.appendIcon), A = R.value.length > 0, I = !e.hideDetails || e.hideDetails === "auto" && (A || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, c.value, T.value, e.class], style: e.style }, [P && d("div", { key: "prepend", class: "v-input__prepend" }, [(F = l.prepend) == null ? void 0 : F.call(l, $.value), e.prependIcon && d(u, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(_ = l.default) == null ? void 0 : _.call(l, $.value)]), S && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(u, { key: "append-icon", name: "append" }, null), (M = l.append) == null ? void 0 : M.call(l, $.value)]), I && d("div", { class: "v-input__details" }, [d(mr, { id: p.value, active: A, messages: R.value }, { message: l.message }), (N = l.details) == null ? void 0 : N.call(l, $.value)])]);
  }), { reset: w, resetValidation: O, validate: G, isValid: g, errorMessages: y };
} }), br = H({ ...Tt(), ...zn(Ua(), ["inline"]) }, "VCheckbox"), Cr = ne()({ name: "VCheckbox", inheritAttrs: !1, props: br(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = $e(e, "modelValue"), { isFocused: a, focus: c, blur: u } = Et(e), s = tn(), i = v(() => e.id || `checkbox-${s}`);
  return se(() => {
    const [p, y] = kt(n), f = Bn.filterProps(e), m = Vl.filterProps(e);
    return d(Bn, Z({ class: ["v-checkbox", e.class] }, p, f, { modelValue: o.value, "onUpdate:modelValue": (h) => o.value = h, id: i.value, focused: a.value, style: e.style }), { ...l, default: (h) => {
      let { id: b, messagesId: g, isDisabled: C, isReadonly: w } = h;
      return d(Vl, Z(m, { id: b.value, "aria-describedby": g.value, disabled: C.value, readonly: w.value }, y, { modelValue: o.value, "onUpdate:modelValue": (O) => o.value = O, onFocus: c, onBlur: u }), l);
    } });
  }), {};
} }), Ir = H({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...ye(), ...cn(), ...hn(), ...Ot(), ...en(), ...Ne(), ...kn({ variant: "flat" }) }, "VAvatar"), qn = ne()({ name: "VAvatar", props: Ir(), setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Xe(e), { colorClasses: o, colorStyles: a, variantClasses: c } = _t(e), { densityClasses: u } = Cn(e), { roundedClasses: s } = bn(e), { sizeClasses: i, sizeStyles: p } = Pt(e);
  return se(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, u.value, s.value, i.value, c.value, e.class], style: [a.value, p.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(xa, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(Se, { key: "icon", icon: e.icon }, null) : ((y = n.default) == null ? void 0 : y.call(n)) ?? e.text, At(!1, "v-avatar")];
  } })), {};
} }), Xa = Symbol.for("vuetify:v-chip-group"), Sr = H({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Qn }, ...ye(), ...wa({ selectedClass: "v-chip--selected" }), ...en(), ...Ne(), ...kn({ variant: "tonal" }) }, "VChipGroup");
ne()({ name: "VChipGroup", props: Sr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { themeClasses: l } = Xe(e), { isSelected: o, select: a, next: c, prev: u, selected: s } = Aa(e, Xa);
  return et({ VChip: { color: oe(e, "color"), disabled: oe(e, "disabled"), filter: oe(e, "filter"), variant: oe(e, "variant") } }), se(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var i;
    return [(i = n.default) == null ? void 0 : i.call(n, { isSelected: o, select: a, next: c, prev: u, selected: s.value })];
  } })), {};
} });
const Br = H({ activeClass: String, appendAvatar: String, appendIcon: Ce, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: an(), onClickOnce: an(), ...nt(), ...ye(), ...cn(), ...lt(), ...Fa(), ...hn(), ...rl(), ...Ot(), ...en({ tag: "span" }), ...Ne(), ...kn({ variant: "tonal" }) }, "VChip"), xr = ne()({ name: "VChip", directives: { Ripple: $t }, props: Br(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { t: a } = Hl(), { borderClasses: c } = tt(e), { colorClasses: u, colorStyles: s, variantClasses: i } = _t(e), { densityClasses: p } = Cn(e), { elevationClasses: y } = ot(e), { roundedClasses: f } = bn(e), { sizeClasses: m } = Pt(e), { themeClasses: h } = Xe(e), b = $e(e, "modelValue"), g = Va(e, Xa, !1), C = il(e, n), w = v(() => e.link !== !1 && C.isLink.value), O = v(() => !e.disabled && e.link !== !1 && (!!g || e.link || C.isClickable.value)), G = v(() => ({ "aria-label": a(e.closeLabel), onClick(R) {
    R.stopPropagation(), b.value = !1, l("click:close", R);
  } }));
  function T(R) {
    var P;
    l("click", R), O.value && ((P = C.navigate) == null || P.call(C, R), g == null || g.toggle());
  }
  function $(R) {
    R.key !== "Enter" && R.key !== " " || (R.preventDefault(), T(R));
  }
  return () => {
    const R = C.isLink.value ? "a" : e.tag, P = !(!e.appendIcon && !e.appendAvatar), S = !(!P && !o.append), A = !(!o.close && !e.closable), I = !(!o.filter && !e.filter) && g, F = !(!e.prependIcon && !e.prependAvatar), _ = !(!F && !o.prepend), M = !g || g.isSelected.value;
    return b.value && Ue(d(R, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": O.value, "v-chip--filter": I, "v-chip--pill": e.pill }, h.value, c.value, M ? u.value : void 0, p.value, y.value, f.value, m.value, i.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [M ? s.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: C.href.value, tabindex: O.value ? 0 : void 0, onClick: T, onKeydown: O.value && !w.value && $ }, { default: () => {
      var N;
      return [At(O.value, "v-chip"), I && d(Sa, { key: "filter" }, { default: () => [Ue(d("div", { class: "v-chip__filter" }, [o.filter ? d(je, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, o.filter) : d(Se, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Hn, g.isSelected.value]])] }), _ && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(je, { key: "prepend-defaults", disabled: !F, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(Fe, null, [e.prependIcon && d(Se, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(qn, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((N = o.default) == null ? void 0 : N.call(o, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), S && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(je, { key: "append-defaults", disabled: !P, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(Fe, null, [e.appendIcon && d(Se, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(qn, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), A && d("div", Z({ key: "close", class: "v-chip__close" }, G.value), [o.close ? d(je, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(Se, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[gn("ripple"), O.value && e.ripple, null]]);
  };
} }), Al = Symbol.for("vuetify:list");
function Ka() {
  const e = me(Al, { hasPrepend: de(!1), updateHasPrepend: () => null }), t = { hasPrepend: de(!1), updateHasPrepend: (n) => {
    n && (t.hasPrepend.value = n);
  } };
  return nn(Al, t), e;
}
function Ja() {
  return me(Al, null);
}
const kr = { open: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (n) {
    const a = /* @__PURE__ */ new Set();
    a.add(t);
    let c = o.get(t);
    for (; c != null; )
      a.add(c), c = o.get(c);
    return a;
  }
  return l.delete(t), l;
}, select: () => null }, Za = { open: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (n) {
    let a = o.get(t);
    for (l.add(t); a != null && a !== t; )
      l.add(a), a = o.get(a);
    return l;
  }
  return l.delete(t), l;
}, select: () => null }, wr = { open: Za.open, select: (e) => {
  let { id: t, value: n, opened: l, parents: o } = e;
  if (!n)
    return l;
  const a = [];
  let c = o.get(t);
  for (; c != null; )
    a.push(c), c = o.get(c);
  return new Set(a);
} }, _l = (e) => {
  const t = { select: (n) => {
    let { id: l, value: o, selected: a } = n;
    if (l = Sn(l), e && !o) {
      const c = Array.from(a.entries()).reduce((u, s) => {
        let [i, p] = s;
        return p === "on" ? [...u, i] : u;
      }, []);
      if (c.length === 1 && c[0] === l)
        return a;
    }
    return a.set(l, o ? "on" : "off"), a;
  }, in: (n, l, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const c of n || [])
      a = t.select({ id: c, value: !0, selected: new Map(a), children: l, parents: o });
    return a;
  }, out: (n) => {
    const l = [];
    for (const [o, a] of n.entries())
      a === "on" && l.push(o);
    return l;
  } };
  return t;
}, Mo = (e) => {
  const t = _l(e);
  return { select: (n) => {
    let { selected: l, id: o, ...a } = n;
    o = Sn(o);
    const c = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return t.select({ ...a, id: o, selected: c });
  }, in: (n, l, o) => {
    let a = /* @__PURE__ */ new Map();
    return n != null && n.length && (a = t.in(n.slice(0, 1), l, o)), a;
  }, out: (n, l, o) => t.out(n, l, o) };
}, St = Symbol.for("vuetify:nested"), Qa = { id: de(), root: { register: () => null, unregister: () => null, parents: D(/* @__PURE__ */ new Map()), children: D(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: D(/* @__PURE__ */ new Set()), selected: D(/* @__PURE__ */ new Map()), selectedValues: D([]) } }, Fr = H({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Vr = (e) => {
  let t = !1;
  const n = D(/* @__PURE__ */ new Map()), l = D(/* @__PURE__ */ new Map()), o = $e(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), a = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const f = Mo(y);
          return { select: (m) => {
            let { id: h, selected: b, children: g, ...C } = m;
            return h = Sn(h), g.has(h) ? b : f.select({ id: h, selected: b, children: g, ...C });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const f = _l(y);
          return { select: (m) => {
            let { id: h, selected: b, children: g, ...C } = m;
            return h = Sn(h), g.has(h) ? b : f.select({ id: h, selected: b, children: g, ...C });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return _l(e.mandatory);
      case "single-independent":
        return Mo(e.mandatory);
      default:
        return ((y) => {
          const f = { select: (m) => {
            let { id: h, value: b, selected: g, children: C, parents: w } = m;
            h = Sn(h);
            const O = new Map(g), G = [h];
            for (; G.length; ) {
              const $ = G.shift();
              g.set($, b ? "on" : "off"), C.has($) && G.push(...C.get($));
            }
            let T = w.get(h);
            for (; T; ) {
              const $ = C.get(T), R = $.every((S) => g.get(S) === "on"), P = $.every((S) => !g.has(S) || g.get(S) === "off");
              g.set(T, R ? "on" : P ? "off" : "indeterminate"), T = w.get(T);
            }
            return y && !b && Array.from(g.entries()).reduce((R, P) => {
              let [S, A] = P;
              return A === "on" ? [...R, S] : R;
            }, []).length === 0 ? O : g;
          }, in: (m, h, b) => {
            let g = /* @__PURE__ */ new Map();
            for (const C of m || [])
              g = f.select({ id: C, value: !0, selected: new Map(g), children: h, parents: b });
            return g;
          }, out: (m, h) => {
            const b = [];
            for (const [g, C] of m.entries())
              C !== "on" || h.has(g) || b.push(g);
            return b;
          } };
          return f;
        })(e.mandatory);
    }
  }), c = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return wr;
      case "single":
        return kr;
      default:
        return Za;
    }
  }), u = $e(e, "selected", e.selected, (y) => a.value.in(y, n.value, l.value), (y) => a.value.out(y, n.value, l.value));
  function s(y) {
    const f = [];
    let m = y;
    for (; m != null; )
      f.unshift(m), m = l.value.get(m);
    return f;
  }
  mn(() => {
    t = !0;
  });
  const i = Le("nested"), p = { id: de(), root: { opened: o, selected: u, selectedValues: v(() => {
    const y = [];
    for (const [f, m] of u.value.entries())
      m === "on" && y.push(f);
    return y;
  }), register: (y, f, m) => {
    f && y !== f && l.value.set(y, f), m && n.value.set(y, []), f != null && n.value.set(f, [...n.value.get(f) || [], y]);
  }, unregister: (y) => {
    if (t)
      return;
    n.value.delete(y);
    const f = l.value.get(y);
    if (f) {
      const m = n.value.get(f) ?? [];
      n.value.set(f, m.filter((h) => h !== y));
    }
    l.value.delete(y), o.value.delete(y);
  }, open: (y, f, m) => {
    i.emit("click:open", { id: y, value: f, path: s(y), event: m });
    const h = c.value.open({ id: y, value: f, opened: new Set(o.value), children: n.value, parents: l.value, event: m });
    h && (o.value = h);
  }, openOnSelect: (y, f, m) => {
    const h = c.value.select({ id: y, value: f, selected: new Map(u.value), opened: new Set(o.value), children: n.value, parents: l.value, event: m });
    h && (o.value = h);
  }, select: (y, f, m) => {
    i.emit("click:select", { id: y, value: f, path: s(y), event: m });
    const h = a.value.select({ id: y, value: f, selected: new Map(u.value), children: n.value, parents: l.value, event: m });
    h && (u.value = h), p.root.openOnSelect(y, f, m);
  }, children: n, parents: l } };
  return nn(St, p), p.root;
}, ei = (e, t) => {
  const n = me(St, Qa), l = Symbol(tn()), o = v(() => e.value !== void 0 ? e.value : l), a = { ...n, id: o, open: (c, u) => n.root.open(o.value, c, u), openOnSelect: (c, u) => n.root.openOnSelect(o.value, c, u), isOpen: v(() => n.root.opened.value.has(o.value)), parent: v(() => n.root.parents.value.get(o.value)), select: (c, u) => n.root.select(o.value, c, u), isSelected: v(() => n.root.selected.value.get(Sn(o.value)) === "on"), isIndeterminate: v(() => n.root.selected.value.get(o.value) === "indeterminate"), isLeaf: v(() => !n.root.children.value.get(o.value)), isGroupActivator: n.isGroupActivator };
  return !n.isGroupActivator && n.root.register(o.value, n.id.value, t), mn(() => {
    !n.isGroupActivator && n.root.unregister(o.value);
  }), t && nn(St, a), a;
}, Ar = bt({ name: "VListGroupActivator", setup(e, t) {
  let { slots: n } = t;
  return (() => {
    const l = me(St, Qa);
    nn(St, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = n.default) == null ? void 0 : l.call(n);
  };
} }), _r = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ye(), ...en() }, "VListGroup"), Ro = ne()({ name: "VListGroup", props: _r(), setup(e, t) {
  let { slots: n } = t;
  const { isOpen: l, open: o, id: a } = ei(oe(e, "value"), !0), c = v(() => `v-list-group--id-${String(a.value)}`), u = Ja(), { isBooted: s } = function() {
    const m = de(!1);
    return Yn(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: v(() => m.value ? void 0 : { transition: "none !important" }), isBooted: zl(m) };
  }();
  function i(m) {
    o(!l.value, m);
  }
  const p = v(() => ({ onClick: i, class: "v-list-group__header", id: c.value })), y = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return se(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": u == null ? void 0 : u.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [n.activator && d(je, { defaults: f.value }, { default: () => [d(Ar, null, { default: () => [n.activator({ props: p.value, isOpen: l.value })] })] }), d(In, { transition: { component: Ji }, disabled: !s.value }, { default: () => {
    var m;
    return [Ue(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(m = n.default) == null ? void 0 : m.call(n)]), [[Hn, l.value]])];
  } })] })), {};
} }), Or = wt("v-list-item-subtitle"), Pr = wt("v-list-item-title"), $r = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: an(), onClickOnce: an(), ...nt(), ...ye(), ...cn(), ...Dn(), ...lt(), ...hn(), ...rl(), ...en(), ...Ne(), ...kn({ variant: "text" }) }, "VListItem"), nl = ne()({ name: "VListItem", directives: { Ripple: $t }, props: $r(), emits: { click: (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l, emit: o } = t;
  const a = il(e, n), c = v(() => e.value === void 0 ? a.href.value : e.value), { select: u, isSelected: s, isIndeterminate: i, isGroupActivator: p, root: y, parent: f, openOnSelect: m } = ei(c, !1), h = Ja(), b = v(() => {
    var x;
    return e.active !== !1 && (e.active || ((x = a.isActive) == null ? void 0 : x.value) || s.value);
  }), g = v(() => e.link !== !1 && a.isLink.value), C = v(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!h)), w = v(() => e.rounded || e.nav), O = v(() => e.color ?? e.activeColor), G = v(() => ({ color: b.value ? O.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var x;
    return (x = a.isActive) == null ? void 0 : x.value;
  }, (x) => {
    x && f.value != null && y.open(f.value, !0), x && m(x);
  }, { immediate: !0 });
  const { themeClasses: T } = Xe(e), { borderClasses: $ } = tt(e), { colorClasses: R, colorStyles: P, variantClasses: S } = _t(G), { densityClasses: A } = Cn(e), { dimensionStyles: I } = Ln(e), { elevationClasses: F } = ot(e), { roundedClasses: _ } = bn(w), M = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), N = v(() => ({ isActive: b.value, select: u, isSelected: s.value, isIndeterminate: i.value }));
  function k(x) {
    var V;
    o("click", x), !p && C.value && ((V = a.navigate) == null || V.call(a, x), e.value != null && u(!s.value, x));
  }
  function B(x) {
    x.key !== "Enter" && x.key !== " " || (x.preventDefault(), k(x));
  }
  return se(() => {
    const x = g.value ? "a" : e.tag, V = l.title || e.title != null, j = l.subtitle || e.subtitle != null, L = !(!e.appendAvatar && !e.appendIcon), z = !(!L && !l.append), Q = !(!e.prependAvatar && !e.prependIcon), E = !(!Q && !l.prepend);
    var U, W;
    return h == null || h.updateHasPrepend(E), e.activeColor && (U = "active-color", W = ["color", "base-color"], W = Array.isArray(W) ? W.slice(0, -1).map((q) => `'${q}'`).join(", ") + ` or '${W.at(-1)}'` : `'${W}'`, ll(`[Vuetify UPGRADE] '${U}' is deprecated, use ${W} instead.`)), Ue(d(x, { class: ["v-list-item", { "v-list-item--active": b.value, "v-list-item--disabled": e.disabled, "v-list-item--link": C.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !E && (h == null ? void 0 : h.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && b.value }, T.value, $.value, R.value, A.value, F.value, M.value, _.value, S.value, e.class], style: [P.value, I.value, e.style], href: a.href.value, tabindex: C.value ? h ? -2 : 0 : void 0, onClick: k, onKeydown: C.value && !g.value && B }, { default: () => {
      var q;
      return [At(C.value || b.value, "v-list-item"), E && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(je, { key: "prepend-defaults", disabled: !Q, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.prepend) == null ? void 0 : Y.call(l, N.value)];
      } }) : d(Fe, null, [e.prependAvatar && d(qn, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(Se, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [V && d(Pr, { key: "title" }, { default: () => {
        var Y;
        return [((Y = l.title) == null ? void 0 : Y.call(l, { title: e.title })) ?? e.title];
      } }), j && d(Or, { key: "subtitle" }, { default: () => {
        var Y;
        return [((Y = l.subtitle) == null ? void 0 : Y.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (q = l.default) == null ? void 0 : q.call(l, N.value)]), z && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(je, { key: "append-defaults", disabled: !L, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.append) == null ? void 0 : Y.call(l, N.value)];
      } }) : d(Fe, null, [e.appendIcon && d(Se, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(qn, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[gn("ripple"), C.value && e.ripple]]);
  }), {};
} }), Er = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ye(), ...en() }, "VListSubheader"), Tr = ne()({ name: "VListSubheader", props: Er(), setup(e, t) {
  let { slots: n } = t;
  const { textColorClasses: l, textColorStyles: o } = yn(oe(e, "color"));
  return se(() => {
    const a = !(!n.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var c;
      return [a && d("div", { class: "v-list-subheader__text" }, [((c = n.default) == null ? void 0 : c.call(n)) ?? e.title])];
    } });
  }), {};
} }), zr = H({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ye(), ...Ne() }, "VDivider"), Dr = ne()({ name: "VDivider", props: zr(), setup(e, t) {
  let { attrs: n } = t;
  const { themeClasses: l } = Xe(e), { textColorClasses: o, textColorStyles: a } = yn(oe(e, "color")), c = v(() => {
    const u = {};
    return e.length && (u[e.vertical ? "maxHeight" : "maxWidth"] = ae(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ae(e.thickness)), u;
  });
  return se(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [c.value, a.value, e.style], "aria-orientation": n.role && n.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${n.role || "separator"}` }, null)), {};
} }), Lr = H({ items: Array, returnObject: Boolean }, "VListChildren"), ni = ne()({ name: "VListChildren", props: Lr(), setup(e, t) {
  let { slots: n } = t;
  return Ka(), () => {
    var l, o;
    return ((l = n.default) == null ? void 0 : l.call(n)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var f, m;
      let { children: c, props: u, type: s, raw: i } = a;
      if (s === "divider")
        return ((f = n.divider) == null ? void 0 : f.call(n, { props: u })) ?? d(Dr, u, null);
      if (s === "subheader")
        return ((m = n.subheader) == null ? void 0 : m.call(n, { props: u })) ?? d(Tr, u, null);
      const p = { subtitle: n.subtitle ? (h) => {
        var b;
        return (b = n.subtitle) == null ? void 0 : b.call(n, { ...h, item: i });
      } : void 0, prepend: n.prepend ? (h) => {
        var b;
        return (b = n.prepend) == null ? void 0 : b.call(n, { ...h, item: i });
      } : void 0, append: n.append ? (h) => {
        var b;
        return (b = n.append) == null ? void 0 : b.call(n, { ...h, item: i });
      } : void 0, title: n.title ? (h) => {
        var b;
        return (b = n.title) == null ? void 0 : b.call(n, { ...h, item: i });
      } : void 0 }, y = Ro.filterProps(u);
      return c ? d(Ro, Z({ value: u == null ? void 0 : u.value }, y), { activator: (h) => {
        let { props: b } = h;
        const g = { ...u, ...b, value: e.returnObject ? i : u.value };
        return n.header ? n.header({ props: g }) : d(nl, g, p);
      }, default: () => d(ni, { items: c }, n) }) : n.item ? n.item({ props: u }) : d(nl, Z(u, { value: e.returnObject ? i : u.value }), p);
    }));
  };
} }), ti = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: Qn } }, "list-items");
function Ol(e, t) {
  const n = dn(t, e.itemTitle, t), l = dn(t, e.itemValue, n), o = dn(t, e.itemChildren), a = { title: n, value: l, ...e.itemProps === !0 ? typeof t != "object" || t == null || Array.isArray(t) ? void 0 : "children" in t ? zn(t, ["children"]) : t : dn(t, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? li(e, o) : void 0, raw: t };
}
function li(e, t) {
  const n = [];
  for (const l of t)
    n.push(Ol(e, l));
  return n;
}
function Wr(e, t) {
  const n = dn(t, e.itemType, "item"), l = function(u) {
    return typeof u == "string" || typeof u == "number" || typeof u == "boolean";
  }(t) ? t : dn(t, e.itemTitle), o = dn(t, e.itemValue, void 0), a = dn(t, e.itemChildren), c = { title: l, value: o, ...e.itemProps === !0 ? zn(t, ["children"]) : dn(t, e.itemProps) };
  return { type: n, title: c.title, value: c.value, props: c, children: n === "item" && a ? oi(e, a) : void 0, raw: t };
}
function oi(e, t) {
  const n = [];
  for (const l of t)
    n.push(Wr(e, l));
  return n;
}
const Mr = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...Fr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...nt(), ...ye(), ...cn(), ...Dn(), ...lt(), itemType: { type: String, default: "type" }, ...ti(), ...hn(), ...en(), ...Ne(), ...kn({ variant: "text" }) }, "VList"), Rr = ne()({ name: "VList", props: Mr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { items: l } = function(S) {
    return { items: v(() => oi(S, S.items)) };
  }(e), { themeClasses: o } = Xe(e), { backgroundColorClasses: a, backgroundColorStyles: c } = Un(oe(e, "bgColor")), { borderClasses: u } = tt(e), { densityClasses: s } = Cn(e), { dimensionStyles: i } = Ln(e), { elevationClasses: p } = ot(e), { roundedClasses: y } = bn(e), { open: f, select: m } = Vr(e), h = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = oe(e, "activeColor"), g = oe(e, "baseColor"), C = oe(e, "color");
  Ka(), et({ VListGroup: { activeColor: b, baseColor: g, color: C }, VListItem: { activeClass: oe(e, "activeClass"), activeColor: b, baseColor: g, color: C, density: oe(e, "density"), disabled: oe(e, "disabled"), lines: oe(e, "lines"), nav: oe(e, "nav"), slim: oe(e, "slim"), variant: oe(e, "variant") } });
  const w = de(!1), O = D();
  function G(S) {
    w.value = !0;
  }
  function T(S) {
    w.value = !1;
  }
  function $(S) {
    var A;
    w.value || S.relatedTarget && ((A = O.value) != null && A.contains(S.relatedTarget)) || P();
  }
  function R(S) {
    if (O.value) {
      if (S.key === "ArrowDown")
        P("next");
      else if (S.key === "ArrowUp")
        P("prev");
      else if (S.key === "Home")
        P("first");
      else {
        if (S.key !== "End")
          return;
        P("last");
      }
      S.preventDefault();
    }
  }
  function P(S) {
    if (O.value)
      return Ht(O.value, S);
  }
  return se(() => d(e.tag, { ref: O, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, u.value, s.value, p.value, h.value, y.value, e.class], style: [c.value, i.value, e.style], tabindex: e.disabled || w.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: G, onFocusout: T, onFocus: $, onKeydown: R }, { default: () => [d(ni, { items: l.value, returnObject: e.returnObject }, n)] })), { open: f, select: m, focus: P };
} });
function hl(e, t) {
  return { x: e.x + t.x, y: e.y + t.y };
}
function No(e, t) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: n, align: l } = e;
    return hl({ x: l === "left" ? 0 : l === "center" ? t.width / 2 : l === "right" ? t.width : l, y: n === "top" ? 0 : n === "bottom" ? t.height : n }, t);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: n, align: l } = e;
    return hl({ x: n === "left" ? 0 : n === "right" ? t.width : n, y: l === "top" ? 0 : l === "center" ? t.height / 2 : l === "bottom" ? t.height : l }, t);
  }
  return hl({ x: t.width / 2, y: t.height / 2 }, t);
}
const ai = { static: function() {
}, connected: function(e, t, n) {
  (Array.isArray(e.target.value) || function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(n.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = Nl(() => {
    const m = kl(t.location, e.isRtl.value), h = t.origin === "overlap" ? m : t.origin === "auto" ? fl(m) : kl(t.origin, e.isRtl.value);
    return m.side === h.side && m.align === yl(h).align ? { preferredAnchor: fo(m), preferredOrigin: fo(h) } : { preferredAnchor: m, preferredOrigin: h };
  }), [a, c, u, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => v(() => {
    const h = parseFloat(t[m]);
    return isNaN(h) ? 1 / 0 : h;
  })), i = v(() => {
    if (Array.isArray(t.offset))
      return t.offset;
    if (typeof t.offset == "string") {
      const m = t.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof t.offset == "number" ? [t.offset, 0] : [0, 0];
  });
  let p = !1;
  const y = new ResizeObserver(() => {
    p && f();
  });
  function f() {
    if (p = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => p = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const m = pa(e.target.value), h = function(S, A) {
      A ? S.style.removeProperty("left") : S.style.removeProperty("right");
      const I = jl(S);
      return A ? I.x += parseFloat(S.style.right || 0) : I.x -= parseFloat(S.style.left || 0), I.y -= parseFloat(S.style.top || 0), I;
    }(e.contentEl.value, e.isRtl.value), b = Jt(e.contentEl.value);
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = b.reduce((S, A) => {
      const I = A.getBoundingClientRect(), F = new Fn({ x: A === document.documentElement ? 0 : I.x, y: A === document.documentElement ? 0 : I.y, width: A.clientWidth, height: A.clientHeight });
      return S ? new Fn({ x: Math.max(S.left, F.left), y: Math.max(S.top, F.top), width: Math.min(S.right, F.right) - Math.max(S.left, F.left), height: Math.min(S.bottom, F.bottom) - Math.max(S.top, F.top) }) : F;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let C = { anchor: l.value, origin: o.value };
    function w(S) {
      const A = new Fn(h), I = No(S.anchor, m), F = No(S.origin, A);
      let { x: _, y: M } = (k = F, { x: (N = I).x - k.x, y: N.y - k.y });
      var N, k;
      switch (S.anchor.side) {
        case "top":
          M -= i.value[0];
          break;
        case "bottom":
          M += i.value[0];
          break;
        case "left":
          _ -= i.value[0];
          break;
        case "right":
          _ += i.value[0];
      }
      switch (S.anchor.align) {
        case "top":
          M -= i.value[1];
          break;
        case "bottom":
          M += i.value[1];
          break;
        case "left":
          _ -= i.value[1];
          break;
        case "right":
          _ += i.value[1];
      }
      return A.x += _, A.y += M, A.width = Math.min(A.width, u.value), A.height = Math.min(A.height, s.value), { overflows: mo(A, g), x: _, y: M };
    }
    let O = 0, G = 0;
    const T = { x: 0, y: 0 }, $ = { x: !1, y: !1 };
    let R = -1;
    for (; ; ) {
      if (R++ > 10) {
        ll("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: S, y: A, overflows: I } = w(C);
      O += S, G += A, h.x += S, h.y += A;
      {
        const F = yo(C.anchor), _ = I.x.before || I.x.after, M = I.y.before || I.y.after;
        let N = !1;
        if (["x", "y"].forEach((k) => {
          if (k === "x" && _ && !$.x || k === "y" && M && !$.y) {
            const B = { anchor: { ...C.anchor }, origin: { ...C.origin } }, x = k === "x" ? F === "y" ? yl : fl : F === "y" ? fl : yl;
            B.anchor = x(B.anchor), B.origin = x(B.origin);
            const { overflows: V } = w(B);
            (V[k].before <= I[k].before && V[k].after <= I[k].after || V[k].before + V[k].after < (I[k].before + I[k].after) / 2) && (C = B, N = $[k] = !0);
          }
        }), N)
          continue;
      }
      I.x.before && (O += I.x.before, h.x += I.x.before), I.x.after && (O -= I.x.after, h.x -= I.x.after), I.y.before && (G += I.y.before, h.y += I.y.before), I.y.after && (G -= I.y.after, h.y -= I.y.after);
      {
        const F = mo(h, g);
        T.x = g.width - F.x.before - F.x.after, T.y = g.height - F.y.before - F.y.after, O += F.x.before, h.x += F.x.before, G += F.y.before, h.y += F.y.before;
      }
      break;
    }
    const P = yo(C.anchor);
    return Object.assign(n.value, { "--v-overlay-anchor-origin": `${C.anchor.side} ${C.anchor.align}`, transformOrigin: `${C.origin.side} ${C.origin.align}`, top: ae(bl(G)), left: e.isRtl.value ? void 0 : ae(bl(O)), right: e.isRtl.value ? ae(bl(-O)) : void 0, minWidth: ae(P === "y" ? Math.min(a.value, m.width) : a.value), maxWidth: ae(jo(Gn(T.x, a.value === 1 / 0 ? 0 : a.value, u.value))), maxHeight: ae(jo(Gn(T.y, c.value === 1 / 0 ? 0 : c.value, s.value))) }), { available: T, contentBox: h };
  }
  return K([e.target, e.contentEl], (m, h) => {
    let [b, g] = m, [C, w] = h;
    C && !Array.isArray(C) && y.unobserve(C), b && !Array.isArray(b) && y.observe(b), w && y.unobserve(w), g && y.observe(g);
  }, { immediate: !0 }), He(() => {
    y.disconnect();
  }), K(() => [l.value, o.value, t.offset, t.minWidth, t.minHeight, t.maxWidth, t.maxHeight], () => f()), Me(() => {
    const m = f();
    if (!m)
      return;
    const { available: h, contentBox: b } = m;
    b.height > h.y && requestAnimationFrame(() => {
      f(), requestAnimationFrame(() => {
        f();
      });
    });
  }), { updateLocation: f };
} }, Nr = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ai }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function bl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function jo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Pl = !0;
const tl = [];
let Go = -1;
function $l() {
  cancelAnimationFrame(Go), Go = requestAnimationFrame(() => {
    const e = tl.shift();
    e && e(), tl.length ? $l() : Pl = !0;
  });
}
const jt = { none: null, close: function(e) {
  Uo(e.targetEl.value ?? e.contentEl.value, function(t) {
    e.isActive.value = !1;
  });
}, block: function(e, t) {
  var u;
  const n = (u = e.root.value) == null ? void 0 : u.offsetParent, l = [.../* @__PURE__ */ new Set([...Jt(e.targetEl.value, t.contained ? n : void 0), ...Jt(e.contentEl.value, t.contained ? n : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (c = n || document.documentElement, Ul(c) && c);
  var c;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, i) => {
    s.style.setProperty("--v-body-scroll-x", ae(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", ae(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", ae(o)), s.classList.add("v-overlay-scroll-blocked");
  }), He(() => {
    l.forEach((s, i) => {
      const p = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
      s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -p, s.scrollTop = -y;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, t, n) {
  let l = !1, o = -1, a = -1;
  function c(u) {
    var s;
    s = () => {
      var y, f;
      const i = performance.now();
      (f = (y = e.updateLocation).value) == null || f.call(y, u), l = (performance.now() - i) / (1e3 / 60) > 2;
    }, !Pl || tl.length ? (tl.push(s), $l()) : (Pl = !1, s(), $l());
  }
  a = (typeof requestIdleCallback > "u" ? (u) => u() : requestIdleCallback)(() => {
    n.run(() => {
      Uo(e.targetEl.value ?? e.contentEl.value, (u) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            c(u);
          });
        })) : c(u);
      });
    });
  }), He(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(a), cancelAnimationFrame(o);
  });
} }, jr = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in jt } }, "VOverlay-scroll-strategies");
function Uo(e, t) {
  const n = [document, ...Jt(e)];
  n.forEach((l) => {
    l.addEventListener("scroll", t, { passive: !0 });
  }), He(() => {
    n.forEach((l) => {
      l.removeEventListener("scroll", t);
    });
  });
}
const El = Symbol.for("vuetify:v-menu"), Gr = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Ur = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Gr() }, "VOverlay-activator");
function qr(e, t) {
  let { isActive: n, isTop: l } = t;
  const o = Le("useActivator"), a = D();
  let c = !1, u = !1, s = !0;
  const i = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), p = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: y, runCloseDelay: f } = function(I, F) {
    const _ = {}, M = (N) => () => {
      if (!Ke)
        return Promise.resolve(!0);
      const k = N === "openDelay";
      return _.closeDelay && window.clearTimeout(_.closeDelay), delete _.closeDelay, _.openDelay && window.clearTimeout(_.openDelay), delete _.openDelay, new Promise((B) => {
        const x = parseInt(I[N] ?? 0, 10);
        _[N] = window.setTimeout(() => {
          F == null || F(k), B(k);
        }, x);
      });
    };
    return { runCloseDelay: M("closeDelay"), runOpenDelay: M("openDelay") };
  }(e, (I) => {
    I !== (e.openOnHover && c || i.value && u) || e.openOnHover && n.value && !l.value || (n.value !== I && (s = !0), n.value = I);
  }), m = D(), h = (I) => {
    I.stopPropagation(), a.value = I.currentTarget || I.target, n.value || (m.value = [I.clientX, I.clientY]), n.value = !n.value;
  }, b = (I) => {
    var F;
    (F = I.sourceCapabilities) != null && F.firesTouchEvents || (c = !0, a.value = I.currentTarget || I.target, y());
  }, g = (I) => {
    c = !1, f();
  }, C = (I) => {
    Yt(I.target, ":focus-visible") !== !1 && (u = !0, I.stopPropagation(), a.value = I.currentTarget || I.target, y());
  }, w = (I) => {
    u = !1, I.stopPropagation(), f();
  }, O = v(() => {
    const I = {};
    return p.value && (I.onClick = h), e.openOnHover && (I.onMouseenter = b, I.onMouseleave = g), i.value && (I.onFocus = C, I.onBlur = w), I;
  }), G = v(() => {
    const I = {};
    if (e.openOnHover && (I.onMouseenter = () => {
      c = !0, y();
    }, I.onMouseleave = () => {
      c = !1, f();
    }), i.value && (I.onFocusin = () => {
      u = !0, y();
    }, I.onFocusout = () => {
      u = !1, f();
    }), e.closeOnContentClick) {
      const F = me(El, null);
      I.onClick = () => {
        n.value = !1, F == null || F.closeParents();
      };
    }
    return I;
  }), T = v(() => {
    const I = {};
    return e.openOnHover && (I.onMouseenter = () => {
      s && (c = !0, s = !1, y());
    }, I.onMouseleave = () => {
      c = !1, f();
    }), I;
  });
  K(l, (I) => {
    !I || (!e.openOnHover || c || i.value && u) && (!i.value || u || e.openOnHover && c) || (n.value = !1);
  }), K(n, (I) => {
    I || setTimeout(() => {
      m.value = void 0;
    });
  }, { flush: "post" });
  const $ = D();
  rn(() => {
    $.value && Me(() => {
      a.value = Ut($.value);
    });
  });
  const R = D(), P = v(() => e.target === "cursor" && m.value ? m.value : R.value ? Ut(R.value) : qo(e.target, o) || a.value), S = v(() => Array.isArray(P.value) ? void 0 : P.value);
  let A;
  return K(() => !!e.activator, (I) => {
    I && Ke ? (A = Dl(), A.run(() => {
      (function(F, _, M) {
        let { activatorEl: N, activatorEvents: k } = M;
        function B() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V(), L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          j && function(z, Q) {
            Object.keys(Q).forEach((E) => {
              if (Bl(E)) {
                const U = co(E), W = Dt.get(z);
                if (Q[E] == null)
                  W == null || W.forEach((q) => {
                    const [Y, ee] = q;
                    Y === U && (z.removeEventListener(U, ee), W.delete(q));
                  });
                else if (!W || ![...W].some((q) => q[0] === U && q[1] === Q[E])) {
                  z.addEventListener(U, Q[E]);
                  const q = W || /* @__PURE__ */ new Set();
                  q.add([U, Q[E]]), Dt.has(z) || Dt.set(z, q);
                }
              } else
                Q[E] == null ? z.removeAttribute(E) : z.setAttribute(E, Q[E]);
            });
          }(j, Z(k.value, L));
        }
        function x() {
          let j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : V(), L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : F.activatorProps;
          j && function(z, Q) {
            Object.keys(Q).forEach((E) => {
              if (Bl(E)) {
                const U = co(E), W = Dt.get(z);
                W == null || W.forEach((q) => {
                  const [Y, ee] = q;
                  Y === U && (z.removeEventListener(U, ee), W.delete(q));
                });
              } else
                z.removeAttribute(E);
            });
          }(j, Z(k.value, L));
        }
        function V() {
          const j = qo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F.activator, _);
          return N.value = (j == null ? void 0 : j.nodeType) === Node.ELEMENT_NODE ? j : void 0, N.value;
        }
        K(() => F.activator, (j, L) => {
          if (L && j !== L) {
            const z = V(L);
            z && x(z);
          }
          j && Me(() => B());
        }, { immediate: !0 }), K(() => F.activatorProps, () => {
          B();
        }), He(() => {
          x();
        });
      })(e, o, { activatorEl: a, activatorEvents: O });
    })) : A && A.stop();
  }, { flush: "post", immediate: !0 }), He(() => {
    A == null || A.stop();
  }), { activatorEl: a, activatorRef: $, target: P, targetEl: S, targetRef: R, activatorEvents: O, contentEvents: G, scrimEvents: T };
}
function qo(e, t) {
  var l, o;
  if (!e)
    return;
  let n;
  if (e === "parent") {
    let a = (o = (l = t == null ? void 0 : t.proxy) == null ? void 0 : l.$el) == null ? void 0 : o.parentNode;
    for (; a != null && a.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    n = a;
  } else
    n = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return n;
}
const Hr = Symbol.for("vuetify:display");
function ii() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : un();
  const n = me(Hr);
  if (!n)
    throw new Error("Could not find Vuetify display injection");
  const l = v(() => {
    if (!e.mobileBreakpoint)
      return n.mobile.value;
    const a = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : n.thresholds.value[e.mobileBreakpoint];
    return n.width.value < a;
  }), o = v(() => t ? { [`${t}--mobile`]: l.value } : {});
  return { ...n, displayClasses: o, mobile: l };
}
const Yr = H({ eager: Boolean }, "lazy");
function ri() {
  const e = Le("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Ho = Symbol.for("vuetify:stack"), yt = ln([]);
function Xr() {
  return !0;
}
function Yo(e, t, n) {
  if (!e || si(e, n) === !1)
    return !1;
  const l = fa(t);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof n.value == "object" && n.value.include || (() => []))();
  return o.push(t), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function si(e, t) {
  return (typeof t.value == "object" && t.value.closeConditional || Xr)(e);
}
function Xo(e, t) {
  const n = fa(e);
  t(document), typeof ShadowRoot < "u" && n instanceof ShadowRoot && t(n);
}
const Kr = { mounted(e, t) {
  const n = (o) => function(a, c, u) {
    const s = typeof u.value == "function" ? u.value : u.value.handler;
    c._clickOutside.lastMousedownWasOutside && Yo(a, c, u) && setTimeout(() => {
      si(a, u) && s && s(a);
    }, 0);
  }(o, e, t), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = Yo(o, e, t);
  };
  Xo(e, (o) => {
    o.addEventListener("click", n, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[t.instance.$.uid] = { onClick: n, onMousedown: l };
}, unmounted(e, t) {
  e._clickOutside && (Xo(e, (n) => {
    var a;
    if (!n || !((a = e._clickOutside) != null && a[t.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[t.instance.$.uid];
    n.removeEventListener("click", l, !0), n.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[t.instance.$.uid]);
} };
function Jr(e) {
  const { modelValue: t, color: n, ...l } = e;
  return d(An, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const ui = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Ur(), ...ye(), ...Dn(), ...Yr(), ...Nr(), ...jr(), ...Ne(), ...Vt() }, "VOverlay"), Ko = ne()({ name: "VOverlay", directives: { ClickOutside: Kr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...ui() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, t) {
  var z, Q;
  let { slots: n, attrs: l, emit: o } = t;
  const a = $e(e, "modelValue"), c = v({ get: () => a.value, set: (E) => {
    E && e.disabled || (a.value = E);
  } }), { teleportTarget: u } = function(E) {
    return { teleportTarget: v(() => {
      const U = E.value;
      if (U === !0 || !Ke)
        return;
      const W = U === !1 ? document.body : typeof U == "string" ? document.querySelector(U) : U;
      if (W == null)
        return void ll(`Unable to locate target ${U}`);
      let q = W.querySelector(":scope > .v-overlay-container");
      return q || (q = document.createElement("div"), q.className = "v-overlay-container", W.appendChild(q)), q;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: s } = Xe(e), { rtlClasses: i, isRtl: p } = Ft(), { hasContent: y, onAfterLeave: f } = function(E, U) {
    const W = de(!1), q = v(() => W.value || E.eager || U.value);
    return K(U, () => W.value = !0), { isBooted: W, hasContent: q, onAfterLeave: function() {
      E.eager || (W.value = !1);
    } };
  }(e, c), m = Un(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: b, stackStyles: g } = function(E, U, W) {
    const q = Le("useStack"), Y = !W, ee = me(Ho, void 0), pe = ln({ activeChildren: /* @__PURE__ */ new Set() });
    nn(Ho, pe);
    const be = de(+U.value);
    Vn(E, () => {
      var ke;
      const Ve = (ke = yt.at(-1)) == null ? void 0 : ke[1];
      be.value = Ve ? Ve + 10 : +U.value, Y && yt.push([q.uid, be.value]), ee == null || ee.activeChildren.add(q.uid), He(() => {
        if (Y) {
          const Be = Sn(yt).findIndex((Oe) => Oe[0] === q.uid);
          yt.splice(Be, 1);
        }
        ee == null || ee.activeChildren.delete(q.uid);
      });
    });
    const ge = de(!0);
    Y && rn(() => {
      var ke;
      const Ve = ((ke = yt.at(-1)) == null ? void 0 : ke[0]) === q.uid;
      setTimeout(() => ge.value = Ve);
    });
    const We = v(() => !pe.activeChildren.size);
    return { globalTop: zl(ge), localTop: We, stackStyles: v(() => ({ zIndex: be.value })) };
  }(c, oe(e, "zIndex"), e._disableGlobalStack), { activatorEl: C, activatorRef: w, target: O, targetEl: G, targetRef: T, activatorEvents: $, contentEvents: R, scrimEvents: P } = qr(e, { isActive: c, isTop: b }), { dimensionStyles: S } = Ln(e), A = function() {
    if (!Ke)
      return de(!1);
    const { ssr: E } = ii();
    if (E) {
      const U = de(!1);
      return Yn(() => {
        U.value = !0;
      }), U;
    }
    return de(!0);
  }(), { scopeId: I } = ri();
  K(() => e.disabled, (E) => {
    E && (c.value = !1);
  });
  const F = D(), _ = D(), { contentStyles: M, updateLocation: N } = function(E, U) {
    const W = D({}), q = D();
    function Y(ee) {
      var pe;
      (pe = q.value) == null || pe.call(q, ee);
    }
    return Ke && Vn(() => !(!U.isActive.value || !E.locationStrategy), (ee) => {
      var pe, be;
      K(() => E.locationStrategy, ee), He(() => {
        window.removeEventListener("resize", Y), q.value = void 0;
      }), window.addEventListener("resize", Y, { passive: !0 }), typeof E.locationStrategy == "function" ? q.value = (pe = E.locationStrategy(U, E, W)) == null ? void 0 : pe.updateLocation : q.value = (be = ai[E.locationStrategy](U, E, W)) == null ? void 0 : be.updateLocation;
    }), { contentStyles: W, updateLocation: q };
  }(e, { isRtl: p, contentEl: _, target: O, isActive: c });
  function k(E) {
    o("click:outside", E), e.persistent ? L() : c.value = !1;
  }
  function B() {
    return c.value && h.value;
  }
  function x(E) {
    var U, W;
    E.key === "Escape" && h.value && (e.persistent ? L() : (c.value = !1, (U = _.value) != null && U.contains(document.activeElement) && ((W = C.value) == null || W.focus())));
  }
  (function(E, U) {
    if (!Ke)
      return;
    let W;
    rn(async () => {
      W == null || W.stop(), U.isActive.value && E.scrollStrategy && (W = Dl(), await Me(), W.active && W.run(() => {
        var q;
        typeof E.scrollStrategy == "function" ? E.scrollStrategy(U, E, W) : (q = jt[E.scrollStrategy]) == null || q.call(jt, U, E, W);
      }));
    }), He(() => {
      W == null || W.stop();
    });
  })(e, { root: F, contentEl: _, targetEl: G, isActive: c, updateLocation: N }), Ke && K(c, (E) => {
    E ? window.addEventListener("keydown", x) : window.removeEventListener("keydown", x);
  }, { immediate: !0 });
  const V = (Q = (z = Le("useRouter")) == null ? void 0 : z.proxy) == null ? void 0 : Q.$router;
  Vn(() => e.closeOnBack, () => {
    (function(E, U) {
      let W, q, Y = !1;
      function ee(pe) {
        var be;
        (be = pe.state) != null && be.replaced || (Y = !0, setTimeout(() => Y = !1));
      }
      Ke && (Me(() => {
        window.addEventListener("popstate", ee), W = E == null ? void 0 : E.beforeEach((pe, be, ge) => {
          gl ? Y ? U(ge) : ge() : setTimeout(() => Y ? U(ge) : ge()), gl = !0;
        }), q = E == null ? void 0 : E.afterEach(() => {
          gl = !1;
        });
      }), He(() => {
        window.removeEventListener("popstate", ee), W == null || W(), q == null || q();
      }));
    })(V, (E) => {
      h.value && c.value ? (E(!1), e.persistent ? L() : c.value = !1) : E();
    });
  });
  const j = D();
  function L() {
    e.noClickAnimation || _.value && jn(_.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Kt });
  }
  return K(() => c.value && (e.absolute || e.contained) && u.value == null, (E) => {
    if (E) {
      const U = ma(F.value);
      U && U !== document.scrollingElement && (j.value = U.scrollTop);
    }
  }), se(() => {
    var E;
    return d(Fe, null, [(E = n.activator) == null ? void 0 : E.call(n, { isActive: c.value, props: Z({ ref: w, targetRef: T }, $.value, e.activatorProps) }), A.value && y.value && d(Pn, { disabled: !u.value, to: u.value }, { default: () => [d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, s.value, i.value, e.class], style: [g.value, { top: ae(j.value) }, e.style], ref: F }, I, l), [d(Jr, Z({ color: m, modelValue: c.value && !!e.scrim }, P.value), null), d(In, { appear: !0, persisted: !0, transition: e.transition, target: O.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var U;
      return [Ue(d("div", Z({ ref: _, class: ["v-overlay__content", e.contentClass], style: [S.value, M.value] }, R.value, e.contentProps), [(U = n.default) == null ? void 0 : U.call(n, { isActive: c })]), [[Hn, c.value], [gn("click-outside"), { handler: k, closeConditional: B, include: () => [C.value] }]])];
    } })])] })]);
  }), { activatorEl: C, target: O, animateClick: L, contentEl: _, globalTop: h, localTop: b, updateLocation: N };
} }), Cl = Symbol("Forwarded refs");
function Il(e, t) {
  let n = e;
  for (; n; ) {
    const l = Reflect.getOwnPropertyDescriptor(n, t);
    if (l)
      return l;
    n = Object.getPrototypeOf(n);
  }
}
function sl(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
    n[l - 1] = arguments[l];
  return e[Cl] = n, new Proxy(e, { get(o, a) {
    if (Reflect.has(o, a))
      return Reflect.get(o, a);
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const c of n)
        if (c.value && Reflect.has(c.value, a)) {
          const u = Reflect.get(c.value, a);
          return typeof u == "function" ? u.bind(c.value) : u;
        }
    }
  }, has(o, a) {
    if (Reflect.has(o, a))
      return !0;
    if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
      return !1;
    for (const c of n)
      if (c.value && Reflect.has(c.value, a))
        return !0;
    return !1;
  }, set(o, a, c) {
    if (Reflect.has(o, a))
      return Reflect.set(o, a, c);
    if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
      return !1;
    for (const u of n)
      if (u.value && Reflect.has(u.value, a))
        return Reflect.set(u.value, a, c);
    return !1;
  }, getOwnPropertyDescriptor(o, a) {
    var u;
    const c = Reflect.getOwnPropertyDescriptor(o, a);
    if (c)
      return c;
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const s of n) {
        if (!s.value)
          continue;
        const i = Il(s.value, a) ?? ("_" in s.value ? Il((u = s.value._) == null ? void 0 : u.setupState, a) : void 0);
        if (i)
          return i;
      }
      for (const s of n) {
        const i = s.value && s.value[Cl];
        if (!i)
          continue;
        const p = i.slice();
        for (; p.length; ) {
          const y = p.shift(), f = Il(y.value, a);
          if (f)
            return f;
          const m = y.value && y.value[Cl];
          m && p.push(...m);
        }
      }
    }
  } });
}
const Zr = H({ id: String, ...zn(ui({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Ca } }), ["absolute"]) }, "VMenu"), Qr = ne()({ name: "VMenu", props: Zr(), emits: { "update:modelValue": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const l = $e(e, "modelValue"), { scopeId: o } = ri(), a = tn(), c = v(() => e.id || `v-menu-${a}`), u = D(), s = me(El, null), i = de(0);
  async function p(b) {
    var w, O, G;
    const g = b.relatedTarget, C = b.target;
    await Me(), l.value && g !== C && ((w = u.value) != null && w.contentEl) && ((O = u.value) != null && O.globalTop) && ![document, u.value.contentEl].includes(C) && !u.value.contentEl.contains(C) && ((G = xl(u.value.contentEl)[0]) == null || G.focus());
  }
  function y() {
    s == null || s.closeParents();
  }
  function f(b) {
    var g, C, w;
    !e.disabled && b.key === "Tab" && (ua(xl((g = u.value) == null ? void 0 : g.contentEl, !1), b.shiftKey ? "prev" : "next", (O) => O.tabIndex >= 0) || (l.value = !1, (w = (C = u.value) == null ? void 0 : C.activatorEl) == null || w.focus()));
  }
  function m(b) {
    var C;
    if (e.disabled)
      return;
    const g = (C = u.value) == null ? void 0 : C.contentEl;
    g && l.value ? b.key === "ArrowDown" ? (b.preventDefault(), Ht(g, "next")) : b.key === "ArrowUp" && (b.preventDefault(), Ht(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(b.key) && (l.value = !0, b.preventDefault(), setTimeout(() => setTimeout(() => m(b))));
  }
  nn(El, { register() {
    ++i.value;
  }, unregister() {
    --i.value;
  }, closeParents() {
    setTimeout(() => {
      i.value || (l.value = !1, s == null || s.closeParents());
    }, 40);
  } }), K(l, (b) => {
    b ? (s == null || s.register(), document.addEventListener("focusin", p, { once: !0 })) : (s == null || s.unregister(), document.removeEventListener("focusin", p));
  });
  const h = v(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: m }, e.activatorProps));
  return se(() => {
    const b = Ko.filterProps(e);
    return d(Ko, Z({ ref: u, class: ["v-menu", e.class], style: e.style }, b, { modelValue: l.value, "onUpdate:modelValue": (g) => l.value = g, absolute: !0, activatorProps: h.value, "onClick:outside": y, onKeydown: f }, o), { activator: n.activator, default: function() {
      for (var g = arguments.length, C = new Array(g), w = 0; w < g; w++)
        C[w] = arguments[w];
      return d(je, { root: "VMenu" }, { default: () => {
        var O;
        return [(O = n.default) == null ? void 0 : O.call(n, ...C)];
      } });
    } });
  }), sl({ id: c, ΨopenChildren: i }, u);
} }), es = H({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ye(), ...Vt({ transition: { component: Ia } }) }, "VCounter"), ci = ne()({ name: "VCounter", functional: !0, props: es(), setup(e, t) {
  let { slots: n } = t;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return se(() => d(In, { transition: e.transition }, { default: () => [Ue(d("div", { class: ["v-counter", e.class], style: e.style }, [n.default ? n.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Hn, e.active]])] })), {};
} }), ns = H({ floating: Boolean, ...ye() }, "VFieldLabel"), Mt = ne()({ name: "VFieldLabel", props: ns(), setup(e, t) {
  let { slots: n } = t;
  return se(() => d(Na, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, n)), {};
} }), ts = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], no = H({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => ts.includes(e) }, "onClick:clear": an(), "onClick:appendInner": an(), "onClick:prependInner": an(), ...ye(), ...Zl(), ...hn(), ...Ne() }, "VField"), to = ne()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Ha(), ...no() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { themeClasses: a } = Xe(e), { loaderClasses: c } = al(e), { focusClasses: u, isFocused: s, focus: i, blur: p } = Et(e), { InputIcon: y } = qa(e), { roundedClasses: f } = bn(e), { rtlClasses: m } = Ft(), h = v(() => e.dirty || e.active), b = v(() => !(e.singleLine || !e.label && !o.label)), g = tn(), C = v(() => e.id || `input-${g}`), w = v(() => `${C.value}-messages`), O = D(), G = D(), T = D(), $ = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: R, backgroundColorStyles: P } = Un(oe(e, "bgColor")), { textColorClasses: S, textColorStyles: A } = yn(v(() => e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor));
  K(h, (_) => {
    if (b.value) {
      const M = O.value.$el, N = G.value.$el;
      requestAnimationFrame(() => {
        const k = jl(M), B = N.getBoundingClientRect(), x = B.x - k.x, V = B.y - k.y - (k.height / 2 - B.height / 2), j = B.width / 0.75, L = Math.abs(j - k.width) > 1 ? { maxWidth: ae(j) } : void 0, z = getComputedStyle(M), Q = getComputedStyle(N), E = 1e3 * parseFloat(z.transitionDuration) || 150, U = parseFloat(Q.getPropertyValue("--v-field-label-scale")), W = Q.getPropertyValue("color");
        M.style.visibility = "visible", N.style.visibility = "hidden", jn(M, { transform: `translate(${x}px, ${V}px) scale(${U})`, color: W, ...L }, { duration: E, easing: Kt, direction: _ ? "normal" : "reverse" }).finished.then(() => {
          M.style.removeProperty("visibility"), N.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const I = v(() => ({ isActive: h, isFocused: s, controlRef: T, blur: p, focus: i }));
  function F(_) {
    _.target !== document.activeElement && _.preventDefault();
  }
  return se(() => {
    var x, V, j;
    const _ = e.variant === "outlined", M = o["prepend-inner"] || e.prependInnerIcon, N = !(!e.clearable && !o.clear), k = !!(o["append-inner"] || e.appendInnerIcon || N), B = () => o.label ? o.label({ ...I.value, label: e.label, props: { for: C.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": k, "v-field--center-affix": e.centerAffix ?? !$.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": M, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !B(), [`v-field--variant-${e.variant}`]: !0 }, a.value, R.value, u.value, c.value, f.value, m.value, e.class], style: [P.value, e.style], onClick: F }, n), [d("div", { class: "v-field__overlay" }, null), d(Ql, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), M && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (x = o["prepend-inner"]) == null ? void 0 : x.call(o, I.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && d(Mt, { key: "floating-label", ref: G, class: [S.value], floating: !0, for: C.value, style: A.value }, { default: () => [B()] }), d(Mt, { ref: O, for: C.value }, { default: () => [B()] }), (V = o.default) == null ? void 0 : V.call(o, { ...I.value, props: { id: C.value, class: "v-field__input", "aria-describedby": w.value }, focus: i, blur: p })]), N && d(Sa, { key: "clear" }, { default: () => [Ue(d("div", { class: "v-field__clearable", onMousedown: (L) => {
      L.preventDefault(), L.stopPropagation();
    } }, [o.clear ? o.clear() : d(y, { name: "clear" }, null)]), [[Hn, e.dirty]])] }), k && d("div", { key: "append", class: "v-field__append-inner" }, [(j = o["append-inner"]) == null ? void 0 : j.call(o, I.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", S.value], style: A.value }, [_ && d(Fe, null, [d("div", { class: "v-field__outline__start" }, null), b.value && d("div", { class: "v-field__outline__notch" }, [d(Mt, { ref: G, floating: !0, for: C.value }, { default: () => [B()] })]), d("div", { class: "v-field__outline__end" }, null)]), $.value && b.value && d(Mt, { ref: G, floating: !0, for: C.value }, { default: () => [B()] })])]);
  }), { controlRef: T };
} });
function di(e) {
  return aa(e, Object.keys(to.props).filter((t) => !Bl(t) && t !== "class" && t !== "style"));
}
const ls = ["color", "file", "time", "date", "datetime-local", "week", "month"], pi = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Tt(), ...no() }, "VTextField"), Tl = ne()({ name: "VTextField", directives: { Intersect: Yl }, inheritAttrs: !1, props: pi(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const a = $e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = Et(e), i = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), p = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function f($, R) {
    var P, S;
    e.autofocus && $ && ((S = (P = R[0].target) == null ? void 0 : P.focus) == null || S.call(P));
  }
  const m = D(), h = D(), b = D(), g = v(() => ls.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function C() {
    var $;
    b.value !== document.activeElement && (($ = b.value) == null || $.focus()), c.value || u();
  }
  function w($) {
    l("mousedown:control", $), $.target !== b.value && (C(), $.preventDefault());
  }
  function O($) {
    C(), l("click:control", $);
  }
  function G($) {
    $.stopPropagation(), C(), Me(() => {
      a.value = null, sa(e["onClick:clear"], $);
    });
  }
  function T($) {
    var P;
    const R = $.target;
    if (a.value = R.value, ((P = e.modelModifiers) == null ? void 0 : P.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const S = [R.selectionStart, R.selectionEnd];
      Me(() => {
        R.selectionStart = S[0], R.selectionEnd = S[1];
      });
    }
  }
  return se(() => {
    const $ = !!(o.counter || e.counter !== !1 && e.counter != null), R = !(!$ && !o.details), [P, S] = kt(n), { modelValue: A, ...I } = Bn.filterProps(e), F = di(e);
    return d(Bn, Z({ ref: m, modelValue: a.value, "onUpdate:modelValue": (_) => a.value = _, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, P, I, { centerAffix: !y.value, focused: c.value }), { ...o, default: (_) => {
      let { id: M, isDisabled: N, isDirty: k, isReadonly: B, isValid: x } = _;
      return d(to, Z({ ref: h, onMousedown: w, onClick: O, "onClick:clear": G, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, F, { id: M.value, active: g.value || k.value, dirty: k.value || e.dirty, disabled: N.value, focused: c.value, error: x.value === !1 }), { ...o, default: (V) => {
        let { props: { class: j, ...L } } = V;
        const z = Ue(d("input", Z({ ref: b, value: a.value, onInput: T, autofocus: e.autofocus, readonly: B.value, disabled: N.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: C, onBlur: s }, L, S), null), [[gn("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(Fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? d("div", { class: j, "data-no-activator": "" }, [o.default(), z]) : Vi(z, { class: j }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: R ? (_) => {
      var M;
      return d(Fe, null, [(M = o.details) == null ? void 0 : M.call(o, _), $ && d(Fe, null, [d("span", null, null), d(ci, { active: e.persistentCounter || c.value, value: i.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), sl({}, m, h, b);
} }), os = H({ renderless: Boolean, ...ye() }, "VVirtualScrollItem"), as = ne()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: os(), emits: { "update:height": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const { resizeRef: a, contentRect: c } = ql(void 0, "border");
  K(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.height;
  }, (u) => {
    u != null && l("update:height", u);
  }), se(() => {
    var u, s;
    return e.renderless ? d(Fe, null, [(u = o.default) == null ? void 0 : u.call(o, { itemRef: a })]) : d("div", Z({ ref: a, class: ["v-virtual-scroll__item", e.class], style: e.style }, n), [(s = o.default) == null ? void 0 : s.call(o)]);
  });
} }), is = H({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function rs(e, t) {
  const n = ii(), l = de(0);
  rn(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const o = de(0), a = de(Math.ceil((parseInt(e.height) || n.height.value) / (l.value || 16)) || 1), c = de(0), u = de(0), s = D(), i = D();
  let p = 0;
  const { resizeRef: y, contentRect: f } = ql();
  rn(() => {
    y.value = s.value;
  });
  const m = v(() => {
    var k;
    return s.value === document.documentElement ? n.height.value : ((k = f.value) == null ? void 0 : k.height) || parseInt(e.height) || 0;
  }), h = v(() => !!(s.value && i.value && m.value && l.value));
  let b = Array.from({ length: t.value.length }), g = Array.from({ length: t.value.length });
  const C = de(0);
  let w = -1;
  function O(k) {
    return b[k] || l.value;
  }
  const G = function(k, B) {
    let x = 0;
    const V = function() {
      for (var j = arguments.length, L = new Array(j), z = 0; z < j; z++)
        L[z] = arguments[z];
      clearTimeout(x), x = setTimeout(() => k(...L), r(B));
    };
    return V.clear = () => {
      clearTimeout(x);
    }, V.immediate = k, V;
  }(() => {
    const k = performance.now();
    g[0] = 0;
    const B = t.value.length;
    for (let x = 1; x <= B - 1; x++)
      g[x] = (g[x - 1] || 0) + O(x - 1);
    C.value = Math.max(C.value, performance.now() - k);
  }, C), T = K(h, (k) => {
    k && (T(), p = i.value.offsetTop, G.immediate(), F(), ~w && Me(() => {
      Ke && window.requestAnimationFrame(() => {
        M(w), w = -1;
      });
    }));
  });
  function $(k) {
    return k = Gn(k, 0, t.value.length - 1), g[k] || 0;
  }
  function R(k) {
    return function(B, x) {
      let V = B.length - 1, j = 0, L = 0, z = null, Q = -1;
      if (B[V] < x)
        return V;
      for (; j <= V; )
        if (L = j + V >> 1, z = B[L], z > x)
          V = L - 1;
        else {
          if (!(z < x))
            return z === x ? L : j;
          Q = L, j = L + 1;
        }
      return Q;
    }(g, k);
  }
  K(m, (k, B) => {
    B && F();
  }), He(() => {
    G.clear();
  });
  let P = 0, S = 0, A = 0, I = -1;
  function F() {
    cancelAnimationFrame(I), I = requestAnimationFrame(_);
  }
  function _() {
    if (!s.value || !m.value)
      return;
    const k = P - p, B = Math.sign(S), x = Gn(R(Math.max(0, k - 100)), 0, t.value.length), V = Gn(R(k + m.value + 100) + 1, x + 1, t.value.length);
    if ((B !== -1 || x < o.value) && (B !== 1 || V > a.value)) {
      const j = $(o.value) - $(x), L = $(V) - $(a.value);
      Math.max(j, L) > 100 ? (o.value = x, a.value = V) : (x <= 0 && (o.value = x), V >= t.value.length && (a.value = V));
    }
    c.value = $(o.value), u.value = $(t.value.length) - $(a.value);
  }
  function M(k) {
    const B = $(k);
    !s.value || k && !B ? w = k : s.value.scrollTop = B;
  }
  const N = v(() => t.value.slice(o.value, a.value).map((k, B) => ({ raw: k, index: B + o.value })));
  return K(t, () => {
    b = Array.from({ length: t.value.length }), g = Array.from({ length: t.value.length }), G.immediate(), F();
  }, { deep: !0 }), { containerRef: s, markerRef: i, computedItems: N, paddingTop: c, paddingBottom: u, scrollToIndex: M, handleScroll: function() {
    if (!s.value || !i.value)
      return;
    const k = s.value.scrollTop, B = performance.now();
    B - A > 500 ? (S = Math.sign(k - P), p = i.value.offsetTop) : S = k - P, P = k, A = B, F();
  }, handleScrollend: function() {
    s.value && i.value && (S = 0, A = 0, F());
  }, handleItemResize: function(k, B) {
    const x = b[k], V = l.value;
    l.value = V ? Math.min(l.value, B) : B, x === B && V === l.value || (b[k] = B, G());
  } };
}
const ss = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...is(), ...ye(), ...Dn() }, "VVirtualScroll"), us = ne()({ name: "VVirtualScroll", props: ss(), setup(e, t) {
  let { slots: n } = t;
  const l = Le("VVirtualScroll"), { dimensionStyles: o } = Ln(e), { containerRef: a, markerRef: c, handleScroll: u, handleScrollend: s, handleItemResize: i, scrollToIndex: p, paddingTop: y, paddingBottom: f, computedItems: m } = rs(e, oe(e, "items"));
  return Vn(() => e.renderless, () => {
    function h() {
      var g, C;
      const b = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      a.value === document.documentElement ? (document[b]("scroll", u, { passive: !0 }), document[b]("scrollend", s)) : ((g = a.value) == null || g[b]("scroll", u, { passive: !0 }), (C = a.value) == null || C[b]("scrollend", s));
    }
    Yn(() => {
      a.value = ma(l.vnode.el, !0), h(!0);
    }), He(h);
  }), se(() => {
    const h = m.value.map((b) => d(as, { key: b.index, renderless: e.renderless, "onUpdate:height": (g) => i(b.index, g) }, { default: (g) => {
      var C;
      return (C = n.default) == null ? void 0 : C.call(n, { item: b.raw, index: b.index, ...g });
    } }));
    return e.renderless ? d(Fe, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: ae(y.value) } }, null), h, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ae(f.value) } }, null)]) : d("div", { ref: a, class: ["v-virtual-scroll", e.class], onScrollPassive: u, onScrollend: s, style: [o.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: ae(y.value), paddingBottom: ae(f.value) } }, [h])]);
  }), { scrollToIndex: p };
} });
function cs(e, t) {
  const n = de(!1);
  let l;
  return { onListScroll: function(o) {
    cancelAnimationFrame(l), n.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        n.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var u, s;
    if (o.key === "Tab" && ((u = t.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const a = (s = e.value) == null ? void 0 : s.$el;
    if (!a)
      return;
    o.key !== "Home" && o.key !== "End" || a.scrollTo({ top: o.key === "Home" ? 0 : a.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => {
        if (n.value) {
          const p = K(n, () => {
            p(), i();
          });
        } else
          i();
      });
    }();
    const c = a.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const i = a.getBoundingClientRect().top;
      for (const p of c)
        if (p.getBoundingClientRect().top >= i) {
          p.focus();
          break;
        }
    } else {
      const i = a.getBoundingClientRect().bottom;
      for (const p of [...c].reverse())
        if (p.getBoundingClientRect().bottom <= i) {
          p.focus();
          break;
        }
    }
  } };
}
const ds = H({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...ti({ itemChildren: !1 }) }, "Select"), ps = H({ ...ds(), ...zn(pi({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Vt({ transition: { component: Ca } }) }, "VSelect"), vs = ne()({ name: "VSelect", props: ps(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, t) {
  let { slots: n } = t;
  const { t: l } = Hl(), o = D(), a = D(), c = D(), u = $e(e, "menu"), s = v({ get: () => u.value, set: (B) => {
    var x;
    u.value && !B && ((x = a.value) != null && x.ΨopenChildren) || (u.value = B);
  } }), { items: i, transformIn: p, transformOut: y } = function(B) {
    const x = v(() => li(B, B.items)), V = v(() => x.value.some((j) => j.value === null));
    return { items: x, transformIn: function(j) {
      return V.value || (j = j.filter((L) => L !== null)), j.map((L) => B.returnObject && typeof L == "string" ? Ol(B, L) : x.value.find((z) => B.valueComparator(L, z.value)) || Ol(B, L));
    }, transformOut: function(j) {
      return B.returnObject ? j.map((L) => {
        let { raw: z } = L;
        return z;
      }) : j.map((L) => {
        let { value: z } = L;
        return z;
      });
    } };
  }(e), f = $e(e, "modelValue", [], (B) => p(B === null ? [null] : pn(B)), (B) => {
    const x = y(B);
    return e.multiple ? x : x[0] ?? null;
  }), m = v(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), h = Ya(), b = v(() => f.value.map((B) => B.value)), g = de(!1), C = v(() => s.value ? e.closeText : e.openText);
  let w, O = "";
  const G = v(() => e.hideSelected ? i.value.filter((B) => !f.value.some((x) => x === B)) : i.value), T = v(() => e.hideNoData && !i.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), $ = D(), { onListScroll: R, onListKeydown: P } = cs($, o);
  function S(B) {
    e.openOnClear && (s.value = !0);
  }
  function A() {
    T.value || (s.value = !s.value);
  }
  function I(B) {
    var j, L;
    if (!B.key || e.readonly || h != null && h.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (s.value = !0), ["Escape", "Tab"].includes(B.key) && (s.value = !1), B.key === "Home" ? (j = $.value) == null || j.focus("first") : B.key === "End" && ((L = $.value) == null || L.focus("last")), e.multiple || !function(z) {
      const Q = z.key.length === 1, E = !z.ctrlKey && !z.metaKey && !z.altKey;
      return Q && E;
    }(B)))
      return;
    const x = performance.now();
    x - w > 1e3 && (O = ""), O += B.key.toLowerCase(), w = x;
    const V = i.value.find((z) => z.title.toLowerCase().startsWith(O));
    V !== void 0 && (f.value = [V]);
  }
  function F(B) {
    if (e.multiple) {
      const x = f.value.findIndex((V) => e.valueComparator(V.value, B.value));
      if (x === -1)
        f.value = [...f.value, B];
      else {
        const V = [...f.value];
        V.splice(x, 1), f.value = V;
      }
    } else
      f.value = [B], s.value = !1;
  }
  function _(B) {
    var x;
    (x = $.value) != null && x.$el.contains(B.relatedTarget) || (s.value = !1);
  }
  function M() {
    var B;
    g.value && ((B = o.value) == null || B.focus());
  }
  function N(B) {
    g.value = !0;
  }
  function k(B) {
    if (B == null)
      f.value = [];
    else if (Yt(o.value, ":autofill") || Yt(o.value, ":-webkit-autofill")) {
      const x = i.value.find((V) => V.title === B);
      x && F(x);
    } else
      o.value && (o.value.value = "");
  }
  return K(s, () => {
    if (!e.hideSelected && s.value && f.value.length) {
      const B = G.value.findIndex((x) => f.value.some((V) => e.valueComparator(V.value, x.value)));
      Ke && window.requestAnimationFrame(() => {
        var x;
        B >= 0 && ((x = c.value) == null || x.scrollToIndex(B));
      });
    }
  }), se(() => {
    const B = !(!e.chips && !n.chip), x = !!(!e.hideNoData || G.value.length || n["prepend-item"] || n["append-item"] || n["no-data"]), V = f.value.length > 0, j = Tl.filterProps(e), L = V || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Tl, Z({ ref: o }, j, { modelValue: f.value.map((z) => z.props.value).join(", "), "onUpdate:modelValue": k, focused: g.value, "onUpdate:focused": (z) => g.value = z, validationValue: f.externalValue, counterValue: m.value, dirty: V, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!n.selection }, e.class], style: e.style, inputmode: "none", placeholder: L, "onClick:clear": S, "onMousedown:control": A, onBlur: _, onKeydown: I, "aria-label": l(C.value), title: l(C.value) }), { ...n, default: () => d(Fe, null, [d(Qr, Z({ ref: a, modelValue: s.value, "onUpdate:modelValue": (z) => s.value = z, activator: "parent", contentClass: "v-select__content", disabled: T.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: M }, e.menuProps), { default: () => [x && d(Rr, { ref: $, selected: b.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (z) => z.preventDefault(), onKeydown: P, onFocusin: N, onScrollPassive: R, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var z, Q, E;
      return [(z = n["prepend-item"]) == null ? void 0 : z.call(n), !G.value.length && !e.hideNoData && (((Q = n["no-data"]) == null ? void 0 : Q.call(n)) ?? d(nl, { title: l(e.noDataText) }, null)), d(us, { ref: c, renderless: !0, items: G.value }, { default: (U) => {
        var pe;
        let { item: W, index: q, itemRef: Y } = U;
        const ee = Z(W.props, { ref: Y, key: q, onClick: () => F(W) });
        return ((pe = n.item) == null ? void 0 : pe.call(n, { item: W, index: q, props: ee })) ?? d(nl, Z(ee, { role: "option" }), { prepend: (be) => {
          let { isSelected: ge } = be;
          return d(Fe, null, [e.multiple && !e.hideSelected ? d(Vl, { key: W.value, modelValue: ge, ripple: !1, tabindex: "-1" }, null) : void 0, W.props.prependIcon && d(Se, { icon: W.props.prependIcon }, null)]);
        } });
      } }), (E = n["append-item"]) == null ? void 0 : E.call(n)];
    } })] }), f.value.map((z, Q) => {
      const E = { "onClick:close": function(q) {
        q.stopPropagation(), q.preventDefault(), F(z);
      }, onMousedown(q) {
        q.preventDefault(), q.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, U = B ? !!n.chip : !!n.selection, W = U ? ca(B ? n.chip({ item: z, index: Q, props: E }) : n.selection({ item: z, index: Q })) : void 0;
      if (!U || W)
        return d("div", { key: z.value, class: "v-select__selection" }, [B ? n.chip ? d(je, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: z.title } } }, { default: () => [W] }) : d(xr, Z({ key: "chip", closable: e.closableChips, size: "small", text: z.title, disabled: z.props.disabled }, E), null) : W ?? d("span", { class: "v-select__selection-text" }, [z.title, e.multiple && Q < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [ta(",")])])]);
    })]), "append-inner": function() {
      var U;
      for (var z = arguments.length, Q = new Array(z), E = 0; E < z; E++)
        Q[E] = arguments[E];
      return d(Fe, null, [(U = n["append-inner"]) == null ? void 0 : U.call(n, ...Q), e.menuIcon ? d(Se, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), sl({ isFocused: g, menu: s, select: F }, o);
} }), fs = ne()({ name: "VCardActions", props: ye(), setup(e, t) {
  let { slots: n } = t;
  return et({ VBtn: { slim: !0, variant: "text" } }), se(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = n.default) == null ? void 0 : l.call(n)]);
  }), {};
} }), ys = wt("v-card-subtitle"), ms = wt("v-card-title"), gs = H({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: [String, Number], title: [String, Number], ...ye(), ...cn() }, "VCardItem"), hs = ne()({ name: "VCardItem", props: gs(), setup(e, t) {
  let { slots: n } = t;
  return se(() => {
    var i;
    const l = !(!e.prependAvatar && !e.prependIcon), o = !(!l && !n.prepend), a = !(!e.appendAvatar && !e.appendIcon), c = !(!a && !n.append), u = !(e.title == null && !n.title), s = !(e.subtitle == null && !n.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [o && d("div", { key: "prepend", class: "v-card-item__prepend" }, [n.prepend ? d(je, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, n.prepend) : l && d(qn, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [u && d(ms, { key: "title" }, { default: () => {
      var p;
      return [((p = n.title) == null ? void 0 : p.call(n)) ?? e.title];
    } }), s && d(ys, { key: "subtitle" }, { default: () => {
      var p;
      return [((p = n.subtitle) == null ? void 0 : p.call(n)) ?? e.subtitle];
    } }), (i = n.default) == null ? void 0 : i.call(n)]), c && d("div", { key: "append", class: "v-card-item__append" }, [n.append ? d(je, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, n.append) : a && d(qn, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Wn = wt("v-card-text"), bs = H({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...nt(), ...ye(), ...cn(), ...Dn(), ...lt(), ...Zl(), ...Kl(), ...$a(), ...hn(), ...rl(), ...en(), ...Ne(), ...kn({ variant: "elevated" }) }, "VCard"), at = ne()({ name: "VCard", directives: { Ripple: $t }, props: bs(), setup(e, t) {
  let { attrs: n, slots: l } = t;
  const { themeClasses: o } = Xe(e), { borderClasses: a } = tt(e), { colorClasses: c, colorStyles: u, variantClasses: s } = _t(e), { densityClasses: i } = Cn(e), { dimensionStyles: p } = Ln(e), { elevationClasses: y } = ot(e), { loaderClasses: f } = al(e), { locationStyles: m } = Jl(e), { positionClasses: h } = Ea(e), { roundedClasses: b } = bn(e), g = il(e, n), C = v(() => e.link !== !1 && g.isLink.value), w = v(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
  return se(() => {
    const O = C.value ? "a" : e.tag, G = !(!l.title && e.title == null), T = !(!l.subtitle && e.subtitle == null), $ = G || T, R = !!(l.append || e.appendAvatar || e.appendIcon), P = !!(l.prepend || e.prependAvatar || e.prependIcon), S = !(!l.image && !e.image), A = $ || P || R, I = !(!l.text && e.text == null);
    return Ue(d(O, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": w.value }, o.value, a.value, c.value, i.value, y.value, f.value, h.value, b.value, s.value, e.class], style: [u.value, p.value, m.value, e.style], href: g.href.value, onClick: w.value && g.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var F;
      return [S && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(je, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(xa, { key: "image-img", cover: !0, src: e.image }, null)]), d(Ql, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), A && d(hs, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), I && d(Wn, { key: "text" }, { default: () => {
        var _;
        return [((_ = l.text) == null ? void 0 : _.call(l)) ?? e.text];
      } }), (F = l.default) == null ? void 0 : F.call(l), l.actions && d(fs, null, { default: l.actions }), At(w.value, "v-card")];
    } }), [[gn("ripple"), w.value && e.ripple]]);
  }), {};
} }), Cs = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Tt(), ...eo() }, "VSwitch"), Is = ne()({ name: "VSwitch", inheritAttrs: !1, props: Cs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, t) {
  let { attrs: n, slots: l } = t;
  const o = $e(e, "indeterminate"), a = $e(e, "modelValue"), { loaderClasses: c } = al(e), { isFocused: u, focus: s, blur: i } = Et(e), p = D(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = tn(), m = v(() => e.id || `switch-${f}`);
  function h() {
    o.value && (o.value = !1);
  }
  function b(g) {
    var C, w;
    g.stopPropagation(), g.preventDefault(), (w = (C = p.value) == null ? void 0 : C.input) == null || w.click();
  }
  return se(() => {
    const [g, C] = kt(n), w = Bn.filterProps(e), O = el.filterProps(e);
    return d(Bn, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": o.value }, c.value, e.class] }, g, w, { modelValue: a.value, "onUpdate:modelValue": (G) => a.value = G, id: m.value, focused: u.value, style: e.style }), { ...l, default: (G) => {
      let { id: T, messagesId: $, isDisabled: R, isReadonly: P, isValid: S } = G;
      return d(el, Z({ ref: p }, O, { modelValue: a.value, "onUpdate:modelValue": [(A) => a.value = A, h], id: T.value, "aria-describedby": $.value, type: "checkbox", "aria-checked": o.value ? "mixed" : void 0, disabled: R.value, readonly: P.value, onFocus: s, onBlur: i }, C), { ...l, default: (A) => {
        let { backgroundColorClasses: I, backgroundColorStyles: F } = A;
        return d("div", { class: ["v-switch__track", ...I.value], style: F.value, onClick: b }, null);
      }, input: (A) => {
        let { inputNode: I, icon: F, backgroundColorClasses: _, backgroundColorStyles: M } = A;
        return d(Fe, null, [I, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": F || e.loading }, e.inset ? void 0 : _.value], style: e.inset ? void 0 : M.value }, [d(Ki, null, { default: () => [e.loading ? d(Ql, { name: "v-switch", active: !0, color: S.value === !1 ? void 0 : y.value }, { default: (N) => l.loader ? l.loader(N) : d(Pa, { active: N.isActive, color: N.color, indeterminate: !0, size: "16", width: "2" }, null) }) : F && d(Se, { key: F, icon: F, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), Ss = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Tt(), ...no() }, "VTextarea"), Bs = ne()({ name: "VTextarea", directives: { Intersect: Yl }, inheritAttrs: !1, props: Ss(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, t) {
  let { attrs: n, emit: l, slots: o } = t;
  const a = $e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = Et(e), i = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : (a.value || "").toString().length), p = v(() => n.maxlength ? n.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(I, F) {
    var _, M;
    e.autofocus && I && ((M = (_ = F[0].target) == null ? void 0 : _.focus) == null || M.call(_));
  }
  const f = D(), m = D(), h = de(""), b = D(), g = v(() => e.persistentPlaceholder || c.value || e.active);
  function C() {
    var I;
    b.value !== document.activeElement && ((I = b.value) == null || I.focus()), c.value || u();
  }
  function w(I) {
    C(), l("click:control", I);
  }
  function O(I) {
    l("mousedown:control", I);
  }
  function G(I) {
    I.stopPropagation(), C(), Me(() => {
      a.value = "", sa(e["onClick:clear"], I);
    });
  }
  function T(I) {
    var _;
    const F = I.target;
    if (a.value = F.value, (_ = e.modelModifiers) == null ? void 0 : _.trim) {
      const M = [F.selectionStart, F.selectionEnd];
      Me(() => {
        F.selectionStart = M[0], F.selectionEnd = M[1];
      });
    }
  }
  const $ = D(), R = D(+e.rows), P = v(() => ["plain", "underlined"].includes(e.variant));
  function S() {
    e.autoGrow && Me(() => {
      if (!$.value || !m.value)
        return;
      const I = getComputedStyle($.value), F = getComputedStyle(m.value.$el), _ = parseFloat(I.getPropertyValue("--v-field-padding-top")) + parseFloat(I.getPropertyValue("--v-input-padding-top")) + parseFloat(I.getPropertyValue("--v-field-padding-bottom")), M = $.value.scrollHeight, N = parseFloat(I.lineHeight), k = Gn(M ?? 0, Math.max(parseFloat(e.rows) * N + _, parseFloat(F.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * N + _ || 1 / 0);
      R.value = Math.floor((k - _) / N), h.value = ae(k);
    });
  }
  let A;
  return rn(() => {
    e.autoGrow || (R.value = +e.rows);
  }), Yn(S), K(a, S), K(() => e.rows, S), K(() => e.maxRows, S), K(() => e.density, S), K($, (I) => {
    I ? (A = new ResizeObserver(S), A.observe($.value)) : A == null || A.disconnect();
  }), mn(() => {
    A == null || A.disconnect();
  }), se(() => {
    const I = !!(o.counter || e.counter || e.counterValue), F = !(!I && !o.details), [_, M] = kt(n), { modelValue: N, ...k } = Bn.filterProps(e), B = di(e);
    return d(Bn, Z({ ref: f, modelValue: a.value, "onUpdate:modelValue": (x) => a.value = x, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": P.value }, e.class], style: e.style }, _, k, { centerAffix: R.value === 1 && !P.value, focused: c.value }), { ...o, default: (x) => {
      let { id: V, isDisabled: j, isDirty: L, isReadonly: z, isValid: Q } = x;
      return d(to, Z({ ref: m, style: { "--v-textarea-control-height": h.value }, onClick: w, onMousedown: O, "onClick:clear": G, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, B, { id: V.value, active: g.value || L.value, centerAffix: R.value === 1 && !P.value, dirty: L.value || e.dirty, disabled: j.value, focused: c.value, error: Q.value === !1 }), { ...o, default: (E) => {
        let { props: { class: U, ...W } } = E;
        return d(Fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Ue(d("textarea", Z({ ref: b, class: U, value: a.value, onInput: T, autofocus: e.autofocus, readonly: z.value, disabled: j.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: C, onBlur: s }, W, M), null), [[gn("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Ue(d("textarea", { class: [U, "v-textarea__sizer"], id: `${W.id}-sizer`, "onUpdate:modelValue": (q) => a.value = q, ref: $, readonly: !0, "aria-hidden": "true" }, null), [[Ai, a.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: F ? (x) => {
      var V;
      return d(Fe, null, [(V = o.details) == null ? void 0 : V.call(o, x), I && d(Fe, null, [d("span", null, null), d(ci, { active: e.persistentCounter || c.value, value: i.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), sl({}, f, m, b);
} }), vi = sn({ __name: "BooleanIcons", props: Qe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const t = e, n = me(Symbol.for("vuetify:icons")), l = $n(e, "modelValue"), o = v(() => on({ icon: t.iconFalse, iconOptions: n, name: "false" })), a = v(() => on({ icon: t.iconTrue, iconOptions: n, name: "true" }));
  return (c, u) => l.value ? (J(), ze(r(Se), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: r(a), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (J(), ze(r(Se), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: r(o), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), ie = "v-inline-fields", it = (e) => {
  const { cell: t = !1, field: n = "", density: l = "", disabled: o = !1, iconSet: a = "mdi", loading: c = !1, loadingWait: u, tableField: s = !1, variant: i } = e, p = l && i;
  return { [`${ie}`]: !0, [`${ie}--container`]: !0, [`${ie}--container-cell`]: t, [`${ie}--container-disabled`]: r(o), [`${ie}--container-table`]: s, [`${ie}--container-icon-set-${a}`]: !0, [`${ie}--container-loading`]: c && u, [`${ie}--container-${n}`]: !0, [`${ie}--container-${n}-${l}`]: !0, [`${ie}--container-${n}-${l}-${i}`]: p, [`${ie}--container-${n}-${i}`]: i, [`${ie}--container-${n}-${i}-${l}`]: p, [`${ie}--container-${l}`]: l, [`${ie}--container-${l}-${n}`]: l, [`${ie}--container-${l}-${i}`]: p, [`${ie}--container-${i}`]: i, [`${ie}--container-${i}-${l}`]: p, [`${ie}--container-${i}-${n}`]: i };
}, rt = (e) => {
  const { cell: t = !1, cellUnderlineFullWidth: n = !0, field: l = "", density: o = "" } = e;
  return { [`${ie}--display-container-cell`]: t, [`${ie}--display-container-cell-underline-full-width`]: t && n, [`${ie}--display-container`]: !0, [`${ie}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${o}`]: !0, "v-input--horizontal": !0 };
}, ul = (e) => {
  const { density: t = "", variant: n = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${t}`]: !0, [`v-text-field--plain-${n}`]: !0 };
}, fi = (e) => {
  const { density: t = "" } = e;
  return { [`${ie}--selection-control`]: !0, [`v-selection-control--density-${t}`]: !0 };
}, lo = (e, t, n) => {
  const { error: l = !1, empty: o = !1 } = n;
  return { [`${ie}`]: !0, [`${ie}--display-value-${e}`]: !0, [`${ie}--display-value`]: !0, [`${ie}--display-value-empty`]: r(o), [`text-${t}`]: !r(l), "text-danger": r(l) };
}, st = (e) => {
  const { name: t, active: n = !1 } = e;
  return { [`${ie}`]: !0, [`${ie}--field`]: !0, [`${ie}--field-${t}`]: !0, [`${ie}--field-active`]: n };
}, ut = (e) => {
  const { name: t, showField: n } = e;
  return { [`${ie}--card-container`]: !0, [`${ie}--card-container-${t}`]: !0, "d-none": !n };
};
function Jo(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const t = 100 * Number(e);
    return t >= 100 ? 100 : t;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Zo(e) {
  let t = function(y) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let m = y;
    return Object.entries(f).forEach(([h, b]) => {
      y.toLowerCase() != h.toLowerCase() || (m = b);
    }), m;
  }(e), n = 0, l = 0, o = 0, a = 100, c = 0, u = 0, s = 0;
  if (t.substring(0, 1) === "#")
    t = function(y) {
      let f = y.replace("#", "");
      f.length === 3 && (f = f.split("").map((C) => C + C).join(""));
      const m = parseInt(f.substring(0, 2), 16), h = parseInt(f.substring(2, 4), 16), b = parseInt(f.substring(4, 6), 16);
      return [m, h, b, 100];
    }(t);
  else if (t.includes("rgb"))
    t = [...t.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (t.includes("hsl"))
    return t = [...t.matchAll(/[\d+.\d+]+/g)].map(String), n = t[0], l = t[1], o = t[2], a = Jo(t[3]), `${n} ${l}% ${o}% / ${a}%`;
  [c, u, s, a] = t, c /= 255, u /= 255, s /= 255, a = Jo(a);
  const i = Math.max(c, u, s), p = Math.min(c, u, s);
  if (i === null || !p === null || isNaN(i) || isNaN(p)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${t}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (n = (i + p) / 2, l = (i + p) / 2, o = (i + p) / 2, i == p)
    n = l = 0;
  else {
    const y = i - p;
    switch (l = o > 0.5 ? y / (2 - i - p) : y / (i + p), i) {
      case c:
        n = (u - s) / y + (u < s ? 6 : 0);
        break;
      case u:
        n = (s - c) / y + 2;
        break;
      case s:
        n = (c - u) / y + 4;
    }
    n /= 6;
  }
  return n = Math.round(360 * n), l = Math.round(100 * l), o = Math.round(100 * o), `${n} ${l}% ${o}% / ${a}%`;
}
const xs = (e, t) => {
  if (function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const n = function(l, o) {
    const a = o.global.current.value.colors;
    return Object.entries(a).find(([c]) => c === l);
  }(e, t);
  return n ? `hsl(${Zo(n[1])})` : `hsl(${Zo(e)})`;
}, mt = (e) => {
  const { str: t, unit: n = "px" } = e;
  if (t != null && t !== "")
    return +t ? `${Number(t)}${n}` : String(t);
}, yi = (e) => {
  var o;
  const { modelValue: t, trueValue: n } = e, l = r(t);
  return ((o = l == null ? void 0 : l.toLowerCase) == null ? void 0 : o.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == n || l === n;
}, oo = (e) => {
  const { underlineStyle: t, underlineWidth: n, color: l, error: o, theme: a, underlined: c } = e;
  let { underlineColor: u } = e;
  u = u || l;
  const s = { "border-bottom-color": xs(u, a), "border-bottom-style": t, "border-bottom-width": n };
  return r(o) && (s["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (s["border-bottom"] = "none"), s;
}, _n = (e) => {
  const { cardMinWidth: t, cardOffsetX: n, cardOffsetY: l, cardWidth: o, field: a, name: c = "" } = e, u = ((p) => {
    const { cardOffsetX: y, cardOffsetY: f, field: m } = p;
    if (!m)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: h, y: b } = m.getBoundingClientRect(), { width: g, height: C } = m.getBoundingClientRect(), { right: w, bottom: O } = m.getBoundingClientRect();
    return { bottom: mt({ str: O + Number(f) }), height: C, left: mt({ str: 0 + Number(y) }), right: mt({ str: w + Number(y) }), top: mt({ str: 2 + Number(f) }), width: mt({ str: g }), x: h, y: b };
  })({ cardOffsetX: n, cardOffsetY: l, field: a });
  let s = t, i = o;
  return i || (i = c === "checkbox" ? "fit-content" : u.width), s || (s = c === "checkbox" ? "fit-content" : u.width), { left: u.left, top: u.top, width: i, zIndex: 10 };
}, cl = sn({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(e, { emit: t }) {
  const n = t, l = e, o = En(), a = Wl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, u = v(() => lo(l.field, l.valueColor, { empty: l.empty, error: l.error })), s = v(() => oo({ color: l.color, error: l.error, theme: a, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), i = v(() => ((f) => {
    const { underlineWidth: m } = f;
    return { borderBottom: `${m || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), p = (f, m = !1) => ((h) => {
    const { inner: b = !1, position: g } = h;
    return { [`${ie}--display-icon`]: !b, [`${ie}--display-${g}-icon`]: !b, [`${ie}--display-${g}-inner-icon`]: b, "me-1": g === "prepend", "ms-1": g === "append" };
  })({ inner: m, position: f });
  function y() {
    n("toggleField");
  }
  return (f, m) => (J(), ce("div", { class: "v-inline-fields--display-wrapper", onClick: y }, [f.displayPrependIcon || r(o)["display.prepend"] ? (J(), ce("div", { key: 0, class: le(p("prepend")), style: Te(r(i)) }, [r(o)["display.prepend"] ? Ye(f.$slots, "display.prepend", Pe(Z({ key: 0 }, c))) : (J(), ze(Se, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : xe("", !0), Ge("div", { class: le(["d-inline-flex", r(u)]), style: Te(r(s)) }, [f.displayPrependInnerIcon || r(o)["display.prependInner"] ? (J(), ce("div", { key: 0, class: le(p("prepend", !0)) }, [r(o)["display.prependInner"] ? Ye(f.$slots, "display.prependInner", Pe(Z({ key: 0 }, c))) : (J(), ze(Se, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : xe("", !0), ta(" " + Ll(f.displayValue) + " ", 1), f.displayAppendInnerIcon || r(o)["display.appendInner"] ? (J(), ce("div", { key: 1, class: le(p("append", !0)) }, [r(o)["display.appendInner"] ? Ye(f.$slots, "display.appendInner", Pe(Z({ key: 0 }, c))) : (J(), ze(Se, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : xe("", !0)], 6), f.displayAppendIcon || r(o)["display.append"] ? (J(), ce("div", { key: 1, class: le(p("append")), style: Te(r(i)) }, [r(o)["display.append"] ? Ye(f.$slots, "display.append", Pe(Z({ key: 0 }, c))) : (J(), ze(Se, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : xe("", !0)]));
} }), ct = sn({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: t }) {
  const n = Tn(), l = t, o = e, a = me(Symbol.for("vuetify:icons")), c = v(() => o.error), u = v(() => ({ [`${ie}--save-fields-container`]: !0 })), s = v(() => o.loading), i = ln({ ...n, ...o }), p = v(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "fa-spin" : (a == null ? void 0 : a.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((C) => {
    const { cancelButtonVariant: w } = C;
    return { "me-1": w === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: i.cancelButtonVariant })), f = v(() => on({ icon: o.cancelIcon, iconOptions: a, name: "false" })), m = v(() => on({ icon: o.loadingIcon, iconOptions: a, name: "loading" })), h = v(() => on({ icon: o.saveIcon, iconOptions: a, name: "save" }));
  function b() {
    l("close");
  }
  function g() {
    l("save");
  }
  return (C, w) => (J(), ce("div", Z({ class: r(u) }, C.$attrs), [r(i).hideSaveIcon ? xe("", !0) : (J(), ze(Wo, { key: 0, class: "ms-1", color: r(i).saveButtonColor, disabled: r(c), icon: "", size: r(i).saveButtonSize, title: r(s) ? "Loading" : r(i).saveButtonTitle, variant: r(i).saveButtonVariant, onClick: g }, { default: he(() => [r(s) ? (J(), ze(Se, { key: 1, class: le(r(p)), color: r(i).loadingIconColor, icon: r(m) }, null, 8, ["class", "color", "icon"])) : (J(), ze(Se, { key: 0, color: r(c) ? "error" : r(i).saveIconColor, icon: r(h) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(i).hideCancelIcon ? xe("", !0) : (J(), ze(Wo, { key: 1, class: le(r(y)), color: r(i).cancelButtonColor, icon: "", size: r(i).cancelButtonSize, title: r(i).cancelButtonTitle, variant: r(i).cancelButtonVariant, onClick: b }, { default: he(() => [r(i).hideSaveIcon && r(s) ? (J(), ze(Se, { key: 0, class: le(r(p)), color: r(i).loadingIconColor, icon: r(m) }, null, 8, ["class", "color", "icon"])) : (J(), ze(Se, { key: 1, class: "text-default", color: r(i).cancelIconColor, icon: r(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), dl = (e) => {
  const { required: t, rules: n } = e;
  let { value: l } = e;
  l = r(l);
  const o = [];
  let a = !1;
  if (t && !l)
    return o.push("Field is required."), { errors: !0, results: o };
  if (n) {
    for (const c of n) {
      const u = (typeof c == "function" ? c : () => c)(l);
      u !== !0 && (typeof u == "string" ? o.push(u) : console.warn(`${u} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    a = o.length > 0;
  }
  return { errors: a, results: o };
}, dt = (e) => {
  const { attrs: t, closeSiblings: n, fieldOnly: l, props: o, showField: a, timeOpened: c } = e;
  let u = c;
  return n && !l && (u = /* @__PURE__ */ new Date()), { settings: { ...t, ...o }, showField: !r(a), timeOpened: u };
}, ao = (e) => {
  const { length: t = 0 } = e;
  let { suffix: n, text: l } = e;
  return l = l.toString(), n = n || "...", l.length > t ? `${l.substring(0, t)}${n}` : l;
}, pt = ["error", "update", "update:closeSiblingFields", "update:model-value"], ks = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], zt = (e) => {
  let t = e;
  return t = Object.entries(t).filter(([n]) => !ks.includes(n)), Object.fromEntries(t);
}, ws = { class: "v-selection-control__wrapper" }, mi = sn({ __name: "VInlineCheckbox", props: Qe(Xn({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Oi }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = me(Symbol.for("vuetify:icons")), s = Wl(), i = e;
  let p = ln({ ...l, ...i, ...c });
  const { cancelButtonColor: y, cancelButtonSize: f, cancelButtonTitle: m, cancelButtonVariant: h, cancelIcon: b, cancelIconColor: g, cardField: C, closeSiblings: w, color: O, fieldOnly: G, hideCancelIcon: T, hideDetails: $, loadingIcon: R, loadingIconColor: P, saveButtonColor: S, saveButtonSize: A, saveButtonTitle: I, saveButtonVariant: F, saveIcon: _, saveIconColor: M } = xn(p), N = v(() => i.disabled), k = v(() => i.loading), B = D(!1), x = D(!1), V = D(null), j = v(() => zt(p)), L = v(() => ({ ...Zn, ...i.cardProps }));
  K(() => k.value, (re, X) => {
    !re && X && x.value && Ae();
  });
  const z = v(() => on({ icon: i.trueIcon, iconOptions: u, name: "checkboxFalse" })), Q = v(() => on({ icon: i.iconTrue, iconOptions: u, name: "checkboxTrue" })), E = v(() => n.value == p.trueValue), U = v(() => yi({ modelValue: n, trueValue: p.trueValue })), W = v(() => it({ cell: p.cell && !x.value, density: p.density, disabled: N.value, field: "v-checkbox", loading: k.value, loadingWait: p.loadingWait, tableField: p.tableField })), q = v(() => rt({ cell: p.cell, cellUnderlineFullWidth: p.cellUnderlineFullWidth, density: p.density, field: "v-checkbox" })), Y = fi({ density: p.density }), ee = v(() => st({ active: x.value, name: "checkbox" })), pe = v(() => lo("checkbox", p.valueColor, { error: B })), be = v(() => ut({ name: "checkbox", showField: x.value })), ge = v(() => ({})), We = v(() => oo({ color: p.color, error: B, theme: s, underlineColor: p.underlineColor, underlineStyle: p.underlineStyle, underlineWidth: p.underlineWidth, underlined: p.underlined })), Ve = v(() => Be.value);
  function ke() {
    B.value = !1, Ae();
  }
  const Be = D(), Oe = D(null), we = D("body"), Ee = _i();
  function Ae() {
    var X, Ie;
    if (N.value || p.loadingWait && k.value)
      return;
    Be.value = _n({ cardMinWidth: (X = p.cardProps) == null ? void 0 : X.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (Ie = p.cardProps) == null ? void 0 : Ie.width, field: Oe.value, name: "checkbox" });
    const re = dt({ attrs: l, closeSiblings: w.value, fieldOnly: p.fieldOnly, props: i, showField: x, timeOpened: V.value });
    p = { ...p, ...re.settings }, x.value = re.showField, V.value = re.timeOpened, te !== null && w.value && x.value && !p.fieldOnly && te.emit(re.timeOpened);
  }
  function ve(re) {
    n.value = re, a("update", re), p.loadingWait || Ae();
  }
  let te, fe;
  function De(re) {
    a("update:closeSiblingFields", V), x.value && V.value !== re && Ae();
  }
  return K(() => Ee, () => {
    var re, X;
    Be.value = _n({ cardMinWidth: (re = p.cardProps) == null ? void 0 : re.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (X = p.cardProps) == null ? void 0 : X.width, field: Oe.value, name: "checkbox" });
  }, { deep: !0 }), w.value && import("@vueuse/core").then(({ useEventBus: re }) => {
    te = re(Jn), fe = te.on(De);
  }), Kn(() => {
    fe !== void 0 && te.off(De);
  }), (re, X) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Oe, class: le(r(W)), style: Te(r(ge)) }, [!r(x) && !r(p).fieldOnly || r(C) ? (J(), ce("div", { key: 0, class: le(r(q)), onClick: X[2] || (X[2] = (Ie) => r(p).cell ? Ae() : void 0) }, [Ge("div", { class: le(r(Y)), onClick: X[1] || (X[1] = (Ie) => r(p).cell ? void 0 : Ae()) }, [Ge("div", ws, [re.icons ? (J(), ce("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(pe)]), style: Te(r(We)) }, [d(r(vi), { modelValue: r(U), "onUpdate:modelValue": X[0] || (X[0] = (Ie) => On(U) ? U.value = Ie : null), "icon-false": r(p).iconFalse, "icon-false-color": r(p).iconFalseColor, "icon-false-title": r(p).iconFalseTitle, "icon-true": r(p).iconTrue, "icon-true-color": r(p).iconTrueColor, "icon-true-title": r(p).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ce("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(pe)]), style: Te(r(We)) }, Ll(r(E)), 7))])], 2)], 2)) : xe("", !0), r(x) || r(G) || r(C) ? (J(), ce("div", { key: 1, class: le(r(ee)) }, [(J(), ze(Pn, { disabled: !r(C), to: r(we) }, [d(Cr, Z(r(j), { color: r(O), density: r(p).density, disabled: r(k) || r(N), error: r(B), "false-icon": r(z), "false-value": r(p).falseValue, "hide-details": r($), label: r(p).label, "model-value": r(U), "true-icon": r(Q), "true-value": r(p).trueValue, "onUpdate:modelValue": ve }), vn({ _: 2 }, [fn(r(o), (Ie, ue) => ({ name: ue, fn: he((_e) => [Ye(re.$slots, ue, Pe(Re({ ..._e })))]) })), r(o).append ? void 0 : { name: "append", fn: he(() => [d(r(ct), { "cancel-button-color": r(y), "cancel-button-size": r(f), "cancel-button-title": r(m), "cancel-button-variant": r(h), "cancel-icon": r(b), "cancel-icon-color": r(g), error: r(B), "field-only": r(G), "hide-cancel-icon": r(T), "hide-save-icon": !0, loading: r(k), "loading-icon": r(R), "loading-icon-color": r(P), "save-button-color": r(S), "save-button-size": r(A), "save-button-title": r(I), "save-button-variant": r(F), "save-icon": r(_), "save-icon-color": r(M), onClose: ke, onSave: ve }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(C) ? (J(), ce("div", { key: 2, class: le(r(be)), style: Te(r(Ve)) }, [d(at, Pe(Re(r(L))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: we }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), gi = sn({ __name: "VInlineCustomField", props: Qe(Xn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...oa }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = ln({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: C, fieldOnly: w, hideCancelIcon: O, hideSaveIcon: G, loadingIcon: T, loadingIconColor: $, saveButtonColor: R, saveButtonSize: P, saveButtonTitle: S, saveButtonVariant: A, saveIcon: I, saveIconColor: F } = xn(i), _ = v(() => s.disabled), M = v(() => s.loading), N = D(!1), k = D(!1), B = D(!1), x = D(null);
  let V = n.value;
  K(() => M.value, (te, fe) => {
    !te && fe && B.value && ke();
  });
  const j = v(() => n.value ? (N.value = !1, i.truncateLength ? ao({ length: i.truncateLength, suffix: i.truncateSuffix, text: n.value }) : n.value) : (N.value = !0, i.emptyText)), L = v(() => ({ ...i, loading: M.value, modelValue: n.value, originalValue: V })), z = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: j.value, empty: N.value, error: k.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), Q = v(() => ({ ...Zn, ...s.cardProps })), E = v(() => it({ cell: i.cell && !B.value, density: i.density, disabled: _.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: M.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), U = v(() => rt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-text-field" })), W = ul({ density: i.density, variant: i.variant }), q = v(() => st({ active: B.value, name: "text-field" })), Y = v(() => ut({ name: "custom-field", showField: B.value })), ee = v(() => ({})), pe = v(() => ge.value);
  function be() {
    k.value = !1, n.value = V, ke();
  }
  const ge = D(), We = D(null), Ve = D("body");
  function ke() {
    var fe, De;
    if (_.value || i.loadingWait && M.value)
      return;
    ge.value = _n({ cardMinWidth: (fe = i.cardProps) == null ? void 0 : fe.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (De = i.cardProps) == null ? void 0 : De.width, field: We.value });
    const te = dt({ attrs: l, closeSiblings: C.value, fieldOnly: i.fieldOnly, props: s, showField: B, timeOpened: x.value });
    i = { ...i, ...te.settings }, B.value = te.showField, x.value = te.timeOpened, Ee !== null && C.value && B.value && !i.fieldOnly && Ee.emit(te.timeOpened);
  }
  const Be = D();
  function Oe() {
    const te = dl({ required: i.required, rules: i.rules, value: n });
    return k.value = te.errors, Be.value = te.results, te.results;
  }
  function we() {
    k.value ? k.value = !0 : (V = n.value, a("update", n.value), i.loadingWait || ke());
  }
  let Ee, Ae;
  function ve(te) {
    a("update:closeSiblingFields", x), B.value && x.value !== te && be();
  }
  return K(() => B.value, () => {
    B.value && Oe();
  }), K(() => n.value, () => {
    B.value && Oe();
  }), C.value && import("@vueuse/core").then(({ useEventBus: te }) => {
    Ee = te(Jn), Ae = Ee.on(ve);
  }), Kn(() => {
    Ae !== void 0 && Ee.off(ve);
  }), (te, fe) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: We, class: le(r(E)), style: Te(r(ee)) }, [!r(B) && !r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 0, class: le(r(U)) }, [Ge("div", { class: le(r(W)) }, [d(r(cl), Z(r(z), { onToggleField: ke }), vn({ _: 2 }, [fn(r(o), (De, re) => ({ name: re, fn: he((X) => [Ye(te.$slots, re, Pe(Re({ ...X })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(B) || r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 1, class: le(["d-flex align-center py-2", r(q)]) }, [(J(), ze(Pn, { disabled: !r(g), to: r(Ve) }, [Ye(te.$slots, "default", Pe(Re(r(L)))), d(r(ct), { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(k), "field-only": r(w), "hide-cancel-icon": r(O), "hide-save-icon": r(G), loading: r(M), "loading-icon": r(T), "loading-icon-color": r($), "save-button-color": r(R), "save-button-size": r(P), "save-button-title": r(S), "save-button-variant": r(A), "save-icon": r(I), "save-icon-color": r(F), onClose: be, onSave: we }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (J(), ce("div", { key: 2, class: le(r(Y)), style: Te(r(pe)) }, [d(at, Pe(Re(r(Q))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: Ve }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), hi = ((e, t) => {
  const n = e.__vccOpts || e;
  for (const [l, o] of t)
    n[l] = o;
  return n;
})(sn({ __name: "VInlineSelect", props: Qe(Xn({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Pi }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = ln({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: C, color: w, fieldOnly: O, hideCancelIcon: G, hideDetails: T, hideSaveIcon: $, loadingIcon: R, loadingIconColor: P, saveButtonColor: S, saveButtonSize: A, saveButtonTitle: I, saveButtonVariant: F, saveIcon: _, saveIconColor: M, valueColor: N } = xn(i), k = v(() => s.disabled), B = v(() => s.loading), x = D(!1), V = D(!1), j = D(), L = D(!1), z = D(null);
  let Q = n.value;
  K(() => B.value, (ue, _e) => {
    !ue && _e && L.value && Ae();
  });
  const E = v(() => on({ icon: s.clearIcon, iconOptions: u, name: "clear" })), U = v(() => n.value && n.value[i.itemTitle] ? (x.value = !1, n.value[i.itemTitle]) : n.value ? n.value : (x.value = !0, i.emptyText)), W = v(() => zt(i)), q = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: U.value, empty: x.value, error: V.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: N.value })), Y = v(() => ({ ...Zn, ...s.cardProps }));
  rn(() => {
    j.value = i.items || [];
  });
  const ee = v(() => it({ cell: i.cell && !L.value, density: i.density, disabled: k.value, field: "v-select", iconSet: u == null ? void 0 : u.defaultSet, loading: B.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), pe = v(() => rt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-select" })), be = ul({ density: i.density, variant: i.variant }), ge = v(() => st({ active: L.value, name: "select" })), We = v(() => ut({ name: "select", showField: L.value })), Ve = v(() => ({})), ke = v(() => Oe.value);
  function Be() {
    V.value = !1, n.value = Q, Ae();
  }
  const Oe = D(), we = D(null), Ee = D("body");
  function Ae() {
    var _e, qe;
    if (k.value || i.loadingWait && B.value)
      return;
    Oe.value = _n({ cardMinWidth: (_e = i.cardProps) == null ? void 0 : _e.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (qe = i.cardProps) == null ? void 0 : qe.width, field: we.value });
    const ue = dt({ attrs: l, closeSiblings: C.value, fieldOnly: i.fieldOnly, props: s, showField: L, timeOpened: z.value });
    i = { ...i, ...ue.settings }, L.value = ue.showField, z.value = ue.timeOpened, re !== null && C.value && L.value && !i.fieldOnly && re.emit(ue.timeOpened);
  }
  const ve = D(), te = v(() => ve.value);
  function fe() {
    const ue = dl({ required: i.required, rules: i.rules, value: n });
    return V.value = ue.errors, ve.value = ue.results, ue.results;
  }
  function De() {
    Q = n.value, a("update", n.value), i.loadingWait || Ae();
  }
  let re, X;
  function Ie(ue) {
    a("update:closeSiblingFields", z), L.value && z.value !== ue && Be();
  }
  return K(() => L.value, () => {
    L.value && fe();
  }), K(() => n.value, () => {
    L.value && fe();
  }), C.value && import("@vueuse/core").then(({ useEventBus: ue }) => {
    re = ue(Jn), X = re.on(Ie);
  }), Kn(() => {
    X !== void 0 && re.off(Ie);
  }), (ue, _e) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: we, class: le(r(ee)), style: Te(r(Ve)) }, [!r(L) && !r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 0, class: le(r(pe)) }, [Ge("div", { class: le(r(be)) }, [d(r(cl), Z(r(q), { onToggleField: Ae }), vn({ _: 2 }, [fn(r(o), (qe, vt) => ({ name: vt, fn: he((pl) => [Ye(ue.$slots, vt, Pe(Re({ ...pl })), void 0, !0)]) }))]), 1040)], 2)], 2)) : xe("", !0), r(L) || r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 1, class: le(r(ge)) }, [(J(), ze(Pn, { disabled: !r(g), to: r(Ee) }, [d(vs, Z(r(W), { modelValue: n.value, "onUpdate:modelValue": _e[0] || (_e[0] = (qe) => n.value = qe), autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(E), clearable: r(i).clearable, color: r(w), density: r(i).density, disabled: r(B) || r(k), error: r(V), "error-messages": r(te), "hide-details": r(T), "hide-selected": r(i).hideSelected, "item-title": r(i).itemTitle, "item-value": r(i).itemValue, items: r(j), label: r(i).label, loading: r(B), menu: r(i).menu && !r(i).fieldOnly && r(L), variant: r(i).variant, width: "100%", onKeyup: Gt(Be, ["esc"]) }), vn({ _: 2 }, [fn(r(o), (qe, vt) => ({ name: vt, fn: he((pl) => [Ye(ue.$slots, vt, Pe(Re({ ...pl })), void 0, !0)]) })), r(o).append ? void 0 : { name: "append", fn: he(() => [d(r(ct), { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(V), "field-only": r(O), "hide-cancel-icon": r(G), "hide-save-icon": r($), loading: r(B), "loading-icon": r(R), "loading-icon-color": r(P), "save-button-color": r(S), "save-button-size": r(A), "save-button-title": r(I), "save-button-variant": r(F), "save-icon": r(_), "save-icon-color": r(M), onClose: Be, onSave: De }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (J(), ce("div", { key: 2, class: le(r(We)), style: Te(r(ke)) }, [d(at, Pe(Re(r(Y))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: Ee }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), [["__scopeId", "data-v-0716e076"]]), Fs = { class: "v-selection-control__wrapper" }, bi = sn({ __name: "VInlineSwitch", props: Qe(Xn({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...$i }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = Wl(), s = e;
  let i = ln({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: C, color: w, fieldOnly: O, hideCancelIcon: G, hideDetails: T, loadingIcon: $, loadingIconColor: R, saveButtonColor: P, saveButtonSize: S, saveButtonTitle: A, saveButtonVariant: I, saveIcon: F, saveIconColor: _ } = xn(i), M = v(() => s.disabled), N = v(() => s.loading), k = D(!1), B = D(!1), x = D(null), V = v(() => zt(i)), j = v(() => ({ ...Zn, ...s.cardProps }));
  K(() => N.value, (ve, te) => {
    !ve && te && B.value && Be();
  });
  const L = v(() => n.value == i.trueValue), z = v(() => yi({ modelValue: n, trueValue: i.trueValue })), Q = v(() => it({ cell: i.cell && !B.value, density: i.density, disabled: M.value, field: "v-switch", loading: N.value, loadingWait: i.loadingWait, tableField: i.tableField })), E = v(() => rt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-switch" })), U = fi({ density: i.density }), W = v(() => st({ active: B.value, name: "switch" })), q = v(() => lo("switch", i.valueColor, { error: k })), Y = v(() => ut({ name: "switch", showField: B.value })), ee = v(() => ({})), pe = v(() => oo({ color: i.color, error: k, theme: u, underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), be = v(() => We.value);
  function ge() {
    k.value = !1, Be();
  }
  const We = D(), Ve = D(null), ke = D("body");
  function Be() {
    var te, fe;
    if (M.value || i.loadingWait && N.value)
      return;
    We.value = _n({ cardMinWidth: (te = i.cardProps) == null ? void 0 : te.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (fe = i.cardProps) == null ? void 0 : fe.width, field: Ve.value });
    const ve = dt({ attrs: l, closeSiblings: C.value, fieldOnly: i.fieldOnly, props: s, showField: B.value, timeOpened: x.value });
    i = { ...i, ...ve.settings }, B.value = ve.showField, x.value = ve.timeOpened, we !== null && C.value && B.value && !i.fieldOnly && we.emit(ve.timeOpened);
  }
  function Oe(ve) {
    n.value = ve, a("update", ve), i.loadingWait || Be();
  }
  let we, Ee;
  function Ae(ve) {
    a("update:closeSiblingFields", x), B.value && x.value !== ve && Be();
  }
  return C.value && import("@vueuse/core").then(({ useEventBus: ve }) => {
    we = ve(Jn), Ee = we.on(Ae);
  }), Kn(() => {
    Ee !== void 0 && we.off(Ae);
  }), (ve, te) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Ve, class: le(r(Q)), style: Te(r(ee)) }, [!r(B) && !r(i).fieldOnly || r(i).cardField ? (J(), ce("div", { key: 0, class: le(r(E)), onClick: te[2] || (te[2] = (fe) => r(i).cell ? Be() : void 0) }, [Ge("div", { class: le(r(U)), onClick: te[1] || (te[1] = (fe) => r(i).cell ? void 0 : Be()) }, [Ge("div", Fs, [ve.icons ? (J(), ce("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(q)]), style: Te(r(pe)) }, [d(r(vi), { modelValue: r(z), "onUpdate:modelValue": te[0] || (te[0] = (fe) => On(z) ? z.value = fe : null), "icon-false": r(i).iconFalse, "icon-false-color": r(i).iconFalseColor, "icon-false-title": r(i).iconFalseTitle, "icon-true": r(i).iconTrue, "icon-true-color": r(i).iconTrueColor, "icon-true-title": r(i).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ce("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(q)]), style: Te(r(pe)) }, Ll(r(L)), 7))])], 2)], 2)) : xe("", !0), r(B) || r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 1, class: le(r(W)) }, [(J(), ze(Pn, { disabled: !r(g), to: r(ke) }, [d(Is, Z(r(V), { color: r(w), density: r(i).density, disabled: r(N) || r(M), error: r(k), "false-icon": r(i).falseIcon, "false-value": r(i).falseValue, "hide-details": r(T), label: r(i).label, loading: r(N), "model-value": r(z), "true-value": r(i).trueValue, "onUpdate:modelValue": Oe }), vn({ _: 2 }, [fn(r(o), (fe, De) => ({ name: De, fn: he((re) => [Ye(ve.$slots, De, Pe(Re({ ...re })))]) })), r(o).append ? void 0 : { name: "append", fn: he(() => [d(r(ct), { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), class: "ms-3", error: r(k), "field-only": r(O), "hide-cancel-icon": r(G), "hide-save-icon": !0, loading: r(N), "loading-icon": r($), "loading-icon-color": r(R), "save-button-color": r(P), "save-button-size": r(S), "save-button-title": r(A), "save-button-variant": r(I), "save-icon": r(F), "save-icon-color": r(_), onClose: ge, onSave: Oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (J(), ce("div", { key: 2, class: le(r(Y)), style: Te(r(be)) }, [d(at, Pe(Re(r(j))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: ke }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), Ci = sn({ __name: "VInlineTextField", props: Qe(Xn({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...oa }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = ln({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: C, color: w, fieldOnly: O, hideCancelIcon: G, hideDetails: T, hideSaveIcon: $, loadingIcon: R, loadingIconColor: P, saveButtonColor: S, saveButtonSize: A, saveButtonTitle: I, saveButtonVariant: F, saveIcon: _, saveIconColor: M } = xn(i), N = v(() => s.disabled), k = v(() => s.loading), B = D(!1), x = D(!1), V = D(!1), j = D(null);
  let L = n.value;
  K(() => k.value, (X, Ie) => {
    !X && Ie && V.value && we();
  });
  const z = v(() => on({ icon: s.clearIcon, iconOptions: u, name: "clear" })), Q = v(() => n.value ? (B.value = !1, i.truncateLength ? ao({ length: i.truncateLength, suffix: i.truncateSuffix, text: n.value }) : n.value) : (B.value = !0, i.emptyText)), E = v(() => zt(i)), U = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: Q.value, empty: B.value, error: x.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), W = v(() => ({ ...Zn, ...s.cardProps })), q = v(() => it({ cell: i.cell && !V.value, density: i.density, disabled: N.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: k.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), Y = v(() => rt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-text-field" })), ee = ul({ density: i.density, variant: i.variant }), pe = v(() => st({ active: V.value, name: "text-field" })), be = v(() => ut({ name: "text-field", showField: V.value })), ge = v(() => ({})), We = v(() => ke.value);
  function Ve() {
    x.value = !1, n.value = L, we();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function we() {
    var Ie, ue;
    if (N.value || i.loadingWait && k.value)
      return;
    ke.value = _n({ cardMinWidth: (Ie = i.cardProps) == null ? void 0 : Ie.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ue = i.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const X = dt({ attrs: l, closeSiblings: C.value, fieldOnly: i.fieldOnly, props: s, showField: V, timeOpened: j.value });
    i = { ...i, ...X.settings }, V.value = X.showField, j.value = X.timeOpened, fe !== null && C.value && V.value && !i.fieldOnly && fe.emit(X.timeOpened);
  }
  const Ee = D(), Ae = v(() => Ee.value);
  function ve() {
    const X = dl({ required: i.required, rules: i.rules, value: n });
    return x.value = X.errors, Ee.value = X.results, X.results;
  }
  function te() {
    x.value ? x.value = !0 : (L = n.value, a("update", n.value), i.loadingWait || we());
  }
  let fe, De;
  function re(X) {
    a("update:closeSiblingFields", j), V.value && j.value !== X && Ve();
  }
  return K(() => V.value, () => {
    V.value && ve();
  }), K(() => n.value, () => {
    V.value && ve();
  }), C.value && import("@vueuse/core").then(({ useEventBus: X }) => {
    fe = X(Jn), De = fe.on(re);
  }), Kn(() => {
    De !== void 0 && fe.off(re);
  }), (X, Ie) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: le(r(q)), style: Te(r(ge)) }, [!r(V) && !r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 0, class: le(r(Y)) }, [Ge("div", { class: le(r(ee)) }, [d(r(cl), Z(r(U), { onToggleField: we }), vn({ _: 2 }, [fn(r(o), (ue, _e) => ({ name: _e, fn: he((qe) => [Ye(X.$slots, _e, Pe(Re({ ...qe })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(V) || r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 1, class: le(r(pe)) }, [(J(), ze(Pn, { disabled: !r(g), to: r(Oe) }, [d(Tl, Z(r(E), { modelValue: n.value, "onUpdate:modelValue": Ie[0] || (Ie[0] = (ue) => n.value = ue), autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(z), color: r(w), density: r(i).density, disabled: r(k) || r(N), error: r(x), "error-messages": r(Ae), "hide-details": r(T), label: r(i).label, loading: r(k), variant: r(i).variant, width: "100%", onKeyup: [Gt(te, ["enter"]), Gt(Ve, ["esc"])] }), vn({ _: 2 }, [fn(r(o), (ue, _e) => ({ name: _e, fn: he((qe) => [Ye(X.$slots, _e, Pe(Re({ ...qe })))]) })), r(o).append ? void 0 : { name: "append", fn: he(() => [d(r(ct), { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(x), "field-only": r(O), "hide-cancel-icon": r(G), "hide-save-icon": r($), loading: r(k), "loading-icon": r(R), "loading-icon-color": r(P), "save-button-color": r(S), "save-button-size": r(A), "save-button-title": r(I), "save-button-variant": r(F), "save-icon": r(_), "save-icon-color": r(M), onClose: Ve, onSave: te }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (J(), ce("div", { key: 2, class: le(r(be)), style: Te(r(We)) }, [d(at, Pe(Re(r(W))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), Ii = sn({ __name: "VInlineTextarea", props: Qe(Xn({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ei }), { modelValue: {} }), emits: Qe([...pt], ["update:modelValue"]), setup(e, { emit: t }) {
  const n = $n(e, "modelValue"), l = Tn(), o = En(), a = t, c = me(Mn, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = ln({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: C, color: w, fieldOnly: O, hideCancelIcon: G, hideDetails: T, hideSaveIcon: $, loadingIcon: R, loadingIconColor: P, saveButtonColor: S, saveButtonSize: A, saveButtonTitle: I, saveButtonVariant: F, saveIcon: _, saveIconColor: M } = xn(i), N = v(() => s.disabled), k = v(() => s.loading), B = D(!1), x = D(!1), V = D(!1), j = D(null);
  let L = n.value;
  K(() => k.value, (X, Ie) => {
    !X && Ie && V.value && we();
  });
  const z = v(() => on({ icon: s.clearIcon, iconOptions: u, name: "clear" })), Q = v(() => n.value ? (B.value = !1, i.truncateLength ? ao({ length: i.truncateLength, suffix: i.truncateSuffix, text: n.value }) : n.value) : (B.value = !0, i.emptyText)), E = v(() => zt(i)), U = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: Q.value, empty: B.value, error: x.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), W = v(() => ({ ...Zn, ...s.cardProps })), q = v(() => it({ cell: i.cell && !V.value, density: i.density, disabled: N.value, field: "v-textarea", iconSet: u == null ? void 0 : u.defaultSet, loading: k.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), Y = v(() => rt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-textarea" })), ee = ul({ density: i.density, variant: i.variant }), pe = v(() => st({ active: V.value, name: "textarea" })), be = v(() => ut({ name: "textarea", showField: V.value })), ge = v(() => ({})), We = v(() => ke.value);
  function Ve() {
    x.value = !1, n.value = L, we();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function we() {
    var Ie, ue;
    if (N.value || i.loadingWait && k.value)
      return;
    ke.value = _n({ cardMinWidth: (Ie = i.cardProps) == null ? void 0 : Ie.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ue = i.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const X = dt({ attrs: l, closeSiblings: C.value, fieldOnly: i.fieldOnly, props: s, showField: V, timeOpened: j.value });
    i = { ...i, ...X.settings }, V.value = X.showField, j.value = X.timeOpened, fe !== null && C.value && V.value && !i.fieldOnly && fe.emit(X.timeOpened);
  }
  const Ee = D(), Ae = v(() => Ee.value);
  function ve() {
    const X = dl({ required: i.required, rules: i.rules, value: n });
    return x.value = X.errors, Ee.value = X.results, X.results;
  }
  function te() {
    L = n.value, a("update", n.value), i.loadingWait || we();
  }
  let fe, De;
  function re(X) {
    a("update:closeSiblingFields", j), V.value && j.value !== X && Ve();
  }
  return K(() => V.value, () => {
    V.value && ve();
  }), K(() => n.value, () => {
    V.value && ve();
  }), C.value && import("@vueuse/core").then(({ useEventBus: X }) => {
    fe = X(Jn), De = fe.on(re);
  }), Kn(() => {
    De !== void 0 && fe.off(re);
  }), (X, Ie) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: le(r(q)), style: Te(r(ge)) }, [!r(V) && !r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 0, class: le(r(Y)) }, [Ge("div", { class: le(r(ee)) }, [d(r(cl), Z(r(U), { onToggleField: we }), vn({ _: 2 }, [fn(r(o), (ue, _e) => ({ name: _e, fn: he((qe) => [Ye(X.$slots, _e, Pe(Re({ ...qe })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(V) || r(i).fieldOnly || r(g) ? (J(), ce("div", { key: 1, class: le(r(pe)) }, [(J(), ze(Pn, { disabled: !r(g), to: r(Oe) }, [d(Bs, Z(r(E), { modelValue: n.value, "onUpdate:modelValue": Ie[0] || (Ie[0] = (ue) => n.value = ue), "auto-grow": r(i).autoGrow, autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(z), color: r(w), density: r(i).density, disabled: r(k) || r(N), error: r(x), "error-messages": r(Ae), "hide-details": r(T), label: r(i).label, loading: r(k), rows: r(i).rows, variant: r(i).variant, width: "100%", onKeyup: Gt(Ve, ["esc"]) }), vn({ _: 2 }, [fn(r(o), (ue, _e) => ({ name: _e, fn: he((qe) => [Ye(X.$slots, _e, Pe(Re({ ...qe })))]) })), r(o).append ? void 0 : { name: "append", fn: he(() => [d(r(ct), { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(x), "field-only": r(O), "hide-cancel-icon": r(G), "hide-save-icon": r($), loading: r(k), "loading-icon": r(R), "loading-icon-color": r(P), "save-button-color": r(S), "save-button-size": r(A), "save-button-title": r(I), "save-button-variant": r(F), "save-icon": r(_), "save-icon-color": r(M), onClose: Ve, onSave: te }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (J(), ce("div", { key: 2, class: le(r(be)), style: Te(r(We)) }, [d(at, Pe(Re(r(W))), { default: he(() => [d(Wn, null, { default: he(() => [Ge("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), Mn = Symbol();
function Os(e = {}) {
  return (t) => {
    t.provide(Mn, e), t.component("VInlineCheckbox", mi), t.component("VInlineCustomField", gi), t.component("VInlineSelect", hi), t.component("VInlineSwitch", bi), t.component("VInlineTextField", Ci), t.component("VInlineTextarea", Ii);
  };
}
const Ps = { VInlineCheckbox: mi, VInlineCustomField: gi, VInlineSelect: hi, VInlineSwitch: bi, VInlineTextField: Ci, VInlineTextarea: Ii };
export {
  mi as VInlineCheckbox,
  gi as VInlineCustomField,
  hi as VInlineSelect,
  bi as VInlineSwitch,
  Ci as VInlineTextField,
  Ii as VInlineTextarea,
  Os as createVInlineFields,
  Ps as default,
  Mn as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-0716e076] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
