import { Fragment as we, reactive as lt, computed as f, watchEffect as ot, toRefs as Bt, capitalize as Za, isVNode as Io, Comment as Bo, unref as r, warn as ll, inject as ge, ref as D, provide as tt, shallowRef as de, defineComponent as rt, camelize as Qa, h as al, getCurrentInstance as Vo, onBeforeUnmount as yt, watch as K, readonly as zl, onScopeDispose as qe, effectScope as Dl, toRaw as St, TransitionGroup as ko, Transition as Ft, createVNode as d, mergeProps as Z, onBeforeMount as ei, nextTick as Me, withDirectives as Ue, resolveDirective as gt, vShow as jt, isRef as At, onMounted as qt, toRef as ae, Text as xo, resolveDynamicComponent as wo, Teleport as Ot, cloneVNode as Fo, createTextVNode as ti, vModelText as Po, mergeModels as Qe, useModel as Tt, openBlock as J, createBlock as ze, useSlots as _t, createElementBlock as ce, normalizeClass as le, normalizeStyle as $e, renderSlot as Ye, normalizeProps as Te, createCommentVNode as Ve, createElementVNode as He, toDisplayString as Ll, useAttrs as Et, withCtx as pe, mergeDefaults as Yt, onUnmounted as Xt, createSlots as vt, renderList as ft, guardReactiveProps as We, withKeys as Hn } from "vue";
import { useTheme as Rl } from "vuetify";
import { useWindowSize as Ao } from "@vueuse/core";
/**
 * @name @wdns/vuetify-inline-fields
 * @version 1.0.2
 * @description Vuetify Inline Fields Component Library offers a comprehensive collection of reusable UI components to create elegant and efficient inline form fields within your applications.
 * @author WebDevNerdStuff & Bunnies... lots and lots of bunnies! <webdevnerdstuff@gmail.com> (https://webdevnerdstuff.com)
 * @copyright Copyright 2023, WebDevNerdStuff
 * @homepage https://webdevnerdstuff.github.io/vuetify-inline-fields/
 * @repository https://github.com/webdevnerdstuff/vuetify-inline-fields
 * @license MIT License
 */
