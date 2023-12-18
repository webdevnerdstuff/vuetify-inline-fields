import { unref as r, Fragment as Fe, reactive as lt, computed as v, watchEffect as it, toRefs as Bt, capitalize as ea, isVNode as gi, Comment as hi, warn as ll, inject as me, ref as D, provide as tt, shallowRef as de, defineComponent as rt, camelize as ta, h as ol, getCurrentInstance as bi, isRef as _t, createVNode as d, toRef as ae, watch as J, onScopeDispose as He, effectScope as zl, toRaw as It, onBeforeUnmount as yt, onMounted as qt, mergeProps as Q, Text as Ci, readonly as Dl, Transition as At, resolveDynamicComponent as Ii, nextTick as Me, withDirectives as Ue, resolveDirective as mt, useAttrs as Ot, openBlock as Z, createElementBlock as ce, createBlock as De, withCtx as be, normalizeClass as oe, createCommentVNode as xe, TransitionGroup as Si, onBeforeMount as na, vShow as Ht, Teleport as Pt, cloneVNode as Bi, createTextVNode as la, vModelText as xi, mergeModels as Qe, useModel as $t, mergeDefaults as Yt, useSlots as Et, onUnmounted as Xt, normalizeStyle as Te, createElementVNode as Ge, toDisplayString as Ll, createSlots as pt, renderList as vt, renderSlot as Ye, normalizeProps as Pe, guardReactiveProps as Re, withKeys as Gn } from "vue";
import { useTheme as Wl } from "vuetify";
import { useWindowSize as ki } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.4
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Kt = Symbol("identifier"), Jt = { elevation: 5, variant: "flat" }, Bn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", error: !1, fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Ml = { autofocus: !0 }, xn = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, oa = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, wi = { ...Bn, ...oa, ...xn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, Fi = { ...Bn, ...Ml, ...xn, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, Ai = { ...Bn, ...oa, ...xn, icons: !0, falseIcon: "" }, Vi = { ...Ml, ...xn, ...Bn, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, aa = { ...Bn, ...Ml, ...xn, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, re = "v-inline-fields", Zt = (e) => {
  const { cell: n = !1, field: t = "", density: l = "", disabled: o = !1, iconSet: a = "mdi", loading: c = !1, loadingWait: u, tableField: s = !1, variant: i } = e, p = l && i;
  return { [`${re}`]: !0, [`${re}--container`]: !0, [`${re}--container-cell`]: n, [`${re}--container-disabled`]: r(o), [`${re}--container-table`]: s, [`${re}--container-icon-set-${a}`]: !0, [`${re}--container-loading`]: c && u, [`${re}--container-${t}`]: !0, [`${re}--container-${t}-${l}`]: !0, [`${re}--container-${t}-${l}-${i}`]: p, [`${re}--container-${t}-${i}`]: i, [`${re}--container-${t}-${i}-${l}`]: p, [`${re}--container-${l}`]: l, [`${re}--container-${l}-${t}`]: l, [`${re}--container-${l}-${i}`]: p, [`${re}--container-${i}`]: i, [`${re}--container-${i}-${l}`]: p, [`${re}--container-${i}-${t}`]: i };
}, Qt = (e) => {
  const { cell: n = !1, cellUnderlineFullWidth: t = !0, field: l = "", density: o = "" } = e;
  return { [`${re}--display-container-cell`]: n, [`${re}--display-container-cell-underline-full-width`]: n && t, [`${re}--display-container`]: !0, [`${re}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${o}`]: !0, "v-input--horizontal": !0 };
}, al = (e) => {
  const { density: n = "", variant: t = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${n}`]: !0, [`v-text-field--plain-${t}`]: !0 };
}, ia = (e) => {
  const { density: n = "" } = e;
  return { [`${re}--selection-control`]: !0, [`v-selection-control--density-${n}`]: !0 };
}, Rl = (e, n, t) => {
  const { error: l = !1, empty: o = !1 } = t;
  return { [`${re}`]: !0, [`${re}--display-value-${e}`]: !0, [`${re}--display-value`]: !0, [`${re}--display-value-empty`]: r(o), [`text-${n}`]: !r(l), "text-danger": r(l) };
}, en = (e) => {
  const { name: n, active: t = !1 } = e;
  return { [`${re}`]: !0, [`${re}--field`]: !0, [`${re}--field-${n}`]: !0, [`${re}--field-active`]: t };
}, tn = (e) => {
  const { name: n, showField: t } = e;
  return { [`${re}--card-container`]: !0, [`${re}--card-container-${n}`]: !0, "d-none": !t };
}, _i = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, ot = (e) => {
  const { icon: n, iconOptions: t, name: l } = e;
  if (n)
    return n;
  const o = _i[t == null ? void 0 : t.defaultSet];
  if (!o)
    throw new Error(`VInlineFields: No VInlineFields default ${t == null ? void 0 : t.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const a = o[l];
  if (!a)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return a;
}, Ke = typeof window < "u", Nl = Ke && "IntersectionObserver" in window;
function io(e, n, t) {
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
function nn(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => nn(e[l], n[l]));
}
function ct(e, n, t) {
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
    return function(o, a, c) {
      return o != null && a && typeof a == "string" ? o[a] !== void 0 ? o[a] : io(o, (a = (a = a.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, n, t);
  if (Array.isArray(n))
    return io(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function ie(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Sl(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Un(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const ro = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function vl(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function ra(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const o of n)
    l.has(o) && (t[o] = e[o]);
  return t;
}
function so(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  for (const a in e)
    n.some((c) => c instanceof RegExp ? c.test(a) : c === a) && !(t != null && t.some((c) => c === a)) ? l[a] = e[a] : o[a] = e[a];
  return [l, o];
}
function Tt(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const sa = /^on[^a-z]/, Bl = (e) => sa.test(e), Oi = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function kn(e) {
  const [n, t] = so(e, [sa]), l = Tt(n, Oi), [o, a] = so(t, ["class", "style", "id", /^data-/]);
  return Object.assign(o, n), Object.assign(a, l), [o, a];
}
function dt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function jt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function uo(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function Rt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const o in e)
    l[o] = e[o];
  for (const o in n) {
    const a = e[o], c = n[o];
    Sl(a) && Sl(c) ? l[o] = Rt(a, c, t) : Array.isArray(a) && Array.isArray(c) && t ? l[o] = t(a, c) : l[o] = c;
  }
  return l;
}
function ua(e) {
  return e.map((n) => n.type === Fe ? ua(n.children) : n).flat();
}
function kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (kt.cache.has(e))
    return kt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return kt.cache.set(e, n), n;
}
function Rn(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => Rn(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => Rn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Rn(e, n.component.subTree).flat(1);
  }
  return [];
}
function jl(e) {
  const n = lt({}), t = v(e);
  return it(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), Bt(n);
}
function qn(e, n) {
  return e.includes(n);
}
function co(e) {
  return e[2].toLowerCase() + e.slice(3);
}
kt.cache = /* @__PURE__ */ new Map();
const at = () => [Function, Array];
function po(e, n) {
  return !!(e[n = "on" + ea(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ca(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const o of e)
      o(...t);
  else
    typeof e == "function" && e(...t);
}
function xl(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function da(e, n, t) {
  let l, o = e.indexOf(document.activeElement);
  const a = n === "next" ? 1 : -1;
  do
    o += a, l = e[o];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && o < e.length && o >= 0);
  return l;
}
function Hn(e, n) {
  var l, o, a, c;
  const t = xl(e);
  if (n)
    if (n === "first")
      (l = t[0]) == null || l.focus();
    else if (n === "last")
      (o = t.at(-1)) == null || o.focus();
    else if (typeof n == "number")
      (a = t[n]) == null || a.focus();
    else {
      const u = da(t, n);
      u ? u.focus() : Hn(e, n === "next" ? "first" : "last");
    }
  else
    e !== document.activeElement && e.contains(document.activeElement) || ((c = t[0]) == null || c.focus());
}
function Yn(e, n) {
  if (!(Ke && typeof CSS < "u" && CSS.supports !== void 0 && CSS.supports(`selector(${n})`)))
    return null;
  try {
    return !!e && e.matches(n);
  } catch {
    return null;
  }
}
function pa(e) {
  return e.some((n) => !gi(n) || n.type !== hi && (n.type !== Fe || pa(n.children))) ? e : null;
}
const va = ["top", "bottom"], Pi = ["start", "end", "left", "right"];
function kl(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = qn(va, t) ? "start" : qn(Pi, t) ? "top" : "center"), { side: vo(t, n), align: vo(l, n) };
}
function vo(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
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
  return qn(va, e.side) ? "y" : "x";
}
class wt {
  constructor(n) {
    let { x: t, y: l, width: o, height: a } = n;
    this.x = t, this.y = l, this.width = o, this.height = a;
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
function mo(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function fa(e) {
  return Array.isArray(e) ? new wt({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function Gl(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let o, a, c, u, s;
    if (l.startsWith("matrix3d("))
      o = l.slice(9, -1).split(/, /), a = +o[0], c = +o[5], u = +o[12], s = +o[13];
    else {
      if (!l.startsWith("matrix("))
        return new wt(n);
      o = l.slice(7, -1).split(/, /), a = +o[0], c = +o[3], u = +o[4], s = +o[5];
    }
    const i = t.transformOrigin, p = n.x - u - (1 - a) * parseFloat(i), y = n.y - s - (1 - c) * parseFloat(i.slice(i.indexOf(" ") + 1)), f = a ? n.width / a : e.offsetWidth + 1, m = c ? n.height / c : e.offsetHeight + 1;
    return new wt({ x: p, y, width: f, height: m });
  }
  return new wt(n);
}
function Nt(e, n, t) {
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
const Dn = /* @__PURE__ */ new WeakMap(), Mt = 2.4, go = 0.2126729, ho = 0.7151522, bo = 0.072175, $i = 0.55, Ei = 0.58, Ti = 0.57, zi = 0.62, Ln = 0.03, Co = 1.45, Di = 5e-4, Li = 1.25, Wi = 1.25, Io = 0.078, So = 12.82051282051282, Wn = 0.06, Bo = 1e-3;
function xo(e, n) {
  const t = (e.r / 255) ** Mt, l = (e.g / 255) ** Mt, o = (e.b / 255) ** Mt, a = (n.r / 255) ** Mt, c = (n.g / 255) ** Mt, u = (n.b / 255) ** Mt;
  let s, i = t * go + l * ho + o * bo, p = a * go + c * ho + u * bo;
  if (i <= Ln && (i += (Ln - i) ** Co), p <= Ln && (p += (Ln - p) ** Co), Math.abs(p - i) < Di)
    return 0;
  if (p > i) {
    const y = (p ** $i - i ** Ei) * Li;
    s = y < Bo ? 0 : y < Io ? y - y * So * Wn : y - Wn;
  } else {
    const y = (p ** zi - i ** Ti) * Wi;
    s = y > -Bo ? 0 : y > -Io ? y - y * So * Wn : y + Wn;
  }
  return 100 * s;
}
function gn(e) {
  ll(`Vuetify: ${e}`);
}
function ml(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const ko = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Mi = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => wo({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => wo({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => hn({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => hn({ h: e, s: n, v: t, a: l }) };
function fn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && gn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && ko.test(e)) {
    const { groups: n } = e.match(ko), { fn: t, values: l } = n, o = l.split(/,\s*/).map((a) => a.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(a) / 100 : parseFloat(a));
    return Mi[t](...o);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || gn(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && gn(`'${e}' is not a valid hex(a) color`), function(l) {
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
    }(n);
  }
  if (typeof e == "object") {
    if (vl(e, ["r", "g", "b"]))
      return e;
    if (vl(e, ["h", "s", "l"]))
      return hn(ya(e));
    if (vl(e, ["h", "s", "v"]))
      return hn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function hn(e) {
  const { h: n, s: t, v: l, a: o } = e, a = (u) => {
    const s = (u + n / 60) % 6;
    return l - l * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, c = [a(5), a(3), a(1)].map((u) => Math.round(255 * u));
  return { r: c[0], g: c[1], b: c[2], a: o };
}
function wo(e) {
  return hn(ya(e));
}
function ya(e) {
  const { h: n, s: t, l, a: o } = e, a = l + t * Math.min(l, 1 - l);
  return { h: n, s: a === 0 ? 0 : 2 - 2 * l / a, v: a, a: o };
}
function H(e, n) {
  return (t) => Object.keys(e).reduce((l, o) => {
    const a = typeof e[o] == "object" && e[o] != null && !Array.isArray(e[o]) ? e[o] : { type: e[o] };
    return l[o] = t && o in t ? { ...a, default: t[o] } : a, n && !l[o].source && (l[o].source = n), l;
  }, {});
}
const ye = H({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Xn = Symbol.for("vuetify:defaults");
function Ul() {
  const e = me(Xn);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function ln(e, n) {
  const t = Ul(), l = D(e), o = v(() => {
    if (r(n == null ? void 0 : n.disabled))
      return t.value;
    const a = r(n == null ? void 0 : n.scoped), c = r(n == null ? void 0 : n.reset), u = r(n == null ? void 0 : n.root);
    if (l.value == null && !(a || c || u))
      return t.value;
    let s = Rt(l.value, { prev: t.value });
    if (a)
      return s;
    if (c || u) {
      const i = Number(c || 1 / 0);
      for (let p = 0; p <= i && s && "prev" in s; p++)
        s = s.prev;
      return s && typeof u == "string" && u in s && (s = Rt(Rt(s, { prev: s }), s[u])), s;
    }
    return s.prev ? Rt(s.prev, s) : s;
  });
  return tt(Xn, o), o;
}
function Ri() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ul();
  const l = We("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const o = v(() => {
    var u;
    return (u = t.value) == null ? void 0 : u[e._as ?? n];
  }), a = new Proxy(e, { get(u, s) {
    var p, y, f, m;
    const i = Reflect.get(u, s);
    return s === "class" || s === "style" ? [(p = o.value) == null ? void 0 : p[s], i].filter((h) => h != null) : typeof s != "string" || function(h, b) {
      var g, I;
      return ((g = h.props) == null ? void 0 : g[b]) !== void 0 || ((I = h.props) == null ? void 0 : I[kt(b)]) !== void 0;
    }(l.vnode, s) ? i : ((y = o.value) == null ? void 0 : y[s]) ?? ((m = (f = t.value) == null ? void 0 : f.global) == null ? void 0 : m[s]) ?? i;
  } }), c = de();
  return it(() => {
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
      let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : We("injectSelf");
      const { provides: p } = i;
      if (p && s in p)
        return p[s];
    }(Xn, l);
    tt(Xn, v(() => c.value ? Rt((u == null ? void 0 : u.value) ?? {}, c.value) : u == null ? void 0 : u.value));
  } };
}
function bn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return gn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = H(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return ra(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const o = Ul();
      if (!o.value)
        return e._setup(t, l);
      const { props: a, provideSubDefaults: c } = Ri(t, t._as ?? e.name, o), u = e._setup(a, l);
      return c(), u;
    };
  }
  return e;
}
function ee() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? bn : rt)(n);
}
function wn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return ee()({ name: t ?? ea(ta(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ye() }, setup(l, o) {
    let { slots: a } = o;
    return () => {
      var c;
      return ol(l.tag, { class: [e, l.class], style: l.style }, (c = a.default) == null ? void 0 : c.call(a));
    };
  } });
}
function ma(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const Kn = "cubic-bezier(0.4, 0, 0.2, 1)";
function We(e, n) {
  const t = bi();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function st() {
  const e = We(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return kt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let ga = 0, Nn = /* @__PURE__ */ new WeakMap();
function nt() {
  const e = We("getUid");
  if (Nn.has(e))
    return Nn.get(e);
  {
    const n = ga++;
    return Nn.set(e, n), n;
  }
}
function ha(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? Ni(e) : ql(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Jn(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (ql(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function ql(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function Ni(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function se(e) {
  We("useRender").render = e;
}
nt.reset = () => {
  ga = 0, Nn = /* @__PURE__ */ new WeakMap();
};
const on = H({ border: [Boolean, Number, String] }, "border");
function an(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { borderClasses: v(() => {
    const t = _t(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`border-${o}`);
    return l;
  }) };
}
const ji = [null, "default", "comfortable", "compact"], ut = H({ density: { type: String, default: "default", validator: (e) => ji.includes(e) } }, "density");
function gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { densityClasses: v(() => `${n}--density-${e.density}`) };
}
const rn = H({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function sn(e) {
  return { elevationClasses: v(() => {
    const n = _t(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const ht = H({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function bt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { roundedClasses: v(() => {
    const t = _t(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const o of String(t).split(" "))
        l.push(`rounded-${o}`);
    return l;
  }) };
}
const et = H({ tag: { type: String, default: "div" } }, "tag"), Fo = Symbol.for("vuetify:theme"), Ne = H({ theme: String }, "theme");
function Xe(e) {
  We("provideTheme");
  const n = me(Fo, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = v(() => e.theme ?? n.name.value), l = v(() => n.themes.value[t.value]), o = v(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), a = { ...n, name: t, current: l, themeClasses: o };
  return tt(Fo, a), a;
}
function Hl(e) {
  return jl(() => {
    const n = [], t = {};
    if (e.value.background)
      if (ml(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && ml(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const o = fn(e.value.background);
          if (o.a == null || o.a === 1) {
            const a = function(c) {
              const u = Math.abs(xo(fn(0), fn(c)));
              return Math.abs(xo(fn(16777215), fn(c))) > Math.min(u, 50) ? "#fff" : "#000";
            }(o);
            t.color = a, t.caretColor = a;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (ml(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function ft(e, n) {
  const t = v(() => ({ text: _t(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = Hl(t);
  return { textColorClasses: l, textColorStyles: o };
}
function Gt(e, n) {
  const t = v(() => ({ background: _t(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: o } = Hl(t);
  return { backgroundColorClasses: l, backgroundColorStyles: o };
}
const Gi = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Fn(e, n) {
  return d(Fe, null, [e && d("span", { key: "overlay", class: `${n}__overlay` }, null), d("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const xt = H({ color: String, variant: { type: String, default: "elevated", validator: (e) => Gi.includes(e) } }, "variant");
function An(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = v(() => {
    const { variant: a } = r(e);
    return `${n}--variant-${a}`;
  }), { colorClasses: l, colorStyles: o } = Hl(v(() => {
    const { variant: a, color: c } = r(e);
    return { [["elevated", "flat"].includes(a) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: o, variantClasses: t };
}
const ba = H({ divided: Boolean, ...on(), ...ye(), ...ut(), ...rn(), ...ht(), ...et(), ...Ne(), ...xt() }, "VBtnGroup"), Ao = ee()({ name: "VBtnGroup", props: ba(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { densityClasses: o } = gt(e), { borderClasses: a } = an(e), { elevationClasses: c } = sn(e), { roundedClasses: u } = bt(e);
  ln({ VBtn: { height: "auto", color: ae(e, "color"), density: ae(e, "density"), flat: !0, variant: ae(e, "variant") } }), se(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, a.value, o.value, c.value, u.value, e.class], style: e.style }, t));
} });
function Ft(e, n) {
  let t;
  function l() {
    t = zl(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  J(e, (o) => {
    o && !t ? l() : o || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), He(() => {
    t == null || t.stop();
  });
}
function $e(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (p) => p, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (p) => p;
  const a = We("useProxiedModel"), c = D(e[n] !== void 0 ? e[n] : t), u = kt(n), s = v(u !== n ? () => {
    var p, y, f, m;
    return e[n], !(!((p = a.vnode.props) != null && p.hasOwnProperty(n)) && !((y = a.vnode.props) != null && y.hasOwnProperty(u)) || !((f = a.vnode.props) != null && f.hasOwnProperty(`onUpdate:${n}`)) && !((m = a.vnode.props) != null && m.hasOwnProperty(`onUpdate:${u}`)));
  } : () => {
    var p, y;
    return e[n], !(!((p = a.vnode.props) != null && p.hasOwnProperty(n)) || !((y = a.vnode.props) != null && y.hasOwnProperty(`onUpdate:${n}`)));
  });
  Ft(() => !s.value, () => {
    J(() => e[n], (p) => {
      c.value = p;
    });
  });
  const i = v({ get() {
    const p = e[n];
    return l(s.value ? p : c.value);
  }, set(p) {
    const y = o(p), f = It(s.value ? e[n] : c.value);
    f !== y && l(f) !== p && (c.value = y, a == null || a.emit(`update:${n}`, y));
  } });
  return Object.defineProperty(i, "externalValue", { get: () => s.value ? e[n] : c.value }), i;
}
const Ca = H({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), Ia = H({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function Sa(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = We("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const o = nt();
  tt(Symbol.for(`${n.description}:id`), o);
  const a = me(n, null);
  if (!a) {
    if (!t)
      return a;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const c = ae(e, "value"), u = v(() => !(!a.disabled.value && !e.disabled));
  a.register({ id: o, value: c, disabled: u }, l), yt(() => {
    a.unregister(o);
  });
  const s = v(() => a.isSelected(o)), i = v(() => s.value && [a.selectedClass.value, e.selectedClass]);
  return J(s, (p) => {
    l.emit("group:selected", { value: p });
  }), { id: o, isSelected: s, toggle: () => a.select(o, !s.value), select: (p) => a.select(o, p), selectedClass: i, value: c, disabled: u, group: a };
}
function Ba(e, n) {
  let t = !1;
  const l = lt([]), o = $e(e, "modelValue", [], (i) => i == null ? [] : Vo(l, dt(i)), (i) => {
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
  }), a = We("useGroup");
  function c() {
    const i = l.find((p) => !p.disabled);
    i && e.mandatory === "force" && !o.value.length && (o.value = [i.id]);
  }
  function u(i) {
    if (e.multiple && gn('This method is not supported when using "multiple" prop'), o.value.length) {
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
  qt(() => {
    c();
  }), yt(() => {
    t = !0;
  });
  const s = { register: function(i, p) {
    const y = i, f = Rn(Symbol.for(`${n.description}:id`), a == null ? void 0 : a.vnode).indexOf(p);
    f > -1 ? l.splice(f, 0, y) : l.push(y);
  }, unregister: function(i) {
    if (t)
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
  }, disabled: ae(e, "disabled"), prev: () => u(l.length - 1), next: () => u(1), isSelected: (i) => o.value.includes(i), selectedClass: v(() => e.selectedClass), items: v(() => l), getItemIndex: (i) => function(p, y) {
    const f = Vo(p, [y]);
    return f.length ? p.findIndex((m) => m.id === f[0]) : -1;
  }(l, i) };
  return tt(n, s), s;
}
function Vo(e, n) {
  const t = [];
  return n.forEach((l) => {
    const o = e.find((c) => nn(l, c.value)), a = e[l];
    (o == null ? void 0 : o.value) != null ? t.push(o.id) : a != null && t.push(a.id);
  }), t;
}
const xa = Symbol.for("vuetify:v-btn-toggle"), Ui = H({ ...ba(), ...Ca() }, "VBtnToggle");
ee()({ name: "VBtnToggle", props: Ui(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: o, prev: a, select: c, selected: u } = Ba(e, xa);
  return se(() => {
    const s = Ao.filterProps(e);
    return d(Ao, Q({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var i;
      return [(i = t.default) == null ? void 0 : i.call(t, { isSelected: l, next: o, prev: a, select: c, selected: u })];
    } });
  }), { next: o, prev: a, select: c };
} });
const qi = H({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), je = ee(!1)({ name: "VDefaultsProvider", props: qi(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: o, reset: a, root: c, scoped: u } = Bt(e);
  return ln(l, { reset: a, root: c, scoped: u, disabled: o }), () => {
    var s;
    return (s = t.default) == null ? void 0 : s.call(t);
  };
} }), Ce = [String, Function, Object, Array], Hi = Symbol.for("vuetify:icons"), Zn = H({ icon: { type: Ce }, tag: { type: String, required: !0 } }, "icon"), _o = ee()({ name: "VComponentIcon", props: Zn(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var o;
      return [e.icon ? d(l, null, null) : (o = t.default) == null ? void 0 : o.call(t)];
    } });
  };
} }), Yi = bn({ name: "VSvgIcon", inheritAttrs: !1, props: Zn(), setup(e, n) {
  let { attrs: t } = n;
  return () => d(e.tag, Q(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
bn({ name: "VLigatureIcon", props: Zn(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), bn({ name: "VClassIcon", props: Zn(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const Xi = ["x-small", "small", "default", "large", "x-large"], Vn = H({ size: { type: [String, Number], default: "default" } }, "size");
function _n(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return jl(() => {
    let t, l;
    return qn(Xi, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: ie(e.size), height: ie(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const Ki = H({ color: String, start: Boolean, end: Boolean, icon: Ce, ...ye(), ...Vn(), ...et({ tag: "i" }), ...Ne() }, "VIcon"), Se = ee()({ name: "VIcon", props: Ki(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = D(), { themeClasses: a } = Xe(e), { iconData: c } = ((p) => {
    const y = me(Hi);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: v(() => {
      var g;
      const f = r(p);
      if (!f)
        return { component: _o };
      let m = f;
      if (typeof m == "string" && (m = m.trim(), m.startsWith("$") && (m = (g = y.aliases) == null ? void 0 : g[m.slice(1)])), !m)
        throw new Error(`Could not find aliased icon "${f}"`);
      if (Array.isArray(m))
        return { component: Yi, icon: m };
      if (typeof m != "string")
        return { component: _o, icon: m };
      const h = Object.keys(y.sets).find((I) => typeof m == "string" && m.startsWith(`${I}:`)), b = h ? m.slice(h.length + 1) : m;
      return { component: y.sets[h ?? y.defaultSet].component, icon: b };
    }) };
  })(v(() => o.value || e.icon)), { sizeClasses: u } = _n(e), { textColorClasses: s, textColorStyles: i } = ft(ae(e, "color"));
  return se(() => {
    var y, f;
    const p = (y = l.default) == null ? void 0 : y.call(l);
    return p && (o.value = (f = ua(p).filter((m) => m.type === Ci && m.children && typeof m.children == "string")[0]) == null ? void 0 : f.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", a.value, u.value, s.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [u.value ? void 0 : { fontSize: ie(e.size), height: ie(e.size), width: ie(e.size) }, i.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [p] });
  }), {};
} });
function ka(e, n) {
  const t = D(), l = de(!1);
  if (Nl) {
    const o = new IntersectionObserver((a) => {
      e == null || e(a, o), l.value = !!a.find((c) => c.isIntersecting);
    }, n);
    yt(() => {
      o.disconnect();
    }), J(t, (a, c) => {
      c && (o.unobserve(c), l.value = !1), a && o.observe(a);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
function Yl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = D(), l = D();
  if (Ke) {
    const o = new ResizeObserver((a) => {
      e == null || e(a, o), a.length && (l.value = n === "content" ? a[0].contentRect : a[0].target.getBoundingClientRect());
    });
    yt(() => {
      o.disconnect();
    }), J(t, (a, c) => {
      c && (o.unobserve(Un(c)), l.value = void 0), a && o.observe(Un(a));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: Dl(l) };
}
const Ji = H({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ye(), ...Vn(), ...et({ tag: "div" }), ...Ne() }, "VProgressCircular"), wa = ee()({ name: "VProgressCircular", props: Ji(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, o = D(), { themeClasses: a } = Xe(e), { sizeClasses: c, sizeStyles: u } = _n(e), { textColorClasses: s, textColorStyles: i } = ft(ae(e, "color")), { textColorClasses: p, textColorStyles: y } = ft(ae(e, "bgColor")), { intersectionRef: f, isIntersecting: m } = ka(), { resizeRef: h, contentRect: b } = Yl(), g = v(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), I = v(() => Number(e.width)), k = v(() => u.value ? Number(e.size) : b.value ? b.value.width : Math.max(I.value, 32)), F = v(() => 20 / (1 - I.value / k.value) * 2), U = v(() => I.value / k.value * F.value), $ = v(() => ie((100 - g.value) / 100 * l));
  return it(() => {
    f.value = o.value, h.value = o.value;
  }), se(() => d(e.tag, { ref: o, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": m.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, a.value, c.value, s.value, e.class], style: [u.value, i.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : g.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${F.value} ${F.value}` }, [d("circle", { class: ["v-progress-circular__underlay", p.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": U.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": U.value, "stroke-dasharray": l, "stroke-dashoffset": $.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: g.value })])] })), {};
} }), zt = H({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Dt(e) {
  return { dimensionStyles: v(() => ({ height: ie(e.height), maxHeight: ie(e.maxHeight), maxWidth: ie(e.maxWidth), minHeight: ie(e.minHeight), minWidth: ie(e.minWidth), width: ie(e.width) })) };
}
const Fa = Symbol.for("vuetify:locale");
function Xl() {
  const e = me(Fa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function On() {
  const e = me(Fa);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const Oo = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Kl = H({ location: String }, "location");
function Jl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = On();
  return { locationStyles: v(() => {
    if (!e.location)
      return {};
    const { side: a, align: c } = kl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function u(i) {
      return t ? t(i) : 0;
    }
    const s = {};
    return a !== "center" && (n ? s[Oo[a]] = `calc(100% - ${u(a)}px)` : s[a] = 0), c !== "center" ? n ? s[Oo[c]] = `calc(100% - ${u(c)}px)` : s[c] = 0 : (a === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[a]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[a]), s;
  }) };
}
const Zi = H({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ye(), ...Kl({ location: "top" }), ...ht(), ...et(), ...Ne() }, "VProgressLinear"), Qi = ee()({ name: "VProgressLinear", props: Zi(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = $e(e, "modelValue"), { isRtl: o, rtlClasses: a } = On(), { themeClasses: c } = Xe(e), { locationStyles: u } = Jl(e), { textColorClasses: s, textColorStyles: i } = ft(e, "color"), { backgroundColorClasses: p, backgroundColorStyles: y } = Gt(v(() => e.bgColor || e.color)), { backgroundColorClasses: f, backgroundColorStyles: m } = Gt(e, "color"), { roundedClasses: h } = bt(e), { intersectionRef: b, isIntersecting: g } = ka(), I = v(() => parseInt(e.max, 10)), k = v(() => parseInt(e.height, 10)), F = v(() => parseFloat(e.bufferValue) / I.value * 100), U = v(() => parseFloat(l.value) / I.value * 100), $ = v(() => o.value !== e.reverse), z = v(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), L = v(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function E(B) {
    if (!b.value)
      return;
    const { left: _, right: C, width: O } = b.value.getBoundingClientRect(), w = $.value ? O - B.clientX + (C - O) : B.clientX - _;
    l.value = Math.round(w / O * I.value);
  }
  return se(() => d(e.tag, { ref: b, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && g.value, "v-progress-linear--reverse": $.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, h.value, c.value, a.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ie(k.value) : 0, "--v-progress-linear-height": ie(k.value), ...u.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : U.value, onClick: e.clickable && E }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", s.value], style: { ...i.value, [$.value ? "left" : "right"]: ie(-k.value), borderTop: `${ie(k.value / 2)} dotted`, opacity: L.value, top: `calc(50% - ${ie(k.value / 4)})`, width: ie(100 - F.value, "%"), "--v-progress-linear-stream-to": ie(k.value * ($.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", p.value], style: [y.value, { opacity: L.value, width: ie(e.stream ? F.value : 100, "%") }] }, null), d(At, { name: z.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((B) => d("div", { key: B, class: ["v-progress-linear__indeterminate", B, f.value], style: m.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", f.value], style: [m.value, { width: ie(U.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: U.value, buffer: F.value })])] })), {};
} }), Zl = H({ loading: [Boolean, String] }, "loader");
function il(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { loaderClasses: v(() => ({ [`${n}--loading`]: e.loading })) };
}
function Ql(e, n) {
  var l;
  let { slots: t } = n;
  return d("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || d(Qi, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const er = ["static", "relative", "fixed", "absolute", "sticky"], Aa = H({ position: { type: String, validator: (e) => er.includes(e) } }, "position");
function Va(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { positionClasses: v(() => e.position ? `${n}--${e.position}` : void 0) };
}
function rl(e, n) {
  const t = Ii("RouterLink"), l = v(() => !(!e.href && !e.to)), o = v(() => (l == null ? void 0 : l.value) || po(n, "click") || po(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: o, href: ae(e, "href") };
  const a = e.to ? t.useLink(e) : void 0, c = function() {
    const u = We("useRoute");
    return v(() => {
      var s;
      return (s = u == null ? void 0 : u.proxy) == null ? void 0 : s.$route;
    });
  }();
  return { isLink: l, isClickable: o, route: a == null ? void 0 : a.route, navigate: a == null ? void 0 : a.navigate, isActive: a && v(() => {
    var u, s, i;
    return e.exact ? c.value ? ((u = a.isExactActive) == null ? void 0 : u.value) && nn(a.route.value.query, c.value.query) : (s = a.isExactActive) == null ? void 0 : s.value : (i = a.isActive) == null ? void 0 : i.value;
  }), href: v(() => e.to ? a == null ? void 0 : a.route.value.href : e.href) };
}
const sl = H({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let gl = !1;
const wl = Symbol("rippleStop"), tr = 80;
function Po(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function Fl(e) {
  return e.constructor.name === "TouchEvent";
}
function _a(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Qn = { show(e, n) {
  var m;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((m = n == null ? void 0 : n._ripple) != null && m.enabled))
    return;
  const l = document.createElement("span"), o = document.createElement("span");
  l.appendChild(o), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: a, scale: c, x: u, y: s, centerX: i, centerY: p } = function(h, b) {
    var L;
    let g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, I = 0, k = 0;
    if (!_a(h)) {
      const E = b.getBoundingClientRect(), B = Fl(h) ? h.touches[h.touches.length - 1] : h;
      I = B.clientX - E.left, k = B.clientY - E.top;
    }
    let F = 0, U = 0.3;
    (L = b._ripple) != null && L.circle ? (U = 0.15, F = b.clientWidth / 2, F = g.center ? F : F + Math.sqrt((I - F) ** 2 + (k - F) ** 2) / 4) : F = Math.sqrt(b.clientWidth ** 2 + b.clientHeight ** 2) / 2;
    const $ = (b.clientWidth - 2 * F) / 2 + "px", z = (b.clientHeight - 2 * F) / 2 + "px";
    return { radius: F, scale: U, x: g.center ? $ : I - F + "px", y: g.center ? z : k - F + "px", centerX: $, centerY: z };
  }(e, n, t), y = 2 * a + "px";
  o.className = "v-ripple__animation", o.style.width = y, o.style.height = y, n.appendChild(l);
  const f = window.getComputedStyle(n);
  f && f.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), o.classList.add("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--visible"), Po(o, `translate(${u}, ${s}) scale3d(${c},${c},${c})`), o.dataset.activated = String(performance.now()), setTimeout(() => {
    o.classList.remove("v-ripple__animation--enter"), o.classList.add("v-ripple__animation--in"), Po(o, `translate(${i}, ${p}) scale3d(1,1,1)`);
  }, 0);
}, hide(e) {
  var a;
  if (!((a = e == null ? void 0 : e._ripple) != null && a.enabled))
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
function Oa(e) {
  return e === void 0 || !!e;
}
function Cn(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[wl]) {
    if (e[wl] = !0, Fl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || _a(e), t._ripple.class && (n.class = t._ripple.class), Fl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Qn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, tr);
    } else
      Qn.show(e, t, n);
  }
}
function $o(e) {
  e[wl] = !0;
}
function Ze(e) {
  const n = e.currentTarget;
  if (n != null && n._ripple) {
    if (window.clearTimeout(n._ripple.showTimer), e.type === "touchend" && n._ripple.showTimerCommit)
      return n._ripple.showTimerCommit(), n._ripple.showTimerCommit = null, void (n._ripple.showTimer = window.setTimeout(() => {
        Ze(e);
      }));
    window.setTimeout(() => {
      n._ripple && (n._ripple.touched = !1);
    }), Qn.hide(n);
  }
}
function Pa(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let In = !1;
function $a(e) {
  In || e.keyCode !== ro.enter && e.keyCode !== ro.space || (In = !0, Cn(e));
}
function Ea(e) {
  In = !1, Ze(e);
}
function Ta(e) {
  In && (In = !1, Ze(e));
}
function Eo(e, n, t) {
  const { value: l, modifiers: o } = n, a = Oa(l);
  if (a || Qn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = a, e._ripple.centered = o.center, e._ripple.circle = o.circle, Sl(l) && l.class && (e._ripple.class = l.class), a && !t) {
    if (o.stop)
      return e.addEventListener("touchstart", $o, { passive: !0 }), void e.addEventListener("mousedown", $o);
    e.addEventListener("touchstart", Cn, { passive: !0 }), e.addEventListener("touchend", Ze, { passive: !0 }), e.addEventListener("touchmove", Pa, { passive: !0 }), e.addEventListener("touchcancel", Ze), e.addEventListener("mousedown", Cn), e.addEventListener("mouseup", Ze), e.addEventListener("mouseleave", Ze), e.addEventListener("keydown", $a), e.addEventListener("keyup", Ea), e.addEventListener("blur", Ta), e.addEventListener("dragstart", Ze, { passive: !0 });
  } else
    !a && t && za(e);
}
function za(e) {
  e.removeEventListener("mousedown", Cn), e.removeEventListener("touchstart", Cn), e.removeEventListener("touchend", Ze), e.removeEventListener("touchmove", Pa), e.removeEventListener("touchcancel", Ze), e.removeEventListener("mouseup", Ze), e.removeEventListener("mouseleave", Ze), e.removeEventListener("keydown", $a), e.removeEventListener("keyup", Ea), e.removeEventListener("dragstart", Ze), e.removeEventListener("blur", Ta);
}
const Pn = { mounted: function(e, n) {
  Eo(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, za(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Eo(e, n, Oa(n.oldValue));
} }, nr = H({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: xa }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: Ce, appendIcon: Ce, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...on(), ...ye(), ...ut(), ...zt(), ...rn(), ...Ia(), ...Zl(), ...Kl(), ...Aa(), ...ht(), ...sl(), ...Vn(), ...et({ tag: "button" }), ...Ne(), ...xt({ variant: "elevated" }) }, "VBtn"), To = ee()({ name: "VBtn", directives: { Ripple: Pn }, props: nr(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = Xe(e), { borderClasses: a } = an(e), { colorClasses: c, colorStyles: u, variantClasses: s } = An(e), { densityClasses: i } = gt(e), { dimensionStyles: p } = Dt(e), { elevationClasses: y } = sn(e), { loaderClasses: f } = il(e), { locationStyles: m } = Jl(e), { positionClasses: h } = Va(e), { roundedClasses: b } = bt(e), { sizeClasses: g, sizeStyles: I } = _n(e), k = Sa(e, e.symbol, !1), F = rl(e, t), U = v(() => {
    var B;
    return e.active !== void 0 ? e.active : F.isLink.value ? (B = F.isActive) == null ? void 0 : B.value : k == null ? void 0 : k.isSelected.value;
  }), $ = v(() => (k == null ? void 0 : k.disabled.value) || e.disabled), z = v(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), L = v(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function E(B) {
    var _;
    $.value || F.isLink.value && (B.metaKey || B.ctrlKey || B.shiftKey || B.button !== 0 || t.target === "_blank") || ((_ = F.navigate) == null || _.call(F, B), k == null || k.toggle());
  }
  return function(B, _) {
    J(() => {
      var C;
      return (C = B.isActive) == null ? void 0 : C.value;
    }, (C) => {
      B.isLink.value && C && _ && Me(() => {
        _(!0);
      });
    }, { immediate: !0 });
  }(F, k == null ? void 0 : k.select), se(() => {
    var M, V;
    const B = F.isLink.value ? "a" : e.tag, _ = !(!e.prependIcon && !l.prepend), C = !(!e.appendIcon && !l.append), O = !(!e.icon || e.icon === !0), w = (k == null ? void 0 : k.isSelected.value) && (!F.isLink.value || ((M = F.isActive) == null ? void 0 : M.value)) || !k || ((V = F.isActive) == null ? void 0 : V.value);
    return Ue(d(B, { type: B === "a" ? void 0 : "button", class: ["v-btn", k == null ? void 0 : k.selectedClass.value, { "v-btn--active": U.value, "v-btn--block": e.block, "v-btn--disabled": $.value, "v-btn--elevated": z.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, o.value, a.value, w ? c.value : void 0, i.value, y.value, f.value, h.value, b.value, g.value, s.value, e.class], style: [w ? u.value : void 0, p.value, m.value, I.value, e.style], disabled: $.value || void 0, href: F.href.value, onClick: E, value: L.value }, { default: () => {
      var A;
      return [Fn(!0, "v-btn"), !e.icon && _ && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(je, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(Se, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && O ? d(Se, { key: "content-icon", icon: e.icon }, null) : d(je, { key: "content-defaults", disabled: !O, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var P;
        return [((P = l.default) == null ? void 0 : P.call(l)) ?? e.text];
      } })]), !e.icon && C && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(je, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(Se, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((A = l.loader) == null ? void 0 : A.call(l)) ?? d(wa, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[mt("ripple"), !$.value && e.ripple, null]]);
  }), {};
} }), un = rt({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: n }) {
  const t = Ot(), l = n, o = e, a = me(Symbol.for("vuetify:icons")), c = v(() => o.error), u = v(() => ({ [`${re}--save-fields-container`]: !0 })), s = v(() => o.loading), i = lt({ ...t, ...o }), p = v(() => (a == null ? void 0 : a.defaultSet) === "fa" ? "fa-spin" : (a == null ? void 0 : a.defaultSet) === "mdi" ? "mdi-spin" : ""), y = v(() => ((I) => {
    const { cancelButtonVariant: k } = I;
    return { "me-1": k === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: i.cancelButtonVariant })), f = v(() => ot({ icon: o.cancelIcon, iconOptions: a, name: "false" })), m = v(() => ot({ icon: o.loadingIcon, iconOptions: a, name: "loading" })), h = v(() => ot({ icon: o.saveIcon, iconOptions: a, name: "save" }));
  function b() {
    l("close");
  }
  function g() {
    l("save");
  }
  return (I, k) => (Z(), ce("div", Q({ class: r(u) }, I.$attrs), [r(i).hideSaveIcon ? xe("", !0) : (Z(), De(To, { key: 0, class: "ms-1", color: r(i).saveButtonColor, disabled: r(c), icon: "", size: r(i).saveButtonSize, title: r(s) ? "Loading" : r(i).saveButtonTitle, variant: r(i).saveButtonVariant, onClick: g }, { default: be(() => [r(s) ? (Z(), De(Se, { key: 1, class: oe(r(p)), color: r(i).loadingIconColor, icon: r(m) }, null, 8, ["class", "color", "icon"])) : (Z(), De(Se, { key: 0, color: r(c) ? "error" : r(i).saveIconColor, icon: r(h) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(i).hideCancelIcon ? xe("", !0) : (Z(), De(To, { key: 1, class: oe(r(y)), color: r(i).cancelButtonColor, icon: "", size: r(i).cancelButtonSize, title: r(i).cancelButtonTitle, variant: r(i).cancelButtonVariant, onClick: b }, { default: be(() => [r(i).hideSaveIcon && r(s) ? (Z(), De(Se, { key: 0, class: oe(r(p)), color: r(i).loadingIconColor, icon: r(m) }, null, 8, ["class", "color", "icon"])) : (Z(), De(Se, { key: 1, class: "text-default", color: r(i).cancelIconColor, icon: r(f) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), lr = H({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Je(e, n, t) {
  return ee()({ name: e, props: lr({ mode: t, origin: n }), setup(l, o) {
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
      const u = l.group ? Si : At;
      return ol(u, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, a.default);
    };
  } });
}
function Da(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return ee()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, o) {
    let { slots: a } = o;
    return () => ol(At, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, a.default);
  } });
}
function La() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = ta(`offset-${n}`);
  return { onBeforeEnter(a) {
    a._parent = a.parentNode, a._initialStyle = { transition: a.style.transition, overflow: a.style.overflow, [n]: a.style[n] };
  }, onEnter(a) {
    const c = a._initialStyle;
    a.style.setProperty("transition", "none", "important"), a.style.overflow = "hidden";
    const u = `${a[t]}px`;
    a.style[n] = "0", a.offsetHeight, a.style.transition = c.transition, e && a._parent && a._parent.classList.add(e), requestAnimationFrame(() => {
      a.style[n] = u;
    });
  }, onAfterEnter: o, onEnterCancelled: o, onLeave(a) {
    a._initialStyle = { transition: "", overflow: a.style.overflow, [n]: a.style[n] }, a.style.overflow = "hidden", a.style[n] = `${a[t]}px`, a.offsetHeight, requestAnimationFrame(() => a.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(a) {
    e && a._parent && a._parent.classList.remove(e), o(a);
  }
  function o(a) {
    const c = a._initialStyle[n];
    a.style.overflow = a._initialStyle.overflow, c != null && (a.style[n] = c), delete a._initialStyle;
  }
}
const or = H({ target: [Object, Array] }, "v-dialog-transition"), Wa = ee()({ name: "VDialogTransition", props: or(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(o) {
    o.style.pointerEvents = "none", o.style.visibility = "hidden";
  }, async onEnter(o, a) {
    var f;
    await new Promise((m) => requestAnimationFrame(m)), await new Promise((m) => requestAnimationFrame(m)), o.style.visibility = "";
    const { x: c, y: u, sx: s, sy: i, speed: p } = Do(e.target, o), y = Nt(o, [{ transform: `translate(${c}px, ${u}px) scale(${s}, ${i})`, opacity: 0 }, {}], { duration: 225 * p, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (f = zo(o)) == null || f.forEach((m) => {
      Nt(m, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * p, easing: Kn });
    }), y.finished.then(() => a());
  }, onAfterEnter(o) {
    o.style.removeProperty("pointer-events");
  }, onBeforeLeave(o) {
    o.style.pointerEvents = "none";
  }, async onLeave(o, a) {
    var y;
    await new Promise((f) => requestAnimationFrame(f));
    const { x: c, y: u, sx: s, sy: i, speed: p } = Do(e.target, o);
    Nt(o, [{}, { transform: `translate(${c}px, ${u}px) scale(${s}, ${i})`, opacity: 0 }], { duration: 125 * p, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => a()), (y = zo(o)) == null || y.forEach((f) => {
      Nt(f, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * p, easing: Kn });
    });
  }, onAfterLeave(o) {
    o.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(At, Q({ name: "dialog-transition" }, l, { css: !1 }), t) : d(At, { name: "dialog-transition" }, t);
} });
function zo(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Do(e, n) {
  const t = fa(e), l = Gl(n), [o, a] = getComputedStyle(n).transformOrigin.split(" ").map((I) => parseFloat(I)), [c, u] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  c === "left" || u === "left" ? s -= t.width / 2 : c !== "right" && u !== "right" || (s += t.width / 2);
  let i = t.top + t.height / 2;
  c === "top" || u === "top" ? i -= t.height / 2 : c !== "bottom" && u !== "bottom" || (i += t.height / 2);
  const p = t.width / l.width, y = t.height / l.height, f = Math.max(1, p, y), m = p / f || 0, h = y / f || 0, b = l.width * l.height / (window.innerWidth * window.innerHeight), g = b > 0.12 ? Math.min(1.5, 10 * (b - 0.12) + 1) : 1;
  return { x: s - (o + l.left), y: i - (a + l.top), sx: m, sy: h, speed: g };
}
Je("fab-transition", "center center", "out-in"), Je("dialog-bottom-transition"), Je("dialog-top-transition"), Je("fade-transition");
const ar = Je("scale-transition");
Je("scroll-x-transition"), Je("scroll-x-reverse-transition"), Je("scroll-y-transition"), Je("scroll-y-reverse-transition"), Je("slide-x-transition"), Je("slide-x-reverse-transition");
const Ma = Je("slide-y-transition");
Je("slide-y-reverse-transition");
const ir = Da("expand-transition", La()), Ra = Da("expand-x-transition", La("", !0)), Na = H({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ye(), ...zt() }, "VResponsive"), Lo = ee()({ name: "VResponsive", props: Na(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(a) {
    return { aspectStyles: v(() => {
      const c = Number(a.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: o } = Dt(e);
  return se(() => {
    var a;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [o.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (a = t.additional) == null ? void 0 : a.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), $n = H({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), Ct = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: o, ...a } = e, { component: c = At, ...u } = typeof l == "object" ? l : {};
  return ol(c, Q(typeof l == "string" ? { name: o ? "" : l } : u, a, { disabled: o }), t);
};
function Wo(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const eo = { mounted: function(e, n) {
  if (!Nl)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: o, options: a } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var y;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const i = (y = e._observe) == null ? void 0 : y[n.instance.$.uid];
    if (!i)
      return;
    const p = u.some((f) => f.isIntersecting);
    !o || t.quiet && !i.init || t.once && !p && !i.init || o(p, u, s), p && t.once ? Wo(e, n) : i.init = !0;
  }, a);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: Wo }, rr = H({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Na(), ...ye(), ...$n() }, "VImg"), ja = ee()({ name: "VImg", directives: { intersect: eo }, props: rr(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const o = We("VImg"), a = de(""), c = D(), u = de(e.eager ? "loading" : "idle"), s = de(), i = de(), p = v(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = v(() => p.value.aspect || s.value / i.value || 0);
  function f(B) {
    if ((!e.eager || !B) && (!Nl || B || e.eager)) {
      if (u.value = "loading", p.value.lazySrc) {
        const _ = new Image();
        _.src = p.value.lazySrc, I(_, null);
      }
      p.value.src && Me(() => {
        var _;
        t("loadstart", ((_ = c.value) == null ? void 0 : _.currentSrc) || p.value.src), setTimeout(() => {
          var C;
          if (!o.isUnmounted)
            if ((C = c.value) != null && C.complete) {
              if (c.value.naturalWidth || h(), u.value === "error")
                return;
              y.value || I(c.value, null), u.value === "loading" && m();
            } else
              y.value || I(c.value), b();
        });
      });
    }
  }
  function m() {
    var B;
    o.isUnmounted || (b(), I(c.value), u.value = "loaded", t("load", ((B = c.value) == null ? void 0 : B.currentSrc) || p.value.src));
  }
  function h() {
    var B;
    o.isUnmounted || (u.value = "error", t("error", ((B = c.value) == null ? void 0 : B.currentSrc) || p.value.src));
  }
  function b() {
    const B = c.value;
    B && (a.value = B.currentSrc || B.src);
  }
  J(() => e.src, () => {
    f(u.value !== "idle");
  }), J(y, (B, _) => {
    !B && _ && c.value && I(c.value);
  }), na(() => f());
  let g = -1;
  function I(B) {
    let _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const C = () => {
      if (clearTimeout(g), o.isUnmounted)
        return;
      const { naturalHeight: O, naturalWidth: w } = B;
      O || w ? (s.value = w, i.value = O) : B.complete || u.value !== "loading" || _ == null ? (B.currentSrc.endsWith(".svg") || B.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, i.value = 1) : g = window.setTimeout(C, _);
    };
    C();
  }
  yt(() => {
    clearTimeout(g);
  });
  const k = v(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), F = () => {
    var C;
    if (!p.value.src || u.value === "idle")
      return null;
    const B = d("img", { class: ["v-img__img", k.value], style: { objectPosition: e.position }, src: p.value.src, srcset: p.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: m, onError: h }, null), _ = (C = l.sources) == null ? void 0 : C.call(l);
    return d(Ct, { transition: e.transition, appear: !0 }, { default: () => [Ue(_ ? d("picture", { class: "v-img__picture" }, [_, B]) : B, [[Ht, u.value === "loaded"]])] });
  }, U = () => d(Ct, { transition: e.transition }, { default: () => [p.value.lazySrc && u.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", k.value], style: { objectPosition: e.position }, src: p.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), $ = () => l.placeholder ? d(Ct, { transition: e.transition, appear: !0 }, { default: () => [(u.value === "loading" || u.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, z = () => l.error ? d(Ct, { transition: e.transition, appear: !0 }, { default: () => [u.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, L = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, E = de(!1);
  {
    const B = J(y, (_) => {
      _ && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          E.value = !0;
        });
      }), B());
    });
  }
  return se(() => {
    const B = Lo.filterProps(e);
    return Ue(d(Lo, Q({ class: ["v-img", { "v-img--booting": !E.value }, e.class], style: [{ width: ie(e.width === "auto" ? s.value : e.width) }, e.style] }, B, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(Fe, null, [d(F, null, null), d(U, null, null), d(L, null, null), d($, null, null), d(z, null, null)]), default: l.default }), [[mt("intersect"), { handler: f, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: a, image: c, state: u, naturalWidth: s, naturalHeight: i };
} }), sr = H({ text: String, clickable: Boolean, ...ye(), ...Ne() }, "VLabel"), Ga = ee()({ name: "VLabel", props: sr(), setup(e, n) {
  let { slots: t } = n;
  return se(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Ua = Symbol.for("vuetify:selection-control-group"), qa = H({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: Ce, trueIcon: Ce, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: nn }, ...ye(), ...ut(), ...Ne() }, "SelectionControlGroup"), ur = H({ ...qa({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
ee()({ name: "VSelectionControlGroup", props: ur(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = $e(e, "modelValue"), o = nt(), a = v(() => e.id || `v-selection-control-group-${o}`), c = v(() => e.name || a.value), u = /* @__PURE__ */ new Set();
  return tt(Ua, { modelValue: l, forceUpdate: () => {
    u.forEach((s) => s());
  }, onForceUpdate: (s) => {
    u.add(s), He(() => {
      u.delete(s);
    });
  } }), ln({ [e.defaultsTarget]: { color: ae(e, "color"), disabled: ae(e, "disabled"), density: ae(e, "density"), error: ae(e, "error"), inline: ae(e, "inline"), modelValue: l, multiple: v(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ae(e, "falseIcon"), trueIcon: ae(e, "trueIcon"), readonly: ae(e, "readonly"), ripple: ae(e, "ripple"), type: ae(e, "type"), valueComparator: ae(e, "valueComparator") } }), se(() => {
    var s;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(s = t.default) == null ? void 0 : s.call(t)]);
  }), {};
} });
const to = H({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ye(), ...qa() }, "VSelectionControl"), el = ee()({ name: "VSelectionControl", directives: { Ripple: Pn }, inheritAttrs: !1, props: to(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: o, densityClasses: a, icon: c, model: u, textColorClasses: s, textColorStyles: i, backgroundColorClasses: p, backgroundColorStyles: y, trueValue: f } = function($) {
    const z = me(Ua, void 0), { densityClasses: L } = gt($), E = $e($, "modelValue"), B = v(() => $.trueValue !== void 0 ? $.trueValue : $.value === void 0 || $.value), _ = v(() => $.falseValue !== void 0 && $.falseValue), C = v(() => !!$.multiple || $.multiple == null && Array.isArray(E.value)), O = v({ get() {
      const S = z ? z.modelValue.value : E.value;
      return C.value ? dt(S).some((x) => $.valueComparator(x, B.value)) : $.valueComparator(S, B.value);
    }, set(S) {
      if ($.readonly)
        return;
      const x = S ? B.value : _.value;
      let W = x;
      C.value && (W = S ? [...dt(E.value), x] : dt(E.value).filter((R) => !$.valueComparator(R, B.value))), z ? z.modelValue.value = W : E.value = W;
    } }), { textColorClasses: w, textColorStyles: M } = ft(v(() => {
      if (!$.error && !$.disabled)
        return O.value ? $.color : $.baseColor;
    })), { backgroundColorClasses: V, backgroundColorStyles: A } = Gt(v(() => !O.value || $.error || $.disabled ? void 0 : $.color)), P = v(() => O.value ? $.trueIcon : $.falseIcon);
    return { group: z, densityClasses: L, trueValue: B, falseValue: _, model: O, textColorClasses: w, textColorStyles: M, backgroundColorClasses: V, backgroundColorStyles: A, icon: P };
  }(e), m = nt(), h = v(() => e.id || `input-${m}`), b = de(!1), g = de(!1), I = D();
  function k($) {
    b.value = !0, Yn($.target, ":focus-visible") !== !1 && (g.value = !0);
  }
  function F() {
    b.value = !1, g.value = !1;
  }
  function U($) {
    e.readonly && o && Me(() => o.forceUpdate()), u.value = $.target.checked;
  }
  return o == null || o.onForceUpdate(() => {
    I.value && (I.value.checked = u.value);
  }), se(() => {
    var B, _;
    const $ = l.label ? l.label({ label: e.label, props: { for: h.value } }) : e.label, [z, L] = kn(t), E = d("input", Q({ ref: I, checked: u.value, disabled: !(!e.readonly && !e.disabled), id: h.value, onBlur: F, onFocus: k, onInput: U, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: f.value, name: e.name, "aria-checked": e.type === "checkbox" ? u.value : void 0 }, L), null);
    return d("div", Q({ class: ["v-selection-control", { "v-selection-control--dirty": u.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": b.value, "v-selection-control--focus-visible": g.value, "v-selection-control--inline": e.inline }, a.value, e.class] }, z, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", s.value], style: i.value }, [(B = l.default) == null ? void 0 : B.call(l, { backgroundColorClasses: p, backgroundColorStyles: y }), Ue(d("div", { class: ["v-selection-control__input"] }, [((_ = l.input) == null ? void 0 : _.call(l, { model: u, textColorClasses: s, textColorStyles: i, backgroundColorClasses: p, backgroundColorStyles: y, inputNode: E, icon: c.value, props: { onFocus: k, onBlur: F, id: h.value } })) ?? d(Fe, null, [c.value && d(Se, { key: "icon", icon: c.value }, null), E])]), [[mt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), $ && d(Ga, { for: h.value, clickable: !0, onClick: (C) => C.stopPropagation() }, { default: () => [$] })]);
  }), { isFocused: b, input: I };
} }), Ha = H({ indeterminate: Boolean, indeterminateIcon: { type: Ce, default: "$checkboxIndeterminate" }, ...to({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Al = ee()({ name: "VCheckboxBtn", props: Ha(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = $e(e, "indeterminate"), o = $e(e, "modelValue");
  function a(s) {
    l.value && (l.value = !1);
  }
  const c = v(() => l.value ? e.indeterminateIcon : e.falseIcon), u = v(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return se(() => {
    const s = Tt(el.filterProps(e), ["modelValue"]);
    return d(el, Q(s, { modelValue: o.value, "onUpdate:modelValue": [(i) => o.value = i, a], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: u.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ya(e) {
  const { t: n } = Xl();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const o = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], a = e[`onClick:${l}`], c = a && o ? n(`$vuetify.input.${o}`, e.label ?? "") : void 0;
    return d(Se, { icon: e[`${l}Icon`], "aria-label": c, onClick: a }, null);
  } };
}
const cr = H({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ye(), ...$n({ transition: { component: Ma, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), dr = ee()({ name: "VMessages", props: cr(), setup(e, n) {
  let { slots: t } = n;
  const l = v(() => dt(e.messages)), { textColorClasses: o, textColorStyles: a } = ft(v(() => e.color));
  return se(() => d(Ct, { transition: e.transition, tag: "div", class: ["v-messages", o.value, e.class], style: [a.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, u) => d("div", { class: "v-messages__message", key: `${u}-${l.value}` }, [t.message ? t.message({ message: c }) : c]))] })), {};
} }), Xa = H({ focused: Boolean, "onUpdate:focused": at() }, "focus");
function En(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = $e(e, "focused");
  return { focusClasses: v(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const pr = Symbol.for("vuetify:form");
function Ka() {
  return me(pr, null);
}
const vr = H({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...Xa() }, "validation"), Tn = H({ id: String, appendIcon: Ce, centerAffix: { type: Boolean, default: !0 }, prependIcon: Ce, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": at(), "onClick:append": at(), ...ye(), ...ut(), ...vr() }, "VInput"), St = ee()({ name: "VInput", props: { ...Tn() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const { densityClasses: a } = gt(e), { rtlClasses: c } = On(), { InputIcon: u } = Ya(e), s = nt(), i = v(() => e.id || `input-${s}`), p = v(() => `${i.value}-messages`), { errorMessages: y, isDirty: f, isDisabled: m, isReadonly: h, isPristine: b, isValid: g, isValidating: I, reset: k, resetValidation: F, validate: U, validationClasses: $ } = function(E) {
    let B = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st(), _ = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nt();
    const C = $e(E, "modelValue"), O = v(() => E.validationValue === void 0 ? C.value : E.validationValue), w = Ka(), M = D([]), V = de(!0), A = v(() => !(!dt(C.value === "" ? null : C.value).length && !dt(O.value === "" ? null : O.value).length)), P = v(() => !!(E.disabled ?? (w == null ? void 0 : w.isDisabled.value))), S = v(() => !!(E.readonly ?? (w == null ? void 0 : w.isReadonly.value))), x = v(() => {
      var X;
      return (X = E.errorMessages) != null && X.length ? dt(E.errorMessages).concat(M.value).slice(0, Math.max(0, +E.maxErrors)) : M.value;
    }), W = v(() => {
      let X = (E.validateOn ?? (w == null ? void 0 : w.validateOn.value)) || "input";
      X === "lazy" && (X = "input lazy");
      const te = new Set((X == null ? void 0 : X.split(" ")) ?? []);
      return { blur: te.has("blur") || te.has("input"), input: te.has("input"), submit: te.has("submit"), lazy: te.has("lazy") };
    }), R = v(() => {
      var X;
      return !E.error && !((X = E.errorMessages) != null && X.length) && (!E.rules.length || (V.value ? !M.value.length && !W.value.lazy || null : !M.value.length));
    }), Y = de(!1), q = v(() => ({ [`${B}--error`]: R.value === !1, [`${B}--dirty`]: A.value, [`${B}--disabled`]: P.value, [`${B}--readonly`]: S.value })), T = v(() => E.name ?? r(_));
    function N() {
      C.value = null, Me(j);
    }
    function j() {
      V.value = !0, W.value.lazy ? M.value = [] : G(!0);
    }
    async function G() {
      let X = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const te = [];
      Y.value = !0;
      for (const pe of E.rules) {
        if (te.length >= +(E.maxErrors ?? 1))
          break;
        const ge = typeof pe == "function" ? pe : () => pe, he = await ge(O.value);
        he !== !0 && (he === !1 || typeof he == "string" ? te.push(he || "") : console.warn(`${he} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return M.value = te, Y.value = !1, V.value = X, M.value;
    }
    return na(() => {
      w == null || w.register({ id: T.value, validate: G, reset: N, resetValidation: j });
    }), yt(() => {
      w == null || w.unregister(T.value);
    }), qt(async () => {
      W.value.lazy || await G(!0), w == null || w.update(T.value, R.value, x.value);
    }), Ft(() => W.value.input, () => {
      J(O, () => {
        if (O.value != null)
          G();
        else if (E.focused) {
          const X = J(() => E.focused, (te) => {
            te || G(), X();
          });
        }
      });
    }), Ft(() => W.value.blur, () => {
      J(() => E.focused, (X) => {
        X || G();
      });
    }), J(R, () => {
      w == null || w.update(T.value, R.value, x.value);
    }), { errorMessages: x, isDirty: A, isDisabled: P, isReadonly: S, isPristine: V, isValid: R, isValidating: Y, reset: N, resetValidation: j, validate: G, validationClasses: q };
  }(e, "v-input", i), z = v(() => ({ id: i, messagesId: p, isDirty: f, isDisabled: m, isReadonly: h, isPristine: b, isValid: g, isValidating: I, reset: k, resetValidation: F, validate: U })), L = v(() => {
    var E;
    return (E = e.errorMessages) != null && E.length || !b.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return se(() => {
    var O, w, M, V;
    const E = !(!l.prepend && !e.prependIcon), B = !(!l.append && !e.appendIcon), _ = L.value.length > 0, C = !e.hideDetails || e.hideDetails === "auto" && (_ || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, a.value, c.value, $.value, e.class], style: e.style }, [E && d("div", { key: "prepend", class: "v-input__prepend" }, [(O = l.prepend) == null ? void 0 : O.call(l, z.value), e.prependIcon && d(u, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(w = l.default) == null ? void 0 : w.call(l, z.value)]), B && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(u, { key: "append-icon", name: "append" }, null), (M = l.append) == null ? void 0 : M.call(l, z.value)]), C && d("div", { class: "v-input__details" }, [d(dr, { id: p.value, active: _, messages: L.value }, { message: l.message }), (V = l.details) == null ? void 0 : V.call(l, z.value)])]);
  }), { reset: k, resetValidation: F, validate: U, isValid: g, errorMessages: y };
} }), fr = H({ ...Tn(), ...Tt(Ha(), ["inline"]) }, "VCheckbox"), yr = ee()({ name: "VCheckbox", inheritAttrs: !1, props: fr(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = $e(e, "modelValue"), { isFocused: a, focus: c, blur: u } = En(e), s = nt(), i = v(() => e.id || `checkbox-${s}`);
  return se(() => {
    const [p, y] = kn(t), f = St.filterProps(e), m = Al.filterProps(e);
    return d(St, Q({ class: ["v-checkbox", e.class] }, p, f, { modelValue: o.value, "onUpdate:modelValue": (h) => o.value = h, id: i.value, focused: a.value, style: e.style }), { ...l, default: (h) => {
      let { id: b, messagesId: g, isDisabled: I, isReadonly: k } = h;
      return d(Al, Q(m, { id: b.value, "aria-describedby": g.value, disabled: I.value, readonly: k.value }, y, { modelValue: o.value, "onUpdate:modelValue": (F) => o.value = F, onFocus: c, onBlur: u }), l);
    } });
  }), {};
} }), mr = H({ start: Boolean, end: Boolean, icon: Ce, image: String, text: String, ...ye(), ...ut(), ...ht(), ...Vn(), ...et(), ...Ne(), ...xt({ variant: "flat" }) }, "VAvatar"), Ut = ee()({ name: "VAvatar", props: mr(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { colorClasses: o, colorStyles: a, variantClasses: c } = An(e), { densityClasses: u } = gt(e), { roundedClasses: s } = bt(e), { sizeClasses: i, sizeStyles: p } = _n(e);
  return se(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, o.value, u.value, s.value, i.value, c.value, e.class], style: [a.value, p.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(ja, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(Se, { key: "icon", icon: e.icon }, null) : ((y = t.default) == null ? void 0 : y.call(t)) ?? e.text, Fn(!1, "v-avatar")];
  } })), {};
} }), Ja = Symbol.for("vuetify:v-chip-group"), gr = H({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: nn }, ...ye(), ...Ca({ selectedClass: "v-chip--selected" }), ...et(), ...Ne(), ...xt({ variant: "tonal" }) }, "VChipGroup");
ee()({ name: "VChipGroup", props: gr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { isSelected: o, select: a, next: c, prev: u, selected: s } = Ba(e, Ja);
  return ln({ VChip: { color: ae(e, "color"), disabled: ae(e, "disabled"), filter: ae(e, "filter"), variant: ae(e, "variant") } }), se(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var i;
    return [(i = t.default) == null ? void 0 : i.call(t, { isSelected: o, select: a, next: c, prev: u, selected: s.value })];
  } })), {};
} });
const hr = H({ activeClass: String, appendAvatar: String, appendIcon: Ce, closable: Boolean, closeIcon: { type: Ce, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: at(), onClickOnce: at(), ...on(), ...ye(), ...ut(), ...rn(), ...Ia(), ...ht(), ...sl(), ...Vn(), ...et({ tag: "span" }), ...Ne(), ...xt({ variant: "tonal" }) }, "VChip"), br = ee()({ name: "VChip", directives: { Ripple: Pn }, props: hr(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { t: a } = Xl(), { borderClasses: c } = an(e), { colorClasses: u, colorStyles: s, variantClasses: i } = An(e), { densityClasses: p } = gt(e), { elevationClasses: y } = sn(e), { roundedClasses: f } = bt(e), { sizeClasses: m } = _n(e), { themeClasses: h } = Xe(e), b = $e(e, "modelValue"), g = Sa(e, Ja, !1), I = rl(e, t), k = v(() => e.link !== !1 && I.isLink.value), F = v(() => !e.disabled && e.link !== !1 && (!!g || e.link || I.isClickable.value)), U = v(() => ({ "aria-label": a(e.closeLabel), onClick(L) {
    L.stopPropagation(), b.value = !1, l("click:close", L);
  } }));
  function $(L) {
    var E;
    l("click", L), F.value && ((E = I.navigate) == null || E.call(I, L), g == null || g.toggle());
  }
  function z(L) {
    L.key !== "Enter" && L.key !== " " || (L.preventDefault(), $(L));
  }
  return () => {
    const L = I.isLink.value ? "a" : e.tag, E = !(!e.appendIcon && !e.appendAvatar), B = !(!E && !o.append), _ = !(!o.close && !e.closable), C = !(!o.filter && !e.filter) && g, O = !(!e.prependIcon && !e.prependAvatar), w = !(!O && !o.prepend), M = !g || g.isSelected.value;
    return b.value && Ue(d(L, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": F.value, "v-chip--filter": C, "v-chip--pill": e.pill }, h.value, c.value, M ? u.value : void 0, p.value, y.value, f.value, m.value, i.value, g == null ? void 0 : g.selectedClass.value, e.class], style: [M ? s.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: I.href.value, tabindex: F.value ? 0 : void 0, onClick: $, onKeydown: F.value && !k.value && z }, { default: () => {
      var V;
      return [Fn(F.value, "v-chip"), C && d(Ra, { key: "filter" }, { default: () => [Ue(d("div", { class: "v-chip__filter" }, [o.filter ? d(je, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, o.filter) : d(Se, { key: "filter-icon", icon: e.filterIcon }, null)]), [[Ht, g.isSelected.value]])] }), w && d("div", { key: "prepend", class: "v-chip__prepend" }, [o.prepend ? d(je, { key: "prepend-defaults", disabled: !O, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, o.prepend) : d(Fe, null, [e.prependIcon && d(Se, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(Ut, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((V = o.default) == null ? void 0 : V.call(o, { isSelected: g == null ? void 0 : g.isSelected.value, selectedClass: g == null ? void 0 : g.selectedClass.value, select: g == null ? void 0 : g.select, toggle: g == null ? void 0 : g.toggle, value: g == null ? void 0 : g.value.value, disabled: e.disabled })) ?? e.text]), B && d("div", { key: "append", class: "v-chip__append" }, [o.append ? d(je, { key: "append-defaults", disabled: !E, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, o.append) : d(Fe, null, [e.appendIcon && d(Se, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(Ut, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), _ && d("button", Q({ key: "close", class: "v-chip__close" }, U.value), [o.close ? d(je, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, o.close) : d(Se, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[mt("ripple"), F.value && e.ripple, null]]);
  };
} }), Vl = Symbol.for("vuetify:list");
function Za() {
  const e = me(Vl, { hasPrepend: de(!1), updateHasPrepend: () => null }), n = { hasPrepend: de(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return tt(Vl, n), e;
}
function Qa() {
  return me(Vl, null);
}
const Cr = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    const a = /* @__PURE__ */ new Set();
    a.add(n);
    let c = o.get(n);
    for (; c != null; )
      a.add(c), c = o.get(c);
    return a;
  }
  return l.delete(n), l;
}, select: () => null }, ei = { open: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (t) {
    let a = o.get(n);
    for (l.add(n); a != null && a !== n; )
      l.add(a), a = o.get(a);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, Ir = { open: ei.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: o } = e;
  if (!t)
    return l;
  const a = [];
  let c = o.get(n);
  for (; c != null; )
    a.push(c), c = o.get(c);
  return new Set(a);
} }, _l = (e) => {
  const n = { select: (t) => {
    let { id: l, value: o, selected: a } = t;
    if (l = It(l), e && !o) {
      const c = Array.from(a.entries()).reduce((u, s) => {
        let [i, p] = s;
        return p === "on" ? [...u, i] : u;
      }, []);
      if (c.length === 1 && c[0] === l)
        return a;
    }
    return a.set(l, o ? "on" : "off"), a;
  }, in: (t, l, o) => {
    let a = /* @__PURE__ */ new Map();
    for (const c of t || [])
      a = n.select({ id: c, value: !0, selected: new Map(a), children: l, parents: o });
    return a;
  }, out: (t) => {
    const l = [];
    for (const [o, a] of t.entries())
      a === "on" && l.push(o);
    return l;
  } };
  return n;
}, Mo = (e) => {
  const n = _l(e);
  return { select: (t) => {
    let { selected: l, id: o, ...a } = t;
    o = It(o);
    const c = l.has(o) ? /* @__PURE__ */ new Map([[o, l.get(o)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...a, id: o, selected: c });
  }, in: (t, l, o) => {
    let a = /* @__PURE__ */ new Map();
    return t != null && t.length && (a = n.in(t.slice(0, 1), l, o)), a;
  }, out: (t, l, o) => n.out(t, l, o) };
}, Sn = Symbol.for("vuetify:nested"), ti = { id: de(), root: { register: () => null, unregister: () => null, parents: D(/* @__PURE__ */ new Map()), children: D(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: D(/* @__PURE__ */ new Set()), selected: D(/* @__PURE__ */ new Map()), selectedValues: D([]) } }, Sr = H({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Br = (e) => {
  let n = !1;
  const t = D(/* @__PURE__ */ new Map()), l = D(/* @__PURE__ */ new Map()), o = $e(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), a = v(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const f = Mo(y);
          return { select: (m) => {
            let { id: h, selected: b, children: g, ...I } = m;
            return h = It(h), g.has(h) ? b : f.select({ id: h, selected: b, children: g, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const f = _l(y);
          return { select: (m) => {
            let { id: h, selected: b, children: g, ...I } = m;
            return h = It(h), g.has(h) ? b : f.select({ id: h, selected: b, children: g, ...I });
          }, in: f.in, out: f.out };
        })(e.mandatory);
      case "independent":
        return _l(e.mandatory);
      case "single-independent":
        return Mo(e.mandatory);
      default:
        return ((y) => {
          const f = { select: (m) => {
            let { id: h, value: b, selected: g, children: I, parents: k } = m;
            h = It(h);
            const F = new Map(g), U = [h];
            for (; U.length; ) {
              const z = U.shift();
              g.set(z, b ? "on" : "off"), I.has(z) && U.push(...I.get(z));
            }
            let $ = k.get(h);
            for (; $; ) {
              const z = I.get($), L = z.every((B) => g.get(B) === "on"), E = z.every((B) => !g.has(B) || g.get(B) === "off");
              g.set($, L ? "on" : E ? "off" : "indeterminate"), $ = k.get($);
            }
            return y && !b && Array.from(g.entries()).reduce((L, E) => {
              let [B, _] = E;
              return _ === "on" ? [...L, B] : L;
            }, []).length === 0 ? F : g;
          }, in: (m, h, b) => {
            let g = /* @__PURE__ */ new Map();
            for (const I of m || [])
              g = f.select({ id: I, value: !0, selected: new Map(g), children: h, parents: b });
            return g;
          }, out: (m, h) => {
            const b = [];
            for (const [g, I] of m.entries())
              I !== "on" || h.has(g) || b.push(g);
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
        return Ir;
      case "single":
        return Cr;
      default:
        return ei;
    }
  }), u = $e(e, "selected", e.selected, (y) => a.value.in(y, t.value, l.value), (y) => a.value.out(y, t.value, l.value));
  function s(y) {
    const f = [];
    let m = y;
    for (; m != null; )
      f.unshift(m), m = l.value.get(m);
    return f;
  }
  yt(() => {
    n = !0;
  });
  const i = We("nested"), p = { id: de(), root: { opened: o, selected: u, selectedValues: v(() => {
    const y = [];
    for (const [f, m] of u.value.entries())
      m === "on" && y.push(f);
    return y;
  }), register: (y, f, m) => {
    f && y !== f && l.value.set(y, f), m && t.value.set(y, []), f != null && t.value.set(f, [...t.value.get(f) || [], y]);
  }, unregister: (y) => {
    if (n)
      return;
    t.value.delete(y);
    const f = l.value.get(y);
    if (f) {
      const m = t.value.get(f) ?? [];
      t.value.set(f, m.filter((h) => h !== y));
    }
    l.value.delete(y), o.value.delete(y);
  }, open: (y, f, m) => {
    i.emit("click:open", { id: y, value: f, path: s(y), event: m });
    const h = c.value.open({ id: y, value: f, opened: new Set(o.value), children: t.value, parents: l.value, event: m });
    h && (o.value = h);
  }, openOnSelect: (y, f, m) => {
    const h = c.value.select({ id: y, value: f, selected: new Map(u.value), opened: new Set(o.value), children: t.value, parents: l.value, event: m });
    h && (o.value = h);
  }, select: (y, f, m) => {
    i.emit("click:select", { id: y, value: f, path: s(y), event: m });
    const h = a.value.select({ id: y, value: f, selected: new Map(u.value), children: t.value, parents: l.value, event: m });
    h && (u.value = h), p.root.openOnSelect(y, f, m);
  }, children: t, parents: l } };
  return tt(Sn, p), p.root;
}, ni = (e, n) => {
  const t = me(Sn, ti), l = Symbol(nt()), o = v(() => e.value !== void 0 ? e.value : l), a = { ...t, id: o, open: (c, u) => t.root.open(o.value, c, u), openOnSelect: (c, u) => t.root.openOnSelect(o.value, c, u), isOpen: v(() => t.root.opened.value.has(o.value)), parent: v(() => t.root.parents.value.get(o.value)), select: (c, u) => t.root.select(o.value, c, u), isSelected: v(() => t.root.selected.value.get(It(o.value)) === "on"), isIndeterminate: v(() => t.root.selected.value.get(o.value) === "indeterminate"), isLeaf: v(() => !t.root.children.value.get(o.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(o.value, t.id.value, n), yt(() => {
    !t.isGroupActivator && t.root.unregister(o.value);
  }), n && tt(Sn, a), a;
}, xr = bn({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = me(Sn, ti);
    tt(Sn, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), kr = H({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: Ce, default: "$collapse" }, expandIcon: { type: Ce, default: "$expand" }, prependIcon: Ce, appendIcon: Ce, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ye(), ...et() }, "VListGroup"), Ro = ee()({ name: "VListGroup", props: kr(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: o, id: a } = ni(ae(e, "value"), !0), c = v(() => `v-list-group--id-${String(a.value)}`), u = Qa(), { isBooted: s } = function() {
    const m = de(!1);
    return qt(() => {
      window.requestAnimationFrame(() => {
        m.value = !0;
      });
    }), { ssrBootStyles: v(() => m.value ? void 0 : { transition: "none !important" }), isBooted: Dl(m) };
  }();
  function i(m) {
    o(!l.value, m);
  }
  const p = v(() => ({ onClick: i, class: "v-list-group__header", id: c.value })), y = v(() => l.value ? e.collapseIcon : e.expandIcon), f = v(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return se(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": u == null ? void 0 : u.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && d(je, { defaults: f.value }, { default: () => [d(xr, null, { default: () => [t.activator({ props: p.value, isOpen: l.value })] })] }), d(Ct, { transition: { component: ir }, disabled: !s.value }, { default: () => {
    var m;
    return [Ue(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(m = t.default) == null ? void 0 : m.call(t)]), [[Ht, l.value]])];
  } })] })), {};
} }), wr = wn("v-list-item-subtitle"), Fr = wn("v-list-item-title"), Ar = H({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: Ce, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: at(), onClickOnce: at(), ...on(), ...ye(), ...ut(), ...zt(), ...rn(), ...ht(), ...sl(), ...et(), ...Ne(), ...xt({ variant: "text" }) }, "VListItem"), tl = ee()({ name: "VListItem", directives: { Ripple: Pn }, props: Ar(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: o } = n;
  const a = rl(e, t), c = v(() => e.value === void 0 ? a.href.value : e.value), { select: u, isSelected: s, isIndeterminate: i, isGroupActivator: p, root: y, parent: f, openOnSelect: m } = ni(c, !1), h = Qa(), b = v(() => {
    var S;
    return e.active !== !1 && (e.active || ((S = a.isActive) == null ? void 0 : S.value) || s.value);
  }), g = v(() => e.link !== !1 && a.isLink.value), I = v(() => !e.disabled && e.link !== !1 && (e.link || a.isClickable.value || e.value != null && !!h)), k = v(() => e.rounded || e.nav), F = v(() => e.color ?? e.activeColor), U = v(() => ({ color: b.value ? F.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  J(() => {
    var S;
    return (S = a.isActive) == null ? void 0 : S.value;
  }, (S) => {
    S && f.value != null && y.open(f.value, !0), S && m(S);
  }, { immediate: !0 });
  const { themeClasses: $ } = Xe(e), { borderClasses: z } = an(e), { colorClasses: L, colorStyles: E, variantClasses: B } = An(U), { densityClasses: _ } = gt(e), { dimensionStyles: C } = Dt(e), { elevationClasses: O } = sn(e), { roundedClasses: w } = bt(k), M = v(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), V = v(() => ({ isActive: b.value, select: u, isSelected: s.value, isIndeterminate: i.value }));
  function A(S) {
    var x;
    o("click", S), !p && I.value && ((x = a.navigate) == null || x.call(a, S), e.value != null && u(!s.value, S));
  }
  function P(S) {
    S.key !== "Enter" && S.key !== " " || (S.preventDefault(), A(S));
  }
  return se(() => {
    const S = g.value ? "a" : e.tag, x = l.title || e.title != null, W = l.subtitle || e.subtitle != null, R = !(!e.appendAvatar && !e.appendIcon), Y = !(!R && !l.append), q = !(!e.prependAvatar && !e.prependIcon), T = !(!q && !l.prepend);
    var N, j;
    return h == null || h.updateHasPrepend(T), e.activeColor && (N = "active-color", j = ["color", "base-color"], j = Array.isArray(j) ? j.slice(0, -1).map((G) => `'${G}'`).join(", ") + ` or '${j.at(-1)}'` : `'${j}'`, ll(`[Vuetify UPGRADE] '${N}' is deprecated, use ${j} instead.`)), Ue(d(S, { class: ["v-list-item", { "v-list-item--active": b.value, "v-list-item--disabled": e.disabled, "v-list-item--link": I.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !T && (h == null ? void 0 : h.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && b.value }, $.value, z.value, L.value, _.value, O.value, M.value, w.value, B.value, e.class], style: [E.value, C.value, e.style], href: a.href.value, tabindex: I.value ? h ? -2 : 0 : void 0, onClick: A, onKeydown: I.value && !g.value && P }, { default: () => {
      var G;
      return [Fn(I.value || b.value, "v-list-item"), T && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(je, { key: "prepend-defaults", disabled: !q, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var X;
        return [(X = l.prepend) == null ? void 0 : X.call(l, V.value)];
      } }) : d(Fe, null, [e.prependAvatar && d(Ut, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(Se, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [x && d(Fr, { key: "title" }, { default: () => {
        var X;
        return [((X = l.title) == null ? void 0 : X.call(l, { title: e.title })) ?? e.title];
      } }), W && d(wr, { key: "subtitle" }, { default: () => {
        var X;
        return [((X = l.subtitle) == null ? void 0 : X.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (G = l.default) == null ? void 0 : G.call(l, V.value)]), Y && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(je, { key: "append-defaults", disabled: !R, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var X;
        return [(X = l.append) == null ? void 0 : X.call(l, V.value)];
      } }) : d(Fe, null, [e.appendIcon && d(Se, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(Ut, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[mt("ripple"), I.value && e.ripple]]);
  }), {};
} }), Vr = H({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ye(), ...et() }, "VListSubheader"), _r = ee()({ name: "VListSubheader", props: Vr(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: o } = ft(ae(e, "color"));
  return se(() => {
    const a = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: o }, e.style] }, { default: () => {
      var c;
      return [a && d("div", { class: "v-list-subheader__text" }, [((c = t.default) == null ? void 0 : c.call(t)) ?? e.title])];
    } });
  }), {};
} }), Or = H({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ye(), ...Ne() }, "VDivider"), Pr = ee()({ name: "VDivider", props: Or(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = Xe(e), { textColorClasses: o, textColorStyles: a } = ft(ae(e, "color")), c = v(() => {
    const u = {};
    return e.length && (u[e.vertical ? "maxHeight" : "maxWidth"] = ie(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ie(e.thickness)), u;
  });
  return se(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, o.value, e.class], style: [c.value, a.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), $r = H({ items: Array, returnObject: Boolean }, "VListChildren"), li = ee()({ name: "VListChildren", props: $r(), setup(e, n) {
  let { slots: t } = n;
  return Za(), () => {
    var l, o;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((o = e.items) == null ? void 0 : o.map((a) => {
      var f, m;
      let { children: c, props: u, type: s, raw: i } = a;
      if (s === "divider")
        return ((f = t.divider) == null ? void 0 : f.call(t, { props: u })) ?? d(Pr, u, null);
      if (s === "subheader")
        return ((m = t.subheader) == null ? void 0 : m.call(t, { props: u })) ?? d(_r, u, null);
      const p = { subtitle: t.subtitle ? (h) => {
        var b;
        return (b = t.subtitle) == null ? void 0 : b.call(t, { ...h, item: i });
      } : void 0, prepend: t.prepend ? (h) => {
        var b;
        return (b = t.prepend) == null ? void 0 : b.call(t, { ...h, item: i });
      } : void 0, append: t.append ? (h) => {
        var b;
        return (b = t.append) == null ? void 0 : b.call(t, { ...h, item: i });
      } : void 0, title: t.title ? (h) => {
        var b;
        return (b = t.title) == null ? void 0 : b.call(t, { ...h, item: i });
      } : void 0 }, y = Ro.filterProps(u);
      return c ? d(Ro, Q({ value: u == null ? void 0 : u.value }, y), { activator: (h) => {
        let { props: b } = h;
        const g = { ...u, ...b, value: e.returnObject ? i : u.value };
        return t.header ? t.header({ props: g }) : d(tl, g, p);
      }, default: () => d(li, { items: c }, t) }) : t.item ? t.item({ props: u }) : d(tl, Q(u, { value: e.returnObject ? i : u.value }), p);
    }));
  };
} }), oi = H({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: nn } }, "list-items");
function Ol(e, n) {
  const t = ct(n, e.itemTitle, n), l = ct(n, e.itemValue, t), o = ct(n, e.itemChildren), a = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? Tt(n, ["children"]) : n : ct(n, e.itemProps) };
  return { title: String(a.title ?? ""), value: a.value, props: a, children: Array.isArray(o) ? ai(e, o) : void 0, raw: n };
}
function ai(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ol(e, l));
  return t;
}
function Er(e, n) {
  const t = ct(n, e.itemType, "item"), l = function(u) {
    return typeof u == "string" || typeof u == "number" || typeof u == "boolean";
  }(n) ? n : ct(n, e.itemTitle), o = ct(n, e.itemValue, void 0), a = ct(n, e.itemChildren), c = { title: l, value: o, ...e.itemProps === !0 ? Tt(n, ["children"]) : ct(n, e.itemProps) };
  return { type: t, title: c.title, value: c.value, props: c, children: t === "item" && a ? ii(e, a) : void 0, raw: n };
}
function ii(e, n) {
  const t = [];
  for (const l of n)
    t.push(Er(e, l));
  return t;
}
const Tr = H({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...Sr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...on(), ...ye(), ...ut(), ...zt(), ...rn(), itemType: { type: String, default: "type" }, ...oi(), ...ht(), ...et(), ...Ne(), ...xt({ variant: "text" }) }, "VList"), zr = ee()({ name: "VList", props: Tr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(B) {
    return { items: v(() => ii(B, B.items)) };
  }(e), { themeClasses: o } = Xe(e), { backgroundColorClasses: a, backgroundColorStyles: c } = Gt(ae(e, "bgColor")), { borderClasses: u } = an(e), { densityClasses: s } = gt(e), { dimensionStyles: i } = Dt(e), { elevationClasses: p } = sn(e), { roundedClasses: y } = bt(e), { open: f, select: m } = Br(e), h = v(() => e.lines ? `v-list--${e.lines}-line` : void 0), b = ae(e, "activeColor"), g = ae(e, "baseColor"), I = ae(e, "color");
  Za(), ln({ VListGroup: { activeColor: b, baseColor: g, color: I }, VListItem: { activeClass: ae(e, "activeClass"), activeColor: b, baseColor: g, color: I, density: ae(e, "density"), disabled: ae(e, "disabled"), lines: ae(e, "lines"), nav: ae(e, "nav"), slim: ae(e, "slim"), variant: ae(e, "variant") } });
  const k = de(!1), F = D();
  function U(B) {
    k.value = !0;
  }
  function $(B) {
    k.value = !1;
  }
  function z(B) {
    var _;
    k.value || B.relatedTarget && ((_ = F.value) != null && _.contains(B.relatedTarget)) || E();
  }
  function L(B) {
    if (F.value) {
      if (B.key === "ArrowDown")
        E("next");
      else if (B.key === "ArrowUp")
        E("prev");
      else if (B.key === "Home")
        E("first");
      else {
        if (B.key !== "End")
          return;
        E("last");
      }
      B.preventDefault();
    }
  }
  function E(B) {
    if (F.value)
      return Hn(F.value, B);
  }
  return se(() => d(e.tag, { ref: F, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, o.value, a.value, u.value, s.value, p.value, h.value, y.value, e.class], style: [c.value, i.value, e.style], tabindex: e.disabled || k.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: U, onFocusout: $, onFocus: z, onKeydown: L }, { default: () => [d(li, { items: l.value, returnObject: e.returnObject }, t)] })), { open: f, select: m, focus: E };
} });
function hl(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function No(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return hl({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return hl({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return hl({ x: n.width / 2, y: n.height / 2 }, n);
}
const ri = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(m) {
    for (; m; ) {
      if (window.getComputedStyle(m).position === "fixed")
        return !0;
      m = m.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: o } = jl(() => {
    const m = kl(n.location, e.isRtl.value), h = n.origin === "overlap" ? m : n.origin === "auto" ? fl(m) : kl(n.origin, e.isRtl.value);
    return m.side === h.side && m.align === yl(h).align ? { preferredAnchor: fo(m), preferredOrigin: fo(h) } : { preferredAnchor: m, preferredOrigin: h };
  }), [a, c, u, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((m) => v(() => {
    const h = parseFloat(n[m]);
    return isNaN(h) ? 1 / 0 : h;
  })), i = v(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const m = n.offset.split(" ").map(parseFloat);
      return m.length < 2 && m.push(0), m;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
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
    const m = fa(e.target.value), h = function(B, _) {
      _ ? B.style.removeProperty("left") : B.style.removeProperty("right");
      const C = Gl(B);
      return _ ? C.x += parseFloat(B.style.right || 0) : C.x -= parseFloat(B.style.left || 0), C.y -= parseFloat(B.style.top || 0), C;
    }(e.contentEl.value, e.isRtl.value), b = Jn(e.contentEl.value);
    b.length || (b.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (h.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), h.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const g = b.reduce((B, _) => {
      const C = _.getBoundingClientRect(), O = new wt({ x: _ === document.documentElement ? 0 : C.x, y: _ === document.documentElement ? 0 : C.y, width: _.clientWidth, height: _.clientHeight });
      return B ? new wt({ x: Math.max(B.left, O.left), y: Math.max(B.top, O.top), width: Math.min(B.right, O.right) - Math.max(B.left, O.left), height: Math.min(B.bottom, O.bottom) - Math.max(B.top, O.top) }) : O;
    }, void 0);
    g.x += 12, g.y += 12, g.width -= 24, g.height -= 24;
    let I = { anchor: l.value, origin: o.value };
    function k(B) {
      const _ = new wt(h), C = No(B.anchor, m), O = No(B.origin, _);
      let { x: w, y: M } = (A = O, { x: (V = C).x - A.x, y: V.y - A.y });
      var V, A;
      switch (B.anchor.side) {
        case "top":
          M -= i.value[0];
          break;
        case "bottom":
          M += i.value[0];
          break;
        case "left":
          w -= i.value[0];
          break;
        case "right":
          w += i.value[0];
      }
      switch (B.anchor.align) {
        case "top":
          M -= i.value[1];
          break;
        case "bottom":
          M += i.value[1];
          break;
        case "left":
          w -= i.value[1];
          break;
        case "right":
          w += i.value[1];
      }
      return _.x += w, _.y += M, _.width = Math.min(_.width, u.value), _.height = Math.min(_.height, s.value), { overflows: mo(_, g), x: w, y: M };
    }
    let F = 0, U = 0;
    const $ = { x: 0, y: 0 }, z = { x: !1, y: !1 };
    let L = -1;
    for (; ; ) {
      if (L++ > 10) {
        ll("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: B, y: _, overflows: C } = k(I);
      F += B, U += _, h.x += B, h.y += _;
      {
        const O = yo(I.anchor), w = C.x.before || C.x.after, M = C.y.before || C.y.after;
        let V = !1;
        if (["x", "y"].forEach((A) => {
          if (A === "x" && w && !z.x || A === "y" && M && !z.y) {
            const P = { anchor: { ...I.anchor }, origin: { ...I.origin } }, S = A === "x" ? O === "y" ? yl : fl : O === "y" ? fl : yl;
            P.anchor = S(P.anchor), P.origin = S(P.origin);
            const { overflows: x } = k(P);
            (x[A].before <= C[A].before && x[A].after <= C[A].after || x[A].before + x[A].after < (C[A].before + C[A].after) / 2) && (I = P, V = z[A] = !0);
          }
        }), V)
          continue;
      }
      C.x.before && (F += C.x.before, h.x += C.x.before), C.x.after && (F -= C.x.after, h.x -= C.x.after), C.y.before && (U += C.y.before, h.y += C.y.before), C.y.after && (U -= C.y.after, h.y -= C.y.after);
      {
        const O = mo(h, g);
        $.x = g.width - O.x.before - O.x.after, $.y = g.height - O.y.before - O.y.after, F += O.x.before, h.x += O.x.before, U += O.y.before, h.y += O.y.before;
      }
      break;
    }
    const E = yo(I.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${I.anchor.side} ${I.anchor.align}`, transformOrigin: `${I.origin.side} ${I.origin.align}`, top: ie(bl(U)), left: e.isRtl.value ? void 0 : ie(bl(F)), right: e.isRtl.value ? ie(bl(-F)) : void 0, minWidth: ie(E === "y" ? Math.min(a.value, m.width) : a.value), maxWidth: ie(jo(jt($.x, a.value === 1 / 0 ? 0 : a.value, u.value))), maxHeight: ie(jo(jt($.y, c.value === 1 / 0 ? 0 : c.value, s.value))) }), { available: $, contentBox: h };
  }
  return J([e.target, e.contentEl], (m, h) => {
    let [b, g] = m, [I, k] = h;
    I && !Array.isArray(I) && y.unobserve(I), b && !Array.isArray(b) && y.observe(b), k && y.unobserve(k), g && y.observe(g);
  }, { immediate: !0 }), He(() => {
    y.disconnect();
  }), J(() => [l.value, o.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => f()), Me(() => {
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
} }, Dr = H({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ri }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function bl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function jo(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Pl = !0;
const nl = [];
let Go = -1;
function $l() {
  cancelAnimationFrame(Go), Go = requestAnimationFrame(() => {
    const e = nl.shift();
    e && e(), nl.length ? $l() : Pl = !0;
  });
}
const jn = { none: null, close: function(e) {
  Uo(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var u;
  const t = (u = e.root.value) == null ? void 0 : u.offsetParent, l = [.../* @__PURE__ */ new Set([...Jn(e.targetEl.value, n.contained ? t : void 0), ...Jn(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), o = window.innerWidth - document.documentElement.offsetWidth, a = (c = t || document.documentElement, ql(c) && c);
  var c;
  a && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, i) => {
    s.style.setProperty("--v-body-scroll-x", ie(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", ie(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", ie(o)), s.classList.add("v-overlay-scroll-blocked");
  }), He(() => {
    l.forEach((s, i) => {
      const p = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
      s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -p, s.scrollTop = -y;
    }), a && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, o = -1, a = -1;
  function c(u) {
    var s;
    s = () => {
      var y, f;
      const i = performance.now();
      (f = (y = e.updateLocation).value) == null || f.call(y, u), l = (performance.now() - i) / (1e3 / 60) > 2;
    }, !Pl || nl.length ? (nl.push(s), $l()) : (Pl = !1, s(), $l());
  }
  a = (typeof requestIdleCallback > "u" ? (u) => u() : requestIdleCallback)(() => {
    t.run(() => {
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
} }, Lr = H({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in jn } }, "VOverlay-scroll-strategies");
function Uo(e, n) {
  const t = [document, ...Jn(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), He(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const El = Symbol.for("vuetify:v-menu"), Wr = H({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Mr = H({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Wr() }, "VOverlay-activator");
function Rr(e, n) {
  let { isActive: t, isTop: l } = n;
  const o = We("useActivator"), a = D();
  let c = !1, u = !1, s = !0;
  const i = v(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), p = v(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !i.value), { runOpenDelay: y, runCloseDelay: f } = function(C, O) {
    const w = {}, M = (V) => () => {
      if (!Ke)
        return Promise.resolve(!0);
      const A = V === "openDelay";
      return w.closeDelay && window.clearTimeout(w.closeDelay), delete w.closeDelay, w.openDelay && window.clearTimeout(w.openDelay), delete w.openDelay, new Promise((P) => {
        const S = parseInt(C[V] ?? 0, 10);
        w[V] = window.setTimeout(() => {
          O == null || O(A), P(A);
        }, S);
      });
    };
    return { runCloseDelay: M("closeDelay"), runOpenDelay: M("openDelay") };
  }(e, (C) => {
    C !== (e.openOnHover && c || i.value && u) || e.openOnHover && t.value && !l.value || (t.value !== C && (s = !0), t.value = C);
  }), m = D(), h = (C) => {
    C.stopPropagation(), a.value = C.currentTarget || C.target, t.value || (m.value = [C.clientX, C.clientY]), t.value = !t.value;
  }, b = (C) => {
    var O;
    (O = C.sourceCapabilities) != null && O.firesTouchEvents || (c = !0, a.value = C.currentTarget || C.target, y());
  }, g = (C) => {
    c = !1, f();
  }, I = (C) => {
    Yn(C.target, ":focus-visible") !== !1 && (u = !0, C.stopPropagation(), a.value = C.currentTarget || C.target, y());
  }, k = (C) => {
    u = !1, C.stopPropagation(), f();
  }, F = v(() => {
    const C = {};
    return p.value && (C.onClick = h), e.openOnHover && (C.onMouseenter = b, C.onMouseleave = g), i.value && (C.onFocus = I, C.onBlur = k), C;
  }), U = v(() => {
    const C = {};
    if (e.openOnHover && (C.onMouseenter = () => {
      c = !0, y();
    }, C.onMouseleave = () => {
      c = !1, f();
    }), i.value && (C.onFocusin = () => {
      u = !0, y();
    }, C.onFocusout = () => {
      u = !1, f();
    }), e.closeOnContentClick) {
      const O = me(El, null);
      C.onClick = () => {
        t.value = !1, O == null || O.closeParents();
      };
    }
    return C;
  }), $ = v(() => {
    const C = {};
    return e.openOnHover && (C.onMouseenter = () => {
      s && (c = !0, s = !1, y());
    }, C.onMouseleave = () => {
      c = !1, f();
    }), C;
  });
  J(l, (C) => {
    !C || (!e.openOnHover || c || i.value && u) && (!i.value || u || e.openOnHover && c) || (t.value = !1);
  }), J(t, (C) => {
    C || setTimeout(() => {
      m.value = void 0;
    });
  }, { flush: "post" });
  const z = D();
  it(() => {
    z.value && Me(() => {
      a.value = Un(z.value);
    });
  });
  const L = D(), E = v(() => e.target === "cursor" && m.value ? m.value : L.value ? Un(L.value) : qo(e.target, o) || a.value), B = v(() => Array.isArray(E.value) ? void 0 : E.value);
  let _;
  return J(() => !!e.activator, (C) => {
    C && Ke ? (_ = zl(), _.run(() => {
      (function(O, w, M) {
        let { activatorEl: V, activatorEvents: A } = M;
        function P() {
          let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x(), R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O.activatorProps;
          W && function(Y, q) {
            Object.keys(q).forEach((T) => {
              if (Bl(T)) {
                const N = co(T), j = Dn.get(Y);
                if (q[T] == null)
                  j == null || j.forEach((G) => {
                    const [X, te] = G;
                    X === N && (Y.removeEventListener(N, te), j.delete(G));
                  });
                else if (!j || ![...j].some((G) => G[0] === N && G[1] === q[T])) {
                  Y.addEventListener(N, q[T]);
                  const G = j || /* @__PURE__ */ new Set();
                  G.add([N, q[T]]), Dn.has(Y) || Dn.set(Y, G);
                }
              } else
                q[T] == null ? Y.removeAttribute(T) : Y.setAttribute(T, q[T]);
            });
          }(W, Q(A.value, R));
        }
        function S() {
          let W = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x(), R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : O.activatorProps;
          W && function(Y, q) {
            Object.keys(q).forEach((T) => {
              if (Bl(T)) {
                const N = co(T), j = Dn.get(Y);
                j == null || j.forEach((G) => {
                  const [X, te] = G;
                  X === N && (Y.removeEventListener(N, te), j.delete(G));
                });
              } else
                Y.removeAttribute(T);
            });
          }(W, Q(A.value, R));
        }
        function x() {
          const W = qo(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : O.activator, w);
          return V.value = (W == null ? void 0 : W.nodeType) === Node.ELEMENT_NODE ? W : void 0, V.value;
        }
        J(() => O.activator, (W, R) => {
          if (R && W !== R) {
            const Y = x(R);
            Y && S(Y);
          }
          W && Me(() => P());
        }, { immediate: !0 }), J(() => O.activatorProps, () => {
          P();
        }), He(() => {
          S();
        });
      })(e, o, { activatorEl: a, activatorEvents: F });
    })) : _ && _.stop();
  }, { flush: "post", immediate: !0 }), He(() => {
    _ == null || _.stop();
  }), { activatorEl: a, activatorRef: z, target: E, targetEl: B, targetRef: L, activatorEvents: F, contentEvents: U, scrimEvents: $ };
}
function qo(e, n) {
  var l, o;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let a = (o = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : o.parentNode;
    for (; a != null && a.hasAttribute("data-no-activator"); )
      a = a.parentNode;
    t = a;
  } else
    t = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return t;
}
const Nr = Symbol.for("vuetify:display");
function si() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = me(Nr);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = v(() => {
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const a = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < a;
  }), o = v(() => n ? { [`${n}--mobile`]: l.value } : {});
  return { ...t, displayClasses: o, mobile: l };
}
const jr = H({ eager: Boolean }, "lazy");
function ui() {
  const e = We("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const Ho = Symbol.for("vuetify:stack"), yn = lt([]);
function Gr() {
  return !0;
}
function Yo(e, n, t) {
  if (!e || ci(e, t) === !1)
    return !1;
  const l = ma(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const o = (typeof t.value == "object" && t.value.include || (() => []))();
  return o.push(n), !o.some((a) => a == null ? void 0 : a.contains(e.target));
}
function ci(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Gr)(e);
}
function Xo(e, n) {
  const t = ma(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Ur = { mounted(e, n) {
  const t = (o) => function(a, c, u) {
    const s = typeof u.value == "function" ? u.value : u.value.handler;
    c._clickOutside.lastMousedownWasOutside && Yo(a, c, u) && setTimeout(() => {
      ci(a, u) && s && s(a);
    }, 0);
  }(o, e, n), l = (o) => {
    e._clickOutside.lastMousedownWasOutside = Yo(o, e, n);
  };
  Xo(e, (o) => {
    o.addEventListener("click", t, !0), o.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (Xo(e, (t) => {
    var a;
    if (!t || !((a = e._clickOutside) != null && a[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: o } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", o, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function qr(e) {
  const { modelValue: n, color: t, ...l } = e;
  return d(At, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Q({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const di = H({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Mr(), ...ye(), ...zt(), ...jr(), ...Dr(), ...Lr(), ...Ne(), ...$n() }, "VOverlay"), Ko = ee()({ name: "VOverlay", directives: { ClickOutside: Ur }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...di() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var Y, q;
  let { slots: t, attrs: l, emit: o } = n;
  const a = $e(e, "modelValue"), c = v({ get: () => a.value, set: (T) => {
    T && e.disabled || (a.value = T);
  } }), { teleportTarget: u } = function(T) {
    return { teleportTarget: v(() => {
      const N = T.value;
      if (N === !0 || !Ke)
        return;
      const j = N === !1 ? document.body : typeof N == "string" ? document.querySelector(N) : N;
      if (j == null)
        return void ll(`Unable to locate target ${N}`);
      let G = j.querySelector(":scope > .v-overlay-container");
      return G || (G = document.createElement("div"), G.className = "v-overlay-container", j.appendChild(G)), G;
    }) };
  }(v(() => e.attach || e.contained)), { themeClasses: s } = Xe(e), { rtlClasses: i, isRtl: p } = On(), { hasContent: y, onAfterLeave: f } = function(T, N) {
    const j = de(!1), G = v(() => j.value || T.eager || N.value);
    return J(N, () => j.value = !0), { isBooted: j, hasContent: G, onAfterLeave: function() {
      T.eager || (j.value = !1);
    } };
  }(e, c), m = Gt(v(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: h, localTop: b, stackStyles: g } = function(T, N, j) {
    const G = We("useStack"), X = !j, te = me(Ho, void 0), pe = lt({ activeChildren: /* @__PURE__ */ new Set() });
    tt(Ho, pe);
    const ge = de(+N.value);
    Ft(T, () => {
      var ke;
      const Ae = (ke = yn.at(-1)) == null ? void 0 : ke[1];
      ge.value = Ae ? Ae + 10 : +N.value, X && yn.push([G.uid, ge.value]), te == null || te.activeChildren.add(G.uid), He(() => {
        if (X) {
          const Be = It(yn).findIndex((Oe) => Oe[0] === G.uid);
          yn.splice(Be, 1);
        }
        te == null || te.activeChildren.delete(G.uid);
      });
    });
    const he = de(!0);
    X && it(() => {
      var ke;
      const Ae = ((ke = yn.at(-1)) == null ? void 0 : ke[0]) === G.uid;
      setTimeout(() => he.value = Ae);
    });
    const ze = v(() => !pe.activeChildren.size);
    return { globalTop: Dl(he), localTop: ze, stackStyles: v(() => ({ zIndex: ge.value })) };
  }(c, ae(e, "zIndex"), e._disableGlobalStack), { activatorEl: I, activatorRef: k, target: F, targetEl: U, targetRef: $, activatorEvents: z, contentEvents: L, scrimEvents: E } = Rr(e, { isActive: c, isTop: b }), { dimensionStyles: B } = Dt(e), _ = function() {
    if (!Ke)
      return de(!1);
    const { ssr: T } = si();
    if (T) {
      const N = de(!1);
      return qt(() => {
        N.value = !0;
      }), N;
    }
    return de(!0);
  }(), { scopeId: C } = ui();
  J(() => e.disabled, (T) => {
    T && (c.value = !1);
  });
  const O = D(), w = D(), { contentStyles: M, updateLocation: V } = function(T, N) {
    const j = D({}), G = D();
    function X(te) {
      var pe;
      (pe = G.value) == null || pe.call(G, te);
    }
    return Ke && Ft(() => !(!N.isActive.value || !T.locationStrategy), (te) => {
      var pe, ge;
      J(() => T.locationStrategy, te), He(() => {
        window.removeEventListener("resize", X), G.value = void 0;
      }), window.addEventListener("resize", X, { passive: !0 }), typeof T.locationStrategy == "function" ? G.value = (pe = T.locationStrategy(N, T, j)) == null ? void 0 : pe.updateLocation : G.value = (ge = ri[T.locationStrategy](N, T, j)) == null ? void 0 : ge.updateLocation;
    }), { contentStyles: j, updateLocation: G };
  }(e, { isRtl: p, contentEl: w, target: F, isActive: c });
  function A(T) {
    o("click:outside", T), e.persistent ? R() : c.value = !1;
  }
  function P() {
    return c.value && h.value;
  }
  function S(T) {
    var N, j;
    T.key === "Escape" && h.value && (e.persistent ? R() : (c.value = !1, (N = w.value) != null && N.contains(document.activeElement) && ((j = I.value) == null || j.focus())));
  }
  (function(T, N) {
    if (!Ke)
      return;
    let j;
    it(async () => {
      j == null || j.stop(), N.isActive.value && T.scrollStrategy && (j = zl(), await Me(), j.active && j.run(() => {
        var G;
        typeof T.scrollStrategy == "function" ? T.scrollStrategy(N, T, j) : (G = jn[T.scrollStrategy]) == null || G.call(jn, N, T, j);
      }));
    }), He(() => {
      j == null || j.stop();
    });
  })(e, { root: O, contentEl: w, targetEl: U, isActive: c, updateLocation: V }), Ke && J(c, (T) => {
    T ? window.addEventListener("keydown", S) : window.removeEventListener("keydown", S);
  }, { immediate: !0 });
  const x = (q = (Y = We("useRouter")) == null ? void 0 : Y.proxy) == null ? void 0 : q.$router;
  Ft(() => e.closeOnBack, () => {
    (function(T, N) {
      let j, G, X = !1;
      function te(pe) {
        var ge;
        (ge = pe.state) != null && ge.replaced || (X = !0, setTimeout(() => X = !1));
      }
      Ke && (Me(() => {
        window.addEventListener("popstate", te), j = T == null ? void 0 : T.beforeEach((pe, ge, he) => {
          gl ? X ? N(he) : he() : setTimeout(() => X ? N(he) : he()), gl = !0;
        }), G = T == null ? void 0 : T.afterEach(() => {
          gl = !1;
        });
      }), He(() => {
        window.removeEventListener("popstate", te), j == null || j(), G == null || G();
      }));
    })(x, (T) => {
      h.value && c.value ? (T(!1), e.persistent ? R() : c.value = !1) : T();
    });
  });
  const W = D();
  function R() {
    e.noClickAnimation || w.value && Nt(w.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Kn });
  }
  return J(() => c.value && (e.absolute || e.contained) && u.value == null, (T) => {
    if (T) {
      const N = ha(O.value);
      N && N !== document.scrollingElement && (W.value = N.scrollTop);
    }
  }), se(() => {
    var T;
    return d(Fe, null, [(T = t.activator) == null ? void 0 : T.call(t, { isActive: c.value, props: Q({ ref: k, targetRef: $ }, z.value, e.activatorProps) }), _.value && y.value && d(Pt, { disabled: !u.value, to: u.value }, { default: () => [d("div", Q({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, s.value, i.value, e.class], style: [g.value, { top: ie(W.value) }, e.style], ref: O }, C, l), [d(qr, Q({ color: m, modelValue: c.value && !!e.scrim }, E.value), null), d(Ct, { appear: !0, persisted: !0, transition: e.transition, target: F.value, onAfterLeave: () => {
      f(), o("afterLeave");
    } }, { default: () => {
      var N;
      return [Ue(d("div", Q({ ref: w, class: ["v-overlay__content", e.contentClass], style: [B.value, M.value] }, L.value, e.contentProps), [(N = t.default) == null ? void 0 : N.call(t, { isActive: c })]), [[Ht, c.value], [mt("click-outside"), { handler: A, closeConditional: P, include: () => [I.value] }]])];
    } })])] })]);
  }), { activatorEl: I, target: F, animateClick: R, contentEl: w, globalTop: h, localTop: b, updateLocation: V };
} }), Cl = Symbol("Forwarded refs");
function Il(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function ul(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[Cl] = t, new Proxy(e, { get(o, a) {
    if (Reflect.has(o, a))
      return Reflect.get(o, a);
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const c of t)
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
    for (const c of t)
      if (c.value && Reflect.has(c.value, a))
        return !0;
    return !1;
  }, set(o, a, c) {
    if (Reflect.has(o, a))
      return Reflect.set(o, a, c);
    if (typeof a == "symbol" || a.startsWith("$") || a.startsWith("__"))
      return !1;
    for (const u of t)
      if (u.value && Reflect.has(u.value, a))
        return Reflect.set(u.value, a, c);
    return !1;
  }, getOwnPropertyDescriptor(o, a) {
    var u;
    const c = Reflect.getOwnPropertyDescriptor(o, a);
    if (c)
      return c;
    if (typeof a != "symbol" && !a.startsWith("$") && !a.startsWith("__")) {
      for (const s of t) {
        if (!s.value)
          continue;
        const i = Il(s.value, a) ?? ("_" in s.value ? Il((u = s.value._) == null ? void 0 : u.setupState, a) : void 0);
        if (i)
          return i;
      }
      for (const s of t) {
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
const Hr = H({ id: String, ...Tt(di({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Wa } }), ["absolute"]) }, "VMenu"), Yr = ee()({ name: "VMenu", props: Hr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = $e(e, "modelValue"), { scopeId: o } = ui(), a = nt(), c = v(() => e.id || `v-menu-${a}`), u = D(), s = me(El, null), i = de(0);
  async function p(b) {
    var k, F, U;
    const g = b.relatedTarget, I = b.target;
    await Me(), l.value && g !== I && ((k = u.value) != null && k.contentEl) && ((F = u.value) != null && F.globalTop) && ![document, u.value.contentEl].includes(I) && !u.value.contentEl.contains(I) && ((U = xl(u.value.contentEl)[0]) == null || U.focus());
  }
  function y() {
    s == null || s.closeParents();
  }
  function f(b) {
    var g, I, k;
    !e.disabled && b.key === "Tab" && (da(xl((g = u.value) == null ? void 0 : g.contentEl, !1), b.shiftKey ? "prev" : "next", (F) => F.tabIndex >= 0) || (l.value = !1, (k = (I = u.value) == null ? void 0 : I.activatorEl) == null || k.focus()));
  }
  function m(b) {
    var I;
    if (e.disabled)
      return;
    const g = (I = u.value) == null ? void 0 : I.contentEl;
    g && l.value ? b.key === "ArrowDown" ? (b.preventDefault(), Hn(g, "next")) : b.key === "ArrowUp" && (b.preventDefault(), Hn(g, "prev")) : ["ArrowDown", "ArrowUp"].includes(b.key) && (l.value = !0, b.preventDefault(), setTimeout(() => setTimeout(() => m(b))));
  }
  tt(El, { register() {
    ++i.value;
  }, unregister() {
    --i.value;
  }, closeParents() {
    setTimeout(() => {
      i.value || (l.value = !1, s == null || s.closeParents());
    }, 40);
  } }), J(l, (b) => {
    b ? (s == null || s.register(), document.addEventListener("focusin", p, { once: !0 })) : (s == null || s.unregister(), document.removeEventListener("focusin", p));
  });
  const h = v(() => Q({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: m }, e.activatorProps));
  return se(() => {
    const b = Ko.filterProps(e);
    return d(Ko, Q({ ref: u, class: ["v-menu", e.class], style: e.style }, b, { modelValue: l.value, "onUpdate:modelValue": (g) => l.value = g, absolute: !0, activatorProps: h.value, "onClick:outside": y, onKeydown: f }, o), { activator: t.activator, default: function() {
      for (var g = arguments.length, I = new Array(g), k = 0; k < g; k++)
        I[k] = arguments[k];
      return d(je, { root: "VMenu" }, { default: () => {
        var F;
        return [(F = t.default) == null ? void 0 : F.call(t, ...I)];
      } });
    } });
  }), ul({ id: c, ΨopenChildren: i }, u);
} }), Xr = H({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ye(), ...$n({ transition: { component: Ma } }) }, "VCounter"), pi = ee()({ name: "VCounter", functional: !0, props: Xr(), setup(e, n) {
  let { slots: t } = n;
  const l = v(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return se(() => d(Ct, { transition: e.transition }, { default: () => [Ue(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[Ht, e.active]])] })), {};
} }), Kr = H({ floating: Boolean, ...ye() }, "VFieldLabel"), Mn = ee()({ name: "VFieldLabel", props: Kr(), setup(e, n) {
  let { slots: t } = n;
  return se(() => d(Ga, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), Jr = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], no = H({ appendInnerIcon: Ce, bgColor: String, clearable: Boolean, clearIcon: { type: Ce, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: Ce, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => Jr.includes(e) }, "onClick:clear": at(), "onClick:appendInner": at(), "onClick:prependInner": at(), ...ye(), ...Zl(), ...ht(), ...Ne() }, "VField"), lo = ee()({ name: "VField", inheritAttrs: !1, props: { id: String, ...Xa(), ...no() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { themeClasses: a } = Xe(e), { loaderClasses: c } = il(e), { focusClasses: u, isFocused: s, focus: i, blur: p } = En(e), { InputIcon: y } = Ya(e), { roundedClasses: f } = bt(e), { rtlClasses: m } = On(), h = v(() => e.dirty || e.active), b = v(() => !(e.singleLine || !e.label && !o.label)), g = nt(), I = v(() => e.id || `input-${g}`), k = v(() => `${I.value}-messages`), F = D(), U = D(), $ = D(), z = v(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: L, backgroundColorStyles: E } = Gt(ae(e, "bgColor")), { textColorClasses: B, textColorStyles: _ } = ft(v(() => e.error || e.disabled ? void 0 : h.value && s.value ? e.color : e.baseColor));
  J(h, (w) => {
    if (b.value) {
      const M = F.value.$el, V = U.value.$el;
      requestAnimationFrame(() => {
        const A = Gl(M), P = V.getBoundingClientRect(), S = P.x - A.x, x = P.y - A.y - (A.height / 2 - P.height / 2), W = P.width / 0.75, R = Math.abs(W - A.width) > 1 ? { maxWidth: ie(W) } : void 0, Y = getComputedStyle(M), q = getComputedStyle(V), T = 1e3 * parseFloat(Y.transitionDuration) || 150, N = parseFloat(q.getPropertyValue("--v-field-label-scale")), j = q.getPropertyValue("color");
        M.style.visibility = "visible", V.style.visibility = "hidden", Nt(M, { transform: `translate(${S}px, ${x}px) scale(${N})`, color: j, ...R }, { duration: T, easing: Kn, direction: w ? "normal" : "reverse" }).finished.then(() => {
          M.style.removeProperty("visibility"), V.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const C = v(() => ({ isActive: h, isFocused: s, controlRef: $, blur: p, focus: i }));
  function O(w) {
    w.target !== document.activeElement && w.preventDefault();
  }
  return se(() => {
    var S, x, W;
    const w = e.variant === "outlined", M = o["prepend-inner"] || e.prependInnerIcon, V = !(!e.clearable && !o.clear), A = !!(o["append-inner"] || e.appendInnerIcon || V), P = () => o.label ? o.label({ ...C.value, label: e.label, props: { for: I.value } }) : e.label;
    return d("div", Q({ class: ["v-field", { "v-field--active": h.value, "v-field--appended": A, "v-field--center-affix": e.centerAffix ?? !z.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": M, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !P(), [`v-field--variant-${e.variant}`]: !0 }, a.value, L.value, u.value, c.value, f.value, m.value, e.class], style: [E.value, e.style], onClick: O }, t), [d("div", { class: "v-field__overlay" }, null), d(Ql, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: o.loader }), M && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (S = o["prepend-inner"]) == null ? void 0 : S.call(o, C.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && b.value && d(Mn, { key: "floating-label", ref: U, class: [B.value], floating: !0, for: I.value, style: _.value }, { default: () => [P()] }), d(Mn, { ref: F, for: I.value }, { default: () => [P()] }), (x = o.default) == null ? void 0 : x.call(o, { ...C.value, props: { id: I.value, class: "v-field__input", "aria-describedby": k.value }, focus: i, blur: p })]), V && d(Ra, { key: "clear" }, { default: () => [Ue(d("div", { class: "v-field__clearable", onMousedown: (R) => {
      R.preventDefault(), R.stopPropagation();
    } }, [o.clear ? o.clear() : d(y, { name: "clear" }, null)]), [[Ht, e.dirty]])] }), A && d("div", { key: "append", class: "v-field__append-inner" }, [(W = o["append-inner"]) == null ? void 0 : W.call(o, C.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", B.value], style: _.value }, [w && d(Fe, null, [d("div", { class: "v-field__outline__start" }, null), b.value && d("div", { class: "v-field__outline__notch" }, [d(Mn, { ref: U, floating: !0, for: I.value }, { default: () => [P()] })]), d("div", { class: "v-field__outline__end" }, null)]), z.value && b.value && d(Mn, { ref: U, floating: !0, for: I.value }, { default: () => [P()] })])]);
  }), { controlRef: $ };
} });
function vi(e) {
  return ra(e, Object.keys(lo.props).filter((n) => !Bl(n) && n !== "class" && n !== "style"));
}
const Zr = ["color", "file", "time", "date", "datetime-local", "week", "month"], fi = H({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...Tn(), ...no() }, "VTextField"), Tl = ee()({ name: "VTextField", directives: { Intersect: eo }, inheritAttrs: !1, props: fi(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const a = $e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = En(e), i = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : typeof e.counterValue == "number" ? e.counterValue : (a.value ?? "").toString().length), p = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = v(() => ["plain", "underlined"].includes(e.variant));
  function f(z, L) {
    var E, B;
    e.autofocus && z && ((B = (E = L[0].target) == null ? void 0 : E.focus) == null || B.call(E));
  }
  const m = D(), h = D(), b = D(), g = v(() => Zr.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function I() {
    var z;
    b.value !== document.activeElement && ((z = b.value) == null || z.focus()), c.value || u();
  }
  function k(z) {
    l("mousedown:control", z), z.target !== b.value && (I(), z.preventDefault());
  }
  function F(z) {
    I(), l("click:control", z);
  }
  function U(z) {
    z.stopPropagation(), I(), Me(() => {
      a.value = null, ca(e["onClick:clear"], z);
    });
  }
  function $(z) {
    var E;
    const L = z.target;
    if (a.value = L.value, ((E = e.modelModifiers) == null ? void 0 : E.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const B = [L.selectionStart, L.selectionEnd];
      Me(() => {
        L.selectionStart = B[0], L.selectionEnd = B[1];
      });
    }
  }
  return se(() => {
    const z = !!(o.counter || e.counter !== !1 && e.counter != null), L = !(!z && !o.details), [E, B] = kn(t), { modelValue: _, ...C } = St.filterProps(e), O = vi(e);
    return d(St, Q({ ref: m, modelValue: a.value, "onUpdate:modelValue": (w) => a.value = w, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, E, C, { centerAffix: !y.value, focused: c.value }), { ...o, default: (w) => {
      let { id: M, isDisabled: V, isDirty: A, isReadonly: P, isValid: S } = w;
      return d(lo, Q({ ref: h, onMousedown: k, onClick: F, "onClick:clear": U, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, O, { id: M.value, active: g.value || A.value, dirty: A.value || e.dirty, disabled: V.value, focused: c.value, error: S.value === !1 }), { ...o, default: (x) => {
        let { props: { class: W, ...R } } = x;
        const Y = Ue(d("input", Q({ ref: b, value: a.value, onInput: $, autofocus: e.autofocus, readonly: P.value, disabled: V.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: I, onBlur: s }, R, B), null), [[mt("intersect"), { handler: f }, null, { once: !0 }]]);
        return d(Fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), o.default ? d("div", { class: W, "data-no-activator": "" }, [o.default(), Y]) : Bi(Y, { class: W }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: L ? (w) => {
      var M;
      return d(Fe, null, [(M = o.details) == null ? void 0 : M.call(o, w), z && d(Fe, null, [d("span", null, null), d(pi, { active: e.persistentCounter || c.value, value: i.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), ul({}, m, h, b);
} }), Qr = H({ renderless: Boolean, ...ye() }, "VVirtualScrollItem"), es = ee()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: Qr(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const { resizeRef: a, contentRect: c } = Yl(void 0, "border");
  J(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.height;
  }, (u) => {
    u != null && l("update:height", u);
  }), se(() => {
    var u, s;
    return e.renderless ? d(Fe, null, [(u = o.default) == null ? void 0 : u.call(o, { itemRef: a })]) : d("div", Q({ ref: a, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(s = o.default) == null ? void 0 : s.call(o)]);
  });
} }), ts = H({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function ns(e, n) {
  const t = si(), l = de(0);
  it(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const o = de(0), a = de(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), c = de(0), u = de(0), s = D(), i = D();
  let p = 0;
  const { resizeRef: y, contentRect: f } = Yl();
  it(() => {
    y.value = s.value;
  });
  const m = v(() => {
    var V;
    return s.value === document.documentElement ? t.height.value : ((V = f.value) == null ? void 0 : V.height) || parseInt(e.height) || 0;
  }), h = v(() => !!(s.value && i.value && m.value && l.value));
  let b = Array.from({ length: n.value.length }), g = Array.from({ length: n.value.length });
  const I = de(0);
  let k = -1;
  const F = function(V, A) {
    let P = 0;
    const S = function() {
      for (var x = arguments.length, W = new Array(x), R = 0; R < x; R++)
        W[R] = arguments[R];
      clearTimeout(P), P = setTimeout(() => V(...W), r(A));
    };
    return S.clear = () => {
      clearTimeout(P);
    }, S.immediate = V, S;
  }(() => {
    const V = performance.now();
    g[0] = 0;
    const A = n.value.length;
    for (let P = 1; P <= A - 1; P++)
      g[P] = (g[P - 1] || 0) + (b[P - 1] || l.value);
    I.value = Math.max(I.value, performance.now() - V);
  }, I), U = J(h, (V) => {
    V && (U(), p = i.value.offsetTop, F.immediate(), C(), ~k && Me(() => {
      Ke && window.requestAnimationFrame(() => {
        w(k), k = -1;
      });
    }));
  });
  function $(V) {
    return V = jt(V, 0, n.value.length - 1), g[V] || 0;
  }
  function z(V) {
    return function(A, P) {
      let S = A.length - 1, x = 0, W = 0, R = null, Y = -1;
      if (A[S] < P)
        return S;
      for (; x <= S; )
        if (W = x + S >> 1, R = A[W], R > P)
          S = W - 1;
        else {
          if (!(R < P))
            return R === P ? W : x;
          Y = W, x = W + 1;
        }
      return Y;
    }(g, V);
  }
  J(m, (V, A) => {
    A && C();
  }), He(() => {
    F.clear();
  });
  let L = 0, E = 0, B = 0, _ = -1;
  function C() {
    cancelAnimationFrame(_), _ = requestAnimationFrame(O);
  }
  function O() {
    if (!s.value || !m.value)
      return;
    const V = L - p, A = Math.sign(E), P = jt(z(Math.max(0, V - 100)), 0, n.value.length), S = jt(z(V + m.value + 100) + 1, P + 1, n.value.length);
    if ((A !== -1 || P < o.value) && (A !== 1 || S > a.value)) {
      const x = $(o.value) - $(P), W = $(S) - $(a.value);
      Math.max(x, W) > 100 ? (o.value = P, a.value = S) : (P <= 0 && (o.value = P), S >= n.value.length && (a.value = S));
    }
    c.value = $(o.value), u.value = $(n.value.length) - $(a.value);
  }
  function w(V) {
    const A = $(V);
    !s.value || V && !A ? k = V : s.value.scrollTop = A;
  }
  const M = v(() => n.value.slice(o.value, a.value).map((V, A) => ({ raw: V, index: A + o.value })));
  return J(n, () => {
    b = Array.from({ length: n.value.length }), g = Array.from({ length: n.value.length }), F.immediate(), C();
  }, { deep: !0 }), { containerRef: s, markerRef: i, computedItems: M, paddingTop: c, paddingBottom: u, scrollToIndex: w, handleScroll: function() {
    if (!s.value || !i.value)
      return;
    const V = s.value.scrollTop, A = performance.now();
    A - B > 500 ? (E = Math.sign(V - L), p = i.value.offsetTop) : E = V - L, L = V, B = A, C();
  }, handleScrollend: function() {
    s.value && i.value && (E = 0, B = 0, C());
  }, handleItemResize: function(V, A) {
    const P = b[V], S = l.value;
    l.value = S ? Math.min(l.value, A) : A, P === A && S === l.value || (b[V] = A, F());
  } };
}
const ls = H({ items: { type: Array, default: () => [] }, renderless: Boolean, ...ts(), ...ye(), ...zt() }, "VVirtualScroll"), os = ee()({ name: "VVirtualScroll", props: ls(), setup(e, n) {
  let { slots: t } = n;
  const l = We("VVirtualScroll"), { dimensionStyles: o } = Dt(e), { containerRef: a, markerRef: c, handleScroll: u, handleScrollend: s, handleItemResize: i, scrollToIndex: p, paddingTop: y, paddingBottom: f, computedItems: m } = ns(e, ae(e, "items"));
  return Ft(() => e.renderless, () => {
    function h() {
      var g, I;
      const b = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      a.value === document.documentElement ? (document[b]("scroll", u, { passive: !0 }), document[b]("scrollend", s)) : ((g = a.value) == null || g[b]("scroll", u, { passive: !0 }), (I = a.value) == null || I[b]("scrollend", s));
    }
    qt(() => {
      a.value = ha(l.vnode.el, !0), h(!0);
    }), He(h);
  }), se(() => {
    const h = m.value.map((b) => d(es, { key: b.index, renderless: e.renderless, "onUpdate:height": (g) => i(b.index, g) }, { default: (g) => {
      var I;
      return (I = t.default) == null ? void 0 : I.call(t, { item: b.raw, index: b.index, ...g });
    } }));
    return e.renderless ? d(Fe, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: ie(y.value) } }, null), h, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ie(f.value) } }, null)]) : d("div", { ref: a, class: ["v-virtual-scroll", e.class], onScrollPassive: u, onScrollend: s, style: [o.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: ie(y.value), paddingBottom: ie(f.value) } }, [h])]);
  }), { scrollToIndex: p };
} });
function as(e, n) {
  const t = de(!1);
  let l;
  return { onListScroll: function(o) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(o) {
    var u, s;
    if (o.key === "Tab" && ((u = n.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(o.key))
      return;
    const a = (s = e.value) == null ? void 0 : s.$el;
    if (!a)
      return;
    o.key !== "Home" && o.key !== "End" || a.scrollTo({ top: o.key === "Home" ? 0 : a.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => requestAnimationFrame(i)), await new Promise((i) => {
        if (t.value) {
          const p = J(t, () => {
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
const is = H({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: Ce, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...oi({ itemChildren: !1 }) }, "Select"), rs = H({ ...is(), ...Tt(fi({ modelValue: null, role: "combobox" }), ["validationValue", "dirty", "appendInnerIcon"]), ...$n({ transition: { component: Wa } }) }, "VSelect"), ss = ee()({ name: "VSelect", props: rs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = Xl(), o = D(), a = D(), c = D(), u = $e(e, "menu"), s = v({ get: () => u.value, set: (S) => {
    var x;
    u.value && !S && ((x = a.value) != null && x.ΨopenChildren) || (u.value = S);
  } }), { items: i, transformIn: p, transformOut: y } = function(S) {
    const x = v(() => ai(S, S.items)), W = v(() => x.value.some((R) => R.value === null));
    return { items: x, transformIn: function(R) {
      return W.value || (R = R.filter((Y) => Y !== null)), R.map((Y) => S.returnObject && typeof Y == "string" ? Ol(S, Y) : x.value.find((q) => S.valueComparator(Y, q.value)) || Ol(S, Y));
    }, transformOut: function(R) {
      return S.returnObject ? R.map((Y) => {
        let { raw: q } = Y;
        return q;
      }) : R.map((Y) => {
        let { value: q } = Y;
        return q;
      });
    } };
  }(e), f = $e(e, "modelValue", [], (S) => p(S === null ? [null] : dt(S)), (S) => {
    const x = y(S);
    return e.multiple ? x : x[0] ?? null;
  }), m = v(() => typeof e.counterValue == "function" ? e.counterValue(f.value) : typeof e.counterValue == "number" ? e.counterValue : f.value.length), h = Ka(), b = v(() => f.value.map((S) => S.value)), g = de(!1), I = v(() => s.value ? e.closeText : e.openText);
  let k, F = "";
  const U = v(() => e.hideSelected ? i.value.filter((S) => !f.value.some((x) => x === S)) : i.value), $ = v(() => e.hideNoData && !i.value.length || e.readonly || (h == null ? void 0 : h.isReadonly.value)), z = v(() => {
    var S;
    return { ...e.menuProps, activatorProps: { ...((S = e.menuProps) == null ? void 0 : S.activatorProps) || {}, "aria-haspopup": "listbox" } };
  }), L = D(), { onListScroll: E, onListKeydown: B } = as(L, o);
  function _(S) {
    e.openOnClear && (s.value = !0);
  }
  function C() {
    $.value || (s.value = !s.value);
  }
  function O(S) {
    var R, Y;
    if (!S.key || e.readonly || h != null && h.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(S.key) && S.preventDefault(), ["Enter", "ArrowDown", " "].includes(S.key) && (s.value = !0), ["Escape", "Tab"].includes(S.key) && (s.value = !1), S.key === "Home" ? (R = L.value) == null || R.focus("first") : S.key === "End" && ((Y = L.value) == null || Y.focus("last")), e.multiple || !function(q) {
      const T = q.key.length === 1, N = !q.ctrlKey && !q.metaKey && !q.altKey;
      return T && N;
    }(S)))
      return;
    const x = performance.now();
    x - k > 1e3 && (F = ""), F += S.key.toLowerCase(), k = x;
    const W = i.value.find((q) => q.title.toLowerCase().startsWith(F));
    W !== void 0 && (f.value = [W]);
  }
  function w(S) {
    if (e.multiple) {
      const x = f.value.findIndex((W) => e.valueComparator(W.value, S.value));
      if (x === -1)
        f.value = [...f.value, S];
      else {
        const W = [...f.value];
        W.splice(x, 1), f.value = W;
      }
    } else
      f.value = [S], s.value = !1;
  }
  function M(S) {
    var x;
    (x = L.value) != null && x.$el.contains(S.relatedTarget) || (s.value = !1);
  }
  function V() {
    var S;
    g.value && ((S = o.value) == null || S.focus());
  }
  function A(S) {
    g.value = !0;
  }
  function P(S) {
    if (S == null)
      f.value = [];
    else if (Yn(o.value, ":autofill") || Yn(o.value, ":-webkit-autofill")) {
      const x = i.value.find((W) => W.title === S);
      x && w(x);
    } else
      o.value && (o.value.value = "");
  }
  return J(s, () => {
    if (!e.hideSelected && s.value && f.value.length) {
      const S = U.value.findIndex((x) => f.value.some((W) => e.valueComparator(W.value, x.value)));
      Ke && window.requestAnimationFrame(() => {
        var x;
        S >= 0 && ((x = c.value) == null || x.scrollToIndex(S));
      });
    }
  }), se(() => {
    const S = !(!e.chips && !t.chip), x = !!(!e.hideNoData || U.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), W = f.value.length > 0, R = Tl.filterProps(e), Y = W || !g.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d(Tl, Q({ ref: o }, R, { modelValue: f.value.map((q) => q.props.value).join(", "), "onUpdate:modelValue": P, focused: g.value, "onUpdate:focused": (q) => g.value = q, validationValue: f.externalValue, counterValue: m.value, dirty: W, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": f.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: Y, "onClick:clear": _, "onMousedown:control": C, onBlur: M, onKeydown: O, "aria-label": l(I.value), title: l(I.value) }), { ...t, default: () => d(Fe, null, [d(Yr, Q({ ref: a, modelValue: s.value, "onUpdate:modelValue": (q) => s.value = q, activator: "parent", contentClass: "v-select__content", disabled: $.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: V }, z.value), { default: () => [x && d(zr, { ref: L, selected: b.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (q) => q.preventDefault(), onKeydown: B, onFocusin: A, onScrollPassive: E, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var q, T, N;
      return [(q = t["prepend-item"]) == null ? void 0 : q.call(t), !U.value.length && !e.hideNoData && (((T = t["no-data"]) == null ? void 0 : T.call(t)) ?? d(tl, { title: l(e.noDataText) }, null)), d(os, { ref: c, renderless: !0, items: U.value }, { default: (j) => {
        var ge;
        let { item: G, index: X, itemRef: te } = j;
        const pe = Q(G.props, { ref: te, key: X, onClick: () => w(G) });
        return ((ge = t.item) == null ? void 0 : ge.call(t, { item: G, index: X, props: pe })) ?? d(tl, Q(pe, { role: "option" }), { prepend: (he) => {
          let { isSelected: ze } = he;
          return d(Fe, null, [e.multiple && !e.hideSelected ? d(Al, { key: G.value, modelValue: ze, ripple: !1, tabindex: "-1" }, null) : void 0, G.props.prependIcon && d(Se, { icon: G.props.prependIcon }, null)]);
        } });
      } }), (N = t["append-item"]) == null ? void 0 : N.call(t)];
    } })] }), f.value.map((q, T) => {
      const N = { "onClick:close": function(X) {
        X.stopPropagation(), X.preventDefault(), w(q);
      }, onMousedown(X) {
        X.preventDefault(), X.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, j = S ? !!t.chip : !!t.selection, G = j ? pa(S ? t.chip({ item: q, index: T, props: N }) : t.selection({ item: q, index: T })) : void 0;
      if (!j || G)
        return d("div", { key: q.value, class: "v-select__selection" }, [S ? t.chip ? d(je, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: q.title } } }, { default: () => [G] }) : d(br, Q({ key: "chip", closable: e.closableChips, size: "small", text: q.title, disabled: q.props.disabled }, N), null) : G ?? d("span", { class: "v-select__selection-text" }, [q.title, e.multiple && T < f.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [la(",")])])]);
    })]), "append-inner": function() {
      var j;
      for (var q = arguments.length, T = new Array(q), N = 0; N < q; N++)
        T[N] = arguments[N];
      return d(Fe, null, [(j = t["append-inner"]) == null ? void 0 : j.call(t, ...T), e.menuIcon ? d(Se, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), ul({ isFocused: g, menu: s, select: w }, o);
} }), us = ee()({ name: "VCardActions", props: ye(), setup(e, n) {
  let { slots: t } = n;
  return ln({ VBtn: { slim: !0, variant: "text" } }), se(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), cs = wn("v-card-subtitle"), ds = wn("v-card-title"), ps = H({ appendAvatar: String, appendIcon: Ce, prependAvatar: String, prependIcon: Ce, subtitle: [String, Number], title: [String, Number], ...ye(), ...ut() }, "VCardItem"), vs = ee()({ name: "VCardItem", props: ps(), setup(e, n) {
  let { slots: t } = n;
  return se(() => {
    var i;
    const l = !(!e.prependAvatar && !e.prependIcon), o = !(!l && !t.prepend), a = !(!e.appendAvatar && !e.appendIcon), c = !(!a && !t.append), u = !(e.title == null && !t.title), s = !(e.subtitle == null && !t.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [o && d("div", { key: "prepend", class: "v-card-item__prepend" }, [t.prepend ? d(je, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, t.prepend) : l && d(Ut, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [u && d(ds, { key: "title" }, { default: () => {
      var p;
      return [((p = t.title) == null ? void 0 : p.call(t)) ?? e.title];
    } }), s && d(cs, { key: "subtitle" }, { default: () => {
      var p;
      return [((p = t.subtitle) == null ? void 0 : p.call(t)) ?? e.subtitle];
    } }), (i = t.default) == null ? void 0 : i.call(t)]), c && d("div", { key: "append", class: "v-card-item__append" }, [t.append ? d(je, { key: "append-defaults", disabled: !a, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, t.append) : a && d(Ut, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Lt = wn("v-card-text"), fs = H({ appendAvatar: String, appendIcon: Ce, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: Ce, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...on(), ...ye(), ...ut(), ...zt(), ...rn(), ...Zl(), ...Kl(), ...Aa(), ...ht(), ...sl(), ...et(), ...Ne(), ...xt({ variant: "elevated" }) }, "VCard"), cn = ee()({ name: "VCard", directives: { Ripple: Pn }, props: fs(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: o } = Xe(e), { borderClasses: a } = an(e), { colorClasses: c, colorStyles: u, variantClasses: s } = An(e), { densityClasses: i } = gt(e), { dimensionStyles: p } = Dt(e), { elevationClasses: y } = sn(e), { loaderClasses: f } = il(e), { locationStyles: m } = Jl(e), { positionClasses: h } = Va(e), { roundedClasses: b } = bt(e), g = rl(e, t), I = v(() => e.link !== !1 && g.isLink.value), k = v(() => !e.disabled && e.link !== !1 && (e.link || g.isClickable.value));
  return se(() => {
    const F = I.value ? "a" : e.tag, U = !(!l.title && e.title == null), $ = !(!l.subtitle && e.subtitle == null), z = U || $, L = !!(l.append || e.appendAvatar || e.appendIcon), E = !!(l.prepend || e.prependAvatar || e.prependIcon), B = !(!l.image && !e.image), _ = z || E || L, C = !(!l.text && e.text == null);
    return Ue(d(F, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": k.value }, o.value, a.value, c.value, i.value, y.value, f.value, h.value, b.value, s.value, e.class], style: [u.value, p.value, m.value, e.style], href: g.href.value, onClick: k.value && g.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var O;
      return [B && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(je, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(ja, { key: "image-img", cover: !0, src: e.image }, null)]), d(Ql, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), _ && d(vs, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), C && d(Lt, { key: "text" }, { default: () => {
        var w;
        return [((w = l.text) == null ? void 0 : w.call(l)) ?? e.text];
      } }), (O = l.default) == null ? void 0 : O.call(l), l.actions && d(us, null, { default: l.actions }), Fn(k.value, "v-card")];
    } }), [[mt("ripple"), k.value && e.ripple]]);
  }), {};
} }), ys = H({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...Tn(), ...to() }, "VSwitch"), ms = ee()({ name: "VSwitch", inheritAttrs: !1, props: ys(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const o = $e(e, "indeterminate"), a = $e(e, "modelValue"), { loaderClasses: c } = il(e), { isFocused: u, focus: s, blur: i } = En(e), p = D(), y = v(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), f = nt(), m = v(() => e.id || `switch-${f}`);
  function h() {
    o.value && (o.value = !1);
  }
  function b(g) {
    var I, k;
    g.stopPropagation(), g.preventDefault(), (k = (I = p.value) == null ? void 0 : I.input) == null || k.click();
  }
  return se(() => {
    const [g, I] = kn(t), k = St.filterProps(e), F = el.filterProps(e);
    return d(St, Q({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": o.value }, c.value, e.class] }, g, k, { modelValue: a.value, "onUpdate:modelValue": (U) => a.value = U, id: m.value, focused: u.value, style: e.style }), { ...l, default: (U) => {
      let { id: $, messagesId: z, isDisabled: L, isReadonly: E, isValid: B } = U;
      return d(el, Q({ ref: p }, F, { modelValue: a.value, "onUpdate:modelValue": [(_) => a.value = _, h], id: $.value, "aria-describedby": z.value, type: "checkbox", "aria-checked": o.value ? "mixed" : void 0, disabled: L.value, readonly: E.value, onFocus: s, onBlur: i }, I), { ...l, default: (_) => {
        let { backgroundColorClasses: C, backgroundColorStyles: O } = _;
        return d("div", { class: ["v-switch__track", ...C.value], style: O.value, onClick: b }, null);
      }, input: (_) => {
        let { inputNode: C, icon: O, backgroundColorClasses: w, backgroundColorStyles: M } = _;
        return d(Fe, null, [C, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": O || e.loading }, e.inset ? void 0 : w.value], style: e.inset ? void 0 : M.value }, [d(ar, null, { default: () => [e.loading ? d(Ql, { name: "v-switch", active: !0, color: B.value === !1 ? void 0 : y.value }, { default: (V) => l.loader ? l.loader(V) : d(wa, { active: V.isActive, color: V.color, indeterminate: !0, size: "16", width: "2" }, null) }) : O && d(Se, { key: O, icon: O, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), gs = H({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...Tn(), ...no() }, "VTextarea"), hs = ee()({ name: "VTextarea", directives: { Intersect: eo }, inheritAttrs: !1, props: gs(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: o } = n;
  const a = $e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = En(e), i = v(() => typeof e.counterValue == "function" ? e.counterValue(a.value) : (a.value || "").toString().length), p = v(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(C, O) {
    var w, M;
    e.autofocus && C && ((M = (w = O[0].target) == null ? void 0 : w.focus) == null || M.call(w));
  }
  const f = D(), m = D(), h = de(""), b = D(), g = v(() => e.persistentPlaceholder || c.value || e.active);
  function I() {
    var C;
    b.value !== document.activeElement && ((C = b.value) == null || C.focus()), c.value || u();
  }
  function k(C) {
    I(), l("click:control", C);
  }
  function F(C) {
    l("mousedown:control", C);
  }
  function U(C) {
    C.stopPropagation(), I(), Me(() => {
      a.value = "", ca(e["onClick:clear"], C);
    });
  }
  function $(C) {
    var w;
    const O = C.target;
    if (a.value = O.value, (w = e.modelModifiers) == null ? void 0 : w.trim) {
      const M = [O.selectionStart, O.selectionEnd];
      Me(() => {
        O.selectionStart = M[0], O.selectionEnd = M[1];
      });
    }
  }
  const z = D(), L = D(+e.rows), E = v(() => ["plain", "underlined"].includes(e.variant));
  function B() {
    e.autoGrow && Me(() => {
      if (!z.value || !m.value)
        return;
      const C = getComputedStyle(z.value), O = getComputedStyle(m.value.$el), w = parseFloat(C.getPropertyValue("--v-field-padding-top")) + parseFloat(C.getPropertyValue("--v-input-padding-top")) + parseFloat(C.getPropertyValue("--v-field-padding-bottom")), M = z.value.scrollHeight, V = parseFloat(C.lineHeight), A = jt(M ?? 0, Math.max(parseFloat(e.rows) * V + w, parseFloat(O.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * V + w || 1 / 0);
      L.value = Math.floor((A - w) / V), h.value = ie(A);
    });
  }
  let _;
  return it(() => {
    e.autoGrow || (L.value = +e.rows);
  }), qt(B), J(a, B), J(() => e.rows, B), J(() => e.maxRows, B), J(() => e.density, B), J(z, (C) => {
    C ? (_ = new ResizeObserver(B), _.observe(z.value)) : _ == null || _.disconnect();
  }), yt(() => {
    _ == null || _.disconnect();
  }), se(() => {
    const C = !!(o.counter || e.counter || e.counterValue), O = !(!C && !o.details), [w, M] = kn(t), { modelValue: V, ...A } = St.filterProps(e), P = vi(e);
    return d(St, Q({ ref: f, modelValue: a.value, "onUpdate:modelValue": (S) => a.value = S, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": E.value }, e.class], style: e.style }, w, A, { centerAffix: L.value === 1 && !E.value, focused: c.value }), { ...o, default: (S) => {
      let { id: x, isDisabled: W, isDirty: R, isReadonly: Y, isValid: q } = S;
      return d(lo, Q({ ref: m, style: { "--v-textarea-control-height": h.value }, onClick: k, onMousedown: F, "onClick:clear": U, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, P, { id: x.value, active: g.value || R.value, centerAffix: L.value === 1 && !E.value, dirty: R.value || e.dirty, disabled: W.value, focused: c.value, error: q.value === !1 }), { ...o, default: (T) => {
        let { props: { class: N, ...j } } = T;
        return d(Fe, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Ue(d("textarea", Q({ ref: b, class: N, value: a.value, onInput: $, autofocus: e.autofocus, readonly: Y.value, disabled: W.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: I, onBlur: s }, j, M), null), [[mt("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Ue(d("textarea", { class: [N, "v-textarea__sizer"], id: `${j.id}-sizer`, "onUpdate:modelValue": (G) => a.value = G, ref: z, readonly: !0, "aria-hidden": "true" }, null), [[xi, a.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: O ? (S) => {
      var x;
      return d(Fe, null, [(x = o.details) == null ? void 0 : x.call(o, S), C && d(Fe, null, [d("span", null, null), d(pi, { active: e.persistentCounter || c.value, value: i.value, max: p.value }, o.counter)])]);
    } : void 0 });
  }), ul({}, f, m, b);
} }), yi = rt({ __name: "BooleanIcons", props: Qe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const n = e, t = me(Symbol.for("vuetify:icons")), l = $t(e, "modelValue"), o = v(() => ot({ icon: n.iconFalse, iconOptions: t, name: "false" })), a = v(() => ot({ icon: n.iconTrue, iconOptions: t, name: "true" }));
  return (c, u) => l.value ? (Z(), De(r(Se), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: r(a), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (Z(), De(r(Se), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: r(o), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), mn = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, mi = (e) => {
  var o;
  const { modelValue: n, trueValue: t } = e, l = r(n);
  return ((o = l == null ? void 0 : l.toLowerCase) == null ? void 0 : o.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == t || l === t;
}, cl = (e) => {
  const { required: n, rules: t } = e;
  let { value: l } = e;
  l = r(l);
  const o = [];
  let a = !1;
  if (n && !l)
    return o.push("Field is required."), { errors: !0, results: o };
  if (t) {
    for (const c of t) {
      const u = (typeof c == "function" ? c : () => c)(l);
      u !== !0 && (typeof u == "string" ? o.push(u) : console.warn(`${u} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    a = o.length > 0;
  }
  return { errors: a, results: o };
}, dn = (e) => {
  const { attrs: n, closeSiblings: t, fieldOnly: l, props: o, showField: a, timeOpened: c } = e;
  let u = c;
  return t && !l && (u = /* @__PURE__ */ new Date()), { settings: { ...n, ...o }, showField: !r(a), timeOpened: u };
}, oo = (e) => {
  const { length: n = 0 } = e;
  let { suffix: t, text: l } = e;
  return l = l.toString(), t = t || "...", l.length > n ? `${l.substring(0, n)}${t}` : l;
};
function Jo(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const n = 100 * Number(e);
    return n >= 100 ? 100 : n;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Zo(e) {
  let n = function(y) {
    const f = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let m = y;
    return Object.entries(f).forEach(([h, b]) => {
      y.toLowerCase() != h.toLowerCase() || (m = b);
    }), m;
  }(e), t = 0, l = 0, o = 0, a = 100, c = 0, u = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(y) {
      let f = y.replace("#", "");
      f.length === 3 && (f = f.split("").map((I) => I + I).join(""));
      const m = parseInt(f.substring(0, 2), 16), h = parseInt(f.substring(2, 4), 16), b = parseInt(f.substring(4, 6), 16);
      return [m, h, b, 100];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/[\d+.\d+]+/g)].map(String), t = n[0], l = n[1], o = n[2], a = Jo(n[3]), `${t} ${l}% ${o}% / ${a}%`;
  [c, u, s, a] = n, c /= 255, u /= 255, s /= 255, a = Jo(a);
  const i = Math.max(c, u, s), p = Math.min(c, u, s);
  if (i === null || !p === null || isNaN(i) || isNaN(p)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (t = (i + p) / 2, l = (i + p) / 2, o = (i + p) / 2, i == p)
    t = l = 0;
  else {
    const y = i - p;
    switch (l = o > 0.5 ? y / (2 - i - p) : y / (i + p), i) {
      case c:
        t = (u - s) / y + (u < s ? 6 : 0);
        break;
      case u:
        t = (s - c) / y + 2;
        break;
      case s:
        t = (c - u) / y + 4;
    }
    t /= 6;
  }
  return t = Math.round(360 * t), l = Math.round(100 * l), o = Math.round(100 * o), `${t} ${l}% ${o}% / ${a}%`;
}
const bs = (e, n) => {
  if (function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(l, o) {
    const a = o.global.current.value.colors;
    return Object.entries(a).find(([c]) => c === l);
  }(e, n);
  return t ? `hsl(${Zo(t[1])})` : `hsl(${Zo(e)})`;
}, ao = (e) => {
  const { underlineStyle: n, underlineWidth: t, color: l, error: o, theme: a, underlined: c } = e;
  let { underlineColor: u } = e;
  u = u || l;
  const s = { "border-bottom-color": bs(u, a), "border-bottom-style": n, "border-bottom-width": t };
  return r(o) && (s["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (s["border-bottom"] = "none"), s;
}, Vt = (e) => {
  const { cardMinWidth: n, cardOffsetX: t, cardOffsetY: l, cardWidth: o, field: a, name: c = "" } = e, u = ((p) => {
    const { cardOffsetX: y, cardOffsetY: f, field: m } = p;
    if (!m)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: h, y: b } = m.getBoundingClientRect(), { width: g, height: I } = m.getBoundingClientRect(), { right: k, bottom: F } = m.getBoundingClientRect();
    return { bottom: mn({ str: F + Number(f) }), height: I, left: mn({ str: 0 + Number(y) }), right: mn({ str: k + Number(y) }), top: mn({ str: 2 + Number(f) }), width: mn({ str: g }), x: h, y: b };
  })({ cardOffsetX: t, cardOffsetY: l, field: a });
  let s = n, i = o;
  return i || (i = c === "checkbox" ? "fit-content" : u.width), s || (s = c === "checkbox" ? "fit-content" : u.width), { left: u.left, top: u.top, width: i, zIndex: 10 };
}, pn = ["error", "update", "update:closeSiblingFields", "update:model-value"], Cs = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], zn = (e) => {
  let n = e;
  return n = Object.entries(n).filter(([t]) => !Cs.includes(t)), Object.fromEntries(n);
}, Is = { class: "v-selection-control__wrapper" }, Ss = rt({ __name: "VInlineCheckbox", props: Qe(Yt({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...wi }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = me(Symbol.for("vuetify:icons")), s = Wl(), i = e;
  let p = lt({ ...l, ...i, ...c });
  const { cancelButtonColor: y, cancelButtonSize: f, cancelButtonTitle: m, cancelButtonVariant: h, cancelIcon: b, cancelIconColor: g, cardField: I, closeSiblings: k, color: F, fieldOnly: U, hideCancelIcon: $, hideDetails: z, loadingIcon: L, loadingIconColor: E, saveButtonColor: B, saveButtonSize: _, saveButtonTitle: C, saveButtonVariant: O, saveIcon: w, saveIconColor: M } = Bt(p), V = v(() => i.disabled), A = v(() => i.loading), P = D(!1), S = D(!1), x = D(null), W = v(() => zn(p)), R = v(() => ({ ...Jt, ...i.cardProps }));
  J(() => A.value, (le, K) => {
    !le && K && S.value && Ve();
  });
  const Y = v(() => ot({ icon: i.trueIcon, iconOptions: u, name: "checkboxFalse" })), q = v(() => ot({ icon: i.iconTrue, iconOptions: u, name: "checkboxTrue" })), T = v(() => t.value == p.trueValue), N = v(() => mi({ modelValue: t, trueValue: p.trueValue })), j = v(() => Zt({ cell: p.cell && !S.value, density: p.density, disabled: V.value, field: "v-checkbox", loading: A.value, loadingWait: p.loadingWait, tableField: p.tableField })), G = v(() => Qt({ cell: p.cell, cellUnderlineFullWidth: p.cellUnderlineFullWidth, density: p.density, field: "v-checkbox" })), X = ia({ density: p.density }), te = v(() => en({ active: S.value, name: "checkbox" })), pe = v(() => Rl("checkbox", p.valueColor, { error: P })), ge = v(() => tn({ name: "checkbox", showField: S.value })), he = v(() => ({})), ze = v(() => ao({ color: p.color, error: P, theme: s, underlineColor: p.underlineColor, underlineStyle: p.underlineStyle, underlineWidth: p.underlineWidth, underlined: p.underlined })), Ae = v(() => Be.value);
  function ke() {
    P.value = !1, Ve();
  }
  const Be = D(), Oe = D(null), we = D("body"), Ee = ki();
  function Ve() {
    var K, Ie;
    if (V.value || p.loadingWait && A.value)
      return;
    Be.value = Vt({ cardMinWidth: (K = p.cardProps) == null ? void 0 : K.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (Ie = p.cardProps) == null ? void 0 : Ie.width, field: Oe.value, name: "checkbox" });
    const le = dn({ attrs: l, closeSiblings: k.value, fieldOnly: p.fieldOnly, props: i, showField: S, timeOpened: x.value });
    p = { ...p, ...le.settings }, S.value = le.showField, x.value = le.timeOpened, ne !== null && k.value && S.value && !p.fieldOnly && ne.emit(le.timeOpened);
  }
  function ve(le) {
    t.value = le, a("update", le), p.loadingWait || Ve();
  }
  let ne, fe;
  function Le(le) {
    a("update:closeSiblingFields", x), S.value && x.value !== le && Ve();
  }
  return J(() => Ee, () => {
    var le, K;
    Be.value = Vt({ cardMinWidth: (le = p.cardProps) == null ? void 0 : le.minWidth, cardOffsetX: p.cardOffsetX, cardOffsetY: p.cardOffsetY, cardWidth: (K = p.cardProps) == null ? void 0 : K.width, field: Oe.value, name: "checkbox" });
  }, { deep: !0 }), k.value && import("@vueuse/core").then(({ useEventBus: le }) => {
    ne = le(Kt), fe = ne.on(Le);
  }), Xt(() => {
    fe !== void 0 && ne.off(Le);
  }), (le, K) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: Oe, class: oe(r(j)), style: Te(r(he)) }, [!r(S) && !r(U) || r(I) ? (Z(), ce("div", { key: 0, class: oe(r(G)), onClick: K[2] || (K[2] = (Ie) => r(p).cell ? Ve() : void 0) }, [Ge("div", { class: oe(r(X)), onClick: K[1] || (K[1] = (Ie) => r(p).cell ? void 0 : Ve()) }, [Ge("div", Is, [le.icons ? (Z(), ce("div", { key: 0, class: oe(["v-inline-fields--boolean-icons-container", r(pe)]), style: Te(r(ze)) }, [d(yi, { modelValue: r(N), "onUpdate:modelValue": K[0] || (K[0] = (Ie) => _t(N) ? N.value = Ie : null), "icon-false": le.iconFalse, "icon-false-color": le.iconFalseColor, "icon-false-title": le.iconFalseTitle, "icon-true": le.iconTrue, "icon-true-color": le.iconTrueColor, "icon-true-title": le.iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), ce("div", { key: 1, class: oe(["d-inline-flex align-center justify-center", r(pe)]), style: Te(r(ze)) }, Ll(r(T)), 7))])], 2)], 2)) : xe("", !0), r(S) || r(U) || r(I) ? (Z(), ce("div", { key: 1, class: oe(r(te)) }, [(Z(), De(Pt, { disabled: !r(I), to: r(we) }, [d(yr, Q(r(W), { color: r(F), density: r(p).density, disabled: r(A) || r(V), error: r(P), "false-icon": r(Y), "false-value": r(p).falseValue, "hide-details": r(z), label: r(p).label, "model-value": r(N), "true-icon": r(q), "true-value": r(p).trueValue, "onUpdate:modelValue": ve }), pt({ _: 2 }, [vt(r(o), (Ie, ue) => ({ name: ue, fn: be((_e) => [Ye(le.$slots, ue, Pe(Re({ ..._e })))]) })), r(o).append ? void 0 : { name: "append", fn: be(() => [d(un, { "cancel-button-color": r(y), "cancel-button-size": r(f), "cancel-button-title": r(m), "cancel-button-variant": r(h), "cancel-icon": r(b), "cancel-icon-color": r(g), error: r(P), "field-only": r(U), "hide-cancel-icon": r($), "hide-save-icon": !0, loading: r(A), "loading-icon": r(L), "loading-icon-color": r(E), "save-button-color": r(B), "save-button-size": r(_), "save-button-title": r(C), "save-button-variant": r(O), "save-icon": r(w), "save-icon-color": r(M), onClose: ke, onSave: ve }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(I) ? (Z(), ce("div", { key: 2, class: oe(r(ge)), style: Te(r(Ae)) }, [d(cn, Pe(Re(r(R))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: we }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), dl = rt({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(e, { emit: n }) {
  const t = n, l = e, o = Et(), a = Wl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, u = v(() => Rl(l.field, l.valueColor, { empty: l.empty, error: l.error })), s = v(() => ao({ color: l.color, error: l.error, theme: a, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), i = v(() => ((f) => {
    const { underlineWidth: m } = f;
    return { borderBottom: `${m || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), p = (f, m = !1) => ((h) => {
    const { inner: b = !1, position: g } = h;
    return { [`${re}--display-icon`]: !b, [`${re}--display-${g}-icon`]: !b, [`${re}--display-${g}-inner-icon`]: b, "me-1": g === "prepend", "ms-1": g === "append" };
  })({ inner: m, position: f });
  function y() {
    t("toggleField");
  }
  return (f, m) => (Z(), ce("div", { class: "v-inline-fields--display-wrapper", onClick: y }, [f.displayPrependIcon || r(o)["display.prepend"] ? (Z(), ce("div", { key: 0, class: oe(p("prepend")), style: Te(r(i)) }, [r(o)["display.prepend"] ? Ye(f.$slots, "display.prepend", Pe(Q({ key: 0 }, c))) : (Z(), De(Se, { key: 1, color: f.displayPrependIconColor, icon: f.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : xe("", !0), Ge("div", { class: oe(["d-inline-flex", r(u)]), style: Te(r(s)) }, [f.displayPrependInnerIcon || r(o)["display.prependInner"] ? (Z(), ce("div", { key: 0, class: oe(p("prepend", !0)) }, [r(o)["display.prependInner"] ? Ye(f.$slots, "display.prependInner", Pe(Q({ key: 0 }, c))) : (Z(), De(Se, { key: 1, color: f.displayPrependInnerIconColor, icon: f.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : xe("", !0), la(" " + Ll(f.displayValue) + " ", 1), f.displayAppendInnerIcon || r(o)["display.appendInner"] ? (Z(), ce("div", { key: 1, class: oe(p("append", !0)) }, [r(o)["display.appendInner"] ? Ye(f.$slots, "display.appendInner", Pe(Q({ key: 0 }, c))) : (Z(), De(Se, { key: 1, color: f.displayAppendInnerIconColor, icon: f.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : xe("", !0)], 6), f.displayAppendIcon || r(o)["display.append"] ? (Z(), ce("div", { key: 1, class: oe(p("append")), style: Te(r(i)) }, [r(o)["display.append"] ? Ye(f.$slots, "display.append", Pe(Q({ key: 0 }, c))) : (Z(), De(Se, { key: 1, color: f.displayAppendIconColor, icon: f.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : xe("", !0)]));
} }), Bs = rt({ __name: "VInlineCustomField", props: Qe(Yt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...aa }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: I, fieldOnly: k, hideCancelIcon: F, hideSaveIcon: U, loadingIcon: $, loadingIconColor: z, saveButtonColor: L, saveButtonSize: E, saveButtonTitle: B, saveButtonVariant: _, saveIcon: C, saveIconColor: O } = Bt(i), w = v(() => s.disabled), M = v(() => s.loading), V = D(!1), A = D(!1), P = D(!1), S = D(null);
  let x = t.value;
  J(() => M.value, (ne, fe) => {
    !ne && fe && P.value && ke();
  });
  const W = v(() => t.value ? (V.value = !1, i.truncateLength ? oo({ length: i.truncateLength, suffix: i.truncateSuffix, text: t.value }) : t.value) : (V.value = !0, i.emptyText)), R = v(() => ({ ...i, loading: M.value, modelValue: t.value, originalValue: x })), Y = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: W.value, empty: V.value, error: A.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), q = v(() => ({ ...Jt, ...s.cardProps })), T = v(() => Zt({ cell: i.cell && !P.value, density: i.density, disabled: w.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: M.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), N = v(() => Qt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-text-field" })), j = al({ density: i.density, variant: i.variant }), G = v(() => en({ active: P.value, name: "text-field" })), X = v(() => tn({ name: "custom-field", showField: P.value })), te = v(() => ({})), pe = v(() => he.value);
  function ge() {
    A.value = !1, t.value = x, ke();
  }
  const he = D(), ze = D(null), Ae = D("body");
  function ke() {
    var fe, Le;
    if (w.value || i.loadingWait && M.value)
      return;
    he.value = Vt({ cardMinWidth: (fe = i.cardProps) == null ? void 0 : fe.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (Le = i.cardProps) == null ? void 0 : Le.width, field: ze.value });
    const ne = dn({ attrs: l, closeSiblings: I.value, fieldOnly: i.fieldOnly, props: s, showField: P, timeOpened: S.value });
    i = { ...i, ...ne.settings }, P.value = ne.showField, S.value = ne.timeOpened, Ee !== null && I.value && P.value && !i.fieldOnly && Ee.emit(ne.timeOpened);
  }
  const Be = D();
  function Oe() {
    const ne = cl({ required: i.required, rules: i.rules, value: t });
    return A.value = ne.errors, Be.value = ne.results, ne.results;
  }
  function we() {
    A.value ? A.value = !0 : (x = t.value, a("update", t.value), i.loadingWait || ke());
  }
  let Ee, Ve;
  function ve(ne) {
    a("update:closeSiblingFields", S), P.value && S.value !== ne && ge();
  }
  return J(() => P.value, () => {
    P.value && Oe();
  }), J(() => t.value, () => {
    P.value && Oe();
  }), I.value && import("@vueuse/core").then(({ useEventBus: ne }) => {
    Ee = ne(Kt), Ve = Ee.on(ve);
  }), Xt(() => {
    Ve !== void 0 && Ee.off(ve);
  }), (ne, fe) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: ze, class: oe(r(T)), style: Te(r(te)) }, [!r(P) && !r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 0, class: oe(r(N)) }, [Ge("div", { class: oe(r(j)) }, [d(dl, Q(r(Y), { onToggleField: ke }), pt({ _: 2 }, [vt(r(o), (Le, le) => ({ name: le, fn: be((K) => [Ye(ne.$slots, le, Pe(Re({ ...K })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(P) || r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 1, class: oe(["d-flex align-center py-2", r(G)]) }, [(Z(), De(Pt, { disabled: !r(g), to: r(Ae) }, [Ye(ne.$slots, "default", Pe(Re(r(R)))), d(un, { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(A), "field-only": r(k), "hide-cancel-icon": r(F), "hide-save-icon": r(U), loading: r(M), "loading-icon": r($), "loading-icon-color": r(z), "save-button-color": r(L), "save-button-size": r(E), "save-button-title": r(B), "save-button-variant": r(_), "save-icon": r(C), "save-icon-color": r(O), onClose: ge, onSave: we }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (Z(), ce("div", { key: 2, class: oe(r(X)), style: Te(r(pe)) }, [d(cn, Pe(Re(r(q))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: Ae }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), xs = ((e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, o] of n)
    t[l] = o;
  return t;
})(rt({ __name: "VInlineSelect", props: Qe(Yt({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Fi }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: I, color: k, fieldOnly: F, hideCancelIcon: U, hideDetails: $, hideSaveIcon: z, loadingIcon: L, loadingIconColor: E, saveButtonColor: B, saveButtonSize: _, saveButtonTitle: C, saveButtonVariant: O, saveIcon: w, saveIconColor: M, valueColor: V } = Bt(i), A = v(() => s.disabled), P = v(() => s.loading), S = D(!1), x = D(!1), W = D(), R = D(!1), Y = D(null);
  let q = t.value;
  J(() => P.value, (ue, _e) => {
    !ue && _e && R.value && Ve();
  });
  const T = v(() => ot({ icon: s.clearIcon, iconOptions: u, name: "clear" })), N = v(() => t.value && t.value[i.itemTitle] ? (S.value = !1, t.value[i.itemTitle]) : t.value ? t.value : (S.value = !0, i.emptyText)), j = v(() => zn(i)), G = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: N.value, empty: S.value, error: x.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: V.value })), X = v(() => ({ ...Jt, ...s.cardProps }));
  it(() => {
    W.value = i.items || [];
  });
  const te = v(() => Zt({ cell: i.cell && !R.value, density: i.density, disabled: A.value, field: "v-select", iconSet: u == null ? void 0 : u.defaultSet, loading: P.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), pe = v(() => Qt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-select" })), ge = al({ density: i.density, variant: i.variant }), he = v(() => en({ active: R.value, name: "select" })), ze = v(() => tn({ name: "select", showField: R.value })), Ae = v(() => ({})), ke = v(() => Oe.value);
  function Be() {
    x.value = !1, t.value = q, Ve();
  }
  const Oe = D(), we = D(null), Ee = D("body");
  function Ve() {
    var _e, qe;
    if (A.value || i.loadingWait && P.value)
      return;
    Oe.value = Vt({ cardMinWidth: (_e = i.cardProps) == null ? void 0 : _e.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (qe = i.cardProps) == null ? void 0 : qe.width, field: we.value });
    const ue = dn({ attrs: l, closeSiblings: I.value, fieldOnly: i.fieldOnly, props: s, showField: R, timeOpened: Y.value });
    i = { ...i, ...ue.settings }, R.value = ue.showField, Y.value = ue.timeOpened, le !== null && I.value && R.value && !i.fieldOnly && le.emit(ue.timeOpened);
  }
  const ve = D(), ne = v(() => ve.value);
  function fe() {
    const ue = cl({ required: i.required, rules: i.rules, value: t });
    return x.value = ue.errors, ve.value = ue.results, ue.results;
  }
  function Le() {
    q = t.value, a("update", t.value), i.loadingWait || Ve();
  }
  let le, K;
  function Ie(ue) {
    a("update:closeSiblingFields", Y), R.value && Y.value !== ue && Be();
  }
  return J(() => R.value, () => {
    R.value && fe();
  }), J(() => t.value, () => {
    R.value && fe();
  }), I.value && import("@vueuse/core").then(({ useEventBus: ue }) => {
    le = ue(Kt), K = le.on(Ie);
  }), Xt(() => {
    K !== void 0 && le.off(Ie);
  }), (ue, _e) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: we, class: oe(r(te)), style: Te(r(Ae)) }, [!r(R) && !r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 0, class: oe(r(pe)) }, [Ge("div", { class: oe(r(ge)) }, [d(dl, Q(r(G), { onToggleField: Ve }), pt({ _: 2 }, [vt(r(o), (qe, vn) => ({ name: vn, fn: be((pl) => [Ye(ue.$slots, vn, Pe(Re({ ...pl })), void 0, !0)]) }))]), 1040)], 2)], 2)) : xe("", !0), r(R) || r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 1, class: oe(r(he)) }, [(Z(), De(Pt, { disabled: !r(g), to: r(Ee) }, [d(ss, Q(r(j), { modelValue: t.value, "onUpdate:modelValue": _e[0] || (_e[0] = (qe) => t.value = qe), autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(T), clearable: r(i).clearable, color: r(k), density: r(i).density, disabled: r(P) || r(A), error: r(x), "error-messages": r(ne), "hide-details": r($), "hide-selected": r(i).hideSelected, "item-title": r(i).itemTitle, "item-value": r(i).itemValue, items: r(W), label: r(i).label, loading: r(P), menu: r(i).menu && !r(i).fieldOnly && r(R), variant: r(i).variant, width: "100%", onKeyup: Gn(Be, ["esc"]) }), pt({ _: 2 }, [vt(r(o), (qe, vn) => ({ name: vn, fn: be((pl) => [Ye(ue.$slots, vn, Pe(Re({ ...pl })), void 0, !0)]) })), r(o).append ? void 0 : { name: "append", fn: be(() => [d(un, { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(x), "field-only": r(F), "hide-cancel-icon": r(U), "hide-save-icon": r(z), loading: r(P), "loading-icon": r(L), "loading-icon-color": r(E), "save-button-color": r(B), "save-button-size": r(_), "save-button-title": r(C), "save-button-variant": r(O), "save-icon": r(w), "save-icon-color": r(M), onClose: Be, onSave: Le }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (Z(), ce("div", { key: 2, class: oe(r(ze)), style: Te(r(ke)) }, [d(cn, Pe(Re(r(X))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: Ee }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), [["__scopeId", "data-v-bf7fbbc3"]]), ks = { class: "v-selection-control__wrapper" }, ws = rt({ __name: "VInlineSwitch", props: Qe(Yt({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Ai }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = Wl(), s = e;
  let i = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: I, color: k, fieldOnly: F, hideCancelIcon: U, hideDetails: $, loadingIcon: z, loadingIconColor: L, saveButtonColor: E, saveButtonSize: B, saveButtonTitle: _, saveButtonVariant: C, saveIcon: O, saveIconColor: w } = Bt(i), M = v(() => s.disabled), V = v(() => s.loading), A = D(!1), P = D(!1), S = D(null), x = v(() => zn(i)), W = v(() => ({ ...Jt, ...s.cardProps }));
  J(() => V.value, (ve, ne) => {
    !ve && ne && P.value && Be();
  });
  const R = v(() => t.value == i.trueValue), Y = v(() => mi({ modelValue: t, trueValue: i.trueValue })), q = v(() => Zt({ cell: i.cell && !P.value, density: i.density, disabled: M.value, field: "v-switch", loading: V.value, loadingWait: i.loadingWait, tableField: i.tableField })), T = v(() => Qt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-switch" })), N = ia({ density: i.density }), j = v(() => en({ active: P.value, name: "switch" })), G = v(() => Rl("switch", i.valueColor, { error: A })), X = v(() => tn({ name: "switch", showField: P.value })), te = v(() => ({})), pe = v(() => ao({ color: i.color, error: A, theme: u, underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined })), ge = v(() => ze.value);
  function he() {
    A.value = !1, Be();
  }
  const ze = D(), Ae = D(null), ke = D("body");
  function Be() {
    var ne, fe;
    if (M.value || i.loadingWait && V.value)
      return;
    ze.value = Vt({ cardMinWidth: (ne = i.cardProps) == null ? void 0 : ne.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (fe = i.cardProps) == null ? void 0 : fe.width, field: Ae.value });
    const ve = dn({ attrs: l, closeSiblings: I.value, fieldOnly: i.fieldOnly, props: s, showField: P.value, timeOpened: S.value });
    i = { ...i, ...ve.settings }, P.value = ve.showField, S.value = ve.timeOpened, we !== null && I.value && P.value && !i.fieldOnly && we.emit(ve.timeOpened);
  }
  function Oe(ve) {
    t.value = ve, a("update", ve), i.loadingWait || Be();
  }
  let we, Ee;
  function Ve(ve) {
    a("update:closeSiblingFields", S), P.value && S.value !== ve && Be();
  }
  return I.value && import("@vueuse/core").then(({ useEventBus: ve }) => {
    we = ve(Kt), Ee = we.on(Ve);
  }), Xt(() => {
    Ee !== void 0 && we.off(Ve);
  }), (ve, ne) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: Ae, class: oe(r(q)), style: Te(r(te)) }, [!r(P) && !r(i).fieldOnly || r(i).cardField ? (Z(), ce("div", { key: 0, class: oe(r(T)), onClick: ne[2] || (ne[2] = (fe) => r(i).cell ? Be() : void 0) }, [Ge("div", { class: oe(r(N)), onClick: ne[1] || (ne[1] = (fe) => r(i).cell ? void 0 : Be()) }, [Ge("div", ks, [ve.icons ? (Z(), ce("div", { key: 0, class: oe(["v-inline-fields--boolean-icons-container", r(G)]), style: Te(r(pe)) }, [d(yi, { modelValue: r(Y), "onUpdate:modelValue": ne[0] || (ne[0] = (fe) => _t(Y) ? Y.value = fe : null), "icon-false": r(i).iconFalse, "icon-false-color": r(i).iconFalseColor, "icon-false-title": r(i).iconFalseTitle, "icon-true": r(i).iconTrue, "icon-true-color": r(i).iconTrueColor, "icon-true-title": r(i).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (Z(), ce("div", { key: 1, class: oe(["d-inline-flex align-center justify-center", r(G)]), style: Te(r(pe)) }, Ll(r(R)), 7))])], 2)], 2)) : xe("", !0), r(P) || r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 1, class: oe(r(j)) }, [(Z(), De(Pt, { disabled: !r(g), to: r(ke) }, [d(ms, Q(r(x), { color: r(k), density: r(i).density, disabled: r(V) || r(M), error: r(A), "false-icon": r(i).falseIcon, "false-value": r(i).falseValue, "hide-details": r($), label: r(i).label, loading: r(V), "model-value": r(Y), "true-value": r(i).trueValue, "onUpdate:modelValue": Oe }), pt({ _: 2 }, [vt(r(o), (fe, Le) => ({ name: Le, fn: be((le) => [Ye(ve.$slots, Le, Pe(Re({ ...le })))]) })), r(o).append ? void 0 : { name: "append", fn: be(() => [d(un, { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), class: "ms-3", error: r(A), "field-only": r(F), "hide-cancel-icon": r(U), "hide-save-icon": !0, loading: r(V), "loading-icon": r(z), "loading-icon-color": r(L), "save-button-color": r(E), "save-button-size": r(B), "save-button-title": r(_), "save-button-variant": r(C), "save-icon": r(O), "save-icon-color": r(w), onClose: he, onSave: Oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (Z(), ce("div", { key: 2, class: oe(r(X)), style: Te(r(ge)) }, [d(cn, Pe(Re(r(W))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: ke }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), Fs = rt({ __name: "VInlineTextField", props: Qe(Yt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...aa }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: I, color: k, fieldOnly: F, hideCancelIcon: U, hideDetails: $, hideSaveIcon: z, loadingIcon: L, loadingIconColor: E, saveButtonColor: B, saveButtonSize: _, saveButtonTitle: C, saveButtonVariant: O, saveIcon: w, saveIconColor: M } = Bt(i), V = v(() => s.disabled), A = v(() => s.loading), P = D(!1), S = D(!1), x = D(!1), W = D(null);
  let R = t.value;
  J(() => A.value, (K, Ie) => {
    !K && Ie && x.value && we();
  });
  const Y = v(() => ot({ icon: s.clearIcon, iconOptions: u, name: "clear" })), q = v(() => t.value ? (P.value = !1, i.truncateLength ? oo({ length: i.truncateLength, suffix: i.truncateSuffix, text: t.value }) : t.value) : (P.value = !0, i.emptyText)), T = v(() => zn(i)), N = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: q.value, empty: P.value, error: S.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), j = v(() => ({ ...Jt, ...s.cardProps })), G = v(() => Zt({ cell: i.cell && !x.value, density: i.density, disabled: V.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: A.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), X = v(() => Qt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-text-field" })), te = al({ density: i.density, variant: i.variant }), pe = v(() => en({ active: x.value, name: "text-field" })), ge = v(() => tn({ name: "text-field", showField: x.value })), he = v(() => ({})), ze = v(() => ke.value);
  function Ae() {
    S.value = !1, t.value = R, we();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function we() {
    var Ie, ue;
    if (V.value || i.loadingWait && A.value)
      return;
    ke.value = Vt({ cardMinWidth: (Ie = i.cardProps) == null ? void 0 : Ie.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ue = i.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const K = dn({ attrs: l, closeSiblings: I.value, fieldOnly: i.fieldOnly, props: s, showField: x, timeOpened: W.value });
    i = { ...i, ...K.settings }, x.value = K.showField, W.value = K.timeOpened, fe !== null && I.value && x.value && !i.fieldOnly && fe.emit(K.timeOpened);
  }
  const Ee = D(), Ve = v(() => Ee.value);
  function ve() {
    const K = cl({ required: i.required, rules: i.rules, value: t });
    return S.value = K.errors, Ee.value = K.results, K.results;
  }
  function ne() {
    S.value ? S.value = !0 : (R = t.value, a("update", t.value), i.loadingWait || we());
  }
  let fe, Le;
  function le(K) {
    a("update:closeSiblingFields", W), x.value && W.value !== K && Ae();
  }
  return J(() => x.value, () => {
    x.value && ve();
  }), J(() => t.value, () => {
    x.value && ve();
  }), I.value && import("@vueuse/core").then(({ useEventBus: K }) => {
    fe = K(Kt), Le = fe.on(le);
  }), Xt(() => {
    Le !== void 0 && fe.off(le);
  }), (K, Ie) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: oe(r(G)), style: Te(r(he)) }, [!r(x) && !r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 0, class: oe(r(X)) }, [Ge("div", { class: oe(r(te)) }, [d(dl, Q(r(N), { onToggleField: we }), pt({ _: 2 }, [vt(r(o), (ue, _e) => ({ name: _e, fn: be((qe) => [Ye(K.$slots, _e, Pe(Re({ ...qe })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(x) || r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 1, class: oe(r(pe)) }, [(Z(), De(Pt, { disabled: !r(g), to: r(Oe) }, [d(Tl, Q(r(T), { modelValue: t.value, "onUpdate:modelValue": Ie[0] || (Ie[0] = (ue) => t.value = ue), autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(Y), color: r(k), density: r(i).density, disabled: r(A) || r(V), error: r(S), "error-messages": r(Ve), "hide-details": r($), label: r(i).label, loading: r(A), variant: r(i).variant, width: "100%", onKeyup: [Gn(ne, ["enter"]), Gn(Ae, ["esc"])] }), pt({ _: 2 }, [vt(r(o), (ue, _e) => ({ name: _e, fn: be((qe) => [Ye(K.$slots, _e, Pe(Re({ ...qe })))]) })), r(o).append ? void 0 : { name: "append", fn: be(() => [d(un, { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(S), "field-only": r(F), "hide-cancel-icon": r(U), "hide-save-icon": r(z), loading: r(A), "loading-icon": r(L), "loading-icon-color": r(E), "save-button-color": r(B), "save-button-size": r(_), "save-button-title": r(C), "save-button-variant": r(O), "save-icon": r(w), "save-icon-color": r(M), onClose: Ae, onSave: ne }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (Z(), ce("div", { key: 2, class: oe(r(ge)), style: Te(r(ze)) }, [d(cn, Pe(Re(r(j))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), As = rt({ __name: "VInlineTextarea", props: Qe(Yt({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Vi }), { modelValue: {} }), emits: Qe([...pn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = $t(e, "modelValue"), l = Ot(), o = Et(), a = n, c = me(Wt, {}), u = me(Symbol.for("vuetify:icons")), s = e;
  let i = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: p, cancelButtonSize: y, cancelButtonTitle: f, cancelButtonVariant: m, cancelIcon: h, cancelIconColor: b, cardField: g, closeSiblings: I, color: k, fieldOnly: F, hideCancelIcon: U, hideDetails: $, hideSaveIcon: z, loadingIcon: L, loadingIconColor: E, saveButtonColor: B, saveButtonSize: _, saveButtonTitle: C, saveButtonVariant: O, saveIcon: w, saveIconColor: M } = Bt(i), V = v(() => s.disabled), A = v(() => s.loading), P = D(!1), S = D(!1), x = D(!1), W = D(null);
  let R = t.value;
  J(() => A.value, (K, Ie) => {
    !K && Ie && x.value && we();
  });
  const Y = v(() => ot({ icon: s.clearIcon, iconOptions: u, name: "clear" })), q = v(() => t.value ? (P.value = !1, i.truncateLength ? oo({ length: i.truncateLength, suffix: i.truncateSuffix, text: t.value }) : t.value) : (P.value = !0, i.emptyText)), T = v(() => zn(i)), N = v(() => ({ color: i.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: q.value, empty: P.value, error: S.value, field: "v-text-field", underlineColor: i.underlineColor, underlineStyle: i.underlineStyle, underlineWidth: i.underlineWidth, underlined: i.underlined, valueColor: i.valueColor })), j = v(() => ({ ...Jt, ...s.cardProps })), G = v(() => Zt({ cell: i.cell && !x.value, density: i.density, disabled: V.value, field: "v-textarea", iconSet: u == null ? void 0 : u.defaultSet, loading: A.value, loadingWait: i.loadingWait, tableField: i.tableField, variant: i.variant })), X = v(() => Qt({ cell: i.cell, cellUnderlineFullWidth: i.cellUnderlineFullWidth, density: i.density, field: "v-textarea" })), te = al({ density: i.density, variant: i.variant }), pe = v(() => en({ active: x.value, name: "textarea" })), ge = v(() => tn({ name: "textarea", showField: x.value })), he = v(() => ({})), ze = v(() => ke.value);
  function Ae() {
    S.value = !1, t.value = R, we();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function we() {
    var Ie, ue;
    if (V.value || i.loadingWait && A.value)
      return;
    ke.value = Vt({ cardMinWidth: (Ie = i.cardProps) == null ? void 0 : Ie.minWidth, cardOffsetX: i.cardOffsetX, cardOffsetY: i.cardOffsetY, cardWidth: (ue = i.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const K = dn({ attrs: l, closeSiblings: I.value, fieldOnly: i.fieldOnly, props: s, showField: x, timeOpened: W.value });
    i = { ...i, ...K.settings }, x.value = K.showField, W.value = K.timeOpened, fe !== null && I.value && x.value && !i.fieldOnly && fe.emit(K.timeOpened);
  }
  const Ee = D(), Ve = v(() => Ee.value);
  function ve() {
    const K = cl({ required: i.required, rules: i.rules, value: t });
    return S.value = K.errors, Ee.value = K.results, K.results;
  }
  function ne() {
    R = t.value, a("update", t.value), i.loadingWait || we();
  }
  let fe, Le;
  function le(K) {
    a("update:closeSiblingFields", W), x.value && W.value !== K && Ae();
  }
  return J(() => x.value, () => {
    x.value && ve();
  }), J(() => t.value, () => {
    x.value && ve();
  }), I.value && import("@vueuse/core").then(({ useEventBus: K }) => {
    fe = K(Kt), Le = fe.on(le);
  }), Xt(() => {
    Le !== void 0 && fe.off(le);
  }), (K, Ie) => (Z(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: oe(r(G)), style: Te(r(he)) }, [!r(x) && !r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 0, class: oe(r(X)) }, [Ge("div", { class: oe(r(te)) }, [d(dl, Q(r(N), { onToggleField: we }), pt({ _: 2 }, [vt(r(o), (ue, _e) => ({ name: _e, fn: be((qe) => [Ye(K.$slots, _e, Pe(Re({ ...qe })))]) }))]), 1040)], 2)], 2)) : xe("", !0), r(x) || r(i).fieldOnly || r(g) ? (Z(), ce("div", { key: 1, class: oe(r(pe)) }, [(Z(), De(Pt, { disabled: !r(g), to: r(Oe) }, [d(hs, Q(r(T), { modelValue: t.value, "onUpdate:modelValue": Ie[0] || (Ie[0] = (ue) => t.value = ue), "auto-grow": r(i).autoGrow, autofocus: !r(i).fieldOnly || r(i).autofocus, "clear-icon": r(Y), color: r(k), density: r(i).density, disabled: r(A) || r(V), error: r(S), "error-messages": r(Ve), "hide-details": r($), label: r(i).label, loading: r(A), rows: r(i).rows, variant: r(i).variant, width: "100%", onKeyup: Gn(Ae, ["esc"]) }), pt({ _: 2 }, [vt(r(o), (ue, _e) => ({ name: _e, fn: be((qe) => [Ye(K.$slots, _e, Pe(Re({ ...qe })))]) })), r(o).append ? void 0 : { name: "append", fn: be(() => [d(un, { "cancel-button-color": r(p), "cancel-button-size": r(y), "cancel-button-title": r(f), "cancel-button-variant": r(m), "cancel-icon": r(h), "cancel-icon-color": r(b), error: r(S), "field-only": r(F), "hide-cancel-icon": r(U), "hide-save-icon": r(z), loading: r(A), "loading-icon": r(L), "loading-icon-color": r(E), "save-button-color": r(B), "save-button-size": r(_), "save-button-title": r(C), "save-button-variant": r(O), "save-icon": r(w), "save-icon-color": r(M), onClose: Ae, onSave: ne }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : xe("", !0), r(g) ? (Z(), ce("div", { key: 2, class: oe(r(ge)), style: Te(r(ze)) }, [d(cn, Pe(Re(r(j))), { default: be(() => [d(Lt, null, { default: be(() => [Ge("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : xe("", !0)], 6));
} }), Qo = Object.freeze(Object.defineProperty({ __proto__: null, VInlineCheckbox: Ss, VInlineCustomField: Bs, VInlineSelect: xs, VInlineSwitch: ws, VInlineTextField: Fs, VInlineTextarea: As }, Symbol.toStringTag, { value: "Module" })), Wt = Symbol();
function Ps(e = {}) {
  return { install: (n) => {
    n.provide(Wt, e);
    for (const t in Qo)
      n.component(t, Qo[t]);
  } };
}
export {
  Ss as VInlineCheckbox,
  Bs as VInlineCustomField,
  xs as VInlineSelect,
  ws as VInlineSwitch,
  Fs as VInlineTextField,
  As as VInlineTextarea,
  Ps as createVInlineFields,
  Qo as default,
  Wt as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-bf7fbbc3] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
