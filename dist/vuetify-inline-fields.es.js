import { unref as r, Fragment as we, reactive as Qe, computed as v, watchEffect as ze, toRefs as Ft, capitalize as oa, isVNode as wi, Comment as Fi, warn as cl, inject as Ie, ref as W, provide as ot, shallowRef as ve, defineComponent as ct, camelize as aa, h as dl, getCurrentInstance as Ai, isRef as Mt, createVNode as d, mergeProps as ee, toRef as ue, Text as Vi, useAttrs as gt, useSlots as At, openBlock as Z, createElementBlock as fe, normalizeClass as le, normalizeStyle as We, renderSlot as Ue, normalizeProps as $e, createBlock as Me, createCommentVNode as Fe, createElementVNode as je, createTextVNode as Dl, toDisplayString as Ll, watch as Y, onScopeDispose as Je, effectScope as Wl, toRaw as Bt, onBeforeUnmount as ft, onMounted as un, readonly as Ml, Transition as Wt, resolveDynamicComponent as _i, nextTick as Ne, withDirectives as Xe, resolveDirective as ht, withCtx as Ce, onBeforeMount as ia, vShow as cn, TransitionGroup as Oi, Teleport as Vt, cloneVNode as Pi, mergeModels as Ye, mergeDefaults as Rt, useModel as _t, onUnmounted as Nt, createSlots as rt, renderList as st, guardReactiveProps as Re, withKeys as Bn, vModelText as $i } from "vue";
import { useTheme as Rl } from "vuetify";
import { useWindowSize as Ti } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.5
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2024, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const jt = Symbol("identifier"), Gt = { elevation: 5, variant: "flat" }, _n = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", required: !1, tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Nl = { autofocus: !0 }, On = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, ra = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Ei = { ..._n, ...ra, ...On, falseIcon: void 0, icons: !0, trueIcon: void 0 }, sa = { ..._n, ...Nl, ...On, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, zi = { ..._n, ...ra, ...On, icons: !0, falseIcon: "" }, Di = { ...Nl, ...On, ..._n, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, ua = { ..._n, ...Nl, ...On, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, me = "v-inline-fields", Ut = (e) => {
  const { cell: n = !1, field: t = "", density: l = "", disabled: o = !1, iconSet: i = "mdi", loading: c = !1, loadingWait: s, tableField: u = !1, variant: a } = e, p = l && a;
  return { [`${me}`]: !0, [`${me}--container`]: !0, [`${me}--container-cell`]: n, [`${me}--container-disabled`]: r(o), [`${me}--container-table`]: u, [`${me}--container-icon-set-${i}`]: !0, [`${me}--container-loading`]: c && s, [`${me}--container-${t}`]: !0, [`${me}--container-${t}-${l}`]: !0, [`${me}--container-${t}-${l}-${a}`]: p, [`${me}--container-${t}-${a}`]: a, [`${me}--container-${t}-${a}-${l}`]: p, [`${me}--container-${l}`]: l, [`${me}--container-${l}-${t}`]: l, [`${me}--container-${l}-${a}`]: p, [`${me}--container-${a}`]: a, [`${me}--container-${a}-${l}`]: p, [`${me}--container-${a}-${t}`]: a };
}, qt = (e) => {
  const { cell: n = !1, cellUnderlineFullWidth: t = !0, field: l = "", density: o = "" } = e;
  return { [`${me}--display-container-cell`]: n, [`${me}--display-container-cell-underline-full-width`]: n && t, [`${me}--display-container`]: !0, [`${me}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${o}`]: !0, "v-input--horizontal": !0 };
}, Pn = (e) => {
  const { density: n = "", variant: t = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${n}`]: !0, [`v-text-field--plain-${t}`]: !0 };
}, ca = (e) => {
  const { density: n = "" } = e;
  return { [`${me}--selection-control`]: !0, [`v-selection-control--density-${n}`]: !0 };
}, jl = (e, n, t) => {
  const { error: l = !1, empty: o = !1 } = t;
  return { [`${me}`]: !0, [`${me}--display-value-${e}`]: !0, [`${me}--display-value`]: !0, [`${me}--display-value-empty`]: r(o), [`text-${n}`]: !r(l), "text-danger": r(l) };
}, Ht = (e) => {
  const { name: n, active: t = !1 } = e;
  return { [`${me}`]: !0, [`${me}--field`]: !0, [`${me}--field-${n}`]: !0, [`${me}--field-active`]: t };
}, Kt = (e) => {
  const { name: n, showField: t } = e;
  return { [`${me}--card-container`]: !0, [`${me}--card-container-${n}`]: !0, "d-none": !t };
};
function co(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const n = 100 * Number(e);
    return n >= 100 ? 100 : n;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function po(e) {
  let n = function(f) {
    const y = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let g = f;
    return Object.entries(y).forEach(([b, m]) => {
      f.toLowerCase() != b.toLowerCase() || (g = m);
    }), g;
  }(e), t = 0, l = 0, o = 0, i = 100, c = 0, s = 0, u = 0;
  if (n.substring(0, 1) === "#")
    n = function(f) {
      let y = f.replace("#", "");
      y.length === 3 && (y = y.split("").map((I) => I + I).join(""));
      const g = parseInt(y.substring(0, 2), 16), b = parseInt(y.substring(2, 4), 16), m = parseInt(y.substring(4, 6), 16);
      return [g, b, m, 100];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/[\d+.\d+]+/g)].map(String), t = n[0], l = n[1], o = n[2], i = co(n[3]), `${t} ${l}% ${o}% / ${i}%`;
  [c, s, u, i] = n, c /= 255, s /= 255, u /= 255, i = co(i);
  const a = Math.max(c, s, u), p = Math.min(c, s, u);
  if (a === null || !p === null || isNaN(a) || isNaN(p)) {
    const f = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${f})" in it's place.`), f;
  }
  if (t = (a + p) / 2, l = (a + p) / 2, o = (a + p) / 2, a == p)
    t = l = 0;
  else {
    const f = a - p;
    switch (l = o > 0.5 ? f / (2 - a - p) : f / (a + p), a) {
      case c:
        t = (s - u) / f + (s < u ? 6 : 0);
        break;
      case s:
        t = (u - c) / f + 2;
        break;
      case u:
        t = (c - s) / f + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), l = Math.round(100 * l), o = Math.round(100 * o), `${t} ${l}% ${o}% / ${i}%`;
}
const Li = (e, n) => {
  if (/* @__PURE__ */ function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(l, o) {
    const i = o.global.current.value.colors;
    return Object.entries(i).find(([c]) => c === l);
  }(e, n);
  return t ? `hsl(${po(t[1])})` : `hsl(${po(e)})`;
}, bn = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, da = (e) => {
  var o;
  const { modelValue: n, trueValue: t } = e, l = r(n);
  return ((o = l == null ? void 0 : l.toLowerCase) == null ? void 0 : o.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == t || l === t;
}, Gl = (e) => {
  const { underlineStyle: n, underlineWidth: t, color: l, error: o, theme: i, underlined: c } = e;
  let { underlineColor: s } = e;
  s = s || l;
  const u = { "border-bottom-color": Li(s, i), "border-bottom-style": n, "border-bottom-width": t };
  return r(o) && (u["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (u["border-bottom"] = "none"), u;
}, xt = (e) => {
  const { cardMinWidth: n, cardOffsetX: t, cardOffsetY: l, cardWidth: o, field: i, name: c = "" } = e, s = ((p) => {
    const { cardOffsetX: f, cardOffsetY: y, field: g } = p;
    if (!g)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: b, y: m } = g.getBoundingClientRect(), { width: h, height: I } = g.getBoundingClientRect(), { right: F, bottom: V } = g.getBoundingClientRect();
    return { bottom: bn({ str: V + Number(y) }), height: I, left: bn({ str: 0 + Number(f) }), right: bn({ str: F + Number(f) }), top: bn({ str: 2 + Number(y) }), width: bn({ str: h }), x: b, y: m };
  })({ cardOffsetX: t, cardOffsetY: l, field: i });
  let u = n, a = o;
  return a || (a = c === "checkbox" ? "fit-content" : s.width), u || (u = c === "checkbox" ? "fit-content" : s.width), { left: s.left, top: s.top, width: a, zIndex: 10 };
}, Ke = typeof window < "u", Ul = Ke && "IntersectionObserver" in window;
function vo(e, n, t) {
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
function dn(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => dn(e[l], n[l]));
}
function dt(e, n, t) {
  if (n === !0)
    return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const o = n(e, t);
    return o === void 0 ? t : o;
  }
  if (typeof n == "string")
    return function(o, i, c) {
      return o != null && i && typeof i == "string" ? o[i] !== void 0 ? o[i] : vo(o, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, n, t);
  if (Array.isArray(n))
    return vo(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function ce(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function kl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Zn(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const fo = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function ml(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function pa(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const o of n)
    l.has(o) && (t[o] = e[o]);
  return t;
}
function yo(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((c) => c instanceof RegExp ? c.test(i) : c === i) && !(t != null && t.some((c) => c === i)) ? l[i] = e[i] : o[i] = e[i];
  return [l, o];
}
function Ot(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const va = /^on[^a-z]/, wl = (e) => va.test(e), Wi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function $n(e) {
  const [n, t] = yo(e, [va]), l = Ot(n, Wi), [o, i] = yo(t, ["class", "style", "id", /^data-/]);
  return Object.assign(o, n), Object.assign(i, l), [o, i];
}
function lt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function on(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function mo(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function nn() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in n) {
    const i = e[o], c = n[o];
    kl(i) && kl(c) ? l[o] = nn(i, c, t) : Array.isArray(i) && Array.isArray(c) && t ? l[o] = t(i, c) : l[o] = c;
  }
  return l;
}
function fa(e) {
  return e.map((n) => n.type === we ? fa(n.children) : n).flat();
}
function zt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (zt.cache.has(e))
    return zt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return zt.cache.set(e, n), n;
}
function Yn(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => Yn(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => Yn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Yn(e, n.component.subTree).flat(1);
  }
  return [];
}
function ql(e) {
  const n = Qe({}), t = v(e);
  return ze(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), Ft(n);
}
function el(e, n) {
  return e.includes(n);
}
function go(e) {
  return e[2].toLowerCase() + e.slice(3);
}
zt.cache = /* @__PURE__ */ new Map();
const pt = () => [Function, Array];
function ho(e, n) {
  return !!(e[n = "on" + oa(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ya(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const o of e)
      o(...t);
  else
    typeof e == "function" && e(...t);
}
function Fl(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function ma(e, n, t) {
  let l, o = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    o += i, l = e[o];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && o < e.length && o >= 0);
  return l;
}
function tl(e, n) {
  var l, o, i, c;
  const t = Fl(e);
  if (n)
    if (n === "first")
      (l = t[0]) == null || l.focus();
    else if (n === "last")
      (o = t.at(-1)) == null || o.focus();
    else if (typeof n == "number")
      (i = t[n]) == null || i.focus();
    else {
      const s = ma(t, n);
      s ? s.focus() : tl(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = t[0]) == null || c.focus());
}
function Mi() {
}
function an(e, n) {
  if (!(Ke && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function Hl(e) {
  return e.some((n) => !wi(n) || n.type !== Fi && (n.type !== we || Hl(n.children))) ? e : null;
}
const ga = ["top", "bottom"], Ri = ["start", "end", "left", "right"];
function Al(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = el(ga, t) ? "start" : el(Ri, t) ? "top" : "center"), { side: bo(t, n), align: bo(l, n) };
}
function bo(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function gl(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function hl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function Co(e) {
  return { side: e.align, align: e.side };
}
function Io(e) {
  return el(ga, e.side) ? "y" : "x";
}
class Dt {
  constructor(n) {
    let { x: t, y: l, width: o, height: i } = n;
    this.x = t, this.y = l, this.width = o, this.height = i;
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
function So(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function ha(e) {
  return Array.isArray(e) ? new Dt({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function Kl(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let o, i, c, s, u;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), i = +o[0], c = +o[5], s = +o[12], u = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new Dt(n);
      o = l.slice(7, -1).split(/, /), i = +o[0], c = +o[3], s = +o[4], u = +o[5];
    }
    const a = t.transformOrigin, p = n.x - s - (1 - i) * parseFloat(a), f = n.y - u - (1 - c) * parseFloat(a.slice(a.indexOf(" ") + 1)), y = i ? n.width / i : e.offsetWidth + 1, g = c ? n.height / c : e.offsetHeight + 1;
    return new Dt({ x: p, y: f, width: y, height: g });
  }
  return new Dt(n);
}
function ln(e, n, t) {
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
const qn = /* @__PURE__ */ new WeakMap(), tn = 2.4, Bo = 0.2126729, xo = 0.7151522, ko = 0.072175, Ni = 0.55, ji = 0.58, Gi = 0.57, Ui = 0.62, Hn = 0.03, wo = 1.45, qi = 5e-4, Hi = 1.25, Ki = 1.25, Fo = 0.078, Ao = 12.82051282051282, Kn = 0.06, Vo = 1e-3;
function _o(e, n) {
  const t = (e.r / 255) ** tn, l = (e.g / 255) ** tn, o = (e.b / 255) ** tn, i = (n.r / 255) ** tn, c = (n.g / 255) ** tn, s = (n.b / 255) ** tn;
  let u, a = t * Bo + l * xo + o * ko, p = i * Bo + c * xo + s * ko;
  if (a <= Hn && (a += (Hn - a) ** wo), p <= Hn && (p += (Hn - p) ** wo), Math.abs(p - a) < qi)
    return 0;
  if (p > a) {
    const f = (p ** Ni - a ** ji) * Hi;
    u = f < Vo ? 0 : f < Fo ? f - f * Ao * Kn : f - Kn;
  } else {
    const f = (p ** Ui - a ** Gi) * Ki;
    u = f > -Vo ? 0 : f > -Fo ? f - f * Ao * Kn : f + Kn;
  }
  return 100 * u;
}
function Sn(e) {
  cl(`Vuetify: ${e}`);
}
function bl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Oo = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Xi = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => Po({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => Po({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => xn({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => xn({ h: e, s: n, v: t, a: l }) };
function Cn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && Sn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Oo.test(e)) {
    const { groups: n } = e.match(Oo), { fn: t, values: l } = n, o = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Xi[t](...o);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || Sn(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && Sn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(u) {
        return u.startsWith("#") && (u = u.slice(1)), u = u.replace(/([^0-9a-f])/gi, "F"), (u.length === 3 || u.length === 4) && (u = u.split("").map((a) => a + a).join("")), u.length !== 6 && (u = mo(mo(u, 6), 8, "F")), u;
      }(l);
      let [o, i, c, s] = function(u) {
        let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const p = [];
        let f = 0;
        for (; f < u.length; )
          p.push(u.substr(f, a)), f += a;
        return p;
      }(l, 2).map((u) => parseInt(u, 16));
      return s = s === void 0 ? s : s / 255, { r: o, g: i, b: c, a: s };
    }(n);
  }
  if (typeof e == "object") {
    if (ml(e, ["r", "g", "b"]))
      return e;
    if (ml(e, ["h", "s", "l"]))
      return xn(ba(e));
    if (ml(e, ["h", "s", "v"]))
      return xn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function xn(e) {
  const { h: n, s: t, v: l, a: o } = e, i = (s) => {
    const u = (s + n / 60) % 6;
    return l - l * t * Math.max(Math.min(u, 4 - u, 1), 0);
  }, c = [i(5), i(3), i(1)].map((s) => Math.round(255 * s));
  return { r: c[0], g: c[1], b: c[2], a: o };
}
function Po(e) {
  return xn(ba(e));
}
function ba(e) {
  const { h: n, s: t, l, a: o } = e, i = l + t * Math.min(l, 1 - l);
  return { h: n, s: i === 0 ? 0 : 2 - 2 * l / i, v: i, a: o };
}
function H(e, n) {
  return (t) => Object.keys(e).reduce((l, o) => {
    const i = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = t && o in t ? { ...i, default: t[o] } : i, n && !l[o].source && (l[o].source = n), l;
  }, {});
}
const Se = H({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), nl = Symbol.for("vuetify:defaults");
function Xl() {
  const e = Ie(nl);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function pn(e, n) {
  const t = Xl(), l = W(e), o = v(() => {
    if (r(n == null ? void 0 : n.disabled))
      return t.value;
    const i = r(n == null ? void 0 : n.scoped), c = r(n == null ? void 0 : n.reset), s = r(n == null ? void 0 : n.root);
    if (l.value == null && !(i || c || s))
      return t.value;
    let u = nn(l.value, { prev: t.value });
    if (i)
      return u;
    if (c || s) {
      const a = Number(c || 1 / 0);
      for (let p = 0; p <= a && u && "prev" in u; p++)
        u = u.prev;
      return u && typeof s == "string" && s in u && (u = nn(nn(u, { prev: u }), u[s])), u;
    }
    return u.prev ? nn(u.prev, u) : u;
  });
  return ot(nl, o), o;
}
function Yi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Xl();
  const l = Ge("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = v(() => {
    var s;
    return (s = t.value) == null ? void 0 : s[e._as ?? n];
  }), i = new Proxy(e, { get(s, u) {
    var p, f, y, g;
    const a = Reflect.get(s, u);
    return u === "class" || u === "style" ? [(p = o.value) == null ? void 0 : p[u], a].filter((b) => b != null) : typeof u != "string" || function(b, m) {
      var h, I;
      return ((h = b.props) == null ? void 0 : h[m]) !== void 0 || ((I = b.props) == null ? void 0 : I[zt(m)]) !== void 0;
    }(l.vnode, u) ? a : ((f = o.value) == null ? void 0 : f[u]) ?? ((g = (y = t.value) == null ? void 0 : y.global) == null ? void 0 : g[u]) ?? a;
  } }), c = ve();
  return ze(() => {
    if (o.value) {
      const s = Object.entries(o.value).filter((u) => {
        let [a] = u;
        return a.startsWith(a[0].toUpperCase());
      });
      c.value = s.length ? Object.fromEntries(s) : void 0;
    } else
      c.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const s = function(u) {
      let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ge("injectSelf");
      const { provides: p } = a;
      if (p && u in p)
        return p[u];
    }(nl, l);
    ot(nl, v(() => c.value ? nn((s == null ? void 0 : s.value) ?? {}, c.value) : s == null ? void 0 : s.value));
  } };
}
function kn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return Sn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return pa(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const o = Xl();
      if (!o.value)
        return e._setup(t, l);
      const { props: i, provideSubDefaults: c } = Yi(t, t._as ?? e.name, o), s = e._setup(i, l);
      return c(), s;
    };
  }
  return e;
}
function oe() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? kn : ct)(n);
}
function Tn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return oe()({ name: t ?? oa(aa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...Se() }, setup(l, o) {
    let { slots: i } = o;
    return () => {
      var c;
      return dl(l.tag, { class: [e, l.class], style: l.style }, (c = i.default) == null ? void 0 : c.call(i));
    };
  } });
}
function Ca(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const ll = "cubic-bezier(0.4, 0, 0.2, 1)";
function Ge(e, n) {
  const t = Ai();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function yt() {
  const e = Ge(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return zt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let Ia = 0, Jn = /* @__PURE__ */ new WeakMap();
function ut() {
  const e = Ge("getUid");
  if (Jn.has(e))
    return Jn.get(e);
  {
    const n = Ia++;
    return Jn.set(e, n), n;
  }
}
function Sa(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? Ji(e) : Yl(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function ol(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Yl(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Yl(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ji(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function ge(e) {
  Ge("useRender").render = e;
}
function Jl(e) {
  return ql(() => {
    const n = [], t = {};
    if (e.value.background)
      if (bl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && bl(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = Cn(e.value.background);
          if (o.a == null || o.a === 1) {
            const i = function(c) {
              const s = Math.abs(_o(Cn(0), Cn(c)));
              return Math.abs(_o(Cn(16777215), Cn(c))) > Math.min(s, 50) ? "#fff" : "#000";
            }(o);
            t.color = i, t.caretColor = i;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (bl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function vt(e, n) {
  const t = v(() => ({ text: Mt(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = Jl(t);
  return { textColorClasses: l, textColorStyles: o };
}
function rn(e, n) {
  const t = v(() => ({ background: Mt(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = Jl(t);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
ut.reset = () => {
  Ia = 0, Jn = /* @__PURE__ */ new WeakMap();
};
const Ae = [String, Function, Object, Array], Qi = Symbol.for("vuetify:icons"), al = H({ icon: { type: Ae }, tag: { type: String, required: !0 } }, "icon"), $o = oe()({ name: "VComponentIcon", props: al(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(l, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Zi = kn({ name: "VSvgIcon", inheritAttrs: !1, props: al(), setup(e, n) {
  let { attrs: t } = n;
  return () => d(e.tag, ee(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
kn({ name: "VLigatureIcon", props: al(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), kn({ name: "VClassIcon", props: al(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const er = ["x-small", "small", "default", "large", "x-large"], En = H({ size: { type: [String, Number], default: "default" } }, "size");
function zn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return ql(() => {
    let t, l;
    return el(er, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: ce(e.size), height: ce(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const nt = H({ tag: { type: String, default: "div" } }, "tag"), To = Symbol.for("vuetify:theme"), He = H({ theme: String }, "theme");
function Ze(e) {
  Ge("provideTheme");
  const n = Ie(To, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = v(() => e.theme ?? n.name.value), l = v(() => n.themes.value[t.value]), o = v(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = { ...n, name: t, current: l, themeClasses: o };
  return ot(To, i), i;
}
const tr = H({ color: String, start: Boolean, end: Boolean, icon: Ae, ...Se(), ...En(), ...nt({ tag: "i" }), ...He() }, "VIcon"), Ve = oe()({ name: "VIcon", props: tr(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = W(), { themeClasses: i } = Ze(e), { iconData: c } = ((p) => {
    const f = Ie(Qi);
    if (!f)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var h;
      const y = r(p);
      if (!y)
        return { component: $o };
      let g = y;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (h = f.aliases) == null ? void 0 : h[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${y}"`);
      if (Array.isArray(g))
        return { component: Zi, icon: g };
      if (typeof g != "string")
        return { component: $o, icon: g };
      const b = Object.keys(f.sets).find((I) => typeof g == "string" && g.startsWith(`${I}:`)), m = b ? g.slice(b.length + 1) : g;
      return { component: f.sets[b ?? f.defaultSet].component, icon: m };
    }) };
  })(v(() => o.value || e.icon)), { sizeClasses: s } = zn(e), { textColorClasses: u, textColorStyles: a } = vt(ue(e, "color"));
  return ge(() => {
    var f, y;
    const p = (f = l.default) == null ? void 0 : f.call(l);
    return p && (o.value = (y = fa(p).filter((g) => g.type === Vi && g.children && typeof g.children == "string")[0]) == null ? void 0 : y.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, s.value, u.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [s.value ? void 0 : { fontSize: ce(e.size), height: ce(e.size), width: ce(e.size) }, a.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [p] });
  }), {};
} }), Dn = ct({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(e, { emit: n }) {
  const t = gt(), l = n, o = e, i = At(), c = Rl(), s = Qe({ ...t, ...o });
  ze(() => {
    Object.assign(s, { ...t, ...o });
  });
  const u = { displayValue: o.displayValue, empty: o.empty, error: o.error }, a = v(() => jl(o.field, o.valueColor, { empty: o.empty, error: o.error })), p = v(() => Gl({ color: o.color, error: o.error, theme: c, underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined })), f = v(() => ((b) => {
    const { underlineWidth: m } = b;
    return { borderBottom: `${m || "0px"} solid transparent` };
  })({ underlineWidth: o.underlineWidth })), y = (b, m = !1) => ((h) => {
    const { inner: I = !1, position: F } = h;
    return { [`${me}--display-icon`]: !I, [`${me}--display-${F}-icon`]: !I, [`${me}--display-${F}-inner-icon`]: I, "me-1": F === "prepend", "ms-1": F === "append" };
  })({ inner: m, position: b });
  function g() {
    l("toggleField");
  }
  return (b, m) => (Z(), fe("div", { class: "v-inline-fields--display-wrapper", onClick: g }, [b.displayPrependIcon || r(i)["display.prepend"] ? (Z(), fe("div", { key: 0, class: le(y("prepend")), style: We(r(f)) }, [r(i)["display.prepend"] ? Ue(b.$slots, "display.prepend", $e(ee({ key: 0 }, u))) : (Z(), Me(Ve, { key: 1, color: r(s).displayPrependIconColor, icon: r(s).displayPrependIcon, size: r(s).displayPrependIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : Fe("", !0), je("div", { class: le(["d-inline-flex", r(a)]), style: We(r(p)) }, [b.displayPrependInnerIcon || r(i)["display.prependInner"] ? (Z(), fe("div", { key: 0, class: le(y("prepend", !0)) }, [r(i)["display.prependInner"] ? Ue(b.$slots, "display.prependInner", $e(ee({ key: 0 }, u))) : (Z(), Me(Ve, { key: 1, color: r(s).displayPrependInnerIconColor, icon: r(s).displayPrependInnerIcon, size: r(s).displayPrependInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : Fe("", !0), Dl(" " + Ll(b.displayValue) + " ", 1), b.displayAppendInnerIcon || r(i)["display.appendInner"] ? (Z(), fe("div", { key: 1, class: le(y("append", !0)) }, [r(i)["display.appendInner"] ? Ue(b.$slots, "display.appendInner", $e(ee({ key: 0 }, u))) : (Z(), Me(Ve, { key: 1, color: r(s).displayAppendInnerIconColor, icon: r(s).displayAppendInnerIcon, size: r(s).displayAppendInnerIconSize }, null, 8, ["color", "icon", "size"]))], 2)) : Fe("", !0)], 6), b.displayAppendIcon || r(i)["display.append"] ? (Z(), fe("div", { key: 1, class: le(y("append")), style: We(r(f)) }, [r(i)["display.append"] ? Ue(b.$slots, "display.append", $e(ee({ key: 0 }, u))) : (Z(), Me(Ve, { key: 1, color: r(s).displayAppendIconColor, icon: r(s).displayAppendIcon, size: r(s).displayAppendIconSize }, null, 8, ["color", "icon", "size"]))], 6)) : Fe("", !0)]));
} }), nr = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, it = (e) => {
  const { icon: n, iconOptions: t, name: l } = e;
  if (n)
    return n;
  const o = nr[t == null ? void 0 : t.defaultSet];
  if (!o)
    throw new Error(`VInlineFields: No VInlineFields default ${t == null ? void 0 : t.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const i = o[l];
  if (!i)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
}, vn = H({ border: [Boolean, Number, String] }, "border");
function fn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return { borderClasses: v(() => {
    const t = Mt(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
const lr = [null, "default", "comfortable", "compact"], mt = H({ density: { type: String, default: "default", validator: (e) => lr.includes(e) } }, "density");
function bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return { densityClasses: v(() => `${n}--density-${e.density}`) };
}
const yn = H({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function mn(e) {
  return { elevationClasses: v(() => {
    const n = Mt(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const Ct = H({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function It(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return { roundedClasses: v(() => {
    const t = Mt(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const or = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Ln(e, n) {
  return d(we, null, [e && d("span", { key: "overlay", class: `${n}__overlay` }, null), d("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const Pt = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => or.includes(e) } }, "variant");
function Wn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const t = v(() => {
    const { variant: i } = r(e);
    return `${n}--variant-${i}`;
  }), { colorClasses: l, colorStyles: o } = Jl(v(() => {
    const { variant: i, color: c } = r(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: t };
}
const Ba = H({ divided: Boolean, ...vn(), ...Se(), ...mt(), ...yn(), ...Ct(), ...nt(), ...He(), ...Pt() }, "VBtnGroup"), Eo = oe()({ name: "VBtnGroup", props: Ba(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Ze(e), { densityClasses: o } = bt(e), { borderClasses: i } = fn(e), { elevationClasses: c } = mn(e), { roundedClasses: s } = It(e);
  pn({ VBtn: { height: "auto", color: ue(e, "color"), density: ue(e, "density"), flat: !0, variant: ue(e, "variant") } }), ge(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, o.value, c.value, s.value, e.class], style: e.style }, t));
} });
function Lt(e, n) {
  let t;
  function l() {
    t = Wl(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  Y(e, (o) => {
    o && !t ? l() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), Je(() => {
    t == null || t.stop();
  });
}
function Te(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (p) => p, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (p) => p;
  const i = Ge("useProxiedModel"), c = W(e[n] !== void 0 ? e[n] : t), s = zt(n), u = v(s !== n ? () => {
    var p, f, y, g;
    return e[n], !(!((p = i.vnode.props) != null && p.hasOwnProperty(n)) && !((f = i.vnode.props) != null && f.hasOwnProperty(s)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${n}`)) && !((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${s}`)));
  } : () => {
    var p, f;
    return e[n], !(!((p = i.vnode.props) != null && p.hasOwnProperty(n)) || !((f = i.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)));
  });
  Lt(() => !u.value, () => {
    Y(() => e[n], (p) => {
      c.value = p;
    });
  });
  const a = v({ get() {
    const p = e[n];
    return l(u.value ? p : c.value);
  }, set(p) {
    const f = o(p), y = Bt(u.value ? e[n] : c.value);
    y !== f && l(y) !== p && (c.value = f, i == null || i.emit(`update:${n}`, f));
  } });
  return Object.defineProperty(a, "externalValue", { get: () => u.value ? e[n] : c.value }), a;
}
const xa = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), ka = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function wa(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Ge("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = ut();
  ot(Symbol.for(`${n.description}:id`), o);
  const i = Ie(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const c = ue(e, "value"), s = v(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: o, value: c, disabled: s }, l), ft(() => {
    i.unregister(o);
  });
  const u = v(() => i.isSelected(o)), a = v(() => u.value && [i.selectedClass.value, e.selectedClass]);
  return Y(u, (p) => {
    l.emit("group:selected", { value: p });
  }), { id: o, isSelected: u, toggle: () => i.select(o, !u.value), select: (p) => i.select(o, p), selectedClass: a, value: c, disabled: s, group: i };
}
function Fa(e, n) {
  let t = !1;
  const l = Qe([]), o = Te(e, "modelValue", [], (a) => a == null ? [] : zo(l, lt(a)), (a) => {
    const p = function(f, y) {
      const g = [];
      return y.forEach((b) => {
        const m = f.findIndex((h) => h.id === b);
        if (~m) {
          const h = f[m];
          g.push(h.value != null ? h.value : m);
        }
      }), g;
    }(l, a);
    return e.multiple ? p : p[0];
  }), i = Ge("useGroup");
  function c() {
    const a = l.find((p) => !p.disabled);
    a && e.mandatory === "force" && !o.value.length && (o.value = [a.id]);
  }
  function s(a) {
    if (e.multiple && Sn('This method is not supported when using "multiple" prop'), o.value.length) {
      const p = o.value[0], f = l.findIndex((b) => b.id === p);
      let y = (f + a) % l.length, g = l[y];
      for (; g.disabled && y !== f; )
        y = (y + a) % l.length, g = l[y];
      if (g.disabled)
        return;
      o.value = [l[y].id];
    } else {
      const p = l.find((f) => !f.disabled);
      p && (o.value = [p.id]);
    }
  }
  un(() => {
    c();
  }), ft(() => {
    t = !0;
  });
  const u = { register: function(a, p) {
    const f = a, y = Yn(Symbol.for(`${n.description}:id`), i == null ? void 0 : i.vnode).indexOf(p);
    y > -1 ? l.splice(y, 0, f) : l.push(f);
  }, unregister: function(a) {
    if (t)
      return;
    c();
    const p = l.findIndex((f) => f.id === a);
    l.splice(p, 1);
  }, selected: o, select: function(a, p) {
    const f = l.find((y) => y.id === a);
    if (!p || !(f != null && f.disabled))
      if (e.multiple) {
        const y = o.value.slice(), g = y.findIndex((m) => m === a), b = ~g;
        if (p = p ?? !b, b && e.mandatory && y.length <= 1 || !b && e.max != null && y.length + 1 > e.max)
          return;
        g < 0 && p ? y.push(a) : g >= 0 && !p && y.splice(g, 1), o.value = y;
      } else {
        const y = o.value.includes(a);
        if (e.mandatory && y)
          return;
        o.value = p ?? !y ? [a] : [];
      }
  }, disabled: ue(e, "disabled"), prev: () => s(l.length - 1), next: () => s(1), isSelected: (a) => o.value.includes(a), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (a) => function(p, f) {
    const y = zo(p, [f]);
    return y.length ? p.findIndex((g) => g.id === y[0]) : -1;
  }(l, a) };
  return ot(n, u), u;
}
function zo(e, n) {
  const t = [];
  return n.forEach((l) => {
    const o = e.find((c) => dn(l, c.value)), i = e[l];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : i != null && t.push(i.id);
  }), t;
}
const Aa = Symbol.for("vuetify:v-btn-toggle"), ar = H({ ...Ba(), ...xa() }, "VBtnToggle");
oe()({ name: "VBtnToggle", props: ar(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: o, prev: i, select: c, selected: s } = Fa(e, Aa);
  return ge(() => {
    const u = Eo.filterProps(e);
    return d(Eo, ee({ class: ["v-btn-toggle", e.class] }, u, { style: e.style }), { default: () => {
      var a;
      return [(a = t.default) == null ? void 0 : a.call(t, { isSelected: l, next: o, prev: i, select: c, selected: s })];
    } });
  }), { next: o, prev: i, select: c };
} });
const ir = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), qe = oe(!1)({ name: "VDefaultsProvider", props: ir(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: o, reset: i, root: c, scoped: s } = Ft(e);
  return pn(l, { reset: i, root: c, scoped: s, disabled: o }), () => {
    var u;
    return (u = t.default) == null ? void 0 : u.call(t);
  };
} });
function Va(e, n) {
  const t = W(), l = ve(!1);
  if (Ul) {
    const o = new IntersectionObserver((i) => {
      e == null || e(i, o), l.value = !!i.find((c) => c.isIntersecting);
    }, n);
    ft(() => {
      o.disconnect();
    }), Y(t, (i, c) => {
      c && (o.unobserve(c), l.value = !1), i && o.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
function Ql(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = W(), l = W();
  if (Ke) {
    const o = new ResizeObserver((i) => {
      e == null || e(i, o), i.length && (l.value = n === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    ft(() => {
      o.disconnect();
    }), Y(t, (i, c) => {
      c && (o.unobserve(Zn(c)), l.value = void 0), i && o.observe(Zn(i));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: Ml(l) };
}
const rr = H({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...Se(), ...En(), ...nt({ tag: "div" }), ...He() }, "VProgressCircular"), _a = oe()({ name: "VProgressCircular", props: rr(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, o = W(), { themeClasses: i } = Ze(e), { sizeClasses: c, sizeStyles: s } = zn(e), { textColorClasses: u, textColorStyles: a } = vt(ue(e, "color")), { textColorClasses: p, textColorStyles: f } = vt(ue(e, "bgColor")), { intersectionRef: y, isIntersecting: g } = Va(), { resizeRef: b, contentRect: m } = Ql(), h = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), I = v(() => Number(e.width)), F = v(() => s.value ? Number(e.size) : m.value ? m.value.width : Math.max(I.value, 32)), V = v(() => 20 / (1 - I.value / F.value) * 2), N = v(() => I.value / F.value * V.value), w = v(() => ce((100 - h.value) / 100 * l));
  return ze(() => {
    y.value = o.value, b.value = o.value;
  }), ge(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, u.value, e.class], style: [s.value, a.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${V.value} ${V.value}` }, [d("circle", { class: ["v-progress-circular__underlay", p.value], style: f.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": N.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": N.value, "stroke-dasharray": l, "stroke-dashoffset": w.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: h.value })])] })), {};
} }), Xt = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Yt(e) {
  return { dimensionStyles: v(() => ({ height: ce(e.height), maxHeight: ce(e.maxHeight), maxWidth: ce(e.maxWidth), minHeight: ce(e.minHeight), minWidth: ce(e.minWidth), width: ce(e.width) })) };
}
const Oa = Symbol.for("vuetify:locale");
function pl() {
  const e = Ie(Oa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function Mn() {
  const e = Ie(Oa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Do = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Zl = H({ location: String }, "location");
function eo(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = Mn();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = Al(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function s(a) {
      return t ? t(a) : 0;
    }
    const u = {};
    return i !== "center" && (n ? u[Do[i]] = `calc(100% - ${s(i)}px)` : u[i] = 0), c !== "center" ? n ? u[Do[c]] = `calc(100% - ${s(c)}px)` : u[c] = 0 : (i === "center" ? u.top = u.left = "50%" : u[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", u.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), u;
  }) };
}
const sr = H({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...Se(), ...Zl({ location: "top" }), ...Ct(), ...nt(), ...He() }, "VProgressLinear"), ur = oe()({ name: "VProgressLinear", props: sr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = Te(e, "modelValue"), { isRtl: o, rtlClasses: i } = Mn(), { themeClasses: c } = Ze(e), { locationStyles: s } = eo(e), { textColorClasses: u, textColorStyles: a } = vt(e, "color"), { backgroundColorClasses: p, backgroundColorStyles: f } = rn(v(() => e.bgColor || e.color)), { backgroundColorClasses: y, backgroundColorStyles: g } = rn(e, "color"), { roundedClasses: b } = It(e), { intersectionRef: m, isIntersecting: h } = Va(), I = v(() => parseInt(e.max, 10)), F = v(() => parseInt(e.height, 10)), V = v(() => parseFloat(e.bufferValue) / I.value * 100), N = v(() => parseFloat(l.value) / I.value * 100), w = v(() => o.value !== e.reverse), L = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), M = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function E(S) {
    if (!m.value)
      return;
    const { left: k, right: C, width: _ } = m.value.getBoundingClientRect(), P = w.value ? _ - S.clientX + (C - _) : S.clientX - k;
    l.value = Math.round(P / _ * I.value);
  }
  return ge(() => d(e.tag, { ref: m, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": w.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, b.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ce(F.value) : 0, "--v-progress-linear-height": ce(F.value), ...s.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : N.value, onClick: e.clickable && E }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", u.value], style: { ...a.value, [w.value ? "left" : "right"]: ce(-F.value), borderTop: `${ce(F.value / 2)} dotted`, opacity: M.value, top: `calc(50% - ${ce(F.value / 4)})`, width: ce(100 - V.value, "%"), "--v-progress-linear-stream-to": ce(F.value * (w.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", p.value], style: [f.value, { opacity: M.value, width: ce(e.stream ? V.value : 100, "%") }] }, null), d(Wt, { name: L.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((S) => d("div", { key: S, class: ["v-progress-linear__indeterminate", S, y.value], style: g.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", y.value], style: [g.value, { width: ce(N.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: N.value, buffer: V.value })])] })), {};
} }), to = H({ loading: [Boolean, String] }, "loader");
function vl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return { loaderClasses: v(() => ({ [`${n}--loading`]: e.loading })) };
}
function no(e, n) {
  var l;
  let { slots: t } = n;
  return d("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || d(ur, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const cr = ["static", "relative", "fixed", "absolute", "sticky"], Pa = H({ position: { type: String, validator: (e) => cr.includes(e) } }, "position");
function $a(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  return { positionClasses: v(() => e.position ? `${n}--${e.position}` : void 0) };
}
function fl(e, n) {
  const t = _i("RouterLink"), l = v(() => !(!e.href && !e.to)), o = v(() => (l == null ? void 0 : l.value) || ho(n, "click") || ho(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: o, href: ue(e, "href") };
  const i = e.to ? t.useLink(e) : void 0, c = function() {
    const s = Ge("useRoute");
    return v(() => {
      var u;
      return (u = s == null ? void 0 : s.proxy) == null ? void 0 : u.$route;
    });
  }();
  return { isLink: l, isClickable: o, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && v(() => {
    var s, u, a;
    return e.exact ? c.value ? ((s = i.isExactActive) == null ? void 0 : s.value) && dn(i.route.value.query, c.value.query) : (u = i.isExactActive) == null ? void 0 : u.value : (a = i.isActive) == null ? void 0 : a.value;
  }), href: v(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const yl = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let Cl = !1;
const Vl = Symbol("rippleStop"), dr = 80;
function Lo(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function _l(e) {
  return e.constructor.name === "TouchEvent";
}
function Ta(e) {
  return e.constructor.name === "KeyboardEvent";
}
const il = { show(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: i, scale: c, x: s, y: u, centerX: a, centerY: p } = function(b, m) {
    var M;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, I = 0, F = 0;
    if (!Ta(b)) {
      const E = m.getBoundingClientRect(), S = _l(b) ? b.touches[b.touches.length - 1] : b;
      I = S.clientX - E.left, F = S.clientY - E.top;
    }
    let V = 0, N = 0.3;
    (M = m._ripple) != null && M.circle ? (N = 0.15, V = m.clientWidth / 2, V = h.center ? V : V + Math.sqrt((I - V) ** 2 + (F - V) ** 2) / 4) : V = Math.sqrt(m.clientWidth ** 2 + m.clientHeight ** 2) / 2;
    const w = (m.clientWidth - 2 * V) / 2 + "px", L = (m.clientHeight - 2 * V) / 2 + "px";
    return { radius: V, scale: N, x: h.center ? w : I - V + "px", y: h.center ? L : F - V + "px", centerX: w, centerY: L };
  }(e, n, t), f = 2 * i + "px";
  o.className = "v-ripple__animation", o.style.width = f, o.style.height = f, n.appendChild(l);
  const y = window.getComputedStyle(n);
  y && y.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Lo(o, `translate(${s}, ${u}) scale3d(${c},${c},${c})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Lo(o, `translate(${a}, ${p}) scale3d(1,1,1)`);
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
  const l = performance.now() - Number(t.dataset.activated), o = Math.max(250 - l, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var c;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = t.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, o);
} };
function Ea(e) {
  return e === void 0 || !!e;
}
function wn(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[Vl]) {
    if (e[Vl] = !0, _l(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Ta(e), t._ripple.class && (n.class = t._ripple.class), _l(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        il.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, dr);
    } else
      il.show(e, t, n);
  }
}
function Wo(e) {
  e[Vl] = !0;
}
function tt(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        tt(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), il.hide(n);
  }
}
function za(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Fn = !1;
function Da(e) {
  Fn || e.keyCode !== fo.enter && e.keyCode !== fo.space || (Fn = !0, wn(e));
}
function La(e) {
  Fn = !1, tt(e);
}
function Wa(e) {
  Fn && (Fn = !1, tt(e));
}
function Mo(e, n, t) {
  const { value: l, modifiers: o } = n, i = Ea(l);
  if (i || il.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = o.center, e._ripple.circle = o.circle, kl(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", Wo, { passive: !0 }), void e.addEventListener("mousedown", Wo);
    e.addEventListener("touchstart", wn, { passive: !0 }), e.addEventListener("touchend", tt, { passive: !0 }), e.addEventListener("touchmove", za, { passive: !0 }), e.addEventListener("touchcancel", tt), e.addEventListener("mousedown", wn), e.addEventListener("mouseup", tt), e.addEventListener("mouseleave", tt), e.addEventListener("keydown", Da), e.addEventListener("keyup", La), e.addEventListener("blur", Wa), e.addEventListener("dragstart", tt, { passive: !0 });
  } else
    !i && t && Ma(e);
}
function Ma(e) {
  e.removeEventListener("mousedown", wn), e.removeEventListener("touchstart", wn), e.removeEventListener("touchend", tt), e.removeEventListener("touchmove", za), e.removeEventListener("touchcancel", tt), e.removeEventListener("mouseup", tt), e.removeEventListener("mouseleave", tt), e.removeEventListener("keydown", Da), e.removeEventListener("keyup", La), e.removeEventListener("dragstart", tt), e.removeEventListener("blur", Wa);
}
const Rn = { mounted: function(e, n) {
  Mo(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Ma(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Mo(e, n, Ea(n.oldValue));
} }, pr = H({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Aa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ae, appendIcon: Ae, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...vn(), ...Se(), ...mt(), ...Xt(), ...yn(), ...ka(), ...to(), ...Zl(), ...Pa(), ...Ct(), ...yl(), ...En(), ...nt({ tag: "button" }), ...He(), ...Pt({ variant: "elevated" }) }, "VBtn"), Ro = oe()({ name: "VBtn", directives: { Ripple: Rn }, props: pr(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = Ze(e), { borderClasses: i } = fn(e), { colorClasses: c, colorStyles: s, variantClasses: u } = Wn(e), { densityClasses: a } = bt(e), { dimensionStyles: p } = Yt(e), { elevationClasses: f } = mn(e), { loaderClasses: y } = vl(e), { locationStyles: g } = eo(e), { positionClasses: b } = $a(e), { roundedClasses: m } = It(e), { sizeClasses: h, sizeStyles: I } = zn(e), F = wa(e, e.symbol, !1), V = fl(e, t), N = v(() => {
    var S;
    return e.active !== void 0 ? e.active : V.isLink.value ? (S = V.isActive) == null ? void 0 : S.value : F == null ? void 0 : F.isSelected.value;
  }), w = v(() => (F == null ? void 0 : F.disabled.value) || e.disabled), L = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), M = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function E(S) {
    var k;
    w.value || V.isLink.value && (S.metaKey || S.ctrlKey || S.shiftKey || S.button !== 0 || t.target === "_blank") || ((k = V.navigate) == null || k.call(V, S), F == null || F.toggle());
  }
  return function(S, k) {
    Y(() => {
      var C;
      return (C = S.isActive) == null ? void 0 : C.value;
    }, (C) => {
      S.isLink.value && C && k && Ne(() => {
        k(!0);
      });
    }, { immediate: !0 });
  }(V, F == null ? void 0 : F.select), ge(() => {
    var G, $;
    const S = V.isLink.value ? "a" : e.tag, k = !(!e.prependIcon && !l.prepend), C = !(!e.appendIcon && !l.append), _ = !(!e.icon || e.icon === !0), P = (F == null ? void 0 : F.isSelected.value) && (!V.isLink.value || ((G = V.isActive) == null ? void 0 : G.value)) || !F || (($ = V.isActive) == null ? void 0 : $.value);
    return Xe(d(S, { type: S === "a" ? void 0 : "button", class: ["v-btn", F == null ? void 0 : F.selectedClass.value, { "v-btn--active": N.value, "v-btn--block": e.block, "v-btn--disabled": w.value, "v-btn--elevated": L.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, o.value, i.value, P ? c.value : void 0, a.value, f.value, y.value, b.value, m.value, h.value, u.value, e.class], style: [P ? s.value : void 0, p.value, g.value, I.value, e.style], disabled: w.value || void 0, href: V.href.value, onClick: E, value: M.value }, { default: () => {
      var O;
      return [Ln(!0, "v-btn"), !e.icon && k && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(qe, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(Ve, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && _ ? d(Ve, { key: "content-icon", icon: e.icon }, null) : d(qe, { key: "content-defaults", disabled: !_, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var T;
        return [((T = l.default) == null ? void 0 : T.call(l)) ?? e.text];
      } })]), !e.icon && C && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(qe, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(Ve, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((O = l.loader) == null ? void 0 : O.call(l)) ?? d(_a, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[ht("ripple"), !w.value && e.ripple, null]]);
  }), {};
} }), Jt = ct({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: n }) {
  const t = gt(), l = n, o = e, i = Ie(Symbol.for("vuetify:icons")), c = v(() => o.error), s = v(() => ({ [`${me}--save-fields-container`]: !0 })), u = v(() => o.loading), a = Qe({ ...t, ...o });
  ze(() => {
    Object.assign(a, { ...t, ...o });
  });
  const p = v(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), f = v(() => ((I) => {
    const { cancelButtonVariant: F } = I;
    return { "me-1": F === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: a.cancelButtonVariant })), y = v(() => it({ icon: o.cancelIcon, iconOptions: i, name: "false" })), g = v(() => it({ icon: o.loadingIcon, iconOptions: i, name: "loading" })), b = v(() => it({ icon: o.saveIcon, iconOptions: i, name: "save" }));
  function m() {
    l("close");
  }
  function h() {
    l("save");
  }
  return (I, F) => (Z(), fe("div", ee({ class: r(s) }, I.$attrs), [r(a).hideSaveIcon ? Fe("", !0) : (Z(), Me(Ro, { key: 0, class: "ms-1", color: r(a).saveButtonColor, disabled: r(c), icon: "", size: r(a).saveButtonSize, title: r(u) ? "Loading" : r(a).saveButtonTitle, variant: r(a).saveButtonVariant, onClick: h }, { default: Ce(() => [r(u) ? (Z(), Me(Ve, { key: 1, class: le(r(p)), color: r(a).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (Z(), Me(Ve, { key: 0, color: r(c) ? "error" : r(a).saveIconColor, icon: r(b) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(a).hideCancelIcon ? Fe("", !0) : (Z(), Me(Ro, { key: 1, class: le(r(f)), color: r(a).cancelButtonColor, icon: "", size: r(a).cancelButtonSize, title: r(a).cancelButtonTitle, variant: r(a).cancelButtonVariant, onClick: m }, { default: Ce(() => [r(a).hideSaveIcon && r(u) ? (Z(), Me(Ve, { key: 0, class: le(r(p)), color: r(a).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (Z(), Me(Ve, { key: 1, class: "text-default", color: r(a).cancelIconColor, icon: r(y) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), Nn = (e) => {
  const { required: n, rules: t } = e;
  let { value: l } = e;
  l = r(l);
  const o = [];
  let i = !1;
  if (n && !l)
    return o.push("Field is required."), { errors: !0, results: o };
  if (t) {
    for (const c of t) {
      const s = (typeof c == "function" ? c : () => c)(l);
      s !== !0 && (typeof s == "string" ? o.push(s) : console.warn(`${s} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = o.length > 0;
  }
  return { errors: i, results: o };
}, Qt = (e) => {
  const { attrs: n, closeSiblings: t, fieldOnly: l, props: o, showField: i, timeOpened: c } = e;
  let s = c;
  return t && !l && (s = /* @__PURE__ */ new Date()), { settings: { ...n, ...o }, showField: !r(i), timeOpened: s };
}, lo = (e) => {
  const { length: n = 0 } = e;
  let { suffix: t, text: l } = e;
  return l = l.toString(), t = t || "...", l.length > n ? `${l.substring(0, n)}${t}` : l;
}, Zt = ["error", "update", "update:closeSiblingFields", "update:model-value"], vr = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], gn = (e) => {
  let n = e;
  return n = Object.entries(n).filter(([t]) => !vr.includes(t)), Object.fromEntries(n);
}, Ra = H({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...Se(), ...Xt() }, "VResponsive"), No = oe()({ name: "VResponsive", props: Ra(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: v(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Yt(e);
  return ge(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), hn = H({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), St = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: o, ...i } = e, { component: c = Wt, ...s } = typeof l == "object" ? l : {};
  return dl(c, ee(typeof l == "string" ? { name: o ? "" : l } : s, i, { disabled: o }), t);
};
function jo(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const oo = { mounted: function(e, n) {
  if (!Ul)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: o, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var f;
    let s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], u = arguments.length > 1 ? arguments[1] : void 0;
    const a = (f = e._observe) == null ? void 0 : f[n.instance.$.uid];
    if (!a)
      return;
    const p = s.some((y) => y.isIntersecting);
    !o || t.quiet && !a.init || t.once && !p && !a.init || o(p, s, u), p && t.once ? jo(e, n) : a.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: jo }, fr = H({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Ra(), ...Se(), ...hn() }, "VImg"), Na = oe()({ name: "VImg", directives: { intersect: oo }, props: fr(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const o = Ge("VImg"), i = ve(""), c = W(), s = ve(e.eager ? "loading" : "idle"), u = ve(), a = ve(), p = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), f = v(() => p.value.aspect || u.value / a.value || 0);
  function y(S) {
    if ((!e.eager || !S) && (!Ul || S || e.eager)) {
      if (s.value = "loading", p.value.lazySrc) {
        const k = new Image();
        k.src = p.value.lazySrc, I(k, null);
      }
      p.value.src && Ne(() => {
        var k;
        t("loadstart", ((k = c.value) == null ? void 0 : k.currentSrc) || p.value.src), setTimeout(() => {
          var C;
          if (!o.isUnmounted)
            if ((C = c.value) != null && C.complete) {
              if (c.value.naturalWidth || b(), s.value === "error")
                return;
              f.value || I(c.value, null), s.value === "loading" && g();
            } else
              f.value || I(c.value), m();
        });
      });
    }
  }
  function g() {
    var S;
    o.isUnmounted || (m(), I(c.value), s.value = "loaded", t("load", ((S = c.value) == null ? void 0 : S.currentSrc) || p.value.src));
  }
  function b() {
    var S;
    o.isUnmounted || (s.value = "error", t("error", ((S = c.value) == null ? void 0 : S.currentSrc) || p.value.src));
  }
  function m() {
    const S = c.value;
    S && (i.value = S.currentSrc || S.src);
  }
  Y(() => e.src, () => {
    y(s.value !== "idle");
  }), Y(f, (S, k) => {
    !S && k && c.value && I(c.value);
  }), ia(() => y());
  let h = -1;
  function I(S) {
    let k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const C = () => {
      if (clearTimeout(h), o.isUnmounted)
        return;
      const { naturalHeight: _, naturalWidth: P } = S;
      _ || P ? (u.value = P, a.value = _) : S.complete || s.value !== "loading" || k == null ? (S.currentSrc.endsWith(".svg") || S.currentSrc.startsWith("data:image/svg+xml")) && (u.value = 1, a.value = 1) : h = window.setTimeout(C, k);
    };
    C();
  }
  ft(() => {
    clearTimeout(h);
  });
  const F = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), V = () => {
    var C;
    if (!p.value.src || s.value === "idle")
      return null;
    const S = d("img", { class: ["v-img__img", F.value], style: { objectPosition: e.position }, src: p.value.src, srcset: p.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: g, onError: b }, null), k = (C = l.sources) == null ? void 0 : C.call(l);
    return d(St, { transition: e.transition, appear: !0 }, { default: () => [Xe(k ? d("picture", { class: "v-img__picture" }, [k, S]) : S, [[cn, s.value === "loaded"]])] });
  }, N = () => d(St, { transition: e.transition }, { default: () => [p.value.lazySrc && s.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", F.value], style: { objectPosition: e.position }, src: p.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), w = () => l.placeholder ? d(St, { transition: e.transition, appear: !0 }, { default: () => [(s.value === "loading" || s.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, L = () => l.error ? d(St, { transition: e.transition, appear: !0 }, { default: () => [s.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, M = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = ve(!1);
  {
    const S = Y(f, (k) => {
      k && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = !0;
        });
      }), S());
    });
  }
  return ge(() => {
    const S = No.filterProps(e);
    return Xe(d(No, ee({ class: ["v-img", { "v-img--booting": !E.value }, e.class], style: [{ width: ce(e.width === "auto" ? u.value : e.width) }, e.style] }, S, { aspectRatio: f.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(we, null, [d(V, null, null), d(N, null, null), d(M, null, null), d(w, null, null), d(L, null, null)]), default: l.default }), [[ht("intersect"), { handler: y, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: i, image: c, state: s, naturalWidth: u, naturalHeight: a };
} }), yr = H({ start: Boolean, end: Boolean, icon: Ae, image: String, text: String, ...Se(), ...mt(), ...Ct(), ...En(), ...nt(), ...He(), ...Pt({ variant: "flat" }) }, "VAvatar"), kt = oe()({ name: "VAvatar", props: yr(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Ze(e), { colorClasses: o, colorStyles: i, variantClasses: c } = Wn(e), { densityClasses: s } = bt(e), { roundedClasses: u } = It(e), { sizeClasses: a, sizeStyles: p } = zn(e);
  return ge(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, s.value, u.value, a.value, c.value, e.class], style: [i.value, p.value, e.style] }, { default: () => {
    var f;
    return [e.image ? d(Na, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(Ve, { key: "icon", icon: e.icon }, null) : ((f = t.default) == null ? void 0 : f.call(t)) ?? e.text, Ln(!1, "v-avatar")];
  } })), {};
} }), mr = H({ text: String, clickable: Boolean, ...Se(), ...He() }, "VLabel"), ja = oe()({ name: "VLabel", props: mr(), setup(e, n) {
  let { slots: t } = n;
  return ge(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Ga = Symbol.for("vuetify:selection-control-group"), Ua = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ae, trueIcon: Ae, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: dn }, ...Se(), ...mt(), ...He() }, "SelectionControlGroup"), gr = H({ ...Ua({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
oe()({ name: "VSelectionControlGroup", props: gr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = Te(e, "modelValue"), o = ut(), i = v(() => e.id || `v-selection-control-group-${o}`), c = v(() => e.name || i.value), s = /* @__PURE__ */ new Set();
  return ot(Ga, { modelValue: l, forceUpdate: () => {
    s.forEach((u) => u());
  }, onForceUpdate: (u) => {
    s.add(u), Je(() => {
      s.delete(u);
    });
  } }), pn({ [e.defaultsTarget]: { color: ue(e, "color"), disabled: ue(e, "disabled"), density: ue(e, "density"), error: ue(e, "error"), inline: ue(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ue(e, "falseIcon"), trueIcon: ue(e, "trueIcon"), readonly: ue(e, "readonly"), ripple: ue(e, "ripple"), type: ue(e, "type"), valueComparator: ue(e, "valueComparator") } }), ge(() => {
    var u;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(u = t.default) == null ? void 0 : u.call(t)]);
  }), {};
} });
const ao = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...Se(), ...Ua() }, "VSelectionControl"), rl = oe()({ name: "VSelectionControl", directives: { Ripple: Rn }, inheritAttrs: !1, props: ao(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: o, densityClasses: i, icon: c, model: s, textColorClasses: u, textColorStyles: a, backgroundColorClasses: p, backgroundColorStyles: f, trueValue: y } = function(w) {
    const L = Ie(Ga, void 0), { densityClasses: M } = bt(w), E = Te(w, "modelValue"), S = v(() => w.trueValue !== void 0 ? w.trueValue : w.value === void 0 || w.value), k = v(() => w.falseValue !== void 0 && w.falseValue), C = v(() => !!w.multiple || w.multiple == null && Array.isArray(E.value)), _ = v({ get() {
      const B = L ? L.modelValue.value : E.value;
      return C.value ? lt(B).some((A) => w.valueComparator(A, S.value)) : w.valueComparator(B, S.value);
    }, set(B) {
      if (w.readonly)
        return;
      const A = B ? S.value : k.value;
      let U = A;
      C.value && (U = B ? [...lt(E.value), A] : lt(E.value).filter((j) => !w.valueComparator(j, S.value))), L ? L.modelValue.value = U : E.value = U;
    } }), { textColorClasses: P, textColorStyles: G } = vt(v(() => {
      if (!w.error && !w.disabled)
        return _.value ? w.color : w.baseColor;
    })), { backgroundColorClasses: $, backgroundColorStyles: O } = rn(v(() => !_.value || w.error || w.disabled ? void 0 : w.color)), T = v(() => _.value ? w.trueIcon : w.falseIcon);
    return { group: L, densityClasses: M, trueValue: S, falseValue: k, model: _, textColorClasses: P, textColorStyles: G, backgroundColorClasses: $, backgroundColorStyles: O, icon: T };
  }(e), g = ut(), b = v(() => e.id || `input-${g}`), m = ve(!1), h = ve(!1), I = W();
  function F(w) {
    m.value = !0, an(w.target, ":focus-visible") !== !1 && (h.value = !0);
  }
  function V() {
    m.value = !1, h.value = !1;
  }
  function N(w) {
    e.readonly && o && Ne(() => o.forceUpdate()), s.value = w.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    I.value && (I.value.checked = s.value);
  }), ge(() => {
    var S, k;
    const w = l.label ? l.label({ label: e.label, props: { for: b.value } }) : e.label, [L, M] = $n(t), E = d("input", ee({ ref: I, checked: s.value, disabled: !(!e.readonly && !e.disabled), id: b.value, onBlur: V, onFocus: F, onInput: N, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: y.value, name: e.name, "aria-checked": e.type === "checkbox" ? s.value : void 0 }, M), null);
    return d("div", ee({ class: ["v-selection-control", { "v-selection-control--dirty": s.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": m.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, L, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", u.value], style: a.value }, [(S = l.default) == null ? void 0 : S.call(l, { backgroundColorClasses: p, backgroundColorStyles: f }), Xe(d("div", { class: ["v-selection-control__input"] }, [((k = l.input) == null ? void 0 : k.call(l, { model: s, textColorClasses: u, textColorStyles: a, backgroundColorClasses: p, backgroundColorStyles: f, inputNode: E, icon: c.value, props: { onFocus: F, onBlur: V, id: b.value } })) ?? d(we, null, [c.value && d(Ve, { key: "icon", icon: c.value }, null), E])]), [[ht("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), w && d(ja, { for: b.value, clickable: !0, onClick: (C) => C.stopPropagation() }, { default: () => [w] })]);
  }), { isFocused: m, input: I };
} }), qa = H({ indeterminate: Boolean, indeterminateIcon: { type: Ae, default: "$checkboxIndeterminate" }, ...ao({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), sl = oe()({ name: "VCheckboxBtn", props: qa(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = Te(e, "indeterminate"), o = Te(e, "modelValue");
  function i(u) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), s = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return ge(() => {
    const u = Ot(rl.filterProps(e), ["modelValue"]);
    return d(rl, ee(u, { modelValue: o.value, "onUpdate:modelValue": [(a) => o.value = a, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: s.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ha(e) {
  const { t: n } = pl();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], c = i && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(Ve, { icon: e[`${l}Icon`], "aria-label": c, onClick: i }, null);
  } };
}
const hr = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function et(e, n, t) {
  return oe()({ name: e, props: hr({ mode: t, origin: n }), setup(l, o) {
    let { slots: i } = o;
    const c = { onBeforeEnter(s) {
      l.origin && (s.style.transformOrigin = l.origin);
    }, onLeave(s) {
      if (l.leaveAbsolute) {
        const { offsetTop: u, offsetLeft: a, offsetWidth: p, offsetHeight: f } = s;
        s._transitionInitialStyles = { position: s.style.position, top: s.style.top, left: s.style.left, width: s.style.width, height: s.style.height }, s.style.position = "absolute", s.style.top = `${u}px`, s.style.left = `${a}px`, s.style.width = `${p}px`, s.style.height = `${f}px`;
      }
      l.hideOnLeave && s.style.setProperty("display", "none", "important");
    }, onAfterLeave(s) {
      if (l.leaveAbsolute && (s != null && s._transitionInitialStyles)) {
        const { position: u, top: a, left: p, width: f, height: y } = s._transitionInitialStyles;
        delete s._transitionInitialStyles, s.style.position = u || "", s.style.top = a || "", s.style.left = p || "", s.style.width = f || "", s.style.height = y || "";
      }
    } };
    return () => {
      const s = l.group ? Oi : Wt;
      return dl(s, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, i.default);
    };
  } });
}
function Ka(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return oe()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, o) {
    let { slots: i } = o;
    return () => dl(Wt, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, i.default);
  } });
}
function Xa() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = aa(`offset-${n}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [n]: i.style[n] };
  }, onEnter(i) {
    const c = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const s = `${i[t]}px`;
    i.style[n] = "0", i.offsetHeight, i.style.transition = c.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[n] = s;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [n]: i.style[n] }, i.style.overflow = "hidden", i.style[n] = `${i[t]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), o(i);
  }
  function o(i) {
    const c = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, c != null && (i.style[n] = c), delete i._initialStyle;
  }
}
const br = H({ target: [Object, Array] }, "v-dialog-transition"), Ya = oe()({ name: "VDialogTransition", props: br(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, i) {
    var y;
    await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), o.style.visibility = "";
    const { x: c, y: s, sx: u, sy: a, speed: p } = Uo(e.target, o), f = ln(o, [{ transform: `translate(${c}px, ${s}px) scale(${u}, ${a})`, opacity: 0 }, {}], { duration: 225 * p, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (y = Go(o)) == null || y.forEach((g) => {
      ln(g, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * p, easing: ll });
    }), f.finished.then(() => i());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, i) {
    var f;
    await new Promise((y) => requestAnimationFrame(y));
    const { x: c, y: s, sx: u, sy: a, speed: p } = Uo(e.target, o);
    ln(o, [{}, { transform: `translate(${c}px, ${s}px) scale(${u}, ${a})`, opacity: 0 }], { duration: 125 * p, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (f = Go(o)) == null || f.forEach((y) => {
      ln(y, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * p, easing: ll });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(Wt, ee({ name: "dialog-transition" }, l, { css: !1 }), t) : d(Wt, { name: "dialog-transition" }, t);
} });
function Go(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Uo(e, n) {
  const t = ha(e), l = Kl(n), [o, i] = getComputedStyle(n).transformOrigin.split(" ").map((I) => parseFloat(I)), [c, s] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let u = t.left + t.width / 2;
  c === "left" || s === "left" ? u -= t.width / 2 : c !== "right" && s !== "right" || (u += t.width / 2);
  let a = t.top + t.height / 2;
  c === "top" || s === "top" ? a -= t.height / 2 : c !== "bottom" && s !== "bottom" || (a += t.height / 2);
  const p = t.width / l.width, f = t.height / l.height, y = Math.max(1, p, f), g = p / y || 0, b = f / y || 0, m = l.width * l.height / (window.innerWidth * window.innerHeight), h = m > 0.12 ? Math.min(1.5, 10 * (m - 0.12) + 1) : 1;
  return { x: u - (o + l.left), y: a - (i + l.top), sx: g, sy: b, speed: h };
}
et("fab-transition", "center center", "out-in"), et("dialog-bottom-transition"), et("dialog-top-transition"), et("fade-transition");
const Cr = et("scale-transition");
et("scroll-x-transition"), et("scroll-x-reverse-transition"), et("scroll-y-transition"), et("scroll-y-reverse-transition"), et("slide-x-transition"), et("slide-x-reverse-transition");
const Ja = et("slide-y-transition");
et("slide-y-reverse-transition");
const Ir = Ka("expand-transition", Xa()), Qa = Ka("expand-x-transition", Xa("", !0)), Sr = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...Se(), ...hn({ transition: { component: Ja, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), Br = oe()({ name: "VMessages", props: Sr(), setup(e, n) {
  let { slots: t } = n;
  const l = v(() => lt(e.messages)), { textColorClasses: o, textColorStyles: i } = vt(v(() => e.color));
  return ge(() => d(St, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, s) => d("div", { class: "v-messages__message", key: `${s}-${l.value}` }, [t.message ? t.message({ message: c }) : c]))] })), {};
} }), Za = H({ focused: Boolean, "onUpdate:focused": pt() }, "focus");
function jn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const t = Te(e, "focused");
  return { focusClasses: v(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const xr = Symbol.for("vuetify:form");
function io() {
  return Ie(xr, null);
}
const kr = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Za() }, "validation"), Gn = H({ id: String, appendIcon: Ae, centerAffix: { type: Boolean, default: !0 }, prependIcon: Ae, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": pt(), "onClick:append": pt(), ...Se(), ...mt(), ...kr() }, "VInput"), wt = oe()({ name: "VInput", props: { ...Gn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const { densityClasses: i } = bt(e), { rtlClasses: c } = Mn(), { InputIcon: s } = Ha(e), u = ut(), a = v(() => e.id || `input-${u}`), p = v(() => `${a.value}-messages`), { errorMessages: f, isDirty: y, isDisabled: g, isReadonly: b, isPristine: m, isValid: h, isValidating: I, reset: F, resetValidation: V, validate: N, validationClasses: w } = function(E) {
    let S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt(), k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ut();
    const C = Te(E, "modelValue"), _ = v(() => E.validationValue === void 0 ? C.value : E.validationValue), P = io(), G = W([]), $ = ve(!0), O = v(() => !(!lt(C.value === "" ? null : C.value).length && !lt(_.value === "" ? null : _.value).length)), T = v(() => !!(E.disabled ?? (P == null ? void 0 : P.isDisabled.value))), B = v(() => !!(E.readonly ?? (P == null ? void 0 : P.isReadonly.value))), A = v(() => {
      var x;
      return (x = E.errorMessages) != null && x.length ? lt(E.errorMessages).concat(G.value).slice(0, Math.max(0, +E.maxErrors)) : G.value;
    }), U = v(() => {
      let x = (E.validateOn ?? (P == null ? void 0 : P.validateOn.value)) || "input";
      x === "lazy" && (x = "input lazy");
      const K = new Set((x == null ? void 0 : x.split(" ")) ?? []);
      return { blur: K.has("blur") || K.has("input"), input: K.has("input"), submit: K.has("submit"), lazy: K.has("lazy") };
    }), j = v(() => {
      var x;
      return !E.error && !((x = E.errorMessages) != null && x.length) && (!E.rules.length || ($.value ? !G.value.length && !U.value.lazy || null : !G.value.length));
    }), X = ve(!1), q = v(() => ({ [`${S}--error`]: j.value === !1, [`${S}--dirty`]: O.value, [`${S}--disabled`]: T.value, [`${S}--readonly`]: B.value })), J = v(() => E.name ?? r(k));
    function R() {
      C.value = null, Ne(z);
    }
    function z() {
      $.value = !0, U.value.lazy ? G.value = [] : D(!0);
    }
    async function D() {
      let x = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const K = [];
      X.value = !0;
      for (const te of E.rules) {
        if (K.length >= +(E.maxErrors ?? 1))
          break;
        const re = typeof te == "function" ? te : () => te, Q = await re(_.value);
        Q !== !0 && (Q === !1 || typeof Q == "string" ? K.push(Q || "") : console.warn(`${Q} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return G.value = K, X.value = !1, $.value = x, G.value;
    }
    return ia(() => {
      P == null || P.register({ id: J.value, validate: D, reset: R, resetValidation: z });
    }), ft(() => {
      P == null || P.unregister(J.value);
    }), un(async () => {
      U.value.lazy || await D(!0), P == null || P.update(J.value, j.value, A.value);
    }), Lt(() => U.value.input, () => {
      Y(_, () => {
        if (_.value != null)
          D();
        else if (E.focused) {
          const x = Y(() => E.focused, (K) => {
            K || D(), x();
          });
        }
      });
    }), Lt(() => U.value.blur, () => {
      Y(() => E.focused, (x) => {
        x || D();
      });
    }), Y(j, () => {
      P == null || P.update(J.value, j.value, A.value);
    }), { errorMessages: A, isDirty: O, isDisabled: T, isReadonly: B, isPristine: $, isValid: j, isValidating: X, reset: R, resetValidation: z, validate: D, validationClasses: q };
  }(e, "v-input", a), L = v(() => ({ id: a, messagesId: p, isDirty: y, isDisabled: g, isReadonly: b, isPristine: m, isValid: h, isValidating: I, reset: F, resetValidation: V, validate: N })), M = v(() => {
    var E;
    return (E = e.errorMessages) != null && E.length || !m.value && f.value.length ? f.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return ge(() => {
    var _, P, G, $;
    const E = !(!l.prepend && !e.prependIcon), S = !(!l.append && !e.appendIcon), k = M.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (k || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, c.value, w.value, e.class], style: e.style }, [E && d("div", { key: "prepend", class: "v-input__prepend" }, [(_ = l.prepend) == null ? void 0 : _.call(l, L.value), e.prependIcon && d(s, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(P = l.default) == null ? void 0 : P.call(l, L.value)]), S && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(s, { key: "append-icon", name: "append" }, null), (G = l.append) == null ? void 0 : G.call(l, L.value)]), C && d("div", { class: "v-input__details" }, [d(Br, { id: p.value, active: k, messages: M.value }, { message: l.message }), ($ = l.details) == null ? void 0 : $.call(l, L.value)])]);
  }), { reset: F, resetValidation: V, validate: N, isValid: h, errorMessages: f };
} }), wr = H({ ...Gn(), ...Ot(qa(), ["inline"]) }, "VCheckbox"), Fr = oe()({ name: "VCheckbox", inheritAttrs: !1, props: wr(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = Te(e, "modelValue"), { isFocused: i, focus: c, blur: s } = jn(e), u = ut(), a = v(() => e.id || `checkbox-${u}`);
  return ge(() => {
    const [p, f] = $n(t), y = wt.filterProps(e), g = sl.filterProps(e);
    return d(wt, ee({ class: ["v-checkbox", e.class] }, p, y, { modelValue: o.value, "onUpdate:modelValue": (b) => o.value = b, id: a.value, focused: i.value, style: e.style }), { ...l, default: (b) => {
      let { id: m, messagesId: h, isDisabled: I, isReadonly: F } = b;
      return d(sl, ee(g, { id: m.value, "aria-describedby": h.value, disabled: I.value, readonly: F.value }, f, { modelValue: o.value, "onUpdate:modelValue": (V) => o.value = V, onFocus: c, onBlur: s }), l);
    } });
  }), {};
} }), ei = Symbol.for("vuetify:v-chip-group"), Ar = H({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: dn }, ...Se(), ...xa({ selectedClass: "v-chip--selected" }), ...nt(), ...He(), ...Pt({ variant: "tonal" }) }, "VChipGroup");
oe()({ name: "VChipGroup", props: Ar(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Ze(e), { isSelected: o, select: i, next: c, prev: s, selected: u } = Fa(e, ei);
  return pn({ VChip: { color: ue(e, "color"), disabled: ue(e, "disabled"), filter: ue(e, "filter"), variant: ue(e, "variant") } }), ge(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var a;
    return [(a = t.default) == null ? void 0 : a.call(t, { isSelected: o, select: i, next: c, prev: s, selected: u.value })];
  } })), {};
} });
const Vr = H({ activeClass: String, appendAvatar: String, appendIcon: Ae, closable: Boolean, closeIcon: { type: Ae, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ae, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: pt(), onClickOnce: pt(), ...vn(), ...Se(), ...mt(), ...yn(), ...ka(), ...Ct(), ...yl(), ...En(), ...nt({ tag: "span" }), ...He(), ...Pt({ variant: "tonal" }) }, "VChip"), ti = oe()({ name: "VChip", directives: { Ripple: Rn }, props: Vr(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { t: i } = pl(), { borderClasses: c } = fn(e), { colorClasses: s, colorStyles: u, variantClasses: a } = Wn(e), { densityClasses: p } = bt(e), { elevationClasses: f } = mn(e), { roundedClasses: y } = It(e), { sizeClasses: g } = zn(e), { themeClasses: b } = Ze(e), m = Te(e, "modelValue"), h = wa(e, ei, !1), I = fl(e, t), F = v(() => e.link !== !1 && I.isLink.value), V = v(() => !e.disabled && e.link !== !1 && (!!h || e.link || I.isClickable.value)), N = v(() => ({ "aria-label": i(e.closeLabel), onClick(M) {
    M.stopPropagation(), m.value = !1, l("click:close", M);
  } }));
  function w(M) {
    var E;
    l("click", M), V.value && ((E = I.navigate) == null || E.call(I, M), h == null || h.toggle());
  }
  function L(M) {
    M.key !== "Enter" && M.key !== " " || (M.preventDefault(), w(M));
  }
  return () => {
    const M = I.isLink.value ? "a" : e.tag, E = !(!e.appendIcon && !e.appendAvatar), S = !(!E && !o.append), k = !(!o.close && !e.closable), C = !(!o.filter && !e.filter) && h, _ = !(!e.prependIcon && !e.prependAvatar), P = !(!_ && !o.prepend), G = !h || h.isSelected.value;
    return m.value && Xe(d(M, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": V.value, "v-chip--filter": C, "v-chip--pill": e.pill }, b.value, c.value, G ? s.value : void 0, p.value, f.value, y.value, g.value, a.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [G ? u.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: I.href.value, tabindex: V.value ? 0 : void 0, onClick: w, onKeydown: V.value && !F.value && L }, { default: () => {
      var $;
      return [Ln(V.value, "v-chip"), C && d(Qa, { key: "filter" }, { default: () => [Xe(d("div", { class: "v-chip__filter" }, [o.filter ? d(qe, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, o.filter) : d(Ve, { key: "filter-icon", icon: e.filterIcon }, null)]), [[cn, h.isSelected.value]])] }), P && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(qe, { key: "prepend-defaults", disabled: !_, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(we, null, [e.prependIcon && d(Ve, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(kt, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [(($ = o.default) == null ? void 0 : $.call(o, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), S && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(qe, { key: "append-defaults", disabled: !E, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(we, null, [e.appendIcon && d(Ve, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(kt, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), k && d("button", ee({ key: "close", class: "v-chip__close", type: "button" }, N.value), [o.close ? d(qe, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(Ve, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[ht("ripple"), V.value && e.ripple, null]]);
  };
} }), Ol = Symbol.for("vuetify:list");
function ni() {
  const e = Ie(Ol, { hasPrepend: ve(!1), updateHasPrepend: () => null }), n = { hasPrepend: ve(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return ot(Ol, n), e;
}
function li() {
  return Ie(Ol, null);
}
const _r = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    const i = /* @__PURE__ */ new Set();
    i.add(n);
    let c = o.get(n);
    for (; c != null; )
      i.add(c), c = o.get(c);
    return i;
  }
  return l.delete(n), l;
}, select: () => null }, oi = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    let i = o.get(n);
    for (l.add(n); i != null && i !== n; )
      l.add(i), i = o.get(i);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, Or = { open: oi.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (!t)
    return l;
  const i = [];
  let c = o.get(n);
  for (; c != null; )
    i.push(c), c = o.get(c);
  return new Set(i);
} }, Pl = (e) => {
  const n = { select: (t) => {
    let { id: l, value: o, selected: i } = t;
    if (l = Bt(l), e && !o) {
      const c = Array.from(i.entries()).reduce((s, u) => {
        let [a, p] = u;
        return p === "on" ? [...s, a] : s;
      }, []);
      if (c.length === 1 && c[0] === l)
        return i;
    }
    return i.set(l, o ? "on" : "off"), i;
  }, in: (t, l, o) => {
    let i = /* @__PURE__ */ new Map();
    for (const c of t || [])
      i = n.select({ id: c, value: !0, selected: new Map(i), children: l, parents: o });
    return i;
  }, out: (t) => {
    const l = [];
    for (const [o, i] of t.entries())
      i === "on" && l.push(o);
    return l;
  } };
  return n;
}, qo = (e) => {
  const n = Pl(e);
  return { select: (t) => {
    let { selected: l, id: o, ...i } = t;
    o = Bt(o);
    const c = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...i, id: o, selected: c });
  }, in: (t, l, o) => {
    let i = /* @__PURE__ */ new Map();
    return t != null && t.length && (i = n.in(t.slice(0, 1), l, o)), i;
  }, out: (t, l, o) => n.out(t, l, o) };
}, An = Symbol.for("vuetify:nested"), ai = { id: ve(), root: { register: () => null, unregister: () => null, parents: W(/* @__PURE__ */ new Map()), children: W(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: W(/* @__PURE__ */ new Set()), selected: W(/* @__PURE__ */ new Map()), selectedValues: W([]) } }, Pr = H({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), $r = (e) => {
  let n = !1;
  const t = W(/* @__PURE__ */ new Map()), l = W(/* @__PURE__ */ new Map()), o = Te(e, "opened", e.opened, (f) => new Set(f), (f) => [...f.values()]), i = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((f) => {
          const y = qo(f);
          return { select: (g) => {
            let { id: b, selected: m, children: h, ...I } = g;
            return b = Bt(b), h.has(b) ? m : y.select({ id: b, selected: m, children: h, ...I });
          }, in: y.in, out: y.out };
        })(e.mandatory);
      case "leaf":
        return ((f) => {
          const y = Pl(f);
          return { select: (g) => {
            let { id: b, selected: m, children: h, ...I } = g;
            return b = Bt(b), h.has(b) ? m : y.select({ id: b, selected: m, children: h, ...I });
          }, in: y.in, out: y.out };
        })(e.mandatory);
      case "independent":
        return Pl(e.mandatory);
      case "single-independent":
        return qo(e.mandatory);
      default:
        return /* @__PURE__ */ ((f) => {
          const y = { select: (g) => {
            let { id: b, value: m, selected: h, children: I, parents: F } = g;
            b = Bt(b);
            const V = new Map(h), N = [b];
            for (; N.length; ) {
              const L = N.shift();
              h.set(L, m ? "on" : "off"), I.has(L) && N.push(...I.get(L));
            }
            let w = F.get(b);
            for (; w; ) {
              const L = I.get(w), M = L.every((S) => h.get(S) === "on"), E = L.every((S) => !h.has(S) || h.get(S) === "off");
              h.set(w, M ? "on" : E ? "off" : "indeterminate"), w = F.get(w);
            }
            return f && !m && Array.from(h.entries()).reduce((M, E) => {
              let [S, k] = E;
              return k === "on" ? [...M, S] : M;
            }, []).length === 0 ? V : h;
          }, in: (g, b, m) => {
            let h = /* @__PURE__ */ new Map();
            for (const I of g || [])
              h = y.select({ id: I, value: !0, selected: new Map(h), children: b, parents: m });
            return h;
          }, out: (g, b) => {
            const m = [];
            for (const [h, I] of g.entries())
              I !== "on" || b.has(h) || m.push(h);
            return m;
          } };
          return y;
        })(e.mandatory);
    }
  }), c = v(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return Or;
      case "single":
        return _r;
      default:
        return oi;
    }
  }), s = Te(e, "selected", e.selected, (f) => i.value.in(f, t.value, l.value), (f) => i.value.out(f, t.value, l.value));
  function u(f) {
    const y = [];
    let g = f;
    for (; g != null; )
      y.unshift(g), g = l.value.get(g);
    return y;
  }
  ft(() => {
    n = !0;
  });
  const a = Ge("nested"), p = { id: ve(), root: { opened: o, selected: s, selectedValues: v(() => {
    const f = [];
    for (const [y, g] of s.value.entries())
      g === "on" && f.push(y);
    return f;
  }), register: (f, y, g) => {
    y && f !== y && l.value.set(f, y), g && t.value.set(f, []), y != null && t.value.set(y, [...t.value.get(y) || [], f]);
  }, unregister: (f) => {
    if (n)
      return;
    t.value.delete(f);
    const y = l.value.get(f);
    if (y) {
      const g = t.value.get(y) ?? [];
      t.value.set(y, g.filter((b) => b !== f));
    }
    l.value.delete(f), o.value.delete(f);
  }, open: (f, y, g) => {
    a.emit("click:open", { id: f, value: y, path: u(f), event: g });
    const b = c.value.open({ id: f, value: y, opened: new Set(o.value), children: t.value, parents: l.value, event: g });
    b && (o.value = b);
  }, openOnSelect: (f, y, g) => {
    const b = c.value.select({ id: f, value: y, selected: new Map(s.value), opened: new Set(o.value), children: t.value, parents: l.value, event: g });
    b && (o.value = b);
  }, select: (f, y, g) => {
    a.emit("click:select", { id: f, value: y, path: u(f), event: g });
    const b = i.value.select({ id: f, value: y, selected: new Map(s.value), children: t.value, parents: l.value, event: g });
    b && (s.value = b), p.root.openOnSelect(f, y, g);
  }, children: t, parents: l } };
  return ot(An, p), p.root;
}, ii = (e, n) => {
  const t = Ie(An, ai), l = Symbol(ut()), o = v(() => e.value !== void 0 ? e.value : l), i = { ...t, id: o, open: (c, s) => t.root.open(o.value, c, s), openOnSelect: (c, s) => t.root.openOnSelect(o.value, c, s), isOpen: v(() => t.root.opened.value.has(o.value)), parent: v(() => t.root.parents.value.get(o.value)), select: (c, s) => t.root.select(o.value, c, s), isSelected: v(() => t.root.selected.value.get(Bt(o.value)) === "on"), isIndeterminate: v(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: v(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, n), ft(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), n && ot(An, i), i;
}, Tr = kn({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = Ie(An, ai);
    ot(An, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), Er = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ae, default: "$collapse" }, expandIcon: { type: Ae, default: "$expand" }, prependIcon: Ae, appendIcon: Ae, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...Se(), ...nt() }, "VListGroup"), Ho = oe()({ name: "VListGroup", props: Er(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: o, id: i } = ii(ue(e, "value"), !0), c = v(() => `v-list-group--id-${String(i.value)}`), s = li(), { isBooted: u } = function() {
    const g = ve(!1);
    return un(() => {
      window.requestAnimationFrame(() => {
        g.value = !0;
      });
    }), { ssrBootStyles: v(() => g.value ? void 0 : { transition: "none !important" }), isBooted: Ml(g) };
  }();
  function a(g) {
    o(!l.value, g);
  }
  const p = v(() => ({ onClick: a, class: "v-list-group__header", id: c.value })), f = v(() => l.value ? e.collapseIcon : e.expandIcon), y = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && f.value, appendIcon: e.appendIcon || !e.subgroup && f.value, title: e.title, value: e.value } }));
  return ge(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": s == null ? void 0 : s.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && d(qe, { defaults: y.value }, { default: () => [d(Tr, null, { default: () => [t.activator({ props: p.value, isOpen: l.value })] })] }), d(St, { transition: { component: Ir }, disabled: !u.value }, { default: () => {
    var g;
    return [Xe(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(g = t.default) == null ? void 0 : g.call(t)]), [[cn, l.value]])];
  } })] })), {};
} }), zr = Tn("v-list-item-subtitle"), Dr = Tn("v-list-item-title"), Lr = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ae, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ae, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: pt(), onClickOnce: pt(), ...vn(), ...Se(), ...mt(), ...Xt(), ...yn(), ...Ct(), ...yl(), ...nt(), ...He(), ...Pt({ variant: "text" }) }, "VListItem"), sn = oe()({ name: "VListItem", directives: { Ripple: Rn }, props: Lr(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const i = fl(e, t), c = v(() => e.value === void 0 ? i.href.value : e.value), { select: s, isSelected: u, isIndeterminate: a, isGroupActivator: p, root: f, parent: y, openOnSelect: g } = ii(c, !1), b = li(), m = v(() => {
    var B;
    return e.active !== !1 && (e.active || ((B = i.isActive) == null ? void 0 : B.value) || u.value);
  }), h = v(() => e.link !== !1 && i.isLink.value), I = v(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!b)), F = v(() => e.rounded || e.nav), V = v(() => e.color ?? e.activeColor), N = v(() => ({ color: m.value ? V.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  Y(() => {
    var B;
    return (B = i.isActive) == null ? void 0 : B.value;
  }, (B) => {
    B && y.value != null && f.open(y.value, !0), B && g(B);
  }, { immediate: !0 });
  const { themeClasses: w } = Ze(e), { borderClasses: L } = fn(e), { colorClasses: M, colorStyles: E, variantClasses: S } = Wn(N), { densityClasses: k } = bt(e), { dimensionStyles: C } = Yt(e), { elevationClasses: _ } = mn(e), { roundedClasses: P } = It(F), G = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), $ = v(() => ({ isActive: m.value, select: s, isSelected: u.value, isIndeterminate: a.value }));
  function O(B) {
    var A;
    o("click", B), !p && I.value && ((A = i.navigate) == null || A.call(i, B), e.value != null && s(!u.value, B));
  }
  function T(B) {
    B.key !== "Enter" && B.key !== " " || (B.preventDefault(), O(B));
  }
  return ge(() => {
    const B = h.value ? "a" : e.tag, A = l.title || e.title != null, U = l.subtitle || e.subtitle != null, j = !(!e.appendAvatar && !e.appendIcon), X = !(!j && !l.append), q = !(!e.prependAvatar && !e.prependIcon), J = !(!q && !l.prepend);
    var R, z;
    return b == null || b.updateHasPrepend(J), e.activeColor && (R = "active-color", z = ["color", "base-color"], z = Array.isArray(z) ? z.slice(0, -1).map((D) => `'${D}'`).join(", ") + ` or '${z.at(-1)}'` : `'${z}'`, cl(`[Vuetify UPGRADE] '${R}' is deprecated, use ${z} instead.`)), Xe(d(B, { class: ["v-list-item", { "v-list-item--active": m.value, "v-list-item--disabled": e.disabled, "v-list-item--link": I.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !J && (b == null ? void 0 : b.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && m.value }, w.value, L.value, M.value, k.value, _.value, G.value, P.value, S.value, e.class], style: [E.value, C.value, e.style], href: i.href.value, tabindex: I.value ? b ? -2 : 0 : void 0, onClick: O, onKeydown: I.value && !h.value && T }, { default: () => {
      var D;
      return [Ln(I.value || m.value, "v-list-item"), J && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(qe, { key: "prepend-defaults", disabled: !q, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var x;
        return [(x = l.prepend) == null ? void 0 : x.call(l, $.value)];
      } }) : d(we, null, [e.prependAvatar && d(kt, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(Ve, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [A && d(Dr, { key: "title" }, { default: () => {
        var x;
        return [((x = l.title) == null ? void 0 : x.call(l, { title: e.title })) ?? e.title];
      } }), U && d(zr, { key: "subtitle" }, { default: () => {
        var x;
        return [((x = l.subtitle) == null ? void 0 : x.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (D = l.default) == null ? void 0 : D.call(l, $.value)]), X && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(qe, { key: "append-defaults", disabled: !j, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var x;
        return [(x = l.append) == null ? void 0 : x.call(l, $.value)];
      } }) : d(we, null, [e.appendIcon && d(Ve, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(kt, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[ht("ripple"), I.value && e.ripple]]);
  }), {};
} }), Wr = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...Se(), ...nt() }, "VListSubheader"), Mr = oe()({ name: "VListSubheader", props: Wr(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: o } = vt(ue(e, "color"));
  return ge(() => {
    const i = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = t.default) == null ? void 0 : c.call(t)) ?? e.title])];
    } });
  }), {};
} }), Rr = H({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...Se(), ...He() }, "VDivider"), Nr = oe()({ name: "VDivider", props: Rr(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = Ze(e), { textColorClasses: o, textColorStyles: i } = vt(ue(e, "color")), c = v(() => {
    const s = {};
    return e.length && (s[e.vertical ? "maxHeight" : "maxWidth"] = ce(e.length)), e.thickness && (s[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ce(e.thickness)), s;
  });
  return ge(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), jr = H({ items: Array, returnObject: Boolean }, "VListChildren"), ri = oe()({ name: "VListChildren", props: jr(), setup(e, n) {
  let { slots: t } = n;
  return ni(), () => {
    var l, o;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((i) => {
      var y, g;
      let { children: c, props: s, type: u, raw: a } = i;
      if (u === "divider")
        return ((y = t.divider) == null ? void 0 : y.call(t, { props: s })) ?? d(Nr, s, null);
      if (u === "subheader")
        return ((g = t.subheader) == null ? void 0 : g.call(t, { props: s })) ?? d(Mr, s, null);
      const p = { subtitle: t.subtitle ? (b) => {
        var m;
        return (m = t.subtitle) == null ? void 0 : m.call(t, { ...b, item: a });
      } : void 0, prepend: t.prepend ? (b) => {
        var m;
        return (m = t.prepend) == null ? void 0 : m.call(t, { ...b, item: a });
      } : void 0, append: t.append ? (b) => {
        var m;
        return (m = t.append) == null ? void 0 : m.call(t, { ...b, item: a });
      } : void 0, title: t.title ? (b) => {
        var m;
        return (m = t.title) == null ? void 0 : m.call(t, { ...b, item: a });
      } : void 0 }, f = Ho.filterProps(s);
      return c ? d(Ho, ee({ value: s == null ? void 0 : s.value }, f), { activator: (b) => {
        let { props: m } = b;
        const h = { ...s, ...m, value: e.returnObject ? a : s.value };
        return t.header ? t.header({ props: h }) : d(sn, h, p);
      }, default: () => d(ri, { items: c }, t) }) : t.item ? t.item({ props: s }) : d(sn, ee(s, { value: e.returnObject ? a : s.value }), p);
    }));
  };
} }), si = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: dn } }, "list-items");
function $l(e, n) {
  const t = dt(n, e.itemTitle, n), l = dt(n, e.itemValue, t), o = dt(n, e.itemChildren), i = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? Ot(n, ["children"]) : n : dt(n, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(o) ? ui(e, o) : void 0, raw: n };
}
function ui(e, n) {
  const t = [];
  for (const l of n)
    t.push($l(e, l));
  return t;
}
function ci(e) {
  const n = v(() => ui(e, e.items)), t = v(() => n.value.some((l) => l.value === null));
  return { items: n, transformIn: function(l) {
    return t.value || (l = l.filter((o) => o !== null)), l.map((o) => e.returnObject && typeof o == "string" ? $l(e, o) : n.value.find((i) => e.valueComparator(o, i.value)) || $l(e, o));
  }, transformOut: function(l) {
    return e.returnObject ? l.map((o) => {
      let { raw: i } = o;
      return i;
    }) : l.map((o) => {
      let { value: i } = o;
      return i;
    });
  } };
}
function Gr(e, n) {
  const t = dt(n, e.itemType, "item"), l = /* @__PURE__ */ function(s) {
    return typeof s == "string" || typeof s == "number" || typeof s == "boolean";
  }(n) ? n : dt(n, e.itemTitle), o = dt(n, e.itemValue, void 0), i = dt(n, e.itemChildren), c = { title: l, value: o, ...e.itemProps === !0 ? Ot(n, ["children"]) : dt(n, e.itemProps) };
  return { type: t, title: c.title, value: c.value, props: c, children: t === "item" && i ? di(e, i) : void 0, raw: n };
}
function di(e, n) {
  const t = [];
  for (const l of n)
    t.push(Gr(e, l));
  return t;
}
const Ur = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...Pr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...vn(), ...Se(), ...mt(), ...Xt(), ...yn(), itemType: { type: String, default: "type" }, ...si(), ...Ct(), ...nt(), ...He(), ...Pt({ variant: "text" }) }, "VList"), pi = oe()({ name: "VList", props: Ur(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(k) {
    return { items: v(() => di(k, k.items)) };
  }(e), { themeClasses: o } = Ze(e), { backgroundColorClasses: i, backgroundColorStyles: c } = rn(ue(e, "bgColor")), { borderClasses: s } = fn(e), { densityClasses: u } = bt(e), { dimensionStyles: a } = Yt(e), { elevationClasses: p } = mn(e), { roundedClasses: f } = It(e), { open: y, select: g } = $r(e), b = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), m = ue(e, "activeColor"), h = ue(e, "baseColor"), I = ue(e, "color");
  ni(), pn({ VListGroup: { activeColor: m, baseColor: h, color: I }, VListItem: { activeClass: ue(e, "activeClass"), activeColor: m, baseColor: h, color: I, density: ue(e, "density"), disabled: ue(e, "disabled"), lines: ue(e, "lines"), nav: ue(e, "nav"), slim: ue(e, "slim"), variant: ue(e, "variant") } });
  const F = ve(!1), V = W();
  function N(k) {
    F.value = !0;
  }
  function w(k) {
    F.value = !1;
  }
  function L(k) {
    var C;
    F.value || k.relatedTarget && ((C = V.value) != null && C.contains(k.relatedTarget)) || S();
  }
  function M(k) {
    if (V.value) {
      if (k.key === "ArrowDown")
        S("next");
      else if (k.key === "ArrowUp")
        S("prev");
      else if (k.key === "Home")
        S("first");
      else {
        if (k.key !== "End")
          return;
        S("last");
      }
      k.preventDefault();
    }
  }
  function E(k) {
    F.value = !0;
  }
  function S(k) {
    if (V.value)
      return tl(V.value, k);
  }
  return ge(() => d(e.tag, { ref: V, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav, "v-list--slim": e.slim }, o.value, i.value, s.value, u.value, p.value, b.value, f.value, e.class], style: [c.value, a.value, e.style], tabindex: e.disabled || F.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: N, onFocusout: w, onFocus: L, onKeydown: M, onMousedown: E }, { default: () => [d(ri, { items: l.value, returnObject: e.returnObject }, t)] })), { open: y, select: g, focus: S };
} });
function Il(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function Ko(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return Il({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return Il({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return Il({ x: n.width / 2, y: n.height / 2 }, n);
}
const vi = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(g) {
    for (; g; ) {
      if (window.getComputedStyle(g).position === "fixed")
        return !0;
      g = g.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = ql(() => {
    const g = Al(n.location, e.isRtl.value), b = n.origin === "overlap" ? g : n.origin === "auto" ? gl(g) : Al(n.origin, e.isRtl.value);
    return g.side === b.side && g.align === hl(b).align ? { preferredAnchor: Co(g), preferredOrigin: Co(b) } : { preferredAnchor: g, preferredOrigin: b };
  }), [i, c, s, u] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => v(() => {
    const b = parseFloat(n[g]);
    return isNaN(b) ? 1 / 0 : b;
  })), a = v(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const g = n.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let p = !1;
  const f = new ResizeObserver(() => {
    p && y();
  });
  function y() {
    if (p = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => p = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const g = ha(e.target.value), b = function(S, k) {
      k ? S.style.removeProperty("left") : S.style.removeProperty("right");
      const C = Kl(S);
      return k ? C.x += parseFloat(S.style.right || 0) : C.x -= parseFloat(S.style.left || 0), C.y -= parseFloat(S.style.top || 0), C;
    }(e.contentEl.value, e.isRtl.value), m = ol(e.contentEl.value);
    m.length || (m.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (b.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), b.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = m.reduce((S, k) => {
      const C = k.getBoundingClientRect(), _ = new Dt({ x: k === document.documentElement ? 0 : C.x, y: k === document.documentElement ? 0 : C.y, width: k.clientWidth, height: k.clientHeight });
      return S ? new Dt({ x: Math.max(S.left, _.left), y: Math.max(S.top, _.top), width: Math.min(S.right, _.right) - Math.max(S.left, _.left), height: Math.min(S.bottom, _.bottom) - Math.max(S.top, _.top) }) : _;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let I = { anchor: l.value, origin: o.value };
    function F(S) {
      const k = new Dt(b), C = Ko(S.anchor, g), _ = Ko(S.origin, k);
      let { x: P, y: G } = (O = _, { x: ($ = C).x - O.x, y: $.y - O.y });
      var $, O;
      switch (S.anchor.side) {
        case "top":
          G -= a.value[0];
          break;
        case "bottom":
          G += a.value[0];
          break;
        case "left":
          P -= a.value[0];
          break;
        case "right":
          P += a.value[0];
      }
      switch (S.anchor.align) {
        case "top":
          G -= a.value[1];
          break;
        case "bottom":
          G += a.value[1];
          break;
        case "left":
          P -= a.value[1];
          break;
        case "right":
          P += a.value[1];
      }
      return k.x += P, k.y += G, k.width = Math.min(k.width, s.value), k.height = Math.min(k.height, u.value), { overflows: So(k, h), x: P, y: G };
    }
    let V = 0, N = 0;
    const w = { x: 0, y: 0 }, L = { x: !1, y: !1 };
    let M = -1;
    for (; ; ) {
      if (M++ > 10) {
        cl("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: S, y: k, overflows: C } = F(I);
      V += S, N += k, b.x += S, b.y += k;
      {
        const _ = Io(I.anchor), P = C.x.before || C.x.after, G = C.y.before || C.y.after;
        let $ = !1;
        if (["x", "y"].forEach((O) => {
          if (O === "x" && P && !L.x || O === "y" && G && !L.y) {
            const T = { anchor: { ...I.anchor }, origin: { ...I.origin } }, B = O === "x" ? _ === "y" ? hl : gl : _ === "y" ? gl : hl;
            T.anchor = B(T.anchor), T.origin = B(T.origin);
            const { overflows: A } = F(T);
            (A[O].before <= C[O].before && A[O].after <= C[O].after || A[O].before + A[O].after < (C[O].before + C[O].after) / 2) && (I = T, $ = L[O] = !0);
          }
        }), $)
          continue;
      }
      C.x.before && (V += C.x.before, b.x += C.x.before), C.x.after && (V -= C.x.after, b.x -= C.x.after), C.y.before && (N += C.y.before, b.y += C.y.before), C.y.after && (N -= C.y.after, b.y -= C.y.after);
      {
        const _ = So(b, h);
        w.x = h.width - _.x.before - _.x.after, w.y = h.height - _.y.before - _.y.after, V += _.x.before, b.x += _.x.before, N += _.y.before, b.y += _.y.before;
      }
      break;
    }
    const E = Io(I.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`, transformOrigin: `${I.origin.side} ${I.origin.align}`, top: ce(Sl(N)), left: e.isRtl.value ? void 0 : ce(Sl(V)), right: e.isRtl.value ? ce(Sl(-V)) : void 0, minWidth: ce(E === "y" ? Math.min(i.value, g.width) : i.value), maxWidth: ce(Xo(on(w.x, i.value === 1 / 0 ? 0 : i.value, s.value))), maxHeight: ce(Xo(on(w.y, c.value === 1 / 0 ? 0 : c.value, u.value))) }), { available: w, contentBox: b };
  }
  return Y([e.target, e.contentEl], (g, b) => {
    let [m, h] = g, [I, F] = b;
    I && !Array.isArray(I) && f.unobserve(I), m && !Array.isArray(m) && f.observe(m), F && f.unobserve(F), h && f.observe(h);
  }, { immediate: !0 }), Je(() => {
    f.disconnect();
  }), Y(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => y()), Ne(() => {
    const g = y();
    if (!g)
      return;
    const { available: b, contentBox: m } = g;
    m.height > b.y && requestAnimationFrame(() => {
      y(), requestAnimationFrame(() => {
        y();
      });
    });
  }), { updateLocation: y };
} }, qr = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in vi }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Sl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Xo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Tl = !0;
const ul = [];
let Yo = -1;
function El() {
  cancelAnimationFrame(Yo), Yo = requestAnimationFrame(() => {
    const e = ul.shift();
    e && e(), ul.length ? El() : Tl = !0;
  });
}
const Qn = { none: null, close: function(e) {
  Jo(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var s;
  const t = (s = e.root.value) == null ? void 0 : s.offsetParent, l = [.../* @__PURE__ */ new Set([...ol(e.targetEl.value, n.contained ? t : void 0), ...ol(e.contentEl.value, n.contained ? t : void 0)])].filter((u) => !u.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, i = (c = t || document.documentElement, Yl(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((u, a) => {
    u.style.setProperty("--v-body-scroll-x", ce(-u.scrollLeft)), u.style.setProperty("--v-body-scroll-y", ce(-u.scrollTop)), u !== document.documentElement && u.style.setProperty("--v-scrollbar-offset", ce(o)), u.classList.add("v-overlay-scroll-blocked");
  }), Je(() => {
    l.forEach((u, a) => {
      const p = parseFloat(u.style.getPropertyValue("--v-body-scroll-x")), f = parseFloat(u.style.getPropertyValue("--v-body-scroll-y"));
      u.style.removeProperty("--v-body-scroll-x"), u.style.removeProperty("--v-body-scroll-y"), u.style.removeProperty("--v-scrollbar-offset"), u.classList.remove("v-overlay-scroll-blocked"), u.scrollLeft = -p, u.scrollTop = -f;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, o = -1, i = -1;
  function c(s) {
    var u;
    u = () => {
      var f, y;
      const a = performance.now();
      (y = (f = e.updateLocation).value) == null || y.call(f, s), l = (performance.now() - a) / (1e3 / 60) > 2;
    }, !Tl || ul.length ? (ul.push(u), El()) : (Tl = !1, u(), El());
  }
  i = (typeof requestIdleCallback > "u" ? (s) => s() : requestIdleCallback)(() => {
    t.run(() => {
      Jo(e.targetEl.value ?? e.contentEl.value, (s) => {
        l ? (cancelAnimationFrame(o), o = requestAnimationFrame(() => {
          o = requestAnimationFrame(() => {
            c(s);
          });
        })) : c(s);
      });
    });
  }), Je(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(o);
  });
} }, Hr = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Qn } }, "VOverlay-scroll-strategies");
function Jo(e, n) {
  const t = [document, ...ol(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), Je(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const zl = Symbol.for("vuetify:v-menu"), Kr = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay");
function Xr(e, n) {
  let t = () => {
  };
  function l(o) {
    t == null || t();
    const i = Number(o ? e.openDelay : e.closeDelay);
    return new Promise((c) => {
      t = function(s, u) {
        if (!Ke || s === 0)
          return u(), () => {
          };
        const a = window.setTimeout(u, s);
        return () => window.clearTimeout(a);
      }(i, () => {
        n == null || n(o), c(o);
      });
    });
  }
  return { clearDelay: t, runOpenDelay: function() {
    return l(!0);
  }, runCloseDelay: function() {
    return l(!1);
  } };
}
const Yr = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Kr() }, "VOverlay-activator");
function Jr(e, n) {
  let { isActive: t, isTop: l } = n;
  const o = Ge("useActivator"), i = W();
  let c = !1, s = !1, u = !0;
  const a = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), p = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !a.value), { runOpenDelay: f, runCloseDelay: y } = Xr(e, (C) => {
    C !== (e.openOnHover && c || a.value && s) || e.openOnHover && t.value && !l.value || (t.value !== C && (u = !0), t.value = C);
  }), g = W(), b = (C) => {
    C.stopPropagation(), i.value = C.currentTarget || C.target, t.value || (g.value = [C.clientX, C.clientY]), t.value = !t.value;
  }, m = (C) => {
    var _;
    (_ = C.sourceCapabilities) != null && _.firesTouchEvents || (c = !0, i.value = C.currentTarget || C.target, f());
  }, h = (C) => {
    c = !1, y();
  }, I = (C) => {
    an(C.target, ":focus-visible") !== !1 && (s = !0, C.stopPropagation(), i.value = C.currentTarget || C.target, f());
  }, F = (C) => {
    s = !1, C.stopPropagation(), y();
  }, V = v(() => {
    const C = {};
    return p.value && (C.onClick = b), e.openOnHover && (C.onMouseenter = m, C.onMouseleave = h), a.value && (C.onFocus = I, C.onBlur = F), C;
  }), N = v(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      c = !0, f();
    }, C.onMouseleave = () => {
      c = !1, y();
    }), a.value && (C.onFocusin = () => {
      s = !0, f();
    }, C.onFocusout = () => {
      s = !1, y();
    }), e.closeOnContentClick) {
      const _ = Ie(zl, null);
      C.onClick = () => {
        t.value = !1, _ == null || _.closeParents();
      };
    }
    return C;
  }), w = v(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      u && (c = !0, u = !1, f());
    }, C.onMouseleave = () => {
      c = !1, y();
    }), C;
  });
  Y(l, (C) => {
    !C || (!e.openOnHover || c || a.value && s) && (!a.value || s || e.openOnHover && c) || (t.value = !1);
  }), Y(t, (C) => {
    C || setTimeout(() => {
      g.value = void 0;
    });
  }, { flush: "post" });
  const L = W();
  ze(() => {
    L.value && Ne(() => {
      i.value = Zn(L.value);
    });
  });
  const M = W(), E = v(() => e.target === "cursor" && g.value ? g.value : M.value ? Zn(M.value) : Qo(e.target, o) || i.value), S = v(() => Array.isArray(E.value) ? void 0 : E.value);
  let k;
  return Y(() => !!e.activator, (C) => {
    C && Ke ? (k = Wl(), k.run(() => {
      (function(_, P, G) {
        let { activatorEl: $, activatorEvents: O } = G;
        function T() {
          let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : A(), j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          U && function(X, q) {
            Object.keys(q).forEach((J) => {
              if (wl(J)) {
                const R = go(J), z = qn.get(X);
                if (q[J] == null)
                  z == null || z.forEach((D) => {
                    const [x, K] = D;
                    x === R && (X.removeEventListener(R, K), z.delete(D));
                  });
                else if (!z || ![...z].some((D) => D[0] === R && D[1] === q[J])) {
                  X.addEventListener(R, q[J]);
                  const D = z || /* @__PURE__ */ new Set();
                  D.add([R, q[J]]), qn.has(X) || qn.set(X, D);
                }
              } else
                q[J] == null ? X.removeAttribute(J) : X.setAttribute(J, q[J]);
            });
          }(U, ee(O.value, j));
        }
        function B() {
          let U = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : A(), j = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _.activatorProps;
          U && function(X, q) {
            Object.keys(q).forEach((J) => {
              if (wl(J)) {
                const R = go(J), z = qn.get(X);
                z == null || z.forEach((D) => {
                  const [x, K] = D;
                  x === R && (X.removeEventListener(R, K), z.delete(D));
                });
              } else
                X.removeAttribute(J);
            });
          }(U, ee(O.value, j));
        }
        function A() {
          const U = Qo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _.activator, P);
          return $.value = (U == null ? void 0 : U.nodeType) === Node.ELEMENT_NODE ? U : void 0, $.value;
        }
        Y(() => _.activator, (U, j) => {
          if (j && U !== j) {
            const X = A(j);
            X && B(X);
          }
          U && Ne(() => T());
        }, { immediate: !0 }), Y(() => _.activatorProps, () => {
          T();
        }), Je(() => {
          B();
        });
      })(e, o, { activatorEl: i, activatorEvents: V });
    })) : k && k.stop();
  }, { flush: "post", immediate: !0 }), Je(() => {
    k == null || k.stop();
  }), { activatorEl: i, activatorRef: L, target: E, targetEl: S, targetRef: M, activatorEvents: V, contentEvents: N, scrimEvents: w };
}
function Qo(e, n) {
  var l, o;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let i = (o = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : o.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else
    t = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return t;
}
const Qr = Symbol.for("vuetify:display");
function fi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : yt();
  const t = Ie(Qr);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = v(() => {
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), o = v(() => n ? { [`${n}--mobile`]: l.value } : {});
  return { ...t, displayClasses: o, mobile: l };
}
const Zr = H({ eager: Boolean }, "lazy");
function yi() {
  const e = Ge("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Zo = Symbol.for("vuetify:stack"), In = Qe([]);
function es() {
  return !0;
}
function ea(e, n, t) {
  if (!e || mi(e, t) === !1)
    return !1;
  const l = Ca(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(n), !o.some((i) => i == null ? void 0 : i.contains(e.target));
}
function mi(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || es)(e);
}
function ta(e, n) {
  const t = Ca(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const ts = { mounted(e, n) {
  const t = (o) => function(i, c, s) {
    const u = typeof s.value == "function" ? s.value : s.value.handler;
    c._clickOutside.lastMousedownWasOutside && ea(i, c, s) && setTimeout(() => {
      mi(i, s) && u && u(i);
    }, 0);
  }(o, e, n), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = ea(o, e, n);
  };
  ta(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (ta(e, (t) => {
    var i;
    if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function ns(e) {
  const { modelValue: n, color: t, ...l } = e;
  return d(Wt, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", ee({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const gi = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Yr(), ...Se(), ...Xt(), ...Zr(), ...qr(), ...Hr(), ...He(), ...hn() }, "VOverlay"), na = oe()({ name: "VOverlay", directives: { ClickOutside: ts }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...gi() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var q, J;
  let { slots: t, attrs: l, emit: o } = n;
  const i = Te(e, "modelValue"), c = v({ get: () => i.value, set: (R) => {
    R && e.disabled || (i.value = R);
  } }), { teleportTarget: s } = function(R) {
    return { teleportTarget: v(() => {
      const z = R.value;
      if (z === !0 || !Ke)
        return;
      const D = z === !1 ? document.body : typeof z == "string" ? document.querySelector(z) : z;
      if (D == null)
        return void cl(`Unable to locate target ${z}`);
      let x = D.querySelector(":scope > .v-overlay-container");
      return x || (x = document.createElement("div"), x.className = "v-overlay-container", D.appendChild(x)), x;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: u } = Ze(e), { rtlClasses: a, isRtl: p } = Mn(), { hasContent: f, onAfterLeave: y } = function(R, z) {
    const D = ve(!1), x = v(() => D.value || R.eager || z.value);
    return Y(z, () => D.value = !0), { isBooted: D, hasContent: x, onAfterLeave: function() {
      R.eager || (D.value = !1);
    } };
  }(e, c), g = rn(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: b, localTop: m, stackStyles: h } = function(R, z, D) {
    const x = Ge("useStack"), K = !D, te = Ie(Zo, void 0), re = Qe({ activeChildren: /* @__PURE__ */ new Set() });
    ot(Zo, re);
    const Q = ve(+z.value);
    Lt(R, () => {
      var ae;
      const he = (ae = In.at(-1)) == null ? void 0 : ae[1];
      Q.value = he ? he + 10 : +z.value, K && In.push([x.uid, Q.value]), te == null || te.activeChildren.add(x.uid), Je(() => {
        if (K) {
          const Be = Bt(In).findIndex((xe) => xe[0] === x.uid);
          In.splice(Be, 1);
        }
        te == null || te.activeChildren.delete(x.uid);
      });
    });
    const pe = ve(!0);
    K && ze(() => {
      var ae;
      const he = ((ae = In.at(-1)) == null ? void 0 : ae[0]) === x.uid;
      setTimeout(() => pe.value = he);
    });
    const de = v(() => !re.activeChildren.size);
    return { globalTop: Ml(pe), localTop: de, stackStyles: v(() => ({ zIndex: Q.value })) };
  }(c, ue(e, "zIndex"), e._disableGlobalStack), { activatorEl: I, activatorRef: F, target: V, targetEl: N, targetRef: w, activatorEvents: L, contentEvents: M, scrimEvents: E } = Jr(e, { isActive: c, isTop: m }), { dimensionStyles: S } = Yt(e), k = function() {
    if (!Ke)
      return ve(!1);
    const { ssr: R } = fi();
    if (R) {
      const z = ve(!1);
      return un(() => {
        z.value = !0;
      }), z;
    }
    return ve(!0);
  }(), { scopeId: C } = yi();
  Y(() => e.disabled, (R) => {
    R && (c.value = !1);
  });
  const _ = W(), P = W(), { contentStyles: G, updateLocation: $ } = function(R, z) {
    const D = W({}), x = W();
    function K(te) {
      var re;
      (re = x.value) == null || re.call(x, te);
    }
    return Ke && Lt(() => !(!z.isActive.value || !R.locationStrategy), (te) => {
      var re, Q;
      Y(() => R.locationStrategy, te), Je(() => {
        window.removeEventListener("resize", K), x.value = void 0;
      }), window.addEventListener("resize", K, { passive: !0 }), typeof R.locationStrategy == "function" ? x.value = (re = R.locationStrategy(z, R, D)) == null ? void 0 : re.updateLocation : x.value = (Q = vi[R.locationStrategy](z, R, D)) == null ? void 0 : Q.updateLocation;
    }), { contentStyles: D, updateLocation: x };
  }(e, { isRtl: p, contentEl: P, target: V, isActive: c });
  function O(R) {
    o("click:outside", R), e.persistent ? j() : c.value = !1;
  }
  function T() {
    return c.value && b.value;
  }
  function B(R) {
    var z, D;
    R.key === "Escape" && b.value && (e.persistent ? j() : (c.value = !1, (z = P.value) != null && z.contains(document.activeElement) && ((D = I.value) == null || D.focus())));
  }
  (function(R, z) {
    if (!Ke)
      return;
    let D;
    ze(async () => {
      D == null || D.stop(), z.isActive.value && R.scrollStrategy && (D = Wl(), await Ne(), D.active && D.run(() => {
        var x;
        typeof R.scrollStrategy == "function" ? R.scrollStrategy(z, R, D) : (x = Qn[R.scrollStrategy]) == null || x.call(Qn, z, R, D);
      }));
    }), Je(() => {
      D == null || D.stop();
    });
  })(e, { root: _, contentEl: P, targetEl: N, isActive: c, updateLocation: $ }), Ke && Y(c, (R) => {
    R ? window.addEventListener("keydown", B) : window.removeEventListener("keydown", B);
  }, { immediate: !0 }), ft(() => {
    Ke && window.removeEventListener("keydown", B);
  });
  const A = (J = (q = Ge("useRouter")) == null ? void 0 : q.proxy) == null ? void 0 : J.$router;
  Lt(() => e.closeOnBack, () => {
    (function(R, z) {
      let D, x, K = !1;
      function te(re) {
        var Q;
        (Q = re.state) != null && Q.replaced || (K = !0, setTimeout(() => K = !1));
      }
      Ke && (Ne(() => {
        window.addEventListener("popstate", te), D = R == null ? void 0 : R.beforeEach((re, Q, pe) => {
          Cl ? K ? z(pe) : pe() : setTimeout(() => K ? z(pe) : pe()), Cl = !0;
        }), x = R == null ? void 0 : R.afterEach(() => {
          Cl = !1;
        });
      }), Je(() => {
        window.removeEventListener("popstate", te), D == null || D(), x == null || x();
      }));
    })(A, (R) => {
      b.value && c.value ? (R(!1), e.persistent ? j() : c.value = !1) : R();
    });
  });
  const U = W();
  function j() {
    e.noClickAnimation || P.value && ln(P.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: ll });
  }
  function X() {
    y(), o("afterLeave");
  }
  return Y(() => c.value && (e.absolute || e.contained) && s.value == null, (R) => {
    if (R) {
      const z = Sa(_.value);
      z && z !== document.scrollingElement && (U.value = z.scrollTop);
    }
  }), ge(() => {
    var R;
    return d(we, null, [(R = t.activator) == null ? void 0 : R.call(t, { isActive: c.value, props: ee({ ref: F, targetRef: w }, L.value, e.activatorProps) }), !e.disabled && k.value && f.value && d(Vt, { disabled: !s.value, to: s.value }, { default: () => [d("div", ee({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, u.value, a.value, e.class], style: [h.value, { top: ce(U.value) }, e.style], ref: _ }, C, l), [d(ns, ee({ color: g, modelValue: !!e.scrim && c.value }, E.value), null), d(St, { appear: !0, persisted: !0, transition: e.transition, target: V.value, onAfterLeave: X }, { default: () => {
      var z;
      return [Xe(d("div", ee({ ref: P, class: ["v-overlay__content", e.contentClass], style: [S.value, G.value] }, M.value, e.contentProps), [(z = t.default) == null ? void 0 : z.call(t, { isActive: c })]), [[cn, c.value], [ht("click-outside"), { handler: O, closeConditional: T, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, target: V, animateClick: j, contentEl: P, globalTop: b, localTop: m, updateLocation: $ };
} }), Bl = Symbol("Forwarded refs");
function xl(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function Un(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[Bl] = t, new Proxy(e, { get(o, i) {
    if (Reflect.has(o, i))
      return Reflect.get(o, i);
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const c of t)
        if (c.value && Reflect.has(c.value, i)) {
          const s = Reflect.get(c.value, i);
          return typeof s == "function" ? s.bind(c.value) : s;
        }
    }
  }, has(o, i) {
    if (Reflect.has(o, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const c of t)
      if (c.value && Reflect.has(c.value, i))
        return !0;
    return !1;
  }, set(o, i, c) {
    if (Reflect.has(o, i))
      return Reflect.set(o, i, c);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const s of t)
      if (s.value && Reflect.has(s.value, i))
        return Reflect.set(s.value, i, c);
    return !1;
  }, getOwnPropertyDescriptor(o, i) {
    var s;
    const c = Reflect.getOwnPropertyDescriptor(o, i);
    if (c)
      return c;
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const u of t) {
        if (!u.value)
          continue;
        const a = xl(u.value, i) ?? ("_" in u.value ? xl((s = u.value._) == null ? void 0 : s.setupState, i) : void 0);
        if (a)
          return a;
      }
      for (const u of t) {
        const a = u.value && u.value[Bl];
        if (!a)
          continue;
        const p = a.slice();
        for (; p.length; ) {
          const f = p.shift(), y = xl(f.value, i);
          if (y)
            return y;
          const g = f.value && f.value[Bl];
          g && p.push(...g);
        }
      }
    }
  } });
}
const ls = H({ id: String, ...Ot(gi({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Ya } }), ["absolute"]) }, "VMenu"), hi = oe()({ name: "VMenu", props: ls(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = Te(e, "modelValue"), { scopeId: o } = yi(), i = ut(), c = v(() => e.id || `v-menu-${i}`), s = W(), u = Ie(zl, null), a = ve(0);
  async function p(m) {
    var F, V, N;
    const h = m.relatedTarget, I = m.target;
    await Ne(), l.value && h !== I && ((F = s.value) != null && F.contentEl) && ((V = s.value) != null && V.globalTop) && ![document, s.value.contentEl].includes(I) && !s.value.contentEl.contains(I) && ((N = Fl(s.value.contentEl)[0]) == null || N.focus());
  }
  function f() {
    u == null || u.closeParents();
  }
  function y(m) {
    var h, I, F;
    !e.disabled && m.key === "Tab" && (ma(Fl((h = s.value) == null ? void 0 : h.contentEl, !1), m.shiftKey ? "prev" : "next", (V) => V.tabIndex >= 0) || (l.value = !1, (F = (I = s.value) == null ? void 0 : I.activatorEl) == null || F.focus()));
  }
  function g(m) {
    var I;
    if (e.disabled)
      return;
    const h = (I = s.value) == null ? void 0 : I.contentEl;
    h && l.value ? m.key === "ArrowDown" ? (m.preventDefault(), tl(h, "next")) : m.key === "ArrowUp" && (m.preventDefault(), tl(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(m.key) && (l.value = !0, m.preventDefault(), setTimeout(() => setTimeout(() => g(m))));
  }
  ot(zl, { register() {
    ++a.value;
  }, unregister() {
    --a.value;
  }, closeParents() {
    setTimeout(() => {
      a.value || (l.value = !1, u == null || u.closeParents());
    }, 40);
  } }), Y(l, (m) => {
    m ? (u == null || u.register(), document.addEventListener("focusin", p, { once: !0 })) : (u == null || u.unregister(), document.removeEventListener("focusin", p));
  });
  const b = v(() => ee({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: g }, e.activatorProps));
  return ge(() => {
    const m = na.filterProps(e);
    return d(na, ee({ ref: s, class: ["v-menu", e.class], style: e.style }, m, { modelValue: l.value, "onUpdate:modelValue": (h) => l.value = h, absolute: !0, activatorProps: b.value, "onClick:outside": f, onKeydown: y }, o), { activator: t.activator, default: function() {
      for (var h = arguments.length, I = new Array(h), F = 0; F < h; F++)
        I[F] = arguments[F];
      return d(qe, { root: "VMenu" }, { default: () => {
        var V;
        return [(V = t.default) == null ? void 0 : V.call(t, ...I)];
      } });
    } });
  }), Un({ id: c, ΨopenChildren: a }, s);
} }), os = H({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...Se(), ...hn({ transition: { component: Ja } }) }, "VCounter"), bi = oe()({ name: "VCounter", functional: !0, props: os(), setup(e, n) {
  let { slots: t } = n;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return ge(() => d(St, { transition: e.transition }, { default: () => [Xe(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[cn, e.active]])] })), {};
} }), as = H({ floating: Boolean, ...Se() }, "VFieldLabel"), Xn = oe()({ name: "VFieldLabel", props: as(), setup(e, n) {
  let { slots: t } = n;
  return ge(() => d(ja, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), is = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ro = H({ appendInnerIcon: Ae, bgColor: String, clearable: Boolean, clearIcon: { type: Ae, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: Ae, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => is.includes(e) }, "onClick:clear": pt(), "onClick:appendInner": pt(), "onClick:prependInner": pt(), ...Se(), ...to(), ...Ct(), ...He() }, "VField"), so = oe()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Za(), ...ro() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { themeClasses: i } = Ze(e), { loaderClasses: c } = vl(e), { focusClasses: s, isFocused: u, focus: a, blur: p } = jn(e), { InputIcon: f } = Ha(e), { roundedClasses: y } = It(e), { rtlClasses: g } = Mn(), b = v(() => e.dirty || e.active), m = v(() => !(e.singleLine || !e.label && !o.label)), h = ut(), I = v(() => e.id || `input-${h}`), F = v(() => `${I.value}-messages`), V = W(), N = W(), w = W(), L = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: M, backgroundColorStyles: E } = rn(ue(e, "bgColor")), { textColorClasses: S, textColorStyles: k } = vt(v(() => e.error || e.disabled ? void 0 : b.value && u.value ? e.color : e.baseColor));
  Y(b, (P) => {
    if (m.value) {
      const G = V.value.$el, $ = N.value.$el;
      requestAnimationFrame(() => {
        const O = Kl(G), T = $.getBoundingClientRect(), B = T.x - O.x, A = T.y - O.y - (O.height / 2 - T.height / 2), U = T.width / 0.75, j = Math.abs(U - O.width) > 1 ? { maxWidth: ce(U) } : void 0, X = getComputedStyle(G), q = getComputedStyle($), J = 1e3 * parseFloat(X.transitionDuration) || 150, R = parseFloat(q.getPropertyValue("--v-field-label-scale")), z = q.getPropertyValue("color");
        G.style.visibility = "visible", $.style.visibility = "hidden", ln(G, { transform: `translate(${B}px, ${A}px) scale(${R})`, color: z, ...j }, { duration: J, easing: ll, direction: P ? "normal" : "reverse" }).finished.then(() => {
          G.style.removeProperty("visibility"), $.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const C = v(() => ({ isActive: b, isFocused: u, controlRef: w, blur: p, focus: a }));
  function _(P) {
    P.target !== document.activeElement && P.preventDefault();
  }
  return ge(() => {
    var B, A, U;
    const P = e.variant === "outlined", G = o["prepend-inner"] || e.prependInnerIcon, $ = !(!e.clearable && !o.clear), O = !!(o["append-inner"] || e.appendInnerIcon || $), T = () => o.label ? o.label({ ...C.value, label: e.label, props: { for: I.value } }) : e.label;
    return d("div", ee({ class: ["v-field", { "v-field--active": b.value, "v-field--appended": O, "v-field--center-affix": e.centerAffix ?? !L.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": G, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !T(), [`v-field--variant-${e.variant}`]: !0 }, i.value, M.value, s.value, c.value, y.value, g.value, e.class], style: [E.value, e.style], onClick: _ }, t), [d("div", { class: "v-field__overlay" }, null), d(no, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), G && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(f, { key: "prepend-icon", name: "prependInner" }, null), (B = o["prepend-inner"]) == null ? void 0 : B.call(o, C.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && m.value && d(Xn, { key: "floating-label", ref: N, class: [S.value], floating: !0, for: I.value, style: k.value }, { default: () => [T()] }), d(Xn, { ref: V, for: I.value }, { default: () => [T()] }), (A = o.default) == null ? void 0 : A.call(o, { ...C.value, props: { id: I.value, class: "v-field__input", "aria-describedby": F.value }, focus: a, blur: p })]), $ && d(Qa, { key: "clear" }, { default: () => [Xe(d("div", { class: "v-field__clearable", onMousedown: (j) => {
      j.preventDefault(), j.stopPropagation();
    } }, [o.clear ? o.clear() : d(f, { name: "clear" }, null)]), [[cn, e.dirty]])] }), O && d("div", { key: "append", class: "v-field__append-inner" }, [(U = o["append-inner"]) == null ? void 0 : U.call(o, C.value), e.appendInnerIcon && d(f, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", S.value], style: k.value }, [P && d(we, null, [d("div", { class: "v-field__outline__start" }, null), m.value && d("div", { class: "v-field__outline__notch" }, [d(Xn, { ref: N, floating: !0, for: I.value }, { default: () => [T()] })]), d("div", { class: "v-field__outline__end" }, null)]), L.value && m.value && d(Xn, { ref: N, floating: !0, for: I.value }, { default: () => [T()] })])]);
  }), { controlRef: w };
} });
function Ci(e) {
  return pa(e, Object.keys(so.props).filter((n) => !wl(n) && n !== "class" && n !== "style"));
}
const rs = ["color", "file", "time", "date", "datetime-local", "week", "month"], uo = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Gn(), ...ro() }, "VTextField"), Vn = oe()({ name: "VTextField", directives: { Intersect: oo }, inheritAttrs: !1, props: uo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const i = Te(e, "modelValue"), { isFocused: c, focus: s, blur: u } = jn(e), a = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), p = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), f = v(() => ["plain", "underlined"].includes(e.variant));
  function y(L, M) {
    var E, S;
    e.autofocus && L && ((S = (E = M[0].target) == null ? void 0 : E.focus) == null || S.call(E));
  }
  const g = W(), b = W(), m = W(), h = v(() => rs.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function I() {
    var L;
    m.value !== document.activeElement && ((L = m.value) == null || L.focus()), c.value || s();
  }
  function F(L) {
    l("mousedown:control", L), L.target !== m.value && (I(), L.preventDefault());
  }
  function V(L) {
    I(), l("click:control", L);
  }
  function N(L) {
    L.stopPropagation(), I(), Ne(() => {
      i.value = null, ya(e["onClick:clear"], L);
    });
  }
  function w(L) {
    var E;
    const M = L.target;
    if (i.value = M.value, ((E = e.modelModifiers) == null ? void 0 : E.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const S = [M.selectionStart, M.selectionEnd];
      Ne(() => {
        M.selectionStart = S[0], M.selectionEnd = S[1];
      });
    }
  }
  return ge(() => {
    const L = !!(o.counter || e.counter !== !1 && e.counter != null), M = !(!L && !o.details), [E, S] = $n(t), { modelValue: k, ...C } = wt.filterProps(e), _ = Ci(e);
    return d(wt, ee({ ref: g, modelValue: i.value, "onUpdate:modelValue": (P) => i.value = P, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": f.value }, e.class], style: e.style }, E, C, { centerAffix: !f.value, focused: c.value }), { ...o, default: (P) => {
      let { id: G, isDisabled: $, isDirty: O, isReadonly: T, isValid: B } = P;
      return d(so, ee({ ref: b, onMousedown: F, onClick: V, "onClick:clear": N, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, _, { id: G.value, active: h.value || O.value, dirty: O.value || e.dirty, disabled: $.value, focused: c.value, error: B.value === !1 }), { ...o, default: (A) => {
        let { props: { class: U, ...j } } = A;
        const X = Xe(d("input", ee({ ref: m, value: i.value, onInput: w, autofocus: e.autofocus, readonly: T.value, disabled: $.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: I, onBlur: u }, j, S), null), [[ht("intersect"), { handler: y }, null, { once: !0 }]]);
        return d(we, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? d("div", { class: U, "data-no-activator": "" }, [o.default(), X]) : Pi(X, { class: U }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: M ? (P) => {
      var G;
      return d(we, null, [(G = o.details) == null ? void 0 : G.call(o, P), L && d(we, null, [d("span", null, null), d(bi, { active: e.persistentCounter || c.value, value: a.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), Un({}, g, b, m);
} }), ss = H({ renderless: Boolean, ...Se() }, "VVirtualScrollItem"), us = oe()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: ss(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { resizeRef: i, contentRect: c } = Ql(void 0, "border");
  Y(() => {
    var s;
    return (s = c.value) == null ? void 0 : s.height;
  }, (s) => {
    s != null && l("update:height", s);
  }), ge(() => {
    var s, u;
    return e.renderless ? d(we, null, [(s = o.default) == null ? void 0 : s.call(o, { itemRef: i })]) : d("div", ee({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(u = o.default) == null ? void 0 : u.call(o)]);
  });
} }), cs = H({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function ds(e, n) {
  const t = fi(), l = ve(0);
  ze(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const o = ve(0), i = ve(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), c = ve(0), s = ve(0), u = W(), a = W();
  let p = 0;
  const { resizeRef: f, contentRect: y } = Ql();
  ze(() => {
    f.value = u.value;
  });
  const g = v(() => {
    var $;
    return u.value === document.documentElement ? t.height.value : (($ = y.value) == null ? void 0 : $.height) || parseInt(e.height) || 0;
  }), b = v(() => !!(u.value && a.value && g.value && l.value));
  let m = Array.from({ length: n.value.length }), h = Array.from({ length: n.value.length });
  const I = ve(0);
  let F = -1;
  const V = function($, O) {
    let T = 0;
    const B = function() {
      for (var A = arguments.length, U = new Array(A), j = 0; j < A; j++)
        U[j] = arguments[j];
      clearTimeout(T), T = setTimeout(() => $(...U), r(O));
    };
    return B.clear = () => {
      clearTimeout(T);
    }, B.immediate = $, B;
  }(() => {
    const $ = performance.now();
    h[0] = 0;
    const O = n.value.length;
    for (let T = 1; T <= O - 1; T++)
      h[T] = (h[T - 1] || 0) + (m[T - 1] || l.value);
    I.value = Math.max(I.value, performance.now() - $);
  }, I), N = Y(b, ($) => {
    $ && (N(), p = a.value.offsetTop, V.immediate(), C(), ~F && Ne(() => {
      Ke && window.requestAnimationFrame(() => {
        P(F), F = -1;
      });
    }));
  });
  function w($) {
    return $ = on($, 0, n.value.length - 1), h[$] || 0;
  }
  function L($) {
    return function(O, T) {
      let B = O.length - 1, A = 0, U = 0, j = null, X = -1;
      if (O[B] < T)
        return B;
      for (; A <= B; )
        if (U = A + B >> 1, j = O[U], j > T)
          B = U - 1;
        else {
          if (!(j < T))
            return j === T ? U : A;
          X = U, A = U + 1;
        }
      return X;
    }(h, $);
  }
  Y(g, ($, O) => {
    O && C();
  }), Je(() => {
    V.clear();
  });
  let M = 0, E = 0, S = 0, k = -1;
  function C() {
    cancelAnimationFrame(k), k = requestAnimationFrame(_);
  }
  function _() {
    if (!u.value || !g.value)
      return;
    const $ = M - p, O = Math.sign(E), T = on(L(Math.max(0, $ - 100)), 0, n.value.length), B = on(L($ + g.value + 100) + 1, T + 1, n.value.length);
    if ((O !== -1 || T < o.value) && (O !== 1 || B > i.value)) {
      const A = w(o.value) - w(T), U = w(B) - w(i.value);
      Math.max(A, U) > 100 ? (o.value = T, i.value = B) : (T <= 0 && (o.value = T), B >= n.value.length && (i.value = B));
    }
    c.value = w(o.value), s.value = w(n.value.length) - w(i.value);
  }
  function P($) {
    const O = w($);
    !u.value || $ && !O ? F = $ : u.value.scrollTop = O;
  }
  const G = v(() => n.value.slice(o.value, i.value).map(($, O) => ({ raw: $, index: O + o.value })));
  return Y(n, () => {
    m = Array.from({ length: n.value.length }), h = Array.from({ length: n.value.length }), V.immediate(), C();
  }, { deep: !0 }), { containerRef: u, markerRef: a, computedItems: G, paddingTop: c, paddingBottom: s, scrollToIndex: P, handleScroll: function() {
    if (!u.value || !a.value)
      return;
    const $ = u.value.scrollTop, O = performance.now();
    O - S > 500 ? (E = Math.sign($ - M), p = a.value.offsetTop) : E = $ - M, M = $, S = O, C();
  }, handleScrollend: function() {
    u.value && a.value && (E = 0, S = 0, C());
  }, handleItemResize: function($, O) {
    const T = m[$], B = l.value;
    l.value = B ? Math.min(l.value, O) : O, T === O && B === l.value || (m[$] = O, V());
  } };
}
const ps = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...cs(), ...Se(), ...Xt() }, "VVirtualScroll"), Ii = oe()({ name: "VVirtualScroll", props: ps(), setup(e, n) {
  let { slots: t } = n;
  const l = Ge("VVirtualScroll"), { dimensionStyles: o } = Yt(e), { containerRef: i, markerRef: c, handleScroll: s, handleScrollend: u, handleItemResize: a, scrollToIndex: p, paddingTop: f, paddingBottom: y, computedItems: g } = ds(e, ue(e, "items"));
  return Lt(() => e.renderless, () => {
    function b() {
      var h, I;
      const m = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[m]("scroll", s, { passive: !0 }), document[m]("scrollend", u)) : ((h = i.value) == null || h[m]("scroll", s, { passive: !0 }), (I = i.value) == null || I[m]("scrollend", u));
    }
    un(() => {
      i.value = Sa(l.vnode.el, !0), b(!0);
    }), Je(b);
  }), ge(() => {
    const b = g.value.map((m) => d(us, { key: m.index, renderless: e.renderless, "onUpdate:height": (h) => a(m.index, h) }, { default: (h) => {
      var I;
      return (I = t.default) == null ? void 0 : I.call(t, { item: m.raw, index: m.index, ...h });
    } }));
    return e.renderless ? d(we, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: ce(f.value) } }, null), b, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ce(y.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: s, onScrollend: u, style: [o.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: ce(f.value), paddingBottom: ce(y.value) } }, [b])]);
  }), { scrollToIndex: p };
} });
function Si(e, n) {
  const t = ve(!1);
  let l;
  return { onListScroll: function(o) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var s, u;
    if (o.key === "Tab" && ((s = n.value) == null || s.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const i = (u = e.value) == null ? void 0 : u.$el;
    if (!i)
      return;
    o.key !== "Home" && o.key !== "End" || i.scrollTo({ top: o.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((a) => requestAnimationFrame(a)), await new Promise((a) => requestAnimationFrame(a)), await new Promise((a) => requestAnimationFrame(a)), await new Promise((a) => {
        if (t.value) {
          const p = Y(t, () => {
            p(), a();
          });
        } else
          a();
      });
    }();
    const c = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (o.key === "PageDown" || o.key === "Home") {
      const a = i.getBoundingClientRect().top;
      for (const p of c)
        if (p.getBoundingClientRect().top >= a) {
          p.focus();
          break;
        }
    } else {
      const a = i.getBoundingClientRect().bottom;
      for (const p of [...c].reverse())
        if (p.getBoundingClientRect().bottom <= a) {
          p.focus();
          break;
        }
    }
  } };
}
const Bi = H({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: Ae, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...si({ itemChildren: !1 }) }, "Select"), vs = H({ ...Bi(), ...Ot(uo({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...hn({ transition: { component: Ya } }) }, "VSelect"), fs = oe()({ name: "VSelect", props: vs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = pl(), o = W(), i = W(), c = W(), s = Te(e, "menu"), u = v({ get: () => s.value, set: (B) => {
    var A;
    s.value && !B && ((A = i.value) != null && A.ΨopenChildren) || (s.value = B);
  } }), { items: a, transformIn: p, transformOut: f } = ci(e), y = Te(e, "modelValue", [], (B) => p(B === null ? [null] : lt(B)), (B) => {
    const A = f(B);
    return e.multiple ? A : A[0] ?? null;
  }), g = v(() => typeof e.counterValue == "function" ? e.counterValue(y.value) : typeof e.counterValue == "number" ? e.counterValue : y.value.length), b = io(), m = v(() => y.value.map((B) => B.value)), h = ve(!1), I = v(() => u.value ? e.closeText : e.openText);
  let F, V = "";
  const N = v(() => e.hideSelected ? a.value.filter((B) => !y.value.some((A) => A === B)) : a.value), w = v(() => e.hideNoData && !N.value.length || e.readonly || (b == null ? void 0 : b.isReadonly.value)), L = v(() => {
    var B;
    return { ...e.menuProps, activatorProps: { ...((B = e.menuProps) == null ? void 0 : B.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), M = W(), { onListScroll: E, onListKeydown: S } = Si(M, o);
  function k(B) {
    e.openOnClear && (u.value = !0);
  }
  function C() {
    w.value || (u.value = !u.value);
  }
  function _(B) {
    var j, X;
    if (!B.key || e.readonly || b != null && b.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (u.value = !0), ["Escape", "Tab"].includes(B.key) && (u.value = !1), B.key === "Home" ? (j = M.value) == null || j.focus("first") : B.key === "End" && ((X = M.value) == null || X.focus("last")), e.multiple || !function(q) {
      const J = q.key.length === 1, R = !q.ctrlKey && !q.metaKey && !q.altKey;
      return J && R;
    }(B)))
      return;
    const A = performance.now();
    A - F > 1e3 && (V = ""), V += B.key.toLowerCase(), F = A;
    const U = a.value.find((q) => q.title.toLowerCase().startsWith(V));
    U !== void 0 && (y.value = [U]);
  }
  function P(B) {
    if (e.multiple) {
      const A = y.value.findIndex((U) => e.valueComparator(U.value, B.value));
      if (A === -1)
        y.value = [...y.value, B];
      else {
        const U = [...y.value];
        U.splice(A, 1), y.value = U;
      }
    } else
      y.value = [B], u.value = !1;
  }
  function G(B) {
    var A;
    (A = M.value) != null && A.$el.contains(B.relatedTarget) || (u.value = !1);
  }
  function $() {
    var B;
    h.value && ((B = o.value) == null || B.focus());
  }
  function O(B) {
    h.value = !0;
  }
  function T(B) {
    if (B == null)
      y.value = [];
    else if (an(o.value, ":autofill") || an(o.value, ":-webkit-autofill")) {
      const A = a.value.find((U) => U.title === B);
      A && P(A);
    } else
      o.value && (o.value.value = "");
  }
  return Y(u, () => {
    if (!e.hideSelected && u.value && y.value.length) {
      const B = N.value.findIndex((A) => y.value.some((U) => e.valueComparator(U.value, A.value)));
      Ke && window.requestAnimationFrame(() => {
        var A;
        B >= 0 && ((A = c.value) == null || A.scrollToIndex(B));
      });
    }
  }), Y(N, (B, A) => {
    h.value && (!B.length && e.hideNoData && (u.value = !1), !A.length && B.length && (u.value = !0));
  }), ge(() => {
    const B = !(!e.chips && !t.chip), A = !!(!e.hideNoData || N.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), U = y.value.length > 0, j = Vn.filterProps(e), X = U || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Vn, ee({ ref: o }, j, { modelValue: y.value.map((q) => q.props.value).join(", "), "onUpdate:modelValue": T, focused: h.value, "onUpdate:focused": (q) => h.value = q, validationValue: y.externalValue, counterValue: g.value, dirty: U, class: ["v-select", { "v-select--active-menu": u.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": y.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: X, "onClick:clear": k, "onMousedown:control": C, onBlur: G, onKeydown: _, "aria-label": l(I.value), title: l(I.value) }), { ...t, default: () => d(we, null, [d(hi, ee({ ref: i, modelValue: u.value, "onUpdate:modelValue": (q) => u.value = q, activator: "parent", contentClass: "v-select__content", disabled: w.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: $ }, L.value), { default: () => [A && d(pi, { ref: M, selected: m.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (q) => q.preventDefault(), onKeydown: S, onFocusin: O, onScrollPassive: E, tabindex: "-1", "aria-live": "polite", color: e.itemColor ?? e.color }, { default: () => {
      var q, J, R;
      return [(q = t["prepend-item"]) == null ? void 0 : q.call(t), !N.value.length && !e.hideNoData && (((J = t["no-data"]) == null ? void 0 : J.call(t)) ?? d(sn, { title: l(e.noDataText) }, null)), d(Ii, { ref: c, renderless: !0, items: N.value }, { default: (z) => {
        var re;
        let { item: D, index: x, itemRef: K } = z;
        const te = ee(D.props, { ref: K, key: x, onClick: () => P(D) });
        return ((re = t.item) == null ? void 0 : re.call(t, { item: D, index: x, props: te })) ?? d(sn, ee(te, { role: "option" }), { prepend: (Q) => {
          let { isSelected: pe } = Q;
          return d(we, null, [e.multiple && !e.hideSelected ? d(sl, { key: D.value, modelValue: pe, ripple: !1, tabindex: "-1" }, null) : void 0, D.props.prependAvatar && d(kt, { image: D.props.prependAvatar }, null), D.props.prependIcon && d(Ve, { icon: D.props.prependIcon }, null)]);
        } });
      } }), (R = t["append-item"]) == null ? void 0 : R.call(t)];
    } })] }), y.value.map((q, J) => {
      const R = { "onClick:close": function(x) {
        x.stopPropagation(), x.preventDefault(), P(q);
      }, onMousedown(x) {
        x.preventDefault(), x.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, z = B ? !!t.chip : !!t.selection, D = z ? Hl(B ? t.chip({ item: q, index: J, props: R }) : t.selection({ item: q, index: J })) : void 0;
      if (!z || D)
        return d("div", { key: q.value, class: "v-select__selection" }, [B ? t.chip ? d(qe, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: q.title } } }, { default: () => [D] }) : d(ti, ee({ key: "chip", closable: e.closableChips, size: "small", text: q.title, disabled: q.props.disabled }, R), null) : D ?? d("span", { class: "v-select__selection-text" }, [q.title, e.multiple && J < y.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [Dl(",")])])]);
    })]), "append-inner": function() {
      var z;
      for (var q = arguments.length, J = new Array(q), R = 0; R < q; R++)
        J[R] = arguments[R];
      return d(we, null, [(z = t["append-inner"]) == null ? void 0 : z.call(t, ...J), e.menuIcon ? d(Ve, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), Un({ isFocused: h, menu: u, select: P }, o);
} }), ys = (e, n, t) => e == null || n == null ? -1 : e.toString().toLocaleLowerCase().indexOf(n.toString().toLocaleLowerCase()), ms = H({ customFilter: Function, customKeyFilter: Object, filterKeys: [Array, String], filterMode: { type: String, default: "intersection" }, noFilter: Boolean }, "filter");
function gs(e, n, t, l) {
  const o = W([]), i = W(/* @__PURE__ */ new Map()), c = v(() => l != null && l.transform ? r(n).map((s) => [s, l.transform(s)]) : r(n));
  return ze(() => {
    const s = typeof t == "function" ? t() : r(t), u = typeof s != "string" && typeof s != "number" ? "" : String(s), a = function(g, b, m) {
      var N;
      const h = [], I = (m == null ? void 0 : m.default) ?? ys, F = !!(m != null && m.filterKeys) && lt(m.filterKeys), V = Object.keys((m == null ? void 0 : m.customKeyFilter) ?? {}).length;
      if (!(g != null && g.length))
        return h;
      e:
        for (let w = 0; w < g.length; w++) {
          const [L, M = L] = lt(g[w]), E = {}, S = {};
          let k = -1;
          if (b && !(m != null && m.noFilter)) {
            if (typeof L == "object") {
              const P = F || Object.keys(M);
              for (const G of P) {
                const $ = dt(M, G, M), O = (N = m == null ? void 0 : m.customKeyFilter) == null ? void 0 : N[G];
                if (k = O ? O($, b, L) : I($, b, L), k !== -1 && k !== !1)
                  O ? E[G] = k : S[G] = k;
                else if ((m == null ? void 0 : m.filterMode) === "every")
                  continue e;
              }
            } else
              k = I(L, b, L), k !== -1 && k !== !1 && (S.title = k);
            const C = Object.keys(S).length, _ = Object.keys(E).length;
            if (!C && !_ || (m == null ? void 0 : m.filterMode) === "union" && _ !== V && !C || (m == null ? void 0 : m.filterMode) === "intersection" && (_ !== V || !C))
              continue;
          }
          h.push({ index: w, matches: { ...S, ...E } });
        }
      return h;
    }(c.value, u, { customKeyFilter: { ...e.customKeyFilter, ...r(l == null ? void 0 : l.customKeyFilter) }, default: e.customFilter, filterKeys: e.filterKeys, filterMode: e.filterMode, noFilter: e.noFilter }), p = r(n), f = [], y = /* @__PURE__ */ new Map();
    a.forEach((g) => {
      let { index: b, matches: m } = g;
      const h = p[b];
      f.push(h), y.set(h.value, m);
    }), o.value = f, i.value = y;
  }), { filteredItems: o, filteredMatches: i, getMatches: function(s) {
    return i.value.get(s.value);
  } };
}
const hs = H({ autoSelectFirst: { type: [Boolean, String] }, search: String, ...ms({ filterKeys: ["title"] }), ...Bi(), ...Ot(uo({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...hn({ transition: !1 }) }, "VAutocomplete"), bs = oe()({ name: "VAutocomplete", props: hs(), emits: { "update:focused": (e) => !0, "update:search": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = pl(), o = W(), i = ve(!1), c = ve(!0), s = ve(!1), u = W(), a = W(), p = Te(e, "menu"), f = v({ get: () => p.value, set: (x) => {
    var K;
    p.value && !x && ((K = u.value) != null && K.ΨopenChildren) || (p.value = x);
  } }), y = ve(-1), g = v(() => {
    var x;
    return (x = o.value) == null ? void 0 : x.color;
  }), b = v(() => f.value ? e.closeText : e.openText), { items: m, transformIn: h, transformOut: I } = ci(e), { textColorClasses: F, textColorStyles: V } = vt(g), N = Te(e, "search", ""), w = Te(e, "modelValue", [], (x) => h(x === null ? [null] : lt(x)), (x) => {
    const K = I(x);
    return e.multiple ? K : K[0] ?? null;
  }), L = v(() => typeof e.counterValue == "function" ? e.counterValue(w.value) : typeof e.counterValue == "number" ? e.counterValue : w.value.length), M = io(), { filteredItems: E, getMatches: S } = gs(e, m, () => c.value ? "" : N.value), k = v(() => e.hideSelected ? E.value.filter((x) => !w.value.some((K) => K.value === x.value)) : E.value), C = v(() => w.value.map((x) => x.props.value)), _ = v(() => {
    var x;
    return (e.autoSelectFirst === !0 || e.autoSelectFirst === "exact" && N.value === ((x = k.value[0]) == null ? void 0 : x.title)) && k.value.length > 0 && !c.value && !s.value;
  }), P = v(() => e.hideNoData && !k.value.length || e.readonly || (M == null ? void 0 : M.isReadonly.value)), G = W(), { onListScroll: $, onListKeydown: O } = Si(G, o);
  function T(x) {
    e.openOnClear && (f.value = !0), N.value = "";
  }
  function B() {
    P.value || (f.value = !0);
  }
  function A(x) {
    P.value || (i.value && (x.preventDefault(), x.stopPropagation()), f.value = !f.value);
  }
  function U(x) {
    var re, Q, pe;
    if (e.readonly || M != null && M.isReadonly.value)
      return;
    const K = o.value.selectionStart, te = w.value.length;
    if ((y.value > -1 || ["Enter", "ArrowDown", "ArrowUp"].includes(x.key)) && x.preventDefault(), ["Enter", "ArrowDown"].includes(x.key) && (f.value = !0), ["Escape"].includes(x.key) && (f.value = !1), _.value && ["Enter", "Tab"].includes(x.key) && D(k.value[0]), x.key === "ArrowDown" && _.value && ((re = G.value) == null || re.focus("next")), e.multiple) {
      if (["Backspace", "Delete"].includes(x.key)) {
        if (y.value < 0)
          return void (x.key !== "Backspace" || N.value || (y.value = te - 1));
        const de = y.value, he = w.value[y.value];
        he && !he.props.disabled && D(he), y.value = de >= te - 1 ? te - 2 : de;
      }
      if (x.key === "ArrowLeft") {
        if (y.value < 0 && K > 0)
          return;
        const de = y.value > -1 ? y.value - 1 : te - 1;
        w.value[de] ? y.value = de : (y.value = -1, o.value.setSelectionRange((Q = N.value) == null ? void 0 : Q.length, (pe = N.value) == null ? void 0 : pe.length));
      }
      if (x.key === "ArrowRight") {
        if (y.value < 0)
          return;
        const de = y.value + 1;
        w.value[de] ? y.value = de : (y.value = -1, o.value.setSelectionRange(0, 0));
      }
    }
  }
  function j(x) {
    if (an(o.value, ":autofill") || an(o.value, ":-webkit-autofill")) {
      const K = m.value.find((te) => te.title === x.target.value);
      K && D(K);
    }
  }
  function X() {
    var x;
    i.value && (c.value = !0, (x = o.value) == null || x.focus());
  }
  function q(x) {
    i.value = !0, setTimeout(() => {
      s.value = !0;
    });
  }
  function J(x) {
    s.value = !1;
  }
  function R(x) {
    (x == null || x === "" && !e.multiple) && (w.value = []);
  }
  const z = ve(!1);
  function D(x) {
    let K = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    if (!x.props.disabled)
      if (e.multiple) {
        const te = w.value.findIndex((re) => e.valueComparator(re.value, x.value));
        if (te === -1)
          w.value = [...w.value, x];
        else {
          const re = [...w.value];
          re.splice(te, 1), w.value = re;
        }
      } else
        w.value = K ? [x] : [], z.value = !0, N.value = K ? x.title : "", f.value = !1, c.value = !0, Ne(() => z.value = !1);
  }
  return Y(i, (x, K) => {
    var te;
    x !== K && (x ? (z.value = !0, N.value = e.multiple ? "" : String(((te = w.value.at(-1)) == null ? void 0 : te.props.title) ?? ""), c.value = !0, Ne(() => z.value = !1)) : (e.multiple || N.value != null ? !_.value || s.value || w.value.some((re) => {
      let { value: Q } = re;
      return Q === k.value[0].value;
    }) || D(k.value[0]) : w.value = [], f.value = !1, N.value = "", y.value = -1));
  }), Y(N, (x) => {
    i.value && !z.value && (x && (f.value = !0), c.value = !x);
  }), Y(f, () => {
    if (!e.hideSelected && f.value && w.value.length) {
      const x = k.value.findIndex((K) => w.value.some((te) => K.value === te.value));
      Ke && window.requestAnimationFrame(() => {
        var K;
        x >= 0 && ((K = a.value) == null || K.scrollToIndex(x));
      });
    }
  }), Y(k, (x, K) => {
    i.value && (!x.length && e.hideNoData && (f.value = !1), !K.length && x.length && (f.value = !0));
  }), ge(() => {
    const x = !(!e.chips && !t.chip), K = !!(!e.hideNoData || k.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), te = w.value.length > 0, re = Vn.filterProps(e);
    return d(Vn, ee({ ref: o }, re, { modelValue: N.value, "onUpdate:modelValue": [(Q) => N.value = Q, R], focused: i.value, "onUpdate:focused": (Q) => i.value = Q, validationValue: w.externalValue, counterValue: L.value, dirty: te, onChange: j, class: ["v-autocomplete", "v-autocomplete--" + (e.multiple ? "multiple" : "single"), { "v-autocomplete--active-menu": f.value, "v-autocomplete--chips": !!e.chips, "v-autocomplete--selection-slot": !!t.selection, "v-autocomplete--selecting-index": y.value > -1 }, e.class], style: e.style, readonly: e.readonly, placeholder: te ? void 0 : e.placeholder, "onClick:clear": T, "onMousedown:control": B, onKeydown: U }), { ...t, default: () => d(we, null, [d(hi, ee({ ref: u, modelValue: f.value, "onUpdate:modelValue": (Q) => f.value = Q, activator: "parent", contentClass: "v-autocomplete__content", disabled: P.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: X }, e.menuProps), { default: () => [K && d(pi, { ref: G, selected: C.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (Q) => Q.preventDefault(), onKeydown: O, onFocusin: q, onFocusout: J, onScrollPassive: $, tabindex: "-1", "aria-live": "polite", color: e.itemColor ?? e.color }, { default: () => {
      var Q, pe, de;
      return [(Q = t["prepend-item"]) == null ? void 0 : Q.call(t), !k.value.length && !e.hideNoData && (((pe = t["no-data"]) == null ? void 0 : pe.call(t)) ?? d(sn, { title: l(e.noDataText) }, null)), d(Ii, { ref: a, renderless: !0, items: k.value }, { default: (he) => {
        var Ee;
        let { item: ae, index: Be, itemRef: xe } = he;
        const Pe = ee(ae.props, { ref: xe, key: Be, active: !(!_.value || Be !== 0) || void 0, onClick: () => D(ae) });
        return ((Ee = t.item) == null ? void 0 : Ee.call(t, { item: ae, index: Be, props: Pe })) ?? d(sn, Pe, { prepend: (be) => {
          let { isSelected: ie } = be;
          return d(we, null, [e.multiple && !e.hideSelected ? d(sl, { key: ae.value, modelValue: ie, ripple: !1, tabindex: "-1" }, null) : void 0, ae.props.prependAvatar && d(kt, { image: ae.props.prependAvatar }, null), ae.props.prependIcon && d(Ve, { icon: ae.props.prependIcon }, null)]);
        }, title: () => {
          var be, ie;
          return c.value ? ae.title : function(ye, Oe, _e) {
            if (Oe == null)
              return ye;
            if (Array.isArray(Oe))
              throw new Error("Multiple matches is not implemented");
            return typeof Oe == "number" && ~Oe ? d(we, null, [d("span", { class: "v-autocomplete__unmask" }, [ye.substr(0, Oe)]), d("span", { class: "v-autocomplete__mask" }, [ye.substr(Oe, _e)]), d("span", { class: "v-autocomplete__unmask" }, [ye.substr(Oe + _e)])]) : ye;
          }(ae.title, (be = S(ae)) == null ? void 0 : be.title, ((ie = N.value) == null ? void 0 : ie.length) ?? 0);
        } });
      } }), (de = t["append-item"]) == null ? void 0 : de.call(t)];
    } })] }), w.value.map((Q, pe) => {
      const de = { "onClick:close": function(Be) {
        Be.stopPropagation(), Be.preventDefault(), D(Q, !1);
      }, onMousedown(Be) {
        Be.preventDefault(), Be.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, he = x ? !!t.chip : !!t.selection, ae = he ? Hl(x ? t.chip({ item: Q, index: pe, props: de }) : t.selection({ item: Q, index: pe })) : void 0;
      if (!he || ae)
        return d("div", { key: Q.value, class: ["v-autocomplete__selection", pe === y.value && ["v-autocomplete__selection--selected", F.value]], style: pe === y.value ? V.value : {} }, [x ? t.chip ? d(qe, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: Q.title } } }, { default: () => [ae] }) : d(ti, ee({ key: "chip", closable: e.closableChips, size: "small", text: Q.title, disabled: Q.props.disabled }, de), null) : ae ?? d("span", { class: "v-autocomplete__selection-text" }, [Q.title, e.multiple && pe < w.value.length - 1 && d("span", { class: "v-autocomplete__selection-comma" }, [Dl(",")])])]);
    })]), "append-inner": function() {
      var he;
      for (var Q = arguments.length, pe = new Array(Q), de = 0; de < Q; de++)
        pe[de] = arguments[de];
      return d(we, null, [(he = t["append-inner"]) == null ? void 0 : he.call(t, ...pe), e.menuIcon ? d(Ve, { class: "v-autocomplete__menu-icon", icon: e.menuIcon, onMousedown: A, onClick: Mi, "aria-label": l(b.value), title: l(b.value) }, null) : void 0]);
    } });
  }), Un({ isFocused: i, isPristine: c, menu: f, search: N, filteredItems: E, select: D }, o);
} }), Cs = oe()({ name: "VCardActions", props: Se(), setup(e, n) {
  let { slots: t } = n;
  return pn({ VBtn: { slim: !0, variant: "text" } }), ge(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Is = Tn("v-card-subtitle"), Ss = Tn("v-card-title"), Bs = H({ appendAvatar: String, appendIcon: Ae, prependAvatar: String, prependIcon: Ae, subtitle: [String, Number], title: [String, Number], ...Se(), ...mt() }, "VCardItem"), xs = oe()({ name: "VCardItem", props: Bs(), setup(e, n) {
  let { slots: t } = n;
  return ge(() => {
    var a;
    const l = !(!e.prependAvatar && !e.prependIcon), o = !(!l && !t.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !t.append), s = !(e.title == null && !t.title), u = !(e.subtitle == null && !t.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [o && d("div", { key: "prepend", class: "v-card-item__prepend" }, [t.prepend ? d(qe, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, t.prepend) : l && d(kt, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [s && d(Ss, { key: "title" }, { default: () => {
      var p;
      return [((p = t.title) == null ? void 0 : p.call(t)) ?? e.title];
    } }), u && d(Is, { key: "subtitle" }, { default: () => {
      var p;
      return [((p = t.subtitle) == null ? void 0 : p.call(t)) ?? e.subtitle];
    } }), (a = t.default) == null ? void 0 : a.call(t)]), c && d("div", { key: "append", class: "v-card-item__append" }, [t.append ? d(qe, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, t.append) : i && d(kt, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), $t = Tn("v-card-text"), ks = H({ appendAvatar: String, appendIcon: Ae, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ae, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...vn(), ...Se(), ...mt(), ...Xt(), ...yn(), ...to(), ...Zl(), ...Pa(), ...Ct(), ...yl(), ...nt(), ...He(), ...Pt({ variant: "elevated" }) }, "VCard"), en = oe()({ name: "VCard", directives: { Ripple: Rn }, props: ks(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = Ze(e), { borderClasses: i } = fn(e), { colorClasses: c, colorStyles: s, variantClasses: u } = Wn(e), { densityClasses: a } = bt(e), { dimensionStyles: p } = Yt(e), { elevationClasses: f } = mn(e), { loaderClasses: y } = vl(e), { locationStyles: g } = eo(e), { positionClasses: b } = $a(e), { roundedClasses: m } = It(e), h = fl(e, t), I = v(() => e.link !== !1 && h.isLink.value), F = v(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
  return ge(() => {
    const V = I.value ? "a" : e.tag, N = !(!l.title && e.title == null), w = !(!l.subtitle && e.subtitle == null), L = N || w, M = !!(l.append || e.appendAvatar || e.appendIcon), E = !!(l.prepend || e.prependAvatar || e.prependIcon), S = !(!l.image && !e.image), k = L || E || M, C = !(!l.text && e.text == null);
    return Xe(d(V, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": F.value }, o.value, i.value, c.value, a.value, f.value, y.value, b.value, m.value, u.value, e.class], style: [s.value, p.value, g.value, e.style], href: h.href.value, onClick: F.value && h.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var _;
      return [S && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(qe, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(Na, { key: "image-img", cover: !0, src: e.image }, null)]), d(no, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), k && d(xs, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), C && d($t, { key: "text" }, { default: () => {
        var P;
        return [((P = l.text) == null ? void 0 : P.call(l)) ?? e.text];
      } }), (_ = l.default) == null ? void 0 : _.call(l), l.actions && d(Cs, null, { default: l.actions }), Ln(F.value, "v-card")];
    } }), [[ht("ripple"), F.value && e.ripple]]);
  }), {};
} }), xi = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
}, ws = xi(ct({ __name: "VInlineAutocomplete", props: Ye(Rt({ autoSelectFirst: {}, clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, menuIcon: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...sa }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, color: F, fieldOnly: V, hideCancelIcon: N, hideDetails: w, hideSaveIcon: L, loadingIcon: M, loadingIconColor: E, saveButtonColor: S, saveButtonSize: k, saveButtonTitle: C, saveButtonVariant: _, saveIcon: P, saveIconColor: G, valueColor: $ } = Ft(a), O = v(() => u.disabled), T = v(() => u.loading), B = W(!1), A = W(!1), U = W(), j = W(!1), X = W(null);
  let q = t.value;
  Y(() => T.value, (ne, ke) => {
    !ne && ke && j.value && Ee();
  });
  const J = v(() => it({ icon: u.clearIcon, iconOptions: s, name: "clear" })), R = v(() => t.value && t.value[a.itemTitle] ? (B.value = !1, t.value[a.itemTitle]) : t.value ? t.value : (B.value = !0, a.emptyText)), z = v(() => gn(a)), D = v(() => ({ color: a.color, displayAppendIcon: a.displayAppendIcon, displayAppendIconColor: a.displayAppendIconColor, displayAppendIconSize: a.displayAppendIconSize, displayAppendInnerIcon: a.displayAppendInnerIcon, displayAppendInnerIconColor: a.displayAppendInnerIconColor, displayAppendInnerIconSize: a.displayAppendInnerIconSize, displayPrependIcon: a.displayPrependIcon, displayPrependIconColor: a.displayPrependIconColor, displayPrependIconSize: a.displayPrependIconSize, displayPrependInnerIcon: a.displayPrependInnerIcon, displayPrependInnerIconColor: a.displayPrependInnerIconColor, displayPrependInnerIconSize: a.displayPrependInnerIconSize, displayValue: R.value, empty: B.value, error: A.value, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: $.value })), x = v(() => ({ ...Gt, ...u.cardProps }));
  ze(() => {
    U.value = a.items || [];
  });
  const K = v(() => Ut({ cell: a.cell && !j.value, density: a.density, disabled: O.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: T.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), te = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-select" })), re = Pn({ density: a.density, variant: a.variant }), Q = v(() => Ht({ active: j.value, name: "select" })), pe = v(() => Kt({ name: "select", showField: j.value })), de = v(() => ({})), he = v(() => Be.value);
  function ae() {
    A.value = !1, t.value = q, Ee();
  }
  const Be = W(), xe = W(null), Pe = W("body");
  function Ee() {
    var ke, Le;
    if (O.value || a.loadingWait && T.value)
      return;
    Be.value = xt({ cardMinWidth: (ke = a.cardProps) == null ? void 0 : ke.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (Le = a.cardProps) == null ? void 0 : Le.width, field: xe.value });
    const ne = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: j, timeOpened: X.value });
    j.value = ne.showField, X.value = ne.timeOpened, _e !== null && I.value && j.value && !a.fieldOnly && _e.emit(ne.timeOpened);
  }
  const be = W(), ie = v(() => be.value);
  function ye() {
    const ne = Nn({ required: a.required, rules: a.rules, value: t });
    return A.value = ne.errors, be.value = ne.results, ne.results;
  }
  function Oe() {
    q = t.value, i("update", t.value), a.loadingWait || Ee();
  }
  let _e, se;
  function De(ne) {
    i("update:closeSiblingFields", X), j.value && X.value !== ne && ae();
  }
  return Y(() => j.value, () => {
    j.value && ye();
  }), Y(() => t.value, () => {
    j.value && ye();
  }), I.value && import("@vueuse/core").then(({ useEventBus: ne }) => {
    _e = ne(jt), se = _e.on(De);
  }), Nt(() => {
    se !== void 0 && _e.off(De);
  }), (ne, ke) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: xe, class: le(r(K)), style: We(r(de)) }, [!r(j) && !r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 0, class: le(r(te)) }, [je("div", { class: le(r(re)) }, [d(Dn, ee(r(D), { onToggleField: Ee }), rt({ _: 2 }, [st(r(o), (Le, at) => ({ name: at, fn: Ce((Et) => [Ue(ne.$slots, at, $e(Re({ ...Et })), void 0, !0)]) }))]), 1040)], 2)], 2)) : Fe("", !0), r(j) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(r(Q)) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(Pe) }, [d(bs, ee(r(z), { modelValue: t.value, "onUpdate:modelValue": ke[0] || (ke[0] = (Le) => t.value = Le), autofocus: !r(a).fieldOnly || r(a).autofocus, "clear-icon": r(J), clearable: r(a).clearable, color: r(F), density: r(a).density, disabled: r(T) || r(O), error: r(A), "error-messages": r(ie), "hide-details": r(w), "hide-selected": r(a).hideSelected, "item-title": r(a).itemTitle, "item-value": r(a).itemValue, items: r(U), label: r(a).label, loading: r(T), menu: r(a).menu && !r(a).fieldOnly && r(j), variant: r(a).variant, width: "100%", onKeyup: Bn(ae, ["esc"]) }), rt({ _: 2 }, [st(r(o), (Le, at) => ({ name: at, fn: Ce((Et) => [Ue(ne.$slots, at, $e(Re({ ...Et })), void 0, !0)]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), error: r(A), "field-only": r(V), "hide-cancel-icon": r(N), "hide-save-icon": r(L), loading: r(T), "loading-icon": r(M), "loading-icon-color": r(E), "save-button-color": r(S), "save-button-size": r(k), "save-button-title": r(C), "save-button-variant": r(_), "save-icon": r(P), "save-icon-color": r(G), onClose: ae, onSave: Oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(pe)), style: We(r(he)) }, [d(en, $e(Re(r(x))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: Pe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), [["__scopeId", "data-v-37dafea1"]]), Fs = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Gn(), ...ao() }, "VSwitch"), As = oe()({ name: "VSwitch", inheritAttrs: !1, props: Fs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = Te(e, "indeterminate"), i = Te(e, "modelValue"), { loaderClasses: c } = vl(e), { isFocused: s, focus: u, blur: a } = jn(e), p = W(), f = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), y = ut(), g = v(() => e.id || `switch-${y}`);
  function b() {
    o.value && (o.value = !1);
  }
  function m(h) {
    var I, F;
    h.stopPropagation(), h.preventDefault(), (F = (I = p.value) == null ? void 0 : I.input) == null || F.click();
  }
  return ge(() => {
    const [h, I] = $n(t), F = wt.filterProps(e), V = rl.filterProps(e);
    return d(wt, ee({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": o.value }, c.value, e.class] }, h, F, { modelValue: i.value, "onUpdate:modelValue": (N) => i.value = N, id: g.value, focused: s.value, style: e.style }), { ...l, default: (N) => {
      let { id: w, messagesId: L, isDisabled: M, isReadonly: E, isValid: S } = N;
      return d(rl, ee({ ref: p }, V, { modelValue: i.value, "onUpdate:modelValue": [(k) => i.value = k, b], id: w.value, "aria-describedby": L.value, type: "checkbox", "aria-checked": o.value ? "mixed" : void 0, disabled: M.value, readonly: E.value, onFocus: u, onBlur: a }, I), { ...l, default: (k) => {
        let { backgroundColorClasses: C, backgroundColorStyles: _ } = k;
        return d("div", { class: ["v-switch__track", ...C.value], style: _.value, onClick: m }, null);
      }, input: (k) => {
        let { inputNode: C, icon: _, backgroundColorClasses: P, backgroundColorStyles: G } = k;
        return d(we, null, [C, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": _ || e.loading }, e.inset ? void 0 : P.value], style: e.inset ? void 0 : G.value }, [d(Cr, null, { default: () => [e.loading ? d(no, { name: "v-switch", active: !0, color: S.value === !1 ? void 0 : f.value }, { default: ($) => l.loader ? l.loader($) : d(_a, { active: $.isActive, color: $.color, indeterminate: !0, size: "16", width: "2" }, null) }) : _ && d(Ve, { key: _, icon: _, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), Vs = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Gn(), ...ro() }, "VTextarea"), _s = oe()({ name: "VTextarea", directives: { Intersect: oo }, inheritAttrs: !1, props: Vs(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const i = Te(e, "modelValue"), { isFocused: c, focus: s, blur: u } = jn(e), a = v(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), p = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function f(C, _) {
    var P, G;
    e.autofocus && C && ((G = (P = _[0].target) == null ? void 0 : P.focus) == null || G.call(P));
  }
  const y = W(), g = W(), b = ve(""), m = W(), h = v(() => e.persistentPlaceholder || c.value || e.active);
  function I() {
    var C;
    m.value !== document.activeElement && ((C = m.value) == null || C.focus()), c.value || s();
  }
  function F(C) {
    I(), l("click:control", C);
  }
  function V(C) {
    l("mousedown:control", C);
  }
  function N(C) {
    C.stopPropagation(), I(), Ne(() => {
      i.value = "", ya(e["onClick:clear"], C);
    });
  }
  function w(C) {
    var P;
    const _ = C.target;
    if (i.value = _.value, (P = e.modelModifiers) == null ? void 0 : P.trim) {
      const G = [_.selectionStart, _.selectionEnd];
      Ne(() => {
        _.selectionStart = G[0], _.selectionEnd = G[1];
      });
    }
  }
  const L = W(), M = W(+e.rows), E = v(() => ["plain", "underlined"].includes(e.variant));
  function S() {
    e.autoGrow && Ne(() => {
      if (!L.value || !g.value)
        return;
      const C = getComputedStyle(L.value), _ = getComputedStyle(g.value.$el), P = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), G = L.value.scrollHeight, $ = parseFloat(C.lineHeight), O = on(G ?? 0, Math.max(parseFloat(e.rows) * $ + P, parseFloat(_.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * $ + P || 1 / 0);
      M.value = Math.floor((O - P) / $), b.value = ce(O);
    });
  }
  let k;
  return ze(() => {
    e.autoGrow || (M.value = +e.rows);
  }), un(S), Y(i, S), Y(() => e.rows, S), Y(() => e.maxRows, S), Y(() => e.density, S), Y(L, (C) => {
    C ? (k = new ResizeObserver(S), k.observe(L.value)) : k == null || k.disconnect();
  }), ft(() => {
    k == null || k.disconnect();
  }), ge(() => {
    const C = !!(o.counter || e.counter || e.counterValue), _ = !(!C && !o.details), [P, G] = $n(t), { modelValue: $, ...O } = wt.filterProps(e), T = Ci(e);
    return d(wt, ee({ ref: y, modelValue: i.value, "onUpdate:modelValue": (B) => i.value = B, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: e.style }, P, O, { centerAffix: M.value === 1 && !E.value, focused: c.value }), { ...o, default: (B) => {
      let { id: A, isDisabled: U, isDirty: j, isReadonly: X, isValid: q } = B;
      return d(so, ee({ ref: g, style: { "--v-textarea-control-height": b.value }, onClick: F, onMousedown: V, "onClick:clear": N, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, T, { id: A.value, active: h.value || j.value, centerAffix: M.value === 1 && !E.value, dirty: j.value || e.dirty, disabled: U.value, focused: c.value, error: q.value === !1 }), { ...o, default: (J) => {
        let { props: { class: R, ...z } } = J;
        return d(we, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Xe(d("textarea", ee({ ref: m, class: R, value: i.value, onInput: w, autofocus: e.autofocus, readonly: X.value, disabled: U.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: I, onBlur: u }, z, G), null), [[ht("intersect"), { handler: f }, null, { once: !0 }]]), e.autoGrow && Xe(d("textarea", { class: [R, "v-textarea__sizer"], id: `${z.id}-sizer`, "onUpdate:modelValue": (D) => i.value = D, ref: L, readonly: !0, "aria-hidden": "true" }, null), [[$i, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: _ ? (B) => {
      var A;
      return d(we, null, [(A = o.details) == null ? void 0 : A.call(o, B), C && d(we, null, [d("span", null, null), d(bi, { active: e.persistentCounter || c.value, value: a.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), Un({}, y, g, m);
} }), ki = ct({ __name: "BooleanIcons", props: Ye({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {}, modelModifiers: {} }), emits: ["update:modelValue"], setup(e) {
  const n = e, t = Ie(Symbol.for("vuetify:icons")), l = Qe({ ...n });
  ze(() => {
    Object.assign(l, { ...n });
  });
  const o = _t(e, "modelValue"), i = v(() => it({ icon: l.iconFalse, iconOptions: t, name: "false" })), c = v(() => it({ icon: l.iconTrue, iconOptions: t, name: "true" }));
  return (s, u) => o.value ? (Z(), Me(r(Ve), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconTrueColor, icon: r(c), size: "x-small", title: s.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (Z(), Me(r(Ve), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: s.iconFalseColor, icon: r(i), size: "x-small", title: s.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), Os = { class: "v-selection-control__wrapper" }, Ps = ct({ __name: "VInlineCheckbox", props: Ye(Rt({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ei }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = Rl(), a = e, p = Qe({ ...l, ...a, ...c });
  ze(() => {
    Object.assign(p, { ...l, ...a, ...c });
  });
  const f = v(() => a.disabled), y = v(() => a.loading), g = v(() => p.underlineColor), b = W(!1), m = W(!1), h = W(null), I = v(() => gn(p)), F = v(() => ({ ...Gt, ...a.cardProps }));
  Y(() => y.value, (z, D) => {
    !z && D && m.value && j();
  });
  const V = v(() => it({ icon: a.trueIcon, iconOptions: s, name: "checkboxFalse" })), N = v(() => it({ icon: a.iconTrue, iconOptions: s, name: "checkboxTrue" })), w = v(() => t.value == p.trueValue), L = v(() => da({ modelValue: t, trueValue: p.trueValue })), M = v(() => Ut({ cell: p.cell && !m.value, density: p.density, disabled: f.value, field: "v-checkbox", loading: y.value, loadingWait: p.loadingWait, tableField: p.tableField })), E = v(() => qt({ cell: p.cell, cellUnderlineFullWidth: p.cellUnderlineFullWidth, density: p.density, field: "v-checkbox" })), S = ca({ density: p.density }), k = v(() => Ht({ active: m.value, name: "checkbox" })), C = v(() => jl("checkbox", p.valueColor, { error: b })), _ = v(() => Kt({ name: "checkbox", showField: m.value })), P = v(() => ({})), G = v(() => Gl({ color: p.color, error: b, theme: u, underlineColor: g.value, underlineStyle: p.underlineStyle, underlineWidth: p.underlineWidth, underlined: p.underlined })), $ = v(() => T.value);
  function O() {
    b.value = !1, j();
  }
  const T = W(), B = W(null), A = W("body"), U = Ti();
  function j() {
    var D, x;
    if (f.value || p.loadingWait && y.value)
      return;
    T.value = xt({ cardMinWidth: (D = p.cardProps) == null ? void 0 : D.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (x = p.cardProps) == null ? void 0 : x.width, field: B.value, name: "checkbox" });
    const z = Qt({ attrs: l, closeSiblings: p.closeSiblings, fieldOnly: p.fieldOnly, props: a, showField: m, timeOpened: h.value });
    m.value = z.showField, h.value = z.timeOpened, q !== null && p.closeSiblings && m.value && !p.fieldOnly && q.emit(z.timeOpened);
  }
  function X(z) {
    t.value = z, i("update", z), p.loadingWait || j();
  }
  let q, J;
  function R(z) {
    i("update:closeSiblingFields", h), m.value && h.value !== z && j();
  }
  return Y(() => U, () => {
    var z, D;
    T.value = xt({ cardMinWidth: (z = p.cardProps) == null ? void 0 : z.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (D = p.cardProps) == null ? void 0 : D.width, field: B.value, name: "checkbox" });
  }, { deep: !0 }), p.closeSiblings && import("@vueuse/core").then(({ useEventBus: z }) => {
    q = z(jt), J = q.on(R);
  }), Nt(() => {
    J !== void 0 && q.off(R);
  }), (z, D) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: B, class: le(r(M)), style: We(r(P)) }, [!r(m) && !r(p).fieldOnly || r(p).cardField ? (Z(), fe("div", { key: 0, class: le(r(E)), onClick: D[2] || (D[2] = (x) => r(p).cell ? j() : void 0) }, [je("div", { class: le(r(S)), onClick: D[1] || (D[1] = (x) => r(p).cell ? void 0 : j()) }, [je("div", Os, [r(p).icons ? (Z(), fe("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(C)]), style: We(r(G)) }, [d(ki, { modelValue: r(L), "onUpdate:modelValue": D[0] || (D[0] = (x) => Mt(L) ? L.value = x : null), "icon-false": r(p).iconFalse, "icon-false-color": r(p).iconFalseColor, "icon-false-title": r(p).iconFalseTitle, "icon-true": r(p).iconTrue, "icon-true-color": r(p).iconTrueColor, "icon-true-title": r(p).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), fe("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(C)]), style: We(r(G)) }, Ll(r(w)), 7))])], 2)], 2)) : Fe("", !0), r(m) || r(p).fieldOnly || r(p).cardField ? (Z(), fe("div", { key: 1, class: le(r(k)) }, [(Z(), Me(Vt, { disabled: !r(p).cardField, to: r(A) }, [d(Fr, ee(r(I), { color: r(p).color, density: r(p).density, disabled: r(y) || r(f), error: r(b), "false-icon": r(V), "false-value": r(p).falseValue, "hide-details": r(p).hideDetails, label: r(p).label, "model-value": r(L), "true-icon": r(N), "true-value": r(p).trueValue, "onUpdate:modelValue": X }), rt({ _: 2 }, [st(r(o), (x, K) => ({ name: K, fn: Ce((te) => [Ue(z.$slots, K, $e(Re({ ...te })))]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p).cancelButtonColor, "cancel-button-size": r(p).cancelButtonSize, "cancel-button-title": r(p).cancelButtonTitle, "cancel-button-variant": r(p).cancelButtonVariant, "cancel-icon": r(p).cancelIcon, "cancel-icon-color": r(p).cancelIconColor, error: r(b), "field-only": r(p).fieldOnly, "hide-cancel-icon": r(p).hideCancelIcon, "hide-save-icon": !0, loading: r(y), "loading-icon": r(p).loadingIcon, "loading-icon-color": r(p).loadingIconColor, "save-button-color": r(p).saveButtonColor, "save-button-size": r(p).saveButtonSize, "save-button-title": r(p).saveButtonTitle, "save-button-variant": r(p).saveButtonVariant, "save-icon": r(p).saveIcon, "save-icon-color": r(p).saveIconColor, onClose: O, onSave: X }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(p).cardField ? (Z(), fe("div", { key: 2, class: le(r(_)), style: We(r($)) }, [d(en, $e(Re(r(F))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: A }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), $s = ct({ __name: "VInlineCustomField", props: Ye(Rt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ua }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, fieldOnly: F, hideCancelIcon: V, hideSaveIcon: N, loadingIcon: w, loadingIconColor: L, saveButtonColor: M, saveButtonSize: E, saveButtonTitle: S, saveButtonVariant: k, saveIcon: C, saveIconColor: _ } = Ft(a), P = v(() => u.disabled), G = v(() => u.loading), $ = W(!1), O = W(!1), T = W(!1), B = W(null);
  let A = t.value;
  Y(() => G.value, (ie, ye) => {
    !ie && ye && T.value && he();
  });
  const U = v(() => t.value ? ($.value = !1, a.truncateLength ? lo({ length: a.truncateLength, suffix: a.truncateSuffix, text: t.value }) : t.value) : ($.value = !0, a.emptyText)), j = v(() => ({ ...a, loading: G.value, modelValue: t.value, originalValue: A })), X = v(() => ({ color: a.color, displayAppendIcon: u.displayAppendIcon, displayAppendIconColor: u.displayAppendIconColor, displayAppendIconSize: u.displayAppendIconSize, displayAppendInnerIcon: u.displayAppendInnerIcon, displayAppendInnerIconColor: u.displayAppendInnerIconColor, displayAppendInnerIconSize: u.displayAppendInnerIconSize, displayPrependIcon: u.displayPrependIcon, displayPrependIconColor: u.displayPrependIconColor, displayPrependIconSize: u.displayPrependIconSize, displayPrependInnerIcon: u.displayPrependInnerIcon, displayPrependInnerIconColor: u.displayPrependInnerIconColor, displayPrependInnerIconSize: u.displayPrependInnerIconSize, displayValue: U.value, empty: $.value, error: O.value, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor })), q = v(() => ({ ...Gt, ...u.cardProps })), J = v(() => Ut({ cell: a.cell && !T.value, density: a.density, disabled: P.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: G.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), R = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-text-field" })), z = Pn({ density: a.density, variant: a.variant }), D = v(() => Ht({ active: T.value, name: "text-field" })), x = v(() => Kt({ name: "custom-field", showField: T.value })), K = v(() => ({})), te = v(() => Q.value);
  function re() {
    O.value = !1, t.value = A, he();
  }
  const Q = W(), pe = W(null), de = W("body");
  function he() {
    var ye, Oe;
    if (P.value || a.loadingWait && G.value)
      return;
    Q.value = xt({ cardMinWidth: (ye = a.cardProps) == null ? void 0 : ye.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (Oe = a.cardProps) == null ? void 0 : Oe.width, field: pe.value });
    const ie = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: T, timeOpened: B.value });
    T.value = ie.showField, B.value = ie.timeOpened, Pe !== null && I.value && T.value && !a.fieldOnly && Pe.emit(ie.timeOpened);
  }
  const ae = W();
  function Be() {
    const ie = Nn({ required: a.required, rules: a.rules, value: t });
    return O.value = ie.errors, ae.value = ie.results, ie.results;
  }
  function xe() {
    O.value ? O.value = !0 : (A = t.value, i("update", t.value), a.loadingWait || he());
  }
  let Pe, Ee;
  function be(ie) {
    i("update:closeSiblingFields", B), T.value && B.value !== ie && re();
  }
  return Y(() => T.value, () => {
    T.value && Be();
  }), Y(() => t.value, () => {
    T.value && Be();
  }), I.value && import("@vueuse/core").then(({ useEventBus: ie }) => {
    Pe = ie(jt), Ee = Pe.on(be);
  }), Nt(() => {
    Ee !== void 0 && Pe.off(be);
  }), (ie, ye) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: pe, class: le(r(J)), style: We(r(K)) }, [!r(T) && !r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 0, class: le(r(R)) }, [je("div", { class: le(r(z)) }, [d(Dn, ee(r(X), { onToggleField: he }), rt({ _: 2 }, [st(r(o), (Oe, _e) => ({ name: _e, fn: Ce((se) => [Ue(ie.$slots, _e, $e(Re({ ...se })))]) }))]), 1040)], 2)], 2)) : Fe("", !0), r(T) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(["d-flex align-center py-2", r(D)]) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(de) }, [Ue(ie.$slots, "default", $e(Re(r(j)))), d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), error: r(O), "field-only": r(F), "hide-cancel-icon": r(V), "hide-save-icon": r(N), loading: r(G), "loading-icon": r(w), "loading-icon-color": r(L), "save-button-color": r(M), "save-button-size": r(E), "save-button-title": r(S), "save-button-variant": r(k), "save-icon": r(C), "save-icon-color": r(_), onClose: re, onSave: xe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(x)), style: We(r(te)) }, [d(en, $e(Re(r(q))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: de }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), Ts = xi(ct({ __name: "VInlineSelect", props: Ye(Rt({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...sa }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, color: F, fieldOnly: V, hideCancelIcon: N, hideDetails: w, hideSaveIcon: L, loadingIcon: M, loadingIconColor: E, saveButtonColor: S, saveButtonSize: k, saveButtonTitle: C, saveButtonVariant: _, saveIcon: P, saveIconColor: G, valueColor: $ } = Ft(a), O = v(() => u.disabled), T = v(() => u.loading), B = W(!1), A = W(!1), U = W(), j = W(!1), X = W(null);
  let q = t.value;
  Y(() => T.value, (ne, ke) => {
    !ne && ke && j.value && Ee();
  });
  const J = v(() => it({ icon: u.clearIcon, iconOptions: s, name: "clear" })), R = v(() => t.value && t.value[a.itemTitle] ? (B.value = !1, t.value[a.itemTitle]) : t.value ? t.value : (B.value = !0, a.emptyText)), z = v(() => gn(a)), D = v(() => ({ color: a.color, displayAppendIcon: a.displayAppendIcon, displayAppendIconColor: a.displayAppendIconColor, displayAppendIconSize: a.displayAppendIconSize, displayAppendInnerIcon: a.displayAppendInnerIcon, displayAppendInnerIconColor: a.displayAppendInnerIconColor, displayAppendInnerIconSize: a.displayAppendInnerIconSize, displayPrependIcon: a.displayPrependIcon, displayPrependIconColor: a.displayPrependIconColor, displayPrependIconSize: a.displayPrependIconSize, displayPrependInnerIcon: a.displayPrependInnerIcon, displayPrependInnerIconColor: a.displayPrependInnerIconColor, displayPrependInnerIconSize: a.displayPrependInnerIconSize, displayValue: R.value, empty: B.value, error: A.value, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: $.value })), x = v(() => ({ ...Gt, ...u.cardProps }));
  ze(() => {
    U.value = a.items || [];
  });
  const K = v(() => Ut({ cell: a.cell && !j.value, density: a.density, disabled: O.value, field: "v-select", iconSet: s == null ? void 0 : s.defaultSet, loading: T.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), te = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-select" })), re = Pn({ density: a.density, variant: a.variant }), Q = v(() => Ht({ active: j.value, name: "select" })), pe = v(() => Kt({ name: "select", showField: j.value })), de = v(() => ({})), he = v(() => Be.value);
  function ae() {
    A.value = !1, t.value = q, Ee();
  }
  const Be = W(), xe = W(null), Pe = W("body");
  function Ee() {
    var ke, Le;
    if (O.value || a.loadingWait && T.value)
      return;
    Be.value = xt({ cardMinWidth: (ke = a.cardProps) == null ? void 0 : ke.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (Le = a.cardProps) == null ? void 0 : Le.width, field: xe.value });
    const ne = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: j, timeOpened: X.value });
    j.value = ne.showField, X.value = ne.timeOpened, _e !== null && I.value && j.value && !a.fieldOnly && _e.emit(ne.timeOpened);
  }
  const be = W(), ie = v(() => be.value);
  function ye() {
    const ne = Nn({ required: a.required, rules: a.rules, value: t });
    return A.value = ne.errors, be.value = ne.results, ne.results;
  }
  function Oe() {
    q = t.value, i("update", t.value), a.loadingWait || Ee();
  }
  let _e, se;
  function De(ne) {
    i("update:closeSiblingFields", X), j.value && X.value !== ne && ae();
  }
  return Y(() => j.value, () => {
    j.value && ye();
  }), Y(() => t.value, () => {
    j.value && ye();
  }), I.value && import("@vueuse/core").then(({ useEventBus: ne }) => {
    _e = ne(jt), se = _e.on(De);
  }), Nt(() => {
    se !== void 0 && _e.off(De);
  }), (ne, ke) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: xe, class: le(r(K)), style: We(r(de)) }, [!r(j) && !r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 0, class: le(r(te)) }, [je("div", { class: le(r(re)) }, [d(Dn, ee(r(D), { onToggleField: Ee }), rt({ _: 2 }, [st(r(o), (Le, at) => ({ name: at, fn: Ce((Et) => [Ue(ne.$slots, at, $e(Re({ ...Et })), void 0, !0)]) }))]), 1040)], 2)], 2)) : Fe("", !0), r(j) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(r(Q)) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(Pe) }, [d(fs, ee(r(z), { modelValue: t.value, "onUpdate:modelValue": ke[0] || (ke[0] = (Le) => t.value = Le), autofocus: !r(a).fieldOnly || r(a).autofocus, "clear-icon": r(J), clearable: r(a).clearable, color: r(F), density: r(a).density, disabled: r(T) || r(O), error: r(A), "error-messages": r(ie), "hide-details": r(w), "hide-selected": r(a).hideSelected, "item-title": r(a).itemTitle, "item-value": r(a).itemValue, items: r(U), label: r(a).label, loading: r(T), menu: r(a).menu && !r(a).fieldOnly && r(j), variant: r(a).variant, width: "100%", onKeyup: Bn(ae, ["esc"]) }), rt({ _: 2 }, [st(r(o), (Le, at) => ({ name: at, fn: Ce((Et) => [Ue(ne.$slots, at, $e(Re({ ...Et })), void 0, !0)]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), error: r(A), "field-only": r(V), "hide-cancel-icon": r(N), "hide-save-icon": r(L), loading: r(T), "loading-icon": r(M), "loading-icon-color": r(E), "save-button-color": r(S), "save-button-size": r(k), "save-button-title": r(C), "save-button-variant": r(_), "save-icon": r(P), "save-icon-color": r(G), onClose: ae, onSave: Oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(pe)), style: We(r(he)) }, [d(en, $e(Re(r(x))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: Pe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), [["__scopeId", "data-v-4f65a7ea"]]), Es = { class: "v-selection-control__wrapper" }, zs = ct({ __name: "VInlineSwitch", props: Ye(Rt({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...zi }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Rl(), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, color: F, fieldOnly: V, hideCancelIcon: N, hideDetails: w, loadingIcon: L, loadingIconColor: M, saveButtonColor: E, saveButtonSize: S, saveButtonTitle: k, saveButtonVariant: C, saveIcon: _, saveIconColor: P } = Ft(a), G = v(() => u.disabled), $ = v(() => u.loading), O = W(!1), T = W(!1), B = W(null), A = v(() => gn(a)), U = v(() => ({ ...Gt, ...u.cardProps }));
  Y(() => $.value, (be, ie) => {
    !be && ie && T.value && ae();
  });
  const j = v(() => t.value == a.trueValue), X = v(() => da({ modelValue: t, trueValue: a.trueValue })), q = v(() => Ut({ cell: a.cell && !T.value, density: a.density, disabled: G.value, field: "v-switch", loading: $.value, loadingWait: a.loadingWait, tableField: a.tableField })), J = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-switch" })), R = ca({ density: a.density }), z = v(() => Ht({ active: T.value, name: "switch" })), D = v(() => jl("switch", a.valueColor, { error: O })), x = v(() => Kt({ name: "switch", showField: T.value })), K = v(() => ({})), te = v(() => Gl({ color: a.color, error: O, theme: s, underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined })), re = v(() => pe.value);
  function Q() {
    O.value = !1, ae();
  }
  const pe = W(), de = W(null), he = W("body");
  function ae() {
    var ie, ye;
    if (G.value || a.loadingWait && $.value)
      return;
    pe.value = xt({ cardMinWidth: (ie = a.cardProps) == null ? void 0 : ie.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (ye = a.cardProps) == null ? void 0 : ye.width, field: de.value });
    const be = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: T.value, timeOpened: B.value });
    T.value = be.showField, B.value = be.timeOpened, xe !== null && I.value && T.value && !a.fieldOnly && xe.emit(be.timeOpened);
  }
  function Be(be) {
    t.value = be, i("update", be), a.loadingWait || ae();
  }
  let xe, Pe;
  function Ee(be) {
    i("update:closeSiblingFields", B), T.value && B.value !== be && ae();
  }
  return I.value && import("@vueuse/core").then(({ useEventBus: be }) => {
    xe = be(jt), Pe = xe.on(Ee);
  }), Nt(() => {
    Pe !== void 0 && xe.off(Ee);
  }), (be, ie) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: de, class: le(r(q)), style: We(r(K)) }, [!r(T) && !r(a).fieldOnly || r(a).cardField ? (Z(), fe("div", { key: 0, class: le(r(J)), onClick: ie[2] || (ie[2] = (ye) => r(a).cell ? ae() : void 0) }, [je("div", { class: le(r(R)), onClick: ie[1] || (ie[1] = (ye) => r(a).cell ? void 0 : ae()) }, [je("div", Es, [r(a).icons ? (Z(), fe("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(D)]), style: We(r(te)) }, [d(ki, { modelValue: r(X), "onUpdate:modelValue": ie[0] || (ie[0] = (ye) => Mt(X) ? X.value = ye : null), "icon-false": r(a).iconFalse, "icon-false-color": r(a).iconFalseColor, "icon-false-title": r(a).iconFalseTitle, "icon-true": r(a).iconTrue, "icon-true-color": r(a).iconTrueColor, "icon-true-title": r(a).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), fe("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(D)]), style: We(r(te)) }, Ll(r(j)), 7))])], 2)], 2)) : Fe("", !0), r(T) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(r(z)) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(he) }, [d(As, ee(r(A), { color: r(F), density: r(a).density, disabled: r($) || r(G), error: r(O), "false-icon": r(a).falseIcon, "false-value": r(a).falseValue, "hide-details": r(w), label: r(a).label, loading: r($), "model-value": r(X), "true-value": r(a).trueValue, "onUpdate:modelValue": Be }), rt({ _: 2 }, [st(r(o), (ye, Oe) => ({ name: Oe, fn: Ce((_e) => [Ue(be.$slots, Oe, $e(Re({ ..._e })))]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), class: "ms-3", error: r(O), "field-only": r(V), "hide-cancel-icon": r(N), "hide-save-icon": !0, loading: r($), "loading-icon": r(L), "loading-icon-color": r(M), "save-button-color": r(E), "save-button-size": r(S), "save-button-title": r(k), "save-button-variant": r(C), "save-icon": r(_), "save-icon-color": r(P), onClose: Q, onSave: Be }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(x)), style: We(r(re)) }, [d(en, $e(Re(r(U))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: he }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), Ds = ct({ __name: "VInlineTextField", props: Ye(Rt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...ua }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, color: F, fieldOnly: V, hideCancelIcon: N, hideDetails: w, hideSaveIcon: L, loadingIcon: M, loadingIconColor: E, saveButtonColor: S, saveButtonSize: k, saveButtonTitle: C, saveButtonVariant: _, saveIcon: P, saveIconColor: G } = Ft(a), $ = v(() => u.disabled), O = v(() => u.loading), T = W(!1), B = W(!1), A = W(!1), U = W(null);
  let j = t.value;
  Y(() => O.value, (se, De) => {
    !se && De && A.value && xe();
  });
  const X = v(() => it({ icon: u.clearIcon, iconOptions: s, name: "clear" })), q = v(() => t.value ? (T.value = !1, a.truncateLength ? lo({ length: a.truncateLength, suffix: a.truncateSuffix, text: t.value }) : t.value) : (T.value = !0, a.emptyText)), J = v(() => gn(a)), R = v(() => ({ color: a.color, displayAppendIcon: a.displayAppendIcon, displayAppendIconColor: a.displayAppendIconColor, displayAppendIconSize: a.displayAppendIconSize, displayAppendInnerIcon: a.displayAppendInnerIcon, displayAppendInnerIconColor: a.displayAppendInnerIconColor, displayAppendInnerIconSize: a.displayAppendInnerIconSize, displayPrependIcon: a.displayPrependIcon, displayPrependIconColor: a.displayPrependIconColor, displayPrependIconSize: a.displayPrependIconSize, displayPrependInnerIcon: a.displayPrependInnerIcon, displayPrependInnerIconColor: a.displayPrependInnerIconColor, displayPrependInnerIconSize: a.displayPrependInnerIconSize, displayValue: q.value, empty: T.value, error: B.value, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor })), z = v(() => ({ ...Gt, ...u.cardProps })), D = v(() => Ut({ cell: a.cell && !A.value, density: a.density, disabled: $.value, field: "v-text-field", iconSet: s == null ? void 0 : s.defaultSet, loading: O.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), x = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-text-field" })), K = Pn({ density: a.density, variant: a.variant }), te = v(() => Ht({ active: A.value, name: "text-field" })), re = v(() => Kt({ name: "text-field", showField: A.value })), Q = v(() => ({})), pe = v(() => he.value);
  function de() {
    B.value = !1, t.value = j, xe();
  }
  const he = W(), ae = W(null), Be = W("body");
  function xe() {
    var De, ne;
    if ($.value || a.loadingWait && O.value)
      return;
    he.value = xt({ cardMinWidth: (De = a.cardProps) == null ? void 0 : De.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (ne = a.cardProps) == null ? void 0 : ne.width, field: ae.value });
    const se = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: A, timeOpened: U.value });
    A.value = se.showField, U.value = se.timeOpened, ye !== null && I.value && A.value && !a.fieldOnly && ye.emit(se.timeOpened);
  }
  const Pe = W(), Ee = v(() => Pe.value);
  function be() {
    const se = Nn({ required: a.required, rules: a.rules, value: t });
    return B.value = se.errors, Pe.value = se.results, se.results;
  }
  function ie() {
    B.value ? B.value = !0 : (j = t.value, i("update", t.value), a.loadingWait || xe());
  }
  let ye, Oe;
  function _e(se) {
    i("update:closeSiblingFields", U), A.value && U.value !== se && de();
  }
  return Y(() => A.value, () => {
    A.value && be();
  }), Y(() => t.value, () => {
    A.value && be();
  }), I.value && import("@vueuse/core").then(({ useEventBus: se }) => {
    ye = se(jt), Oe = ye.on(_e);
  }), Nt(() => {
    Oe !== void 0 && ye.off(_e);
  }), (se, De) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: ae, class: le(r(D)), style: We(r(Q)) }, [!r(A) && !r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 0, class: le(r(x)) }, [je("div", { class: le(r(K)) }, [d(Dn, ee(r(R), { onToggleField: xe }), rt({ _: 2 }, [st(r(o), (ne, ke) => ({ name: ke, fn: Ce((Le) => [Ue(se.$slots, ke, $e(Re({ ...Le })))]) }))]), 1040)], 2)], 2)) : Fe("", !0), r(A) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(r(te)) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(Be) }, [d(Vn, ee(r(J), { modelValue: t.value, "onUpdate:modelValue": De[0] || (De[0] = (ne) => t.value = ne), autofocus: !r(a).fieldOnly || r(a).autofocus, "clear-icon": r(X), color: r(F), density: r(a).density, disabled: r(O) || r($), error: r(B), "error-messages": r(Ee), "hide-details": r(w), label: r(a).label, loading: r(O), variant: r(a).variant, width: "100%", onKeyup: [Bn(ie, ["enter"]), Bn(de, ["esc"])] }), rt({ _: 2 }, [st(r(o), (ne, ke) => ({ name: ke, fn: Ce((Le) => [Ue(se.$slots, ke, $e(Re({ ...Le })))]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), error: r(B), "field-only": r(V), "hide-cancel-icon": r(N), "hide-save-icon": r(L), loading: r(O), "loading-icon": r(M), "loading-icon-color": r(E), "save-button-color": r(S), "save-button-size": r(k), "save-button-title": r(C), "save-button-variant": r(_), "save-icon": r(P), "save-icon-color": r(G), onClose: de, onSave: ie }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(re)), style: We(r(pe)) }, [d(en, $e(Re(r(z))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: Be }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), Ls = ct({ __name: "VInlineTextarea", props: Ye(Rt({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Di }), { modelValue: {}, modelModifiers: {} }), emits: Ye([...Zt], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = _t(e, "modelValue"), l = gt(), o = At(), i = n, c = Ie(Tt, {}), s = Ie(Symbol.for("vuetify:icons")), u = e, a = Qe({ ...l, ...u, ...c });
  ze(() => {
    Object.assign(a, { ...l, ...u, ...c });
  });
  const { cancelButtonColor: p, cancelButtonSize: f, cancelButtonTitle: y, cancelButtonVariant: g, cancelIcon: b, cancelIconColor: m, cardField: h, closeSiblings: I, color: F, fieldOnly: V, hideCancelIcon: N, hideDetails: w, hideSaveIcon: L, loadingIcon: M, loadingIconColor: E, saveButtonColor: S, saveButtonSize: k, saveButtonTitle: C, saveButtonVariant: _, saveIcon: P, saveIconColor: G } = Ft(a), $ = v(() => u.disabled), O = v(() => u.loading), T = W(!1), B = W(!1), A = W(!1), U = W(null);
  let j = t.value;
  Y(() => O.value, (se, De) => {
    !se && De && A.value && xe();
  });
  const X = v(() => it({ icon: u.clearIcon, iconOptions: s, name: "clear" })), q = v(() => t.value ? (T.value = !1, a.truncateLength ? lo({ length: a.truncateLength, suffix: a.truncateSuffix, text: t.value }) : t.value) : (T.value = !0, a.emptyText)), J = v(() => gn(a)), R = v(() => ({ color: a.color, displayAppendIcon: a.displayAppendIcon, displayAppendIconColor: a.displayAppendIconColor, displayAppendIconSize: a.displayAppendIconSize, displayAppendInnerIcon: a.displayAppendInnerIcon, displayAppendInnerIconColor: a.displayAppendInnerIconColor, displayAppendInnerIconSize: a.displayAppendInnerIconSize, displayPrependIcon: a.displayPrependIcon, displayPrependIconColor: a.displayPrependIconColor, displayPrependIconSize: a.displayPrependIconSize, displayPrependInnerIcon: a.displayPrependInnerIcon, displayPrependInnerIconColor: a.displayPrependInnerIconColor, displayPrependInnerIconSize: a.displayPrependInnerIconSize, displayValue: q.value, empty: T.value, error: B.value, field: "v-text-field", underlineColor: a.underlineColor, underlineStyle: a.underlineStyle, underlineWidth: a.underlineWidth, underlined: a.underlined, valueColor: a.valueColor })), z = v(() => ({ ...Gt, ...u.cardProps })), D = v(() => Ut({ cell: a.cell && !A.value, density: a.density, disabled: $.value, field: "v-textarea", iconSet: s == null ? void 0 : s.defaultSet, loading: O.value, loadingWait: a.loadingWait, tableField: a.tableField, variant: a.variant })), x = v(() => qt({ cell: a.cell, cellUnderlineFullWidth: a.cellUnderlineFullWidth, density: a.density, field: "v-textarea" })), K = Pn({ density: a.density, variant: a.variant }), te = v(() => Ht({ active: A.value, name: "textarea" })), re = v(() => Kt({ name: "textarea", showField: A.value })), Q = v(() => ({})), pe = v(() => he.value);
  function de() {
    B.value = !1, t.value = j, xe();
  }
  const he = W(), ae = W(null), Be = W("body");
  function xe() {
    var De, ne;
    if ($.value || a.loadingWait && O.value)
      return;
    he.value = xt({ cardMinWidth: (De = a.cardProps) == null ? void 0 : De.minWidth, cardOffsetX: a.cardOffsetX, cardOffsetY: a.cardOffsetY, cardWidth: (ne = a.cardProps) == null ? void 0 : ne.width, field: ae.value });
    const se = Qt({ attrs: l, closeSiblings: I.value, fieldOnly: a.fieldOnly, props: u, showField: A, timeOpened: U.value });
    A.value = se.showField, U.value = se.timeOpened, ye !== null && I.value && A.value && !a.fieldOnly && ye.emit(se.timeOpened);
  }
  const Pe = W(), Ee = v(() => Pe.value);
  function be() {
    const se = Nn({ required: a.required, rules: a.rules, value: t });
    return B.value = se.errors, Pe.value = se.results, se.results;
  }
  function ie() {
    j = t.value, i("update", t.value), a.loadingWait || xe();
  }
  let ye, Oe;
  function _e(se) {
    i("update:closeSiblingFields", U), A.value && U.value !== se && de();
  }
  return Y(() => A.value, () => {
    A.value && be();
  }), Y(() => t.value, () => {
    A.value && be();
  }), I.value && import("@vueuse/core").then(({ useEventBus: se }) => {
    ye = se(jt), Oe = ye.on(_e);
  }), Nt(() => {
    Oe !== void 0 && ye.off(_e);
  }), (se, De) => (Z(), fe("div", { ref_key: "inlineFieldsContainer", ref: ae, class: le(r(D)), style: We(r(Q)) }, [!r(A) && !r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 0, class: le(r(x)) }, [je("div", { class: le(r(K)) }, [d(Dn, ee(r(R), { onToggleField: xe }), rt({ _: 2 }, [st(r(o), (ne, ke) => ({ name: ke, fn: Ce((Le) => [Ue(se.$slots, ke, $e(Re({ ...Le })))]) }))]), 1040)], 2)], 2)) : Fe("", !0), r(A) || r(a).fieldOnly || r(h) ? (Z(), fe("div", { key: 1, class: le(r(te)) }, [(Z(), Me(Vt, { disabled: !r(h), to: r(Be) }, [d(_s, ee(r(J), { modelValue: t.value, "onUpdate:modelValue": De[0] || (De[0] = (ne) => t.value = ne), "auto-grow": r(a).autoGrow, autofocus: !r(a).fieldOnly || r(a).autofocus, "clear-icon": r(X), color: r(F), density: r(a).density, disabled: r(O) || r($), error: r(B), "error-messages": r(Ee), "hide-details": r(w), label: r(a).label, loading: r(O), rows: r(a).rows, variant: r(a).variant, width: "100%", onKeyup: Bn(de, ["esc"]) }), rt({ _: 2 }, [st(r(o), (ne, ke) => ({ name: ke, fn: Ce((Le) => [Ue(se.$slots, ke, $e(Re({ ...Le })))]) })), r(o).append ? void 0 : { name: "append", fn: Ce(() => [d(Jt, { "cancel-button-color": r(p), "cancel-button-size": r(f), "cancel-button-title": r(y), "cancel-button-variant": r(g), "cancel-icon": r(b), "cancel-icon-color": r(m), error: r(B), "field-only": r(V), "hide-cancel-icon": r(N), "hide-save-icon": r(L), loading: r(O), "loading-icon": r(M), "loading-icon-color": r(E), "save-button-color": r(S), "save-button-size": r(k), "save-button-title": r(C), "save-button-variant": r(_), "save-icon": r(P), "save-icon-color": r(G), onClose: de, onSave: ie }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : Fe("", !0), r(h) ? (Z(), fe("div", { key: 2, class: le(r(re)), style: We(r(pe)) }, [d(en, $e(Re(r(z))), { default: Ce(() => [d($t, null, { default: Ce(() => [je("div", { ref_key: "cardFieldRef", ref: Be }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Fe("", !0)], 6));
} }), la = Object.freeze(Object.defineProperty({ __proto__: null, VInlineAutocomplete: ws, VInlineCheckbox: Ps, VInlineCustomField: $s, VInlineSelect: Ts, VInlineSwitch: zs, VInlineTextField: Ds, VInlineTextarea: Ls }, Symbol.toStringTag, { value: "Module" })), Tt = Symbol();
function Ns(e = {}) {
  return { install: (n) => {
    n.provide(Tt, e);
    for (const t in la)
      n.component(t, la[t]);
  } };
}
export {
  ws as VInlineAutocomplete,
  Ps as VInlineCheckbox,
  $s as VInlineCustomField,
  Ts as VInlineSelect,
  zs as VInlineSwitch,
  Ds as VInlineTextField,
  Ls as VInlineTextarea,
  Ns as createVInlineFields,
  la as default,
  Tt as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-37dafea1] .v-field__field,[data-v-4f65a7ea] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