const Kt = Symbol("identifier"), Jt = { elevation: 5, variant: "flat" }, Bn = { cancelButtonColor: "default", cancelButtonSize: "x-small", cancelButtonTitle: "Cancel", cancelButtonVariant: "text", cancelIcon: void 0, cancelIconColor: "default", cardField: !1, cardOffsetX: 0, cardOffsetY: 0, cardProps: () => ({}), cell: !1, cellUnderlineFullWidth: !0, closeSiblings: !1, color: "primary", density: "compact", disabled: !1, displayAppendIcon: void 0, displayAppendIconColor: void 0, displayAppendIconSize: "x-small", displayAppendInnerIcon: void 0, displayAppendInnerIconColor: void 0, displayAppendInnerIconSize: "x-small", displayPrependIcon: void 0, displayPrependIconColor: void 0, displayPrependIconSize: "x-small", displayPrependInnerIcon: void 0, displayPrependInnerIconColor: void 0, displayPrependInnerIconSize: "x-small", emptyText: "empty", fieldOnly: !1, hideCancelIcon: !1, hideDetails: !0, label: "", loading: !1, loadingWait: !0, name: "", tableField: !0, underlineColor: "primary", underlineStyle: "dotted", underlineWidth: "2px", underlined: !0, valueColor: "default" }, Ml = { autofocus: !0 }, Vn = { hideCancelIcon: !1, hideSaveIcon: !1, loadingIcon: void 0, loadingIconColor: "primary", saveButtonColor: "primary", saveButtonSize: "x-small", saveButtonTitle: "Save", saveButtonVariant: "text", saveIcon: void 0, saveIconColor: "primary" }, ni = { falseValue: !1, iconFalse: void 0, iconFalseColor: "danger", iconFalseTitle: "No", iconTrue: void 0, iconTrueColor: "success", iconTrueTitle: "Yes", icons: !0, trueValue: !0 }, Oo = { ...Bn, ...ni, ...Vn, falseIcon: void 0, icons: !0, trueIcon: void 0 }, To = { ...Bn, ...Ml, ...Vn, clearIcon: void 0, clearable: !1, hideSelected: !0, itemTitle: "title", itemValue: "value", items: () => [], menu: !0, variant: "underlined" }, _o = { ...Bn, ...ni, ...Vn, icons: !0, falseIcon: "" }, Eo = { ...Ml, ...Vn, ...Bn, autoGrow: !0, rows: 1, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, li = { ...Bn, ...Ml, ...Vn, truncateLength: void 0, truncateSuffix: "...", variant: "underlined" }, $o = { fa: { checkboxFalse: "$checkboxOff", checkboxTrue: "far fa-square-check", clear: "$clear", false: "$close", loading: "fa-circle-notch", save: "fa-floppy-disk", true: "$complete" }, mdi: { checkboxFalse: "$checkboxOff", checkboxTrue: "mdi:mdi-checkbox-outline", clear: "$clear", false: "$close", loading: "mdi-loading", save: "mdi-content-save", true: "$complete" } }, at = (e) => {
  const { icon: n, iconOptions: t, name: l } = e;
  if (n)
    return n;
  const a = $o[t == null ? void 0 : t.defaultSet];
  if (!a)
    throw new Error(`VInlineFields: No VInlineFields default ${t == null ? void 0 : t.defaultSet} icon set found for ${l}. Please set the icon prop.`);
  const i = a[l];
  if (!i)
    throw new Error(`VInlineFields: No ${l} icon found. Please set the icon prop, or set the default icon set to 'mdi' or 'fa'`);
  return i;
};
function q(e, n) {
  return (t) => Object.keys(e).reduce((l, a) => {
    const i = typeof e[a] == "object" && e[a] != null && !Array.isArray(e[a]) ? e[a] : { type: e[a] };
    return l[a] = t && a in t ? { ...i, default: t[a] } : i, n && !l[a].source && (l[a].source = n), l;
  }, {});
}
const ye = q({ class: [String, Array], style: { type: [String, Array, Object], default: null } }, "component"), Ke = typeof window < "u", Wl = Ke && "IntersectionObserver" in window;
function oa(e, n, t) {
  const l = n.length - 1;
  if (l < 0)
    return e === void 0 ? t : e;
  for (let a = 0; a < l; a++) {
    if (e == null)
      return t;
    e = e[n[a]];
  }
  return e == null || e[n[l]] === void 0 ? t : e[n[l]];
}
function Zt(e, n) {
  if (e === n)
    return !0;
  if (e instanceof Date && n instanceof Date && e.getTime() !== n.getTime() || e !== Object(e) || n !== Object(n))
    return !1;
  const t = Object.keys(e);
  return t.length === Object.keys(n).length && t.every((l) => Zt(e[l], n[l]));
}
function ct(e, n, t) {
  if (n === !0)
    return e === void 0 ? t : e;
  if (n == null || typeof n == "boolean")
    return t;
  if (e !== Object(e)) {
    if (typeof n != "function")
      return t;
    const a = n(e, t);
    return a === void 0 ? t : a;
  }
  if (typeof n == "string")
    return function(a, i, c) {
      return a != null && i && typeof i == "string" ? a[i] !== void 0 ? a[i] : oa(a, (i = (i = i.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "")).split("."), c) : c;
    }(e, n, t);
  if (Array.isArray(n))
    return oa(e, n, t);
  if (typeof n != "function")
    return t;
  const l = n(e, t);
  return l === void 0 ? t : l;
}
function ie(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "px";
  return e == null || e === "" ? void 0 : isNaN(+e) ? String(e) : isFinite(+e) ? `${Number(e)}${n}` : void 0;
}
function Il(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e);
}
function Un(e) {
  if (e && "$el" in e) {
    const n = e.$el;
    return (n == null ? void 0 : n.nodeType) === Node.TEXT_NODE ? n.nextElementSibling : n;
  }
  return e;
}
const ra = Object.freeze({ enter: 13, tab: 9, delete: 46, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, end: 35, home: 36, del: 46, backspace: 8, insert: 45, pageup: 33, pagedown: 34, shift: 16 });
function fl(e, n) {
  return n.every((t) => e.hasOwnProperty(t));
}
function ai(e, n) {
  const t = {}, l = new Set(Object.keys(e));
  for (const a of n)
    l.has(a) && (t[a] = e[a]);
  return t;
}
function sa(e, n, t) {
  const l = /* @__PURE__ */ Object.create(null), a = /* @__PURE__ */ Object.create(null);
  for (const i in e)
    n.some((c) => c instanceof RegExp ? c.test(i) : c === i) && !(t != null && t.some((c) => c === i)) ? l[i] = e[i] : a[i] = e[i];
  return [l, a];
}
function $t(e, n) {
  const t = { ...e };
  return n.forEach((l) => delete t[l]), t;
}
const ii = /^on[^a-z]/, Bl = (e) => ii.test(e), zo = ["onAfterscriptexecute", "onAnimationcancel", "onAnimationend", "onAnimationiteration", "onAnimationstart", "onAuxclick", "onBeforeinput", "onBeforescriptexecute", "onChange", "onClick", "onCompositionend", "onCompositionstart", "onCompositionupdate", "onContextmenu", "onCopy", "onCut", "onDblclick", "onFocusin", "onFocusout", "onFullscreenchange", "onFullscreenerror", "onGesturechange", "onGestureend", "onGesturestart", "onGotpointercapture", "onInput", "onKeydown", "onKeypress", "onKeyup", "onLostpointercapture", "onMousedown", "onMousemove", "onMouseout", "onMouseover", "onMouseup", "onMousewheel", "onPaste", "onPointercancel", "onPointerdown", "onPointerenter", "onPointerleave", "onPointermove", "onPointerout", "onPointerover", "onPointerup", "onReset", "onSelect", "onSubmit", "onTouchcancel", "onTouchend", "onTouchmove", "onTouchstart", "onTransitioncancel", "onTransitionend", "onTransitionrun", "onTransitionstart", "onWheel"];
function kn(e) {
  const [n, t] = sa(e, [ii]), l = $t(n, zo), [a, i] = sa(t, ["class", "style", "id", /^data-/]);
  return Object.assign(a, n), Object.assign(i, l), [a, i];
}
function dt(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function Gt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
  return Math.max(n, Math.min(t, e));
}
function ua(e, n) {
  return e + (arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "0").repeat(Math.max(0, n - e.length));
}
function Wt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = arguments.length > 2 ? arguments[2] : void 0;
  const l = {};
  for (const a in e)
    l[a] = e[a];
  for (const a in n) {
    const i = e[a], c = n[a];
    Il(i) && Il(c) ? l[a] = Wt(i, c, t) : Array.isArray(i) && Array.isArray(c) && t ? l[a] = t(i, c) : l[a] = c;
  }
  return l;
}
function oi(e) {
  return e.map((n) => n.type === we ? oi(n.children) : n).flat();
}
function kt() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  if (kt.cache.has(e))
    return kt.cache.get(e);
  const n = e.replace(/[^a-z]/gi, "-").replace(/\B([A-Z])/g, "-$1").toLowerCase();
  return kt.cache.set(e, n), n;
}
function Wn(e, n) {
  if (!n || typeof n != "object")
    return [];
  if (Array.isArray(n))
    return n.map((t) => Wn(e, t)).flat(1);
  if (Array.isArray(n.children))
    return n.children.map((t) => Wn(e, t)).flat(1);
  if (n.component) {
    if (Object.getOwnPropertySymbols(n.component.provides).includes(e))
      return [n.component];
    if (n.component.subTree)
      return Wn(e, n.component.subTree).flat(1);
  }
  return [];
}
function Nl(e) {
  const n = lt({}), t = f(e);
  return ot(() => {
    for (const l in t.value)
      n[l] = t.value[l];
  }, { flush: "sync" }), Bt(n);
}
function jn(e, n) {
  return e.includes(n);
}
function ca(e) {
  return e[2].toLowerCase() + e.slice(3);
}
kt.cache = /* @__PURE__ */ new Map();
const it = () => [Function, Array];
function da(e, n) {
  return !!(e[n = "on" + Za(n)] || e[`${n}Once`] || e[`${n}Capture`] || e[`${n}OnceCapture`] || e[`${n}CaptureOnce`]);
}
function ri(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  if (Array.isArray(e))
    for (const a of e)
      a(...t);
  else
    typeof e == "function" && e(...t);
}
function Vl(e) {
  let n = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
  const t = ["button", "[href]", 'input:not([type="hidden"])', "select", "textarea", "[tabindex]"].map((l) => `${l}${n ? ':not([tabindex="-1"])' : ""}:not([disabled])`).join(", ");
  return [...e.querySelectorAll(t)];
}
function si(e, n, t) {
  let l, a = e.indexOf(document.activeElement);
  const i = n === "next" ? 1 : -1;
  do
    a += i, l = e[a];
  while ((!l || l.offsetParent == null || !((t == null ? void 0 : t(l)) ?? 1)) && a < e.length && a >= 0);
  return l;
}
function qn(e, n) {
  var l, a, i, c;
  const t = Vl(e);
  if (n)
    if (n === "first")
      (l = t[0]) == null || l.focus();
    else if (n === "last")
      (a = t.at(-1)) == null || a.focus();
    else if (typeof n == "number")
      (i = t[n]) == null || i.focus();
    else {
      const u = si(t, n);
      u ? u.focus() : qn(e, n === "next" ? "first" : "last");
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
function ui(e) {
  return e.some((n) => !Io(n) || n.type !== Bo && (n.type !== we || ui(n.children))) ? e : null;
}
const ci = ["top", "bottom"], Do = ["start", "end", "left", "right"];
function kl(e, n) {
  let [t, l] = e.split(" ");
  return l || (l = jn(ci, t) ? "start" : jn(Do, t) ? "top" : "center"), { side: va(t, n), align: va(l, n) };
}
function va(e, n) {
  return e === "start" ? n ? "right" : "left" : e === "end" ? n ? "left" : "right" : e;
}
function ml(e) {
  return { side: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.side], align: e.align };
}
function yl(e) {
  return { side: e.side, align: { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }[e.align] };
}
function fa(e) {
  return { side: e.align, align: e.side };
}
function ma(e) {
  return jn(ci, e.side) ? "y" : "x";
}
class xt {
  constructor(n) {
    let { x: t, y: l, width: a, height: i } = n;
    this.x = t, this.y = l, this.width = a, this.height = i;
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
function ya(e, n) {
  return { x: { before: Math.max(0, n.left - e.left), after: Math.max(0, e.right - n.right) }, y: { before: Math.max(0, n.top - e.top), after: Math.max(0, e.bottom - n.bottom) } };
}
function di(e) {
  return Array.isArray(e) ? new xt({ x: e[0], y: e[1], width: 0, height: 0 }) : e.getBoundingClientRect();
}
function Gl(e) {
  const n = e.getBoundingClientRect(), t = getComputedStyle(e), l = t.transform;
  if (l) {
    let a, i, c, u, s;
    if (l.startsWith("matrix3d("))
      a = l.slice(9, -1).split(/, /), i = +a[0], c = +a[5], u = +a[12], s = +a[13];
    else {
      if (!l.startsWith("matrix("))
        return new xt(n);
      a = l.slice(7, -1).split(/, /), i = +a[0], c = +a[3], u = +a[4], s = +a[5];
    }
    const o = t.transformOrigin, v = n.x - u - (1 - i) * parseFloat(o), y = n.y - s - (1 - c) * parseFloat(o.slice(o.indexOf(" ") + 1)), m = i ? n.width / i : e.offsetWidth + 1, g = c ? n.height / c : e.offsetHeight + 1;
    return new xt({ x: v, y, width: m, height: g });
  }
  return new xt(n);
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
  return l.finished === void 0 && (l.finished = new Promise((a) => {
    l.onfinish = () => {
      a(l);
    };
  })), l;
}
const Dn = /* @__PURE__ */ new WeakMap(), Mt = 2.4, ga = 0.2126729, ha = 0.7151522, pa = 0.072175, Lo = 0.55, Ro = 0.58, Mo = 0.57, Wo = 0.62, Ln = 0.03, Ca = 1.45, No = 5e-4, Go = 1.25, Ho = 1.25, ba = 0.078, Sa = 12.82051282051282, Rn = 0.06, Ia = 1e-3;
function Ba(e, n) {
  const t = (e.r / 255) ** Mt, l = (e.g / 255) ** Mt, a = (e.b / 255) ** Mt, i = (n.r / 255) ** Mt, c = (n.g / 255) ** Mt, u = (n.b / 255) ** Mt;
  let s, o = t * ga + l * ha + a * pa, v = i * ga + c * ha + u * pa;
  if (o <= Ln && (o += (Ln - o) ** Ca), v <= Ln && (v += (Ln - v) ** Ca), Math.abs(v - o) < No)
    return 0;
  if (v > o) {
    const y = (v ** Lo - o ** Ro) * Go;
    s = y < Ia ? 0 : y < ba ? y - y * Sa * Rn : y - Rn;
  } else {
    const y = (v ** Wo - o ** Mo) * Ho;
    s = y > -Ia ? 0 : y > -ba ? y - y * Sa * Rn : y + Rn;
  }
  return 100 * s;
}
function hn(e) {
  ll(`Vuetify: ${e}`);
}
function gl(e) {
  return !!e && /^(#|var\(--|(rgb|hsl)a?\()/.test(e);
}
const Va = /^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/, Uo = { rgb: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), rgba: (e, n, t, l) => ({ r: e, g: n, b: t, a: l }), hsl: (e, n, t, l) => ka({ h: e, s: n, l: t, a: l }), hsla: (e, n, t, l) => ka({ h: e, s: n, l: t, a: l }), hsv: (e, n, t, l) => pn({ h: e, s: n, v: t, a: l }), hsva: (e, n, t, l) => pn({ h: e, s: n, v: t, a: l }) };
function mn(e) {
  if (typeof e == "number")
    return (isNaN(e) || e < 0 || e > 16777215) && hn(`'${e}' is not a valid hex color`), { r: (16711680 & e) >> 16, g: (65280 & e) >> 8, b: 255 & e };
  if (typeof e == "string" && Va.test(e)) {
    const { groups: n } = e.match(Va), { fn: t, values: l } = n, a = l.split(/,\s*/).map((i) => i.endsWith("%") && ["hsl", "hsla", "hsv", "hsva"].includes(t) ? parseFloat(i) / 100 : parseFloat(i));
    return Uo[t](...a);
  }
  if (typeof e == "string") {
    let n = e.startsWith("#") ? e.slice(1) : e;
    [3, 4].includes(n.length) ? n = n.split("").map((l) => l + l).join("") : [6, 8].includes(n.length) || hn(`'${e}' is not a valid hex(a) color`);
    const t = parseInt(n, 16);
    return (isNaN(t) || t < 0 || t > 4294967295) && hn(`'${e}' is not a valid hex(a) color`), function(l) {
      l = function(s) {
        return s.startsWith("#") && (s = s.slice(1)), s = s.replace(/([^0-9a-f])/gi, "F"), (s.length === 3 || s.length === 4) && (s = s.split("").map((o) => o + o).join("")), s.length !== 6 && (s = ua(ua(s, 6), 8, "F")), s;
      }(l);
      let [a, i, c, u] = function(s) {
        let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        const v = [];
        let y = 0;
        for (; y < s.length; )
          v.push(s.substr(y, o)), y += o;
        return v;
      }(l, 2).map((s) => parseInt(s, 16));
      return u = u === void 0 ? u : u / 255, { r: a, g: i, b: c, a: u };
    }(n);
  }
  if (typeof e == "object") {
    if (fl(e, ["r", "g", "b"]))
      return e;
    if (fl(e, ["h", "s", "l"]))
      return pn(vi(e));
    if (fl(e, ["h", "s", "v"]))
      return pn(e);
  }
  throw new TypeError(`Invalid color: ${e == null ? e : String(e) || e.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`);
}
function pn(e) {
  const { h: n, s: t, v: l, a } = e, i = (u) => {
    const s = (u + n / 60) % 6;
    return l - l * t * Math.max(Math.min(s, 4 - s, 1), 0);
  }, c = [i(5), i(3), i(1)].map((u) => Math.round(255 * u));
  return { r: c[0], g: c[1], b: c[2], a };
}
function ka(e) {
  return pn(vi(e));
}
function vi(e) {
  const { h: n, s: t, l, a } = e, i = l + t * Math.min(l, 1 - l);
  return { h: n, s: i === 0 ? 0 : 2 - 2 * l / i, v: i, a };
}
const Xn = Symbol.for("vuetify:defaults");
function Hl() {
  const e = ge(Xn);
  if (!e)
    throw new Error("[Vuetify] Could not find defaults instance");
  return e;
}
function Qt(e, n) {
  const t = Hl(), l = D(e), a = f(() => {
    if (r(n == null ? void 0 : n.disabled))
      return t.value;
    const i = r(n == null ? void 0 : n.scoped), c = r(n == null ? void 0 : n.reset), u = r(n == null ? void 0 : n.root);
    if (l.value == null && !(i || c || u))
      return t.value;
    let s = Wt(l.value, { prev: t.value });
    if (i)
      return s;
    if (c || u) {
      const o = Number(c || 1 / 0);
      for (let v = 0; v <= o && s && "prev" in s; v++)
        s = s.prev;
      return s && typeof u == "string" && u in s && (s = Wt(Wt(s, { prev: s }), s[u])), s;
    }
    return s.prev ? Wt(s.prev, s) : s;
  });
  return tt(Xn, a), a;
}
function jo() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 ? arguments[1] : void 0, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Hl();
  const l = Le("useDefaults");
  if (n = n ?? l.type.name ?? l.type.__name, !n)
    throw new Error("[Vuetify] Could not determine component name");
  const a = f(() => {
    var u;
    return (u = t.value) == null ? void 0 : u[e._as ?? n];
  }), i = new Proxy(e, { get(u, s) {
    var v, y, m, g;
    const o = Reflect.get(u, s);
    return s === "class" || s === "style" ? [(v = a.value) == null ? void 0 : v[s], o].filter((p) => p != null) : typeof s != "string" || function(p, C) {
      var h, b;
      return ((h = p.props) == null ? void 0 : h[C]) !== void 0 || ((b = p.props) == null ? void 0 : b[kt(C)]) !== void 0;
    }(l.vnode, s) ? o : ((y = a.value) == null ? void 0 : y[s]) ?? ((g = (m = t.value) == null ? void 0 : m.global) == null ? void 0 : g[s]) ?? o;
  } }), c = de();
  return ot(() => {
    if (a.value) {
      const u = Object.entries(a.value).filter((s) => {
        let [o] = s;
        return o.startsWith(o[0].toUpperCase());
      });
      c.value = u.length ? Object.fromEntries(u) : void 0;
    } else
      c.value = void 0;
  }), { props: i, provideSubDefaults: function() {
    const u = function(s) {
      let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Le("injectSelf");
      const { provides: v } = o;
      if (v && s in v)
        return v[s];
    }(Xn, l);
    tt(Xn, f(() => c.value ? Wt((u == null ? void 0 : u.value) ?? {}, c.value) : u == null ? void 0 : u.value));
  } };
}
function Cn(e) {
  if (e._setup = e._setup ?? e.setup, !e.name)
    return hn("The component is missing an explicit name, unable to generate default prop value"), e;
  if (e._setup) {
    e.props = q(e.props ?? {}, e.name)();
    const n = Object.keys(e.props).filter((t) => t !== "class" && t !== "style");
    e.filterProps = function(t) {
      return ai(t, n);
    }, e.props._as = String, e.setup = function(t, l) {
      const a = Hl();
      if (!a.value)
        return e._setup(t, l);
      const { props: i, provideSubDefaults: c } = jo(t, t._as ?? e.name, a), u = e._setup(i, l);
      return c(), u;
    };
  }
  return e;
}
function te() {
  let e = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
  return (n) => (e ? Cn : rt)(n);
}
function xn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "div", t = arguments.length > 2 ? arguments[2] : void 0;
  return te()({ name: t ?? Za(Qa(e.replace(/__/g, "-"))), props: { tag: { type: String, default: n }, ...ye() }, setup(l, a) {
    let { slots: i } = a;
    return () => {
      var c;
      return al(l.tag, { class: [e, l.class], style: l.style }, (c = i.default) == null ? void 0 : c.call(i));
    };
  } });
}
function fi(e) {
  if (typeof e.getRootNode != "function") {
    for (; e.parentNode; )
      e = e.parentNode;
    return e !== document ? null : document;
  }
  const n = e.getRootNode();
  return n !== document && n.getRootNode({ composed: !0 }) !== document ? null : n;
}
const Kn = "cubic-bezier(0.4, 0, 0.2, 1)";
function Le(e, n) {
  const t = Vo();
  if (!t)
    throw new Error(`[Vuetify] ${e} ${n || "must be called from inside a setup function"}`);
  return t;
}
function st() {
  const e = Le(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "composables").type;
  return kt((e == null ? void 0 : e.aliasName) || (e == null ? void 0 : e.name));
}
let mi = 0, Nn = /* @__PURE__ */ new WeakMap();
function nt() {
  const e = Le("getUid");
  if (Nn.has(e))
    return Nn.get(e);
  {
    const n = mi++;
    return Nn.set(e, n), n;
  }
}
function yi(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
  for (; e; ) {
    if (n ? qo(e) : Ul(e))
      return e;
    e = e.parentElement;
  }
  return document.scrollingElement;
}
function Jn(e, n) {
  const t = [];
  if (n && e && !n.contains(e))
    return t;
  for (; e && (Ul(e) && t.push(e), e !== n); )
    e = e.parentElement;
  return t;
}
function Ul(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return n.overflowY === "scroll" || n.overflowY === "auto" && e.scrollHeight > e.clientHeight;
}
function qo(e) {
  if (!e || e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  const n = window.getComputedStyle(e);
  return ["scroll", "auto"].includes(n.overflowY);
}
function se(e) {
  Le("useRender").render = e;
}
function jl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "content";
  const t = D(), l = D();
  if (Ke) {
    const a = new ResizeObserver((i) => {
      e == null || e(i, a), i.length && (l.value = n === "content" ? i[0].contentRect : i[0].target.getBoundingClientRect());
    });
    yt(() => {
      a.disconnect();
    }), K(t, (i, c) => {
      c && (a.unobserve(Un(c)), l.value = void 0), i && a.observe(Un(i));
    }, { flush: "post" });
  }
  return { resizeRef: t, contentRect: zl(l) };
}
function wt(e, n) {
  let t;
  function l() {
    t = Dl(), t.run(() => n.length ? n(() => {
      t == null || t.stop(), l();
    }) : n());
  }
  K(e, (a) => {
    a && !t ? l() : a || (t == null || t.stop(), t = void 0);
  }, { immediate: !0 }), qe(() => {
    t == null || t.stop();
  });
}
function _e(e, n, t) {
  let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : (v) => v, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : (v) => v;
  const i = Le("useProxiedModel"), c = D(e[n] !== void 0 ? e[n] : t), u = kt(n), s = f(u !== n ? () => {
    var v, y, m, g;
    return e[n], !(!((v = i.vnode.props) != null && v.hasOwnProperty(n)) && !((y = i.vnode.props) != null && y.hasOwnProperty(u)) || !((m = i.vnode.props) != null && m.hasOwnProperty(`onUpdate:${n}`)) && !((g = i.vnode.props) != null && g.hasOwnProperty(`onUpdate:${u}`)));
  } : () => {
    var v, y;
    return e[n], !(!((v = i.vnode.props) != null && v.hasOwnProperty(n)) || !((y = i.vnode.props) != null && y.hasOwnProperty(`onUpdate:${n}`)));
  });
  wt(() => !s.value, () => {
    K(() => e[n], (v) => {
      c.value = v;
    });
  });
  const o = f({ get() {
    const v = e[n];
    return l(s.value ? v : c.value);
  }, set(v) {
    const y = a(v), m = St(s.value ? e[n] : c.value);
    m !== y && l(m) !== v && (c.value = y, i == null || i.emit(`update:${n}`, y));
  } });
  return Object.defineProperty(o, "externalValue", { get: () => s.value ? e[n] : c.value }), o;
}
nt.reset = () => {
  mi = 0, Nn = /* @__PURE__ */ new WeakMap();
};
const gi = Symbol.for("vuetify:locale");
function ql() {
  const e = ge(gi);
  if (!e)
    throw new Error("[Vuetify] Could not find injected locale instance");
  return e;
}
function wn() {
  const e = ge(gi);
  if (!e)
    throw new Error("[Vuetify] Could not find injected rtl instance");
  return { isRtl: e.isRtl, rtlClasses: e.rtlClasses };
}
const xa = Symbol.for("vuetify:theme"), Ne = q({ theme: String }, "theme");
function Xe(e) {
  Le("provideTheme");
  const n = ge(xa, null);
  if (!n)
    throw new Error("Could not find Vuetify theme injection");
  const t = f(() => e.theme ?? n.name.value), l = f(() => n.themes.value[t.value]), a = f(() => n.isDisabled ? void 0 : `v-theme--${t.value}`), i = { ...n, name: t, current: l, themeClasses: a };
  return tt(xa, i), i;
}
const et = q({ tag: { type: String, default: "div" } }, "tag"), Yo = q({ disabled: Boolean, group: Boolean, hideOnLeave: Boolean, leaveAbsolute: Boolean, mode: String, origin: String }, "transition");
function Je(e, n, t) {
  return te()({ name: e, props: Yo({ mode: t, origin: n }), setup(l, a) {
    let { slots: i } = a;
    const c = { onBeforeEnter(u) {
      l.origin && (u.style.transformOrigin = l.origin);
    }, onLeave(u) {
      if (l.leaveAbsolute) {
        const { offsetTop: s, offsetLeft: o, offsetWidth: v, offsetHeight: y } = u;
        u._transitionInitialStyles = { position: u.style.position, top: u.style.top, left: u.style.left, width: u.style.width, height: u.style.height }, u.style.position = "absolute", u.style.top = `${s}px`, u.style.left = `${o}px`, u.style.width = `${v}px`, u.style.height = `${y}px`;
      }
      l.hideOnLeave && u.style.setProperty("display", "none", "important");
    }, onAfterLeave(u) {
      if (l.leaveAbsolute && (u != null && u._transitionInitialStyles)) {
        const { position: s, top: o, left: v, width: y, height: m } = u._transitionInitialStyles;
        delete u._transitionInitialStyles, u.style.position = s || "", u.style.top = o || "", u.style.left = v || "", u.style.width = y || "", u.style.height = m || "";
      }
    } };
    return () => {
      const u = l.group ? ko : Ft;
      return al(u, { name: l.disabled ? "" : e, css: !l.disabled, ...l.group ? void 0 : { mode: l.mode }, ...l.disabled ? {} : c }, i.default);
    };
  } });
}
function hi(e, n) {
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "in-out";
  return te()({ name: e, props: { mode: { type: String, default: t }, disabled: Boolean }, setup(l, a) {
    let { slots: i } = a;
    return () => al(Ft, { name: l.disabled ? "" : e, css: !l.disabled, ...l.disabled ? {} : n }, i.default);
  } });
}
function pi() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  const n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1] ? "width" : "height", t = Qa(`offset-${n}`);
  return { onBeforeEnter(i) {
    i._parent = i.parentNode, i._initialStyle = { transition: i.style.transition, overflow: i.style.overflow, [n]: i.style[n] };
  }, onEnter(i) {
    const c = i._initialStyle;
    i.style.setProperty("transition", "none", "important"), i.style.overflow = "hidden";
    const u = `${i[t]}px`;
    i.style[n] = "0", i.offsetHeight, i.style.transition = c.transition, e && i._parent && i._parent.classList.add(e), requestAnimationFrame(() => {
      i.style[n] = u;
    });
  }, onAfterEnter: a, onEnterCancelled: a, onLeave(i) {
    i._initialStyle = { transition: "", overflow: i.style.overflow, [n]: i.style[n] }, i.style.overflow = "hidden", i.style[n] = `${i[t]}px`, i.offsetHeight, requestAnimationFrame(() => i.style[n] = "0");
  }, onAfterLeave: l, onLeaveCancelled: l };
  function l(i) {
    e && i._parent && i._parent.classList.remove(e), a(i);
  }
  function a(i) {
    const c = i._initialStyle[n];
    i.style.overflow = i._initialStyle.overflow, c != null && (i.style[n] = c), delete i._initialStyle;
  }
}
const Xo = q({ target: [Object, Array] }, "v-dialog-transition"), Ci = te()({ name: "VDialogTransition", props: Xo(), setup(e, n) {
  let { slots: t } = n;
  const l = { onBeforeEnter(a) {
    a.style.pointerEvents = "none", a.style.visibility = "hidden";
  }, async onEnter(a, i) {
    var m;
    await new Promise((g) => requestAnimationFrame(g)), await new Promise((g) => requestAnimationFrame(g)), a.style.visibility = "";
    const { x: c, y: u, sx: s, sy: o, speed: v } = Fa(e.target, a), y = Nt(a, [{ transform: `translate(${c}px, ${u}px) scale(${s}, ${o})`, opacity: 0 }, {}], { duration: 225 * v, easing: "cubic-bezier(0.0, 0, 0.2, 1)" });
    (m = wa(a)) == null || m.forEach((g) => {
      Nt(g, [{ opacity: 0 }, { opacity: 0, offset: 0.33 }, {}], { duration: 450 * v, easing: Kn });
    }), y.finished.then(() => i());
  }, onAfterEnter(a) {
    a.style.removeProperty("pointer-events");
  }, onBeforeLeave(a) {
    a.style.pointerEvents = "none";
  }, async onLeave(a, i) {
    var y;
    await new Promise((m) => requestAnimationFrame(m));
    const { x: c, y: u, sx: s, sy: o, speed: v } = Fa(e.target, a);
    Nt(a, [{}, { transform: `translate(${c}px, ${u}px) scale(${s}, ${o})`, opacity: 0 }], { duration: 125 * v, easing: "cubic-bezier(0.4, 0, 1, 1)" }).finished.then(() => i()), (y = wa(a)) == null || y.forEach((m) => {
      Nt(m, [{}, { opacity: 0, offset: 0.2 }, { opacity: 0 }], { duration: 250 * v, easing: Kn });
    });
  }, onAfterLeave(a) {
    a.style.removeProperty("pointer-events");
  } };
  return () => e.target ? d(Ft, Z({ name: "dialog-transition" }, l, { css: !1 }), t) : d(Ft, { name: "dialog-transition" }, t);
} });
function wa(e) {
  var t;
  const n = (t = e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : t.children;
  return n && [...n];
}
function Fa(e, n) {
  const t = di(e), l = Gl(n), [a, i] = getComputedStyle(n).transformOrigin.split(" ").map((b) => parseFloat(b)), [c, u] = getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let s = t.left + t.width / 2;
  c === "left" || u === "left" ? s -= t.width / 2 : c !== "right" && u !== "right" || (s += t.width / 2);
  let o = t.top + t.height / 2;
  c === "top" || u === "top" ? o -= t.height / 2 : c !== "bottom" && u !== "bottom" || (o += t.height / 2);
  const v = t.width / l.width, y = t.height / l.height, m = Math.max(1, v, y), g = v / m || 0, p = y / m || 0, C = l.width * l.height / (window.innerWidth * window.innerHeight), h = C > 0.12 ? Math.min(1.5, 10 * (C - 0.12) + 1) : 1;
  return { x: s - (a + l.left), y: o - (i + l.top), sx: g, sy: p, speed: h };
}
Je("fab-transition", "center center", "out-in"), Je("dialog-bottom-transition"), Je("dialog-top-transition"), Je("fade-transition");
const Ko = Je("scale-transition");
Je("scroll-x-transition"), Je("scroll-x-reverse-transition"), Je("scroll-y-transition"), Je("scroll-y-reverse-transition"), Je("slide-x-transition"), Je("slide-x-reverse-transition");
const bi = Je("slide-y-transition");
Je("slide-y-reverse-transition");
const Jo = hi("expand-transition", pi()), Si = hi("expand-x-transition", pi("", !0)), Zo = q({ defaults: Object, disabled: Boolean, reset: [Number, String], root: [Boolean, String], scoped: Boolean }, "VDefaultsProvider"), Ge = te(!1)({ name: "VDefaultsProvider", props: Zo(), setup(e, n) {
  let { slots: t } = n;
  const { defaults: l, disabled: a, reset: i, root: c, scoped: u } = Bt(e);
  return Qt(l, { reset: i, root: c, scoped: u, disabled: a }), () => {
    var s;
    return (s = t.default) == null ? void 0 : s.call(t);
  };
} }), zt = q({ height: [Number, String], maxHeight: [Number, String], maxWidth: [Number, String], minHeight: [Number, String], minWidth: [Number, String], width: [Number, String] }, "dimension");
function Dt(e) {
  return { dimensionStyles: f(() => ({ height: ie(e.height), maxHeight: ie(e.maxHeight), maxWidth: ie(e.maxWidth), minHeight: ie(e.minHeight), minWidth: ie(e.minWidth), width: ie(e.width) })) };
}
const Ii = q({ aspectRatio: [String, Number], contentClass: String, inline: Boolean, ...ye(), ...zt() }, "VResponsive"), Pa = te()({ name: "VResponsive", props: Ii(), setup(e, n) {
  let { slots: t } = n;
  const { aspectStyles: l } = function(i) {
    return { aspectStyles: f(() => {
      const c = Number(i.aspectRatio);
      return c ? { paddingBottom: String(1 / c * 100) + "%" } : void 0;
    }) };
  }(e), { dimensionStyles: a } = Dt(e);
  return se(() => {
    var i;
    return d("div", { class: ["v-responsive", { "v-responsive--inline": e.inline }, e.class], style: [a.value, e.style] }, [d("div", { class: "v-responsive__sizer", style: l.value }, null), (i = t.additional) == null ? void 0 : i.call(t), t.default && d("div", { class: ["v-responsive__content", e.contentClass] }, [t.default()])]);
  }), {};
} }), Fn = q({ transition: { type: [Boolean, String, Object], default: "fade-transition", validator: (e) => e !== !0 } }, "transition"), bt = (e, n) => {
  let { slots: t } = n;
  const { transition: l, disabled: a, ...i } = e, { component: c = Ft, ...u } = typeof l == "object" ? l : {};
  return al(c, Z(typeof l == "string" ? { name: a ? "" : l } : u, i, { disabled: a }), t);
};
function Aa(e, n) {
  var l;
  const t = (l = e._observe) == null ? void 0 : l[n.instance.$.uid];
  t && (t.observer.unobserve(e), delete e._observe[n.instance.$.uid]);
}
const Yl = { mounted: function(e, n) {
  if (!Wl)
    return;
  const t = n.modifiers || {}, l = n.value, { handler: a, options: i } = typeof l == "object" ? l : { handler: l, options: {} }, c = new IntersectionObserver(function() {
    var y;
    let u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], s = arguments.length > 1 ? arguments[1] : void 0;
    const o = (y = e._observe) == null ? void 0 : y[n.instance.$.uid];
    if (!o)
      return;
    const v = u.some((m) => m.isIntersecting);
    !a || t.quiet && !o.init || t.once && !v && !o.init || a(v, u, s), v && t.once ? Aa(e, n) : o.init = !0;
  }, i);
  e._observe = Object(e._observe), e._observe[n.instance.$.uid] = { init: !1, observer: c }, c.observe(e);
}, unmounted: Aa }, Qo = q({ alt: String, cover: Boolean, draggable: { type: [Boolean, String], default: void 0 }, eager: Boolean, gradient: String, lazySrc: String, options: { type: Object, default: () => ({ root: void 0, rootMargin: void 0, threshold: void 0 }) }, sizes: String, src: { type: [String, Object], default: "" }, crossorigin: String, referrerpolicy: String, srcset: String, position: String, ...Ii(), ...ye(), ...Fn() }, "VImg"), Bi = te()({ name: "VImg", directives: { intersect: Yl }, props: Qo(), emits: { loadstart: (e) => !0, load: (e) => !0, error: (e) => !0 }, setup(e, n) {
  let { emit: t, slots: l } = n;
  const a = Le("VImg"), i = de(""), c = D(), u = de(e.eager ? "loading" : "idle"), s = de(), o = de(), v = f(() => e.src && typeof e.src == "object" ? { src: e.src.src, srcset: e.srcset || e.src.srcset, lazySrc: e.lazySrc || e.src.lazySrc, aspect: Number(e.aspectRatio || e.src.aspect || 0) } : { src: e.src, srcset: e.srcset, lazySrc: e.lazySrc, aspect: Number(e.aspectRatio || 0) }), y = f(() => v.value.aspect || s.value / o.value || 0);
  function m(I) {
    if ((!e.eager || !I) && (!Wl || I || e.eager)) {
      if (u.value = "loading", v.value.lazySrc) {
        const P = new Image();
        P.src = v.value.lazySrc, b(P, null);
      }
      v.value.src && Me(() => {
        var P;
        t("loadstart", ((P = c.value) == null ? void 0 : P.currentSrc) || v.value.src), setTimeout(() => {
          var S;
          if (!a.isUnmounted)
            if ((S = c.value) != null && S.complete) {
              if (c.value.naturalWidth || p(), u.value === "error")
                return;
              y.value || b(c.value, null), u.value === "loading" && g();
            } else
              y.value || b(c.value), C();
        });
      });
    }
  }
  function g() {
    var I;
    a.isUnmounted || (C(), b(c.value), u.value = "loaded", t("load", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
  }
  function p() {
    var I;
    a.isUnmounted || (u.value = "error", t("error", ((I = c.value) == null ? void 0 : I.currentSrc) || v.value.src));
  }
  function C() {
    const I = c.value;
    I && (i.value = I.currentSrc || I.src);
  }
  K(() => e.src, () => {
    m(u.value !== "idle");
  }), K(y, (I, P) => {
    !I && P && c.value && b(c.value);
  }), ei(() => m());
  let h = -1;
  function b(I) {
    let P = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100;
    const S = () => {
      if (clearTimeout(h), a.isUnmounted)
        return;
      const { naturalHeight: w, naturalWidth: A } = I;
      w || A ? (s.value = A, o.value = w) : I.complete || u.value !== "loading" || P == null ? (I.currentSrc.endsWith(".svg") || I.currentSrc.startsWith("data:image/svg+xml")) && (s.value = 1, o.value = 1) : h = window.setTimeout(S, P);
    };
    S();
  }
  yt(() => {
    clearTimeout(h);
  });
  const x = f(() => ({ "v-img__img--cover": e.cover, "v-img__img--contain": !e.cover })), O = () => {
    var S;
    if (!v.value.src || u.value === "idle")
      return null;
    const I = d("img", { class: ["v-img__img", x.value], style: { objectPosition: e.position }, src: v.value.src, srcset: v.value.srcset, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable, sizes: e.sizes, ref: c, onLoad: g, onError: p }, null), P = (S = l.sources) == null ? void 0 : S.call(l);
    return d(bt, { transition: e.transition, appear: !0 }, { default: () => [Ue(P ? d("picture", { class: "v-img__picture" }, [P, I]) : I, [[jt, u.value === "loaded"]])] });
  }, H = () => d(bt, { transition: e.transition }, { default: () => [v.value.lazySrc && u.value !== "loaded" && d("img", { class: ["v-img__img", "v-img__img--preload", x.value], style: { objectPosition: e.position }, src: v.value.lazySrc, alt: e.alt, crossorigin: e.crossorigin, referrerpolicy: e.referrerpolicy, draggable: e.draggable }, null)] }), $ = () => l.placeholder ? d(bt, { transition: e.transition, appear: !0 }, { default: () => [(u.value === "loading" || u.value === "error" && !l.error) && d("div", { class: "v-img__placeholder" }, [l.placeholder()])] }) : null, _ = () => l.error ? d(bt, { transition: e.transition, appear: !0 }, { default: () => [u.value === "error" && d("div", { class: "v-img__error" }, [l.error()])] }) : null, W = () => e.gradient ? d("div", { class: "v-img__gradient", style: { backgroundImage: `linear-gradient(${e.gradient})` } }, null) : null, T = de(!1);
  {
    const I = K(y, (P) => {
      P && (requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          T.value = !0;
        });
      }), I());
    });
  }
  return se(() => {
    const I = Pa.filterProps(e);
    return Ue(d(Pa, Z({ class: ["v-img", { "v-img--booting": !T.value }, e.class], style: [{ width: ie(e.width === "auto" ? s.value : e.width) }, e.style] }, I, { aspectRatio: y.value, "aria-label": e.alt, role: e.alt ? "img" : void 0 }), { additional: () => d(we, null, [d(O, null, null), d(H, null, null), d(W, null, null), d($, null, null), d(_, null, null)]), default: l.default }), [[gt("intersect"), { handler: m, options: e.options }, null, { once: !0 }]]);
  }), { currentSrc: i, image: c, state: u, naturalWidth: s, naturalHeight: o };
} }), en = q({ border: [Boolean, Number, String] }, "border");
function tn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { borderClasses: f(() => {
    const t = At(e) ? e.value : e.border, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--border`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        l.push(`border-${a}`);
    return l;
  }) };
}
function Xl(e) {
  return Nl(() => {
    const n = [], t = {};
    if (e.value.background)
      if (gl(e.value.background)) {
        if (t.backgroundColor = e.value.background, !e.value.text && gl(l = e.value.background) && !/^((rgb|hsl)a?\()?var\(--/.test(l)) {
          const a = mn(e.value.background);
          if (a.a == null || a.a === 1) {
            const i = function(c) {
              const u = Math.abs(Ba(mn(0), mn(c)));
              return Math.abs(Ba(mn(16777215), mn(c))) > Math.min(u, 50) ? "#fff" : "#000";
            }(a);
            t.color = i, t.caretColor = i;
          }
        }
      } else
        n.push(`bg-${e.value.background}`);
    var l;
    return e.value.text && (gl(e.value.text) ? (t.color = e.value.text, t.caretColor = e.value.text) : n.push(`text-${e.value.text}`)), { colorClasses: n, colorStyles: t };
  });
}
function mt(e, n) {
  const t = f(() => ({ text: At(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: a } = Xl(t);
  return { textColorClasses: l, textColorStyles: a };
}
function Ht(e, n) {
  const t = f(() => ({ background: At(e) ? e.value : n ? e[n] : null })), { colorClasses: l, colorStyles: a } = Xl(t);
  return { backgroundColorClasses: l, backgroundColorStyles: a };
}
const nn = q({ elevation: { type: [Number, String], validator(e) {
  const n = parseInt(e);
  return !isNaN(n) && n >= 0 && n <= 24;
} } }, "elevation");
function ln(e) {
  return { elevationClasses: f(() => {
    const n = At(e) ? e.value : e.elevation, t = [];
    return n == null || t.push(`elevation-${n}`), t;
  }) };
}
const ht = q({ rounded: { type: [Boolean, Number, String], default: void 0 } }, "rounded");
function pt(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { roundedClasses: f(() => {
    const t = At(e) ? e.value : e.rounded, l = [];
    if (t === !0 || t === "")
      l.push(`${n}--rounded`);
    else if (typeof t == "string" || t === 0)
      for (const a of String(t).split(" "))
        l.push(`rounded-${a}`);
    return l;
  }) };
}
const er = [null, "default", "comfortable", "compact"], ut = q({ density: { type: String, default: "default", validator: (e) => er.includes(e) } }, "density");
function Ct(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { densityClasses: f(() => `${n}--density-${e.density}`) };
}
const tr = ["elevated", "flat", "tonal", "outlined", "text", "plain"];
function Pn(e, n) {
  return d(we, null, [e && d("span", { key: "overlay", class: `${n}__overlay` }, null), d("span", { key: "underlay", class: `${n}__underlay` }, null)]);
}
const Vt = q({ color: String, variant: { type: String, default: "elevated", validator: (e) => tr.includes(e) } }, "variant");
function An(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = f(() => {
    const { variant: i } = r(e);
    return `${n}--variant-${i}`;
  }), { colorClasses: l, colorStyles: a } = Xl(f(() => {
    const { variant: i, color: c } = r(e);
    return { [["elevated", "flat"].includes(i) ? "background" : "text"]: c };
  }));
  return { colorClasses: l, colorStyles: a, variantClasses: t };
}
const Vi = q({ divided: Boolean, ...en(), ...ye(), ...ut(), ...nn(), ...ht(), ...et(), ...Ne(), ...Vt() }, "VBtnGroup"), Oa = te()({ name: "VBtnGroup", props: Vi(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { densityClasses: a } = Ct(e), { borderClasses: i } = tn(e), { elevationClasses: c } = ln(e), { roundedClasses: u } = pt(e);
  Qt({ VBtn: { height: "auto", color: ae(e, "color"), density: ae(e, "density"), flat: !0, variant: ae(e, "variant") } }), se(() => d(e.tag, { class: ["v-btn-group", { "v-btn-group--divided": e.divided }, l.value, i.value, a.value, c.value, u.value, e.class], style: e.style }, t));
} }), ki = q({ modelValue: { type: null, default: void 0 }, multiple: Boolean, mandatory: [Boolean, String], max: Number, selectedClass: String, disabled: Boolean }, "group"), xi = q({ value: null, disabled: Boolean, selectedClass: String }, "group-item");
function wi(e, n) {
  let t = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
  const l = Le("useGroupItem");
  if (!l)
    throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");
  const a = nt();
  tt(Symbol.for(`${n.description}:id`), a);
  const i = ge(n, null);
  if (!i) {
    if (!t)
      return i;
    throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`);
  }
  const c = ae(e, "value"), u = f(() => !(!i.disabled.value && !e.disabled));
  i.register({ id: a, value: c, disabled: u }, l), yt(() => {
    i.unregister(a);
  });
  const s = f(() => i.isSelected(a)), o = f(() => s.value && [i.selectedClass.value, e.selectedClass]);
  return K(s, (v) => {
    l.emit("group:selected", { value: v });
  }), { id: a, isSelected: s, toggle: () => i.select(a, !s.value), select: (v) => i.select(a, v), selectedClass: o, value: c, disabled: u, group: i };
}
function Fi(e, n) {
  let t = !1;
  const l = lt([]), a = _e(e, "modelValue", [], (o) => o == null ? [] : Ta(l, dt(o)), (o) => {
    const v = function(y, m) {
      const g = [];
      return m.forEach((p) => {
        const C = y.findIndex((h) => h.id === p);
        if (~C) {
          const h = y[C];
          g.push(h.value != null ? h.value : C);
        }
      }), g;
    }(l, o);
    return e.multiple ? v : v[0];
  }), i = Le("useGroup");
  function c() {
    const o = l.find((v) => !v.disabled);
    o && e.mandatory === "force" && !a.value.length && (a.value = [o.id]);
  }
  function u(o) {
    if (e.multiple && hn('This method is not supported when using "multiple" prop'), a.value.length) {
      const v = a.value[0], y = l.findIndex((p) => p.id === v);
      let m = (y + o) % l.length, g = l[m];
      for (; g.disabled && m !== y; )
        m = (m + o) % l.length, g = l[m];
      if (g.disabled)
        return;
      a.value = [l[m].id];
    } else {
      const v = l.find((y) => !y.disabled);
      v && (a.value = [v.id]);
    }
  }
  qt(() => {
    c();
  }), yt(() => {
    t = !0;
  });
  const s = { register: function(o, v) {
    const y = o, m = Wn(Symbol.for(`${n.description}:id`), i == null ? void 0 : i.vnode).indexOf(v);
    m > -1 ? l.splice(m, 0, y) : l.push(y);
  }, unregister: function(o) {
    if (t)
      return;
    c();
    const v = l.findIndex((y) => y.id === o);
    l.splice(v, 1);
  }, selected: a, select: function(o, v) {
    const y = l.find((m) => m.id === o);
    if (!v || !(y != null && y.disabled))
      if (e.multiple) {
        const m = a.value.slice(), g = m.findIndex((C) => C === o), p = ~g;
        if (v = v ?? !p, p && e.mandatory && m.length <= 1 || !p && e.max != null && m.length + 1 > e.max)
          return;
        g < 0 && v ? m.push(o) : g >= 0 && !v && m.splice(g, 1), a.value = m;
      } else {
        const m = a.value.includes(o);
        if (e.mandatory && m)
          return;
        a.value = v ?? !m ? [o] : [];
      }
  }, disabled: ae(e, "disabled"), prev: () => u(l.length - 1), next: () => u(1), isSelected: (o) => a.value.includes(o), selectedClass: f(() => e.selectedClass), items: f(() => l), getItemIndex: (o) => function(v, y) {
    const m = Ta(v, [y]);
    return m.length ? v.findIndex((g) => g.id === m[0]) : -1;
  }(l, o) };
  return tt(n, s), s;
}
function Ta(e, n) {
  const t = [];
  return n.forEach((l) => {
    const a = e.find((c) => Zt(l, c.value)), i = e[l];
    (a == null ? void 0 : a.value) != null ? t.push(a.id) : i != null && t.push(i.id);
  }), t;
}
const Pi = Symbol.for("vuetify:v-btn-toggle"), nr = q({ ...Vi(), ...ki() }, "VBtnToggle");
te()({ name: "VBtnToggle", props: nr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { isSelected: l, next: a, prev: i, select: c, selected: u } = Fi(e, Pi);
  return se(() => {
    const s = Oa.filterProps(e);
    return d(Oa, Z({ class: ["v-btn-toggle", e.class] }, s, { style: e.style }), { default: () => {
      var o;
      return [(o = t.default) == null ? void 0 : o.call(t, { isSelected: l, next: a, prev: i, select: c, selected: u })];
    } });
  }), { next: a, prev: i, select: c };
} });
const be = [String, Function, Object, Array], lr = Symbol.for("vuetify:icons"), Zn = q({ icon: { type: be }, tag: { type: String, required: !0 } }, "icon"), _a = te()({ name: "VComponentIcon", props: Zn(), setup(e, n) {
  let { slots: t } = n;
  return () => {
    const l = e.icon;
    return d(e.tag, null, { default: () => {
      var a;
      return [e.icon ? d(l, null, null) : (a = t.default) == null ? void 0 : a.call(t)];
    } });
  };
} }), ar = Cn({ name: "VSvgIcon", inheritAttrs: !1, props: Zn(), setup(e, n) {
  let { attrs: t } = n;
  return () => d(e.tag, Z(t, { style: null }), { default: () => [d("svg", { class: "v-icon__svg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", role: "img", "aria-hidden": "true" }, [Array.isArray(e.icon) ? e.icon.map((l) => Array.isArray(l) ? d("path", { d: l[0], "fill-opacity": l[1] }, null) : d("path", { d: l }, null)) : d("path", { d: e.icon }, null)])] });
} });
Cn({ name: "VLigatureIcon", props: Zn(), setup: (e) => () => d(e.tag, null, { default: () => [e.icon] }) }), Cn({ name: "VClassIcon", props: Zn(), setup: (e) => () => d(e.tag, { class: e.icon }, null) });
const ir = ["x-small", "small", "default", "large", "x-large"], On = q({ size: { type: [String, Number], default: "default" } }, "size");
function Tn(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return Nl(() => {
    let t, l;
    return jn(ir, e.size) ? t = `${n}--size-${e.size}` : e.size && (l = { width: ie(e.size), height: ie(e.size) }), { sizeClasses: t, sizeStyles: l };
  });
}
const or = q({ color: String, start: Boolean, end: Boolean, icon: be, ...ye(), ...On(), ...et({ tag: "i" }), ...Ne() }, "VIcon"), Ie = te()({ name: "VIcon", props: or(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = D(), { themeClasses: i } = Xe(e), { iconData: c } = ((v) => {
    const y = ge(lr);
    if (!y)
      throw new Error("Missing Vuetify Icons provide!");
    return { iconData: f(() => {
      var h;
      const m = r(v);
      if (!m)
        return { component: _a };
      let g = m;
      if (typeof g == "string" && (g = g.trim(), g.startsWith("$") && (g = (h = y.aliases) == null ? void 0 : h[g.slice(1)])), !g)
        throw new Error(`Could not find aliased icon "${m}"`);
      if (Array.isArray(g))
        return { component: ar, icon: g };
      if (typeof g != "string")
        return { component: _a, icon: g };
      const p = Object.keys(y.sets).find((b) => typeof g == "string" && g.startsWith(`${b}:`)), C = p ? g.slice(p.length + 1) : g;
      return { component: y.sets[p ?? y.defaultSet].component, icon: C };
    }) };
  })(f(() => a.value || e.icon)), { sizeClasses: u } = Tn(e), { textColorClasses: s, textColorStyles: o } = mt(ae(e, "color"));
  return se(() => {
    var y, m;
    const v = (y = l.default) == null ? void 0 : y.call(l);
    return v && (a.value = (m = oi(v).filter((g) => g.type === xo && g.children && typeof g.children == "string")[0]) == null ? void 0 : m.children), d(c.value.component, { tag: e.tag, icon: c.value.icon, class: ["v-icon", "notranslate", i.value, u.value, s.value, { "v-icon--clickable": !!t.onClick, "v-icon--start": e.start, "v-icon--end": e.end }, e.class], style: [u.value ? void 0 : { fontSize: ie(e.size), height: ie(e.size), width: ie(e.size) }, o.value, e.style], role: t.onClick ? "button" : void 0, "aria-hidden": !t.onClick }, { default: () => [v] });
  }), {};
} });
function Ai(e, n) {
  const t = D(), l = de(!1);
  if (Wl) {
    const a = new IntersectionObserver((i) => {
      e == null || e(i, a), l.value = !!i.find((c) => c.isIntersecting);
    }, n);
    yt(() => {
      a.disconnect();
    }), K(t, (i, c) => {
      c && (a.unobserve(c), l.value = !1), i && a.observe(i);
    }, { flush: "post" });
  }
  return { intersectionRef: t, isIntersecting: l };
}
const rr = q({ bgColor: String, color: String, indeterminate: [Boolean, String], modelValue: { type: [Number, String], default: 0 }, rotate: { type: [Number, String], default: 0 }, width: { type: [Number, String], default: 4 }, ...ye(), ...On(), ...et({ tag: "div" }), ...Ne() }, "VProgressCircular"), Oi = te()({ name: "VProgressCircular", props: rr(), setup(e, n) {
  let { slots: t } = n;
  const l = 2 * Math.PI * 20, a = D(), { themeClasses: i } = Xe(e), { sizeClasses: c, sizeStyles: u } = Tn(e), { textColorClasses: s, textColorStyles: o } = mt(ae(e, "color")), { textColorClasses: v, textColorStyles: y } = mt(ae(e, "bgColor")), { intersectionRef: m, isIntersecting: g } = Ai(), { resizeRef: p, contentRect: C } = jl(), h = f(() => Math.max(0, Math.min(100, parseFloat(e.modelValue)))), b = f(() => Number(e.width)), x = f(() => u.value ? Number(e.size) : C.value ? C.value.width : Math.max(b.value, 32)), O = f(() => 20 / (1 - b.value / x.value) * 2), H = f(() => b.value / x.value * O.value), $ = f(() => ie((100 - h.value) / 100 * l));
  return ot(() => {
    m.value = a.value, p.value = a.value;
  }), se(() => d(e.tag, { ref: a, class: ["v-progress-circular", { "v-progress-circular--indeterminate": !!e.indeterminate, "v-progress-circular--visible": g.value, "v-progress-circular--disable-shrink": e.indeterminate === "disable-shrink" }, i.value, c.value, s.value, e.class], style: [u.value, o.value, e.style], role: "progressbar", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": e.indeterminate ? void 0 : h.value }, { default: () => [d("svg", { style: { transform: `rotate(calc(-90deg + ${Number(e.rotate)}deg))` }, xmlns: "http://www.w3.org/2000/svg", viewBox: `0 0 ${O.value} ${O.value}` }, [d("circle", { class: ["v-progress-circular__underlay", v.value], style: y.value, fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": H.value, "stroke-dasharray": l, "stroke-dashoffset": 0 }, null), d("circle", { class: "v-progress-circular__overlay", fill: "transparent", cx: "50%", cy: "50%", r: 20, "stroke-width": H.value, "stroke-dasharray": l, "stroke-dashoffset": $.value }, null)]), t.default && d("div", { class: "v-progress-circular__content" }, [t.default({ value: h.value })])] })), {};
} }), Ea = { center: "center", top: "bottom", bottom: "top", left: "right", right: "left" }, Kl = q({ location: String }, "location");
function Jl(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], t = arguments.length > 2 ? arguments[2] : void 0;
  const { isRtl: l } = wn();
  return { locationStyles: f(() => {
    if (!e.location)
      return {};
    const { side: i, align: c } = kl(e.location.split(" ").length > 1 ? e.location : `${e.location} center`, l.value);
    function u(o) {
      return t ? t(o) : 0;
    }
    const s = {};
    return i !== "center" && (n ? s[Ea[i]] = `calc(100% - ${u(i)}px)` : s[i] = 0), c !== "center" ? n ? s[Ea[c]] = `calc(100% - ${u(c)}px)` : s[c] = 0 : (i === "center" ? s.top = s.left = "50%" : s[{ top: "left", bottom: "left", left: "top", right: "top" }[i]] = "50%", s.transform = { top: "translateX(-50%)", bottom: "translateX(-50%)", left: "translateY(-50%)", right: "translateY(-50%)", center: "translate(-50%, -50%)" }[i]), s;
  }) };
}
const sr = q({ absolute: Boolean, active: { type: Boolean, default: !0 }, bgColor: String, bgOpacity: [Number, String], bufferValue: { type: [Number, String], default: 0 }, clickable: Boolean, color: String, height: { type: [Number, String], default: 4 }, indeterminate: Boolean, max: { type: [Number, String], default: 100 }, modelValue: { type: [Number, String], default: 0 }, reverse: Boolean, stream: Boolean, striped: Boolean, roundedBar: Boolean, ...ye(), ...Kl({ location: "top" }), ...ht(), ...et(), ...Ne() }, "VProgressLinear"), ur = te()({ name: "VProgressLinear", props: sr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = _e(e, "modelValue"), { isRtl: a, rtlClasses: i } = wn(), { themeClasses: c } = Xe(e), { locationStyles: u } = Jl(e), { textColorClasses: s, textColorStyles: o } = mt(e, "color"), { backgroundColorClasses: v, backgroundColorStyles: y } = Ht(f(() => e.bgColor || e.color)), { backgroundColorClasses: m, backgroundColorStyles: g } = Ht(e, "color"), { roundedClasses: p } = pt(e), { intersectionRef: C, isIntersecting: h } = Ai(), b = f(() => parseInt(e.max, 10)), x = f(() => parseInt(e.height, 10)), O = f(() => parseFloat(e.bufferValue) / b.value * 100), H = f(() => parseFloat(l.value) / b.value * 100), $ = f(() => a.value !== e.reverse), _ = f(() => e.indeterminate ? "fade-transition" : "slide-x-transition"), W = f(() => e.bgOpacity == null ? e.bgOpacity : parseFloat(e.bgOpacity));
  function T(I) {
    if (!C.value)
      return;
    const { left: P, right: S, width: w } = C.value.getBoundingClientRect(), A = $.value ? w - I.clientX + (S - w) : I.clientX - P;
    l.value = Math.round(A / w * b.value);
  }
  return se(() => d(e.tag, { ref: C, class: ["v-progress-linear", { "v-progress-linear--absolute": e.absolute, "v-progress-linear--active": e.active && h.value, "v-progress-linear--reverse": $.value, "v-progress-linear--rounded": e.rounded, "v-progress-linear--rounded-bar": e.roundedBar, "v-progress-linear--striped": e.striped }, p.value, c.value, i.value, e.class], style: [{ bottom: e.location === "bottom" ? 0 : void 0, top: e.location === "top" ? 0 : void 0, height: e.active ? ie(x.value) : 0, "--v-progress-linear-height": ie(x.value), ...u.value }, e.style], role: "progressbar", "aria-hidden": e.active ? "false" : "true", "aria-valuemin": "0", "aria-valuemax": e.max, "aria-valuenow": e.indeterminate ? void 0 : H.value, onClick: e.clickable && T }, { default: () => [e.stream && d("div", { key: "stream", class: ["v-progress-linear__stream", s.value], style: { ...o.value, [$.value ? "left" : "right"]: ie(-x.value), borderTop: `${ie(x.value / 2)} dotted`, opacity: W.value, top: `calc(50% - ${ie(x.value / 4)})`, width: ie(100 - O.value, "%"), "--v-progress-linear-stream-to": ie(x.value * ($.value ? 1 : -1)) } }, null), d("div", { class: ["v-progress-linear__background", v.value], style: [y.value, { opacity: W.value, width: ie(e.stream ? O.value : 100, "%") }] }, null), d(Ft, { name: _.value }, { default: () => [e.indeterminate ? d("div", { class: "v-progress-linear__indeterminate" }, [["long", "short"].map((I) => d("div", { key: I, class: ["v-progress-linear__indeterminate", I, m.value], style: g.value }, null))]) : d("div", { class: ["v-progress-linear__determinate", m.value], style: [g.value, { width: ie(H.value, "%") }] }, null)] }), t.default && d("div", { class: "v-progress-linear__content" }, [t.default({ value: H.value, buffer: O.value })])] })), {};
} }), Zl = q({ loading: [Boolean, String] }, "loader");
function il(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { loaderClasses: f(() => ({ [`${n}--loading`]: e.loading })) };
}
function Ql(e, n) {
  var l;
  let { slots: t } = n;
  return d("div", { class: `${e.name}__loader` }, [((l = t.default) == null ? void 0 : l.call(t, { color: e.color, isActive: e.active })) || d(ur, { absolute: e.absolute, active: e.active, color: e.color, height: "2", indeterminate: !0 }, null)]);
}
const cr = ["static", "relative", "fixed", "absolute", "sticky"], Ti = q({ position: { type: String, validator: (e) => cr.includes(e) } }, "position");
function _i(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  return { positionClasses: f(() => e.position ? `${n}--${e.position}` : void 0) };
}
function ol(e, n) {
  const t = wo("RouterLink"), l = f(() => !(!e.href && !e.to)), a = f(() => (l == null ? void 0 : l.value) || da(n, "click") || da(e, "click"));
  if (typeof t == "string")
    return { isLink: l, isClickable: a, href: ae(e, "href") };
  const i = e.to ? t.useLink(e) : void 0, c = function() {
    const u = Le("useRoute");
    return f(() => {
      var s;
      return (s = u == null ? void 0 : u.proxy) == null ? void 0 : s.$route;
    });
  }();
  return { isLink: l, isClickable: a, route: i == null ? void 0 : i.route, navigate: i == null ? void 0 : i.navigate, isActive: i && f(() => {
    var u, s, o;
    return e.exact ? c.value ? ((u = i.isExactActive) == null ? void 0 : u.value) && Zt(i.route.value.query, c.value.query) : (s = i.isExactActive) == null ? void 0 : s.value : (o = i.isActive) == null ? void 0 : o.value;
  }), href: f(() => e.to ? i == null ? void 0 : i.route.value.href : e.href) };
}
const rl = q({ href: String, replace: Boolean, to: [String, Object], exact: Boolean }, "router");
let hl = !1;
const xl = Symbol("rippleStop"), dr = 80;
function $a(e, n) {
  e.style.transform = n, e.style.webkitTransform = n;
}
function wl(e) {
  return e.constructor.name === "TouchEvent";
}
function Ei(e) {
  return e.constructor.name === "KeyboardEvent";
}
const Qn = { show(e, n) {
  var g;
  let t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (!((g = n == null ? void 0 : n._ripple) != null && g.enabled))
    return;
  const l = document.createElement("span"), a = document.createElement("span");
  l.appendChild(a), l.className = "v-ripple__container", t.class && (l.className += ` ${t.class}`);
  const { radius: i, scale: c, x: u, y: s, centerX: o, centerY: v } = function(p, C) {
    var W;
    let h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, b = 0, x = 0;
    if (!Ei(p)) {
      const T = C.getBoundingClientRect(), I = wl(p) ? p.touches[p.touches.length - 1] : p;
      b = I.clientX - T.left, x = I.clientY - T.top;
    }
    let O = 0, H = 0.3;
    (W = C._ripple) != null && W.circle ? (H = 0.15, O = C.clientWidth / 2, O = h.center ? O : O + Math.sqrt((b - O) ** 2 + (x - O) ** 2) / 4) : O = Math.sqrt(C.clientWidth ** 2 + C.clientHeight ** 2) / 2;
    const $ = (C.clientWidth - 2 * O) / 2 + "px", _ = (C.clientHeight - 2 * O) / 2 + "px";
    return { radius: O, scale: H, x: h.center ? $ : b - O + "px", y: h.center ? _ : x - O + "px", centerX: $, centerY: _ };
  }(e, n, t), y = 2 * i + "px";
  a.className = "v-ripple__animation", a.style.width = y, a.style.height = y, n.appendChild(l);
  const m = window.getComputedStyle(n);
  m && m.position === "static" && (n.style.position = "relative", n.dataset.previousPosition = "static"), a.classList.add("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--visible"), $a(a, `translate(${u}, ${s}) scale3d(${c},${c},${c})`), a.dataset.activated = String(performance.now()), setTimeout(() => {
    a.classList.remove("v-ripple__animation--enter"), a.classList.add("v-ripple__animation--in"), $a(a, `translate(${o}, ${v}) scale3d(1,1,1)`);
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
  const l = performance.now() - Number(t.dataset.activated), a = Math.max(250 - l, 0);
  setTimeout(() => {
    t.classList.remove("v-ripple__animation--in"), t.classList.add("v-ripple__animation--out"), setTimeout(() => {
      var c;
      e.getElementsByClassName("v-ripple__animation").length === 1 && e.dataset.previousPosition && (e.style.position = e.dataset.previousPosition, delete e.dataset.previousPosition), ((c = t.parentNode) == null ? void 0 : c.parentNode) === e && e.removeChild(t.parentNode);
    }, 300);
  }, a);
} };
function $i(e) {
  return e === void 0 || !!e;
}
function bn(e) {
  const n = {}, t = e.currentTarget;
  if (t != null && t._ripple && !t._ripple.touched && !e[xl]) {
    if (e[xl] = !0, wl(e))
      t._ripple.touched = !0, t._ripple.isTouch = !0;
    else if (t._ripple.isTouch)
      return;
    if (n.center = t._ripple.centered || Ei(e), t._ripple.class && (n.class = t._ripple.class), wl(e)) {
      if (t._ripple.showTimerCommit)
        return;
      t._ripple.showTimerCommit = () => {
        Qn.show(e, t, n);
      }, t._ripple.showTimer = window.setTimeout(() => {
        var l;
        (l = t == null ? void 0 : t._ripple) != null && l.showTimerCommit && (t._ripple.showTimerCommit(), t._ripple.showTimerCommit = null);
      }, dr);
    } else
      Qn.show(e, t, n);
  }
}
function za(e) {
  e[xl] = !0;
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
function zi(e) {
  const n = e.currentTarget;
  n != null && n._ripple && (n._ripple.showTimerCommit && (n._ripple.showTimerCommit = null), window.clearTimeout(n._ripple.showTimer));
}
let Sn = !1;
function Di(e) {
  Sn || e.keyCode !== ra.enter && e.keyCode !== ra.space || (Sn = !0, bn(e));
}
function Li(e) {
  Sn = !1, Ze(e);
}
function Ri(e) {
  Sn && (Sn = !1, Ze(e));
}
function Da(e, n, t) {
  const { value: l, modifiers: a } = n, i = $i(l);
  if (i || Qn.hide(e), e._ripple = e._ripple ?? {}, e._ripple.enabled = i, e._ripple.centered = a.center, e._ripple.circle = a.circle, Il(l) && l.class && (e._ripple.class = l.class), i && !t) {
    if (a.stop)
      return e.addEventListener("touchstart", za, { passive: !0 }), void e.addEventListener("mousedown", za);
    e.addEventListener("touchstart", bn, { passive: !0 }), e.addEventListener("touchend", Ze, { passive: !0 }), e.addEventListener("touchmove", zi, { passive: !0 }), e.addEventListener("touchcancel", Ze), e.addEventListener("mousedown", bn), e.addEventListener("mouseup", Ze), e.addEventListener("mouseleave", Ze), e.addEventListener("keydown", Di), e.addEventListener("keyup", Li), e.addEventListener("blur", Ri), e.addEventListener("dragstart", Ze, { passive: !0 });
  } else
    !i && t && Mi(e);
}
function Mi(e) {
  e.removeEventListener("mousedown", bn), e.removeEventListener("touchstart", bn), e.removeEventListener("touchend", Ze), e.removeEventListener("touchmove", zi), e.removeEventListener("touchcancel", Ze), e.removeEventListener("mouseup", Ze), e.removeEventListener("mouseleave", Ze), e.removeEventListener("keydown", Di), e.removeEventListener("keyup", Li), e.removeEventListener("dragstart", Ze), e.removeEventListener("blur", Ri);
}
const _n = { mounted: function(e, n) {
  Da(e, n, !1);
}, unmounted: function(e) {
  delete e._ripple, Mi(e);
}, updated: function(e, n) {
  n.value !== n.oldValue && Da(e, n, $i(n.oldValue));
} }, vr = q({ active: { type: Boolean, default: void 0 }, symbol: { type: null, default: Pi }, flat: Boolean, icon: [Boolean, String, Function, Object], prependIcon: be, appendIcon: be, block: Boolean, slim: Boolean, stacked: Boolean, ripple: { type: [Boolean, Object], default: !0 }, text: String, ...en(), ...ye(), ...ut(), ...zt(), ...nn(), ...xi(), ...Zl(), ...Kl(), ...Ti(), ...ht(), ...rl(), ...On(), ...et({ tag: "button" }), ...Ne(), ...Vt({ variant: "elevated" }) }, "VBtn"), La = te()({ name: "VBtn", directives: { Ripple: _n }, props: vr(), emits: { "group:selected": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: a } = Xe(e), { borderClasses: i } = tn(e), { colorClasses: c, colorStyles: u, variantClasses: s } = An(e), { densityClasses: o } = Ct(e), { dimensionStyles: v } = Dt(e), { elevationClasses: y } = ln(e), { loaderClasses: m } = il(e), { locationStyles: g } = Jl(e), { positionClasses: p } = _i(e), { roundedClasses: C } = pt(e), { sizeClasses: h, sizeStyles: b } = Tn(e), x = wi(e, e.symbol, !1), O = ol(e, t), H = f(() => {
    var I;
    return e.active !== void 0 ? e.active : O.isLink.value ? (I = O.isActive) == null ? void 0 : I.value : x == null ? void 0 : x.isSelected.value;
  }), $ = f(() => (x == null ? void 0 : x.disabled.value) || e.disabled), _ = f(() => e.variant === "elevated" && !(e.disabled || e.flat || e.border)), W = f(() => {
    if (e.value !== void 0 && typeof e.value != "symbol")
      return Object(e.value) === e.value ? JSON.stringify(e.value, null, 0) : e.value;
  });
  function T(I) {
    var P;
    $.value || O.isLink.value && (I.metaKey || I.ctrlKey || I.shiftKey || I.button !== 0 || t.target === "_blank") || ((P = O.navigate) == null || P.call(O, I), x == null || x.toggle());
  }
  return function(I, P) {
    K(() => {
      var S;
      return (S = I.isActive) == null ? void 0 : S.value;
    }, (S) => {
      I.isLink.value && S && P && Me(() => {
        P(!0);
      });
    }, { immediate: !0 });
  }(O, x == null ? void 0 : x.select), se(() => {
    var M, N;
    const I = O.isLink.value ? "a" : e.tag, P = !(!e.prependIcon && !l.prepend), S = !(!e.appendIcon && !l.append), w = !(!e.icon || e.icon === !0), A = (x == null ? void 0 : x.isSelected.value) && (!O.isLink.value || ((M = O.isActive) == null ? void 0 : M.value)) || !x || ((N = O.isActive) == null ? void 0 : N.value);
    return Ue(d(I, { type: I === "a" ? void 0 : "button", class: ["v-btn", x == null ? void 0 : x.selectedClass.value, { "v-btn--active": H.value, "v-btn--block": e.block, "v-btn--disabled": $.value, "v-btn--elevated": _.value, "v-btn--flat": e.flat, "v-btn--icon": !!e.icon, "v-btn--loading": e.loading, "v-btn--slim": e.slim, "v-btn--stacked": e.stacked }, a.value, i.value, A ? c.value : void 0, o.value, y.value, m.value, p.value, C.value, h.value, s.value, e.class], style: [A ? u.value : void 0, v.value, g.value, b.value, e.style], disabled: $.value || void 0, href: O.href.value, onClick: T, value: W.value }, { default: () => {
      var k;
      return [Pn(!0, "v-btn"), !e.icon && P && d("span", { key: "prepend", class: "v-btn__prepend" }, [l.prepend ? d(Ge, { key: "prepend-defaults", disabled: !e.prependIcon, defaults: { VIcon: { icon: e.prependIcon } } }, l.prepend) : d(Ie, { key: "prepend-icon", icon: e.prependIcon }, null)]), d("span", { class: "v-btn__content", "data-no-activator": "" }, [!l.default && w ? d(Ie, { key: "content-icon", icon: e.icon }, null) : d(Ge, { key: "content-defaults", disabled: !w, defaults: { VIcon: { icon: e.icon } } }, { default: () => {
        var B;
        return [((B = l.default) == null ? void 0 : B.call(l)) ?? e.text];
      } })]), !e.icon && S && d("span", { key: "append", class: "v-btn__append" }, [l.append ? d(Ge, { key: "append-defaults", disabled: !e.appendIcon, defaults: { VIcon: { icon: e.appendIcon } } }, l.append) : d(Ie, { key: "append-icon", icon: e.appendIcon }, null)]), !!e.loading && d("span", { key: "loader", class: "v-btn__loader" }, [((k = l.loader) == null ? void 0 : k.call(l)) ?? d(Oi, { color: typeof e.loading == "boolean" ? void 0 : e.loading, indeterminate: !0, size: "23", width: "2" }, null)])];
    } }), [[gt("ripple"), !$.value && e.ripple, null]]);
  }), {};
} }), fr = q({ text: String, clickable: Boolean, ...ye(), ...Ne() }, "VLabel"), Wi = te()({ name: "VLabel", props: fr(), setup(e, n) {
  let { slots: t } = n;
  return se(() => {
    var l;
    return d("label", { class: ["v-label", { "v-label--clickable": e.clickable }, e.class], style: e.style }, [e.text, (l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), Ni = Symbol.for("vuetify:selection-control-group"), Gi = q({ color: String, disabled: { type: Boolean, default: null }, defaultsTarget: String, error: Boolean, id: String, inline: Boolean, falseIcon: be, trueIcon: be, ripple: { type: Boolean, default: !0 }, multiple: { type: Boolean, default: null }, name: String, readonly: { type: Boolean, default: null }, modelValue: null, type: String, valueComparator: { type: Function, default: Zt }, ...ye(), ...ut(), ...Ne() }, "SelectionControlGroup"), mr = q({ ...Gi({ defaultsTarget: "VSelectionControl" }) }, "VSelectionControlGroup");
te()({ name: "VSelectionControlGroup", props: mr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = _e(e, "modelValue"), a = nt(), i = f(() => e.id || `v-selection-control-group-${a}`), c = f(() => e.name || i.value), u = /* @__PURE__ */ new Set();
  return tt(Ni, { modelValue: l, forceUpdate: () => {
    u.forEach((s) => s());
  }, onForceUpdate: (s) => {
    u.add(s), qe(() => {
      u.delete(s);
    });
  } }), Qt({ [e.defaultsTarget]: { color: ae(e, "color"), disabled: ae(e, "disabled"), density: ae(e, "density"), error: ae(e, "error"), inline: ae(e, "inline"), modelValue: l, multiple: f(() => !!e.multiple || e.multiple == null && Array.isArray(l.value)), name: c, falseIcon: ae(e, "falseIcon"), trueIcon: ae(e, "trueIcon"), readonly: ae(e, "readonly"), ripple: ae(e, "ripple"), type: ae(e, "type"), valueComparator: ae(e, "valueComparator") } }), se(() => {
    var s;
    return d("div", { class: ["v-selection-control-group", { "v-selection-control-group--inline": e.inline }, e.class], style: e.style, role: e.type === "radio" ? "radiogroup" : void 0 }, [(s = t.default) == null ? void 0 : s.call(t)]);
  }), {};
} });
const ea = q({ label: String, baseColor: String, trueValue: null, falseValue: null, value: null, ...ye(), ...Gi() }, "VSelectionControl"), el = te()({ name: "VSelectionControl", directives: { Ripple: _n }, inheritAttrs: !1, props: ea(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { group: a, densityClasses: i, icon: c, model: u, textColorClasses: s, textColorStyles: o, backgroundColorClasses: v, backgroundColorStyles: y, trueValue: m } = function($) {
    const _ = ge(Ni, void 0), { densityClasses: W } = Ct($), T = _e($, "modelValue"), I = f(() => $.trueValue !== void 0 ? $.trueValue : $.value === void 0 || $.value), P = f(() => $.falseValue !== void 0 && $.falseValue), S = f(() => !!$.multiple || $.multiple == null && Array.isArray(T.value)), w = f({ get() {
      const V = _ ? _.modelValue.value : T.value;
      return S.value ? dt(V).some((F) => $.valueComparator(F, I.value)) : $.valueComparator(V, I.value);
    }, set(V) {
      if ($.readonly)
        return;
      const F = V ? I.value : P.value;
      let G = F;
      S.value && (G = V ? [...dt(T.value), F] : dt(T.value).filter((L) => !$.valueComparator(L, I.value))), _ ? _.modelValue.value = G : T.value = G;
    } }), { textColorClasses: A, textColorStyles: M } = mt(f(() => {
      if (!$.error && !$.disabled)
        return w.value ? $.color : $.baseColor;
    })), { backgroundColorClasses: N, backgroundColorStyles: k } = Ht(f(() => !w.value || $.error || $.disabled ? void 0 : $.color)), B = f(() => w.value ? $.trueIcon : $.falseIcon);
    return { group: _, densityClasses: W, trueValue: I, falseValue: P, model: w, textColorClasses: A, textColorStyles: M, backgroundColorClasses: N, backgroundColorStyles: k, icon: B };
  }(e), g = nt(), p = f(() => e.id || `input-${g}`), C = de(!1), h = de(!1), b = D();
  function x($) {
    C.value = !0, Yn($.target, ":focus-visible") !== !1 && (h.value = !0);
  }
  function O() {
    C.value = !1, h.value = !1;
  }
  function H($) {
    e.readonly && a && Me(() => a.forceUpdate()), u.value = $.target.checked;
  }
  return a == null || a.onForceUpdate(() => {
    b.value && (b.value.checked = u.value);
  }), se(() => {
    var I, P;
    const $ = l.label ? l.label({ label: e.label, props: { for: p.value } }) : e.label, [_, W] = kn(t), T = d("input", Z({ ref: b, checked: u.value, disabled: !(!e.readonly && !e.disabled), id: p.value, onBlur: O, onFocus: x, onInput: H, "aria-disabled": !(!e.readonly && !e.disabled), type: e.type, value: m.value, name: e.name, "aria-checked": e.type === "checkbox" ? u.value : void 0 }, W), null);
    return d("div", Z({ class: ["v-selection-control", { "v-selection-control--dirty": u.value, "v-selection-control--disabled": e.disabled, "v-selection-control--error": e.error, "v-selection-control--focused": C.value, "v-selection-control--focus-visible": h.value, "v-selection-control--inline": e.inline }, i.value, e.class] }, _, { style: e.style }), [d("div", { class: ["v-selection-control__wrapper", s.value], style: o.value }, [(I = l.default) == null ? void 0 : I.call(l, { backgroundColorClasses: v, backgroundColorStyles: y }), Ue(d("div", { class: ["v-selection-control__input"] }, [((P = l.input) == null ? void 0 : P.call(l, { model: u, textColorClasses: s, textColorStyles: o, backgroundColorClasses: v, backgroundColorStyles: y, inputNode: T, icon: c.value, props: { onFocus: x, onBlur: O, id: p.value } })) ?? d(we, null, [c.value && d(Ie, { key: "icon", icon: c.value }, null), T])]), [[gt("ripple"), e.ripple && [!e.disabled && !e.readonly, null, ["center", "circle"]]]])]), $ && d(Wi, { for: p.value, clickable: !0, onClick: (S) => S.stopPropagation() }, { default: () => [$] })]);
  }), { isFocused: C, input: b };
} }), Hi = q({ indeterminate: Boolean, indeterminateIcon: { type: be, default: "$checkboxIndeterminate" }, ...ea({ falseIcon: "$checkboxOff", trueIcon: "$checkboxOn" }) }, "VCheckboxBtn"), Fl = te()({ name: "VCheckboxBtn", props: Hi(), emits: { "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = _e(e, "indeterminate"), a = _e(e, "modelValue");
  function i(s) {
    l.value && (l.value = !1);
  }
  const c = f(() => l.value ? e.indeterminateIcon : e.falseIcon), u = f(() => l.value ? e.indeterminateIcon : e.trueIcon);
  return se(() => {
    const s = $t(el.filterProps(e), ["modelValue"]);
    return d(el, Z(s, { modelValue: a.value, "onUpdate:modelValue": [(o) => a.value = o, i], class: ["v-checkbox-btn", e.class], style: e.style, type: "checkbox", falseIcon: c.value, trueIcon: u.value, "aria-checked": l.value ? "mixed" : void 0 }), t);
  }), {};
} });
function Ui(e) {
  const { t: n } = ql();
  return { InputIcon: function(t) {
    let { name: l } = t;
    const a = { prepend: "prependAction", prependInner: "prependAction", append: "appendAction", appendInner: "appendAction", clear: "clear" }[l], i = e[`onClick:${l}`], c = i && a ? n(`$vuetify.input.${a}`, e.label ?? "") : void 0;
    return d(Ie, { icon: e[`${l}Icon`], "aria-label": c, onClick: i }, null);
  } };
}
const yr = q({ active: Boolean, color: String, messages: { type: [Array, String], default: () => [] }, ...ye(), ...Fn({ transition: { component: bi, leaveAbsolute: !0, group: !0 } }) }, "VMessages"), gr = te()({ name: "VMessages", props: yr(), setup(e, n) {
  let { slots: t } = n;
  const l = f(() => dt(e.messages)), { textColorClasses: a, textColorStyles: i } = mt(f(() => e.color));
  return se(() => d(bt, { transition: e.transition, tag: "div", class: ["v-messages", a.value, e.class], style: [i.value, e.style], role: "alert", "aria-live": "polite" }, { default: () => [e.active && l.value.map((c, u) => d("div", { class: "v-messages__message", key: `${u}-${l.value}` }, [t.message ? t.message({ message: c }) : c]))] })), {};
} }), ji = q({ focused: Boolean, "onUpdate:focused": it() }, "focus");
function En(e) {
  let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = _e(e, "focused");
  return { focusClasses: f(() => ({ [`${n}--focused`]: t.value })), isFocused: t, focus: function() {
    t.value = !0;
  }, blur: function() {
    t.value = !1;
  } };
}
const hr = Symbol.for("vuetify:form");
function qi() {
  return ge(hr, null);
}
const pr = q({ disabled: { type: Boolean, default: null }, error: Boolean, errorMessages: { type: [Array, String], default: () => [] }, maxErrors: { type: [Number, String], default: 1 }, name: String, label: String, readonly: { type: Boolean, default: null }, rules: { type: Array, default: () => [] }, modelValue: null, validateOn: String, validationValue: null, ...ji() }, "validation"), $n = q({ id: String, appendIcon: be, centerAffix: { type: Boolean, default: !0 }, prependIcon: be, hideDetails: [Boolean, String], hideSpinButtons: Boolean, hint: String, persistentHint: Boolean, messages: { type: [Array, String], default: () => [] }, direction: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical"].includes(e) }, "onClick:prepend": it(), "onClick:append": it(), ...ye(), ...ut(), ...pr() }, "VInput"), It = te()({ name: "VInput", props: { ...$n() }, emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const { densityClasses: i } = Ct(e), { rtlClasses: c } = wn(), { InputIcon: u } = Ui(e), s = nt(), o = f(() => e.id || `input-${s}`), v = f(() => `${o.value}-messages`), { errorMessages: y, isDirty: m, isDisabled: g, isReadonly: p, isPristine: C, isValid: h, isValidating: b, reset: x, resetValidation: O, validate: H, validationClasses: $ } = function(T) {
    let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st(), P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : nt();
    const S = _e(T, "modelValue"), w = f(() => T.validationValue === void 0 ? S.value : T.validationValue), A = qi(), M = D([]), N = de(!0), k = f(() => !(!dt(S.value === "" ? null : S.value).length && !dt(w.value === "" ? null : w.value).length)), B = f(() => !!(T.disabled ?? (A == null ? void 0 : A.isDisabled.value))), V = f(() => !!(T.readonly ?? (A == null ? void 0 : A.isReadonly.value))), F = f(() => {
      var Y;
      return (Y = T.errorMessages) != null && Y.length ? dt(T.errorMessages).concat(M.value).slice(0, Math.max(0, +T.maxErrors)) : M.value;
    }), G = f(() => {
      let Y = (T.validateOn ?? (A == null ? void 0 : A.validateOn.value)) || "input";
      Y === "lazy" && (Y = "input lazy");
      const ee = new Set((Y == null ? void 0 : Y.split(" ")) ?? []);
      return { blur: ee.has("blur") || ee.has("input"), input: ee.has("input"), submit: ee.has("submit"), lazy: ee.has("lazy") };
    }), L = f(() => {
      var Y;
      return !T.error && !((Y = T.errorMessages) != null && Y.length) && (!T.rules.length || (N.value ? !M.value.length && !G.value.lazy || null : !M.value.length));
    }), z = de(!1), Q = f(() => ({ [`${I}--error`]: L.value === !1, [`${I}--dirty`]: k.value, [`${I}--disabled`]: B.value, [`${I}--readonly`]: V.value })), E = f(() => T.name ?? r(P));
    function U() {
      S.value = null, Me(R);
    }
    function R() {
      N.value = !0, G.value.lazy ? M.value = [] : j(!0);
    }
    async function j() {
      let Y = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
      const ee = [];
      z.value = !0;
      for (const ve of T.rules) {
        if (ee.length >= +(T.maxErrors ?? 1))
          break;
        const Ce = typeof ve == "function" ? ve : () => ve, he = await Ce(w.value);
        he !== !0 && (he === !1 || typeof he == "string" ? ee.push(he || "") : console.warn(`${he} is not a valid value. Rule functions must return boolean true or a string.`));
      }
      return M.value = ee, z.value = !1, N.value = Y, M.value;
    }
    return ei(() => {
      A == null || A.register({ id: E.value, validate: j, reset: U, resetValidation: R });
    }), yt(() => {
      A == null || A.unregister(E.value);
    }), qt(async () => {
      G.value.lazy || await j(!0), A == null || A.update(E.value, L.value, F.value);
    }), wt(() => G.value.input, () => {
      K(w, () => {
        if (w.value != null)
          j();
        else if (T.focused) {
          const Y = K(() => T.focused, (ee) => {
            ee || j(), Y();
          });
        }
      });
    }), wt(() => G.value.blur, () => {
      K(() => T.focused, (Y) => {
        Y || j();
      });
    }), K(L, () => {
      A == null || A.update(E.value, L.value, F.value);
    }), { errorMessages: F, isDirty: k, isDisabled: B, isReadonly: V, isPristine: N, isValid: L, isValidating: z, reset: U, resetValidation: R, validate: j, validationClasses: Q };
  }(e, "v-input", o), _ = f(() => ({ id: o, messagesId: v, isDirty: m, isDisabled: g, isReadonly: p, isPristine: C, isValid: h, isValidating: b, reset: x, resetValidation: O, validate: H })), W = f(() => {
    var T;
    return (T = e.errorMessages) != null && T.length || !C.value && y.value.length ? y.value : e.hint && (e.persistentHint || e.focused) ? e.hint : e.messages;
  });
  return se(() => {
    var w, A, M, N;
    const T = !(!l.prepend && !e.prependIcon), I = !(!l.append && !e.appendIcon), P = W.value.length > 0, S = !e.hideDetails || e.hideDetails === "auto" && (P || !!l.details);
    return d("div", { class: ["v-input", `v-input--${e.direction}`, { "v-input--center-affix": e.centerAffix, "v-input--hide-spin-buttons": e.hideSpinButtons }, i.value, c.value, $.value, e.class], style: e.style }, [T && d("div", { key: "prepend", class: "v-input__prepend" }, [(w = l.prepend) == null ? void 0 : w.call(l, _.value), e.prependIcon && d(u, { key: "prepend-icon", name: "prepend" }, null)]), l.default && d("div", { class: "v-input__control" }, [(A = l.default) == null ? void 0 : A.call(l, _.value)]), I && d("div", { key: "append", class: "v-input__append" }, [e.appendIcon && d(u, { key: "append-icon", name: "append" }, null), (M = l.append) == null ? void 0 : M.call(l, _.value)]), S && d("div", { class: "v-input__details" }, [d(gr, { id: v.value, active: P, messages: W.value }, { message: l.message }), (N = l.details) == null ? void 0 : N.call(l, _.value)])]);
  }), { reset: x, resetValidation: O, validate: H, isValid: h, errorMessages: y };
} }), Cr = q({ ...$n(), ...$t(Hi(), ["inline"]) }, "VCheckbox"), br = te()({ name: "VCheckbox", inheritAttrs: !1, props: Cr(), emits: { "update:modelValue": (e) => !0, "update:focused": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = _e(e, "modelValue"), { isFocused: i, focus: c, blur: u } = En(e), s = nt(), o = f(() => e.id || `checkbox-${s}`);
  return se(() => {
    const [v, y] = kn(t), m = It.filterProps(e), g = Fl.filterProps(e);
    return d(It, Z({ class: ["v-checkbox", e.class] }, v, m, { modelValue: a.value, "onUpdate:modelValue": (p) => a.value = p, id: o.value, focused: i.value, style: e.style }), { ...l, default: (p) => {
      let { id: C, messagesId: h, isDisabled: b, isReadonly: x } = p;
      return d(Fl, Z(g, { id: C.value, "aria-describedby": h.value, disabled: b.value, readonly: x.value }, y, { modelValue: a.value, "onUpdate:modelValue": (O) => a.value = O, onFocus: c, onBlur: u }), l);
    } });
  }), {};
} }), Sr = q({ start: Boolean, end: Boolean, icon: be, image: String, text: String, ...ye(), ...ut(), ...ht(), ...On(), ...et(), ...Ne(), ...Vt({ variant: "flat" }) }, "VAvatar"), Ut = te()({ name: "VAvatar", props: Sr(), setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { colorClasses: a, colorStyles: i, variantClasses: c } = An(e), { densityClasses: u } = Ct(e), { roundedClasses: s } = pt(e), { sizeClasses: o, sizeStyles: v } = Tn(e);
  return se(() => d(e.tag, { class: ["v-avatar", { "v-avatar--start": e.start, "v-avatar--end": e.end }, l.value, a.value, u.value, s.value, o.value, c.value, e.class], style: [i.value, v.value, e.style] }, { default: () => {
    var y;
    return [e.image ? d(Bi, { key: "image", src: e.image, alt: "", cover: !0 }, null) : e.icon ? d(Ie, { key: "icon", icon: e.icon }, null) : ((y = t.default) == null ? void 0 : y.call(t)) ?? e.text, Pn(!1, "v-avatar")];
  } })), {};
} }), Yi = Symbol.for("vuetify:v-chip-group"), Ir = q({ column: Boolean, filter: Boolean, valueComparator: { type: Function, default: Zt }, ...ye(), ...ki({ selectedClass: "v-chip--selected" }), ...et(), ...Ne(), ...Vt({ variant: "tonal" }) }, "VChipGroup");
te()({ name: "VChipGroup", props: Ir(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { themeClasses: l } = Xe(e), { isSelected: a, select: i, next: c, prev: u, selected: s } = Fi(e, Yi);
  return Qt({ VChip: { color: ae(e, "color"), disabled: ae(e, "disabled"), filter: ae(e, "filter"), variant: ae(e, "variant") } }), se(() => d(e.tag, { class: ["v-chip-group", { "v-chip-group--column": e.column }, l.value, e.class], style: e.style }, { default: () => {
    var o;
    return [(o = t.default) == null ? void 0 : o.call(t, { isSelected: a, select: i, next: c, prev: u, selected: s.value })];
  } })), {};
} });
const Br = q({ activeClass: String, appendAvatar: String, appendIcon: be, closable: Boolean, closeIcon: { type: be, default: "$delete" }, closeLabel: { type: String, default: "$vuetify.close" }, draggable: Boolean, filter: Boolean, filterIcon: { type: String, default: "$complete" }, label: Boolean, link: { type: Boolean, default: void 0 }, pill: Boolean, prependAvatar: String, prependIcon: be, ripple: { type: [Boolean, Object], default: !0 }, text: String, modelValue: { type: Boolean, default: !0 }, onClick: it(), onClickOnce: it(), ...en(), ...ye(), ...ut(), ...nn(), ...xi(), ...ht(), ...rl(), ...On(), ...et({ tag: "span" }), ...Ne(), ...Vt({ variant: "tonal" }) }, "VChip"), Vr = te()({ name: "VChip", directives: { Ripple: _n }, props: Br(), emits: { "click:close": (e) => !0, "update:modelValue": (e) => !0, "group:selected": (e) => !0, click: (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { t: i } = ql(), { borderClasses: c } = tn(e), { colorClasses: u, colorStyles: s, variantClasses: o } = An(e), { densityClasses: v } = Ct(e), { elevationClasses: y } = ln(e), { roundedClasses: m } = pt(e), { sizeClasses: g } = Tn(e), { themeClasses: p } = Xe(e), C = _e(e, "modelValue"), h = wi(e, Yi, !1), b = ol(e, t), x = f(() => e.link !== !1 && b.isLink.value), O = f(() => !e.disabled && e.link !== !1 && (!!h || e.link || b.isClickable.value)), H = f(() => ({ "aria-label": i(e.closeLabel), onClick(W) {
    W.stopPropagation(), C.value = !1, l("click:close", W);
  } }));
  function $(W) {
    var T;
    l("click", W), O.value && ((T = b.navigate) == null || T.call(b, W), h == null || h.toggle());
  }
  function _(W) {
    W.key !== "Enter" && W.key !== " " || (W.preventDefault(), $(W));
  }
  return () => {
    const W = b.isLink.value ? "a" : e.tag, T = !(!e.appendIcon && !e.appendAvatar), I = !(!T && !a.append), P = !(!a.close && !e.closable), S = !(!a.filter && !e.filter) && h, w = !(!e.prependIcon && !e.prependAvatar), A = !(!w && !a.prepend), M = !h || h.isSelected.value;
    return C.value && Ue(d(W, { class: ["v-chip", { "v-chip--disabled": e.disabled, "v-chip--label": e.label, "v-chip--link": O.value, "v-chip--filter": S, "v-chip--pill": e.pill }, p.value, c.value, M ? u.value : void 0, v.value, y.value, m.value, g.value, o.value, h == null ? void 0 : h.selectedClass.value, e.class], style: [M ? s.value : void 0, e.style], disabled: e.disabled || void 0, draggable: e.draggable, href: b.href.value, tabindex: O.value ? 0 : void 0, onClick: $, onKeydown: O.value && !x.value && _ }, { default: () => {
      var N;
      return [Pn(O.value, "v-chip"), S && d(Si, { key: "filter" }, { default: () => [Ue(d("div", { class: "v-chip__filter" }, [a.filter ? d(Ge, { key: "filter-defaults", disabled: !e.filterIcon, defaults: { VIcon: { icon: e.filterIcon } } }, a.filter) : d(Ie, { key: "filter-icon", icon: e.filterIcon }, null)]), [[jt, h.isSelected.value]])] }), A && d("div", { key: "prepend", class: "v-chip__prepend" }, [a.prepend ? d(Ge, { key: "prepend-defaults", disabled: !w, defaults: { VAvatar: { image: e.prependAvatar, start: !0 }, VIcon: { icon: e.prependIcon, start: !0 } } }, a.prepend) : d(we, null, [e.prependIcon && d(Ie, { key: "prepend-icon", icon: e.prependIcon, start: !0 }, null), e.prependAvatar && d(Ut, { key: "prepend-avatar", image: e.prependAvatar, start: !0 }, null)])]), d("div", { class: "v-chip__content" }, [((N = a.default) == null ? void 0 : N.call(a, { isSelected: h == null ? void 0 : h.isSelected.value, selectedClass: h == null ? void 0 : h.selectedClass.value, select: h == null ? void 0 : h.select, toggle: h == null ? void 0 : h.toggle, value: h == null ? void 0 : h.value.value, disabled: e.disabled })) ?? e.text]), I && d("div", { key: "append", class: "v-chip__append" }, [a.append ? d(Ge, { key: "append-defaults", disabled: !T, defaults: { VAvatar: { end: !0, image: e.appendAvatar }, VIcon: { end: !0, icon: e.appendIcon } } }, a.append) : d(we, null, [e.appendIcon && d(Ie, { key: "append-icon", end: !0, icon: e.appendIcon }, null), e.appendAvatar && d(Ut, { key: "append-avatar", end: !0, image: e.appendAvatar }, null)])]), P && d("div", Z({ key: "close", class: "v-chip__close" }, H.value), [a.close ? d(Ge, { key: "close-defaults", defaults: { VIcon: { icon: e.closeIcon, size: "x-small" } } }, a.close) : d(Ie, { key: "close-icon", icon: e.closeIcon, size: "x-small" }, null)])];
    } }), [[gt("ripple"), O.value && e.ripple, null]]);
  };
} }), Pl = Symbol.for("vuetify:list");
function Xi() {
  const e = ge(Pl, { hasPrepend: de(!1), updateHasPrepend: () => null }), n = { hasPrepend: de(!1), updateHasPrepend: (t) => {
    t && (n.hasPrepend.value = t);
  } };
  return tt(Pl, n), e;
}
function Ki() {
  return ge(Pl, null);
}
const kr = { open: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (t) {
    const i = /* @__PURE__ */ new Set();
    i.add(n);
    let c = a.get(n);
    for (; c != null; )
      i.add(c), c = a.get(c);
    return i;
  }
  return l.delete(n), l;
}, select: () => null }, Ji = { open: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (t) {
    let i = a.get(n);
    for (l.add(n); i != null && i !== n; )
      l.add(i), i = a.get(i);
    return l;
  }
  return l.delete(n), l;
}, select: () => null }, xr = { open: Ji.open, select: (e) => {
  let { id: n, value: t, opened: l, parents: a } = e;
  if (!t)
    return l;
  const i = [];
  let c = a.get(n);
  for (; c != null; )
    i.push(c), c = a.get(c);
  return new Set(i);
} }, Al = (e) => {
  const n = { select: (t) => {
    let { id: l, value: a, selected: i } = t;
    if (l = St(l), e && !a) {
      const c = Array.from(i.entries()).reduce((u, s) => {
        let [o, v] = s;
        return v === "on" ? [...u, o] : u;
      }, []);
      if (c.length === 1 && c[0] === l)
        return i;
    }
    return i.set(l, a ? "on" : "off"), i;
  }, in: (t, l, a) => {
    let i = /* @__PURE__ */ new Map();
    for (const c of t || [])
      i = n.select({ id: c, value: !0, selected: new Map(i), children: l, parents: a });
    return i;
  }, out: (t) => {
    const l = [];
    for (const [a, i] of t.entries())
      i === "on" && l.push(a);
    return l;
  } };
  return n;
}, Ra = (e) => {
  const n = Al(e);
  return { select: (t) => {
    let { selected: l, id: a, ...i } = t;
    a = St(a);
    const c = l.has(a) ? /* @__PURE__ */ new Map([[a, l.get(a)]]) : /* @__PURE__ */ new Map();
    return n.select({ ...i, id: a, selected: c });
  }, in: (t, l, a) => {
    let i = /* @__PURE__ */ new Map();
    return t != null && t.length && (i = n.in(t.slice(0, 1), l, a)), i;
  }, out: (t, l, a) => n.out(t, l, a) };
}, In = Symbol.for("vuetify:nested"), Zi = { id: de(), root: { register: () => null, unregister: () => null, parents: D(/* @__PURE__ */ new Map()), children: D(/* @__PURE__ */ new Map()), open: () => null, openOnSelect: () => null, select: () => null, opened: D(/* @__PURE__ */ new Set()), selected: D(/* @__PURE__ */ new Map()), selectedValues: D([]) } }, wr = q({ selectStrategy: [String, Function], openStrategy: [String, Object], opened: Array, selected: Array, mandatory: Boolean }, "nested"), Fr = (e) => {
  let n = !1;
  const t = D(/* @__PURE__ */ new Map()), l = D(/* @__PURE__ */ new Map()), a = _e(e, "opened", e.opened, (y) => new Set(y), (y) => [...y.values()]), i = f(() => {
    if (typeof e.selectStrategy == "object")
      return e.selectStrategy;
    switch (e.selectStrategy) {
      case "single-leaf":
        return ((y) => {
          const m = Ra(y);
          return { select: (g) => {
            let { id: p, selected: C, children: h, ...b } = g;
            return p = St(p), h.has(p) ? C : m.select({ id: p, selected: C, children: h, ...b });
          }, in: m.in, out: m.out };
        })(e.mandatory);
      case "leaf":
        return ((y) => {
          const m = Al(y);
          return { select: (g) => {
            let { id: p, selected: C, children: h, ...b } = g;
            return p = St(p), h.has(p) ? C : m.select({ id: p, selected: C, children: h, ...b });
          }, in: m.in, out: m.out };
        })(e.mandatory);
      case "independent":
        return Al(e.mandatory);
      case "single-independent":
        return Ra(e.mandatory);
      default:
        return ((y) => {
          const m = { select: (g) => {
            let { id: p, value: C, selected: h, children: b, parents: x } = g;
            p = St(p);
            const O = new Map(h), H = [p];
            for (; H.length; ) {
              const _ = H.shift();
              h.set(_, C ? "on" : "off"), b.has(_) && H.push(...b.get(_));
            }
            let $ = x.get(p);
            for (; $; ) {
              const _ = b.get($), W = _.every((I) => h.get(I) === "on"), T = _.every((I) => !h.has(I) || h.get(I) === "off");
              h.set($, W ? "on" : T ? "off" : "indeterminate"), $ = x.get($);
            }
            return y && !C && Array.from(h.entries()).reduce((W, T) => {
              let [I, P] = T;
              return P === "on" ? [...W, I] : W;
            }, []).length === 0 ? O : h;
          }, in: (g, p, C) => {
            let h = /* @__PURE__ */ new Map();
            for (const b of g || [])
              h = m.select({ id: b, value: !0, selected: new Map(h), children: p, parents: C });
            return h;
          }, out: (g, p) => {
            const C = [];
            for (const [h, b] of g.entries())
              b !== "on" || p.has(h) || C.push(h);
            return C;
          } };
          return m;
        })(e.mandatory);
    }
  }), c = f(() => {
    if (typeof e.openStrategy == "object")
      return e.openStrategy;
    switch (e.openStrategy) {
      case "list":
        return xr;
      case "single":
        return kr;
      default:
        return Ji;
    }
  }), u = _e(e, "selected", e.selected, (y) => i.value.in(y, t.value, l.value), (y) => i.value.out(y, t.value, l.value));
  function s(y) {
    const m = [];
    let g = y;
    for (; g != null; )
      m.unshift(g), g = l.value.get(g);
    return m;
  }
  yt(() => {
    n = !0;
  });
  const o = Le("nested"), v = { id: de(), root: { opened: a, selected: u, selectedValues: f(() => {
    const y = [];
    for (const [m, g] of u.value.entries())
      g === "on" && y.push(m);
    return y;
  }), register: (y, m, g) => {
    m && y !== m && l.value.set(y, m), g && t.value.set(y, []), m != null && t.value.set(m, [...t.value.get(m) || [], y]);
  }, unregister: (y) => {
    if (n)
      return;
    t.value.delete(y);
    const m = l.value.get(y);
    if (m) {
      const g = t.value.get(m) ?? [];
      t.value.set(m, g.filter((p) => p !== y));
    }
    l.value.delete(y), a.value.delete(y);
  }, open: (y, m, g) => {
    o.emit("click:open", { id: y, value: m, path: s(y), event: g });
    const p = c.value.open({ id: y, value: m, opened: new Set(a.value), children: t.value, parents: l.value, event: g });
    p && (a.value = p);
  }, openOnSelect: (y, m, g) => {
    const p = c.value.select({ id: y, value: m, selected: new Map(u.value), opened: new Set(a.value), children: t.value, parents: l.value, event: g });
    p && (a.value = p);
  }, select: (y, m, g) => {
    o.emit("click:select", { id: y, value: m, path: s(y), event: g });
    const p = i.value.select({ id: y, value: m, selected: new Map(u.value), children: t.value, parents: l.value, event: g });
    p && (u.value = p), v.root.openOnSelect(y, m, g);
  }, children: t, parents: l } };
  return tt(In, v), v.root;
}, Qi = (e, n) => {
  const t = ge(In, Zi), l = Symbol(nt()), a = f(() => e.value !== void 0 ? e.value : l), i = { ...t, id: a, open: (c, u) => t.root.open(a.value, c, u), openOnSelect: (c, u) => t.root.openOnSelect(a.value, c, u), isOpen: f(() => t.root.opened.value.has(a.value)), parent: f(() => t.root.parents.value.get(a.value)), select: (c, u) => t.root.select(a.value, c, u), isSelected: f(() => t.root.selected.value.get(St(a.value)) === "on"), isIndeterminate: f(() => t.root.selected.value.get(a.value) === "indeterminate"), isLeaf: f(() => !t.root.children.value.get(a.value)), isGroupActivator: t.isGroupActivator };
  return !t.isGroupActivator && t.root.register(a.value, t.id.value, n), yt(() => {
    !t.isGroupActivator && t.root.unregister(a.value);
  }), n && tt(In, i), i;
}, Pr = Cn({ name: "VListGroupActivator", setup(e, n) {
  let { slots: t } = n;
  return (() => {
    const l = ge(In, Zi);
    tt(In, { ...l, isGroupActivator: !0 });
  })(), () => {
    var l;
    return (l = t.default) == null ? void 0 : l.call(t);
  };
} }), Ar = q({ activeColor: String, baseColor: String, color: String, collapseIcon: { type: be, default: "$collapse" }, expandIcon: { type: be, default: "$expand" }, prependIcon: be, appendIcon: be, fluid: Boolean, subgroup: Boolean, title: String, value: null, ...ye(), ...et() }, "VListGroup"), Ma = te()({ name: "VListGroup", props: Ar(), setup(e, n) {
  let { slots: t } = n;
  const { isOpen: l, open: a, id: i } = Qi(ae(e, "value"), !0), c = f(() => `v-list-group--id-${String(i.value)}`), u = Ki(), { isBooted: s } = function() {
    const g = de(!1);
    return qt(() => {
      window.requestAnimationFrame(() => {
        g.value = !0;
      });
    }), { ssrBootStyles: f(() => g.value ? void 0 : { transition: "none !important" }), isBooted: zl(g) };
  }();
  function o(g) {
    a(!l.value, g);
  }
  const v = f(() => ({ onClick: o, class: "v-list-group__header", id: c.value })), y = f(() => l.value ? e.collapseIcon : e.expandIcon), m = f(() => ({ VListItem: { active: l.value, activeColor: e.activeColor, baseColor: e.baseColor, color: e.color, prependIcon: e.prependIcon || e.subgroup && y.value, appendIcon: e.appendIcon || !e.subgroup && y.value, title: e.title, value: e.value } }));
  return se(() => d(e.tag, { class: ["v-list-group", { "v-list-group--prepend": u == null ? void 0 : u.hasPrepend.value, "v-list-group--fluid": e.fluid, "v-list-group--subgroup": e.subgroup, "v-list-group--open": l.value }, e.class], style: e.style }, { default: () => [t.activator && d(Ge, { defaults: m.value }, { default: () => [d(Pr, null, { default: () => [t.activator({ props: v.value, isOpen: l.value })] })] }), d(bt, { transition: { component: Jo }, disabled: !s.value }, { default: () => {
    var g;
    return [Ue(d("div", { class: "v-list-group__items", role: "group", "aria-labelledby": c.value }, [(g = t.default) == null ? void 0 : g.call(t)]), [[jt, l.value]])];
  } })] })), {};
} }), Or = xn("v-list-item-subtitle"), Tr = xn("v-list-item-title"), _r = q({ active: { type: Boolean, default: void 0 }, activeClass: String, activeColor: String, appendAvatar: String, appendIcon: be, baseColor: String, disabled: Boolean, lines: String, link: { type: Boolean, default: void 0 }, nav: Boolean, prependAvatar: String, prependIcon: be, ripple: { type: [Boolean, Object], default: !0 }, slim: Boolean, subtitle: [String, Number], title: [String, Number], value: null, onClick: it(), onClickOnce: it(), ...en(), ...ye(), ...ut(), ...zt(), ...nn(), ...ht(), ...rl(), ...et(), ...Ne(), ...Vt({ variant: "text" }) }, "VListItem"), tl = te()({ name: "VListItem", directives: { Ripple: _n }, props: _r(), emits: { click: (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l, emit: a } = n;
  const i = ol(e, t), c = f(() => e.value === void 0 ? i.href.value : e.value), { select: u, isSelected: s, isIndeterminate: o, isGroupActivator: v, root: y, parent: m, openOnSelect: g } = Qi(c, !1), p = Ki(), C = f(() => {
    var V;
    return e.active !== !1 && (e.active || ((V = i.isActive) == null ? void 0 : V.value) || s.value);
  }), h = f(() => e.link !== !1 && i.isLink.value), b = f(() => !e.disabled && e.link !== !1 && (e.link || i.isClickable.value || e.value != null && !!p)), x = f(() => e.rounded || e.nav), O = f(() => e.color ?? e.activeColor), H = f(() => ({ color: C.value ? O.value ?? e.baseColor : e.baseColor, variant: e.variant }));
  K(() => {
    var V;
    return (V = i.isActive) == null ? void 0 : V.value;
  }, (V) => {
    V && m.value != null && y.open(m.value, !0), V && g(V);
  }, { immediate: !0 });
  const { themeClasses: $ } = Xe(e), { borderClasses: _ } = tn(e), { colorClasses: W, colorStyles: T, variantClasses: I } = An(H), { densityClasses: P } = Ct(e), { dimensionStyles: S } = Dt(e), { elevationClasses: w } = ln(e), { roundedClasses: A } = pt(x), M = f(() => e.lines ? `v-list-item--${e.lines}-line` : void 0), N = f(() => ({ isActive: C.value, select: u, isSelected: s.value, isIndeterminate: o.value }));
  function k(V) {
    var F;
    a("click", V), !v && b.value && ((F = i.navigate) == null || F.call(i, V), e.value != null && u(!s.value, V));
  }
  function B(V) {
    V.key !== "Enter" && V.key !== " " || (V.preventDefault(), k(V));
  }
  return se(() => {
    const V = h.value ? "a" : e.tag, F = l.title || e.title != null, G = l.subtitle || e.subtitle != null, L = !(!e.appendAvatar && !e.appendIcon), z = !(!L && !l.append), Q = !(!e.prependAvatar && !e.prependIcon), E = !(!Q && !l.prepend);
    var U, R;
    return p == null || p.updateHasPrepend(E), e.activeColor && (U = "active-color", R = ["color", "base-color"], R = Array.isArray(R) ? R.slice(0, -1).map((j) => `'${j}'`).join(", ") + ` or '${R.at(-1)}'` : `'${R}'`, ll(`[Vuetify UPGRADE] '${U}' is deprecated, use ${R} instead.`)), Ue(d(V, { class: ["v-list-item", { "v-list-item--active": C.value, "v-list-item--disabled": e.disabled, "v-list-item--link": b.value, "v-list-item--nav": e.nav, "v-list-item--prepend": !E && (p == null ? void 0 : p.hasPrepend.value), "v-list-item--slim": e.slim, [`${e.activeClass}`]: e.activeClass && C.value }, $.value, _.value, W.value, P.value, w.value, M.value, A.value, I.value, e.class], style: [T.value, S.value, e.style], href: i.href.value, tabindex: b.value ? p ? -2 : 0 : void 0, onClick: k, onKeydown: b.value && !h.value && B }, { default: () => {
      var j;
      return [Pn(b.value || C.value, "v-list-item"), E && d("div", { key: "prepend", class: "v-list-item__prepend" }, [l.prepend ? d(Ge, { key: "prepend-defaults", disabled: !Q, defaults: { VAvatar: { density: e.density, image: e.prependAvatar }, VIcon: { density: e.density, icon: e.prependIcon }, VListItemAction: { start: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.prepend) == null ? void 0 : Y.call(l, N.value)];
      } }) : d(we, null, [e.prependAvatar && d(Ut, { key: "prepend-avatar", density: e.density, image: e.prependAvatar }, null), e.prependIcon && d(Ie, { key: "prepend-icon", density: e.density, icon: e.prependIcon }, null)]), d("div", { class: "v-list-item__spacer" }, null)]), d("div", { class: "v-list-item__content", "data-no-activator": "" }, [F && d(Tr, { key: "title" }, { default: () => {
        var Y;
        return [((Y = l.title) == null ? void 0 : Y.call(l, { title: e.title })) ?? e.title];
      } }), G && d(Or, { key: "subtitle" }, { default: () => {
        var Y;
        return [((Y = l.subtitle) == null ? void 0 : Y.call(l, { subtitle: e.subtitle })) ?? e.subtitle];
      } }), (j = l.default) == null ? void 0 : j.call(l, N.value)]), z && d("div", { key: "append", class: "v-list-item__append" }, [l.append ? d(Ge, { key: "append-defaults", disabled: !L, defaults: { VAvatar: { density: e.density, image: e.appendAvatar }, VIcon: { density: e.density, icon: e.appendIcon }, VListItemAction: { end: !0 } } }, { default: () => {
        var Y;
        return [(Y = l.append) == null ? void 0 : Y.call(l, N.value)];
      } }) : d(we, null, [e.appendIcon && d(Ie, { key: "append-icon", density: e.density, icon: e.appendIcon }, null), e.appendAvatar && d(Ut, { key: "append-avatar", density: e.density, image: e.appendAvatar }, null)]), d("div", { class: "v-list-item__spacer" }, null)])];
    } }), [[gt("ripple"), b.value && e.ripple]]);
  }), {};
} }), Er = q({ color: String, inset: Boolean, sticky: Boolean, title: String, ...ye(), ...et() }, "VListSubheader"), $r = te()({ name: "VListSubheader", props: Er(), setup(e, n) {
  let { slots: t } = n;
  const { textColorClasses: l, textColorStyles: a } = mt(ae(e, "color"));
  return se(() => {
    const i = !(!t.default && !e.title);
    return d(e.tag, { class: ["v-list-subheader", { "v-list-subheader--inset": e.inset, "v-list-subheader--sticky": e.sticky }, l.value, e.class], style: [{ textColorStyles: a }, e.style] }, { default: () => {
      var c;
      return [i && d("div", { class: "v-list-subheader__text" }, [((c = t.default) == null ? void 0 : c.call(t)) ?? e.title])];
    } });
  }), {};
} }), zr = q({ color: String, inset: Boolean, length: [Number, String], thickness: [Number, String], vertical: Boolean, ...ye(), ...Ne() }, "VDivider"), Dr = te()({ name: "VDivider", props: zr(), setup(e, n) {
  let { attrs: t } = n;
  const { themeClasses: l } = Xe(e), { textColorClasses: a, textColorStyles: i } = mt(ae(e, "color")), c = f(() => {
    const u = {};
    return e.length && (u[e.vertical ? "maxHeight" : "maxWidth"] = ie(e.length)), e.thickness && (u[e.vertical ? "borderRightWidth" : "borderTopWidth"] = ie(e.thickness)), u;
  });
  return se(() => d("hr", { class: [{ "v-divider": !0, "v-divider--inset": e.inset, "v-divider--vertical": e.vertical }, l.value, a.value, e.class], style: [c.value, i.value, e.style], "aria-orientation": t.role && t.role !== "separator" ? void 0 : e.vertical ? "vertical" : "horizontal", role: `${t.role || "separator"}` }, null)), {};
} }), Lr = q({ items: Array, returnObject: Boolean }, "VListChildren"), eo = te()({ name: "VListChildren", props: Lr(), setup(e, n) {
  let { slots: t } = n;
  return Xi(), () => {
    var l, a;
    return ((l = t.default) == null ? void 0 : l.call(t)) ?? ((a = e.items) == null ? void 0 : a.map((i) => {
      var m, g;
      let { children: c, props: u, type: s, raw: o } = i;
      if (s === "divider")
        return ((m = t.divider) == null ? void 0 : m.call(t, { props: u })) ?? d(Dr, u, null);
      if (s === "subheader")
        return ((g = t.subheader) == null ? void 0 : g.call(t, { props: u })) ?? d($r, u, null);
      const v = { subtitle: t.subtitle ? (p) => {
        var C;
        return (C = t.subtitle) == null ? void 0 : C.call(t, { ...p, item: o });
      } : void 0, prepend: t.prepend ? (p) => {
        var C;
        return (C = t.prepend) == null ? void 0 : C.call(t, { ...p, item: o });
      } : void 0, append: t.append ? (p) => {
        var C;
        return (C = t.append) == null ? void 0 : C.call(t, { ...p, item: o });
      } : void 0, title: t.title ? (p) => {
        var C;
        return (C = t.title) == null ? void 0 : C.call(t, { ...p, item: o });
      } : void 0 }, y = Ma.filterProps(u);
      return c ? d(Ma, Z({ value: u == null ? void 0 : u.value }, y), { activator: (p) => {
        let { props: C } = p;
        const h = { ...u, ...C, value: e.returnObject ? o : u.value };
        return t.header ? t.header({ props: h }) : d(tl, h, v);
      }, default: () => d(eo, { items: c }, t) }) : t.item ? t.item({ props: u }) : d(tl, Z(u, { value: e.returnObject ? o : u.value }), v);
    }));
  };
} }), to = q({ items: { type: Array, default: () => [] }, itemTitle: { type: [String, Array, Function], default: "title" }, itemValue: { type: [String, Array, Function], default: "value" }, itemChildren: { type: [Boolean, String, Array, Function], default: "children" }, itemProps: { type: [Boolean, String, Array, Function], default: "props" }, returnObject: Boolean, valueComparator: { type: Function, default: Zt } }, "list-items");
function Ol(e, n) {
  const t = ct(n, e.itemTitle, n), l = ct(n, e.itemValue, t), a = ct(n, e.itemChildren), i = { title: t, value: l, ...e.itemProps === !0 ? typeof n != "object" || n == null || Array.isArray(n) ? void 0 : "children" in n ? $t(n, ["children"]) : n : ct(n, e.itemProps) };
  return { title: String(i.title ?? ""), value: i.value, props: i, children: Array.isArray(a) ? no(e, a) : void 0, raw: n };
}
function no(e, n) {
  const t = [];
  for (const l of n)
    t.push(Ol(e, l));
  return t;
}
function Rr(e, n) {
  const t = ct(n, e.itemType, "item"), l = function(u) {
    return typeof u == "string" || typeof u == "number" || typeof u == "boolean";
  }(n) ? n : ct(n, e.itemTitle), a = ct(n, e.itemValue, void 0), i = ct(n, e.itemChildren), c = { title: l, value: a, ...e.itemProps === !0 ? $t(n, ["children"]) : ct(n, e.itemProps) };
  return { type: t, title: c.title, value: c.value, props: c, children: t === "item" && i ? lo(e, i) : void 0, raw: n };
}
function lo(e, n) {
  const t = [];
  for (const l of n)
    t.push(Rr(e, l));
  return t;
}
const Mr = q({ baseColor: String, activeColor: String, activeClass: String, bgColor: String, disabled: Boolean, lines: { type: [Boolean, String], default: "one" }, slim: Boolean, nav: Boolean, ...wr({ selectStrategy: "single-leaf", openStrategy: "list" }), ...en(), ...ye(), ...ut(), ...zt(), ...nn(), itemType: { type: String, default: "type" }, ...to(), ...ht(), ...et(), ...Ne(), ...Vt({ variant: "text" }) }, "VList"), Wr = te()({ name: "VList", props: Mr(), emits: { "update:selected": (e) => !0, "update:opened": (e) => !0, "click:open": (e) => !0, "click:select": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { items: l } = function(I) {
    return { items: f(() => lo(I, I.items)) };
  }(e), { themeClasses: a } = Xe(e), { backgroundColorClasses: i, backgroundColorStyles: c } = Ht(ae(e, "bgColor")), { borderClasses: u } = tn(e), { densityClasses: s } = Ct(e), { dimensionStyles: o } = Dt(e), { elevationClasses: v } = ln(e), { roundedClasses: y } = pt(e), { open: m, select: g } = Fr(e), p = f(() => e.lines ? `v-list--${e.lines}-line` : void 0), C = ae(e, "activeColor"), h = ae(e, "baseColor"), b = ae(e, "color");
  Xi(), Qt({ VListGroup: { activeColor: C, baseColor: h, color: b }, VListItem: { activeClass: ae(e, "activeClass"), activeColor: C, baseColor: h, color: b, density: ae(e, "density"), disabled: ae(e, "disabled"), lines: ae(e, "lines"), nav: ae(e, "nav"), slim: ae(e, "slim"), variant: ae(e, "variant") } });
  const x = de(!1), O = D();
  function H(I) {
    x.value = !0;
  }
  function $(I) {
    x.value = !1;
  }
  function _(I) {
    var P;
    x.value || I.relatedTarget && ((P = O.value) != null && P.contains(I.relatedTarget)) || T();
  }
  function W(I) {
    if (O.value) {
      if (I.key === "ArrowDown")
        T("next");
      else if (I.key === "ArrowUp")
        T("prev");
      else if (I.key === "Home")
        T("first");
      else {
        if (I.key !== "End")
          return;
        T("last");
      }
      I.preventDefault();
    }
  }
  function T(I) {
    if (O.value)
      return qn(O.value, I);
  }
  return se(() => d(e.tag, { ref: O, class: ["v-list", { "v-list--disabled": e.disabled, "v-list--nav": e.nav }, a.value, i.value, u.value, s.value, v.value, p.value, y.value, e.class], style: [c.value, o.value, e.style], tabindex: e.disabled || x.value ? -1 : 0, role: "listbox", "aria-activedescendant": void 0, onFocusin: H, onFocusout: $, onFocus: _, onKeydown: W }, { default: () => [d(eo, { items: l.value, returnObject: e.returnObject }, t)] })), { open: m, select: g, focus: T };
} });
function pl(e, n) {
  return { x: e.x + n.x, y: e.y + n.y };
}
function Wa(e, n) {
  if (e.side === "top" || e.side === "bottom") {
    const { side: t, align: l } = e;
    return pl({ x: l === "left" ? 0 : l === "center" ? n.width / 2 : l === "right" ? n.width : l, y: t === "top" ? 0 : t === "bottom" ? n.height : t }, n);
  }
  if (e.side === "left" || e.side === "right") {
    const { side: t, align: l } = e;
    return pl({ x: t === "left" ? 0 : t === "right" ? n.width : t, y: l === "top" ? 0 : l === "center" ? n.height / 2 : l === "bottom" ? n.height : l }, n);
  }
  return pl({ x: n.width / 2, y: n.height / 2 }, n);
}
const ao = { static: function() {
}, connected: function(e, n, t) {
  (Array.isArray(e.target.value) || function(g) {
    for (; g; ) {
      if (window.getComputedStyle(g).position === "fixed")
        return !0;
      g = g.offsetParent;
    }
    return !1;
  }(e.target.value)) && Object.assign(t.value, { position: "fixed", top: 0, [e.isRtl.value ? "right" : "left"]: 0 });
  const { preferredAnchor: l, preferredOrigin: a } = Nl(() => {
    const g = kl(n.location, e.isRtl.value), p = n.origin === "overlap" ? g : n.origin === "auto" ? ml(g) : kl(n.origin, e.isRtl.value);
    return g.side === p.side && g.align === yl(p).align ? { preferredAnchor: fa(g), preferredOrigin: fa(p) } : { preferredAnchor: g, preferredOrigin: p };
  }), [i, c, u, s] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((g) => f(() => {
    const p = parseFloat(n[g]);
    return isNaN(p) ? 1 / 0 : p;
  })), o = f(() => {
    if (Array.isArray(n.offset))
      return n.offset;
    if (typeof n.offset == "string") {
      const g = n.offset.split(" ").map(parseFloat);
      return g.length < 2 && g.push(0), g;
    }
    return typeof n.offset == "number" ? [n.offset, 0] : [0, 0];
  });
  let v = !1;
  const y = new ResizeObserver(() => {
    v && m();
  });
  function m() {
    if (v = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => v = !0);
    }), !e.target.value || !e.contentEl.value)
      return;
    const g = di(e.target.value), p = function(I, P) {
      P ? I.style.removeProperty("left") : I.style.removeProperty("right");
      const S = Gl(I);
      return P ? S.x += parseFloat(I.style.right || 0) : S.x -= parseFloat(I.style.left || 0), S.y -= parseFloat(I.style.top || 0), S;
    }(e.contentEl.value, e.isRtl.value), C = Jn(e.contentEl.value);
    C.length || (C.push(document.documentElement), e.contentEl.value.style.top && e.contentEl.value.style.left || (p.x -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x") || 0), p.y -= parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y") || 0)));
    const h = C.reduce((I, P) => {
      const S = P.getBoundingClientRect(), w = new xt({ x: P === document.documentElement ? 0 : S.x, y: P === document.documentElement ? 0 : S.y, width: P.clientWidth, height: P.clientHeight });
      return I ? new xt({ x: Math.max(I.left, w.left), y: Math.max(I.top, w.top), width: Math.min(I.right, w.right) - Math.max(I.left, w.left), height: Math.min(I.bottom, w.bottom) - Math.max(I.top, w.top) }) : w;
    }, void 0);
    h.x += 12, h.y += 12, h.width -= 24, h.height -= 24;
    let b = { anchor: l.value, origin: a.value };
    function x(I) {
      const P = new xt(p), S = Wa(I.anchor, g), w = Wa(I.origin, P);
      let { x: A, y: M } = (k = w, { x: (N = S).x - k.x, y: N.y - k.y });
      var N, k;
      switch (I.anchor.side) {
        case "top":
          M -= o.value[0];
          break;
        case "bottom":
          M += o.value[0];
          break;
        case "left":
          A -= o.value[0];
          break;
        case "right":
          A += o.value[0];
      }
      switch (I.anchor.align) {
        case "top":
          M -= o.value[1];
          break;
        case "bottom":
          M += o.value[1];
          break;
        case "left":
          A -= o.value[1];
          break;
        case "right":
          A += o.value[1];
      }
      return P.x += A, P.y += M, P.width = Math.min(P.width, u.value), P.height = Math.min(P.height, s.value), { overflows: ya(P, h), x: A, y: M };
    }
    let O = 0, H = 0;
    const $ = { x: 0, y: 0 }, _ = { x: !1, y: !1 };
    let W = -1;
    for (; ; ) {
      if (W++ > 10) {
        ll("Vuetify error: Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const { x: I, y: P, overflows: S } = x(b);
      O += I, H += P, p.x += I, p.y += P;
      {
        const w = ma(b.anchor), A = S.x.before || S.x.after, M = S.y.before || S.y.after;
        let N = !1;
        if (["x", "y"].forEach((k) => {
          if (k === "x" && A && !_.x || k === "y" && M && !_.y) {
            const B = { anchor: { ...b.anchor }, origin: { ...b.origin } }, V = k === "x" ? w === "y" ? yl : ml : w === "y" ? ml : yl;
            B.anchor = V(B.anchor), B.origin = V(B.origin);
            const { overflows: F } = x(B);
            (F[k].before <= S[k].before && F[k].after <= S[k].after || F[k].before + F[k].after < (S[k].before + S[k].after) / 2) && (b = B, N = _[k] = !0);
          }
        }), N)
          continue;
      }
      S.x.before && (O += S.x.before, p.x += S.x.before), S.x.after && (O -= S.x.after, p.x -= S.x.after), S.y.before && (H += S.y.before, p.y += S.y.before), S.y.after && (H -= S.y.after, p.y -= S.y.after);
      {
        const w = ya(p, h);
        $.x = h.width - w.x.before - w.x.after, $.y = h.height - w.y.before - w.y.after, O += w.x.before, p.x += w.x.before, H += w.y.before, p.y += w.y.before;
      }
      break;
    }
    const T = ma(b.anchor);
    return Object.assign(t.value, { "--v-overlay-anchor-origin": `${b.anchor.side} ${b.anchor.align}`, transformOrigin: `${b.origin.side} ${b.origin.align}`, top: ie(Cl(H)), left: e.isRtl.value ? void 0 : ie(Cl(O)), right: e.isRtl.value ? ie(Cl(-O)) : void 0, minWidth: ie(T === "y" ? Math.min(i.value, g.width) : i.value), maxWidth: ie(Na(Gt($.x, i.value === 1 / 0 ? 0 : i.value, u.value))), maxHeight: ie(Na(Gt($.y, c.value === 1 / 0 ? 0 : c.value, s.value))) }), { available: $, contentBox: p };
  }
  return K([e.target, e.contentEl], (g, p) => {
    let [C, h] = g, [b, x] = p;
    b && !Array.isArray(b) && y.unobserve(b), C && !Array.isArray(C) && y.observe(C), x && y.unobserve(x), h && y.observe(h);
  }, { immediate: !0 }), qe(() => {
    y.disconnect();
  }), K(() => [l.value, a.value, n.offset, n.minWidth, n.minHeight, n.maxWidth, n.maxHeight], () => m()), Me(() => {
    const g = m();
    if (!g)
      return;
    const { available: p, contentBox: C } = g;
    C.height > p.y && requestAnimationFrame(() => {
      m(), requestAnimationFrame(() => {
        m();
      });
    });
  }), { updateLocation: m };
} }, Nr = q({ locationStrategy: { type: [String, Function], default: "static", validator: (e) => typeof e == "function" || e in ao }, location: { type: String, default: "bottom" }, origin: { type: String, default: "auto" }, offset: [Number, String, Array] }, "VOverlay-location-strategies");
function Cl(e) {
  return Math.round(e * devicePixelRatio) / devicePixelRatio;
}
function Na(e) {
  return Math.ceil(e * devicePixelRatio) / devicePixelRatio;
}
let Tl = !0;
const nl = [];
let Ga = -1;
function _l() {
  cancelAnimationFrame(Ga), Ga = requestAnimationFrame(() => {
    const e = nl.shift();
    e && e(), nl.length ? _l() : Tl = !0;
  });
}
const Gn = { none: null, close: function(e) {
  Ha(e.targetEl.value ?? e.contentEl.value, function(n) {
    e.isActive.value = !1;
  });
}, block: function(e, n) {
  var u;
  const t = (u = e.root.value) == null ? void 0 : u.offsetParent, l = [.../* @__PURE__ */ new Set([...Jn(e.targetEl.value, n.contained ? t : void 0), ...Jn(e.contentEl.value, n.contained ? t : void 0)])].filter((s) => !s.classList.contains("v-overlay-scroll-blocked")), a = window.innerWidth - document.documentElement.offsetWidth, i = (c = t || document.documentElement, Ul(c) && c);
  var c;
  i && e.root.value.classList.add("v-overlay--scroll-blocked"), l.forEach((s, o) => {
    s.style.setProperty("--v-body-scroll-x", ie(-s.scrollLeft)), s.style.setProperty("--v-body-scroll-y", ie(-s.scrollTop)), s !== document.documentElement && s.style.setProperty("--v-scrollbar-offset", ie(a)), s.classList.add("v-overlay-scroll-blocked");
  }), qe(() => {
    l.forEach((s, o) => {
      const v = parseFloat(s.style.getPropertyValue("--v-body-scroll-x")), y = parseFloat(s.style.getPropertyValue("--v-body-scroll-y"));
      s.style.removeProperty("--v-body-scroll-x"), s.style.removeProperty("--v-body-scroll-y"), s.style.removeProperty("--v-scrollbar-offset"), s.classList.remove("v-overlay-scroll-blocked"), s.scrollLeft = -v, s.scrollTop = -y;
    }), i && e.root.value.classList.remove("v-overlay--scroll-blocked");
  });
}, reposition: function(e, n, t) {
  let l = !1, a = -1, i = -1;
  function c(u) {
    var s;
    s = () => {
      var y, m;
      const o = performance.now();
      (m = (y = e.updateLocation).value) == null || m.call(y, u), l = (performance.now() - o) / (1e3 / 60) > 2;
    }, !Tl || nl.length ? (nl.push(s), _l()) : (Tl = !1, s(), _l());
  }
  i = (typeof requestIdleCallback > "u" ? (u) => u() : requestIdleCallback)(() => {
    t.run(() => {
      Ha(e.targetEl.value ?? e.contentEl.value, (u) => {
        l ? (cancelAnimationFrame(a), a = requestAnimationFrame(() => {
          a = requestAnimationFrame(() => {
            c(u);
          });
        })) : c(u);
      });
    });
  }), qe(() => {
    typeof cancelIdleCallback < "u" && cancelIdleCallback(i), cancelAnimationFrame(a);
  });
} }, Gr = q({ scrollStrategy: { type: [String, Function], default: "block", validator: (e) => typeof e == "function" || e in Gn } }, "VOverlay-scroll-strategies");
function Ha(e, n) {
  const t = [document, ...Jn(e)];
  t.forEach((l) => {
    l.addEventListener("scroll", n, { passive: !0 });
  }), qe(() => {
    t.forEach((l) => {
      l.removeEventListener("scroll", n);
    });
  });
}
const El = Symbol.for("vuetify:v-menu"), Hr = q({ closeDelay: [Number, String], openDelay: [Number, String] }, "delay"), Ur = q({ target: [String, Object], activator: [String, Object], activatorProps: { type: Object, default: () => ({}) }, openOnClick: { type: Boolean, default: void 0 }, openOnHover: Boolean, openOnFocus: { type: Boolean, default: void 0 }, closeOnContentClick: Boolean, ...Hr() }, "VOverlay-activator");
function jr(e, n) {
  let { isActive: t, isTop: l } = n;
  const a = Le("useActivator"), i = D();
  let c = !1, u = !1, s = !0;
  const o = f(() => e.openOnFocus || e.openOnFocus == null && e.openOnHover), v = f(() => e.openOnClick || e.openOnClick == null && !e.openOnHover && !o.value), { runOpenDelay: y, runCloseDelay: m } = function(S, w) {
    const A = {}, M = (N) => () => {
      if (!Ke)
        return Promise.resolve(!0);
      const k = N === "openDelay";
      return A.closeDelay && window.clearTimeout(A.closeDelay), delete A.closeDelay, A.openDelay && window.clearTimeout(A.openDelay), delete A.openDelay, new Promise((B) => {
        const V = parseInt(S[N] ?? 0, 10);
        A[N] = window.setTimeout(() => {
          w == null || w(k), B(k);
        }, V);
      });
    };
    return { runCloseDelay: M("closeDelay"), runOpenDelay: M("openDelay") };
  }(e, (S) => {
    S !== (e.openOnHover && c || o.value && u) || e.openOnHover && t.value && !l.value || (t.value !== S && (s = !0), t.value = S);
  }), g = D(), p = (S) => {
    S.stopPropagation(), i.value = S.currentTarget || S.target, t.value || (g.value = [S.clientX, S.clientY]), t.value = !t.value;
  }, C = (S) => {
    var w;
    (w = S.sourceCapabilities) != null && w.firesTouchEvents || (c = !0, i.value = S.currentTarget || S.target, y());
  }, h = (S) => {
    c = !1, m();
  }, b = (S) => {
    Yn(S.target, ":focus-visible") !== !1 && (u = !0, S.stopPropagation(), i.value = S.currentTarget || S.target, y());
  }, x = (S) => {
    u = !1, S.stopPropagation(), m();
  }, O = f(() => {
    const S = {};
    return v.value && (S.onClick = p), e.openOnHover && (S.onMouseenter = C, S.onMouseleave = h), o.value && (S.onFocus = b, S.onBlur = x), S;
  }), H = f(() => {
    const S = {};
    if (e.openOnHover && (S.onMouseenter = () => {
      c = !0, y();
    }, S.onMouseleave = () => {
      c = !1, m();
    }), o.value && (S.onFocusin = () => {
      u = !0, y();
    }, S.onFocusout = () => {
      u = !1, m();
    }), e.closeOnContentClick) {
      const w = ge(El, null);
      S.onClick = () => {
        t.value = !1, w == null || w.closeParents();
      };
    }
    return S;
  }), $ = f(() => {
    const S = {};
    return e.openOnHover && (S.onMouseenter = () => {
      s && (c = !0, s = !1, y());
    }, S.onMouseleave = () => {
      c = !1, m();
    }), S;
  });
  K(l, (S) => {
    !S || (!e.openOnHover || c || o.value && u) && (!o.value || u || e.openOnHover && c) || (t.value = !1);
  }), K(t, (S) => {
    S || setTimeout(() => {
      g.value = void 0;
    });
  }, { flush: "post" });
  const _ = D();
  ot(() => {
    _.value && Me(() => {
      i.value = Un(_.value);
    });
  });
  const W = D(), T = f(() => e.target === "cursor" && g.value ? g.value : W.value ? Un(W.value) : Ua(e.target, a) || i.value), I = f(() => Array.isArray(T.value) ? void 0 : T.value);
  let P;
  return K(() => !!e.activator, (S) => {
    S && Ke ? (P = Dl(), P.run(() => {
      (function(w, A, M) {
        let { activatorEl: N, activatorEvents: k } = M;
        function B() {
          let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F(), L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.activatorProps;
          G && function(z, Q) {
            Object.keys(Q).forEach((E) => {
              if (Bl(E)) {
                const U = ca(E), R = Dn.get(z);
                if (Q[E] == null)
                  R == null || R.forEach((j) => {
                    const [Y, ee] = j;
                    Y === U && (z.removeEventListener(U, ee), R.delete(j));
                  });
                else if (!R || ![...R].some((j) => j[0] === U && j[1] === Q[E])) {
                  z.addEventListener(U, Q[E]);
                  const j = R || /* @__PURE__ */ new Set();
                  j.add([U, Q[E]]), Dn.has(z) || Dn.set(z, j);
                }
              } else
                Q[E] == null ? z.removeAttribute(E) : z.setAttribute(E, Q[E]);
            });
          }(G, Z(k.value, L));
        }
        function V() {
          let G = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : F(), L = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : w.activatorProps;
          G && function(z, Q) {
            Object.keys(Q).forEach((E) => {
              if (Bl(E)) {
                const U = ca(E), R = Dn.get(z);
                R == null || R.forEach((j) => {
                  const [Y, ee] = j;
                  Y === U && (z.removeEventListener(U, ee), R.delete(j));
                });
              } else
                z.removeAttribute(E);
            });
          }(G, Z(k.value, L));
        }
        function F() {
          const G = Ua(arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : w.activator, A);
          return N.value = (G == null ? void 0 : G.nodeType) === Node.ELEMENT_NODE ? G : void 0, N.value;
        }
        K(() => w.activator, (G, L) => {
          if (L && G !== L) {
            const z = F(L);
            z && V(z);
          }
          G && Me(() => B());
        }, { immediate: !0 }), K(() => w.activatorProps, () => {
          B();
        }), qe(() => {
          V();
        });
      })(e, a, { activatorEl: i, activatorEvents: O });
    })) : P && P.stop();
  }, { flush: "post", immediate: !0 }), qe(() => {
    P == null || P.stop();
  }), { activatorEl: i, activatorRef: _, target: T, targetEl: I, targetRef: W, activatorEvents: O, contentEvents: H, scrimEvents: $ };
}
function Ua(e, n) {
  var l, a;
  if (!e)
    return;
  let t;
  if (e === "parent") {
    let i = (a = (l = n == null ? void 0 : n.proxy) == null ? void 0 : l.$el) == null ? void 0 : a.parentNode;
    for (; i != null && i.hasAttribute("data-no-activator"); )
      i = i.parentNode;
    t = i;
  } else
    t = typeof e == "string" ? document.querySelector(e) : "$el" in e ? e.$el : e;
  return t;
}
const qr = Symbol.for("vuetify:display");
function io() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : st();
  const t = ge(qr);
  if (!t)
    throw new Error("Could not find Vuetify display injection");
  const l = f(() => {
    if (!e.mobileBreakpoint)
      return t.mobile.value;
    const i = typeof e.mobileBreakpoint == "number" ? e.mobileBreakpoint : t.thresholds.value[e.mobileBreakpoint];
    return t.width.value < i;
  }), a = f(() => n ? { [`${n}--mobile`]: l.value } : {});
  return { ...t, displayClasses: a, mobile: l };
}
const Yr = q({ eager: Boolean }, "lazy");
function oo() {
  const e = Le("useScopeId").vnode.scopeId;
  return { scopeId: e ? { [e]: "" } : void 0 };
}
const ja = Symbol.for("vuetify:stack"), yn = lt([]);
function Xr() {
  return !0;
}
function qa(e, n, t) {
  if (!e || ro(e, t) === !1)
    return !1;
  const l = fi(n);
  if (typeof ShadowRoot < "u" && l instanceof ShadowRoot && l.host === e.target)
    return !1;
  const a = (typeof t.value == "object" && t.value.include || (() => []))();
  return a.push(n), !a.some((i) => i == null ? void 0 : i.contains(e.target));
}
function ro(e, n) {
  return (typeof n.value == "object" && n.value.closeConditional || Xr)(e);
}
function Ya(e, n) {
  const t = fi(e);
  n(document), typeof ShadowRoot < "u" && t instanceof ShadowRoot && n(t);
}
const Kr = { mounted(e, n) {
  const t = (a) => function(i, c, u) {
    const s = typeof u.value == "function" ? u.value : u.value.handler;
    c._clickOutside.lastMousedownWasOutside && qa(i, c, u) && setTimeout(() => {
      ro(i, u) && s && s(i);
    }, 0);
  }(a, e, n), l = (a) => {
    e._clickOutside.lastMousedownWasOutside = qa(a, e, n);
  };
  Ya(e, (a) => {
    a.addEventListener("click", t, !0), a.addEventListener("mousedown", l, !0);
  }), e._clickOutside || (e._clickOutside = { lastMousedownWasOutside: !1 }), e._clickOutside[n.instance.$.uid] = { onClick: t, onMousedown: l };
}, unmounted(e, n) {
  e._clickOutside && (Ya(e, (t) => {
    var i;
    if (!t || !((i = e._clickOutside) != null && i[n.instance.$.uid]))
      return;
    const { onClick: l, onMousedown: a } = e._clickOutside[n.instance.$.uid];
    t.removeEventListener("click", l, !0), t.removeEventListener("mousedown", a, !0);
  }), delete e._clickOutside[n.instance.$.uid]);
} };
function Jr(e) {
  const { modelValue: n, color: t, ...l } = e;
  return d(Ft, { name: "fade-transition", appear: !0 }, { default: () => [e.modelValue && d("div", Z({ class: ["v-overlay__scrim", e.color.backgroundColorClasses.value], style: e.color.backgroundColorStyles.value }, l), null)] });
}
const so = q({ absolute: Boolean, attach: [Boolean, String, Object], closeOnBack: { type: Boolean, default: !0 }, contained: Boolean, contentClass: null, contentProps: null, disabled: Boolean, noClickAnimation: Boolean, modelValue: Boolean, persistent: Boolean, scrim: { type: [Boolean, String], default: !0 }, zIndex: { type: [Number, String], default: 2e3 }, ...Ur(), ...ye(), ...zt(), ...Yr(), ...Nr(), ...Gr(), ...Ne(), ...Fn() }, "VOverlay"), Xa = te()({ name: "VOverlay", directives: { ClickOutside: Kr }, inheritAttrs: !1, props: { _disableGlobalStack: Boolean, ...so() }, emits: { "click:outside": (e) => !0, "update:modelValue": (e) => !0, afterLeave: () => !0 }, setup(e, n) {
  var z, Q;
  let { slots: t, attrs: l, emit: a } = n;
  const i = _e(e, "modelValue"), c = f({ get: () => i.value, set: (E) => {
    E && e.disabled || (i.value = E);
  } }), { teleportTarget: u } = function(E) {
    return { teleportTarget: f(() => {
      const U = E.value;
      if (U === !0 || !Ke)
        return;
      const R = U === !1 ? document.body : typeof U == "string" ? document.querySelector(U) : U;
      if (R == null)
        return void ll(`Unable to locate target ${U}`);
      let j = R.querySelector(":scope > .v-overlay-container");
      return j || (j = document.createElement("div"), j.className = "v-overlay-container", R.appendChild(j)), j;
    }) };
  }(f(() => e.attach || e.contained)), { themeClasses: s } = Xe(e), { rtlClasses: o, isRtl: v } = wn(), { hasContent: y, onAfterLeave: m } = function(E, U) {
    const R = de(!1), j = f(() => R.value || E.eager || U.value);
    return K(U, () => R.value = !0), { isBooted: R, hasContent: j, onAfterLeave: function() {
      E.eager || (R.value = !1);
    } };
  }(e, c), g = Ht(f(() => typeof e.scrim == "string" ? e.scrim : null)), { globalTop: p, localTop: C, stackStyles: h } = function(E, U, R) {
    const j = Le("useStack"), Y = !R, ee = ge(ja, void 0), ve = lt({ activeChildren: /* @__PURE__ */ new Set() });
    tt(ja, ve);
    const Ce = de(+U.value);
    wt(E, () => {
      var ke;
      const Fe = (ke = yn.at(-1)) == null ? void 0 : ke[1];
      Ce.value = Fe ? Fe + 10 : +U.value, Y && yn.push([j.uid, Ce.value]), ee == null || ee.activeChildren.add(j.uid), qe(() => {
        if (Y) {
          const Be = St(yn).findIndex((Oe) => Oe[0] === j.uid);
          yn.splice(Be, 1);
        }
        ee == null || ee.activeChildren.delete(j.uid);
      });
    });
    const he = de(!0);
    Y && ot(() => {
      var ke;
      const Fe = ((ke = yn.at(-1)) == null ? void 0 : ke[0]) === j.uid;
      setTimeout(() => he.value = Fe);
    });
    const Re = f(() => !ve.activeChildren.size);
    return { globalTop: zl(he), localTop: Re, stackStyles: f(() => ({ zIndex: Ce.value })) };
  }(c, ae(e, "zIndex"), e._disableGlobalStack), { activatorEl: b, activatorRef: x, target: O, targetEl: H, targetRef: $, activatorEvents: _, contentEvents: W, scrimEvents: T } = jr(e, { isActive: c, isTop: C }), { dimensionStyles: I } = Dt(e), P = function() {
    if (!Ke)
      return de(!1);
    const { ssr: E } = io();
    if (E) {
      const U = de(!1);
      return qt(() => {
        U.value = !0;
      }), U;
    }
    return de(!0);
  }(), { scopeId: S } = oo();
  K(() => e.disabled, (E) => {
    E && (c.value = !1);
  });
  const w = D(), A = D(), { contentStyles: M, updateLocation: N } = function(E, U) {
    const R = D({}), j = D();
    function Y(ee) {
      var ve;
      (ve = j.value) == null || ve.call(j, ee);
    }
    return Ke && wt(() => !(!U.isActive.value || !E.locationStrategy), (ee) => {
      var ve, Ce;
      K(() => E.locationStrategy, ee), qe(() => {
        window.removeEventListener("resize", Y), j.value = void 0;
      }), window.addEventListener("resize", Y, { passive: !0 }), typeof E.locationStrategy == "function" ? j.value = (ve = E.locationStrategy(U, E, R)) == null ? void 0 : ve.updateLocation : j.value = (Ce = ao[E.locationStrategy](U, E, R)) == null ? void 0 : Ce.updateLocation;
    }), { contentStyles: R, updateLocation: j };
  }(e, { isRtl: v, contentEl: A, target: O, isActive: c });
  function k(E) {
    a("click:outside", E), e.persistent ? L() : c.value = !1;
  }
  function B() {
    return c.value && p.value;
  }
  function V(E) {
    var U, R;
    E.key === "Escape" && p.value && (e.persistent ? L() : (c.value = !1, (U = A.value) != null && U.contains(document.activeElement) && ((R = b.value) == null || R.focus())));
  }
  (function(E, U) {
    if (!Ke)
      return;
    let R;
    ot(async () => {
      R == null || R.stop(), U.isActive.value && E.scrollStrategy && (R = Dl(), await Me(), R.active && R.run(() => {
        var j;
        typeof E.scrollStrategy == "function" ? E.scrollStrategy(U, E, R) : (j = Gn[E.scrollStrategy]) == null || j.call(Gn, U, E, R);
      }));
    }), qe(() => {
      R == null || R.stop();
    });
  })(e, { root: w, contentEl: A, targetEl: H, isActive: c, updateLocation: N }), Ke && K(c, (E) => {
    E ? window.addEventListener("keydown", V) : window.removeEventListener("keydown", V);
  }, { immediate: !0 });
  const F = (Q = (z = Le("useRouter")) == null ? void 0 : z.proxy) == null ? void 0 : Q.$router;
  wt(() => e.closeOnBack, () => {
    (function(E, U) {
      let R, j, Y = !1;
      function ee(ve) {
        var Ce;
        (Ce = ve.state) != null && Ce.replaced || (Y = !0, setTimeout(() => Y = !1));
      }
      Ke && (Me(() => {
        window.addEventListener("popstate", ee), R = E == null ? void 0 : E.beforeEach((ve, Ce, he) => {
          hl ? Y ? U(he) : he() : setTimeout(() => Y ? U(he) : he()), hl = !0;
        }), j = E == null ? void 0 : E.afterEach(() => {
          hl = !1;
        });
      }), qe(() => {
        window.removeEventListener("popstate", ee), R == null || R(), j == null || j();
      }));
    })(F, (E) => {
      p.value && c.value ? (E(!1), e.persistent ? L() : c.value = !1) : E();
    });
  });
  const G = D();
  function L() {
    e.noClickAnimation || A.value && Nt(A.value, [{ transformOrigin: "center" }, { transform: "scale(1.03)" }, { transformOrigin: "center" }], { duration: 150, easing: Kn });
  }
  return K(() => c.value && (e.absolute || e.contained) && u.value == null, (E) => {
    if (E) {
      const U = yi(w.value);
      U && U !== document.scrollingElement && (G.value = U.scrollTop);
    }
  }), se(() => {
    var E;
    return d(we, null, [(E = t.activator) == null ? void 0 : E.call(t, { isActive: c.value, props: Z({ ref: x, targetRef: $ }, _.value, e.activatorProps) }), P.value && y.value && d(Ot, { disabled: !u.value, to: u.value }, { default: () => [d("div", Z({ class: ["v-overlay", { "v-overlay--absolute": e.absolute || e.contained, "v-overlay--active": c.value, "v-overlay--contained": e.contained }, s.value, o.value, e.class], style: [h.value, { top: ie(G.value) }, e.style], ref: w }, S, l), [d(Jr, Z({ color: g, modelValue: c.value && !!e.scrim }, T.value), null), d(bt, { appear: !0, persisted: !0, transition: e.transition, target: O.value, onAfterLeave: () => {
      m(), a("afterLeave");
    } }, { default: () => {
      var U;
      return [Ue(d("div", Z({ ref: A, class: ["v-overlay__content", e.contentClass], style: [I.value, M.value] }, W.value, e.contentProps), [(U = t.default) == null ? void 0 : U.call(t, { isActive: c })]), [[jt, c.value], [gt("click-outside"), { handler: k, closeConditional: B, include: () => [b.value] }]])];
    } })])] })]);
  }), { activatorEl: b, target: O, animateClick: L, contentEl: A, globalTop: p, localTop: C, updateLocation: N };
} }), bl = Symbol("Forwarded refs");
function Sl(e, n) {
  let t = e;
  for (; t; ) {
    const l = Reflect.getOwnPropertyDescriptor(t, n);
    if (l)
      return l;
    t = Object.getPrototypeOf(t);
  }
}
function sl(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
    t[l - 1] = arguments[l];
  return e[bl] = t, new Proxy(e, { get(a, i) {
    if (Reflect.has(a, i))
      return Reflect.get(a, i);
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const c of t)
        if (c.value && Reflect.has(c.value, i)) {
          const u = Reflect.get(c.value, i);
          return typeof u == "function" ? u.bind(c.value) : u;
        }
    }
  }, has(a, i) {
    if (Reflect.has(a, i))
      return !0;
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const c of t)
      if (c.value && Reflect.has(c.value, i))
        return !0;
    return !1;
  }, set(a, i, c) {
    if (Reflect.has(a, i))
      return Reflect.set(a, i, c);
    if (typeof i == "symbol" || i.startsWith("$") || i.startsWith("__"))
      return !1;
    for (const u of t)
      if (u.value && Reflect.has(u.value, i))
        return Reflect.set(u.value, i, c);
    return !1;
  }, getOwnPropertyDescriptor(a, i) {
    var u;
    const c = Reflect.getOwnPropertyDescriptor(a, i);
    if (c)
      return c;
    if (typeof i != "symbol" && !i.startsWith("$") && !i.startsWith("__")) {
      for (const s of t) {
        if (!s.value)
          continue;
        const o = Sl(s.value, i) ?? ("_" in s.value ? Sl((u = s.value._) == null ? void 0 : u.setupState, i) : void 0);
        if (o)
          return o;
      }
      for (const s of t) {
        const o = s.value && s.value[bl];
        if (!o)
          continue;
        const v = o.slice();
        for (; v.length; ) {
          const y = v.shift(), m = Sl(y.value, i);
          if (m)
            return m;
          const g = y.value && y.value[bl];
          g && v.push(...g);
        }
      }
    }
  } });
}
const Zr = q({ id: String, ...$t(so({ closeDelay: 250, closeOnContentClick: !0, locationStrategy: "connected", openDelay: 300, scrim: !1, scrollStrategy: "reposition", transition: { component: Ci } }), ["absolute"]) }, "VMenu"), Qr = te()({ name: "VMenu", props: Zr(), emits: { "update:modelValue": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const l = _e(e, "modelValue"), { scopeId: a } = oo(), i = nt(), c = f(() => e.id || `v-menu-${i}`), u = D(), s = ge(El, null), o = de(0);
  async function v(C) {
    var x, O, H;
    const h = C.relatedTarget, b = C.target;
    await Me(), l.value && h !== b && ((x = u.value) != null && x.contentEl) && ((O = u.value) != null && O.globalTop) && ![document, u.value.contentEl].includes(b) && !u.value.contentEl.contains(b) && ((H = Vl(u.value.contentEl)[0]) == null || H.focus());
  }
  function y() {
    s == null || s.closeParents();
  }
  function m(C) {
    var h, b, x;
    !e.disabled && C.key === "Tab" && (si(Vl((h = u.value) == null ? void 0 : h.contentEl, !1), C.shiftKey ? "prev" : "next", (O) => O.tabIndex >= 0) || (l.value = !1, (x = (b = u.value) == null ? void 0 : b.activatorEl) == null || x.focus()));
  }
  function g(C) {
    var b;
    if (e.disabled)
      return;
    const h = (b = u.value) == null ? void 0 : b.contentEl;
    h && l.value ? C.key === "ArrowDown" ? (C.preventDefault(), qn(h, "next")) : C.key === "ArrowUp" && (C.preventDefault(), qn(h, "prev")) : ["ArrowDown", "ArrowUp"].includes(C.key) && (l.value = !0, C.preventDefault(), setTimeout(() => setTimeout(() => g(C))));
  }
  tt(El, { register() {
    ++o.value;
  }, unregister() {
    --o.value;
  }, closeParents() {
    setTimeout(() => {
      o.value || (l.value = !1, s == null || s.closeParents());
    }, 40);
  } }), K(l, (C) => {
    C ? (s == null || s.register(), document.addEventListener("focusin", v, { once: !0 })) : (s == null || s.unregister(), document.removeEventListener("focusin", v));
  });
  const p = f(() => Z({ "aria-haspopup": "menu", "aria-expanded": String(l.value), "aria-owns": c.value, onKeydown: g }, e.activatorProps));
  return se(() => {
    const C = Xa.filterProps(e);
    return d(Xa, Z({ ref: u, class: ["v-menu", e.class], style: e.style }, C, { modelValue: l.value, "onUpdate:modelValue": (h) => l.value = h, absolute: !0, activatorProps: p.value, "onClick:outside": y, onKeydown: m }, a), { activator: t.activator, default: function() {
      for (var h = arguments.length, b = new Array(h), x = 0; x < h; x++)
        b[x] = arguments[x];
      return d(Ge, { root: "VMenu" }, { default: () => {
        var O;
        return [(O = t.default) == null ? void 0 : O.call(t, ...b)];
      } });
    } });
  }), sl({ id: c, ΨopenChildren: o }, u);
} }), es = q({ active: Boolean, max: [Number, String], value: { type: [Number, String], default: 0 }, ...ye(), ...Fn({ transition: { component: bi } }) }, "VCounter"), uo = te()({ name: "VCounter", functional: !0, props: es(), setup(e, n) {
  let { slots: t } = n;
  const l = f(() => e.max ? `${e.value} / ${e.max}` : String(e.value));
  return se(() => d(bt, { transition: e.transition }, { default: () => [Ue(d("div", { class: ["v-counter", e.class], style: e.style }, [t.default ? t.default({ counter: l.value, max: e.max, value: e.value }) : l.value]), [[jt, e.active]])] })), {};
} }), ts = q({ floating: Boolean, ...ye() }, "VFieldLabel"), Mn = te()({ name: "VFieldLabel", props: ts(), setup(e, n) {
  let { slots: t } = n;
  return se(() => d(Wi, { class: ["v-field-label", { "v-field-label--floating": e.floating }, e.class], style: e.style, "aria-hidden": e.floating || void 0 }, t)), {};
} }), ns = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"], ta = q({ appendInnerIcon: be, bgColor: String, clearable: Boolean, clearIcon: { type: be, default: "$clear" }, active: Boolean, centerAffix: { type: Boolean, default: void 0 }, color: String, baseColor: String, dirty: Boolean, disabled: { type: Boolean, default: null }, error: Boolean, flat: Boolean, label: String, persistentClear: Boolean, prependInnerIcon: be, reverse: Boolean, singleLine: Boolean, variant: { type: String, default: "filled", validator: (e) => ns.includes(e) }, "onClick:clear": it(), "onClick:appendInner": it(), "onClick:prependInner": it(), ...ye(), ...Zl(), ...ht(), ...Ne() }, "VField"), na = te()({ name: "VField", inheritAttrs: !1, props: { id: String, ...ji(), ...ta() }, emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { themeClasses: i } = Xe(e), { loaderClasses: c } = il(e), { focusClasses: u, isFocused: s, focus: o, blur: v } = En(e), { InputIcon: y } = Ui(e), { roundedClasses: m } = pt(e), { rtlClasses: g } = wn(), p = f(() => e.dirty || e.active), C = f(() => !(e.singleLine || !e.label && !a.label)), h = nt(), b = f(() => e.id || `input-${h}`), x = f(() => `${b.value}-messages`), O = D(), H = D(), $ = D(), _ = f(() => ["plain", "underlined"].includes(e.variant)), { backgroundColorClasses: W, backgroundColorStyles: T } = Ht(ae(e, "bgColor")), { textColorClasses: I, textColorStyles: P } = mt(f(() => e.error || e.disabled ? void 0 : p.value && s.value ? e.color : e.baseColor));
  K(p, (A) => {
    if (C.value) {
      const M = O.value.$el, N = H.value.$el;
      requestAnimationFrame(() => {
        const k = Gl(M), B = N.getBoundingClientRect(), V = B.x - k.x, F = B.y - k.y - (k.height / 2 - B.height / 2), G = B.width / 0.75, L = Math.abs(G - k.width) > 1 ? { maxWidth: ie(G) } : void 0, z = getComputedStyle(M), Q = getComputedStyle(N), E = 1e3 * parseFloat(z.transitionDuration) || 150, U = parseFloat(Q.getPropertyValue("--v-field-label-scale")), R = Q.getPropertyValue("color");
        M.style.visibility = "visible", N.style.visibility = "hidden", Nt(M, { transform: `translate(${V}px, ${F}px) scale(${U})`, color: R, ...L }, { duration: E, easing: Kn, direction: A ? "normal" : "reverse" }).finished.then(() => {
          M.style.removeProperty("visibility"), N.style.removeProperty("visibility");
        });
      });
    }
  }, { flush: "post" });
  const S = f(() => ({ isActive: p, isFocused: s, controlRef: $, blur: v, focus: o }));
  function w(A) {
    A.target !== document.activeElement && A.preventDefault();
  }
  return se(() => {
    var V, F, G;
    const A = e.variant === "outlined", M = a["prepend-inner"] || e.prependInnerIcon, N = !(!e.clearable && !a.clear), k = !!(a["append-inner"] || e.appendInnerIcon || N), B = () => a.label ? a.label({ ...S.value, label: e.label, props: { for: b.value } }) : e.label;
    return d("div", Z({ class: ["v-field", { "v-field--active": p.value, "v-field--appended": k, "v-field--center-affix": e.centerAffix ?? !_.value, "v-field--disabled": e.disabled, "v-field--dirty": e.dirty, "v-field--error": e.error, "v-field--flat": e.flat, "v-field--has-background": !!e.bgColor, "v-field--persistent-clear": e.persistentClear, "v-field--prepended": M, "v-field--reverse": e.reverse, "v-field--single-line": e.singleLine, "v-field--no-label": !B(), [`v-field--variant-${e.variant}`]: !0 }, i.value, W.value, u.value, c.value, m.value, g.value, e.class], style: [T.value, e.style], onClick: w }, t), [d("div", { class: "v-field__overlay" }, null), d(Ql, { name: "v-field", active: !!e.loading, color: e.error ? "error" : typeof e.loading == "string" ? e.loading : e.color }, { default: a.loader }), M && d("div", { key: "prepend", class: "v-field__prepend-inner" }, [e.prependInnerIcon && d(y, { key: "prepend-icon", name: "prependInner" }, null), (V = a["prepend-inner"]) == null ? void 0 : V.call(a, S.value)]), d("div", { class: "v-field__field", "data-no-activator": "" }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(e.variant) && C.value && d(Mn, { key: "floating-label", ref: H, class: [I.value], floating: !0, for: b.value, style: P.value }, { default: () => [B()] }), d(Mn, { ref: O, for: b.value }, { default: () => [B()] }), (F = a.default) == null ? void 0 : F.call(a, { ...S.value, props: { id: b.value, class: "v-field__input", "aria-describedby": x.value }, focus: o, blur: v })]), N && d(Si, { key: "clear" }, { default: () => [Ue(d("div", { class: "v-field__clearable", onMousedown: (L) => {
      L.preventDefault(), L.stopPropagation();
    } }, [a.clear ? a.clear() : d(y, { name: "clear" }, null)]), [[jt, e.dirty]])] }), k && d("div", { key: "append", class: "v-field__append-inner" }, [(G = a["append-inner"]) == null ? void 0 : G.call(a, S.value), e.appendInnerIcon && d(y, { key: "append-icon", name: "appendInner" }, null)]), d("div", { class: ["v-field__outline", I.value], style: P.value }, [A && d(we, null, [d("div", { class: "v-field__outline__start" }, null), C.value && d("div", { class: "v-field__outline__notch" }, [d(Mn, { ref: H, floating: !0, for: b.value }, { default: () => [B()] })]), d("div", { class: "v-field__outline__end" }, null)]), _.value && C.value && d(Mn, { ref: H, floating: !0, for: b.value }, { default: () => [B()] })])]);
  }), { controlRef: $ };
} });
function co(e) {
  return ai(e, Object.keys(na.props).filter((n) => !Bl(n) && n !== "class" && n !== "style"));
}
const ls = ["color", "file", "time", "date", "datetime-local", "week", "month"], vo = q({ autofocus: Boolean, counter: [Boolean, Number, String], counterValue: [Number, Function], prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, suffix: String, role: String, type: { type: String, default: "text" }, modelModifiers: Object, ...$n(), ...ta() }, "VTextField"), $l = te()({ name: "VTextField", directives: { Intersect: Yl }, inheritAttrs: !1, props: vo(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const i = _e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = En(e), o = f(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : typeof e.counterValue == "number" ? e.counterValue : (i.value ?? "").toString().length), v = f(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter), y = f(() => ["plain", "underlined"].includes(e.variant));
  function m(_, W) {
    var T, I;
    e.autofocus && _ && ((I = (T = W[0].target) == null ? void 0 : T.focus) == null || I.call(T));
  }
  const g = D(), p = D(), C = D(), h = f(() => ls.includes(e.type) || e.persistentPlaceholder || c.value || e.active);
  function b() {
    var _;
    C.value !== document.activeElement && ((_ = C.value) == null || _.focus()), c.value || u();
  }
  function x(_) {
    l("mousedown:control", _), _.target !== C.value && (b(), _.preventDefault());
  }
  function O(_) {
    b(), l("click:control", _);
  }
  function H(_) {
    _.stopPropagation(), b(), Me(() => {
      i.value = null, ri(e["onClick:clear"], _);
    });
  }
  function $(_) {
    var T;
    const W = _.target;
    if (i.value = W.value, ((T = e.modelModifiers) == null ? void 0 : T.trim) && ["text", "search", "password", "tel", "url"].includes(e.type)) {
      const I = [W.selectionStart, W.selectionEnd];
      Me(() => {
        W.selectionStart = I[0], W.selectionEnd = I[1];
      });
    }
  }
  return se(() => {
    const _ = !!(a.counter || e.counter !== !1 && e.counter != null), W = !(!_ && !a.details), [T, I] = kn(t), { modelValue: P, ...S } = It.filterProps(e), w = co(e);
    return d(It, Z({ ref: g, modelValue: i.value, "onUpdate:modelValue": (A) => i.value = A, class: ["v-text-field", { "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-input--plain-underlined": y.value }, e.class], style: e.style }, T, S, { centerAffix: !y.value, focused: c.value }), { ...a, default: (A) => {
      let { id: M, isDisabled: N, isDirty: k, isReadonly: B, isValid: V } = A;
      return d(na, Z({ ref: p, onMousedown: x, onClick: O, "onClick:clear": H, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"], role: e.role }, w, { id: M.value, active: h.value || k.value, dirty: k.value || e.dirty, disabled: N.value, focused: c.value, error: V.value === !1 }), { ...a, default: (F) => {
        let { props: { class: G, ...L } } = F;
        const z = Ue(d("input", Z({ ref: C, value: i.value, onInput: $, autofocus: e.autofocus, readonly: B.value, disabled: N.value, name: e.name, placeholder: e.placeholder, size: 1, type: e.type, onFocus: b, onBlur: s }, L, I), null), [[gt("intersect"), { handler: m }, null, { once: !0 }]]);
        return d(we, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [d("span", { class: "v-text-field__prefix__text" }, [e.prefix])]), a.default ? d("div", { class: G, "data-no-activator": "" }, [a.default(), z]) : Fo(z, { class: G }), e.suffix && d("span", { class: "v-text-field__suffix" }, [d("span", { class: "v-text-field__suffix__text" }, [e.suffix])])]);
      } });
    }, details: W ? (A) => {
      var M;
      return d(we, null, [(M = a.details) == null ? void 0 : M.call(a, A), _ && d(we, null, [d("span", null, null), d(uo, { active: e.persistentCounter || c.value, value: o.value, max: v.value }, a.counter)])]);
    } : void 0 });
  }), sl({}, g, p, C);
} }), as = q({ renderless: Boolean, ...ye() }, "VVirtualScrollItem"), is = te()({ name: "VVirtualScrollItem", inheritAttrs: !1, props: as(), emits: { "update:height": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const { resizeRef: i, contentRect: c } = jl(void 0, "border");
  K(() => {
    var u;
    return (u = c.value) == null ? void 0 : u.height;
  }, (u) => {
    u != null && l("update:height", u);
  }), se(() => {
    var u, s;
    return e.renderless ? d(we, null, [(u = a.default) == null ? void 0 : u.call(a, { itemRef: i })]) : d("div", Z({ ref: i, class: ["v-virtual-scroll__item", e.class], style: e.style }, t), [(s = a.default) == null ? void 0 : s.call(a)]);
  });
} }), os = q({ itemHeight: { type: [Number, String], default: null }, height: [Number, String] }, "virtual");
function rs(e, n) {
  const t = io(), l = de(0);
  ot(() => {
    l.value = parseFloat(e.itemHeight || 0);
  });
  const a = de(0), i = de(Math.ceil((parseInt(e.height) || t.height.value) / (l.value || 16)) || 1), c = de(0), u = de(0), s = D(), o = D();
  let v = 0;
  const { resizeRef: y, contentRect: m } = jl();
  ot(() => {
    y.value = s.value;
  });
  const g = f(() => {
    var k;
    return s.value === document.documentElement ? t.height.value : ((k = m.value) == null ? void 0 : k.height) || parseInt(e.height) || 0;
  }), p = f(() => !!(s.value && o.value && g.value && l.value));
  let C = Array.from({ length: n.value.length }), h = Array.from({ length: n.value.length });
  const b = de(0);
  let x = -1;
  function O(k) {
    return C[k] || l.value;
  }
  const H = function(k, B) {
    let V = 0;
    const F = function() {
      for (var G = arguments.length, L = new Array(G), z = 0; z < G; z++)
        L[z] = arguments[z];
      clearTimeout(V), V = setTimeout(() => k(...L), r(B));
    };
    return F.clear = () => {
      clearTimeout(V);
    }, F.immediate = k, F;
  }(() => {
    const k = performance.now();
    h[0] = 0;
    const B = n.value.length;
    for (let V = 1; V <= B - 1; V++)
      h[V] = (h[V - 1] || 0) + O(V - 1);
    b.value = Math.max(b.value, performance.now() - k);
  }, b), $ = K(p, (k) => {
    k && ($(), v = o.value.offsetTop, H.immediate(), w(), ~x && Me(() => {
      Ke && window.requestAnimationFrame(() => {
        M(x), x = -1;
      });
    }));
  });
  function _(k) {
    return k = Gt(k, 0, n.value.length - 1), h[k] || 0;
  }
  function W(k) {
    return function(B, V) {
      let F = B.length - 1, G = 0, L = 0, z = null, Q = -1;
      if (B[F] < V)
        return F;
      for (; G <= F; )
        if (L = G + F >> 1, z = B[L], z > V)
          F = L - 1;
        else {
          if (!(z < V))
            return z === V ? L : G;
          Q = L, G = L + 1;
        }
      return Q;
    }(h, k);
  }
  K(g, (k, B) => {
    B && w();
  }), qe(() => {
    H.clear();
  });
  let T = 0, I = 0, P = 0, S = -1;
  function w() {
    cancelAnimationFrame(S), S = requestAnimationFrame(A);
  }
  function A() {
    if (!s.value || !g.value)
      return;
    const k = T - v, B = Math.sign(I), V = Gt(W(Math.max(0, k - 100)), 0, n.value.length), F = Gt(W(k + g.value + 100) + 1, V + 1, n.value.length);
    if ((B !== -1 || V < a.value) && (B !== 1 || F > i.value)) {
      const G = _(a.value) - _(V), L = _(F) - _(i.value);
      Math.max(G, L) > 100 ? (a.value = V, i.value = F) : (V <= 0 && (a.value = V), F >= n.value.length && (i.value = F));
    }
    c.value = _(a.value), u.value = _(n.value.length) - _(i.value);
  }
  function M(k) {
    const B = _(k);
    !s.value || k && !B ? x = k : s.value.scrollTop = B;
  }
  const N = f(() => n.value.slice(a.value, i.value).map((k, B) => ({ raw: k, index: B + a.value })));
  return K(n, () => {
    C = Array.from({ length: n.value.length }), h = Array.from({ length: n.value.length }), H.immediate(), w();
  }, { deep: !0 }), { containerRef: s, markerRef: o, computedItems: N, paddingTop: c, paddingBottom: u, scrollToIndex: M, handleScroll: function() {
    if (!s.value || !o.value)
      return;
    const k = s.value.scrollTop, B = performance.now();
    B - P > 500 ? (I = Math.sign(k - T), v = o.value.offsetTop) : I = k - T, T = k, P = B, w();
  }, handleScrollend: function() {
    s.value && o.value && (I = 0, P = 0, w());
  }, handleItemResize: function(k, B) {
    const V = C[k], F = l.value;
    l.value = F ? Math.min(l.value, B) : B, V === B && F === l.value || (C[k] = B, H());
  } };
}
const ss = q({ items: { type: Array, default: () => [] }, renderless: Boolean, ...os(), ...ye(), ...zt() }, "VVirtualScroll"), us = te()({ name: "VVirtualScroll", props: ss(), setup(e, n) {
  let { slots: t } = n;
  const l = Le("VVirtualScroll"), { dimensionStyles: a } = Dt(e), { containerRef: i, markerRef: c, handleScroll: u, handleScrollend: s, handleItemResize: o, scrollToIndex: v, paddingTop: y, paddingBottom: m, computedItems: g } = rs(e, ae(e, "items"));
  return wt(() => e.renderless, () => {
    function p() {
      var h, b;
      const C = arguments.length > 0 && arguments[0] !== void 0 && arguments[0] ? "addEventListener" : "removeEventListener";
      i.value === document.documentElement ? (document[C]("scroll", u, { passive: !0 }), document[C]("scrollend", s)) : ((h = i.value) == null || h[C]("scroll", u, { passive: !0 }), (b = i.value) == null || b[C]("scrollend", s));
    }
    qt(() => {
      i.value = yi(l.vnode.el, !0), p(!0);
    }), qe(p);
  }), se(() => {
    const p = g.value.map((C) => d(is, { key: C.index, renderless: e.renderless, "onUpdate:height": (h) => o(C.index, h) }, { default: (h) => {
      var b;
      return (b = t.default) == null ? void 0 : b.call(t, { item: C.raw, index: C.index, ...h });
    } }));
    return e.renderless ? d(we, null, [d("div", { ref: c, class: "v-virtual-scroll__spacer", style: { paddingTop: ie(y.value) } }, null), p, d("div", { class: "v-virtual-scroll__spacer", style: { paddingBottom: ie(m.value) } }, null)]) : d("div", { ref: i, class: ["v-virtual-scroll", e.class], onScrollPassive: u, onScrollend: s, style: [a.value, e.style] }, [d("div", { ref: c, class: "v-virtual-scroll__container", style: { paddingTop: ie(y.value), paddingBottom: ie(m.value) } }, [p])]);
  }), { scrollToIndex: v };
} });
function cs(e, n) {
  const t = de(!1);
  let l;
  return { onListScroll: function(a) {
    cancelAnimationFrame(l), t.value = !0, l = requestAnimationFrame(() => {
      l = requestAnimationFrame(() => {
        t.value = !1;
      });
    });
  }, onListKeydown: async function(a) {
    var u, s;
    if (a.key === "Tab" && ((u = n.value) == null || u.focus()), !["PageDown", "PageUp", "Home", "End"].includes(a.key))
      return;
    const i = (s = e.value) == null ? void 0 : s.$el;
    if (!i)
      return;
    a.key !== "Home" && a.key !== "End" || i.scrollTo({ top: a.key === "Home" ? 0 : i.scrollHeight, behavior: "smooth" }), await async function() {
      await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => requestAnimationFrame(o)), await new Promise((o) => {
        if (t.value) {
          const v = K(t, () => {
            v(), o();
          });
        } else
          o();
      });
    }();
    const c = i.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (a.key === "PageDown" || a.key === "Home") {
      const o = i.getBoundingClientRect().top;
      for (const v of c)
        if (v.getBoundingClientRect().top >= o) {
          v.focus();
          break;
        }
    } else {
      const o = i.getBoundingClientRect().bottom;
      for (const v of [...c].reverse())
        if (v.getBoundingClientRect().bottom <= o) {
          v.focus();
          break;
        }
    }
  } };
}
const ds = q({ chips: Boolean, closableChips: Boolean, closeText: { type: String, default: "$vuetify.close" }, openText: { type: String, default: "$vuetify.open" }, eager: Boolean, hideNoData: Boolean, hideSelected: Boolean, menu: Boolean, menuIcon: { type: be, default: "$dropdown" }, menuProps: { type: Object }, multiple: Boolean, noDataText: { type: String, default: "$vuetify.noDataText" }, openOnClear: Boolean, itemColor: String, ...to({ itemChildren: !1 }) }, "Select"), vs = q({ ...ds(), ...$t(vo({ modelValue: null, role: "button" }), ["validationValue", "dirty", "appendInnerIcon"]), ...Fn({ transition: { component: Ci } }) }, "VSelect"), fs = te()({ name: "VSelect", props: vs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:menu": (e) => !0 }, setup(e, n) {
  let { slots: t } = n;
  const { t: l } = ql(), a = D(), i = D(), c = D(), u = _e(e, "menu"), s = f({ get: () => u.value, set: (B) => {
    var V;
    u.value && !B && ((V = i.value) != null && V.ΨopenChildren) || (u.value = B);
  } }), { items: o, transformIn: v, transformOut: y } = function(B) {
    const V = f(() => no(B, B.items)), F = f(() => V.value.some((G) => G.value === null));
    return { items: V, transformIn: function(G) {
      return F.value || (G = G.filter((L) => L !== null)), G.map((L) => B.returnObject && typeof L == "string" ? Ol(B, L) : V.value.find((z) => B.valueComparator(L, z.value)) || Ol(B, L));
    }, transformOut: function(G) {
      return B.returnObject ? G.map((L) => {
        let { raw: z } = L;
        return z;
      }) : G.map((L) => {
        let { value: z } = L;
        return z;
      });
    } };
  }(e), m = _e(e, "modelValue", [], (B) => v(B === null ? [null] : dt(B)), (B) => {
    const V = y(B);
    return e.multiple ? V : V[0] ?? null;
  }), g = f(() => typeof e.counterValue == "function" ? e.counterValue(m.value) : typeof e.counterValue == "number" ? e.counterValue : m.value.length), p = qi(), C = f(() => m.value.map((B) => B.value)), h = de(!1), b = f(() => s.value ? e.closeText : e.openText);
  let x, O = "";
  const H = f(() => e.hideSelected ? o.value.filter((B) => !m.value.some((V) => V === B)) : o.value), $ = f(() => e.hideNoData && !o.value.length || e.readonly || (p == null ? void 0 : p.isReadonly.value)), _ = D(), { onListScroll: W, onListKeydown: T } = cs(_, a);
  function I(B) {
    e.openOnClear && (s.value = !0);
  }
  function P() {
    $.value || (s.value = !s.value);
  }
  function S(B) {
    var G, L;
    if (!B.key || e.readonly || p != null && p.isReadonly.value || (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(B.key) && B.preventDefault(), ["Enter", "ArrowDown", " "].includes(B.key) && (s.value = !0), ["Escape", "Tab"].includes(B.key) && (s.value = !1), B.key === "Home" ? (G = _.value) == null || G.focus("first") : B.key === "End" && ((L = _.value) == null || L.focus("last")), e.multiple || !function(z) {
      const Q = z.key.length === 1, E = !z.ctrlKey && !z.metaKey && !z.altKey;
      return Q && E;
    }(B)))
      return;
    const V = performance.now();
    V - x > 1e3 && (O = ""), O += B.key.toLowerCase(), x = V;
    const F = o.value.find((z) => z.title.toLowerCase().startsWith(O));
    F !== void 0 && (m.value = [F]);
  }
  function w(B) {
    if (e.multiple) {
      const V = m.value.findIndex((F) => e.valueComparator(F.value, B.value));
      if (V === -1)
        m.value = [...m.value, B];
      else {
        const F = [...m.value];
        F.splice(V, 1), m.value = F;
      }
    } else
      m.value = [B], s.value = !1;
  }
  function A(B) {
    var V;
    (V = _.value) != null && V.$el.contains(B.relatedTarget) || (s.value = !1);
  }
  function M() {
    var B;
    h.value && ((B = a.value) == null || B.focus());
  }
  function N(B) {
    h.value = !0;
  }
  function k(B) {
    if (B == null)
      m.value = [];
    else if (Yn(a.value, ":autofill") || Yn(a.value, ":-webkit-autofill")) {
      const V = o.value.find((F) => F.title === B);
      V && w(V);
    } else
      a.value && (a.value.value = "");
  }
  return K(s, () => {
    if (!e.hideSelected && s.value && m.value.length) {
      const B = H.value.findIndex((V) => m.value.some((F) => e.valueComparator(F.value, V.value)));
      Ke && window.requestAnimationFrame(() => {
        var V;
        B >= 0 && ((V = c.value) == null || V.scrollToIndex(B));
      });
    }
  }), se(() => {
    const B = !(!e.chips && !t.chip), V = !!(!e.hideNoData || H.value.length || t["prepend-item"] || t["append-item"] || t["no-data"]), F = m.value.length > 0, G = $l.filterProps(e), L = F || !h.value && e.label && !e.persistentPlaceholder ? void 0 : e.placeholder;
    return d($l, Z({ ref: a }, G, { modelValue: m.value.map((z) => z.props.value).join(", "), "onUpdate:modelValue": k, focused: h.value, "onUpdate:focused": (z) => h.value = z, validationValue: m.externalValue, counterValue: g.value, dirty: F, class: ["v-select", { "v-select--active-menu": s.value, "v-select--chips": !!e.chips, ["v-select--" + (e.multiple ? "multiple" : "single")]: !0, "v-select--selected": m.value.length, "v-select--selection-slot": !!t.selection }, e.class], style: e.style, inputmode: "none", placeholder: L, "onClick:clear": I, "onMousedown:control": P, onBlur: A, onKeydown: S, "aria-label": l(b.value), title: l(b.value) }), { ...t, default: () => d(we, null, [d(Qr, Z({ ref: i, modelValue: s.value, "onUpdate:modelValue": (z) => s.value = z, activator: "parent", contentClass: "v-select__content", disabled: $.value, eager: e.eager, maxHeight: 310, openOnClick: !1, closeOnContentClick: !1, transition: e.transition, onAfterLeave: M }, e.menuProps), { default: () => [V && d(Wr, { ref: _, selected: C.value, selectStrategy: e.multiple ? "independent" : "single-independent", onMousedown: (z) => z.preventDefault(), onKeydown: T, onFocusin: N, onScrollPassive: W, tabindex: "-1", color: e.itemColor ?? e.color }, { default: () => {
      var z, Q, E;
      return [(z = t["prepend-item"]) == null ? void 0 : z.call(t), !H.value.length && !e.hideNoData && (((Q = t["no-data"]) == null ? void 0 : Q.call(t)) ?? d(tl, { title: l(e.noDataText) }, null)), d(us, { ref: c, renderless: !0, items: H.value }, { default: (U) => {
        var ve;
        let { item: R, index: j, itemRef: Y } = U;
        const ee = Z(R.props, { ref: Y, key: j, onClick: () => w(R) });
        return ((ve = t.item) == null ? void 0 : ve.call(t, { item: R, index: j, props: ee })) ?? d(tl, Z(ee, { role: "option" }), { prepend: (Ce) => {
          let { isSelected: he } = Ce;
          return d(we, null, [e.multiple && !e.hideSelected ? d(Fl, { key: R.value, modelValue: he, ripple: !1, tabindex: "-1" }, null) : void 0, R.props.prependIcon && d(Ie, { icon: R.props.prependIcon }, null)]);
        } });
      } }), (E = t["append-item"]) == null ? void 0 : E.call(t)];
    } })] }), m.value.map((z, Q) => {
      const E = { "onClick:close": function(j) {
        j.stopPropagation(), j.preventDefault(), w(z);
      }, onMousedown(j) {
        j.preventDefault(), j.stopPropagation();
      }, modelValue: !0, "onUpdate:modelValue": void 0 }, U = B ? !!t.chip : !!t.selection, R = U ? ui(B ? t.chip({ item: z, index: Q, props: E }) : t.selection({ item: z, index: Q })) : void 0;
      if (!U || R)
        return d("div", { key: z.value, class: "v-select__selection" }, [B ? t.chip ? d(Ge, { key: "chip-defaults", defaults: { VChip: { closable: e.closableChips, size: "small", text: z.title } } }, { default: () => [R] }) : d(Vr, Z({ key: "chip", closable: e.closableChips, size: "small", text: z.title, disabled: z.props.disabled }, E), null) : R ?? d("span", { class: "v-select__selection-text" }, [z.title, e.multiple && Q < m.value.length - 1 && d("span", { class: "v-select__selection-comma" }, [ti(",")])])]);
    })]), "append-inner": function() {
      var U;
      for (var z = arguments.length, Q = new Array(z), E = 0; E < z; E++)
        Q[E] = arguments[E];
      return d(we, null, [(U = t["append-inner"]) == null ? void 0 : U.call(t, ...Q), e.menuIcon ? d(Ie, { class: "v-select__menu-icon", icon: e.menuIcon }, null) : void 0]);
    } });
  }), sl({ isFocused: h, menu: s, select: w }, a);
} }), ms = te()({ name: "VCardActions", props: ye(), setup(e, n) {
  let { slots: t } = n;
  return Qt({ VBtn: { slim: !0, variant: "text" } }), se(() => {
    var l;
    return d("div", { class: ["v-card-actions", e.class], style: e.style }, [(l = t.default) == null ? void 0 : l.call(t)]);
  }), {};
} }), ys = xn("v-card-subtitle"), gs = xn("v-card-title"), hs = q({ appendAvatar: String, appendIcon: be, prependAvatar: String, prependIcon: be, subtitle: [String, Number], title: [String, Number], ...ye(), ...ut() }, "VCardItem"), ps = te()({ name: "VCardItem", props: hs(), setup(e, n) {
  let { slots: t } = n;
  return se(() => {
    var o;
    const l = !(!e.prependAvatar && !e.prependIcon), a = !(!l && !t.prepend), i = !(!e.appendAvatar && !e.appendIcon), c = !(!i && !t.append), u = !(e.title == null && !t.title), s = !(e.subtitle == null && !t.subtitle);
    return d("div", { class: ["v-card-item", e.class], style: e.style }, [a && d("div", { key: "prepend", class: "v-card-item__prepend" }, [t.prepend ? d(Ge, { key: "prepend-defaults", disabled: !l, defaults: { VAvatar: { density: e.density, icon: e.prependIcon, image: e.prependAvatar } } }, t.prepend) : l && d(Ut, { key: "prepend-avatar", density: e.density, icon: e.prependIcon, image: e.prependAvatar }, null)]), d("div", { class: "v-card-item__content" }, [u && d(gs, { key: "title" }, { default: () => {
      var v;
      return [((v = t.title) == null ? void 0 : v.call(t)) ?? e.title];
    } }), s && d(ys, { key: "subtitle" }, { default: () => {
      var v;
      return [((v = t.subtitle) == null ? void 0 : v.call(t)) ?? e.subtitle];
    } }), (o = t.default) == null ? void 0 : o.call(t)]), c && d("div", { key: "append", class: "v-card-item__append" }, [t.append ? d(Ge, { key: "append-defaults", disabled: !i, defaults: { VAvatar: { density: e.density, icon: e.appendIcon, image: e.appendAvatar } } }, t.append) : i && d(Ut, { key: "append-avatar", density: e.density, icon: e.appendIcon, image: e.appendAvatar }, null)])]);
  }), {};
} }), Lt = xn("v-card-text"), Cs = q({ appendAvatar: String, appendIcon: be, disabled: Boolean, flat: Boolean, hover: Boolean, image: String, link: { type: Boolean, default: void 0 }, prependAvatar: String, prependIcon: be, ripple: { type: [Boolean, Object], default: !0 }, subtitle: [String, Number], text: [String, Number], title: [String, Number], ...en(), ...ye(), ...ut(), ...zt(), ...nn(), ...Zl(), ...Kl(), ...Ti(), ...ht(), ...rl(), ...et(), ...Ne(), ...Vt({ variant: "elevated" }) }, "VCard"), an = te()({ name: "VCard", directives: { Ripple: _n }, props: Cs(), setup(e, n) {
  let { attrs: t, slots: l } = n;
  const { themeClasses: a } = Xe(e), { borderClasses: i } = tn(e), { colorClasses: c, colorStyles: u, variantClasses: s } = An(e), { densityClasses: o } = Ct(e), { dimensionStyles: v } = Dt(e), { elevationClasses: y } = ln(e), { loaderClasses: m } = il(e), { locationStyles: g } = Jl(e), { positionClasses: p } = _i(e), { roundedClasses: C } = pt(e), h = ol(e, t), b = f(() => e.link !== !1 && h.isLink.value), x = f(() => !e.disabled && e.link !== !1 && (e.link || h.isClickable.value));
  return se(() => {
    const O = b.value ? "a" : e.tag, H = !(!l.title && e.title == null), $ = !(!l.subtitle && e.subtitle == null), _ = H || $, W = !!(l.append || e.appendAvatar || e.appendIcon), T = !!(l.prepend || e.prependAvatar || e.prependIcon), I = !(!l.image && !e.image), P = _ || T || W, S = !(!l.text && e.text == null);
    return Ue(d(O, { class: ["v-card", { "v-card--disabled": e.disabled, "v-card--flat": e.flat, "v-card--hover": e.hover && !(e.disabled || e.flat), "v-card--link": x.value }, a.value, i.value, c.value, o.value, y.value, m.value, p.value, C.value, s.value, e.class], style: [u.value, v.value, g.value, e.style], href: h.href.value, onClick: x.value && h.navigate, tabindex: e.disabled ? -1 : void 0 }, { default: () => {
      var w;
      return [I && d("div", { key: "image", class: "v-card__image" }, [l.image ? d(Ge, { key: "image-defaults", disabled: !e.image, defaults: { VImg: { cover: !0, src: e.image } } }, l.image) : d(Bi, { key: "image-img", cover: !0, src: e.image }, null)]), d(Ql, { name: "v-card", active: !!e.loading, color: typeof e.loading == "boolean" ? void 0 : e.loading }, { default: l.loader }), P && d(ps, { key: "item", prependAvatar: e.prependAvatar, prependIcon: e.prependIcon, title: e.title, subtitle: e.subtitle, appendAvatar: e.appendAvatar, appendIcon: e.appendIcon }, { default: l.item, prepend: l.prepend, title: l.title, subtitle: l.subtitle, append: l.append }), S && d(Lt, { key: "text" }, { default: () => {
        var A;
        return [((A = l.text) == null ? void 0 : A.call(l)) ?? e.text];
      } }), (w = l.default) == null ? void 0 : w.call(l), l.actions && d(ms, null, { default: l.actions }), Pn(x.value, "v-card")];
    } }), [[gt("ripple"), x.value && e.ripple]]);
  }), {};
} }), bs = q({ indeterminate: Boolean, inset: Boolean, flat: Boolean, loading: { type: [Boolean, String], default: !1 }, ...$n(), ...ea() }, "VSwitch"), Ss = te()({ name: "VSwitch", inheritAttrs: !1, props: bs(), emits: { "update:focused": (e) => !0, "update:modelValue": (e) => !0, "update:indeterminate": (e) => !0 }, setup(e, n) {
  let { attrs: t, slots: l } = n;
  const a = _e(e, "indeterminate"), i = _e(e, "modelValue"), { loaderClasses: c } = il(e), { isFocused: u, focus: s, blur: o } = En(e), v = D(), y = f(() => typeof e.loading == "string" && e.loading !== "" ? e.loading : e.color), m = nt(), g = f(() => e.id || `switch-${m}`);
  function p() {
    a.value && (a.value = !1);
  }
  function C(h) {
    var b, x;
    h.stopPropagation(), h.preventDefault(), (x = (b = v.value) == null ? void 0 : b.input) == null || x.click();
  }
  return se(() => {
    const [h, b] = kn(t), x = It.filterProps(e), O = el.filterProps(e);
    return d(It, Z({ class: ["v-switch", { "v-switch--inset": e.inset }, { "v-switch--indeterminate": a.value }, c.value, e.class] }, h, x, { modelValue: i.value, "onUpdate:modelValue": (H) => i.value = H, id: g.value, focused: u.value, style: e.style }), { ...l, default: (H) => {
      let { id: $, messagesId: _, isDisabled: W, isReadonly: T, isValid: I } = H;
      return d(el, Z({ ref: v }, O, { modelValue: i.value, "onUpdate:modelValue": [(P) => i.value = P, p], id: $.value, "aria-describedby": _.value, type: "checkbox", "aria-checked": a.value ? "mixed" : void 0, disabled: W.value, readonly: T.value, onFocus: s, onBlur: o }, b), { ...l, default: (P) => {
        let { backgroundColorClasses: S, backgroundColorStyles: w } = P;
        return d("div", { class: ["v-switch__track", ...S.value], style: w.value, onClick: C }, null);
      }, input: (P) => {
        let { inputNode: S, icon: w, backgroundColorClasses: A, backgroundColorStyles: M } = P;
        return d(we, null, [S, d("div", { class: ["v-switch__thumb", { "v-switch__thumb--filled": w || e.loading }, e.inset ? void 0 : A.value], style: e.inset ? void 0 : M.value }, [d(Ko, null, { default: () => [e.loading ? d(Ql, { name: "v-switch", active: !0, color: I.value === !1 ? void 0 : y.value }, { default: (N) => l.loader ? l.loader(N) : d(Oi, { active: N.isActive, color: N.color, indeterminate: !0, size: "16", width: "2" }, null) }) : w && d(Ie, { key: w, icon: w, size: "x-small" }, null)] })])]);
      } });
    } });
  }), {};
} }), Is = q({ autoGrow: Boolean, autofocus: Boolean, counter: [Boolean, Number, String], counterValue: Function, prefix: String, placeholder: String, persistentPlaceholder: Boolean, persistentCounter: Boolean, noResize: Boolean, rows: { type: [Number, String], default: 5, validator: (e) => !isNaN(parseFloat(e)) }, maxRows: { type: [Number, String], validator: (e) => !isNaN(parseFloat(e)) }, suffix: String, modelModifiers: Object, ...$n(), ...ta() }, "VTextarea"), Bs = te()({ name: "VTextarea", directives: { Intersect: Yl }, inheritAttrs: !1, props: Is(), emits: { "click:control": (e) => !0, "mousedown:control": (e) => !0, "update:focused": (e) => !0, "update:modelValue": (e) => !0 }, setup(e, n) {
  let { attrs: t, emit: l, slots: a } = n;
  const i = _e(e, "modelValue"), { isFocused: c, focus: u, blur: s } = En(e), o = f(() => typeof e.counterValue == "function" ? e.counterValue(i.value) : (i.value || "").toString().length), v = f(() => t.maxlength ? t.maxlength : !e.counter || typeof e.counter != "number" && typeof e.counter != "string" ? void 0 : e.counter);
  function y(S, w) {
    var A, M;
    e.autofocus && S && ((M = (A = w[0].target) == null ? void 0 : A.focus) == null || M.call(A));
  }
  const m = D(), g = D(), p = de(""), C = D(), h = f(() => e.persistentPlaceholder || c.value || e.active);
  function b() {
    var S;
    C.value !== document.activeElement && ((S = C.value) == null || S.focus()), c.value || u();
  }
  function x(S) {
    b(), l("click:control", S);
  }
  function O(S) {
    l("mousedown:control", S);
  }
  function H(S) {
    S.stopPropagation(), b(), Me(() => {
      i.value = "", ri(e["onClick:clear"], S);
    });
  }
  function $(S) {
    var A;
    const w = S.target;
    if (i.value = w.value, (A = e.modelModifiers) == null ? void 0 : A.trim) {
      const M = [w.selectionStart, w.selectionEnd];
      Me(() => {
        w.selectionStart = M[0], w.selectionEnd = M[1];
      });
    }
  }
  const _ = D(), W = D(+e.rows), T = f(() => ["plain", "underlined"].includes(e.variant));
  function I() {
    e.autoGrow && Me(() => {
      if (!_.value || !g.value)
        return;
      const S = getComputedStyle(_.value), w = getComputedStyle(g.value.$el), A = parseFloat(S.getPropertyValue("--v-field-padding-top")) + parseFloat(S.getPropertyValue("--v-input-padding-top")) + parseFloat(S.getPropertyValue("--v-field-padding-bottom")), M = _.value.scrollHeight, N = parseFloat(S.lineHeight), k = Gt(M ?? 0, Math.max(parseFloat(e.rows) * N + A, parseFloat(w.getPropertyValue("--v-input-control-height"))), parseFloat(e.maxRows) * N + A || 1 / 0);
      W.value = Math.floor((k - A) / N), p.value = ie(k);
    });
  }
  let P;
  return ot(() => {
    e.autoGrow || (W.value = +e.rows);
  }), qt(I), K(i, I), K(() => e.rows, I), K(() => e.maxRows, I), K(() => e.density, I), K(_, (S) => {
    S ? (P = new ResizeObserver(I), P.observe(_.value)) : P == null || P.disconnect();
  }), yt(() => {
    P == null || P.disconnect();
  }), se(() => {
    const S = !!(a.counter || e.counter || e.counterValue), w = !(!S && !a.details), [A, M] = kn(t), { modelValue: N, ...k } = It.filterProps(e), B = co(e);
    return d(It, Z({ ref: m, modelValue: i.value, "onUpdate:modelValue": (V) => i.value = V, class: ["v-textarea v-text-field", { "v-textarea--prefixed": e.prefix, "v-textarea--suffixed": e.suffix, "v-text-field--prefixed": e.prefix, "v-text-field--suffixed": e.suffix, "v-textarea--auto-grow": e.autoGrow, "v-textarea--no-resize": e.noResize || e.autoGrow, "v-input--plain-underlined": T.value }, e.class], style: e.style }, A, k, { centerAffix: W.value === 1 && !T.value, focused: c.value }), { ...a, default: (V) => {
      let { id: F, isDisabled: G, isDirty: L, isReadonly: z, isValid: Q } = V;
      return d(na, Z({ ref: g, style: { "--v-textarea-control-height": p.value }, onClick: x, onMousedown: O, "onClick:clear": H, "onClick:prependInner": e["onClick:prependInner"], "onClick:appendInner": e["onClick:appendInner"] }, B, { id: F.value, active: h.value || L.value, centerAffix: W.value === 1 && !T.value, dirty: L.value || e.dirty, disabled: G.value, focused: c.value, error: Q.value === !1 }), { ...a, default: (E) => {
        let { props: { class: U, ...R } } = E;
        return d(we, null, [e.prefix && d("span", { class: "v-text-field__prefix" }, [e.prefix]), Ue(d("textarea", Z({ ref: C, class: U, value: i.value, onInput: $, autofocus: e.autofocus, readonly: z.value, disabled: G.value, placeholder: e.placeholder, rows: e.rows, name: e.name, onFocus: b, onBlur: s }, R, M), null), [[gt("intersect"), { handler: y }, null, { once: !0 }]]), e.autoGrow && Ue(d("textarea", { class: [U, "v-textarea__sizer"], id: `${R.id}-sizer`, "onUpdate:modelValue": (j) => i.value = j, ref: _, readonly: !0, "aria-hidden": "true" }, null), [[Po, i.value]]), e.suffix && d("span", { class: "v-text-field__suffix" }, [e.suffix])]);
      } });
    }, details: w ? (V) => {
      var F;
      return d(we, null, [(F = a.details) == null ? void 0 : F.call(a, V), S && d(we, null, [d("span", null, null), d(uo, { active: e.persistentCounter || c.value, value: o.value, max: v.value }, a.counter)])]);
    } : void 0 });
  }), sl({}, m, g, C);
} }), fo = rt({ __name: "BooleanIcons", props: Qe({ iconFalseColor: {}, iconFalseTitle: {}, iconTrueColor: {}, iconTrueTitle: {}, iconFalse: {}, iconTrue: {} }, { modelValue: {} }), emits: ["update:modelValue"], setup(e) {
  const n = e, t = ge(Symbol.for("vuetify:icons")), l = Tt(e, "modelValue"), a = f(() => at({ icon: n.iconFalse, iconOptions: t, name: "false" })), i = f(() => at({ icon: n.iconTrue, iconOptions: t, name: "true" }));
  return (c, u) => l.value ? (J(), ze(r(Ie), { key: 0, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconTrueColor, icon: r(i), size: "x-small", title: c.iconTrueTitle }, null, 8, ["color", "icon", "title"])) : (J(), ze(r(Ie), { key: 1, class: "v-inline-fields--boolean-icons fa-fw", color: c.iconFalseColor, icon: r(a), size: "x-small", title: c.iconFalseTitle }, null, 8, ["color", "icon", "title"]));
} }), oe = "v-inline-fields", on = (e) => {
  const { cell: n = !1, field: t = "", density: l = "", disabled: a = !1, iconSet: i = "mdi", loading: c = !1, loadingWait: u, tableField: s = !1, variant: o } = e, v = l && o;
  return { [`${oe}`]: !0, [`${oe}--container`]: !0, [`${oe}--container-cell`]: n, [`${oe}--container-disabled`]: r(a), [`${oe}--container-table`]: s, [`${oe}--container-icon-set-${i}`]: !0, [`${oe}--container-loading`]: c && u, [`${oe}--container-${t}`]: !0, [`${oe}--container-${t}-${l}`]: !0, [`${oe}--container-${t}-${l}-${o}`]: v, [`${oe}--container-${t}-${o}`]: o, [`${oe}--container-${t}-${o}-${l}`]: v, [`${oe}--container-${l}`]: l, [`${oe}--container-${l}-${t}`]: l, [`${oe}--container-${l}-${o}`]: v, [`${oe}--container-${o}`]: o, [`${oe}--container-${o}-${l}`]: v, [`${oe}--container-${o}-${t}`]: o };
}, rn = (e) => {
  const { cell: n = !1, cellUnderlineFullWidth: t = !0, field: l = "", density: a = "" } = e;
  return { [`${oe}--display-container-cell`]: n, [`${oe}--display-container-cell-underline-full-width`]: n && t, [`${oe}--display-container`]: !0, [`${oe}--display-wrapper-value`]: !0, [`${l}`]: !0, "v-input": !0, [`v-input--density-${a}`]: !0, "v-input--horizontal": !0 };
}, ul = (e) => {
  const { density: n = "", variant: t = "" } = e;
  return { "v-input": !0, "v-input--dirty": !0, "v-input--horizontal": !0, "v-text-field": !0, [`v-input--density-${n}`]: !0, [`v-text-field--plain-${t}`]: !0 };
}, mo = (e) => {
  const { density: n = "" } = e;
  return { [`${oe}--selection-control`]: !0, [`v-selection-control--density-${n}`]: !0 };
}, la = (e, n, t) => {
  const { error: l = !1, empty: a = !1 } = t;
  return { [`${oe}`]: !0, [`${oe}--display-value-${e}`]: !0, [`${oe}--display-value`]: !0, [`${oe}--display-value-empty`]: r(a), [`text-${n}`]: !r(l), "text-danger": r(l) };
}, sn = (e) => {
  const { name: n, active: t = !1 } = e;
  return { [`${oe}`]: !0, [`${oe}--field`]: !0, [`${oe}--field-${n}`]: !0, [`${oe}--field-active`]: t };
}, un = (e) => {
  const { name: n, showField: t } = e;
  return { [`${oe}--card-container`]: !0, [`${oe}--card-container-${n}`]: !0, "d-none": !t };
};
function Ka(e) {
  if (!e)
    return 100;
  if (e.toString().includes(".")) {
    const n = 100 * Number(e);
    return n >= 100 ? 100 : n;
  }
  return Number(e) >= 100 ? 100 : Number(e);
}
function Ja(e) {
  let n = function(y) {
    const m = { AliceBlue: "#F0F8FF", AntiqueWhite: "#FAEBD7", Aqua: "#00FFFF", Aquamarine: "#7FFFD4", Azure: "#F0FFFF", Beige: "#F5F5DC", Bisque: "#FFE4C4", Black: "#000000", BlanchedAlmond: "#FFEBCD", Blue: "#0000FF", BlueViolet: "#8A2BE2", Brown: "#A52A2A", BurlyWood: "#DEB887", CadetBlue: "#5F9EA0", Chartreuse: "#7FFF00", Chocolate: "#D2691E", Coral: "#FF7F50", CornflowerBlue: "#6495ED", Cornsilk: "#FFF8DC", Crimson: "#DC143C", Cyan: "#00FFFF", DarkBlue: "#00008B", DarkCyan: "#008B8B", DarkGoldenRod: "#B8860B", DarkGray: "#A9A9A9", DarkGreen: "#006400", DarkGrey: "#A9A9A9", DarkKhaki: "#BDB76B", DarkMagenta: "#8B008B", DarkOliveGreen: "#556B2F", DarkOrange: "#FF8C00", DarkOrchid: "#9932CC", DarkRed: "#8B0000", DarkSalmon: "#E9967A", DarkSeaGreen: "#8FBC8F", DarkSlateBlue: "#483D8B", DarkSlateGray: "#2F4F4F", DarkSlateGrey: "#2F4F4F", DarkTurquoise: "#00CED1", DarkViolet: "#9400D3", DeepPink: "#FF1493", DeepSkyBlue: "#00BFFF", DimGray: "#696969", DimGrey: "#696969", DodgerBlue: "#1E90FF", FireBrick: "#B22222", FloralWhite: "#FFFAF0", ForestGreen: "#228B22", Fuchsia: "#FF00FF", Gainsboro: "#DCDCDC", GhostWhite: "#F8F8FF", Gold: "#FFD700", GoldenRod: "#DAA520", Gray: "#808080", Green: "#008000", GreenYellow: "#ADFF2F", Grey: "#808080", HoneyDew: "#F0FFF0", HotPink: "#FF69B4", IndianRed: "#CD5C5C", Indigo: "#4B0082", Ivory: "#FFFFF0", Khaki: "#F0E68C", Lavender: "#E6E6FA", LavenderBlush: "#FFF0F5", LawnGreen: "#7CFC00", LemonChiffon: "#FFFACD", LightBlue: "#ADD8E6", LightCoral: "#F08080", LightCyan: "#E0FFFF", LightGoldenRodYellow: "#FAFAD2", LightGray: "#D3D3D3", LightGreen: "#90EE90", LightGrey: "#D3D3D3", LightPink: "#FFB6C1", LightSalmon: "#FFA07A", LightSeaGreen: "#20B2AA", LightSkyBlue: "#87CEFA", LightSlateGray: "#778899", LightSlateGrey: "#778899", LightSteelBlue: "#B0C4DE", LightYellow: "#FFFFE0", Lime: "#00FF00", LimeGreen: "#32CD32", Linen: "#FAF0E6", Magenta: "#FF00FF", Maroon: "#800000", MediumAquaMarine: "#66CDAA", MediumBlue: "#0000CD", MediumOrchid: "#BA55D3", MediumPurple: "#9370DB", MediumSeaGreen: "#3CB371", MediumSlateBlue: "#7B68EE", MediumSpringGreen: "#00FA9A", MediumTurquoise: "#48D1CC", MediumVioletRed: "#C71585", MidnightBlue: "#191970", MintCream: "#F5FFFA", MistyRose: "#FFE4E1", Moccasin: "#FFE4B5", NavajoWhite: "#FFDEAD", Navy: "#000080", OldLace: "#FDF5E6", Olive: "#808000", OliveDrab: "#6B8E23", Orange: "#FFA500", OrangeRed: "#FF4500", Orchid: "#DA70D6", PaleGoldenRod: "#EEE8AA", PaleGreen: "#98FB98", PaleTurquoise: "#AFEEEE", PaleVioletRed: "#DB7093", PapayaWhip: "#FFEFD5", PeachPuff: "#FFDAB9", Peru: "#CD853F", Pink: "#FFC0CB", Plum: "#DDA0DD", PowderBlue: "#B0E0E6", Purple: "#800080", RebeccaPurple: "#663399", Red: "#FF0000", RosyBrown: "#BC8F8F", RoyalBlue: "#4169E1", SaddleBrown: "#8B4513", Salmon: "#FA8072", SandyBrown: "#F4A460", SeaGreen: "#2E8B57", SeaShell: "#FFF5EE", Sienna: "#A0522D", Silver: "#C0C0C0", SkyBlue: "#87CEEB", SlateBlue: "#6A5ACD", SlateGray: "#708090", SlateGrey: "#708090", Snow: "#FFFAFA", SpringGreen: "#00FF7F", SteelBlue: "#4682B4", Tan: "#D2B48C", Teal: "#008080", Thistle: "#D8BFD8", Tomato: "#FF6347", Turquoise: "#40E0D0", Violet: "#EE82EE", Wheat: "#F5DEB3", White: "#FFFFFF", WhiteSmoke: "#F5F5F5", Yellow: "#FFFF00", YellowGreen: "#9ACD32" };
    let g = y;
    return Object.entries(m).forEach(([p, C]) => {
      y.toLowerCase() != p.toLowerCase() || (g = C);
    }), g;
  }(e), t = 0, l = 0, a = 0, i = 100, c = 0, u = 0, s = 0;
  if (n.substring(0, 1) === "#")
    n = function(y) {
      let m = y.replace("#", "");
      m.length === 3 && (m = m.split("").map((b) => b + b).join(""));
      const g = parseInt(m.substring(0, 2), 16), p = parseInt(m.substring(2, 4), 16), C = parseInt(m.substring(4, 6), 16);
      return [g, p, C, 100];
    }(n);
  else if (n.includes("rgb"))
    n = [...n.matchAll(/[\d+.\d+]+/g)].map(Number);
  else if (n.includes("hsl"))
    return n = [...n.matchAll(/[\d+.\d+]+/g)].map(String), t = n[0], l = n[1], a = n[2], i = Ka(n[3]), `${t} ${l}% ${a}% / ${i}%`;
  [c, u, s, i] = n, c /= 255, u /= 255, s /= 255, i = Ka(i);
  const o = Math.max(c, u, s), v = Math.min(c, u, s);
  if (o === null || !v === null || isNaN(o) || isNaN(v)) {
    const y = "0 0% 100% / 12%";
    return console.warn(`[VuetifyInlineFields: The "color" prop value using "${n}" doesn't exist. Using the value "hsl(${y})" in it's place.`), y;
  }
  if (t = (o + v) / 2, l = (o + v) / 2, a = (o + v) / 2, o == v)
    t = l = 0;
  else {
    const y = o - v;
    switch (l = a > 0.5 ? y / (2 - o - v) : y / (o + v), o) {
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
  return t = Math.round(360 * t), l = Math.round(100 * l), a = Math.round(100 * a), `${t} ${l}% ${a}% / ${i}%`;
}
const Vs = (e, n) => {
  if (function(l) {
    return l === "transparent" || l === "none" || l === "inherit" || l === "currentColor" || l === "initial" || l === "unset";
  }(e))
    return e;
  if (function(l) {
    return l.includes("--v-theme");
  }(e))
    return `rgb(var(${e}))`;
  const t = function(l, a) {
    const i = a.global.current.value.colors;
    return Object.entries(i).find(([c]) => c === l);
  }(e, n);
  return t ? `hsl(${Ja(t[1])})` : `hsl(${Ja(e)})`;
}, gn = (e) => {
  const { str: n, unit: t = "px" } = e;
  if (n != null && n !== "")
    return +n ? `${Number(n)}${t}` : String(n);
}, yo = (e) => {
  var a;
  const { modelValue: n, trueValue: t } = e, l = r(n);
  return ((a = l == null ? void 0 : l.toLowerCase) == null ? void 0 : a.call(l)) === "true" || l === "1" || l == "1" || l === !0 || l == t || l === t;
}, aa = (e) => {
  const { underlineStyle: n, underlineWidth: t, color: l, error: a, theme: i, underlined: c } = e;
  let { underlineColor: u } = e;
  u = u || l;
  const s = { "border-bottom-color": Vs(u, i), "border-bottom-style": n, "border-bottom-width": t };
  return r(a) && (s["border-bottom-color"] = "rgb(var(--v-theme-danger))"), c || (s["border-bottom"] = "none"), s;
}, Pt = (e) => {
  const { cardMinWidth: n, cardOffsetX: t, cardOffsetY: l, cardWidth: a, field: i, name: c = "" } = e, u = ((v) => {
    const { cardOffsetX: y, cardOffsetY: m, field: g } = v;
    if (!g)
      return { bottom: 0, height: 0, left: 0, right: 0, top: 0, width: 0, x: 0, y: 0 };
    const { x: p, y: C } = g.getBoundingClientRect(), { width: h, height: b } = g.getBoundingClientRect(), { right: x, bottom: O } = g.getBoundingClientRect();
    return { bottom: gn({ str: O + Number(m) }), height: b, left: gn({ str: 0 + Number(y) }), right: gn({ str: x + Number(y) }), top: gn({ str: 2 + Number(m) }), width: gn({ str: h }), x: p, y: C };
  })({ cardOffsetX: t, cardOffsetY: l, field: i });
  let s = n, o = a;
  return o || (o = c === "checkbox" ? "fit-content" : u.width), s || (s = c === "checkbox" ? "fit-content" : u.width), { left: u.left, top: u.top, width: o, zIndex: 10 };
}, cl = rt({ __name: "DisplayedValue", props: { color: {}, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayValue: {}, empty: { type: Boolean }, error: { type: Boolean }, field: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, emits: ["toggleField"], setup(e, { emit: n }) {
  const t = n, l = e, a = _t(), i = Rl(), c = { displayValue: l.displayValue, empty: l.empty, error: l.error }, u = f(() => la(l.field, l.valueColor, { empty: l.empty, error: l.error })), s = f(() => aa({ color: l.color, error: l.error, theme: i, underlineColor: l.underlineColor, underlineStyle: l.underlineStyle, underlineWidth: l.underlineWidth, underlined: l.underlined })), o = f(() => ((m) => {
    const { underlineWidth: g } = m;
    return { borderBottom: `${g || "0px"} solid transparent` };
  })({ underlineWidth: l.underlineWidth })), v = (m, g = !1) => ((p) => {
    const { inner: C = !1, position: h } = p;
    return { [`${oe}--display-icon`]: !C, [`${oe}--display-${h}-icon`]: !C, [`${oe}--display-${h}-inner-icon`]: C, "me-1": h === "prepend", "ms-1": h === "append" };
  })({ inner: g, position: m });
  function y() {
    t("toggleField");
  }
  return (m, g) => (J(), ce("div", { class: "v-inline-fields--display-wrapper", onClick: y }, [m.displayPrependIcon || r(a)["display.prepend"] ? (J(), ce("div", { key: 0, class: le(v("prepend")), style: $e(r(o)) }, [r(a)["display.prepend"] ? Ye(m.$slots, "display.prepend", Te(Z({ key: 0 }, c))) : (J(), ze(Ie, { key: 1, color: m.displayPrependIconColor, icon: m.displayPrependIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : Ve("", !0), He("div", { class: le(["d-inline-flex", r(u)]), style: $e(r(s)) }, [m.displayPrependInnerIcon || r(a)["display.prependInner"] ? (J(), ce("div", { key: 0, class: le(v("prepend", !0)) }, [r(a)["display.prependInner"] ? Ye(m.$slots, "display.prependInner", Te(Z({ key: 0 }, c))) : (J(), ze(Ie, { key: 1, color: m.displayPrependInnerIconColor, icon: m.displayPrependInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : Ve("", !0), ti(" " + Ll(m.displayValue) + " ", 1), m.displayAppendInnerIcon || r(a)["display.appendInner"] ? (J(), ce("div", { key: 1, class: le(v("append", !0)) }, [r(a)["display.appendInner"] ? Ye(m.$slots, "display.appendInner", Te(Z({ key: 0 }, c))) : (J(), ze(Ie, { key: 1, color: m.displayAppendInnerIconColor, icon: m.displayAppendInnerIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 2)) : Ve("", !0)], 6), m.displayAppendIcon || r(a)["display.append"] ? (J(), ce("div", { key: 1, class: le(v("append")), style: $e(r(o)) }, [r(a)["display.append"] ? Ye(m.$slots, "display.append", Te(Z({ key: 0 }, c))) : (J(), ze(Ie, { key: 1, color: m.displayAppendIconColor, icon: m.displayAppendIcon, size: "x-small" }, null, 8, ["color", "icon"]))], 6)) : Ve("", !0)]));
} }), cn = rt({ __name: "SaveFieldButtons", props: { loading: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonVariant: {}, cancelButtonTitle: {}, cancelIconColor: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideSaveIcon: { type: Boolean }, cancelIcon: {}, loadingIcon: {}, loadingIconColor: {}, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIconColor: {}, saveIcon: {} }, emits: ["close", "save"], setup(e, { emit: n }) {
  const t = Et(), l = n, a = e, i = ge(Symbol.for("vuetify:icons")), c = f(() => a.error), u = f(() => ({ [`${oe}--save-fields-container`]: !0 })), s = f(() => a.loading), o = lt({ ...t, ...a }), v = f(() => (i == null ? void 0 : i.defaultSet) === "fa" ? "fa-spin" : (i == null ? void 0 : i.defaultSet) === "mdi" ? "mdi-spin" : ""), y = f(() => ((b) => {
    const { cancelButtonVariant: x } = b;
    return { "me-1": x === "elevated", "ms-1": !0 };
  })({ cancelButtonVariant: o.cancelButtonVariant })), m = f(() => at({ icon: a.cancelIcon, iconOptions: i, name: "false" })), g = f(() => at({ icon: a.loadingIcon, iconOptions: i, name: "loading" })), p = f(() => at({ icon: a.saveIcon, iconOptions: i, name: "save" }));
  function C() {
    l("close");
  }
  function h() {
    l("save");
  }
  return (b, x) => (J(), ce("div", Z({ class: r(u) }, b.$attrs), [r(o).hideSaveIcon ? Ve("", !0) : (J(), ze(La, { key: 0, class: "ms-1", color: r(o).saveButtonColor, disabled: r(c), icon: "", size: r(o).saveButtonSize, title: r(s) ? "Loading" : r(o).saveButtonTitle, variant: r(o).saveButtonVariant, onClick: h }, { default: pe(() => [r(s) ? (J(), ze(Ie, { key: 1, class: le(r(v)), color: r(o).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (J(), ze(Ie, { key: 0, color: r(c) ? "error" : r(o).saveIconColor, icon: r(p) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["color", "disabled", "size", "title", "variant"])), r(o).hideCancelIcon ? Ve("", !0) : (J(), ze(La, { key: 1, class: le(r(y)), color: r(o).cancelButtonColor, icon: "", size: r(o).cancelButtonSize, title: r(o).cancelButtonTitle, variant: r(o).cancelButtonVariant, onClick: C }, { default: pe(() => [r(o).hideSaveIcon && r(s) ? (J(), ze(Ie, { key: 0, class: le(r(v)), color: r(o).loadingIconColor, icon: r(g) }, null, 8, ["class", "color", "icon"])) : (J(), ze(Ie, { key: 1, class: "text-default", color: r(o).cancelIconColor, icon: r(m) }, null, 8, ["color", "icon"]))]), _: 1 }, 8, ["class", "color", "size", "title", "variant"]))], 16));
} }), dl = (e) => {
  const { required: n, rules: t } = e;
  let { value: l } = e;
  l = r(l);
  const a = [];
  let i = !1;
  if (n && !l)
    return a.push("Field is required."), { errors: !0, results: a };
  if (t) {
    for (const c of t) {
      const u = (typeof c == "function" ? c : () => c)(l);
      u !== !0 && (typeof u == "string" ? a.push(u) : console.warn(`${u} is not a valid value. Rule functions must return boolean true or a string.`));
    }
    i = a.length > 0;
  }
  return { errors: i, results: a };
}, dn = (e) => {
  const { attrs: n, closeSiblings: t, fieldOnly: l, props: a, showField: i, timeOpened: c } = e;
  let u = c;
  return t && !l && (u = /* @__PURE__ */ new Date()), { settings: { ...n, ...a }, showField: !r(i), timeOpened: u };
}, ia = (e) => {
  const { length: n = 0 } = e;
  let { suffix: t, text: l } = e;
  return l = l.toString(), t = t || "...", l.length > n ? `${l.substring(0, n)}${t}` : l;
}, vn = ["error", "update", "update:closeSiblingFields", "update:model-value"], ks = ["cancelButtonColor", "cancelButtonSize", "cancelButtonTitle", "cancelButtonVariant", "cancelIcon", "cancelIconColor", "closeSiblings", "displayAppendIcon", "displayAppendIconColor", "displayAppendIconSize", "displayAppendInnerIcon", "displayAppendInnerIconColor", "displayAppendInnerIconSize", "displayPrependIcon", "displayPrependIconColor", "displayPrependIconSize", "displayPrependInnerIcon", "displayPrependInnerIconColor", "displayPrependInnerIconSize", "emptyText", "fieldOnly", "hideSaveIcon", "item", "loadingIcon", "loadingIconColor", "loadingWait", "saveButtonColor", "saveButtonSize", "saveButtonTitle", "saveButtonVariant", "saveIcon", "saveIconColor", "tableField", "truncateLength", "truncateSuffix", "underlineColor", "underlineStyle", "underlineWidth", "underlined", "valueColor"], zn = (e) => {
  let n = e;
  return n = Object.entries(n).filter(([t]) => !ks.includes(t)), Object.fromEntries(n);
}, xs = { class: "v-selection-control__wrapper" }, go = rt({ __name: "VInlineCheckbox", props: Qe(Yt({ density: {}, falseIcon: {}, trueIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Oo }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = ge(Symbol.for("vuetify:icons")), s = Rl(), o = e;
  let v = lt({ ...l, ...o, ...c });
  const { cancelButtonColor: y, cancelButtonSize: m, cancelButtonTitle: g, cancelButtonVariant: p, cancelIcon: C, cancelIconColor: h, cardField: b, closeSiblings: x, color: O, fieldOnly: H, hideCancelIcon: $, hideDetails: _, loadingIcon: W, loadingIconColor: T, saveButtonColor: I, saveButtonSize: P, saveButtonTitle: S, saveButtonVariant: w, saveIcon: A, saveIconColor: M } = Bt(v), N = f(() => o.disabled), k = f(() => o.loading), B = D(!1), V = D(!1), F = D(null), G = f(() => zn(v)), L = f(() => ({ ...Jt, ...o.cardProps }));
  K(() => k.value, (re, X) => {
    !re && X && V.value && Pe();
  });
  const z = f(() => at({ icon: o.trueIcon, iconOptions: u, name: "checkboxFalse" })), Q = f(() => at({ icon: o.iconTrue, iconOptions: u, name: "checkboxTrue" })), E = f(() => t.value == v.trueValue), U = f(() => yo({ modelValue: t, trueValue: v.trueValue })), R = f(() => on({ cell: v.cell && !V.value, density: v.density, disabled: N.value, field: "v-checkbox", loading: k.value, loadingWait: v.loadingWait, tableField: v.tableField })), j = f(() => rn({ cell: v.cell, cellUnderlineFullWidth: v.cellUnderlineFullWidth, density: v.density, field: "v-checkbox" })), Y = mo({ density: v.density }), ee = f(() => sn({ active: V.value, name: "checkbox" })), ve = f(() => la("checkbox", v.valueColor, { error: B })), Ce = f(() => un({ name: "checkbox", showField: V.value })), he = f(() => ({})), Re = f(() => aa({ color: v.color, error: B, theme: s, underlineColor: v.underlineColor, underlineStyle: v.underlineStyle, underlineWidth: v.underlineWidth, underlined: v.underlined })), Fe = f(() => Be.value);
  function ke() {
    B.value = !1, Pe();
  }
  const Be = D(), Oe = D(null), xe = D("body"), Ee = Ao();
  function Pe() {
    var X, Se;
    if (N.value || v.loadingWait && k.value)
      return;
    Be.value = Pt({ cardMinWidth: (X = v.cardProps) == null ? void 0 : X.minWidth, cardOffsetX: v.cardOffsetX, cardOffsetY: v.cardOffsetY, cardWidth: (Se = v.cardProps) == null ? void 0 : Se.width, field: Oe.value, name: "checkbox" });
    const re = dn({ attrs: l, closeSiblings: x.value, fieldOnly: v.fieldOnly, props: o, showField: V, timeOpened: F.value });
    v = { ...v, ...re.settings }, V.value = re.showField, F.value = re.timeOpened, ne !== null && x.value && V.value && !v.fieldOnly && ne.emit(re.timeOpened);
  }
  function fe(re) {
    t.value = re, i("update", re), v.loadingWait || Pe();
  }
  let ne, me;
  function De(re) {
    i("update:closeSiblingFields", F), V.value && F.value !== re && Pe();
  }
  return K(() => Ee, () => {
    var re, X;
    Be.value = Pt({ cardMinWidth: (re = v.cardProps) == null ? void 0 : re.minWidth, cardOffsetX: v.cardOffsetX, cardOffsetY: v.cardOffsetY, cardWidth: (X = v.cardProps) == null ? void 0 : X.width, field: Oe.value, name: "checkbox" });
  }, { deep: !0 }), x.value && import("@vueuse/core").then(({ useEventBus: re }) => {
    ne = re(Kt), me = ne.on(De);
  }), Xt(() => {
    me !== void 0 && ne.off(De);
  }), (re, X) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Oe, class: le(r(R)), style: $e(r(he)) }, [!r(V) && !r(v).fieldOnly || r(b) ? (J(), ce("div", { key: 0, class: le(r(j)), onClick: X[2] || (X[2] = (Se) => r(v).cell ? Pe() : void 0) }, [He("div", { class: le(r(Y)), onClick: X[1] || (X[1] = (Se) => r(v).cell ? void 0 : Pe()) }, [He("div", xs, [re.icons ? (J(), ce("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(ve)]), style: $e(r(Re)) }, [d(r(fo), { modelValue: r(U), "onUpdate:modelValue": X[0] || (X[0] = (Se) => At(U) ? U.value = Se : null), "icon-false": r(v).iconFalse, "icon-false-color": r(v).iconFalseColor, "icon-false-title": r(v).iconFalseTitle, "icon-true": r(v).iconTrue, "icon-true-color": r(v).iconTrueColor, "icon-true-title": r(v).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ce("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(ve)]), style: $e(r(Re)) }, Ll(r(E)), 7))])], 2)], 2)) : Ve("", !0), r(V) || r(H) || r(b) ? (J(), ce("div", { key: 1, class: le(r(ee)) }, [(J(), ze(Ot, { disabled: !r(b), to: r(xe) }, [d(br, Z(r(G), { color: r(O), density: r(v).density, disabled: r(k) || r(N), error: r(B), "false-icon": r(z), "false-value": r(v).falseValue, "hide-details": r(_), label: r(v).label, "model-value": r(U), "true-icon": r(Q), "true-value": r(v).trueValue, "onUpdate:modelValue": fe }), vt({ _: 2 }, [ft(r(a), (Se, ue) => ({ name: ue, fn: pe((Ae) => [Ye(re.$slots, ue, Te(We({ ...Ae })))]) })), r(a).append ? void 0 : { name: "append", fn: pe(() => [d(r(cn), { "cancel-button-color": r(y), "cancel-button-size": r(m), "cancel-button-title": r(g), "cancel-button-variant": r(p), "cancel-icon": r(C), "cancel-icon-color": r(h), error: r(B), "field-only": r(H), "hide-cancel-icon": r($), "hide-save-icon": !0, loading: r(k), "loading-icon": r(W), "loading-icon-color": r(T), "save-button-color": r(I), "save-button-size": r(P), "save-button-title": r(S), "save-button-variant": r(w), "save-icon": r(A), "save-icon-color": r(M), onClose: ke, onSave: fe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "model-value", "true-icon", "true-value"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(b) ? (J(), ce("div", { key: 2, class: le(r(Ce)), style: $e(r(Fe)) }, [d(an, Te(We(r(L))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: xe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), ho = rt({ __name: "VInlineCustomField", props: Qe(Yt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...li }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = ge(Symbol.for("vuetify:icons")), s = e;
  let o = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: v, cancelButtonSize: y, cancelButtonTitle: m, cancelButtonVariant: g, cancelIcon: p, cancelIconColor: C, cardField: h, closeSiblings: b, fieldOnly: x, hideCancelIcon: O, hideSaveIcon: H, loadingIcon: $, loadingIconColor: _, saveButtonColor: W, saveButtonSize: T, saveButtonTitle: I, saveButtonVariant: P, saveIcon: S, saveIconColor: w } = Bt(o), A = f(() => s.disabled), M = f(() => s.loading), N = D(!1), k = D(!1), B = D(!1), V = D(null);
  let F = t.value;
  K(() => M.value, (ne, me) => {
    !ne && me && B.value && ke();
  });
  const G = f(() => t.value ? (N.value = !1, o.truncateLength ? ia({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (N.value = !0, o.emptyText)), L = f(() => ({ ...o, loading: M.value, modelValue: t.value, originalValue: F })), z = f(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: G.value, empty: N.value, error: k.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), Q = f(() => ({ ...Jt, ...s.cardProps })), E = f(() => on({ cell: o.cell && !B.value, density: o.density, disabled: A.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: M.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), U = f(() => rn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), R = ul({ density: o.density, variant: o.variant }), j = f(() => sn({ active: B.value, name: "text-field" })), Y = f(() => un({ name: "custom-field", showField: B.value })), ee = f(() => ({})), ve = f(() => he.value);
  function Ce() {
    k.value = !1, t.value = F, ke();
  }
  const he = D(), Re = D(null), Fe = D("body");
  function ke() {
    var me, De;
    if (A.value || o.loadingWait && M.value)
      return;
    he.value = Pt({ cardMinWidth: (me = o.cardProps) == null ? void 0 : me.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (De = o.cardProps) == null ? void 0 : De.width, field: Re.value });
    const ne = dn({ attrs: l, closeSiblings: b.value, fieldOnly: o.fieldOnly, props: s, showField: B, timeOpened: V.value });
    o = { ...o, ...ne.settings }, B.value = ne.showField, V.value = ne.timeOpened, Ee !== null && b.value && B.value && !o.fieldOnly && Ee.emit(ne.timeOpened);
  }
  const Be = D();
  function Oe() {
    const ne = dl({ required: o.required, rules: o.rules, value: t });
    return k.value = ne.errors, Be.value = ne.results, ne.results;
  }
  function xe() {
    k.value ? k.value = !0 : (F = t.value, i("update", t.value), o.loadingWait || ke());
  }
  let Ee, Pe;
  function fe(ne) {
    i("update:closeSiblingFields", V), B.value && V.value !== ne && Ce();
  }
  return K(() => B.value, () => {
    B.value && Oe();
  }), K(() => t.value, () => {
    B.value && Oe();
  }), b.value && import("@vueuse/core").then(({ useEventBus: ne }) => {
    Ee = ne(Kt), Pe = Ee.on(fe);
  }), Xt(() => {
    Pe !== void 0 && Ee.off(fe);
  }), (ne, me) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Re, class: le(r(E)), style: $e(r(ee)) }, [!r(B) && !r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 0, class: le(r(U)) }, [He("div", { class: le(r(R)) }, [d(r(cl), Z(r(z), { onToggleField: ke }), vt({ _: 2 }, [ft(r(a), (De, re) => ({ name: re, fn: pe((X) => [Ye(ne.$slots, re, Te(We({ ...X })))]) }))]), 1040)], 2)], 2)) : Ve("", !0), r(B) || r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 1, class: le(["d-flex align-center py-2", r(j)]) }, [(J(), ze(Ot, { disabled: !r(h), to: r(Fe) }, [Ye(ne.$slots, "default", Te(We(r(L)))), d(r(cn), { "cancel-button-color": r(v), "cancel-button-size": r(y), "cancel-button-title": r(m), "cancel-button-variant": r(g), "cancel-icon": r(p), "cancel-icon-color": r(C), error: r(k), "field-only": r(x), "hide-cancel-icon": r(O), "hide-save-icon": r(H), loading: r(M), "loading-icon": r($), "loading-icon-color": r(_), "save-button-color": r(W), "save-button-size": r(T), "save-button-title": r(I), "save-button-variant": r(P), "save-icon": r(S), "save-icon-color": r(w), onClose: Ce, onSave: xe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(h) ? (J(), ce("div", { key: 2, class: le(r(Y)), style: $e(r(ve)) }, [d(an, Te(We(r(Q))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: Fe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), po = ((e, n) => {
  const t = e.__vccOpts || e;
  for (const [l, a] of n)
    t[l] = a;
  return t;
})(rt({ __name: "VInlineSelect", props: Qe(Yt({ clearIcon: {}, clearable: {}, density: {}, hideSelected: {}, itemTitle: {}, itemValue: {}, items: {}, menu: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...To }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = ge(Symbol.for("vuetify:icons")), s = e;
  let o = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: v, cancelButtonSize: y, cancelButtonTitle: m, cancelButtonVariant: g, cancelIcon: p, cancelIconColor: C, cardField: h, closeSiblings: b, color: x, fieldOnly: O, hideCancelIcon: H, hideDetails: $, hideSaveIcon: _, loadingIcon: W, loadingIconColor: T, saveButtonColor: I, saveButtonSize: P, saveButtonTitle: S, saveButtonVariant: w, saveIcon: A, saveIconColor: M, valueColor: N } = Bt(o), k = f(() => s.disabled), B = f(() => s.loading), V = D(!1), F = D(!1), G = D(), L = D(!1), z = D(null);
  let Q = t.value;
  K(() => B.value, (ue, Ae) => {
    !ue && Ae && L.value && Pe();
  });
  const E = f(() => at({ icon: s.clearIcon, iconOptions: u, name: "clear" })), U = f(() => t.value && t.value[o.itemTitle] ? (V.value = !1, t.value[o.itemTitle]) : t.value ? t.value : (V.value = !0, o.emptyText)), R = f(() => zn(o)), j = f(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: U.value, empty: V.value, error: F.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: N.value })), Y = f(() => ({ ...Jt, ...s.cardProps }));
  ot(() => {
    G.value = o.items || [];
  });
  const ee = f(() => on({ cell: o.cell && !L.value, density: o.density, disabled: k.value, field: "v-select", iconSet: u == null ? void 0 : u.defaultSet, loading: B.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), ve = f(() => rn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-select" })), Ce = ul({ density: o.density, variant: o.variant }), he = f(() => sn({ active: L.value, name: "select" })), Re = f(() => un({ name: "select", showField: L.value })), Fe = f(() => ({})), ke = f(() => Oe.value);
  function Be() {
    F.value = !1, t.value = Q, Pe();
  }
  const Oe = D(), xe = D(null), Ee = D("body");
  function Pe() {
    var Ae, je;
    if (k.value || o.loadingWait && B.value)
      return;
    Oe.value = Pt({ cardMinWidth: (Ae = o.cardProps) == null ? void 0 : Ae.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (je = o.cardProps) == null ? void 0 : je.width, field: xe.value });
    const ue = dn({ attrs: l, closeSiblings: b.value, fieldOnly: o.fieldOnly, props: s, showField: L, timeOpened: z.value });
    o = { ...o, ...ue.settings }, L.value = ue.showField, z.value = ue.timeOpened, re !== null && b.value && L.value && !o.fieldOnly && re.emit(ue.timeOpened);
  }
  const fe = D(), ne = f(() => fe.value);
  function me() {
    const ue = dl({ required: o.required, rules: o.rules, value: t });
    return F.value = ue.errors, fe.value = ue.results, ue.results;
  }
  function De() {
    Q = t.value, i("update", t.value), o.loadingWait || Pe();
  }
  let re, X;
  function Se(ue) {
    i("update:closeSiblingFields", z), L.value && z.value !== ue && Be();
  }
  return K(() => L.value, () => {
    L.value && me();
  }), K(() => t.value, () => {
    L.value && me();
  }), b.value && import("@vueuse/core").then(({ useEventBus: ue }) => {
    re = ue(Kt), X = re.on(Se);
  }), Xt(() => {
    X !== void 0 && re.off(Se);
  }), (ue, Ae) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: xe, class: le(r(ee)), style: $e(r(Fe)) }, [!r(L) && !r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 0, class: le(r(ve)) }, [He("div", { class: le(r(Ce)) }, [d(r(cl), Z(r(j), { onToggleField: Pe }), vt({ _: 2 }, [ft(r(a), (je, fn) => ({ name: fn, fn: pe((vl) => [Ye(ue.$slots, fn, Te(We({ ...vl })), void 0, !0)]) }))]), 1040)], 2)], 2)) : Ve("", !0), r(L) || r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 1, class: le(r(he)) }, [(J(), ze(Ot, { disabled: !r(h), to: r(Ee) }, [d(fs, Z(r(R), { modelValue: t.value, "onUpdate:modelValue": Ae[0] || (Ae[0] = (je) => t.value = je), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(E), clearable: r(o).clearable, color: r(x), density: r(o).density, disabled: r(B) || r(k), error: r(F), "error-messages": r(ne), "hide-details": r($), "hide-selected": r(o).hideSelected, "item-title": r(o).itemTitle, "item-value": r(o).itemValue, items: r(G), label: r(o).label, loading: r(B), menu: r(o).menu && !r(o).fieldOnly && r(L), variant: r(o).variant, width: "100%", onKeyup: Hn(Be, ["esc"]) }), vt({ _: 2 }, [ft(r(a), (je, fn) => ({ name: fn, fn: pe((vl) => [Ye(ue.$slots, fn, Te(We({ ...vl })), void 0, !0)]) })), r(a).append ? void 0 : { name: "append", fn: pe(() => [d(r(cn), { "cancel-button-color": r(v), "cancel-button-size": r(y), "cancel-button-title": r(m), "cancel-button-variant": r(g), "cancel-icon": r(p), "cancel-icon-color": r(C), error: r(F), "field-only": r(O), "hide-cancel-icon": r(H), "hide-save-icon": r(_), loading: r(B), "loading-icon": r(W), "loading-icon-color": r(T), "save-button-color": r(I), "save-button-size": r(P), "save-button-title": r(S), "save-button-variant": r(w), "save-icon": r(A), "save-icon-color": r(M), onClose: Be, onSave: De }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "clearable", "color", "density", "disabled", "error", "error-messages", "hide-details", "hide-selected", "item-title", "item-value", "items", "label", "loading", "menu", "variant"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(h) ? (J(), ce("div", { key: 2, class: le(r(Re)), style: $e(r(ke)) }, [d(an, Te(We(r(Y))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: Ee }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), [["__scopeId", "data-v-0716e076"]]), ws = { class: "v-selection-control__wrapper" }, Co = rt({ __name: "VInlineSwitch", props: Qe(Yt({ density: {}, falseIcon: {}, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, falseValue: { type: [Boolean, String] }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, iconFalse: {}, iconFalseColor: {}, iconFalseTitle: {}, iconTrue: {}, iconTrueColor: {}, iconTrueTitle: {}, icons: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, trueValue: { type: [Boolean, String] }, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ..._o }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = Rl(), s = e;
  let o = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: v, cancelButtonSize: y, cancelButtonTitle: m, cancelButtonVariant: g, cancelIcon: p, cancelIconColor: C, cardField: h, closeSiblings: b, color: x, fieldOnly: O, hideCancelIcon: H, hideDetails: $, loadingIcon: _, loadingIconColor: W, saveButtonColor: T, saveButtonSize: I, saveButtonTitle: P, saveButtonVariant: S, saveIcon: w, saveIconColor: A } = Bt(o), M = f(() => s.disabled), N = f(() => s.loading), k = D(!1), B = D(!1), V = D(null), F = f(() => zn(o)), G = f(() => ({ ...Jt, ...s.cardProps }));
  K(() => N.value, (fe, ne) => {
    !fe && ne && B.value && Be();
  });
  const L = f(() => t.value == o.trueValue), z = f(() => yo({ modelValue: t, trueValue: o.trueValue })), Q = f(() => on({ cell: o.cell && !B.value, density: o.density, disabled: M.value, field: "v-switch", loading: N.value, loadingWait: o.loadingWait, tableField: o.tableField })), E = f(() => rn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-switch" })), U = mo({ density: o.density }), R = f(() => sn({ active: B.value, name: "switch" })), j = f(() => la("switch", o.valueColor, { error: k })), Y = f(() => un({ name: "switch", showField: B.value })), ee = f(() => ({})), ve = f(() => aa({ color: o.color, error: k, theme: u, underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined })), Ce = f(() => Re.value);
  function he() {
    k.value = !1, Be();
  }
  const Re = D(), Fe = D(null), ke = D("body");
  function Be() {
    var ne, me;
    if (M.value || o.loadingWait && N.value)
      return;
    Re.value = Pt({ cardMinWidth: (ne = o.cardProps) == null ? void 0 : ne.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (me = o.cardProps) == null ? void 0 : me.width, field: Fe.value });
    const fe = dn({ attrs: l, closeSiblings: b.value, fieldOnly: o.fieldOnly, props: s, showField: B.value, timeOpened: V.value });
    o = { ...o, ...fe.settings }, B.value = fe.showField, V.value = fe.timeOpened, xe !== null && b.value && B.value && !o.fieldOnly && xe.emit(fe.timeOpened);
  }
  function Oe(fe) {
    t.value = fe, i("update", fe), o.loadingWait || Be();
  }
  let xe, Ee;
  function Pe(fe) {
    i("update:closeSiblingFields", V), B.value && V.value !== fe && Be();
  }
  return b.value && import("@vueuse/core").then(({ useEventBus: fe }) => {
    xe = fe(Kt), Ee = xe.on(Pe);
  }), Xt(() => {
    Ee !== void 0 && xe.off(Pe);
  }), (fe, ne) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Fe, class: le(r(Q)), style: $e(r(ee)) }, [!r(B) && !r(o).fieldOnly || r(o).cardField ? (J(), ce("div", { key: 0, class: le(r(E)), onClick: ne[2] || (ne[2] = (me) => r(o).cell ? Be() : void 0) }, [He("div", { class: le(r(U)), onClick: ne[1] || (ne[1] = (me) => r(o).cell ? void 0 : Be()) }, [He("div", ws, [fe.icons ? (J(), ce("div", { key: 0, class: le(["v-inline-fields--boolean-icons-container", r(j)]), style: $e(r(ve)) }, [d(r(fo), { modelValue: r(z), "onUpdate:modelValue": ne[0] || (ne[0] = (me) => At(z) ? z.value = me : null), "icon-false": r(o).iconFalse, "icon-false-color": r(o).iconFalseColor, "icon-false-title": r(o).iconFalseTitle, "icon-true": r(o).iconTrue, "icon-true-color": r(o).iconTrueColor, "icon-true-title": r(o).iconTrueTitle }, null, 8, ["modelValue", "icon-false", "icon-false-color", "icon-false-title", "icon-true", "icon-true-color", "icon-true-title"])], 6)) : (J(), ce("div", { key: 1, class: le(["d-inline-flex align-center justify-center", r(j)]), style: $e(r(ve)) }, Ll(r(L)), 7))])], 2)], 2)) : Ve("", !0), r(B) || r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 1, class: le(r(R)) }, [(J(), ze(Ot, { disabled: !r(h), to: r(ke) }, [d(Ss, Z(r(F), { color: r(x), density: r(o).density, disabled: r(N) || r(M), error: r(k), "false-icon": r(o).falseIcon, "false-value": r(o).falseValue, "hide-details": r($), label: r(o).label, loading: r(N), "model-value": r(z), "true-value": r(o).trueValue, "onUpdate:modelValue": Oe }), vt({ _: 2 }, [ft(r(a), (me, De) => ({ name: De, fn: pe((re) => [Ye(fe.$slots, De, Te(We({ ...re })))]) })), r(a).append ? void 0 : { name: "append", fn: pe(() => [d(r(cn), { "cancel-button-color": r(v), "cancel-button-size": r(y), "cancel-button-title": r(m), "cancel-button-variant": r(g), "cancel-icon": r(p), "cancel-icon-color": r(C), class: "ms-3", error: r(k), "field-only": r(O), "hide-cancel-icon": r(H), "hide-save-icon": !0, loading: r(N), "loading-icon": r(_), "loading-icon-color": r(W), "save-button-color": r(T), "save-button-size": r(I), "save-button-title": r(P), "save-button-variant": r(S), "save-icon": r(w), "save-icon-color": r(A), onClose: he, onSave: Oe }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["color", "density", "disabled", "error", "false-icon", "false-value", "hide-details", "label", "loading", "model-value", "true-value"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(h) ? (J(), ce("div", { key: 2, class: le(r(Y)), style: $e(r(Ce)) }, [d(an, Te(We(r(G))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: ke }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), bo = rt({ __name: "VInlineTextField", props: Qe(Yt({ clearIcon: {}, density: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...li }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = ge(Symbol.for("vuetify:icons")), s = e;
  let o = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: v, cancelButtonSize: y, cancelButtonTitle: m, cancelButtonVariant: g, cancelIcon: p, cancelIconColor: C, cardField: h, closeSiblings: b, color: x, fieldOnly: O, hideCancelIcon: H, hideDetails: $, hideSaveIcon: _, loadingIcon: W, loadingIconColor: T, saveButtonColor: I, saveButtonSize: P, saveButtonTitle: S, saveButtonVariant: w, saveIcon: A, saveIconColor: M } = Bt(o), N = f(() => s.disabled), k = f(() => s.loading), B = D(!1), V = D(!1), F = D(!1), G = D(null);
  let L = t.value;
  K(() => k.value, (X, Se) => {
    !X && Se && F.value && xe();
  });
  const z = f(() => at({ icon: s.clearIcon, iconOptions: u, name: "clear" })), Q = f(() => t.value ? (B.value = !1, o.truncateLength ? ia({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (B.value = !0, o.emptyText)), E = f(() => zn(o)), U = f(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: Q.value, empty: B.value, error: V.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), R = f(() => ({ ...Jt, ...s.cardProps })), j = f(() => on({ cell: o.cell && !F.value, density: o.density, disabled: N.value, field: "v-text-field", iconSet: u == null ? void 0 : u.defaultSet, loading: k.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), Y = f(() => rn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-text-field" })), ee = ul({ density: o.density, variant: o.variant }), ve = f(() => sn({ active: F.value, name: "text-field" })), Ce = f(() => un({ name: "text-field", showField: F.value })), he = f(() => ({})), Re = f(() => ke.value);
  function Fe() {
    V.value = !1, t.value = L, xe();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function xe() {
    var Se, ue;
    if (N.value || o.loadingWait && k.value)
      return;
    ke.value = Pt({ cardMinWidth: (Se = o.cardProps) == null ? void 0 : Se.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (ue = o.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const X = dn({ attrs: l, closeSiblings: b.value, fieldOnly: o.fieldOnly, props: s, showField: F, timeOpened: G.value });
    o = { ...o, ...X.settings }, F.value = X.showField, G.value = X.timeOpened, me !== null && b.value && F.value && !o.fieldOnly && me.emit(X.timeOpened);
  }
  const Ee = D(), Pe = f(() => Ee.value);
  function fe() {
    const X = dl({ required: o.required, rules: o.rules, value: t });
    return V.value = X.errors, Ee.value = X.results, X.results;
  }
  function ne() {
    V.value ? V.value = !0 : (L = t.value, i("update", t.value), o.loadingWait || xe());
  }
  let me, De;
  function re(X) {
    i("update:closeSiblingFields", G), F.value && G.value !== X && Fe();
  }
  return K(() => F.value, () => {
    F.value && fe();
  }), K(() => t.value, () => {
    F.value && fe();
  }), b.value && import("@vueuse/core").then(({ useEventBus: X }) => {
    me = X(Kt), De = me.on(re);
  }), Xt(() => {
    De !== void 0 && me.off(re);
  }), (X, Se) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: le(r(j)), style: $e(r(he)) }, [!r(F) && !r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 0, class: le(r(Y)) }, [He("div", { class: le(r(ee)) }, [d(r(cl), Z(r(U), { onToggleField: xe }), vt({ _: 2 }, [ft(r(a), (ue, Ae) => ({ name: Ae, fn: pe((je) => [Ye(X.$slots, Ae, Te(We({ ...je })))]) }))]), 1040)], 2)], 2)) : Ve("", !0), r(F) || r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 1, class: le(r(ve)) }, [(J(), ze(Ot, { disabled: !r(h), to: r(Oe) }, [d($l, Z(r(E), { modelValue: t.value, "onUpdate:modelValue": Se[0] || (Se[0] = (ue) => t.value = ue), autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(z), color: r(x), density: r(o).density, disabled: r(k) || r(N), error: r(V), "error-messages": r(Pe), "hide-details": r($), label: r(o).label, loading: r(k), variant: r(o).variant, width: "100%", onKeyup: [Hn(ne, ["enter"]), Hn(Fe, ["esc"])] }), vt({ _: 2 }, [ft(r(a), (ue, Ae) => ({ name: Ae, fn: pe((je) => [Ye(X.$slots, Ae, Te(We({ ...je })))]) })), r(a).append ? void 0 : { name: "append", fn: pe(() => [d(r(cn), { "cancel-button-color": r(v), "cancel-button-size": r(y), "cancel-button-title": r(m), "cancel-button-variant": r(g), "cancel-icon": r(p), "cancel-icon-color": r(C), error: r(V), "field-only": r(O), "hide-cancel-icon": r(H), "hide-save-icon": r(_), loading: r(k), "loading-icon": r(W), "loading-icon-color": r(T), "save-button-color": r(I), "save-button-size": r(P), "save-button-title": r(S), "save-button-variant": r(w), "save-icon": r(A), "save-icon-color": r(M), onClose: Fe, onSave: ne }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "variant"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(h) ? (J(), ce("div", { key: 2, class: le(r(Ce)), style: $e(r(Re)) }, [d(an, Te(We(r(R))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), So = rt({ __name: "VInlineTextarea", props: Qe(Yt({ autoGrow: {}, clearIcon: {}, density: {}, rows: {}, rules: {}, variant: {}, autofocus: { type: Boolean }, cancelButtonColor: {}, cancelButtonSize: {}, cancelButtonTitle: {}, cancelButtonVariant: {}, cancelIcon: {}, cancelIconColor: {}, cardField: { type: Boolean }, cardOffsetX: {}, cardOffsetY: {}, cardProps: {}, cell: { type: Boolean }, cellUnderlineFullWidth: { type: Boolean }, closeSiblings: { type: Boolean }, color: {}, disabled: { type: Boolean }, displayAppendIcon: {}, displayAppendIconColor: {}, displayAppendIconSize: {}, displayAppendInnerIcon: {}, displayAppendInnerIconColor: {}, displayAppendInnerIconSize: {}, displayPrependIcon: {}, displayPrependIconColor: {}, displayPrependIconSize: {}, displayPrependInnerIcon: {}, displayPrependInnerIconColor: {}, displayPrependInnerIconSize: {}, emptyText: {}, error: { type: Boolean }, fieldOnly: { type: Boolean }, hideCancelIcon: { type: Boolean }, hideDetails: { type: Boolean }, hideSaveIcon: { type: Boolean }, item: {}, label: {}, loading: { type: Boolean }, loadingIcon: {}, loadingIconColor: {}, loadingWait: { type: Boolean }, name: {}, required: { type: Boolean }, saveButtonColor: {}, saveButtonSize: {}, saveButtonTitle: {}, saveButtonVariant: {}, saveIcon: {}, saveIconColor: {}, tableField: { type: Boolean }, truncateLength: {}, truncateSuffix: {}, underlineColor: {}, underlineStyle: {}, underlineWidth: {}, underlined: { type: Boolean }, valueColor: {} }, { ...Eo }), { modelValue: {} }), emits: Qe([...vn], ["update:modelValue"]), setup(e, { emit: n }) {
  const t = Tt(e, "modelValue"), l = Et(), a = _t(), i = n, c = ge(Rt, {}), u = ge(Symbol.for("vuetify:icons")), s = e;
  let o = lt({ ...l, ...s, ...c });
  const { cancelButtonColor: v, cancelButtonSize: y, cancelButtonTitle: m, cancelButtonVariant: g, cancelIcon: p, cancelIconColor: C, cardField: h, closeSiblings: b, color: x, fieldOnly: O, hideCancelIcon: H, hideDetails: $, hideSaveIcon: _, loadingIcon: W, loadingIconColor: T, saveButtonColor: I, saveButtonSize: P, saveButtonTitle: S, saveButtonVariant: w, saveIcon: A, saveIconColor: M } = Bt(o), N = f(() => s.disabled), k = f(() => s.loading), B = D(!1), V = D(!1), F = D(!1), G = D(null);
  let L = t.value;
  K(() => k.value, (X, Se) => {
    !X && Se && F.value && xe();
  });
  const z = f(() => at({ icon: s.clearIcon, iconOptions: u, name: "clear" })), Q = f(() => t.value ? (B.value = !1, o.truncateLength ? ia({ length: o.truncateLength, suffix: o.truncateSuffix, text: t.value }) : t.value) : (B.value = !0, o.emptyText)), E = f(() => zn(o)), U = f(() => ({ color: o.color, displayAppendIcon: s.displayAppendIcon, displayAppendIconColor: s.displayAppendIconColor, displayAppendIconSize: s.displayAppendIconSize, displayAppendInnerIcon: s.displayAppendInnerIcon, displayAppendInnerIconColor: s.displayAppendInnerIconColor, displayAppendInnerIconSize: s.displayAppendInnerIconSize, displayPrependIcon: s.displayPrependIcon, displayPrependIconColor: s.displayPrependIconColor, displayPrependIconSize: s.displayPrependIconSize, displayPrependInnerIcon: s.displayPrependInnerIcon, displayPrependInnerIconColor: s.displayPrependInnerIconColor, displayPrependInnerIconSize: s.displayPrependInnerIconSize, displayValue: Q.value, empty: B.value, error: V.value, field: "v-text-field", underlineColor: o.underlineColor, underlineStyle: o.underlineStyle, underlineWidth: o.underlineWidth, underlined: o.underlined, valueColor: o.valueColor })), R = f(() => ({ ...Jt, ...s.cardProps })), j = f(() => on({ cell: o.cell && !F.value, density: o.density, disabled: N.value, field: "v-textarea", iconSet: u == null ? void 0 : u.defaultSet, loading: k.value, loadingWait: o.loadingWait, tableField: o.tableField, variant: o.variant })), Y = f(() => rn({ cell: o.cell, cellUnderlineFullWidth: o.cellUnderlineFullWidth, density: o.density, field: "v-textarea" })), ee = ul({ density: o.density, variant: o.variant }), ve = f(() => sn({ active: F.value, name: "textarea" })), Ce = f(() => un({ name: "textarea", showField: F.value })), he = f(() => ({})), Re = f(() => ke.value);
  function Fe() {
    V.value = !1, t.value = L, xe();
  }
  const ke = D(), Be = D(null), Oe = D("body");
  function xe() {
    var Se, ue;
    if (N.value || o.loadingWait && k.value)
      return;
    ke.value = Pt({ cardMinWidth: (Se = o.cardProps) == null ? void 0 : Se.minWidth, cardOffsetX: o.cardOffsetX, cardOffsetY: o.cardOffsetY, cardWidth: (ue = o.cardProps) == null ? void 0 : ue.width, field: Be.value });
    const X = dn({ attrs: l, closeSiblings: b.value, fieldOnly: o.fieldOnly, props: s, showField: F, timeOpened: G.value });
    o = { ...o, ...X.settings }, F.value = X.showField, G.value = X.timeOpened, me !== null && b.value && F.value && !o.fieldOnly && me.emit(X.timeOpened);
  }
  const Ee = D(), Pe = f(() => Ee.value);
  function fe() {
    const X = dl({ required: o.required, rules: o.rules, value: t });
    return V.value = X.errors, Ee.value = X.results, X.results;
  }
  function ne() {
    L = t.value, i("update", t.value), o.loadingWait || xe();
  }
  let me, De;
  function re(X) {
    i("update:closeSiblingFields", G), F.value && G.value !== X && Fe();
  }
  return K(() => F.value, () => {
    F.value && fe();
  }), K(() => t.value, () => {
    F.value && fe();
  }), b.value && import("@vueuse/core").then(({ useEventBus: X }) => {
    me = X(Kt), De = me.on(re);
  }), Xt(() => {
    De !== void 0 && me.off(re);
  }), (X, Se) => (J(), ce("div", { ref_key: "inlineFieldsContainer", ref: Be, class: le(r(j)), style: $e(r(he)) }, [!r(F) && !r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 0, class: le(r(Y)) }, [He("div", { class: le(r(ee)) }, [d(r(cl), Z(r(U), { onToggleField: xe }), vt({ _: 2 }, [ft(r(a), (ue, Ae) => ({ name: Ae, fn: pe((je) => [Ye(X.$slots, Ae, Te(We({ ...je })))]) }))]), 1040)], 2)], 2)) : Ve("", !0), r(F) || r(o).fieldOnly || r(h) ? (J(), ce("div", { key: 1, class: le(r(ve)) }, [(J(), ze(Ot, { disabled: !r(h), to: r(Oe) }, [d(Bs, Z(r(E), { modelValue: t.value, "onUpdate:modelValue": Se[0] || (Se[0] = (ue) => t.value = ue), "auto-grow": r(o).autoGrow, autofocus: !r(o).fieldOnly || r(o).autofocus, "clear-icon": r(z), color: r(x), density: r(o).density, disabled: r(k) || r(N), error: r(V), "error-messages": r(Pe), "hide-details": r($), label: r(o).label, loading: r(k), rows: r(o).rows, variant: r(o).variant, width: "100%", onKeyup: Hn(Fe, ["esc"]) }), vt({ _: 2 }, [ft(r(a), (ue, Ae) => ({ name: Ae, fn: pe((je) => [Ye(X.$slots, Ae, Te(We({ ...je })))]) })), r(a).append ? void 0 : { name: "append", fn: pe(() => [d(r(cn), { "cancel-button-color": r(v), "cancel-button-size": r(y), "cancel-button-title": r(m), "cancel-button-variant": r(g), "cancel-icon": r(p), "cancel-icon-color": r(C), error: r(V), "field-only": r(O), "hide-cancel-icon": r(H), "hide-save-icon": r(_), loading: r(k), "loading-icon": r(W), "loading-icon-color": r(T), "save-button-color": r(I), "save-button-size": r(P), "save-button-title": r(S), "save-button-variant": r(w), "save-icon": r(A), "save-icon-color": r(M), onClose: Fe, onSave: ne }, null, 8, ["cancel-button-color", "cancel-button-size", "cancel-button-title", "cancel-button-variant", "cancel-icon", "cancel-icon-color", "error", "field-only", "hide-cancel-icon", "hide-save-icon", "loading", "loading-icon", "loading-icon-color", "save-button-color", "save-button-size", "save-button-title", "save-button-variant", "save-icon", "save-icon-color"])]), key: "0" }]), 1040, ["modelValue", "auto-grow", "autofocus", "clear-icon", "color", "density", "disabled", "error", "error-messages", "hide-details", "label", "loading", "rows", "variant"])], 8, ["disabled", "to"]))], 2)) : Ve("", !0), r(h) ? (J(), ce("div", { key: 2, class: le(r(Ce)), style: $e(r(Re)) }, [d(an, Te(We(r(R))), { default: pe(() => [d(Lt, null, { default: pe(() => [He("div", { ref_key: "cardFieldRef", ref: Oe }, null, 512)]), _: 1 })]), _: 1 }, 16)], 6)) : Ve("", !0)], 6));
} }), Rt = Symbol();
function Os(e = {}) {
  return (n) => {
    n.provide(Rt, e), n.component("VInlineCheckbox", go), n.component("VInlineCustomField", ho), n.component("VInlineSelect", po), n.component("VInlineSwitch", Co), n.component("VInlineTextField", bo), n.component("VInlineTextarea", So);
  };
}
const Ts = { VInlineCheckbox: go, VInlineCustomField: ho, VInlineSelect: po, VInlineSwitch: Co, VInlineTextField: bo, VInlineTextarea: So };
export {
  go as VInlineCheckbox,
  ho as VInlineCustomField,
  po as VInlineSelect,
  Co as VInlineSwitch,
  bo as VInlineTextField,
  So as VInlineTextarea,
  Os as createVInlineFields,
  Ts as default,
  Rt as globalOptions
};
(function(){"use strict";try{if(typeof document<"u"){var i=document.createElement("style");i.appendChild(document.createTextNode(":root{--v-inline-fields-top-padding-compact: 13px;--v-inline-fields-top-padding-comfortable: 17px;--v-inline-fields-top-padding-default: 21px;--v-inline-fields-input-height: 24px;--v-inline-fields-density-compact-height: 32px;--v-inline-fields-density-comfortable-height: 40px;--v-inline-fields-grey: #909090}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append{padding-top:0!important}.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-field__clearable .v-icon,.v-inline-fields--container-v-select-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-select-compact-underlined .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-plain .v-input__control .v-input__append .v-icon,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control .v-input__append .v-icon{font-size:1rem!important}.v-inline-fields{position:relative}.v-inline-fields--display-container *{align-items:center;display:flex}.v-inline-fields--display-container-cell{cursor:pointer;display:block;max-height:unset!important}.v-inline-fields--display-container-cell>div{width:100%}.v-inline-fields--display-container-cell-underline-full-width .v-inline-fields--display-value{width:100%}.v-inline-fields--display-container-cell .v-inline-fields--selection-control .v-inline-fields--display-value{justify-content:center}.v-inline-fields--display-container-cell,.v-inline-fields--display-container-cell .v-input,.v-inline-fields--display-container-cell .v-inline-fields--display-wrapper,.v-inline-fields--display-container-cell .v-selection-control__wrapper{height:100%!important;width:100%}.v-inline-fields--display-value{cursor:pointer;letter-spacing:.009375em!important}.v-inline-fields--display-value-empty{color:var(--v-inline-fields-grey);font-style:italic}.v-inline-fields--display-value-checkbox,.v-inline-fields--display-value-switch{padding-bottom:2px;padding-top:6px}.v-inline-fields--display-append-icon,.v-inline-fields--display-prepend-icon,.v-inline-fields--display-append-inner-icon,.v-inline-fields--display-prepend-inner-icon{align-items:flex-end;display:inline-flex}.v-inline-fields--container-cell{height:100%;width:100%}.v-inline-fields--container-disabled .v-inline-fields--display-value{cursor:default!important;opacity:var(--v-disabled-opacity)}.v-inline-fields--container-loading .v-inline-fields--display-value{cursor:wait!important}.v-inline-fields--container-icon-set-fa .v-field__clearable{font-size:.8rem}.v-inline-fields--container-icon-set-fa .v-field__append-inner{align-items:flex-end;padding-bottom:0!important}.v-inline-fields--container-v-select-compact-plain .v-input,.v-inline-fields--container-v-select-compact-underlined .v-input,.v-inline-fields--container-v-text-field-compact-plain .v-input,.v-inline-fields--container-v-text-field-compact-underlined .v-input{height:var(--v-inline-fields-density-compact-height);max-height:var(--v-inline-fields-density-compact-height)}.v-inline-fields--container-v-select-compact-plain .v-input__control,.v-inline-fields--container-v-select-compact-underlined .v-input__control,.v-inline-fields--container-v-text-field-compact-plain .v-input__control,.v-inline-fields--container-v-text-field-compact-underlined .v-input__control{padding-bottom:4px}.v-inline-fields--container-v-select-compact-plain .v-input>div,.v-inline-fields--container-v-select-compact-underlined .v-input>div,.v-inline-fields--container-v-text-field-compact-plain .v-input>div,.v-inline-fields--container-v-text-field-compact-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-compact-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-field__input input{padding-bottom:10px}.v-inline-fields--container-v-select-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-compact-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-compact-underlined .v-input .v-select__selection{align-items:center;padding-bottom:10px}.v-inline-fields--container-v-select-comfortable-plain .v-input,.v-inline-fields--container-v-select-comfortable-underlined .v-input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input{height:var(--v-inline-fields-density-comfortable-height);max-height:var(--v-inline-fields-density-comfortable-height)}.v-inline-fields--container-v-select-comfortable-plain .v-input__control,.v-inline-fields--container-v-select-comfortable-underlined .v-input__control,.v-inline-fields--container-v-text-field-comfortable-plain .v-input__control,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input__control{padding-bottom:8px}.v-inline-fields--container-v-select-comfortable-plain .v-input>div,.v-inline-fields--container-v-select-comfortable-underlined .v-input>div,.v-inline-fields--container-v-text-field-comfortable-plain .v-input>div,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input>div{height:inherit!important;max-height:inherit!important}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input{padding-top:0}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-field__input input,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-field__input input{padding-bottom:6px}.v-inline-fields--container-v-select-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-select-comfortable-underlined .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-plain .v-input .v-select__selection,.v-inline-fields--container-v-text-field-comfortable-underlined .v-input .v-select__selection{align-items:center;padding-bottom:6px}.v-inline-fields--container-v-select-compact-plain .v-field__append-inner,.v-inline-fields--container-v-select-compact-underlined .v-field__append-inner{padding-top:4px!important}.v-inline-fields--container-v-select-comfortable-plain .v-field__append-inner,.v-inline-fields--container-v-select-comfortable-underlined .v-field__append-inner{padding-top:8px!important}.v-inline-fields--container-v-textarea .v-inline-fields--save-fields-container{align-items:flex-end}.v-inline-fields--container-v-select,.v-inline-fields--container-v-textarea,.v-inline-fields--container-v-text-field{width:100%}.v-inline-fields--container-v-checkbox .v-input,.v-inline-fields--container-v-switch .v-input{align-items:center;display:flex;padding-bottom:0}.v-inline-fields--container-v-checkbox .v-input__append,.v-inline-fields--container-v-switch .v-input__append{margin-inline-start:0!important;margin-left:0;padding-bottom:0!important}.v-inline-fields--container-v-checkbox .v-selection-control,.v-inline-fields--container-v-switch .v-selection-control{min-height:unset}.v-inline-fields--container-v-checkbox .v-inline-fields--save-fields-container,.v-inline-fields--container-v-switch .v-inline-fields--save-fields-container{align-items:center!important}.v-inline-fields--container .v-input__append,.v-inline-fields--container .v-input__prepend,.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-top:0!important}.v-inline-fields--container .v-input__append .v-icon,.v-inline-fields--container .v-input__prepend .v-icon,.v-inline-fields--container .v-field__append-inner .v-icon,.v-inline-fields--container .v-field__prepend-inner .v-icon{font-size:1rem!important}.v-inline-fields--container .v-field__append-inner,.v-inline-fields--container .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-compact .v-input__append,.v-inline-fields--container-compact .v-input__prepend,.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-compact .v-field__append-inner,.v-inline-fields--container-compact .v-field__prepend-inner{padding-bottom:10px!important}.v-inline-fields--container-comfortable .v-input__append,.v-inline-fields--container-comfortable .v-input__prepend,.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{align-items:center!important}.v-inline-fields--container-comfortable .v-field__append-inner,.v-inline-fields--container-comfortable .v-field__prepend-inner{padding-bottom:6px!important}.v-inline-fields--container-default .v-input__append,.v-inline-fields--container-default .v-input__prepend,.v-inline-fields--container-default .v-field__append-inner,.v-inline-fields--container-default .v-field__prepend-inner{align-items:flex-end!important;padding-bottom:0!important}.v-inline-fields--container-default .v-input__append .v-icon,.v-inline-fields--container-default .v-input__prepend .v-icon,.v-inline-fields--container-default .v-field__append-inner .v-icon,.v-inline-fields--container-default .v-field__prepend-inner .v-icon{font-size:calc(var(--v-icon-size-multiplier) * 1.5em)!important}.v-inline-fields--container-default .v-inline-fields--save-fields-container{align-items:flex-end!important}.v-inline-fields--card-container{height:fit-content;min-width:fit-content!important;position:absolute}.v-inline-fields--card-container .v-card{border:1px solid hsla(0,0%,50%,.5)}.v-inline-fields--card-container .v-card .v-card-text{padding:5px 10px}.v-inline-fields--card-container .v-card .v-card-text>div{align-items:center;display:flex}.v-inline-fields--card-container-checkbox .v-card .v-card-text .v-input__append{margin-inline-start:0}.v-inline-fields--save-fields-container{align-items:center;display:flex;height:100%;margin-left:.1rem}.v-inline-fields--boolean-icons{font-size:calc(var(--v-icon-size-multiplier) * 1em)}.v-inline-fields .truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:250px}.v-inline-fields .v-input__append{padding-top:0}[data-v-0716e076] .v-field__field{align-items:flex-end!important}")),document.head.appendChild(i)}}catch(n){console.error("vite-plugin-css-injected-by-js",n)}})();
